'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowLeft, AlertTriangle, Users, Calendar, FileText, ExternalLink, Scale, ShieldAlert, Skull } from 'lucide-react';
import GlitchText from '@/components/effects/GlitchText';

const investigation = {
 title: 'Civil Asset Forfeiture',
 subtitle: '$68.8 Billion Seized From People Never Charged With a Crime: Legalized Theft Under Color of Law',
 severity: 'critical',
 status: 'ONGOING, SYSTEMIC',
 summary: 'Civil asset forfeiture allows law enforcement to seize property (cash, cars, homes) from individuals who have never been charged with, let alone convicted of, a crime. Since 2000, the federal government alone has seized over $68.8 billion through forfeiture programs. Police departments use the seized assets to fund their own operations, creating a perverse incentive to take property. In many jurisdictions, the burden of proof falls on the property owner to prove their assets are"innocent."Studies show that the majority of seizures affect low-income and minority communities, with average seizure amounts often too small to justify the legal costs of challenging them. This investigation exposes a system where the government can take everything you own based on suspicion alone, a system the Supreme Court has described as raising"serious constitutional concerns"while repeatedly declining to abolish it.',
 keyFigures: [
 { name: 'Jeff Sessions', role: 'US Attorney General who expanded federal forfeiture programs in 2017, reversing Obama-era restrictions', href: '/entities/individuals/jeff-sessions', status: 'Former AG' },
 { name: 'Eric Holder', role: 'US Attorney General who limited federal adoption of state seizures in 2015', href: '/entities/individuals/eric-holder', status: 'Former AG' },
 { name: 'Clarence Thomas', role: 'Supreme Court Justice who authored scathing critique of civil forfeiture in Leonard v. Texas', href: '/entities/individuals/clarence-thomas', status: 'Supreme Court Justice' },
 { name: 'Ruth Bader Ginsburg', role: 'Supreme Court Justice who authored Timbs v. Indiana, limiting forfeiture under Excessive Fines Clause', href: '/entities/individuals/ruth-bader-ginsburg', status: 'Deceased 2020' },
 { name: 'Dick Carpenter', role: 'Institute for Justice researcher documenting forfeiture abuse through "Policing for Profit"reports', href: '/entities/individuals/dick-carpenter', status: 'Active, IJ' },
 { name: 'Eh Wah', role: 'Burmese refugee and Christian rock band manager who had $53,000 seized by Oklahoma police on I-40', href: '/entities/individuals/eh-wah', status: 'Victim, Funds returned after publicity' },
 { name: 'Joseph Rivers', role: 'Aspiring music producer who had $16,000 in life savings seized by DEA on Amtrak train', href: '/entities/individuals/joseph-rivers', status: 'Victim' },
 { name: 'Mandrel Stuart', role: 'Virginia restaurant owner who had $17,550 seized during traffic stop; never charged', href: '/entities/individuals/mandrel-stuart', status: 'Victim, Lost restaurant' },
 { name: 'Terry Dehko', role: 'Michigan grocery store owner whose entire bank account was seized through structuring allegations', href: '/entities/individuals/terry-dehko', status: 'Victim, IRS seizure' },
 { name: 'Tim Walberg', role: 'US Congressman who co-sponsored DUE PROCESS Act to reform federal forfeiture', href: '/entities/individuals/tim-walberg', status: 'Active, Congress' },
 { name: 'Rand Paul', role: 'US Senator who introduced FAIR Act to require criminal conviction before permanent forfeiture', href: '/entities/individuals/rand-paul', status: 'Active, Senate' },
 ],
 timeline: [
 { date: '1970-10-27', event: 'Comprehensive Drug Abuse Prevention and Control Act includes civil forfeiture provisions for drug-related assets' },
 { date: '1978-01-01', event: 'DOJ creates Assets Forfeiture Fund allowing agencies to keep proceeds from seizures' },
 { date: '1984-10-12', event: 'Comprehensive Crime Control Act expands forfeiture powers and creates"equitable sharing"with state/local police' },
 { date: '1996-04-24', event: 'Supreme Court rules in Bennis v. Michigan that innocent owner defense is not constitutionally required' },
 { date: '2000-04-25', event: 'Civil Asset Forfeiture Reform Act signed; raises standard of proof to preponderance but doesn\'t require conviction' },
 { date: '2001-09-11', event: 'Post-9/11 expansions further broaden forfeiture authority under terrorism-related statutes' },
 { date: '2008-01-01', event: 'IRS begins aggressive "structuring" seizures targeting small businesses; no criminal activity required' },
 { date: '2014-09-03', event: 'Washington Post "Stop and Seize"investigation reveals police seize billions without charges' },
 { date: '2014-11-01', event: 'New Yorker investigation documents widespread abuse of forfeiture in small Texas towns' },
 { date: '2015-01-16', event: 'AG Eric Holder restricts federal "adoption" of state seizures; limits equitable sharing' },
 { date: '2016-03-29', event: 'Institute for Justice publishes "Policing for Profit"- comprehensive study of forfeiture abuse nationwide' },
 { date: '2017-03-14', event: 'Supreme Court Justice Thomas issues statement in Leonard v. Texas criticizing forfeiture as constitutionally suspect' },
 { date: '2017-07-19', event: 'AG Jeff Sessions restores expanded equitable sharing, reversing Holder\'s restrictions' },
 { date: '2019-02-20', event: 'Supreme Court rules unanimously in Timbs v. Indiana that Excessive Fines Clause applies to states' },
 { date: '2020-09-01', event: 'Institute for Justice reports federal forfeiture fund exceeds $8 billion; total seizures since 2000 exceed $68.8B' },
 { date: '2021-04-01', event: 'New Mexico becomes first state to completely abolish civil forfeiture, requires criminal conviction' },
 { date: '2022-06-01', event: 'Multiple states pass reform legislation requiring conviction or raising burden of proof' },
 { date: '2023-03-15', event: 'DUE PROCESS Act reintroduced in Congress to reform federal civil forfeiture nationwide' },
 { date: '2024-01-01', event: 'Despite reforms, federal equitable sharing payments to state and local agencies exceed $800M annually' },
 ],
 legalOutcomes: [
 { defendant: 'Bennis v. Michigan (1996)', charge: 'Innocent owner defense challenge', outcome: 'Supreme Court ruled innocent owner defense is not constitutionally required' },
 { defendant: 'United States v. James Daniel Good Real Property (1993)', charge: 'Due process challenge to property seizure', outcome: 'Court required pre-seizure hearing for real property' },
 { defendant: 'Timbs v. Indiana (2019)', charge: 'Excessive fines clause applicability to states', outcome: 'Unanimous Supreme Court, Excessive Fines Clause applies to states via 14th Amendment' },
 { defendant: 'Leonard v. Texas (2017)', charge: 'Constitutional challenge to civil forfeiture', outcome: 'Cert denied, but Thomas issued powerful statement questioning constitutionality' },
 { defendant: 'Civil Asset Forfeiture Reform Act (2000)', charge: 'Legislative reform', outcome: 'Raised burden of proof; still doesn\'t require criminal conviction' },
 { defendant: 'DOJ Equitable Sharing Program', charge: 'State/local agencies receive federal forfeiture proceeds', outcome: '$8B+ in fund; Sessions expanded, Holder restricted, ongoing' },
 { defendant: 'New Mexico Reform (2021)', charge: 'State abolition of civil forfeiture', outcome: 'First state to require criminal conviction; model for other states' },
 { defendant: 'DUE PROCESS Act', charge: 'Federal reform legislation', outcome: 'Reintroduced multiple times; not yet passed' },
 ],
 charges: [
 { statute: '18 U.S.C. § 981: Civil Forfeiture', description: 'Federal civil forfeiture statute allowing seizure of property connected to criminal activity without criminal charge', count: 'Hundreds of thousands of cases annually' },
 { statute: '21 U.S.C. § 881: Drug-Related Forfeiture', description: 'Forfeiture of property used in or derived from drug offenses, the most commonly invoked statute', count: 'Majority of federal seizures' },
 { statute: '31 U.S.C. § 5332: Bulk Cash Smuggling', description: 'Seizure of undeclared currency; often used against people carrying legal amounts of cash', count: 'Frequent highway seizures' },
 { statute: '31 U.S.C. § 5324: Structuring', description: 'IRS seizure of bank accounts based on patterns of deposits under $10,000, even without criminal intent', count: 'Thousands of small business owners affected' },
 { statute: 'Excessive Fines Clause: 8th Amendment', description: 'Constitutional provision limiting government fines and forfeitures; applied to states via Timbs v. Indiana', count: 'Foundation for reform challenges' },
 { statute: 'Due Process Clause: 5th/14th Amendment', description: 'Constitutional requirement for fair process before deprivation of property, routinely violated in forfeiture', count: 'Systemic violation documented' },
 { statute: '28 U.S.C. § 524(c): Assets Forfeiture Fund', description: 'Federal fund allowing DOJ to retain forfeiture proceeds for agency use, creating perverse incentive', count: '$8B+ in fund' },
 { statute: 'Equitable Sharing Guidelines', description: 'Federal program sharing forfeiture proceeds with state/local agencies, incentivizing policing for profit', count: '$800M+ annually distributed' },
 { statute: '42 U.S.C. § 1983: Civil Rights Violation', description: 'Deprivation of property rights under color of law without due process', count: 'Foundation for individual challenges' },
 ],
 coverup: [
 'Law enforcement agencies systematically target travelers carrying cash on highways (particularly minorities) seizing money with no evidence of criminal activity',
 'The"equitable sharing"program allows state and local police to circumvent state forfeiture restrictions by partnering with federal agencies',
 'Most seizure amounts are too small ($1,000-$5,000) for owners to afford legal representation to challenge, ensuring the government keeps the money by default',
 'Police departments use forfeited assets to fund equipment, salaries, and even parties, creating a direct financial incentive to seize property',
 'The IRS seized entire bank accounts of small business owners based solely on patterns of deposits under $10,000, with no underlying crime',
 'Studies show that Black and Hispanic Americans are disproportionately targeted for cash seizures during routine traffic stops',
 'Some jurisdictions have forfeiture quotas, officers are evaluated and promoted based on the value of property they seize',
 'The burden of proof in civil forfeiture falls on the property owner, not the government, a reversal of the presumption of innocence',
 'Law enforcement lobbying groups have consistently opposed reform legislation, spending millions to protect their forfeiture revenue stream',
 ],
 sources: [
 { title: 'Policing for Profit, Institute for Justice Report', url: 'https://ij.org/report/policing-for-profit-3/', date: '2020-09-01' },
 { title: 'Stop and Seize, Washington Post Investigation', url: 'https://www.washingtonpost.com/sf/investigative/2014/09/06/stop-and-seize/', date: '2014-09-06' },
 { title: 'Timbs v. Indiana, Supreme Court Opinion', url: 'https://www.supremecourt.gov/opinions/18pdf/17-1091_5536.pdf', date: '2019-02-20' },
 { title: 'Justice Thomas Statement on Civil Forfeiture, Leonard v. Texas', url: 'https://www.supremecourt.gov/opinions/16pdf/16-122_b97c.pdf', date: '2017-03-06' },
 { title: 'Taken, New Yorker Investigation of Civil Forfeiture Abuse', url: 'https://www.newyorker.com/magazine/2013/08/12/taken', date: '2013-08-12' },
 { title: 'ACLU Civil Asset Forfeiture Reform Campaign', url: 'https://www.aclu.org/issues/criminal-law-reform/reforming-police/asset-forfeiture-abuse', date: '2023-01-01' },
 { title: 'DOJ Assets Forfeiture Fund Annual Report', url: 'https://www.justice.gov/afp/fund-reports', date: '2023-01-01' },
 { title: 'Sessions Restores Forfeiture Powers Rolled Back Under Obama', url: 'https://www.nytimes.com/2017/07/19/us/politics/jeff-sessions-civil-asset-forfeiture.html', date: '2017-07-19' },
 ],
};

export default function CivilAssetForfeiture() {
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
