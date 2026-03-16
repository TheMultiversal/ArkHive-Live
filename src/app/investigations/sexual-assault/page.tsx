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
 Heart,
 Shield, ShieldAlert} from 'lucide-react';
import GlitchText from '@/components/effects/GlitchText';

const investigationData = {
 title: 'Sexual Assault & Misconduct',
 subtitle: '26+ Accusers, E. Jean Carroll Verdict, and a Pattern of Predatory Behavior',
 severity: 'critical' as const,
 status: 'Documented, Civil Liability Established',
 lastUpdated: 'February 2026',
 summary: `At least 26 women have publicly accused Donald Trump of sexual misconduct ranging from harassment to rape. In 2023, a federal jury found Trump liable for sexual abuse and defamation of E. Jean Carroll, awarding her $5 million. A second jury in 2024 awarded Carroll an additional $83.3 million for defamation. Trump's own words on the Access Hollywood tape|"I just start kissing them... grab them by the pussy"|confirm his predatory behavior pattern.`,
 
 accuserStats: {
 totalAccusers: '26+',
 carrollVerdict1: '$5 million',
 carrollVerdict2: '$83.3 million',
 accessHollywoodYear: '2005',
 yearSpan: '1970s-2013',
 },

 keyFigures: [
 { name: 'Donald Trump', role: 'Defendant, Found liable for sexual abuse', href: '/entities/individuals/donald-trump', status: 'Liable - $88.3M verdict' },
 { name: 'E. Jean Carroll', role: 'Accuser, Won $88.3 million in verdicts', href: '/entities/individuals/e-jean-carroll', status: 'Prevailed at trial' },
 { name: 'Jill Harth', role: 'Accused Trump of groping and attempted rape in 1993; filed federal lawsuit in 1997', href: '/entities/individuals/jill-harth', status: 'Lawsuit settled' },
 { name: 'Summer Zervos', role: 'Former Apprentice contestant who accused Trump of sexual assault in 2007; filed defamation suit', href: '/entities/individuals/summer-zervos', status: 'Case dismissed (SOL)' },
 { name: 'Jessica Leeds', role: 'Accused Trump of groping her on an airplane in the 1970s', href: '/entities/individuals/jessica-leeds', status: 'Public accuser' },
 { name: 'Stormy Daniels', role: 'Adult film actress paid $130,000 in hush money before 2016 election', href: '/entities/individuals/stormy-daniels', status: 'Key witness, hush money trial' },
 { name: 'Karen McDougal', role: 'Former Playboy model silenced via $150,000 AMI catch-and-kill payment', href: '/entities/individuals/karen-mcdougal', status: 'Catch-and-kill victim' },
 { name: 'Michael Cohen', role: 'Trump\'s attorney who arranged Stormy Daniels hush money payment', href: '/entities/individuals/michael-cohen', status: 'Convicted, cooperating witness' },
 { name: 'Lewis Kaplan', role: 'Federal judge who presided over both E. Jean Carroll trials', href: '/entities/individuals/lewis-kaplan', status: 'Presiding judge' },
 { name: 'Roberta Kaplan', role: 'E. Jean Carroll\'s lead attorney in both civil trials', href: '/entities/individuals/roberta-kaplan', status: 'Plaintiff\'s counsel' },
 ],

 carrollCase: {
 accuser: 'E. Jean Carroll',
 allegations: 'Rape in Bergdorf Goodman dressing room (mid-1990s)',
 trial1: {
 date: 'May 2023',
 verdict: 'Liable for sexual abuse and defamation',
 award: '$5 million',
 findings: 'Jury found Trump sexually abused Carroll',
 },
 trial2: {
 date: 'January 2024',
 verdict: 'Liable for defamation',
 award: '$83.3 million',
 findings: 'Jury punished Trump for continued attacks on Carroll',
 },
 totalAward: '$88.3 million',
 juryNote: 'Jury clarified that finding of"sexual abuse"under NY law encompasses what is commonly understood as rape',
 },

 accessHollywood: {
 date: 'October 7, 2016',
 context: 'Recorded in 2005, leaked during campaign',
 quotes: [
 '"I just start kissing them. It\'s like a magnet. Just kiss. I don\'t even wait."',
 '"And when you\'re a star, they let you do it. You can do anything."',
 '"Grab \'em by the pussy. You can do anything."',
 '"I moved on her like a bitch."',
 ],
 response: 'Trump dismissed as"locker room talk"',
 aftermath: 'Multiple women came forward after release',
 },

 publicAccusers: [
 { name: 'E. Jean Carroll', allegation: 'Rape (mid-1990s)', outcome: 'Won $88.3M in civil verdicts' },
 { name: 'Jill Harth', allegation: 'Sexual assault, attempted rape (1993)', outcome: 'Filed lawsuit, settled' },
 { name: 'Ivana Trump', allegation: 'Rape (1989)', outcome: 'Alleged in divorce deposition' },
 { name: 'Summer Zervos', allegation: 'Sexual assault (2007)', outcome: 'Defamation lawsuit' },
 { name: 'Jessica Leeds', allegation: 'Groping on airplane (1970s)', outcome: 'Public accusation' },
 { name: 'Kristin Anderson', allegation: 'Groping (early 1990s)', outcome: 'Public accusation' },
 { name: 'Rachel Crooks', allegation: 'Forced kissing (2005)', outcome: 'Public accusation' },
 { name: 'Natasha Stoynoff', allegation: 'Forced kissing (2005)', outcome: 'Public accusation' },
 { name: 'Cassandra Searles', allegation: 'Groping, harassment (2013)', outcome: 'Miss USA pageant' },
 { name: 'Mindy McGillivray', allegation: 'Groping (2003)', outcome: 'Public accusation' },
 { name: 'Temple Taggart', allegation: 'Forced kissing (1997)', outcome: 'Miss USA pageant' },
 { name: 'Karena Virginia', allegation: 'Groping (1998)', outcome: 'Public accusation' },
 ],

 pageantMisconduct: {
 context: 'Trump owned Miss USA, Miss Universe, Miss Teen USA pageants',
 allegations: [
 'Walking into dressing rooms while contestants changing',
 'Multiple contestants reported unwanted intrusions',
 'Trump bragged about this on Howard Stern show',
 'Teen pageant contestants (minors) also reported incidents',
 '"I\'ll go backstage before a show and everyone\'s getting dressed"',
 ],
 howardSternQuote: '"Well, I\'ll tell you the funniest is that I\'ll go backstage before a show, and everyone\'s getting dressed and ready and everything else, and you know, no men are anywhere. And I\'m allowed to go in because I\'m the owner of the pageant."',
 },

 timeline: [
 { date: '1970s', event: 'Jessica Leeds alleges groping on airplane' },
 { date: '1989', event: 'Ivana Trump alleges rape in divorce deposition' },
 { date: '1993', event: 'Jill Harth alleges assault, files lawsuit' },
 { date: 'Mid-1990s', event: 'E. Jean Carroll alleges rape at Bergdorf Goodman' },
 { date: '1997-2013', event: 'Multiple pageant contestants allege misconduct' },
 { date: '2005', event: 'Access Hollywood tape recorded' },
 { date: 'October 7, 2016', event: 'Access Hollywood tape released' },
 { date: 'October 2016', event: 'Multiple women come forward after tape' },
 { date: 'January 2017', event: 'Summer Zervos files defamation lawsuit' },
 { date: 'June 2019', event: 'E. Jean Carroll goes public with rape allegation' },
 { date: 'November 2019', event: 'Carroll files defamation lawsuit' },
 { date: 'May 2023', event: 'Carroll wins first trial; $5M verdict' },
 { date: 'January 2024', event: 'Carroll wins second trial; $83.3M verdict' },
 { date: '2024', event: 'Trump continues to attack Carroll, faces contempt risk' },
 ],

 defamationPattern: [
 'Called accusers "liars" and"not my type"',
 'Claimed women were seeking fame or money',
 'Attacked physical appearance of accusers',
 'Called Carroll allegations"a hoax"',
 'Continued attacks even after losing verdicts',
 'Used presidential platform to demean accusers',
 ],

 legalStatus: [
 { case: 'E. Jean Carroll I', status: 'Verdict: $5 million', outcome: 'Liable for sexual abuse and defamation' },
 { case: 'E. Jean Carroll II', status: 'Verdict: $83.3 million', outcome: 'Liable for defamation' },
 { case: 'Summer Zervos', status: 'Dismissed (after delays)', outcome: 'Statute of limitations' },
 { case: 'Jill Harth', status: 'Settled', outcome: 'Terms undisclosed' },
 { case: 'Criminal', status: 'None filed', outcome: 'Statute of limitations' },
 ],

 legalOutcomes: [
 { defendant: 'Donald Trump (Carroll v. Trump I)', charge: 'Sexual abuse and defamation', outcome: 'Federal jury found Trump liable for sexual abuse of E. Jean Carroll in 1996; awarded $5 million in damages (May 2023)' },
 { defendant: 'Donald Trump (Carroll v. Trump II)', charge: 'Defamation for repeated denials and attacks on Carroll\'s credibility', outcome: 'Jury awarded E. Jean Carroll $83.3 million in compensatory and punitive damages (Jan 2024)' },
 { defendant: 'Donald Trump (Summer Zervos)', charge: 'Defamation for calling sexual assault allegations lies', outcome: 'Case delayed throughout presidency; dismissed Nov 2021 after statute of limitations expired' },
 { defendant: 'Donald Trump (Jill Harth)', charge: 'Sexual harassment and assault', outcome: 'Civil suit filed 1997; settled out of court with terms undisclosed' },
 { defendant: 'Trump campaign (NDA enforcement)', charge: 'Using NDAs and legal threats to silence accusers', outcome: 'Multiple women reported legal intimidation; no charges for pattern of suppression' },
 { defendant: 'Donald Trump (Access Hollywood)', charge: 'Admission of sexual assault on tape:"grab them by the pussy"', outcome: 'Carroll jury cited tape as corroborating evidence; no criminal charges filed' },
 ],
 charges: [
 { statute: 'N.Y. Penal Law § 130.55', description: 'Sexual abuse in the third degree, subjecting another person to sexual contact without consent', count: 'Jury found liable in Carroll case (civil standard); at least 26 public accusations' },
 { statute: '18 U.S.C. § 1512(b)', description: 'Witness tampering through threats and intimidation against accusers who came forward publicly', count: 'Pattern across multiple accusers since 2016' },
 { statute: 'N.Y. Civil Rights Law § 70-a', description: 'Adult Survivors Act enabling civil claims for sexual assault outside normal statute of limitations', count: 'Carroll case filed under this 2022 lookback window' },
 { statute: '18 U.S.C. § 1341', description: 'Mail fraud, using NDAs and hush money payments to conceal sexual misconduct from voters', count: 'Multiple instances connected to 2016 campaign' },
 { statute: '52 U.S.C. § 30101 (FECA)', description: 'Campaign finance violations, hush money payments to suppress sexual misconduct allegations before 2016 election', count: 'Stormy Daniels ($130,000) and Karen McDougal ($150,000) payments' },
 { statute: 'N.Y. Penal Law § 130.35', description: 'Rape in the first degree, forcible sexual intercourse without consent', count: 'Carroll alleged rape; jury found sexual abuse but not rape under narrow legal definition' },
 ],
 coverup: [
 'Michael Cohen arranged a $130,000 hush money payment to Stormy Daniels just 11 days before the 2016 election, funneled through a shell company to conceal its purpose, Trump was later convicted of 34 felony counts for falsifying business records to hide this payment.',
 'The National Enquirer\'s parent company AMI paid Karen McDougal $150,000 in a"catch and kill"scheme to buy and bury her story about an affair with Trump before the election.',
 'Trump used non-disclosure agreements systematically to silence women, with former employees and contestants on The Apprentice reporting they were bound by NDAs preventing them from speaking about his behavior.',
 'After the Access Hollywood tape leaked in October 2016, Trump dismissed his recorded admission of grabbing women as"locker room talk"and orchestrated a press conference with Bill Clinton\'s accusers to deflect attention.',
 'Trump publicly attacked and defamed nearly every woman who accused him, calling them liars, saying they were"not his type,"and suggesting they were politically motivated, a jury later determined these attacks constituted defamation.',
 'Multiple former Miss USA and Miss Teen USA contestants reported that Trump walked into dressing rooms while contestants were undressed, corroborating his own 2005 boast on Howard Stern that he would"walk right in"to inspect contestants.',
 'The Trump campaign and allies threatened legal action against accusers who came forward in 2016, creating a chilling effect that discouraged additional women from speaking publicly.',
 ],

 sources: [
 { title: 'Carroll v. Trump Verdict (Trial 1)', url: 'https://www.courtlistener.com/docket/14540261/carroll-v-trump/', type: 'Court Document' },
 { title: 'Carroll v. Trump Verdict (Trial 2)', url: 'https://apnews.com/article/trump-carroll-defamation-damages-trial-83200c109982f58c9575b0743e7c3771', type: 'News Report' },
 { title: 'Access Hollywood Tape', url: 'https://www.washingtonpost.com/politics/trump-recorded-having-extremely-lewd-conversation-about-women-in-2005/', type: 'Video/Transcript' },
 { title: 'Complete List of Trump Accusers', url: 'https://www.businessinsider.com/women-accused-trump-sexual-misconduct-list-2017-12', type: 'Compilation' },
 { title: 'Pageant Dressing Room Reports', url: 'https://www.buzzfeednews.com/article/kendalltaggart/teen-beauty-queens-say-trump-walked-in-on-them-changing', type: 'Investigation' },
 { title: 'Howard Stern Interviews Archive', url: 'https://factba.se/trump/topic/howard-stern', type: 'Audio Archive' },
 ],
};

const severityColors = {
 critical: 'bg-blood-900 text-blood-400 border-blood-800',
 high: 'bg-blood-950 text-blood-600 border-blood-800',
 medium: 'bg-zinc-900 text-zinc-300 border-zinc-700',
 low: 'bg-blood-900 text-blood-400 border-blood-800',
};

export default function SexualAssaultPage() {
 const [showAllAccusers, setShowAllAccusers] = useState(false);

 return (
 <div className="min-h-screen text-white">
 {/* Content Warning */}
 <div className="bg-blood-900 border-b border-blood-600">
 <div className="max-w-6xl mx-auto px-6 py-3">
 <p className="text-sm text-blood-400 flex items-center gap-2">
 <AlertTriangle className="w-4 h-4"/>
 Content Warning: This page contains descriptions of sexual assault and misconduct.
 </p>
 </div>
 </div>

 {/* Header */}
 <div className="border-b border-[rgba(80,180,255,0.15)]">
 <div className="max-w-6xl mx-auto px-6 py-8">
 <nav className="flex items-center gap-2 text-sm text-zinc-500 mb-6">
 <Link href="/"className="hover:text-white transition-colors">Home</Link>
 <ChevronRight className="w-4 h-4"/>
 <Link href="/investigations"className="hover:text-white transition-colors">Investigations</Link>
 <ChevronRight className="w-4 h-4"/>
 <span className="text-blood-500">Sexual Assault</span>
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
 <Users className="w-6 h-6 text-blood-500 mx-auto mb-2"/>
 <p className="text-xl font-black text-blood-500">{investigationData.accuserStats.totalAccusers}</p>
 <p className="text-xs text-zinc-400">Accusers</p>
 </div>
 <div className="glass-card p-4 text-center border-l-4 border-blood-600">
 <Scale className="w-6 h-6 text-blood-500 mx-auto mb-2"/>
 <p className="text-xl font-black text-blood-500">{investigationData.accuserStats.carrollVerdict1}</p>
 <p className="text-xs text-zinc-400">Carroll Verdict 1</p>
 </div>
 <div className="glass-card p-4 text-center border-l-4 border-blood-600">
 <Scale className="w-6 h-6 text-blood-500 mx-auto mb-2"/>
 <p className="text-xl font-black text-blood-500">{investigationData.accuserStats.carrollVerdict2}</p>
 <p className="text-xs text-zinc-400">Carroll Verdict 2</p>
 </div>
 <div className="glass-card p-4 text-center border-l-4 border-blood-800">
 <Calendar className="w-6 h-6 text-blood-700 mx-auto mb-2"/>
 <p className="text-xl font-black text-blood-700">{investigationData.accuserStats.accessHollywoodYear}</p>
 <p className="text-xs text-zinc-400">Access Hollywood</p>
 </div>
 <div className="glass-card p-4 text-center border-l-4 border-zinc-500">
 <Clock className="w-6 h-6 text-zinc-400 mx-auto mb-2"/>
 <p className="text-sm font-black text-zinc-400">{investigationData.accuserStats.yearSpan}</p>
 <p className="text-xs text-zinc-400">Timespan</p>
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

 {/* E. Jean Carroll Case */}
 <motion.section
 initial={{ opacity: 0, y: 20 }}
 animate={{ opacity: 1, y: 0 }}
 transition={{ delay: 0.15 }}
 className="glass-card p-6 mb-8 border-l-4 border-blood-600"
 >
 <h2 className="text-xl font-bold mb-4">E. Jean Carroll: Verdict Established Liability</h2>
 <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.15 }} className="glass-card p-6 mb-8 border-l-4 border-blood-600">
 <h2 className="text-xl font-bold glass-text uppercase tracking-wider mb-4 flex items-center gap-2"><ShieldAlert className="w-5 h-5 text-blood-500"/>The Cover-Up</h2>
 <div className="space-y-3">{investigationData.coverup.map((item, idx) => (<div key={idx} className="p-3 bg-blood-950 border border-blood-800"><p className="text-sm text-zinc-300">{item}</p></div>))}</div>
 </motion.div>

 
 <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-4">
 <div className="p-4 bg-[#000a1c] border border-[rgba(80,180,255,0.15)]">
 <p className="text-xs text-zinc-500 uppercase">Trial 1 - May 2023</p>
 <p className="text-2xl font-black text-blood-500">{investigationData.carrollCase.trial1.award}</p>
 <p className="text-sm text-zinc-400">{investigationData.carrollCase.trial1.findings}</p>
 </div>
 <div className="p-4 bg-[#000a1c] border border-[rgba(80,180,255,0.15)]">
 <p className="text-xs text-zinc-500 uppercase">Trial 2 - January 2024</p>
 <p className="text-2xl font-black text-blood-500">{investigationData.carrollCase.trial2.award}</p>
 <p className="text-sm text-zinc-400">{investigationData.carrollCase.trial2.findings}</p>
 </div>
 </div>

 <div className="p-4 bg-blood-900 border border-blood-800">
 <p className="text-xs text-blood-400 uppercase mb-1">Total Verdict</p>
 <p className="text-3xl font-black text-blood-500">{investigationData.carrollCase.totalAward}</p>
 <p className="text-sm text-zinc-400 mt-2">{investigationData.carrollCase.juryNote}</p>
 </div>
 </motion.section>

 {/* Access Hollywood */}
 <motion.section
 initial={{ opacity: 0, y: 20 }}
 animate={{ opacity: 1, y: 0 }}
 transition={{ delay: 0.2 }}
 className="glass-card p-6 mb-8"
 >
 <h2 className="text-xl font-bold mb-4">Access Hollywood Tape</h2>
 <p className="text-sm text-zinc-500 mb-4">Recorded 2005, released October 7, 2016</p>
 
 <div className="space-y-3">
 {investigationData.accessHollywood.quotes.map((quote, index) => (
 <blockquote key={index} className="text-zinc-300 italic border-l-2 border-blood-600 pl-4">
 {quote}
 </blockquote>
 ))}
 </div>
 <p className="text-sm text-zinc-500 mt-4">Trump&apos;s response: &quot;{investigationData.accessHollywood.response}&quot;</p>
 </motion.section>

 {/* Public Accusers */}
 <motion.section
 initial={{ opacity: 0, y: 20 }}
 animate={{ opacity: 1, y: 0 }}
 transition={{ delay: 0.25 }}
 className="glass-card p-6 mb-8"
 >
 <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
 <Users className="w-5 h-5 text-blood-500"/>
 Public Accusers ({investigationData.publicAccusers.length}+)
 </h2>
 <div className="space-y-3">
 {(showAllAccusers ? investigationData.publicAccusers : investigationData.publicAccusers.slice(0, 6)).map((accuser, index) => (
 <div key={index} className="p-3 bg-[#000a1c] border border-[rgba(80,180,255,0.15)]">
 <div className="flex justify-between items-start">
 <span className="font-medium text-blood-400">{accuser.name}</span>
 <span className="text-xs text-zinc-500">{accuser.outcome}</span>
 </div>
 <p className="text-sm text-zinc-400 mt-1">{accuser.allegation}</p>
 </div>
 ))}
 </div>
 {investigationData.publicAccusers.length > 6 && (
 <button
 onClick={() => setShowAllAccusers(!showAllAccusers)}
 className="mt-4 text-blood-400 text-sm hover:text-blood-300 transition-colors"
 >
 {showAllAccusers ? 'Show fewer' : `Show all ${investigationData.publicAccusers.length} accusers`}
 </button>
 )}
 </motion.section>

 {/* Pageant Misconduct */}
 <motion.section
 initial={{ opacity: 0, y: 20 }}
 animate={{ opacity: 1, y: 0 }}
 transition={{ delay: 0.3 }}
 className="glass-card p-6 mb-8"
 >
 <h2 className="text-xl font-bold mb-4">Pageant Dressing Room Misconduct</h2>
 <p className="text-sm text-zinc-500 mb-4">{investigationData.pageantMisconduct.context}</p>
 
 <ul className="space-y-2 mb-4">
 {investigationData.pageantMisconduct.allegations.map((allegation, i) => (
 <li key={i} className="flex items-start gap-2 text-sm text-zinc-300">
 <span className="text-blood-500">•</span>
 {allegation}
 </li>
 ))}
 </ul>

 <blockquote className="text-zinc-400 italic border-l-2 border-[rgba(60,160,255,0.18)] pl-4 text-sm">
 {investigationData.pageantMisconduct.howardSternQuote}
 <footer className="text-zinc-500 mt-2">| Donald Trump, Howard Stern Show</footer>
 </blockquote>
 </motion.section>

 {/* Defamation Pattern */}
 <motion.section
 initial={{ opacity: 0, y: 20 }}
 animate={{ opacity: 1, y: 0 }}
 transition={{ delay: 0.35 }}
 className="glass-card p-6 mb-8"
 >
 <h2 className="text-xl font-bold mb-4">Pattern of Defamation</h2>
 <p className="text-zinc-400 text-sm mb-4">Trump&apos;s consistent response to accusers:</p>
 <ul className="space-y-2">
 {investigationData.defamationPattern.map((pattern, i) => (
 <li key={i} className="flex items-start gap-2 text-sm text-zinc-300">
 <span className="text-blood-500">•</span>
 {pattern}
 </li>
 ))}
 </ul>
 </motion.section>

 {/* Legal Status */}
 <motion.section
 initial={{ opacity: 0, y: 20 }}
 animate={{ opacity: 1, y: 0 }}
 transition={{ delay: 0.4 }}
 className="glass-card p-6 mb-8"
 >
 <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
 <Scale className="w-5 h-5 text-blood-500"/>
 Legal Status
 </h2>
 <div className="space-y-3">
 {investigationData.legalStatus.map((item, index) => (
 <div key={index} className="flex items-center justify-between p-3 bg-[#000a1c] border border-[rgba(80,180,255,0.15)]">
 <div>
 <span className="font-medium text-blood-400">{item.case}</span>
 <p className="text-sm text-zinc-500">{item.outcome}</p>
 </div>
 <span className="text-sm text-zinc-400">{item.status}</span>
 </div>
 ))}
 </div>
 </motion.section>

 {/* Timeline */}
 <motion.section
 initial={{ opacity: 0, y: 20 }}
 animate={{ opacity: 1, y: 0 }}
 transition={{ delay: 0.45 }}
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
 transition={{ delay: 0.5 }}
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
