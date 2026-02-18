'use client';

import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { useEffect, useState, useRef } from 'react';

export default function CrystalGridBackground() {
  const containerRef = useRef<HTMLDivElement>(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const smoothX = useSpring(mouseX, { stiffness: 30, damping: 20 });
  const smoothY = useSpring(mouseY, { stiffness: 30, damping: 20 });
  
  // Transform mouse position into grid offsets
  const gridOffsetX = useTransform(smoothX, [0, typeof window !== 'undefined' ? window.innerWidth : 1920], [-20, 20]);
  const gridOffsetY = useTransform(smoothY, [0, typeof window !== 'undefined' ? window.innerHeight : 1080], [-20, 20]);
  
  const [pulsePoints, setPulsePoints] = useState<{ x: number; y: number; id: number }[]>([]);
  const [glowIntensity, setGlowIntensity] = useState(0.3);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
      
      // Increase glow intensity based on movement speed
      setGlowIntensity(prev => Math.min(0.8, prev + 0.05));
    };

    // Decay glow intensity
    const decayInterval = setInterval(() => {
      setGlowIntensity(prev => Math.max(0.3, prev - 0.02));
    }, 100);

    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      clearInterval(decayInterval);
    };
  }, [mouseX, mouseY]);

  // Create pulse points at cursor
  useEffect(() => {
    const interval = setInterval(() => {
      const x = smoothX.get();
      const y = smoothY.get();
      if (x && y && Math.random() > 0.5) {
        const newPulse = {
          x: (x / (typeof window !== 'undefined' ? window.innerWidth : 1920)) * 100,
          y: (y / (typeof window !== 'undefined' ? window.innerHeight : 1080)) * 100,
          id: Date.now(),
        };
        setPulsePoints(prev => [...prev.slice(-4), newPulse]);
      }
    }, 800);

    return () => clearInterval(interval);
  }, [smoothX, smoothY]);

  return (
    <div ref={containerRef} className="fixed inset-0 z-0 overflow-hidden bg-black">
      {/* Animated flowing grid lines */}
      <motion.svg 
        className="absolute inset-0 w-full h-full"
        style={{
          x: gridOffsetX,
          y: gridOffsetY,
        }}
      >
        <defs>
          {/* Animated glow filter */}
          <filter id="bloodGlow" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="2" result="blur" />
            <feFlood floodColor="#dc2626" floodOpacity={glowIntensity} />
            <feComposite in2="blur" operator="in" />
            <feMerge>
              <feMergeNode />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
          
          {/* Grid pattern with animated dash */}
          <pattern id="movingGrid" width="80" height="80" patternUnits="userSpaceOnUse">
            {/* Vertical lines */}
            <motion.line
              x1="0" y1="0" x2="0" y2="80"
              stroke="#dc2626"
              strokeWidth="0.5"
              animate={{ strokeDashoffset: [0, -20] }}
              transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
              strokeDasharray="4 4"
            />
            <motion.line
              x1="40" y1="0" x2="40" y2="80"
              stroke="#dc2626"
              strokeWidth="0.5"
              animate={{ strokeDashoffset: [0, 20] }}
              transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
              strokeDasharray="6 6"
            />
            <motion.line
              x1="80" y1="0" x2="80" y2="80"
              stroke="#dc2626"
              strokeWidth="0.5"
              animate={{ strokeDashoffset: [0, -20] }}
              transition={{ duration: 3.5, repeat: Infinity, ease: "linear" }}
              strokeDasharray="4 4"
            />
            
            {/* Horizontal lines */}
            <motion.line
              x1="0" y1="0" x2="80" y2="0"
              stroke="#dc2626"
              strokeWidth="0.5"
              animate={{ strokeDashoffset: [-20, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
              strokeDasharray="4 4"
            />
            <motion.line
              x1="0" y1="40" x2="80" y2="40"
              stroke="#dc2626"
              strokeWidth="0.5"
              animate={{ strokeDashoffset: [20, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
              strokeDasharray="6 6"
            />
            <motion.line
              x1="0" y1="80" x2="80" y2="80"
              stroke="#dc2626"
              strokeWidth="0.5"
              animate={{ strokeDashoffset: [-20, 0] }}
              transition={{ duration: 3.5, repeat: Infinity, ease: "linear" }}
              strokeDasharray="4 4"
            />
            
            {/* Diagonal accent */}
            <motion.line
              x1="0" y1="0" x2="80" y2="80"
              stroke="#dc2626"
              strokeWidth="0.3"
              opacity="0.4"
              animate={{ strokeDashoffset: [0, -40] }}
              transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
              strokeDasharray="8 12"
            />
          </pattern>
        </defs>
        
        <rect 
          width="120%" 
          height="120%" 
          x="-10%" 
          y="-10%" 
          fill="url(#movingGrid)" 
          filter="url(#bloodGlow)"
          opacity="0.25"
        />
      </motion.svg>

      {/* Flowing energy lines */}
      <svg className="absolute inset-0 w-full h-full pointer-events-none">
        {[...Array(6)].map((_, i) => (
          <motion.line
            key={`h-${i}`}
            x1="0"
            y1={`${15 + i * 15}%`}
            x2="100%"
            y2={`${15 + i * 15}%`}
            stroke="#dc2626"
            strokeWidth="1"
            opacity="0.15"
            filter="url(#bloodGlow)"
            animate={{
              x1: ['-10%', '0%', '-10%'],
              x2: ['100%', '110%', '100%'],
            }}
            transition={{
              duration: 8 + i,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          />
        ))}
        {[...Array(6)].map((_, i) => (
          <motion.line
            key={`v-${i}`}
            x1={`${15 + i * 15}%`}
            y1="0"
            x2={`${15 + i * 15}%`}
            y2="100%"
            stroke="#dc2626"
            strokeWidth="1"
            opacity="0.15"
            filter="url(#bloodGlow)"
            animate={{
              y1: ['-10%', '0%', '-10%'],
              y2: ['100%', '110%', '100%'],
            }}
            transition={{
              duration: 10 + i,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          />
        ))}
      </svg>

      {/* Cursor-following glow area */}
      <motion.div
        className="pointer-events-none fixed"
        style={{
          x: smoothX,
          y: smoothY,
          translateX: '-50%',
          translateY: '-50%',
          width: 400,
          height: 400,
        }}
      >
        <svg width="400" height="400" className="opacity-30">
          <defs>
            <radialGradient id="cursorGlow" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#dc2626" stopOpacity={glowIntensity} />
              <stop offset="50%" stopColor="#dc2626" stopOpacity={glowIntensity * 0.3} />
              <stop offset="100%" stopColor="#dc2626" stopOpacity="0" />
            </radialGradient>
          </defs>
          <circle cx="200" cy="200" r="200" fill="url(#cursorGlow)" />
          
          {/* Radiating lines from cursor */}
          {[...Array(8)].map((_, i) => (
            <motion.line
              key={i}
              x1="200"
              y1="200"
              x2={200 + 180 * Math.cos((i * 45 * Math.PI) / 180)}
              y2={200 + 180 * Math.sin((i * 45 * Math.PI) / 180)}
              stroke="#dc2626"
              strokeWidth="1"
              opacity={glowIntensity * 0.5}
              animate={{
                opacity: [glowIntensity * 0.3, glowIntensity * 0.6, glowIntensity * 0.3],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                delay: i * 0.2,
              }}
            />
          ))}
        </svg>
      </motion.div>

      {/* Pulse ripples from cursor */}
      {pulsePoints.map((point) => (
        <motion.div
          key={point.id}
          className="absolute pointer-events-none"
          style={{
            left: `${point.x}%`,
            top: `${point.y}%`,
          }}
          initial={{ scale: 0, opacity: 0.6 }}
          animate={{ scale: 3, opacity: 0 }}
          transition={{ duration: 2, ease: 'easeOut' }}
        >
          <div 
            className="w-24 h-24 border border-blood-600/50"
            style={{
              boxShadow: '0 0 20px rgba(220, 38, 38, 0.3)',
            }}
          />
        </motion.div>
      ))}

      {/* Animated corner brackets */}
      <div className="absolute top-8 left-8 w-24 h-24">
        <motion.div
          className="absolute top-0 left-0 w-12 h-0.5 bg-gradient-to-r from-blood-600 to-transparent"
          animate={{ opacity: [0.4, 1, 0.4], width: ['40px', '48px', '40px'] }}
          transition={{ duration: 2, repeat: Infinity }}
          style={{ boxShadow: '0 0 10px #dc2626' }}
        />
        <motion.div
          className="absolute top-0 left-0 h-12 w-0.5 bg-gradient-to-b from-blood-600 to-transparent"
          animate={{ opacity: [0.4, 1, 0.4], height: ['40px', '48px', '40px'] }}
          transition={{ duration: 2, repeat: Infinity }}
          style={{ boxShadow: '0 0 10px #dc2626' }}
        />
      </div>
      <div className="absolute top-8 right-8 w-24 h-24">
        <motion.div
          className="absolute top-0 right-0 w-12 h-0.5 bg-gradient-to-l from-blood-600 to-transparent"
          animate={{ opacity: [0.4, 1, 0.4] }}
          transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
          style={{ boxShadow: '0 0 10px #dc2626' }}
        />
        <motion.div
          className="absolute top-0 right-0 h-12 w-0.5 bg-gradient-to-b from-blood-600 to-transparent"
          animate={{ opacity: [0.4, 1, 0.4] }}
          transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
          style={{ boxShadow: '0 0 10px #dc2626' }}
        />
      </div>
      <div className="absolute bottom-8 left-8 w-24 h-24">
        <motion.div
          className="absolute bottom-0 left-0 w-12 h-0.5 bg-gradient-to-r from-blood-600 to-transparent"
          animate={{ opacity: [0.4, 1, 0.4] }}
          transition={{ duration: 2, repeat: Infinity, delay: 1 }}
          style={{ boxShadow: '0 0 10px #dc2626' }}
        />
        <motion.div
          className="absolute bottom-0 left-0 h-12 w-0.5 bg-gradient-to-t from-blood-600 to-transparent"
          animate={{ opacity: [0.4, 1, 0.4] }}
          transition={{ duration: 2, repeat: Infinity, delay: 1 }}
          style={{ boxShadow: '0 0 10px #dc2626' }}
        />
      </div>
      <div className="absolute bottom-8 right-8 w-24 h-24">
        <motion.div
          className="absolute bottom-0 right-0 w-12 h-0.5 bg-gradient-to-l from-blood-600 to-transparent"
          animate={{ opacity: [0.4, 1, 0.4] }}
          transition={{ duration: 2, repeat: Infinity, delay: 1.5 }}
          style={{ boxShadow: '0 0 10px #dc2626' }}
        />
        <motion.div
          className="absolute bottom-0 right-0 h-12 w-0.5 bg-gradient-to-t from-blood-600 to-transparent"
          animate={{ opacity: [0.4, 1, 0.4] }}
          transition={{ duration: 2, repeat: Infinity, delay: 1.5 }}
          style={{ boxShadow: '0 0 10px #dc2626' }}
        />
      </div>

      {/* Sharp vignette edges */}
      <div 
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'linear-gradient(to right, rgba(0,0,0,0.9) 0%, transparent 8%, transparent 92%, rgba(0,0,0,0.9) 100%)',
        }}
      />
      <div 
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'linear-gradient(to bottom, rgba(0,0,0,0.7) 0%, transparent 12%, transparent 88%, rgba(0,0,0,0.7) 100%)',
        }}
      />
    </div>
  );
}
