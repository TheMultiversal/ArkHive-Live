'use client';

import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';

interface GlitchDividerProps {
  className?: string;
  showLabel?: boolean;
  label?: string;
}

export default function GlitchDivider({ 
  className = '', 
  showLabel = false,
  label = 'REDACTED'
}: GlitchDividerProps) {
  const [glitchOffset, setGlitchOffset] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      if (Math.random() > 0.7) {
        setGlitchOffset((Math.random() - 0.5) * 10);
        setTimeout(() => setGlitchOffset(0), 100);
      }
    }, 200);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className={`relative w-full py-8 overflow-hidden ${className}`}>
      {/* Main line */}
      <div className="relative h-px">
        {/* Base gradient line */}
        <div 
          className="absolute inset-0"
          style={{
            background: 'linear-gradient(90deg, transparent 0%, #991b1b 20%, #991b1b 80%, transparent 100%)',
          }}
        />
        
        {/* Glitch overlay */}
        <motion.div
          className="absolute inset-0"
          style={{
            background: 'linear-gradient(90deg, transparent 0%, #b91c1c 20%, #b91c1c 80%, transparent 100%)',
            transform: `translateX(${glitchOffset}px)`,
          }}
          animate={{
            opacity: [0.5, 1, 0.5],
            scaleX: [1, 1.002, 1],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />

        {/* Scanning dot */}
        <motion.div
          className="absolute top-1/2 -translate-y-1/2 w-2 h-2 bg-blood-600 rounded-full"
          style={{
            boxShadow: '0 0 10px #991b1b, 0 0 20px #991b1b',
          }}
          animate={{
            left: ['0%', '100%', '0%'],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: 'linear',
          }}
        />
      </div>

      {/* Binary/hex data fragments */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        {['01001011', '███████', 'FF00AA', '▓▒░', 'CORRUPT'].map((text, i) => (
          <motion.span
            key={i}
            className="absolute font-mono text-[8px] text-blood-600/30"
            style={{ left: `${15 + i * 18}%` }}
            animate={{
              opacity: [0, 0.3, 0],
              y: [0, -5, 0],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              delay: i * 0.5,
            }}
          >
            {text}
          </motion.span>
        ))}
      </div>

      {/* Center label if enabled */}
      {showLabel && (
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 px-6 bg-black">
          <motion.span
            className="font-mono text-xs text-blood-600/70 tracking-[0.3em]"
            animate={{
              opacity: [0.5, 1, 0.5],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
            }}
          >
            [{label}]
          </motion.span>
        </div>
      )}

      {/* Corner accents */}
      <div className="absolute left-0 top-1/2 -translate-y-1/2 w-4 h-4">
        <div className="absolute top-0 left-0 w-2 h-px bg-blood-600" />
        <div className="absolute top-0 left-0 h-2 w-px bg-blood-600" />
      </div>
      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-4 h-4">
        <div className="absolute top-0 right-0 w-2 h-px bg-blood-600" />
        <div className="absolute top-0 right-0 h-2 w-px bg-blood-600" />
      </div>
    </div>
  );
}
