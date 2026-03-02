'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowLeft, AlertTriangle, Users, Calendar, FileText, ExternalLink, Scale, ShieldAlert, Skull } from 'lucide-react';
import GlitchText from '@/components/effects/GlitchText';

const investigation = {
 title: 'No-Knock Raids',
 subtitle: 'Breaking Down Doors: How Military-Style Nighttime Raids Kill Innocent Americans in Their Own Homes',
 severity: 'critical',
 status: 'ONGOING',
 summary: 'Every year, American police execute an estimated 20,000 or more no-knock warrants - breaking down doors of private homes, often in the middle of the night, using battering rams, flash-bang grenades, and armed SWAT teams. These raids routinely target the wrong addresses, kill innocent people, and terrorize families - with minimal accountability for officers or the judges who sign the warrants. On March 13, 2020, Louisville Metro Police officers shot and killed 26-year-old Breonna Taylor in her bed during a botched no-knock raid based on a warrant containing false information. In 2010, Detroit SWAT shot and killed 7-year-old Aiyana Stanley-Jones during a raid on the wrong apartment while she slept on a couch. In 2014, a flash-bang grenade tossed into a crib critically burned 19-month-old Bounkham"Bou Bou"Phonesavanh in a wrong-address raid in Georgia. Despite these tragedies, no-knock warrants continue to be issued with little judicial scrutiny. Research by the New York Times found that no-knock raids killed at least 94 civilians and 13 officers between 2010 and 2016 alone. The practice disproportionately targets Black and Latino communities and has been condemned as a violation of the Fourth Amendment\'s protection against unreasonable searches. Breonna Taylor\'s death sparked nationwide movement to ban no-knock warrants, yet most jurisdictions continue to permit them.',
 keyFigures: [
 { name: 'Breonna Taylor', role: '26-year-old EMT killed in her bed by Louisville PD during a botched no-knock raid on March 13, 2020', href: '/entities/individuals/breonna-taylor', status: 'Killed (2020)' },
 { name: 'Aiyana Stanley-Jones', role: '7-year-old girl shot and killed by Detroit SWAT during a raid on the wrong apartment in 2010', href: '/entities/individuals/aiyana-stanley-jones', status: 'Killed (2010)' },
 { name: 'Bounkham"Bou Bou"Phonesavanh', role: '19-month-old critically burned by flash-bang grenade thrown into his crib during a wrong-address raid in Georgia', href: '/entities/individuals/bounkham-phonesavanh', status: 'Injured (2014)' },
 { name: 'Amir Locke', role: '22-year-old shot and killed by Minneapolis SWAT while sleeping on a couch during a no-knock warrant execution in 2022', href: '/entities/individuals/amir-locke', status: 'Killed (2022)' },
 { name: 'Kenneth Walker', role: 'Breonna Taylor\'s boyfriend who fired a warning shot thinking intruders were breaking in; initially charged with attempted murder', href: '/entities/individuals/kenneth-walker', status: 'Charges dropped' },
 { name: 'Brett Hankison', role: 'Louisville officer fired for blindly shooting into Breonna Taylor\'s apartment; acquitted of wanton endangerment in state court', href: '/entities/individuals/brett-hankison', status: 'Convicted federally (2022)' },
 { name: 'Joshua Jaynes', role: 'Detective who obtained the Breonna Taylor warrant using false information in the affidavit', href: '/entities/individuals/joshua-jaynes', status: 'Fired; convicted federally (2022)' },
 { name: 'Joseph Weekley', role: 'Detroit SWAT officer who shot 7-year-old Aiyana Stanley-Jones; two mistrials, charges eventually dismissed', href: '/entities/individuals/joseph-weekley', status: 'Charges dismissed' },
 { name: 'Tamika Palmer', role: 'Breonna Taylor\'s mother who became a leading advocate for banning no-knock warrants nationwide', href: '/entities/individuals/tamika-palmer', status: 'Active' },
 { name: 'Daniel Cameron', role: 'Kentucky AG who presented Breonna Taylor case to grand jury without recommending murder charges against officers', href: '/entities/individuals/daniel-cameron', status: 'Active' },
 { name: 'Kathryn Barger', role: 'Activist and researcher who has documented hundreds of botched no-knock raids across the United States', href: '/entities/individuals/kathryn-barger', status: 'Active' },
 { name: 'Radley Balko', role: 'Journalist who has documented no-knock raid abuses extensively in his book"Rise of the Warrior Cop"', href: '/entities/individuals/radley-balko', status: 'Active' },
 { name: 'Rand Paul', role: 'Senator who introduced the Justice for Breonna Taylor Act to ban federal no-knock warrants', href: '/entities/individuals/rand-paul', status: 'Active' },
 ],
 timeline: [
 { date: '1970', event: 'No-knock warrants first authorized at federal level in Comprehensive Drug Abuse Prevention and Control Act' },
 { date: '1974', event: 'Federal no-knock authority repealed after widespread abuses, but states continue authorizing them independently' },
 { date: '1995', event: 'Wilson v. Arkansas: Supreme Court rules officers must generally knock and announce but allows exceptions for exigent circumstances' },
 { date: '1997', event: 'Richards v. Wisconsin: Court rules no blanket"drug exception"to knock-and-announce, but officers can use case-by-case exceptions' },
 { date: '2006', event: 'Hudson v. Michigan: Supreme Court rules evidence from knock-and-announce violations is NOT excluded - effectively removing the deterrent' },
 { date: '2010-MAY-16', event: 'Detroit SWAT kills 7-year-old Aiyana Stanley-Jones during a raid on the wrong apartment while she sleeps on a couch' },
 { date: '2011-MAY', event: 'Former Marine Jose Guerena shot 71 times by Pima County SWAT during no-knock raid; he never fired his weapon' },
 { date: '2014-MAY', event: '19-month-old Bou Bou Phonesavanh critically burned by flash-bang grenade thrown into his crib in wrong-address raid in Georgia' },
 { date: '2017-JUL', event: 'Minneapolis officer kills Justine Damond after she called 911 to report a possible assault; officer convicted of murder' },
 { date: '2020-MAR-13', event: 'Louisville Metro PD officers execute no-knock warrant, shoot and kill Breonna Taylor in her bed; boyfriend charged with attempted murder' },
 { date: '2020-JUN', event: 'Breonna Taylor\'s death sparks nationwide protests and movement to ban no-knock warrants' },
 { date: '2020-JUN', event: 'Louisville City Council passes Breonna\'s Law banning no-knock warrants in Louisville' },
 { date: '2020-SEP', event: 'Kentucky AG Daniel Cameron presents case to grand jury without recommending murder charges; only wanton endangerment charge for one officer' },
 { date: '2022-FEB-02', event: 'Minneapolis SWAT kills 22-year-old Amir Locke during no-knock warrant execution; Locke was not named in warrant' },
 { date: '2022-AUG', event: 'Four Louisville officers, including Joshua Jaynes, federally charged with civil rights violations in Breonna Taylor case' },
 { date: '2022', event: 'Federal Department of Justice bans no-knock warrants for federal agents except in cases of imminent threat to life' },
 { date: '2023', event: 'Jaynes and Hankison convicted on federal charges; sentenced to federal prison for their roles in Taylor raid' },
 { date: '2024', event: 'Despite reform movements, most U.S. jurisdictions continue to permit no-knock warrants; only 4 states have banned them' },
 ],
 legalOutcomes: [
 { defendant: 'Brett Hankison', charge: 'Deprivation of civil rights for blindly firing into Breonna Taylor\'s apartment', outcome: 'Acquitted in Kentucky state court of wanton endangerment; convicted in federal court; sentenced to approximately 13 years' },
 { defendant: 'Joshua Jaynes', charge: 'Federal civil rights violations; falsifying the warrant affidavit for the Breonna Taylor raid', outcome: 'Convicted on federal charges in 2022; sentenced to federal prison for lying in warrant application' },
 { defendant: 'Joseph Weekley', charge: 'Involuntary manslaughter for killing 7-year-old Aiyana Stanley-Jones in Detroit', outcome: 'Two mistrials; all charges eventually dismissed; Weekley returned to active duty' },
 { defendant: 'City of Louisville', charge: 'Wrongful death of Breonna Taylor', outcome: '$12 million settlement with Taylor family; comprehensive police reform agreement in 2022' },
 { defendant: 'Habersham County, GA (Phonesavanh)', charge: 'Negligence in flash-bang grenade deployment that burned 19-month-old infant', outcome: 'Grand jury declined to indict the SWAT team; county paid $3.6 million settlement for medical bills' },
 { defendant: 'Minneapolis (Amir Locke)', charge: 'Death of 22-year-old Amir Locke during no-knock warrant execution', outcome: 'No criminal charges against officers; interim chief imposed moratorium on no-knock warrants' },
 { defendant: 'City of Detroit (Stanley-Jones)', charge: 'Wrongful death of 7-year-old during SWAT raid on wrong apartment', outcome: '$8.25 million settlement; no officers criminally convicted' },
 { defendant: 'DOJ Investigation of Louisville PD', charge: 'Pattern-or-practice investigation of LMPD', outcome: 'DOJ found pattern of unconstitutional policing including unlawful stops, excessive force, and discriminatory policing' },
 ],
 charges: [
 { statute: '4th Amendment - Unreasonable Search and Seizure', description: 'No-knock warrants bypass the constitutional requirement to knock and announce, shocking residents into potentially lethal defensive reactions', count: '20,000+ no-knock warrants executed annually; untold number of wrong-address raids' },
 { statute: 'Deprivation of Rights Under Color of Law (18 U.S.C. § 242)', description: 'Officers who use excessive force or falsify warrant applications violate civil rights under color of law', count: 'Federal charges brought in Taylor case - rare accountability for raid-related deaths' },
 { statute: 'Falsifying Warrant Affidavits (18 U.S.C. § 1001)', description: 'Detective Joshua Jaynes included false information in the Taylor warrant affidavit to obtain judicial approval', count: 'Studies suggest warrant applications for no-knock raids receive minimal judicial scrutiny;"rubber stamped"' },
 { statute: '14th Amendment - Equal Protection', description: 'No-knock warrants disproportionately executed in Black and Latino neighborhoods', count: 'ACLU data shows communities of color subjected to no-knock raids at significantly higher rates' },
 { statute: 'Involuntary Manslaughter / Reckless Homicide (State)', description: 'Officers who kill innocent people during no-knock raids through reckless conduct', count: 'At least 94 civilians and 13 officers killed in no-knock raids 2010-2016 (NYT investigation)' },
 { statute: 'Castle Doctrine (State Laws)', description: 'Homeowners who defend against unannounced intruders exercising legal rights face criminal charges when raiders are police', count: 'Kenneth Walker charged with attempted murder for defending home; charges dropped after Breonna Taylor outcry' },
 { statute: 'Pattern-or-Practice Violations (34 U.S.C. § 12601)', description: 'Louisville PD and other departments found to engage in systemic unconstitutional policing including routine no-knock raids', count: '2023 DOJ report found Louisville PD violated constitutional rights through discriminatory policing practices' },
 { statute: 'Child Endangerment (State Laws)', description: 'Deploying flash-bang grenades and conducting armed raids in homes with children present', count: 'Bou Bou Phonesavanh (19 months, burned); Aiyana Stanley-Jones (7, killed); countless children traumatized' },
 ],
 coverup: [
 'Louisville police initially filed an incident report listing Breonna Taylor\'s injuries as"none"- despite shooting her multiple times and killing her',
 'Detective Joshua Jaynes falsified the no-knock warrant affidavit claiming a postal inspector confirmed suspicious packages at Taylor\'s address - the postal inspector denied ever being contacted',
 'Kentucky AG Daniel Cameron told the public that the grand jury"agreed"not to charge officers with Taylor\'s death, but grand jurors later came forward saying they were never given the option to consider homicide charges',
 'After killing 7-year-old Aiyana Stanley-Jones, Detroit SWAT initially blamed her grandmother for grabbing the officer\'s gun - forensic evidence proved this false',
 'Police routinely destroy or fail to preserve body camera footage from no-knock raids, making it impossible to verify officers\' accounts of events',
 'Judges sign no-knock warrants with minimal scrutiny - some judges have signed dozens in a single day,"rubber stamping"applications without meaningful review of probable cause',
 'The true number of no-knock raids is unknown because most jurisdictions do not track or report them; the estimated 20,000+ figure is likely a significant undercount',
 'After the Bou Bou Phonesavanh case, Habersham County officials initially claimed the SWAT team"didn\'t know"a toddler was in the home - but neighbors had told deputies about the child beforehand',
 'Kenneth Walker, Breonna Taylor\'s boyfriend, was arrested and charged with attempted murder of a police officer for firing a warning shot at what he believed were home invaders - charges that were only dropped after national outrage',
 ],
 sources: [
 { title: 'New York Times - Door-Busting Raids Leave Trail of Blood', url: 'https://www.nytimes.com/interactive/2017/03/18/us/forced-entry-warrant-drug-raid.html', date: '2017-03-18' },
 { title: 'Balko, Radley - Rise of the Warrior Cop: The Militarization of America\'s Police Forces', url: 'https://www.publicaffairsbooks.com/titles/radley-balko/rise-of-the-warrior-cop/9781610394574/', date: '2013' },
 { title: 'DOJ - Investigation of the Louisville/Jefferson County Metro Government and Louisville Metro Police Department', url: 'https://www.justice.gov/opa/pr/justice-department-finds-civil-rights-violations-louisville-jefferson-county-metro-government', date: '2023-03-08' },
 { title: 'Washington Post - Fatal Force Database', url: 'https://www.washingtonpost.com/graphics/investigations/police-shootings-database/', date: '2024' },
 { title: 'ACLU - The Case Against No-Knock Warrants', url: 'https://www.aclu.org/news/criminal-law-reform/no-knock-warrants-have-got-to-go', date: '2022' },
 { title: 'Louisville Courier Journal - Breonna Taylor Investigation', url: 'https://www.courier-journal.com/story/news/local/breonna-taylor/2020/05/12/breonna-taylor-shooting-what-we-know/3115870001/', date: '2020' },
 { title: 'NPR - The Door-Busting, Flash-Bang Raids Endangering Innocent Americans', url: 'https://www.npr.org/2022/02/08/1079128685/no-knock-warrants-amir-locke-breonna-taylor', date: '2022-02-08' },
 { title: 'Brennan Center for Justice - Ending No-Knock Warrants', url: 'https://www.brennancenter.org/our-work/research-reports/ending-no-knock-warrants', date: '2023' },
 { title: 'Hudson v. Michigan, 547 U.S. 586 (2006) - Supreme Court Decision', url: 'https://supreme.justia.com/cases/federal/us/547/586/', date: '2006' },
 ],
};

export default function NoKnockRaidsPage() {
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
