'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowLeft, AlertTriangle, Users, Calendar, FileText, ExternalLink, Scale, ShieldAlert, Skull } from 'lucide-react';
import GlitchText from '@/components/effects/GlitchText';

const investigation = {
 title: 'School of the Americas',
 subtitle: 'US Military Training Ground for Latin American Death Squad Leaders and Torturers',
 severity: 'critical',
 status: 'CONFIRMED, DECLASSIFIED MANUALS',
 summary: 'The Western Hemisphere Institute for Security Cooperation (WHINSEC), formerly known as the School of the Americas (SOA), is a US Department of Defense facility at Fort Benning (now Fort Moore), Georgia, that has trained over 83,000 Latin American military and police personnel since 1946. Graduates include some of the most notorious human rights violators in the Western Hemisphere, dictators, death squad leaders, and perpetrators of genocide. In 1996, the Pentagon declassified training manuals that explicitly taught torture, extortion, blackmail, and execution. SOA graduates were directly responsible for the El Mozote massacre (1,000+ killed), the assassination of Archbishop Oscar Romero, the murder of six Jesuit priests in El Salvador, and countless disappearances across Latin America. Despite cosmetic rebranding in 2001, the institution continues to operate.',
 keyFigures: [
 { name: 'Leopoldo Galtieri', role: 'Argentine dictator (SOA graduate), oversaw Dirty War disappearances', href: '/entities/individuals/leopoldo-galtieri', status: 'Deceased (2003)' },
 { name: 'Roberto D\'Aubuisson', role: 'Salvadoran death squad leader (SOA graduate), ordered assassination of Archbishop Romero', href: '/entities/individuals/roberto-daubuisson', status: 'Deceased (1992)' },
 { name: 'Hugo Banzer', role: 'Bolivian dictator (SOA graduate), oversaw political repression', href: '/entities/individuals/hugo-banzer', status: 'Deceased (2002)' },
 { name: 'Efrain Rios Montt', role: 'Guatemalan dictator (SOA graduate), convicted of genocide against Ixil Maya', href: '/entities/individuals/efrain-rios-montt', status: 'Deceased (2018)' },
 { name: 'Manuel Noriega', role: 'Panamanian dictator (SOA graduate), CIA asset turned drug trafficker', href: '/entities/individuals/manuel-noriega', status: 'Deceased (2017)' },
 { name: 'Vladimiro Montesinos', role: 'Peruvian intelligence chief (SOA graduate), oversaw death squads', href: '/entities/individuals/vladimiro-montesinos', status: 'Imprisoned' },
 { name: 'Hector Gramajo', role: 'Guatemalan Defense Minister (SOA graduate), responsible for Maya massacres', href: '/entities/individuals/hector-gramajo', status: 'Deceased (2004)' },
 { name: 'Domingo Monterrosa', role: 'Salvadoran colonel (SOA graduate), commanded El Mozote massacre', href: '/entities/individuals/domingo-monterrosa', status: 'Deceased (1984)' },
 { name: 'Oscar Romero', role: 'Archbishop of San Salvador, assassinated by SOA graduate Roberto D\'Aubuisson', href: '/entities/individuals/oscar-romero', status: 'Murdered (1980)' },
 { name: 'Roy Bourgeois', role: 'Catholic priest and founder of SOA Watch, leading campaign to close the school', href: '/entities/individuals/roy-bourgeois', status: 'Active' },
 { name: 'Joseph Kennedy II', role: 'Congressman who led legislative efforts to close School of the Americas', href: '/entities/individuals/joseph-kennedy-ii', status: 'Former Congressman' },
 ],
 timeline: [
 { date: '1946', event: 'School of the Americas established in Panama Canal Zone for Latin American military training' },
 { date: '1961', event: 'SOA curriculum expanded to include counterinsurgency following Cuban Revolution' },
 { date: '1973', event: 'SOA graduate Augusto Pinochet overthrows Chilean democracy in CIA-backed coup' },
 { date: '1976-1983', event: 'Argentine Dirty War: SOA graduates lead military junta that disappears 30,000 people' },
 { date: 'March 24, 1980', event: 'Archbishop Oscar Romero assassinated in El Salvador, ordered by SOA graduate D\'Aubuisson' },
 { date: 'December 1981', event: 'El Mozote massacre: SOA-trained Atlacatl Battalion murders 1,000+ civilians in El Salvador' },
 { date: '1982-1983', event: 'SOA graduate Rios Montt presides over genocide of Ixil Maya people in Guatemala' },
 { date: '1984', event: 'SOA relocated from Panama to Fort Benning, Georgia' },
 { date: 'November 1989', event: 'Six Jesuit priests, housekeeper, and her daughter murdered by SOA-trained soldiers in El Salvador' },
 { date: '1990', event: 'Father Roy Bourgeois founds SOA Watch to campaign for closure of the school' },
 { date: '1993', event: 'UN Truth Commission for El Salvador finds SOA graduates responsible for majority of atrocities' },
 { date: 'September 1996', event: 'Pentagon declassifies SOA training manuals revealing instruction in torture, extortion, execution' },
 { date: '1999', event: 'House votes 230-197 against amendment to cut SOA funding, margin narrows each year' },
 { date: 'January 17, 2001', event: 'SOA renamed to WHINSEC in cosmetic rebranding, curriculum largely unchanged' },
 { date: '2004', event: 'Investigation reveals WHINSEC continues training officers from countries with systemic human rights abuses' },
 { date: '2012', event: 'SOA Watch annual protest at Fort Benning draws over 10,000 demonstrators' },
 { date: '2017', event: 'Multiple Latin American countries suspend military training cooperation with WHINSEC' },
 ],
 legalOutcomes: [
 { defendant: 'Efrain Rios Montt', charge: 'Genocide and crimes against humanity (Guatemala)', outcome: 'Convicted of genocide in 2013, overturned on technicality, retrial incomplete' },
 { defendant: 'Leopoldo Galtieri', charge: 'Human rights violations during Argentine Dirty War', outcome: 'Arrested but died before trial completion' },
 { defendant: 'Manuel Noriega', charge: 'Drug trafficking, racketeering, money laundering', outcome: 'Convicted in US - 40 years (later reduced)' },
 { defendant: 'Vladimiro Montesinos', charge: 'Murder, corruption, arms trafficking (Peru)', outcome: 'Convicted - 25 years imprisonment' },
 { defendant: 'Hector Gramajo', charge: 'Torture and summary execution (Guatemalan civil war)', outcome: 'Found liable in US civil suit - $47.5 million damages' },
 { defendant: 'SOA/WHINSEC Institution', charge: 'Training foreign military in torture techniques', outcome: 'Rebranded but never closed, continues operating' },
 { defendant: 'US Government Officials', charge: 'Authorizing torture training and supporting death squads', outcome: 'No accountability, classified as foreign policy' },
 { defendant: 'Inocente Orlando Montano', charge: 'Jesuit massacre in El Salvador', outcome: 'Extradited to Spain, convicted in 2020' },
 ],
 charges: [
 { statute: '18 U.S.C. § 2441: War Crimes Act', description: 'US military training explicitly included techniques constituting war crimes under Geneva Conventions', count: '83,000+ military personnel trained over decades' },
 { statute: 'Genocide Convention', description: 'SOA graduates directly perpetrated genocide in Guatemala against indigenous Maya population', count: '200,000 killed in Guatemalan civil war' },
 { statute: '18 U.S.C. § 2340: Torture Statute', description: 'Declassified manuals demonstrated systematic instruction in torture techniques', count: 'Manuals used from 1960s through 1990s' },
 { statute: 'Leahy Law: 22 U.S.C. § 2378d', description: 'Continued training of foreign military units credibly implicated in gross human rights violations', count: 'Systematic violation across multiple countries' },
 { statute: '18 U.S.C. § 2: Aiding and Abetting', description: 'Training, equipping, and funding military units that committed massacres and disappearances', count: 'Thousands of documented atrocities by SOA graduates' },
 { statute: '18 U.S.C. § 1111: Murder (Conspiracy)', description: 'Training directly facilitated politically-motivated killings across Latin America', count: 'Hundreds of thousands killed by SOA-trained forces' },
 { statute: 'OAS American Convention on Human Rights', description: 'Systematic violations of right to life, personal liberty, and humane treatment', count: 'Continent-wide pattern of abuse' },
 { statute: '18 U.S.C. § 371: Conspiracy', description: 'Coordinated program between US military, CIA, and Latin American governments to suppress dissent through violence', count: 'Multi-decade, multi-country conspiracy' },
 ],
 coverup: [
 'The Pentagon kept SOA training manuals classified for decades, they were only released in 1996 after sustained pressure from SOA Watch and Congress',
 'Declassified manuals revealed explicit instruction in"neutralization"(assassination), torture techniques, blackmail, and targeting of civilian populations',
 'The 2001 renaming from SOA to WHINSEC was a deliberate cosmetic rebranding designed to deflect criticism without changing the institution\'s mission',
 'The US government has consistently refused to acknowledge the direct connection between SOA training and the systematic human rights abuses committed by graduates',
 'Military officials claimed SOA taught"human rights"while simultaneously graduating officers who went on to commit massacres, disappearances, and torture',
 'Congressional attempts to close the school were repeatedly blocked by Defense Department lobbying and claims of national security necessity',
 'The US actively obstructed truth commissions and war crimes investigations in Latin American countries where SOA graduates committed atrocities',
 'Graduates who committed atrocities while receiving US support were protected through diplomatic channels and intelligence sharing agreements',
 'SOA Watch protesters have been arrested and imprisoned for trespassing at Fort Benning while the institution they protested against continues to operate without consequence',
 ],
 sources: [
 { title: 'SOA Watch, Notorious SOA Graduates Database', url: 'https://soaw.org/notorious-soa-graduates', date: 'Ongoing' },
 { title: 'Pentagon Declassified SOA Training Manuals', url: 'https://nsarchive2.gwu.edu/nsa/archive/news/dodmanuals.htm', date: '1996' },
 { title: 'UN Truth Commission for El Salvador, Final Report', url: 'https://www.usip.org/sites/default/files/file/ElSalvador-Report.pdf', date: '1993' },
 { title: 'Lesley Gill, The School of the Americas: Military Training and Political Violence in the Americas', url: 'https://www.dukeupress.edu/the-school-of-the-americas', date: '2004' },
 { title: 'Guatemala: Memory of Silence, CEH Truth Commission Report', url: 'https://hrdag.org/wp-content/uploads/2013/01/CEHreport-english.pdf', date: '1999' },
 { title: 'National Security Archive, El Salvador Documentation Project', url: 'https://nsarchive2.gwu.edu/nsa/el_salvador/', date: 'Ongoing' },
 { title: 'Congressional Research Service, WHINSEC Background Report', url: 'https://sgp.fas.org/crs/natsec/R44140.pdf', date: '2015' },
 { title: 'Jack Nelson-Pallmeyer, School of Assassins', url: 'https://www.orbisbooks.com/school-of-assassins.html', date: '2001' },
 { title: 'Washington Post, School of the Americas Training Manuals', url: 'https://www.washingtonpost.com/archive/politics/1996/09/21/army-releases-training-manuals/', date: 'September 21, 1996' },
 ],
};

export default function SchoolOfAmericasPage() {
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
