'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

interface ScrollProgressProps {
  className?: string;
  color?: string;
}

/**
 * Scroll progress indicator bar at the top of the page
 */
export default function ScrollProgress({ 
  className = '', 
  color = 'bg-blood-600' 
}: ScrollProgressProps) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const updateProgress = () => {
      const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrolled = window.scrollY;
      const progress = scrollHeight > 0 ? (scrolled / scrollHeight) * 100 : 0;
      setProgress(progress);
    };

    window.addEventListener('scroll', updateProgress);
    return () => window.removeEventListener('scroll', updateProgress);
  }, []);

  return (
    <div className={`fixed top-0 left-0 right-0 h-1 bg-zinc-900 z-[100] ${className}`}>
      <motion.div
        className={`h-full ${color}`}
        style={{ width: `${progress}%` }}
        transition={{ duration: 0.1 }}
      />
    </div>
  );
}
