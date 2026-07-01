import React, { useState, useEffect } from 'react';
import './Home.css';
import { Link } from 'react-router-dom';

export default function Home() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      const x = (e.clientX / window.innerWidth - 0.5) * 20; // max 20px movement
      const y = (e.clientY / window.innerHeight - 0.5) * 20;
      setMousePos({ x, y });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div className="page-wrapper">
      <section className="hero">
        <div className="hero-video-bg">
          <video autoPlay loop muted playsInline className="hero-video" title="Vihang Club background video showing drones in flight" aria-hidden="true">
            <source src={`${import.meta.env.BASE_URL}video/hero page video.mp4`} type="video/mp4" />
          </video>
        </div>

        <div className="container hero-content">

          <h1 className="hero-title fade-up" style={{ animationDelay: '0.2s' }}>
            <span className="fade-w">W</span>HERE IDEAS<br/>
            <span className="accent">TAKE FLIGHT</span>
          </h1>
          <p className="hero-desc fade-up" style={{ animationDelay: '0.3s' }}>
            Vihang Club pioneers advanced UAV research and development. 
            We build the next generation of autonomous aerial systems at SSGMCE, Shegaon.
          </p>
          <div className="hero-btns fade-up" style={{ animationDelay: '0.4s' }}>
            <Link to="/projects" className="btn-solid">EXPLORE PROJECTS</Link>
            <Link to="/about" className="btn-outline">MISSION LOG</Link>
          </div>


        </div>
      </section>

      <section className="bento-section">
        <div className="container">
          <div className="bento-grid">
            
            <div className="bento-card col-span-2 slide-up" style={{ animationDelay: '0.1s' }}>
              <div className="bento-content">
                <span className="bento-label">OPERATIONS</span>
                <h3 className="bento-title">23+ IDEAS MATERIALIZED</h3>
                <p className="bento-desc">
                  From custom flight controllers to hybrid solar-powered UAVs, our systems are built to solve complex real-world challenges in hostile environments.
                </p>
                <Link to="/projects" className="bento-link">VIEW SYSTEMS &rarr;</Link>
              </div>
              <div className="bento-bg pattern-dots"></div>
              <div className="corner tl"></div><div className="corner tr"></div>
              <div className="corner bl"></div><div className="corner br"></div>
            </div>

            <div className="bento-card slide-up" style={{ animationDelay: '0.2s' }}>
              <div className="bento-content">
                <span className="bento-label">PERSONNEL</span>
                <h3 className="bento-title">34+ INNOVATORS</h3>
                <p className="bento-desc">
                  A highly technical operative team pushing the boundaries of flight.
                </p>
                <Link to="/team" className="bento-link">MEET THE TEAM &rarr;</Link>
              </div>
              <div className="corner tl"></div><div className="corner tr"></div>
              <div className="corner bl"></div><div className="corner br"></div>
            </div>

            <div className="bento-card slide-up" style={{ animationDelay: '0.3s' }}>
              <div className="bento-content">
                <span className="bento-label">INTELLECTUAL PROPERTY</span>
                <h3 className="bento-title">PATENTS & IPR</h3>
                <p className="bento-desc">
                  Securing our innovations through rigorous documentation and patent filings.
                </p>
                <Link to="/documentation" className="bento-link">ACCESS DOCS &rarr;</Link>
              </div>
              <div className="corner tl"></div><div className="corner tr"></div>
              <div className="corner bl"></div><div className="corner br"></div>
            </div>

            <div className="bento-card col-span-2 slide-up" style={{ animationDelay: '0.4s' }}>
              <div className="bento-content">
                <span className="bento-label">FIELD TESTING</span>
                <h3 className="bento-title">AERIAL INSIGHT</h3>
                <p className="bento-desc">
                  Rigorous testing environments ensure our systems perform in extreme conditions without degradation.
                </p>
                <Link to="/gallery" className="bento-link">VIEW ARCHIVE &rarr;</Link>
              </div>
              <div className="bento-bg pattern-lines"></div>
              <div className="corner tl"></div><div className="corner tr"></div>
              <div className="corner bl"></div><div className="corner br"></div>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}
