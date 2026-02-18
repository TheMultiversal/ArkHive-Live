'use client';

import { motion } from 'framer-motion';

export default function DraftsLoading() {
  return (
    <div className="min-h-screen bg-black pt-24 pb-16">
      <div className="max-w-6xl mx-auto px-4">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <div className="h-10 w-32 bg-zinc-900 animate-pulse mb-2" />
            <div className="h-5 w-56 bg-zinc-900/60 animate-pulse" />
          </div>
          <div className="h-10 w-32 bg-blood-900/30 animate-pulse" />
        </div>

        {/* Filters */}
        <div className="flex gap-4 mb-6">
          <div className="h-10 flex-1 bg-zinc-900/60 animate-pulse" />
          <div className="h-10 w-32 bg-zinc-900/60 animate-pulse" />
          <div className="h-10 w-32 bg-zinc-900/60 animate-pulse" />
        </div>

        {/* Drafts grid */}
        <div className="grid grid-cols-2 gap-6">
          {[...Array(8)].map((_, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: i * 0.05 }}
              className="glass-card p-6"
            >
              {/* Status badge */}
              <div className="flex items-center justify-between mb-4">
                <div className="h-6 w-16 bg-yellow-900/30 animate-pulse" />
                <div className="h-4 w-24 bg-zinc-900/60 animate-pulse" />
              </div>

              {/* Title */}
              <div className="h-6 w-3/4 bg-zinc-800 animate-pulse mb-3" />
              
              {/* Preview */}
              <div className="space-y-2 mb-4">
                <div className="h-4 w-full bg-zinc-900/60 animate-pulse" />
                <div className="h-4 w-full bg-zinc-900/60 animate-pulse" />
                <div className="h-4 w-2/3 bg-zinc-900/60 animate-pulse" />
              </div>

              {/* Meta */}
              <div className="flex items-center gap-4 mb-4">
                <div className="h-4 w-20 bg-zinc-900/40 animate-pulse" />
                <div className="h-4 w-24 bg-zinc-900/40 animate-pulse" />
              </div>

              {/* Actions */}
              <div className="flex gap-2 pt-4 border-t border-zinc-800">
                <div className="h-9 flex-1 bg-zinc-800/60 animate-pulse" />
                <div className="h-9 flex-1 bg-blood-900/30 animate-pulse" />
                <div className="h-9 w-9 bg-zinc-800/60 animate-pulse" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
