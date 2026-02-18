'use client';

import { motion } from 'framer-motion';

// ============================================================
// Card Skeleton
// ============================================================

export function CardSkeleton({ className = '' }: { className?: string }) {
  return (
    <div className={`glass-card p-6 animate-pulse ${className}`}>
      <div className="flex items-start justify-between mb-4">
        <div className="h-6 w-3/4 bg-zinc-800" />
        <div className="h-5 w-16 bg-zinc-800" />
      </div>
      <div className="space-y-2 mb-4">
        <div className="h-4 w-full bg-zinc-800" />
        <div className="h-4 w-2/3 bg-zinc-800" />
      </div>
      <div className="flex gap-2">
        <div className="h-6 w-16 bg-zinc-800" />
        <div className="h-6 w-20 bg-zinc-800" />
      </div>
    </div>
  );
}

// ============================================================
// List Item Skeleton
// ============================================================

export function ListItemSkeleton({ className = '' }: { className?: string }) {
  return (
    <div className={`flex items-center gap-4 p-4 bg-zinc-900/50 animate-pulse ${className}`}>
      <div className="w-10 h-10 bg-zinc-800" />
      <div className="flex-1">
        <div className="h-4 w-1/2 bg-zinc-800 mb-2" />
        <div className="h-3 w-1/3 bg-zinc-800" />
      </div>
      <div className="h-8 w-20 bg-zinc-800" />
    </div>
  );
}

// ============================================================
// Table Skeleton
// ============================================================

export function TableSkeleton({ rows = 5, cols = 4 }: { rows?: number; cols?: number }) {
  return (
    <div className="w-full animate-pulse">
      {/* Header */}
      <div className="flex gap-4 p-4 border-b border-zinc-800">
        {Array.from({ length: cols }).map((_, i) => (
          <div key={i} className="flex-1 h-4 bg-zinc-800" />
        ))}
      </div>
      {/* Rows */}
      {Array.from({ length: rows }).map((_, rowIdx) => (
        <div key={rowIdx} className="flex gap-4 p-4 border-b border-zinc-800/50">
          {Array.from({ length: cols }).map((_, colIdx) => (
            <div 
              key={colIdx} 
              className="flex-1 h-4 bg-zinc-800" 
              style={{ width: `${60 + Math.random() * 40}%` }}
            />
          ))}
        </div>
      ))}
    </div>
  );
}

// ============================================================
// Stats Skeleton
// ============================================================

export function StatsSkeleton({ count = 4 }: { count?: number }) {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 animate-pulse">
      {Array.from({ length: count }).map((_, i) => (
        <div key={i} className="glass-card p-4">
          <div className="h-3 w-20 bg-zinc-800 mb-2" />
          <div className="h-8 w-16 bg-zinc-800" />
        </div>
      ))}
    </div>
  );
}

// ============================================================
// Chart Skeleton
// ============================================================

export function ChartSkeleton({ className = '' }: { className?: string }) {
  return (
    <div className={`glass-card p-6 animate-pulse ${className}`}>
      <div className="h-5 w-32 bg-zinc-800 mb-4" />
      <div className="h-64 w-full bg-zinc-800/50 flex items-end justify-around p-4">
        {Array.from({ length: 7 }).map((_, i) => (
          <div 
            key={i} 
            className="bg-zinc-800 w-8" 
            style={{ height: `${30 + Math.random() * 70}%` }}
          />
        ))}
      </div>
    </div>
  );
}

// ============================================================
// Profile Skeleton
// ============================================================

export function ProfileSkeleton({ className = '' }: { className?: string }) {
  return (
    <div className={`flex items-center gap-4 animate-pulse ${className}`}>
      <div className="w-12 h-12 bg-zinc-800 rounded-full" />
      <div>
        <div className="h-4 w-32 bg-zinc-800 mb-2" />
        <div className="h-3 w-24 bg-zinc-800" />
      </div>
    </div>
  );
}

// ============================================================
// Text Block Skeleton
// ============================================================

export function TextBlockSkeleton({ lines = 3 }: { lines?: number }) {
  return (
    <div className="space-y-2 animate-pulse">
      {Array.from({ length: lines }).map((_, i) => (
        <div 
          key={i} 
          className="h-4 bg-zinc-800" 
          style={{ width: i === lines - 1 ? '60%' : '100%' }}
        />
      ))}
    </div>
  );
}

// ============================================================
// Page Loading Skeleton
// ============================================================

export function PageSkeleton() {
  return (
    <div className="min-h-screen p-8 animate-pulse">
      {/* Header */}
      <div className="mb-8">
        <div className="h-8 w-64 bg-zinc-800 mb-2" />
        <div className="h-4 w-96 bg-zinc-800" />
      </div>

      {/* Stats */}
      <div className="grid grid-cols-4 gap-4 mb-8">
        {Array.from({ length: 4 }).map((_, i) => (
          <div key={i} className="glass-card p-4">
            <div className="h-3 w-20 bg-zinc-800 mb-2" />
            <div className="h-8 w-16 bg-zinc-800" />
          </div>
        ))}
      </div>

      {/* Content Grid */}
      <div className="grid grid-cols-3 gap-6">
        {Array.from({ length: 6 }).map((_, i) => (
          <div key={i} className="glass-card p-6">
            <div className="h-6 w-3/4 bg-zinc-800 mb-4" />
            <div className="space-y-2 mb-4">
              <div className="h-4 w-full bg-zinc-800" />
              <div className="h-4 w-2/3 bg-zinc-800" />
            </div>
            <div className="flex gap-2">
              <div className="h-6 w-16 bg-zinc-800" />
              <div className="h-6 w-20 bg-zinc-800" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

// ============================================================
// Pulsing Dot Loader
// ============================================================

export function PulsingLoader({ size = 'md' }: { size?: 'sm' | 'md' | 'lg' }) {
  const sizeMap = {
    sm: 'w-2 h-2',
    md: 'w-3 h-3',
    lg: 'w-4 h-4',
  };

  return (
    <div className="flex items-center justify-center gap-2">
      {[0, 1, 2].map((i) => (
        <motion.div
          key={i}
          className={`${sizeMap[size]} bg-blood-500`}
          animate={{
            scale: [1, 1.5, 1],
            opacity: [0.5, 1, 0.5],
          }}
          transition={{
            duration: 1,
            repeat: Infinity,
            delay: i * 0.2,
          }}
        />
      ))}
    </div>
  );
}

// ============================================================
// Spinner Loader
// ============================================================

export function Spinner({ size = 'md', className = '' }: { size?: 'sm' | 'md' | 'lg'; className?: string }) {
  const sizeMap = {
    sm: 'w-4 h-4',
    md: 'w-8 h-8',
    lg: 'w-12 h-12',
  };

  return (
    <motion.div
      className={`${sizeMap[size]} border-2 border-zinc-700 border-t-blood-500 ${className}`}
      animate={{ rotate: 360 }}
      transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
    />
  );
}

// ============================================================
// Full Page Loader
// ============================================================

export function FullPageLoader({ message = 'Loading...' }: { message?: string }) {
  return (
    <div className="fixed inset-0 bg-black/90 flex flex-col items-center justify-center z-50">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="flex flex-col items-center"
      >
        <div className="relative mb-6">
          <Spinner size="lg" />
          <motion.div
            className="absolute inset-0 bg-blood-500/20"
            animate={{ scale: [1, 1.5, 1], opacity: [0.5, 0, 0.5] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
        </div>
        <motion.p
          className="text-zinc-400"
          animate={{ opacity: [0.5, 1, 0.5] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          {message}
        </motion.p>
      </motion.div>
    </div>
  );
}

// ============================================================
// Inline Loader
// ============================================================

export function InlineLoader({ text = 'Loading' }: { text?: string }) {
  return (
    <div className="flex items-center gap-2 text-zinc-400">
      <Spinner size="sm" />
      <span>{text}</span>
    </div>
  );
}

// ============================================================
// Button Loader
// ============================================================

export function ButtonLoader() {
  return (
    <div className="flex items-center gap-2">
      <Spinner size="sm" />
      <span>Processing...</span>
    </div>
  );
}

// ============================================================
// Skeleton Grid
// ============================================================

export function SkeletonGrid({ 
  count = 6, 
  columns = 3 
}: { 
  count?: number; 
  columns?: number;
}) {
  const gridCols = {
    1: 'grid-cols-1',
    2: 'grid-cols-2',
    3: 'grid-cols-3',
    4: 'grid-cols-4',
  };

  return (
    <div className={`grid ${gridCols[columns as keyof typeof gridCols] || 'grid-cols-3'} gap-6`}>
      {Array.from({ length: count }).map((_, i) => (
        <CardSkeleton key={i} />
      ))}
    </div>
  );
}

const LoadingStates = {
  CardSkeleton,
  ListItemSkeleton,
  TableSkeleton,
  StatsSkeleton,
  ChartSkeleton,
  ProfileSkeleton,
  TextBlockSkeleton,
  PageSkeleton,
  PulsingLoader,
  Spinner,
  FullPageLoader,
  InlineLoader,
  ButtonLoader,
  SkeletonGrid,
};

export default LoadingStates;
