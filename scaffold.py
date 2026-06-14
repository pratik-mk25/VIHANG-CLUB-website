import os
import json

base_dir = '/home/pratik/.gemini/antigravity/scratch/VIHANG-CLUB-website/vihang-react'
os.makedirs(os.path.join(base_dir, 'src', 'components'), exist_ok=True)
os.makedirs(os.path.join(base_dir, 'src', 'pages'), exist_ok=True)
os.makedirs(os.path.join(base_dir, 'src', 'assets'), exist_ok=True)

# package.json
pkg = {
    "name": "vihang-react",
    "version": "1.0.0",
    "private": True,
    "type": "module",
    "scripts": {
        "dev": "vite",
        "build": "vite build",
        "preview": "vite preview"
    },
    "dependencies": {
        "react": "^18.2.0",
        "react-dom": "^18.2.0",
        "react-router-dom": "^6.22.3",
        "lucide-react": "^0.359.0"
    },
    "devDependencies": {
        "@vitejs/plugin-react": "^4.2.1",
        "vite": "^5.2.0"
    }
}
with open(os.path.join(base_dir, 'package.json'), 'w') as f:
    json.dump(pkg, f, indent=2)

# vite.config.js
vite_config = """import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
})
"""
with open(os.path.join(base_dir, 'vite.config.js'), 'w') as f:
    f.write(vite_config)

# index.html
html = """<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>VIHANG CLUB</title>
    <link href="https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Orbitron:wght@400;700;900&family=Share+Tech+Mono&family=Rajdhani:wght@300;400;500;600;700&display=swap" rel="stylesheet"/>
  </head>
  <body>
    <div id="root"></div>
    <script type="module" src="/src/main.jsx"></script>
  </body>
</html>
"""
with open(os.path.join(base_dir, 'index.html'), 'w') as f:
    f.write(html)

# src/main.jsx
main_jsx = """import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
"""
with open(os.path.join(base_dir, 'src', 'main.jsx'), 'w') as f:
    f.write(main_jsx)

# src/App.jsx
app_jsx = """import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

export default function App() {
  return (
    <Router>
      <div className="app-container">
        <Routes>
          <Route path="/" element={<div>Welcome to Vihang Club React Revamp!</div>} />
        </Routes>
      </div>
    </Router>
  );
}
"""
with open(os.path.join(base_dir, 'src', 'App.jsx'), 'w') as f:
    f.write(app_jsx)

# src/index.css
css = """
:root {
  --primary: #00f3ff;
  --primary-dim: rgba(0, 243, 255, 0.15);
  --primary-glow: rgba(0, 243, 255, 0.6);
  --secondary: #0066ff;
  --bg: #030508;
  --bg2: #060a12;
  --bg3: #0a1120;
  --text: #e0f2fe;
  --text-muted: #94a3b8;
  --text-dim: #475569;
  --border: rgba(0, 243, 255, 0.15);
  --font-display: 'Bebas Neue', sans-serif;
  --font-hud: 'Orbitron', monospace;
  --font-mono: 'Share Tech Mono', monospace;
  --font-body: 'Rajdhani', sans-serif;
}
*, *::before, *::after {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}
html { font-size: 16px; }
body {
  background: var(--bg);
  color: var(--text);
  font-family: var(--font-body);
  overflow-x: hidden;
  text-transform: uppercase;
}
"""
with open(os.path.join(base_dir, 'src', 'index.css'), 'w') as f:
    f.write(css)

print("Scaffold complete.")
