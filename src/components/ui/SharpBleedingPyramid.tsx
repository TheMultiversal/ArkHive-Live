'use client';

import { useEffect, useState, useRef } from 'react';

interface BloodDrop {
  id: number;
  x: number;
  startY: number;
  size: number;
  speed: number;
  opacity: number;
}

interface BleedingPyramidLogoProps {
  size?: number;
  className?: string;
  showWords?: boolean;
}

const WORDS = [
  "LIES", "DEATH", "CONTROL", "POISON", "SILENCE", "PROFIT", 
  "DECEIT", "GREED", "FEAR", "COVER-UP", "CORRUPTION", "BETRAYAL"
];

export default function BleedingPyramidLogo({ 
  size = 60, 
  className = '',
  showWords = true 
}: BleedingPyramidLogoProps) {
  const [bloodDrops, setBloodDrops] = useState<BloodDrop[]>([]);
  const [currentWord, setCurrentWord] = useState<string | null>(null);
  const [wordPosition, setWordPosition] = useState({ x: 50, y: 100 });
  const dropIdRef = useRef(0);

  // Blood drops falling from tip
  useEffect(() => {
    const createDrop = () => {
      const newDrop: BloodDrop = {
        id: dropIdRef.current++,
        x: 50 + (Math.random() - 0.5) * 6,
        startY: 95,
        size: 2 + Math.random() * 2,
        speed: 1 + Math.random() * 0.5,
        opacity: 0.8 + Math.random() * 0.2,
      };
      setBloodDrops(prev => [...prev.slice(-12), newDrop]);
    };

    const interval = setInterval(createDrop, 500);
    return () => clearInterval(interval);
  }, []);

  // Show words periodically
  useEffect(() => {
    if (!showWords) return;

    const showWord = () => {
      const word = WORDS[Math.floor(Math.random() * WORDS.length)];
      const x = 20 + Math.random() * 60;
      setCurrentWord(word);
      setWordPosition({ x, y: 105 });

      setTimeout(() => setCurrentWord(null), 2500);
    };

    const interval = setInterval(showWord, 3500);
    setTimeout(showWord, 1500);

    return () => clearInterval(interval);
  }, [showWords]);

  return (
    <div 
      className={`relative ${className}`} 
      style={{ width: size, height: size * 1.2 }}
    >
      <svg
        viewBox="0 0 100 130"
        className="w-full h-full overflow-visible"
        style={{ filter: 'drop-shadow(0 2px 4px rgba(0,0,0,0.8))' }}
      >
        <defs>
          {/* Sharp blood gradient - no blur */}
          <linearGradient id="sharpBlood" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#ef4444" />
            <stop offset="40%" stopColor="#dc2626" />
            <stop offset="100%" stopColor="#7f1d1d" />
          </linearGradient>

          {/* Pyramid stone gradient */}
          <linearGradient id="stoneGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#2a2a2a" />
            <stop offset="50%" stopColor="#1a1a1a" />
            <stop offset="100%" stopColor="#0a0a0a" />
          </linearGradient>

          {/* Eye iris gradient */}
          <radialGradient id="irisGrad" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#ff3333" />
            <stop offset="50%" stopColor="#dc2626" />
            <stop offset="100%" stopColor="#991b1b" />
          </radialGradient>

          {/* Wet blood shine */}
          <linearGradient id="wetShine" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="rgba(255,255,255,0.4)" />
            <stop offset="50%" stopColor="rgba(255,255,255,0)" />
            <stop offset="100%" stopColor="rgba(255,255,255,0.1)" />
          </linearGradient>
        </defs>

        {/* Outer ring - dashed */}
        <circle
          cx="50"
          cy="50"
          r="45"
          fill="none"
          stroke="#7f1d1d"
          strokeWidth="0.5"
          strokeDasharray="3 3"
          opacity="0.4"
        />

        {/* INVERTED PYRAMID */}
        <g>
          {/* Main pyramid - sharp edges */}
          <polygon
            points="15,25 85,25 50,95"
            fill="url(#stoneGrad)"
            stroke="#dc2626"
            strokeWidth="1"
          />

          {/* Left face - darker */}
          <polygon
            points="15,25 50,25 50,95"
            fill="rgba(0,0,0,0.4)"
          />

          {/* Stone block lines - sharp */}
          <g stroke="#0a0a0a" strokeWidth="0.5">
            <line x1="22" y1="35" x2="78" y2="35" />
            <line x1="28" y1="45" x2="72" y2="45" />
            <line x1="34" y1="55" x2="66" y2="55" />
            <line x1="40" y1="65" x2="60" y2="65" />
            <line x1="45" y1="75" x2="55" y2="75" />
            <line x1="48" y1="85" x2="52" y2="85" />
          </g>

          {/* Edge highlights */}
          <line x1="15" y1="25" x2="50" y2="95" stroke="rgba(255,255,255,0.05)" strokeWidth="1" />
          <line x1="15" y1="25" x2="85" y2="25" stroke="rgba(255,255,255,0.1)" strokeWidth="1" />
        </g>

        {/* ALL-SEEING EYE */}
        <g>
          {/* Eye socket */}
          <ellipse cx="50" cy="42" rx="15" ry="10" fill="#0a0a0a" stroke="#dc2626" strokeWidth="1" />
          
          {/* Eye white */}
          <ellipse cx="50" cy="42" rx="13" ry="8" fill="#1a1a1a" />
          
          {/* Iris */}
          <circle cx="50" cy="42" r="6" fill="url(#irisGrad)" />
          
          {/* Pupil - sharp black */}
          <circle cx="50" cy="42" r="2.5" fill="#000" />
          
          {/* Eye shine - crisp */}
          <circle cx="52" cy="40" r="1.5" fill="#fff" opacity="0.8" />
          <circle cx="47" cy="43" r="0.8" fill="#fff" opacity="0.4" />

          {/* Eye rays */}
          {[0, 45, 90, 135, 180, 225, 270, 315].map((angle, i) => {
            const rad = (angle - 90) * Math.PI / 180;
            const x1 = 50 + Math.cos(rad) * 17;
            const y1 = 42 + Math.sin(rad) * 12;
            const x2 = 50 + Math.cos(rad) * 24;
            const y2 = 42 + Math.sin(rad) * 16;
            return (
              <line 
                key={i} 
                x1={x1} y1={y1} x2={x2} y2={y2} 
                stroke="#dc2626" 
                strokeWidth="0.5" 
                opacity="0.5"
              />
            );
          })}
        </g>

        {/* REALISTIC BLOOD - Sharp, not foggy */}
        <g>
          {/* Blood pooling at tip - sharp edge */}
          <ellipse cx="50" cy="95" rx="6" ry="2" fill="#991b1b" />
          <ellipse cx="50" cy="95" rx="4" ry="1.5" fill="#dc2626" />
          
          {/* Wet shine on pool */}
          <ellipse cx="51" cy="94.5" rx="2" ry="0.8" fill="url(#wetShine)" />

          {/* Blood streaks down pyramid - sharp lines */}
          <path d="M50 60 L50 95" stroke="#991b1b" strokeWidth="3" strokeLinecap="round" />
          <path d="M50 65 L50 95" stroke="#dc2626" strokeWidth="1.5" strokeLinecap="round" />
          <path d="M48 70 Q47 80 48 90" stroke="#7f1d1d" strokeWidth="1" fill="none" strokeLinecap="round" />
          <path d="M52 68 Q53 78 52 88" stroke="#7f1d1d" strokeWidth="1" fill="none" strokeLinecap="round" />

          {/* Blood drips - animated with CSS */}
          {bloodDrops.map((drop, i) => (
            <g key={drop.id}>
              {/* Drop shape - teardrop */}
              <ellipse
                cx={drop.x}
                cy={drop.startY}
                rx={drop.size * 0.5}
                ry={drop.size}
                fill="#dc2626"
                opacity={drop.opacity}
                className="animate-blood-fall"
                style={{
                  animationDelay: `${i * 100}ms`,
                  animationDuration: `${1.5 / drop.speed}s`,
                }}
              />
              {/* Shine on drop */}
              <ellipse
                cx={drop.x - drop.size * 0.2}
                cy={drop.startY - drop.size * 0.3}
                rx={drop.size * 0.2}
                ry={drop.size * 0.3}
                fill="rgba(255,255,255,0.3)"
                className="animate-blood-fall"
                style={{
                  animationDelay: `${i * 100}ms`,
                  animationDuration: `${1.5 / drop.speed}s`,
                }}
              />
            </g>
          ))}

          {/* Dripping strands */}
          <path 
            d="M49 95 Q49 105 50 115" 
            stroke="#991b1b" 
            strokeWidth="1.5" 
            fill="none" 
            strokeLinecap="round"
            className="animate-drip-strand"
          />
          <path 
            d="M51 95 Q52 108 51 120" 
            stroke="#7f1d1d" 
            strokeWidth="1" 
            fill="none" 
            strokeLinecap="round"
            className="animate-drip-strand-slow"
          />
        </g>
      </svg>

      {/* Falling word - positioned below */}
      {showWords && currentWord && (
        <div 
          className="absolute text-xs font-black tracking-wider animate-word-fall"
          style={{
            left: `${wordPosition.x}%`,
            top: '85%',
            transform: 'translateX(-50%)',
            color: '#dc2626',
            textShadow: '0 0 1px #000, 1px 1px 0 #000, -1px -1px 0 #000',
          }}
        >
          {currentWord}
        </div>
      )}

      <style jsx>{`
        @keyframes bloodFall {
          0% {
            transform: translateY(0);
            opacity: 1;
          }
          100% {
            transform: translateY(35px);
            opacity: 0;
          }
        }
        @keyframes dripStrand {
          0%, 100% { opacity: 0.6; }
          50% { opacity: 0.9; }
        }
        @keyframes wordFall {
          0% {
            transform: translateX(-50%) translateY(0);
            opacity: 0;
          }
          20% {
            opacity: 1;
          }
          80% {
            opacity: 1;
          }
          100% {
            transform: translateX(-50%) translateY(40px);
            opacity: 0;
          }
        }
        .animate-blood-fall {
          animation: bloodFall 1.5s ease-in forwards;
        }
        .animate-drip-strand {
          animation: dripStrand 2s ease-in-out infinite;
        }
        .animate-drip-strand-slow {
          animation: dripStrand 3s ease-in-out infinite;
          animation-delay: 0.5s;
        }
        .animate-word-fall {
          animation: wordFall 2.5s ease-out forwards;
        }
      `}</style>
    </div>
  );
}
