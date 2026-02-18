'use client';

import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

interface ChessPieceEyeLogoProps {
  size?: number;
  className?: string;
}

export default function ChessPieceEyeLogo({ size = 60, className = '' }: ChessPieceEyeLogoProps) {
  const [showPawnText, setShowPawnText] = useState(false);
  const [fallenAngle, setFallenAngle] = useState(0);

  useEffect(() => {
    // Occasionally show "YOU ARE THE PAWN" text
    const textInterval = setInterval(() => {
      setShowPawnText(true);
      setTimeout(() => setShowPawnText(false), 2000);
    }, 8000);

    // King piece wobbles like it's about to fall
    const wobbleInterval = setInterval(() => {
      setFallenAngle(prev => prev === 0 ? 15 : 0);
    }, 3000);

    return () => {
      clearInterval(textInterval);
      clearInterval(wobbleInterval);
    };
  }, []);

  return (
    <div className={`relative ${className}`} style={{ width: size, height: size }}>
      {/* Checkered board background */}
      <svg
        viewBox="0 0 100 100"
        className="absolute inset-0 w-full h-full"
      >
        <defs>
          {/* Checkered pattern */}
          <pattern id="checkerboard" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
            <rect x="0" y="0" width="10" height="10" fill="#1a1a1a" />
            <rect x="10" y="0" width="10" height="10" fill="#0a0a0a" />
            <rect x="0" y="10" width="10" height="10" fill="#0a0a0a" />
            <rect x="10" y="10" width="10" height="10" fill="#1a1a1a" />
          </pattern>

          {/* Blood glow */}
          <filter id="chessBloodGlow" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="2" result="blur" />
            <feFlood floodColor="#dc2626" floodOpacity="0.8" />
            <feComposite in2="blur" operator="in" />
            <feMerge>
              <feMergeNode />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>

          {/* Crown gradient */}
          <linearGradient id="crownGradient" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#fbbf24" />
            <stop offset="50%" stopColor="#d97706" />
            <stop offset="100%" stopColor="#92400e" />
          </linearGradient>
        </defs>

        {/* Checkered board base */}
        <circle cx="50" cy="50" r="48" fill="url(#checkerboard)" stroke="#7f1d1d" strokeWidth="2" />

        {/* Animated ring */}
        <motion.circle
          cx="50"
          cy="50"
          r="45"
          fill="none"
          stroke="#dc2626"
          strokeWidth="0.5"
          strokeDasharray="8 4"
          animate={{ rotate: 360 }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          style={{ transformOrigin: '50px 50px' }}
        />
      </svg>

      {/* Fallen King piece with eye */}
      <motion.svg
        viewBox="0 0 100 100"
        className="absolute inset-0 w-full h-full"
        animate={{ rotate: fallenAngle }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
        style={{ transformOrigin: '70% 80%' }}
      >
        {/* King piece body */}
        <g filter="url(#chessBloodGlow)">
          {/* Base */}
          <ellipse cx="50" cy="78" rx="18" ry="6" fill="#1a1a1a" stroke="#333" strokeWidth="1" />
          <rect x="32" y="72" width="36" height="6" fill="#1a1a1a" stroke="#333" strokeWidth="0.5" />
          
          {/* Stem */}
          <path d="M38 72 L38 55 Q38 50 42 48 L58 48 Q62 50 62 55 L62 72" fill="#0f0f0f" stroke="#333" strokeWidth="0.5" />
          
          {/* Crown section */}
          <path d="M35 48 L35 35 L40 40 L45 32 L50 42 L55 32 L60 40 L65 35 L65 48 Z" fill="url(#crownGradient)" stroke="#92400e" strokeWidth="0.5" />
          
          {/* Cross on top */}
          <rect x="48" y="22" width="4" height="14" fill="url(#crownGradient)" stroke="#92400e" strokeWidth="0.3" />
          <rect x="44" y="26" width="12" height="4" fill="url(#crownGradient)" stroke="#92400e" strokeWidth="0.3" />
        </g>

        {/* THE EYE - in the center of the king */}
        <g>
          {/* Eye socket */}
          <ellipse cx="50" cy="58" rx="10" ry="7" fill="#0a0a0a" stroke="#7f1d1d" strokeWidth="1" />
          
          {/* Eye white */}
          <motion.ellipse
            cx="50"
            cy="58"
            rx="8"
            ry="5"
            fill="#f0f0f0"
            animate={{ scaleY: [1, 0.1, 1] }}
            transition={{ duration: 4, repeat: Infinity, repeatDelay: 3 }}
          />
          
          {/* Iris - blood red */}
          <circle cx="50" cy="58" r="4" fill="#7f1d1d" />
          
          {/* Pupil */}
          <motion.circle
            cx="50"
            cy="58"
            r="2"
            fill="#000"
            animate={{ r: [2, 2.5, 2] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
          
          {/* Eye highlight */}
          <circle cx="48" cy="56" r="1" fill="rgba(255,255,255,0.8)" />
          
          {/* Blood vessels in eye */}
          <path d="M42 58 Q45 57 47 58" stroke="#dc2626" strokeWidth="0.3" fill="none" opacity="0.6" />
          <path d="M53 58 Q55 59 58 58" stroke="#dc2626" strokeWidth="0.3" fill="none" opacity="0.6" />
        </g>

        {/* Blood dripping from king */}
        <motion.path
          d="M45 78 Q44 82 45 86 Q44 88 45 90"
          stroke="#dc2626"
          strokeWidth="2"
          fill="none"
          strokeLinecap="round"
          animate={{ opacity: [0.5, 1, 0.5], pathLength: [0.5, 1, 0.5] }}
          transition={{ duration: 3, repeat: Infinity }}
        />
        <motion.circle
          cx="45"
          cy="92"
          r="2"
          fill="#dc2626"
          animate={{ cy: [90, 95, 90], opacity: [1, 0, 1] }}
          transition={{ duration: 2, repeat: Infinity }}
        />
      </motion.svg>

      {/* Fallen pawn pieces scattered */}
      <svg viewBox="0 0 100 100" className="absolute inset-0 w-full h-full opacity-40">
        {/* Fallen pawn 1 */}
        <g transform="translate(15, 75) rotate(-70)">
          <ellipse cx="0" cy="8" rx="4" ry="2" fill="#333" />
          <rect x="-3" y="4" width="6" height="4" fill="#222" />
          <circle cx="0" cy="2" r="3" fill="#222" />
        </g>
        {/* Fallen pawn 2 */}
        <g transform="translate(80, 80) rotate(60)">
          <ellipse cx="0" cy="8" rx="4" ry="2" fill="#333" />
          <rect x="-3" y="4" width="6" height="4" fill="#222" />
          <circle cx="0" cy="2" r="3" fill="#222" />
        </g>
      </svg>

      {/* "YOU ARE THE PAWN" text */}
      <motion.div
        className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 whitespace-nowrap"
        initial={{ opacity: 0, y: -5 }}
        animate={{ opacity: showPawnText ? 1 : 0, y: showPawnText ? 0 : -5 }}
        transition={{ duration: 0.3 }}
      >
        <span 
          className="text-xs font-mono tracking-widest"
          style={{ 
            color: '#dc2626',
            textShadow: '0 0 10px rgba(220, 38, 38, 0.8)',
            animation: showPawnText ? 'glitchText 0.1s infinite' : 'none'
          }}
        >
          YOU ARE THE PAWN
        </span>
      </motion.div>

      {/* Glitch text animation */}
      <style jsx>{`
        @keyframes glitchText {
          0%, 100% { transform: translate(0); }
          25% { transform: translate(-1px, 1px); }
          50% { transform: translate(1px, -1px); }
          75% { transform: translate(-1px, -1px); }
        }
      `}</style>
    </div>
  );
}
