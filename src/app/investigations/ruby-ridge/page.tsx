'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowLeft, AlertTriangle, Users, Calendar, FileText, ExternalLink, Scale, ShieldAlert, Skull } from 'lucide-react';
import GlitchText from '@/components/effects/GlitchText';

const investigation = {
 title: 'Ruby Ridge',
 subtitle: 'FBI Sniper Kills Wife Holding Baby and 14-Year-Old Son: The $3.1M Settlement That Couldn\'t Undo Government Murder',
 severity: 'critical',
 status: 'SETTLED - $3.1M',
 summary: 'In August 1992, a botched federal operation at Ruby Ridge, Idaho, resulted in the deaths of 14-year-old Samuel Weaver, Vicki Weaver (shot by FBI sniper Lon Horiuchi while holding her 10-month-old baby), and Deputy US Marshal William Degan. Randy Weaver, a former Green Beret, had been entrapped by an ATF informant into selling two sawed-off shotguns, then failed to appear for trial after receiving incorrect court date information. The US Marshals Service then mounted a surveillance operation that escalated into a deadly siege. The FBI\'s Hostage Rescue Team deployed with modified rules of engagement that effectively authorized shooting on sight, rules later deemed unconstitutional. Despite killing an unarmed woman holding an infant, FBI sniper Lon Horiuchi was never convicted. Randy Weaver was acquitted of all serious charges, and the government settled for $3.1 million.',
 keyFigures: [
 { name: 'Randy Weaver', role: 'Former Green Beret and Ruby Ridge homestead owner; entrapped by ATF informant', href: '/entities/individuals/randy-weaver', status: 'Deceased 2022' },
 { name: 'Vicki Weaver', role: 'Wife of Randy Weaver; shot and killed by FBI sniper while holding 10-month-old baby Elisheba', href: '/entities/individuals/vicki-weaver', status: 'Killed, August 22, 1992' },
 { name: 'Samuel Weaver', role: '14-year-old son shot in the back and killed by US Marshals during initial confrontation', href: '/entities/individuals/samuel-weaver', status: 'Killed, Age 14' },
 { name: 'Lon Horiuchi', role: 'FBI Hostage Rescue Team sniper who shot Vicki Weaver through the head while she held her baby', href: '/entities/individuals/lon-horiuchi', status: 'Never convicted' },
 { name: 'Kevin Harris', role: 'Family friend living with the Weavers; shot and wounded; acquitted of all charges', href: '/entities/individuals/kevin-harris', status: 'Acquitted' },
 { name: 'William Degan', role: 'US Deputy Marshal killed during the initial confrontation on August 21', href: '/entities/individuals/william-degan', status: 'Killed in operation' },
 { name: 'Richard Rogers', role: 'FBI HRT commander who approved modified"shoot on sight"rules of engagement', href: '/entities/individuals/richard-rogers', status: 'Later commanded at Waco' },
 { name: 'Larry Potts', role: 'FBI Deputy Director who approved the modified rules of engagement; promoted then demoted', href: '/entities/individuals/larry-potts', status: 'Demoted, Retired' },
 { name: 'Gerry Spence', role: 'Defense attorney who represented Randy Weaver and won acquittal on all major charges', href: '/entities/individuals/gerry-spence', status: 'Retired' },
 { name: 'Kenneth Fadeley', role: 'ATF informant who entrapped Weaver into selling modified shotguns', href: '/entities/individuals/kenneth-fadeley', status: 'Informant' },
 { name: 'Bo Gritz', role: 'Former Green Beret who negotiated Weaver\'s surrender; helped end the standoff', href: '/entities/individuals/bo-gritz', status: 'Retired' },
 ],
 timeline: [
 { date: '1989-07-01', event: 'ATF informant Kenneth Fadeley befriends Randy Weaver at Aryan Nations gathering' },
 { date: '1989-10-24', event: 'Fadeley persuades Weaver to saw off two shotgun barrels shorter than legal limit, entrapment operation' },
 { date: '1990-06-15', event: 'ATF attempts to recruit Weaver as informant against Aryan Nations; Weaver refuses' },
 { date: '1991-01-17', event: 'Weaver indicted on firearms charges; released on bond' },
 { date: '1991-02-20', event: 'Weaver receives incorrect court date from probation officer; fails to appear; bench warrant issued' },
 { date: '1992-03-14', event: 'US Marshals Service begins 18-month surveillance operation around Weaver\'s remote cabin' },
 { date: '1992-08-21', event: 'Marshals reconnaissance team encounters Weaver\'s dog and son Samuel; firefight erupts' },
 { date: '1992-08-21', event: 'Samuel Weaver, age 14, shot in the back and killed while retreating; Marshal Degan also killed' },
 { date: '1992-08-21', event: 'FBI Hostage Rescue Team deployed with modified rules of engagement authorizing deadly force' },
 { date: '1992-08-22', event: 'FBI sniper Lon Horiuchi fires; first shot wounds Randy Weaver' },
 { date: '1992-08-22', event: 'Horiuchi\'s second shot kills Vicki Weaver through the cabin door while she holds 10-month-old baby Elisheba' },
 { date: '1992-08-22', event: 'Same bullet wounds Kevin Harris; family trapped in cabin with Vicki\'s body for 10 days' },
 { date: '1992-08-31', event: 'Bo Gritz negotiates Randy Weaver\'s surrender after 11-day standoff' },
 { date: '1993-04-01', event: 'Trial begins; Gerry Spence represents Weaver pro bono' },
 { date: '1993-07-08', event: 'Randy Weaver acquitted of all charges except original failure to appear; Kevin Harris fully acquitted' },
 { date: '1994-01-01', event: 'DOJ Office of Professional Responsibility begins investigation of FBI conduct' },
 { date: '1995-06-15', event: 'Senate Judiciary Committee holds hearings on Ruby Ridge; condemns FBI\'s rules of engagement' },
 { date: '1995-08-15', event: 'Federal government settles with Weaver family for $3.1 million, no admission of wrongdoing' },
 { date: '1997-08-21', event: 'Boundary County, Idaho, indicts Lon Horiuchi for involuntary manslaughter; case later dismissed on federal supremacy grounds' },
 ],
 legalOutcomes: [
 { defendant: 'Randy Weaver', charge: 'Murder, assault, conspiracy, firearms violations', outcome: 'Acquitted of all charges except failure to appear; sentenced to 18 months (time served)' },
 { defendant: 'Kevin Harris', charge: 'Murder of Deputy Marshal Degan', outcome: 'Fully acquitted, jury found self-defense' },
 { defendant: 'Lon Horiuchi', charge: 'Involuntary manslaughter of Vicki Weaver', outcome: 'State charges dismissed on federal immunity grounds; never held accountable' },
 { defendant: 'Larry Potts', charge: 'Approval of unconstitutional rules of engagement', outcome: 'Promoted to Deputy Director, then demoted after scandal; retired with pension' },
 { defendant: 'Richard Rogers', charge: 'Command of HRT with modified shoot-on-sight rules', outcome: 'No charges; later commanded FBI operations at Waco' },
 { defendant: 'Federal Government', charge: 'Wrongful death of Vicki and Samuel Weaver', outcome: 'Settled for $3.1M - $1M to Randy, $100K to each surviving child' },
 { defendant: 'FBI (institutional)', charge: 'Unconstitutional rules of engagement', outcome: 'Senate investigation condemned ROE; DOJ found FBI violated policies' },
 { defendant: 'ATF', charge: 'Entrapment of Randy Weaver', outcome: 'Entrapment defense nearly succeeded at trial; no ATF accountability' },
 ],
 charges: [
 { statute: '18 U.S.C. § 1111: Murder', description: 'Killing of Vicki Weaver by FBI sniper while she was unarmed and holding her infant', count: '1 count, Horiuchi indicted by state, dismissed' },
 { statute: 'Idaho Code § 18-4006: Involuntary Manslaughter', description: 'State charge against Horiuchi for killing Vicki Weaver through reckless use of deadly force', count: '1 count, dismissed on federal immunity' },
 { statute: '18 U.S.C. § 242: Deprivation of Rights Under Color of Law', description: 'FBI\'s modified rules of engagement deprived the Weaver family of their constitutional rights', count: 'Senate investigation documented violations' },
 { statute: '18 U.S.C. § 241: Conspiracy Against Rights', description: 'Coordinated federal operation that resulted in unconstitutional use of deadly force against civilians', count: 'DOJ OPR investigation documented failures' },
 { statute: '42 U.S.C. § 1983: Civil Rights Violation', description: 'Use of excessive force resulting in death of unarmed woman and 14-year-old child', count: '$3.1M settlement' },
 { statute: '18 U.S.C. § 1512: Witness Tampering', description: 'FBI officials altered and destroyed documents related to the rules of engagement after the incident', count: 'Documented in Senate investigation' },
 { statute: 'Fourth Amendment Violation', description: 'Unreasonable seizure through use of deadly force without imminent threat justification', count: 'Rules of engagement deemed unconstitutional' },
 { statute: '18 U.S.C. § 1001: False Statements', description: 'FBI officials provided misleading testimony about rules of engagement and chain of command', count: 'Senate hearings documented inconsistencies' },
 ],
 coverup: [
 'The FBI\'s modified rules of engagement at Ruby Ridge effectively authorized shooting any armed adult on sight, rules later deemed unconstitutional',
 'Samuel Weaver, 14 years old, was shot in the back while running away from the marshals, the government initially claimed he was armed and aggressive',
 'Lon Horiuchi shot Vicki Weaver through the head while she stood behind a door holding her 10-month-old baby, he claimed he was aiming at Kevin Harris',
 'The Weaver family was trapped inside the cabin with Vicki\'s body for 10 days before surrender, while the FBI used loudspeakers to taunt them',
 'FBI officials altered and destroyed documents related to the revised rules of engagement after the incident to obscure the chain of command',
 'Larry Potts, who approved the unconstitutional ROE, was promoted to FBI Deputy Director before the scandal forced his demotion',
 'The original ATF case was built on entrapment, an informant had to repeatedly persuade Weaver to modify the shotguns',
 'Weaver\'s failure to appear for trial was partly caused by the court sending the wrong date, yet the government used it to justify a full military operation',
 'The state manslaughter charge against Horiuchi was dismissed on the grounds of federal supremacy, federal agents cannot be prosecuted for actions taken in the line of duty',
 ],
 sources: [
 { title: 'Ruby Ridge, DOJ Office of Professional Responsibility Report', url: 'https://www.justice.gov/opr/page/file/1064621/download', date: '1994-06-10' },
 { title: 'Senate Judiciary Committee Ruby Ridge Hearings', url: 'https://www.congress.gov/104/chrg/shrg29854/CHRG-104shrg29854.htm', date: '1995-09-06' },
 { title: 'Ruby Ridge: The Age of Federal Siege Begins', url: 'https://www.nytimes.com/1995/09/06/us/officials-at-ruby-ridge-hearing-admit-errors.html', date: '1995-09-06' },
 { title: 'Weaver v. United States: $3.1M Settlement', url: 'https://www.washingtonpost.com/archive/politics/1995/08/16/government-settles-ruby-ridge-case/e8e6d0c0-8f4c-4a6b-9b6a-d6e5b0c7e8f9/', date: '1995-08-15' },
 { title: 'The Ruby Ridge Siege, FBI Vault Records', url: 'https://vault.fbi.gov/ruby-ridge-records', date: '2023-01-01' },
 { title: 'Idaho v. Horiuchi, Manslaughter Charge Dismissal', url: 'https://law.justia.com/cases/federal/appellate-courts/F3/253/359/545826/', date: '2001-06-05' },
 { title: 'Every Knee Shall Bow, The Ruby Ridge Story', url: 'https://www.latimes.com/archives/la-xpm-1995-08-20-bk-37239-story.html', date: '1995-08-20' },
 { title: 'Randy Weaver, Ruby Ridge Survivor, Dies at 74', url: 'https://www.nytimes.com/2022/05/12/us/randy-weaver-dead-ruby-ridge.html', date: '2022-05-12' },
 ],
};

export default function RubyRidgePage() {
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
