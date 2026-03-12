'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowLeft, AlertTriangle, Users, Calendar, FileText, ExternalLink, Scale, ShieldAlert, Skull } from 'lucide-react';
import GlitchText from '@/components/effects/GlitchText';

const investigation = {
 title: 'Malcolm X Assassination',
 subtitle: 'FBI & NYPD Informants, Wrongful Convictions, and the 2021 Exonerations That Proved a 56-Year Cover-Up',
 severity: 'critical',
 status: 'EXONERATIONS GRANTED 2021',
 summary: 'Malcolm X was assassinated on February 21, 1965, at the Audubon Ballroom in Manhattan. Three men were convicted (Mujahid Abdul Halim (Talmadge Hayer), Muhammad Abdul Aziz, and Khalil Islam) but Halim testified that Aziz and Islam were innocent and named the actual accomplices. For 56 years, two innocent men languished in prison while the FBI and NYPD concealed evidence proving their innocence. A 2021 investigation by the Manhattan DA revealed that the FBI had informants inside Malcolm X\'s security detail and the Nation of Islam, that the NYPD withdrew its surveillance team from the Audubon Ballroom on the day of the assassination, and that prosecutors withheld exculpatory evidence. Aziz and Islam were exonerated in November 2021 - a damning indictment of a justice system corrupted by government conspiracy.',
 keyFigures: [
 { name: 'Malcolm X (El-Hajj Malik El-Shabazz)', role: 'Civil rights leader assassinated February 21, 1965 at Audubon Ballroom, Manhattan', href: '/entities/individuals/malcolm-x', status: 'Assassinated' },
 { name: 'Muhammad Abdul Aziz (Norman 3X Butler)', role: 'Wrongfully convicted of Malcolm X\'s murder; exonerated after 56 years in November 2021', href: '/entities/individuals/muhammad-abdul-aziz', status: 'Exonerated 2021' },
 { name: 'Khalil Islam (Thomas 15X Johnson)', role: 'Wrongfully convicted; maintained innocence for decades; died 2009 before exoneration', href: '/entities/individuals/khalil-islam', status: 'Deceased 2009 - Exonerated posthumously' },
 { name: 'Mujahid Abdul Halim (Talmadge Hayer)', role: 'Self-confessed assassin who testified that Aziz and Islam were innocent and named the real accomplices', href: '/entities/individuals/mujahid-abdul-halim', status: 'Released 2010' },
 { name: 'J. Edgar Hoover', role: 'FBI Director who authorized COINTELPRO surveillance and disruption of Malcolm X', href: '/entities/individuals/j-edgar-hoover', status: 'Deceased 1972' },
 { name: 'Ray Wood', role: 'Undercover NYPD officer who infiltrated Malcolm X\'s security team; deathbed confession letter revealed in 2021', href: '/entities/individuals/ray-wood', status: 'Deceased 2020' },
 { name: 'Cyrus Vance Jr.', role: 'Manhattan DA who ordered the reinvestigation leading to the 2021 exonerations', href: '/entities/individuals/cyrus-vance-jr', status: 'Former DA' },
 { name: 'Elijah Muhammad', role: 'Nation of Islam leader whose dispute with Malcolm X provided motive for assassination', href: '/entities/individuals/elijah-muhammad', status: 'Deceased 1975' },
 { name: 'Louis Farrakhan', role: 'Nation of Islam minister who made incendiary statements about Malcolm X before assassins acted', href: '/entities/individuals/louis-farrakhan', status: 'Active' },
 { name: 'Betty Shabazz', role: 'Wife of Malcolm X who witnessed the assassination and spent her life seeking justice', href: '/entities/individuals/betty-shabazz', status: 'Deceased 1997' },
 { name: 'Abdur-Rahman Muhammad', role: 'Researcher and activist whose decades-long investigation helped identify the actual assassins', href: '/entities/individuals/abdur-rahman-muhammad', status: 'Active' },
 ],
 timeline: [
 { date: '1953-08-01', event: 'FBI opens file on Malcolm X; surveillance begins under COINTELPRO predecessor programs' },
 { date: '1964-03-08', event: 'Malcolm X publicly breaks with the Nation of Islam and Elijah Muhammad' },
 { date: '1964-06-12', event: 'FBI memo describes Malcolm X as a target for "neutralization" under COINTELPRO' },
 { date: '1964-07-09', event: 'FBI plants informants within Malcolm X\'s Organization of Afro-American Unity (OAAU)' },
 { date: '1964-12-04', event: 'Louis Farrakhan writes in Muhammad Speaks:"such a man as Malcolm is worthy of death"' },
 { date: '1965-02-14', event: 'Malcolm X\'s home in Queens is firebombed; NYPD investigation is perfunctory' },
 { date: '1965-02-21', event: 'NYPD undercover officer Ray Wood arranges arrest of Malcolm X\'s security chief, stripping his protection' },
 { date: '1965-02-21', event: 'NYPD withdraws its surveillance team from the Audubon Ballroom on the day of the assassination' },
 { date: '1965-02-21', event: 'Malcolm X assassinated by multiple gunmen at the Audubon Ballroom, Manhattan, at 3:10 PM' },
 { date: '1965-02-26', event: 'Talmadge Hayer (Halim), Norman 3X Butler (Aziz), and Thomas 15X Johnson (Islam) arrested' },
 { date: '1966-03-11', event: 'All three convicted of first-degree murder; Butler and Johnson maintain innocence' },
 { date: '1977-01-01', event: 'Halim signs affidavit naming the actual accomplices and stating Butler and Johnson were not involved' },
 { date: '1978-06-01', event: 'Halim\'s affidavit naming the real killers is presented to court; motion for new trial denied' },
 { date: '2010-04-27', event: 'Halim paroled after serving 44 years; has consistently maintained Aziz and Islam\'s innocence since 1977' },
 { date: '2020-02-01', event: 'Netflix documentary "Who Killed Malcolm X?"reignites public interest in the case' },
 { date: '2020-02-06', event: 'Manhattan DA Cyrus Vance Jr. orders formal reinvestigation of the convictions' },
 { date: '2021-02-21', event: 'Ray Wood\'s deathbed letter released, revealing NYPD set up arrest of Malcolm X\'s security to leave him vulnerable' },
 { date: '2021-11-18', event: 'Muhammad Aziz and Khalil Islam formally exonerated; DA apologizes for"serious, unacceptable violations of law"' },
 { date: '2022-02-21', event: 'Aziz and Islam\'s families file $36M wrongful conviction lawsuit against City of New York' },
 ],
 legalOutcomes: [
 { defendant: 'Muhammad Abdul Aziz', charge: 'First-degree murder (wrongful conviction)', outcome: 'Convicted 1966 - EXONERATED November 18, 2021' },
 { defendant: 'Khalil Islam', charge: 'First-degree murder (wrongful conviction)', outcome: 'Convicted 1966 - EXONERATED posthumously November 18, 2021' },
 { defendant: 'Mujahid Abdul Halim', charge: 'First-degree murder (confessed)', outcome: 'Convicted 1966; paroled 2010; identified real accomplices' },
 { defendant: 'FBI (institutional)', charge: 'COINTELPRO operations targeting Malcolm X', outcome: 'Concealed informant evidence; no accountability' },
 { defendant: 'NYPD (institutional)', charge: 'Withdrawal of surveillance; undercover infiltration', outcome: 'Ray Wood confession revealed complicity; lawsuit pending' },
 { defendant: 'Manhattan DA\'s Office', charge: 'Withholding exculpatory evidence (Brady violations)', outcome: 'DA Vance apologized; called it"serious, unacceptable violations"' },
 { defendant: 'New York City', charge: 'Wrongful conviction civil lawsuit', outcome: '$36M lawsuit filed by Aziz and Islam families, pending' },
 { defendant: 'Actual assassins (named by Halim)', charge: 'First-degree murder of Malcolm X', outcome: 'Identified by Halim in 1977 affidavit; never prosecuted' },
 ],
 charges: [
 { statute: 'New York Penal Code § 125.27: Murder in the First Degree', description: 'Premeditated assassination of Malcolm X at the Audubon Ballroom', count: '3 convicted - 2 wrongfully' },
 { statute: '18 U.S.C. § 241: Conspiracy Against Rights', description: 'FBI and NYPD conspiracy to deprive Malcolm X of his civil rights through surveillance, infiltration, and withdrawal of protection', count: 'Documented by COINTELPRO files' },
 { statute: '18 U.S.C. § 242: Deprivation of Rights Under Color of Law', description: 'Government agents using official positions to orchestrate conditions enabling the assassination', count: 'NYPD withdrawal of security' },
 { statute: 'Brady v. Maryland Violation', description: 'Prosecution withheld exculpatory evidence proving Aziz and Islam could not have been at the assassination', count: 'Confirmed by 2021 reinvestigation' },
 { statute: '18 U.S.C. § 1001: False Statements', description: 'FBI concealment of informant identities and intelligence relevant to the murder investigation', count: 'Multiple instances over decades' },
 { statute: '42 U.S.C. § 1983: Civil Rights Violation', description: 'Wrongful imprisonment of Aziz and Islam for a combined 42+ years based on fabricated case', count: '$36M civil lawsuit filed' },
 { statute: '18 U.S.C. § 1505: Obstruction of Proceedings', description: 'FBI and NYPD obstruction of judicial proceedings through concealment of evidence', count: 'Ongoing from 1965 to 2021' },
 { statute: '18 U.S.C. § 371: Conspiracy to Commit Offense', description: 'Conspiracy among FBI, NYPD, and NOI elements resulting in Malcolm X\'s assassination', count: 'Evidence established but never charged' },
 ],
 coverup: [
 'The FBI had at least five informants inside the Nation of Islam and Malcolm X\'s OAAU but claimed to have no intelligence about assassination threats',
 'NYPD undercover officer Ray Wood arranged the arrest of Malcolm X\'s head of security on the morning of the assassination, leaving him unprotected',
 'The NYPD withdrew its surveillance team from the Audubon Ballroom on the day of the assassination without explanation',
 'Prosecutors withheld FBI and NYPD reports that would have established alibis for Aziz and Islam, constituting Brady violations',
 'Halim confessed to the crime in 1966 and named the actual accomplices in a 1977 affidavit, but courts refused to reopen the case for decades',
 'The FBI\'s COINTELPRO files, revealed in the 1970s, showed systematic operations to "neutralize" Malcolm X, yet no connection to the assassination was investigated',
 'Ray Wood\'s 2021 deathbed confession letter revealed that the NYPD deliberately created conditions for the assassination to succeed',
 'Two innocent men spent a combined 42+ years in prison while the actual assassins, named by the confessed killer, were never prosecuted',
 'The FBI infiltrated Malcolm X\'s security detail with informant Gene Roberts, who was present at the assassination and performed CPR on Malcolm X',
 ],
 sources: [
 { title: 'Manhattan DA Exonerates Two Men Convicted of Malcolm X\'s Murder', url: 'https://www.nytimes.com/2021/11/18/nyregion/malcolm-x-murder-conviction.html', date: '2021-11-18' },
 { title: 'Who Killed Malcolm X?: Netflix Documentary Series', url: 'https://www.netflix.com/title/80217478', date: '2020-02-07' },
 { title: 'NYPD Officer\'s Deathbed Letter Reveals Role in Malcolm X Assassination', url: 'https://www.theguardian.com/us-news/2021/feb/21/malcolm-x-assassination-nypd-fbi-letter', date: '2021-02-21' },
 { title: 'FBI COINTELPRO Files on Malcolm X: FBI Vault', url: 'https://vault.fbi.gov/cointel-pro/cointel-pro-black-extremists', date: '2023-01-01' },
 { title: 'Malcolm X Assassination, Reinvestigation and Exoneration', url: 'https://www.washingtonpost.com/history/2021/11/18/malcolm-x-exoneration-wrongful-conviction/', date: '2021-11-18' },
 { title: '$36M Wrongful Conviction Lawsuit Filed Against New York City', url: 'https://apnews.com/article/malcolm-x-wrongful-conviction-lawsuit-new-york-a5c8f15aeb24a2b5d5f0b3c2', date: '2022-02-21' },
 { title: 'The Assassination of Malcolm X: Stanford University', url: 'https://kinginstitute.stanford.edu/assassination-malcolm-x', date: '2023-01-01' },
 { title: 'COINTELPRO and the Targeting of Black Leaders', url: 'https://www.archives.gov/research/investigations/fbi/cointelpro', date: '1975-11-18' },
 ],
};

export default function MalcolmXAssassinationPage() {
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
