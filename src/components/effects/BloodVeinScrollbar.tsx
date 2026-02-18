'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useEffect, useState } from 'react';

export default function BloodVeinScrollbar() {
  const { scrollYProgress } = useScroll();
  const [isVisible, setIsVisible] = useState(false);
  
  // Transform scroll progress to height percentage
  const fillHeight = useTransform(scrollYProgress, [0, 1], ['0%', '100%']);
  const pulseIntensity = useTransform(scrollYProgress, [0, 0.5, 1], [0.3, 0.8, 0.3]);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 50);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div 
      className="fixed right-2 top-1/2 -translate-y-1/2 z-50 transition-opacity duration-300"
      style={{ opacity: isVisible ? 1 : 0 }}
    >
      {/* Main vein container */}
      <div className="relative w-3 h-64 bg-black/80 border border-blood-900/50 overflow-hidden">
        {/* Vein structure lines */}
        <svg className="absolute inset-0 w-full h-full" viewBox="0 0 12 256" preserveAspectRatio="none">
          <defs>
            <linearGradient id="veinGradient" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#7f1d1d" />
              <stop offset="50%" stopColor="#dc2626" />
              <stop offset="100%" stopColor="#991b1b" />
            </linearGradient>
          </defs>
          
          {/* Side vein branches */}
          <path d="M0,20 Q6,25 12,20" stroke="#450a0a" strokeWidth="0.5" fill="none" />
          <path d="M0,60 Q6,55 12,60" stroke="#450a0a" strokeWidth="0.5" fill="none" />
          <path d="M0,100 Q6,105 12,100" stroke="#450a0a" strokeWidth="0.5" fill="none" />
          <path d="M0,140 Q6,135 12,140" stroke="#450a0a" strokeWidth="0.5" fill="none" />
          <path d="M0,180 Q6,185 12,180" stroke="#450a0a" strokeWidth="0.5" fill="none" />
          <path d="M0,220 Q6,215 12,220" stroke="#450a0a" strokeWidth="0.5" fill="none" />
        </svg>

        {/* Blood fill level */}
        <motion.div
          className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-blood-800 via-blood-700 to-blood-600"
          style={{ 
            height: fillHeight,
            boxShadow: '0 -4px 20px rgba(220, 38, 38, 0.5)',
          }}
        >
          {/* Blood surface ripple */}
          <motion.div
            className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-b from-blood-500 to-transparent"
            animate={{
              scaleY: [1, 1.5, 1],
              opacity: [0.8, 1, 0.8],
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          />
        </motion.div>

        {/* Pulse effect overlay */}
        <motion.div
          className="absolute inset-0 bg-blood-600/20"
          animate={{
            opacity: [0.1, 0.3, 0.1],
          }}
          transition={{
            duration: 1,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />

        {/* Top and bottom caps */}
        <div className="absolute -top-1 left-1/2 -translate-x-1/2 w-4 h-2 bg-blood-900 rounded-t-full border-t border-x border-blood-800" />
        <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-4 h-2 bg-blood-900 rounded-b-full border-b border-x border-blood-800" />
      </div>

      {/* Percentage indicator */}
      <motion.div 
        className="absolute -left-8 top-1/2 -translate-y-1/2 font-mono text-[10px] text-blood-600/70"
        style={{ opacity: pulseIntensity }}
      >
        <motion.span>
          {scrollYProgress.get() > 0 ? `${Math.round(scrollYProgress.get() * 100)}%` : ''}
        </motion.span>
      </motion.div>
    </div>
  );
}
