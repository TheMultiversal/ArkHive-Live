"use client";

import { useEffect, useState } from "react";

interface InvertedPyramidEyeLogoProps {
  size?: "sm" | "md" | "lg";
  className?: string;
}

export default function InvertedPyramidEyeLogo({ size = "md", className = "" }: InvertedPyramidEyeLogoProps) {
  const [isHovered, setIsHovered] = useState(false);
  const [pulsePhase, setPulsePhase] = useState(0);
  const [glowIntensity, setGlowIntensity] = useState(0.5);

  // Pulse animation
  useEffect(() => {
    const interval = setInterval(() => {
      setPulsePhase((prev) => (prev + 1) % 360);
    }, 30);
    return () => clearInterval(interval);
  }, []);

  // Breathing glow
  useEffect(() => {
    const interval = setInterval(() => {
      setGlowIntensity(0.4 + Math.sin(Date.now() * 0.002) * 0.3);
    }, 50);
    return () => clearInterval(interval);
  }, []);

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
      {/* Ethereal outer glow */}
      <div className="absolute inset-0 scale-[1.8]">
        <div 
          className="absolute inset-0 rounded-full blur-2xl"
          style={{
            background: `radial-gradient(circle, rgba(239, 68, 68, ${glowIntensity * 0.4}) 0%, transparent 70%)`,
          }}
        />
        {/* Rays emanating from center */}
        {[...Array(12)].map((_, i) => (
          <div
            key={i}
            className="absolute top-1/2 left-1/2 w-[1px] h-16 origin-bottom"
            style={{
              background: `linear-gradient(to top, rgba(239, 68, 68, ${0.1 + Math.sin(pulsePhase * 0.03 + i) * 0.1}), transparent)`,
              transform: `translate(-50%, -100%) rotate(${i * 30}deg)`,
            }}
          />
        ))}
      </div>

      {/* Main container */}
      <div className={`relative ${s.container} rounded-2xl overflow-hidden transition-all duration-500 ${isHovered ? 'scale-110' : 'scale-100'}`}>
        {/* Mystical border glow */}
        <div 
          className="absolute inset-0 rounded-2xl"
          style={{
            background: `linear-gradient(135deg, rgba(239, 68, 68, ${glowIntensity}) 0%, rgba(127, 29, 29, 0.3) 50%, rgba(239, 68, 68, ${glowIntensity}) 100%)`,
            padding: '2px',
          }}
        />

        {/* Inner background */}
        <div className="absolute inset-[2px] rounded-xl bg-gradient-to-br from-dark-950 via-black to-dark-900 overflow-hidden">
          {/* Subtle mystical pattern */}
          <div 
            className="absolute inset-0 opacity-5"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M30 0L60 30L30 60L0 30z' fill='none' stroke='%23ef4444' stroke-width='0.5'/%3E%3C/svg%3E")`,
              backgroundSize: '20px 20px',
            }}
          />

          {/* Main SVG */}
          <svg
            viewBox="0 0 100 100"
            className="absolute inset-0 w-full h-full"
            style={{ filter: `drop-shadow(0 0 ${8 + glowIntensity * 10}px rgba(239, 68, 68, ${glowIntensity}))` }}
          >
            <defs>
              {/* Gradients */}
              <linearGradient id="pyramidGradient" x1="0%" y1="100%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#450a0a" />
                <stop offset="30%" stopColor="#7f1d1d" />
                <stop offset="60%" stopColor="#991b1b" />
                <stop offset="100%" stopColor="#b91c1c" />
              </linearGradient>

              <linearGradient id="pyramidEdge" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#fca5a5" stopOpacity="0.8" />
                <stop offset="50%" stopColor="#ef4444" stopOpacity="0.5" />
                <stop offset="100%" stopColor="#7f1d1d" stopOpacity="0.3" />
              </linearGradient>

              <radialGradient id="eyeGlow" cx="50%" cy="50%" r="50%">
                <stop offset="0%" stopColor="#ffffff" />
                <stop offset="30%" stopColor="#fecaca" />
                <stop offset="70%" stopColor="#f87171" />
                <stop offset="100%" stopColor="#dc2626" />
              </radialGradient>

              <radialGradient id="irisGradient2" cx="50%" cy="50%" r="50%">
                <stop offset="0%" stopColor="#ef4444">
                  <animate attributeName="stop-color" values="#ef4444;#f87171;#ef4444" dur="2s" repeatCount="indefinite" />
                </stop>
                <stop offset="70%" stopColor="#b91c1c" />
                <stop offset="100%" stopColor="#7f1d1d" />
              </radialGradient>

              {/* Glow filter */}
              <filter id="pyramidGlow" x="-50%" y="-50%" width="200%" height="200%">
                <feGaussianBlur stdDeviation="2" result="blur" />
                <feFlood floodColor="#ef4444" floodOpacity="0.5" />
                <feComposite in2="blur" operator="in" />
                <feMerge>
                  <feMergeNode />
                  <feMergeNode in="SourceGraphic" />
                </feMerge>
              </filter>

              <filter id="innerLight" x="-100%" y="-100%" width="300%" height="300%">
                <feGaussianBlur stdDeviation="3" result="blur" />
                <feFlood floodColor="#fca5a5" floodOpacity="0.4" />
                <feComposite in2="blur" operator="in" />
                <feMerge>
                  <feMergeNode />
                  <feMergeNode in="SourceGraphic" />
                </feMerge>
              </filter>

              {/* Clip path for the floating eye area */}
              <clipPath id="eyeAreaClip">
                <circle cx="50" cy="38" r="15" />
              </clipPath>
            </defs>

            {/* Inverted pyramid (point at bottom) */}
            <g filter="url(#pyramidGlow)">
              {/* Main pyramid body */}
              <path
                d="M15 20 L85 20 L50 85 Z"
                fill="url(#pyramidGradient)"
                stroke="url(#pyramidEdge)"
                strokeWidth="1"
              />

              {/* Pyramid face shading - left */}
              <path
                d="M15 20 L50 20 L50 85 Z"
                fill="rgba(0,0,0,0.2)"
              />

              {/* Brick/stone lines */}
              <g stroke="#450a0a" strokeWidth="0.3" opacity="0.5">
                <line x1="20" y1="30" x2="80" y2="30" />
                <line x1="25" y1="40" x2="75" y2="40" />
                <line x1="30" y1="50" x2="70" y2="50" />
                <line x1="35" y1="60" x2="65" y2="60" />
                <line x1="40" y1="70" x2="60" y2="70" />
                <line x1="45" y1="80" x2="55" y2="80" />
                {/* Vertical divisions */}
                <line x1="50" y1="20" x2="50" y2="85" />
                <line x1="35" y1="20" x2="42" y2="75" />
                <line x1="65" y1="20" x2="58" y2="75" />
              </g>
            </g>

            {/* Separation line - detached capstone effect but inverted */}
            <path
              d="M25 32 L75 32"
              stroke="#ef4444"
              strokeWidth="1"
              strokeDasharray="2 2"
              opacity="0.6"
            >
              <animate attributeName="stroke-dashoffset" values="0;4" dur="1s" repeatCount="indefinite" />
            </path>

            {/* The All-Seeing Eye - floating above the pyramid */}
            <g filter="url(#innerLight)">
              {/* Eye glow background */}
              <circle cx="50" cy="38" r="14" fill="url(#eyeGlow)" opacity="0.3">
                <animate attributeName="r" values="14;16;14" dur="3s" repeatCount="indefinite" />
              </circle>

              {/* Eye shape */}
              <g clipPath="url(#eyeAreaClip)">
                {/* Sclera */}
                <ellipse cx="50" cy="38" rx="12" ry="8" fill="white" />

                {/* Iris */}
                <circle cx="50" cy="38" r="6" fill="url(#irisGradient2)">
                  <animate attributeName="r" values="6;5.5;6;6.5;6" dur="4s" repeatCount="indefinite" />
                </circle>

                {/* Pupil */}
                <circle cx="50" cy="38" r="3" fill="#000">
                  <animate attributeName="r" values="3;2.5;3;3.5;3" dur="4s" repeatCount="indefinite" />
                </circle>

                {/* Pupil void - the abyss */}
                <circle cx="50" cy="38" r="1.5" fill="#000" />

                {/* Light reflections */}
                <ellipse cx="48" cy="36" rx="1.5" ry="1" fill="white" opacity="0.9">
                  <animate attributeName="opacity" values="0.9;0.6;0.9" dur="2s" repeatCount="indefinite" />
                </ellipse>
                <circle cx="52" cy="39" r="0.5" fill="white" opacity="0.5" />
              </g>

              {/* Eye outline */}
              <path
                d="M38 38 Q50 28, 62 38 Q50 48, 38 38"
                fill="none"
                stroke="#7f1d1d"
                strokeWidth="1"
              />

              {/* Upper eyelid line */}
              <path
                d="M38 38 Q50 28, 62 38"
                fill="none"
                stroke="#450a0a"
                strokeWidth="0.5"
              />
            </g>

            {/* Energy beams from eye */}
            <g opacity={0.2 + glowIntensity * 0.3}>
              <line x1="50" y1="46" x2="35" y2="75" stroke="#ef4444" strokeWidth="0.5" />
              <line x1="50" y1="46" x2="50" y2="80" stroke="#ef4444" strokeWidth="0.5" />
              <line x1="50" y1="46" x2="65" y2="75" stroke="#ef4444" strokeWidth="0.5" />
            </g>

            {/* Mystical symbols at corners (small) */}
            <g fill="#ef4444" opacity="0.4" fontSize="5" fontFamily="serif">
              <text x="8" y="25" transform="rotate(-15, 8, 25)">◊</text>
              <text x="88" y="25" transform="rotate(15, 88, 25)">◊</text>
              <text x="48" y="95">▽</text>
            </g>

            {/* Orbiting particles */}
            {[0, 120, 240].map((startAngle, i) => (
              <circle
                key={i}
                cx="50"
                cy="38"
                r="1"
                fill="#fca5a5"
                opacity="0.6"
              >
                <animateMotion
                  path="M0,0 A18,18 0 1,1 0.1,0"
                  dur={`${4 + i}s`}
                  repeatCount="indefinite"
                  begin={`${i * 0.5}s`}
                />
              </circle>
            ))}
          </svg>

          {/* Vignette overlay */}
          <div 
            className="absolute inset-0 pointer-events-none"
            style={{
              background: 'radial-gradient(circle at center, transparent 30%, rgba(0,0,0,0.4) 100%)',
            }}
          />
        </div>
      </div>

      {/* Status indicator */}
      <div className="absolute -top-1 -right-1 w-3 h-3">
        <span className="absolute inset-0 bg-blood-700 rounded-full animate-ping opacity-75" style={{ animationDuration: '2s' }} />
        <span className="absolute inset-0 bg-gradient-to-br from-blood-500 to-blood-700 rounded-full shadow-lg shadow-blood-600/50" />
      </div>
    </div>
  );
}
