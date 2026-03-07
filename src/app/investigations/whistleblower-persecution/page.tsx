'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowLeft, AlertTriangle, Users, Calendar, FileText, ExternalLink, Scale, ShieldAlert, Skull } from 'lucide-react';
import GlitchText from '@/components/effects/GlitchText';

const investigation = {
 title: 'Whistleblower Persecution',
 subtitle: 'How the U.S. Government Systematically Destroys Those Who Expose Its Crimes',
 severity: 'critical',
 status: 'ONGOING, PATTERN CONTINUES',
 summary: 'The United States government has waged a sustained campaign of persecution against whistleblowers who exposed illegal surveillance, war crimes, torture, and government deception. Under Presidents Bush, Obama, Trump, and Biden, individuals including Chelsea Manning, Edward Snowden, Daniel Hale, Reality Winner, John Kiriakou, and Thomas Drake have been prosecuted, imprisoned, exiled, and had their lives destroyed for revealing information the public had a right to know. The Espionage Act of 1917; a law designed to prosecute spies, not truth-tellers, has been weaponized against whistleblowers, denying them the ability to mount a public interest defense in court. The pattern is clear: the government punishes those who reveal its crimes while the officials who commit them face no consequences.',
 keyFigures: [
 { name: 'Chelsea Manning', role: 'Army intelligence analyst who leaked classified documents to WikiLeaks exposing civilian casualties and diplomatic secrets; sentenced to 35 years, commuted after 7', href: '/entities/individuals/chelsea-manning', status: 'Released, Sentence Commuted' },
 { name: 'Edward Snowden', role: 'NSA contractor who revealed the U.S. government\'s mass surveillance programs including PRISM and XKeyscore', href: '/entities/individuals/edward-snowden', status: 'Exile in Russia' },
 { name: 'Daniel Hale', role: 'Air Force intelligence analyst who leaked documents exposing that 90% of drone strike victims were not intended targets', href: '/entities/individuals/daniel-hale', status: 'Convicted - 45 Months' },
 { name: 'Reality Winner', role: 'NSA contractor who leaked a document showing Russian interference in the 2016 election; sentenced to over 5 years', href: '/entities/individuals/reality-winner', status: 'Released, Served 4+ Years' },
 { name: 'John Kiriakou', role: 'CIA officer who confirmed the agency\'s use of waterboarding torture; the only person jailed in connection with the CIA torture program', href: '/entities/individuals/john-kiriakou', status: 'Served 30 Months' },
 { name: 'Thomas Drake', role: 'Former NSA senior executive who exposed the Trailblazer surveillance program\'s waste and illegality', href: '/entities/individuals/thomas-drake', status: 'Charges Dropped' },
 { name: 'Jeffrey Sterling', role: 'Former CIA officer convicted of giving classified information to journalist James Risen about a botched Iran operation', href: '/entities/individuals/jeffrey-sterling', status: 'Convicted - 42 Months' },
 { name: 'James Risen', role: 'NYT journalist who reported on NSA warrantless wiretapping; government fought for years to force him to reveal his sources', href: '/entities/individuals/james-risen', status: 'Journalist, Source Protected' },
 { name: 'Daniel Ellsberg', role: 'Pentagon Papers leaker who later became an outspoken advocate for whistleblower protections until his death in 2023', href: '/entities/individuals/daniel-ellsberg', status: 'Deceased (2023)' },
 { name: 'Eric Holder', role: 'Attorney General under Obama who oversaw unprecedented number of Espionage Act prosecutions against leakers', href: '/entities/individuals/eric-holder', status: 'Former AG' },
 { name: 'Julian Assange', role: 'WikiLeaks founder who published Manning\'s leaks; fought extradition for years; pled guilty to Espionage Act charge', href: '/entities/individuals/julian-assange', status: 'Pled Guilty, Released' },
 ],
 timeline: [
 { date: '1917', event: 'Espionage Act signed into law during World War I to prosecute spies; later weaponized against whistleblowers' },
 { date: '1971', event: 'Daniel Ellsberg leaks Pentagon Papers; charged under Espionage Act but charges dismissed due to government misconduct' },
 { date: '2005', event: 'Thomas Drake reports NSA waste and constitutional violations through official channels; his concerns are ignored' },
 { date: '2007', event: 'John Kiriakou confirms CIA waterboarding on ABC News, the first CIA officer to publicly acknowledge the torture program' },
 { date: '2010-04', event: 'WikiLeaks publishes "Collateral Murder"video showing U.S. helicopter killing Iraqi civilians and Reuters journalists' },
 { date: '2010-07', event: 'Chelsea Manning arrested for leaking hundreds of thousands of classified documents to WikiLeaks' },
 { date: '2010', event: 'Thomas Drake indicted under the Espionage Act, charges later dropped to a single misdemeanor after public outcry' },
 { date: '2012', event: 'John Kiriakou charged under Espionage Act for confirming CIA torture; he becomes the only person jailed in the entire torture scandal' },
 { date: '2013-06-05', event: 'Edward Snowden\'s first NSA revelations published in The Guardian, exposing PRISM and mass surveillance of American communications' },
 { date: '2013-06-21', event: 'DOJ charges Snowden under the Espionage Act; he flees to Hong Kong, then Russia, where he receives asylum' },
 { date: '2013-08-21', event: 'Chelsea Manning sentenced to 35 years, the longest sentence ever imposed for a leak to the media at that time' },
 { date: '2015', event: 'USA FREEDOM Act passes, curtailing some NSA surveillance programs that Snowden exposed, proving the public interest value of his disclosures' },
 { date: '2017-06', event: 'Reality Winner arrested for leaking NSA document about Russian election interference; denied bail' },
 { date: '2017-01', event: 'President Obama commutes Manning\'s sentence; she is released after serving 7 years' },
 { date: '2019', event: 'Julian Assange arrested in London after Ecuador revokes his asylum; U.S. seeks extradition on 18 counts' },
 { date: '2021-07', event: 'Daniel Hale sentenced to 45 months for leaking drone war documents showing 90% of casualties were unintended' },
 { date: '2021-06', event: 'Reality Winner released after serving over 4 years; the longest sentence for an unauthorized disclosure to the media' },
 { date: '2024-06', event: 'Julian Assange reaches plea deal, pleading guilty to one Espionage Act count; released after 5 years in Belmarsh Prison' },
 ],
 legalOutcomes: [
 { defendant: 'Chelsea Manning', charge: 'Espionage Act violations, theft of government property, aiding the enemy (acquitted of last)', outcome: '35 years military prison; sentence commuted by Obama after 7 years' },
 { defendant: 'Edward Snowden', charge: 'Espionage Act, theft of government property, unauthorized communication of national defense information', outcome: 'Charged 2013; fled to Russia; remains in exile; Russian citizenship granted 2022' },
 { defendant: 'Daniel Hale', charge: 'Espionage Act, retention and transmission of national defense information', outcome: 'Pled guilty; sentenced to 45 months federal prison' },
 { defendant: 'Reality Winner', charge: 'Espionage Act, unauthorized transmission of national defense information', outcome: '5 years 3 months; longest ever sentence for single-document leak; released after 4+ years' },
 { defendant: 'John Kiriakou', charge: 'Espionage Act, disclosure of classified information about CIA operatives', outcome: '30 months federal prison; the only person jailed in connection with CIA torture' },
 { defendant: 'Thomas Drake', charge: 'Espionage Act (10 felony counts)', outcome: 'All felony charges dropped; pled to misdemeanor exceeding authorized computer use; no prison time' },
 { defendant: 'Jeffrey Sterling', charge: 'Espionage Act, unauthorized disclosure of classified information to a journalist', outcome: '42 months federal prison' },
 { defendant: 'Julian Assange', charge: '18 counts including Espionage Act, conspiracy to obtain and publish classified documents', outcome: 'Pled guilty to 1 count; time served (5 years Belmarsh); released June 2024' },
 ],
 charges: [
 { statute: '18 U.S.C. § 793 - Espionage Act of 1917', description: 'The primary weapon used against whistleblowers; criminalizes gathering, transmitting, or losing national defense information', count: 'Used against Manning, Snowden, Hale, Winner, Kiriakou, Drake, Sterling, Assange' },
 { statute: '18 U.S.C. § 793(d) - Unauthorized Communication', description: 'Willfully communicating classified information to persons not entitled to receive it', count: 'Central charge in most whistleblower prosecutions' },
 { statute: '18 U.S.C. § 793(e) - Unauthorized Retention', description: 'Retaining classified documents without authorization and failing to deliver them to proper authorities', count: 'Charged against Hale, Manning, and others' },
 { statute: '18 U.S.C. § 641 - Theft of Government Property', description: 'Treating classified information as "property" that can be"stolen"- even when shared with the public', count: 'Commonly paired with Espionage Act charges' },
 { statute: '18 U.S.C. § 1030 - Computer Fraud and Abuse Act', description: 'Accessing classified computer systems to obtain information for disclosure', count: 'Charged against Manning, Winner, and others' },
 { statute: 'UCMJ Article 104 - Aiding the Enemy (Military)', description: 'Military charge against Manning alleging that leaking to WikiLeaks aided foreign adversaries', count: 'Acquitted of this charge at court-martial' },
 { statute: '50 U.S.C. § 3121 - Intelligence Identities Protection Act', description: 'Disclosing the identity of covert intelligence agents', count: 'Basis for Kiriakou prosecution' },
 { statute: 'First Amendment (Theoretical Defense)', description: 'The Espionage Act does not allow defendants to argue their disclosures served the public interest, a critical flaw', count: 'No public interest defense permitted in any case' },
 ],
 coverup: [
 'The Obama administration prosecuted more whistleblowers under the Espionage Act than all previous administrations combined, eight cases versus three total in the Act\'s prior 96-year history',
 'The Espionage Act does not allow a"public interest"defense, whistleblowers cannot argue in court that their disclosures exposed illegal government activity, making fair trials virtually impossible',
 'John Kiriakou is the only person imprisoned in connection with the CIA\'s torture program, not for committing torture, but for confirming that it happened; the torturers were never charged',
 'When Thomas Drake reported NSA waste and illegality through official whistleblower channels, his concerns were ignored and he was later prosecuted under the Espionage Act in retaliation',
 'Edward Snowden\'s revelations led to the USA FREEDOM Act curtailing illegal NSA surveillance (proving that his disclosures served the public interest) yet he remains charged with espionage and forced into exile',
 'Daniel Hale\'s leaked documents showed that during one five-month period, nearly 90% of people killed by U.S. drone strikes were not the intended targets, the government prosecuted Hale rather than addressing the civilian casualties',
 'Reality Winner revealed Russian interference in U.S. elections (information the American public needed to know) and received the longest sentence ever imposed for a single-document leak to the media',
 'The government classifies an estimated 50 million documents per year, creating a system where nearly any disclosure of government wrongdoing can be prosecuted as espionage',
 'Chelsea Manning was held in solitary confinement for nearly a year before trial in conditions the UN Special Rapporteur described as"cruel, inhuman, and degrading treatment"- a punishment before conviction',
 ],
 sources: [
 { title: 'ACLU, Whistleblowers and the Espionage Act', url: 'https://www.aclu.org/issues/free-speech/employee-speech-and-whistleblowers', date: 'Ongoing' },
 { title: 'Edward Snowden, Permanent Record (Memoir)', url: 'https://www.penguinrandomhouse.com/books/564489/permanent-record-by-edward-snowden/', date: '2019-09' },
 { title: 'Chelsea Manning, README.txt (Memoir)', url: 'https://us.macmillan.com/books/9780374601225/readmetxt', date: '2022-10' },
 { title: 'DOJ Press Release, Daniel Hale Sentencing', url: 'https://www.justice.gov/opa/pr/former-intelligence-analyst-sentenced-45-months-prison-disclosure-classified-information', date: '2021-07-27' },
 { title: 'The Intercept, The Drone Papers', url: 'https://theintercept.com/drone-papers/', date: '2015-10-15' },
 { title: 'John Kiriakou, Doing Time Like a Spy', url: 'https://www.johnkiriakou.com/', date: '2017' },
 { title: 'NYT, Obama Administration Sets Record for Espionage Act Prosecutions', url: 'https://www.nytimes.com/2016/12/30/opinion/sunday/if-donald-trump-targets-journalists-thank-obama.html', date: '2016-12-30' },
 { title: 'Julian Assange Plea Deal, DOJ Press Release', url: 'https://www.justice.gov/opa/pr/wikileaks-founder-julian-assange-charged-conspiracy-commit-computer-intrusion', date: '2024-06' },
 { title: 'Thomas Drake Case, Government Accountability Project', url: 'https://whistleblower.org/whistleblower-profiles/thomas-drake/', date: 'Archive' },
 ],
};

export default function WhistleblowerPersecutionPage() {
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
