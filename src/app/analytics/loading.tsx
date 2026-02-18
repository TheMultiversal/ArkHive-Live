'use client';

import { motion } from 'framer-motion';

export default function AnalyticsLoading() {
  return (
    <div className="min-h-screen bg-black pt-24 pb-16">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div className="h-10 w-40 bg-zinc-900 animate-pulse" />
          <div className="flex gap-3">
            <div className="h-10 w-32 bg-zinc-800/60 animate-pulse" />
            <div className="h-10 w-28 bg-zinc-800/60 animate-pulse" />
          </div>
        </div>

        {/* Stats cards */}
        <div className="grid grid-cols-4 gap-6 mb-8">
          {[...Array(4)].map((_, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: i * 0.05 }}
              className="glass-card p-6"
            >
              <div className="flex items-center justify-between mb-4">
                <div className="w-10 h-10 bg-blood-900/30 animate-pulse" />
                <div className="h-5 w-16 bg-zinc-800/60 animate-pulse" />
              </div>
              <div className="h-8 w-24 bg-zinc-800 animate-pulse mb-2" />
              <div className="h-4 w-32 bg-zinc-900/60 animate-pulse" />
            </motion.div>
          ))}
        </div>

        {/* Charts row */}
        <div className="grid grid-cols-2 gap-6 mb-8">
          {[...Array(2)].map((_, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 + i * 0.1 }}
              className="glass-card p-6"
            >
              <div className="h-6 w-40 bg-zinc-800 animate-pulse mb-6" />
              <div className="h-64 bg-zinc-900/40 animate-pulse flex items-end justify-around p-4">
                {[...Array(7)].map((_, j) => (
                  <div
                    key={j}
                    className="w-8 bg-blood-900/30 animate-pulse"
                    style={{ height: `${30 + Math.random() * 70}%` }}
                  />
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom row */}
        <div className="grid grid-cols-3 gap-6">
          {/* Line chart */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="col-span-2 glass-card p-6"
          >
            <div className="h-6 w-48 bg-zinc-800 animate-pulse mb-6" />
            <div className="h-48 bg-zinc-900/40 animate-pulse" />
          </motion.div>

          {/* Pie chart */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="glass-card p-6"
          >
            <div className="h-6 w-32 bg-zinc-800 animate-pulse mb-6" />
            <div className="w-40 h-40 bg-zinc-900/40 animate-pulse rounded-full mx-auto mb-4" />
            <div className="space-y-2">
              {[...Array(4)].map((_, i) => (
                <div key={i} className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-blood-600/50 animate-pulse" />
                  <div className="h-4 w-20 bg-zinc-900/60 animate-pulse" />
                  <div className="h-4 w-8 bg-zinc-800/60 animate-pulse ml-auto" />
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
