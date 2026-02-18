'use client';

import { motion } from 'framer-motion';

export default function TeamLoading() {
  return (
    <div className="min-h-screen bg-black pt-24 pb-16">
      <div className="max-w-6xl mx-auto px-4">
        {/* Header skeleton */}
        <div className="text-center mb-16">
          <div className="h-12 w-40 bg-zinc-900 animate-pulse mx-auto mb-4" />
          <div className="h-6 w-96 bg-zinc-900/60 animate-pulse mx-auto" />
        </div>

        {/* Team grid */}
        <div className="grid grid-cols-3 gap-8">
          {[...Array(9)].map((_, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: i * 0.05 }}
              className="glass-card p-6 text-center"
            >
              {/* Avatar */}
              <div className="w-24 h-24 bg-zinc-800 animate-pulse mx-auto mb-4 rounded-full" />
              
              {/* Name */}
              <div className="h-6 w-32 bg-zinc-800 animate-pulse mx-auto mb-2" />
              
              {/* Role */}
              <div className="h-4 w-40 bg-blood-900/30 animate-pulse mx-auto mb-4" />
              
              {/* Bio */}
              <div className="space-y-2">
                <div className="h-3 w-full bg-zinc-900/60 animate-pulse" />
                <div className="h-3 w-5/6 bg-zinc-900/60 animate-pulse mx-auto" />
              </div>

              {/* Social links */}
              <div className="flex justify-center gap-3 mt-4">
                <div className="w-8 h-8 bg-zinc-800/60 animate-pulse" />
                <div className="w-8 h-8 bg-zinc-800/60 animate-pulse" />
                <div className="w-8 h-8 bg-zinc-800/60 animate-pulse" />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Join us CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="mt-16 glass-card p-8 text-center"
        >
          <div className="h-8 w-48 bg-zinc-800 animate-pulse mx-auto mb-4" />
          <div className="h-4 w-96 bg-zinc-900/60 animate-pulse mx-auto mb-6" />
          <div className="h-12 w-40 bg-blood-900/30 animate-pulse mx-auto" />
        </motion.div>
      </div>
    </div>
  );
}
