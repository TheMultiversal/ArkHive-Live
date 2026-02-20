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
  Heart,
} from 'lucide-react';
import GlitchText from '@/components/effects/GlitchText';

const investigationData = {
  title: 'Trump Foundation Fraud',
  subtitle: 'Self-Dealing, Campaign Finance Violations, and $2M Penalty',
  severity: 'high' as const,
  status: 'Dissolved - Penalties Paid',
  lastUpdated: 'February 2026',
  summary: `The Donald J. Trump Foundation operated as Trump's personal checkbook rather than a legitimate charity. New York's investigation revealed a "shocking pattern of illegality" including self-dealing, coordinating with the 2016 campaign, and using charitable funds for personal benefit. Trump paid portraits of himself with charity money, settled business debts, and made illegal campaign contributions. The foundation was dissolved under court supervision in 2018, with Trump ordered to pay $2 million in damages.`,
  
  fraudStats: {
    penaltyAmount: '$2 million',
    selfDealingTransactions: '5+',
    foundationYears: '1987-2018',
    campaignViolation: '$2.8M fundraiser',
    portraitPurchases: '$30,000',
  },

  keyFigures: [
    { name: 'Donald Trump', role: 'Foundation President - Ordered illegal disbursements', href: '/entities/individuals/donald-trump' },
    { name: 'Eric Trump', role: 'Foundation Director - Failed oversight duties', href: '/entities/individuals/eric-trump' },
    { name: 'Donald Trump Jr.', role: 'Foundation Director - Failed oversight duties', href: '/entities/individuals/donald-trump-jr' },
    { name: 'Ivanka Trump', role: 'Foundation Director - Failed oversight duties', href: '/entities/individuals/ivanka-trump' },
  ],

  selfDealingViolations: [
    {
      violation: 'Portrait Purchase - Speed Museum',
      amount: '$20,000',
      details: 'Foundation paid for 6-foot portrait of Trump at charity auction; painting hung at one of his golf courses',
    },
    {
      violation: 'Portrait Purchase - Unicorn Children\'s Foundation',
      amount: '$10,000',
      details: 'Foundation paid for another portrait of Trump; used as decoration at Trump properties',
    },
    {
      violation: 'Business Debt Settlement - Mar-a-Lago',
      amount: '$100,000',
      details: 'Foundation paid to settle lawsuit with Town of Palm Beach over flagpole height dispute',
    },
    {
      violation: 'Business Debt Settlement - Golf Course',
      amount: '$158,000',
      details: 'Foundation paid to settle hole-in-one insurance claim at Trump National Golf Course',
    },
    {
      violation: 'Sports Memorabilia',
      amount: '$12,000',
      details: 'Foundation purchased Tim Tebow-signed football helmet and other items for Trump',
    },
  ],

  campaignViolations: {
    event: 'January 28, 2016 Fundraiser',
    amount: '$2.8 million raised',
    violations: [
      'Foundation served as illegal conduit for campaign',
      'Trump campaign controlled distribution of funds',
      'Checks distributed at campaign rallies',
      'Foundation staff took direction from campaign staff',
      'Violated campaign finance laws and charitable regulations',
    ],
    politicalPayments: [
      { recipient: 'Fisher House Foundation', amount: '$1,000,000', event: 'Distributed at campaign event' },
      { recipient: 'Various veterans groups', amount: '$1,800,000', event: 'Campaign-controlled disbursements' },
    ],
  },

  nyAgFindings: [
    'Foundation operated in violation of state law for over a decade',
    'Board of directors never met',
    'No conflict of interest policies',
    'No policies requiring independent review of transactions',
    'Trump treated foundation as personal piggy bank',
    'Willful and intentional violations of charity law',
  ],

  timeline: [
    { date: '1987', event: 'Donald J. Trump Foundation established' },
    { date: '2007', event: '$100,000 paid to settle Mar-a-Lago flagpole lawsuit' },
    { date: '2010', event: '$158,000 paid to settle golf club hole-in-one dispute' },
    { date: '2012', event: '$20,000 spent on 6-foot portrait of Trump' },
    { date: '2014', event: '$10,000 spent on another Trump portrait' },
    { date: '2014', event: '$12,000 spent on Tim Tebow helmet and memorabilia' },
    { date: 'January 2016', event: 'Foundation raises $2.8M at campaign fundraiser' },
    { date: 'May 2016', event: 'Foundation distributes checks at Trump campaign rallies' },
    { date: 'June 2018', event: 'NY AG files lawsuit seeking dissolution' },
    { date: 'December 2018', event: 'Foundation dissolved under judicial supervision' },
    { date: 'November 2019', event: 'Trump ordered to pay $2 million in damages' },
    { date: '2019', event: 'Trump, Don Jr., Eric, Ivanka barred from serving on NY nonprofits' },
  ],

  legalActions: [
    {
      action: 'NY AG Lawsuit',
      date: 'June 14, 2018',
      allegations: 'Persistent illegal conduct, self-dealing, campaign coordination',
      outcome: 'Foundation dissolved, $2M penalty',
    },
    {
      action: 'Mandatory Training',
      date: '2019',
      description: 'All Trump family members required to complete training on charity law',
    },
    {
      action: 'Nonprofit Board Bans',
      date: '2019',
      description: 'Trump children banned from NY nonprofit boards for years',
    },
  ],

  quotesFromRuling: [
    '"Mr. Trump\'s fiduciary duty breaches included allowing his campaign to orchestrate the Foundation\'s fundraiser and distribution of funds."',
    '"The Trump Foundation functioning as little more than a checkbook to serve Mr. Trump\'s business and political interests."',
    '"A shocking pattern of illegality involving the Trump Foundation, including unlawful coordination with the Trump presidential campaign."',
  ],

  assetsDistributed: [
    { charity: 'Army Emergency Relief', amount: '$200,000' },
    { charity: 'Children\'s Aid Society', amount: '$200,000' },
    { charity: 'City Meals on Wheels', amount: '$200,000' },
    { charity: 'Disabled American Veterans', amount: '$200,000' },
    { charity: 'Legal Aid Society', amount: '$200,000' },
    { charity: 'Lutheran Social Services', amount: '$200,000' },
    { charity: 'NYC Police Foundation', amount: '$200,000' },
    { charity: 'United Negro College Fund', amount: '$200,000' },
  ],

  sources: [
    { title: 'NY AG Lawsuit Filing', url: 'https://web.archive.org/web/2024/https://ag.ny.gov/press-release/2018/ag-underwood-files-lawsuit-against-donald-j-trump-foundation-and-its-board', type: 'Court Filing' },
    { title: 'Court Ruling on Dissolution', url: 'https://www.documentcloud.org/documents/6556975-Trump-Foundation-Decision.html', type: 'Court Decision' },
    { title: 'Washington Post Foundation Investigation', url: 'https://www.washingtonpost.com/politics/trump-foundation-to-dissolve-amid-allegations-of-misuse/', type: 'Investigation' },
    { title: 'NY AG Penalty Announcement', url: 'https://web.archive.org/web/2024/https://ag.ny.gov/press-release/2019/donald-j-trump-pays-court-ordered-2-million-damages-misusing-trump-foundation', type: 'Press Release' },
    { title: 'IRS Form 990 Filings', url: 'https://projects.propublica.org/nonprofits/organizations/133404773', type: 'Tax Filings' },
  ],
};

const severityColors = {
  critical: 'bg-blood-600/20 text-blood-400 border-blood-600/30',
  high: 'bg-orange-600/20 text-orange-400 border-orange-600/30',
  medium: 'bg-yellow-600/20 text-yellow-400 border-yellow-600/30',
  low: 'bg-green-600/20 text-green-400 border-green-600/30',
};

export default function TrumpFoundationPage() {
  const [expandedViolation, setExpandedViolation] = useState<string | null>(null);

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
            <span className="text-blood-500">Trump Foundation</span>
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
              <p className="text-xl font-black text-blood-500">{investigationData.fraudStats.penaltyAmount}</p>
              <p className="text-xs text-zinc-400">Penalty</p>
            </div>
            <div className="glass-card p-4 text-center border-l-4 border-blood-600">
              <AlertTriangle className="w-6 h-6 text-blood-500 mx-auto mb-2" />
              <p className="text-xl font-black text-blood-500">{investigationData.fraudStats.selfDealingTransactions}</p>
              <p className="text-xs text-zinc-400">Self-Dealing</p>
            </div>
            <div className="glass-card p-4 text-center border-l-4 border-orange-600">
              <Calendar className="w-6 h-6 text-orange-500 mx-auto mb-2" />
              <p className="text-xl font-black text-orange-500">{investigationData.fraudStats.foundationYears}</p>
              <p className="text-xs text-zinc-400">Years Active</p>
            </div>
            <div className="glass-card p-4 text-center border-l-4 border-orange-600">
              <Scale className="w-6 h-6 text-orange-500 mx-auto mb-2" />
              <p className="text-xl font-black text-orange-500">{investigationData.fraudStats.campaignViolation}</p>
              <p className="text-xs text-zinc-400">Campaign Violation</p>
            </div>
            <div className="glass-card p-4 text-center border-l-4 border-yellow-600">
              <Heart className="w-6 h-6 text-yellow-500 mx-auto mb-2" />
              <p className="text-xl font-black text-yellow-500">{investigationData.fraudStats.portraitPurchases}</p>
              <p className="text-xs text-zinc-400">On Portraits</p>
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

        {/* Self-Dealing Violations */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="glass-card p-6 mb-8"
        >
          <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
            <AlertTriangle className="w-5 h-5 text-blood-500" />
            Self-Dealing Violations
          </h2>
          <div className="space-y-4">
            {investigationData.selfDealingViolations.map((item) => (
              <div key={item.violation} className="border border-zinc-800">
                <button
                  onClick={() => setExpandedViolation(expandedViolation === item.violation ? null : item.violation)}
                  className="w-full flex items-center justify-between p-4 hover:bg-zinc-900/50 transition-colors"
                >
                  <div className="text-left">
                    <span className="font-bold text-blood-400">{item.violation}</span>
                    <p className="text-sm text-zinc-500">Amount: {item.amount}</p>
                  </div>
                  <ChevronRight className={`w-5 h-5 transition-transform ${expandedViolation === item.violation ? 'rotate-90' : ''}`} />
                </button>
                {expandedViolation === item.violation && (
                  <div className="px-4 pb-4">
                    <p className="text-sm text-zinc-300">{item.details}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </motion.section>

        {/* Campaign Coordination */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.25 }}
          className="glass-card p-6 mb-8 border-l-4 border-blood-600"
        >
          <h2 className="text-xl font-bold mb-4">Illegal Campaign Coordination</h2>
          <div className="mb-4">
            <p className="text-xs text-zinc-500 uppercase">Event</p>
            <p className="text-zinc-200">{investigationData.campaignViolations.event}</p>
            <p className="text-2xl font-black text-blood-500 mt-1">{investigationData.campaignViolations.amount}</p>
          </div>
          
          <p className="text-xs text-zinc-500 uppercase mb-2">Violations</p>
          <ul className="space-y-1 mb-4">
            {investigationData.campaignViolations.violations.map((violation, i) => (
              <li key={i} className="flex items-start gap-2 text-sm text-zinc-300">
                <span className="text-blood-500">•</span>
                {violation}
              </li>
            ))}
          </ul>

          <p className="text-xs text-zinc-500 uppercase mb-2">Political Disbursements</p>
          {investigationData.campaignViolations.politicalPayments.map((payment, i) => (
            <div key={i} className="flex items-center justify-between p-2 bg-zinc-900/50 mb-1">
              <span className="text-zinc-300">{payment.recipient}</span>
              <span className="text-blood-400 font-mono">{payment.amount}</span>
            </div>
          ))}
        </motion.section>

        {/* NY AG Findings */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="glass-card p-6 mb-8"
        >
          <h2 className="text-xl font-bold mb-4">New York AG Findings</h2>
          <ul className="space-y-2">
            {investigationData.nyAgFindings.map((finding, i) => (
              <li key={i} className="flex items-start gap-2 text-sm text-zinc-300">
                <span className="text-blood-500">•</span>
                {finding}
              </li>
            ))}
          </ul>
        </motion.section>

        {/* Quotes from Ruling */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.35 }}
          className="glass-card p-6 mb-8"
        >
          <h2 className="text-xl font-bold mb-4">From the Court Ruling</h2>
          <div className="space-y-4">
            {investigationData.quotesFromRuling.map((quote, index) => (
              <blockquote key={index} className="text-zinc-300 italic border-l-2 border-blood-600 pl-4">
                {quote}
              </blockquote>
            ))}
          </div>
        </motion.section>

        {/* Assets Distributed */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="glass-card p-6 mb-8"
        >
          <h2 className="text-xl font-bold mb-4">Foundation Assets Distributed (Court-Ordered)</h2>
          <div className="grid grid-cols-2 gap-2">
            {investigationData.assetsDistributed.map((item, index) => (
              <div key={index} className="flex items-center justify-between p-3 bg-zinc-900/50 border border-zinc-800">
                <span className="text-zinc-300 text-sm">{item.charity}</span>
                <span className="text-blood-400 font-mono text-sm">{item.amount}</span>
              </div>
            ))}
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
