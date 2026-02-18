'use client';

import { motion } from 'framer-motion';

export default function PrivacyLoading() {
  return (
    <div className="min-h-screen bg-black pt-24 pb-16">
      <div className="max-w-3xl mx-auto px-4">
        {/* Header skeleton */}
        <div className="mb-12">
          <div className="h-10 w-48 bg-zinc-900 animate-pulse mb-4" />
          <div className="h-4 w-40 bg-zinc-900/60 animate-pulse" />
        </div>

        {/* Document sections */}
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: i * 0.05 }}
            className="mb-10"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="w-6 h-6 bg-blood-900/30 animate-pulse" />
              <div className="h-7 w-48 bg-zinc-800 animate-pulse" />
            </div>
            <div className="space-y-3 pl-9">
              <div className="h-4 w-full bg-zinc-900/60 animate-pulse" />
              <div className="h-4 w-full bg-zinc-900/60 animate-pulse" />
              <div className="h-4 w-4/5 bg-zinc-900/60 animate-pulse" />
              <div className="h-4 w-full bg-zinc-900/60 animate-pulse" />
              <div className="h-4 w-3/4 bg-zinc-900/60 animate-pulse" />
            </div>
          </motion.div>
        ))}

        {/* Last updated */}
        <div className="mt-12 pt-6 border-t border-zinc-800">
          <div className="h-4 w-56 bg-zinc-900/60 animate-pulse" />
        </div>
      </div>
    </div>
  );
}
