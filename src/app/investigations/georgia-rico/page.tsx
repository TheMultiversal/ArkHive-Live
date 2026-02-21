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
  title: 'Georgia Election RICO',
  subtitle: 'Criminal Enterprise to Overturn 2020 Election',
  severity: 'critical',
  status: 'Criminal Trial Pending',
  summary: 'Fulton County District Attorney Fani Willis indicted Donald Trump and 18 co-conspirators under Georgia\'s RICO (Racketeer Influenced and Corrupt Organizations) Act for their coordinated efforts to overturn the 2020 election results in Georgia. The case includes the infamous "find me 11,780 votes" phone call, fake elector schemes, harassment of election workers, and unauthorized access to voting systems.',
  keyFigures: [
    { name: 'Donald Trump', role: 'Lead defendant - orchestrated scheme to overturn election', href: '/entities/individuals/donald-trump', status: '13 counts, $200K bond' },
    { name: 'Rudy Giuliani', role: 'Lead attorney - spread false fraud claims, harassed election workers', href: '/entities/individuals/rudy-giuliani', status: '13 counts' },
    { name: 'Mark Meadows', role: 'White House Chief of Staff - participated in Trump-Raffensperger call', href: '/entities/individuals/mark-meadows', status: '2 counts' },
    { name: 'John Eastman', role: 'Attorney - authored coup memo, pushed Pence to reject electors', href: '/entities/individuals/john-eastman', status: '9 counts' },
    { name: 'Sidney Powell', role: 'Attorney - coordinated Coffee County breach, spread fraud lies', href: '/entities/individuals/sidney-powell', status: 'Pled guilty (6 misdemeanors)' },
    { name: 'Kenneth Chesebro', role: 'Attorney - architect of fake electors scheme', href: '/entities/individuals/kenneth-chesebro', status: 'Pled guilty (1 felony)' },
    { name: 'Jenna Ellis', role: 'Attorney - made false statements about fraud', href: '/entities/individuals/jenna-ellis', status: 'Pled guilty (1 felony)' },
  ],
  pleaDeals: [
    { name: 'Sidney Powell', date: 'Oct 19, 2023', counts: '6 misdemeanors', sentence: '6 years probation, $6,000 restitution, testimony required' },
    { name: 'Kenneth Chesebro', date: 'Oct 20, 2023', counts: '1 felony (conspiracy to file false documents)', sentence: '5 years probation, testimony required' },
    { name: 'Jenna Ellis', date: 'Oct 24, 2023', counts: '1 felony (aiding false statements)', sentence: '5 years probation, $5,000 restitution, testimony required' },
    { name: 'Scott Hall', date: 'Sep 29, 2023', counts: '5 misdemeanors', sentence: '5 years probation, testimony required' },
  ],
  criminalActs: [
    { act: '"Find 11,780 Votes" Call', detail: 'Trump pressured GA Secretary of State Raffensperger to "find" exact votes needed to win', evidence: 'Full audio recording released publicly' },
    { act: 'Fake Electors Scheme', detail: '16 fake Trump electors signed fraudulent certificates claiming Trump won', evidence: 'Signed documents, testimony' },
    { act: 'Ruby Freeman Harassment', detail: 'Giuliani falsely accused election worker of fraud; Trump sent agent to her home', evidence: 'Testimony, video, Trump call' },
    { act: 'Coffee County Breach', detail: 'Powell coordinated unauthorized access to voting equipment', evidence: 'Surveillance video, testimony' },
    { act: 'Pressure on State Officials', detail: 'Calls to Gov. Kemp, AG Carr demanding they help overturn results', evidence: 'Call records, testimony' },
    { act: 'False Fraud Claims', detail: 'Knowingly false claims about State Farm Arena "suitcases"', evidence: 'Debunked repeatedly, video' },
  ],
  charges: [
    { statute: 'O.C.G.A. § 16-14-4(c)', description: 'RICO Violation - Criminal Enterprise', counts: 'Trump + 18 others' },
    { statute: 'O.C.G.A. § 16-14-4(a)', description: 'Solicitation of RICO Violation', counts: 'Multiple defendants' },
    { statute: 'O.C.G.A. § 16-10-20', description: 'Solicitation of Public Officer to Violate Oath', counts: 'Trump' },
    { statute: 'O.C.G.A. § 16-4-7', description: 'Criminal Conspiracy to Defraud the State', counts: 'Multiple defendants' },
    { statute: 'O.C.G.A. § 16-10-23', description: 'Filing False Documents', counts: 'Multiple defendants' },
    { statute: 'O.C.G.A. § 16-10-20.1', description: 'Impersonating a Public Officer', counts: 'Fake electors' },
    { statute: 'O.C.G.A. § 16-9-1', description: 'Forgery', counts: 'Multiple defendants' },
  ],
  trumpRaffenspergerCall: {
    date: 'January 2, 2021',
    duration: '67 minutes',
    keyQuotes: [
      '"I just want to find 11,780 votes, which is one more than we have."',
      '"There\'s nothing wrong with saying, you know, that you\'ve recalculated."',
      '"You know what they did and you\'re not reporting it. That\'s a criminal offense."',
      '"The people of Georgia are angry, the people of the country are angry."',
      '"It\'s going to be very costly in many ways."',
    ],
  },
  rubyFreeman: {
    victim: 'Ruby Freeman & Shaye Moss (mother and daughter election workers)',
    allegations: 'Giuliani claimed they were passing USB drives "like vials of heroin" and counting ballots multiple times',
    reality: 'Video showed them handling legitimate ginger mints; claims thoroughly debunked',
    consequences: 'Freeman harassed, forced to flee home; Moss testified to emotional devastation',
    verdict: '$148 million defamation judgment against Giuliani (Dec 2023)',
  },
  timeline: [
    { date: 'Nov 2020', event: 'Biden wins Georgia by 11,779 votes' },
    { date: 'Dec 3, 2020', event: 'Giuliani shows "suitcase" video at state hearing; claims immediately debunked' },
    { date: 'Dec 14, 2020', event: '16 fake Trump electors meet in Georgia, sign false certificates' },
    { date: 'Jan 2, 2021', event: 'Trump "find 11,780 votes" call to Raffensperger' },
    { date: 'Jan 7, 2021', event: 'Coffee County voting systems breached at Powell\'s direction' },
    { date: 'Feb 2021', event: 'Fulton County DA opens investigation' },
    { date: 'May 2022', event: 'Special grand jury impaneled' },
    { date: 'Jun 2022', event: 'Ruby Freeman, Shaye Moss testify to Jan 6 Committee' },
    { date: 'Dec 2022', event: 'Special grand jury completes work, recommends indictments' },
    { date: 'Aug 14, 2023', event: 'Grand jury returns indictment: Trump and 18 co-defendants' },
    { date: 'Aug 24, 2023', event: 'Trump surrenders at Fulton County Jail, mugshot taken' },
    { date: 'Sep-Oct 2023', event: 'Four defendants plead guilty, agree to testify' },
    { date: 'Dec 2023', event: 'Giuliani ordered to pay $148M to Freeman and Moss' },
    { date: '2024', event: 'Trial date pending; appeals ongoing' },
  ],
  sources: [
    { title: 'Georgia RICO Indictment (98 pages)', url: 'https://d3i6fh83elv35t.cloudfront.net/static/2023/08/CRIMINAL-INDICTMENT-Trump-Fulton-County-GA.pdf', date: 'Aug 2023' },
    { title: 'Trump-Raffensperger Call (full audio)', url: 'https://www.washingtonpost.com/video/politics/audio-trumps-full-jan-2-call-with-ga-secretary-of-state/2021/01/03/3f9426f4-7937-4718-8a66-9f574028e68f_video.html', date: 'Jan 2021' },
    { title: 'Giuliani Defamation Verdict', url: 'https://www.reuters.com/legal/giuliani-ordered-pay-148-million-georgia-election-workers-2023-12-15/', date: 'Dec 2023' },
    { title: 'Coffee County Breach Investigation', url: 'https://www.reuters.com/investigates/special-report/usa-election-georgia-breach/', date: '2022' },
    { title: 'Plea Agreement - Sidney Powell', url: 'https://s3.documentcloud.org/documents/24080577/powell-plea-deal.pdf', date: 'Oct 2023' },
  ],
};

export default function GeorgiaRICOPage() {
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

        {/* Trump-Raffensperger Call */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="border-2 border-red-800/60 bg-red-950/20 p-6 mb-8"
        >
          <h2 className="text-xl font-bold text-white uppercase tracking-wider mb-4 flex items-center gap-2">
            <AlertTriangle className="w-5 h-5 text-red-500" />
            &quot;Find 11,780 Votes&quot; Call - {investigation.trumpRaffenspergerCall.date}
          </h2>
          <p className="text-zinc-400 mb-4">Duration: {investigation.trumpRaffenspergerCall.duration}</p>
          <div className="space-y-3">
            {investigation.trumpRaffenspergerCall.keyQuotes.map((quote, idx) => (
              <div key={idx} className="border border-red-800/50 bg-black/50 p-3">
                <p className="text-zinc-300 italic">&quot;{quote}&quot;</p>
                <p className="text-xs text-zinc-500 mt-1">- Donald Trump</p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Key Figures */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15 }}
          className="border-2 border-zinc-800 bg-black/60 p-6 mb-8"
        >
          <h2 className="text-xl font-bold text-white uppercase tracking-wider mb-4 flex items-center gap-2">
            <Users className="w-5 h-5 text-blood-500" />
            Key Defendants
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

        {/* Plea Deals */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="border-2 border-green-800/60 bg-green-950/20 p-6 mb-8"
        >
          <h2 className="text-xl font-bold text-white uppercase tracking-wider mb-4 flex items-center gap-2">
            <Scale className="w-5 h-5 text-green-500" />
            Plea Deals (Cooperating Witnesses)
          </h2>
          <div className="space-y-3">
            {investigation.pleaDeals.map((deal, idx) => (
              <div key={idx} className="border border-zinc-700 bg-zinc-900/50 p-4">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="font-bold text-white">{deal.name}</h3>
                  <span className="text-xs text-green-400">{deal.date}</span>
                </div>
                <p className="text-sm text-zinc-400">Pled to: {deal.counts}</p>
                <p className="text-sm text-zinc-500">{deal.sentence}</p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Ruby Freeman Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.25 }}
          className="border-2 border-yellow-800/60 bg-yellow-950/20 p-6 mb-8"
        >
          <h2 className="text-xl font-bold text-white uppercase tracking-wider mb-4 flex items-center gap-2">
            <Building className="w-5 h-5 text-yellow-500" />
            Election Worker Harassment
          </h2>
          <div className="space-y-4">
            <div>
              <h3 className="text-yellow-400 font-bold mb-2">Victims: {investigation.rubyFreeman.victim}</h3>
              <p className="text-zinc-300 mb-2"><strong>False Allegations:</strong> {investigation.rubyFreeman.allegations}</p>
              <p className="text-zinc-300 mb-2"><strong>Reality:</strong> {investigation.rubyFreeman.reality}</p>
              <p className="text-zinc-300 mb-2"><strong>Impact:</strong> {investigation.rubyFreeman.consequences}</p>
            </div>
            <div className="border border-yellow-800/50 bg-black/50 p-4">
              <div className="flex items-center gap-2">
                <DollarSign className="w-5 h-5 text-green-500" />
                <span className="text-2xl font-bold text-green-400">$148 Million</span>
              </div>
              <p className="text-zinc-400">Defamation judgment against Giuliani (Dec 2023)</p>
            </div>
          </div>
        </motion.div>

        {/* Criminal Acts */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="border-2 border-zinc-800 bg-black/60 p-6 mb-8"
        >
          <h2 className="text-xl font-bold text-white uppercase tracking-wider mb-4 flex items-center gap-2">
            <AlertTriangle className="w-5 h-5 text-blood-500" />
            Criminal Acts in Enterprise
          </h2>
          <div className="space-y-3">
            {investigation.criminalActs.map((act, idx) => (
              <div key={idx} className="border border-zinc-700 bg-zinc-900/50 p-4">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="font-bold text-white">{act.act}</h3>
                  <span className="text-xs text-blood-500">Evidence: {act.evidence}</span>
                </div>
                <p className="text-sm text-zinc-400">{act.detail}</p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Charges */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.35 }}
          className="border-2 border-zinc-800 bg-black/60 p-6 mb-8"
        >
          <h2 className="text-xl font-bold text-white uppercase tracking-wider mb-4 flex items-center gap-2">
            <Scale className="w-5 h-5 text-blood-500" />
            Criminal Charges
          </h2>
          <div className="space-y-3">
            {investigation.charges.map((charge, idx) => (
              <div key={idx} className="border border-zinc-700 bg-zinc-900/50 p-4">
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="font-mono text-sm text-blood-500">{charge.statute}</h3>
                    <p className="text-zinc-300">{charge.description}</p>
                  </div>
                  <span className="text-xs text-zinc-500">{charge.counts}</span>
                </div>
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
