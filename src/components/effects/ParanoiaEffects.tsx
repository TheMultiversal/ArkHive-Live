'use client';

import { motion } from 'framer-motion';
import { useEffect, useState, useMemo } from 'react';

interface ParanoiaWrapperProps {
  children: React.ReactNode;
  className?: string;
  intensity?: 'subtle' | 'medium' | 'intense';
}

// Wrapper that makes elements occasionally twitch/shift
export default function ParanoiaWrapper({ 
  children, 
  className = '',
  intensity = 'subtle' 
}: ParanoiaWrapperProps) {
  const [trigger, setTrigger] = useState(false);
  const [glitchType, setGlitchType] = useState<'shift' | 'scale' | 'rotate'>('shift');

  const intensityConfig = useMemo(() => ({
    subtle: { interval: 8000, chance: 0.3 },
    medium: { interval: 4000, chance: 0.5 },
    intense: { interval: 2000, chance: 0.7 },
  }), []);

  useEffect(() => {
    const currentConfig = intensityConfig[intensity];
    
    const interval = setInterval(() => {
      if (Math.random() < currentConfig.chance) {
        const types: ('shift' | 'scale' | 'rotate')[] = ['shift', 'scale', 'rotate'];
        setGlitchType(types[Math.floor(Math.random() * types.length)]);
        setTrigger(true);
        setTimeout(() => setTrigger(false), 150);
      }
    }, currentConfig.interval);

    return () => clearInterval(interval);
  }, [intensity, intensityConfig]);

  const getVariants = () => {
    switch (glitchType) {
      case 'shift':
        return {
          normal: { x: 0, y: 0 },
          glitch: { x: (Math.random() - 0.5) * 4, y: (Math.random() - 0.5) * 2 },
        };
      case 'scale':
        return {
          normal: { scale: 1 },
          glitch: { scale: 1 + (Math.random() - 0.5) * 0.02 },
        };
      case 'rotate':
        return {
          normal: { rotate: 0 },
          glitch: { rotate: (Math.random() - 0.5) * 0.5 },
        };
    }
  };

  return (
    <motion.div
      className={className}
      variants={getVariants()}
      animate={trigger ? 'glitch' : 'normal'}
      transition={{ duration: 0.05 }}
    >
      {children}
    </motion.div>
  );
}

// Surveillance warning that pops up randomly
export function SurveillanceWarning() {
  const [visible, setVisible] = useState(false);
  const [position, setPosition] = useState({ x: 20, y: 20 });

  useEffect(() => {
    const showWarning = () => {
      if (Math.random() > 0.7) {
        setPosition({
          x: Math.random() * 60 + 20,
          y: Math.random() * 60 + 20,
        });
        setVisible(true);
        setTimeout(() => setVisible(false), 2000);
      }
    };

    const interval = setInterval(showWarning, 15000);
    return () => clearInterval(interval);
  }, []);

  if (!visible) return null;

  return (
    <motion.div
      className="fixed pointer-events-none z-50 font-mono text-[10px] text-blood-600/60"
      style={{ left: `${position.x}%`, top: `${position.y}%` }}
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: [0, 1, 1, 0], scale: [0.8, 1, 1, 0.8] }}
      transition={{ duration: 2 }}
    >
      <div className="flex items-center gap-2 bg-black/50 px-2 py-1 border border-blood-600/30">
        <span className="w-1.5 h-1.5 bg-blood-600 rounded-full animate-pulse" />
        <span>MONITORING ACTIVE</span>
      </div>
    </motion.div>
  );
}

// Random data corruption flashes
export function DataCorruption() {
  const [corrupt, setCorrupt] = useState<{ text: string; x: number; y: number } | null>(null);

  useEffect(() => {
    const corruptStrings = [
      '▓▒░ ERR0R ░▒▓',
      '██ DATA BREACH ██',
      '■□ CORRUPT □■',
      '░░ OVERRIDE ░░',
      '▒▒ INJECT ▒▒',
      '█ NULL █',
    ];

    const corrupt = () => {
      if (Math.random() > 0.8) {
        setCorrupt({
          text: corruptStrings[Math.floor(Math.random() * corruptStrings.length)],
          x: Math.random() * 80 + 10,
          y: Math.random() * 80 + 10,
        });
        setTimeout(() => setCorrupt(null), 300);
      }
    };

    const interval = setInterval(corrupt, 10000);
    return () => clearInterval(interval);
  }, []);

  if (!corrupt) return null;

  return (
    <motion.div
      className="fixed pointer-events-none z-50 font-mono text-xs text-blood-600/40"
      style={{ left: `${corrupt.x}%`, top: `${corrupt.y}%` }}
      initial={{ opacity: 0, scaleX: 0 }}
      animate={{ opacity: [0, 1, 1, 0], scaleX: [0, 1.2, 1, 0] }}
      transition={{ duration: 0.3 }}
    >
      {corrupt.text}
    </motion.div>
  );
}

// Corner timestamp that updates
export function TimestampOverlay() {
  const [time, setTime] = useState('');
  const [glitch, setGlitch] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const update = () => {
      const now = new Date();
      setTime(now.toISOString().replace('T', ' ').substring(0, 19));
      
      // Occasional glitch
      if (Math.random() > 0.95) {
        setGlitch(true);
        setTimeout(() => setGlitch(false), 100);
      }
    };

    update();
    const interval = setInterval(update, 1000);
    return () => clearInterval(interval);
  }, []);

  // Don't render until mounted to avoid hydration mismatch
  if (!mounted) return null;

  return (
    <div className="fixed bottom-4 left-4 z-40 pointer-events-none">
      <motion.div
        className="font-mono text-[10px] text-blood-600/40 flex items-center gap-2"
        animate={glitch ? { x: [0, 2, -2, 0], opacity: [1, 0.5, 1] } : {}}
        transition={{ duration: 0.1 }}
      >
        <span className="w-1 h-1 bg-blood-600/60 rounded-full" />
        <span>REC</span>
        <span className="text-dark-500">|</span>
        <span>{glitch ? '██:██:██' : time}</span>
      </motion.div>
    </div>
  );
}
