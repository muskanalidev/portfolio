import { Briefcase, Calendar, MapPin, ArrowRight } from "lucide-react";
import AnimatedHeading from "./AnimatedHeading";
import SplitHeading from "./SplitHeading";

const experiences = [
  {
    id: 1,
    company: "ISRO",
    position: "ozone trend analysis & predictive modelling",
    duration: "Apr 16, 2026 – Oct 16, 2026 (ongoing)",
    location: "India",
    description:
      "Analyzing 50 years of satellite-based atmospheric ozone data to identify long-term trends using data science and statistical methods. Building predictive models to forecast ozone layer variations and converting large-scale environmental datasets into actionable insights.",
    achievements: [
      "processing and cleaning multi-decadal remote sensing datasets",
      "performing trend analysis and statistical evaluation",
      "building time-series predictive models for ozone forecasting",
      "creating visualizations and dashboards to communicate results"
    ],
    technologies: ["Python", "time-series analysis", "data visualization", "remote sensing"],
    type: "research internship @ ISRO"
  },
];

export const ExperienceSection = () => {
  return (
    <section id="experience" className="py-16 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <AnimatedHeading
          as="h2"
          text="my experience"
          className="text-xl md:text-2xl font-bold mb-6 text-center"
        />

        <div className="space-y-6">
          {experiences.map((exp) => (
            <div
              key={exp.id}
              className="group gradient-border rounded-lg p-5 card-hover transition-all duration-300 bg-card/50 backdrop-blur-sm"
            >
              <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                <div className="flex items-start gap-4 mb-4 md:mb-0">
                  <div className="p-2.5 rounded-full bg-primary/20">
                    <Briefcase className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <SplitHeading
                      tag="h3"
                      text={exp.position}
                      delay={14}
                      className="text-base md:text-lg font-semibold text-foreground"
                      textAlign="left"
                    />
                    <p className="text-primary font-medium mt-1">{exp.company}</p>
                  </div>
                </div>

                <span className="px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium">
                  {exp.type}
                </span>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 text-sm text-muted-foreground mb-5">
                <div className="flex items-center gap-2">
                  <Calendar className="h-4 w-4" />
                  <span>{exp.duration}</span>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="h-4 w-4" />
                  <span>{exp.location}</span>
                </div>
              </div>

              <p className="text-muted-foreground mb-5">
                {exp.description}
              </p>

              <div className="mb-5">
                <SplitHeading
                  tag="h4"
                  text="key achievements"
                  delay={16}
                  className="font-semibold text-foreground mb-3"
                  textAlign="left"
                />
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
                <span className="text-sm font-medium">learn more</span>
                <ArrowRight className="h-4 w-4 ml-2" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
