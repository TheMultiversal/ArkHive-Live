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
  Phone,
} from 'lucide-react';
import GlitchText from '@/components/effects/GlitchText';

const investigation = {
  title: 'Ukraine Extortion',
  subtitle: 'First Impeachment - Withholding Aid for Political Dirt',
  severity: 'critical',
  status: 'Impeached - Acquitted by Senate',
  summary: 'President Trump withheld $391 million in congressionally-approved military aid to Ukraine and a White House meeting to pressure Ukrainian President Zelensky into announcing investigations into Joe Biden and the 2016 election. The scheme was exposed by a whistleblower and led to Trump\'s first impeachment for abuse of power and obstruction of Congress.',
  thePerfectCall: {
    date: 'July 25, 2019',
    participants: ['Donald Trump', 'Volodymyr Zelensky'],
    keyQuote: '"I would like you to do us a favor though..."',
    asks: [
      'Investigate Biden and son Hunter regarding Burisma',
      'Investigate debunked 2016 election conspiracy theory',
      'Work with Rudy Giuliani and Attorney General Barr',
    ],
    context: 'Aid was frozen one week before the call; Zelensky needed weapons to fight Russian invasion',
  },
  keyFigures: [
    { name: 'Donald Trump', role: 'Directed scheme to pressure Ukraine', href: '/entities/individuals/donald-trump', status: 'Impeached' },
    { name: 'Rudy Giuliani', role: 'Led shadow diplomacy, pressured Ukraine officials', href: '/entities/individuals/rudy-giuliani', status: 'Under investigation' },
    { name: 'Gordon Sondland', role: 'EU Ambassador, testified to quid pro quo', href: '/entities/individuals/gordon-sondland', status: 'Cooperating witness' },
    { name: 'Mick Mulvaney', role: 'Acting Chief of Staff, admitted quid pro quo', href: '/entities/individuals/mick-mulvaney', status: 'Admitted on TV' },
    { name: 'William Barr', role: 'Attorney General, named by Trump on call', href: '/entities/individuals/bill-barr', status: 'Named in scheme' },
    { name: 'Mike Pompeo', role: 'Secretary of State, on the call', href: '/entities/individuals/mike-pompeo', status: 'On call' },
  ],
  shadowDiplomats: [
    { name: 'Lev Parnas', role: 'Giuliani associate, delivered pressure messages', href: '/entities/individuals/lev-parnas', status: 'Convicted of campaign finance fraud' },
    { name: 'Igor Fruman', role: 'Giuliani associate, Ukraine connections', href: '/entities/individuals/igor-fruman', status: 'Pled guilty' },
  ],
  impeachmentCharges: [
    { article: 'Article I', charge: 'Abuse of Power', description: 'Using presidential power to solicit foreign interference in 2020 election', houseVote: '230-197' },
    { article: 'Article II', charge: 'Obstruction of Congress', description: 'Ordering blanket defiance of subpoenas, blocking testimony', houseVote: '229-198' },
  ],
  senateVote: {
    article1: { guilty: 48, notGuilty: 52 },
    article2: { guilty: 47, notGuilty: 53 },
    notable: 'Mitt Romney voted guilty on Article I - first senator to vote to convict president of own party',
  },
  keyTestimony: [
    { witness: 'Gordon Sondland', quote: '"Was there a quid pro quo? The answer is yes... Everyone was in the loop."' },
    { witness: 'Bill Taylor', quote: '"It\'s crazy to withhold security assistance for help with a political campaign."' },
    { witness: 'Fiona Hill', quote: 'Called Giuliani\'s activities a "domestic political errand" undermining national security' },
    { witness: 'Alexander Vindman', quote: 'NSC official on call, reported concerns immediately - later fired and smeared' },
    { witness: 'Marie Yovanovitch', quote: 'Career ambassador fired after Giuliani smear campaign; felt "threatened" by Trump' },
  ],
  mulvaneyAdmission: {
    date: 'October 17, 2019',
    quote: '"We do that all the time with foreign policy... Get over it."',
    context: 'White House press briefing admitting aid was tied to investigations',
  },
  timeline: [
    { date: 'Apr 2019', event: 'Giuliani begins shadow diplomacy campaign in Ukraine' },
    { date: 'May 2019', event: 'Ambassador Yovanovitch recalled after Giuliani/Parnas pressure campaign' },
    { date: 'Jul 10, 2019', event: 'Bolton calls Giuliani scheme a "drug deal," abruptly ends meeting' },
    { date: 'Jul 18, 2019', event: 'OMB freezes $391M in military aid to Ukraine' },
    { date: 'Jul 25, 2019', event: 'Trump-Zelensky call: "I would like you to do us a favor though"' },
    { date: 'Aug 12, 2019', event: 'Whistleblower files complaint with Intelligence Community IG' },
    { date: 'Aug 28, 2019', event: 'Politico reports on frozen Ukraine aid' },
    { date: 'Sep 9, 2019', event: 'House committees announce investigation' },
    { date: 'Sep 11, 2019', event: 'Aid finally released after whistleblower exposed' },
    { date: 'Sep 24, 2019', event: 'Pelosi announces formal impeachment inquiry' },
    { date: 'Sep 25, 2019', event: 'White House releases call summary (not verbatim transcript)' },
    { date: 'Oct 2019', event: 'Parnas and Fruman arrested trying to flee country' },
    { date: 'Oct 17, 2019', event: 'Mulvaney admits quid pro quo: "Get over it"' },
    { date: 'Nov 2019', event: 'Public impeachment hearings; Sondland confirms quid pro quo' },
    { date: 'Dec 18, 2019', event: 'House impeaches Trump on two articles' },
    { date: 'Jan-Feb 2020', event: 'Senate trial; no witnesses called; Trump acquitted' },
    { date: 'Feb 2020', event: 'Trump fires Vindman (and his twin brother) in retaliation' },
  ],
  sources: [
    { title: 'Trump-Zelensky Call Summary', url: 'http://web.archive.org/web/20210113040119/https://www.whitehouse.gov/wp-content/uploads/2019/09/Unclassified09.2019.pdf', date: 'Sep 2019' },
    { title: 'Whistleblower Complaint', url: 'http://web.archive.org/web/20230101115346/https://intelligence.house.gov/uploadedfiles/20190812_-_whistleblower_complaint_unclass.pdf', date: 'Aug 2019' },
    { title: 'House Intelligence Committee Report', url: 'https://intelligence.house.gov/report/', date: 'Dec 2019' },
    { title: 'Articles of Impeachment (H.Res. 755)', url: 'https://www.congress.gov/bill/116th-congress/house-resolution/755/text', date: 'Dec 2019' },
    { title: 'Sondland Opening Statement', url: 'https://docs.house.gov/meetings/IG/IG00/20191120/110234/HHRG-116-IG00-Wstate-SondlandG-20191120.pdf', date: 'Nov 2019' },
    { title: 'GAO Report - OMB Violated Law', url: 'https://www.gao.gov/products/b-331564', date: 'Jan 2020' },
  ],
};

export default function UkraineExtortionPage() {
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

        {/* The Perfect Call */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="border-2 border-red-800/60 bg-red-950/20 p-6 mb-8"
        >
          <h2 className="text-xl font-bold text-white uppercase tracking-wider mb-4 flex items-center gap-2">
            <Phone className="w-5 h-5 text-red-500" />
            &quot;The Perfect Call&quot; - {investigation.thePerfectCall.date}
          </h2>
          <div className="border border-red-800/50 bg-black/50 p-4 mb-4">
            <p className="text-2xl text-red-400 italic">&quot;{investigation.thePerfectCall.keyQuote}&quot;</p>
            <p className="text-xs text-zinc-500 mt-2">- Donald Trump to Volodymyr Zelensky</p>
          </div>
          <div>
            <h3 className="text-white font-bold mb-2">Trump&apos;s Demands:</h3>
            <ul className="space-y-2">
              {investigation.thePerfectCall.asks.map((ask, idx) => (
                <li key={idx} className="flex items-start gap-2 text-zinc-300">
                  <span className="text-blood-500">■</span>
                  {ask}
                </li>
              ))}
            </ul>
            <p className="text-zinc-400 mt-4 text-sm italic">{investigation.thePerfectCall.context}</p>
          </div>
        </motion.div>

        {/* Mulvaney Admission */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15 }}
          className="border-2 border-yellow-800/60 bg-yellow-950/20 p-6 mb-8"
        >
          <h2 className="text-xl font-bold text-white uppercase tracking-wider mb-4 flex items-center gap-2">
            <AlertTriangle className="w-5 h-5 text-yellow-500" />
            White House Admission - {investigation.mulvaneyAdmission.date}
          </h2>
          <div className="border border-yellow-800/50 bg-black/50 p-4">
            <p className="text-xl text-yellow-400 italic">&quot;{investigation.mulvaneyAdmission.quote}&quot;</p>
            <p className="text-xs text-zinc-500 mt-2">- Mick Mulvaney, Acting Chief of Staff</p>
            <p className="text-sm text-zinc-400 mt-2">{investigation.mulvaneyAdmission.context}</p>
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

        {/* Shadow Diplomats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.25 }}
          className="border-2 border-zinc-800 bg-black/60 p-6 mb-8"
        >
          <h2 className="text-xl font-bold text-white uppercase tracking-wider mb-4 flex items-center gap-2">
            <Globe className="w-5 h-5 text-blood-500" />
            Shadow Diplomacy Team (Arrested)
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {investigation.shadowDiplomats.map((person, idx) => (
              <div key={idx} className="border border-zinc-700 bg-zinc-900/50 p-4">
                <h3 className="font-bold text-white">{person.name}</h3>
                <p className="text-sm text-zinc-400">{person.role}</p>
                <p className="text-xs text-red-400 mt-1">{person.status}</p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Key Testimony */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="border-2 border-zinc-800 bg-black/60 p-6 mb-8"
        >
          <h2 className="text-xl font-bold text-white uppercase tracking-wider mb-4">
            Key Testimony
          </h2>
          <div className="space-y-3">
            {investigation.keyTestimony.map((test, idx) => (
              <div key={idx} className="border border-zinc-700 bg-zinc-900/50 p-4">
                <h3 className="font-bold text-blood-500 mb-2">{test.witness}</h3>
                <p className="text-zinc-300 italic">{test.quote}</p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Impeachment Charges */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.35 }}
          className="border-2 border-zinc-800 bg-black/60 p-6 mb-8"
        >
          <h2 className="text-xl font-bold text-white uppercase tracking-wider mb-4 flex items-center gap-2">
            <Scale className="w-5 h-5 text-blood-500" />
            Articles of Impeachment
          </h2>
          <div className="space-y-4">
            {investigation.impeachmentCharges.map((charge, idx) => (
              <div key={idx} className="border border-zinc-700 bg-zinc-900/50 p-4">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="font-bold text-white">{charge.article}: {charge.charge}</h3>
                  <span className="text-blood-500">House: {charge.houseVote}</span>
                </div>
                <p className="text-zinc-400">{charge.description}</p>
              </div>
            ))}
          </div>
          <div className="mt-4 border border-yellow-800/50 bg-yellow-950/30 p-4">
            <h3 className="text-yellow-400 font-bold mb-2">Senate Acquittal</h3>
            <p className="text-zinc-300">Article I: {investigation.senateVote.article1.guilty}-{investigation.senateVote.article1.notGuilty} (needed 67)</p>
            <p className="text-zinc-300">Article II: {investigation.senateVote.article2.guilty}-{investigation.senateVote.article2.notGuilty} (needed 67)</p>
            <p className="text-zinc-400 text-sm mt-2">{investigation.senateVote.notable}</p>
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
