'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowLeft, AlertTriangle, Users, Calendar, FileText, ExternalLink, Scale, ShieldAlert, Skull } from 'lucide-react';
import GlitchText from '@/components/effects/GlitchText';

const investigation = {
 title: 'Cambodia Bombing: Operation Menu',
 subtitle: '2.7 million tons of bombs dropped on a neutral nation - paving the way for the Khmer Rouge genocide',
 severity: 'critical',
 status: 'HISTORICAL - DEVASTATING CONSEQUENCES',
 summary: 'Between 1969 and 1973, the United States secretly and then openly bombed Cambodia, dropping 2.7 million tons of explosives - more than all Allied bombing in World War II combined. The campaign, which began as the covert Operation Menu under Nixon and Kissinger, killed an estimated 100,000 to 500,000 Cambodian civilians. The bombing destabilized Cambodia\'s government, destroyed its rural economy, and drove survivors into the arms of the Khmer Rouge, which seized power in 1975 and carried out a genocide that killed 1.5 to 2 million people. The bombing was hidden from Congress and the American public through falsified military records.',
 keyFigures: [
 { name: 'Richard Nixon', role: 'President who ordered the secret bombing of Cambodia', href: '/entities/individuals/richard-nixon', status: 'Historical - Deceased' },
 { name: 'Henry Kissinger', role: 'National Security Advisor who co-designed Operation Menu and selected targets', href: '/entities/individuals/henry-kissinger', status: 'Historical - Deceased' },
 { name: 'Alexander Haig', role: 'Military aide who coordinated the dual reporting system to hide the bombing', href: '/entities/individuals/alexander-haig', status: 'Historical - Deceased' },
 { name: 'General Creighton Abrams', role: 'MACV Commander who executed the bombing campaign', href: '/entities/individuals/creighton-abrams', status: 'Historical - Deceased' },
 { name: 'Hal Knight', role: 'Air Force officer who revealed the falsified reporting to Congress', href: '/entities/individuals/hal-knight', status: 'Historical' },
 { name: 'Prince Norodom Sihanouk', role: 'Cambodian head of state overthrown partly due to bombing destabilization', href: '/entities/individuals/norodom-sihanouk', status: 'Historical - Deceased' },
 { name: 'Lon Nol', role: 'U.S.-backed general who took power in 1970 coup', href: '/entities/individuals/lon-nol', status: 'Historical - Deceased' },
 { name: 'Pol Pot', role: 'Khmer Rouge leader who exploited bombing devastation to seize power', href: '/entities/individuals/pol-pot', status: 'Historical - Deceased' },
 { name: 'William Rogers', role: 'Secretary of State kept in the dark about the secret bombing campaign', href: '/entities/individuals/william-rogers', status: 'Historical - Deceased' },
 { name: 'Ray Sitton', role: 'Pentagon officer who planned the bombing missions under Operation Menu', href: '/entities/individuals/ray-sitton', status: 'Historical' },
 { name: 'William Shawcross', role: 'Journalist who exposed the bombing in"Sideshow: Kissinger, Nixon, and the Destruction of Cambodia"', href: '/entities/individuals/william-shawcross', status: 'Historical' },
 ],
 timeline: [
 { date: 'January 1969', event: 'Nixon takes office; Kissinger presents plan for secret bombing of Cambodia' },
 { date: 'March 18, 1969', event: 'Operation Menu begins: B-52 carpet bombing of Cambodia under codename"Breakfast"' },
 { date: 'March-May 1969', event: 'Subsequent operations"Lunch,""Snack,""Dinner,"and"Dessert"expand target zones' },
 { date: 'April 1969', event: 'Dual reporting system established: real targets hidden from chain of command and Congress' },
 { date: 'May 1969', event: 'New York Times reporter William Beecher breaks news of the bombing; FBI wiretaps journalists' },
 { date: 'March 1970', event: 'Lon Nol coup overthrows Sihanouk with tacit U.S. support' },
 { date: 'April 30, 1970', event: 'Nixon announces ground invasion of Cambodia, sparking nationwide protests' },
 { date: 'May 4, 1970', event: 'Kent State massacre: National Guard kills 4 students protesting Cambodia invasion' },
 { date: 'June 1970', event: 'Cooper-Church Amendment passes Senate, attempting to limit operations in Cambodia' },
 { date: '1970-1971', event: 'Bombing expands to cover virtually all of Cambodia\'s populated areas' },
 { date: '1972', event: 'Bombing intensifies dramatically as peace negotiations continue in Paris' },
 { date: 'January 1973', event: 'Paris Peace Accords signed for Vietnam, but bombing of Cambodia continues' },
 { date: 'June 1973', event: 'Congress passes Case-Church Amendment cutting off funding for bombing' },
 { date: 'August 15, 1973', event: 'Last U.S. bombing of Cambodia officially ends' },
 { date: 'April 17, 1975', event: 'Khmer Rouge captures Phnom Penh; begins genocide that kills 1.5-2 million Cambodians' },
 { date: '1979', event: 'Vietnamese invasion ends Khmer Rouge rule; U.S. supports Khmer Rouge seat at the UN' },
 { date: '2000', event: 'Yale research reveals bombing was far more extensive than previously acknowledged' },
 { date: '2006', event: 'Clinton Presidential Library releases documents confirming scope of the secret campaign' },
 ],
 legalOutcomes: [
 { defendant: 'Richard Nixon', charge: 'Secret, illegal bombing of a neutral country without Congressional authorization', outcome: 'Bombing was listed in articles of impeachment but Nixon resigned before trial' },
 { defendant: 'Henry Kissinger', charge: 'War crimes - designing and directing bombing of civilian areas', outcome: 'Never prosecuted; awarded Nobel Peace Prize; died in 2023 at age 100' },
 { defendant: 'United States Government', charge: 'Falsifying military records to hide bombing from Congress', outcome: 'Revealed by whistleblower Hal Knight; no accountability' },
 { defendant: 'U.S. Military', charge: 'Carpet bombing civilian population centers and farmland', outcome: 'No military personnel ever charged' },
 { defendant: 'Pol Pot / Khmer Rouge', charge: 'Genocide of 1.5-2 million Cambodians', outcome: 'U.S. supported Khmer Rouge UN seat until 1991; tribunal began decades later' },
 { defendant: 'U.S. Government', charge: 'Supporting Khmer Rouge at the UN after their genocide', outcome: 'U.S. recognized Khmer Rouge as legitimate government of Cambodia until 1991' },
 { defendant: 'FBI', charge: 'Illegal wiretapping of journalists who reported on the secret bombing', outcome: 'Wiretaps revealed during Watergate investigation' },
 { defendant: 'U.S. Government', charge: 'Failure to provide reparations or adequate UXO clearance', outcome: 'Minimal cleanup funding provided; thousands of Cambodians still killed by ordnance annually' },
 ],
 charges: [
 { statute: 'U.S. Constitution - Art. I, Sec. 8', description: 'Only Congress may declare war. The secret bombing was conducted without Congressional knowledge or authorization.', count: '4 years of covert bombing before Congressional awareness' },
 { statute: 'Geneva Convention (IV) - Art. 3 & 27', description: 'Protection of civilians in armed conflict; prohibition on violence to life and person', count: '100,000-500,000 Cambodian civilians killed' },
 { statute: 'Hague Convention (IV) - Art. 25', description: 'Prohibition on bombardment of undefended towns, villages, dwellings, and buildings', count: 'Systematic carpet bombing of entire provinces' },
 { statute: 'UN Charter - Article 2(4)', description: 'Prohibition on use of force against the territorial integrity of any state', count: 'Cambodia was a declared neutral nation; bombing was unprovoked aggression' },
 { statute: '18 U.S.C. § 1001 - False Statements', description: 'Falsifying military records and reports to conceal operations from Congress', count: 'Systematic falsification of thousands of after-action reports through dual reporting system' },
 { statute: 'Rome Statute - Art. 8(2)(b)(iv)', description: 'War crime of launching attacks knowing they will cause disproportionate civilian harm', count: '2.7 million tons of bombs - more than all WWII Allied bombing combined' },
 { statute: 'Genocide Convention - Article III', description: 'Complicity in genocide - bombing destabilized Cambodia and enabled Khmer Rouge rise to power', count: 'Khmer Rouge genocide killed 1.5-2 million people; directly enabled by bombing campaign' },
 { statute: 'War Powers Resolution (retroactive standard)', description: 'Executive must notify Congress within 48 hours of committing armed forces', count: 'Congress was deliberately deceived about military operations for years' },
 ],
 coverup: [
 'Operation Menu used a dual reporting system: real bombing coordinates were sent through back channels while falsified coordinates in South Vietnam were logged in official records.',
 'Secretary of State William Rogers and Secretary of Defense Melvin Laird were initially kept in the dark about the campaign by Nixon and Kissinger.',
 'When journalist William Beecher broke the story in the New York Times, the administration ordered FBI wiretaps on journalists and National Security Council staff to find the leaker.',
 'Military records were systematically falsified - Air Force computers were secretly reprogrammed to delete Cambodia missions from the database.',
 'The Pentagon created a special, compartmentalized reporting chain to ensure that standard Congressional oversight mechanisms would not reveal the bombing.',
 'After the truth emerged, Nixon claimed the bombing was necessary for"national security"- a justification used to avoid any legal accountability.',
 'The connection between the U.S. bombing and the rise of the Khmer Rouge has been systematically downplayed in official histories and school curricula.',
 'The U.S. supported the Khmer Rouge\'s seat at the United Nations until 1991, even after their genocide was well documented, to counter Vietnamese influence.',
 'Full records of the bombing campaign remain partially classified, and the true civilian death toll has never been officially acknowledged by the U.S. government.',
 ],
 sources: [
 { title: 'Sideshow: Kissinger, Nixon, and the Destruction of Cambodia - William Shawcross', url: 'https://www.goodreads.com/book/show/283107.Sideshow', date: '1979' },
 { title: 'Yale University Cambodian Genocide Program - Bombing Database', url: 'https://gsp.yale.edu/case-studies/cambodian-genocide-program', date: '2000' },
 { title: 'The Trials of Henry Kissinger - Christopher Hitchens', url: 'https://www.versobooks.com/books/1694-the-trial-of-henry-kissinger', date: '2001' },
 { title: 'National Security Archive - Cambodia Bombing Documents', url: 'https://nsarchive2.gwu.edu/NSAEBB/NSAEBB58/', date: '2002' },
 { title: 'Bombs Over Cambodia - Owen & Kiernan', url: 'https://www.japantimes.co.jp/opinion/2015/02/12/commentary/bombs-cambodia/', date: '2006' },
 { title: 'The Kissinger Cables - WikiLeaks', url: 'https://wikileaks.org/plusd/pressrelease/', date: '2013' },
 { title: 'The Cambodia Daily - Legacy of Bombs', url: 'https://www.cambodiadaily.com/', date: '2017' },
 { title: 'NPR - The U.S. Bombing of Cambodia', url: 'https://www.npr.org/sections/parallels/2017/04/18/524487856/', date: '2017' },
 ],
};

export default function CambodiaBombingPage() {
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
