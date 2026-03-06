'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowLeft, AlertTriangle, Users, Calendar, FileText, ExternalLink, Scale, ShieldAlert, Skull } from 'lucide-react';
import GlitchText from '@/components/effects/GlitchText';

const investigation = {
 title: 'The Big Tobacco Cover-Up',
 subtitle: 'How the Tobacco Industry Knew Cigarettes Killed, And Spent Billions to Hide It',
 severity: 'critical',
 status: 'EXPOSED, PARTIALLY RESOLVED',
 summary: 'For over four decades, the tobacco industry engaged in a systematic campaign to deny, distort, and suppress scientific evidence linking cigarettes to cancer, heart disease, and death. Internal documents revealed that companies knew as early as the 1950s that their products were lethal and addictive, yet they funded junk science, manipulated public opinion, targeted children, and lied under oath before Congress. The conspiracy resulted in the deaths of tens of millions worldwide and culminated in the 1998 Master Settlement Agreement (the largest civil litigation settlement in U.S. history) though critics argue that the industry escaped true accountability.',
 keyFigures: [
 { name: 'Jeffrey Wigand', role: 'Former VP of R&D at Brown & Williamson; key whistleblower who exposed internal knowledge of nicotine manipulation', href: '/entities/individuals/jeffrey-wigand', status: 'Whistleblower' },
 { name: 'Thomas Sandefur', role: 'CEO of Brown & Williamson who testified under oath that nicotine was not addictive', href: '/entities/individuals/thomas-sandefur', status: 'Deceased' },
 { name: 'William Campbell', role: 'President of Philip Morris USA; testified before Congress denying addiction', href: '/entities/individuals/william-campbell', status: 'Former Executive' },
 { name: 'James Johnston', role: 'CEO of R.J. Reynolds; part of the 1994 Congressional testimony denial', href: '/entities/individuals/james-johnston', status: 'Former Executive' },
 { name: 'Andrew Tisch', role: 'CEO of Lorillard Tobacco; denied addictiveness under oath', href: '/entities/individuals/andrew-tisch', status: 'Former Executive' },
 { name: 'Edward Horrigan', role: 'CEO of Liggett Group; later broke ranks and settled with states', href: '/entities/individuals/edward-horrigan', status: 'Former Executive' },
 { name: 'Addison Yeaman', role: 'General Counsel of Brown & Williamson; authored the infamous 1963 memo admitting nicotine is addictive', href: '/entities/individuals/addison-yeaman', status: 'Deceased' },
 { name: 'C. Everett Koop', role: 'U.S. Surgeon General who declared nicotine as addictive as heroin and cocaine in 1988', href: '/entities/individuals/c-everett-koop', status: 'Deceased' },
 { name: 'Mike Moore', role: 'Mississippi Attorney General who filed the first state lawsuit against big tobacco in 1994', href: '/entities/individuals/mike-moore', status: 'Key Litigator' },
 { name: 'Henry Waxman', role: 'U.S. Congressman who chaired the 1994 hearings where tobacco CEOs denied nicotine\'s addictiveness', href: '/entities/individuals/henry-waxman', status: 'Former Congressman' },
 { name: 'David Kessler', role: 'FDA Commissioner who pushed to regulate tobacco as a drug-delivery device', href: '/entities/individuals/david-kessler', status: 'Former FDA Head' },
 { name: 'Victor DeNoble', role: 'Philip Morris researcher whose addiction studies were suppressed by the company', href: '/entities/individuals/victor-denoble', status: 'Whistleblower' },
 ],
 timeline: [
 { date: '1950', event: 'Ernst Wynder and Evarts Graham publish landmark study linking cigarette tar to cancer in mice' },
 { date: '1953', event: 'Hill & Knowlton PR firm hired by tobacco CEOs to launch the "Frank Statement to Cigarette Smokers"- a coordinated denial campaign' },
 { date: '1954', event: 'Tobacco Industry Research Committee (TIRC) created to manufacture doubt about cancer link' },
 { date: '1963', event: 'Brown & Williamson\'s general counsel Addison Yeaman writes internal memo:"nicotine is addictive. We are in the business of selling nicotine."' },
 { date: '1964', event: 'U.S. Surgeon General Luther Terry releases landmark report confirming smoking causes lung cancer' },
 { date: '1966', event: 'Congress passes Federal Cigarette Labeling and Advertising Act requiring warning labels, but preempts stronger state regulations' },
 { date: '1969', event: 'Congress bans cigarette advertising on television and radio, effective 1971' },
 { date: '1970s', event: 'Industry shifts marketing toward women, minorities, and developing nations as domestic awareness grows' },
 { date: '1981', event: 'Philip Morris researcher Victor DeNoble discovers nicotine\'s addictive properties; company suppresses findings and destroys lab animals' },
 { date: '1988', event: 'Surgeon General C. Everett Koop declares nicotine addictive, comparing it to heroin and cocaine' },
 { date: '1994-04-14', event: 'Seven tobacco CEOs testify before Congress under oath that nicotine is not addictive, the most infamous moment of the scandal' },
 { date: '1994-05', event: 'Mississippi AG Mike Moore files the first state lawsuit against tobacco companies to recover Medicaid costs' },
 { date: '1996', event: 'Jeffrey Wigand appears on 60 Minutes, exposing Brown & Williamson\'s internal knowledge of nicotine manipulation' },
 { date: '1997', event: 'Liggett Group breaks ranks, admitting cigarettes cause cancer and are addictive, the first such admission by a tobacco company' },
 { date: '1998-11', event: 'Master Settlement Agreement reached: $206 billion over 25 years from Philip Morris, R.J. Reynolds, Brown & Williamson, and Lorillard' },
 { date: '2006', event: 'Federal judge Gladys Kessler rules tobacco companies violated RICO statute by conspiring to deceive the public about smoking dangers' },
 { date: '2009', event: 'Family Smoking Prevention and Tobacco Control Act grants FDA authority to regulate tobacco products' },
 ],
 legalOutcomes: [
 { defendant: 'Philip Morris USA', charge: 'RICO conspiracy, consumer fraud', outcome: 'Part of $206B Master Settlement Agreement; found guilty of RICO violations in 2006 federal case' },
 { defendant: 'R.J. Reynolds', charge: 'RICO conspiracy, fraudulent misrepresentation', outcome: 'Part of MSA; paid billions in individual wrongful death suits' },
 { defendant: 'Brown & Williamson', charge: 'Suppression of research, perjury allegations', outcome: 'Merged with R.J. Reynolds in 2004; part of MSA payments' },
 { defendant: 'Lorillard', charge: 'Marketing to minors, fraudulent health claims', outcome: 'Part of MSA; acquired by R.J. Reynolds in 2015' },
 { defendant: 'Liggett Group', charge: 'Consumer fraud', outcome: 'First company to settle; admitted causation and addiction in 1997' },
 { defendant: 'Altria Group (Philip Morris parent)', charge: 'Ongoing RICO compliance', outcome: 'Subject to corrective statements under court order; paid billions in individual suits' },
 { defendant: 'Thomas Sandefur', charge: 'Perjury before Congress', outcome: 'Investigated but never prosecuted; died of cancer in 1996' },
 { defendant: 'Council for Tobacco Research', charge: 'Scientific fraud, public deception', outcome: 'Dissolved as part of MSA; documents released publicly' },
 ],
 charges: [
 { statute: '18 U.S.C. § 1962 - RICO (Racketeer Influenced and Corrupt Organizations Act)', description: 'Tobacco companies operated as a criminal enterprise to deceive the public about health risks of smoking', count: 'Found liable in U.S. v. Philip Morris (2006)' },
 { statute: '18 U.S.C. § 1621 - Perjury', description: 'Seven CEOs potentially committed perjury by testifying under oath that nicotine was not addictive', count: 'Referred to DOJ; no prosecutions filed' },
 { statute: '15 U.S.C. § 45 - Unfair and Deceptive Trade Practices (FTC Act)', description: 'Decades of misleading advertising about "light" and"low tar"cigarettes being safer', count: 'Multiple FTC actions and consent decrees' },
 { statute: '21 U.S.C. § 331 - Federal Food, Drug, and Cosmetic Act violations', description: 'Manipulation of nicotine levels to enhance addiction without disclosure', count: 'Basis for FDA regulatory authority established in 2009' },
 { statute: 'State Consumer Protection Statutes (Various)', description: 'Fraudulent misrepresentation of product safety across all 50 states', count: '$206 billion Master Settlement Agreement across 46 states' },
 { statute: '18 U.S.C. § 1341 - Mail Fraud', description: 'Using U.S. mail to distribute fraudulent health claims and misleading scientific studies', count: 'Part of RICO predicate acts' },
 { statute: '18 U.S.C. § 1343 - Wire Fraud', description: 'Electronic communications used to coordinate industry-wide deception campaign', count: 'Part of RICO predicate acts' },
 { statute: '18 U.S.C. § 371 - Conspiracy to Defraud the United States', description: 'Industry-wide conspiracy to prevent government regulation of tobacco products', count: 'Addressed in RICO findings' },
 ],
 coverup: [
 'The Tobacco Institute spent over $500 million funding "research" designed to create doubt, not discover truth, the original playbook for corporate science denial',
 'Internal Brown & Williamson documents from 1963 explicitly stated"nicotine is addictive"- yet all seven CEOs denied this under oath 31 years later',
 'Philip Morris researcher Victor DeNoble\'s studies proving nicotine addiction were confiscated, his lab animals destroyed, and he was fired with a lifetime gag order',
 'The industry hired PR firm Hill & Knowlton to craft the "Frank Statement"in 1954, creating a template for manufactured doubt that oil and chemical industries would later copy',
 'Tobacco companies specifically targeted children and teenagers with marketing campaigns like Joe Camel, knowing that 90% of smokers start before age 18',
 'When the Surgeon General\'s 1964 report confirmed the cancer link, the industry\'s response was to fund the Council for Tobacco Research, a front group that existed solely to obscure findings',
 'Internal Philip Morris documents revealed executives referred to cigarettes as"nicotine delivery devices"while publicly denying any addictive properties',
 'The industry systematically intimidated and blacklisted scientists who published unfavorable research, destroying careers to protect profits',
 'Even after the Master Settlement Agreement, tobacco companies continued to market aggressively in developing nations where regulations were weaker, exporting death globally',
 'Documents revealed that attorneys were inserted into scientific meetings to claim attorney-client privilege over incriminating research findings, using legal shields to suppress science',
 ],
 sources: [
 { title: 'Legacy Tobacco Documents Library, University of California San Francisco', url: 'https://www.industrydocuments.ucsf.edu/tobacco/', date: 'Ongoing Archive' },
 { title: 'U.S. v. Philip Morris USA, Final Opinion (Judge Kessler)', url: 'https://www.publichealthlawcenter.org/sites/default/files/resources/doj-final-opinion.pdf', date: '2006-08-17' },
 { title: 'The Cigarette Papers, Stanton Glantz et al.', url: 'https://www.ucpress.edu/book/9780520213722/the-cigarette-papers', date: '1996' },
 { title: 'Surgeon General\'s Report on Smoking and Health (1964)', url: 'https://profiles.nlm.nih.gov/spotlight/nn/feature/smoking', date: '1964-01-11' },
 { title: 'Master Settlement Agreement, Full Text', url: 'https://www.naag.org/our-work/naag-center-for-tobacco-and-public-health/the-master-settlement-agreement/', date: '1998-11-23' },
 { title: 'A Frank Statement to Cigarette Smokers, Industry Ad (1954)', url: 'https://www.sourcewatch.org/index.php/A_Frank_Statement_to_Cigarette_Smokers', date: '1954-01-04' },
 { title: 'Jeffrey Wigand 60 Minutes Interview', url: 'https://www.cbsnews.com/news/jeffery-wigand-60-minutes/', date: '1996-02-04' },
 { title: 'CDC, History of the Surgeon General\'s Reports on Smoking and Health', url: 'https://www.cdc.gov/tobacco/sgr/history/index.htm', date: 'Updated 2023' },
 ],
};

export default function BigTobaccoPage() {
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
