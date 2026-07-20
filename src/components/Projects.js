import './Projects.css';

export default function Projects() {
  const projects = [
    {
      title: "Sports Tournament Suite",
      description: "A comprehensive platform for managing sports tournaments, featuring real-time bracket updates, team management, and scoring analytics. Built with macro-architecture principles for high scalability.",
      tech: ["Next.js", "Node.js", "PostgreSQL", "WebSockets"],
      link: "#"
    },
    {
      title: "Enterprise System Architecture",
      description: "[Placeholder] Designed and implemented a microservices-based architecture for a large-scale enterprise application, improving system resilience and reducing downtime by 99%.",
      tech: ["Kubernetes", "Docker", "AWS", "Go"],
      link: "#"
    },
    {
      title: "Data Pipeline Orchestrator",
      description: "[Placeholder] A robust data engineering pipeline that processes millions of events per day, providing real-time insights and analytics for stakeholders.",
      tech: ["Python", "Apache Kafka", "Spark", "Terraform"],
      link: "#"
    }
  ];

  return (
    <section id="projects" className="section projects-section">
      <div className="container">
        <h2 className="section-title gradient-text">Featured Projects</h2>
        <div className="projects-grid">
          {projects.map((project, index) => (
            <div key={index} className="project-card glass-panel animate-fade-in delay-100">
              <div className="project-content">
                <h3>{project.title}</h3>
                <p className="project-desc">{project.description}</p>
                <div className="project-tech">
                  {project.tech.map((tech, i) => (
                    <span key={i} className="tech-tag">{tech}</span>
                  ))}
                </div>
                <a href={project.link} className="project-link">View Project &rarr;</a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
