'use client';

import { motion } from 'framer-motion';

export default function TagsLoading() {
  return (
    <div className="min-h-screen bg-black pt-24 pb-16">
      <div className="max-w-5xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="h-10 w-32 bg-zinc-900 animate-pulse mx-auto mb-4" />
          <div className="h-5 w-64 bg-zinc-900/60 animate-pulse mx-auto" />
        </div>

        {/* Search */}
        <div className="mb-8">
          <div className="h-12 w-full bg-zinc-900/60 animate-pulse" />
        </div>

        {/* Popular tags section */}
        <div className="mb-12">
          <div className="h-6 w-32 bg-zinc-800 animate-pulse mb-6" />
          <div className="flex flex-wrap gap-3">
            {[...Array(12)].map((_, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: i * 0.03 }}
                className="h-10 bg-zinc-900/60 animate-pulse"
                style={{ width: `${60 + Math.random() * 80}px` }}
              />
            ))}
          </div>
        </div>

        {/* All tags */}
        <div>
          <div className="h-6 w-24 bg-zinc-800 animate-pulse mb-6" />
          
          {/* Tag cloud */}
          <div className="glass-card p-8">
            <div className="flex flex-wrap gap-3 justify-center">
              {[...Array(40)].map((_, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: i * 0.02 }}
                  className="h-8 bg-zinc-900/60 animate-pulse"
                  style={{ 
                    width: `${40 + Math.random() * 100}px`,
                    opacity: 0.5 + Math.random() * 0.5
                  }}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Trending */}
        <div className="mt-12">
          <div className="h-6 w-28 bg-zinc-800 animate-pulse mb-6" />
          <div className="grid grid-cols-3 gap-4">
            {[...Array(6)].map((_, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.8 + i * 0.05 }}
                className="glass-card p-4 flex items-center gap-3"
              >
                <div className="w-8 h-8 bg-blood-900/30 animate-pulse" />
                <div className="flex-1">
                  <div className="h-5 w-24 bg-zinc-800 animate-pulse mb-1" />
                  <div className="h-4 w-16 bg-zinc-900/60 animate-pulse" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
