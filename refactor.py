import os

directory = '/home/pratik/.gemini/antigravity/scratch/VIHANG-CLUB-website'

for filename in os.listdir(directory):
    if filename.endswith('.html'):
        filepath = os.path.join(directory, filename)
        with open(filepath, 'r', encoding='utf-8') as f:
            content = f.read()
        
        # Fix footer hash links
        content = content.replace('href="#about"', 'href="./about.html"')
        content = content.replace('href="#projects"', 'href="./projects.html"')
        content = content.replace('href="#DOCUMENTATION"', 'href="./documentation.html"')
        content = content.replace('href="#milestones"', 'href="./achievements.html"')
        content = content.replace('href="#internship"', 'href="./internship.html"')
        content = content.replace('href="#team"', 'href="./team.html"')
        content = content.replace('href="#gallery"', 'href="./gallery.html"')
        content = content.replace('href="#contact"', 'href="./contact.html"')
        
        with open(filepath, 'w', encoding='utf-8') as f:
            f.write(content)
            
print("Footer links fixed.")
