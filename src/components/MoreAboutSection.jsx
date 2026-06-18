import { Github, Instagram, Linkedin, Youtube } from "lucide-react";
import AnimatedHeading from "./AnimatedHeading";
import AnimatedList from "./AnimatedList";
import SplitHeading from "./SplitHeading";

const socialLinks = [
  { name: "instagram", href: "https://www.instagram.com/muskan4li/", icon: Instagram },
  { name: "linkedin", href: "https://www.linkedin.com/in/muskanali1/", icon: Linkedin },
  { name: "youtube", href: "https://www.youtube.com/@muskanalis", icon: Youtube },
  { name: "github", href: "https://github.com/itsmuskanali", icon: Github },
];

const hobbies = [
  "content creation",
  "product design",
  "fashion",
  "dancing",
  "sports",
  "go karting",
];

const enjoys = ["amusement parks", "travelling", "cats", "beaches"];

export const MoreAboutSection = () => {
  return (
    <section id="more-about" className="py-16 px-4 relative overflow-hidden">
      <div className="container mx-auto max-w-6xl relative z-10">
        <AnimatedHeading
          as="h2"
          text="more about me />"
          className="text-xl md:text-2xl font-bold mb-2 text-center text-white"
        />
        <p className="text-center text-muted-foreground mb-7 max-w-2xl mx-auto">
          a closer look at the side of me beyond work-
        </p>

        {/* 1. Hobbies Section */}
        <div className="mb-7 flex flex-col items-center">
          <SplitHeading
            tag="h3"
            text="hobbies"
            delay={16}
            className="hobby-typed-title mb-5"
          />
          <p className="text-center text-muted-foreground/80 max-w-xl mb-7">
            the things that keep me curious outside work.
          </p>
          <AnimatedList
            items={hobbies}
            initialSelectedIndex={-1}
            showGradients={false}
            enableArrowNavigation={false}
            displayScrollbar={false}
            className="hobby-list"
          />
        </div>

        {/* 2. What I Enjoy Section (Second) */}
        <div className="mb-16 flex flex-col items-center">
          <SplitHeading
            tag="h3"
            text="what i enjoy"
            delay={16}
            className="hobby-typed-title mb-6"
          />
          <div className="flex flex-wrap justify-center gap-4 max-w-3xl">
            {enjoys.map((item) => (
              <span
                key={item}
                className="px-5 py-2.5 rounded-full border border-border bg-card/65 text-white font-medium text-sm transition-all duration-300 hover:border-primary/50 hover:bg-card"
              >
                {item}
              </span>
            ))}
          </div>
        </div>

        {/* 3. Contact & Social Media Section (Below, linked to Hero's "say hi!") */}
        <div
          id="contact"
          className="pt-12 border-t border-border/10 flex flex-col items-center"
        >
          <AnimatedHeading
            as="h3"
            text="let's connect />"
            className="text-xl md:text-2xl font-bold mb-4 text-center text-white"
          />
          <p className="text-center text-muted-foreground max-w-xl mb-7">
            I’m always open to discussing analytics, business strategy, technology, and new ideas. Whether it’s a project, an opportunity, or just an interesting conversation, feel free to connect through my social channels.
          </p>
          <div className="flex flex-wrap justify-center gap-4 w-full max-w-3xl">
            {socialLinks.map((item) => {
              const Icon = item.icon;
              return (
                <a
                  key={item.name}
                  href={item.href}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-3 px-4 py-2.5 rounded-2xl border border-border bg-card/65 transition-all duration-300 hover:scale-105 hover:border-primary/50 hover:shadow-[0_0_15px_rgba(255,159,252,0.15)]"
                >
                  <span className="rounded-full bg-primary/10 p-2.5 text-primary">
                    <Icon className="h-5 w-5" />
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
