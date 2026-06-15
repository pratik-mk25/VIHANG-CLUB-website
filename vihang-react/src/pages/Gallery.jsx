import React, { useState } from 'react';
import './Gallery.css';
import { galleryData as initialData } from '../data/galleryData';

import {
  DndContext,
  closestCenter,
  KeyboardSensor,
  PointerSensor,
  useSensor,
  useSensors,
} from '@dnd-kit/core';
import {
  arrayMove,
  SortableContext,
  sortableKeyboardCoordinates,
  rectSortingStrategy,
  useSortable
} from '@dnd-kit/sortable';
import {CSS} from '@dnd-kit/utilities';

function SortableGalleryItem({ item, idx, openLightbox }) {
  const {
    attributes,
    listeners,
    setNodeRef,
    transform,
    transition,
    isDragging,
  } = useSortable({ id: item.id });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
  };

  return (
    <div 
      ref={setNodeRef} 
      style={style} 
      className={`gallery-item masonry-item ${isDragging ? 'is-dragging' : ''}`} 
    >
      <div {...attributes} {...listeners} style={{ outline: 'none' }} onClick={() => openLightbox(idx)}>
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
    </div>
  );
}

export default function Gallery() {
  const [items, setItems] = useState(() => initialData.map((d, i) => ({...d, id: `img-${i}`})));
  const [filter, setFilter] = useState('all');
  const [lightboxIndex, setLightboxIndex] = useState(null);

  const filtered = filter === 'all' ? items : items.filter(g => g.cat.toLowerCase() === filter);

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

  const sensors = useSensors(
    useSensor(PointerSensor, {
      activationConstraint: {
        distance: 5,
      },
    }),
    useSensor(KeyboardSensor, {
      coordinateGetter: sortableKeyboardCoordinates,
    })
  );

  const handleDragEnd = (event) => {
    const {active, over} = event;
    
    if (over && active.id !== over.id) {
      setItems((items) => {
        const oldIndex = items.findIndex((item) => item.id === active.id);
        const newIndex = items.findIndex((item) => item.id === over.id);
        return arrayMove(items, oldIndex, newIndex);
      });
    }
  };

  const handleExport = () => {
    const exportData = items.map(({id, ...rest}) => rest);
    const code = `// GALLERY DATA
// Fill out the title and category for each image.
// Categories: 'COMPETITION', 'WORKSHOP', 'TESTING', 'EVENT', 'PROJECT'

export const galleryData = ${JSON.stringify(exportData, null, 2)};`;
    navigator.clipboard.writeText(code);
    alert('Gallery order copied to clipboard! Paste it into src/data/galleryData.js');
  };

  return (
    <div className="page-wrapper" style={{ paddingTop: '120px' }}>
      <div className="container">
        <div className="export-panel">
          <div>
            <p className="section-label" style={{ marginBottom: 0 }}>07 / IN THE FIELD</p>
            <h2 className="section-title" style={{ fontSize: '2rem' }}>GALLERY <span className="accent">KANBAN</span></h2>
            <p style={{ color: 'var(--text-dim)', fontSize: '0.9rem', marginTop: '0.5rem' }}>Drag and drop polaroids to reorder them.</p>
          </div>
          <button className="export-btn" onClick={handleExport}>EXPORT NEW ORDER</button>
        </div>
        
        <div className="gallery-filter">
          {['all', 'competition', 'workshop', 'project', 'event'].map(c => (
            <button 
              key={c}
              className={`gallery-btn ${filter === c ? 'active' : ''}`}
              onClick={() => setFilter(c)}
            >
              {c.toUpperCase()}
            </button>
          ))}
        </div>

        {filter === 'all' ? (
          <DndContext 
            sensors={sensors}
            collisionDetection={closestCenter}
            onDragEnd={handleDragEnd}
          >
            <SortableContext 
              items={filtered.map(i => i.id)}
              strategy={rectSortingStrategy}
            >
              <div className="gallery-grid">
                {filtered.map((item, idx) => (
                  <SortableGalleryItem key={item.id} item={item} idx={idx} openLightbox={openLightbox} />
                ))}
              </div>
            </SortableContext>
          </DndContext>
        ) : (
          <div className="gallery-grid">
            {filtered.map((item, idx) => (
              <div className="gallery-item masonry-item" key={item.id} onClick={() => openLightbox(idx)}>
                {item.img ? (
                  <div className="gallery-thumb">
                    <img src={`${import.meta.env.BASE_URL}${item.img.startsWith('/') ? item.img.slice(1) : item.img}`} alt={item.title} loading="lazy" style={{width: '100%', height: 'auto', display: 'block'}} />
                  </div>
                ) : null}
                <div className="gallery-overlay masonry-overlay">
                  <span className="gallery-cat">{item.cat}</span>
                  <span className="gallery-title">{item.title}</span>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {lightboxIndex !== null && filtered[lightboxIndex] && (
        <div className="lightbox-overlay" onClick={closeLightbox}>
          <button className="lightbox-close" onClick={closeLightbox}>&times;</button>
          <button className="lightbox-prev" onClick={prevImage}>&#10094;</button>
          
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
          
          <button className="lightbox-next" onClick={nextImage}>&#10095;</button>
        </div>
      )}
    </div>
  );
}
