'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowLeft, AlertTriangle, Users, Calendar, FileText, ExternalLink, Scale, ShieldAlert, Skull } from 'lucide-react';
import GlitchText from '@/components/effects/GlitchText';

const investigation = {
 title: 'Panama Invasion: Operation Just Cause',
 subtitle: 'The U.S. invaded a sovereign nation to arrest its own former CIA asset, destroying an entire neighborhood in the process',
 severity: 'critical',
 status: 'HISTORICAL, UNRESOLVED',
 summary: 'On December 20, 1989, the United States invaded Panama with 27,684 troops in Operation Just Cause, ostensibly to arrest Manuel Noriega on drug trafficking charges. Noriega had been a CIA asset for decades, paid millions for intelligence and cooperation with U.S. covert operations in Central America, including Iran-Contra. When Noriega became politically inconvenient, the U.S. launched the largest military operation since Vietnam, killing an estimated 500 to 4,000 Panamanian civilians. The El Chorillo neighborhood (home to the poorest Panamanians) was razed by aerial bombardment and fire. Mass graves were later discovered. The invasion was condemned by the UN General Assembly and the Organization of American States as a violation of international law. It served as a template for future U.S. interventions.',
 keyFigures: [
 { name: 'George H.W. Bush', role: 'President who ordered the invasion of Panama; former CIA Director who oversaw Noriega relationship', href: '/entities/individuals/george-hw-bush', status: 'Historical, Deceased' },
 { name: 'Manuel Noriega', role: 'Panamanian dictator and longtime CIA asset; arrested and imprisoned by the U.S.', href: '/entities/individuals/manuel-noriega', status: 'Historical, Deceased' },
 { name: 'Colin Powell', role: 'Chairman of the Joint Chiefs of Staff who planned and executed the invasion', href: '/entities/individuals/colin-powell', status: 'Historical, Deceased' },
 { name: 'Dick Cheney', role: 'Secretary of Defense who oversaw the invasion', href: '/entities/individuals/dick-cheney', status: 'Living' },
 { name: 'General Maxwell Thurman', role: 'SOUTHCOM Commander who directed military operations in Panama', href: '/entities/individuals/maxwell-thurman', status: 'Historical, Deceased' },
 { name: 'General Marc Cisneros', role: 'U.S. Army South Commander during the invasion', href: '/entities/individuals/marc-cisneros', status: 'Historical' },
 { name: 'William Casey', role: 'CIA Director who maintained and expanded the Noriega relationship in the 1980s', href: '/entities/individuals/william-casey', status: 'Historical, Deceased' },
 { name: 'Oliver North', role: 'NSC aide who coordinated with Noriega on Iran-Contra operations', href: '/entities/individuals/oliver-north', status: 'Living' },
 { name: 'Guillermo Endara', role: 'Panamanian opposition leader installed as president during the invasion', href: '/entities/individuals/guillermo-endara', status: 'Historical, Deceased' },
 { name: 'Elliott Abrams', role: 'Assistant Secretary of State who managed Central America policy and supported the invasion', href: '/entities/individuals/elliott-abrams', status: 'Living' },
 ],
 timeline: [
 { date: '1960s-1970s', event: 'Noriega begins working as a CIA informant while rising through Panama\'s military intelligence' },
 { date: '1976', event: 'CIA Director George H.W. Bush increases Noriega\'s CIA payments to $100,000/year' },
 { date: '1981', event: 'Noriega becomes de facto ruler of Panama; deepens relationship with CIA and DEA' },
 { date: '1983-1986', event: 'Noriega assists Oliver North with Iran-Contra logistics while simultaneously trafficking drugs' },
 { date: 'June 1987', event: 'Noriega\'s former chief of staff publicly exposes his drug trafficking and CIA ties' },
 { date: 'February 1988', event: 'U.S. federal grand jury indicts Noriega on drug trafficking charges' },
 { date: 'May 1989', event: 'Noriega annuls presidential election won by opposition candidate Guillermo Endara' },
 { date: 'October 1989', event: 'Failed coup attempt against Noriega; U.S. criticized for not supporting the plotters' },
 { date: 'December 15, 1989', event: 'Noriega\'s legislature declares Panama in a"state of war"with the United States' },
 { date: 'December 16, 1989', event: 'Off-duty U.S. Marine killed at a Panamanian checkpoint; used as casus belli' },
 { date: 'December 20, 1989', event: 'Operation Just Cause begins: 27,684 U.S. troops invade Panama; F-117 Stealth Fighter used for first time in combat' },
 { date: 'December 20-21, 1989', event: 'El Chorillo neighborhood bombed and burned; thousands of civilians displaced' },
 { date: 'December 24, 1989', event: 'Noriega takes refuge in the Vatican Embassy; U.S. military blasts rock music at the building' },
 { date: 'January 3, 1990', event: 'Noriega surrenders to U.S. forces; flown to Miami for trial' },
 { date: 'December 29, 1989', event: 'UN General Assembly votes 75-20 condemning the invasion as a violation of international law' },
 { date: 'April 1992', event: 'Noriega convicted in Miami on 8 counts of drug trafficking, racketeering, and money laundering' },
 { date: '2007', event: 'Noriega completes U.S. prison sentence; extradited to France for money laundering' },
 { date: '2017', event: 'Noriega dies in Panama at age 83; mass graves from invasion remain uninvestigated' },
 ],
 legalOutcomes: [
 { defendant: 'Manuel Noriega', charge: 'Drug trafficking, racketeering, money laundering', outcome: 'Convicted in 1992; sentenced to 40 years in U.S. prison' },
 { defendant: 'United States', charge: 'Invasion of a sovereign nation in violation of international law', outcome: 'Condemned by UN General Assembly 75-20 and OAS; no consequences' },
 { defendant: 'U.S. Military', charge: 'Destruction of El Chorillo and civilian casualties', outcome: 'Pentagon claimed 202 civilian deaths; independent estimates range from 500 to 4,000' },
 { defendant: 'George H.W. Bush', charge: 'Ordering an illegal invasion without imminent threat to national security', outcome: 'No legal consequences; invasion was politically popular domestically' },
 { defendant: 'CIA', charge: 'Maintaining Noriega as paid asset despite knowledge of drug trafficking', outcome: 'Relationship confirmed in Noriega trial but no CIA officials held accountable' },
 { defendant: 'U.S. Government', charge: 'Failure to investigate or compensate civilian casualties and mass graves', outcome: 'No investigation of mass graves; minimal compensation to displaced Panamanians' },
 { defendant: 'U.S. Military', charge: 'Use of excessive force in populated areas', outcome: 'El Chorillo residents never received full accounting or reparations' },
 { defendant: 'U.S. Government', charge: 'Violating Panama Canal Treaty neutrality provisions', outcome: 'Used Canal Zone bases to launch invasion; treaty violations ignored' },
 ],
 charges: [
 { statute: 'UN Charter, Article 2(4)', description: 'Prohibition on use of force against the territorial integrity or political independence of any state', count: 'Full-scale military invasion of a sovereign nation with 27,684 troops' },
 { statute: 'OAS Charter, Article 21', description: 'Territory of a state is inviolable; may not be the object of military occupation', count: 'UN General Assembly condemned invasion 75-20; OAS condemned it 20-1' },
 { statute: 'Geneva Convention (IV): Civilian Protection', description: 'Protection of civilian persons and property in time of war', count: '500-4,000 civilian deaths; El Chorillo neighborhood destroyed; 20,000+ displaced' },
 { statute: 'Hague Convention (IV): Art. 25', description: 'Prohibition on bombardment of undefended towns or dwellings', count: 'Aerial bombardment of residential El Chorillo neighborhood' },
 { statute: 'U.S. Constitution, Art. I, Sec. 8', description: 'Only Congress may declare war', count: 'No Congressional declaration of war; invasion ordered by executive alone' },
 { statute: 'Executive Order 12333: CIA Involvement', description: 'CIA maintained Noriega as asset despite evidence of drug trafficking and murder', count: 'Decades of payments totaling millions while Noriega trafficked drugs' },
 { statute: 'Protocol I, Art. 51: Proportionality', description: 'Attacks must not cause civilian damage disproportionate to military advantage', count: '27,684 troops deployed to arrest one man; entire neighborhoods destroyed' },
 { statute: 'International Humanitarian Law, Mass Graves', description: 'Obligation to account for the dead and allow investigation of burial sites', count: 'Mass graves discovered but never officially investigated or exhumed' },
 ],
 coverup: [
 'The Pentagon reported only 202 Panamanian civilian deaths. Independent investigations by human rights organizations estimated 500 to 4,000 deaths, bodies were disposed of in mass graves that were never investigated.',
 'The U.S. military imposed a press blackout during the initial phase of the invasion, preventing journalists from documenting the destruction of El Chorillo and civilian casualties.',
 'Noriega\'s decades-long relationship with the CIA (including payments while he was trafficking drugs) was minimized in official narratives. Bush\'s personal role as CIA Director who increased Noriega\'s payments was downplayed.',
 'The invasion was marketed as a"drug war"operation, but Noriega\'s drug trafficking was already known and tolerated by the U.S. government for years while he was useful for Cold War operations.',
 'El Chorillo, a poor predominantly Black neighborhood, was destroyed by fire and bombing. Residents were placed in temporary camps and many never received compensation for their destroyed homes.',
 'The Operation was given the name "Just Cause"as a deliberate propaganda effort to frame an illegal invasion as morally righteous.',
 'Mass graves containing victims of the invasion were discovered near U.S. military bases but were never formally investigated by either Panamanian or U.S. authorities.',
 'Noriega\'s involvement in Iran-Contra was downplayed during his trial, his defense that he was acting under CIA direction was undermined by classified information restrictions.',
 ],
 sources: [
 { title: 'The Invasion of Panama, Independent Commission of Inquiry', url: 'https://www.goodreads.com/book/show/2261453.The_U_S_Invasion_of_Panama', date: '1991' },
 { title: 'National Security Archive, Panama Invasion Declassified', url: 'https://nsarchive2.gwu.edu/NSAEBB/NSAEBB489/', date: '2014' },
 { title: 'Noriega: God\'s Favorite, New York Times Review', url: 'https://www.nytimes.com/2017/05/30/world/americas/manuel-antonio-noriega-dead-panama.html', date: '2017' },
 { title: 'Americas Watch, Human Rights in Panama After the Invasion', url: 'https://www.hrw.org/reports/1991/panama/', date: '1991' },
 { title: 'PBS Frontline, The Panama Deception', url: 'https://www.pbs.org/wgbh/frontline/documentary/drug-wars/', date: '2000' },
 { title: 'UN General Assembly Resolution 44/240: Condemning the Invasion', url: 'https://digitallibrary.un.org/record/82188', date: '1989' },
 { title: 'Washington Post, Panama: 10 Years Later', url: 'https://www.washingtonpost.com/archive/politics/1999/12/20/panama-10-years-later/', date: '1999' },
 { title: 'Just Cause: Marine Operations in Panama, USMC History Division', url: 'https://www.usmcu.edu/Research/Marine-Corps-History-Division/', date: '1996' },
 ],
};

export default function PanamaInvasionPage() {
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
