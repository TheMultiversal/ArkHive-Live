'use client';

import { motion } from 'framer-motion';
import { useEffect, useRef } from 'react';

interface StaticNoiseProps {
  className?: string;
  opacity?: number;
  intensity?: 'low' | 'medium' | 'high';
}

export default function StaticNoise({ 
  className = '', 
  opacity = 0.03,
  intensity = 'low'
}: StaticNoiseProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const intensityMap = {
      low: 30,
      medium: 60,
      high: 120,
    };

    const fps = intensityMap[intensity];
    let animationId: number;
    let lastTime = 0;
    const interval = 1000 / fps;

    const generateNoise = (timestamp: number) => {
      if (timestamp - lastTime >= interval) {
        lastTime = timestamp;
        
        const imageData = ctx.createImageData(canvas.width, canvas.height);
        const data = imageData.data;

        for (let i = 0; i < data.length; i += 4) {
          const value = Math.random() * 255;
          data[i] = value;     // R
          data[i + 1] = value; // G
          data[i + 2] = value; // B
          data[i + 3] = 255;   // A
        }

        ctx.putImageData(imageData, 0, 0);
      }

      animationId = requestAnimationFrame(generateNoise);
    };

    // Set canvas size
    canvas.width = 128;
    canvas.height = 128;

    animationId = requestAnimationFrame(generateNoise);

    return () => {
      cancelAnimationFrame(animationId);
    };
  }, [intensity]);

  return (
    <div 
      className={`absolute inset-0 pointer-events-none overflow-hidden ${className}`}
      style={{ opacity }}
    >
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full"
        style={{ 
          imageRendering: 'pixelated',
        }}
      />
    </div>
  );
}

// Scan line effect overlay
export function ScanLines({ className = '', opacity = 0.02 }: { className?: string; opacity?: number }) {
  return (
    <div 
      className={`absolute inset-0 pointer-events-none ${className}`}
      style={{
        opacity,
        background: 'repeating-linear-gradient(0deg, transparent 0px, transparent 1px, rgba(0, 0, 0, 0.3) 1px, rgba(0, 0, 0, 0.3) 2px)',
        backgroundSize: '100% 4px',
      }}
    />
  );
}

// Vertical hold glitch effect
export function VerticalHoldGlitch({ className = '' }: { className?: string }) {
  return (
    <motion.div
      className={`absolute inset-0 pointer-events-none ${className}`}
      style={{
        background: 'linear-gradient(to bottom, transparent 0%, rgba(220, 38, 38, 0.1) 50%, transparent 51%)',
        backgroundSize: '100% 200%',
      }}
      animate={{
        backgroundPositionY: ['0%', '200%'],
      }}
      transition={{
        duration: 8,
        repeat: Infinity,
        ease: 'linear',
      }}
    />
  );
}

// Chromatic aberration effect (color shift on edges)
export function ChromaticAberration({ 
  className = '',
  children 
}: { 
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <div className={`relative ${className}`}>
      {/* Red layer offset left */}
      <motion.div
        className="absolute inset-0 mix-blend-multiply pointer-events-none"
        style={{
          filter: 'url(#red-channel)',
        }}
        animate={{
          x: [-1, 1, -1],
        }}
        transition={{
          duration: 0.1,
          repeat: Infinity,
          repeatDelay: 3,
        }}
      >
        {children}
      </motion.div>
      
      {/* Cyan layer offset right */}
      <motion.div
        className="absolute inset-0 mix-blend-multiply pointer-events-none"
        style={{
          filter: 'url(#cyan-channel)',
        }}
        animate={{
          x: [1, -1, 1],
        }}
        transition={{
          duration: 0.1,
          repeat: Infinity,
          repeatDelay: 3,
        }}
      >
        {children}
      </motion.div>
      
      {/* Main content */}
      <div className="relative">
        {children}
      </div>

      {/* SVG filters */}
      <svg className="hidden">
        <defs>
          <filter id="red-channel">
            <feColorMatrix
              type="matrix"
              values="1 0 0 0 0
                      0 0 0 0 0
                      0 0 0 0 0
                      0 0 0 1 0"
            />
          </filter>
          <filter id="cyan-channel">
            <feColorMatrix
              type="matrix"
              values="0 0 0 0 0
                      0 1 0 0 0
                      0 0 1 0 0
                      0 0 0 1 0"
            />
          </filter>
        </defs>
      </svg>
    </div>
  );
}
