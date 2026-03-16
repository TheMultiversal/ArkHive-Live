'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowLeft, AlertTriangle, Users, Calendar, FileText, ExternalLink, Scale, ShieldAlert, Skull } from 'lucide-react';
import GlitchText from '@/components/effects/GlitchText';

const investigation = {
 title: 'Exxon Climate Cover-Up',
 subtitle: 'Knew Since 1977, Funded Denial for Decades, Spent $30M+ on Disinformation: How Exxon Buried Climate Science',
 severity: 'critical',
 status: 'UNDER INVESTIGATION',
 summary: 'Beginning in the late 1970s, Exxon\'s own scientists conducted cutting-edge climate research that accurately predicted global warming with remarkable precision. Internal documents reveal that by 1982, Exxon scientists had projected CO2-driven warming of 0.3°C per decade, a prediction that has proven 99% accurate. Rather than disclosing these findings, Exxon embarked on a decades-long campaign to manufacture doubt about climate science. The company spent over $30 million funding think tanks, front groups, and disinformation campaigns, including the Global Climate Coalition, the George C. Marshall Institute, and the Competitive Enterprise Institute. Exxon\'s strategy directly mirrored the tobacco industry\'s playbook: privately accept the science while publicly denying it to protect profits. Meanwhile, the company quietly reinforced its own Arctic infrastructure to account for the very warming its public campaigns denied. Multiple state attorneys general, congressional investigations, and a landmark Massachusetts v. EPA Supreme Court case have exposed this deception, yet no senior Exxon executive has faced criminal charges despite knowingly contributing to a crisis that threatens billions of lives.',
 keyFigures: [
 { name: 'Lee Raymond', role: 'Exxon CEO (1993-2005) who publicly denied climate change at the 1997 World Petroleum Congress while internal scientists confirmed it', href: '/entities/individuals/lee-raymond', status: 'Retired - $400M compensation' },
 { name: 'Rex Tillerson', role: 'ExxonMobil CEO (2006-2017); continued funding denial groups; later served as U.S. Secretary of State', href: '/entities/individuals/rex-tillerson', status: 'Retired, Former Sec. of State' },
 { name: 'Darren Woods', role: 'Current ExxonMobil CEO; sued activist investors and has fought ESG shareholder proposals', href: '/entities/individuals/darren-woods', status: 'Active, CEO' },
 { name: 'James Black', role: 'Exxon senior scientist who warned management in 1977 that CO2 from fossil fuels was warming the planet', href: '/entities/individuals/james-black', status: 'Deceased, Whistleblower' },
 { name: 'Henry Shaw', role: 'Exxon research scientist who authored internal reports confirming anthropogenic climate change in the early 1980s', href: '/entities/individuals/henry-shaw', status: 'Former Exxon scientist' },
 { name: 'Edward Garvey', role: 'Exxon researcher whose 1981 memo projected CO2 concentrations and warming that proved remarkably accurate', href: '/entities/individuals/edward-garvey', status: 'Former Exxon researcher' },
 { name: 'Naomi Oreskes', role: 'Harvard historian of science whose research documented the fossil fuel industry\'s organized climate denial campaign', href: '/entities/individuals/naomi-oreskes', status: 'Active, Academic' },
 { name: 'Geoffrey Supran', role: 'Researcher who published peer-reviewed analysis proving Exxon\'s public statements contradicted its internal science', href: '/entities/individuals/geoffrey-supran', status: 'Active, Researcher' },
 { name: 'Maura Healey', role: 'Massachusetts AG (now Governor) who launched fraud investigation into ExxonMobil\'s climate deception', href: '/entities/individuals/maura-healey', status: 'Active, Governor' },
 { name: 'Eric Schneiderman', role: 'New York AG who subpoenaed ExxonMobil\'s climate records; led state investigation into investor fraud', href: '/entities/individuals/eric-schneiderman', status: 'Former AG, Resigned' },
 { name: 'Sheldon Whitehouse', role: 'U.S. Senator who led congressional investigations into fossil fuel industry climate disinformation', href: '/entities/individuals/sheldon-whitehouse', status: 'Active, Senator' },
 ],
 timeline: [
 { date: '1957-01-01', event: 'Humble Oil (Exxon predecessor) physicist Edward Teller warns the American Petroleum Institute that CO2 could cause catastrophic warming' },
 { date: '1977-06-01', event: 'Exxon senior scientist James Black presents to management:"There is general scientific agreement that the most likely manner in which mankind is influencing the global climate is through carbon dioxide release from the burning of fossil fuels"' },
 { date: '1978-11-01', event: 'Exxon launches major internal climate research program, deploying scientists on the supertanker Esso Atlantic to measure ocean CO2 absorption' },
 { date: '1981-01-01', event: 'Internal Exxon memo by Roger Cohen warns that continued fossil fuel burning could produce"ichievably dramatic"effects including"some potentially catastrophic events"' },
 { date: '1982-11-12', event: 'Internal Exxon document projects warming of 0.3°C per decade and CO2 doubling by 2060; predictions that prove 99% accurate' },
 { date: '1982-09-01', event: 'Exxon\'s corporate primer on CO2 states:"Mitigation of the \'greenhouse effect\' would require major reductions in fossil fuel combustion"' },
 { date: '1983-01-01', event: 'Exxon begins cutting its climate research program despite confirming the science internally' },
 { date: '1988-06-23', event: 'NASA\'s James Hansen testifies before Congress that global warming has begun; Exxon\'s internal science already corroborated this' },
 { date: '1989-01-01', event: 'Exxon helps found the Global Climate Coalition, an industry front group designed to block climate regulations' },
 { date: '1997-10-13', event: 'CEO Lee Raymond tells the World Petroleum Congress:"The case for so-called global warming is far from airtight"- contradicting Exxon\'s own 20 years of research' },
 { date: '1998-04-01', event: 'Leaked American Petroleum Institute memo outlines strategy:"Victory will be achieved when average citizens \'understand\' uncertainties in climate science"' },
 { date: '2006-01-01', event: 'Union of Concerned Scientists report reveals ExxonMobil funneled $16M to 43 organizations to manufacture climate doubt between 1998 and 2005' },
 { date: '2015-09-16', event: 'InsideClimate News publishes "Exxon: The Road Not Taken"- exposing decades of internal climate knowledge vs. public denial' },
 { date: '2015-11-05', event: 'New York AG Eric Schneiderman subpoenas ExxonMobil\'s internal climate research and communication files' },
 { date: '2016-04-13', event: 'Attorneys general of 17 states and territories announce coordinated investigation into ExxonMobil\'s climate deception' },
 { date: '2019-10-22', event: 'New York v. ExxonMobil trial begins, state alleges the company defrauded investors by hiding climate risks' },
 { date: '2021-05-26', event: 'Activist hedge fund Engine No. 1 wins 3 ExxonMobil board seats in shareholder revolt over climate strategy' },
 { date: '2023-01-12', event: 'Peer-reviewed study by Supran et al. in Science proves Exxon\'s internal projections were 99% accurate while public statements denied the science' },
 { date: '2024-01-01', event: 'Multiple state and municipal lawsuits against ExxonMobil for climate fraud and deception continue to advance through courts' },
 ],
 legalOutcomes: [
 { defendant: 'ExxonMobil (NY trial)', charge: 'Investor fraud, hiding climate-related financial risk', outcome: 'Found not liable in narrow 2019 NY case; appeal and additional cases continue' },
 { defendant: 'ExxonMobil (state AGs)', charge: 'Consumer fraud and deception regarding climate change', outcome: 'Investigations ongoing by multiple state attorneys general' },
 { defendant: 'ExxonMobil (municipal lawsuits)', charge: 'Public nuisance, failure to warn, consumer deception', outcome: '20+ cities and counties have filed climate fraud lawsuits; cases advancing' },
 { defendant: 'ExxonMobil (CA lawsuit)', charge: 'California sues ExxonMobil and other oil companies for climate deception', outcome: 'Filed September 2023; case continues' },
 { defendant: 'ExxonMobil (SEC)', charge: 'Inadequate disclosure of climate-related financial risks', outcome: 'Under SEC scrutiny following new climate disclosure rules' },
 { defendant: 'ExxonMobil (shareholder action)', charge: 'Failure to address climate risk in corporate governance', outcome: 'Lost 3 board seats to activist investors (Engine No. 1) in 2021' },
 { defendant: 'Global Climate Coalition', charge: 'Organized campaign to deceive the public about climate science', outcome: 'Disbanded 2002 after members began defecting; legacy of disinformation persists' },
 { defendant: 'ExxonMobil (v. activist investors)', charge: 'Exxon suing Arjuna Capital and Follow This to block climate shareholder proposals', outcome: 'Case filed 2024; widely criticized as retaliation' },
 ],
 charges: [
 { statute: 'State Consumer Protection Acts', description: 'Deceptive business practices, publicly denying climate science while internal research confirmed it', count: 'Suits filed in 20+ jurisdictions' },
 { statute: '15 U.S.C. § 78j(b): Securities Fraud', description: 'Misleading investors about financial risks posed by climate change and stranded asset exposure', count: 'NY AG enforcement action + SEC scrutiny' },
 { statute: 'State Public Nuisance Statutes', description: 'Contributing to climate change as a public nuisance while concealing known risks from the public', count: 'Multiple municipal lawsuits filed' },
 { statute: 'State Tort Law, Failure to Warn', description: 'Failure to warn consumers and the public about known dangers of fossil fuel products', count: 'Component of municipal climate lawsuits' },
 { statute: '18 U.S.C. § 1962: RICO (proposed)', description: 'Racketeering through coordinated multi-decade campaign involving front groups to deceive public about climate science', count: 'Proposed by Sen. Whitehouse; not yet charged' },
 { statute: 'Federal False Statements (18 U.S.C. § 1001)', description: 'Potential false statements to Congress and federal agencies regarding climate science knowledge', count: 'Under investigation' },
 { statute: 'Clean Air Act Violations', description: 'Contribution to greenhouse gas emissions while concealing knowledge of their environmental impact', count: 'Basis for Massachusetts v. EPA (2007)' },
 { statute: 'State Fraud Statutes', description: 'Common law fraud, knowingly making false representations about climate science to protect business interests', count: 'Component of multiple AG investigations' },
 ],
 coverup: [
 'Exxon\'s own scientists accurately predicted global warming in 1982 (projecting 0.3°C per decade warming that proved 99% accurate) then the company spent decades publicly denying climate change',
 'Between 1998 and 2005, ExxonMobil spent at least $16 million funding 43 organizations to manufacture doubt about climate science, according to the Union of Concerned Scientists',
 'The Global Climate Coalition, co-founded by Exxon, had its own internal scientists confirm climate change was real while the organization publicly argued the science was"too uncertain"',
 'CEO Lee Raymond declared at the 1997 World Petroleum Congress that global warming claims were"not airtight"- while possessing two decades of internal research confirming the opposite',
 'After cutting its climate research program in the 1980s, Exxon quietly reinforced its Arctic infrastructure and adjusted its drilling operations to account for the very warming it publicly denied',
 'An internal 1998 American Petroleum Institute memo revealed the industry\'s explicit strategy:"Victory will be achieved when average citizens \'understand\' uncertainties in climate science"',
 'Exxon used the same public relations firms and strategies as the tobacco industry, manufacturing scientific uncertainty to delay regulation while internally acknowledging the science',
 'When journalists and researchers began exposing Exxon\'s internal climate knowledge, the company responded by suing activist shareholders rather than addressing the deception',
 'Exxon\'s advertorials in the New York Times between 1972 and 2001 systematically emphasized scientific uncertainty, directly contradicting the conclusions of the company\'s own researchers',
 ],
 sources: [
 { title: 'InsideClimate News:"Exxon: The Road Not Taken"', url: 'https://insideclimatenews.org/project/exxon-the-road-not-taken/', date: '2015-09-16' },
 { title: 'Supran et al.:"Assessing ExxonMobil\'s Global Warming Projections"(Science)', url: 'https://www.science.org/doi/10.1126/science.abk0063', date: '2023-01-12' },
 { title: 'LA Times:"How Exxon Went From Leader to Skeptic on Climate Change"', url: 'https://graphics.latimes.com/exxon-research/', date: '2015-10-09' },
 { title: 'Union of Concerned Scientists:"Smoke, Mirrors & Hot Air"', url: 'https://www.ucsusa.org/resources/smoke-mirrors-hot-air', date: '2007-01-16' },
 { title: 'Massachusetts v. EPA, 549 U.S. 497 (2007)', url: 'https://supreme.justia.com/cases/federal/us/549/497/', date: '2007-04-02' },
 { title: 'Congressional Investigation: Fossil Fuel Industry Disinformation', url: 'https://oversightdemocrats.house.gov/climate-crisis', date: '2022-09-14' },
 { title: 'New York Times:"Exxon Mobil Accused of Misleading Public on Climate Change Risks"', url: 'https://www.nytimes.com/2015/11/06/science/exxon-mobil-under-investigation-in-new-york-over-climate-statements.html', date: '2015-11-05' },
 { title: 'Engine No. 1 Wins ExxonMobil Board Seats', url: 'https://www.nytimes.com/2021/06/09/business/exxon-mobil-engine-no1-board.html', date: '2021-06-09' },
 ],
};

export default function ExxonCoverUpPage() {
 return (
 <div className="min-h-screen pt-20 lg:pt-24 pb-16">
 <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
 <Link href="/investigations"className="inline-flex items-center gap-2 text-zinc-400 hover:text-blood-500 transition-colors mb-6 pt-4"><ArrowLeft className="w-4 h-4"/>Back to Investigations</Link>
 <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="border-2 border-blood-800/60 bg-black/80 p-6 lg:p-8 mb-8">
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
 <div className="space-y-3">{investigation.keyFigures.map((figure, idx) => (<div key={idx} className="flex items-start justify-between p-3 bg-zinc-900/50 border border-zinc-800"><div className="flex-1">{figure.href ? (<Link href={figure.href} className="font-bold text-blood-400 hover:text-blood-300 transition-colors">{figure.name}</Link>) : (<span className="font-bold glass-text">{figure.name}</span>)}<p className="text-sm text-zinc-400 mt-1">{figure.role}</p></div><span className="text-xs px-2 py-1 bg-zinc-800 text-zinc-400 border border-zinc-700 whitespace-nowrap ml-2">{figure.status}</span></div>))}</div>
 </motion.div>
 <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }} className="glass-card p-6">
 <h2 className="text-xl font-bold glass-text uppercase tracking-wider mb-4 flex items-center gap-2"><Scale className="w-5 h-5 text-blood-500"/>Applicable Charges &amp; Statutes</h2>
 <div className="space-y-3">{investigation.charges.map((charge, idx) => (<div key={idx} className="p-4 bg-zinc-900/50 border border-zinc-800"><p className="font-bold text-blood-400 text-sm font-mono">{charge.statute}</p><p className="text-sm text-zinc-300 mt-1">{charge.description}</p><p className="text-xs text-blood-400 mt-1">{charge.count}</p></div>))}</div>
 </motion.div>
 </div>
 <div className="space-y-6">
 <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} className="glass-card p-6">
 <h3 className="text-lg font-bold glass-text uppercase tracking-wider mb-4 flex items-center gap-2"><Calendar className="w-4 h-4 text-blood-500"/>Timeline</h3>
 <div className="space-y-4">{investigation.timeline.map((item, idx) => (<div key={idx} className="relative pl-4 border-l-2 border-zinc-800"><div className="absolute -left-[5px] top-0 w-2 h-2 bg-blood-500"/><p className="text-xs text-blood-500 font-mono">{item.date}</p><p className="text-sm text-zinc-300">{item.event}</p></div>))}</div>
 </motion.div>
 <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.1 }} className="glass-card p-6">
 <h3 className="text-lg font-bold glass-text uppercase tracking-wider mb-4 flex items-center gap-2"><Scale className="w-5 h-5 text-blood-500"/>Legal Outcomes</h3>
 <div className="space-y-3">{investigation.legalOutcomes.map((item, idx) => (<div key={idx} className="p-3 bg-zinc-900/50 border border-zinc-800"><p className="font-bold glass-text text-sm">{item.defendant}</p><p className="text-xs text-zinc-400 mt-1">{item.charge}</p><p className="text-xs text-blood-400 mt-1">{item.outcome}</p></div>))}</div>
 </motion.div>
 <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.2 }} className="glass-card p-6">
 <h3 className="text-lg font-bold glass-text uppercase tracking-wider mb-4">Sources</h3>
 <div className="space-y-2">{investigation.sources.map((source, idx) => (<a key={idx} href={source.url} target="_blank"rel="noopener noreferrer"className="flex items-start gap-2 p-2 text-sm text-zinc-400 hover:text-blood-400 hover:bg-zinc-900/50 transition-colors"><ExternalLink className="w-4 h-4 mt-0.5 flex-shrink-0"/><div><span>{source.title}</span><span className="text-zinc-600 ml-2">({source.date})</span></div></a>))}</div>
 </motion.div>
 </div>
 </div>
 </div>
 </div>
 );
}
