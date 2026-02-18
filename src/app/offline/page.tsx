'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { WifiOff, RefreshCw, Home } from 'lucide-react';

export default function OfflinePage() {
  return (
    <div className="min-h-screen bg-black flex items-center justify-center p-8">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="glass-card p-8 max-w-md w-full text-center"
      >
        {/* Icon */}
        <motion.div
          animate={{ 
            y: [0, -10, 0],
            opacity: [0.5, 1, 0.5],
          }}
          transition={{ 
            duration: 2, 
            repeat: Infinity,
          }}
          className="w-20 h-20 mx-auto mb-6 bg-zinc-800 flex items-center justify-center"
        >
          <WifiOff className="w-10 h-10 text-zinc-500" />
        </motion.div>

        {/* Title */}
        <h1 className="text-2xl font-bold text-zinc-100 mb-2">
          You&apos;re Offline
        </h1>
        
        {/* Description */}
        <p className="text-zinc-400 mb-6">
          It looks like you&apos;ve lost your internet connection. 
          Some features may not be available until you&apos;re back online.
        </p>

        {/* Actions */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => window.location.reload()}
            className="px-6 py-2 bg-blood-500 text-white font-medium flex items-center justify-center gap-2 hover:bg-blood-600 transition-colors"
          >
            <RefreshCw className="w-4 h-4" />
            Try Again
          </motion.button>

          <Link href="/">
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="w-full sm:w-auto px-6 py-2 bg-zinc-800 text-zinc-300 font-medium flex items-center justify-center gap-2 hover:bg-zinc-700 transition-colors"
            >
              <Home className="w-4 h-4" />
              Go Home
            </motion.button>
          </Link>
        </div>

        {/* Cached Content Notice */}
        <p className="mt-6 text-xs text-zinc-600">
          Previously visited pages may still be available from cache.
        </p>
      </motion.div>

      {/* Background Animation */}
      <div className="fixed inset-0 -z-10 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-zinc-800"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              opacity: [0, 0.5, 0],
              scale: [0, 1, 0],
            }}
            transition={{
              duration: 2 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>
    </div>
  );
}
