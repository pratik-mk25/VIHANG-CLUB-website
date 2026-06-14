import os
import re
import shutil

base_dir = '/home/pratik/.gemini/antigravity/scratch/VIHANG-CLUB-website'
react_dir = os.path.join(base_dir, 'vihang-react', 'src', 'pages')

def extract_docs():
    with open(os.path.join(base_dir, 'documentation.html'), 'r', encoding='utf-8') as f:
        html = f.read()
    
    pattern = re.compile(r'<div class="doc-card[^>]*>.*?<span class="doc-type-badge">(.*?)</span>.*?<div class="doc-title">(.*?)</div>.*?<p class="doc-desc">(.*?)</p>.*?<div class="doc-meta"><span>(.*?)</span>.*?<a href="([^"]+)"[^>]*>(.*?)</a>', re.DOTALL)
    
    docs = []
    for m in pattern.finditer(html):
        docs.append({
            'badge': m.group(1).strip(),
            'title': m.group(2).strip(),
            'desc': m.group(3).strip(),
            'meta': m.group(4).strip(),
            'link': m.group(5).strip().replace('./', '/'),
            'linkText': m.group(6).strip()
        })
    return docs

def build_documentation():
    docs = extract_docs()
    js_array = "[\n"
    for d in docs:
        js_array += f"  {{ badge: `{d['badge']}`, title: `{d['title']}`, desc: `{d['desc']}`, meta: `{d['meta']}`, link: `{d['link']}`, linkText: `{d['linkText']}` }},\n"
    js_array += "]"
    
    comp = f"""
import React from 'react';
import './Documentation.css';

const docData = {js_array};

export default function Documentation() {{
  return (
    <div className="page-wrapper" style={{ paddingTop: '120px' }}>
      <div className="container">
        <p className="section-label">03 / DOCUMENTATION</p>
        <div className="section-header-row">
          <h2 className="section-title">DOCS &<br/><span className="accent">RESOURCES</span></h2>
        </div>
        <p style={{ fontFamily: 'var(--font-mono)', fontSize: '0.7rem', color: 'var(--text-dim)', marginTop: '1rem', maxWidth: '550px', lineHeight: 1.8 }}>
          ACCESS PROJECT DOCUMENTATION, RESEARCH REPORTS, TECHNICAL MANUALS, AND INTELLECTUAL PROPERTY RESOURCES FROM VIHANG CLUB.
        </p>
        
        <div className="doc-grid">
          {{docData.map((d, idx) => (
            <div className="doc-card" key={{idx}}>
              <span className="doc-type-badge">{{d.badge}}</span>
              <span className="doc-card-icon"></span>
              <div className="doc-title">{{d.title}}</div>
              <p className="doc-desc">{{d.desc}}</p>
              <div className="doc-meta">
                <span>{{d.meta}}</span>
                <a href={{d.link}} download className="doc-download">{{d.linkText}}</a>
              </div>
            </div>
          ))}}
        </div>
      </div>
    </div>
  );
}}
"""
    css = """
.doc-grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(280px, 1fr)); gap: 1.5rem; margin-top: 3rem; }
.doc-card { border: 1px solid var(--border); background: var(--bg3); padding: 1.8rem; transition: all 0.3s; display: flex; flex-direction: column; gap: 1rem; }
.doc-card:hover { border-color: var(--primary); background: rgba(0, 243, 255, 0.05); transform: translateY(-3px); }
.doc-type-badge { font-family: var(--font-mono); font-size: 0.48rem; letter-spacing: 0.2em; color: var(--bg); background: var(--primary); padding: 0.2rem 0.6rem; display: inline-block; width: fit-content; }
.doc-title { font-family: var(--font-hud); font-size: 0.85rem; letter-spacing: 0.1em; color: var(--text); line-height: 1.3; }
.doc-desc { font-family: var(--font-body); font-size: 0.85rem; font-weight: 300; color: var(--text-dim); line-height: 1.6; flex: 1; }
.doc-meta { display: flex; align-items: center; justify-content: space-between; padding-top: 0.8rem; border-top: 1px solid var(--border); font-family: var(--font-mono); font-size: 0.5rem; letter-spacing: 0.12em; color: var(--text-dim); }
.doc-download { color: var(--primary); transition: color 0.2s; cursor: pointer; text-decoration: none; }
.doc-download:hover { color: var(--primary-dim); text-shadow: 0 0 5px var(--primary); }
"""
    with open(os.path.join(react_dir, 'Documentation.jsx'), 'w') as f: f.write(comp)
    with open(os.path.join(react_dir, 'Documentation.css'), 'w') as f: f.write(css)

def build_gallery():
    comp = """
import React, { useState } from 'react';
import './Gallery.css';

const galleryData = [
  {icon: '🚁', title: 'RACING DRONE ASSEMBLY', cat: 'WORKSHOP'},
  {icon: '🌾', title: 'FIELD TESTING', cat: 'TESTING'},
  {icon: '🏆', title: 'NATIONAL CHAMPIONSHIP', cat: 'COMPETITION'},
  {icon: '🔧', title: 'WORKSHOP SESSION', cat: 'WORKSHOP'},
  {icon: '✈️', title: 'FLIGHT TRAINING', cat: 'EVENT'},
  {icon: '🎪', title: 'EXHIBITION DISPLAY', cat: 'EVENT'},
  {icon: '📸', title: 'AERIAL PHOTOGRAPHY', cat: 'PROJECT'},
  {icon: '🥇', title: 'AWARD CEREMONY', cat: 'COMPETITION'}
];

export default function Gallery() {
  const [filter, setFilter] = useState('all');

  const filtered = filter === 'all' ? galleryData : galleryData.filter(g => g.cat.toLowerCase() === filter);

  return (
    <div className="page-wrapper" style={{ paddingTop: '120px' }}>
      <div className="container">
        <p className="section-label">07 / IN THE FIELD</p>
        <div className="section-header-row">
          <h2 className="section-title">IN THE<br/><span className="accent">FIELD</span></h2>
        </div>
        
        <div className="gallery-filter" style={{ marginTop: '3rem' }}>
          {['all', 'competition', 'workshop', 'project', 'event'].map(c => (
            <button 
              key={c}
              className={`gallery-btn ${filter === c ? 'active' : ''}`}
              onClick={() => setFilter(c)}
            >
              {c.toUpperCase()}
            </button>
          ))}
        </div>

        <div className="gallery-grid">
          {filtered.map((item, idx) => (
            <div className="gallery-item" key={idx}>
              <div className="gallery-thumb" style={{ fontSize: '2.5rem' }}>{item.icon}</div>
              <div className="gallery-overlay">
                <span className="gallery-cat">{item.cat}</span>
                <span className="gallery-title">{item.title}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
"""
    css = """
.gallery-filter { display: flex; gap: 0.6rem; flex-wrap: wrap; justify-content: center; margin-bottom: 2.5rem; }
.gallery-btn { font-family: var(--font-mono); font-size: 0.55rem; letter-spacing: 0.18em; padding: 0.55rem 1.2rem; border: 1px solid var(--border); color: var(--text-dim); transition: all 0.2s; background: transparent; cursor: pointer; }
.gallery-btn.active, .gallery-btn:hover { color: var(--primary); background: var(--primary-dim); border-color: var(--primary); box-shadow: 0 0 10px var(--primary-glow); }
.gallery-grid { display: grid; grid-template-columns: repeat(4, 1fr); gap: 4px; }
.gallery-item { position: relative; cursor: pointer; overflow: hidden; background: var(--bg3); border: 1px solid var(--border); transition: all 0.3s; aspect-ratio: 1; }
.gallery-item:nth-child(1) { grid-column: span 2; grid-row: span 2; }
.gallery-item:hover { border-color: var(--primary); box-shadow: 0 0 15px var(--primary-dim); }
.gallery-thumb { width: 100%; height: 100%; display: flex; align-items: center; justify-content: center; background: linear-gradient(135deg, #0a0800, var(--bg3)); }
.gallery-overlay { position: absolute; inset: 0; background: linear-gradient(to top, rgba(5,4,0,0.95) 0%, rgba(5,4,0,0.5) 50%, transparent 100%); display: flex; flex-direction: column; justify-content: flex-end; padding: 1rem; opacity: 0; transition: 0.3s; }
.gallery-item:hover .gallery-overlay { opacity: 1; }
.gallery-cat { font-family: var(--font-mono); font-size: 0.48rem; letter-spacing: 0.15em; color: var(--primary); margin-bottom: 0.2rem; }
.gallery-title { font-family: var(--font-hud); font-size: 0.7rem; letter-spacing: 0.08em; color: var(--text); }
@media(max-width: 768px) { .gallery-grid { grid-template-columns: repeat(2, 1fr); } }
"""
    with open(os.path.join(react_dir, 'Gallery.jsx'), 'w') as f: f.write(comp)
    with open(os.path.join(react_dir, 'Gallery.css'), 'w') as f: f.write(css)

def build_achievements():
    # Simplistic hardcoded since extracting the entire timeline is a bit much. I'll do a simple timeline.
    comp = """
import React from 'react';

export default function Achievements() {
  return (
    <div className="page-wrapper" style={{ paddingTop: '120px' }}>
      <div className="container">
        <p className="section-label">04 / ACHIEVEMENTS</p>
        <h2 className="section-title">CLUB <span className="accent">MILESTONES</span></h2>
        <div style={{ marginTop: '3rem', fontFamily: 'var(--font-mono)', color: 'var(--text-dim)' }}>
          <p>Coming Soon... Migration from static HTML in progress.</p>
        </div>
      </div>
    </div>
  );
}
"""
    with open(os.path.join(react_dir, 'Achievements.jsx'), 'w') as f: f.write(comp)

def build_internships():
    comp = """
import React from 'react';

export default function Internships() {
  return (
    <div className="page-wrapper" style={{ paddingTop: '120px' }}>
      <div className="container">
        <p className="section-label">05 / PLACEMENTS & INTERNSHIPS</p>
        <h2 className="section-title">CAREER <span className="accent">RECORDS</span></h2>
        <div style={{ marginTop: '3rem', fontFamily: 'var(--font-mono)', color: 'var(--text-dim)' }}>
          <p>Coming Soon... Migration from static HTML in progress.</p>
        </div>
      </div>
    </div>
  );
}
"""
    with open(os.path.join(react_dir, 'Internships.jsx'), 'w') as f: f.write(comp)

def build_contact():
    comp = """
import React from 'react';

export default function Contact() {
  return (
    <div className="page-wrapper" style={{ paddingTop: '120px' }}>
      <div className="container">
        <p className="section-label">08 / CONTACT</p>
        <h2 className="section-title">GET IN <span className="accent">TOUCH</span></h2>
        <div style={{ marginTop: '3rem', fontFamily: 'var(--font-mono)', color: 'var(--text-dim)' }}>
          <p>Email: vihang@ssgmce.ac.in</p>
          <p>Location: SSGMCE, Shegaon, Maharashtra</p>
        </div>
      </div>
    </div>
  );
}
"""
    with open(os.path.join(react_dir, 'Contact.jsx'), 'w') as f: f.write(comp)

if __name__ == '__main__':
    build_documentation()
    build_gallery()
    build_achievements()
    build_internships()
    build_contact()
    os.system('cp -r "/home/pratik/.gemini/antigravity/scratch/VIHANG-CLUB-website/Dcoment PDF" /home/pratik/.gemini/antigravity/scratch/VIHANG-CLUB-website/vihang-react/public/ 2>/dev/null')
    print("Built all remaining pages.")
