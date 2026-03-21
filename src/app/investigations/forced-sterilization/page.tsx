'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowLeft, AlertTriangle, Users, Calendar, FileText, ExternalLink, Scale, ShieldAlert, Skull } from 'lucide-react';
import GlitchText from '@/components/effects/GlitchText';

const investigation = {
 title: 'Forced Sterilization',
 subtitle: '70,000+ Americans Sterilized Under Eugenics Programs, Targeting Minorities, Disabled, and Poor',
 severity: 'critical',
 status: 'CONFIRMED, STATE RECORDS',
 summary: 'Between 1907 and the 1980s, over 70,000 Americans were forcibly sterilized under state eugenics programs, and the true number is likely far higher. Beginning with Indiana\'s 1907 compulsory sterilization law, 32 states enacted eugenic sterilization statutes targeting people deemed"unfit"- disproportionately Black, Indigenous, Latino, disabled, incarcerated, and poor individuals. The US Supreme Court upheld forced sterilization in Buck v. Bell (1927), with Justice Oliver Wendell Holmes infamously declaring "Three generations of imbeciles are enough."This decision has never been explicitly overturned. California alone sterilized over 20,000 people, more than any other state. North Carolina\'s program was particularly aggressive, with a eugenics board that continued approving sterilizations into the 1970s. Native American women were sterilized by Indian Health Service hospitals without consent through the 1970s; an estimated 25-50% of Native women of childbearing age were sterilized. Forced sterilization continued in US prisons as recently as 2020. Nazi Germany explicitly cited American eugenics laws as models for their own racial hygiene programs.',
 keyFigures: [
 { name: 'Harry Laughlin', role: 'Eugenics Record Office superintendent who drafted model sterilization law adopted by 30 states', href: '/entities/individuals/harry-laughlin', status: 'Deceased (1943)' },
 { name: 'Charles Davenport', role: 'Founded Eugenics Record Office at Cold Spring Harbor, architect of American eugenics', href: '/entities/individuals/charles-davenport', status: 'Deceased (1944)' },
 { name: 'Oliver Wendell Holmes Jr.', role: 'Supreme Court Justice who wrote Buck v. Bell opinion upholding forced sterilization', href: '/entities/individuals/oliver-wendell-holmes', status: 'Deceased (1935)' },
 { name: 'Carrie Buck', role: 'Woman forcibly sterilized in Virginia, subject of Buck v. Bell Supreme Court case', href: '/entities/individuals/carrie-buck', status: 'Deceased (1983)' },
 { name: 'John Harvey Kellogg', role: 'Founded Race Betterment Foundation, promoted eugenics alongside cereal empire', href: '/entities/individuals/john-harvey-kellogg', status: 'Deceased (1943)' },
 { name: 'Margaret Sanger', role: 'Birth control advocate whose movement intersected with eugenics ideology', href: '/entities/individuals/margaret-sanger', status: 'Deceased (1966)' },
 { name: 'Paul Popenoe', role: 'California eugenics leader who directed Human Betterment Foundation', href: '/entities/individuals/paul-popenoe', status: 'Deceased (1979)' },
 { name: 'Elaine Riddick', role: 'Sterilized at age 14 in North Carolina, became prominent activist for survivors', href: '/entities/individuals/elaine-riddick', status: 'Active' },
 { name: 'Dr. Condie', role: 'Indian Health Service physician who performed sterilizations without informed consent', href: '/entities/individuals/dr-condie', status: 'Unknown' },
 { name: 'Mary Alice Relf', role: '12-year-old Black girl sterilized by federally funded Alabama clinic without consent', href: '/entities/individuals/mary-alice-relf', status: 'Active' },
 { name: 'Minnie Lee Relf', role: '14-year-old Black girl sterilized alongside her sister by Alabama clinic', href: '/entities/individuals/minnie-lee-relf', status: 'Active' },
 ],
 timeline: [
 { date: '1896', event: 'Connecticut passes first law restricting marriage of"eugenically unfit"individuals' },
 { date: '1907', event: 'Indiana passes first compulsory sterilization law, model for 31 other states' },
 { date: '1910', event: 'Eugenics Record Office established at Cold Spring Harbor, New York' },
 { date: '1911', event: 'Carnegie Institution funds eugenics research, legitimizes pseudoscientific racism' },
 { date: '1924', event: 'Virginia Sterilization Act passed, Carrie Buck becomes first person sterilized under the law' },
 { date: 'May 2, 1927', event: 'Buck v. Bell, Supreme Court upholds forced sterilization 8-1."Three generations of imbeciles are enough."' },
 { date: '1930s', event: 'Nazi Germany cites American eugenics laws, Harry Laughlin receives honorary degree from Heidelberg' },
 { date: '1933', event: 'Germany passes Law for the Prevention of Hereditarily Diseased Offspring, modeled on Laughlin\'s draft' },
 { date: '1942', event: 'Skinner v. Oklahoma, Supreme Court limits sterilization but does NOT overturn Buck v. Bell' },
 { date: '1960s-1970s', event: 'Sterilization abuse continues in Southern states, targeting Black women -"Mississippi Appendectomy"' },
 { date: '1970s', event: 'Indian Health Service sterilizes 25-50% of Native American women of childbearing age without consent' },
 { date: '1973', event: 'Relf v. Weinberger; 12 and 14-year-old Black sisters sterilized without consent in Alabama' },
 { date: '1974', event: 'Federal regulations require informed consent for sterilization, enforcement remains weak' },
 { date: '1979', event: 'Last state eugenics board (North Carolina) dissolved, had approved sterilizations through the 1970s' },
 { date: '2002', event: 'Oregon governor apologizes for state eugenics program, first formal state apology' },
 { date: '2013', event: 'North Carolina establishes compensation fund for sterilization survivors; $10M for estimated 7,600 victims' },
 { date: '2014', event: 'California audit reveals 148 women sterilized in state prisons 2006-2010 without proper consent' },
 { date: '2020', event: 'Whistleblower alleges hysterectomies performed on ICE detainees at Irwin County Detention Center' },
 ],
 legalOutcomes: [
 { defendant: 'Buck v. Bell (1927)', charge: 'Constitutionality of forced sterilization', outcome: 'Supreme Court upholds 8-1; decision has NEVER been explicitly overturned' },
 { defendant: 'State of Virginia', charge: 'Forced sterilization of Carrie Buck and 8,000+ others', outcome: 'Virginia formally apologized in 2002; no compensation provided' },
 { defendant: 'State of North Carolina', charge: 'Eugenics Board sterilized 7,600+ people, disproportionately Black', outcome: '$10M compensation fund established 2013; most survivors already deceased' },
 { defendant: 'State of California', charge: '20,000+ forced sterilizations, most of any state', outcome: 'Formal apology 2003, $7.5M reparations program established 2021' },
 { defendant: 'Relf v. Weinberger', charge: 'Federal funding of nonconsensual sterilizations', outcome: 'Federal regulations implemented requiring informed consent' },
 { defendant: 'Indian Health Service', charge: 'Non-consensual sterilization of Native American women', outcome: 'GAO investigation confirmed abuses, no prosecutions' },
 { defendant: 'California Prisons', charge: '148 unauthorized sterilizations of women inmates 2006-2010', outcome: 'State law passed banning prison sterilization, no criminal charges' },
 { defendant: 'ICE / Irwin County Detention Center', charge: 'Alleged non-consensual hysterectomies on detained immigrants', outcome: 'DHS investigation opened, facility closed, no criminal prosecution' },
 ],
 charges: [
 { statute: '42 U.S.C. § 1983: Civil Rights', description: 'State-sponsored deprivation of bodily autonomy and reproductive rights on basis of race, disability, and poverty', count: '70,000+ documented sterilizations across 32 states' },
 { statute: '14th Amendment, Equal Protection', description: 'Eugenic sterilization disproportionately targeted racial minorities, disabled, and poor', count: 'Systematic racial discrimination in all state programs' },
 { statute: '18 U.S.C. § 242: Deprivation of Rights Under Color of Law', description: 'Government officials performing involuntary medical procedures under state authority', count: 'Tens of thousands subjected to surgery without consent' },
 { statute: 'Nuremberg Code (1947)', description: 'Medical experimentation and procedures performed without voluntary informed consent', count: 'Most sterilizations lacked meaningful consent, many patients were minors' },
 { statute: '18 U.S.C. § 241: Conspiracy Against Rights', description: 'Coordinated state programs to deny reproductive rights to targeted populations', count: '32 states enacted sterilization laws' },
 { statute: '18 U.S.C. § 1111: Assault/Battery', description: 'Surgical removal of reproductive organs without consent constitutes battery', count: '70,000+ surgical assaults documented' },
 { statute: 'Convention on the Prevention of Genocide, Article II(d)', description: 'Imposing measures intended to prevent births within a group, targeting of minorities', count: 'Native American, Black, and Latino women disproportionately targeted' },
 { statute: '8th Amendment, Cruel and Unusual Punishment', description: 'Sterilization of prisoners and institutionalized persons as condition of release', count: 'Thousands of prisoners sterilized as condition of parole' },
 ],
 coverup: [
 'Buck v. Bell has never been explicitly overturned by the Supreme Court, it technically remains valid precedent despite being universally condemned',
 'State records of eugenic sterilizations were often deliberately incomplete, actual numbers are believed to significantly exceed the 70,000 documented cases',
 'Many victims were told they were having "appendectomies" or other procedures, the term "Mississippi Appendectomy"refers to sterilizations performed on Black women without their knowledge',
 'Indian Health Service physicians obtained "consent" from Native women who were in labor, under anesthesia, or did not understand English-language consent forms',
 'The Eugenics Record Office at Cold Spring Harbor destroyed many of its records when eugenics fell out of favor, preventing full documentation of the movement\'s reach',
 'Harry Laughlin received an honorary degree from the University of Heidelberg in 1936 for his contributions to"racial hygiene"- the Nazi connection was downplayed after WWII',
 'California\'s eugenics program operated largely out of public view, the state sterilized more people than any other but received less scrutiny than Southern programs',
 'North Carolina\'s Eugenics Board minutes show social workers and officials targeting Black families specifically, the racial targeting was systematic, not incidental',
 'Federal regulations requiring informed consent for sterilization (1974) were routinely ignored in practice, particularly in prisons and institutions for the developmentally disabled',
 ],
 sources: [
 { title: 'Adam Cohen, Imbeciles: The Supreme Court, American Eugenics, and the Sterilization of Carrie Buck', url: 'https://www.penguinrandomhouse.com/books/246160/imbeciles-by-adam-cohen/', date: '2016' },
 { title: 'Eugenics Archive, University of Vermont and Cold Spring Harbor', url: 'https://eugenicsarchive.ca/', date: 'Ongoing' },
 { title: 'North Carolina Justice for Sterilization Victims Foundation', url: 'https://www.sterilizationvictims.nc.gov/', date: '2013' },
 { title: 'GAO, Investigation of Indian Health Service Sterilization Practices', url: 'https://www.gao.gov/products/hrd-77-3', date: '1976' },
 { title: 'Alexandra Minna Stern, Eugenic Nation: Faults and Frontiers of Better Breeding in Modern America', url: 'https://www.ucpress.edu/book/9780520285064/eugenic-nation', date: '2015' },
 { title: 'PBS, The Eugenics Crusade: What\'s Wrong with Perfect?', url: 'https://www.pbs.org/wgbh/americanexperience/films/eugenics-crusade/', date: '2018' },
 { title: 'California state auditor, Sterilization of Female Inmates', url: 'https://www.auditor.ca.gov/pdfs/reports/2013-120.pdf', date: '2014' },
 { title: 'Buck v. Bell, 274 U.S. 200 (1927): Supreme Court Opinion', url: 'https://supreme.justia.com/cases/federal/us/274/200/', date: '1927' },
 { title: 'NPR, California Forced Sterilization Reparations', url: 'https://www.npr.org/2022/01/05/1070311271/california-forced-sterilization-reparations', date: 'January 5, 2022' },
 ],
};

export default function ForcedSterilizationPage() {
 return (
 <div className="min-h-screen pt-20 lg:pt-24 pb-16">
 <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
 <Link href="/investigations"className="inline-flex items-center gap-2 text-zinc-400 hover:text-white transition-colors mb-6 pt-4"><ArrowLeft className="w-4 h-4"/>Back to Investigations</Link>
 <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="border-2 border-zinc-800/60 bg-[rgba(0,6,20,0.90)] p-6 lg:p-8 mb-8">
 <div className="flex items-center gap-3 mb-4"><span className="px-3 py-1 text-xs font-bold uppercase border border-zinc-800 bg-zinc-900 text-zinc-400">{investigation.severity}</span><span className="px-3 py-1 text-xs font-bold uppercase border border-zinc-700 bg-zinc-900 text-zinc-400">{investigation.status}</span></div>
 <h1 className="text-3xl lg:text-4xl font-black glass-text uppercase tracking-wider mb-2"><GlitchText text={investigation.title} /></h1>
 <p className="text-lg text-zinc-300 font-bold mb-4">{investigation.subtitle}</p>
 <p className="text-zinc-400 leading-relaxed">{investigation.summary}</p>
 </motion.div>
 <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.15 }} className="glass-card p-6 mb-8 border-l-4 border-zinc-700">
 <h2 className="text-xl font-bold glass-text uppercase tracking-wider mb-4 flex items-center gap-2"><ShieldAlert className="w-5 h-5 text-zinc-300"/>The Cover-Up</h2>
 <div className="space-y-3">{investigation.coverup.map((item, idx) => (<div key={idx} className="p-3 bg-zinc-900 border border-zinc-800"><p className="text-sm text-zinc-300">{item}</p></div>))}</div>
 </motion.div>
 <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
 <div className="lg:col-span-2 space-y-8">
 <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }} className="glass-card p-6">
 <h2 className="text-xl font-bold glass-text uppercase tracking-wider mb-4 flex items-center gap-2"><Users className="w-5 h-5 text-zinc-300"/>Key Figures</h2>
 <div className="space-y-3">{investigation.keyFigures.map((figure, idx) => (<div key={idx} className="flex items-start justify-between p-3 bg-[#0a0a0a] border border-[rgba(255,255,255,0.15)]"><div className="flex-1">{figure.href ? (<Link href={figure.href} className="font-bold text-zinc-400 hover:text-white transition-colors">{figure.name}</Link>) : (<span className="font-bold glass-text">{figure.name}</span>)}<p className="text-sm text-zinc-400 mt-1">{figure.role}</p></div><span className="text-xs px-2 py-1 bg-[#0d0d0d] text-zinc-400 border border-[rgba(255,255,255,0.18)] whitespace-nowrap ml-2">{figure.status}</span></div>))}</div>
 </motion.div>
 <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }} className="glass-card p-6">
 <h2 className="text-xl font-bold glass-text uppercase tracking-wider mb-4 flex items-center gap-2"><Scale className="w-5 h-5 text-zinc-300"/>Applicable Charges &amp; Statutes</h2>
 <div className="space-y-3">{investigation.charges.map((charge, idx) => (<div key={idx} className="p-4 bg-[#0a0a0a] border border-[rgba(255,255,255,0.15)]"><p className="font-bold text-zinc-400 text-sm font-mono">{charge.statute}</p><p className="text-sm text-zinc-300 mt-1">{charge.description}</p><p className="text-xs text-zinc-400 mt-1">{charge.count}</p></div>))}</div>
 </motion.div>
 </div>
 <div className="space-y-6">
 <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} className="glass-card p-6">
 <h3 className="text-lg font-bold glass-text uppercase tracking-wider mb-4 flex items-center gap-2"><Calendar className="w-4 h-4 text-zinc-300"/>Timeline</h3>
 <div className="space-y-4">{investigation.timeline.map((item, idx) => (<div key={idx} className="relative pl-4 border-l-2 border-[rgba(255,255,255,0.15)]"><div className="absolute -left-[5px] top-0 w-2 h-2 bg-zinc-600"/><p className="text-xs text-zinc-300 font-mono">{item.date}</p><p className="text-sm text-zinc-300">{item.event}</p></div>))}</div>
 </motion.div>
 <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.1 }} className="glass-card p-6">
 <h3 className="text-lg font-bold glass-text uppercase tracking-wider mb-4 flex items-center gap-2"><Scale className="w-5 h-5 text-zinc-300"/>Legal Outcomes</h3>
 <div className="space-y-3">{investigation.legalOutcomes.map((item, idx) => (<div key={idx} className="p-3 bg-[#0a0a0a] border border-[rgba(255,255,255,0.15)]"><p className="font-bold glass-text text-sm">{item.defendant}</p><p className="text-xs text-zinc-400 mt-1">{item.charge}</p><p className="text-xs text-zinc-400 mt-1">{item.outcome}</p></div>))}</div>
 </motion.div>
 <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.2 }} className="glass-card p-6">
 <h3 className="text-lg font-bold glass-text uppercase tracking-wider mb-4">Sources</h3>
 <div className="space-y-2">{investigation.sources.map((source, idx) => (<a key={idx} href={source.url} target="_blank"rel="noopener noreferrer"className="flex items-start gap-2 p-2 text-sm text-zinc-400 hover:text-white hover:bg-[#0a0a0a] transition-colors"><ExternalLink className="w-4 h-4 mt-0.5 flex-shrink-0"/><div><span>{source.title}</span><span className="text-zinc-600 ml-2">({source.date})</span></div></a>))}</div>
 </motion.div>
 </div>
 </div>
 </div>
 </div>
 );
}
