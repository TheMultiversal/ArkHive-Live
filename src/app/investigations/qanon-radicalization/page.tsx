'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowLeft, AlertTriangle, Users, Calendar, FileText, ExternalLink, Scale, ShieldAlert, Skull } from 'lucide-react';
import GlitchText from '@/components/effects/GlitchText';

const investigation = {
 title: 'QAnon: The Radicalization Pipeline',
 subtitle: 'How an online conspiracy theory became a vehicle for real-world violence, from January 6 to kidnapping plots',
 severity: 'critical',
 status: 'ONGOING, MUTATING',
 summary: 'QAnon began in October 2017 as anonymous posts on the imageboard 4chan claiming that a"deep state"cabal of Satan-worshipping cannibalistic pedophiles controlled the U.S. government. What started as fringe internet conspiracy rapidly metastasized into a mass radicalization movement, absorbing existing conspiracy theories and radicalizing millions through social media algorithms optimized for engagement. Adherents have been connected to multiple violent incidents including the January 6, 2021 Capitol insurrection, kidnapping plots, murders, and domestic terrorism. Despite the movement\'s core claims being entirely fabricated, social media platforms amplified QAnon content for years because it drove engagement and advertising revenue. When platforms finally acted in 2020-2021, the movement had already embedded itself in mainstream Republican politics, with multiple Q-affiliated candidates winning Congressional seats. The human cost includes destroyed families, endangered children through vigilante"rescues,"and a severely degraded information environment.',
 keyFigures: [
 { name: 'Ron Watkins', role: 'Former 8kun administrator widely believed to be or control "Q"; ran for Congress', href: '/entities/individuals/ron-watkins', status: 'Active' },
 { name: 'Jim Watkins', role: '8chan/8kun owner who hosted Q drops and profited from the movement', href: '/entities/individuals/jim-watkins', status: 'Active' },
 { name: 'Michael Flynn', role: 'Former National Security Advisor who publicly took the QAnon oath and amplified the movement', href: '/entities/individuals/michael-flynn', status: 'Active' },
 { name: 'Marjorie Taylor Greene', role: 'Congresswoman who openly endorsed QAnon theories before and during her election', href: '/entities/individuals/marjorie-taylor-greene', status: 'Active, Elected Official' },
 { name: 'Lauren Boebert', role: 'Congresswoman who expressed support for QAnon and amplified related conspiracy theories', href: '/entities/individuals/lauren-boebert', status: 'Active, Elected Official' },
 { name: 'Jacob Chansley (QAnon Shaman)', role: 'QAnon adherent who stormed the Capitol on January 6 in costume', href: '/entities/individuals/jacob-chansley', status: 'Convicted, Released' },
 { name: 'Ashli Babbitt', role: 'QAnon follower shot and killed while attempting to breach the Capitol on January 6', href: '/entities/individuals/ashli-babbitt', status: 'Deceased' },
 { name: 'Mark Zuckerberg', role: 'Meta CEO whose platforms amplified QAnon content through algorithmic recommendation for years', href: '/entities/individuals/mark-zuckerberg', status: 'Active' },
 { name: 'Jack Dorsey', role: 'Former Twitter CEO; platform was slow to address QAnon radicalization', href: '/entities/individuals/jack-dorsey', status: 'Historical' },
 { name: 'Sidney Powell', role: 'Attorney who amplified QAnon-adjacent election conspiracy theories in federal courts', href: '/entities/individuals/sidney-powell', status: 'Pleaded Guilty' },
 { name: 'Alex Jones', role: 'InfoWars host who amplified QAnon narratives and related conspiracy theories', href: '/entities/individuals/alex-jones', status: 'Active' },
 ],
 timeline: [
 { date: 'October 28, 2017', event: 'First "Q" post appears on 4chan\'s /pol/ board claiming Hillary Clinton\'s imminent arrest' },
 { date: 'November 2017', event: 'Q posts move to 8chan as following grows;"bakers"begin interpreting drops' },
 { date: 'December 2016', event: '"Pizzagate"predecessor: Edgar Welch fires rifle inside DC pizza restaurant based on conspiracy theory' },
 { date: '2018', event: 'QAnon spreads to mainstream social media; Facebook groups reach hundreds of thousands of members' },
 { date: 'June 2018', event: 'Armed QAnon believer blocks Hoover Dam with armored truck demanding release of an IG report' },
 { date: 'August 2019', event: 'FBI internal memo identifies QAnon as a domestic terrorism threat' },
 { date: '2020', event: 'QAnon merges with anti-lockdown, anti-vaccine, and "Stop the Steal"movements during pandemic' },
 { date: 'August 2020', event: 'Facebook removes 790 QAnon groups; Twitter suspends 7,000+ accounts, years after the movement took hold' },
 { date: 'October 2020', event: 'Whitmer kidnapping plot: multiple defendants connected to QAnon-adjacent conspiracy communities' },
 { date: 'November 2020', event: 'QAnon adherents become core element of "Stop the Steal"election denial movement' },
 { date: 'January 6, 2021', event: 'QAnon believers prominent among Capitol insurrectionists;"QAnon Shaman"becomes iconic image' },
 { date: 'January 2021', event: 'Major platforms finally ban QAnon content; movement migrates to Telegram, Gab, and other platforms' },
 { date: 'November 2020-2022', event: 'Multiple Q-affiliated candidates win Congressional elections' },
 { date: '2022', event: 'Matthew Coleman, QAnon follower, kills his two children believing they had"serpent DNA"' },
 { date: '2023', event: 'QAnon beliefs persist: polls show 25% of Americans believe some core QAnon claims' },
 { date: '2024', event: 'QAnon narratives absorbed into mainstream political rhetoric; movement decentralized but persistent' },
 { date: 'Ongoing', event: '"Save the Children"branding coopts genuine anti-trafficking efforts, diverting resources from real victims' },
 ],
 legalOutcomes: [
 { defendant: 'Jacob Chansley (QAnon Shaman)', charge: 'Obstruction of an official proceeding, January 6 Capitol breach', outcome: 'Sentenced to 41 months in federal prison; released early' },
 { defendant: 'January 6 Defendants', charge: 'Hundreds of QAnon-connected defendants charged with various offenses', outcome: 'Over 1,200 charged; 460+ sentenced to prison; many invoked Q beliefs' },
 { defendant: 'Marjorie Taylor Greene', charge: 'Endorsing QAnon theories including claims about school shootings and 9/11', outcome: 'Stripped of committee assignments but re-elected and later restored' },
 { defendant: 'Meta / Facebook', charge: 'Algorithmically amplifying QAnon content for years, driving radicalization', outcome: 'Eventually banned Q groups in 2020; no legal consequences for years of amplification' },
 { defendant: 'Twitter', charge: 'Allowing QAnon organizing and amplification on platform', outcome: 'Suspended 7,000+ accounts in 2020; platform later acquired by Musk, who restored many' },
 { defendant: 'Matthew Coleman', charge: 'Murder of his two children based on QAnon"serpent DNA"beliefs', outcome: 'Convicted of first-degree murder; sentenced to life in prison' },
 { defendant: 'Michigan Kidnapping Plotters', charge: 'Conspiracy to kidnap Governor Whitmer; connected to conspiracy communities', outcome: 'Multiple convictions; sentences ranging from 7 to 19+ years' },
 { defendant: '8kun / Jim Watkins', charge: 'Hosting and profiting from platform that enabled radicalization to violence', outcome: 'No legal consequences; Section 230 protects platform from liability for user content' },
 ],
 charges: [
 { statute: '18 U.S.C. § 2384 - Seditious Conspiracy', description: 'Conspiracy to overthrow or put down the government of the United States by force', count: 'Multiple Oath Keepers and Proud Boys with QAnon connections convicted of seditious conspiracy' },
 { statute: '18 U.S.C. § 1512(c)(2) - Obstruction of Official Proceeding', description: 'Primary charge for January 6 defendants who disrupted the Electoral College certification', count: '350+ January 6 defendants with documented QAnon connections' },
 { statute: '18 U.S.C. § 1201 - Kidnapping', description: 'Conspiracy to kidnap elected officials based on conspiracy theories', count: 'Whitmer kidnapping plot and other documented conspiracies against officials' },
 { statute: '18 U.S.C. § 2331 - Domestic Terrorism', description: 'Acts dangerous to life intended to intimidate a civilian population or influence government policy', count: 'FBI identified QAnon as domestic terrorism threat in 2019 internal memo' },
 { statute: '18 U.S.C. § 875 - Interstate Threats', description: 'Threatening to injure or kidnap officials based on conspiracy theories', count: 'Hundreds of documented threats against officials, election workers, and medical professionals' },
 { statute: '47 U.S.C. § 230 - Platform Liability Gap', description: 'Section 230 shields platforms from liability for algorithmically amplifying radicalization content', count: 'Years of algorithmic amplification by Facebook, YouTube, and Twitter without legal consequence' },
 { statute: 'State Criminal Statutes, Violence', description: 'Murders, assaults, and threats directly motivated by QAnon beliefs', count: 'Multiple documented murders, armed confrontations, and violent incidents by adherents' },
 { statute: 'Wire Fraud / Conspiracy, Fundraising', description: 'QAnon influencers solicited millions in donations based on false claims', count: 'Millions raised through merchandise, donations, and media operations based on fabricated conspiracy' },
 ],
 coverup: [
 'Social media platforms knew QAnon content was driving engagement and ad revenue but delayed action for years. Internal Facebook research showed the algorithm actively recommended QAnon groups to users.',
 'The identity of "Q" has been strongly linked to Ron Watkins, administrator of 8kun, through forensic linguistic analysis and the documentary "Q: Into the Storm"- but no investigative agency has officially confirmed the identity.',
 'Republican party leadership has refused to clearly denounce QAnon, with many elected officials offering ambiguous statements that avoid alienating Q-believing voters.',
 'The "Save the Children"rebranding of QAnon caused massive harm to actual anti-trafficking organizations, diverting resources, flooding hotlines with false reports, and discrediting legitimate efforts.',
 'Platform moderation efforts were consistently too late and too weak, by the time Facebook banned QAnon groups, the movement had already established parallel infrastructure on alternative platforms.',
 'Trump was asked directly about QAnon and refused to denounce it, saying "I\'ve heard these are people that love our country"- effectively endorsing the movement from the presidential podium.',
 'The FBI\'s 2019 internal memo identifying QAnon as a domestic terrorism threat was not publicly released; the bureau took no significant public action until after January 6.',
 'QAnon influencers have profited enormously through merchandise, donations, media operations, and political campaigns, creating financial incentives to maintain and escalate the conspiracy.',
 'Media coverage often treated QAnon as bizarre entertainment rather than a serious radicalization threat, contributing to its growth by introducing it to new audiences without adequate context.',
 ],
 sources: [
 { title: 'FBI, Anti-Government, Identity Based, and Fringe Political Conspiracies', url: 'https://www.justsecurity.org/wp-content/uploads/2019/08/420379775-fbi-conspiracy-theory-memo.pdf', date: '2019' },
 { title: 'Q: Into the Storm, HBO Documentary', url: 'https://www.hbo.com/q-into-the-storm', date: '2021' },
 { title: 'PRRI, QAnon Believers in America Survey', url: 'https://www.prri.org/research/the-persistence-of-qanon-in-the-post-trump-era/', date: '2022' },
 { title: 'New York Times, QAnon: The Movement Trump Won\'t Disavow', url: 'https://www.nytimes.com/article/what-is-qanon.html', date: '2021' },
 { title: 'The Atlantic, The Prophecies of Q', url: 'https://www.theatlantic.com/magazine/archive/2020/06/qanon-nothing-can-stop-what-is-coming/610567/', date: '2020' },
 { title: 'NPR, QAnon\'s Impact on January 6', url: 'https://www.npr.org/2021/02/19/969441904/some-capitol-rioters-were-qanon-believers', date: '2021' },
 { title: 'NBC News, QAnon Casualties: People Who Lost Loved Ones', url: 'https://www.nbcnews.com/tech/tech-news/qanon-casualties-people-who-lost-loved-ones-rcna922', date: '2021' },
 { title: 'Washington Post, QAnon: How the Conspiracy Went from Fringe to Mainstream', url: 'https://www.washingtonpost.com/politics/qanon-trump-conspiracy/2020/08/19/', date: '2020' },
 { title: 'Bellingcat, QAnon Investigation', url: 'https://www.bellingcat.com/news/americas/2021/01/29/the-qanon-timeline/', date: '2021' },
 ],
};

export default function QAnonRadicalizationPage() {
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
