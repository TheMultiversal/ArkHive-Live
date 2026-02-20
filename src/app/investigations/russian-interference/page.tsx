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
  Globe,
  Shield,
} from 'lucide-react';
import GlitchText from '@/components/effects/GlitchText';

const investigation = {
  title: 'Russian Election Interference',
  subtitle: 'The 2016 Attack on American Democracy',
  severity: 'critical',
  status: 'Mueller Report Complete - Obstruction Unprosecuted',
  summary: 'Russian government-directed interference in the 2016 U.S. presidential election through hacking, social media manipulation, and contacts with Trump campaign officials. The Mueller investigation documented "sweeping and systematic" Russian efforts to help Trump win, and extensive contacts between Russian operatives and Trump campaign members. Trump obstructed the investigation at least 10 times but was not prosecuted due to DOJ policy.',
  keyFindings: [
    'Russia conducted "sweeping and systematic" interference in 2016 election',
    'Russian military intelligence (GRU) hacked DNC and Clinton campaign',
    'Internet Research Agency ran massive social media disinformation campaign',
    'Trump campaign welcomed and expected to benefit from Russian interference',
    '140+ contacts between Trump campaign/transition team and Russian nationals',
    'Trump attempted to obstruct investigation at least 10 times',
    'Mueller did not exonerate Trump on obstruction ("if we had confidence that the President clearly did not commit a crime, we would have said so")',
  ],
  keyFigures: [
    { name: 'Donald Trump', role: 'Beneficiary of interference, obstructed investigation', href: '/entities/individuals/donald-trump', status: 'Unindicted' },
    { name: 'Vladimir Putin', role: 'Ordered and directed interference campaign', href: '/entities/individuals/vladimir-putin', status: 'No jurisdiction' },
    { name: 'Paul Manafort', role: 'Campaign Chairman, shared polling data with Russian intelligence', href: '/entities/individuals/paul-manafort', status: 'Convicted/Pardoned' },
    { name: 'Michael Flynn', role: 'National Security Advisor, lied about Kislyak calls', href: '/entities/individuals/michael-flynn', status: 'Convicted/Pardoned' },
    { name: 'Roger Stone', role: 'Coordinated with WikiLeaks on stolen emails', href: '/entities/individuals/roger-stone', status: 'Convicted/Pardoned' },
    { name: 'George Papadopoulos', role: 'Foreign policy advisor, Russia contacts triggered FBI investigation', href: '/entities/individuals/george-papadopoulos', status: 'Convicted/Pardoned' },
    { name: 'Michael Cohen', role: 'Personal lawyer, pursued Trump Tower Moscow during campaign', href: '/entities/individuals/michael-cohen', status: 'Convicted' },
  ],
  russianOperatives: [
    { name: 'Internet Research Agency', type: 'Troll Farm', activity: '126 million Americans reached via Facebook alone' },
    { name: 'GRU Unit 26165', type: 'Military Intelligence', activity: 'Hacked DNC, DCCC, Clinton campaign' },
    { name: 'GRU Unit 74455', type: 'Military Intelligence', activity: 'Released stolen emails via DCLeaks, Guccifer 2.0' },
    { name: 'Konstantin Kilimnik', type: 'Russian Intelligence Agent', activity: 'Received Trump campaign polling data from Manafort' },
    { name: 'Natalia Veselnitskaya', type: 'Russian Lawyer', activity: 'Trump Tower meeting offering "dirt" on Clinton' },
    { name: 'Sergey Kislyak', type: 'Russian Ambassador', activity: 'Multiple contacts with Trump campaign officials' },
  ],
  trumpTowerMeeting: {
    date: 'June 9, 2016',
    location: 'Trump Tower, New York',
    purpose: 'Promised "dirt" on Hillary Clinton as "part of Russia and its government\'s support for Mr. Trump"',
    attendees: [
      { name: 'Donald Trump Jr.', role: 'Organized meeting, responded "I love it"', href: '/entities/individuals/donald-trump-jr' },
      { name: 'Jared Kushner', role: 'Attended meeting', href: '/entities/individuals/jared-kushner' },
      { name: 'Paul Manafort', role: 'Campaign Chairman, attended meeting', href: '/entities/individuals/paul-manafort' },
      { name: 'Natalia Veselnitskaya', role: 'Russian government-connected lawyer', href: '/entities/individuals/natalia-veselnitskaya' },
      { name: 'Rinat Akhmetshin', role: 'Russian-American lobbyist with intelligence ties', href: '/entities/individuals/rinat-akhmetshin' },
    ],
  },
  obstructionInstances: [
    { act: 'Firing FBI Director James Comey', detail: 'Admitted on TV it was because of "the Russia thing"', evidence: 'Strong' },
    { act: 'Attempting to fire Special Counsel Mueller', detail: 'Ordered Don McGahn to fire Mueller, McGahn refused', evidence: 'Strong' },
    { act: 'Attempting to limit investigation scope', detail: 'Pressured Sessions to un-recuse and limit to future elections', evidence: 'Strong' },
    { act: 'Witness tampering (Manafort)', detail: 'Dangled pardons while Manafort was cooperating', evidence: 'Strong' },
    { act: 'Witness tampering (Cohen)', detail: 'Public attacks on Cohen after he began cooperating', evidence: 'Strong' },
    { act: 'Concealing evidence', detail: 'Directed false statements about Trump Tower meeting', evidence: 'Strong' },
    { act: 'Pressuring DOJ officials', detail: 'Demanded "loyalty" from Comey', evidence: 'Strong' },
  ],
  convictions: [
    { name: 'Paul Manafort', charges: 'Tax fraud, bank fraud, conspiracy', sentence: '7.5 years', pardoned: true },
    { name: 'Michael Flynn', charges: 'Lying to FBI about Russian contacts', sentence: 'Pending', pardoned: true },
    { name: 'Roger Stone', charges: 'Witness tampering, lying to Congress', sentence: '40 months', pardoned: true },
    { name: 'Michael Cohen', charges: 'Lying to Congress about Trump Tower Moscow', sentence: '3 years', pardoned: false },
    { name: 'George Papadopoulos', charges: 'Lying to FBI', sentence: '14 days', pardoned: true },
    { name: 'Rick Gates', charges: 'Conspiracy, lying to FBI', sentence: '45 days', pardoned: false },
  ],
  timeline: [
    { date: 'Jun 2015', event: 'Trump announces presidential campaign' },
    { date: 'Jun 2016', event: 'Trump Tower meeting with Russians offering "dirt" on Clinton' },
    { date: 'Jul 2016', event: 'WikiLeaks begins releasing DNC emails stolen by Russian military' },
    { date: 'Jul 2016', event: 'Trump: "Russia, if you\'re listening, I hope you\'re able to find the 30,000 emails"' },
    { date: 'Jul 2016', event: 'FBI opens counterintelligence investigation "Crossfire Hurricane"' },
    { date: 'Aug 2016', event: 'Manafort shares internal polling data with Russian intelligence agent Kilimnik' },
    { date: 'Oct 2016', event: 'WikiLeaks releases Podesta emails 30 minutes after Access Hollywood tape' },
    { date: 'Nov 2016', event: 'Trump wins election' },
    { date: 'Dec 2016', event: 'Flynn discusses sanctions with Russian Ambassador Kislyak' },
    { date: 'Jan 2017', event: 'U.S. Intelligence Community concludes Russia interfered to help Trump' },
    { date: 'Jan 2017', event: 'Trump briefed on Russian interference, dismisses it' },
    { date: 'Feb 2017', event: 'Flynn fired for lying about Russian contacts' },
    { date: 'May 2017', event: 'Trump fires FBI Director Comey over "the Russia thing"' },
    { date: 'May 2017', event: 'Mueller appointed Special Counsel' },
    { date: 'Jun 2017', event: 'Trump orders McGahn to fire Mueller; McGahn refuses' },
    { date: 'Jul 2018', event: 'Helsinki summit: Trump sides with Putin over U.S. intelligence' },
    { date: 'Apr 2019', event: 'Mueller Report released (redacted)' },
    { date: 'Jul 2019', event: 'Mueller testifies: "not an exoneration" of Trump' },
    { date: 'Aug 2020', event: 'Senate Intelligence Committee confirms Russia helped Trump' },
  ],
  sources: [
    { title: 'Mueller Report (Volume I - Russian Interference)', url: 'https://www.justice.gov/archives/sco/file/1373816/dl', date: '2019' },
    { title: 'Mueller Report (Volume II - Obstruction)', url: 'https://www.justice.gov/archives/sco/file/1373816/dl', date: '2019' },
    { title: 'Senate Intelligence Committee Report Vol. 5', url: 'https://www.intelligence.senate.gov/sites/default/files/documents/report_volume5.pdf', date: '2020' },
    { title: 'ICA: Russian Activities and Intentions', url: 'https://www.dni.gov/files/documents/ICA_2017_01.pdf', date: '2017' },
    { title: 'Mueller Indictment - Internet Research Agency', url: 'https://web.archive.org/web/2024/https://www.justice.gov/file/1035477/dl', date: '2018' },
    { title: 'Mueller Indictment - GRU Officers', url: 'https://web.archive.org/web/2024/https://www.justice.gov/file/1080281/dl', date: '2018' },
    { title: 'Trump-Russia Contacts (documented)', url: 'https://www.themoscowproject.org/collusion-timeline/', date: '2019' },
  ],
};

export default function RussianInterferencePage() {
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

        {/* Key Findings */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="border-2 border-red-800/60 bg-red-950/20 p-6 mb-8"
        >
          <h2 className="text-xl font-bold text-white uppercase tracking-wider mb-4 flex items-center gap-2">
            <AlertTriangle className="w-5 h-5 text-red-500" />
            Mueller Investigation Key Findings
          </h2>
          <ul className="space-y-2">
            {investigation.keyFindings.map((finding, idx) => (
              <li key={idx} className="flex items-start gap-3 text-zinc-300">
                <span className="text-blood-500">■</span>
                {finding}
              </li>
            ))}
          </ul>
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
            Key American Figures
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

        {/* Russian Operatives */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="border-2 border-zinc-800 bg-black/60 p-6 mb-8"
        >
          <h2 className="text-xl font-bold text-white uppercase tracking-wider mb-4 flex items-center gap-2">
            <Globe className="w-5 h-5 text-blood-500" />
            Russian Operatives & Entities
          </h2>
          <div className="space-y-3">
            {investigation.russianOperatives.map((op, idx) => (
              <div key={idx} className="border border-zinc-700 bg-zinc-900/50 p-4">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="font-bold text-white">{op.name}</h3>
                  <span className="text-xs text-blood-500">{op.type}</span>
                </div>
                <p className="text-sm text-zinc-400">{op.activity}</p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Trump Tower Meeting */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.25 }}
          className="border-2 border-yellow-800/60 bg-yellow-950/20 p-6 mb-8"
        >
          <h2 className="text-xl font-bold text-white uppercase tracking-wider mb-4 flex items-center gap-2">
            <Shield className="w-5 h-5 text-yellow-500" />
            Trump Tower Meeting - June 9, 2016
          </h2>
          <p className="text-zinc-300 mb-4">{investigation.trumpTowerMeeting.purpose}</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {investigation.trumpTowerMeeting.attendees.map((attendee, idx) => (
              attendee.href ? (
                <Link
                  key={idx}
                  href={attendee.href}
                  className="border border-zinc-700 bg-zinc-900/50 p-3 hover:border-blood-600 transition-colors group"
                >
                  <h3 className="font-bold text-white group-hover:text-blood-500">{attendee.name}</h3>
                  <p className="text-sm text-zinc-400">{attendee.role}</p>
                </Link>
              ) : (
                <div key={idx} className="border border-zinc-700 bg-zinc-900/50 p-3">
                  <h3 className="font-bold text-white">{attendee.name}</h3>
                  <p className="text-sm text-zinc-400">{attendee.role}</p>
                </div>
              )
            ))}
          </div>
        </motion.div>

        {/* Obstruction Instances */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="border-2 border-zinc-800 bg-black/60 p-6 mb-8"
        >
          <h2 className="text-xl font-bold text-white uppercase tracking-wider mb-4 flex items-center gap-2">
            <Scale className="w-5 h-5 text-blood-500" />
            Obstruction of Justice Instances
          </h2>
          <div className="space-y-3">
            {investigation.obstructionInstances.map((obs, idx) => (
              <div key={idx} className="border border-zinc-700 bg-zinc-900/50 p-4">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="font-bold text-white">{obs.act}</h3>
                  <span className="text-xs text-red-400">Evidence: {obs.evidence}</span>
                </div>
                <p className="text-sm text-zinc-400">{obs.detail}</p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Convictions */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.35 }}
          className="border-2 border-zinc-800 bg-black/60 p-6 mb-8"
        >
          <h2 className="text-xl font-bold text-white uppercase tracking-wider mb-4">
            Convictions from Investigation
          </h2>
          <div className="space-y-3">
            {investigation.convictions.map((conv, idx) => (
              <div key={idx} className="border border-zinc-700 bg-zinc-900/50 p-4">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="font-bold text-white">{conv.name}</h3>
                  <span className={`text-xs ${conv.pardoned ? 'text-red-400' : 'text-green-400'}`}>
                    {conv.pardoned ? 'PARDONED' : 'Served'}
                  </span>
                </div>
                <p className="text-sm text-zinc-400">{conv.charges}</p>
                <p className="text-sm text-zinc-500">Sentence: {conv.sentence}</p>
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
                <span className="text-blood-500 font-mono text-sm whitespace-nowrap min-w-[80px]">{item.date}</span>
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
