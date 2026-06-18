import { ArrowRight, ExternalLink, Github, Rocket } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import AnimatedHeading from "./AnimatedHeading";
import SplitHeading from "./SplitHeading";

const projects = [
  {
    id: 1,
    title: "Ozone Trend Analysis & Forecasting @ ISRO",
    description:
      "Analyzing 50+ years of atmospheric ozone data to identify long-term trends, generate actionable insights, and develop forecasting models that support data-driven environmental decision-making.",
    image: "/projects/ozone.jpg",
    imagePosition: "center bottom",
    tags: ["Python", "Data Analytics", "Forecasting", "Trend Analysis"],
    demoUrl: "#",
    githubUrl: "#",
  },
  {
    id: 2,
    title: "Business Performance & Sales Analytics",
    description:
      "Evaluated sales, profitability, and regional performance to identify growth opportunities, uncover business trends, and generate data-driven recommendations for decision-making.",
    image: "/projects/business-performance-sales-analytics-wide.png",
    imagePosition: "center 50%",
    tags: ["Power BI", "Sales Analytics", "KPI Analysis", "Business Intelligence"],
    demoUrl: "#",
    githubUrl: "#",
  },
];

export const ProjectsSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [launchedProject, setLaunchedProject] = useState(null);
  const sectionRef = useRef(null);
  const launchTimerRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    return () => {
      if (launchTimerRef.current) {
        window.clearTimeout(launchTimerRef.current);
      }
    };
  }, []);

  const triggerLaunch = (projectId) => {
    setLaunchedProject(projectId);
    if (launchTimerRef.current) {
      window.clearTimeout(launchTimerRef.current);
    }
    launchTimerRef.current = window.setTimeout(() => {
      setLaunchedProject(null);
    }, 1200);
  };

  return (
    <section ref={sectionRef} id="projects" className="py-16 px-4 relative overflow-hidden">
      <div 
        className={`container mx-auto max-w-5xl relative z-10 transition-all duration-1000 transform ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-16"
        }`}
      >
        <AnimatedHeading
          as="h2"
          text="projects />"
          className="text-xl md:text-2xl font-bold mb-3 text-center text-white"
        />

        <p className="text-center text-white/75 mb-7 max-w-2xl mx-auto">
          Analytics projects focused on insights, forecasting, business impact,
          and decision-ready recommendations.
        </p>

        <div className="grid grid-cols-1 gap-5 max-w-2xl mx-auto">
          {projects.map((project, key) => (
            <div
              key={key}
              className={`project-launch-card group bg-card rounded-lg overflow-hidden shadow-xs text-white ${
                launchedProject === project.id ? "is-launching" : ""
              }`}
              onPointerDown={() => triggerLaunch(project.id)}
              onFocus={() => triggerLaunch(project.id)}
              tabIndex={0}
            >
              <div className="project-launch-sky" aria-hidden="true">
                <span className="project-orbit project-orbit-one" />
                <span className="project-orbit project-orbit-two" />
                <span className="project-spark project-spark-one" />
                <span className="project-spark project-spark-two" />
                <span className="project-spark project-spark-three" />
                <Rocket className="project-rocket h-7 w-7" />
                <span className="project-flame" />
              </div>

              <div className="project-image h-40 md:h-44 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  style={{ objectPosition: project.imagePosition }}
                />
              </div>

              <div className="p-4">
                <div className="flex flex-wrap gap-2 mb-3">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-1 text-xs font-medium border border-white/20 rounded-full bg-white/10 text-white"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <SplitHeading
                  tag="h3"
                  text={project.title}
                  delay={14}
                  className="text-base md:text-lg font-semibold mb-1 text-white"
                />
                <p className="text-white/80 text-sm mb-4">
                  {project.description}
                </p>
                <div className="flex justify-between items-center">
                  <div className="flex space-x-3">
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      className="text-white hover:text-[#FF9FFC] transition-colors duration-300"
                    >
                      <ExternalLink size={20} />
                    </a>
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      className="text-white hover:text-[#FF9FFC] transition-colors duration-300"
                    >
                      <Github size={20} />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-8">
          <a
            className="cosmic-button w-fit flex items-center mx-auto gap-2"
            target="_blank"
            href="https://github.com/itsmuskanali"
          >
            check my github <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
};
