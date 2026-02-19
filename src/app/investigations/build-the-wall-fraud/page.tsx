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
  DollarSign,
  Building2,
  Gavel,
  Coins,
} from 'lucide-react';
import GlitchText from '@/components/effects/GlitchText';

const investigationData = {
  title: 'Build the Wall Fraud',
  subtitle: 'Steve Bannon, Brian Kolfage, and the $25 Million "We Build the Wall" Scheme',
  severity: 'high' as const,
  status: 'Convictions + Presidential Pardon',
  lastUpdated: 'February 2026',
  summary: `"We Build the Wall" was a crowdfunding campaign that raised over $25 million from Trump supporters who believed their donations would go toward building a border wall. Instead, Steve Bannon, Brian Kolfage, and co-conspirators allegedly diverted millions for personal use|including Bannon's $1 million+ for personal expenses. Federal prosecutors charged them with wire fraud and money laundering conspiracy. Trump pardoned Bannon hours before leaving office, preventing his federal trial, though Bannon later faced state charges in New York.`,
  
  financials: {
    totalRaised: '$25+ million',
    allegedStolen: '$15+ million',
    bannonTake: '$1+ million',
    kolfageTake: '$350,000+',
    donorCount: '500,000+',
  },

  keyFigures: [
    { name: 'Steve Bannon', role: 'Chairman - Received $1M+, pardoned', href: '/entities/individuals/steve-bannon' },
    { name: 'Brian Kolfage', role: 'Founder - Triple amputee veteran, convicted', href: '/entities/individuals/brian-kolfage' },
    { name: 'Donald Trump', role: 'President - Pardoned Bannon', href: '/entities/individuals/donald-trump' },
    { name: 'Andrew Badolato', role: 'Co-defendant - Pleaded guilty', href: '/entities/individuals/andrew-badolato' },
    { name: 'Timothy Shea', role: 'Co-defendant - Convicted at trial', href: '/entities/individuals/timothy-shea' },
  ],

  scheme: {
    publicPitch: '"100% of donations go to building the wall"',
    reality: 'Millions funneled through shell companies to organizers',
    method: [
      'Created "We Build the Wall, Inc." as 501(c)(4) nonprofit',
      'Promoted false promise that 100% went to construction',
      'Routed money through shell company "Non-Profit Strategies"',
      'Fabricated invoices and vendor agreements',
      'Used corporate entities to hide personal payments',
      'Bannon received payments through nonprofit he controlled',
    ],
    kolfageExpenses: [
      'Boat payments',
      'Luxury SUV',
      'Golf cart',
      'Jewelry',
      'Cosmetic surgery',
      'Credit card debt',
      'Home renovations',
    ],
    bannonExpenses: [
      'Personal expenses',
      'Hundreds of thousands in undisclosed payments',
      'Routed through nonprofit organization he controlled',
    ],
  },

  wallClaimed: {
    milesBuilt: '~3 miles (of private wall)',
    location: 'Sunland Park, New Mexico',
    quality: 'Structural concerns raised',
    comparison: 'Federal government built ~450 miles total (mostly replacement)',
  },

  federalCharges: {
    charges: [
      'Conspiracy to Commit Wire Fraud',
      'Conspiracy to Commit Money Laundering',
    ],
    maxSentence: '40 years',
    prosecutor: 'Southern District of New York (SDNY)',
    indictmentDate: 'August 2020',
    arrestedOn: 'Yacht off Connecticut coast',
  },

  trumpPardon: {
    date: 'January 20, 2021',
    timing: 'Hours before leaving office',
    scope: 'Full pardon for Bannon only',
    coDefendants: 'No pardons for Kolfage, Badolato, Shea',
    reaction: 'Prosecutors had called scheme "brazen" fraud',
    pattern: 'Part of 143 pardons/commutations on final day',
  },

  outcomes: [
    { person: 'Steve Bannon', federal: 'Pardoned', state: 'Indicted in NY (pending)', sentence: 'N/A' },
    { person: 'Brian Kolfage', federal: 'Pleaded guilty', state: 'N/A', sentence: '51 months' },
    { person: 'Andrew Badolato', federal: 'Pleaded guilty', state: 'N/A', sentence: '36 months' },
    { person: 'Timothy Shea', federal: 'Convicted at trial', state: 'N/A', sentence: '63 months' },
  ],

  newYorkCharges: {
    prosecutor: 'Manhattan District Attorney',
    charges: [
      'Money Laundering in the Second Degree',
      'Conspiracy in the Fourth Degree',
      'Conspiracy in the Fifth Degree',
      'Scheme to Defraud in the First Degree',
    ],
    status: 'Case dismissed on procedural grounds; DA appealing',
    note: 'Presidential pardon does not apply to state charges',
  },

  timeline: [
    { date: 'December 2018', event: 'We Build the Wall campaign launches on GoFundMe' },
    { date: 'January 2019', event: 'Campaign raises $20+ million in first month' },
    { date: 'January 2019', event: 'GoFundMe returns donations after promise to build wall unmet' },
    { date: 'January 2019', event: 'Campaign restructures as nonprofit to continue raising' },
    { date: 'March 2019', event: 'Steve Bannon joins board as chairman' },
    { date: 'May 2019', event: 'Organization claims to build first section of wall' },
    { date: 'August 2020', event: 'Bannon arrested on yacht by US Postal Inspection Service' },
    { date: 'August 2020', event: 'SDNY unseals indictment against all four defendants' },
    { date: 'August 2020', event: 'Trump distances himself from project' },
    { date: 'April 2021', event: 'Kolfage pleads guilty to wire fraud' },
    { date: 'April 2021', event: 'Badolato pleads guilty to wire fraud' },
    { date: 'January 2021', event: 'Trump pardons Bannon hours before leaving office' },
    { date: 'September 2022', event: 'Bannon indicted on state charges in New York' },
    { date: 'April 2023', event: 'Kolfage sentenced to 51 months' },
    { date: 'May 2023', event: 'Shea convicted and sentenced to 63 months' },
    { date: 'January 2024', event: 'NY state case against Bannon dismissed on procedural grounds' },
    { date: '2024', event: 'Manhattan DA appeals dismissal' },
  ],

  trumpDistancing: {
    beforeArrest: 'Trump praised wall-building efforts publicly',
    afterArrest: 'Trump claimed he "didn\'t know" about the project',
    quote: '"I know nothing about the project other than I didn\'t like when I read about it."',
    reality: 'Trump had previously promoted We Build the Wall on Twitter',
    pardon: 'Despite distancing, Trump pardoned Bannon anyway',
  },

  sources: [
    { title: 'DOJ Press Release: Bannon Indictment', url: 'https://www.justice.gov/usao-sdny/pr/leaders-we-build-wall-online-fundraising-campaign-charged-defrauding-hundreds-thousands', type: 'DOJ Announcement' },
    { title: 'SDNY Indictment Document', url: 'https://www.justice.gov/usao-sdny/press-release/file/1305571/download', type: 'Court Document' },
    { title: 'Kolfage Sentencing', url: 'https://www.justice.gov/usao-sdny/pr/brian-kolfage-sentenced-more-four-years-prison-connection-we-build-wall-fraud-scheme', type: 'DOJ Press Release' },
    { title: 'NY State Indictment', url: 'https://www.manhattanda.org/d-a-bragg-announces-indictment-of-steve-bannon/', type: 'DA Announcement' },
    { title: 'Trump Pardon List', url: 'https://www.whitehouse.gov/briefing-room/statements-releases/2021/01/20/statement-from-the-press-secretary-regarding-executive-grants-of-clemency/', type: 'White House Archive' },
    { title: 'Washington Post: Build the Wall Collapse', url: 'https://www.washingtonpost.com/politics/2020/08/20/steve-bannon-arrest-we-build-wall/', type: 'News Investigation' },
  ],
};

const severityColors = {
  critical: 'bg-blood-600/20 text-blood-400 border-blood-600/30',
  high: 'bg-orange-600/20 text-orange-400 border-orange-600/30',
  medium: 'bg-yellow-600/20 text-yellow-400 border-yellow-600/30',
  low: 'bg-green-600/20 text-green-400 border-green-600/30',
};

export default function BuildTheWallFraudPage() {
  const [expandedSection, setExpandedSection] = useState<string | null>('scheme');

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
            <span className="text-blood-500">Build the Wall Fraud</span>
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
              <DollarSign className="w-6 h-6 text-blood-500 mx-auto mb-2" />
              <p className="text-xl font-black text-blood-500">{investigationData.financials.totalRaised}</p>
              <p className="text-xs text-zinc-400">Total Raised</p>
            </div>
            <div className="glass-card p-4 text-center border-l-4 border-blood-600">
              <Coins className="w-6 h-6 text-blood-500 mx-auto mb-2" />
              <p className="text-xl font-black text-blood-500">{investigationData.financials.allegedStolen}</p>
              <p className="text-xs text-zinc-400">Allegedly Stolen</p>
            </div>
            <div className="glass-card p-4 text-center border-l-4 border-orange-600">
              <DollarSign className="w-6 h-6 text-orange-500 mx-auto mb-2" />
              <p className="text-xl font-black text-orange-500">{investigationData.financials.bannonTake}</p>
              <p className="text-xs text-zinc-400">Bannon&apos;s Take</p>
            </div>
            <div className="glass-card p-4 text-center border-l-4 border-orange-600">
              <DollarSign className="w-6 h-6 text-orange-500 mx-auto mb-2" />
              <p className="text-xl font-black text-orange-500">{investigationData.financials.kolfageTake}</p>
              <p className="text-xs text-zinc-400">Kolfage&apos;s Take</p>
            </div>
            <div className="glass-card p-4 text-center border-l-4 border-yellow-600">
              <Users className="w-6 h-6 text-yellow-500 mx-auto mb-2" />
              <p className="text-xl font-black text-yellow-500">{investigationData.financials.donorCount}</p>
              <p className="text-xs text-zinc-400">Defrauded Donors</p>
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

        {/* The Scheme */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="glass-card p-6 mb-8 border-l-4 border-blood-600"
        >
          <h2 className="text-xl font-bold mb-4">The Fraud Scheme</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            <div className="p-4 bg-zinc-900/50 border border-zinc-800">
              <p className="text-xs text-zinc-500 uppercase">Public Promise</p>
              <p className="text-zinc-200 text-lg">{investigationData.scheme.publicPitch}</p>
            </div>
            <div className="p-4 bg-zinc-900/50 border border-blood-600/50">
              <p className="text-xs text-blood-500 uppercase">Reality</p>
              <p className="text-blood-400">{investigationData.scheme.reality}</p>
            </div>
          </div>

          <p className="text-xs text-zinc-500 uppercase mb-2">Method</p>
          <ul className="space-y-1 mb-4">
            {investigationData.scheme.method.map((step, i) => (
              <li key={i} className="flex items-start gap-2 text-sm text-zinc-300">
                <span className="text-blood-500">{i + 1}.</span>
                {step}
              </li>
            ))}
          </ul>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <p className="text-xs text-zinc-500 uppercase mb-2">Kolfage Expenses</p>
              <div className="flex flex-wrap gap-2">
                {investigationData.scheme.kolfageExpenses.map((expense, i) => (
                  <span key={i} className="px-2 py-1 bg-orange-900/20 text-orange-400 text-xs border border-orange-600/30">
                    {expense}
                  </span>
                ))}
              </div>
            </div>
            <div>
              <p className="text-xs text-zinc-500 uppercase mb-2">Bannon Expenses</p>
              <ul className="space-y-1">
                {investigationData.scheme.bannonExpenses.map((expense, i) => (
                  <li key={i} className="text-sm text-blood-400">• {expense}</li>
                ))}
              </ul>
            </div>
          </div>
        </motion.section>

        {/* Federal Charges */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.25 }}
          className="glass-card p-6 mb-8"
        >
          <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
            <Gavel className="w-5 h-5 text-blood-500" />
            Federal Charges
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-4">
            <div>
              <p className="text-xs text-zinc-500 uppercase">Prosecutor</p>
              <p className="text-zinc-200">{investigationData.federalCharges.prosecutor}</p>
            </div>
            <div>
              <p className="text-xs text-zinc-500 uppercase">Max Sentence</p>
              <p className="text-blood-400">{investigationData.federalCharges.maxSentence}</p>
            </div>
            <div>
              <p className="text-xs text-zinc-500 uppercase">Bannon Arrested</p>
              <p className="text-zinc-200">{investigationData.federalCharges.arrestedOn}</p>
            </div>
          </div>
          <p className="text-xs text-zinc-500 uppercase mb-2">Charges</p>
          <div className="space-y-2">
            {investigationData.federalCharges.charges.map((charge, i) => (
              <div key={i} className="p-3 bg-zinc-900/50 border border-zinc-800">
                <span className="text-blood-400">{charge}</span>
              </div>
            ))}
          </div>
        </motion.section>

        {/* Trump Pardon */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="glass-card p-6 mb-8 border-l-4 border-blood-600"
        >
          <h2 className="text-xl font-bold mb-4">The Presidential Pardon</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-4">
            <div>
              <p className="text-xs text-zinc-500 uppercase">Date</p>
              <p className="text-zinc-200">{investigationData.trumpPardon.date}</p>
            </div>
            <div>
              <p className="text-xs text-zinc-500 uppercase">Timing</p>
              <p className="text-orange-400">{investigationData.trumpPardon.timing}</p>
            </div>
            <div>
              <p className="text-xs text-zinc-500 uppercase">Scope</p>
              <p className="text-zinc-200">{investigationData.trumpPardon.scope}</p>
            </div>
            <div>
              <p className="text-xs text-zinc-500 uppercase">Co-Defendants</p>
              <p className="text-blood-400">{investigationData.trumpPardon.coDefendants}</p>
            </div>
          </div>
          <div className="p-4 bg-blood-900/20 border border-blood-600/30">
            <p className="text-sm text-zinc-400">Prosecutors had called the scheme &quot;brazen&quot; fraud, yet Trump pardoned Bannon despite publicly claiming he &quot;didn&apos;t know&quot; about the project.</p>
          </div>
        </motion.section>

        {/* Case Outcomes */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.35 }}
          className="glass-card p-6 mb-8"
        >
          <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
            <Scale className="w-5 h-5 text-blood-500" />
            Case Outcomes
          </h2>
          <div className="space-y-3">
            {investigationData.outcomes.map((outcome, index) => (
              <div key={index} className="p-4 bg-zinc-900/50 border border-zinc-800">
                <div className="flex justify-between items-start mb-2">
                  <span className="font-bold text-blood-400">{outcome.person}</span>
                  <span className="text-sm text-zinc-400">{outcome.sentence}</span>
                </div>
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div>
                    <p className="text-xs text-zinc-500">Federal</p>
                    <p className={outcome.federal === 'Pardoned' ? 'text-orange-400' : 'text-zinc-300'}>{outcome.federal}</p>
                  </div>
                  <div>
                    <p className="text-xs text-zinc-500">State</p>
                    <p className="text-zinc-300">{outcome.state}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </motion.section>

        {/* New York State Charges */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="glass-card p-6 mb-8"
        >
          <h2 className="text-xl font-bold mb-4">New York State Charges (Bannon)</h2>
          <div className="mb-4">
            <p className="text-xs text-zinc-500 uppercase">Prosecutor</p>
            <p className="text-zinc-200">{investigationData.newYorkCharges.prosecutor}</p>
          </div>
          <p className="text-xs text-zinc-500 uppercase mb-2">State Charges</p>
          <div className="space-y-2 mb-4">
            {investigationData.newYorkCharges.charges.map((charge, i) => (
              <div key={i} className="p-3 bg-zinc-900/50 border border-zinc-800">
                <span className="text-zinc-300">{charge}</span>
              </div>
            ))}
          </div>
          <div className="p-4 bg-orange-900/20 border border-orange-600/30">
            <p className="text-xs text-orange-500 uppercase mb-1">Status</p>
            <p className="text-sm text-orange-400">{investigationData.newYorkCharges.status}</p>
          </div>
          <p className="text-xs text-zinc-500 mt-3">{investigationData.newYorkCharges.note}</p>
        </motion.section>

        {/* Trump Distancing */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.45 }}
          className="glass-card p-6 mb-8"
        >
          <h2 className="text-xl font-bold mb-4">Trump Distancing Act</h2>
          <div className="space-y-3">
            <div className="p-3 bg-zinc-900/50 border border-zinc-800">
              <p className="text-xs text-zinc-500">Before Arrest</p>
              <p className="text-zinc-300">{investigationData.trumpDistancing.beforeArrest}</p>
            </div>
            <div className="p-3 bg-zinc-900/50 border border-zinc-800">
              <p className="text-xs text-zinc-500">After Arrest</p>
              <p className="text-zinc-300">{investigationData.trumpDistancing.afterArrest}</p>
            </div>
            <blockquote className="border-l-4 border-blood-600 pl-4 italic text-zinc-400">
              {investigationData.trumpDistancing.quote}
            </blockquote>
            <div className="p-3 bg-blood-900/20 border border-blood-600/30">
              <p className="text-xs text-blood-500">Reality</p>
              <p className="text-blood-400">{investigationData.trumpDistancing.reality}</p>
            </div>
            <div className="p-3 bg-orange-900/20 border border-orange-600/30">
              <p className="text-xs text-orange-500">Pardon</p>
              <p className="text-orange-400">{investigationData.trumpDistancing.pardon}</p>
            </div>
          </div>
        </motion.section>

        {/* Wall Actually Built */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="glass-card p-6 mb-8"
        >
          <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
            <Building2 className="w-5 h-5 text-blood-500" />
            Wall Actually Built
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div>
              <p className="text-xs text-zinc-500 uppercase">We Build the Wall</p>
              <p className="text-blood-400 font-bold">{investigationData.wallClaimed.milesBuilt}</p>
            </div>
            <div>
              <p className="text-xs text-zinc-500 uppercase">Location</p>
              <p className="text-zinc-300">{investigationData.wallClaimed.location}</p>
            </div>
            <div>
              <p className="text-xs text-zinc-500 uppercase">Quality</p>
              <p className="text-orange-400">{investigationData.wallClaimed.quality}</p>
            </div>
            <div>
              <p className="text-xs text-zinc-500 uppercase">Federal Total</p>
              <p className="text-zinc-400 text-sm">{investigationData.wallClaimed.comparison}</p>
            </div>
          </div>
        </motion.section>

        {/* Timeline */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.55 }}
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
          transition={{ delay: 0.6 }}
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
