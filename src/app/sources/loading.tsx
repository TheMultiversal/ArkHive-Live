'use client';

import { motion } from 'framer-motion';

export default function SourcesLoading() {
  return (
    <div className="min-h-screen bg-black pt-24 pb-16">
      <div className="max-w-5xl mx-auto px-4">
        {/* Header skeleton */}
        <div className="text-center mb-12">
          <div className="h-10 w-48 bg-zinc-900 animate-pulse mx-auto mb-4" />
          <div className="h-5 w-96 bg-zinc-900/60 animate-pulse mx-auto" />
        </div>

        {/* Filters */}
        <div className="flex gap-4 mb-8">
          <div className="h-10 w-48 bg-zinc-900/60 animate-pulse" />
          <div className="h-10 w-32 bg-zinc-900/60 animate-pulse" />
          <div className="h-10 w-32 bg-zinc-900/60 animate-pulse" />
        </div>

        {/* Source list */}
        <div className="space-y-4">
          {[...Array(10)].map((_, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: i * 0.05 }}
              className="glass-card p-6"
            >
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-blood-900/30 animate-pulse flex-shrink-0" />
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="h-5 w-64 bg-zinc-800 animate-pulse" />
                    <div className="h-5 w-20 bg-blood-900/30 animate-pulse" />
                  </div>
                  <div className="h-4 w-full bg-zinc-900/60 animate-pulse mb-2" />
                  <div className="h-4 w-3/4 bg-zinc-900/60 animate-pulse mb-3" />
                  <div className="flex gap-2">
                    <div className="h-6 w-16 bg-zinc-800/60 animate-pulse" />
                    <div className="h-6 w-20 bg-zinc-800/60 animate-pulse" />
                  </div>
                </div>
                <div className="h-8 w-24 bg-zinc-800/60 animate-pulse" />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Pagination */}
        <div className="flex justify-center gap-2 mt-8">
          {[...Array(5)].map((_, i) => (
            <div key={i} className="w-10 h-10 bg-zinc-900/60 animate-pulse" />
          ))}
        </div>
      </div>
    </div>
  );
}
