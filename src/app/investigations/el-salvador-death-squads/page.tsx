'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowLeft, AlertTriangle, Users, Calendar, FileText, ExternalLink, Scale, ShieldAlert, Skull } from 'lucide-react';
import GlitchText from '@/components/effects/GlitchText';

const investigation = {
 title: 'El Salvador Death Squads',
 subtitle: 'The US Funded, Armed, and Trained Salvadoran Military That Murdered 75,000+ Civilians',
 severity: 'critical',
 status: 'HISTORICALLY CONFIRMED',
 summary: 'During El Salvador\'s civil war (1979-1992), the United States provided over $6 billion in military and economic aid to a Salvadoran government whose security forces and allied death squads murdered approximately 75,000 civilians. US-trained soldiers carried out the assassination of Archbishop Óscar Romero, the massacre of over 800 villagers at El Mozote, the murder of six Jesuit priests, and the rape and murder of four American churchwomen. Graduates of the US Army School of the Americas were responsible for the worst atrocities. The Reagan administration systematically covered up these massacres, with officials lying to Congress and certifying El Salvador\'s human rights progress while death squads operated with impunity.',
 keyFigures: [
 { name: 'Roberto D\'Aubuisson', role: 'Founder of ARENA party, organizer of death squads, ordered assassination of Archbishop Romero', href: '/entities/individuals/roberto-daubuisson', status: 'Deceased (1992)' },
 { name: 'Óscar Romero', role: 'Archbishop of San Salvador assassinated while saying Mass for criticizing military violence', href: '/entities/individuals/oscar-romero', status: 'Assassinated (1980), canonized 2018' },
 { name: 'Ronald Reagan', role: 'US President who escalated military aid despite evidence of death squad activity', href: '/entities/individuals/ronald-reagan', status: 'Deceased (2004)' },
 { name: 'Elliott Abrams', role: 'Assistant Secretary of State who denied El Mozote massacre and certified human rights improvements', href: '/entities/individuals/elliott-abrams', status: 'Active' },
 { name: 'José Napoleón Duarte', role: 'President of El Salvador (1984-1989) who served as democratic facade while military controlled operations', href: '/entities/individuals/jose-napoleon-duarte', status: 'Deceased (1990)' },
 { name: 'Domingo Monterrosa', role: 'Commander of Atlacatl Battalion responsible for El Mozote massacre', href: '/entities/individuals/domingo-monterrosa', status: 'Deceased (1984)' },
 { name: 'Thomas Enders', role: 'Assistant Secretary of State who oversaw El Salvador policy and suppressed massacre reports', href: '/entities/individuals/thomas-enders', status: 'Deceased (1996)' },
 { name: 'Jeane Kirkpatrick', role: 'US Ambassador to UN who defended Salvadoran junta and downplayed churchwoman murders', href: '/entities/individuals/jeane-kirkpatrick', status: 'Deceased (2006)' },
 { name: 'Alexander Haig', role: 'Secretary of State who suggested murdered American churchwomen may have been running a roadblock', href: '/entities/individuals/alexander-haig', status: 'Deceased (2010)' },
 { name: 'Alfredo Cristiani', role: 'President during Jesuit massacre; ARENA party leader', href: '/entities/individuals/alfredo-cristiani', status: 'Active' },
 { name: 'Guillermo García', role: 'Defense Minister (1979-1983) who oversaw military operations during worst period of violence', href: '/entities/individuals/guillermo-garcia-sal', status: 'Active (deported from US 2015)' },
 { name: 'Rufina Amaya', role: 'Sole adult survivor of El Mozote massacre who testified about military atrocities', href: '/entities/individuals/rufina-amaya', status: 'Deceased (2007)' },
 { name: 'Raymond Bonner', role: 'New York Times journalist who first reported El Mozote massacre; attacked by Reagan administration', href: '/entities/individuals/raymond-bonner', status: 'Active' },
 ],
 timeline: [
 { date: 'October 1979', event: 'Military coup installs reformist junta; violence escalates as right-wing death squads resist reforms' },
 { date: 'March 1980', event: 'Archbishop Óscar Romero assassinated while saying Mass, one day after pleading with soldiers to stop killing' },
 { date: 'May 1980', event: 'Río Sumpul massacre: Salvadoran military kills 600+ fleeing civilians at Honduran border' },
 { date: 'December 1980', event: 'Four American churchwomen (Maura Clarke, Ita Ford, Dorothy Kazel, Jean Donovan) raped and murdered by National Guard members' },
 { date: 'January 1981', event: 'Reagan takes office, dramatically increases military aid; certifies El Salvador making human rights progress' },
 { date: 'December 1981', event: 'El Mozote massacre: Atlacatl Battalion (US-trained) massacres 800+ men, women, and children in Morazán province' },
 { date: 'January 1982', event: 'Raymond Bonner reports El Mozote in NYT and Alma Guillermoprieto in Washington Post; Reagan administration calls it guerrilla propaganda' },
 { date: 'February 1982', event: 'Wall Street Journal editorial attacks Bonner; he is reassigned from Central America under administration pressure' },
 { date: '1983', event: 'VP George H.W. Bush visits El Salvador demanding"death squad activity must end"but military aid continues' },
 { date: '1984', event: 'José Napoleón Duarte elected president with US backing, providing democratic cover for continued military operations' },
 { date: '1984', event: 'Four National Guard members convicted for churchwomen murders; commanders who ordered killings never charged' },
 { date: '1986', event: 'Tutela Legal reports over 40,000 civilian deaths by security forces and death squads since 1979' },
 { date: 'November 1989', event: 'FMLN launches major offensive in San Salvador; military responds with aerial bombing of civilian neighborhoods' },
 { date: 'November 1989', event: 'Six Jesuit priests, housekeeper, and her daughter murdered by Atlacatl Battalion soldiers at Universidad Centroamericana' },
 { date: '1990', event: 'US Congress cuts military aid after Jesuit murders can no longer be covered up' },
 { date: 'January 1992', event: 'Chapultepec Peace Accords signed ending 12-year civil war; 75,000 dead, 8,000 disappeared' },
 { date: 'March 1993', event: 'UN Truth Commission finds 85% of violence attributed to government forces and allied death squads' },
 { date: 'March 1993', event: 'Salvadoran legislature passes blanket amnesty law five days after Truth Commission report' },
 { date: '2016', event: 'El Salvador Supreme Court strikes down 1993 amnesty law, reopening possibility of prosecutions' },
 { date: '2020', event: 'Ex-colonel convicted for 1981 El Mozote massacre, first domestic conviction for a civil war atrocity' },
 ],
 legalOutcomes: [
 { defendant: 'Roberto D\'Aubuisson', charge: 'Ordering assassination of Archbishop Romero', outcome: 'Named by UN Truth Commission; died before prosecution in 1992' },
 { defendant: 'Four National Guard members', charge: 'Murder of four American churchwomen', outcome: 'Convicted in 1984; commanding officers never prosecuted' },
 { defendant: 'Inocente Orlando Montano', charge: 'Murder of five Jesuit priests (Spanish citizens)', outcome: 'Convicted in Spain in 2020, sentenced to 133 years (26 years 8 months per murder)' },
 { defendant: 'Salvadoran military', charge: 'El Mozote massacre, murder of 800+ civilians', outcome: 'Protected by 1993 amnesty; first conviction in 2020 after amnesty struck down' },
 { defendant: 'Guillermo García', charge: 'Crimes against humanity as Defense Minister', outcome: 'Found liable in US civil court 2006; deported from US 2015' },
 { defendant: 'José Guillermo García and Carlos Eugenio Vides Casanova', charge: 'Torture and extrajudicial killings', outcome: 'Found liable under Torture Victim Protection Act in US courts' },
 { defendant: 'Elliott Abrams', charge: 'Withholding information from Congress about Iran-Contra', outcome: 'Pleaded guilty in 1991; pardoned by George H.W. Bush in 1992' },
 { defendant: 'Salvadoran State', charge: 'Systematic human rights violations', outcome: 'Inter-American Court found state responsible for El Mozote massacre in 2012; ordered reparations' },
 ],
 charges: [
 { statute: 'Crimes Against Humanity, Murder', description: 'Systematic extrajudicial killings of civilians by government security forces and death squads', count: '75,000+ killed during 1979-1992 civil war; 85% attributed to government forces' },
 { statute: 'Crimes Against Humanity, Persecution', description: 'Targeting of suspected leftists, trade unionists, religious workers, students, and peasant organizers', count: 'Thousands detained, tortured, and killed for political beliefs' },
 { statute: 'War Crimes, Willful Killing of Protected Persons', description: 'Deliberate massacre of non-combatant civilians including women and children', count: 'El Mozote: 800+; Río Sumpul: 600+; dozens of other documented massacres' },
 { statute: 'War Crimes, Attacking Persons Hors de Combat', description: 'Assassination of Archbishop Romero while conducting religious services', count: 'Direct assassination of religious figure exercising protected status' },
 { statute: 'Crimes Against Humanity, Enforced Disappearance', description: 'Systematic abduction and disappearance of political opponents by security forces', count: '8,000+ people disappeared during the civil war' },
 { statute: 'Crimes Against Humanity, Rape and Sexual Violence', description: 'Rape of four American churchwomen and systematic sexual violence against detained civilians', count: 'Widespread; documented by UN Truth Commission' },
 { statute: '18 U.S.C. § 1001: False Statements to Congress', description: 'Reagan administration officials lied to Congress about massacre evidence to maintain military aid certifications', count: 'Multiple false certifications of human rights progress' },
 { statute: 'Leahy Law Violations', description: 'US provision of military aid to security forces credibly accused of gross human rights violations', count: '$6 billion in aid provided despite documented death squad activity' },
 { statute: 'Obstruction of Justice, Destruction of Evidence', description: 'US and Salvadoran officials destroyed or suppressed evidence of massacres including El Mozote', count: 'Systematic classification and suppression of intelligence reports' },
 ],
 coverup: [
 'Reagan administration officials, particularly Elliott Abrams and Thomas Enders, systematically denied the El Mozote massacre despite eyewitness accounts and journalist reports.',
 'Secretary of State Alexander Haig suggested the four murdered American churchwomen may have been trying to run a roadblock, blaming the victims rather than the National Guard perpetrators.',
 'Ambassador Jeane Kirkpatrick called the murdered churchwomen"not just nuns, they were political activists"to diminish public outrage.',
 'The Wall Street Journal published an editorial attacking journalist Raymond Bonner\'s credibility after his El Mozote reporting; he was reassigned from Central America.',
 'The Reagan administration continued certifying El Salvador\'s human rights improvements to Congress even as death squad killings continued unabated, a legal requirement for continued military aid.',
 'After the Jesuit murders in 1989, Salvadoran military initially blamed the FMLN guerrillas; US intelligence knew within days the military was responsible but delayed releasing information.',
 'The 1993 amnesty law was rushed through the Salvadoran legislature just five days after the UN Truth Commission report to prevent prosecutions.',
 'CIA maintained close relationships with Salvadoran military and intelligence officials known to be running death squads, including Roberto D\'Aubuisson, while publicly denying such connections.',
 'The State Department pressured the New York Times to reassign Raymond Bonner, the reporter who exposed the El Mozote massacre, effectively punishing truthful journalism.',
 ],
 sources: [
 { title: 'From Madness to Hope: The 12-Year War in El Salvador, UN Truth Commission Report', url: 'https://www.usip.org/sites/default/files/file/ElSalvador-Report.pdf', date: '1993' },
 { title: 'The Massacre at El Mozote, Mark Danner', url: 'https://www.markdanner.com/books/the-massacre-at-el-mozote', date: '1994' },
 { title: 'El Mozote Case, Inter-American Court of Human Rights', url: 'https://www.corteidh.or.cr/docs/casos/articulos/seriec_252_ing.pdf', date: '2012' },
 { title: 'Romero Assassination Investigation, National Security Archive', url: 'https://nsarchive2.gwu.edu/NSAEBB/NSAEBB339/', date: '2010' },
 { title: 'El Salvador: War, Peace, and Human Rights, National Security Archive', url: 'https://nsarchive.gwu.edu/project/el-salvador-project', date: 'Ongoing' },
 { title: 'Inocente Orlando Montano Convicted for Jesuit Murders, BBC News', url: 'https://www.bbc.com/news/world-latin-america-54075067', date: 'September 2020' },
 { title: 'School of the Americas and El Salvador, SOA Watch', url: 'https://soaw.org/home', date: 'Ongoing' },
 { title: 'The Churchwomen Murders, Maryknoll Sisters Archive', url: 'https://www.maryknollsisters.org/who-we-are/our-history/the-martyred-sisters/', date: '1980' },
 { title: 'Death Squads in El Salvador, Americas Watch Report', url: 'https://www.hrw.org/reports/1991/elsalvador/', date: '1991' },
 ],
};

export default function ElSalvadorDeathSquadsPage() {
 return (
 <div className="min-h-screen pt-20 lg:pt-24 pb-16">
 <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
 <Link href="/investigations"className="inline-flex items-center gap-2 text-zinc-400 hover:text-blood-500 transition-colors mb-6 pt-4"><ArrowLeft className="w-4 h-4"/>Back to Investigations</Link>
 <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="border-2 border-blood-800/60 bg-[rgba(0,6,20,0.90)] p-6 lg:p-8 mb-8">
 <div className="flex items-center gap-3 mb-4"><span className="px-3 py-1 text-xs font-bold uppercase border border-blood-500/30 bg-blood-500/20 text-blood-400">{investigation.severity}</span><span className="px-3 py-1 text-xs font-bold uppercase border border-zinc-500/30 bg-zinc-500/20 text-zinc-400">{investigation.status}</span></div>
 <h1 className="text-3xl lg:text-4xl font-black glass-text uppercase tracking-wider mb-2"><GlitchText text={investigation.title} /></h1>
 <p className="text-lg text-blood-500 font-bold mb-4">{investigation.subtitle}</p>
 <p className="text-zinc-400 leading-relaxed">{investigation.summary}</p>
 </motion.div>
 <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.15 }} className="glass-card p-6 mb-8 border-l-4 border-blood-600">
 <h2 className="text-xl font-bold glass-text uppercase tracking-wider mb-4 flex items-center gap-2"><ShieldAlert className="w-5 h-5 text-blood-500"/>The Cover-Up</h2>
 <div className="space-y-3">{investigation.coverup.map((item, idx) => (<div key={idx} className="p-3 bg-blood-950/20 border border-blood-500/30"><p className="text-sm text-zinc-300">{item}</p></div>))}</div>
 </motion.div>
 <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
 <div className="lg:col-span-2 space-y-8">
 <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }} className="glass-card p-6">
 <h2 className="text-xl font-bold glass-text uppercase tracking-wider mb-4 flex items-center gap-2"><Users className="w-5 h-5 text-blood-500"/>Key Figures</h2>
 <div className="space-y-3">{investigation.keyFigures.map((figure, idx) => (<div key={idx} className="flex items-start justify-between p-3 bg-[rgba(0,10,28,0.82)] border border-[rgba(80,180,255,0.15)]"><div className="flex-1">{figure.href ? (<Link href={figure.href} className="font-bold text-blood-400 hover:text-blood-300 transition-colors">{figure.name}</Link>) : (<span className="font-bold glass-text">{figure.name}</span>)}<p className="text-sm text-zinc-400 mt-1">{figure.role}</p></div><span className="text-xs px-2 py-1 bg-[rgba(0,12,32,0.85)] text-zinc-400 border border-[rgba(60,160,255,0.18)] whitespace-nowrap ml-2">{figure.status}</span></div>))}</div>
 </motion.div>
 <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }} className="glass-card p-6">
 <h2 className="text-xl font-bold glass-text uppercase tracking-wider mb-4 flex items-center gap-2"><Scale className="w-5 h-5 text-blood-500"/>Applicable Charges &amp; Statutes</h2>
 <div className="space-y-3">{investigation.charges.map((charge, idx) => (<div key={idx} className="p-4 bg-[rgba(0,10,28,0.82)] border border-[rgba(80,180,255,0.15)]"><p className="font-bold text-blood-400 text-sm font-mono">{charge.statute}</p><p className="text-sm text-zinc-300 mt-1">{charge.description}</p><p className="text-xs text-blood-400 mt-1">{charge.count}</p></div>))}</div>
 </motion.div>
 </div>
 <div className="space-y-6">
 <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} className="glass-card p-6">
 <h3 className="text-lg font-bold glass-text uppercase tracking-wider mb-4 flex items-center gap-2"><Calendar className="w-4 h-4 text-blood-500"/>Timeline</h3>
 <div className="space-y-4">{investigation.timeline.map((item, idx) => (<div key={idx} className="relative pl-4 border-l-2 border-[rgba(80,180,255,0.15)]"><div className="absolute -left-[5px] top-0 w-2 h-2 bg-blood-500"/><p className="text-xs text-blood-500 font-mono">{item.date}</p><p className="text-sm text-zinc-300">{item.event}</p></div>))}</div>
 </motion.div>
 <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.1 }} className="glass-card p-6">
 <h3 className="text-lg font-bold glass-text uppercase tracking-wider mb-4 flex items-center gap-2"><Scale className="w-5 h-5 text-blood-500"/>Legal Outcomes</h3>
 <div className="space-y-3">{investigation.legalOutcomes.map((item, idx) => (<div key={idx} className="p-3 bg-[rgba(0,10,28,0.82)] border border-[rgba(80,180,255,0.15)]"><p className="font-bold glass-text text-sm">{item.defendant}</p><p className="text-xs text-zinc-400 mt-1">{item.charge}</p><p className="text-xs text-blood-400 mt-1">{item.outcome}</p></div>))}</div>
 </motion.div>
 <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.2 }} className="glass-card p-6">
 <h3 className="text-lg font-bold glass-text uppercase tracking-wider mb-4">Sources</h3>
 <div className="space-y-2">{investigation.sources.map((source, idx) => (<a key={idx} href={source.url} target="_blank"rel="noopener noreferrer"className="flex items-start gap-2 p-2 text-sm text-zinc-400 hover:text-blood-400 hover:bg-[rgba(0,10,28,0.82)] transition-colors"><ExternalLink className="w-4 h-4 mt-0.5 flex-shrink-0"/><div><span>{source.title}</span><span className="text-zinc-600 ml-2">({source.date})</span></div></a>))}</div>
 </motion.div>
 </div>
 </div>
 </div>
 </div>
 );
}
