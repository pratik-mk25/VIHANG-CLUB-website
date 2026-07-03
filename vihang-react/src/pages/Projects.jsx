import React, { useState } from 'react';
import './Projects.css';

const projectsData = [
  { title: `KAIZEN`, status: `active`, img: ``, desc: `A CONTINUOUS HARDWARE OPTIMIZATION AND RAPID ITERATION PIPELINE DESIGNED TO MAXIMIZE DRONE FLIGHT EFFICIENCY AND COMPONENT LIFESPANS.` },
  { title: `DRONE RIG`, status: `active`, img: ``, desc: `A DRONE RIG IS A STRUCTURED SETUP OF HARDWARE AND COMPONENTS (FRAME, MOTORS, CONTROLLERS, AND SENSORS) ASSEMBLED TO BUILD AND OPERATE A DRONE EFFICIENTLY.` },
  { title: `CUSTOM FLIGHT CONTROLLER`, status: `active`, img: ``, desc: `A CUSTOM FLIGHT CONTROLLER IS A DESIGNED CIRCUIT BOARD THAT MANAGES DRONE STABILITY, SENSOR DATA, AND FLIGHT OPERATIONS BASED ON USER REQUIREMENTS.` },
  { title: `TESSERACT GCS`, status: `active`, img: ``, desc: `TESSERACT GCS IS A GROUND CONTROL STATION SOFTWARE USED TO MONITOR, CONTROL, AND ANALYZE DRONE MISSIONS IN REAL TIME.` },
  { title: `AVINYA AI (CHATBOT)`, status: `active`, img: ``, desc: `AVINYA AI IS AN INTELLIGENT CHATBOT SYSTEM DESIGNED TO INTERACT WITH USERS, PROVIDE INFORMATION, AND AUTOMATE RESPONSES USING AI TECHNOLOGY.` },
  { title: `MULTI-PURPOSE AGRICULTURE DRONE`, status: `complete`, img: `/project img/project 1.jpg`, desc: `MULTI-PURPOSE UAV DESIGNED FOR SEED SPREADING, FERTILIZER SPRAYING, AND FIELD INSPECTION, EQUIPPED WITH A 16L CAPACITY TANK.` },
  { title: `FPV DRONE RACING`, status: `complete`, img: `/project img/Fpv.jpeg`, desc: `HIGH-PERFORMANCE 5-INCH FPV RACING QUAD BUILT FOR SPEED, AGILITY, AND COMPETITION-GRADE PRECISION FLYING.` },
  { title: `RECYCLING OF LI-PO BATTERY`, status: `complete`, img: `/project img/Recycle batteries.jpeg`, desc: `A RESEARCH INITIATIVE TO SAFELY DISCHARGE, DISMANTLE, AND REPURPOSE LITHIUM-POLYMER CELLS FOR SUSTAINABLE ENERGY STORAGE.` },
  { title: `SEED SPREADER`, status: `complete`, img: `/project img/Seed spreader.jpeg`, desc: `AUTONOMOUS AERIAL SEED DISPERSAL SYSTEM DESIGNED FOR RAPID REFORESTATION AND LARGE-SCALE AGRICULTURAL PLANTING.` },
  { title: `TOROIDAL PROPELLER`, status: `complete`, img: `/project img/TOROIDAL PROPELLER.jpg`, desc: `AERODYNAMICS RESEARCH INTO LOOPED-TIP PROPELLER GEOMETRY, TARGETING SIGNIFICANT ACOUSTIC REDUCTION AND EFFICIENCY GAINS.` },
  { title: `3D PRINTED RC PLANE`, status: `complete`, img: `/project img/3D printed plane.jpg`, desc: `LIGHTWEIGHT PLA-BASED 3D PRINTED FIXED-WING RC AIRCRAFT DESIGNED FOR RAPID PROTOTYPING AND AERODYNAMIC TESTING.` },
  { title: `RC CAR COMPOSITE CHASSIS`, status: `complete`, img: `/project img/composite rc.jpeg`, desc: `HIGH-DURABILITY COMPOSITE MATERIAL CHASSIS ENGINEERED TO WITHSTAND EXTREME OFF-ROAD IMPACTS AND STRESS.` },
  { title: `RC CAR METALLIC CHASSIS`, status: `complete`, img: `/project img/metaclic rc.jpeg`, desc: `CUSTOM-FABRICATED ALLOY CHASSIS DESIGNED FOR HIGH-SPEED STABILITY AND RIGIDITY IN COMPETITIVE RACING.` },
  { title: `GIMBAL`, status: `complete`, img: `/project img/gimble.jpeg`, desc: `STABLE TESTING STAND ENGINEERED TO SECURELY MOUNT DRONES FOR GIMBAL CALIBRATION AND PERFORMANCE TUNING WITHOUT ACTUAL FLIGHT.` },
  { title: `AERIAL INSIGHT`, status: `complete`, img: `/project img/aerial insight.jpeg`, desc: `UAV-DRIVEN INFRASTRUCTURE INSPECTION SYSTEM DEPLOYED FOR CRACK DETECTION AND STRUCTURAL MONITORING OF DAMS AND BRIDGES.` },
  { title: `RC CAR CHASSIS`, status: `complete`, img: `/project img/RC Car (Composite Chassis).jpeg`, desc: `PROTOTYPE ROVER PLATFORM DESIGNED FOR MODULARITY, ALLOWING RAPID SWAPPING OF SENSORS AND DRIVETRAINS.` },
  { title: `MINI DRONE`, status: `complete`, img: `/project img/Mini drone.jpeg`, desc: `MICRO-CLASS UAV ENGINEERED FOR INDOOR RECONNAISSANCE AND SWARM ALGORITHM TESTING.` },
  { title: `DESIGN AND DEVELOPMENT OF ESP32`, status: `complete`, img: `/project img/Esp 32.jpeg`, desc: `CUSTOM ESP32-BASED FLIGHT AND TELEMETRY CONTROLLER INTEGRATING WI-FI/BLUETOOTH COMMUNICATIONS FOR IOT UAVS.` },
  { title: `HYBRID SOLAR POWERED RC PLANE`, status: `complete`, img: `/project img/Rc solar plane.jpeg`, desc: `FIXED-WING RC PLATFORM INTEGRATING WING-MOUNTED SOLAR PANELS, BUCK-BOOST REGULATION, AND LI-PO BATTERIES TO EXTEND FLIGHT ENDURANCE.` },
  { title: `VIRTUAL FENCING & NAVIGATION`, status: `complete`, img: `/project img/navigation fencing.jpeg`, desc: `SOFTWARE-BASED GEOFENCING SOLUTION AND NAVIGATION SYSTEM DESIGNED TO RESTRICT AUTONOMOUS MOBILE ROVERS WITHIN SAFE, PREDEFINED ZONES.` },
  { title: `S.O.S SYSTEM`, status: `complete`, img: `/project img/hidden rescue.jpeg`, desc: `WEARABLE RESCUE ALERT SYSTEM FEATURING GSMA7670C AND GPS NEO 6M MODULES TO INSTANTLY TRANSMIT DISTRESS SIGNALS AND LOCATION DATA.` },
  { title: `RC PLANE`, status: `complete`, img: ``, desc: `PLA-BASED 3D PRINTED FIXED-WING AIRCRAFT DESIGNED TO DEMONSTRATE AERODYNAMICS, ELECTRONICS INTEGRATION, AND COST-EFFECTIVE MANUFACTURING.` },
  { title: `FLOOD ANALYSIS`, status: `complete`, img: ``, desc: `UAV AND SATELLITE IMAGING PIPELINE THAT CREATES 3D SIMULATION MODELS TO MONITOR WATER LEVELS AND GENERATE EARLY FLOOD WARNINGS.` },
  { title: `HANDSHAKE`, status: `complete`, img: ``, desc: `IN-HOUSE DEVELOPED TRANSMITTER-RECEIVER SYSTEM USING NRF24L01 AND STM32 MICROCONTROLLERS FOR HIGH-SPEED CUSTOM COMMUNICATIONS.` },
  { title: `AEROVISION`, status: `complete`, img: `/project img/Aerovision.jpeg`, desc: `MULTI-PURPOSE UAV SYSTEM FEATURING REAL-TIME CAMERA STREAMS AND AI-BASED HUMAN/OBJECT DETECTION FOR DISASTER MANAGEMENT SURVEILLANCE.` },
  { title: `DRONE CHARGING STATION`, status: `complete`, img: `/project img/Drone charging station.jpeg`, desc: `AUTONOMOUS CONTACT-BASED CHARGING PAD ENABLING DRONES TO RECHARGE BATTERIES SAFELY WITHOUT MANUAL CABLE CONNECTIONS.` },
  { title: `3D-PRINTED QUAD-DRONE`, status: `complete`, img: ``, desc: `LOW-COST 3D-PRINTED FPV QUADCOPTER FRAME DEVELOPED AS A CRASH-RESISTANT TESTBED FOR RAPID COMPONENT UPGRADES AND PILOT TRAINING.` },
  { title: `ROBOTICS CONTROL UNIT`, status: `complete`, img: ``, desc: `CUSTOM IN-HOUSE MOTOR DRIVER POWERED BY AN STM32G070 MCU AND DRV8837, DESIGNED TO REPLACE OFF-THE-SHELF L298 MODULES.` },
  { title: `PAPERWEIGHT`, status: `complete`, img: ``, desc: `CUSTOM STM32 FLIGHT CONTROLLER PROTOTYPE. A VALUABLE HARDWARE FAILURE THAT HIGHLIGHTED THE CRITICAL NECESSITY OF ESD PROTECTION AND GROUNDING.` },
  { title: `SMART GUARDIAN`, status: `complete`, img: ``, desc: `IOT-BASED SURVEILLANCE SYSTEM DEPLOYING YOLO HUMAN DETECTION AND FIRE SENSORS TO PROVIDE INSTANT NOTIFICATIONS DURING EMERGENCIES.` },
];

export default function Projects() {
  const [filter, setFilter] = useState('all');

  const filtered = filter === 'all' ? projectsData : projectsData.filter(p => p.status === filter);

  return (
    <div className="page-wrapper" style={{ paddingTop: '120px' }}>
      <div className="container">
        <p className="section-label fade-in visible">02 / PROJECTS</p>
        <h1 className="section-title fade-in visible">WHAT WE <span className="accent">BUILD</span></h1>

        <div className="filter-bar fade-in visible">
          <button className={`filter-btn ${filter === 'all' ? 'active' : ''}`} aria-pressed={filter === 'all'} onClick={() => setFilter('all')}>ALL SYSTEMS</button>
          <button className={`filter-btn ${filter === 'active' ? 'active' : ''}`} aria-pressed={filter === 'active'} onClick={() => setFilter('active')}>ACTIVE</button>
          <button className={`filter-btn ${filter === 'complete' ? 'active' : ''}`} aria-pressed={filter === 'complete'} onClick={() => setFilter('complete')}>COMPLETE</button>
        </div>

        <div className="projects-grid">
          {[...filtered.filter(p => p.status === 'active').reverse(), ...filtered.filter(p => p.status !== 'active').reverse()].map((p, idx) => (
            <div className="project-card fade-in visible" style={{ animationDelay: `${idx * 0.05}s` }} key={idx}>
              {/* {p.status === 'active' && <div className="dossier-stamp">CONFIDENTIAL</div>} */}
              
              <div className="project-thumb">
                {p.img ? (
                  <img src={`${import.meta.env.BASE_URL}${p.img.startsWith('/') ? p.img.slice(1) : p.img}`} alt={p.title} />
                ) : (
                  <div className="missing-img-card">
                    VISIT CLUB<br/>TO SEE<br/>SYSTEM
                  </div>
                )}
              </div>
              
              <div className="project-info">
                <div className={`project-status status-${p.status}`}>
                  <span className="status-dot"></span>
                  <span className="status-text">{p.status.toUpperCase()}</span>
                </div>
                <h3 className="project-name">{p.title}</h3>
                <p className="project-desc">{p.desc}</p>
              </div>

            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
