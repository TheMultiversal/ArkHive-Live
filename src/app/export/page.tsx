'use client';

import React from 'react';
import { Download } from 'lucide-react';
import { DataExporter } from '@/components/DataExporter';

export default function ExportPage() {
  return (
    <main className="min-h-screen bg-black text-white pt-24 pb-16">
      <div className="max-w-5xl mx-auto px-4">
        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center gap-3 mb-2">
            <Download className="w-8 h-8 text-blood-500" />
            <h1 className="text-4xl font-bold tracking-tight">Data Export</h1>
          </div>
          <p className="text-zinc-400 max-w-2xl">
            Export investigation data in JSON, CSV, or Markdown format. Select specific 
            investigations or export filtered results. Choose which data fields to include 
            in your export.
          </p>
        </div>

        {/* Main Exporter */}
        <DataExporter />
      </div>
    </main>
  );
}
