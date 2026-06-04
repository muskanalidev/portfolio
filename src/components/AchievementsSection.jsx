import CurvedLoop from "./CurvedLoop";
import CircularGallery from "./CircularGallery";

const galleryItems = [
  {
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=800&q=80",
    text: "Data Science",
  },
  {
    image: "https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?auto=format&fit=crop&w=800&q=80",
    text: "ISRO Space Research",
  },
  {
    image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=800&q=80",
    text: "Artificial Intelligence",
  },
  {
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80",
    text: "Business Intelligence",
  },
  {
    image: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=800&q=80",
    text: "Product Strategy",
  },
  {
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=800&q=80",
    text: "Engineering Projects",
  },
];

export const AchievementsSection = () => {
  return (
    <section id="achievements" className="py-20 px-4 relative overflow-hidden">
      <div className="container mx-auto max-w-6xl relative z-10 flex flex-col items-center">
        
        {/* Title Curved Loop */}
        <div className="w-full max-w-5xl mb-6 overflow-visible">
          <CurvedLoop
            marqueeText="ACHIEVEMENTS ✦ MILESTONES ✦ RECOGNITION ✦ ISRO INTERN ✦ AI & PRODUCT STRATEGY ✦"
            speed={2}
            curveAmount={100}
            direction="left"
            interactive={true}
            className="curved-loop-accent-text"
          />
        </div>

        {/* Dome Gallery Wrapper */}
        <div className="w-full relative h-[450px] md:h-[550px] overflow-hidden rounded-3xl border border-white/5 bg-black/10 backdrop-blur-[2px]">
          <CircularGallery
            items={galleryItems}
            bend={-3}
            textColor="#FFFFFF"
            borderRadius={0.15}
            scrollSpeed={2}
            scrollEase={0.05}
          />
        </div>

      </div>
    </section>
  );
};
