'use client';

import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { AlertTriangle, RefreshCw, Home, ChevronLeft } from 'lucide-react';
import Link from 'next/link';

interface ErrorProps {
  error: Error & { digest?: string };
  reset: () => void;
}

export default function InvestigationsError({ error, reset }: ErrorProps) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error('Investigations error:', error);
  }, [error]);

  return (
    <div className="min-h-screen bg-black flex items-center justify-center px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-md w-full text-center"
      >
        {/* Error icon */}
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.2, type: 'spring' }}
          className="w-20 h-20 mx-auto mb-8 border-2 border-blood-600 flex items-center justify-center"
        >
          <AlertTriangle className="w-10 h-10 text-blood-500" />
        </motion.div>

        {/* Title */}
        <h1 className="text-3xl font-bold text-white mb-4">
          Investigation Data Unavailable
        </h1>

        {/* Message */}
        <p className="text-zinc-400 mb-8">
          We encountered an error loading the investigation data. This could be due to a 
          network issue or a problem with our servers. The truth will not be silenced.
        </p>

        {/* Error details */}
        {error.digest && (
          <p className="text-xs text-zinc-600 mb-8 font-mono">
            Error ID: {error.digest}
          </p>
        )}

        {/* Actions */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button
            onClick={reset}
            className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-blood-600 text-white font-medium hover:bg-blood-700 transition-colors"
          >
            <RefreshCw className="w-4 h-4" />
            Try Again
          </button>
          
          <Link
            href="/investigations"
            className="inline-flex items-center justify-center gap-2 px-6 py-3 border border-zinc-700 text-zinc-300 font-medium hover:border-blood-700 hover:text-white transition-colors"
          >
            <ChevronLeft className="w-4 h-4" />
            Back to Investigations
          </Link>
        </div>

        {/* Home link */}
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-zinc-500 hover:text-blood-500 mt-8 text-sm transition-colors"
        >
          <Home className="w-4 h-4" />
          Return to Home
        </Link>
      </motion.div>
    </div>
  );
}
