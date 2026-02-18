'use client';

import { motion } from 'framer-motion';

export default function AboutLoading() {
  return (
    <div className="min-h-screen bg-black pt-24 pb-16">
      <div className="max-w-4xl mx-auto px-4">
        {/* Header skeleton */}
        <div className="text-center mb-16">
          <div className="h-12 w-48 bg-zinc-900 animate-pulse mx-auto mb-4" />
          <div className="h-6 w-96 bg-zinc-900/60 animate-pulse mx-auto" />
        </div>

        {/* Content sections */}
        {[...Array(4)].map((_, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: i * 0.1 }}
            className="mb-12"
          >
            <div className="h-8 w-48 bg-zinc-800 animate-pulse mb-6" />
            <div className="space-y-4">
              <div className="h-4 w-full bg-zinc-900/60 animate-pulse" />
              <div className="h-4 w-full bg-zinc-900/60 animate-pulse" />
              <div className="h-4 w-3/4 bg-zinc-900/60 animate-pulse" />
            </div>
          </motion.div>
        ))}

        {/* Stats grid */}
        <div className="grid grid-cols-3 gap-6 mt-16">
          {[...Array(3)].map((_, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 + i * 0.1 }}
              className="glass-card p-6 text-center"
            >
              <div className="h-10 w-20 bg-blood-900/30 animate-pulse mx-auto mb-2" />
              <div className="h-4 w-24 bg-zinc-800 animate-pulse mx-auto" />
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
