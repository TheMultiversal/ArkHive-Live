'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowLeft, AlertTriangle, Users, Calendar, FileText, ExternalLink, Scale, ShieldAlert, Skull } from 'lucide-react';
import GlitchText from '@/components/effects/GlitchText';

const investigation = {
 title: 'Gun Violence Legislative Inaction',
 subtitle: '45,000+ Americans Die From Guns Every Year While Congress Takes NRA Money and Does Nothing',
 severity: 'critical',
 status: 'ONGOING, ACTIVELY SUPPRESSED',
 summary: 'The United States experiences gun violence at a rate unmatched by any other wealthy nation, over 45,000 gun deaths annually, including over 600 mass shootings per year. Despite overwhelming public support for measures like universal background checks (90%+), Congress has been paralyzed by NRA lobbying, which has funneled over $170 million to politicians since 1998. The gun lobby successfully blocked CDC research on gun violence for over two decades through the Dickey Amendment. Twenty first-graders were murdered at Sandy Hook Elementary in 2012 and Congress did nothing. Children were slaughtered at Marjory Stoneman Douglas and Robb Elementary while police waited outside. The Second Amendment has been radically reinterpreted from a militia-based right to an individual right by a Supreme Court under corporate and ideological influence. The result is a uniquely American crisis: children now die more from guns than any other cause.',
 keyFigures: [
 { name: 'Wayne LaPierre', role: 'NRA CEO (1991-2024) who oversaw lobbying machine spending $170M+ on political contributions; convicted of corruption', href: '/entities/individuals/wayne-lapierre', status: 'Resigned January 2024; found liable for financial misconduct' },
 { name: 'Jay Dickey', role: 'Republican congressman who authored 1996 Dickey Amendment banning CDC gun violence research; later expressed regret', href: '/entities/individuals/jay-dickey', status: 'Deceased (2017); publicly regretted amendment' },
 { name: 'Mitch McConnell', role: 'Senate Majority Leader who blocked gun legislation after every mass shooting; received $1.3M from NRA', href: '/entities/individuals/mitch-mcconnell', status: 'Active' },
 { name: 'Chris Murphy', role: 'Connecticut Senator who led 15-hour filibuster for gun reform after Pulse nightclub shooting', href: '/entities/individuals/chris-murphy', status: 'Active' },
 { name: 'Antonin Scalia', role: 'Supreme Court Justice who authored DC v. Heller (2008) establishing individual right to bear arms', href: '/entities/individuals/antonin-scalia', status: 'Deceased (2016)' },
 { name: 'Clarence Thomas', role: 'Supreme Court Justice who authored Bruen (2022) striking down concealed carry restrictions', href: '/entities/individuals/clarence-thomas', status: 'Active' },
 { name: 'David Keene', role: 'NRA President who was secretly recorded endorsing gun reform in undercover sting from foreign actor', href: '/entities/individuals/david-keene', status: 'Active' },
 { name: 'Adam Lanza', role: 'Sandy Hook shooter who murdered 20 first-graders and 6 educators with legally purchased AR-15', href: '/entities/individuals/adam-lanza', status: 'Deceased (2012)' },
 { name: 'Alex Jones', role: 'Conspiracy theorist who defamed Sandy Hook families by calling massacre a hoax; ordered to pay $1.5B', href: '/entities/individuals/alex-jones', status: 'Found liable; $1.5B judgment' },
 { name: 'Fred Guttenberg', role: 'Father of Jaime Guttenberg, killed at Parkland; gun reform advocate', href: '/entities/individuals/fred-guttenberg', status: 'Active advocate' },
 { name: 'David Hogg', role: 'Parkland survivor who co-founded March for Our Lives movement', href: '/entities/individuals/david-hogg', status: 'Active' },
 { name: 'Pete Arredondo', role: 'Uvalde school police chief who waited 77 minutes while children bled to death; fired and indicted', href: '/entities/individuals/pete-arredondo', status: 'Indicted for child endangerment' },
 ],
 timeline: [
 { date: 'April 1999', event: 'Columbine High School massacre: 13 killed; Congress holds hearings but passes no legislation' },
 { date: '2004', event: 'Federal Assault Weapons Ban expires; Congress allows it to lapse under NRA pressure; mass shootings increase' },
 { date: 'April 2007', event: 'Virginia Tech shooting: 32 killed, deadliest school shooting in US history at the time; minimal legislative response' },
 { date: 'January 2011', event: 'Gabby Giffords shot at constituency event in Tucson; 6 killed, 13 wounded; Congress takes no action' },
 { date: 'December 2012', event: 'Sandy Hook Elementary: Adam Lanza murders 20 first-graders and 6 educators; America is horrified but Congress blocks reform' },
 { date: 'April 2013', event: 'Manchin-Toomey background check amendment fails in Senate despite 90%+ public support; 46 senators block it' },
 { date: 'June 2016', event: 'Pulse nightclub shooting: 49 killed; Senator Chris Murphy filibusters for 15 hours demanding vote; nothing passes' },
 { date: 'October 2017', event: 'Las Vegas Route 91 shooting: 60 killed, 400+ wounded from hotel window, deadliest mass shooting in US history' },
 { date: '2017', event: 'Bump stock ban proposed after Vegas; takes Trump administration over a year to implement via regulation instead of legislation' },
 { date: 'February 2018', event: 'Marjory Stoneman Douglas shooting: 17 killed in Parkland, FL; survivors start March for Our Lives movement' },
 { date: 'March 2018', event: 'March for Our Lives rally draws 800,000 to DC; youth-led gun reform movement sweeps nation' },
 { date: 'May 2022', event: 'Robb Elementary massacre in Uvalde, TX: 19 children and 2 teachers murdered; police waited 77 minutes to intervene' },
 { date: 'June 2022', event: 'Bipartisan Safer Communities Act signed, first federal gun legislation in 30 years; described as modest and insufficient' },
 { date: 'June 2022', event: 'Supreme Court strikes down New York concealed carry law in NYSRPA v. Bruen, expanding gun rights further' },
 { date: 'January 2024', event: 'Wayne LaPierre resigns from NRA amid corruption trial; found liable for financial misconduct' },
 { date: '2024', event: 'Gun deaths continue to exceed 45,000 annually; firearms remain leading cause of death for children and teens in America' },
 ],
 legalOutcomes: [
 { defendant: 'Wayne LaPierre / NRA', charge: 'Financial fraud, misuse of charitable funds for personal luxury spending', outcome: 'Found liable for financial misconduct in New York civil trial January 2024; resigned as CEO' },
 { defendant: 'Alex Jones', charge: 'Defamation of Sandy Hook families by claiming massacre was a hoax', outcome: 'Found liable; ordered to pay $1.5 billion in damages to families; filed bankruptcy' },
 { defendant: 'Remington Arms', charge: 'Marketing AR-15 to civilians in ways that encouraged military-style violence', outcome: '$73 million settlement with Sandy Hook families in 2022; first gun manufacturer held accountable' },
 { defendant: 'Pete Arredondo', charge: 'Child endangerment for 77-minute delay in responding to Uvalde shooter', outcome: 'Fired as school police chief; indicted on 10 counts of child endangerment and 19 counts of abandoning/endangering a child' },
 { defendant: 'Congress (Dickey Amendment)', charge: 'Blocking CDC research on gun violence as a public health crisis for 20+ years', outcome: 'Partially repealed in 2018 omnibus bill; CDC allocated $25M for gun violence research in 2020; first time in decades' },
 { defendant: 'US Congress', charge: 'Failure to act despite 90%+ public support for background checks', outcome: 'Bipartisan Safer Communities Act (2022); first federal gun law in 30 years; widely considered inadequate' },
 { defendant: 'NYSRPA v. Bruen', charge: 'Challenge to New York\'s concealed carry permit requirement', outcome: 'Supreme Court 6-3 struck down law in 2022; expanded individual right to carry firearms outside the home' },
 { defendant: 'Gun Manufacturers (PLCAA Protection)', charge: 'Shielded from most lawsuits by Protection of Lawful Commerce in Arms Act (2005)', outcome: 'PLCAA grants gun industry near-total immunity from liability, unique protection not given to any other consumer product' },
 ],
 charges: [
 { statute: 'Dereliction of Legislative Duty, Public Trust Violation', description: 'Members of Congress who accepted NRA contributions and blocked popular gun reform legislation despite constituent deaths', count: 'NRA spent $170M+ on political contributions since 1998; gun reform blocked after every mass shooting' },
 { statute: '18 U.S.C. § 201: Bribery of Public Officials (analogous)', description: 'NRA contributions to members of Congress in exchange for blocking gun legislation represent a form of legalized corruption', count: '$30M+ spent in 2016 election alone; $1.3M to Mitch McConnell over career' },
 { statute: 'Obstruction of Public Health Research, Dickey Amendment', description: 'Congress prohibited the CDC from researching gun violence as a public health crisis for over two decades', count: '20+ years of suppressed research; estimated thousands of deaths that research could have prevented' },
 { statute: 'PLCAA, Protection of Lawful Commerce in Arms Act (2005)', description: 'Federal law granting gun manufacturers unique immunity from civil liability, no other consumer product has equivalent protection', count: 'Blocks lawsuits for tens of thousands of deaths annually; Remington settlement was rare exception' },
 { statute: 'Child Endangerment, State Criminal Statutes', description: 'Law enforcement failure to intervene at Uvalde for 77 minutes while children were being murdered', count: '19 children and 2 teachers killed; some bled to death during police delay' },
 { statute: 'Conspiracy to Defraud, NRA Financial Misconduct', description: 'NRA leadership diverted charitable funds for personal luxury including private jets, yacht trips, and safari vacations', count: 'Tens of millions in misspent funds; Wayne LaPierre found liable for $5.4M in restitution' },
 { statute: 'Federal Election Campaign Act Violations', description: 'NRA acted as conduit for foreign money (Russian national Maria Butina) funneled into US elections', count: 'Maria Butina convicted of conspiracy; NRA under investigation for foreign funding' },
 { statute: 'Negligent Homicide, Systemic Failure', description: 'Every public official who had power to act and chose not to shares moral responsibility for preventable gun deaths', count: '45,000+ gun deaths annually; firearms are now leading cause of death for American children' },
 ],
 coverup: [
 'The NRA successfully blocked CDC research on gun violence for over 20 years through the Dickey Amendment, ensuring that policymakers lacked the data to make evidence-based legislation.',
 'After Sandy Hook, the gun lobby framed 20 murdered first-graders as the price of freedom, and conspiracy theorists like Alex Jones called it a"false flag"- terrorizing grieving parents for a decade.',
 'The NRA spent $170 million on political contributions to create a Congress incapable of passing gun reform, then blamed"mental health "and" video games"to deflect from firearms access.',
 'The Supreme Court\'s DC v. Heller (2008) radically reinterpreted the Second Amendment, ignoring the"well regulated Militia"clause that had defined gun law for over 200 years.',
 'The Protection of Lawful Commerce in Arms Act (2005) gave gun manufacturers immunity from lawsuits, a protection given to no other consumer product industry in America.',
 'In Uvalde, 376 law enforcement officers waited 77 minutes while children bled to death, then Texas DPS initially lied about the timeline and police response.',
 'NRA leadership, particularly Wayne LaPierre, diverted tens of millions in charitable funds for personal luxuries while claiming the organization was defending constitutional rights.',
 'The NRA served as a conduit for Russian intelligence operative Maria Butina to infiltrate American conservative politics, but the full extent of foreign influence was never fully investigated.',
 ],
 sources: [
 { title: 'Gun Violence Archive, Comprehensive US Gun Violence Data', url: 'https://www.gunviolencearchive.org/', date: 'Ongoing' },
 { title: 'Sandy Hook Final Report, Connecticut State\'s Attorney', url: 'https://portal.ct.gov/DCJ/Sandy-Hook-Final-Report', date: 'November 2013' },
 { title: 'NRA Political Spending, OpenSecrets', url: 'https://www.opensecrets.org/orgs/national-rifle-assn/summary?id=d000000082', date: 'Ongoing' },
 { title: 'Uvalde Investigation, Texas House Committee Report', url: 'https://house.texas.gov/committees/reports/interim-reports/', date: 'July 2022' },
 { title: 'DC v. Heller, Supreme Court Opinion', url: 'https://www.supremecourt.gov/opinions/07pdf/07-290.pdf', date: 'June 2008' },
 { title: 'NYSRPA v. Bruen, Supreme Court Opinion', url: 'https://www.supremecourt.gov/opinions/21pdf/20-843_7j80.pdf', date: 'June 2022' },
 { title: 'The Dickey Amendment and Federal Funding for Gun Violence Research, RAND', url: 'https://www.rand.org/research/gun-policy/analysis/essays/federal-funding-for-gun-violence-research.html', date: '2020' },
 { title: 'NRA Corruption Trial, New York Attorney General', url: 'https://ag.ny.gov/press-release/2024/attorney-general-james-wins-case-against-nra-and-wayne-lapierre', date: 'February 2024' },
 { title: 'Firearms: Leading Cause of Death for Children, New England Journal of Medicine', url: 'https://www.nejm.org/doi/full/10.1056/NEJMc2201761', date: 'April 2022' },
 ],
};

export default function GunViolenceInactionPage() {
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
