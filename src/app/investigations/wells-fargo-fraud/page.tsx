'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowLeft, AlertTriangle, Users, Calendar, FileText, ExternalLink, Scale, ShieldAlert, Skull } from 'lucide-react';
import GlitchText from '@/components/effects/GlitchText';

const investigation = {
 title: 'Wells Fargo Fake Accounts Scandal',
 subtitle: '3.5 Million Fake Accounts, Whistleblowers Fired, Executives Rewarded: The Bank That Defrauded Its Own Customers',
 severity: 'critical',
 status: 'FINED - $3B+',
 summary: 'Between 2002 and 2016, Wells Fargo employees created approximately 3.5 million unauthorized bank accounts, credit cards, and other financial products in customers\' names without their knowledge or consent. Driven by aggressive cross-selling targets and a toxic"eight is great"sales culture, employees forged signatures, used customers\' personal information to open products they never requested, and moved money between accounts without authorization. At least 5,300 employees were fired for the fraud, while the executives who created the pressure were rewarded with bonuses worth hundreds of millions. Whistleblowers who tried to report the fraud internally were terminated, blacklisted from the industry, and in some cases had their personal finances retaliated against by the bank. CEO John Stumpf resigned with a $134 million golden parachute before being clawed back $69 million. The bank has paid over $3 billion in fines, yet no senior executive has served jail time.',
 keyFigures: [
 { name: 'John Stumpf', role: 'CEO who oversaw the fake accounts scheme; resigned in 2016; fined $17.5M and barred from banking', href: '/entities/individuals/john-stumpf', status: 'Resigned, Barred' },
 { name: 'Carrie Tolstedt', role: 'Head of Community Banking who oversaw division creating fake accounts; called it"a good story"', href: '/entities/individuals/carrie-tolstedt', status: 'Fined $25M - Barred' },
 { name: 'Timothy Sloan', role: 'Stumpf\'s successor as CEO; resigned 2019 under pressure for failure to reform', href: '/entities/individuals/timothy-sloan', status: 'Resigned 2019' },
 { name: 'Charles Scharf', role: 'Current CEO brought in to reform the bank; faces ongoing regulatory scrutiny', href: '/entities/individuals/charles-scharf', status: 'Active, CEO' },
 { name: 'Elizabeth Warren', role: 'US Senator who grilled Stumpf in landmark hearing, demanding his resignation and prosecution', href: '/entities/individuals/elizabeth-warren', status: 'Active, Senate' },
 { name: 'Claudia Russ Anderson', role: 'Whistleblower fired in 2008 after reporting fake accounts to ethics hotline', href: '/entities/individuals/claudia-russ-anderson', status: 'Whistleblower, Fired' },
 { name: 'Duke Tran', role: 'Wells Fargo employee who reported fraud and was fired; filed DOL whistleblower complaint', href: '/entities/individuals/duke-tran', status: 'Whistleblower, Fired' },
 { name: 'Khalid Taha', role: 'Branch manager who reported fake accounts and was terminated; filed OSHA complaint', href: '/entities/individuals/khalid-taha', status: 'Whistleblower, Fired' },
 { name: 'Richard Cordray', role: 'CFPB Director who levied initial $100M fine against Wells Fargo in 2016', href: '/entities/individuals/richard-cordray', status: 'Former CFPB Director' },
 { name: 'Thomas Curry', role: 'OCC Comptroller who fined Wells Fargo $35M and referred executives for investigation', href: '/entities/individuals/thomas-curry', status: 'Former Comptroller' },
 { name: 'Tim Russ', role: 'Former Wells Fargo regional president who raised concerns about sales practices to senior management', href: '/entities/individuals/tim-russ', status: 'Former executive' },
 ],
 timeline: [
 { date: '2002-01-01', event: 'Wells Fargo begins aggressive cross-selling strategy -"Going for Gr-Eight"(8 products per customer)' },
 { date: '2004-01-01', event: 'Internal reports document employees opening unauthorized accounts to meet sales quotas' },
 { date: '2005-12-01', event: 'First known whistleblower complaints about fake accounts filed through internal ethics hotline' },
 { date: '2007-01-01', event: 'Regional managers report widespread sales practice abuses to senior management; no action taken' },
 { date: '2008-01-01', event: 'Claudia Russ Anderson fired after reporting fake accounts; begins filing complaints with regulators' },
 { date: '2011-01-01', event: 'Wells Fargo begins quietly firing low-level employees involved in fake accounts, at least 1,000 by this point' },
 { date: '2013-12-21', event: 'Los Angeles Times investigation:"Wells Fargo\'s pressure-cooker sales culture"first exposes the scheme publicly' },
 { date: '2015-05-05', event: 'Los Angeles City Attorney files suit against Wells Fargo for opening unauthorized accounts' },
 { date: '2016-09-08', event: 'CFPB, OCC, and LA City fines Wells Fargo $185M; reveals 2+ million fake accounts and 5,300 fired employees' },
 { date: '2016-09-20', event: 'John Stumpf testifies before Senate Banking Committee; Elizabeth Warren tells him he should resign and face criminal investigation' },
 { date: '2016-10-12', event: 'Stumpf resigns as CEO; forfeits $41M in unvested stock; retains $134M in other compensation' },
 { date: '2017-04-10', event: 'Independent investigation by board reveals 3.5M unauthorized accounts, far more than initially reported' },
 { date: '2017-08-31', event: 'Wells Fargo reveals scheme also included unauthorized auto insurance charges, harming 800,000+ customers' },
 { date: '2018-02-02', event: 'Federal Reserve imposes unprecedented asset cap on Wells Fargo, limiting growth until reform is proven' },
 { date: '2018-04-20', event: 'CFPB and OCC fine Wells Fargo additional $1 billion for mortgage and auto lending abuses' },
 { date: '2020-02-21', event: 'Wells Fargo pays $3 billion to DOJ and SEC to settle criminal and civil investigations' },
 { date: '2020-01-23', event: 'OCC bans Stumpf from banking industry and fines him $17.5M personally' },
 { date: '2022-12-20', event: 'CFPB fines Wells Fargo additional $3.7 billion for widespread consumer abuses across multiple product lines' },
 { date: '2024-01-01', event: 'Federal Reserve asset cap remains in place; total fines and settlements exceed $7 billion' },
 ],
 legalOutcomes: [
 { defendant: 'Wells Fargo (corporate)', charge: 'Unauthorized accounts, consumer fraud, deceptive practices', outcome: '$3B DOJ/SEC settlement; $3.7B CFPB fine; $7B+ total penalties' },
 { defendant: 'John Stumpf', charge: 'Oversight failure as CEO during fake accounts scandal', outcome: 'Resigned; fined $17.5M; permanently barred from banking' },
 { defendant: 'Carrie Tolstedt', charge: 'Head of division responsible for fake accounts', outcome: 'Fined $25M; barred from banking; OCC charges' },
 { defendant: '5,300+ employees', charge: 'Creation of unauthorized accounts', outcome: 'Terminated; many blacklisted from financial industry' },
 { defendant: 'Wells Fargo (Fed action)', charge: 'Widespread consumer abuses', outcome: 'Unprecedented asset cap imposed by Federal Reserve, still in effect' },
 { defendant: 'Whistleblowers (multiple)', charge: 'N/A - victims of retaliation', outcome: 'Fired, blacklisted; some received settlements after filing complaints' },
 { defendant: 'Wells Fargo (auto insurance)', charge: 'Unauthorized auto insurance charges on 800,000+ customers', outcome: '$386M in refunds and remediation' },
 { defendant: 'Wells Fargo (mortgage)', charge: 'Improper mortgage rate-lock fees and denials', outcome: 'Part of $1B 2018 settlement' },
 ],
 charges: [
 { statute: '18 U.S.C. § 1344: Bank Fraud', description: 'Systematic scheme to defraud bank customers by creating unauthorized financial products', count: 'Corporate settlement - 3.5M unauthorized accounts' },
 { statute: '15 U.S.C. § 45: Unfair/Deceptive Acts (FTC Act)', description: 'Unfair and deceptive business practices in opening accounts without customer consent', count: 'CFPB enforcement action' },
 { statute: '12 U.S.C. § 5531: CFPA Prohibition', description: 'Violation of Consumer Financial Protection Act prohibiting unfair, deceptive, and abusive practices', count: '$3.7B fine - 2022' },
 { statute: '18 U.S.C. § 1028A: Aggravated Identity Theft', description: 'Use of customer personal information to open unauthorized accounts constitutes identity theft', count: 'Millions of instances' },
 { statute: '15 U.S.C. § 78j(b): Securities Fraud', description: 'Misleading investors about business practices and the source of cross-selling revenue growth', count: 'SEC settlement component' },
 { statute: '18 U.S.C. § 1341: Mail Fraud', description: 'Mailing unauthorized account statements and credit cards to customers who never requested them', count: 'Part of DOJ criminal settlement' },
 { statute: 'SOX § 806: Whistleblower Retaliation', description: 'Termination and retaliation against employees who reported the unauthorized account practices', count: 'Multiple whistleblower claims filed' },
 { statute: '12 U.S.C. § 1818: Cease and Desist / Civil Money Penalties', description: 'OCC enforcement actions against executives for unsafe and unsound banking practices', count: 'Stumpf $17.5M; Tolstedt $25M' },
 ],
 coverup: [
 'Senior management knew about unauthorized accounts as early as 2004 but treated it as a low-level employee problem rather than a systemic cultural issue',
 'Whistleblowers who reported the fraud through internal channels were terminated, and some had their own Wells Fargo accounts retaliated against',
 'The bank fired over 5,300 low-level employees for creating fake accounts while the executives who set the impossible quotas received bonuses',
 'CEO John Stumpf initially dismissed the scandal as"1% of our workforce"- framing systemic fraud as isolated misconduct',
 'Carrie Tolstedt, who oversaw the division responsible, was allowed to retire with a $125M compensation package before the full scope was public',
 'Wells Fargo\'s internal investigation underreported the number of fake accounts by over a million, initial claims of 2M were later revised to 3.5M',
 'The bank\'s "Going for Gr-Eight"sales culture explicitly pressured employees to open eight accounts per customer, driving the fraud',
 'Auto insurance fraud affecting 800,000+ customers was concealed until it was exposed by subsequent investigations after the initial account scandal',
 'Wells Fargo executives told Congress the sales targets were"goals, not quotas"- contradicted by internal communications showing termination threats for missing targets',
 ],
 sources: [
 { title: 'CFPB Enforcement Action Against Wells Fargo ($3.7B Fine)', url: 'https://www.consumerfinance.gov/enforcement/actions/wells-fargo-bank-na-2022/', date: '2022-12-20' },
 { title: 'DOJ $3 Billion Criminal and Civil Settlement', url: 'https://www.justice.gov/opa/pr/wells-fargo-agrees-pay-3-billion-resolve-criminal-and-civil-investigations', date: '2020-02-21' },
 { title: 'Elizabeth Warren Grills John Stumpf, Senate Hearing', url: 'https://www.c-span.org/video/?415469-1/wells-fargo-unauthorized-accounts', date: '2016-09-20' },
 { title: 'LA Times Investigation: Wells Fargo Sales Culture', url: 'https://www.latimes.com/business/la-fi-wells-fargo-sales-pressure-20131222-story.html', date: '2013-12-21' },
 { title: 'Federal Reserve Asset Cap on Wells Fargo', url: 'https://www.federalreserve.gov/newsevents/pressreleases/enforcement20180202a.htm', date: '2018-02-02' },
 { title: 'OCC Bans John Stumpf From Banking Industry', url: 'https://www.occ.treas.gov/news-issuances/news-releases/2020/nr-occ-2020-6.html', date: '2020-01-23' },
 { title: 'Wells Fargo Whistleblowers Fired and Blacklisted', url: 'https://www.nytimes.com/2016/09/12/business/dealbook/fired-wells-fargo-workers-seek-a-greater-share-of-the-banks-guilt.html', date: '2016-09-12' },
 { title: 'Independent Board Investigation, Sales Practices Report', url: 'https://www.nytimes.com/2017/04/10/business/wells-fargo-scandal-report.html', date: '2017-04-10' },
 ],
};

export default function WellsFargoPage() {
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
