import './Experience.css';

export default function Experience() {
  const experiences = [
    {
      role: "[Placeholder] Senior Macro Architect",
      company: "[Placeholder] Tech Innovations Inc.",
      duration: "2022 - Present",
      description: "Leading the architectural design of enterprise-scale distributed systems. Spearheading cloud migration initiatives and optimizing CI/CD pipelines."
    },
    {
      role: "[Placeholder] Systems Engineer",
      company: "[Placeholder] Global Solutions LLC",
      duration: "2019 - 2022",
      description: "Managed Linux-based infrastructure and automated deployment workflows using Terraform and Ansible. Reduced system downtime by 40%."
    },
    {
      role: "[Placeholder] Software Engineer",
      company: "[Placeholder] Startup Ventures",
      duration: "2017 - 2019",
      description: "Developed scalable web applications using React and Node.js. Collaborated closely with product teams to deliver high-quality features."
    }
  ];

  return (
    <section id="experience" className="section experience-section">
      <div className="container">
        <h2 className="section-title gradient-text">Professional Experience</h2>
        <div className="timeline">
          {experiences.map((exp, idx) => (
            <div key={idx} className="timeline-item animate-fade-in delay-200">
              <div className="timeline-dot"></div>
              <div className="timeline-content glass-panel">
                <div className="timeline-header">
                  <h3>{exp.role}</h3>
                  <span className="duration">{exp.duration}</span>
                </div>
                <h4 className="company gradient-text">{exp.company}</h4>
                <p className="description">{exp.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
