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
} from 'lucide-react';
import GlitchText from '@/components/effects/GlitchText';

const investigation = {
  title: 'Hush Money Election Fraud',
  subtitle: 'The Stormy Daniels Case - 34 Felony Convictions',
  severity: 'critical',
  status: 'CONVICTED - 34 Felonies',
  summary: 'Donald Trump became the first former U.S. President convicted of felony crimes. A Manhattan jury found him guilty on all 34 counts of falsifying business records to conceal hush money payments made to adult film actress Stormy Daniels to suppress her story of an affair before the 2016 election. The payments were made through Michael Cohen and disguised as legal fees to influence the election.',
  verdict: {
    date: 'May 30, 2024',
    counts: 34,
    verdict: 'GUILTY on all counts',
    felonyClass: 'Class E Felony (elevated due to intent to commit/conceal another crime)',
    maxSentence: '4 years per count (136 years theoretical maximum)',
    judge: 'Justice Juan Merchan',
    juryDeliberation: '9.5 hours',
  },
  keyFigures: [
    { name: 'Donald Trump', role: 'Defendant - Directed payments, signed falsified checks', href: '/entities/individuals/donald-trump', status: 'CONVICTED' },
    { name: 'Michael Cohen', role: 'Made payment, pled guilty, key prosecution witness', href: '/entities/individuals/michael-cohen', status: 'Served 13 months' },
    { name: 'Stormy Daniels', role: 'Adult film actress paid $130,000 for silence', href: '/entities/individuals/stormy-daniels', status: 'Key witness' },
    { name: 'Karen McDougal', role: 'Playboy model paid $150,000 via AMI "catch and kill"', href: '/entities/individuals/karen-mcdougal', status: 'Witness' },
    { name: 'David Pecker', role: 'AMI CEO, orchestrated "catch and kill" scheme', href: '/entities/individuals/david-pecker', status: 'Cooperating witness' },
    { name: 'Allen Weisselberg', role: 'CFO, arranged false documentation', href: '/entities/individuals/allen-weisselberg', status: 'Pled guilty to perjury' },
  ],
  paymentScheme: {
    danielsPayment: '$130,000 via shell company Essential Consultants LLC',
    mcdougalPayment: '$150,000 via American Media Inc. (National Enquirer)',
    doormanPayment: '$30,000 to suppress false Trump love child story',
    cohenReimbursement: '$420,000 (grossed up for taxes + bonus)',
    falsification: '34 checks, invoices, and ledger entries falsely labeled "legal expenses"',
  },
  charges: [
    { count: '1-11', description: 'Falsifying invoices from Michael Cohen', evidence: 'Monthly invoices marked "legal expenses"' },
    { count: '12-22', description: 'Falsifying checks to Michael Cohen', evidence: 'Checks signed by Trump, marked "retainer"' },
    { count: '23-34', description: 'Falsifying ledger entries', evidence: 'Trump Org records categorizing as legal fees' },
  ],
  catchAndKill: [
    { story: 'Karen McDougal affair', payment: '$150,000', outlet: 'National Enquirer/AMI', status: 'Story killed' },
    { story: 'Stormy Daniels affair', payment: '$130,000', outlet: 'Cohen/Essential Consultants', status: 'Story killed' },
    { story: 'Trump doorman (false story)', payment: '$30,000', outlet: 'National Enquirer/AMI', status: 'Story killed' },
  ],
  timeline: [
    { date: '2006', event: 'Alleged affair between Trump and Stormy Daniels' },
    { date: '2006-2007', event: 'Alleged affair between Trump and Karen McDougal' },
    { date: 'Aug 2015', event: 'David Pecker meets Trump and Cohen at Trump Tower; agrees to be campaign "eyes and ears"' },
    { date: 'Jun 2016', event: 'AMI pays doorman $30,000 for (false) Trump love child story' },
    { date: 'Aug 2016', event: 'AMI pays Karen McDougal $150,000' },
    { date: 'Oct 7, 2016', event: 'Access Hollywood tape released' },
    { date: 'Oct 27, 2016', event: 'Cohen pays Stormy Daniels $130,000' },
    { date: 'Jan 2017', event: 'Trump Organization begins reimbursing Cohen as "legal expenses"' },
    { date: 'Feb-Dec 2017', event: '11 monthly payments of ~$35,000 each to Cohen' },
    { date: 'Apr 2018', event: 'FBI raids Cohen\'s office; discovers payment records' },
    { date: 'Aug 2018', event: 'Cohen pleads guilty, implicates "Individual-1" (Trump)' },
    { date: 'Dec 2018', event: 'Prosecutors: Trump directed payments violating campaign finance law' },
    { date: 'Mar 2023', event: 'Manhattan DA Bragg indicts Trump on 34 counts' },
    { date: 'Apr 2023', event: 'Trump arraigned, pleads not guilty' },
    { date: 'Apr 2024', event: 'Trial begins in Manhattan' },
    { date: 'May 2024', event: 'Key testimony from Pecker, Daniels, Cohen, Hicks' },
    { date: 'May 30, 2024', event: 'Jury returns GUILTY verdict on all 34 counts' },
    { date: 'Jul 2024', event: 'Sentencing postponed pending Supreme Court immunity decision' },
  ],
  keyTestimony: [
    { witness: 'David Pecker', revelation: 'Confirmed August 2015 Trump Tower meeting; AMI\'s role as campaign asset' },
    { witness: 'Stormy Daniels', revelation: 'Detailed alleged 2006 encounter and payment negotiations' },
    { witness: 'Michael Cohen', revelation: 'Trump directed payments; signed checks while president' },
    { witness: 'Hope Hicks', revelation: 'Cried on stand; confirmed Trump\'s concerns about story impact on campaign' },
    { witness: 'Keith Davidson', revelation: 'Negotiated NDAs for both Daniels and McDougal' },
  ],
  sources: [
    { title: 'Manhattan DA Indictment', url: 'https://www.manhattanda.org/wp-content/uploads/2023/04/Donald-J.-Trump-Indictment.pdf', date: 'Mar 2023' },
    { title: 'Statement of Facts', url: 'https://www.manhattanda.org/wp-content/uploads/2023/04/Donald-J.-Trump-Statement-of-Facts.pdf', date: 'Mar 2023' },
    { title: 'Cohen Plea Agreement', url: 'https://www.justice.gov/usao-sdny/press-release/file/1088966/dl', date: 'Aug 2018' },
    { title: 'AMI Non-Prosecution Agreement', url: 'https://www.justice.gov/usao-sdny/press-release/file/1115006/dl', date: 'Dec 2018' },
    { title: 'FEC Referral to DOJ', url: 'https://www.fec.gov/data/legal/matter-under-review/7324/', date: '2018' },
    { title: 'Trial Transcript Excerpts', url: 'https://www.nycourts.gov/courts/1jd/supctmanh/', date: 'May 2024' },
  ],
};

export default function HushMoneyPage() {
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
            <span className="px-3 py-1 text-xs font-bold uppercase border border-red-500/30 bg-red-500/20 text-red-400 animate-pulse">
              {investigation.status}
            </span>
          </div>
          <h1 className="text-3xl lg:text-4xl font-black text-white uppercase tracking-wider mb-2">
            <GlitchText text={investigation.title} />
          </h1>
          <p className="text-lg text-blood-500 font-bold mb-4">{investigation.subtitle}</p>
          <p className="text-zinc-400 leading-relaxed">{investigation.summary}</p>
        </motion.div>

        {/* Verdict */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="border-2 border-red-800/60 bg-red-950/20 p-6 mb-8"
        >
          <h2 className="text-xl font-bold text-white uppercase tracking-wider mb-4 flex items-center gap-2">
            <Scale className="w-5 h-5 text-red-500" />
            Historic Conviction - {investigation.verdict.date}
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-4">
            <div className="border border-red-800/50 bg-black/50 p-4 text-center">
              <p className="text-4xl font-bold text-red-500">{investigation.verdict.counts}</p>
              <p className="text-sm text-zinc-400">Felony Counts</p>
            </div>
            <div className="border border-red-800/50 bg-black/50 p-4 text-center col-span-2">
              <p className="text-2xl font-bold text-red-400">{investigation.verdict.verdict}</p>
              <p className="text-sm text-zinc-400">Unanimous Jury Verdict</p>
            </div>
            <div className="border border-red-800/50 bg-black/50 p-4 text-center">
              <p className="text-xl font-bold text-zinc-300">{investigation.verdict.juryDeliberation}</p>
              <p className="text-sm text-zinc-400">Deliberation</p>
            </div>
          </div>
          <div className="space-y-2 text-zinc-300">
            <p><strong className="text-white">Judge:</strong> {investigation.verdict.judge}</p>
            <p><strong className="text-white">Felony Class:</strong> {investigation.verdict.felonyClass}</p>
            <p><strong className="text-white">Maximum Sentence:</strong> {investigation.verdict.maxSentence}</p>
          </div>
        </motion.div>

        {/* Payment Scheme */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15 }}
          className="border-2 border-zinc-800 bg-black/60 p-6 mb-8"
        >
          <h2 className="text-xl font-bold text-white uppercase tracking-wider mb-4 flex items-center gap-2">
            <DollarSign className="w-5 h-5 text-blood-500" />
            The Payment Scheme
          </h2>
          <div className="space-y-3">
            <div className="border border-zinc-700 bg-zinc-900/50 p-4">
              <div className="flex justify-between items-start">
                <span className="text-white">Stormy Daniels Payment</span>
                <span className="text-blood-500 font-bold">{investigation.paymentScheme.danielsPayment}</span>
              </div>
            </div>
            <div className="border border-zinc-700 bg-zinc-900/50 p-4">
              <div className="flex justify-between items-start">
                <span className="text-white">Karen McDougal Payment</span>
                <span className="text-blood-500 font-bold">{investigation.paymentScheme.mcdougalPayment}</span>
              </div>
            </div>
            <div className="border border-zinc-700 bg-zinc-900/50 p-4">
              <div className="flex justify-between items-start">
                <span className="text-white">Doorman Payment</span>
                <span className="text-blood-500 font-bold">{investigation.paymentScheme.doormanPayment}</span>
              </div>
            </div>
            <div className="border border-zinc-700 bg-zinc-900/50 p-4">
              <div className="flex justify-between items-start">
                <span className="text-white">Cohen Reimbursement (grossed up)</span>
                <span className="text-blood-500 font-bold">{investigation.paymentScheme.cohenReimbursement}</span>
              </div>
            </div>
            <div className="border border-yellow-800/50 bg-yellow-950/30 p-4">
              <p className="text-yellow-400 font-bold">Falsification Method:</p>
              <p className="text-zinc-300">{investigation.paymentScheme.falsification}</p>
            </div>
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

        {/* Charges */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.25 }}
          className="border-2 border-zinc-800 bg-black/60 p-6 mb-8"
        >
          <h2 className="text-xl font-bold text-white uppercase tracking-wider mb-4 flex items-center gap-2">
            <Scale className="w-5 h-5 text-blood-500" />
            34 Felony Counts - Falsifying Business Records
          </h2>
          <div className="space-y-3">
            {investigation.charges.map((charge, idx) => (
              <div key={idx} className="border border-zinc-700 bg-zinc-900/50 p-4">
                <div className="flex justify-between items-start mb-2">
                  <span className="text-blood-500 font-bold">Counts {charge.count}</span>
                  <span className="text-xs text-red-400">GUILTY</span>
                </div>
                <p className="text-zinc-300">{charge.description}</p>
                <p className="text-sm text-zinc-500 mt-1">Evidence: {charge.evidence}</p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Catch and Kill */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="border-2 border-yellow-800/60 bg-yellow-950/20 p-6 mb-8"
        >
          <h2 className="text-xl font-bold text-white uppercase tracking-wider mb-4 flex items-center gap-2">
            <AlertTriangle className="w-5 h-5 text-yellow-500" />
            &quot;Catch and Kill&quot; Scheme
          </h2>
          <div className="space-y-3">
            {investigation.catchAndKill.map((item, idx) => (
              <div key={idx} className="border border-zinc-700 bg-zinc-900/50 p-4">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="font-bold text-white">{item.story}</h3>
                  <span className="text-blood-500">{item.payment}</span>
                </div>
                <p className="text-sm text-zinc-400">Outlet: {item.outlet}</p>
                <p className="text-xs text-red-400">{item.status}</p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Key Testimony */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.35 }}
          className="border-2 border-zinc-800 bg-black/60 p-6 mb-8"
        >
          <h2 className="text-xl font-bold text-white uppercase tracking-wider mb-4">
            Key Trial Testimony
          </h2>
          <div className="space-y-3">
            {investigation.keyTestimony.map((test, idx) => (
              <div key={idx} className="border border-zinc-700 bg-zinc-900/50 p-4">
                <h3 className="font-bold text-blood-500">{test.witness}</h3>
                <p className="text-zinc-300">{test.revelation}</p>
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
