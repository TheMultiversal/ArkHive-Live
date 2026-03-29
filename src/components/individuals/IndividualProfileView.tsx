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
import EvidenceTierBadge, { computeEvidenceTier } from '@/components/ui/EvidenceTierBadge';
import investigationDatabase from '@/data/investigations';
import type { IndividualProfile } from '@/data/individuals/types';

export type { IndividualProfile };

const riskColors = {
 critical: 'text-zinc-300 bg-zinc-900 border-zinc-800',
 high: 'text-zinc-600 bg-zinc-900 border-zinc-800',
 medium: 'text-zinc-400 bg-zinc-900 border-zinc-700',
 low: 'text-zinc-300 bg-zinc-900 border-zinc-800',
};

const severityColors = {
 critical: 'bg-zinc-900 text-zinc-400',
 high: 'bg-zinc-900 text-zinc-500',
 medium: 'bg-zinc-900 text-zinc-300',
 low: 'bg-zinc-900 text-zinc-400',
};

const affiliationTypeColors: Record<string, string> = {
 agency: 'bg-zinc-900 border-zinc-800 text-zinc-400',
 corporation: 'bg-zinc-900 border-zinc-800 text-zinc-400',
 organization: 'bg-zinc-900 border-zinc-700 text-zinc-400',
 individual: 'bg-zinc-900 border-zinc-700 text-zinc-400',
};

interface IndividualProfileViewProps {
 individual: IndividualProfile;
 slug?: string;
}

export default function IndividualProfileView({ individual, slug }: IndividualProfileViewProps) {
 // Dynamic cross-reference: find all investigations that mention this individual
 const dynamicInvestigations = slug ? Object.entries(investigationDatabase).filter(([, inv]) =>
   inv.affiliations?.some((a) => a.href === `/entities/individuals/${slug}`) ||
   inv.defendants?.some((d) => d.name.toLowerCase() === individual.name?.toLowerCase())
 ) : [];

 return (
 <div className="min-h-screen text-white">
 {/* Header */}
 <div className="border-b border-[rgba(255,255,255,0.15)] pb-6 mb-6">
 <Link 
 href="/entities/individuals"
 className="inline-flex items-center gap-2 text-zinc-400 hover:text-white transition-colors mb-6"
 >
 <ArrowLeft className="w-4 h-4"/>
 Back to Individuals
 </Link>

 <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6">
 <div>
 <div className="flex items-center gap-4 mb-2">
 <div className="w-12 h-12 bg-[#0d0d0d] flex items-center justify-center">
 <User className="w-6 h-6 text-zinc-300"/>
 </div>
 <span className={`px-3 py-1 text-xs font-bold uppercase border ${riskColors[individual.riskLevel || 'medium']}`}>
 {individual.riskLevel || 'medium'} risk
 </span>
 {individual.netWorth && (
 <span className="px-3 py-1 text-xs font-mono bg-zinc-900/50 border border-zinc-700 text-zinc-400">
 {individual.netWorth}
 </span>
 )}
 </div>
 <h1 className="text-4xl font-bold mb-2">
 <GlitchText>{individual.name}</GlitchText>
 </h1>
 <p className="text-xl text-zinc-400">{individual.title}</p>
 <p className="text-zinc-500">{individual.role}</p>
 </div>
 </div>
 </div>

 <div className="max-w-6xl mx-auto py-4">
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
 <FileText className="w-5 h-5 text-zinc-300"/>
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
 <Link2 className="w-5 h-5 text-zinc-300"/>
 Key Affiliations
 </h2>
 <div className="space-y-3">
 {(individual.affiliations || []).map((affiliation, index) => {
 const slug = affiliation.name.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
 const typePathMap: Record<string, string> = { agency: 'agencies', corporation: 'corporations', organization: 'organizations', individual: 'individuals' };
 const href = `/entities/${typePathMap[affiliation.type]}/${slug}`;
 return (
 <Link
 key={index}
 href={href}
 className={`flex items-center justify-between p-4 border hover:border-zinc-600/50 transition-all group ${affiliationTypeColors[affiliation.type]}`}
 >
 <div>
 <p className="font-medium group-hover:text-white transition-colors">{affiliation.name}</p>
 <p className="text-sm text-zinc-500">{affiliation.role}</p>
 </div>
 <div className="flex items-center gap-2">
 <span className="text-xs uppercase">{affiliation.type}</span>
 <ExternalLink className="w-3 h-3 text-zinc-600 group-hover:text-white transition-colors"/>
 </div>
 </Link>
 );
 })}
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
 <AlertTriangle className="w-5 h-5 text-zinc-300"/>
 Controversies & Concerns
 </h2>
             <div className="space-y-3">
 {(individual.controversies || []).map((controversy, index) => (
 <div
 key={index}
 className="p-4 bg-[#0a0a0a] border border-[rgba(255,255,255,0.15)] hover:border-zinc-800 transition-all"
 >
 <div className="flex items-start gap-3">
 <AlertTriangle className="w-4 h-4 text-zinc-300/60 mt-0.5 flex-shrink-0"/>
 <p className="text-zinc-300 text-sm leading-relaxed">{controversy}</p>
 </div>
 </div>
 ))}
 </div>
 </motion.section>

 {/* Related Investigations */}
 <motion.section
 initial={{ opacity: 0, y: 20 }}
 animate={{ opacity: 1, y: 0 }}
 transition={{ delay: 0.2 }}
 className="glass-card p-6"
 >
 <h2 className="text-xl font-bold mb-4">Related Investigations ({dynamicInvestigations.length || (individual.relatedInvestigations || []).length})</h2>
 <div className="space-y-3">
 {dynamicInvestigations.length > 0 ? (
 dynamicInvestigations.map(([invSlug, inv]) => (
 <Link
 key={invSlug}
 href={`/investigations/${invSlug}`}
 className="flex items-center justify-between p-4 bg-[#0a0a0a] hover:bg-[#0d0d0d] border border-[rgba(255,255,255,0.15)] hover:border-zinc-800 transition-all"
 >
 <div>
 <span className="font-medium block">{inv.title}</span>
 <span className="text-xs text-zinc-500 mt-1 block">{inv.category}</span>
 </div>
 <div className="flex items-center gap-2 flex-shrink-0">
 <EvidenceTierBadge tier={computeEvidenceTier(inv)} size="compact" />
 <span className={`px-2 py-1 text-xs font-bold uppercase ${severityColors[inv.severity as keyof typeof severityColors]}`}>
 {inv.severity}
 </span>
 </div>
 </Link>
 ))
 ) : (
 (individual.relatedInvestigations || []).map((investigation, idx) => {
 const isString = typeof investigation === 'string';
 const invSlug = isString ? investigation.toLowerCase().replace(/[^a-z0-9]+/g, '-') : investigation.slug;
 const title = isString ? investigation : investigation.title;
 const severity = isString ? 'medium' : investigation.severity;
 const fullInv = investigationDatabase[invSlug];
 
 return (
 <Link
 key={isString ? idx : investigation.slug}
 href={`/investigations/${invSlug}`}
 className="flex items-center justify-between p-4 bg-[#0a0a0a] hover:bg-[#0d0d0d] border border-[rgba(255,255,255,0.15)] hover:border-zinc-800 transition-all"
 >
 <span className="font-medium">{title}</span>
 <div className="flex items-center gap-2 flex-shrink-0">
 {fullInv && <EvidenceTierBadge tier={computeEvidenceTier(fullInv)} size="compact" />}
 <span className={`px-2 py-1 text-xs font-bold uppercase ${severityColors[severity as keyof typeof severityColors]}`}>
 {severity}
 </span>
 </div>
 </Link>
 );
 })
 )}
 </div>
 </motion.section>

 {/* Criminal Charges - Extended Section */}
 {individual.charges && individual.charges.length > 0 && (
 <motion.section
 initial={{ opacity: 0, y: 20 }}
 animate={{ opacity: 1, y: 0 }}
 transition={{ delay: 0.25 }}
 className="glass-card p-6 border-l-4 border-zinc-700"
 >
 <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
 <Scale className="w-5 h-5 text-zinc-300"/>
 Criminal Charges & Violations
 </h2>
 <p className="text-sm text-zinc-500 mb-4">
 {individual.charges.length} documented violations
 </p>
 <div className="space-y-2">
 {individual.charges.map((charge, index) => {
 // Handle string, legacy object, and new object formats
 if (typeof charge === 'string') {
 return (
 <div key={index} className="flex flex-col sm:flex-row sm:items-start gap-2 p-3 bg-[#0a0a0a] border border-[rgba(255,255,255,0.15)] text-sm">
 <code className="text-xs bg-zinc-900 text-zinc-400 px-2 py-1 font-mono whitespace-nowrap shrink-0">
 Charged
 </code>
 <div className="flex-1">
 <span className="text-zinc-300">{charge}</span>
 </div>
 </div>
 );
 }
 const isLegacy = 'charge' in charge;
 const isStatute = 'statute' in charge;
 const displayText = isLegacy ? charge.charge : charge.description;
 const displayCode = isLegacy ? (charge.status || 'Charged') : isStatute ? (charge as { statute: string }).statute : 'N/A';
 const displayCategory = isLegacy ? (charge.date || '') : isStatute ? ((charge as { category?: string }).category || '') : '';
 
 return (
 <div key={index} className="flex flex-col sm:flex-row sm:items-start gap-2 p-3 bg-[#0a0a0a] border border-[rgba(255,255,255,0.15)] text-sm">
 <code className="text-xs bg-zinc-900 text-zinc-400 px-2 py-1 font-mono whitespace-nowrap shrink-0">
 {displayCode}
 </code>
 <div className="flex-1">
 <span className="text-zinc-300">{displayText}</span>
 {displayCategory && (
 <span className="text-zinc-600 ml-2 text-xs">({displayCategory})</span>
 )}
 </div>
 </div>
 );
 })}
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
 <Users className="w-5 h-5 text-zinc-300"/>
 Known Associates & Connections
 </h2>
 <div className="space-y-3">
 {(individual.knownAssociates || []).map((associate, index) => (
 <div
 key={index}
 className="flex flex-col sm:flex-row sm:items-center justify-between p-4 bg-[#0a0a0a] border border-[rgba(255,255,255,0.15)] hover:border-zinc-800 transition-all"
 >
 <div className="flex-1">
 {associate.href ? (
 <Link href={associate.href} className="font-medium text-zinc-400 hover:text-white transition-colors">
 {associate.name}
 </Link>
 ) : (
 <span className="font-medium">{associate.name}</span>
 )}
 <p className="text-sm text-zinc-500 mt-1">{associate.relationship}</p>
 </div>
 {associate.href && (
 <ExternalLink className="w-4 h-4 text-zinc-600 mt-2 sm:mt-0"/>
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
 <BookOpen className="w-5 h-5 text-zinc-300"/>
 Sources & Documentation
 </h2>
 <p className="text-sm text-zinc-500 mb-4">
 {(individual.sources || []).length} documented sources from official records, investigations, and reports
 </p>
 <div className="space-y-2">
 {(individual.sources || []).map((source, index) => (
 source.url ? (
 <a
 key={index}
 href={source.url}
 target="_blank"
 rel="noopener noreferrer"
 className="flex items-start gap-3 p-3 bg-zinc-900 border border-[rgba(255,255,255,0.08)] text-sm hover:border-zinc-600/50 hover:bg-zinc-900 transition-all group"
 >
 <ExternalLink className="w-4 h-4 text-zinc-600 group-hover:text-white mt-0.5 flex-shrink-0 transition-colors"/>
 <div className="flex-1">
 <span className="text-zinc-300 group-hover:text-white transition-colors">{source.title}</span>
 {source.date && (
 <span className="text-zinc-600 ml-2">({source.date})</span>
 )}
 </div>
 </a>
 ) : (
 <div
 key={index}
 className="flex items-start gap-3 p-3 bg-zinc-900 border border-[rgba(255,255,255,0.08)] text-sm"
 >
 <FileText className="w-4 h-4 text-zinc-500 mt-0.5 flex-shrink-0"/>
 <div>
 <span className="text-zinc-300">{source.title}</span>
 {source.date && (
 <span className="text-zinc-600 ml-2">({source.date})</span>
 )}
 </div>
 </div>
 )
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
 <Calendar className="w-4 h-4"/>
 {individual.birthDate}
 </dd>
 </div>
 )}
 {individual.birthPlace && (
 <div>
 <dt className="text-xs text-zinc-500 uppercase tracking-wider">Birthplace</dt>
 <dd className="text-zinc-300 flex items-center gap-2">
 <MapPin className="w-4 h-4"/>
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
 <Briefcase className="w-5 h-5 text-zinc-300"/>
 Education
 </h3>
 <ul className="space-y-2">
 {(individual.education || []).map((edu, index) => (
 <li key={index} className="text-sm text-zinc-400 flex items-start gap-2">
 <span className="text-zinc-300">•</span>
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
 {(individual.timeline || []).map((item, index) => (
 <div key={index} className="relative pl-4 border-l-2 border-[rgba(255,255,255,0.15)]">
 <div className="absolute -left-[5px] top-0 w-2 h-2 bg-zinc-600"/>
 <p className="text-xs text-zinc-300 font-mono">{item.date}</p>
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
