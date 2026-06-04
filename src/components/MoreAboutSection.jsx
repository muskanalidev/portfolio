import { Instagram, Linkedin, Youtube, Volleyball, Star, Footprints, Plane, Waves, Cherry } from "lucide-react";
import GlassIcons from "./GlassIcons";

const socialLinks = [
  { name: "Instagram", href: "https://www.instagram.com/muskan4li/", icon: Instagram },
  { name: "LinkedIn", href: "https://www.linkedin.com/in/muskanali1/", icon: Linkedin },
  { name: "Youtube", href: "https://www.youtube.com/@muskanalis", icon: Youtube },
];

const hobbies = [
  { label: "Football", icon: <Volleyball className="h-6 w-6 text-white" />, color: "blue" },
  { label: "Dancing", icon: <Star className="h-6 w-6 text-white" />, color: "purple" },
  { label: "Running", icon: <Footprints className="h-6 w-6 text-white" />, color: "red" },
  { label: "Trading", icon: <Plane className="h-6 w-6 text-white" />, color: "orange" },
  { label: "Swimming", icon: <Waves className="h-6 w-6 text-white" />, color: "indigo" },
  { label: "Badminton", icon: <Cherry className="h-6 w-6 text-white" />, color: "green" },
];

const enjoys = ["Amusement parks", "Travelling", "Cats", "Beaches"];

export const MoreAboutSection = () => {
  return (
    <section id="more-about" className="py-24 px-4 relative overflow-hidden">
      <div className="container mx-auto max-w-6xl relative z-10">
        <h2 className="text-3xl md:text-4xl font-bold mb-2 text-center text-white">
          More About Me
        </h2>
        <p className="text-center text-muted-foreground mb-16 max-w-2xl mx-auto">
          a closer look at the side of me beyond work-
        </p>

        {/* 1. Hobbies Section (At the start, with GlassIcons) */}
        <div className="mb-16 flex flex-col items-center">
          <h3 className="text-sm uppercase tracking-[0.35em] text-primary/80 mb-6 font-semibold">
            Hobbies
          </h3>
          <p className="text-center text-muted-foreground/80 max-w-xl mb-8">
            I like staying active and learning new skills. Hover or tap each icon below to explore my favorite pastimes!
          </p>
          <div className="w-full flex justify-center overflow-visible">
            <GlassIcons items={hobbies} />
          </div>
        </div>

        {/* 2. What I Enjoy Section (Second) */}
        <div className="mb-20 flex flex-col items-center">
          <h3 className="text-sm uppercase tracking-[0.35em] text-primary/80 mb-8 font-semibold">
            What I Enjoy
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
            Let's Connect
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
