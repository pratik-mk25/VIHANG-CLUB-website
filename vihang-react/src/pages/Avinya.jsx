import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import './Avinya.css';

const pioneers = [
  {
    name: "Alan Turing",
    role: "Father of Computer Science & Artificial Intelligence",
    quote: '"We can only see a short distance ahead, but we can see plenty there that needs to be done."',
    relic: {
      name: "The Universal Turing Machine",
      desc: "A mathematical abstraction of a single machine capable of computing any computable sequence — the conceptual engine from which every processor, every algorithm, and every AI system in existence descends."
    },
    desc: "In his landmark 1950 paper 'Computing Machinery and Intelligence,' Turing posed the question that founded an entire discipline: 'Can machines think?' His formalization of computation gave humanity a universal language for intelligence itself, and the test he devised to measure machine cognition remains the benchmark of AI research to this day.",
    img: "/idols/alan-turing.jpg"
  },
  {
    name: "A. P. J. Abdul Kalam",
    role: "Missile Man of India",
    quote: '"Dream is not that which you see while sleeping; it is something that does not let you sleep."',
    relic: {
      name: "SLV-3",
      desc: "India's first indigenously developed Satellite Launch Vehicle, which successfully placed the Rohini satellite into orbit on July 18, 1980 — demonstrating that complex aerospace systems could be engineered entirely by Indian hands, on Indian soil."
    },
    desc: "Chief architect of India's Integrated Guided Missile Development Programme and the SLV-3 project, Dr. Kalam proved that technological sovereignty is not a privilege, but a discipline. His lifelong vision of a self-reliant, technology-led Bharat is the founding conviction behind every indigenous system Avinya builds.",
    img: "/idols/apj-abdul-kalam.jpg"
  },
  {
    name: "C. V. Raman",
    role: "First Asian Nobel Laureate in Physics",
    quote: '"Ask the right questions, and nature will open the doors to her secrets."',
    relic: {
      name: "The Raman Spectrometer",
      desc: "Assembled from improvised equipment costing a few hundred rupees, this instrument revealed the inelastic scattering of photons on February 28, 1928 — a discovery now fundamental to modern LiDAR, optical sensing, and non-destructive material analysis."
    },
    desc: "Using equipment costing under ₹200, Raman discovered the scattering phenomenon that bears his name, earning Asia its first Nobel Prize in science in 1930. The Raman Effect is today the operating principle behind LiDAR systems — the very technology enabling autonomous machines to perceive and map the physical world around them.",
    img: "/idols/cv_raman.png"
  },
  {
    name: "Srinivasa Ramanujan",
    role: "Prince of Mathematics",
    quote: '"An equation for me has no meaning unless it expresses a thought of God."',
    relic: {
      name: "The Lost Notebook",
      desc: "Rediscovered at Trinity College Cambridge in 1976, it contains over 600 theorems — many still being formally proved today, with active applications in number theory, string theory, and the optimization algorithms at the core of modern machine learning."
    },
    desc: "Without formal university training, Ramanujan independently arrived at results it took the Western mathematical tradition centuries to develop. The infinite series, modular forms, and partition functions he discovered now underpin machine learning optimization, error-correcting codes, and the cryptographic systems that secure modern AI infrastructure.",
    img: "/idols/srinivasa-ramanujan.jpg"
  },
  {
    name: "Vijay Bhatkar",
    role: "Father of Indian Supercomputing",
    quote: '"The whole effort — building an institution, developing the technology, commissioning and installing India\'s first supercomputer — will cost less than the cost of a Cray."',
    relic: {
      name: "PARAM 8000",
      desc: "Unveiled by C-DAC, Pune in 1991 after the United States denied India access to Cray supercomputers, PARAM 8000 delivered one gigaflop per second — making India the third nation in the world, after the USA and Japan, to possess this strategic technology. It was later exported to Germany, the UK, and Russia."
    },
    desc: "When international technology embargoes blocked India's access to high-performance computing, Bhatkar led C-DAC to build a supercomputer from scratch in under three years. US newspapers ran the headline: 'Denied Supercomputer, Angry India Does It.' The principle — build it yourself, on your own terms — is the same one that drives Avinya's commitment to indigenous AI development.",
    img: "/idols/vijay-bhatkar.jpg"
  }
];


// Buttery smooth animation config
const fadeUpConfig = {
  initial: { opacity: 0, y: 50 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-100px" },
  transition: { duration: 1.2, ease: [0.16, 1, 0.3, 1] }
};

export default function Avinya() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="fable-page">
      {/* Dreamy Aurora Background */}
      <div className="aurora-container">
        <div className="aurora aurora-1"></div>
        <div className="aurora aurora-2"></div>
        <div className="aurora aurora-3"></div>
      </div>

      <div className="fable-content-wrapper">
        {/* Hero Section */}
        <section className="fable-hero fable-container">
          <motion.div 
            className="fable-hero-portrait-wall"
            initial={{ opacity: 0, filter: "blur(20px)", y: 30 }}
            animate={{ opacity: 1, filter: "blur(0px)", y: 0 }}
            transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
            style={{ width: "100%", maxWidth: "1200px", margin: "0 auto 4rem auto", position: "relative", display: "flex", justifyContent: "center", alignItems: "center", minHeight: "500px" }}
          >
            <div style={{ position: "absolute", inset: 0, display: "flex", justifyContent: "center", gap: "1rem", width: "100%", overflow: "hidden", zIndex: 1 }}>
              <img src="/idols/alan-turing.jpg" alt="Alan Turing" style={{ width: "18%", height: "500px", objectFit: "cover", filter: "grayscale(100%) contrast(1.2)" }} />
              <img src="/idols/apj-abdul-kalam.jpg" alt="A.P.J. Abdul Kalam" style={{ width: "18%", height: "500px", objectFit: "cover", filter: "grayscale(100%) contrast(1.2)" }} />
              <img src="/idols/cv_raman.png" alt="C.V. Raman" style={{ width: "18%", height: "500px", objectFit: "cover", filter: "grayscale(100%) contrast(1.2)" }} />
              <img src="/idols/srinivasa-ramanujan.jpg" alt="Srinivasa Ramanujan" style={{ width: "18%", height: "500px", objectFit: "cover", filter: "grayscale(100%) contrast(1.2)" }} />
              <img src="/idols/vijay-bhatkar.jpg" alt="Vijay Bhatkar" style={{ width: "18%", height: "500px", objectFit: "cover", filter: "grayscale(100%) contrast(1.2)" }} />
            </div>
            <h1 style={{ 
              position: "relative",
              zIndex: 2,
              fontSize: "clamp(60px, 16vw, 250px)", 
              fontWeight: "900", 
              fontFamily: "'Impact', 'Anton', 'Arial Black', sans-serif", 
              margin: 0, 
              lineHeight: 1, 
              letterSpacing: "0.05em",
              textTransform: "uppercase",
              color: "#ffffff",
              textShadow: "0 10px 40px rgba(0,0,0,0.9)",
              opacity: 0.81
            }}>
              AVINYA
            </h1>
          </motion.div>
          <motion.p 
            className="fable-subtitle"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: 0.6 }}
          >
            From Turing's universal machine to Bhatkar's PARAM, a lineage of thinkers proved that intelligence must be built — not borrowed. Avinya carries that conviction forward in software, artificial intelligence, and the pursuit of a self-reliant Bharat.
          </motion.p>
        </section>

        {/* Avinya Envisions */}
        <section className="fable-section fable-container">
          <motion.h2 
            className="fable-section-title"
            {...fadeUpConfig}
          >
            Avinya Envisions
          </motion.h2>

          <div className="fable-relic-grid" style={{ gridTemplateColumns: '1fr', gap: '2rem' }}>
            <motion.div 
              className="fable-relic-card"
              initial={{ opacity: 0, scale: 0.95, y: 30 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
            >
              <h4 className="fable-relic-title" style={{ color: 'rgba(255,255,255,0.4)', fontSize: '1rem', letterSpacing: '0.2em' }}>01</h4>
              <p className="fable-relic-desc" style={{ fontSize: '1.5rem', color: '#ffffff', fontFamily: 'var(--fable-serif)' }}>Leading R&D in indigenous software development</p>
            </motion.div>
            <motion.div 
              className="fable-relic-card"
              initial={{ opacity: 0, scale: 0.95, y: 30 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
            >
              <h4 className="fable-relic-title" style={{ color: 'rgba(255,255,255,0.4)', fontSize: '1rem', letterSpacing: '0.2em' }}>02</h4>
              <p className="fable-relic-desc" style={{ fontSize: '1.5rem', color: '#ffffff', fontFamily: 'var(--fable-serif)' }}>Leading R&D in indigenous artificial intelligence development</p>
            </motion.div>
            <motion.div 
              className="fable-relic-card"
              initial={{ opacity: 0, scale: 0.95, y: 30 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.3 }}
            >
              <h4 className="fable-relic-title" style={{ color: 'rgba(255,255,255,0.4)', fontSize: '1rem', letterSpacing: '0.2em' }}>03</h4>
              <p className="fable-relic-desc" style={{ fontSize: '1.5rem', color: '#ffffff', fontFamily: 'var(--fable-serif)' }}>Leveraging software technology in the service and growth of Bharat</p>
            </motion.div>
          </div>
        </section>


        {/* Visionaries Grid */}
        <section className="fable-section fable-container" style={{ paddingBottom: '8rem' }}>
          <motion.h2 
            className="fable-section-title"
            {...fadeUpConfig}
          >
            The Pioneers
          </motion.h2>

          <div className="fable-grid" style={{ display: 'flex', flexDirection: 'column', gap: '6rem' }}>
            {pioneers.map((p, i) => (
              <div key={p.name} className={`fable-glass-row ${i % 2 === 1 ? 'reverse' : ''}`}>
                <motion.div 
                  className="fable-glass-card"
                  initial={{ opacity: 0, x: i % 2 === 1 ? 50 : -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
                >
                  <span className="fable-card-role">{p.role}</span>
                  <h3 className="fable-card-title">{p.name}</h3>
                  <p className="fable-card-desc">{p.desc}</p>
                  <blockquote className="fable-card-quote">{p.quote}</blockquote>
                  
                  <div className="fable-artifact">
                    <span className="fable-artifact-label">Contribution</span>
                    <h4 className="fable-artifact-name">{p.relic.name}</h4>
                    <p className="fable-artifact-desc">{p.relic.desc}</p>
                  </div>
                </motion.div>

                <motion.div 
                  className="fable-image-panel"
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
                >
                  <img src={p.img} alt={p.name} />
                </motion.div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}