'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowLeft, AlertTriangle, Users, Calendar, FileText, ExternalLink, Scale, ShieldAlert, Skull } from 'lucide-react';
import GlitchText from '@/components/effects/GlitchText';

const investigation = {
 title: 'Sinclair Broadcasting: Scripted Local News',
 subtitle: '193 local TV stations forced to read identical right-wing scripts disguised as hometown journalism',
 severity: 'high',
 status: 'ONGOING, EXPANDING',
 summary: 'Sinclair Broadcast Group, the largest owner of local television stations in the United States, has systematically weaponized local news as a vehicle for partisan propaganda. The company owns or operates 193 stations reaching 40% of American households and requires them to air centrally produced"must-run"segments with right-wing political messaging. In 2018, a viral video showed anchors at dozens of Sinclair stations reading identical scripts warning about"false news"- mimicking Trump\'s language while eroding trust in journalism. Sinclair has hired former Trump administration officials as commentators, required stations to air Boris Epshteyn\'s pro-Trump segments multiple times per week, and used its stations to promote conspiracy theories. The company\'s strategy exploits the fact that Americans trust local news far more than national outlets, making Sinclair\'s propaganda uniquely effective and insidious.',
 keyFigures: [
 { name: 'David Smith', role: 'Sinclair Broadcast Group executive chairman and controlling shareholder', href: '/entities/individuals/david-smith', status: 'Active, Chairman' },
 { name: 'Chris Ripley', role: 'Sinclair CEO who oversees must-run content strategy', href: '/entities/individuals/chris-ripley', status: 'Active, CEO' },
 { name: 'Boris Epshteyn', role: 'Former Trump aide made chief political analyst; must-run segments air several times per week', href: '/entities/individuals/boris-epshteyn', status: 'Active' },
 { name: 'Mark Hyman', role: 'Sinclair VP who produced "The Point"conservative editorial segments for all stations', href: '/entities/individuals/mark-hyman', status: 'Active' },
 { name: 'Scott Livingston', role: 'VP of News who wrote the viral"false news"script read by dozens of anchors simultaneously', href: '/entities/individuals/scott-livingston', status: 'Active' },
 { name: 'Ajit Pai', role: 'FCC Chairman who relaxed ownership rules benefiting Sinclair\'s expansion plans', href: '/entities/individuals/ajit-pai', status: 'Historical' },
 { name: 'Donald Trump', role: 'President who publicly praised Sinclair\'s coverage; Kushner confirmed favorable coverage deal', href: '/entities/individuals/donald-trump', status: 'Living' },
 { name: 'Jared Kushner', role: 'Confirmed Trump campaign arranged favorable Sinclair coverage in exchange for access', href: '/entities/individuals/jared-kushner', status: 'Living' },
 { name: 'Timothy Olson', role: 'Deadspin editor who compiled the viral video showing identical Sinclair scripts', href: '/entities/individuals/timothy-olson', status: 'Historical' },
 { name: 'John Oliver', role: 'Comedian whose "Last Week Tonight"segment brought Sinclair\'s practices to national attention', href: '/entities/individuals/john-oliver', status: 'Active' },
 ],
 timeline: [
 { date: '1971', event: 'Sinclair Broadcast Group founded by Julian Sinclair Smith in Baltimore' },
 { date: '1991', event: 'David Smith takes over as president; begins aggressive acquisition strategy' },
 { date: '2004', event: 'Sinclair orders stations to air anti-Kerry documentary "Stolen Honor"weeks before election; some anchors protest' },
 { date: '2012', event: 'Sinclair begins requiring mandatory"must-run"conservative segments across all stations' },
 { date: '2013-2017', event: 'Sinclair acquires 173 stations, becoming the largest local TV station owner in the U.S.' },
 { date: '2016', event: 'Kushner confirms Trump campaign struck deal with Sinclair: favorable coverage in exchange for interview access' },
 { date: '2017', event: 'Boris Epshteyn, former Trump spokesperson, hired as chief political analyst; segments mandatory for all stations' },
 { date: 'April 2017', event: 'FCC Chairman Ajit Pai relaxes UHF discount rule, directly enabling Sinclair\'s proposed Tribune Media acquisition' },
 { date: 'March 2018', event: 'Deadspin compiles viral video showing dozens of Sinclair anchors reading identical"false news"script' },
 { date: 'April 2, 2018', event: 'Video goes viral; Trump tweets "Sinclair is far superior to CNN"and defends the scripted segments' },
 { date: 'July 2018', event: 'FCC designates Sinclair\'s Tribune Media merger for hearing, citing deceptive conduct; deal collapses' },
 { date: '2019', event: 'Tribune Media merger failure costs Sinclair $1 billion in penalties; company continues acquiring other stations' },
 { date: '2020', event: 'Sinclair stations amplify COVID misinformation and election fraud claims through must-run segments' },
 { date: '2021', event: 'Sinclair rebrands its sports networks but maintains same political content strategy for news stations' },
 { date: '2023', event: 'Sinclair continues to operate 193 stations; must-run segments remain mandatory editorial policy' },
 { date: '2024', event: 'Company explores merger opportunities to further expand station ownership despite FCC regulations' },
 ],
 legalOutcomes: [
 { defendant: 'Sinclair Broadcast Group', charge: 'Deceptive conduct in Tribune Media merger (sham divestitures)', outcome: 'FCC blocked merger; $1B break-up fee; but Sinclair retained all existing stations' },
 { defendant: 'Sinclair', charge: 'Forcing local stations to air partisan political content disguised as local news', outcome: 'No legal consequences; First Amendment protects editorial decisions' },
 { defendant: 'FCC', charge: 'Chairman Pai relaxed ownership rules specifically to benefit Sinclair\'s expansion', outcome: 'Investigation found Pai had improper contacts with Sinclair; no consequences for Pai' },
 { defendant: 'Sinclair', charge: 'Coordinating news coverage with Trump campaign for political access', outcome: 'Kushner confirmed the arrangement; no FEC investigation or action' },
 { defendant: 'Sinclair', charge: 'Using public airwaves for partisan propaganda while holding broadcast licenses', outcome: 'FCC public interest standard not enforced; licenses routinely renewed' },
 { defendant: 'David Smith', charge: 'Personal scandals including massage parlor arrest used to leverage editorial control', outcome: 'Company structured to give Smith family controlling votes despite minority economic stake' },
 { defendant: 'Sinclair', charge: 'Airing COVID misinformation including anti-vaccine content through must-run segments', outcome: 'No regulatory action; content shielded as editorial opinion' },
 { defendant: 'Sinclair', charge: 'Anti-competitive practices in local advertising markets through station dominance', outcome: 'DOJ has not mounted antitrust challenge despite growing market dominance' },
 ],
 charges: [
 { statute: 'FCC Public Interest Standard (47 U.S.C. § 309)', description: 'Broadcast licensees must serve the public interest; scripted propaganda violates this obligation', count: '193 stations using public airwaves to broadcast centrally produced partisan content' },
 { statute: 'FCC Ownership Rules, Media Consolidation', description: 'Media ownership limits exist to ensure diversity of viewpoints in local markets', count: 'Sinclair exploited loopholes (sham LMAs, UHF discount) to exceed ownership caps' },
 { statute: 'FEC Campaign Finance Violations', description: 'Coordinated favorable coverage with Trump campaign constitutes unreported in-kind contribution', count: 'Kushner publicly confirmed coverage-for-access arrangement during 2016 campaign' },
 { statute: '47 U.S.C. § 315 - Equal Time Rule', description: 'Broadcasters must provide equal opportunity to opposing candidates', count: 'Must-run segments consistently favored one political party with no equal time offered' },
 { statute: 'FCC Anti-Payola Rules (47 U.S.C. § 317)', description: 'Broadcasters must disclose when content is sponsored or paid for', count: 'Must-run segments presented as local editorial content without disclosure of central origin' },
 { statute: 'Sherman Antitrust Act (15 U.S.C. § 1)', description: 'Monopolization of local television markets through aggressive consolidation', count: '193 stations across 100+ markets; 40% of American households reached' },
 { statute: '1st Amendment, Marketplace of Ideas', description: 'Consolidation of local news under one editorial voice undermines democratic discourse', count: 'Dozens of communities lost independent local news voices through Sinclair acquisitions' },
 { statute: 'FCC License Condition, Localism', description: 'Stations are licensed to serve local communities\'s information needs', count: 'Must-run segments replace local content with nationally produced partisan material' },
 ],
 coverup: [
 'Sinclair presents its must-run segments as locally produced content, deliberately exploiting the trust Americans place in local news anchors to deliver partisan national messaging.',
 'When the viral video exposed identical scripts being read across dozens of stations, Sinclair claimed the segments were about"journalistic integrity"rather than political propaganda.',
 'The Trump campaign\'s deal with Sinclair (favorable coverage in exchange for access) was admitted by Kushner but was never investigated by the FEC as a potential in-kind campaign contribution.',
 'FCC Chairman Ajit Pai\'s relationship with Sinclair was documented through text messages and meetings, but he was never formally sanctioned for actions that directly benefited the company.',
 'Boris Epshteyn\'s segments, which air multiple times per week on 193 stations, are presented as independent analysis despite his role as a former Trump administration official and campaign adviser.',
 'Sinclair used sham Local Marketing Agreements (LMAs) to control stations beyond the FCC ownership cap, effectively owning stations while claiming they were independently operated.',
 'When local anchors or journalists objected to must-run content, they were disciplined, transferred, or terminated, creating a chilling effect on internal dissent.',
 'The company\'s dual-class share structure ensures the Smith family maintains editorial control regardless of public shareholders, preventing any market-based accountability.',
 'Sinclair\'s 2004 attempt to air anti-Kerry propaganda was an early test of using local stations for partisan purposes, the lack of consequences emboldened the expanded must-run strategy.',
 ],
 sources: [
 { title: 'Deadspin, Sinclair Anchors Reading Same Script (Viral Video)', url: 'https://theconcourse.deadspin.com/how-americas-largest-local-tv-owner-turned-its-news-anc-1824233490', date: '2018' },
 { title: 'Politico, Kushner: We Struck Deal with Sinclair for Favorable Coverage', url: 'https://www.politico.com/story/2016/12/trump-campaign-sinclair-broadcasting-jared-kushner-232764', date: '2016' },
 { title: 'New York Times, Sinclair\'s Reach and Influence', url: 'https://www.nytimes.com/2017/05/12/business/media/sinclair-broadcast-komo-702.html', date: '2017' },
 { title: 'Last Week Tonight, Sinclair Broadcast Group', url: 'https://www.youtube.com/watch?v=GvtNyOzGogc', date: '2017' },
 { title: 'FCC Inspector General, Pai/Sinclair Investigation', url: 'https://www.fcc.gov/document/ig-report-chairmans-actions-uhf-discount-and-sinclair', date: '2018' },
 { title: 'Columbia Journalism Review, Sinclair\'s Propaganda Machine', url: 'https://www.cjr.org/special_report/sinclair-broadcast-locals.php/', date: '2018' },
 { title: 'Washington Post, Inside Sinclair\'s Must-Run Segments', url: 'https://www.washingtonpost.com/lifestyle/style/under-new-ownership-a-major-shift-at-wjla-and-news-channel-8/2014/09/02/', date: '2014' },
 { title: 'Free Press, Sinclair Broadcast Group Research', url: 'https://www.freepress.net/issues/media-control/media-consolidation/sinclair-broadcast-group', date: '2023' },
 ],
};

export default function SinclairBroadcastingPage() {
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
