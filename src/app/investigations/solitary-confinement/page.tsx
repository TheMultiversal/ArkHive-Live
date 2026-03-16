'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowLeft, AlertTriangle, Users, Calendar, FileText, ExternalLink, Scale, ShieldAlert, Skull } from 'lucide-react';
import GlitchText from '@/components/effects/GlitchText';

const investigation = {
 title: 'Solitary Confinement',
 subtitle: 'Torture by Isolation: 80,000+ Americans Locked in Boxes the UN Calls Cruel, Inhuman, and Degrading',
 severity: 'critical',
 status: 'ONGOING',
 summary: 'At any given time, more than 80,000 Americans are held in solitary confinement (locked in concrete cells roughly 6 by 9 feet for 22 to 24 hours a day, sometimes for years or even decades. The United Nations Special Rapporteur on Torture has declared that solitary confinement exceeding 15 consecutive days constitutes torture, yet the United States routinely holds people in isolation for months, years, and in extreme cases, over 40 years. Albert Woodfox of the "Angola 3"spent 43 years in solitary) the longest documented case in American history. Kalief Browder, a 16-year-old held at Rikers Island for 3 years without trial, spent 2 years in solitary before his release; he committed suicide at age 22. ADX Florence, the federal supermax prison, holds inmates in near-total isolation indefinitely. Children as young as 14 are placed in solitary confinement. Solitary is used disproportionately against Black and Latino prisoners, mentally ill inmates, and LGBTQ+ individuals who are ostensibly placed in"protective custody."Research consistently shows that prolonged solitary confinement causes severe psychological damage including hallucinations, paranoia, self-harm, and psychosis, damage that is often irreversible.',
 keyFigures: [
 { name: 'Kalief Browder', role: 'Held 3 years at Rikers without trial (2 in solitary) for allegedly stealing a backpack; committed suicide at age 22', href: '/entities/individuals/kalief-browder', status: 'Deceased (2015)' },
 { name: 'Albert Woodfox', role: 'Angola 3 member who spent 43 years in solitary confinement at Louisiana State Penitentiary, longest in U.S. history', href: '/entities/individuals/albert-woodfox', status: 'Deceased (2022)' },
 { name: 'Herman Wallace', role: 'Angola 3 member held in solitary for 41 years; released 3 days before his death from liver cancer', href: '/entities/individuals/herman-wallace', status: 'Deceased (2013)' },
 { name: 'Robert King', role: 'Angola 3 member held in solitary for 29 years; exonerated and released in 2001; became anti-solitary advocate', href: '/entities/individuals/robert-king', status: 'Deceased (2023)' },
 { name: 'Thomas Silverstein', role: 'Federal prisoner held in solitary at ADX Florence for 36 years until his death, longest in federal custody', href: '/entities/individuals/thomas-silverstein', status: 'Deceased (2019)' },
 { name: 'Juan M\u00E9ndez', role: 'UN Special Rapporteur on Torture who declared solitary confinement exceeding 15 days constitutes torture', href: '/entities/individuals/juan-mendez', status: 'Active' },
 { name: 'Craig Haney', role: 'UC Santa Cruz psychologist whose research has documented the devastating psychological effects of solitary confinement', href: '/entities/individuals/craig-haney', status: 'Active' },
 { name: 'Burl Cain', role: 'Warden of Angola prison who maintained solitary confinement of Woodfox and Wallace for decades', href: '/entities/individuals/burl-cain', status: 'Active' },
 { name: 'Sandra Bland', role: 'Placed in isolation at Waller County Jail in Texas; found dead in her cell 3 days after traffic stop arrest', href: '/entities/individuals/sandra-bland', status: 'Deceased (2015)' },
 { name: 'Pelican Bay Prisoners', role: 'Hunger strikers at Pelican Bay SHU who organized 2011 and 2013 protests with 30,000+ participants demanding end to solitary', href: '/entities/individuals/pelican-bay-prisoners', status: 'Ongoing advocacy' },
 { name: 'President Obama', role: 'Banned federal solitary for juveniles in 2016; first sitting president to visit a federal prison', href: '/entities/individuals/barack-obama', status: 'Active' },
 { name: 'Five Omar Mualimm-ak', role: 'Spent 5 years in solitary in New York prisons; became leading activist for solitary confinement abolition', href: '/entities/individuals/five-omar-mualimm-ak', status: 'Active' },
 ],
 timeline: [
 { date: '1829', event: 'Eastern State Penitentiary in Philadelphia opens as first purpose-built solitary confinement facility; Dickens calls it"torture"' },
 { date: '1890', event: 'Supreme Court in In re Medley acknowledges that solitary confinement causes"violent insanity and suicide"- yet fails to ban it' },
 { date: '1972', event: 'Albert Woodfox placed in solitary at Angola prison in Louisiana; will remain there for 43 years' },
 { date: '1983', event: 'Federal Bureau of Prisons begins using long-term solitary after Silverstein kills guard; modern supermax era begins' },
 { date: '1989', event: 'Pelican Bay State Prison SHU opens in California; inmates held indefinitely based on gang validation, not behavior' },
 { date: '1994', event: 'ADX Florence ("Supermax") opens in Colorado; holds prisoners in near-total isolation for decades' },
 { date: '2010', event: 'Kalief Browder, age 16, arrested for allegedly stealing a backpack; held at Rikers Island without trial' },
 { date: '2011', event: 'Juan M\u00E9ndez, UN Special Rapporteur on Torture, declares solitary exceeding 15 days constitutes torture under international law' },
 { date: '2011-JUL', event: 'Pelican Bay SHU prisoners organize hunger strike; 6,600 inmates across California participate demanding end to indefinite solitary' },
 { date: '2013-JUL', event: 'Second Pelican Bay hunger strike: 30,000+ prisoners participate in largest prison hunger strike in U.S. history' },
 { date: '2013-JUN', event: 'Kalief Browder released after 3 years at Rikers (2 in solitary) without ever being tried; all charges dropped' },
 { date: '2015-JUN-06', event: 'Kalief Browder commits suicide at age 22, hanging himself at his family\'s home; his story sparks national outrage' },
 { date: '2015-JUL', event: 'Justice Kennedy writes in Davis v. Ayala that solitary confinement"exacts a terrible price"and warrants judicial review' },
 { date: '2016-JAN', event: 'President Obama bans solitary confinement for juveniles in federal prisons; calls for reform of solitary nationwide' },
 { date: '2016', event: 'Ashker v. Governor settlement ends indefinite solitary in California SHU based on gang validation' },
 { date: '2019', event: 'New York City Council passes Kalief\'s Law banning solitary for 19+ consecutive days and for vulnerable populations' },
 { date: '2021', event: 'HALT Solitary Confinement Act signed in New York restricting solitary to 15 consecutive days maximum' },
 { date: '2023', event: 'BOP data shows over 7,000 federal inmates held in restrictive housing; Mandela Rules violations continue nationwide' },
 ],
 legalOutcomes: [
 { defendant: 'California Department of Corrections (Ashker v. Governor)', charge: 'Indefinite solitary confinement in Pelican Bay SHU based on gang affiliation, not behavior', outcome: 'Settlement in 2015 ended indefinite SHU placement; moved 1,500+ inmates to general population' },
 { defendant: 'City of New York (Browder case)', charge: 'Holding 16-year-old for 3 years without trial; 2 years in solitary confinement', outcome: '$3.3 million settlement to Browder family after Kalief\'s suicide; Kalief\'s Law passed' },
 { defendant: 'Louisiana State Penitentiary (Angola 3)', charge: 'Holding Albert Woodfox in solitary for 43 years', outcome: 'Woodfox released in 2016 after court ordered release; state fought to maintain solitary for decades' },
 { defendant: 'ADX Florence / Bureau of Prisons', charge: 'Indefinite solitary confinement causing severe mental illness', outcome: 'Settlement in 2016 required mental health screening; conditions remain among harshest in the world' },
 { defendant: 'Waller County, TX (Sandra Bland)', charge: 'Death of Sandra Bland in solitary at county jail', outcome: '$1.9 million settlement; Sandra Bland Act passed requiring mental health training and diversion' },
 { defendant: 'Illinois (Rasho v. Walker)', charge: 'Failure to provide mental health care to prisoners in solitary confinement', outcome: 'Consent decree requiring mental health treatment; state repeatedly found in violation' },
 { defendant: 'Mississippi (Presley v. Epps)', charge: 'Conditions at Unit 32 of Mississippi State Penitentiary', outcome: 'Settlement required closure of solitary unit; deemed cruel and unusual punishment' },
 { defendant: 'Federal Bureau of Prisons', charge: 'Holding Thomas Silverstein in isolation for 36 years', outcome: 'No legal remedy; Silverstein died in custody in 2019 after longer continuous solitary than any federal inmate' },
 ],
 charges: [
 { statute: '8th Amendment, Cruel and Unusual Punishment', description: 'Prolonged solitary confinement causes severe psychological damage tantamount to torture', count: '80,000+ Americans in solitary at any time; thousands held for years or decades' },
 { statute: 'UN Standard Minimum Rules (Mandela Rules): Rule 44', description: 'Solitary confinement of more than 15 consecutive days defined as torture; indefinite or prolonged solitary is prohibited', count: 'U.S. routinely exceeds 15 days; many held for months, years, or decades' },
 { statute: 'Convention Against Torture (Articles 1 & 16)', description: 'United States is a signatory; solitary confinement as practiced in the U.S. meets the legal definition of torture', count: 'UN Special Rapporteur formally declared U.S. solitary practices constitute torture in 2011' },
 { statute: '14th Amendment, Due Process', description: 'Prisoners placed in solitary often have no meaningful hearing, no ability to challenge placement, and no defined end date', count: 'Tens of thousands placed in solitary through administrative decisions with no judicial review' },
 { statute: '14th Amendment, Equal Protection', description: 'Solitary confinement is imposed disproportionately on Black, Latino, and mentally ill prisoners', count: 'Black prisoners are 2-3x more likely to be placed in solitary than white prisoners in most states' },
 { statute: 'Americans with Disabilities Act (42 U.S.C. § 12132)', description: 'Mentally ill prisoners placed in solitary suffer exacerbated symptoms; isolation as treatment violates disability rights', count: 'An estimated 25-40% of solitary inmates have diagnosed mental illness' },
 { statute: 'International Covenant on Civil and Political Rights (Article 10)', description: 'Detained persons shall be treated with humanity and respect for inherent dignity, violated by prolonged isolation', count: 'U.S. is a signatory; UN Human Rights Committee has repeatedly criticized U.S. solitary practices' },
 { statute: 'Juvenile Justice, Convention on the Rights of the Child', description: 'Children subjected to solitary confinement in the U.S. despite international prohibitions', count: 'U.S. is the only UN member that has not ratified the CRC; children as young as 14 placed in solitary' },
 ],
 coverup: [
 'Prisons routinely relabel solitary confinement using euphemisms like"restrictive housing,""administrative segregation,""special housing unit,"or"security threat group management"to obscure the reality of torture',
 'The Bureau of Prisons refused to release comprehensive data on the number of people in solitary until forced by congressional inquiry, and the resulting numbers were widely believed to be underreported',
 'Albert Woodfox\'s conviction was overturned three times by federal courts, but Louisiana prosecutors appealed each time to keep him in solitary, the state fought for decades to maintain his isolation',
 'The death of Sandra Bland in solitary at Waller County Jail was initially ruled a suicide, with officials claiming she was"fine"- dashcam and bodycam footage later revealed a violent and unnecessary arrest',
 'California prisons placed inmates in indefinite SHU confinement based solely on alleged"gang validation"- a system where reading certain books or receiving certain mail could result in decades of isolation',
 'The psychological devastation of solitary has been known since 1890, when the Supreme Court acknowledged it caused"violent insanity"- yet 135+ years later, 80,000+ Americans remain in isolation',
 'Children placed in solitary in juvenile facilities are often documented as being in"room confinement "or" cool down"to avoid scrutiny from oversight agencies and courts',
 'Multiple corrections departments have fought against data collection and transparency requirements, making it impossible to accurately track the full scope of solitary confinement use nationwide',
 'Medical and mental health providers in prisons often rubber-stamp solitary placement despite clear evidence of psychological harm, effectively enabling institutional torture',
 ],
 sources: [
 { title: 'ACLU, Solitary Confinement: Torture in U.S. Prisons', url: 'https://www.aclu.org/issues/prisoners-rights/solitary-confinement', date: '2024' },
 { title: 'The New Yorker, Kalief Browder\'s Story', url: 'https://www.newyorker.com/magazine/2014/10/06/before-the-law', date: '2014-10-06' },
 { title: 'UN Special Rapporteur on Torture, Report on Solitary Confinement', url: 'https://www.ohchr.org/en/special-procedures/sr-torture', date: '2011' },
 { title: 'Solitary Watch, News from Solitary', url: 'https://solitarywatch.org/', date: '2024' },
 { title: 'Woodfox, Albert, Solitary: Unbroken by Four Decades in Solitary Confinement', url: 'https://groveatlantic.com/book/solitary/', date: '2019' },
 { title: 'Yale Law School, Liman Center for Public Interest: Time-in-Cell Report', url: 'https://law.yale.edu/centers-workshops/arthur-liman-center-public-interest-law', date: '2023' },
 { title: 'Haney, Craig, Mental Health Issues in Long-Term Solitary and "Supermax" Confinement (Crime & Delinquency)', url: 'https://journals.sagepub.com/doi/10.1177/0011128702239239', date: '2003' },
 { title: 'Obama, Barack, Why We Must Rethink Solitary Confinement (Washington Post op-ed)', url: 'https://www.washingtonpost.com/opinions/barack-obama-why-we-must-rethink-solitary-confinement/2016/01/25/29a361f2-c384-11e5-8965-0607e0e265ce_story.html', date: '2016-01-25' },
 { title: 'Frontline, Locked Up in America: Solitary Nation', url: 'https://www.pbs.org/wgbh/frontline/documentary/locked-up-in-america/', date: '2014' },
 ],
};

export default function SolitaryConfinementPage() {
 return (
 <div className="min-h-screen pt-20 lg:pt-24 pb-16">
 <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
 <Link href="/investigations"className="inline-flex items-center gap-2 text-zinc-400 hover:text-blood-500 transition-colors mb-6 pt-4"><ArrowLeft className="w-4 h-4"/>Back to Investigations</Link>
 <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="border-2 border-blood-800/60 bg-[rgba(0,12,35,0.65)] p-6 lg:p-8 mb-8">
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
 <div className="space-y-3">{investigation.keyFigures.map((figure, idx) => (<div key={idx} className="flex items-start justify-between p-3 bg-[rgba(0,20,55,0.40)] border border-[rgba(60,160,255,0.12)]"><div className="flex-1">{figure.href ? (<Link href={figure.href} className="font-bold text-blood-400 hover:text-blood-300 transition-colors">{figure.name}</Link>) : (<span className="font-bold glass-text">{figure.name}</span>)}<p className="text-sm text-zinc-400 mt-1">{figure.role}</p></div><span className="text-xs px-2 py-1 bg-[rgba(0,30,80,0.40)] text-zinc-400 border border-[rgba(60,160,255,0.18)] whitespace-nowrap ml-2">{figure.status}</span></div>))}</div>
 </motion.div>
 <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }} className="glass-card p-6">
 <h2 className="text-xl font-bold glass-text uppercase tracking-wider mb-4 flex items-center gap-2"><Scale className="w-5 h-5 text-blood-500"/>Applicable Charges &amp; Statutes</h2>
 <div className="space-y-3">{investigation.charges.map((charge, idx) => (<div key={idx} className="p-4 bg-[rgba(0,20,55,0.40)] border border-[rgba(60,160,255,0.12)]"><p className="font-bold text-blood-400 text-sm font-mono">{charge.statute}</p><p className="text-sm text-zinc-300 mt-1">{charge.description}</p><p className="text-xs text-blood-400 mt-1">{charge.count}</p></div>))}</div>
 </motion.div>
 </div>
 <div className="space-y-6">
 <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} className="glass-card p-6">
 <h3 className="text-lg font-bold glass-text uppercase tracking-wider mb-4 flex items-center gap-2"><Calendar className="w-4 h-4 text-blood-500"/>Timeline</h3>
 <div className="space-y-4">{investigation.timeline.map((item, idx) => (<div key={idx} className="relative pl-4 border-l-2 border-[rgba(60,160,255,0.12)]"><div className="absolute -left-[5px] top-0 w-2 h-2 bg-blood-500"/><p className="text-xs text-blood-500 font-mono">{item.date}</p><p className="text-sm text-zinc-300">{item.event}</p></div>))}</div>
 </motion.div>
 <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.1 }} className="glass-card p-6">
 <h3 className="text-lg font-bold glass-text uppercase tracking-wider mb-4 flex items-center gap-2"><Scale className="w-5 h-5 text-blood-500"/>Legal Outcomes</h3>
 <div className="space-y-3">{investigation.legalOutcomes.map((item, idx) => (<div key={idx} className="p-3 bg-[rgba(0,20,55,0.40)] border border-[rgba(60,160,255,0.12)]"><p className="font-bold glass-text text-sm">{item.defendant}</p><p className="text-xs text-zinc-400 mt-1">{item.charge}</p><p className="text-xs text-blood-400 mt-1">{item.outcome}</p></div>))}</div>
 </motion.div>
 <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.2 }} className="glass-card p-6">
 <h3 className="text-lg font-bold glass-text uppercase tracking-wider mb-4">Sources</h3>
 <div className="space-y-2">{investigation.sources.map((source, idx) => (<a key={idx} href={source.url} target="_blank"rel="noopener noreferrer"className="flex items-start gap-2 p-2 text-sm text-zinc-400 hover:text-blood-400 hover:bg-[rgba(0,20,55,0.40)] transition-colors"><ExternalLink className="w-4 h-4 mt-0.5 flex-shrink-0"/><div><span>{source.title}</span><span className="text-zinc-600 ml-2">({source.date})</span></div></a>))}</div>
 </motion.div>
 </div>
 </div>
 </div>
 </div>
 );
}
