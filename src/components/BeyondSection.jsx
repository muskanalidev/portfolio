import React from "react";

const galleryItems = [
  { id: 1, title: "football medals", subtitle: "athlete identity" },
  { id: 2, title: "cats", subtitle: "portraits" },
  { id: 3, title: "beaches", subtitle: "sunsets" },
  { id: 4, title: "pilot dream", subtitle: "aviation aspirations" },
];

export const BeyondSection = () => {
  return (
    <section id="beyond" className="py-16 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-xl md:text-2xl font-bold mb-5 text-center">
          beyond <span className="text-primary">work</span>
        </h2>

        <p className="text-center text-muted-foreground mb-7 max-w-2xl mx-auto">
          Open for collaborations — a curated identity gallery highlighting
          athletic achievements, travel photography, and creative projects.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {galleryItems.map((g) => (
            <div key={g.id} className="bg-card p-4 rounded-lg text-center">
              <div className="h-36 bg-secondary/20 rounded-md mb-4 flex items-center justify-center">
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
            className="px-4 py-2 rounded-full border border-primary text-primary text-sm hover:bg-primary/10 transition-colors"
          >
            view gallery component (dome gallery)
          </a>
        </div>
      </div>
    </section>
  );
};
