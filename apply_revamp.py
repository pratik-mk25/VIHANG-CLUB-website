import os
import re

css_content = """<style>
:root {
  --primary: #00f3ff;
  --primary-dim: rgba(0, 243, 255, 0.15);
  --primary-glow: rgba(0, 243, 255, 0.6);
  --secondary: #bd00ff;
  --bg: #030508;
  --bg2: #080b12;
  --bg3: rgba(12, 16, 26, 0.6);
  --text: #f1f5f9;
  --text-muted: #94a3b8;
  --text-dim: #475569;
  --border: rgba(255, 255, 255, 0.08);
  --font-display: 'Bebas Neue', sans-serif;
  --font-hud: 'Orbitron', monospace;
  --font-mono: 'Share Tech Mono', monospace;
  --font-body: 'Rajdhani', sans-serif;
}
*,*::before,*::after{box-sizing:border-box;margin:0;padding:0}
html{scroll-behavior:smooth;font-size:16px}
body{background:var(--bg);color:var(--text);font-family:var(--font-body);overflow-x:hidden;text-transform:uppercase}
a{text-decoration:none;color:inherit;transition:all 0.3s ease;}
button{cursor:pointer;font-family:inherit;border:none;background:none;text-transform:uppercase}
@keyframes fadeUp{from{opacity:0;transform:translateY(40px) scale(0.95)}to{opacity:1;transform:translateY(0) scale(1)}}
@keyframes gridDrift{from{background-position: 0 0}to{background-position: 60px 60px}}
@keyframes ringPulse{0%,100%{opacity:.1;transform:translate(-50%,-50%) scale(1);box-shadow: 0 0 20px var(--primary-dim)}50%{opacity:.4;transform:translate(-50%,-50%) scale(1.05);box-shadow: 0 0 40px var(--primary-glow)}}
@keyframes scrollDrop{0%,100%{opacity:0;transform:translateY(-10px)}50%{opacity:1;transform:translateY(10px)}}
@keyframes pulseLogo{0%,100%{opacity:1; filter: drop-shadow(0 0 5px var(--primary))}50%{opacity:.7; filter: drop-shadow(0 0 15px var(--primary))}}

/* Buttons */
.btn-primary{font-family:var(--font-mono);font-size:.65rem;letter-spacing:.25em;color:var(--bg);background:var(--primary);padding:1rem 2.5rem;clip-path:polygon(0 0,calc(100% - 15px) 0,100% 15px,100% 100%,15px 100%,0 calc(100% - 15px));transition:all .3s cubic-bezier(0.25, 1, 0.5, 1);display:inline-block;position:relative;box-shadow: 0 0 15px var(--primary-glow); font-weight: bold;}
.btn-primary:hover{background:#fff;color:var(--bg);transform:translateY(-3px) scale(1.02);box-shadow: 0 0 30px var(--primary-glow)}
.btn-secondary{font-family:var(--font-mono);font-size:.65rem;letter-spacing:.25em;color:var(--primary);padding:1rem 2.5rem;border:1px solid var(--primary);background: rgba(0,243,255,0.05); transition:all .3s cubic-bezier(0.25, 1, 0.5, 1);display:inline-block; backdrop-filter: blur(5px);}
.btn-secondary:hover{background:var(--primary-dim);box-shadow: inset 0 0 15px var(--primary-dim), 0 0 15px var(--primary-dim);transform:translateY(-3px) scale(1.02)}

/* Hero Base */
#hero{min-height:100vh;display:flex;align-items:center;justify-content:center;overflow:hidden;position:relative}
.hero-video-bg{position:absolute;inset:0;z-index:0}
.hero-video-bg video{width:100%;height:100%;object-fit:cover;opacity:.3; mix-blend-mode: luminosity;}
.hero-video-overlay{position:absolute;inset:0;background:radial-gradient(circle at center, rgba(3,5,8,0.4) 0%, rgba(3,5,8,0.9) 100%);z-index:1}
.hero-grid-bg{position:absolute;inset:0;z-index:2;background-image:linear-gradient(rgba(0,243,255,.05) 1px,transparent 1px),linear-gradient(90deg,rgba(0,243,255,.05) 1px,transparent 1px);background-size:60px 60px;animation:gridDrift 20s linear infinite}
.hero-vignette{position:absolute;inset:0;z-index:3;pointer-events:none;background:linear-gradient(to bottom, rgba(3,5,8,0.8) 0%, transparent 20%, transparent 80%, rgba(3,5,8,1) 100%)}

/* HUD Elements */
.hud-corner{position:absolute;z-index:4;width:40px;height:40px; transition: all 0.5s;}
.hud-corner.tl{top:2rem;left:2rem;border-top:2px solid var(--primary);border-left:2px solid var(--primary); box-shadow: -5px -5px 15px var(--primary-dim)}
.hud-corner.tr{top:2rem;right:2rem;border-top:2px solid var(--primary);border-right:2px solid var(--primary); box-shadow: 5px -5px 15px var(--primary-dim)}
.hud-corner.bl{bottom:5rem;left:2rem;border-bottom:2px solid var(--primary);border-left:2px solid var(--primary); box-shadow: -5px 5px 15px var(--primary-dim)}
.hud-corner.br{bottom:5rem;right:2rem;border-bottom:2px solid var(--primary);border-right:2px solid var(--primary); box-shadow: 5px 5px 15px var(--primary-dim)}
.hud-label{position:absolute;z-index:4;font-family:var(--font-mono);font-size:.55rem;letter-spacing:.2em;color:var(--primary);opacity:.8; text-shadow: 0 0 8px var(--primary-glow);}
.hud-tl{top:2.3rem;left:5rem}.hud-tr{top:2.3rem;right:5rem;text-align:right}.hud-bl{bottom:5.3rem;left:5rem}.hud-br{bottom:5.3rem;right:5rem;text-align:right}

/* Rings */
.rings{position:absolute;top:50%;left:50%;z-index:2;pointer-events:none}
.ring{position:absolute;top:50%;left:50%;border:1px solid var(--primary-dim);border-radius:50%;animation:ringPulse 6s ease-in-out infinite}
.ring:nth-child(1){width:150px;height:150px;transform:translate(-50%,-50%); border-style: dashed;}
.ring:nth-child(2){width:350px;height:350px;transform:translate(-50%,-50%);animation-delay:1.2s; border-color: rgba(0,243,255,0.05)}
.ring:nth-child(3){width:600px;height:600px;transform:translate(-50%,-50%);animation-delay:2.4s; border-color: rgba(0,243,255,0.02)}

/* Hero Content */
.hero-content{position:relative;z-index:5;text-align:center;max-width:1000px;padding:0 2rem}
.hero-eyebrow{font-family:var(--font-mono);font-size:.7rem;letter-spacing:.4em;color:var(--primary);margin-bottom:1.5rem;opacity:0;animation:fadeUp 1s cubic-bezier(0.2, 0.8, 0.2, 1) .2s forwards; text-shadow: 0 0 10px var(--primary-glow)}
.hero-title{font-family:var(--font-display);font-size:clamp(4.5rem,14vw,14rem);line-height:.85;letter-spacing:.05em;margin-bottom:1.5rem;opacity:0;animation:fadeUp 1s cubic-bezier(0.2, 0.8, 0.2, 1) .4s forwards; text-shadow: 0 10px 30px rgba(0,0,0,0.8)}
.hero-title .outline{-webkit-text-stroke:2px var(--text);color:transparent; opacity: 0.9}
.hero-title .accent{background: linear-gradient(135deg, var(--primary), var(--secondary)); -webkit-background-clip: text; -webkit-text-fill-color: transparent; filter: drop-shadow(0 0 20px var(--primary-dim));}
.hero-sub{font-family:var(--font-body);font-size:1.1rem;font-weight:400;color:var(--text-muted);max-width:580px;margin:0 auto 3rem;line-height:1.8;opacity:0;animation:fadeUp 1s cubic-bezier(0.2, 0.8, 0.2, 1) .6s forwards; text-shadow: 0 2px 10px rgba(0,0,0,0.5)}
.hero-btns{display:flex;gap:1.5rem;justify-content:center;flex-wrap:wrap;opacity:0;animation:fadeUp 1s cubic-bezier(0.2, 0.8, 0.2, 1) .8s forwards}

/* Scroll */
.scroll-hint{position:absolute;bottom:7rem;left:50%;transform:translateX(-50%);z-index:5;font-family:var(--font-mono);font-size:.55rem;letter-spacing:.4em;color:var(--text-muted);text-align:center;opacity:0;animation:fadeUp 1s ease 1s forwards}
.scroll-line{width:2px;height:45px;margin:.5rem auto 0;background:linear-gradient(to bottom,var(--primary),transparent);animation:scrollDrop 2.5s ease-in-out infinite; box-shadow: 0 0 10px var(--primary)}

/* Stats Pill */
.hero-stats{position:absolute;bottom:2rem;left:50%;transform:translateX(-50%); width:90%; max-width:900px; z-index:10;display:flex;border:1px solid var(--border);background:var(--bg3);backdrop-filter:blur(20px); border-radius: 16px; box-shadow: 0 20px 40px rgba(0,0,0,0.5), 0 0 0 1px rgba(255,255,255,0.05) inset; overflow: hidden;}
.hero-stat{flex:1;padding:1.2rem .5rem;text-align:center;border-right:1px solid var(--border);transition:all .3s cubic-bezier(0.25, 1, 0.5, 1);cursor:pointer; position: relative;}
.hero-stat:last-child{border-right:none}
.hero-stat:hover{background:rgba(255,255,255,0.03); transform: translateY(-5px)}
.hero-stat:hover .hero-stat-val{color: #fff; text-shadow: 0 0 20px var(--primary-glow)}
.hero-stat-val{display:block;font-family:var(--font-hud);font-size:1.6rem;font-weight:900;color:var(--primary);line-height:1; transition: all 0.3s;}
.hero-stat-lbl{display:block;font-family:var(--font-mono);font-size:.48rem;letter-spacing:.2em;color:var(--text-muted);margin-top:.4rem; font-weight: 700}
@media(max-width:768px){.hero-title{font-size:clamp(3.5rem,18vw,6rem)}.hud-label{display:none}.rings{display:none}.hero-stats{flex-wrap: wrap; bottom: 1rem; width: 95%; border-radius: 12px;}.hero-stat{flex: 1 1 30%; border-bottom: 1px solid var(--border);}.hero-stat:nth-child(n+4){border-bottom:none}}

/* ───── NAV ───── */
nav{position:fixed;top:0;left:0;right:0;z-index:900;display:flex;align-items:center;justify-content:space-between;padding:1.5rem 4rem;transition:all .4s cubic-bezier(0.25, 1, 0.5, 1);}
nav.scrolled{padding:1rem 4rem;background:rgba(3, 5, 8, 0.8);backdrop-filter:blur(24px);border-bottom:1px solid var(--border); box-shadow: 0 10px 30px rgba(0,0,0,0.4)}
.nav-logo{display:flex;align-items:center;gap:1rem;text-decoration:none}
.nav-logo-icon{width:54px;height:54px;border:2px solid var(--primary);display:flex;align-items:center;justify-content:center;position:relative; box-shadow: 0 0 15px var(--primary-dim)}
.nav-logo-icon img {height: 48px; border-radius: 2px;}
.nav-logo-icon::after{content:'';position:absolute;inset:3px;background:var(--primary);clip-path:polygon(50% 0,100% 100%,0 100%);animation:pulseLogo 3s ease-in-out infinite; opacity: 0.1}
.nav-logo-text{font-family:var(--font-hud);font-size:1.4rem;font-weight:900;letter-spacing:.25em;color:var(--text); text-shadow: 0 0 10px rgba(255,255,255,0.2)}
.nav-logo-text span{color:var(--primary); text-shadow: 0 0 15px var(--primary-glow)}
.nav-links{display:flex;background:rgba(255,255,255,0.02);border:1px solid var(--border); border-radius: 8px; backdrop-filter: blur(10px); overflow: hidden;}
.nav-links a{font-family:var(--font-mono);font-size:.65rem;letter-spacing:.2em;padding:.8rem 1.4rem;border-right:1px solid var(--border);color:var(--text-muted);transition:all .3s;display:block;}
.nav-links a:last-child{border-right:none}
.nav-links a:hover,.nav-links a.active{color:var(--bg);background:var(--primary); box-shadow: 0 0 20px var(--primary-glow); font-weight: bold;}
.hamburger{display:none;flex-direction:column;gap:6px;padding:4px;cursor:pointer;background:none;border:none; z-index: 901}
.hamburger span{width:26px;height:2px;background:var(--primary);display:block;transition:all .3s; box-shadow: 0 0 8px var(--primary-glow)}
.mobile-nav{display:none;position:fixed;top:0;left:0;right:0;bottom:0;background:rgba(3,5,8,.98);backdrop-filter:blur(30px);flex-direction:column;z-index:899; padding-top: 100px;}
.mobile-nav a{font-family:var(--font-mono);font-size:1rem;letter-spacing:.25em;padding:1.5rem;border-bottom:1px solid rgba(255,255,255,.05);color:var(--text-muted);transition:all .3s;display:block; text-align: center;}
.mobile-nav a:hover{color:var(--primary);background:rgba(0,243,255,.05); letter-spacing: .35em;}
@media(max-width:1100px){nav{padding:1.2rem 2rem}nav.scrolled{padding:1rem 2rem}.nav-links{display:none}.hamburger{display:flex}.mobile-nav.open{display:flex}}

/* page top padding for fixed nav */
body>section:first-of-type, body>div:first-of-type{padding-top:0}
section{scroll-margin-top:100px}

/* ───── FOOTER ───── */
footer{background:var(--bg2);border-top:1px solid var(--border); position: relative; overflow: hidden;}
footer::before {content:''; position:absolute; top:0; left:0; right:0; height:1px; background: linear-gradient(90deg, transparent, var(--primary), transparent); opacity: 0.5;}
.footer-inner{padding:6rem 2rem 0; max-width: 1200px; margin: 0 auto;}
.footer-grid{display:grid;grid-template-columns:1.5fr 1fr 1fr 1fr;gap:4rem;padding-bottom:5rem}
.footer-brand .nav-logo{margin-bottom:2rem;display:inline-flex}
.footer-desc{font-family:var(--font-mono);font-size:.8rem;color:var(--text-muted);line-height:1.8;margin-bottom:2rem}
.social-links{display:flex;gap:1rem}
.social-link{width:44px;height:44px;border:1px solid var(--border);border-radius: 8px; display:flex;align-items:center;justify-content:center;font-family:var(--font-mono);font-size:.6rem;letter-spacing:.05em;color:var(--text-muted);transition:all .3s cubic-bezier(0.25, 1, 0.5, 1); background: rgba(255,255,255,0.02)}
.social-link:hover{color:var(--bg);background:var(--primary);border-color:var(--primary);transform: translateY(-5px); box-shadow: 0 10px 20px var(--primary-dim)}
.footer-heading{font-family:var(--font-hud);font-size:.7rem;font-weight:900;letter-spacing:.3em;color:var(--text);margin-bottom:2rem; position: relative; padding-bottom: 0.5rem;}
.footer-heading::after{content:''; position:absolute; bottom:0; left:0; width:30px; height:2px; background:var(--primary)}
.footer-links{list-style:none;display:flex;flex-direction:column;gap:1rem}
.footer-links a{font-family:var(--font-mono);font-size:.8rem;color:var(--text-dim);transition:all .3s; display: inline-block;}
.footer-links a:hover{color:var(--primary); transform: translateX(5px)}
.contact-item{display:flex;align-items:flex-start;gap:1rem;margin-bottom:1.5rem}
.contact-label{font-family:var(--font-mono);font-size:.55rem;color:var(--primary);margin-top:.2rem;min-width:2.5rem; letter-spacing: .1em}
.contact-text{font-family:var(--font-mono);font-size:.8rem;color:var(--text-muted);line-height:1.6}
.contact-text a{color:var(--text-muted);transition:color .3s}
.contact-text a:hover{color:var(--primary)}
.affil-card{padding:1.5rem;border:1px solid var(--border);background:var(--bg3);border-radius: 8px;margin-bottom:1rem; transition: transform 0.3s; backdrop-filter: blur(10px);}
.affil-card:hover{transform: translateY(-5px); border-color: rgba(0,243,255,0.3)}
.affil-label{font-family:var(--font-mono);font-size:.55rem;letter-spacing:.2em;color:var(--primary);display:block;margin-bottom:.5rem}
.affil-text{font-family:var(--font-mono);font-size:.85rem;color:var(--text)}
.footer-bottom{border-top:1px solid var(--border);padding:2rem 2rem;display:flex;justify-content:space-between;align-items:center;flex-wrap:wrap;gap:1.5rem; max-width: 1200px; margin: 0 auto;}
.footer-copy{font-family:var(--font-mono);font-size:.65rem;color:var(--text-dim); letter-spacing: .1em}
.footer-tagline{font-family:var(--font-hud);font-size:.65rem;letter-spacing:.4em;color:var(--primary); text-shadow: 0 0 10px var(--primary-glow)}
@media(max-width:1100px){.footer-grid{grid-template-columns:1fr 1fr;gap:3rem}}
@media(max-width:600px){.footer-grid{grid-template-columns:1fr}.footer-bottom{flex-direction:column;text-align:center}}
</style>"""

filepath = '/home/pratik/.gemini/antigravity/scratch/VIHANG-CLUB-website/index.html'
with open(filepath, 'r', encoding='utf-8') as f:
    content = f.read()

# Replace the style block
content = re.sub(r'<style>.*?</style>', css_content, content, flags=re.DOTALL)

# Fix the broken logo extension just in case it exists in index.html
content = content.replace('vihang logo.jp"', 'vihang logo.jpg"')
content = content.replace('href="https:./', 'href="./')

with open(filepath, 'w', encoding='utf-8') as f:
    f.write(content)

print("index.html revamped successfully!")
