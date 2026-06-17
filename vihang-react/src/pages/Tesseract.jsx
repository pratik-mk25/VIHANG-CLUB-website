import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import './Tesseract.css';

const idolDetails = [
  {
    name: "Homi J. Bhabha",
    title: "Father of India's Nuclear Programme",
    relic: {
      name: "Apsara Reactor",
      desc: "Commissioned on August 4, 1956 at BARC, Trombay — Asia's first nuclear reactor, designed and built entirely by Indian engineers. A definitive proof that India could master the most advanced engineering of its era through self-reliance alone."
    },
    quote: '"It is absolutely in the interest of India to have a vigorous school of research in fundamental physics, for such a school forms the spearhead of research not only in less advanced branches of physics but also in problems of immediate practical application in industry."',
    desc: "Founder of TIFR (1945) and BARC (1954), Bhabha built the institutional infrastructure for Indian science before a single instrument had been installed. He was the first Chairman of the UN Conference on the Peaceful Uses of Atomic Energy in 1955. His conviction — that rigorous theoretical science must be matched by practical engineering — is the philosophical root of Tesseract's hardware-first approach.",
    image: "/idols/homi-bhabha.jpg"
  },
  {
    name: "Vikram Sarabhai",
    title: "Father of India's Space Programme",
    relic: {
      name: "Aryabhata",
      desc: "Conceptualised by Sarabhai and launched on April 19, 1975 — India's first satellite, named after the ancient mathematician. It marked India's definitive entry into the orbital age and validated every hardware system Sarabhai had spent his life building."
    },
    quote: '"There are some who question the relevance of space activities in a developing nation. To us, there is no ambiguity of purpose."',
    desc: "Sarabhai established ISRO, VSSC, and the Physical Research Laboratory, transforming India from a nation that imported rockets to one that designed and launched them. His foundational conviction — that space technology must serve the common citizen, not national prestige — is the same philosophy guiding Tesseract's pursuit of autonomous systems for real-world application.",
    image: "/idols/vikram-sarabhai.jpg"
  },
  {
    name: "Jagdish Chandra Bose",
    title: "Pioneer of Wireless Communication",
    relic: {
      name: "Millimetre-Wave Radio Apparatus",
      desc: "Demonstrated at the Royal Institution, London in 1897, Bose's apparatus transmitted and detected electromagnetic waves at 60 GHz — a frequency now at the core of modern 5G networks, drone-to-GCS telemetry links, and millimetre-wave radar."
    },
    quote: '"All creative scientists know that the true laboratory is the mind, where behind illusions they uncover the laws of truth."',
    desc: "In 1895, Bose became the first person to demonstrate wireless communication of electromagnetic waves, preceding Marconi's patent by years. He used galena crystals — a natural semiconductor — as signal detectors, anticipating solid-state electronics by half a century. He refused all patents, believing that the truths of science belong to no one and everyone.",
    image: "/idols/jagdish-chandra-bose.jpg"
  },
  {
    name: "Nikola Tesla",
    title: "Architect of the Electrical Age",
    relic: {
      name: "Wardenclyffe Tower",
      desc: "Designed to transmit electrical power and communication signals wirelessly across the entire globe using the Earth's ionosphere as a conductor — a concept that predates modern wireless power transfer and global communications infrastructure by a full century."
    },
    quote: '"The present is theirs; the future, for which I really worked, is mine."',
    desc: "Tesla invented the polyphase AC power system and the induction motor — the two technologies that electrified the modern world. His pioneering work in rotating magnetic fields, resonant circuits, and high-frequency transmission continues to inform the motor controllers, ESCs, and power electronics at the heart of every Tesseract UAV.",
    image: "/idols/nikola-tesla.jpg"
  },
  {
    name: "Narinder Singh Kapany",
    title: "Father of Fibre Optics",
    relic: {
      name: "Flexible Fibre Bundle",
      desc: "Developed at Imperial College London in 1953 alongside Harold Hopkins, Kapany's flexible glass fibre bundle was the first to transmit coherent, high-quality images — the foundational experiment that launched an entire field and, decades later, the modern internet."
    },
    quote: '"When light is directed into one end of a glass fiber, it will emerge at the other end. Bundles of such fibers can be used to conduct images."',
    desc: "Kapany coined the term 'fibre optics' in a landmark 1960 Scientific American article and wrote the first textbook on the subject. Fortune named him one of seven 'Unsung Heroes of the 20th Century.' His work underlies the high-bandwidth optical data links now essential for real-time drone telemetry, GCS communication, and distributed sensor networks.",
    image: "/idols/narinder-singh-kapany.png"
  }
];

const fadeUpConfig = {
  initial: { opacity: 0, y: 60 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-100px" },
  transition: { duration: 1.4, ease: [0.16, 1, 0.3, 1] }
};

export default function Tesseract() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="tesseract-fable-page">
      {/* Ethereal Auroras */}
      <div className="tess-aurora-container">
        <div className="tess-aurora tess-aurora-1"></div>
        <div className="tess-aurora tess-aurora-2"></div>
        <div className="tess-aurora tess-aurora-3"></div>
      </div>

      <div className="tess-content-wrapper">
        <section className="tess-hero tess-container">
          <motion.div 
            className="tess-hero-portrait-wall"
            initial={{ opacity: 0, filter: "blur(20px)", y: 30 }}
            animate={{ opacity: 1, filter: "blur(0px)", y: 0 }}
            transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1], delay: 0.4 }}
            style={{ width: "100%", maxWidth: "1200px", margin: "0 auto 4rem auto", position: "relative", display: "flex", justifyContent: "center", alignItems: "center", minHeight: "500px" }}
          >
            <div style={{ position: "absolute", inset: 0, display: "flex", justifyContent: "center", gap: "1rem", width: "100%", overflow: "hidden", zIndex: 1 }}>
              <img src="/idols/homi-bhabha.jpg" alt="Homi Bhabha" style={{ width: "18%", height: "500px", objectFit: "cover", filter: "grayscale(100%) contrast(1.2)" }} />
              <img src="/idols/vikram-sarabhai.jpg" alt="Vikram Sarabhai" style={{ width: "18%", height: "500px", objectFit: "cover", filter: "grayscale(100%) contrast(1.2)" }} />
              <img src="/idols/jagdish-chandra-bose.jpg" alt="Jagdish Chandra Bose" style={{ width: "18%", height: "500px", objectFit: "cover", filter: "grayscale(100%) contrast(1.2)" }} />
              <img src="/idols/nikola-tesla.jpg" alt="Nikola Tesla" style={{ width: "18%", height: "500px", objectFit: "cover", filter: "grayscale(100%) contrast(1.2)" }} />
              <img src="/idols/narinder-singh-kapany.png" alt="Narinder Singh Kapany" style={{ width: "18%", height: "500px", objectFit: "cover", filter: "grayscale(100%) contrast(1.2)" }} />
            </div>
            <h1 style={{ 
              position: "relative",
              zIndex: 2,
              fontSize: "clamp(50px, 14vw, 200px)", 
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
              TESSERACT
            </h1>
          </motion.div>
          <motion.h3
            className="tess-fullform"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.4, ease: [0.16, 1, 0.3, 1], delay: 0.6 }}
            style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: "clamp(0.7rem, 1.5vw, 1rem)",
              letterSpacing: "0.2em",
              textTransform: "uppercase",
              color: "rgba(255, 255, 255, 0.5)",
              marginBottom: "1.5rem"
            }}
          >
            Testbed of Embedded Systems, Sensing, Electronics, Robotics, Autonomy, Control and Telemetry
          </motion.h3>
          <motion.p 
            className="tess-subtitle"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.4, ease: [0.16, 1, 0.3, 1], delay: 0.8 }}
          >
            Bhabha built a reactor. Sarabhai built rockets. Bose bent electromagnetic waves. Each worked under constraint, with conviction, and changed the world. Tesseract works in that same spirit — designing the embedded systems, control hardware, and autonomous architectures that give machines the power to fly, sense, and decide.
          </motion.p>
        </section>

        {/* Tesseract Envisions */}
        <section className="tess-section tess-container">
          <motion.h2 
            className="tess-section-title"
            {...fadeUpConfig}
          >
            Tesseract Envisions
          </motion.h2>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '2rem' }}>
            <motion.div 
              className="tess-glass-card"
              initial={{ opacity: 0, scale: 0.95, y: 30 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
            >
              <h4 style={{ color: 'rgba(255,255,255,0.4)', fontSize: '1rem', letterSpacing: '0.2em', textTransform: 'uppercase', marginBottom: '0.5rem' }}>01</h4>
              <p style={{ fontSize: '1.5rem', color: '#ffffff', fontFamily: "'Newsreader', serif" }}>Building the hardware stack for UAV and robotics systems</p>
            </motion.div>
            <motion.div 
              className="tess-glass-card"
              initial={{ opacity: 0, scale: 0.95, y: 30 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
            >
              <h4 style={{ color: 'rgba(255,255,255,0.4)', fontSize: '1rem', letterSpacing: '0.2em', textTransform: 'uppercase', marginBottom: '0.5rem' }}>02</h4>
              <p style={{ fontSize: '1.5rem', color: '#ffffff', fontFamily: "'Newsreader', serif" }}>Developing embedded subsystems for autonomous machines</p>
            </motion.div>
            <motion.div 
              className="tess-glass-card"
              initial={{ opacity: 0, scale: 0.95, y: 30 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.3 }}
            >
              <h4 style={{ color: 'rgba(255,255,255,0.4)', fontSize: '1rem', letterSpacing: '0.2em', textTransform: 'uppercase', marginBottom: '0.5rem' }}>03</h4>
              <p style={{ fontSize: '1.5rem', color: '#ffffff', fontFamily: "'Newsreader', serif" }}>Leveraging hardware technology in the service and growth of Bharat</p>
            </motion.div>
          </div>
        </section>

        <section className="tess-section tess-container">
          <motion.h2 
            className="tess-section-title"
            {...fadeUpConfig}
          >
            The Vanguard
          </motion.h2>

          <div className="tess-grid">
            {idolDetails.map((idol, idx) => (
              <div key={idol.name} className={`tess-glass-row ${idx % 2 === 1 ? 'reverse' : ''}`}>
                
                <motion.div 
                  className="tess-glass-card"
                  initial={{ opacity: 0, x: idx % 2 === 1 ? 50 : -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
                >
                  <span className="tess-card-role">{idol.title}</span>
                  <h3 className="tess-card-title">{idol.name}</h3>
                  <p className="tess-card-desc">{idol.desc}</p>
                  <blockquote className="tess-card-quote">{idol.quote}</blockquote>
                  
                  <div className="tess-artifact">
                    <span className="tess-artifact-label">Contribution</span>
                    <h4 className="tess-artifact-name">{idol.relic.name}</h4>
                    <p className="tess-artifact-desc">{idol.relic.desc}</p>
                  </div>
                </motion.div>

                <motion.div 
                  className="tess-image-panel"
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
                >
                  <img src={`${import.meta.env.BASE_URL}${idol.image.startsWith('/') ? idol.image.slice(1) : idol.image}`} alt={idol.name} />
                </motion.div>

              </div>
            ))}
          </div>
        </section>
        
        <section className="tess-section tess-container" style={{ paddingBottom: '8rem', textAlign: 'center' }}>
          <motion.h2 
            className="tess-title"
            style={{ fontSize: 'clamp(2rem, 5vw, 4rem)' }}
            {...fadeUpConfig}
          >
            "They conquered the theories.<br/>We are conquering the skies."
          </motion.h2>
        </section>
      </div>
    </div>
  );
}