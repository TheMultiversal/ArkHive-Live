'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowLeft, AlertTriangle, Users, Calendar, FileText, ExternalLink, Scale, ShieldAlert, Skull } from 'lucide-react';
import GlitchText from '@/components/effects/GlitchText';

const investigation = {
 title: 'The Koch Network',
 subtitle: 'How Two Billionaires Bought American Democracy',
 severity: 'critical',
 status: 'ONGOING',
 summary: 'Charles and David Koch built the most powerful private political network in American history, spending over $400 million annually to reshape government policy in their favor. Through a labyrinth of dark money groups, think tanks, and astroturf organizations, the Kochs systematically dismantled environmental regulations, crushed labor unions, slashed taxes for the ultra-wealthy, and funded climate change denial, all while maintaining the fiction that their network represented grassroots American values. The Koch network\'s influence extends from local school boards to the Supreme Court, making it arguably the most successful hostile takeover of democratic governance ever attempted by private citizens.',
 keyFigures: [
 { name: 'Charles Koch', role: 'CEO of Koch Industries, primary architect of the Koch political network', href: '/entities/individuals/charles-koch', status: 'Active' },
 { name: 'David Koch', role: 'Executive VP of Koch Industries, co-funder of Americans for Prosperity', href: '/entities/individuals/david-koch', status: 'Deceased (2019)' },
 { name: 'Richard Fink', role: 'Koch Industries EVP, mastermind of the "Structure of Social Change"strategy', href: '/entities/individuals/richard-fink', status: 'Retired' },
 { name: 'Tim Phillips', role: 'President of Americans for Prosperity, orchestrated Tea Party mobilization', href: '/entities/individuals/tim-phillips', status: 'Active' },
 { name: 'Marc Short', role: 'Former president of Freedom Partners, later Trump\'s legislative affairs director', href: '/entities/individuals/marc-short', status: 'Active' },
 { name: 'Art Pope', role: 'Koch ally, North Carolina retail magnate, reshaped NC politics through targeted spending', href: '/entities/individuals/art-pope', status: 'Active' },
 { name: 'Robert Mercer', role: 'Hedge fund billionaire, Koch network ally, funded Breitbart and Cambridge Analytica', href: '/entities/individuals/robert-mercer', status: 'Active' },
 { name: 'Mike Pence', role: 'Former VP, longtime Koch network beneficiary, pushed Koch agenda in White House', href: '/entities/individuals/mike-pence', status: 'Active' },
 { name: 'Scott Walker', role: 'Former Wisconsin Governor, passed Koch-backed anti-union legislation', href: '/entities/individuals/scott-walker', status: 'Active' },
 { name: 'Betsy DeVos', role: 'Koch network donor, Education Secretary who pushed school privatization', href: '/entities/individuals/betsy-devos', status: 'Active' },
 { name: 'Leonard Leo', role: 'Federalist Society co-chair, partnered with Kochs on judicial nominations', href: '/entities/individuals/leonard-leo', status: 'Active' },
 ],
 timeline: [
 { date: '1977', event: 'Charles Koch founds the Cato Institute (originally the Charles Koch Foundation) to promote libertarian ideology' },
 { date: '1980', event: 'David Koch runs as Libertarian Party VP candidate, receives only 1%; brothers decide to work within Republican Party' },
 { date: '1984', event: 'Citizens for a Sound Economy founded as Koch-backed advocacy group' },
 { date: '1997', event: 'Richard Fink outlines "Structure of Social Change"- a three-stage plan to move ideas from academia to policy' },
 { date: '2003', event: 'First Koch donor summit held in Chicago, raising tens of millions for political operations' },
 { date: '2004', event: 'Americans for Prosperity founded from remnants of Citizens for a Sound Economy' },
 { date: '2009', event: 'Koch network funds and organizes Tea Party movement, creating an astroturf uprising against Obama' },
 { date: '2010', event: 'Citizens United decision removes campaign spending limits; Koch network spending explodes' },
 { date: '2010', event: 'Koch-backed candidates sweep midterm elections, gaining 63 House seats and control of state legislatures' },
 { date: '2011', event: 'Scott Walker passes Act 10 in Wisconsin, destroying public-sector unions with Koch backing' },
 { date: '2012', event: 'Koch network spends estimated $400 million in election cycle' },
 { date: '2013', event: 'Koch network leads government shutdown effort through Heritage Action and Ted Cruz' },
 { date: '2014', event: 'Freedom Partners revealed as the central hub of Koch donor network, distributing hundreds of millions' },
 { date: '2016', event: 'Koch network builds a political operation rivaling the RNC with 1,600+ paid staffers in 35 states' },
 { date: '2017', event: 'Koch network delivers Trump tax cuts, the Tax Cuts and Jobs Act saves Koch Industries an estimated $1-1.4 billion annually' },
 { date: '2018', event: 'Jane Mayer\'s investigation reveals Koch network spent $889 million in 2016 election cycle' },
 { date: '2019', event: 'David Koch dies; Charles continues operations through Stand Together network rebrand' },
 { date: '2023', event: 'Koch network backs Nikki Haley against Trump, spending tens of millions in Republican primary' },
 ],
 legalOutcomes: [
 { defendant: 'Koch Industries', charge: 'Benzene emissions concealment', outcome: 'Settled for $20 million after covering up cancer-causing emissions' },
 { defendant: 'Koch Industries', charge: '300+ oil spills across six states', outcome: 'Paid $30 million in fines, largest civil penalty under Clean Water Act at the time' },
 { defendant: 'Koch Industries', charge: 'Stealing oil from Native American lands', outcome: 'Senate investigation confirmed systematic theft; minimal penalties' },
 { defendant: 'Americans for Prosperity', charge: 'Voter suppression mailings', outcome: 'Sent misleading election mailers to wrong precincts; no prosecution' },
 { defendant: 'Koch Industries', charge: 'Illegal payments to secure contracts in six countries', outcome: 'Internal investigation confirmed bribery; DOJ investigation quietly dropped' },
 { defendant: 'Freedom Partners', charge: 'Dark money coordination violations', outcome: 'FEC deadlocked along party lines; no enforcement action' },
 { defendant: 'Koch-backed ALEC', charge: 'Lobbying while claiming tax-exempt status', outcome: 'IRS complaint filed; no action taken despite evidence of direct lobbying' },
 { defendant: 'Koch Industries', charge: 'Formaldehyde exposure at Georgia-Pacific plants', outcome: 'Workers sickened; company denied responsibility; limited settlements' },
 ],
 charges: [
 { statute: '52 U.S.C. § 30121', description: 'Illegal coordination between dark money groups and political campaigns', count: 'Systematic pattern across multiple election cycles' },
 { statute: '26 U.S.C. § 501(c)(4)', description: 'Abuse of social welfare nonprofit status for primarily political purposes', count: 'Dozens of Koch-affiliated 501(c)(4) organizations' },
 { statute: '18 U.S.C. § 1346', description: 'Honest services fraud through corrupt influence over legislation', count: 'Multiple instances of quid pro quo policy outcomes' },
 { statute: '33 U.S.C. § 1319', description: 'Clean Water Act violations from hundreds of pipeline spills', count: '300+ documented oil spills' },
 { statute: '42 U.S.C. § 7413', description: 'Clean Air Act violations concealing benzene and other toxic emissions', count: 'Multiple facilities, decades of violations' },
 { statute: '18 U.S.C. § 1962 (RICO)', description: 'Pattern of racketeering through coordinated dark money and policy manipulation', count: 'Enterprise-level coordination across 700+ donor network' },
 { statute: '52 U.S.C. § 20511', description: 'Voter intimidation and suppression through misleading election communications', count: 'Multiple states, multiple election cycles' },
 { statute: '15 U.S.C. § 78dd-1 (FCPA)', description: 'Foreign Corrupt Practices Act violations for overseas bribery', count: 'Six countries with documented illegal payments' },
 ],
 coverup: [
 'Koch donor summits are held under extreme secrecy, attendees\' identities protected, no media allowed, armed security details patrol the perimeter of luxury resorts.',
 'The network uses a labyrinth of pass-through organizations to obscure the source of funds. Money flows through Freedom Partners to dozens of groups, making it nearly impossible to trace.',
 'Koch Industries fought for years to keep their donor network secret, suing the state of California to prevent disclosure of nonprofit donors.',
 'Americans for Prosperity was designed to appear as a grassroots organization despite being entirely funded and directed by billionaire donors.',
 'The Koch network systematically captured state-level politics through ALEC and the State Policy Network, where corporate lobbyists literally hand-write legislation that state representatives introduce verbatim.',
 'Koch-funded climate denial operations spent decades manufacturing doubt about climate science, directly modeled on the tobacco industry\'s cancer denial playbook.',
 'When journalists like Jane Mayer investigated the Kochs, the network hired private investigators to dig into her personal life and attempted to plant negative stories.',
 'The Kochs rebranded their network as "Stand Together"- a feel-good name for an operation dedicated to eliminating the social safety net and environmental protections.',
 'Koch Industries systematically stole oil from Native American reservations for years, using mismeasured gauges to underpay for crude, a Senate investigation confirmed the theft but the company faced minimal consequences.',
 ],
 sources: [
 { title: 'Dark Money: The Hidden History of the Billionaires Behind the Rise of the Radical Right, Jane Mayer', url: 'https://www.newyorker.com/magazine/2016/01/25/new-koch', date: '2016' },
 { title: 'Kochland: The Secret History of Koch Industries, Christopher Leonard', url: 'https://www.simonandschuster.com/books/Kochland/Christopher-Leonard/9781476775388', date: '2019' },
 { title: 'Koch network to spend $400 million in 2018 midterms', url: 'https://www.washingtonpost.com/politics/koch-network-to-spend-400-million-in-2018-midterms/2018/01/27/26e1b224-037f-11e8-8777-2a059f168681_story.html', date: '2018-01-27' },
 { title: 'Koch Industries: Secretly Funding the Climate Denial Machine', url: 'https://www.greenpeace.org/usa/fighting-climate-chaos/climate-deniers/koch-industries/', date: '2013' },
 { title: 'Inside the Koch Brothers\' Toxic Empire, Rolling Stone', url: 'https://www.rollingstone.com/politics/politics-news/inside-the-koch-brothers-toxic-empire-164403/', date: '2014-09-24' },
 { title: 'The Koch brothers and the Republican Party: an ideological history', url: 'https://www.theguardian.com/us-news/2016/jan/17/dark-money-review-jane-mayer-koch-brothers-ruthless-war-on-democracy', date: '2016-01-17' },
 { title: 'Senate Report on Koch Industries\' Oil Theft from Indian Country', url: 'https://www.indian.senate.gov/hearings/oil-theft-indian-lands', date: '1989' },
 { title: 'Koch Industries agreed to pay record fine for oil spills', url: 'https://www.nytimes.com/2000/01/14/us/koch-industries-to-pay-record-fine-for-oil-spills-in-6-states.html', date: '2000-01-14' },
 ],
};

export default function KochNetworkPage() {
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
