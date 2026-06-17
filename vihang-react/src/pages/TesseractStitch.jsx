import React from 'react';

export default function TesseractStitch() {
  return (
    <div style={{ width: '100%', height: '100vh', overflow: 'hidden' }}>
      <iframe 
        src={`${import.meta.env.BASE_URL}stitch/tesseract_stitch.html`} 
        style={{ width: '100%', height: '100%', border: 'none' }}
        title="Tesseract Stitch Preview"
      />
    </div>
  );
}
