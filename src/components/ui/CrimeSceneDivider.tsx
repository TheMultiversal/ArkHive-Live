'use client';

import { motion } from 'framer-motion';

interface CrimeSceneDividerProps {
  variant?: 'caution' | 'crime-scene' | 'biohazard' | 'classified';
  className?: string;
  animated?: boolean;
}

export default function CrimeSceneDivider({ 
  variant = 'crime-scene',
  className = '',
  animated = true
}: CrimeSceneDividerProps) {
  
  const tapeConfigs = {
    'caution': {
      text: 'CAUTION',
      bgColor: '#eab308',
      textColor: '#000',
      pattern: 'stripes',
    },
    'crime-scene': {
      text: 'CRIME SCENE DO NOT CROSS',
      bgColor: '#dc2626',
      textColor: '#fff',
      pattern: 'solid',
    },
    'biohazard': {
      text: '☣ BIOHAZARD ☣',
      bgColor: '#7f1d1d',
      textColor: '#fca5a5',
      pattern: 'warning',
    },
    'classified': {
      text: 'CLASSIFIED • TOP SECRET • CLASSIFIED',
      bgColor: '#1a1a1a',
      textColor: '#dc2626',
      pattern: 'dashed',
    },
  };

  const config = tapeConfigs[variant];

  return (
    <div className={`relative w-full overflow-hidden py-4 ${className}`}>
      {/* Tape roll shadow effect on edges */}
      <div className="absolute left-0 top-1/2 -translate-y-1/2 w-8 h-16 bg-gradient-to-r from-black to-transparent z-10" />
      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-8 h-16 bg-gradient-to-l from-black to-transparent z-10" />

      {/* Main tape */}
      <motion.div
        className="relative h-10 flex items-center overflow-hidden"
        style={{
          backgroundColor: config.bgColor,
          transform: 'rotate(-1deg)',
          boxShadow: '0 4px 15px rgba(0,0,0,0.5)',
        }}
        animate={animated ? {
          rotate: [-1, -0.5, -1],
        } : {}}
        transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
      >
        {/* Stripe pattern for caution tape */}
        {config.pattern === 'stripes' && (
          <div 
            className="absolute inset-0"
            style={{
              background: `repeating-linear-gradient(
                45deg,
                transparent,
                transparent 20px,
                #000 20px,
                #000 40px
              )`,
              opacity: 0.3,
            }}
          />
        )}

        {/* Warning pattern */}
        {config.pattern === 'warning' && (
          <div 
            className="absolute inset-0"
            style={{
              background: `repeating-linear-gradient(
                90deg,
                transparent,
                transparent 100px,
                rgba(0,0,0,0.2) 100px,
                rgba(0,0,0,0.2) 110px
              )`,
            }}
          />
        )}

        {/* Dashed border for classified */}
        {config.pattern === 'dashed' && (
          <>
            <div className="absolute top-0 left-0 right-0 h-1 border-t-2 border-dashed border-blood-700" />
            <div className="absolute bottom-0 left-0 right-0 h-1 border-b-2 border-dashed border-blood-700" />
          </>
        )}

        {/* Scrolling text */}
        <motion.div
          className="flex whitespace-nowrap"
          animate={animated ? {
            x: [0, -500],
          } : {}}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: 'linear',
          }}
        >
          {[...Array(10)].map((_, i) => (
            <span
              key={i}
              className="mx-8 font-bold text-sm tracking-widest"
              style={{ color: config.textColor }}
            >
              {config.text}
            </span>
          ))}
        </motion.div>

        {/* Tape texture overlay */}
        <div 
          className="absolute inset-0 pointer-events-none opacity-20"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='3'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
          }}
        />

        {/* Tape edge tears */}
        <svg className="absolute left-0 top-0 h-full w-4" viewBox="0 0 20 100" preserveAspectRatio="none">
          <path d="M20 0 L15 10 L20 20 L12 35 L20 50 L14 65 L20 80 L16 90 L20 100 L20 0" fill="rgba(0,0,0,0.3)" />
        </svg>
        <svg className="absolute right-0 top-0 h-full w-4" viewBox="0 0 20 100" preserveAspectRatio="none">
          <path d="M0 0 L5 15 L0 25 L8 40 L0 55 L6 70 L0 85 L4 95 L0 100 L0 0" fill="rgba(0,0,0,0.3)" />
        </svg>
      </motion.div>

      {/* Second tape layer (offset) */}
      <motion.div
        className="absolute top-1/2 left-0 right-0 h-8 flex items-center overflow-hidden opacity-40"
        style={{
          backgroundColor: config.bgColor,
          transform: 'rotate(2deg) translateY(-50%)',
          filter: 'blur(1px)',
        }}
      >
        <div className="flex whitespace-nowrap">
          {[...Array(10)].map((_, i) => (
            <span
              key={i}
              className="mx-8 font-bold text-sm tracking-widest"
              style={{ color: config.textColor }}
            >
              {config.text}
            </span>
          ))}
        </div>
      </motion.div>

      {/* Blood splatter decoration */}
      {variant === 'crime-scene' && (
        <>
          <motion.div
            className="absolute left-[10%] top-0"
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 0.6 }}
            transition={{ delay: 0.5 }}
          >
            <svg width="40" height="40" viewBox="0 0 40 40">
              <circle cx="20" cy="20" r="8" fill="#7f1d1d" />
              <ellipse cx="15" cy="30" rx="3" ry="5" fill="#7f1d1d" />
              <ellipse cx="28" cy="28" rx="2" ry="4" fill="#7f1d1d" />
            </svg>
          </motion.div>
          <motion.div
            className="absolute right-[15%] bottom-0"
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 0.5 }}
            transition={{ delay: 0.7 }}
          >
            <svg width="30" height="30" viewBox="0 0 30 30">
              <circle cx="15" cy="15" r="6" fill="#991b1b" />
              <ellipse cx="12" cy="24" rx="2" ry="4" fill="#991b1b" />
            </svg>
          </motion.div>
        </>
      )}
    </div>
  );
}
