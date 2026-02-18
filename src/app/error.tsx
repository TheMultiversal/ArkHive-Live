'use client';

import { useEffect } from 'react';
import { AlertTriangle, RefreshCw, Home } from 'lucide-react';
import Link from 'next/link';

interface ErrorProps {
  error: Error & { digest?: string };
  reset: () => void;
}

export default function Error({ error, reset }: ErrorProps) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error('Application error:', error);
  }, [error]);

  return (
    <div className="min-h-screen pt-20 lg:pt-24 pb-16 flex items-center justify-center">
      <div className="max-w-lg mx-auto px-4 text-center">
        <div className="border-2 border-blood-800/60 bg-black/80 p-12">
          {/* Icon */}
          <div className="w-24 h-24 mx-auto mb-8 border-2 border-blood-700 bg-blood-950/30 flex items-center justify-center animate-pulse">
            <AlertTriangle className="w-12 h-12 text-blood-600" />
          </div>

          {/* Error Title */}
          <h1 className="text-2xl font-black text-white uppercase tracking-wider mb-4">
            SYSTEM MALFUNCTION
          </h1>

          <p className="text-zinc-400 mb-4 leading-relaxed">
            An unexpected error has occurred. This incident has been logged for investigation.
          </p>

          {/* Error Details */}
          {error.digest && (
            <div className="mb-6 p-3 bg-zinc-900/50 border border-zinc-800">
              <span className="text-xs text-zinc-600 font-mono">
                Error ID: {error.digest}
              </span>
            </div>
          )}

          {/* Error Message (in dev) */}
          {process.env.NODE_ENV === 'development' && (
            <div className="mb-6 p-4 bg-blood-950/30 border border-blood-900/50 text-left">
              <p className="text-xs text-blood-600 font-mono break-all">
                {error.message}
              </p>
            </div>
          )}

          {/* Actions */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={reset}
              className="flex items-center gap-2 px-6 py-3 border-2 border-blood-700 bg-blood-950/30 text-blood-600 font-bold uppercase tracking-wider hover:bg-blood-700 hover:text-white transition-all"
            >
              <RefreshCw className="w-5 h-5" />
              Try Again
            </button>
            <Link
              href="/"
              className="flex items-center gap-2 px-6 py-3 border-2 border-zinc-700 text-zinc-400 font-bold uppercase tracking-wider hover:border-zinc-600 hover:text-zinc-300 transition-all"
            >
              <Home className="w-5 h-5" />
              Return Home
            </Link>
          </div>
        </div>

        {/* Footer note */}
        <div className="mt-8 text-xs text-zinc-700 uppercase tracking-widest">
          If this persists, the truth may be closer than you think.
        </div>
      </div>
    </div>
  );
}
