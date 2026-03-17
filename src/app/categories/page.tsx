'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowLeft, Scale, Users, Skull, AlertTriangle, Shield } from 'lucide-react';
import GlitchText from '@/components/effects/GlitchText';
import { categoryDatabase } from '@/data/categories';

const tierConfig: Record<string, { label: string; color: string; categories: string[] }> = {
  'documented-crimes': {
    label: 'Documented, Court Records & Indictments',
    color: 'blood-600',
    categories: ['sexual-assault', 'election-interference', 'financial-fraud', 'human-trafficking', 'seditious-conspiracy', 'obstruction-of-justice', 'tax-evasion', 'money-laundering', 'bribery-corruption', 'campaign-finance', 'racketeering', 'perjury', 'wire-fraud', 'securities-fraud'],
  },
  'state-crimes': {
    label: 'War Crimes, State Violence & Systemic Abuse',
    color: 'zinc-400',
    categories: ['war-crimes', 'civil-rights-violations', 'government-surveillance', 'corporate-homicide', 'environmental-crimes'],
  },
};

export default function CategoriesIndexPage() {
  return (
    <div className="min-h-screen bg-black text-white">
      <div className="border-b border-[rgba(255, 80, 80,0.15)]">
        <div className="max-w-7xl mx-auto px-6 py-8">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-zinc-400 hover:text-blood-500 transition-colors mb-6"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Home
          </Link>

          <div className="flex items-center gap-3 mb-3">
            <Scale className="w-8 h-8 text-blood-500" />
          </div>
          <h1 className="text-4xl md:text-5xl font-black mb-3 tracking-tight">
            <GlitchText>Crime Categories</GlitchText>
          </h1>
          <p className="text-zinc-400 max-w-2xl leading-relaxed">
            Browse documented crimes and corruption by category. Each category lists all individuals with documented connections to that type of crime.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-8 space-y-12">
        {Object.entries(tierConfig).map(([tierKey, tier]) => (
          <div key={tierKey}>
            <div className="flex items-center gap-2 mb-4">
              <span className={`w-3 h-3 bg-${tier.color}`} />
              <h2 className={`text-sm text-${tier.color} font-bold uppercase tracking-wider`}>{tier.label}</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {tier.categories.map((catSlug, index) => {
                const cat = categoryDatabase[catSlug];
                if (!cat) return null;
                const critCount = cat.individuals.filter(i => i.riskLevel === 'critical').length;
                return (
                  <motion.div
                    key={catSlug}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.05 }}
                  >
                    <Link
                      href={`/categories/${catSlug}`}
                      className="block p-5 border border-[rgba(255, 80, 80,0.15)] bg-zinc-950 hover:border-blood-800 hover:bg-zinc-900 transition-all group"
                    >
                      <h3 className="text-lg font-bold glass-text group-hover:text-blood-400 transition-colors mb-1">
                        {cat.name}
                      </h3>
                      <p className="text-xs text-zinc-500 mb-3 line-clamp-2">{cat.description}</p>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <span className="flex items-center gap-1 text-xs text-zinc-400">
                            <Users className="w-3.5 h-3.5" />
                            <span className="font-bold glass-text">{cat.individuals.length}</span> individuals
                          </span>
                          {critCount > 0 && (
                            <span className="flex items-center gap-1 text-xs text-blood-500">
                              <Skull className="w-3.5 h-3.5" />
                              {critCount} critical
                            </span>
                          )}
                        </div>
                        <span className="text-blood-600 text-[10px] font-black uppercase tracking-widest group-hover:text-blood-400">
                          View All →
                        </span>
                      </div>
                    </Link>
                  </motion.div>
                );
              })}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
