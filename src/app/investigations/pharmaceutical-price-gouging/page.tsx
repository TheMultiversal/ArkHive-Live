'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowLeft, AlertTriangle, Users, Calendar, FileText, ExternalLink, Scale, ShieldAlert, Skull } from 'lucide-react';
import GlitchText from '@/components/effects/GlitchText';

const investigation = {
 title: 'Pharmaceutical Price Gouging',
 subtitle: 'How Big Pharma Turned Life-Saving Medicine Into a Profit Machine: $300 Insulin, 5000% Markups, and 350 Million in Annual Lobbying',
 severity: 'critical',
 status: 'ONGOING, PATIENTS DYING',
 summary: 'The United States is the only wealthy nation where pharmaceutical companies can charge whatever they want for life-saving medications. Americans pay 2-3 times more for prescription drugs than citizens of any other developed country. Insulin, which costs $2-$6 to produce, was priced at over $300 per vial (forcing diabetics to ration doses, skip meals, and die. Martin Shkreli raised the price of Daraprim 5,000% overnight. Mylan increased the EpiPen price by 500%. The pharmaceutical industry spends $350+ million annually on lobbying) more than any other industry, and successfully prohibited Medicare from negotiating drug prices for nearly two decades. Pay-for-delay schemes, where brand-name companies pay generics to stay off market, cost consumers $3.5 billion annually. Americans die not because treatments don\'t exist, but because corporations have made them unaffordable.',
 keyFigures: [
 { name: 'Martin Shkreli', role: 'Turing Pharmaceuticals CEO who raised Daraprim price from $13.50 to $750 per pill (5,556% increase)', href: '/entities/individuals/martin-shkreli', status: 'Released from prison 2022; securities fraud conviction' },
 { name: 'Heather Bresch', role: 'Mylan CEO who raised EpiPen price from $57 to $609 (500%+) while taking $98M in compensation', href: '/entities/individuals/heather-bresch', status: 'Retired from Mylan/Viatris 2020' },
 { name: 'Joe Manchin', role: 'Senator and father of Heather Bresch; pushed legislation requiring schools to stock EpiPens at inflated price', href: '/entities/individuals/joe-manchin', status: 'Active' },
 { name: 'Robert Hugin', role: 'Celgene CEO who raised Revlimid price 20 times over 15 years; $500 to $16,023 per month', href: '/entities/individuals/robert-hugin', status: 'Active' },
 { name: 'Craig Landau', role: 'CEO of Endo Pharmaceuticals; raised generic drug prices 600-800% using monopoly positions', href: '/entities/individuals/craig-landau', status: 'Endo filed bankruptcy 2022' },
 { name: 'Alex Azar', role: 'HHS Secretary under Trump; former Eli Lilly president during period of insulin price increases', href: '/entities/individuals/alex-azar', status: 'Active' },
 { name: 'Billy Tauzin', role: 'Congressman who shepherded Medicare Part D (prohibiting price negotiation) then became PhRMA president at $2M/year', href: '/entities/individuals/billy-tauzin', status: 'Retired' },
 { name: 'Stephen Ubl', role: 'PhRMA president who leads industry lobbying machine spending $350M+ annually to block price controls', href: '/entities/individuals/stephen-ubl', status: 'Active' },
 { name: 'Bernie Sanders', role: 'Senator who led fight to allow prescription drug importation and Medicare price negotiation', href: '/entities/individuals/bernie-sanders', status: 'Active' },
 { name: 'Alec Smith', role: '26-year-old diabetic who died rationing insulin he couldn\'t afford after aging off parents\' insurance', href: '/entities/individuals/alec-smith', status: 'Deceased (2017) - died rationing insulin' },
 { name: 'Nicole Smith-Holt', role: 'Mother of Alec Smith; became leading advocate for insulin affordability legislation', href: '/entities/individuals/nicole-smith-holt', status: 'Active advocate' },
 { name: 'Elizabeth Holmes', role: 'Theranos founder who defrauded investors with fake blood testing; symptom of healthcare profit-seeking', href: '/entities/individuals/elizabeth-holmes', status: 'Imprisoned for fraud' },
 ],
 timeline: [
 { date: '1921', event: 'Frederick Banting and Charles Best discover insulin; Banting sells patent to University of Toronto for $1, believing it should be accessible to all' },
 { date: '1982', event: 'Synthetic human insulin developed; three companies (Eli Lilly, Novo Nordisk, Sanofi) will control 90% of global insulin market' },
 { date: '2003', event: 'Medicare Part D signed by Bush; Rep. Billy Tauzin writes provision explicitly prohibiting Medicare from negotiating drug prices' },
 { date: '2004', event: 'Billy Tauzin resigns from Congress; becomes PhRMA president at $2 million/year salary, one of the most blatant revolving door cases in history' },
 { date: '2007', event: 'Mylan acquires EpiPen; begins systematic price increases from $57 to $609 over the next nine years' },
 { date: '2012', event: 'Average insulin price begins exponential increase; list price rises 300% between 2002-2013' },
 { date: 'September 2015', event: 'Martin Shkreli\'s Turing Pharmaceuticals raises Daraprim from $13.50 to $750 per pill overnight; sparks national outrage' },
 { date: '2016', event: 'EpiPen pricing scandal: Mylan CEO Heather Bresch defends 500% price increase before Congress while taking $98M in compensation' },
 { date: '2017', event: 'Alec Smith, 26, dies after rationing insulin he could not afford after aging off his parents\' insurance at 26' },
 { date: '2018', event: 'Average annual cost of insulin in US reaches $5,705 per patient vs. $862 in Canada and $450 in UK' },
 { date: '2019', event: 'House passes bill allowing Medicare to negotiate drug prices; McConnell refuses to bring it to Senate floor' },
 { date: '2020', event: 'During COVID-19, pharmaceutical companies race to develop vaccines with $18B+ in taxpayer-funded support' },
 { date: '2021', event: 'Congressional investigation reveals insulin manufacturers deliberately synchronized price increases, evidence of tacit collusion' },
 { date: 'August 2022', event: 'Inflation Reduction Act allows Medicare to negotiate prices on 10 drugs starting 2026; first time in nearly 20 years' },
 { date: '2023', event: 'Eli Lilly caps insulin at $35/month after decades of advocacy; Novo Nordisk and Sanofi follow, proving price was always artificial' },
 { date: '2024', event: 'Medicare begins negotiating prices for first 10 drugs; pharmaceutical industry sues to block law' },
 { date: '2024', event: 'Ozempic/Wegovy costs $1,000+/month in US vs $59 in Germany; weight loss drug pricing becomes new front in pharma price war' },
 ],
 legalOutcomes: [
 { defendant: 'Martin Shkreli', charge: 'Securities fraud (not for price gouging, raising drug prices is legal)', outcome: 'Convicted of securities fraud 2017; sentenced to 7 years; ordered to pay $64.6M and banned from pharmaceutical industry' },
 { defendant: 'Mylan (EpiPen)', charge: 'Overcharging Medicaid by misclassifying EpiPen as generic instead of brand-name', outcome: 'Settled for $465M with DOJ; no executive accountability; Bresch kept $98M compensation' },
 { defendant: 'Teva, Sandoz, Others', charge: 'Generic drug price-fixing conspiracy involving 300+ drugs', outcome: 'DOJ filed criminal charges against multiple companies; Teva settled for $420M; largest generic price-fixing case in US history' },
 { defendant: 'Endo Pharmaceuticals', charge: 'Antitrust violations, pay-for-delay agreements keeping generics off market', outcome: 'Filed for bankruptcy 2022; FTC sued for illegal pay-for-delay scheme' },
 { defendant: 'Eli Lilly, Sanofi, Novo Nordisk', charge: 'State AG investigations into insulin pricing and potential tacit collusion', outcome: 'Multiple state lawsuits; voluntary cap at $35/month after years of public pressure and advocacy' },
 { defendant: 'Purdue Pharma / Sackler Family', charge: 'Deceptive marketing of OxyContin contributing to opioid epidemic', outcome: 'Bankruptcy; $6B settlement; Sackler family shielded from future lawsuits (later partially reversed by Supreme Court)' },
 { defendant: 'Pharmaceutical Industry (PhRMA)', charge: 'Lobbying to prevent Medicare price negotiation for nearly 20 years', outcome: 'Inflation Reduction Act (2022) partially reverses ban; industry filed multiple lawsuits to block implementation' },
 { defendant: 'Allergan / AbbVie (Humira)', charge: 'Patent thicket strategy, filing 100+ patents to block biosimilar competition for decades', outcome: 'First biosimilar approved 2023 after decades of blocked competition; Humira generated $200B+ in lifetime sales' },
 ],
 charges: [
 { statute: 'Sherman Antitrust Act § 1: Price Fixing Conspiracy', description: 'Generic drug manufacturers coordinated price increases across 300+ drugs in the largest price-fixing conspiracy in US pharmaceutical history', count: 'Affected millions of patients; Teva settled for $420M; criminal charges against multiple executives' },
 { statute: 'FTC Act § 5: Pay-for-Delay Agreements', description: 'Brand-name pharmaceutical companies pay generic competitors to delay market entry, costing consumers $3.5 billion annually', count: 'FTC identifies dozens of pay-for-delay deals annually; Endo, AbbVie, and others sued' },
 { statute: 'False Claims Act: 31 U.S.C. § 3729', description: 'Pharmaceutical companies defraud government health programs through drug misclassification and inflated pricing', count: 'Mylan EpiPen: $465M settlement for Medicaid fraud; dozens of other pharma False Claims cases annually' },
 { statute: 'Patent Misuse / Anticompetitive Patent Thickets', description: 'Companies file hundreds of overlapping patents to extend monopoly protection far beyond original patent life', count: 'Humira: 100+ patents preventing biosimilar competition for 20 years; $200B+ in monopoly revenue' },
 { statute: 'Depraved Indifference, Negligent Homicide (Moral)', description: 'Pricing life-saving medications beyond patient ability to pay, resulting in preventable rationing deaths', count: 'Estimated 1.1 million Americans skip medications due to cost annually; unknown number die from rationing' },
 { statute: 'Revolving Door Corruption: 18 U.S.C. § 207', description: 'Congressman Billy Tauzin wrote Medicare Part D prohibition on price negotiation then became PhRMA president', count: 'Tauzin went from $165K congressional salary to $2M+ PhRMA salary; most brazen revolving door case in modern history' },
 { statute: 'Securities Fraud: 15 U.S.C. § 78j(b)', description: 'Pharmaceutical executives manipulated stock prices through fraudulent pricing schemes and misleading investor statements', count: 'Shkreli convicted; Theranos\' Elizabeth Holmes convicted; multiple pharma executives under investigation' },
 { statute: 'International Human Rights Law, Right to Health', description: 'Denying access to affordable life-saving medication violates fundamental right to health recognized in international law', count: 'Americans pay 2-3x more than any other developed nation; 1 in 4 Americans report difficulty affording prescriptions' },
 ],
 coverup: [
 'When Martin Shkreli raised Daraprim\'s price 5,000%, the industry response was not outrage at the practice but anger that Shkreli had drawn attention to what they all do, raise prices as much as the market will bear.',
 'Eli Lilly, Novo Nordisk, and Sanofi maintained near-identical insulin prices for decades in what appears to be tacit collusion, but pharmaceutical pricing is deliberately opaque to prevent definitive proof.',
 'Congressman Billy Tauzin wrote the Medicare Part D prohibition on drug price negotiation, then immediately took a $2M/year job as head of the pharmaceutical industry\'s lobbying arm, the most brazen revolving door in modern politics.',
 'The pharmaceutical industry spends over $350 million per year on lobbying (more than any other industry) and has 3 lobbyists for every member of Congress.',
 'Drug companies claim high prices fund R&D, but they spend more on marketing ($30B/year) and stock buybacks than research; many breakthrough drugs are developed with taxpayer-funded NIH grants.',
 'Alex Azar, Trump\'s HHS Secretary, was previously president of Eli Lilly during a period when the company dramatically increased insulin prices, then was put in charge of drug pricing policy.',
 'Senator Joe Manchin pushed legislation requiring schools to stock EpiPens at the same time his daughter Heather Bresch was CEO of Mylan, the company selling EpiPens at grossly inflated prices.',
 'Pharmaceutical companies use patent "evergreening" to extend monopolies indefinitely, making minor modifications to drugs to reset patent clocks and block generic competition.',
 'The industry frames any attempt to control prices as "socialist" and warns it would destroy innovation, despite the fact that every other developed nation has price controls and still produces medical innovation.',
 ],
 sources: [
 { title: 'Drug Pricing Investigation, Senate Finance Committee', url: 'https://www.finance.senate.gov/chairmans-news/grassley-wyden-release-insulin-investigation-uncovering-business-practices-between-drug-companies-and-pharmacy-benefit-managers-that-keep-prices-high', date: '2021' },
 { title: 'Americans Pay the Highest Drug Prices in the World, RAND Corporation', url: 'https://www.rand.org/pubs/research_reports/RRA788-1.html', date: '2021' },
 { title: 'Alec Smith: The Face of America\'s Insulin Crisis, Washington Post', url: 'https://www.washingtonpost.com/local/he-lost-his-insurance-and-danger-losing-everything/2019/08/02/', date: '2019' },
 { title: 'Generic Drug Price Fixing, DOJ Antitrust Division', url: 'https://www.justice.gov/atr/case/us-and-plaintiff-states-v-teva-pharmaceuticals-usa-inc-et-al', date: '2020' },
 { title: 'Inflation Reduction Act Drug Pricing Provisions, Kaiser Family Foundation', url: 'https://www.kff.org/medicare/issue-brief/how-will-the-prescription-drug-provisions-in-the-inflation-reduction-act-affect-medicare-beneficiaries/', date: '2022' },
 { title: 'Mylan EpiPen Medicaid Settlement, Department of Justice', url: 'https://www.justice.gov/opa/pr/mylan-agrees-pay-465-million-resolve-false-claims-act-liability-underpaying-epipen-rebates', date: '2017' },
 { title: 'PhRMA Lobbying Expenditures, OpenSecrets', url: 'https://www.opensecrets.org/federal-lobbying/industries/summary?cycle=2022&id=H04', date: 'Ongoing' },
 { title: 'Insulin Costs and Patient Rationing, Annals of Internal Medicine', url: 'https://www.acpjournals.org/doi/10.7326/M18-3523', date: '2019' },
 ],
};

export default function PharmaceuticalPriceGougingPage() {
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
