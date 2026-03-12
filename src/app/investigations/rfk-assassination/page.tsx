'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowLeft, AlertTriangle, Users, Calendar, FileText, ExternalLink, Scale, ShieldAlert, Skull } from 'lucide-react';
import GlitchText from '@/components/effects/GlitchText';

const investigation = {
 title: 'RFK Assassination & Evidence Destruction',
 subtitle: 'The Second Gunman: Sirhan Sirhan, 13 Shots From an 8-Round Revolver, and LAPD\'s Systematic Evidence Destruction',
 severity: 'critical',
 status: 'EVIDENCE DESTROYED',
 summary: 'Senator Robert F. Kennedy was assassinated on June 5, 1968, at the Ambassador Hotel in Los Angeles moments after winning the California Democratic presidential primary. Sirhan Sirhan was convicted of the murder, but overwhelming forensic evidence suggests a second gunman fired the fatal shots from behind Kennedy at point-blank range, while Sirhan was in front of him. The coroner determined the fatal shot was fired from 1-3 inches behind Kennedy\'s right ear, yet no witness placed Sirhan closer than several feet in front. Thirteen bullet holes were identified at the scene, though Sirhan\'s revolver held only eight rounds. The LAPD then destroyed critical evidence (including ceiling tiles and door frames containing extra bullets) ensuring the truth could never be forensically proven.',
 keyFigures: [
 { name: 'Robert F. Kennedy', role: 'US Senator and presidential candidate assassinated June 5, 1968', href: '/entities/individuals/robert-f-kennedy', status: 'Assassinated' },
 { name: 'Sirhan Bishara Sirhan', role: 'Convicted assassin; Palestinian immigrant who claimed no memory of the shooting', href: '/entities/individuals/sirhan-sirhan', status: 'Imprisoned, Life' },
 { name: 'Thomas Noguchi', role: 'LA County Coroner who determined fatal shot came from 1-3 inches behind Kennedy\'s right ear', href: '/entities/individuals/thomas-noguchi', status: 'Retired' },
 { name: 'Thane Eugene Cesar', role: 'Security guard standing directly behind Kennedy; drew his gun during the shooting', href: '/entities/individuals/thane-cesar', status: 'Deceased 2019' },
 { name: 'Karl Uecker', role: 'Ambassador Hotel maitre d\' who grabbed Sirhan; stated Sirhan never got close enough for contact shots', href: '/entities/individuals/karl-uecker', status: 'Deceased' },
 { name: 'Sandra Serrano', role: 'Witness who reported seeing a woman in polka-dot dress saying "We shot him"; pressured by LAPD to recant', href: '/entities/individuals/sandra-serrano', status: 'Recanted under pressure' },
 { name: 'William Harper', role: 'Criminalist who analyzed bullets and concluded two different guns were fired', href: '/entities/individuals/william-harper', status: 'Deceased' },
 { name: 'Robert Houghton', role: 'LAPD Chief of Detectives who oversaw investigation and ordered evidence destruction', href: '/entities/individuals/robert-houghton', status: 'Deceased' },
 { name: 'Paul Schrade', role: 'Kennedy aide wounded in the shooting; spent decades campaigning for Sirhan\'s release', href: '/entities/individuals/paul-schrade', status: 'Active advocate' },
 { name: 'Laurence Teeter', role: 'Sirhan\'s attorney who argued hypnotic programming and second gunman theories', href: '/entities/individuals/laurence-teeter', status: 'Deceased 2005' },
 { name: 'Dan Moldea', role: 'Investigative journalist who initially supported second gunman theory, later reversed position', href: '/entities/individuals/dan-moldea', status: 'Active' },
 ],
 timeline: [
 { date: '1968-06-04', event: 'Robert Kennedy wins California Democratic presidential primary election' },
 { date: '1968-06-05', event: 'RFK delivers victory speech at Ambassador Hotel, exits through kitchen pantry at 12:15 AM' },
 { date: '1968-06-05', event: 'Sirhan Sirhan fires from in front of Kennedy; security guard Thane Cesar stands directly behind' },
 { date: '1968-06-05', event: 'Kennedy shot at point-blank range behind right ear; Sirhan was several feet in front of him' },
 { date: '1968-06-06', event: 'Robert F. Kennedy dies at Good Samaritan Hospital at 1:44 AM, 26 hours after shooting' },
 { date: '1968-06-07', event: 'LAPD begins investigation; crime scene photos show bullet holes in door frames and ceiling tiles' },
 { date: '1968-06-28', event: 'Coroner Thomas Noguchi\'s autopsy report confirms fatal shot fired from 1-3 inches behind right ear' },
 { date: '1969-04-17', event: 'Sirhan convicted of first-degree murder; sentenced to death (later commuted to life)' },
 { date: '1969-06-19', event: 'LAPD orders destruction of ceiling tiles and door frames from Ambassador Hotel pantry containing bullet evidence' },
 { date: '1971-06-01', event: 'Criminalist William Harper files affidavit stating bullets came from two different guns' },
 { date: '1975-05-13', event: 'CBS News investigation identifies 13 bullet impacts at the scene, Sirhan\'s gun held only 8 rounds' },
 { date: '1975-09-01', event: 'LAPD releases files; evidence of witness intimidation and evidence destruction documented' },
 { date: '1977-01-01', event: 'Thomas Kranz reinvestigation ordered by LA County Board of Supervisors' },
 { date: '1988-06-01', event: 'LAPD\'s 2,400 crime scene photographs finally released publicly after years of suppression' },
 { date: '2006-11-20', event: 'BBC documentary presents audio evidence of 13 shots, exceeding Sirhan\'s 8-round capacity' },
 { date: '2011-04-28', event: 'Attorneys file petition for new investigation based on acoustic evidence of second gunman' },
 { date: '2016-02-22', event: 'Paul Schrade, wounded by Sirhan, states at parole hearing that Sirhan did not shoot Kennedy' },
 { date: '2021-03-26', event: 'RFK Jr. publicly states he does not believe Sirhan killed his father; visits Sirhan in prison' },
 { date: '2022-01-13', event: 'California parole board recommends Sirhan\'s release after 53 years; Governor Newsom denies parole' },
 ],
 legalOutcomes: [
 { defendant: 'Sirhan Sirhan', charge: 'First-degree murder of Robert F. Kennedy', outcome: 'Convicted 1969; death sentence commuted to life; still imprisoned' },
 { defendant: 'LAPD', charge: 'Destruction of material evidence (bullet-marked door frames, ceiling tiles)', outcome: 'Evidence destroyed 1969; no accountability for destruction' },
 { defendant: 'LAPD', charge: 'Witness intimidation, pressured Sandra Serrano and others to recant testimony', outcome: 'Documented in released files; no disciplinary action' },
 { defendant: 'Thane Eugene Cesar', charge: 'Potential second gunman standing behind Kennedy', outcome: 'Never investigated as suspect; passed polygraph (disputed)' },
 { defendant: 'Sirhan, Parole', charge: 'Parole recommendation after 53 years', outcome: 'Board recommended release 2022; Governor Newsom denied' },
 { defendant: 'Thomas Kranz investigation', charge: 'Reinvestigation ordered by LA County', outcome: 'Concluded no second gunman, methodology disputed' },
 { defendant: 'FBI', charge: 'Failure to conduct independent federal investigation', outcome: 'Deferred to LAPD; no independent review conducted' },
 { defendant: 'Unknown second gunman', charge: 'Murder of Robert F. Kennedy', outcome: 'Forensic evidence supports existence; never identified or charged' },
 ],
 charges: [
 { statute: 'California Penal Code § 187: Murder', description: 'Premeditated murder of a presidential candidate; Sirhan convicted despite questions about his role as actual shooter', count: '1 count, first degree' },
 { statute: 'California Penal Code § 664/187: Attempted Murder', description: 'Shooting of five additional victims in the Ambassador Hotel pantry', count: '5 counts, Paul Schrade and others' },
 { statute: '18 U.S.C. § 1519: Destruction of Federal Evidence', description: 'LAPD destruction of bullet-marked ceiling tiles and door frames critical to determining number of shooters', count: 'Documented evidence destruction 1969' },
 { statute: '18 U.S.C. § 1512: Witness Tampering', description: 'LAPD pressured witnesses including Sandra Serrano to recant testimony about polka-dot dress woman', count: 'Multiple documented instances' },
 { statute: '18 U.S.C. § 241: Conspiracy Against Rights', description: 'Potential conspiracy to assassinate a presidential candidate, depriving citizens of their right to choose leaders', count: 'Evidence supports but never charged' },
 { statute: 'California Penal Code § 135: Destroying Evidence', description: 'Willful destruction of physical evidence material to a capital murder case', count: 'Door frames and ceiling tiles destroyed' },
 { statute: '18 U.S.C. § 1001: False Statements', description: 'False official reports regarding number of bullets and bullet impacts at crime scene', count: 'LAPD initial reports contradicted by photos' },
 { statute: '18 U.S.C. § 371: Conspiracy', description: 'Conspiracy between multiple parties to assassinate a presidential candidate', count: 'Suspected but never formally charged' },
 ],
 coverup: [
 'Coroner Noguchi determined the fatal shot was fired from 1-3 inches behind Kennedy\'s right ear, yet every witness placed Sirhan several feet in front of Kennedy',
 'The LAPD ordered the destruction of bullet-marked ceiling tiles and door frames from the Ambassador Hotel pantry in 1969, eliminating critical forensic evidence',
 'Thirteen bullet holes were identified at the crime scene by multiple witnesses and photographs, though Sirhan\'s revolver held only eight rounds',
 'Sandra Serrano, who reported seeing a woman in a polka-dot dress exclaiming "We shot him,"was subjected to coercive LAPD interrogation until she recanted',
 'Security guard Thane Eugene Cesar, who was standing directly behind Kennedy and admitted drawing his gun, was never seriously investigated as a suspect',
 'The LAPD suppressed 2,400 crime scene photographs for two decades, releasing them only after prolonged legal battles',
 'William Harper\'s criminalist analysis concluding bullets came from two different weapons was dismissed without independent verification',
 'Sirhan has consistently stated he has no memory of the shooting, leading researchers to theorize he may have been hypnotically programmed',
 'The LAPD destroyed over 2,400 witness interview records that were deemed"not relevant"to the case',
 ],
 sources: [
 { title: 'RFK Assassination, Autopsy Report by Thomas Noguchi', url: 'https://www.maryferrell.org/pages/RFK_Assassination.html', date: '1968-06-28' },
 { title: 'LAPD Evidence Destruction in RFK Case', url: 'https://www.latimes.com/archives/la-xpm-1988-04-19-mn-2040-story.html', date: '1988-04-19' },
 { title: 'RFK Must Die, BBC Documentary on Second Gunman Evidence', url: 'https://www.bbc.co.uk/programmes/b007gnxk', date: '2006-11-20' },
 { title: 'Paul Schrade: Sirhan Didn\'t Kill Bobby Kennedy', url: 'https://www.washingtonpost.com/news/retropolis/wp/2018/06/05/who-killed-bobby-kennedy-his-son-rfk-jr-doesnt-believe-it-was-sirhan-sirhan/', date: '2018-06-05' },
 { title: 'RFK Jr. Visits Sirhan in Prison, Says He Didn\'t Kill His Father', url: 'https://www.nytimes.com/2021/03/26/us/rfk-assassination-sirhan.html', date: '2021-03-26' },
 { title: 'Sirhan Parole Hearing and Governor\'s Denial', url: 'https://apnews.com/article/sirhan-sirhan-rfk-assassination-parole-denied-4e4667b7ec66e15dd6b442d7cc1a4b77', date: '2022-01-13' },
 { title: 'Acoustic Evidence of Second Gunman in RFK Assassination', url: 'https://www.theguardian.com/world/2008/feb/22/usa', date: '2008-02-22' },
 { title: 'The Robert F. Kennedy Assassination Archives', url: 'https://www.maryferrell.org/pages/RFK_Assassination.html', date: '2023-01-01' },
 ],
};

export default function RFKAssassinationPage() {
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
