'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Star, AlertTriangle, Shield, Skull } from 'lucide-react';
import { cn } from '@/lib/utils';

interface RatingProps {
  value: number;
  max?: number;
  onChange?: (value: number) => void;
  readonly?: boolean;
  size?: 'sm' | 'md' | 'lg';
  showValue?: boolean;
  className?: string;
}

const sizeClasses = {
  sm: 'w-4 h-4',
  md: 'w-5 h-5',
  lg: 'w-6 h-6',
};

export default function Rating({
  value,
  max = 5,
  onChange,
  readonly = false,
  size = 'md',
  showValue = false,
  className,
}: RatingProps) {
  const [hoverValue, setHoverValue] = useState<number | null>(null);
  
  const displayValue = hoverValue ?? value;

  return (
    <div className={cn('flex items-center gap-2', className)}>
      <div className="flex items-center gap-0.5">
        {Array.from({ length: max }).map((_, index) => {
          const starValue = index + 1;
          const isFilled = starValue <= displayValue;

          return (
            <button
              key={index}
              type="button"
              onClick={() => !readonly && onChange?.(starValue)}
              onMouseEnter={() => !readonly && setHoverValue(starValue)}
              onMouseLeave={() => !readonly && setHoverValue(null)}
              disabled={readonly}
              className={cn(
                'transition-colors',
                readonly ? 'cursor-default' : 'cursor-pointer',
                isFilled ? 'text-yellow-400' : 'text-zinc-600'
              )}
            >
              <motion.div
                whileHover={!readonly ? { scale: 1.2 } : undefined}
                whileTap={!readonly ? { scale: 0.9 } : undefined}
              >
                <Star
                  className={cn(sizeClasses[size], isFilled && 'fill-current')}
                />
              </motion.div>
            </button>
          );
        })}
      </div>
      {showValue && (
        <span className="text-sm text-zinc-400 font-mono">
          {value}/{max}
        </span>
      )}
    </div>
  );
}

// Severity Rating (for investigations)
interface SeverityRatingProps {
  value: 1 | 2 | 3 | 4;
  onChange?: (value: 1 | 2 | 3 | 4) => void;
  readonly?: boolean;
  showLabel?: boolean;
  className?: string;
}

const severityConfig = {
  1: { label: 'Low', color: 'text-green-500', bgColor: 'bg-green-500' },
  2: { label: 'Medium', color: 'text-yellow-500', bgColor: 'bg-yellow-500' },
  3: { label: 'High', color: 'text-orange-500', bgColor: 'bg-orange-500' },
  4: { label: 'Critical', color: 'text-red-500', bgColor: 'bg-red-500' },
};

export function SeverityRating({
  value,
  onChange,
  readonly = false,
  showLabel = true,
  className,
}: SeverityRatingProps) {
  const config = severityConfig[value];

  return (
    <div className={cn('flex items-center gap-3', className)}>
      <div className="flex items-center gap-1">
        {([1, 2, 3, 4] as const).map((level) => {
          const levelConfig = severityConfig[level];
          const isActive = level <= value;

          return (
            <button
              key={level}
              type="button"
              onClick={() => !readonly && onChange?.(level)}
              disabled={readonly}
              className={cn(
                'w-8 h-2 transition-colors',
                readonly ? 'cursor-default' : 'cursor-pointer hover:opacity-80',
                isActive ? levelConfig.bgColor : 'bg-zinc-700'
              )}
            />
          );
        })}
      </div>
      {showLabel && (
        <span className={cn('text-sm font-medium', config.color)}>
          {config.label}
        </span>
      )}
    </div>
  );
}

// Risk Level Rating
interface RiskRatingProps {
  value: number; // 0-100
  onChange?: (value: number) => void;
  readonly?: boolean;
  showPercentage?: boolean;
  className?: string;
}

export function RiskRating({
  value,
  onChange,
  readonly = false,
  showPercentage = true,
  className,
}: RiskRatingProps) {
  const getColor = (v: number) => {
    if (v < 25) return 'text-green-500';
    if (v < 50) return 'text-yellow-500';
    if (v < 75) return 'text-orange-500';
    return 'text-red-500';
  };

  const getIcon = (v: number) => {
    if (v < 25) return <Shield className="w-5 h-5" />;
    if (v < 50) return <AlertTriangle className="w-5 h-5" />;
    if (v < 75) return <AlertTriangle className="w-5 h-5" />;
    return <Skull className="w-5 h-5" />;
  };

  return (
    <div className={cn('flex items-center gap-3', className)}>
      <div className={cn('flex-shrink-0', getColor(value))}>
        {getIcon(value)}
      </div>
      <div className="flex-1">
        <div className="h-2 bg-zinc-700 overflow-hidden">
          <motion.div
            className={cn(
              'h-full',
              value < 25 && 'bg-green-500',
              value >= 25 && value < 50 && 'bg-yellow-500',
              value >= 50 && value < 75 && 'bg-orange-500',
              value >= 75 && 'bg-red-500'
            )}
            initial={{ width: 0 }}
            animate={{ width: `${value}%` }}
            transition={{ duration: 0.5 }}
          />
        </div>
      </div>
      {showPercentage && (
        <span className={cn('text-sm font-mono font-medium', getColor(value))}>
          {value}%
        </span>
      )}
    </div>
  );
}

// Trust Score Rating
interface TrustRatingProps {
  value: number; // 0-5
  label?: string;
  showVerified?: boolean;
  className?: string;
}

export function TrustRating({
  value,
  label,
  showVerified = true,
  className,
}: TrustRatingProps) {
  const isVerified = value >= 4;
  const percentage = (value / 5) * 100;

  return (
    <div className={cn('flex items-center gap-3', className)}>
      <div className="relative w-10 h-10">
        <svg className="w-full h-full transform -rotate-90">
          <circle
            cx="20"
            cy="20"
            r="16"
            fill="none"
            stroke="currentColor"
            strokeWidth="4"
            className="text-zinc-700"
          />
          <motion.circle
            cx="20"
            cy="20"
            r="16"
            fill="none"
            stroke="currentColor"
            strokeWidth="4"
            strokeLinecap="round"
            className={cn(
              value < 2 && 'text-red-500',
              value >= 2 && value < 3.5 && 'text-yellow-500',
              value >= 3.5 && 'text-green-500'
            )}
            initial={{ strokeDasharray: '0 100' }}
            animate={{ strokeDasharray: `${percentage} 100` }}
            transition={{ duration: 0.5 }}
          />
        </svg>
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="text-xs font-bold text-white">{value.toFixed(1)}</span>
        </div>
      </div>
      <div>
        {label && <p className="text-sm text-zinc-300">{label}</p>}
        {showVerified && (
          <p className={cn(
            'text-xs',
            isVerified ? 'text-green-400' : 'text-zinc-500'
          )}>
            {isVerified ? '✓ Verified' : 'Unverified'}
          </p>
        )}
      </div>
    </div>
  );
}

// Half-star rating (for more precision)
interface HalfStarRatingProps {
  value: number; // 0.5 increments
  max?: number;
  onChange?: (value: number) => void;
  readonly?: boolean;
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

export function HalfStarRating({
  value,
  max = 5,
  onChange,
  readonly = false,
  size = 'md',
  className,
}: HalfStarRatingProps) {
  const [hoverValue, setHoverValue] = useState<number | null>(null);
  const displayValue = hoverValue ?? value;

  return (
    <div className={cn('flex items-center gap-0.5', className)}>
      {Array.from({ length: max }).map((_, index) => {
        const starValue = index + 1;
        const halfValue = index + 0.5;
        
        const isFull = displayValue >= starValue;
        const isHalf = !isFull && displayValue >= halfValue;

        return (
          <div key={index} className="relative">
            {/* Left half (for half-star) */}
            <button
              type="button"
              onClick={() => !readonly && onChange?.(halfValue)}
              onMouseEnter={() => !readonly && setHoverValue(halfValue)}
              onMouseLeave={() => !readonly && setHoverValue(null)}
              disabled={readonly}
              className={cn(
                'absolute left-0 top-0 w-1/2 h-full z-10',
                readonly ? 'cursor-default' : 'cursor-pointer'
              )}
            />
            {/* Right half (for full-star) */}
            <button
              type="button"
              onClick={() => !readonly && onChange?.(starValue)}
              onMouseEnter={() => !readonly && setHoverValue(starValue)}
              onMouseLeave={() => !readonly && setHoverValue(null)}
              disabled={readonly}
              className={cn(
                'absolute right-0 top-0 w-1/2 h-full z-10',
                readonly ? 'cursor-default' : 'cursor-pointer'
              )}
            />
            {/* Star icon */}
            <div className="relative">
              <Star
                className={cn(
                  sizeClasses[size],
                  'text-zinc-600'
                )}
              />
              {/* Filled overlay */}
              <div
                className="absolute inset-0 overflow-hidden"
                style={{ width: isFull ? '100%' : isHalf ? '50%' : '0%' }}
              >
                <Star
                  className={cn(
                    sizeClasses[size],
                    'text-yellow-400 fill-current'
                  )}
                />
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
