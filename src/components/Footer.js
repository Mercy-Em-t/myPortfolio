import './Footer.css';

export default function Footer() {
  return (
    <footer className="footer glass-panel">
      <div className="container footer-container">
        <div className="footer-brand">
          <span className="logo gradient-text">TM.</span>
          <p>&copy; {new Date().getFullYear()} Tryphene Murugat. All rights reserved.</p>
        </div>
        <div className="footer-socials">
          <a href="https://github.com/placeholder" target="_blank" rel="noopener noreferrer">GitHub</a>
          <a href="https://linkedin.com/in/placeholder" target="_blank" rel="noopener noreferrer">LinkedIn</a>
          <a href="https://twitter.com/placeholder" target="_blank" rel="noopener noreferrer">Twitter</a>
        </div>
      </div>
    </footer>
  );
}
