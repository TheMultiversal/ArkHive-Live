"use client";

import { useEffect, useState } from "react";

interface ShatteredEyeLogoProps {
  size?: "sm" | "md" | "lg";
  className?: string;
}

export default function ShatteredEyeLogo({ size = "md", className = "" }: ShatteredEyeLogoProps) {
  const [isHovered, setIsHovered] = useState(false);
  const [glitchFrame, setGlitchFrame] = useState(0);
  const [shatterPhase, setShatterPhase] = useState(0);

  // Glitch effect
  useEffect(() => {
    const interval = setInterval(() => {
      if (Math.random() > 0.85) {
        setGlitchFrame(Math.floor(Math.random() * 3));
        setTimeout(() => setGlitchFrame(0), 100);
      }
    }, 200);
    return () => clearInterval(interval);
  }, []);

  // Shatter animation phase
  useEffect(() => {
    const interval = setInterval(() => {
      setShatterPhase((prev) => (prev + 1) % 360);
    }, 50);
    return () => clearInterval(interval);
  }, []);

  const sizes = {
    sm: { container: "w-10 h-10", eye: 40 },
    md: { container: "w-12 h-12 lg:w-14 lg:h-14", eye: 56 },
    lg: { container: "w-20 h-20", eye: 80 },
  };

  const s = sizes[size];

  // Generate shard positions with subtle floating animation
  const shards = [
    { id: 1, path: "M50 50 L35 30 L50 25 Z", transform: `translate(${Math.sin(shatterPhase * 0.02) * 2}, ${Math.cos(shatterPhase * 0.02) * 1.5})`, delay: 0 },
    { id: 2, path: "M50 50 L50 25 L65 30 Z", transform: `translate(${Math.cos(shatterPhase * 0.025) * 2.5}, ${Math.sin(shatterPhase * 0.02) * 1})`, delay: 0.1 },
    { id: 3, path: "M50 50 L65 30 L75 45 Z", transform: `translate(${Math.sin(shatterPhase * 0.03) * 3}, ${Math.cos(shatterPhase * 0.025) * 2})`, delay: 0.2 },
    { id: 4, path: "M50 50 L75 45 L78 55 Z", transform: `translate(${Math.cos(shatterPhase * 0.02) * 2}, ${Math.sin(shatterPhase * 0.03) * 1.5})`, delay: 0.3 },
    { id: 5, path: "M50 50 L78 55 L75 65 Z", transform: `translate(${Math.sin(shatterPhase * 0.025) * 2.5}, ${Math.cos(shatterPhase * 0.02) * 2})`, delay: 0.4 },
    { id: 6, path: "M50 50 L75 65 L65 75 Z", transform: `translate(${Math.cos(shatterPhase * 0.03) * 2}, ${Math.sin(shatterPhase * 0.025) * 2.5})`, delay: 0.5 },
    { id: 7, path: "M50 50 L65 75 L50 78 Z", transform: `translate(${Math.sin(shatterPhase * 0.02) * 1.5}, ${Math.cos(shatterPhase * 0.03) * 3})`, delay: 0.6 },
    { id: 8, path: "M50 50 L50 78 L35 75 Z", transform: `translate(${Math.cos(shatterPhase * 0.025) * 2}, ${Math.sin(shatterPhase * 0.02) * 2})`, delay: 0.7 },
    { id: 9, path: "M50 50 L35 75 L25 65 Z", transform: `translate(${Math.sin(shatterPhase * 0.03) * 2.5}, ${Math.cos(shatterPhase * 0.025) * 1.5})`, delay: 0.8 },
    { id: 10, path: "M50 50 L25 65 L22 55 Z", transform: `translate(${Math.cos(shatterPhase * 0.02) * 3}, ${Math.sin(shatterPhase * 0.03) * 2})`, delay: 0.9 },
    { id: 11, path: "M50 50 L22 55 L25 45 Z", transform: `translate(${Math.sin(shatterPhase * 0.025) * 2}, ${Math.cos(shatterPhase * 0.02) * 2.5})`, delay: 1 },
    { id: 12, path: "M50 50 L25 45 L35 30 Z", transform: `translate(${Math.cos(shatterPhase * 0.03) * 1.5}, ${Math.sin(shatterPhase * 0.025) * 2})`, delay: 1.1 },
  ];

  return (
    <div
      className={`relative ${s.container} ${className}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Outer atmospheric glow - multiple layers */}
      <div className="absolute inset-0 scale-150">
        <div className="absolute inset-0 bg-blood-600/20 rounded-full blur-xl animate-pulse" style={{ animationDuration: '3s' }} />
        <div className="absolute inset-0 bg-blood-700/15 rounded-full blur-2xl animate-pulse" style={{ animationDuration: '4s', animationDelay: '1s' }} />
      </div>

      {/* Glitch layers */}
      {glitchFrame > 0 && (
        <>
          <div className="absolute inset-0 bg-blood-600/30 translate-x-1 rounded-2xl" />
          <div className="absolute inset-0 bg-cyan-500/20 -translate-x-1 rounded-2xl" />
        </>
      )}

      {/* Main container */}
      <div className={`relative ${s.container} rounded-2xl overflow-hidden transition-all duration-500 ${isHovered ? 'scale-110' : 'scale-100'}`}>
        {/* Animated border */}
        <div className="absolute inset-0 rounded-2xl p-[2px] bg-gradient-to-br from-blood-500 via-blood-700 to-blood-900">
          <div className="absolute inset-0 rounded-2xl bg-gradient-conic from-blood-600 via-transparent to-blood-600 animate-spin-slow opacity-50" style={{ animationDuration: '6s' }} />
        </div>

        {/* Inner background */}
        <div className="absolute inset-[2px] rounded-2xl bg-gradient-to-br from-dark-900 via-dark-950 to-black overflow-hidden">
          {/* Cracked glass overlay */}
          <div className="absolute inset-0 opacity-30">
            <svg viewBox="0 0 100 100" className="w-full h-full">
              <defs>
                <linearGradient id="crackGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#dc2626" stopOpacity="0.5" />
                  <stop offset="100%" stopColor="#7f1d1d" stopOpacity="0.2" />
                </linearGradient>
              </defs>
              {/* Crack lines radiating from center */}
              <g stroke="url(#crackGradient)" strokeWidth="0.5" fill="none">
                <path d="M50 50 L30 20 L25 15" />
                <path d="M50 50 L70 25 L80 20" />
                <path d="M50 50 L85 50 L95 48" />
                <path d="M50 50 L75 75 L85 85" />
                <path d="M50 50 L50 85 L48 95" />
                <path d="M50 50 L20 70 L10 80" />
                <path d="M50 50 L15 50 L5 52" />
                <path d="M50 50 L25 25 L15 15" />
              </g>
            </svg>
          </div>

          {/* Main shattered eye SVG */}
          <svg
            viewBox="0 0 100 100"
            className="absolute inset-0 w-full h-full"
            style={{ filter: 'drop-shadow(0 0 8px rgba(239, 68, 68, 0.4))' }}
          >
            <defs>
              {/* Gradients */}
              <radialGradient id="shardGradient" cx="50%" cy="50%" r="50%">
                <stop offset="0%" stopColor="#f87171" />
                <stop offset="50%" stopColor="#dc2626" />
                <stop offset="100%" stopColor="#7f1d1d" />
              </radialGradient>

              <radialGradient id="centerEyeGradient" cx="50%" cy="40%" r="60%">
                <stop offset="0%" stopColor="#ffffff" />
                <stop offset="40%" stopColor="#fecaca" />
                <stop offset="100%" stopColor="#dc2626" />
              </radialGradient>

              <radialGradient id="pupilGradient2" cx="30%" cy="30%" r="70%">
                <stop offset="0%" stopColor="#450a0a" />
                <stop offset="100%" stopColor="#000000" />
              </radialGradient>

              <linearGradient id="shardEdge" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#fca5a5" stopOpacity="0.8" />
                <stop offset="100%" stopColor="#7f1d1d" stopOpacity="0.3" />
              </linearGradient>

              {/* Glow filters */}
              <filter id="shardGlow" x="-50%" y="-50%" width="200%" height="200%">
                <feGaussianBlur stdDeviation="1" result="blur" />
                <feFlood floodColor="#ef4444" floodOpacity="0.5" />
                <feComposite in2="blur" operator="in" />
                <feMerge>
                  <feMergeNode />
                  <feMergeNode in="SourceGraphic" />
                </feMerge>
              </filter>

              <filter id="innerGlow" x="-100%" y="-100%" width="300%" height="300%">
                <feGaussianBlur stdDeviation="3" result="blur" />
                <feFlood floodColor="#dc2626" floodOpacity="0.6" />
                <feComposite in2="blur" operator="in" />
                <feMerge>
                  <feMergeNode />
                  <feMergeNode in="SourceGraphic" />
                </feMerge>
              </filter>
            </defs>

            {/* Background shards - floating fragments */}
            <g filter="url(#shardGlow)">
              {shards.map((shard) => (
                <g key={shard.id} style={{ transform: shard.transform }}>
                  <path
                    d={shard.path}
                    fill="url(#shardGradient)"
                    stroke="url(#shardEdge)"
                    strokeWidth="0.5"
                    opacity={0.6 + Math.sin(shatterPhase * 0.05 + shard.delay * 10) * 0.2}
                  >
                    <animateTransform
                      attributeName="transform"
                      type="rotate"
                      from="0 50 50"
                      to="360 50 50"
                      dur={`${20 + shard.id * 2}s`}
                      repeatCount="indefinite"
                    />
                  </path>
                  {/* Shard highlight */}
                  <path
                    d={shard.path}
                    fill="none"
                    stroke="white"
                    strokeWidth="0.3"
                    opacity="0.3"
                    strokeDasharray="2 4"
                  />
                </g>
              ))}
            </g>

            {/* Central eye - the core that remains */}
            <g filter="url(#innerGlow)">
              {/* Eye white/sclera */}
              <ellipse cx="50" cy="50" rx="16" ry="12" fill="url(#centerEyeGradient)">
                <animate attributeName="ry" values="12;11;12;13;12" dur="4s" repeatCount="indefinite" />
              </ellipse>

              {/* Iris */}
              <circle cx="50" cy="50" r="8" fill="#dc2626">
                <animate attributeName="fill" values="#dc2626;#b91c1c;#dc2626" dur="3s" repeatCount="indefinite" />
              </circle>

              {/* Iris inner ring */}
              <circle cx="50" cy="50" r="6" fill="#991b1b" />

              {/* Pupil */}
              <circle cx="50" cy="50" r="4" fill="url(#pupilGradient2)">
                <animate attributeName="r" values="4;3;4;5;4" dur="4s" repeatCount="indefinite" />
              </circle>

              {/* Pupil void */}
              <circle cx="50" cy="50" r="2.5" fill="#000" />

              {/* Light reflection */}
              <ellipse cx="47" cy="47" rx="2" ry="1.5" fill="white" opacity="0.9">
                <animate attributeName="opacity" values="0.9;0.6;0.9" dur="2s" repeatCount="indefinite" />
              </ellipse>
              <circle cx="52" cy="52" r="0.8" fill="white" opacity="0.5" />
            </g>

            {/* Orbiting fragments */}
            <g>
              {[0, 120, 240].map((angle, i) => (
                <g key={i}>
                  <circle
                    cx="50"
                    cy="50"
                    r="0"
                    fill="#ef4444"
                    opacity="0.8"
                  >
                    <animateMotion
                      path={`M0,0 A25,25 0 1,1 0.1,0`}
                      dur={`${3 + i}s`}
                      repeatCount="indefinite"
                      begin={`${i * 0.5}s`}
                    />
                    <animate attributeName="r" values="1;2;1" dur="1s" repeatCount="indefinite" />
                  </circle>
                </g>
              ))}
            </g>

            {/* Particle dust */}
            {[...Array(8)].map((_, i) => (
              <circle
                key={`dust-${i}`}
                cx={50 + Math.cos((shatterPhase + i * 45) * Math.PI / 180) * (25 + i * 3)}
                cy={50 + Math.sin((shatterPhase + i * 45) * Math.PI / 180) * (25 + i * 3)}
                r="0.5"
                fill="#fca5a5"
                opacity={0.3 + Math.sin(shatterPhase * 0.1 + i) * 0.2}
              />
            ))}

            {/* Energy lines connecting shards to center */}
            <g opacity="0.2">
              {[0, 60, 120, 180, 240, 300].map((angle, i) => (
                <line
                  key={`energy-${i}`}
                  x1="50"
                  y1="50"
                  x2={50 + Math.cos(angle * Math.PI / 180) * 35}
                  y2={50 + Math.sin(angle * Math.PI / 180) * 35}
                  stroke="#ef4444"
                  strokeWidth="0.3"
                  strokeDasharray="1 3"
                  opacity={0.3 + Math.sin(shatterPhase * 0.05 + i) * 0.2}
                />
              ))}
            </g>
          </svg>

          {/* Glitch scan line */}
          <div 
            className="absolute left-0 right-0 h-[2px] bg-blood-600/30 pointer-events-none"
            style={{ 
              top: `${(shatterPhase * 2) % 100}%`,
              boxShadow: '0 0 10px rgba(185, 28, 28, 0.5)'
            }}
          />

          {/* Corner fracture marks */}
          <div className="absolute top-1 left-1 w-4 h-4">
            <div className="absolute top-0 left-2 w-[1px] h-3 bg-blood-600/40 rotate-45" />
            <div className="absolute top-2 left-0 w-3 h-[1px] bg-blood-600/40 rotate-45" />
          </div>
          <div className="absolute top-1 right-1 w-4 h-4">
            <div className="absolute top-0 right-2 w-[1px] h-3 bg-blood-600/40 -rotate-45" />
            <div className="absolute top-2 right-0 w-3 h-[1px] bg-blood-600/40 -rotate-45" />
          </div>
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
