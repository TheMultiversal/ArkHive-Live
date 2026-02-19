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
  Church,
  Camera,
  Shield,
} from 'lucide-react';
import GlitchText from '@/components/effects/GlitchText';

const investigation = {
  title: 'Lafayette Square Incident',
  subtitle: 'Tear Gas and Troops for a Photo Op',
  severity: 'critical',
  status: 'Historical Record',
  summary: 'On June 1, 2020, during nationwide protests over the murder of George Floyd, federal officers and National Guard troops used tear gas, pepper balls, and batons to violently clear peaceful protesters from Lafayette Square. Minutes later, President Trump walked through the cleared park to pose for photographs holding a Bible in front of St. John\'s Church. The attack on peaceful protesters for a political photo op was condemned by former military leaders and religious figures.',
  keyFacts: [
    'Peaceful protesters tear-gassed without warning',
    'Officers used pepper balls, batons, and flash-bangs',
    'Clearance began 25 minutes before 7 PM curfew',
    'Trump walked to church for photos immediately after',
    'Trump held a Bible upside down for cameras',
    'Episcopal Bishop not informed, condemned the event',
    'Gen. Mark Milley later apologized for participating',
    'Inspector General found clearance pre-planned',
  ],
  trumpStatements: [
    { context: 'During clearance', quote: '"I am your president of law and order"' },
    { context: 'At St. John\'s', quote: 'Held Bible upside down, refused to quote scripture' },
    { context: 'When asked about Bible', quote: '"It\'s a Bible."' },
    { context: 'Rose Garden speech', quote: '"I am dispatching thousands and thousands of heavily armed soldiers"' },
  ],
  timeline: [
    { time: '6:30 PM', event: 'Trump announces he will address nation from Rose Garden' },
    { time: '6:35 PM', event: 'Officers begin positioning around Lafayette Square' },
    { time: '6:43 PM', event: 'First dispersal orders given (disputed if audible)' },
    { time: '6:50 PM', event: 'Officers charge peaceful protesters without warning' },
    { time: '6:50 PM', event: 'Tear gas, pepper balls, and batons deployed against crowd' },
    { time: '6:50 PM', event: 'Media and clergy also attacked by officers' },
    { time: '7:00 PM', event: 'Trump delivers Rose Garden speech' },
    { time: '7:01 PM', event: 'Trump walks through cleared park toward church' },
    { time: '7:06 PM', event: 'Trump poses with Bible in front of St. John\'s Church' },
    { time: '7:11 PM', event: 'Trump returns to White House' },
  ],
  keyFigures: [
    { name: 'Donald Trump', role: 'Ordered area cleared for photo op', href: '/entities/individuals/donald-trump', status: 'Subject' },
    { name: 'Gen. Mark Milley', role: 'Chairman Joint Chiefs, walked with Trump, later apologized', href: '/entities/individuals/mark-milley', status: 'Apologized' },
    { name: 'William Barr', role: 'Attorney General, personally directed clearing', href: '/entities/individuals/bill-barr', status: 'Directed clearance' },
    { name: 'Kayleigh McEnany', role: 'Press Secretary, defended photo op', href: '/entities/individuals/kayleigh-mcenany', status: 'White House' },
    { name: 'Bishop Mariann Budde', role: 'Episcopal Bishop of Washington, condemned event', status: 'Condemned Trump' },
    { name: 'Rev. Gini Gerbasi', role: 'Clergy tear-gassed at church', status: 'Victim' },
    { name: 'James Mattis', role: 'Former Defense Secretary, condemned response', href: '/entities/individuals/james-mattis', status: 'Condemned Trump' },
    { name: 'Mark Esper', role: 'Defense Secretary, later distanced himself', href: '/entities/individuals/mark-esper', status: 'Distanced' },
  ],
  militaryCondemnation: [
    { name: 'Gen. James Mattis', title: 'Former Secretary of Defense', quote: '"Donald Trump is the first president in my lifetime who does not try to unite the American people."' },
    { name: 'Gen. Mark Milley', title: 'Chairman of Joint Chiefs', quote: '"I should not have been there. My presence in that moment and in that environment created a perception of the military involved in domestic politics."' },
    { name: 'Gen. John Allen', title: 'Former NATO Commander', quote: '"The physical dominance he threatened against the American people was carried out...against peaceful protesters."' },
    { name: 'Adm. Mike Mullen', title: 'Former Chairman Joint Chiefs', quote: '"I have to date been reticent to speak out...I cannot remain silent."' },
  ],
  religiousCondemnation: [
    { name: 'Bishop Mariann Budde', faith: 'Episcopal', quote: '"The president just used a Bible...and one of the churches of my diocese, without permission, as a backdrop for a message antithetical to the teachings of Jesus."' },
    { name: 'Archbishop Wilton Gregory', faith: 'Catholic', quote: '"I find it baffling and reprehensible that any Catholic facility would allow itself to be so egregiously misused."' },
    { name: 'Rev. Gini Gerbasi', faith: 'Episcopal', quote: '"They turned on us, people in my exact location, and started firing off flash-bangs and tear gas."' },
  ],
  forcesUsed: [
    { agency: 'US Park Police', role: 'Primary force for clearing', weapons: 'Batons, pepper balls, shields' },
    { agency: 'DC National Guard', role: 'Military presence, helicopter intimidation', weapons: 'Helicopters hovered low over protesters' },
    { agency: 'Bureau of Prisons', role: 'Unidentified officers', weapons: 'Tear gas, riot gear' },
    { agency: 'Secret Service', role: 'Perimeter security', weapons: 'Standard' },
    { agency: 'DEA', role: 'Reportedly present', weapons: 'Unknown' },
  ],
  igReport: {
    released: 'June 2021',
    finding: 'Clearance was planned before Trump\'s decision to walk to church',
    note: 'However, this does not address why peaceful protesters were violently attacked',
    criticism: 'Report scope limited, did not interview Trump or assess proportionality of force',
  },
  legalActions: [
    { case: 'Black Lives Matter DC v. Trump', status: 'Lawsuit against Trump and officials', outcome: 'Ongoing' },
    { case: 'ACLU v. Barr', status: 'Challenged excessive force', outcome: 'Ongoing' },
    { case: 'Congressional Investigations', status: 'Multiple hearings held', outcome: 'Documented abuses' },
  ],
  sources: [
    { title: 'Interior IG Report', url: 'https://www.doioig.gov/reports/review/review-us-park-police-actions-lafayette-park', date: '2021' },
    { title: 'Gen. Milley Apology', url: 'https://www.nytimes.com/2020/06/11/us/politics/trump-milley-military-protests-lafayette-square.html', date: '2020' },
    { title: 'Gen. Mattis Statement', url: 'https://www.theatlantic.com/politics/archive/2020/06/james-mattis-denounces-trump-protests-militarization/612640/', date: '2020' },
    { title: 'Bishop Budde Interview', url: 'https://www.npr.org/2020/06/01/867532070/bishop-budde-on-trumps-church-visit', date: '2020' },
    { title: 'Timeline of Events', url: 'https://www.nytimes.com/2020/06/02/us/politics/trump-walk-lafayette-square.html', date: '2020' },
  ],
};

export default function LafayetteSquarePage() {
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

        {/* Timeline of the Attack */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="glass-card p-6 mb-8 border-l-4 border-blood-600"
        >
          <h2 className="text-xl font-bold text-white uppercase tracking-wider mb-4 flex items-center gap-2">
            <Calendar className="w-5 h-5 text-blood-500" />
            Timeline: June 1, 2020
          </h2>
          <div className="space-y-4">
            {investigation.timeline.map((item, idx) => (
              <div key={idx} className="relative pl-4 border-l-2 border-zinc-800">
                <div className="absolute -left-[5px] top-0 w-2 h-2 rounded-full bg-blood-500" />
                <p className="text-xs text-blood-500 font-mono">{item.time}</p>
                <p className="text-sm text-zinc-300">{item.event}</p>
              </div>
            ))}
          </div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Trump's Statements */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.15 }}
              className="glass-card p-6"
            >
              <h2 className="text-xl font-bold text-white uppercase tracking-wider mb-4 flex items-center gap-2">
                <Camera className="w-5 h-5 text-blood-500" />
                Trump&apos;s Photo Op
              </h2>
              <div className="space-y-3">
                {investigation.trumpStatements.map((item, idx) => (
                  <div key={idx} className="p-4 bg-zinc-900/50 border border-zinc-800">
                    <p className="text-xs text-zinc-500 mb-2">{item.context}</p>
                    <p className="text-zinc-300 italic">{item.quote}</p>
                  </div>
                ))}
              </div>
            </motion.div>

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
                    <span className="text-xs px-2 py-1 bg-zinc-800 text-zinc-400 border border-zinc-700">
                      {figure.status}
                    </span>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Military Condemnation */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.25 }}
              className="glass-card p-6 border-l-4 border-yellow-600"
            >
              <h2 className="text-xl font-bold text-white uppercase tracking-wider mb-4 flex items-center gap-2">
                <Shield className="w-5 h-5 text-yellow-500" />
                Military Leaders&apos; Condemnation
              </h2>
              <div className="space-y-4">
                {investigation.militaryCondemnation.map((leader, idx) => (
                  <div key={idx} className="p-4 bg-zinc-900/50 border border-yellow-500/30">
                    <p className="font-bold text-yellow-400">{leader.name}</p>
                    <p className="text-xs text-zinc-500">{leader.title}</p>
                    <p className="text-sm text-zinc-300 mt-2 italic">{leader.quote}</p>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Religious Condemnation */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="glass-card p-6"
            >
              <h2 className="text-xl font-bold text-white uppercase tracking-wider mb-4 flex items-center gap-2">
                <Church className="w-5 h-5 text-blood-500" />
                Religious Leaders&apos; Response
              </h2>
              <div className="space-y-4">
                {investigation.religiousCondemnation.map((leader, idx) => (
                  <div key={idx} className="p-4 bg-zinc-900/50 border border-zinc-800">
                    <div className="flex justify-between items-start">
                      <p className="font-bold text-white">{leader.name}</p>
                      <span className="text-xs px-2 py-1 bg-zinc-800 text-zinc-400">{leader.faith}</span>
                    </div>
                    <p className="text-sm text-zinc-300 mt-2 italic">{leader.quote}</p>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Forces Used */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.35 }}
              className="glass-card p-6"
            >
              <h2 className="text-xl font-bold text-white uppercase tracking-wider mb-4 flex items-center gap-2">
                <AlertTriangle className="w-5 h-5 text-blood-500" />
                Forces Deployed Against Protesters
              </h2>
              <div className="space-y-3">
                {investigation.forcesUsed.map((force, idx) => (
                  <div key={idx} className="p-3 bg-zinc-900/50 border border-red-500/30">
                    <p className="font-bold text-red-400">{force.agency}</p>
                    <p className="text-xs text-zinc-400">{force.role}</p>
                    <p className="text-xs text-zinc-500 mt-1">Weapons: {force.weapons}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Key Facts */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
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

            {/* IG Report */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.1 }}
              className="glass-card p-6"
            >
              <h3 className="text-lg font-bold text-white uppercase tracking-wider mb-4 flex items-center gap-2">
                <FileText className="w-5 h-5 text-blood-500" />
                Inspector General Report
              </h3>
              <div className="space-y-3">
                <div className="p-3 bg-zinc-900/50 border border-zinc-800">
                  <p className="text-xs text-zinc-500">Released</p>
                  <p className="text-sm text-white">{investigation.igReport.released}</p>
                </div>
                <div className="p-3 bg-zinc-900/50 border border-zinc-800">
                  <p className="text-xs text-zinc-500">Finding</p>
                  <p className="text-sm text-zinc-300">{investigation.igReport.finding}</p>
                </div>
                <div className="p-3 bg-yellow-950/20 border border-yellow-500/30">
                  <p className="text-xs text-yellow-500">Note</p>
                  <p className="text-sm text-zinc-300">{investigation.igReport.note}</p>
                </div>
                <div className="p-3 bg-red-950/20 border border-red-500/30">
                  <p className="text-xs text-red-500">Criticism</p>
                  <p className="text-sm text-zinc-300">{investigation.igReport.criticism}</p>
                </div>
              </div>
            </motion.div>

            {/* Legal Actions */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.15 }}
              className="glass-card p-6"
            >
              <h3 className="text-lg font-bold text-white uppercase tracking-wider mb-4 flex items-center gap-2">
                <Scale className="w-5 h-5 text-blood-500" />
                Legal Actions
              </h3>
              <div className="space-y-3">
                {investigation.legalActions.map((action, idx) => (
                  <div key={idx} className="p-3 bg-zinc-900/50 border border-zinc-800">
                    <p className="font-bold text-blood-400 text-sm">{action.case}</p>
                    <p className="text-xs text-zinc-400 mt-1">{action.status}</p>
                    <p className="text-xs text-zinc-500 mt-1">{action.outcome}</p>
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
