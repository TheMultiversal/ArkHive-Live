'use client';

import { motion } from 'framer-motion';

interface SkeletonProps {
  className?: string;
}

export function Skeleton({ className = '' }: SkeletonProps) {
  return (
    <div className={`animate-pulse bg-white/[0.03] rounded ${className}`} />
  );
}

export function WorkspaceCardSkeleton({ viewMode = 'grid' }: { viewMode?: 'grid' | 'list' }) {
  if (viewMode === 'list') {
    return (
      <div className="flex items-center gap-4 bg-[#0a0a0a] border border-white/[0.06] rounded-lg p-4">
        <div className="flex-1">
          <Skeleton className="h-4 w-48 mb-2" />
          <Skeleton className="h-3 w-72" />
        </div>
        <div className="hidden sm:flex items-center gap-4">
          <Skeleton className="h-4 w-8" />
          <Skeleton className="h-4 w-8" />
          <Skeleton className="h-4 w-8" />
        </div>
        <Skeleton className="h-4 w-20" />
      </div>
    );
  }

  return (
    <div className="bg-[#0a0a0a] border border-white/[0.06] rounded-lg p-5">
      <div className="mb-3">
        <Skeleton className="h-3 w-16 mb-2" />
        <Skeleton className="h-5 w-3/4" />
      </div>
      <Skeleton className="h-10 w-full mb-4" />
      <div className="flex gap-1 mb-4">
        <Skeleton className="h-5 w-16" />
        <Skeleton className="h-5 w-20" />
        <Skeleton className="h-5 w-14" />
      </div>
      <div className="pt-3 border-t border-white/[0.04]">
        <div className="flex justify-between">
          <div className="flex gap-3">
            <Skeleton className="h-4 w-8" />
            <Skeleton className="h-4 w-8" />
            <Skeleton className="h-4 w-8" />
          </div>
          <Skeleton className="h-4 w-16" />
        </div>
      </div>
    </div>
  );
}

export function ChatMessageSkeleton() {
  return (
    <div className="flex items-start gap-2 p-3">
      <Skeleton className="w-7 h-7 rounded-full flex-shrink-0" />
      <div className="flex-1">
        <div className="flex items-center gap-2 mb-1">
          <Skeleton className="h-3 w-20" />
          <Skeleton className="h-2 w-12" />
        </div>
        <Skeleton className="h-4 w-full mb-1" />
        <Skeleton className="h-4 w-2/3" />
      </div>
    </div>
  );
}

export function EvidenceItemSkeleton() {
  return (
    <div className="p-3 bg-white/[0.01] border border-white/[0.04] rounded-lg">
      <div className="flex items-start justify-between mb-2">
        <Skeleton className="w-4 h-4" />
        <Skeleton className="h-4 w-16" />
      </div>
      <Skeleton className="h-4 w-3/4 mb-1" />
      <Skeleton className="h-3 w-full mb-2" />
      <div className="flex gap-1">
        <Skeleton className="h-4 w-12" />
        <Skeleton className="h-4 w-14" />
      </div>
    </div>
  );
}

export function DocumentItemSkeleton() {
  return (
    <div className="flex items-center gap-3 p-2">
      <Skeleton className="w-8 h-8 rounded" />
      <div className="flex-1">
        <Skeleton className="h-3 w-40 mb-1" />
        <Skeleton className="h-2 w-24" />
      </div>
      <Skeleton className="h-5 w-5" />
    </div>
  );
}

export function MemberItemSkeleton() {
  return (
    <div className="flex items-center gap-2 p-2">
      <Skeleton className="w-6 h-6 rounded-full" />
      <div className="flex-1">
        <Skeleton className="h-3 w-24 mb-1" />
        <Skeleton className="h-2 w-16" />
      </div>
    </div>
  );
}

export function WorkspaceLoadingState() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="min-h-screen bg-[#030303] pt-16 lg:pt-20"
    >
      <div className="max-w-7xl mx-auto px-6 py-8">
        <div className="flex items-center justify-between mb-8">
          <div>
            <Skeleton className="h-6 w-32 mb-2" />
            <Skeleton className="h-3 w-48" />
          </div>
          <Skeleton className="h-9 w-32" />
        </div>
        
        <div className="grid grid-cols-3 gap-4 mb-8">
          <Skeleton className="h-20 rounded-lg" />
          <Skeleton className="h-20 rounded-lg" />
          <Skeleton className="h-20 rounded-lg" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {[1, 2, 3, 4, 5, 6].map((i) => (
            <WorkspaceCardSkeleton key={i} />
          ))}
        </div>
      </div>
    </motion.div>
  );
}
