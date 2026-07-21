import './Hero.css';

export default function Hero() {
  return (
    <section id="home" className="hero-section">
      <div className="cutout-wrapper">
        {/* Massive Background Text */}
        <h1 className="cutout-bg-text">PORTFOLIO</h1>
        
        {/* The Cutout Image (Subject) */}
        {/* Replace the src with your own transparent PNG cutout */}
        <div className="placeholder-cutout hero-cutout">
          <p>Replace with another transparent .png photo</p>
        </div>
        {/* <img src="/your-hero-photo.png" alt="Tryphen Emurugat" className="cutout-image hero-cutout" /> */}

        {/* Foreground Title/Role Overlapping the Subject */}
        <div className="hero-foreground-text">
          <h2 className="title">Creative Architecture</h2>
          <p className="subtitle">Systems & Macro Architect Engineer</p>
        </div>
      </div>
      
      <div className="container hero-cta-container">
        <div className="hero-cta">
          <a href="#projects" className="btn btn-primary">Selected Work &rarr;</a>
        </div>
      </div>
    </section>
  );
}
