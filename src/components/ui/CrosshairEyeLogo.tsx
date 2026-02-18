"use client";

import { useEffect, useState } from "react";

interface CrosshairEyeLogoProps {
  size?: "sm" | "md" | "lg";
  className?: string;
}

export default function CrosshairEyeLogo({ size = "md", className = "" }: CrosshairEyeLogoProps) {
  const [isHovered, setIsHovered] = useState(false);
  const [scanAngle, setScanAngle] = useState(0);
  const [lockingOn, setLockingOn] = useState(false);
  const [targetData, setTargetData] = useState({ x: 50, y: 50 });

  // Rotating scan animation
  useEffect(() => {
    const interval = setInterval(() => {
      setScanAngle((prev) => (prev + 1) % 360);
    }, 30);
    return () => clearInterval(interval);
  }, []);

  // Subtle target drift
  useEffect(() => {
    const interval = setInterval(() => {
      setTargetData({
        x: 50 + Math.sin(Date.now() * 0.001) * 2,
        y: 50 + Math.cos(Date.now() * 0.0015) * 2,
      });
    }, 50);
    return () => clearInterval(interval);
  }, []);

  // Random lock-on effect
  useEffect(() => {
    const interval = setInterval(() => {
      if (Math.random() > 0.9) {
        setLockingOn(true);
        setTimeout(() => setLockingOn(false), 500);
      }
    }, 2000);
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
      {/* Outer scanning glow */}
      <div className="absolute inset-0 scale-150">
        <div 
          className="absolute inset-0 rounded-full opacity-30"
          style={{
            background: `conic-gradient(from ${scanAngle}deg, transparent, rgba(239, 68, 68, 0.5), transparent)`,
          }}
        />
        <div className="absolute inset-0 bg-blood-600/10 rounded-full blur-xl animate-pulse" style={{ animationDuration: '2s' }} />
      </div>

      {/* Lock-on flash */}
      {lockingOn && (
        <div className="absolute inset-0 bg-blood-600/40 rounded-2xl animate-pulse z-20" />
      )}

      {/* Main container */}
      <div className={`relative ${s.container} rounded-2xl overflow-hidden transition-all duration-300 ${isHovered ? 'scale-110' : 'scale-100'}`}>
        {/* Tactical border */}
        <div className="absolute inset-0 rounded-2xl border-2 border-blood-600/50" />
        
        {/* Corner brackets */}
        <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-blood-600" />
        <div className="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 border-blood-600" />
        <div className="absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 border-blood-600" />
        <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-blood-600" />

        {/* Inner background */}
        <div className="absolute inset-[2px] rounded-xl bg-gradient-to-br from-dark-900 via-dark-950 to-black overflow-hidden">
          {/* Grid overlay */}
          <div 
            className="absolute inset-0 opacity-10"
            style={{
              backgroundImage: `
                linear-gradient(rgba(239, 68, 68, 0.3) 1px, transparent 1px),
                linear-gradient(90deg, rgba(239, 68, 68, 0.3) 1px, transparent 1px)
              `,
              backgroundSize: '10% 10%',
            }}
          />

          {/* Main SVG */}
          <svg
            viewBox="0 0 100 100"
            className="absolute inset-0 w-full h-full"
            style={{ filter: 'drop-shadow(0 0 5px rgba(239, 68, 68, 0.5))' }}
          >
            <defs>
              {/* Gradients */}
              <radialGradient id="chEyeballGradient" cx="50%" cy="40%" r="50%">
                <stop offset="0%" stopColor="#ffffff" />
                <stop offset="70%" stopColor="#e5e5e5" />
                <stop offset="100%" stopColor="#a3a3a3" />
              </radialGradient>

              <radialGradient id="chIrisGradient" cx="50%" cy="50%" r="50%">
                <stop offset="0%" stopColor="#ef4444">
                  <animate attributeName="stop-color" values="#ef4444;#dc2626;#ef4444" dur="2s" repeatCount="indefinite" />
                </stop>
                <stop offset="60%" stopColor="#b91c1c" />
                <stop offset="100%" stopColor="#7f1d1d" />
              </radialGradient>

              <radialGradient id="chPupilGradient" cx="30%" cy="30%" r="60%">
                <stop offset="0%" stopColor="#1a1a1a" />
                <stop offset="100%" stopColor="#000000" />
              </radialGradient>

              {/* Scanning beam gradient */}
              <linearGradient id="scanBeam" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="transparent" />
                <stop offset="50%" stopColor="#ef4444" stopOpacity="0.8" />
                <stop offset="100%" stopColor="transparent" />
              </linearGradient>

              {/* Glow filter */}
              <filter id="chGlow" x="-50%" y="-50%" width="200%" height="200%">
                <feGaussianBlur stdDeviation="1.5" result="blur" />
                <feFlood floodColor="#ef4444" floodOpacity="0.6" />
                <feComposite in2="blur" operator="in" />
                <feMerge>
                  <feMergeNode />
                  <feMergeNode in="SourceGraphic" />
                </feMerge>
              </filter>

              {/* Clip for eye */}
              <clipPath id="chEyeClip">
                <ellipse cx="50" cy="50" rx="22" ry="16" />
              </clipPath>
            </defs>

            {/* Outer rotating crosshair ring */}
            <g style={{ transform: `rotate(${scanAngle}deg)`, transformOrigin: '50px 50px' }}>
              <circle cx="50" cy="50" r="42" fill="none" stroke="#ef4444" strokeWidth="0.5" strokeDasharray="4 8" opacity="0.5" />
              {/* Tick marks */}
              {[0, 90, 180, 270].map((angle) => (
                <line
                  key={angle}
                  x1={50 + 38 * Math.cos((angle * Math.PI) / 180)}
                  y1={50 + 38 * Math.sin((angle * Math.PI) / 180)}
                  x2={50 + 44 * Math.cos((angle * Math.PI) / 180)}
                  y2={50 + 44 * Math.sin((angle * Math.PI) / 180)}
                  stroke="#ef4444"
                  strokeWidth="2"
                  opacity="0.8"
                />
              ))}
            </g>

            {/* Static crosshairs */}
            <g filter="url(#chGlow)">
              {/* Horizontal crosshair */}
              <line x1="5" y1="50" x2="30" y2="50" stroke="#ef4444" strokeWidth="1.5" />
              <line x1="70" y1="50" x2="95" y2="50" stroke="#ef4444" strokeWidth="1.5" />
              
              {/* Vertical crosshair */}
              <line x1="50" y1="5" x2="50" y2="30" stroke="#ef4444" strokeWidth="1.5" />
              <line x1="50" y1="70" x2="50" y2="95" stroke="#ef4444" strokeWidth="1.5" />

              {/* Center target brackets */}
              <path d="M35 35 L35 40 L40 40" fill="none" stroke="#ef4444" strokeWidth="1.5" />
              <path d="M65 35 L65 40 L60 40" fill="none" stroke="#ef4444" strokeWidth="1.5" />
              <path d="M35 65 L35 60 L40 60" fill="none" stroke="#ef4444" strokeWidth="1.5" />
              <path d="M65 65 L65 60 L60 60" fill="none" stroke="#ef4444" strokeWidth="1.5" />
            </g>

            {/* The Eye - being targeted */}
            <g clipPath="url(#chEyeClip)">
              {/* Eyeball */}
              <ellipse cx={targetData.x} cy={targetData.y} rx="22" ry="16" fill="url(#chEyeballGradient)" />

              {/* Blood vessels */}
              <g opacity="0.3">
                <path d="M30 45 Q38 48, 42 50" stroke="#dc2626" strokeWidth="0.4" fill="none" />
                <path d="M28 52 Q36 50, 40 49" stroke="#b91c1c" strokeWidth="0.3" fill="none" />
                <path d="M70 45 Q62 48, 58 50" stroke="#dc2626" strokeWidth="0.4" fill="none" />
                <path d="M72 52 Q64 50, 60 49" stroke="#b91c1c" strokeWidth="0.3" fill="none" />
              </g>

              {/* Iris */}
              <circle cx={targetData.x} cy={targetData.y} r="10" fill="url(#chIrisGradient)">
                <animate attributeName="r" values="10;9;10;11;10" dur="3s" repeatCount="indefinite" />
              </circle>

              {/* Iris detail */}
              <circle cx={targetData.x} cy={targetData.y} r="8" fill="none" stroke="#7f1d1d" strokeWidth="0.3" opacity="0.5" />

              {/* Pupil */}
              <circle cx={targetData.x} cy={targetData.y} r="5" fill="url(#chPupilGradient)">
                <animate attributeName="r" values="5;4;5;6;5" dur="3s" repeatCount="indefinite" />
              </circle>

              {/* Inner void */}
              <circle cx={targetData.x} cy={targetData.y} r="3" fill="#000" />

              {/* Light reflections */}
              <ellipse cx={targetData.x - 3} cy={targetData.y - 3} rx="2" ry="1.5" fill="white" opacity="0.9" />
              <circle cx={targetData.x + 2} cy={targetData.y + 2} r="0.8" fill="white" opacity="0.5" />
            </g>

            {/* Eye outline */}
            <ellipse cx="50" cy="50" rx="22" ry="16" fill="none" stroke="#333" strokeWidth="1" />

            {/* Targeting data readout simulation */}
            <g opacity="0.7" className="text-[4px]" fill="#ef4444">
              <text x="8" y="15" fontSize="4" fontFamily="monospace">TGT:LOCK</text>
              <text x="70" y="15" fontSize="4" fontFamily="monospace">{lockingOn ? "■■■■" : "■■□□"}</text>
              <text x="8" y="92" fontSize="4" fontFamily="monospace">ID:ARKH1V3</text>
              <text x="70" y="92" fontSize="4" fontFamily="monospace">ACTIVE</text>
            </g>

            {/* Pulsing center dot when locked */}
            {lockingOn && (
              <circle cx="50" cy="50" r="2" fill="#ef4444">
                <animate attributeName="r" values="2;4;2" dur="0.25s" repeatCount="indefinite" />
                <animate attributeName="opacity" values="1;0.5;1" dur="0.25s" repeatCount="indefinite" />
              </circle>
            )}

            {/* Scanning beam */}
            <line
              x1="50"
              y1="50"
              x2={50 + 45 * Math.cos((scanAngle * Math.PI) / 180)}
              y2={50 + 45 * Math.sin((scanAngle * Math.PI) / 180)}
              stroke="#ef4444"
              strokeWidth="0.5"
              opacity="0.3"
            />
          </svg>

          {/* HUD scan line */}
          <div 
            className="absolute left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-blood-600 to-transparent opacity-50"
            style={{ 
              top: `${50 + Math.sin(scanAngle * 0.05) * 30}%`,
            }}
          />
        </div>
      </div>

      {/* Status indicator */}
      <div className="absolute -top-1 -right-1 w-3 h-3">
        <span className={`absolute inset-0 rounded-full ${lockingOn ? 'bg-blood-500 animate-none' : 'bg-blood-700 animate-ping'}`} style={{ animationDuration: '2s' }} />
        <span className="absolute inset-0 bg-gradient-to-br from-blood-500 to-blood-700 rounded-full shadow-lg shadow-blood-600/50" />
      </div>
    </div>
  );
}
