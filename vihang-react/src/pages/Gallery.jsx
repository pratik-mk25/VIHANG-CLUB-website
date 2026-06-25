import React, { useState } from 'react';
import './Gallery.css';
import { galleryData } from '../data/galleryData';

export default function Gallery() {
  const [filter, setFilter] = useState('all');
  const [lightboxIndex, setLightboxIndex] = useState(null);

  const filtered = filter === 'all' ? galleryData : galleryData.filter(g => g.cat.toLowerCase() === filter);

  const openLightbox = (index) => setLightboxIndex(index);
  const closeLightbox = () => setLightboxIndex(null);
  
  const prevImage = (e) => {
    e.stopPropagation();
    setLightboxIndex((prev) => (prev === 0 ? filtered.length - 1 : prev - 1));
  };
  
  const nextImage = (e) => {
    e.stopPropagation();
    setLightboxIndex((prev) => (prev === filtered.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="page-wrapper" style={{ paddingTop: '120px' }}>
      <div className="container">
        <p className="section-label">07 / IN THE FIELD</p>
        <div className="section-header-row">
          <h2 className="section-title">IN THE<br/><span className="accent">FIELD</span></h2>
        </div>
        
        <div className="gallery-filter" style={{ marginTop: '3rem' }}>
          {['all', 'competition', 'workshop', 'project', 'event'].map(c => (
            <button 
              key={c}
              className={`gallery-btn ${filter === c ? 'active' : ''}`}
              aria-pressed={filter === c}
              onClick={() => setFilter(c)}
            >
              {c.toUpperCase()}
            </button>
          ))}
        </div>

        <div className="gallery-grid">
          {filtered.map((item, idx) => (
            <div className="gallery-item masonry-item" key={idx} onClick={() => openLightbox(idx)}>
              {item.img ? (
                <div className="gallery-thumb">
                  <img src={`${import.meta.env.BASE_URL}${item.img.startsWith('/') ? item.img.slice(1) : item.img}`} alt={item.title} loading="lazy" style={{width: '100%', height: 'auto', display: 'block'}} />
                </div>
              ) : (
                <div className="gallery-thumb missing-img-card" style={{ height: '250px' }}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="missing-icon" style={{marginBottom: '1rem'}}>
                    <rect x="3" y="8" width="18" height="10" rx="2" ry="2" />
                    <line x1="7" y1="2" x2="7" y2="8" />
                    <line x1="17" y1="2" x2="17" y2="8" />
                    <circle cx="7" cy="3" r="1" />
                    <circle cx="17" cy="3" r="1" />
                    <path d="M8 13h8" />
                  </svg>
                  <span className="missing-text" style={{fontFamily: 'var(--font-mono)', fontSize: '0.75rem', letterSpacing: '0.2em', color: 'var(--text-dim)'}}>VISIT CLUB TO SEE</span>
                </div>
              )}
              <div className="gallery-overlay masonry-overlay">
                <span className="gallery-cat">{item.cat}</span>
                <span className="gallery-title">{item.title}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {lightboxIndex !== null && filtered[lightboxIndex] && (
        <div className="lightbox-overlay" onClick={closeLightbox}>
          <button className="lightbox-close" aria-label="Close lightbox" onClick={closeLightbox}>&times;</button>
          <button className="lightbox-prev" aria-label="Previous image" onClick={prevImage}>&#10094;</button>
          
          <div className="lightbox-content" onClick={(e) => e.stopPropagation()}>
            <img 
              src={`${import.meta.env.BASE_URL}${filtered[lightboxIndex].img.startsWith('/') ? filtered[lightboxIndex].img.slice(1) : filtered[lightboxIndex].img}`} 
              alt={filtered[lightboxIndex].title} 
            />
            <div className="lightbox-caption">
              <span className="gallery-cat">{filtered[lightboxIndex].cat}</span>
              <h3>{filtered[lightboxIndex].title}</h3>
            </div>
          </div>
          
          <button className="lightbox-next" aria-label="Next image" onClick={nextImage}>&#10095;</button>
        </div>
      )}
    </div>
  );
}
