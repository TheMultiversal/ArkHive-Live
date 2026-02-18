'use client';

import { useState, useEffect } from 'react';

interface ScrollPosition {
  x: number;
  y: number;
  direction: 'up' | 'down' | 'none';
  isAtTop: boolean;
  isAtBottom: boolean;
}

/**
 * Custom hook to track scroll position and direction
 * @param threshold - Minimum scroll amount to trigger direction change (default: 10)
 * @returns ScrollPosition object with current position and direction info
 * 
 * @example
 * ```tsx
 * function Header() {
 *   const { y, direction, isAtTop } = useScrollPosition();
 *   
 *   return (
 *     <header className={direction === 'down' && !isAtTop ? 'hidden' : 'visible'}>
 *       ...
 *     </header>
 *   );
 * }
 * ```
 */
export function useScrollPosition(threshold = 10): ScrollPosition {
  const [scrollPosition, setScrollPosition] = useState<ScrollPosition>({
    x: 0,
    y: 0,
    direction: 'none',
    isAtTop: true,
    isAtBottom: false,
  });

  useEffect(() => {
    let lastScrollY = window.scrollY;
    let ticking = false;

    const updateScrollPosition = () => {
      const currentScrollY = window.scrollY;
      const currentScrollX = window.scrollX;
      
      // Determine scroll direction
      let direction: 'up' | 'down' | 'none' = 'none';
      if (Math.abs(currentScrollY - lastScrollY) >= threshold) {
        direction = currentScrollY > lastScrollY ? 'down' : 'up';
        lastScrollY = currentScrollY;
      }

      // Check if at top or bottom
      const isAtTop = currentScrollY <= 0;
      const isAtBottom = 
        window.innerHeight + currentScrollY >= 
        document.documentElement.scrollHeight - 10;

      setScrollPosition({
        x: currentScrollX,
        y: currentScrollY,
        direction,
        isAtTop,
        isAtBottom,
      });

      ticking = false;
    };

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(updateScrollPosition);
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    
    // Initial position
    updateScrollPosition();

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [threshold]);

  return scrollPosition;
}
