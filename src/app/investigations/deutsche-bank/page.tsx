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
  Building,
  Globe,
} from 'lucide-react';
import GlitchText from '@/components/effects/GlitchText';

const investigation = {
  title: 'Deutsche Bank Investigation',
  subtitle: 'Two Decades of Suspicious Loans to Trump',
  severity: 'critical',
  status: 'Under Investigation',
  summary: 'For over two decades, Deutsche Bank provided billions of dollars in loans to Donald Trump even as other banks refused to do business with him due to his history of defaults and lawsuits. The bank\'s relationship with Trump has been scrutinized by regulators, Congress, and prosecutors for potential money laundering, fraud, and connections to Russian oligarchs.',
  totalLoaned: '$2,500,000,000+',
  keyFacts: [
    'Deutsche Bank loaned Trump $2+ billion when no other bank would',
    'The bank paid $670 million in fines for Russian money laundering (2017)',
    'Internal bank employees raised red flags about Trump loans',
    'Loans continued even after Trump sued the bank for $3 billion',
    'Deutsche Bank\'s wealth management division handled Trump accounts',
    'The bank\'s private client services unit has Russian oligarch connections',
    'Multiple congressional subpoenas for Trump-Deutsche Bank records',
    'Bank cooperation with multiple federal investigations',
  ],
  loanHistory: [
    { year: '1998', amount: '$125M', purpose: 'Purchase of 40 Wall Street' },
    { year: '2005', amount: '$640M', purpose: 'Trump Tower Chicago' },
    { year: '2008', amount: 'Refinancing', purpose: 'After Trump defaulted and sued bank' },
    { year: '2012', amount: '$170M', purpose: 'Doral Golf Resort purchase' },
    { year: '2015', amount: '$125M', purpose: 'Trump DC Hotel (Old Post Office)' },
  ],
  keyFigures: [
    { name: 'Donald Trump', role: 'Borrower with history of defaults', href: '/entities/individuals/donald-trump', status: 'Subject' },
    { name: 'Eric Trump', role: 'Trump Organization EVP, loan signatory', href: '/entities/individuals/eric-trump', status: 'Subject' },
    { name: 'Donald Trump Jr.', role: 'Trump Organization EVP, loan signatory', href: '/entities/individuals/donald-trump-jr', status: 'Subject' },
    { name: 'Ivanka Trump', role: 'Trump Organization EVP, DC Hotel project', href: '/entities/individuals/ivanka-trump', status: 'Subject' },
    { name: 'Allen Weisselberg', role: 'CFO who provided financials to bank', href: '/entities/individuals/allen-weisselberg', status: 'Convicted' },
    { name: 'Rosemary Vrablic', role: 'Deutsche Bank private banker for Trump', href: '/entities/individuals/rosemary-vrablic', status: 'Resigned 2020' },
    { name: 'Dominic Scalzi', role: 'Deutsche Bank relationship manager', status: 'Resigned 2020' },
    { name: 'Val Broeksmit', role: 'Provided Deutsche Bank documents to FBI', status: 'Deceased 2022' },
  ],
  russianConnections: [
    'Deutsche Bank paid $630M in fines for $10B Russian mirror trades scheme',
    'Bank handled accounts for Russian oligarchs sanctioned after 2014',
    'VTB Bank (Russian state bank) had correspondent relationships',
    'Wealth management served Russian private clients',
    'Internal compliance raised concerns about source of Trump funds',
  ],
  redFlags: [
    { flag: 'Other banks refused', detail: 'Every major US bank declined to lend to Trump after 1990s defaults' },
    { flag: 'Prior defaults', detail: 'Trump had defaulted on previous Deutsche Bank loans' },
    { flag: 'Sued the bank', detail: 'Trump sued Deutsche Bank for $3B in 2008, yet they kept lending' },
    { flag: 'Personal guarantees', detail: 'Bank accepted Trump personal guarantees despite his overstatements' },
    { flag: 'Compliance warnings', detail: 'Internal risk officers flagged Trump accounts' },
    { flag: 'Russian division', detail: 'Some loans approved through Russian-linked wealth management unit' },
  ],
  investigations: [
    { entity: 'NY Attorney General', status: 'Active', focus: 'Financial fraud in loan applications' },
    { entity: 'House Financial Services', status: 'Subpoenas issued', focus: 'Trump-Deutsche Bank records' },
    { entity: 'House Intelligence', status: 'Subpoenas issued', focus: 'Russian money laundering connections' },
    { entity: 'SDNY (Federal)', status: 'Investigation', focus: 'Suspicious activity reports' },
    { entity: 'Manhattan DA', status: 'Active', focus: 'Financial statement fraud' },
    { entity: 'BaFin (German)', status: 'Monitoring', focus: 'Deutsche Bank compliance failures' },
  ],
  timeline: [
    { date: '1998', event: 'First major Deutsche Bank loan to Trump - $125M for 40 Wall Street' },
    { date: '2005', event: 'Deutsche Bank leads $640M loan for Trump Tower Chicago' },
    { date: '2008', event: 'Trump defaults on Chicago loan, sues Deutsche Bank for $3 billion' },
    { date: '2008', event: 'Despite lawsuit, Deutsche Bank continues relationship' },
    { date: '2012', event: 'New $170M loan for Doral Golf Resort purchase' },
    { date: '2014', event: 'Russia sanctions imposed, Deutsche Bank continues oligarch dealings' },
    { date: '2015', event: '$125M loan for Old Post Office (Trump DC Hotel)' },
    { date: '2017', event: 'Deutsche Bank pays $670M fine for Russian money laundering' },
    { date: '2019', event: 'House subpoenas Deutsche Bank for Trump records' },
    { date: '2020', event: 'Rosemary Vrablic resigns from Deutsche Bank' },
    { date: '2020', event: 'Supreme Court allows House subpoenas to proceed' },
    { date: '2021', event: 'Deutsche Bank cuts ties with Trump after January 6' },
    { date: '2022', event: 'Val Broeksmit (bank whistleblower) found dead' },
    { date: '2023', event: 'NY AG fraud case reveals inflated financial statements to bank' },
    { date: '2024', event: 'Trump ordered to pay $454M in NY fraud case' },
  ],
  charges: [
    { statute: 'Bank Fraud (18 U.S.C. § 1344)', description: 'Submitting false financial statements to obtain loans', jurisdiction: 'Federal' },
    { statute: 'Money Laundering', description: 'Potential flow of Russian funds through loans', jurisdiction: 'Federal' },
    { statute: 'Executive Law 63(12)', description: 'NY fraudulent business practices', jurisdiction: 'New York' },
    { statute: 'False Statements', description: 'Lying about asset values to secure loans', jurisdiction: 'State/Federal' },
  ],
  sources: [
    { title: 'Deutsche Bank and Trump: A Timeline', url: 'https://www.nytimes.com/2020/02/04/magazine/deutsche-bank-trump.html', date: '2020' },
    { title: 'House Subpoenas for Deutsche Bank Records', url: 'https://www.congress.gov/bill/116th-congress/house-resolution/507', date: '2019' },
    { title: 'Deutsche Bank $670M Russia Fine', url: 'https://web.archive.org/web/*/https://www.justice.gov/opa/pr/deutsche-bank-agrees-pay-over-41-million-resolve-foreign-corrupt-practices-act', date: '2017' },
    { title: 'NY AG Fraud Case Documents', url: 'https://web.archive.org/web/2024/https://ag.ny.gov/press-release/2022/attorney-general-james-files-lawsuit-against-donald-trump', date: '2022-2024' },
    { title: 'Dark Towers: Deutsche Bank Book', url: 'https://www.harpercollins.com/products/dark-towers-david-enrich', date: '2020' },
  ],
};

export default function DeutscheBankPage() {
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

        {/* Total Exposure Box */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="border-2 border-blood-800/60 bg-blood-950/20 p-6 mb-8"
        >
          <h2 className="text-xl font-bold text-white uppercase tracking-wider mb-4 flex items-center gap-2">
            <DollarSign className="w-5 h-5 text-blood-500" />
            Total Loans to Trump Organization
          </h2>
          <div className="text-center">
            <p className="text-5xl font-black text-blood-500">{investigation.totalLoaned}</p>
            <p className="text-sm text-zinc-500 mt-2">When no other major bank would lend</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-3 mt-6">
            {investigation.loanHistory.map((loan, idx) => (
              <div key={idx} className="p-3 border border-zinc-800 bg-black/50">
                <p className="text-xs text-zinc-500">{loan.year}</p>
                <p className="text-lg font-bold text-green-500">{loan.amount}</p>
                <p className="text-xs text-zinc-400 mt-1">{loan.purpose}</p>
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

            {/* Red Flags */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.25 }}
              className="glass-card p-6 border-l-4 border-blood-600"
            >
              <h2 className="text-xl font-bold text-white uppercase tracking-wider mb-4 flex items-center gap-2">
                <AlertTriangle className="w-5 h-5 text-blood-500" />
                Red Flags Ignored
              </h2>
              <div className="space-y-3">
                {investigation.redFlags.map((item, idx) => (
                  <div key={idx} className="p-3 bg-zinc-900/50 border-l-2 border-red-500">
                    <p className="font-bold text-red-400 text-sm">{item.flag}</p>
                    <p className="text-xs text-zinc-400 mt-1">{item.detail}</p>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Russian Connections */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="glass-card p-6"
            >
              <h2 className="text-xl font-bold text-white uppercase tracking-wider mb-4 flex items-center gap-2">
                <Globe className="w-5 h-5 text-blood-500" />
                Russian Money Laundering Connections
              </h2>
              <ul className="space-y-2">
                {investigation.russianConnections.map((item, idx) => (
                  <li key={idx} className="text-sm text-zinc-400 flex items-start gap-2 p-2 bg-zinc-900/30 border border-zinc-800">
                    <span className="text-blood-500 mt-1">▪</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
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
            {/* Ongoing Investigations */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              className="glass-card p-6"
            >
              <h3 className="text-lg font-bold text-white uppercase tracking-wider mb-4 flex items-center gap-2">
                <Building className="w-5 h-5 text-blood-500" />
                Investigations
              </h3>
              <div className="space-y-3">
                {investigation.investigations.map((inv, idx) => (
                  <div key={idx} className="p-3 bg-zinc-900/50 border border-zinc-800">
                    <p className="font-bold text-blood-400 text-sm">{inv.entity}</p>
                    <p className="text-xs text-yellow-400">{inv.status}</p>
                    <p className="text-xs text-zinc-500 mt-1">{inv.focus}</p>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Key Facts */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.1 }}
              className="glass-card p-6"
            >
              <h3 className="text-lg font-bold text-white uppercase tracking-wider mb-4">
                Key Facts
              </h3>
              <ul className="space-y-2">
                {investigation.keyFacts.map((fact, idx) => (
                  <li key={idx} className="text-sm text-zinc-400 flex items-start gap-2 p-2 bg-zinc-900/30">
                    <span className="text-blood-500 mt-1">•</span>
                    <span>{fact}</span>
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
