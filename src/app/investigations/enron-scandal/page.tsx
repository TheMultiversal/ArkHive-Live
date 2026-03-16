'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowLeft, AlertTriangle, Users, Calendar, FileText, ExternalLink, Scale, ShieldAlert, Skull } from 'lucide-react';
import GlitchText from '@/components/effects/GlitchText';

const investigation = {
 title: 'Enron Scandal',
 subtitle: 'The $74 Billion Fraud: How Enron, Arthur Andersen, and Wall Street Built the Biggest Corporate Lie in History',
 severity: 'critical',
 status: 'CONVICTIONS OBTAINED',
 summary: 'Enron Corporation, once the seventh-largest company in America with $101 billion in reported revenues, collapsed in December 2001 in the largest corporate bankruptcy in US history at the time. The company had used a labyrinth of thousands of special purpose entities (SPEs) to hide billions in debt and inflate profits. CEO Jeffrey Skilling and CFO Andrew Fastow created off-the-books partnerships that enriched executives while concealing catastrophic losses. Arthur Andersen, one of the "Big Five"accounting firms, shredded tons of Enron documents and was convicted of obstruction of justice, destroying the 89-year-old firm. When the fraud was exposed, $74 billion in shareholder value evaporated, 20,000 employees lost their jobs and retirement savings, and the energy markets Enron had manipulated were thrown into chaos. Chairman Kenneth Lay was convicted but died before sentencing; Skilling served 12 years in federal prison.',
 keyFigures: [
 { name: 'Kenneth Lay', role: 'Enron Chairman and CEO who oversaw the fraud and promoted the company while knowing of hidden losses', href: '/entities/individuals/kenneth-lay', status: 'Convicted, Died 2006' },
 { name: 'Jeffrey Skilling', role: 'Enron CEO who designed the mark-to-market scheme and SPE fraud; sentenced to 24 years (reduced to 14)', href: '/entities/individuals/jeffrey-skilling', status: 'Released 2019' },
 { name: 'Andrew Fastow', role: 'Enron CFO who created thousands of off-books partnerships enriching himself with $45M while hiding $1B+ in debt', href: '/entities/individuals/andrew-fastow', status: 'Cooperated - 6 years' },
 { name: 'Rebecca Mark', role: 'CEO of Enron International who oversaw disastrous Dabhol Power project and overseas expansion', href: '/entities/individuals/rebecca-mark', status: 'Left before collapse' },
 { name: 'Sherron Watkins', role: 'Enron VP who warned Kenneth Lay about accounting fraud in August 2001; whistleblower', href: '/entities/individuals/sherron-watkins', status: 'Whistleblower' },
 { name: 'Arthur Andersen LLP', role: 'Big Five accounting firm that audited Enron; convicted of obstruction for shredding documents', href: '/entities/corporations/arthur-andersen', status: 'Dissolved' },
 { name: 'David Duncan', role: 'Arthur Andersen lead partner for Enron who ordered document shredding; cooperated with prosecution', href: '/entities/individuals/david-duncan', status: 'Cooperated' },
 { name: 'Ben Glisan', role: 'Enron Treasurer who pleaded guilty and became first Enron executive to go to prison', href: '/entities/individuals/ben-glisan', status: 'Served 5 years' },
 { name: 'Cliff Baxter', role: 'Former Enron Vice Chairman found dead of apparent suicide before testifying', href: '/entities/individuals/cliff-baxter', status: 'Deceased 2002' },
 { name: 'Lou Pai', role: 'Enron executive who sold $270M in stock before the collapse; never charged', href: '/entities/individuals/lou-pai', status: 'Never charged' },
 { name: 'Bethany McLean', role: 'Fortune reporter who first publicly questioned Enron\'s financials in March 2001 article "Is Enron Overpriced?"', href: '/entities/individuals/bethany-mclean', status: 'Journalist' },
 ],
 timeline: [
 { date: '1985-07-01', event: 'Enron formed from merger of Houston Natural Gas and InterNorth; Kenneth Lay becomes CEO' },
 { date: '1990-01-01', event: 'Jeffrey Skilling joins Enron; introduces mark-to-market accounting for energy trading' },
 { date: '1993-01-01', event: 'SEC approves Enron\'s use of mark-to-market accounting for energy derivatives, allowing future profit booking' },
 { date: '1999-01-01', event: 'Andrew Fastow creates LJM and LJM2 partnerships to move Enron losses off the balance sheet' },
 { date: '1999-11-01', event: 'Enron launches EnronOnline, the largest e-commerce site in the world at the time' },
 { date: '2000-08-23', event: 'Enron stock reaches all-time high of $90.75 per share; company valued at $70 billion' },
 { date: '2000-12-31', event: 'Enron reports $101 billion in"revenues"- much later revealed to be largely fabricated trading volumes' },
 { date: '2001-02-12', event: 'Jeffrey Skilling takes over as CEO from Kenneth Lay' },
 { date: '2001-03-05', event: 'Bethany McLean publishes "Is Enron Overpriced?"in Fortune, first major public questioning' },
 { date: '2001-08-14', event: 'Skilling abruptly resigns as CEO after only 6 months, citing"personal reasons"' },
 { date: '2001-08-15', event: 'Sherron Watkins sends anonymous memo to Kenneth Lay warning of accounting fraud' },
 { date: '2001-10-16', event: 'Enron announces $618 million quarterly loss and $1.2 billion reduction in shareholder equity' },
 { date: '2001-10-22', event: 'SEC opens formal investigation into Enron\'s financial dealings' },
 { date: '2001-10-23', event: 'Arthur Andersen begins massive document shredding operation at Enron offices' },
 { date: '2001-11-08', event: 'Enron restates earnings going back to 1997; $586 million in profits erased' },
 { date: '2001-12-02', event: 'Enron files for Chapter 11 bankruptcy, largest in US history at the time' },
 { date: '2002-01-25', event: 'Former Vice Chairman Cliff Baxter found dead of apparent suicide in his car' },
 { date: '2002-06-15', event: 'Arthur Andersen convicted of obstruction of justice; 85,000 employees lose jobs as firm collapses' },
 { date: '2006-05-25', event: 'Kenneth Lay and Jeffrey Skilling convicted on multiple counts of fraud and conspiracy' },
 ],
 legalOutcomes: [
 { defendant: 'Kenneth Lay', charge: 'Securities fraud, wire fraud, conspiracy (10 counts)', outcome: 'Convicted, died before sentencing; convictions vacated' },
 { defendant: 'Jeffrey Skilling', charge: 'Securities fraud, conspiracy, insider trading (19 counts)', outcome: 'Convicted - 24 years (reduced to 14); released 2019' },
 { defendant: 'Andrew Fastow', charge: 'Fraud, money laundering, conspiracy (98 counts)', outcome: 'Pleaded guilty - 10 years (reduced to 6 for cooperation)' },
 { defendant: 'Arthur Andersen LLP', charge: 'Obstruction of justice (document shredding)', outcome: 'Convicted 2002; reversed by Supreme Court 2005; firm already dissolved' },
 { defendant: 'Ben Glisan', charge: 'Fraud and conspiracy', outcome: 'Pleaded guilty - 5 years' },
 { defendant: 'David Duncan', charge: 'Obstruction of justice (ordered Andersen shredding)', outcome: 'Pleaded guilty; cooperated with prosecution' },
 { defendant: 'Richard Causey', charge: 'Chief Accounting Officer, securities fraud', outcome: 'Pleaded guilty - 7 years (reduced to 5.5)' },
 { defendant: 'Lou Pai', charge: 'N/A - sold $270M in stock before collapse', outcome: 'Never charged despite massive insider selling' },
 ],
 charges: [
 { statute: '15 U.S.C. § 78j(b) / Rule 10b-5: Securities Fraud', description: 'Fraudulent misrepresentation of Enron\'s financial condition to investors through materially false statements', count: 'Multiple counts, Lay, Skilling, Fastow' },
 { statute: '18 U.S.C. § 1343: Wire Fraud', description: 'Use of interstate communications to execute scheme to defraud investors of billions', count: 'Multiple counts, all major defendants' },
 { statute: '18 U.S.C. § 371: Conspiracy to Commit Fraud', description: 'Coordinated agreement among executives to falsify financial statements and hide losses', count: 'Primary charge against all defendants' },
 { statute: '18 U.S.C. § 1512: Obstruction of Justice', description: 'Arthur Andersen\'s systematic destruction of Enron audit documents during SEC investigation', count: 'Arthur Andersen convicted (later reversed)' },
 { statute: '18 U.S.C. § 1957: Money Laundering', description: 'Laundering proceeds of fraud through off-books partnerships enriching executives', count: 'Fastow - 98 original counts' },
 { statute: '15 U.S.C. § 78ff, Insider Trading', description: 'Executives selling stock while in possession of material non-public information about impending collapse', count: 'Skilling, Lay, and others' },
 { statute: '18 U.S.C. § 1001: False Statements', description: 'False certifications of financial statements and misleading communications to SEC', count: 'Multiple executives' },
 { statute: 'Sarbanes-Oxley Act (SOX): Response', description: 'Enron scandal directly prompted passage of landmark corporate accountability legislation in 2002', count: 'Legislative response' },
 ],
 coverup: [
 'Enron used over 3,000 special purpose entities (SPEs) to move losses off its balance sheet while reporting phantom profits to investors',
 'Arthur Andersen shredded tons of Enron audit documents after learning of the SEC investigation, destroying critical evidence',
 'CFO Fastow personally enriched himself by $45 million through the off-books partnerships he created to hide Enron\'s losses',
 'Enron executives sold over $1 billion in personal stock while telling employees and investors the company was financially sound',
 'Employees were locked out of selling their 401(k) Enron stock during a"blackout period"while executives were selling millions',
 'Wall Street analysts maintained "buy" ratings on Enron stock even as evidence of fraud emerged, protecting their banking fees',
 'Enron\'s board of directors waived their own ethics code to allow Fastow\'s conflicted partnerships, twice',
 'Kenneth Lay held an all-employee meeting in September 2001 telling workers the stock was a "bargain" while he was selling his own shares',
 'The company manipulated California energy markets during the 2000-2001 crisis, creating artificial shortages and blackouts for profit',
 ],
 sources: [
 { title: 'SEC Enforcement Action Against Enron', url: 'https://www.sec.gov/spotlight/enron.htm', date: '2002-01-01' },
 { title: 'The Smartest Guys in the Room, Enron Documentary', url: 'https://www.pbs.org/independentlens/films/enron-the-smartest-guys-in-the-room/', date: '2005-04-22' },
 { title: 'Senate Committee on Governmental Affairs, Enron Investigation', url: 'https://www.govinfo.gov/content/pkg/CPRT-107SPRT80393/html/CPRT-107SPRT80393.htm', date: '2002-12-01' },
 { title: 'Is Enron Overpriced?: Bethany McLean, Fortune', url: 'https://fortune.com/2001/03/05/is-enron-overpriced/', date: '2001-03-05' },
 { title: 'Arthur Andersen Conviction, Supreme Court Reversal', url: 'https://www.supremecourt.gov/opinions/04pdf/04-368.pdf', date: '2005-05-31' },
 { title: 'Sherron Watkins Whistleblower Testimony', url: 'https://www.c-span.org/video/?168627-1/enron-hearing', date: '2002-02-14' },
 { title: 'Sarbanes-Oxley Act, Legislative Response to Enron', url: 'https://www.congress.gov/bill/107th-congress/house-bill/3763', date: '2002-07-30' },
 { title: 'Skilling v. United States, Supreme Court Narrows Fraud Standard', url: 'https://www.supremecourt.gov/opinions/09pdf/08-1394.pdf', date: '2010-06-24' },
 ],
};

export default function EnronScandal() {
 return (
 <div className="min-h-screen pt-20 lg:pt-24 pb-16">
 <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
 <Link href="/investigations"className="inline-flex items-center gap-2 text-zinc-400 hover:text-blood-500 transition-colors mb-6 pt-4"><ArrowLeft className="w-4 h-4"/>Back to Investigations</Link>
 <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="border-2 border-blood-800/60 bg-[rgba(0,6,20,0.90)] p-6 lg:p-8 mb-8">
 <div className="flex items-center gap-3 mb-4"><span className="px-3 py-1 text-xs font-bold uppercase border border-blood-800 bg-blood-950 text-blood-400">{investigation.severity}</span><span className="px-3 py-1 text-xs font-bold uppercase border border-zinc-700 bg-zinc-900 text-zinc-400">{investigation.status}</span></div>
 <h1 className="text-3xl lg:text-4xl font-black glass-text uppercase tracking-wider mb-2"><GlitchText text={investigation.title} /></h1>
 <p className="text-lg text-blood-500 font-bold mb-4">{investigation.subtitle}</p>
 <p className="text-zinc-400 leading-relaxed">{investigation.summary}</p>
 </motion.div>
 <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.15 }} className="glass-card p-6 mb-8 border-l-4 border-blood-600">
 <h2 className="text-xl font-bold glass-text uppercase tracking-wider mb-4 flex items-center gap-2"><ShieldAlert className="w-5 h-5 text-blood-500"/>The Cover-Up</h2>
 <div className="space-y-3">{investigation.coverup.map((item, idx) => (<div key={idx} className="p-3 bg-blood-950 border border-blood-800"><p className="text-sm text-zinc-300">{item}</p></div>))}</div>
 </motion.div>
 <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
 <div className="lg:col-span-2 space-y-8">
 <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }} className="glass-card p-6">
 <h2 className="text-xl font-bold glass-text uppercase tracking-wider mb-4 flex items-center gap-2"><Users className="w-5 h-5 text-blood-500"/>Key Figures</h2>
 <div className="space-y-3">{investigation.keyFigures.map((figure, idx) => (<div key={idx} className="flex items-start justify-between p-3 bg-[#000a1c] border border-[rgba(80,180,255,0.15)]"><div className="flex-1">{figure.href ? (<Link href={figure.href} className="font-bold text-blood-400 hover:text-blood-300 transition-colors">{figure.name}</Link>) : (<span className="font-bold glass-text">{figure.name}</span>)}<p className="text-sm text-zinc-400 mt-1">{figure.role}</p></div><span className="text-xs px-2 py-1 bg-[#000c20] text-zinc-400 border border-[rgba(60,160,255,0.18)] whitespace-nowrap ml-2">{figure.status}</span></div>))}</div>
 </motion.div>
 <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }} className="glass-card p-6">
 <h2 className="text-xl font-bold glass-text uppercase tracking-wider mb-4 flex items-center gap-2"><Scale className="w-5 h-5 text-blood-500"/>Applicable Charges &amp; Statutes</h2>
 <div className="space-y-3">{investigation.charges.map((charge, idx) => (<div key={idx} className="p-4 bg-[#000a1c] border border-[rgba(80,180,255,0.15)]"><p className="font-bold text-blood-400 text-sm font-mono">{charge.statute}</p><p className="text-sm text-zinc-300 mt-1">{charge.description}</p><p className="text-xs text-blood-400 mt-1">{charge.count}</p></div>))}</div>
 </motion.div>
 </div>
 <div className="space-y-6">
 <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} className="glass-card p-6">
 <h3 className="text-lg font-bold glass-text uppercase tracking-wider mb-4 flex items-center gap-2"><Calendar className="w-4 h-4 text-blood-500"/>Timeline</h3>
 <div className="space-y-4">{investigation.timeline.map((item, idx) => (<div key={idx} className="relative pl-4 border-l-2 border-[rgba(80,180,255,0.15)]"><div className="absolute -left-[5px] top-0 w-2 h-2 bg-blood-500"/><p className="text-xs text-blood-500 font-mono">{item.date}</p><p className="text-sm text-zinc-300">{item.event}</p></div>))}</div>
 </motion.div>
 <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.1 }} className="glass-card p-6">
 <h3 className="text-lg font-bold glass-text uppercase tracking-wider mb-4 flex items-center gap-2"><Scale className="w-5 h-5 text-blood-500"/>Legal Outcomes</h3>
 <div className="space-y-3">{investigation.legalOutcomes.map((item, idx) => (<div key={idx} className="p-3 bg-[#000a1c] border border-[rgba(80,180,255,0.15)]"><p className="font-bold glass-text text-sm">{item.defendant}</p><p className="text-xs text-zinc-400 mt-1">{item.charge}</p><p className="text-xs text-blood-400 mt-1">{item.outcome}</p></div>))}</div>
 </motion.div>
 <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.2 }} className="glass-card p-6">
 <h3 className="text-lg font-bold glass-text uppercase tracking-wider mb-4">Sources</h3>
 <div className="space-y-2">{investigation.sources.map((source, idx) => (<a key={idx} href={source.url} target="_blank"rel="noopener noreferrer"className="flex items-start gap-2 p-2 text-sm text-zinc-400 hover:text-blood-400 hover:bg-[#000a1c] transition-colors"><ExternalLink className="w-4 h-4 mt-0.5 flex-shrink-0"/><div><span>{source.title}</span><span className="text-zinc-600 ml-2">({source.date})</span></div></a>))}</div>
 </motion.div>
 </div>
 </div>
 </div>
 </div>
 );
}
