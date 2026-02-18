'use client';

import { motion } from 'framer-motion';

export default function AuditLoading() {
  return (
    <div className="min-h-screen bg-black pt-24 pb-16">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <div className="h-10 w-32 bg-zinc-900 animate-pulse mb-2" />
            <div className="h-5 w-64 bg-zinc-900/60 animate-pulse" />
          </div>
          <div className="flex gap-3">
            <div className="h-10 w-40 bg-zinc-800/60 animate-pulse" />
            <div className="h-10 w-28 bg-zinc-800/60 animate-pulse" />
          </div>
        </div>

        {/* Filters row */}
        <div className="flex gap-4 mb-6">
          <div className="h-10 flex-1 bg-zinc-900/60 animate-pulse" />
          <div className="h-10 w-40 bg-zinc-900/60 animate-pulse" />
          <div className="h-10 w-40 bg-zinc-900/60 animate-pulse" />
          <div className="h-10 w-40 bg-zinc-900/60 animate-pulse" />
        </div>

        {/* Table */}
        <div className="glass-card overflow-hidden">
          {/* Table header */}
          <div className="grid grid-cols-6 gap-4 p-4 bg-zinc-900/60 border-b border-zinc-800">
            <div className="h-5 w-20 bg-zinc-800 animate-pulse" />
            <div className="h-5 w-16 bg-zinc-800 animate-pulse" />
            <div className="h-5 w-24 bg-zinc-800 animate-pulse" />
            <div className="h-5 w-20 bg-zinc-800 animate-pulse" />
            <div className="h-5 w-32 bg-zinc-800 animate-pulse" />
            <div className="h-5 w-16 bg-zinc-800 animate-pulse" />
          </div>

          {/* Table rows */}
          {[...Array(15)].map((_, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: i * 0.02 }}
              className="grid grid-cols-6 gap-4 p-4 border-b border-zinc-800/50"
            >
              <div className="h-4 w-32 bg-zinc-900/60 animate-pulse" />
              <div className="h-4 w-20 bg-blood-900/30 animate-pulse" />
              <div className="h-4 w-28 bg-zinc-900/60 animate-pulse" />
              <div className="h-4 w-24 bg-zinc-900/60 animate-pulse" />
              <div className="h-4 w-40 bg-zinc-900/60 animate-pulse" />
              <div className="w-8 h-8 bg-zinc-800/60 animate-pulse" />
            </motion.div>
          ))}
        </div>

        {/* Pagination */}
        <div className="flex items-center justify-between mt-6">
          <div className="h-5 w-48 bg-zinc-900/60 animate-pulse" />
          <div className="flex gap-2">
            {[...Array(5)].map((_, i) => (
              <div key={i} className="w-10 h-10 bg-zinc-900/60 animate-pulse" />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
