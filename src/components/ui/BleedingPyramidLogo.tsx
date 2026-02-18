'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useEffect, useState, useRef } from 'react';

interface BloodDrop {
  id: number;
  x: number;
  delay: number;
  duration: number;
  size: number;
}

interface FallingWord {
  id: number;
  word: string;
  x: number;
  delay: number;
}

interface BleedingPyramidLogoProps {
  size?: number;
  className?: string;
  showWords?: boolean;
}

const WORDS = [
  "LIES",
  "DEATH", 
  "CONTROL",
  "POISON",
  "SILENCE",
  "PROFIT",
  "DECEIT",
  "GREED",
  "FEAR",
  "COVER-UP",
  "CORRUPTION",
  "BETRAYAL"
];

export default function BleedingPyramidLogo({ 
  size = 60, 
  className = '',
  showWords = true 
}: BleedingPyramidLogoProps) {
  const [bloodDrops, setBloodDrops] = useState<BloodDrop[]>([]);
  const [fallingWords, setFallingWords] = useState<FallingWord[]>([]);
  const [isHovered, setIsHovered] = useState(false);
  const dropIdRef = useRef(0);
  const wordIdRef = useRef(0);

  // Generate blood drops from the pyramid tip
  useEffect(() => {
    const createDrop = () => {
      const newDrop: BloodDrop = {
        id: dropIdRef.current++,
        x: 50 + (Math.random() - 0.5) * 10, // Centered around tip
        delay: 0,
        duration: 1.5 + Math.random() * 1,
        size: 2 + Math.random() * 3,
      };
      
      setBloodDrops(prev => [...prev.slice(-15), newDrop]);
    };

    const interval = setInterval(createDrop, 400);
    return () => clearInterval(interval);
  }, []);

  // Generate falling words periodically
  useEffect(() => {
    if (!showWords) return;

    const createWord = () => {
      const newWord: FallingWord = {
        id: wordIdRef.current++,
        word: WORDS[Math.floor(Math.random() * WORDS.length)],
        x: 20 + Math.random() * 60,
        delay: 0,
      };
      
      setFallingWords(prev => [...prev.slice(-5), newWord]);
    };

    const interval = setInterval(createWord, 3000);
    // Create first word after a short delay
    const timeout = setTimeout(createWord, 1000);
    
    return () => {
      clearInterval(interval);
      clearTimeout(timeout);
    };
  }, [showWords]);

  // Cleanup old drops
  useEffect(() => {
    const cleanup = setInterval(() => {
      setBloodDrops(prev => prev.slice(-15));
      setFallingWords(prev => prev.slice(-5));
    }, 5000);
    return () => clearInterval(cleanup);
  }, []);

  return (
    <div 
      className={`relative ${className}`} 
      style={{ width: size, height: size }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <svg
        viewBox="0 0 100 120"
        className="w-full h-full overflow-visible"
      >
        <defs>
          {/* Blood gradient */}
          <linearGradient id="bloodGradient" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#dc2626" />
            <stop offset="50%" stopColor="#991b1b" />
            <stop offset="100%" stopColor="#450a0a" />
          </linearGradient>

          {/* Pyramid gradient - inverted (dark at top, light at bottom) */}
          <linearGradient id="pyramidGradient" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#1a1a1a" />
            <stop offset="40%" stopColor="#2a2a2a" />
            <stop offset="100%" stopColor="#3a3a3a" />
          </linearGradient>

          {/* Eye gradient */}
          <radialGradient id="eyeGlow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#ef4444" />
            <stop offset="60%" stopColor="#dc2626" />
            <stop offset="100%" stopColor="#991b1b" />
          </radialGradient>

          {/* Blood drip filter */}
          <filter id="bloodDrip" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="0.5" result="blur" />
            <feFlood floodColor="#dc2626" floodOpacity="0.6" />
            <feComposite in2="blur" operator="in" />
            <feMerge>
              <feMergeNode />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>

          {/* Glow filter */}
          <filter id="pyramidGlow" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="3" result="blur" />
            <feFlood floodColor="#dc2626" floodOpacity="0.4" />
            <feComposite in2="blur" operator="in" />
            <feMerge>
              <feMergeNode />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>

          {/* Clip path for blood inside pyramid */}
          <clipPath id="pyramidClip">
            <polygon points="50,5 15,75 85,75" />
          </clipPath>
        </defs>

        {/* Outer glow ring */}
        <motion.circle
          cx="50"
          cy="45"
          r="42"
          fill="none"
          stroke="#dc2626"
          strokeWidth="0.5"
          strokeDasharray="4 4"
          opacity="0.3"
          animate={{ rotate: 360 }}
          transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
          style={{ transformOrigin: '50px 45px' }}
        />

        {/* INVERTED PYRAMID (point at bottom) */}
        <g filter="url(#pyramidGlow)">
          {/* Main pyramid body - INVERTED */}
          <motion.polygon
            points="15,25 85,25 50,95"
            fill="url(#pyramidGradient)"
            stroke="#dc2626"
            strokeWidth="1.5"
            animate={{
              filter: isHovered ? 'brightness(1.2)' : 'brightness(1)',
            }}
          />

          {/* Left face shading */}
          <polygon
            points="15,25 50,25 50,95"
            fill="rgba(0,0,0,0.3)"
          />

          {/* Blood pooling at tip */}
          <motion.ellipse
            cx="50"
            cy="95"
            rx="8"
            ry="3"
            fill="#7f1d1d"
            animate={{
              rx: [8, 10, 8],
              opacity: [0.8, 1, 0.8],
            }}
            transition={{ duration: 2, repeat: Infinity }}
          />

          {/* Brick/stone lines */}
          <g stroke="#1a1a1a" strokeWidth="0.5" opacity="0.5">
            <line x1="22" y1="35" x2="78" y2="35" />
            <line x1="28" y1="45" x2="72" y2="45" />
            <line x1="34" y1="55" x2="66" y2="55" />
            <line x1="40" y1="65" x2="60" y2="65" />
            <line x1="45" y1="75" x2="55" y2="75" />
            {/* Vertical lines */}
            <line x1="50" y1="25" x2="50" y2="95" />
            <line x1="35" y1="25" x2="43" y2="75" />
            <line x1="65" y1="25" x2="57" y2="75" />
          </g>
        </g>

        {/* ALL-SEEING EYE in upper portion of inverted pyramid */}
        <g>
          {/* Eye outer shape */}
          <motion.ellipse
            cx="50"
            cy="42"
            rx="14"
            ry="10"
            fill="none"
            stroke="#dc2626"
            strokeWidth="1.5"
            animate={{
              ry: isHovered ? [10, 12, 10] : 10,
            }}
            transition={{ duration: 0.5 }}
          />

          {/* Eye white */}
          <ellipse
            cx="50"
            cy="42"
            rx="12"
            ry="8"
            fill="#1a1a1a"
          />

          {/* Iris */}
          <motion.circle
            cx="50"
            cy="42"
            r="6"
            fill="url(#eyeGlow)"
            animate={{
              scale: isHovered ? [1, 1.1, 1] : 1,
            }}
            transition={{ duration: 0.3 }}
          />

          {/* Pupil */}
          <motion.circle
            cx="50"
            cy="42"
            r="3"
            fill="#0a0a0a"
            animate={{
              r: isHovered ? [3, 2, 3] : 3,
            }}
            transition={{ duration: 0.3 }}
          />

          {/* Eye shine */}
          <circle cx="52" cy="40" r="1.5" fill="rgba(255,255,255,0.6)" />
          <circle cx="47" cy="43" r="0.8" fill="rgba(255,255,255,0.3)" />

          {/* Rays from eye */}
          <g stroke="#dc2626" strokeWidth="0.5" opacity="0.4">
            {[...Array(8)].map((_, i) => {
              const angle = (i * 45 - 90) * (Math.PI / 180);
              const x1 = 50 + Math.cos(angle) * 16;
              const y1 = 42 + Math.sin(angle) * 11;
              const x2 = 50 + Math.cos(angle) * 22;
              const y2 = 42 + Math.sin(angle) * 15;
              return (
                <motion.line
                  key={i}
                  x1={x1}
                  y1={y1}
                  x2={x2}
                  y2={y2}
                  animate={{
                    opacity: [0.3, 0.6, 0.3],
                  }}
                  transition={{
                    duration: 2,
                    delay: i * 0.2,
                    repeat: Infinity,
                  }}
                />
              );
            })}
          </g>
        </g>

        {/* Blood dripping from the pyramid tip */}
        <AnimatePresence>
          {bloodDrops.map((drop) => (
            <motion.g key={drop.id} filter="url(#bloodDrip)">
              {/* Main drop */}
              <motion.ellipse
                cx={drop.x}
                cy={95}
                rx={drop.size * 0.6}
                ry={drop.size}
                fill="#dc2626"
                initial={{ cy: 95, opacity: 1, ry: drop.size }}
                animate={{ 
                  cy: 130,
                  opacity: [1, 1, 0],
                  ry: [drop.size, drop.size * 1.5, drop.size * 0.5],
                }}
                exit={{ opacity: 0 }}
                transition={{ 
                  duration: drop.duration,
                  ease: "easeIn",
                }}
              />
              {/* Blood trail */}
              <motion.line
                x1={drop.x}
                y1={95}
                x2={drop.x}
                y2={95}
                stroke="#991b1b"
                strokeWidth={drop.size * 0.4}
                strokeLinecap="round"
                initial={{ y2: 95 }}
                animate={{ y2: 115 }}
                transition={{ 
                  duration: drop.duration * 0.5,
                  ease: "easeOut",
                }}
                opacity={0.6}
              />
            </motion.g>
          ))}
        </AnimatePresence>

        {/* Blood streaks on pyramid surface */}
        <g opacity="0.6">
          <motion.path
            d="M50,60 Q48,70 50,85 Q51,90 50,95"
            fill="none"
            stroke="#7f1d1d"
            strokeWidth="2"
            strokeLinecap="round"
            animate={{
              opacity: [0.4, 0.7, 0.4],
            }}
            transition={{ duration: 3, repeat: Infinity }}
          />
          <motion.path
            d="M45,65 Q44,75 46,85"
            fill="none"
            stroke="#991b1b"
            strokeWidth="1.5"
            strokeLinecap="round"
            animate={{
              opacity: [0.3, 0.5, 0.3],
            }}
            transition={{ duration: 4, repeat: Infinity, delay: 1 }}
          />
          <motion.path
            d="M55,65 Q56,75 54,85"
            fill="none"
            stroke="#991b1b"
            strokeWidth="1.5"
            strokeLinecap="round"
            animate={{
              opacity: [0.3, 0.5, 0.3],
            }}
            transition={{ duration: 3.5, repeat: Infinity, delay: 0.5 }}
          />
        </g>
      </svg>

      {/* Falling bleeding words */}
      {showWords && (
        <div className="absolute inset-0 overflow-visible pointer-events-none">
          <AnimatePresence>
            {fallingWords.map((wordData) => (
              <motion.div
                key={wordData.id}
                className="absolute text-xs font-black tracking-wider"
                style={{
                  left: `${wordData.x}%`,
                  top: '100%',
                  transform: 'translateX(-50%)',
                  textShadow: '0 0 10px rgba(220, 38, 38, 0.8), 0 2px 4px rgba(0,0,0,0.5)',
                }}
                initial={{ 
                  y: 0, 
                  opacity: 0,
                  scale: 0.5,
                }}
                animate={{ 
                  y: [0, 20, 50, 80],
                  opacity: [0, 1, 1, 0],
                  scale: [0.5, 1, 1, 0.8],
                  color: ['#ef4444', '#dc2626', '#991b1b', '#450a0a'],
                }}
                exit={{ opacity: 0 }}
                transition={{ 
                  duration: 3,
                  ease: "easeIn",
                }}
              >
                <span className="relative">
                  {wordData.word}
                  {/* Blood drip from text */}
                  <motion.span
                    className="absolute -bottom-2 left-1/2 w-0.5 bg-gradient-to-b from-blood-700 to-transparent"
                    initial={{ height: 0 }}
                    animate={{ height: [0, 8, 15, 8] }}
                    transition={{ duration: 2, delay: 0.5 }}
                    style={{ transform: 'translateX(-50%)' }}
                  />
                </span>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      )}

      {/* Hover effect - intensify bleeding */}
      {isHovered && (
        <motion.div
          className="absolute inset-0 rounded-full"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          style={{
            background: 'radial-gradient(circle, rgba(220, 38, 38, 0.2) 0%, transparent 70%)',
          }}
        />
      )}
    </div>
  );
}
