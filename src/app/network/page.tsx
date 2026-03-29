'use client';

import AffiliationNetworkGraph from '@/components/AffiliationNetworkGraph';
import { KeyFiguresDashboard } from '@/components/KeyFiguresDashboard';
import { Network, Users, Building2, Landmark, User, Link2, UserCheck } from 'lucide-react';
import Link from 'next/link';

export default function NetworkPage() {
  return (
    <main className="min-h-screen bg-black pt-24 pb-16">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-12 h-12 bg-red-500/[0.06] border border-red-500/20 flex items-center justify-center">
              <Network className="w-6 h-6 text-red-400" />
            </div>
            <div>
              <h1 className="text-3xl font-black text-white tracking-tighter uppercase">
                Master Network
              </h1>
              <p className="text-zinc-500 text-sm">
                Every connection. Every entity. Every investigation. Searchable and mapped.
              </p>
            </div>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mt-6">
            <Link 
              href="/entities/individuals"
              className="glass-card p-4 hover:border-red-500/40 transition-colors"
            >
              <User className="w-5 h-5 text-red-400 mb-2" />
              <div className="text-xs text-zinc-500">Explore</div>
              <div className="text-white font-semibold">Individuals</div>
            </Link>
            
            <Link 
              href="/entities/agencies"
              className="glass-card p-4 hover:border-red-500/40 transition-colors"
            >
              <Landmark className="w-5 h-5 text-red-400 mb-2" />
              <div className="text-xs text-zinc-500">Explore</div>
              <div className="text-white font-semibold">Agencies</div>
            </Link>
            
            <Link 
              href="/entities/corporations"
              className="glass-card p-4 hover:border-red-500/40 transition-colors"
            >
              <Building2 className="w-5 h-5 text-red-400 mb-2" />
              <div className="text-xs text-zinc-500">Explore</div>
              <div className="text-white font-semibold">Corporations</div>
            </Link>
            
            <Link 
              href="/entities/organizations"
              className="glass-card p-4 hover:border-red-500/40 transition-colors"
            >
              <Users className="w-5 h-5 text-red-400 mb-2" />
              <div className="text-xs text-zinc-500">Explore</div>
              <div className="text-white font-semibold">Organizations</div>
            </Link>
          </div>
        </div>
        
        {/* Network Info */}
        <div className="glass-card p-4 mb-8">
          <div className="flex items-start gap-3">
            <Link2 className="w-5 h-5 text-red-400 mt-0.5 shrink-0" />
            <div>
              <h3 className="text-white font-semibold mb-1">Understanding the Network</h3>
              <p className="text-sm text-zinc-400">
                This visualization maps all documented affiliations between individuals, agencies, corporations, 
                and organizations across every investigation in the archive. Entities appearing in multiple investigations 
                indicate systemic connections. Search for any name, organization, or keyword. Click any entity to see its full profile and connection map.
              </p>
            </div>
          </div>
        </div>
        
        {/* Affiliation Network Graph */}
        <AffiliationNetworkGraph />

        {/* Key Figures — aggregated from all investigation defendants */}
        <div className="mt-12">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 bg-red-500/[0.06] border border-red-500/20 flex items-center justify-center">
              <UserCheck className="w-5 h-5 text-red-400" />
            </div>
            <div>
              <h2 className="text-2xl font-black text-white tracking-tighter uppercase">Key Figures</h2>
              <p className="text-zinc-500 text-sm">
                Individuals tracked across multiple investigations, ranked by risk score.
              </p>
            </div>
          </div>
          <KeyFiguresDashboard />
        </div>
      </div>
    </main>
  );
}
