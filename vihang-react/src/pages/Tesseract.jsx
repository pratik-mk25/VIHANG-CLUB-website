import React, { useEffect } from 'react';
import './Tesseract.css';

const idolDetails = [
  {
    name: 'HOMI BHABHA',
    title: 'FATHER OF INDIAN NUCLEAR PROGRAM',
    years: '1909–1966',
    domains: ['NUCLEAR PHYSICS', 'QUANTUM THEORY', 'INSTITUTION BUILDING'],
    relic: {
      name: 'APSARA REACTOR',
      type: 'NUCLEAR RESEARCH FACILITY',
      year: '1956',
      desc: "Asia's first nuclear reactor. Built entirely by Indian engineers under his guidance, it proved that India could harness the ultimate power of the atom independently.",
      image: '/idols/relic_apsara_1781461342237.png'
    },
    quote: '"No power is greater than the power of science, and no science is greater than the quest for truth."',
    desc: "Founded Tata Institute of Fundamental Research and BARC. Architect of India's atomic energy program. A visionary who believed in self-reliance through science.",
    image: '/idols/homi-bhabha.jpg'
  },
  {
    name: 'VIKRAM SARABHAI',
    title: 'FATHER OF INDIAN SPACE PROGRAM',
    years: '1919–1971',
    domains: ['ASTROPHYSICS', 'SPACE EXPLORATION', 'MANAGEMENT'],
    relic: {
      name: 'ARYABHATA SATELLITE',
      type: 'ORBITAL OBSERVATORY',
      year: '1975',
      desc: "The conceptual foundation of India's first satellite. Sarabhai envisioned using the ultimate high-ground of space for telecommunications and earth observation.",
      image: '/idols/relic_aryabhata_1781461353758.png'
    },
    quote: '"There are some who question the relevance of space activities in a developing nation. To us, there is no ambiguity of purpose."',
    desc: "Founded ISRO and pioneered India's space program. Believed space technology must serve the common man. Laid the foundation for satellite communication and remote sensing.",
    image: '/idols/vikram-sarabhai.jpg'
  },
  {
    name: 'JAGDISH CHANDRA BOSE',
    title: 'PIONEER OF RADIO & PLANT PHYSIOLOGY',
    years: '1858–1937',
    domains: ['MICROWAVE OPTICS', 'BIOPHYSICS', 'BOTANY'],
    relic: {
      name: 'MILLIMETER-WAVE TRANSMITTER',
      type: 'MICROWAVE OPTICS',
      year: '1895',
      desc: 'Pioneered the generation of extremely short radio waves and the Iron-Mercury coherer, laying the foundation for modern wireless telecommunications and 5G networks long before Marconi.',
      image: '/idols/relic_transmitter_1781461367362.png'
    },
    quote: '"The true laboratory is the mind, where behind illusions we uncover the laws of truth."',
    desc: 'First to demonstrate wireless communication using semiconductors. Pioneered plant neurophysiology. Refused patents, believing science should benefit all humanity.',
    image: '/idols/jagdish-chandra-bose.jpg'
  },
  {
    name: 'NIKOLA TESLA',
    title: 'MASTER OF LIGHTNING',
    years: '1856–1943',
    domains: ['ELECTROMAGNETISM', 'ALTERNATING CURRENT', 'WIRELESS ENERGY'],
    relic: {
      name: 'WARDENCLYFFE TOWER',
      type: 'WIRELESS TRANSMISSION STATION',
      year: '1901',
      desc: "A colossal experimental tower designed to transmit messages, telephony, and even power completely wirelessly across the entire globe using the Earth's ionosphere.",
      image: '/idols/relic_wardenclyffe_1781461379567.png'
    },
    quote: '"The present is theirs; the future, for which I really worked, is mine."',
    desc: "Invented the AC power system, induction motor, Tesla coil, and wireless transmission. Envisioned global wireless energy. A genius who worked for humanity's future.",
    image: '/idols/nikola-tesla.jpg'
  }
];

export default function Tesseract() {
  
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
    <div className="story-page tesseract-story">
      
      <section className="story-hero composite-hero">
        <div className="composite-image-wrapper fade-in-section">
          <img src="/idols/tesseract_hero.png" alt="Tesseract Visionaries" className="composite-hero-img" />
        </div>
      </section>

      <section className="story-foundations">
        <div className="story-container">
          <div className="editorial-header fade-in-section">
            <span className="chapter-num">CHAPTER I</span>
            <h2>The Shoulders of Giants</h2>
            <p className="chapter-desc">Before we can engineer the machines of tomorrow, we must understand the visionaries who mapped the physical laws of our universe.</p>
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
          <h2 className="transition-statement">"They conquered the theories.<br/>We are conquering the skies."</h2>
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
              Tesseract is not just a collection of drone frames or a list of sensor modules. It is an exploration into the nature of autonomy, control, and three-dimensional kinematics.
            </p>
            <p className="future-text">
              We are moving beyond off-the-shelf components. Our mission is to build intelligent physical systems from the ground up—custom flight controllers that process thousands of data points per second, and telemetry stations that bridge the gap between human intent and robotic action.
            </p>
            <p className="future-text">
              From the lowest level of circuit board design to the highest abstraction of autonomous navigation, Tesseract represents our commitment to pushing the physical limits of what a student-led organization can achieve.
            </p>
          </div>
        </div>
      </section>

    </div>
  );
}