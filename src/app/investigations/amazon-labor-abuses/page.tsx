'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowLeft, AlertTriangle, Users, Calendar, FileText, ExternalLink, Scale, ShieldAlert, Skull } from 'lucide-react';
import GlitchText from '@/components/effects/GlitchText';

const investigation = {
 title: 'Amazon Labor Abuses',
 subtitle: 'The World\'s Richest Man Built His Empire on Workers Urinating in Bottles and Dying in Warehouses',
 severity: 'critical',
 status: 'ONGOING',
 summary: 'Amazon, the world\'s second-largest private employer, has built a $1.7 trillion empire on the systematic exploitation of over 1.5 million workers. Warehouse employees face injury rates double the industry average, are forced to urinate in bottles to meet impossible quotas, and have died during tornadoes when managers refused to let them leave. Delivery drivers face similar conditions under a deliberately fragmented subcontractor system designed to shield Amazon from liability. The company has spent hundreds of millions fighting unionization while Jeff Bezos\'s personal wealth exceeded $200 billion. Amazon\'s surveillance infrastructure monitors workers\' every movement, and the company has been found by the NLRB to have illegally interfered with union elections. Internally, Amazon referred to its turnover strategy as"purposeful Darwinism"- burning through workers so fast that executives worried about running out of employable people.',
 keyFigures: [
 { name: 'Jeff Bezos', role: 'Amazon founder and executive chairman; net worth $200B+ while median Amazon worker earns $35,096', href: '/entities/individuals/jeff-bezos', status: 'Active' },
 { name: 'Andy Jassy', role: 'Amazon CEO who continued anti-union campaigns and refused to negotiate with Amazon Labor Union', href: '/entities/individuals/andy-jassy', status: 'Active' },
 { name: 'Dave Clark', role: 'Former CEO of Amazon Worldwide Consumer; oversaw warehouse operations and "rate" productivity system', href: '/entities/individuals/dave-clark', status: 'Left Amazon 2022' },
 { name: 'Jay Carney', role: 'Amazon SVP of Global Corporate Affairs; former Obama press secretary; denied workers urinate in bottles', href: '/entities/individuals/jay-carney', status: 'Left Amazon 2023' },
 { name: 'Chris Smalls', role: 'Amazon worker fired for organizing COVID-19 protest; later founded Amazon Labor Union', href: '/entities/individuals/chris-smalls', status: 'Active, ALU President' },
 { name: 'Derrick Palmer', role: 'Amazon Labor Union VP; JFK8 warehouse worker who co-organized first successful Amazon union', href: '/entities/individuals/derrick-palmer', status: 'Active' },
 { name: 'Jennifer Bates', role: 'Amazon worker and key organizer of the Bessemer, Alabama, union drive', href: '/entities/individuals/jennifer-bates', status: 'Active' },
 { name: 'David Niekerk', role: 'Amazon VP who designed the high-turnover workforce model; called it"purposeful Darwinism"', href: '/entities/individuals/david-niekerk', status: 'Active' },
 { name: 'John Schoettler', role: 'Amazon VP who oversaw warehouse safety while injury rates doubled the industry average', href: '/entities/individuals/john-schoettler', status: 'Active' },
 { name: 'Courtney Bowden', role: 'Amazon worker injured on the job who became outspoken advocate for worker safety', href: '/entities/individuals/courtney-bowden', status: 'Active' },
 { name: 'Stuart Appelbaum', role: 'President of RWDSU union that organized Bessemer warehouse campaign', href: '/entities/individuals/stuart-appelbaum', status: 'Active' },
 { name: 'Jennifer Abruzzo', role: 'NLRB General Counsel who issued landmark complaints against Amazon for labor violations', href: '/entities/individuals/jennifer-abruzzo', status: 'Active' },
 ],
 timeline: [
 { date: '2011', event: 'Investigation reveals Amazon Lehigh Valley warehouse hits 114°F; workers treated for heat exhaustion; ambulances parked outside' },
 { date: '2013', event: 'Amazon installs AC in warehouses only after widespread media coverage of heat-related collapses' },
 { date: '2015', event: 'New York Times exposé"Inside Amazon: Wrestling Big Ideas in a Bruising Workplace"reveals toxic white-collar culture' },
 { date: '2018', event: 'Bernie Sanders introduces "Stop BEZOS Act"; Amazon raises minimum wage to $15/hour but cuts bonuses and stock grants' },
 { date: '2019', event: 'Amazon delivery drivers report urinating in bottles to meet delivery quotas; Amazon denies it' },
 { date: 'March 2020', event: 'Chris Smalls fired after organizing COVID-19 walkout at Staten Island warehouse; leaked Amazon memo calls him"not smart or articulate"' },
 { date: '2020', event: 'Amazon installs AI-powered cameras in delivery vans to continuously monitor drivers; records biometric data' },
 { date: 'December 2021', event: 'Six Amazon workers killed when tornado destroys Edwardsville, IL, warehouse; workers were not allowed to leave despite warnings' },
 { date: 'February 2022', event: 'NLRB orders new union election in Bessemer after finding Amazon illegally interfered in first vote' },
 { date: 'April 2022', event: 'Amazon Labor Union wins historic election at JFK8 warehouse in Staten Island, first Amazon union in US history' },
 { date: '2022', event: 'Strategic Organizing Center report shows Amazon injury rate is 6.8 per 100 workers, double the warehouse industry average' },
 { date: '2022', event: 'Amazon spends $14.2 million on anti-union consultants; $3,000+ per worker in union-eligible facilities' },
 { date: '2023', event: 'Amazon refuses to bargain with certified Amazon Labor Union; NLRB files complaint for refusal to bargain' },
 { date: '2023', event: 'Senate HELP Committee finds Amazon injury rates are even worse than reported; company under-reported injuries' },
 { date: '2023', event: 'Investigation reveals Amazon\'s "rate" algorithm fires workers automatically for failing to meet impossible quotas' },
 { date: '2024', event: 'OSHA cites Amazon warehouses for ergonomic hazards; Amazon appeals every citation' },
 { date: '2024', event: 'Amazon drivers across multiple states file lawsuits over misclassification as independent contractors' },
 { date: '2024', event: 'Amazon warehouse worker death toll continues to mount; company reports injury rate still far above industry average' },
 ],
 legalOutcomes: [
 { defendant: 'Amazon', charge: 'Illegal interference in Bessemer, AL, union election', outcome: 'NLRB ordered re-run election; Amazon found to have violated multiple labor laws' },
 { defendant: 'Amazon', charge: 'Illegal firing of Chris Smalls for protected organizing activity', outcome: 'New York AG investigated; NLRB found Smalls\' firing was retaliatory' },
 { defendant: 'Amazon', charge: 'Refusal to bargain with certified Amazon Labor Union', outcome: 'NLRB complaint filed 2023; proceedings ongoing' },
 { defendant: 'Amazon', charge: 'OSHA violations for ergonomic hazards causing high injury rates', outcome: 'Multiple citations issued at warehouses in multiple states; Amazon appeals every citation' },
 { defendant: 'Amazon', charge: 'Misclassification of delivery drivers as independent contractors through DSP model', outcome: 'Multiple lawsuits filed; California AB5 litigation ongoing' },
 { defendant: 'Amazon', charge: 'Warehouse safety failures, Edwardsville tornado deaths', outcome: 'OSHA investigation found Amazon didn\'t have adequate severe weather procedures; wrongful death lawsuits settled' },
 { defendant: 'Amazon', charge: 'Surveillance and monitoring of workers\' union activities', outcome: 'NLRB found illegal surveillance at multiple facilities; insufficient remedies under current law' },
 { defendant: 'Amazon/Andy Jassy', charge: 'Coercive anti-union statements by CEO', outcome: 'NLRB Administrative Law Judge found Jassy\'s statements on unions violated NLRA' },
 ],
 charges: [
 { statute: 'National Labor Relations Act § 8(a)(1): Interference with Union Activity', description: 'Amazon conducted mandatory captive audience meetings, installed surveillance cameras near union organizers, and distributed anti-union propaganda', count: '25+ separate unfair labor practice charges filed across multiple warehouses' },
 { statute: 'National Labor Relations Act § 8(a)(3): Retaliatory Firing', description: 'Firing Chris Smalls and other workers for organizing activity; disciplining workers who discuss unions', count: 'Multiple workers fired or disciplined for union activity at facilities nationwide' },
 { statute: 'National Labor Relations Act § 8(a)(5): Refusal to Bargain', description: 'Amazon refuses to recognize and bargain with the certified Amazon Labor Union at JFK8', count: 'Over 2 years of refusal to bargain after NLRB-certified election victory' },
 { statute: 'OSHA General Duty Clause 5(a)(1): Unsafe Working Conditions', description: 'Amazon warehouses expose workers to ergonomic hazards from repetitive motions causing musculoskeletal injuries at double the industry rate', count: '6.8 injuries per 100 workers vs. 3.3 industry average; cited at multiple facilities' },
 { statute: 'OSHA Emergency Action Plan Requirements: 29 CFR 1910.38', description: 'Failure to implement adequate severe weather emergency plans leading to worker deaths in Edwardsville tornado', count: '6 workers killed December 2021; inadequate emergency procedures documented' },
 { statute: 'Fair Labor Standards Act, Wage Theft', description: 'Amazon workers report not being compensated for mandatory security screenings, boot-up time, and pre-shift procedures', count: 'Integrity Staffing Solutions v. Busk (2014) - Supreme Court ruled against workers 9-0' },
 { statute: 'Worker Misclassification (State Labor Laws)', description: 'Amazon Delivery Service Partner model designed to classify drivers as employees of small shell companies rather than Amazon employees', count: 'Over 275,000 delivery drivers denied Amazon employee benefits and protections' },
 { statute: 'Privacy Violations, Biometric Surveillance', description: 'Amazon monitors workers through AI cameras in vans, handheld scanners tracking movement, and warehouse cameras', count: '1.5 million workers subject to continuous algorithmic surveillance' },
 ],
 coverup: [
 'Amazon\'s official Twitter account denied that drivers urinate in bottles, tweeting "You don\'t really believe the peeing in bottles thing, do you?"- then was forced to apologize after photos and internal documents proved it was widespread.',
 'A leaked internal memo about Chris Smalls\' firing revealed Amazon\'s strategy to make him"the face of the entire union/organizing movement"because he was"not smart or articulate"- a racially coded attack on a Black worker.',
 'Amazon\'s Delivery Service Partner (DSP) model was specifically designed to create a legal firewall between Amazon and delivery drivers, avoiding the liability and costs of direct employment while maintaining total control.',
 'The company rebranded its punishing algorithmic monitoring system from "rate" to"time off task "to" productivity feedback"- changing names to obscure the same system that automatically fires workers.',
 'Amazon\'s reported injury rates are already double the industry average but Senate investigation found the company was significantly under-reporting injuries at multiple warehouses.',
 'Amazon spent $14.2 million on anti-union consultants in 2022 alone, consultants who are paid $3,200+ per day to convince workers making $35,000/year that unions are bad for them.',
 'After the Edwardsville tornado killed six workers, Amazon initially claimed workers received tornado warnings, internal communications later showed managers discouraged workers from leaving.',
 'Jeff Bezos\'s personal wealth exceeded the annual wages of all Amazon warehouse workers combined, but the company frames $15/hour as an industry-leading wage while stripping bonuses and stock awards.',
 'Amazon appeals every OSHA citation, using its vast legal resources to delay safety improvements while workers continue to be injured at alarming rates.',
 ],
 sources: [
 { title: 'The Amazon That Customers Don\'t See, New York Times Investigation', url: 'https://www.nytimes.com/interactive/2021/06/15/us/amazon-workers.html', date: 'June 2021' },
 { title: 'Amazon Warehouse Injury Rates, Strategic Organizing Center', url: 'https://thesoc.org/amazon-primed-for-pain/', date: '2022' },
 { title: 'Amazon Labor Union Victory at JFK8: NLRB Certification', url: 'https://www.nlrb.gov/case/29-RC-288020', date: 'April 2022' },
 { title: 'Edwardsville Tornado Investigation, OSHA', url: 'https://www.osha.gov/news/newsreleases/region5/04122022', date: 'April 2022' },
 { title: 'Senate HELP Committee Investigation of Amazon Warehouses', url: 'https://www.help.senate.gov/chair/newsroom/press/senate-help-committee-releases-new-report-on-amazons-injury-crisis', date: '2023' },
 { title: 'Amazon\'s Anti-Union Spending, DOL LM-10 Filings', url: 'https://www.dol.gov/agencies/olms/public-disclosure-room', date: '2022' },
 { title: 'Amazon Apologizes for Denying Drivers Urinate in Bottles, The Verge', url: 'https://www.theverge.com/2021/4/2/22364243/amazon-apologizes-tweet-warehouse-workers-pee-bottles', date: 'April 2021' },
 { title: 'Amazon\'s Anti-Union Memo on Chris Smalls, Vice News', url: 'https://www.vice.com/en/article/amazon-leaked-memo-details-plan-to-smear-fired-warehouse-organizer/', date: 'April 2020' },
 { title: 'Fulfillment: Winning and Losing in One-Click America, Alec MacGillis', url: 'https://us.macmillan.com/books/9780374159276/fulfillment', date: '2021' },
 ],
};

export default function AmazonLaborAbusesPage() {
 return (
 <div className="min-h-screen pt-20 lg:pt-24 pb-16">
 <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
 <Link href="/investigations"className="inline-flex items-center gap-2 text-zinc-400 hover:text-white transition-colors mb-6 pt-4"><ArrowLeft className="w-4 h-4"/>Back to Investigations</Link>
 <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="border-2 border-zinc-800/60 bg-[rgba(0,6,20,0.90)] p-6 lg:p-8 mb-8">
 <div className="flex items-center gap-3 mb-4"><span className="px-3 py-1 text-xs font-bold uppercase border border-zinc-800 bg-zinc-900 text-zinc-400">{investigation.severity}</span><span className="px-3 py-1 text-xs font-bold uppercase border border-zinc-700 bg-zinc-900 text-zinc-400">{investigation.status}</span></div>
 <h1 className="text-3xl lg:text-4xl font-black glass-text uppercase tracking-wider mb-2"><GlitchText text={investigation.title} /></h1>
 <p className="text-lg text-zinc-300 font-bold mb-4">{investigation.subtitle}</p>
 <p className="text-zinc-400 leading-relaxed">{investigation.summary}</p>
 </motion.div>
 <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.15 }} className="glass-card p-6 mb-8 border-l-4 border-zinc-700">
 <h2 className="text-xl font-bold glass-text uppercase tracking-wider mb-4 flex items-center gap-2"><ShieldAlert className="w-5 h-5 text-zinc-300"/>The Cover-Up</h2>
 <div className="space-y-3">{investigation.coverup.map((item, idx) => (<div key={idx} className="p-3 bg-zinc-900 border border-zinc-800"><p className="text-sm text-zinc-300">{item}</p></div>))}</div>
 </motion.div>
 <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
 <div className="lg:col-span-2 space-y-8">
 <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }} className="glass-card p-6">
 <h2 className="text-xl font-bold glass-text uppercase tracking-wider mb-4 flex items-center gap-2"><Users className="w-5 h-5 text-zinc-300"/>Key Figures</h2>
 <div className="space-y-3">{investigation.keyFigures.map((figure, idx) => (<div key={idx} className="flex items-start justify-between p-3 bg-[#0a0a0a] border border-[rgba(255,255,255,0.15)]"><div className="flex-1">{figure.href ? (<Link href={figure.href} className="font-bold text-zinc-400 hover:text-white transition-colors">{figure.name}</Link>) : (<span className="font-bold glass-text">{figure.name}</span>)}<p className="text-sm text-zinc-400 mt-1">{figure.role}</p></div><span className="text-xs px-2 py-1 bg-[#0d0d0d] text-zinc-400 border border-[rgba(255,255,255,0.18)] whitespace-nowrap ml-2">{figure.status}</span></div>))}</div>
 </motion.div>
 <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }} className="glass-card p-6">
 <h2 className="text-xl font-bold glass-text uppercase tracking-wider mb-4 flex items-center gap-2"><Scale className="w-5 h-5 text-zinc-300"/>Applicable Charges &amp; Statutes</h2>
 <div className="space-y-3">{investigation.charges.map((charge, idx) => (<div key={idx} className="p-4 bg-[#0a0a0a] border border-[rgba(255,255,255,0.15)]"><p className="font-bold text-zinc-400 text-sm font-mono">{charge.statute}</p><p className="text-sm text-zinc-300 mt-1">{charge.description}</p><p className="text-xs text-zinc-400 mt-1">{charge.count}</p></div>))}</div>
 </motion.div>
 </div>
 <div className="space-y-6">
 <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} className="glass-card p-6">
 <h3 className="text-lg font-bold glass-text uppercase tracking-wider mb-4 flex items-center gap-2"><Calendar className="w-4 h-4 text-zinc-300"/>Timeline</h3>
 <div className="space-y-4">{investigation.timeline.map((item, idx) => (<div key={idx} className="relative pl-4 border-l-2 border-[rgba(255,255,255,0.15)]"><div className="absolute -left-[5px] top-0 w-2 h-2 bg-zinc-600"/><p className="text-xs text-zinc-300 font-mono">{item.date}</p><p className="text-sm text-zinc-300">{item.event}</p></div>))}</div>
 </motion.div>
 <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.1 }} className="glass-card p-6">
 <h3 className="text-lg font-bold glass-text uppercase tracking-wider mb-4 flex items-center gap-2"><Scale className="w-5 h-5 text-zinc-300"/>Legal Outcomes</h3>
 <div className="space-y-3">{investigation.legalOutcomes.map((item, idx) => (<div key={idx} className="p-3 bg-[#0a0a0a] border border-[rgba(255,255,255,0.15)]"><p className="font-bold glass-text text-sm">{item.defendant}</p><p className="text-xs text-zinc-400 mt-1">{item.charge}</p><p className="text-xs text-zinc-400 mt-1">{item.outcome}</p></div>))}</div>
 </motion.div>
 <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.2 }} className="glass-card p-6">
 <h3 className="text-lg font-bold glass-text uppercase tracking-wider mb-4">Sources</h3>
 <div className="space-y-2">{investigation.sources.map((source, idx) => (<a key={idx} href={source.url} target="_blank"rel="noopener noreferrer"className="flex items-start gap-2 p-2 text-sm text-zinc-400 hover:text-white hover:bg-[#0a0a0a] transition-colors"><ExternalLink className="w-4 h-4 mt-0.5 flex-shrink-0"/><div><span>{source.title}</span><span className="text-zinc-600 ml-2">({source.date})</span></div></a>))}</div>
 </motion.div>
 </div>
 </div>
 </div>
 </div>
 );
}
