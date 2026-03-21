'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowLeft, AlertTriangle, Users, Calendar, FileText, ExternalLink, Scale, ShieldAlert, Skull } from 'lucide-react';
import GlitchText from '@/components/effects/GlitchText';

const investigation = {
 title: 'The Student Debt Crisis',
 subtitle: '$1.77 Trillion in Chains, How America Turned Higher Education Into a Predatory Debt Trap',
 severity: 'critical',
 status: 'ONGOING, CRISIS DEEPENING',
 summary: 'The United States has engineered a $1.77 trillion student debt crisis that traps 45 million borrowers in financial servitude. College costs have increased 1,200% since 1980; eight times faster than wages. For-profit colleges like DeVry, ITT Tech, and Corinthian Colleges ran predatory scams targeting veterans and low-income students, collecting federal financial aid while delivering worthless degrees. Senator Joe Biden authored the 2005 bankruptcy bill that made student loans virtually impossible to discharge in bankruptcy, a protection originally designed for the benefit of lender Sallie Mae (now Navient), which has been sued by multiple state attorneys general for predatory practices. The crisis disproportionately burdens Black borrowers, who carry 25% more debt than white borrowers. Despite campaign promises, meaningful relief has been blocked by courts and congressional opposition, while interest continues to compound.',
 keyFigures: [
 { name: 'Joe Biden', role: 'As Senator, authored 2005 bankruptcy bill making student loans non-dischargeable; as President, promised but struggled to deliver relief', href: '/entities/individuals/joe-biden', status: 'Active - 46th President' },
 { name: 'Betsy DeVos', role: 'Trump Education Secretary who rolled back Obama-era for-profit college regulations and borrower defense rules', href: '/entities/individuals/betsy-devos', status: 'Active' },
 { name: 'Jack Remondi', role: 'Navient CEO who oversaw company as it was sued by CFPB and multiple states for predatory lending practices', href: '/entities/individuals/jack-remondi', status: 'Active' },
 { name: 'Albert Lord', role: 'Sallie Mae CEO who pushed for privatization and making student loans non-dischargeable in bankruptcy', href: '/entities/individuals/albert-lord', status: 'Active' },
 { name: 'John Sperling', role: 'Founder of University of Phoenix, largest for-profit college in US; pioneered predatory enrollment practices', href: '/entities/individuals/john-sperling', status: 'Deceased (2014)' },
 { name: 'Daniel Hamburger', role: 'DeVry Education Group CEO during period of fraudulent job placement claims', href: '/entities/individuals/daniel-hamburger', status: 'Active' },
 { name: 'Tom Harkin', role: 'Senator who led investigation into for-profit colleges; 2012 Senate HELP Committee report exposed industry fraud', href: '/entities/individuals/tom-harkin', status: 'Retired' },
 { name: 'Arne Duncan', role: 'Obama Education Secretary who implemented gainful employment rule to hold for-profit colleges accountable', href: '/entities/individuals/arne-duncan', status: 'Active' },
 { name: 'Chuck Grassley', role: 'Senator who championed the 2005 bankruptcy bill that trapped borrowers in non-dischargeable student debt', href: '/entities/individuals/chuck-grassley', status: 'Active' },
 { name: 'Dick Durbin', role: 'Senator who has fought for decades to restore bankruptcy protections for student loan borrowers', href: '/entities/individuals/dick-durbin', status: 'Active' },
 { name: 'Elizabeth Warren', role: 'Senator and former professor who has led legislative efforts for student debt cancellation', href: '/entities/individuals/elizabeth-warren', status: 'Active' },
 { name: 'Miguel Cardona', role: 'Biden Education Secretary who oversaw $160B+ in student loan relief through various programs', href: '/entities/individuals/miguel-cardona', status: 'Active' },
 ],
 timeline: [
 { date: '1965', event: 'Higher Education Act establishes federal student loan program; college is still affordable for most families' },
 { date: '1972', event: 'Sallie Mae created as government-sponsored enterprise to service federal student loans' },
 { date: '1978', event: 'Bankruptcy Amendments exclude federally guaranteed student loans from discharge in bankruptcy' },
 { date: '1980', event: 'Average annual tuition at public university: $2,100 (inflation-adjusted $7,600); state funding covers most costs' },
 { date: '1992', event: 'For-profit colleges gain access to federal financial aid; enrollment and fraud begin explosive growth' },
 { date: '1996', event: 'Congress tightens bankruptcy restrictions on private student loans; industry lobbying intensifies' },
 { date: '2004', event: 'Sallie Mae privatized; begins aggressive lending practices freed from government oversight' },
 { date: '2005', event: 'Biden co-sponsors Bankruptcy Abuse Prevention Act making private student loans non-dischargeable, Sallie Mae\'s top lobbying priority' },
 { date: '2010', event: 'Total student debt surpasses $800 billion, exceeding credit card debt for first time in US history' },
 { date: '2012', event: 'Senate HELP Committee report (Harkin Report) finds for-profit colleges spend more on marketing than teaching; defraud students systematically' },
 { date: '2015', event: 'Corinthian Colleges collapses after DOE finds widespread fraud; 16,000 students left with worthless degrees and crushing debt' },
 { date: '2016', event: 'ITT Tech shuts down amid fraud investigations; 35,000 students stranded; taxpayers lose $500M' },
 { date: '2017', event: 'Betsy DeVos becomes Education Secretary; immediately begins rolling back Obama-era for-profit college regulations' },
 { date: '2017', event: 'DeVos delays borrower defense rule that would have provided relief to defrauded students' },
 { date: '2020', event: 'Total student debt surpasses $1.7 trillion; pandemic pause provides temporary relief' },
 { date: '2022', event: 'Biden announces $10,000-$20,000 in student debt cancellation; blocked by Supreme Court in Biden v. Nebraska' },
 { date: 'June 2023', event: 'Supreme Court strikes down Biden broad cancellation plan in 6-3 ruling; 43 million borrowers denied relief' },
 { date: '2023', event: 'Biden administration uses alternative legal authorities to cancel $160B+ for specific groups: PSLF, defrauded borrowers, IDR adjustments' },
 { date: '2024', event: 'SAVE Plan (income-driven repayment) partially blocked by courts; legal battles continue' },
 { date: '2025', event: 'Student debt exceeds $1.77 trillion; 45 million borrowers; average borrower owes $37,850' },
 ],
 legalOutcomes: [
 { defendant: 'Navient (formerly Sallie Mae)', charge: 'Predatory lending, steering borrowers into forbearance instead of affordable repayment plans, misleading borrowers', outcome: '$1.85 billion settlement with 39 state AGs in 2022; $95M in restitution; cancelled $1.7B in debt for 66,000 borrowers' },
 { defendant: 'Corinthian Colleges', charge: 'Systematic fraud, inflating job placement rates, fabricating graduation rates, predatory recruitment', outcome: 'Shut down 2015; DOE approved $5.8 billion in relief for 560,000 defrauded borrowers' },
 { defendant: 'ITT Tech', charge: 'Fraudulent job placement claims, deceptive recruitment of students', outcome: 'Shut down 2016; DOE approved $3.9 billion in debt relief for defrauded students' },
 { defendant: 'DeVry University', charge: 'Fraudulent advertising claiming 90% of graduates got jobs in their field within 6 months', outcome: 'FTC settlement of $100M in 2016; DOE approved $71.7M in debt relief' },
 { defendant: 'Biden v. Nebraska (2023)', charge: 'Challenge to Biden\'s broad student loan cancellation program', outcome: 'Supreme Court 6-3 struck down cancellation; ruled HEROES Act didn\'t authorize $400B in loan forgiveness' },
 { defendant: 'University of Phoenix', charge: 'Deceptive marketing to military and veteran students; misleading employment claims', outcome: 'FTC $191M settlement in 2019; $37M in direct payments to students' },
 { defendant: 'ECMC Group', charge: 'Aggressive debt collection tactics against student loan borrowers in default', outcome: 'Multiple state AG investigations; some settlements but practices continue' },
 { defendant: 'Biden Administration (SAVE Plan)', charge: 'Legal challenges to income-driven repayment plan', outcome: 'Partially blocked by 8th Circuit injunction in 2024; millions of borrowers left in limbo' },
 ],
 charges: [
 { statute: '20 U.S.C. § 1094: Program Participation Agreement Violations', description: 'For-profit colleges violated federal requirements by making fraudulent job placement claims, engaging in deceptive recruitment, and failing to provide quality education', count: 'Corinthian ($5.8B relief), ITT Tech ($3.9B), DeVry ($71.7M), University of Phoenix ($191M)' },
 { statute: 'FTC Act § 5: Unfair or Deceptive Acts', description: 'For-profit colleges made false and misleading claims about employment outcomes to recruit vulnerable students', count: 'FTC actions against DeVry, University of Phoenix, and multiple other for-profit institutions' },
 { statute: '11 U.S.C. § 523(a)(8): Non-Dischargeability of Student Loans', description: 'The 2005 Bankruptcy Act made both federal and private student loans non-dischargeable except under"undue hardship"- a virtually impossible standard', count: '$1.77 trillion in debt that 45 million borrowers cannot escape even through bankruptcy' },
 { statute: 'Consumer Financial Protection Act, Unfair Lending', description: 'Navient/Sallie Mae steered borrowers into costly forbearance instead of affordable repayment plans, adding billions in unnecessary interest', count: 'CFPB lawsuit resulted in $1.85 billion settlement; millions of borrowers affected' },
 { statute: 'Higher Education Act § 487: Institutional Fraud', description: 'For-profit institutions collected federal financial aid while delivering substandard education and fabricating outcomes', count: 'For-profit colleges enroll 10% of students but account for 50% of loan defaults' },
 { statute: 'Equal Credit Opportunity Act, Discriminatory Lending', description: 'Student loan system disproportionately burdens Black borrowers who carry 25% more debt than white borrowers due to wealth gap', count: 'Black borrowers owe $25,000 more than white borrowers four years after graduation' },
 { statute: 'Anti-Peonage Act: 42 U.S.C. § 1994', description: 'Non-dischargeable student debt functions as a form of debt bondage, trapping borrowers in decades of involuntary servitude to lenders', count: '45 million borrowers; average repayment period extends 20+ years; many will die with student debt' },
 { statute: 'Lobbying Disclosure Act Violations', description: 'Student loan industry spent $100M+ lobbying Congress for non-dischargeability and against borrower protections', count: 'Sallie Mae/Navient was top contributor to Biden, the author of the 2005 bankruptcy bill' },
 ],
 coverup: [
 'Senator Biden received more campaign contributions from the credit and lending industry than almost any other senator while authoring the 2005 bankruptcy bill that made student loans non-dischargeable.',
 'For-profit colleges spent more on marketing and executive compensation than on actual teaching, the Harkin Report found they averaged 23% on instruction vs 42% on marketing and profit.',
 'Sallie Mae (now Navient) deliberately steered borrowers into forbearance (which increases total debt through interest) rather than affordable income-based repayment plans, according to CFPB findings.',
 'Betsy DeVos, Trump\'s Education Secretary, had personal investments in student loan collection companies while making policy that affected borrowers, a direct conflict of interest she never fully resolved.',
 'The"undue hardship"standard for discharging student loans in bankruptcy is so strict that people with terminal cancer, total disability, and destitution have been denied discharge.',
 'For-profit colleges targeted military veterans for their GI Bill benefits through a practice called"the 90/10 loophole"- VA and DOD funds didn\'t count against the 90% federal funding cap.',
 'The student loan industry successfully lobbied to exempt itself from basic consumer protections: no statute of limitations, no refinancing rights, and unlimited wage garnishment powers.',
 'President Biden ran on $10,000 in student debt relief for every borrower but the Supreme Court struck it down; the actual relief delivered has been through narrow, piecemeal programs.',
 'The total cost of the student debt crisis exceeds the GDP of many nations, yet it is framed as an individual responsibility problem rather than a systemic policy failure.',
 ],
 sources: [
 { title: 'Federal Student Loan Portfolio, Federal Student Aid', url: 'https://studentaid.gov/data-center/student/portfolio', date: 'Ongoing' },
 { title: 'For Profit Higher Education: The Failure to Safeguard the Federal Investment, Senate HELP Committee (Harkin Report)', url: 'https://www.help.senate.gov/ranking/newsroom/press/report-for-profit-colleges-a-risky-investment-for-students-and-taxpayers', date: '2012' },
 { title: 'Navient $1.85B Settlement, Attorney General Multistate', url: 'https://www.consumerfinance.gov/enforcement/actions/navient-corporation/', date: 'January 2022' },
 { title: 'Biden v. Nebraska, Supreme Court Opinion', url: 'https://www.supremecourt.gov/opinions/22pdf/22-506_nmip.pdf', date: 'June 2023' },
 { title: 'The Debt Trap: How Student Loans Became a National Catastrophe, Josh Mitchell', url: 'https://www.simonandschuster.com/books/The-Debt-Trap/Josh-Mitchell/9781982104085', date: '2021' },
 { title: 'Biden\'s Role in Making Student Loans Non-Dischargeable, The Intercept', url: 'https://theintercept.com/2020/01/07/joe-biden-student-loans/', date: 'January 2020' },
 { title: 'CFPB Lawsuit Against Navient, Consumer Financial Protection Bureau', url: 'https://www.consumerfinance.gov/about-us/newsroom/cfpb-sues-nations-largest-student-loan-company-navient-failing-borrowers-every-stage-repayment/', date: 'January 2017' },
 { title: 'Corinthian Colleges Fraud, Department of Education', url: 'https://www.ed.gov/news/press-releases/department-education-approves-58-billion-group-discharge-cancel-remaining-loans-560000-former-corinthian-colleges-students', date: 'June 2022' },
 ],
};

export default function StudentDebtCrisisPage() {
 return (
 <div className="min-h-screen pt-20 lg:pt-24 pb-16">
 <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
 <Link href="/investigations"className="inline-flex items-center gap-2 text-zinc-400 hover:text-white transition-colors mb-6 pt-4"><ArrowLeft className="w-4 h-4"/>Back to Investigations</Link>
 <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="border-2 border-zinc-800/60 bg-[rgba(0,6,20,0.90)] p-6 lg:p-8 mb-8">
 <div className="flex items-center gap-3 mb-4"><span className="px-3 py-1 text-xs font-bold uppercase border border-zinc-800 bg-zinc-900 text-zinc-400">{investigation.severity}</span><span className="px-3 py-1 text-xs font-bold uppercase border border-zinc-700 bg-zinc-900 text-zinc-400">{investigation.status}</span></div>
 <h1 className="text-3xl lg:text-4xl font-black glass-text uppercase tracking-wider mb-2"><GlitchText text={investigation.title} /></h1>
 <p className="text-lg text-zinc-300 font-bold mb-4">{investigation.subtitle}</p>
 <p className="text-zinc-400 leading-relaxed">{investigation.summary}</p>
 </motion.div>
 <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.15 }} className="glass-card p-6 mb-8 border-l-4 border-zinc-700">
 <h2 className="text-xl font-bold glass-text uppercase tracking-wider mb-4 flex items-center gap-2"><ShieldAlert className="w-5 h-5 text-zinc-300"/>The Cover-Up</h2>
 <div className="space-y-3">{investigation.coverup.map((item, idx) => (<div key={idx} className="p-3 bg-zinc-900 border border-zinc-800"><p className="text-sm text-zinc-300">{item}</p></div>))}</div>
 </motion.div>
 <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
 <div className="lg:col-span-2 space-y-8">
 <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }} className="glass-card p-6">
 <h2 className="text-xl font-bold glass-text uppercase tracking-wider mb-4 flex items-center gap-2"><Users className="w-5 h-5 text-zinc-300"/>Key Figures</h2>
 <div className="space-y-3">{investigation.keyFigures.map((figure, idx) => (<div key={idx} className="flex items-start justify-between p-3 bg-[#0a0a0a] border border-[rgba(255,255,255,0.15)]"><div className="flex-1">{figure.href ? (<Link href={figure.href} className="font-bold text-zinc-400 hover:text-white transition-colors">{figure.name}</Link>) : (<span className="font-bold glass-text">{figure.name}</span>)}<p className="text-sm text-zinc-400 mt-1">{figure.role}</p></div><span className="text-xs px-2 py-1 bg-[#0d0d0d] text-zinc-400 border border-[rgba(255,255,255,0.18)] whitespace-nowrap ml-2">{figure.status}</span></div>))}</div>
 </motion.div>
 <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }} className="glass-card p-6">
 <h2 className="text-xl font-bold glass-text uppercase tracking-wider mb-4 flex items-center gap-2"><Scale className="w-5 h-5 text-zinc-300"/>Applicable Charges &amp; Statutes</h2>
 <div className="space-y-3">{investigation.charges.map((charge, idx) => (<div key={idx} className="p-4 bg-[#0a0a0a] border border-[rgba(255,255,255,0.15)]"><p className="font-bold text-zinc-400 text-sm font-mono">{charge.statute}</p><p className="text-sm text-zinc-300 mt-1">{charge.description}</p><p className="text-xs text-zinc-400 mt-1">{charge.count}</p></div>))}</div>
 </motion.div>
 </div>
 <div className="space-y-6">
 <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} className="glass-card p-6">
 <h3 className="text-lg font-bold glass-text uppercase tracking-wider mb-4 flex items-center gap-2"><Calendar className="w-4 h-4 text-zinc-300"/>Timeline</h3>
 <div className="space-y-4">{investigation.timeline.map((item, idx) => (<div key={idx} className="relative pl-4 border-l-2 border-[rgba(255,255,255,0.15)]"><div className="absolute -left-[5px] top-0 w-2 h-2 bg-zinc-600"/><p className="text-xs text-zinc-300 font-mono">{item.date}</p><p className="text-sm text-zinc-300">{item.event}</p></div>))}</div>
 </motion.div>
 <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.1 }} className="glass-card p-6">
 <h3 className="text-lg font-bold glass-text uppercase tracking-wider mb-4 flex items-center gap-2"><Scale className="w-5 h-5 text-zinc-300"/>Legal Outcomes</h3>
 <div className="space-y-3">{investigation.legalOutcomes.map((item, idx) => (<div key={idx} className="p-3 bg-[#0a0a0a] border border-[rgba(255,255,255,0.15)]"><p className="font-bold glass-text text-sm">{item.defendant}</p><p className="text-xs text-zinc-400 mt-1">{item.charge}</p><p className="text-xs text-zinc-400 mt-1">{item.outcome}</p></div>))}</div>
 </motion.div>
 <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.2 }} className="glass-card p-6">
 <h3 className="text-lg font-bold glass-text uppercase tracking-wider mb-4">Sources</h3>
 <div className="space-y-2">{investigation.sources.map((source, idx) => (<a key={idx} href={source.url} target="_blank"rel="noopener noreferrer"className="flex items-start gap-2 p-2 text-sm text-zinc-400 hover:text-white hover:bg-[#0a0a0a] transition-colors"><ExternalLink className="w-4 h-4 mt-0.5 flex-shrink-0"/><div><span>{source.title}</span><span className="text-zinc-600 ml-2">({source.date})</span></div></a>))}</div>
 </motion.div>
 </div>
 </div>
 </div>
 </div>
 );
}
