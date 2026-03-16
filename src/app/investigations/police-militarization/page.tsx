'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowLeft, AlertTriangle, Users, Calendar, FileText, ExternalLink, Scale, ShieldAlert, Skull } from 'lucide-react';
import GlitchText from '@/components/effects/GlitchText';

const investigation = {
 title: 'Police Militarization',
 subtitle: 'War Comes Home: How the 1033 Program Turned American Police Into an Occupying Army',
 severity: 'critical',
 status: 'ONGOING',
 summary: 'Since 1997, the Department of Defense\'s 1033 Program has transferred over $7.4 billion worth of surplus military equipment to more than 8,000 law enforcement agencies across the United States. Mine-Resistant Ambush Protected vehicles (MRAPs) designed for Afghanistan and Iraq now patrol American neighborhoods. Police departments have received grenade launchers, bayonets, armored vehicles, helicopters, and military-grade weapons. SWAT team deployments have skyrocketed from approximately 3,000 per year in the 1980s to over 80,000 annually (the vast majority deployed for routine drug warrant service, not hostage situations. The militarization of American policing was on full display during the 2014 Ferguson protests, the 2016 Standing Rock resistance, and the 2020 Black Lives Matter protests, where police in military gear deployed tear gas, rubber bullets, and armored vehicles against American civilians exercising their First Amendment rights."Warrior mentality"training teaches officers to view communities as combat zones and citizens as potential enemy combatants. Research shows that militarized police departments are more likely to use force, less likely to solve crimes, and more likely to kill civilians) with Black communities bearing the disproportionate burden of this domestic arms race.',
 keyFigures: [
 { name: 'Daryl Gates', role: 'LAPD Chief who invented the SWAT team concept in 1967 and militarized Los Angeles policing', href: '/entities/individuals/daryl-gates', status: 'Deceased (2010)' },
 { name: 'Dave Grossman', role: '"Killology"trainer who teaches police officers"warrior mentality"and that killing can be a positive experience', href: '/entities/individuals/dave-grossman', status: 'Active' },
 { name: 'Bob Kroll', role: 'Minneapolis Police Federation president who championed warrior training and defended officers who killed George Floyd', href: '/entities/individuals/bob-kroll', status: 'Retired' },
 { name: 'Darren Wilson', role: 'Ferguson police officer who shot and killed unarmed Michael Brown in 2014, sparking national protests', href: '/entities/individuals/darren-wilson', status: 'Not indicted' },
 { name: 'Thomas Jackson', role: 'Ferguson Police Chief who oversaw militarized response to protests; DOJ found pattern of racial bias in department', href: '/entities/individuals/thomas-jackson', status: 'Resigned (2015)' },
 { name: 'Timothy Loehmann', role: 'Cleveland officer who shot 12-year-old Tamir Rice within 2 seconds of arriving on scene', href: '/entities/individuals/timothy-loehmann', status: 'Fired; not charged' },
 { name: 'Barack Obama', role: 'President who issued Executive Order 13688 restricting 1033 transfers after Ferguson protests', href: '/entities/individuals/barack-obama', status: 'Active' },
 { name: 'Donald Trump', role: 'President who reversed Obama\'s restrictions on 1033 military equipment transfers to police', href: '/entities/individuals/donald-trump', status: 'Active' },
 { name: 'Jeff Sessions', role: 'Attorney General who reversed DOJ police reform consent decrees and encouraged aggressive policing', href: '/entities/individuals/jeff-sessions', status: 'Active' },
 { name: 'Wesley Lowery', role: 'Washington Post journalist arrested by SWAT in Ferguson; documented police militarization nationwide', href: '/entities/individuals/wesley-lowery', status: 'Active' },
 { name: 'Radley Balko', role: 'Journalist and author of "Rise of the Warrior Cop"documenting the militarization of policing', href: '/entities/individuals/radley-balko', status: 'Active' },
 { name: 'Morton County Sheriff (Kyle Kirchmeier)', role: 'Directed militarized response against Standing Rock water protectors using armored vehicles, rubber bullets, and water cannons', href: '/entities/individuals/kyle-kirchmeier', status: 'Active' },
 { name: 'Tamir Rice', role: '12-year-old boy shot by police within 2 seconds of arrival while playing with a toy gun in a Cleveland park', href: '/entities/individuals/tamir-rice', status: 'Killed (2014)' },
 ],
 timeline: [
 { date: '1967', event: 'LAPD Chief Daryl Gates creates first SWAT team after Watts riots; intended for extreme situations like active shooters' },
 { date: '1981', event: 'Military Cooperation with Law Enforcement Act allows military to share equipment, facilities, and intelligence with police' },
 { date: '1988', event: 'Byrne Grant program created, funding drug task forces that accelerate SWAT team expansion nationwide' },
 { date: '1989', event: 'President Bush creates first"drug czar"office; War on Drugs further blurs line between military and police operations' },
 { date: '1997', event: 'National Defense Authorization Act Section 1033 formalizes transfer of surplus military equipment to local police departments' },
 { date: '1997-2024', event: '$7.4+ billion in military equipment transferred to 8,000+ law enforcement agencies through the 1033 Program' },
 { date: '2001', event: 'After 9/11, Department of Homeland Security grants flood police departments with military-grade equipment and surveillance technology' },
 { date: '2011', event: 'Occupy Wall Street protests met with militarized police response across major cities; journalists arrested and assaulted' },
 { date: '2014-AUG', event: 'Ferguson, Missouri: police deploy MRAPs, snipers, tear gas, and military tactics against protesters after Michael Brown shooting' },
 { date: '2014-NOV', event: '12-year-old Tamir Rice shot by Cleveland police within 2 seconds of arrival while playing with toy gun in park' },
 { date: '2015-MAY', event: 'Obama signs Executive Order 13688 restricting transfer of tracked armored vehicles, grenade launchers, and bayonets to police' },
 { date: '2016', event: 'Standing Rock: militarized police deploy armored vehicles, rubber bullets, water cannons in freezing temperatures against water protectors' },
 { date: '2017-AUG', event: 'Trump signs Executive Order 13809 reversing Obama\'s restrictions on 1033 military equipment transfers' },
 { date: '2020-MAY', event: 'George Floyd protests: militarized police deploy teargas, rubber bullets, and armored vehicles in 140+ cities across all 50 states' },
 { date: '2020-JUN', event: 'Lafayette Square cleared with chemical agents for Trump photo op; National Guard and federal agents in full military gear' },
 { date: '2020', event: 'ACLU documents 950+ instances of police violence against demonstrators and journalists during BLM protests' },
 { date: '2021', event: 'Biden partially reinstates restrictions on 1033 transfers; bans chokeholds and no-knock warrants in federal law enforcement' },
 { date: '2023', event: 'SWAT deployments reach 80,000+ annually, a 2,500% increase from the 1980s; majority for drug warrant service' },
 ],
 legalOutcomes: [
 { defendant: 'City of Ferguson / DOJ Investigation', charge: 'Pattern and practice of unconstitutional policing, racial bias', outcome: 'DOJ consent decree in 2016; found department used policing as revenue generation targeting Black residents' },
 { defendant: 'Officer Darren Wilson', charge: 'Shooting death of unarmed Michael Brown in Ferguson, Missouri', outcome: 'Grand jury declined to indict in November 2014; DOJ also declined federal charges' },
 { defendant: 'Officer Timothy Loehmann', charge: 'Shooting death of 12-year-old Tamir Rice', outcome: 'Grand jury declined to indict; fired from Cleveland PD for lying on application; hired by another department' },
 { defendant: 'Morton County Sheriff (Standing Rock)', charge: 'Excessive force against water protectors, journalists, and medics', outcome: 'No criminal charges against officers; civil settlements paid; no structural accountability' },
 { defendant: 'Multiple Police Departments (BLM 2020)', charge: 'Excessive force, indiscriminate use of chemical agents and"less-lethal"munitions against protesters and journalists', outcome: 'Some individual officers charged; most departments faced no consequences; federal consent decrees in a few cities' },
 { defendant: 'City of Kenosha (Jacob Blake shooting)', charge: 'Officer Rusten Sheskey shot Jacob Blake 7 times in the back', outcome: 'No charges against officer; federal review also declined prosecution; $2 million settlement' },
 { defendant: 'LAPD (2020 Protests)', charge: 'LAPD fired rubber bullets and tear gas at peaceful protesters and press', outcome: 'Inspector General found over 50"serious use-of-force incidents"; department reformed crowd control policies' },
 { defendant: 'Portland Bureau of Police (2020)', charge: 'Ongoing use of tear gas and crowd control munitions during 100+ nights of protests', outcome: 'Federal court injunction against use of tear gas; DOJ investigation into pattern and practice of misconduct' },
 ],
 charges: [
 { statute: '1st Amendment, Freedom of Assembly', description: 'Militarized police responses to lawful protests chill free speech and assembly through overwhelming force', count: '10,000+ arrests at BLM protests in 2020; ACLU documented 950+ police violence incidents against protesters and press' },
 { statute: '4th Amendment, Unreasonable Seizure', description: 'SWAT raids conducted on minimal evidence, wrong addresses, and for low-level offenses constitute unreasonable seizures', count: '80,000+ SWAT deployments annually; majority for drug warrant service on non-violent offenses' },
 { statute: '14th Amendment, Equal Protection', description: 'Military equipment and SWAT teams deployed disproportionately in Black and Brown communities', count: 'Studies show militarized policing increases police violence most in communities of color' },
 { statute: 'Posse Comitatus Act (18 U.S.C. § 1385)', description: 'Prohibits use of military forces for civilian law enforcement; 1033 Program circumvents the spirit of this law', count: 'Transfer of $7.4B in military equipment effectively militarizes police while technically avoiding the statute' },
 { statute: 'Excessive Force (42 U.S.C. § 1983)', description: 'Police use of military-grade weapons and tactics against civilians constitutes excessive force', count: 'Rubber bullets, tear gas, LRAD devices, and flash-bang grenades routinely used against unarmed civilians' },
 { statute: 'Freedom of the Press (1st Amendment)', description: 'Journalists deliberately targeted with"less-lethal"munitions and arrested during protest coverage', count: '400+ press freedom violations documented during 2020 protests (U.S. Press Freedom Tracker)' },
 { statute: 'Geneva Convention, Chemical Weapons Protocol', description: 'Tear gas is banned in warfare under the Chemical Weapons Convention but used routinely against American civilians', count: 'CS gas deployed against protesters in 140+ cities during 2020; banned in international armed conflict since 1993' },
 { statute: 'Pattern or Practice (34 U.S.C. § 12601)', description: 'DOJ authority to investigate law enforcement agencies engaging in a pattern or practice of constitutional violations', count: '70+ DOJ pattern-or-practice investigations since 1994; multiple found systemic militarization and racial bias' },
 ],
 coverup: [
 'The 1033 Program operated with virtually no oversight or public awareness for almost two decades before Ferguson brought national attention in 2014',
 '"Warrior mentality"training programs like Dave Grossman\'s "Killology" teach officers to view every encounter as potential combat, yet departments conceal their use of these programs from the public',
 'After Ferguson, the DOJ found that officers routinely failed to file use-of-force reports, making it impossible to track the true extent of police violence',
 'Pentagon records of 1033 transfers were incomplete and often inaccurate, some agencies could not account for military equipment they had received',
 'Trump\'s Executive Order 13809 reversing Obama\'s restrictions was signed with no public comment period, congressional oversight, or policy justification',
 'Police departments routinely classify SWAT deployment records as"law enforcement sensitive"to prevent public scrutiny of how military equipment and tactics are being used',
 'Rubber bullets, marketed as"less-lethal,"have caused permanent blindness, traumatic brain injuries, and deaths, but police agencies resist tracking these injuries',
 'The vast majority of SWAT deployments are for routine drug warrant service, not the hostage situations and active shooters that justified their creation, a fact departments actively obscure',
 'After the 2020 protests, multiple police departments destroyed or refused to release bodycam footage that could have documented excessive force by militarized units',
 ],
 sources: [
 { title: 'Balko, Radley, Rise of the Warrior Cop: The Militarization of America\'s Police Forces', url: 'https://www.publicaffairsbooks.com/titles/radley-balko/rise-of-the-warrior-cop/9781610394574/', date: '2013' },
 { title: 'ACLU, War Comes Home: The Excessive Militarization of American Policing', url: 'https://www.aclu.org/report/war-comes-home-excessive-militarization-american-police', date: '2014' },
 { title: 'DLA Disposition Services: 1033 Program FAQ and Data', url: 'https://www.dla.mil/DispositionServices/Offers/Reutilization/LawEnforcement/ProgramFAQs/', date: '2024' },
 { title: 'DOJ, Investigation of the Ferguson Police Department', url: 'https://www.justice.gov/sites/default/files/opa/press-releases/attachments/2015/03/04/ferguson_police_department_report.pdf', date: '2015-03-04' },
 { title: 'Marshall Project, How the 1033 Program Equipped America\'s Police', url: 'https://www.themarshallproject.org/2014/12/03/the-pentagon-finally-details-its-weapons-for-cops-giveaway', date: '2014' },
 { title: 'U.S. Press Freedom Tracker: 2020 Protest Press Freedom Violations', url: 'https://pressfreedomtracker.us/', date: '2020' },
 { title: 'PNAS, Militarization and Police Violence: Effects on Communities', url: 'https://www.pnas.org/doi/10.1073/pnas.1805161115', date: '2018-09-11' },
 { title: 'Washington Post, Police Shootings Database', url: 'https://www.washingtonpost.com/graphics/investigations/police-shootings-database/', date: '2024' },
 { title: 'Lowery, Wesley, They Can\'t Kill Us All: Ferguson, Baltimore, and a New Era in America\'s Racial Justice Movement', url: 'https://www.hachettebookgroup.com/titles/wesley-lowery/they-cant-kill-us-all/9780316312479/', date: '2016' },
 ],
};

export default function PoliceMilitarizationPage() {
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
