'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowLeft, AlertTriangle, Users, Calendar, FileText, ExternalLink, Scale, ShieldAlert, Skull } from 'lucide-react';
import GlitchText from '@/components/effects/GlitchText';

const investigation = {
 title: 'Standing Rock & Dakota Access Pipeline',
 subtitle: 'When America Deployed Military Force Against Indigenous Water Protectors to Build a Corporate Oil Pipeline on Sacred Treaty Land',
 severity: 'critical',
 status: 'PIPELINE OPERATIONAL - LEGAL BATTLES ONGOING',
 summary: 'In 2016, the Standing Rock Sioux Tribe and thousands of allies fought to prevent the Dakota Access Pipeline (DAPL) from crossing under the Missouri River just upstream of their reservation, threatening their water supply and violating treaty rights. The $3.8 billion pipeline, built by Energy Transfer Partners (whose CEO Kelcy Warren donated millions to Trump), was originally routed through Bismarck but relocated near the reservation after predominantly white residents objected. The response was a military-grade assault on peaceful water protectors: rubber bullets, water cannons in sub-zero temperatures, concussion grenades, attack dogs, and mass arrests. TigerSwan, a private military contractor from Iraq, was hired to surveil and infiltrate protectors. Obama delayed the pipeline; Trump approved it within days of taking office. The pipeline has since leaked multiple times, vindication the Tribe\'s environmental concerns.',
 keyFigures: [
 { name: 'Dave Archambault II', role: 'Chairman of Standing Rock Sioux Tribe who led opposition to DAPL; testified before United Nations', href: '/entities/individuals/dave-archambault-ii', status: 'Active' },
 { name: 'Kelcy Warren', role: 'CEO of Energy Transfer Partners; donated $100,000+ to Trump; personally profited $2.3B+ from DAPL', href: '/entities/individuals/kelcy-warren', status: 'Active' },
 { name: 'Donald Trump', role: 'President who approved DAPL within days of inauguration; had personal financial stake in Energy Transfer Partners', href: '/entities/individuals/donald-trump', status: 'Active' },
 { name: 'Barack Obama', role: 'President who delayed pipeline pending environmental review; ultimately did not cancel it', href: '/entities/individuals/barack-obama', status: 'Active' },
 { name: 'LaDonna Brave Bull Allard', role: 'Standing Rock historian who established Sacred Stone Camp, the first resistance camp against DAPL', href: '/entities/individuals/ladonna-brave-bull-allard', status: 'Deceased (2021)' },
 { name: 'Chase Iron Eyes', role: 'Attorney and activist who was arrested at Standing Rock; later ran for Congress; Lakota People\'s Law Project', href: '/entities/individuals/chase-iron-eyes', status: 'Active' },
 { name: 'Red Fawn Fallis', role: 'Water protector arrested on disputed weapons charge; sentenced to federal prison', href: '/entities/individuals/red-fawn-fallis', status: 'Released from prison' },
 { name: 'Kyle Thompson', role: 'Morton County sheriff who directed militarized law enforcement response against water protectors', href: '/entities/individuals/kyle-thompson', status: 'Active' },
 { name: 'James Bosbous', role: 'Federal judge who ordered environmental review but allowed pipeline to continue operating', href: '/entities/individuals/james-bosbous', status: 'Active - Federal Judge' },
 { name: 'Rick Perry', role: 'Trump Energy Secretary and Energy Transfer Partners board member who approved pipeline', href: '/entities/individuals/rick-perry', status: 'Active' },
 { name: 'Jan Hasselman', role: 'Earthjustice attorney representing Standing Rock Sioux in legal challenges to DAPL', href: '/entities/individuals/jan-hasselman', status: 'Active' },
 { name: 'Dallas Goldtooth', role: 'Indigenous Environmental Network organizer who helped coordinate water protector movement', href: '/entities/individuals/dallas-goldtooth', status: 'Active' },
 ],
 timeline: [
 { date: 'April 2016', event: 'Standing Rock Sioux Tribe youth run 2,000 miles to Washington DC to deliver petition opposing pipeline route' },
 { date: 'April 2016', event: 'LaDonna Brave Bull Allard establishes Sacred Stone Camp at confluence of Missouri and Cannonball Rivers' },
 { date: 'July 2016', event: 'Army Corps of Engineers grants DAPL easement without full Environmental Impact Statement, despite tribal objections' },
 { date: 'August 2016', event: 'Standing Rock files federal lawsuit; Oceti Sakowin camp grows to thousands of water protectors from 300+ tribes' },
 { date: 'September 3, 2016', event: 'DAPL security uses unleashed attack dogs on water protectors; six people bitten including a pregnant woman' },
 { date: 'September 2016', event: 'Morton County Sheriff\'s department begins mass arrests; over 750 will be arrested during the movement' },
 { date: 'October 2016', event: 'Leaked documents reveal TigerSwan, a private military firm from Afghanistan/Iraq, is surveilling water protectors' },
 { date: 'October 27, 2016', event: 'Militarized police raid treaty camp; use armored vehicles, rubber bullets, tasers, and pepper spray; 142 arrested in one day' },
 { date: 'November 20, 2016', event: 'Police use water cannons in 26°F weather against hundreds of water protectors on Backwater Bridge; 300 injured' },
 { date: 'December 4, 2016', event: 'Obama administration denies DAPL easement and orders full environmental review - a temporary victory' },
 { date: 'January 24, 2017', event: 'Trump signs executive order expediting DAPL approval within four days of inauguration' },
 { date: 'February 2017', event: 'National Guard and law enforcement forcibly evict remaining camps; burn structures and prayer sites' },
 { date: 'June 2017', event: 'Pipeline begins commercial operation; over 750 people have been arrested, many facing federal charges' },
 { date: 'March 2020', event: 'Federal judge orders full environmental impact statement and considers shutting down pipeline' },
 { date: 'May 2020', event: 'DAPL spills over 12,000 gallons of oil in North Dakota wetland - the largest spill on the pipeline route' },
 { date: 'June 2020', event: 'DC Circuit rules Army Corps violated NEPA by approving pipeline without full environmental review' },
 { date: '2021', event: 'Pipeline continues operating despite court order for environmental review; Biden does not intervene to stop it' },
 { date: '2022', event: 'Army Corps completes environmental impact statement; approves pipeline continuation despite tribal opposition' },
 { date: '2024', event: 'Standing Rock and allied tribes continue legal challenges; pipeline has leaked at least five times since construction' },
 ],
 legalOutcomes: [
 { defendant: 'Army Corps of Engineers', charge: 'Approving DAPL easement without full Environmental Impact Statement (NEPA violation)', outcome: 'Federal court ruled 2020 that Corps violated NEPA; ordered full EIS but allowed pipeline to continue operating' },
 { defendant: 'Energy Transfer Partners', charge: 'Construction through sacred sites and treaty-protected lands without adequate tribal consultation', outcome: 'No criminal liability; pipeline operating and generating billions in revenue' },
 { defendant: 'Morton County / State of North Dakota', charge: 'Excessive force against water protectors: rubber bullets, water cannons in freezing weather, concussion grenades', outcome: 'Some civil rights lawsuits settled; $3M settlement with activists in 2024; no criminal charges against officers' },
 { defendant: '761 water protectors', charge: 'Various charges including trespassing, rioting, conspiracy; many faced federal charges', outcome: 'Over 90% of cases dismissed or resulted in plea deals; Red Fawn Fallis sentenced to 57 months on disputed weapons charge' },
 { defendant: 'TigerSwan', charge: 'Operating as unlicensed private security/intelligence firm; surveilling US citizens on US soil', outcome: 'North Dakota Private Investigation Board found TigerSwan operated without license; fined; no federal accountability' },
 { defendant: 'Donald Trump', charge: 'Conflict of interest - held financial stake in Energy Transfer Partners while approving pipeline', outcome: 'Campaign disclosed Trump held $50,000-$100,000 in ETP stock; sold before inauguration but received campaign donation from CEO' },
 { defendant: 'Standing Rock Sioux Tribe v. Army Corps', charge: 'Ongoing challenge to pipeline operation under treaty rights and environmental law', outcome: 'Litigation continuing; courts have ruled pipeline operation violates NEPA but have not ordered shutdown' },
 { defendant: 'DAPL / Energy Transfer', charge: 'Pipeline leaks and environmental contamination', outcome: 'At least 5 recorded leaks including 12,000-gallon spill in 2020; fines insufficient to deter; profits far exceed penalties' },
 ],
 charges: [
 { statute: 'National Environmental Policy Act (NEPA) Violations', description: 'Army Corps of Engineers approved pipeline easement without completing legally required Environmental Impact Statement', count: 'Federal court confirmed NEPA violation in 2020; ordered full EIS after pipeline was already operational' },
 { statute: 'Fort Laramie Treaty of 1851 and 1868', description: 'Pipeline crosses treaty-protected lands and threatens water resources guaranteed to the Sioux Nation by federal treaty', count: 'Treaties explicitly guaranteed Sioux sovereignty over lands through which pipeline was routed' },
 { statute: 'National Historic Preservation Act § 106', description: 'Failure to properly consult with tribes about pipeline\'s impact on sacred sites and culturally significant areas', count: 'Construction destroyed burial sites and sacred stone formations; tribe was notified only after routes were finalized' },
 { statute: 'Fourth Amendment - Unreasonable Seizure / Excessive Force', description: 'Law enforcement used rubber bullets, water cannons in sub-freezing temperatures, concussion grenades, and attack dogs against peaceful protesters', count: '300+ injured on Backwater Bridge alone; 761 arrested total; multiple hospitalizations including hypothermia' },
 { statute: '18 U.S.C. § 241 - Conspiracy Against Rights', description: 'Coordinated government and private security response to suppress constitutionally protected protest and indigenous rights', count: 'TigerSwan conducted intelligence operations against US citizens; police coordinated with private military firm' },
 { statute: 'Clean Water Act Violations', description: 'Pipeline threatens Missouri River water supply and has leaked multiple times since operation began', count: '5+ documented leaks including 12,000-gallon spill in 2020; ongoing threat to tribal water supply' },
 { statute: 'Executive Conflict of Interest - 18 U.S.C. § 208', description: 'Trump held financial stake in Energy Transfer Partners and received campaign donations from CEO while making approval decisions', count: 'Pipeline approved within 4 days of inauguration; Kelcy Warren donated $100,000+ to Trump campaign' },
 { statute: 'Environmental Racism - Executive Order 12898', description: 'Pipeline was rerouted away from predominantly white Bismarck specifically to place environmental risk on indigenous community', count: 'Route explicitly moved from majority-white community to within 0.5 miles of Standing Rock reservation' },
 ],
 coverup: [
 'The pipeline was originally routed through Bismarck, North Dakota, but was moved to cross near the Standing Rock reservation after predominantly white Bismarck residents objected to the environmental risk.',
 'TigerSwan, a private military/intelligence firm that operated in Afghanistan and Iraq, was hired by Energy Transfer to surveil, infiltrate, and conduct psychological operations against water protectors on US soil.',
 'Morton County and North Dakota state officials framed peaceful water protectors as violent agitators and"eco-terrorists"to justify military-grade force - despite the fact that the vast majority of violence came from law enforcement.',
 'Trump\'s financial connections to Energy Transfer Partners were downplayed: he held stock in the company and received $100,000+ in campaign donations from CEO Kelcy Warren before expediting pipeline approval.',
 'The Army Corps of Engineers initially denied the pipeline easement under Obama, but fast-tracked approval within weeks under Trump without conducting the required environmental review.',
 'Rick Perry, who sat on Energy Transfer\'s board of directors, was simultaneously serving as Trump\'s Energy Secretary - a direct conflict of interest that received minimal scrutiny.',
 'Media coverage initially framed the confrontation as clashes between"protesters"and police, obscuring the fact that water protectors were on treaty-protected land and exercising constitutional rights.',
 'Despite federal courts ruling that the pipeline violated NEPA, it has been allowed to continue operating - generating billions in revenue while legal challenges grind through courts.',
 'The pipeline has leaked at least five times since becoming operational, vindicating the very environmental concerns that were dismissed and suppressed during the protest movement.',
 ],
 sources: [
 { title: 'Standing Rock Sioux Tribe v. U.S. Army Corps of Engineers - Court Filings', url: 'https://www.courtlistener.com/docket/4544808/standing-rock-sioux-tribe-v-us-army-corps-of-engineers/', date: 'Ongoing' },
 { title: 'TigerSwan Leaked Documents - The Intercept', url: 'https://theintercept.com/series/oil-and-water/', date: '2017' },
 { title: 'Standing Rock Investigation - Amnesty International', url: 'https://www.amnestyusa.org/reports/standing-rock-report/', date: '2017' },
 { title: 'Use of Force at Standing Rock - UN Special Rapporteur on Rights of Indigenous Peoples', url: 'https://www.ohchr.org/EN/NewsEvents/Pages/DisplayNews.aspx?NewsID=20868', date: 'November 2016' },
 { title: 'Federal Court Rules DAPL Violates NEPA - Earthjustice', url: 'https://earthjustice.org/cases/dakota-access-pipeline', date: '2020' },
 { title: 'Dakota Access Pipeline Spills 12,000 Gallons - Reuters', url: 'https://web.archive.org/web/2024/https://www.reuters.com/article/us-usa-pipeline-spill-idUSKBN22N2JK', date: 'May 2020' },
 { title: 'Trump\'s Financial Ties to Dakota Access - Washington Post', url: 'https://www.washingtonpost.com/news/government/wp/2016/12/02/trump-financial-connections-to-dakota-access-pipeline/', date: 'December 2016' },
 { title: 'The Standing Rock Syllabus - NYC Stands with Standing Rock', url: 'https://nycstandswithstandingrock.wordpress.com/standingrocksyllabus/', date: '2016' },
 { title: 'Water Protector Legal Collective - Case Outcomes', url: 'https://waterprotectorlegal.org/', date: 'Ongoing' },
 ],
};

export default function StandingRockPage() {
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
