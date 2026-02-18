'use client';

import { motion } from 'framer-motion';

export default function TermsLoading() {
  return (
    <div className="min-h-screen bg-black pt-24 pb-16">
      <div className="max-w-3xl mx-auto px-4">
        {/* Header skeleton */}
        <div className="mb-12">
          <div className="h-10 w-56 bg-zinc-900 animate-pulse mb-4" />
          <div className="h-4 w-48 bg-zinc-900/60 animate-pulse" />
        </div>

        {/* Table of contents */}
        <div className="glass-card p-6 mb-10">
          <div className="h-5 w-36 bg-zinc-800 animate-pulse mb-4" />
          <div className="space-y-2">
            {[...Array(6)].map((_, i) => (
              <div key={i} className="h-4 w-48 bg-zinc-900/60 animate-pulse" />
            ))}
          </div>
        </div>

        {/* Document sections */}
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: i * 0.05 }}
            className="mb-10"
          >
            <div className="h-7 w-56 bg-zinc-800 animate-pulse mb-4" />
            <div className="space-y-3">
              <div className="h-4 w-full bg-zinc-900/60 animate-pulse" />
              <div className="h-4 w-full bg-zinc-900/60 animate-pulse" />
              <div className="h-4 w-5/6 bg-zinc-900/60 animate-pulse" />
              <div className="h-4 w-full bg-zinc-900/60 animate-pulse" />
              <div className="h-4 w-2/3 bg-zinc-900/60 animate-pulse" />
            </div>
          </motion.div>
        ))}

        {/* Footer */}
        <div className="mt-12 pt-6 border-t border-zinc-800">
          <div className="h-4 w-64 bg-zinc-900/60 animate-pulse mb-2" />
          <div className="h-4 w-48 bg-zinc-900/60 animate-pulse" />
        </div>
      </div>
    </div>
  );
}
