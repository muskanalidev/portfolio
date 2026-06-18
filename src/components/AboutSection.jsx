import { useEffect, useRef, useState } from "react";
import AnimatedHeading from "./AnimatedHeading";

export const AboutSection = () => {
  const revealRef = useRef(null);
  const [isRevealed, setIsRevealed] = useState(false);

  useEffect(() => {
    const element = revealRef.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsRevealed(true);
          observer.disconnect();
        }
      },
      { threshold: 0.25, rootMargin: "0px 0px -12% 0px" }
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="about" className="py-16 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <AnimatedHeading
          as="h2"
          text="about me />"
          className="text-xl md:text-2xl font-bold mb-6 text-left"
        />

        <div ref={revealRef} className="flex flex-col md:flex-row items-start gap-8 max-w-5xl mx-auto">
          <div className="w-full md:w-2/3 space-y-5 text-left order-2 md:order-1">
            <div className="space-y-4">
              <p className="text-muted-foreground">
              Entering final year at <a href="https://woxsen.edu.in/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Woxsen University</a> and currently interning at <a href="https://www.isro.gov.in/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">ISRO</a> where I’m using data and analytics (plus way too many tabs open at once) to drive smarter business and product decisions.
            </p>

            <div
              className={`about-slow-reveal bg-card p-4 rounded-2xl border border-border shadow-sm ${
                isRevealed ? "is-visible" : ""
              }`}
            >
              <h4 className="font-semibold text-base mb-3 text-white">
                skills I've picked up -
              </h4>
              <ul className="grid grid-cols-2 sm:grid-cols-3 gap-3 text-muted-foreground">
                <li>SQL</li>
                <li>Power BI</li>
                <li>data analytics</li>
                <li>product strategy</li>
                <li>business intelligence</li>
                <li>Python</li>
              </ul>
            </div>

            <p className="text-muted-foreground">
              Outside work, I’m chronically making content, playing football,
              chasing beach sunsets, and filling my camera roll with way too
              many photos.
            </p>
            </div>
          </div>

          {/* Profile Image to the right with hover pop and blended background */}
          <div
            className={`about-photo-reveal w-full md:w-1/3 flex justify-center order-1 md:order-2 ${
              isRevealed ? "is-visible" : ""
            }`}
          >
            <img 
              src="/projects/IMG_6013_2.jpg" 
              alt="Muskan Ali Profile" 
                className="w-56 md:w-64 h-auto rounded-2xl shadow-xl transition-transform duration-300 hover:scale-[1.08]"
              style={{ mixBlendMode: 'lighten' }}
            />
          </div>
        </div>
      </div>
    </section>
  );
};
