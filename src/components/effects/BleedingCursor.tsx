'use client';

import { useEffect, useState, useRef } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

export default function TargetingCursor() {
  const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const [isClicking, setIsClicking] = useState(false);
  const [targetLocked, setTargetLocked] = useState(false);
  const [scanAngle, setScanAngle] = useState(0);
  
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const smoothX = useSpring(mouseX, { stiffness: 500, damping: 30 });
  const smoothY = useSpring(mouseY, { stiffness: 500, damping: 30 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setCursorPos({ x: e.clientX, y: e.clientY });
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };

    const handleMouseDown = () => {
      setIsClicking(true);
      setTargetLocked(true);
      setTimeout(() => setTargetLocked(false), 500);
    };

    const handleMouseUp = () => setIsClicking(false);

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const isInteractive = target.closest('a, button, [role="button"], input, textarea, select');
      setIsHovering(!!isInteractive);
    };

    document.body.style.cursor = 'none';
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mousedown', handleMouseDown);
    window.addEventListener('mouseup', handleMouseUp);
    window.addEventListener('mouseover', handleMouseOver);

    return () => {
      document.body.style.cursor = 'auto';
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mousedown', handleMouseDown);
      window.removeEventListener('mouseup', handleMouseUp);
      window.removeEventListener('mouseover', handleMouseOver);
    };
  }, [mouseX, mouseY]);

  // Rotating scan line
  useEffect(() => {
    const interval = setInterval(() => {
      setScanAngle(prev => (prev + 3) % 360);
    }, 30);
    return () => clearInterval(interval);
  }, []);

  const cursorSize = isHovering ? 50 : 40;
  const innerSize = isClicking ? 8 : 4;

  return (
    <>
      {/* Main targeting reticle */}
      <motion.div
        className="fixed pointer-events-none z-[10000]"
        style={{
          x: smoothX,
          y: smoothY,
          translateX: '-50%',
          translateY: '-50%',
        }}
      >
        <svg 
          width={cursorSize} 
          height={cursorSize} 
          viewBox="0 0 100 100"
          style={{ 
            filter: 'drop-shadow(0 0 8px rgba(220, 38, 38, 0.8))',
            transition: 'width 0.15s, height 0.15s',
          }}
        >
          <defs>
            <linearGradient id="reticleGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#ef4444" />
              <stop offset="100%" stopColor="#dc2626" />
            </linearGradient>
          </defs>

          {/* Outer rotating ring */}
          <motion.circle
            cx="50" cy="50" r="45"
            fill="none"
            stroke="url(#reticleGradient)"
            strokeWidth="1"
            strokeDasharray="8 4"
            opacity="0.6"
            animate={{ rotate: 360 }}
            transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
            style={{ transformOrigin: '50px 50px' }}
          />

          {/* Inner ring */}
          <circle
            cx="50" cy="50" r={isHovering ? 25 : 20}
            fill="none"
            stroke="#dc2626"
            strokeWidth="1.5"
            opacity="0.8"
            style={{ transition: 'r 0.15s' }}
          />

          {/* Crosshairs */}
          <g stroke="#dc2626" strokeWidth="1.5" opacity="0.9">
            {/* Top */}
            <line x1="50" y1="5" x2="50" y2="30" />
            <line x1="45" y1="10" x2="55" y2="10" />
            {/* Bottom */}
            <line x1="50" y1="70" x2="50" y2="95" />
            <line x1="45" y1="90" x2="55" y2="90" />
            {/* Left */}
            <line x1="5" y1="50" x2="30" y2="50" />
            <line x1="10" y1="45" x2="10" y2="55" />
            {/* Right */}
            <line x1="70" y1="50" x2="95" y2="50" />
            <line x1="90" y1="45" x2="90" y2="55" />
          </g>

          {/* Corner brackets */}
          <g stroke="#ef4444" strokeWidth="2" fill="none" opacity={isHovering ? 1 : 0.6} style={{ transition: 'opacity 0.15s' }}>
            <path d="M15,30 L15,15 L30,15" />
            <path d="M70,15 L85,15 L85,30" />
            <path d="M85,70 L85,85 L70,85" />
            <path d="M30,85 L15,85 L15,70" />
          </g>

          {/* Scanning line */}
          <line
            x1="50" y1="50"
            x2="50" y2="5"
            stroke="rgba(220, 38, 38, 0.4)"
            strokeWidth="1"
            transform={`rotate(${scanAngle}, 50, 50)`}
          />

          {/* Center dot - pulses on click */}
          <motion.circle
            cx="50" cy="50"
            r={innerSize}
            fill="#dc2626"
            animate={isClicking ? { scale: [1, 2, 1], opacity: [1, 0.5, 1] } : {}}
            transition={{ duration: 0.2 }}
          />

          {/* Target locked indicator */}
          {targetLocked && (
            <motion.g
              initial={{ scale: 2, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.5, opacity: 0 }}
            >
              <circle cx="50" cy="50" r="35" fill="none" stroke="#ef4444" strokeWidth="2" />
              <text x="50" y="98" textAnchor="middle" fill="#ef4444" fontSize="8" fontFamily="monospace">LOCKED</text>
            </motion.g>
          )}
        </svg>
      </motion.div>

      {/* Coordinate display */}
      <div
        className="fixed pointer-events-none z-[10000] font-mono text-[10px] text-blood-600/60"
        style={{
          left: cursorPos.x + 30,
          top: cursorPos.y + 30,
        }}
      >
        <div>X: {Math.round(cursorPos.x)}</div>
        <div>Y: {Math.round(cursorPos.y)}</div>
      </div>

      <style jsx global>{`
        * { cursor: none !important; }
      `}</style>
    </>
  );
}
