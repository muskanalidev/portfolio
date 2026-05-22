import React from "react";

const galleryItems = [
  { id: 1, title: "Football medals", subtitle: "Athlete identity" },
  { id: 2, title: "Cats", subtitle: "Portraits" },
  { id: 3, title: "Beaches", subtitle: "Sunsets" },
  { id: 4, title: "Pilot dream", subtitle: "Aviation aspirations" },
];

export const BeyondSection = () => {
  return (
    <section id="beyond" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center">
          Beyond <span className="text-primary">Work</span>
        </h2>

        <p className="text-center text-muted-foreground mb-8 max-w-2xl mx-auto">
          Open for collaborations — a curated identity gallery highlighting
          athletic achievements, travel photography, and creative projects.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {galleryItems.map((g) => (
            <div key={g.id} className="bg-card p-6 rounded-lg text-center">
              <div className="h-40 bg-secondary/20 rounded-md mb-4 flex items-center justify-center">
                <span className="text-muted-foreground">{g.title}</span>
              </div>
              <h4 className="font-semibold">{g.title}</h4>
              <p className="text-sm text-muted-foreground">{g.subtitle}</p>
            </div>
          ))}
        </div>

        <div className="text-center mt-8">
          <a
            href="https://reactbits.dev/components/dome-gallery"
            target="_blank"
            rel="noreferrer"
            className="px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors"
          >
            View gallery component (Dome Gallery)
          </a>
        </div>
      </div>
    </section>
  );
};
