'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowLeft, AlertTriangle, Users, Calendar, FileText, ExternalLink, Scale, ShieldAlert, Skull } from 'lucide-react';
import GlitchText from '@/components/effects/GlitchText';

const investigation = {
 title: 'The Afghanistan Papers',
 subtitle: '18 Years of Government Lies: How Officials Deceived the Public About America\'s Longest War',
 severity: 'critical',
 status: 'EXPOSED, NO ACCOUNTABILITY',
 summary: 'In December 2019, the Washington Post published "The Afghanistan Papers"- a trove of over 2,000 pages of confidential government interviews and documents revealing that senior U.S. officials systematically lied about the war in Afghanistan for nearly two decades. The documents, obtained through a three-year FOIA legal battle with the Special Inspector General for Afghanistan Reconstruction (SIGAR), showed that military leaders, diplomats, and White House officials privately acknowledged the war was unwinnable, that billions were being wasted, and that metrics of progress were being deliberately manipulated, all while publicly telling Americans the mission was succeeding. The $2.3 trillion war lasted 20 years, cost over 2,400 American lives and tens of thousands of Afghan civilian casualties, and ended with the Taliban recapturing the country in August 2021.',
 keyFigures: [
 { name: 'Craig Whitlock', role: 'Washington Post reporter who spent three years fighting for the SIGAR documents and authored the Afghanistan Papers investigation', href: '/entities/individuals/craig-whitlock', status: 'Journalist' },
 { name: 'John Sopko', role: 'Special Inspector General for Afghanistan Reconstruction; his office conducted the "Lessons Learned"interviews', href: '/entities/individuals/john-sopko', status: 'IG Investigator' },
 { name: 'Donald Rumsfeld', role: 'Secretary of Defense (2001-2006); internal memos showed he acknowledged lack of metrics and strategy while publicly claiming progress', href: '/entities/individuals/donald-rumsfeld', status: 'Deceased (2021)' },
 { name: 'Douglas Lute', role: 'Afghanistan War czar under Bush and Obama; told interviewers"we didn\'t know what we were doing "and" we didn\'t have the foggiest notion"', href: '/entities/individuals/douglas-lute', status: 'Retired Lt. Gen.' },
 { name: 'Michael Flynn', role: 'Director of Intelligence in Afghanistan who told interviewers that officials"created false narratives"about progress', href: '/entities/individuals/michael-flynn', status: 'Retired Lt. Gen.' },
 { name: 'David Petraeus', role: 'Commander of U.S. forces in Afghanistan; oversaw the surge strategy that papers suggest was conducted with known futility', href: '/entities/individuals/david-petraeus', status: 'Retired General' },
 { name: 'Stanley McChrystal', role: 'Commander of forces in Afghanistan; fired for critical comments but documents show his private assessments were even bleaker', href: '/entities/individuals/stanley-mcchrystal', status: 'Retired General' },
 { name: 'Ashraf Ghani', role: 'President of Afghanistan who fled the country as the Taliban recaptured Kabul in August 2021', href: '/entities/individuals/ashraf-ghani', status: 'Fled Country' },
 { name: 'Ryan Crocker', role: 'U.S. Ambassador to Afghanistan; told interviewers the mission was hampered by corruption and unrealistic goals', href: '/entities/individuals/ryan-crocker', status: 'Retired Diplomat' },
 { name: 'Bob Crowley', role: 'Senior counterinsurgency advisor who told SIGAR that"every data point was altered to present the best picture possible"', href: '/entities/individuals/bob-crowley', status: 'Retired Colonel' },
 ],
 timeline: [
 { date: '2001-10-07', event: 'U.S. launches Operation Enduring Freedom in Afghanistan following the September 11 attacks' },
 { date: '2001-12', event: 'Taliban regime falls; Osama bin Laden escapes from Tora Bora, a failure that would shape the next two decades' },
 { date: '2002', event: 'Bush administration begins shifting focus and resources to Iraq; Afghanistan mission suffers from neglect' },
 { date: '2003', event: 'Rumsfeld memos show him asking "Are we winning or losing?"while publicly insisting the war was on track' },
 { date: '2004', event: 'Afghan elections held; U.S. officials publicly celebrate while privately acknowledging widespread fraud and instability' },
 { date: '2006', event: 'Taliban resurges across southern Afghanistan; internal assessments contradict public claims of steady progress' },
 { date: '2009', event: 'Obama triples troop levels to 100,000 with a surge strategy; Douglas Lute privately says"we didn\'t know what we were doing"' },
 { date: '2010', event: 'Troop surge in Helmand Province; commanders publicly claim success while private assessments show the Taliban is not being defeated' },
 { date: '2011-05', event: 'Osama bin Laden killed in Pakistan, the original justification for the war was achieved, yet the war continues for 10 more years' },
 { date: '2012', event: 'SIGAR begins "Lessons Learned"interview project with over 600 officials about the war\'s conduct' },
 { date: '2014', event: 'U.S. ends formal combat operations; Afghan security forces take the lead despite widespread doubts about their capability' },
 { date: '2016', event: 'Washington Post files FOIA lawsuit to obtain the SIGAR interview transcripts; government fights release for three years' },
 { date: '2019-12-09', event: 'Washington Post publishes "The Afghanistan Papers"- revealing two decades of systematic deception about the war' },
 { date: '2020-02', event: 'Trump administration signs Doha Agreement with Taliban, setting withdrawal timeline without Afghan government participation' },
 { date: '2021-08-15', event: 'Taliban captures Kabul as Afghan government collapses; President Ashraf Ghani flees the country' },
 { date: '2021-08-26', event: 'ISIS-K suicide bombing at Kabul airport kills 13 U.S. service members and at least 170 Afghans during chaotic evacuation' },
 { date: '2021-08-30', event: 'Last U.S. troops leave Afghanistan, ending America\'s longest war after nearly 20 years' },
 { date: '2021-12', event: 'Craig Whitlock publishes book-length investigation:"The Afghanistan Papers: A Secret History of the War"' },
 ],
 legalOutcomes: [
 { defendant: 'U.S. Government (FOIA)', charge: 'Obstruction of public records request', outcome: 'Washington Post won three-year FOIA lawsuit; SIGAR ordered to release "Lessons Learned"interview transcripts' },
 { defendant: 'No Individual Officials', charge: 'Misleading Congress and the public about war progress', outcome: 'No criminal charges filed against any official for the systematic deception' },
 { defendant: 'Afghan Government Officials', charge: 'Massive corruption and aid theft', outcome: 'SIGAR documented billions in wasted and stolen aid; virtually no accountability' },
 { defendant: 'Military Contractors', charge: 'Fraud, waste, and abuse in Afghan reconstruction', outcome: 'SIGAR identified $19 billion in waste; some individual fraud prosecutions' },
 { defendant: 'SIGAR Investigations', charge: 'Overall waste in Afghanistan reconstruction', outcome: 'Over 600 reports documenting $145 billion in reconstruction spending with minimal results' },
 { defendant: 'Congressional Oversight (Failure)', charge: 'Inadequate oversight of war spending and strategy', outcome: 'No formal consequences; Afghanistan War Commission established in 2022' },
 { defendant: 'Afghan Withdrawal (Biden)', charge: 'Chaotic evacuation resulting in deaths', outcome: 'Congressional investigations; no charges; Pentagon found no misconduct' },
 { defendant: 'Unknown (Kabul Airport Bombing)', charge: 'ISIS-K suicide bombing killing 13 U.S. service members', outcome: 'No formal accountability; investigation found no actionable intelligence failure' },
 ],
 charges: [
 { statute: '18 U.S.C. § 1001: False Statements (Potential)', description: 'Senior officials made statements to Congress about war progress they privately knew were misleading or false', count: 'No charges ever filed despite documented deception' },
 { statute: '18 U.S.C. § 1031: Major Fraud Against the United States', description: 'Billions in reconstruction funds wasted or stolen through fraudulent contracting and corrupt Afghan partnerships', count: 'SIGAR identified $19 billion in waste; limited individual prosecutions' },
 { statute: '31 U.S.C. § 3729: False Claims Act', description: 'Military contractors submitted false claims for substandard or nonexistent work in Afghanistan', count: 'Multiple qui tam lawsuits and settlements' },
 { statute: '18 U.S.C. § 371: Conspiracy to Defraud the United States', description: 'Systematic manipulation of data and metrics to present false picture of war progress', count: 'Documented but never prosecuted' },
 { statute: 'War Powers Resolution (Joint Resolution)', description: 'Questions about whether continued military operations exceeded congressional authorization', count: 'Multiple AUMFs used; never formally challenged' },
 { statute: '5 U.S.C. § 552: Freedom of Information Act Violations', description: 'Government agencies resisted FOIA requests for documents revealing the deception', count: 'Washington Post won lawsuit after 3-year legal battle' },
 { statute: '10 U.S.C. § 2324: Fraud in Military Contracts', description: 'Defense contractors overcharged and underdelivered on Afghanistan reconstruction projects', count: 'Documented by SIGAR across hundreds of projects' },
 { statute: 'Moral Authority & Democratic Accountability', description: 'Officials deliberately misled the public about a war that cost $2.3 trillion and thousands of lives', count: 'No mechanism for accountability was ever invoked' },
 ],
 coverup: [
 'Douglas Lute, the Afghanistan "War Czar"under Bush and Obama, told interviewers:"We were devoid of a fundamental understanding of Afghanistan, we didn\'t know what we were doing"- while publicly defending the war effort',
 'Bob Crowley, a senior counterinsurgency advisor, admitted:"Every data point was altered to present the best picture possible. Surveys, for instance, were totally unreliable but reinforced that everything we were doing was right"',
 'Donald Rumsfeld sent classified memos internally asking "Are we winning or losing the global war on terror?"while publicly projecting confidence and dismissing critics',
 'Military officials created meaningless metrics (counting schools built, kilometers of road paved, and training sessions conducted) while privately acknowledging these numbers had no correlation with actual progress',
 'The U.S. spent $9 billion training Afghan security forces that largely existed on paper;"ghost soldiers"who collected salaries but never reported for duty were a known and ignored problem',
 'When SIGAR attempted to publish its findings, the government fought the Washington Post\'s FOIA request for three years, trying to keep the interview transcripts secret from the public',
 'After bin Laden was killed in 2011 (achieving the stated mission) the war continued for 10 more years without any official acknowledging that the original justification no longer applied',
 'The total cost of the Afghanistan war reached $2.3 trillion, with $145 billion spent on reconstruction that SIGAR found produced minimal lasting results, much of it lost to corruption and waste',
 'Despite the Afghan government\'s obvious fragility, U.S. officials publicly maintained it could hold against the Taliban right up until the government collapsed in a matter of days in August 2021',
 ],
 sources: [
 { title: 'Washington Post, The Afghanistan Papers: A Secret History of the War', url: 'https://www.washingtonpost.com/graphics/2019/investigations/afghanistan-papers/afghanistan-war-confidential-documents/', date: '2019-12-09' },
 { title: 'The Afghanistan Papers: A Secret History of the War, Craig Whitlock', url: 'https://www.simonandschuster.com/books/The-Afghanistan-Papers/Craig-Whitlock/9781982159009', date: '2021-08' },
 { title: 'SIGAR, Lessons Learned Reports', url: 'https://www.sigar.mil/lessonslearned/', date: 'Ongoing' },
 { title: 'SIGAR, What We Need to Learn: Twenty Years in Afghanistan', url: 'https://www.sigar.mil/pdf/lessonslearned/SIGAR-21-46-LL.pdf', date: '2021-08' },
 { title: 'Brown University, Costs of War Project: Afghanistan', url: 'https://watson.brown.edu/costsofwar/costs/human/civilians/afghan', date: 'Updated 2023' },
 { title: 'Congressional Research Service, U.S. Military Withdrawal from Afghanistan', url: 'https://crsreports.congress.gov/product/pdf/R/R46879', date: '2021-09' },
 { title: 'NYT, The Lessons of the Afghanistan Papers', url: 'https://www.nytimes.com/2019/12/09/world/asia/afghanistan-war-papers.html', date: '2019-12-09' },
 { title: 'SIGAR, Quarterly Report to Congress', url: 'https://www.sigar.mil/quarterlyreports/', date: 'Ongoing' },
 ],
};

export default function AfghanistanPapersPage() {
 return (
 <div className="min-h-screen pt-20 lg:pt-24 pb-16">
 <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
 <Link href="/investigations"className="inline-flex items-center gap-2 text-zinc-400 hover:text-blood-500 transition-colors mb-6 pt-4"><ArrowLeft className="w-4 h-4"/>Back to Investigations</Link>
 <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="border-2 border-blood-800/60 bg-black/80 p-6 lg:p-8 mb-8">
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
 <div className="space-y-3">{investigation.keyFigures.map((figure, idx) => (<div key={idx} className="flex items-start justify-between p-3 bg-zinc-900/50 border border-zinc-800"><div className="flex-1">{figure.href ? (<Link href={figure.href} className="font-bold text-blood-400 hover:text-blood-300 transition-colors">{figure.name}</Link>) : (<span className="font-bold glass-text">{figure.name}</span>)}<p className="text-sm text-zinc-400 mt-1">{figure.role}</p></div><span className="text-xs px-2 py-1 bg-zinc-800 text-zinc-400 border border-zinc-700 whitespace-nowrap ml-2">{figure.status}</span></div>))}</div>
 </motion.div>
 <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }} className="glass-card p-6">
 <h2 className="text-xl font-bold glass-text uppercase tracking-wider mb-4 flex items-center gap-2"><Scale className="w-5 h-5 text-blood-500"/>Applicable Charges &amp; Statutes</h2>
 <div className="space-y-3">{investigation.charges.map((charge, idx) => (<div key={idx} className="p-4 bg-zinc-900/50 border border-zinc-800"><p className="font-bold text-blood-400 text-sm font-mono">{charge.statute}</p><p className="text-sm text-zinc-300 mt-1">{charge.description}</p><p className="text-xs text-blood-400 mt-1">{charge.count}</p></div>))}</div>
 </motion.div>
 </div>
 <div className="space-y-6">
 <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} className="glass-card p-6">
 <h3 className="text-lg font-bold glass-text uppercase tracking-wider mb-4 flex items-center gap-2"><Calendar className="w-4 h-4 text-blood-500"/>Timeline</h3>
 <div className="space-y-4">{investigation.timeline.map((item, idx) => (<div key={idx} className="relative pl-4 border-l-2 border-zinc-800"><div className="absolute -left-[5px] top-0 w-2 h-2 bg-blood-500"/><p className="text-xs text-blood-500 font-mono">{item.date}</p><p className="text-sm text-zinc-300">{item.event}</p></div>))}</div>
 </motion.div>
 <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.1 }} className="glass-card p-6">
 <h3 className="text-lg font-bold glass-text uppercase tracking-wider mb-4 flex items-center gap-2"><Scale className="w-5 h-5 text-blood-500"/>Legal Outcomes</h3>
 <div className="space-y-3">{investigation.legalOutcomes.map((item, idx) => (<div key={idx} className="p-3 bg-zinc-900/50 border border-zinc-800"><p className="font-bold glass-text text-sm">{item.defendant}</p><p className="text-xs text-zinc-400 mt-1">{item.charge}</p><p className="text-xs text-blood-400 mt-1">{item.outcome}</p></div>))}</div>
 </motion.div>
 <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.2 }} className="glass-card p-6">
 <h3 className="text-lg font-bold glass-text uppercase tracking-wider mb-4">Sources</h3>
 <div className="space-y-2">{investigation.sources.map((source, idx) => (<a key={idx} href={source.url} target="_blank"rel="noopener noreferrer"className="flex items-start gap-2 p-2 text-sm text-zinc-400 hover:text-blood-400 hover:bg-zinc-900/50 transition-colors"><ExternalLink className="w-4 h-4 mt-0.5 flex-shrink-0"/><div><span>{source.title}</span><span className="text-zinc-600 ml-2">({source.date})</span></div></a>))}</div>
 </motion.div>
 </div>
 </div>
 </div>
 </div>
 );
}
