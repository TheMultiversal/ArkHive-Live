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
  Building,
  Banknote,
} from 'lucide-react';
import GlitchText from '@/components/effects/GlitchText';

const investigationData = {
  title: 'Money Laundering',
  subtitle: 'Deutsche Bank, Russian Oligarchs, and the FinCEN Files',
  severity: 'critical' as const,
  status: 'Documented - Ongoing Investigations',
  lastUpdated: 'February 2026',
  summary: `For decades, Donald Trump's businesses served as vehicles for potentially laundering money from Russian oligarchs and other foreign sources. Deutsche Bank provided over $2 billion in loans to Trump despite red flags, while Trump properties were purchased in suspicious all-cash transactions by shell companies. The FinCEN Files revealed multiple suspicious activity reports filed on Trump-related transactions. Several Trump properties appear to have been used specifically as money laundering vehicles.`,
  
  moneyStats: {
    deutscheBankLoans: '$2+ billion',
    allCashPurchases: '30%+',
    suspiciousReports: '100+',
    russianBuyersEstimate: '$98 million',
    fincenAlerts: 'Numerous',
  },

  keyFigures: [
    { name: 'Donald Trump', role: 'Principal - Beneficiary of suspicious transactions', href: '/entities/individuals/donald-trump' },
    { name: 'Eric Trump', role: 'Trump Organization - Admitted Russian funding', href: '/entities/individuals/eric-trump' },
    { name: 'Donald Trump Jr.', role: 'Trump Organization - "Russians make up a pretty disproportionate cross-section"', href: '/entities/individuals/donald-trump-jr' },
    { name: 'Paul Manafort', role: 'Campaign Chair - Convicted money launderer', href: '/entities/individuals/paul-manafort' },
    { name: 'Michael Cohen', role: 'Personal Attorney - Facilitated suspicious deals', href: '/entities/individuals/michael-cohen' },
    { name: 'Felix Sater', role: 'Business Associate - Russian organized crime ties', href: '/entities/individuals/felix-sater' },
  ],

  deutscheBankRelationship: {
    totalLoans: '$2+ billion over 20 years',
    startYear: '1998',
    redFlags: [
      'Other banks refused to lend after bankruptcies',
      'Deutsche Bank itself flagged transactions as suspicious',
      'Compliance officers recommended against loans',
      'Bank paid $10B+ in fines for Russia-related money laundering',
      'Relationship continued despite defaults',
    ],
    keyLoans: [
      { property: 'Chicago Tower', amount: '$640 million', year: '2005' },
      { property: 'Doral Golf Resort', amount: '$125 million', year: '2012' },
      { property: 'Trump National DC', amount: '$170 million', year: '2012' },
      { property: 'Various refinancing', amount: '$300+ million', year: '2010s' },
    ],
  },

  suspiciousTransactions: [
    {
      property: 'Trump SoHo',
      details: [
        'Built with Bayrock Group (Kazakhstan/Russia ties)',
        'Felix Sater involved (Russian organized crime)',
        'Funding sources unclear',
        'Investors included Icelandic bank later implicated in fraud',
        'Project collapsed amid fraud allegations',
      ],
    },
    {
      property: 'Trump Tower Units',
      details: [
        'Russians bought $98M+ in Trump properties',
        'Many purchased through shell companies',
        'All-cash purchases common (30%+)',
        'Buyers included sanctioned individuals',
        'Deripaska associates bought multiple units',
      ],
    },
    {
      property: 'Trump Toronto',
      details: [
        'Developed with Talon International',
        'Investor Val Levitan (Russia ties)',
        'Funding sources questionable',
        'Building went bankrupt',
        'Trump sued by investors',
      ],
    },
    {
      property: 'Palm Beach Mansion',
      details: [
        'Trump bought for $41M in 2004',
        'Sold to Russian oligarch Rybolovlev for $95M in 2008',
        'During real estate crash when values dropping',
        '$54M profit defies market conditions',
        'Rybolovlev never lived there, demolished it',
      ],
    },
    {
      property: 'Trump Ocean Club Panama',
      details: [
        'FinCEN flagged as money laundering risk',
        'Many buyers linked to Russia/FSU',
        'Ivanka Trump heavily promoted',
        'Multiple suspicious activity reports',
        'Building had highest default rate in Panama',
      ],
    },
  ],

  trumpFamilyQuotes: [
    {
      person: 'Donald Trump Jr.',
      quote: 'Russians make up a pretty disproportionate cross-section of a lot of our assets.',
      year: '2008',
      source: 'Real estate conference',
    },
    {
      person: 'Eric Trump',
      quote: 'We have all the funding we need out of Russia.',
      year: '2014',
      source: 'Golf writer James Dodson',
    },
  ],

  fincenFindings: [
    'Over 2,000 suspicious activity reports from Deutsche Bank',
    'Trump-related transactions flagged multiple times',
    'Shell companies used to obscure beneficial owners',
    'Patterns consistent with money laundering',
    'Bank continued relationship despite compliance concerns',
    'Internal warnings overridden by executives',
  ],

  timeline: [
    { date: '1998', event: 'Deutsche Bank begins relationship with Trump' },
    { date: '2004', event: 'Trump buys Palm Beach mansion for $41M' },
    { date: '2008', event: 'Don Jr. admits Russians make up "disproportionate" assets' },
    { date: '2008', event: 'Russian oligarch pays $95M for Palm Beach mansion' },
    { date: '2010', event: 'Trump SoHo fraud lawsuit settled' },
    { date: '2012', event: 'Deutsche Bank finances Doral acquisition ($125M)' },
    { date: '2014', event: 'Eric Trump: "We have all the funding we need out of Russia"' },
    { date: '2015', event: 'Trump Tower Moscow project negotiations (during campaign)' },
    { date: '2017', event: 'Congress subpoenas Deutsche Bank for Trump records' },
    { date: '2019', event: 'Deutsche Bank turns over records to investigators' },
    { date: '2020', event: 'FinCEN Files reveal suspicious activity reports' },
    { date: '2020', event: 'Deutsche Bank begins cutting ties with Trump' },
    { date: '2021', event: 'Manhattan DA obtains Trump financial records' },
    { date: '2023', event: 'Ongoing investigations into Trump Organization finances' },
  ],

  shellCompanyPatterns: [
    { pattern: 'Anonymous LLCs', description: 'Buyers used Delaware/Nevada LLCs to hide identity' },
    { pattern: 'All-cash purchases', description: '30%+ of Trump unit sales were all-cash' },
    { pattern: 'Flipped quickly', description: 'Properties often resold quickly at profit' },
    { pattern: 'Price anomalies', description: 'Prices often above market value' },
    { pattern: 'No apparent use', description: 'Many properties never occupied' },
  ],

  sources: [
    { title: 'FinCEN Files Investigation', url: 'https://www.icij.org/investigations/fincen-files/', type: 'Leaked Documents' },
    { title: 'Reuters: Russian Elite Bought Trump Properties', url: 'https://www.reuters.com/investigates/special-report/usa-trump-property/', type: 'Investigation' },
    { title: 'Deutsche Bank Relationship Analysis', url: 'https://www.nytimes.com/2020/02/04/magazine/deutsche-bank-trump.html', type: 'Investigation' },
    { title: 'BuzzFeed: Trump Moscow Project', url: 'https://www.buzzfeednews.com/article/anthonycormier/trump-moscow-micheal-cohen-felix-sater-campaign', type: 'Investigation' },
    { title: 'House Financial Services Subpoena', url: 'https://financialservices.house.gov/news/documentsingle.aspx?DocumentID=401455', type: 'Congressional Document' },
    { title: 'Palm Beach Mansion Sale Analysis', url: 'https://www.seattletimes.com/nation-world/why-did-a-russian-pay-95m-to-buy-trumps-palm-beach-mansion/', type: 'Investigation' },
  ],
};

const severityColors = {
  critical: 'bg-blood-600/20 text-blood-400 border-blood-600/30',
  high: 'bg-orange-600/20 text-orange-400 border-orange-600/30',
  medium: 'bg-yellow-600/20 text-yellow-400 border-yellow-600/30',
  low: 'bg-green-600/20 text-green-400 border-green-600/30',
};

export default function MoneyLaunderingPage() {
  const [expandedProperty, setExpandedProperty] = useState<string | null>('Trump Tower Units');

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
            <span className="text-blood-500">Money Laundering</span>
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
              <Building className="w-6 h-6 text-blood-500 mx-auto mb-2" />
              <p className="text-xl font-black text-blood-500">{investigationData.moneyStats.deutscheBankLoans}</p>
              <p className="text-xs text-zinc-400">Deutsche Loans</p>
            </div>
            <div className="glass-card p-4 text-center border-l-4 border-blood-600">
              <Banknote className="w-6 h-6 text-blood-500 mx-auto mb-2" />
              <p className="text-xl font-black text-blood-500">{investigationData.moneyStats.allCashPurchases}</p>
              <p className="text-xs text-zinc-400">All-Cash Sales</p>
            </div>
            <div className="glass-card p-4 text-center border-l-4 border-orange-600">
              <AlertTriangle className="w-6 h-6 text-orange-500 mx-auto mb-2" />
              <p className="text-xl font-black text-orange-500">{investigationData.moneyStats.suspiciousReports}</p>
              <p className="text-xs text-zinc-400">SARs Filed</p>
            </div>
            <div className="glass-card p-4 text-center border-l-4 border-orange-600">
              <DollarSign className="w-6 h-6 text-orange-500 mx-auto mb-2" />
              <p className="text-xl font-black text-orange-500">{investigationData.moneyStats.russianBuyersEstimate}</p>
              <p className="text-xs text-zinc-400">Russian Buyers</p>
            </div>
            <div className="glass-card p-4 text-center border-l-4 border-yellow-600">
              <FileText className="w-6 h-6 text-yellow-500 mx-auto mb-2" />
              <p className="text-xl font-black text-yellow-500">{investigationData.moneyStats.fincenAlerts}</p>
              <p className="text-xs text-zinc-400">FinCEN Alerts</p>
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

        {/* Trump Family Quotes */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15 }}
          className="glass-card p-6 mb-8 border-l-4 border-blood-600"
        >
          <h2 className="text-xl font-bold mb-4">In Their Own Words</h2>
          <div className="space-y-4">
            {investigationData.trumpFamilyQuotes.map((quote, index) => (
              <blockquote key={index} className="border-l-2 border-zinc-700 pl-4">
                <p className="text-zinc-300 italic">&quot;{quote.quote}&quot;</p>
                <footer className="text-sm text-zinc-500 mt-2">
                  | {quote.person}, {quote.year} ({quote.source})
                </footer>
              </blockquote>
            ))}
          </div>
        </motion.section>

        {/* Key Figures */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
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

        {/* Deutsche Bank */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.25 }}
          className="glass-card p-6 mb-8"
        >
          <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
            <Building className="w-5 h-5 text-blood-500" />
            Deutsche Bank Relationship
          </h2>
          <div className="mb-4">
            <p className="text-3xl font-black text-blood-500">{investigationData.deutscheBankRelationship.totalLoans}</p>
            <p className="text-sm text-zinc-500">Since {investigationData.deutscheBankRelationship.startYear}</p>
          </div>

          <p className="text-xs text-zinc-500 uppercase mb-2">Key Loans</p>
          <div className="space-y-2 mb-4">
            {investigationData.deutscheBankRelationship.keyLoans.map((loan, i) => (
              <div key={i} className="flex items-center justify-between p-2 bg-zinc-900/50 border border-zinc-800">
                <span className="text-zinc-300">{loan.property}</span>
                <span className="text-blood-400 font-mono">{loan.amount} ({loan.year})</span>
              </div>
            ))}
          </div>

          <p className="text-xs text-zinc-500 uppercase mb-2">Red Flags Ignored</p>
          <ul className="space-y-1">
            {investigationData.deutscheBankRelationship.redFlags.map((flag, i) => (
              <li key={i} className="flex items-start gap-2 text-sm text-zinc-300">
                <span className="text-blood-500">•</span>
                {flag}
              </li>
            ))}
          </ul>
        </motion.section>

        {/* Suspicious Transactions */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="glass-card p-6 mb-8"
        >
          <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
            <AlertTriangle className="w-5 h-5 text-blood-500" />
            Suspicious Property Transactions
          </h2>
          <div className="space-y-4">
            {investigationData.suspiciousTransactions.map((item) => (
              <div key={item.property} className="border border-zinc-800">
                <button
                  onClick={() => setExpandedProperty(expandedProperty === item.property ? null : item.property)}
                  className="w-full flex items-center justify-between p-4 hover:bg-zinc-900/50 transition-colors"
                >
                  <span className="font-bold text-blood-400">{item.property}</span>
                  <ChevronRight className={`w-5 h-5 transition-transform ${expandedProperty === item.property ? 'rotate-90' : ''}`} />
                </button>
                {expandedProperty === item.property && (
                  <div className="px-4 pb-4">
                    <ul className="space-y-2">
                      {item.details.map((detail, i) => (
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

        {/* Shell Company Patterns */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.35 }}
          className="glass-card p-6 mb-8"
        >
          <h2 className="text-xl font-bold mb-4">Shell Company Patterns</h2>
          <div className="space-y-3">
            {investigationData.shellCompanyPatterns.map((item, index) => (
              <div key={index} className="p-3 bg-zinc-900/50 border border-zinc-800">
                <span className="font-medium text-blood-400">{item.pattern}</span>
                <p className="text-sm text-zinc-400 mt-1">{item.description}</p>
              </div>
            ))}
          </div>
        </motion.section>

        {/* FinCEN Findings */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="glass-card p-6 mb-8"
        >
          <h2 className="text-xl font-bold mb-4">FinCEN Files Findings</h2>
          <ul className="space-y-2">
            {investigationData.fincenFindings.map((finding, i) => (
              <li key={i} className="flex items-start gap-2 text-sm text-zinc-300">
                <span className="text-blood-500">•</span>
                {finding}
              </li>
            ))}
          </ul>
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
