'use client';

import { motion } from 'framer-motion';

export default function MethodologyLoading() {
  return (
    <div className="min-h-screen bg-black pt-24 pb-16">
      <div className="max-w-4xl mx-auto px-4">
        {/* Header skeleton */}
        <div className="text-center mb-16">
          <div className="h-12 w-64 bg-zinc-900 animate-pulse mx-auto mb-4" />
          <div className="h-6 w-96 bg-zinc-900/60 animate-pulse mx-auto" />
        </div>

        {/* Principles grid */}
        <div className="mb-16">
          <div className="h-8 w-48 bg-zinc-800 animate-pulse mb-8" />
          <div className="grid grid-cols-2 gap-6">
            {[...Array(4)].map((_, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: i * 0.1 }}
                className="glass-card p-6"
              >
                <div className="w-10 h-10 bg-blood-900/30 animate-pulse mb-4" />
                <div className="h-6 w-32 bg-zinc-800 animate-pulse mb-3" />
                <div className="space-y-2">
                  <div className="h-4 w-full bg-zinc-900/60 animate-pulse" />
                  <div className="h-4 w-3/4 bg-zinc-900/60 animate-pulse" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Evidence types */}
        <div className="mb-16">
          <div className="h-8 w-40 bg-zinc-800 animate-pulse mb-8" />
          <div className="space-y-4">
            {[...Array(4)].map((_, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 + i * 0.1 }}
                className="glass-card p-4 flex items-center gap-4"
              >
                <div className="w-12 h-12 bg-blood-900/30 animate-pulse" />
                <div className="flex-1">
                  <div className="h-5 w-40 bg-zinc-800 animate-pulse mb-2" />
                  <div className="h-4 w-64 bg-zinc-900/60 animate-pulse" />
                </div>
                <div className="h-6 w-20 bg-zinc-800/60 animate-pulse" />
              </motion.div>
            ))}
          </div>
        </div>

        {/* Process steps */}
        <div>
          <div className="h-8 w-32 bg-zinc-800 animate-pulse mb-8" />
          <div className="space-y-6">
            {[...Array(5)].map((_, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.8 + i * 0.1 }}
                className="flex gap-6"
              >
                <div className="w-12 h-12 bg-blood-600/30 animate-pulse flex-shrink-0" />
                <div className="flex-1">
                  <div className="h-6 w-48 bg-zinc-800 animate-pulse mb-2" />
                  <div className="h-4 w-full bg-zinc-900/60 animate-pulse" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
