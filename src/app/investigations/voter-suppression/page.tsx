'use client';

import { useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import {
 AlertTriangle,
 Calendar,
 ChevronRight,
 ExternalLink,
 FileText,
 Users,
 Scale,
 Clock,
 Vote,
 Mail,
 UserX, ShieldAlert} from 'lucide-react';
import GlitchText from '@/components/effects/GlitchText';

const investigationData = {
 title: 'Voter Suppression',
 subtitle: 'Systematic Attacks on Voting Rights, USPS Sabotage, and Election Interference',
 severity: 'critical' as const,
 status: 'Documented, Ongoing Impact',
 lastUpdated: 'February 2026',
 summary: `The Trump administration and allied state governments engaged in systematic voter suppression targeting minority and Democratic-leaning voters. This included purging 1.4+ million voters from rolls, attacking mail-in voting, appointing a major donor to sabotage the Postal Service during a pandemic election, spreading election disinformation, and pressuring election officials. These efforts culminated in the January 6th insurrection attempt to overturn the 2020 election results.`,
 
 suppressionStats: {
 votersPurged: '1.4+ million',
 mailinVotesDelayed: 'Millions',
 sortingMachinesRemoved: '671',
 mailboxesRemoved: '700+',
 falseClaimsTweets: '400+',
 },

 keyFigures: [
 { name: 'Donald Trump', role: 'Principal, Spread disinformation, pressured officials', href: '/entities/individuals/donald-trump' },
 { name: 'Louis DeJoy', role: 'Postmaster General, Sabotaged USPS operations', href: '/entities/individuals/louis-dejoy' },
 { name: 'Mark Meadows', role: 'Chief of Staff, Coordinated pressure campaigns', href: '/entities/individuals/mark-meadows' },
 { name: 'Rudy Giuliani', role: 'Attorney, Spread election lies', href: '/entities/individuals/rudy-giuliani' },
 { name: 'Brad Raffensperger', role: 'GA Secretary of State, Target of Trump pressure', href: '/entities/individuals/brad-raffensperger' },
 ],

 suppressionTactics: [
 {
 tactic: 'USPS Sabotage (DeJoy)',
 details: [
 'Removed 671 mail sorting machines before election',
 'Removed 700+ mail collection boxes',
 'Eliminated overtime for postal workers',
 'Slowed mail delivery during pandemic voting surge',
 'DeJoy was $700K Trump donor with conflicts of interest',
 'Blocked Congress from providing USPS funding',
 ],
 },
 {
 tactic: 'Voter Roll Purges',
 details: [
 'Georgia purged 340,000 voters in 2019',
 'Wisconsin purged 232,000 voters before 2020',
 'Ohio purged 235,000 before 2020',
 'Targeted minority and Democratic-leaning areas',
 'Used flawed "Interstate Crosscheck"data',
 'Many legitimate voters removed without notice',
 ],
 },
 {
 tactic: 'Mail-In Voting Attacks',
 details: [
 'Trump claimed mail voting was"totally corrupt"',
 'Encouraged supporters to vote in person only',
 'Filed lawsuits to limit mail ballot extensions',
 'Attacked states for sending mail ballot applications',
 'Created distrust in legitimate voting method',
 'Sued to throw out mail ballots after election',
 ],
 },
 {
 tactic: 'Official Pressure Campaign',
 details: [
 'Called Georgia officials to"find 11,780 votes"',
 'Pressured DOJ to declare election corrupt',
 'Asked states to "decertify" results',
 'Pressured VP Pence to reject electors',
 'Contacted local election officials',
 'Threatened officials who refused to comply',
 ],
 },
 {
 tactic: 'Disinformation Campaign',
 details: [
 'Claimed election was "stolen" with no evidence',
 'Spread lies about voting machine fraud',
 'Promoted conspiracy theories about ballots',
 'Used social media to amplify false claims',
 'Held rallies spreading election lies',
 'Over 400 tweets with election disinformation',
 ],
 },
 ],

 georgiaCall: {
 date: 'January 2, 2021',
 duration: '1 hour, 2 minutes',
 keyQuotes: [
 '"I just want to find 11,780 votes, which is one more than we have."',
 '"There\'s nothing wrong with saying that, you know, um, that you\'ve recalculated."',
 '"The people of Georgia are angry, the people of the country are angry. And there\'s nothing wrong with saying that, you know, that you\'ve recalculated."',
 '"All I want to do is this: I just want to find 11,780 votes."',
 ],
 participants: ['Donald Trump', 'Mark Meadows', 'Brad Raffensperger', 'Ryan Germany'],
 legalStatus: 'Subject of Georgia RICO indictment',
 },

 dejoyConflicts: [
 { conflict: '$700,000+ donated to Trump and RNC', impact: 'Appointed to sabotage USPS' },
 { conflict: 'Owned $30M+ in competitors to USPS', impact: 'Financial interest in USPS failure' },
 { conflict: 'XPO Logistics stock holdings', impact: 'USPS contractor benefits from delays' },
 { conflict: 'No postal experience', impact: 'First Postmaster without postal background' },
 ],

 timeline: [
 { date: 'February 2020', event: 'Trump begins attacking mail-in voting' },
 { date: 'May 2020', event: 'Trump threatens states sending mail ballot applications' },
 { date: 'June 2020', event: 'Louis DeJoy appointed Postmaster General' },
 { date: 'July 2020', event: 'DeJoy implements "reforms" slowing mail' },
 { date: 'August 2020', event: '671 mail sorting machines removed' },
 { date: 'August 2020', event: 'DeJoy testifies before Congress, defends changes' },
 { date: 'September 2020', event: 'Court orders halt to USPS changes' },
 { date: 'November 3, 2020', event: 'Election Day, Trump claims victory prematurely' },
 { date: 'November 7, 2020', event: 'Biden declared winner; Trump refuses to concede' },
 { date: 'November-December 2020', event: '60+ lawsuits filed, all fail or dismissed' },
 { date: 'December 14, 2020', event: 'Electoral College certifies Biden win' },
 { date: 'January 2, 2021', event: 'Trump calls Georgia to "find" votes' },
 { date: 'January 6, 2021', event: 'Capitol insurrection to overturn results' },
 { date: 'August 2023', event: 'Georgia RICO indictment for election interference' },
 ],

 lawsuits: [
 { count: '62+', description: 'Post-election lawsuits filed' },
 { count: '61', description: 'Cases lost, dismissed, or withdrawn' },
 { count: '1', description: 'Minor procedural win (not related to fraud)' },
 { count: '0', description: 'Evidence of widespread fraud found' },
 ],

 legalOutcomes: [
 { defendant: 'Donald Trump (Georgia)', charge: 'RICO conspiracy, solicitation of violation of oath by public officer, and 11 other charges', outcome: 'Indicted Aug 2023 by Fulton County DA Fani Willis with 18 co-defendants; case ongoing' },
 { defendant: 'Donald Trump (federal)', charge: 'Conspiracy to defraud the United States, obstruction, conspiracy against rights (Jack Smith indictment)', outcome: 'Indicted Aug 2023; case dismissed after Trump won 2024 election per DOJ policy' },
 { defendant: 'Rudy Giuliani', charge: 'RICO conspiracy, solicitation of violation of oath, false statements to Georgia legislature', outcome: 'Indicted in Georgia Aug 2023; disbarred in NY and DC; filed for bankruptcy' },
 { defendant: 'Louis DeJoy (Postmaster General)', charge: 'Deliberately dismantling mail sorting machines and removing mailboxes before 2020 election', outcome: 'Federal court ordered USPS to reverse changes; IG investigation found DeJoy misled Congress' },
 { defendant: 'Mark Meadows', charge: 'RICO conspiracy, solicitation of violation of oath, participated in Raffensperger call', outcome: 'Indicted in Georgia Aug 2023; attempted removal to federal court denied' },
 { defendant: 'Jeffrey Clark', charge: 'RICO conspiracy, attempted use of DOJ to pressure Georgia to overturn election results', outcome: 'Indicted in Georgia Aug 2023; nearly fired by acting AG Rosen who threatened mass resignation' },
 { defendant: 'Sidney Powell', charge: 'RICO conspiracy, computer trespass related to Coffee County voting machine breach', outcome: 'Pleaded guilty Oct 2023 to 6 misdemeanors; agreed to cooperate and testify' },
 ],
 charges: [
 { statute: 'O.C.G.A. \u00a7 16-14-4 (Georgia RICO)', description: 'Engaging in a criminal enterprise to overturn the 2020 Georgia presidential election results', count: '1 count covering the entire conspiracy with 18 co-defendants' },
 { statute: '18 U.S.C. \u00a7 371', description: 'Conspiracy to defraud the United States by obstructing the lawful federal function of collecting and counting votes', count: '1 count (federal Jack Smith indictment)' },
 { statute: '52 U.S.C. \u00a7 20511', description: 'Solicitation of election fraud, Trump asking Raffensperger to"find 11,780 votes"', count: '1 count based on the recorded January 2, 2021 phone call' },
 { statute: '18 U.S.C. \u00a7 241', description: 'Conspiracy against the right of citizens to vote and have their votes counted', count: '1 count (federal indictment) covering multiple state pressure campaigns' },
 { statute: '18 U.S.C. \u00a7 1512(c)(2)', description: 'Obstruction of an official proceeding, conspiring to obstruct the January 6 Congressional certification', count: '1 count in federal indictment' },
 { statute: '39 U.S.C. \u00a7 101 (Postal Reorganization Act)', description: 'Deliberate degradation of postal service to suppress mail-in voting during a pandemic election', count: 'Systematic removal of 671+ sorting machines and tens of thousands of mailboxes' },
 { statute: '5 U.S.C. \u00a7 7323 (Hatch Act)', description: 'Using government resources and official proceedings to promote false election fraud claims', count: 'Multiple violations by administration officials' },
 ],
 coverup: [
 'Trump\'s Presidential Advisory Commission on Election Integrity, led by Kris Kobach, was created in 2017 to validate claims of widespread voter fraud but was dissolved in 2018 after finding no evidence of significant fraud, its findings were never publicly released.',
 'Louis DeJoy, a major Trump donor with no postal experience, was installed as Postmaster General in June 2020 and immediately began removing mail sorting machines and collection boxes in Democratic-leaning areas ahead of the election.',
 'When DeJoy testified before Congress about postal changes, a federal judge found his testimony"not credible"and the USPS Inspector General found he had misled Congress about the scope and purpose of operational changes.',
 'The January 2, 2021 call in which Trump pressured Georgia Secretary of State Raffensperger to"find 11,780 votes"was recorded without Trump\'s knowledge, Raffensperger released the tape after Trump mischaracterized the call.',
 'Trump allies breached voting machines in Coffee County, Georgia in January 2021 to search for evidence of fraud; surveillance footage later revealed the breach was coordinated with Trump\'s legal team.',
 'Jeffrey Clark, a mid-level DOJ official, drafted a letter at Trump\'s direction falsely claiming DOJ had found election irregularities in Georgia (the scheme was only stopped when acting AG Rosen and other senior officials threatened to resign en masse.',
 'Despite losing 61 out of 62 post-election lawsuits) with judges appointed by both parties finding zero evidence of widespread fraud, Trump continued to claim the election was "stolen" to justify ongoing voter suppression efforts.',
 'The Big Lie narrative was deliberately constructed to lay groundwork for restrictive voting laws: 19 states passed 34 laws restricting voting access in 2021 alone, disproportionately affecting minority voters.',
 ],

 sources: [
 { title: 'Georgia Call Audio and Transcript', url: 'https://www.washingtonpost.com/politics/trump-raffensperger-call-transcript-georgia-vote/', type: 'Audio/Transcript' },
 { title: 'USPS Inspector General Report', url: 'https://www.uspsoig.gov/reports/audit-reports/operational-changes-mail-delivery', type: 'Government Report' },
 { title: 'Election Lawsuit Tracker', url: 'https://www.democracydocket.com/', type: 'Legal Tracker' },
 ],
};

const severityColors = {
 critical: 'bg-blood-900 text-blood-400 border-blood-800',
 high: 'bg-blood-950 text-blood-600 border-blood-800',
 medium: 'bg-zinc-900 text-zinc-300 border-zinc-700',
 low: 'bg-blood-900 text-blood-400 border-blood-800',
};

export default function VoterSuppressionPage() {
 const [expandedTactic, setExpandedTactic] = useState<string | null>('USPS Sabotage (DeJoy)');

 return (
 <div className="min-h-screen text-white">
 {/* Header */}
 <div className="border-b border-[rgba(80,180,255,0.15)]">
 <div className="max-w-6xl mx-auto px-6 py-8">
 <nav className="flex items-center gap-2 text-sm text-zinc-500 mb-6">
 <Link href="/"className="hover:text-white transition-colors">Home</Link>
 <ChevronRight className="w-4 h-4"/>
 <Link href="/investigations"className="hover:text-white transition-colors">Investigations</Link>
 <ChevronRight className="w-4 h-4"/>
 <span className="text-blood-500">Voter Suppression</span>
 </nav>

 <div className="flex items-center gap-4 mb-4">
 <span className={`px-3 py-1 text-xs font-bold uppercase border ${severityColors[investigationData.severity]}`}>
 {investigationData.severity} SEVERITY
 </span>
 <span className="px-3 py-1 text-xs font-medium bg-[#000c20] text-zinc-300 border border-[rgba(60,160,255,0.18)]">
 {investigationData.status}
 </span>
 </div>

 <h1 className="text-4xl md:text-5xl font-black mb-4">
 <GlitchText>{investigationData.title}</GlitchText>
 </h1>
 <p className="text-xl text-zinc-400 mb-4">{investigationData.subtitle}</p>
 
 <div className="flex items-center gap-4 text-sm text-zinc-500">
 <span className="flex items-center gap-2">
 <Clock className="w-4 h-4"/>
 Updated: {investigationData.lastUpdated}
 </span>
 </div>
 </div>
 </div>

 <div className="max-w-6xl mx-auto px-6 py-8">
 {/* Stats */}
 <motion.section
 initial={{ opacity: 0, y: 20 }}
 animate={{ opacity: 1, y: 0 }}
 className="mb-12"
 >
 <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
 <div className="glass-card p-4 text-center border-l-4 border-blood-600">
 <UserX className="w-6 h-6 text-blood-500 mx-auto mb-2"/>
 <p className="text-xl font-black text-blood-500">{investigationData.suppressionStats.votersPurged}</p>
 <p className="text-xs text-zinc-400">Voters Purged</p>
 </div>
 <div className="glass-card p-4 text-center border-l-4 border-blood-600">
 <Mail className="w-6 h-6 text-blood-500 mx-auto mb-2"/>
 <p className="text-xl font-black text-blood-500">{investigationData.suppressionStats.sortingMachinesRemoved}</p>
 <p className="text-xs text-zinc-400">Sorters Removed</p>
 </div>
 <div className="glass-card p-4 text-center border-l-4 border-blood-800">
 <Mail className="w-6 h-6 text-blood-700 mx-auto mb-2"/>
 <p className="text-xl font-black text-blood-700">{investigationData.suppressionStats.mailboxesRemoved}</p>
 <p className="text-xs text-zinc-400">Mailboxes Removed</p>
 </div>
 <div className="glass-card p-4 text-center border-l-4 border-blood-800">
 <Vote className="w-6 h-6 text-blood-700 mx-auto mb-2"/>
 <p className="text-xl font-black text-blood-700">{investigationData.suppressionStats.mailinVotesDelayed}</p>
 <p className="text-xs text-zinc-400">Ballots Delayed</p>
 </div>
 <div className="glass-card p-4 text-center border-l-4 border-zinc-500">
 <AlertTriangle className="w-6 h-6 text-zinc-400 mx-auto mb-2"/>
 <p className="text-xl font-black text-zinc-400">{investigationData.suppressionStats.falseClaimsTweets}</p>
 <p className="text-xs text-zinc-400">Disinfo Tweets</p>
 </div>
 </div>
 </motion.section>

 {/* Summary */}
 <motion.section
 initial={{ opacity: 0, y: 20 }}
 animate={{ opacity: 1, y: 0 }}
 transition={{ delay: 0.1 }}
 className="glass-card p-6 mb-8"
 >
 <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
 <FileText className="w-5 h-5 text-blood-500"/>
 Executive Summary
 </h2>
 <p className="text-zinc-300 leading-relaxed">{investigationData.summary}</p>
 </motion.section>

 {/* Key Figures */}
 <motion.section
 initial={{ opacity: 0, y: 20 }}
 animate={{ opacity: 1, y: 0 }}
 transition={{ delay: 0.15 }}
 className="glass-card p-6 mb-8"
 >
 <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
 <Users className="w-5 h-5 text-blood-500"/>
 Key Figures
 </h2>
 <div className="space-y-3">
 {investigationData.keyFigures.map((figure, index) => (
 <Link
 key={index}
 href={figure.href}
 className="flex items-center justify-between p-4 bg-[#000a1c] border border-[rgba(80,180,255,0.15)] hover:border-blood-500/50 transition-all"
 >
 <div>
 <span className="font-medium text-blood-400">{figure.name}</span>
 <p className="text-sm text-zinc-500">{figure.role}</p>
 </div>
 <ExternalLink className="w-4 h-4 text-zinc-600"/>
 </Link>
 ))}
 </div>
 </motion.section>

 {/* Georgia Call */}
 <motion.section
 initial={{ opacity: 0, y: 20 }}
 animate={{ opacity: 1, y: 0 }}
 transition={{ delay: 0.2 }}
 className="glass-card p-6 mb-8 border-l-4 border-blood-600"
 >
 <h2 className="text-xl font-bold mb-4">The Georgia Phone Call</h2>
 <div className="grid grid-cols-2 gap-4 mb-4">
 <div>
 <p className="text-xs text-zinc-500 uppercase">Date</p>
 <p className="text-zinc-200">{investigationData.georgiaCall.date}</p>
 </div>
 <div>
 <p className="text-xs text-zinc-500 uppercase">Duration</p>
 <p className="text-zinc-200">{investigationData.georgiaCall.duration}</p>
 </div>
 </div>
 
 <p className="text-xs text-zinc-500 uppercase mb-2">Key Quotes</p>
 <div className="space-y-3 mb-4">
 {investigationData.georgiaCall.keyQuotes.map((quote, i) => (
 <blockquote key={i} className="text-zinc-300 italic border-l-2 border-blood-600 pl-3 text-sm">
 {quote}
 </blockquote>
 ))}
 </div>

 <div className="flex items-center justify-between">
 <span className="text-zinc-500 text-sm">Legal Status:</span>
 <span className="text-blood-400 font-medium">{investigationData.georgiaCall.legalStatus}</span>
 </div>
 </motion.section>

 {/* Suppression Tactics */}
 <motion.section
 initial={{ opacity: 0, y: 20 }}
 animate={{ opacity: 1, y: 0 }}
 transition={{ delay: 0.25 }}
 className="glass-card p-6 mb-8"
 >
 <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
 <AlertTriangle className="w-5 h-5 text-blood-500"/>
 Suppression Tactics
 </h2>
 <div className="space-y-4">
 {investigationData.suppressionTactics.map((item) => (
 <div key={item.tactic} className="border border-[rgba(80,180,255,0.15)]">
 <button
 onClick={() => setExpandedTactic(expandedTactic === item.tactic ? null : item.tactic)}
 className="w-full flex items-center justify-between p-4 hover:bg-[#000a1c] transition-colors"
 >
 <span className="font-bold text-blood-400">{item.tactic}</span>
 <ChevronRight className={`w-5 h-5 transition-transform ${expandedTactic === item.tactic ? 'rotate-90' : ''}`} />
 </button>
 {expandedTactic === item.tactic && (
 <div className="px-4 pb-4">
 <ul className="space-y-2">
 {item.details.map((detail, i) => (
 <li key={i} className="flex items-start gap-2 text-sm text-zinc-300">
 <span className="text-blood-500 mt-1">•</span>
 {detail}
 </li>
 ))}
 </ul>
 </div>
 )}
 </div>
 ))}
 </div>
 </motion.section>

 {/* DeJoy Conflicts */}
 <motion.section
 initial={{ opacity: 0, y: 20 }}
 animate={{ opacity: 1, y: 0 }}
 transition={{ delay: 0.3 }}
 className="glass-card p-6 mb-8"
 >
 <h2 className="text-xl font-bold mb-4">Louis DeJoy Conflicts of Interest</h2>
 <div className="space-y-3">
 {investigationData.dejoyConflicts.map((item, index) => (
 <div key={index} className="flex items-start gap-4 p-3 bg-[#000a1c] border border-[rgba(80,180,255,0.15)]">
 <div className="flex-1">
 <span className="font-medium text-blood-400">{item.conflict}</span>
 <p className="text-sm text-zinc-400 mt-1">{item.impact}</p>
 </div>
 </div>
 ))}
 </div>
 </motion.section>

 {/* Lawsuit Stats */}
 <motion.section
 initial={{ opacity: 0, y: 20 }}
 animate={{ opacity: 1, y: 0 }}
 transition={{ delay: 0.35 }}
 className="glass-card p-6 mb-8"
 >
 <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
 <Scale className="w-5 h-5 text-blood-500"/>
 Post-Election Lawsuits
 </h2>
 <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
 {investigationData.lawsuits.map((item, index) => (
 <div key={index} className="text-center p-4 bg-[#000a1c] border border-[rgba(80,180,255,0.15)]">
 <p className="text-3xl font-black text-blood-500">{item.count}</p>
 <p className="text-xs text-zinc-400 mt-1">{item.description}</p>
 </div>
 ))}
 </div>
 </motion.section>

 {/* Timeline */}
 <motion.section
 initial={{ opacity: 0, y: 20 }}
 animate={{ opacity: 1, y: 0 }}
 transition={{ delay: 0.4 }}
 className="glass-card p-6 mb-8"
 >
 <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
 <Calendar className="w-5 h-5 text-blood-500"/>
 Timeline
 </h2>
 <div className="space-y-4 max-h-96 overflow-y-auto">
 {investigationData.timeline.map((item, index) => (
 <div key={index} className="relative pl-4 border-l-2 border-[rgba(80,180,255,0.15)]">
 <div className="absolute -left-[5px] top-0 w-2 h-2 bg-blood-500"/>
 <p className="text-xs text-blood-500 font-mono">{item.date}</p>
 <p className="text-sm text-zinc-300">{item.event}</p>
 </div>
 ))}
 </div>
 </motion.section>

 
 <motion.section initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.15 }} className="glass-card p-6 mb-8 border-l-4 border-blood-600">
 <h2 className="text-xl font-bold glass-text uppercase tracking-wider mb-4 flex items-center gap-2"><ShieldAlert className="w-5 h-5 text-blood-500"/>The Cover-Up</h2>
 <div className="space-y-3">{investigationData.coverup.map((item, idx) => (<div key={idx} className="p-3 bg-blood-950 border border-blood-800"><p className="text-sm text-zinc-300">{item}</p></div>))}</div>
 </motion.section>
 
 <motion.section initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5 }} className="glass-card p-6 mb-8">
 <h2 className="text-xl font-bold glass-text uppercase tracking-wider mb-4 flex items-center gap-2"><Scale className="w-5 h-5 text-blood-500"/>Legal Outcomes</h2>
 <div className="space-y-3">{investigationData.legalOutcomes.map((item, idx) => (<div key={idx} className="p-3 bg-[#000a1c] border border-[rgba(80,180,255,0.15)]"><p className="font-bold glass-text text-sm">{item.defendant}</p><p className="text-xs text-zinc-400 mt-1">{item.charge}</p><p className="text-xs text-blood-400 mt-1">{item.outcome}</p></div>))}</div>
 </motion.section>
 
 <motion.section initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.45 }} className="glass-card p-6 mb-8">
 <h2 className="text-xl font-bold glass-text uppercase tracking-wider mb-4 flex items-center gap-2"><Scale className="w-5 h-5 text-blood-500"/>Applicable Charges &amp; Statutes</h2>
 <div className="space-y-3">{investigationData.charges.map((charge, idx) => (<div key={idx} className="p-4 bg-[#000a1c] border border-[rgba(80,180,255,0.15)]"><p className="font-bold text-blood-400 text-sm font-mono">{charge.statute}</p><p className="text-sm text-zinc-300 mt-1">{charge.description}</p><p className="text-xs text-blood-400 mt-1">{charge.count}</p></div>))}</div>
 </motion.section>
 {/* Sources */}
 <motion.section
 initial={{ opacity: 0, y: 20 }}
 animate={{ opacity: 1, y: 0 }}
 transition={{ delay: 0.45 }}
 className="glass-card p-6"
 >
 <h2 className="text-xl font-bold mb-4">Sources & Documentation</h2>
 <div className="space-y-2">
 {investigationData.sources.map((source, index) => (
 <a
 key={index}
 href={source.url}
 target="_blank"
 rel="noopener noreferrer"
 className="flex items-center justify-between p-3 bg-[#000a1c] hover:bg-[#000c20] border border-[rgba(80,180,255,0.15)] transition-colors"
 >
 <div>
 <span className="text-zinc-200">{source.title}</span>
 <span className="block text-xs text-zinc-500">{source.type}</span>
 </div>
 <ExternalLink className="w-4 h-4 text-zinc-600"/>
 </a>
 ))}
 </div>
 </motion.section>
 </div>
 </div>
 );
}
