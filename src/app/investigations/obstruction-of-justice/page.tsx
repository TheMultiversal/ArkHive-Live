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
 Shield,
 XCircle, ShieldAlert} from 'lucide-react';
import GlitchText from '@/components/effects/GlitchText';

const investigationData = {
 title: 'Obstruction of Justice',
 subtitle: 'A Pattern of Witness Tampering, Evidence Destruction, and Interference',
 severity: 'critical' as const,
 status: 'Documented, Multiple Instances',
 lastUpdated: 'February 2026',
 summary: `The Mueller Report documented at least 10 instances of potential obstruction of justice by Donald Trump. While the Special Counsel declined to make a charging decision due to DOJ policy against indicting a sitting president, the report explicitly stated it"does not exonerate"Trump. These acts include firing FBI Director James Comey, attempting to fire Mueller himself, witness tampering via social media, and directing aides to lie to investigators.`,
 
 obstructionStats: {
 muellerInstances: '10+',
 witnessesIntimidated: '15+',
 firingAttempts: '3',
 pardonsOffered: '6',
 tweetsDuringInvestigation: '1,100+',
 },

 keyFigures: [
 { name: 'Donald Trump', role: 'Principal, Directed obstruction campaign', href: '/entities/individuals/donald-trump' },
 { name: 'Michael Flynn', role: 'National Security Advisor, Pardoned after lying to FBI', href: '/entities/individuals/michael-flynn' },
 { name: 'Roger Stone', role: 'Advisor, Commuted sentence, pardoned for obstruction', href: '/entities/individuals/roger-stone' },
 { name: 'Paul Manafort', role: 'Campaign Chair, Pardoned for witness tampering', href: '/entities/individuals/paul-manafort' },
 { name: 'Michael Cohen', role: 'Personal Attorney, Testified about obstruction efforts', href: '/entities/individuals/michael-cohen' },
 { name: 'Don McGahn', role: 'White House Counsel, Refused to fire Mueller', href: '/entities/individuals/don-mcgahn' },
 { name: 'William Barr', role: 'AG, Misrepresented Mueller findings', href: '/entities/individuals/william-barr' },
 ],

 muellerObstructionInstances: [
 {
 instance: 1,
 title: 'Flynn Investigation',
 description: 'Trump asked Comey to"let this go"regarding Flynn investigation and later fired Comey',
 evidence: 'Comey memos, testimony, contemporaneous notes',
 elements: 'Obstructive act: Yes | Intent: Substantial | Nexus: Yes',
 },
 {
 instance: 2,
 title: 'Firing James Comey',
 description: 'Fired FBI Director overseeing Russia investigation, admitted on TV it was about"the Russia thing"',
 evidence: 'Lester Holt interview, White House statements, tweets',
 elements: 'Obstructive act: Yes | Intent: Substantial | Nexus: Yes',
 },
 {
 instance: 3,
 title: 'Attempts to Fire Mueller',
 description: 'Ordered Don McGahn to fire Mueller; McGahn refused and prepared to resign',
 evidence: 'McGahn testimony, contemporaneous notes',
 elements: 'Obstructive act: Yes | Intent: Substantial | Nexus: Yes',
 },
 {
 instance: 4,
 title: 'Attempts to Curtail Mueller',
 description: 'Directed Corey Lewandowski to limit Mueller investigation to future elections only',
 evidence: 'Lewandowski testimony, handwritten notes',
 elements: 'Obstructive act: Yes | Intent: Substantial | Nexus: Yes',
 },
 {
 instance: 5,
 title: 'Ordering McGahn to Deny',
 description: 'After public reporting, ordered McGahn to deny Trump told him to fire Mueller',
 evidence: 'McGahn testimony, White House records',
 elements: 'Obstructive act: Yes | Intent: Substantial | Nexus: Yes',
 },
 {
 instance: 6,
 title: 'Witness Tampering, Flynn',
 description: 'Personal counsel contacted Flynn lawyer suggesting cooperation might affect pardon decision',
 evidence: 'Flynn attorney statements, Mueller Report',
 elements: 'Obstructive act: Yes | Intent: Evidence exists | Nexus: Yes',
 },
 {
 instance: 7,
 title: 'Witness Tampering, Manafort',
 description: 'Praised Manafort for not"flipping,"dangled pardons publicly',
 evidence: 'Tweets, public statements, reporting',
 elements: 'Obstructive act: Yes | Intent: Substantial | Nexus: Yes',
 },
 {
 instance: 8,
 title: 'Witness Tampering, Cohen',
 description: 'Attacked Cohen publicly after cooperation, praised others who refused to cooperate',
 evidence: 'Tweets, rally statements, Cohen testimony',
 elements: 'Obstructive act: Yes | Intent: Evidence exists | Nexus: Yes',
 },
 {
 instance: 9,
 title: 'Trump Tower Meeting Coverup',
 description: 'Dictated misleading statement about Don Jr.\'s meeting with Russians',
 evidence: 'Hope Hicks testimony, Air Force One records',
 elements: 'Obstructive act: Yes | Intent: Evidence exists | Nexus: Yes',
 },
 {
 instance: 10,
 title: 'Written Response Lies',
 description: 'Provided incomplete and potentially false written answers to Mueller questions',
 evidence: 'Mueller Report noting inadequate responses',
 elements: 'Potentially insufficient evidence for prosecution',
 },
 ],

 comeyTimeline: [
 { date: 'January 27, 2017', event: 'Trump demands "loyalty" from Comey at private dinner' },
 { date: 'February 14, 2017', event: 'Trump asks Comey to"let Flynn go"in Oval Office meeting' },
 { date: 'March 30, 2017', event: 'Trump calls Comey, asks him to"lift the cloud"of investigation' },
 { date: 'April 11, 2017', event: 'Trump calls Comey again about investigation' },
 { date: 'May 9, 2017', event: 'Trump fires Comey while FBI investigates Russia ties' },
 { date: 'May 10, 2017', event: 'Trump meets Russian officials, calls Comey"nut job"' },
 { date: 'May 11, 2017', event: 'Trump tells Lester Holt firing was about "Russia thing"' },
 { date: 'May 12, 2017', event: 'Trump tweets threat about "tapes" of conversations' },
 ],

 pardonsForObstruction: [
 { name: 'Michael Flynn', date: 'November 25, 2020', crime: 'Lying to FBI about Russia contacts' },
 { name: 'Paul Manafort', date: 'December 23, 2020', crime: 'Witness tampering, financial crimes' },
 { name: 'Roger Stone', date: 'December 23, 2020', crime: 'Obstruction, witness tampering, lying to Congress' },
 { name: 'George Papadopoulos', date: 'December 22, 2020', crime: 'Lying to FBI about Russia contacts' },
 { name: 'Steve Bannon', date: 'January 19, 2021', crime: 'Build the Wall fraud (preemptive)' },
 { name: 'Charles Kushner', date: 'December 23, 2020', crime: 'Tax evasion, witness tampering' },
 ],

 timeline: [
 { date: 'January 6, 2017', event: 'Intelligence community briefs Trump on Russian interference' },
 { date: 'January 27, 2017', event: 'Trump demands loyalty from Comey at dinner' },
 { date: 'February 14, 2017', event: 'Trump asks Comey to drop Flynn investigation' },
 { date: 'May 9, 2017', event: 'Trump fires FBI Director James Comey' },
 { date: 'May 17, 2017', event: 'Robert Mueller appointed Special Counsel' },
 { date: 'June 17, 2017', event: 'Trump orders McGahn to fire Mueller, McGahn refuses' },
 { date: 'January 25, 2018', event: 'Trump attempts to fire Mueller again, overruled' },
 { date: 'February 2018', event: 'Trump orders McGahn to create false record denying firing order' },
 { date: 'March 2019', event: 'Mueller completes report documenting obstruction' },
 { date: 'March 24, 2019', event: 'Barr releases misleading summary of Mueller Report' },
 { date: 'April 18, 2019', event: 'Redacted Mueller Report released; 10 obstruction instances' },
 { date: 'July 24, 2019', event: 'Mueller testifies before Congress' },
 { date: 'November 2020', event: 'Trump pardons Flynn after election loss' },
 { date: 'December 2020', event: 'Trump pardons Manafort, Stone, others' },
 ],

 muellerConclusions: [
 '"If we had confidence after a thorough investigation of the facts that the President clearly did not commit obstruction of justice, we would so state."',
 '"Based on the facts and the applicable legal standards, we are unable to reach that judgment."',
 '"The evidence we obtained about the President\'s actions and intent presents difficult issues that would need to be resolved if we were making a traditional prosecutorial judgment."',
 '"The conclusion that Congress may apply the obstruction laws to the President\'s corrupt exercise of the powers of office accords with our constitutional system of checks and balances."',
 ],

 legalOutcomes: [
 { defendant: 'Roger Stone', charge: 'Obstruction of proceedings, witness tampering, making false statements to Congress', outcome: 'Convicted on 7 felony counts (November 2019); sentenced to 40 months; commuted then pardoned by Trump' },
 { defendant: 'Paul Manafort', charge: 'Witness tampering, conspiracy, financial crimes', outcome: 'Convicted on 8 counts (August 2018); sentenced to 7.5 years; pardoned by Trump December 2020' },
 { defendant: 'Michael Flynn', charge: 'Making false statements to FBI about contacts with Russian ambassador', outcome: 'Pleaded guilty (December 2017); pardoned by Trump November 2020 before sentencing' },
 { defendant: 'George Papadopoulos', charge: 'Making false statements to FBI about Russia contacts', outcome: 'Pleaded guilty, served 12 days in prison; pardoned by Trump December 2020' },
 { defendant: 'Michael Cohen', charge: 'Making false statements to Congress about Trump Tower Moscow', outcome: 'Pleaded guilty, sentenced to 3 years (December 2018)' },
 { defendant: 'Steve Bannon', charge: 'Contempt of Congress for defying January 6 Committee subpoena', outcome: 'Convicted July 2022; sentenced to 4 months in prison' },
 { defendant: 'Donald Trump', charge: 'Federal obstruction and classified documents charges (Special Counsel Jack Smith)', outcome: 'Indicted on 40 federal counts (2023); case dismissed after election (2025)' },
 ],

 charges: [
 { statute: '18 U.S.C. § 1512(b)', description: 'Witness tampering, corruptly persuading witnesses to withhold testimony, alter documents, or evade legal process', count: 'Multiple instances documented in Mueller Report' },
 { statute: '18 U.S.C. § 1512(c)', description: 'Obstruction of official proceeding, obstructing, influencing, or impeding congressional and FBI investigations', count: '10+ instances identified by Mueller' },
 { statute: '18 U.S.C. § 1505', description: 'Obstruction of proceedings before departments, agencies, and committees, interfering with FBI and congressional investigations', count: 'Multiple instances' },
 { statute: '18 U.S.C. § 1001', description: 'False statements, making materially false statements to federal investigators and Congress', count: 'Multiple defendants convicted' },
 { statute: '18 U.S.C. § 1503', description: 'Obstruction of justice, corruptly endeavoring to influence, obstruct, or impede the due administration of justice', count: 'Multiple instances' },
 { statute: '18 U.S.C. § 3', description: 'Accessory after the fact, pardoning co-conspirators who refused to cooperate with investigations', count: '6 pardons for investigation-related crimes' },
 { statute: '2 U.S.C. § 192', description: 'Contempt of Congress, directing subordinates to defy congressional subpoenas', count: 'Multiple instances' },
 ],

 coverup: [
 'Attorney General William Barr released a misleading 4-page summary of the Mueller Report that falsely framed it as an exoneration, before the full report revealed 10 instances of potential obstruction',
 'Trump publicly dangled pardons for witnesses who refused to cooperate with Mueller, praising Manafort for being "brave" while attacking Cohen as a "rat" for cooperating',
 'Trump ordered White House Counsel Don McGahn to fire Mueller and then ordered him to create a false record denying the order was ever given',
 'The DOJ invoked a longstanding Office of Legal Counsel opinion that a sitting president cannot be indicted, preventing Mueller from making a charging decision despite substantial evidence',
 'Trump provided incomplete and potentially false written answers to Mueller\'s questions, while refusing to submit to an in-person interview despite repeated requests',
 'After the investigation, Trump pardoned virtually every associate convicted of crimes related to obstructing the investigation, effectively rewarding their silence',
 'Barr held a press conference 90 minutes before releasing the redacted Mueller Report to frame the narrative, using the phrase"no collusion"four times despite it not being a legal term Mueller investigated',
 'The White House asserted blanket immunity for former officials like Don McGahn to prevent them from testifying before Congress about the obstruction documented in the Mueller Report',
 ],

 sources: [
 { title: 'Mueller Report Volume II (Obstruction)', url: 'https://www.justice.gov/archives/sco/file/1373816/download', type: 'Official Report' },
 { title: 'Comey Senate Testimony', url: 'https://www.intelligence.senate.gov/sites/default/files/documents/os-jcomey-060817.pdf', type: 'Congressional Testimony' },
 { title: 'McGahn Testimony Notes', url: 'http://web.archive.org/web/20220919234432/https://judiciary.house.gov/news/documentsingle.aspx?DocumentID=4887', type: 'Congressional Document' },
 { title: 'Lester Holt Interview', url: 'https://www.nbcnews.com/news/us-news/trump-reveals-he-asked-comey-whether-he-was-under-investigation-n757821', type: 'Interview Transcript' },
 { title: 'Pardon Power Analysis', url: 'https://www.lawfareblog.com/trump-pardon-roundup', type: 'Legal Analysis' },
 ],
};

const severityColors = {
 critical: 'bg-blood-600/20 text-blood-400 border-blood-600/30',
 high: 'bg-blood-800/20 text-blood-600 border-blood-800/30',
 medium: 'bg-zinc-500/20 text-zinc-300 border-zinc-500/30',
 low: 'bg-blood-600/20 text-blood-400 border-blood-600/30',
};

export default function ObstructionPage() {
 const [expandedInstance, setExpandedInstance] = useState<number | null>(1);

 return (
 <div className="min-h-screen text-white">
 {/* Header */}
 <div className="border-b border-[rgba(60,160,255,0.12)]">
 <div className="max-w-6xl mx-auto px-6 py-8">
 <nav className="flex items-center gap-2 text-sm text-zinc-500 mb-6">
 <Link href="/"className="hover:text-white transition-colors">Home</Link>
 <ChevronRight className="w-4 h-4"/>
 <Link href="/investigations"className="hover:text-white transition-colors">Investigations</Link>
 <ChevronRight className="w-4 h-4"/>
 <span className="text-blood-500">Obstruction of Justice</span>
 </nav>

 <div className="flex items-center gap-4 mb-4">
 <span className={`px-3 py-1 text-xs font-bold uppercase border ${severityColors[investigationData.severity]}`}>
 {investigationData.severity} SEVERITY
 </span>
 <span className="px-3 py-1 text-xs font-medium bg-[rgba(0,30,80,0.40)] text-zinc-300 border border-[rgba(60,160,255,0.18)]">
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
 <Shield className="w-6 h-6 text-blood-500 mx-auto mb-2"/>
 <p className="text-xl font-black text-blood-500">{investigationData.obstructionStats.muellerInstances}</p>
 <p className="text-xs text-zinc-400">Mueller Instances</p>
 </div>
 <div className="glass-card p-4 text-center border-l-4 border-blood-600">
 <Users className="w-6 h-6 text-blood-500 mx-auto mb-2"/>
 <p className="text-xl font-black text-blood-500">{investigationData.obstructionStats.witnessesIntimidated}</p>
 <p className="text-xs text-zinc-400">Witnesses Intimidated</p>
 </div>
 <div className="glass-card p-4 text-center border-l-4 border-blood-800">
 <XCircle className="w-6 h-6 text-blood-700 mx-auto mb-2"/>
 <p className="text-xl font-black text-blood-700">{investigationData.obstructionStats.firingAttempts}</p>
 <p className="text-xs text-zinc-400">Firing Attempts</p>
 </div>
 <div className="glass-card p-4 text-center border-l-4 border-blood-800">
 <Scale className="w-6 h-6 text-blood-700 mx-auto mb-2"/>
 <p className="text-xl font-black text-blood-700">{investigationData.obstructionStats.pardonsOffered}</p>
 <p className="text-xs text-zinc-400">Pardons for Silence</p>
 </div>
 <div className="glass-card p-4 text-center border-l-4 border-zinc-500">
 <AlertTriangle className="w-6 h-6 text-zinc-400 mx-auto mb-2"/>
 <p className="text-xl font-black text-zinc-400">{investigationData.obstructionStats.tweetsDuringInvestigation}</p>
 <p className="text-xs text-zinc-400">Attack Tweets</p>
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
 className="flex items-center justify-between p-4 bg-[rgba(0,20,55,0.40)] border border-[rgba(60,160,255,0.12)] hover:border-blood-500/50 transition-all"
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

 {/* Mueller Conclusions Box */}
 <motion.section
 initial={{ opacity: 0, y: 20 }}
 animate={{ opacity: 1, y: 0 }}
 transition={{ delay: 0.2 }}
 className="glass-card p-6 mb-8 border-l-4 border-blood-600"
 >
 <h2 className="text-xl font-bold mb-4">Mueller Report Conclusions</h2>
 <div className="space-y-4">
 {investigationData.muellerConclusions.map((quote, index) => (
 <blockquote key={index} className="text-zinc-300 italic border-l-2 border-[rgba(60,160,255,0.18)] pl-4">
 {quote}
 </blockquote>
 ))}
 </div>
 <p className="text-sm text-zinc-500 mt-4">| Mueller Report, Volume II</p>
 </motion.section>

 {/* 10 Obstruction Instances */}
 <motion.section
 initial={{ opacity: 0, y: 20 }}
 animate={{ opacity: 1, y: 0 }}
 transition={{ delay: 0.25 }}
 className="glass-card p-6 mb-8"
 >
 <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
 <AlertTriangle className="w-5 h-5 text-blood-500"/>
 10 Documented Obstruction Instances
 </h2>
 <div className="space-y-4">
 {investigationData.muellerObstructionInstances.map((item) => (
 <div key={item.instance} className="border border-[rgba(60,160,255,0.12)]">
 <button
 onClick={() => setExpandedInstance(expandedInstance === item.instance ? null : item.instance)}
 className="w-full flex items-center justify-between p-4 hover:bg-[rgba(0,20,55,0.40)] transition-colors"
 >
 <div className="text-left">
 <span className="font-bold text-blood-400">#{item.instance}: {item.title}</span>
 </div>
 <ChevronRight className={`w-5 h-5 transition-transform ${expandedInstance === item.instance ? 'rotate-90' : ''}`} />
 </button>
 {expandedInstance === item.instance && (
 <div className="px-4 pb-4 space-y-3">
 <p className="text-zinc-300">{item.description}</p>
 <div className="text-sm">
 <p className="text-zinc-500">Evidence: <span className="text-zinc-400">{item.evidence}</span></p>
 <p className="text-zinc-500 mt-1">Legal Elements: <span className="text-blood-400">{item.elements}</span></p>
 </div>
 </div>
 )}
 </div>
 ))}
 </div>
 </motion.section>

 {/* Comey Timeline */}
 <motion.section
 initial={{ opacity: 0, y: 20 }}
 animate={{ opacity: 1, y: 0 }}
 transition={{ delay: 0.3 }}
 className="glass-card p-6 mb-8"
 >
 <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
 <Calendar className="w-5 h-5 text-blood-500"/>
 Comey Firing Timeline
 </h2>
 <div className="space-y-4">
 {investigationData.comeyTimeline.map((item, index) => (
 <div key={index} className="relative pl-4 border-l-2 border-blood-600">
 <div className="absolute -left-[5px] top-0 w-2 h-2 bg-blood-500"/>
 <p className="text-xs text-blood-500 font-mono">{item.date}</p>
 <p className="text-sm text-zinc-300">{item.event}</p>
 </div>
 ))}
 </div>
 </motion.section>

 {/* Pardons for Silence */}
 <motion.section
 initial={{ opacity: 0, y: 20 }}
 animate={{ opacity: 1, y: 0 }}
 transition={{ delay: 0.35 }}
 className="glass-card p-6 mb-8"
 >
 <h2 className="text-xl font-bold mb-4">Pardons for Silence</h2>
 <p className="text-zinc-400 text-sm mb-4">Trump pardoned co-conspirators who refused to cooperate with investigators:</p>
 <div className="space-y-3">
 {investigationData.pardonsForObstruction.map((pardon, index) => (
 <div key={index} className="flex items-center justify-between p-3 bg-[rgba(0,20,55,0.40)] border border-[rgba(60,160,255,0.12)]">
 <div>
 <span className="font-medium text-blood-400">{pardon.name}</span>
 <p className="text-xs text-zinc-500">{pardon.crime}</p>
 </div>
 <span className="text-xs text-zinc-500">{pardon.date}</span>
 </div>
 ))}
 </div>
 </motion.section>

 {/* Full Timeline */}
 <motion.section
 initial={{ opacity: 0, y: 20 }}
 animate={{ opacity: 1, y: 0 }}
 transition={{ delay: 0.4 }}
 className="glass-card p-6 mb-8"
 >
 <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
 <Calendar className="w-5 h-5 text-blood-500"/>
 Complete Timeline
 </h2>
 <div className="space-y-4 max-h-96 overflow-y-auto">
 {investigationData.timeline.map((item, index) => (
 <div key={index} className="relative pl-4 border-l-2 border-[rgba(60,160,255,0.12)]">
 <div className="absolute -left-[5px] top-0 w-2 h-2 bg-blood-500"/>
 <p className="text-xs text-blood-500 font-mono">{item.date}</p>
 <p className="text-sm text-zinc-300">{item.event}</p>
 </div>
 ))}
 </div>
 </motion.section>

 
 <motion.section initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.15 }} className="glass-card p-6 mb-8 border-l-4 border-blood-600">
 <h2 className="text-xl font-bold glass-text uppercase tracking-wider mb-4 flex items-center gap-2"><ShieldAlert className="w-5 h-5 text-blood-500"/>The Cover-Up</h2>
 <div className="space-y-3">{investigationData.coverup.map((item, idx) => (<div key={idx} className="p-3 bg-blood-950/20 border border-blood-500/30"><p className="text-sm text-zinc-300">{item}</p></div>))}</div>
 </motion.section>
 
 <motion.section initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5 }} className="glass-card p-6 mb-8">
 <h2 className="text-xl font-bold glass-text uppercase tracking-wider mb-4 flex items-center gap-2"><Scale className="w-5 h-5 text-blood-500"/>Legal Outcomes</h2>
 <div className="space-y-3">{investigationData.legalOutcomes.map((item, idx) => (<div key={idx} className="p-3 bg-[rgba(0,20,55,0.40)] border border-[rgba(60,160,255,0.12)]"><p className="font-bold glass-text text-sm">{item.defendant}</p><p className="text-xs text-zinc-400 mt-1">{item.charge}</p><p className="text-xs text-blood-400 mt-1">{item.outcome}</p></div>))}</div>
 </motion.section>
 
 <motion.section initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.45 }} className="glass-card p-6 mb-8">
 <h2 className="text-xl font-bold glass-text uppercase tracking-wider mb-4 flex items-center gap-2"><Scale className="w-5 h-5 text-blood-500"/>Applicable Charges &amp; Statutes</h2>
 <div className="space-y-3">{investigationData.charges.map((charge, idx) => (<div key={idx} className="p-4 bg-[rgba(0,20,55,0.40)] border border-[rgba(60,160,255,0.12)]"><p className="font-bold text-blood-400 text-sm font-mono">{charge.statute}</p><p className="text-sm text-zinc-300 mt-1">{charge.description}</p><p className="text-xs text-blood-400 mt-1">{charge.count}</p></div>))}</div>
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
 className="flex items-center justify-between p-3 bg-[rgba(0,20,55,0.40)] hover:bg-[rgba(0,30,80,0.30)] border border-[rgba(60,160,255,0.12)] transition-colors"
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
