'use client';

import { useEffect } from 'react';
import { Landmark, RefreshCw, ArrowLeft } from 'lucide-react';
import Link from 'next/link';

interface ErrorProps {
  error: Error & { digest?: string };
  reset: () => void;
}

export default function AgencyError({ error, reset }: ErrorProps) {
  useEffect(() => {
    console.error('Agency error:', error);
  }, [error]);

  return (
    <div className="min-h-screen pt-20 lg:pt-24 pb-16 flex items-center justify-center">
      <div className="max-w-lg mx-auto px-4 text-center">
        <div className="border-2 border-blood-800/60 bg-black/80 p-8">
          <div className="w-20 h-20 mx-auto mb-6 border-2 border-blood-700 bg-blood-950/30 flex items-center justify-center">
            <Landmark className="w-10 h-10 text-blood-600" />
          </div>

          <h1 className="text-xl font-black text-white uppercase tracking-wider mb-3">
            AGENCY FILE INACCESSIBLE
          </h1>

          <p className="text-zinc-400 mb-6 text-sm leading-relaxed">
            Unable to retrieve the requested agency records. 
            The files may be classified, under review, or restricted.
          </p>

          {error.digest && (
            <div className="mb-6 p-2 bg-zinc-900/50 border border-zinc-800">
              <span className="text-xs text-zinc-600 font-mono">
                Reference: {error.digest}
              </span>
            </div>
          )}

          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <button
              onClick={reset}
              className="flex items-center gap-2 px-5 py-2.5 border border-blood-700 bg-blood-950/30 text-blood-500 text-sm font-bold uppercase tracking-wider hover:bg-blood-700 hover:text-white transition-all"
            >
              <RefreshCw className="w-4 h-4" />
              Retry Access
            </button>
            <Link
              href="/entities/agencies"
              className="flex items-center gap-2 px-5 py-2.5 border border-zinc-700 text-zinc-400 text-sm font-bold uppercase tracking-wider hover:border-zinc-600 hover:text-zinc-300 transition-all"
            >
              <ArrowLeft className="w-4 h-4" />
              All Agencies
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
