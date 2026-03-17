'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowLeft, AlertTriangle, Users, Calendar, FileText, ExternalLink, Scale, ShieldAlert, Skull } from 'lucide-react';
import GlitchText from '@/components/effects/GlitchText';

const investigation = {
 title: 'Defamation & Reputational Destruction',
 subtitle: 'The Weaponization of Lies: $88.3M in Damages, Shattered Lives, and Systematic Character Assassination',
 severity: 'critical',
 status: 'ONGOING',
 summary: 'A sweeping investigation into the deliberate use of defamation as a political and personal weapon. From the $88.3 million judgment against Donald Trump in the E. Jean Carroll case to the terrorization of Ruby Freeman and Shaye Moss (two election workers whose lives were destroyed by baseless conspiracy theories) this probe reveals a pattern of powerful figures wielding lies to silence, intimidate, and annihilate their perceived enemies. The investigation exposes how defamation has been industrialized through social media amplification, coordinated harassment campaigns, and the calculated destruction of private citizens\' reputations for political gain.',
 keyFigures: [
 { name: 'E. Jean Carroll', role: 'Writer and journalist who accused Trump of sexual assault; awarded $88.3M in defamation judgment', href: '/entities/individuals/e-jean-carroll', status: 'Prevailed' },
 { name: 'Donald J. Trump', role: 'Former President; found liable for defamation and sexual abuse against Carroll', href: '/entities/individuals/donald-trump', status: 'Liable' },
 { name: 'Ruby Freeman', role: 'Fulton County election worker falsely accused of ballot fraud by Trump and allies', href: '/entities/individuals/ruby-freeman', status: 'Victim' },
 { name: 'Shaye Moss', role: 'Fulton County election worker and daughter of Ruby Freeman; subjected to racist threats', href: '/entities/individuals/shaye-moss', status: 'Victim' },
 { name: 'Rudolph Giuliani', role: 'Trump attorney who amplified false claims about Freeman and Moss; ordered to pay $148M', href: '/entities/individuals/rudy-giuliani', status: 'Liable - $148M' },
 { name: 'Sidney Powell', role: 'Attorney who spread false election fraud claims about Dominion Voting Systems', href: '/entities/individuals/sidney-powell', status: 'Settled' },
 { name: 'Fox News', role: 'Network that amplified false Dominion voting machine claims; settled for $787.5M', href: '/entities/corporations/fox-news', status: 'Settled - $787.5M' },
 { name: 'Tucker Carlson', role: 'Former Fox News host who promoted election conspiracy theories on-air', href: '/entities/individuals/tucker-carlson', status: 'Departed Fox' },
 { name: 'Mike Lindell', role: 'MyPillow CEO who spread false election fraud claims about Dominion and Smartmatic', href: '/entities/individuals/mike-lindell', status: 'Defendant' },
 { name: 'Alex Jones', role: 'Infowars host ordered to pay $1.5B for defaming Sandy Hook families', href: '/entities/individuals/alex-jones', status: 'Liable - $1.5B' },
 { name: 'Dominion Voting Systems', role: 'Voting technology company targeted by false election fraud claims', href: '/entities/corporations/dominion-voting-systems', status: 'Prevailed' },
 { name: 'Smartmatic', role: 'Voting technology company with pending $2.7B defamation suit against Fox News', href: '/entities/corporations/smartmatic', status: 'Litigation Active' },
 ],
 timeline: [
 { date: '2019-06-21', event: 'E. Jean Carroll publishes essay accusing Trump of sexual assault in a Bergdorf Goodman dressing room in the mid-1990s' },
 { date: '2019-06-22', event: 'Trump publicly denies Carroll\'s accusation, stating "She\'s not my type"and calling her a liar' },
 { date: '2020-11-03', event: 'Election Day, Ruby Freeman and Shaye Moss perform their duties as Fulton County election workers' },
 { date: '2020-12-03', event: 'Giuliani presents manipulated surveillance footage to Georgia state legislature, falsely accusing Freeman and Moss of ballot fraud' },
 { date: '2020-12-10', event: 'Trump names Ruby Freeman 18 times in phone call to Georgia officials, calling her a"professional vote scammer"' },
 { date: '2021-01-02', event: 'Trump\'s recorded call to Brad Raffensperger references Freeman as a known "criminal" who stuffed ballot boxes' },
 { date: '2021-01-06', event: 'Capitol insurrection; Freeman and Moss receive death threats referencing Trump\'s claims about them' },
 { date: '2021-02-04', event: 'Dominion Voting Systems files $1.3B defamation lawsuit against MyPillow CEO Mike Lindell' },
 { date: '2021-03-26', event: 'Dominion files $1.6B defamation suit against Fox News for amplifying false election fraud claims' },
 { date: '2021-08-10', event: 'Smartmatic files $2.7B defamation lawsuit against Fox News, Giuliani, and Powell' },
 { date: '2022-06-21', event: 'Shaye Moss testifies before January 6th Committee about racist threats and life destruction' },
 { date: '2022-11-22', event: 'E. Jean Carroll files updated defamation lawsuit against Trump' },
 { date: '2023-05-09', event: 'Jury finds Trump liable for sexual abuse and defamation of Carroll; awards $5M in damages' },
 { date: '2023-06-14', event: 'Fox News settles Dominion defamation suit for $787.5 million, largest media defamation settlement in US history' },
 { date: '2024-01-26', event: 'Jury awards E. Jean Carroll $83.3 million in damages in second defamation trial against Trump' },
 { date: '2023-12-15', event: 'Giuliani found liable for defaming Freeman and Moss; ordered to pay $148 million in damages' },
 { date: '2023-08-04', event: 'Alex Jones ordered to pay $1.5 billion for Sandy Hook defamation after years of calling the massacre a hoax' },
 ],
 legalOutcomes: [
 { defendant: 'Donald Trump', charge: 'Defamation of E. Jean Carroll', outcome: 'Found liable - $88.3M total damages' },
 { defendant: 'Fox News', charge: 'Defamation of Dominion Voting Systems', outcome: 'Settled - $787.5M' },
 { defendant: 'Rudolph Giuliani', charge: 'Defamation of Ruby Freeman and Shaye Moss', outcome: 'Found liable - $148M damages' },
 { defendant: 'Alex Jones', charge: 'Defamation of Sandy Hook families', outcome: 'Found liable - $1.5B damages' },
 { defendant: 'Sidney Powell', charge: 'Defamation of Dominion Voting Systems', outcome: 'Settled, undisclosed amount' },
 { defendant: 'Mike Lindell', charge: 'Defamation of Dominion Voting Systems', outcome: 'Pending - $1.3B lawsuit' },
 { defendant: 'Smartmatic v. Fox News', charge: 'Defamation of Smartmatic', outcome: 'Pending - $2.7B lawsuit' },
 { defendant: 'OAN / Newsmax', charge: 'Defamation of Dominion / Smartmatic', outcome: 'Settlements and ongoing litigation' },
 ],
 charges: [
 { statute: '28 U.S.C. § 4101: SPEECH Act', description: 'Federal framework governing defamation claims involving public figures and matters of public concern', count: 'Applied across multiple cases' },
 { statute: 'New York Civil Rights Law § 74', description: 'Fair report privilege, waived when defendants acted with actual malice in publishing false statements', count: 'Carroll v. Trump' },
 { statute: 'New York Times Co. v. Sullivan Standard', description: 'Actual malice standard, statements made with knowledge of falsity or reckless disregard for truth', count: 'Applied in all public figure cases' },
 { statute: 'Georgia Code § 51-5-1', description: 'Georgia defamation statute, false and malicious publication tending to injure reputation', count: 'Freeman/Moss v. Giuliani' },
 { statute: '18 U.S.C. § 241: Conspiracy Against Rights', description: 'Conspiracy to intimidate election workers through coordinated defamatory campaign', count: 'Under investigation, Georgia RICO' },
 { statute: '52 U.S.C. § 20511: Voter Intimidation', description: 'Intimidation of election officials through false public accusations and incitement of harassment', count: 'Related to Freeman/Moss targeting' },
 { statute: 'Intentional Infliction of Emotional Distress', description: 'Extreme and outrageous conduct causing severe emotional harm to defamation targets', count: 'Multiple claims across cases' },
 { statute: 'Civil Conspiracy, Common Law', description: 'Coordinated agreement between multiple parties to spread known falsehoods for political gain', count: 'Dominion/Smartmatic claims' },
 { statute: '47 U.S.C. § 230 Considerations', description: 'Platform liability questions for amplification of defamatory content through social media', count: 'Ongoing legal debate' },
 ],
 coverup: [
 'Trump claimed Carroll\'s accusation was politically motivated despite corroborating witnesses and contemporaneous accounts from the 1990s',
 'Giuliani presented deceptively edited surveillance footage to Georgia legislators, removing context that showed normal ballot processing',
 'Fox News internal communications revealed hosts privately acknowledged election fraud claims were false while promoting them on-air',
 'The coordinated campaign against Freeman and Moss included sending individuals to Freeman\'s home to"make a citizen\'s arrest"',
 'Multiple media organizations continued amplifying false claims even after being informed by election officials that they were baseless',
 'Trump\'s legal team attempted to claim presidential immunity shielded him from defamation liability for statements made while in office',
 'Giuliani filed for bankruptcy to avoid paying the $148M judgment to Freeman and Moss',
 'Fox News attempted to characterize its election fraud coverage as protected opinion rather than factual claims despite on-air presentations as"news"',
 'Witnesses in the Dominion case revealed a systematic pattern of editorial decisions prioritizing ratings over truth',
 'Several defendants attempted to destroy or withhold electronic communications showing knowledge that claims were false',
 ],
 sources: [
 { title: 'Carroll v. Trump, Jury Verdict and Damages Award', url: 'https://www.nytimes.com/2024/01/26/nyregion/trump-carroll-defamation-trial.html', date: '2024-01-26' },
 { title: 'Dominion v. Fox News: $787.5M Settlement', url: 'https://web.archive.org/web/2024/https://www.reuters.com/legal/fox-news-settles-dominion-defamation-case-2023-04-18/', date: '2023-04-18' },
 { title: 'Giuliani Ordered to Pay $148M to Georgia Election Workers', url: 'https://apnews.com/article/giuliani-defamation-damages-georgia-election-workers-bfb32ce3e7c34e72a1e6e2d6e3c0f135', date: '2023-12-15' },
 { title: 'Shaye Moss Testimony Before January 6th Committee', url: 'https://www.c-span.org/video/?521076-1/hearing-focuses-trump-pressure-state-officials', date: '2022-06-21' },
 { title: 'Alex Jones Sandy Hook Defamation Judgment', url: 'https://www.washingtonpost.com/media/2022/10/12/alex-jones-sandy-hook-damages/', date: '2022-10-12' },
 { title: 'Smartmatic $2.7B Lawsuit Against Fox News', url: 'https://www.bbc.com/news/world-us-canada-55973883', date: '2021-02-04' },
 { title: 'Fox News Internal Messages Reveal Knowledge of Election Lie Falsity', url: 'https://www.cnn.com/2023/03/08/media/fox-news-dominion-private-messages/index.html', date: '2023-03-08' },
 { title: 'The Weaponization of Defamation in American Politics', url: 'https://www.theatlantic.com/ideas/archive/2023/04/fox-news-dominion-settlement-defamation/673813/', date: '2023-04-18' },
 ],
};

export default function DefamationPage() {
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
 <div className="space-y-3">{investigation.keyFigures.map((figure, idx) => (<div key={idx} className="flex items-start justify-between p-3 bg-[#1c0a00] border border-[rgba(255, 80, 80,0.15)]"><div className="flex-1">{figure.href ? (<Link href={figure.href} className="font-bold text-blood-400 hover:text-blood-300 transition-colors">{figure.name}</Link>) : (<span className="font-bold glass-text">{figure.name}</span>)}<p className="text-sm text-zinc-400 mt-1">{figure.role}</p></div><span className="text-xs px-2 py-1 bg-[#200c00] text-zinc-400 border border-[rgba(255, 60, 60,0.18)] whitespace-nowrap ml-2">{figure.status}</span></div>))}</div>
 </motion.div>
 <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }} className="glass-card p-6">
 <h2 className="text-xl font-bold glass-text uppercase tracking-wider mb-4 flex items-center gap-2"><Scale className="w-5 h-5 text-blood-500"/>Applicable Charges &amp; Statutes</h2>
 <div className="space-y-3">{investigation.charges.map((charge, idx) => (<div key={idx} className="p-4 bg-[#1c0a00] border border-[rgba(255, 80, 80,0.15)]"><p className="font-bold text-blood-400 text-sm font-mono">{charge.statute}</p><p className="text-sm text-zinc-300 mt-1">{charge.description}</p><p className="text-xs text-blood-400 mt-1">{charge.count}</p></div>))}</div>
 </motion.div>
 </div>
 <div className="space-y-6">
 <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} className="glass-card p-6">
 <h3 className="text-lg font-bold glass-text uppercase tracking-wider mb-4 flex items-center gap-2"><Calendar className="w-4 h-4 text-blood-500"/>Timeline</h3>
 <div className="space-y-4">{investigation.timeline.map((item, idx) => (<div key={idx} className="relative pl-4 border-l-2 border-[rgba(255, 80, 80,0.15)]"><div className="absolute -left-[5px] top-0 w-2 h-2 bg-blood-500"/><p className="text-xs text-blood-500 font-mono">{item.date}</p><p className="text-sm text-zinc-300">{item.event}</p></div>))}</div>
 </motion.div>
 <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.1 }} className="glass-card p-6">
 <h3 className="text-lg font-bold glass-text uppercase tracking-wider mb-4 flex items-center gap-2"><Scale className="w-5 h-5 text-blood-500"/>Legal Outcomes</h3>
 <div className="space-y-3">{investigation.legalOutcomes.map((item, idx) => (<div key={idx} className="p-3 bg-[#1c0a00] border border-[rgba(255, 80, 80,0.15)]"><p className="font-bold glass-text text-sm">{item.defendant}</p><p className="text-xs text-zinc-400 mt-1">{item.charge}</p><p className="text-xs text-blood-400 mt-1">{item.outcome}</p></div>))}</div>
 </motion.div>
 <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.2 }} className="glass-card p-6">
 <h3 className="text-lg font-bold glass-text uppercase tracking-wider mb-4">Sources</h3>
 <div className="space-y-2">{investigation.sources.map((source, idx) => (<a key={idx} href={source.url} target="_blank"rel="noopener noreferrer"className="flex items-start gap-2 p-2 text-sm text-zinc-400 hover:text-blood-400 hover:bg-[#1c0a00] transition-colors"><ExternalLink className="w-4 h-4 mt-0.5 flex-shrink-0"/><div><span>{source.title}</span><span className="text-zinc-600 ml-2">({source.date})</span></div></a>))}</div>
 </motion.div>
 </div>
 </div>
 </div>
 </div>
 );
}
