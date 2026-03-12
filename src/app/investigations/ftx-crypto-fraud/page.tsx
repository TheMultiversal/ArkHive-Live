'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowLeft, AlertTriangle, Users, Calendar, FileText, ExternalLink, Scale, ShieldAlert, Skull } from 'lucide-react';
import GlitchText from '@/components/effects/GlitchText';

const investigation = {
 title: 'FTX Crypto Fraud',
 subtitle: '$8 Billion Stolen: Sam Bankman-Fried\'s Crypto Empire Built on Customer Funds and Political Protection',
 severity: 'critical',
 status: 'CONVICTED - 25 YEARS',
 summary: 'FTX, once the world\'s third-largest cryptocurrency exchange valued at $32 billion, collapsed in November 2022 when it was revealed that founder Sam Bankman-Fried had secretly funneled approximately $8 billion in customer deposits to his hedge fund Alameda Research. The money was used for risky trades, luxury real estate, venture investments, and over $100 million in political donations designed to buy regulatory influence. Bankman-Fried cultivated an image as a philanthropic wunderkind while running what prosecutors called"one of the biggest financial frauds in American history."He was convicted on all seven counts and sentenced to 25 years in federal prison.',
 keyFigures: [
 { name: 'Sam Bankman-Fried', role: 'Founder and CEO of FTX; mastermind of the fraud who directed the misuse of $8 billion in customer funds', href: '/entities/individuals/sam-bankman-fried', status: 'Convicted - 25 Years' },
 { name: 'Caroline Ellison', role: 'CEO of Alameda Research and Bankman-Fried\'s romantic partner; managed the hedge fund that received stolen customer deposits', href: '/entities/individuals/caroline-ellison', status: 'Cooperating - 2 Years' },
 { name: 'Gary Wang', role: 'Co-founder and CTO of FTX; built the secret backdoor allowing Alameda to access customer funds', href: '/entities/individuals/gary-wang', status: 'Cooperating, No Prison' },
 { name: 'Nishad Singh', role: 'FTX Director of Engineering; helped implement the systems that enabled the fraud', href: '/entities/individuals/nishad-singh', status: 'Cooperating, No Prison' },
 { name: 'Ryan Salame', role: 'Co-CEO of FTX Digital Markets; made illegal political contributions at Bankman-Fried\'s direction', href: '/entities/individuals/ryan-salame', status: 'Convicted - 90 Months' },
 { name: 'Joseph Bankman', role: 'Stanford Law professor and Sam\'s father; advised FTX on tax strategy and allegedly received $10M gift from company', href: '/entities/individuals/joseph-bankman', status: 'Under Investigation' },
 { name: 'Barbara Fried', role: 'Stanford Law professor and Sam\'s mother; ran Mind the Gap political fundraising operation', href: '/entities/individuals/barbara-fried', status: 'Under Investigation' },
 { name: 'John Ray III', role: 'Restructuring expert appointed FTX CEO after collapse; previously managed Enron bankruptcy', href: '/entities/individuals/john-ray-iii', status: 'FTX Liquidator' },
 { name: 'Changpeng Zhao', role: 'Binance CEO whose tweet about selling FTT tokens triggered FTX\'s bank run and collapse', href: '/entities/individuals/changpeng-zhao', status: 'Convicted (Separate Case)' },
 { name: 'Damian Williams', role: 'U.S. Attorney for SDNY who led the prosecution; called it"one of the biggest financial frauds in American history"', href: '/entities/individuals/damian-williams', status: 'Lead Prosecutor' },
 ],
 timeline: [
 { date: '2017', event: 'Sam Bankman-Fried founds Alameda Research, a quantitative cryptocurrency trading firm' },
 { date: '2019-05', event: 'FTX cryptocurrency exchange launched; quickly grows due to aggressive marketing and low trading fees' },
 { date: '2020', event: 'FTX begins secretly funneling customer deposits to Alameda Research through a hidden backdoor in the code' },
 { date: '2021-07', event: 'FTX raises $900 million at $18 billion valuation from top-tier investors including Sequoia Capital and SoftBank' },
 { date: '2021-10', event: 'FTX raises another $420 million at $25 billion valuation; Bankman-Fried becomes youngest self-made billionaire' },
 { date: '2022-01', event: 'FTX raises $400 million at $32 billion valuation; sponsors Super Bowl ads, Miami Heat arena, and celebrity endorsements' },
 { date: '2022-02', event: 'FTX Super Bowl commercial airs featuring Larry David; company spends hundreds of millions on marketing' },
 { date: '2022-06', event: 'Crypto market crash causes massive losses at Alameda Research; customer funds increasingly used to cover the hole' },
 { date: '2022-09', event: 'Bankman-Fried testifies before Congress, positioning himself as pro-regulation while secretly committing fraud' },
 { date: '2022-11-02', event: 'CoinDesk publishes report revealing Alameda\'s balance sheet is heavily composed of FTX\'s own FTT token' },
 { date: '2022-11-06', event: 'Binance CEO Changpeng Zhao announces Binance will sell its $580M in FTT tokens, triggering a bank run' },
 { date: '2022-11-08', event: 'FTX halts customer withdrawals as billions in withdrawal requests overwhelm the exchange' },
 { date: '2022-11-09', event: 'Binance signs letter of intent to acquire FTX, then withdraws after seeing the company\'s finances' },
 { date: '2022-11-11', event: 'FTX, Alameda Research, and 130 affiliated entities file for Chapter 11 bankruptcy; Bankman-Fried resigns' },
 { date: '2022-12-12', event: 'Bankman-Fried arrested in the Bahamas at the request of U.S. prosecutors' },
 { date: '2022-12-21', event: 'Caroline Ellison and Gary Wang plead guilty and agree to cooperate with prosecutors' },
 { date: '2023-10', event: 'Bankman-Fried\'s trial begins in Manhattan federal court; prosecutors present damning evidence of systematic fraud' },
 { date: '2023-11-02', event: 'Jury convicts Bankman-Fried on all seven counts after less than five hours of deliberation' },
 { date: '2024-03-28', event: 'Bankman-Fried sentenced to 25 years in federal prison; judge calls the fraud"unprecedented in scale"' },
 ],
 legalOutcomes: [
 { defendant: 'Sam Bankman-Fried', charge: 'Wire fraud, conspiracy, securities fraud, money laundering', outcome: 'Convicted on all 7 counts; sentenced to 25 years federal prison, $11 billion forfeiture' },
 { defendant: 'Caroline Ellison', charge: 'Wire fraud conspiracy, securities fraud conspiracy', outcome: 'Pled guilty; sentenced to 2 years prison (cooperating witness)' },
 { defendant: 'Gary Wang', charge: 'Wire fraud conspiracy, securities fraud conspiracy', outcome: 'Pled guilty; no prison time (key cooperating witness)' },
 { defendant: 'Nishad Singh', charge: 'Wire fraud conspiracy, money laundering conspiracy', outcome: 'Pled guilty; no prison time (cooperating witness)' },
 { defendant: 'Ryan Salame', charge: 'Conspiracy to make unlawful political contributions, operating unlicensed money transmitting business', outcome: 'Pled guilty; 90 months federal prison' },
 { defendant: 'FTX (Bankruptcy)', charge: 'Customer fund misappropriation', outcome: 'Chapter 11 proceedings; estate recovered sufficient funds to pay customers 100%+ of claims' },
 { defendant: 'FTX Celebrity Endorsers', charge: 'Class-action securities fraud claims', outcome: 'Settlements with Tom Brady ($55M), Shaquille O\'Neal, Larry David, and others' },
 { defendant: 'Sullivan & Cromwell (FTX Law Firm)', charge: 'Allegations of enabling FTX misconduct', outcome: 'Under investigation; contested by the firm' },
 ],
 charges: [
 { statute: '18 U.S.C. § 1343: Wire Fraud', description: 'Bankman-Fried used electronic communications to execute a scheme defrauding FTX customers of $8 billion', count: '2 counts, convicted on both' },
 { statute: '18 U.S.C. § 371: Conspiracy to Commit Wire Fraud', description: 'Coordinated with Ellison, Wang, and Singh to systematically steal customer deposits', count: '1 count, convicted' },
 { statute: '15 U.S.C. § 78j: Securities Fraud', description: 'Deceived FTX equity investors about the company\'s financial condition and use of funds', count: '1 count, convicted' },
 { statute: '18 U.S.C. § 1956: Money Laundering Conspiracy', description: 'Moving stolen customer funds through an array of accounts to conceal their origin and use', count: '1 count, convicted' },
 { statute: '52 U.S.C. § 30122: Campaign Finance Violations', description: 'Directing over $100 million in illegal political contributions through straw donors', count: '1 count, convicted' },
 { statute: '18 U.S.C. § 1349: Commodities Fraud Conspiracy', description: 'Fraud in connection with the trading of cryptocurrency commodities on FTX', count: '1 count, convicted' },
 { statute: '18 U.S.C. § 981: Criminal Forfeiture', description: 'Forfeiture of all proceeds obtained through criminal activity', count: '$11 billion forfeiture order' },
 { statute: '18 U.S.C. § 1960: Unlicensed Money Transmitting', description: 'Operating FTX as an unlicensed money services business in violation of federal law', count: 'Charged against Ryan Salame' },
 ],
 coverup: [
 'FTX\'s terms of service explicitly stated customer funds would never be loaned or used by the company, while a secret backdoor in the code allowed Alameda to withdraw billions with no collateral requirements',
 'Bankman-Fried cultivated a carefully crafted public image as an"effective altruist"who lived frugally and planned to donate his fortune, while secretly using stolen money for luxury penthouses in the Bahamas',
 'Gary Wang built a hidden exemption in FTX\'s code that allowed Alameda Research to maintain a negative balance of up to $65 billion, essentially an unlimited credit line funded by customer deposits',
 'Alameda\'s balance sheet was largely composed of FTT, FTX\'s own token, meaning the entire empire was built on circular, self-referential value that would collapse if anyone tried to sell',
 'Bankman-Fried donated over $100 million to politicians from both parties, buying access, influence, and favorable regulatory treatment while running one of the largest frauds in history',
 'When customers demanded withdrawals in November 2022, FTX could not pay because $8 billion in customer funds had already been spent by Alameda on failed trades, real estate, and investments',
 'FTX had virtually no corporate controls: no board of directors, no CFO for most of its existence, and accounting records described as"a complete failure"by the bankruptcy administrator',
 'After the collapse, Bankman-Fried went on a media tour attempting to portray himself as a naive CEO who simply lost track of the money, prosecutors proved this was a calculated deception',
 'Bankman-Fried attempted to tamper with witnesses by contacting Caroline Ellison via encrypted messaging apps after his arrest, leading to his bail being revoked',
 ],
 sources: [
 { title: 'United States v. Samuel Bankman-Fried, Criminal Indictment', url: 'https://www.justice.gov/usao-sdny/press-release/file/1557571/download', date: '2022-12-13' },
 { title: 'SDNY Press Release, Bankman-Fried Convicted', url: 'https://www.justice.gov/usao-sdny/pr/samuel-bankman-fried-convicted-defrauding-customers-and-investors-ftx', date: '2023-11-02' },
 { title: 'Bankman-Fried Sentenced to 25 Years, DOJ', url: 'https://www.justice.gov/usao-sdny/pr/samuel-bankman-fried-sentenced-25-years-his-orchestration-multiple-fraudulent-schemes', date: '2024-03-28' },
 { title: 'CoinDesk, Divisions in Sam Bankman-Fried\'s Crypto Empire Blur', url: 'https://www.coindesk.com/business/2022/11/02/divisions-in-sam-bankman-frieds-crypto-empire-blur-on-his-trading-titan-alamedas-balance-sheet/', date: '2022-11-02' },
 { title: 'FTX Bankruptcy First Day Declaration by John Ray III', url: 'https://cases.ra.kroll.com/FTX/', date: '2022-11-17' },
 { title: 'SEC Charges Sam Bankman-Fried with Securities Fraud', url: 'https://www.sec.gov/news/press-release/2022-219', date: '2022-12-13' },
 { title: 'Going Infinite: The Rise and Fall of a New Tycoon, Michael Lewis', url: 'https://www.penguinrandomhouse.com/books/714667/going-infinite-by-michael-lewis/', date: '2023-10' },
 { title: 'CFTC Complaint Against FTX and Bankman-Fried', url: 'https://www.cftc.gov/PressRoom/PressReleases/8638-22', date: '2022-12-13' },
 ],
};

export default function FTXFraudPage() {
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
