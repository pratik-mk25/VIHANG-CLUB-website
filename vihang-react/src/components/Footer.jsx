import React from 'react';
import { Link } from 'react-router-dom';
import { Instagram, Linkedin, Youtube, Twitter } from 'lucide-react';
import './Footer.css';

export default function Footer({ onEasterEggTrigger }) {
  const [tapCount, setTapCount] = React.useState(0);
  const tapTimeoutRef = React.useRef(null);

  const handleCopyrightTap = () => {
    setTapCount(prev => prev + 1);
    
    if (tapCount + 1 >= 7) {
      if (onEasterEggTrigger) onEasterEggTrigger();
      setTapCount(0);
    }
    
    if (tapTimeoutRef.current) clearTimeout(tapTimeoutRef.current);
    tapTimeoutRef.current = setTimeout(() => {
      setTapCount(0);
    }, 1500);
  };

  return (
    <footer>
      <div className="container footer-inner">
        <div className="footer-grid">
          <div className="footer-brand">
            <Link to="/" className="nav-logo" aria-label="Vihang Club Home">
              <div className="nav-logo-icon">
                <img src={`${import.meta.env.BASE_URL}vihang-logo-transparent.png`} alt="Vihang Logo" style={{ height: '64px', objectFit: 'contain' }} />
              </div>
              <span className="nav-logo-text">VIH<span className="accent">A</span>NG CLUB</span>
            </Link>
            <p className="footer-desc">PIONEERING HUB FOR DRONE RESEARCH AND DEVELOPMENT AT SSGMCE, SHEGAON.</p>
            <div className="social-links">
              <a href="https://www.instagram.com/vihangdroneclub_ssgmce?igsh=MTBpNmVoYWRzY2pvaQ==" target="_blank" rel="noreferrer" className="social-icon" aria-label="Instagram">
                <Instagram size={20} strokeWidth={1.5} />
              </a>
              <a href="https://www.linkedin.com/company/vihang-drone-club/" target="_blank" rel="noreferrer" className="social-icon" aria-label="LinkedIn">
                <Linkedin size={20} strokeWidth={1.5} />
              </a>
              <a href="https://youtube.com/@vihangdroneclubssgmce?si=qsOPABQH5tYZ2WVe" target="_blank" rel="noreferrer" className="social-icon" aria-label="YouTube">
                <Youtube size={20} strokeWidth={1.5} />
              </a>
              <a href="#" target="_blank" rel="noreferrer" className="social-icon placeholder" title="X (Twitter) - Coming Soon" aria-label="X (Twitter) - Coming Soon">
                <Twitter size={20} strokeWidth={1.5} />
              </a>
            </div>
          </div>
          <div>
            <h4 className="footer-heading">NAVIGATION</h4>
            <ul className="footer-links">
              <li><Link to="/about">ABOUT</Link></li>
              <li><Link to="/projects">PROJECTS</Link></li>
              <li><Link to="/documentation">DOCUMENTATION</Link></li>
              <li><Link to="/achievements">ACHIEVEMENTS</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="footer-heading">RESOURCES</h4>
            <ul className="footer-links">
              <li><Link to="/internships">PLACEMENTS</Link></li>
              <li><Link to="/team">TEAM</Link></li>
              <li><Link to="/gallery">GALLERY</Link></li>
              <li><Link to="/contact">CONTACT</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="footer-heading">CONTACT</h4>
            <div className="contact-item">
              <span className="contact-label">LOC</span>
              <span className="contact-text">SSGMCE, SHEGAON<br/>MAHARASHTRA, INDIA 444203</span>
            </div>
            <div className="contact-item">
              <span className="contact-label">EML</span>
              <span className="contact-text"><a href="mailto:vihangdroneclub@gmail.com">VIHANGDRONECLUB@GMAIL.COM</a></span>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <p 
            className="footer-copy" 
            onClick={handleCopyrightTap} 
            style={{ cursor: 'pointer', WebkitTapHighlightColor: 'transparent', userSelect: 'none' }}
          >
            © {new Date().getFullYear()} VIHANG CLUB. ALL RIGHTS RESERVED.
          </p>
          <span className="footer-tagline">DEDICATED TO THE LOTUS FEET OF SHRI SANT GAJANAN MAHARAJ AND VITHU MAULI</span>
        </div>
      </div>
    </footer>
  );
}
