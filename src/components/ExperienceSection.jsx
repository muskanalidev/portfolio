import { Briefcase, Calendar, MapPin, ArrowRight } from "lucide-react";

const experiences = [
  {
    id: 1,
    company: "ISRO",
    position: "Ozone Trend Analysis & Predictive Modelling",
    duration: "Apr 16, 2026 – Oct 16, 2026 (Ongoing)",
    location: "India",
    description:
      "Analyzing 50 years of satellite-based atmospheric ozone data to identify long-term trends using data science and statistical methods. Building predictive models to forecast ozone layer variations and converting large-scale environmental datasets into actionable insights.",
    achievements: [
      "Processing and cleaning multi-decadal remote sensing datasets",
      "Performing trend analysis and statistical evaluation",
      "Building time-series predictive models for ozone forecasting",
      "Creating visualizations and dashboards to communicate results"
    ],
    technologies: ["Python", "Time-series Analysis", "Data Visualization", "Remote Sensing"],
    type: "Research Internship @ ISRO"
  },
];

export const ExperienceSection = () => {
  return (
    <section id="experience" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          My <span className="text-primary">Experience</span>
        </h2>

        <div className="space-y-8">
          {experiences.map((exp) => (
            <div
              key={exp.id}
              className="group gradient-border rounded-lg p-8 card-hover transition-all duration-300 bg-card/50 backdrop-blur-sm"
            >
              <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                <div className="flex items-start gap-4 mb-4 md:mb-0">
                  <div className="p-3 rounded-full bg-primary/20">
                    <Briefcase className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-semibold text-foreground">
                      {exp.position}
                    </h3>
                    <p className="text-primary font-medium mt-1">{exp.company}</p>
                  </div>
                </div>

                <span className="px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium">
                  {exp.type}
                </span>
              </div>

              <div className="flex flex-col sm:flex-row gap-6 text-sm text-muted-foreground mb-6">
                <div className="flex items-center gap-2">
                  <Calendar className="h-4 w-4" />
                  <span>{exp.duration}</span>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="h-4 w-4" />
                  <span>{exp.location}</span>
                </div>
              </div>

              <p className="text-muted-foreground mb-6 leading-relaxed">
                {exp.description}
              </p>

              <div className="mb-6">
                <h4 className="font-semibold text-foreground mb-3">Key Achievements</h4>
                <ul className="space-y-2">
                  {exp.achievements.map((achievement, idx) => (
                    <li key={idx} className="flex gap-3 text-muted-foreground">
                      <span className="text-primary mt-1">•</span>
                      <span>{achievement}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="flex flex-wrap gap-2">
                {exp.technologies.map((tech, idx) => (
                  <span
                    key={idx}
                    className="px-3 py-1 text-xs font-medium rounded-full bg-primary/10 text-primary border border-primary/20"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="mt-6 flex items-center text-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <span className="text-sm font-medium">Learn more</span>
                <ArrowRight className="h-4 w-4 ml-2" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
