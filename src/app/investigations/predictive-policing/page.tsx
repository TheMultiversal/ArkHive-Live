'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowLeft, AlertTriangle, Users, Calendar, FileText, ExternalLink, Scale, ShieldAlert, Skull } from 'lucide-react';
import GlitchText from '@/components/effects/GlitchText';

const investigation = {
 title: 'Predictive Policing: Algorithms of Oppression',
 subtitle: 'Police departments used biased algorithms trained on racist data to justify over-policing Black neighborhoods',
 severity: 'critical',
 status: 'ONGOING, REBRANDING',
 summary: 'Starting in the early 2010s, police departments across the United States adopted"predictive policing"software that claimed to use data science to forecast where crimes would occur. In reality, these systems, including PredPol (now Geolitica), HunchLab, and Palantir\'s Gotham, were trained on decades of biased arrest data that reflected discriminatory policing patterns rather than actual crime distribution. The algorithms created feedback loops: sending more officers to historically over-policed Black and Latino neighborhoods, generating more arrests, which fed back into the algorithm as "proof" that those areas were high-crime. Multiple studies demonstrated the systems replicated and amplified existing racial disparities. The LAPD\'s use of PredPol was found to be no more effective than random selection, yet the program ran for nearly a decade. As public scrutiny grew, companies rebranded rather than shutting down, and police departments adopted new surveillance technologies under different names.',
 keyFigures: [
 { name: 'Jeff Brantingham', role: 'UCLA professor and PredPol co-founder who compared crime to earthquakes', href: '/entities/individuals/jeff-brantingham', status: 'Active' },
 { name: 'William Bratton', role: 'LAPD Chief who championed predictive policing and"broken windows"theory', href: '/entities/individuals/william-bratton', status: 'Living' },
 { name: 'Peter Thiel', role: 'Palantir founder whose Gotham platform was used for predictive policing in New Orleans secretly', href: '/entities/individuals/peter-thiel', status: 'Active' },
 { name: 'Alex Karp', role: 'Palantir CEO who oversaw expansion into law enforcement predictive analytics', href: '/entities/individuals/alex-karp', status: 'Active' },
 { name: 'Charlie Beck', role: 'LAPD Chief who expanded PredPol deployment citywide', href: '/entities/individuals/charlie-beck', status: 'Living' },
 { name: 'Ruha Benjamin', role: 'Princeton professor who coined "New Jim Code"to describe discriminatory algorithms', href: '/entities/individuals/ruha-benjamin', status: 'Active, Researcher' },
 { name: 'Rashida Richardson', role: 'AI researcher who documented dirty data in predictive policing systems', href: '/entities/individuals/rashida-richardson', status: 'Active, Researcher' },
 { name: 'Kristian Lum', role: 'Statistician who proved PredPol would direct police to Black neighborhoods regardless of crime rates', href: '/entities/individuals/kristian-lum', status: 'Active, Researcher' },
 { name: 'Hamid Khan', role: 'Stop LAPD Spying Coalition organizer who led campaign against predictive policing', href: '/entities/individuals/hamid-khan', status: 'Active, Advocate' },
 { name: 'Cathy O\'Neil', role: 'Mathematician who exposed predictive policing in "Weapons of Math Destruction"', href: '/entities/individuals/cathy-oneil', status: 'Active, Researcher' },
 { name: 'LAPD Inspector General', role: 'Issued 2019 audit finding PredPol lacked evidence of effectiveness and raised civil liberties concerns', href: '/entities/agencies/lapd-ig', status: 'Active' },
 ],
 timeline: [
 { date: '2008', event: 'IBM develops predictive policing concept for Memphis PD\'s "Blue CRUSH"program' },
 { date: '2011', event: 'PredPol founded by UCLA professor Jeff Brantingham; markets algorithm as"earthquake prediction for crime"' },
 { date: '2012', event: 'LAPD begins pilot program with PredPol; Santa Cruz PD becomes first department to adopt it' },
 { date: '2013', event: 'TIME Magazine names predictive policing one of the"50 Best Inventions"; generates widespread adoption' },
 { date: '2014', event: 'Chicago PD creates "Strategic Subject List"(heat list) scoring individuals\' likelihood of involvement in violence' },
 { date: '2015', event: 'Palantir secretly deploys Gotham platform in New Orleans without city council knowledge or approval' },
 { date: '2016', event: 'Researchers Kristian Lum and William Isaac publish landmark study proving PredPol amplifies racial bias' },
 { date: '2016', event: 'ProPublica\'s investigation of COMPAS risk assessment algorithm shows it falsely flags Black defendants at twice the rate' },
 { date: '2017', event: 'The Verge reveals Palantir\'s secret predictive policing program in New Orleans' },
 { date: '2018', event: 'RAND Corporation study finds Chicago heat list is"no better than random"at predicting violence' },
 { date: '2019', event: 'LAPD Inspector General audit finds no evidence PredPol reduces crime; raises civil liberties concerns' },
 { date: '2019', event: 'Ruha Benjamin publishes "Race After Technology"exposing algorithmic discrimination' },
 { date: '2020', event: 'Santa Cruz becomes first U.S. city to ban predictive policing technology' },
 { date: '2020', event: 'LAPD announces it will end PredPol program after community organizing and audit findings' },
 { date: '2021', event: 'PredPol rebrands as "Geolitica" to distance itself from predictive policing controversy' },
 { date: '2022', event: 'Geolitica quietly shuts down; other predictive policing vendors rebrand as"public safety analytics"' },
 { date: '2023', event: 'New AI-powered surveillance tools replace predictive policing under different branding; same biases persist' },
 { date: '2024', event: 'Multiple cities adopt"real-time crime centers"using AI analytics, the next generation of predictive policing' },
 ],
 legalOutcomes: [
 { defendant: 'LAPD', charge: 'Deploying racially biased predictive policing for nearly a decade', outcome: 'Ended PredPol program in 2020 after audit; no accountability for discriminatory deployments' },
 { defendant: 'PredPol / Geolitica', charge: 'Marketing biased algorithm as scientific crime prevention tool', outcome: 'Company rebranded, then shut down; no legal consequences' },
 { defendant: 'Palantir', charge: 'Secret deployment of surveillance platform in New Orleans without public knowledge', outcome: 'Exposed by journalists; contract eventually ended; no legal action' },
 { defendant: 'Chicago PD', charge: 'Creating"heat list"that disproportionately targeted Black residents', outcome: 'RAND study found it ineffective; program quietly modified but never eliminated' },
 { defendant: 'New Orleans PD', charge: 'Using Palantir surveillance without city council approval or public oversight', outcome: 'Revealed in 2018; department denied knowledge initially; program ended' },
 { defendant: 'Multiple Police Departments', charge: 'Using biased algorithms to justify racially disparate enforcement', outcome: 'Santa Cruz banned predictive policing in 2020; most departments quietly discontinued use' },
 { defendant: 'UCLA', charge: 'Allowing professor to develop biased policing tool using university resources', outcome: 'Faculty and students protested; Brantingham stepped back from PredPol leadership' },
 { defendant: 'Federal Government', charge: 'DOJ funding predictive policing systems without requiring bias audits', outcome: 'No federal regulation of predictive policing; DOJ grants continued' },
 ],
 charges: [
 { statute: '14th Amendment, Equal Protection Clause', description: 'Algorithms trained on biased data systematically directed disproportionate policing at communities of color', count: 'Studies proved PredPol would target Black neighborhoods at twice the rate regardless of actual crime' },
 { statute: '4th Amendment, Unreasonable Search', description: 'Using algorithmic predictions as justification for increased stops, searches, and surveillance without individualized suspicion', count: 'Thousands of stops and searches in"hot spots"identified by biased algorithms' },
 { statute: '42 U.S.C. § 1983: Civil Rights Violations', description: 'Government actors deploying tools known to produce racially discriminatory outcomes', count: 'Implemented in 60+ departments affecting millions of residents' },
 { statute: 'Title VI, Civil Rights Act of 1964', description: 'Programs receiving federal funds may not discriminate on the basis of race', count: 'DOJ provided grants for predictive policing without requiring racial impact assessments' },
 { statute: 'Due Process: 5th & 14th Amendments', description: 'Individuals targeted by opaque algorithms with no ability to challenge or even know about the system', count: 'Chicago\'s heat list assigned risk scores without individuals\' knowledge or ability to contest' },
 { statute: 'Fair Housing Act Analogy', description: 'Algorithmic redlining of neighborhoods for hyper-policing mirrors housing discrimination patterns', count: 'PredPol deployment maps overlapped almost exactly with historic redlining maps' },
 { statute: '1st Amendment, Chilling Effect', description: 'Over-policing of communities based on algorithms deters free assembly and expression', count: 'Residents of targeted areas reported feeling surveilled and altering their behavior' },
 { statute: 'Administrative Procedure Act', description: 'Government adoption of consequential algorithmic systems without notice, comment, or transparency', count: 'Multiple departments deployed predictive policing without public notice or council approval' },
 ],
 coverup: [
 'PredPol\'s founder compared crime prediction to earthquake prediction, masking the fundamental difference: crime data reflects policing decisions, not natural phenomena. Arrest data is not crime data, it\'s a record of who police chose to arrest.',
 'When studies proved the algorithms were biased, companies rebranded rather than shut down. PredPol became Geolitica; others adopted terms like"public safety analytics"to avoid the toxic"predictive policing"label.',
 'Palantir deployed its Gotham surveillance platform in New Orleans secretly, without public bidding, city council knowledge, or transparency, reportedly provided free initially to create dependency.',
 'The LAPD ran PredPol for nearly a decade despite internal audits showing no evidence it reduced crime. The department only ended the program after sustained community organizing pressure.',
 'Chicago\'s"heat list"scored individuals for violence risk, but the algorithm\'s methodology was kept secret from both the people on the list and independent researchers seeking to audit it.',
 'Police departments claimed predictive policing was"race-neutral"because algorithms didn\'t explicitly include race as a variable, ignoring that geography, arrest history, and other inputs are proxies for race.',
 'Federal DOJ grants funded predictive policing adoption without requiring racial bias audits, civil rights assessments, or evidence of effectiveness.',
 'When the programs were exposed as ineffective and biased, no department conducted a retroactive review of arrests or stops generated through algorithmic recommendations.',
 'The same companies and technologies are now returning under new names -"real-time crime centers,""AI-powered analytics,""data-driven policing"- perpetuating the same biases with better marketing.',
 ],
 sources: [
 { title: 'Lum & Isaac, To Predict and Serve?', url: 'https://rss.onlinelibrary.wiley.com/doi/full/10.1111/j.1740-9713.2016.00960.x', date: '2016' },
 { title: 'The Markup, Predictive Policing Investigation', url: 'https://themarkup.org/prediction-bias/2021/12/02/crime-prediction-software-promised-to-be-free-of-biases-new-data-shows-it-perpetuates-them', date: '2021' },
 { title: 'LAPD Inspector General, Review of PredPol', url: 'https://www.oig.lacity.org/reports', date: '2019' },
 { title: 'Stop LAPD Spying Coalition, Before the Bullet Hits the Body', url: 'https://stoplapdspying.org/before-the-bullet-hits-the-body-dismantling-predictive-policing-in-los-angeles/', date: '2018' },
 { title: 'Weapons of Math Destruction, Cathy O\'Neil', url: 'https://www.penguinrandomhouse.com/books/241363/weapons-of-math-destruction-by-cathy-oneil/', date: '2016' },
 { title: 'Race After Technology, Ruha Benjamin', url: 'https://www.ruhabenjamin.com/race-after-technology', date: '2019' },
 { title: 'The Verge, Palantir\'s Secret New Orleans Deployment', url: 'https://www.theverge.com/2018/2/27/17054740/palantir-predictive-policing-tool-new-orleans-nopd', date: '2018' },
 { title: 'RAND, Evaluation of Chicago Strategic Subject List', url: 'https://www.rand.org/pubs/research_reports/RR3010.html', date: '2019' },
 { title: 'ProPublica, Machine Bias (COMPAS)', url: 'https://www.propublica.org/article/machine-bias-risk-assessments-in-criminal-sentencing', date: '2016' },
 ],
};

export default function PredictivePolicingPage() {
 return (
 <div className="min-h-screen pt-20 lg:pt-24 pb-16">
 <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
 <Link href="/investigations"className="inline-flex items-center gap-2 text-zinc-400 hover:text-blood-500 transition-colors mb-6 pt-4"><ArrowLeft className="w-4 h-4"/>Back to Investigations</Link>
 <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="border-2 border-blood-800/60 bg-black/80 p-6 lg:p-8 mb-8">
 <div className="flex items-center gap-3 mb-4"><span className="px-3 py-1 text-xs font-bold uppercase border border-blood-500/30 bg-blood-500/20 text-blood-400">{investigation.severity}</span><span className="px-3 py-1 text-xs font-bold uppercase border border-zinc-500/30 bg-zinc-500/20 text-zinc-400">{investigation.status}</span></div>
 <h1 className="text-3xl lg:text-4xl font-black text-white uppercase tracking-wider mb-2"><GlitchText text={investigation.title} /></h1>
 <p className="text-lg text-blood-500 font-bold mb-4">{investigation.subtitle}</p>
 <p className="text-zinc-400 leading-relaxed">{investigation.summary}</p>
 </motion.div>
 <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.15 }} className="glass-card p-6 mb-8 border-l-4 border-blood-600">
 <h2 className="text-xl font-bold text-white uppercase tracking-wider mb-4 flex items-center gap-2"><ShieldAlert className="w-5 h-5 text-blood-500"/>The Cover-Up</h2>
 <div className="space-y-3">{investigation.coverup.map((item, idx) => (<div key={idx} className="p-3 bg-blood-950/20 border border-blood-500/30"><p className="text-sm text-zinc-300">{item}</p></div>))}</div>
 </motion.div>
 <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
 <div className="lg:col-span-2 space-y-8">
 <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }} className="glass-card p-6">
 <h2 className="text-xl font-bold text-white uppercase tracking-wider mb-4 flex items-center gap-2"><Users className="w-5 h-5 text-blood-500"/>Key Figures</h2>
 <div className="space-y-3">{investigation.keyFigures.map((figure, idx) => (<div key={idx} className="flex items-start justify-between p-3 bg-zinc-900/50 border border-zinc-800"><div className="flex-1">{figure.href ? (<Link href={figure.href} className="font-bold text-blood-400 hover:text-blood-300 transition-colors">{figure.name}</Link>) : (<span className="font-bold text-white">{figure.name}</span>)}<p className="text-sm text-zinc-400 mt-1">{figure.role}</p></div><span className="text-xs px-2 py-1 bg-zinc-800 text-zinc-400 border border-zinc-700 whitespace-nowrap ml-2">{figure.status}</span></div>))}</div>
 </motion.div>
 <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }} className="glass-card p-6">
 <h2 className="text-xl font-bold text-white uppercase tracking-wider mb-4 flex items-center gap-2"><Scale className="w-5 h-5 text-blood-500"/>Applicable Charges &amp; Statutes</h2>
 <div className="space-y-3">{investigation.charges.map((charge, idx) => (<div key={idx} className="p-4 bg-zinc-900/50 border border-zinc-800"><p className="font-bold text-blood-400 text-sm font-mono">{charge.statute}</p><p className="text-sm text-zinc-300 mt-1">{charge.description}</p><p className="text-xs text-blood-400 mt-1">{charge.count}</p></div>))}</div>
 </motion.div>
 </div>
 <div className="space-y-6">
 <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} className="glass-card p-6">
 <h3 className="text-lg font-bold text-white uppercase tracking-wider mb-4 flex items-center gap-2"><Calendar className="w-4 h-4 text-blood-500"/>Timeline</h3>
 <div className="space-y-4">{investigation.timeline.map((item, idx) => (<div key={idx} className="relative pl-4 border-l-2 border-zinc-800"><div className="absolute -left-[5px] top-0 w-2 h-2 bg-blood-500"/><p className="text-xs text-blood-500 font-mono">{item.date}</p><p className="text-sm text-zinc-300">{item.event}</p></div>))}</div>
 </motion.div>
 <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.1 }} className="glass-card p-6">
 <h3 className="text-lg font-bold text-white uppercase tracking-wider mb-4 flex items-center gap-2"><Scale className="w-5 h-5 text-blood-500"/>Legal Outcomes</h3>
 <div className="space-y-3">{investigation.legalOutcomes.map((item, idx) => (<div key={idx} className="p-3 bg-zinc-900/50 border border-zinc-800"><p className="font-bold text-white text-sm">{item.defendant}</p><p className="text-xs text-zinc-400 mt-1">{item.charge}</p><p className="text-xs text-blood-400 mt-1">{item.outcome}</p></div>))}</div>
 </motion.div>
 <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.2 }} className="glass-card p-6">
 <h3 className="text-lg font-bold text-white uppercase tracking-wider mb-4">Sources</h3>
 <div className="space-y-2">{investigation.sources.map((source, idx) => (<a key={idx} href={source.url} target="_blank"rel="noopener noreferrer"className="flex items-start gap-2 p-2 text-sm text-zinc-400 hover:text-blood-400 hover:bg-zinc-900/50 transition-colors"><ExternalLink className="w-4 h-4 mt-0.5 flex-shrink-0"/><div><span>{source.title}</span><span className="text-zinc-600 ml-2">({source.date})</span></div></a>))}</div>
 </motion.div>
 </div>
 </div>
 </div>
 </div>
 );
}
