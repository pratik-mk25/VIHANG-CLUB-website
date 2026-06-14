import React from 'react';
import './Contact.css';

export default function Contact() {
  const handleSend = (e) => {
    e.preventDefault();
    const msg = document.getElementById('formMsg');
    msg.style.display = 'block';
    setTimeout(() => {
      msg.style.display = 'none';
    }, 4000);
  };

  return (
    <div className="page-wrapper" style={{ paddingTop: '120px' }}>
      <div className="container">
        
        <div className="fade-in visible">
          <p className="section-label">08 / CONTACT</p>
          <h2 className="section-title">GET IN <span className="accent">TOUCH</span></h2>
        </div>

        <div className="contact-grid fade-in visible">
          {/* Info Side */}
          <div>
            <p style={{
              fontFamily: 'var(--font-body)', 
              fontSize: '1rem', 
              fontWeight: 300, 
              color: 'var(--text-muted)', 
              lineHeight: 1.8, 
              marginBottom: '2.5rem'
            }}>
              HAVE A PROJECT IDEA, COLLABORATION PROPOSAL, OR JUST WANT TO KNOW MORE ABOUT VIHANG CLUB? WE'D LOVE TO HEAR FROM YOU.
            </p>
            
            <div className="contact-item">
              <span className="contact-label">LOC</span>
              <span className="contact-text">SSGMCE, SHEGAON<br/>MAHARASHTRA, INDIA 444203</span>
            </div>
            
            <div className="contact-item">
              <span className="contact-label">EML</span>
              <span className="contact-text">
                <a href="mailto:vihangdroneclub@gmail.com">vihangdroneclub@gmail.com</a>
              </span>
            </div>
            
            <div className="contact-item">
              <span className="contact-label">WEB</span>
              <span className="contact-text">
                <a href="https://www.ssgmce.ac.in/vihang" target="_blank" rel="noreferrer">WWW.SSGMCE.AC.IN/VIHANG</a>
              </span>
            </div>
            
            <div className="contact-item">
              <span className="contact-label">IG</span>
              <span className="contact-text">
                <a href="https://instagram.com/vihang_ssgmce" target="_blank" rel="noreferrer">@VIHANG_SSGMCE</a>
              </span>
            </div>
            
            <div className="contact-item">
              <span className="contact-label">LI</span>
              <span className="contact-text">
                <a href="https://linkedin.com/company/vihang-club" target="_blank" rel="noreferrer">LINKEDIN.COM/COMPANY/VIHANG-CLUB</a>
              </span>
            </div>
            
            <div className="contact-item">
              <span className="contact-label">YT</span>
              <span className="contact-text">
                <a href="https://youtube.com/@vihangclub" target="_blank" rel="noreferrer">YOUTUBE.COM/@VIHANGCLUB</a>
              </span>
            </div>
            
            <div style={{ marginTop: '2rem', display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
              <a href="mailto:vihangdroneclub@gmail.com" className="btn-secondary">SEND EMAIL</a>
            </div>
          </div>

          {/* Form Side */}
          <div style={{ border: '1px solid var(--border)', background: 'var(--bg3)', padding: '2.5rem' }}>

            
            <form onSubmit={handleSend} style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              <input type="text" placeholder="YOUR NAME" required />
              <input type="email" placeholder="YOUR EMAIL" required />
              <input type="text" placeholder="SUBJECT" required />
              <textarea placeholder="YOUR MESSAGE" rows="5" required></textarea>
              <button type="submit" className="btn-primary" style={{ width: 'fit-content', marginTop: '1rem' }}>
                SEND →
              </button>
            </form>
            
            <p id="formMsg" style={{
              fontFamily: 'var(--font-mono)', 
              fontSize: '0.6rem', 
              color: 'var(--gold)', 
              marginTop: '1rem', 
              display: 'none'
            }}>
              MESSAGE SENT SUCCESSFULLY ✓
            </p>
          </div>
        </div>

      </div>
    </div>
  );
}
