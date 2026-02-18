'use client';

import { motion } from 'framer-motion';

export default function BookmarksLoading() {
  return (
    <div className="min-h-screen bg-black pt-24 pb-16">
      <div className="max-w-6xl mx-auto px-4">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <div className="h-10 w-40 bg-zinc-900 animate-pulse mb-2" />
            <div className="h-5 w-48 bg-zinc-900/60 animate-pulse" />
          </div>
          <div className="flex gap-3">
            <div className="h-10 w-40 bg-zinc-800/60 animate-pulse" />
            <div className="h-10 w-28 bg-zinc-800/60 animate-pulse" />
          </div>
        </div>

        {/* Filters */}
        <div className="flex gap-2 mb-6">
          {['All', 'Investigations', 'Entities', 'Documents'].map((_, i) => (
            <div key={i} className="h-9 w-28 bg-zinc-900/60 animate-pulse" />
          ))}
        </div>

        {/* Grid */}
        <div className="grid grid-cols-3 gap-6">
          {[...Array(9)].map((_, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: i * 0.05 }}
              className="glass-card overflow-hidden"
            >
              {/* Image */}
              <div className="h-40 bg-zinc-900/60 animate-pulse" />
              
              {/* Content */}
              <div className="p-4">
                <div className="flex items-center gap-2 mb-2">
                  <div className="h-5 w-20 bg-blood-900/30 animate-pulse" />
                  <div className="h-5 w-16 bg-zinc-800/60 animate-pulse" />
                </div>
                <div className="h-5 w-full bg-zinc-800 animate-pulse mb-2" />
                <div className="h-4 w-full bg-zinc-900/60 animate-pulse mb-1" />
                <div className="h-4 w-3/4 bg-zinc-900/60 animate-pulse mb-4" />
                
                {/* Footer */}
                <div className="flex items-center justify-between">
                  <div className="h-4 w-24 bg-zinc-900/40 animate-pulse" />
                  <div className="w-8 h-8 bg-zinc-800/60 animate-pulse" />
                </div>
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
