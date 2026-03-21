'use client';

import ConvictionTracker from '@/components/ConvictionTracker';
import { Scale, AlertTriangle, User, Shield, Gavel, Award } from 'lucide-react';
import Link from 'next/link';

export default function ConvictionsPage() {
  return (
    <main className="min-h-screen bg-black pt-24 pb-16">
      <div className="max-w-6xl mx-auto px-4">
        {/* Header */}
        <div className="mb-12">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-12 h-12 bg-zinc-500/20 border border-zinc-600/50 flex items-center justify-center">
              <Scale className="w-6 h-6 text-zinc-300" />
            </div>
            <div>
              <h1 className="text-3xl font-black text-white tracking-tighter">
                CONVICTION TRACKER
              </h1>
              <p className="text-zinc-500 text-sm">
                Tracking accountability across investigations
              </p>
            </div>
          </div>
          
          {/* Legend */}
          <div className="glass-card border border-zinc-800 p-4 mt-6">
            <h3 className="text-sm font-semibold text-zinc-400 mb-3">Status Legend</h3>
            <div className="grid grid-cols-2 md:grid-cols-5 gap-3 text-xs">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-red-500"></div>
                <span className="text-zinc-400">Convicted</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-orange-500"></div>
                <span className="text-zinc-400">Indicted</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-yellow-500"></div>
                <span className="text-zinc-400">Charged</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-purple-500"></div>
                <span className="text-zinc-400">Pardoned</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-zinc-500"></div>
                <span className="text-zinc-400">Pending</span>
              </div>
            </div>
          </div>
        </div>
        
        {/* Important Notice */}
        <div className="glass-card border border-yellow-900/30 p-4 mb-8">
          <div className="flex items-start gap-3">
            <AlertTriangle className="w-5 h-5 text-yellow-500 mt-0.5 shrink-0" />
            <div>
              <h3 className="text-white font-semibold mb-1">About This Data</h3>
              <p className="text-sm text-zinc-400">
                This tracker aggregates conviction data from documented investigations. Information is compiled 
                from court records, news reports, and official government documents. Status may change as cases 
                progress through the legal system. Pardons are tracked as a separate status from convictions.
              </p>
            </div>
          </div>
        </div>
        
        {/* Main Tracker */}
        <ConvictionTracker />
        
        {/* Footer info */}
        <div className="mt-12 pt-8 border-t border-zinc-900">
          <div className="grid md:grid-cols-3 gap-6 text-sm text-zinc-500">
            <div>
              <h4 className="text-white font-semibold mb-2 flex items-center gap-2">
                <Gavel className="w-4 h-4 text-zinc-300" />
                Federal Convictions
              </h4>
              <p>
                Tracked convictions include federal charges prosecuted by 
                the Department of Justice across multiple investigations.
              </p>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-2 flex items-center gap-2">
                <Shield className="w-4 h-4 text-zinc-300" />
                State Cases
              </h4>
              <p>
                State-level prosecutions, including those by state attorneys general 
                and local district attorneys, are tracked separately.
              </p>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-2 flex items-center gap-2">
                <Award className="w-4 h-4 text-purple-500" />
                Presidential Pardons
              </h4>
              <p>
                Pardons are tracked and documented, including the date 
                of pardon and who issued it.
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
