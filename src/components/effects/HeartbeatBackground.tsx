'use client';

import { useEffect, useRef, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

export default function HeartbeatBackground() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [dimensions, setDimensions] = useState({ width: 1920, height: 1080 });
  const [heartRate, setHeartRate] = useState(72);
  const [phase, setPhase] = useState(0);
  
  // Mouse position for interactivity
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const smoothMouseX = useSpring(mouseX, { stiffness: 50, damping: 20 });
  const smoothMouseY = useSpring(mouseY, { stiffness: 50, damping: 20 });
  
  const [mouseSpeed, setMouseSpeed] = useState(0);
  const lastMousePos = useRef({ x: 0, y: 0, time: Date.now() });

  useEffect(() => {
    const updateDimensions = () => {
      setDimensions({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    updateDimensions();
    window.addEventListener('resize', updateDimensions);
    return () => window.removeEventListener('resize', updateDimensions);
  }, []);

  // Animate the ECG phase
  useEffect(() => {
    const beatDuration = 60000 / heartRate;
    const animationFrame = () => {
      setPhase(prev => (prev + 2) % 120);
    };
    
    const interval = setInterval(animationFrame, beatDuration / 60);
    return () => clearInterval(interval);
  }, [heartRate]);

  // Track mouse movement and calculate speed
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const now = Date.now();
      const dx = e.clientX - lastMousePos.current.x;
      const dy = e.clientY - lastMousePos.current.y;
      const dt = now - lastMousePos.current.time;
      
      if (dt > 0) {
        const speed = Math.sqrt(dx * dx + dy * dy) / dt;
        setMouseSpeed(Math.min(speed, 5));
        const newRate = Math.min(180, 72 + speed * 40);
        setHeartRate(prev => Math.max(prev, newRate));
      }
      
      lastMousePos.current = { x: e.clientX, y: e.clientY, time: now };
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };

    const decayInterval = setInterval(() => {
      setHeartRate(prev => Math.max(72, prev - 1));
      setMouseSpeed(prev => Math.max(0, prev - 0.1));
    }, 100);

    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      clearInterval(decayInterval);
    };
  }, [mouseX, mouseY]);

  // Generate ECG waveform path
  const generateECGPath = (yOffset: number, phaseOffset: number, intensity: number) => {
    const segmentWidth = 120;
    const numSegments = Math.ceil(dimensions.width / segmentWidth) + 3;
    const currentPhase = (phase + phaseOffset) % 120;
    let path = `M ${-currentPhase} ${yOffset}`;
    
    for (let i = 0; i < numSegments; i++) {
      const x = i * segmentWidth - currentPhase;
      const amp = intensity;
      
      path += ` Q ${x + 10} ${yOffset - 5 * amp} ${x + 20} ${yOffset}`;
      path += ` L ${x + 30} ${yOffset}`;
      path += ` L ${x + 35} ${yOffset + 3}`;
      path += ` L ${x + 40} ${yOffset - 35 * amp}`;
      path += ` L ${x + 45} ${yOffset + 8 * amp}`;
      path += ` L ${x + 55} ${yOffset}`;
      path += ` Q ${x + 70} ${yOffset - 12 * amp} ${x + 85} ${yOffset}`;
      path += ` L ${x + segmentWidth} ${yOffset}`;
    }
    
    return path;
  };

  const intensity = 1 + mouseSpeed * 0.3;

  return (
    <div ref={containerRef} className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      <div className="absolute inset-0 bg-gradient-to-b from-black via-dark-950 to-black" />
      
      <div 
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `linear-gradient(rgba(220, 38, 38, 0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(220, 38, 38, 0.3) 1px, transparent 1px)`,
          backgroundSize: '50px 50px',
        }}
      />

      <motion.div
        className="absolute w-96 h-96 rounded-full pointer-events-none"
        style={{
          x: smoothMouseX,
          y: smoothMouseY,
          translateX: '-50%',
          translateY: '-50%',
          background: `radial-gradient(circle, rgba(220, 38, 38, ${0.15 + mouseSpeed * 0.08}) 0%, transparent 70%)`,
        }}
      />

      <svg className="absolute inset-0 w-full h-full" style={{ filter: 'drop-shadow(0 0 8px rgba(220, 38, 38, 0.5))' }}>
        <defs>
          <linearGradient id="ecgGrad" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="transparent" />
            <stop offset="5%" stopColor="#dc2626" />
            <stop offset="95%" stopColor="#dc2626" />
            <stop offset="100%" stopColor="transparent" />
          </linearGradient>
          <filter id="glow">
            <feGaussianBlur stdDeviation="2" result="coloredBlur"/>
            <feMerge><feMergeNode in="coloredBlur"/><feMergeNode in="SourceGraphic"/></feMerge>
          </filter>
        </defs>

        <path d={generateECGPath(dimensions.height * 0.25, 0, intensity * 0.6)} fill="none" stroke="url(#ecgGrad)" strokeWidth="1" opacity="0.2" filter="url(#glow)" />
        <path d={generateECGPath(dimensions.height * 0.5, 40, intensity)} fill="none" stroke="url(#ecgGrad)" strokeWidth="2" opacity="0.6" filter="url(#glow)" />
        <path d={generateECGPath(dimensions.height * 0.75, 80, intensity * 0.7)} fill="none" stroke="url(#ecgGrad)" strokeWidth="1" opacity="0.25" filter="url(#glow)" />

        <motion.rect x={0} y={0} width={3} height={dimensions.height} fill="rgba(220, 38, 38, 0.4)" animate={{ x: [0, dimensions.width] }} transition={{ duration: 5, repeat: Infinity, ease: "linear" }} />
      </svg>

      <div className="absolute top-24 left-4 font-mono text-xs select-none">
        <div className="flex items-center gap-2 text-blood-600/70">
          <motion.span className="text-lg" animate={{ scale: [1, 1.3, 1], opacity: [0.6, 1, 0.6] }} transition={{ duration: 60 / heartRate, repeat: Infinity }}>♥</motion.span>
          <span className="text-blood-500">{Math.round(heartRate)} BPM</span>
        </div>
        {heartRate > 100 && <motion.div className="text-yellow-500 mt-1 text-[10px]" animate={{ opacity: [0.5, 1, 0.5] }} transition={{ duration: 0.5, repeat: Infinity }}>⚠ ELEVATED</motion.div>}
        {heartRate > 140 && <motion.div className="text-blood-600 mt-1 text-[10px]" animate={{ opacity: [0.3, 1, 0.3] }} transition={{ duration: 0.3, repeat: Infinity }}>⚠ DANGER</motion.div>}
      </div>

      <div className="absolute inset-0 pointer-events-none" style={{ background: 'radial-gradient(ellipse at center, transparent 0%, rgba(0,0,0,0.7) 100%)' }} />
    </div>
  );
}
