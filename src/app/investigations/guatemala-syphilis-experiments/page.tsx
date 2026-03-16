'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowLeft, AlertTriangle, Users, Calendar, FileText, ExternalLink, Scale, ShieldAlert, Skull } from 'lucide-react';
import GlitchText from '@/components/effects/GlitchText';

const investigation = {
 title: 'Guatemala Syphilis Experiments',
 subtitle: 'When the U.S. Government Deliberately Infected 1,300+ Guatemalans with Sexually Transmitted Diseases',
 severity: 'critical',
 status: 'CONFIRMED',
 summary: 'From 1946 to 1948, United States Public Health Service researchers, led by Dr. John Charles Cutler, deliberately infected at least 1,308 Guatemalans (including prisoners, soldiers, psychiatric patients, and sex workers) with syphilis, gonorrhea, and chancroid without their knowledge or consent. Researchers used prostitutes infected with syphilis to have intercourse with prisoners, and when that proved inefficient, they applied infectious material directly to abraded skin, or injected it into the spinal canal. At least 83 subjects died. The experiments were designed to test whether penicillin could prevent sexually transmitted infections after exposure. The program was funded by the U.S. National Institutes of Health and conducted with the cooperation of Guatemalan health officials. The experiments were concealed for over 60 years until historian Susan Reverby discovered them in archived papers in 2010. President Obama personally apologized to Guatemalan President \u00C1lvaro Colom, and Secretary of State Hillary Clinton called the experiments"clearly unethical."Dr. Cutler, who also participated in the infamous Tuskegee syphilis study, died in 2003 without facing any consequences. The Guatemalan victims and their families have received no compensation from the United States government.',
 keyFigures: [
 { name: 'Dr. John Charles Cutler', role: 'Lead researcher who directed the Guatemala experiments and later participated in the Tuskegee syphilis study', href: '/entities/individuals/john-charles-cutler', status: 'Deceased (2003)' },
 { name: 'Dr. John Mahoney', role: 'Director of the PHS Venereal Disease Research Laboratory who oversaw Cutler\'s Guatemala research', href: '/entities/individuals/john-mahoney', status: 'Deceased (1957)' },
 { name: 'Surgeon General Thomas Parran', role: 'U.S. Surgeon General who approved and was aware of the Guatemala experiments', href: '/entities/individuals/thomas-parran', status: 'Deceased (1968)' },
 { name: 'Dr. Juan Funes', role: 'Guatemalan health official who facilitated access to subjects and collaborated with U.S. researchers', href: '/entities/individuals/juan-funes', status: 'Deceased' },
 { name: 'Susan Reverby', role: 'Wellesley College historian who discovered the experiments in Cutler\'s archived papers in 2010', href: '/entities/individuals/susan-reverby', status: 'Active' },
 { name: 'Barack Obama', role: 'President who personally apologized to Guatemala\'s president for the experiments in 2010', href: '/entities/individuals/barack-obama', status: 'Active' },
 { name: 'Hillary Clinton', role: 'Secretary of State who called the experiments"clearly unethical"and apologized to Guatemala', href: '/entities/individuals/hillary-clinton', status: 'Active' },
 { name: '\u00C1lvaro Colom', role: 'Guatemalan President who called the experiments"crimes against humanity"upon their disclosure', href: '/entities/individuals/alvaro-colom', status: 'Active' },
 { name: 'Dr. Francis Collins', role: 'NIH Director who acknowledged institutional responsibility for the experiments', href: '/entities/individuals/francis-collins', status: 'Active' },
 { name: 'Amy Gutmann', role: 'Chair of Presidential Commission for the Study of Bioethical Issues that investigated the experiments', href: '/entities/individuals/amy-gutmann', status: 'Active' },
 { name: 'Dr. R.C. Arnold', role: 'PHS physician who assisted Cutler in Guatemala and helped design infection protocols', href: '/entities/individuals/rc-arnold', status: 'Deceased' },
 { name: 'Dr. Eunice Rivers', role: 'PHS nurse involved in both Tuskegee and connected to Guatemala research networks', href: '/entities/individuals/eunice-rivers', status: 'Deceased (1986)' },
 ],
 timeline: [
 { date: '1943', event: 'Dr. John Mahoney demonstrates penicillin can cure syphilis, prompting PHS to research whether it can prevent infection' },
 { date: '1946-FEB', event: 'U.S. Public Health Service begins syphilis inoculation experiments at Guatemala\'s Penitenciar\u00EDa Central' },
 { date: '1946', event: 'Researchers use prostitutes infected with syphilis to have intercourse with prisoners without informed consent' },
 { date: '1946', event: 'When sexual transmission proves unreliable, researchers begin direct inoculation, applying syphilis bacteria to abrasions on skin' },
 { date: '1947', event: 'Experiments expand to psychiatric patients at Asilo de Alienados hospital, targeting the most vulnerable and unable to consent' },
 { date: '1947', event: 'Researchers inject syphilis spirochetes directly into subjects\' spinal canals, eyes, and other tissues' },
 { date: '1947', event: 'Guatemalan soldiers at military barracks become subjects of gonorrhea and chancroid experiments' },
 { date: '1947', event: 'At least 83 subjects die during the experimental period, many denied adequate treatment' },
 { date: '1948', event: 'Experiments end; many infected subjects are never properly treated despite researchers\' awareness of penicillin\'s effectiveness' },
 { date: '1948', event: 'Cutler returns to the United States; all records are buried in archives and never published' },
 { date: '1965', event: 'Dr. Cutler begins working on the Tuskegee syphilis study, applying the same unethical methodology to Black Americans' },
 { date: '1972', event: 'Tuskegee syphilis study exposed by Associated Press, but Guatemala experiments remain unknown' },
 { date: '2003', event: 'Dr. Cutler dies at age 87 without ever facing consequences for either the Guatemala experiments or Tuskegee involvement' },
 { date: '2010-JAN', event: 'Wellesley College historian Susan Reverby discovers Cutler\'s records of the Guatemala experiments in archived papers' },
 { date: '2010-OCT-01', event: 'Obama calls Guatemalan President Colom to personally apologize; Clinton and HHS Secretary Sebelius issue formal apology' },
 { date: '2011', event: 'Presidential Commission for the Study of Bioethical Issues releases report confirming the experiments and finding them"unconscionable"' },
 { date: '2012', event: 'Guatemalan victims file lawsuit against U.S. government and Johns Hopkins University in U.S. federal court' },
 { date: '2015', event: 'U.S. District Court dismisses lawsuit on grounds of sovereign immunity, government cannot be sued without its consent' },
 ],
 legalOutcomes: [
 { defendant: 'United States Government', charge: 'Deliberately infecting 1,308 Guatemalans with STDs without consent', outcome: 'Formal presidential apology in 2010; lawsuit dismissed on sovereign immunity grounds; no compensation paid' },
 { defendant: 'Johns Hopkins University', charge: 'Institutional role in designing and supporting the experiments', outcome: '$1 billion lawsuit filed by 774 victims in 2015; case ongoing as of 2024' },
 { defendant: 'Bristol-Myers Squibb', charge: 'Alleged role in supplying penicillin and supporting the experimental program', outcome: 'Named in 2015 lawsuit; contested institutional involvement' },
 { defendant: 'Rockefeller Foundation', charge: 'Alleged funding support for the Guatemala experimental program', outcome: 'Named in 2015 lawsuit as co-defendant' },
 { defendant: 'Dr. John Charles Cutler', charge: 'Deliberate infection of non-consenting human subjects with dangerous pathogens', outcome: 'Died in 2003 without ever facing charges; honored by University of Pittsburgh during his lifetime' },
 { defendant: 'U.S. Public Health Service', charge: 'Institutional authorization and funding of non-consensual human experimentation', outcome: 'Obama administration apologized; Bioethical Commission condemned the experiments; no structural reform' },
 { defendant: 'Guatemalan Government Officials', charge: 'Facilitating access to prisoners, soldiers, and psychiatric patients as experimental subjects', outcome: 'Guatemalan President Colom called experiments"crimes against humanity"but no Guatemalan officials were prosecuted' },
 { defendant: 'Presidential Bioethics Commission', charge: 'Investigation into federal research ethics', outcome: 'Issued 2011 report with 14 recommendations; found current protections"appear to be adequate in protecting against similar abuses"' },
 ],
 charges: [
 { statute: 'Nuremberg Code (1947)', description: 'Established that voluntary informed consent is absolutely essential for ethical human experimentation, violated completely', count: '1,308 subjects experimented on without any form of consent' },
 { statute: 'Crimes Against Humanity', description: 'Guatemalan President Colom designated the experiments as crimes against humanity under international law', count: 'At least 83 deaths; hundreds left with untreated STDs and lifelong complications' },
 { statute: 'Assault & Battery (Common Law)', description: 'Deliberate physical contact and infection of subjects without consent constitutes criminal assault', count: '1,308 subjects physically assaulted through inoculation, injection, or arranged sexual transmission' },
 { statute: 'International Covenant on Civil and Political Rights (Article 7)', description: 'No one shall be subjected to medical or scientific experimentation without free consent', count: 'Systematic violation involving prisoners, psychiatric patients, soldiers, and sex workers' },
 { statute: 'Geneva Conventions, Common Article 3', description: 'Prohibits violence to life and person, cruel treatment, and outrages upon personal dignity', count: 'Subjects included prisoners of war equivalent and mentally incapacitated individuals' },
 { statute: 'Conspiracy to Commit Assault (18 U.S.C. § 371)', description: 'Multiple U.S. and Guatemalan officials conspired to deliberately infect non-consenting subjects', count: 'Coordinated conspiracy involving PHS officials, local health authorities, and institutional administrators' },
 { statute: 'Federal Tort Claims Act (28 U.S.C. § 2674)', description: 'Allows suits against federal government for negligent or wrongful acts of employees acting within scope of employment', count: 'Claims dismissed under sovereign immunity, foreign country exception barred recovery for acts in Guatemala' },
 { statute: 'Universal Declaration of Human Rights (Article 5)', description: 'No one shall be subjected to torture or to cruel, inhuman or degrading treatment', count: 'Subjects endured painful inoculations, untreated infections, and spinal injections without consent or anesthesia' },
 ],
 coverup: [
 'Dr. Cutler deliberately never published the results of the Guatemala experiments, he knew they would be considered unethical even by 1940s standards',
 'In a 1947 letter, Cutler wrote that Dr. Mahoney was"not gruesome gruesome gruesome by gruesome gruesome gruesome,"crossing out his own description of the experiments\' brutality, he self-censored knowing the work was indefensible',
 'The experiments were conducted in Guatemala specifically because U.S. laws and oversight would have prevented them from being done in the United States',
 'When the Tuskegee syphilis study was exposed in 1972, no one investigated whether Cutler had conducted similar experiments elsewhere, the Guatemala records remained hidden for another 38 years',
 'The University of Pittsburgh honored Dr. Cutler with the Thomas Parran Award for excellence in public health despite his role in both Guatemala and Tuskegee experiments',
 'The U.S. government invoked sovereign immunity to block victims\' lawsuits, arguing it cannot be sued for atrocities committed on foreign soil, effectively denying any legal remedy',
 'Many of the 1,308 subjects who were infected with syphilis, gonorrhea, or chancroid were never adequately treated, researchers simply left Guatemala when the experiments concluded',
 'The Guatemalan health officials who facilitated the experiments by providing access to prisoners and psychiatric patients were never held accountable',
 'Records show the experiments were known at the highest levels of the Public Health Service, including the Surgeon General, but were kept from the public for over 60 years',
 ],
 sources: [
 { title: 'Reverby, Susan -"Normal Exposure"and Inoculation Syphilis: A PHS "Tuskegee" Study in Guatemala, 1946-1948', url: 'https://pubmed.ncbi.nlm.nih.gov/21916506/', date: '2011' },
 { title: 'Presidential Commission for the Study of Bioethical Issues -"Ethically Impossible"', url: 'https://bioethics.gov/node/654', date: '2011-09' },
 { title: 'New York Times, U.S. Apologizes for Syphilis Tests in Guatemala', url: 'https://www.nytimes.com/2010/10/02/health/research/02infect.html', date: '2010-10-01' },
 { title: 'The Lancet, Syphilis Experiments in Guatemala: Lessons for Future Human Subjects Research', url: 'https://www.thelancet.com/journals/lancet/article/PIIS0140-6736(11)60031-8/fulltext', date: '2011' },
 { title: 'NPR, U.S. Scientists Knew 1940s utilization Utiliz Tests Were Unethical', url: 'https://www.npr.org/sections/health-shots/2011/08/30/140060062/u-s-scientists-knew-1940s-utilization-tests-were-unethical', date: '2011-08-30' },
 { title: 'Washington Post, Study Details Breadth of 1940s STD Experiments in Guatemala', url: 'https://www.washingtonpost.com/national/health-science/study-details-breadth-of-1940s-std-experiments-in-guatemala/2011/08/29/gIQAXlh6pJ_story.html', date: '2011-08-29' },
 { title: 'CDC, U.S. Public Health Service Syphilis Study at Tuskegee (related context)', url: 'https://www.cdc.gov/tuskegee/timeline.htm', date: '2023' },
 { title: 'Wellesley College, Susan Reverby\'s Research on the Guatemala Experiments', url: 'https://www.wellesley.edu/albright/about/faculty/reverby', date: '2023' },
 ],
};

export default function GuatemalaSyphilisExperimentsPage() {
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
