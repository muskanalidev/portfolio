import { ArrowDown } from "lucide-react";

export const HeroSection = () => {
  return (
    <section
      id="hero"
      className="relative min-h-screen px-4 pt-28 pb-20"
    >
      <div className="container mx-auto max-w-6xl relative z-10 grid items-center gap-12 lg:grid-cols-[0.95fr_1.05fr]">
        <div className="order-2 lg:order-1 flex justify-center lg:justify-start">
          <div className="relative w-full max-w-md">
            <div className="absolute inset-0 rounded-[2rem] bg-primary/15 blur-3xl" />
            <div className="relative overflow-hidden rounded-[2rem] border border-border bg-card/70 p-5 shadow-2xl backdrop-blur-sm">
              <div className="aspect-[4/5] rounded-[1.5rem] border border-dashed border-primary/25 bg-[linear-gradient(135deg,rgba(255,255,255,0.9),rgba(203,213,225,0.55))] flex flex-col items-center justify-center gap-4 text-center p-6 mix-blend-multiply">
                <div className="w-full h-full rounded-[1.5rem] overflow-hidden flex items-center justify-center relative">
                  <img 
                    src="/profile.png" 
                    alt="Muskan Profile" 
                    className="w-full h-full object-cover mix-blend-multiply" 
                  />
                  <div className="absolute inset-0 bg-transparent" style={{ mixBlendMode: 'color' }}></div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="order-1 lg:order-2 text-center lg:text-left space-y-8">
          <div className="space-y-4">
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight leading-tight opacity-0 animate-fade-in-delay-1">
              Hi, Muskan here.
            </h1>

            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto lg:mx-0 opacity-0 animate-fade-in-delay-2">
              I work with analytics, business intelligence, AI, and product strategy take up most of my workflow and probably more brain space than they should.
            </p>
          </div>

          <div className="flex flex-wrap justify-center lg:justify-start gap-4 opacity-0 animate-fade-in-delay-4">
            <a href="#projects" className="cosmic-button">
              View Projects
            </a>
            <a
              href="#more-about"
              className="px-6 py-2 rounded-full border border-border bg-background/70 backdrop-blur-sm hover:border-primary/60 transition-colors"
            >
              More About Me
            </a>
          </div>

          <div className="flex justify-center lg:justify-start pt-3 animate-fade-in-delay-4">
            <a
              href="#about"
              className="inline-flex flex-col items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              <span>Scroll</span>
              <ArrowDown className="h-5 w-5 text-primary animate-bounce" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
