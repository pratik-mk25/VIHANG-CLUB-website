
import React, { useState } from 'react';
import './Projects.css';

const projectsData = [
  { title: `DRONE RIG`, status: `active`, img: ``, desc: `A DRONE RIG IS A STRUCTURED SETUP OF HARDWARE AND COMPONENTS (FRAME, MOTORS, CONTROLLERS, AND SENSORS) ASSEMBLED TO BUILD AND OPERATE A DRONE EFFICIENTLY.` },
  { title: `CUSTOM FLIGHT CONTROLLER`, status: `active`, img: ``, desc: `A CUSTOM FLIGHT CONTROLLER IS A DESIGNED CIRCUIT BOARD THAT MANAGES DRONE STABILITY, SENSOR DATA, AND FLIGHT OPERATIONS BASED ON USER REQUIREMENTS.` },
  { title: `TESSERACT GCS`, status: `active`, img: ``, desc: `TESSERACT GCS IS A GROUND CONTROL STATION SOFTWARE USED TO MONITOR, CONTROL, AND ANALYZE DRONE MISSIONS IN REAL TIME.` },
  { title: `AVINYA AI (CHATBOT)`, status: `active`, img: ``, desc: `AVINYA AI IS AN INTELLIGENT CHATBOT SYSTEM DESIGNED TO INTERACT WITH USERS, PROVIDE INFORMATION, AND AUTOMATE RESPONSES USING AI TECHNOLOGY.` },
  { title: `MULTI-PURPOSE AGRICULTURE DRONE`, status: `complete`, img: `/project img/project 1.jpg`, desc: `HIGH-PERFORMANCE 5-INCH FPV RACING QUAD BUILT FOR SPEED, AGILITY, AND COMPETITION-GRADE PRECISION FLYING.` },
  { title: `FPV DRONE RACING`, status: `complete`, img: `/project img/Fpv.jpeg`, desc: `AGRICULTURAL HEXACOPTER WITH 5L PAYLOAD TANK FOR PRECISION CROP SPRAY USING ARDUPILOT AUTO-WAYPOINTS.` },
  { title: `RECYCLING OF LI-PO BATTERY`, status: `complete`, img: `/project img/Recycle batteries.jpeg`, desc: `AERODYNAMICS RESEARCH INTO LOOPED-TIP PROPELLER GEOMETRY — TARGETING -15 DB ACOUSTIC REDUCTION.` },
  { title: `SEED SPREADER`, status: `complete`, img: `/project img/Seed spreader.jpeg`, desc: `AERIAL PHOTOGRAMMETRY AND GIS-INTEGRATED TERRAIN MAPPING USING CUSTOM UAV PLATFORMS.` },
  { title: `TOROIDAL PROPELLER`, status: `complete`, img: `/project img/TOROIDAL PROPELLER.jpg`, desc: `FIXED-WING RC AIRCRAFT FROM SCRATCH — FOAM-BOARD TRAINERS TO FULLY 3D-PRINTED AIRFRAME VARIANTS.` },
  { title: `3D PRINTED RC PLANE`, status: `complete`, img: `/project img/3D printed plane.jpg`, desc: `ESP32-POWERED AUTONOMOUS GROUND ROBOT WITH ULTRASONIC AND IR OBSTACLE DETECTION.` },
  { title: `RC CAR COMPOSITE CHASSIS`, status: `complete`, img: `/project img/composite rc.jpeg`, desc: `ESP32-POWERED AUTONOMOUS GROUND ROBOT WITH ULTRASONIC AND IR OBSTACLE DETECTION.` },
  { title: `RC CAR METALLIC CHASSIS`, status: `complete`, img: `/project img/metaclic rc.jpeg`, desc: `ESP32-POWERED AUTONOMOUS GROUND ROBOT WITH ULTRASONIC AND IR OBSTACLE DETECTION.` },
  { title: `GIMBAL`, status: `complete`, img: `/project img/gimble.jpeg`, desc: `ESP32-POWERED AUTONOMOUS GROUND ROBOT WITH ULTRASONIC AND IR OBSTACLE DETECTION.` },
  { title: `AERIAL INSIGHT`, status: `complete`, img: `/project img/aerial insight.jpeg`, desc: `ESP32-POWERED AUTONOMOUS GROUND ROBOT WITH ULTRASONIC AND IR OBSTACLE DETECTION.` },
  { title: `RC CAR CHASSIS`, status: `complete`, img: `/project img/RC Car (Composite Chassis).jpeg`, desc: `ESP32-POWERED AUTONOMOUS GROUND ROBOT WITH ULTRASONIC AND IR OBSTACLE DETECTION.` },
  { title: `MINI DRONE`, status: `complete`, img: `/project img/Mini drone.jpeg`, desc: `ESP32-POWERED AUTONOMOUS GROUND ROBOT WITH ULTRASONIC AND IR OBSTACLE DETECTION.` },
  { title: `DESIGN AND DEVELOPMENT OF ESP32`, status: `complete`, img: `/project img/Esp 32.jpeg`, desc: `ESP32-POWERED AUTONOMOUS GROUND ROBOT WITH ULTRASONIC AND IR OBSTACLE DETECTION.` },
  { title: `HYBRID SOLAR POWERED RC PLANE`, status: `complete`, img: `/project img/Rc solar plane.jpeg`, desc: `ESP32-POWERED AUTONOMOUS GROUND ROBOT WITH ULTRASONIC AND IR OBSTACLE DETECTION.` },
  { title: `VIRTUAL FENCING & NAVIGATION`, status: `complete`, img: `/project img/navigation fencing.jpeg`, desc: `ESP32-POWERED AUTONOMOUS GROUND ROBOT WITH ULTRASONIC AND IR OBSTACLE DETECTION.` },
  { title: `S.O.S SYSTEM`, status: `complete`, img: `/project img/hidden rescue.jpeg`, desc: `ESP32-POWERED AUTONOMOUS GROUND ROBOT WITH ULTRASONIC AND IR OBSTACLE DETECTION.` },
  { title: `RC PLANE`, status: `complete`, img: ``, desc: `ESP32-POWERED AUTONOMOUS GROUND ROBOT WITH ULTRASONIC AND IR OBSTACLE DETECTION.` },
  { title: `FLOOD ANALYSIS`, status: `complete`, img: ``, desc: `ESP32-POWERED AUTONOMOUS GROUND ROBOT WITH ULTRASONIC AND IR OBSTACLE DETECTION.` },
  { title: `HANDSHAKE`, status: `complete`, img: ``, desc: `ESP32-POWERED AUTONOMOUS GROUND ROBOT WITH ULTRASONIC AND IR OBSTACLE DETECTION.` },
  { title: `AEROVISION`, status: `complete`, img: `/project img/Aerovision.jpeg`, desc: `ESP32-POWERED AUTONOMOUS GROUND ROBOT WITH ULTRASONIC AND IR OBSTACLE DETECTION.` },
  { title: `DRONE CHARGING STATION`, status: `complete`, img: `/project img/Drone charging station.jpeg`, desc: `ESP32-POWERED AUTONOMOUS GROUND ROBOT WITH ULTRASONIC AND IR OBSTACLE DETECTION.` },
  { title: `3D-PRINTED QUAD-DRONE`, status: `complete`, img: ``, desc: `ESP32-POWERED AUTONOMOUS GROUND ROBOT WITH ULTRASONIC AND IR OBSTACLE DETECTION.` },
  { title: `ROBOTICS CONTROL UNIT`, status: `complete`, img: ``, desc: `ESP32-POWERED AUTONOMOUS GROUND ROBOT WITH ULTRASONIC AND IR OBSTACLE DETECTION.` },
  { title: `PAPERWEIGHT`, status: `complete`, img: ``, desc: `ESP32-POWERED AUTONOMOUS GROUND ROBOT WITH ULTRASONIC AND IR OBSTACLE DETECTION.` },
  { title: `SMART GUARDIAN`, status: `complete`, img: ``, desc: `ESP32-POWERED AUTONOMOUS GROUND ROBOT WITH ULTRASONIC AND IR OBSTACLE DETECTION.` },
];

export default function Projects() {
  const [filter, setFilter] = useState('all');

  const filtered = filter === 'all' ? projectsData : projectsData.filter(p => p.status === filter);

  return (
    <div className="page-wrapper" style={{ paddingTop: '120px' }}>
      <div className="container">
        <p className="section-label">02 / PROJECTS</p>
        <h2 className="section-title">WHAT WE <span className="accent">BUILD</span></h2>

        <div className="filter-bar">
          <button className={`filter-btn ${filter === 'all' ? 'active' : ''}`} onClick={() => setFilter('all')}>ALL PROJECTS</button>
          <button className={`filter-btn ${filter === 'active' ? 'active' : ''}`} onClick={() => setFilter('active')}>ACTIVE</button>
          <button className={`filter-btn ${filter === 'complete' ? 'active' : ''}`} onClick={() => setFilter('complete')}>COMPLETE</button>
        </div>

        <div className="projects-grid">
          {filtered.map((p, idx) => (
            <div className="project-card" key={idx}>
              {p.status === 'active' && <div className="dossier-stamp">CONFIDENTIAL</div>}
              <div className="project-thumb">
                {p.img ? (
                  <img src={`${import.meta.env.BASE_URL}${p.img.startsWith('/') ? p.img.slice(1) : p.img}`} alt={p.title} />
                ) : (
                  <div className="missing-img-card">
                    <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="missing-icon">
                      <rect x="3" y="8" width="18" height="10" rx="2" ry="2" />
                      <line x1="7" y1="2" x2="7" y2="8" />
                      <line x1="17" y1="2" x2="17" y2="8" />
                      <circle cx="7" cy="3" r="1" />
                      <circle cx="17" cy="3" r="1" />
                      <path d="M8 13h8" />
                    </svg>
                    <span className="missing-text">VISIT CLUB TO SEE</span>
                  </div>
                )}
              </div>
              <div className={`project-status status-${p.status}`}>
                <span className="status-dot"></span>
                <span className="status-text">{p.status.toUpperCase()}</span>
              </div>
              <h3 className="project-name">{p.title}</h3>
              <p className="project-desc">{p.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
