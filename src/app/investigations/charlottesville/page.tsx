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
  Flame,
  Car,
} from 'lucide-react';
import GlitchText from '@/components/effects/GlitchText';

const investigation = {
  title: 'Charlottesville Response',
  subtitle: '"Very Fine People on Both Sides"',
  severity: 'critical',
  status: 'Historical Record',
  summary: 'On August 11-12, 2017, white supremacists, neo-Nazis, and Klansmen gathered in Charlottesville, Virginia for the "Unite the Right" rally, chanting "Jews will not replace us." Counter-protester Heather Heyer was murdered when a neo-Nazi drove his car into a crowd. President Trump\'s response—equating white supremacists with those protesting them—defined his presidency and emboldened the far right.',
  casualties: {
    dead: 1,
    injured: 35,
    victim: 'Heather Heyer, 32, killed by car attack',
    attacker: 'James Alex Fields Jr., sentenced to life + 419 years',
  },
  trumpQuotes: [
    { date: 'Aug 12, 2017', quote: '"We condemn in the strongest possible terms this egregious display of hatred, bigotry and violence on many sides, on many sides."' },
    { date: 'Aug 15, 2017', quote: '"You had some very bad people in that group, but you also had people that were very fine people, on both sides."' },
    { date: 'Aug 15, 2017', quote: '"What about the alt-left that came charging at, as you say, at the alt-right?"' },
    { date: 'Aug 15, 2017', quote: '"Not all of those people were neo-Nazis, believe me. Not all of those people were white supremacists."' },
    { date: 'Aug 15, 2017', quote: '"This week it\'s Robert E. Lee. I noticed that Stonewall Jackson is coming down. I wonder, is George Washington next?"' },
  ],
  whatHappened: [
    { time: 'Aug 11, Night', event: 'Torch march on UVA campus, marchers chant "Jews will not replace us" and "Blood and soil"' },
    { time: 'Aug 12, Morning', event: 'Unite the Right rally begins at Emancipation Park' },
    { time: 'Aug 12, 11:28 AM', event: 'Governor McAuliffe declares state of emergency' },
    { time: 'Aug 12, 1:42 PM', event: 'James Fields drives car into counter-protesters, killing Heather Heyer' },
    { time: 'Aug 12, 3:26 PM', event: 'Trump initial statement: "hatred, bigotry and violence on many sides"' },
    { time: 'Aug 12, Evening', event: 'Virginia State Police helicopter monitoring rally crashes, killing two officers' },
    { time: 'Aug 15', event: 'Trump\'s "very fine people on both sides" press conference' },
  ],
  attendees: [
    { group: 'Neo-Nazis', description: 'Carried swastikas and gave Nazi salutes' },
    { group: 'Ku Klux Klan', description: 'Klan members in full regalia' },
    { group: 'White Nationalists', description: 'Identity Evropa, Vanguard America' },
    { group: 'Alt-Right', description: 'Richard Spencer, Jason Kessler led march' },
    { group: 'Armed Militias', description: 'Heavily armed groups patrolled streets' },
  ],
  keyFigures: [
    { name: 'Donald Trump', role: 'Made "both sides" comments, refused to specifically condemn', href: '/entities/individuals/donald-trump', status: 'Documented' },
    { name: 'Heather Heyer', role: 'Counter-protester murdered by neo-Nazi', href: '/entities/individuals/heather-heyer', status: 'Victim (deceased)' },
    { name: 'James Alex Fields Jr.', role: 'Drove car into crowd, killing Heyer', href: '/entities/individuals/james-alex-fields', status: 'Life + 419 years' },
    { name: 'Richard Spencer', role: 'White nationalist leader, helped organize rally', href: '/entities/individuals/richard-spencer', status: 'Civil liability' },
    { name: 'Jason Kessler', role: 'Primary organizer of Unite the Right', href: '/entities/individuals/jason-kessler', status: 'Civil liability' },
    { name: 'David Duke', role: 'Former KKK leader, attended rally', href: '/entities/individuals/david-duke', status: 'Praised Trump response' },
    { name: 'Steve Bannon', role: 'White House Chief Strategist at time', href: '/entities/individuals/steve-bannon', status: 'Resigned Aug 18' },
    { name: 'Terry McAuliffe', role: 'Virginia Governor who declared emergency', status: 'State response' },
  ],
  consequences: [
    'Heather Heyer killed, 35+ injured',
    'Two state troopers killed in helicopter crash',
    'Multiple tech companies banned white supremacist accounts',
    'Confederate statues removed across nation',
    'Trump\'s response cited as emboldening far-right violence',
    'Sines v. Kessler lawsuit held organizers liable',
    'Gary Cohn, Kenneth Frazier resigned from Trump councils',
    'Joint Chiefs issued rare rebuke of racism',
  ],
  civilLawsuit: {
    case: 'Sines v. Kessler',
    outcome: 'November 2021: Jury found organizers liable for conspiracy',
    damages: '$26 million in damages against defendants',
    significance: 'First successful use of 1871 Ku Klux Klan Act against modern organizers',
  },
  timeline: [
    { date: 'Aug 11, 2017', event: 'Torchlit march at UVA - "Jews will not replace us"' },
    { date: 'Aug 12, 2017', event: 'Unite the Right rally, Heather Heyer murdered' },
    { date: 'Aug 12, 2017', event: 'Trump: "violence on many sides"' },
    { date: 'Aug 14, 2017', event: 'Trump reads scripted condemnation (later abandoned)' },
    { date: 'Aug 15, 2017', event: 'Trump: "very fine people on both sides"' },
    { date: 'Aug 18, 2017', event: 'Steve Bannon leaves White House' },
    { date: 'Dec 2017', event: 'James Fields charged with federal hate crimes' },
    { date: 'Dec 2018', event: 'Fields pleads guilty, receives life sentence' },
    { date: 'Oct 2019', event: 'Sines v. Kessler trial begins' },
    { date: 'Nov 2021', event: 'Jury finds organizers liable - $26M damages' },
  ],
  legalOutcomes: [
    { defendant: 'James Alex Fields Jr.', charge: 'First-degree murder, federal hate crimes', outcome: 'Life + 419 years' },
    { defendant: 'Unite the Right organizers', charge: 'Civil conspiracy (Sines v. Kessler)', outcome: '$26 million liability' },
    { defendant: 'Richard Spencer', charge: 'Civil conspiracy', outcome: 'Liable for damages' },
    { defendant: 'Jason Kessler', charge: 'Civil conspiracy', outcome: 'Liable for damages' },
    { defendant: 'Christopher Cantwell', charge: 'Assault, perjury', outcome: 'Convicted, prison' },
  ],
  sources: [
    { title: 'Trump\'s Charlottesville Press Conference Transcript', url: 'https://www.politifact.com/article/2019/apr/26/context-trumps-very-fine-people-both-sides-remarks/', date: '2017' },
    { title: 'Sines v. Kessler Verdict', url: 'https://www.nytimes.com/2021/11/23/us/charlottesville-rally-verdict.html', date: '2021' },
    { title: 'James Fields Sentencing', url: 'https://www.justice.gov/opa/pr/ohio-man-sentenced-life-plus-419-years-federal-hate-crimes', date: '2019' },
    { title: 'Heather Heyer Memorial', url: 'https://www.heatherheyerfoundation.com/', date: 'Ongoing' },
    { title: 'Unite the Right Documentary Coverage', url: 'https://www.vice.com/en/article/qvzn8p/vice-news-tonight-full-episode-charlottesville-race-and-terror', date: '2017' },
  ],
};

export default function CharlottesvillePage() {
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

        {/* Casualties Box */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="border-2 border-red-800/60 bg-red-950/20 p-6 mb-8"
        >
          <h2 className="text-xl font-bold text-white uppercase tracking-wider mb-4 flex items-center gap-2">
            <Car className="w-5 h-5 text-red-500" />
            The Attack
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-4">
            <div className="text-center p-4 border border-red-500/30 bg-red-950/30">
              <p className="text-4xl font-black text-red-500">{investigation.casualties.dead}</p>
              <p className="text-xs text-zinc-400">Murdered</p>
            </div>
            <div className="text-center p-4 border border-red-500/30 bg-red-950/30">
              <p className="text-4xl font-black text-red-500">{investigation.casualties.injured}</p>
              <p className="text-xs text-zinc-400">Injured</p>
            </div>
            <div className="col-span-2 p-4 border border-zinc-800 bg-zinc-900/50">
              <p className="text-blood-400 font-bold">{investigation.casualties.victim}</p>
              <p className="text-xs text-zinc-400 mt-1">{investigation.casualties.attacker}</p>
            </div>
          </div>
        </motion.div>

        {/* Trump Quotes */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15 }}
          className="glass-card p-6 mb-8 border-l-4 border-blood-600"
        >
          <h2 className="text-xl font-bold text-white uppercase tracking-wider mb-4">
            Trump&apos;s Words
          </h2>
          <div className="space-y-4">
            {investigation.trumpQuotes.map((item, idx) => (
              <div key={idx} className="p-4 bg-zinc-900/50 border border-zinc-800">
                <p className="text-xs text-blood-500 font-mono mb-2">{item.date}</p>
                <p className="text-zinc-300 italic">{item.quote}</p>
              </div>
            ))}
          </div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* What Happened */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="glass-card p-6"
            >
              <h2 className="text-xl font-bold text-white uppercase tracking-wider mb-4 flex items-center gap-2">
                <Calendar className="w-5 h-5 text-blood-500" />
                What Happened
              </h2>
              <div className="space-y-4">
                {investigation.whatHappened.map((item, idx) => (
                  <div key={idx} className="relative pl-4 border-l-2 border-zinc-800">
                    <div className="absolute -left-[5px] top-0 w-2 h-2 rounded-full bg-blood-500" />
                    <p className="text-xs text-blood-500 font-mono">{item.time}</p>
                    <p className="text-sm text-zinc-300">{item.event}</p>
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

            {/* Who Attended */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="glass-card p-6"
            >
              <h2 className="text-xl font-bold text-white uppercase tracking-wider mb-4 flex items-center gap-2">
                <Flame className="w-5 h-5 text-blood-500" />
                Who Were the &quot;Very Fine People&quot;?
              </h2>
              <p className="text-sm text-zinc-500 mb-4">
                Groups that marched at Unite the Right rally that Trump defended:
              </p>
              <div className="space-y-3">
                {investigation.attendees.map((group, idx) => (
                  <div key={idx} className="p-3 bg-red-950/20 border border-red-500/30">
                    <p className="font-bold text-red-400">{group.group}</p>
                    <p className="text-xs text-zinc-400 mt-1">{group.description}</p>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Civil Lawsuit */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.35 }}
              className="glass-card p-6 border-l-4 border-green-600"
            >
              <h2 className="text-xl font-bold text-white uppercase tracking-wider mb-4 flex items-center gap-2">
                <Scale className="w-5 h-5 text-green-500" />
                Sines v. Kessler: Justice for Victims
              </h2>
              <div className="space-y-4">
                <div className="p-4 bg-zinc-900/50 border border-zinc-800">
                  <p className="text-sm text-zinc-400">Case: <span className="text-white">{investigation.civilLawsuit.case}</span></p>
                </div>
                <div className="p-4 bg-green-950/20 border border-green-500/30">
                  <p className="text-sm text-zinc-400">Outcome: <span className="text-green-400">{investigation.civilLawsuit.outcome}</span></p>
                </div>
                <div className="p-4 bg-green-950/20 border border-green-500/30">
                  <p className="text-3xl font-black text-green-500">{investigation.civilLawsuit.damages}</p>
                </div>
                <div className="p-4 bg-zinc-900/50 border border-zinc-800">
                  <p className="text-sm text-zinc-400">{investigation.civilLawsuit.significance}</p>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Consequences */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              className="glass-card p-6"
            >
              <h3 className="text-lg font-bold text-white uppercase tracking-wider mb-4">
                Consequences
              </h3>
              <ul className="space-y-2">
                {investigation.consequences.map((item, idx) => (
                  <li key={idx} className="text-sm text-zinc-400 flex items-start gap-2 p-2 bg-zinc-900/30">
                    <span className="text-blood-500 mt-1">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Legal Outcomes */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.1 }}
              className="glass-card p-6"
            >
              <h3 className="text-lg font-bold text-white uppercase tracking-wider mb-4 flex items-center gap-2">
                <Scale className="w-5 h-5 text-blood-500" />
                Legal Outcomes
              </h3>
              <div className="space-y-3">
                {investigation.legalOutcomes.map((item, idx) => (
                  <div key={idx} className="p-3 bg-zinc-900/50 border border-zinc-800">
                    <p className="font-bold text-white text-sm">{item.defendant}</p>
                    <p className="text-xs text-zinc-400 mt-1">{item.charge}</p>
                    <p className="text-xs text-blood-400 mt-1">{item.outcome}</p>
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
