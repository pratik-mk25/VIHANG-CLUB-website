import React, { useState } from 'react';
import './Team.css';

const teamData = [
  { name: `Dr. S. B. Somani`, role: `Principal`, dept: `SSGMCE`, img: `/team img/sbsomanisir.jpg`, batch: `Faculty` },
  { name: `Dr. J. M. Patil`, role: `Incharge`, dept: `HOD of CSE`, img: `/team img/jmpatilsir.jpg`, batch: `Faculty` },
  { name: `Prof.S. B. Pagrut`, role: `Faculty Adviser`, dept: `AP CSE`, img: `/team img/sbpagrutsir.jpg`, batch: `Faculty` },
  { name: `Kunal Pisudde`, role: `Team Lead`, dept: `MECHANICAL`, img: `/team img/kunalp.jpeg`, batch: `2024` },
  { name: `Pratik Khadse`, role: `Associate Team Lead`, dept: `E&TC`, img: `/team img/pratik k.jpeg`, batch: `2025` },
  { name: `Manthan Kolte`, role: `TECHNICAL LEAD`, dept: `CSE`, img: ``, batch: `2025` },
  { name: `Rushikesh Payghan`, role: `Project Manager`, dept: `IT`, img: `/team img/r payghan.jpeg`, batch: `2025` },
  { name: `Pranav Harne`, role: `Media Head`, dept: `MECHANICAL`, img: ``, batch: `2025` },
  { name: `Atharva Raut`, role: `Designing Head`, dept: `E&TC`, img: `/team img/atharv.jpeg`, batch: `2024` },
  { name: `Hrishikesh Kakade`, role: `Research Associate`, dept: `IT`, img: ``, batch: `2025` },
  { name: `Atharva Ingle`, role: `Production Head`, dept: `IT`, img: ``, batch: `2025` },
  { name: `Sahil Khandare`, role: `Electronics Head`, dept: `IT`, img: `/team img/Sahil sir.jpg.jpeg`, batch: `2025` },
  { name: `Nivrutti Raut`, role: `Member`, dept: `IT`, img: ``, batch: `2025` },
  { name: `Parth Deshmukh`, role: `Member`, dept: `IT`, img: `/team img/parth.jpeg`, batch: `2025` },
  { name: `Vaibhav Udapure`, role: `Member`, dept: `IT`, img: ``, batch: `2026` },
  { name: `Arpit There`, role: `Member`, dept: `IT`, img: ``, batch: `2026` },
  { name: `Aditya Vaidya`, role: `Member`, dept: `IT`, img: ``, batch: `2026` },
  { name: `Amitesh Chavhan`, role: `Member`, dept: `IT`, img: `/team img/amitesh.jpeg`, batch: `2026` },
  { name: `Amol Gulhane`, role: `Member`, dept: `IT`, img: ``, batch: `2026` },
  { name: `Pavan Kajale`, role: `Member`, dept: `IT`, img: `/team img/pavank.jpeg`, batch: `2026` },
  { name: `Piyush K Dawange`, role: `Member`, dept: `IT`, img: `/team img/pd.png`, batch: `2026` },
  { name: `Om Nimbalkar`, role: `Member`, dept: `IT`, img: `/team img/omnimbalkar.jpeg`, batch: `2026` },
  { name: `Gaurav Ingle`, role: `Member`, dept: `IT`, img: ``, batch: `2026` },
  { name: `Aniruddh Pote`, role: `Member`, dept: `IT`, img: ``, batch: `2026` },
  { name: `Sanchit Deshmukh`, role: `Member`, dept: `IT`, img: ``, batch: `2026` },
  { name: `Ganesh Tupkar`, role: `Member`, dept: `IT`, img: `/team img/gtupkar.jpeg`, batch: `2026` },
  { name: `Pratiksha Bawaskar`, role: `Member`, dept: `IT`, img: `/team img/pratikshab.jpeg`, batch: `2026` },
  { name: `Vedanti Damdhar`, role: `Member`, dept: `IT`, img: `/team img/vdamdhar.jpeg`, batch: `2026` },
  { name: `VIHANG MEMBER`, role: `Member`, dept: `IT`, img: `/team img/Pvairale.jpeg`, batch: `2023` },
  { name: `Shreya Deshmukh`, role: `Member`, dept: `IT`, img: `/team img/sd.jpeg`, batch: `2023` },
  { name: `Bhumika Bal`, role: `Member`, dept: `IT`, img: `/team img/bbal.jpeg`, batch: `2023` },
  { name: `Riddhi Ambere`, role: `Member`, dept: `IT`, img: ``, batch: `2023` },
  { name: `Ishali Umale`, role: `Member`, dept: `IT`, img: `/team img/iumale.jpeg`, batch: `2023` },
  { name: `Piyush Dawange`, role: `Member`, dept: `IT`, img: ``, batch: `2023` },
];

const yearData = {
  '2026': { photo: 'VIHANG CLUB — BATCH 2026', caption: 'FULL TEAM PHOTO · 2026 BATCH · SSGMCE SHEGAON' },
  '2025': { photo: 'VIHANG CLUB — BATCH 2025', caption: 'FULL TEAM PHOTO · 2025 BATCH · SSGMCE SHEGAON' },
  '2024': { photo: 'VIHANG CLUB — BATCH 2024', caption: 'FULL TEAM PHOTO · 2024 BATCH · SSGMCE SHEGAON' },
  '2023': { photo: 'VIHANG CLUB — BATCH 2023 (FOUNDING)', caption: 'FOUNDING BATCH PHOTO · 2023 · SSGMCE SHEGAON' }
};

export default function Team() {
  const [selectedYear, setSelectedYear] = useState('2026');
  const [selectedTab, setSelectedTab] = useState('mentor'); // 'mentor', 'core', 'member'

  const getInitials = (name) => {
    return name.split(' ').map(n => n[0]).join('').substring(0, 2).toUpperCase();
  };

  // Faculty/Mentors are displayed regardless of the year, as they guide all batches
  const mentors = teamData.filter(m => m.batch === 'Faculty');
  
  // Core and Members are specific to the selected batch
  const core = teamData.filter(m => m.batch === selectedYear && m.role !== 'Member' && m.batch !== 'Faculty');
  const members = teamData.filter(m => m.batch === selectedYear && m.role === 'Member');

  const currentYearData = yearData[selectedYear] || yearData['2026'];

  return (
    <div className="page-wrapper" style={{ paddingTop: '120px' }}>
      <div className="container">
        <div className="section-header-row fade-in visible">
          <p className="section-label">06 / TEAM</p>
          <h2 className="section-title">PEOPLE OF <span className="accent">VIHANG</span></h2>
        </div>

        {/* Year Timeline Buttons */}
        <div className="team-year-timeline fade-in visible">
          {['2026', '2025', '2024', '2023'].map(year => (
            <button 
              key={year} 
              className={`year-btn ${selectedYear === year ? 'active' : ''}`}
              onClick={() => setSelectedYear(year)}
            >
              BATCH {year}
            </button>
          ))}
        </div>

        {/* Category Tabs */}
        <div className="team-cat-tabs fade-in visible" style={{ animationDelay: '0.1s' }}>
          <button 
            className={`team-tab ${selectedTab === 'mentor' ? 'active' : ''}`}
            onClick={() => setSelectedTab('mentor')}
          >
            MENTORS
          </button>
          <button 
            className={`team-tab ${selectedTab === 'core' ? 'active' : ''}`}
            onClick={() => setSelectedTab('core')}
          >
            CORE TEAM
          </button>
          <button 
            className={`team-tab ${selectedTab === 'member' ? 'active' : ''}`}
            onClick={() => setSelectedTab('member')}
          >
            MEMBERS
          </button>
        </div>

        {/* Dynamic Year Photo Box */}
        <div className="team-year-photo fade-in visible" style={{ animationDelay: '0.2s' }}>
          <div className="team-photo-placeholder">
            <span>{currentYearData.photo}</span>
          </div>
          <div className="team-photo-caption">{currentYearData.caption}</div>
        </div>

        {/* Grid Content */}
        {selectedTab === 'mentor' && (
          <div className="team-grid mentors">
            {mentors.map((m, i) => (
              <div className="team-card fade-in visible" style={{ animationDelay: `${i * 0.05}s` }} key={i}>
                <div className="team-avatar">
                  {m.img ? <img src={`${import.meta.env.BASE_URL}${m.img.startsWith('/') ? m.img.slice(1) : m.img}`} alt={m.name} /> : getInitials(m.name)}
                </div>
                <div className="team-name">{m.name}</div>
                <div className="team-role">{m.role}</div>
                <div className="team-dept">{m.dept}</div>
                <div className="team-links">
                  <span className="team-link">LI</span>
                  <span className="team-link">GH</span>
                </div>
              </div>
            ))}
          </div>
        )}

        {selectedTab === 'core' && (
          <div className="team-grid core">
            {core.length > 0 ? core.map((m, i) => (
              <div className="team-card fade-in visible" style={{ animationDelay: `${i * 0.05}s` }} key={i}>
                <div className="team-avatar">
                  {m.img ? <img src={`${import.meta.env.BASE_URL}${m.img.startsWith('/') ? m.img.slice(1) : m.img}`} alt={m.name} /> : getInitials(m.name)}
                </div>
                <div className="team-name">{m.name}</div>
                <div className="team-role">{m.role}</div>
                <div className="team-dept">{m.dept}</div>
                <div className="team-links">
                  <span className="team-link">LI</span>
                  <span className="team-link">GH</span>
                </div>
              </div>
            )) : (
              <div style={{ textAlign: 'center', color: 'var(--text-dim)', gridColumn: '1 / -1', padding: '2rem' }}>
                NO CORE MEMBERS RECORDED FOR BATCH {selectedYear}
              </div>
            )}
          </div>
        )}

        {selectedTab === 'member' && (
          <div className="team-grid members">
            {members.length > 0 ? members.map((m, i) => (
              <div className="member-card fade-in visible" style={{ animationDelay: `${i * 0.05}s` }} key={i}>
                <div className="member-avatar">
                  {m.img ? <img src={`${import.meta.env.BASE_URL}${m.img.startsWith('/') ? m.img.slice(1) : m.img}`} alt={m.name} /> : getInitials(m.name)}
                </div>
                <div className="member-name">{m.name.toUpperCase()}</div>
                <div className="member-role">{m.dept}</div>
              </div>
            )) : (
              <div style={{ textAlign: 'center', color: 'var(--text-dim)', gridColumn: '1 / -1', padding: '2rem' }}>
                NO MEMBERS RECORDED FOR BATCH {selectedYear}
              </div>
            )}
          </div>
        )}

      </div>
    </div>
  );
}
