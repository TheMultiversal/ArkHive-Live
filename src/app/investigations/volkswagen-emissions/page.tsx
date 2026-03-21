'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowLeft, AlertTriangle, Users, Calendar, FileText, ExternalLink, Scale, ShieldAlert, Skull } from 'lucide-react';
import GlitchText from '@/components/effects/GlitchText';

const investigation = {
 title: 'Volkswagen Emissions Scandal',
 subtitle: 'Dieselgate: How VW Installed Defeat Devices in 11 Million Vehicles to Cheat Emissions Tests',
 severity: 'critical',
 status: 'EXPOSED, FINES LEVIED',
 summary: 'In 2015, Volkswagen was caught installing sophisticated software"defeat devices"in approximately 11 million diesel vehicles worldwide. The software detected when a vehicle was being tested for emissions and activated full pollution controls only during testing, while emitting up to 40 times the legal limit of nitrogen oxides during normal driving. The fraud was systematic, deliberate, and spanned nearly a decade, involving engineers, managers, and executives who chose to deceive regulators rather than invest in legitimate clean diesel technology. The resulting scandal cost VW over $34.69 billion in fines, settlements, and recalls, and exposed the complicity of regulatory bodies that failed to catch the fraud for years.',
 keyFigures: [
 { name: 'Martin Winterkorn', role: 'CEO of Volkswagen (2007-2015); resigned when scandal broke, later charged with fraud and conspiracy', href: '/entities/individuals/martin-winterkorn', status: 'Indicted' },
 { name: 'James Liang', role: 'VW engineer who helped develop the defeat device software; pled guilty and cooperated with prosecutors', href: '/entities/individuals/james-liang', status: 'Convicted' },
 { name: 'Oliver Schmidt', role: 'VW emissions compliance manager who was arrested in Miami trying to flee the U.S.', href: '/entities/individuals/oliver-schmidt', status: 'Convicted - 7 Years' },
 { name: 'Heinz-Jakob Neusser', role: 'Head of Development for the VW brand; charged in U.S. indictment for conspiracy', href: '/entities/individuals/heinz-jakob-neusser', status: 'Charged (Germany)' },
 { name: 'Richard Dorenkamp', role: 'Head of Engine Development; one of the accused VW executives in German proceedings', href: '/entities/individuals/richard-dorenkamp', status: 'Under Investigation' },
 { name: 'Matthias Müller', role: 'Succeeded Winterkorn as CEO; oversaw VW\'s crisis response and settlement negotiations', href: '/entities/individuals/matthias-mueller', status: 'Former CEO' },
 { name: 'Herbert Diess', role: 'VW CEO (2018-2022); faced charges for alleged failure to disclose the scandal to investors in time', href: '/entities/individuals/herbert-diess', status: 'Charges Settled' },
 { name: 'Daniel Carder', role: 'West Virginia University researcher whose emissions testing first uncovered the discrepancy', href: '/entities/individuals/daniel-carder', status: 'Whistleblower Researcher' },
 { name: 'Arvind Thiruvengadam', role: 'WVU researcher who co-authored the study that exposed VW\'s real-world emissions cheating', href: '/entities/individuals/arvind-thiruvengadam', status: 'Researcher' },
 { name: 'Stuart Johnson', role: 'VW engineer charged with destruction of evidence and conspiracy to defraud regulators', href: '/entities/individuals/stuart-johnson', status: 'Charged' },
 { name: 'Bernd Gottweis', role: 'VW head of product safety; charged in U.S. for role in the cover-up', href: '/entities/individuals/bernd-gottweis', status: 'Charged' },
 ],
 timeline: [
 { date: '2005', event: 'VW introduces its "Clean Diesel"marketing campaign in the United States, promoting diesel vehicles as environmentally friendly' },
 { date: '2006', event: 'VW engineers begin development of the EA 189 diesel engine with the defeat device software to pass U.S. emissions tests' },
 { date: '2007', event: 'Internal VW discussions reveal engineers could not meet U.S. NOx standards with existing technology at acceptable cost' },
 { date: '2008', event: 'VW begins selling defeat device-equipped diesel vehicles in the United States under its "Clean Diesel"branding' },
 { date: '2009', event: 'VW receives EPA"Green Car"designation for Jetta TDI, an award based entirely on fraudulent emissions data' },
 { date: '2013', event: 'International Council on Clean Transportation commissions West Virginia University to test real-world diesel emissions' },
 { date: '2014-05', event: 'WVU researchers Daniel Carder and Arvind Thiruvengadam publish findings showing VW diesels emit 15-35x legal NOx limits' },
 { date: '2014-12', event: 'VW issues a voluntary recall claiming a software fix will resolve the emissions issue, but the defeat device remains active' },
 { date: '2015-05', event: 'CARB rejects VW\'s proposed fix and demands a full explanation; VW continues to stonewall regulators' },
 { date: '2015-09-03', event: 'VW finally admits to EPA and CARB that it installed defeat devices in approximately 482,000 U.S. diesel vehicles' },
 { date: '2015-09-18', event: 'EPA issues a Notice of Violation against VW; the scandal goes public worldwide' },
 { date: '2015-09-23', event: 'Martin Winterkorn resigns as VW CEO, saying he is"not aware of any wrongdoing on my part"' },
 { date: '2016-01', event: 'DOJ files civil complaint against VW; number of affected vehicles rises to 11 million worldwide' },
 { date: '2016-06', event: 'VW agrees to $14.7 billion settlement with U.S. regulators, the largest auto industry settlement in history' },
 { date: '2017-01', event: 'VW pleads guilty to three federal felony counts; agrees to $4.3 billion criminal penalty' },
 { date: '2017-12', event: 'Oliver Schmidt sentenced to 7 years in federal prison, the harshest sentence in the case' },
 { date: '2018', event: 'Martin Winterkorn indicted by U.S. federal grand jury on wire fraud and conspiracy charges' },
 { date: '2019', event: 'German prosecutors charge Winterkorn with fraud in Braunschweig court; trial repeatedly delayed' },
 { date: '2021', event: 'Total cost to VW exceeds $34.69 billion between fines, settlements, buybacks, and recalls worldwide' },
 ],
 legalOutcomes: [
 { defendant: 'Volkswagen AG', charge: 'Conspiracy to defraud the United States, wire fraud, Clean Air Act violations', outcome: 'Pled guilty; $4.3 billion criminal penalty, 3 years probation, independent compliance monitor' },
 { defendant: 'Volkswagen (Civil)', charge: 'Clean Air Act violations, consumer fraud', outcome: '$14.7 billion U.S. civil settlement including vehicle buybacks and environmental remediation' },
 { defendant: 'Oliver Schmidt', charge: 'Conspiracy to defraud the United States, Clean Air Act violations', outcome: '7 years federal prison + $400,000 fine' },
 { defendant: 'James Liang', charge: 'Conspiracy to defraud regulators', outcome: '40 months prison + $200,000 fine (cooperating witness)' },
 { defendant: 'Martin Winterkorn', charge: 'Wire fraud, conspiracy (U.S. indictment); fraud in Germany', outcome: 'U.S. indictment, never extradited; German trial ongoing' },
 { defendant: 'VW (SEC Settlement)', charge: 'Securities fraud, misleading investors about emissions compliance', outcome: '$100 million SEC settlement for bond fraud' },
 { defendant: 'Audi AG (VW subsidiary)', charge: 'European emissions fraud', outcome: '€800 million fine from Munich prosecutors' },
 { defendant: 'VW (German Consumer Settlement)', charge: 'Consumer fraud affecting German diesel owners', outcome: '€830 million settlement with 235,000 German consumers' },
 ],
 charges: [
 { statute: '18 U.S.C. § 371: Conspiracy to Defraud the United States', description: 'VW conspired to impair and obstruct the lawful functions of the EPA and CARB', count: 'VW pled guilty; multiple executives charged' },
 { statute: '42 U.S.C. § 7413: Clean Air Act Violations', description: 'Installing defeat devices that caused vehicles to exceed legal NOx emission limits by up to 40x', count: '11 million vehicles worldwide; 482,000 in the U.S.' },
 { statute: '18 U.S.C. § 1343: Wire Fraud', description: 'Using electronic communications to execute the scheme to defraud regulators and consumers', count: 'Multiple counts against VW and executives' },
 { statute: '18 U.S.C. § 1519: Destruction of Evidence', description: 'VW employees deleted documents and destroyed evidence after the investigation began', count: 'Charged against individual employees' },
 { statute: '18 U.S.C. § 1001: False Statements to Government', description: 'Providing false emissions data and compliance certifications to the EPA', count: 'Part of corporate guilty plea' },
 { statute: '15 U.S.C. § 78j: Securities Fraud (SEC)', description: 'Misleading bond investors about VW\'s emissions compliance and environmental practices', count: '$100 million SEC settlement' },
 { statute: 'EU Regulation 715/2007: Type Approval Fraud', description: 'Circumventing European emissions tests through illegal defeat device software', count: 'Basis for European fines and consumer settlements' },
 { statute: 'German Criminal Code § 263: Fraud (Betrug)', description: 'German criminal fraud charges against Winterkorn and other executives', count: 'Multiple defendants in Braunschweig court' },
 ],
 coverup: [
 'When WVU researchers published anomalous emissions data in 2014, VW issued a sham"voluntary recall"with a fake software patch, while keeping the defeat device active in normal driving',
 'VW stonewalled CARB for over a year after the regulator rejected the initial fix, repeatedly claiming the issue was a minor technical glitch rather than deliberate fraud',
 'After the scandal broke, VW employees destroyed documents and deleted electronic evidence in an organized effort to obstruct the investigation',
 'Martin Winterkorn claimed he was"not aware of any wrongdoing"despite evidence that he was briefed on the defeat device issue as early as 2014',
 'VW\'s "Clean Diesel"marketing campaign won Environmental Protection Agency awards based entirely on fraudulent emissions data, making regulators unwitting accomplices in the deception',
 'The defeat device software was engineered with remarkable sophistication, it detected steering wheel position, vehicle speed, engine operation duration, and barometric pressure to determine when a test was occurring',
 'VW insiders later revealed that engineers warned management as early as 2007 that the company could not meet U.S. emissions standards without the cheat software, but leadership chose fraud over costly engineering solutions',
 'Even after admitting to the EPA in September 2015, VW initially claimed only 482,000 U.S. vehicles were affected, the true global count was 11 million',
 ],
 sources: [
 { title: 'EPA Notice of Violation to Volkswagen', url: 'https://www.epa.gov/enforcement/volkswagen-clean-air-act-civil-settlement', date: '2015-09-18' },
 { title: 'DOJ Criminal Plea Agreement with VW', url: 'https://www.justice.gov/opa/pr/volkswagen-ag-agrees-plead-guilty-and-pay-43-billion-criminal-and-civil-penalties', date: '2017-01-11' },
 { title: 'WVU Center for Alternative Fuels, Original Emissions Study', url: 'https://cafee.wvu.edu/publications', date: '2014' },
 { title: 'Faster, Higher, Farther: The Volkswagen Scandal, Jack Ewing (NYT)', url: 'https://www.nytimes.com/2017/05/06/business/inside-vws-campaign-of-trickery.html', date: '2017-05-06' },
 { title: 'SEC Charges Volkswagen with $100M Bond Fraud', url: 'https://www.sec.gov/news/press-release/2019-34', date: '2019-03-14' },
 { title: 'ICCT, From Laboratory to Road: Real-World Emissions Testing', url: 'https://theicct.org/publications/laboratory-road-2014-update', date: '2014-10' },
 { title: 'Oliver Schmidt Sentencing, DOJ Press Release', url: 'https://www.justice.gov/opa/pr/volkswagen-executive-sentenced-seven-years-prison-conspiring-violate-clean-air-act', date: '2017-12-06' },
 { title: 'German Dieselgate Trial, Reuters Coverage', url: 'https://web.archive.org/web/2024/https://www.reuters.com/business/autos-transportation/former-vw-ceo-winterkorn-goes-trial-over-dieselgate-2021-09-16/', date: '2021-09-16' },
 ],
};

export default function VolkswagenEmissionsPage() {
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
