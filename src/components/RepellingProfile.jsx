import { useEffect, useRef, useState } from "react";
import * as THREE from "three";

export const RepellingProfile = ({ imageSrc = "/profile_pointcloud.png" }) => {
  const mountRef = useRef(null);
  const mouseRef = useRef({ x: 0, y: 0, active: false });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const container = mountRef.current;
    if (!container) return;

    // Use fixed dimensions that match our aspect ratio container
    let width = container.offsetWidth || 380;
    let height = container.offsetHeight || 475;

    // Scene setup
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(35, width / height, 0.1, 2000);
    camera.position.z = 360;

    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setClearColor(0x000000, 0);
    container.appendChild(renderer.domElement);

    // Style the canvas to fill the container
    renderer.domElement.style.position = "absolute";
    renderer.domElement.style.inset = "0";
    renderer.domElement.style.width = "100%";
    renderer.domElement.style.height = "100%";

    let points = null;
    let geometry = null;
    let particles = [];
    let positionsArray = null;
    let count = 0;
    const group = new THREE.Group();
    scene.add(group);

    // Load the stippled portrait
    const img = new Image();
    img.crossOrigin = "Anonymous";
    img.src = imageSrc;

    img.onload = () => {
      // Use reasonable sample resolution for detailed image features
      const sampleWidth = 150;
      const sampleHeight = Math.round((img.height / img.width) * sampleWidth);

      const canvas2d = document.createElement("canvas");
      canvas2d.width = sampleWidth;
      canvas2d.height = sampleHeight;
      const ctx = canvas2d.getContext("2d");
      ctx.drawImage(img, 0, 0, sampleWidth, sampleHeight);

      const imgData = ctx.getImageData(0, 0, sampleWidth, sampleHeight);
      const data = imgData.data;

      // Scale factor: map the image pixel grid into 3D space
      const spreadX = 1.25;
      const spreadY = 1.25;
      const depthScale = 8;

      for (let y = 0; y < sampleHeight; y++) {
        for (let x = 0; x < sampleWidth; x++) {
          const idx = (y * sampleWidth + x) * 4;
          const r = data[idx];
          const g = data[idx + 1];
          const b = data[idx + 2];
          const a = data[idx + 3];

          if (a > 50) {
            const brightness = (r + g + b) / 3;
            const px = (x - sampleWidth / 2) * spreadX;
            const py = -(y - sampleHeight / 2) * spreadY;
            // Keep the portrait mostly flat so facial proportions stay natural.
            const pz = ((brightness - 128) / 255) * depthScale;

            particles.push({
              x: px, y: py, z: pz,
              baseX: px, baseY: py, baseZ: pz,
              r: Math.min(1, r / 255 * 1.25 + 0.06),
              g: Math.min(1, g / 255 * 1.18 + 0.05),
              b: Math.min(1, b / 255 * 1.12 + 0.04),
              vx: 0, vy: 0, vz: 0,
              driftAngle: Math.random() * Math.PI * 2,
              driftSpeed: 0.005 + Math.random() * 0.01,
              driftRadius: 0.1 + Math.random() * 0.3
            });
          }
        }
      }

      count = particles.length;

      positionsArray = new Float32Array(count * 3);
      const colorsArray = new Float32Array(count * 3);
      for (let i = 0; i < count; i++) {
        positionsArray[i * 3] = particles[i].x;
        positionsArray[i * 3 + 1] = particles[i].y;
        positionsArray[i * 3 + 2] = particles[i].z;

        colorsArray[i * 3] = particles[i].r;
        colorsArray[i * 3 + 1] = particles[i].g;
        colorsArray[i * 3 + 2] = particles[i].b;
      }

      geometry = new THREE.BufferGeometry();
      geometry.setAttribute("position", new THREE.BufferAttribute(positionsArray, 3));
      geometry.setAttribute("color", new THREE.BufferAttribute(colorsArray, 3));

      // Soft circular particle texture
      const texCanvas = document.createElement("canvas");
      texCanvas.width = 32;
      texCanvas.height = 32;
      const tCtx = texCanvas.getContext("2d");
      const grad = tCtx.createRadialGradient(16, 16, 0, 16, 16, 16);
      grad.addColorStop(0, "rgba(255,255,255,1)");
      grad.addColorStop(0.4, "rgba(255,255,255,0.6)");
      grad.addColorStop(1, "rgba(255,255,255,0)");
      tCtx.fillStyle = grad;
      tCtx.fillRect(0, 0, 32, 32);
      const circleTexture = new THREE.CanvasTexture(texCanvas);

      const material = new THREE.PointsMaterial({
        vertexColors: true,
        size: 2.35,
        map: circleTexture,
        transparent: true,
        alphaTest: 0.01,
        depthWrite: false,
        opacity: 0.9,
        blending: THREE.NormalBlending,
        sizeAttenuation: true
      });

      points = new THREE.Points(geometry, material);
      group.add(points);
      setLoading(false);
    };

    img.onerror = () => {
      console.error(`Failed to load image: ${imageSrc}`);
      setLoading(false);
    };

    // Physics constants
    const springStrength = 0.035;
    const friction = 0.85;
    const repelRadius = 40;
    const repelStrength = 3.5;

    let raf;

    const tick = () => {
      // Smooth rotation from mouse
      if (group) {
        const targetRotY = mouseRef.current.x * 0.16;
        const targetRotX = -mouseRef.current.y * 0.1;
        group.rotation.y += (targetRotY - group.rotation.y) * 0.06;
        group.rotation.x += (targetRotX - group.rotation.x) * 0.06;
      }

      // Physics update
      if (points && geometry && count > 0) {
        const positions = geometry.attributes.position.array;

        // Compute mouse ray into 3D space (project to Z=0 plane in group space)
        let mouse3D = null;
        if (mouseRef.current.active) {
          const ndcMouse = new THREE.Vector3(
            mouseRef.current.x,
            mouseRef.current.y,
            0.5
          );
          ndcMouse.unproject(camera);
          const dir = ndcMouse.sub(camera.position).normalize();
          const t = -camera.position.z / dir.z;
          mouse3D = new THREE.Vector3().copy(camera.position).add(dir.multiplyScalar(t));
          group.worldToLocal(mouse3D);
        }

        for (let i = 0; i < count; i++) {
          const p = particles[i];
          const ix = i * 3;
          const px = positions[ix];
          const py = positions[ix + 1];
          const pz = positions[ix + 2];

          // Organic drift
          p.driftAngle += p.driftSpeed;
          const driftX = p.baseX + Math.cos(p.driftAngle) * p.driftRadius;
          const driftY = p.baseY + Math.sin(p.driftAngle) * p.driftRadius;

          // Spring return
          p.vx += (driftX - px) * springStrength;
          p.vy += (driftY - py) * springStrength;
          p.vz += (p.baseZ - pz) * springStrength;

      // Pointer repulsion
          if (mouse3D) {
            const dx = px - mouse3D.x;
            const dy = py - mouse3D.y;
            const dz = pz - mouse3D.z;
            const dist = Math.sqrt(dx * dx + dy * dy + dz * dz);
            if (dist < repelRadius && dist > 0) {
              const force = ((repelRadius - dist) / repelRadius) * repelStrength;
              p.vx += (dx / dist) * force;
              p.vy += (dy / dist) * force;
              p.vz += (dz / dist) * force;
            }
          }

          p.vx *= friction;
          p.vy *= friction;
          p.vz *= friction;

          positions[ix] = px + p.vx;
          positions[ix + 1] = py + p.vy;
          positions[ix + 2] = pz + p.vz;
        }

        geometry.attributes.position.needsUpdate = true;
      }

      renderer.render(scene, camera);
      raf = requestAnimationFrame(tick);
    };

    tick();

    const updatePointerPosition = (clientX, clientY) => {
      const rect = container.getBoundingClientRect();
      mouseRef.current.x = ((clientX - rect.left) / rect.width) * 2 - 1;
      mouseRef.current.y = -((clientY - rect.top) / rect.height) * 2 + 1;
      mouseRef.current.active = true;
    };

    const onPointerMove = (e) => {
      updatePointerPosition(e.clientX, e.clientY);
    };

    const onTouchMove = (e) => {
      const touch = e.touches[0];
      if (!touch) return;
      updatePointerPosition(touch.clientX, touch.clientY);
    };

    const clearPointer = () => {
      mouseRef.current.x = 0;
      mouseRef.current.y = 0;
      mouseRef.current.active = false;
    };

    container.addEventListener("pointermove", onPointerMove);
    container.addEventListener("pointerleave", clearPointer);
    container.addEventListener("pointercancel", clearPointer);
    container.addEventListener("touchstart", onTouchMove, { passive: true });
    container.addEventListener("touchmove", onTouchMove, { passive: true });
    container.addEventListener("touchend", clearPointer);
    container.addEventListener("touchcancel", clearPointer);

    // Resize handler
    const onResize = () => {
      width = container.offsetWidth;
      height = container.offsetHeight;
      if (width > 0 && height > 0) {
        renderer.setSize(width, height);
        camera.aspect = width / height;
        camera.updateProjectionMatrix();
      }
    };
    window.addEventListener("resize", onResize);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", onResize);
      container.removeEventListener("pointermove", onPointerMove);
      container.removeEventListener("pointerleave", clearPointer);
      container.removeEventListener("pointercancel", clearPointer);
      container.removeEventListener("touchstart", onTouchMove);
      container.removeEventListener("touchmove", onTouchMove);
      container.removeEventListener("touchend", clearPointer);
      container.removeEventListener("touchcancel", clearPointer);
      if (renderer.domElement && renderer.domElement.parentNode) {
        renderer.domElement.parentNode.removeChild(renderer.domElement);
      }
      renderer.dispose();
      if (geometry) geometry.dispose();
    };
  }, [imageSrc]);

  return (
    <div
      ref={mountRef}
      className="relative w-full max-w-md overflow-hidden select-none"
      style={{ aspectRatio: "4 / 5", touchAction: "pan-y" }}
    >
      {loading && (
        <div className="absolute inset-0 flex items-center justify-center text-muted-foreground/60 text-sm z-30">
          Loading 3D portrait…
        </div>
      )}
    </div>
  );
};
