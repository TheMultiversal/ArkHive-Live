'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowLeft, AlertTriangle, Users, Calendar, FileText, ExternalLink, Scale, ShieldAlert, Skull } from 'lucide-react';
import GlitchText from '@/components/effects/GlitchText';

const investigation = {
 title: 'Secret Bombing of Laos',
 subtitle: 'The most heavily bombed country in history: 270 million cluster bombs dropped on a neutral nation',
 severity: 'critical',
 status: 'HISTORICAL, ONGOING IMPACT',
 summary: 'From 1964 to 1973, the United States conducted a covert air campaign against Laos, dropping over 2 million tons of ordnance in 580,000 bombing missions, equivalent to a planeload of bombs every 8 minutes, 24 hours a day, for 9 years. The campaign was hidden from Congress and the American public. Laos, a neutral country, became the most heavily bombed nation per capita in history. An estimated 200,000 Laotian civilians were killed. Today, 80 million unexploded cluster bomblets still contaminate the countryside, killing and maiming approximately 50 Laotians every year. The U.S. has spent more in a single day of bombing than it has on total cleanup efforts.',
 keyFigures: [
 { name: 'Richard Nixon', role: 'President who massively escalated the secret bombing campaign', href: '/entities/individuals/richard-nixon', status: 'Historical, Deceased' },
 { name: 'Lyndon B. Johnson', role: 'President who initiated the covert bombing of Laos in 1964', href: '/entities/individuals/lyndon-b-johnson', status: 'Historical, Deceased' },
 { name: 'Henry Kissinger', role: 'National Security Advisor who oversaw escalation and concealment from Congress', href: '/entities/individuals/henry-kissinger', status: 'Historical, Deceased' },
 { name: 'William Sullivan', role: 'U.S. Ambassador to Laos who personally selected bombing targets', href: '/entities/individuals/william-sullivan', status: 'Historical' },
 { name: 'Curtis LeMay', role: 'Air Force Chief of Staff who advocated for unrestricted bombing', href: '/entities/individuals/curtis-lemay', status: 'Historical, Deceased' },
 { name: 'Vang Pao', role: 'Hmong general recruited by CIA to fight secret war in Laos', href: '/entities/individuals/vang-pao', status: 'Historical, Deceased' },
 { name: 'Ted Shackley', role: 'CIA Station Chief in Vientiane who ran covert operations', href: '/entities/individuals/ted-shackley', status: 'Historical, Deceased' },
 { name: 'Richard Secord', role: 'USAF officer who managed air operations in the secret war', href: '/entities/individuals/richard-secord', status: 'Historical' },
 { name: 'Stuart Symington', role: 'Senator who first exposed the secret war in 1969 hearings', href: '/entities/individuals/stuart-symington', status: 'Historical, Deceased' },
 { name: 'Fred Branfman', role: 'Aid worker who documented civilian bombing victims and broke the story', href: '/entities/individuals/fred-branfman', status: 'Historical, Deceased' },
 { name: 'John Hannah', role: 'USAID administrator whose agency provided cover for CIA operations', href: '/entities/individuals/john-hannah', status: 'Historical' },
 ],
 timeline: [
 { date: 'June 1964', event: 'U.S. begins covert reconnaissance flights over Laos under Operation Barrel Roll' },
 { date: 'December 1964', event: 'First bombing sorties launched against Pathet Lao positions along the Ho Chi Minh Trail' },
 { date: '1965', event: 'Operation Steel Tiger expands bombing to southern Laos targeting supply routes' },
 { date: '1966', event: 'CIA recruits 30,000 Hmong fighters under General Vang Pao for the \'secret army\'' },
 { date: '1967', event: 'Bombing intensifies; an average of 300 sorties per day over Laos' },
 { date: '1968', event: 'Johnson halts bombing of North Vietnam; redirects all air power to Laos' },
 { date: 'March 1969', event: 'Nixon secretly escalates bombing dramatically, sorties double in frequency' },
 { date: 'October 1969', event: 'Senator Symington holds closed-door hearings revealing the secret war' },
 { date: '1970', event: 'Fred Branfman publishes refugee testimonies exposing the bombing\'s civilian toll' },
 { date: '1971', event: 'Operation Lam Son 719: South Vietnamese invasion of Laos with massive U.S. air support' },
 { date: '1972', event: 'Peak bombing year: over 300,000 sorties flown, carpet bombing of the Plain of Jars' },
 { date: 'February 1973', event: 'Paris Peace Accords signed; U.S. continues bombing Laos until April' },
 { date: 'April 1973', event: 'Last U.S. bombing mission over Laos officially ends' },
 { date: '1975', event: 'Pathet Lao takes control of Laos; Hmong allies face persecution and flee' },
 { date: '1995', event: 'First international UXO clearance programs begin in Laos, decades after war ends' },
 { date: '2008', event: 'Convention on Cluster Munitions signed by 108 nations; U.S. refuses to sign' },
 { date: '2016', event: 'President Obama visits Laos, pledges $90 million for UXO removal, a fraction of bombing costs' },
 { date: '2023', event: 'An estimated 80 million unexploded bomblets remain in Laos; 50+ casualties per year continue' },
 ],
 legalOutcomes: [
 { defendant: 'United States Government', charge: 'Illegal bombing of a neutral sovereign nation', outcome: 'No accountability; war was kept secret from Congress and public' },
 { defendant: 'Richard Nixon', charge: 'Unauthorized escalation of bombing without Congressional approval', outcome: 'Never charged; resigned over Watergate instead' },
 { defendant: 'Henry Kissinger', charge: 'War crimes, directing bombing of civilian areas', outcome: 'Awarded Nobel Peace Prize in 1973; never prosecuted' },
 { defendant: 'CIA', charge: 'Running unauthorized paramilitary operations in Laos', outcome: 'Operations later acknowledged but no consequences' },
 { defendant: 'U.S. Air Force', charge: 'Indiscriminate carpet bombing of civilian villages', outcome: 'No personnel ever charged with war crimes' },
 { defendant: 'Cluster Munitions Manufacturers', charge: 'Producing weapons that continue to kill civilians 50 years later', outcome: 'Companies continue to operate and profit; U.S. still hasn\'t signed cluster bomb ban' },
 { defendant: 'U.S. Government', charge: 'Failure to adequately fund UXO clearance', outcome: '$90M pledged vs. $17M per day spent during the bombing campaign' },
 { defendant: 'William Sullivan', charge: 'Personally directing bombing strikes on civilian targets from the embassy', outcome: 'Promoted to other ambassadorial positions; never investigated' },
 ],
 charges: [
 { statute: 'Geneva Convention (IV): Art. 3 & 27', description: 'Protection of civilians in armed conflicts; prohibition on violence to life and person', count: '200,000+ Laotian civilians killed in bombing campaign' },
 { statute: 'Hague Convention (IV): Art. 25', description: 'Prohibition on bombardment of undefended towns, villages, and buildings', count: 'Thousands of villages completely destroyed across Laos' },
 { statute: 'UN Charter, Article 2(4)', description: 'Prohibition on the use of force against the territorial integrity of any state', count: 'Laos was a declared neutral nation; bombing was an act of war without declaration' },
 { statute: 'War Powers Resolution Violations', description: 'Conducting military operations without Congressional authorization or knowledge', count: '9-year covert bombing campaign hidden from Congress' },
 { statute: 'Convention on Cluster Munitions', description: 'Use of weapons designed to indiscriminately scatter submunitions over wide areas', count: '270 million cluster bomblets dropped; 80 million remain unexploded' },
 { statute: 'Customary International Humanitarian Law, Rule 14', description: 'Prohibition on indiscriminate attacks, proportionality principle', count: 'Carpet bombing of civilian areas with no military targets present' },
 { statute: 'Rome Statute, Art. 8(2)(b)(i)', description: 'War crime of intentionally directing attacks against the civilian population', count: 'Systematic targeting of villages on the Plain of Jars' },
 { statute: 'U.S. Constitution, Art. I, Sec. 8', description: 'Only Congress has the power to declare war', count: 'Entire campaign conducted without Congressional declaration or authorization' },
 ],
 coverup: [
 'The bombing campaign was classified and hidden from Congress for years. When asked, officials denied any U.S. military operations in Laos.',
 'Ambassador William Sullivan maintained the fiction that Laos was a neutral country while personally directing hundreds of bombing sorties from the U.S. Embassy.',
 'USAID operations in Laos served as cover for CIA paramilitary activities, corrupting humanitarian aid with covert war operations.',
 'When journalist Fred Branfman exposed the bombing in 1970, the U.S. government attempted to discredit him and suppress the story.',
 'The full extent of the bombing was classified for decades. Even after partial declassification, the total number of sorties exceeded what was officially acknowledged.',
 'The U.S. government has never formally apologized for the bombing of Laos or accepted legal responsibility for the ongoing UXO crisis.',
 'Textbooks rarely mention the bombing of Laos, making it one of the most underreported military campaigns in American history.',
 'The cluster bomb manufacturers\' lobby successfully blocked the U.S. from signing the Convention on Cluster Munitions, ensuring continued impunity.',
 'The Hmong allies who fought the CIA\'s secret war were abandoned after 1975 and faced persecution; many were denied refugee status for years.',
 ],
 sources: [
 { title: 'Voices from the Plain of Jars, Fred Branfman', url: 'https://uwpress.wisc.edu/books/5765.htm', date: '2013' },
 { title: 'Legacies of War, UXO Impact in Laos', url: 'https://legaciesofwar.org/', date: '2023' },
 { title: 'The Bombing of Laos, Al Jazeera Documentary', url: 'https://www.aljazeera.com/program/fault-lines/2015/10/21/laos-the-most-bombed-place-on-earth', date: '2015' },
 { title: 'National Security Archive, Secret War in Laos', url: 'https://nsarchive2.gwu.edu/NSAEBB/NSAEBB248/', date: '2008' },
 { title: 'A Great Place to Have a War, Joshua Kurlantzick', url: 'https://www.simonandschuster.com/books/A-Great-Place-to-Have-a-War/Joshua-Kurlantzick/9781451667882', date: '2017' },
 { title: 'Obama in Laos: \'America\'s Biggest Bombing Campaign\' - NYT', url: 'https://www.nytimes.com/2016/09/07/world/asia/obama-laos-bombs-visit.html', date: '2016' },
 { title: 'Cluster Munition Monitor Report', url: 'https://www.the-monitor.org/en-gb/reports/2023/cluster-munition-monitor-2023.aspx', date: '2023' },
 { title: 'The Ravens: Pilots of the Secret War, Christopher Robbins', url: 'https://www.goodreads.com/book/show/404882.The_Ravens', date: '1987' },
 ],
};

export default function LaosSecretBombingPage() {
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
