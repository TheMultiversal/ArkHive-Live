'use client';

import { useParams, notFound } from 'next/navigation';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowLeft, User, AlertTriangle, ExternalLink, Shield, Scale, Skull, Users } from 'lucide-react';
import GlitchText from '@/components/effects/GlitchText';
import { categoryDatabase } from '@/data/categories';

const riskColors: Record<string, string> = {
  critical: 'text-blood-500 bg-blood-500/10 border-blood-500/30',
  high: 'text-blood-700 bg-blood-700/10 border-blood-700/30',
  medium: 'text-zinc-400 bg-zinc-400/10 border-zinc-400/30',
  low: 'text-zinc-500 bg-zinc-500/10 border-zinc-500/30',
};

const riskIcons: Record<string, typeof Skull> = {
  critical: Skull,
  high: AlertTriangle,
  medium: Shield,
  low: Shield,
};

export default function CategoryContent() {
  const { category } = useParams<{ category: string }>();
  const categoryData = categoryDatabase[category];

  if (!categoryData) {
    notFound();
  }

  const { name, description, individuals } = categoryData;

  // Group by risk level
  const criticalCount = individuals.filter(i => i.riskLevel === 'critical').length;
  const highCount = individuals.filter(i => i.riskLevel === 'high').length;
  const mediumCount = individuals.filter(i => i.riskLevel === 'medium').length;
  const lowCount = individuals.filter(i => i.riskLevel === 'low').length;

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Header */}
      <div className="border-b border-[rgba(80,180,255,0.15)]">
        <div className="max-w-7xl mx-auto px-6 py-8">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-zinc-400 hover:text-blood-500 transition-colors mb-6"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Home
          </Link>

          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
            <div>
              <div className="flex items-center gap-3 mb-3">
                <Scale className="w-8 h-8 text-blood-500" />
                <span className="px-3 py-1 text-xs font-bold uppercase border border-blood-500/30 bg-blood-500/10 text-blood-500">
                  Category Index
                </span>
              </div>
              <h1 className="text-4xl md:text-5xl font-black mb-3 tracking-tight">
                <GlitchText>{name}</GlitchText>
              </h1>
              <p className="text-zinc-400 max-w-2xl leading-relaxed">{description}</p>
            </div>

            <div className="flex gap-4">
              <div className="text-center">
                <p className="text-3xl font-black text-blood-500">{individuals.length}</p>
                <p className="text-xs text-zinc-500 uppercase tracking-wider">Individuals</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Stats Bar */}
      <div className="border-b border-[rgba(60,160,255,0.08)] bg-zinc-950/50">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="flex items-center gap-2">
              <Skull className="w-4 h-4 text-blood-500" />
              <span className="text-sm text-zinc-400">
                <span className="font-bold text-blood-500">{criticalCount}</span> Critical Risk
              </span>
            </div>
            <div className="flex items-center gap-2">
              <AlertTriangle className="w-4 h-4 text-blood-700" />
              <span className="text-sm text-zinc-400">
                <span className="font-bold text-blood-700">{highCount}</span> High Risk
              </span>
            </div>
            <div className="flex items-center gap-2">
              <Shield className="w-4 h-4 text-zinc-400" />
              <span className="text-sm text-zinc-400">
                <span className="font-bold text-zinc-300">{mediumCount}</span> Medium Risk
              </span>
            </div>
            <div className="flex items-center gap-2">
              <Shield className="w-4 h-4 text-zinc-600" />
              <span className="text-sm text-zinc-400">
                <span className="font-bold text-zinc-500">{lowCount}</span> Low Risk
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Individual Grid */}
      <div className="max-w-7xl mx-auto px-6 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {individuals.map((person, index) => {
            const RiskIcon = riskIcons[person.riskLevel] || Shield;
            return (
              <motion.div
                key={person.slug}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: Math.min(index * 0.02, 0.5) }}
              >
                <Link
                  href={`/entities/individuals/${person.slug}`}
                  className={`block p-4 border bg-zinc-950/50 hover:bg-[rgba(0,10,28,0.82)] transition-all group ${
                    person.riskLevel === 'critical'
                      ? 'border-blood-500/20 hover:border-blood-500/50'
                      : person.riskLevel === 'high'
                      ? 'border-blood-700/20 hover:border-blood-700/50'
                      : 'border-[rgba(80,180,255,0.15)] hover:border-zinc-600'
                  }`}
                >
                  <div className="flex items-start justify-between gap-3">
                    <div className="flex items-start gap-3 flex-1 min-w-0">
                      <div className="w-10 h-10 bg-[rgba(0,10,28,0.85)] flex items-center justify-center flex-shrink-0">
                        <User className="w-5 h-5 text-zinc-600 group-hover:text-blood-500 transition-colors" />
                      </div>
                      <div className="min-w-0">
                        <h3 className="font-bold glass-text group-hover:text-blood-400 transition-colors truncate">
                          {person.name}
                        </h3>
                        <p className="text-xs text-zinc-500 truncate mt-0.5">{person.title}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-1.5 flex-shrink-0">
                      <span className={`px-2 py-0.5 text-[10px] font-bold uppercase border ${riskColors[person.riskLevel]}`}>
                        <RiskIcon className="w-3 h-3 inline mr-1" />
                        {person.riskLevel}
                      </span>
                    </div>
                  </div>
                </Link>
              </motion.div>
            );
          })}
        </div>

        {individuals.length === 0 && (
          <div className="text-center py-16">
            <Users className="w-12 h-12 text-zinc-700 mx-auto mb-4" />
            <p className="text-zinc-500">No individuals currently documented in this category.</p>
          </div>
        )}
      </div>

      {/* Related Categories Footer */}
      <div className="border-t border-[rgba(80,180,255,0.15)]">
        <div className="max-w-7xl mx-auto px-6 py-8">
          <h2 className="text-lg font-bold glass-text uppercase tracking-wider mb-4">Other Categories</h2>
          <div className="flex flex-wrap gap-2">
            {Object.entries(categoryDatabase)
              .filter(([slug]) => slug !== category)
              .map(([slug, cat]) => (
                <Link
                  key={slug}
                  href={`/categories/${slug}`}
                  className="px-3 py-1.5 text-xs border border-[rgba(80,180,255,0.15)] text-zinc-400 hover:border-blood-500/50 hover:text-blood-500 transition-colors"
                >
                  {cat.name}
                  <span className="ml-1.5 text-zinc-600">({cat.individuals.length})</span>
                </Link>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
}
