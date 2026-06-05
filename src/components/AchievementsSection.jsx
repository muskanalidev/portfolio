import CurvedLoop from "./CurvedLoop";
import CircularGallery from "./CircularGallery";
import muskan1 from "/Users/muskanali/my new website portfolio/src2/assets2/IMG_4892 2.jpg"
import muskaan2 from "/Users/muskanali/my new website portfolio/src2/assets2/IMG_5968.jpg"
import muskaan3 from "/Users/muskanali/my new website portfolio/src2/assets2/PHOTO-2026-02-19-17-12-43.jpg"
import muskaan4 from "/Users/muskanali/my new website portfolio/src2/assets2/WhatsApp Image 2026-04-23 at 11.34.22 AM.jpg"
import muskaan5 from "/Users/muskanali/my new website portfolio/src2/assets2/WhatsApp Image 2026-06-04 at 5.15.32 PM.jpg"
import muskaan6 from "/Users/muskanali/my new website portfolio/src2/assets2/WhatsApp Image 2026-06-04 at 5.18.51 PM.jpg"  

const galleryItems = [
  {
    image: muskan1,
    text: "Data Science",
  },
  {
    image: muskaan2,
    text: "ISRO Space Research",
  },
  {
    image: muskaan3,
    text: "Artificial Intelligence",
  },
  {
    image: muskaan4,
    text: "Business Intelligence",
  },
  {
    image: muskaan5,
    text: "Product Strategy",
  },
  {
    image: muskaan6,
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
            marqueeText="✦ A C H I E V E M E N T S ✦"
            speed={2}
            curveAmount={200}
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
