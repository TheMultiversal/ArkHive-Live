'use client';

import { useEffect } from 'react';
import { Scale, ArrowLeft, BookOpen } from 'lucide-react';
import Link from 'next/link';
import StatuteCrossReference from '@/components/StatuteCrossReference';

export default function StatutesPage() {
  // Handle anchor navigation for direct statute links
  useEffect(() => {
    const hash = window.location.hash;
    if (hash) {
      const element = document.getElementById(decodeURIComponent(hash.slice(1)));
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }
  }, []);

  return (
    <main className="min-h-screen bg-black">
      {/* Header */}
      <div className="border-b border-zinc-800/30 bg-black/80 backdrop-blur-none sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <Link 
            href="/"
            className="inline-flex items-center gap-2 text-zinc-400 hover:text-white transition-colors mb-4"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Investigations
          </Link>
          
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-zinc-800/30 border border-zinc-600/50 flex items-center justify-center">
              <Scale className="w-6 h-6 text-zinc-300" />
            </div>
            <div>
              <h1 className="text-2xl md:text-3xl font-bold text-white">
                Federal Statute Reference
              </h1>
              <p className="text-zinc-400 mt-1">
                Cross-referenced legal codes cited across ArkHive investigations
              </p>
            </div>
          </div>
        </div>
      </div>
      
      {/* Info Banner */}
      <div className="max-w-7xl mx-auto px-4 py-6">
        <div className="glass-card border border-zinc-800 p-4 flex items-start gap-4">
          <BookOpen className="w-5 h-5 text-zinc-500 shrink-0 mt-0.5" />
          <div className="text-sm text-zinc-400">
            <p>
              This reference database catalogues federal statutes commonly cited in accountability investigations.
              Click any statute to see which investigations reference it, enabling cross-case analysis of systemic violations.
            </p>
            <p className="mt-2 text-zinc-500">
              Statutes are automatically linked when added to investigation records.
              Use the search and filters below to find specific legal codes.
            </p>
          </div>
        </div>
      </div>
      
      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 pb-12">
        <StatuteCrossReference />
      </div>
    </main>
  );
}
