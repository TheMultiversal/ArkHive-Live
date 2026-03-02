'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowLeft, AlertTriangle, Users, Calendar, FileText, ExternalLink, Scale, ShieldAlert, Skull } from 'lucide-react';
import GlitchText from '@/components/effects/GlitchText';

const investigation = {
 title: 'Stingray Surveillance: Mass Phone Interception',
 subtitle: 'Law enforcement secretly deployed fake cell towers to intercept millions of Americans\' phone data without warrants',
 severity: 'critical',
 status: 'ONGOING - EXPANDING',
 summary: 'Since the mid-2000s, federal, state, and local law enforcement agencies across the United States have secretly deployed cell-site simulators - commonly known as"Stingrays"- to conduct mass surveillance. These devices mimic cell phone towers, forcing every phone in the area to connect to them and revealing the location, identity, and in some cases the content of communications for thousands of innocent people. The technology was developed for military and intelligence use but was adopted domestically without public knowledge, legislative authorization, or judicial oversight. Police departments signed non-disclosure agreements (NDAs) with the FBI, promising to drop criminal cases rather than reveal the technology\'s existence. The ACLU has identified 75+ agencies in 27+ states using Stingrays, but the true number is likely far higher.',
 keyFigures: [
 { name: 'Harris Corporation', role: 'Primary manufacturer of Stingray devices; now L3Harris Technologies', href: '/entities/corporations/harris-corporation', status: 'Active - Profiting' },
 { name: 'FBI', role: 'Deployed Stingrays and required local police to sign NDAs about their use', href: '/entities/agencies/fbi', status: 'Active' },
 { name: 'Department of Justice', role: 'Issued 2015 policy requiring warrants but exempted existing operations and emergencies', href: '/entities/agencies/doj', status: 'Active' },
 { name: 'DHS / ICE', role: 'Used Stingrays and similar technology for immigration enforcement', href: '/entities/agencies/dhs', status: 'Active' },
 { name: 'Daniel Rigmaiden', role: 'Tax fraud suspect whose case first exposed Stingray use to the public', href: '/entities/individuals/daniel-rigmaiden', status: 'Key Whistleblower' },
 { name: 'U.S. Marshals Service', role: 'Deployed airborne Stingrays (dirtboxes) from aircraft for mass surveillance', href: '/entities/agencies/us-marshals', status: 'Active' },
 { name: 'Nathan Wessler', role: 'ACLU attorney who led legal challenges to warrantless Stingray use', href: '/entities/individuals/nathan-wessler', status: 'Active' },
 { name: 'Christopher Soghoian', role: 'ACLU technologist who exposed the scope of Stingray deployment', href: '/entities/individuals/christopher-soghoian', status: 'Active' },
 { name: 'Baltimore Police Department', role: 'Used Stingrays over 4,300 times without disclosure; dropped cases to avoid revealing technology', href: '/entities/agencies/baltimore-pd', status: 'Active' },
 { name: 'Senator Ron Wyden', role: 'Pushed for transparency and judicial oversight of cell-site simulator use', href: '/entities/individuals/ron-wyden', status: 'Active' },
 { name: 'IRS Criminal Investigations', role: 'Secretly acquired and deployed Stingray technology for tax enforcement', href: '/entities/agencies/irs', status: 'Active' },
 ],
 timeline: [
 { date: '1990s', event: 'Harris Corporation develops cell-site simulator technology for military intelligence use' },
 { date: 'Early 2000s', event: 'FBI begins deploying Stingrays domestically; technology\'s existence is classified' },
 { date: '2007', event: 'FBI begins requiring local law enforcement to sign non-disclosure agreements about Stingrays' },
 { date: '2008', event: 'Daniel Rigmaiden, arrested for tax fraud, discovers FBI used a Stingray to locate him without a warrant' },
 { date: '2011', event: 'Rigmaiden\'s case becomes first legal challenge to expose Stingray technology publicly' },
 { date: '2013', event: 'ACLU files FOIA requests revealing widespread Stingray use by police departments nationwide' },
 { date: '2014', event: 'Wall Street Journal reveals U.S. Marshals use aircraft-mounted Stingrays ("dirtboxes") for mass surveillance' },
 { date: '2014', event: 'Tacoma, WA police reveal they used Stingray 168 times in a year without a single warrant' },
 { date: '2015', event: 'Baltimore revealed to have used Stingrays over 4,300 times, often without telling judges or defense attorneys' },
 { date: 'September 2015', event: 'DOJ issues policy requiring warrants for federal Stingray use - with broad exceptions' },
 { date: '2016', event: 'House Oversight Committee investigation finds extensive unregulated Stingray use by federal agencies' },
 { date: '2017', event: 'DHS/ICE confirmed using Stingrays for immigration enforcement without warrants' },
 { date: '2018', event: 'Carpenter v. United States: Supreme Court rules warrantless cell-site location tracking violates 4th Amendment' },
 { date: '2019', event: 'Investigation reveals IRS Criminal Investigations secretly obtained Stingray devices' },
 { date: '2020', event: 'CBP and DHS deploy Stingrays during racial justice protests in Portland and other cities' },
 { date: '2022', event: 'Reports emerge of continued warrantless Stingray use despite DOJ policy and court rulings' },
 { date: '2023', event: 'ACLU identifies 75+ agencies in 27+ states confirmed to possess cell-site simulators' },
 ],
 legalOutcomes: [
 { defendant: 'FBI / DOJ', charge: 'Deploying mass surveillance without warrants or judicial oversight', outcome: 'DOJ issued policy in 2015 requiring warrants with broad exceptions; legacy cases grandfathered' },
 { defendant: 'Baltimore Police Department', charge: '4,300+ warrantless deployments; concealing technology from courts and defendants', outcome: 'Some convictions overturned; no officers or officials prosecuted' },
 { defendant: 'Harris Corporation (L3Harris)', charge: 'Manufacturing mass surveillance equipment sold to police without public oversight', outcome: 'Company continues to manufacture and sell devices; no regulation of manufacturer' },
 { defendant: 'Local Police Departments', charge: 'Signing NDAs agreeing to drop cases rather than reveal surveillance methods', outcome: 'NDAs exposed through litigation; some departments adopted warrant requirements' },
 { defendant: 'U.S. Marshals Service', charge: 'Deploying aircraft-mounted mass surveillance covering entire cities', outcome: 'Program acknowledged but continues operating under classified authority' },
 { defendant: 'ICE / DHS', charge: 'Using Stingrays for immigration enforcement without warrants', outcome: 'Confirmed by oversight investigation; no policy change enforced' },
 { defendant: 'Various Police Departments', charge: 'Submitting false or misleading warrant applications ("pen register"orders instead of search warrants)', outcome: 'Some judges now require specific disclosure; no systematic reform' },
 { defendant: 'Federal Government', charge: 'Failing to enact legislation regulating cell-site simulator use', outcome: 'No federal law specifically regulates Stingray use; regulation remains patchwork of state laws' },
 ],
 charges: [
 { statute: '4th Amendment - Unreasonable Search and Seizure', description: 'Mass collection of phone data from thousands of innocent people without probable cause or warrants', count: 'Tens of thousands of warrantless deployments documented nationwide' },
 { statute: 'Carpenter v. United States (2018)', description: 'Supreme Court ruled warrantless cell-site location tracking violates the 4th Amendment', count: 'Ruling should apply to Stingrays but enforcement remains inconsistent' },
 { statute: 'Electronic Communications Privacy Act (18 U.S.C. § 2511)', description: 'Prohibition on intercepting electronic communications without proper authorization', count: 'Stingrays capable of intercepting call content and text messages, not just metadata' },
 { statute: '18 U.S.C. § 1001 - False Statements', description: 'Police departments misrepresented Stingray use in court filings, calling them confidential sources or pen registers', count: 'Systematic misrepresentation to judges across multiple jurisdictions' },
 { statute: '42 U.S.C. § 1983 - Civil Rights Violations', description: 'Government actors violating constitutional rights through warrantless surveillance', count: 'Every Stingray deployment collects data from hundreds to thousands of innocent bystanders' },
 { statute: 'Brady v. Maryland - Disclosure Obligations', description: 'Prosecutors failed to disclose Stingray use to defendants, violating obligation to share exculpatory evidence', count: 'Baltimore alone concealed Stingray evidence in thousands of cases' },
 { statute: 'Federal Wiretap Act (Title III)', description: 'Interception of phone communications requires a wiretap order with specific judicial findings', count: 'Most Stingray deployments used lesser pen register orders or no court order at all' },
 { statute: '1st Amendment - Freedom of Assembly', description: 'Stingray deployment at protests chills First Amendment rights through mass identification', count: 'Documented use at racial justice protests, political rallies, and demonstrations' },
 ],
 coverup: [
 'The FBI required local police departments to sign non-disclosure agreements (NDAs) promising to drop criminal prosecutions rather than reveal the existence of Stingray technology in court.',
 'Police departments routinely misrepresented Stingrays in court filings, describing them as"confidential sources"or using pen register orders instead of proper search warrants.',
 'Harris Corporation refused to sell Stingray devices without an NDA and FBI approval, creating a corporate-government secrecy apparatus around mass surveillance.',
 'When defense attorneys discovered Stingray use, prosecutors would often offer plea deals or drop charges entirely to avoid any public disclosure of the technology.',
 'The U.S. Marshals Service physically seized Stingray records from a local police department to prevent them from being turned over in response to a public records request.',
 'Federal agencies classified Stingray technology as law-enforcement sensitive, preventing even judges from fully understanding the scope of surveillance being conducted in their courts.',
 'DHS used Stingrays during racial justice protests but refused to confirm or deny their deployment when questioned by Congressional oversight committees.',
 'The true number of Stingray devices deployed remains unknown because many agencies purchased them through non-public procurement channels and classified budgets.',
 'Despite the 2018 Carpenter decision, many agencies continued warrantless Stingray use by arguing the ruling doesn\'t specifically name cell-site simulators.',
 ],
 sources: [
 { title: 'ACLU - Stingray Tracking Devices', url: 'https://www.aclu.org/issues/privacy-technology/surveillance-technologies/stingray-tracking-devices', date: '2023' },
 { title: 'The Intercept - The Secret Surveillance Catalogue', url: 'https://theintercept.com/2015/12/17/a-secret-catalogue-of-government-gear-for-spying-on-your-cellphone/', date: '2015' },
 { title: 'Wall Street Journal - Americans\' Cellphones Targeted by Dirtboxes', url: 'https://www.wsj.com/articles/americans-cellphones-targeted-in-secret-u-s-spy-program-1415917533', date: '2014' },
 { title: 'USA Today - Baltimore Police Used Stingrays 4,300 Times', url: 'https://www.usatoday.com/story/news/2015/04/09/stingray-cellphone-surveillance-baltimore-police/25534231/', date: '2015' },
 { title: 'Carpenter v. United States - Supreme Court Opinion', url: 'https://www.supremecourt.gov/opinions/17pdf/16-402_h315.pdf', date: '2018' },
 { title: 'EFF - Cell-Site Simulators / IMSI Catchers', url: 'https://www.eff.org/pages/cell-site-simulatorsimsi-catchers', date: '2023' },
 { title: 'House Oversight Committee - Law Enforcement Use of Cell-Site Simulation', url: 'https://oversight.house.gov/report/law-enforcement-use-of-cell-site-simulation-technologies/', date: '2016' },
 { title: 'Wired - The Definitive Guide to Stingray Surveillance', url: 'https://www.wired.com/2014/03/stingray/', date: '2014' },
 ],
};

export default function StingraySurveillancePage() {
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
