import React from 'react';

export default function AvinyaStitch() {
  return (
    <div style={{ width: '100%', height: '100vh', overflow: 'hidden' }}>
      <iframe 
        src={`${import.meta.env.BASE_URL}stitch/avinya_stitch.html`} 
        style={{ width: '100%', height: '100%', border: 'none' }}
        title="Avinya Stitch Preview"
      />
    </div>
  );
}
