import React from 'react';
import './Contact.css';

export default function Contact() {
  const handleSend = async (e) => {
    e.preventDefault();
    
    const formData = new FormData(e.target);
    formData.append("access_key", "f25e848e-a3f8-4b93-9e3e-7e2dff0ecb06");

    const msg = document.getElementById('formMsg');
    
    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });
      const result = await response.json();
      
      if (result.success) {
        msg.style.display = 'block';
        msg.innerHTML = '<span class="accent" style="color: #00ff88; margin-right: 5px">✓</span> TRANSMISSION SUCCESSFUL. STAND BY FOR RESPONSE.';
        msg.style.borderColor = '#00ff88';
        msg.style.color = 'var(--text-muted)';
        e.target.reset();
        setTimeout(() => {
          msg.style.display = 'none';
        }, 4000);
      } else {
        msg.style.display = 'block';
        msg.innerHTML = '<span class="accent" style="color: #ff3333; margin-right: 5px">X</span> TRANSMISSION FAILED. PLEASE TRY AGAIN.';
        msg.style.borderColor = '#ff3333';
        msg.style.color = '#ff3333';
      }
    } catch (error) {
        msg.style.display = 'block';
        msg.innerHTML = '<span class="accent" style="color: #ff3333; margin-right: 5px">X</span> CONNECTION ERROR. PLEASE TRY AGAIN.';
        msg.style.borderColor = '#ff3333';
        msg.style.color = '#ff3333';
    }
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
                <label htmlFor="name">IDENTIFICATION</label>
                <input type="text" id="name" name="name" placeholder="YOUR NAME" required aria-required="true" />
              </div>
              <div className="input-group">
                <label htmlFor="email">RETURN ADDRESS</label>
                <input type="email" id="email" name="email" placeholder="YOUR EMAIL" required aria-required="true" />
              </div>
              <div className="input-group">
                <label htmlFor="subject">CLASSIFICATION</label>
                <input type="text" id="subject" name="subject" placeholder="SUBJECT" required aria-required="true" />
              </div>
              <div className="input-group">
                <label htmlFor="message">TRANSMISSION DATA</label>
                <textarea id="message" name="message" placeholder="ENTER MESSAGE..." rows="6" required aria-required="true"></textarea>
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
