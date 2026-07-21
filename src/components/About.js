import './About.css';

export default function About() {
  return (
    <section id="about" className="section about-section">
      <div className="cutout-wrapper">
        {/* Massive Background Text */}
        <h1 className="cutout-bg-text">ABOUT ME</h1>
        
        {/* The Cutout Image (Subject) */}
        {/* Replace the src with your own transparent PNG cutout */}
        <div className="placeholder-cutout">
          <p>Replace with your transparent .png photo</p>
        </div>
        {/* <img src="/your-cutout-photo.png" alt="Tryphen Emurugat" className="cutout-image" /> */}

        {/* Foreground Signature Overlapping the Subject */}
        <div className="signature-overlay">
          Tryphen Emurugat
        </div>
      </div>

      <div className="container about-footer">
        <p className="about-paragraph">
          I'm Tryphen, a Systems and Macro Architect Engineer focused on building robust, highly-scalable infrastructures that are resilient and feel considered. I care about high-level system clarity, low-level technical detail, and designing architectures that actually work for real enterprise needs.
        </p>
      </div>
    </section>
  );
}
