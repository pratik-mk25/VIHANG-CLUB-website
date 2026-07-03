import React, { useState } from 'react';
import './Team.css';

const teamData = [
  // FACULTY
  { name: `Dr. S. B. Somani`, role: `Principal`, dept: `SSGMCE`, img: `/team img/drsbsomani.jpg`, batch: `Faculty` },
  { name: `Dr. J. M. Patil`, role: `Faculty Incharge`, dept: `HOD of CSE`, img: `/team img/drjmpatil.jpg`, batch: `Faculty` },
  { name: `Prof. S. B. Pagrut`, role: `Faculty Advisor`, dept: `AP CSE`, img: `/team img/sbpagrut.jpg`, batch: `Faculty` },
  { name: `Dr. S. B. Patil`, role: `Faculty Incharge`, dept: ``, img: `/team img/drsbpatil.jpg`, batch: `Faculty` },

  // BATCH 2024 CORE TEAM
  { name: `Deep Goje`, role: `Captain`, dept: `MECHANICAL`, img: `/team img/batch-25/deep goje.jpg`, batch: `2024` },
  { name: `Tejas Kale`, role: `Secretary`, dept: `E&TC`, img: `/team img/batch-25/tejas kale.jpg`, batch: `2024` },
  { name: `Shreeharsh Apte`, role: `Vice Captain`, dept: `MECHANICAL`, img: `/team img/batch-25/shreeharsh.jpg`, batch: `2024` },
  { name: `Yuraj Harne`, role: `Production Head`, dept: `MECHANICAL`, img: `/team img/batch-25/yuvraj harne.jpg`, batch: `2024` },
  { name: `Lokesh Hiwarkar`, role: `Electronics Head`, dept: `E&TC`, img: `/team img/batch-25/lokesh.jpg`, batch: `2024` },
  { name: `Vinay Wankhade`, role: `Production Head`, dept: `MECHANICAL`, img: `/team img/batch-25/vinay wankhade.jpg`, batch: `2024` },
  { name: `Tejas Gaikwad`, role: `Research Head`, dept: `E&TC`, img: `/team img/batch-25/tejas gaikwad.jpg`, batch: `2024` },

  // BATCH 2025 CORE TEAM
  { name: `Tejas Kale`, role: `Captain`, dept: `E&TC`, img: `/team img/batch-25/tejas kale.jpg`, batch: `2025` },
  { name: `Kunal Pisudde`, role: `Vice Captain`, dept: `ELPO`, img: `/team img/batch-26/kunal.jpeg`, batch: `2025` },
  { name: `Sahil Mathurkar`, role: `Secretary`, dept: `E&TC`, img: `/team img/batch-25/Sahil_mathurkar.jpg`, batch: `2025` },

  // BATCH 2026 CORE TEAM
  { name: `Kunal Pisudde`, role: `Captain`, dept: `ELPO`, img: `/team img/batch-26/kunal.jpeg`, batch: `2026` },
  { name: `Pratik Khadse`, role: `Vice Captain`, dept: `E&TC`, img: `/team img/batch-26/pratikkhadse.png`, batch: `2026` },
  { name: `Manthan Kolte`, role: `Technical Head`, dept: `ELPO`, img: `/team img/batch-26/manthan.jpg`, batch: `2026` },
  { name: `Rushikesh Payghan`, role: `Project Manager`, dept: `ELPO`, img: `/team img/batch-26/r payghan.jpeg`, batch: `2026` },
  { name: `Pranav Harne`, role: `Social Media Head`, dept: `ELPO`, img: `/team img/batch-26/pranav.jpg`, batch: `2026` },
  { name: `Sahil Khandare`, role: `Electronics Head`, dept: `E&TC`, img: `/team img/batch-26/Sahil.jpeg`, batch: `2026` },
  { name: `Hrishikesh Kakade`, role: `Research Associate`, dept: `E&TC`, img: `/team img/batch-26/Hrishikesh.jpg`, batch: `2026` },
  { name: `Atharv Ingle`, role: `Production Head`, dept: `ELPO`, img: `/team img/batch-26/ath.jpg`, batch: `2026` },
  { name: `Atharva Raut`, role: `Designing Head`, dept: `E&TC`, img: `/team img/batch-26/atharav.jpg`, batch: `2026` },


  // BATCH 2027 CORE TEAM
  { name: `Pratik Khadse`, role: `Captain`, dept: `E&TC`, img: `/team img/batch-26/pratikkhadse.png`, batch: `2027` },
  { name: `Nivrutti Raut`, role: `Secretary`, dept: `ELPO`, img: `/team img/batch-27/Nivrutti.jpg`, batch: `2027` },
  { name: `Vaibhav Udapure`, role: `Electronics Head`, dept: `E&TC`, img: `/team img/vaibhavu.jpeg`, batch: `2027` },
  { name: `Arpit There`, role: `Admin Head`, dept: `ELPO`, img: `/team img/batch-27/arpit.jpg`, batch: `2027` },
  { name: `Parth Deshmukh`, role: `Research Associate`, dept: `ELPO`, img: `/team img/parth.jpeg`, batch: `2027` },
  { name: `Aditya Vaidya`, role: `Operations Head`, dept: `ELPO`, img: `/team img/batch-27/aditya.jpg`, batch: `2027` },
  { name: `Amitesh Chavan`, role: `Social Media Head`, dept: `E&TC`, img: `/team img/batch-27/Amitesh Chavhan.jpeg`, batch: `2027` },

  // BATCH 2026 MEMBERS
  { name: `Parth Deshmukh`, role: `Member`, dept: `IT`, img: `/team img/parth.jpeg`, batch: `2026` },
  { name: `Nivrutti Raut`, role: `Member`, dept: `ELPO`, img: `/team img/batch-27/Nivrutti.jpg`, batch: `2026` },
  { name: `Vaibhav Udapure`, role: `Member`, dept: `E&TC`, img: `/team img/vaibhavu.jpeg`, batch: `2026` },
  { name: `Arpit There`, role: `Member`, dept: `ELPO`, img: `/team img/batch-27/arpit.jpg`, batch: `2026` },
  { name: `Aditya Vaidya`, role: `Member`, dept: `ELPO`, img: `/team img/batch-27/aditya.jpg`, batch: `2026` },
  { name: `Amitesh Chavan`, role: `Member`, dept: `E&TC`, img: `/team img/batch-27/Amitesh Chavhan.jpeg`, batch: `2026` },

  // BATCH 2025 MEMBERS
  { name: `Manthan Kolte`, role: `Member`, dept: `ELPO`, img: `/team img/batch-26/manthan.jpg`, batch: `2025` },
  { name: `Rushikesh Payghan`, role: `Member`, dept: `ELPO`, img: `/team img/batch-26/r payghan.jpeg`, batch: `2025` },
  { name: `Pranav Harne`, role: `Member`, dept: `ELPO`, img: `/team img/batch-26/pranav.jpg`, batch: `2025` },
  { name: `Sahil Khandare`, role: `Member`, dept: `E&TC`, img: `/team img/batch-26/Sahil.jpeg`, batch: `2025` },
  { name: `Hrishikesh Kakade`, role: `Member`, dept: `E&TC`, img: `/team img/batch-26/Hrishikesh.jpg`, batch: `2025` },
  { name: `Atharv Ingle`, role: `Member`, dept: `ELPO`, img: `/team img/batch-26/ath.jpg`, batch: `2025` },
  { name: `Atharva Raut`, role: `Member`, dept: `E&TC`, img: `/team img/batch-26/atharav.jpg`, batch: `2025` },
  // BATCH 2024 MEMBERS
  { name: `Sahil Mathurkar`, role: `Member`, dept: `E&TC`, img: `/team img/batch-25/Sahil_mathurkar.jpg`, batch: `2024` },
  // BATCH 2027 MEMBERS
  { name: `Aniruddh Pote`, role: `Member`, dept: `MECH`, img: `/team img/apote.jpeg`, batch: `2027` },
  { name: `Bhumika Bal`, role: `Member`, dept: `E&TC`, img: `/team img/batch-27/bhumika.jpeg`, batch: `2027` },
  { name: `Ganesh Tupkar`, role: `Member`, dept: `MECH`, img: `/team img/batch-27/ganesh.jpeg`, batch: `2027` },
  { name: `Gaurav Ingle`, role: `Member`, dept: `E&TC`, img: `/team img/batch-27/gauravi.jpeg`, batch: `2027` },
  { name: `Ishali Umale`, role: `Member`, dept: `MECH`, img: `/team img/batch-27/ishali.jpeg`, batch: `2027` },
  { name: `Om Nimbalkar`, role: `Member`, dept: `IT`, img: `/team img/batch-27/om.jpeg`, batch: `2027` },
  { name: `Pavan Kajale`, role: `Member`, dept: `ELPO`, img: `/team img/batch-27/pavank.jpeg`, batch: `2027` },
  { name: `Piyush Dawange`, role: `Member`, dept: `IT`, img: `/team img/batch-27/pd.png`, batch: `2027` },
  { name: `Prachi Vairale`, role: `Member`, dept: `E&TC`, img: `/team img/batch-27/Prachi.jpeg`, batch: `2027` },
  { name: `Pratiksha Bawaskar`, role: `Member`, dept: `ELPO`, img: `/team img/batch-27/pratiksha.jpeg`, batch: `2027` },
  { name: `Sanchit Deshmukh`, role: `Member`, dept: `IT`, img: `/team img/sanchitd.jpeg`, batch: `2027` },
  { name: `Shreya Deshmukh`, role: `Member`, dept: `E&TC`, img: `/team img/batch-27/shreya.jpeg`, batch: `2027` },
  { name: `Vedanti Damdhar`, role: `Member`, dept: `E&TC`, img: `/team img/batch-27/vedanti.jpeg`, batch: `2027` },
  { name: `Riddhi Ambere`, role: `Member`, dept: `ELPO`, img: `/team img/riddhi.jpeg`, batch: `2027` },
];

const yearData = {
  '2027': { photo: 'VIHANG CLUB — BATCH 2027', caption: '', img: null },
  '2026': { photo: 'VIHANG CLUB — BATCH 2026', caption: 'THE DEDICATORS', img: null },
  '2025': { photo: 'VIHANG CLUB — BATCH 2025', caption: 'THE EXCELLERS', img: null },
  '2024': { photo: 'VIHANG CLUB — BATCH 2024', caption: 'THE CHALLENGERS', img: null }
};

export default function Team() {
  const [selectedYear, setSelectedYear] = useState('2027');

  const getInitials = (name) => {
    return name.split(' ').map(n => n[0]).join('').substring(0, 2).toUpperCase();
  };

  // Faculty/Mentors are displayed based on batch assignment logic
  const mentors = teamData.filter(m => {
    if (m.batch !== 'Faculty') return false;
    // Dr. S. B. Patil for 2024, 2025
    if (m.name === 'Dr. S. B. Patil' && (selectedYear === '2026' || selectedYear === '2027')) return false;
    // Dr. J. M. Patil for 2026, 2027
    if (m.name === 'Dr. J. M. Patil' && (selectedYear === '2024' || selectedYear === '2025')) return false;
    return true;
  }).sort((a, b) => {
    const roleOrder = { 'Principal': 1, 'Faculty Incharge': 2, 'Faculty Advisor': 3 };
    return (roleOrder[a.role] || 99) - (roleOrder[b.role] || 99);
  });
  
  // Core and Members are specific to the selected batch
  const core = teamData.filter(m => m.batch === selectedYear && m.role !== 'Member' && m.batch !== 'Faculty');
  const members = teamData.filter(m => m.batch === selectedYear && m.role === 'Member');

  const currentYearData = yearData[selectedYear] || yearData['2027'];

  const renderCard = (m, i) => (
    <div className="anduril-card fade-in visible" style={{ animationDelay: `${i * 0.05}s` }} key={i}>
      <div className="anduril-img-wrapper">
        {m.img && !m.img.includes('fake.png') ? (
          <img src={`${import.meta.env.BASE_URL}${m.img.startsWith('/') ? m.img.slice(1) : m.img}`} alt={m.name} />
        ) : (
          <div className="anduril-initials" style={{ fontSize: '0.85rem', lineHeight: '1.6', textAlign: 'center', padding: '1rem', letterSpacing: '0.1em' }}>
            VISIT CLUB<br/>TO SEE<br/>THEM
          </div>
        )}
      </div>
      <div className="anduril-info">
        <h3 className="anduril-name">{m.name}</h3>
        <p className="anduril-role">{m.role}</p>
        <p className="anduril-dept">{m.dept}</p>
      </div>
    </div>
  );

  return (
    <div className="page-wrapper" style={{ paddingTop: '120px' }}>
      <div className="container team-desktop-scale">
        <div className="section-header-row fade-in visible">
          <p className="section-label">06 / TEAM</p>
          <h1 className="section-title">PEOPLE OF <span className="accent">VIHANG</span></h1>
        </div>

        {/* Year Timeline Buttons */}
        <div className="team-year-timeline fade-in visible">
          {['2027', '2026', '2025', '2024'].map(year => (
            <button 
              key={year} 
              className={`year-btn ${selectedYear === year ? 'active' : ''}`}
              aria-pressed={selectedYear === year}
              onClick={() => setSelectedYear(year)}
            >
              BATCH {year}
            </button>
          ))}
        </div>

        {/* Dynamic Year Photo Box */}
        <div className="team-year-photo fade-in visible" style={{ animationDelay: '0.1s' }}>
          {currentYearData.img && (
            <div className="team-photo-image-wrapper">
              <img 
                src={`${import.meta.env.BASE_URL}${currentYearData.img.startsWith('/') ? currentYearData.img.slice(1) : currentYearData.img}`} 
                alt={currentYearData.photo} 
                style={{ width: '100%', height: 'auto', display: 'block', filter: 'grayscale(100%) contrast(1.1)' }} 
              />
            </div>
          )}
          {currentYearData.caption && (
            <div className="team-photo-caption" style={{ borderTop: currentYearData.img ? '1px solid rgba(255,255,255,0.1)' : 'none' }}>
              {currentYearData.caption}
            </div>
          )}
        </div>

        {/* Mentors Section */}
        {mentors.length > 0 && (
          <div className="anduril-section fade-in visible" style={{ animationDelay: '0.2s' }}>
            <h2 className="anduril-section-header">Leadership & Mentors</h2>
            <div className="anduril-grid">
              {mentors.map((m, i) => renderCard(m, i))}
            </div>
          </div>
        )}

        {/* Core Team Section */}
        {core.length > 0 && (
          <div className="anduril-section fade-in visible" style={{ animationDelay: '0.3s' }}>
            <h2 className="anduril-section-header">Core Team</h2>
            <div className="anduril-grid">
              {core.map((m, i) => renderCard(m, i))}
            </div>
          </div>
        )}

        {/* Members Section */}
        {members.length > 0 && (
          <div className="anduril-section fade-in visible" style={{ animationDelay: '0.4s' }}>
            <h2 className="anduril-section-header">Members</h2>
            <div className="anduril-grid" style={{ gridTemplateColumns: 'repeat(auto-fill, minmax(240px, 1fr))' }}>
              {members.map((m, i) => renderCard(m, i))}
            </div>
          </div>
        )}

      </div>
    </div>
  );
}

