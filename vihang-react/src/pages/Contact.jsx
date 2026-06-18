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
          <div className="contact-info-panel">
            <h3 className="contact-headline">INITIATE<br/>COMMUNICATION</h3>
            <p className="contact-desc">
              HAVE A PROJECT IDEA, COLLABORATION PROPOSAL, OR JUST WANT TO KNOW MORE ABOUT VIHANG CLUB? WE'D LOVE TO HEAR FROM YOU.
            </p>
            
            <div className="contact-list">
              <div className="contact-item">
                <span className="contact-label">// LOC</span>
                <span className="contact-text">SSGMCE, SHEGAON<br/>MAHARASHTRA, INDIA 444203</span>
              </div>
              <div className="contact-item">
                <span className="contact-label">// EML</span>
                <span className="contact-text">
                  <a href="mailto:vihangdroneclub@gmail.com" className="hover-link">VIHANGDRONECLUB@GMAIL.COM</a>
                </span>
              </div>
              <div className="contact-item">
                <span className="contact-label">// WEB</span>
                <span className="contact-text">
                  <a href="https://www.ssgmce.ac.in/vihang" target="_blank" rel="noreferrer" className="hover-link">WWW.SSGMCE.AC.IN/VIHANG</a>
                </span>
              </div>
            </div>

            <div className="social-grid">
              <a href="https://instagram.com/vihang_ssgmce" target="_blank" rel="noreferrer" className="social-block">
                <span className="social-lbl">IG</span>
                <span className="social-id">@VIHANG_SSGMCE</span>
              </a>
              <a href="https://linkedin.com/company/vihang-club" target="_blank" rel="noreferrer" className="social-block">
                <span className="social-lbl">LI</span>
                <span className="social-id">/VIHANG-CLUB</span>
              </a>
              <a href="https://youtube.com/@vihangclub" target="_blank" rel="noreferrer" className="social-block">
                <span className="social-lbl">YT</span>
                <span className="social-id">@VIHANGCLUB</span>
              </a>
            </div>
          </div>

          {/* Form Side */}
          <div className="contact-form-panel">
            <div className="form-header">
              <span className="blink-dot"></span>
              SECURE TRANSMISSION CHANNEL ONLINE
            </div>
            
            <form onSubmit={handleSend} className="contact-form">
              <div className="input-group">
                <label>IDENTIFICATION</label>
                <input type="text" placeholder="YOUR NAME" required />
              </div>
              <div className="input-group">
                <label>RETURN ADDRESS</label>
                <input type="email" placeholder="YOUR EMAIL" required />
              </div>
              <div className="input-group">
                <label>CLASSIFICATION</label>
                <input type="text" placeholder="SUBJECT" required />
              </div>
              <div className="input-group">
                <label>TRANSMISSION DATA</label>
                <textarea placeholder="ENTER MESSAGE..." rows="6" required></textarea>
              </div>
              <button type="submit" className="btn-submit">
                [ TRANSMIT DATA ]
              </button>
            </form>
            
            <p id="formMsg" className="form-msg">
              <span className="accent" style={{ color: '#00ff88', marginRight: '5px' }}>✓</span> 
              TRANSMISSION SUCCESSFUL. STAND BY FOR RESPONSE.
            </p>
          </div>
        </div>

      </div>
    </div>
  );
}
