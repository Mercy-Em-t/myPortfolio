import './Contact.css';

export default function Contact() {
  return (
    <section id="contact" className="section contact-section">
      <div className="container">
        <div className="contact-card glass-panel animate-fade-in delay-300">
          <h2 className="section-title gradient-text" style={{ marginBottom: '1.5rem', textAlign: 'left' }}>Let's Build Something Great.</h2>
          <p className="contact-desc">
            I'm always open to discussing new opportunities, macro architecture design challenges, or systems engineering roles. Feel free to reach out.
          </p>
          <div className="contact-links">
            <a href="mailto:placeholder@example.com" className="btn btn-primary">Email Me</a>
            <a href="https://linkedin.com/in/placeholder" target="_blank" rel="noopener noreferrer" className="btn btn-outline">LinkedIn Profile</a>
          </div>
        </div>
      </div>
    </section>
  );
}
