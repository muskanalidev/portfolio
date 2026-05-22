import { useEffect, useState } from "react";

export const StarBackground = () => {
  const [chromeBands, setChromeBands] = useState([]);

  useEffect(() => {
    generateChromeBands();

    const handleResize = () => {
      generateChromeBands();
    };

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const generateChromeBands = () => {
    const bands = [
      { id: 1, x: 8, y: 12, width: 42, height: 18, opacity: 0.45, blur: 40, rotation: -18 },
      { id: 2, x: 48, y: 8, width: 34, height: 20, opacity: 0.35, blur: 36, rotation: 14 },
      { id: 3, x: 62, y: 36, width: 28, height: 28, opacity: 0.25, blur: 44, rotation: 26 },
      { id: 4, x: 14, y: 62, width: 50, height: 22, opacity: 0.3, blur: 42, rotation: -10 },
      { id: 5, x: 72, y: 68, width: 20, height: 18, opacity: 0.28, blur: 34, rotation: 18 },
    ];

    setChromeBands(bands);
  };

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0 bg-[linear-gradient(135deg,#f9fbff_0%,#d7dde7_24%,#fdfdfd_46%,#b9c1cd_65%,#f4f7fb_100%)]">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.95),transparent_30%),radial-gradient(circle_at_80%_20%,rgba(255,255,255,0.65),transparent_24%),radial-gradient(circle_at_50%_80%,rgba(255,255,255,0.45),transparent_28%)]" />
      <div className="absolute inset-0 bg-[repeating-linear-gradient(115deg,rgba(255,255,255,0.18)_0,rgba(255,255,255,0.18)_2px,transparent_2px,transparent_18px)] opacity-30" />
      {chromeBands.map((band) => (
        <div
          key={band.id}
          className="absolute rounded-full animate-pulse-subtle"
          style={{
            left: band.x + "%",
            top: band.y + "%",
            width: band.width + "%",
            height: band.height + "%",
            opacity: band.opacity,
            filter: `blur(${band.blur}px) saturate(1.3)`,
            transform: `rotate(${band.rotation}deg)`,
            background:
              "linear-gradient(135deg, rgba(255,255,255,0.92) 0%, rgba(180,188,203,0.68) 24%, rgba(255,255,255,0.95) 48%, rgba(148,160,180,0.62) 74%, rgba(255,255,255,0.92) 100%)",
          }}
        />
      ))}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(255,255,255,0.35)_52%,rgba(125,135,150,0.25)_100%)] mix-blend-soft-light" />
    </div>
  );
};
