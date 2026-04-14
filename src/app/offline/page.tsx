'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { Download, Bell, Database, Smartphone, ArrowRight, Construction } from 'lucide-react';

export default function OfflinePage() {
  const features = [
    {
      icon: Database,
      title: 'Full Investigation Archive',
      description: 'Download every investigation, timeline, money trail, and defendant record for offline reading. All data stored locally on your device.',
    },
    {
      icon: Smartphone,
      title: 'Progressive Web App',
      description: 'Install ArkHive as a native app on your phone or tablet. Access cached investigations, search, and browse without an internet connection.',
    },
    {
      icon: Download,
      title: 'Downloadable Dossier PDFs',
      description: 'Generate and save PDF dossiers for any investigation. Each PDF includes the full narrative, defendants, money trail, statutes, and accountability actions.',
    },
    {
      icon: Bell,
      title: 'Background Sync',
      description: 'When you reconnect, ArkHive will automatically sync new investigations, updated evidence, and fresh accountability data in the background.',
    },
  ];

  return (
    <div className="min-h-screen pt-20 lg:pt-24 pb-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="border-2 border-zinc-800/60 bg-[#080808] p-8 lg:p-12 mb-8 rounded-xl">
          <div className="flex items-center gap-3 mb-4">
            <Construction className="w-5 h-5 text-amber-500" />
            <span className="text-xs font-mono text-amber-500/80 uppercase tracking-widest">Coming Soon</span>
          </div>
          <h1 className="text-3xl lg:text-4xl font-black text-zinc-100 glass-text uppercase tracking-wider">
            Offline Access
          </h1>
          <p className="text-zinc-400 mt-4 leading-relaxed max-w-2xl">
            We are building a fully offline-capable version of ArkHive so you can access every investigation,
            every document, and every accountability tool without an internet connection. Truth should never
            depend on a Wi-Fi signal.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
          {features.map((feature, i) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className="border border-zinc-800/60 bg-[#080808] p-6 rounded-xl"
              >
                <div className="p-3 border border-zinc-800 bg-zinc-900/50 text-zinc-400 w-fit rounded-lg mb-4">
                  <Icon className="w-5 h-5" />
                </div>
                <h3 className="text-zinc-200 font-semibold text-sm mb-2">{feature.title}</h3>
                <p className="text-zinc-500 text-sm leading-relaxed">{feature.description}</p>
              </motion.div>
            );
          })}
        </div>

        {/* Current Options */}
        <div className="border border-zinc-800/60 bg-[#080808] p-8 rounded-xl mb-8">
          <h2 className="text-lg font-bold text-zinc-200 uppercase tracking-wider mb-4">
            Available Now
          </h2>
          <p className="text-zinc-400 text-sm leading-relaxed mb-6">
            While the full offline mode is under development, you can already download investigation
            dossiers as PDFs from any investigation page. Look for the &quot;Download PDF Dossier&quot;
            button on any investigation.
          </p>
          <Link
            href="/investigations"
            className="inline-flex items-center gap-2 px-5 py-2.5 border border-blood-500/40 bg-blood-500/10 text-blood-400 text-sm font-medium hover:bg-blood-500/20 transition-colors rounded-lg"
          >
            Browse Investigations
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        {/* Notify Section */}
        <div className="border border-amber-900/30 bg-amber-950/10 p-6 rounded-xl text-center">
          <h3 className="text-sm font-bold text-amber-300/80 uppercase tracking-wider mb-2">
            Stay Informed
          </h3>
          <p className="text-zinc-500 text-sm max-w-lg mx-auto">
            Offline access is actively in development. Check back for updates, or follow our progress
            on the platform. When it launches, you will have the entire ArkHive database at your fingertips,
            regardless of connectivity.
          </p>
        </div>
      </div>
    </div>
  );
}
