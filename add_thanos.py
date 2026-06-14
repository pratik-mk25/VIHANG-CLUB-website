import re

filepath = '/home/pratik/.gemini/antigravity/scratch/VIHANG-CLUB-website/index.html'
with open(filepath, 'r', encoding='utf-8') as f:
    content = f.read()

gauntlet_html = """
  <!-- Thanos Gauntlet Theme Switcher -->
  <div id="gauntlet-switcher">
    <svg viewBox="0 0 100 120" width="60" height="80" class="gauntlet-svg">
      <!-- Stylized Gauntlet Base -->
      <path d="M 20 120 L 20 60 Q 20 30 35 30 L 65 30 Q 80 30 80 60 L 80 120 Z" fill="#b8860b" stroke="#daa520" stroke-width="2"/>
      <path d="M 20 60 L 20 40 Q 20 20 30 20 L 40 20 Q 45 20 45 30 L 45 40 Z" fill="#b8860b" stroke="#daa520" stroke-width="2"/>
      <path d="M 45 40 L 45 15 Q 45 10 52 10 L 58 10 Q 65 10 65 20 L 65 40 Z" fill="#b8860b" stroke="#daa520" stroke-width="2"/>
      <path d="M 65 40 L 65 20 Q 65 15 72 15 L 78 15 Q 85 15 85 25 L 85 40 Z" fill="#b8860b" stroke="#daa520" stroke-width="2"/>
      <path d="M 85 45 L 85 30 Q 85 25 90 25 L 95 25 Q 100 25 100 35 L 100 50 Q 100 60 90 60 L 85 60 Z" fill="#b8860b" stroke="#daa520" stroke-width="2"/>
      <path d="M 5 70 L 5 50 Q 5 45 10 45 L 15 45 Q 20 45 20 55 L 20 70 Z" fill="#b8860b" stroke="#daa520" stroke-width="2"/>
      
      <!-- Knuckle Details -->
      <line x1="25" y1="45" x2="40" y2="45" stroke="#8b6508" stroke-width="2"/>
      <line x1="45" y1="40" x2="60" y2="40" stroke="#8b6508" stroke-width="2"/>
      <line x1="65" y1="45" x2="80" y2="45" stroke="#8b6508" stroke-width="2"/>

      <!-- Infinity Stones (Clickable) -->
      <!-- Space (Blue) -->
      <circle cx="32" cy="45" r="4" class="stone space" onclick="setTheme('space')" />
      <!-- Mind (Yellow) -->
      <circle cx="52" cy="40" r="4" class="stone mind" onclick="setTheme('mind')" />
      <!-- Reality (Red) -->
      <circle cx="72" cy="45" r="4" class="stone reality" onclick="setTheme('reality')" />
      <!-- Power (Purple) -->
      <circle cx="85" cy="55" r="4" class="stone power" onclick="setTheme('power')" />
      <!-- Time (Green) -->
      <circle cx="15" cy="55" r="4" class="stone time" onclick="setTheme('time')" />
      <!-- Soul (Orange) - Center -->
      <ellipse cx="52" cy="65" rx="8" ry="10" class="stone soul" onclick="setTheme('soul')" />
    </svg>
    <div class="gauntlet-tooltip">CHOOSE STONE</div>
  </div>
"""

css_additions = """
/* Gauntlet Switcher */
#gauntlet-switcher {
  position: fixed;
  right: 20px;
  top: 50%;
  transform: translateY(-50%);
  z-index: 1000;
  display: flex;
  flex-direction: column;
  align-items: center;
  filter: drop-shadow(0 0 10px rgba(0,0,0,0.5));
}
.gauntlet-svg {
  cursor: crosshair;
  transition: transform 0.3s;
}
.gauntlet-svg:hover {
  transform: scale(1.1);
}
.stone {
  cursor: pointer;
  stroke: #ffffff;
  stroke-width: 0.5;
  transition: all 0.3s;
}
.stone:hover {
  stroke-width: 2;
  transform: scale(1.2);
  transform-origin: center;
}
.stone.space { fill: #0066ff; filter: drop-shadow(0 0 5px #00f3ff); }
.stone.mind { fill: #ffcc00; filter: drop-shadow(0 0 5px #ffee00); }
.stone.reality { fill: #ff003c; filter: drop-shadow(0 0 5px #ff3366); }
.stone.power { fill: #bd00ff; filter: drop-shadow(0 0 5px #dd33ff); }
.stone.time { fill: #00ff66; filter: drop-shadow(0 0 5px #33ff88); }
.stone.soul { fill: #ff6600; filter: drop-shadow(0 0 5px #ff8833); }

.gauntlet-tooltip {
  font-family: var(--font-mono);
  font-size: 0.5rem;
  color: #daa520;
  margin-top: 10px;
  letter-spacing: 0.1em;
  opacity: 0.8;
  pointer-events: none;
}
"""

js_additions = """
<script>
// Thanos Theme Switcher
function hexToRgba(hex, alpha) {
    let r = parseInt(hex.slice(1, 3), 16),
        g = parseInt(hex.slice(3, 5), 16),
        b = parseInt(hex.slice(5, 7), 16);
    return `rgba(${r}, ${g}, ${b}, ${alpha})`;
}

function setTheme(stone) {
    const root = document.documentElement;
    let p, s;
    switch(stone) {
        case 'space': p = '#00f3ff'; s = '#0066ff'; break;
        case 'mind': p = '#ffcc00'; s = '#ffffff'; break;
        case 'reality': p = '#ff003c'; s = '#ff6600'; break;
        case 'power': p = '#bd00ff'; s = '#ff00ff'; break;
        case 'time': p = '#00ff66'; s = '#00cc00'; break;
        case 'soul': p = '#ff8800'; s = '#ffcc00'; break;
        default: p = '#00f3ff'; s = '#bd00ff';
    }
    
    root.style.setProperty('--primary', p);
    root.style.setProperty('--secondary', s);
    root.style.setProperty('--primary-dim', hexToRgba(p, 0.15));
    root.style.setProperty('--primary-glow', hexToRgba(p, 0.6));
    
    // Thanos snap effect
    document.body.style.transition = 'filter 0.5s';
    document.body.style.filter = 'contrast(1.5) brightness(1.2)';
    setTimeout(() => {
        document.body.style.filter = 'none';
    }, 500);
}
</script>
"""

# Insert HTML before </section>
if '<!-- Thanos Gauntlet Theme Switcher -->' not in content:
    content = content.replace('</section>', gauntlet_html + '\n</section>')

# Insert CSS before </style>
if '/* Gauntlet Switcher */' not in content:
    content = content.replace('</style>', css_additions + '\n</style>')

# Insert JS before </body>
if '// Thanos Theme Switcher' not in content:
    content = content.replace('</body>', js_additions + '\n</body>')

with open(filepath, 'w', encoding='utf-8') as f:
    f.write(content)

print("Thanos Gauntlet added successfully!")
