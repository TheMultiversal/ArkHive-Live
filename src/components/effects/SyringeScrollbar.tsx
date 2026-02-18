'use client';

import { useEffect, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

export default function DNAScrollbar() {
  const { scrollYProgress } = useScroll();
  const [isVisible, setIsVisible] = useState(false);
  const [scrollPercent, setScrollPercent] = useState(0);
  
  const rotation = useTransform(scrollYProgress, [0, 1], [0, 720]);
  const glowIntensity = useTransform(scrollYProgress, [0, 0.5, 1], [0.3, 1, 0.3]);

  useEffect(() => {
    const checkScrollable = () => {
      setIsVisible(document.documentElement.scrollHeight > window.innerHeight);
    };
    
    checkScrollable();
    window.addEventListener('resize', checkScrollable);
    
    const unsubscribe = scrollYProgress.on('change', v => setScrollPercent(Math.round(v * 100)));
    
    return () => {
      window.removeEventListener('resize', checkScrollable);
      unsubscribe();
    };
  }, [scrollYProgress]);

  // Generate DNA helix points
  const generateHelix = (phase: number) => {
    const points1: string[] = [];
    const points2: string[] = [];
    const numPoints = 30;
    
    for (let i = 0; i < numPoints; i++) {
      const y = 20 + (i / numPoints) * 260;
      const angle = (i / numPoints) * Math.PI * 4 + phase;
      const x1 = 20 + Math.sin(angle) * 12;
      const x2 = 20 + Math.sin(angle + Math.PI) * 12;
      points1.push(`${x1},${y}`);
      points2.push(`${x2},${y}`);
    }
    
    return { strand1: points1.join(' '), strand2: points2.join(' ') };
  };

  return (
    <div 
      className="fixed right-2 top-1/2 transform -translate-y-1/2 z-[9998] pointer-events-none transition-opacity duration-300"
      style={{ opacity: isVisible ? 1 : 0 }}
    >
      <motion.svg
        width="44"
        height="300"
        viewBox="0 0 44 300"
        className="drop-shadow-lg"
        style={{ filter: 'drop-shadow(0 0 10px rgba(220, 38, 38, 0.5))' }}
      >
        <defs>
          <linearGradient id="dnaStrand1" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#ef4444" />
            <stop offset="50%" stopColor="#dc2626" />
            <stop offset="100%" stopColor="#991b1b" />
          </linearGradient>
          <linearGradient id="dnaStrand2" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#991b1b" />
            <stop offset="50%" stopColor="#7f1d1d" />
            <stop offset="100%" stopColor="#450a0a" />
          </linearGradient>
          <filter id="dnaGlow">
            <feGaussianBlur stdDeviation="2" result="blur" />
            <feFlood floodColor="#dc2626" floodOpacity="0.6" />
            <feComposite in2="blur" operator="in" />
            <feMerge>
              <feMergeNode />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {/* Background track */}
        <rect x="17" y="15" width="6" height="270" rx="3" fill="#1a1a1a" opacity="0.5" />

        {/* DNA Double Helix */}
        <motion.g style={{ rotate: rotation, transformOrigin: '20px 150px' }}>
          {/* Generate rungs (base pairs) */}
          {Array.from({ length: 15 }).map((_, i) => {
            const y = 25 + i * 17;
            const phase = scrollPercent * 0.05;
            const angle = (i / 15) * Math.PI * 4 + phase;
            const x1 = 20 + Math.sin(angle) * 10;
            const x2 = 20 + Math.sin(angle + Math.PI) * 10;
            const visible = Math.abs(Math.cos(angle)) > 0.3;
            
            return visible ? (
              <motion.line
                key={i}
                x1={x1}
                y1={y}
                x2={x2}
                y2={y}
                stroke={i % 2 === 0 ? '#ef4444' : '#f87171'}
                strokeWidth="2"
                opacity={0.6}
                strokeLinecap="round"
              />
            ) : null;
          })}

          {/* Strand 1 */}
          <motion.polyline
            points={generateHelix(scrollPercent * 0.05).strand1}
            fill="none"
            stroke="url(#dnaStrand1)"
            strokeWidth="3"
            strokeLinecap="round"
            filter="url(#dnaGlow)"
          />

          {/* Strand 2 */}
          <motion.polyline
            points={generateHelix(scrollPercent * 0.05).strand2}
            fill="none"
            stroke="url(#dnaStrand2)"
            strokeWidth="3"
            strokeLinecap="round"
            filter="url(#dnaGlow)"
          />

          {/* Nucleotide dots */}
          {Array.from({ length: 12 }).map((_, i) => {
            const y = 30 + i * 20;
            const phase = scrollPercent * 0.05;
            const angle = (i / 12) * Math.PI * 4 + phase;
            const x1 = 20 + Math.sin(angle) * 12;
            const x2 = 20 + Math.sin(angle + Math.PI) * 12;
            
            return (
              <g key={i}>
                <circle cx={x1} cy={y} r="3" fill="#ef4444" opacity={0.8 + Math.sin(angle) * 0.2} />
                <circle cx={x2} cy={y} r="3" fill="#991b1b" opacity={0.8 - Math.sin(angle) * 0.2} />
              </g>
            );
          })}
        </motion.g>

        {/* Progress indicator */}
        <motion.rect
          x="38"
          y="20"
          width="4"
          height="260"
          rx="2"
          fill="#1a1a1a"
          stroke="#333"
          strokeWidth="0.5"
        />
        <motion.rect
          x="38"
          y="20"
          width="4"
          rx="2"
          fill="url(#dnaStrand1)"
          style={{ height: `${scrollPercent * 2.6}px` }}
        />

        {/* Top cap */}
        <circle cx="20" cy="15" r="6" fill="#1a1a1a" stroke="#dc2626" strokeWidth="1" />
        <text x="20" y="18" textAnchor="middle" fill="#dc2626" fontSize="6" fontFamily="monospace">DNA</text>

        {/* Bottom cap */}
        <circle cx="20" cy="285" r="6" fill="#1a1a1a" stroke="#dc2626" strokeWidth="1" />
        
        {/* Percentage display */}
        <text x="20" y="298" textAnchor="middle" fill="#dc2626" fontSize="8" fontFamily="monospace" opacity="0.8">
          {scrollPercent}%
        </text>
      </motion.svg>

      {/* Side label */}
      <div className="absolute -left-12 top-1/2 transform -translate-y-1/2 -rotate-90 font-mono text-[10px] text-blood-600/50 whitespace-nowrap">
        GENETIC CORRUPTION
      </div>
    </div>
  );
}
