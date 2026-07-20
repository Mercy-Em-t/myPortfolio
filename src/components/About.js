import './About.css';

export default function About() {
  return (
    <section id="about" className="section about-section">
      <div className="container">
        <h2 className="section-title gradient-text">About Me</h2>
        <div className="about-content glass-panel animate-fade-in delay-100">
          <div className="about-text">
            <p>
              I am a passionate <strong>Systems Engineer</strong>, <strong>Software Engineer</strong>, and <strong>Macro Architect Engineer</strong>. 
              My expertise lies in bridging the gap between high-level system architecture and low-level software implementation.
            </p>
            <p>
              [Placeholder] I have over X years of experience designing scalable, resilient systems for [Industry/Sector]. 
              I thrive on solving complex technical challenges and optimizing system performance across diverse environments.
            </p>
            <p>
              When I'm not architecting systems, you can find me [Placeholder: exploring new tech, reading, etc.].
            </p>
          </div>
          <div className="about-stats">
            <div className="stat-item">
              <h3 className="gradient-text">[X]+</h3>
              <p>Years Experience</p>
            </div>
            <div className="stat-item">
              <h3 className="gradient-text">[X]+</h3>
              <p>Projects Delivered</p>
            </div>
            <div className="stat-item">
              <h3 className="gradient-text">[X]+</h3>
              <p>Systems Architected</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
