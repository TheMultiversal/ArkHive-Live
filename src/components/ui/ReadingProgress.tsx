"use client";

import { useState, useEffect, useCallback } from "react";

interface ReadingProgressProps {
  /** Target element selector to track (defaults to article) */
  targetSelector?: string;
  /** Show percentage text */
  showPercentage?: boolean;
  /** Color of the progress bar */
  barColor?: string;
  /** Height of the progress bar */
  height?: number;
  /** Position: top or bottom */
  position?: "top" | "bottom";
  /** Z-index */
  zIndex?: number;
}

/**
 * Reading progress indicator that shows scroll progress through the page
 * Appears as a thin bar at the top or bottom of the viewport
 */
export default function ReadingProgress({
  targetSelector = "article",
  showPercentage = false,
  barColor = "rgb(214, 69, 69)", // blood-500
  height = 3,
  position = "top",
  zIndex = 100,
}: ReadingProgressProps) {
  const [progress, setProgress] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  const calculateProgress = useCallback(() => {
    const target = document.querySelector(targetSelector);
    
    if (!target) {
      // Fall back to document body
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const newProgress = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
      setProgress(Math.min(100, Math.max(0, newProgress)));
      setIsVisible(scrollTop > 100);
      return;
    }

    const rect = target.getBoundingClientRect();
    const targetStart = window.scrollY + rect.top;
    const targetHeight = rect.height;
    const viewportHeight = window.innerHeight;
    const scrollTop = window.scrollY;

    // Calculate how much of the target has been scrolled through
    const scrolledPastStart = scrollTop - targetStart + viewportHeight * 0.2;
    const totalScrollableHeight = targetHeight - viewportHeight * 0.8;
    
    let newProgress = 0;
    if (scrolledPastStart > 0 && totalScrollableHeight > 0) {
      newProgress = (scrolledPastStart / totalScrollableHeight) * 100;
    }
    
    setProgress(Math.min(100, Math.max(0, newProgress)));
    
    // Only show when scrolled past the target start
    setIsVisible(scrollTop > targetStart - 100);
  }, [targetSelector]);

  useEffect(() => {
    // Initial calculation
    calculateProgress();

    // Add scroll listener
    window.addEventListener("scroll", calculateProgress, { passive: true });
    window.addEventListener("resize", calculateProgress, { passive: true });

    return () => {
      window.removeEventListener("scroll", calculateProgress);
      window.removeEventListener("resize", calculateProgress);
    };
  }, [calculateProgress]);

  if (!isVisible) return null;

  const positionStyles = position === "top" 
    ? { top: 0 } 
    : { bottom: 0 };

  return (
    <div
      className="fixed left-0 right-0 pointer-events-none"
      style={{ 
        ...positionStyles,
        zIndex,
        height: `${height}px`,
      }}
    >
      {/* Background track */}
      <div 
        className="absolute inset-0 bg-black/80"
        style={{ height: `${height}px` }}
      />
      
      {/* Progress bar */}
      <div
        className="absolute left-0 top-0 transition-all duration-100 ease-out"
        style={{
          width: `${progress}%`,
          height: `${height}px`,
          background: `linear-gradient(90deg, ${barColor}80, ${barColor})`,
          boxShadow: `0 0 10px ${barColor}40, 0 0 20px ${barColor}20`,
        }}
      />
      
      {/* Percentage indicator (optional) */}
      {showPercentage && progress > 0 && (
        <div
          className="absolute top-full mt-1 px-2 py-0.5 bg-black/90 border border-zinc-800/50 text-[10px] text-zinc-400 font-mono pointer-events-none"
          style={{
            left: `${Math.min(progress, 95)}%`,
            transform: "translateX(-50%)",
          }}
        >
          {Math.round(progress)}%
        </div>
      )}
    </div>
  );
}

/**
 * Hook version for custom implementations
 */
export function useReadingProgress(targetSelector = "article") {
  const [progress, setProgress] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const calculateProgress = () => {
      const target = document.querySelector(targetSelector);
      
      if (!target) {
        const scrollTop = window.scrollY;
        const docHeight = document.documentElement.scrollHeight - window.innerHeight;
        const newProgress = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
        setProgress(Math.min(100, Math.max(0, newProgress)));
        setIsVisible(scrollTop > 100);
        return;
      }

      const rect = target.getBoundingClientRect();
      const targetStart = window.scrollY + rect.top;
      const targetHeight = rect.height;
      const viewportHeight = window.innerHeight;
      const scrollTop = window.scrollY;

      const scrolledPastStart = scrollTop - targetStart + viewportHeight * 0.2;
      const totalScrollableHeight = targetHeight - viewportHeight * 0.8;
      
      let newProgress = 0;
      if (scrolledPastStart > 0 && totalScrollableHeight > 0) {
        newProgress = (scrolledPastStart / totalScrollableHeight) * 100;
      }
      
      setProgress(Math.min(100, Math.max(0, newProgress)));
      setIsVisible(scrollTop > targetStart - 100);
    };

    calculateProgress();
    window.addEventListener("scroll", calculateProgress, { passive: true });
    window.addEventListener("resize", calculateProgress, { passive: true });

    return () => {
      window.removeEventListener("scroll", calculateProgress);
      window.removeEventListener("resize", calculateProgress);
    };
  }, [targetSelector]);

  return { progress, isVisible };
}
