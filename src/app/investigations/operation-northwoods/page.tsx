'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowLeft, AlertTriangle, Users, Calendar, FileText, ExternalLink, Scale, ShieldAlert, Skull } from 'lucide-react';
import GlitchText from '@/components/effects/GlitchText';

const investigation = {
 title: 'Operation Northwoods',
 subtitle: 'The Pentagon\'s Proposed False Flag Attacks on American Citizens to Justify Invading Cuba',
 severity: 'critical',
 status: 'DECLASSIFIED, REJECTED BY JFK',
 summary: 'Operation Northwoods was a proposed false flag operation drafted in 1962 by the Joint Chiefs of Staff, the highest-ranking military body in the United States. The plan called for the CIA and other U.S. government operatives to commit acts of terrorism against American civilians and military targets, blame them on Cuba, and use the fabricated attacks as justification for a full-scale military invasion. The proposals included hijacking commercial airliners, sinking refugee boats, orchestrating violent bombings in American cities including Washington D.C. and Miami, and attacking the U.S. naval base at Guantánamo Bay. The plan was presented to Secretary of Defense Robert McNamara and ultimately rejected by President John F. Kennedy, who removed Joint Chiefs Chairman Lyman Lemnitzer shortly afterward. The documents were declassified in 1997 as part of the JFK Assassination Records Review Board\'s work, revealing that the most senior military leaders in the United States had formally proposed murdering American citizens as a pretext for war.',
 keyFigures: [
 { name: 'Lyman Lemnitzer', role: 'Chairman of the Joint Chiefs of Staff who signed off on the Northwoods proposal; removed from his position by Kennedy shortly after', href: '/entities/individuals/lyman-lemnitzer', status: 'Deceased (1988)' },
 { name: 'John F. Kennedy', role: 'President who rejected the Northwoods proposal and subsequently removed Lemnitzer as JCS Chairman', href: '/entities/individuals/john-f-kennedy', status: 'Assassinated (1963)' },
 { name: 'Robert McNamara', role: 'Secretary of Defense to whom the Northwoods proposal was presented; reportedly rejected it before it reached Kennedy', href: '/entities/individuals/robert-mcnamara', status: 'Deceased (2009)' },
 { name: 'Edward Lansdale', role: 'Air Force officer and CIA operative who led Operation Mongoose, the covert anti-Cuba program under which Northwoods was developed', href: '/entities/individuals/edward-lansdale', status: 'Deceased (1987)' },
 { name: 'William H. Craig', role: 'Director of the Joint Staff\'s Special Operations division; authored key sections of the Northwoods memorandum', href: '/entities/individuals/william-craig', status: 'Deceased' },
 { name: 'Curtis LeMay', role: 'Air Force Chief of Staff and JCS member who supported aggressive action against Cuba, including the Northwoods proposals', href: '/entities/individuals/curtis-lemay', status: 'Deceased (1990)' },
 { name: 'Allen Dulles', role: 'Former CIA Director fired by Kennedy after the Bay of Pigs; had overseen earlier anti-Cuba operations that set the stage for Northwoods', href: '/entities/individuals/allen-dulles', status: 'Deceased (1969)' },
 { name: 'Fidel Castro', role: 'Cuban leader who was the target of the proposed operation; the U.S. government attempted to assassinate him at least 638 times', href: '/entities/individuals/fidel-castro', status: 'Deceased (2016)' },
 { name: 'James Bamford', role: 'Journalist and author who brought Northwoods to widespread public attention in his 2001 book "Body of Secrets"', href: '/entities/individuals/james-bamford', status: 'Active, Author/Journalist' },
 { name: 'Earle Wheeler', role: 'Army Chief of Staff and JCS member at the time; later became JCS Chairman during the Vietnam War', href: '/entities/individuals/earle-wheeler', status: 'Deceased (1975)' },
 ],
 timeline: [
 { date: '1959-01', event: 'Cuban Revolution succeeds; Fidel Castro takes power; U.S. begins plotting regime change' },
 { date: '1960', event: 'CIA begins Operation 40; covert operations including assassination plots against Castro' },
 { date: '1961-01', event: 'U.S. breaks diplomatic relations with Cuba as tensions escalate under the new Kennedy administration' },
 { date: '1961-04', event: 'Bay of Pigs invasion fails catastrophically; Kennedy fires CIA Director Allen Dulles; deep rift develops between JFK and the Joint Chiefs' },
 { date: '1961-11', event: 'Kennedy authorizes "Operation Mongoose"- a covert CIA program to destabilize and overthrow Castro\'s government' },
 { date: '1962-01', event: 'Edward Lansdale requests proposals from military branches for pretexts that could justify U.S. military intervention in Cuba' },
 { date: '1962-02', event: 'Brig. Gen. William Craig\'s Special Operations division drafts initial false flag concepts for the Joint Staff' },
 { date: '1962-03-13', event: 'Chairman Lyman Lemnitzer presents the full Operation Northwoods memorandum to Secretary of Defense Robert McNamara' },
 { date: '1962-03', event: 'The Northwoods document proposes: hijacking planes, sinking refugee boats, bombing cities, staging attacks on Guantánamo, and manufacturing a shoot-down of a civilian airliner' },
 { date: '1962-03', event: 'McNamara and/or Kennedy reject the proposals; no false flag attacks are carried out' },
 { date: '1962-09', event: 'Kennedy declines to reappoint Lemnitzer as JCS Chairman; Lemnitzer is reassigned to NATO Supreme Allied Commander Europe' },
 { date: '1962-10', event: 'Cuban Missile Crisis brings the world to the brink of nuclear war; Kennedy resolves it diplomatically over JCS objections' },
 { date: '1963-11-22', event: 'President Kennedy assassinated in Dallas; conspiracy theories about military/intelligence involvement persist to this day' },
 { date: '1992', event: 'JFK Assassination Records Collection Act mandates declassification of assassination-related government records' },
 { date: '1997-11', event: 'Operation Northwoods documents declassified by the JFK Assassination Records Review Board and released to the National Archives' },
 { date: '2001-04', event: 'James Bamford publishes "Body of Secrets,"bringing Northwoods to widespread public attention for the first time' },
 { date: '2004', event: 'National Security Archive at George Washington University publishes the full Northwoods documents online' },
 { date: '2017-10', event: 'Additional Northwoods-related documents released as part of the JFK files declassification under the 1992 Act' },
 ],
 legalOutcomes: [
 { defendant: 'Lyman Lemnitzer', charge: 'Proposing false flag terrorist attacks against American citizens', outcome: 'Not prosecuted; reassigned to NATO; received multiple honors including the Presidential Medal of Freedom' },
 { defendant: 'Joint Chiefs of Staff', charge: 'Conspiracy to commit acts of terrorism against U.S. citizens to fabricate a war pretext', outcome: 'No military or civilian officials were ever charged, disciplined, or investigated for the proposal' },
 { defendant: 'Edward Lansdale', charge: 'Leading Operation Mongoose covert program under which Northwoods was developed', outcome: 'Never charged; continued career; retired from Air Force as Major General' },
 { defendant: 'Curtis LeMay', charge: 'Supporting proposals for false flag attacks on American soil', outcome: 'Never charged; continued as Air Force Chief of Staff; ran for Vice President in 1968' },
 { defendant: 'William Craig', charge: 'Authoring the Northwoods memorandum containing specific false flag attack plans', outcome: 'Never publicly identified by mainstream media until decades later; no consequences' },
 { defendant: 'CIA Operatives', charge: 'Cuba assassination plots and covert destabilization operations under Mongoose', outcome: 'Exposed by Church Committee in 1975; no criminal prosecutions resulted' },
 { defendant: 'Department of Defense', charge: 'Institutional responsibility for developing plans to attack American citizens', outcome: 'Documents classified for 35 years; released only under special legislative mandate' },
 { defendant: 'U.S. Government', charge: 'Systematic cover-up of the Northwoods proposal and related anti-Cuba operations', outcome: 'Declassification in 1997 came too late for any legal accountability; all principals dead or retired' },
 ],
 charges: [
 { statute: '18 U.S.C. § 2331: Domestic Terrorism', description: 'The Northwoods proposals (bombings, shootings, hijackings on U.S. soil) meet every element of the federal definition of domestic terrorism', count: 'Multiple proposed attacks on American cities and installations' },
 { statute: '18 U.S.C. § 1111: Murder (Conspiracy)', description: 'The proposals explicitly contemplated killing American civilians and military personnel as false flag provocations', count: 'Plans included bombings, sniper attacks, and sinking boats carrying refugees' },
 { statute: '18 U.S.C. § 32: Aircraft Sabotage', description: 'Northwoods specifically proposed hijacking commercial aircraft and manufacturing the destruction of a civilian plane over Cuban waters', count: '2 distinct aircraft proposals in the memorandum' },
 { statute: '18 U.S.C. § 371: Conspiracy to Defraud the United States', description: 'A conspiracy among the nation\'s highest military officials to deceive the President, Congress, and the American people into supporting a war based on lies', count: 'Full Joint Chiefs participation' },
 { statute: '18 U.S.C. § 1001: False Statements', description: 'The proposals called for manufacturing false evidence, fabricating intelligence, and creating fake casualty reports to blame Cuba', count: 'Central to every Northwoods scenario' },
 { statute: 'UCMJ Article 94: Mutiny or Sedition', description: 'Senior military officials proposing unauthorized violence against American citizens arguably constitutes sedition under military law', count: 'Signed by the Chairman of the Joint Chiefs' },
 { statute: 'UCMJ Article 134: General Article (Conduct Unbecoming)', description: 'Proposing the murder of American citizens for political purposes is conduct unbecoming officers of the United States military', count: 'All Joint Chiefs members who approved the proposal' },
 { statute: 'International Law, Crime of Aggression', description: 'Manufacturing false pretexts for military invasion constitutes the crime of aggression under international law', count: 'The entire purpose of Operation Northwoods' },
 ],
 coverup: [
 'The Operation Northwoods documents were classified TOP SECRET and hidden from the American public for 35 years, only declassified in 1997 under legislation specifically designed to release JFK assassination-related records',
 'The fact that the Joint Chiefs of Staff (the most senior military leaders in the country) formally proposed murdering American citizens was concealed from Congress and the public for over three decades',
 'No military officer was ever disciplined, demoted, or investigated for proposing false flag terrorist attacks against American citizens; Lemnitzer was simply reassigned to NATO and later honored with medals',
 'The Northwoods proposals included creating fake "Communist Cuban terror campaigns"in Miami and Washington D.C. with real bombings and casualties, plans made by the people sworn to protect those citizens',
 'The document proposed manufacturing fake evidence including planting Soviet-made weapons, creating forged documents, and staging incidents with carefully constructed casualty lists to blame on Cuba',
 'The plan to"develop a Communist Cuban terror campaign in the Miami area"specified real violence including"exploding a few plastic bombs in carefully chosen spots"- demonstrating willingness to injure or kill American civilians',
 'One scenario called for hijacking a civilian airliner or creating a elaborate deception with a drone aircraft to simulate the shoot-down of a passenger plane, complete with fake passengers and a staged crash site',
 'The existence of Northwoods was virtually unknown to the American public until James Bamford\'s 2001 book, meaning the government successfully concealed it for nearly 40 years despite its extraordinary implications',
 'Operation Northwoods was not an isolated idea, it was developed within the larger Operation Mongoose program that included over 30 plans for sabotage, assassination, and destabilization against Cuba, all approved at the highest levels',
 ],
 sources: [
 { title: 'National Security Archive, Operation Northwoods Documents', url: 'https://nsarchive2.gwu.edu/news/20010430/northwoods.pdf', date: 'Declassified 1997' },
 { title: 'James Bamford, Body of Secrets: Anatomy of the Ultra-Secret National Security Agency', url: 'https://www.penguinrandomhouse.com/books/56892/body-of-secrets-by-james-bamford/', date: '2001-04' },
 { title: 'National Archives, JFK Assassination Records', url: 'https://www.archives.gov/research/jfk', date: 'Ongoing Releases' },
 { title: 'ABC News, U.S. Military Wanted to Provoke War With Cuba', url: 'https://abcnews.go.com/US/story?id=92662', date: '2001-05-01' },
 { title: 'The Guardian, Operation Northwoods and the Plot Against JFK', url: 'https://www.theguardian.com/commentisfree/2017/oct/28/jfk-files-cia-conspiracy-theories', date: '2017-10-28' },
 { title: 'Church Committee, Alleged Assassination Plots Involving Foreign Leaders (Senate Report)', url: 'https://www.intelligence.senate.gov/sites/default/files/94465.pdf', date: '1975-11-20' },
 { title: 'Mary Ferrell Foundation, Operation Northwoods Archive', url: 'https://www.maryferrell.org/pages/Operation_Northwoods.html', date: 'Archive' },
 { title: 'U.S. Department of State, Foreign Relations of the United States, Cuba 1961-1963', url: 'https://history.state.gov/historicaldocuments/frus1961-63v10', date: 'Official Record' },
 { title: 'Washington Post, Pentagon Proposed Pretexts for Cuba Invasion in 1962', url: 'https://www.washingtonpost.com/archive/politics/2001/04/29/pentagon-proposed-pretexts-for-cuba-invasion-in-1962/77e94c77-5594-41f4-8e6a-3f0d621a1cb7/', date: '2001-04-29' },
 ],
};

export default function OperationNorthwoodsPage() {
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
