import React, { useEffect, useState } from 'react';
import './SideRibbonDecorations.css';

export default function SideRibbonDecorations() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="ribbon-decorations-container">
      {/* LEFT RIBBON (Software / AI) */}
      <div 
        className="ribbon-image left" 
        style={{ transform: `translateY(${scrollY * -0.05}px)` }}
      >
        <img src={`${import.meta.env.BASE_URL}idols/ribbon_software.png`} alt="Software Blueprint" />
      </div>
      
      {/* RIGHT RIBBON (Hardware) */}
      <div 
        className="ribbon-image right" 
        style={{ transform: `translateY(${scrollY * -0.04}px)` }}
      >
        <img src={`${import.meta.env.BASE_URL}idols/ribbon_hardware.png`} alt="Hardware Blueprint" />
      </div>
    </div>
  );
}
