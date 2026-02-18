'use client';

import { motion } from 'framer-motion';

export default function NotificationsLoading() {
  return (
    <div className="min-h-screen bg-black pt-24 pb-16">
      <div className="max-w-3xl mx-auto px-4">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div className="h-10 w-40 bg-zinc-900 animate-pulse" />
          <div className="flex gap-3">
            <div className="h-10 w-28 bg-zinc-800/60 animate-pulse" />
            <div className="h-10 w-32 bg-zinc-800/60 animate-pulse" />
          </div>
        </div>

        {/* Filters */}
        <div className="flex gap-2 mb-6">
          {['All', 'Unread', 'Mentions', 'Updates'].map((_, i) => (
            <div key={i} className="h-9 w-20 bg-zinc-900/60 animate-pulse" />
          ))}
        </div>

        {/* Notification list */}
        <div className="space-y-3">
          {[...Array(10)].map((_, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: i * 0.03 }}
              className="glass-card p-4 flex items-start gap-4"
            >
              {/* Icon */}
              <div className="w-10 h-10 bg-blood-900/30 animate-pulse flex-shrink-0" />
              
              {/* Content */}
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-2">
                  <div className="h-4 w-48 bg-zinc-800 animate-pulse" />
                  {i < 3 && <div className="w-2 h-2 bg-blood-500 rounded-full" />}
                </div>
                <div className="h-4 w-full bg-zinc-900/60 animate-pulse mb-2" />
                <div className="h-3 w-24 bg-zinc-900/40 animate-pulse" />
              </div>

              {/* Actions */}
              <div className="flex gap-2">
                <div className="w-8 h-8 bg-zinc-800/60 animate-pulse" />
                <div className="w-8 h-8 bg-zinc-800/60 animate-pulse" />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Load more */}
        <div className="mt-8 text-center">
          <div className="h-10 w-32 bg-zinc-800/60 animate-pulse mx-auto" />
        </div>
      </div>
    </div>
  );
}
