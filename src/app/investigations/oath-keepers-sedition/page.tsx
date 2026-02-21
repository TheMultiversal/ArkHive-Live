'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import {
  ArrowLeft,
  AlertTriangle,
  Users,
  Calendar,
  FileText,
  ExternalLink,
  Scale,
  Shield,
  Target,
} from 'lucide-react';
import GlitchText from '@/components/effects/GlitchText';

const investigation = {
  title: 'Oath Keepers Seditious Conspiracy',
  subtitle: 'The Militia That Planned Armed Insurrection',
  severity: 'critical',
  status: 'Convictions Final',
  summary: 'The Oath Keepers, a far-right militia founded by Stewart Rhodes, was convicted of seditious conspiracy for their role in the January 6 Capitol attack. The group positioned armed "Quick Reaction Force" teams in Virginia ready to bring weapons into DC, coordinated a military-style "stack" formation breach of the Capitol, and spent $20,000+ on weapons and tactical gear in preparation.',
  keyFigures: [
    { name: 'Stewart Rhodes', role: 'Founder - Coordinated attack, positioned armed QRF teams', href: '/entities/individuals/stewart-rhodes', status: 'Convicted - 18 years' },
    { name: 'Kelly Meggs', role: 'Florida Chapter Leader - Led Capitol stack breach', href: '/entities/individuals/kelly-meggs', status: 'Convicted - 12 years' },
    { name: 'Kenneth Harrelson', role: 'Florida Member - Part of stack formation', href: '/entities/individuals/kenneth-harrelson', status: 'Convicted - 4 years' },
    { name: 'Jessica Watkins', role: 'Ohio Chapter Leader - Led tactical team', href: '/entities/individuals/jessica-watkins', status: 'Convicted - 8.5 years' },
    { name: 'Thomas Caldwell', role: 'Logistics coordinator - Planned QRF staging', status: 'Convicted - 14 months' },
    { name: 'Roger Stone', role: 'Oath Keepers provided security, coordination alleged', href: '/entities/individuals/roger-stone', status: 'Investigation Ongoing' },
    { name: 'Donald Trump', role: 'Rhodes sought pardon, offered militia as "Trump\'s army"', href: '/entities/individuals/donald-trump', status: 'Never Condemned Group' },
  ],
  qrf: {
    description: 'Quick Reaction Force - Armed teams staged in Virginia',
    locations: ['Comfort Inn, Ballston, Virginia', 'Additional staging areas in Maryland'],
    purpose: 'Ready to ferry weapons into DC if Trump invoked Insurrection Act',
    weapons: 'AR-15s, ammunition, tactical equipment staged for rapid deployment',
    significance: 'Represents premeditated plan for armed conflict, not spontaneous protest',
  },
  timeline: [
    { date: 'March 2009', event: 'Stewart Rhodes founds Oath Keepers' },
    { date: 'Nov 3, 2020', event: 'Election Day - Biden wins' },
    { date: 'Nov 9, 2020', event: 'Rhodes calls for "bloody civil war" if Trump doesn\'t act' },
    { date: 'Nov-Dec 2020', event: 'Oath Keepers attend "Stop the Steal" rallies nationwide' },
    { date: 'Dec 14, 2020', event: 'Rhodes spends $17,500 on weapons and equipment' },
    { date: 'Dec 19, 2020', event: 'Trump tweets "Be there, will be wild!"' },
    { date: 'Dec 31, 2020', event: 'Rhodes purchases night vision, tactical gear' },
    { date: 'Jan 3, 2021', event: 'Oath Keepers travel to DC with weapons caches' },
    { date: 'Jan 5, 2021', event: 'QRF teams staged at Comfort Inn with weapons' },
    { date: 'Jan 5, 2021', event: 'Rhodes meets with Proud Boys leadership' },
    { date: 'Jan 6, Morning', event: 'Rhodes stations himself at Capitol, directs operations' },
    { date: 'Jan 6, 2:00 PM', event: 'First Oath Keepers stack enters Capitol' },
    { date: 'Jan 6, 2:30 PM', event: 'Second stack enters through Rotunda door' },
    { date: 'Jan 6, 2:40 PM', event: 'Members reach Speaker Pelosi\'s office area' },
    { date: 'Jan 6, Evening', event: 'Rhodes texts: "We should have brought rifles"' },
    { date: 'Jan 2022', event: 'Rhodes arrested on seditious conspiracy charges' },
    { date: 'Nov 2022', event: 'Rhodes convicted of seditious conspiracy' },
    { date: 'May 2023', event: 'Rhodes sentenced to 18 years in prison' },
  ],
  charges: [
    { statute: '18 U.S.C. § 2384', description: 'Seditious conspiracy', defendants: 'Rhodes, Meggs' },
    { statute: '18 U.S.C. § 1512(k)', description: 'Conspiracy to obstruct an official proceeding', defendants: 'All defendants' },
    { statute: '18 U.S.C. § 1512(c)(2)', description: 'Obstruction of an official proceeding', defendants: 'All defendants' },
    { statute: '18 U.S.C. § 372', description: 'Conspiracy to prevent officer from discharging duties', defendants: 'Multiple' },
    { statute: '18 U.S.C. § 1512(c)(1)', description: 'Tampering with documents', defendants: 'Rhodes' },
  ],
  evidence: [
    'Signal and Zello communications planning attack',
    '$20,000+ in weapons purchases documented',
    'Video of military "stack" formation entering Capitol',
    'Testimony from multiple cooperating witnesses',
    'Messages about "bloody civil war" and armed conflict',
    'Evidence of QRF weapons caches in Virginia',
    'Rhodes communications with other militia leaders',
    'Post-January 6 messages regretting not bringing rifles',
  ],
  sentences: {
    total: '53+ years combined',
    rhodes: '18 years',
    meggs: '12 years',
    watkins: '8.5 years',
    harrelson: '4 years',
    caldwell: '14 months',
  },
  sources: [
    { title: 'January 6 Committee Final Report', url: 'https://www.govinfo.gov/content/pkg/GPO-J6-REPORT/pdf/GPO-J6-REPORT.pdf', date: '2022' },
    { title: 'Trial Evidence - QRF Documentation', url: 'https://www.justice.gov/usao-dc/capitol-breach-cases', date: '2022' },
  ],
};

export default function OathKeepersSeditionPage() {
  return (
    <div className="min-h-screen pt-20 lg:pt-24 pb-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <Link
          href="/investigations"
          className="inline-flex items-center gap-2 text-zinc-400 hover:text-blood-500 transition-colors mb-6 pt-4"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Investigations
        </Link>

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="border-2 border-blood-800/60 bg-black/80 p-6 lg:p-8 mb-8"
        >
          <div className="flex items-center gap-3 mb-4">
            <span className="px-3 py-1 text-xs font-bold uppercase border border-red-500/30 bg-red-500/20 text-red-400">
              {investigation.severity}
            </span>
            <span className="px-3 py-1 text-xs font-bold uppercase border border-green-500/30 bg-green-500/20 text-green-400">
              {investigation.status}
            </span>
          </div>
          <h1 className="text-3xl lg:text-4xl font-black text-white uppercase tracking-wider mb-2">
            <GlitchText text={investigation.title} />
          </h1>
          <p className="text-lg text-blood-500 font-bold mb-4">{investigation.subtitle}</p>
          <p className="text-zinc-400 leading-relaxed">{investigation.summary}</p>
        </motion.div>

        {/* QRF Warning Box */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="border-2 border-red-800/60 bg-red-950/20 p-6 mb-8"
        >
          <h2 className="text-xl font-bold text-white uppercase tracking-wider mb-4 flex items-center gap-2">
            <Target className="w-5 h-5 text-red-500" />
            Quick Reaction Force (QRF) - Armed Teams
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-black/50 p-4 border border-red-500/30">
              <p className="text-red-400 font-bold mb-2">Purpose</p>
              <p className="text-sm text-zinc-400">{investigation.qrf.purpose}</p>
            </div>
            <div className="bg-black/50 p-4 border border-red-500/30">
              <p className="text-red-400 font-bold mb-2">Weapons</p>
              <p className="text-sm text-zinc-400">{investigation.qrf.weapons}</p>
            </div>
            <div className="bg-black/50 p-4 border border-zinc-800">
              <p className="text-zinc-300 font-bold mb-2">Staging Locations</p>
              <ul className="text-sm text-zinc-400">
                {investigation.qrf.locations.map((loc, idx) => (
                  <li key={idx}>• {loc}</li>
                ))}
              </ul>
            </div>
            <div className="bg-black/50 p-4 border border-blood-500/30">
              <p className="text-blood-400 font-bold mb-2">Significance</p>
              <p className="text-sm text-zinc-400">{investigation.qrf.significance}</p>
            </div>
          </div>
        </motion.div>

        {/* Sentences Box */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15 }}
          className="border-2 border-zinc-800 bg-black/80 p-6 mb-8"
        >
          <h2 className="text-xl font-bold text-white uppercase tracking-wider mb-4 flex items-center gap-2">
            <Scale className="w-5 h-5 text-blood-500" />
            Prison Sentences
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
            <div className="bg-black/50 p-4 border border-red-500/30">
              <p className="text-3xl font-black text-red-500">18 YRS</p>
              <p className="text-sm text-zinc-400">Stewart Rhodes</p>
            </div>
            <div className="bg-black/50 p-4 border border-zinc-800">
              <p className="text-3xl font-black text-orange-500">12 YRS</p>
              <p className="text-sm text-zinc-400">Kelly Meggs</p>
            </div>
            <div className="bg-black/50 p-4 border border-zinc-800">
              <p className="text-3xl font-black text-yellow-500">8.5 YRS</p>
              <p className="text-sm text-zinc-400">Jessica Watkins</p>
            </div>
            <div className="bg-black/50 p-4 border border-zinc-800">
              <p className="text-3xl font-black text-yellow-500">4 YRS</p>
              <p className="text-sm text-zinc-400">Kenneth Harrelson</p>
            </div>
            <div className="bg-black/50 p-4 border border-zinc-800">
              <p className="text-3xl font-black text-zinc-400">14 MO</p>
              <p className="text-sm text-zinc-400">Thomas Caldwell</p>
            </div>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Key Figures */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="glass-card p-6"
            >
              <h2 className="text-xl font-bold text-white uppercase tracking-wider mb-4 flex items-center gap-2">
                <Users className="w-5 h-5 text-blood-500" />
                Key Figures
              </h2>
              <div className="space-y-3">
                {investigation.keyFigures.map((figure, idx) => (
                  <div key={idx} className="flex items-start justify-between p-3 bg-zinc-900/50 border border-zinc-800">
                    <div className="flex-1">
                      {figure.href ? (
                        <Link href={figure.href} className="font-bold text-blood-400 hover:text-blood-300 transition-colors">
                          {figure.name}
                        </Link>
                      ) : (
                        <span className="font-bold text-white">{figure.name}</span>
                      )}
                      <p className="text-sm text-zinc-400 mt-1">{figure.role}</p>
                    </div>
                    <span className="text-xs px-2 py-1 bg-red-500/20 text-red-400 border border-red-500/30">
                      {figure.status}
                    </span>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Timeline */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="glass-card p-6"
            >
              <h2 className="text-xl font-bold text-white uppercase tracking-wider mb-4 flex items-center gap-2">
                <Calendar className="w-5 h-5 text-blood-500" />
                Timeline
              </h2>
              <div className="space-y-4">
                {investigation.timeline.map((item, idx) => (
                  <div key={idx} className="relative pl-4 border-l-2 border-zinc-800">
                    <div className="absolute -left-[5px] top-0 w-2 h-2 rounded-full bg-blood-500" />
                    <p className="text-xs text-blood-500 font-mono">{item.date}</p>
                    <p className="text-sm text-zinc-300">{item.event}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Charges */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              className="glass-card p-6"
            >
              <h3 className="text-lg font-bold text-white uppercase tracking-wider mb-4 flex items-center gap-2">
                <Scale className="w-5 h-5 text-blood-500" />
                Criminal Charges
              </h3>
              <div className="space-y-3">
                {investigation.charges.map((charge, idx) => (
                  <div key={idx} className="p-3 bg-zinc-900/50 border border-zinc-800">
                    <code className="text-xs text-blood-400 font-mono">{charge.statute}</code>
                    <p className="text-sm text-zinc-300 mt-1">{charge.description}</p>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Evidence */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.1 }}
              className="glass-card p-6"
            >
              <h3 className="text-lg font-bold text-white uppercase tracking-wider mb-4 flex items-center gap-2">
                <FileText className="w-5 h-5 text-blood-500" />
                Key Evidence
              </h3>
              <ul className="space-y-2">
                {investigation.evidence.map((item, idx) => (
                  <li key={idx} className="text-sm text-zinc-400 flex items-start gap-2">
                    <span className="text-blood-500">•</span>
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Sources */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="glass-card p-6"
            >
              <h3 className="text-lg font-bold text-white uppercase tracking-wider mb-4">
                Sources
              </h3>
              <div className="space-y-2">
                {investigation.sources.map((source, idx) => (
                  <a
                    key={idx}
                    href={source.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-start gap-2 p-2 text-sm text-zinc-400 hover:text-blood-400 hover:bg-zinc-900/50 transition-colors"
                  >
                    <ExternalLink className="w-4 h-4 mt-0.5 flex-shrink-0" />
                    <div>
                      <span>{source.title}</span>
                      <span className="text-zinc-600 ml-2">({source.date})</span>
                    </div>
                  </a>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}
