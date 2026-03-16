'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowLeft, AlertTriangle, Users, Calendar, FileText, ExternalLink, Scale, ShieldAlert, Skull } from 'lucide-react';
import GlitchText from '@/components/effects/GlitchText';

const investigation = {
 title: 'ICE Detention Abuses',
 subtitle: 'Deaths, Forced Hysterectomies, and Children in Cages, America\'s Immigration Gulag',
 severity: 'critical',
 status: 'ONGOING',
 summary: 'Immigration and Customs Enforcement (ICE) operates a vast network of over 200 detention facilities holding approximately 30,000 people on any given day. Since its creation in 2003, at least 300 people have died in ICE custody. Detainees have reported rampant sexual abuse, inadequate medical care, solitary confinement as punishment, and forced labor paying $1 per day. In 2020, a whistleblower nurse revealed that a Georgia facility was performing forced hysterectomies on detained women. The Trump administration\'s"zero tolerance"policy deliberately separated thousands of children from their parents, with over 5,500 children removed, some never reunited with their families. Private prison corporations CoreCivic and GEO Group profit billions annually from detaining immigrants, spending millions on lobbying to ensure continued mass detention.',
 keyFigures: [
 { name: 'Thomas Homan', role: 'Former ICE Acting Director who championed"zero tolerance"enforcement', href: '/entities/individuals/thomas-homan', status: 'Active' },
 { name: 'Stephen Miller', role: 'Senior White House Advisor, architect of family separation and Muslim ban policies', href: '/entities/individuals/stephen-miller', status: 'Active' },
 { name: 'Jeff Sessions', role: 'Attorney General who implemented"zero tolerance"policy requiring criminal prosecution of all border crossers', href: '/entities/individuals/jeff-sessions', status: 'Active' },
 { name: 'Kirstjen Nielsen', role: 'DHS Secretary who initially denied family separation policy existed', href: '/entities/individuals/kirstjen-nielsen', status: 'Active' },
 { name: 'Scott Lloyd', role: 'Director of Office of Refugee Resettlement who blocked detained minors from accessing abortions', href: '/entities/individuals/scott-lloyd', status: 'Active' },
 { name: 'Dawn Wooten', role: 'Whistleblower nurse at Irwin County Detention Center who exposed forced hysterectomies', href: '/entities/individuals/dawn-wooten', status: 'Active' },
 { name: 'Mahendra Amin', role: 'Gynecologist accused of performing unnecessary hysterectomies on detained women', href: '/entities/individuals/mahendra-amin', status: 'Under Investigation' },
 { name: 'George Zoley', role: 'CEO of GEO Group, largest private prison operator, major Trump donor', href: '/entities/individuals/george-zoley', status: 'Active' },
 { name: 'Damon Hininger', role: 'Former CEO of CoreCivic (formerly CCA), profited from expanded detention', href: '/entities/individuals/damon-hininger', status: 'Active' },
 { name: 'Kevin McAleenan', role: 'CBP Commissioner who oversaw conditions leading to children\'s deaths at the border', href: '/entities/individuals/kevin-mcaleenan', status: 'Active' },
 { name: 'Matthew Albence', role: 'ICE Acting Director who compared detention centers to"summer camps"', href: '/entities/individuals/matthew-albence', status: 'Active' },
 ],
 timeline: [
 { date: '2003', event: 'ICE created under Department of Homeland Security following 9/11; inherits INS detention system' },
 { date: '2005', event: 'Operation Streamline begins criminal prosecution of all illegal border crossings in certain sectors' },
 { date: '2009', event: 'ICE detention bed quota of 34,000 established by Congress, requiring ICE to fill beds regardless of need' },
 { date: '2014', event: 'Obama administration opens family detention centers to house Central American asylum seekers; conditions immediately challenged' },
 { date: '2016', event: 'Flores settlement reaffirmed: children cannot be held in immigration detention for more than 20 days' },
 { date: '2017', event: 'Trump signs executive orders expanding ICE enforcement priorities to virtually all undocumented immigrants' },
 { date: '2017-04', event: 'DOJ pilot program begins zero tolerance prosecution in El Paso sector, resulting in first family separations' },
 { date: '2018-04', event: 'Sessions announces official"zero tolerance"policy; systematic family separation begins at scale' },
 { date: '2018-06', event: 'Audio of wailing children separated from parents leaks, causing national outcry' },
 { date: '2018-06', event: 'Trump signs executive order ending family separation after massive backlash, but thousands remain separated' },
 { date: '2018-12', event: 'Two Guatemalan children, Jakelin Caal Maquín (7) and Felipe Alonzo-Gómez (8); die in CBP custody within weeks' },
 { date: '2019', event: 'DHS Inspector General reports dangerous overcrowding, children without soap or toothbrushes, standing-room-only cells' },
 { date: '2019-07', event: 'Congressional delegation visits detention centers; AOC describes conditions as people"drinking out of toilets"' },
 { date: '2020-09', event: 'Whistleblower Dawn Wooten files complaint alleging mass hysterectomies at Irwin County Detention Center in Georgia' },
 { date: '2021', event: 'Biden administration discovers over 5,500 children were separated; hundreds still not reunited with parents' },
 { date: '2022', event: 'DOJ investigation confirms systemic medical neglect contributing to multiple deaths in ICE custody' },
 { date: '2023', event: 'ICE deaths continue; private prison companies report record profits; over 300 total deaths in ICE custody since 2003' },
 { date: '2024', event: 'Lawsuits continue against ICE facilities; GEO Group and CoreCivic stock prices reach new highs' },
 ],
 legalOutcomes: [
 { defendant: 'Trump Administration', charge: 'Family separation policy violating due process', outcome: 'Ms. L v. ICE, federal court ordered reunification; hundreds of children still not reunited years later' },
 { defendant: 'ICE / DHS', charge: 'Flores settlement violations, children held in unsafe conditions', outcome: 'Multiple court findings of violation; ongoing monitoring' },
 { defendant: 'Irwin County Detention Center / LaSalle Corrections', charge: 'Forced hysterectomies and medical abuse', outcome: 'Facility closed for ICE detention 2021; criminal investigation ongoing against Dr. Amin' },
 { defendant: 'CoreCivic', charge: 'Forced labor, paying detainees $1/day for essential facility operations', outcome: 'Class action lawsuits in multiple states; some settlements reached' },
 { defendant: 'GEO Group', charge: 'Inhumane conditions and inadequate medical care leading to deaths', outcome: 'Multiple wrongful death lawsuits; company continues operating' },
 { defendant: 'ICE', charge: 'Use of solitary confinement as punishment including on asylum seekers', outcome: 'DHS reviews ordered; limited reforms implemented' },
 { defendant: 'CBP', charge: 'Deaths of children in custody due to inadequate medical screening', outcome: 'Policy changes required; limited accountability for individual deaths' },
 { defendant: 'Stephen Miller / White House', charge: 'Deliberate cruelty as deterrence, using child separation as immigration policy', outcome: 'No criminal charges despite IG reports confirming deliberate intent' },
 ],
 charges: [
 { statute: '18 U.S.C. § 242', description: 'Deprivation of rights under color of law, subjecting detainees to cruel conditions, forced medical procedures, and death through negligence', count: '300+ deaths, thousands of documented abuse cases' },
 { statute: '18 U.S.C. § 1589', description: 'Forced labor, compelling detainees to work for $1/day to maintain detention facilities', count: 'Systematic across CoreCivic and GEO Group facilities' },
 { statute: '18 U.S.C. § 2441', description: 'War crimes, systematic abuse including forced sterilization, inadequate medical care, and cruel conditions of confinement', count: 'Pattern and practice across detention network' },
 { statute: '8th Amendment', description: 'Cruel and unusual punishment, deplorable conditions, medical neglect, solitary confinement, sexual abuse', count: 'Hundreds of documented incidents annually' },
 { statute: '5th Amendment (Due Process)', description: 'Deprivation of liberty without due process, indefinite detention, family separation without hearings', count: 'Tens of thousands of detainees affected' },
 { statute: '18 U.S.C. § 1201', description: 'Kidnapping, forcible separation of children from parents without legal authority or due process', count: '5,500+ children separated from families' },
 { statute: '18 U.S.C. § 2340A', description: 'Torture, conditions amounting to torture including extreme cold, sleep deprivation, and overcrowding', count: 'Multiple facilities, systematic pattern' },
 { statute: '42 U.S.C. § 1983', description: 'Civil rights violations under color of law through systematic abuse in government-contracted facilities', count: 'Nationwide pattern across 200+ facilities' },
 ],
 coverup: [
 'The Trump administration initially denied that family separation was a policy at all, DHS Secretary Nielsen told reporters"we do not have a policy of separating families at the border"while thousands of children were being taken.',
 'ICE destroyed or failed to maintain records linking separated children to their parents, making reunification impossible for hundreds of families.',
 'Private prison companies GEO Group and CoreCivic donated millions to Trump\'s inaugural committee and super PACs while receiving billions in government contracts for detention.',
 'ICE routinely denied journalists and congressional representatives access to detention facilities, particularly during periods of reported abuse.',
 'The 34,000-bed detention mandate created by Congress ensured a minimum level of detention regardless of actual need, effectively a guaranteed revenue floor for private prison companies.',
 'When whistleblower Dawn Wooten reported forced hysterectomies, ICE and LaSalle Corrections initially dismissed her claims and attempted to discredit her.',
 'Deaths in ICE custody are systematically underreported, facilities delay death notifications and ICE\'s own death review process has been criticized as inadequate and self-serving.',
 'ICE used the COVID-19 pandemic as justification for Title 42 expulsions, circumventing asylum law entirely while continuing to hold detainees in crowded, unsafe conditions.',
 'The government argued in court that detained children did not require soap, toothbrushes, or beds under the Flores settlement, a position so extreme the judges expressed visible shock.',
 ],
 sources: [
 { title: 'Whistleblower: ICE Facility Performed Mass Hysterectomies, The Intercept', url: 'https://theintercept.com/2020/09/15/icE-detention-center-hysterectomies/', date: '2020-09-15' },
 { title: 'Separated: Inside an American Tragedy, Jacob Soboroff', url: 'https://www.nbcnews.com/politics/immigration/more-5-400-children-split-border-according-new-count-n1071791', date: '2019-10-25' },
 { title: 'DHS OIG Report: Dangerous Overcrowding at El Paso Border Facilities', url: 'https://www.oig.dhs.gov/sites/default/files/assets/2019-07/OIG-19-51-Jul19_.pdf', date: '2019-07-02' },
 { title: 'Deaths in ICE Custody, ACLU Tracking', url: 'https://www.aclu.org/issues/immigrants-rights/ice-and-border-patrol-abuses/deaths-ice-custody', date: '2023' },
 { title: 'Private Prison Company Exposed, Center for Constitutional Rights', url: 'https://ccrjustice.org/home/what-we-do/our-cases/immigration-detention', date: '2022' },
 { title: 'Inside ICE\'s Immigration Detention Machine, New York Times', url: 'https://www.nytimes.com/2018/12/05/us/politics/border-migrants-detained-children.html', date: '2018-12-05' },
 { title: 'Zero Tolerance Family Separation, Congressional Research Service', url: 'https://sgp.fas.org/crs/homesec/R45266.pdf', date: '2019' },
 { title: 'GEO Group and CoreCivic: Private Immigration Detention, Sentencing Project', url: 'https://www.sentencingproject.org/reports/capitalizing-on-mass-incarceration-u-s-growth-in-private-prisons/', date: '2020' },
 ],
};

export default function ICEDetentionPage() {
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
 <div className="space-y-3">{investigation.keyFigures.map((figure, idx) => (<div key={idx} className="flex items-start justify-between p-3 bg-[#000a1c] border border-[rgba(80,180,255,0.15)]"><div className="flex-1">{figure.href ? (<Link href={figure.href} className="font-bold text-blood-400 hover:text-blood-300 transition-colors">{figure.name}</Link>) : (<span className="font-bold glass-text">{figure.name}</span>)}<p className="text-sm text-zinc-400 mt-1">{figure.role}</p></div><span className="text-xs px-2 py-1 bg-[#000c20] text-zinc-400 border border-[rgba(60,160,255,0.18)] whitespace-nowrap ml-2">{figure.status}</span></div>))}</div>
 </motion.div>
 <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }} className="glass-card p-6">
 <h2 className="text-xl font-bold glass-text uppercase tracking-wider mb-4 flex items-center gap-2"><Scale className="w-5 h-5 text-blood-500"/>Applicable Charges &amp; Statutes</h2>
 <div className="space-y-3">{investigation.charges.map((charge, idx) => (<div key={idx} className="p-4 bg-[#000a1c] border border-[rgba(80,180,255,0.15)]"><p className="font-bold text-blood-400 text-sm font-mono">{charge.statute}</p><p className="text-sm text-zinc-300 mt-1">{charge.description}</p><p className="text-xs text-blood-400 mt-1">{charge.count}</p></div>))}</div>
 </motion.div>
 </div>
 <div className="space-y-6">
 <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} className="glass-card p-6">
 <h3 className="text-lg font-bold glass-text uppercase tracking-wider mb-4 flex items-center gap-2"><Calendar className="w-4 h-4 text-blood-500"/>Timeline</h3>
 <div className="space-y-4">{investigation.timeline.map((item, idx) => (<div key={idx} className="relative pl-4 border-l-2 border-[rgba(80,180,255,0.15)]"><div className="absolute -left-[5px] top-0 w-2 h-2 bg-blood-500"/><p className="text-xs text-blood-500 font-mono">{item.date}</p><p className="text-sm text-zinc-300">{item.event}</p></div>))}</div>
 </motion.div>
 <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.1 }} className="glass-card p-6">
 <h3 className="text-lg font-bold glass-text uppercase tracking-wider mb-4 flex items-center gap-2"><Scale className="w-5 h-5 text-blood-500"/>Legal Outcomes</h3>
 <div className="space-y-3">{investigation.legalOutcomes.map((item, idx) => (<div key={idx} className="p-3 bg-[#000a1c] border border-[rgba(80,180,255,0.15)]"><p className="font-bold glass-text text-sm">{item.defendant}</p><p className="text-xs text-zinc-400 mt-1">{item.charge}</p><p className="text-xs text-blood-400 mt-1">{item.outcome}</p></div>))}</div>
 </motion.div>
 <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.2 }} className="glass-card p-6">
 <h3 className="text-lg font-bold glass-text uppercase tracking-wider mb-4">Sources</h3>
 <div className="space-y-2">{investigation.sources.map((source, idx) => (<a key={idx} href={source.url} target="_blank"rel="noopener noreferrer"className="flex items-start gap-2 p-2 text-sm text-zinc-400 hover:text-blood-400 hover:bg-[#000a1c] transition-colors"><ExternalLink className="w-4 h-4 mt-0.5 flex-shrink-0"/><div><span>{source.title}</span><span className="text-zinc-600 ml-2">({source.date})</span></div></a>))}</div>
 </motion.div>
 </div>
 </div>
 </div>
 </div>
 );
}
