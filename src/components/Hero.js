import './Hero.css';

export default function Hero() {
  return (
    <section id="home" className="hero-section">
      <div className="container hero-content">
        <div className="hero-text animate-fade-in">
          <p className="greeting">Hi, I'm</p>
          <h1 className="name">Tryphene Murugat.</h1>
          <h2 className="title gradient-text">Macro Architect & Systems Engineer.</h2>
          <p className="description">
            I specialize in designing robust software systems, architecting macro-level infrastructure, and building scalable solutions that drive technological innovation.
          </p>
          <div className="hero-cta delay-200">
            <a href="#projects" className="btn btn-primary">View My Work</a>
            <a href="#contact" className="btn btn-outline">Get In Touch</a>
          </div>
        </div>
      </div>
    </section>
  );
}
