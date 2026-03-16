'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import {
 ArrowLeft,
 AlertTriangle,
 Users,
 Calendar,
 FileText,
 ExternalLink,
 Scale,
 Shield, ShieldAlert} from 'lucide-react';
import GlitchText from '@/components/effects/GlitchText';

const investigation = {
 title: 'Proud Boys Seditious Conspiracy',
 subtitle: 'The Paramilitary Force Behind January 6',
 severity: 'critical',
 status: 'Convictions Final',
 summary: 'The Proud Boys, a far-right extremist organization, orchestrated a key role in the January 6, 2021 Capitol attack. Five leaders were convicted of seditious conspiracy, the most serious charge brought against January 6 defendants. Chairman Enrique Tarrio received the longest sentence of any January 6 defendant: 22 years. The group coordinated the breach, with members among the first to enter the Capitol.',
 keyFigures: [
 { name: 'Enrique Tarrio', role: 'Chairman, Directed attack remotely after DC arrest', href: '/entities/individuals/enrique-tarrio', status: 'Convicted - 22 years' },
 { name: 'Ethan Nordean', role: '"Rufio Panman"- Led breach of barricades', href: '/entities/individuals/ethan-nordean', status: 'Convicted - 18 years' },
 { name: 'Joseph Biggs', role: 'Organizer, First to breach inner perimeter', href: '/entities/individuals/joseph-biggs', status: 'Convicted - 17 years' },
 { name: 'Zachary Rehl', role: 'Philadelphia Chapter President', href: '/entities/individuals/zachary-rehl', status: 'Convicted - 15 years' },
 { name: 'Dominic Pezzola', role: 'Broke window with police shield', href: '/entities/individuals/dominic-pezzola', status: 'Convicted - 10 years' },
 { name: 'Donald Trump', role: 'Told Proud Boys to"stand back and stand by"', href: '/entities/individuals/donald-trump', status: 'Unindicted Co-Conspirator (implied)' },
 { name: 'Roger Stone', role: 'Proud Boys provided security, coordination alleged', href: '/entities/individuals/roger-stone', status: 'Investigation Ongoing' },
 ],
 timeline: [
 { date: 'Sept 29, 2020', event: 'Trump at debate:"Proud Boys, stand back and stand by"' },
 { date: 'Sept 29, 2020', event: 'Proud Boys merchandise with "Stand Back, Stand By"sells out' },
 { date: 'Nov 3, 2020', event: 'Election Day, Biden wins' },
 { date: 'Nov 2020', event: 'Proud Boys attend "Stop the Steal"rallies' },
 { date: 'Dec 12, 2020', event: 'Proud Boys stab 4 people at DC rally' },
 { date: 'Dec 19, 2020', event: 'Trump tweets "Be there, will be wild!"' },
 { date: 'Dec 20, 2020', event: 'Tarrio creates "Ministry of Self Defense"encrypted channel' },
 { date: 'Dec 29, 2020', event: 'Planning document:"1776 Returns"operational plan' },
 { date: 'Jan 4, 2021', event: 'Tarrio arrested in DC for burning BLM banner' },
 { date: 'Jan 4, 2021', event: 'Tarrio ordered to leave DC, continues directing remotely' },
 { date: 'Jan 5, 2021', event: 'Proud Boys meet in parking garage, finalize plans' },
 { date: 'Jan 6, 10:30 AM', event: 'Proud Boys gather at Washington Monument (not Trump rally)' },
 { date: 'Jan 6, 11:00 AM', event: 'Proud Boys march toward Capitol ahead of crowd' },
 { date: 'Jan 6, 12:53 PM', event: 'Proud Boys among first to breach barriers' },
 { date: 'Jan 6, 2:12 PM', event: 'Pezzola breaks window with stolen police shield' },
 { date: 'Jan 6, 2:13 PM', event: 'First rioters enter Capitol through Pezzola\'s breach' },
 { date: 'Mar 2022', event: 'Tarrio and others indicted for seditious conspiracy' },
 { date: 'May 2023', event: 'All five convicted of seditious conspiracy' },
 { date: 'Aug-Sept 2023', event: 'Sentences ranging from 10-22 years handed down' },
 ],
 legalOutcomes: [
 { defendant: 'Enrique Tarrio', charge: 'Seditious Conspiracy + Obstruction', outcome: '22 years federal prison (September 2023); longest January 6 sentence' },
 { defendant: 'Ethan Nordean', charge: 'Seditious Conspiracy + Obstruction', outcome: '18 years federal prison' },
 { defendant: 'Joseph Biggs', charge: 'Seditious Conspiracy + Obstruction', outcome: '17 years federal prison' },
 { defendant: 'Zachary Rehl', charge: 'Seditious Conspiracy + Obstruction', outcome: '15 years federal prison' },
 { defendant: 'Dominic Pezzola', charge: 'Seditious Conspiracy + Obstruction', outcome: '10 years federal prison' },
 ],
 charges: [
 { statute: '18 U.S.C. § 2384', description: 'Seditious conspiracy', defendants: 'Tarrio, Biggs, Nordean, Rehl, Pezzola' },
 { statute: '18 U.S.C. § 1512(k)', description: 'Conspiracy to obstruct an official proceeding', defendants: 'All five' },
 { statute: '18 U.S.C. § 1512(c)(2)', description: 'Obstruction of an official proceeding', defendants: 'All five' },
 { statute: '18 U.S.C. § 371', description: 'Conspiracy to prevent officer from discharging duties', defendants: 'All five' },
 { statute: '18 U.S.C. § 231(a)(3)', description: 'Civil disorder', defendants: 'All five' },
 ],
 coverup: [
 'The Proud Boys created a"1776 Returns"operational planning document detailing their strategy to occupy government buildings on January 6',
 'Enrique Tarrio was deliberately arrested on January 4 for burning a BLM banner, allowing him to direct operations remotely and avoid being identified at the Capitol',
 'Encrypted Telegram and Signal channels revealed extensive pre-planning under the "Ministry of Self Defense"leadership structure within the organization',
 'The group marched to the Capitol ahead of the rally crowd, arriving before Trump\'s speech ended, demonstrating that the breach was premeditated rather than spontaneous',
 'Dominic Pezzola used a stolen police riot shield to smash the first window breached at the Capitol, enabling the initial wave of rioters to enter the building',
 'Roger Stone\'s coordination with the Proud Boys remains under investigation, with evidence of communications in the days before January 6',
 'After Trump\'s"stand back and stand by"comment at the September 2020 debate, the Proud Boys adopted the phrase as a recruitment slogan and saw massive membership increases',
 ],
 evidence: [
 'Encrypted Signal and Telegram messages planning attack',
 '"1776 Returns"operational document',
 '"Ministry of Self Defense"leadership channel',
 'Video of coordinated breach tactics',
 'Testimony from cooperating witnesses',
 'Tarrio\'s communications directing from outside DC',
 'Evidence of pre-positioning and reconnaissance',
 ],
 sentences: {
 total: '82 years combined',
 tarrio: '22 years, longest January 6 sentence',
 nordean: '18 years',
 biggs: '17 years',
 rehl: '15 years',
 pezzola: '10 years',
 },
 trumpConnection: [
 'Trump\'s"stand back and stand by"comment energized the group',
 'Proud Boys adopted phrase as rallying cry',
 'Group interpreted Trump\'s rhetoric as call to action',
 'Roger Stone coordination under investigation',
 'Trump ally Alex Jones amplified Proud Boys',
 'Trump never condemned group, only gave weak disavowals',
 ],
 sources: [
 { title: 'DOJ Proud Boys Seditious Conspiracy Indictment', url: 'https://www.justice.gov/opa/pr/leader-proud-boys-and-four-other-members-indicted-federal-court-seditious-conspiracy-and', date: '2022' },
 { title: 'January 6 Committee Final Report', url: 'https://www.govinfo.gov/content/pkg/GPO-J6-REPORT/pdf/GPO-J6-REPORT.pdf', date: '2022' },
 { title: 'Tarrio Sentencing Memorandum', url: 'https://www.justice.gov/usao-dc/pr/proud-boys-leader-sentenced-22-years-prison-seditious-conspiracy', date: '2023' },
 ],
};

export default function ProudBoysSeditionPage() {
 return (
 <div className="min-h-screen pt-20 lg:pt-24 pb-16">
 <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
 <Link
 href="/investigations"
 className="inline-flex items-center gap-2 text-zinc-400 hover:text-blood-500 transition-colors mb-6 pt-4"
 >
 <ArrowLeft className="w-4 h-4"/>
 Back to Investigations
 </Link>

 {/* Header */}
 <motion.div
 initial={{ opacity: 0, y: 20 }}
 animate={{ opacity: 1, y: 0 }}
 className="border-2 border-blood-800/60 bg-[rgba(0,6,20,0.90)] p-6 lg:p-8 mb-8"
 >
 <div className="flex items-center gap-3 mb-4">
 <span className="px-3 py-1 text-xs font-bold uppercase border border-blood-500/30 bg-blood-500/20 text-blood-400">
 {investigation.severity}
 </span>
 <span className="px-3 py-1 text-xs font-bold uppercase border border-blood-500/30 bg-blood-500/20 text-blood-400">
 {investigation.status}
 </span>
 </div>
 <h1 className="text-3xl lg:text-4xl font-black glass-text uppercase tracking-wider mb-2">
 <GlitchText text={investigation.title} />
 </h1>
 <p className="text-lg text-blood-500 font-bold mb-4">{investigation.subtitle}</p>
 <p className="text-zinc-400 leading-relaxed">{investigation.summary}</p>
 </motion.div>

 {/* Sentences Box */}
 <motion.div
 initial={{ opacity: 0, y: 20 }}
 animate={{ opacity: 1, y: 0 }}
 transition={{ delay: 0.1 }}
 className="border-2 border-blood-800/60 bg-blood-950/20 p-6 mb-8"
 >
 <h2 className="text-xl font-bold glass-text uppercase tracking-wider mb-4 flex items-center gap-2">
 <Scale className="w-5 h-5 text-blood-500"/>
 Prison Sentences
 </h2>
 <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
 <div className="bg-black/50 p-4 border border-blood-500/30">
 <p className="text-3xl font-black text-blood-500">22 YRS</p>
 <p className="text-sm text-zinc-400">Enrique Tarrio</p>
 <p className="text-xs text-blood-400">Longest J6 Sentence</p>
 </div>
 <div className="bg-black/50 p-4 border border-[rgba(80,180,255,0.15)]">
 <p className="text-3xl font-black text-blood-700">18 YRS</p>
 <p className="text-sm text-zinc-400">Ethan Nordean</p>
 </div>
 <div className="bg-black/50 p-4 border border-[rgba(80,180,255,0.15)]">
 <p className="text-3xl font-black text-blood-700">17 YRS</p>
 <p className="text-sm text-zinc-400">Joseph Biggs</p>
 </div>
 <div className="bg-black/50 p-4 border border-[rgba(80,180,255,0.15)]">
 <p className="text-3xl font-black text-zinc-400">15 YRS</p>
 <p className="text-sm text-zinc-400">Zachary Rehl</p>
 </div>
 <div className="bg-black/50 p-4 border border-[rgba(80,180,255,0.15)]">
 <p className="text-3xl font-black text-zinc-400">10 YRS</p>
 <p className="text-sm text-zinc-400">Dominic Pezzola</p>
 </div>
 <div className="bg-black/50 p-4 border border-blood-500/30">
 <p className="text-3xl font-black text-blood-500">82 YRS</p>
 <p className="text-sm text-zinc-400">Total Combined</p>
 </div>
 </div>
 </motion.div>
 <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.15 }} className="glass-card p-6 mb-8 border-l-4 border-blood-600">
 <h2 className="text-xl font-bold glass-text uppercase tracking-wider mb-4 flex items-center gap-2"><ShieldAlert className="w-5 h-5 text-blood-500"/>The Cover-Up</h2>
 <div className="space-y-3">{investigation.coverup.map((item, idx) => (<div key={idx} className="p-3 bg-blood-950/20 border border-blood-500/30"><p className="text-sm text-zinc-300">{item}</p></div>))}</div>
 </motion.div>


 <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
 {/* Main Content */}
 <div className="lg:col-span-2 space-y-8">
 {/* Key Figures */}
 <motion.div
 initial={{ opacity: 0, y: 20 }}
 animate={{ opacity: 1, y: 0 }}
 transition={{ delay: 0.2 }}
 className="glass-card p-6"
 >
 <h2 className="text-xl font-bold glass-text uppercase tracking-wider mb-4 flex items-center gap-2">
 <Users className="w-5 h-5 text-blood-500"/>
 Key Figures
 </h2>
 <div className="space-y-3">
 {investigation.keyFigures.map((figure, idx) => (
 <div key={idx} className="flex items-start justify-between p-3 bg-[rgba(0,10,28,0.82)] border border-[rgba(80,180,255,0.15)]">
 <div className="flex-1">
 {figure.href ? (
 <Link href={figure.href} className="font-bold text-blood-400 hover:text-blood-300 transition-colors">
 {figure.name}
 </Link>
 ) : (
 <span className="font-bold glass-text">{figure.name}</span>
 )}
 <p className="text-sm text-zinc-400 mt-1">{figure.role}</p>
 </div>
 <span className="text-xs px-2 py-1 bg-blood-500/20 text-blood-400 border border-blood-500/30">
 {figure.status}
 </span>
 </div>
 ))}
 </div>
 </motion.div>

 {/* Trump Connection */}
 <motion.div
 initial={{ opacity: 0, y: 20 }}
 animate={{ opacity: 1, y: 0 }}
 transition={{ delay: 0.25 }}
 className="glass-card p-6 border-l-4 border-blood-600"
 >
 <h2 className="text-xl font-bold glass-text uppercase tracking-wider mb-4 flex items-center gap-2">
 <AlertTriangle className="w-5 h-5 text-blood-500"/>
 Trump Connection
 </h2>
 <div className="bg-black/50 p-4 border border-blood-500/30 mb-4">
 <p className="text-lg text-blood-400 font-bold italic">
 &quot;Proud Boys, stand back and stand by.&quot;
 </p>
 <p className="text-sm text-zinc-500 mt-2">- Donald Trump, Presidential Debate, September 29, 2020</p>
 </div>
 <ul className="space-y-2">
 {investigation.trumpConnection.map((item, idx) => (
 <li key={idx} className="text-sm text-zinc-400 flex items-start gap-2">
 <span className="text-blood-500 mt-1">•</span>
 {item}
 </li>
 ))}
 </ul>
 </motion.div>

 {/* Timeline */}
 <motion.div
 initial={{ opacity: 0, y: 20 }}
 animate={{ opacity: 1, y: 0 }}
 transition={{ delay: 0.3 }}
 className="glass-card p-6"
 >
 <h2 className="text-xl font-bold glass-text uppercase tracking-wider mb-4 flex items-center gap-2">
 <Calendar className="w-5 h-5 text-blood-500"/>
 Timeline
 </h2>
 <div className="space-y-4">
 {investigation.timeline.map((item, idx) => (
 <div key={idx} className="relative pl-4 border-l-2 border-[rgba(80,180,255,0.15)]">
 <div className="absolute -left-[5px] top-0 w-2 h-2 bg-blood-500"/>
 <p className="text-xs text-blood-500 font-mono">{item.date}</p>
 <p className="text-sm text-zinc-300">{item.event}</p>
 </div>
 ))}
 </div>
 </motion.div>
 </div>

 {/* Sidebar */}
 <div className="space-y-6">
 {/* Charges */}
 <motion.div
 initial={{ opacity: 0, x: 20 }}
 animate={{ opacity: 1, x: 0 }}
 className="glass-card p-6"
 >
 <h3 className="text-lg font-bold glass-text uppercase tracking-wider mb-4 flex items-center gap-2">
 <Scale className="w-5 h-5 text-blood-500"/>
 Criminal Charges
 </h3>
 <div className="space-y-3">
 {investigation.charges.map((charge, idx) => (
 <div key={idx} className="p-3 bg-[rgba(0,10,28,0.82)] border border-[rgba(80,180,255,0.15)]">
 <code className="text-xs text-blood-400 font-mono">{charge.statute}</code>
 <p className="text-sm text-zinc-300 mt-1">{charge.description}</p>
 </div>
 ))}
 </div>
 </motion.div>

 {/* Evidence */}
 <motion.div
 initial={{ opacity: 0, x: 20 }}
 animate={{ opacity: 1, x: 0 }}
 transition={{ delay: 0.1 }}
 className="glass-card p-6"
 >
 <h3 className="text-lg font-bold glass-text uppercase tracking-wider mb-4 flex items-center gap-2">
 <FileText className="w-5 h-5 text-blood-500"/>
 Key Evidence
 </h3>
 <ul className="space-y-2">
 {investigation.evidence.map((item, idx) => (
 <li key={idx} className="text-sm text-zinc-400 flex items-start gap-2">
 <span className="text-blood-500">•</span>
 {item}
 </li>
 ))}
 </ul>
 </motion.div>

 {/* Sources */}

 <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.1 }} className="glass-card p-6">
 <h3 className="text-lg font-bold glass-text uppercase tracking-wider mb-4 flex items-center gap-2"><Scale className="w-5 h-5 text-blood-500"/>Legal Outcomes</h3>
 <div className="space-y-3">{investigation.legalOutcomes.map((item, idx) => (<div key={idx} className="p-3 bg-[rgba(0,10,28,0.82)] border border-[rgba(80,180,255,0.15)]"><p className="font-bold glass-text text-sm">{item.defendant}</p><p className="text-xs text-zinc-400 mt-1">{item.charge}</p><p className="text-xs text-blood-400 mt-1">{item.outcome}</p></div>))}</div>
 </motion.div>
 <motion.div
 initial={{ opacity: 0, x: 20 }}
 animate={{ opacity: 1, x: 0 }}
 transition={{ delay: 0.2 }}
 className="glass-card p-6"
 >
 <h3 className="text-lg font-bold glass-text uppercase tracking-wider mb-4">
 Sources
 </h3>
 <div className="space-y-2">
 {investigation.sources.map((source, idx) => (
 <a
 key={idx}
 href={source.url}
 target="_blank"
 rel="noopener noreferrer"
 className="flex items-start gap-2 p-2 text-sm text-zinc-400 hover:text-blood-400 hover:bg-[rgba(0,10,28,0.82)] transition-colors"
 >
 <ExternalLink className="w-4 h-4 mt-0.5 flex-shrink-0"/>
 <div>
 <span>{source.title}</span>
 <span className="text-zinc-600 ml-2">({source.date})</span>
 </div>
 </a>
 ))}
 </div>
 </motion.div>
 </div>
 </div>
 </div>
 </div>
 );
}
