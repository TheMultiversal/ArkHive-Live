'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowLeft, AlertTriangle, Users, Calendar, FileText, ExternalLink, Scale, ShieldAlert, Skull } from 'lucide-react';
import GlitchText from '@/components/effects/GlitchText';

const investigation = {
 title: 'Yemen War: America\'s Hidden Genocide',
 subtitle: 'U.S.-backed Saudi coalition killed 377,000+ people, created the world\'s worst humanitarian crisis',
 severity: 'critical',
 status: 'ONGOING',
 summary: 'Since 2015, the United States has provided extensive military support to a Saudi-led coalition waging war in Yemen, including weapons sales exceeding $100 billion, aerial refueling, intelligence sharing, and maintenance of warplanes. The coalition has systematically bombed hospitals, schools, weddings, funerals, school buses, and water treatment facilities. Over 377,000 people have died, including an estimated 150,000 children under five from starvation and preventable disease caused by the coalition\'s naval blockade. Yemen has been called the world\'s worst humanitarian crisis, with 80% of the population (24 million people) requiring aid. Despite clear evidence of war crimes, U.S. arms sales to Saudi Arabia continued under multiple administrations.',
 keyFigures: [
 { name: 'Barack Obama', role: 'President who authorized U.S. support for the Saudi-led coalition from 2015', href: '/entities/individuals/barack-obama', status: 'Living' },
 { name: 'Donald Trump', role: 'President who vetoed Congressional resolution to end U.S. involvement and expanded arms sales', href: '/entities/individuals/donald-trump', status: 'Living' },
 { name: 'Joe Biden', role: 'Initially paused arms sales but resumed them; approved $650M weapons deal in 2021', href: '/entities/individuals/joe-biden', status: 'Living' },
 { name: 'Mohammed bin Salman', role: 'Saudi Crown Prince and architect of the Yemen war', href: '/entities/individuals/mohammed-bin-salman', status: 'Active' },
 { name: 'Mohammed bin Zayed', role: 'UAE Crown Prince who co-led coalition and backed separatist militias', href: '/entities/individuals/mohammed-bin-zayed', status: 'Active' },
 { name: 'James Mattis', role: 'Secretary of Defense who advocated continued support for Saudi coalition', href: '/entities/individuals/james-mattis', status: 'Living' },
 { name: 'Mike Pompeo', role: 'Secretary of State who certified Saudi efforts to minimize civilian casualties despite evidence', href: '/entities/individuals/mike-pompeo', status: 'Living' },
 { name: 'Raytheon / RTX', role: 'Manufacturer of precision-guided munitions used in strikes on civilians', href: '/entities/corporations/raytheon', status: 'Active, Profiting' },
 { name: 'Lockheed Martin', role: 'Manufacturer of F-15 jets and bombs used by Saudi coalition', href: '/entities/corporations/lockheed-martin', status: 'Active, Profiting' },
 { name: 'Bernie Sanders', role: 'Senator who led effort to invoke War Powers Resolution to end U.S. involvement', href: '/entities/individuals/bernie-sanders', status: 'Active' },
 { name: 'Chris Murphy', role: 'Senator who co-led bipartisan effort to halt arms sales to Saudi Arabia', href: '/entities/individuals/chris-murphy', status: 'Active' },
 ],
 timeline: [
 { date: 'September 2014', event: 'Houthi forces capture Sana\'a, Yemen\'s capital' },
 { date: 'March 26, 2015', event: 'Saudi-led coalition begins bombing Yemen with U.S. logistical and intelligence support' },
 { date: 'April 2015', event: 'Coalition imposes naval and air blockade on Yemen, restricting food, fuel, and medicine' },
 { date: 'October 2015', event: 'MSF hospital in Haydan bombed by coalition; Saudi Arabia claims it was a"military target"' },
 { date: 'March 2016', event: 'Coalition bombs a market in Mastaba, killing 97 civilians including 25 children' },
 { date: 'October 8, 2016', event: 'Coalition bombs funeral in Sana\'a using U.S.-supplied Paveway bombs, killing 140 mourners' },
 { date: 'January 2017', event: 'Yemen declared worst cholera outbreak in history; 1 million+ cases by October' },
 { date: 'August 9, 2018', event: 'Coalition strikes school bus in Dahyan, killing 40 children; bomb identified as Lockheed Martin MK-82' },
 { date: 'October 2018', event: 'Khashoggi murder temporarily halts some arms sales; Congress passes War Powers Resolution' },
 { date: 'April 2019', event: 'Trump vetoes Congressional resolution invoking War Powers Act to end U.S. involvement in Yemen' },
 { date: 'September 2019', event: 'Houthi drone attacks on Saudi Aramco facilities temporarily disrupt global oil supply' },
 { date: 'February 2021', event: 'Biden announces end to "offensive" arms sales but approves $650M defensive weapons package' },
 { date: 'January 2022', event: 'Coalition airstrikes on detention facility in Saada kill at least 80 people' },
 { date: 'April 2022', event: 'UN-brokered truce begins; expired in October 2022' },
 { date: '2023', event: 'UN estimates 377,000+ have died from the conflict and its secondary effects' },
 { date: '2024', event: 'Houthi attacks on Red Sea shipping bring renewed international attention to Yemen conflict' },
 { date: 'Ongoing', event: 'An estimated 21 million Yemenis (70% of population) remain in need of humanitarian assistance' },
 ],
 legalOutcomes: [
 { defendant: 'Saudi-led Coalition', charge: 'Systematic bombing of civilian infrastructure', outcome: 'No accountability; U.S. continues to shield Saudi Arabia from international investigations' },
 { defendant: 'United States', charge: 'Complicity in war crimes through arms sales, refueling, and intelligence sharing', outcome: 'Congress passed War Powers Resolution; Trump vetoed it' },
 { defendant: 'Mike Pompeo', charge: 'False certification to Congress that Saudi Arabia was minimizing civilian casualties', outcome: 'State Department IG investigation was shut down by Pompeo himself' },
 { defendant: 'Raytheon / Lockheed Martin', charge: 'Manufacturing weapons used in attacks on civilians, including children', outcome: 'Companies continued receiving contracts; stock prices rose' },
 { defendant: 'Saudi Arabia', charge: 'Naval blockade causing mass starvation and disease', outcome: 'UN investigations yielded reports but no enforcement mechanism' },
 { defendant: 'UAE', charge: 'Operating secret prisons in Yemen with reported torture', outcome: 'AP investigation exposed prisons; no consequences for UAE' },
 { defendant: 'All Parties', charge: 'Use of child soldiers', outcome: 'Documented by UN but no prosecutions' },
 { defendant: 'U.S. Government', charge: 'Circumventing Congressional arms sale oversight through emergency declarations', outcome: 'Trump declared "emergency" to push $8B arms sales; challenged but not blocked' },
 ],
 charges: [
 { statute: 'Geneva Convention (IV): Art. 3 & 27', description: 'Protection of civilians; prohibition on violence, murder, and cruel treatment', count: '377,000+ deaths including 150,000+ children under five' },
 { statute: 'Rome Statute, Art. 8(2)(b)(ii)', description: 'War crime of intentionally directing attacks against civilian objects (hospitals, schools, markets)', count: '100+ documented strikes on medical facilities; 200+ strikes on schools' },
 { statute: 'Rome Statute, Art. 8(2)(b)(xxv)', description: 'War crime of using starvation of civilians as a method of warfare', count: 'Naval blockade caused near-famine conditions for 24+ million people' },
 { statute: 'War Powers Resolution (50 U.S.C. § 1541)', description: 'U.S. military involvement without Congressional authorization', count: '8+ years of military support including refueling, intelligence, and targeting assistance' },
 { statute: 'Arms Export Control Act (22 U.S.C. § 2778)', description: 'Arms may not be sold when likely to be used in violation of international law', count: '$100+ billion in arms sales to Saudi Arabia despite documented war crimes' },
 { statute: 'Leahy Law (22 U.S.C. § 2378d)', description: 'Prohibition on military assistance to foreign units that commit gross human rights violations', count: 'Continued support despite UN Panel of Experts documenting systematic violations' },
 { statute: 'Convention on the Rights of the Child', description: 'Protection of children in armed conflict', count: '11,000+ children killed or maimed; recruitment of child soldiers by multiple parties' },
 { statute: 'Protocol I, Art. 54: Starvation as Method of Warfare', description: 'Prohibition on attacking objects indispensable to the survival of the civilian population', count: 'Systematic destruction of food production, water treatment, and medical infrastructure' },
 ],
 coverup: [
 'The Obama administration authorized U.S. support for the coalition partly to "placate" Saudi Arabia after the Iran nuclear deal, trading Yemeni lives for diplomatic capital.',
 'Secretary of State Pompeo falsely certified to Congress that Saudi Arabia was taking steps to minimize civilian casualties, directly contradicting evidence from the Pentagon\'s own assessments.',
 'When the State Department Inspector General began investigating the emergency arms sale declaration, Pompeo fired the IG, Steve Linick.',
 'U.S.-manufactured munitions have been found at the sites of attacks on civilian targets, but the Pentagon has consistently claimed it cannot track weapons after sale.',
 'Media coverage of Yemen has been minimal compared to other conflicts, a 2019 study found Yemen received less than 1% of the coverage given to comparable crises.',
 'The coalition has restricted journalist access to Yemen, making independent verification of casualties and conditions extremely difficult.',
 'The Trump administration declared a false "emergency" to bypass Congressional review of $8 billion in arms sales to Saudi Arabia and the UAE.',
 'Saudi Arabia\'s own internal investigation committee, the JIAT, has systematically cleared the coalition of wrongdoing in virtually every incident examined.',
 'The role of U.S. military personnel in selecting targets and providing real-time intelligence for coalition strikes has been systematically downplayed.',
 ],
 sources: [
 { title: 'UNDP, Assessing the Impact of War on Development in Yemen', url: 'https://www.undp.org/yemen/publications/assessing-impact-war-yemen-pathways-recovery', date: '2021' },
 { title: 'Human Rights Watch, Yemen: Coalition Bus Bombing Apparent War Crime', url: 'https://www.hrw.org/news/2018/09/02/yemen-coalition-bus-bombing-apparent-war-crime', date: '2018' },
 { title: 'AP, Inside Yemen\'s Secret Prisons', url: 'https://apnews.com/article/4925f7f0fa654853bd523d1067e1132d', date: '2018' },
 { title: 'CNN, Made in America: Shrapnel in Yemen Points to U.S.-Made Bomb', url: 'https://www.cnn.com/2018/08/17/middleeast/us-saudi-yemen-bus-bomb-intl/index.html', date: '2018' },
 { title: 'UN Panel of Experts on Yemen Reports', url: 'https://www.securitycouncilreport.org/un-documents/yemen/', date: '2023' },
 { title: 'Save the Children, Yemen: 85,000 Children May Have Died from Hunger', url: 'https://www.savethechildren.org/us/about-us/media-and-news/2018-press-releases/yemen-85000-children-may-have-died-from-starvation', date: '2018' },
 { title: 'The Intercept, The Saudi Coalition\'s Attacks on Civilian Infrastructure', url: 'https://theintercept.com/collections/yemen/', date: '2019' },
 { title: 'Mwatana for Human Rights, Day of Judgment Report', url: 'https://mwatana.org/en/day-of-judgment/', date: '2019' },
 ],
};

export default function YemenWarPage() {
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
