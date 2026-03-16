'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowLeft, AlertTriangle, Users, Calendar, FileText, ExternalLink, Scale, ShieldAlert, Skull } from 'lucide-react';
import GlitchText from '@/components/effects/GlitchText';

const investigation = {
 title: 'DuPont PFAS Poisoning',
 subtitle: 'Forever Chemicals in the Blood of 98% of Americans, And the Corporation That Knew',
 severity: 'critical',
 status: 'ONGOING, LITIGATION ACTIVE',
 summary: 'For over five decades, DuPont manufactured and discharged per- and polyfluoroalkyl substances (PFAS) (known as"forever chemicals"because they never break down) into waterways and communities while concealing internal evidence that these substances caused cancer, birth defects, and immune system damage. The company\'s flagship chemical C8 (PFOA), used to make Teflon, contaminated the drinking water of over 100,000 people near its Parkersburg, West Virginia plant. Today, PFAS are detectable in the blood of 98% of Americans. DuPont\'s internal studies dating back to the 1960s showed the dangers, yet they chose profits over human lives for decades.',
 keyFigures: [
 { name: 'Robert Bilott', role: 'Environmental attorney who spent 20+ years fighting DuPont; uncovered the PFAS cover-up through corporate documents', href: '/entities/individuals/robert-bilott', status: 'Key Litigator' },
 { name: 'Charles Holliday', role: 'CEO of DuPont (1998-2009) during the period when PFAS contamination became publicly known', href: '/entities/individuals/charles-holliday', status: 'Former CEO' },
 { name: 'Ellen Kullman', role: 'CEO of DuPont (2009-2015); oversaw the spin-off of Chemours to offload PFAS liabilities', href: '/entities/individuals/ellen-kullman', status: 'Former CEO' },
 { name: 'Bernard Reilly', role: 'DuPont attorney who managed the company\'s PFAS defense and internal risk communications', href: '/entities/individuals/bernard-reilly', status: 'Former Counsel' },
 { name: 'Wilbur Tennant', role: 'West Virginia farmer whose livestock died from PFAS-contaminated water; first to raise the alarm', href: '/entities/individuals/wilbur-tennant', status: 'Deceased' },
 { name: 'Earl Stadtman', role: 'NIH biochemist whose early research on fluorochemical toxicity was dismissed by industry', href: '/entities/individuals/earl-stadtman', status: 'Deceased' },
 { name: 'Bruce Karrh', role: 'DuPont\'s Vice President of Safety, Health and Environmental Affairs; oversaw internal toxicity studies', href: '/entities/individuals/bruce-karrh', status: 'Former VP' },
 { name: 'Gerald Kennedy', role: 'DuPont toxicologist who found evidence of C8 causing birth defects in rats; findings were buried', href: '/entities/individuals/gerald-kennedy', status: 'Former Researcher' },
 { name: 'Rob Bilott', role: 'Filed landmark class action that led to C8 Science Panel studying 70,000 exposed residents', href: '/entities/individuals/rob-bilott', status: 'Ongoing Advocate' },
 { name: 'Mark Ruffalo', role: 'Actor and activist who portrayed Robert Bilott in "Dark Waters"- brought international attention to PFAS contamination', href: '/entities/individuals/mark-ruffalo', status: 'Advocate' },
 ],
 timeline: [
 { date: '1938', event: 'Teflon (PTFE) accidentally discovered by DuPont chemist Roy Plunkett; PFAS chemicals central to its production' },
 { date: '1951', event: 'DuPont begins purchasing C8 (PFOA) from 3M for use in Teflon manufacturing at its Washington Works plant' },
 { date: '1961', event: 'Internal DuPont documents warn that C8 is toxic and can enlarge rat livers at low concentrations' },
 { date: '1962', event: 'DuPont recommends avoiding inhalation and skin contact with C8 internally, but tells no one outside the company' },
 { date: '1981', event: '3M informs DuPont that C8 causes birth defects in lab animals; DuPont monitors pregnant workers but does not warn them' },
 { date: '1984', event: 'DuPont discovers C8 in the local Lubeck public drinking water supply but does not notify the community' },
 { date: '1991', event: 'DuPont sets an internal safety limit for C8 in drinking water at 1 part per billion, never disclosed publicly' },
 { date: '1998', event: 'Farmer Wilbur Tennant contacts attorney Robert Bilott about mysterious livestock deaths near DuPont plant' },
 { date: '2000', event: '3M announces it will phase out PFOS production after EPA pressure; DuPont begins manufacturing its own C8' },
 { date: '2001', event: 'Robert Bilott obtains thousands of DuPont internal documents revealing decades of concealed toxicity data' },
 { date: '2004', event: 'EPA fines DuPont $16.5 million (the largest fine in EPA history at the time) for failing to report C8 health risks' },
 { date: '2005-2012', event: 'C8 Science Panel studies 70,000 exposed residents; finds probable links to six diseases including kidney and testicular cancer' },
 { date: '2013', event: 'DuPont phases out C8 but replaces it with GenX, a related PFAS compound that also proves toxic' },
 { date: '2015', event: 'DuPont spins off Chemours as a separate company, transferring PFAS liabilities, critics call it a"liability dump"' },
 { date: '2017', event: 'Over 3,500 personal injury lawsuits against DuPont settled for $671 million following bellwether trial victories' },
 { date: '2021', event: 'EPA announces PFAS Strategic Roadmap; begins process to set enforceable drinking water limits' },
 { date: '2024', event: 'EPA finalizes first-ever national drinking water standards for PFAS at 4 parts per trillion for PFOA and PFOS' },
 ],
 legalOutcomes: [
 { defendant: 'DuPont', charge: 'Failure to report known health risks to EPA under TSCA', outcome: '$16.5 million EPA fine in 2004; largest administrative fine in EPA history at the time' },
 { defendant: 'DuPont', charge: 'Personal injury claims from contaminated community members', outcome: '$671 million settlement for 3,550 personal injury claims in 2017' },
 { defendant: 'DuPont / Chemours', charge: 'Environmental contamination and cleanup liability', outcome: 'Chemours agreed to $4 billion cleanup fund as part of DuPont separation' },
 { defendant: '3M', charge: 'Public water system contamination via PFAS', outcome: '$10.3 billion settlement with U.S. public water systems in 2023' },
 { defendant: 'DuPont / Corteva / Chemours', charge: 'Nationwide PFAS contamination', outcome: 'Joint $1.185 billion settlement with U.S. water providers in 2023' },
 { defendant: 'Various PFAS Manufacturers', charge: 'Aqueous film-forming foam (AFFF) contamination', outcome: 'Multidistrict litigation ongoing, over 6,000 consolidated cases' },
 { defendant: 'DuPont (Bellwether Trials)', charge: 'Cancer caused by C8 exposure', outcome: 'Juries found for plaintiffs in all three bellwether trials with verdicts of $1.6M, $5.6M, and $12.5M' },
 { defendant: 'Chemours', charge: 'Illegal discharge of GenX into Cape Fear River, NC', outcome: 'Consent order requiring $13 million remediation and ongoing monitoring' },
 ],
 charges: [
 { statute: '15 U.S.C. § 2607: Toxic Substances Control Act (TSCA) Reporting', description: 'DuPont failed to report substantial risk information about C8 to the EPA for decades', count: 'EPA found violations in 2004; $16.5M penalty' },
 { statute: '33 U.S.C. § 1311: Clean Water Act Violations', description: 'Illegal discharge of PFAS into the Ohio River and surrounding waterways from Washington Works plant', count: 'Multiple violations documented over decades' },
 { statute: '42 U.S.C. § 9601: CERCLA (Superfund) Liability', description: 'PFAS contamination at manufacturing sites requiring extensive cleanup under Superfund authority', count: 'Multiple sites designated for cleanup' },
 { statute: 'State Tort Law, Negligence & Strict Liability', description: 'Failure to warn communities about known health risks of C8 contamination in drinking water', count: '3,550+ individual claims settled; thousands more pending' },
 { statute: 'State Tort Law, Fraudulent Concealment', description: 'Actively hiding internal toxicity studies and environmental monitoring data from regulators and public', count: 'Central claim in Bilott litigation' },
 { statute: '18 U.S.C. § 1001: False Statements', description: 'Providing misleading information to the EPA about the safety profile of C8/PFOA', count: 'Investigated, resolved through administrative proceedings' },
 { statute: 'State Environmental Statutes (Various)', description: 'Violation of state-level clean water and toxic substance disclosure requirements', count: 'Lawsuits filed in WV, OH, NC, NJ, and other states' },
 { statute: '42 U.S.C. § 300f: Safe Drinking Water Act', description: 'Contamination of public drinking water systems with PFAS above safe levels', count: 'Basis for 2024 EPA drinking water standard' },
 ],
 coverup: [
 'DuPont\'s own toxicology studies from the 1960s showed C8 was toxic at extremely low doses, they classified these studies as confidential and never reported them to the EPA',
 'In 1981, when 3M warned DuPont that C8 caused birth defects in rats, DuPont secretly monitored pregnant workers at Washington Works but never told the women why they were being tested',
 'DuPont discovered C8 in the Lubeck public water supply in 1984 but concealed this finding from the community for over 15 years',
 'The company set an internal safety limit of 1 part per billion for C8 in drinking water while publicly maintaining the chemical was safe, the EPA eventually set the limit at 4 parts per trillion, 250 times lower',
 'When ordered to phase out C8, DuPont replaced it with GenX, a structurally similar PFAS compound that the company already had evidence was also toxic, effectively substituting one poison for another',
 'DuPont spun off Chemours in 2015, transferring billions in PFAS cleanup liabilities to the new company, a corporate restructuring designed to shield DuPont shareholders from accountability',
 'Internal emails showed DuPont executives comparing PFAS contamination to the tobacco and asbestos scandals, they knew the scope of the crisis but continued operations',
 'After farmer Wilbur Tennant reported livestock deaths, DuPont\'s initial response was to discredit him and suggest his farming practices were to blame, not chemical contamination',
 'The EPA\'s initial $16.5 million fine in 2004 amounted to less than 2% of DuPont\'s annual C8 profits, critics called it a cost of doing business rather than a punishment',
 ],
 sources: [
 { title: 'Exposure: Poisoned Water, Corporate Greed, and One Lawyer\'s Twenty-Year Battle, Robert Bilott', url: 'https://www.simonandschuster.com/books/Exposure/Robert-Bilott/9781501172816', date: '2019' },
 { title: 'The Lawyer Who Became DuPont\'s Worst Nightmare, NYT Magazine', url: 'https://www.nytimes.com/2016/01/10/magazine/the-lawyer-who-became-duponts-worst-nightmare.html', date: '2016-01-06' },
 { title: 'EPA PFAS Strategic Roadmap', url: 'https://www.epa.gov/pfas/pfas-strategic-roadmap-epas-commitments-action-2021-2024', date: '2021-10' },
 { title: 'C8 Science Panel Findings', url: 'http://www.c8sciencepanel.org/prob_link.html', date: '2012' },
 { title: 'EPA Final PFAS Drinking Water Standards', url: 'https://www.epa.gov/newsreleases/biden-harris-administration-finalizes-first-ever-national-drinking-water-standard', date: '2024-04-10' },
 { title: 'DuPont PFOA Consent Order, EPA', url: 'https://www.epa.gov/enforcement/dupont-washington-works-consent-order', date: '2005' },
 { title: '3M $10.3 Billion PFAS Settlement', url: 'https://web.archive.org/web/2024/https://www.reuters.com/legal/3m-reaches-103-bln-settlement-forever-chemicals-us-water-supplies-2023-06-22/', date: '2023-06-22' },
 { title: 'Dark Waters (Film): Based on Robert Bilott\'s Fight Against DuPont', url: 'https://www.imdb.com/title/tt9071322/', date: '2019-11-22' },
 ],
};

export default function DuPontPFASPage() {
 return (
 <div className="min-h-screen pt-20 lg:pt-24 pb-16">
 <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
 <Link href="/investigations"className="inline-flex items-center gap-2 text-zinc-400 hover:text-blood-500 transition-colors mb-6 pt-4"><ArrowLeft className="w-4 h-4"/>Back to Investigations</Link>
 <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="border-2 border-blood-800/60 bg-[rgba(0,6,20,0.90)] p-6 lg:p-8 mb-8">
 <div className="flex items-center gap-3 mb-4"><span className="px-3 py-1 text-xs font-bold uppercase border border-blood-800 bg-blood-950 text-blood-400">{investigation.severity}</span><span className="px-3 py-1 text-xs font-bold uppercase border border-zinc-700 bg-zinc-900 text-zinc-400">{investigation.status}</span></div>
 <h1 className="text-3xl lg:text-4xl font-black glass-text uppercase tracking-wider mb-2"><GlitchText text={investigation.title} /></h1>
 <p className="text-lg text-blood-500 font-bold mb-4">{investigation.subtitle}</p>
 <p className="text-zinc-400 leading-relaxed">{investigation.summary}</p>
 </motion.div>
 <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.15 }} className="glass-card p-6 mb-8 border-l-4 border-blood-600">
 <h2 className="text-xl font-bold glass-text uppercase tracking-wider mb-4 flex items-center gap-2"><ShieldAlert className="w-5 h-5 text-blood-500"/>The Cover-Up</h2>
 <div className="space-y-3">{investigation.coverup.map((item, idx) => (<div key={idx} className="p-3 bg-blood-950 border border-blood-800"><p className="text-sm text-zinc-300">{item}</p></div>))}</div>
 </motion.div>
 <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
 <div className="lg:col-span-2 space-y-8">
 <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }} className="glass-card p-6">
 <h2 className="text-xl font-bold glass-text uppercase tracking-wider mb-4 flex items-center gap-2"><Users className="w-5 h-5 text-blood-500"/>Key Figures</h2>
 <div className="space-y-3">{investigation.keyFigures.map((figure, idx) => (<div key={idx} className="flex items-start justify-between p-3 bg-[#000a1c] border border-[rgba(80,180,255,0.15)]"><div className="flex-1">{figure.href ? (<Link href={figure.href} className="font-bold text-blood-400 hover:text-blood-300 transition-colors">{figure.name}</Link>) : (<span className="font-bold glass-text">{figure.name}</span>)}<p className="text-sm text-zinc-400 mt-1">{figure.role}</p></div><span className="text-xs px-2 py-1 bg-[#000c20] text-zinc-400 border border-[rgba(60,160,255,0.18)] whitespace-nowrap ml-2">{figure.status}</span></div>))}</div>
 </motion.div>
 <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }} className="glass-card p-6">
 <h2 className="text-xl font-bold glass-text uppercase tracking-wider mb-4 flex items-center gap-2"><Scale className="w-5 h-5 text-blood-500"/>Applicable Charges &amp; Statutes</h2>
 <div className="space-y-3">{investigation.charges.map((charge, idx) => (<div key={idx} className="p-4 bg-[#000a1c] border border-[rgba(80,180,255,0.15)]"><p className="font-bold text-blood-400 text-sm font-mono">{charge.statute}</p><p className="text-sm text-zinc-300 mt-1">{charge.description}</p><p className="text-xs text-blood-400 mt-1">{charge.count}</p></div>))}</div>
 </motion.div>
 </div>
 <div className="space-y-6">
 <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} className="glass-card p-6">
 <h3 className="text-lg font-bold glass-text uppercase tracking-wider mb-4 flex items-center gap-2"><Calendar className="w-4 h-4 text-blood-500"/>Timeline</h3>
 <div className="space-y-4">{investigation.timeline.map((item, idx) => (<div key={idx} className="relative pl-4 border-l-2 border-[rgba(80,180,255,0.15)]"><div className="absolute -left-[5px] top-0 w-2 h-2 bg-blood-500"/><p className="text-xs text-blood-500 font-mono">{item.date}</p><p className="text-sm text-zinc-300">{item.event}</p></div>))}</div>
 </motion.div>
 <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.1 }} className="glass-card p-6">
 <h3 className="text-lg font-bold glass-text uppercase tracking-wider mb-4 flex items-center gap-2"><Scale className="w-5 h-5 text-blood-500"/>Legal Outcomes</h3>
 <div className="space-y-3">{investigation.legalOutcomes.map((item, idx) => (<div key={idx} className="p-3 bg-[#000a1c] border border-[rgba(80,180,255,0.15)]"><p className="font-bold glass-text text-sm">{item.defendant}</p><p className="text-xs text-zinc-400 mt-1">{item.charge}</p><p className="text-xs text-blood-400 mt-1">{item.outcome}</p></div>))}</div>
 </motion.div>
 <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.2 }} className="glass-card p-6">
 <h3 className="text-lg font-bold glass-text uppercase tracking-wider mb-4">Sources</h3>
 <div className="space-y-2">{investigation.sources.map((source, idx) => (<a key={idx} href={source.url} target="_blank"rel="noopener noreferrer"className="flex items-start gap-2 p-2 text-sm text-zinc-400 hover:text-blood-400 hover:bg-[#000a1c] transition-colors"><ExternalLink className="w-4 h-4 mt-0.5 flex-shrink-0"/><div><span>{source.title}</span><span className="text-zinc-600 ml-2">({source.date})</span></div></a>))}</div>
 </motion.div>
 </div>
 </div>
 </div>
 </div>
 );
}
