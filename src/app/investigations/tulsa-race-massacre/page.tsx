'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowLeft, AlertTriangle, Users, Calendar, FileText, ExternalLink, Scale, ShieldAlert, Skull } from 'lucide-react';
import GlitchText from '@/components/effects/GlitchText';

const investigation = {
 title: 'Tulsa Race Massacre',
 subtitle: '300+ Killed, Black Wall Street Destroyed, Covered Up for Decades by Government and Media',
 severity: 'critical',
 status: 'CONFIRMED, COMMISSION FINDINGS',
 summary: 'On May 31 and June 1, 1921, a violent white mob attacked the Greenwood District of Tulsa, Oklahoma, known as "Black Wall Street"- one of the most prosperous Black communities in America. Over 300 Black residents were killed, 800+ were injured, and 35 blocks were burned to the ground. More than 10,000 Black residents were left homeless. White rioters used private airplanes to drop incendiary devices on Greenwood, making it the first aerial bombing of American citizens on US soil. The Oklahoma National Guard participated in the destruction rather than protecting residents. For decades, the massacre was omitted from history textbooks, official records were destroyed or hidden, and survivors were threatened into silence. Mass graves believed to contain victims were identified but remain largely unexcavated. No perpetrator was ever charged. The last known survivors died without receiving compensation.',
 keyFigures: [
 { name: 'Dick Rowland', role: '19-year-old Black shoe shiner whose arrest on false assault charges sparked the mob', href: '/entities/individuals/dick-rowland', status: 'Deceased' },
 { name: 'Sarah Page', role: 'White elevator operator, charges against Rowland were dropped, likely a trip/stumble', href: '/entities/individuals/sarah-page', status: 'Unknown' },
 { name: 'Chief John Gustafson', role: 'Tulsa Police Chief who failed to protect Greenwood residents', href: '/entities/individuals/john-gustafson', status: 'Deceased' },
 { name: 'J.B.A. Robertson', role: 'Oklahoma Governor who declared martial law but did not protect Black community', href: '/entities/individuals/jba-robertson', status: 'Deceased (1938)' },
 { name: 'A.J. Smitherman', role: 'Editor of Tulsa Star (Black newspaper), documented the massacre, was indicted for inciting riot', href: '/entities/individuals/aj-smitherman', status: 'Deceased (1961)' },
 { name: 'B.C. Franklin', role: 'Attorney who fought to prevent seizure of Greenwood land after the massacre', href: '/entities/individuals/bc-franklin', status: 'Deceased (1960)' },
 { name: 'Walter White', role: 'NAACP investigator who documented the massacre undercover in Tulsa', href: '/entities/individuals/walter-white-naacp', status: 'Deceased (1955)' },
 { name: 'Viola Fletcher', role: 'Last known survivor of the Tulsa Race Massacre, testified before Congress at age 107', href: '/entities/individuals/viola-fletcher', status: 'Deceased (2024)' },
 { name: 'Lessie Benningfield Randle', role: 'Survivor who sought reparations, died at 109 without receiving compensation', href: '/entities/individuals/lessie-randle', status: 'Deceased (2023)' },
 { name: 'Hughes Van Ellis', role: 'Survivor and WWII veteran who testified for reparations', href: '/entities/individuals/hughes-van-ellis', status: 'Deceased (2023)' },
 { name: 'Scott Ellsworth', role: 'Historian who rediscovered the massacre and led the Oklahoma Commission investigation', href: '/entities/individuals/scott-ellsworth', status: 'Active' },
 ],
 timeline: [
 { date: '1905-1921', event: 'Greenwood District thrives as "Black Wall Street"- hundreds of Black-owned businesses, hospitals, schools' },
 { date: 'May 30, 1921', event: 'Dick Rowland, a Black shoe shiner, accused of assaulting Sarah Page in an elevator, likely a stumble' },
 { date: 'May 31, 1921 (afternoon)', event: 'Tulsa Tribune publishes inflammatory story, white mob gathers at courthouse demanding lynching' },
 { date: 'May 31, 1921 (evening)', event: 'Armed Black men arrive at courthouse to protect Rowland, confrontation with white mob begins' },
 { date: 'May 31, 1921 (10PM)', event: 'White mob begins attacking Greenwood District, looting, arson, and murder' },
 { date: 'June 1, 1921 (5AM)', event: 'Organized assault on Greenwood begins at dawn, mobs attack from multiple directions' },
 { date: 'June 1, 1921 (morning)', event: 'Private airplanes drop incendiary devices on Greenwood, first aerial bombing of US citizens' },
 { date: 'June 1, 1921 (noon)', event: 'Oklahoma National Guard arrives, disarms and detains Black residents instead of white attackers' },
 { date: 'June 1, 1921 (evening)', event: '35 blocks of Greenwood destroyed - 1,256 homes burned, 191 businesses destroyed' },
 { date: 'June 2, 1921', event: 'Governor Robertson declares martial law, over 6,000 Black residents imprisoned at Convention Hall' },
 { date: 'June 1921', event: 'Grand jury blames Black residents for the massacre, no white perpetrators charged' },
 { date: '1921-1996', event: 'Massacre systematically omitted from Oklahoma history textbooks and public records' },
 { date: '1997', event: 'Oklahoma Legislature creates Tulsa Race Riot Commission to investigate the massacre' },
 { date: '2001', event: 'Commission report confirms 300+ killed, recommends reparations, legislature refuses' },
 { date: '2020', event: 'Mass grave search begins, ground-penetrating radar identifies potential burial sites' },
 { date: '2021', event: 'Centennial commemoration, survivors Viola Fletcher, Lessie Randle, and Hughes Van Ellis testify before Congress' },
 { date: '2023', event: 'Oklahoma Supreme Court dismisses survivors\' reparations lawsuit' },
 ],
 legalOutcomes: [
 { defendant: 'White Mob Participants', charge: 'Murder, arson, robbery of 300+ Black residents', outcome: 'No charges ever filed against any white perpetrator' },
 { defendant: 'Grand Jury (1921)', charge: 'Investigation into massacre', outcome: 'Blamed Black residents for the violence, indicted Black survivors' },
 { defendant: 'A.J. Smitherman et al.', charge: 'Black residents indicted for"inciting a riot"', outcome: 'Charges eventually dropped, but survivors were criminalized while attackers were not' },
 { defendant: 'City of Tulsa', charge: 'Failure to protect Greenwood residents, complicity in destruction', outcome: 'Never held liable, city profited from seized Greenwood land' },
 { defendant: 'Oklahoma National Guard', charge: 'Disarming and detaining victims while allowing mob to attack', outcome: 'No accountability, acting under governor\'s orders' },
 { defendant: 'State of Oklahoma', charge: 'Systematic cover-up and failure to provide reparations', outcome: 'Legislature rejected commission reparations recommendation' },
 { defendant: 'Insurance Companies', charge: 'Denial of claims from Greenwood property owners', outcome: 'All claims denied, no payouts made to any Black property owner' },
 { defendant: 'City of Tulsa (2020 Lawsuit)', charge: 'Public nuisance, ongoing harm from massacre', outcome: 'Dismissed by Oklahoma Supreme Court in 2023' },
 ],
 charges: [
 { statute: '18 U.S.C. § 1111 - Murder', description: 'Organized mob murder of 300+ Black residents of Greenwood District', count: '300+ killed, 800+ injured' },
 { statute: '18 U.S.C. § 844 - Arson', description: 'Deliberate burning of 35 blocks including homes, businesses, churches, schools, and a hospital', count: '1,256 homes, 191 businesses destroyed' },
 { statute: '42 U.S.C. § 1983 - Civil Rights', description: 'State and local officials participated in and facilitated racial violence', count: 'Systematic deprivation of rights for 10,000+ residents' },
 { statute: '18 U.S.C. § 241 - Conspiracy Against Rights', description: 'Organized conspiracy to destroy Black community and seize property', count: '35 blocks of property seized/destroyed' },
 { statute: '49 U.S.C. § 46505 - Aircraft Used as Weapon', description: 'Private aircraft used to drop incendiary devices on civilian neighborhood', count: 'Multiple aircraft deployed in aerial bombardment' },
 { statute: '18 U.S.C. § 2111 - Robbery', description: 'Systematic looting of Black homes and businesses before arson', count: 'Entire Greenwood district looted' },
 { statute: '18 U.S.C. § 1951 - Extortion/Hobbs Act', description: 'Insurance companies refused all claims from Black property owners under threat', count: 'Every insurance claim from Greenwood denied' },
 { statute: '14th Amendment, Equal Protection', description: 'Government at every level failed to protect Black citizens while aiding white attackers', count: 'Systematic governmental failure' },
 ],
 coverup: [
 'The Tulsa Tribune\'s inflammatory article that helped spark the massacre was physically removed from archived copies, the page was literally cut out of bound volumes',
 'Oklahoma history textbooks omitted the massacre for over 75 years, an entire generation grew up in Tulsa without learning it happened',
 'The 1921 grand jury blamed Black residents for the massacre and indicted Black survivors, while filing zero charges against any white attacker',
 'Police and city records related to the massacre were destroyed or hidden, making it impossible to compile accurate casualty counts',
 'Insurance companies denied every claim filed by Greenwood property owners, ensuring the community could not rebuild with insurance proceeds',
 'The city of Tulsa attempted to rezone Greenwood to prevent Black residents from rebuilding, blocked only by legal action from attorney B.C. Franklin',
 'Mass graves believed to contain massacre victims were covered over with construction, remains undisturbed for a century',
 'National Guard records from the event were sealed and later"lost,"preventing documentation of military complicity',
 'When the Oklahoma Commission finally confirmed the massacre in 2001 and recommended reparations, the state legislature rejected the recommendation',
 'The last known survivors all died without receiving any form of compensation, the Oklahoma Supreme Court dismissed their lawsuit in 2023',
 ],
 sources: [
 { title: 'Oklahoma Commission to Study the Tulsa Race Riot of 1921 - Final Report', url: 'https://www.okhistory.org/research/forms/freport.pdf', date: '2001' },
 { title: 'Scott Ellsworth, The Ground Breaking: An American City and Its Search for Justice', url: 'https://www.penguinrandomhouse.com/books/623918/the-ground-breaking-by-scott-ellsworth/', date: '2021' },
 { title: 'Hannibal B. Johnson, Black Wall Street: From Riot to Renaissance in Tulsa\'s Historic Greenwood District', url: 'https://www.amazon.com/Black-Wall-Street-Renaissance-Greenwood/dp/1934645338', date: '2007' },
 { title: 'Tulsa Historical Society - 1921 Tulsa Race Massacre Collection', url: 'https://www.tulsahistory.org/exhibit/1921-tulsa-race-massacre/', date: 'Ongoing' },
 { title: 'New York Times, What the Tulsa Race Massacre Destroyed', url: 'https://www.nytimes.com/interactive/2021/05/24/us/tulsa-race-massacre.html', date: 'May 24, 2021' },
 { title: 'Smithsonian National Museum of African American History, Tulsa Race Massacre', url: 'https://nmaahc.si.edu/explore/stories/tulsa-race-massacre', date: 'Ongoing' },
 { title: 'Congressional Testimony of Viola Fletcher, Lessie Randle, and Hughes Van Ellis', url: 'https://www.congress.gov/event/117th-congress/house-event/112680', date: 'May 19, 2021' },
 { title: 'Washington Post, Last Survivors of Tulsa Massacre Die Without Justice', url: 'https://www.washingtonpost.com/history/2023/10/08/tulsa-race-massacre-survivors/', date: '2023' },
 ],
};

export default function TulsaMassacrePage() {
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
