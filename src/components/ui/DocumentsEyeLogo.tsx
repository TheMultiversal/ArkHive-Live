"use client";

import { useEffect, useState } from "react";

interface DocumentsEyeLogoProps {
  size?: "sm" | "md" | "lg";
  className?: string;
}

export default function DocumentsEyeLogo({ size = "md", className = "" }: DocumentsEyeLogoProps) {
  const [isHovered, setIsHovered] = useState(false);
  const [frameCount, setFrameCount] = useState(0);
  const [bloodDrops, setBloodDrops] = useState<Array<{ id: number; x: number; y: number; speed: number; size: number }>>([]);
  const [paperRustlePhase, setPaperRustlePhase] = useState(0);

  // Frame counter
  useEffect(() => {
    const interval = setInterval(() => {
      setFrameCount((prev) => (prev + 1) % 1000);
    }, 30);
    return () => clearInterval(interval);
  }, []);

  // Paper rustle animation
  useEffect(() => {
    const interval = setInterval(() => {
      setPaperRustlePhase((prev) => (prev + 1) % 360);
    }, 50);
    return () => clearInterval(interval);
  }, []);

  // Blood drops
  useEffect(() => {
    const interval = setInterval(() => {
      if (Math.random() > 0.5 && bloodDrops.length < 10) {
        const newDrop = {
          id: Date.now(),
          x: 20 + Math.random() * 60,
          y: 10 + Math.random() * 30,
          speed: 0.4 + Math.random() * 0.5,
          size: 1 + Math.random() * 2,
        };
        setBloodDrops((prev) => [...prev, newDrop]);
      }
      setBloodDrops((prev) =>
        prev
          .map((drop) => ({ ...drop, y: drop.y + drop.speed }))
          .filter((drop) => drop.y < 110)
      );
    }, 100);
    return () => clearInterval(interval);
  }, [bloodDrops.length]);

  const sizes = {
    sm: { container: "w-10 h-10", eye: 40 },
    md: { container: "w-12 h-12 lg:w-14 lg:h-14", eye: 56 },
    lg: { container: "w-20 h-20", eye: 80 },
  };

  const s = sizes[size];

  return (
    <div
      className={`relative ${s.container} ${className}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Blood dripping outside the logo */}
      <div className="absolute -bottom-6 left-0 right-0 h-10 overflow-visible pointer-events-none">
        {[0, 1, 2, 3, 4, 5].map((i) => (
          <div
            key={i}
            className="absolute"
            style={{
              left: `${10 + i * 16}%`,
              top: 0,
            }}
          >
            <div 
              className="w-[2px] bg-gradient-to-b from-blood-700 to-blood-900"
              style={{
                height: `${10 + Math.sin(frameCount * 0.04 + i) * 5}px`,
                opacity: 0.8,
              }}
            />
            <div 
              className="w-2 h-3 rounded-full bg-gradient-to-b from-blood-600 to-blood-800 -ml-[3px]"
              style={{
                transform: `translateY(${Math.sin(frameCount * 0.06 + i * 2) * 3}px)`,
              }}
            />
          </div>
        ))}
      </div>

      {/* Main container */}
      <div className={`relative ${s.container} rounded-xl overflow-hidden transition-all duration-300 ${isHovered ? 'scale-110' : 'scale-100'}`}>
        {/* Solid border - no blur */}
        <div className="absolute inset-0 rounded-xl border-2 border-blood-700 bg-black" />

        {/* Inner content */}
        <div className="absolute inset-[2px] rounded-lg bg-dark-950 overflow-hidden">
          {/* Main SVG */}
          <svg
            viewBox="0 0 100 100"
            className="absolute inset-0 w-full h-full"
            style={{ filter: 'drop-shadow(0 0 6px rgba(239, 68, 68, 0.5))' }}
          >
            <defs>
              {/* Gradients */}
              <linearGradient id="paperGradient1" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#f5f5f4" />
                <stop offset="100%" stopColor="#d6d3d1" />
              </linearGradient>

              <linearGradient id="paperGradient2" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#e7e5e4" />
                <stop offset="100%" stopColor="#a8a29e" />
              </linearGradient>

              <linearGradient id="paperGradient3" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#fafaf9" />
                <stop offset="100%" stopColor="#e7e5e4" />
              </linearGradient>

              <radialGradient id="docEyeGradient" cx="50%" cy="40%" r="50%">
                <stop offset="0%" stopColor="#ffffff" />
                <stop offset="60%" stopColor="#fecaca" />
                <stop offset="100%" stopColor="#dc2626" />
              </radialGradient>

              <radialGradient id="docIrisGradient" cx="50%" cy="50%" r="50%">
                <stop offset="0%" stopColor="#ef4444" />
                <stop offset="60%" stopColor="#b91c1c" />
                <stop offset="100%" stopColor="#7f1d1d" />
              </radialGradient>

              <linearGradient id="docBloodStream" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#dc2626" stopOpacity="0.9" />
                <stop offset="100%" stopColor="#7f1d1d" stopOpacity="0.8" />
              </linearGradient>

              <filter id="docBloodGlow" x="-50%" y="-50%" width="200%" height="200%">
                <feGaussianBlur stdDeviation="1" result="blur" />
                <feFlood floodColor="#dc2626" floodOpacity="0.6" />
                <feComposite in2="blur" operator="in" />
                <feMerge>
                  <feMergeNode />
                  <feMergeNode in="SourceGraphic" />
                </feMerge>
              </filter>

              <filter id="paperShadow" x="-20%" y="-20%" width="140%" height="140%">
                <feDropShadow dx="1" dy="1" stdDeviation="1" floodColor="#000" floodOpacity="0.3" />
              </filter>
            </defs>

            {/* Scattered documents in background */}
            <g filter="url(#paperShadow)">
              {/* Back document */}
              <g style={{ transform: `rotate(${-15 + Math.sin(paperRustlePhase * 0.02) * 2}deg)`, transformOrigin: '50px 50px' }}>
                <rect x="15" y="20" width="35" height="45" fill="url(#paperGradient2)" rx="1" />
                <line x1="20" y1="28" x2="45" y2="28" stroke="#a8a29e" strokeWidth="0.5" />
                <line x1="20" y1="33" x2="42" y2="33" stroke="#a8a29e" strokeWidth="0.5" />
                <line x1="20" y1="38" x2="45" y2="38" stroke="#a8a29e" strokeWidth="0.5" />
                <rect x="20" y="45" width="10" height="8" fill="#292524" opacity="0.1" />
              </g>

              {/* Middle document */}
              <g style={{ transform: `rotate(${10 + Math.sin(paperRustlePhase * 0.025) * 1.5}deg)`, transformOrigin: '55px 50px' }}>
                <rect x="50" y="15" width="38" height="50" fill="url(#paperGradient1)" rx="1" />
                <line x1="55" y1="23" x2="82" y2="23" stroke="#d6d3d1" strokeWidth="0.5" />
                <line x1="55" y1="28" x2="80" y2="28" stroke="#d6d3d1" strokeWidth="0.5" />
                <line x1="55" y1="33" x2="82" y2="33" stroke="#d6d3d1" strokeWidth="0.5" />
                <line x1="55" y1="38" x2="75" y2="38" stroke="#d6d3d1" strokeWidth="0.5" />
                {/* Redacted block */}
                <rect x="55" y="45" width="25" height="4" fill="#1c1917" />
                <rect x="55" y="52" width="20" height="4" fill="#1c1917" />
              </g>

              {/* Front document - with blood stains */}
              <g style={{ transform: `rotate(${-5 + Math.sin(paperRustlePhase * 0.03) * 1}deg)`, transformOrigin: '45px 55px' }}>
                <rect x="25" y="40" width="40" height="52" fill="url(#paperGradient3)" rx="1" />
                <line x1="30" y1="48" x2="60" y2="48" stroke="#d6d3d1" strokeWidth="0.5" />
                <line x1="30" y1="53" x2="58" y2="53" stroke="#d6d3d1" strokeWidth="0.5" />
                <line x1="30" y1="58" x2="60" y2="58" stroke="#d6d3d1" strokeWidth="0.5" />
                <line x1="30" y1="63" x2="55" y2="63" stroke="#d6d3d1" strokeWidth="0.5" />
                {/* Blood stains on document */}
                <circle cx="55" cy="75" r="6" fill="#dc2626" opacity="0.4" />
                <circle cx="35" cy="82" r="4" fill="#b91c1c" opacity="0.3" />
                <ellipse cx="50" cy="85" rx="8" ry="3" fill="#7f1d1d" opacity="0.3" />
              </g>
            </g>

            {/* THE EYE emerging from documents */}
            <g filter="url(#docBloodGlow)">
              {/* Eye tear/opening in documents */}
              <ellipse cx="50" cy="50" rx="18" ry="12" fill="#0a0a0a" />

              {/* Eyeball */}
              <ellipse cx="50" cy="50" rx="16" ry="10" fill="url(#docEyeGradient)" />

              {/* Blood vessels */}
              <g opacity="0.6">
                <path d="M35 48 Q42 49, 45 50" stroke="#dc2626" strokeWidth="0.6" fill="none" />
                <path d="M34 52 Q40 51, 44 50" stroke="#b91c1c" strokeWidth="0.5" fill="none" />
                <path d="M65 48 Q58 49, 55 50" stroke="#dc2626" strokeWidth="0.6" fill="none" />
                <path d="M66 52 Q60 51, 56 50" stroke="#b91c1c" strokeWidth="0.5" fill="none" />
              </g>

              {/* Iris */}
              <circle cx="50" cy="50" r="7" fill="url(#docIrisGradient)">
                <animate attributeName="r" values="7;6;7;8;7" dur="3s" repeatCount="indefinite" />
              </circle>

              {/* Pupil */}
              <circle cx="50" cy="50" r="3.5" fill="#000">
                <animate attributeName="r" values="3.5;3;3.5;4;3.5" dur="3s" repeatCount="indefinite" />
              </circle>

              {/* Light reflection */}
              <ellipse cx="48" cy="48" rx="1.5" ry="1" fill="white" opacity="0.9" />
            </g>

            {/* Blood streaming from the eye down */}
            <g filter="url(#docBloodGlow)">
              <path
                d={`M45 60 Q43 ${70 + Math.sin(frameCount * 0.04) * 2} 42 ${85 + Math.sin(frameCount * 0.03) * 3}`}
                stroke="url(#docBloodStream)"
                strokeWidth="2.5"
                fill="none"
                strokeLinecap="round"
              />
              <path
                d={`M50 62 Q50 ${75 + Math.sin(frameCount * 0.035) * 2} 49 ${92 + Math.sin(frameCount * 0.04) * 2}`}
                stroke="url(#docBloodStream)"
                strokeWidth="3"
                fill="none"
                strokeLinecap="round"
              />
              <path
                d={`M55 60 Q57 ${70 + Math.sin(frameCount * 0.045) * 2} 58 ${85 + Math.sin(frameCount * 0.035) * 3}`}
                stroke="url(#docBloodStream)"
                strokeWidth="2.5"
                fill="none"
                strokeLinecap="round"
              />

              {/* Blood pool at bottom */}
              <ellipse 
                cx="50" 
                cy="95" 
                rx={12 + Math.sin(frameCount * 0.02) * 2}
                ry="3"
                fill="#7f1d1d"
                opacity="0.7"
              />
            </g>

            {/* Falling blood drops */}
            {bloodDrops.map((drop) => (
              <ellipse
                key={drop.id}
                cx={drop.x}
                cy={drop.y}
                rx={drop.size * 0.5}
                ry={drop.size}
                fill="#dc2626"
                opacity="0.8"
              />
            ))}

            {/* "CLASSIFIED" stamp - bloody */}
            <g transform="rotate(-20, 50, 30)">
              <rect x="20" y="12" width="45" height="12" fill="none" stroke="#dc2626" strokeWidth="1.5" rx="1" />
              <text x="42.5" y="21" textAnchor="middle" fill="#dc2626" fontSize="6" fontFamily="monospace" fontWeight="bold">CLASSIFIED</text>
            </g>

            {/* Blood drips from corners */}
            <g opacity="0.7">
              <path d={`M5 10 Q5 ${20 + Math.sin(frameCount * 0.05) * 4} 5 35`} stroke="url(#docBloodStream)" strokeWidth="2" fill="none" />
              <path d={`M95 10 Q95 ${20 + Math.sin(frameCount * 0.04) * 4} 95 35`} stroke="url(#docBloodStream)" strokeWidth="2" fill="none" />
            </g>
          </svg>

          {/* Blood smears on edges */}
          <div className="absolute bottom-0 left-0 right-0 h-4 bg-gradient-to-t from-blood-900/60 to-transparent" />
          <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-b from-blood-900/40 to-transparent" />
        </div>
      </div>

      {/* Status indicator */}
      <div className="absolute -top-1 -right-1 w-3 h-3">
        <span className="absolute inset-0 bg-blood-700 rounded-full animate-ping opacity-75" style={{ animationDuration: '1.5s' }} />
        <span className="absolute inset-0 bg-gradient-to-br from-blood-500 to-blood-700 rounded-full shadow-lg shadow-blood-600/50" />
      </div>
    </div>
  );
}
