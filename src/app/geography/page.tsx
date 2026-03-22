'use client';

import GeographicMap from '@/components/GeographicMap';
import { Globe, MapPin, Building2, AlertTriangle } from 'lucide-react';
import Link from 'next/link';

export default function GeographyPage() {
  return (
    <main className="min-h-screen bg-black pt-24 pb-16">
      <div className="max-w-6xl mx-auto px-4">
        {/* Header */}
        <div className="mb-12">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-12 h-12 bg-zinc-500/20 border border-zinc-600/50 flex items-center justify-center">
              <Globe className="w-6 h-6 text-zinc-300" />
            </div>
            <div>
              <h1 className="text-3xl font-black text-white tracking-tighter">
                GEOGRAPHIC DISTRIBUTION
              </h1>
              <p className="text-zinc-500 text-sm">
                Where power concentrates and corruption flows
              </p>
            </div>
          </div>
        </div>
        
        {/* Context */}
        <div className="glass-card border border-zinc-800 p-4 mb-8">
          <div className="flex items-start gap-3">
            <MapPin className="w-5 h-5 text-zinc-500 mt-0.5 shrink-0" />
            <div>
              <h3 className="text-white font-semibold mb-1">Understanding the Geography of Accountability</h3>
              <p className="text-sm text-zinc-400">
                This visualization maps the geographic distribution of entities involved in our investigations.
                Washington D.C. features prominently as the center of federal power, while international 
                connections highlight the global nature of many accountability failures. Click on any region 
                to explore the entities based there.
              </p>
            </div>
          </div>
        </div>
        
        {/* Main Map */}
        <GeographicMap />
        
        {/* Quick Links */}
        <div className="mt-12 pt-8 border-t border-zinc-900">
          <h2 className="text-sm font-semibold text-zinc-500 mb-4">EXPLORE BY ENTITY TYPE</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            <Link 
              href="/entities/agencies"
              className="glass-card border border-emerald-900/30 p-4 hover:border-emerald-500/50 transition-colors"
            >
              <Building2 className="w-5 h-5 text-emerald-400 mb-2" />
              <div className="text-white font-medium">Agencies</div>
              <div className="text-xs text-zinc-500">Government bodies</div>
            </Link>
            
            <Link 
              href="/entities/corporations"
              className="glass-card border border-orange-900/30 p-4 hover:border-orange-500/50 transition-colors"
            >
              <Building2 className="w-5 h-5 text-orange-400 mb-2" />
              <div className="text-white font-medium">Corporations</div>
              <div className="text-xs text-zinc-500">Private sector</div>
            </Link>
            
            <Link 
              href="/entities/individuals"
              className="glass-card border border-blood-900/30 p-4 hover:border-blood-500/50 transition-colors"
            >
              <Building2 className="w-5 h-5 text-blood-400 mb-2" />
              <div className="text-white font-medium">Individuals</div>
              <div className="text-xs text-zinc-500">Key figures</div>
            </Link>
            
            <Link 
              href="/network"
              className="glass-card border border-purple-900/30 p-4 hover:border-purple-500/50 transition-colors"
            >
              <Building2 className="w-5 h-5 text-purple-400 mb-2" />
              <div className="text-white font-medium">Network</div>
              <div className="text-xs text-zinc-500">Connections</div>
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
