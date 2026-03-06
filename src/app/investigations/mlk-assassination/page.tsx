'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowLeft, AlertTriangle, Users, Calendar, FileText, ExternalLink, Scale, ShieldAlert, Skull } from 'lucide-react';
import GlitchText from '@/components/effects/GlitchText';

const investigation = {
 title: 'MLK Assassination & FBI COINTELPRO',
 subtitle: 'The Murder of Martin Luther King Jr.: FBI Surveillance, James Earl Ray, and the 1999 Verdict That Found the Government Liable',
 severity: 'critical',
 status: 'GOVERNMENT LIABILITY ESTABLISHED',
 summary: 'Dr. Martin Luther King Jr. was assassinated on April 4, 1968, at the Lorraine Motel in Memphis, Tennessee. While James Earl Ray pleaded guilty and was sentenced to 99 years, he recanted almost immediately and spent his life claiming he was a patsy. The FBI\'s COINTELPRO program had targeted King for years, wiretapping him, sending him anonymous letters encouraging suicide, and attempting to destroy his movement. In 1999, the King family brought a civil trial in Memphis that concluded with a jury finding that government agencies, including the FBI, were involved in a conspiracy to assassinate Dr. King. Despite this landmark verdict, the Department of Justice dismissed the findings and no further criminal investigation was opened.',
 keyFigures: [
 { name: 'Martin Luther King Jr.', role: 'Civil rights leader and Nobel Peace Prize laureate assassinated April 4, 1968', href: '/entities/individuals/martin-luther-king-jr', status: 'Assassinated' },
 { name: 'James Earl Ray', role: 'Convicted assassin who pleaded guilty then recanted, claiming he was set up by a man named "Raoul"', href: '/entities/individuals/james-earl-ray', status: 'Deceased 1998' },
 { name: 'J. Edgar Hoover', role: 'FBI Director who authorized COINTELPRO targeting of King, calling him"the most dangerous Negro"', href: '/entities/individuals/j-edgar-hoover', status: 'Deceased 1972' },
 { name: 'William Sullivan', role: 'FBI Domestic Intelligence Chief who oversaw King surveillance and the anonymous suicide letter', href: '/entities/individuals/william-sullivan', status: 'Deceased 1977' },
 { name: 'Coretta Scott King', role: 'Wife of MLK who pursued the 1999 civil trial and believed in government conspiracy', href: '/entities/individuals/coretta-scott-king', status: 'Deceased 2006' },
 { name: 'Dexter King', role: 'Son of MLK who met with James Earl Ray and publicly stated he believed Ray was innocent', href: '/entities/individuals/dexter-king', status: 'Active' },
 { name: 'Lloyd Jowers', role: 'Memphis restaurant owner who confessed to involvement in assassination conspiracy in 1993', href: '/entities/individuals/lloyd-jowers', status: 'Deceased 2000' },
 { name: 'William Pepper', role: 'Attorney for the King family who represented them in the 1999 civil trial and Ray\'s appeals', href: '/entities/individuals/william-pepper', status: 'Active' },
 { name: 'Jesse Jackson', role: 'Civil rights leader present at the Lorraine Motel at the time of the assassination', href: '/entities/individuals/jesse-jackson', status: 'Active' },
 { name: 'Ralph Abernathy', role: 'King\'s closest friend and SCLC successor, present at assassination', href: '/entities/individuals/ralph-abernathy', status: 'Deceased 1990' },
 { name: 'Mark Lane', role: 'Attorney and author who investigated links between Ray and intelligence agencies', href: '/entities/individuals/mark-lane', status: 'Deceased 2016' },
 ],
 timeline: [
 { date: '1955-12-01', event: 'Montgomery Bus Boycott begins; King emerges as civil rights leader, attracting FBI attention' },
 { date: '1963-01-08', event: 'FBI Assistant Director William Sullivan writes memo calling King"the most dangerous Negro in America"' },
 { date: '1963-10-10', event: 'Attorney General Robert Kennedy authorizes FBI wiretaps on King\'s phone lines' },
 { date: '1964-11-21', event: 'FBI sends anonymous letter to King with audio recordings, implying he should commit suicide' },
 { date: '1964-12-01', event: 'Hoover publicly calls King"the most notorious liar in the country"' },
 { date: '1967-04-04', event: 'King delivers "Beyond Vietnam"speech opposing the war; FBI escalates COINTELPRO operations' },
 { date: '1968-03-28', event: 'King leads march in Memphis supporting sanitation workers; violence breaks out, FBI exploits it' },
 { date: '1968-04-03', event: 'King delivers "I\'ve Been to the Mountaintop"speech at Mason Temple, Memphis' },
 { date: '1968-04-04', event: 'King assassinated by single rifle shot at Lorraine Motel, Memphis, at 6:01 PM' },
 { date: '1968-04-04', event: 'Memphis police pull back security detail from Lorraine Motel hours before assassination' },
 { date: '1968-06-08', event: 'James Earl Ray arrested at London Heathrow Airport traveling on false Canadian passport' },
 { date: '1969-03-10', event: 'Ray pleads guilty to murder, sentenced to 99 years; recants within days claiming he was set up' },
 { date: '1975-11-18', event: 'Church Committee reveals scope of FBI\'s COINTELPRO operations targeting King and civil rights movement' },
 { date: '1977-01-07', event: 'House Select Committee on Assassinations begins reinvestigation of King assassination' },
 { date: '1979-01-29', event: 'HSCA concludes there was a"likelihood of conspiracy"in King assassination' },
 { date: '1993-12-16', event: 'Lloyd Jowers confesses on ABC Primetime Live to involvement in MLK assassination conspiracy' },
 { date: '1997-03-27', event: 'Dexter King meets James Earl Ray in prison and publicly states he believes Ray is innocent' },
 { date: '1999-12-08', event: 'King family\'s civil trial verdict: jury finds Lloyd Jowers and"government agencies"liable for King\'s death' },
 { date: '2000-06-09', event: 'DOJ releases report dismissing 1999 civil trial verdict, declines further investigation' },
 ],
 legalOutcomes: [
 { defendant: 'James Earl Ray', charge: 'First-degree murder of Dr. Martin Luther King Jr.', outcome: 'Pleaded guilty - 99 years; recanted; died in prison 1998' },
 { defendant: 'Lloyd Jowers', charge: 'Civil liability for conspiracy in King assassination (1999 trial)', outcome: 'Found liable by civil jury, King family awarded $100 in symbolic damages' },
 { defendant: 'Government agencies (FBI et al.)', charge: 'Civil liability for conspiracy in King assassination', outcome: '1999 jury found government agencies liable for King\'s death' },
 { defendant: 'FBI (institutional)', charge: 'COINTELPRO, illegal surveillance, harassment, and disruption', outcome: 'Church Committee exposed program; no criminal charges filed' },
 { defendant: 'J. Edgar Hoover', charge: 'Authorization of illegal surveillance and blackmail of King', outcome: 'Never charged; died 1972; actions confirmed by Church Committee' },
 { defendant: 'Memphis Police Department', charge: 'Withdrawal of security detail and potential complicity', outcome: 'No investigation or charges; security pullback never explained' },
 { defendant: 'DOJ Investigation (2000)', charge: 'Review of civil trial evidence', outcome: 'DOJ dismissed findings; declined further criminal investigation' },
 { defendant: 'Unknown conspirators', charge: 'Conspiracy to assassinate Dr. King', outcome: 'HSCA found"likelihood of conspiracy"; 1999 jury found conspiracy' },
 ],
 charges: [
 { statute: 'Tennessee Code § 39-13-202 - First Degree Murder', description: 'Premeditated and deliberate killing of Dr. Martin Luther King Jr.', count: '1 count, April 4, 1968' },
 { statute: '18 U.S.C. § 241 - Conspiracy Against Rights', description: 'Conspiracy to deprive citizens of their civil rights through assassination of civil rights leader', count: 'Multiple potential defendants' },
 { statute: '18 U.S.C. § 242 - Deprivation of Rights Under Color of Law', description: 'Government agents using their official positions to violate King\'s constitutional rights', count: 'FBI COINTELPRO operations' },
 { statute: '18 U.S.C. § 1505 - Obstruction of Proceedings', description: 'FBI obstruction of congressional investigations into King\'s assassination', count: 'Multiple instances documented by Church Committee' },
 { statute: '18 U.S.C. § 2511 - Illegal Wiretapping', description: 'Unauthorized electronic surveillance of King\'s communications by FBI', count: 'Continuous from 1963-1968' },
 { statute: '18 U.S.C. § 873 - Blackmail', description: 'FBI\'s anonymous letter threatening King with exposure of private recordings unless he killed himself', count: '1 documented instance, November 1964' },
 { statute: '18 U.S.C. § 371 - Conspiracy to Commit Offense', description: 'Organized conspiracy between multiple government and private actors to assassinate King', count: 'Found by 1999 civil jury' },
 { statute: '18 U.S.C. § 1519 - Destruction of Records', description: 'FBI destruction and concealment of COINTELPRO records targeting King', count: 'Documented by Church Committee' },
 ],
 coverup: [
 'The FBI sent King an anonymous letter with secret audio recordings, implying he should commit suicide before receiving the Nobel Peace Prize',
 'Memphis police withdrew King\'s security detail from the Lorraine Motel hours before the assassination without explanation',
 'James Earl Ray\'s guilty plea was entered under pressure from his attorney, preventing a public trial that might have exposed conspiracy evidence',
 'The FBI conducted a massive manhunt for Ray while simultaneously concealing its own COINTELPRO operations against King',
 'Lloyd Jowers\' 1993 confession to involvement in a conspiracy was dismissed by the DOJ without thorough investigation',
 'The 1999 civil jury verdict finding government liability was ignored by mainstream media, the trial received almost no national coverage',
 'The DOJ\'s 2000 report dismissed the civil trial findings without conducting its own independent investigation or grand jury proceedings',
 'FBI files on King\'s assassination were sealed for decades; many documents remain classified or heavily redacted',
 'Multiple witnesses to the assassination reported being intimidated or pressured by law enforcement to change their statements',
 'The Church Committee revealed that COINTELPRO\'s stated goal was to "neutralize" King, yet no FBI official was ever criminally charged',
 ],
 sources: [
 { title: 'King v. Jowers - 1999 Civil Trial Transcript', url: 'https://www.thekingcenter.org/civil-case-king-family-versus-jowers', date: '1999-12-08' },
 { title: 'FBI\'s War on Martin Luther King Jr. - Church Committee Report', url: 'https://www.intelligence.senate.gov/sites/default/files/94755_III.pdf', date: '1976-04-23' },
 { title: 'COINTELPRO: The FBI\'s War on Black America, National Archives', url: 'https://www.archives.gov/research/investigations/fbi/cointelpro', date: '1975-11-18' },
 { title: 'House Select Committee on Assassinations, MLK Report', url: 'https://www.archives.gov/research/jfk/select-committee-report/part-2.html', date: '1979-01-29' },
 { title: 'The FBI and Martin Luther King Jr.: From Solo to Memphis', url: 'https://www.nytimes.com/2023/06/15/books/review/king-fbi-beverly-gage.html', date: '2023-06-15' },
 { title: 'DOJ Investigation of Recent Allegations Regarding MLK Assassination', url: 'https://www.justice.gov/crt/case-document/file/1089701/download', date: '2000-06-09' },
 { title: 'The Martin Luther King Jr. Assassination, FBI Vault', url: 'https://vault.fbi.gov/Martin%20Luther%20King%2C%20Jr.', date: '2023-01-01' },
 { title: 'Coretta Scott King\'s Quest for the Truth About Her Husband\'s Murder', url: 'https://www.washingtonpost.com/history/2023/04/04/mlk-assassination-conspiracy-trial/', date: '2023-04-04' },
 { title: 'The Assassination of Martin Luther King Jr. - Stanford King Institute', url: 'https://kinginstitute.stanford.edu/assassination-martin-luther-king-jr', date: '2023-01-01' },
 ],
};

export default function MLKAssassinationPage() {
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
