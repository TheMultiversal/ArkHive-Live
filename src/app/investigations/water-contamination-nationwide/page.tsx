'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowLeft, AlertTriangle, Users, Calendar, FileText, ExternalLink, Scale, ShieldAlert, Skull } from 'lucide-react';
import GlitchText from '@/components/effects/GlitchText';

const investigation = {
 title: 'Nationwide Water Contamination',
 subtitle: 'Poisoned Taps: How Corporate Polluters and Government Negligence Contaminated America\'s Water Supply',
 severity: 'critical',
 status: 'ONGOING',
 summary: 'The United States is experiencing a systemic water contamination crisis that extends far beyond the Flint, Michigan disaster. An estimated 9.2 million American homes still receive water through lead service lines. Camp Lejeune, North Carolina exposed over 1 million Marines and their families to toxic chemicals for three decades (1953-1987). PFAS"forever chemicals"have been detected in the drinking water of over 2,800 communities, contaminating the blood of 98% of Americans. Jackson, Mississippi\'s predominantly Black population lost running water entirely in 2022. The East Palestine, Ohio train derailment released vinyl chloride and other carcinogens into waterways. Newark, New Jersey discovered dangerous lead levels in 2018. Agricultural runoff has created dead zones in waterways. Across the nation, regulatory capture (where polluters control the agencies meant to regulate them) ensures corporate profits take priority over public health. The EPA estimates that bringing America\'s water infrastructure up to safe standards would cost $625 billion, but political will to fund it remains absent. Communities of color and low-income populations bear a disproportionate burden of contamination, making water justice a civil rights issue.',
 keyFigures: [
 { name: 'Rick Snyder', role: 'Michigan Governor who switched Flint\'s water source to save money, exposing 100,000 residents to lead', href: '/entities/individuals/rick-snyder', status: 'Charges dismissed (2022)' },
 { name: 'Marc Edwards', role: 'Virginia Tech engineer whose independent testing proved Flint\'s water was contaminated with lead', href: '/entities/individuals/marc-edwards', status: 'Active' },
 { name: 'Dr. Mona Hanna-Attisha', role: 'Flint pediatrician who documented elevated lead levels in children despite government denials', href: '/entities/individuals/mona-hanna-attisha', status: 'Active' },
 { name: 'Darnell Earley', role: 'Flint Emergency Manager who approved the switch to Flint River water without corrosion control', href: '/entities/individuals/darnell-earley', status: 'Active' },
 { name: 'Robert Bilott', role: 'Attorney who exposed DuPont\'s PFAS contamination in Parkersburg, West Virginia (featured in Dark Waters)', href: '/entities/individuals/robert-bilott', status: 'Active' },
 { name: 'Jerry Ensminger', role: 'Marine veteran who spent decades fighting for Camp Lejeune victims after his daughter died of leukemia', href: '/entities/individuals/jerry-ensminger', status: 'Active' },
 { name: 'Scott Pruitt', role: 'EPA Administrator (2017-2018) who weakened water quality regulations and had ties to polluting industries', href: '/entities/individuals/scott-pruitt', status: 'Resigned under ethics investigations' },
 { name: 'Andrew Wheeler', role: 'EPA Administrator (2018-2021), former coal lobbyist who slowed PFAS regulations', href: '/entities/individuals/andrew-wheeler', status: 'Active' },
 { name: 'LeeAnne Walters', role: 'Flint mother whose children suffered lead poisoning; her activism helped expose the crisis', href: '/entities/individuals/leeanne-walters', status: 'Active' },
 { name: 'Erin Brockovich', role: 'Environmental activist who documented chromium-6 contamination in Hinkley, CA; continues water advocacy nationwide', href: '/entities/individuals/erin-brockovich', status: 'Active' },
 { name: 'Norfolk Southern (CEO Alan Shaw)', role: 'Railroad company responsible for East Palestine, Ohio train derailment releasing carcinogens into water supply', href: '/entities/individuals/alan-shaw', status: 'Active' },
 { name: '3M Company', role: 'Manufacturer of PFAS chemicals who concealed evidence of toxicity for decades', href: '/entities/corporations/3m-company', status: 'Settled for $10.3B (2023)' },
 { name: 'DuPont / Chemours', role: 'Manufactured and dumped PFOA (C8) into waterways for decades while concealing health data', href: '/entities/corporations/dupont', status: 'Active, settled for $1.19B' },
 ],
 timeline: [
 { date: '1953', event: 'Camp Lejeune, NC begins drawing water from contaminated wells; Marines and families exposed to TCE, PCE, benzene, vinyl chloride' },
 { date: '1950s-1970s', event: '3M and DuPont begin manufacturing PFAS chemicals, knowing they are toxic and persistent but concealing data' },
 { date: '1966', event: 'Hinkley, California: Pacific Gas & Electric begins dumping chromium-6 into unlined wastewater ponds, contaminating groundwater' },
 { date: '1982', event: 'DuPont internal study shows PFOA causes birth defects in rats; information concealed from regulators for 16 years' },
 { date: '1987', event: 'Camp Lejeune contaminated wells finally closed after 34 years of exposure; over 1 million people affected' },
 { date: '1998', event: 'Attorney Robert Bilott files first lawsuit against DuPont on behalf of farmer Wilbur Tennant whose cattle were dying from PFAS contamination' },
 { date: '2004', event: 'EPA fines DuPont $16.5 million (largest penalty in agency history at the time) for concealing PFAS health data (a fraction of DuPont\'s profits)' },
 { date: '2014-APR', event: 'Flint, Michigan switches water source to Flint River to save money; residents immediately report brown, foul-smelling water' },
 { date: '2015', event: 'Virginia Tech testing confirms Flint water has lead levels exceeding EPA limits; state officials continue denying problems' },
 { date: '2015-SEP', event: 'Dr. Mona Hanna-Attisha proves children\'s blood lead levels have doubled/tripled since water switch; state admits crisis' },
 { date: '2016-JAN', event: 'President Obama declares federal emergency in Flint; at least 12 people die from Legionnaires\' disease linked to contaminated water' },
 { date: '2018', event: 'Newark, NJ discovers lead levels in schools and homes exceed federal limits; city begins distributing bottled water' },
 { date: '2022-AUG', event: 'Jackson, Mississippi loses running water entirely; predominantly Black city of 150,000 left without safe drinking water for weeks' },
 { date: '2022-AUG', event: 'Camp Lejeune Justice Act signed into law, allowing victims to file claims against the government for toxic water exposure' },
 { date: '2023-FEB-03', event: 'Norfolk Southern train derailment in East Palestine, Ohio releases vinyl chloride and other carcinogens into waterways' },
 { date: '2023-JUN', event: '3M reaches $10.3 billion settlement with public water systems over PFAS contamination nationwide' },
 { date: '2024', event: 'EPA sets first-ever enforceable limits on PFAS in drinking water: 4 parts per trillion for PFOA and PFOS' },
 { date: '2024', event: 'EPA estimates 9.2 million homes still have lead service lines; $15 billion Lead and Copper Rule funding falls far short of need' },
 ],
 legalOutcomes: [
 { defendant: 'Rick Snyder (Michigan Governor)', charge: 'Willful neglect of duty in Flint water crisis', outcome: 'Criminal charges filed in 2021; all charges dismissed in 2022 on procedural grounds' },
 { defendant: 'DuPont / Chemours', charge: 'Concealing PFAS (C8) contamination data for decades', outcome: '$1.19 billion settlement in 2023; $671 million prior settlements; no executives imprisoned' },
 { defendant: '3M Company', charge: 'Manufacturing and concealing toxicity of PFAS"forever chemicals"', outcome: '$10.3 billion settlement with public water systems in 2023; no criminal charges' },
 { defendant: 'Norfolk Southern', charge: 'Negligence in East Palestine train derailment', outcome: '$600 million class action settlement in 2023; DOJ lawsuit for Clean Water Act violations ongoing' },
 { defendant: 'City of Flint Officials', charge: 'Involuntary manslaughter (Legionnaires\' deaths), willful neglect', outcome: 'Nine officials charged; $626 million settlement with residents; most charges dropped' },
 { defendant: 'Camp Lejeune / U.S. Government', charge: 'Exposing 1 million+ to toxic water for 34 years', outcome: 'Camp Lejeune Justice Act (2022) allows victims to sue; claims estimated at $21+ billion' },
 { defendant: 'Pacific Gas & Electric (Hinkley)', charge: 'Contaminating groundwater with hexavalent chromium', outcome: '$333 million settlement in 1996; portrayed in film Erin Brockovich' },
 { defendant: 'EPA (Institutional Failure)', charge: 'Failure to regulate PFAS for decades despite evidence of toxicity', outcome: 'First enforceable PFAS limits finally set in 2024; over 70 years after contamination began' },
 ],
 charges: [
 { statute: 'Safe Drinking Water Act (42 U.S.C. § 300f)', description: 'Federal law requiring EPA to set and enforce standards for drinking water quality, systematically under-enforced', count: 'Violated in Flint, Newark, Jackson, and thousands of other systems; 2,000+ water systems exceed lead limits' },
 { statute: 'Clean Water Act (33 U.S.C. § 1251)', description: 'Prohibits discharge of pollutants into navigable waters without permits, violated by industrial polluters nationwide', count: 'PFAS contamination detected in 2,800+ communities; agricultural runoff creates massive dead zones' },
 { statute: 'Toxic Substances Control Act (15 U.S.C. § 2601)', description: 'Requires testing and regulation of chemical substances but allowed PFAS to go unregulated for 70+ years', count: '12,000+ PFAS compounds manufactured; EPA has set limits on only a handful' },
 { statute: 'CERCLA / Superfund (42 U.S.C. § 9601)', description: 'Requires cleanup of hazardous waste sites; Camp Lejeune and countless contaminated sites await remediation', count: '1,336 Superfund sites on National Priorities List; estimated $50B+ cleanup backlog' },
 { statute: 'Lead and Copper Rule (40 CFR Part 141)', description: 'Requires water systems to control corrosivity and replace lead pipes, Flint failed to add legally required corrosion control', count: '9.2 million homes still have lead service lines; EPA estimates $45B+ needed for replacement' },
 { statute: 'Civil Rights Act Title VI', description: 'Prohibits racial discrimination in programs receiving federal funding, environmental racism in water contamination disproportionately affects communities of color', count: 'Flint (57% Black), Jackson (82% Black), Newark (50% Black); contamination follows racial demographics' },
 { statute: 'Resource Conservation and Recovery Act (42 U.S.C. § 6901)', description: 'Governs disposal of solid and hazardous waste, violated by military, industrial, and agricultural polluters', count: 'Camp Lejeune: 1 million+ exposed; East Palestine: vinyl chloride released into waterways' },
 { statute: 'Fraud and Concealment (Common Law)', description: 'Companies including 3M and DuPont knowingly concealed evidence of PFAS toxicity from regulators and the public for decades', count: 'Internal documents show companies knew of toxicity since 1960s; concealed data for 40+ years' },
 ],
 coverup: [
 'Michigan state officials falsified Flint water testing data by instructing residents to pre-flush pipes before testing, a technique that artificially lowered lead readings',
 'The EPA\'s Region 5 office knew about lead contamination in Flint months before taking action; a career employee who raised alarms was silenced and threatened with discipline',
 'DuPont\'s own scientists identified PFOA health risks as early as 1961 but the company concealed findings from regulators for over 40 years',
 '3M internally classified PFAS as toxic and persistent in the 1970s but continued manufacturing and concealing health data for 50+ years',
 'The Marine Corps knew about Camp Lejeune water contamination as early as 1980 but continued using contaminated wells until 1987; and denied veterans\' health claims for decades',
 'Jackson, Mississippi\'s water crisis was building for years as state officials diverted federal infrastructure funding away from the predominantly Black city',
 'Norfolk Southern pressured East Palestine residents to sign liability waivers in exchange for $1,000 hotel stays within days of the derailment, before contamination extent was known',
 'The EPA under Scott Pruitt and Andrew Wheeler deliberately slowed PFAS regulation, with both administrators having financial ties to industries that benefit from weak water standards',
 'An estimated 50,000+ community water systems in the U.S. have violations of the Safe Drinking Water Act in any given year, the EPA enforces against only a tiny fraction',
 ],
 sources: [
 { title: 'Hanna-Attisha, Mona, What the Eyes Don\'t See: A Story of Crisis, Resistance, and Hope in an American City', url: 'https://www.penguinrandomhouse.com/books/561217/what-the-eyes-dont-see-by-mona-hanna-attisha/', date: '2018' },
 { title: 'NRDC, Threats on Tap: Widespread Violations of the Safe Drinking Water Act', url: 'https://www.nrdc.org/resources/threats-tap-widespread-violations-highlight-need-investment-water-infrastructure-and-protections', date: '2017' },
 { title: 'EPA, PFAS Strategic Roadmap: EPA\'s Commitments to Action', url: 'https://www.epa.gov/pfas/pfas-strategic-roadmap-epas-commitments-action-2021-2024', date: '2021' },
 { title: 'New York Times, The Lawyer Who Became DuPont\'s Worst Nightmare (Robert Bilott)', url: 'https://www.nytimes.com/2016/01/10/magazine/the-lawyer-who-became-duponts-worst-nightmare.html', date: '2016-01-06' },
 { title: 'ATSDR, Camp Lejeune Water Contamination Health Studies', url: 'https://www.atsdr.cdc.gov/sites/lejeune/', date: '2023' },
 { title: 'Washington Post, What Happened in East Palestine, Ohio', url: 'https://www.washingtonpost.com/nation/2023/02/15/east-palestine-ohio-train-derailment/', date: '2023-02-15' },
 { title: 'EPA, Lead Service Line Replacement: National Inventory Results', url: 'https://www.epa.gov/ground-water-and-drinking-water/lead-service-line-replacement', date: '2024' },
 { title: 'Mississippi Today, Jackson Water Crisis: A Failure Decades in the Making', url: 'https://mississippitoday.org/jackson-water-crisis/', date: '2022' },
 { title: 'EWG, Interactive Map: PFAS Contamination in the U.S.', url: 'https://www.ewg.org/interactive-maps/pfas_contamination/', date: '2024' },
 ],
};

export default function WaterContaminationNationwidePage() {
 return (
 <div className="min-h-screen pt-20 lg:pt-24 pb-16">
 <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
 <Link href="/investigations"className="inline-flex items-center gap-2 text-zinc-400 hover:text-blood-500 transition-colors mb-6 pt-4"><ArrowLeft className="w-4 h-4"/>Back to Investigations</Link>
 <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="border-2 border-blood-800/60 bg-[rgba(0,6,20,0.90)] p-6 lg:p-8 mb-8">
 <div className="flex items-center gap-3 mb-4"><span className="px-3 py-1 text-xs font-bold uppercase border border-blood-500/30 bg-blood-500/20 text-blood-400">{investigation.severity}</span><span className="px-3 py-1 text-xs font-bold uppercase border border-zinc-500/30 bg-zinc-500/20 text-zinc-400">{investigation.status}</span></div>
 <h1 className="text-3xl lg:text-4xl font-black glass-text uppercase tracking-wider mb-2"><GlitchText text={investigation.title} /></h1>
 <p className="text-lg text-blood-500 font-bold mb-4">{investigation.subtitle}</p>
 <p className="text-zinc-400 leading-relaxed">{investigation.summary}</p>
 </motion.div>
 <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.15 }} className="glass-card p-6 mb-8 border-l-4 border-blood-600">
 <h2 className="text-xl font-bold glass-text uppercase tracking-wider mb-4 flex items-center gap-2"><ShieldAlert className="w-5 h-5 text-blood-500"/>The Cover-Up</h2>
 <div className="space-y-3">{investigation.coverup.map((item, idx) => (<div key={idx} className="p-3 bg-blood-950/20 border border-blood-500/30"><p className="text-sm text-zinc-300">{item}</p></div>))}</div>
 </motion.div>
 <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
 <div className="lg:col-span-2 space-y-8">
 <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }} className="glass-card p-6">
 <h2 className="text-xl font-bold glass-text uppercase tracking-wider mb-4 flex items-center gap-2"><Users className="w-5 h-5 text-blood-500"/>Key Figures</h2>
 <div className="space-y-3">{investigation.keyFigures.map((figure, idx) => (<div key={idx} className="flex items-start justify-between p-3 bg-[rgba(0,10,28,0.82)] border border-[rgba(80,180,255,0.15)]"><div className="flex-1">{figure.href ? (<Link href={figure.href} className="font-bold text-blood-400 hover:text-blood-300 transition-colors">{figure.name}</Link>) : (<span className="font-bold glass-text">{figure.name}</span>)}<p className="text-sm text-zinc-400 mt-1">{figure.role}</p></div><span className="text-xs px-2 py-1 bg-[rgba(0,12,32,0.85)] text-zinc-400 border border-[rgba(60,160,255,0.18)] whitespace-nowrap ml-2">{figure.status}</span></div>))}</div>
 </motion.div>
 <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }} className="glass-card p-6">
 <h2 className="text-xl font-bold glass-text uppercase tracking-wider mb-4 flex items-center gap-2"><Scale className="w-5 h-5 text-blood-500"/>Applicable Charges &amp; Statutes</h2>
 <div className="space-y-3">{investigation.charges.map((charge, idx) => (<div key={idx} className="p-4 bg-[rgba(0,10,28,0.82)] border border-[rgba(80,180,255,0.15)]"><p className="font-bold text-blood-400 text-sm font-mono">{charge.statute}</p><p className="text-sm text-zinc-300 mt-1">{charge.description}</p><p className="text-xs text-blood-400 mt-1">{charge.count}</p></div>))}</div>
 </motion.div>
 </div>
 <div className="space-y-6">
 <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} className="glass-card p-6">
 <h3 className="text-lg font-bold glass-text uppercase tracking-wider mb-4 flex items-center gap-2"><Calendar className="w-4 h-4 text-blood-500"/>Timeline</h3>
 <div className="space-y-4">{investigation.timeline.map((item, idx) => (<div key={idx} className="relative pl-4 border-l-2 border-[rgba(80,180,255,0.15)]"><div className="absolute -left-[5px] top-0 w-2 h-2 bg-blood-500"/><p className="text-xs text-blood-500 font-mono">{item.date}</p><p className="text-sm text-zinc-300">{item.event}</p></div>))}</div>
 </motion.div>
 <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.1 }} className="glass-card p-6">
 <h3 className="text-lg font-bold glass-text uppercase tracking-wider mb-4 flex items-center gap-2"><Scale className="w-5 h-5 text-blood-500"/>Legal Outcomes</h3>
 <div className="space-y-3">{investigation.legalOutcomes.map((item, idx) => (<div key={idx} className="p-3 bg-[rgba(0,10,28,0.82)] border border-[rgba(80,180,255,0.15)]"><p className="font-bold glass-text text-sm">{item.defendant}</p><p className="text-xs text-zinc-400 mt-1">{item.charge}</p><p className="text-xs text-blood-400 mt-1">{item.outcome}</p></div>))}</div>
 </motion.div>
 <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.2 }} className="glass-card p-6">
 <h3 className="text-lg font-bold glass-text uppercase tracking-wider mb-4">Sources</h3>
 <div className="space-y-2">{investigation.sources.map((source, idx) => (<a key={idx} href={source.url} target="_blank"rel="noopener noreferrer"className="flex items-start gap-2 p-2 text-sm text-zinc-400 hover:text-blood-400 hover:bg-[rgba(0,10,28,0.82)] transition-colors"><ExternalLink className="w-4 h-4 mt-0.5 flex-shrink-0"/><div><span>{source.title}</span><span className="text-zinc-600 ml-2">({source.date})</span></div></a>))}</div>
 </motion.div>
 </div>
 </div>
 </div>
 </div>
 );
}
