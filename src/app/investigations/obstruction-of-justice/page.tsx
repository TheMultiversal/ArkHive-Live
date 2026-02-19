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
  Shield,
  XCircle,
} from 'lucide-react';
import GlitchText from '@/components/effects/GlitchText';

const investigationData = {
  title: 'Obstruction of Justice',
  subtitle: 'A Pattern of Witness Tampering, Evidence Destruction, and Interference',
  severity: 'critical' as const,
  status: 'Documented - Multiple Instances',
  lastUpdated: 'February 2026',
  summary: `The Mueller Report documented at least 10 instances of potential obstruction of justice by Donald Trump. While the Special Counsel declined to make a charging decision due to DOJ policy against indicting a sitting president, the report explicitly stated it "does not exonerate" Trump. These acts include firing FBI Director James Comey, attempting to fire Mueller himself, witness tampering via social media, and directing aides to lie to investigators.`,
  
  obstructionStats: {
    muellerInstances: '10+',
    witnessesIntimidated: '15+',
    firingAttempts: '3',
    pardonsOffered: '6',
    tweetsDuringInvestigation: '1,100+',
  },

  keyFigures: [
    { name: 'Donald Trump', role: 'Principal - Directed obstruction campaign', href: '/entities/individuals/donald-trump' },
    { name: 'Michael Flynn', role: 'National Security Advisor - Pardoned after lying to FBI', href: '/entities/individuals/michael-flynn' },
    { name: 'Roger Stone', role: 'Advisor - Commuted sentence, pardoned for obstruction', href: '/entities/individuals/roger-stone' },
    { name: 'Paul Manafort', role: 'Campaign Chair - Pardoned for witness tampering', href: '/entities/individuals/paul-manafort' },
    { name: 'Michael Cohen', role: 'Personal Attorney - Testified about obstruction efforts', href: '/entities/individuals/michael-cohen' },
    { name: 'Don McGahn', role: 'White House Counsel - Refused to fire Mueller', href: '/entities/individuals/don-mcgahn' },
    { name: 'William Barr', role: 'AG - Misrepresented Mueller findings', href: '/entities/individuals/bill-barr' },
  ],

  muellerObstructionInstances: [
    {
      instance: 1,
      title: 'Flynn Investigation',
      description: 'Trump asked Comey to "let this go" regarding Flynn investigation and later fired Comey',
      evidence: 'Comey memos, testimony, contemporaneous notes',
      elements: 'Obstructive act: Yes | Intent: Substantial | Nexus: Yes',
    },
    {
      instance: 2,
      title: 'Firing James Comey',
      description: 'Fired FBI Director overseeing Russia investigation, admitted on TV it was about "the Russia thing"',
      evidence: 'Lester Holt interview, White House statements, tweets',
      elements: 'Obstructive act: Yes | Intent: Substantial | Nexus: Yes',
    },
    {
      instance: 3,
      title: 'Attempts to Fire Mueller',
      description: 'Ordered Don McGahn to fire Mueller; McGahn refused and prepared to resign',
      evidence: 'McGahn testimony, contemporaneous notes',
      elements: 'Obstructive act: Yes | Intent: Substantial | Nexus: Yes',
    },
    {
      instance: 4,
      title: 'Attempts to Curtail Mueller',
      description: 'Directed Corey Lewandowski to limit Mueller investigation to future elections only',
      evidence: 'Lewandowski testimony, handwritten notes',
      elements: 'Obstructive act: Yes | Intent: Substantial | Nexus: Yes',
    },
    {
      instance: 5,
      title: 'Ordering McGahn to Deny',
      description: 'After public reporting, ordered McGahn to deny Trump told him to fire Mueller',
      evidence: 'McGahn testimony, White House records',
      elements: 'Obstructive act: Yes | Intent: Substantial | Nexus: Yes',
    },
    {
      instance: 6,
      title: 'Witness Tampering - Flynn',
      description: 'Personal counsel contacted Flynn lawyer suggesting cooperation might affect pardon decision',
      evidence: 'Flynn attorney statements, Mueller Report',
      elements: 'Obstructive act: Yes | Intent: Evidence exists | Nexus: Yes',
    },
    {
      instance: 7,
      title: 'Witness Tampering - Manafort',
      description: 'Praised Manafort for not "flipping," dangled pardons publicly',
      evidence: 'Tweets, public statements, reporting',
      elements: 'Obstructive act: Yes | Intent: Substantial | Nexus: Yes',
    },
    {
      instance: 8,
      title: 'Witness Tampering - Cohen',
      description: 'Attacked Cohen publicly after cooperation, praised others who refused to cooperate',
      evidence: 'Tweets, rally statements, Cohen testimony',
      elements: 'Obstructive act: Yes | Intent: Evidence exists | Nexus: Yes',
    },
    {
      instance: 9,
      title: 'Trump Tower Meeting Coverup',
      description: 'Dictated misleading statement about Don Jr.\'s meeting with Russians',
      evidence: 'Hope Hicks testimony, Air Force One records',
      elements: 'Obstructive act: Yes | Intent: Evidence exists | Nexus: Yes',
    },
    {
      instance: 10,
      title: 'Written Response Lies',
      description: 'Provided incomplete and potentially false written answers to Mueller questions',
      evidence: 'Mueller Report noting inadequate responses',
      elements: 'Potentially insufficient evidence for prosecution',
    },
  ],

  comeyTimeline: [
    { date: 'January 27, 2017', event: 'Trump demands "loyalty" from Comey at private dinner' },
    { date: 'February 14, 2017', event: 'Trump asks Comey to "let Flynn go" in Oval Office meeting' },
    { date: 'March 30, 2017', event: 'Trump calls Comey, asks him to "lift the cloud" of investigation' },
    { date: 'April 11, 2017', event: 'Trump calls Comey again about investigation' },
    { date: 'May 9, 2017', event: 'Trump fires Comey while FBI investigates Russia ties' },
    { date: 'May 10, 2017', event: 'Trump meets Russian officials, calls Comey "nut job"' },
    { date: 'May 11, 2017', event: 'Trump tells Lester Holt firing was about "Russia thing"' },
    { date: 'May 12, 2017', event: 'Trump tweets threat about "tapes" of conversations' },
  ],

  pardonsForObstruction: [
    { name: 'Michael Flynn', date: 'November 25, 2020', crime: 'Lying to FBI about Russia contacts' },
    { name: 'Paul Manafort', date: 'December 23, 2020', crime: 'Witness tampering, financial crimes' },
    { name: 'Roger Stone', date: 'December 23, 2020', crime: 'Obstruction, witness tampering, lying to Congress' },
    { name: 'George Papadopoulos', date: 'December 22, 2020', crime: 'Lying to FBI about Russia contacts' },
    { name: 'Steve Bannon', date: 'January 19, 2021', crime: 'Build the Wall fraud (preemptive)' },
    { name: 'Charles Kushner', date: 'December 23, 2020', crime: 'Tax evasion, witness tampering' },
  ],

  timeline: [
    { date: 'January 6, 2017', event: 'Intelligence community briefs Trump on Russian interference' },
    { date: 'January 27, 2017', event: 'Trump demands loyalty from Comey at dinner' },
    { date: 'February 14, 2017', event: 'Trump asks Comey to drop Flynn investigation' },
    { date: 'May 9, 2017', event: 'Trump fires FBI Director James Comey' },
    { date: 'May 17, 2017', event: 'Robert Mueller appointed Special Counsel' },
    { date: 'June 17, 2017', event: 'Trump orders McGahn to fire Mueller - McGahn refuses' },
    { date: 'January 25, 2018', event: 'Trump attempts to fire Mueller again - overruled' },
    { date: 'February 2018', event: 'Trump orders McGahn to create false record denying firing order' },
    { date: 'March 2019', event: 'Mueller completes report documenting obstruction' },
    { date: 'March 24, 2019', event: 'Barr releases misleading summary of Mueller Report' },
    { date: 'April 18, 2019', event: 'Redacted Mueller Report released - 10 obstruction instances' },
    { date: 'July 24, 2019', event: 'Mueller testifies before Congress' },
    { date: 'November 2020', event: 'Trump pardons Flynn after election loss' },
    { date: 'December 2020', event: 'Trump pardons Manafort, Stone, others' },
  ],

  muellerConclusions: [
    '"If we had confidence after a thorough investigation of the facts that the President clearly did not commit obstruction of justice, we would so state."',
    '"Based on the facts and the applicable legal standards, we are unable to reach that judgment."',
    '"The evidence we obtained about the President\'s actions and intent presents difficult issues that would need to be resolved if we were making a traditional prosecutorial judgment."',
    '"The conclusion that Congress may apply the obstruction laws to the President\'s corrupt exercise of the powers of office accords with our constitutional system of checks and balances."',
  ],

  sources: [
    { title: 'Mueller Report Volume II (Obstruction)', url: 'https://www.justice.gov/archives/sco/file/1373816/download', type: 'Official Report' },
    { title: 'Comey Senate Testimony', url: 'https://www.intelligence.senate.gov/sites/default/files/documents/os-jcomey-060817.pdf', type: 'Congressional Testimony' },
    { title: 'McGahn Testimony Notes', url: 'https://judiciary.house.gov/news/documentsingle.aspx?DocumentID=4887', type: 'Congressional Document' },
    { title: 'Lester Holt Interview', url: 'https://www.nbcnews.com/news/us-news/trump-reveals-he-asked-comey-whether-he-was-under-investigation-n757821', type: 'Interview Transcript' },
    { title: 'House Judiciary Obstruction Report', url: 'https://judiciary.house.gov/news/documentsingle.aspx?DocumentID=4878', type: 'Congressional Report' },
    { title: 'Pardon Power Analysis', url: 'https://www.lawfareblog.com/trump-pardon-roundup', type: 'Legal Analysis' },
  ],
};

const severityColors = {
  critical: 'bg-blood-600/20 text-blood-400 border-blood-600/30',
  high: 'bg-orange-600/20 text-orange-400 border-orange-600/30',
  medium: 'bg-yellow-600/20 text-yellow-400 border-yellow-600/30',
  low: 'bg-green-600/20 text-green-400 border-green-600/30',
};

export default function ObstructionPage() {
  const [expandedInstance, setExpandedInstance] = useState<number | null>(1);

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
            <span className="text-blood-500">Obstruction of Justice</span>
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
              <Shield className="w-6 h-6 text-blood-500 mx-auto mb-2" />
              <p className="text-xl font-black text-blood-500">{investigationData.obstructionStats.muellerInstances}</p>
              <p className="text-xs text-zinc-400">Mueller Instances</p>
            </div>
            <div className="glass-card p-4 text-center border-l-4 border-blood-600">
              <Users className="w-6 h-6 text-blood-500 mx-auto mb-2" />
              <p className="text-xl font-black text-blood-500">{investigationData.obstructionStats.witnessesIntimidated}</p>
              <p className="text-xs text-zinc-400">Witnesses Intimidated</p>
            </div>
            <div className="glass-card p-4 text-center border-l-4 border-orange-600">
              <XCircle className="w-6 h-6 text-orange-500 mx-auto mb-2" />
              <p className="text-xl font-black text-orange-500">{investigationData.obstructionStats.firingAttempts}</p>
              <p className="text-xs text-zinc-400">Firing Attempts</p>
            </div>
            <div className="glass-card p-4 text-center border-l-4 border-orange-600">
              <Scale className="w-6 h-6 text-orange-500 mx-auto mb-2" />
              <p className="text-xl font-black text-orange-500">{investigationData.obstructionStats.pardonsOffered}</p>
              <p className="text-xs text-zinc-400">Pardons for Silence</p>
            </div>
            <div className="glass-card p-4 text-center border-l-4 border-yellow-600">
              <AlertTriangle className="w-6 h-6 text-yellow-500 mx-auto mb-2" />
              <p className="text-xl font-black text-yellow-500">{investigationData.obstructionStats.tweetsDuringInvestigation}</p>
              <p className="text-xs text-zinc-400">Attack Tweets</p>
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

        {/* Mueller Conclusions Box */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="glass-card p-6 mb-8 border-l-4 border-blood-600"
        >
          <h2 className="text-xl font-bold mb-4">Mueller Report Conclusions</h2>
          <div className="space-y-4">
            {investigationData.muellerConclusions.map((quote, index) => (
              <blockquote key={index} className="text-zinc-300 italic border-l-2 border-zinc-700 pl-4">
                {quote}
              </blockquote>
            ))}
          </div>
          <p className="text-sm text-zinc-500 mt-4">| Mueller Report, Volume II</p>
        </motion.section>

        {/* 10 Obstruction Instances */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.25 }}
          className="glass-card p-6 mb-8"
        >
          <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
            <AlertTriangle className="w-5 h-5 text-blood-500" />
            10 Documented Obstruction Instances
          </h2>
          <div className="space-y-4">
            {investigationData.muellerObstructionInstances.map((item) => (
              <div key={item.instance} className="border border-zinc-800">
                <button
                  onClick={() => setExpandedInstance(expandedInstance === item.instance ? null : item.instance)}
                  className="w-full flex items-center justify-between p-4 hover:bg-zinc-900/50 transition-colors"
                >
                  <div className="text-left">
                    <span className="font-bold text-blood-400">#{item.instance}: {item.title}</span>
                  </div>
                  <ChevronRight className={`w-5 h-5 transition-transform ${expandedInstance === item.instance ? 'rotate-90' : ''}`} />
                </button>
                {expandedInstance === item.instance && (
                  <div className="px-4 pb-4 space-y-3">
                    <p className="text-zinc-300">{item.description}</p>
                    <div className="text-sm">
                      <p className="text-zinc-500">Evidence: <span className="text-zinc-400">{item.evidence}</span></p>
                      <p className="text-zinc-500 mt-1">Legal Elements: <span className="text-blood-400">{item.elements}</span></p>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </motion.section>

        {/* Comey Timeline */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="glass-card p-6 mb-8"
        >
          <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
            <Calendar className="w-5 h-5 text-blood-500" />
            Comey Firing Timeline
          </h2>
          <div className="space-y-4">
            {investigationData.comeyTimeline.map((item, index) => (
              <div key={index} className="relative pl-4 border-l-2 border-blood-600">
                <div className="absolute -left-[5px] top-0 w-2 h-2 rounded-full bg-blood-500" />
                <p className="text-xs text-blood-500 font-mono">{item.date}</p>
                <p className="text-sm text-zinc-300">{item.event}</p>
              </div>
            ))}
          </div>
        </motion.section>

        {/* Pardons for Silence */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.35 }}
          className="glass-card p-6 mb-8"
        >
          <h2 className="text-xl font-bold mb-4">Pardons for Silence</h2>
          <p className="text-zinc-400 text-sm mb-4">Trump pardoned co-conspirators who refused to cooperate with investigators:</p>
          <div className="space-y-3">
            {investigationData.pardonsForObstruction.map((pardon, index) => (
              <div key={index} className="flex items-center justify-between p-3 bg-zinc-900/50 border border-zinc-800">
                <div>
                  <span className="font-medium text-blood-400">{pardon.name}</span>
                  <p className="text-xs text-zinc-500">{pardon.crime}</p>
                </div>
                <span className="text-xs text-zinc-500">{pardon.date}</span>
              </div>
            ))}
          </div>
        </motion.section>

        {/* Full Timeline */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="glass-card p-6 mb-8"
        >
          <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
            <Calendar className="w-5 h-5 text-blood-500" />
            Complete Timeline
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
          transition={{ delay: 0.45 }}
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
