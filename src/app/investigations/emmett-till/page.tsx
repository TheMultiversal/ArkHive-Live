'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowLeft, AlertTriangle, Users, Calendar, FileText, ExternalLink, Scale, ShieldAlert, Skull } from 'lucide-react';
import GlitchText from '@/components/effects/GlitchText';

const investigation = {
 title: 'The Murder of Emmett Till',
 subtitle: '14-Year-Old Murdered in Mississippi 1955 - Killers Acquitted by All-White Jury, Then Confessed',
 severity: 'critical',
 status: 'CONFIRMED, CASE REOPENED',
 summary: 'On August 28, 1955, fourteen-year-old Emmett Till was kidnapped from his great-uncle\'s home in Money, Mississippi, by Roy Bryant and J.W. Milam. He was brutally tortured, shot in the head, and his body was thrown into the Tallahatchie River tied to a 75-pound cotton gin fan with barbed wire. His alleged offense: whistling at or speaking to Carolyn Bryant, a white woman, in a grocery store. Emmett\'s mother, Mamie Till-Mobley, insisted on an open-casket funeral in Chicago, and the images of his mutilated body published in Jet magazine and the Chicago Defender galvanized the Civil Rights Movement. Despite overwhelming evidence, an all-white jury acquitted Bryant and Milam after 67 minutes of deliberation. Protected by double jeopardy, the killers later confessed in a paid Look magazine interview. In 2017, Carolyn Bryant admitted she had lied about Till\'s actions in the store. The case represents the systematic failure of American justice for Black victims and the complicity of entire communities in racial terror.',
 keyFigures: [
 { name: 'Emmett Till', role: '14-year-old from Chicago visiting family in Mississippi, kidnapped and murdered', href: '/entities/individuals/emmett-till', status: 'Murdered (Aug 28, 1955)' },
 { name: 'Mamie Till-Mobley', role: 'Emmett\'s mother who demanded open casket funeral, galvanized Civil Rights Movement', href: '/entities/individuals/mamie-till-mobley', status: 'Deceased (2003)' },
 { name: 'Roy Bryant', role: 'Store owner who kidnapped and murdered Emmett Till, acquitted by all-white jury', href: '/entities/individuals/roy-bryant', status: 'Deceased (1994)' },
 { name: 'J.W. Milam', role: 'Roy Bryant\'s half-brother who participated in kidnapping and murder, acquitted', href: '/entities/individuals/jw-milam', status: 'Deceased (1980)' },
 { name: 'Carolyn Bryant Donham', role: 'White woman who falsely accused Till, admitted lying in 2017', href: '/entities/individuals/carolyn-bryant', status: 'Deceased (2023)' },
 { name: 'Moses Wright', role: 'Emmett\'s great-uncle who witnessed the kidnapping and testified at trial', href: '/entities/individuals/moses-wright', status: 'Deceased (1977)' },
 { name: 'Willie Reed', role: 'Eyewitness who heard beating and saw Till being loaded into truck, testified at trial', href: '/entities/individuals/willie-reed', status: 'Deceased (2013)' },
 { name: 'Gerald Chatham', role: 'District Attorney who prosecuted Bryant and Milam', href: '/entities/individuals/gerald-chatham', status: 'Deceased' },
 { name: 'C. Sidney Carlton', role: 'Defense attorney for Bryant and Milam, appealed to racial prejudice', href: '/entities/individuals/c-sidney-carlton', status: 'Deceased' },
 { name: 'Medgar Evers', role: 'NAACP field secretary who investigated the Till case in Mississippi', href: '/entities/individuals/medgar-evers', status: 'Murdered (1963)' },
 { name: 'Timothy Tyson', role: 'Historian who recorded Carolyn Bryant\'s admission that she lied', href: '/entities/individuals/timothy-tyson', status: 'Active' },
 ],
 timeline: [
 { date: 'July 25, 1941', event: 'Emmett Louis Till born in Chicago, Illinois' },
 { date: 'August 20, 1955', event: 'Emmett Till arrives in Money, Mississippi to visit his great-uncle Moses Wright' },
 { date: 'August 24, 1955', event: 'Till allegedly whistles at or speaks to Carolyn Bryant at Bryant\'s Grocery, exact interaction disputed' },
 { date: 'August 28, 1955 (2AM)', event: 'Roy Bryant and J.W. Milam kidnap Emmett Till from Moses Wright\'s home at gunpoint' },
 { date: 'August 28, 1955', event: 'Till is beaten, tortured, shot in the head, and thrown into the Tallahatchie River' },
 { date: 'August 31, 1955', event: 'Till\'s body recovered from the river, identified by his father\'s ring' },
 { date: 'September 2, 1955', event: 'Mamie Till-Mobley insists on open casket funeral in Chicago - 50,000 view the body' },
 { date: 'September 6, 1955', event: 'Jet magazine publishes photos of Till\'s mutilated body, images shock the nation' },
 { date: 'September 19, 1955', event: 'Murder trial begins in Sumner, Mississippi, all-white jury selected' },
 { date: 'September 22, 1955', event: 'Moses Wright testifies, pointing directly at Milam and Bryant in the courtroom' },
 { date: 'September 23, 1955', event: 'All-white jury acquits Bryant and Milam after 67 minutes of deliberation' },
 { date: 'January 1956', event: 'Bryant and Milam confess to the murder in paid Look magazine interview, protected by double jeopardy' },
 { date: 'December 1, 1955', event: 'Rosa Parks refuses to give up bus seat in Montgomery, cites Emmett Till as inspiration' },
 { date: '2004', event: 'FBI reopens the Emmett Till case under new federal jurisdiction' },
 { date: '2007', event: 'Grand jury declines to indict anyone, Milam and Bryant already deceased' },
 { date: '2017', event: 'Carolyn Bryant Donham tells historian Timothy Tyson she fabricated her testimony about Till\'s actions' },
 { date: '2022', event: 'Emmett Till Antilynching Act signed into law, first federal anti-lynching legislation' },
 { date: '2023', event: 'Mississippi grand jury declines to indict Carolyn Bryant Donham despite her admission of lying' },
 ],
 legalOutcomes: [
 { defendant: 'Roy Bryant', charge: 'Murder of Emmett Till', outcome: 'Acquitted by all-white jury in 67 minutes, later confessed in paid interview' },
 { defendant: 'J.W. Milam', charge: 'Murder of Emmett Till', outcome: 'Acquitted, later confessed in Look magazine, protected by double jeopardy' },
 { defendant: 'Carolyn Bryant Donham', charge: 'Kidnapping/accessory (2022 unserved warrant discovered)', outcome: 'Grand jury declined to indict in 2023 despite her admission of lying' },
 { defendant: 'Grand Jury (2007)', charge: 'Federal reinvestigation of Till murder', outcome: 'No new indictments, key suspects deceased' },
 { defendant: 'Leflore County Sheriff', charge: 'Failure to investigate kidnapping and protect a minor', outcome: 'No accountability, complicit in cover-up' },
 { defendant: 'State of Mississippi', charge: 'Systematic failure of justice through all-white jury system', outcome: 'No institutional accountability, system continued for decades' },
 { defendant: 'Look Magazine', charge: 'Published paid confession by acquitted murderers', outcome: 'No legal consequences, First Amendment protection' },
 { defendant: 'DOJ (2022 closure)', charge: 'Final review of Emmett Till case', outcome: 'Case officially closed, DOJ unable to prove federal charges beyond reasonable doubt' },
 ],
 charges: [
 { statute: 'Mississippi Code § 97-3-19 - Murder', description: 'Kidnapping, torture, and murder of 14-year-old Emmett Till', count: '1 victim, acquittal despite confession' },
 { statute: '18 U.S.C. § 1201 - Kidnapping', description: 'Forcible abduction of a minor from his great-uncle\'s home at gunpoint', count: '1 victim, never prosecuted federally' },
 { statute: '18 U.S.C. § 1001 - False Statements', description: 'Carolyn Bryant\'s false testimony about Till\'s actions in the store', count: 'Perjury that led to acquittal, admitted lying in 2017' },
 { statute: '18 U.S.C. § 241 - Conspiracy Against Rights', description: 'Conspiracy to deprive Emmett Till of his civil rights through racial violence', count: 'Multiple participants in kidnapping and murder' },
 { statute: '18 U.S.C. § 242 - Deprivation of Rights Under Color of Law', description: 'Law enforcement complicity in allowing murder and obstructing justice', count: 'Sheriff and judicial system complicit' },
 { statute: '18 U.S.C. § 1512 - Witness Tampering', description: 'Intimidation of Black witnesses in Tallahatchie County', count: 'Multiple witnesses fled Mississippi after testifying' },
 { statute: 'Mississippi Code § 97-1-1 - Accessory', description: 'Carolyn Bryant\'s role in identifying Till and participating in events leading to murder', count: 'Unserved 1955 arrest warrant discovered in courthouse' },
 { statute: '18 U.S.C. § 249 - Emmett Till Hate Crimes Act (2009)', description: 'Hate crime resulting in death, based on race', count: 'Law named for Till, enacted 54 years after his murder' },
 ],
 coverup: [
 'Carolyn Bryant testified that Emmett Till grabbed her and made sexual advances, she admitted to historian Timothy Tyson in 2017 that this was fabricated',
 'An unserved arrest warrant for Carolyn Bryant from 1955 was discovered in a courthouse basement in 2023 - it had never been executed',
 'The defense attorneys openly appealed to racial prejudice during the trial, telling the all-white jury that convicting would betray their "Anglo-Saxon heritage"',
 'After acquittal, Bryant and Milam sold their confession to Look magazine for $4,000 - facing no legal consequences due to double jeopardy',
 'Black witnesses who testified were forced to flee Mississippi, Moses Wright left within days of the verdict due to death threats',
 'Tallahatchie County officials destroyed or failed to preserve evidence from the case for decades',
 'The Tallahatchie County sheriff assisted the defense by identifying and delivering hostile witnesses to undermine the prosecution',
 'Mississippi state officials made no effort to hold Bryant and Milam accountable even after their public confession in Look magazine',
 'When the FBI reopened the case in 2004, key evidence had been destroyed and most witnesses had died, the delay was itself a form of cover-up',
 'A Mississippi grand jury declined to indict Carolyn Bryant Donham in 2023 even after her admission that she lied about Till\s actions',
 ],
 sources: [
 { title: 'FBI, Emmett Till Case Files', url: 'https://vault.fbi.gov/Emmett%20Till', date: '2006 (released)' },
 { title: 'Mamie Till-Mobley & Christopher Benson, Death of Innocence', url: 'https://www.penguinrandomhouse.com/books/292090/death-of-innocence-by-mamie-till-mobley/', date: '2003' },
 { title: 'Timothy Tyson, The Blood of Emmett Till', url: 'https://www.simonandschuster.com/books/The-Blood-of-Emmett-Till/Timothy-B-Tyson/9781476714851', date: '2017' },
 { title: 'Look Magazine, Shocking Story of Approved Killing in Mississippi', url: 'https://www.pbs.org/wgbh/americanexperience/features/till-killers-confess/', date: 'January 1956' },
 { title: 'Smithsonian National Museum of African American History, Emmett Till', url: 'https://nmaahc.si.edu/explore/stories/emmett-till', date: 'Ongoing' },
 { title: 'DOJ Report on Emmett Till Case Closure', url: 'https://www.justice.gov/crt/case/united-states-v-roy-bryant-and-jw-milam', date: '2022' },
 { title: 'PBS American Experience, The Murder of Emmett Till', url: 'https://www.pbs.org/wgbh/americanexperience/films/till/', date: '2003' },
 { title: 'Devery Anderson, Emmett Till: The Murder That Shocked the World', url: 'https://www.upress.state.ms.us/Books/E/Emmett-Till', date: '2015' },
 ],
};

export default function EmmettTillPage() {
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
