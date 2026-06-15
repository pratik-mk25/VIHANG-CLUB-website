
import React, { useState, useEffect } from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import UavSim from './components/UavSim';
import FloatingDrone from './components/FloatingDrone';
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import Team from './pages/Team';
import Gallery from './pages/Gallery';
import Documentation from './pages/Documentation';
import Achievements from './pages/Achievements';
import Internships from './pages/Internships';
import Contact from './pages/Contact';
import Avinya from './pages/Avinya';
import Tesseract from './pages/Tesseract';

export default function App() {
  const [showEasterEgg, setShowEasterEgg] = useState(false);

  useEffect(() => {
    let keyBuffer = '';
    const handleKeyDown = (e) => {
      if (!e.key) return;
      keyBuffer += e.key.toUpperCase();
      if (keyBuffer.length > 5) keyBuffer = keyBuffer.slice(-5);
      
      if (keyBuffer.includes('UAV')) {
        setShowEasterEgg(true);
        keyBuffer = '';
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <Router>
      <div className="app-container">
        {showEasterEgg && <UavSim onClose={() => setShowEasterEgg(false)} />}
        {!showEasterEgg && <FloatingDrone onClick={() => setShowEasterEgg(true)} />}
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/team" element={<Team />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/documentation" element={<Documentation />} />
          <Route path="/achievements" element={<Achievements />} />
          <Route path="/internships" element={<Internships />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/avinya" element={<Avinya />} />
          <Route path="/tesseract" element={<Tesseract />} />
          <Route path="*" element={<Home />} />
        </Routes>
        <Footer onEasterEggTrigger={() => setShowEasterEgg(true)} />
      </div>
    </Router>
  );
}
