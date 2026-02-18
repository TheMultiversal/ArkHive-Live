'use client';

import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { AlertTriangle, RefreshCw, Home, Bug, Copy } from 'lucide-react';
import Link from 'next/link';

interface ErrorPageProps {
  error: Error & { digest?: string };
  reset: () => void;
}

export default function GlobalError({ error, reset }: ErrorPageProps) {
  useEffect(() => {
    // Log error to error reporting service
    console.error('Global error:', error);
  }, [error]);

  const handleCopyError = async () => {
    const errorText = `
Error: ${error.message}
Digest: ${error.digest || 'N/A'}
Stack: ${error.stack || 'N/A'}
    `.trim();

    try {
      await navigator.clipboard.writeText(errorText);
    } catch (err) {
      console.error('Failed to copy:', err);
    }
  };

  return (
    <html>
      <body className="bg-black text-white">
        <div className="min-h-screen flex items-center justify-center p-8">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="max-w-lg w-full"
          >
            {/* Error Icon */}
            <motion.div
              animate={{ 
                scale: [1, 1.05, 1],
              }}
              transition={{ 
                duration: 2, 
                repeat: Infinity,
              }}
              className="w-20 h-20 mx-auto mb-6 bg-red-500/20 flex items-center justify-center"
            >
              <AlertTriangle className="w-10 h-10 text-red-500" />
            </motion.div>

            {/* Title */}
            <h1 className="text-3xl font-bold text-center text-white mb-3">
              Critical System Error
            </h1>
            
            {/* Description */}
            <p className="text-zinc-400 text-center mb-6">
              An unexpected error has occurred. Our systems are attempting to recover.
            </p>

            {/* Error Details */}
            <div className="bg-zinc-900 border border-zinc-800 p-4 mb-6">
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center gap-2 text-red-400">
                  <Bug className="w-4 h-4" />
                  <span className="text-sm font-medium">Error Details</span>
                </div>
                <button
                  onClick={handleCopyError}
                  className="text-zinc-500 hover:text-zinc-300 transition-colors"
                  title="Copy error details"
                >
                  <Copy className="w-4 h-4" />
                </button>
              </div>
              <p className="text-sm text-red-400 font-mono break-all">
                {error.message || 'Unknown error occurred'}
              </p>
              {error.digest && (
                <p className="text-xs text-zinc-600 mt-2 font-mono">
                  Digest: {error.digest}
                </p>
              )}
            </div>

            {/* Actions */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={reset}
                className="px-6 py-3 bg-red-500 text-white font-medium flex items-center justify-center gap-2 hover:bg-red-600 transition-colors"
              >
                <RefreshCw className="w-4 h-4" />
                Try Again
              </motion.button>

              <Link href="/">
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full px-6 py-3 bg-zinc-800 text-zinc-300 font-medium flex items-center justify-center gap-2 hover:bg-zinc-700 transition-colors"
                >
                  <Home className="w-4 h-4" />
                  Return Home
                </motion.button>
              </Link>
            </div>

            {/* Support Notice */}
            <p className="mt-8 text-center text-xs text-zinc-600">
              If this error persists, please contact support with the error details above.
            </p>
          </motion.div>
        </div>
      </body>
    </html>
  );
}
