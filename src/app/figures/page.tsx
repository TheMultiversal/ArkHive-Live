'use client';

import React from 'react';
import { Users } from 'lucide-react';
import { KeyFiguresDashboard } from '@/components/KeyFiguresDashboard';

export default function FiguresPage() {
  return (
    <main className="min-h-screen bg-black text-white pt-24 pb-16">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center gap-3 mb-2">
            <Users className="w-8 h-8 text-zinc-300" />
            <h1 className="text-4xl font-bold tracking-tight">Key Figures</h1>
          </div>
          <p className="text-zinc-400 max-w-2xl">
            Prominent individuals tracked across multiple investigations. Risk scores are 
            calculated based on investigation severity, charges, convictions, and overall 
            involvement. Click any figure to see their full profile.
          </p>
        </div>

        {/* Main Dashboard */}
        <KeyFiguresDashboard />
      </div>
    </main>
  );
}
