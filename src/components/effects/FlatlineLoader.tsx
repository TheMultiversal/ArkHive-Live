'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';

interface FlatlineLoaderProps {
  isLoading?: boolean;
  onComplete?: () => void;
  duration?: number;
  className?: string;
  size?: 'sm' | 'md' | 'lg';
}

export default function FlatlineLoader({ 
  isLoading = true, 
  onComplete,
  duration = 3000,
  className = '',
  size = 'md',
}: FlatlineLoaderProps) {
  const [phase, setPhase] = useState<'flatline' | 'charging' | 'shock' | 'heartbeat' | 'complete'>('flatline');
  const [progress, setProgress] = useState(0);

  const sizeStyles = {
    sm: { width: 150, height: 40 },
    md: { width: 300, height: 80 },
    lg: { width: 450, height: 120 },
  };

  useEffect(() => {
    if (!isLoading) {
      setPhase('complete');
      return;
    }

    // Phase timing
    const flatlineDuration = duration * 0.3;
    const chargingDuration = duration * 0.2;
    const shockDuration = duration * 0.1;
    const heartbeatDuration = duration * 0.4;

    const timeline = [
      { phase: 'flatline' as const, delay: 0 },
      { phase: 'charging' as const, delay: flatlineDuration },
      { phase: 'shock' as const, delay: flatlineDuration + chargingDuration },
      { phase: 'heartbeat' as const, delay: flatlineDuration + chargingDuration + shockDuration },
      { phase: 'complete' as const, delay: duration },
    ];

    const timeouts = timeline.map(({ phase, delay }) => 
      setTimeout(() => setPhase(phase), delay)
    );

    // Progress bar
    const progressInterval = setInterval(() => {
      setProgress(prev => Math.min(prev + (100 / (duration / 50)), 100));
    }, 50);

    return () => {
      timeouts.forEach(clearTimeout);
      clearInterval(progressInterval);
    };
  }, [isLoading, duration]);

  useEffect(() => {
    if (phase === 'complete') {
      onComplete?.();
    }
  }, [phase, onComplete]);

  // ECG paths for different phases
  const flatlinePath = "M0,50 L300,50";
  const chargingPath = "M0,50 L50,50 L55,45 L60,55 L65,50 L300,50";
  const heartbeatPath = "M0,50 L30,50 L35,50 L40,20 L45,80 L50,50 L70,50 L75,35 L80,65 L85,50 L100,50 L130,50 L135,50 L140,20 L145,80 L150,50 L170,50 L175,35 L180,65 L185,50 L200,50 L230,50 L235,50 L240,20 L245,80 L250,50 L270,50 L275,35 L280,65 L285,50 L300,50";

  return (
    <AnimatePresence>
      {isLoading && phase !== 'complete' && (
        <motion.div
          className={`fixed inset-0 z-50 flex flex-col items-center justify-center bg-black ${className}`}
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
        >
          {/* ECG Monitor frame */}
          <div className="relative w-[400px] h-[200px] bg-gray-900 rounded-lg border-2 border-gray-700 p-4 shadow-2xl">
            {/* Monitor bezel */}
            <div className="absolute top-2 left-4 flex items-center gap-2">
              <div className={`w-2 h-2 rounded-full ${phase === 'flatline' ? 'bg-blood-600' : 'bg-green-500'} animate-pulse`} />
              <span className="text-xs text-gray-500 font-mono">VITAL SIGNS</span>
            </div>

            {/* ECG Display */}
            <div className="mt-6 h-24 bg-black rounded border border-gray-800 overflow-hidden">
              <svg viewBox="0 0 300 100" className="w-full h-full" preserveAspectRatio="none">
                <defs>
                  <linearGradient id="ecgLineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="transparent" />
                    <stop offset="20%" stopColor={phase === 'flatline' ? '#dc2626' : '#22c55e'} />
                    <stop offset="80%" stopColor={phase === 'flatline' ? '#dc2626' : '#22c55e'} />
                    <stop offset="100%" stopColor="transparent" />
                  </linearGradient>
                  <filter id="ecgGlow">
                    <feGaussianBlur stdDeviation="2" result="blur" />
                    <feFlood floodColor={phase === 'flatline' ? '#dc2626' : '#22c55e'} floodOpacity="0.8" />
                    <feComposite in2="blur" operator="in" />
                    <feMerge>
                      <feMergeNode />
                      <feMergeNode in="SourceGraphic" />
                    </feMerge>
                  </filter>
                </defs>

                {/* Grid lines */}
                <g opacity="0.1">
                  {[...Array(6)].map((_, i) => (
                    <line key={`h${i}`} x1="0" y1={i * 20} x2="300" y2={i * 20} stroke="#22c55e" strokeWidth="0.5" />
                  ))}
                  {[...Array(16)].map((_, i) => (
                    <line key={`v${i}`} x1={i * 20} y1="0" x2={i * 20} y2="100" stroke="#22c55e" strokeWidth="0.5" />
                  ))}
                </g>

                {/* ECG Line */}
                <motion.path
                  d={phase === 'flatline' ? flatlinePath : phase === 'charging' ? chargingPath : heartbeatPath}
                  fill="none"
                  stroke="url(#ecgLineGradient)"
                  strokeWidth="2"
                  filter="url(#ecgGlow)"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ 
                    duration: phase === 'heartbeat' ? 1 : 0.5, 
                    repeat: phase === 'heartbeat' ? Infinity : 0,
                    ease: "linear"
                  }}
                />
              </svg>
            </div>

            {/* Status text */}
            <div className="mt-2 flex justify-between items-center">
              <motion.span
                className={`font-mono text-sm ${
                  phase === 'flatline' ? 'text-blood-600' : 
                  phase === 'charging' ? 'text-yellow-500' :
                  phase === 'shock' ? 'text-white' :
                  'text-green-500'
                }`}
                animate={{ opacity: [1, 0.5, 1] }}
                transition={{ duration: 0.5, repeat: Infinity }}
              >
                {phase === 'flatline' && '⚠ FLATLINE DETECTED'}
                {phase === 'charging' && '⚡ CHARGING DEFIBRILLATOR...'}
                {phase === 'shock' && '💥 CLEAR!'}
                {phase === 'heartbeat' && '♥ PULSE RESTORED'}
              </motion.span>

              <span className="font-mono text-xs text-gray-500">
                {Math.round(progress)}%
              </span>
            </div>
          </div>

          {/* Shock flash effect */}
          <AnimatePresence>
            {phase === 'shock' && (
              <motion.div
                className="absolute inset-0 bg-white"
                initial={{ opacity: 0 }}
                animate={{ opacity: [0, 1, 0] }}
                transition={{ duration: 0.2 }}
              />
            )}
          </AnimatePresence>

          {/* Loading message */}
          <motion.p
            className="mt-6 text-gray-400 font-mono text-sm"
            animate={{ opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          >
            {phase === 'flatline' && 'SYSTEM FAILURE DETECTED...'}
            {phase === 'charging' && 'INITIATING RECOVERY PROTOCOL...'}
            {phase === 'shock' && 'ADMINISTERING SHOCK...'}
            {phase === 'heartbeat' && 'LOADING COMPLETE'}
          </motion.p>

          {/* Progress bar styled as medical monitor */}
          <div className="mt-4 w-[300px] h-2 bg-gray-800 rounded-full overflow-hidden">
            <motion.div
              className={`h-full ${phase === 'flatline' ? 'bg-blood-600' : 'bg-green-500'}`}
              style={{ width: `${progress}%` }}
              transition={{ duration: 0.1 }}
            />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
