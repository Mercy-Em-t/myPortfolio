import './Skills.css';

export default function Skills() {
  const skillCategories = [
    {
      title: "Macro Architecture",
      skills: ["[Placeholder] Microservices", "[Placeholder] System Design", "[Placeholder] Distributed Systems", "[Placeholder] Cloud Infrastructure (AWS/GCP)"]
    },
    {
      title: "Software Engineering",
      skills: ["[Placeholder] JavaScript/TypeScript", "[Placeholder] Python", "[Placeholder] Go", "[Placeholder] React/Next.js"]
    },
    {
      title: "Systems Engineering",
      skills: ["[Placeholder] CI/CD Pipelines", "[Placeholder] Containerization (Docker/K8s)", "[Placeholder] Linux Administration", "[Placeholder] Networking"]
    }
  ];

  return (
    <section id="skills" className="section skills-section">
      <div className="container">
        <h2 className="section-title gradient-text">Technical Expertise</h2>
        <div className="skills-grid">
          {skillCategories.map((category, idx) => (
            <div key={idx} className="skill-category glass-panel animate-fade-in delay-200">
              <h3 className="category-title">{category.title}</h3>
              <ul className="skill-list">
                {category.skills.map((skill, i) => (
                  <li key={i} className="skill-item">
                    <span className="skill-bullet"></span>
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
