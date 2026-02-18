'use client';

import { motion } from 'framer-motion';

export default function TimelineLoading() {
  return (
    <div className="min-h-screen bg-black pt-24 pb-16">
      <div className="max-w-4xl mx-auto px-4">
        {/* Header skeleton */}
        <div className="text-center mb-16">
          <div className="h-10 w-64 bg-zinc-900 animate-pulse mx-auto mb-4" />
          <div className="h-6 w-96 bg-zinc-900/60 animate-pulse mx-auto" />
        </div>

        {/* Timeline skeleton */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-px h-full bg-zinc-800" />

          {/* Timeline items */}
          {[...Array(6)].map((_, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: i * 0.1 }}
              className={`relative flex items-center mb-12 ${
                i % 2 === 0 ? 'flex-row-reverse' : ''
              }`}
            >
              {/* Content */}
              <div className={`w-5/12 ${i % 2 === 0 ? 'text-right pr-8' : 'pl-8'}`}>
                <div className="glass-card p-6">
                  <div className="h-4 w-24 bg-blood-900/30 animate-pulse mb-3" />
                  <div className="h-6 w-full bg-zinc-800 animate-pulse mb-3" />
                  <div className="space-y-2">
                    <div className="h-4 w-full bg-zinc-800/60 animate-pulse" />
                    <div className="h-4 w-3/4 bg-zinc-800/60 animate-pulse" />
                  </div>
                </div>
              </div>

              {/* Center dot */}
              <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-blood-600 animate-pulse" />

              {/* Empty space for other side */}
              <div className="w-5/12" />
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
