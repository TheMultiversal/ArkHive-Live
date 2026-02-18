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
  Shield,
  Key,
} from 'lucide-react';
import GlitchText from '@/components/effects/GlitchText';

const investigationData = {
  title: 'Corrupt Pardons',
  subtitle: 'Pardoning Co-Conspirators, Criminals, and Political Allies',
  severity: 'high' as const,
  status: 'Documented - Pardons Issued',
  lastUpdated: 'February 2026',
  summary: `In his final weeks in office, Donald Trump issued a wave of controversial pardons to co-conspirators, political allies, and cronies. These included pardons for individuals convicted in the Mueller investigation who refused to cooperate with prosecutors, allies convicted of fraud, and even a preemptive pardon for Steve Bannon just hours before he was to face fraud charges. Legal scholars have argued these pardons may constitute obstruction of justice and abuse of power.`,
  
  pardonStats: {
    totalPardons: '237',
    commutations: '94',
    russiaProbe: '6',
    finalMonth: '143',
    selfPardon: 'Considered but not issued',
  },

  keyFigures: [
    { name: 'Donald Trump', role: 'President - Issued corrupt pardons', href: '/entities/individuals/donald-trump' },
    { name: 'Paul Manafort', role: 'Campaign Chair - Pardoned for witness tampering, fraud', href: '/entities/individuals/paul-manafort' },
    { name: 'Michael Flynn', role: 'NSA - Pardoned for lying to FBI', href: '/entities/individuals/michael-flynn' },
    { name: 'Roger Stone', role: 'Advisor - Commuted and pardoned for obstruction', href: '/entities/individuals/roger-stone' },
    { name: 'Steve Bannon', role: 'Strategist - Pardoned for Build the Wall fraud', href: '/entities/individuals/steve-bannon' },
    { name: 'Charles Kushner', role: 'Jared\'s father - Pardoned for witness tampering', href: '/entities/individuals/charles-kushner' },
  ],

  russiaInvestigationPardons: [
    {
      name: 'Michael Flynn',
      date: 'November 25, 2020',
      crimes: 'Lying to FBI about Russia contacts',
      context: 'Cooperated briefly, then withdrew. Pardoned after election loss.',
      obstruction: 'Eliminated testimony against Trump',
    },
    {
      name: 'Paul Manafort',
      date: 'December 23, 2020',
      crimes: 'Conspiracy, witness tampering, financial fraud',
      context: 'Refused to fully cooperate despite cooperation agreement.',
      obstruction: 'Praised for not "flipping," rewarded with pardon',
    },
    {
      name: 'Roger Stone',
      date: 'December 23, 2020 (pardon), July 10, 2020 (commutation)',
      crimes: 'Obstruction, witness tampering, lying to Congress',
      context: 'Stone knew about WikiLeaks contacts, refused to testify.',
      obstruction: 'Stone implied he had damaging info on Trump',
    },
    {
      name: 'George Papadopoulos',
      date: 'December 22, 2020',
      crimes: 'Lying to FBI about Russia contacts',
      context: 'His conversations triggered the Russia investigation.',
      obstruction: 'Rewarded loyalty with pardon',
    },
    {
      name: 'Alex van der Zwaan',
      date: 'December 22, 2020',
      crimes: 'Lying to investigators about Manafort/Gates contacts',
      context: 'Married to daughter of Russian oligarch.',
      obstruction: 'Protected Manafort-connected information',
    },
  ],

  cronyPardons: [
    {
      name: 'Steve Bannon',
      date: 'January 19, 2021',
      crimes: 'Fraud - We Build the Wall scheme (preemptive)',
      connection: 'Trump campaign CEO, chief strategist',
      controversy: 'Pardoned hours before leaving office, before trial',
    },
    {
      name: 'Charles Kushner',
      date: 'December 23, 2020',
      crimes: 'Tax evasion, witness tampering, campaign finance',
      connection: 'Jared Kushner\'s father',
      controversy: 'Hired prostitute to entrap brother-in-law witness',
    },
    {
      name: 'Elliott Broidy',
      date: 'January 19, 2021',
      crimes: 'Illegal lobbying (1MDB scandal)',
      connection: 'RNC finance chair, Trump donor',
      controversy: 'Lobbied Trump to drop 1MDB investigation',
    },
    {
      name: 'Lil Wayne',
      date: 'January 19, 2021',
      crimes: 'Federal weapons charge',
      connection: 'Endorsed Trump before election',
      controversy: 'Pardon came after public endorsement',
    },
  ],

  warCrimePardons: [
    {
      name: 'Eddie Gallagher',
      date: 'November 2019',
      context: 'Navy SEAL accused of war crimes in Iraq',
      action: 'Restored rank after demotion for posing with corpse',
      controversy: 'Military objected strongly',
    },
    {
      name: 'Clint Lorance',
      date: 'November 2019',
      context: 'Army officer convicted of murder in Afghanistan',
      action: 'Full pardon',
      controversy: 'His own soldiers testified against him',
    },
    {
      name: 'Blackwater contractors',
      date: 'December 22, 2020',
      context: 'Convicted of Nisour Square massacre (14 Iraqi civilians)',
      action: 'Full pardons for Nicholas Slatten and 3 others',
      controversy: 'International condemnation, Iraq outrage',
    },
  ],

  obstructionAnalysis: [
    'Pardoning witnesses who could implicate Trump',
    'Dangling pardons during investigation to encourage silence',
    'Pattern of pardoning those who refused to cooperate',
    'Manafort told he would be "taken care of"',
    'Stone implied pardon in exchange for silence',
    'Creates precedent for future obstruction via pardon power',
  ],

  timeline: [
    { date: 'March 2018', event: 'Trump begins hinting at pardons for Russia probe figures' },
    { date: 'August 2018', event: 'Trump says Manafort "refused to break"' },
    { date: 'July 10, 2020', event: 'Trump commutes Roger Stone\'s sentence days before prison' },
    { date: 'November 25, 2020', event: 'Michael Flynn pardoned (post-election loss)' },
    { date: 'December 22, 2020', event: 'Papadopoulos, van der Zwaan, Blackwater contractors pardoned' },
    { date: 'December 23, 2020', event: 'Manafort, Stone, Charles Kushner pardoned' },
    { date: 'January 19, 2021', event: 'Steve Bannon pardoned hours before Trump leaves office' },
    { date: 'January 20, 2021', event: 'Trump leaves office, did not issue self-pardon' },
    { date: 'August 2022', event: 'Bannon convicted in state charges (not pardonable)' },
    { date: 'October 2022', event: 'Bannon sentenced to 4 months for contempt' },
  ],

  legalAnalysis: {
    pardonPowerLimits: [
      'Cannot pardon state crimes',
      'Cannot pardon impeachment',
      'Self-pardon constitutionally questionable',
      'May not pardon to obstruct justice',
    ],
    precedentConcerns: [
      'Establishes that witnesses can refuse to cooperate expecting pardons',
      'Undermines rule of law and accountability',
      'Empowers future presidents to obstruct investigations',
      'Rewards criminal loyalty over truth-telling',
    ],
  },

  sources: [
    { title: 'DOJ Pardon Database', url: 'https://www.justice.gov/pardon/pardons-granted-president-donald-trump', type: 'Government Database' },
    { title: 'Analysis: Trump\'s Final Pardons', url: 'https://www.nytimes.com/2021/01/20/us/politics/trump-pardons.html', type: 'News Analysis' },
    { title: 'Obstruction via Pardon Power', url: 'https://www.lawfareblog.com/can-president-obstruct-justice-through-pardon-power', type: 'Legal Analysis' },
    { title: 'Manafort Pardon Details', url: 'https://www.washingtonpost.com/national-security/trump-pardon-manafort-stone-kushner/', type: 'News Report' },
    { title: 'Bannon Pardon Analysis', url: 'https://www.nytimes.com/2021/01/20/us/politics/trump-bannon-pardon.html', type: 'News Report' },
    { title: 'War Crimes Pardons Controversy', url: 'https://www.nytimes.com/2019/11/15/us/trump-pardons.html', type: 'News Report' },
  ],
};

const severityColors = {
  critical: 'bg-blood-600/20 text-blood-400 border-blood-600/30',
  high: 'bg-orange-600/20 text-orange-400 border-orange-600/30',
  medium: 'bg-yellow-600/20 text-yellow-400 border-yellow-600/30',
  low: 'bg-green-600/20 text-green-400 border-green-600/30',
};

export default function PardonsPage() {
  const [expandedCategory, setExpandedCategory] = useState<string | null>('russia');

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
            <span className="text-blood-500">Corrupt Pardons</span>
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
        {/* Stats */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-12"
        >
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
            <div className="glass-card p-4 text-center border-l-4 border-blood-600">
              <Key className="w-6 h-6 text-blood-500 mx-auto mb-2" />
              <p className="text-xl font-black text-blood-500">{investigationData.pardonStats.totalPardons}</p>
              <p className="text-xs text-zinc-400">Total Pardons</p>
            </div>
            <div className="glass-card p-4 text-center border-l-4 border-blood-600">
              <Scale className="w-6 h-6 text-blood-500 mx-auto mb-2" />
              <p className="text-xl font-black text-blood-500">{investigationData.pardonStats.commutations}</p>
              <p className="text-xs text-zinc-400">Commutations</p>
            </div>
            <div className="glass-card p-4 text-center border-l-4 border-orange-600">
              <Shield className="w-6 h-6 text-orange-500 mx-auto mb-2" />
              <p className="text-xl font-black text-orange-500">{investigationData.pardonStats.russiaProbe}</p>
              <p className="text-xs text-zinc-400">Russia Probe</p>
            </div>
            <div className="glass-card p-4 text-center border-l-4 border-orange-600">
              <Calendar className="w-6 h-6 text-orange-500 mx-auto mb-2" />
              <p className="text-xl font-black text-orange-500">{investigationData.pardonStats.finalMonth}</p>
              <p className="text-xs text-zinc-400">Final Month</p>
            </div>
            <div className="glass-card p-4 text-center border-l-4 border-yellow-600">
              <AlertTriangle className="w-6 h-6 text-yellow-500 mx-auto mb-2" />
              <p className="text-xs font-black text-yellow-500">{investigationData.pardonStats.selfPardon}</p>
              <p className="text-xs text-zinc-400">Self-Pardon</p>
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

        {/* Russia Investigation Pardons */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="glass-card p-6 mb-8 border-l-4 border-blood-600"
        >
          <h2 className="text-xl font-bold mb-4">Russia Investigation Pardons</h2>
          <div className="space-y-4">
            {investigationData.russiaInvestigationPardons.map((pardon, index) => (
              <div key={index} className="p-4 bg-zinc-900/50 border border-zinc-800">
                <div className="flex justify-between items-start mb-2">
                  <span className="font-bold text-blood-400">{pardon.name}</span>
                  <span className="text-xs text-zinc-500">{pardon.date}</span>
                </div>
                <p className="text-sm text-zinc-400 mb-2"><strong>Crimes:</strong> {pardon.crimes}</p>
                <p className="text-sm text-zinc-400 mb-2"><strong>Context:</strong> {pardon.context}</p>
                <p className="text-sm text-blood-400"><strong>Obstruction:</strong> {pardon.obstruction}</p>
              </div>
            ))}
          </div>
        </motion.section>

        {/* Crony Pardons */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.25 }}
          className="glass-card p-6 mb-8"
        >
          <h2 className="text-xl font-bold mb-4">Crony & Ally Pardons</h2>
          <div className="space-y-4">
            {investigationData.cronyPardons.map((pardon, index) => (
              <div key={index} className="p-4 bg-zinc-900/50 border border-zinc-800">
                <div className="flex justify-between items-start mb-2">
                  <span className="font-bold text-blood-400">{pardon.name}</span>
                  <span className="text-xs text-zinc-500">{pardon.date}</span>
                </div>
                <p className="text-sm text-zinc-400 mb-1"><strong>Crimes:</strong> {pardon.crimes}</p>
                <p className="text-sm text-zinc-400 mb-1"><strong>Connection:</strong> {pardon.connection}</p>
                <p className="text-sm text-orange-400"><strong>Controversy:</strong> {pardon.controversy}</p>
              </div>
            ))}
          </div>
        </motion.section>

        {/* War Crime Pardons */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="glass-card p-6 mb-8"
        >
          <h2 className="text-xl font-bold mb-4">War Crimes Pardons</h2>
          <div className="space-y-4">
            {investigationData.warCrimePardons.map((pardon, index) => (
              <div key={index} className="p-4 bg-zinc-900/50 border border-zinc-800">
                <div className="flex justify-between items-start mb-2">
                  <span className="font-bold text-blood-400">{pardon.name}</span>
                  <span className="text-xs text-zinc-500">{pardon.date}</span>
                </div>
                <p className="text-sm text-zinc-400 mb-1"><strong>Context:</strong> {pardon.context}</p>
                <p className="text-sm text-zinc-400 mb-1"><strong>Action:</strong> {pardon.action}</p>
                <p className="text-sm text-orange-400"><strong>Controversy:</strong> {pardon.controversy}</p>
              </div>
            ))}
          </div>
        </motion.section>

        {/* Obstruction Analysis */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.35 }}
          className="glass-card p-6 mb-8"
        >
          <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
            <AlertTriangle className="w-5 h-5 text-blood-500" />
            Obstruction Analysis
          </h2>
          <ul className="space-y-2">
            {investigationData.obstructionAnalysis.map((point, i) => (
              <li key={i} className="flex items-start gap-2 text-sm text-zinc-300">
                <span className="text-blood-500">•</span>
                {point}
              </li>
            ))}
          </ul>
        </motion.section>

        {/* Legal Analysis */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="glass-card p-6 mb-8"
        >
          <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
            <Scale className="w-5 h-5 text-blood-500" />
            Legal Analysis
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <p className="text-xs text-zinc-500 uppercase mb-2">Pardon Power Limits</p>
              <ul className="space-y-1">
                {investigationData.legalAnalysis.pardonPowerLimits.map((limit, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-zinc-300">
                    <span className="text-blood-500">•</span>
                    {limit}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <p className="text-xs text-zinc-500 uppercase mb-2">Precedent Concerns</p>
              <ul className="space-y-1">
                {investigationData.legalAnalysis.precedentConcerns.map((concern, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-zinc-300">
                    <span className="text-orange-500">•</span>
                    {concern}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </motion.section>

        {/* Timeline */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.45 }}
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
          transition={{ delay: 0.5 }}
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
