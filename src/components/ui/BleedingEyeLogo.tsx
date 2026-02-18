"use client";

import { useEffect, useState } from "react";

interface BleedingEyeLogoProps {
  size?: "sm" | "md" | "lg";
  className?: string;
}

export default function BleedingEyeLogo({ size = "md", className = "" }: BleedingEyeLogoProps) {
  const [isHovered, setIsHovered] = useState(false);
  const [tearProgress, setTearProgress] = useState(0);

  // Continuous tear animation
  useEffect(() => {
    const interval = setInterval(() => {
      setTearProgress((prev) => (prev >= 100 ? 0 : prev + 0.5));
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
      {/* Outer atmospheric glow - multiple layers */}
      <div className="absolute inset-0 scale-150">
        <div className="absolute inset-0 bg-blood-600/20 rounded-full blur-xl animate-pulse" style={{ animationDuration: '3s' }} />
        <div className="absolute inset-0 bg-blood-700/10 rounded-full blur-2xl animate-pulse" style={{ animationDuration: '4s', animationDelay: '1s' }} />
        <div className="absolute inset-0 bg-blood-900/30 rounded-full blur-3xl animate-pulse" style={{ animationDuration: '5s', animationDelay: '2s' }} />
      </div>

      {/* Main container with glass morphism */}
      <div className={`relative ${s.container} rounded-2xl overflow-hidden transition-all duration-500 ${isHovered ? 'scale-110' : 'scale-100'}`}>
        {/* Animated gradient border */}
        <div className="absolute inset-0 rounded-2xl p-[2px] bg-gradient-to-br from-blood-500 via-blood-700 to-blood-900 animate-gradient-rotate">
          <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-blood-600/50 via-transparent to-blood-900/50 animate-spin-slow" style={{ animationDuration: '8s' }} />
        </div>

        {/* Inner background */}
        <div className="absolute inset-[2px] rounded-2xl bg-gradient-to-br from-dark-900 via-dark-950 to-black overflow-hidden">
          {/* Scan lines effect */}
          <div className="absolute inset-0 opacity-20" style={{
            backgroundImage: 'repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(255,0,0,0.03) 2px, rgba(255,0,0,0.03) 4px)',
          }} />

          {/* Central SVG Eye */}
          <svg
            viewBox="0 0 100 100"
            className="absolute inset-0 w-full h-full"
            style={{ filter: 'drop-shadow(0 0 10px rgba(239, 68, 68, 0.5))' }}
          >
            <defs>
              {/* Gradients */}
              <radialGradient id="eyeballGradient" cx="50%" cy="40%" r="50%">
                <stop offset="0%" stopColor="#ffffff" />
                <stop offset="60%" stopColor="#f0f0f0" />
                <stop offset="100%" stopColor="#d0d0d0" />
              </radialGradient>

              <radialGradient id="irisGradient" cx="50%" cy="50%" r="50%">
                <stop offset="0%" stopColor="#dc2626">
                  <animate attributeName="stop-color" values="#dc2626;#991b1b;#dc2626" dur="3s" repeatCount="indefinite" />
                </stop>
                <stop offset="50%" stopColor="#991b1b" />
                <stop offset="100%" stopColor="#450a0a" />
              </radialGradient>

              <radialGradient id="pupilGradient" cx="30%" cy="30%" r="60%">
                <stop offset="0%" stopColor="#1a1a1a" />
                <stop offset="100%" stopColor="#000000" />
              </radialGradient>

              <linearGradient id="bloodGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#dc2626" />
                <stop offset="50%" stopColor="#b91c1c" />
                <stop offset="100%" stopColor="#7f1d1d" />
              </linearGradient>

              <linearGradient id="bloodDripGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#dc2626" stopOpacity="0.9" />
                <stop offset="100%" stopColor="#991b1b" stopOpacity="1" />
              </linearGradient>

              {/* Glow filter */}
              <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
                <feGaussianBlur stdDeviation="2" result="coloredBlur" />
                <feMerge>
                  <feMergeNode in="coloredBlur" />
                  <feMergeNode in="SourceGraphic" />
                </feMerge>
              </filter>

              {/* Blood glow */}
              <filter id="bloodGlow" x="-100%" y="-100%" width="300%" height="300%">
                <feGaussianBlur stdDeviation="1.5" result="blur" />
                <feFlood floodColor="#dc2626" floodOpacity="0.6" />
                <feComposite in2="blur" operator="in" />
                <feMerge>
                  <feMergeNode />
                  <feMergeNode in="SourceGraphic" />
                </feMerge>
              </filter>

              {/* Clip path for eye shape */}
              <clipPath id="eyeShape">
                <ellipse cx="50" cy="50" rx="35" ry="22" />
              </clipPath>
            </defs>

            {/* Eye socket shadow */}
            <ellipse cx="50" cy="52" rx="36" ry="24" fill="rgba(0,0,0,0.5)" />

            {/* Main eye shape with clip */}
            <g clipPath="url(#eyeShape)">
              {/* Eyeball */}
              <ellipse cx="50" cy="50" rx="35" ry="22" fill="url(#eyeballGradient)" />

              {/* Blood vessels */}
              <g opacity="0.4">
                <path d="M20 45 Q30 48, 35 50" stroke="#dc2626" strokeWidth="0.5" fill="none" opacity="0.6" />
                <path d="M18 52 Q28 50, 33 49" stroke="#b91c1c" strokeWidth="0.4" fill="none" opacity="0.5" />
                <path d="M22 55 Q30 53, 36 51" stroke="#dc2626" strokeWidth="0.3" fill="none" opacity="0.4" />
                <path d="M80 45 Q70 48, 65 50" stroke="#dc2626" strokeWidth="0.5" fill="none" opacity="0.6" />
                <path d="M82 52 Q72 50, 67 49" stroke="#b91c1c" strokeWidth="0.4" fill="none" opacity="0.5" />
                <path d="M78 55 Q70 53, 64 51" stroke="#dc2626" strokeWidth="0.3" fill="none" opacity="0.4" />
              </g>

              {/* Iris */}
              <circle cx="50" cy="50" r="14" fill="url(#irisGradient)" filter="url(#glow)">
                <animate attributeName="r" values="14;13;14;15;14" dur="4s" repeatCount="indefinite" />
              </circle>

              {/* Iris detail rings */}
              <circle cx="50" cy="50" r="12" fill="none" stroke="#7f1d1d" strokeWidth="0.5" opacity="0.5" />
              <circle cx="50" cy="50" r="10" fill="none" stroke="#450a0a" strokeWidth="0.3" opacity="0.3" />

              {/* Iris radial lines */}
              <g opacity="0.3">
                {[...Array(12)].map((_, i) => (
                  <line
                    key={i}
                    x1="50"
                    y1="50"
                    x2={50 + 14 * Math.cos((i * 30 * Math.PI) / 180)}
                    y2={50 + 14 * Math.sin((i * 30 * Math.PI) / 180)}
                    stroke="#450a0a"
                    strokeWidth="0.5"
                  />
                ))}
              </g>

              {/* Pupil */}
              <circle cx="50" cy="50" r="6" fill="url(#pupilGradient)">
                <animate attributeName="r" values="6;5;6;7;6" dur="4s" repeatCount="indefinite" />
              </circle>

              {/* Pupil inner depth */}
              <circle cx="50" cy="50" r="4" fill="#000" />

              {/* Light reflections */}
              <ellipse cx="45" cy="46" rx="3" ry="2" fill="white" opacity="0.9">
                <animate attributeName="opacity" values="0.9;0.7;0.9" dur="2s" repeatCount="indefinite" />
              </ellipse>
              <circle cx="54" cy="52" r="1" fill="white" opacity="0.5" />
              <circle cx="47" cy="44" r="0.5" fill="white" opacity="0.7" />
            </g>

            {/* Eye outline */}
            <ellipse cx="50" cy="50" rx="35" ry="22" fill="none" stroke="#1a1a1a" strokeWidth="1.5" />

            {/* Upper eyelid shadow */}
            <path d="M15 50 Q50 25, 85 50" fill="none" stroke="rgba(0,0,0,0.3)" strokeWidth="3" />

            {/* THE BLOOD TEAR */}
            <g filter="url(#bloodGlow)">
              {/* Tear origin point at bottom of eye */}
              <ellipse cx="50" cy="71" rx="3" ry="2" fill="url(#bloodGradient)">
                <animate attributeName="rx" values="3;4;3" dur="2s" repeatCount="indefinite" />
              </ellipse>

              {/* Main tear stream */}
              <path
                d={`M50 73 Q${48 + Math.sin(tearProgress * 0.1) * 2} ${75 + tearProgress * 0.15}, ${49 + Math.sin(tearProgress * 0.05)} ${78 + tearProgress * 0.2}`}
                stroke="url(#bloodDripGradient)"
                strokeWidth="4"
                strokeLinecap="round"
                fill="none"
                opacity={Math.min(1, tearProgress / 20)}
              />

              {/* Tear droplet */}
              {tearProgress > 30 && (
                <g style={{ transform: `translateY(${Math.min(25, (tearProgress - 30) * 0.8)}px)` }}>
                  <ellipse
                    cx="49"
                    cy="85"
                    rx={2 + Math.sin(tearProgress * 0.1)}
                    ry={3 + Math.cos(tearProgress * 0.1)}
                    fill="url(#bloodGradient)"
                    opacity={tearProgress > 80 ? Math.max(0, 1 - (tearProgress - 80) / 20) : 1}
                  >
                    <animate attributeName="ry" values="3;4;3" dur="0.5s" repeatCount="indefinite" />
                  </ellipse>
                  {/* Droplet highlight */}
                  <ellipse cx="48" cy="84" rx="0.8" ry="1" fill="white" opacity="0.4" />
                </g>
              )}

              {/* Secondary smaller tears */}
              {tearProgress > 50 && tearProgress < 90 && (
                <ellipse
                  cx="52"
                  cy={75 + (tearProgress - 50) * 0.3}
                  rx="1.5"
                  ry="2"
                  fill="url(#bloodGradient)"
                  opacity={0.7}
                />
              )}
            </g>

            {/* Subtle vignette overlay */}
            <rect x="0" y="0" width="100" height="100" fill="url(#vignetteGradient)" opacity="0.1" />
          </svg>

          {/* Pulsing red overlay on hover */}
          <div className={`absolute inset-0 bg-blood-600/10 transition-opacity duration-300 ${isHovered ? 'opacity-100' : 'opacity-0'}`} />

          {/* Corner accents */}
          <div className="absolute top-0 left-0 w-3 h-3 border-t-2 border-l-2 border-blood-600/50 rounded-tl-lg" />
          <div className="absolute top-0 right-0 w-3 h-3 border-t-2 border-r-2 border-blood-600/50 rounded-tr-lg" />
          <div className="absolute bottom-0 left-0 w-3 h-3 border-b-2 border-l-2 border-blood-600/50 rounded-bl-lg" />
          <div className="absolute bottom-0 right-0 w-3 h-3 border-b-2 border-r-2 border-blood-600/50 rounded-br-lg" />
        </div>
      </div>

      {/* Status indicator - pulsing dot */}
      <div className="absolute -top-1 -right-1 w-3 h-3">
        <span className="absolute inset-0 bg-blood-700 rounded-full animate-ping opacity-75" style={{ animationDuration: '2s' }} />
        <span className="absolute inset-0 bg-gradient-to-br from-blood-500 to-blood-700 rounded-full shadow-lg shadow-blood-600/50" />
      </div>
    </div>
  );
}
