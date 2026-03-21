'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowLeft, AlertTriangle, Users, Calendar, FileText, ExternalLink, Scale, ShieldAlert, Skull } from 'lucide-react';
import GlitchText from '@/components/effects/GlitchText';

const investigation = {
 title: 'Somalia: Black Hawk Down to Forever War',
 subtitle: 'Three decades of U.S. intervention, AFRICOM drone strikes, and civilian casualties in the Horn of Africa',
 severity: 'critical',
 status: 'ONGOING',
 summary: 'The United States has been militarily involved in Somalia for over three decades, from the disastrous 1993 Battle of Mogadishu to the ongoing AFRICOM drone campaign. What began as a humanitarian mission devolved into urban warfare and nation-building, then transformed into an open-ended "counterterrorism" operation with minimal oversight. U.S. Africa Command (AFRICOM) has conducted hundreds of airstrikes since 2007, killing an unknown number of civilians while claiming to target al-Shabaab. Amnesty International has documented numerous strikes that killed farmers, elders, and children with no connection to armed groups. The U.S. has maintained a troop presence and conducted special operations raids with no Congressional authorization, no declaration of war, and minimal public accounting of civilian casualties.',
 keyFigures: [
 { name: 'George H.W. Bush', role: 'President who authorized Operation Restore Hope in Somalia (1992)', href: '/entities/individuals/george-hw-bush', status: 'Historical, Deceased' },
 { name: 'Bill Clinton', role: 'President during Black Hawk Down; withdrew forces after Battle of Mogadishu', href: '/entities/individuals/bill-clinton', status: 'Living' },
 { name: 'George W. Bush', role: 'President who authorized Ethiopian invasion of Somalia and expanded covert operations', href: '/entities/individuals/george-w-bush', status: 'Living' },
 { name: 'Barack Obama', role: 'President who massively escalated drone strikes in Somalia under AFRICOM', href: '/entities/individuals/barack-obama', status: 'Living' },
 { name: 'Donald Trump', role: 'President who loosened strike approval rules and tripled airstrikes in Somalia', href: '/entities/individuals/donald-trump', status: 'Living' },
 { name: 'Mohamed Farrah Aidid', role: 'Somali warlord whose forces killed U.S. soldiers in 1993 Battle of Mogadishu', href: '/entities/individuals/mohamed-farrah-aidid', status: 'Historical, Deceased' },
 { name: 'General Thomas Waldhauser', role: 'AFRICOM Commander who oversaw the escalation of strikes in Somalia', href: '/entities/individuals/thomas-waldhauser', status: 'Historical' },
 { name: 'General Stephen Townsend', role: 'AFRICOM Commander who continued the drone campaign', href: '/entities/individuals/stephen-townsend', status: 'Living' },
 { name: 'Erik Prince', role: 'Blackwater founder whose contractors operated in Somalia', href: '/entities/individuals/erik-prince', status: 'Active' },
 { name: 'Les Aspin', role: 'Secretary of Defense who denied requests for armor before Black Hawk Down', href: '/entities/individuals/les-aspin', status: 'Historical, Deceased' },
 { name: 'Hassan Sheikh Mohamud', role: 'Somali President who requested continued U.S. military support', href: '/entities/individuals/hassan-sheikh-mohamud', status: 'Active' },
 ],
 timeline: [
 { date: 'December 1992', event: 'Operation Restore Hope: 25,000 U.S. troops deployed to Somalia for humanitarian mission' },
 { date: 'June 1993', event: '24 Pakistani UN peacekeepers killed; U.S. shifts mission from aid to manhunt for Aidid' },
 { date: 'October 3-4, 1993', event: 'Battle of Mogadishu ("Black Hawk Down"): 18 U.S. soldiers, 1,000+ Somalis killed' },
 { date: 'March 1994', event: 'U.S. withdraws all forces from Somalia; country collapses into warlord-controlled zones' },
 { date: 'December 2006', event: 'U.S. backs Ethiopian invasion to overthrow Islamic Courts Union government' },
 { date: 'January 2007', event: 'First acknowledged U.S. airstrikes in Somalia since 1993; AC-130 gunship attacks' },
 { date: '2007', event: 'U.S. Africa Command (AFRICOM) established; Somalia becomes primary area of operations' },
 { date: '2011', event: 'Al-Shabaab attack on Westgate Mall in Kenya; U.S. escalates strikes in Somalia' },
 { date: '2014', event: 'U.S. drone strike kills al-Shabaab leader Ahmed Godane' },
 { date: '2016', event: 'Obama approves standing authority for pre-planned strikes against al-Shabaab' },
 { date: 'March 2017', event: 'Trump designates parts of Somalia as"areas of active hostilities,"loosening strike rules' },
 { date: 'April 2017', event: 'First U.S. combat death in Somalia since 1993' },
 { date: '2017-2020', event: 'U.S. conducts 200+ airstrikes; AFRICOM claims zero civilian casualties despite evidence' },
 { date: '2019', event: 'Amnesty International documents 14 civilians killed in just 5 strikes, contradicting AFRICOM claims' },
 { date: 'December 2020', event: 'Trump orders withdrawal of 700 troops; forces \'repositioned\' to neighboring countries' },
 { date: 'May 2022', event: 'Biden reverses Trump withdrawal, redeploys troops and resumes strike authority' },
 { date: '2023', event: 'AFRICOM reports 15+ strikes; independent monitors document continued civilian casualties' },
 { date: '2024', event: 'U.S. operations in Somalia continue with no end date or Congressional authorization' },
 ],
 legalOutcomes: [
 { defendant: 'AFRICOM', charge: 'Killing civilians in drone strikes and denying their deaths', outcome: 'Amnesty International documented numerous civilian casualties; AFRICOM conducted internal reviews clearing itself' },
 { defendant: 'United States', charge: 'Conducting military operations without Congressional authorization', outcome: 'Executive branch cites 2001 AUMF for operations in Somalia, a law passed for Afghanistan' },
 { defendant: 'Trump Administration', charge: 'Loosening rules of engagement leading to increased civilian casualties', outcome: 'No accountability; strike numbers tripled with reduced oversight' },
 { defendant: 'Ethiopian Forces (U.S.-backed)', charge: 'War crimes during 2006-2009 occupation of Somalia', outcome: 'Documented by Human Rights Watch; no prosecutions' },
 { defendant: 'Private Contractors', charge: 'Operating in Somalia without adequate oversight or accountability', outcome: 'Contractor activities remain largely classified' },
 { defendant: 'U.S. Military', charge: 'Failure to investigate or compensate civilian casualties', outcome: 'AFRICOM claimed zero civilian casualties for years despite contrary evidence' },
 { defendant: 'Al-Shabaab', charge: 'Terrorist attacks, use of child soldiers, forced displacement', outcome: 'Designated as terrorist organization; military operations have failed to defeat them after 17 years' },
 { defendant: 'U.S. Special Operations', charge: 'Conducting raids resulting in civilian deaths', outcome: 'Multiple incidents documented; investigations closed without accountability' },
 ],
 charges: [
 { statute: '2001 AUMF, Overly Broad Interpretation', description: 'Authorization to fight perpetrators of 9/11 stretched to cover al-Shabaab, which didn\'t exist on 9/11', count: '17+ years of military operations under a law passed for Afghanistan' },
 { statute: 'War Powers Resolution (50 U.S.C. § 1541)', description: 'Sustained military operations without Congressional declaration of war', count: 'No Congressional authorization specific to Somalia operations' },
 { statute: 'Geneva Convention (IV): Civilian Protection', description: 'Drone strikes killing civilians in non-combat areas', count: 'Amnesty International documented 21 civilians in 5 strikes alone; true toll unknown' },
 { statute: 'Executive Order 12333: Assassination Ban', description: 'Targeted killings of individuals without trial or due process', count: 'Hundreds of "targeted" strikes against alleged militants' },
 { statute: 'International Humanitarian Law, Proportionality', description: 'Strikes causing civilian harm disproportionate to military advantage', count: 'Strikes on homes, farms, and vehicles in civilian areas' },
 { statute: 'Rome Statute, Art. 8(2)(b)(i)', description: 'War crime of intentionally directing attacks against the civilian population', count: 'Multiple documented attacks on civilians with no militant connection' },
 { statute: 'U.S. Constitution, Due Process (5th Amendment)', description: 'Killing U.S. citizens abroad without trial or judicial review', count: 'At least one U.S. citizen killed in Somalia operations' },
 { statute: 'Customary International Law, Right to Life', description: 'Extrajudicial killing through drone strikes outside recognized armed conflict zones', count: 'Hundreds of strikes outside any declared battlefield' },
 ],
 coverup: [
 'AFRICOM claimed zero civilian casualties from airstrikes for years, even as Amnesty International and local journalists documented numerous civilian deaths.',
 'The U.S. relies on the 2001 AUMF to justify operations in Somalia, even though al-Shabaab didn\'t exist when that authorization was passed and has no operational ties to al-Qaeda\'s 9/11 plot.',
 'After the Battle of Mogadishu, the U.S. government promoted the war\'s narrative through the book and film "Black Hawk Down,"which minimized the estimated 1,000+ Somali civilian casualties.',
 'When Trump tripled the number of airstrikes in Somalia, he simultaneously rolled back Obama-era reporting requirements for civilian casualties.',
 'AFRICOM\'s internal investigation process (where the military investigates its own strikes) has consistently cleared itself of wrongdoing in nearly every case.',
 'The "repositioning" of troops under Trump was framed as a withdrawal, but forces were simply moved to neighboring countries and continued the same operations.',
 'Private military contractors operating in Somalia do so under classified authorities, making it impossible for oversight bodies to assess their activities.',
 'The true number of U.S. strikes in Somalia is likely higher than publicly acknowledged, as some operations are conducted under classified Title 50 CIA authority rather than military Title 10.',
 'Somalia has been called"the most dangerous place in the world to be a journalist,"ensuring minimal independent reporting on U.S. military operations.',
 ],
 sources: [
 { title: 'Amnesty International, The Hidden US War in Somalia', url: 'https://www.amnesty.org/en/latest/news/2019/03/usa-somalia-shroud-of-secrecy-around-civilian-deaths-masks-possible-war-crimes/', date: '2019' },
 { title: 'Airwars, U.S. Strikes in Somalia Tracking', url: 'https://airwars.org/conflict/us-forces-in-somalia/', date: '2023' },
 { title: 'The Bureau of Investigative Journalism, Somalia Drone Strikes', url: 'https://www.thebureauinvestigates.com/projects/drone-war/somalia', date: '2023' },
 { title: 'The Intercept, The Drone Papers', url: 'https://theintercept.com/drone-papers/', date: '2015' },
 { title: 'Human Rights Watch, Somalia Operations', url: 'https://www.hrw.org/africa/somalia', date: '2023' },
 { title: 'New York Times, U.S. Strikes in Somalia Escalate', url: 'https://www.nytimes.com/2020/03/10/us/politics/us-somalia-airstrikes.html', date: '2020' },
 { title: 'Congressional Research Service, U.S. Military Operations in Somalia', url: 'https://crsreports.congress.gov/product/pdf/IF/IF10155', date: '2023' },
 { title: 'Black Hawk Down, Mark Bowden', url: 'https://www.penguinrandomhouse.com/books/32670/black-hawk-down-by-mark-bowden/', date: '1999' },
 ],
};

export default function SomaliaPage() {
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
