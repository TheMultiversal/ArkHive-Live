'use client';

import AffiliationNetworkGraph from '@/components/AffiliationNetworkGraph';
import { Network, Users, Building2, Landmark, User, Link2 } from 'lucide-react';
import Link from 'next/link';

export default function NetworkPage() {
  return (
    <main className="min-h-screen bg-black pt-24 pb-16">
      <div className="max-w-6xl mx-auto px-4">
        {/* Header */}
        <div className="mb-12">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-12 h-12 bg-zinc-500/20 border border-zinc-600/50 flex items-center justify-center">
              <Network className="w-6 h-6 text-zinc-300" />
            </div>
            <div>
              <h1 className="text-3xl font-black text-white tracking-tighter">
                AFFILIATION NETWORK
              </h1>
              <p className="text-zinc-500 text-sm">
                Mapping power structures and hidden connections
              </p>
            </div>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mt-6">
            <Link 
              href="/entities/individuals"
              className="glass-card border border-blood-500/30 p-4 hover:border-blood-500/60 transition-colors"
            >
              <User className="w-5 h-5 text-blood-400 mb-2" />
              <div className="text-xs text-zinc-500">Explore</div>
              <div className="text-white font-semibold">Individuals</div>
            </Link>
            
            <Link 
              href="/entities/agencies"
              className="glass-card border border-emerald-500/30 p-4 hover:border-emerald-500/60 transition-colors"
            >
              <Landmark className="w-5 h-5 text-emerald-400 mb-2" />
              <div className="text-xs text-zinc-500">Explore</div>
              <div className="text-white font-semibold">Agencies</div>
            </Link>
            
            <Link 
              href="/entities/corporations"
              className="glass-card border border-orange-500/30 p-4 hover:border-orange-500/60 transition-colors"
            >
              <Building2 className="w-5 h-5 text-orange-400 mb-2" />
              <div className="text-xs text-zinc-500">Explore</div>
              <div className="text-white font-semibold">Corporations</div>
            </Link>
            
            <Link 
              href="/entities/organizations"
              className="glass-card border border-purple-500/30 p-4 hover:border-purple-500/60 transition-colors"
            >
              <Users className="w-5 h-5 text-purple-400 mb-2" />
              <div className="text-xs text-zinc-500">Explore</div>
              <div className="text-white font-semibold">Organizations</div>
            </Link>
          </div>
        </div>
        
        {/* Network Info */}
        <div className="glass-card border border-zinc-800/30 p-4 mb-8">
          <div className="flex items-start gap-3">
            <Link2 className="w-5 h-5 text-zinc-300 mt-0.5 shrink-0" />
            <div>
              <h3 className="text-white font-semibold mb-1">Understanding the Network</h3>
              <p className="text-sm text-zinc-400">
                This visualization maps all documented affiliations between individuals, agencies, corporations, 
                and organizations across our investigation database. Entities appearing in multiple investigations 
                may indicate systemic connections worth examining. Click any entity to see its full connection map.
              </p>
            </div>
          </div>
        </div>
        
        {/* Main Graph */}
        <AffiliationNetworkGraph />
      </div>
    </main>
  );
}
