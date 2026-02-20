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
  Skull,
  DollarSign,
  Building2,
  HeartPulse,
} from 'lucide-react';
import GlitchText from '@/components/effects/GlitchText';

const investigationData = {
  title: 'Opioid Crisis Response',
  subtitle: '500,000+ Dead, Regulatory Capture, and the Pharmaceutical Industry Connection',
  severity: 'critical' as const,
  status: 'Ongoing - Policy Failures Continue',
  lastUpdated: 'February 2026',
  summary: `The opioid epidemic has killed over 500,000 Americans since 1999, with the Trump administration's response characterized by regulatory capture, conflicts of interest, and policies that protected pharmaceutical interests over public health. Alex Azar, a former pharmaceutical executive who oversaw price increases, was appointed HHS Secretary. The administration's drug czar nominee had to withdraw after revelations he championed legislation weakening DEA enforcement. Meanwhile, the epidemic accelerated to record overdose deaths.`,
  
  deathToll: {
    totalDeaths: '500,000+',
    annualDeaths2020: '93,000+',
    dailyDeaths: '130+',
    economicCost: '$1.5 trillion/year',
    lifeExpectancy: 'Decreased 3 years',
  },

  keyFigures: [
    { name: 'Alex Azar', role: 'HHS Secretary - Former Eli Lilly exec', href: '/entities/individuals/alex-azar' },
    { name: 'Donald Trump', role: 'President - Appointed pharma-friendly regulators', href: '/entities/individuals/donald-trump' },
    { name: 'Tom Marino', role: 'Failed drug czar nominee - Protected distributors', href: '/entities/individuals/tom-marino' },
    { name: 'Kellyanne Conway', role: 'Opioid response coordinator - PR focus', href: '/entities/individuals/kellyanne-conway' },
  ],

  regulatoryCapture: {
    description: 'Pharmaceutical industry insiders appointed to regulate their former employers',
    appointments: [
      {
        name: 'Alex Azar',
        position: 'HHS Secretary (2018-2021)',
        background: 'President of Eli Lilly U.S. operations',
        conflict: 'Oversaw tripling of insulin prices at Eli Lilly before appointment',
      },
      {
        name: 'Scott Gottlieb',
        position: 'FDA Commissioner (2017-2019)',
        background: 'Board member of pharmaceutical companies',
        conflict: 'Received payments from opioid manufacturers',
      },
      {
        name: 'Tom Marino',
        position: 'Drug Czar Nominee (withdrawn)',
        background: 'Congressman, pharma campaign donor recipient',
        conflict: 'Championed bill weakening DEA enforcement against opioid distributors',
      },
    ],
  },

  marinoBill: {
    title: 'Ensuring Patient Access and Effective Drug Enforcement Act (2016)',
    effect: 'Weakened DEA ability to freeze suspicious opioid shipments',
    outcome: 'Made it nearly impossible to stop suspicious orders',
    revelation: 'Washington Post/60 Minutes investigation exposed the law',
    trumpResponse: 'Marino withdrew nomination; Trump criticized reporting instead of policy',
    sponsors: 'Bipartisan support, but Marino was key champion',
    quote: '"The law was the crowning achievement of a multifaceted campaign by the drug industry to weaken aggressive DEA enforcement." - Washington Post',
  },

  administrationActions: {
    declared: 'Public Health Emergency (October 2017)',
    notDeclared: 'National Emergency (would have unlocked more funding)',
    funding: 'Minimal new funding - relied on existing grants',
    treatment: 'Limited expansion of medication-assisted treatment',
    enforcement: 'Appointed officials who weakened pharmaceutical oversight',
  },

  recordDeaths: [
    { year: '2017', deaths: '70,237', change: '+10%' },
    { year: '2018', deaths: '67,367', change: '-4%' },
    { year: '2019', deaths: '70,630', change: '+5%' },
    { year: '2020', deaths: '93,331', change: '+30%' },
    { year: '2021', deaths: '106,699', change: '+14%' },
  ],

  pharmaceuticalInfluence: {
    lobbying: '$280+ million annual pharma lobbying',
    campaign: 'Millions in campaign contributions to both parties',
    revolvingDoor: 'FDA officials routinely join pharmaceutical companies',
    marketing: '$6 billion annual direct-to-consumer drug advertising',
    sacklerFamily: 'Purdue Pharma owners faced minimal personal accountability',
  },

  sacklerConnection: {
    company: 'Purdue Pharma',
    drug: 'OxyContin',
    marketingFraud: 'Falsely claimed low addiction risk',
    deaths: 'Linked to 450,000+ deaths',
    settlement: '$8 billion federal settlement (2020)',
    personalLiability: 'Sackler family protected from personal lawsuits in bankruptcy',
    trumpDOJ: 'Settlement allowed family to keep billions',
  },

  timeline: [
    { date: '1999', event: 'Opioid epidemic begins accelerating' },
    { date: '2016', event: 'Marino bill weakens DEA enforcement' },
    { date: 'January 2017', event: 'Trump takes office' },
    { date: 'March 2017', event: 'Trump establishes opioid commission' },
    { date: 'September 2017', event: 'Trump nominates Tom Marino as drug czar' },
    { date: 'October 2017', event: 'Washington Post exposes Marino bill' },
    { date: 'October 2017', event: 'Marino withdraws nomination' },
    { date: 'October 2017', event: 'Trump declares public health emergency' },
    { date: 'January 2018', event: 'Alex Azar confirmed as HHS Secretary' },
    { date: '2018', event: 'Kellyanne Conway named opioid response coordinator' },
    { date: '2019', event: 'Purdue Pharma files for bankruptcy' },
    { date: '2020', event: 'Record 93,000+ overdose deaths (COVID impact)' },
    { date: 'October 2020', event: 'DOJ announces Purdue settlement' },
    { date: '2021', event: 'Deaths exceed 100,000 annually' },
  ],

  failedPromises: [
    { promise: 'End the epidemic', reality: 'Deaths increased every year of term' },
    { promise: 'Hold pharma accountable', reality: 'Appointed pharma executives to regulate industry' },
    { promise: 'Increase treatment access', reality: 'Limited expansion of medication-assisted treatment' },
    { promise: 'Stop illegal drugs', reality: 'Focused on border wall, not fentanyl precursors' },
    { promise: 'Appoint tough drug czar', reality: 'First nominee championed weakening enforcement' },
  ],

  sources: [
    { title: 'Washington Post: Drug Industry Triumph', url: 'https://www.washingtonpost.com/graphics/2017/investigations/dea-drug-industry-congress/', type: 'Investigation' },
    { title: '60 Minutes: The Whistleblower', url: 'https://www.cbsnews.com/news/ex-dea-agent-opioid-crisis-fueled-by-drug-industry-and-congress/', type: 'Investigation' },
    { title: 'CDC Overdose Death Data', url: 'https://www.cdc.gov/nchs/nvss/vsrr/drug-overdose-data.htm', type: 'Government Data' },
    { title: 'Purdue Pharma Settlement', url: 'https://www.justice.gov/opa/pr/opioid-manufacturer-purdue-pharma-pleads-guilty-federal-criminal-charges', type: 'DOJ Press Release' }, // TODO: dead link — no archive found (check scripts/404-replacements.json)
    { title: 'HHS Opioid Epidemic History', url: 'https://www.hhs.gov/opioids/about-the-epidemic/index.html', type: 'Government Report' },
    { title: 'OpenSecrets: Pharma Lobbying', url: 'https://www.opensecrets.org/industries/lobbying.php?ind=H04', type: 'Research' },
  ],
};

const severityColors = {
  critical: 'bg-blood-600/20 text-blood-400 border-blood-600/30',
  high: 'bg-orange-600/20 text-orange-400 border-orange-600/30',
  medium: 'bg-yellow-600/20 text-yellow-400 border-yellow-600/30',
  low: 'bg-green-600/20 text-green-400 border-green-600/30',
};

export default function OpioidCrisisPage() {
  const [expandedSection, setExpandedSection] = useState<string | null>('capture');

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
            <span className="text-blood-500">Opioid Crisis Response</span>
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
        {/* Death Toll Warning */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="glass-card p-4 mb-8 border-l-4 border-blood-600 bg-blood-900/20"
        >
          <div className="flex items-center gap-3">
            <Skull className="w-6 h-6 text-blood-500 flex-shrink-0" />
            <p className="text-sm text-blood-300">
              <strong>Public Health Emergency:</strong> The opioid epidemic has claimed over 500,000 American lives since 1999. 
              This investigation examines policy failures and conflicts of interest, not the victims or their families.
            </p>
          </div>
        </motion.div>

        {/* Stats */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-12"
        >
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
            <div className="glass-card p-4 text-center border-l-4 border-blood-600">
              <Skull className="w-6 h-6 text-blood-500 mx-auto mb-2" />
              <p className="text-xl font-black text-blood-500">{investigationData.deathToll.totalDeaths}</p>
              <p className="text-xs text-zinc-400">Total Deaths</p>
            </div>
            <div className="glass-card p-4 text-center border-l-4 border-blood-600">
              <HeartPulse className="w-6 h-6 text-blood-500 mx-auto mb-2" />
              <p className="text-xl font-black text-blood-500">{investigationData.deathToll.dailyDeaths}</p>
              <p className="text-xs text-zinc-400">Daily Deaths</p>
            </div>
            <div className="glass-card p-4 text-center border-l-4 border-orange-600">
              <Calendar className="w-6 h-6 text-orange-500 mx-auto mb-2" />
              <p className="text-xl font-black text-orange-500">{investigationData.deathToll.annualDeaths2020}</p>
              <p className="text-xs text-zinc-400">Deaths (2020)</p>
            </div>
            <div className="glass-card p-4 text-center border-l-4 border-orange-600">
              <DollarSign className="w-6 h-6 text-orange-500 mx-auto mb-2" />
              <p className="text-xl font-black text-orange-500">{investigationData.deathToll.economicCost}</p>
              <p className="text-xs text-zinc-400">Economic Cost</p>
            </div>
            <div className="glass-card p-4 text-center border-l-4 border-yellow-600">
              <AlertTriangle className="w-6 h-6 text-yellow-500 mx-auto mb-2" />
              <p className="text-xl font-black text-yellow-500">{investigationData.deathToll.lifeExpectancy}</p>
              <p className="text-xs text-zinc-400">Life Expectancy</p>
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

        {/* Regulatory Capture */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="glass-card p-6 mb-8 border-l-4 border-blood-600"
        >
          <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
            <Building2 className="w-5 h-5 text-blood-500" />
            Regulatory Capture
          </h2>
          <p className="text-zinc-400 mb-4">{investigationData.regulatoryCapture.description}</p>
          <div className="space-y-4">
            {investigationData.regulatoryCapture.appointments.map((person, index) => (
              <div key={index} className="p-4 bg-zinc-900/50 border border-zinc-800">
                <div className="flex justify-between items-start mb-2">
                  <span className="font-bold text-blood-400">{person.name}</span>
                  <span className="text-xs text-zinc-500">{person.position}</span>
                </div>
                <p className="text-sm text-zinc-400 mb-2">Background: {person.background}</p>
                <p className="text-sm text-orange-400">Conflict: {person.conflict}</p>
              </div>
            ))}
          </div>
        </motion.section>

        {/* The Marino Bill */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.25 }}
          className="glass-card p-6 mb-8"
        >
          <h2 className="text-xl font-bold mb-4">The Marino Bill Scandal</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            <div>
              <p className="text-xs text-zinc-500 uppercase">Bill Title</p>
              <p className="text-zinc-200 text-sm">{investigationData.marinoBill.title}</p>
            </div>
            <div>
              <p className="text-xs text-zinc-500 uppercase">Effect</p>
              <p className="text-blood-400 text-sm">{investigationData.marinoBill.effect}</p>
            </div>
          </div>
          <div className="p-4 bg-zinc-900/50 border border-zinc-800 mb-4">
            <p className="text-xs text-zinc-500 uppercase mb-2">Outcome</p>
            <p className="text-zinc-300 text-sm">{investigationData.marinoBill.outcome}</p>
          </div>
          <blockquote className="border-l-4 border-blood-600 pl-4 italic text-zinc-400 text-sm">
            {investigationData.marinoBill.quote}
          </blockquote>
        </motion.section>

        {/* Administration Actions */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="glass-card p-6 mb-8"
        >
          <h2 className="text-xl font-bold mb-4">Administration Response</h2>
          <div className="space-y-3">
            <div className="flex items-center justify-between p-3 bg-zinc-900/50 border border-zinc-800">
              <span className="text-zinc-400">Declared</span>
              <span className="text-zinc-200">{investigationData.administrationActions.declared}</span>
            </div>
            <div className="flex items-center justify-between p-3 bg-zinc-900/50 border border-blood-600/50">
              <span className="text-zinc-400">Not Declared</span>
              <span className="text-blood-400">{investigationData.administrationActions.notDeclared}</span>
            </div>
            <div className="flex items-center justify-between p-3 bg-zinc-900/50 border border-zinc-800">
              <span className="text-zinc-400">Funding</span>
              <span className="text-orange-400">{investigationData.administrationActions.funding}</span>
            </div>
            <div className="flex items-center justify-between p-3 bg-zinc-900/50 border border-zinc-800">
              <span className="text-zinc-400">Treatment</span>
              <span className="text-orange-400">{investigationData.administrationActions.treatment}</span>
            </div>
            <div className="flex items-center justify-between p-3 bg-zinc-900/50 border border-blood-600/50">
              <span className="text-zinc-400">Enforcement</span>
              <span className="text-blood-400">{investigationData.administrationActions.enforcement}</span>
            </div>
          </div>
        </motion.section>

        {/* Death Toll by Year */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.35 }}
          className="glass-card p-6 mb-8"
        >
          <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
            <Skull className="w-5 h-5 text-blood-500" />
            Annual Overdose Deaths
          </h2>
          <div className="space-y-3">
            {investigationData.recordDeaths.map((year, index) => (
              <div key={index} className="flex items-center justify-between p-3 bg-zinc-900/50 border border-zinc-800">
                <span className="font-mono text-zinc-400">{year.year}</span>
                <div className="flex items-center gap-4">
                  <span className="font-bold text-blood-400">{year.deaths.toLocaleString()}</span>
                  <span className={`text-xs ${year.change.startsWith('+') ? 'text-blood-500' : 'text-green-500'}`}>
                    {year.change}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </motion.section>

        {/* Sackler/Purdue Connection */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="glass-card p-6 mb-8 border-l-4 border-blood-600"
        >
          <h2 className="text-xl font-bold mb-4">Sackler Family / Purdue Pharma</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-4">
            <div>
              <p className="text-xs text-zinc-500 uppercase">Company</p>
              <p className="text-zinc-200">{investigationData.sacklerConnection.company}</p>
            </div>
            <div>
              <p className="text-xs text-zinc-500 uppercase">Drug</p>
              <p className="text-zinc-200">{investigationData.sacklerConnection.drug}</p>
            </div>
            <div>
              <p className="text-xs text-zinc-500 uppercase">Settlement</p>
              <p className="text-blood-400">{investigationData.sacklerConnection.settlement}</p>
            </div>
          </div>
          <div className="space-y-2">
            <div className="p-3 bg-zinc-900/50 border border-zinc-800">
              <p className="text-xs text-zinc-500">Marketing Fraud</p>
              <p className="text-sm text-zinc-300">{investigationData.sacklerConnection.marketingFraud}</p>
            </div>
            <div className="p-3 bg-zinc-900/50 border border-blood-600/50">
              <p className="text-xs text-zinc-500">Linked Deaths</p>
              <p className="text-sm text-blood-400">{investigationData.sacklerConnection.deaths}</p>
            </div>
            <div className="p-3 bg-zinc-900/50 border border-orange-600/50">
              <p className="text-xs text-zinc-500">Personal Liability</p>
              <p className="text-sm text-orange-400">{investigationData.sacklerConnection.personalLiability}</p>
            </div>
          </div>
        </motion.section>

        {/* Failed Promises */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.45 }}
          className="glass-card p-6 mb-8"
        >
          <h2 className="text-xl font-bold mb-4">Promises vs. Reality</h2>
          <div className="space-y-3">
            {investigationData.failedPromises.map((item, index) => (
              <div key={index} className="p-4 bg-zinc-900/50 border border-zinc-800">
                <div className="flex items-start justify-between gap-4">
                  <div className="flex-1">
                    <p className="text-xs text-zinc-500 uppercase">Promise</p>
                    <p className="text-zinc-300">{item.promise}</p>
                  </div>
                  <div className="flex-1">
                    <p className="text-xs text-blood-500 uppercase">Reality</p>
                    <p className="text-blood-400">{item.reality}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </motion.section>

        {/* Timeline */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
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
          transition={{ delay: 0.55 }}
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
