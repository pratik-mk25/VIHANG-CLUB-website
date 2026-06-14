import json
from bs4 import BeautifulSoup
import re

def extract_achievements():
    with open('achievements.html', 'r', encoding='utf-8') as f:
        soup = BeautifulSoup(f.read(), 'html.parser')
    
    data = []
    
    groups = soup.select('.timeline-year-group')
    for g in groups:
        year_badge = g.select_one('.year-badge')
        year_text = year_badge.text.strip() if year_badge else ''
        
        items = []
        for card in g.select('.timeline-card'):
            ttype = card.select_one('.ttype')
            ttype_text = ttype.text.strip() if ttype else ''
            
            title = card.select_one('.t-title')
            title_text = title.text.strip() if title else ''
            
            desc = card.select_one('.t-desc')
            desc_text = desc.text.strip() if desc else ''
            
            items.append({
                'type': ttype_text,
                'title': title_text,
                'desc': desc_text
            })
        
        data.append({
            'year': year_text,
            'items': items
        })
        
    # Generate the JSX
    jsx_content = """import React from 'react';
import './Achievements.css';

const achievementsData = """ + json.dumps(data, indent=2) + """;

export default function Achievements() {
  return (
    <div className="page-wrapper" style={{ paddingTop: '120px' }}>
      <div className="container">
        <p className="section-label">04 / ACHIEVEMENTS</p>
        <h2 className="section-title">CLUB <span className="accent">MILESTONES</span></h2>
        
        <div className="timeline-wrapper">
          <div className="timeline-line"></div>
          
          {achievementsData.map((group, gIdx) => (
            <div className="timeline-year-group" key={gIdx}>
              <div className="timeline-year-badge">
                <div className="year-badge">{group.year}</div>
              </div>
              
              <div className="timeline-items">
                {group.items.map((item, iIdx) => (
                  <div className={`timeline-item ${iIdx % 2 === 0 ? 'left' : 'right'}`} key={iIdx}>
                    {iIdx % 2 !== 0 && <div className="timeline-spacer"></div>}
                    
                    <div className="timeline-content">
                      <div className="timeline-card">
                        <span className={`ttype ${item.type.toLowerCase().replace(' ', '-')}`}>
                          {item.type}
                        </span>
                        <div className="t-title">{item.title}</div>
                        <p className="t-desc">{item.desc}</p>
                      </div>
                    </div>
                    
                    {iIdx % 2 === 0 && <div className="timeline-spacer"></div>}
                    <div className="timeline-dot"></div>
                  </div>
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
    with open('vihang-react/src/pages/Achievements.jsx', 'w', encoding='utf-8') as f:
        f.write(jsx_content)
    
    print(f"Extracted {len(data)} year groups with a total of {sum(len(g['items']) for g in data)} achievements.")

if __name__ == '__main__':
    extract_achievements()
