'use client';

import { useParams } from 'next/navigation';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowLeft, AlertTriangle, Users, Shield } from 'lucide-react';
import GlitchText from '@/components/effects/GlitchText';
import organizationData from '@/data/organizations';
import investigationDatabase from '@/data/investigations';

const riskColors: Record<string, string> = {
  critical: 'border-red-600 text-red-400 bg-red-950/30',
  high: 'border-red-700 text-red-400/80 bg-red-950/20',
  medium: 'border-red-800 text-red-400/60 bg-red-950/15',
  low: 'border-zinc-600 text-zinc-400 bg-zinc-900/30',
};

export default function OrganizationDetailPage() {
  const params = useParams();
  const slug = typeof params.slug === 'string' ? params.slug : '';
  const org = organizationData[slug];

  if (!org) {
    return (
      <div className="min-h-screen pt-20 lg:pt-24 pb-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center py-20">
          <AlertTriangle className="w-16 h-16 text-zinc-600 mx-auto mb-6" />
          <h1 className="text-3xl font-black text-white uppercase tracking-wider mb-4">Organization Not Found</h1>
          <p className="text-zinc-400 mb-8">The organization could not be located in the database.</p>
          <Link href="/entities/organizations" className="inline-flex items-center gap-2 px-6 py-3 bg-zinc-900 border border-zinc-700 text-zinc-300 hover:text-white hover:border-zinc-500 transition-all">
            <ArrowLeft className="w-4 h-4" />
            Back to Organizations
          </Link>
        </div>
      </div>
    );
  }

  const relatedInvestigations = Object.entries(investigationDatabase).filter(([, inv]) =>
    inv.affiliations?.some((a) => a.href === `/entities/organizations/${slug}`)
  );

  return (
    <div className="min-h-screen pt-20 lg:pt-24 pb-16">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <Link href="/entities/organizations" className="inline-flex items-center gap-2 text-zinc-400 hover:text-white transition-colors mb-6 pt-4">
          <ArrowLeft className="w-4 h-4" />
          Back to Organizations
        </Link>

        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="border-2 border-zinc-800/60 bg-[rgba(0,6,20,0.90)] p-6 lg:p-8 mb-8">
          <div className="flex items-center gap-3 mb-4">
            <Users className="w-6 h-6 text-zinc-400" />
            <span className={`px-3 py-1 text-xs font-bold uppercase border ${riskColors[org.riskLevel] || riskColors.medium}`}>
              {org.riskLevel} risk
            </span>
            <span className="px-3 py-1 text-xs font-bold uppercase border border-zinc-700 bg-zinc-900 text-zinc-400">
              {org.type}
            </span>
          </div>
          <h1 className="text-3xl lg:text-4xl font-black text-white uppercase tracking-wider mb-4">
            <GlitchText text={org.name} />
          </h1>
          <p className="text-zinc-400 leading-relaxed">{org.description}</p>
          {org.members && (
            <p className="text-zinc-500 text-sm mt-4">Members: {org.members}</p>
          )}
        </motion.div>

        {relatedInvestigations.length > 0 && (
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="glass-card p-6 mb-8">
            <h2 className="text-xl font-bold text-white uppercase tracking-wider mb-4 flex items-center gap-2">
              <Shield className="w-5 h-5 text-zinc-300" />
              Related Investigations ({relatedInvestigations.length})
            </h2>
            <div className="space-y-3">
              {relatedInvestigations.map(([invSlug, inv]) => (
                <Link key={invSlug} href={`/investigations/${invSlug}`} className="block p-4 bg-[#0a0a0a] border border-[rgba(255,255,255,0.15)] hover:border-zinc-600 transition-colors">
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="font-bold text-zinc-300">{inv.title}</h3>
                      <p className="text-xs text-zinc-500 mt-1">{inv.category}</p>
                    </div>
                    <span className={`px-2 py-1 text-[10px] font-bold uppercase border ${riskColors[inv.severity] || ''}`}>
                      {inv.severity}
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </div>
    </div>
  );
}
