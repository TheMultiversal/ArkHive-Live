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
  Skull,
} from 'lucide-react';
import GlitchText from '@/components/effects/GlitchText';

const investigation = {
  title: 'January 6 Insurrection',
  subtitle: 'The Violent Attack on American Democracy',
  severity: 'critical',
  status: 'Criminal Proceedings Ongoing',
  summary: 'On January 6, 2021, following a rally where President Trump urged supporters to march on the Capitol, thousands stormed the U.S. Capitol building in a violent attempt to stop the certification of Joe Biden\'s electoral victory. The attack resulted in deaths, injuries, and over $2 billion in damages. Trump was impeached for "incitement of insurrection" and later indicted for conspiracy.',
  casualties: {
    deaths: [
      { name: 'Ashli Babbitt', cause: 'Shot by Capitol Police while breaching Speaker\'s Lobby' },
      { name: 'Kevin Greeson', cause: 'Heart attack during riot' },
      { name: 'Benjamin Phillips', cause: 'Stroke during riot' },
      { name: 'Rosanne Boyland', cause: 'Crushed in crowd surge' },
      { name: 'Brian Sicknick', cause: 'Capitol Police Officer, died following day from strokes after assault' },
    ],
    injuries: '140+ police officers injured, including chemical burns, brain injuries, lost eyes, broken bones',
    suicides: '4 police officers died by suicide in the following months',
  },
  keyFigures: [
    { name: 'Donald Trump', role: 'Inciter - "Fight like hell" speech, refused to call off mob', href: '/entities/individuals/donald-trump', status: 'Indicted' },
    { name: 'Mark Meadows', role: 'Chief of Staff - Coordinated objection efforts', href: '/entities/individuals/mark-meadows', status: 'RICO Defendant' },
    { name: 'John Eastman', role: 'Authored coup memo, pressured Pence', href: '/entities/individuals/john-eastman', status: 'Indicted, Disbarred' },
    { name: 'Rudy Giuliani', role: '"Trial by combat" speech at rally', href: '/entities/individuals/rudy-giuliani', status: 'RICO Defendant' },
    { name: 'Steve Bannon', role: '"All hell will break loose" prediction, strategy calls', href: '/entities/individuals/steve-bannon', status: 'Contempt Conviction' },
    { name: 'Roger Stone', role: 'Oath Keepers connection, pardon beneficiary', href: '/entities/individuals/roger-stone', status: 'Investigation Ongoing' },
    { name: 'Michael Flynn', role: 'Called for martial law, present at planning', href: '/entities/individuals/michael-flynn', status: 'Investigation Ongoing' },
    { name: 'Ted Cruz', role: 'Led Senate objection, continued after attack', href: '/entities/individuals/ted-cruz', status: 'Objector' },
    { name: 'Josh Hawley', role: 'First senator to object, raised fist to mob', href: '/entities/individuals/josh-hawley', status: 'Objector' },
  ],
  organizers: [
    { name: 'Stewart Rhodes', org: 'Oath Keepers', status: 'Convicted of Seditious Conspiracy - 18 years', href: '/entities/individuals/stewart-rhodes' },
    { name: 'Enrique Tarrio', org: 'Proud Boys', status: 'Convicted of Seditious Conspiracy - 22 years', href: '/entities/individuals/enrique-tarrio' },
    { name: 'Ethan Nordean', org: 'Proud Boys', status: 'Convicted - 18 years', href: '/entities/individuals/ethan-nordean' },
    { name: 'Joseph Biggs', org: 'Proud Boys', status: 'Convicted - 17 years', href: '/entities/individuals/joseph-biggs' },
    { name: 'Zachary Rehl', org: 'Proud Boys', status: 'Convicted - 15 years', href: '/entities/individuals/zachary-rehl' },
  ],
  timeline: [
    { date: 'Nov 3, 2020', event: 'Election Day - Biden wins 306-232 electoral votes' },
    { date: 'Nov 7, 2020', event: 'Networks call race for Biden; Trump refuses to concede' },
    { date: 'Nov-Dec 2020', event: 'Trump makes 200+ false claims of election fraud' },
    { date: 'Nov-Dec 2020', event: 'Over 60 court cases challenging results - all fail' },
    { date: 'Dec 14, 2020', event: 'Electoral College certifies Biden victory' },
    { date: 'Dec 18, 2020', event: 'Oval Office meeting proposing military seizure of voting machines' },
    { date: 'Dec 19, 2020', event: 'Trump tweets: "Big protest in D.C. on January 6th. Be there, will be wild!"' },
    { date: 'Jan 2, 2021', event: 'Trump calls Georgia: "Find 11,780 votes"' },
    { date: 'Jan 3, 2021', event: 'All 10 living Defense Secretaries warn against military involvement' },
    { date: 'Jan 4, 2021', event: 'Eastman briefs Trump and Pence on coup plan' },
    { date: 'Jan 5, 2021', event: 'Proud Boys and Oath Keepers arrive in DC, strategy meetings held' },
    { date: 'Jan 6, 11:00 AM', event: 'Trump rally begins at Ellipse near White House' },
    { date: 'Jan 6, 11:50 AM', event: 'Giuliani calls for "trial by combat"' },
    { date: 'Jan 6, 12:00 PM', event: 'Trump speaks: "If you don\'t fight like hell, you\'re not going to have a country anymore"' },
    { date: 'Jan 6, 12:53 PM', event: 'First barriers breached at Capitol' },
    { date: 'Jan 6, 1:00 PM', event: 'Pence rejects Eastman plan to overturn election' },
    { date: 'Jan 6, 1:10 PM', event: 'Trump: "Mike Pence didn\'t have the courage to do what should have been done"' },
    { date: 'Jan 6, 2:12 PM', event: 'Rioters breach Capitol building' },
    { date: 'Jan 6, 2:13 PM', event: 'Pence evacuated from Senate chamber' },
    { date: 'Jan 6, 2:24 PM', event: 'Trump tweets attacking Pence while mob chants "Hang Mike Pence"' },
    { date: 'Jan 6, 2:38 PM', event: 'Ashli Babbitt shot while breaching Speaker\'s Lobby' },
    { date: 'Jan 6, 2:44 PM', event: 'Rioters enter Senate chamber, photograph documents' },
    { date: 'Jan 6, 3:13 PM', event: 'Trump refuses to call off mob despite pleas from staff and family' },
    { date: 'Jan 6, 4:17 PM', event: 'Trump finally releases video telling rioters to go home, praises them as "special"' },
    { date: 'Jan 6, 5:40 PM', event: 'National Guard arrives (delayed for hours)' },
    { date: 'Jan 6, 8:00 PM', event: 'Congress reconvenes to complete certification' },
    { date: 'Jan 7, 3:41 AM', event: 'Biden certified as President' },
    { date: 'Jan 13, 2021', event: 'Trump impeached for "incitement of insurrection" (232-197)' },
    { date: 'Feb 13, 2021', event: 'Senate acquits 57-43 (needed 67 to convict)' },
    { date: 'Jun 2022', event: 'January 6 Committee public hearings begin' },
    { date: 'Aug 2023', event: 'Trump indicted on 4 federal counts related to January 6' },
  ],
  charges: [
    { statute: '18 U.S.C. § 371', description: 'Conspiracy to defraud the United States', defendant: 'Trump' },
    { statute: '18 U.S.C. § 1512(c)', description: 'Obstruction of an official proceeding', defendant: 'Trump' },
    { statute: '18 U.S.C. § 1512(k)', description: 'Conspiracy to obstruct an official proceeding', defendant: 'Trump' },
    { statute: '18 U.S.C. § 241', description: 'Conspiracy against rights', defendant: 'Trump' },
    { statute: '18 U.S.C. § 2384', description: 'Seditious Conspiracy', defendant: 'Oath Keepers/Proud Boys' },
  ],
  damage: '$2.73 billion in damages to Capitol and surrounding area',
  arrests: '1,400+ individuals charged as of 2025',
  sources: [
    { title: 'January 6th Committee Final Report', url: 'https://www.govinfo.gov/content/pkg/GPO-J6-REPORT/pdf/GPO-J6-REPORT.pdf', date: '2022' },
    { title: 'DOJ Jack Smith January 6 Indictment', url: 'https://www.justice.gov/storage/US_v_Trump_23_cr_257.pdf', date: '2023' },
    { title: 'House Impeachment Resolution (H.Res. 24)', url: 'https://www.congress.gov/bill/117th-congress/house-resolution/24', date: '2021' },
    { title: 'Capitol Police Officer Testimony', url: 'https://web.archive.org/web/2024/https://www.congress.gov/117/meeting/house/113883/witnesses/HHRG-117-IG00-Wstate-FanoneM-20210727.pdf', date: '2021' },
    { title: 'Stewart Rhodes Seditious Conspiracy Conviction', url: 'https://web.archive.org/web/2024/https://www.justice.gov/opa/pr/oath-keepers-leader-and-florida-oath-keeper-found-guilty-seditious-conspiracy', date: '2022' },
    { title: 'Proud Boys Seditious Conspiracy Convictions', url: 'https://www.justice.gov/opa/pr/four-leaders-proud-boys-convicted-seditious-conspiracy-related-us-capitol-breach', date: '2023' }
  ],
};

export default function January6Page() {
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

        {/* Casualties */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="border-2 border-red-800/60 bg-red-950/20 p-6 mb-8"
        >
          <h2 className="text-xl font-bold text-white uppercase tracking-wider mb-4 flex items-center gap-2">
            <Skull className="w-5 h-5 text-red-500" />
            Casualties & Injuries
          </h2>
          <div className="space-y-4">
            <div>
              <h3 className="text-red-400 font-bold mb-2">Deaths ({investigation.casualties.deaths.length})</h3>
              <div className="space-y-2">
                {investigation.casualties.deaths.map((death, idx) => (
                  <div key={idx} className="border border-red-800/50 bg-black/50 p-3">
                    <span className="text-white font-bold">{death.name}</span>
                    <span className="text-zinc-400 ml-2">- {death.cause}</span>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <h3 className="text-orange-400 font-bold mb-2">Injuries</h3>
              <p className="text-zinc-300">{investigation.casualties.injuries}</p>
            </div>
            <div>
              <h3 className="text-yellow-400 font-bold mb-2">Officer Suicides</h3>
              <p className="text-zinc-300">{investigation.casualties.suicides}</p>
            </div>
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
            Key Figures & Organizers
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

        {/* Extremist Groups */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="border-2 border-zinc-800 bg-black/60 p-6 mb-8"
        >
          <h2 className="text-xl font-bold text-white uppercase tracking-wider mb-4 flex items-center gap-2">
            <AlertTriangle className="w-5 h-5 text-blood-500" />
            Convicted Extremist Leaders
          </h2>
          <div className="space-y-3">
            {investigation.organizers.map((org, idx) => (
              <div key={idx} className="border border-zinc-700 bg-zinc-900/50 p-4">
                <div className="flex justify-between items-start">
                  <div>
                    {org.href ? (
                      <Link href={org.href} className="font-bold text-white hover:text-blood-400 transition-colors">{org.name}</Link>
                    ) : (
                      <h3 className="font-bold text-white">{org.name}</h3>
                    )}
                    <p className="text-sm text-blood-500">{org.org}</p>
                  </div>
                  <span className="text-xs text-red-400">{org.status}</span>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Criminal Charges */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.25 }}
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
                  <span className="text-xs text-zinc-500">{charge.defendant}</span>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-4 pt-4 border-t border-zinc-800 grid grid-cols-2 gap-4">
            <div className="text-center">
              <p className="text-2xl font-bold text-blood-500">{investigation.arrests}</p>
              <p className="text-sm text-zinc-500">Individuals Charged</p>
            </div>
            <div className="text-center">
              <p className="text-2xl font-bold text-blood-500">{investigation.damage}</p>
              <p className="text-sm text-zinc-500">Total Damages</p>
            </div>
          </div>
        </motion.div>

        {/* Timeline */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="border-2 border-zinc-800 bg-black/60 p-6 mb-8"
        >
          <h2 className="text-xl font-bold text-white uppercase tracking-wider mb-4 flex items-center gap-2">
            <Calendar className="w-5 h-5 text-blood-500" />
            Timeline of Events
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
          transition={{ delay: 0.35 }}
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
