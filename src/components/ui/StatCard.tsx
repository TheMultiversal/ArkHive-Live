'use client';

import { ReactNode } from 'react';
import { motion } from 'framer-motion';
import { TrendingUp, TrendingDown, Minus, ArrowUp, ArrowDown, Activity } from 'lucide-react';
import { cn } from '@/lib/utils';

interface StatCardProps {
  title: string;
  value: string | number;
  previousValue?: number;
  trend?: 'up' | 'down' | 'neutral';
  trendValue?: string;
  icon?: ReactNode;
  description?: string;
  variant?: 'default' | 'primary' | 'danger' | 'warning' | 'success';
  size?: 'sm' | 'md' | 'lg';
  animated?: boolean;
  className?: string;
}

const variantStyles = {
  default: {
    card: 'bg-zinc-900/50 border-zinc-800 hover:border-zinc-700',
    value: 'text-white',
    icon: 'text-zinc-400',
  },
  primary: {
    card: 'bg-blood-900/20 border-blood-800/50 hover:border-blood-700/50',
    value: 'text-blood-400',
    icon: 'text-blood-500',
  },
  danger: {
    card: 'bg-red-900/20 border-red-800/50 hover:border-red-700/50',
    value: 'text-red-400',
    icon: 'text-red-500',
  },
  warning: {
    card: 'bg-yellow-900/20 border-yellow-800/50 hover:border-yellow-700/50',
    value: 'text-yellow-400',
    icon: 'text-yellow-500',
  },
  success: {
    card: 'bg-green-900/20 border-green-800/50 hover:border-green-700/50',
    value: 'text-green-400',
    icon: 'text-green-500',
  },
};

const sizeStyles = {
  sm: {
    card: 'p-3',
    title: 'text-xs',
    value: 'text-xl',
  },
  md: {
    card: 'p-4',
    title: 'text-sm',
    value: 'text-2xl',
  },
  lg: {
    card: 'p-6',
    title: 'text-base',
    value: 'text-4xl',
  },
};

export default function StatCard({
  title,
  value,
  previousValue,
  trend,
  trendValue,
  icon,
  description,
  variant = 'default',
  size = 'md',
  animated = true,
  className,
}: StatCardProps) {
  const styles = variantStyles[variant];
  const sizes = sizeStyles[size];

  // Calculate trend if not provided
  const computedTrend = trend || (
    previousValue !== undefined
      ? typeof value === 'number'
        ? value > previousValue ? 'up' : value < previousValue ? 'down' : 'neutral'
        : 'neutral'
      : undefined
  );

  const TrendIcon = computedTrend === 'up' 
    ? TrendingUp 
    : computedTrend === 'down' 
      ? TrendingDown 
      : Minus;

  const trendColor = computedTrend === 'up'
    ? 'text-green-400'
    : computedTrend === 'down'
      ? 'text-red-400'
      : 'text-zinc-400';

  const content = (
    <div
      className={cn(
        'border transition-colors',
        styles.card,
        sizes.card,
        className
      )}
    >
      <div className="flex items-start justify-between">
        <div className="flex-1">
          <p className={cn('text-zinc-400 uppercase tracking-wider font-medium', sizes.title)}>
            {title}
          </p>
          <div className="flex items-baseline gap-2 mt-1">
            <span className={cn('font-bold font-mono', styles.value, sizes.value)}>
              {value}
            </span>
            {computedTrend && (
              <span className={cn('flex items-center gap-0.5 text-sm', trendColor)}>
                <TrendIcon className="w-4 h-4" />
                {trendValue}
              </span>
            )}
          </div>
          {description && (
            <p className="text-xs text-zinc-500 mt-2">{description}</p>
          )}
        </div>
        {icon && (
          <div className={cn('flex-shrink-0', styles.icon)}>
            {icon}
          </div>
        )}
      </div>
    </div>
  );

  return animated ? (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
    >
      {content}
    </motion.div>
  ) : content;
}

// Stat Card with mini chart
interface SparklineStatCardProps extends StatCardProps {
  data: number[];
  sparklineColor?: string;
}

export function SparklineStatCard({
  data,
  sparklineColor = '#d64545',
  ...props
}: SparklineStatCardProps) {
  const max = Math.max(...data);
  const min = Math.min(...data);
  const range = max - min || 1;

  return (
    <div className="relative">
      <StatCard {...props} />
      <div className="absolute bottom-0 left-0 right-0 h-12 opacity-30 pointer-events-none">
        <svg
          className="w-full h-full"
          preserveAspectRatio="none"
          viewBox={`0 0 ${data.length - 1} 1`}
        >
          <path
            d={data.map((value, index) => {
              const x = index;
              const y = 1 - (value - min) / range;
              return `${index === 0 ? 'M' : 'L'} ${x} ${y}`;
            }).join(' ')}
            fill="none"
            stroke={sparklineColor}
            strokeWidth="0.05"
            vectorEffect="non-scaling-stroke"
          />
        </svg>
      </div>
    </div>
  );
}

// Stats Grid
interface StatsGridProps {
  children: ReactNode;
  columns?: 2 | 3 | 4;
  className?: string;
}

export function StatsGrid({
  children,
  columns = 4,
  className,
}: StatsGridProps) {
  const gridCols = {
    2: 'grid-cols-1 sm:grid-cols-2',
    3: 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3',
    4: 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-4',
  };

  return (
    <div className={cn('grid gap-4', gridCols[columns], className)}>
      {children}
    </div>
  );
}

// Comparison Stat
interface ComparisonStatProps {
  title: string;
  currentValue: number;
  previousValue: number;
  currentLabel?: string;
  previousLabel?: string;
  format?: (value: number) => string;
  className?: string;
}

export function ComparisonStat({
  title,
  currentValue,
  previousValue,
  currentLabel = 'Current',
  previousLabel = 'Previous',
  format = (v) => v.toString(),
  className,
}: ComparisonStatProps) {
  const change = currentValue - previousValue;
  const percentChange = previousValue !== 0 
    ? ((change / previousValue) * 100).toFixed(1) 
    : '0';
  const isPositive = change > 0;

  return (
    <motion.div
      className={cn(
        'bg-zinc-900/50 border border-zinc-800 p-4',
        className
      )}
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
    >
      <p className="text-sm text-zinc-400 uppercase tracking-wider mb-3">{title}</p>
      
      <div className="flex items-end justify-between gap-4">
        <div>
          <p className="text-xs text-zinc-500 mb-1">{currentLabel}</p>
          <p className="text-2xl font-bold font-mono text-white">{format(currentValue)}</p>
        </div>
        
        <div className="text-right">
          <p className="text-xs text-zinc-500 mb-1">{previousLabel}</p>
          <p className="text-lg font-mono text-zinc-400">{format(previousValue)}</p>
        </div>
      </div>

      <div className={cn(
        'mt-3 pt-3 border-t border-zinc-800 flex items-center justify-between',
      )}>
        <span className="text-sm text-zinc-400">Change</span>
        <span className={cn(
          'flex items-center gap-1 text-sm font-medium',
          isPositive ? 'text-green-400' : change < 0 ? 'text-red-400' : 'text-zinc-400'
        )}>
          {isPositive ? <ArrowUp className="w-4 h-4" /> : change < 0 ? <ArrowDown className="w-4 h-4" /> : null}
          {Math.abs(change)} ({isPositive ? '+' : ''}{percentChange}%)
        </span>
      </div>
    </motion.div>
  );
}

// Live Stat (for real-time data)
interface LiveStatProps {
  title: string;
  value: string | number;
  isLive?: boolean;
  lastUpdated?: string;
  className?: string;
}

export function LiveStat({
  title,
  value,
  isLive = true,
  lastUpdated,
  className,
}: LiveStatProps) {
  return (
    <motion.div
      className={cn(
        'bg-zinc-900/50 border border-zinc-800 p-4',
        className
      )}
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
    >
      <div className="flex items-center justify-between mb-2">
        <p className="text-sm text-zinc-400 uppercase tracking-wider">{title}</p>
        {isLive && (
          <div className="flex items-center gap-2">
            <Activity className="w-4 h-4 text-green-400 animate-pulse" />
            <span className="text-xs text-green-400">LIVE</span>
          </div>
        )}
      </div>
      
      <motion.p
        className="text-3xl font-bold font-mono text-white"
        key={value}
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.2 }}
      >
        {value}
      </motion.p>
      
      {lastUpdated && (
        <p className="text-xs text-zinc-500 mt-2">
          Last updated: {lastUpdated}
        </p>
      )}
    </motion.div>
  );
}

// Percentage Stat with visual
interface PercentageStatProps {
  title: string;
  value: number;
  showBar?: boolean;
  variant?: 'default' | 'danger' | 'warning' | 'success';
  className?: string;
}

export function PercentageStat({
  title,
  value,
  showBar = true,
  variant = 'default',
  className,
}: PercentageStatProps) {
  const barColors = {
    default: 'bg-blood-500',
    danger: 'bg-red-500',
    warning: 'bg-yellow-500',
    success: 'bg-green-500',
  };

  return (
    <motion.div
      className={cn(
        'bg-zinc-900/50 border border-zinc-800 p-4',
        className
      )}
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
    >
      <div className="flex items-center justify-between mb-2">
        <p className="text-sm text-zinc-400 uppercase tracking-wider">{title}</p>
        <p className="text-2xl font-bold font-mono text-white">{value}%</p>
      </div>
      
      {showBar && (
        <div className="h-2 bg-zinc-800 overflow-hidden">
          <motion.div
            className={cn('h-full', barColors[variant])}
            initial={{ width: 0 }}
            animate={{ width: `${Math.min(value, 100)}%` }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
          />
        </div>
      )}
    </motion.div>
  );
}
