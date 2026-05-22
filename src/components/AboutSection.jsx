export const AboutSection = () => {
  return (
    <section id="about" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">About Me</h2>

        <div className="max-w-4xl mx-auto space-y-8 text-left">
          <div className="space-y-4">
            <p className="text-muted-foreground">
              Entering final year at <a href="https://woxsen.edu.in/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Woxsen University</a> and currently interning at <a href="https://www.isro.gov.in/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">ISRO</a> where I’m using data and analytics (plus way too many tabs open at once) to drive smarter business and product decisions.
            </p>

            <div className="bg-card p-6 rounded-2xl border border-border shadow-sm">
              <h4 className="font-semibold text-lg mb-3">
                Skills I’ve picked up
              </h4>
              <ul className="grid grid-cols-2 sm:grid-cols-3 gap-3 text-muted-foreground">
                <li>SQL</li>
                <li>Power BI</li>
                <li>Data Analytics</li>
                <li>Product Strategy</li>
                <li>Business Intelligence</li>
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
      </div>
    </section>
  );
};
