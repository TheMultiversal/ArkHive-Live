'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowLeft, AlertTriangle, Users, Calendar, FileText, ExternalLink, Scale, ShieldAlert, Skull } from 'lucide-react';
import GlitchText from '@/components/effects/GlitchText';

const investigation = {
 title: 'Lynching in America',
 subtitle: '4,400+ Racial Terror Lynchings 1877-1950: No Federal Anti-Lynching Law Until 2022',
 severity: 'critical',
 status: 'CONFIRMED, DOCUMENTED HISTORY',
 summary: 'Between 1877 and 1950, at least 4,400 African Americans were murdered by racial terror lynchings across the United States (primarily in the South, but in every region of the country. Lynching was not random violence: it was a systematic tool of white supremacist social control designed to enforce racial subordination through public spectacle. Victims were tortured, mutilated, burned alive, and hanged) often before crowds of thousands, including children. Postcards depicting lynchings were sold as souvenirs. Body parts were collected as trophies. Despite over 200 attempts beginning in 1900, Congress failed to pass a federal anti-lynching law for 122 years, blocked repeatedly by Southern senators using the filibuster. The Emmett Till Antilynching Act was not signed until March 29, 2022. No perpetrator of a racial terror lynching was ever convicted of murder in a state court. The Equal Justice Initiative has documented 800+ additional lynchings beyond previously known totals, and continues to identify mass graves and unmarked burial sites.',
 keyFigures: [
 { name: 'Ida B. Wells', role: 'Journalist and anti-lynching crusader who documented lynching across the South', href: '/entities/individuals/ida-b-wells', status: 'Deceased (1931)' },
 { name: 'Walter White', role: 'NAACP executive secretary who investigated 40+ lynchings personally', href: '/entities/individuals/walter-white-naacp', status: 'Deceased (1955)' },
 { name: 'Jesse Daniel Ames', role: 'Founded Association of Southern Women for the Prevention of Lynching', href: '/entities/individuals/jesse-daniel-ames', status: 'Deceased (1972)' },
 { name: 'Bryan Stevenson', role: 'Founded Equal Justice Initiative, created National Memorial for Peace and Justice', href: '/entities/individuals/bryan-stevenson', status: 'Active' },
 { name: 'Mary Turner', role: 'Eight months pregnant when lynched in 1918 Georgia, her unborn child was cut from her body', href: '/entities/individuals/mary-turner', status: 'Murdered (1918)' },
 { name: 'Jesse Washington', role: '17-year-old lynched in Waco, Texas in 1916 before crowd of 15,000; known as Waco Horror', href: '/entities/individuals/jesse-washington', status: 'Murdered (1916)' },
 { name: 'Emmett Till', role: '14-year-old murdered in Mississippi 1955; catalyzed Civil Rights Movement', href: '/entities/individuals/emmett-till', status: 'Murdered (1955)' },
 { name: 'Theodore Bilbo', role: 'Mississippi Senator who openly advocated lynching and blocked anti-lynching legislation', href: '/entities/individuals/theodore-bilbo', status: 'Deceased (1947)' },
 { name: 'Leonidas Dyer', role: 'Missouri Congressman who authored first federal anti-lynching bill in 1918', href: '/entities/individuals/leonidas-dyer', status: 'Deceased (1957)' },
 { name: 'Sherrilyn Ifill', role: 'Author of On the Courthouse Lawn documenting lynching in Maryland', href: '/entities/individuals/sherrilyn-ifill', status: 'Active' },
 { name: 'Ben Tillman', role: 'South Carolina Senator who boasted of participating in violence against Black voters', href: '/entities/individuals/ben-tillman', status: 'Deceased (1918)' },
 ],
 timeline: [
 { date: '1877', event: 'End of Reconstruction, federal troops withdraw from South, era of racial terror begins' },
 { date: '1882', event: 'Tuskegee Institute begins documenting lynchings, records 4,743 through 1968' },
 { date: '1892', event: 'Ida B. Wells publishes Southern Horrors documenting lynching after 3 friends murdered in Memphis' },
 { date: '1893', event: 'Wells publishes A Red Record, first statistical documentation of lynching in America' },
 { date: '1900', event: 'First federal anti-lynching bill introduced in Congress, fails to pass' },
 { date: '1916', event: 'Jesse Washington, 17, burned alive in Waco, Texas before 15,000 spectators, Waco Horror' },
 { date: '1918', event: 'Mary Turner, 8 months pregnant, lynched in Georgia, her unborn child cut from her body and stomped to death' },
 { date: '1918', event: 'Congressman Leonidas Dyer introduces Dyer Anti-Lynching Bill, passes House, killed by Senate filibuster' },
 { date: '1919', event: 'Red Summer; 25+ race riots and dozens of lynchings across America' },
 { date: '1922', event: 'Dyer Anti-Lynching Bill passes House 230-119; killed by Southern Senate filibuster' },
 { date: '1930', event: 'Thomas Shipp and Abram Smith lynched in Marion, Indiana, photograph inspires "Strange Fruit"poem' },
 { date: '1934', event: 'Costigan-Wagner Anti-Lynching Bill introduced, FDR refuses to support it, killed by Senate filibuster' },
 { date: '1935', event: 'NAACP lobbies for federal legislation, FDR fears losing Southern Democratic support' },
 { date: '1937', event: 'Gavagan Anti-Lynching Bill passes House, killed by Senate filibuster for the third time' },
 { date: '1955', event: 'Emmett Till murdered in Mississippi, open casket images galvanize Civil Rights Movement' },
 { date: '2005', event: 'US Senate formally apologizes for failure to pass anti-lynching legislation' },
 { date: '2018', event: 'Equal Justice Initiative opens National Memorial for Peace and Justice in Montgomery, Alabama' },
 { date: 'March 29, 2022', event: 'Emmett Till Antilynching Act signed into law, first federal anti-lynching legislation after 122 years and 200+ failed attempts' },
 ],
 legalOutcomes: [
 { defendant: 'Perpetrators of 4,400+ lynchings', charge: 'Murder, torture, mutilation', outcome: 'Not a single person convicted of murder for a racial terror lynching in state court' },
 { defendant: 'US Senate', charge: 'Filibuster of 200+ anti-lynching bills over 122 years', outcome: 'Senate formally apologized in 2005; no legal consequence' },
 { defendant: 'Dyer Anti-Lynching Bill (1922)', charge: 'House passed 230-119', outcome: 'Killed by Senate filibuster, pattern repeated for a century' },
 { defendant: 'Roy Bryant & J.W. Milam', charge: 'Murder of Emmett Till', outcome: 'Acquitted by all-white jury in 67 minutes, later confessed' },
 { defendant: 'Sheriff Claude Screws', charge: 'Beating Black prisoner Robert Hall to death (1945)', outcome: 'Federal conviction overturned by Supreme Court, acquitted at retrial' },
 { defendant: 'Murders of civil rights workers (1964)', charge: 'Murder of Chaney, Goodman, Schwerner in Mississippi', outcome: 'State murder charges dismissed, federal civil rights conviction years later' },
 { defendant: 'State and Local Officials', charge: 'Complicity in lynchings, sheriffs often delivered victims to mobs', outcome: 'No officials ever held accountable for participating in or facilitating lynchings' },
 { defendant: 'Photographers and Spectators', charge: 'Photography and distribution of lynching images as souvenirs', outcome: 'Never prosecuted, images now serve as historical documentation' },
 ],
 charges: [
 { statute: '18 U.S.C. § 1111: Murder', description: 'At least 4,400 African Americans murdered by racial terror lynchings', count: '4,400+ documented victims, true number likely higher' },
 { statute: '18 U.S.C. § 2340: Torture', description: 'Victims were routinely tortured before being killed, burned alive, mutilated, castrated', count: 'Torture was standard practice in racial terror lynchings' },
 { statute: '18 U.S.C. § 241: Conspiracy Against Rights', description: 'Organized mob violence to deny civil rights on basis of race', count: 'Community-wide conspiracies in thousands of incidents' },
 { statute: '18 U.S.C. § 242: Deprivation of Rights Under Color of Law', description: 'Law enforcement participated in or facilitated lynchings, sheriffs delivered prisoners to mobs', count: 'Documented law enforcement complicity in majority of lynchings' },
 { statute: '14th Amendment, Due Process', description: 'Extrajudicial execution without trial, depriving victims of life without due process', count: 'Every lynching was a denial of due process' },
 { statute: '13th Amendment, Involuntary Servitude', description: 'Lynching used to enforce racial subordination and maintain de facto servitude after abolition', count: 'Systemic tool of racial social control' },
 { statute: '18 U.S.C. § 249: Hate Crimes Prevention Act', description: 'Violence motivated by racial hatred resulting in death', count: '4,400+ racially motivated murders' },
 { statute: 'Emmett Till Antilynching Act: 18 U.S.C. § 250', description: 'Conspiracy resulting in death or serious bodily injury, enacted 2022', count: 'Took 122 years and 200+ attempts to pass' },
 ],
 coverup: [
 'Despite thousands of public lynchings attended by hundreds or thousands of witnesses, not a single person was convicted of murder for a racial terror lynching in a state court',
 'Coroners routinely ruled lynching deaths as"death at the hands of persons unknown"even when perpetrators were photographed and identified',
 'Postcards depicting lynchings were printed and mailed through the US Postal Service, the government did not prohibit their distribution until 1908, and enforcement was minimal',
 'Southern senators used the filibuster to block anti-lynching legislation over 200 times across 122 years, protecting perpetrators from federal prosecution',
 'President Franklin Roosevelt refused to support anti-lynching legislation despite being urged by the NAACP and Eleanor Roosevelt, he feared losing Southern Democratic votes',
 'Local newspapers often covered lynchings as justified responses to alleged crimes, reinforcing the narrative that victims deserved their fate',
 'Mass graves and unmarked burial sites of lynching victims have been paved over, built upon, or deliberately lost, the Equal Justice Initiative continues to locate them',
 'History textbooks in most states omitted or minimized the scale of lynching for decades, presenting it as isolated incidents rather than systematic terror',
 'Many lynching sites have no markers or memorials, communities actively resist acknowledgment of these events to this day',
 ],
 sources: [
 { title: 'Equal Justice Initiative, Lynching in America: Confronting the Legacy of Racial Terror', url: 'https://lynchinginamerica.eji.org/', date: '2017' },
 { title: 'Ida B. Wells, Southern Horrors and A Red Record', url: 'https://www.gutenberg.org/ebooks/14975', date: '1892-1895' },
 { title: 'National Memorial for Peace and Justice', url: 'https://museumandmemorial.eji.org/memorial', date: '2018' },
 { title: 'Tuskegee University Archives, Lynching Statistics', url: 'https://archive.tuskegee.edu/repository/digital-collection/lynching-statistics/', date: '1882-1968' },
 { title: 'Sherrilyn Ifill, On the Courthouse Lawn: Confronting the Legacy of Lynching', url: 'https://www.beacon.org/On-the-Courthouse-Lawn-P1133.aspx', date: '2007' },
 { title: 'James Allen, Without Sanctuary: Lynching Photography in America', url: 'https://withoutsanctuary.org/', date: '2000' },
 { title: 'US Senate, Apology for Failure to Enact Anti-Lynching Legislation (S. Res. 39)', url: 'https://www.congress.gov/bill/109th-congress/senate-resolution/39', date: 'June 13, 2005' },
 { title: 'Emmett Till Antilynching Act, Public Law 117-107', url: 'https://www.congress.gov/bill/117th-congress/house-bill/55', date: 'March 29, 2022' },
 { title: 'NAACP, History of Lynchings', url: 'https://naacp.org/find-resources/history-explained/history-lynching-america', date: 'Ongoing' },
 ],
};

export default function LynchingInAmericaPage() {
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
