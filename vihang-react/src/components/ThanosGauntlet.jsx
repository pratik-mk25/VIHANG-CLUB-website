
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
