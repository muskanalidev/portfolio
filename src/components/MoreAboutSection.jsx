import { Facebook, Instagram, Linkedin, volleyball, star, footprints, Plane, Waves, cherry } from "lucide-react";

const socialLinks = [
  { name: "Instagram", href: "https://www.instagram.com/muskan4li/", icon: Instagram },
  { name: "LinkedIn", href: "https://www.linkedin.com/in/muskanali1/", icon: Linkedin },
  { name: "Youtube", href: "https://www.youtube.com/@muskanalis", icon: Youtube },
];

const hobbies = [
  { name: "Football", icon: volleyball },
  { name: "Dancing", icon: star },
  { name: "Running", icon: footprints },
  { name: "Learn trading", icon: Plane },
  { name: "Swimming", icon: Waves },
  { name: "Badminton", icon: cherry },
];

const enjoys = ["Amusement parks", "Travelling", "Cats", "Beaches"];

export const MoreAboutSection = () => {
  return (
    <section id="more-about" className="py-24 px-4 relative overflow-hidden">
      <div className="container mx-auto max-w-6xl relative z-10">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          More <span className="text-primary">About Me</span>
        </h2>
        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          a closer look at the side of me beyond work-
        </p>

        <div className="grid gap-8 lg:grid-cols-3">
          <div className="rounded-3xl border border-border bg-card/85 p-6 shadow-xl backdrop-blur-sm">
            <p className="text-sm uppercase tracking-[0.35em] text-primary/80">social media</p>
            <div className="mt-6 space-y-4">
              {socialLinks.map((item) => {
                const Icon = item.icon;
                return (
                  <a
                    key={item.name}
                    href={item.href}
                    target={item.href.startsWith("http") ? "_blank" : undefined}
                    rel={item.href.startsWith("http") ? "noreferrer" : undefined}
                    className="flex items-center gap-4 rounded-2xl border border-border bg-background/70 px-4 py-3 transition-colors hover:border-primary/50"
                  >
                    <span className="rounded-full bg-primary/10 p-3 text-primary">
                      <Icon className="h-5 w-5" />
                    </span>
                    <span className="font-medium">{item.name}</span>
                  </a>
                );
              })}
            </div>
          </div>

          <div className="rounded-3xl border border-border bg-card/85 p-6 shadow-xl backdrop-blur-sm lg:col-span-1">
            <p className="text-sm uppercase tracking-[0.35em] text-primary/80">Hobbies</p>
            <p className="mt-4 text-muted-foreground">
              i like staying active and learning new things, and i plan to add
              pictures for each of these hobbies once the site is ready.
            </p>
            <div className="mt-6 grid grid-cols-2 gap-3">
              {hobbies.map((item) => {
                const Icon = item.icon;
                return (
                  <div
                    key={item.name}
                    className="rounded-2xl border border-border bg-background/70 p-4 text-center"
                  >
                    <div className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
                      <Icon className="h-5 w-5" />
                    </div>
                    <p className="text-sm font-medium">{item.name}</p>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="rounded-3xl border border-border bg-card/85 p-6 shadow-xl backdrop-blur-sm">
            <p className="text-sm uppercase tracking-[0.35em] text-primary/80">What I enjoy</p>
            <ul className="mt-6 space-y-4 text-muted-foreground">
              {enjoys.map((item) => (
                <li key={item} className="rounded-2xl border border-border bg-background/70 px-4 py-3">
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};
