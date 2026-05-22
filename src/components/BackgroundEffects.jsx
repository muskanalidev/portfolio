import { useEffect, useMemo, useState } from "react";

const sectionParticles = [
  { left: "8%", top: "18%", size: 10, delay: "0s", duration: "8s" },
  { left: "18%", top: "72%", size: 14, delay: "1.2s", duration: "10s" },
  { left: "32%", top: "28%", size: 8, delay: "0.6s", duration: "9s" },
  { left: "46%", top: "64%", size: 12, delay: "1.8s", duration: "11s" },
  { left: "58%", top: "20%", size: 9, delay: "0.3s", duration: "8.5s" },
  { left: "66%", top: "78%", size: 13, delay: "1.5s", duration: "10.5s" },
  { left: "78%", top: "30%", size: 11, delay: "0.9s", duration: "9.5s" },
  { left: "88%", top: "62%", size: 7, delay: "1.1s", duration: "7.5s" },
];

export const GhostCursorBackground = () => {
  const [cursor, setCursor] = useState({ x: 50, y: 35 });

  useEffect(() => {
    const handlePointerMove = (event) => {
      setCursor({ x: event.clientX, y: event.clientY });
    };

    window.addEventListener("pointermove", handlePointerMove);
    return () => window.removeEventListener("pointermove", handlePointerMove);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden bg-[linear-gradient(135deg,#f9fbff_0%,#d7dde6_24%,#fdfdfd_46%,#b9c1cd_68%,#f4f7fb_100%)]">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.95),transparent_26%),radial-gradient(circle_at_80%_20%,rgba(255,255,255,0.35),transparent_22%),radial-gradient(circle_at_50%_82%,rgba(148,163,184,0.18),transparent_28%)]" />
      <div
        className="absolute -translate-x-1/2 -translate-y-1/2 rounded-full blur-3xl transition-[left,top] duration-200 ease-out"
        style={{
          left: `${cursor.x}px`,
          top: `${cursor.y}px`,
          width: "34rem",
          height: "34rem",
          background:
            "radial-gradient(circle, rgba(125,211,252,0.22) 0%, rgba(96,165,250,0.12) 24%, rgba(15,23,42,0) 70%)",
        }}
      />
      <div className="absolute inset-0 bg-[repeating-linear-gradient(90deg,rgba(255,255,255,0.08)_0,rgba(255,255,255,0.08)_1px,transparent_1px,transparent_72px),repeating-linear-gradient(0deg,rgba(255,255,255,0.08)_0,rgba(255,255,255,0.08)_1px,transparent_1px,transparent_72px)] opacity-35" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(255,255,255,0.22)_56%,rgba(125,135,150,0.18)_100%)] mix-blend-soft-light" />
    </div>
  );
};

export const FaultyTerminalBackground = () => {
  const bars = useMemo(
    () => [
      { top: "10%", left: "-8%", width: "60%", delay: "0s" },
      { top: "28%", left: "20%", width: "52%", delay: "1.2s" },
      { top: "46%", left: "12%", width: "68%", delay: "2s" },
      { top: "66%", left: "26%", width: "50%", delay: "1.5s" },
    ],
    []
  );

  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(14,165,233,0.12),transparent_34%),radial-gradient(circle_at_80%_20%,rgba(244,63,94,0.12),transparent_26%),linear-gradient(180deg,rgba(2,6,23,0.92),rgba(2,6,23,0.82))]" />
      <div className="absolute inset-0 bg-[repeating-linear-gradient(180deg,rgba(255,255,255,0.04)_0,rgba(255,255,255,0.04)_1px,transparent_1px,transparent_4px)] opacity-30" />
      <div className="absolute inset-0 bg-[linear-gradient(90deg,transparent_0%,rgba(34,197,94,0.08)_48%,rgba(34,197,94,0.18)_50%,rgba(34,197,94,0.08)_52%,transparent_100%)] animate-[terminal-scan_7s_linear_infinite]" />
      <div className="absolute inset-0 bg-[linear-gradient(135deg,transparent_0%,rgba(59,130,246,0.08)_35%,transparent_70%)] opacity-60" />
      {bars.map((bar, index) => (
        <div
          key={index}
          className="absolute h-1 rounded-full blur-[1px] animate-pulse"
          style={{
            top: bar.top,
            left: bar.left,
            width: bar.width,
            animationDelay: bar.delay,
            background:
              "linear-gradient(90deg, rgba(34,197,94,0), rgba(34,197,94,0.85), rgba(34,197,94,0))",
          }}
        />
      ))}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_24%,rgba(2,6,23,0.55)_100%)]" />
    </div>
  );
};

export const DomeGalleryBackground = () => {
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(251,191,36,0.16),transparent_28%),radial-gradient(circle_at_50%_80%,rgba(59,130,246,0.12),transparent_26%),linear-gradient(180deg,rgba(7,10,20,0.94),rgba(15,23,42,0.9))]" />
      <div className="absolute left-1/2 top-[22%] h-[38rem] w-[38rem] -translate-x-1/2 rounded-full border border-white/12 blur-[0.5px] opacity-60" />
      <div className="absolute left-1/2 top-[30%] h-[28rem] w-[28rem] -translate-x-1/2 rounded-full border border-white/10 opacity-55" />
      <div className="absolute left-1/2 top-[38%] h-[18rem] w-[18rem] -translate-x-1/2 rounded-full border border-white/10 opacity-45" />
      <div className="absolute inset-x-0 bottom-0 h-24 bg-[linear-gradient(180deg,transparent,rgba(15,23,42,0.8))]" />
    </div>
  );
};

export const GridMotionBackground = () => {
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(250,250,250,0.98),rgba(226,232,240,0.92))]" />
      <div className="absolute inset-0 bg-[repeating-linear-gradient(0deg,rgba(255,255,255,0.09)_0,rgba(255,255,255,0.09)_1px,transparent_1px,transparent_48px),repeating-linear-gradient(90deg,rgba(255,255,255,0.09)_0,rgba(255,255,255,0.09)_1px,transparent_1px,transparent_48px)] opacity-30 animate-[grid-drift_20s_linear_infinite]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(56,189,248,0.16),transparent_24%),radial-gradient(circle_at_80%_30%,rgba(244,114,182,0.12),transparent_24%),radial-gradient(circle_at_50%_80%,rgba(59,130,246,0.12),transparent_28%)]" />
      <div className="absolute inset-0 bg-[linear-gradient(135deg,transparent_0%,rgba(255,255,255,0.22)_50%,transparent_100%)] mix-blend-soft-light" />
    </div>
  );
};

export const ParticleBackground = () => {
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(15,23,42,0.94),rgba(30,41,59,0.88))]" />
      {sectionParticles.map((particle, index) => (
        <span
          key={index}
          className="absolute rounded-full bg-white/80 blur-[0.2px] animate-float"
          style={{
            left: particle.left,
            top: particle.top,
            width: `${particle.size}px`,
            height: `${particle.size}px`,
            animationDelay: particle.delay,
            animationDuration: particle.duration,
            boxShadow: "0 0 18px rgba(255,255,255,0.4)",
          }}
        />
      ))}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_28%,rgba(15,23,42,0.58)_100%)]" />
    </div>
  );
};
