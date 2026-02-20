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
} from 'lucide-react';
import GlitchText from '@/components/effects/GlitchText';

const investigationData = {
  title: 'Tax Evasion & Financial Fraud',
  subtitle: '$100+ Million in Evaded Taxes Through Decades of Fraud',
  severity: 'critical' as const,
  status: 'Documented - Ongoing Investigations',
  lastUpdated: 'February 2026',
  summary: `Donald Trump has engaged in tax fraud spanning decades, involving fraudulent valuations, offshore accounts, suspicious deductions, and inheritance schemes. The New York Times obtained decades of tax records revealing Trump received the equivalent of $413 million from his father's real estate empire, much of it through fraud. Congressional investigations, the Panama Papers, and IRS audits have exposed over $100 million in evaded taxes.`,
  
  financialStats: {
    totalEvaded: '$100+ million',
    inheritanceFraud: '$413 million',
    yearsNoIncomeTax: '10+ years',
    auditYears: '15+ years',
    deductionsClaimed: '$70,000 haircut deductions',
  },

  keyFigures: [
    { name: 'Donald Trump', role: 'Principal - Decades of tax fraud and evasion', href: '/entities/individuals/donald-trump' },
    { name: 'Allen Weisselberg', role: 'CFO - Managed fraudulent schemes, convicted twice', href: '/entities/individuals/allen-weisselberg' },
    { name: 'Eric Trump', role: 'Trump Organization - Involved in fraudulent valuations', href: '/entities/individuals/eric-trump' },
    { name: 'Donald Trump Jr.', role: 'Trump Organization - Involved in fraudulent valuations', href: '/entities/individuals/donald-trump-jr' },
  ],

  fraudSchemes: [
    {
      scheme: 'Fred Trump Inheritance Fraud',
      amount: '$413+ million',
      details: [
        'Created fake corporation "All County Building Supply" to siphon money',
        'Dramatically undervalued properties to minimize estate taxes',
        'Properties worth $900M+ valued at $41M for tax purposes',
        'Transferred wealth through padded invoices and phantom consulting fees',
        'Avoided $500+ million in gift/estate taxes',
      ],
    },
    {
      scheme: 'Property Valuation Fraud',
      amount: 'Hundreds of millions',
      details: [
        'Inflated values to banks for loans, deflated for taxes',
        'Trump Tower triplex claimed as 30,000 sq ft (actually 10,996)',
        'Mar-a-Lago valued at $739M to banks, $18M for taxes',
        'Seven Springs estate: $291M claim vs $56M appraisal',
        'New York civil fraud judgment: $454 million',
      ],
    },
    {
      scheme: 'Business Loss Deductions',
      amount: '$1.17 billion claimed',
      details: [
        'Claimed $1.17 billion in losses (1985-1994)',
        'Paid no federal income tax in 10 of 15 years (2000-2015)',
        'Paid only $750 in income tax in 2016 and 2017',
        'Carried forward losses for decades',
        'May have violated IRS loss limitation rules',
      ],
    },
    {
      scheme: 'Dubious Deductions',
      amount: 'Tens of millions',
      details: [
        '$70,000+ deducted for haircuts/styling',
        'Personal expenses claimed as business costs',
        'Family members paid as "consultants"',
        '$26 million deducted for conservation easement at Seven Springs',
        'Private jet costs for personal travel',
      ],
    },
    {
      scheme: 'Offshore Structures',
      amount: 'Unknown (Panama Papers)',
      details: [
        'Multiple shell companies in tax havens',
        'Appeared in Panama Papers leak',
        'Caribbean and European entities',
        'Used to hide income and avoid reporting',
        'Connected to Deutsche Bank financing',
      ],
    },
  ],

  timeline: [
    { date: '1968-2018', event: '50 years of documented tax avoidance schemes begin' },
    { date: '1987', event: 'Fred Trump transfers $15.5M to Donald through casino chip purchase' },
    { date: '1992', event: 'All County Building Supply scam peaks - siphoning millions' },
    { date: '1995', event: 'Claims $915 million loss - used for 18 years of no income tax' },
    { date: '1999', event: 'Fred Trump dies - estate grossly undervalued' },
    { date: '2005-2007', event: 'Massive bank fraud through property overvaluation' },
    { date: '2011', event: 'IRS begins audit of Trump returns (ongoing 15+ years)' },
    { date: '2016', event: 'Trump pays only $750 in federal income tax' },
    { date: '2017', event: 'Trump pays only $750 in federal income tax again' },
    { date: '2018', event: 'NY Times publishes massive tax fraud investigation' },
    { date: '2020', event: 'Supreme Court allows Manhattan DA to obtain tax records' },
    { date: '2022', event: 'NY AG files $250M civil fraud lawsuit' },
    { date: '2022', event: 'Allen Weisselberg convicted of tax fraud' },
    { date: '2022', event: 'Trump Organization convicted of tax fraud' },
    { date: '2023', event: 'Congressional committee releases Trump tax returns' },
    { date: '2024', event: 'New York civil fraud judgment: $454 million' },
    { date: '2024', event: 'Weisselberg convicted of perjury, returns to prison' },
  ],

  keyFindings: [
    { finding: 'Paid only $750 in federal income tax in 2016 and 2017', source: 'New York Times' },
    { finding: 'Paid no income tax in 10 of 15 years examined', source: 'NY Times Tax Investigation' },
    { finding: 'Received $413 million from father through fraudulent schemes', source: 'NY Times Investigation' },
    { finding: 'IRS audit ongoing for 15+ years with no resolution', source: 'Congressional Release' },
    { finding: 'Claimed $70,000+ in hair styling as business expense', source: 'Tax Records' },
    { finding: 'Valued properties differently to banks vs. tax authorities', source: 'NY AG Investigation' },
    { finding: 'Mar-a-Lago valued at $739M for loans, $18M for taxes', source: 'NY Civil Fraud Trial' },
    { finding: 'Conservation easement deduction of $26M being investigated', source: 'NY AG' },
  ],

  civilFraudCase: {
    defendant: 'Trump Organization, Donald Trump, Eric Trump, Donald Trump Jr.',
    plaintiff: 'New York Attorney General Letitia James',
    allegations: 'Persistent and repeated fraud in property valuations',
    judgment: '$454 million (with interest)',
    penalties: [
      'Trump barred from running NY business for 3 years',
      'Sons barred for 2 years',
      '$364 million in disgorgement',
      '$90+ million in prejudgment interest',
    ],
  },

  sources: [
    { title: 'NY Times: Trump Tax Investigation', url: 'https://www.nytimes.com/interactive/2018/10/02/us/politics/donald-trump-tax-schemes-fred-trump.html', type: 'Investigation' },
    { title: 'NY Times: 18 Years of Tax Returns', url: 'https://www.nytimes.com/interactive/2020/09/27/us/donald-trump-taxes.html', type: 'Tax Records' },
    { title: 'Congressional Committee Tax Release', url: 'https://waysandmeans.house.gov/trump-tax-returns/', type: 'Government Document' }, // TODO: dead link — no archive found (check scripts/404-replacements.json)
    { title: 'NY Civil Fraud Judgment', url: 'https://www.documentcloud.org/documents/24425172-trump-fraud-ruling', type: 'Court Document' },
    { title: 'NY AG Fraud Lawsuit', url: 'https://ag.ny.gov/press-release/2022/attorney-general-james-files-lawsuit-against-donald-trump-alleging-years', type: 'Legal Filing' },
    { title: 'Panama Papers Database', url: 'https://offshoreleaks.icij.org/', type: 'Leaked Documents' },
    { title: 'Trump Organization Criminal Conviction', url: 'https://manhattanda.org/', type: 'Criminal Case' },
  ],
};

const severityColors = {
  critical: 'bg-blood-600/20 text-blood-400 border-blood-600/30',
  high: 'bg-orange-600/20 text-orange-400 border-orange-600/30',
  medium: 'bg-yellow-600/20 text-yellow-400 border-yellow-600/30',
  low: 'bg-green-600/20 text-green-400 border-green-600/30',
};

export default function TaxEvasionPage() {
  const [expandedScheme, setExpandedScheme] = useState<string | null>('Fred Trump Inheritance Fraud');

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
            <span className="text-blood-500">Tax Evasion</span>
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
        {/* Financial Stats */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-12"
        >
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
            <div className="glass-card p-4 text-center border-l-4 border-blood-600">
              <DollarSign className="w-6 h-6 text-blood-500 mx-auto mb-2" />
              <p className="text-xl font-black text-blood-500">{investigationData.financialStats.totalEvaded}</p>
              <p className="text-xs text-zinc-400">Total Evaded</p>
            </div>
            <div className="glass-card p-4 text-center border-l-4 border-blood-600">
              <Building className="w-6 h-6 text-blood-500 mx-auto mb-2" />
              <p className="text-xl font-black text-blood-500">{investigationData.financialStats.inheritanceFraud}</p>
              <p className="text-xs text-zinc-400">Inheritance Fraud</p>
            </div>
            <div className="glass-card p-4 text-center border-l-4 border-orange-600">
              <Calendar className="w-6 h-6 text-orange-500 mx-auto mb-2" />
              <p className="text-xl font-black text-orange-500">{investigationData.financialStats.yearsNoIncomeTax}</p>
              <p className="text-xs text-zinc-400">Years No Tax</p>
            </div>
            <div className="glass-card p-4 text-center border-l-4 border-orange-600">
              <Scale className="w-6 h-6 text-orange-500 mx-auto mb-2" />
              <p className="text-xl font-black text-orange-500">{investigationData.financialStats.auditYears}</p>
              <p className="text-xs text-zinc-400">Under Audit</p>
            </div>
            <div className="glass-card p-4 text-center border-l-4 border-yellow-600">
              <AlertTriangle className="w-6 h-6 text-yellow-500 mx-auto mb-2" />
              <p className="text-sm font-black text-yellow-500">{investigationData.financialStats.deductionsClaimed}</p>
              <p className="text-xs text-zinc-400">Haircut Deductions</p>
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

        {/* NY Civil Fraud Case */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="glass-card p-6 mb-8 border-l-4 border-blood-600"
        >
          <h2 className="text-xl font-bold mb-4">New York Civil Fraud Judgment</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            <div>
              <p className="text-xs text-zinc-500 uppercase">Defendants</p>
              <p className="text-zinc-200">{investigationData.civilFraudCase.defendant}</p>
            </div>
            <div>
              <p className="text-xs text-zinc-500 uppercase">Judgment Amount</p>
              <p className="text-3xl font-black text-blood-500">{investigationData.civilFraudCase.judgment}</p>
            </div>
          </div>
          <div>
            <p className="text-xs text-zinc-500 uppercase mb-2">Penalties</p>
            <ul className="space-y-1">
              {investigationData.civilFraudCase.penalties.map((penalty, i) => (
                <li key={i} className="flex items-start gap-2 text-sm text-zinc-300">
                  <span className="text-blood-500">•</span>
                  {penalty}
                </li>
              ))}
            </ul>
          </div>
        </motion.section>

        {/* Fraud Schemes */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.25 }}
          className="glass-card p-6 mb-8"
        >
          <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
            <AlertTriangle className="w-5 h-5 text-blood-500" />
            Documented Fraud Schemes
          </h2>
          <div className="space-y-4">
            {investigationData.fraudSchemes.map((scheme, index) => (
              <div key={index} className="border border-zinc-800">
                <button
                  onClick={() => setExpandedScheme(expandedScheme === scheme.scheme ? null : scheme.scheme)}
                  className="w-full flex items-center justify-between p-4 hover:bg-zinc-900/50 transition-colors"
                >
                  <div className="text-left">
                    <span className="font-bold text-blood-400">{scheme.scheme}</span>
                    <p className="text-sm text-zinc-500">Amount: {scheme.amount}</p>
                  </div>
                  <ChevronRight className={`w-5 h-5 transition-transform ${expandedScheme === scheme.scheme ? 'rotate-90' : ''}`} />
                </button>
                {expandedScheme === scheme.scheme && (
                  <div className="px-4 pb-4">
                    <ul className="space-y-2">
                      {scheme.details.map((detail, i) => (
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

        {/* Key Findings */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="glass-card p-6 mb-8"
        >
          <h2 className="text-xl font-bold mb-4">Key Findings</h2>
          <div className="space-y-3">
            {investigationData.keyFindings.map((item, index) => (
              <div key={index} className="flex items-start gap-3 p-3 bg-zinc-900/50 border border-zinc-800">
                <span className="text-blood-500 font-bold">{index + 1}.</span>
                <div>
                  <p className="text-zinc-200">{item.finding}</p>
                  <p className="text-xs text-zinc-500 mt-1">Source: {item.source}</p>
                </div>
              </div>
            ))}
          </div>
        </motion.section>

        {/* Timeline */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.35 }}
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
          transition={{ delay: 0.4 }}
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
