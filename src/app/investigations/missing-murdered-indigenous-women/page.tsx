'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowLeft, AlertTriangle, Users, Calendar, FileText, ExternalLink, Scale, ShieldAlert, Skull } from 'lucide-react';
import GlitchText from '@/components/effects/GlitchText';

const investigation = {
 title: 'Missing & Murdered Indigenous Women',
 subtitle: 'The Invisible Epidemic - 5,712 Reported Missing in a Single Year, Most Cases Never Investigated',
 severity: 'critical',
 status: 'ONGOING',
 summary: 'Indigenous women and girls in the United States and Canada face rates of murder and disappearance up to 10 times the national average. In 2016 alone, 5,712 Indigenous women and girls were reported missing in the US, yet only 116 were logged in the Department of Justice\'s federal missing persons database. The crisis is fueled by jurisdictional chaos between tribal, state, and federal authorities (creating vast zones where crimes against Indigenous women are effectively unprosecuted. The arrival of extractive industry"man camps"near reservations has been directly correlated with spikes in violence against Indigenous women. Generations of federal policy) from forced removal to boarding schools to the undermining of tribal sovereignty, created the conditions for this ongoing genocide.',
 keyFigures: [
 { name: 'Deb Haaland', role: 'Secretary of Interior, first Native American cabinet member, championed MMIW awareness', href: '/entities/individuals/deb-haaland', status: 'Active' },
 { name: 'Savanna LaFontaine-Greywind', role: 'Murdered Spirit Lake woman whose case raised national awareness of MMIW crisis', href: '/entities/individuals/savanna-lafontaine-greywind', status: 'Deceased (2017)' },
 { name: 'Mary Kathryn Nagle', role: 'Cherokee attorney and playwright, advocate for tribal jurisdiction over non-Native perpetrators', href: '/entities/individuals/mary-kathryn-nagle', status: 'Active' },
 { name: 'Annita Lucchesi', role: 'Southern Cheyenne researcher who built the most comprehensive MMIW database', href: '/entities/individuals/annita-lucchesi', status: 'Active' },
 { name: 'Lisa Brunner', role: 'White Earth Nation advocate for domestic violence resources in Indian Country', href: '/entities/individuals/lisa-brunner', status: 'Active' },
 { name: 'Abigail Echo-Hawk', role: 'Director of Urban Indian Health Institute, led groundbreaking MMIW data collection', href: '/entities/individuals/abigail-echo-hawk', status: 'Active' },
 { name: 'Chuck Hoskin Jr.', role: 'Cherokee Nation Principal Chief, advocate for tribal jurisdiction expansion', href: '/entities/individuals/chuck-hoskin-jr', status: 'Active' },
 { name: 'Juana Majel-Dixon', role: 'National Congress of American Indians Co-chair of MMIW Task Force', href: '/entities/individuals/juana-majel-dixon', status: 'Active' },
 { name: 'Pamela Foster', role: 'Yakama Nation Council member, fought for MMIW protections in Washington state', href: '/entities/individuals/pamela-foster', status: 'Active' },
 { name: 'Timothy Purdon', role: 'Former US Attorney for North Dakota, raised alarm about missing Indigenous women cases', href: '/entities/individuals/timothy-purdon', status: 'Active' },
 ],
 timeline: [
 { date: '1885', event: 'Major Crimes Act gives federal government jurisdiction over serious crimes in Indian Country, but chronic underfunding means most cases go uninvestigated' },
 { date: '1953', event: 'Public Law 280 transfers criminal jurisdiction to states in some areas, creating a patchwork that leaves many crimes in limbo' },
 { date: '1978', event: 'Oliphant v. Suquamish: Supreme Court strips tribal courts of jurisdiction over non-Native offenders, devastating for violence against Indigenous women' },
 { date: '2003', event: 'Amnesty International reports that 1 in 3 Indigenous women will be raped in their lifetime, with 86% of perpetrators being non-Native' },
 { date: '2004', event: 'Study reveals murder rate for Indigenous women on some reservations is 10 times the national average' },
 { date: '2010', event: 'Tribal Law and Order Act passes, modestly expanding tribal sentencing authority but failing to address jurisdictional gaps' },
 { date: '2013', event: 'VAWA reauthorization partially restores tribal jurisdiction over non-Native domestic violence offenders, a partial reversal of Oliphant' },
 { date: '2016', event: 'National Crime Information Center reports 5,712 Indigenous women and girls missing; DOJ database contains only 116' },
 { date: '2017', event: 'Savanna LaFontaine-Greywind murdered in Fargo, ND; her case galvanizes national attention to the crisis' },
 { date: '2018', event: 'Urban Indian Health Institute identifies 506 cases of MMIW across 71 US cities, most never covered by media' },
 { date: '2019', event: 'Operation Lady Justice created by executive order to address MMIW; critics note insufficient resources' },
 { date: '2019', event: 'Savanna\'s Act signed into law, improving data collection and coordination for MMIW cases' },
 { date: '2020', event: 'Not Invisible Act creates commission to address violent crime against Indigenous peoples' },
 { date: '2021', event: 'Secretary Haaland creates Missing & Murdered Unit within the Bureau of Indian Affairs' },
 { date: '2022', event: 'Executive order directs federal agencies to address MMIW crisis; tribal leaders call it overdue and insufficient' },
 { date: '2023', event: 'GAO report finds DOJ has limited data on MMIW cases and no system to track declined prosecutions' },
 { date: '2024', event: 'Extractive industry expansion continues near reservations; correlation with MMIW violence persists' },
 ],
 legalOutcomes: [
 { defendant: 'Oliphant v. Suquamish (1978)', charge: 'Tribal jurisdiction over non-Native offenders', outcome: 'Supreme Court stripped tribal courts of authority, the root cause of jurisdictional gaps enabling violence' },
 { defendant: 'Federal Government', charge: 'Failure to investigate and prosecute crimes against Indigenous women', outcome: 'US Attorneys decline to prosecute 52% of violent crimes in Indian Country' },
 { defendant: 'Extractive industry companies', charge: 'Negligence in failing to address violence associated with man camps', outcome: 'No accountability; companies not required to report or prevent worker violence' },
 { defendant: 'State law enforcement agencies', charge: 'Failure to investigate missing Indigenous women reports', outcome: 'Cases routinely classified as runaways or low priority; systemic bias documented' },
 { defendant: 'Bureau of Indian Affairs', charge: 'Chronic underfunding of tribal law enforcement', outcome: 'BIA police force less than half the size recommended by DOJ; no remedy imposed' },
 { defendant: 'FBI', charge: 'Failure to adequately investigate murders on reservations', outcome: 'FBI maintains jurisdiction but has insufficient agents, some reservations have zero coverage' },
 { defendant: 'Various perpetrators', charge: 'Murder and violence against Indigenous women', outcome: 'Conviction rates far below national average due to jurisdictional confusion and investigative neglect' },
 { defendant: 'Canadian Government (MMIW Inquiry)', charge: 'Genocide against Indigenous women and girls', outcome: 'National Inquiry concluded MMIW constitutes genocide; calls to action largely unimplemented' },
 ],
 charges: [
 { statute: '18 U.S.C. § 1153 (Major Crimes Act)', description: 'Federal government has jurisdiction but chronically fails to investigate and prosecute murders of Indigenous women', count: '52% declination rate for violent crimes in Indian Country' },
 { statute: '25 U.S.C. § 1304 (VAWA Tribal Jurisdiction)', description: 'Despite VAWA restoration of some tribal jurisdiction, gaps remain for non-domestic violence, sexual assault by strangers, and crimes by non-Native offenders', count: 'Thousands of cases in jurisdictional limbo' },
 { statute: '18 U.S.C. § 242', description: 'Deprivation of rights under color of law, law enforcement agencies fail to equally investigate crimes against Indigenous women', count: 'Systemic pattern across tribal, state, and federal agencies' },
 { statute: 'U.S. Constitution, 14th Amendment', description: 'Denial of equal protection, Indigenous women receive dramatically less law enforcement protection than other demographics', count: 'Murder rate 10x national average with fraction of investigative resources' },
 { statute: '18 U.S.C. § 1111-1112', description: 'Murder and manslaughter, hundreds of unsolved homicides of Indigenous women in federal jurisdiction', count: 'Estimated 500+ unsolved cases' },
 { statute: '18 U.S.C. § 2261-2262', description: 'Domestic violence and stalking across jurisdictional boundaries creating gaps in protection', count: 'Thousands of unreported and uninvestigated cases annually' },
 { statute: '25 U.S.C. § 2801 (Indian Law Enforcement Reform Act)', description: 'Federal obligation to provide adequate law enforcement in Indian Country consistently violated through underfunding', count: 'BIA police staffed at less than half DOJ-recommended levels' },
 { statute: '18 U.S.C. § 1201', description: 'Kidnapping, forced disappearances of Indigenous women with inadequate federal response', count: '5,712 reported missing in 2016 alone' },
 ],
 coverup: [
 'The Department of Justice database contained only 116 of the 5,712 Indigenous women reported missing in 2016 - a 98% data gap that rendered the crisis statistically invisible.',
 'Law enforcement agencies routinely classify missing Indigenous women as "runaways" rather than opening investigations, regardless of circumstances or age.',
 'The Oliphant decision created a legal no-man\'s-land where non-Native perpetrators know they likely won\'t face tribal prosecution, and federal/state agencies lack resources or jurisdiction to fill the gap.',
 'Extractive industry"man camps"- temporary housing for pipeline and mining workers, have been directly correlated with spikes in trafficking and violence against Indigenous women, but companies face no accountability.',
 'Media coverage of missing and murdered Indigenous women is dramatically lower than for white women, a phenomenon researchers call the "Missing White Woman Syndrome."',
 'Federal agencies have no unified system for tracking MMIW cases across jurisdictions, meaning cases fall through the cracks between tribal, state, federal, and local authorities.',
 'The Bureau of Indian Affairs has been chronically underfunded for generations, with some reservations larger than states having fewer than 10 officers for tens of thousands of residents.',
 'Canada\'s National Inquiry concluded that the MMIW crisis constitutes genocide, but the US has never conducted a comparable investigation or acknowledged the scope of the crisis domestically.',
 ],
 sources: [
 { title: 'Missing and Murdered Indigenous Women, Urban Indian Health Institute', url: 'https://www.uihi.org/resources/missing-and-murdered-indigenous-women-girls/', date: '2018' },
 { title: 'Maze of Injustice: Failure to Protect Indigenous Women, Amnesty International', url: 'https://www.amnesty.org/en/documents/amr51/035/2007/en/', date: '2007' },
 { title: 'Savanna\'s Act, U.S. Congress', url: 'https://www.congress.gov/bill/116th-congress/senate-bill/227', date: '2020' },
 { title: 'Reclaiming Power and Place: Final Report, National Inquiry into MMIWG (Canada)', url: 'https://www.mmiwg-ffada.ca/final-report/', date: '2019' },
 { title: 'Violence Against American Indian and Alaska Native Women, NIJ', url: 'https://nij.ojp.gov/topics/articles/violence-against-american-indian-and-alaska-native-women-and-men', date: '2016' },
 { title: 'A Third of Indian Country Criminal Cases Are Declined by U.S. Attorneys, NPR', url: 'https://www.npr.org/2019/08/20/752774811/a-third-of-native-american-criminal-cases-are-declined-by-u-s-attorneys', date: '2019-08-20' },
 { title: 'The Crisis of Missing and Murdered Indigenous Women, Brennan Center', url: 'https://www.brennancenter.org/our-work/analysis-opinion/crisis-missing-murdered-indigenous-women', date: '2022' },
 { title: 'Operation Lady Justice, Not Invisible Act Commission Report', url: 'https://operationladyjustice.usdoj.gov/', date: '2020' },
 ],
};

export default function MMIWPage() {
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
