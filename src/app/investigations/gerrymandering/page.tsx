'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowLeft, AlertTriangle, Users, Calendar, FileText, ExternalLink, Scale, ShieldAlert, Skull } from 'lucide-react';
import GlitchText from '@/components/effects/GlitchText';

const investigation = {
 title: 'Gerrymandering: The Stolen Maps',
 subtitle: 'How Politicians Choose Their Voters Instead of Voters Choosing Their Politicians',
 severity: 'critical',
 status: 'ONGOING',
 summary: 'Gerrymandering (the deliberate manipulation of electoral district boundaries) has been weaponized to an unprecedented degree through the Republican State Leadership Committee\'s REDMAP project, which invested $30 million in state legislative races in 2010 specifically to control redistricting. The result: Republicans won 10-year control of map-drawing in key states despite receiving fewer total votes. In states like North Carolina, Wisconsin, Ohio, and Pennsylvania, extreme partisan gerrymandering has created legislatures where one party wins supermajorities with a minority of the popular vote. Racial gerrymandering has been used to dilute Black and Latino voting power in violation of the Voting Rights Act. The Supreme Court\'s 2019 Rucho v. Common Cause decision declared partisan gerrymandering a political question beyond federal court jurisdiction, effectively giving map-riggers a green light.',
 keyFigures: [
 { name: 'Thomas Hofeller', role: 'Republican master redistricting strategist who drew maps for decades; files revealed racial targeting', href: '/entities/individuals/thomas-hofeller', status: 'Deceased (2018)' },
 { name: 'Chris Jankowski', role: 'Architect of REDMAP project at the Republican State Leadership Committee', href: '/entities/individuals/chris-jankowski', status: 'Active' },
 { name: 'Karl Rove', role: 'GOP strategist who championed the REDMAP strategy in Wall Street Journal', href: '/entities/individuals/karl-rove', status: 'Active' },
 { name: 'Phil Berger', role: 'NC Senate leader who oversaw gerrymandered maps struck down by courts multiple times', href: '/entities/individuals/phil-berger', status: 'Active' },
 { name: 'Tim Moore', role: 'NC House Speaker who defended racial and partisan gerrymanders in court', href: '/entities/individuals/tim-moore', status: 'Active' },
 { name: 'Scott Fitzgerald', role: 'Wisconsin Senate Majority Leader who oversaw maps drawn in secret"map room"', href: '/entities/individuals/scott-fitzgerald', status: 'Active' },
 { name: 'Robin Vos', role: 'Wisconsin Assembly Speaker who defended extreme partisan maps spending $20M+ in taxpayer money', href: '/entities/individuals/robin-vos', status: 'Active' },
 { name: 'John Roberts', role: 'Chief Justice who authored Rucho decision declaring partisan gerrymandering non-justiciable', href: '/entities/individuals/john-roberts', status: 'Active' },
 { name: 'Art Pope', role: 'Koch ally who funded NC redistricting efforts and litigation defending gerrymandered maps', href: '/entities/individuals/art-pope', status: 'Active' },
 { name: 'Dale Folwell', role: 'NC official involved in redistricting process found to use racial data in map-drawing', href: '/entities/individuals/dale-folwell', status: 'Active' },
 ],
 timeline: [
 { date: '1812', event: 'Governor Elbridge Gerry signs a redistricting bill in Massachusetts creating a salamander-shaped district, origin of"gerrymandering"' },
 { date: '1964', event: 'Reynolds v. Sims establishes"one person, one vote"- districts must have roughly equal populations' },
 { date: '1986', event: 'Davis v. Bandemer: Supreme Court rules partisan gerrymandering claims are justiciable but sets nearly impossible standard' },
 { date: '2003', event: 'Tom DeLay engineers mid-decade redistricting in Texas, breaking the traditional once-per-decade norm' },
 { date: '2009', event: 'Republican State Leadership Committee launches REDMAP, a $30 million plan to capture state legislatures before 2011 redistricting' },
 { date: '2010', event: 'REDMAP succeeds: Republicans flip 21 state chambers and gain control of redistricting in states with 40% of House seats' },
 { date: '2011', event: 'Wisconsin Republicans draw maps in a locked"map room"with sworn secrecy agreements, no Democrats allowed' },
 { date: '2011', event: 'North Carolina Republican legislators work with Thomas Hofeller to draw extreme racial and partisan gerrymanders' },
 { date: '2013', event: 'Shelby County v. Holder guts Voting Rights Act preclearance, removing federal oversight of redistricting in states with history of discrimination' },
 { date: '2016', event: 'NC maps struck down as unconstitutional racial gerrymanders in Cooper v. Harris' },
 { date: '2016', event: 'Thomas Hofeller\'s hard drives found after his death reveal explicit use of racial data to draw partisan maps' },
 { date: '2018', event: 'Pennsylvania Supreme Court strikes down congressional map as extreme partisan gerrymander' },
 { date: '2018', event: 'Gill v. Whitford: Supreme Court punts on Wisconsin partisan gerrymandering on standing grounds' },
 { date: '2019', event: 'Rucho v. Common Cause: Supreme Court rules 5-4 that federal courts cannot adjudicate partisan gerrymandering claims' },
 { date: '2021', event: 'New round of redistricting begins; Republicans in Ohio, Texas, Georgia, and Florida draw extreme partisan maps' },
 { date: '2023', event: 'North Carolina Supreme Court, after GOP captures majority, reverses its own precedent striking down gerrymandered maps' },
 { date: '2023', event: 'Moore v. Harper: Supreme Court rejects independent state legislature theory but leaves state courts as primary check' },
 { date: '2024', event: 'New York, Ohio, and other states continue litigation over gerrymandered maps ahead of elections' },
 ],
 legalOutcomes: [
 { defendant: 'North Carolina General Assembly', charge: 'Racial gerrymandering violating Equal Protection Clause', outcome: 'Maps struck down in Cooper v. Harris (2017); legislature drew new maps equally gerrymandered' },
 { defendant: 'Wisconsin Legislature', charge: 'Extreme partisan gerrymandering', outcome: 'Gill v. Whitford punted on standing; maps used through 2021' },
 { defendant: 'Pennsylvania Legislature', charge: 'Extreme partisan gerrymandering', outcome: 'State Supreme Court struck down map; fairer maps used in 2018 elections' },
 { defendant: 'All partisan gerrymandering defendants', charge: 'Vote dilution through partisan map manipulation', outcome: 'Rucho v. Common Cause (2019) - Supreme Court declared federal courts powerless to intervene' },
 { defendant: 'Ohio Redistricting Commission', charge: 'Repeated violation of state constitutional anti-gerrymandering amendments', outcome: 'State Supreme Court struck down maps 7 times; Republicans used them anyway' },
 { defendant: 'Alabama Legislature', charge: 'Racial gerrymandering, packing Black voters into single district', outcome: 'Allen v. Milligan (2023) - Supreme Court ordered new map with second majority-Black district' },
 { defendant: 'Texas Legislature', charge: 'Racial gerrymandering targeting Latino voters', outcome: 'Abbott v. Perez, Supreme Court largely upheld maps despite evidence of racial targeting' },
 { defendant: 'North Carolina (Moore v. Harper)', charge: 'Independent state legislature theory challenge', outcome: 'Supreme Court rejected ISL theory (2023) but case continues regarding state court authority' },
 ],
 charges: [
 { statute: 'U.S. Constitution, 14th Amendment (Equal Protection)', description: 'Intentional racial discrimination in drawing electoral district boundaries', count: 'Documented in NC, AL, TX, VA, SC, and other states' },
 { statute: '52 U.S.C. § 10301 (Voting Rights Act § 2)', description: 'Dilution of minority voting power through cracking and packing minority communities', count: 'Multiple states with documented racial vote dilution' },
 { statute: 'U.S. Constitution, 1st Amendment', description: 'Retaliation against voters based on political viewpoint through partisan sorting of districts', count: 'Systematic in REDMAP states' },
 { statute: 'U.S. Constitution, Article I § 2', description: 'Undermining republican form of government through maps that predetermine election outcomes', count: '40+ House seats guaranteed by gerrymandering' },
 { statute: '18 U.S.C. § 241', description: 'Conspiracy against rights, coordinated multi-state effort to deprive citizens of meaningful vote', count: '$30M+ REDMAP coordination across states' },
 { statute: '18 U.S.C. § 1001', description: 'False statements, legislators claimed maps were race-neutral when Hofeller files proved otherwise', count: 'North Carolina and other states' },
 { statute: '42 U.S.C. § 1983', description: 'Deprivation of civil rights under color of law through manipulated electoral districts', count: 'Millions of voters in gerrymandered districts' },
 { statute: 'State Constitutional Provisions', description: 'Violation of state anti-gerrymandering amendments (OH, FL, MI)', count: 'Multiple states, multiple cycles' },
 ],
 coverup: [
 'Wisconsin Republicans drew their 2011 maps in a locked"map room"where legislators signed secrecy agreements, even Republican members couldn\'t see the full plan until the final vote.',
 'Thomas Hofeller\'s files, discovered after his death, proved that racial data was the primary driver of supposedly "partisan" maps, but by then the maps had been used for years.',
 'After courts struck down North Carolina\'s racial gerrymanders, legislators drew new maps that were equally extreme but relabeled as "partisan" gerrymanders, which courts were less willing to strike.',
 'The REDMAP project was publicly boasted about by its architects after succeeding, but the $30 million dark money funding sources were never fully disclosed.',
 'In Ohio, Republican legislators defied seven separate state Supreme Court rulings ordering fair maps, they simply ran out the clock until elections had to proceed with illegal maps.',
 'The Supreme Court\'s Rucho decision acknowledged that partisan gerrymandering is"incompatible with democratic principles"but declared federal courts powerless to stop it.',
 'Redistricting consultants destroyed drafts and communications to prevent courts from seeing the deliberative process behind gerrymandered maps.',
 'States used prisoner populations (disproportionately Black) in rural, white districts to inflate those districts\' populations -"prison gerrymandering"that counted people where they couldn\'t vote.',
 ],
 sources: [
 { title: 'Ratf**ked: Why Your Vote Doesn\'t Count, David Daley', url: 'https://www.ratfuckedthebook.com/', date: '2016' },
 { title: 'REDMAP: The Republican Redistricting Strategy, RSLC', url: 'https://www.redistrictingmajorityproject.com/', date: '2012' },
 { title: 'Rucho v. Common Cause, Supreme Court Opinion', url: 'https://www.supremecourt.gov/opinions/18pdf/18-422_9ol1.pdf', date: '2019-06-27' },
 { title: 'The Secret Files of the Master of Modern Republican Gerrymandering, New Yorker', url: 'https://www.newyorker.com/news/news-desk/the-secret-files-of-the-master-of-modern-republican-gerrymandering', date: '2019-09-06' },
 { title: 'How Gerrymandering Silences Your Vote, Brennan Center', url: 'https://www.brennancenter.org/our-work/research-reports/gerrymandering-explained', date: '2021' },
 { title: 'Wisconsin Redistricting: A Tale of Maps and Secrecy, ProPublica', url: 'https://www.propublica.org/article/how-dark-money-helped-republicans-hold-the-house-and-devastate-democrats', date: '2018-11-01' },
 { title: 'North Carolina Racial Gerrymandering, Cooper v. Harris', url: 'https://www.supremecourt.gov/opinions/16pdf/15-1262_db8e.pdf', date: '2017-05-22' },
 { title: 'Ohio\'s Gerrymandering Crisis, All Sides', url: 'https://www.allsides.com/blog/ohio-redistricting-crisis-explained', date: '2022' },
 ],
};

export default function GerrymanderingPage() {
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
