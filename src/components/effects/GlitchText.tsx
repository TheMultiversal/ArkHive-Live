'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect, ReactNode } from 'react';

export interface GlitchTextProps {
  children?: ReactNode;
  text?: string;
  className?: string;
  triggerWords?: string[];
  intensity?: 'low' | 'medium' | 'high';
}

// Words that trigger glitch effect
const DEFAULT_TRIGGER_WORDS = [
  'government', 'death', 'cover-up', 'coverup', 'conspiracy', 'kill', 'killed',
  'murder', 'vaccine', 'classified', 'secret', 'hidden', 'truth', 'lies',
  'corruption', 'fda', 'cdc', 'cia', 'fbi', 'nsa', 'control', 'surveillance',
  'experiment', 'poison', 'toxic', 'cancer', 'radiation', 'fluoride'
];

export default function GlitchText({ 
  children, 
  text,
  className = '',
  triggerWords = DEFAULT_TRIGGER_WORDS,
  intensity = 'medium'
}: GlitchTextProps) {
  const [isGlitching, setIsGlitching] = useState(false);
  const [glitchOffset, setGlitchOffset] = useState({ x: 0, y: 0 });

  // Use text prop if provided, otherwise use children
  const content = text || children;

  const intensityConfig = {
    low: { duration: 150, offset: 2, chance: 0.3 },
    medium: { duration: 300, offset: 4, chance: 0.5 },
    high: { duration: 500, offset: 6, chance: 0.8 },
  };

  const config = intensityConfig[intensity];

  useEffect(() => {
    if (isGlitching) {
      const interval = setInterval(() => {
        setGlitchOffset({
          x: (Math.random() - 0.5) * config.offset,
          y: (Math.random() - 0.5) * config.offset,
        });
      }, 50);

      const timeout = setTimeout(() => {
        setIsGlitching(false);
        setGlitchOffset({ x: 0, y: 0 });
      }, config.duration);

      return () => {
        clearInterval(interval);
        clearTimeout(timeout);
      };
    }
  }, [isGlitching, config]);

  const handleMouseEnter = () => {
    // Check if the text contains any trigger words
    const text = typeof children === 'string' ? children.toLowerCase() : '';
    const hasTriggerWord = triggerWords.some(word => text.includes(word.toLowerCase()));
    
    if (hasTriggerWord || Math.random() < config.chance) {
      setIsGlitching(true);
    }
  };

  return (
    <span
      className={`relative inline-block ${className}`}
      onMouseEnter={handleMouseEnter}
      style={{
        transform: isGlitching ? `translate(${glitchOffset.x}px, ${glitchOffset.y}px)` : 'none',
      }}
    >
      {/* Main text */}
      <span className="relative z-10">{content}</span>

      {/* Glitch layers */}
      <AnimatePresence>
        {isGlitching && (
          <>
            {/* Red offset layer */}
            <motion.span
              className="absolute inset-0 text-blood-600 z-0"
              initial={{ opacity: 0 }}
              animate={{ 
                opacity: [0, 0.8, 0],
                x: [0, -3, 2, -1, 0],
                y: [0, 1, -2, 1, 0],
              }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.15, repeat: 2 }}
              style={{ clipPath: 'inset(0 0 50% 0)' }}
              aria-hidden="true"
            >
              {content}
            </motion.span>

            {/* Cyan offset layer */}
            <motion.span
              className="absolute inset-0 text-cyan-500 z-0"
              initial={{ opacity: 0 }}
              animate={{ 
                opacity: [0, 0.8, 0],
                x: [0, 3, -2, 1, 0],
                y: [0, -1, 2, -1, 0],
              }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.15, repeat: 2 }}
              style={{ clipPath: 'inset(50% 0 0 0)' }}
              aria-hidden="true"
            >
              {content}
            </motion.span>

            {/* Scanline effect */}
            <motion.div
              className="absolute inset-0 z-20 pointer-events-none"
              initial={{ opacity: 0 }}
              animate={{ opacity: [0, 0.3, 0] }}
              exit={{ opacity: 0 }}
              style={{
                background: 'repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(0,0,0,0.3) 2px, rgba(0,0,0,0.3) 4px)',
              }}
            />

            {/* Random character corruption */}
            <motion.span
              className="absolute inset-0 z-30 text-blood-600 font-mono"
              initial={{ opacity: 0 }}
              animate={{ opacity: [0, 1, 0] }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.1 }}
              aria-hidden="true"
            >
              {typeof children === 'string' 
                ? children.split('').map((char, i) => 
                    Math.random() > 0.7 ? String.fromCharCode(33 + Math.floor(Math.random() * 94)) : char
                  ).join('')
                : children
              }
            </motion.span>
          </>
        )}
      </AnimatePresence>
    </span>
  );
}

// Wrapper component to apply glitch to entire paragraphs/sections
export function GlitchParagraph({ 
  children, 
  className = '',
  triggerWords = DEFAULT_TRIGGER_WORDS,
}: {
  children: string;
  className?: string;
  triggerWords?: string[];
}) {
  // Split text and wrap trigger words with GlitchText
  const words = children.split(/(\s+)/);
  
  return (
    <span className={className}>
      {words.map((word, index) => {
        const lowerWord = word.toLowerCase().replace(/[^a-z]/g, '');
        const isTrigger = triggerWords.some(trigger => 
          lowerWord.includes(trigger.toLowerCase())
        );
        
        if (isTrigger && word.trim()) {
          return (
            <GlitchText key={index} triggerWords={triggerWords}>
              {word}
            </GlitchText>
          );
        }
        return <span key={index}>{word}</span>;
      })}
    </span>
  );
}

// Named export for compatibility
export { GlitchText };
