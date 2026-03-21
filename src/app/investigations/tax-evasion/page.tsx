'use client';

import { useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import {
 AlertTriangle,
 Calendar,
 ChevronRight,
 ExternalLink,
 FileText,
 Users,
 Scale,
 Clock,
 DollarSign,
 Building, ShieldAlert} from 'lucide-react';
import GlitchText from '@/components/effects/GlitchText';

const investigationData = {
 title: 'Tax Evasion & Financial Fraud',
 subtitle: '$100+ Million in Evaded Taxes Through Decades of Fraud',
 severity: 'critical' as const,
 status: 'Documented, Ongoing Investigations',
 lastUpdated: 'February 2026',
 summary: `Donald Trump has engaged in tax fraud spanning decades, involving fraudulent valuations, offshore accounts, suspicious deductions, and inheritance schemes. The New York Times obtained decades of tax records revealing Trump received the equivalent of $413 million from his father's real estate empire, much of it through fraud. Congressional investigations, the Panama Papers, and IRS audits have exposed over $100 million in evaded taxes.`,
 
 financialStats: {
 totalEvaded: '$100+ million',
 inheritanceFraud: '$413 million',
 yearsNoIncomeTax: '10+ years',
 auditYears: '15+ years',
 deductionsClaimed: '$70,000 haircut deductions',
 },

 keyFigures: [
 { name: 'Donald Trump', role: 'Principal, Decades of tax fraud and evasion', href: '/entities/individuals/donald-trump' },
 { name: 'Allen Weisselberg', role: 'CFO, Managed fraudulent schemes, convicted twice', href: '/entities/individuals/allen-weisselberg' },
 { name: 'Eric Trump', role: 'Trump Organization, Involved in fraudulent valuations', href: '/entities/individuals/eric-trump' },
 { name: 'Donald Trump Jr.', role: 'Trump Organization, Involved in fraudulent valuations', href: '/entities/individuals/donald-trump-jr' },
 ],

 fraudSchemes: [
 {
 scheme: 'Fred Trump Inheritance Fraud',
 amount: '$413+ million',
 details: [
 'Created fake corporation "All County Building Supply"to siphon money',
 'Dramatically undervalued properties to minimize estate taxes',
 'Properties worth $900M+ valued at $41M for tax purposes',
 'Transferred wealth through padded invoices and phantom consulting fees',
 'Avoided $500+ million in gift/estate taxes',
 ],
 },
 {
 scheme: 'Property Valuation Fraud',
 amount: 'Hundreds of millions',
 details: [
 'Inflated values to banks for loans, deflated for taxes',
 'Trump Tower triplex claimed as 30,000 sq ft (actually 10,996)',
 'Mar-a-Lago valued at $739M to banks, $18M for taxes',
 'Seven Springs estate: $291M claim vs $56M appraisal',
 'New York civil fraud judgment: $454 million',
 ],
 },
 {
 scheme: 'Business Loss Deductions',
 amount: '$1.17 billion claimed',
 details: [
 'Claimed $1.17 billion in losses (1985-1994)',
 'Paid no federal income tax in 10 of 15 years (2000-2015)',
 'Paid only $750 in income tax in 2016 and 2017',
 'Carried forward losses for decades',
 'May have violated IRS loss limitation rules',
 ],
 },
 {
 scheme: 'Dubious Deductions',
 amount: 'Tens of millions',
 details: [
 '$70,000+ deducted for haircuts/styling',
 'Personal expenses claimed as business costs',
 'Family members paid as"consultants"',
 '$26 million deducted for conservation easement at Seven Springs',
 'Private jet costs for personal travel',
 ],
 },
 {
 scheme: 'Offshore Structures',
 amount: 'Unknown (Panama Papers)',
 details: [
 'Multiple shell companies in tax havens',
 'Appeared in Panama Papers leak',
 'Caribbean and European entities',
 'Used to hide income and avoid reporting',
 'Connected to Deutsche Bank financing',
 ],
 },
 ],

 timeline: [
 { date: '1968-2018', event: '50 years of documented tax avoidance schemes begin' },
 { date: '1987', event: 'Fred Trump transfers $15.5M to Donald through casino chip purchase' },
 { date: '1992', event: 'All County Building Supply scam peaks, siphoning millions' },
 { date: '1995', event: 'Claims $915 million loss, used for 18 years of no income tax' },
 { date: '1999', event: 'Fred Trump dies, estate grossly undervalued' },
 { date: '2005-2007', event: 'Massive bank fraud through property overvaluation' },
 { date: '2011', event: 'IRS begins audit of Trump returns (ongoing 15+ years)' },
 { date: '2016', event: 'Trump pays only $750 in federal income tax' },
 { date: '2017', event: 'Trump pays only $750 in federal income tax again' },
 { date: '2018', event: 'NY Times publishes massive tax fraud investigation' },
 { date: '2020', event: 'Supreme Court allows Manhattan DA to obtain tax records' },
 { date: '2022', event: 'NY AG files $250M civil fraud lawsuit' },
 { date: '2022', event: 'Allen Weisselberg convicted of tax fraud' },
 { date: '2022', event: 'Trump Organization convicted of tax fraud' },
 { date: '2023', event: 'Congressional committee releases Trump tax returns' },
 { date: '2024', event: 'New York civil fraud judgment: $454 million' },
 { date: '2024', event: 'Weisselberg convicted of perjury, returns to prison' },
 ],

 keyFindings: [
 { finding: 'Paid only $750 in federal income tax in 2016 and 2017', source: 'New York Times' },
 { finding: 'Paid no income tax in 10 of 15 years examined', source: 'NY Times Tax Investigation' },
 { finding: 'Received $413 million from father through fraudulent schemes', source: 'NY Times Investigation' },
 { finding: 'IRS audit ongoing for 15+ years with no resolution', source: 'Congressional Release' },
 { finding: 'Claimed $70,000+ in hair styling as business expense', source: 'Tax Records' },
 { finding: 'Valued properties differently to banks vs. tax authorities', source: 'NY AG Investigation' },
 { finding: 'Mar-a-Lago valued at $739M for loans, $18M for taxes', source: 'NY Civil Fraud Trial' },
 { finding: 'Conservation easement deduction of $26M being investigated', source: 'NY AG' },
 ],

 civilFraudCase: {
 defendant: 'Trump Organization, Donald Trump, Eric Trump, Donald Trump Jr.',
 plaintiff: 'New York Attorney General Letitia James',
 allegations: 'Persistent and repeated fraud in property valuations',
 judgment: '$454 million (with interest)',
 penalties: [
 'Trump barred from running NY business for 3 years',
 'Sons barred for 2 years',
 '$364 million in disgorgement',
 '$90+ million in prejudgment interest',
 ],
 },

 legalOutcomes: [
 { defendant: 'Trump Organization (criminal)', charge: 'Tax fraud scheme spanning 15 years involving unreported compensation', outcome: 'Convicted on all 17 counts Dec 2022; fined $1.6 million (maximum allowed)' },
 { defendant: 'Allen Weisselberg (CFO)', charge: 'Grand larceny, tax fraud, falsifying business records', outcome: 'Pleaded guilty Aug 2022; sentenced to 5 months at Rikers; later sentenced to 5 months again for perjury in civil case' },
 { defendant: 'Donald Trump (NY civil fraud)', charge: 'Persistent and repeated fraud in property valuations spanning decades', outcome: 'Judge Engoron ruled Trump liable for fraud; ordered $454 million in disgorgement plus interest (Feb 2024)' },
 { defendant: 'Donald Trump Jr., Eric Trump', charge: 'Participation in fraudulent financial statements and business valuations', outcome: 'Barred from serving as officers of any NY corporation for 2 years; joint liability in civil fraud judgment' },
 { defendant: 'Trump Organization (tax returns)', charge: 'Systematic undervaluation of assets to reduce tax liability while overvaluing for loan purposes', outcome: 'NY Times investigation revealed $413 million inheritance through fraudulent tax schemes; IRS audit ongoing' },
 { defendant: 'Fred Trump estate scheme', charge: 'Creation of sham corporation (All County Building Supply) to siphon money and evade gift/estate taxes', outcome: 'NY Times documented fraudulent transfers; statute of limitations expired on most potential criminal charges' },
 ],
 charges: [
 { statute: 'N.Y. Penal Law \u00a7 175.10', description: 'Falsifying business records in the first degree, systematic inflation and deflation of asset values on financial statements', count: '17 counts (Trump Org criminal conviction)' },
 { statute: '26 U.S.C. \u00a7 7201', description: 'Attempted tax evasion, underreporting income and overreporting deductions spanning decades', count: 'Pattern involving $100+ million in evaded taxes' },
 { statute: '18 U.S.C. \u00a7 1014', description: 'Bank fraud, inflating asset values on financial statements submitted to Deutsche Bank and other lenders', count: 'Multiple loan applications over 10+ years' },
 { statute: '26 U.S.C. \u00a7 7206', description: 'Filing fraudulent tax returns with the IRS including false deductions and unreported income', count: 'Annual filings across multiple decades' },
 { statute: 'N.Y. Exec. Law \u00a7 63(12)', description: 'Persistent fraud in conducting business, the basis for NY AG Letitia James\'s civil fraud lawsuit', count: '1 count covering decades of fraudulent conduct' },
 { statute: '18 U.S.C. \u00a7 1341', description: 'Mail fraud, using the mail system to transmit fraudulent financial statements to banks and insurers', count: 'Multiple instances tied to loan applications and insurance claims' },
 { statute: '26 U.S.C. \u00a7 2501', description: 'Gift tax evasion through the All County Building Supply scheme used to transfer $413 million from Fred Trump\'s estate', count: 'Systematic evasion spanning 1990s-2000s' },
 ],
 coverup: [
 'Trump fought for years to prevent the release of his tax returns, breaking a 40-year presidential tradition and taking the case to the Supreme Court twice to block Congressional and prosecutorial access.',
 'The Trump Organization maintained two sets of books (inflating property values when seeking loans and deflating them when paying taxes) a fact documented by both Michael Cohen\'s testimony and the NY civil fraud trial.',
 'Allen Weisselberg, Trump\'s CFO for decades, was convicted of perjury during the civil fraud trial for lying about his knowledge of the fraudulent valuation scheme, suggesting deeper knowledge he refused to disclose.',
 'The All County Building Supply scheme, a shell company created to siphon money from Fred Trump\'s empire to his children while evading gift and estate taxes, operated for years before being exposed by the NY Times in 2018.',
 'Trump claimed a $72.9 million tax refund in 2010 that triggered an ongoing IRS audit; the legitimacy of this refund, which stemmed from massive reported losses, remains unresolved.',
 'When the NY Times published its Pulitzer Prize-winning investigation revealing Trump\'s tax fraud in 2018, the Trump Organization\'s lawyer dismissed it as"100% false"without addressing any specific findings.',
 'Deutsche Bank continued lending to Trump despite internal compliance warnings because of the profit Trump\'s accounts generated, enabling years of fraudulent financial statements to go unchallenged.',
 'Trump inflated his net worth by as much as $2.2 billion on financial statements, per the NY civil fraud ruling, using fabricated valuations like claiming his Trump Tower penthouse was 30,000 sq ft when it was actually 10,996 sq ft.',
 ],

 sources: [
 { title: 'NY Times: Trump Tax Investigation', url: 'https://www.nytimes.com/interactive/2018/10/02/us/politics/donald-trump-tax-schemes-fred-trump.html', type: 'Investigation' },
 { title: 'NY Times: 18 Years of Tax Returns', url: 'https://www.nytimes.com/interactive/2020/09/27/us/donald-trump-taxes.html', type: 'Tax Records' },
 { title: 'NY Civil Fraud Judgment', url: 'https://www.documentcloud.org/documents/24425172-trump-fraud-ruling', type: 'Court Document' },
 { title: 'Panama Papers Database', url: 'https://offshoreleaks.icij.org/', type: 'Leaked Documents' },
 { title: 'Trump Organization Criminal Conviction', url: 'https://manhattanda.org/', type: 'Criminal Case' },
 ],
};

const severityColors = {
 critical: 'bg-zinc-800 text-zinc-400 border-zinc-800',
 high: 'bg-zinc-900 text-zinc-500 border-zinc-800',
 medium: 'bg-zinc-900 text-zinc-300 border-zinc-700',
 low: 'bg-zinc-800 text-zinc-400 border-zinc-800',
};

export default function TaxEvasionPage() {
 const [expandedScheme, setExpandedScheme] = useState<string | null>('Fred Trump Inheritance Fraud');

 return (
 <div className="min-h-screen text-white">
 {/* Header */}
 <div className="border-b border-[rgba(255,255,255,0.15)]">
 <div className="max-w-6xl mx-auto px-6 py-8">
 <nav className="flex items-center gap-2 text-sm text-zinc-500 mb-6">
 <Link href="/"className="hover:text-white transition-colors">Home</Link>
 <ChevronRight className="w-4 h-4"/>
 <Link href="/investigations"className="hover:text-white transition-colors">Investigations</Link>
 <ChevronRight className="w-4 h-4"/>
 <span className="text-zinc-300">Tax Evasion</span>
 </nav>

 <div className="flex items-center gap-4 mb-4">
 <span className={`px-3 py-1 text-xs font-bold uppercase border ${severityColors[investigationData.severity]}`}>
 {investigationData.severity} SEVERITY
 </span>
 <span className="px-3 py-1 text-xs font-medium bg-[#0d0d0d] text-zinc-300 border border-[rgba(255,255,255,0.18)]">
 {investigationData.status}
 </span>
 </div>

 <h1 className="text-4xl md:text-5xl font-black mb-4">
 <GlitchText>{investigationData.title}</GlitchText>
 </h1>
 <p className="text-xl text-zinc-400 mb-4">{investigationData.subtitle}</p>
 
 <div className="flex items-center gap-4 text-sm text-zinc-500">
 <span className="flex items-center gap-2">
 <Clock className="w-4 h-4"/>
 Updated: {investigationData.lastUpdated}
 </span>
 </div>
 </div>
 </div>

 <div className="max-w-6xl mx-auto px-6 py-8">
 {/* Financial Stats */}
 <motion.section
 initial={{ opacity: 0, y: 20 }}
 animate={{ opacity: 1, y: 0 }}
 className="mb-12"
 >
 <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
 <div className="glass-card p-4 text-center border-l-4 border-zinc-700">
 <DollarSign className="w-6 h-6 text-zinc-300 mx-auto mb-2"/>
 <p className="text-xl font-black text-zinc-300">{investigationData.financialStats.totalEvaded}</p>
 <p className="text-xs text-zinc-400">Total Evaded</p>
 </div>
 <div className="glass-card p-4 text-center border-l-4 border-zinc-700">
 <Building className="w-6 h-6 text-zinc-300 mx-auto mb-2"/>
 <p className="text-xl font-black text-zinc-300">{investigationData.financialStats.inheritanceFraud}</p>
 <p className="text-xs text-zinc-400">Inheritance Fraud</p>
 </div>
 <div className="glass-card p-4 text-center border-l-4 border-zinc-800">
 <Calendar className="w-6 h-6 text-zinc-600 mx-auto mb-2"/>
 <p className="text-xl font-black text-zinc-600">{investigationData.financialStats.yearsNoIncomeTax}</p>
 <p className="text-xs text-zinc-400">Years No Tax</p>
 </div>
 <div className="glass-card p-4 text-center border-l-4 border-zinc-800">
 <Scale className="w-6 h-6 text-zinc-600 mx-auto mb-2"/>
 <p className="text-xl font-black text-zinc-600">{investigationData.financialStats.auditYears}</p>
 <p className="text-xs text-zinc-400">Under Audit</p>
 </div>
 <div className="glass-card p-4 text-center border-l-4 border-zinc-500">
 <AlertTriangle className="w-6 h-6 text-zinc-400 mx-auto mb-2"/>
 <p className="text-sm font-black text-zinc-400">{investigationData.financialStats.deductionsClaimed}</p>
 <p className="text-xs text-zinc-400">Haircut Deductions</p>
 </div>
 </div>
 </motion.section>

 {/* Summary */}
 <motion.section
 initial={{ opacity: 0, y: 20 }}
 animate={{ opacity: 1, y: 0 }}
 transition={{ delay: 0.1 }}
 className="glass-card p-6 mb-8"
 >
 <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
 <FileText className="w-5 h-5 text-zinc-300"/>
 Executive Summary
 </h2>
 <p className="text-zinc-300 leading-relaxed">{investigationData.summary}</p>
 </motion.section>

 {/* Key Figures */}
 <motion.section
 initial={{ opacity: 0, y: 20 }}
 animate={{ opacity: 1, y: 0 }}
 transition={{ delay: 0.15 }}
 className="glass-card p-6 mb-8"
 >
 <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
 <Users className="w-5 h-5 text-zinc-300"/>
 Key Figures
 </h2>
 <div className="space-y-3">
 {investigationData.keyFigures.map((figure, index) => (
 <Link
 key={index}
 href={figure.href}
 className="flex items-center justify-between p-4 bg-[#0a0a0a] border border-[rgba(255,255,255,0.15)] hover:border-zinc-600/50 transition-all"
 >
 <div>
 <span className="font-medium text-zinc-400">{figure.name}</span>
 <p className="text-sm text-zinc-500">{figure.role}</p>
 </div>
 <ExternalLink className="w-4 h-4 text-zinc-600"/>
 </Link>
 ))}
 </div>
 </motion.section>

 {/* NY Civil Fraud Case */}
 <motion.section
 initial={{ opacity: 0, y: 20 }}
 animate={{ opacity: 1, y: 0 }}
 transition={{ delay: 0.2 }}
 className="glass-card p-6 mb-8 border-l-4 border-zinc-700"
 >
 <h2 className="text-xl font-bold mb-4">New York Civil Fraud Judgment</h2>
 <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.15 }} className="glass-card p-6 mb-8 border-l-4 border-zinc-700">
 <h2 className="text-xl font-bold glass-text uppercase tracking-wider mb-4 flex items-center gap-2"><ShieldAlert className="w-5 h-5 text-zinc-300"/>The Cover-Up</h2>
 <div className="space-y-3">{investigationData.coverup.map((item, idx) => (<div key={idx} className="p-3 bg-zinc-900 border border-zinc-800"><p className="text-sm text-zinc-300">{item}</p></div>))}</div>
 </motion.div>

 <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
 <div>
 <p className="text-xs text-zinc-500 uppercase">Defendants</p>
 <p className="text-zinc-200">{investigationData.civilFraudCase.defendant}</p>
 </div>
 <div>
 <p className="text-xs text-zinc-500 uppercase">Judgment Amount</p>
 <p className="text-3xl font-black text-zinc-300">{investigationData.civilFraudCase.judgment}</p>
 </div>
 </div>
 <div>
 <p className="text-xs text-zinc-500 uppercase mb-2">Penalties</p>
 <ul className="space-y-1">
 {investigationData.civilFraudCase.penalties.map((penalty, i) => (
 <li key={i} className="flex items-start gap-2 text-sm text-zinc-300">
 <span className="text-zinc-300">•</span>
 {penalty}
 </li>
 ))}
 </ul>
 </div>
 </motion.section>

 {/* Fraud Schemes */}
 <motion.section
 initial={{ opacity: 0, y: 20 }}
 animate={{ opacity: 1, y: 0 }}
 transition={{ delay: 0.25 }}
 className="glass-card p-6 mb-8"
 >
 <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
 <AlertTriangle className="w-5 h-5 text-zinc-300"/>
 Documented Fraud Schemes
 </h2>
 <div className="space-y-4">
 {investigationData.fraudSchemes.map((scheme, index) => (
 <div key={index} className="border border-[rgba(255,255,255,0.15)]">
 <button
 onClick={() => setExpandedScheme(expandedScheme === scheme.scheme ? null : scheme.scheme)}
 className="w-full flex items-center justify-between p-4 hover:bg-[#0a0a0a] transition-colors"
 >
 <div className="text-left">
 <span className="font-bold text-zinc-400">{scheme.scheme}</span>
 <p className="text-sm text-zinc-500">Amount: {scheme.amount}</p>
 </div>
 <ChevronRight className={`w-5 h-5 transition-transform ${expandedScheme === scheme.scheme ? 'rotate-90' : ''}`} />
 </button>
 {expandedScheme === scheme.scheme && (
 <div className="px-4 pb-4">
 <ul className="space-y-2">
 {scheme.details.map((detail, i) => (
 <li key={i} className="flex items-start gap-2 text-sm text-zinc-300">
 <span className="text-zinc-300 mt-1">•</span>
 {detail}
 </li>
 ))}
 </ul>
 </div>
 )}
 </div>
 ))}
 </div>
 </motion.section>

 {/* Key Findings */}
 <motion.section
 initial={{ opacity: 0, y: 20 }}
 animate={{ opacity: 1, y: 0 }}
 transition={{ delay: 0.3 }}
 className="glass-card p-6 mb-8"
 >
 <h2 className="text-xl font-bold mb-4">Key Findings</h2>
 <div className="space-y-3">
 {investigationData.keyFindings.map((item, index) => (
 <div key={index} className="flex items-start gap-3 p-3 bg-[#0a0a0a] border border-[rgba(255,255,255,0.15)]">
 <span className="text-zinc-300 font-bold">{index + 1}.</span>
 <div>
 <p className="text-zinc-200">{item.finding}</p>
 <p className="text-xs text-zinc-500 mt-1">Source: {item.source}</p>
 </div>
 </div>
 ))}
 </div>
 </motion.section>

 {/* Timeline */}
 <motion.section
 initial={{ opacity: 0, y: 20 }}
 animate={{ opacity: 1, y: 0 }}
 transition={{ delay: 0.35 }}
 className="glass-card p-6 mb-8"
 >
 <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
 <Calendar className="w-5 h-5 text-zinc-300"/>
 Timeline
 </h2>
 <div className="space-y-4 max-h-96 overflow-y-auto">
 {investigationData.timeline.map((item, index) => (
 <div key={index} className="relative pl-4 border-l-2 border-[rgba(255,255,255,0.15)]">
 <div className="absolute -left-[5px] top-0 w-2 h-2 bg-zinc-600"/>
 <p className="text-xs text-zinc-300 font-mono">{item.date}</p>
 <p className="text-sm text-zinc-300">{item.event}</p>
 </div>
 ))}
 </div>
 </motion.section>

 
 <motion.section initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5 }} className="glass-card p-6 mb-8">
 <h2 className="text-xl font-bold glass-text uppercase tracking-wider mb-4 flex items-center gap-2"><Scale className="w-5 h-5 text-zinc-300"/>Legal Outcomes</h2>
 <div className="space-y-3">{investigationData.legalOutcomes.map((item, idx) => (<div key={idx} className="p-3 bg-[#0a0a0a] border border-[rgba(255,255,255,0.15)]"><p className="font-bold glass-text text-sm">{item.defendant}</p><p className="text-xs text-zinc-400 mt-1">{item.charge}</p><p className="text-xs text-zinc-400 mt-1">{item.outcome}</p></div>))}</div>
 </motion.section>
 
 <motion.section initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.45 }} className="glass-card p-6 mb-8">
 <h2 className="text-xl font-bold glass-text uppercase tracking-wider mb-4 flex items-center gap-2"><Scale className="w-5 h-5 text-zinc-300"/>Applicable Charges &amp; Statutes</h2>
 <div className="space-y-3">{investigationData.charges.map((charge, idx) => (<div key={idx} className="p-4 bg-[#0a0a0a] border border-[rgba(255,255,255,0.15)]"><p className="font-bold text-zinc-400 text-sm font-mono">{charge.statute}</p><p className="text-sm text-zinc-300 mt-1">{charge.description}</p><p className="text-xs text-zinc-400 mt-1">{charge.count}</p></div>))}</div>
 </motion.section>
 {/* Sources */}
 <motion.section
 initial={{ opacity: 0, y: 20 }}
 animate={{ opacity: 1, y: 0 }}
 transition={{ delay: 0.4 }}
 className="glass-card p-6"
 >
 <h2 className="text-xl font-bold mb-4">Sources & Documentation</h2>
 <div className="space-y-2">
 {investigationData.sources.map((source, index) => (
 <a
 key={index}
 href={source.url}
 target="_blank"
 rel="noopener noreferrer"
 className="flex items-center justify-between p-3 bg-[#0a0a0a] hover:bg-[#0d0d0d] border border-[rgba(255,255,255,0.15)] transition-colors"
 >
 <div>
 <span className="text-zinc-200">{source.title}</span>
 <span className="block text-xs text-zinc-500">{source.type}</span>
 </div>
 <ExternalLink className="w-4 h-4 text-zinc-600"/>
 </a>
 ))}
 </div>
 </motion.section>
 </div>
 </div>
 );
}
