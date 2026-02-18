'use client';

import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

interface RadarScannerProps {
  className?: string;
  size?: number;
}

export default function RadarScanner({ className = '', size = 400 }: RadarScannerProps) {
  const [blips, setBlips] = useState<{ x: number; y: number; id: number; size: number }[]>([]);

  useEffect(() => {
    const interval = setInterval(() => {
      if (Math.random() > 0.6) {
        const angle = Math.random() * Math.PI * 2;
        const distance = Math.random() * 0.8 + 0.1;
        const newBlip = {
          x: 0.5 + Math.cos(angle) * distance * 0.5,
          y: 0.5 + Math.sin(angle) * distance * 0.5,
          id: Date.now(),
          size: Math.random() * 4 + 2,
        };
        setBlips((prev) => [...prev.slice(-8), newBlip]);
      }
    }, 800);

    return () => clearInterval(interval);
  }, []);

  return (
    <div
      className={`relative ${className}`}
      style={{ width: size, height: size }}
    >
      {/* Outer ring */}
      <div
        className="absolute inset-0 rounded-full border border-blood-600/30"
        style={{ boxShadow: 'inset 0 0 40px rgba(185, 28, 28, 0.1)' }}
      />

      {/* Concentric rings */}
      {[0.8, 0.6, 0.4, 0.2].map((scale, i) => (
        <div
          key={i}
          className="absolute rounded-full border border-blood-600/20"
          style={{
            width: `${scale * 100}%`,
            height: `${scale * 100}%`,
            top: `${(1 - scale) * 50}%`,
            left: `${(1 - scale) * 50}%`,
          }}
        />
      ))}

      {/* Cross hairs */}
      <div className="absolute top-0 left-1/2 w-px h-full bg-blood-600/20" />
      <div className="absolute left-0 top-1/2 w-full h-px bg-blood-600/20" />

      {/* Sweeping line */}
      <motion.div
        className="absolute top-1/2 left-1/2 origin-bottom-left"
        style={{
          width: size / 2,
          height: 2,
          background: 'linear-gradient(90deg, #991b1b 0%, transparent 100%)',
        }}
        animate={{ rotate: [0, 360] }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: 'linear',
        }}
      />

      {/* Sweep glow trail */}
      <motion.div
        className="absolute top-1/2 left-1/2 origin-center"
        style={{
          width: size / 2 - 10,
          height: size / 2 - 10,
          background: 'conic-gradient(from 0deg, transparent 0deg, rgba(153, 27, 27, 0.15) 30deg, transparent 60deg)',
          borderRadius: '50%',
          marginLeft: -(size / 4 - 5),
          marginTop: -(size / 4 - 5),
        }}
        animate={{ rotate: [0, 360] }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: 'linear',
        }}
      />

      {/* Center dot */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-2 h-2 bg-blood-600 rounded-full"
        style={{ boxShadow: '0 0 10px #991b1b, 0 0 20px #991b1b' }}
      />

      {/* Blips */}
      {blips.map((blip) => (
        <motion.div
          key={blip.id}
          className="absolute rounded-full bg-blood-600"
          style={{
            width: blip.size,
            height: blip.size,
            left: `calc(${blip.x * 100}% - ${blip.size / 2}px)`,
            top: `calc(${blip.y * 100}% - ${blip.size / 2}px)`,
            boxShadow: '0 0 8px #991b1b',
          }}
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: [0, 1, 1, 0], scale: [0, 1, 1, 0] }}
          transition={{ duration: 3, ease: 'easeOut' }}
        />
      ))}

      {/* Labels */}
      <span className="absolute top-2 left-1/2 -translate-x-1/2 font-mono text-[8px] text-blood-600/50">
        N
      </span>
      <span className="absolute bottom-2 left-1/2 -translate-x-1/2 font-mono text-[8px] text-blood-600/50">
        S
      </span>
      <span className="absolute left-2 top-1/2 -translate-y-1/2 font-mono text-[8px] text-blood-600/50">
        W
      </span>
      <span className="absolute right-2 top-1/2 -translate-y-1/2 font-mono text-[8px] text-blood-600/50">
        E
      </span>

      {/* Corner decorations */}
      <div className="absolute -top-1 -left-1 w-3 h-3 border-l border-t border-blood-600/50" />
      <div className="absolute -top-1 -right-1 w-3 h-3 border-r border-t border-blood-600/50" />
      <div className="absolute -bottom-1 -left-1 w-3 h-3 border-l border-b border-blood-600/50" />
      <div className="absolute -bottom-1 -right-1 w-3 h-3 border-r border-b border-blood-600/50" />
    </div>
  );
}
