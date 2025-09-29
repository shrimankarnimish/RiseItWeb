import React from 'react';

const RiseITTextAnimation = () => {
  return (
    <div className="w-full h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black flex items-center justify-center overflow-hidden">
      <svg
        width="100%"
        height="100%"
        viewBox="0 0 800 300"
        className="w-full max-w-4xl h-auto"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <style>
            {`
              .letter-path {
                stroke-dasharray: 1000;
                stroke-dashoffset: 1000;
                animation: drawLetter 1.5s ease-in-out forwards;
                fill: none;
                stroke-linecap: round;
                stroke-linejoin: round;
              }
              
              .letter-r { animation-delay: 0s; }
              .letter-i { animation-delay: 0.3s; }
              .letter-s { animation-delay: 0.6s; }
              .letter-e { animation-delay: 0.9s; }
              .letter-i2 { animation-delay: 1.2s; }
              .letter-t { animation-delay: 1.5s; }
              
              .glow-effect {
                filter: drop-shadow(0 0 10px currentColor);
              }
              
              @keyframes drawLetter {
                to {
                  stroke-dashoffset: 0;
                }
              }
              
              .fill-animation {
                fill: transparent;
                animation: fillLetter 0.8s ease-in-out forwards;
              }
              
              .fill-r { animation-delay: 1.5s; }
              .fill-i { animation-delay: 1.8s; }
              .fill-s { animation-delay: 2.1s; }
              .fill-e { animation-delay: 2.4s; }
              .fill-i2 { animation-delay: 2.7s; }
              .fill-t { animation-delay: 3s; }
              
              @keyframes fillLetter {
                to {
                  fill: currentColor;
                }
              }
              
              .subtitle-fade {
                opacity: 0;
                animation: fadeInUp 1s ease-out 3.5s forwards;
              }
              
              @keyframes fadeInUp {
                from {
                  opacity: 0;
                  transform: translateY(20px);
                }
                to {
                  opacity: 1;
                  transform: translateY(0);
                }
              }
            `}
          </style>
          
          {/* Gradient definitions */}
          <linearGradient id="textGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#60a5fa" />
            <stop offset="25%" stopColor="#3b82f6" />
            <stop offset="50%" stopColor="#2563eb" />
            <stop offset="75%" stopColor="#1d4ed8" />
            <stop offset="100%" stopColor="#1e40af" />
          </linearGradient>
          
          <linearGradient id="accentGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#f59e0b" />
            <stop offset="50%" stopColor="#f97316" />
            <stop offset="100%" stopColor="#ea580c" />
          </linearGradient>
        </defs>

        {/* Letter R */}
        <g className="glow-effect" style={{ color: '#3b82f6' }}>
          <path
            d="M50,80 L50,220 M50,80 L100,80 Q130,80 130,110 Q130,140 100,140 L50,140 M85,140 L130,220"
            stroke="url(#textGradient)"
            strokeWidth="8"
            className="letter-path letter-r"
          />
          <path
            d="M50,80 L100,80 Q130,80 130,110 Q130,140 100,140 L50,140 L50,220 Z"
            className="fill-animation fill-r"
            style={{ color: 'rgba(59, 130, 246, 0.1)' }}
          />
        </g>

        {/* Letter I */}
        <g className="glow-effect" style={{ color: '#2563eb' }}>
          <path
            d="M170,80 L220,80 M195,80 L195,220 M170,220 L220,220"
            stroke="url(#textGradient)"
            strokeWidth="8"
            className="letter-path letter-i"
          />
          <rect
            x="170"
            y="80"
            width="50"
            height="140"
            className="fill-animation fill-i"
            style={{ color: 'rgba(37, 99, 235, 0.1)' }}
          />
        </g>

        {/* Letter S */}
        <g className="glow-effect" style={{ color: '#1d4ed8' }}>
          <path
            d="M320,220 Q260,220 260,190 Q260,160 290,150 Q320,140 320,120 Q320,80 280,80 Q240,80 240,110"
            stroke="url(#textGradient)"
            strokeWidth="8"
            className="letter-path letter-s"
          />
          <path
            d="M320,220 Q260,220 260,190 Q260,160 290,150 Q320,140 320,120 Q320,80 280,80 Q240,80 240,110"
            className="fill-animation fill-s"
            style={{ color: 'rgba(29, 78, 216, 0.1)' }}
            strokeWidth="15"
            stroke="rgba(29, 78, 216, 0.1)"
          />
        </g>

        {/* Letter E */}
        <g className="glow-effect" style={{ color: '#1e40af' }}>
          <path
            d="M380,80 L380,220 M380,80 L450,80 M380,150 L430,150 M380,220 L450,220"
            stroke="url(#textGradient)"
            strokeWidth="8"
            className="letter-path letter-e"
          />
          <path
            d="M380,80 L450,80 L450,90 L390,90 L390,145 L430,145 L430,155 L390,155 L390,210 L450,210 L450,220 L380,220 Z"
            className="fill-animation fill-e"
            style={{ color: 'rgba(30, 64, 175, 0.1)' }}
          />
        </g>

        {/* Letter I (second) */}
        <g className="glow-effect" style={{ color: '#f59e0b' }}>
          <path
            d="M490,80 L540,80 M515,80 L515,220 M490,220 L540,220"
            stroke="url(#accentGradient)"
            strokeWidth="8"
            className="letter-path letter-i2"
          />
          <rect
            x="490"
            y="80"
            width="50"
            height="140"
            className="fill-animation fill-i2"
            style={{ color: 'rgba(245, 158, 11, 0.1)' }}
          />
        </g>

        {/* Letter T */}
        <g className="glow-effect" style={{ color: '#f97316' }}>
          <path
            d="M580,80 L720,80 M650,80 L650,220"
            stroke="url(#accentGradient)"
            strokeWidth="8"
            className="letter-path letter-t"
          />
          <path
            d="M580,80 L720,80 L720,90 L660,90 L660,220 L640,220 L640,90 L580,90 Z"
            className="fill-animation fill-t"
            style={{ color: 'rgba(249, 115, 22, 0.1)' }}
          />
        </g>

        {/* Subtitle */}
        <text
          x="400"
          y="270"
          textAnchor="middle"
          className="subtitle-fade"
          style={{ 
            font: 'bold 24px system-ui',
            fill: '#9ca3af'
          }}
        >
          Rise to Innovation
        </text>

        {/* Decorative underline */}
        <path
          d="M50,240 Q400,260 750,240"
          stroke="url(#accentGradient)"
          strokeWidth="3"
          fill="none"
          strokeLinecap="round"
          style={{
            strokeDasharray: '700',
            strokeDashoffset: '700',
            animation: 'drawLetter 2s ease-in-out 4s forwards'
          }}
        />

        {/* Floating particles/dots */}
        <circle cx="100" cy="50" r="3" fill="#60a5fa" opacity="0" style={{ animation: 'fadeInUp 1s ease-out 5s forwards' }} />
        <circle cx="300" cy="40" r="2" fill="#f59e0b" opacity="0" style={{ animation: 'fadeInUp 1s ease-out 5.2s forwards' }} />
        <circle cx="500" cy="45" r="2.5" fill="#3b82f6" opacity="0" style={{ animation: 'fadeInUp 1s ease-out 5.4s forwards' }} />
        <circle cx="650" cy="35" r="2" fill="#f97316" opacity="0" style={{ animation: 'fadeInUp 1s ease-out 5.6s forwards' }} />
      </svg>
    </div>
  );
};

export default RiseITTextAnimation;