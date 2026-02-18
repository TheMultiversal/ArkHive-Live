'use client';

import { motion } from 'framer-motion';

export default function ContactLoading() {
  return (
    <div className="min-h-screen bg-black pt-24 pb-16">
      <div className="max-w-2xl mx-auto px-4">
        {/* Header skeleton */}
        <div className="text-center mb-12">
          <div className="h-10 w-48 bg-zinc-900 animate-pulse mx-auto mb-4" />
          <div className="h-5 w-80 bg-zinc-900/60 animate-pulse mx-auto" />
        </div>

        {/* Form skeleton */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="glass-card p-8"
        >
          {/* Name field */}
          <div className="mb-6">
            <div className="h-4 w-16 bg-zinc-800 animate-pulse mb-2" />
            <div className="h-12 w-full bg-zinc-900/60 animate-pulse" />
          </div>

          {/* Email field */}
          <div className="mb-6">
            <div className="h-4 w-12 bg-zinc-800 animate-pulse mb-2" />
            <div className="h-12 w-full bg-zinc-900/60 animate-pulse" />
          </div>

          {/* Subject field */}
          <div className="mb-6">
            <div className="h-4 w-16 bg-zinc-800 animate-pulse mb-2" />
            <div className="h-12 w-full bg-zinc-900/60 animate-pulse" />
          </div>

          {/* Message field */}
          <div className="mb-8">
            <div className="h-4 w-20 bg-zinc-800 animate-pulse mb-2" />
            <div className="h-32 w-full bg-zinc-900/60 animate-pulse" />
          </div>

          {/* Submit button */}
          <div className="h-12 w-full bg-blood-900/30 animate-pulse" />
        </motion.div>

        {/* Alternative contact methods */}
        <div className="grid grid-cols-2 gap-4 mt-8">
          {[...Array(2)].map((_, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 + i * 0.1 }}
              className="glass-card p-4 flex items-center gap-4"
            >
              <div className="w-10 h-10 bg-blood-900/30 animate-pulse" />
              <div>
                <div className="h-4 w-20 bg-zinc-800 animate-pulse mb-2" />
                <div className="h-3 w-32 bg-zinc-900/60 animate-pulse" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
