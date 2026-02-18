'use client';

import { motion } from 'framer-motion';

export default function FAQLoading() {
  return (
    <div className="min-h-screen bg-black pt-24 pb-16">
      <div className="max-w-3xl mx-auto px-4">
        {/* Header skeleton */}
        <div className="text-center mb-12">
          <div className="h-10 w-80 bg-zinc-900 animate-pulse mx-auto mb-4" />
          <div className="h-5 w-96 bg-zinc-900/60 animate-pulse mx-auto" />
        </div>

        {/* Search skeleton */}
        <div className="mb-8">
          <div className="h-12 w-full bg-zinc-900/60 animate-pulse" />
        </div>

        {/* FAQ accordion items */}
        <div className="space-y-4">
          {[...Array(8)].map((_, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: i * 0.05 }}
              className="glass-card"
            >
              <div className="p-6 flex items-center justify-between">
                <div className="flex-1">
                  <div className="h-5 w-3/4 bg-zinc-800 animate-pulse" />
                </div>
                <div className="w-6 h-6 bg-zinc-800/60 animate-pulse ml-4" />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Contact CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="mt-12 glass-card p-8 text-center"
        >
          <div className="h-6 w-64 bg-zinc-800 animate-pulse mx-auto mb-4" />
          <div className="h-4 w-80 bg-zinc-900/60 animate-pulse mx-auto mb-6" />
          <div className="h-10 w-32 bg-blood-900/30 animate-pulse mx-auto" />
        </motion.div>
      </div>
    </div>
  );
}
