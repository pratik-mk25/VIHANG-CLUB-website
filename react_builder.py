import os

base_dir = '/home/pratik/.gemini/antigravity/scratch/VIHANG-CLUB-website/vihang-react/src'

def write_file(path, content):
    with open(os.path.join(base_dir, path), 'w') as f:
        f.write(content)

# === CSS ===
index_css = """
:root {
  --primary: #00f3ff;
  --primary-dim: rgba(0, 243, 255, 0.15);
  --primary-glow: rgba(0, 243, 255, 0.6);
  --secondary: #0066ff;
  --bg: #030508;
  --bg2: #060a12;
  --bg3: #0a1120;
  --text: #e0f2fe;
  --text-muted: #94a3b8;
  --text-dim: #475569;
  --border: rgba(0, 243, 255, 0.15);
  
  --font-display: 'Bebas Neue', sans-serif;
  --font-hud: 'Orbitron', monospace;
  --font-mono: 'Share Tech Mono', monospace;
  --font-body: 'Rajdhani', sans-serif;
}

*, *::before, *::after {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

html {
  font-size: 16px;
  scroll-behavior: smooth;
}

body {
  background: var(--bg);
  color: var(--text);
  font-family: var(--font-body);
  overflow-x: hidden;
  text-transform: uppercase;
  transition: filter 0.5s;
}

a {
  text-decoration: none;
  color: inherit;
}

/* Utilities */
.container {
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 4rem;
}
@media (max-width: 768px) {
  .container { padding: 0 1.5rem; }
}

.section-label {
  font-family: var(--font-mono);
  font-size: 0.56rem;
  letter-spacing: 0.3em;
  color: var(--primary);
  margin-bottom: 1.2rem;
  display: flex;
  align-items: center;
  gap: 0.8rem;
}
.section-label::after {
  content: '';
  display: block;
  height: 1px;
  width: 50px;
  background: var(--primary);
  opacity: 0.5;
}

.section-title {
  font-family: var(--font-display);
  font-size: clamp(3rem, 7vw, 6.5rem);
  line-height: 0.88;
  letter-spacing: 0.04em;
  text-shadow: 0 0 20px var(--primary-glow);
}
.section-title .accent {
  color: var(--primary);
}

.btn-primary {
  font-family: var(--font-mono);
  font-size: 0.65rem;
  letter-spacing: 0.18em;
  color: var(--bg);
  background: var(--primary);
  padding: 0.8rem 2.2rem;
  clip-path: polygon(0 0, calc(100% - 10px) 0, 100% 10px, 100% 100%, 10px 100%, 0 calc(100% - 10px));
  transition: all 0.2s;
  display: inline-block;
  cursor: pointer;
  border: none;
}
.btn-primary:hover {
  background: var(--text);
  box-shadow: 0 0 20px var(--primary-glow);
  transform: translateY(-2px);
}

.btn-secondary {
  font-family: var(--font-mono);
  font-size: 0.6rem;
  letter-spacing: 0.2em;
  color: var(--primary);
  padding: 0.85rem 2rem;
  border: 1px solid var(--border);
  transition: all 0.2s;
  display: inline-block;
  cursor: pointer;
  background: transparent;
}
.btn-secondary:hover {
  background: var(--primary-dim);
  border-color: var(--primary);
  transform: translateY(-2px);
  box-shadow: 0 0 15px var(--primary-glow);
}

/* Animations */
@keyframes pulseLogo {
  0%, 100% { opacity: 1; filter: drop-shadow(0 0 5px var(--primary)); }
  50% { opacity: 0.6; filter: none; }
}

/* Gauntlet Styles */
#gauntlet-switcher {
  position: fixed;
  right: 20px;
  top: 50%;
  transform: translateY(-50%);
  z-index: 1000;
  display: flex;
  flex-direction: column;
  align-items: center;
  filter: drop-shadow(0 0 10px rgba(0,0,0,0.5));
}
.gauntlet-svg {
  cursor: crosshair;
  transition: transform 0.3s;
}
.gauntlet-svg:hover { transform: scale(1.1); }
.stone {
  cursor: pointer;
  stroke: #ffffff;
  stroke-width: 0.5;
  transition: all 0.3s;
}
.stone:hover {
  stroke-width: 2;
  transform: scale(1.2);
  transform-origin: center;
}
.stone.space { fill: #0066ff; filter: drop-shadow(0 0 5px #00f3ff); }
.stone.mind { fill: #ffcc00; filter: drop-shadow(0 0 5px #ffee00); }
.stone.reality { fill: #ff003c; filter: drop-shadow(0 0 5px #ff3366); }
.stone.power { fill: #bd00ff; filter: drop-shadow(0 0 5px #dd33ff); }
.stone.time { fill: #00ff66; filter: drop-shadow(0 0 5px #33ff88); }
.stone.soul { fill: #ff6600; filter: drop-shadow(0 0 5px #ff8833); }

.gauntlet-tooltip {
  font-family: var(--font-mono);
  font-size: 0.5rem;
  color: #daa520;
  margin-top: 10px;
  letter-spacing: 0.1em;
  opacity: 0.8;
  pointer-events: none;
}
"""
write_file('index.css', index_css)

# === Navbar ===
navbar_jsx = """
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

  const links = [
    { name: 'ABOUT', path: '/about' },
    { name: 'PROJECTS', path: '/projects' },
    { name: 'TEAM', path: '/team' },
    { name: 'GALLERY', path: '/gallery' },
    { name: 'CONTACT', path: '/contact' }
  ];

  return (
    <>
      <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
        <Link to="/" className="nav-logo" onClick={() => setMobileOpen(false)}>
          <div className="nav-logo-icon"></div>
          <span className="nav-logo-text">VIH<span>A</span>NG CLUB</span>
        </Link>
        <div className="nav-links">
          {links.map(link => (
            <Link 
              key={link.name} 
              to={link.path}
              className={location.pathname === link.path ? 'active' : ''}
            >
              {link.name}
            </Link>
          ))}
        </div>
        <button 
          className="hamburger" 
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          <span style={{ transform: mobileOpen ? 'rotate(45deg) translate(5px, 5px)' : 'none' }}></span>
          <span style={{ opacity: mobileOpen ? 0 : 1 }}></span>
          <span style={{ transform: mobileOpen ? 'rotate(-45deg) translate(5px, -5px)' : 'none' }}></span>
        </button>
      </nav>
      {mobileOpen && (
        <div className="mobile-nav">
          {links.map(link => (
            <Link 
              key={link.name} 
              to={link.path}
              onClick={() => setMobileOpen(false)}
            >
              {link.name}
            </Link>
          ))}
        </div>
      )}
    </>
  );
}
"""
navbar_css = """
.navbar {
  position: fixed;
  top: 0; left: 0; right: 0;
  z-index: 900;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1.6rem 4rem;
  transition: all 0.4s;
}
.navbar.scrolled {
  padding: 0.9rem 4rem;
  background: rgba(3, 5, 8, 0.8);
  backdrop-filter: blur(20px);
  border-bottom: 1px solid var(--border);
}
.nav-logo {
  display: flex;
  align-items: center;
  gap: 0.7rem;
}
.nav-logo-icon {
  width: 28px;
  height: 28px;
  border: 1.5px solid var(--primary);
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  box-shadow: 0 0 10px var(--primary-glow);
}
.nav-logo-icon::after {
  content: '';
  position: absolute;
  inset: 3px;
  background: var(--primary);
  clip-path: polygon(50% 0, 100% 100%, 0 100%);
  animation: pulseLogo 3s ease-in-out infinite;
}
.nav-logo-text {
  font-family: var(--font-hud);
  font-size: 1.2rem;
  font-weight: 700;
  letter-spacing: 0.2em;
}
.nav-logo-text span {
  color: var(--primary);
  text-shadow: 0 0 10px var(--primary-glow);
}
.nav-links {
  display: flex;
  background: rgba(0,0,0,0.3);
  border: 1px solid var(--border);
  backdrop-filter: blur(10px);
}
.nav-links a {
  font-family: var(--font-mono);
  font-size: 0.6rem;
  letter-spacing: 0.18em;
  padding: 0.6rem 1.1rem;
  border-right: 1px solid var(--border);
  color: var(--text-muted);
  transition: all 0.2s;
}
.nav-links a:last-child { border-right: none; }
.nav-links a:hover, .nav-links a.active {
  color: var(--primary);
  background: var(--primary-dim);
  text-shadow: 0 0 8px var(--primary-glow);
}
.hamburger {
  display: none;
  flex-direction: column;
  gap: 5px;
  padding: 4px;
  cursor: pointer;
  background: none;
  border: none;
}
.hamburger span {
  width: 22px;
  height: 1.5px;
  background: var(--primary);
  display: block;
  transition: all 0.3s;
}
.mobile-nav {
  position: fixed;
  top: 60px; left: 0; right: 0;
  background: rgba(3, 5, 8, 0.95);
  backdrop-filter: blur(20px);
  border-bottom: 1px solid var(--border);
  display: flex;
  flex-direction: column;
  z-index: 899;
}
.mobile-nav a {
  font-family: var(--font-mono);
  font-size: 0.7rem;
  letter-spacing: 0.18em;
  padding: 0.8rem 1.5rem;
  border-bottom: 1px solid var(--border);
  color: var(--text-muted);
}
@media (max-width: 900px) {
  .navbar { padding: 1rem 1.5rem; }
  .navbar.scrolled { padding: 0.8rem 1.5rem; }
  .nav-links { display: none; }
  .hamburger { display: flex; }
}
"""
write_file('components/Navbar.jsx', navbar_jsx)
write_file('components/Navbar.css', navbar_css)

# === Footer ===
footer_jsx = """
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

export default function Footer() {
  const [time, setTime] = useState('');
  
  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date().toISOString().slice(11,19));
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <footer className="footer">
      <div className="container footer-inner">
        <div className="footer-grid">
          <div className="footer-brand">
            <div className="nav-logo">
              <div className="nav-logo-icon"></div>
              <span className="nav-logo-text">VIH<span>A</span>NG CLUB</span>
            </div>
            <p className="footer-desc">PIONEERING HUB FOR DRONE RESEARCH AND DEVELOPMENT AT SSGMCE, SHEGAON.</p>
            <div className="utc-clock">UTC: {time}</div>
          </div>
          <div>
            <h4 className="footer-heading">NAVIGATION</h4>
            <ul className="footer-links">
              <li><Link to="/about">ABOUT</Link></li>
              <li><Link to="/projects">PROJECTS</Link></li>
              <li><Link to="/team">TEAM</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="footer-heading">CONTACT</h4>
            <div className="contact-text">VIHANG@SSGMCE.AC.IN</div>
          </div>
        </div>
        <div className="footer-bottom">
          <p>© {new Date().getFullYear()} VIHANG CLUB. ALL RIGHTS RESERVED.</p>
        </div>
      </div>
    </footer>
  );
}
"""
footer_css = """
.footer {
  background: var(--bg2);
  border-top: 1px solid var(--border);
  margin-top: 4rem;
}
.footer-inner { padding: 4rem 0 2rem; }
.footer-grid {
  display: grid;
  grid-template-columns: 2fr 1fr 1fr;
  gap: 3rem;
  padding-bottom: 3rem;
}
.footer-desc {
  font-family: var(--font-mono);
  font-size: 0.72rem;
  color: var(--text-dim);
  line-height: 1.7;
  margin: 1.5rem 0;
}
.utc-clock {
  font-family: var(--font-mono);
  font-size: 0.6rem;
  color: var(--primary);
  border: 1px solid var(--border);
  padding: 0.4rem 0.8rem;
  display: inline-block;
  background: var(--primary-dim);
}
.footer-heading {
  font-family: var(--font-mono);
  font-size: 0.58rem;
  letter-spacing: 0.25em;
  color: var(--primary);
  margin-bottom: 1.5rem;
}
.footer-links { list-style: none; display: flex; flex-direction: column; gap: 0.7rem; }
.footer-links a {
  font-family: var(--font-mono);
  font-size: 0.7rem;
  color: var(--text-dim);
  transition: color 0.2s;
}
.footer-links a:hover { color: var(--primary); }
.contact-text {
  font-family: var(--font-mono);
  font-size: 0.7rem;
  color: var(--text-dim);
}
.footer-bottom {
  border-top: 1px solid var(--border);
  padding-top: 1.5rem;
  font-family: var(--font-mono);
  font-size: 0.58rem;
  color: var(--text-dim);
  text-align: center;
}
@media (max-width: 900px) {
  .footer-grid { grid-template-columns: 1fr; }
}
"""
write_file('components/Footer.jsx', footer_jsx)
write_file('components/Footer.css', footer_css)

# === Thanos Gauntlet ===
gauntlet_jsx = """
import React from 'react';

export default function ThanosGauntlet() {
  const setTheme = (stone) => {
    const root = document.documentElement;
    let p, s;
    switch(stone) {
        case 'space': p = '#00f3ff'; s = '#0066ff'; break;
        case 'mind': p = '#ffcc00'; s = '#ffffff'; break;
        case 'reality': p = '#ff003c'; s = '#ff6600'; break;
        case 'power': p = '#bd00ff'; s = '#ff00ff'; break;
        case 'time': p = '#00ff66'; s = '#00cc00'; break;
        case 'soul': p = '#ff8800'; s = '#ffcc00'; break;
        default: p = '#00f3ff'; s = '#bd00ff';
    }
    
    const hexToRgba = (hex, alpha) => {
      let r = parseInt(hex.slice(1, 3), 16),
          g = parseInt(hex.slice(3, 5), 16),
          b = parseInt(hex.slice(5, 7), 16);
      return `rgba(${r}, ${g}, ${b}, ${alpha})`;
    };
    
    root.style.setProperty('--primary', p);
    root.style.setProperty('--secondary', s);
    root.style.setProperty('--primary-dim', hexToRgba(p, 0.15));
    root.style.setProperty('--primary-glow', hexToRgba(p, 0.6));
    
    document.body.style.filter = 'contrast(1.5) brightness(1.2)';
    setTimeout(() => {
        document.body.style.filter = 'none';
    }, 500);
  };

  return (
    <div id="gauntlet-switcher">
      <svg viewBox="0 0 100 120" width="60" height="80" className="gauntlet-svg">
        <path d="M 20 120 L 20 60 Q 20 30 35 30 L 65 30 Q 80 30 80 60 L 80 120 Z" fill="#b8860b" stroke="#daa520" strokeWidth="2"/>
        <path d="M 20 60 L 20 40 Q 20 20 30 20 L 40 20 Q 45 20 45 30 L 45 40 Z" fill="#b8860b" stroke="#daa520" strokeWidth="2"/>
        <path d="M 45 40 L 45 15 Q 45 10 52 10 L 58 10 Q 65 10 65 20 L 65 40 Z" fill="#b8860b" stroke="#daa520" strokeWidth="2"/>
        <path d="M 65 40 L 65 20 Q 65 15 72 15 L 78 15 Q 85 15 85 25 L 85 40 Z" fill="#b8860b" stroke="#daa520" strokeWidth="2"/>
        <path d="M 85 45 L 85 30 Q 85 25 90 25 L 95 25 Q 100 25 100 35 L 100 50 Q 100 60 90 60 L 85 60 Z" fill="#b8860b" stroke="#daa520" strokeWidth="2"/>
        <path d="M 5 70 L 5 50 Q 5 45 10 45 L 15 45 Q 20 45 20 55 L 20 70 Z" fill="#b8860b" stroke="#daa520" strokeWidth="2"/>
        <line x1="25" y1="45" x2="40" y2="45" stroke="#8b6508" strokeWidth="2"/>
        <line x1="45" y1="40" x2="60" y2="40" stroke="#8b6508" strokeWidth="2"/>
        <line x1="65" y1="45" x2="80" y2="45" stroke="#8b6508" strokeWidth="2"/>
        <circle cx="32" cy="45" r="4" className="stone space" onClick={() => setTheme('space')} />
        <circle cx="52" cy="40" r="4" className="stone mind" onClick={() => setTheme('mind')} />
        <circle cx="72" cy="45" r="4" className="stone reality" onClick={() => setTheme('reality')} />
        <circle cx="85" cy="55" r="4" className="stone power" onClick={() => setTheme('power')} />
        <circle cx="15" cy="55" r="4" className="stone time" onClick={() => setTheme('time')} />
        <ellipse cx="52" cy="65" rx="8" ry="10" className="stone soul" onClick={() => setTheme('soul')} />
      </svg>
      <div className="gauntlet-tooltip">THEME</div>
    </div>
  );
}
"""
write_file('components/ThanosGauntlet.jsx', gauntlet_jsx)

# === Home ===
home_jsx = """
import React from 'react';
import './Home.css';

export default function Home() {
  return (
    <div className="page-wrapper">
      <section className="hero">
        <div className="container hero-content">
          <p className="hero-eyebrow">AERONAUTICS // SSGMCE // SYSTEM_ONLINE</p>
          <h1 className="hero-title">
            <span className="accent">VIHANG</span><br/>CLUB
          </h1>
          <p className="hero-desc">
            ADVANCED UAV RESEARCH & DEVELOPMENT. PUSHING THE BOUNDARIES OF AUTONOMOUS FLIGHT.
          </p>
          <div className="hero-btns">
            <button className="btn-primary">INITIATE SEQUENCE</button>
            <button className="btn-secondary">VIEW PROTOCOLS</button>
          </div>
        </div>
      </section>
      
      <div className="hud-stats">
        <div className="hud-stat-box">
          <span className="stat-num">23+</span>
          <span className="stat-label">PROJECTS</span>
        </div>
        <div className="hud-stat-box">
          <span className="stat-num">3</span>
          <span className="stat-label">MENTORS</span>
        </div>
        <div className="hud-stat-box">
          <span className="stat-num">34+</span>
          <span className="stat-label">INNOVATORS</span>
        </div>
      </div>
    </div>
  );
}
"""
home_css = """
.hero {
  min-height: 100vh;
  display: flex;
  align-items: center;
  position: relative;
  overflow: hidden;
}
.hero::before {
  content: '';
  position: absolute;
  inset: 0;
  background: radial-gradient(circle at center, var(--primary-dim) 0%, var(--bg) 70%);
  opacity: 0.5;
  z-index: -1;
}
.hero-content {
  position: relative;
  z-index: 10;
  padding-top: 5rem;
}
.hero-eyebrow {
  font-family: var(--font-mono);
  font-size: 0.6rem;
  letter-spacing: 0.4em;
  color: var(--primary);
  margin-bottom: 1.5rem;
  display: inline-block;
  border-left: 2px solid var(--primary);
  padding-left: 1rem;
}
.hero-title {
  font-family: var(--font-display);
  font-size: clamp(4rem, 10vw, 9rem);
  line-height: 0.85;
  margin-bottom: 2rem;
  text-shadow: 0 0 30px var(--primary-glow);
}
.hero-title .accent {
  color: var(--primary);
}
.hero-desc {
  font-size: 1.1rem;
  max-width: 500px;
  color: var(--text-muted);
  line-height: 1.6;
  margin-bottom: 2.5rem;
}
.hero-btns {
  display: flex;
  gap: 1rem;
}
.hud-stats {
  position: fixed;
  bottom: 30px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  background: rgba(3, 5, 8, 0.7);
  backdrop-filter: blur(15px);
  border: 1px solid var(--border);
  padding: 0.5rem;
  border-radius: 50px;
  box-shadow: 0 0 20px var(--primary-dim);
  z-index: 100;
}
.hud-stat-box {
  padding: 0.5rem 2rem;
  text-align: center;
  border-right: 1px solid var(--border);
}
.hud-stat-box:last-child { border-right: none; }
.stat-num {
  display: block;
  font-family: var(--font-display);
  font-size: 1.5rem;
  color: var(--primary);
  text-shadow: 0 0 10px var(--primary-glow);
}
.stat-label {
  font-family: var(--font-mono);
  font-size: 0.45rem;
  letter-spacing: 0.2em;
  color: var(--text-dim);
}
@media (max-width: 768px) {
  .hud-stats {
    width: 90%;
    border-radius: 10px;
  }
  .hud-stat-box { padding: 0.5rem 1rem; }
}
"""
write_file('pages/Home.jsx', home_jsx)
write_file('pages/Home.css', home_css)

# === About ===
about_jsx = """
import React from 'react';
import './About.css';

export default function About() {
  return (
    <div className="page-wrapper" style={{ paddingTop: '120px' }}>
      <div className="container">
        <p className="section-label">01 / ABOUT</p>
        <h2 className="section-title">MISSION <span className="accent">BRIEF</span></h2>
        
        <div className="about-grid">
          <div className="about-text">
            <p className="lead">
              A STUDENT-LED CLUB DEVOTED TO RESEARCH, ENGINEERING, AND COMPETITION IN UNMANNED AERIAL VEHICLES — PUSHING BOUNDARIES AT SSGMCE SINCE 2023.
            </p>
            <div className="mission-items">
              <div className="mission-item">
                <span className="mission-id">M-01</span>
                <span>RESEARCH, DEVELOPMENT, AND PRACTICAL DRONE PROJECTS.</span>
              </div>
              <div className="mission-item">
                <span className="mission-id">M-02</span>
                <span>PARTICIPATE AND EXCEL IN NATIONAL COMPETITIONS.</span>
              </div>
            </div>
          </div>
          <div className="about-visual">
             <div className="glass-panel">
               <div className="cyber-lines"></div>
               <p className="scan-text">SCANNING PERIMETER...</p>
             </div>
          </div>
        </div>
      </div>
    </div>
  );
}
"""
about_css = """
.about-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  margin-top: 3rem;
}
.lead {
  font-size: 1.1rem;
  color: var(--text-muted);
  line-height: 1.8;
  margin-bottom: 2rem;
}
.mission-items {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}
.mission-item {
  display: flex;
  gap: 1.5rem;
  padding: 1.2rem;
  border: 1px solid var(--border);
  background: var(--primary-dim);
  align-items: center;
  transition: all 0.3s;
}
.mission-item:hover {
  border-color: var(--primary);
  box-shadow: inset 0 0 20px var(--primary-glow);
}
.mission-id {
  font-family: var(--font-mono);
  color: var(--primary);
  font-size: 0.7rem;
}
.about-visual {
  position: relative;
  aspect-ratio: 4/3;
}
.glass-panel {
  width: 100%;
  height: 100%;
  border: 1px solid var(--primary);
  background: rgba(0, 243, 255, 0.05);
  backdrop-filter: blur(5px);
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  overflow: hidden;
}
.cyber-lines {
  position: absolute;
  width: 100%;
  height: 2px;
  background: var(--primary);
  box-shadow: 0 0 10px var(--primary);
  animation: scan 3s linear infinite;
}
@keyframes scan {
  0% { top: 0; }
  100% { top: 100%; }
}
.scan-text {
  font-family: var(--font-mono);
  color: var(--primary);
  letter-spacing: 0.2em;
  opacity: 0.5;
}
@media (max-width: 900px) {
  .about-grid { grid-template-columns: 1fr; }
}
"""
write_file('pages/About.jsx', about_jsx)
write_file('pages/About.css', about_css)

# === App.jsx update ===
app_jsx = """
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ThanosGauntlet from './components/ThanosGauntlet';
import Home from './pages/Home';
import About from './pages/About';

export default function App() {
  return (
    <Router>
      <div className="app-container">
        <ThanosGauntlet />
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="*" element={<Home />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}
"""
write_file('App.jsx', app_jsx)

print("React Builder Script Complete.")
