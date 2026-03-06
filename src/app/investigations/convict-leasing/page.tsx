'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowLeft, AlertTriangle, Users, Calendar, FileText, ExternalLink, Scale, ShieldAlert, Skull } from 'lucide-react';
import GlitchText from '@/components/effects/GlitchText';

const investigation = {
 title: 'Convict Leasing: Slavery By Another Name',
 subtitle: 'How the 13th Amendment\'s loophole re-enslaved Black Americans for corporate profit',
 severity: 'critical',
 status: 'HISTORICAL, SYSTEMIC',
 summary: 'After the Civil War, Southern states exploited the 13th Amendment\'s exception for convicted criminals to create a new system of forced labor. Black men were arrested on fabricated charges (vagrancy, loitering, changing employers without permission) and leased to coal mines, railroads, plantations, and factories. Conditions were often worse than antebellum slavery because lessees had no financial incentive to keep workers alive. Tens of thousands died in mines, turpentine camps, and chain gangs. The system generated enormous revenue for state governments and corporations including U.S. Steel, while terrorizing Black communities for decades after emancipation.',
 keyFigures: [
 { name: 'Frederick Douglass', role: 'Abolitionist who warned of re-enslavement through criminal codes', href: '/entities/individuals/frederick-douglass', status: 'Historical' },
 { name: 'John T. Milner', role: 'Alabama industrialist who pioneered convict leasing in coal mines', href: '/entities/individuals/john-t-milner', status: 'Historical' },
 { name: 'Joseph E. Brown', role: 'Georgia governor who leased convicts to his own Dade Coal Company', href: '/entities/individuals/joseph-e-brown', status: 'Historical' },
 { name: 'Nathan Bedford Forrest', role: 'KKK founder and convict lessee who used forced labor on plantations', href: '/entities/individuals/nathan-bedford-forrest', status: 'Historical' },
 { name: 'George W. Cable', role: 'Writer who exposed the horrors of convict leasing in "The Silent South"', href: '/entities/individuals/george-w-cable', status: 'Historical' },
 { name: 'Julia Tutwiler', role: 'Alabama reformer who fought to end convict leasing abuses', href: '/entities/individuals/julia-tutwiler', status: 'Historical' },
 { name: 'Andrew Carnegie', role: 'U.S. Steel founder whose subsidiary Tennessee Coal & Iron used convict labor', href: '/entities/individuals/andrew-carnegie', status: 'Historical' },
 { name: 'James W. English', role: 'Atlanta mayor and president of Chattahoochee Brick Company using convict labor', href: '/entities/individuals/james-w-english', status: 'Historical' },
 { name: 'Robert McKee', role: 'Alabama editor who defended convict leasing as "necessary" for Black workers', href: '/entities/individuals/robert-mckee', status: 'Historical' },
 { name: 'Edmund Richardson', role: 'Mississippi planter called"largest cotton producer in the world"using leased convicts', href: '/entities/individuals/edmund-richardson', status: 'Historical' },
 { name: 'Martin Tabert', role: 'White Northerner whose death in a Florida convict camp exposed the system nationally', href: '/entities/individuals/martin-tabert', status: 'Historical, Deceased' },
 { name: 'Ida B. Wells', role: 'Journalist who documented racial terror and its connection to forced labor systems', href: '/entities/individuals/ida-b-wells', status: 'Historical' },
 ],
 timeline: [
 { date: 'December 1865', event: '13th Amendment ratified with exception clause:"except as a punishment for crime"' },
 { date: '1865-1866', event: 'Southern states pass Black Codes criminalizing unemployment, assembly, and movement of freed people' },
 { date: '1868', event: 'Alabama begins leasing state prisoners to private railroad companies' },
 { date: '1871', event: 'Georgia Governor Joseph E. Brown leases 100 convicts to his own Dade Coal Company' },
 { date: '1874', event: 'Tennessee begins large-scale convict leasing to coal mining operations' },
 { date: '1876-1877', event: 'Reconstruction ends; federal troops withdraw from the South, enabling expansion of convict leasing' },
 { date: '1880', event: 'An estimated 10,000 convicts are leased across the South, over 90% are Black' },
 { date: '1882', event: 'Frederick Douglass denounces convict leasing as"a new form of slavery"' },
 { date: '1883', event: 'George W. Cable publishes expos\u00e9s of convict leasing conditions in national magazines' },
 { date: '1886', event: 'Death rate at Pratt Mines in Alabama reaches 18% annually, far exceeding antebellum slave mortality' },
 { date: '1890', event: 'Alabama\'s convict leasing revenue constitutes 73% of the state\'s entire revenue' },
 { date: '1891', event: 'Tennessee Coal Mine War: free miners rebel against convict labor undercutting their wages' },
 { date: '1898', event: 'U.S. Steel subsidiary Tennessee Coal, Iron & Railroad Company acquires massive convict labor force' },
 { date: '1908', event: 'Georgia abolishes convict leasing but replaces it with chain gangs, conditions remain brutal' },
 { date: '1911', event: 'Alabama convict John Clarke whipped to death at Pratt Mines; grand jury refuses to indict' },
 { date: '1921', event: 'Martin Tabert beaten to death in Florida turpentine camp, sparking national outrage' },
 { date: '1923', event: 'Florida abolishes convict leasing following Tabert scandal' },
 { date: '1928', event: 'Alabama becomes the last state to officially abolish convict leasing' },
 { date: '2018', event: 'Nationwide prison strike by incarcerated workers demanding end to modern forced prison labor' },
 ],
 legalOutcomes: [
 { defendant: 'Southern States', charge: 'Systematic re-enslavement through criminal codes', outcome: 'No accountability; system operated for 60+ years' },
 { defendant: 'Alabama State Government', charge: 'Profiting from forced labor deaths', outcome: 'Last state to abolish system in 1928; no reparations' },
 { defendant: 'U.S. Steel / TCI&RR', charge: 'Use of forced convict labor in mines', outcome: 'Never prosecuted; profited enormously' },
 { defendant: 'Chattahoochee Brick Company', charge: 'Worked convicts to death manufacturing bricks', outcome: 'No consequences; company operated for decades' },
 { defendant: 'Mine Operators', charge: 'Death rates of 18-45% among leased convicts', outcome: 'Grand juries repeatedly refused to indict' },
 { defendant: 'Local Sheriffs & Judges', charge: 'Fabricating charges against Black men to supply labor', outcome: 'System was the law itself; no prosecutions' },
 { defendant: 'Florida Turpentine Camps', charge: 'Death of Martin Tabert and others', outcome: 'Led to abolition in Florida but no criminal convictions' },
 { defendant: 'Federal Government', charge: 'Failure to enforce 13th and 14th Amendments', outcome: 'Withdrew from Southern affairs after Reconstruction' },
 ],
 charges: [
 { statute: '13th Amendment Exception Clause', description: 'Constitutional loophole permitting involuntary servitude as punishment for crime, enabling states to legally re-enslave citizens', count: 'Systematic exploitation across all former Confederate states for 60+ years' },
 { statute: '18 U.S.C. § 1581 - Peonage', description: 'Holding a person in a condition of peonage or involuntary servitude for debt or alleged crime', count: 'Thousands of documented cases across the South' },
 { statute: '18 U.S.C. § 1589 - Forced Labor', description: 'Obtaining labor through force, threats of force, or coercion', count: 'Tens of thousands of convicts forced into labor under threat of violence' },
 { statute: '18 U.S.C. § 242 - Deprivation of Rights Under Color of Law', description: 'State officials fabricating charges and denying due process to supply convict labor', count: 'Systemic across Southern judicial systems for decades' },
 { statute: '42 U.S.C. § 1983 - Civil Rights Violations', description: 'State actors conspiring to deprive citizens of constitutional rights through false arrest and forced labor', count: 'Hundreds of thousands of false arrests documented' },
 { statute: 'Murder / Manslaughter', description: 'Death of leased convicts through beatings, starvation, overwork, and denial of medical care', count: 'Death rates of 18-45% annually in worst camps; tens of thousands dead' },
 { statute: 'Conspiracy to Violate Civil Rights', description: 'Coordinated system between state governments, courts, and corporations to maintain forced labor', count: 'Multi-state conspiracy lasting decades involving hundreds of officials' },
 { statute: 'Cruel and Unusual Punishment (8th Amendment)', description: 'Chain gangs, whippings, sweatboxes, starvation, and torture of imprisoned persons', count: 'Standard practice across all convict leasing operations' },
 { statute: 'Fraud and Corruption', description: 'State officials leasing convicts to their own private companies for personal profit', count: 'Multiple governors and legislators documented as direct financial beneficiaries' },
 ],
 coverup: [
 'Southern newspapers portrayed convict leasing as a "civilizing" institution that taught Black men the value of work, inverting the reality of brutal forced labor.',
 'State governments destroyed or failed to maintain records of convict deaths, making it impossible to determine the full death toll of the system.',
 'The 13th Amendment\'s exception clause was deliberately inserted to allow states to maintain forced labor, a fact rarely taught in American schools.',
 'Corporations like U.S. Steel have never acknowledged their use of convict labor or made any form of reparation to descendants of those they worked to death.',
 'When convict leasing was"abolished,"states simply replaced it with chain gangs and state-run prison farms that maintained the same brutal conditions.',
 'Federal authorities had the power to intervene under the 14th Amendment but chose not to after the Compromise of 1877 ended Reconstruction.',
 'The system was designed to be self-perpetuating: convicts who survived their sentences were often re-arrested on new fabricated charges immediately upon release.',
 'Modern prison labor programs paying cents per hour are the direct descendant of convict leasing, yet are rarely discussed in terms of this historical continuity.',
 'Textbooks for generations described this era as "Reconstruction" and "Redemption" without mentioning the mass re-enslavement happening simultaneously.',
 'The economic incentive structure meant that arresting officers, judges, and lessees all profited from each conviction, creating a pipeline from freedom to forced labor.',
 ],
 sources: [
 { title: 'Slavery by Another Name, Douglas Blackmon', url: 'https://www.pulitzer.org/winners/douglas-blackmon', date: '2009' },
 { title: 'The New Encyclopedia of Southern Culture: Law and Politics', url: 'https://uncpress.org/book/9780807871720/the-new-encyclopedia-of-southern-culture/', date: '2008' },
 { title: 'Equal Justice Initiative, Convict Leasing Report', url: 'https://eji.org/news/history-racial-injustice-convict-leasing/', date: '2020' },
 { title: 'One Dies, Get Another: Convict Leasing in the American South, Matthew Mancini', url: 'https://www.sc.edu/uscpress/books/1996/3200.html', date: '1996' },
 { title: 'PBS, Slavery by Another Name Documentary', url: 'https://www.pbs.org/tpt/slavery-by-another-name/home/', date: '2012' },
 { title: 'The Journal of Negro History, Convict Lease System', url: 'https://www.jstor.org/stable/2714234', date: '1933' },
 { title: 'Federal Writers\' Project Slave Narratives', url: 'https://www.loc.gov/collections/slave-narratives-from-the-federal-writers-project-1936-to-1938/', date: '1936-1938' },
 { title: 'Smithsonian, The Bitter Legacy of Convict Leasing', url: 'https://www.smithsonianmag.com/history/convict-leasing-how-corporations-kept-slavery-alive-180975435/', date: '2019' },
 { title: '13th, Ava DuVernay Documentary', url: 'https://www.netflix.com/title/80091741', date: '2016' },
 ],
};

export default function ConvictLeasingPage() {
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
