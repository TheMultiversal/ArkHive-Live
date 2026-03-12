'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowLeft, AlertTriangle, Users, Calendar, FileText, ExternalLink, Scale, ShieldAlert, Skull } from 'lucide-react';
import GlitchText from '@/components/effects/GlitchText';

const investigation = {
 title: 'Grenada Invasion: Operation Urgent Fury',
 subtitle: 'The U.S. invaded a tiny island nation, imposed a total press blackout, and called it a rescue mission',
 severity: 'high',
 status: 'HISTORICAL, TEMPLATE FOR FUTURE INVASIONS',
 summary: 'On October 25, 1983, the United States invaded Grenada, a Caribbean island nation with a population of 91,000 and a military of fewer than 2,000. President Reagan justified the invasion as a rescue of American medical students, but the operation was planned well before any students were threatened. The real motivation was the overthrow of a leftist government and the destruction of a Cuban-built airport that the U.S. claimed was a Soviet military base (it was a civilian airport, later completed by a British firm). The invasion involved 7,600 U.S. troops, resulted in 19 American deaths, 45 Grenadian military and at least 24 civilian deaths, and was condemned by the UN General Assembly 108-9. The administration imposed an unprecedented total media blackout, preventing any journalist from covering the initial invasion, establishing a template for media control in future conflicts.',
 keyFigures: [
 { name: 'Ronald Reagan', role: 'President who ordered the invasion of Grenada', href: '/entities/individuals/ronald-reagan', status: 'Historical, Deceased' },
 { name: 'Caspar Weinberger', role: 'Secretary of Defense who oversaw the military operation', href: '/entities/individuals/caspar-weinberger', status: 'Historical, Deceased' },
 { name: 'George Shultz', role: 'Secretary of State who advocated for the invasion', href: '/entities/individuals/george-shultz', status: 'Historical, Deceased' },
 { name: 'General Norman Schwarzkopf', role: 'Deputy commander of the invasion force; later led Gulf War', href: '/entities/individuals/norman-schwarzkopf', status: 'Historical, Deceased' },
 { name: 'Admiral Joseph Metcalf III', role: 'Commander of the joint task force that executed the invasion', href: '/entities/individuals/joseph-metcalf', status: 'Historical, Deceased' },
 { name: 'Maurice Bishop', role: 'Grenadian Prime Minister assassinated in coup days before U.S. invasion', href: '/entities/individuals/maurice-bishop', status: 'Historical, Deceased' },
 { name: 'Bernard Coard', role: 'Deputy PM who led the coup against Bishop, giving U.S. a pretext', href: '/entities/individuals/bernard-coard', status: 'Historical' },
 { name: 'Hudson Austin', role: 'General who took power after Bishop\'s assassination', href: '/entities/individuals/hudson-austin', status: 'Historical' },
 { name: 'Eugenia Charles', role: 'PM of Dominica who formally "requested" U.S. intervention on behalf of OECS', href: '/entities/individuals/eugenia-charles', status: 'Historical, Deceased' },
 { name: 'Margaret Thatcher', role: 'UK Prime Minister who was not consulted and opposed the invasion of a Commonwealth nation', href: '/entities/individuals/margaret-thatcher', status: 'Historical, Deceased' },
 { name: 'Oliver North', role: 'NSC aide who helped plan the invasion; later central to Iran-Contra scandal', href: '/entities/individuals/oliver-north', status: 'Living' },
 ],
 timeline: [
 { date: 'March 1979', event: 'Maurice Bishop leads New Jewel Movement revolution in Grenada; establishes leftist government' },
 { date: '1981', event: 'Reagan administration begins covert economic destabilization campaign against Grenada' },
 { date: 'March 1983', event: 'Reagan gives televised speech displaying satellite photos of Grenadian airport, calling it a Soviet-Cuban military base' },
 { date: 'October 13, 1983', event: 'Hardline faction led by Bernard Coard stages coup against Bishop' },
 { date: 'October 19, 1983', event: 'Maurice Bishop and supporters executed by firing squad' },
 { date: 'October 20, 1983', event: 'Reagan convenes emergency planning group; invasion plans already in development' },
 { date: 'October 21, 1983', event: 'OECS formally "requests" U.S. military intervention at U.S. prompting' },
 { date: 'October 23, 1983', event: 'Beirut barracks bombing kills 241 U.S. Marines, heightens desire for a"win"' },
 { date: 'October 25, 1983', event: 'Operation Urgent Fury begins: 7,600 U.S. troops invade Grenada; total press blackout imposed' },
 { date: 'October 25, 1983', event: 'U.S. forces accidentally bomb a mental hospital, killing at least 18 patients' },
 { date: 'October 26, 1983', event: 'Pentagon bars all journalists from the island; Navy intercepts press boats' },
 { date: 'October 28, 1983', event: 'Major combat operations end; organized resistance collapses' },
 { date: 'November 2, 1983', event: 'UN General Assembly votes 108-9 condemning the invasion as a violation of international law' },
 { date: 'December 1983', event: 'Combat troops withdrawn; U.S.-backed interim government installed' },
 { date: '1984', event: 'Point Salines airport completed, by a British firm, for tourism, confirming it was never a military base' },
 { date: '1984', event: 'Sidle Commission established to address press access in military operations, creating"press pool"system' },
 { date: '2009', event: 'Reagan\'s National Security Decision Directive 110A declassified, revealing invasion was planned before Bishop\'s assassination' },
 ],
 legalOutcomes: [
 { defendant: 'United States', charge: 'Invasion of a sovereign nation in violation of the UN Charter', outcome: 'UN General Assembly condemned the invasion 108-9; U.S. ignored the resolution' },
 { defendant: 'United States', charge: 'Violation of the OAS Charter prohibiting intervention in member states\' affairs', outcome: 'OAS charter invoked but the "OECS request"was used as legal cover' },
 { defendant: 'U.S. Military', charge: 'Bombing of a civilian mental hospital', outcome: '18+ patients killed; no investigation or accountability' },
 { defendant: 'Reagan Administration', charge: 'Imposing total press blackout during a military operation', outcome: 'Led to Sidle Commission but established precedent for media restrictions in future conflicts' },
 { defendant: 'Bernard Coard et al.', charge: 'Murder of Maurice Bishop and supporters', outcome: 'Convicted and sentenced to death (commuted to life); released in 2009' },
 { defendant: 'U.S. Government', charge: 'False claims about the airport being a military base', outcome: 'Airport completed as civilian facility; no retraction of false claims' },
 { defendant: 'Pentagon', charge: 'Awarding 8,612 medals for an invasion involving 7,600 troops', outcome: 'More medals than troops deployed; widely ridiculed as propaganda' },
 { defendant: 'U.S. Military', charge: 'Civilian casualties from poorly coordinated military operations', outcome: 'At least 24 civilian deaths; no accountability or compensation' },
 ],
 charges: [
 { statute: 'UN Charter, Article 2(4)', description: 'Prohibition on use of force against the territorial integrity or political independence of any state', count: 'Full military invasion of a sovereign nation condemned by UN General Assembly 108-9' },
 { statute: 'OAS Charter, Articles 19 & 21', description: 'Prohibition on intervention by any state in the affairs of another; territory is inviolable', count: 'Invasion of an OAS member state without legitimate security justification' },
 { statute: 'U.S. Constitution, Art. I, Sec. 8', description: 'Only Congress may declare war', count: 'Invasion launched without Congressional declaration of war' },
 { statute: 'War Powers Resolution (50 U.S.C. § 1541)', description: 'President must report to Congress within 48 hours of committing forces to hostilities', count: 'Congress notified after invasion was already underway' },
 { statute: 'Geneva Convention (IV): Civilian Protection', description: 'Protection of civilian persons and property in time of war', count: 'Bombing of mental hospital killing 18+ patients; at least 24 total civilian deaths' },
 { statute: 'First Amendment, Freedom of the Press', description: 'Total press blackout prevented any independent reporting on the invasion', count: 'Unprecedented media blackout lasting several days; journalists forcibly prevented from reaching the island' },
 { statute: 'Hague Convention (IV): Art. 25', description: 'The attack or bombardment of undefended places is prohibited', count: 'Grenada had fewer than 2,000 military personnel; civilian areas bombed' },
 { statute: 'International Customary Law, Proportionality', description: 'Military force must be proportional to the threat', count: '7,600 troops and naval armada deployed against island nation of 91,000 with minimal military' },
 ],
 coverup: [
 'Reagan claimed the invasion was to rescue American medical students, but the students themselves stated they were never in danger. The medical school\'s chancellor spoke with the State Department before the invasion and was told there was no plan to evacuate.',
 'The administration imposed a total press blackout during the invasion, the first time since the Civil War that correspondents were completely barred from covering a U.S. military operation.',
 'Reagan displayed satellite photos claiming the Cuban-built airport was a Soviet military base. It was a civilian airport for tourism, later completed by the British firm Plessey.',
 'The Pentagon awarded 8,612 medals of valor for an operation involving 7,600 troops, a propaganda exercise that inflated the scale and difficulty of the invasion.',
 'Declassified documents revealed that invasion planning began before Maurice Bishop was killed, undermining the narrative that the coup triggered the intervention.',
 'The bombing of the Richmond Hill mental hospital, which killed at least 18 patients, received minimal media coverage due to the press blackout and was never officially investigated.',
 'The Beirut barracks bombing two days before the invasion killed 241 Marines, the Grenada invasion conveniently dominated news coverage and provided a "victory" narrative.',
 'The OECS "request" for intervention was organized and prompted by the United States itself, creating the fiction of a regional invitation.',
 ],
 sources: [
 { title: 'National Security Archive, Grenada Invasion Declassified', url: 'https://nsarchive2.gwu.edu/NSAEBB/NSAEBB432/', date: '2013' },
 { title: 'UN General Assembly Resolution 38/7: Condemning the Invasion', url: 'https://digitallibrary.un.org/record/60875', date: '1983' },
 { title: 'Operation Urgent Fury, Center for Military History', url: 'https://history.army.mil/html/bookshelves/resmat/urgent_fury/CMH_70-114-1.pdf', date: '2008' },
 { title: 'The Grenada Papers, Paul Seabury & Walter McDougall', url: 'https://www.goodreads.com/book/show/3437816-the-grenada-papers', date: '1984' },
 { title: 'New York Times, Grenada: Lessons for the Press', url: 'https://www.nytimes.com/1983/11/21/us/grenada-war-and-press.html', date: '1983' },
 { title: 'Washington Post, Medal Count Exceeds Troop Total', url: 'https://www.washingtonpost.com/archive/politics/1984/03/30/medals-for-grenada/', date: '1984' },
 { title: 'Urgent Fury: The Battle for Grenada, Mark Adkin', url: 'https://www.goodreads.com/book/show/1031744.Urgent_Fury', date: '1989' },
 { title: 'Congressional Research Service, The Grenada Invasion', url: 'https://crsreports.congress.gov/', date: '1983' },
 ],
};

export default function GrenadaInvasionPage() {
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
