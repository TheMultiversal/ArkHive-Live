'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowLeft, AlertTriangle, Users, Calendar, FileText, ExternalLink, Scale, ShieldAlert, Skull } from 'lucide-react';
import GlitchText from '@/components/effects/GlitchText';

const investigation = {
 title: 'The LIBOR Scandal',
 subtitle: 'How the World\'s Biggest Banks Rigged the Global Interest Rate for Profit',
 severity: 'critical',
 status: 'EXPOSED - $9B+ IN FINES',
 summary: 'The London Interbank Offered Rate (LIBOR) was the benchmark interest rate underpinning $350 trillion in financial contracts worldwide - from mortgages and student loans to complex derivatives. For over a decade, traders at the world\'s largest banks systematically manipulated LIBOR submissions to boost their trading profits and hide their institutions\' financial weakness during the 2008 crisis. The scandal revealed that the rate was not based on actual market transactions but on self-reported estimates that were trivially easy to manipulate. Banks including Barclays, Deutsche Bank, UBS, Rabobank, and others paid over $9 billion in fines, and multiple traders were convicted, though critics argued that senior executives who created the culture enabling the fraud largely escaped accountability.',
 keyFigures: [
 { name: 'Tom Hayes', role: 'Former UBS and Citigroup trader; the first person convicted of LIBOR manipulation, establishing the legal precedent', href: '/entities/individuals/tom-hayes', status: 'Convicted - 11 Years (Reduced)' },
 { name: 'Bob Diamond', role: 'CEO of Barclays who resigned when the bank became the first to settle LIBOR charges; claimed ignorance', href: '/entities/individuals/bob-diamond', status: 'Resigned' },
 { name: 'Jerry del Missier', role: 'Barclays COO who allegedly passed down instructions to lower LIBOR submissions during the financial crisis', href: '/entities/individuals/jerry-del-missier', status: 'Resigned' },
 { name: 'Marcus Agius', role: 'Barclays Chairman who resigned alongside Diamond in the wake of the scandal', href: '/entities/individuals/marcus-agius', status: 'Resigned' },
 { name: 'Philippe Moryoussef', role: 'Former Barclays trader convicted of EURIBOR manipulation conspiracy', href: '/entities/individuals/philippe-moryoussef', status: 'Convicted' },
 { name: 'Terry Farr', role: 'RP Martin broker who acted as intermediary helping traders coordinate LIBOR submissions', href: '/entities/individuals/terry-farr', status: 'Acquitted' },
 { name: 'Paul Tucker', role: 'Deputy Governor of Bank of England; phone call with Bob Diamond sparked questions about central bank involvement', href: '/entities/individuals/paul-tucker', status: 'Denied Involvement' },
 { name: 'Gary Gensler', role: 'CFTC Chairman who led the U.S. regulatory investigation into LIBOR manipulation', href: '/entities/individuals/gary-gensler', status: 'Key Regulator' },
 { name: 'Mervyn King', role: 'Governor of the Bank of England during the period of LIBOR manipulation; faced questions about institutional awareness', href: '/entities/individuals/mervyn-king', status: 'Former Governor' },
 { name: 'Christian Bittar', role: 'Former Deutsche Bank trader; one of the highest-paid traders in history, convicted of LIBOR and EURIBOR rigging', href: '/entities/individuals/christian-bittar', status: 'Convicted' },
 { name: 'Martin Wheatley', role: 'Head of the Wheatley Review that recommended fundamental reform of LIBOR governance', href: '/entities/individuals/martin-wheatley', status: 'Reformer' },
 ],
 timeline: [
 { date: '1986', event: 'British Bankers\' Association (BBA) creates LIBOR as a standardized benchmark for interbank lending rates' },
 { date: '1990s', event: 'LIBOR becomes the dominant global interest rate benchmark, underpinning $350 trillion in financial products' },
 { date: '2003', event: 'Evidence suggests manipulation began as early as 2003, with traders making requests to submitters to move rates' },
 { date: '2005', event: 'Barclays traders exchange emails explicitly requesting LIBOR submissions be adjusted to benefit their trading positions' },
 { date: '2007-08', event: 'During the financial crisis, banks begin systematically lowering their LIBOR submissions to appear healthier than they are' },
 { date: '2008-04', event: 'Wall Street Journal and Financial Times publish analyses showing LIBOR submissions are suspiciously low relative to other market indicators' },
 { date: '2008-05', event: 'BBA conducts review and concludes LIBOR is"robust"- a finding later revealed to be woefully inadequate' },
 { date: '2008-11', event: 'CFTC and DOJ open formal investigations into potential LIBOR manipulation by major global banks' },
 { date: '2010', event: 'UBS trader Tom Hayes\' network of manipulation across multiple banks and brokers becomes central to investigations' },
 { date: '2012-06-27', event: 'Barclays becomes the first bank to settle - paying $453 million in fines to U.S. and UK regulators' },
 { date: '2012-07-03', event: 'Bob Diamond resigns as Barclays CEO; testimony before Parliament reveals Paul Tucker phone call about lowering LIBOR' },
 { date: '2012-09', event: 'Wheatley Review recommends comprehensive reform of LIBOR, including criminal sanctions for manipulation' },
 { date: '2012-12', event: 'UBS fined $1.5 billion for LIBOR manipulation - the largest fine at the time, with subsidiary pleading guilty to wire fraud' },
 { date: '2013', event: 'Rabobank fined $1 billion; ICAP broker fined $87 million; investigations expand to dozens of institutions' },
 { date: '2015-04', event: 'Deutsche Bank fined $2.5 billion - the single largest LIBOR fine - for manipulating LIBOR and EURIBOR' },
 { date: '2015-08', event: 'Tom Hayes convicted by UK jury and sentenced to 14 years (later reduced to 11); first individual conviction' },
 { date: '2017', event: 'UK Financial Conduct Authority announces LIBOR will be phased out after 2021 and replaced by alternative rates' },
 { date: '2021', event: 'Multiple LIBOR currencies cease publication; transition to SOFR (Secured Overnight Financing Rate) begins' },
 { date: '2023-06-30', event: 'USD LIBOR officially ceases publication after 37 years; replaced by SOFR for U.S. dollar contracts' },
 ],
 legalOutcomes: [
 { defendant: 'Barclays', charge: 'LIBOR manipulation', outcome: '$453 million in fines to CFTC, DOJ, and UK FSA; first bank to settle' },
 { defendant: 'UBS', charge: 'LIBOR and EURIBOR manipulation, wire fraud', outcome: '$1.5 billion fine; Japanese subsidiary pled guilty to wire fraud' },
 { defendant: 'Deutsche Bank', charge: 'LIBOR and EURIBOR manipulation', outcome: '$2.5 billion fine - the largest single LIBOR penalty' },
 { defendant: 'Rabobank', charge: 'LIBOR manipulation', outcome: '$1 billion fine to U.S. and European regulators' },
 { defendant: 'Tom Hayes', charge: 'Conspiracy to defraud by manipulating LIBOR', outcome: 'Convicted; sentenced to 14 years, reduced to 11 on appeal' },
 { defendant: 'Société Générale', charge: 'LIBOR and EURIBOR manipulation', outcome: '$600 million in fines' },
 { defendant: 'JP Morgan', charge: 'LIBOR manipulation', outcome: '$108 million CFTC fine' },
 { defendant: 'Citigroup', charge: 'LIBOR manipulation', outcome: '$425 million CFTC fine' },
 ],
 charges: [
 { statute: '18 U.S.C. § 1343 - Wire Fraud', description: 'Banks used electronic communications to submit false LIBOR rates, defrauding counterparties and customers', count: 'UBS subsidiary pled guilty; multiple individuals charged' },
 { statute: '18 U.S.C. § 1344 - Bank Fraud', description: 'Manipulating a benchmark rate that affected the terms of banking products held by millions of people', count: 'Basis for DOJ investigations across multiple banks' },
 { statute: '18 U.S.C. § 371 - Conspiracy', description: 'Traders across multiple banks conspired to coordinate LIBOR submissions for mutual benefit', count: 'Central charge in Tom Hayes and other prosecutions' },
 { statute: 'UK Fraud Act 2006 § 1 - Fraud by False Representation', description: 'Submitting false LIBOR rates to the BBA that did not reflect genuine borrowing costs', count: 'Basis for UK prosecutions including Tom Hayes' },
 { statute: '7 U.S.C. § 9 - Commodity Exchange Act Violations', description: 'Manipulation of LIBOR as a commodity benchmark affecting futures and derivatives markets', count: 'Basis for CFTC enforcement actions totaling billions' },
 { statute: '18 U.S.C. § 1962 - RICO', description: 'Pattern of racketeering activity through systematic manipulation of a global financial benchmark', count: 'Alleged in private civil lawsuits' },
 { statute: 'EU Market Abuse Regulation', description: 'Market manipulation through coordinated false benchmark submissions across European markets', count: 'Basis for European regulatory fines' },
 { statute: 'UK Financial Services and Markets Act 2000', description: 'Regulatory violations by UK-based financial institutions in benchmark submissions', count: 'FCA enforcement actions against multiple firms' },
 ],
 coverup: [
 'LIBOR was based entirely on self-reported estimates - banks were asked what rate they"could"borrow at, not what rate they actually did borrow at - creating a system practically designed to be manipulated',
 'During the 2008 financial crisis, banks collectively lowered their LIBOR submissions to hide how much trouble they were in - if their true borrowing costs were known, it would have triggered panic about their solvency',
 'Trader communications showed the manipulation was treated as routine:"Dude, I owe you big time! Come over one day after work and I\'m opening a bottle of Bollinger"was a typical exchange after a rate was moved',
 'The British Bankers\' Association - the body responsible for LIBOR\'s integrity - conducted a review in 2008 and declared the rate"robust,"despite clear evidence to the contrary',
 'A phone call between Bank of England Deputy Governor Paul Tucker and Barclays CEO Bob Diamond suggested possible institutional awareness of or acquiescence to LIBOR lowballing during the crisis',
 'Despite the scandal affecting hundreds of trillions in financial products, no senior bank CEO or board member was criminally charged - the prosecutions targeted traders while the institutions paid fines as a cost of business',
 'Banks fought civil lawsuits by arguing that because LIBOR was an"estimate"rather than a factual report, it could not technically be"false"- a legal argument that prioritized semantics over substance',
 'The manipulation affected the interest rates on mortgages, student loans, and credit cards for ordinary people worldwide - yet the victims were largely unable to quantify or recover their individual losses',
 ],
 sources: [
 { title: 'CFTC - Barclays LIBOR Enforcement Action', url: 'https://www.cftc.gov/PressRoom/PressReleases/6289-12', date: '2012-06-27' },
 { title: 'DOJ - UBS LIBOR Investigation and Guilty Plea', url: 'https://www.justice.gov/opa/pr/ubs-securities-japan-co-ltd-plead-guilty-felony-wire-fraud-connection-long-running', date: '2012-12-19' },
 { title: 'Wheatley Review of LIBOR - Final Report', url: 'https://assets.publishing.service.gov.uk/government/uploads/system/uploads/attachment_data/file/191762/wheatley_review_libor_finalreport_280912.pdf', date: '2012-09-28' },
 { title: 'The Spider Network: The Wild Story of a Math Genius and LIBOR - David Enrich', url: 'https://www.harpercollins.com/products/the-spider-network-david-enrich', date: '2017' },
 { title: 'Deutsche Bank $2.5B LIBOR Settlement - DOJ', url: 'https://www.justice.gov/opa/pr/db-group-services-uk-limited-admits-wire-fraud-connection-long-running-manipulation-libor', date: '2015-04-23' },
 { title: 'FCA - LIBOR Transition to Alternative Rates', url: 'https://www.fca.org.uk/markets/libor', date: '2021' },
 { title: 'Tom Hayes Conviction - SFO Press Release', url: 'https://www.sfo.gov.uk/cases/libor-tom-hayes/', date: '2015-08-03' },
 { title: 'WSJ - Study Casts Doubt on Key Rate', url: 'https://web.archive.org/web/2024/https://www.wsj.com/articles/SB120831164167818299', date: '2008-05-29' },
 ],
};

export default function LIBORScandal() {
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
