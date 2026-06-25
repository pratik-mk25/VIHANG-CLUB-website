import React, { useState, useEffect } from 'react';
import './About.css';

export default function About() {
  const [decodedStats, setDecodedStats] = useState({ p: false, m: false, i: false });

  const handleDecode = (statKey) => {
    setDecodedStats(prev => ({ ...prev, [statKey]: true }));
  };

  const handleEncode = (statKey) => {
    setDecodedStats(prev => ({ ...prev, [statKey]: false }));
  };

  const goals = [
    {
      title: "INNOVATION & RESEARCH",
      desc: "FOCUS ON IDENTIFYING REAL-WORLD UAV CHALLENGES AND DEVELOPING INNOVATIVE DRONE SOLUTIONS THROUGH RESEARCH, PATENTS AND PUBLICATIONS."
    },
    {
      title: "COMPETITION EXCELLENCE",
      desc: "PREPARE AND EMPOWER STUDENTS TO PARTICIPATE, COMPETE AND ACHIEVE RECOGNITION IN NATIONAL AND INTERNATIONAL DRONE COMPETITIONS."
    },
    {
      title: "INDUSTRY CONNECT",
      desc: "BUILD STRONG INDUSTRY LINKAGES BY PROVIDING INTERNSHIPS, PLACEMENTS, FUNDING OPPORTUNITIES AND INDUSTRIAL EXPOSURE."
    },
    {
      title: "INTELLECTUAL PROPERTY",
      desc: "ENCOURAGE STUDENTS TO PROTECT THEIR INNOVATIONS THROUGH IPR, PATENTS AND TECHNOLOGICAL CONTRIBUTIONS."
    },
    {
      title: "SKILL DEVELOPMENT",
      desc: "ENHANCE TECHNICAL AND PRACTICAL SKILLS BY DESIGNING, CUSTOMIZING AND BUILDING UAVS THROUGH HANDS-ON LEARNING."
    },
    {
      title: "COMMUNITY IMPACT",
      desc: "CREATE A VIBRANT ECOSYSTEM THAT INSPIRES STUDENTS TO EXPLORE DRONE TECHNOLOGY, INNOVATE RESPONSIBLY AND BUILD SUCCESSFUL CAREERS IN THE UAV INDUSTRY."
    }
  ];

  return (
    <div className="page-wrapper dossier-bg" style={{ paddingTop: '120px' }}>
      <div className="container">
        
        <div className="section-header-row fade-in visible">
          <p className="section-label" style={{ color: '#9ca3af', fontSize: '0.85rem' }}>01 / ABOUT</p>
          <h1 className="section-title">MISSION <span className="accent">LOG</span></h1>
        </div>
        
        <div className="about-grid">
          <div className="fade-in visible">
            
            <p className="lead" style={{ margin: '1.5rem 0 2rem', maxWidth: '500px' }}>
              A STUDENT-LED CLUB DEVOTED TO RESEARCH, ENGINEERING, AND COMPETITION IN UNMANNED AERIAL VEHICLES — PUSHING BOUNDARIES AT SSGMCE SINCE 2023.
            </p>
            
            <div className="dossier-stats">
              <div 
                className="stat-card"
                onMouseEnter={() => handleDecode('p')}
                onMouseLeave={() => handleEncode('p')}
              >
                <div className="stat-corner"></div>
                <span className="stat-val">{decodedStats.p ? '23+' : 'XX+'}</span>
                <span className="stat-lbl">PROJECTS</span>
              </div>
              <div 
                className="stat-card"
                onMouseEnter={() => handleDecode('m')}
                onMouseLeave={() => handleEncode('m')}
              >
                <div className="stat-corner"></div>
                <span className="stat-val">{decodedStats.m ? '03' : 'XX'}</span>
                <span className="stat-lbl">MENTORS</span>
              </div>
              <div 
                className="stat-card"
                onMouseEnter={() => handleDecode('i')}
                onMouseLeave={() => handleEncode('i')}
              >
                <div className="stat-corner"></div>
                <span className="stat-val">{decodedStats.i ? '34+' : 'XX+'}</span>
                <span className="stat-lbl">INNOVATORS</span>
              </div>
            </div>

            <div className="mission-items">
              <div className="mission-item">
                <span className="mission-id">M-01</span>
                <div className="mission-content">
                  
                  <p>WE FOCUS ON RESEARCH, DEVELOPMENT, AND PRACTICAL DRONE PROJECTS TO PROVIDE REAL-WORLD TECHNICAL EXPERIENCE.</p>
                </div>
              </div>
              <div className="mission-item">
                <span className="mission-id">M-02</span>
                <div className="mission-content">
                  
                  <p>WE PREPARE AND MENTOR STUDENTS TO PARTICATE AND EXCEL IN NATIONAL AND INTERNATIONAL DRONE COMPETITIONS.</p>
                </div>
              </div>
              <div className="mission-item">
                <span className="mission-id">M-03</span>
                <div className="mission-content">
                  
                  <p>WE PROMOTE AWARENESS OF EMERGING OPPORTUNITIES IN UAV TECHNOLOGY WHILE BUILDING ESSENTIAL TECHNICAL AND PROBLEM-SOLVING SKILLS.</p>
                </div>
              </div>
              <div className="mission-item">
                <span className="mission-id">M-04</span>
                <div className="mission-content">
                  
                  <p>THROUGH WORKSHOPS, PROJECTS, AND COLLABORATIONS, WE PROVIDE A PLATFORM FOR STUDENTS TO EXPLORE, INNOVATE, AND BUILD SUCCESSFUL CAREERS IN THE DRONE INDUSTRY.</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="about-visual">
             <div className="glass-panel">
               <video 
                 autoPlay 
                 muted 
                 loop 
                 playsInline
                 title="Vihang Club visual montage"
                 aria-hidden="true"
                 style={{
                   position: 'absolute',
                   width: '100%',
                   height: '100%',
                   objectFit: 'cover',
                   top: 0,
                   left: 0,
                   opacity: 1,
                   zIndex: 0
                 }}
               >
                 <source src={`${import.meta.env.BASE_URL}video/about video vihang logo.mp4`} type="video/mp4" />
               </video>
             </div>
          </div>
        </div>

        <div className="about-goals fade-in visible" style={{ marginTop: '4rem', paddingTop: '4rem', borderTop: '1px solid var(--border)' }}>
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>

            <h2 className="section-title" style={{ fontSize: 'clamp(2rem, 5vw, 4rem)' }}>WHAT WE <span className="accent">STAND FOR</span></h2>
            <p style={{ fontFamily: 'var(--font-mono)', fontSize: '0.85rem', color: '#9ca3af', maxWidth: '500px', margin: '1rem auto 0', lineHeight: 1.7 }}>
              DRIVING EXCELLENCE IN UAV TECHNOLOGY THROUGH A CLEAR SET OF GOALS THAT DEFINE OUR PATH FORWARD.
            </p>
          </div>
          
          <div className="goals-grid">
            {goals.map((g, i) => (
              <div key={i} className="goal-card">
                <div className="goal-icon">
                  <span className="dot"></span>
                </div>
                <div className="goal-title">{g.title}</div>
                <p className="goal-text">{g.desc}</p>
                <div className="goal-glow"></div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}
