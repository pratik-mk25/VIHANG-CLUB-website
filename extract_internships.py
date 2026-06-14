import json
from bs4 import BeautifulSoup

def extract_internships():
    with open('internship.html', 'r', encoding='utf-8') as f:
        soup = BeautifulSoup(f.read(), 'html.parser')
    
    # Extract stats
    stats = []
    for stat in soup.select('.ip-stat'):
        val = stat.select_one('.ip-stat-val')
        lbl = stat.select_one('.ip-stat-lbl')
        if val and lbl:
            stats.append({
                'value': val.text.strip(),
                'label': lbl.text.strip()
            })
            
    # Extract companies
    companies = []
    for badge in soup.select('.ip-company-badge'):
        companies.append(badge.text.strip())
        
    # Extract cards
    cards = []
    for card in soup.select('.ip-card'):
        ctype = card.select_one('.ip-card-type')
        name = card.select_one('.ip-card-name')
        org = card.select_one('.ip-card-org')
        role = card.select_one('.ip-card-role')
        meta = [m.text.strip() for m in card.select('.ip-meta-tag')]
        
        cards.append({
            'type': ctype.text.strip() if ctype else '',
            'name': name.text.strip() if name else '',
            'org': org.text.strip() if org else '',
            'role': role.text.strip() if role else '',
            'meta': meta
        })
        
    data = {
        'stats': stats,
        'companies': companies,
        'cards': cards
    }
    
    jsx_content = """import React, { useState } from 'react';
import './Internships.css';

const ipData = """ + json.dumps(data, indent=2) + """;

export default function Internships() {
  const [activeTab, setActiveTab] = useState('INTERNSHIP');

  return (
    <div className="page-wrapper" style={{ paddingTop: '120px' }}>
      <div className="container">
        
        <div className="ip-hero">
          <p className="section-label">05 / INTERNSHIP &amp; PLACEMENT</p>
          <h2 className="section-title">INDUSTRY <span className="accent">CONNECT</span></h2>
          <p className="ip-desc" style={{ marginTop: '2rem' }}>
            VIHANG CLUB BRIDGES THE GAP BETWEEN ACADEMIC RESEARCH AND INDUSTRY. 
            OUR MEMBERS HAVE SECURED INTERNSHIPS AND PLACEMENTS AT LEADING AEROSPACE, 
            DEFENCE, AND TECHNOLOGY ORGANISATIONS ACROSS INDIA.
          </p>
        </div>

        <div className="ip-stats">
          {ipData.stats.map((s, i) => (
            <div className="ip-stat" key={i}>
              <span className="ip-stat-val">{s.value}</span>
              <span className="ip-stat-lbl">{s.label}</span>
            </div>
          ))}
        </div>

        <div style={{ marginBottom: '5rem' }}>
          <p className="section-label" style={{ justifyContent: 'center' }}>// ALUMNI PLACED INDUSTRY</p>
          <div className="ip-companies">
            {ipData.companies.map((c, i) => (
              <span className="ip-company-badge" key={i}>{c}</span>
            ))}
          </div>
        </div>

        <div className="ip-tabs">
          <button 
            className={`ip-tab ${activeTab === 'INTERNSHIP' ? 'active' : ''}`}
            onClick={() => setActiveTab('INTERNSHIP')}
          >
            INTERNSHIPS
          </button>
          <button 
            className={`ip-tab ${activeTab === 'PLACEMENT' ? 'active' : ''}`}
            onClick={() => setActiveTab('PLACEMENT')}
          >
            PLACEMENTS
          </button>
        </div>

        <div className="ip-panel active">
          {ipData.cards.filter(c => c.type === activeTab).map((card, i) => (
            <div className="ip-card" key={i}>
              <span className={`ip-card-type ${card.type.toLowerCase()}`}>{card.type}</span>
              <div className="ip-card-name">{card.name}</div>
              <div className="ip-card-org">{card.org}</div>
              <div className="ip-card-role">{card.role}</div>
              <div className="ip-card-meta">
                {card.meta.map((m, idx) => (
                  <span className="ip-meta-tag" key={idx}>{m}</span>
                ))}
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}
"""
    with open('vihang-react/src/pages/Internships.jsx', 'w', encoding='utf-8') as f:
        f.write(jsx_content)
        
    print(f"Extracted {len(stats)} stats, {len(companies)} companies, and {len(cards)} placement cards.")

if __name__ == '__main__':
    extract_internships()
