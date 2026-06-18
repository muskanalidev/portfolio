import CircularGallery from "./CircularGallery";
import AnimatedHeading from "./AnimatedHeading";
import muskan1 from "../../src2/assets2/IMG_4892 2.jpg";
import muskaan2 from "../../src2/assets2/IMG_5968.jpg";
import muskaan3 from "../../src2/assets2/PHOTO-2026-02-19-17-12-43.jpg";
import muskaan4 from "../../src2/assets2/WhatsApp Image 2026-04-23 at 11.34.22 AM.jpg";
import muskaan5 from "../../src2/assets2/WhatsApp Image 2026-06-04 at 5.15.32 PM.jpg";
import muskaan6 from "../../src2/assets2/WhatsApp Image 2026-06-04 at 5.18.51 PM.jpg";

const galleryItems = [
  {
    image: muskan1,
    text: "data science",
  },
  {
    image: muskaan2,
    text: "ISRO space research",
  },
  {
    image: muskaan3,
    text: "artificial intelligence",
  },
  {
    image: muskaan4,
    text: "business intelligence",
  },
  {
    image: muskaan5,
    text: "product strategy",
  },
  {
    image: muskaan6,
    text: "engineering projects",
  },
  {
    image: "/projects/achievement-img-8780.jpg",
    text: "medals & competitions",
  },
  {
    image: "/projects/achievement-img-5954.jpg",
    text: "ISRO internship",
  },
  {
    image: "/projects/achievement-img-6002.jpg",
    text: "atmospheric research",
  },
];

export const AchievementsSection = () => {
  return (
    <section id="achievements" className="py-16 px-4 relative overflow-hidden">
      <div className="container mx-auto max-w-6xl relative z-10 flex flex-col items-center">
        
        <AnimatedHeading
          as="h2"
          text="achievements />"
          className="text-xl md:text-2xl font-bold mb-6 text-center text-white"
        />

        {/* Dome Gallery Wrapper */}
        <div className="w-full relative h-[400px] md:h-[500px] overflow-hidden rounded-2xl border border-white/5 bg-black/10 backdrop-blur-[2px]">
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
