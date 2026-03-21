'use client';

import React from 'react';
import { Layers } from 'lucide-react';
import { ThemeClusterBrowser, ThemeDistributionChart } from '@/components/ThemeClusterBrowser';

export default function ThemesPage() {
  return (
    <main className="min-h-screen bg-black text-white pt-24 pb-16">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center gap-3 mb-2">
            <Layers className="w-8 h-8 text-zinc-300" />
            <h1 className="text-4xl font-bold tracking-tight">Theme Clusters</h1>
          </div>
          <p className="text-zinc-400 max-w-2xl">
            Investigations grouped by thematic areas. Each investigation may appear in multiple 
            themes based on keyword analysis. Click a theme to explore related investigations.
          </p>
        </div>

        {/* Distribution Chart */}
        <div className="mb-8">
          <ThemeDistributionChart />
        </div>

        {/* Main Browser */}
        <ThemeClusterBrowser />
      </div>
    </main>
  );
}
