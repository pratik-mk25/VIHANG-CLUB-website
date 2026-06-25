import React, { useState } from 'react';
import './Internships.css';

const ipData = {
  "stats": [
    {
      "value": "11+",
      "label": "INTERNSHIPS"
    },
    {
      "value": "8+",
      "label": "PLACEMENTS"
    },
    {
      "value": "8+",
      "label": "ALUMNI"
    },
    {
      "value": "100%",
      "label": "OFFER CONVERSION"
    }
  ],
  "companies": [
    "IDEAFORGE",
    "OP MOBILITY",
    "HYSTER-YELE",
    "ABB",
    "INNOVA RUBBERS PVT",
    "MAKXENIA ENGINEERING PVT",
    "INFOSYS"
  ],
  "cards": [
    {
      "type": "INTERNSHIP",
      "name": "TEJAS KALE",
      "org": "IDEAFORGE TECHNOLOGY LTD",
      "role": "IDEAFORGE WORKS ON DEVELOPING ADVANCED DRONE TECHNOLOGY FOR SURVEILLANCE, DEFENSE, AND INDUSTRIAL APPLICATIONS.",
      "meta": [
        "2025",
        "NAVI MUMBAI",
        "6 MONTHS"
      ]
    },
    {
      "type": "INTERNSHIP",
      "name": "SAHIL MATHURKAR",
      "org": "IDEAFORGE TECHNOLOGY LTD",
      "role": "IDEAFORGE WORKS ON DEVELOPING ADVANCED DRONE TECHNOLOGY FOR SURVEILLANCE, DEFENSE, AND INDUSTRIAL APPLICATIONS.",
      "meta": [
        "2025",
        "NAVI MUMBAI",
        "3 MONTHS"
      ]
    },
    {
      "type": "INTERNSHIP",
      "name": "ATHARAVA RAUT",
      "org": "IDEAFORGE TECHNOLOGY LTD",
      "role": "IDEAFORGE WORKS ON DEVELOPING ADVANCED DRONE TECHNOLOGY FOR SURVEILLANCE, DEFENSE, AND INDUSTRIAL APPLICATIONS.",
      "meta": [
        "2025",
        "NAVI MUMBAI",
        "3 MONTHS"
      ]
    },
    {
      "type": "INTERNSHIP",
      "name": "VAIBHAV UDAPURE",
      "org": "ABB INDIA LIMITED",
      "role": "ABB FOCUSES ON AUTOMATION, ROBOTICS, AND ELECTRIFICATION TECHNOLOGIES TO IMPROVE INDUSTRIAL EFFICIENCY AND SUSTAINABILITY.",
      "meta": [
        "2025",
        "NASHIK",
        "4 MONTHS"
      ]
    },
    {
      "type": "INTERNSHIP",
      "name": "MANTHAN KOLTE",
      "org": "IDEAFORGE TECHNOLOGY LTD",
      "role": "IDEAFORGE WORKS ON DEVELOPING ADVANCED DRONE TECHNOLOGY FOR SURVEILLANCE, DEFENSE, AND INDUSTRIAL APPLICATIONS.",
      "meta": [
        "2025-26",
        "NAVI MUMBAI",
        "6 MONTHS"
      ]
    },
    {
      "type": "INTERNSHIP",
      "name": "HRISHIKESH KAKADE",
      "org": "IDEAFORGE TECHNOLOGY LTD",
      "role": "IDEAFORGE WORKS ON DEVELOPING ADVANCED DRONE TECHNOLOGY FOR SURVEILLANCE, DEFENSE, AND INDUSTRIAL APPLICATIONS.",
      "meta": [
        "2025-26",
        "NAVI MUMBAI",
        "6 MONTHS"
      ]
    },
    {
      "type": "INTERNSHIP",
      "name": "PRANAV HARNE",
      "org": "IDEAFORGE TECHNOLOGY LTD",
      "role": "IDEAFORGE WORKS ON DEVELOPING ADVANCED DRONE TECHNOLOGY FOR SURVEILLANCE, DEFENSE, AND INDUSTRIAL APPLICATIONS.",
      "meta": [
        "2025-26",
        "NAVI MUMBAI",
        "6 MONTHS"
      ]
    },
    {
      "type": "INTERNSHIP",
      "name": "ARPIT THERE",
      "org": "LLOYDS METALS AND ENERGY LTD",
      "role": "FOCUSES ON IRON ORE MINING AND STEEL PRODUCTION, SUPPORTING INFRASTRUCTURE AND INDUSTRIAL DEVELOPMENT.",
      "meta": [
        "2025-26",
        "CHANDRAPUR",
        "6 MONTHS"
      ]
    },
    {
      "type": "INTERNSHIP",
      "name": "ADITYA VAIDYA",
      "org": "WESTERN COALFIELD LIMITED",
      "role": "ENGAGES IN COAL MINING AND SUPPLIES FUEL FOR POWER GENERATION AND INDUSTRIAL USE",
      "meta": [
        "2025-26",
        "CHANDRAPUR",
        "2 MONTHS"
      ]
    },
    {
      "type": "INTERNSHIP",
      "name": "VAIBHAV UDAPURE",
      "org": "IDEAFORGE TECHNOLOGY LTD",
      "role": "IDEAFORGE WORKS ON DEVELOPING ADVANCED DRONE TECHNOLOGY FOR SURVEILLANCE, DEFENSE, AND INDUSTRIAL APPLICATIONS.",
      "meta": [
        "2025-26",
        "NAVI MUMBAI",
        "6 MONTHS"
      ]
    },
    {
      "type": "PLACEMENT",
      "name": "DEEP GOJE",
      "org": "OP MOBILITY.",
      "role": "MECHANICAL ENGINEER",
      "meta": [
        "2024",
        "PUNE"
      ]
    },
    {
      "type": "PLACEMENT",
      "name": "SHREEHARSH APTE",
      "org": "HYSTER-YELE.",
      "role": "DESIGN ENGINEER",
      "meta": [
        "2024",
        "PUNE"
      ]
    },
    {
      "type": "PLACEMENT",
      "name": "YURAJ HARNE",
      "org": "ABB INDIA LIMITED.R&D",
      "role": "QUALITY TESTING ENGINEER",
      "meta": [
        "2024",
        "NASHIK"
      ]
    },
    {
      "type": "PLACEMENT",
      "name": "VINAY WANKHEDE",
      "org": "INNOVA RUBBERS PVT.LTD.",
      "role": "MECHANICAL ENGINEER",
      "meta": [
        "2024",
        "NASHIK"
      ]
    },
    {
      "type": "PLACEMENT",
      "name": "LOKESH HIWARKAR",
      "org": "MAKXENIA ENGINEERING PVT.LTD.",
      "role": "EMBEDDED ENGINEER",
      "meta": [
        "2024",
        "NAGPUR"
      ]
    },
    {
      "type": "PLACEMENT",
      "name": "TEJAS GAIWAD",
      "org": "INFOSYS.",
      "role": "WEB APPLICATION DEVELOPER",
      "meta": [
        "2024",
        "NAGPUR"
      ]
    },
    {
      "type": "PLACEMENT",
      "name": "TEJAS KALE",
      "org": "IDEAFORGE TECHNOLOGY LTD.",
      "role": "OPERATION ENGINEER",
      "meta": [
        "2025",
        "MUMBAI"
      ]
    },
    {
      "type": "PLACEMENT",
      "name": "SAHIL MATHHURKAR",
      "org": "IDEAFORGE TECHNOLOGY LTD.",
      "role": "AUTOMATION ENGINEER",
      "meta": [
        "2025",
        "MUMBAI"
      ]
    }
  ]
};

export default function Internships() {
  const [activeTab, setActiveTab] = useState('INTERNSHIP');

  return (
    <div className="page-wrapper" style={{ paddingTop: '120px' }}>
      <div className="container">
        
        <div className="ip-hero">
          <p className="section-label">05 / INTERNSHIP &amp; PLACEMENT</p>
          <h1 className="section-title">INDUSTRY <span className="accent">CONNECT</span></h1>
          <p className="ip-desc" style={{ marginTop: '1.5rem' }}>
            VIHANG CLUB BRIDGES THE GAP BETWEEN ACADEMIC RESEARCH AND INDUSTRY. 
            OUR MEMBERS HAVE SECURED PLACEMENTS AND INTERNSHIPS AT LEADING AEROSPACE, 
            DEFENSE, AND TECHNOLOGY ORGANIZATIONS.
          </p>
        </div>

        <div className="ip-stats-container">
          <div className="ip-stats-grid">
            {ipData.stats.map((s, i) => (
              <div className="ip-stat-block" key={i}>
                <span className="ip-stat-val">{s.value}</span>
                <span className="ip-stat-lbl">{s.label}</span>
              </div>
            ))}
          </div>
          <div className="ip-companies-marquee">
            {ipData.companies.map((c, i) => (
              <span className="ip-company-tag" key={i}>[{c}]</span>
            ))}
          </div>
        </div>

        <div className="ip-control-panel">
          <button 
            className={`ip-cmd-btn ${activeTab === 'INTERNSHIP' ? 'active' : ''}`}
            onClick={() => setActiveTab('INTERNSHIP')}
          >
            ACTIVE INTERNSHIPS
          </button>
          <button 
            className={`ip-cmd-btn ${activeTab === 'PLACEMENT' ? 'active' : ''}`}
            onClick={() => setActiveTab('PLACEMENT')}
          >
            SECURED PLACEMENTS
          </button>
        </div>

        <div className="ip-dossier-grid">
          {ipData.cards.filter(c => c.type === activeTab).map((card, i) => (
            <div className="dossier-card" key={i}>
              <div className="dossier-header">
                <span className={`dossier-status ${card.type.toLowerCase()}`}>{card.type}</span>
                <span className="dossier-id">ID-{String(i+1).padStart(4, '0')}</span>
              </div>
              <div className="dossier-body">
                <div className="dossier-name">{card.name}</div>
                <div className="dossier-org">{card.org}</div>
                <div className="dossier-role">&gt; {card.role}</div>
              </div>
              <div className="dossier-footer">
                {card.meta.map((m, idx) => (
                  <span className="dossier-meta-pill" key={idx}>{m}</span>
                ))}
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}
