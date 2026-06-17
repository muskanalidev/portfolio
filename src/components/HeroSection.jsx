import { ArrowDown } from "lucide-react";
import { RepellingProfile } from "./RepellingProfile";

export const HeroSection = () => {
  return (
    <section
      id="hero"
      className="relative min-h-screen px-4 pt-28 pb-20"
    >
      <div className="container mx-auto max-w-6xl relative z-10 grid items-center gap-12 lg:grid-cols-[0.95fr_1.05fr]">
        <div className="order-1 lg:order-1 flex justify-center lg:justify-start">
          <RepellingProfile imageSrc="/profile.jpg" />
        </div>

        <div className="order-2 lg:order-2 text-center lg:text-left space-y-8">
          <div className="space-y-4">
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight leading-tight opacity-0 animate-fade-in-delay-1">
              hi, <span className="text-[#FF9FFC]">muskan</span> here.
            </h1>

            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto lg:mx-0 opacity-0 animate-fade-in-delay-2">
              Engineering student currently interning in data science at ISRO. Outside of that, I work across analytics, business intelligence, AI & product strategy that takes up the rest of my workflow and probably more brain space than they should.
            </p>
          </div>

          <div className="flex flex-wrap justify-center lg:justify-start gap-4 opacity-0 animate-fade-in-delay-4">
            <a href="#contact" className="cosmic-button">
              say hi!
            </a>
          </div>

          <div className="flex justify-center lg:justify-start pt-3 animate-fade-in-delay-4">
            <a
              href="#about"
              className="inline-flex flex-col items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              <span>scroll</span>
              <ArrowDown className="h-5 w-5 text-primary animate-bounce" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
