'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowLeft, AlertTriangle, Users, Calendar, FileText, ExternalLink, Scale, ShieldAlert, Skull } from 'lucide-react';
import GlitchText from '@/components/effects/GlitchText';

const investigation = {
 title: 'Fox News: The Propaganda Machine',
 subtitle: 'Dominion\'s $787.5M settlement proved Fox knowingly broadcast lies, the biggest media fraud in American history',
 severity: 'critical',
 status: 'ONGOING, SYSTEMIC',
 summary: 'Fox News, founded by Republican strategist Roger Ailes with Rupert Murdoch\'s backing, has operated as a partisan propaganda machine for nearly three decades. The Dominion Voting Systems lawsuit exposed the network\'s inner workings in unprecedented detail: internal communications revealed that Fox hosts, executives, and even Rupert Murdoch himself knew the 2020 election fraud claims were false but broadcast them anyway to retain viewers. Fox settled for $787.5 million (the largest defamation settlement in U.S. history) rather than face trial. But the Dominion case was just one chapter. From its founding, Fox has systematically misinformed the American public on climate change, the Iraq War, COVID-19, immigration, and virtually every major issue, operating not as a news organization but as the communications arm of an authoritarian political movement. The network\'s influence has radicalized millions and degraded democratic discourse.',
 keyFigures: [
 { name: 'Rupert Murdoch', role: 'Fox Corporation chairman who admitted under oath that Fox hosts endorsed election lies', href: '/entities/individuals/rupert-murdoch', status: 'Active, Owner' },
 { name: 'Roger Ailes', role: 'Fox News founder and CEO; fired in 2016 after sexual harassment scandal', href: '/entities/individuals/roger-ailes', status: 'Historical, Deceased' },
 { name: 'Tucker Carlson', role: 'Highest-rated host who privately called Trump "demonic" while promoting his claims on air', href: '/entities/individuals/tucker-carlson', status: 'Fired 2023' },
 { name: 'Sean Hannity', role: 'Prime-time host who texted White House during January 6 while covering it as"news"', href: '/entities/individuals/sean-hannity', status: 'Active' },
 { name: 'Laura Ingraham', role: 'Prime-time host whose texts revealed she knew election claims were false', href: '/entities/individuals/laura-ingraham', status: 'Active' },
 { name: 'Maria Bartiromo', role: 'Host who amplified Sidney Powell\'s conspiracy theories on air', href: '/entities/individuals/maria-bartiromo', status: 'Active' },
 { name: 'Lou Dobbs', role: 'Host who aggressively pushed election fraud claims; show cancelled after Smartmatic lawsuit', href: '/entities/individuals/lou-dobbs', status: 'Show Cancelled' },
 { name: 'Suzanne Scott', role: 'Fox News CEO who oversaw the network during the election lies crisis', href: '/entities/individuals/suzanne-scott', status: 'Active' },
 { name: 'Lachlan Murdoch', role: 'Fox Corporation CEO who approved the editorial direction', href: '/entities/individuals/lachlan-murdoch', status: 'Active, CEO' },
 { name: 'Sidney Powell', role: 'Attorney whose wild fraud claims Fox amplified despite knowing they were false', href: '/entities/individuals/sidney-powell', status: 'Pleaded Guilty' },
 { name: 'Dominion Voting Systems', role: 'Company whose defamation lawsuit exposed Fox\'s internal knowledge of lies', href: '/entities/corporations/dominion-voting', status: 'Plaintiff, Prevailed' },
 ],
 timeline: [
 { date: 'October 1996', event: 'Fox News Channel launches under Roger Ailes with "Fair and Balanced"slogan' },
 { date: '2002-2003', event: 'Fox aggressively promotes Iraq WMD claims; studies show Fox viewers most misinformed about the war' },
 { date: '2009', event: 'Fox promotes Tea Party movement; hosts organize and attend rallies while claiming objectivity' },
 { date: '2015-2016', event: 'Fox provides extensive platform for Trump\'s campaign; Ailes advises Trump privately' },
 { date: 'July 2016', event: 'Roger Ailes forced out after sexual harassment allegations by Gretchen Carlson and others' },
 { date: '2020', event: 'Fox downplays COVID-19 severity while hosts privately take precautions; Murdoch gets vaccinated early' },
 { date: 'November 7, 2020', event: 'Fox calls Arizona for Biden; Trump supporters furiously switch to Newsmax and OAN' },
 { date: 'November 2020', event: 'Fox begins amplifying election fraud claims to win back viewers despite knowing they\'re false' },
 { date: 'January 6, 2021', event: 'Hannity, Ingraham text Mark Meadows during Capitol attack; on-air coverage initially critical, then shifts' },
 { date: 'March 2021', event: 'Dominion Voting Systems files $1.6 billion defamation lawsuit against Fox News' },
 { date: '2022', event: 'Court filings reveal internal Fox texts: hosts and executives mocked the fraud claims they aired nightly' },
 { date: 'February 2023', event: 'Murdoch admits under oath that Fox hosts "endorsed" the election fraud narrative' },
 { date: 'March 2023', event: 'Dominion\'s brief released showing Fox leadership knew claims were false and aired them for ratings' },
 { date: 'April 18, 2023', event: 'Fox settles Dominion lawsuit for $787.5 million, largest defamation settlement in history' },
 { date: 'April 24, 2023', event: 'Tucker Carlson fired; Fox claims unrelated to settlement' },
 { date: '2023', event: 'Smartmatic\'s $2.7 billion defamation lawsuit against Fox proceeds toward trial' },
 { date: '2024', event: 'Fox continues same editorial approach; no structural reforms implemented post-settlement' },
 ],
 legalOutcomes: [
 { defendant: 'Fox News / Fox Corporation', charge: 'Defamation, knowingly broadcasting false claims about Dominion Voting Systems', outcome: 'Settled for $787.5 million, largest defamation settlement in U.S. history' },
 { defendant: 'Fox News', charge: 'Smartmatic defamation - $2.7 billion lawsuit for false election fraud claims', outcome: 'Proceeding toward trial; motions to dismiss rejected' },
 { defendant: 'Roger Ailes', charge: 'Systematic sexual harassment of female employees', outcome: 'Forced out in 2016; Gretchen Carlson settled for $20M; died 2017' },
 { defendant: 'Fox News', charge: 'Creating hostile work environment for women', outcome: 'Multiple settlements totaling $100M+; no structural accountability' },
 { defendant: 'Tucker Carlson', charge: 'Cited by Dominion as knowingly spreading false claims', outcome: 'Fired days after Dominion settlement; no personal legal consequences' },
 { defendant: 'Fox Corporation', charge: 'Shareholder lawsuits alleging breach of fiduciary duty', outcome: 'Derivative suits filed arguing Murdoch family prioritized politics over shareholder value' },
 { defendant: 'Sidney Powell', charge: 'Conspiracy to overturn 2020 election results', outcome: 'Pleaded guilty in Georgia RICO case; Fox amplified her claims knowing they were false' },
 { defendant: 'Fox News', charge: 'FTC complaints about deceptive advertising and misleading "news" branding', outcome: 'No regulatory action; First Amendment protections shield editorial decisions' },
 ],
 charges: [
 { statute: 'Defamation, Actual Malice (NYT v. Sullivan Standard)', description: 'Broadcasting false statements with knowledge of their falsity or reckless disregard for truth', count: 'Internal communications proved knowledge of falsity; $787.5M settlement with Dominion' },
 { statute: 'Securities Fraud - 17 CFR § 240.10b-5', description: 'Misleading shareholders about editorial decisions that created massive legal liability', count: 'Shareholder derivative lawsuits filed against Murdoch family and Fox board' },
 { statute: 'FEC Coordination Violations', description: 'Hosts coordinating with political campaigns while presenting content as independent news', count: 'Hannity texted White House officials; Ailes advised Trump; hosts attended campaign events' },
 { statute: 'Deceptive Business Practices', description: 'Marketing partisan propaganda as "Fair and Balanced"news programming', count: 'Decades of branding as news organization while operating as political advocacy outlet' },
 { statute: 'Intentional Infliction of Emotional Distress', description: 'Election workers received death threats after Fox amplified false fraud claims', count: 'Ruby Freeman and Shaye Moss testified about threats and harassment directly resulting from Fox coverage' },
 { statute: 'Conspiracy to Defraud the United States (18 U.S.C. § 371)', description: 'Coordinating with political operatives to spread false information undermining confidence in elections', count: 'Documented coordination between hosts and Trump allies during election fraud campaign' },
 { statute: 'Workplace Discrimination, Title VII', description: 'Systematic sexual harassment and hostile work environment for women', count: 'Multiple lawsuits; $100M+ in settlements; pattern of predatory behavior by executives' },
 { statute: 'Public Interest Standard, FCC', description: 'Broadcast licensees must serve the public interest; Fox stations carry programming proven to be deliberately false', count: 'No FCC action despite proven deliberate falsehoods; raises questions about broadcast licensing standards' },
 ],
 coverup: [
 'Fox hosts privately mocked the election fraud claims they amplified on air. Tucker Carlson texted "Sidney Powell is lying"while his network gave her a platform nightly to make those exact claims.',
 'Rupert Murdoch admitted under oath that Fox hosts "endorsed" the election fraud narrative, but the network continued to frame the Dominion settlement as a"business decision"with no admission of wrongdoing.',
 'Fox paid $787.5 million to Dominion but issued no on-air correction, retraction, or apology to its viewers for knowingly broadcasting false information about the 2020 election.',
 'Internal emails showed Fox executives were aware their COVID-19 coverage was misleading, while the company itself implemented strict vaccine and testing protocols for employees.',
 'Sean Hannity texted Mark Meadows on January 6 urging action, revealing he was effectively coordinating with the White House, yet continued covering the events as a"journalist."',
 'Roger Ailes built Fox News explicitly as a Republican propaganda outlet, documents from his time as a Nixon media advisor lay out the blueprint for a partisan news network.',
 'Fox fired Tucker Carlson days after the $787.5M Dominion settlement but publicly claimed the firing was unrelated, despite overwhelming circumstantial evidence.',
 'The Murdoch family controls Fox Corporation through a dual-class share structure that allows them to maintain editorial control despite public shareholders, insulating them from accountability.',
 'Fox\'s"opinion vs. news"distinction is used as a legal shield, but studies show viewers cannot distinguish between its "news" and "opinion" programming, and hosts routinely blur the lines.',
 ],
 sources: [
 { title: 'Dominion v. Fox News, Court Filing and Evidence', url: 'https://www.documentcloud.org/documents/23572656-dominion-v-fox-summary-judgment-brief', date: '2023' },
 { title: 'NPR, Fox News Settles Dominion Lawsuit for $787.5 Million', url: 'https://www.npr.org/2023/04/18/1170634296/fox-news-dominion-voting-settlement', date: '2023' },
 { title: 'New York Times, Inside Fox News\' Election Night Crisis', url: 'https://www.nytimes.com/2023/02/02/business/media/fox-news-dominion-lawsuit.html', date: '2023' },
 { title: 'The Murdoch Dynasty, Vanity Fair', url: 'https://www.vanityfair.com/news/2023/02/rupert-murdoch-fox-news-dominion', date: '2023' },
 { title: 'Dark Money, Jane Mayer', url: 'https://www.penguinrandomhouse.com/books/215146/dark-money-by-jane-mayer/', date: '2016' },
 { title: 'Hoax: Donald Trump, Fox News, and the Dangerous Distortion of Truth, Brian Stelter', url: 'https://www.simonandschuster.com/books/Hoax/Brian-Stelter/9781982142452', date: '2020' },
 { title: 'Network Propaganda, Benkler, Faris & Roberts', url: 'https://www.oxfordscholarship.com/view/10.1093/oso/9780190923624.001.0001/oso-9780190923624', date: '2018' },
 { title: 'PRRI Study, Fox News and Misinformation', url: 'https://www.prri.org/research/media-consumption-covid-19/', date: '2021' },
 ],
};

export default function FoxNewsPropagandaPage() {
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
