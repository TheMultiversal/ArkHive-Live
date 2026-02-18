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
  Tv,
} from 'lucide-react';
import GlitchText from '@/components/effects/GlitchText';

const investigation = {
  title: 'Dominion Defamation',
  subtitle: 'The Billion-Dollar Lies About Election Fraud',
  severity: 'critical',
  status: 'Settlements & Judgments',
  summary: 'After the 2020 election, Trump allies including Rudy Giuliani, Sidney Powell, and Fox News spread false claims that Dominion Voting Systems and Smartmatic had rigged the election. These lies destroyed reputations and undermined democracy. Dominion sued for defamation, resulting in a historic $787.5 million settlement with Fox News and a $148 million judgment against Giuliani.',
  settlements: [
    { defendant: 'Fox News', amount: '$787,500,000', status: 'Settled April 2023', type: 'Settlement' },
    { defendant: 'Rudy Giuliani', amount: '$148,000,000', status: 'Judgment December 2023, Bankruptcy Filed', type: 'Judgment' },
    { defendant: 'Newsmax', amount: 'Pending', status: 'Trial scheduled 2025', type: 'Pending' },
    { defendant: 'OAN', amount: 'Pending', status: 'Litigation ongoing', type: 'Pending' },
    { defendant: 'Mike Lindell/MyPillow', amount: 'Pending', status: 'Litigation ongoing', type: 'Pending' },
    { defendant: 'Sidney Powell', amount: 'Pending', status: 'Litigation ongoing', type: 'Pending' },
  ],
  keyFigures: [
    { name: 'Rudy Giuliani', role: 'Primary spreader of Dominion lies, owed $148M', href: '/entities/individuals/rudy-giuliani', status: 'Judgment - $148M' },
    { name: 'Sidney Powell', role: '"Release the Kraken" lies about Dominion', href: '/entities/individuals/sidney-powell', status: 'Defendant' },
    { name: 'Mike Lindell', role: 'MyPillow CEO, funded and spread election lies', href: '/entities/individuals/mike-lindell', status: 'Defendant' },
    { name: 'Tucker Carlson', role: 'Privately doubted claims while Fox aired them', href: '/entities/individuals/tucker-carlson', status: 'Fox Settlement' },
    { name: 'Maria Bartiromo', role: 'First to air Powell\'s lies on Fox', href: '/entities/individuals/maria-bartiromo', status: 'Fox Settlement' },
    { name: 'Lou Dobbs', role: 'Repeatedly aired false Dominion claims', href: '/entities/individuals/lou-dobbs', status: 'Fox Settlement' },
    { name: 'Rupert Murdoch', role: 'Admitted Fox hosts "endorsed" false claims', href: '/entities/individuals/rupert-murdoch', status: 'Fox Settlement' },
    { name: 'Donald Trump', role: 'Original source of election fraud claims', href: '/entities/individuals/donald-trump', status: 'Unindicted' },
  ],
  falseClaims: [
    'Dominion machines "flipped" votes from Trump to Biden',
    'Dominion was founded in Venezuela by Hugo Chavez',
    'Dominion bribed officials to rig the election',
    'Dominion algorithms manipulated vote counts',
    'Smartmatic (separate company) was linked to Dominion fraud',
    'Foreign actors hacked Dominion systems',
    'USB drives were used to inject fake votes',
    'Dominion machines were connected to the internet illegally',
  ],
  foxRevelations: [
    'Tucker Carlson texts: "Sidney Powell is lying"',
    'Rupert Murdoch admitted hosts "endorsed" false claims',
    'Internal communications showed hosts knew claims were false',
    'Fox continued airing lies to compete with Newsmax for viewers',
    'Murdoch deposition: "It\'s not red or blue, it\'s green" (money)',
    'Hosts privately mocked Powell while publicly amplifying her',
  ],
  timeline: [
    { date: 'Nov 3, 2020', event: 'Election Day - Biden wins' },
    { date: 'Nov 8, 2020', event: 'First false claims about Dominion appear' },
    { date: 'Nov 14, 2020', event: 'Sidney Powell makes "Kraken" claims on Fox' },
    { date: 'Nov-Dec 2020', event: 'Fox News airs 774+ statements about Dominion' },
    { date: 'Dec 2020', event: 'Dominion sends cease and desist letters' },
    { date: 'Jan 2021', event: 'Fox continues airing false claims' },
    { date: 'Jan 2021', event: 'Dominion files $1.6B lawsuit against Fox' },
    { date: 'Jan 2021', event: 'Dominion sues Giuliani for $1.3B' },
    { date: 'Jan 2021', event: 'Dominion sues Powell for $1.3B' },
    { date: 'Aug 2021', event: 'Dominion sues OAN, Newsmax' },
    { date: 'Feb 2023', event: 'Fox internal communications revealed in discovery' },
    { date: 'Mar 2023', event: 'Rupert Murdoch deposition made public' },
    { date: 'Apr 18, 2023', event: 'Fox settles for $787.5 million (no apology)' },
    { date: 'Aug 2023', event: 'Giuliani found liable for defamation' },
    { date: 'Dec 2023', event: 'Jury awards $148 million against Giuliani' },
    { date: 'Dec 2023', event: 'Giuliani files for bankruptcy' },
  ],
  charges: [
    { statute: 'Defamation per se', description: 'False statements damaging reputation', jurisdiction: 'Civil' },
    { statute: 'Business disparagement', description: 'False statements harming business', jurisdiction: 'Civil' },
    { statute: 'Conspiracy', description: 'Coordinated effort to spread false claims', jurisdiction: 'Civil' },
    { statute: 'Intentional infliction of emotional distress', description: 'Against Ruby Freeman, Shaye Moss', jurisdiction: 'Civil' },
  ],
  damage: {
    dominion: 'Lost contracts, reputation damage, employee threats',
    workers: 'Ruby Freeman and Shaye Moss received death threats, $148M judgment',
    democracy: 'Millions still believe false claims, undermined faith in elections',
    fox: 'Paid $787.5M - largest defamation settlement in US history',
  },
  sources: [
    { title: 'Fox News Settlement Announcement', url: 'https://www.nytimes.com/2023/04/18/business/media/fox-news-dominion-settlement.html', date: '2023' },
    { title: 'Dominion v. Fox - Court Documents', url: 'https://www.courtlistener.com/docket/59581927/us-dominion-inc-v-fox-news-network-llc/', date: '2021-2023' },
    { title: 'Giuliani Defamation Judgment', url: 'https://www.courtlistener.com/docket/63495928/freeman-v-giuliani/', date: '2023' },
    { title: 'Murdoch Deposition Excerpts', url: 'https://www.nytimes.com/2023/02/27/business/media/fox-news-dominion-rupert-murdoch.html', date: '2023' },
    { title: 'Fox Internal Communications', url: 'https://www.nytimes.com/2023/02/16/business/media/fox-dominion-lawsuit-tucker-carlson.html', date: '2023' },
  ],
};

export default function DominionDefamationPage() {
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

        {/* Settlements Box */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="border-2 border-green-800/60 bg-green-950/20 p-6 mb-8"
        >
          <h2 className="text-xl font-bold text-white uppercase tracking-wider mb-4 flex items-center gap-2">
            <DollarSign className="w-5 h-5 text-green-500" />
            Settlements & Judgments
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {investigation.settlements.map((item, idx) => (
              <div key={idx} className={`p-4 border ${item.type === 'Settlement' ? 'border-green-500/30 bg-green-950/30' : item.type === 'Judgment' ? 'border-red-500/30 bg-red-950/30' : 'border-zinc-800 bg-zinc-900/30'}`}>
                <p className="text-sm text-zinc-400">{item.defendant}</p>
                <p className={`text-2xl font-black ${item.type === 'Pending' ? 'text-yellow-500' : 'text-green-500'}`}>
                  {item.amount}
                </p>
                <p className="text-xs text-zinc-500 mt-1">{item.status}</p>
              </div>
            ))}
          </div>
          <div className="mt-4 p-4 border border-blood-500/30 bg-blood-950/20">
            <p className="text-center">
              <span className="text-zinc-400">Total Secured: </span>
              <span className="text-3xl font-black text-blood-500">$935,500,000+</span>
            </p>
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
                    <span className="text-xs px-2 py-1 bg-red-500/20 text-red-400 border border-red-500/30">
                      {figure.status}
                    </span>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Fox Revelations */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.25 }}
              className="glass-card p-6 border-l-4 border-blood-600"
            >
              <h2 className="text-xl font-bold text-white uppercase tracking-wider mb-4 flex items-center gap-2">
                <Tv className="w-5 h-5 text-blood-500" />
                Fox News Internal Revelations
              </h2>
              <p className="text-sm text-zinc-500 mb-4">
                Discovery revealed that Fox hosts privately knew the claims were false:
              </p>
              <div className="space-y-3">
                {investigation.foxRevelations.map((item, idx) => (
                  <div key={idx} className="p-3 bg-zinc-900/50 border-l-2 border-blood-500">
                    <p className="text-sm text-zinc-300">{item}</p>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* False Claims */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="glass-card p-6"
            >
              <h2 className="text-xl font-bold text-white uppercase tracking-wider mb-4 flex items-center gap-2">
                <AlertTriangle className="w-5 h-5 text-blood-500" />
                The False Claims (All Debunked)
              </h2>
              <ul className="space-y-2">
                {investigation.falseClaims.map((claim, idx) => (
                  <li key={idx} className="text-sm text-zinc-400 flex items-start gap-2 p-2 bg-zinc-900/30 border border-red-500/20">
                    <span className="text-red-500 font-bold">✗</span>
                    <span className="line-through opacity-70">{claim}</span>
                  </li>
                ))}
              </ul>
              <p className="text-xs text-zinc-500 mt-4 p-2 bg-green-900/20 border border-green-500/20">
                ✓ All claims were investigated and found to be completely false by courts, audits, and recounts in multiple states.
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
            {/* Damage */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              className="glass-card p-6"
            >
              <h3 className="text-lg font-bold text-white uppercase tracking-wider mb-4">
                Damage Caused
              </h3>
              <div className="space-y-3">
                <div className="p-3 bg-zinc-900/50 border border-zinc-800">
                  <p className="text-blood-400 font-bold text-sm">Dominion</p>
                  <p className="text-xs text-zinc-400">{investigation.damage.dominion}</p>
                </div>
                <div className="p-3 bg-zinc-900/50 border border-zinc-800">
                  <p className="text-blood-400 font-bold text-sm">Election Workers</p>
                  <p className="text-xs text-zinc-400">{investigation.damage.workers}</p>
                </div>
                <div className="p-3 bg-zinc-900/50 border border-zinc-800">
                  <p className="text-blood-400 font-bold text-sm">Democracy</p>
                  <p className="text-xs text-zinc-400">{investigation.damage.democracy}</p>
                </div>
                <div className="p-3 bg-zinc-900/50 border border-green-500/30">
                  <p className="text-green-400 font-bold text-sm">Fox News Paid</p>
                  <p className="text-xs text-zinc-400">{investigation.damage.fox}</p>
                </div>
              </div>
            </motion.div>

            {/* Legal Claims */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.1 }}
              className="glass-card p-6"
            >
              <h3 className="text-lg font-bold text-white uppercase tracking-wider mb-4 flex items-center gap-2">
                <Scale className="w-5 h-5 text-blood-500" />
                Legal Claims
              </h3>
              <div className="space-y-3">
                {investigation.charges.map((charge, idx) => (
                  <div key={idx} className="p-3 bg-zinc-900/50 border border-zinc-800">
                    <p className="text-sm font-bold text-blood-400">{charge.statute}</p>
                    <p className="text-xs text-zinc-400 mt-1">{charge.description}</p>
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
