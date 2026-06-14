import os
import re

base_dir = '/home/pratik/.gemini/antigravity/scratch/VIHANG-CLUB-website'
react_dir = os.path.join(base_dir, 'vihang-react', 'src', 'pages')

def extract_projects():
    with open(os.path.join(base_dir, 'projects.html'), 'r', encoding='utf-8') as f:
        html = f.read()
    
    # Regex to find project cards
    pattern = re.compile(r'<div class="project-card"\s+data-status="([^"]+)".*?>\s*<div class="project-thumb">\s*<img src="([^"]*)"[^>]*>\s*</div>.*?<h3 class="project-name">(.*?)</h3>.*?<p class="project-desc">(.*?)</p>', re.DOTALL)
    
    projects = []
    for match in pattern.finditer(html):
        status = match.group(1).strip()
        img = match.group(2).strip()
        title = match.group(3).strip()
        desc = match.group(4).strip()
        
        # fix local paths for public dir or assets
        if img.startswith('./'):
            img = img.replace('./', '/')
        
        projects.append({
            'status': status,
            'img': img,
            'title': title,
            'desc': desc
        })
    
    return projects

def extract_team():
    with open(os.path.join(base_dir, 'team.html'), 'r', encoding='utf-8') as f:
        html = f.read()

    pattern = re.compile(r'<div class="team-card[^"]*".*?>.*?<img src="([^"]*)"[^>]*>.*?<div class="team-name">(.*?)</div>.*?<div class="team-role">(.*?)</div>.*?<div class="team-dept">(.*?)</div>', re.DOTALL)
    
    team = []
    for match in pattern.finditer(html):
        img = match.group(1).strip()
        name = match.group(2).strip()
        role = match.group(3).strip()
        dept = match.group(4).strip()
        
        if img.startswith('./'):
            img = img.replace('./', '/')
            
        team.append({
            'img': img,
            'name': name,
            'role': role,
            'dept': dept
        })
        
    return team

def write_projects_component():
    projects = extract_projects()
    
    js_array = "[\n"
    for p in projects:
        js_array += f"  {{ title: `{p['title']}`, status: `{p['status']}`, img: `{p['img']}`, desc: `{p['desc']}` }},\n"
    js_array += "]"
    
    comp = f"""
import React, {{ useState }} from 'react';
import './Projects.css';

const projectsData = {js_array};

export default function Projects() {{
  const [filter, setFilter] = useState('all');

  const filtered = filter === 'all' ? projectsData : projectsData.filter(p => p.status === filter);

  return (
    <div className="page-wrapper" style={{ paddingTop: '120px' }}>
      <div className="container">
        <p className="section-label">02 / PROJECTS</p>
        <h2 className="section-title">WHAT WE <span className="accent">BUILD</span></h2>

        <div className="filter-bar">
          <button className={{`filter-btn ${{filter === 'all' ? 'active' : ''}}`}} onClick={{() => setFilter('all')}}>ALL PROJECTS</button>
          <button className={{`filter-btn ${{filter === 'active' ? 'active' : ''}}`}} onClick={{() => setFilter('active')}}>ACTIVE</button>
          <button className={{`filter-btn ${{filter === 'complete' ? 'active' : ''}}`}} onClick={{() => setFilter('complete')}}>COMPLETE</button>
        </div>

        <div className="projects-grid">
          {{filtered.map((p, idx) => (
            <div className="project-card" key={{idx}}>
              <div className="project-thumb">
                <img src={{p.img || '/vihang%20logo.jpg'}} alt={{p.title}} />
              </div>
              <div className={{`project-status status-${{p.status}}`}}>
                <span className="status-dot"></span>
                <span className="status-text">{{p.status.toUpperCase()}}</span>
              </div>
              <h3 className="project-name">{{p.title}}</h3>
              <p className="project-desc">{{p.desc}}</p>
            </div>
          ))}}
        </div>
      </div>
    </div>
  );
}}
"""
    css = """
.filter-bar {
  display: flex;
  gap: 0.5rem;
  flex-wrap: wrap;
  margin: 3rem 0;
}
.filter-btn {
  font-family: var(--font-mono);
  font-size: 0.55rem;
  letter-spacing: 0.18em;
  padding: 0.55rem 1.2rem;
  border: 1px solid var(--border);
  color: var(--text-dim);
  transition: all 0.2s;
  background: transparent;
  cursor: pointer;
}
.filter-btn.active, .filter-btn:hover {
  color: var(--primary);
  border-color: var(--primary);
  background: var(--primary-dim);
  box-shadow: 0 0 10px var(--primary-glow);
}
.projects-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
  gap: 1.5rem;
}
.project-card {
  background: var(--bg3);
  padding: 1.5rem;
  border: 1px solid var(--border);
  transition: all 0.3s;
  display: flex;
  flex-direction: column;
}
.project-card:hover {
  border-color: var(--primary);
  box-shadow: 0 0 20px var(--primary-dim);
  transform: translateY(-5px);
}
.project-thumb {
  width: 100%;
  aspect-ratio: 16/9;
  overflow: hidden;
  border: 1px solid var(--border);
  margin-bottom: 1.2rem;
}
.project-thumb img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
.project-status {
  display: flex;
  align-items: center;
  gap: 0.4rem;
  margin-bottom: 0.6rem;
}
.status-dot {
  width: 6px;
  height: 6px;
  border-radius: 50%;
}
.status-active .status-dot { background: #00ff88; box-shadow: 0 0 5px #00ff88; }
.status-active .status-text { color: #00ff88; }
.status-complete .status-dot { background: #4af; box-shadow: 0 0 5px #4af; border-radius: 0; }
.status-complete .status-text { color: #4af; }
.status-text {
  font-family: var(--font-mono);
  font-size: 0.5rem;
  letter-spacing: 0.15em;
}
.project-name {
  font-family: var(--font-display);
  font-size: 2rem;
  letter-spacing: 0.05em;
  color: var(--text);
  margin-bottom: 0.7rem;
  line-height: 1;
}
.project-desc {
  font-family: var(--font-body);
  font-size: 0.88rem;
  font-weight: 300;
  color: var(--text-muted);
  line-height: 1.7;
  flex: 1;
}
"""
    with open(os.path.join(react_dir, 'Projects.jsx'), 'w') as f:
        f.write(comp)
    with open(os.path.join(react_dir, 'Projects.css'), 'w') as f:
        f.write(css)

def write_team_component():
    team = extract_team()
    
    js_array = "[\n"
    for m in team:
        js_array += f"  {{ name: `{m['name']}`, role: `{m['role']}`, dept: `{m['dept']}`, img: `{m['img']}` }},\n"
    js_array += "]"
    
    comp = f"""
import React from 'react';
import './Team.css';

const teamData = {js_array};

export default function Team() {{
  return (
    <div className="page-wrapper" style={{ paddingTop: '120px' }}>
      <div className="container">
        <p className="section-label">06 / TEAM</p>
        <h2 className="section-title">PEOPLE OF <span className="accent">VIHANG</span></h2>

        <div className="team-grid">
          {{teamData.map((m, idx) => (
            <div className="team-card" key={{idx}}>
              <div className="team-img-wrapper">
                <img src={{m.img || '/vihang%20logo.jpg'}} alt={{m.name}} />
              </div>
              <div className="team-name">{{m.name || 'VIHANG MEMBER'}}</div>
              <div className="team-role">{{m.role}}</div>
              <div className="team-dept">{{m.dept}}</div>
            </div>
          ))}}
        </div>
      </div>
    </div>
  );
}}
"""
    css = """
.team-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(240px, 1fr));
  gap: 1.5rem;
  margin-top: 3rem;
}
.team-card {
  border: 1px solid var(--border);
  background: var(--bg3);
  padding: 1.5rem;
  transition: all 0.3s;
  text-align: center;
}
.team-card:hover {
  border-color: var(--primary);
  background: rgba(0, 243, 255, 0.05);
  box-shadow: 0 0 20px var(--primary-dim);
  transform: translateY(-5px);
}
.team-img-wrapper {
  width: 100%;
  aspect-ratio: 1/1;
  overflow: hidden;
  border: 1px solid var(--primary-dim);
  margin-bottom: 1rem;
  background: var(--bg2);
}
.team-img-wrapper img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
.team-name {
  font-family: var(--font-hud);
  font-size: 0.9rem;
  letter-spacing: 0.08em;
  color: var(--text);
  margin-bottom: 0.3rem;
}
.team-role {
  font-family: var(--font-mono);
  font-size: 0.6rem;
  letter-spacing: 0.12em;
  color: var(--primary);
}
.team-dept {
  font-family: var(--font-body);
  font-size: 0.8rem;
  font-weight: 300;
  color: var(--text-muted);
  margin-top: 0.4rem;
}
"""
    with open(os.path.join(react_dir, 'Team.jsx'), 'w') as f:
        f.write(comp)
    with open(os.path.join(react_dir, 'Team.css'), 'w') as f:
        f.write(css)

def copy_images():
    # To keep paths working, we should copy the old project img and team img to vihang-react/public
    os.system('cp -r "/home/pratik/.gemini/antigravity/scratch/VIHANG-CLUB-website/project img" /home/pratik/.gemini/antigravity/scratch/VIHANG-CLUB-website/vihang-react/public/ 2>/dev/null')
    os.system('cp -r "/home/pratik/.gemini/antigravity/scratch/VIHANG-CLUB-website/team img" /home/pratik/.gemini/antigravity/scratch/VIHANG-CLUB-website/vihang-react/public/ 2>/dev/null')
    os.system('cp "/home/pratik/.gemini/antigravity/scratch/VIHANG-CLUB-website/vihang logo.jpg" /home/pratik/.gemini/antigravity/scratch/VIHANG-CLUB-website/vihang-react/public/ 2>/dev/null')

if __name__ == '__main__':
    write_projects_component()
    write_team_component()
    copy_images()
    print("Projects and Team components built!")
