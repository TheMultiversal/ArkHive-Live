'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import {
  Network,
  ArrowLeft,
  ExternalLink,
  AlertTriangle,
  Calendar,
  Users,
  FileText,
  Globe,
  Scale,
} from 'lucide-react';
import GlitchText from '@/components/effects/GlitchText';

interface OrganizationProfile {
  name: string;
  type: string;
  riskLevel: 'critical' | 'high' | 'medium' | 'low';
  description: string;
  founded: string;
  headquarters: string;
  members?: string;
  funding?: string;
  website?: string;
  mission?: string;
  controversies: string[];
  charges?: { statute: string; description: string; category: string }[];
  relatedInvestigations: { title: string; slug: string; severity: string }[];
  keyFigures: { name: string; role: string; href?: string }[];
  affiliatedOrganizations?: { name: string; relationship: string; href?: string }[];
  timeline: { date: string; event: string }[];
  sources?: { title: string; url?: string; date: string }[];
}

const riskColors = {
  critical: { bg: 'bg-red-500/20', border: 'border-red-500', text: 'text-red-500' },
  high: { bg: 'bg-orange-500/20', border: 'border-orange-500', text: 'text-orange-500' },
  medium: { bg: 'bg-yellow-500/20', border: 'border-yellow-500', text: 'text-yellow-500' },
  low: { bg: 'bg-green-500/20', border: 'border-green-500', text: 'text-green-500' },
};

interface OrganizationProfileViewProps {
  organization: OrganizationProfile;
}

export default function OrganizationProfileView({ organization: org }: OrganizationProfileViewProps) {
  const colors = riskColors[org.riskLevel];

  return (
    <div className="min-h-screen bg-black text-white p-8">
      <div className="max-w-6xl mx-auto">
        {/* Back Link */}
        <Link
          href="/entities/organizations"
          className="inline-flex items-center gap-2 text-zinc-400 hover:text-blood-500 transition-colors mb-8"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Organizations
        </Link>

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8"
        >
          <div className="flex items-start gap-6">
            <div className="w-20 h-20 bg-zinc-900 border border-zinc-700 flex items-center justify-center">
              <Network className="w-10 h-10 text-blood-500" />
            </div>
            <div className="flex-1">
              <div className="flex items-center gap-4 mb-2">
                <GlitchText
                  text={org.name}
                  className="text-3xl font-bold"
                />
                <span className={`text-xs px-3 py-1 ${colors.bg} ${colors.border} border ${colors.text}`}>
                  {org.riskLevel.toUpperCase()} RISK
                </span>
              </div>
              <p className="text-zinc-400">{org.type}</p>
            </div>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Description */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="glass-card p-6"
            >
              <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
                <FileText className="w-5 h-5 text-blood-500" />
                Overview
              </h2>
              <p className="text-zinc-300 leading-relaxed">{org.description}</p>
              {org.mission && (
                <div className="mt-4 p-4 bg-zinc-900/50 border-l-2 border-blood-500">
                  <p className="text-sm text-zinc-400">
                    <strong className="text-zinc-300">Stated Mission:</strong> {org.mission}
                  </p>
                </div>
              )}
            </motion.div>

            {/* Controversies */}
            {org.controversies.length > 0 && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="glass-card p-6"
              >
                <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
                  <AlertTriangle className="w-5 h-5 text-blood-500" />
                  Controversies & Crimes
                </h2>
                <ul className="space-y-3">
                  {org.controversies.map((controversy, index) => (
                    <li key={index} className="flex gap-3">
                      <span className="text-blood-500 mt-1">▸</span>
                      <span className="text-zinc-300">{controversy}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            )}

            {/* Criminal Charges */}
            {org.charges && org.charges.length > 0 && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.25 }}
                className="glass-card p-6 border-blood-500"
              >
                <h2 className="text-xl font-bold mb-4 flex items-center gap-2 text-blood-500">
                  <Scale className="w-5 h-5" />
                  Criminal Charges & Legal Violations
                </h2>
                <div className="space-y-4">
                  {org.charges.map((charge, index) => (
                    <div key={index} className="p-4 bg-red-500/10 border border-red-500/30">
                      <div className="flex items-center gap-2 mb-2">
                        <span className="text-xs px-2 py-1 bg-red-500/20 text-red-400 border border-red-500/50">
                          {charge.category}
                        </span>
                      </div>
                      <p className="font-mono text-sm text-red-400 mb-1">{charge.statute}</p>
                      <p className="text-zinc-300 text-sm">{charge.description}</p>
                    </div>
                  ))}
                </div>
              </motion.div>
            )}

            {/* Key Figures */}
            {org.keyFigures.length > 0 && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="glass-card p-6"
              >
                <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
                  <Users className="w-5 h-5 text-blood-500" />
                  Key Figures
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {org.keyFigures.map((figure, index) => (
                    <div key={index} className="p-4 bg-zinc-900/50 border border-zinc-800">
                      {figure.href ? (
                        <Link href={figure.href} className="hover:text-blood-500 transition-colors">
                          <p className="font-semibold">{figure.name}</p>
                        </Link>
                      ) : (
                        <p className="font-semibold">{figure.name}</p>
                      )}
                      <p className="text-sm text-zinc-400">{figure.role}</p>
                    </div>
                  ))}
                </div>
              </motion.div>
            )}

            {/* Timeline */}
            {org.timeline.length > 0 && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="glass-card p-6"
              >
                <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
                  <Calendar className="w-5 h-5 text-blood-500" />
                  Timeline
                </h2>
                <div className="space-y-4">
                  {org.timeline.map((item, index) => (
                    <div key={index} className="flex gap-4">
                      <span className="text-blood-500 font-mono text-sm min-w-[100px]">
                        {item.date}
                      </span>
                      <span className="text-zinc-300">{item.event}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            )}
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Quick Facts */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="glass-card p-6"
            >
              <h3 className="font-bold mb-4 text-blood-500">Quick Facts</h3>
              <div className="space-y-3 text-sm">
                <div>
                  <span className="text-zinc-500">Founded:</span>
                  <span className="ml-2 text-zinc-300">{org.founded}</span>
                </div>
                {org.headquarters && (
                  <div>
                    <span className="text-zinc-500">Headquarters:</span>
                    <span className="ml-2 text-zinc-300">{org.headquarters}</span>
                  </div>
                )}
                {org.members && (
                  <div>
                    <span className="text-zinc-500">Members:</span>
                    <span className="ml-2 text-zinc-300">{org.members}</span>
                  </div>
                )}
                {org.funding && (
                  <div>
                    <span className="text-zinc-500">Funding:</span>
                    <span className="ml-2 text-zinc-300">{org.funding}</span>
                  </div>
                )}
                {org.website && (
                  <div className="pt-2">
                    <a
                      href={org.website}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blood-500 hover:underline flex items-center gap-1"
                    >
                      <Globe className="w-4 h-4" />
                      Official Website
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  </div>
                )}
              </div>
            </motion.div>

            {/* Related Investigations */}
            {org.relatedInvestigations.length > 0 && (
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3 }}
                className="glass-card p-6"
              >
                <h3 className="font-bold mb-4 text-blood-500">Related Investigations</h3>
                <div className="space-y-2">
                  {org.relatedInvestigations.map((inv, index) => (
                    <Link
                      key={index}
                      href={`/investigations/${inv.slug}`}
                      className="block p-3 bg-zinc-900/50 hover:bg-zinc-800 transition-colors"
                    >
                      <p className="text-sm font-medium">{inv.title}</p>
                      <span className={`text-xs ${
                        inv.severity === 'critical' ? 'text-red-500' :
                        inv.severity === 'high' ? 'text-orange-500' :
                        'text-yellow-500'
                      }`}>
                        {inv.severity.toUpperCase()}
                      </span>
                    </Link>
                  ))}
                </div>
              </motion.div>
            )}

            {/* Affiliated Organizations */}
            {org.affiliatedOrganizations && org.affiliatedOrganizations.length > 0 && (
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4 }}
                className="glass-card p-6"
              >
                <h3 className="font-bold mb-4 text-blood-500">Affiliated Organizations</h3>
                <div className="space-y-2">
                  {org.affiliatedOrganizations.map((aff, index) => (
                    <div key={index} className="p-3 bg-zinc-900/50">
                      {aff.href ? (
                        <Link href={aff.href} className="hover:text-blood-500 transition-colors">
                          <p className="text-sm font-medium">{aff.name}</p>
                        </Link>
                      ) : (
                        <p className="text-sm font-medium">{aff.name}</p>
                      )}
                      <p className="text-xs text-zinc-500">{aff.relationship}</p>
                    </div>
                  ))}
                </div>
              </motion.div>
            )}

            {/* Sources */}
            {org.sources && org.sources.length > 0 && (
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.5 }}
                className="glass-card p-6"
              >
                <h3 className="font-bold mb-4 text-blood-500">Sources</h3>
                <div className="space-y-2 text-sm">
                  {org.sources.map((source, index) => (
                    <div key={index} className="text-zinc-400">
                      <p>{source.title}</p>
                      <p className="text-xs text-zinc-600">{source.date}</p>
                    </div>
                  ))}
                </div>
              </motion.div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
