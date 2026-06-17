import { ArrowRight, ExternalLink, Github, Rocket } from "lucide-react";
import { useEffect, useRef, useState } from "react";

const projects = [
  {
    id: 1,
    title: "ozone trend analysis & predictive modelling @ISRO",
    description:
      "Analyzing 50 years of satellite-based atmospheric ozone data to identify long-term trends and building predictive models to forecast ozone layer variations.",
    image: "/projects/ozone.jpg",
    tags: ["Python", "time-series", "remote sensing", "data analysis"],
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
    <section ref={sectionRef} id="projects" className="py-24 px-4 relative overflow-hidden">
      <div 
        className={`container mx-auto max-w-5xl relative z-10 transition-all duration-1000 transform ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-16"
        }`}
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center text-white">
          <span className="text-white">projects</span><span className="text-[#FF9FFC]"> /&gt;</span>
        </h2>

        <p className="text-center text-white/75 mb-12 max-w-2xl mx-auto">
          A featured project highlighting my work on atmospheric ozone data,
          trend analysis, and predictive modelling.
        </p>

        <div className="grid grid-cols-1 gap-8 max-w-2xl mx-auto">
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
                <Rocket className="project-rocket h-9 w-9" />
                <span className="project-flame" />
              </div>

              <div className="project-image h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover object-bottom transition-transform duration-500 group-hover:scale-110"
                  style={{ objectPosition: 'center bottom' }}
                />
              </div>

              <div className="p-6">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-1 text-xs font-medium border border-white/20 rounded-full bg-white/10 text-white"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <h3 className="text-xl font-semibold mb-1 text-white"> {project.title}</h3>
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

        <div className="text-center mt-12">
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
