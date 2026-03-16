'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowLeft, AlertTriangle, Users, Calendar, FileText, ExternalLink, Scale, ShieldAlert, Skull } from 'lucide-react';
import GlitchText from '@/components/effects/GlitchText';

const investigation = {
 title: 'The Savings & Loan Crisis',
 subtitle: '$160 Billion Taxpayer Bailout: How Deregulation, Fraud, and Political Corruption Destroyed 1,000+ Banks',
 severity: 'critical',
 status: 'RESOLVED, LESSONS IGNORED',
 summary: 'The Savings and Loan Crisis of the 1980s and early 1990s remains one of the greatest financial scandals in American history. Over 1,000 savings and loan associations (thrifts) failed, costing American taxpayers $160.1 billion. The crisis was fueled by reckless deregulation under the Reagan administration, which allowed S&L executives to gamble with federally insured deposits on speculative real estate, junk bonds, and fraudulent schemes. Political corruption ran deep, five U.S. senators interceded on behalf of fraudster Charles Keating, and hundreds of S&L executives engaged in self-dealing, embezzlement, and outright looting. Despite over 1,000 criminal prosecutions, the crisis exposed how political donations and lobbying could buy regulatory forbearance to the public\'s catastrophic detriment.',
 keyFigures: [
 { name: 'Charles Keating', role: 'Chairman of Lincoln Savings and Loan; poster child of S&L fraud who stole $250M from elderly investors', href: '/entities/individuals/charles-keating', status: 'Convicted (Deceased 2014)' },
 { name: 'Edwin Gray', role: 'Federal Home Loan Bank Board Chairman who tried to re-regulate thrifts and was politically undermined', href: '/entities/individuals/edwin-gray', status: 'Deceased' },
 { name: 'Danny Wall', role: 'Succeeded Gray as FHLBB Chairman; delayed shutting down Lincoln Savings, costing taxpayers billions more', href: '/entities/individuals/danny-wall', status: 'Forced to Resign' },
 { name: 'Alan Cranston', role: 'U.S. Senator (D-CA); one of the "Keating Five"who received $1.3M in contributions and pressured regulators', href: '/entities/individuals/alan-cranston', status: 'Reprimanded (Deceased)' },
 { name: 'John Glenn', role: 'U.S. Senator (D-OH); one of the Keating Five accused of intervening with regulators on Keating\'s behalf', href: '/entities/individuals/john-glenn', status: 'Cleared (Deceased)' },
 { name: 'John McCain', role: 'U.S. Senator (R-AZ); one of the Keating Five; later became champion of campaign finance reform', href: '/entities/individuals/john-mccain', status: 'Cleared (Deceased)' },
 { name: 'Dennis DeConcini', role: 'U.S. Senator (D-AZ); one of the Keating Five who met with regulators at Keating\'s request', href: '/entities/individuals/dennis-deconcini', status: 'Criticized' },
 { name: 'Donald Riegle', role: 'U.S. Senator (D-MI); one of the Keating Five; retired after Senate Ethics Committee investigation', href: '/entities/individuals/donald-riegle', status: 'Retired' },
 { name: 'Neil Bush', role: 'Son of President George H.W. Bush; director of Silverado Banking who approved bad loans to business partners', href: '/entities/individuals/neil-bush', status: 'Fined - $50,000' },
 { name: 'Michael Milken', role: 'Junk bond king at Drexel Burnham Lambert; sold high-risk bonds to S&Ls, fueling their collapse', href: '/entities/individuals/michael-milken', status: 'Convicted (Pardoned)' },
 { name: 'William Black', role: 'Senior regulator and whistleblower who documented the"control fraud"pattern across failed S&Ls', href: '/entities/individuals/william-black', status: 'Key Investigator' },
 ],
 timeline: [
 { date: '1932', event: 'Federal Home Loan Bank Act establishes S&L system; thrifts take deposits and make home loans under strict regulation' },
 { date: '1966', event: 'Interest rate ceilings (Regulation Q) limit what S&Ls can pay depositors, constraining their business model' },
 { date: '1980', event: 'Depository Institutions Deregulation and Monetary Control Act begins phasing out interest rate ceilings' },
 { date: '1982', event: 'Garn-St. Germain Depository Institutions Act dramatically deregulates S&Ls, allowing commercial lending, junk bond purchases, and 100% federally insured deposits' },
 { date: '1983', event: 'Hundreds of S&Ls begin speculating on commercial real estate, junk bonds, and risky ventures using insured deposits' },
 { date: '1984', event: 'FHLBB Chairman Edwin Gray sounds alarm about fraud and insolvency; faces political opposition from Reagan administration' },
 { date: '1985', event: 'Empire Savings of Mesquite, TX collapses, one of the first major S&L failures exposing fraudulent land flips' },
 { date: '1986', event: 'Total S&L industry losses reach $16 billion; hundreds of thrifts are technically insolvent but continue operating' },
 { date: '1987-04', event: 'Keating Five senators meet with regulators to pressure them to stop investigating Lincoln Savings and Loan' },
 { date: '1987', event: 'FSLIC (Federal Savings and Loan Insurance Corporation) itself becomes insolvent, it cannot cover the failed S&Ls' },
 { date: '1989-02', event: 'President George H.W. Bush proposes the S&L bailout plan, acknowledging the crisis publicly for the first time' },
 { date: '1989-08', event: 'Financial Institutions Reform, Recovery, and Enforcement Act (FIRREA) signed, creates RTC to liquidate failed S&Ls' },
 { date: '1989-04', event: 'Lincoln Savings and Loan seized by regulators; 23,000 customers lose $250 million in uninsured bonds, many elderly' },
 { date: '1990', event: 'Neil Bush fined $50,000 for conflicts of interest at Silverado Banking; taxpayer cost of Silverado failure: $1.3 billion' },
 { date: '1991', event: 'Keating convicted on state fraud charges; later convicted on federal charges of racketeering and fraud' },
 { date: '1991', event: 'Senate Ethics Committee formally investigates the Keating Five; Cranston reprimanded, others criticized' },
 { date: '1993', event: 'DOJ Criminal Division reports over 1,100 S&L defendants convicted of criminal charges' },
 { date: '1995', event: 'Resolution Trust Corporation closes after disposing of $394 billion in assets from 747 failed S&Ls' },
 { date: '1996', event: 'Total taxpayer cost finalized at $160.1 billion, the largest government bailout until the 2008 financial crisis' },
 ],
 legalOutcomes: [
 { defendant: 'Charles Keating', charge: 'Racketeering, fraud, conspiracy', outcome: 'Convicted on 73 federal counts; sentenced to 12.5 years; later overturned on technicality, pled to reduced charges' },
 { defendant: 'S&L Executives (DOJ Campaign)', charge: 'Various fraud, embezzlement, and conspiracy charges', outcome: 'Over 1,100 defendants convicted; 839 sentenced to prison' },
 { defendant: 'Neil Bush (Silverado Banking)', charge: 'Breach of fiduciary duty, conflicts of interest', outcome: 'Fined $50,000; barred from banking, cost to taxpayers: $1.3 billion' },
 { defendant: 'Michael Milken', charge: 'Securities fraud, racketeering (related to junk bond sales to S&Ls)', outcome: 'Pled guilty to 6 felonies; $600M fine, 22 months prison; pardoned by Trump in 2020' },
 { defendant: 'David Paul (CenTrust Bank)', charge: 'Fraud, racketeering', outcome: '11 years federal prison for looting CenTrust, bought paintings with depositor money' },
 { defendant: 'Don Dixon (Vernon Savings)', charge: 'Fraud, misapplication of funds', outcome: '5 years prison; Vernon S&L cost taxpayers $1.3 billion' },
 { defendant: 'Keating Five Senators', charge: 'Senate Ethics investigation for improper intervention', outcome: 'Cranston reprimanded; Glenn and McCain cleared of impropriety; DeConcini and Riegle criticized' },
 { defendant: 'Drexel Burnham Lambert', charge: 'Securities fraud, market manipulation', outcome: 'Firm collapsed; $650 million in fines and restitution' },
 ],
 charges: [
 { statute: '18 U.S.C. § 1344: Bank Fraud', description: 'S&L executives used federally insured institutions to execute fraudulent schemes', count: 'Central charge in over 1,100 convictions' },
 { statute: '18 U.S.C. § 1962: RICO', description: 'Pattern of racketeering activity through S&L looting operations', count: 'Charged against Keating and other major defendants' },
 { statute: '18 U.S.C. § 656: Theft, Embezzlement by Bank Officer', description: 'S&L executives embezzled depositor funds for personal enrichment', count: 'Hundreds of charges across the crisis' },
 { statute: '18 U.S.C. § 1014: False Statements to Financial Institutions', description: 'Fraudulent loan applications and appraisals used to justify speculative investments', count: 'Common charge in S&L fraud cases' },
 { statute: '18 U.S.C. § 371: Conspiracy to Defraud the United States', description: 'Coordinated schemes between S&L insiders, developers, and appraisers to loot thrifts', count: 'Multiple conspiracy rings prosecuted' },
 { statute: '15 U.S.C. § 78j: Securities Fraud', description: 'Sale of unregistered and fraudulent securities (junk bonds) to S&L institutions and customers', count: 'Milken, Drexel Burnham, and others prosecuted' },
 { statute: '18 U.S.C. § 1341: Mail Fraud', description: 'Using U.S. mail to solicit investments in fraudulent S&L-backed securities', count: 'Multiple counts in Lincoln Savings case' },
 { statute: '12 U.S.C. § 1818: Regulatory Violations (National Housing Act)', description: 'Systematic violations of S&L operating regulations and capital requirements', count: 'Basis for regulatory seizure of hundreds of thrifts' },
 ],
 coverup: [
 'The Reagan administration\'s deregulation of S&Ls was aggressively lobbied for by the industry itself, thrift executives donated millions to politicians who then removed the safeguards designed to protect depositors',
 'When FHLBB Chairman Edwin Gray tried to crack down on fraud, the White House and Congress blocked his enforcement budget, effectively defunding the cops on the beat at the request of the criminals',
 'The "Keating Five"- five U.S. senators, directly intervened with regulators to stop the examination of Lincoln Savings, delaying its closure by two years and increasing taxpayer losses by an estimated $2 billion',
 'Charles Keating sold $250 million in uninsured bonds to elderly customers at Lincoln Savings branches, with employees trained to tell them the bonds were"just as safe as deposits"- they lost everything',
 'Neil Bush, son of the sitting Vice President, approved $100 million in Silverado Banking loans to his own business partners without disclosing the conflicts, he was fined just $50,000 for a $1.3 billion failure',
 'The practice of"regulatory forbearance"- allowing insolvent S&Ls to continue operating, was a deliberate policy choice that massively increased the final cost of the crisis, as zombie thrifts made increasingly desperate bets',
 'Many S&L executives engaged in"land flips"- selling the same property back and forth at inflated prices to create artificial profits, then using those fictional gains to pay themselves bonuses',
 'Despite over 1,100 criminal convictions, no major politician faced criminal charges for their role in enabling the crisis through deregulation and regulatory interference',
 'The lessons of the S&L crisis were systematically ignored: many of the same deregulatory policies were later applied to investment banks, directly contributing to the 2008 financial crisis',
 ],
 sources: [
 { title: 'FDIC, The S&L Crisis: A Chrono-Bibliography', url: 'https://www.fdic.gov/bank/historical/sandl/', date: 'Archive' },
 { title: 'The Best Way to Rob a Bank Is to Own One, William K. Black', url: 'https://utpress.utexas.edu/9780292721395/', date: '2005' },
 { title: 'GAO, Financial Audit: Resolution Trust Corporation\'s 1995 and 1994 Financial Statements', url: 'https://www.gao.gov/products/aimd-96-123', date: '1996-07' },
 { title: 'Senate Ethics Committee, Keating Five Investigation Report', url: 'https://www.congress.gov/102/crpt/srpt223/CRPT-102srpt223.htm', date: '1991-11' },
 { title: 'FIRREA, Financial Institutions Reform, Recovery, and Enforcement Act of 1989', url: 'https://www.congress.gov/bill/101st-congress/house-bill/1278', date: '1989-08-09' },
 { title: 'Inside Job: The Looting of America\'s Savings and Loans, Stephen Pizzo', url: 'https://www.penguinrandomhouse.com/books/163461/inside-job-by-stephen-pizzo/', date: '1989' },
 { title: 'DOJ Criminal Division, S&L Prosecution Results', url: 'https://www.justice.gov/archives/jm/criminal-resource-manual-960-savings-and-loan-cases', date: '1993' },
 { title: 'Lincoln Savings and Loan, SEC Historical Documents', url: 'https://www.sec.gov/litigation/complaints/complr17001.htm', date: '1989' },
 ],
};

export default function SavingsAndLoanPage() {
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
