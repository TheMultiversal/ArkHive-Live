'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import {
  User,
  ArrowLeft,
  ExternalLink,
  AlertTriangle,
  Calendar,
  Briefcase,
  MapPin,
  Link2,
  FileText,
  Scale,
  Users,
  BookOpen,
} from 'lucide-react';
import GlitchText from '@/components/effects/GlitchText';

// Individual profile data interface
export interface IndividualProfile {
  name: string;
  title: string;
  role: string;
  riskLevel: 'critical' | 'high' | 'medium' | 'low';
  description: string;
  birthDate?: string;
  birthPlace?: string;
  education: string[];
  netWorth?: string;
  affiliations: { name: string; role: string; type: 'agency' | 'corporation' | 'organization' }[];
  controversies: string[];
  relatedInvestigations: { title: string; slug: string; severity: string }[];
  timeline: { date: string; event: string }[];
  socialMedia?: { platform: string; handle: string }[];
  charges?: { statute: string; description: string; category: string }[];
  sources?: { title: string; url?: string; date?: string }[];
  aliases?: string[];
  knownAssociates?: { name: string; relationship: string; href?: string }[];
}

const riskColors = {
  critical: 'text-red-500 bg-red-500/10 border-red-500/30',
  high: 'text-orange-500 bg-orange-500/10 border-orange-500/30',
  medium: 'text-yellow-500 bg-yellow-500/10 border-yellow-500/30',
  low: 'text-green-500 bg-green-500/10 border-green-500/30',
};

const severityColors = {
  critical: 'bg-red-500/20 text-red-400',
  high: 'bg-orange-500/20 text-orange-400',
  medium: 'bg-yellow-500/20 text-yellow-400',
  low: 'bg-green-500/20 text-green-400',
};

const affiliationTypeColors = {
  agency: 'bg-blue-500/10 border-blue-500/30 text-blue-400',
  corporation: 'bg-purple-500/10 border-purple-500/30 text-purple-400',
  organization: 'bg-zinc-500/10 border-zinc-500/30 text-zinc-400',
};

interface IndividualProfileViewProps {
  individual: IndividualProfile;
}

export default function IndividualProfileView({ individual }: IndividualProfileViewProps) {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Header */}
      <div className="border-b border-zinc-800">
        <div className="max-w-6xl mx-auto px-6 py-8">
          <Link 
            href="/entities/individuals"
            className="inline-flex items-center gap-2 text-zinc-400 hover:text-blood-500 transition-colors mb-6"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Individuals
          </Link>

          <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6">
            <div>
              <div className="flex items-center gap-4 mb-2">
                <div className="w-12 h-12 rounded-full bg-zinc-800 flex items-center justify-center">
                  <User className="w-6 h-6 text-blood-500" />
                </div>
                <span className={`px-3 py-1 text-xs font-bold uppercase border ${riskColors[individual.riskLevel]}`}>
                  {individual.riskLevel} risk
                </span>
              </div>
              <h1 className="text-4xl font-bold mb-2">
                <GlitchText>{individual.name}</GlitchText>
              </h1>
              <p className="text-xl text-zinc-400">{individual.title}</p>
              <p className="text-zinc-500">{individual.role}</p>
            </div>

            {individual.netWorth && (
              <div className="text-right">
                <p className="text-xs text-zinc-500 uppercase">Net Worth</p>
                <p className="text-2xl font-bold text-blood-500">{individual.netWorth}</p>
              </div>
            )}
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-6 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Description */}
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="glass-card p-6"
            >
              <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
                <FileText className="w-5 h-5 text-blood-500" />
                Overview
              </h2>
              <p className="text-zinc-300 leading-relaxed">{individual.description}</p>
            </motion.section>

            {/* Affiliations */}
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="glass-card p-6"
            >
              <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
                <Link2 className="w-5 h-5 text-blood-500" />
                Key Affiliations
              </h2>
              <div className="space-y-3">
                {individual.affiliations.map((affiliation, index) => (
                  <div
                    key={index}
                    className={`flex items-center justify-between p-4 border ${affiliationTypeColors[affiliation.type]}`}
                  >
                    <div>
                      <p className="font-medium">{affiliation.name}</p>
                      <p className="text-sm text-zinc-500">{affiliation.role}</p>
                    </div>
                    <span className="text-xs uppercase">{affiliation.type}</span>
                  </div>
                ))}
              </div>
            </motion.section>

            {/* Controversies */}
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.15 }}
              className="glass-card p-6"
            >
              <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
                <AlertTriangle className="w-5 h-5 text-blood-500" />
                Controversies & Concerns
              </h2>
              <ul className="space-y-3">
                {individual.controversies.map((controversy, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-blood-500 mt-2 flex-shrink-0" />
                    <span className="text-zinc-300">{controversy}</span>
                  </li>
                ))}
              </ul>
            </motion.section>

            {/* Related Investigations */}
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="glass-card p-6"
            >
              <h2 className="text-xl font-bold mb-4">Related Investigations</h2>
              <div className="space-y-3">
                {individual.relatedInvestigations.map((investigation) => (
                  <Link
                    key={investigation.slug}
                    href={`/investigations/${investigation.slug}`}
                    className="flex items-center justify-between p-4 bg-zinc-900/50 hover:bg-zinc-800/50 border border-zinc-800 hover:border-blood-500/30 transition-all"
                  >
                    <span className="font-medium">{investigation.title}</span>
                    <span className={`px-2 py-1 text-xs font-bold uppercase ${severityColors[investigation.severity as keyof typeof severityColors]}`}>
                      {investigation.severity}
                    </span>
                  </Link>
                ))}
              </div>
            </motion.section>

            {/* Criminal Charges - Extended Section */}
            {individual.charges && individual.charges.length > 0 && (
              <motion.section
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.25 }}
                className="glass-card p-6 border-l-4 border-blood-600"
              >
                <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
                  <Scale className="w-5 h-5 text-blood-500" />
                  Criminal Charges & Violations
                </h2>
                <p className="text-sm text-zinc-500 mb-4">
                  {individual.charges.length} documented statutory violations across multiple categories
                </p>
                <div className="space-y-4">
                  {/* Group charges by category */}
                  {Object.entries(
                    individual.charges.reduce((acc, charge) => {
                      if (!acc[charge.category]) acc[charge.category] = [];
                      acc[charge.category].push(charge);
                      return acc;
                    }, {} as Record<string, typeof individual.charges>)
                  ).map(([category, charges]) => (
                    <div key={category} className="border border-zinc-800 p-4">
                      <h3 className="text-sm font-bold text-blood-500 uppercase tracking-wider mb-3">
                        {category}
                      </h3>
                      <div className="space-y-2">
                        {charges.map((charge, index) => (
                          <div key={index} className="flex flex-col sm:flex-row sm:items-start gap-2 text-sm">
                            <code className="text-xs bg-zinc-900 text-zinc-400 px-2 py-1 font-mono whitespace-nowrap">
                              {charge.statute}
                            </code>
                            <span className="text-zinc-300">{charge.description}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </motion.section>
            )}

            {/* Known Associates - Extended Section */}
            {individual.knownAssociates && individual.knownAssociates.length > 0 && (
              <motion.section
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="glass-card p-6"
              >
                <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
                  <Users className="w-5 h-5 text-blood-500" />
                  Known Associates & Connections
                </h2>
                <div className="space-y-3">
                  {individual.knownAssociates.map((associate, index) => (
                    <div
                      key={index}
                      className="flex flex-col sm:flex-row sm:items-center justify-between p-4 bg-zinc-900/50 border border-zinc-800 hover:border-blood-500/30 transition-all"
                    >
                      <div className="flex-1">
                        {associate.href ? (
                          <Link href={associate.href} className="font-medium text-blood-400 hover:text-blood-300 transition-colors">
                            {associate.name}
                          </Link>
                        ) : (
                          <span className="font-medium">{associate.name}</span>
                        )}
                        <p className="text-sm text-zinc-500 mt-1">{associate.relationship}</p>
                      </div>
                      {associate.href && (
                        <ExternalLink className="w-4 h-4 text-zinc-600 mt-2 sm:mt-0" />
                      )}
                    </div>
                  ))}
                </div>
              </motion.section>
            )}

            {/* Sources & Documentation - Extended Section */}
            {individual.sources && individual.sources.length > 0 && (
              <motion.section
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.35 }}
                className="glass-card p-6"
              >
                <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
                  <BookOpen className="w-5 h-5 text-blood-500" />
                  Sources & Documentation
                </h2>
                <p className="text-sm text-zinc-500 mb-4">
                  {individual.sources.length} documented sources from official records, investigations, and reports
                </p>
                <div className="space-y-2">
                  {individual.sources.map((source, index) => (
                    <div
                      key={index}
                      className="flex items-start gap-3 p-3 bg-zinc-900/30 border border-zinc-800/50 text-sm"
                    >
                      <FileText className="w-4 h-4 text-zinc-500 mt-0.5 flex-shrink-0" />
                      <div>
                        <span className="text-zinc-300">{source.title}</span>
                        {source.date && (
                          <span className="text-zinc-600 ml-2">({source.date})</span>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </motion.section>
            )}
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Personal Info */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              className="glass-card p-6"
            >
              <h3 className="text-lg font-bold mb-4">Personal Information</h3>
              <dl className="space-y-4">
                {individual.birthDate && (
                  <div>
                    <dt className="text-xs text-zinc-500 uppercase tracking-wider">Born</dt>
                    <dd className="text-zinc-300 flex items-center gap-2">
                      <Calendar className="w-4 h-4" />
                      {individual.birthDate}
                    </dd>
                  </div>
                )}
                {individual.birthPlace && (
                  <div>
                    <dt className="text-xs text-zinc-500 uppercase tracking-wider">Birthplace</dt>
                    <dd className="text-zinc-300 flex items-center gap-2">
                      <MapPin className="w-4 h-4" />
                      {individual.birthPlace}
                    </dd>
                  </div>
                )}
                {individual.aliases && individual.aliases.length > 0 && (
                  <div>
                    <dt className="text-xs text-zinc-500 uppercase tracking-wider">Also Known As</dt>
                    <dd className="text-zinc-400 text-sm mt-1">
                      {individual.aliases.join(', ')}
                    </dd>
                  </div>
                )}
              </dl>
            </motion.div>

            {/* Education */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.1 }}
              className="glass-card p-6"
            >
              <h3 className="text-lg font-bold mb-4 flex items-center gap-2">
                <Briefcase className="w-5 h-5 text-blood-500" />
                Education
              </h3>
              <ul className="space-y-2">
                {individual.education.map((edu, index) => (
                  <li key={index} className="text-sm text-zinc-400 flex items-start gap-2">
                    <span className="text-blood-500">•</span>
                    {edu}
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Timeline */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="glass-card p-6"
            >
              <h3 className="text-lg font-bold mb-4">Key Timeline</h3>
              <div className="space-y-4">
                {individual.timeline.map((item, index) => (
                  <div key={index} className="relative pl-4 border-l-2 border-zinc-800">
                    <div className="absolute -left-[5px] top-0 w-2 h-2 rounded-full bg-blood-500" />
                    <p className="text-xs text-blood-500 font-mono">{item.date}</p>
                    <p className="text-sm text-zinc-300">{item.event}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}
