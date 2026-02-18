"use client";

import { useEffect, useState } from "react";

interface GlitchBleedingEyeLogoProps {
  size?: "sm" | "md" | "lg";
  className?: string;
}

export default function GlitchBleedingEyeLogo({ size = "md", className = "" }: GlitchBleedingEyeLogoProps) {
  const [isHovered, setIsHovered] = useState(false);
  const [glitchActive, setGlitchActive] = useState(false);
  const [glitchOffset, setGlitchOffset] = useState({ r: 0, g: 0, b: 0 });
  const [scanLine, setScanLine] = useState(0);
  const [bloodDrops, setBloodDrops] = useState<Array<{ id: number; x: number; y: number; speed: number; size: number }>>([]);
  const [frameCount, setFrameCount] = useState(0);

  // Frame counter for animations
  useEffect(() => {
    const interval = setInterval(() => {
      setFrameCount((prev) => (prev + 1) % 1000);
    }, 30);
    return () => clearInterval(interval);
  }, []);

  // Glitch effect
  useEffect(() => {
    const interval = setInterval(() => {
      if (Math.random() > 0.7) {
        setGlitchActive(true);
        setGlitchOffset({
          r: (Math.random() - 0.5) * 6,
          g: (Math.random() - 0.5) * 6,
          b: (Math.random() - 0.5) * 6,
        });
        setTimeout(() => {
          setGlitchActive(false);
          setGlitchOffset({ r: 0, g: 0, b: 0 });
        }, 50 + Math.random() * 100);
      }
    }, 150);
    return () => clearInterval(interval);
  }, []);

  // Scan line
  useEffect(() => {
    const interval = setInterval(() => {
      setScanLine((prev) => (prev + 2) % 120);
    }, 30);
    return () => clearInterval(interval);
  }, []);

  // Blood drops spawning and falling
  useEffect(() => {
    const interval = setInterval(() => {
      // Spawn new drops
      if (Math.random() > 0.6 && bloodDrops.length < 8) {
        const newDrop = {
          id: Date.now(),
          x: 30 + Math.random() * 40,
          y: 55 + Math.random() * 10,
          speed: 0.3 + Math.random() * 0.4,
          size: 1 + Math.random() * 2,
        };
        setBloodDrops((prev) => [...prev, newDrop]);
      }

      // Update existing drops
      setBloodDrops((prev) =>
        prev
          .map((drop) => ({ ...drop, y: drop.y + drop.speed }))
          .filter((drop) => drop.y < 105)
      );
    }, 80);
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
      {/* Glitch shadow layers */}
      {glitchActive && (
        <>
          <div 
            className="absolute inset-0 rounded-2xl opacity-70"
            style={{ 
              transform: `translate(${glitchOffset.r}px, 0)`,
              background: 'rgba(255, 0, 0, 0.3)',
              mixBlendMode: 'screen',
            }} 
          />
          <div 
            className="absolute inset-0 rounded-2xl opacity-50"
            style={{ 
              transform: `translate(${glitchOffset.b}px, 0)`,
              background: 'rgba(0, 255, 255, 0.2)',
              mixBlendMode: 'screen',
            }} 
          />
        </>
      )}

      {/* Blood dripping from logo edges */}
      <div className="absolute -bottom-4 left-0 right-0 h-8 overflow-visible pointer-events-none">
        {[0, 1, 2, 3, 4].map((i) => (
          <div
            key={i}
            className="absolute"
            style={{
              left: `${15 + i * 18}%`,
              top: 0,
            }}
          >
            {/* Drip stream */}
            <div 
              className="w-[2px] bg-gradient-to-b from-blood-700 to-blood-900"
              style={{
                height: `${8 + Math.sin(frameCount * 0.05 + i) * 4}px`,
                opacity: 0.7,
              }}
            />
            {/* Drip bulb */}
            <div 
              className="w-2 h-3 rounded-full bg-gradient-to-b from-blood-600 to-blood-800 -ml-[3px]"
              style={{
                transform: `translateY(${Math.sin(frameCount * 0.08 + i * 2) * 2}px)`,
              }}
            />
          </div>
        ))}
      </div>

      {/* Main container */}
      <div className={`relative ${s.container} rounded-2xl overflow-hidden transition-all duration-300 ${isHovered ? 'scale-110' : 'scale-100'}`}>
        {/* Corrupted border */}
        <div 
          className="absolute inset-0 rounded-2xl border-2 border-blood-600"
          style={{
            clipPath: glitchActive 
              ? `polygon(0 0, ${100 + glitchOffset.r}% 0, 100% ${50 + glitchOffset.g}%, 100% 100%, 0 100%)`
              : 'none',
          }}
        />

        {/* Inner background with noise */}
        <div className="absolute inset-0 rounded-xl bg-black overflow-hidden">
          {/* Static noise overlay */}
          <div 
            className="absolute inset-0 opacity-20"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
              animation: glitchActive ? 'none' : undefined,
            }}
          />

          {/* CRT scan lines */}
          <div 
            className="absolute inset-0 pointer-events-none opacity-30"
            style={{
              backgroundImage: 'repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(0,0,0,0.3) 2px, rgba(0,0,0,0.3) 4px)',
            }}
          />

          {/* Main SVG */}
          <svg
            viewBox="0 0 100 100"
            className="absolute inset-0 w-full h-full"
            style={{ 
              filter: `drop-shadow(0 0 8px rgba(239, 68, 68, 0.6)) ${glitchActive ? 'blur(0.5px)' : ''}`,
            }}
          >
            <defs>
              {/* Gradients */}
              <radialGradient id="glitchEyeGradient" cx="50%" cy="40%" r="50%">
                <stop offset="0%" stopColor="#ffffff" />
                <stop offset="50%" stopColor="#fecaca" />
                <stop offset="100%" stopColor="#dc2626" />
              </radialGradient>

              <radialGradient id="glitchIrisGradient" cx="50%" cy="50%" r="50%">
                <stop offset="0%" stopColor="#ef4444" />
                <stop offset="60%" stopColor="#b91c1c" />
                <stop offset="100%" stopColor="#7f1d1d" />
              </radialGradient>

              <linearGradient id="bloodStream" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#dc2626" stopOpacity="0.9" />
                <stop offset="50%" stopColor="#b91c1c" stopOpacity="1" />
                <stop offset="100%" stopColor="#7f1d1d" stopOpacity="0.8" />
              </linearGradient>

              <linearGradient id="bloodDrip" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#ef4444" />
                <stop offset="100%" stopColor="#991b1b" />
              </linearGradient>

              {/* Glitch filter */}
              <filter id="glitchFilter" x="-20%" y="-20%" width="140%" height="140%">
                <feFlood floodColor="#ff0000" result="red" />
                <feFlood floodColor="#00ffff" result="cyan" />
                <feComposite in="red" in2="SourceGraphic" operator="in" result="redText" />
                <feOffset in="redText" dx={glitchOffset.r} dy="0" result="redOffset" />
                <feComposite in="cyan" in2="SourceGraphic" operator="in" result="cyanText" />
                <feOffset in="cyanText" dx={glitchOffset.b} dy="0" result="cyanOffset" />
                <feMerge>
                  <feMergeNode in="redOffset" />
                  <feMergeNode in="cyanOffset" />
                  <feMergeNode in="SourceGraphic" />
                </feMerge>
              </filter>

              {/* Blood glow */}
              <filter id="bloodGlow2" x="-100%" y="-100%" width="300%" height="300%">
                <feGaussianBlur stdDeviation="1" result="blur" />
                <feFlood floodColor="#dc2626" floodOpacity="0.8" />
                <feComposite in2="blur" operator="in" />
                <feMerge>
                  <feMergeNode />
                  <feMergeNode in="SourceGraphic" />
                </feMerge>
              </filter>

              {/* Clip path for eye */}
              <clipPath id="glitchEyeClip">
                <ellipse cx="50" cy="45" rx="28" ry="18" />
              </clipPath>
            </defs>

            {/* RGB split eye layers when glitching */}
            {glitchActive && (
              <>
                <g style={{ transform: `translate(${glitchOffset.r}px, 0)`, opacity: 0.5 }}>
                  <ellipse cx="50" cy="45" rx="28" ry="18" fill="none" stroke="#ff0000" strokeWidth="2" />
                </g>
                <g style={{ transform: `translate(${glitchOffset.b}px, 0)`, opacity: 0.5 }}>
                  <ellipse cx="50" cy="45" rx="28" ry="18" fill="none" stroke="#00ffff" strokeWidth="2" />
                </g>
              </>
            )}

            {/* Main eye */}
            <g clipPath="url(#glitchEyeClip)">
              {/* Eyeball - bloodshot */}
              <ellipse cx="50" cy="45" rx="28" ry="18" fill="url(#glitchEyeGradient)" />

              {/* Heavy blood vessels */}
              <g filter="url(#bloodGlow2)">
                <path d="M25 40 Q35 42, 40 45 Q38 44, 35 43" stroke="#dc2626" strokeWidth="1" fill="none" opacity="0.8" />
                <path d="M22 45 Q32 44, 38 45" stroke="#b91c1c" strokeWidth="0.8" fill="none" opacity="0.7" />
                <path d="M24 50 Q34 48, 42 46" stroke="#ef4444" strokeWidth="0.6" fill="none" opacity="0.6" />
                <path d="M75 40 Q65 42, 60 45 Q62 44, 65 43" stroke="#dc2626" strokeWidth="1" fill="none" opacity="0.8" />
                <path d="M78 45 Q68 44, 62 45" stroke="#b91c1c" strokeWidth="0.8" fill="none" opacity="0.7" />
                <path d="M76 50 Q66 48, 58 46" stroke="#ef4444" strokeWidth="0.6" fill="none" opacity="0.6" />
                {/* Additional bleeding vessels */}
                <path d="M28 35 Q38 38, 43 42" stroke="#dc2626" strokeWidth="0.5" fill="none" opacity="0.5" />
                <path d="M72 35 Q62 38, 57 42" stroke="#dc2626" strokeWidth="0.5" fill="none" opacity="0.5" />
              </g>

              {/* Iris */}
              <circle cx="50" cy="45" r="11" fill="url(#glitchIrisGradient)">
                <animate attributeName="r" values="11;10;11;12;11" dur="3s" repeatCount="indefinite" />
              </circle>

              {/* Iris corruption lines */}
              <g opacity="0.4">
                {[...Array(8)].map((_, i) => (
                  <line
                    key={i}
                    x1="50"
                    y1="45"
                    x2={50 + 11 * Math.cos((i * 45 * Math.PI) / 180)}
                    y2={45 + 11 * Math.sin((i * 45 * Math.PI) / 180)}
                    stroke="#450a0a"
                    strokeWidth="0.5"
                  />
                ))}
              </g>

              {/* Pupil */}
              <circle cx="50" cy="45" r="5" fill="#000">
                <animate attributeName="r" values="5;4;5;6;5" dur="3s" repeatCount="indefinite" />
              </circle>

              {/* Pupil void */}
              <circle cx="50" cy="45" r="3" fill="#000" />

              {/* Digital corruption in pupil */}
              {glitchActive && (
                <rect x="47" y="42" width="6" height="6" fill="#ef4444" opacity="0.5" />
              )}

              {/* Light reflection */}
              <ellipse cx="47" cy="42" rx="2" ry="1.5" fill="white" opacity="0.8">
                <animate attributeName="opacity" values="0.8;0.5;0.8" dur="2s" repeatCount="indefinite" />
              </ellipse>
            </g>

            {/* Eye outline */}
            <ellipse cx="50" cy="45" rx="28" ry="18" fill="none" stroke="#1a1a1a" strokeWidth="1.5" />

            {/* Blood tears streaming from eye */}
            <g filter="url(#bloodGlow2)">
              {/* Main blood streams from bottom of eye */}
              <path
                d={`M40 60 Q38 ${65 + Math.sin(frameCount * 0.05) * 2} 37 ${75 + Math.sin(frameCount * 0.03) * 3}`}
                stroke="url(#bloodStream)"
                strokeWidth="3"
                fill="none"
                strokeLinecap="round"
              />
              <path
                d={`M50 62 Q50 ${70 + Math.sin(frameCount * 0.04) * 2} 49 ${80 + Math.sin(frameCount * 0.035) * 3}`}
                stroke="url(#bloodStream)"
                strokeWidth="4"
                fill="none"
                strokeLinecap="round"
              />
              <path
                d={`M60 60 Q62 ${65 + Math.sin(frameCount * 0.045) * 2} 63 ${75 + Math.sin(frameCount * 0.04) * 3}`}
                stroke="url(#bloodStream)"
                strokeWidth="3"
                fill="none"
                strokeLinecap="round"
              />

              {/* Thinner branching streams */}
              <path
                d={`M43 63 Q41 70 40 ${78 + Math.sin(frameCount * 0.06) * 2}`}
                stroke="url(#bloodStream)"
                strokeWidth="1.5"
                fill="none"
                strokeLinecap="round"
                opacity="0.8"
              />
              <path
                d={`M57 63 Q59 70 60 ${78 + Math.sin(frameCount * 0.055) * 2}`}
                stroke="url(#bloodStream)"
                strokeWidth="1.5"
                fill="none"
                strokeLinecap="round"
                opacity="0.8"
              />

              {/* Blood pooling at bottom */}
              <ellipse 
                cx="50" 
                cy="92" 
                rx={15 + Math.sin(frameCount * 0.02) * 2}
                ry="4"
                fill="url(#bloodDrip)"
                opacity="0.7"
              >
                <animate attributeName="rx" values="15;17;15" dur="2s" repeatCount="indefinite" />
              </ellipse>
            </g>

            {/* Animated blood drops falling */}
            {bloodDrops.map((drop) => (
              <g key={drop.id} filter="url(#bloodGlow2)">
                <ellipse
                  cx={drop.x}
                  cy={drop.y}
                  rx={drop.size * 0.6}
                  ry={drop.size}
                  fill="url(#bloodDrip)"
                />
                {/* Drop trail */}
                <line
                  x1={drop.x}
                  y1={drop.y - drop.size * 2}
                  x2={drop.x}
                  y2={drop.y - drop.size}
                  stroke="#dc2626"
                  strokeWidth={drop.size * 0.5}
                  strokeLinecap="round"
                  opacity="0.5"
                />
              </g>
            ))}

            {/* Corner blood drips */}
            <g filter="url(#bloodGlow2)" opacity="0.6">
              <path d={`M5 20 Q5 ${30 + Math.sin(frameCount * 0.04) * 3} 5 40`} stroke="url(#bloodStream)" strokeWidth="2" fill="none" />
              <path d={`M95 20 Q95 ${30 + Math.sin(frameCount * 0.045) * 3} 95 40`} stroke="url(#bloodStream)" strokeWidth="2" fill="none" />
              <path d={`M20 5 Q20 ${10 + Math.sin(frameCount * 0.05) * 2} 20 18`} stroke="url(#bloodStream)" strokeWidth="1.5" fill="none" />
              <path d={`M80 5 Q80 ${10 + Math.sin(frameCount * 0.055) * 2} 80 18`} stroke="url(#bloodStream)" strokeWidth="1.5" fill="none" />
            </g>

            {/* Glitch artifacts */}
            {glitchActive && (
              <g>
                <rect x="10" y={30 + Math.random() * 20} width="30" height="2" fill="#ef4444" opacity="0.6" />
                <rect x="60" y={35 + Math.random() * 20} width="25" height="1" fill="#00ffff" opacity="0.4" />
                <rect x="20" y={50 + Math.random() * 10} width="15" height="3" fill="#ff0000" opacity="0.5" />
              </g>
            )}
          </svg>

          {/* Horizontal scan line */}
          <div 
            className="absolute left-0 right-0 h-[2px] pointer-events-none"
            style={{ 
              top: `${scanLine}%`,
              background: 'linear-gradient(90deg, transparent 0%, rgba(239, 68, 68, 0.8) 50%, transparent 100%)',
              boxShadow: '0 0 10px rgba(239, 68, 68, 0.5)',
            }}
          />

          {/* Vertical glitch bars */}
          {glitchActive && (
            <>
              <div 
                className="absolute top-0 bottom-0 w-[3px] bg-blood-600/40"
                style={{ left: `${20 + Math.random() * 20}%` }}
              />
              <div 
                className="absolute top-0 bottom-0 w-[2px] bg-cyan-500/30"
                style={{ left: `${60 + Math.random() * 20}%` }}
              />
            </>
          )}

          {/* Blood smear on edges */}
          <div className="absolute bottom-0 left-0 right-0 h-3 bg-gradient-to-t from-blood-900/50 to-transparent" />
          <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-b from-blood-900/30 to-transparent" />
        </div>
      </div>

      {/* Status indicator - glitchy */}
      <div className="absolute -top-1 -right-1 w-3 h-3">
        <span 
          className="absolute inset-0 bg-blood-700 rounded-full animate-ping opacity-75" 
          style={{ 
            animationDuration: '1.5s',
            transform: glitchActive ? `translate(${glitchOffset.r * 0.3}px, 0)` : 'none',
          }} 
        />
        <span className="absolute inset-0 bg-gradient-to-br from-blood-500 to-blood-700 rounded-full shadow-lg shadow-blood-600/50" />
      </div>
    </div>
  );
}
