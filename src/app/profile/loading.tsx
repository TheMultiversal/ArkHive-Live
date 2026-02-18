'use client';

import { motion } from 'framer-motion';

export default function ProfileLoading() {
  return (
    <div className="min-h-screen bg-black pt-24 pb-16">
      <div className="max-w-4xl mx-auto px-4">
        {/* Profile header */}
        <div className="glass-card p-8 mb-8">
          <div className="flex items-start gap-8">
            {/* Avatar */}
            <div className="w-32 h-32 bg-zinc-800 animate-pulse rounded-full flex-shrink-0" />
            
            <div className="flex-1">
              {/* Name and role */}
              <div className="h-8 w-48 bg-zinc-800 animate-pulse mb-2" />
              <div className="h-5 w-32 bg-blood-900/30 animate-pulse mb-4" />
              
              {/* Bio */}
              <div className="space-y-2 mb-6">
                <div className="h-4 w-full bg-zinc-900/60 animate-pulse" />
                <div className="h-4 w-3/4 bg-zinc-900/60 animate-pulse" />
              </div>

              {/* Stats */}
              <div className="flex gap-8">
                {[...Array(4)].map((_, i) => (
                  <div key={i}>
                    <div className="h-6 w-12 bg-zinc-800 animate-pulse mb-1" />
                    <div className="h-4 w-16 bg-zinc-900/60 animate-pulse" />
                  </div>
                ))}
              </div>
            </div>

            {/* Edit button */}
            <div className="h-10 w-24 bg-zinc-800/60 animate-pulse" />
          </div>
        </div>

        {/* Tabs */}
        <div className="flex gap-4 mb-8 border-b border-zinc-800 pb-4">
          {[...Array(4)].map((_, i) => (
            <div key={i} className="h-10 w-28 bg-zinc-900/60 animate-pulse" />
          ))}
        </div>

        {/* Content grid */}
        <div className="grid grid-cols-2 gap-6">
          {[...Array(6)].map((_, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: i * 0.05 }}
              className="glass-card p-6"
            >
              <div className="h-5 w-48 bg-zinc-800 animate-pulse mb-3" />
              <div className="h-4 w-full bg-zinc-900/60 animate-pulse mb-2" />
              <div className="h-4 w-3/4 bg-zinc-900/60 animate-pulse mb-4" />
              <div className="flex gap-2">
                <div className="h-6 w-16 bg-blood-900/30 animate-pulse" />
                <div className="h-6 w-20 bg-zinc-800/60 animate-pulse" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
