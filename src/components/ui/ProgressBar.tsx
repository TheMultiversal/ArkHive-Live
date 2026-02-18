'use client';

import { useEffect, useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

// Linear Progress Bar
interface ProgressBarProps {
  value: number;
  max?: number;
  variant?: 'default' | 'danger' | 'warning' | 'success' | 'blood';
  size?: 'sm' | 'md' | 'lg';
  showValue?: boolean;
  animated?: boolean;
  striped?: boolean;
  label?: string;
  className?: string;
}

const variantColors: Record<string, string> = {
  default: 'bg-zinc-500',
  danger: 'bg-red-500',
  warning: 'bg-yellow-500',
  success: 'bg-green-500',
  blood: 'bg-gradient-to-r from-blood-700 to-blood-500',
};

const sizeClasses: Record<string, string> = {
  sm: 'h-1',
  md: 'h-2',
  lg: 'h-4',
};

export default function ProgressBar({
  value,
  max = 100,
  variant = 'blood',
  size = 'md',
  showValue = false,
  animated = true,
  striped = false,
  label,
  className,
}: ProgressBarProps) {
  const percentage = Math.min(Math.max((value / max) * 100, 0), 100);

  return (
    <div className={cn('w-full', className)}>
      {(label || showValue) && (
        <div className="flex justify-between items-center mb-1">
          {label && <span className="text-sm text-zinc-400">{label}</span>}
          {showValue && (
            <span className="text-sm font-mono text-zinc-300">
              {Math.round(percentage)}%
            </span>
          )}
        </div>
      )}
      <div
        className={cn(
          'w-full bg-zinc-800 overflow-hidden',
          sizeClasses[size]
        )}
        role="progressbar"
        aria-valuenow={value}
        aria-valuemin={0}
        aria-valuemax={max}
      >
        <motion.div
          className={cn(
            'h-full',
            variantColors[variant],
            striped && 'bg-stripes'
          )}
          initial={animated ? { width: 0 } : { width: `${percentage}%` }}
          animate={{ width: `${percentage}%` }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
          style={striped ? {
            backgroundImage: 'linear-gradient(45deg, rgba(255,255,255,0.15) 25%, transparent 25%, transparent 50%, rgba(255,255,255,0.15) 50%, rgba(255,255,255,0.15) 75%, transparent 75%, transparent)',
            backgroundSize: '1rem 1rem',
          } : undefined}
        />
      </div>
    </div>
  );
}

// Circular Progress
interface CircularProgressProps {
  value: number;
  max?: number;
  size?: number;
  strokeWidth?: number;
  variant?: 'default' | 'danger' | 'warning' | 'success' | 'blood';
  showValue?: boolean;
  label?: string;
  className?: string;
}

const circularColors: Record<string, string> = {
  default: '#71717a', // zinc-500
  danger: '#ef4444', // red-500
  warning: '#eab308', // yellow-500
  success: '#22c55e', // green-500
  blood: '#d64545', // blood-500
};

export function CircularProgress({
  value,
  max = 100,
  size = 80,
  strokeWidth = 8,
  variant = 'blood',
  showValue = true,
  label,
  className,
}: CircularProgressProps) {
  const percentage = Math.min(Math.max((value / max) * 100, 0), 100);
  const radius = (size - strokeWidth) / 2;
  const circumference = radius * 2 * Math.PI;
  const strokeDashoffset = circumference - (percentage / 100) * circumference;

  return (
    <div className={cn('inline-flex flex-col items-center', className)}>
      <div className="relative" style={{ width: size, height: size }}>
        <svg
          className="transform -rotate-90"
          width={size}
          height={size}
        >
          {/* Background circle */}
          <circle
            className="text-zinc-800"
            strokeWidth={strokeWidth}
            stroke="currentColor"
            fill="transparent"
            r={radius}
            cx={size / 2}
            cy={size / 2}
          />
          {/* Progress circle */}
          <motion.circle
            stroke={circularColors[variant]}
            strokeWidth={strokeWidth}
            strokeLinecap="square"
            fill="transparent"
            r={radius}
            cx={size / 2}
            cy={size / 2}
            initial={{ strokeDashoffset: circumference }}
            animate={{ strokeDashoffset }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
            style={{
              strokeDasharray: circumference,
            }}
          />
        </svg>
        {showValue && (
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="text-lg font-mono font-bold text-zinc-200">
              {Math.round(percentage)}%
            </span>
          </div>
        )}
      </div>
      {label && (
        <span className="mt-2 text-sm text-zinc-400">{label}</span>
      )}
    </div>
  );
}

// Indeterminate Loading Bar
interface IndeterminateProgressProps {
  variant?: 'default' | 'danger' | 'warning' | 'success' | 'blood';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

export function IndeterminateProgress({
  variant = 'blood',
  size = 'md',
  className,
}: IndeterminateProgressProps) {
  return (
    <div
      className={cn(
        'w-full bg-zinc-800 overflow-hidden',
        sizeClasses[size],
        className
      )}
      role="progressbar"
      aria-busy="true"
    >
      <motion.div
        className={cn('h-full w-1/3', variantColors[variant])}
        animate={{
          x: ['0%', '200%', '0%'],
        }}
        transition={{
          duration: 1.5,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />
    </div>
  );
}

// Segmented Progress (for multi-step)
interface SegmentedProgressProps {
  current: number;
  total: number;
  labels?: string[];
  variant?: 'default' | 'danger' | 'warning' | 'success' | 'blood';
  className?: string;
}

export function SegmentedProgress({
  current,
  total,
  labels,
  variant = 'blood',
  className,
}: SegmentedProgressProps) {
  return (
    <div className={cn('w-full', className)}>
      <div className="flex gap-1">
        {Array.from({ length: total }).map((_, index) => (
          <motion.div
            key={index}
            className={cn(
              'h-2 flex-1',
              index < current ? variantColors[variant] : 'bg-zinc-700'
            )}
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.3, delay: index * 0.1 }}
          />
        ))}
      </div>
      {labels && labels.length > 0 && (
        <div className="flex justify-between mt-2">
          {labels.map((label, index) => (
            <span
              key={index}
              className={cn(
                'text-xs',
                index < current ? 'text-zinc-300' : 'text-zinc-500'
              )}
            >
              {label}
            </span>
          ))}
        </div>
      )}
    </div>
  );
}

// Progress with animated counter
interface AnimatedProgressProps extends ProgressBarProps {
  duration?: number;
}

export function AnimatedProgress({
  value,
  max = 100,
  duration = 1000,
  ...props
}: AnimatedProgressProps) {
  const [displayValue, setDisplayValue] = useState(0);
  const displayValueRef = useRef(0);

  useEffect(() => {
    const startTime = Date.now();
    const startValue = displayValueRef.current;
    const endValue = value;

    const animate = () => {
      const elapsed = Date.now() - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3); // easeOutCubic
      const current = startValue + (endValue - startValue) * eased;

      displayValueRef.current = current;
      setDisplayValue(current);

      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };

    requestAnimationFrame(animate);
  }, [value, duration]);

  return <ProgressBar value={displayValue} max={max} {...props} />;
}

// Stacked Progress (shows multiple values)
interface StackedProgressProps {
  segments: Array<{
    value: number;
    color: string;
    label?: string;
  }>;
  total?: number;
  size?: 'sm' | 'md' | 'lg';
  showLegend?: boolean;
  className?: string;
}

export function StackedProgress({
  segments,
  total,
  size = 'md',
  showLegend = false,
  className,
}: StackedProgressProps) {
  const computedTotal = total || segments.reduce((acc, seg) => acc + seg.value, 0);

  return (
    <div className={cn('w-full', className)}>
      <div
        className={cn(
          'w-full bg-zinc-800 overflow-hidden flex',
          sizeClasses[size]
        )}
        role="progressbar"
      >
        {segments.map((segment, index) => {
          const width = (segment.value / computedTotal) * 100;
          return (
            <motion.div
              key={index}
              className="h-full"
              style={{ backgroundColor: segment.color }}
              initial={{ width: 0 }}
              animate={{ width: `${width}%` }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            />
          );
        })}
      </div>
      {showLegend && (
        <div className="flex flex-wrap gap-4 mt-3">
          {segments.map((segment, index) => (
            <div key={index} className="flex items-center gap-2">
              <div
                className="w-3 h-3"
                style={{ backgroundColor: segment.color }}
              />
              <span className="text-xs text-zinc-400">
                {segment.label || `Segment ${index + 1}`}: {segment.value}
              </span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
