'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowLeft, AlertTriangle, Users, Calendar, FileText, ExternalLink, Scale, ShieldAlert, Skull } from 'lucide-react';
import GlitchText from '@/components/effects/GlitchText';

const investigation = {
 title: 'The Overturn of Roe v. Wade',
 subtitle: 'A 50-Year Campaign to Strip Reproductive Rights from 170 Million Americans',
 severity: 'critical',
 status: 'ONGOING, POST-DOBBS ERA',
 summary: 'On June 24, 2022, the Supreme Court\'s decision in Dobbs v. Jackson Women\'s Health Organization overturned Roe v. Wade, eliminating the constitutional right to abortion that had stood for nearly 50 years. The decision was the culmination of a half-century campaign by religious conservatives, dark money networks, and the Federalist Society to capture the Supreme Court. Within months, abortion was banned or severely restricted in over 20 states through pre-positioned trigger laws. The consequences have been catastrophic: maternal mortality has risen, women have been denied care for miscarriages and ectopic pregnancies, and a maternal healthcare desert has expanded across the South and Midwest. The decision was made possible by the stolen Merrick Garland seat, the rushed Amy Coney Barrett confirmation, and the Susan Collins/Joe Manchin assurances that nominees would respect precedent, promises that proved hollow.',
 keyFigures: [
 { name: 'Samuel Alito', role: 'Supreme Court Justice, authored the Dobbs majority opinion overturning Roe', href: '/entities/individuals/samuel-alito', status: 'Active' },
 { name: 'Leonard Leo', role: 'Federalist Society co-chair who engineered the anti-Roe Supreme Court majority', href: '/entities/individuals/leonard-leo', status: 'Active' },
 { name: 'Clarence Thomas', role: 'Concurring Justice who called for overturning contraception and marriage equality precedents', href: '/entities/individuals/clarence-thomas', status: 'Active' },
 { name: 'Amy Coney Barrett', role: 'Justice confirmed 8 days before 2020 election, provided decisive vote to overturn Roe', href: '/entities/individuals/amy-coney-barrett', status: 'Active' },
 { name: 'Brett Kavanaugh', role: 'Justice who assured senators Roe was"settled law"then voted to overturn it', href: '/entities/individuals/brett-kavanaugh', status: 'Active' },
 { name: 'Neil Gorsuch', role: 'Justice placed in Merrick Garland\'s stolen seat, voted to overturn Roe', href: '/entities/individuals/neil-gorsuch', status: 'Active' },
 { name: 'Mitch McConnell', role: 'Senate leader who blocked Garland for 293 days then fast-tracked Barrett in 30 days', href: '/entities/individuals/mitch-mcconnell', status: 'Active' },
 { name: 'Susan Collins', role: 'Senator who voted for Kavanaugh after his"settled law"assurance, later expressed shock', href: '/entities/individuals/susan-collins', status: 'Active' },
 { name: 'Marjorie Dannenfelser', role: 'President of Susan B. Anthony Pro-Life America, led anti-abortion political lobbying', href: '/entities/individuals/marjorie-dannenfelser', status: 'Active' },
 { name: 'Thomas Dobbs', role: 'Mississippi State Health Officer, named defendant in Dobbs v. Jackson', href: '/entities/individuals/thomas-dobbs', status: 'Active' },
 { name: 'Lynn Fitch', role: 'Mississippi Attorney General who argued for overturning Roe before the Supreme Court', href: '/entities/individuals/lynn-fitch', status: 'Active' },
 ],
 timeline: [
 { date: '1973-01-22', event: 'Roe v. Wade decided 7-2, establishing constitutional right to abortion under the 14th Amendment' },
 { date: '1976', event: 'Hyde Amendment bans federal Medicaid funding for abortions, restricting access for poor women' },
 { date: '1980', event: 'Republican Party adopts anti-abortion platform plank for the first time under Reagan influence' },
 { date: '1982', event: 'Federalist Society founded, begins long-term project to stock federal courts with anti-Roe judges' },
 { date: '1992', event: 'Planned Parenthood v. Casey reaffirms Roe but weakens it by allowing pre-viability restrictions' },
 { date: '2003', event: 'Partial-Birth Abortion Ban Act signed by George W. Bush; upheld 5-4 in Gonzales v. Carhart (2007)' },
 { date: '2013', event: 'States begin passing six-week abortion bans ("heartbeat bills") designed to trigger legal challenges to Roe' },
 { date: '2016-02', event: 'Justice Scalia dies; McConnell blocks Merrick Garland nomination for 293 days' },
 { date: '2017', event: 'Neil Gorsuch confirmed to stolen seat; anti-Roe majority one vote away' },
 { date: '2018', event: 'Kavanaugh confirmed after telling Susan Collins Roe was"settled law "and" important precedent"' },
 { date: '2018', event: 'Mississippi passes 15-week abortion ban, designed as the vehicle to challenge Roe' },
 { date: '2020-09', event: 'Ruth Bader Ginsburg dies; Barrett nomination announced within hours' },
 { date: '2020-10', event: 'Amy Coney Barrett confirmed to Supreme Court 8 days before election - 6-3 anti-Roe majority secured' },
 { date: '2021-05', event: 'Politico leaks Alito\'s draft Dobbs opinion showing plan to overturn Roe entirely' },
 { date: '2022-06-24', event: 'Dobbs v. Jackson decided 6-3, overturning Roe v. Wade and Planned Parenthood v. Casey' },
 { date: '2022-06', event: 'Trigger laws immediately ban abortion in 13 states; chaos in emergency rooms as doctors fear prosecution' },
 { date: '2023', event: 'Reports of women denied miscarriage care, forced to carry nonviable pregnancies; maternal mortality rises' },
 { date: '2024', event: 'Abortion rights ballot measures pass in multiple states; legal landscape remains fractured and chaotic' },
 ],
 legalOutcomes: [
 { defendant: 'Dobbs v. Jackson Women\'s Health Organization', charge: 'Constitutionality of Mississippi 15-week abortion ban', outcome: 'Supreme Court 6-3 overturned Roe v. Wade and Planned Parenthood v. Casey' },
 { defendant: 'Texas SB 8', charge: 'Bounty hunter enforcement mechanism for 6-week abortion ban', outcome: 'Supreme Court declined to block law despite acknowledging its unique procedural mechanism' },
 { defendant: 'Idaho abortion ban', charge: 'Denial of emergency stabilizing treatment for pregnancy complications', outcome: 'Moyle v. United States, Supreme Court punted, leaving EMTALA conflict unresolved' },
 { defendant: 'Multiple state abortion bans', charge: 'Vagueness in medical emergency exceptions causing confusion', outcome: 'Doctors report inability to provide standard of care; lawsuits ongoing in multiple states' },
 { defendant: 'FDA / Mifepristone access', charge: 'Attempt to restrict FDA-approved medication abortion nationwide', outcome: 'FDA v. Alliance for Hippocratic Medicine, Supreme Court unanimously rejected challenge on standing (2024)' },
 { defendant: 'Kavanaugh / Gorsuch / Barrett nominations', charge: 'Misleading Senate testimony about respect for Roe as precedent', outcome: 'No perjury charges despite apparent deception; Senate has no enforcement mechanism' },
 { defendant: 'Merrick Garland nomination theft', charge: 'Constitutional violation in refusing to hold hearings on nominated justice', outcome: 'No legal remedy; McConnell\'s unprecedented obstruction succeeded without consequence' },
 { defendant: 'State trigger law challenges', charge: 'Pre-Dobbs laws triggered without democratic deliberation', outcome: 'Most trigger bans upheld; some modified based on state constitutional challenges' },
 ],
 charges: [
 { statute: 'U.S. Constitution, 14th Amendment (Equal Protection)', description: 'Denial of bodily autonomy disproportionately affecting women, particularly those in poverty and communities of color', count: '170+ million Americans lost a constitutional right' },
 { statute: '42 U.S.C. § 1395dd (EMTALA)', description: 'Failure to provide emergency medical treatment, hospitals refusing care for pregnancy emergencies due to abortion ban confusion', count: 'Documented cases in TX, ID, TN, and other states' },
 { statute: '18 U.S.C. § 1621', description: 'Perjury, justices testified under oath that Roe was settled precedent, then voted to overturn it', count: 'Multiple confirmation hearing statements' },
 { statute: '28 U.S.C. § 455', description: 'Failure to recuse, justices with personal connections to anti-abortion organizations ruling on abortion cases', count: 'Thomas involvement with Ginni Thomas\'s anti-abortion advocacy' },
 { statute: 'State criminal abortion statutes', description: 'Criminalization of healthcare, doctors face prosecution for providing standard medical care', count: '14+ states with criminal penalties for providing abortions' },
 { statute: 'U.S. Constitution, 9th Amendment', description: 'Unenumerated rights, the right to privacy and bodily autonomy underpinning Roe for 49 years', count: 'Fundamental right eliminated by 5 unelected justices' },
 { statute: '42 U.S.C. § 1983', description: 'Deprivation of civil rights, state enforcement of abortion bans causing medical harm and death', count: 'Rising maternal mortality in ban states' },
 { statute: '18 U.S.C. § 241', description: 'Conspiracy against rights, coordinated dark money campaign to eliminate constitutional right through captured judiciary', count: 'Decades-long conspiracy involving billions in dark money' },
 ],
 coverup: [
 'Supreme Court nominees Kavanaugh, Gorsuch, and Barrett all testified under oath that Roe v. Wade was"settled law,""important precedent,"and"the law of the land"- then voted to overturn it.',
 'Susan Collins claimed Kavanaugh privately assured her he would not overturn Roe, she later expressed surprise when he did exactly that.',
 'The leaked Alito draft reveals the decision was effectively finalized months before announcement, suggesting the Court strategically timed the release.',
 'Leonard Leo\'s dark money network spent hundreds of millions to install the anti-Roe majority while the identities of the donors who funded the judicial capture remain hidden.',
 'Mitch McConnell invented a "rule" that Supreme Court vacancies shouldn\'t be filled in election years to block Garland, then abandoned that rule when it suited him to confirm Barrett.',
 'Post-Dobbs, state legislatures have attempted to criminalize travel for abortion, punish those who help people access care, and even surveil menstrual tracking data.',
 'The maternal mortality impact of Dobbs has been systematically downplayed by anti-abortion groups and sympathetic media, even as emergency rooms report turning away women in crisis.',
 'Clarence Thomas\'s Dobbs concurrence explicitly calling for overturning Griswold (contraception), Lawrence (sodomy laws), and Obergefell (marriage equality) was dismissed as"just one justice\'s opinion"- but reveals the broader agenda.',
 ],
 sources: [
 { title: 'Dobbs v. Jackson Women\'s Health Organization, Supreme Court Opinion', url: 'https://www.supremecourt.gov/opinions/21pdf/19-1392_6j37.pdf', date: '2022-06-24' },
 { title: 'The Fall of Roe: Inside the Historic Decision, Washington Post', url: 'https://www.washingtonpost.com/politics/2022/06/24/supreme-court-abortion-roe-v-wade/', date: '2022-06-24' },
 { title: 'Tracking the States Where Abortion Is Now Banned, New York Times', url: 'https://www.nytimes.com/interactive/2022/us/abortion-laws-roe-v-wade.html', date: '2022' },
 { title: 'Maternal Mortality and Abortion Bans, Commonwealth Fund', url: 'https://www.commonwealthfund.org/publications/issue-briefs/2022/dec/state-abortion-policy-landscape-year-after-dobbs', date: '2022-12' },
 { title: 'The Role of Dark Money in Overturning Roe, OpenSecrets', url: 'https://www.opensecrets.org/news/2022/06/dark-money-plays-pivotal-role-in-overturning-roe-v-wade/', date: '2022-06-24' },
 { title: 'Women Denied Emergency Care After Dobbs, ProPublica', url: 'https://www.propublica.org/article/texas-abortion-ban-emergency-rooms-pregnant-women', date: '2023' },
 { title: 'The Stolen Supreme Court Seat and Its Consequences, Brennan Center', url: 'https://www.brennancenter.org/our-work/analysis-opinion/unprecedented-unaccountable-undoing-roe', date: '2022' },
 { title: 'How the Religious Right Built the Infrastructure to Overturn Roe, Politico', url: 'https://www.politico.com/news/magazine/2022/06/24/how-the-anti-abortion-movement-got-to-this-moment-00042192', date: '2022-06-24' },
 ],
};

export default function RoeVWadePage() {
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
