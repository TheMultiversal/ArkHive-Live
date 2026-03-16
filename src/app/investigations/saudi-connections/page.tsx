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
 Skull, ShieldAlert, Scale} from 'lucide-react';
import GlitchText from '@/components/effects/GlitchText';

const investigation = {
 title: 'Saudi Arabia Connections',
 subtitle: 'Khashoggi Murder, Arms Deals & Kushner Ties',
 severity: 'critical',
 status: 'Ongoing Investigation',
 summary: 'The Trump administration\'s relationship with Saudi Arabia raised serious national security and corruption concerns: covering up the murder of journalist Jamal Khashoggi, overriding security clearance denials for Jared Kushner, a $2 billion Saudi investment in Kushner\'s fund, and billions in arms sales despite human rights concerns. MBS reportedly boasted of having Kushner"in his pocket."',
 khashoggiMurder: {
 victim: 'Jamal Khashoggi, Washington Post columnist, U.S. resident',
 date: 'October 2, 2018',
 location: 'Saudi Consulate, Istanbul, Turkey',
 method: 'Killed, dismembered with bone saw by 15-man Saudi hit team',
 mbsRole: 'CIA concluded with"high confidence"that MBS ordered the killing',
 trumpResponse: [
 'Refused to condemn MBS or Saudi Arabia',
 '"Maybe he did, maybe he didn\'t"- rejecting CIA conclusion',
 'Cited $450 billion Saudi arms deal as reason to maintain relationship',
 'Called MBS a "friend" and"great ally"',
 ],
 },
 kushnerSaudi: {
 securityClearance: 'Kushner was denied security clearance by career officials; Trump overrode denial',
 whatsAppWithMBS: 'Kushner communicated with MBS via personal WhatsApp, avoiding official records',
 investment: '$2 billion investment from Saudi sovereign wealth fund to Kushner\'s firm (6 months after leaving office)',
 inPocket: 'MBS reportedly told aides he had Kushner"in his pocket"',
 middleEastTrip: 'Kushner visited Saudi Arabia, reportedly shared U.S. intelligence with MBS',
 },
 armsDeals: [
 { deal: '$110 billion arms package', date: 'May 2017', detail: 'Announced during Trump\'s first foreign trip to Saudi Arabia' },
 { deal: 'Emergency weapons sale', date: '2019', detail: 'Bypassed Congress to sell $8.1B in weapons for Yemen war' },
 { deal: 'Nuclear technology transfer', date: '2019', detail: 'Plans to transfer nuclear technology without nonproliferation safeguards' },
 ],
 yemenWar: {
 description: 'Saudi-led coalition using U.S. weapons caused massive civilian casualties',
 casualties: '377,000+ dead (UN estimate)',
 famine: 'Worst famine in 100 years',
 trumpRole: 'Vetoed bipartisan Congressional resolution to end U.S. support',
 },
 keyFigures: [
 { name: 'Donald Trump', role: 'Covered for MBS, prioritized arms deals over human rights', href: '/entities/individuals/donald-trump', status: 'Protected MBS' },
 { name: 'Jared Kushner', role: 'Back-channel to MBS, $2B Saudi investment recipient', href: '/entities/individuals/jared-kushner', status: '$2B recipient' },
 { name: 'Mohammed bin Salman', role: 'Saudi Crown Prince, ordered Khashoggi murder', href: '/entities/individuals/mohammed-bin-salman', status: 'CIA implicated' },
 { name: 'Mike Pompeo', role: 'Secretary of State, helped cover for MBS', href: '/entities/individuals/mike-pompeo', status: 'Cover-up participant' },
 ],
 timeline: [
 { date: 'May 2017', event: 'Trump\'s first foreign trip to Saudi Arabia; $110B arms deal announced' },
 { date: 'Jun 2017', event: 'Saudi-led blockade of Qatar; Trump supports it despite U.S. base there' },
 { date: 'Nov 2017', event: 'MBS purges rivals in Ritz-Carlton"anti-corruption"crackdown' },
 { date: 'Mar 2018', event: 'MBS visits U.S., dines with Kushner' },
 { date: 'Oct 2, 2018', event: 'Khashoggi murdered in Saudi consulate' },
 { date: 'Oct 2018', event: 'Saudi Arabia initially denies, then claims"rogue killers"' },
 { date: 'Nov 2018', event: 'CIA concludes MBS ordered killing' },
 { date: 'Nov 2018', event: 'Trump:"Maybe he did, maybe he didn\'t"' },
 { date: 'Dec 2018', event: 'Senate passes resolution blaming MBS; Trump ignores' },
 { date: 'May 2019', event: 'Trump vetoes Yemen war resolution' },
 { date: 'May 2019', event: 'Emergency arms sales bypass Congress' },
 { date: 'Jun 2019', event: 'Trump says he "saved" MBS from Congress after Khashoggi murder' },
 { date: 'Jan 2021', event: 'Biden releases intelligence report on Khashoggi murder' },
 { date: 'Jul 2021', event: 'Kushner receives $2B from Saudi sovereign wealth fund' },
 ],
 legalOutcomes: [
 { defendant: 'Jared Kushner', charge: 'Undisclosed contacts with Saudi officials; security clearance irregularities', outcome: 'Trump overrode intelligence community objections to grant Kushner top-secret clearance; no charges filed' },
 { defendant: 'Trump administration', charge: 'Obstruction of Congress by refusing to release CIA Khashoggi assessment', outcome: 'Biden administration released declassified report in Feb 2021 confirming MBS ordered the killing' },
 { defendant: 'Saudi Crown Prince MBS', charge: 'Ordering the murder of journalist Jamal Khashoggi', outcome: 'CIA concluded MBS ordered killing; Trump refused to impose consequences; Biden released report but did not sanction MBS directly' },
 { defendant: 'Kushner (Affinity Partners)', charge: 'Potential conflict of interest, receiving $2 billion Saudi investment after leaving government', outcome: 'Congressional investigation launched; ethics officials noted the investment overrode objections from PIF\'s own advisory panel' },
 { defendant: 'Steven Mnuchin', charge: 'Potential conflict of interest, receiving $1 billion Saudi investment shortly after leaving Treasury', outcome: 'No charges; ethics questions raised about timing of Saudi sovereign wealth fund investment' },
 { defendant: 'Trump (Emoluments)', charge: 'Saudi government spending at Trump properties while seeking favorable U.S. policy', outcome: 'Documented Saudi spending at Trump International Hotel Washington D.C.; emoluments lawsuits dismissed on standing' },
 ],
 charges: [
 { statute: '18 U.S.C. § 1519', description: 'Obstruction, suppressing and withholding CIA intelligence assessment on Khashoggi murder from Congress', count: 'Ongoing obstruction from Oct 2018 through Jan 2021' },
 { statute: '18 U.S.C. § 208', description: 'Conflicts of interest, Kushner conducting Saudi policy while maintaining undisclosed business relationships', count: 'Pattern spanning 2017-2021' },
 { statute: 'Foreign Emoluments Clause (Art. I, § 9)', description: 'Accepting benefits from Saudi government through hotel stays and business deals without Congressional consent', count: 'Multiple documented instances 2017-2021' },
 { statute: '50 U.S.C. § 3024 (Intelligence Authorization)', description: 'Withholding mandatory intelligence briefing to Congress regarding foreign leader\'s role in murder of U.S. resident', count: '1 count covering Khashoggi assessment suppression' },
 { statute: '18 U.S.C. § 371', description: 'Conspiracy to defraud the United States by providing cover for a foreign government\'s extrajudicial killing of a journalist', count: '1 count' },
 { statute: '18 U.S.C. § 1346', description: 'Honest services fraud, Kushner using government position to cultivate business relationships with Saudi officials', count: 'Pattern culminating in $2B post-government investment' },
 { statute: 'Global Magnitsky Act (22 U.S.C. § 2656)', description: 'Failure to impose mandatory sanctions on MBS despite credible evidence of ordering extrajudicial killing', count: 'Ongoing failure from 2018' },
 ],
 coverup: [
 'Trump personally defended MBS after the CIA concluded with high confidence that the crown prince ordered Khashoggi\'s murder, issuing a statement saying "Maybe he did, maybe he didn\'t"and refusing to listen to the audio recording.',
 'The Trump administration refused to comply with a bipartisan Congressional demand under the Global Magnitsky Act to determine whether MBS was responsible for Khashoggi\'s killing, a legally required determination.',
 'Saudi Arabia initially claimed Khashoggi left the consulate alive, then blamed"rogue killers,"then claimed it was a"fistfight gone wrong"- narratives that Trump echoed and amplified rather than challenging.',
 'Jared Kushner maintained a private WhatsApp channel with MBS that was not monitored or preserved as required by federal records laws, according to Congressional testimony.',
 'Trump overrode career intelligence officials to grant Kushner top-secret security clearance after his application was rejected due to concerns about foreign influence, including Saudi ties.',
 'The $2 billion Saudi investment in Kushner\'s Affinity Partners fund came despite the PIF\'s own screening panel flagging the deal as unsatisfactory on multiple criteria including due diligence and risk management.',
 'The administration blocked a Senate resolution holding MBS accountable and Trump bragged to journalist Bob Woodward that he "saved" MBS from Congressional consequences after the murder.',
 ],
 sources: [
 { title: 'CIA Assessment on Khashoggi Murder', url: 'https://www.dni.gov/files/ODNI/documents/assessments/Assessment-Saudi-Gov-Role-in-JK-Death-20210226v2.pdf', date: '2021' },
 { title: 'Kushner $2B Saudi Investment', url: 'https://www.nytimes.com/2022/04/10/us/jared-kushner-saudi-investment-fund.html', date: '2022' },
 { title: 'Yemen War Casualties (UN)', url: 'https://www.undp.org/yemen/publications/assessing-impact-war-yemen-pathways-recovery', date: '2021' },
 { title: 'Trump Emergency Arms Sale', url: 'https://www.congress.gov/bill/116th-congress/senate-joint-resolution/36', date: '2019' },
 { title: 'Khashoggi Murder UN Report', url: 'https://www.ohchr.org/en/press-releases/2019/06/khashoggi-killing-was-premeditated-execution-un-expert', date: '2019' },
 ],
};

export default function SaudiConnectionsPage() {
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
 className="border-2 border-blood-800/60 bg-black/80 p-6 lg:p-8 mb-8"
 >
 <div className="flex items-center gap-3 mb-4">
 <span className="px-3 py-1 text-xs font-bold uppercase border border-blood-500/30 bg-blood-500/20 text-blood-400">
 {investigation.severity}
 </span>
 <span className="px-3 py-1 text-xs font-bold uppercase border border-zinc-400/30 bg-zinc-400/20 text-zinc-300">
 {investigation.status}
 </span>
 </div>
 <h1 className="text-3xl lg:text-4xl font-black glass-text uppercase tracking-wider mb-2">
 <GlitchText text={investigation.title} />
 </h1>
 <p className="text-lg text-blood-500 font-bold mb-4">{investigation.subtitle}</p>
 <p className="text-zinc-400 leading-relaxed">{investigation.summary}</p>
 </motion.div>

 {/* Khashoggi Murder */}
 <motion.div
 initial={{ opacity: 0, y: 20 }}
 animate={{ opacity: 1, y: 0 }}
 transition={{ delay: 0.1 }}
 className="border-2 border-blood-800/60 bg-blood-950/20 p-6 mb-8"
 >
 <h2 className="text-xl font-bold glass-text uppercase tracking-wider mb-4 flex items-center gap-2">
 <Skull className="w-5 h-5 text-blood-500"/>
 Khashoggi Murder - {investigation.khashoggiMurder.date}
 </h2>
 <div className="space-y-4">
 <div className="border border-blood-800/50 bg-black/50 p-4">
 <p className="glass-text font-bold">{investigation.khashoggiMurder.victim}</p>
 <p className="text-zinc-400">{investigation.khashoggiMurder.location}</p>
 <p className="text-blood-400 mt-2">{investigation.khashoggiMurder.method}</p>
 </div>
 <div className="border border-zinc-700/50 bg-zinc-900/30 p-4">
 <p className="text-zinc-300 font-bold">CIA Conclusion:</p>
 <p className="text-zinc-300">{investigation.khashoggiMurder.mbsRole}</p>
 </div>
 <div>
 <h3 className="glass-text font-bold mb-2">Trump&apos;s Response:</h3>
 <div className="space-y-2">
 {investigation.khashoggiMurder.trumpResponse.map((response, idx) => (
 <div key={idx} className="flex items-start gap-2 text-zinc-300 border border-zinc-700 bg-zinc-900/50 p-3">
 <span className="text-blood-500">■</span>
 {response}
 </div>
 ))}
 </div>
 </div>
 </div>
 </motion.div>

 {/* Kushner-Saudi Connection */}
 <motion.div
 initial={{ opacity: 0, y: 20 }}
 animate={{ opacity: 1, y: 0 }}
 transition={{ delay: 0.15 }}
 className="border-2 border-zinc-700/60 bg-zinc-900/20 p-6 mb-8"
 >
 <h2 className="text-xl font-bold glass-text uppercase tracking-wider mb-4 flex items-center gap-2">
 <DollarSign className="w-5 h-5 text-zinc-400"/>
 Kushner-Saudi Connection
 </h2>
 <div className="space-y-3">
 <div className="border border-zinc-700 bg-zinc-900/50 p-4">
 <p className="text-zinc-300 font-bold">Security Clearance Override</p>
 <p className="text-zinc-300">{investigation.kushnerSaudi.securityClearance}</p>
 </div>
 <div className="border border-zinc-700 bg-zinc-900/50 p-4">
 <p className="text-zinc-300 font-bold">WhatsApp Communications</p>
 <p className="text-zinc-300">{investigation.kushnerSaudi.whatsAppWithMBS}</p>
 </div>
 <div className="border border-blood-800/50 bg-blood-950/30 p-4">
 <p className="text-blood-400 font-bold">$2 Billion Saudi Investment</p>
 <p className="text-zinc-300">{investigation.kushnerSaudi.investment}</p>
 </div>
 <div className="border border-blood-800/50 bg-blood-950/30 p-4">
 <p className="text-blood-400 font-bold">&quot;In His Pocket&quot;</p>
 <p className="text-zinc-300">{investigation.kushnerSaudi.inPocket}</p>
 </div>
 </div>
 </motion.div>

 {/* Arms Deals */}
 <motion.div
 initial={{ opacity: 0, y: 20 }}
 animate={{ opacity: 1, y: 0 }}
 transition={{ delay: 0.2 }}
 className="border-2 border-zinc-800 bg-black/60 p-6 mb-8"
 >
 <h2 className="text-xl font-bold glass-text uppercase tracking-wider mb-4 flex items-center gap-2">
 <AlertTriangle className="w-5 h-5 text-blood-500"/>
 Arms Deals
 </h2>
 <div className="space-y-3">
 {investigation.armsDeals.map((deal, idx) => (
 <div key={idx} className="border border-zinc-700 bg-zinc-900/50 p-4">
 <div className="flex justify-between items-start mb-2">
 <h3 className="font-bold glass-text">{deal.deal}</h3>
 <span className="text-xs text-zinc-400">{deal.date}</span>
 </div>
 <p className="text-sm text-zinc-400">{deal.detail}</p>
 </div>
 ))}
 </div>
 </motion.div>

 {/* Yemen War */}
 <motion.div
 initial={{ opacity: 0, y: 20 }}
 animate={{ opacity: 1, y: 0 }}
 transition={{ delay: 0.25 }}
 className="border-2 border-blood-900/80 bg-blood-950/30 p-6 mb-8"
 >
 <h2 className="text-xl font-bold glass-text uppercase tracking-wider mb-4">
 Yemen War Complicity
 </h2>
 <p className="text-zinc-300 mb-4">{investigation.yemenWar.description}</p>
 <div className="grid grid-cols-2 gap-4">
 <div className="border border-blood-800/50 bg-black/50 p-4 text-center">
 <p className="text-3xl font-bold text-blood-500">{investigation.yemenWar.casualties}</p>
 <p className="text-sm text-zinc-400">Estimated Dead</p>
 </div>
 <div className="border border-blood-800/50 bg-black/50 p-4 text-center">
 <p className="text-xl font-bold text-blood-400">{investigation.yemenWar.famine}</p>
 </div>
 </div>
 <p className="text-zinc-400 mt-4">{investigation.yemenWar.trumpRole}</p>
 </motion.div>

 {/* Key Figures */}
 <motion.div
 initial={{ opacity: 0, y: 20 }}
 animate={{ opacity: 1, y: 0 }}
 transition={{ delay: 0.3 }}
 className="border-2 border-zinc-800 bg-black/60 p-6 mb-8"
 >
 <h2 className="text-xl font-bold glass-text uppercase tracking-wider mb-4 flex items-center gap-2">
 <Users className="w-5 h-5 text-blood-500"/>
 Key Figures
 </h2>
 <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.15 }} className="glass-card p-6 mb-8 border-l-4 border-blood-600">
 <h2 className="text-xl font-bold glass-text uppercase tracking-wider mb-4 flex items-center gap-2"><ShieldAlert className="w-5 h-5 text-blood-500"/>The Cover-Up</h2>
 <div className="space-y-3">{investigation.coverup.map((item, idx) => (<div key={idx} className="p-3 bg-blood-950/20 border border-blood-500/30"><p className="text-sm text-zinc-300">{item}</p></div>))}</div>
 </motion.div>

 <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
 {investigation.keyFigures.map((figure, idx) => (
 <Link
 key={idx}
 href={figure.href}
 className="border border-zinc-700 bg-zinc-900/50 p-4 hover:border-blood-600 transition-colors group"
 >
 <div className="flex justify-between items-start">
 <div>
 <h3 className="font-bold glass-text group-hover:text-blood-500">{figure.name}</h3>
 <p className="text-sm text-zinc-400">{figure.role}</p>
 </div>
 <span className="text-xs text-blood-400">{figure.status}</span>
 </div>
 </Link>
 ))}
 </div>
 </motion.div>

 {/* Timeline */}
 <motion.div
 initial={{ opacity: 0, y: 20 }}
 animate={{ opacity: 1, y: 0 }}
 transition={{ delay: 0.35 }}
 className="border-2 border-zinc-800 bg-black/60 p-6 mb-8"
 >
 <h2 className="text-xl font-bold glass-text uppercase tracking-wider mb-4 flex items-center gap-2">
 <Calendar className="w-5 h-5 text-blood-500"/>
 Timeline
 </h2>
 <div className="space-y-4 max-h-96 overflow-y-auto pr-2">
 {investigation.timeline.map((item, idx) => (
 <div key={idx} className="flex gap-4 border-l-2 border-zinc-700 pl-4 hover:border-blood-500 transition-colors">
 <span className="text-blood-500 font-mono text-sm whitespace-nowrap min-w-[100px]">{item.date}</span>
 <span className="text-zinc-300">{item.event}</span>
 </div>
 ))}
 </div>
 </motion.div>

 
 <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5 }} className="border-2 border-zinc-800 bg-black/60 p-6 mb-8">
 <h2 className="text-xl font-bold glass-text uppercase tracking-wider mb-4 flex items-center gap-2"><Scale className="w-5 h-5 text-blood-500"/>Legal Outcomes</h2>
 <div className="space-y-3">{investigation.legalOutcomes.map((item, idx) => (<div key={idx} className="p-3 bg-zinc-900/50 border border-zinc-800"><p className="font-bold glass-text text-sm">{item.defendant}</p><p className="text-xs text-zinc-400 mt-1">{item.charge}</p><p className="text-xs text-blood-400 mt-1">{item.outcome}</p></div>))}</div>
 </motion.div>
 
 <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.45 }} className="border-2 border-zinc-800 bg-black/60 p-6 mb-8">
 <h2 className="text-xl font-bold glass-text uppercase tracking-wider mb-4 flex items-center gap-2"><Scale className="w-5 h-5 text-blood-500"/>Applicable Charges &amp; Statutes</h2>
 <div className="space-y-3">{investigation.charges.map((charge, idx) => (<div key={idx} className="p-4 bg-zinc-900/50 border border-zinc-800"><p className="font-bold text-blood-400 text-sm font-mono">{charge.statute}</p><p className="text-sm text-zinc-300 mt-1">{charge.description}</p><p className="text-xs text-blood-400 mt-1">{charge.count}</p></div>))}</div>
 </motion.div>
 {/* Sources */}
 <motion.div
 initial={{ opacity: 0, y: 20 }}
 animate={{ opacity: 1, y: 0 }}
 transition={{ delay: 0.4 }}
 className="border-2 border-zinc-800 bg-black/60 p-6"
 >
 <h2 className="text-xl font-bold glass-text uppercase tracking-wider mb-4 flex items-center gap-2">
 <FileText className="w-5 h-5 text-blood-500"/>
 Sources & Documentation
 </h2>
 <div className="space-y-3">
 {investigation.sources.map((source, idx) => (
 <a
 key={idx}
 href={source.url}
 target="_blank"
 rel="noopener noreferrer"
 className="flex items-center justify-between border border-zinc-700 bg-zinc-900/50 p-3 hover:border-blood-600 transition-colors group"
 >
 <div>
 <h3 className="text-zinc-300 group-hover:text-blood-500 transition-colors">{source.title}</h3>
 <p className="text-xs text-zinc-500">{source.date}</p>
 </div>
 <ExternalLink className="w-4 h-4 text-zinc-500 group-hover:text-blood-500"/>
 </a>
 ))}
 </div>
 </motion.div>
 </div>
 </div>
 );
}
