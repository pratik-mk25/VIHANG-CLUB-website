import React from 'react';
import './Documentation.css';

const docData = [
  { badge: `POLICY`, title: `POLICY HANDBOOK 2025-26`, desc: `POLICY AND STATEMENTS DEFINE THE PRINCIPLES, RULES, AND COMMITMENTS THAT GUIDE AN ORGANIZATION’S DECISIONS, ACTIONS, AND OVERALL DIRECTION.`, meta: `PDF · 2.05 MB`, link: `/Dcoment PDF/club policy.pdf`, linkText: `⬇ DOWNLOAD` },
  { badge: `FUNDING`, title: `DRONE CLUB BUDGET AND FUND POLICY`, desc: `DRONE CLUB FUND STATEMENT DEFINES THE STRUCTURED MANAGEMENT, ALLOCATION, AND UTILIZATION OF FUNDS TO ENSURE TRANSPARENCY, ACCOUNTABILITY, AND SUPPORT FOR ALL CLUB ACTIVITIES AND DEVELOPMENT.`, meta: `XLSX · 1.0 MB`, link: `/Dcoment PDF/Drone _Club_ Fund_ Statement (College) (1).xlsx`, linkText: `⬇ DOWNLOAD` },
  { badge: `REPORT`, title: `PROJECT SUMMARY SHEET`, desc: `THIS REPORT PROVIDES A CONCISE OVERVIEW OF THE PROJECT, INCLUDING OBJECTIVES, METHODOLOGY, KEY OUTCOMES, AND IMPACT IN A SINGLE PAGE FORMAT.`, meta: `PDF · 1.33 MB`, link: `/Dcoment PDF/Project Brief Report.pdf`, linkText: `⬇ DOWNLOAD` },
  { badge: `IPR`, title: `PATENT AND COPYRIGHT`, desc: `THIS POLICY DEFINES THE PROTECTION, OWNERSHIP, AND MANAGEMENT OF INNOVATIONS AND CREATIVE WORKS TO SAFEGUARD INTELLECTUAL PROPERTY RIGHTS AND ENCOURAGE ORIGINAL CONTRIBUTIONS.`, meta: `PDF · 5.2 MB`, link: `/Dcoment PDF/All in one patent (1).pdf`, linkText: `⬇ DOWNLOAD` },
];

export default function Documentation() {
  return (
    <div className="page-wrapper" style={{ paddingTop: '120px' }}>
      <div className="container">
        <p className="section-label">03 / DOCUMENTATION</p>
        <div className="section-header-row">
          <h1 className="section-title">SECURE <span className="accent">ARCHIVE</span></h1>
        </div>
        <p style={{ fontFamily: 'var(--font-mono)', fontSize: '0.7rem', color: 'var(--text-dim)', marginTop: '1rem', maxWidth: '550px', lineHeight: 1.8 }}>
          ACCESS PROJECT DOCUMENTATION, RESEARCH REPORTS, TECHNICAL MANUALS, AND INTELLECTUAL PROPERTY RESOURCES.
        </p>
        
        <div className="doc-ledger">
          <div className="doc-ledger-header">
             <div>INDEX</div>
             <div>CLASSIFICATION</div>
             <div>FILE DETAILS</div>
             <div>FORMAT</div>
             <div>ACTION</div>
          </div>
          
          {docData.map((d, idx) => (
             <div className="doc-ledger-row" key={idx}>
                <div className="doc-id">DOC-{String(idx+1).padStart(3, '0')}</div>
                <div className="doc-class">{d.badge}</div>
                <div className="doc-info">
                   <div className="doc-title">{d.title}</div>
                   <div className="doc-desc">{d.desc}</div>
                </div>
                <div className="doc-meta">{d.meta}</div>
                <div className="doc-action">
                   <a href={d.link} download className="btn-download">⬇ DL</a>
                </div>
             </div>
          ))}
        </div>
      </div>
    </div>
  );
}
