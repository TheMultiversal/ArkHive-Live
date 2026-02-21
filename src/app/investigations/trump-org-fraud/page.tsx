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
  Building,
  DollarSign,
} from 'lucide-react';
import GlitchText from '@/components/effects/GlitchText';

const investigation = {
  title: 'Trump Organization Fraud',
  subtitle: 'New York Civil & Criminal Fraud Cases',
  severity: 'critical',
  status: 'Civil Judgment: $454 Million',
  summary: 'The Trump Organization has been found liable for massive fraud spanning decades. In civil court, Judge Engoron ruled Trump inflated his net worth by billions to deceive banks and insurers, ordering $454 million in disgorgement plus interest. Criminally, the Trump Organization was convicted on 17 felony counts of tax fraud, and CFO Allen Weisselberg pled guilty to perjury.',
  civilCase: {
    judge: 'Justice Arthur Engoron',
    plaintiff: 'New York Attorney General Letitia James',
    verdict: {
      totalJudgment: '$454,000,000 (plus interest = ~$480M+)',
      trumpPenalty: '$354,868,768',
      donJrPenalty: '$4,013,024',
      ericPenalty: '$4,013,024',
      weisselburgPenalty: '$1,000,000',
      trumpOrgPenalty: '$90,000,000+',
    },
    punishments: [
      'Trump barred from running NY business for 3 years',
      'Don Jr. and Eric barred for 2 years',
      'Independent monitor installed',
      'Corporate registration canceled',
    ],
  },
  fraudInstances: [
    { asset: 'Mar-a-Lago', claimed: '$739 million', reality: '$18-28 million (Palm Beach assessed value)', inflation: '2,500%+' },
    { asset: 'Trump Tower Penthouse', claimed: '30,000 sq ft worth $327M', reality: '10,996 sq ft worth ~$80M', inflation: '300% sq ft overstatement' },
    { asset: 'Seven Springs Estate', claimed: '$291 million', reality: '$30 million (appraised)', inflation: '870%' },
    { asset: '40 Wall Street', claimed: '$530 million', reality: '$260 million (appraised)', inflation: '100%' },
    { asset: 'Trump Park Avenue', claimed: '$350 million (rent stabilized units valued at market rate)', reality: '$90 million', inflation: '290%' },
    { asset: 'Personal Net Worth (2014)', claimed: '$4.17 billion', reality: 'Inflated by $2.2 billion', inflation: 'Off by billions' },
  ],
  keyFigures: [
    { name: 'Donald Trump', role: 'Personally certified false financial statements', href: '/entities/individuals/donald-trump', status: '$354M judgment' },
    { name: 'Donald Trump Jr.', role: 'Signed false statements as Trustee', href: '/entities/individuals/donald-trump-jr', status: '$4M judgment' },
    { name: 'Eric Trump', role: 'Signed false statements as Trustee', href: '/entities/individuals/eric-trump', status: '$4M judgment' },
    { name: 'Allen Weisselberg', role: 'CFO - Orchestrated fraud schemes', href: '/entities/individuals/allen-weisselberg', status: 'Convicted, Perjury guilty plea' },
    { name: 'Michael Cohen', role: 'Former fixer - Key witness against Trump', href: '/entities/individuals/michael-cohen', status: 'Cooperating witness' },
  ],
  criminalCase: {
    defendant: 'Trump Organization (two corporate entities)',
    verdict: 'GUILTY on all 17 counts',
    date: 'December 6, 2022',
    fine: '$1.61 million',
    charges: [
      'Scheme to defraud (1st degree)',
      'Conspiracy (4th and 5th degree)',
      'Criminal tax fraud (3rd degree)',
      'Falsifying business records (1st degree) - 9 counts',
    ],
  },
  weisselbergPerjury: {
    charge: 'Perjury in the first degree',
    date: 'March 2024 guilty plea',
    sentence: '5 months at Rikers Island',
    detail: 'Lied during civil trial testimony about Trump Tower penthouse size and who determined valuations',
  },
  timeline: [
    { date: '2012-2016', event: 'Trump certifies grossly inflated Statements of Financial Condition' },
    { date: 'Mar 2019', event: 'Michael Cohen testifies to Congress about inflated assets' },
    { date: 'Aug 2020', event: 'NY AG subpoenas Trump Organization records' },
    { date: 'Sep 2022', event: 'AG James files civil fraud lawsuit seeking $250M' },
    { date: 'Oct 2022', event: 'Criminal trial of Trump Org begins' },
    { date: 'Dec 2022', event: 'Trump Organization convicted on all 17 felony counts' },
    { date: 'Jan 2023', event: 'Trump Organization fined $1.61 million' },
    { date: 'Oct 2023', event: 'Civil fraud trial begins' },
    { date: 'Nov 2023', event: 'Trump takes stand, combative testimony, $10K contempt fine' },
    { date: 'Jan 2024', event: 'Weisselberg pleads guilty to perjury during trial' },
    { date: 'Feb 2024', event: 'Judge Engoron rules: $354M for Trump, $454M total judgment' },
    { date: 'Mar 2024', event: 'Trump posts $175M bond (reduced from $454M)' },
    { date: 'Apr 2024', event: 'Weisselberg sentenced to 5 months at Rikers' },
    { date: '2024-2025', event: 'Appeal pending' },
  ],
  bankFraud: [
    { bank: 'Deutsche Bank', loan: '$170M for Doral', fraud: 'Inflated net worth to qualify' },
    { bank: 'Deutsche Bank', loan: '$125M for Trump International Hotel DC', fraud: 'False statements' },
    { bank: 'Ladder Capital', loan: '$100M for 40 Wall Street', fraud: 'Overstated property value' },
  ],
  sources: [
    { title: 'Judge Engoron Civil Fraud Decision', url: 'https://www.documentcloud.org/documents/24437380-decision-after-trial-people-v-trump', date: 'Feb 2024' },
    { title: 'Trump Organization Criminal Conviction', url: 'https://www.manhattanda.org/d-a-bragg-trump-corporation-and-trump-payroll-corporation-convicted-of-17-felonies-including-scheme-to-defraud/', date: 'Dec 2022' },
    { title: 'Weisselberg Perjury Guilty Plea', url: 'https://www.manhattanda.org/d-a-bragg-allen-weisselberg-pleads-guilty-to-perjury/', date: 'Mar 2024' },
    { title: 'Statement of Financial Condition 2014', url: 'https://www.documentcloud.org/documents/24011997-donald-trump-2014-statement-of-financial-condition', date: '2014' },
  ],
};

export default function TrumpOrgFraudPage() {
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

        {/* Civil Judgment */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="border-2 border-green-800/60 bg-green-950/20 p-6 mb-8"
        >
          <h2 className="text-xl font-bold text-white uppercase tracking-wider mb-4 flex items-center gap-2">
            <DollarSign className="w-5 h-5 text-green-500" />
            Civil Fraud Judgment
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-4">
            <div className="border border-green-800/50 bg-black/50 p-4 col-span-2 md:col-span-1">
              <p className="text-3xl font-bold text-green-400">{investigation.civilCase.verdict.totalJudgment}</p>
              <p className="text-sm text-zinc-400">Total Judgment</p>
            </div>
            <div className="border border-zinc-700 bg-black/50 p-4">
              <p className="text-xl font-bold text-blood-500">{investigation.civilCase.verdict.trumpPenalty}</p>
              <p className="text-sm text-zinc-400">Donald Trump</p>
            </div>
            <div className="border border-zinc-700 bg-black/50 p-4">
              <p className="text-xl font-bold text-blood-500">{investigation.civilCase.verdict.donJrPenalty}</p>
              <p className="text-sm text-zinc-400">Donald Trump Jr.</p>
            </div>
            <div className="border border-zinc-700 bg-black/50 p-4">
              <p className="text-xl font-bold text-blood-500">{investigation.civilCase.verdict.ericPenalty}</p>
              <p className="text-sm text-zinc-400">Eric Trump</p>
            </div>
            <div className="border border-zinc-700 bg-black/50 p-4">
              <p className="text-xl font-bold text-blood-500">{investigation.civilCase.verdict.weisselburgPenalty}</p>
              <p className="text-sm text-zinc-400">Allen Weisselberg</p>
            </div>
          </div>
          <div className="space-y-2">
            <h3 className="text-white font-bold">Additional Punishments:</h3>
            {investigation.civilCase.punishments.map((p, idx) => (
              <div key={idx} className="flex items-start gap-2 text-zinc-300">
                <span className="text-green-500">■</span>
                {p}
              </div>
            ))}
          </div>
        </motion.div>

        {/* Fraud Examples */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15 }}
          className="border-2 border-red-800/60 bg-red-950/20 p-6 mb-8"
        >
          <h2 className="text-xl font-bold text-white uppercase tracking-wider mb-4 flex items-center gap-2">
            <AlertTriangle className="w-5 h-5 text-red-500" />
            Asset Inflation Examples
          </h2>
          <div className="space-y-3">
            {investigation.fraudInstances.map((fraud, idx) => (
              <div key={idx} className="border border-zinc-700 bg-zinc-900/50 p-4">
                <h3 className="font-bold text-white mb-2">{fraud.asset}</h3>
                <div className="grid grid-cols-3 gap-2 text-sm">
                  <div>
                    <p className="text-red-400 font-bold">Claimed</p>
                    <p className="text-zinc-300">{fraud.claimed}</p>
                  </div>
                  <div>
                    <p className="text-green-400 font-bold">Reality</p>
                    <p className="text-zinc-300">{fraud.reality}</p>
                  </div>
                  <div>
                    <p className="text-yellow-400 font-bold">Inflation</p>
                    <p className="text-zinc-300">{fraud.inflation}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Key Figures */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="border-2 border-zinc-800 bg-black/60 p-6 mb-8"
        >
          <h2 className="text-xl font-bold text-white uppercase tracking-wider mb-4 flex items-center gap-2">
            <Users className="w-5 h-5 text-blood-500" />
            Key Figures
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {investigation.keyFigures.map((figure, idx) => (
              <Link
                key={idx}
                href={figure.href}
                className="border border-zinc-700 bg-zinc-900/50 p-4 hover:border-blood-600 transition-colors group"
              >
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="font-bold text-white group-hover:text-blood-500">{figure.name}</h3>
                    <p className="text-sm text-zinc-400">{figure.role}</p>
                  </div>
                  <span className="text-xs text-red-400">{figure.status}</span>
                </div>
              </Link>
            ))}
          </div>
        </motion.div>

        {/* Criminal Case */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.25 }}
          className="border-2 border-zinc-800 bg-black/60 p-6 mb-8"
        >
          <h2 className="text-xl font-bold text-white uppercase tracking-wider mb-4 flex items-center gap-2">
            <Scale className="w-5 h-5 text-blood-500" />
            Criminal Conviction - Trump Organization
          </h2>
          <div className="border border-red-800/50 bg-red-950/30 p-4 mb-4">
            <div className="flex justify-between items-center mb-2">
              <span className="text-2xl font-bold text-red-400">GUILTY - ALL 17 COUNTS</span>
              <span className="text-zinc-400">{investigation.criminalCase.date}</span>
            </div>
            <p className="text-zinc-300">Fine: {investigation.criminalCase.fine}</p>
          </div>
          <div className="space-y-2">
            {investigation.criminalCase.charges.map((charge, idx) => (
              <div key={idx} className="flex items-start gap-2 text-zinc-300 border border-zinc-700 bg-zinc-900/50 p-3">
                <span className="text-blood-500">■</span>
                {charge}
              </div>
            ))}
          </div>
        </motion.div>

        {/* Weisselberg Perjury */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="border-2 border-yellow-800/60 bg-yellow-950/20 p-6 mb-8"
        >
          <h2 className="text-xl font-bold text-white uppercase tracking-wider mb-4 flex items-center gap-2">
            <Building className="w-5 h-5 text-yellow-500" />
            Weisselberg Perjury Conviction
          </h2>
          <div className="grid grid-cols-2 gap-4">
            <div className="border border-zinc-700 bg-zinc-900/50 p-4">
              <p className="text-yellow-400 font-bold">Charge</p>
              <p className="text-zinc-300">{investigation.weisselbergPerjury.charge}</p>
            </div>
            <div className="border border-zinc-700 bg-zinc-900/50 p-4">
              <p className="text-yellow-400 font-bold">Sentence</p>
              <p className="text-zinc-300">{investigation.weisselbergPerjury.sentence}</p>
            </div>
          </div>
          <p className="text-zinc-400 mt-4">{investigation.weisselbergPerjury.detail}</p>
        </motion.div>

        {/* Bank Fraud */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.35 }}
          className="border-2 border-zinc-800 bg-black/60 p-6 mb-8"
        >
          <h2 className="text-xl font-bold text-white uppercase tracking-wider mb-4">
            Banks Defrauded
          </h2>
          <div className="space-y-3">
            {investigation.bankFraud.map((bank, idx) => (
              <div key={idx} className="border border-zinc-700 bg-zinc-900/50 p-4">
                <div className="flex justify-between items-start">
                  <h3 className="font-bold text-white">{bank.bank}</h3>
                  <span className="text-blood-500">{bank.loan}</span>
                </div>
                <p className="text-sm text-zinc-400">{bank.fraud}</p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Timeline */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="border-2 border-zinc-800 bg-black/60 p-6 mb-8"
        >
          <h2 className="text-xl font-bold text-white uppercase tracking-wider mb-4 flex items-center gap-2">
            <Calendar className="w-5 h-5 text-blood-500" />
            Timeline
          </h2>
          <div className="space-y-4 max-h-96 overflow-y-auto pr-2">
            {investigation.timeline.map((item, idx) => (
              <div key={idx} className="flex gap-4 border-l-2 border-zinc-700 pl-4 hover:border-blood-500 transition-colors">
                <span className="text-blood-500 font-mono text-sm whitespace-nowrap min-w-[100px]">{item.date}</span>
                <span className="text-zinc-300">{item.event}</span>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Sources */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.45 }}
          className="border-2 border-zinc-800 bg-black/60 p-6"
        >
          <h2 className="text-xl font-bold text-white uppercase tracking-wider mb-4 flex items-center gap-2">
            <FileText className="w-5 h-5 text-blood-500" />
            Sources & Documentation
          </h2>
          <div className="space-y-3">
            {investigation.sources.map((source, idx) => (
              <a
                key={idx}
                href={source.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between border border-zinc-700 bg-zinc-900/50 p-3 hover:border-blood-600 transition-colors group"
              >
                <div>
                  <h3 className="text-zinc-300 group-hover:text-blood-500 transition-colors">{source.title}</h3>
                  <p className="text-xs text-zinc-500">{source.date}</p>
                </div>
                <ExternalLink className="w-4 h-4 text-zinc-500 group-hover:text-blood-500" />
              </a>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}
