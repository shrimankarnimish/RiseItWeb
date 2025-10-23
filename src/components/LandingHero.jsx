'use client'

import React, { useEffect, useRef } from 'react';

const cardStyle = {
  width: '120px',
  height: '240px',
  backgroundColor: '#3bcf91',
  borderRadius: '20px',
  boxShadow: '0 10px 30px rgba(0,0,0,0.2)',
  position: 'absolute',
  transformStyle: 'preserve-3d',
  transition: 'all 1s ease-in-out',
};

export default function LandingHero() {
  const containerRef = useRef();

  useEffect(() => {
    const cards = containerRef.current.querySelectorAll('.card');
    cards.forEach((card, i) => {
      // delay staggered rotation
      setTimeout(() => {
        card.style.transform = card.dataset.transform;
      }, i * 200);
    });
  }, []);

  return (
    <div
      style={{
        width: '100vw',
        height: '100vh',
        background: 'linear-gradient(135deg, #2de2c9, #0ca678)',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      <div ref={containerRef} style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }}>
        {/* Top Left */}
        <div
          className="card"
          data-transform="translate(-150px, -150px) rotateZ(-45deg)"
          style={{
            ...cardStyle,
            transform: 'scale(0)',
          }}
        />
        {/* Top Right */}
        <div
          className="card"
          data-transform="translate(150px, -150px) rotateZ(45deg)"
          style={{
            ...cardStyle,
            transform: 'scale(0)',
          }}
        />
        {/* Bottom Left */}
        <div
          className="card"
          data-transform="translate(-150px, 150px) rotateZ(45deg)"
          style={{
            ...cardStyle,
            transform: 'scale(0)',
          }}
        />
        {/* Bottom Right */}
        <div
          className="card"
          data-transform="translate(150px, 150px) rotateZ(-45deg)"
          style={{
            ...cardStyle,
            transform: 'scale(0)',
          }}
        />
      </div>

      <h1
        style={{
          color: '#fff',
          fontSize: '2rem',
          position: 'absolute',
          top: '10%',
          left: '50%',
          transform: 'translateX(-50%)',
          fontWeight: 600,
        }}
      >
        Advanced Event Solution
      </h1>
    </div>
  );
}
