import { Camera, Car, Github, Instagram, Linkedin, PenTool, Sparkles, Volleyball, X, Youtube } from "lucide-react";
import { useMemo, useState } from "react";
import GlassIcons from "./GlassIcons";
import Stack from "./Stack";

const socialLinks = [
  { name: "instagram", href: "https://www.instagram.com/muskan4li/", icon: Instagram },
  { name: "linkedin", href: "https://www.linkedin.com/in/muskanali1/", icon: Linkedin },
  { name: "youtube", href: "https://www.youtube.com/@muskanalis", icon: Youtube },
  { name: "github", href: "https://github.com/itsmuskanali", icon: Github },
];

const ChromeSparkIcon = () => (
  <svg
    className="h-7 w-7"
    viewBox="0 0 32 32"
    aria-hidden="true"
    focusable="false"
  >
    <defs>
      <linearGradient id="chromeSparkFill" x1="7" y1="5" x2="24" y2="27">
        <stop offset="0" stopColor="#ffffff" />
        <stop offset="0.35" stopColor="#cfd0dc" />
        <stop offset="0.58" stopColor="#ffffff" />
        <stop offset="1" stopColor="#8d8fa0" />
      </linearGradient>
      <linearGradient id="chromeSparkStroke" x1="8" y1="4" x2="24" y2="28">
        <stop offset="0" stopColor="#ffffff" />
        <stop offset="1" stopColor="#737586" />
      </linearGradient>
    </defs>
    <path
      d="M14.5 2.5C16.15 10.9 20.1 14.85 28.5 16.5C20.1 18.15 16.15 22.1 14.5 30.5C12.85 22.1 8.9 18.15 0.5 16.5C8.9 14.85 12.85 10.9 14.5 2.5Z"
      fill="url(#chromeSparkFill)"
      stroke="url(#chromeSparkStroke)"
      strokeWidth="1.7"
      strokeLinejoin="round"
    />
    <path
      d="M25 4.5C25.55 7.35 26.9 8.7 29.75 9.25C26.9 9.8 25.55 11.15 25 14C24.45 11.15 23.1 9.8 20.25 9.25C23.1 8.7 24.45 7.35 25 4.5Z"
      fill="#ffffff"
      stroke="#bfc0cf"
      strokeWidth="0.8"
      strokeLinejoin="round"
    />
  </svg>
);

const hobbies = [
  { label: "content creation", icon: <Camera className="h-6 w-6 text-white" />, color: "red" },
  { label: "product design", icon: <PenTool className="h-6 w-6 text-white" />, color: "orange" },
  { label: "fashion", icon: <Sparkles className="h-6 w-6 text-white" />, color: "indigo" },
  { label: "dancing", icon: <ChromeSparkIcon />, color: "purple" },
  { label: "sports", icon: <Volleyball className="h-6 w-6 text-white" />, color: "blue" },
  { label: "go karting", icon: <Car className="h-6 w-6 text-white" />, color: "green" },
];

const hobbyImages = [
  { src: "/projects/ChatGPT Image May 14, 2026, 04_38_14 PM.png", alt: "content creation" },
  { src: "/projects/ascii-art.png", alt: "product design" },
  { src: "/projects/IMG_6013_2.jpg", alt: "fashion" },
  { src: "/profile.jpg", alt: "dancing" },
  { src: "/projects/WhatsApp Image 2026-05-22 at 7.11.20 PM.jpeg", alt: "sports" },
  { src: "/projects/ozone.jpg", alt: "go karting" },
];

const stackImagePool = [
  "/projects/ChatGPT Image May 14, 2026, 04_38_14 PM.png",
  "/projects/ascii-art.png",
  "/projects/IMG_6013_2.jpg",
  "/profile.jpg",
  "/projects/WhatsApp Image 2026-05-22 at 7.11.20 PM.jpeg",
  "/projects/ozone.jpg",
];

const enjoys = ["amusement parks", "travelling", "cats", "beaches"];

export const MoreAboutSection = () => {
  const [activeHobby, setActiveHobby] = useState(null);

  const activeCards = useMemo(() => {
    if (!activeHobby) return [];

    const activeIndex = hobbyImages.findIndex((image) => image.alt === activeHobby.label);
    const orderedImages = [
      hobbyImages[activeIndex]?.src,
      ...stackImagePool.slice(activeIndex + 1),
      ...stackImagePool.slice(0, activeIndex),
    ].filter(Boolean);

    return orderedImages.slice(0, 4).map((src, index) => (
      <img
        key={`${activeHobby.label}-${index}`}
        src={src}
        alt={`${activeHobby.label} ${index + 1}`}
        className="card-image"
      />
    ));
  }, [activeHobby]);

  return (
    <section id="more-about" className="py-24 px-4 relative overflow-hidden">
      <div className="container mx-auto max-w-6xl relative z-10">
        <h2 className="text-3xl md:text-4xl font-bold mb-2 text-center text-white">
          more about me
        </h2>
        <p className="text-center text-muted-foreground mb-16 max-w-2xl mx-auto">
          a closer look at the side of me beyond work-
        </p>

        {/* 1. Hobbies Section */}
        <div className="mb-16 flex flex-col items-center">
          <h3 className="text-sm tracking-[0.35em] text-primary/80 mb-6 font-semibold">
            hobbies
          </h3>
          <p className="text-center text-muted-foreground/80 max-w-xl mb-8">
            the things that keep me curious outside work.
          </p>
          <div className="w-full max-w-5xl">
            <div className="flex justify-center overflow-visible">
              <GlassIcons items={hobbies} onItemClick={setActiveHobby} />
            </div>
          </div>

          {activeHobby && (
            <div
              className="fixed inset-0 z-50 flex items-center justify-center bg-background/70 px-4 backdrop-blur-md"
              role="dialog"
              aria-modal="true"
              aria-label={`${activeHobby.label} image stack`}
              onClick={() => setActiveHobby(null)}
            >
              <div
                className="relative flex w-full max-w-xl flex-col items-center gap-6"
                onClick={(event) => event.stopPropagation()}
              >
                <button
                  type="button"
                  aria-label="close stack"
                  className="absolute -right-1 -top-12 rounded-full border border-white/15 bg-card/80 p-2 text-white transition-colors hover:border-primary/60 hover:text-primary"
                  onClick={() => setActiveHobby(null)}
                >
                  <X className="h-5 w-5" />
                </button>
                <div className="text-center">
                  <p className="text-sm tracking-[0.35em] text-primary/80">
                    {activeHobby.label}
                  </p>
                </div>
                <div className="h-[22rem] w-[22rem] max-w-[82vw] sm:h-[28rem] sm:w-[28rem]">
                  <Stack
                    randomRotation={true}
                    sensitivity={150}
                    sendToBackOnClick={true}
                    autoplay={true}
                    autoplayDelay={2600}
                    pauseOnHover={true}
                    mobileClickOnly={true}
                    cards={activeCards}
                  />
                </div>
              </div>
            </div>
          )}
        </div>

        {/* 2. What I Enjoy Section (Second) */}
        <div className="mb-20 flex flex-col items-center">
          <h3 className="text-sm tracking-[0.35em] text-primary/80 mb-8 font-semibold">
            what i enjoy
          </h3>
          <div className="flex flex-wrap justify-center gap-4 max-w-3xl">
            {enjoys.map((item) => (
              <span
                key={item}
                className="px-6 py-3 rounded-full border border-border bg-card/65 text-white font-medium text-sm transition-all duration-300 hover:border-primary/50 hover:bg-card"
              >
                {item}
              </span>
            ))}
          </div>
        </div>

        {/* 3. Contact & Social Media Section (Below, linked to Hero's "say hi!") */}
        <div
          id="contact"
          className="pt-16 border-t border-border/10 flex flex-col items-center"
        >
          <h3 className="text-2xl md:text-3xl font-bold mb-4 text-center text-white">
            let's connect
          </h3>
          <p className="text-center text-muted-foreground max-w-xl mb-10">
            Outside of data science and strategy, I'm always open to brainstorming new ideas, collaborating on tech projects, or simply networking. Reach out to me on my social channels!
          </p>
          <div className="flex flex-wrap justify-center gap-6 w-full max-w-3xl">
            {socialLinks.map((item) => {
              const Icon = item.icon;
              return (
                <a
                  key={item.name}
                  href={item.href}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-3 px-6 py-4 rounded-2xl border border-border bg-card/65 transition-all duration-300 hover:scale-105 hover:border-primary/50 hover:shadow-[0_0_15px_rgba(255,159,252,0.15)]"
                >
                  <span className="rounded-full bg-primary/10 p-3 text-primary">
                    <Icon className="h-6 w-6" />
                  </span>
                  <span className="font-semibold text-white">{item.name}</span>
                </a>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
