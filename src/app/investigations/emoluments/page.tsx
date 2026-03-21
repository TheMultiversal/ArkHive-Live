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
 Building,
 DollarSign,
 ShieldAlert,
 Scale,
} from 'lucide-react';
import GlitchText from '@/components/effects/GlitchText';

const investigation = {
 title: 'Emoluments Violations',
 subtitle: 'Profiting from the Presidency',
 severity: 'high',
 status: 'Cases Dismissed as Moot After Term',
 summary: 'Throughout his presidency, Donald Trump refused to divest from his businesses and accepted payments from foreign governments through his hotels and properties, a direct violation of the Constitution\'s Emoluments Clauses. Foreign governments, state governments, and political groups spent millions at Trump properties, effectively paying the President for access and influence.',
 constitutionalProvisions: [
 { clause: 'Foreign Emoluments Clause (Art. I, Sec. 9)', text: 'No Person holding any Office of Profit or Trust under them, shall, without the Consent of the Congress, accept of any present, Emolument, Office, or Title, of any kind whatever, from any King, Prince, or foreign State.' },
 { clause: 'Domestic Emoluments Clause (Art. II, Sec. 1)', text: 'The President shall not receive...any other Emolument from the United States, or any of them.' },
 ],
 trumpHotelDC: {
 opened: 'September 12, 2016 (lease from GSA for Old Post Office)',
 lease: 'GSA lease prohibited any elected official from benefiting from the lease',
 conflict: 'Trump profited from a government lease while overseeing the agency that administered it',
 foreignSpending: [
 { country: 'Saudi Arabia', payments: 'Hundreds of thousands of dollars; lobbyists spent $270,000' },
 { country: 'Kuwait', payments: 'National Day celebrations moved to Trump Hotel' },
 { country: 'Malaysia', payments: 'Government delegation stayed at hotel' },
 { country: 'Philippines', payments: 'Embassy spent on events at hotel' },
 { country: 'Turkey', payments: 'Government officials stayed during lobbying efforts' },
 ],
 revenue: '$72 million+ in revenue during presidency (Congressional investigation)',
 },
 marALagoMemberships: {
 fee: 'Membership fee doubled to $200,000 after inauguration',
 members: 'Members gained access to President, cabinet officials',
 foreign: 'Foreign nationals purchased memberships for access',
 security: 'Unsecured discussions of sensitive matters with members present',
 },
 keyViolations: [
 { source: 'Saudi Arabia', method: 'Trump Hotel stays, Trump Tower purchases', amount: 'Millions' },
 { source: 'China', method: 'Trademarks granted to Ivanka Trump during negotiations', amount: 'Valuable IP' },
 { source: 'Qatar', method: 'Trump Tower Qatar investors', amount: 'Undisclosed' },
 { source: 'U.S. Government', method: 'Secret Service, staff stayed at Trump properties', amount: '$1M+ billed to taxpayers' },
 { source: 'Republican Party', method: 'RNC, campaigns spent at Trump properties', amount: '$20M+' },
 { source: 'T-Mobile', method: 'Executives stayed at Trump Hotel during merger approval', amount: '$195,000+' },
 ],
 lawsuits: [
 { case: 'CREW v. Trump', plaintiff: 'Citizens for Responsibility and Ethics', status: 'Dismissed as moot' },
 { case: 'District of Columbia & Maryland v. Trump', plaintiff: 'DC and Maryland AGs', status: 'Dismissed as moot' },
 { case: 'Blumenthal v. Trump', plaintiff: '200+ Democratic members of Congress', status: 'Dismissed as moot' },
 ],
 keyFigures: [
 { name: 'Donald Trump', role: 'Retained ownership of businesses while president', href: '/entities/individuals/donald-trump', status: 'Profited throughout term' },
 { name: 'Donald Trump Jr.', role: 'Ran Trump Organization during presidency', href: '/entities/individuals/donald-trump-jr', status: 'Operated business' },
 { name: 'Eric Trump', role: 'Ran Trump Organization during presidency', href: '/entities/individuals/eric-trump', status: 'Operated business' },
 { name: 'Ivanka Trump', role: 'Received Chinese trademarks while advising on China policy', href: '/entities/individuals/ivanka-trump', status: 'Conflicts of interest' },
 ],
 timeline: [
 { date: 'Jan 2017', event: 'Trump inaugurated; refuses to divest from businesses' },
 { date: 'Jan 2017', event: 'CREW files first emoluments lawsuit' },
 { date: 'Mar 2017', event: 'Kuwaiti Embassy moves event to Trump Hotel' },
 { date: 'Jun 2017', event: 'DC and Maryland AGs file lawsuit' },
 { date: 'Sep 2017', event: 'Saudi lobbyists rack up $270,000 at Trump Hotel' },
 { date: 'May 2018', event: 'Ivanka Trump receives Chinese trademarks same day Trump aids ZTE' },
 { date: 'Jul 2019', event: 'Appeals court allows emoluments lawsuit to proceed' },
 { date: 'Oct 2019', event: 'Trump proposes hosting G7 at his Doral resort (withdraws after backlash)' },
 { date: 'Jan 2021', event: 'Trump leaves office; cases dismissed as moot' },
 { date: 'Feb 2021', event: 'House Oversight reveals $3.7M from foreign governments' },
 { date: '2022', event: 'Trump sells DC Hotel for $375 million (after profiting throughout term)' },
 ],
 legalOutcomes: [
 { defendant: 'Donald Trump', charge: 'Foreign Emoluments Clause violation (Art. I, Sec. 9)', outcome: 'CREW v. Trump dismissed as moot after term ended (2021)' },
 { defendant: 'Donald Trump', charge: 'Domestic Emoluments Clause violation (Art. II, Sec. 1)', outcome: 'DC & Maryland v. Trump dismissed as moot by Supreme Court (2021)' },
 { defendant: 'Donald Trump', charge: 'Accepting foreign emoluments without congressional consent', outcome: 'Blumenthal v. Trump (200+ members of Congress) dismissed as moot' },
 { defendant: 'Trump Organization', charge: 'GSA lease violation, elected official benefiting from federal lease', outcome: 'GSA found no violation despite clear conflict; hotel sold for $375M in 2022' },
 { defendant: 'Trump Organization', charge: 'Tax fraud and financial misrepresentation', outcome: 'NY AG civil fraud case resulted in $454 million judgment (2024)' },
 ],
 charges: [
 { statute: 'U.S. Const. Art. I, § 9, Cl. 8', description: 'Foreign Emoluments Clause, accepting payments from foreign governments through hotels and properties without congressional consent', count: 'Continuous violation throughout term' },
 { statute: 'U.S. Const. Art. II, § 1, Cl. 7', description: 'Domestic Emoluments Clause, receiving payments from federal and state governments through Trump properties', count: 'Continuous violation throughout term' },
 { statute: '18 U.S.C. § 208', description: 'Acts affecting personal financial interest, participating in government decisions affecting his own business interests', count: 'Multiple instances' },
 { statute: '5 U.S.C. § 7353', description: 'Gifts to federal employees, accepting gifts and payments from those seeking official action', count: 'Multiple instances' },
 { statute: '40 U.S.C. § 581(h)', description: 'GSA lease terms violation, Old Post Office lease prohibited elected officials from being party to the lease', count: '1 continuous violation' },
 { statute: '18 U.S.C. § 1346', description: 'Honest services fraud, depriving the public of the right to honest services through self-dealing', count: 'Multiple instances' },
 ],
 coverup: [
 'Trump claimed to place his businesses in a"blind trust"run by his sons, but retained full ownership and could withdraw profits at any time, making the trust meaningless',
 'The General Services Administration under Trump appointees found"no violation"of the Old Post Office lease despite its explicit prohibition on elected officials benefiting',
 'The Trump Organization refused to disclose detailed financial records showing foreign government payments, requiring years of litigation to obtain',
 'White House officials directed Secret Service and government staff to stay at Trump properties, creating taxpayer-funded revenue streams back to the president',
 'The administration blocked congressional subpoenas for Trump Organization financial records, delaying oversight until cases became moot after his term ended',
 'Trump proposed hosting the 2020 G7 summit at his own Doral golf resort, only backing down after bipartisan outrage exposed the blatant self-dealing',
 'The DOJ under Barr argued in court that no one had standing to sue over emoluments violations, effectively making the constitutional provision unenforceable',
 ],
 sources: [
 { title: 'Congressional Research Service Report', url: 'https://crsreports.congress.gov/product/pdf/R/R45992', date: '2019' },
 { title: 'CREW: Trump\'s 3,400 Conflicts of Interest', url: 'https://www.citizensforethics.org/reports-investigations/crew-reports/president-trumps-3400-conflicts-of-interest/', date: '2021' },
 { title: 'House Oversight: $7.8 Million from Foreign Governments', url: 'https://democrats-oversight.house.gov/news/press-releases/new-documents-reveal-trump-received-at-least-37-million-from-foreign-governments', date: '2022' },
 { title: 'DC & Maryland v. Trump, Emoluments Lawsuit', url: 'https://www.washingtonpost.com/politics/dc-and-maryland-may-proceed-with-emoluments-case-against-trump-federal-judge-rules/2018/07/25/7c869dfa-8f87-11e8-bcd5-9d911c784c38_story.html', date: '2018' },
 { title: 'Blumenthal v. Trump, Congressional Emoluments Challenge', url: 'https://www.politico.com/story/2019/09/04/democrats-emoluments-case-trump-1481327', date: '2019' },
 { title: 'GSA Inspector General Report on Old Post Office Lease', url: 'https://www.gsaig.gov/content/gsa%E2%80%99s-management-old-post-office-building-lease', date: '2019' },
 { title: 'NY AG Civil Fraud Judgment Against Trump Organization', url: 'https://ag.ny.gov/press-release/2024/attorney-general-james-wins-landmark-victory-fraud-case-against-donald-trump', date: '2024' },
 ],
};

export default function EmolumentsPage() {
 return (
 <div className="min-h-screen pt-20 lg:pt-24 pb-16">
 <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
 <Link
 href="/investigations"
 className="inline-flex items-center gap-2 text-zinc-400 hover:text-white transition-colors mb-6 pt-4"
 >
 <ArrowLeft className="w-4 h-4"/>
 Back to Investigations
 </Link>

 {/* Header */}
 <motion.div
 initial={{ opacity: 0, y: 20 }}
 animate={{ opacity: 1, y: 0 }}
 className="border-2 border-zinc-800/60 bg-[rgba(0,6,20,0.90)] p-6 lg:p-8 mb-8"
 >
 <div className="flex items-center gap-3 mb-4">
 <span className="px-3 py-1 text-xs font-bold uppercase border border-zinc-800 bg-zinc-900 text-zinc-500">
 {investigation.severity}
 </span>
 <span className="px-3 py-1 text-xs font-bold uppercase border border-zinc-700 bg-zinc-900 text-zinc-300">
 {investigation.status}
 </span>
 </div>
 <h1 className="text-3xl lg:text-4xl font-black glass-text uppercase tracking-wider mb-2">
 <GlitchText text={investigation.title} />
 </h1>
 <p className="text-lg text-zinc-300 font-bold mb-4">{investigation.subtitle}</p>
 <p className="text-zinc-400 leading-relaxed">{investigation.summary}</p>
 </motion.div>

 {/* Constitutional Clauses */}
 <motion.div
 initial={{ opacity: 0, y: 20 }}
 animate={{ opacity: 1, y: 0 }}
 transition={{ delay: 0.1 }}
 className="border-2 border-zinc-700/60 bg-zinc-900 p-6 mb-8"
 >
 <h2 className="text-xl font-bold glass-text uppercase tracking-wider mb-4 flex items-center gap-2">
 <AlertTriangle className="w-5 h-5 text-zinc-400"/>
 Constitutional Violations
 </h2>
 <div className="space-y-4">
 {investigation.constitutionalProvisions.map((prov, idx) => (
 <div key={idx} className="border border-[rgba(255,255,255,0.15)] bg-black p-4">
 <h3 className="text-zinc-300 font-bold mb-2">{prov.clause}</h3>
 <p className="text-zinc-300 italic">&quot;{prov.text}&quot;</p>
 </div>
 ))}
 </div>
 </motion.div>

 {/* Trump Hotel DC */}
 <motion.div
 initial={{ opacity: 0, y: 20 }}
 animate={{ opacity: 1, y: 0 }}
 transition={{ delay: 0.15 }}
 className="border-2 border-[rgba(255,255,255,0.15)] bg-[#080808] p-6 mb-8"
 >
 <h2 className="text-xl font-bold glass-text uppercase tracking-wider mb-4 flex items-center gap-2">
 <Building className="w-5 h-5 text-zinc-300"/>
 Trump International Hotel, Washington D.C.
 </h2>
 <div className="grid grid-cols-2 gap-4 mb-4">
 <div className="border border-[rgba(255,255,255,0.18)] bg-[#0a0a0a] p-4">
 <p className="text-zinc-400 text-sm">Revenue During Presidency</p>
 <p className="text-2xl font-bold text-zinc-300">{investigation.trumpHotelDC.revenue}</p>
 </div>
 <div className="border border-[rgba(255,255,255,0.18)] bg-[#0a0a0a] p-4">
 <p className="text-zinc-400 text-sm">Conflict</p>
 <p className="text-sm text-zinc-300">{investigation.trumpHotelDC.conflict}</p>
 </div>
 </div>
 <h3 className="glass-text font-bold mb-2">Foreign Government Spending:</h3>
 <div className="space-y-2">
 {investigation.trumpHotelDC.foreignSpending.map((spend, idx) => (
 <div key={idx} className="flex justify-between items-start border border-[rgba(255,255,255,0.18)] bg-[#0a0a0a] p-3">
 <span className="glass-text font-bold">{spend.country}</span>
 <span className="text-zinc-400">{spend.payments}</span>
 </div>
 ))}
 </div>
 </motion.div>

 {/* Mar-a-Lago */}
 <motion.div
 initial={{ opacity: 0, y: 20 }}
 animate={{ opacity: 1, y: 0 }}
 transition={{ delay: 0.2 }}
 className="border-2 border-[rgba(255,255,255,0.15)] bg-[#080808] p-6 mb-8"
 >
 <h2 className="text-xl font-bold glass-text uppercase tracking-wider mb-4 flex items-center gap-2">
 <DollarSign className="w-5 h-5 text-zinc-300"/>
 Mar-a-Lago &quot;Pay to Play&quot;
 </h2>
 <div className="grid grid-cols-2 gap-4">
 <div className="border border-[rgba(255,255,255,0.18)] bg-[#0a0a0a] p-4">
 <p className="text-zinc-300 font-bold">{investigation.marALagoMemberships.fee}</p>
 </div>
 <div className="border border-[rgba(255,255,255,0.18)] bg-[#0a0a0a] p-4">
 <p className="text-zinc-300">{investigation.marALagoMemberships.members}</p>
 </div>
 <div className="border border-[rgba(255,255,255,0.18)] bg-[#0a0a0a] p-4">
 <p className="text-zinc-300">{investigation.marALagoMemberships.foreign}</p>
 </div>
 <div className="border border-[rgba(255,255,255,0.18)] bg-[#0a0a0a] p-4">
 <p className="text-zinc-300">{investigation.marALagoMemberships.security}</p>
 </div>
 </div>
 </motion.div>

 {/* Key Violations */}
 <motion.div
 initial={{ opacity: 0, y: 20 }}
 animate={{ opacity: 1, y: 0 }}
 transition={{ delay: 0.25 }}
 className="border-2 border-zinc-800/60 bg-zinc-900 p-6 mb-8"
 >
 <h2 className="text-xl font-bold glass-text uppercase tracking-wider mb-4">
 Documented Emoluments
 </h2>
 <div className="space-y-3">
 {investigation.keyViolations.map((viol, idx) => (
 <div key={idx} className="border border-[rgba(255,255,255,0.18)] bg-[#0a0a0a] p-4">
 <div className="flex justify-between items-start mb-2">
 <h3 className="font-bold glass-text">{viol.source}</h3>
 <span className="text-zinc-300">{viol.amount}</span>
 </div>
 <p className="text-sm text-zinc-400">{viol.method}</p>
 </div>
 ))}
 </div>
 </motion.div>

 {/* Lawsuits */}
 <motion.div
 initial={{ opacity: 0, y: 20 }}
 animate={{ opacity: 1, y: 0 }}
 transition={{ delay: 0.3 }}
 className="border-2 border-[rgba(255,255,255,0.15)] bg-[#080808] p-6 mb-8"
 >
 <h2 className="text-xl font-bold glass-text uppercase tracking-wider mb-4">
 Emoluments Lawsuits
 </h2>
 <div className="space-y-3">
 {investigation.lawsuits.map((suit, idx) => (
 <div key={idx} className="border border-[rgba(255,255,255,0.18)] bg-[#0a0a0a] p-4">
 <div className="flex justify-between items-start">
 <div>
 <h3 className="font-bold glass-text">{suit.case}</h3>
 <p className="text-sm text-zinc-400">{suit.plaintiff}</p>
 </div>
 <span className="text-xs text-zinc-300">{suit.status}</span>
 </div>
 </div>
 ))}
 </div>
 </motion.div>

 {/* Key Figures */}
 <motion.div
 initial={{ opacity: 0, y: 20 }}
 animate={{ opacity: 1, y: 0 }}
 transition={{ delay: 0.35 }}
 className="border-2 border-[rgba(255,255,255,0.15)] bg-[#080808] p-6 mb-8"
 >
 <h2 className="text-xl font-bold glass-text uppercase tracking-wider mb-4 flex items-center gap-2">
 <Users className="w-5 h-5 text-zinc-300"/>
 Key Figures
 </h2>
 <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
 {investigation.keyFigures.map((figure, idx) => (
 <Link
 key={idx}
 href={figure.href}
 className="border border-[rgba(255,255,255,0.18)] bg-[#0a0a0a] p-4 hover:border-zinc-700 transition-colors group"
 >
 <div className="flex justify-between items-start">
 <div>
 <h3 className="font-bold glass-text group-hover:text-white">{figure.name}</h3>
 <p className="text-sm text-zinc-400">{figure.role}</p>
 </div>
 <span className="text-xs text-zinc-400">{figure.status}</span>
 </div>
 </Link>
 ))}
 </div>
 </motion.div>

 {/* Timeline */}
 <motion.div
 initial={{ opacity: 0, y: 20 }}
 animate={{ opacity: 1, y: 0 }}
 transition={{ delay: 0.4 }}
 className="border-2 border-[rgba(255,255,255,0.15)] bg-[#080808] p-6 mb-8"
 >
 <h2 className="text-xl font-bold glass-text uppercase tracking-wider mb-4 flex items-center gap-2">
 <Calendar className="w-5 h-5 text-zinc-300"/>
 Timeline
 </h2>
 <div className="space-y-4 max-h-96 overflow-y-auto pr-2">
 {investigation.timeline.map((item, idx) => (
 <div key={idx} className="flex gap-4 border-l-2 border-[rgba(255,255,255,0.18)] pl-4 hover:border-zinc-600 transition-colors">
 <span className="text-zinc-300 font-mono text-sm whitespace-nowrap min-w-[80px]">{item.date}</span>
 <span className="text-zinc-300">{item.event}</span>
 </div>
 ))}
 </div>
 </motion.div>

 
 <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5 }} className="border-2 border-[rgba(255,255,255,0.15)] bg-[#080808] p-6 mb-8">
 <h2 className="text-xl font-bold glass-text uppercase tracking-wider mb-4 flex items-center gap-2"><Scale className="w-5 h-5 text-zinc-300"/>Legal Outcomes</h2>
 <div className="space-y-3">{investigation.legalOutcomes.map((item, idx) => (<div key={idx} className="p-3 bg-[#0a0a0a] border border-[rgba(255,255,255,0.15)]"><p className="font-bold glass-text text-sm">{item.defendant}</p><p className="text-xs text-zinc-400 mt-1">{item.charge}</p><p className="text-xs text-zinc-400 mt-1">{item.outcome}</p></div>))}</div>
 </motion.div>
 
 <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.45 }} className="border-2 border-[rgba(255,255,255,0.15)] bg-[#080808] p-6 mb-8">
 <h2 className="text-xl font-bold glass-text uppercase tracking-wider mb-4 flex items-center gap-2"><Scale className="w-5 h-5 text-zinc-300"/>Applicable Charges &amp; Statutes</h2>
 <div className="space-y-3">{investigation.charges.map((charge, idx) => (<div key={idx} className="p-4 bg-[#0a0a0a] border border-[rgba(255,255,255,0.15)]"><p className="font-bold text-zinc-400 text-sm font-mono">{charge.statute}</p><p className="text-sm text-zinc-300 mt-1">{charge.description}</p><p className="text-xs text-zinc-400 mt-1">{charge.count}</p></div>))}</div>
 </motion.div>

 <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5 }} className="border-2 border-[rgba(255,255,255,0.15)] bg-[#080808] p-6 mb-8 border-l-4 border-zinc-700">
 <h2 className="text-xl font-bold glass-text uppercase tracking-wider mb-4 flex items-center gap-2"><ShieldAlert className="w-5 h-5 text-zinc-300"/>The Cover-Up</h2>
 <div className="space-y-3">{investigation.coverup.map((item, idx) => (<div key={idx} className="p-3 bg-zinc-900 border border-zinc-800"><p className="text-sm text-zinc-300">{item}</p></div>))}</div>
 </motion.div>

 {/* Sources */}
 <motion.div
 initial={{ opacity: 0, y: 20 }}
 animate={{ opacity: 1, y: 0 }}
 transition={{ delay: 0.45 }}
 className="border-2 border-[rgba(255,255,255,0.15)] bg-[#080808] p-6"
 >
 <h2 className="text-xl font-bold glass-text uppercase tracking-wider mb-4 flex items-center gap-2">
 <FileText className="w-5 h-5 text-zinc-300"/>
 Sources & Documentation
 </h2>
 <div className="space-y-3">
 {investigation.sources.map((source, idx) => (
 <a
 key={idx}
 href={source.url}
 target="_blank"
 rel="noopener noreferrer"
 className="flex items-center justify-between border border-[rgba(255,255,255,0.18)] bg-[#0a0a0a] p-3 hover:border-zinc-700 transition-colors group"
 >
 <div>
 <h3 className="text-zinc-300 group-hover:text-white transition-colors">{source.title}</h3>
 <p className="text-xs text-zinc-500">{source.date}</p>
 </div>
 <ExternalLink className="w-4 h-4 text-zinc-500 group-hover:text-white"/>
 </a>
 ))}
 </div>
 </motion.div>
 </div>
 </div>
 );
}
