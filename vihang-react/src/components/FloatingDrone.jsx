import React from 'react';
import './FloatingDrone.css';

export default function FloatingDrone({ onClick }) {
  return (
    <div className="floating-drone-container" onClick={onClick}>
      <div className="drone-body game-drone">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="-45 -15 90 35" className="drone-icon">
          <g fill="#888" stroke="#111" strokeWidth="2">
            {/* Skids */}
            <polyline points="-10,5 -15,15 15,15 10,5" fill="none" stroke="#666" strokeWidth="1.5" />
            
            {/* Arms */}
            <line x1="-20" y1="0" x2="-35" y2="-5" />
            <line x1="20" y1="0" x2="35" y2="-5" />
            
            {/* Central Body */}
            <rect x="-20" y="-5" width="40" height="10" rx="5" />
            
            {/* Motors */}
            <rect x="-40" y="-10" width="10" height="5" fill="#111" />
            <rect x="30" y="-10" width="10" height="5" fill="#111" />
            
            {/* Camera */}
            <circle cx="10" cy="8" r="4" />
            <circle cx="11" cy="8" r="1.5" fill="#fff" stroke="none" />
          </g>
          
          {/* Golden Propellers */}
          <g fill="#FFD700">
            <rect x="-50" y="-12" width="30" height="2" className="svg-prop" />
            <rect x="20" y="-12" width="30" height="2" className="svg-prop" />
          </g>
        </svg>
        <div className="drone-tooltip">Click me!</div>
      </div>
    </div>
  );
}
