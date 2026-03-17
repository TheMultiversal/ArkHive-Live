'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowLeft, AlertTriangle, Users, Calendar, FileText, ExternalLink, Scale, ShieldAlert, Skull } from 'lucide-react';
import GlitchText from '@/components/effects/GlitchText';

const investigation = {
 title: 'ALEC: The Corporate Legislature',
 subtitle: 'Where Corporations Write America\'s Laws Behind Closed Doors',
 severity: 'critical',
 status: 'ONGOING',
 summary: 'The American Legislative Exchange Council (ALEC) is a shadowy organization where corporate lobbyists and state legislators meet behind closed doors to draft"model legislation"that is then introduced verbatim in state legislatures across the country. ALEC has been responsible for Stand Your Ground laws, voter ID restrictions, prison privatization, environmental deregulation, and attacks on public education. Over 200 corporations and nearly one-third of all state legislators are members. Since its founding in 1973, ALEC has successfully passed hundreds of bills written by corporations, for corporations, disguised as the will of elected representatives.',
 keyFigures: [
 { name: 'Paul Weyrich', role: 'Co-founder of ALEC and the Heritage Foundation, architect of the New Right', href: '/entities/individuals/paul-weyrich', status: 'Deceased (2008)' },
 { name: 'Lisa Nelson', role: 'CEO of ALEC, oversees corporate-legislative partnerships', href: '/entities/individuals/lisa-nelson', status: 'Active' },
 { name: 'Bill Meierling', role: 'ALEC Executive VP of Communications, manages public messaging', href: '/entities/individuals/bill-meierling', status: 'Active' },
 { name: 'Charles Koch', role: 'Major ALEC funder through Koch Industries and affiliated foundations', href: '/entities/individuals/charles-koch', status: 'Active' },
 { name: 'Scott Walker', role: 'Wisconsin Governor who passed ALEC-drafted Act 10 destroying public unions', href: '/entities/individuals/scott-walker', status: 'Active' },
 { name: 'Rick Scott', role: 'Florida Governor who signed multiple ALEC model bills into law', href: '/entities/individuals/rick-scott', status: 'Active' },
 { name: 'Jan Brewer', role: 'Arizona Governor who signed ALEC-drafted SB 1070 immigration law', href: '/entities/individuals/jan-brewer', status: 'Active' },
 { name: 'Art Pope', role: 'ALEC board member, Koch ally, reshaped North Carolina politics', href: '/entities/individuals/art-pope', status: 'Active' },
 { name: 'Russell Pearce', role: 'Arizona state senator, primary sponsor of SB 1070 drafted with ALEC and CCA', href: '/entities/individuals/russell-pearce', status: 'Recalled (2011)' },
 { name: 'Duane Parde', role: 'Former ALEC executive director who expanded corporate membership', href: '/entities/individuals/duane-parde', status: 'Active' },
 { name: 'Mark Brnovich', role: 'Arizona AG who defended ALEC-backed voter suppression laws', href: '/entities/individuals/mark-brnovich', status: 'Active' },
 ],
 timeline: [
 { date: '1973', event: 'ALEC founded by Paul Weyrich, Henry Hyde, and Lou Barnett with support from the Heritage Foundation' },
 { date: '1981', event: 'Reagan administration embraces ALEC as a vehicle for advancing deregulation at the state level' },
 { date: '1995', event: 'ALEC drafts model "Truth in Sentencing"laws, leading to mass incarceration boom benefiting private prison companies' },
 { date: '1997', event: 'ALEC creates model Voter ID legislation that will spread to dozens of states over the next 15 years' },
 { date: '2002', event: 'ALEC model legislation blocks state-level climate action, mirroring language drafted by ExxonMobil lobbyists' },
 { date: '2005', event: 'Florida passes ALEC-drafted Stand Your Ground law, which later shields George Zimmerman in Trayvon Martin killing' },
 { date: '2007', event: 'ALEC drafts model "No Sanctuary Cities"bill, which becomes template for anti-immigrant legislation nationwide' },
 { date: '2009', event: 'ALEC helps draft Arizona\'s SB 1070 anti-immigration law, with Corrections Corporation of America at the drafting table' },
 { date: '2010', event: 'CCA, GEO Group, and other private prison corporations participate in ALEC task force that writes immigration enforcement bills' },
 { date: '2011', event: 'ALEC-drafted voter ID and union-busting bills sweep through Republican-controlled state legislatures after 2010 wave' },
 { date: '2012', event: 'After Trayvon Martin shooting, public backlash forces Coca-Cola, Pepsi, and other corporations to leave ALEC' },
 { date: '2012', event: 'ALEC disbands Public Safety and Elections Task Force amid scrutiny of Stand Your Ground and voter ID laws' },
 { date: '2013', event: 'Guardian and Center for Media and Democracy publish thousands of leaked ALEC model bills' },
 { date: '2014', event: 'Google drops ALEC membership citing climate denial; Microsoft and Facebook follow' },
 { date: '2016', event: 'ALEC pushes model legislation to penalize cities and states that divest from fossil fuels' },
 { date: '2019', event: 'ALEC drafts model bills criminalizing pipeline protests as"critical infrastructure"crimes' },
 { date: '2021', event: 'ALEC helps draft wave of voter suppression laws following 2020 election, including Georgia\'s SB 202' },
 { date: '2023', event: 'ALEC continues operating with reduced but significant corporate membership, focusing on energy and education' },
 ],
 legalOutcomes: [
 { defendant: 'ALEC', charge: 'Operating as a lobbying organization while claiming 501(c)(3) tax-exempt status', outcome: 'Common Cause filed IRS complaint; IRS took no action' },
 { defendant: 'Arizona SB 1070', charge: 'Racial profiling and constitutional violations', outcome: 'Supreme Court struck down most provisions in Arizona v. United States (2012)' },
 { defendant: 'Wisconsin Act 10', charge: 'Violation of collective bargaining rights', outcome: 'Upheld by Wisconsin Supreme Court despite ALEC origins' },
 { defendant: 'North Carolina voter ID law', charge: 'Intentional racial discrimination in voter suppression', outcome: 'Struck down by 4th Circuit, targeted Black voters with"almost surgical precision"' },
 { defendant: 'Texas voter ID law (SB 14)', charge: 'Discriminatory effect on minority voters', outcome: 'Federal court found discriminatory intent; law modified' },
 { defendant: 'Florida Stand Your Ground', charge: 'Enabling racially disparate lethal force outcomes', outcome: 'Law remains; studies show racial bias in application' },
 { defendant: 'Multiple private prison contracts', charge: 'Conflict of interest in drafting detention legislation', outcome: 'No legal action; CCA and GEO Group continue profiting from ALEC-drafted laws' },
 { defendant: 'ALEC fossil fuel preemption bills', charge: 'Using nonprofit status to advance corporate profit agenda', outcome: 'Bills passed in multiple states; no accountability for ALEC\'s role' },
 ],
 charges: [
 { statute: '26 U.S.C. § 501(c)(3)', description: 'Tax fraud through claiming charitable status while primarily operating as a corporate lobbying organization', count: 'Ongoing violation since founding' },
 { statute: '18 U.S.C. § 201', description: 'Bribery facilitation, corporations pay ALEC membership dues, receive direct access to draft legislation benefiting their interests', count: 'Hundreds of instances across decades' },
 { statute: '42 U.S.C. § 1983', description: 'Conspiracy to deprive citizens of civil rights through voter suppression model legislation', count: 'Model bills adopted in 30+ states' },
 { statute: '18 U.S.C. § 1346', description: 'Honest services fraud, legislators secretly serving corporate interests while claiming to represent constituents', count: 'Thousands of legislators involved' },
 { statute: '52 U.S.C. § 10301', description: 'Voting Rights Act violations through racially discriminatory voter ID and registration restriction laws', count: 'Multiple states with documented discriminatory impact' },
 { statute: '18 U.S.C. § 1962 (RICO)', description: 'Racketeering through pattern of coordinated corrupt influence over state legislatures nationwide', count: 'Enterprise spanning all 50 states' },
 { statute: '15 U.S.C. § 1', description: 'Sherman Antitrust Act violations through coordinated corporate action to suppress competition via legislation', count: 'Multiple industries coordinating through ALEC task forces' },
 { statute: '18 U.S.C. § 371', description: 'Conspiracy to defraud the United States by undermining democratic legislative processes', count: 'Systematic pattern over 50 years' },
 ],
 coverup: [
 'ALEC operates under a veil of secrecy, meetings are closed to the public and press, and members sign confidentiality agreements prohibiting disclosure of model legislation.',
 'Corporations and legislators vote as equals on ALEC task forces to approve model bills, but ALEC claims this is "education" rather than lobbying to maintain tax-exempt status.',
 'When the Center for Media and Democracy published thousands of leaked ALEC model bills in 2011, ALEC threatened legal action rather than addressing the substance.',
 'ALEC deliberately conceals the corporate origins of model legislation, bills are introduced by legislators who present them as their own ideas without disclosing ALEC\'s role.',
 'After the Trayvon Martin backlash, ALEC didn\'t stop pushing Stand Your Ground, it simply renamed and restructured its task forces to avoid scrutiny.',
 'Private prison companies like CCA sat on the same ALEC task force that drafted immigration enforcement bills, creating a direct pipeline from corporate profit motive to law.',
 'ALEC has fought every attempt at transparency, including opposing state lobbying disclosure laws and arguing that its activities do not constitute lobbying.',
 'When corporations publicly left ALEC after controversies, many quietly continued funding through alternative channels and less visible affiliations.',
 'ALEC\'s "scholarship" fund pays for legislators\' travel and hotel expenses to attend meetings, effectively corporate-funded junkets disguised as educational events.',
 ],
 sources: [
 { title: 'ALEC Exposed, Center for Media and Democracy', url: 'https://www.alecexposed.org/', date: '2011' },
 { title: 'United States of ALEC, Bill Moyers', url: 'https://billmoyers.com/episode/united-states-of-alec/', date: '2012-09-28' },
 { title: 'How ALEC Shapes State Laws, NPR', url: 'https://www.npr.org/2012/03/23/149168025/how-alec-shapes-state-laws', date: '2012-03-23' },
 { title: 'Prison Companies Push for Immigration Crackdown, NPR/ALEC Investigation', url: 'https://www.npr.org/2010/10/28/130833741/prison-economics-help-drive-ariz-immigration-law', date: '2010-10-28' },
 { title: 'ALEC: The Voice of Corporate Special Interests in State Legislatures, Brookings', url: 'https://www.brookings.edu/articles/alec-the-voice-of-corporate-special-interests-in-state-legislatures/', date: '2018' },
 { title: 'The Guardian: ALEC Model Legislation Database', url: 'https://www.theguardian.com/world/2013/dec/03/alec-funding-lobbying-politicians-exposed', date: '2013-12-03' },
 { title: 'Common Cause IRS Whistleblower Complaint against ALEC', url: 'https://www.commoncause.org/resource/alec-irs-complaint/', date: '2012-04-20' },
 { title: 'Voter suppression laws passed by ALEC-connected legislators, Brennan Center', url: 'https://www.brennancenter.org/our-work/research-reports/new-voter-restrictions-america', date: '2019' },
 ],
};

export default function ALECPage() {
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
 <div className="space-y-3">{investigation.keyFigures.map((figure, idx) => (<div key={idx} className="flex items-start justify-between p-3 bg-[#1c0a00] border border-[rgba(255, 80, 80,0.15)]"><div className="flex-1">{figure.href ? (<Link href={figure.href} className="font-bold text-blood-400 hover:text-blood-300 transition-colors">{figure.name}</Link>) : (<span className="font-bold glass-text">{figure.name}</span>)}<p className="text-sm text-zinc-400 mt-1">{figure.role}</p></div><span className="text-xs px-2 py-1 bg-[#200c00] text-zinc-400 border border-[rgba(255, 60, 60,0.18)] whitespace-nowrap ml-2">{figure.status}</span></div>))}</div>
 </motion.div>
 <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }} className="glass-card p-6">
 <h2 className="text-xl font-bold glass-text uppercase tracking-wider mb-4 flex items-center gap-2"><Scale className="w-5 h-5 text-blood-500"/>Applicable Charges &amp; Statutes</h2>
 <div className="space-y-3">{investigation.charges.map((charge, idx) => (<div key={idx} className="p-4 bg-[#1c0a00] border border-[rgba(255, 80, 80,0.15)]"><p className="font-bold text-blood-400 text-sm font-mono">{charge.statute}</p><p className="text-sm text-zinc-300 mt-1">{charge.description}</p><p className="text-xs text-blood-400 mt-1">{charge.count}</p></div>))}</div>
 </motion.div>
 </div>
 <div className="space-y-6">
 <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} className="glass-card p-6">
 <h3 className="text-lg font-bold glass-text uppercase tracking-wider mb-4 flex items-center gap-2"><Calendar className="w-4 h-4 text-blood-500"/>Timeline</h3>
 <div className="space-y-4">{investigation.timeline.map((item, idx) => (<div key={idx} className="relative pl-4 border-l-2 border-[rgba(255, 80, 80,0.15)]"><div className="absolute -left-[5px] top-0 w-2 h-2 bg-blood-500"/><p className="text-xs text-blood-500 font-mono">{item.date}</p><p className="text-sm text-zinc-300">{item.event}</p></div>))}</div>
 </motion.div>
 <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.1 }} className="glass-card p-6">
 <h3 className="text-lg font-bold glass-text uppercase tracking-wider mb-4 flex items-center gap-2"><Scale className="w-5 h-5 text-blood-500"/>Legal Outcomes</h3>
 <div className="space-y-3">{investigation.legalOutcomes.map((item, idx) => (<div key={idx} className="p-3 bg-[#1c0a00] border border-[rgba(255, 80, 80,0.15)]"><p className="font-bold glass-text text-sm">{item.defendant}</p><p className="text-xs text-zinc-400 mt-1">{item.charge}</p><p className="text-xs text-blood-400 mt-1">{item.outcome}</p></div>))}</div>
 </motion.div>
 <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.2 }} className="glass-card p-6">
 <h3 className="text-lg font-bold glass-text uppercase tracking-wider mb-4">Sources</h3>
 <div className="space-y-2">{investigation.sources.map((source, idx) => (<a key={idx} href={source.url} target="_blank"rel="noopener noreferrer"className="flex items-start gap-2 p-2 text-sm text-zinc-400 hover:text-blood-400 hover:bg-[#1c0a00] transition-colors"><ExternalLink className="w-4 h-4 mt-0.5 flex-shrink-0"/><div><span>{source.title}</span><span className="text-zinc-600 ml-2">({source.date})</span></div></a>))}</div>
 </motion.div>
 </div>
 </div>
 </div>
 </div>
 );
}
