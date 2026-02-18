'use client';

import { motion } from 'framer-motion';

export default function ActivityLoading() {
  return (
    <div className="min-h-screen bg-black pt-24 pb-16">
      <div className="max-w-4xl mx-auto px-4">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <div className="h-10 w-40 bg-zinc-900 animate-pulse mb-2" />
            <div className="h-5 w-56 bg-zinc-900/60 animate-pulse" />
          </div>
          <div className="flex gap-3">
            <div className="h-10 w-28 bg-zinc-800/60 animate-pulse" />
            <div className="h-10 w-10 bg-zinc-800/60 animate-pulse" />
          </div>
        </div>

        {/* Filters */}
        <div className="flex gap-2 mb-8">
          {['All', 'Comments', 'Edits', 'Uploads', 'System'].map((_, i) => (
            <div key={i} className="h-9 w-24 bg-zinc-900/60 animate-pulse" />
          ))}
        </div>

        {/* Activity feed */}
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-6 top-0 bottom-0 w-px bg-zinc-800" />

          <div className="space-y-6">
            {[...Array(12)].map((_, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: i * 0.03 }}
                className="relative flex gap-6 pl-12"
              >
                {/* Timeline dot */}
                <div className="absolute left-4 w-5 h-5 bg-blood-600/50 animate-pulse" />

                {/* Card */}
                <div className="flex-1 glass-card p-4">
                  <div className="flex items-start gap-4">
                    {/* Avatar */}
                    <div className="w-10 h-10 bg-zinc-800 animate-pulse rounded-full flex-shrink-0" />
                    
                    {/* Content */}
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        <div className="h-5 w-32 bg-zinc-800 animate-pulse" />
                        <div className="h-5 w-20 bg-blood-900/30 animate-pulse" />
                        <div className="h-4 w-16 bg-zinc-900/40 animate-pulse ml-auto" />
                      </div>
                      <div className="h-4 w-full bg-zinc-900/60 animate-pulse mb-2" />
                      <div className="h-4 w-3/4 bg-zinc-900/60 animate-pulse" />
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Load more */}
        <div className="mt-8 text-center">
          <div className="h-10 w-32 bg-zinc-800/60 animate-pulse mx-auto" />
        </div>
      </div>
    </div>
  );
}
