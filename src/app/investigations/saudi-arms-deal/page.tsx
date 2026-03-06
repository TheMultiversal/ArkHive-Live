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
 DollarSign,
 Target, ShieldAlert, Scale} from 'lucide-react';
import GlitchText from '@/components/effects/GlitchText';

const investigation = {
 title: 'Saudi Arms Deal Investigation',
 subtitle: 'War Profiteering, Congressional Bypass & Human Rights Violations',
 severity: 'critical',
 status: 'Ongoing',
 summary: 'The Trump administration\'s $110 billion arms deal with Saudi Arabia, followed by emergency weapons sales that bypassed Congressional oversight, enabled war crimes in Yemen and prioritized profits over human rights. Despite bipartisan opposition and the murder of journalist Jamal Khashoggi, Trump vetoed multiple Congressional attempts to block weapons sales.',
 dealOverview: {
 announcedValue: '$110 billion (immediate), $350 billion (over 10 years)',
 actualValue: 'Significantly inflated, many deals were pre-existing or never finalized',
 announced: 'May 2017 (Trump\'s first foreign trip)',
 emergencySales: '$8.1 billion in emergency sales bypassing Congress (2019)',
 nuclearPlans: 'Plans to transfer nuclear technology without safeguards',
 },
 congressionalBypass: [
 { 
 date: 'May 2019', 
 action: 'Emergency declaration to bypass Congress', 
 detail: 'Pompeo declared "emergency" to sell $8.1B in weapons despite bipartisan opposition',
 weapons: 'Precision-guided munitions, support services for Saudi and UAE'
 },
 { 
 date: 'July 2019', 
 action: 'Trump vetoes Congressional block', 
 detail: 'Vetoed 22 resolutions of disapproval passed by Congress'
 },
 { 
 date: 'December 2020', 
 action: 'Last-minute sales', 
 detail: 'Rushed through additional deals before leaving office'
 },
 ],
 yemenConsequences: {
 description: 'Saudi-led coalition used U.S. weapons in Yemen, causing massive civilian casualties',
 deaths: '377,000+ dead including 150,000+ from indirect causes (UN)',
 famine: 'Worst humanitarian crisis in the world',
 warCrimes: 'Documented strikes on hospitals, schools, weddings, funerals',
 usComplicity: 'U.S. weapons, U.S. intelligence, U.S. refueling support',
 },
 profiteers: [
 { company: 'Lockheed Martin', amount: '$28+ billion', weapons: 'THAAD missiles, F-35 discussion' },
 { company: 'Boeing', amount: '$20+ billion', weapons: 'AH-64 Apache helicopters, JDAM bombs' },
 { company: 'Raytheon', amount: '$10+ billion', weapons: 'Patriot missiles, precision-guided munitions' },
 { company: 'General Dynamics', amount: '$5+ billion', weapons: 'M1A2 Abrams tanks, ammunition' },
 ],
 keyFigures: [
 { name: 'Donald Trump', role: 'Prioritized arms sales over human rights', href: '/entities/individuals/donald-trump', status: 'Approved sales' },
 { name: 'Mike Pompeo', role: 'Declared fake "emergency" to bypass Congress', href: '/entities/individuals/mike-pompeo', status: 'Key facilitator' },
 { name: 'Jared Kushner', role: 'Back-channel to MBS, negotiated deals', href: '/entities/individuals/jared-kushner', status: '$2B recipient' },
 { name: 'Mohammed bin Salman', role: 'Saudi Crown Prince, authorized Yemen strikes', href: '/entities/individuals/mohammed-bin-salman', status: 'War crimes implicated' },
 { name: 'Steven Mnuchin', role: 'Treasury Secretary, received Saudi investment after leaving', href: '/entities/individuals/steven-mnuchin', status: 'Conflict of interest' },
 ],
 timeline: [
 { date: 'May 2017', event: 'Trump announces $110B arms deal on first foreign trip to Saudi Arabia' },
 { date: 'May 2017', event: 'Performs sword dance with Saudi leaders' },
 { date: 'June 2017', event: 'Qatar blockade begins; U.S. arms go to Saudi Arabia' },
 { date: 'October 2018', event: 'Khashoggi murdered; Trump refuses to halt arms sales' },
 { date: 'November 2018', event: 'Trump cites arms deal as reason to protect MBS' },
 { date: 'April 2019', event: 'Congress passes bipartisan resolution to end Yemen support' },
 { date: 'April 2019', event: 'Trump vetoes Yemen resolution' },
 { date: 'May 2019', event: 'Pompeo declares "emergency" to bypass Congress on $8.1B sale' },
 { date: 'July 2019', event: 'Trump vetoes 22 Congressional resolutions blocking sales' },
 { date: 'November 2019', event: 'IG report finds Pompeo\'s emergency declaration legally dubious' },
 { date: '2021', event: 'Biden pauses some arms sales pending review' },
 { date: '2022', event: 'Kushner and Mnuchin receive massive Saudi investments' },
 ],
 legalOutcomes: [
 { defendant: 'Trump administration (State Dept)', charge: 'Illegal use of emergency authority to bypass Congress on $8.1 billion arms sale', outcome: 'State Department IG investigation found emergency declaration legally questionable; IG Steve Linick fired before completing probe' },
 { defendant: 'Secretary Pompeo', charge: 'Abuse of emergency authority under Arms Export Control Act', outcome: 'IG report found no valid emergency justification; Congress condemned action but could not override veto' },
 { defendant: 'Jared Kushner', charge: 'Undisclosed conflicts of interest in negotiating Saudi arms deal', outcome: 'No charges filed; Senate Intelligence Committee investigated but took no action' },
 { defendant: 'Saudi Arabia (MBS)', charge: 'Use of U.S.-supplied weapons in Yemen war crimes', outcome: 'UN documented war crimes using U.S. weapons; no accountability imposed by Trump administration' },
 { defendant: 'Raytheon, Lockheed Martin, Boeing', charge: 'Selling weapons used in strikes on civilians, hospitals, and school buses in Yemen', outcome: 'No legal action; companies continued receiving contracts despite documented civilian casualties' },
 { defendant: 'Trump (presidential veto)', charge: 'Vetoing bipartisan Congressional resolution to end U.S. support for Yemen war', outcome: 'Veto sustained Apr 2019; Congress unable to override; war continued' },
 ],
 charges: [
 { statute: '22 U.S.C. § 2753 (Arms Export Control Act)', description: 'Circumventing Congressional notification requirements by fabricating an emergency to approve arms sales', count: '22 separate arms sales totaling $8.1 billion' },
 { statute: '18 U.S.C. § 371', description: 'Conspiracy to defraud Congress by falsely declaring an emergency to bypass mandatory review period', count: '1 count covering the emergency declaration scheme' },
 { statute: '18 U.S.C. § 1505', description: 'Obstruction of congressional proceedings, firing IG Steve Linick while investigating the arms sale bypass', count: '1 count' },
 { statute: 'War Crimes Act (18 U.S.C. § 2441)', description: 'Aiding and abetting war crimes by providing weapons used to deliberately target civilian infrastructure in Yemen', count: 'Ongoing complicity documented by UN Panel of Experts' },
 { statute: '22 U.S.C. § 2304 (Leahy Law)', description: 'Providing military assistance to Saudi units credibly accused of gross human rights violations', count: 'Multiple violations documented by State Department\'s own reports' },
 { statute: '18 U.S.C. § 208', description: 'Conflicts of interest, Kushner\'s personal financial relationships with Saudi principals while negotiating deals', count: 'Pattern spanning 2017-2021' },
 { statute: '50 U.S.C. § 1701 (IEEPA)', description: 'Potential violations related to nuclear technology transfer discussions with Saudi Arabia without safeguards', count: 'Multiple instances per House Oversight Committee report' },
 ],
 coverup: [
 'Secretary Pompeo declared a fabricated "emergency" in May 2019 to bypass the mandatory 30-day Congressional review of arms sales, citing an Iranian threat that intelligence agencies said did not justify the declaration.',
 'When State Department Inspector General Steve Linick opened an investigation into the emergency arms sale bypass, Trump fired him in May 2020 at Pompeo\'s recommendation, a clear act of retaliation.',
 'The $110 billion deal figure was deliberately inflated by the administration, many contracts were pre-existing Obama-era deals, letters of intent rather than firm orders, or deals that never materialized.',
 'After Jamal Khashoggi\'s murder, Trump explicitly cited the arms deal as the reason to maintain relations with Saudi Arabia, stating"$450 billion"in deals (a grossly inflated figure) were at stake.',
 'The administration blocked the release of a CIA assessment concluding MBS ordered Khashoggi\'s murder, preventing Congress from using the finding to block arms sales.',
 'Trump vetoed 22 separate Congressional resolutions attempting to block specific arms sales, an unprecedented use of veto power to override bipartisan opposition to weapons transfers.',
 'The House Oversight Committee found that Trump administration officials pursued nuclear technology transfers to Saudi Arabia over objections from career national security officials and without the legally required"123 Agreement."',
 'Internal State Department emails revealed career officials objected to the emergency declaration but were overruled by political appointees acting on White House orders.',
 ],
 sources: [
 { title: 'Congressional Research Service, Saudi Arms Sales', url: 'https://crsreports.congress.gov/product/pdf/RL/RL33533', date: '2021' },
 { title: 'State Department IG Report on Emergency Declaration', url: 'https://www.stateoig.gov/reports', date: '2020' },
 { title: 'UN Yemen Casualties Report', url: 'https://www.undp.org/yemen/publications/assessing-impact-war-yemen-pathways-recovery', date: '2021' },
 { title: 'Trump Veto Messages', url: 'https://www.whitehouse.gov/briefing-room/presidential-actions/', date: '2019' },
 ],
};

const severityColors = {
 critical: 'text-blood-500 bg-blood-950/50 border-blood-500/30',
 high: 'text-blood-700 bg-blood-950/50 border-blood-700/30',
 medium: 'text-zinc-400 bg-zinc-900/50 border-zinc-400/30',
 low: 'text-blood-500 bg-blood-950/50 border-blood-500/30',
};

export default function SaudiArmsDealPage() {
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
 className="mb-8"
 >
 <div className="flex items-center gap-3 mb-4">
 <span className={`px-3 py-1 text-xs font-mono border ${severityColors[investigation.severity as keyof typeof severityColors]}`}>
 {investigation.severity.toUpperCase()}
 </span>
 <span className="text-zinc-500 text-sm">{investigation.status}</span>
 </div>
 <h1 className="text-3xl md:text-4xl font-bold text-white mb-2">
 <GlitchText text={investigation.title} />
 </h1>
 <p className="text-xl text-zinc-400">{investigation.subtitle}</p>
 </motion.div>

 {/* Summary */}
 <motion.div
 initial={{ opacity: 0, y: 20 }}
 animate={{ opacity: 1, y: 0 }}
 transition={{ delay: 0.1 }}
 className="glass-card p-6 mb-8"
 >
 <div className="flex items-start gap-3">
 <AlertTriangle className="w-6 h-6 text-blood-500 flex-shrink-0 mt-1"/>
 <p className="text-zinc-300 leading-relaxed">{investigation.summary}</p>
 </div>
 </motion.div>

 {/* Deal Overview */}
 <motion.section
 initial={{ opacity: 0, y: 20 }}
 animate={{ opacity: 1, y: 0 }}
 transition={{ delay: 0.2 }}
 className="mb-8"
 >
 <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-2">
 <DollarSign className="w-6 h-6 text-blood-500"/>
 Deal Overview
 </h2>
 <div className="glass-card p-6">
 <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.15 }} className="glass-card p-6 mb-8 border-l-4 border-blood-600">
 <h2 className="text-xl font-bold text-white uppercase tracking-wider mb-4 flex items-center gap-2"><ShieldAlert className="w-5 h-5 text-blood-500"/>The Cover-Up</h2>
 <div className="space-y-3">{investigation.coverup.map((item, idx) => (<div key={idx} className="p-3 bg-blood-950/20 border border-blood-500/30"><p className="text-sm text-zinc-300">{item}</p></div>))}</div>
 </motion.div>

 <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
 <div className="bg-zinc-900/50 p-4 border border-zinc-800">
 <p className="text-xs text-zinc-500 uppercase mb-1">Announced Value</p>
 <p className="text-blood-400 font-mono text-lg">{investigation.dealOverview.announcedValue}</p>
 </div>
 <div className="bg-zinc-900/50 p-4 border border-zinc-800">
 <p className="text-xs text-zinc-500 uppercase mb-1">Reality</p>
 <p className="text-blood-400">{investigation.dealOverview.actualValue}</p>
 </div>
 <div className="bg-zinc-900/50 p-4 border border-zinc-800">
 <p className="text-xs text-zinc-500 uppercase mb-1">Emergency Bypass Sales</p>
 <p className="text-blood-600 font-mono">{investigation.dealOverview.emergencySales}</p>
 </div>
 <div className="bg-zinc-900/50 p-4 border border-zinc-800">
 <p className="text-xs text-zinc-500 uppercase mb-1">Nuclear Plans</p>
 <p className="text-blood-400">{investigation.dealOverview.nuclearPlans}</p>
 </div>
 </div>
 </div>
 </motion.section>

 {/* Congressional Bypass */}
 <motion.section
 initial={{ opacity: 0, y: 20 }}
 animate={{ opacity: 1, y: 0 }}
 transition={{ delay: 0.3 }}
 className="mb-8"
 >
 <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-2">
 <AlertTriangle className="w-6 h-6 text-blood-500"/>
 Congressional Bypass
 </h2>
 <div className="space-y-4">
 {investigation.congressionalBypass.map((bypass, index) => (
 <div key={index} className="glass-card p-4">
 <div className="flex items-start justify-between mb-2">
 <span className="text-blood-500 font-mono text-sm">{bypass.date}</span>
 <span className="text-xs bg-blood-500/20 text-blood-400 px-2 py-1">{bypass.action}</span>
 </div>
 <p className="text-zinc-300">{bypass.detail}</p>
 {bypass.weapons && (
 <p className="text-zinc-500 text-sm mt-2">Weapons: {bypass.weapons}</p>
 )}
 </div>
 ))}
 </div>
 </motion.section>

 {/* Yemen Consequences */}
 <motion.section
 initial={{ opacity: 0, y: 20 }}
 animate={{ opacity: 1, y: 0 }}
 transition={{ delay: 0.4 }}
 className="mb-8"
 >
 <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-2">
 <Target className="w-6 h-6 text-blood-500"/>
 Yemen War Consequences
 </h2>
 <div className="glass-card p-6 border-l-4 border-blood-500">
 <p className="text-zinc-300 mb-4">{investigation.yemenConsequences.description}</p>
 <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
 <div className="text-center">
 <p className="text-3xl font-bold text-blood-500">377,000+</p>
 <p className="text-xs text-zinc-500">Total Deaths</p>
 </div>
 <div className="text-center">
 <p className="text-xl font-bold text-blood-700">Worst</p>
 <p className="text-xs text-zinc-500">Humanitarian Crisis</p>
 </div>
 <div className="text-center">
 <p className="text-xl font-bold text-zinc-400">War Crimes</p>
 <p className="text-xs text-zinc-500">Documented</p>
 </div>
 <div className="text-center">
 <p className="text-xl font-bold text-blood-400">U.S. Complicity</p>
 <p className="text-xs text-zinc-500">{investigation.yemenConsequences.usComplicity}</p>
 </div>
 </div>
 </div>
 </motion.section>

 {/* Defense Contractors */}
 <motion.section
 initial={{ opacity: 0, y: 20 }}
 animate={{ opacity: 1, y: 0 }}
 transition={{ delay: 0.5 }}
 className="mb-8"
 >
 <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-2">
 <DollarSign className="w-6 h-6 text-blood-500"/>
 Defense Contractor Profits
 </h2>
 <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
 {investigation.profiteers.map((contractor, index) => (
 <div key={index} className="glass-card p-4">
 <div className="flex justify-between items-start mb-2">
 <h3 className="text-white font-bold">{contractor.company}</h3>
 <span className="text-blood-400 font-mono">{contractor.amount}</span>
 </div>
 <p className="text-zinc-400 text-sm">{contractor.weapons}</p>
 </div>
 ))}
 </div>
 </motion.section>

 {/* Key Figures */}
 <motion.section
 initial={{ opacity: 0, y: 20 }}
 animate={{ opacity: 1, y: 0 }}
 transition={{ delay: 0.6 }}
 className="mb-8"
 >
 <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-2">
 <Users className="w-6 h-6 text-blood-500"/>
 Key Figures
 </h2>
 <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
 {investigation.keyFigures.map((figure, index) => (
 <Link
 key={index}
 href={figure.href}
 className="glass-card p-4 hover:border-blood-500 transition-colors"
 >
 <div className="flex items-start justify-between mb-2">
 <h3 className="text-white font-bold hover:text-blood-400">{figure.name}</h3>
 <span className="text-xs bg-zinc-800 text-zinc-400 px-2 py-1">{figure.status}</span>
 </div>
 <p className="text-zinc-400 text-sm">{figure.role}</p>
 </Link>
 ))}
 </div>
 </motion.section>

 {/* Timeline */}
 <motion.section
 initial={{ opacity: 0, y: 20 }}
 animate={{ opacity: 1, y: 0 }}
 transition={{ delay: 0.7 }}
 className="mb-8"
 >
 <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-2">
 <Calendar className="w-6 h-6 text-zinc-400"/>
 Timeline
 </h2>
 <div className="glass-card p-6">
 <div className="space-y-4">
 {investigation.timeline.map((event, index) => (
 <div key={index} className="flex gap-4 items-start">
 <span className="text-blood-500 font-mono text-sm whitespace-nowrap min-w-[100px]">
 {event.date}
 </span>
 <span className="text-zinc-300">{event.event}</span>
 </div>
 ))}
 </div>
 </div>
 </motion.section>

 
 <motion.section initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5 }} className="glass-card p-6 mb-8">
 <h2 className="text-xl font-bold text-white uppercase tracking-wider mb-4 flex items-center gap-2"><Scale className="w-5 h-5 text-blood-500"/>Legal Outcomes</h2>
 <div className="space-y-3">{investigation.legalOutcomes.map((item, idx) => (<div key={idx} className="p-3 bg-zinc-900/50 border border-zinc-800"><p className="font-bold text-white text-sm">{item.defendant}</p><p className="text-xs text-zinc-400 mt-1">{item.charge}</p><p className="text-xs text-blood-400 mt-1">{item.outcome}</p></div>))}</div>
 </motion.section>
 
 <motion.section initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.45 }} className="glass-card p-6 mb-8">
 <h2 className="text-xl font-bold text-white uppercase tracking-wider mb-4 flex items-center gap-2"><Scale className="w-5 h-5 text-blood-500"/>Applicable Charges &amp; Statutes</h2>
 <div className="space-y-3">{investigation.charges.map((charge, idx) => (<div key={idx} className="p-4 bg-zinc-900/50 border border-zinc-800"><p className="font-bold text-blood-400 text-sm font-mono">{charge.statute}</p><p className="text-sm text-zinc-300 mt-1">{charge.description}</p><p className="text-xs text-blood-400 mt-1">{charge.count}</p></div>))}</div>
 </motion.section>
 {/* Sources */}
 <motion.section
 initial={{ opacity: 0, y: 20 }}
 animate={{ opacity: 1, y: 0 }}
 transition={{ delay: 0.8 }}
 >
 <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-2">
 <FileText className="w-6 h-6 text-zinc-400"/>
 Sources
 </h2>
 <div className="glass-card p-6">
 <div className="space-y-3">
 {investigation.sources.map((source, index) => (
 <a
 key={index}
 href={source.url}
 target="_blank"
 rel="noopener noreferrer"
 className="flex items-center justify-between p-3 bg-zinc-900/50 hover:bg-zinc-800/50 transition-colors border border-zinc-800"
 >
 <div>
 <p className="text-white">{source.title}</p>
 <p className="text-zinc-500 text-sm">{source.date}</p>
 </div>
 <ExternalLink className="w-4 h-4 text-zinc-500"/>
 </a>
 ))}
 </div>
 </div>
 </motion.section>
 </div>
 </div>
 );
}
