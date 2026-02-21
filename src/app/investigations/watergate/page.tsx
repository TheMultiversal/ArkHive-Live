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
  Shield,
  Mic,
  Lock,
} from 'lucide-react';
import GlitchText from '@/components/effects/GlitchText';

const investigation = {
  title: 'Watergate: The Fall of a President',
  subtitle: 'How Richard Nixon\'s Criminal Conspiracy to Subvert Democracy Led to the Only Presidential Resignation in American History',
  severity: 'critical',
  status: 'Historical Record — Exposed',
  summary: 'Watergate was not simply a "third-rate burglary." It was a comprehensive criminal conspiracy orchestrated from the Oval Office to undermine American democracy. From the break-in at the Democratic National Committee headquarters on June 17, 1972, through Nixon\'s resignation on August 9, 1974, the scandal exposed systematic abuse of presidential power including political espionage, sabotage, bribery, obstruction of justice, misuse of the CIA and FBI, illegal wiretapping, and a massive cover-up directed by the President of the United States himself. 69 people were indicted, 48 were convicted, and the most powerful man in the world was forced to resign in disgrace.',
  scale: {
    indictments: '69',
    convictions: '48',
    tapes: '3,700+ hours',
    duration: '26 months (break-in to resignation)',
    articles: '3 articles of impeachment',
  },
  theBreakIn: {
    date: 'June 17, 1972',
    location: 'Watergate Complex, DNC Headquarters, Washington, D.C.',
    description: 'Five men were caught breaking into the DNC offices to photograph documents and plant listening devices. They carried $2,300 in sequential $100 bills traceable to Nixon\'s re-election campaign. The burglars included former CIA agent James McCord, who was security coordinator for the Committee to Re-elect the President (CREEP).',
    burglars: [
      'James McCord — CREEP Security Coordinator, former CIA',
      'Bernard Barker — CIA-connected Cuban exile',
      'Virgilio González — Cuban exile, locksmith',
      'Eugenio Martínez — CIA operative',
      'Frank Sturgis — CIA-connected soldier of fortune',
    ],
  },
  dirtyTricks: [
    { name: 'The Plumbers', description: 'Nixon created a secret White House unit ("the Plumbers") to stop security leaks. They burglarized Daniel Ellsberg\'s psychiatrist\'s office to find discrediting material after Ellsberg leaked the Pentagon Papers.' },
    { name: 'Donald Segretti\'s Sabotage', description: 'Hired by Nixon\'s team to disrupt Democratic primary campaigns through forged letters, fake press releases, and provocateur operations. The "Canuck letter" helped destroy Edmund Muskie\'s candidacy.' },
    { name: 'Enemies List', description: 'The White House maintained a list of political opponents to be targeted using federal agencies including the IRS, FBI, and CIA. The list included journalists, politicians, and activists.' },
    { name: 'IRS Weaponization', description: 'Nixon ordered the IRS to audit political enemies including journalists and Democratic donors. IRS Commissioner Johnnie Walters refused some orders and preserved the enemies list.' },
    { name: 'Wiretapping of Journalists', description: 'National security advisor Henry Kissinger ordered FBI wiretaps of 13 government officials and 4 journalists to find the source of leaks about the secret bombing of Cambodia.' },
  ],
  theCoverup: [
    'Nixon personally directed the cover-up within days of the break-in, ordering the CIA to block the FBI investigation',
    'The "smoking gun" tape (June 23, 1972) proved Nixon ordered the CIA to tell the FBI: "Don\'t go any further into this case, period."',
    'White House counsel John Dean was tasked with managing the cover-up — later became the key witness against Nixon',
    'Over $500,000 in hush money was paid to the Watergate burglars from CREEP funds',
    'Nixon fired Special Prosecutor Archibald Cox in the "Saturday Night Massacre" when Cox subpoenaed the White House tapes',
    'Nixon\'s personal secretary Rose Mary Woods "accidentally" erased 18½ minutes of a crucial tape recording',
    'Nixon repeatedly lied to the American public: "I am not a crook" became his most infamous quote',
    'The White House attempted to use executive privilege to withhold all tape recordings from investigators',
  ],
  keyFigures: [
    { name: 'Richard Nixon', role: '37th President — directed the cover-up from the Oval Office', href: '/entities/individuals/richard-nixon', status: 'Resigned Aug 9, 1974 — Pardoned by Ford' },
    { name: 'H.R. Haldeman', role: 'White House Chief of Staff — "The Berlin Wall" who managed the cover-up', href: '/entities/individuals/h-r-haldeman', status: 'Convicted — 18 months in prison' },
    { name: 'John Ehrlichman', role: 'Chief Domestic Advisor — oversaw the Plumbers unit', href: '/entities/individuals/john-ehrlichman', status: 'Convicted — 18 months in prison' },
    { name: 'John Dean', role: 'White House Counsel who managed then exposed the cover-up', status: 'Convicted — 4 months. Key prosecution witness' },
    { name: 'John Mitchell', role: 'Attorney General & CREEP Director — approved the break-in', status: 'Convicted — 19 months. First AG imprisoned.' },
    { name: 'G. Gordon Liddy', role: 'CREEP counsel who planned the break-in and other operations', status: 'Convicted — 52 months (longest sentence). Refused to testify.' },
    { name: 'E. Howard Hunt', role: 'Former CIA officer who recruited the burglars', status: 'Convicted — 33 months. Wife killed in plane crash carrying hush money.' },
    { name: 'Gerald Ford', role: 'Succeeded Nixon and pardoned him "for the good of the country"', href: '/entities/individuals/gerald-ford', status: 'Lost 1976 election partly due to pardon' },
    { name: 'Archibald Cox', role: 'First special prosecutor — fired in Saturday Night Massacre', status: 'Fired Oct 20, 1973' },
    { name: 'Leon Jaworski', role: 'Second special prosecutor — secured the tapes', status: 'Won unanimous Supreme Court ruling' },
    { name: 'Bob Woodward & Carl Bernstein', role: 'Washington Post reporters who broke the story', status: 'Pulitzer Prize (1973)' },
    { name: 'Deep Throat (Mark Felt)', role: 'FBI Associate Director who secretly guided Woodward', status: 'Identity revealed 2005' },
    { name: 'Sam Ervin', role: 'Senate Watergate Committee Chairman', status: 'Led televised hearings' },
    { name: 'Alexander Butterfield', role: 'White House aide who revealed the taping system', status: 'Testified July 1973' },
  ],
  articlesOfImpeachment: [
    { article: 'Article I — Obstruction of Justice', description: 'Nixon personally engaged in a course of conduct to delay, impede, and obstruct investigation of the break-in; to cover up, conceal, and protect those responsible; and to conceal the existence and scope of other unlawful covert activities.', specifics: 'Making false statements to investigators, counseling witnesses to give false testimony, approving hush money payments, interfering with DOJ and FBI investigations, misusing CIA.' },
    { article: 'Article II — Abuse of Power', description: 'Nixon repeatedly engaged in conduct violating the constitutional rights of citizens, impairing the due administration of justice, and contravening the laws governing agencies of the executive branch.', specifics: 'Using IRS against political enemies, authorizing illegal wiretaps, maintaining a secret investigative unit (the Plumbers), interfering with FBI and DOJ.' },
    { article: 'Article III — Contempt of Congress', description: 'Nixon failed without lawful cause or excuse to produce papers and things as directed by duly authorized subpoenas issued by the Committee on the Judiciary of the House of Representatives.', specifics: 'Defied 8 subpoenas for tape recordings and documents.' },
  ],
  saturdayNightMassacre: {
    date: 'October 20, 1973',
    description: 'When Special Prosecutor Archibald Cox refused to accept a compromise on the tapes and insisted on the original subpoena, Nixon ordered Attorney General Elliot Richardson to fire Cox. Richardson refused and resigned. Deputy AG William Ruckelshaus also refused and was fired. Solicitor General Robert Bork finally carried out the order.',
    consequences: [
      'Firestorm of public outrage — 450,000 telegrams flooded Congress in days',
      'Multiple impeachment resolutions introduced immediately',
      'Nixon\'s approval rating plummeted to 27%',
      'New special prosecutor Leon Jaworski appointed within weeks',
      'Federal court later ruled Cox\'s firing was illegal',
    ],
  },
  timeline: [
    { date: 'June 17, 1972', event: 'Five men arrested breaking into DNC headquarters at Watergate Complex' },
    { date: 'June 23, 1972', event: '"Smoking gun" tape: Nixon orders CIA to obstruct FBI investigation' },
    { date: 'Sept 15, 1972', event: 'Grand jury indicts 7 for the break-in but misses wider conspiracy' },
    { date: 'Nov 7, 1972', event: 'Nixon wins landslide re-election (520-17 electoral votes)' },
    { date: 'Jan 8, 1973', event: 'Watergate trial begins. McCord writes letter to Judge Sirica revealing cover-up' },
    { date: 'Apr 30, 1973', event: 'Haldeman, Ehrlichman resign; Dean fired. Nixon: "There can be no whitewash at the White House"' },
    { date: 'May 17, 1973', event: 'Senate Watergate hearings begin — nationally televised' },
    { date: 'June 25, 1973', event: 'John Dean testifies: "There was a cancer growing on the presidency"' },
    { date: 'July 13, 1973', event: 'Alexander Butterfield reveals secret White House taping system' },
    { date: 'Oct 20, 1973', event: 'Saturday Night Massacre — Nixon fires Special Prosecutor Cox' },
    { date: 'Nov 17, 1973', event: 'Nixon: "I am not a crook" at press conference' },
    { date: 'Mar 1, 1974', event: 'Grand jury names Nixon as "unindicted co-conspirator"' },
    { date: 'July 24, 1974', event: 'Supreme Court unanimously rules (8-0) Nixon must surrender tapes' },
    { date: 'July 27-30, 1974', event: 'House Judiciary Committee passes 3 articles of impeachment' },
    { date: 'Aug 5, 1974', event: '"Smoking gun" tape released — remaining Republican support collapses' },
    { date: 'Aug 8, 1974', event: 'Nixon announces resignation in televised address' },
    { date: 'Aug 9, 1974', event: 'Nixon resigns. Gerald Ford becomes 38th President' },
    { date: 'Sept 8, 1974', event: 'Ford pardons Nixon "for all offenses he has committed or may have committed"' },
  ],
  legalOutcomes: [
    { defendant: 'Richard Nixon', charge: 'Named as unindicted co-conspirator; 3 articles of impeachment', outcome: 'Resigned, pardoned by Ford. Never faced trial.' },
    { defendant: 'H.R. Haldeman', charge: 'Conspiracy, obstruction of justice, perjury', outcome: 'Convicted — 18 months in federal prison' },
    { defendant: 'John Ehrlichman', charge: 'Conspiracy, obstruction of justice, perjury', outcome: 'Convicted — 18 months in federal prison' },
    { defendant: 'John Mitchell', charge: 'Conspiracy, obstruction of justice, perjury', outcome: 'Convicted — 19 months. First U.S. Attorney General imprisoned.' },
    { defendant: 'John Dean', charge: 'Conspiracy to obstruct justice', outcome: 'Pled guilty — 4 months. Key witness against Nixon.' },
    { defendant: 'G. Gordon Liddy', charge: 'Conspiracy, burglary, wiretapping', outcome: 'Convicted — 52 months (commuted from 20 years)' },
    { defendant: 'E. Howard Hunt', charge: 'Conspiracy, burglary, wiretapping', outcome: 'Convicted — 33 months' },
    { defendant: 'Charles Colson', charge: 'Obstruction of justice', outcome: 'Convicted — 7 months' },
    { defendant: 'Jeb Stuart Magruder', charge: 'Conspiracy, obstruction', outcome: 'Convicted — 7 months' },
    { defendant: 'Donald Segretti', charge: 'Campaign dirty tricks, violations of election law', outcome: 'Convicted — 4½ months' },
  ],
  charges: [
    { statute: '18 U.S.C. § 371 — Conspiracy to Defraud the United States', description: 'Conspiracy to obstruct the lawful functions of the DOJ, FBI, and CIA', count: 'Multiple defendants convicted' },
    { statute: '18 U.S.C. § 1503 — Obstruction of Justice', description: 'Directing the cover-up, paying hush money, coaching witnesses', count: 'Multiple defendants convicted' },
    { statute: '18 U.S.C. § 1621 — Perjury', description: 'Lying under oath to investigators and grand jury', count: 'Multiple defendants convicted' },
    { statute: '18 U.S.C. § 2511 — Illegal Wiretapping', description: 'Planting listening devices in DNC headquarters', count: 'Burglars and planners convicted' },
    { statute: '18 U.S.C. § 1951 — Extortion (Hobbs Act)', description: 'Using federal agencies to intimidate political opponents', count: 'Part of abuse of power charges' },
    { statute: '26 U.S.C. § 7212 — Corrupt Interference with IRS', description: 'Using IRS to target political enemies', count: 'Article II of impeachment' },
  ],
  sources: [
    { title: 'United States v. Nixon, 418 U.S. 683 (1974) — Supreme Court Opinion', url: 'https://supreme.justia.com/cases/federal/us/418/683/', date: '1974' },
    { title: 'Articles of Impeachment Against Richard M. Nixon', url: 'https://watergate.info/impeachment/articles-of-impeachment', date: '1974' },
    { title: 'Senate Watergate Committee Final Report', url: 'https://www.senate.gov/about/powers-procedures/investigations/watergate.htm', date: '1974' },
    { title: 'Nixon White House Tapes — National Archives', url: 'https://www.nixonlibrary.gov/white-house-tapes', date: '1971-1973' },
    { title: 'All the President\'s Men — Woodward & Bernstein', url: 'https://www.simonandschuster.com/books/All-the-Presidents-Men/Carl-Bernstein/9781416589501', date: '1974' },
    { title: 'The Final Days — Woodward & Bernstein', url: 'https://www.simonandschuster.com/books/The-Final-Days/Bob-Woodward/9780743274067', date: '1976' },
    { title: 'Washington Post Watergate Coverage Archive', url: 'https://www.washingtonpost.com/politics/watergate/', date: '1972-1974' },
    { title: 'Nixon Presidential Library: Watergate Files', url: 'https://www.nixonlibrary.gov/watergate', date: 'Various' },
  ],
};

export default function WatergatePage() {
  return (
    <div className="min-h-screen pt-20 lg:pt-24 pb-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <Link href="/investigations" className="inline-flex items-center gap-2 text-zinc-400 hover:text-blood-500 transition-colors mb-6 pt-4">
          <ArrowLeft className="w-4 h-4" />
          Back to Investigations
        </Link>

        {/* Header */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="border-2 border-blood-800/60 bg-black/80 p-6 lg:p-8 mb-8">
          <div className="flex items-center gap-3 mb-4">
            <span className="px-3 py-1 text-xs font-bold uppercase border border-red-500/30 bg-red-500/20 text-red-400">{investigation.severity}</span>
            <span className="px-3 py-1 text-xs font-bold uppercase border border-zinc-500/30 bg-zinc-500/20 text-zinc-400">{investigation.status}</span>
          </div>
          <h1 className="text-3xl lg:text-4xl font-black text-white uppercase tracking-wider mb-2">
            <GlitchText text={investigation.title} />
          </h1>
          <p className="text-lg text-blood-500 font-bold mb-4">{investigation.subtitle}</p>
          <p className="text-zinc-400 leading-relaxed">{investigation.summary}</p>
        </motion.div>

        {/* Scale */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="border-2 border-red-800/60 bg-red-950/20 p-6 mb-8">
          <h2 className="text-xl font-bold text-white uppercase tracking-wider mb-4 flex items-center gap-2">
            <Scale className="w-5 h-5 text-red-500" />
            The Numbers
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
            {Object.entries(investigation.scale).map(([key, val]) => (
              <div key={key} className="text-center p-4 border border-red-500/30 bg-red-950/30">
                <p className="text-2xl font-black text-red-500">{val}</p>
                <p className="text-xs text-zinc-400 capitalize">{key.replace(/([A-Z])/g, ' $1').trim()}</p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* The Break-In */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.12 }} className="glass-card p-6 mb-8">
          <h2 className="text-xl font-bold text-white uppercase tracking-wider mb-4 flex items-center gap-2">
            <Lock className="w-5 h-5 text-blood-500" />
            The Break-In: {investigation.theBreakIn.date}
          </h2>
          <p className="text-sm text-zinc-300 mb-4">{investigation.theBreakIn.description}</p>
          <div className="space-y-2">
            <p className="text-xs text-zinc-500 uppercase font-bold mb-2">The Burglars</p>
            {investigation.theBreakIn.burglars.map((b, idx) => (
              <div key={idx} className="p-2 bg-zinc-900/50 border border-zinc-800 text-sm text-zinc-300">{b}</div>
            ))}
          </div>
        </motion.div>

        {/* The Cover-Up */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.15 }} className="glass-card p-6 mb-8 border-l-4 border-blood-600">
          <h2 className="text-xl font-bold text-white uppercase tracking-wider mb-4">The Cover-Up</h2>
          <div className="space-y-3">
            {investigation.theCoverup.map((item, idx) => (
              <div key={idx} className="p-3 bg-red-950/20 border border-red-500/30">
                <p className="text-sm text-zinc-300">{item}</p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Saturday Night Massacre */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.18 }} className="border-2 border-red-800/60 bg-red-950/20 p-6 mb-8">
          <h2 className="text-xl font-bold text-white uppercase tracking-wider mb-4 flex items-center gap-2">
            <AlertTriangle className="w-5 h-5 text-red-500" />
            The Saturday Night Massacre — {investigation.saturdayNightMassacre.date}
          </h2>
          <p className="text-sm text-zinc-300 mb-4">{investigation.saturdayNightMassacre.description}</p>
          <div className="space-y-2">
            {investigation.saturdayNightMassacre.consequences.map((c, idx) => (
              <div key={idx} className="p-2 bg-red-950/30 border border-red-500/30 text-sm text-zinc-300">
                <span className="text-red-500 mr-2">→</span>{c}
              </div>
            ))}
          </div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-8">
            {/* Dirty Tricks */}
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="glass-card p-6">
              <h2 className="text-xl font-bold text-white uppercase tracking-wider mb-4 flex items-center gap-2">
                <Shield className="w-5 h-5 text-blood-500" />
                Nixon&apos;s &quot;Dirty Tricks&quot; Operations
              </h2>
              <div className="space-y-4">
                {investigation.dirtyTricks.map((trick, idx) => (
                  <div key={idx} className="p-4 bg-zinc-900/50 border border-zinc-800">
                    <p className="font-bold text-blood-400 text-sm">{trick.name}</p>
                    <p className="text-sm text-zinc-300 mt-2">{trick.description}</p>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Key Figures */}
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.25 }} className="glass-card p-6">
              <h2 className="text-xl font-bold text-white uppercase tracking-wider mb-4 flex items-center gap-2">
                <Users className="w-5 h-5 text-blood-500" />
                Key Figures
              </h2>
              <div className="space-y-3">
                {investigation.keyFigures.map((figure, idx) => (
                  <div key={idx} className="flex items-start justify-between p-3 bg-zinc-900/50 border border-zinc-800">
                    <div className="flex-1">
                      {figure.href ? (
                        <Link href={figure.href} className="font-bold text-blood-400 hover:text-blood-300 transition-colors">{figure.name}</Link>
                      ) : (
                        <span className="font-bold text-white">{figure.name}</span>
                      )}
                      <p className="text-sm text-zinc-400 mt-1">{figure.role}</p>
                    </div>
                    <span className="text-xs px-2 py-1 bg-zinc-800 text-zinc-400 border border-zinc-700 whitespace-nowrap ml-2">{figure.status}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Articles of Impeachment */}
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }} className="glass-card p-6">
              <h2 className="text-xl font-bold text-white uppercase tracking-wider mb-4 flex items-center gap-2">
                <FileText className="w-5 h-5 text-blood-500" />
                Articles of Impeachment
              </h2>
              <div className="space-y-4">
                {investigation.articlesOfImpeachment.map((article, idx) => (
                  <div key={idx} className="p-4 bg-zinc-900/50 border border-zinc-800">
                    <p className="font-bold text-blood-400 text-sm">{article.article}</p>
                    <p className="text-sm text-zinc-300 mt-2">{article.description}</p>
                    <p className="text-xs text-zinc-500 mt-2 italic">Specifics: {article.specifics}</p>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Charges */}
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.35 }} className="glass-card p-6">
              <h2 className="text-xl font-bold text-white uppercase tracking-wider mb-4 flex items-center gap-2">
                <Scale className="w-5 h-5 text-blood-500" />
                Criminal Charges &amp; Statutes
              </h2>
              <div className="space-y-3">
                {investigation.charges.map((charge, idx) => (
                  <div key={idx} className="p-4 bg-zinc-900/50 border border-zinc-800">
                    <p className="font-bold text-blood-400 text-sm font-mono">{charge.statute}</p>
                    <p className="text-sm text-zinc-300 mt-1">{charge.description}</p>
                    <p className="text-xs text-red-400 mt-1">{charge.count}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Timeline */}
            <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} className="glass-card p-6">
              <h3 className="text-lg font-bold text-white uppercase tracking-wider mb-4 flex items-center gap-2">
                <Calendar className="w-4 h-4 text-blood-500" />
                Timeline
              </h3>
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

            {/* Legal Outcomes */}
            <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.1 }} className="glass-card p-6">
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
            <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.2 }} className="glass-card p-6">
              <h3 className="text-lg font-bold text-white uppercase tracking-wider mb-4">Sources</h3>
              <div className="space-y-2">
                {investigation.sources.map((source, idx) => (
                  <a key={idx} href={source.url} target="_blank" rel="noopener noreferrer" className="flex items-start gap-2 p-2 text-sm text-zinc-400 hover:text-blood-400 hover:bg-zinc-900/50 transition-colors">
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
