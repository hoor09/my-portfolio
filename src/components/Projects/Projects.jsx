import "./Projects.css";

export const Projects = () => {
  const projects = [
    {
      title: "Weather App",
      description:
        "A responsive weather application built with JavaScript.",
      technologies: ["HTML", "CSS", "JavaScript"],
    },
    {
      title: "React Profile Card",
      description:
        "A reusable profile card built while learning React components and props.",
      technologies: ["React", "CSS"],
    },
    {
      title: "Counter App",
      description:
        "A simple React counter application using useState.",
      technologies: ["React", "JavaScript"],
    },
    {
      title: "AI Chatbot Clone",
      description:
        "An AI chatbot interface built with React and integrated with an AI API.",
      technologies: ["React", "JavaScript", "API"],
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

              <a href="#" className="project-link">
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