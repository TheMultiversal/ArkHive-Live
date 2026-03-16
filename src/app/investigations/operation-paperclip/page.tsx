'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowLeft, AlertTriangle, Users, Calendar, FileText, ExternalLink, Scale, ShieldAlert, Skull } from 'lucide-react';
import GlitchText from '@/components/effects/GlitchText';

const investigation = {
 title: 'Operation Paperclip',
 subtitle: '1,600+ Nazi Scientists Recruited by the U.S. Government, War Criminals Given Immunity and New Identities',
 severity: 'critical',
 status: 'DECLASSIFIED, HISTORICAL CONSPIRACY',
 summary: 'Operation Paperclip was a secret United States government program in which more than 1,600 German scientists, engineers, and technicians were recruited from Nazi Germany and brought to America following World War II. Many of these individuals were former members of the Nazi Party, the SS, and had directly participated in war crimes including the use of slave labor from concentration camps. The Joint Intelligence Objectives Agency (JIOA) actively circumvented President Truman\'s explicit order barring entry to anyone who had been"an active supporter of Nazi militarism,"creating false dossiers that whitewashed the scientists\' Nazi affiliations. These men were given new identities, security clearances, and prestigious positions in the U.S. military-industrial complex. Among them was Wernher von Braun, who had used slave labor from Mittelbau-Dora concentration camp to build V-2 rockets and later became the father of NASA\'s Apollo program. The program prioritized Cold War advantage over justice for the Holocaust and other Nazi atrocities.',
 keyFigures: [
 { name: 'Wernher von Braun', role: 'Former SS officer and Nazi rocket scientist; used slave labor from Dora-Mittelbau concentration camp to build V-2 rockets; became director of NASA\'s Marshall Space Flight Center', href: '/entities/individuals/wernher-von-braun', status: 'Deceased (1977)' },
 { name: 'Kurt Blome', role: 'Deputy Surgeon General of the Third Reich and head of Nazi biological weapons program; acquitted at Nuremberg, then recruited by U.S. Army Chemical Corps', href: '/entities/individuals/kurt-blome', status: 'Deceased (1969)' },
 { name: 'Hubertus Strughold', role: 'Named "Father of Space Medicine"by the U.S. Air Force; linked to human experiments at Dachau concentration camp involving altitude and freezing', href: '/entities/individuals/hubertus-strughold', status: 'Deceased (1986)' },
 { name: 'Arthur Rudolph', role: 'Director of the V-2 factory at Mittelwerk using slave labor; later managed NASA\'s Saturn V rocket program that sent astronauts to the Moon', href: '/entities/individuals/arthur-rudolph', status: 'Renounced Citizenship (1984)' },
 { name: 'Walter Schreiber', role: 'Surgeon General of the Nazi Army who oversaw human experiments; brought to the U.S. and employed at the Air Force School of Aviation Medicine', href: '/entities/individuals/walter-schreiber', status: 'Deceased (1970)' },
 { name: 'Georg Rickhey', role: 'General manager of the Mittelwerk underground V-2 factory where an estimated 20,000 concentration camp prisoners died', href: '/entities/individuals/georg-rickhey', status: 'Deceased' },
 { name: 'Reinhard Gehlen', role: 'Nazi intelligence chief who created the Gehlen Organization, which became West Germany\'s BND with CIA funding and oversight', href: '/entities/individuals/reinhard-gehlen', status: 'Deceased (1979)' },
 { name: 'Allen Dulles', role: 'OSS officer and later CIA Director who championed the use of former Nazis in U.S. intelligence operations during the Cold War', href: '/entities/individuals/allen-dulles', status: 'Deceased (1969)' },
 { name: 'Harry S. Truman', role: 'President who approved Paperclip but explicitly prohibited entry of"active supporters of Nazi militarism"- an order the JIOA systematically violated', href: '/entities/individuals/harry-truman', status: 'Deceased (1972)' },
 { name: 'Bosquet Wev', role: 'JIOA director who oversaw the creation of fraudulent dossiers and security reports to circumvent Truman\'s anti-Nazi directive', href: '/entities/individuals/bosquet-wev', status: 'Deceased' },
 ],
 timeline: [
 { date: '1945-05', event: 'Germany surrenders; Allied forces begin capturing German scientists and seizing research facilities and technology' },
 { date: '1945-06', event: 'U.S. Army launches "Operation Overcast"- the precursor to Paperclip, to exploit German scientific expertise' },
 { date: '1945-07', event: 'Joint Chiefs of Staff authorize temporary military exploitation of German scientists under strict conditions' },
 { date: '1945-09', event: 'President Truman approves the program but explicitly bars entry to anyone who was"an active supporter of Nazi militarism"' },
 { date: '1945-11', event: 'Nuremberg Trials begin; many Paperclip recruits are Nazi Party members, SS officers, or connected to concentration camp atrocities' },
 { date: '1946-03', event: 'Operation Overcast renamed "Operation Paperclip"- named for the paperclips attached to files of scientists selected for recruitment' },
 { date: '1947', event: 'JIOA Director Bosquet Wev begins systematic falsification of scientists\' security dossiers to remove evidence of Nazi affiliations' },
 { date: '1947-09', event: 'National Security Act creates the CIA; former Nazi intelligence assets are integrated into Cold War operations' },
 { date: '1949', event: 'Wernher von Braun\'s wartime record is sanitized; he begins working on U.S. Army ballistic missiles at Fort Bliss and later Huntsville, Alabama' },
 { date: '1950', event: 'State Department and FBI protests about Nazi backgrounds of Paperclip recruits are overruled by the military on"national security"grounds' },
 { date: '1955', event: 'Over 700 German scientists have received U.S. citizenship; their Nazi pasts effectively erased from public records' },
 { date: '1958', event: 'NASA established; Wernher von Braun becomes director of the Marshall Space Flight Center, leading America\'s rocket program' },
 { date: '1969-07', event: 'Saturn V rocket (designed and managed by former Nazis von Braun and Arthur Rudolph) sends Apollo 11 to the Moon' },
 { date: '1979', event: 'Office of Special Investigations (OSI) established at DOJ to investigate Nazi war criminals in the U.S., including Paperclip recruits' },
 { date: '1984', event: 'Arthur Rudolph (Saturn V program manager) renounces U.S. citizenship and returns to Germany when investigated for slave labor at Mittelwerk' },
 { date: '1985', event: 'First major exposé of Operation Paperclip published by Linda Hunt in the Bulletin of the Atomic Scientists' },
 { date: '2006', event: 'CIA releases documents confirming the agency\'s use of former Nazis as Cold War assets, including in Operation Paperclip' },
 { date: '2010', event: 'National Archives declassifies thousands of Paperclip documents revealing the extent of dossier falsification and Nazi connections' },
 ],
 legalOutcomes: [
 { defendant: 'Wernher von Braun', charge: 'SS membership and use of concentration camp slave labor at Mittelbau-Dora', outcome: 'Never prosecuted; became national hero; received National Medal of Science' },
 { defendant: 'Arthur Rudolph', charge: 'Investigation for war crimes related to Mittelwerk slave labor', outcome: 'Renounced U.S. citizenship 1984 in deal with OSI; returned to Germany; never formally charged' },
 { defendant: 'Kurt Blome', charge: 'War crimes related to biological weapons program and human experiments', outcome: 'Acquitted at Nuremberg Doctors\' Trial; recruited by U.S. Army Chemical Corps' },
 { defendant: 'Hubertus Strughold', charge: 'Linked to Dachau human experiments on altitude and freezing', outcome: 'Never charged; honored as "Father of Space Medicine"; portrait removed from USAF in 2006' },
 { defendant: 'Walter Schreiber', charge: 'Oversight of human medical experiments in concentration camps', outcome: 'Brought to U.S.; exposed by journalist Drew Pearson; quietly relocated to Argentina' },
 { defendant: 'Georg Rickhey', charge: 'Management of Mittelwerk factory using slave labor', outcome: 'Returned to Germany for trial; acquitted due to lack of witness testimony' },
 { defendant: 'Reinhard Gehlen', charge: 'Head of Nazi military intelligence on the Eastern Front', outcome: 'Never prosecuted; CIA funded his intelligence organization; became head of West German BND' },
 { defendant: 'JIOA Officials', charge: 'Systematic falsification of security dossiers to circumvent presidential orders', outcome: 'No personnel ever disciplined or prosecuted for creating fraudulent records' },
 ],
 charges: [
 { statute: 'Nuremberg Principles, War Crimes', description: 'Many Paperclip recruits participated in or were complicit in war crimes as defined by the Nuremberg Tribunal', count: 'At least 24 scientists had documented connections to war crimes' },
 { statute: 'Nuremberg Principles, Crimes Against Humanity', description: 'Use of concentration camp slave labor and involvement in human medical experiments constitute crimes against humanity', count: 'Multiple scientists directly supervised slave labor operations' },
 { statute: 'Presidential Executive Order (Truman, 1945)', description: 'Truman\'s directive explicitly prohibited immigration of active Nazi supporters, the JIOA systematically violated this order', count: 'Hundreds of dossiers were falsified to circumvent the directive' },
 { statute: 'Immigration and Nationality Act Violations', description: 'Scientists entered the U.S. with fraudulent backgrounds, concealing Nazi affiliations and war crimes connections', count: '700+ scientists received citizenship based on false records' },
 { statute: 'Geneva Convention, Prisoner Labor', description: 'Use of concentration camp prisoners for forced labor in weapons production violated international law', count: 'Mittelwerk alone used approximately 60,000 prisoners; 20,000 died' },
 { statute: 'Fraud Against the United States', description: 'JIOA officials committed fraud by creating false security dossiers and lying to other government agencies', count: 'Systematic program-wide fraud from 1947 onward' },
 { statute: 'Obstruction of Justice', description: 'U.S. agencies actively blocked investigations into Paperclip scientists\' wartime activities for decades', count: 'Multiple DOJ and OSI investigations were obstructed' },
 { statute: 'Moral Accountability', description: 'The U.S. government prioritized military-technological advantage over justice for millions of Nazi victims', count: 'Program continued for over 20 years with full institutional support' },
 ],
 coverup: [
 'The JIOA systematically created false background dossiers for Nazi scientists, removing evidence of SS membership, Nazi Party affiliation, and connections to war crimes to circumvent Truman\'s explicit anti-Nazi directive',
 'Wernher von Braun was an SS officer who personally visited the Mittelwerk underground factory where thousands of concentration camp prisoners died building his V-2 rockets, his NASA biography mentioned none of this for decades',
 'When the State Department and FBI raised objections about scientists\' Nazi backgrounds, military officials overruled them, claiming"national security"required their expertise regardless of their wartime crimes',
 'Kurt Blome (head of the Nazi biological weapons program who was tried at Nuremberg) was acquitted and then immediately recruited by the U.S. Army Chemical Corps, which wanted his expertise in biological warfare',
 'The U.S. government knew that at least 20,000 concentration camp prisoners died at Mittelwerk building V-2 rockets under the supervision of men it later made American citizens and national heroes',
 'Hubertus Strughold was honored as the "Father of Space Medicine"by the USAF despite documented links to the Dachau freezing and altitude experiments, his portrait was only quietly removed from the USAF School of Aerospace Medicine in 2006',
 'When Arthur Rudolph was finally investigated for slave labor in the 1980s, rather than face trial he was allowed to quietly renounce his citizenship and leave, avoiding any public accounting of NASA\'s Nazi connections',
 'The full scope of Operation Paperclip remained classified for decades; documents were only substantially declassified starting in the 2000s, by which time nearly all participants were dead',
 'The program was not limited to rocket scientists, the U.S. also recruited Nazi intelligence officers, chemical weapons experts, biological warfare specialists, and aviation medicine doctors who had conducted experiments on prisoners',
 ],
 sources: [
 { title: 'Annie Jacobsen, Operation Paperclip: The Secret Intelligence Program (Book)', url: 'https://www.littlebrown.com/titles/annie-jacobsen/operation-paperclip/9780316221047/', date: '2014-02' },
 { title: 'Linda Hunt, Secret Agenda: The United States Government, Nazi Scientists, and Project Paperclip', url: 'https://www.google.com/books/edition/Secret_Agenda/5xGlQgAACAAJ', date: '1991' },
 { title: 'National Archives, Records Relating to Operation Paperclip', url: 'https://www.archives.gov/iwg/declassified-records/rg-330-defense-secretary', date: 'Declassified' },
 { title: 'CIA, Declassified Documents on Use of Former Nazis', url: 'https://www.cia.gov/readingroom/collection/nazi-war-crimes-disclosure-act', date: '2006' },
 { title: 'DOJ Office of Special Investigations, Striving for Accountability', url: 'https://www.justice.gov/criminal/criminal-hrsp/file/2022/download', date: '2006' },
 { title: 'Smithsonian Magazine, The Nazis Next Door', url: 'https://www.smithsonianmag.com/smart-news/why-us-government-brought-nazi-scientists-america-after-world-war-ii-180961110/', date: '2014' },
 { title: 'BBC, Operation Paperclip: Nazi Scientists and the Cold War', url: 'https://www.bbc.com/news/magazine-32563957', date: '2015' },
 { title: 'New York Times, U.S. Used Nazis as Cold War Spies', url: 'https://www.nytimes.com/2014/10/27/us/in-cold-war-us-spy-agencies-used-1000-nazis.html', date: '2014-10-26' },
 { title: 'Holocaust Encyclopedia, The Doctors Trial', url: 'https://encyclopedia.ushmm.org/content/en/article/the-doctors-trial-the-medical-case-of-the-subsequent-nuremberg-proceedings', date: 'Reference' },
 ],
};

export default function OperationPaperclipPage() {
 return (
 <div className="min-h-screen pt-20 lg:pt-24 pb-16">
 <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
 <Link href="/investigations"className="inline-flex items-center gap-2 text-zinc-400 hover:text-blood-500 transition-colors mb-6 pt-4"><ArrowLeft className="w-4 h-4"/>Back to Investigations</Link>
 <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="border-2 border-blood-800/60 bg-[rgba(0,12,35,0.65)] p-6 lg:p-8 mb-8">
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
 <div className="space-y-3">{investigation.keyFigures.map((figure, idx) => (<div key={idx} className="flex items-start justify-between p-3 bg-[rgba(0,20,55,0.40)] border border-[rgba(60,160,255,0.12)]"><div className="flex-1">{figure.href ? (<Link href={figure.href} className="font-bold text-blood-400 hover:text-blood-300 transition-colors">{figure.name}</Link>) : (<span className="font-bold glass-text">{figure.name}</span>)}<p className="text-sm text-zinc-400 mt-1">{figure.role}</p></div><span className="text-xs px-2 py-1 bg-[rgba(0,30,80,0.40)] text-zinc-400 border border-[rgba(60,160,255,0.18)] whitespace-nowrap ml-2">{figure.status}</span></div>))}</div>
 </motion.div>
 <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }} className="glass-card p-6">
 <h2 className="text-xl font-bold glass-text uppercase tracking-wider mb-4 flex items-center gap-2"><Scale className="w-5 h-5 text-blood-500"/>Applicable Charges &amp; Statutes</h2>
 <div className="space-y-3">{investigation.charges.map((charge, idx) => (<div key={idx} className="p-4 bg-[rgba(0,20,55,0.40)] border border-[rgba(60,160,255,0.12)]"><p className="font-bold text-blood-400 text-sm font-mono">{charge.statute}</p><p className="text-sm text-zinc-300 mt-1">{charge.description}</p><p className="text-xs text-blood-400 mt-1">{charge.count}</p></div>))}</div>
 </motion.div>
 </div>
 <div className="space-y-6">
 <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} className="glass-card p-6">
 <h3 className="text-lg font-bold glass-text uppercase tracking-wider mb-4 flex items-center gap-2"><Calendar className="w-4 h-4 text-blood-500"/>Timeline</h3>
 <div className="space-y-4">{investigation.timeline.map((item, idx) => (<div key={idx} className="relative pl-4 border-l-2 border-[rgba(60,160,255,0.12)]"><div className="absolute -left-[5px] top-0 w-2 h-2 bg-blood-500"/><p className="text-xs text-blood-500 font-mono">{item.date}</p><p className="text-sm text-zinc-300">{item.event}</p></div>))}</div>
 </motion.div>
 <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.1 }} className="glass-card p-6">
 <h3 className="text-lg font-bold glass-text uppercase tracking-wider mb-4 flex items-center gap-2"><Scale className="w-5 h-5 text-blood-500"/>Legal Outcomes</h3>
 <div className="space-y-3">{investigation.legalOutcomes.map((item, idx) => (<div key={idx} className="p-3 bg-[rgba(0,20,55,0.40)] border border-[rgba(60,160,255,0.12)]"><p className="font-bold glass-text text-sm">{item.defendant}</p><p className="text-xs text-zinc-400 mt-1">{item.charge}</p><p className="text-xs text-blood-400 mt-1">{item.outcome}</p></div>))}</div>
 </motion.div>
 <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.2 }} className="glass-card p-6">
 <h3 className="text-lg font-bold glass-text uppercase tracking-wider mb-4">Sources</h3>
 <div className="space-y-2">{investigation.sources.map((source, idx) => (<a key={idx} href={source.url} target="_blank"rel="noopener noreferrer"className="flex items-start gap-2 p-2 text-sm text-zinc-400 hover:text-blood-400 hover:bg-[rgba(0,20,55,0.40)] transition-colors"><ExternalLink className="w-4 h-4 mt-0.5 flex-shrink-0"/><div><span>{source.title}</span><span className="text-zinc-600 ml-2">({source.date})</span></div></a>))}</div>
 </motion.div>
 </div>
 </div>
 </div>
 </div>
 );
}
