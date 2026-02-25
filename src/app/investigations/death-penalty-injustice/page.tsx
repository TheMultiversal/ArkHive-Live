'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowLeft, AlertTriangle, Users, Calendar, FileText, ExternalLink, Scale, ShieldAlert, Skull } from 'lucide-react';
import GlitchText from '@/components/effects/GlitchText';

const investigation = {
  title: 'Death Penalty Injustice',
  subtitle: 'Executing the Innocent: Racial Bias, Botched Killings, and the Failure of America\'s Capital Punishment System',
  severity: 'critical',
  status: 'ONGOING',
  summary: 'The American death penalty system is a machinery of injustice that has executed innocent people, disproportionately targets Black defendants, and inflicts cruel and unusual punishment through botched executions. Since 1973, more than 190 people have been exonerated from death row  -  freed after being wrongfully convicted and, in many cases, coming within days or hours of execution. Despite comprising only 13% of the U.S. population, Black Americans make up 42% of death row inmates. A defendant is 4.5 times more likely to receive a death sentence if the victim is white. Cameron Todd Willingham was executed in Texas in 2004 despite mounting evidence of innocence  -  fire science experts concluded the arson evidence used to convict him was junk science. Intellectual disability has not fully prevented executions. The U.S. executed juveniles until Roper v. Simmons (2005). Botched executions using lethal injection have caused prolonged suffering in numerous cases. States have fought to keep execution drug sources secret. The Innocence Project has exonerated 375+ wrongfully convicted individuals through DNA evidence alone. The death penalty is applied not to the worst crimes, but to the poorest defendants with the worst lawyers.',
  keyFigures: [
    { name: 'Cameron Todd Willingham', role: 'Executed in Texas in 2004 for arson murder despite strong evidence of innocence; fire science debunked prosecution case', href: '/entities/individuals/cameron-todd-willingham', status: 'Executed (2004)' },
    { name: 'Barry Scheck', role: 'Co-founder of the Innocence Project who has helped exonerate hundreds of wrongfully convicted Americans', href: '/entities/individuals/barry-scheck', status: 'Active' },
    { name: 'Peter Neufeld', role: 'Co-founder of the Innocence Project; pioneer in DNA exoneration cases', href: '/entities/individuals/peter-neufeld', status: 'Active' },
    { name: 'Bryan Stevenson', role: 'Founder of Equal Justice Initiative, represented dozens of death row inmates; author of "Just Mercy"', href: '/entities/individuals/bryan-stevenson', status: 'Active' },
    { name: 'Anthony Ray Hinton', role: 'Spent 30 years on Alabama death row for murders he didn\'t commit; exonerated in 2015 through ballistics evidence', href: '/entities/individuals/anthony-ray-hinton', status: 'Exonerated (2015)' },
    { name: 'Sister Helen Prejean', role: 'Death penalty abolitionist and author of "Dead Man Walking"; spiritual advisor to death row inmates', href: '/entities/individuals/sister-helen-prejean', status: 'Active' },
    { name: 'Rick Perry', role: 'Texas Governor who allowed Willingham execution despite last-minute evidence of innocence; dissolved inquiry commission', href: '/entities/individuals/rick-perry', status: 'Active' },
    { name: 'Antonin Scalia', role: 'Supreme Court Justice who wrote that executing an innocent person is not unconstitutional if trial was fair', href: '/entities/individuals/antonin-scalia', status: 'Deceased (2016)' },
    { name: 'Kirk Bloodsworth', role: 'First American death row inmate exonerated by DNA evidence in 1993', href: '/entities/individuals/kirk-bloodsworth', status: 'Active' },
    { name: 'George Stinney Jr.', role: 'Youngest person executed in the U.S. in the 20th century  -  14-year-old Black boy executed in South Carolina in 1944', href: '/entities/individuals/george-stinney-jr', status: 'Executed (1944)' },
    { name: 'Kalief Browder', role: 'Held at Rikers Island for 3 years without trial; case highlighted systemic injustice though not death penalty', href: '/entities/individuals/kalief-browder', status: 'Deceased (2015)' },
    { name: 'Walter McMillian', role: 'Wrongfully sentenced to death in Alabama for a murder he didn\'t commit; exonerated by Bryan Stevenson in 1993', href: '/entities/individuals/walter-mcmillian', status: 'Deceased (2013)' },
  ],
  timeline: [
    { date: '1972', event: 'Furman v. Georgia: Supreme Court effectively halts all executions, finding death penalty applied arbitrarily and capriciously' },
    { date: '1976', event: 'Gregg v. Georgia: Supreme Court reinstates death penalty with "guided discretion" requirements; executions resume in 1977' },
    { date: '1984', event: 'Strickland v. Washington: Supreme Court sets low bar for effective counsel, enabling convictions with incompetent defense lawyers' },
    { date: '1986', event: 'Batson v. Kentucky: Court bans racial discrimination in jury selection  -  but prosecutors continue finding pretextual reasons' },
    { date: '1987', event: 'McCleskey v. Kemp: Court acknowledges statistical racial disparity but refuses to find equal protection violation without proof of intentional discrimination in individual case' },
    { date: '1989', event: 'Penry v. Lynaugh: Court allows execution of intellectually disabled defendants (not reversed until Atkins v. Virginia, 2002)' },
    { date: '1993', event: 'Kirk Bloodsworth becomes first American death row inmate exonerated by DNA evidence after serving 9 years' },
    { date: '1993', event: 'Walter McMillian exonerated from Alabama death row after Bryan Stevenson proves prosecution concealed evidence' },
    { date: '1999', event: 'Illinois Governor George Ryan discovers 13 death row inmates were innocent  -  more than had been executed; declares moratorium' },
    { date: '2002', event: 'Atkins v. Virginia: Supreme Court finally bans execution of intellectually disabled individuals' },
    { date: '2004-FEB-17', event: 'Cameron Todd Willingham executed in Texas despite arson experts saying fire evidence was "junk science"' },
    { date: '2005', event: 'Roper v. Simmons: Supreme Court bans execution of juveniles  -  U.S. was one of only 5 countries that still did so' },
    { date: '2009', event: 'Texas Forensic Science Commission investigation into Willingham case disrupted when Governor Perry replaces panel members' },
    { date: '2014', event: 'Clayton Lockett\'s botched execution in Oklahoma  -  he writhed and groaned for 43 minutes before dying of heart attack' },
    { date: '2015', event: 'Anthony Ray Hinton freed from Alabama death row after 30 years; conviction based on flawed ballistics testimony' },
    { date: '2020', event: 'Federal government resumes executions after 17-year hiatus, executing 13 people in 6 months under Trump administration' },
    { date: '2022', event: 'Number of death row exonerations reaches 190; one exoneration for approximately every 8.3 executions' },
    { date: '2023', event: 'Studies show at least 4.1% of death sentences are imposed on innocent defendants (PNAS)' },
  ],
  legalOutcomes: [
    { defendant: 'State of Texas (Willingham case)', charge: 'Executing an innocent man despite evidence of innocence', outcome: 'Governor Perry dissolved the Texas Forensic Science Commission investigation; no accountability' },
    { defendant: 'State of Alabama (Hinton case)', charge: 'Wrongful conviction and 30-year imprisonment on death row', outcome: 'Anthony Ray Hinton exonerated in 2015; state refused to compensate him for 30 years of wrongful imprisonment' },
    { defendant: 'State of South Carolina (Stinney case)', charge: 'Execution of 14-year-old George Stinney Jr. after 10-minute trial', outcome: 'Conviction vacated in 2014  -  70 years after execution; judge found "fundamental, constitutional violations"' },
    { defendant: 'Clayton Lockett (Oklahoma botched execution)', charge: 'Cruel and unusual punishment during execution', outcome: 'Lockett suffered 43 minutes; Oklahoma temporarily halted executions, then resumed; lawsuit settled' },
    { defendant: 'Alabama (Walter McMillian)', charge: 'Framing innocent man for murder based on coerced testimony', outcome: 'Exonerated in 1993; prosecution had concealed evidence; no prosecutors or police disciplined' },
    { defendant: 'Federal Government (2020 executions)', charge: 'Resuming federal executions after 17-year moratorium', outcome: '13 people executed July 2020-January 2021; multiple had claims of intellectual disability or innocence' },
    { defendant: 'Various (Death Row Exonerations)', charge: 'Wrongful conviction of 190+ people sentenced to death', outcome: '190+ exonerations since 1973; victims spent average of 11 years on death row before exoneration' },
    { defendant: 'Pharmaceutical & Drug Companies', charge: 'Supplying execution drugs despite medical ethics prohibitions', outcome: 'States have passed secrecy laws hiding drug suppliers; multiple lawsuits challenging constitutionality' },
  ],
  charges: [
    { statute: '8th Amendment  -  Cruel and Unusual Punishment', description: 'Botched executions, execution of the innocent, intellectually disabled, and juveniles constitute cruel and unusual punishment', count: '50+ documented botched executions since 1977; prolonged suffering lasting up to 2+ hours' },
    { statute: '14th Amendment  -  Equal Protection Clause', description: 'Racial bias in death penalty application: Black defendants 4.5x more likely to receive death sentence when victim is white', count: '42% of death row is Black (13% of population); killer-of-white-victim 3-4x more likely to be sentenced to death' },
    { statute: '6th Amendment  -  Right to Effective Counsel', description: 'Indigent capital defendants routinely receive incompetent, under-funded, or sleeping defense attorneys', count: 'Studies show death penalty representation funding averages $3-$5/hour in some jurisdictions' },
    { statute: 'Brady v. Maryland (Prosecutorial Misconduct)', description: 'Prosecutors in capital cases routinely withhold exculpatory evidence from defense', outcome: 'Prosecutorial misconduct identified in 30%+ of death row exonerations (DPIC data)', count: 'At least 63 of 190+ exonerations involved prosecutorial misconduct' },
    { statute: 'International Covenant on Civil and Political Rights (Article 6)', description: 'Right to life protections and restrictions on death penalty; U.S. is the only Western democracy that retains capital punishment', count: 'U.S. ranks 6th globally in executions (behind China, Iran, Saudi Arabia, Egypt, Iraq)' },
    { statute: 'UN Convention on the Rights of the Child (Article 37)', description: 'Prohibits death penalty for offenses committed by persons below 18  -  U.S. violated until 2005', count: '22 juveniles executed in the U.S. between 1976 and 2005' },
    { statute: 'Junk Science / Wrongful Conviction', description: 'Death sentences based on discredited forensic methods: arson "science," bite mark analysis, hair microscopy, and flawed ballistics', count: 'NAS Report (2009) found most forensic disciplines lack scientific validity; multiple death row exonerations resulted' },
    { statute: 'Due Process (5th/14th Amendment)', description: 'Death row inmates spend an average of 18+ years awaiting execution; prolonged confinement itself may constitute punishment', count: '2,500+ people on death row as of 2024; average time on death row exceeds 20 years in many states' },
  ],
  coverup: [
    'Texas Governor Rick Perry replaced members of the Texas Forensic Science Commission days before they were to issue findings that Willingham was innocent  -  effectively killing the investigation',
    'Multiple states have passed secrecy laws hiding the identity of execution drug suppliers, preventing legal challenges to drugs that have caused botched executions',
    'The Supreme Court in McCleskey v. Kemp (1987) acknowledged overwhelming statistical evidence of racial bias in death sentencing but refused to intervene, demanding proof of intentional discrimination in each individual case',
    'Prosecutorial misconduct  -  including withholding evidence, using jailhouse informants, and racial jury selection  -  has been documented in over 30% of death row exonerations, yet prosecutors are almost never disciplined',
    'The American Bar Association has found that states systematically fail to provide competent counsel to indigent capital defendants, but courts have set the bar for "ineffective assistance" so low that sleeping lawyers have been deemed adequate',
    'The Trump administration\'s rush to execute 13 federal prisoners in 6 months (2020-2021) overrode pending clemency petitions, intellectual disability claims, and COVID-19 outbreaks among legal teams',
    'George Stinney Jr., a 14-year-old Black boy, was executed in 1944 after a trial lasting less than a day with an all-white jury, no defense witnesses, and no appeals  -  his conviction was not vacated until 70 years later',
    'Studies estimate that at least 4.1% of death row defendants are innocent (PNAS, 2014), meaning the U.S. has almost certainly executed dozens of innocent people since 1976',
    'Death row exonerees often receive no compensation  -  18 states have no wrongful conviction compensation statutes, and those that do often cap payments far below the value of decades lost',
  ],
  sources: [
    { title: 'Death Penalty Information Center  -  Innocence Database', url: 'https://deathpenaltyinfo.org/policy-issues/innocence', date: '2024' },
    { title: 'The Innocence Project  -  DNA Exonerations in the United States', url: 'https://innocenceproject.org/dna-exonerations-in-the-united-states/', date: '2024' },
    { title: 'Stevenson, Bryan  -  Just Mercy: A Story of Justice and Redemption', url: 'https://justmercy.eji.org/', date: '2014' },
    { title: 'Equal Justice Initiative  -  Death Penalty', url: 'https://eji.org/issues/death-penalty/', date: '2024' },
    { title: 'PNAS  -  Rate of False Conviction of Criminal Defendants Who Are Sentenced to Death', url: 'https://www.pnas.org/doi/10.1073/pnas.1306417111', date: '2014-04-28' },
    { title: 'New Yorker  -  Trial by Fire: Did Texas Execute an Innocent Man?', url: 'https://www.newyorker.com/magazine/2009/09/07/trial-by-fire', date: '2009-09-07' },
    { title: 'Prejean, Helen  -  Dead Man Walking (book)', url: 'https://www.penguinrandomhouse.com/books/155170/dead-man-walking-by-helen-prejean/', date: '1993' },
    { title: 'Death Penalty Information Center  -  Race and the Death Penalty', url: 'https://deathpenaltyinfo.org/policy-issues/race', date: '2024' },
    { title: 'Bureau of Justice Statistics  -  Capital Punishment', url: 'https://bjs.ojp.gov/topics/corrections/capital-punishment', date: '2023' },
  ],
};

export default function DeathPenaltyInjusticePage() {
  return (
    <div className="min-h-screen pt-20 lg:pt-24 pb-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <Link href="/investigations" className="inline-flex items-center gap-2 text-zinc-400 hover:text-blood-500 transition-colors mb-6 pt-4"><ArrowLeft className="w-4 h-4" />Back to Investigations</Link>
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="border-2 border-blood-800/60 bg-black/80 p-6 lg:p-8 mb-8">
          <div className="flex items-center gap-3 mb-4"><span className="px-3 py-1 text-xs font-bold uppercase border border-red-500/30 bg-red-500/20 text-red-400">{investigation.severity}</span><span className="px-3 py-1 text-xs font-bold uppercase border border-zinc-500/30 bg-zinc-500/20 text-zinc-400">{investigation.status}</span></div>
          <h1 className="text-3xl lg:text-4xl font-black text-white uppercase tracking-wider mb-2"><GlitchText text={investigation.title} /></h1>
          <p className="text-lg text-blood-500 font-bold mb-4">{investigation.subtitle}</p>
          <p className="text-zinc-400 leading-relaxed">{investigation.summary}</p>
        </motion.div>
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.15 }} className="glass-card p-6 mb-8 border-l-4 border-blood-600">
          <h2 className="text-xl font-bold text-white uppercase tracking-wider mb-4 flex items-center gap-2"><ShieldAlert className="w-5 h-5 text-blood-500" />The Cover-Up</h2>
          <div className="space-y-3">{investigation.coverup.map((item, idx) => (<div key={idx} className="p-3 bg-red-950/20 border border-red-500/30"><p className="text-sm text-zinc-300">{item}</p></div>))}</div>
        </motion.div>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-8">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }} className="glass-card p-6">
              <h2 className="text-xl font-bold text-white uppercase tracking-wider mb-4 flex items-center gap-2"><Users className="w-5 h-5 text-blood-500" />Key Figures</h2>
              <div className="space-y-3">{investigation.keyFigures.map((figure, idx) => (<div key={idx} className="flex items-start justify-between p-3 bg-zinc-900/50 border border-zinc-800"><div className="flex-1">{figure.href ? (<Link href={figure.href} className="font-bold text-blood-400 hover:text-blood-300 transition-colors">{figure.name}</Link>) : (<span className="font-bold text-white">{figure.name}</span>)}<p className="text-sm text-zinc-400 mt-1">{figure.role}</p></div><span className="text-xs px-2 py-1 bg-zinc-800 text-zinc-400 border border-zinc-700 whitespace-nowrap ml-2">{figure.status}</span></div>))}</div>
            </motion.div>
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }} className="glass-card p-6">
              <h2 className="text-xl font-bold text-white uppercase tracking-wider mb-4 flex items-center gap-2"><Scale className="w-5 h-5 text-blood-500" />Applicable Charges &amp; Statutes</h2>
              <div className="space-y-3">{investigation.charges.map((charge, idx) => (<div key={idx} className="p-4 bg-zinc-900/50 border border-zinc-800"><p className="font-bold text-blood-400 text-sm font-mono">{charge.statute}</p><p className="text-sm text-zinc-300 mt-1">{charge.description}</p><p className="text-xs text-red-400 mt-1">{charge.count}</p></div>))}</div>
            </motion.div>
          </div>
          <div className="space-y-6">
            <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} className="glass-card p-6">
              <h3 className="text-lg font-bold text-white uppercase tracking-wider mb-4 flex items-center gap-2"><Calendar className="w-4 h-4 text-blood-500" />Timeline</h3>
              <div className="space-y-4">{investigation.timeline.map((item, idx) => (<div key={idx} className="relative pl-4 border-l-2 border-zinc-800"><div className="absolute -left-[5px] top-0 w-2 h-2 rounded-full bg-blood-500" /><p className="text-xs text-blood-500 font-mono">{item.date}</p><p className="text-sm text-zinc-300">{item.event}</p></div>))}</div>
            </motion.div>
            <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.1 }} className="glass-card p-6">
              <h3 className="text-lg font-bold text-white uppercase tracking-wider mb-4 flex items-center gap-2"><Scale className="w-5 h-5 text-blood-500" />Legal Outcomes</h3>
              <div className="space-y-3">{investigation.legalOutcomes.map((item, idx) => (<div key={idx} className="p-3 bg-zinc-900/50 border border-zinc-800"><p className="font-bold text-white text-sm">{item.defendant}</p><p className="text-xs text-zinc-400 mt-1">{item.charge}</p><p className="text-xs text-blood-400 mt-1">{item.outcome}</p></div>))}</div>
            </motion.div>
            <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.2 }} className="glass-card p-6">
              <h3 className="text-lg font-bold text-white uppercase tracking-wider mb-4">Sources</h3>
              <div className="space-y-2">{investigation.sources.map((source, idx) => (<a key={idx} href={source.url} target="_blank" rel="noopener noreferrer" className="flex items-start gap-2 p-2 text-sm text-zinc-400 hover:text-blood-400 hover:bg-zinc-900/50 transition-colors"><ExternalLink className="w-4 h-4 mt-0.5 flex-shrink-0" /><div><span>{source.title}</span><span className="text-zinc-600 ml-2">({source.date})</span></div></a>))}</div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}
