import { DomeGalleryBackground } from "@/components/BackgroundEffects";

const achievements = [
  { id: 1, title: "Award / milestone", caption: "Upload photo here" },
  { id: 2, title: "Competition / event", caption: "Upload photo here" },
  { id: 3, title: "Certificate / highlight", caption: "Upload photo here" },
  { id: 4, title: "Feature / recognition", caption: "Upload photo here" },
  { id: 5, title: "Portrait moment", caption: "Upload photo here" },
];

export const AchievementsSection = () => {
  return (
    <section id="achievements" className="py-24 px-4 relative overflow-hidden">
      <DomeGalleryBackground />
      <div className="container mx-auto max-w-6xl relative z-10">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center text-white">
          <span className="text-primary">Achievements</span>
        </h2>
        <p className="text-center text-white/75 mb-12 max-w-2xl mx-auto">
          This space is reserved for a dome gallery. Upload the final pictures
          here once they are ready and the layout will hold them in a curved,
          display-style arrangement.
        </p>

        <div className="relative mx-auto hidden h-[34rem] max-w-5xl lg:block">
          {achievements.map((item, index) => {
            const positions = [
              { left: "6%", top: "56%", rotate: "-18deg", size: "17rem", zIndex: 20 },
              { left: "22%", top: "34%", rotate: "-9deg", size: "17rem", zIndex: 30 },
              { left: "50%", top: "18%", rotate: "0deg", size: "18rem", zIndex: 40 },
              { left: "58%", top: "34%", rotate: "9deg", size: "17rem", zIndex: 30 },
              { left: "74%", top: "56%", rotate: "18deg", size: "17rem", zIndex: 20 },
            ];
            const position = positions[index];

            return (
              <div
                key={item.id}
                className="absolute rounded-[2rem] border border-white/15 bg-white/10 p-4 shadow-2xl backdrop-blur-md"
                style={{
                  left: position.left,
                  top: position.top,
                  width: position.size,
                  height: position.size,
                  transform: `translateX(-50%) rotate(${position.rotate})`,
                  zIndex: position.zIndex,
                }}
              >
                <div className="flex h-full flex-col overflow-hidden rounded-[1.5rem] border border-white/10 bg-[linear-gradient(180deg,rgba(15,23,42,0.45),rgba(255,255,255,0.08))] p-4 text-left">
                  <div className="flex-1 rounded-[1.25rem] border border-dashed border-white/20 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.16),rgba(255,255,255,0.03))] flex items-center justify-center text-center">
                    <div>
                      <p className="text-sm uppercase tracking-[0.35em] text-white/70">
                        {item.caption}
                      </p>
                      <p className="mt-3 text-lg font-semibold text-white">
                        {item.title}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="grid gap-4 lg:hidden sm:grid-cols-2">
          {achievements.map((item) => (
            <div
              key={item.id}
              className="rounded-2xl border border-white/15 bg-white/10 p-4 text-white shadow-xl backdrop-blur-md"
            >
              <div className="aspect-[4/3] rounded-xl border border-dashed border-white/20 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.16),rgba(255,255,255,0.03))]" />
              <p className="mt-4 text-sm uppercase tracking-[0.3em] text-white/65">
                {item.caption}
              </p>
              <p className="mt-2 font-semibold">{item.title}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
