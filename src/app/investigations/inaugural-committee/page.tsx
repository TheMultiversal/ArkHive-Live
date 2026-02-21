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
  DollarSign,
  PartyPopper,
} from 'lucide-react';
import GlitchText from '@/components/effects/GlitchText';

const investigation = {
  title: 'Inaugural Committee Investigation',
  subtitle: 'The $107 Million Party with Missing Receipts',
  severity: 'high',
  status: 'Investigation Ongoing',
  summary: 'Donald Trump\'s 2017 inaugural committee raised a record-shattering $107 million, nearly double what Obama\'s 2009 inaugural raised, yet delivered far fewer events. Federal prosecutors, the DC Attorney General, and House investigators have probed where the money actually went, uncovering inflated payments to Trump-owned properties, foreign donors, and possible tax fraud.',
  amountRaised: '$107,000,000',
  keyFindings: [
    'Record-breaking fundraising: $107M (Obama 2009: $53M)',
    'Trump Hotel DC overcharged by $1 million+ for venue rental',
    'Melania Trump\'s friend paid $26M for "event planning"',
    'Foreign donations potentially violated federal law',
    'Saudi Arabian and Russian-linked donors gave heavily',
    'Far fewer events than Obama inaugural despite double the money',
    'Non-profit status required detailed accounting (largely missing)',
    'Stephanie Winston Wolkoff secretly recorded Melania discussing payments',
  ],
  spending: [
    { category: 'Event Production', amount: '$25M', note: 'Stephanie Wolkoff\'s company' },
    { category: 'Trump Hotel DC', amount: '$1.5M', note: 'Inflated above market rate' },
    { category: 'Security', amount: '$10M', note: 'Partially unexplained' },
    { category: 'Entertainment', amount: '$5M', note: 'Fewer performers than prior inaugurals' },
    { category: 'Administration', amount: '$15M+', note: 'High overhead costs' },
    { category: 'Unknown/Unaccounted', amount: '$50M+', note: 'Lacking documentation' },
  ],
  keyFigures: [
    { name: 'Donald Trump', role: 'President, properties benefited', href: '/entities/individuals/donald-trump', status: 'Subject' },
    { name: 'Melania Trump', role: 'First Lady, friend received $26M', href: '/entities/individuals/melania-trump', status: 'Subject' },
    { name: 'Tom Barrack', role: 'Inaugural Chair, later charged as foreign agent', href: '/entities/individuals/tom-barrack', status: 'Acquitted (UAE charges)' },
    { name: 'Stephanie Winston Wolkoff', role: 'Received $26M, later wrote tell-all', status: 'Cooperating Witness' },
    { name: 'Rick Gates', role: 'Deputy Chair, pleaded guilty in Mueller probe', href: '/entities/individuals/rick-gates', status: 'Convicted' },
    { name: 'Ivanka Trump', role: 'Involved in Trump Hotel booking negotiations', href: '/entities/individuals/ivanka-trump', status: 'Subject' },
    { name: 'Sheldon Adelson', role: 'Donated $5M to inaugural', status: 'Donor (deceased)' },
    { name: 'Viktor Vekselberg', role: 'Russian oligarch, $250K+ via US subsidiary', status: 'Under sanctions' },
  ],
  foreignDonorConcerns: [
    { donor: 'Viktor Vekselberg', country: 'Russia', amount: '$250,000+', note: 'Through US subsidiary, later sanctioned' },
    { donor: 'Sam Baqi', country: 'Saudi Arabia', amount: '$250,000', note: 'Straw donor allegations' },
    { donor: 'Multiple UAE-linked donors', country: 'UAE', amount: 'Unknown', note: 'Tom Barrack connections' },
    { donor: 'Len Blavatnik', country: 'Russia/UK', amount: '$1,000,000', note: 'Dual citizen with Russian ties' },
  ],
  trumpHotelIssue: {
    problem: 'Trump Hotel DC charged $175,000/day when market rate was ~$5,000/day',
    evidence: 'Internal emails showed concern: "Please take out any reference to the \u0027break-even\u0027 number"',
    outcome: 'DC AG sued and settled, committee paid $750,000 to DC charities',
    emoluments: 'May have violated prohibition on profiting from presidency',
  },
  timeline: [
    { date: 'Nov 2016', event: 'Trump wins election, inaugural committee forms' },
    { date: 'Dec 2016', event: 'Record donations pour in, $107M raised' },
    { date: 'Jan 20, 2017', event: 'Inauguration Day - relatively modest events despite funds' },
    { date: 'Feb 2017', event: 'ProPublica begins investigating spending' },
    { date: '2018', event: 'Federal prosecutors subpoena inaugural committee records' },
    { date: 'Aug 2018', event: 'Rick Gates pleads guilty, cooperates with investigators' },
    { date: 'Feb 2019', event: 'SDNY issues sweeping subpoenas to inaugural committee' },
    { date: 'Jan 2020', event: 'DC Attorney General sues over nonprofit abuse' },
    { date: 'May 2022', event: 'DC AG settlement: $750,000 to charities' },
    { date: '2023', event: 'Congressional investigation continues into foreign donations' },
  ],
  charges: [
    { statute: 'Conspiracy to defraud (52 U.S.C. § 30121)', description: 'Accepting foreign donations to inaugural', jurisdiction: 'Federal' },
    { statute: 'Wire fraud (18 U.S.C. § 1343)', description: 'Fraudulent use of nonprofit funds', jurisdiction: 'Federal' },
    { statute: 'Tax fraud', description: '501(c)(4) violations', jurisdiction: 'Federal/DC' },
    { statute: 'DC Nonprofit Abuse', description: 'Using charity funds for private benefit', jurisdiction: 'DC' },
  ],
  dcSettlement: {
    amount: '$750,000',
    detail: 'Inaugural committee agreed to pay to settle DC AG lawsuit over nonprofit abuse',
    charities: 'Funds distributed to legitimate DC charities',
  },
  sources: [
    { title: 'ProPublica Inaugural Investigation', url: 'https://www.propublica.org/article/trump-inc-podcast-trumps-inauguration-paid-trumps-company-with-ivanka-in-the-middle', date: '2018-2019' },
    { title: 'SDNY Subpoenas', url: 'https://www.nytimes.com/2019/02/04/us/politics/trump-inaugural-committee-subpoena.html', date: '2019' },
    { title: 'Stephanie Wolkoff Tell-All', url: 'https://www.simonandschuster.com/books/Melania-and-Me/Stephanie-Winston-Wolkoff/9781982151263', date: '2020' },
  ],
};

export default function InauguralCommitteePage() {
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
            <span className="px-3 py-1 text-xs font-bold uppercase border border-orange-500/30 bg-orange-500/20 text-orange-400">
              {investigation.severity}
            </span>
            <span className="px-3 py-1 text-xs font-bold uppercase border border-yellow-500/30 bg-yellow-500/20 text-yellow-400">
              {investigation.status}
            </span>
          </div>
          <h1 className="text-3xl lg:text-4xl font-black text-white uppercase tracking-wider mb-2">
            <GlitchText text={investigation.title} />
          </h1>
          <p className="text-lg text-blood-500 font-bold mb-4">{investigation.subtitle}</p>
          <p className="text-zinc-400 leading-relaxed">{investigation.summary}</p>
        </motion.div>

        {/* Fundraising Box */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="border-2 border-blood-800/60 bg-blood-950/20 p-6 mb-8"
        >
          <h2 className="text-xl font-bold text-white uppercase tracking-wider mb-4 flex items-center gap-2">
            <DollarSign className="w-5 h-5 text-blood-500" />
            Record-Breaking Fundraising
          </h2>
          <div className="grid grid-cols-2 gap-4">
            <div className="text-center p-4 border border-blood-500/30">
              <p className="text-xs text-zinc-500">Trump 2017</p>
              <p className="text-4xl font-black text-blood-500">{investigation.amountRaised}</p>
            </div>
            <div className="text-center p-4 border border-zinc-800">
              <p className="text-xs text-zinc-500">Obama 2009</p>
              <p className="text-4xl font-black text-zinc-500">$53,000,000</p>
            </div>
          </div>
          <p className="text-sm text-zinc-500 mt-4 text-center">
            Trump raised nearly DOUBLE Obama&apos;s record, yet held fewer events and paid more to Trump properties
          </p>
        </motion.div>

        {/* Spending Breakdown */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15 }}
          className="glass-card p-6 mb-8"
        >
          <h2 className="text-xl font-bold text-white uppercase tracking-wider mb-4 flex items-center gap-2">
            <PartyPopper className="w-5 h-5 text-blood-500" />
            Where Did the Money Go?
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {investigation.spending.map((item, idx) => (
              <div key={idx} className={`p-4 border ${item.category === 'Unknown/Unaccounted' ? 'border-red-500/50 bg-red-950/20' : 'border-zinc-800 bg-zinc-900/50'}`}>
                <p className="text-sm text-zinc-400">{item.category}</p>
                <p className={`text-2xl font-black ${item.category === 'Unknown/Unaccounted' ? 'text-red-500' : 'text-green-500'}`}>
                  {item.amount}
                </p>
                <p className="text-xs text-zinc-500 mt-1">{item.note}</p>
              </div>
            ))}
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
                    <span className="text-xs px-2 py-1 bg-yellow-500/20 text-yellow-400 border border-yellow-500/30">
                      {figure.status}
                    </span>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Trump Hotel Issue */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.25 }}
              className="glass-card p-6 border-l-4 border-blood-600"
            >
              <h2 className="text-xl font-bold text-white uppercase tracking-wider mb-4 flex items-center gap-2">
                <AlertTriangle className="w-5 h-5 text-blood-500" />
                Trump Hotel Overcharging
              </h2>
              <div className="space-y-4">
                <div className="p-4 bg-red-950/20 border border-red-500/30">
                  <p className="font-bold text-red-400">The Problem</p>
                  <p className="text-sm text-zinc-300 mt-1">{investigation.trumpHotelIssue.problem}</p>
                </div>
                <div className="p-4 bg-zinc-900/50 border border-zinc-800">
                  <p className="font-bold text-yellow-400">The Evidence</p>
                  <p className="text-sm text-zinc-300 mt-1">{investigation.trumpHotelIssue.evidence}</p>
                </div>
                <div className="p-4 bg-green-950/20 border border-green-500/30">
                  <p className="font-bold text-green-400">The Outcome</p>
                  <p className="text-sm text-zinc-300 mt-1">{investigation.trumpHotelIssue.outcome}</p>
                </div>
                <div className="p-4 bg-zinc-900/50 border border-blood-500/30">
                  <p className="font-bold text-blood-400">Constitutional Issue</p>
                  <p className="text-sm text-zinc-300 mt-1">{investigation.trumpHotelIssue.emoluments}</p>
                </div>
              </div>
            </motion.div>

            {/* Foreign Donor Concerns */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="glass-card p-6"
            >
              <h2 className="text-xl font-bold text-white uppercase tracking-wider mb-4 flex items-center gap-2">
                <AlertTriangle className="w-5 h-5 text-blood-500" />
                Suspicious Foreign Donors
              </h2>
              <div className="space-y-3">
                {investigation.foreignDonorConcerns.map((donor, idx) => (
                  <div key={idx} className="p-3 bg-zinc-900/50 border border-red-500/30">
                    <div className="flex justify-between items-start">
                      <div>
                        <p className="font-bold text-red-400">{donor.donor}</p>
                        <p className="text-xs text-zinc-500">{donor.country}</p>
                      </div>
                      <span className="text-green-500 font-bold">{donor.amount}</span>
                    </div>
                    <p className="text-xs text-zinc-400 mt-2">{donor.note}</p>
                  </div>
                ))}
              </div>
              <p className="text-xs text-red-400 mt-4 p-2 bg-red-950/20 border border-red-500/30">
                ⚠ Foreign nationals are prohibited from donating to inaugural committees under federal law (52 U.S.C. § 30121)
              </p>
            </motion.div>

            {/* Timeline */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.35 }}
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
            {/* DC Settlement */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              className="glass-card p-6 border-l-4 border-green-600"
            >
              <h3 className="text-lg font-bold text-white uppercase tracking-wider mb-4">
                DC AG Settlement
              </h3>
              <div className="text-center mb-4">
                <p className="text-4xl font-black text-green-500">{investigation.dcSettlement.amount}</p>
                <p className="text-sm text-zinc-400 mt-2">{investigation.dcSettlement.detail}</p>
              </div>
            </motion.div>

            {/* Key Findings */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.1 }}
              className="glass-card p-6"
            >
              <h3 className="text-lg font-bold text-white uppercase tracking-wider mb-4">
                Key Findings
              </h3>
              <ul className="space-y-2">
                {investigation.keyFindings.map((finding, idx) => (
                  <li key={idx} className="text-sm text-zinc-400 flex items-start gap-2 p-2 bg-zinc-900/30">
                    <span className="text-blood-500 mt-1">•</span>
                    <span>{finding}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Potential Charges */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.15 }}
              className="glass-card p-6"
            >
              <h3 className="text-lg font-bold text-white uppercase tracking-wider mb-4 flex items-center gap-2">
                <Scale className="w-5 h-5 text-blood-500" />
                Potential Charges
              </h3>
              <div className="space-y-3">
                {investigation.charges.map((charge, idx) => (
                  <div key={idx} className="p-3 bg-zinc-900/50 border border-zinc-800">
                    <p className="text-sm font-bold text-blood-400">{charge.statute}</p>
                    <p className="text-xs text-zinc-400 mt-1">{charge.description}</p>
                    <p className="text-xs text-zinc-600 mt-1">{charge.jurisdiction}</p>
                  </div>
                ))}
              </div>
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
