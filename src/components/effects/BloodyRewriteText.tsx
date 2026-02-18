'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';

interface BloodyRewriteTextProps {
  text: string;
  className?: string;
  rewriteInterval?: number; // ms between rewrites
}

export default function BloodyRewriteText({ 
  text, 
  className = '',
  rewriteInterval = 8000,
}: BloodyRewriteTextProps) {
  const [displayText, setDisplayText] = useState('');
  const [isWriting, setIsWriting] = useState(true);
  const [drips, setDrips] = useState<{ id: number; x: number; delay: number }[]>([]);
  const [key, setKey] = useState(0); // Force re-render for animation

  // Typing effect
  useEffect(() => {
    let charIndex = 0;
    let timeout: NodeJS.Timeout;

    const typeChar = () => {
      if (charIndex <= text.length) {
        setDisplayText(text.slice(0, charIndex));
        charIndex++;
        
        // Add blood drip occasionally
        if (charIndex > 5 && Math.random() > 0.85) {
          const newDrip = {
            id: Date.now() + Math.random(),
            x: (charIndex / text.length) * 100,
            delay: Math.random() * 0.5,
          };
          setDrips(prev => [...prev.slice(-8), newDrip]);
        }
        
        timeout = setTimeout(typeChar, 50 + Math.random() * 30);
      } else {
        setIsWriting(false);
      }
    };

    setIsWriting(true);
    setDisplayText('');
    typeChar();

    return () => clearTimeout(timeout);
  }, [text, key]);

  // Rewrite cycle
  useEffect(() => {
    const interval = setInterval(() => {
      setKey(prev => prev + 1);
      setDrips([]);
    }, rewriteInterval);

    return () => clearInterval(interval);
  }, [rewriteInterval]);

  return (
    <div className={`relative ${className}`}>
      {/* Main text with blood effect */}
      <motion.div
        key={key}
        className="relative"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.3 }}
      >
        {/* Text shadow layer for depth */}
        <span 
          className="absolute inset-0 text-blood-950 select-none"
          style={{ 
            transform: 'translate(2px, 2px)',
            WebkitTextStroke: '0px',
          }}
          aria-hidden="true"
        >
          {displayText}
        </span>

        {/* Main bloody text */}
        <span 
          className="relative bg-gradient-to-b from-blood-600 via-blood-700 to-blood-800 bg-clip-text text-transparent"
          style={{
            WebkitTextStroke: '1px rgba(127, 29, 29, 0.5)',
            textShadow: '0 0 30px rgba(220, 38, 38, 0.5), 0 0 60px rgba(220, 38, 38, 0.3)',
            filter: 'drop-shadow(0 2px 4px rgba(0,0,0,0.8))',
          }}
        >
          {displayText}
          
          {/* Cursor while writing */}
          {isWriting && (
            <motion.span
              className="inline-block w-1 h-[0.9em] bg-blood-600 ml-1 align-baseline"
              animate={{ opacity: [1, 0, 1] }}
              transition={{ duration: 0.5, repeat: Infinity }}
              style={{ boxShadow: '0 0 10px #dc2626' }}
            />
          )}
        </span>

        {/* Wet/fresh blood shine effect */}
        <motion.span 
          className="absolute inset-0 bg-gradient-to-br from-blood-500/30 via-transparent to-transparent bg-clip-text text-transparent pointer-events-none select-none"
          animate={{ opacity: [0.3, 0.6, 0.3] }}
          transition={{ duration: 2, repeat: Infinity }}
          aria-hidden="true"
        >
          {displayText}
        </motion.span>
      </motion.div>

      {/* Blood drips falling from letters */}
      <div className="absolute top-full left-0 right-0 h-32 overflow-hidden pointer-events-none">
        <AnimatePresence>
          {drips.map((drip) => (
            <motion.div
              key={drip.id}
              className="absolute"
              style={{ left: `${drip.x}%` }}
              initial={{ y: -10, opacity: 0, scale: 0.5 }}
              animate={{ y: 80, opacity: [0, 1, 1, 0], scale: [0.5, 1, 1, 0.8] }}
              exit={{ opacity: 0 }}
              transition={{ 
                duration: 2.5, 
                delay: drip.delay,
                ease: 'easeIn',
              }}
            >
              {/* Blood drop shape */}
              <svg width="8" height="16" viewBox="0 0 8 16">
                <defs>
                  <linearGradient id={`dropGrad-${drip.id}`} x1="0%" y1="0%" x2="0%" y2="100%">
                    <stop offset="0%" stopColor="#ef4444" />
                    <stop offset="50%" stopColor="#dc2626" />
                    <stop offset="100%" stopColor="#991b1b" />
                  </linearGradient>
                </defs>
                <path
                  d="M4 0 C4 0 0 6 0 10 C0 13 1.8 16 4 16 C6.2 16 8 13 8 10 C8 6 4 0 4 0Z"
                  fill={`url(#dropGrad-${drip.id})`}
                />
                {/* Highlight */}
                <ellipse cx="2.5" cy="9" rx="1" ry="2" fill="#fca5a5" opacity="0.4" />
              </svg>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>

      {/* Splatter effect on completion */}
      <AnimatePresence>
        {!isWriting && (
          <motion.div
            className="absolute -bottom-2 left-0 right-0 h-4 pointer-events-none"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            {[...Array(5)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-1 h-1 bg-blood-700 rounded-full"
                style={{ left: `${10 + i * 20}%` }}
                initial={{ scale: 0, y: 0 }}
                animate={{ 
                  scale: [0, 1.5, 1],
                  y: [0, -5, 0],
                }}
                transition={{ 
                  duration: 0.3, 
                  delay: i * 0.05,
                }}
              />
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
