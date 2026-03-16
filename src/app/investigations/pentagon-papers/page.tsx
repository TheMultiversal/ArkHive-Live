'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowLeft, AlertTriangle, Users, Calendar, FileText, ExternalLink, Scale, ShieldAlert, Skull } from 'lucide-react';
import GlitchText from '@/components/effects/GlitchText';

const investigation = {
 title: 'The Pentagon Papers',
 subtitle: 'How the U.S. Government Lied About Vietnam for Three Decades, And One Man Risked Everything to Expose It',
 severity: 'critical',
 status: 'EXPOSED, HISTORIC PRECEDENT',
 summary: 'The Pentagon Papers were a 7,000-page top-secret Department of Defense study revealing that the U.S. government had systematically lied to the American public and Congress about the Vietnam War for over two decades. The study showed that four consecutive presidents (Truman, Eisenhower, Kennedy, and Johnson) had privately known the war was unwinnable while publicly claiming progress. In 1971, military analyst Daniel Ellsberg leaked the documents to the New York Times and Washington Post, triggering a constitutional crisis. The Nixon administration obtained a federal injunction against the Times (the first instance of prior restraint against a newspaper in U.S. history) before the Supreme Court ruled 6-3 in favor of press freedom in the landmark New York Times Co. v. United States decision.',
 keyFigures: [
 { name: 'Daniel Ellsberg', role: 'RAND Corporation military analyst and former Marine who leaked the Pentagon Papers; risked life imprisonment for the public\'s right to know', href: '/entities/individuals/daniel-ellsberg', status: 'Deceased (2023) - Charges Dismissed' },
 { name: 'Robert McNamara', role: 'Secretary of Defense (1961-1968) who commissioned the study; privately doubted the war while publicly defending it', href: '/entities/individuals/robert-mcnamara', status: 'Deceased (2009)' },
 { name: 'Lyndon B. Johnson', role: 'President whose administration escalated the war while the Pentagon Papers proved officials knew it was unwinnable', href: '/entities/individuals/lyndon-johnson', status: 'Deceased (1973)' },
 { name: 'Richard Nixon', role: 'President who attempted to suppress publication, prosecuted Ellsberg, and created the "Plumbers" unit that led to Watergate', href: '/entities/individuals/richard-nixon', status: 'Deceased (1994)' },
 { name: 'Neil Sheehan', role: 'New York Times reporter who received the Pentagon Papers from Ellsberg and wrote the first articles', href: '/entities/individuals/neil-sheehan', status: 'Deceased (2021)' },
 { name: 'Ben Bradlee', role: 'Washington Post executive editor who decided to publish the Papers after the Times was enjoined', href: '/entities/individuals/ben-bradlee', status: 'Deceased (2014)' },
 { name: 'Katharine Graham', role: 'Washington Post publisher who risked the company\'s financial future by authorizing publication', href: '/entities/individuals/katharine-graham', status: 'Deceased (2001)' },
 { name: 'Anthony Russo', role: 'RAND colleague who helped Ellsberg photocopy the documents; co-defendant in the espionage trial', href: '/entities/individuals/anthony-russo', status: 'Deceased (2008)' },
 { name: 'John Mitchell', role: 'Nixon\'s Attorney General who sought the injunction against the New York Times and ordered the prosecution', href: '/entities/individuals/john-mitchell', status: 'Deceased (1988)' },
 { name: 'G. Gordon Liddy', role: 'Nixon operative who led the break-in of Ellsberg\'s psychiatrist\'s office, part of the "Plumbers" unit', href: '/entities/individuals/g-gordon-liddy', status: 'Deceased (2021)' },
 { name: 'E. Howard Hunt', role: 'CIA operative and Nixon "Plumber" who participated in the break-in targeting Ellsberg\'s psychiatric records', href: '/entities/individuals/e-howard-hunt', status: 'Deceased (2007)' },
 ],
 timeline: [
 { date: '1945', event: 'Ho Chi Minh declares Vietnamese independence, citing the U.S. Declaration of Independence; U.S. supports France\'s colonial return instead' },
 { date: '1954', event: 'After French defeat at Dien Bien Phu, Eisenhower administration blocks unifying elections in Vietnam, fearing Ho Chi Minh would win' },
 { date: '1961', event: 'Kennedy secretly increases military advisers in Vietnam from 900 to over 16,000 while publicly downplaying U.S. involvement' },
 { date: '1964-08', event: 'Gulf of Tonkin incident: Johnson uses exaggerated and partially fabricated reports to obtain congressional authorization for war escalation' },
 { date: '1965', event: 'Johnson begins massive troop deployments; by year\'s end, 184,000 U.S. troops are in Vietnam despite private doubts about victory' },
 { date: '1967-06', event: 'Defense Secretary Robert McNamara commissions what becomes the Pentagon Papers, a secret history of U.S. decision-making in Vietnam' },
 { date: '1968-01', event: 'Tet Offensive shatters public confidence in government claims of progress; internal documents show officials knew the war was stagnant' },
 { date: '1969-01', event: 'McNamara study completed: 7,000 pages documenting 30 years of deception across four presidential administrations' },
 { date: '1969-10', event: 'Daniel Ellsberg begins secretly photocopying the Pentagon Papers with help from colleague Anthony Russo' },
 { date: '1970', event: 'Ellsberg attempts to release the Papers through members of Congress including Senators Fulbright and McGovern, who decline' },
 { date: '1971-06-13', event: 'New York Times begins publishing the Pentagon Papers; first edition reveals systematic government deception about Vietnam' },
 { date: '1971-06-15', event: 'Nixon administration obtains federal injunction against the Times, first prior restraint order against a newspaper in U.S. history' },
 { date: '1971-06-18', event: 'Washington Post begins publishing after Katharine Graham overrules legal advisers warning it could destroy the company' },
 { date: '1971-06-30', event: 'Supreme Court rules 6-3 in New York Times Co. v. United States, the press can publish, prior restraint is unconstitutional' },
 { date: '1971-06', event: 'Ellsberg charged under the Espionage Act of 1917; potentially facing 115 years in prison' },
 { date: '1971-09', event: 'Nixon\'s "Plumbers" break into Ellsberg\'s psychiatrist\'s office seeking material to discredit him, laying groundwork for Watergate' },
 { date: '1973-05-11', event: 'All charges against Ellsberg dismissed due to government misconduct, including the Plumbers break-in and illegal wiretapping' },
 { date: '2011', event: 'Pentagon Papers officially declassified after 40 years; full 7,000 pages released by the National Archives' },
 ],
 legalOutcomes: [
 { defendant: 'New York Times Co. v. United States', charge: 'Prior restraint against publication of classified material', outcome: 'Supreme Court ruled 6-3 for the press; landmark First Amendment decision' },
 { defendant: 'Daniel Ellsberg', charge: 'Espionage, theft, conspiracy, potentially 115 years in prison', outcome: 'All charges dismissed due to government misconduct (illegal wiretapping, break-in)' },
 { defendant: 'Anthony Russo', charge: 'Conspiracy, receiving classified documents', outcome: 'Charges dismissed alongside Ellsberg\'s case' },
 { defendant: 'Nixon Administration (Plumbers)', charge: 'Break-in of Ellsberg\'s psychiatrist\'s office', outcome: 'Led to revelations that contributed to Nixon\'s resignation in Watergate scandal' },
 { defendant: 'G. Gordon Liddy', charge: 'Conspiracy, burglary (Ellsberg psychiatrist break-in and Watergate)', outcome: 'Convicted in Watergate; sentenced to 20 years (commuted)' },
 { defendant: 'E. Howard Hunt', charge: 'Conspiracy, burglary (Ellsberg and Watergate operations)', outcome: 'Convicted in Watergate; served 33 months' },
 { defendant: 'John Mitchell', charge: 'Conspiracy, obstruction of justice (Watergate)', outcome: 'Convicted in Watergate; served 19 months, the highest-ranking official jailed' },
 { defendant: 'John Ehrlichman', charge: 'Approved the Ellsberg psychiatrist break-in', outcome: 'Convicted in Watergate; served 18 months' },
 ],
 charges: [
 { statute: '18 U.S.C. § 793: Espionage Act of 1917', description: 'Ellsberg charged with unauthorized possession and disclosure of national defense information', count: 'Multiple counts totaling potential 115-year sentence; all dismissed' },
 { statute: '18 U.S.C. § 641: Theft of Government Property', description: 'Ellsberg charged with stealing the classified Pentagon Papers study', count: 'Dismissed due to government misconduct' },
 { statute: '18 U.S.C. § 371: Conspiracy', description: 'Ellsberg and Russo charged with conspiracy to commit espionage and theft', count: 'Dismissed due to government misconduct' },
 { statute: 'First Amendment, U.S. Constitution', description: 'Government attempted prior restraint to prevent publication of the Papers by the press', count: 'Supreme Court ruled 6-3 against prior restraint' },
 { statute: '50 U.S.C. § 1801: Foreign Intelligence Surveillance (predecessor)', description: 'Nixon administration conducted illegal wiretapping of Ellsberg without judicial authorization', count: 'Key basis for dismissal of Ellsberg charges' },
 { statute: '18 U.S.C. § 1708: Burglary (Federal)', description: 'Nixon "Plumbers" broke into Dr. Fielding\'s office to obtain Ellsberg\'s psychiatric records', count: 'Led to Watergate-related convictions' },
 { statute: '18 U.S.C. § 1503: Obstruction of Justice', description: 'Government misconduct in the Ellsberg prosecution including suppression of evidence', count: 'Basis for judicial dismissal of all charges' },
 { statute: 'War Powers Resolution Violations (Retroactive)', description: 'Multiple presidents escalated military operations without proper congressional authorization', count: 'War Powers Act passed in 1973 partly in response to revelations' },
 ],
 coverup: [
 'The Pentagon Papers revealed that the Truman administration gave France $2.6 billion to fight Ho Chi Minh, directly involving the U.S. in Vietnam\'s conflict from the start while denying any role to the public',
 'The Gulf of Tonkin incident that justified the massive U.S. escalation was partly fabricated, the"second attack"on August 4, 1964 almost certainly never happened, yet Johnson used it to push through a war resolution',
 'Robert McNamara privately concluded by 1967 that the war was unwinnable, yet continued to publicly defend the administration\'s optimistic assessments while secretly commissioning the study that became the Pentagon Papers',
 'Four consecutive presidents (Truman, Eisenhower, Kennedy, and Johnson) each knew the war had deeply troubling prospects but consistently lied to Congress and the public about progress and intentions',
 'When Ellsberg tried to release the Papers through Congress, multiple senators declined to act, showing how the classification system was used to prevent even elected officials from informing the public',
 'Nixon\'s response to the leak was to create the "Plumbers" unit, a secret team that broke into Ellsberg\'s psychiatrist\'s office to find material for a smear campaign, eventually leading to the Watergate scandal',
 'The government argued before the Supreme Court that national security would be catastrophically compromised, yet no specific harm ever materialized from the Papers\' publication, proving the classification was about embarrassment, not security',
 'After all charges were dismissed, Ellsberg observed that the same pattern of government deception continued, the Afghanistan Papers, leaked decades later, showed nearly identical dynamics of officials lying about an unwinnable war',
 ],
 sources: [
 { title: 'New York Times Co. v. United States, 403 U.S. 713 (1971)', url: 'https://supreme.justia.com/cases/federal/us/403/713/', date: '1971-06-30' },
 { title: 'The Pentagon Papers, National Archives', url: 'https://www.archives.gov/research/pentagon-papers', date: '2011 (Declassified)' },
 { title: 'Secrets: A Memoir of Vietnam and the Pentagon Papers, Daniel Ellsberg', url: 'https://www.penguinrandomhouse.com/books/292825/secrets-by-daniel-ellsberg/', date: '2002' },
 { title: 'Most Dangerous: Daniel Ellsberg and the Secret History of the Vietnam War', url: 'https://www.penguinrandomhouse.com/books/317397/most-dangerous-by-steve-sheinkin/', date: '2015' },
 { title: 'The Post (Film): Spielberg', url: 'https://www.imdb.com/title/tt6294822/', date: '2017-12-22' },
 { title: 'NYT Original Reporting, Vietnam Archive: Pentagon Study', url: 'https://www.nytimes.com/1971/06/13/archives/vietnam-archive-pentagon-study-traces-3-decades-of-growing-us.html', date: '1971-06-13' },
 { title: 'Daniel Ellsberg Obituary, NYT', url: 'https://www.nytimes.com/2023/06/16/us/daniel-ellsberg-dead.html', date: '2023-06-16' },
 { title: 'Robert McNamara, In Retrospect: The Tragedy and Lessons of Vietnam', url: 'https://www.penguinrandomhouse.com/books/155895/in-retrospect-by-robert-s-mcnamara/', date: '1995' },
 ],
};

export default function PentagonPapersPage() {
 return (
 <div className="min-h-screen pt-20 lg:pt-24 pb-16">
 <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
 <Link href="/investigations"className="inline-flex items-center gap-2 text-zinc-400 hover:text-blood-500 transition-colors mb-6 pt-4"><ArrowLeft className="w-4 h-4"/>Back to Investigations</Link>
 <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="border-2 border-blood-800/60 bg-[rgba(0,6,20,0.90)] p-6 lg:p-8 mb-8">
 <div className="flex items-center gap-3 mb-4"><span className="px-3 py-1 text-xs font-bold uppercase border border-blood-500/30 bg-blood-500/20 text-blood-400">{investigation.severity}</span><span className="px-3 py-1 text-xs font-bold uppercase border border-zinc-500/30 bg-zinc-500/20 text-zinc-400">{investigation.status}</span></div>
 <h1 className="text-3xl lg:text-4xl font-black glass-text uppercase tracking-wider mb-2"><GlitchText text={investigation.title} /></h1>
 <p className="text-lg text-blood-500 font-bold mb-4">{investigation.subtitle}</p>
 <p className="text-zinc-400 leading-relaxed">{investigation.summary}</p>
 </motion.div>
 <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.15 }} className="glass-card p-6 mb-8 border-l-4 border-blood-600">
 <h2 className="text-xl font-bold glass-text uppercase tracking-wider mb-4 flex items-center gap-2"><ShieldAlert className="w-5 h-5 text-blood-500"/>The Cover-Up</h2>
 <div className="space-y-3">{investigation.coverup.map((item, idx) => (<div key={idx} className="p-3 bg-blood-950/20 border border-blood-500/30"><p className="text-sm text-zinc-300">{item}</p></div>))}</div>
 </motion.div>
 <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
 <div className="lg:col-span-2 space-y-8">
 <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }} className="glass-card p-6">
 <h2 className="text-xl font-bold glass-text uppercase tracking-wider mb-4 flex items-center gap-2"><Users className="w-5 h-5 text-blood-500"/>Key Figures</h2>
 <div className="space-y-3">{investigation.keyFigures.map((figure, idx) => (<div key={idx} className="flex items-start justify-between p-3 bg-[rgba(0,10,28,0.82)] border border-[rgba(80,180,255,0.15)]"><div className="flex-1">{figure.href ? (<Link href={figure.href} className="font-bold text-blood-400 hover:text-blood-300 transition-colors">{figure.name}</Link>) : (<span className="font-bold glass-text">{figure.name}</span>)}<p className="text-sm text-zinc-400 mt-1">{figure.role}</p></div><span className="text-xs px-2 py-1 bg-[rgba(0,12,32,0.85)] text-zinc-400 border border-[rgba(60,160,255,0.18)] whitespace-nowrap ml-2">{figure.status}</span></div>))}</div>
 </motion.div>
 <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }} className="glass-card p-6">
 <h2 className="text-xl font-bold glass-text uppercase tracking-wider mb-4 flex items-center gap-2"><Scale className="w-5 h-5 text-blood-500"/>Applicable Charges &amp; Statutes</h2>
 <div className="space-y-3">{investigation.charges.map((charge, idx) => (<div key={idx} className="p-4 bg-[rgba(0,10,28,0.82)] border border-[rgba(80,180,255,0.15)]"><p className="font-bold text-blood-400 text-sm font-mono">{charge.statute}</p><p className="text-sm text-zinc-300 mt-1">{charge.description}</p><p className="text-xs text-blood-400 mt-1">{charge.count}</p></div>))}</div>
 </motion.div>
 </div>
 <div className="space-y-6">
 <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} className="glass-card p-6">
 <h3 className="text-lg font-bold glass-text uppercase tracking-wider mb-4 flex items-center gap-2"><Calendar className="w-4 h-4 text-blood-500"/>Timeline</h3>
 <div className="space-y-4">{investigation.timeline.map((item, idx) => (<div key={idx} className="relative pl-4 border-l-2 border-[rgba(80,180,255,0.15)]"><div className="absolute -left-[5px] top-0 w-2 h-2 bg-blood-500"/><p className="text-xs text-blood-500 font-mono">{item.date}</p><p className="text-sm text-zinc-300">{item.event}</p></div>))}</div>
 </motion.div>
 <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.1 }} className="glass-card p-6">
 <h3 className="text-lg font-bold glass-text uppercase tracking-wider mb-4 flex items-center gap-2"><Scale className="w-5 h-5 text-blood-500"/>Legal Outcomes</h3>
 <div className="space-y-3">{investigation.legalOutcomes.map((item, idx) => (<div key={idx} className="p-3 bg-[rgba(0,10,28,0.82)] border border-[rgba(80,180,255,0.15)]"><p className="font-bold glass-text text-sm">{item.defendant}</p><p className="text-xs text-zinc-400 mt-1">{item.charge}</p><p className="text-xs text-blood-400 mt-1">{item.outcome}</p></div>))}</div>
 </motion.div>
 <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.2 }} className="glass-card p-6">
 <h3 className="text-lg font-bold glass-text uppercase tracking-wider mb-4">Sources</h3>
 <div className="space-y-2">{investigation.sources.map((source, idx) => (<a key={idx} href={source.url} target="_blank"rel="noopener noreferrer"className="flex items-start gap-2 p-2 text-sm text-zinc-400 hover:text-blood-400 hover:bg-[rgba(0,10,28,0.82)] transition-colors"><ExternalLink className="w-4 h-4 mt-0.5 flex-shrink-0"/><div><span>{source.title}</span><span className="text-zinc-600 ml-2">({source.date})</span></div></a>))}</div>
 </motion.div>
 </div>
 </div>
 </div>
 </div>
 );
}
