import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Navbar.css';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const closeMobile = () => setMobileOpen(false);

  const navLinks = [
    { path: '/about', label: 'ABOUT' },
    { path: '/avinya', label: 'SOFTWARE' },
    { path: '/tesseract', label: 'HARDWARE' },
    { path: '/projects', label: 'PROJECTS' },
    { path: '/documentation', label: 'DOCUMENTATION' },
    { path: '/achievements', label: 'ACHIEVEMENTS' },
    { path: '/internships', label: 'PLACEMENTS AND INTERNSHIPS' },
    { path: '/team', label: 'TEAM' },
    { path: '/gallery', label: 'GALLERY' },
    { path: '/contact', label: 'CONTACT' },
  ];

  return (
    <>
      <nav id="navbar" className={scrolled ? 'scrolled' : ''}>
        <Link to="/" className="nav-logo" aria-label="Vihang Club Home" onClick={closeMobile}>
          <div className="nav-logo-icon">
            <div className="logo-flip-container">
              <div className="logo-front">
                <img src={`${import.meta.env.BASE_URL}vihang-logo-transparent.png`} alt="Vihang Logo" />
              </div>
              <div className="logo-back">
                <img src={`${import.meta.env.BASE_URL}ssgmce-logo-transparent.png`} alt="SSGMCE Logo" />
              </div>
            </div>
          </div>
          <div className="nav-logo-text-group">
            <span className="nav-logo-text">VIH<span>A</span>NG CLUB</span>
            <span className="nav-logo-subtext">LEADING RESEARCH AND DEVELOPMENT @SSGMCE</span>
          </div>
        </Link>

        <div className="nav-links">
          {navLinks.map(link => (
            <Link 
              key={link.path} 
              to={link.path}
              className={location.pathname === link.path ? 'active' : ''}
            >
              {link.label}
            </Link>
          ))}
        </div>

        <button 
          className="hamburger" 
          aria-label="Toggle navigation menu"
          aria-expanded={mobileOpen}
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          <span style={{ transform: mobileOpen ? 'rotate(45deg) translate(5px, 5px)' : 'none' }}></span>
          <span style={{ opacity: mobileOpen ? 0 : 1 }}></span>
          <span style={{ transform: mobileOpen ? 'rotate(-45deg) translate(5px, -5px)' : 'none' }}></span>
        </button>
      </nav>

      {mobileOpen && (
        <div className="mobile-nav open">
          {navLinks.map(link => (
            <Link 
              key={link.path} 
              to={link.path}
              onClick={closeMobile}
              className={location.pathname === link.path ? 'active' : ''}
            >
              {link.label}
            </Link>
          ))}
        </div>
      )}
    </>
  );
}
