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
 Thermometer,
 Factory,
 Leaf, ShieldAlert} from 'lucide-react';
import GlitchText from '@/components/effects/GlitchText';

const investigationData = {
 title: 'Climate Sabotage',
 subtitle: 'Systematic Destruction of Environmental Protections and Global Climate Agreements',
 severity: 'critical' as const,
 status: 'Documented, Ongoing Damage',
 lastUpdated: 'February 2026',
 summary: `The Trump administration engaged in the most comprehensive assault on environmental protections in modern history. By withdrawing from the Paris Climate Agreement, rolling back 100+ environmental regulations, installing fossil fuel lobbyists in the EPA, and suppressing climate science, the administration prioritized corporate profits over the health of the planet and its inhabitants. The damage|including accelerated warming, increased pollution, and lost international leadership|will take decades to reverse.`,
 
 environmentalStats: {
 regulationsRolledBack: '100+',
 parisWithdrawalYear: '2020',
 epaStaffReduction: '700+',
 scientistsForced: '1,600+',
 emissionsIncrease: '3.4%',
 },

 keyFigures: [
 { name: 'Donald Trump', role: 'Principal, Ordered Paris withdrawal, denied climate science', href: '/entities/individuals/donald-trump' },
 { name: 'Scott Pruitt', role: 'EPA Administrator, Led rollback campaign, massive corruption', href: '/entities/individuals/scott-pruitt' },
 { name: 'Andrew Wheeler', role: 'EPA Administrator, Former coal lobbyist, continued rollbacks', href: '/entities/individuals/andrew-wheeler' },
 { name: 'Rick Perry', role: 'Energy Secretary, Championed fossil fuels', href: '/entities/individuals/rick-perry' },
 { name: 'Ryan Zinke', role: 'Interior Secretary, Opened public lands to drilling', href: '/entities/individuals/ryan-zinke' },
 ],

 majorRollbacks: [
 {
 category: 'Climate Policy',
 actions: [
 'Withdrew from Paris Climate Agreement (June 2017)',
 'Repealed Clean Power Plan',
 'Rolled back Obama-era fuel efficiency standards',
 'Ended methane emission regulations',
 'Revoked California\'s emission waiver authority',
 ],
 },
 {
 category: 'Air Quality',
 actions: [
 'Weakened mercury and air toxics standards',
 'Relaxed National Ambient Air Quality Standards',
 'Suspended coal ash disposal rules',
 'Weakened ozone standards enforcement',
 'Removed power plant emission limits',
 ],
 },
 {
 category: 'Water Protection',
 actions: [
 'Gutted Waters of the United States (WOTUS) rule',
 'Rolled back industrial wastewater regulations',
 'Weakened coal power plant water pollution rules',
 'Reduced wetlands protections',
 'Blocked Obama drinking water regulations',
 ],
 },
 {
 category: 'Public Lands',
 actions: [
 'Reduced Bears Ears National Monument by 85%',
 'Reduced Grand Staircase-Escalante by 50%',
 'Opened Arctic National Wildlife Refuge to drilling',
 'Expanded offshore drilling areas',
 'Reversed ban on hunting predators in Alaska preserves',
 ],
 },
 {
 category: 'Science Suppression',
 actions: [
 'Removed climate change from EPA website',
 'Disbanded EPA science advisory boards',
 'Banned use of"climate change"in federal documents',
 'Defunded climate research programs',
 'Silenced federal climate scientists',
 ],
 },
 ],

 pruittCorruption: [
 { scandal: '$43,000 soundproof phone booth installation', amount: '$43,000' },
 { scandal: 'Sweetheart condo deal from lobbyist\'s wife ($50/night DC)', amount: 'Ethics violation' },
 { scandal: 'First-class travel costing $100,000+', amount: '$100,000+' },
 { scandal: '24/7 security detail costing $3.5 million', amount: '$3.5M' },
 { scandal: 'Used staff for personal errands (find mattress, Ritz-Carlton lotion)', amount: 'Ethics violation' },
 { scandal: 'Retaliated against whistleblowers', amount: 'Multiple demotions' },
 { scandal: 'Met secretly with fossil fuel executives', amount: 'Regulatory capture' },
 ],

 timeline: [
 { date: 'January 2017', event: 'Trump appoints Scott Pruitt, climate denier, to lead EPA' },
 { date: 'March 2017', event: 'Trump signs executive order to dismantle Clean Power Plan' },
 { date: 'June 1, 2017', event: 'Trump announces U.S. withdrawal from Paris Agreement' },
 { date: 'August 2017', event: 'EPA dismisses half of scientific advisors' },
 { date: 'October 2017', event: 'EPA begins repealing Clean Power Plan' },
 { date: 'December 2017', event: 'Trump shrinks Bears Ears and Grand Staircase monuments' },
 { date: 'January 2018', event: 'Administration proposes opening nearly all offshore waters to drilling' },
 { date: 'April 2018', event: 'EPA proposes rollback of fuel efficiency standards' },
 { date: 'July 2018', event: 'Scott Pruitt resigns amid ethics scandals' },
 { date: 'August 2018', event: 'Andrew Wheeler (coal lobbyist) becomes EPA chief' },
 { date: 'September 2019', event: 'EPA finalizes repeal of Clean Power Plan' },
 { date: 'November 4, 2020', event: 'U.S. formally exits Paris Climate Agreement' },
 { date: 'January 2021', event: 'Trump administration finalizes 100+ environmental rollbacks' },
 { date: 'January 20, 2021', event: 'Biden begins reversing rollbacks on Day 1' },
 ],

 parisWithdrawal: {
 announcement: 'June 1, 2017',
 effectiveDate: 'November 4, 2020',
 consequences: [
 'U.S. became only country to exit agreement',
 'Lost international climate leadership',
 'Encouraged other nations to weaken commitments',
 'Damaged U.S. diplomatic credibility',
 'Cost estimated trillions in clean energy investment',
 ],
 trumpQuotes: [
 '"I was elected to represent the citizens of Pittsburgh, not Paris."',
 '"The concept of global warming was created by and for the Chinese."',
 '"It\'s freezing outside. Where the hell is \'global warming\'?"',
 ],
 },

 healthImpacts: [
 { impact: 'Air pollution deaths', detail: '1,400+ additional premature deaths per year (Harvard study)' },
 { impact: 'Asthma attacks', detail: 'Hundreds of thousands of additional cases' },
 { impact: 'Water contamination', detail: 'Increased industrial pollution in waterways' },
 { impact: 'Cancer risk', detail: 'Increased exposure to carcinogens from rollbacks' },
 { impact: 'Environmental justice', detail: 'Low-income and minority communities disproportionately affected' },
 ],

 legalOutcomes: [
 { defendant: 'Scott Pruitt', charge: 'Ethics violations, misuse of public office', outcome: 'Resigned July 2018; referred to DOJ but no charges filed' },
 { defendant: 'EPA (under Trump)', charge: 'Violation of Clean Air Act, unlawful repeal of Clean Power Plan', outcome: 'Multiple court orders blocking rollbacks; Biden EPA reversed' },
 { defendant: 'EPA (under Trump)', charge: 'Unlawful rollback of WOTUS rule', outcome: 'Federal court vacated Trump-era rule (2021)' },
 { defendant: 'Ryan Zinke', charge: 'Interior IG investigations into travel, land deals, and ethics violations', outcome: 'Resigned December 2018; DOJ referred but declined prosecution' },
 { defendant: 'U.S. Government', charge: 'Violation of National Environmental Policy Act (NEPA) in Arctic drilling approvals', outcome: 'Federal court invalidated Arctic Refuge drilling leases (2021)' },
 { defendant: 'EPA (under Trump)', charge: 'Unlawful weakening of fuel efficiency standards', outcome: 'Biden administration restored Obama-era standards (2022)' },
 ],

 charges: [
 { statute: '42 U.S.C. § 7401 et seq.', description: 'Clean Air Act violations, unlawful repeal of emission standards and Clean Power Plan without adequate scientific justification', count: 'Multiple regulatory actions' },
 { statute: '42 U.S.C. § 4321 et seq.', description: 'National Environmental Policy Act (NEPA) violations, failure to conduct required environmental impact assessments', count: 'Multiple actions' },
 { statute: '33 U.S.C. § 1251 et seq.', description: 'Clean Water Act violations, unlawful rollback of water protection rules', count: 'Multiple regulatory actions' },
 { statute: '5 U.S.C. § 706', description: 'Administrative Procedure Act violations, arbitrary and capricious rulemaking in environmental rollbacks', count: 'Multiple actions challenged in court' },
 { statute: '18 U.S.C. § 208', description: 'Acts affecting personal financial interest, Pruitt\'s financial conflicts with regulated industries', count: 'Multiple incidents' },
 { statute: '54 U.S.C. § 320301', description: 'Antiquities Act violations, unlawful reduction of Bears Ears and Grand Staircase-Escalante monuments', count: '2 presidential proclamations' },
 { statute: '5 U.S.C. § 3110', description: 'Anti-nepotism statute concerns, appointing industry lobbyists to regulate their former employers', count: 'Multiple appointments' },
 ],

 coverup: [
 'The EPA removed climate change information from its official website and replaced it with fossil fuel industry talking points, attempting to erase decades of scientific consensus',
 'Political appointees at EPA edited scientific reports to downplay climate risks, including altering the language of the National Climate Assessment before publication',
 'The administration disbanded the EPA\'s Office of Science Advisory Board and replaced independent scientists with industry representatives',
 'Scott Pruitt maintained secret calendars and used private email to hide meetings with fossil fuel executives and lobbyists from public records requests',
 'The White House suppressed a USDA study showing climate change would devastate agriculture, and prohibited scientists from discussing findings publicly',
 'Interior Department officials reassigned or demoted career scientists who published research on climate change impacts on wildlife and public lands',
 'The administration attempted to classify carbon dioxide as non-pollutant despite the Supreme Court\'s ruling in Massachusetts v. EPA (2007) that it is a regulated pollutant',
 'EPA officials used encrypted messaging apps to communicate with industry lobbyists to avoid Freedom of Information Act requests',
 ],

 sources: [
 { title: 'NY Times: Trump Environmental Rollback Tracker', url: 'https://www.nytimes.com/interactive/2020/climate/trump-environment-rollbacks-list.html', type: 'Tracker' },
 { title: 'EPA: Clean Power Plan Repeal', url: 'https://www.epa.gov/stationary-sources-air-pollution/affordable-clean-energy-rule', type: 'Government Document' },
 { title: 'Paris Agreement Withdrawal', url: 'https://unfccc.int/process-and-meetings/the-paris-agreement', type: 'International Agreement' },
 { title: 'Pruitt Resignation & Scandals', url: 'https://www.nytimes.com/2018/07/05/climate/scott-pruitt-epa-resigns.html', type: 'News Report' },
 { title: 'Climate Science Suppression Report', url: 'https://www.ucsusa.org/resources/attacks-on-science', type: 'Research' },
 { title: 'Harvard Air Pollution Deaths Study', url: 'https://www.hsph.harvard.edu/c-change/news/fossil-fuel-air-pollution-responsible-for-1-in-5-deaths-worldwide/', type: 'Academic Study' },
 ],
};

const severityColors = {
 critical: 'bg-blood-900 text-blood-400 border-blood-800',
 high: 'bg-blood-950 text-blood-600 border-blood-800',
 medium: 'bg-zinc-900 text-zinc-300 border-zinc-700',
 low: 'bg-blood-900 text-blood-400 border-blood-800',
};

export default function ClimateSabotagePage() {
 const [expandedCategory, setExpandedCategory] = useState<string | null>('Climate Policy');

 return (
 <div className="min-h-screen text-white">
 {/* Header */}
 <div className="border-b border-[rgba(255, 80, 80,0.15)]">
 <div className="max-w-6xl mx-auto px-6 py-8">
 <nav className="flex items-center gap-2 text-sm text-zinc-500 mb-6">
 <Link href="/"className="hover:text-white transition-colors">Home</Link>
 <ChevronRight className="w-4 h-4"/>
 <Link href="/investigations"className="hover:text-white transition-colors">Investigations</Link>
 <ChevronRight className="w-4 h-4"/>
 <span className="text-blood-500">Climate Sabotage</span>
 </nav>

 <div className="flex items-center gap-4 mb-4">
 <span className={`px-3 py-1 text-xs font-bold uppercase border ${severityColors[investigationData.severity]}`}>
 {investigationData.severity} SEVERITY
 </span>
 <span className="px-3 py-1 text-xs font-medium bg-[#200c00] text-zinc-300 border border-[rgba(255, 60, 60,0.18)]">
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
 <Scale className="w-6 h-6 text-blood-500 mx-auto mb-2"/>
 <p className="text-xl font-black text-blood-500">{investigationData.environmentalStats.regulationsRolledBack}</p>
 <p className="text-xs text-zinc-400">Rules Rolled Back</p>
 </div>
 <div className="glass-card p-4 text-center border-l-4 border-blood-600">
 <Thermometer className="w-6 h-6 text-blood-500 mx-auto mb-2"/>
 <p className="text-xl font-black text-blood-500">{investigationData.environmentalStats.parisWithdrawalYear}</p>
 <p className="text-xs text-zinc-400">Paris Exit</p>
 </div>
 <div className="glass-card p-4 text-center border-l-4 border-blood-800">
 <Users className="w-6 h-6 text-blood-700 mx-auto mb-2"/>
 <p className="text-xl font-black text-blood-700">{investigationData.environmentalStats.epaStaffReduction}</p>
 <p className="text-xs text-zinc-400">EPA Staff Lost</p>
 </div>
 <div className="glass-card p-4 text-center border-l-4 border-blood-800">
 <Leaf className="w-6 h-6 text-blood-700 mx-auto mb-2"/>
 <p className="text-xl font-black text-blood-700">{investigationData.environmentalStats.scientistsForced}</p>
 <p className="text-xs text-zinc-400">Scientists Silenced</p>
 </div>
 <div className="glass-card p-4 text-center border-l-4 border-zinc-500">
 <Factory className="w-6 h-6 text-zinc-400 mx-auto mb-2"/>
 <p className="text-xl font-black text-zinc-400">{investigationData.environmentalStats.emissionsIncrease}</p>
 <p className="text-xs text-zinc-400">Emissions Spike</p>
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
 className="flex items-center justify-between p-4 bg-[#1c0a00] border border-[rgba(255, 80, 80,0.15)] hover:border-blood-500/50 transition-all"
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

 {/* Paris Agreement */}
 <motion.section
 initial={{ opacity: 0, y: 20 }}
 animate={{ opacity: 1, y: 0 }}
 transition={{ delay: 0.2 }}
 className="glass-card p-6 mb-8 border-l-4 border-blood-600"
 >
 <h2 className="text-xl font-bold mb-4">Paris Climate Agreement Withdrawal</h2>
 <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.15 }} className="glass-card p-6 mb-8 border-l-4 border-blood-600">
 <h2 className="text-xl font-bold glass-text uppercase tracking-wider mb-4 flex items-center gap-2"><ShieldAlert className="w-5 h-5 text-blood-500"/>The Cover-Up</h2>
 <div className="space-y-3">{investigationData.coverup.map((item, idx) => (<div key={idx} className="p-3 bg-blood-950 border border-blood-800"><p className="text-sm text-zinc-300">{item}</p></div>))}</div>
 </motion.div>

 <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
 <div>
 <p className="text-xs text-zinc-500 uppercase">Announced</p>
 <p className="text-zinc-200">{investigationData.parisWithdrawal.announcement}</p>
 </div>
 <div>
 <p className="text-xs text-zinc-500 uppercase">Effective</p>
 <p className="text-blood-400 font-bold">{investigationData.parisWithdrawal.effectiveDate}</p>
 </div>
 </div>
 
 <p className="text-xs text-zinc-500 uppercase mb-2">Consequences</p>
 <ul className="space-y-1 mb-4">
 {investigationData.parisWithdrawal.consequences.map((consequence, i) => (
 <li key={i} className="flex items-start gap-2 text-sm text-zinc-300">
 <span className="text-blood-500">•</span>
 {consequence}
 </li>
 ))}
 </ul>

 <p className="text-xs text-zinc-500 uppercase mb-2">Trump Quotes</p>
 {investigationData.parisWithdrawal.trumpQuotes.map((quote, i) => (
 <blockquote key={i} className="text-zinc-400 italic text-sm border-l-2 border-[rgba(255, 60, 60,0.18)] pl-3 mb-2">
 {quote}
 </blockquote>
 ))}
 </motion.section>

 {/* Major Rollbacks */}
 <motion.section
 initial={{ opacity: 0, y: 20 }}
 animate={{ opacity: 1, y: 0 }}
 transition={{ delay: 0.25 }}
 className="glass-card p-6 mb-8"
 >
 <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
 <AlertTriangle className="w-5 h-5 text-blood-500"/>
 100+ Environmental Rollbacks by Category
 </h2>
 <div className="space-y-4">
 {investigationData.majorRollbacks.map((category) => (
 <div key={category.category} className="border border-[rgba(255, 80, 80,0.15)]">
 <button
 onClick={() => setExpandedCategory(expandedCategory === category.category ? null : category.category)}
 className="w-full flex items-center justify-between p-4 hover:bg-[#1c0a00] transition-colors"
 >
 <span className="font-bold text-blood-400">{category.category}</span>
 <ChevronRight className={`w-5 h-5 transition-transform ${expandedCategory === category.category ? 'rotate-90' : ''}`} />
 </button>
 {expandedCategory === category.category && (
 <div className="px-4 pb-4">
 <ul className="space-y-2">
 {category.actions.map((action, i) => (
 <li key={i} className="flex items-start gap-2 text-sm text-zinc-300">
 <span className="text-blood-500 mt-1">•</span>
 {action}
 </li>
 ))}
 </ul>
 </div>
 )}
 </div>
 ))}
 </div>
 </motion.section>

 {/* Pruitt Corruption */}
 <motion.section
 initial={{ opacity: 0, y: 20 }}
 animate={{ opacity: 1, y: 0 }}
 transition={{ delay: 0.3 }}
 className="glass-card p-6 mb-8"
 >
 <h2 className="text-xl font-bold mb-4">Scott Pruitt Corruption Scandals</h2>
 <p className="text-zinc-400 text-sm mb-4">EPA Administrator until forced resignation in July 2018:</p>
 <div className="space-y-3">
 {investigationData.pruittCorruption.map((scandal, index) => (
 <div key={index} className="flex items-center justify-between p-3 bg-[#1c0a00] border border-[rgba(255, 80, 80,0.15)]">
 <span className="text-zinc-200">{scandal.scandal}</span>
 <span className="text-blood-400 font-mono text-sm">{scandal.amount}</span>
 </div>
 ))}
 </div>
 </motion.section>

 {/* Health Impacts */}
 <motion.section
 initial={{ opacity: 0, y: 20 }}
 animate={{ opacity: 1, y: 0 }}
 transition={{ delay: 0.35 }}
 className="glass-card p-6 mb-8"
 >
 <h2 className="text-xl font-bold mb-4">Public Health Impacts</h2>
 <div className="space-y-3">
 {investigationData.healthImpacts.map((item, index) => (
 <div key={index} className="p-3 bg-[#1c0a00] border border-[rgba(255, 80, 80,0.15)]">
 <span className="font-medium text-blood-400">{item.impact}</span>
 <p className="text-sm text-zinc-400 mt-1">{item.detail}</p>
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
 <div key={index} className="relative pl-4 border-l-2 border-[rgba(255, 80, 80,0.15)]">
 <div className="absolute -left-[5px] top-0 w-2 h-2 bg-blood-500"/>
 <p className="text-xs text-blood-500 font-mono">{item.date}</p>
 <p className="text-sm text-zinc-300">{item.event}</p>
 </div>
 ))}
 </div>
 </motion.section>

 
 <motion.section initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5 }} className="glass-card p-6 mb-8">
 <h2 className="text-xl font-bold glass-text uppercase tracking-wider mb-4 flex items-center gap-2"><Scale className="w-5 h-5 text-blood-500"/>Legal Outcomes</h2>
 <div className="space-y-3">{investigationData.legalOutcomes.map((item, idx) => (<div key={idx} className="p-3 bg-[#1c0a00] border border-[rgba(255, 80, 80,0.15)]"><p className="font-bold glass-text text-sm">{item.defendant}</p><p className="text-xs text-zinc-400 mt-1">{item.charge}</p><p className="text-xs text-blood-400 mt-1">{item.outcome}</p></div>))}</div>
 </motion.section>
 
 <motion.section initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.45 }} className="glass-card p-6 mb-8">
 <h2 className="text-xl font-bold glass-text uppercase tracking-wider mb-4 flex items-center gap-2"><Scale className="w-5 h-5 text-blood-500"/>Applicable Charges &amp; Statutes</h2>
 <div className="space-y-3">{investigationData.charges.map((charge, idx) => (<div key={idx} className="p-4 bg-[#1c0a00] border border-[rgba(255, 80, 80,0.15)]"><p className="font-bold text-blood-400 text-sm font-mono">{charge.statute}</p><p className="text-sm text-zinc-300 mt-1">{charge.description}</p><p className="text-xs text-blood-400 mt-1">{charge.count}</p></div>))}</div>
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
 className="flex items-center justify-between p-3 bg-[#1c0a00] hover:bg-[#200c00] border border-[rgba(255, 80, 80,0.15)] transition-colors"
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
