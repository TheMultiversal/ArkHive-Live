'use client';

import { Suspense, ReactNode, ComponentType } from 'react';
import { motion } from 'framer-motion';
import { Spinner, CardSkeleton, PageSkeleton } from './LoadingStates';

// ============================================================
// Types
// ============================================================

interface SuspenseBoundaryProps {
  children: ReactNode;
  fallback?: ReactNode;
  type?: 'page' | 'card' | 'inline' | 'custom';
}

interface AsyncBoundaryProps extends SuspenseBoundaryProps {
  errorFallback?: ReactNode;
}

// ============================================================
// Default Fallbacks
// ============================================================

function InlineFallback() {
  return (
    <div className="flex items-center justify-center p-8">
      <Spinner size="md" />
    </div>
  );
}

function CardFallback() {
  return <CardSkeleton />;
}

function PageFallbackComponent() {
  return <PageSkeleton />;
}

// ============================================================
// Suspense Boundary Component
// ============================================================

export function SuspenseBoundary({ 
  children, 
  fallback, 
  type = 'inline' 
}: SuspenseBoundaryProps) {
  const getFallback = () => {
    if (fallback) return fallback;
    
    switch (type) {
      case 'page':
        return <PageFallbackComponent />;
      case 'card':
        return <CardFallback />;
      case 'inline':
      default:
        return <InlineFallback />;
    }
  };

  return (
    <Suspense fallback={getFallback()}>
      {children}
    </Suspense>
  );
}

// ============================================================
// Animated Suspense Boundary
// ============================================================

export function AnimatedSuspense({ 
  children, 
  fallback,
  type = 'inline',
}: SuspenseBoundaryProps) {
  return (
    <Suspense
      fallback={
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          {fallback || (type === 'page' ? <PageFallbackComponent /> : <InlineFallback />)}
        </motion.div>
      }
    >
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.3 }}
      >
        {children}
      </motion.div>
    </Suspense>
  );
}

// ============================================================
// Page Suspense Wrapper
// ============================================================

export function PageSuspense({ children }: { children: ReactNode }) {
  return (
    <Suspense fallback={<PageFallbackComponent />}>
      {children}
    </Suspense>
  );
}

// ============================================================
// Card Grid Suspense
// ============================================================

export function CardGridSuspense({ 
  children, 
  count = 6, 
  columns = 3 
}: { 
  children: ReactNode; 
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
    <Suspense
      fallback={
        <div className={`grid ${gridCols[columns as keyof typeof gridCols] || 'grid-cols-3'} gap-6`}>
          {Array.from({ length: count }).map((_, i) => (
            <CardSkeleton key={i} />
          ))}
        </div>
      }
    >
      {children}
    </Suspense>
  );
}

// ============================================================
// List Suspense
// ============================================================

export function ListSuspense({ 
  children, 
  count = 5 
}: { 
  children: ReactNode; 
  count?: number;
}) {
  return (
    <Suspense
      fallback={
        <div className="space-y-2">
          {Array.from({ length: count }).map((_, i) => (
            <div 
              key={i} 
              className="h-16 bg-zinc-900/50 animate-pulse"
            />
          ))}
        </div>
      }
    >
      {children}
    </Suspense>
  );
}

// ============================================================
// Section Suspense
// ============================================================

export function SectionSuspense({ 
  children,
  title,
  className = '',
}: { 
  children: ReactNode;
  title?: string;
  className?: string;
}) {
  return (
    <section className={className}>
      {title && <h2 className="text-xl font-bold mb-4">{title}</h2>}
      <Suspense
        fallback={
          <div className="animate-pulse">
            <div className="h-32 bg-zinc-900/50" />
          </div>
        }
      >
        {children}
      </Suspense>
    </section>
  );
}

// ============================================================
// HOC: withSuspense
// ============================================================

export function withSuspense<P extends object>(
  Component: ComponentType<P>,
  fallback?: ReactNode,
  type: 'page' | 'card' | 'inline' = 'inline'
) {
  return function SuspendedComponent(props: P) {
    return (
      <SuspenseBoundary fallback={fallback} type={type}>
        <Component {...props} />
      </SuspenseBoundary>
    );
  };
}

// ============================================================
// Lazy Load Helper
// ============================================================

export function createLazySuspense<P extends object>(
  importFn: () => Promise<{ default: ComponentType<P> }>,
  fallback?: ReactNode
) {
  const LazyComponent = require('react').lazy(importFn);
  
  return function LazyWithSuspense(props: P) {
    return (
      <Suspense fallback={fallback || <InlineFallback />}>
        <LazyComponent {...props} />
      </Suspense>
    );
  };
}

export default SuspenseBoundary;
