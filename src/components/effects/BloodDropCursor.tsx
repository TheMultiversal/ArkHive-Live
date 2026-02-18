'use client';

import { useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

export default function BloodDropCursor() {
  const [isHovering, setIsHovering] = useState(false);
  const [isClicking, setIsClicking] = useState(false);
  const [trail, setTrail] = useState<{ x: number; y: number; id: number }[]>([]);
  
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const smoothX = useSpring(mouseX, { stiffness: 300, damping: 25 });
  const smoothY = useSpring(mouseY, { stiffness: 300, damping: 25 });

  useEffect(() => {
    let trailId = 0;

    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
      
      // Add trail drops occasionally
      if (Math.random() > 0.85) {
        trailId++;
        setTrail(prev => [...prev.slice(-6), { x: e.clientX, y: e.clientY, id: trailId }]);
      }
    };

    const handleMouseDown = () => setIsClicking(true);
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

  return (
    <>
      {/* Blood trail drops */}
      {trail.map((drop, index) => (
        <motion.div
          key={drop.id}
          className="fixed pointer-events-none z-[9999]"
          style={{
            left: drop.x,
            top: drop.y,
            translateX: '-50%',
            translateY: '-50%',
          }}
          initial={{ scale: 0.5, opacity: 0.8 }}
          animate={{ 
            scale: 0,
            opacity: 0,
            y: 30,
          }}
          transition={{ duration: 1.5, ease: 'easeOut' }}
        >
          <svg width="8" height="12" viewBox="0 0 8 12">
            <path
              d="M4 0 C4 0 0 5 0 8 C0 10.5 1.8 12 4 12 C6.2 12 8 10.5 8 8 C8 5 4 0 4 0Z"
              fill="#dc2626"
              opacity={0.6 - index * 0.08}
            />
          </svg>
        </motion.div>
      ))}

      {/* Main cursor - blood drop shape */}
      <motion.div
        className="fixed pointer-events-none z-[10000]"
        style={{
          x: smoothX,
          y: smoothY,
          translateX: '-50%',
          translateY: '-20%',
        }}
      >
        <motion.svg 
          width={isHovering ? 28 : 22} 
          height={isHovering ? 36 : 28}
          viewBox="0 0 22 28"
          animate={{
            scale: isClicking ? 0.85 : 1,
            filter: isClicking 
              ? 'drop-shadow(0 0 12px rgba(220, 38, 38, 1))' 
              : 'drop-shadow(0 0 6px rgba(220, 38, 38, 0.8))',
          }}
          transition={{ duration: 0.1 }}
        >
          <defs>
            <linearGradient id="bloodGradient" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#ef4444" />
              <stop offset="50%" stopColor="#dc2626" />
              <stop offset="100%" stopColor="#991b1b" />
            </linearGradient>
            <radialGradient id="bloodHighlight" cx="30%" cy="30%" r="50%">
              <stop offset="0%" stopColor="#fca5a5" stopOpacity="0.5" />
              <stop offset="100%" stopColor="#dc2626" stopOpacity="0" />
            </radialGradient>
          </defs>

          {/* Blood drop shape */}
          <path
            d="M11 0 C11 0 0 12 0 18 C0 23.5 4.9 28 11 28 C17.1 28 22 23.5 22 18 C22 12 11 0 11 0Z"
            fill="url(#bloodGradient)"
          />
          
          {/* Highlight reflection */}
          <ellipse
            cx="8"
            cy="16"
            rx="3"
            ry="4"
            fill="url(#bloodHighlight)"
          />

          {/* Eye in the center when hovering */}
          {isHovering && (
            <g>
              <ellipse cx="11" cy="17" rx="5" ry="4" fill="#000" opacity="0.4" />
              <circle cx="11" cy="17" r="2" fill="#fff" />
              <circle cx="11" cy="17" r="1" fill="#000" />
            </g>
          )}
        </motion.svg>
      </motion.div>

      {/* Outer ring indicator */}
      <motion.div
        className="fixed pointer-events-none z-[9998] rounded-full border border-blood-600/30"
        style={{
          x: smoothX,
          y: smoothY,
          translateX: '-50%',
          translateY: '-50%',
          width: isHovering ? 50 : 40,
          height: isHovering ? 50 : 40,
        }}
        animate={{
          scale: isClicking ? 1.3 : 1,
          opacity: isClicking ? 0 : 0.5,
          borderColor: isHovering ? 'rgba(239, 68, 68, 0.6)' : 'rgba(220, 38, 38, 0.3)',
        }}
        transition={{ duration: 0.2 }}
      />
    </>
  );
}
