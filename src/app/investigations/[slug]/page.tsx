'use client';

import { useParams } from 'next/navigation';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowLeft, AlertTriangle, Users, Calendar, FileText, ExternalLink, Scale, ShieldAlert, DollarSign, Building2 } from 'lucide-react';
import GlitchText from '@/components/effects/GlitchText';
import investigationDatabase from '@/data/investigations';

const severityColors: Record<string, string> = {
  critical: 'border-red-600 text-red-400',
  high: 'border-orange-600 text-orange-400',
  medium: 'border-yellow-600 text-yellow-400',
  low: 'border-zinc-600 text-zinc-400',
};

const severityBg: Record<string, string> = {
  critical: 'bg-red-950/30',
  high: 'bg-orange-950/30',
  medium: 'bg-yellow-950/30',
  low: 'bg-zinc-900/30',
};

export default function InvestigationPage() {
  const params = useParams();
  const slug = typeof params.slug === 'string' ? params.slug : '';
  const investigation = investigationDatabase[slug];

  if (!investigation) {
    return (
      <div className="min-h-screen pt-20 lg:pt-24 pb-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center py-20">
          <AlertTriangle className="w-16 h-16 text-zinc-600 mx-auto mb-6" />
          <h1 className="text-3xl font-black text-white uppercase tracking-wider mb-4">Investigation Not Found</h1>
          <p className="text-zinc-400 mb-8">The investigation &ldquo;{slug}&rdquo; could not be located in the database.</p>
          <Link href="/investigations" className="inline-flex items-center gap-2 px-6 py-3 bg-zinc-900 border border-zinc-700 text-zinc-300 hover:text-white hover:border-zinc-500 transition-all">
            <ArrowLeft className="w-4 h-4" />
            Back to Investigations
          </Link>
        </div>
      </div>
    );
  }

  const sev = investigation.severity || 'medium';

  return (
    <div className="min-h-screen pt-20 lg:pt-24 pb-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Back Link */}
        <Link href="/investigations" className="inline-flex items-center gap-2 text-zinc-400 hover:text-white transition-colors mb-6 pt-4">
          <ArrowLeft className="w-4 h-4" />
          Back to Investigations
        </Link>

        {/* Header */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="border-2 border-zinc-800/60 bg-[rgba(0,6,20,0.90)] p-6 lg:p-8 mb-8">
          <div className="flex flex-wrap items-center gap-3 mb-4">
            <span className={`px-3 py-1 text-xs font-bold uppercase border ${severityColors[sev]} ${severityBg[sev]}`}>
              {sev}
            </span>
            <span className="px-3 py-1 text-xs font-bold uppercase border border-zinc-700 bg-zinc-900 text-zinc-400">
              {investigation.category}
            </span>
            {investigation.date && (
              <span className="text-xs text-zinc-500 font-mono">{investigation.date}</span>
            )}
          </div>
          <h1 className="text-3xl lg:text-4xl font-black text-white uppercase tracking-wider mb-2">
            <GlitchText text={investigation.title} />
          </h1>
          {investigation.subtitle && (
            <p className="text-lg text-zinc-300 font-bold mb-4">{investigation.subtitle}</p>
          )}
          <p className="text-zinc-400 leading-relaxed">{investigation.summary}</p>
        </motion.div>

        {/* Main Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column - Main Content */}
          <div className="lg:col-span-2 space-y-8">

            {/* Content Sections */}
            {investigation.content && investigation.content.length > 0 && (
              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="glass-card p-6">
                <h2 className="text-xl font-bold text-white uppercase tracking-wider mb-4 flex items-center gap-2">
                  <FileText className="w-5 h-5 text-zinc-300" />
                  Investigation Details
                </h2>
                <div className="space-y-4">
                  {investigation.content.map((paragraph, idx) => (
                    <p key={idx} className="text-sm text-zinc-300 leading-relaxed">{paragraph}</p>
                  ))}
                </div>
              </motion.div>
            )}

            {/* Money Trail */}
            {investigation.moneyTrail && investigation.moneyTrail.length > 0 && (
              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="glass-card p-6">
                <h2 className="text-xl font-bold text-white uppercase tracking-wider mb-4 flex items-center gap-2">
                  <DollarSign className="w-5 h-5 text-zinc-300" />
                  Money Trail
                </h2>
                <div className="space-y-3">
                  {investigation.moneyTrail.map((item, idx) => (
                    <div key={idx} className="p-4 bg-[#0a0a0a] border border-[rgba(255,255,255,0.15)]">
                      <div className="flex justify-between items-start mb-2">
                        <span className="font-mono text-zinc-400 text-xs">{item.date}</span>
                        <span className="text-zinc-300 font-bold text-sm">{item.amount}</span>
                      </div>
                      <div className="text-sm">
                        <span className="text-zinc-500">From: </span>
                        <span className="text-white">{item.from}</span>
                      </div>
                      <div className="text-sm">
                        <span className="text-zinc-500">To: </span>
                        <span className="text-white">{item.to}</span>
                      </div>
                      <p className="text-xs text-zinc-400 mt-2">{item.purpose}</p>
                      {!item.documented && (
                        <span className="inline-block mt-1 text-[10px] text-yellow-600 uppercase font-bold">Unverified</span>
                      )}
                    </div>
                  ))}
                </div>
              </motion.div>
            )}

            {/* Affiliations / Connected Entities */}
            {investigation.affiliations && investigation.affiliations.length > 0 && (
              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }} className="glass-card p-6">
                <h2 className="text-xl font-bold text-white uppercase tracking-wider mb-4 flex items-center gap-2">
                  <Users className="w-5 h-5 text-zinc-300" />
                  Connected Entities
                </h2>
                <div className="space-y-3">
                  {investigation.affiliations.map((aff, idx) => (
                    <div key={idx} className="flex items-start justify-between p-3 bg-[#0a0a0a] border border-[rgba(255,255,255,0.15)]">
                      <div className="flex-1">
                        {aff.href ? (
                          <Link href={aff.href} className="font-bold text-zinc-300 hover:text-white transition-colors">
                            {aff.name}
                          </Link>
                        ) : (
                          <span className="font-bold text-zinc-300">{aff.name}</span>
                        )}
                        <p className="text-sm text-zinc-500 mt-1">{aff.relationship}</p>
                      </div>
                      <span className="text-[10px] px-2 py-1 bg-[#0d0d0d] text-zinc-500 border border-[rgba(255,255,255,0.12)] whitespace-nowrap ml-2 uppercase">
                        {aff.type}
                      </span>
                    </div>
                  ))}
                </div>
              </motion.div>
            )}
          </div>

          {/* Right Column - Sidebar */}
          <div className="space-y-6">

            {/* Timeline */}
            {investigation.timeline && investigation.timeline.length > 0 && (
              <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} className="glass-card p-6">
                <h3 className="text-lg font-bold text-white uppercase tracking-wider mb-4 flex items-center gap-2">
                  <Calendar className="w-4 h-4 text-zinc-300" />
                  Timeline
                </h3>
                <div className="space-y-4">
                  {investigation.timeline.map((item, idx) => {
                    const typeColors: Record<string, string> = {
                      critical: 'border-red-600',
                      legal: 'border-blue-600',
                      political: 'border-purple-600',
                      financial: 'border-yellow-600',
                      default: 'border-zinc-600',
                    };
                    const borderColor = typeColors[item.type || 'default'] || typeColors.default;
                    return (
                      <div key={idx} className={`relative pl-4 border-l-2 ${borderColor}`}>
                        <div className="absolute -left-[5px] top-0 w-2 h-2 bg-zinc-600" />
                        <p className="text-xs text-zinc-400 font-mono">{item.date}</p>
                        <p className="text-sm text-zinc-300">{item.event}</p>
                      </div>
                    );
                  })}
                </div>
              </motion.div>
            )}

            {/* Sources */}
            {investigation.sources && investigation.sources.length > 0 && (
              <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.1 }} className="glass-card p-6">
                <h3 className="text-lg font-bold text-white uppercase tracking-wider mb-4 flex items-center gap-2">
                  <ExternalLink className="w-4 h-4 text-zinc-300" />
                  Sources & Documentation
                </h3>
                <div className="space-y-2">
                  {investigation.sources.map((source, idx) => (
                    <a
                      key={idx}
                      href={source.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-start gap-2 p-2 text-sm text-zinc-400 hover:text-white hover:bg-[#0a0a0a] transition-colors"
                    >
                      <ExternalLink className="w-4 h-4 mt-0.5 flex-shrink-0" />
                      <div>
                        <span>{source.title}</span>
                        <span className="text-zinc-600 ml-2 text-xs">({source.type})</span>
                      </div>
                    </a>
                  ))}
                </div>
              </motion.div>
            )}

            {/* Tags */}
            {investigation.tags && investigation.tags.length > 0 && (
              <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.2 }} className="glass-card p-6">
                <h3 className="text-lg font-bold text-white uppercase tracking-wider mb-4">Tags</h3>
                <div className="flex flex-wrap gap-2">
                  {investigation.tags.map((tag, idx) => (
                    <Link
                      key={idx}
                      href={`/investigations?tag=${encodeURIComponent(tag)}`}
                      className="px-3 py-1 text-xs font-semibold uppercase tracking-wider bg-zinc-900 border border-zinc-800 text-zinc-400 hover:text-white hover:border-zinc-600 transition-all"
                    >
                      {tag}
                    </Link>
                  ))}
                </div>
              </motion.div>
            )}

            {/* Metadata */}
            <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.3 }} className="glass-card p-6">
              <h3 className="text-lg font-bold text-white uppercase tracking-wider mb-4">Investigation Info</h3>
              <div className="space-y-2 text-sm">
                {investigation.date && (
                  <div className="flex justify-between">
                    <span className="text-zinc-500">Date</span>
                    <span className="text-zinc-300 font-mono">{investigation.date}</span>
                  </div>
                )}
                {investigation.lastUpdated && (
                  <div className="flex justify-between">
                    <span className="text-zinc-500">Last Updated</span>
                    <span className="text-zinc-300 font-mono">{investigation.lastUpdated}</span>
                  </div>
                )}
                {investigation.eventOriginDate && (
                  <div className="flex justify-between">
                    <span className="text-zinc-500">Event Origin</span>
                    <span className="text-zinc-300 font-mono">{investigation.eventOriginDate}</span>
                  </div>
                )}
                <div className="flex justify-between">
                  <span className="text-zinc-500">Severity</span>
                  <span className={`font-bold uppercase text-xs ${severityColors[sev]}`}>{sev}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-zinc-500">Category</span>
                  <span className="text-zinc-300">{investigation.category}</span>
                </div>
                {investigation.affiliations && (
                  <div className="flex justify-between">
                    <span className="text-zinc-500">Connected Entities</span>
                    <span className="text-zinc-300">{investigation.affiliations.length}</span>
                  </div>
                )}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}
