'use client';

import { motion } from 'framer-motion';

export default function ArchivesLoading() {
  return (
    <div className="min-h-screen bg-black pt-24 pb-16">
      <div className="max-w-5xl mx-auto px-4">
        {/* Header */}
        <div className="mb-12">
          <div className="h-10 w-40 bg-zinc-900 animate-pulse mb-4" />
          <div className="h-5 w-80 bg-zinc-900/60 animate-pulse" />
        </div>

        {/* Filters */}
        <div className="flex gap-4 mb-8">
          <div className="h-10 w-32 bg-zinc-900/60 animate-pulse" />
          <div className="h-10 w-40 bg-zinc-900/60 animate-pulse" />
          <div className="h-10 flex-1 bg-zinc-900/60 animate-pulse" />
        </div>

        {/* Archive years */}
        {[2024, 2023, 2022].map((year, yearIndex) => (
          <motion.div
            key={year}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: yearIndex * 0.1 }}
            className="mb-10"
          >
            <div className="h-8 w-20 bg-blood-900/30 animate-pulse mb-6" />
            
            {/* Months grid */}
            <div className="grid grid-cols-4 gap-4">
              {[...Array(12)].map((_, monthIndex) => (
                <div
                  key={monthIndex}
                  className="glass-card p-4"
                >
                  <div className="flex items-center justify-between mb-3">
                    <div className="h-5 w-20 bg-zinc-800 animate-pulse" />
                    <div className="h-5 w-8 bg-zinc-900/60 animate-pulse" />
                  </div>
                  <div className="space-y-2">
                    {[...Array(3)].map((_, itemIndex) => (
                      <div key={itemIndex} className="h-3 w-full bg-zinc-900/60 animate-pulse" />
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
