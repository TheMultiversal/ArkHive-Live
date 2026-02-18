'use client';

import { forwardRef } from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

interface ToggleProps {
  checked: boolean;
  onChange: (checked: boolean) => void;
  disabled?: boolean;
  size?: 'sm' | 'md' | 'lg';
  label?: string;
  description?: string;
  className?: string;
}

const sizeConfig = {
  sm: {
    track: 'w-8 h-4',
    thumb: 'w-3 h-3',
    translate: 'translate-x-4',
  },
  md: {
    track: 'w-11 h-6',
    thumb: 'w-5 h-5',
    translate: 'translate-x-5',
  },
  lg: {
    track: 'w-14 h-7',
    thumb: 'w-6 h-6',
    translate: 'translate-x-7',
  },
};

const Toggle = forwardRef<HTMLButtonElement, ToggleProps>(({
  checked,
  onChange,
  disabled = false,
  size = 'md',
  label,
  description,
  className,
}, ref) => {
  const config = sizeConfig[size];

  const toggle = (
    <button
      ref={ref}
      type="button"
      role="switch"
      aria-checked={checked}
      disabled={disabled}
      onClick={() => onChange(!checked)}
      className={cn(
        'relative inline-flex items-center shrink-0 cursor-pointer transition-colors focus:outline-none focus:ring-2 focus:ring-blood-500 focus:ring-offset-2 focus:ring-offset-black',
        config.track,
        checked ? 'bg-blood-600' : 'bg-zinc-700',
        disabled && 'opacity-50 cursor-not-allowed',
        !label && className
      )}
    >
      <motion.span
        className={cn(
          'pointer-events-none inline-block transform bg-white shadow-lg',
          config.thumb
        )}
        animate={{
          x: checked ? parseInt(config.translate.replace('translate-x-', '')) * 4 : 2,
        }}
        transition={{ type: 'spring', stiffness: 500, damping: 30 }}
      />
    </button>
  );

  if (!label) return toggle;

  return (
    <div className={cn('flex items-start gap-3', className)}>
      {toggle}
      <div className="flex-1">
        <label className="text-sm font-medium text-zinc-200 cursor-pointer" onClick={() => !disabled && onChange(!checked)}>
          {label}
        </label>
        {description && (
          <p className="text-xs text-zinc-500 mt-0.5">{description}</p>
        )}
      </div>
    </div>
  );
});

Toggle.displayName = 'Toggle';

export default Toggle;

// Switch with icons
interface IconSwitchProps extends Omit<ToggleProps, 'label' | 'description'> {
  iconOn: React.ReactNode;
  iconOff: React.ReactNode;
}

export function IconSwitch({
  checked,
  onChange,
  disabled = false,
  iconOn,
  iconOff,
  className,
}: IconSwitchProps) {
  return (
    <button
      type="button"
      role="switch"
      aria-checked={checked}
      disabled={disabled}
      onClick={() => onChange(!checked)}
      className={cn(
        'relative w-16 h-8 flex items-center cursor-pointer transition-colors',
        checked ? 'bg-blood-600' : 'bg-zinc-700',
        disabled && 'opacity-50 cursor-not-allowed',
        className
      )}
    >
      {/* Icons */}
      <span className={cn(
        'absolute left-2 transition-opacity',
        checked ? 'opacity-100' : 'opacity-30'
      )}>
        {iconOn}
      </span>
      <span className={cn(
        'absolute right-2 transition-opacity',
        !checked ? 'opacity-100' : 'opacity-30'
      )}>
        {iconOff}
      </span>
      
      {/* Thumb */}
      <motion.span
        className="w-6 h-6 bg-white shadow-lg"
        animate={{ x: checked ? 36 : 4 }}
        transition={{ type: 'spring', stiffness: 500, damping: 30 }}
      />
    </button>
  );
}

// Toggle Group (for multiple exclusive options)
interface ToggleGroupOption {
  value: string;
  label: string;
  icon?: React.ReactNode;
}

interface ToggleGroupProps {
  options: ToggleGroupOption[];
  value: string;
  onChange: (value: string) => void;
  disabled?: boolean;
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

export function ToggleGroup({
  options,
  value,
  onChange,
  disabled = false,
  size = 'md',
  className,
}: ToggleGroupProps) {
  const sizeClasses = {
    sm: 'px-2 py-1 text-xs',
    md: 'px-3 py-2 text-sm',
    lg: 'px-4 py-2.5 text-base',
  };

  return (
    <div
      className={cn(
        'inline-flex border border-zinc-800 bg-zinc-900/50',
        disabled && 'opacity-50',
        className
      )}
      role="radiogroup"
    >
      {options.map((option) => {
        const isSelected = option.value === value;
        return (
          <button
            key={option.value}
            type="button"
            role="radio"
            aria-checked={isSelected}
            disabled={disabled}
            onClick={() => onChange(option.value)}
            className={cn(
              'relative flex items-center gap-2 transition-colors',
              sizeClasses[size],
              isSelected
                ? 'bg-blood-600 text-white'
                : 'text-zinc-400 hover:text-white hover:bg-zinc-800',
              disabled && 'cursor-not-allowed'
            )}
          >
            {option.icon}
            {option.label}
          </button>
        );
      })}
    </div>
  );
}

// Labeled Toggle Row
interface ToggleRowProps {
  label: string;
  description?: string;
  checked: boolean;
  onChange: (checked: boolean) => void;
  disabled?: boolean;
  className?: string;
}

export function ToggleRow({
  label,
  description,
  checked,
  onChange,
  disabled = false,
  className,
}: ToggleRowProps) {
  return (
    <div className={cn(
      'flex items-center justify-between gap-4 py-3',
      className
    )}>
      <div>
        <p className="text-sm font-medium text-zinc-200">{label}</p>
        {description && (
          <p className="text-xs text-zinc-500 mt-0.5">{description}</p>
        )}
      </div>
      <Toggle
        checked={checked}
        onChange={onChange}
        disabled={disabled}
      />
    </div>
  );
}

// Settings Toggle List
interface SettingsToggleProps {
  settings: Array<{
    id: string;
    label: string;
    description?: string;
    checked: boolean;
  }>;
  onChange: (id: string, checked: boolean) => void;
  disabled?: boolean;
  className?: string;
}

export function SettingsToggleList({
  settings,
  onChange,
  disabled = false,
  className,
}: SettingsToggleProps) {
  return (
    <div className={cn('divide-y divide-zinc-800', className)}>
      {settings.map((setting) => (
        <ToggleRow
          key={setting.id}
          label={setting.label}
          description={setting.description}
          checked={setting.checked}
          onChange={(checked) => onChange(setting.id, checked)}
          disabled={disabled}
        />
      ))}
    </div>
  );
}
