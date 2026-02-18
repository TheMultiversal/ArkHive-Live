'use client';

import { motion } from 'framer-motion';

export default function RecentLoading() {
  return (
    <div className="min-h-screen bg-black pt-24 pb-16">
      <div className="max-w-4xl mx-auto px-4">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <div className="h-10 w-48 bg-zinc-900 animate-pulse mb-2" />
            <div className="h-5 w-64 bg-zinc-900/60 animate-pulse" />
          </div>
          <div className="h-10 w-28 bg-zinc-800/60 animate-pulse" />
        </div>

        {/* Recent activity list */}
        <div className="space-y-4">
          {[...Array(15)].map((_, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: i * 0.03 }}
              className="glass-card p-4 flex items-center gap-4"
            >
              {/* Icon */}
              <div className="w-12 h-12 bg-blood-900/30 animate-pulse flex-shrink-0" />
              
              {/* Content */}
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-2">
                  <div className="h-5 w-48 bg-zinc-800 animate-pulse" />
                  <div className="h-5 w-20 bg-zinc-800/60 animate-pulse" />
                </div>
                <div className="h-4 w-full bg-zinc-900/60 animate-pulse" />
              </div>

              {/* Timestamp */}
              <div className="text-right flex-shrink-0">
                <div className="h-4 w-20 bg-zinc-900/60 animate-pulse mb-1" />
                <div className="h-3 w-16 bg-zinc-900/40 animate-pulse" />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Load more */}
        <div className="mt-8 text-center">
          <div className="h-10 w-32 bg-zinc-800/60 animate-pulse mx-auto" />
        </div>
      </div>
    </div>
  );
}
