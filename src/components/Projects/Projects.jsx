
import "./Projects.css";

export const Projects = () => {
  const projects = [
    {
      title: "Weather App",
      description:
        "A responsive weather application built with JavaScript and designed to display dynamic weather information.",
      technologies: ["HTML", "CSS", "JavaScript", "API"],
      link: "https://github.com/hoor09/Weather-App",
    },
    {
      title: "React Profile Card",
      description:
        "A reusable profile card built while learning React components, props, lists, and reusable UI structure.",
      technologies: ["React", "CSS"],
      link: "https://github.com/hoor09/react-profile-card",
    },
    {
      title: "Counter App",
      description:
        "A simple interactive React counter application built to practice state management with useState.",
      technologies: ["React", "JavaScript"],
      link: "https://github.com/hoor09/react-counter-app",
    },
    {
      title: "Currency Converter",
      description:
        "A responsive currency converter built with JavaScript and a currency exchange API.",
      technologies: ["HTML", "CSS", "JavaScript", "API"],
      link: "https://github.com/hoor09/curanccy-convertor",
    },
    {
      title: "Responsive Business Website",
      description:
        "A modern responsive business website built with semantic HTML5 and CSS3 using Flexbox, CSS Grid, and responsive layouts.",
      technologies: ["HTML", "CSS", "Flexbox", "CSS Grid"],
      link: "https://github.com/hoor09/project-1",
    },
    {
      title: "Interactive JavaScript Website",
      description:
        "An interactive responsive website demonstrating DOM manipulation, event handling, dynamic content, dark mode, and form interactions.",
      technologies: ["HTML", "CSS", "JavaScript", "DOM"],
      link: "https://github.com/hoor09/project-2",
    },
  ];

  return (
    <section className="projects" id="projects">
      <div className="projects-content">
        <p className="section-label">MY WORK</p>

        <h2 className="projects-title">Projects</h2>

        <p className="projects-description">
          Some of the projects I have built while learning and improving my
          skills.
        </p>

        <div className="projects-list">
          {projects.map((project) => (
            <div className="project-card" key={project.title}>
              <h3>{project.title}</h3>

              <p>{project.description}</p>

              <div className="project-technologies">
                {project.technologies.map((technology) => (
                  <span key={technology}>{technology}</span>
                ))}
              </div>

              <a
                href={project.link}
                className="project-link"
                target="_blank"
                rel="noopener noreferrer"
              >
                View Project →
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;


