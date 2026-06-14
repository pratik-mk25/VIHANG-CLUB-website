import React from 'react';
import './Achievements.css';

const achievementsData = [
  {
    "year": "JAN 2026 \u2013 PRESENT",
    "items": [
      {
        "type": "COMPETITION",
        "title": "FIRST PRIZE \u2014 ROBO WING EVENT, NATIONAL LEVEL TECHFEST VIDYOTAN AT SIPNA COE&T, AMRAVATI",
        "desc": "FEB 2026 \u2014 FIRST PRIZE IN ROBO WING EVENT OF NATIONAL LEVEL TECHFEST VIDYOTAN AT SIPNA COLLEGE OF ENGINEERING & TECHNOLOGY, AMRAVATI."
      },
      {
        "type": "INTERNSHIP",
        "title": "INTERNSHIP AT IDEA FORGE ON BASIS OF PROJECT",
        "desc": "JAN 2026 \u2014 INTERNSHIP AT IDEA FORGE ON BASIS OF PROJECT."
      }
    ]
  },
  {
    "year": "DEC 2025",
    "items": [
      {
        "type": "COMPETITION",
        "title": "THIRD PRIZE \u2014 ENGINEERING & TECHNOLOGY CATEGORY, UNIVERSITY LEVEL AVISHKAR AT SGBAU",
        "desc": "DEC 2025 \u2014 THIRD PRIZE IN ENGINEERING & TECHNOLOGY CATEGORY AT UNIVERSITY LEVEL AVISHKAR COMPETITION AT SGBAU."
      },
      {
        "type": "COMPETITION",
        "title": "SECOND PRIZE \u2014 PURE SCIENCE CATEGORY, UNIVERSITY LEVEL AVISHKAR AT SGBAU",
        "desc": "DEC 2025 \u2014 SECOND PRIZE IN PURE SCIENCE CATEGORY AT UNIVERSITY LEVEL AVISHKAR COMPETITION AT SGBAU."
      },
      {
        "type": "PROJECT",
        "title": "DESIGN AND DEVELOPMENT OF SOLAR HYBRID PLANE",
        "desc": "DEC 2025 \u2014 DESIGN AND DEVELOPMENT OF SOLAR HYBRID PLANE."
      },
      {
        "type": "PROJECT",
        "title": "DESIGN AND DEVELOPMENT OF SMART GUARDIAN",
        "desc": "DEC 2025 \u2014 DESIGN AND DEVELOPMENT OF SMART GUARDIAN."
      },
      {
        "type": "PROJECT",
        "title": "DESIGN AND DEVELOPMENT OF HUMAN SAFETY DEVICE [RESCUE ALERT SYSTEM]",
        "desc": "DEC 2025 \u2014 DESIGN AND DEVELOPMENT OF HUMAN SAFETY DEVICE \u2014 RESCUE ALERT SYSTEM."
      },
      {
        "type": "PROJECT",
        "title": "DESIGN AND DEVELOPMENT OF VIRTUAL FENCING AND NAVIGATION SYSTEM FOR AUTONOMOUS MOBILE ROVER",
        "desc": "DEC 2025 \u2014 DESIGN AND DEVELOPMENT OF VIRTUAL FENCING AND NAVIGATION SYSTEM FOR AUTONOMOUS MOBILE ROVER."
      },
      {
        "type": "PROJECT",
        "title": "DESIGN AND DEVELOPMENT OF SYSTEM FOR MAPPING OF FLOOD AND EARLY WARNING [UAV]",
        "desc": "DEC 2025 \u2014 DESIGN AND DEVELOPMENT OF SYSTEM FOR MAPPING OF FLOOD AND EARLY WARNING USING UAV."
      },
      {
        "type": "PROJECT",
        "title": "DESIGN AND DEVELOPMENT OF AEROVISION [HUMAN SURVEILLANCE]",
        "desc": "DEC 2025 \u2014 DESIGN AND DEVELOPMENT OF AEROVISION FOR HUMAN SURVEILLANCE."
      },
      {
        "type": "PROJECT",
        "title": "DESIGN AND DEVELOPMENT OF RECEIVER AND TRANSMITTER",
        "desc": "DEC 2025 \u2014 DESIGN AND DEVELOPMENT OF RECEIVER AND TRANSMITTER."
      },
      {
        "type": "INTERNSHIP",
        "title": "INTERNSHIP AT VCL CYBER SOLUTION ON BASIS OF PROJECT",
        "desc": "DEC 2025 \u2014 INTERNSHIP AT VCL CYBER SOLUTION ON BASIS OF PROJECT."
      }
    ]
  },
  {
    "year": "NOV\u2013DEC 2025",
    "items": [
      {
        "type": "INTERNSHIP",
        "title": "INTERNSHIP AT WCL ON BASIS OF PROJECT",
        "desc": "DEC 2025 \u2014 INTERNSHIP AT WCL ON BASIS OF PROJECT."
      },
      {
        "type": "INTERNSHIP",
        "title": "INTERNSHIP AT LLOYD'S ON BASIS OF PROJECT",
        "desc": "DEC 2025 \u2014 INTERNSHIP AT LLOYD'S ON BASIS OF PROJECT."
      },
      {
        "type": "PATENT",
        "title": "PATENT PUBLISHED \u2014 AEROVISION",
        "desc": "NOV 2025 \u2014 PATENT PUBLISHED FOR AEROVISION."
      },
      {
        "type": "COMPETITION",
        "title": "THIRD PRIZE \u2014 ET CATEGORY, DISTRICT LEVEL AVISHKAR, BULDHANA",
        "desc": "NOV 2025 \u2014 THIRD PRIZE IN ET CATEGORY AT DISTRICT LEVEL AVISHKAR COMPETITION AT RAJSHRI SHAHU MAHARAJ COLLEGE OF PHARMACY, BULDHANA."
      },
      {
        "type": "COMPETITION",
        "title": "SECOND PRIZE \u2014 PURE SCIENCE CATEGORY, DISTRICT LEVEL AVISHKAR, BULDHANA",
        "desc": "NOV 2025 \u2014 SECOND PRIZE IN PURE SCIENCE CATEGORY AT DISTRICT LEVEL AVISHKAR COMPETITION AT RAJSHRI SHAHU MAHARAJ COLLEGE OF PHARMACY, BULDHANA."
      }
    ]
  },
  {
    "year": "AUG\u2013NOV 2025",
    "items": [
      {
        "type": "COMPETITION",
        "title": "FIRST PRIZE \u2014 HLFA CATEGORY, DISTRICT LEVEL AVISHKAR, BULDHANA",
        "desc": "NOV 2025 \u2014 FIRST PRIZE IN HLFA CATEGORY AT DISTRICT LEVEL AVISHKAR COMPETITION AT RAJSHRI SHAHU MAHARAJ COLLEGE OF PHARMACY, BULDHANA."
      },
      {
        "type": "INTERNSHIP",
        "title": "INTERNSHIP AT IDEA FORGE ON BASIS OF PROJECT",
        "desc": "NOV 2025 \u2014 INTERNSHIP AT IDEA FORGE ON BASIS OF PROJECT."
      },
      {
        "type": "INTERNSHIP",
        "title": "INTERNSHIP AT IDEA FORGE ON BASIS OF PROJECT",
        "desc": "NOV 2025 \u2014 INTERNSHIP AT IDEA FORGE ON BASIS OF PROJECT."
      },
      {
        "type": "PATENT",
        "title": "PATENT PUBLISHED \u2014 FLOOD ANALYSIS",
        "desc": "SEP 2025 \u2014 PATENT PUBLISHED FOR FLOOD ANALYSIS."
      },
      {
        "type": "INTERNSHIP",
        "title": "INTERNSHIP AT ABB ON BASIS OF PROJECT",
        "desc": "AUGUST 2025 \u2014 INTERNSHIP AT ABB ON BASIS OF PROJECT."
      }
    ]
  },
  {
    "year": "APR\u2013JUN 2025",
    "items": [
      {
        "type": "INTERNSHIP",
        "title": "INTERNSHIP AT IDEA FORGE ON BASIS OF PROJECT",
        "desc": "JUNE 2025 \u2014 INTERNSHIP AT IDEA FORGE ON BASIS OF PROJECT."
      },
      {
        "type": "INTERNSHIP",
        "title": "INTERNSHIP AT IDEA FORGE ON BASIS OF PROJECT",
        "desc": "JUNE 2025 \u2014 INTERNSHIP AT IDEA FORGE ON BASIS OF PROJECT."
      },
      {
        "type": "PATENT",
        "title": "PATENT PUBLISHED \u2014 RC PLANE",
        "desc": "APRIL 2025 \u2014 PATENT PUBLISHED FOR RC PLANE."
      },
      {
        "type": "COMPETITION",
        "title": "SECOND PRIZE \u2014 NATION LEVEL PROJECT EXPO AT MIT ADT UNIVERSITY, PUNE",
        "desc": "APRIL 2025 \u2014 GOT SECOND PRIZE IN NATION LEVEL PROJECT EXPO AT MIT ADT UNIVERSITY, PUNE."
      },
      {
        "type": "COMPETITION",
        "title": "FIRST PRIZE \u2014 AROVISTA AT TULSIRAMJI GAIKWAD PATIL COE, NAGPUR",
        "desc": "APRIL 2025 \u2014 GOT FIRST PRIZE IN AROVISTA AT TULSIRAMJI GAIKWAD PATIL COE, NAGPUR."
      }
    ]
  },
  {
    "year": "MAR\u2013APR 2025",
    "items": [
      {
        "type": "COMPETITION",
        "title": "FIRST PRIZE [\u20b951K] \u2014 NATIONAL LEVEL PROJECT COMPETITION, MKD INSTITUTE, NANDURBAR",
        "desc": "APRIL 2025 \u2014 GOT FIRST PRIZE (\u20b951K) IN NATIONAL LEVEL PROJECT COMPETITION AT MKD INSTITUTE OF TECHNOLOGY, NANDURBAR."
      },
      {
        "type": "COMPETITION",
        "title": "FIRST PRIZE \u2014 NATIONAL LEVEL DRONE RACING, GCOE JALGAON",
        "desc": "MARCH 2025 \u2014 GOT FIRST PRIZE IN NATIONAL LEVEL DRONE RACING COMPETITION AT GCOE JALGAON."
      },
      {
        "type": "COMPETITION",
        "title": "FIRST PRIZE \u2014 STATE LEVEL PROJECT EXHIBITION AT SIT CAMPUS, KHAMGAON",
        "desc": "MARCH 2025 \u2014 GOT FIRST PRIZE IN STATE LEVEL PROJECT EXHIBITION AT SIT CAMPUS, KHAMGAON."
      },
      {
        "type": "INTERNSHIP",
        "title": "INTERNSHIP AT IDEA FORGE ON BASIS OF PROJECT",
        "desc": "MARCH 2025 \u2014 INTERNSHIP AT IDEA FORGE ON BASIS OF PROJECT."
      },
      {
        "type": "COMPETITION",
        "title": "FIRST PRIZE \u2014 GPGI, NAGPUR",
        "desc": "MARCH 2025 \u2014 GOT FIRST PRIZE IN GPGI, NAGPUR."
      }
    ]
  },
  {
    "year": "FEB\u2013MAR 2025",
    "items": [
      {
        "type": "COMPETITION",
        "title": "FIRST AND SECOND PRIZE \u2014 GCOE, JALGAON",
        "desc": "MARCH 2025 \u2014 GOT FIRST AND SECOND PRIZE IN GCOE, JALGAON."
      },
      {
        "type": "COMPETITION",
        "title": "THIRD PRIZE \u2014 NATIONAL LEVEL TECHNICAL EVENT PURSUIT",
        "desc": "MARCH 2025 \u2014 GOT THIRD PRIZE AT NATIONAL LEVEL TECHNICAL EVENT PURSUIT."
      },
      {
        "type": "VISIT",
        "title": "GREAT VISIT TO IDEAFORGE",
        "desc": "MARCH 2025 \u2014 GREAT VISIT TO IDEAFORGE \u2014 IMPRESSIVE DRONE TECH AND INNOVATION."
      },
      {
        "type": "PUBLICATION",
        "title": "RESEARCH PAPER PUBLISHED \u2014 PROJECT AERIAL INSIGHT",
        "desc": "FEB 2025 \u2014 RESEARCH PAPER PUBLISHED ON PROJECT AERIAL INSIGHT."
      },
      {
        "type": "PROJECT",
        "title": "DESIGN & DEVELOPMENT OF OBSTACLE AVOIDANCE ROBOT CAR",
        "desc": "JAN 2025 \u2014 DESIGN & DEVELOPMENT OF OBSTACLE AVOIDANCE ROBOT CAR."
      }
    ]
  },
  {
    "year": "DEC 2024\u2013JAN 2025",
    "items": [
      {
        "type": "PROJECT",
        "title": "DESIGN & DEVELOPMENT OF RC PLANE [IIT KANPUR]",
        "desc": "JAN 2025 \u2014 DESIGN & DEVELOPMENT OF RC PLANE FOR IIT KANPUR."
      },
      {
        "type": "PROJECT",
        "title": "ASSEMBLED RC CAR [FOR COMPETITION]",
        "desc": "JAN 2025 \u2014 ASSEMBLED RC CAR FOR COMPETITION."
      },
      {
        "type": "INTERNSHIP",
        "title": "INTERNSHIP AT IDEA FORGE \u2014 ALUMNI MEET",
        "desc": "JAN 2025 \u2014 INTERNSHIP AT IDEA FORGE IN ALUMNI MEET ON THE BASIS OF PROJECT."
      },
      {
        "type": "PROJECT",
        "title": "ASSEMBLED MINI DRONE",
        "desc": "DEC 2024 \u2014 ASSEMBLED MINI DRONE."
      },
      {
        "type": "COMPETITION",
        "title": "SECOND PRIZE \u2014 STATE LEVEL UNIVERSITY AVISHKAR",
        "desc": "DEC 2024 \u2014 SECOND PRIZE AT STATE LEVEL UNIVERSITY AVISHKAR COMPETITION."
      }
    ]
  },
  {
    "year": "APR\u2013OCT 2024",
    "items": [
      {
        "type": "COMPETITION",
        "title": "FIRST PRIZE AT DISTRICT LEVEL \u2014 AVISHKAR",
        "desc": "OCT 2024 \u2014 GOT FIRST PRIZE AT DISTRICT LEVEL IN AVISHKAR."
      },
      {
        "type": "PROJECT",
        "title": "DESIGN AND DEVELOPMENT OF RC CAR [FUNDED]",
        "desc": "SEPT 2024 \u2014 DESIGN AND DEVELOPMENT OF RC CAR, FUNDED."
      },
      {
        "type": "PROJECT",
        "title": "DESIGN AND DEVELOPMENT OF RC PLANE",
        "desc": "SEPT 2024 \u2014 DESIGN AND DEVELOPMENT OF RC PLANE."
      },
      {
        "type": "PATENT",
        "title": "PATENT PUBLISHED \u2014 DATA ANALYSIS CONFIGURATION FOR UAV SYSTEM",
        "desc": "SEPT 2024 \u2014 PATENT PUBLISHED FOR DATA ANALYSIS CONFIGURATION FOR UAV SYSTEM."
      },
      {
        "type": "PATENT",
        "title": "PATENT FILED \u2014 SEED SPREADER USING UAV",
        "desc": "APRIL 2024 \u2014 PATENT FILED FOR SEED SPREADER USING UAV."
      }
    ]
  },
  {
    "year": "JAN\u2013MAR 2024",
    "items": [
      {
        "type": "COMPETITION",
        "title": "SECOND RUNNER-UP \u2014 TECHKRITI, IIT KANPUR",
        "desc": "MARCH 2024 \u2014 SECOND RUNNER-UP IN TECHKRITI AT IIT KANPUR."
      },
      {
        "type": "PROJECT",
        "title": "DESIGN AND DEVELOPMENT OF SEED SPREADER SYSTEM",
        "desc": "MARCH 2024 \u2014 DESIGN AND DEVELOPMENT OF SEED SPREADER SYSTEM."
      },
      {
        "type": "COMPETITION",
        "title": "FIRST AND SECOND PRIZE \u2014 GCOE, JALGAON",
        "desc": "FEB 2024 \u2014 GOT FIRST AND SECOND PRIZE IN GCOE, JALGAON."
      },
      {
        "type": "PROJECT",
        "title": "DESIGN AND DEVELOPMENT OF RC CAR [FUNDED]",
        "desc": "FEB 2024 \u2014 DESIGN AND DEVELOPMENT OF RC CAR, FUNDED PROJECT."
      },
      {
        "type": "COMPETITION",
        "title": "FOURTH RANK \u2014 GCOE, AURANGABAD USING FPV",
        "desc": "JAN 2024 \u2014 GOT FOURTH RANK IN GCOE, AURANGABAD USING FPV."
      }
    ]
  },
  {
    "year": "JULY\u2013DEC 2023",
    "items": [
      {
        "type": "COMPETITION",
        "title": "WON TITLE PRIZE \u2014 HACKATHON AT SVKM, DHULE",
        "desc": "DEC 2023 \u2014 WON TITLE PRIZE IN HACKATHON AT SVKM, DHULE USING SCRAP DRONE."
      },
      {
        "type": "PROJECT",
        "title": "DEVELOPMENT OF SCRAP BASED DRONE [SEMI-FUNDED]",
        "desc": "DEC 2023 \u2014 DEVELOPMENT OF SCRAP BASED DRONE, SEMI-FUNDED."
      },
      {
        "type": "PROJECT",
        "title": "DESIGN AND DEVELOPMENT OF PLA BASED RC PLANE",
        "desc": "OCT 2023 \u2014 DESIGN AND DEVELOPMENT OF PLA BASED RC PLANE."
      },
      {
        "type": "PROJECT",
        "title": "DESIGN AND DEVELOPMENT OF QUAD-COPTER [FPV]",
        "desc": "OCT 2023 \u2014 DESIGN AND DEVELOPMENT OF FPV QUAD-COPTER."
      },
      {
        "type": "PROJECT",
        "title": "DEVELOPMENT OF HEX-COPTER [SPRAYING DRONE]",
        "desc": "JULY 2023 \u2014 DEVELOPMENT OF HEX-COPTER SPRAYING DRONE."
      }
    ]
  }
];

export default function Achievements() {
  return (
    <div className="page-wrapper" style={{ paddingTop: '120px' }}>
      <div className="container">
        <p className="section-label">04 / ACHIEVEMENTS</p>
        <h2 className="section-title">MISSION <span className="accent">LOG</span></h2>
        
        <div className="mission-log-wrapper">
          <div className="log-header">
            <span className="log-sys">&gt; SYSTEM_READ: MILESTONES_DB_CONNECTED</span>
            <span className="log-status">SECURE CONNECTION</span>
          </div>
          
          <div className="log-feed">
            {achievementsData.map((group, gIdx) => (
              <div className="log-group" key={gIdx}>
                <div className="log-year-marker">
                  <span className="bracket">[</span>
                  TIMEFRAME: {group.year}
                  <span className="bracket">]</span>
                </div>
                
                {group.items.map((item, iIdx) => (
                  <div className="log-entry" key={iIdx}>
                    <div className="log-meta">
                      <span className="log-prompt">&gt;</span>
                      <span className={`log-type ${item.type.toLowerCase().replace(' ', '-')}`}>
                        {item.type}
                      </span>
                    </div>
                    <div className="log-content">
                      <div className="log-title">{item.title}</div>
                      <div className="log-desc">{item.desc}</div>
                    </div>
                  </div>
                ))}
              </div>
            ))}
          </div>
          
          <div className="log-footer">
            <span>&gt; END OF LOG</span>
            <span className="cursor-blink">_</span>
          </div>
        </div>
      </div>
    </div>
  );
}
