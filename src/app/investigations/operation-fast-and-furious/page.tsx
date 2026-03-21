'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowLeft, AlertTriangle, Users, Calendar, FileText, ExternalLink, Scale, ShieldAlert, Skull } from 'lucide-react';
import GlitchText from '@/components/effects/GlitchText';

const investigation = {
 title: 'Operation Fast and Furious',
 subtitle: 'ATF Gunwalking to Mexican Cartels, A Border Patrol Agent Killed With Government-Supplied Weapons',
 severity: 'critical',
 status: 'CONFIRMED, CONGRESSIONAL INVESTIGATION',
 summary: 'Operation Fast and Furious (2009-2011) was a Bureau of Alcohol, Tobacco, Firearms and Explosives (ATF) operation that deliberately allowed illegal firearms sales to proceed, with the stated goal of tracking weapons to Mexican drug cartel leaders. Approximately 2,000 firearms were allowed to "walk" across the US-Mexico border. The operation came to light after US Border Patrol Agent Brian Terry was murdered on December 14, 2010, and two of the weapons found at the scene were traced to Fast and Furious. The subsequent investigation revealed systemic failures, obstruction of Congress, and an Attorney General held in contempt. Hundreds of the weapons have been linked to crimes on both sides of the border, with an estimated 300+ deaths in Mexico attributed to Fast and Furious firearms.',
 keyFigures: [
 { name: 'Eric Holder', role: 'Attorney General, held in contempt of Congress for withholding documents', href: '/entities/individuals/eric-holder', status: 'Former AG' },
 { name: 'Lanny Breuer', role: 'Assistant AG, Criminal Division, knew about gunwalking, failed to act', href: '/entities/individuals/lanny-breuer', status: 'Resigned 2013' },
 { name: 'Kenneth Melson', role: 'Acting ATF Director, reassigned after scandal', href: '/entities/individuals/kenneth-melson', status: 'Reassigned' },
 { name: 'William Newell', role: 'ATF Phoenix Field Division Special Agent in Charge', href: '/entities/individuals/william-newell', status: 'Reassigned' },
 { name: 'David Voth', role: 'ATF Group Supervisor, Phoenix Group VII, directly oversaw gunwalking', href: '/entities/individuals/david-voth', status: 'Reassigned' },
 { name: 'Hope MacAllister', role: 'Lead ATF case agent for Fast and Furious', href: '/entities/individuals/hope-macallister', status: 'Unknown' },
 { name: 'John Dodson', role: 'ATF Special Agent and whistleblower who exposed the operation', href: '/entities/individuals/john-dodson', status: 'Whistleblower' },
 { name: 'Brian Terry', role: 'US Border Patrol Agent murdered with Fast and Furious weapons', href: '/entities/individuals/brian-terry', status: 'Killed Dec 14, 2010' },
 { name: 'Jaime Zapata', role: 'ICE Agent murdered in Mexico, weapons linked to similar operations', href: '/entities/individuals/jaime-zapata', status: 'Killed Feb 15, 2011' },
 { name: 'Darrell Issa', role: 'House Oversight Committee Chairman who led congressional investigation', href: '/entities/individuals/darrell-issa', status: 'Former Congressman' },
 { name: 'Chuck Grassley', role: 'Senate Judiciary Committee ranking member who pressed for accountability', href: '/entities/individuals/chuck-grassley', status: 'Active Senator' },
 ],
 timeline: [
 { date: 'October 2009', event: 'Operation Fast and Furious begins under ATF Phoenix Field Division' },
 { date: 'November 2009', event: 'ATF agents begin documenting concerns about letting weapons walk to Mexico' },
 { date: 'January 2010', event: 'Straw purchasers buy hundreds of firearms with ATF surveillance but no interdiction' },
 { date: 'March 2010', event: 'ATF agent John Dodson raises concerns internally about gunwalking, is told to stand down' },
 { date: 'June 2010', event: 'ATF reports 1,608 firearms purchased by suspected straw buyers, most unrecovered' },
 { date: 'September 2010', event: 'Mexican authorities report spike in cartel violence involving US-traced firearms' },
 { date: 'December 14, 2010', event: 'Border Patrol Agent Brian Terry killed in Arizona, two Fast and Furious weapons found at scene' },
 { date: 'January 2011', event: 'ATF whistleblowers contact Senator Grassley about gunwalking operations' },
 { date: 'February 4, 2011', event: 'DOJ sends letter to Congress denying ATF knowingly allowed gunwalking (later retracted)' },
 { date: 'February 15, 2011', event: 'ICE Agent Jaime Zapata murdered in Mexico, weapons linked to similar operations' },
 { date: 'March 2011', event: 'CBS News reporter Sharyl Attkisson breaks the Fast and Furious story nationally' },
 { date: 'June 2011', event: 'House Oversight Committee begins formal investigation under Chairman Darrell Issa' },
 { date: 'December 2, 2011', event: 'DOJ formally withdraws February 4 letter, admits it contained inaccuracies' },
 { date: 'June 20, 2012', event: 'President Obama asserts executive privilege over Fast and Furious documents' },
 { date: 'June 28, 2012', event: 'House votes 255-67 to hold Attorney General Eric Holder in contempt of Congress' },
 { date: 'September 2012', event: 'DOJ Inspector General report finds 14 officials responsible for failures' },
 { date: 'January 2016', event: 'Federal judge rules DOJ must release Fast and Furious documents withheld under executive privilege' },
 { date: '2020', event: 'Fast and Furious weapons continue to surface at crime scenes in Mexico' },
 ],
 legalOutcomes: [
 { defendant: 'Eric Holder', charge: 'Contempt of Congress', outcome: 'Held in contempt, no criminal prosecution by DOJ' },
 { defendant: 'Manuel Osorio-Arellanes', charge: 'Murder of Brian Terry', outcome: 'Convicted, life in prison' },
 { defendant: 'Ivan Soto-Barraza', charge: 'Murder of Brian Terry', outcome: 'Convicted, life in prison' },
 { defendant: 'Jesus Rosario Favela-Astorga', charge: 'Murder of Brian Terry', outcome: 'Convicted, sentenced to 27 years' },
 { defendant: 'Heraclio Osorio-Arellanes', charge: 'Murder of Brian Terry', outcome: 'Extradited from Mexico, convicted' },
 { defendant: 'ATF Officials', charge: 'Allowing firearms to walk to cartels', outcome: 'Reassigned but not criminally charged' },
 { defendant: 'Jaime Avila Jr.', charge: 'Straw purchasing firearms (including gun used to kill Terry)', outcome: 'Convicted - 57 months prison' },
 { defendant: 'DOJ Officials', charge: 'Providing false information to Congress', outcome: 'No criminal charges filed' },
 ],
 charges: [
 { statute: '18 U.S.C. § 922(a)(6): Straw Purchasing', description: 'ATF knowingly facilitated over 2,000 illegal straw purchases of firearms', count: '2,000+ firearms walked' },
 { statute: '18 U.S.C. § 1001: False Statements', description: 'DOJ provided false information to Congress in February 4, 2011 letter', count: 'Multiple false statements documented' },
 { statute: '18 U.S.C. § 1505: Obstruction of Congressional Investigation', description: 'Withholding of documents, executive privilege assertion to block investigation', count: 'Systematic obstruction over 2+ years' },
 { statute: '2 U.S.C. § 192: Contempt of Congress', description: 'Attorney General held in contempt for refusing to produce subpoenaed documents', count: '1 contempt citation (Holder)' },
 { statute: '18 U.S.C. § 2: Aiding and Abetting', description: 'ATF personnel aided illegal firearms trafficking by deliberately allowing sales', count: 'Hundreds of transactions facilitated' },
 { statute: '22 U.S.C. § 2778: Arms Export Control Act', description: 'Illegal export of weapons to Mexico without proper authorization', count: '2,000+ firearms exported to Mexico' },
 { statute: '18 U.S.C. § 371: Conspiracy', description: 'Multi-agency conspiracy to facilitate illegal firearms trafficking', count: 'ATF, DOJ, and other agencies involved' },
 { statute: '18 U.S.C. § 1111: Murder (Accessory)', description: 'Government-supplied weapons used to kill Agent Brian Terry and hundreds of Mexican nationals', count: '300+ estimated deaths linked to walked firearms' },
 ],
 coverup: [
 'DOJ sent a deliberately false letter to Congress on February 4, 2011, denying ATF knowingly allowed gunwalking, it took 10 months to retract',
 'ATF whistleblower John Dodson faced retaliation and ostracism after exposing the operation to Congress and media',
 'President Obama asserted executive privilege over Fast and Furious documents (the first such assertion of his presidency) to prevent disclosure',
 'Attorney General Holder claimed he first learned about Fast and Furious from media reports in early 2011, contradicting internal memos showing earlier briefings',
 'ATF leadership attempted to blame gun dealers who had actually reported suspicious purchases and were told by ATF to proceed with sales',
 'DOJ Inspector General found 14 officials responsible but recommended only administrative action, not criminal prosecution',
 'Internal emails showed ATF officials discussing using gun violence statistics inflated by walked weapons to push for stricter gun regulations',
 'The death of Agent Brian Terry was initially kept separate from Fast and Furious reporting, ATF did not immediately disclose weapons at scene were from the operation',
 'Mexican government was not informed about the operation, weapons were tracked only through serial numbers after recovery at crime scenes',
 ],
 sources: [
 { title: 'DOJ Inspector General Report on Fast and Furious', url: 'https://oig.justice.gov/reports/2012/s1209.pdf', date: 'September 2012' },
 { title: 'House Oversight Committee, Fast and Furious Investigation', url: 'https://oversight.house.gov/investigation/fast-and-furious/', date: '2011-2012' },
 { title: 'Fortune, The Truth About the Fast and Furious Scandal', url: 'https://fortune.com/2012/06/27/the-truth-about-the-fast-and-furious-scandal/', date: 'June 27, 2012' },
 { title: 'CBS News, Sharyl Attkisson Fast and Furious Coverage', url: 'https://www.cbsnews.com/news/agent-brian-terrys-family-seeks-answers/', date: '2011' },
 { title: 'Senate Judiciary Committee, Grassley Fast and Furious Documents', url: 'https://www.grassley.senate.gov/issues-legislation/fast-furious', date: '2011-2016' },
 { title: 'Congressional Research Service, ATF Gunwalking Programs', url: 'https://sgp.fas.org/crs/misc/R42036.pdf', date: '2013' },
 { title: 'John Dodson, The Unarmed Truth (Whistleblower Memoir)', url: 'https://www.simonandschuster.com/books/The-Unarmed-Truth/John-Dodson/9781476727554', date: '2014' },
 { title: 'Washington Post, Holder Held in Contempt', url: 'https://www.washingtonpost.com/politics/holder-held-in-contempt-of-congress/2012/06/28/gJQAMgWm8V_story.html', date: 'June 28, 2012' },
 ],
};

export default function FastAndFuriousPage() {
 return (
 <div className="min-h-screen pt-20 lg:pt-24 pb-16">
 <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
 <Link href="/investigations"className="inline-flex items-center gap-2 text-zinc-400 hover:text-white transition-colors mb-6 pt-4"><ArrowLeft className="w-4 h-4"/>Back to Investigations</Link>
 <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="border-2 border-zinc-800/60 bg-[rgba(0,6,20,0.90)] p-6 lg:p-8 mb-8">
 <div className="flex items-center gap-3 mb-4"><span className="px-3 py-1 text-xs font-bold uppercase border border-zinc-800 bg-zinc-900 text-zinc-400">{investigation.severity}</span><span className="px-3 py-1 text-xs font-bold uppercase border border-zinc-700 bg-zinc-900 text-zinc-400">{investigation.status}</span></div>
 <h1 className="text-3xl lg:text-4xl font-black glass-text uppercase tracking-wider mb-2"><GlitchText text={investigation.title} /></h1>
 <p className="text-lg text-zinc-300 font-bold mb-4">{investigation.subtitle}</p>
 <p className="text-zinc-400 leading-relaxed">{investigation.summary}</p>
 </motion.div>
 <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.15 }} className="glass-card p-6 mb-8 border-l-4 border-zinc-700">
 <h2 className="text-xl font-bold glass-text uppercase tracking-wider mb-4 flex items-center gap-2"><ShieldAlert className="w-5 h-5 text-zinc-300"/>The Cover-Up</h2>
 <div className="space-y-3">{investigation.coverup.map((item, idx) => (<div key={idx} className="p-3 bg-zinc-900 border border-zinc-800"><p className="text-sm text-zinc-300">{item}</p></div>))}</div>
 </motion.div>
 <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
 <div className="lg:col-span-2 space-y-8">
 <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }} className="glass-card p-6">
 <h2 className="text-xl font-bold glass-text uppercase tracking-wider mb-4 flex items-center gap-2"><Users className="w-5 h-5 text-zinc-300"/>Key Figures</h2>
 <div className="space-y-3">{investigation.keyFigures.map((figure, idx) => (<div key={idx} className="flex items-start justify-between p-3 bg-[#0a0a0a] border border-[rgba(255,255,255,0.15)]"><div className="flex-1">{figure.href ? (<Link href={figure.href} className="font-bold text-zinc-400 hover:text-white transition-colors">{figure.name}</Link>) : (<span className="font-bold glass-text">{figure.name}</span>)}<p className="text-sm text-zinc-400 mt-1">{figure.role}</p></div><span className="text-xs px-2 py-1 bg-[#0d0d0d] text-zinc-400 border border-[rgba(255,255,255,0.18)] whitespace-nowrap ml-2">{figure.status}</span></div>))}</div>
 </motion.div>
 <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }} className="glass-card p-6">
 <h2 className="text-xl font-bold glass-text uppercase tracking-wider mb-4 flex items-center gap-2"><Scale className="w-5 h-5 text-zinc-300"/>Applicable Charges &amp; Statutes</h2>
 <div className="space-y-3">{investigation.charges.map((charge, idx) => (<div key={idx} className="p-4 bg-[#0a0a0a] border border-[rgba(255,255,255,0.15)]"><p className="font-bold text-zinc-400 text-sm font-mono">{charge.statute}</p><p className="text-sm text-zinc-300 mt-1">{charge.description}</p><p className="text-xs text-zinc-400 mt-1">{charge.count}</p></div>))}</div>
 </motion.div>
 </div>
 <div className="space-y-6">
 <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} className="glass-card p-6">
 <h3 className="text-lg font-bold glass-text uppercase tracking-wider mb-4 flex items-center gap-2"><Calendar className="w-4 h-4 text-zinc-300"/>Timeline</h3>
 <div className="space-y-4">{investigation.timeline.map((item, idx) => (<div key={idx} className="relative pl-4 border-l-2 border-[rgba(255,255,255,0.15)]"><div className="absolute -left-[5px] top-0 w-2 h-2 bg-zinc-600"/><p className="text-xs text-zinc-300 font-mono">{item.date}</p><p className="text-sm text-zinc-300">{item.event}</p></div>))}</div>
 </motion.div>
 <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.1 }} className="glass-card p-6">
 <h3 className="text-lg font-bold glass-text uppercase tracking-wider mb-4 flex items-center gap-2"><Scale className="w-5 h-5 text-zinc-300"/>Legal Outcomes</h3>
 <div className="space-y-3">{investigation.legalOutcomes.map((item, idx) => (<div key={idx} className="p-3 bg-[#0a0a0a] border border-[rgba(255,255,255,0.15)]"><p className="font-bold glass-text text-sm">{item.defendant}</p><p className="text-xs text-zinc-400 mt-1">{item.charge}</p><p className="text-xs text-zinc-400 mt-1">{item.outcome}</p></div>))}</div>
 </motion.div>
 <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.2 }} className="glass-card p-6">
 <h3 className="text-lg font-bold glass-text uppercase tracking-wider mb-4">Sources</h3>
 <div className="space-y-2">{investigation.sources.map((source, idx) => (<a key={idx} href={source.url} target="_blank"rel="noopener noreferrer"className="flex items-start gap-2 p-2 text-sm text-zinc-400 hover:text-white hover:bg-[#0a0a0a] transition-colors"><ExternalLink className="w-4 h-4 mt-0.5 flex-shrink-0"/><div><span>{source.title}</span><span className="text-zinc-600 ml-2">({source.date})</span></div></a>))}</div>
 </motion.div>
 </div>
 </div>
 </div>
 </div>
 );
}
