import React, { useEffect } from 'react';
import './Avinya.css';

const idolDetails = [
  {
    name: 'Alan Turing',
    title: 'FATHER OF COMPUTER SCIENCE',
    years: '1912–1954',
    domains: ['CRYPTOGRAPHY', 'LOGIC', 'AI'],
    relic: {
      name: 'THE ENIGMA BOMBE',
      type: 'ELECTROMECHANICAL DECRYPTION',
      year: '1940',
      desc: 'A massive electromechanical machine designed to crack the Enigma code, laying the physical and theoretical foundations for modern computational logic.',
      image: '/idols/relic_enigma_1781461282479.png'
    },
    quote: '"We can only see a short distance ahead, but we can see plenty there that needs to be done."',
    desc: 'Pioneered theoretical computer science and artificial intelligence. His work on the Turing machine laid the foundation for modern computing.',
    image: '/idols/alan-turing.jpg'
  },
  {
    name: 'APJ Abdul Kalam',
    title: 'MISSILE MAN OF INDIA',
    years: '1931–2015',
    domains: ['AEROSPACE', 'DEFENSE', 'LEADERSHIP'],
    relic: {
      name: 'SLV-3 LAUNCH VEHICLE',
      type: 'SATELLITE LAUNCH ARCHITECTURE',
      year: '1980',
      desc: "India's first experimental satellite launch vehicle. It catalyzed the nation's aerospace trajectory, proving that indigenous engineering could touch the stars.",
      image: '/idols/relic_slv3_1781461295532.png'
    },
    quote: '"Dream, dream, dream. Dreams transform into thoughts and thoughts result in action."',
    desc: "Renowned aerospace scientist and 11th President of India. Led India's missile and space programs, inspiring generations of engineers.",
    image: '/idols/apj-abdul-kalam.jpg'
  },
  {
    name: 'Srinivasa Ramanujan',
    title: 'MATHEMATICAL GENIUS',
    years: '1887–1920',
    domains: ['NUMBER THEORY', 'INFINITE SERIES', 'ANALYSIS'],
    relic: {
      name: 'THE LOST NOTEBOOKS',
      type: 'MATHEMATICAL MANUSCRIPTS',
      year: '1910s',
      desc: 'Pages filled with thousands of unproven theorems and equations that seemed to bypass logic—formulas that modern physicists now use to understand black holes.',
      image: '/idols/relic_notebooks_1781461306556.png'
    },
    quote: '"An equation for me has no meaning unless it expresses a thought of God."',
    desc: 'Self-taught mathematician who made substantial contributions to mathematical analysis, number theory, and infinite series.',
    image: '/idols/srinivasa-ramanujan.jpg'
  },
  {
    name: 'DR. VIJAY BHATKAR',
    title: 'ARCHITECT OF INDIAN SUPERCOMPUTING',
    years: '1946–PRESENT',
    domains: ['SUPERCOMPUTING', 'IT ARCHITECTURE', 'EDUCATION'],
    relic: {
      name: 'PARAM 8000',
      type: 'PARALLEL PROCESSING SUPERCOMPUTER',
      year: '1991',
      desc: "Built in just three years after technology embargos, PARAM put India on the map as a global leader in high-performance computing architecture.",
      image: '/idols/relic_param_1781461317214.png'
    },
    quote: '"Technology must serve humanity, not the other way around."',
    desc: "Pioneered India's first supercomputer PARAM. Led the development of high-performance computing infrastructure in India.",
    image: '/idols/vijay-bhatkar.jpg'
  }
];

export default function Avinya() {
  
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, { threshold: 0.1 });

    document.querySelectorAll('.fade-in-section').forEach(el => observer.observe(el));
    
    return () => observer.disconnect();
  }, []);

  return (
    <div className="story-page avinya-story">
      
      <section className="story-hero composite-hero">
        <div className="composite-image-wrapper fade-in-section">
          <img src="/idols/avinya_hero.png" alt="Avinya Visionaries" className="composite-hero-img" />
        </div>
      </section>

      <section className="story-foundations">
        <div className="story-container">
          <div className="editorial-header fade-in-section">
            <span className="chapter-num">CHAPTER I</span>
            <h2>The Shoulders of Giants</h2>
            <p className="chapter-desc">Before we can build the mind of tomorrow, we must understand the visionaries who laid the theoretical foundations of our world.</p>
          </div>

          <div className="editorial-fable-grid">
            <div className="fable-timeline"></div>
            {idolDetails.map((idol, idx) => (
              <div key={idx} className={`fable-row fade-in-section ${idx % 2 === 1 ? 'fable-row-right' : 'fable-row-left'}`} style={{ transitionDelay: `${idx * 0.1}s` }}>
                <div className="fable-node"></div>
                
                <div className="editorial-card bento-card">
                  <div className="editorial-img-wrapper">
                    <img src={idol.image} alt={idol.name} />
                  </div>
                  <div className="editorial-content">
                    <div className="domain-tags">
                      {idol.domains.map(tag => <span key={tag} className="tag">[{tag}]</span>)}
                    </div>
                    <span className="editorial-years">{idol.years}</span>
                    <h3 className="editorial-name">{idol.name}</h3>
                    <span className="editorial-role">{idol.title}</span>
                    <p className="editorial-desc">{idol.desc}</p>
                    <blockquote className="editorial-quote">{idol.quote}</blockquote>
                  </div>
                  
                  {/* The Life Element / Relic text */}
                  <div className="relic-card">
                    <div className="relic-header">
                      <span className="relic-label">ARTIFACT / {idol.relic.year}</span>
                      <h4 className="relic-name">{idol.relic.name}</h4>
                      <span className="relic-type">{idol.relic.type}</span>
                    </div>
                    <p className="relic-desc">{idol.relic.desc}</p>
                  </div>
                  
                </div>

                {/* Large Floating Illustration */}
                {idol.relic.image && (
                  <div className="fable-large-illustration">
                    <img src={idol.relic.image} alt={idol.relic.name} />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="story-transition fade-in-section">
        <div className="story-container text-center">
          <h2 className="transition-statement">"They envisioned the future.<br/>We are coding it."</h2>
        </div>
      </section>

      <section className="story-future fade-in-section">
        <div className="story-container">
          <div className="editorial-header">
            <span className="chapter-num">CHAPTER II</span>
            <h2>The Horizon</h2>
          </div>
          <div className="future-content">
            <p className="future-text">
              Avinya is not just a collection of repositories or a suite of management tools. It is an exploration into the nature of digital infrastructure and artificial cognition. 
            </p>
            <p className="future-text">
              We are moving beyond static software. Our mission is to weave intelligence directly into the fabric of the club—creating a permanent, conversational agent that doesn't merely assist, but belongs. An entity that understands our history, guides our new members, and grows alongside our ambition.
            </p>
            <p className="future-text">
              From the lowest level of embedded C to the highest abstraction of massive language models, Avinya represents the bleeding edge of what a student-led organization can accomplish when they dare to build the future.
            </p>
          </div>
        </div>
      </section>

    </div>
  );
}