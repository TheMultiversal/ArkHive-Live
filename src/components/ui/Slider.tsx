'use client';

import { useState, useRef, useCallback, useEffect } from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

interface SliderProps {
  value: number;
  onChange: (value: number) => void;
  min?: number;
  max?: number;
  step?: number;
  disabled?: boolean;
  showValue?: boolean;
  showLabels?: boolean;
  label?: string;
  marks?: Array<{ value: number; label?: string }>;
  formatValue?: (value: number) => string;
  variant?: 'default' | 'danger' | 'success' | 'blood';
  className?: string;
}

const variantColors = {
  default: 'bg-zinc-500',
  danger: 'bg-red-500',
  success: 'bg-green-500',
  blood: 'bg-blood-500',
};

export default function Slider({
  value,
  onChange,
  min = 0,
  max = 100,
  step = 1,
  disabled = false,
  showValue = false,
  showLabels = false,
  label,
  marks,
  formatValue = (v) => v.toString(),
  variant = 'blood',
  className,
}: SliderProps) {
  const [isDragging, setIsDragging] = useState(false);
  const trackRef = useRef<HTMLDivElement>(null);

  const percentage = ((value - min) / (max - min)) * 100;

  const getValueFromPosition = useCallback((clientX: number) => {
    if (!trackRef.current) return value;
    
    const rect = trackRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const percent = Math.max(0, Math.min(1, x / rect.width));
    const rawValue = min + percent * (max - min);
    const steppedValue = Math.round(rawValue / step) * step;
    return Math.max(min, Math.min(max, steppedValue));
  }, [min, max, step, value]);

  const handleMouseDown = useCallback((e: React.MouseEvent) => {
    if (disabled) return;
    setIsDragging(true);
    const newValue = getValueFromPosition(e.clientX);
    onChange(newValue);
  }, [disabled, getValueFromPosition, onChange]);

  useEffect(() => {
    if (!isDragging) return;

    const handleMouseMove = (e: MouseEvent) => {
      const newValue = getValueFromPosition(e.clientX);
      onChange(newValue);
    };

    const handleMouseUp = () => {
      setIsDragging(false);
    };

    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseup', handleMouseUp);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseup', handleMouseUp);
    };
  }, [isDragging, getValueFromPosition, onChange]);

  // Keyboard controls
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (disabled) return;

    let newValue = value;
    switch (e.key) {
      case 'ArrowRight':
      case 'ArrowUp':
        e.preventDefault();
        newValue = Math.min(max, value + step);
        break;
      case 'ArrowLeft':
      case 'ArrowDown':
        e.preventDefault();
        newValue = Math.max(min, value - step);
        break;
      case 'Home':
        e.preventDefault();
        newValue = min;
        break;
      case 'End':
        e.preventDefault();
        newValue = max;
        break;
    }
    onChange(newValue);
  };

  return (
    <div className={cn('w-full', className)}>
      {/* Header */}
      {(label || showValue) && (
        <div className="flex items-center justify-between mb-2">
          {label && <span className="text-sm text-zinc-400">{label}</span>}
          {showValue && (
            <span className="text-sm font-mono text-zinc-300">
              {formatValue(value)}
            </span>
          )}
        </div>
      )}

      {/* Track */}
      <div
        ref={trackRef}
        className={cn(
          'relative h-2 bg-zinc-700 cursor-pointer',
          disabled && 'opacity-50 cursor-not-allowed'
        )}
        onMouseDown={handleMouseDown}
      >
        {/* Filled portion */}
        <motion.div
          className={cn('absolute inset-y-0 left-0', variantColors[variant])}
          style={{ width: `${percentage}%` }}
          animate={{ width: `${percentage}%` }}
          transition={{ duration: 0.1 }}
        />

        {/* Marks */}
        {marks && marks.map((mark) => {
          const markPercent = ((mark.value - min) / (max - min)) * 100;
          return (
            <div
              key={mark.value}
              className="absolute top-1/2 -translate-y-1/2"
              style={{ left: `${markPercent}%` }}
            >
              <div className="w-1 h-3 bg-zinc-500 -translate-x-1/2" />
            </div>
          );
        })}

        {/* Thumb */}
        <motion.div
          className={cn(
            'absolute top-1/2 -translate-y-1/2 w-4 h-4 bg-white shadow-lg cursor-grab',
            isDragging && 'cursor-grabbing scale-110',
            !disabled && 'hover:scale-110'
          )}
          style={{ left: `${percentage}%`, marginLeft: '-8px' }}
          animate={{ left: `${percentage}%` }}
          transition={{ duration: 0.1 }}
          tabIndex={disabled ? -1 : 0}
          onKeyDown={handleKeyDown}
          role="slider"
          aria-valuenow={value}
          aria-valuemin={min}
          aria-valuemax={max}
          aria-disabled={disabled}
        />
      </div>

      {/* Labels */}
      {showLabels && (
        <div className="flex justify-between mt-1">
          <span className="text-xs text-zinc-500">{formatValue(min)}</span>
          <span className="text-xs text-zinc-500">{formatValue(max)}</span>
        </div>
      )}

      {/* Mark labels */}
      {marks && marks.some((m) => m.label) && (
        <div className="relative h-4 mt-1">
          {marks.map((mark) => {
            if (!mark.label) return null;
            const markPercent = ((mark.value - min) / (max - min)) * 100;
            return (
              <span
                key={mark.value}
                className="absolute text-xs text-zinc-500 -translate-x-1/2"
                style={{ left: `${markPercent}%` }}
              >
                {mark.label}
              </span>
            );
          })}
        </div>
      )}
    </div>
  );
}

// Range Slider (dual handles)
interface RangeSliderProps {
  value: [number, number];
  onChange: (value: [number, number]) => void;
  min?: number;
  max?: number;
  step?: number;
  disabled?: boolean;
  showValue?: boolean;
  label?: string;
  formatValue?: (value: number) => string;
  variant?: 'default' | 'danger' | 'success' | 'blood';
  className?: string;
}

export function RangeSlider({
  value,
  onChange,
  min = 0,
  max = 100,
  step = 1,
  disabled = false,
  showValue = true,
  label,
  formatValue = (v) => v.toString(),
  variant = 'blood',
  className,
}: RangeSliderProps) {
  const [activeThumb, setActiveThumb] = useState<'min' | 'max' | null>(null);
  const trackRef = useRef<HTMLDivElement>(null);

  const minPercent = ((value[0] - min) / (max - min)) * 100;
  const maxPercent = ((value[1] - min) / (max - min)) * 100;

  const getValueFromPosition = useCallback((clientX: number) => {
    if (!trackRef.current) return min;
    
    const rect = trackRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const percent = Math.max(0, Math.min(1, x / rect.width));
    const rawValue = min + percent * (max - min);
    const steppedValue = Math.round(rawValue / step) * step;
    return Math.max(min, Math.min(max, steppedValue));
  }, [min, max, step]);

  const handleMouseDown = useCallback((thumb: 'min' | 'max') => (e: React.MouseEvent) => {
    if (disabled) return;
    e.stopPropagation();
    setActiveThumb(thumb);
  }, [disabled]);

  const handleTrackClick = useCallback((e: React.MouseEvent) => {
    if (disabled) return;
    const clickValue = getValueFromPosition(e.clientX);
    const distToMin = Math.abs(clickValue - value[0]);
    const distToMax = Math.abs(clickValue - value[1]);
    
    if (distToMin < distToMax) {
      onChange([Math.min(clickValue, value[1]), value[1]]);
    } else {
      onChange([value[0], Math.max(clickValue, value[0])]);
    }
  }, [disabled, getValueFromPosition, value, onChange]);

  useEffect(() => {
    if (!activeThumb) return;

    const handleMouseMove = (e: MouseEvent) => {
      const newValue = getValueFromPosition(e.clientX);
      if (activeThumb === 'min') {
        onChange([Math.min(newValue, value[1]), value[1]]);
      } else {
        onChange([value[0], Math.max(newValue, value[0])]);
      }
    };

    const handleMouseUp = () => {
      setActiveThumb(null);
    };

    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseup', handleMouseUp);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseup', handleMouseUp);
    };
  }, [activeThumb, getValueFromPosition, value, onChange]);

  return (
    <div className={cn('w-full', className)}>
      {/* Header */}
      {(label || showValue) && (
        <div className="flex items-center justify-between mb-2">
          {label && <span className="text-sm text-zinc-400">{label}</span>}
          {showValue && (
            <span className="text-sm font-mono text-zinc-300">
              {formatValue(value[0])} - {formatValue(value[1])}
            </span>
          )}
        </div>
      )}

      {/* Track */}
      <div
        ref={trackRef}
        className={cn(
          'relative h-2 bg-zinc-700 cursor-pointer',
          disabled && 'opacity-50 cursor-not-allowed'
        )}
        onClick={handleTrackClick}
      >
        {/* Filled portion */}
        <div
          className={cn('absolute inset-y-0', variantColors[variant])}
          style={{
            left: `${minPercent}%`,
            width: `${maxPercent - minPercent}%`,
          }}
        />

        {/* Min thumb */}
        <div
          className={cn(
            'absolute top-1/2 -translate-y-1/2 w-4 h-4 bg-white shadow-lg cursor-grab z-10',
            activeThumb === 'min' && 'cursor-grabbing scale-110'
          )}
          style={{ left: `${minPercent}%`, marginLeft: '-8px' }}
          onMouseDown={handleMouseDown('min')}
        />

        {/* Max thumb */}
        <div
          className={cn(
            'absolute top-1/2 -translate-y-1/2 w-4 h-4 bg-white shadow-lg cursor-grab z-10',
            activeThumb === 'max' && 'cursor-grabbing scale-110'
          )}
          style={{ left: `${maxPercent}%`, marginLeft: '-8px' }}
          onMouseDown={handleMouseDown('max')}
        />
      </div>
    </div>
  );
}

// Stepped Slider with labels
interface SteppedSliderProps {
  options: Array<{ value: number | string; label: string }>;
  value: number | string;
  onChange: (value: number | string) => void;
  disabled?: boolean;
  className?: string;
}

export function SteppedSlider({
  options,
  value,
  onChange,
  disabled = false,
  className,
}: SteppedSliderProps) {
  const currentIndex = options.findIndex((opt) => opt.value === value);
  const percentage = (currentIndex / (options.length - 1)) * 100;

  return (
    <div className={cn('w-full', className)}>
      <div
        className={cn(
          'relative h-2 bg-zinc-700',
          disabled && 'opacity-50'
        )}
      >
        {/* Track fill */}
        <div
          className="absolute inset-y-0 left-0 bg-blood-500"
          style={{ width: `${percentage}%` }}
        />

        {/* Option markers */}
        <div className="absolute inset-0 flex justify-between items-center">
          {options.map((option, index) => (
            <button
              key={String(option.value)}
              type="button"
              onClick={() => !disabled && onChange(option.value)}
              disabled={disabled}
              className={cn(
                'w-4 h-4 -mt-1 transition-colors',
                index <= currentIndex ? 'bg-blood-500' : 'bg-zinc-600',
                !disabled && 'hover:bg-blood-400'
              )}
            />
          ))}
        </div>
      </div>

      {/* Labels */}
      <div className="flex justify-between mt-2">
        {options.map((option) => (
          <span
            key={String(option.value)}
            className={cn(
              'text-xs',
              option.value === value ? 'text-white' : 'text-zinc-500'
            )}
          >
            {option.label}
          </span>
        ))}
      </div>
    </div>
  );
}
