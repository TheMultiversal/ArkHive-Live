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
 DollarSign,
 GraduationCap, ShieldAlert} from 'lucide-react';
import GlitchText from '@/components/effects/GlitchText';

const investigationData = {
 title: 'Trump University Fraud',
 subtitle: '$25 Million Settlement for Defrauding Thousands of Students',
 severity: 'high' as const,
 status: 'Settled - $25M Payment',
 lastUpdated: 'February 2026',
 summary: `Trump University was a fraudulent real estate training program that operated from 2005 to 2010, promising students they would learn Donald Trump's secrets to success. In reality, it was not an accredited university and employed high-pressure sales tactics to extract up to $35,000 from students for courses that provided little value. Multiple lawsuits alleged fraud, with Trump ultimately settling for $25 million in November 2016|just days after winning the presidential election.`,
 
 fraudStats: {
 settlementAmount: '$25 million',
 victimCount: '6,000+',
 maxTuition: '$35,000',
 yearsOperating: '2005-2010',
 lawsuitsFiled: '3',
 },

 keyFigures: [
 { name: 'Donald Trump', role: 'Owner, Personally marketed and profited from scheme', href: '/entities/individuals/donald-trump', status: 'Settled for $25M' },
 { name: 'Michael Sexton', role: 'President, Managed day-to-day operations', href: '/entities/individuals/michael-sexton', status: 'Testified against Trump' },
 { name: 'Gonzalo Curiel', role: 'Federal judge who presided over class action lawsuits; attacked by Trump over Mexican heritage', href: '/entities/individuals/gonzalo-curiel', status: 'Presiding judge' },
 { name: 'Eric Schneiderman', role: 'New York Attorney General who filed $40M fraud lawsuit against Trump University', href: '/entities/individuals/eric-schneiderman', status: 'Filed state AG suit' },
 { name: 'Pam Bondi', role: 'Florida AG who dropped Trump University investigation after receiving $25,000 Trump donation', href: '/entities/individuals/pam-bondi', status: 'Declined to investigate' },
 { name: 'Art Cohen', role: 'Lead plaintiff in Cohen v. Trump class action lawsuit in San Diego', href: '/entities/individuals/art-cohen', status: 'Lead plaintiff' },
 { name: 'Tarla Makaeff', role: 'Original lead plaintiff; testified about high-pressure upselling tactics', href: '/entities/individuals/tarla-makaeff', status: 'Original lead plaintiff' },
 { name: 'Allen Weisselberg', role: 'Trump Organization CFO who oversaw financial aspects of Trump University', href: '/entities/individuals/allen-weisselberg', status: 'Convicted (tax fraud)' },
 { name: 'Jason Forge', role: 'Lead attorney for plaintiffs; obtained internal playbook documents through discovery', href: '/entities/individuals/jason-forge', status: 'Plaintiff\'s counsel' },
 ],

 fraudTactics: [
 {
 tactic: 'False University Claims',
 details: [
 'Called itself a "university" despite having no accreditation',
 'Did not have state approval to use "university" in name',
 'Did not grant degrees or academic credits',
 'New York AG forced name change to "Trump Entrepreneur Initiative"',
 ],
 },
 {
 tactic: 'Trump Involvement Lies',
 details: [
 'Ads claimed Trump"hand-picked"instructors, he did not',
 'Students told they would meet Trump, never happened',
 'Trump recorded video lessons but had no involvement in curriculum',
 'Cardboard cutouts of Trump used for photos at events',
 ],
 },
 {
 tactic: 'High-Pressure Sales',
 details: [
 'Free seminars used to upsell expensive courses',
 'Students encouraged to max out credit cards',
 'Told to call credit card companies for higher limits',
 'Pressured to buy "Gold Elite"package ($35,000)',
 'Instructed to hide true cost from spouses',
 ],
 },
 {
 tactic: 'Worthless Curriculum',
 details: [
 'Instructors had no special real estate expertise',
 'Generic advice available in books/online',
 'Mentorship program was sales pitch for more courses',
 'No actual real estate deals facilitated',
 'Students received outdated materials',
 ],
 },
 {
 tactic: 'Targeting Vulnerable',
 details: [
 'Marketed to elderly and financially struggling',
 'Exploited aspirations during recession',
 'Used Trump\'s celebrity to build false trust',
 'Promised "secrets" to wealth',
 'Preyed on economic desperation post-2008 crash',
 ],
 },
 ],

 lawsuits: [
 {
 case: 'Low v. Trump University, LLC',
 court: 'U.S. District Court, Southern District of California',
 type: 'Class Action',
 allegations: 'RICO, false advertising, fraud',
 outcome: 'Settled for $25 million',
 },
 {
 case: 'Cohen v. Trump',
 court: 'U.S. District Court, Southern District of California',
 type: 'Class Action',
 allegations: 'Fraud, elder abuse, RICO',
 outcome: 'Consolidated with Low, settled',
 },
 {
 case: 'People of New York v. Trump Entrepreneur Initiative',
 court: 'New York State Supreme Court',
 type: 'State AG Lawsuit',
 allegations: 'Deceptive practices, fraud',
 outcome: 'Settled for $25 million',
 },
 ],

 timeline: [
 { date: '2005', event: 'Trump University launches, advertised as Trump\'s real estate school' },
 { date: '2005-2010', event: 'Over 6,000 students pay up to $35,000 for courses' },
 { date: '2010', event: 'Texas AG investigates, operations cease' },
 { date: '2010', event: 'Renamed "Trump Entrepreneur Initiative"after NY demands' },
 { date: 'August 2013', event: 'NY AG Eric Schneiderman files $40M fraud lawsuit' },
 { date: '2013', event: 'Two class-action lawsuits filed in California' },
 { date: '2015', event: 'Trump attacks Judge Gonzalo Curiel as biased due to Mexican heritage' },
 { date: 'June 2016', event: 'Trump releases internal "playbooks" showing sales tactics' },
 { date: 'November 8, 2016', event: 'Trump wins presidential election' },
 { date: 'November 18, 2016', event: 'Trump settles all three lawsuits for $25 million' },
 { date: '2017-2018', event: 'Settlement funds distributed to victims' },
 ],

 internalDocuments: [
 { document: 'Sales Playbook', revelation: 'Instructed staff to target people with liquid assets over $35,000' },
 { document: 'Instructor Guide', revelation: 'Admitted instructors were salespeople, not educators' },
 { document: 'Marketing Materials', revelation: 'Promised students would learn Trump\'s exact strategies' },
 { document: 'Deposition Testimony', revelation: 'Trump admitted he did not select instructors despite ads' },
 { document: 'Student Evaluations', revelation: 'Showed widespread dissatisfaction and complaints' },
 { document: 'Credit Card Tactics', revelation: 'Instructed students to call for higher credit limits at event' },
 ],

 trumpDepositionHighlights: [
 'Admitted he did not personally select instructors',
 'Could not name a single instructor when asked',
 'Confirmed he did not review curriculum',
 'Acknowledged testimonials were not verified',
 'Stated he was not involved in day-to-day operations',
 ],

 victimTestimonies: [
 { victim: 'Art Cohen (lead plaintiff)', statement: 'We were sold a bill of goods. They promised us the Trump secrets.' },
 { victim: 'Tarla Makaeff', statement: 'It was just a constant upsell... They took advantage of my hopes and dreams.' },
 { victim: 'Sherri Simpson', statement: 'The mentors were just salespeople trying to get us to buy more.' },
 ],

 legalOutcomes: [
 { defendant: 'Trump University / Trump Entrepreneur Initiative', charge: 'Fraud, deceptive business practices, false advertising (Low v. Trump University)', outcome: 'Class action settled for $25 million Nov 2016; students received approximately 80 cents on the dollar' },
 { defendant: 'Donald Trump (NY AG Schneiderman suit)', charge: 'Operating an unlicensed educational institution and running a fraudulent scheme', outcome: 'Consolidated with class actions; included in $25 million settlement' },
 { defendant: 'Trump University (Cohen v. Trump)', charge: 'RICO violations, fraud, and false advertising in class action filed in San Diego', outcome: 'Settled as part of the $25 million global settlement in Nov 2016' },
 { defendant: 'Trump University (Makaeff v. Trump University)', charge: 'Elder fraud, unfair business practices, and false advertising targeting vulnerable adults', outcome: 'Merged into Low v. Trump University class action; settled for $25 million' },
 { defendant: 'Donald Trump (personal liability)', charge: 'Personal involvement in fraudulent marketing including direct endorsements he later disavowed', outcome: 'Deposition revealed Trump could not name a single instructor; settled to avoid trial during transition' },
 { defendant: 'Trump University (NY state inquiry)', charge: 'Operating without a charter or license from the New York State Education Department', outcome: 'NYSED ordered name change to "Trump Entrepreneur Initiative"in 2010; ceased operations 2010' },
 ],
 charges: [
 { statute: '18 U.S.C. \u00a7 1962 (RICO)', description: 'Conducting an enterprise through a pattern of racketeering activity including mail and wire fraud to defraud students', count: 'Systematic fraud affecting 6,000+ students from 2005-2010' },
 { statute: '18 U.S.C. \u00a7 1341', description: 'Mail fraud, using the mail to send deceptive marketing materials promising Trump\'s personal involvement and "handpicked" instructors', count: 'Thousands of mailings to prospective students nationwide' },
 { statute: '18 U.S.C. \u00a7 1343', description: 'Wire fraud, using electronic communications to perpetuate deceptive advertising about the program\'s value and Trump\'s involvement', count: 'Continuous wire fraud from 2005-2010' },
 { statute: 'N.Y. Educ. Law \u00a7 5001', description: 'Operating an unlicensed educational institution using the word "University" without state authorization', count: '1 count, operated without charter from 2005-2010' },
 { statute: 'Cal. Bus. & Prof. Code \u00a7 17200', description: 'Unfair and deceptive business practices under California\'s consumer protection statute', count: 'Class-wide claims covering all California students' },
 { statute: '15 U.S.C. \u00a7 45 (FTC Act)', description: 'Unfair or deceptive acts in commerce through false advertising of educational credentials and outcomes', count: 'Pattern of deception spanning 5 years of operations' },
 { statute: 'N.Y. Gen. Bus. Law \u00a7 349', description: 'Deceptive consumer practices, misleading students about instructor qualifications, Trump\'s involvement, and expected outcomes', count: 'Systematic deception documented in internal"playbooks"' },
 ],
 coverup: [
 'Internal "playbooks" revealed Trump University instructors were trained in high-pressure sales tactics designed to extract maximum payment from students, including identifying their liquid assets and credit limits during initial sessions.',
 'Trump personally appeared in marketing materials and videos claiming he had "handpicked" the instructors, but admitted in his deposition that he could not name a single instructor and had no role in selecting them.',
 'The operation was renamed from "Trump University "to" Trump Entrepreneur Initiative"in 2010 after the New York State Education Department warned it was operating illegally without a charter, but the deceptive practices continued under the new name.',
 'Students were pressured in live events to max out credit cards for packages costing up to $35,000, with internal documents instructing staff to"collect all the credit cards"and overcome objections about affordability.',
 'Trump settled all three lawsuits for $25 million just days after winning the 2016 presidential election, despite repeatedly vowing he would never settle and would win at trial, the timing suggests he wanted to avoid discovery during his presidency.',
 'Former employees described a systematic bait-and-switch: free seminars promised secrets that would only be revealed at $1,495 seminars, which in turn pushed $35,000"mentorship"packages with little additional value.',
 'Trump attempted to discredit the federal judge overseeing the case, Gonzalo Curiel, by claiming Curiel\'s Mexican heritage created a conflict of interest, remarks condemned as racist by members of both parties.',
 ],

 sources: [
 { title: 'Settlement Agreement', url: 'https://www.documentcloud.org/documents/3251949-Trump-University-Settlement.html', type: 'Legal Document' },
 { title: 'Sales Playbook Documents', url: 'https://www.politico.com/story/2016/05/trump-university-playbooks-223631', type: 'Internal Documents' },
 { title: 'Trump Deposition Transcript', url: 'https://www.politico.com/f/?id=00000154-eafe-d152-afde-eefecd360001', type: 'Deposition' },
 { title: 'Class Action Complaint', url: 'https://www.courtlistener.com/docket/4180380/low-v-trump-university-llc/', type: 'Court Filing' },
 ],
};

const severityColors = {
 critical: 'bg-blood-600/20 text-blood-400 border-blood-600/30',
 high: 'bg-blood-800/20 text-blood-600 border-blood-800/30',
 medium: 'bg-zinc-500/20 text-zinc-300 border-zinc-500/30',
 low: 'bg-blood-600/20 text-blood-400 border-blood-600/30',
};

export default function TrumpUniversityPage() {
 const [expandedTactic, setExpandedTactic] = useState<string | null>('False University Claims');

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
 <span className="text-blood-500">Trump University</span>
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
 <DollarSign className="w-6 h-6 text-blood-500 mx-auto mb-2"/>
 <p className="text-xl font-black text-blood-500">{investigationData.fraudStats.settlementAmount}</p>
 <p className="text-xs text-zinc-400">Settlement</p>
 </div>
 <div className="glass-card p-4 text-center border-l-4 border-blood-600">
 <Users className="w-6 h-6 text-blood-500 mx-auto mb-2"/>
 <p className="text-xl font-black text-blood-500">{investigationData.fraudStats.victimCount}</p>
 <p className="text-xs text-zinc-400">Victims</p>
 </div>
 <div className="glass-card p-4 text-center border-l-4 border-blood-800">
 <GraduationCap className="w-6 h-6 text-blood-700 mx-auto mb-2"/>
 <p className="text-xl font-black text-blood-700">{investigationData.fraudStats.maxTuition}</p>
 <p className="text-xs text-zinc-400">Max Charged</p>
 </div>
 <div className="glass-card p-4 text-center border-l-4 border-blood-800">
 <Calendar className="w-6 h-6 text-blood-700 mx-auto mb-2"/>
 <p className="text-xl font-black text-blood-700">{investigationData.fraudStats.yearsOperating}</p>
 <p className="text-xs text-zinc-400">Years Operating</p>
 </div>
 <div className="glass-card p-4 text-center border-l-4 border-zinc-500">
 <Scale className="w-6 h-6 text-zinc-400 mx-auto mb-2"/>
 <p className="text-xl font-black text-zinc-400">{investigationData.fraudStats.lawsuitsFiled}</p>
 <p className="text-xs text-zinc-400">Lawsuits</p>
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

 {/* Fraud Tactics */}
 <motion.section
 initial={{ opacity: 0, y: 20 }}
 animate={{ opacity: 1, y: 0 }}
 transition={{ delay: 0.2 }}
 className="glass-card p-6 mb-8"
 >
 <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
 <AlertTriangle className="w-5 h-5 text-blood-500"/>
 Documented Fraud Tactics
 </h2>
 <div className="space-y-4">
 {investigationData.fraudTactics.map((item) => (
 <div key={item.tactic} className="border border-[rgba(60,160,255,0.12)]">
 <button
 onClick={() => setExpandedTactic(expandedTactic === item.tactic ? null : item.tactic)}
 className="w-full flex items-center justify-between p-4 hover:bg-[rgba(0,20,55,0.40)] transition-colors"
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

 {/* Lawsuits */}
 <motion.section
 initial={{ opacity: 0, y: 20 }}
 animate={{ opacity: 1, y: 0 }}
 transition={{ delay: 0.25 }}
 className="glass-card p-6 mb-8"
 >
 <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
 <Scale className="w-5 h-5 text-blood-500"/>
 Legal Cases
 </h2>
 <div className="space-y-4">
 {investigationData.lawsuits.map((lawsuit, index) => (
 <div key={index} className="p-4 bg-[rgba(0,20,55,0.40)] border border-[rgba(60,160,255,0.12)]">
 <h3 className="font-bold text-blood-400 mb-2">{lawsuit.case}</h3>
 <div className="grid grid-cols-2 gap-2 text-sm">
 <div>
 <span className="text-zinc-500">Court:</span>
 <span className="text-zinc-300 ml-2">{lawsuit.court}</span>
 </div>
 <div>
 <span className="text-zinc-500">Type:</span>
 <span className="text-zinc-300 ml-2">{lawsuit.type}</span>
 </div>
 <div>
 <span className="text-zinc-500">Allegations:</span>
 <span className="text-zinc-300 ml-2">{lawsuit.allegations}</span>
 </div>
 <div>
 <span className="text-zinc-500">Outcome:</span>
 <span className="text-blood-400 ml-2 font-medium">{lawsuit.outcome}</span>
 </div>
 </div>
 </div>
 ))}
 </div>
 </motion.section>

 {/* Internal Documents */}
 <motion.section
 initial={{ opacity: 0, y: 20 }}
 animate={{ opacity: 1, y: 0 }}
 transition={{ delay: 0.3 }}
 className="glass-card p-6 mb-8"
 >
 <h2 className="text-xl font-bold mb-4">Internal Documents Revealed</h2>
 <div className="space-y-3">
 {investigationData.internalDocuments.map((doc, index) => (
 <div key={index} className="p-3 bg-[rgba(0,20,55,0.40)] border border-[rgba(60,160,255,0.12)]">
 <span className="font-medium text-blood-400">{doc.document}</span>
 <p className="text-sm text-zinc-400 mt-1">{doc.revelation}</p>
 </div>
 ))}
 </div>
 </motion.section>

 {/* Trump Deposition */}
 <motion.section
 initial={{ opacity: 0, y: 20 }}
 animate={{ opacity: 1, y: 0 }}
 transition={{ delay: 0.35 }}
 className="glass-card p-6 mb-8 border-l-4 border-blood-600"
 >
 <h2 className="text-xl font-bold mb-4">Trump Deposition Highlights</h2>
 <p className="text-zinc-400 text-sm mb-4">Under oath, Trump admitted:</p>
 <ul className="space-y-2">
 {investigationData.trumpDepositionHighlights.map((highlight, i) => (
 <li key={i} className="flex items-start gap-2 text-sm text-zinc-300">
 <span className="text-blood-500">•</span>
 {highlight}
 </li>
 ))}
 </ul>
 </motion.section>

 {/* Victim Testimonies */}
 <motion.section
 initial={{ opacity: 0, y: 20 }}
 animate={{ opacity: 1, y: 0 }}
 transition={{ delay: 0.4 }}
 className="glass-card p-6 mb-8"
 >
 <h2 className="text-xl font-bold mb-4">Victim Testimonies</h2>
 <div className="space-y-4">
 {investigationData.victimTestimonies.map((testimony, index) => (
 <blockquote key={index} className="border-l-2 border-blood-600 pl-4">
 <p className="text-zinc-300 italic">&quot;{testimony.statement}&quot;</p>
 <footer className="text-sm text-zinc-500 mt-2">| {testimony.victim}</footer>
 </blockquote>
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
