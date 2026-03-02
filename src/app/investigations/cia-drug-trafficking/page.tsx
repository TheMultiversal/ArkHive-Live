'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowLeft, AlertTriangle, Users, Calendar, FileText, ExternalLink, Scale, ShieldAlert, Skull } from 'lucide-react';
import GlitchText from '@/components/effects/GlitchText';

const investigation = {
 title: 'CIA Drug Trafficking',
 subtitle: 'Dark Alliance: How the CIA Fueled the Crack Epidemic to Fund Covert Wars',
 severity: 'critical',
 status: 'CONFIRMED',
 summary: 'The Central Intelligence Agency facilitated cocaine trafficking into the United States throughout the 1980s to fund the Nicaraguan Contra rebels - a covert operation Congress had explicitly prohibited. Journalist Gary Webb\'s 1996"Dark Alliance"series in the San Jose Mercury News documented how CIA-backed Contra suppliers funneled tons of cocaine into Los Angeles, where it was converted into crack and distributed in Black communities, fueling the crack epidemic that devastated inner-city America. The CIA Inspector General\'s 1998 report confirmed that the agency had worked with known drug traffickers, protected them from prosecution, and concealed their activities from law enforcement. The Kerry Committee (1989) had already found that"it is clear that individuals who provided support for the Contras were involved in drug trafficking"and that"the U.S. government was aware of these activities."Webb was driven out of journalism by a coordinated media smear campaign and died in 2004 from two gunshot wounds to the head, ruled a"suicide."The crack epidemic destroyed Black communities, fueled mass incarceration, and created sentencing disparities (100:1 crack vs. powder cocaine ratio) that imprisoned a generation.',
 keyFigures: [
 { name: 'Gary Webb', role: 'Investigative journalist who broke the Dark Alliance story; found dead with two gunshot wounds to the head in 2004', href: '/entities/individuals/gary-webb', status: 'Deceased (2004)' },
 { name: 'William Casey', role: 'CIA Director (1981-1987) who oversaw covert Contra support operations including drug-linked supply networks', href: '/entities/individuals/william-casey', status: 'Deceased (1987)' },
 { name: 'Oliver North', role: 'NSC staffer who coordinated Contra supply network and was aware of drug trafficking connections', href: '/entities/individuals/oliver-north', status: 'Active' },
 { name: 'Oscar Danilo Bland\u00F3n', role: 'Nicaraguan drug trafficker who sold tons of cocaine in LA to fund the Contras; became DEA informant', href: '/entities/individuals/oscar-danilo-blandon', status: 'Active (DEA informant)' },
 { name: 'Norwin Meneses', role: 'Nicaraguan drug kingpin known as"Rey de la Droga"who operated with CIA protection', href: '/entities/individuals/norwin-meneses', status: 'Active' },
 { name: '"Freeway"Ricky Ross', role: 'LA crack dealer who unwittingly distributed CIA-linked cocaine, helping fuel the crack epidemic', href: '/entities/individuals/freeway-ricky-ross', status: 'Released (2009)' },
 { name: 'John Kerry', role: 'Senator who chaired the 1989 Kerry Committee investigating Contra drug links', href: '/entities/individuals/john-kerry', status: 'Active' },
 { name: 'Frederick Hitz', role: 'CIA Inspector General who authored the 1998 report confirming CIA-drug trafficker relationships', href: '/entities/individuals/frederick-hitz', status: 'Active' },
 { name: 'Ronald Reagan', role: 'President who authorized covert Contra support and signed anti-drug laws while CIA facilitated trafficking', href: '/entities/individuals/ronald-reagan', status: 'Deceased (2004)' },
 { name: 'Manuel Noriega', role: 'Panamanian dictator and CIA asset who facilitated drug shipments; invaded and arrested by U.S. in 1989', href: '/entities/individuals/manuel-noriega', status: 'Deceased (2017)' },
 { name: 'Alan Fiers', role: 'CIA Central American Task Force chief who admitted knowledge of Contra drug trafficking', href: '/entities/individuals/alan-fiers', status: 'Active' },
 { name: 'John Hull', role: 'CIA-connected rancher in Costa Rica whose property served as Contra supply base and drug transshipment point', href: '/entities/individuals/john-hull', status: 'Active' },
 { name: 'Joe Kelso', role: 'DEA agent who testified that CIA blocked drug investigations involving Contra supporters', href: '/entities/individuals/joe-kelso', status: 'Active' },
 ],
 timeline: [
 { date: '1979', event: 'Sandinista revolution overthrows Somoza dictatorship in Nicaragua; Reagan vows to support Contra rebels' },
 { date: '1981', event: 'CIA begins covert support for Nicaraguan Contras under Presidential Finding signed by Reagan' },
 { date: '1982', event: 'Boland Amendment passed by Congress, restricting U.S. government from funding Contra operations' },
 { date: '1982', event: 'Oscar Danilo Bland\u00F3n begins shipping cocaine from Colombia to Los Angeles to raise money for the Contras' },
 { date: '1983', event: 'Norwin Meneses, Nicaraguan drug lord with CIA connections, oversees drug pipeline from Central America to California' },
 { date: '1984', event: 'Second Boland Amendment explicitly bans all U.S. aid to the Contras; NSC\'s Oliver North takes over covert supply operations' },
 { date: '1984', event: '"Freeway"Ricky Ross begins purchasing cheap cocaine from Bland\u00F3n, introduces crack cocaine to LA and eventually nationwide' },
 { date: '1985', event: 'DEA agents in Central America discover drug trafficking on Contra supply routes; investigations are blocked by CIA' },
 { date: '1986', event: 'Iran-Contra scandal breaks open when Contra supply plane shot down over Nicaragua reveals covert network' },
 { date: '1986', event: 'Anti-Drug Abuse Act creates 100:1 sentencing disparity between crack and powder cocaine, devastating Black communities' },
 { date: '1989', event: 'Kerry Committee report confirms that"individuals who provided support for the Contras were involved in drug trafficking"' },
 { date: '1989', event: 'U.S. invades Panama and arrests Manuel Noriega, a longtime CIA asset and drug trafficker' },
 { date: '1996-AUG', event: 'Gary Webb publishes"Dark Alliance"series in San Jose Mercury News, documenting CIA-Contra-crack connection' },
 { date: '1996-OCT', event: 'Major newspapers (LA Times, Washington Post, New York Times) launch coordinated attacks on Webb\'s reporting' },
 { date: '1998', event: 'CIA Inspector General Frederick Hitz releases report confirming CIA worked with drug traffickers and concealed activities from DOJ' },
 { date: '1998', event: 'CIA IG report reveals Director Casey had signed agreements with DOJ exempting CIA from reporting drug crimes by its assets' },
 { date: '2004-DEC-10', event: 'Gary Webb found dead with two gunshot wounds to the head; death ruled suicide by Sacramento County Coroner' },
 { date: '2014', event: 'Film"Kill the Messenger"brings renewed attention to Webb\'s reporting and vindication of his findings' },
 ],
 legalOutcomes: [
 { defendant: 'Oliver North', charge: 'Conspiracy, destruction of documents, accepting an illegal gratuity', outcome: 'Convicted on 3 counts; convictions vacated on appeal due to immunized congressional testimony' },
 { defendant: 'Oscar Danilo Bland\u00F3n', charge: 'Cocaine trafficking (tons of cocaine into the United States)', outcome: 'Served 28 months; released as DEA informant; given green card despite importing tons of cocaine' },
 { defendant: 'Norwin Meneses', charge: 'Drug trafficking kingpin designation in multiple countries', outcome: 'Arrested in Nicaragua; served minimal time; never prosecuted in the United States despite massive drug operations' },
 { defendant: '"Freeway"Ricky Ross', charge: 'Drug trafficking conspiracy', outcome: 'Sentenced to life in prison (later reduced to 20 years); released in 2009' },
 { defendant: 'Manuel Noriega', charge: 'Drug trafficking, racketeering, money laundering', outcome: 'Captured in 1989 U.S. invasion; sentenced to 40 years; died in prison in 2017' },
 { defendant: 'Alan Fiers', charge: 'Withholding information from Congress regarding Contra operations', outcome: 'Pleaded guilty; pardoned by George H.W. Bush in 1992' },
 { defendant: 'John Poindexter', charge: 'Conspiracy, obstruction of Congress, making false statements', outcome: 'Convicted on 5 felony counts; convictions reversed on appeal' },
 { defendant: 'CIA (Institutional)', charge: 'Facilitating drug trafficking, obstructing justice, concealing crimes from DOJ', outcome: 'No institutional accountability; IG report confirmed wrongdoing but led to no prosecutions' },
 ],
 charges: [
 { statute: 'Conspiracy to Import Controlled Substances (21 U.S.C. § 963)', description: 'CIA-backed operatives conspired to import thousands of kilograms of cocaine into the United States', count: 'Tons of cocaine trafficked through CIA-connected networks into U.S. cities' },
 { statute: 'Boland Amendment Violations', description: 'Congress explicitly prohibited U.S. government funding of Contra operations; CIA circumvented via drug money', count: 'Systematic violation from 1982-1986 through multiple covert funding channels' },
 { statute: 'Obstruction of Justice (18 U.S.C. § 1503)', description: 'CIA blocked DEA investigations into drug trafficking by Contra supporters and CIA assets', count: 'Multiple documented instances of CIA interfering with law enforcement investigations' },
 { statute: 'Misprision of Felony (18 U.S.C. § 4)', description: 'CIA Director Casey signed agreements exempting CIA from reporting drug crimes by its assets to the Department of Justice', count: 'Formal memorandum of understanding concealing drug trafficking from 1982 onward' },
 { statute: 'Conspiracy Against Rights (18 U.S.C. § 241)', description: 'CIA-facilitated crack epidemic disproportionately targeted and devastated Black communities', count: 'Millions of Americans affected by crack epidemic traced to CIA-linked supply chains' },
 { statute: 'RICO (18 U.S.C. § 1961-1968)', description: 'CIA-Contra drug network constituted a criminal enterprise engaged in pattern of racketeering activity', count: 'Ongoing enterprise spanning multiple countries over a decade' },
 { statute: 'Arms Export Control Act (22 U.S.C. § 2778)', description: 'Unauthorized export of weapons to Iran and the Contras as part of the Iran-Contra network', count: 'Thousands of weapons shipped illegally through CIA networks' },
 { statute: 'Destruction of Evidence (18 U.S.C. § 1519)', description: 'Oliver North and others shredded documents related to Contra operations and drug connections', count: 'Massive document destruction operation prior to congressional investigation' },
 { statute: 'Money Laundering (18 U.S.C. § 1956)', description: 'Drug profits laundered through shell companies and banks to fund Contra operations', count: 'Hundreds of millions of dollars in drug proceeds laundered through multiple financial institutions' },
 ],
 coverup: [
 'The CIA Inspector General\'s 1998 report confirmed the agency had worked with drug traffickers but was buried with minimal media coverage - the same media that had attacked Gary Webb',
 'CIA Director William Casey signed a memorandum of understanding with the DOJ in 1982 that exempted the CIA from reporting drug crimes committed by its assets - effectively legalizing CIA drug trafficking',
 'Major newspapers (LA Times, Washington Post, New York Times) launched a coordinated campaign to discredit Gary Webb\'s reporting rather than investigating his claims - many later acknowledged his core findings were correct',
 'Oscar Danilo Bland\u00F3n, who imported tons of cocaine into the United States, served only 28 months in prison and was released as a DEA informant - while"Freeway"Ricky Ross was sentenced to life',
 'Gary Webb\'s death by two gunshot wounds to the head was ruled a suicide without adequate investigation - multiple gunshot suicides are extremely rare',
 'The Kerry Committee report confirming Contra drug trafficking was largely ignored by mainstream media when published in 1989 and buried by the incoming Bush administration',
 'DEA agents who attempted to investigate drug trafficking on Contra supply routes were repeatedly blocked by CIA - several filed complaints that were suppressed',
 'The 100:1 crack vs. powder cocaine sentencing disparity, which imprisoned hundreds of thousands of Black Americans, was enacted while the CIA was facilitating the very cocaine supply creating the epidemic',
 'George H.W. Bush pardoned multiple Iran-Contra defendants on Christmas Eve 1992, preventing trials that could have exposed the full extent of CIA drug trafficking operations',
 ],
 sources: [
 { title: 'Gary Webb - Dark Alliance: The CIA, the Contras, and the Cocaine Explosion', url: 'https://www.penguinrandomhouse.com/books/163834/dark-alliance-by-gary-webb/', date: '1998' },
 { title: 'CIA Inspector General Report: Allegations of Connections Between CIA and Contras in Cocaine Trafficking (Volume I)', url: 'https://www.cia.gov/library/reports/general-reports-1/cocaine/contra-story/contents.html', date: '1998-01-29' },
 { title: 'Kerry Committee Report - Drugs, Law Enforcement and Foreign Policy', url: 'https://nsarchive.gwu.edu/document/kerry-committee-report-drugs-law-enforcement-and-foreign-policy', date: '1989-04-13' },
 { title: 'National Security Archive - The Contras, Cocaine, and Covert Operations', url: 'https://nsarchive.gwu.edu/briefing-book/iran/2018-05-10/oliver-norths-checkered-iran-contra-record', date: '2018' },
 { title: 'The Intercept - Gary Webb Was Right', url: 'https://theintercept.com/2014/09/25/managing-nightmare-cia-media-destruction-gary-webb/', date: '2014-09-25' },
 { title: 'Los Angeles Times - CIA, Contras and Drugs: Questions Linger', url: 'https://www.latimes.com/nation/la-na-cia-contra-crack-20141018-story.html', date: '2014-10-18' },
 { title: 'PBS Frontline - Drug Wars: The CIA Connection', url: 'https://www.pbs.org/wgbh/pages/frontline/shows/drugs/', date: '2000' },
 { title: 'Department of Justice IG Report on CIA-Contra-Drug Allegations', url: 'https://oig.justice.gov/special/9712/ch01p1.htm', date: '1997' },
 { title: 'New York Times - Key Figures in the Iran-Contra Affair', url: 'https://www.nytimes.com/topic/subject/iran-contra-affair', date: '2023' },
 ],
};

export default function CIADrugTraffickingPage() {
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
