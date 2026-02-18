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
  Droplets,
  Zap,
  Heart,
} from 'lucide-react';
import GlitchText from '@/components/effects/GlitchText';

const investigation = {
  title: 'Puerto Rico Hurricane Response',
  subtitle: 'When Paper Towels Were the Federal Response',
  severity: 'critical',
  status: 'Historical Record',
  summary: 'Hurricane Maria devastated Puerto Rico in September 2017, ultimately killing nearly 3,000 Americans. The federal response was catastrophically slow and inadequate. While Trump tossed paper towels to victims and disputed the death toll, Puerto Ricans went months without power, clean water, or adequate medical care. The contrast with responses to mainland disasters exposed deep inequities.',
  deaths: {
    official: '2,975',
    initialClaim: '64',
    studyRange: '1,139 - 4,645',
    trumpClaim: '"16-18" initially, later denied 3,000 deaths',
  },
  keyFacts: [
    'Nearly 3,000 Americans died (initially reported as 64)',
    'Largest blackout in US history - some areas dark 11 months',
    'FEMA ran out of supplies within days',
    'Trump threw paper towels at hurricane victims',
    'Federal response far slower than for Texas/Florida hurricanes',
    'Trump called Puerto Rico\'s leadership "incompetent"',
    'Billions in aid delayed by Trump administration',
    'Death toll denied and attacked by Trump',
  ],
  trumpActions: [
    { date: 'Sep 30, 2017', action: 'Golfed while Puerto Rico suffered', context: 'Six days after Maria, Trump was at his golf club' },
    { date: 'Oct 3, 2017', action: 'Threw paper towels at victims', context: 'In San Juan, Trump tossed supplies like basketballs' },
    { date: 'Oct 3, 2017', action: '"You\'ve thrown our budget out of whack"', context: 'Complained about cost of helping Americans' },
    { date: 'Oct 12, 2017', action: 'Threatened to withdraw FEMA', context: '"We cannot keep FEMA... forever"' },
    { date: 'Sep 2018', action: 'Called response "incredible unsung success"', context: 'As studies showed nearly 3,000 dead' },
    { date: 'Sep 2018', action: 'Denied death toll of 3,000', context: '"3000 people did not die"' },
    { date: '2019-2020', action: 'Blocked billions in aid', context: 'Administration held up disaster relief funds' },
  ],
  comparison: [
    { location: 'Texas (Harvey)', timing: 'Visited Day 4', aid: 'Immediate federal surge', deaths: '106' },
    { location: 'Florida (Irma)', timing: 'Visited Day 5', aid: 'Immediate federal surge', deaths: '92' },
    { location: 'Puerto Rico (Maria)', timing: 'Visited Day 13', aid: 'Delayed, inadequate', deaths: '2,975' },
  ],
  infrastructure: [
    { issue: 'Power Grid', impact: 'Longest blackout in US history', duration: 'Up to 11 months without power' },
    { issue: 'Clean Water', impact: '1/3 of Puerto Ricans lost access', duration: 'Months without clean water' },
    { issue: 'Medical Care', impact: 'Hospitals without power', duration: 'Dialysis patients died' },
    { issue: 'Communications', impact: '95% of cell towers down', duration: 'Weeks without communication' },
    { issue: 'Roads', impact: 'Major roads washed out', duration: 'Remote areas cut off' },
  ],
  keyFigures: [
    { name: 'Donald Trump', role: 'Delayed response, denied deaths, blocked aid', href: '/entities/individuals/donald-trump', status: 'Documented' },
    { name: 'Brock Long', role: 'FEMA Administrator, later resigned amid scandal', status: 'Resigned' },
    { name: 'Carmen Yulín Cruz', role: 'San Juan Mayor, criticized Trump response', status: 'Advocate' },
    { name: 'Ricardo Rosselló', role: 'PR Governor during Maria, later resigned', status: 'Resigned 2019' },
    { name: 'Elaine Duke', role: 'Acting DHS Secretary, called response "good news story"', status: 'Documented' },
    { name: 'Mick Mulvaney', role: 'OMB Director, helped block aid', status: 'Documented' },
  ],
  deathDenial: {
    gwStudy: 'George Washington University study found 2,975 excess deaths',
    harvardStudy: 'Harvard study estimated 4,645 deaths',
    trumpResponse: 'Trump tweeted: "3000 people did not die...This was done by the Democrats"',
    reality: 'Deaths from lack of power, medical care, clean water counted as "indirect"',
  },
  federalFailures: [
    'FEMA ran out of food, water within days',
    'Contract for 30 million meals yielded only 50,000 delivered',
    'Mutual aid agreements not activated',
    'Military response slower than for mainland disasters',
    'Jones Act waiver delayed 8 days',
    'Blue roof program took months to reach most homes',
    'Medical supplies stuck in ports for weeks',
    'Body bags not sent for two weeks',
  ],
  timeline: [
    { date: 'Sep 20, 2017', event: 'Hurricane Maria makes landfall in Puerto Rico' },
    { date: 'Sep 23, 2017', event: 'FEMA admits insufficient food and water supplies' },
    { date: 'Sep 25, 2017', event: 'Trump tweets about NFL kneeling, not Puerto Rico' },
    { date: 'Sep 28, 2017', event: 'Jones Act finally waived (8 days after Maria)' },
    { date: 'Sep 30, 2017', event: 'Trump attacks San Juan Mayor Carmen Yulín Cruz' },
    { date: 'Oct 3, 2017', event: 'Trump visits, throws paper towels, complains about budget' },
    { date: 'Oct 12, 2017', event: 'Trump threatens to withdraw FEMA' },
    { date: 'Dec 2017', event: 'Official death toll remains at 64' },
    { date: 'May 2018', event: 'Harvard study estimates 4,645 deaths' },
    { date: 'Aug 2018', event: 'Puerto Rico officially raises death toll to 2,975' },
    { date: 'Sep 2018', event: 'Trump denies death toll: "3000 people did not die"' },
    { date: '2019-2020', event: 'Trump administration blocks $20 billion in aid' },
    { date: 'Jan 2020', event: 'Warehouse full of FEMA supplies discovered unused' },
  ],
  aidBlocked: {
    amount: '$20+ billion',
    reason: 'Trump administration imposed unprecedented restrictions',
    excuse: 'Claimed concerns about "corruption" in Puerto Rico',
    reality: 'No similar restrictions placed on mainland disaster aid',
  },
  sources: [
    { title: 'GWU Mortality Study', url: 'https://publichealth.gwu.edu/sites/default/files/downloads/projects/PRstudy/Acertainment%20of%20the%20Estimated%20Excess%20Mortality%20from%20Hurricane%20Maria%20in%20Puerto%20Rico.pdf', date: '2018' },
    { title: 'Harvard Mortality Study', url: 'https://www.nejm.org/doi/full/10.1056/NEJMsa1803972', date: '2018' },
    { title: 'GAO Report on Maria Response', url: 'https://www.gao.gov/products/gao-18-472', date: '2018' },
    { title: 'FEMA After-Action Report', url: 'https://www.fema.gov/sites/default/files/2020-08/fema_2017-hurricane-season-after-action-report.pdf', date: '2018' },
    { title: 'Trump Death Toll Denial', url: 'https://www.washingtonpost.com/politics/trump-denies-puerto-rico-death-toll-calls-it-democratic-plot/2018/09/13/', date: '2018' },
  ],
};

export default function PuertoRicoPage() {
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
            <span className="px-3 py-1 text-xs font-bold uppercase border border-zinc-500/30 bg-zinc-500/20 text-zinc-400">
              {investigation.status}
            </span>
          </div>
          <h1 className="text-3xl lg:text-4xl font-black text-white uppercase tracking-wider mb-2">
            <GlitchText text={investigation.title} />
          </h1>
          <p className="text-lg text-blood-500 font-bold mb-4">{investigation.subtitle}</p>
          <p className="text-zinc-400 leading-relaxed">{investigation.summary}</p>
        </motion.div>

        {/* Death Toll */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="border-2 border-red-800/60 bg-red-950/20 p-6 mb-8"
        >
          <h2 className="text-xl font-bold text-white uppercase tracking-wider mb-4 flex items-center gap-2">
            <Heart className="w-5 h-5 text-red-500" />
            American Lives Lost
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="text-center p-4 border border-red-500/30 bg-red-950/30">
              <p className="text-xs text-zinc-500">Official Death Toll</p>
              <p className="text-4xl font-black text-red-500">{investigation.deaths.official}</p>
            </div>
            <div className="text-center p-4 border border-zinc-800 bg-zinc-900/50">
              <p className="text-xs text-zinc-500">Initial False Claim</p>
              <p className="text-4xl font-black text-zinc-500">{investigation.deaths.initialClaim}</p>
            </div>
            <div className="text-center p-4 border border-yellow-500/30 bg-yellow-950/30">
              <p className="text-xs text-zinc-500">Study Estimates</p>
              <p className="text-2xl font-black text-yellow-500">{investigation.deaths.studyRange}</p>
            </div>
            <div className="text-center p-4 border border-blood-500/30 bg-blood-950/30">
              <p className="text-xs text-zinc-500">Trump Claimed</p>
              <p className="text-sm font-bold text-blood-400">{investigation.deaths.trumpClaim}</p>
            </div>
          </div>
        </motion.div>

        {/* Response Comparison */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15 }}
          className="glass-card p-6 mb-8"
        >
          <h2 className="text-xl font-bold text-white uppercase tracking-wider mb-4">
            2017 Hurricane Response Comparison
          </h2>
          <div className="grid grid-cols-3 gap-4">
            {investigation.comparison.map((item, idx) => (
              <div key={idx} className={`p-4 border ${item.location.includes('Puerto Rico') ? 'border-red-500/50 bg-red-950/20' : 'border-green-500/30 bg-green-950/20'}`}>
                <p className="font-bold text-white">{item.location}</p>
                <div className="mt-2 space-y-1">
                  <p className="text-xs text-zinc-400">Visit: <span className={item.location.includes('Puerto Rico') ? 'text-red-400' : 'text-green-400'}>{item.timing}</span></p>
                  <p className="text-xs text-zinc-400">Aid: <span className={item.location.includes('Puerto Rico') ? 'text-red-400' : 'text-green-400'}>{item.aid}</span></p>
                  <p className="text-xs text-zinc-400">Deaths: <span className={item.location.includes('Puerto Rico') ? 'text-red-500 text-lg font-bold' : 'text-zinc-300'}>{item.deaths}</span></p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Trump's Actions */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="glass-card p-6 border-l-4 border-blood-600"
            >
              <h2 className="text-xl font-bold text-white uppercase tracking-wider mb-4">
                Trump&apos;s Actions During Crisis
              </h2>
              <div className="space-y-4">
                {investigation.trumpActions.map((item, idx) => (
                  <div key={idx} className="p-4 bg-zinc-900/50 border border-zinc-800">
                    <p className="text-xs text-blood-500 font-mono mb-1">{item.date}</p>
                    <p className="font-bold text-white">{item.action}</p>
                    <p className="text-sm text-zinc-400 mt-1">{item.context}</p>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Key Figures */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.25 }}
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
                    <span className="text-xs px-2 py-1 bg-zinc-800 text-zinc-400 border border-zinc-700">
                      {figure.status}
                    </span>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Infrastructure Collapse */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="glass-card p-6"
            >
              <h2 className="text-xl font-bold text-white uppercase tracking-wider mb-4 flex items-center gap-2">
                <Zap className="w-5 h-5 text-blood-500" />
                Infrastructure Collapse
              </h2>
              <div className="space-y-3">
                {investigation.infrastructure.map((item, idx) => (
                  <div key={idx} className="p-3 bg-zinc-900/50 border border-red-500/30">
                    <div className="flex justify-between items-start">
                      <p className="font-bold text-red-400">{item.issue}</p>
                    </div>
                    <p className="text-sm text-zinc-300 mt-1">{item.impact}</p>
                    <p className="text-xs text-zinc-500 mt-1">{item.duration}</p>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Death Denial */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.35 }}
              className="glass-card p-6 border-l-4 border-red-600"
            >
              <h2 className="text-xl font-bold text-white uppercase tracking-wider mb-4 flex items-center gap-2">
                <AlertTriangle className="w-5 h-5 text-red-500" />
                Trump&apos;s Death Toll Denial
              </h2>
              <div className="space-y-4">
                <div className="p-4 bg-zinc-900/50 border border-zinc-800">
                  <p className="text-xs text-zinc-500">GW University Study</p>
                  <p className="text-sm text-zinc-300">{investigation.deathDenial.gwStudy}</p>
                </div>
                <div className="p-4 bg-zinc-900/50 border border-zinc-800">
                  <p className="text-xs text-zinc-500">Harvard Study</p>
                  <p className="text-sm text-zinc-300">{investigation.deathDenial.harvardStudy}</p>
                </div>
                <div className="p-4 bg-red-950/20 border border-red-500/30">
                  <p className="text-xs text-red-500">Trump&apos;s Response</p>
                  <p className="text-sm text-zinc-300 italic">{investigation.deathDenial.trumpResponse}</p>
                </div>
                <div className="p-4 bg-zinc-900/50 border border-zinc-800">
                  <p className="text-xs text-zinc-500">Reality</p>
                  <p className="text-sm text-zinc-300">{investigation.deathDenial.reality}</p>
                </div>
              </div>
            </motion.div>

            {/* Timeline */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
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
            {/* Aid Blocked */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              className="glass-card p-6 border-l-4 border-red-600"
            >
              <h3 className="text-lg font-bold text-white uppercase tracking-wider mb-4">
                Aid Blocked
              </h3>
              <div className="text-center mb-4">
                <p className="text-4xl font-black text-red-500">{investigation.aidBlocked.amount}</p>
                <p className="text-xs text-zinc-500 mt-2">in disaster relief blocked</p>
              </div>
              <div className="space-y-3">
                <div className="p-3 bg-zinc-900/50 border border-zinc-800">
                  <p className="text-xs text-zinc-500">Reason Given</p>
                  <p className="text-sm text-zinc-300">{investigation.aidBlocked.reason}</p>
                </div>
                <div className="p-3 bg-zinc-900/50 border border-zinc-800">
                  <p className="text-xs text-zinc-500">Excuse</p>
                  <p className="text-sm text-zinc-300">{investigation.aidBlocked.excuse}</p>
                </div>
                <div className="p-3 bg-red-950/20 border border-red-500/30">
                  <p className="text-xs text-red-500">Reality</p>
                  <p className="text-sm text-zinc-300">{investigation.aidBlocked.reality}</p>
                </div>
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

            {/* Federal Failures */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.15 }}
              className="glass-card p-6"
            >
              <h3 className="text-lg font-bold text-white uppercase tracking-wider mb-4 flex items-center gap-2">
                <Droplets className="w-5 h-5 text-blood-500" />
                Federal Failures
              </h3>
              <ul className="space-y-2">
                {investigation.federalFailures.map((failure, idx) => (
                  <li key={idx} className="text-sm text-zinc-400 flex items-start gap-2 p-2 bg-red-950/10 border border-red-500/20">
                    <span className="text-red-500 mt-1">✗</span>
                    <span>{failure}</span>
                  </li>
                ))}
              </ul>
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
