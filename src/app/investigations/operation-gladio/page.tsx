'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowLeft, AlertTriangle, Users, Calendar, FileText, ExternalLink, Scale, ShieldAlert, Skull } from 'lucide-react';
import GlitchText from '@/components/effects/GlitchText';

const investigation = {
 title: 'Operation Gladio',
 subtitle: 'NATO\'s Secret Armies and False Flag Terror Campaign Across Europe',
 severity: 'critical',
 status: 'CONFIRMED, PARLIAMENTARY INVESTIGATIONS',
 summary: 'Operation Gladio was a clandestine NATO"stay-behind"operation established during the Cold War to counter potential Soviet invasion of Western Europe. However, the secret armies were co-opted to conduct false flag terrorist attacks, manipulate elections, and suppress left-wing political movements across Europe. The most devastating attack was the 1980 Bologna railway station bombing that killed 85 people. Italian Prime Minister Giulio Andreotti officially acknowledged Gladio\'s existence in 1990, triggering parliamentary investigations across Europe that confirmed secret armies had operated in at least 14 NATO countries. The program demonstrated how democratic governments weaponized terrorism against their own citizens.',
 keyFigures: [
 { name: 'Giulio Andreotti', role: 'Italian Prime Minister who confirmed Gladio\'s existence in 1990', href: '/entities/individuals/giulio-andreotti', status: 'Deceased (2013)' },
 { name: 'Vincenzo Vinciguerra', role: 'Far-right terrorist who confessed to Gladio-linked Peteano bombing', href: '/entities/individuals/vincenzo-vinciguerra', status: 'Imprisoned' },
 { name: 'Licio Gelli', role: 'Grand Master of P2 Masonic Lodge, Gladio coordinator in Italy', href: '/entities/individuals/licio-gelli', status: 'Deceased (2015)' },
 { name: 'Stefano Delle Chiaie', role: 'Leader of Avanguardia Nazionale, linked to Bologna bombing', href: '/entities/individuals/stefano-delle-chiaie', status: 'Deceased (2019)' },
 { name: 'James Angleton', role: 'CIA counterintelligence chief, architect of Italian stay-behind networks', href: '/entities/individuals/james-angleton', status: 'Deceased (1987)' },
 { name: 'William Colby', role: 'CIA Director, oversaw Gladio funding and operations', href: '/entities/individuals/william-colby', status: 'Deceased (1996)' },
 { name: 'Vernon Walters', role: 'Deputy CIA Director, NATO Ambassador, Gladio liaison', href: '/entities/individuals/vernon-walters', status: 'Deceased (2002)' },
 { name: 'Aldo Moro', role: 'Italian PM kidnapped and murdered, Gladio linked to failed rescue', href: '/entities/individuals/aldo-moro', status: 'Murdered (1978)' },
 { name: 'Giuseppe Santovito', role: 'Head of SISMI (Italian military intelligence), P2 member', href: '/entities/individuals/giuseppe-santovito', status: 'Deceased' },
 { name: 'Felice Casson', role: 'Italian judge who uncovered Gladio through Peteano bombing investigation', href: '/entities/individuals/felice-casson', status: 'Active' },
 { name: 'Daniele Ganser', role: 'Swiss historian who documented Gladio across Europe', href: '/entities/individuals/daniele-ganser', status: 'Active' },
 ],
 timeline: [
 { date: '1947-1948', event: 'CIA begins establishing stay-behind networks in Italy to counter communist electoral gains' },
 { date: '1951', event: 'NATO\'s Clandestine Planning Committee (CPC) formalizes stay-behind army coordination' },
 { date: '1956', event: 'Allied Clandestine Committee (ACC) established to manage Gladio operations across NATO' },
 { date: '1964', event: 'Piano Solo, Italian military coup plan linked to Gladio networks, later exposed' },
 { date: 'December 1969', event: 'Piazza Fontana bombing in Milan kills 17 - initially blamed on anarchists, later linked to far-right Gladio assets' },
 { date: '1972', event: 'Peteano car bombing carried out by Vincenzo Vinciguerra, later confesses Gladio involvement' },
 { date: 'May 1974', event: 'Piazza della Loggia bombing in Brescia kills 8 at anti-fascist rally' },
 { date: 'August 1974', event: 'Italicus Express bombing kills 12 passengers on train' },
 { date: 'March 1978', event: 'Aldo Moro kidnapped by Red Brigades, alleged Gladio interference in rescue efforts' },
 { date: 'August 2, 1980', event: 'Bologna railway station bombing kills 85, injures 200+ - deadliest Gladio-linked attack' },
 { date: '1981', event: 'P2 Masonic Lodge exposed, membership list reveals 962 members including military, intelligence, and politicians' },
 { date: 'October 24, 1990', event: 'Prime Minister Andreotti confirms Gladio\'s existence before Italian Senate' },
 { date: 'November 1990', event: 'European Parliament passes resolution condemning Gladio operations' },
 { date: '1990-1992', event: 'Parliamentary investigations launched in Belgium, Switzerland, Italy, and other NATO countries' },
 { date: '1995', event: 'Belgian parliamentary commission confirms existence of secret army network' },
 { date: '2000', event: 'Italian parliamentary commission concludes Gladio was responsible for strategy of tension' },
 { date: '2005', event: 'Daniele Ganser publishes comprehensive academic study documenting Gladio\'s NATO Secret Armies' },
 ],
 legalOutcomes: [
 { defendant: 'Valerio Fioravanti & Francesca Mambro', charge: 'Bologna station bombing (85 killed)', outcome: 'Convicted, life imprisonment' },
 { defendant: 'Licio Gelli', charge: 'Obstruction of Bologna bombing investigation', outcome: 'Convicted - 10 years imprisonment' },
 { defendant: 'Vincenzo Vinciguerra', charge: 'Peteano car bombing (3 killed)', outcome: 'Convicted, life imprisonment (confessed Gladio links)' },
 { defendant: 'Pietro Musumeci & Giuseppe Belmonte', charge: 'Diverting Bologna bombing investigation', outcome: 'Convicted of planting false evidence' },
 { defendant: 'Giulio Andreotti', charge: 'Association with Mafia (related investigation)', outcome: 'Acquitted after lengthy trial' },
 { defendant: 'SISMI Officers', charge: 'Concealing Gladio weapons caches', outcome: 'Minimal accountability, agency restructured' },
 { defendant: 'CIA/NATO Officials', charge: 'Funding and coordinating secret terrorist networks', outcome: 'No prosecutions, sovereign immunity claimed' },
 { defendant: 'Gilberto Cavallini', charge: 'Bologna bombing complicity', outcome: 'Convicted in 2020 - life imprisonment' },
 ],
 charges: [
 { statute: 'Italian Penal Code Art. 285 - Devastation and Massacre', description: 'Multiple bombing attacks targeting civilians in public spaces', count: '85 killed in Bologna alone, 150+ total across attacks' },
 { statute: 'Italian Penal Code Art. 270bis, Subversive Association', description: 'Organization of clandestine armed groups to subvert democratic order', count: 'Networks in 14+ NATO countries' },
 { statute: 'Italian Penal Code Art. 289 - Attack on Constitutional Organs', description: 'Interference with democratic governance through terrorism and coup plotting', count: 'Multiple instances (Piano Solo, strategy of tension)' },
 { statute: 'European Convention on Human Rights, Art. 2', description: 'Violation of right to life through state-sponsored terrorism', count: 'Hundreds of victims across Europe' },
 { statute: 'Italian Penal Code Art. 378 - Aiding After the Fact', description: 'Systematic diversion of investigations to protect perpetrators', count: 'Decades of cover-up across multiple agencies' },
 { statute: 'NATO Treaty Violation', description: 'Subversion of defensive alliance for domestic political manipulation', count: 'Systemic violation across all participating nations' },
 { statute: 'Italian Constitution Art. 18', description: 'Secret armed organizations prohibited under Italian Constitution', count: 'Gladio operated secretly for 40+ years' },
 { statute: '18 U.S.C. § 2331 - International Terrorism', description: 'Violent acts intended to intimidate civilian populations and influence government policy', count: 'Program-wide systematic practice' },
 ],
 coverup: [
 'NATO and CIA denied Gladio\'s existence for over 40 years despite overwhelming evidence of secret army networks across Europe',
 'Italian military intelligence (SISMI) systematically diverted bombing investigations to blame left-wing groups instead of far-right Gladio assets',
 'The P2 Masonic Lodge served as a shadow coordination network, its discovery revealed 962 members embedded throughout Italian power structures',
 'CIA destroyed or classified documents related to Gladio operations, making comprehensive accountability impossible',
 'Multiple investigations were sabotaged by intelligence services planting false evidence to protect perpetrators',
 'Witnesses and investigators were intimidated, threatened, or killed, Judge Giovanni Falcone murdered in 1992 while pursuing related investigations',
 'The strategy of tension deliberately created chaos to justify authoritarian crackdowns and prevent left-wing electoral victories',
 'European Parliament\'s 1990 resolution condemning Gladio was largely ignored by member state governments who refused further investigation',
 'NATO Secretary General Manfred Wörner acknowledged stay-behind armies existed but refused to provide details, citing alliance security',
 'Bologna bombing investigations took 40 years to reach final convictions, with intelligence agencies obstructing at every stage',
 ],
 sources: [
 { title: 'Daniele Ganser, NATO\'s Secret Armies: Operation Gladio and Terrorism in Western Europe', url: 'https://www.routledge.com/NATOs-Secret-Armies-Operation-Gladio-and-Terrorism-in-Western-Europe/Ganser/p/book/9780714685007', date: '2005' },
 { title: 'European Parliament Resolution on Gladio', url: 'https://www.europarl.europa.eu/sides/getDoc.do?pubRef=-//EP//TEXT+MOTION+B3-1990-2021+0+DOC+XML+V0//EN', date: 'November 22, 1990' },
 { title: 'Italian Senate Commission on Terrorism, Final Report', url: 'https://www.senato.it/leg/13/BGT/Schede/Commissioni/0-00053.htm', date: '2000' },
 { title: 'BBC Timewatch: Operation Gladio (Documentary)', url: 'https://www.bbc.co.uk/programmes/p00d0fvz', date: '1992' },
 { title: 'Philip Willan, Puppetmasters: The Political Use of Terrorism in Italy', url: 'https://www.amazon.com/Puppetmasters-Political-Use-Terrorism-Italy/dp/0595246974', date: '2002' },
 { title: 'Stuart Christie, Stefano delle Chiaie: Portrait of a Black Terrorist', url: 'https://archive.org/details/StefanoDelleChiaie', date: '1984' },
 { title: 'Swiss Federal Council, Report on Swiss Stay-Behind Organization P-26', url: 'https://www.admin.ch/gov/en/start/documentation.html', date: '1990' },
 { title: 'Richard Cottrell, Gladio: NATO\'s Dagger at the Heart of Europe', url: 'https://www.amazon.com/GLADIO-NATOs-Dagger-Heart-Europe/dp/1615776583', date: '2012' },
 ],
};

export default function OperationGladioPage() {
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
