'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowLeft, AlertTriangle, Users, Calendar, FileText, ExternalLink, Scale, ShieldAlert, Skull } from 'lucide-react';
import GlitchText from '@/components/effects/GlitchText';

const investigation = {
 title: 'Leonard Leo & The Dark Money Courts',
 subtitle: 'How One Man Captured the Supreme Court with $1.6 Billion in Dark Money',
 severity: 'critical',
 status: 'ONGOING',
 summary: 'Leonard Leo, co-chairman of the Federalist Society, has orchestrated the most successful judicial capture operation in American history. Through a web of dark money organizations funded by anonymous billionaire donors, Leo engineered the appointments of at least six conservative Supreme Court justices and reshaped the entire federal judiciary. In 2022, it was revealed that electronics magnate Barre Seid donated $1.6 billion to Leo\'s network in a single transaction, the largest known political advocacy donation in US history. Leo\'s network has dismantled abortion rights, gutted environmental regulations, expanded gun rights, and undermined voting protections, all through lifetime-appointed judges who answer to no electorate.',
 keyFigures: [
 { name: 'Leonard Leo', role: 'Co-chairman of the Federalist Society, architect of conservative judicial takeover', href: '/entities/individuals/leonard-leo', status: 'Active' },
 { name: 'Barre Seid', role: 'Electronics magnate who donated $1.6 billion to Leo\'s Marble Freedom Trust', href: '/entities/individuals/barre-seid', status: 'Active' },
 { name: 'Clarence Thomas', role: 'Supreme Court Justice with extensive undisclosed ties to Leo\'s donor network', href: '/entities/individuals/clarence-thomas', status: 'Active' },
 { name: 'Harlan Crow', role: 'Billionaire donor who lavished gifts on Justice Thomas while funding Leo\'s network', href: '/entities/individuals/harlan-crow', status: 'Active' },
 { name: 'Don McGahn', role: 'Trump White House Counsel who implemented Leo\'s judicial selection lists', href: '/entities/individuals/don-mcgahn', status: 'Active' },
 { name: 'Mitch McConnell', role: 'Senate leader who blocked Merrick Garland and fast-tracked Leo\'s picks', href: '/entities/individuals/mitch-mcconnell', status: 'Active' },
 { name: 'Brett Kavanaugh', role: 'Supreme Court Justice, Leo personally managed his confirmation campaign', href: '/entities/individuals/brett-kavanaugh', status: 'Active' },
 { name: 'Neil Gorsuch', role: 'Supreme Court Justice nominated from Leo\'s Federalist Society shortlist', href: '/entities/individuals/neil-gorsuch', status: 'Active' },
 { name: 'Amy Coney Barrett', role: 'Supreme Court Justice, fast-tracked nomination managed by Leo\'s network', href: '/entities/individuals/amy-coney-barrett', status: 'Active' },
 { name: 'Samuel Alito', role: 'Supreme Court Justice, author of Dobbs decision, close personal ties to Leo', href: '/entities/individuals/samuel-alito', status: 'Active' },
 { name: 'Ginni Thomas', role: 'Conservative activist, wife of Clarence Thomas, connected to Leo\'s network', href: '/entities/individuals/ginni-thomas', status: 'Active' },
 ],
 timeline: [
 { date: '1982', event: 'Federalist Society founded at Yale, Harvard, and University of Chicago law schools with funding from conservative foundations' },
 { date: '1991', event: 'Leo helps manage Clarence Thomas confirmation amid Anita Hill sexual harassment testimony' },
 { date: '2000', event: 'Leo becomes executive vice president of the Federalist Society, begins building donor network' },
 { date: '2005', event: 'Leo advises George W. Bush on Supreme Court nominations of John Roberts and Samuel Alito' },
 { date: '2014', event: 'Leo creates the Judicial Crisis Network as a dark money vehicle for judicial confirmation campaigns' },
 { date: '2016', event: 'Leo provides Trump with list of potential Supreme Court nominees, making it a campaign promise' },
 { date: '2016', event: 'McConnell blocks Merrick Garland nomination for 293 days, holding seat open for Leo\'s pick' },
 { date: '2017', event: 'Neil Gorsuch confirmed to stolen Supreme Court seat; Leo\'s network spends $10M+ on confirmation ads' },
 { date: '2018', event: 'Leo takes formal leave from Federalist Society to manage Brett Kavanaugh confirmation campaign' },
 { date: '2018', event: 'Leo\'s dark money groups spend $17 million defending Kavanaugh amid sexual assault allegations' },
 { date: '2020', event: 'Amy Coney Barrett rushed to confirmation in 30 days before election; Leo\'s network spends millions' },
 { date: '2021', event: 'Supreme Court\'s conservative supermajority, built by Leo, begins dismantling precedents' },
 { date: '2022', event: 'Dobbs v. Jackson overturns Roe v. Wade, the culmination of Leo\'s 40-year project' },
 { date: '2022', event: 'Barre Seid\'s $1.6 billion donation to Leo\'s Marble Freedom Trust revealed by New York Times' },
 { date: '2023', event: 'ProPublica reveals extensive undisclosed gifts to Clarence Thomas from Harlan Crow and others in Leo\'s network' },
 { date: '2023', event: 'Senate Judiciary Committee subpoenas Leo for documents related to gifts to Supreme Court justices' },
 { date: '2024', event: 'Leo defies congressional subpoena; donations to his network continue to flow to influence state courts' },
 ],
 legalOutcomes: [
 { defendant: 'Leonard Leo / Marble Freedom Trust', charge: 'Senate subpoena for documents on judicial ethics violations', outcome: 'Leo refused compliance; matter ongoing' },
 { defendant: 'Clarence Thomas', charge: 'Failure to disclose gifts, travel, and real estate transactions', outcome: 'No enforcement mechanism; ethics reform stalled in Congress' },
 { defendant: 'Judicial Crisis Network', charge: 'Dark money spending to influence judicial confirmations', outcome: 'Legal under Citizens United; no accountability' },
 { defendant: 'Federalist Society', charge: 'Operating as de facto judicial selection committee while claiming educational status', outcome: 'No IRS action despite clear political function' },
 { defendant: 'Harlan Crow', charge: 'Undisclosed gifts to a sitting Supreme Court justice', outcome: 'No legal consequences; Crow claims gifts were personal friendship' },
 { defendant: 'Leo-affiliated 501(c)(4) groups', charge: 'Coordinated dark money spending exceeding legal limits', outcome: 'FEC deadlocked; no enforcement' },
 { defendant: 'Ginni Thomas', charge: 'Lobbying activities creating conflict of interest for Justice Thomas', outcome: 'Thomas refuses recusal; no enforcement mechanism' },
 { defendant: 'CRC Advisors (Leo\'s consulting firm)', charge: 'Self-dealing from nonprofit funds', outcome: 'Under investigation; Leo\'s firm received millions from nonprofits he controlled' },
 ],
 charges: [
 { statute: '18 U.S.C. § 201', description: 'Bribery of federal officials through gifts and financial benefits directed to Supreme Court justices', count: 'Multiple justices, decades of unreported benefits' },
 { statute: '18 U.S.C. § 1001', description: 'False statements in financial disclosure forms by justices receiving unreported gifts', count: 'Years of omitted disclosures by multiple justices' },
 { statute: '5 U.S.C. App. § 101 (Ethics in Government Act)', description: 'Systematic failure to report gifts, travel, and real estate transactions', count: 'Dozens of unreported transactions' },
 { statute: '26 U.S.C. § 501(c)(4)', description: 'Abuse of social welfare nonprofit status for primarily political judicial capture operations', count: 'Multiple Leo-controlled organizations' },
 { statute: '18 U.S.C. § 1505', description: 'Obstruction of congressional proceedings by defying Senate subpoenas', count: 'Refusal to provide documents to Senate Judiciary Committee' },
 { statute: '18 U.S.C. § 1346', description: 'Honest services fraud through corruption of judicial selection process', count: 'Six Supreme Court appointments influenced' },
 { statute: '18 U.S.C. § 1962 (RICO)', description: 'Pattern of racketeering through coordinated dark money judicial capture enterprise', count: 'Decades-long enterprise involving dozens of organizations' },
 { statute: '28 U.S.C. § 455', description: 'Failure to recuse, justices with financial ties to Leo\'s network ruling on cases advanced by that network', count: 'Multiple cases with clear conflicts of interest' },
 ],
 coverup: [
 'Leo\'s network of interlocking nonprofits is deliberately designed to be opaque, money flows through multiple pass-through entities to obscure the original donors and ultimate recipients.',
 'The $1.6 billion Barre Seid donation was structured as a stock transfer to a nonprofit specifically to avoid taxes and disclosure requirements that would apply to political donations.',
 'Supreme Court justices have no enforceable ethics code, Leo\'s network exploited this gap to funnel benefits to justices without any accountability mechanism.',
 'When ProPublica began investigating Clarence Thomas\'s undisclosed gifts, Leo\'s allies launched a coordinated media campaign attacking the journalists rather than addressing the substance.',
 'The Federalist Society claims to be merely an "educational" debate society, not a judicial selection pipeline, despite the fact that every Trump-appointed federal judge was vetted through Leo\'s network.',
 'Leo\'s Judicial Crisis Network changed its name to the "Concord Fund"in 2020, making it harder for journalists and researchers to track its spending.',
 'Donor identity is protected by 501(c)(4) status, the public has no right to know which billionaires are funding campaigns to install their preferred judges on the federal bench.',
 'Leo personally profited from the network he built, his consulting firm CRC Advisors received tens of millions of dollars from the nonprofits he controlled, creating a self-enrichment loop.',
 ],
 sources: [
 { title: 'Secretive Billionaire Donated $1.6 Billion to Conservative Groups, New York Times', url: 'https://www.nytimes.com/2022/08/22/us/politics/republican-dark-money.html', date: '2022-08-22' },
 { title: 'Clarence Thomas and the Billionaire, ProPublica', url: 'https://www.propublica.org/article/clarence-thomas-scotus-undisclosed-luxury-travel-billionaire-harlan-crow', date: '2023-04-06' },
 { title: 'Leonard Leo\'s Bigger, Bolder Dark Money Operation, Politico', url: 'https://www.politico.com/news/magazine/2022/08/22/leonard-leo-dark-money-00053117', date: '2022-08-22' },
 { title: 'The Man Behind the Supreme Court\'s Conservative Revolution, Washington Post', url: 'https://www.washingtonpost.com/politics/leonard-leo-supreme-court/2019/05/25/', date: '2019-05-25' },
 { title: 'How Leonard Leo Built a Machine to Remake the Courts, NPR', url: 'https://www.npr.org/2023/04/25/1171647302/leonard-leo-dark-money-judicial-activism', date: '2023-04-25' },
 { title: 'Senate Democrats Subpoena Leonard Leo, Senate Judiciary Committee', url: 'https://www.judiciary.senate.gov/press/dem/releases/durbin-whitehouse-issue-subpoenas-to-leonard-leo-harlan-crow-in-supreme-court-ethics-investigation', date: '2023-07-20' },
 { title: 'The Federalist Society\'s Influence on Federal Judges, Brookings', url: 'https://www.brookings.edu/articles/the-federalist-societys-influence-on-federal-judges/', date: '2020' },
 { title: 'Dark Justice: The Secret Money Behind the Supreme Court, The New Yorker', url: 'https://www.newyorker.com/magazine/2017/04/17/the-conservative-pipeline-to-the-supreme-court', date: '2017-04-17' },
 ],
};

export default function LeonardLeoPage() {
 return (
 <div className="min-h-screen pt-20 lg:pt-24 pb-16">
 <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
 <Link href="/investigations"className="inline-flex items-center gap-2 text-zinc-400 hover:text-blood-500 transition-colors mb-6 pt-4"><ArrowLeft className="w-4 h-4"/>Back to Investigations</Link>
 <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="border-2 border-blood-800/60 bg-black/80 p-6 lg:p-8 mb-8">
 <div className="flex items-center gap-3 mb-4"><span className="px-3 py-1 text-xs font-bold uppercase border border-blood-500/30 bg-blood-500/20 text-blood-400">{investigation.severity}</span><span className="px-3 py-1 text-xs font-bold uppercase border border-zinc-500/30 bg-zinc-500/20 text-zinc-400">{investigation.status}</span></div>
 <h1 className="text-3xl lg:text-4xl font-black text-white uppercase tracking-wider mb-2"><GlitchText text={investigation.title} /></h1>
 <p className="text-lg text-blood-500 font-bold mb-4">{investigation.subtitle}</p>
 <p className="text-zinc-400 leading-relaxed">{investigation.summary}</p>
 </motion.div>
 <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.15 }} className="glass-card p-6 mb-8 border-l-4 border-blood-600">
 <h2 className="text-xl font-bold text-white uppercase tracking-wider mb-4 flex items-center gap-2"><ShieldAlert className="w-5 h-5 text-blood-500"/>The Cover-Up</h2>
 <div className="space-y-3">{investigation.coverup.map((item, idx) => (<div key={idx} className="p-3 bg-blood-950/20 border border-blood-500/30"><p className="text-sm text-zinc-300">{item}</p></div>))}</div>
 </motion.div>
 <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
 <div className="lg:col-span-2 space-y-8">
 <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }} className="glass-card p-6">
 <h2 className="text-xl font-bold text-white uppercase tracking-wider mb-4 flex items-center gap-2"><Users className="w-5 h-5 text-blood-500"/>Key Figures</h2>
 <div className="space-y-3">{investigation.keyFigures.map((figure, idx) => (<div key={idx} className="flex items-start justify-between p-3 bg-zinc-900/50 border border-zinc-800"><div className="flex-1">{figure.href ? (<Link href={figure.href} className="font-bold text-blood-400 hover:text-blood-300 transition-colors">{figure.name}</Link>) : (<span className="font-bold text-white">{figure.name}</span>)}<p className="text-sm text-zinc-400 mt-1">{figure.role}</p></div><span className="text-xs px-2 py-1 bg-zinc-800 text-zinc-400 border border-zinc-700 whitespace-nowrap ml-2">{figure.status}</span></div>))}</div>
 </motion.div>
 <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }} className="glass-card p-6">
 <h2 className="text-xl font-bold text-white uppercase tracking-wider mb-4 flex items-center gap-2"><Scale className="w-5 h-5 text-blood-500"/>Applicable Charges &amp; Statutes</h2>
 <div className="space-y-3">{investigation.charges.map((charge, idx) => (<div key={idx} className="p-4 bg-zinc-900/50 border border-zinc-800"><p className="font-bold text-blood-400 text-sm font-mono">{charge.statute}</p><p className="text-sm text-zinc-300 mt-1">{charge.description}</p><p className="text-xs text-blood-400 mt-1">{charge.count}</p></div>))}</div>
 </motion.div>
 </div>
 <div className="space-y-6">
 <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} className="glass-card p-6">
 <h3 className="text-lg font-bold text-white uppercase tracking-wider mb-4 flex items-center gap-2"><Calendar className="w-4 h-4 text-blood-500"/>Timeline</h3>
 <div className="space-y-4">{investigation.timeline.map((item, idx) => (<div key={idx} className="relative pl-4 border-l-2 border-zinc-800"><div className="absolute -left-[5px] top-0 w-2 h-2 bg-blood-500"/><p className="text-xs text-blood-500 font-mono">{item.date}</p><p className="text-sm text-zinc-300">{item.event}</p></div>))}</div>
 </motion.div>
 <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.1 }} className="glass-card p-6">
 <h3 className="text-lg font-bold text-white uppercase tracking-wider mb-4 flex items-center gap-2"><Scale className="w-5 h-5 text-blood-500"/>Legal Outcomes</h3>
 <div className="space-y-3">{investigation.legalOutcomes.map((item, idx) => (<div key={idx} className="p-3 bg-zinc-900/50 border border-zinc-800"><p className="font-bold text-white text-sm">{item.defendant}</p><p className="text-xs text-zinc-400 mt-1">{item.charge}</p><p className="text-xs text-blood-400 mt-1">{item.outcome}</p></div>))}</div>
 </motion.div>
 <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.2 }} className="glass-card p-6">
 <h3 className="text-lg font-bold text-white uppercase tracking-wider mb-4">Sources</h3>
 <div className="space-y-2">{investigation.sources.map((source, idx) => (<a key={idx} href={source.url} target="_blank"rel="noopener noreferrer"className="flex items-start gap-2 p-2 text-sm text-zinc-400 hover:text-blood-400 hover:bg-zinc-900/50 transition-colors"><ExternalLink className="w-4 h-4 mt-0.5 flex-shrink-0"/><div><span>{source.title}</span><span className="text-zinc-600 ml-2">({source.date})</span></div></a>))}</div>
 </motion.div>
 </div>
 </div>
 </div>
 </div>
 );
}
