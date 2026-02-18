'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useState, ReactNode } from 'react';
import Link from 'next/link';

interface DefibrillatorButtonProps {
  children: ReactNode;
  onClick?: () => void;
  href?: string;
  className?: string;
  variant?: 'primary' | 'secondary' | 'danger';
  size?: 'sm' | 'md' | 'lg';
  icon?: ReactNode;
}

export default function DefibrillatorButton({ 
  children, 
  onClick, 
  href,
  className = '',
  variant = 'primary',
  size = 'md',
  icon,
}: DefibrillatorButtonProps) {
  const [isCharging, setIsCharging] = useState(false);
  const [isShocking, setIsShocking] = useState(false);
  const [showClear, setShowClear] = useState(false);

  const handleClick = () => {
    if (isCharging || isShocking) return;
    
    // Start charging sequence
    setIsCharging(true);
    
    setTimeout(() => {
      setShowClear(true);
      setTimeout(() => {
        setIsCharging(false);
        setIsShocking(true);
        setShowClear(false);
        
        // Trigger actual click/navigation after shock
        setTimeout(() => {
          onClick?.();
          if (href) {
            window.location.href = href;
          }
          setIsShocking(false);
        }, 300);
      }, 500);
    }, 800);
  };

  const variantStyles = {
    primary: 'from-blood-800 to-blood-900 hover:from-blood-700 hover:to-blood-800',
    secondary: 'from-gray-700 to-gray-900 hover:from-gray-600 hover:to-gray-800',
    danger: 'from-blood-800 to-blood-950 hover:from-blood-800 hover:to-blood-900',
  };

  const sizeStyles = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg',
  };

  return (
    <motion.button
      className={`
        relative overflow-hidden
        ${sizeStyles[size]} rounded-lg
        bg-gradient-to-b ${variantStyles[variant]}
        border border-blood-900/50
        font-bold text-white uppercase tracking-wider
        transition-all duration-300
        ${className}
      `}
      onClick={handleClick}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      animate={{
        boxShadow: isCharging 
          ? ['0 0 0px rgba(239,68,68,0)', '0 0 30px rgba(239,68,68,0.8)', '0 0 0px rgba(239,68,68,0)']
          : isShocking
          ? '0 0 50px rgba(239,68,68,1)'
          : '0 0 10px rgba(239,68,68,0.3)'
      }}
      transition={{ duration: isCharging ? 0.3 : 0.1, repeat: isCharging ? Infinity : 0 }}
    >
      {/* Paddle handles on sides */}
      <div className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1/2 w-4 h-12 bg-gradient-to-r from-gray-600 to-gray-700 rounded-l-full border border-gray-500" />
      <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 w-4 h-12 bg-gradient-to-l from-gray-600 to-gray-700 rounded-r-full border border-gray-500" />

      {/* Metal paddle surface */}
      <div className="absolute inset-x-2 top-1 h-1 bg-gradient-to-r from-transparent via-gray-400/20 to-transparent rounded-full" />
      
      {/* Content */}
      <span className={`relative z-10 flex items-center justify-center gap-2 ${isShocking ? 'opacity-0' : 'opacity-100'}`}>
        {icon}
        {children}
      </span>

      {/* Charging indicator */}
      <AnimatePresence>
        {isCharging && (
          <motion.div
            className="absolute inset-0 flex items-center justify-center bg-black/50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="text-yellow-400 font-mono text-sm"
              animate={{ opacity: [0.5, 1, 0.5] }}
              transition={{ duration: 0.3, repeat: Infinity }}
            >
              CHARGING...
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* CLEAR! text */}
      <AnimatePresence>
        {showClear && (
          <motion.div
            className="absolute inset-0 flex items-center justify-center bg-blood-900/90"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 1.5 }}
          >
            <span className="text-white font-bold text-xl tracking-widest">CLEAR!</span>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Shock effect */}
      <AnimatePresence>
        {isShocking && (
          <>
            {/* White flash */}
            <motion.div
              className="absolute inset-0 bg-white"
              initial={{ opacity: 1 }}
              animate={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
            />
            
            {/* Electric arcs */}
            {[...Array(8)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute inset-0"
                initial={{ opacity: 0 }}
                animate={{ opacity: [0, 1, 0] }}
                transition={{ duration: 0.1, delay: i * 0.02 }}
              >
                <svg className="w-full h-full" viewBox="0 0 100 40">
                  <motion.path
                    d={`M${10 + i * 10} 20 L${15 + i * 10} ${10 + Math.random() * 10} L${20 + i * 10} ${25 + Math.random() * 10} L${25 + i * 10} 20`}
                    stroke="#fff"
                    strokeWidth="2"
                    fill="none"
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    transition={{ duration: 0.1 }}
                  />
                </svg>
              </motion.div>
            ))}
          </>
        )}
      </AnimatePresence>

      {/* Continuous subtle pulse */}
      <motion.div
        className="absolute inset-0 rounded-lg"
        animate={{
          boxShadow: [
            'inset 0 0 20px rgba(239,68,68,0.2)',
            'inset 0 0 30px rgba(239,68,68,0.4)',
            'inset 0 0 20px rgba(239,68,68,0.2)',
          ]
        }}
        transition={{ duration: 2, repeat: Infinity }}
      />
    </motion.button>
  );
}
