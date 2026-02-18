'use client';

import { Skull, AlertTriangle, ArrowLeft, Home } from "lucide-react";
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen pt-20 lg:pt-24 pb-16 flex items-center justify-center">
      <div className="max-w-lg mx-auto px-4 text-center">
        <div className="border-2 border-blood-800/60 bg-black/80 p-12">
          {/* Icon */}
          <div className="w-24 h-24 mx-auto mb-8 border-2 border-blood-700 bg-blood-950/30 flex items-center justify-center">
            <Skull className="w-12 h-12 text-blood-600" />
          </div>

          {/* Error Code */}
          <div className="mb-6">
            <span className="text-8xl font-black text-blood-700">404</span>
          </div>

          {/* Message */}
          <h1 className="text-2xl font-black text-white uppercase tracking-wider mb-4">
            FILE NOT FOUND
          </h1>
          
          <p className="text-zinc-400 mb-8 leading-relaxed">
            This document has been <span className="text-blood-600 font-bold">redacted</span>, 
            moved to a classified location, or never existed in the first place.
          </p>

          {/* Warning */}
          <div className="flex items-center justify-center gap-2 text-zinc-600 text-sm mb-8">
            <AlertTriangle className="w-4 h-4" />
            <span>Your access attempt has been logged.</span>
          </div>

          {/* Actions */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/"
              className="flex items-center gap-2 px-6 py-3 border-2 border-blood-700 bg-blood-950/30 text-blood-600 font-bold uppercase tracking-wider hover:bg-blood-700 hover:text-white transition-all"
            >
              <Home className="w-5 h-5" />
              Return Home
            </Link>
            <button
              onClick={() => window.history.back()}
              className="flex items-center gap-2 px-6 py-3 border-2 border-zinc-700 text-zinc-400 font-bold uppercase tracking-wider hover:border-zinc-600 hover:text-zinc-300 transition-all"
            >
              <ArrowLeft className="w-5 h-5" />
              Go Back
            </button>
          </div>
        </div>

        {/* Decorative */}
        <div className="mt-8 text-xs text-zinc-700 uppercase tracking-widest">
          Error Code: FILE_REDACTED_OR_MISSING
        </div>
      </div>
    </div>
  );
}
