'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { cn } from '@/lib/utils';

// ============================================================
// Types
// ============================================================

interface NotificationBadgeProps {
  count: number;
  max?: number;
  showZero?: boolean;
  pulse?: boolean;
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

// ============================================================
// Component
// ============================================================

export function NotificationBadge({
  count,
  max = 99,
  showZero = false,
  pulse = true,
  size = 'sm',
  className,
}: NotificationBadgeProps) {
  const displayCount = count > max ? `${max}+` : count;
  const show = showZero ? count >= 0 : count > 0;

  const sizeClasses = {
    sm: 'min-w-[18px] h-[18px] text-[10px] -top-1 -right-1',
    md: 'min-w-[22px] h-[22px] text-xs -top-1.5 -right-1.5',
    lg: 'min-w-[26px] h-[26px] text-sm -top-2 -right-2',
  };

  return (
    <AnimatePresence>
      {show && (
        <motion.span
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0, opacity: 0 }}
          transition={{
            type: 'spring',
            stiffness: 500,
            damping: 30,
          }}
          className={cn(
            'absolute flex items-center justify-center px-1 bg-blood-600 text-white font-bold rounded-full',
            sizeClasses[size],
            className
          )}
        >
          {displayCount}
          
          {/* Pulse animation */}
          {pulse && count > 0 && (
            <motion.span
              className="absolute inset-0 bg-blood-500 rounded-full"
              initial={{ scale: 1, opacity: 0.5 }}
              animate={{
                scale: [1, 1.5, 1],
                opacity: [0.5, 0, 0.5],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
            />
          )}
        </motion.span>
      )}
    </AnimatePresence>
  );
}

// ============================================================
// Standalone Badge (for non-icon usage)
// ============================================================

interface StandaloneBadgeProps {
  count: number;
  label?: string;
  variant?: 'default' | 'success' | 'warning' | 'error' | 'info';
  className?: string;
}

export function StandaloneBadge({
  count,
  label,
  variant = 'default',
  className,
}: StandaloneBadgeProps) {
  const variantClasses = {
    default: 'bg-zinc-700 text-zinc-300',
    success: 'bg-green-500/20 text-green-400',
    warning: 'bg-yellow-500/20 text-yellow-400',
    error: 'bg-red-500/20 text-red-400',
    info: 'bg-blue-500/20 text-blue-400',
  };

  return (
    <span
      className={cn(
        'inline-flex items-center gap-1.5 px-2 py-0.5 text-xs font-medium',
        variantClasses[variant],
        className
      )}
    >
      <span className="font-bold">{count}</span>
      {label && <span className="text-inherit/70">{label}</span>}
    </span>
  );
}

// ============================================================
// Dot Badge (simple indicator)
// ============================================================

interface DotBadgeProps {
  visible?: boolean;
  color?: 'red' | 'green' | 'yellow' | 'blue' | 'purple';
  pulse?: boolean;
  className?: string;
}

export function DotBadge({
  visible = true,
  color = 'red',
  pulse = false,
  className,
}: DotBadgeProps) {
  const colorClasses = {
    red: 'bg-red-500',
    green: 'bg-green-500',
    yellow: 'bg-yellow-500',
    blue: 'bg-blue-500',
    purple: 'bg-purple-500',
  };

  if (!visible) return null;

  return (
    <span
      className={cn(
        'absolute -top-0.5 -right-0.5 w-2.5 h-2.5 rounded-full',
        colorClasses[color],
        pulse && 'animate-pulse',
        className
      )}
    />
  );
}
