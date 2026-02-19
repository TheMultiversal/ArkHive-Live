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
  Heart,
  Shield,
} from 'lucide-react';
import GlitchText from '@/components/effects/GlitchText';

const investigationData = {
  title: 'Sexual Assault & Misconduct',
  subtitle: '26+ Accusers, E. Jean Carroll Verdict, and a Pattern of Predatory Behavior',
  severity: 'critical' as const,
  status: 'Documented - Civil Liability Established',
  lastUpdated: 'February 2026',
  summary: `At least 26 women have publicly accused Donald Trump of sexual misconduct ranging from harassment to rape. In 2023, a federal jury found Trump liable for sexual abuse and defamation of E. Jean Carroll, awarding her $5 million. A second jury in 2024 awarded Carroll an additional $83.3 million for defamation. Trump's own words on the Access Hollywood tape|"I just start kissing them... grab them by the pussy"|confirm his predatory behavior pattern.`,
  
  accuserStats: {
    totalAccusers: '26+',
    carrollVerdict1: '$5 million',
    carrollVerdict2: '$83.3 million',
    accessHollywoodYear: '2005',
    yearSpan: '1970s-2013',
  },

  keyFigures: [
    { name: 'Donald Trump', role: 'Defendant - Found liable for sexual abuse', href: '/entities/individuals/donald-trump' },
    { name: 'E. Jean Carroll', role: 'Accuser - Won $88.3 million in verdicts', href: '/entities/individuals/e-jean-carroll' },
  ],

  carrollCase: {
    accuser: 'E. Jean Carroll',
    allegations: 'Rape in Bergdorf Goodman dressing room (mid-1990s)',
    trial1: {
      date: 'May 2023',
      verdict: 'Liable for sexual abuse and defamation',
      award: '$5 million',
      findings: 'Jury found Trump sexually abused Carroll',
    },
    trial2: {
      date: 'January 2024',
      verdict: 'Liable for defamation',
      award: '$83.3 million',
      findings: 'Jury punished Trump for continued attacks on Carroll',
    },
    totalAward: '$88.3 million',
    juryNote: 'Jury clarified that finding of "sexual abuse" under NY law encompasses what is commonly understood as rape',
  },

  accessHollywood: {
    date: 'October 7, 2016',
    context: 'Recorded in 2005, leaked during campaign',
    quotes: [
      '"I just start kissing them. It\'s like a magnet. Just kiss. I don\'t even wait."',
      '"And when you\'re a star, they let you do it. You can do anything."',
      '"Grab \'em by the pussy. You can do anything."',
      '"I moved on her like a bitch."',
    ],
    response: 'Trump dismissed as "locker room talk"',
    aftermath: 'Multiple women came forward after release',
  },

  publicAccusers: [
    { name: 'E. Jean Carroll', allegation: 'Rape (mid-1990s)', outcome: 'Won $88.3M in civil verdicts' },
    { name: 'Jill Harth', allegation: 'Sexual assault, attempted rape (1993)', outcome: 'Filed lawsuit, settled' },
    { name: 'Ivana Trump', allegation: 'Rape (1989)', outcome: 'Alleged in divorce deposition' },
    { name: 'Summer Zervos', allegation: 'Sexual assault (2007)', outcome: 'Defamation lawsuit' },
    { name: 'Jessica Leeds', allegation: 'Groping on airplane (1970s)', outcome: 'Public accusation' },
    { name: 'Kristin Anderson', allegation: 'Groping (early 1990s)', outcome: 'Public accusation' },
    { name: 'Rachel Crooks', allegation: 'Forced kissing (2005)', outcome: 'Public accusation' },
    { name: 'Natasha Stoynoff', allegation: 'Forced kissing (2005)', outcome: 'Public accusation' },
    { name: 'Cassandra Searles', allegation: 'Groping, harassment (2013)', outcome: 'Miss USA pageant' },
    { name: 'Mindy McGillivray', allegation: 'Groping (2003)', outcome: 'Public accusation' },
    { name: 'Temple Taggart', allegation: 'Forced kissing (1997)', outcome: 'Miss USA pageant' },
    { name: 'Karena Virginia', allegation: 'Groping (1998)', outcome: 'Public accusation' },
  ],

  pageantMisconduct: {
    context: 'Trump owned Miss USA, Miss Universe, Miss Teen USA pageants',
    allegations: [
      'Walking into dressing rooms while contestants changing',
      'Multiple contestants reported unwanted intrusions',
      'Trump bragged about this on Howard Stern show',
      'Teen pageant contestants (minors) also reported incidents',
      '"I\'ll go backstage before a show and everyone\'s getting dressed"',
    ],
    howardSternQuote: '"Well, I\'ll tell you the funniest is that I\'ll go backstage before a show, and everyone\'s getting dressed and ready and everything else, and you know, no men are anywhere. And I\'m allowed to go in because I\'m the owner of the pageant."',
  },

  timeline: [
    { date: '1970s', event: 'Jessica Leeds alleges groping on airplane' },
    { date: '1989', event: 'Ivana Trump alleges rape in divorce deposition' },
    { date: '1993', event: 'Jill Harth alleges assault, files lawsuit' },
    { date: 'Mid-1990s', event: 'E. Jean Carroll alleges rape at Bergdorf Goodman' },
    { date: '1997-2013', event: 'Multiple pageant contestants allege misconduct' },
    { date: '2005', event: 'Access Hollywood tape recorded' },
    { date: 'October 7, 2016', event: 'Access Hollywood tape released' },
    { date: 'October 2016', event: 'Multiple women come forward after tape' },
    { date: 'January 2017', event: 'Summer Zervos files defamation lawsuit' },
    { date: 'June 2019', event: 'E. Jean Carroll goes public with rape allegation' },
    { date: 'November 2019', event: 'Carroll files defamation lawsuit' },
    { date: 'May 2023', event: 'Carroll wins first trial - $5M verdict' },
    { date: 'January 2024', event: 'Carroll wins second trial - $83.3M verdict' },
    { date: '2024', event: 'Trump continues to attack Carroll, faces contempt risk' },
  ],

  defamationPattern: [
    'Called accusers "liars" and "not my type"',
    'Claimed women were seeking fame or money',
    'Attacked physical appearance of accusers',
    'Called Carroll allegations "a hoax"',
    'Continued attacks even after losing verdicts',
    'Used presidential platform to demean accusers',
  ],

  legalStatus: [
    { case: 'E. Jean Carroll I', status: 'Verdict: $5 million', outcome: 'Liable for sexual abuse and defamation' },
    { case: 'E. Jean Carroll II', status: 'Verdict: $83.3 million', outcome: 'Liable for defamation' },
    { case: 'Summer Zervos', status: 'Dismissed (after delays)', outcome: 'Statute of limitations' },
    { case: 'Jill Harth', status: 'Settled', outcome: 'Terms undisclosed' },
    { case: 'Criminal', status: 'None filed', outcome: 'Statute of limitations' },
  ],

  sources: [
    { title: 'Carroll v. Trump Verdict (Trial 1)', url: 'https://www.courtlistener.com/docket/14540261/carroll-v-trump/', type: 'Court Document' },
    { title: 'Carroll v. Trump Verdict (Trial 2)', url: 'https://www.nytimes.com/2024/01/26/nyregion/trump-defamation-trial-e-jean-carroll.html', type: 'News Report' },
    { title: 'Access Hollywood Tape', url: 'https://www.washingtonpost.com/politics/trump-recorded-having-extremely-lewd-conversation-about-women-in-2005/', type: 'Video/Transcript' },
    { title: 'Complete List of Trump Accusers', url: 'https://www.businessinsider.com/women-accused-trump-sexual-misconduct-list-2017-12', type: 'Compilation' },
    { title: 'Pageant Dressing Room Reports', url: 'https://www.buzzfeednews.com/article/kendalltaggart/teen-beauty-queens-say-trump-walked-in-on-them-changing', type: 'Investigation' },
    { title: 'Howard Stern Interviews Archive', url: 'https://factba.se/trump/topic/howard-stern', type: 'Audio Archive' },
  ],
};

const severityColors = {
  critical: 'bg-blood-600/20 text-blood-400 border-blood-600/30',
  high: 'bg-orange-600/20 text-orange-400 border-orange-600/30',
  medium: 'bg-yellow-600/20 text-yellow-400 border-yellow-600/30',
  low: 'bg-green-600/20 text-green-400 border-green-600/30',
};

export default function SexualAssaultPage() {
  const [showAllAccusers, setShowAllAccusers] = useState(false);

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Content Warning */}
      <div className="bg-blood-900/30 border-b border-blood-600">
        <div className="max-w-6xl mx-auto px-6 py-3">
          <p className="text-sm text-blood-400 flex items-center gap-2">
            <AlertTriangle className="w-4 h-4" />
            Content Warning: This page contains descriptions of sexual assault and misconduct.
          </p>
        </div>
      </div>

      {/* Header */}
      <div className="border-b border-zinc-800">
        <div className="max-w-6xl mx-auto px-6 py-8">
          <nav className="flex items-center gap-2 text-sm text-zinc-500 mb-6">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <ChevronRight className="w-4 h-4" />
            <Link href="/investigations" className="hover:text-white transition-colors">Investigations</Link>
            <ChevronRight className="w-4 h-4" />
            <span className="text-blood-500">Sexual Assault</span>
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
              <Users className="w-6 h-6 text-blood-500 mx-auto mb-2" />
              <p className="text-xl font-black text-blood-500">{investigationData.accuserStats.totalAccusers}</p>
              <p className="text-xs text-zinc-400">Accusers</p>
            </div>
            <div className="glass-card p-4 text-center border-l-4 border-blood-600">
              <Scale className="w-6 h-6 text-blood-500 mx-auto mb-2" />
              <p className="text-xl font-black text-blood-500">{investigationData.accuserStats.carrollVerdict1}</p>
              <p className="text-xs text-zinc-400">Carroll Verdict 1</p>
            </div>
            <div className="glass-card p-4 text-center border-l-4 border-blood-600">
              <Scale className="w-6 h-6 text-blood-500 mx-auto mb-2" />
              <p className="text-xl font-black text-blood-500">{investigationData.accuserStats.carrollVerdict2}</p>
              <p className="text-xs text-zinc-400">Carroll Verdict 2</p>
            </div>
            <div className="glass-card p-4 text-center border-l-4 border-orange-600">
              <Calendar className="w-6 h-6 text-orange-500 mx-auto mb-2" />
              <p className="text-xl font-black text-orange-500">{investigationData.accuserStats.accessHollywoodYear}</p>
              <p className="text-xs text-zinc-400">Access Hollywood</p>
            </div>
            <div className="glass-card p-4 text-center border-l-4 border-yellow-600">
              <Clock className="w-6 h-6 text-yellow-500 mx-auto mb-2" />
              <p className="text-sm font-black text-yellow-500">{investigationData.accuserStats.yearSpan}</p>
              <p className="text-xs text-zinc-400">Timespan</p>
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

        {/* E. Jean Carroll Case */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15 }}
          className="glass-card p-6 mb-8 border-l-4 border-blood-600"
        >
          <h2 className="text-xl font-bold mb-4">E. Jean Carroll: Verdict Established Liability</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-4">
            <div className="p-4 bg-zinc-900/50 border border-zinc-800">
              <p className="text-xs text-zinc-500 uppercase">Trial 1 - May 2023</p>
              <p className="text-2xl font-black text-blood-500">{investigationData.carrollCase.trial1.award}</p>
              <p className="text-sm text-zinc-400">{investigationData.carrollCase.trial1.findings}</p>
            </div>
            <div className="p-4 bg-zinc-900/50 border border-zinc-800">
              <p className="text-xs text-zinc-500 uppercase">Trial 2 - January 2024</p>
              <p className="text-2xl font-black text-blood-500">{investigationData.carrollCase.trial2.award}</p>
              <p className="text-sm text-zinc-400">{investigationData.carrollCase.trial2.findings}</p>
            </div>
          </div>

          <div className="p-4 bg-blood-900/20 border border-blood-600/30">
            <p className="text-xs text-blood-400 uppercase mb-1">Total Verdict</p>
            <p className="text-3xl font-black text-blood-500">{investigationData.carrollCase.totalAward}</p>
            <p className="text-sm text-zinc-400 mt-2">{investigationData.carrollCase.juryNote}</p>
          </div>
        </motion.section>

        {/* Access Hollywood */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="glass-card p-6 mb-8"
        >
          <h2 className="text-xl font-bold mb-4">Access Hollywood Tape</h2>
          <p className="text-sm text-zinc-500 mb-4">Recorded 2005, released October 7, 2016</p>
          
          <div className="space-y-3">
            {investigationData.accessHollywood.quotes.map((quote, index) => (
              <blockquote key={index} className="text-zinc-300 italic border-l-2 border-blood-600 pl-4">
                {quote}
              </blockquote>
            ))}
          </div>
          <p className="text-sm text-zinc-500 mt-4">Trump&apos;s response: &quot;{investigationData.accessHollywood.response}&quot;</p>
        </motion.section>

        {/* Public Accusers */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.25 }}
          className="glass-card p-6 mb-8"
        >
          <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
            <Users className="w-5 h-5 text-blood-500" />
            Public Accusers ({investigationData.publicAccusers.length}+)
          </h2>
          <div className="space-y-3">
            {(showAllAccusers ? investigationData.publicAccusers : investigationData.publicAccusers.slice(0, 6)).map((accuser, index) => (
              <div key={index} className="p-3 bg-zinc-900/50 border border-zinc-800">
                <div className="flex justify-between items-start">
                  <span className="font-medium text-blood-400">{accuser.name}</span>
                  <span className="text-xs text-zinc-500">{accuser.outcome}</span>
                </div>
                <p className="text-sm text-zinc-400 mt-1">{accuser.allegation}</p>
              </div>
            ))}
          </div>
          {investigationData.publicAccusers.length > 6 && (
            <button
              onClick={() => setShowAllAccusers(!showAllAccusers)}
              className="mt-4 text-blood-400 text-sm hover:text-blood-300 transition-colors"
            >
              {showAllAccusers ? 'Show fewer' : `Show all ${investigationData.publicAccusers.length} accusers`}
            </button>
          )}
        </motion.section>

        {/* Pageant Misconduct */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="glass-card p-6 mb-8"
        >
          <h2 className="text-xl font-bold mb-4">Pageant Dressing Room Misconduct</h2>
          <p className="text-sm text-zinc-500 mb-4">{investigationData.pageantMisconduct.context}</p>
          
          <ul className="space-y-2 mb-4">
            {investigationData.pageantMisconduct.allegations.map((allegation, i) => (
              <li key={i} className="flex items-start gap-2 text-sm text-zinc-300">
                <span className="text-blood-500">•</span>
                {allegation}
              </li>
            ))}
          </ul>

          <blockquote className="text-zinc-400 italic border-l-2 border-zinc-700 pl-4 text-sm">
            {investigationData.pageantMisconduct.howardSternQuote}
            <footer className="text-zinc-500 mt-2">| Donald Trump, Howard Stern Show</footer>
          </blockquote>
        </motion.section>

        {/* Defamation Pattern */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.35 }}
          className="glass-card p-6 mb-8"
        >
          <h2 className="text-xl font-bold mb-4">Pattern of Defamation</h2>
          <p className="text-zinc-400 text-sm mb-4">Trump&apos;s consistent response to accusers:</p>
          <ul className="space-y-2">
            {investigationData.defamationPattern.map((pattern, i) => (
              <li key={i} className="flex items-start gap-2 text-sm text-zinc-300">
                <span className="text-blood-500">•</span>
                {pattern}
              </li>
            ))}
          </ul>
        </motion.section>

        {/* Legal Status */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="glass-card p-6 mb-8"
        >
          <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
            <Scale className="w-5 h-5 text-blood-500" />
            Legal Status
          </h2>
          <div className="space-y-3">
            {investigationData.legalStatus.map((item, index) => (
              <div key={index} className="flex items-center justify-between p-3 bg-zinc-900/50 border border-zinc-800">
                <div>
                  <span className="font-medium text-blood-400">{item.case}</span>
                  <p className="text-sm text-zinc-500">{item.outcome}</p>
                </div>
                <span className="text-sm text-zinc-400">{item.status}</span>
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
