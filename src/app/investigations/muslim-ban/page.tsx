'use client';

import { useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import {
  AlertTriangle,
  Calendar,
  ChevronRight,
  ExternalLink,
  FileText,
  Users,
  Scale,
  Clock,
  Globe,
  Ban,
} from 'lucide-react';
import GlitchText from '@/components/effects/GlitchText';

const investigationData = {
  title: 'Muslim Ban & Religious Persecution',
  subtitle: 'Executive Order 13769: Discriminatory Travel Ban Affecting Millions',
  severity: 'critical' as const,
  status: 'Documented - Rescinded by Biden',
  lastUpdated: 'February 2026',
  summary: `The Trump administration's "Muslim Ban" was a series of executive orders restricting travel from predominantly Muslim countries. Despite the administration's claims of national security concerns, internal documents and Trump's own statements revealed the discriminatory intent. The ban separated families, stranded travelers, caused chaos at airports, and was repeatedly struck down by courts before a modified version was upheld by the Supreme Court. Stephen Miller was the primary architect of these policies.`,
  
  impactStats: {
    countriesBanned: '7 (later modified)',
    visasCanceled: '60,000+',
    travelersStranded: '90,000+',
    refugeesBlocked: '45,000+',
    familiesSeparated: 'Tens of thousands',
  },

  keyFigures: [
    { name: 'Donald Trump', role: 'President - Signed executive orders, promised "total and complete shutdown"', href: '/entities/individuals/donald-trump' },
    { name: 'Stephen Miller', role: 'Senior Advisor - Primary architect of the ban', href: '/entities/individuals/stephen-miller' },
    { name: 'Jeff Sessions', role: 'Attorney General - Defended ban in courts', href: '/entities/individuals/jeff-sessions' },
  ],

  executiveOrders: [
    {
      order: 'Executive Order 13769',
      date: 'January 27, 2017',
      title: 'Protecting the Nation from Foreign Terrorist Entry',
      details: [
        'Banned nationals from Iraq, Syria, Iran, Libya, Somalia, Sudan, and Yemen for 90 days',
        'Suspended refugee admissions for 120 days',
        'Banned Syrian refugees indefinitely',
        'Caused immediate chaos at airports worldwide',
        'Blocked by federal courts within days',
      ],
    },
    {
      order: 'Executive Order 13780',
      date: 'March 6, 2017',
      title: 'Revised Travel Ban',
      details: [
        'Removed Iraq from the list',
        'Exempted current visa holders',
        'Removed indefinite Syrian ban',
        'Still blocked by federal courts',
        'Supreme Court allowed partial implementation',
      ],
    },
    {
      order: 'Proclamation 9645',
      date: 'September 24, 2017',
      title: 'Travel Ban 3.0',
      details: [
        'Added Chad, North Korea, and Venezuela',
        'Made restrictions indefinite',
        'Upheld by Supreme Court 5-4 in Trump v. Hawaii',
        'Dissent compared it to Korematsu internment case',
      ],
    },
  ],

  timeline: [
    { date: 'December 7, 2015', event: 'Candidate Trump calls for "total and complete shutdown of Muslims entering the United States"' },
    { date: 'January 20, 2017', event: 'Trump inaugurated as President' },
    { date: 'January 27, 2017', event: 'Executive Order 13769 signed - immediate chaos at airports' },
    { date: 'January 28, 2017', event: 'Federal judge blocks deportations in emergency ruling' },
    { date: 'January 29, 2017', event: 'Mass protests at airports nationwide' },
    { date: 'January 30, 2017', event: 'Acting AG Sally Yates refuses to defend, is fired' },
    { date: 'February 3, 2017', event: 'Federal judge in Washington blocks ban nationwide' },
    { date: 'February 9, 2017', event: '9th Circuit refuses to reinstate ban' },
    { date: 'March 6, 2017', event: 'Revised Executive Order 13780 signed' },
    { date: 'March 15, 2017', event: 'Federal judge in Hawaii blocks new ban' },
    { date: 'June 26, 2017', event: 'Supreme Court allows partial implementation' },
    { date: 'September 24, 2017', event: 'Third version (Proclamation 9645) issued' },
    { date: 'June 26, 2018', event: 'Supreme Court upholds ban 5-4 in Trump v. Hawaii' },
    { date: 'January 20, 2021', event: 'President Biden rescinds the ban on Day 1' },
  ],

  discriminatoryIntent: [
    { evidence: '"Donald J. Trump is calling for a total and complete shutdown of Muslims entering the United States"', source: 'Trump campaign statement, December 2015' },
    { evidence: '"I think Islam hates us"', source: 'Trump CNN interview, March 2016' },
    { evidence: 'Rudy Giuliani: Trump asked for "Muslim ban" and wanted it done "legally"', source: 'Fox News interview, January 2017' },
    { evidence: 'Stephen Miller emails showing white nationalist influences on policy', source: 'SPLC investigation, November 2019' },
    { evidence: 'Administration found no evidence that nationals from banned countries posed increased terror threat', source: 'DHS Intelligence Assessment, leaked 2017' },
  ],

  humanImpact: [
    { story: 'Families separated at airports, some for months', category: 'Family Separation' },
    { story: 'Green card holders detained and interrogated', category: 'Legal Residents' },
    { story: 'Students unable to return to universities', category: 'Education' },
    { story: 'Medical patients denied life-saving treatment in US', category: 'Healthcare' },
    { story: 'Refugees fleeing war zones turned away at doorstep of safety', category: 'Refugees' },
    { story: 'US citizens\' family members banned from visiting', category: 'US Citizens' },
    { story: 'Iraqi interpreters who helped US military denied entry', category: 'Military Allies' },
  ],

  legalChallenges: [
    { court: 'District Court - Washington (Robart)', ruling: 'Nationwide temporary restraining order', date: 'February 3, 2017' },
    { court: '9th Circuit Court of Appeals', ruling: 'Upheld block on ban', date: 'February 9, 2017' },
    { court: 'District Court - Hawaii (Watson)', ruling: 'Blocked revised ban', date: 'March 15, 2017' },
    { court: 'District Court - Maryland', ruling: 'Blocked revised ban', date: 'March 16, 2017' },
    { court: 'Supreme Court', ruling: 'Allowed partial implementation', date: 'June 26, 2017' },
    { court: 'Supreme Court - Trump v. Hawaii', ruling: 'Upheld third ban 5-4', date: 'June 26, 2018' },
  ],

  sources: [
    { title: 'Executive Order 13769 Full Text', url: 'https://www.federalregister.gov/documents/2017/02/01/2017-02281/protecting-the-nation-from-foreign-terrorist-entry-into-the-united-states', type: 'Official Document' },
    { title: 'Trump v. Hawaii Supreme Court Decision', url: 'https://www.supremecourt.gov/opinions/17pdf/17-965_h315.pdf', type: 'Court Document' },
    { title: 'DHS Intelligence Assessment (leaked)', url: 'https://www.documentcloud.org/documents/3474730-DHS-intelligence-document-on-President-Donald.html', type: 'Government Report' },
    { title: 'Stephen Miller White Nationalist Emails', url: 'https://www.splcenter.org/stephen-miller-breitbart-emails', type: 'Investigation' },
    { title: 'ACLU Travel Ban Analysis', url: 'https://www.aclu.org/issues/immigrants-rights/muslim-ban', type: 'Legal Analysis' },
    { title: 'Cato Institute: No Increased Risk from Banned Countries', url: 'https://www.cato.org/blog/little-national-security-benefit-trumps-executive-order-immigration', type: 'Policy Analysis' },
  ],
};

const severityColors = {
  critical: 'bg-blood-600/20 text-blood-400 border-blood-600/30',
  high: 'bg-orange-600/20 text-orange-400 border-orange-600/30',
  medium: 'bg-yellow-600/20 text-yellow-400 border-yellow-600/30',
  low: 'bg-green-600/20 text-green-400 border-green-600/30',
};

export default function MuslimBanPage() {
  const [expandedOrder, setExpandedOrder] = useState<string | null>('Executive Order 13769');

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Header */}
      <div className="border-b border-zinc-800">
        <div className="max-w-6xl mx-auto px-6 py-8">
          <nav className="flex items-center gap-2 text-sm text-zinc-500 mb-6">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <ChevronRight className="w-4 h-4" />
            <Link href="/investigations" className="hover:text-white transition-colors">Investigations</Link>
            <ChevronRight className="w-4 h-4" />
            <span className="text-blood-500">Muslim Ban</span>
          </nav>

          <div className="flex items-center gap-4 mb-4">
            <span className={`px-3 py-1 text-xs font-bold uppercase border ${severityColors[investigationData.severity]}`}>
              {investigationData.severity} SEVERITY
            </span>
            <span className="px-3 py-1 text-xs font-medium bg-zinc-800 text-zinc-300 border border-zinc-700">
              {investigationData.status}
            </span>
          </div>

          <h1 className="text-4xl md:text-5xl font-black mb-4">
            <GlitchText>{investigationData.title}</GlitchText>
          </h1>
          <p className="text-xl text-zinc-400 mb-4">{investigationData.subtitle}</p>
          
          <div className="flex items-center gap-4 text-sm text-zinc-500">
            <span className="flex items-center gap-2">
              <Clock className="w-4 h-4" />
              Updated: {investigationData.lastUpdated}
            </span>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-6 py-8">
        {/* Impact Stats */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-12"
        >
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
            <div className="glass-card p-4 text-center border-l-4 border-blood-600">
              <Globe className="w-6 h-6 text-blood-500 mx-auto mb-2" />
              <p className="text-2xl font-black text-blood-500">{investigationData.impactStats.countriesBanned}</p>
              <p className="text-xs text-zinc-400">Countries Banned</p>
            </div>
            <div className="glass-card p-4 text-center border-l-4 border-blood-600">
              <Ban className="w-6 h-6 text-blood-500 mx-auto mb-2" />
              <p className="text-2xl font-black text-blood-500">{investigationData.impactStats.visasCanceled}</p>
              <p className="text-xs text-zinc-400">Visas Canceled</p>
            </div>
            <div className="glass-card p-4 text-center border-l-4 border-orange-600">
              <Users className="w-6 h-6 text-orange-500 mx-auto mb-2" />
              <p className="text-2xl font-black text-orange-500">{investigationData.impactStats.travelersStranded}</p>
              <p className="text-xs text-zinc-400">Travelers Stranded</p>
            </div>
            <div className="glass-card p-4 text-center border-l-4 border-orange-600">
              <AlertTriangle className="w-6 h-6 text-orange-500 mx-auto mb-2" />
              <p className="text-2xl font-black text-orange-500">{investigationData.impactStats.refugeesBlocked}</p>
              <p className="text-xs text-zinc-400">Refugees Blocked</p>
            </div>
            <div className="glass-card p-4 text-center border-l-4 border-yellow-600">
              <Users className="w-6 h-6 text-yellow-500 mx-auto mb-2" />
              <p className="text-lg font-black text-yellow-500">{investigationData.impactStats.familiesSeparated}</p>
              <p className="text-xs text-zinc-400">Families Separated</p>
            </div>
          </div>
        </motion.section>

        {/* Summary */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="glass-card p-6 mb-8"
        >
          <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
            <FileText className="w-5 h-5 text-blood-500" />
            Executive Summary
          </h2>
          <p className="text-zinc-300 leading-relaxed">{investigationData.summary}</p>
        </motion.section>

        {/* Key Figures */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15 }}
          className="glass-card p-6 mb-8"
        >
          <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
            <Users className="w-5 h-5 text-blood-500" />
            Key Figures
          </h2>
          <div className="space-y-3">
            {investigationData.keyFigures.map((figure, index) => (
              <Link
                key={index}
                href={figure.href}
                className="flex items-center justify-between p-4 bg-zinc-900/50 border border-zinc-800 hover:border-blood-500/50 transition-all"
              >
                <div>
                  <span className="font-medium text-blood-400">{figure.name}</span>
                  <p className="text-sm text-zinc-500">{figure.role}</p>
                </div>
                <ExternalLink className="w-4 h-4 text-zinc-600" />
              </Link>
            ))}
          </div>
        </motion.section>

        {/* Evidence of Discriminatory Intent */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="glass-card p-6 mb-8 border-l-4 border-blood-600"
        >
          <h2 className="text-xl font-bold mb-4">Evidence of Discriminatory Intent</h2>
          <div className="space-y-4">
            {investigationData.discriminatoryIntent.map((item, index) => (
              <div key={index} className="border-b border-zinc-800 pb-4 last:border-0">
                <blockquote className="text-zinc-200 italic mb-2">
                  &quot;{item.evidence}&quot;
                </blockquote>
                <p className="text-sm text-blood-400">{item.source}</p>
              </div>
            ))}
          </div>
        </motion.section>

        {/* Executive Orders */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.25 }}
          className="glass-card p-6 mb-8"
        >
          <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
            <FileText className="w-5 h-5 text-blood-500" />
            Executive Orders
          </h2>
          <div className="space-y-4">
            {investigationData.executiveOrders.map((order, index) => (
              <div key={index} className="border border-zinc-800">
                <button
                  onClick={() => setExpandedOrder(expandedOrder === order.order ? null : order.order)}
                  className="w-full flex items-center justify-between p-4 hover:bg-zinc-900/50 transition-colors"
                >
                  <div className="text-left">
                    <span className="font-bold text-blood-400">{order.order}</span>
                    <p className="text-sm text-zinc-500">{order.title} - {order.date}</p>
                  </div>
                  <ChevronRight className={`w-5 h-5 transition-transform ${expandedOrder === order.order ? 'rotate-90' : ''}`} />
                </button>
                {expandedOrder === order.order && (
                  <div className="px-4 pb-4">
                    <ul className="space-y-2">
                      {order.details.map((detail, i) => (
                        <li key={i} className="flex items-start gap-2 text-sm text-zinc-300">
                          <span className="text-blood-500 mt-1">•</span>
                          {detail}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            ))}
          </div>
        </motion.section>

        {/* Human Impact */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="glass-card p-6 mb-8"
        >
          <h2 className="text-xl font-bold mb-4">Human Impact</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {investigationData.humanImpact.map((impact, index) => (
              <div key={index} className="p-3 bg-zinc-900/50 border border-zinc-800">
                <span className="text-xs text-blood-400 uppercase">{impact.category}</span>
                <p className="text-sm text-zinc-300 mt-1">{impact.story}</p>
              </div>
            ))}
          </div>
        </motion.section>

        {/* Legal Challenges */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.35 }}
          className="glass-card p-6 mb-8"
        >
          <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
            <Scale className="w-5 h-5 text-blood-500" />
            Legal Challenges
          </h2>
          <div className="space-y-3">
            {investigationData.legalChallenges.map((challenge, index) => (
              <div key={index} className="flex items-center justify-between p-3 bg-zinc-900/50 border border-zinc-800">
                <div>
                  <span className="font-medium text-zinc-200">{challenge.court}</span>
                  <p className="text-sm text-zinc-400">{challenge.ruling}</p>
                </div>
                <span className="text-xs text-zinc-500">{challenge.date}</span>
              </div>
            ))}
          </div>
        </motion.section>

        {/* Timeline */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="glass-card p-6 mb-8"
        >
          <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
            <Calendar className="w-5 h-5 text-blood-500" />
            Timeline
          </h2>
          <div className="space-y-4 max-h-96 overflow-y-auto">
            {investigationData.timeline.map((item, index) => (
              <div key={index} className="relative pl-4 border-l-2 border-zinc-800">
                <div className="absolute -left-[5px] top-0 w-2 h-2 rounded-full bg-blood-500" />
                <p className="text-xs text-blood-500 font-mono">{item.date}</p>
                <p className="text-sm text-zinc-300">{item.event}</p>
              </div>
            ))}
          </div>
        </motion.section>

        {/* Sources */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.45 }}
          className="glass-card p-6"
        >
          <h2 className="text-xl font-bold mb-4">Sources & Documentation</h2>
          <div className="space-y-2">
            {investigationData.sources.map((source, index) => (
              <a
                key={index}
                href={source.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between p-3 bg-zinc-900/50 hover:bg-zinc-800/50 border border-zinc-800 transition-colors"
              >
                <div>
                  <span className="text-zinc-200">{source.title}</span>
                  <span className="block text-xs text-zinc-500">{source.type}</span>
                </div>
                <ExternalLink className="w-4 h-4 text-zinc-600" />
              </a>
            ))}
          </div>
        </motion.section>
      </div>
    </div>
  );
}
