'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowLeft, AlertTriangle, Users, Calendar, FileText, ExternalLink, Scale, ShieldAlert, Skull } from 'lucide-react';
import GlitchText from '@/components/effects/GlitchText';

const investigation = {
  title: 'Mass Incarceration',
  subtitle: '5% of the World\'s Population, 25% of Its Prisoners — The War on Drugs as Racial Control',
  severity: 'critical',
  status: 'ONGOING CRISIS',
  summary: 'The United States incarcerates more people than any nation in human history — 2.3 million people behind bars, with another 4.9 million on probation or parole. The U.S. has 5% of the world\'s population but 25% of its prisoners. This system was not accidental. It was deliberately constructed through decades of racially targeted policy beginning with Nixon\'s War on Drugs — which his own domestic policy advisor John Ehrlichman later confessed was designed to criminalize Black communities and the anti-war left. "We knew we couldn\'t make it illegal to be either against the war or Black," Ehrlichman told journalist Dan Baum in 1994, "but by getting the public to associate the hippies with marijuana and Blacks with heroin, and then criminalizing both heavily, we could disrupt those communities." Reagan escalated the drug war with mandatory minimum sentences and the 100-to-1 crack-to-powder cocaine sentencing disparity — targeting the form of cocaine used predominantly in Black communities while the powder form favored by white users carried dramatically lighter penalties. Clinton\'s 1994 crime bill — championed by then-Senator Joe Biden — supercharged mass incarceration with three-strikes provisions, expanded death penalty offenses, and $9.7 billion for prison construction. The 13th Amendment\'s exception clause — "except as punishment for crime" — has been exploited to create a modern system of forced labor generating billions in revenue. Private prison corporations like CoreCivic and GEO Group profit directly from human caging, spending millions lobbying for harsher sentencing. The school-to-prison pipeline funnels Black and brown children out of underfunded schools and into the criminal justice system. Black Americans are incarcerated at nearly five times the rate of white Americans despite comparable rates of drug use. Mass incarceration has devastated communities, destroyed families, and created a permanent underclass of formerly incarcerated people stripped of voting rights, employment opportunities, and social mobility.',
  keyFigures: [
    { name: 'Richard Nixon', role: '37th President. Launched the "War on Drugs" in 1971, which his advisor John Ehrlichman later admitted was designed to target Black communities and the anti-war left rather than address any genuine public health crisis.', href: '/entities/individuals/richard-nixon', status: 'Deceased (1994)' },
    { name: 'John Ehrlichman', role: 'Nixon\'s domestic policy advisor. Confessed in a 1994 interview: "We knew we couldn\'t make it illegal to be either against the war or Black, but by getting the public to associate the hippies with marijuana and Blacks with heroin, and then criminalizing both heavily, we could disrupt those communities."', href: '/entities/individuals/john-ehrlichman', status: 'Deceased (1999)' },
    { name: 'Ronald Reagan', role: '40th President. Massively escalated the War on Drugs, signed the Anti-Drug Abuse Act of 1986 establishing mandatory minimums and the 100:1 crack-to-powder cocaine sentencing disparity that devastated Black communities.', href: '/entities/individuals/ronald-reagan', status: 'Deceased (2004)' },
    { name: 'Bill Clinton', role: '42nd President. Signed the Violent Crime Control and Law Enforcement Act of 1994 — the largest crime bill in American history — which funded 100,000 new police officers, expanded the death penalty, created three-strikes provisions, and allocated $9.7B for prison construction.', href: '/entities/individuals/bill-clinton', status: 'Former President' },
    { name: 'Joe Biden', role: 'U.S. Senator (D-DE) who authored and championed the 1994 crime bill and the 1986 Anti-Drug Abuse Act. Boasted about making sentences "tougher than the Republicans." Later as President, acknowledged the harm but took limited action.', href: '/entities/individuals/joe-biden', status: 'Former President' },
    { name: 'Kamala Harris', role: 'Former San Francisco DA and California AG. As DA, increased felony conviction rates from 52% to 67%. As AG, fought to keep nonviolent offenders in prison to maintain California\'s prison labor force. Her office argued against early release, citing the need for cheap inmate labor for firefighting.', href: '/entities/individuals/kamala-harris', status: 'Former VP' },
    { name: 'Jeff Sessions', role: 'Attorney General (2017-2018). Reversed Obama-era guidance on reducing marijuana prosecutions, reinstated the harshest charging policies for drug offenses, and directed federal prosecutors to pursue the most severe penalties available.', href: '/entities/individuals/jeff-sessions', status: 'Former AG' },
    { name: 'Joe Arpaio', role: 'Sheriff of Maricopa County, Arizona (1993-2017). Self-proclaimed "America\'s toughest sheriff." Operated open-air "Tent City" jail in desert heat, conducted racial profiling operations, and was convicted of criminal contempt for violating court orders — then pardoned by Trump.', href: '/entities/individuals/joe-arpaio', status: 'Pardoned' },
    { name: 'Newt Gingrich', role: 'Speaker of the House (1995-1999). Championed "tough on crime" legislation and advocated for mandatory death penalty for drug smugglers. His Contract with America expanded federal crime and sentencing provisions.', href: '/entities/individuals/newt-gingrich', status: 'Former Speaker' },
    { name: 'Mark Ciavarella', role: 'Judge in Luzerne County, Pennsylvania. Convicted in the "Kids for Cash" scandal — accepting $2.6M in bribes from private juvenile detention facilities in exchange for sentencing thousands of children, many for trivial offenses, to private prisons.', href: '/entities/individuals/mark-ciavarella', status: 'Convicted — 28 years' },
    { name: 'Michael Conahan', role: 'Judge who conspired with Ciavarella in the Kids for Cash scheme, facilitating the closure of a public juvenile facility to redirect children to the for-profit PA Child Care center paying their kickbacks.', href: '/entities/individuals/michael-conahan', status: 'Convicted — 17.5 years' },
    { name: 'Damon Hininger', role: 'CEO of CoreCivic (formerly Corrections Corporation of America), the largest private prison company. CoreCivic operates 44 facilities housing approximately 45,000 people. The company has spent millions lobbying for tougher sentencing laws.', href: '/entities/individuals/damon-hininger', status: 'Former CEO, CoreCivic' },
    { name: 'George Zoley', role: 'Founder and CEO of GEO Group, the second largest private prison company. GEO Group operates 64 facilities housing 43,000 people. The company donated millions to political campaigns and lobbied extensively for immigration detention contracts.', href: '/entities/individuals/george-zoley', status: 'GEO Group Executive' },
    { name: 'Rick Scott', role: 'Governor of Florida (2011-2019). Privatized prison healthcare and food services, fought against felon re-enfranchisement, and expanded the state\'s reliance on private prisons during his tenure.', href: '/entities/individuals/rick-scott', status: 'U.S. Senator (R-FL)' },
  ],
  timeline: [
    { date: '1865', event: '13th Amendment ratified, abolishing slavery "except as a punishment for crime whereof the party shall have been duly convicted." This exception clause becomes the legal foundation for convict leasing and modern prison labor.' },
    { date: '1865-1941', event: 'Convict leasing system: Southern states arrest Black men on trivial charges (vagrancy, "loitering") and lease them to plantations, mines, and railroads. Mortality rates exceed those of slavery. Thousands die under brutal conditions.' },
    { date: '1965-1970', event: 'U.S. prison population holds steady at approximately 200,000. Crime is treated as a social issue requiring community investment, mental health services, and economic opportunity.' },
    { date: 'June 17, 1971', event: 'Nixon declares drug abuse "public enemy number one" and launches the War on Drugs. Domestic policy advisor Ehrlichman later admits the real targets were Black Americans and anti-war activists.' },
    { date: '1973', event: 'New York passes the Rockefeller Drug Laws — the harshest drug sentencing statutes in the nation — mandating 15 years to life for possession of small amounts of narcotics. Becomes a model for other states.' },
    { date: '1980', event: 'U.S. prison population: approximately 329,000. Reagan\'s election begins the era of mass incarceration expansion.' },
    { date: '1983', event: 'Corrections Corporation of America (now CoreCivic) founded — the first for-profit private prison company. The commodification of human imprisonment begins.' },
    { date: '1986', event: 'Anti-Drug Abuse Act signed by Reagan. Establishes mandatory minimum sentences and the 100:1 crack-to-powder cocaine sentencing ratio — 5 grams of crack (prevalent in Black communities) triggers the same 5-year mandatory minimum as 500 grams of powder cocaine (prevalent in white communities).' },
    { date: '1988', event: 'Anti-Drug Abuse Act of 1988 creates the "drug czar" position and makes simple possession of crack cocaine a federal crime with a 5-year mandatory minimum — the only drug carrying a mandatory minimum for first-time possession.' },
    { date: '1990', event: 'U.S. prison population surpasses 1 million for the first time in American history. The prison-industrial complex is now a multi-billion dollar industry.' },
    { date: '1993', event: 'Three-strikes laws begin spreading across states. Washington State passes the first; California follows in 1994. Some offenders receive life sentences for nonviolent third offenses including petty theft.' },
    { date: 'September 13, 1994', event: 'Clinton signs the Violent Crime Control and Law Enforcement Act — the largest crime bill in history. Provides $9.7B for prison construction, funds 100,000 new police officers, expands the death penalty to 60 offenses, creates three-strikes federal provision, and eliminates Pell Grants for prisoners.' },
    { date: '1996', event: 'Clinton signs welfare reform and immigration laws that permanently bar people with drug felonies from receiving federal benefits (food stamps, housing assistance) and dramatically expand deportation for criminal offenses.' },
    { date: '2000', event: 'U.S. prison population exceeds 2 million. The United States now incarcerates more people than any country in the world, surpassing Russia and China in both total numbers and per-capita rate.' },
    { date: '2008', event: 'Kids for Cash scandal exposed in Luzerne County, Pennsylvania. Judges Ciavarella and Conahan accept $2.6M in bribes to sentence thousands of juveniles to private detention facilities for offenses as minor as creating a satirical MySpace page.' },
    { date: '2010', event: 'Fair Sentencing Act reduces the crack-to-powder cocaine sentencing disparity from 100:1 to 18:1 — still not equal, and not retroactive. Thousands remain imprisoned under the old ratio.' },
    { date: '2013', event: 'Attorney General Eric Holder announces the "Smart on Crime" initiative, directing prosecutors to avoid mandatory minimums for low-level, nonviolent drug offenses. Limited impact on overall incarceration rates.' },
    { date: '2016', event: 'Ava DuVernay\'s documentary "13th" brings mainstream attention to the connection between the 13th Amendment\'s exception clause, convict leasing, and modern mass incarceration.' },
    { date: '2018', event: 'First Step Act signed by Trump — modest federal sentencing reforms that reduce some mandatory minimums and expand good-time credits. Affects only federal prisoners (less than 10% of total incarcerated population).' },
    { date: '2020', event: 'George Floyd murdered by police, sparking nationwide protests. Mass incarceration and policing reform briefly enter mainstream political discourse before political backlash.' },
    { date: '2024', event: 'U.S. still incarcerates approximately 1.9 million people. Black Americans are incarcerated at 4.8 times the rate of white Americans. An estimated 19 million Americans have felony records that restrict their voting, employment, and housing rights.' },
  ],
  legalOutcomes: [
    { defendant: 'Mark Ciavarella', charge: 'Accepting $2.6M in bribes to sentence juveniles to private detention facilities', outcome: 'Convicted on 12 counts including racketeering. Sentenced to 28 years in federal prison.' },
    { defendant: 'Michael Conahan', charge: 'Conspiracy in Kids for Cash scheme', outcome: 'Pled guilty to racketeering conspiracy. Sentenced to 17.5 years.' },
    { defendant: 'Joe Arpaio', charge: 'Criminal contempt of court for violating federal court orders to stop racial profiling', outcome: 'Convicted July 2017. Pardoned by President Trump in August 2017 before sentencing.' },
    { defendant: 'CoreCivic (CCA)', charge: 'Understaffing, inadequate medical care, and violence at facilities', outcome: 'Numerous lawsuits and settlements. Company rebranded from CCA to CoreCivic in 2016. Continues operating.' },
    { defendant: 'GEO Group', charge: 'Human rights violations, forced labor, inadequate conditions', outcome: 'ICE renewed contracts. Brief Biden-era pause on federal private prison contracts partially reversed.' },
    { defendant: 'Federal Government', charge: 'Systematic racial discrimination in drug enforcement and sentencing', outcome: 'Fair Sentencing Act (2010) and First Step Act (2018) — incremental reforms that do not address structural racism.' },
    { defendant: 'State of California', charge: 'Prison overcrowding violating 8th Amendment', outcome: 'Brown v. Plata (2011): Supreme Court orders California to reduce prison population. State resisted compliance for years.' },
    { defendant: 'Multiple State Officials', charge: 'Operating prisons with conditions constituting cruel and unusual punishment', outcome: 'Various consent decrees. Most states remain under some form of court supervision for prison conditions.' },
  ],
  charges: [
    { statute: '13th Amendment Exception — Involuntary Servitude', description: 'The 13th Amendment\'s exception clause — "except as punishment for crime" — has been exploited to create a modern system of prison labor. Incarcerated workers earn as little as $0.13-$0.52 per hour producing goods and services for government agencies and private corporations.', count: 'An estimated 800,000 incarcerated workers generating $11B+ annually in goods and services' },
    { statute: '42 U.S.C. § 1983 — Deprivation of Civil Rights', description: 'The systematic racial targeting of drug enforcement — where Black Americans are arrested for drug offenses at 3.73 times the rate of white Americans despite comparable usage rates — constitutes state-sanctioned racial discrimination.', count: 'Millions of racially discriminatory arrests over five decades' },
    { statute: '18 U.S.C. § 241 — Conspiracy Against Rights', description: 'The documented conspiracy to use drug policy as a mechanism for disrupting Black communities and the political left, as confessed by Ehrlichman, constitutes a conspiracy against the civil rights of millions of Americans.', count: 'Multi-decade conspiracy affecting tens of millions' },
    { statute: '18 U.S.C. § 1962 — RICO (Racketeer Influenced and Corrupt Organizations)', description: 'Private prison corporations\' systematic lobbying for harsher sentencing laws, combined with campaign donations to officials who award prison contracts, constitutes an ongoing criminal enterprise profiting from the incarceration of human beings.', count: 'Multi-billion dollar enterprise spanning decades' },
    { statute: '8th Amendment — Cruel and Unusual Punishment', description: 'Conditions in American prisons — including solitary confinement (80,000+ people at any given time), inadequate medical care, sexual violence, and extreme overcrowding — violate constitutional protections against cruel and unusual punishment.', count: '2.3 million people subjected to conditions found unconstitutional in multiple federal court rulings' },
    { statute: '18 U.S.C. § 201 — Bribery of Public Officials', description: 'The "Kids for Cash" scandal and broader pattern of private prison industry campaign contributions and lobbying in exchange for favorable sentencing legislation and contracts constitutes systematic bribery.', count: 'Documented bribery in PA; suspected corruption nationwide' },
    { statute: '14th Amendment — Equal Protection Violation', description: 'The documented racial disparities in arrest rates, charging decisions, plea bargaining, sentencing, and parole across the entire criminal justice system violate the equal protection guarantee.', count: 'Systemic discrimination affecting millions of Black and Latino Americans' },
    { statute: '18 U.S.C. § 1589 — Forced Labor', description: 'Prison labor programs that compel incarcerated people to work under threat of solitary confinement, loss of good-time credits, or other punishment, for wages as low as pennies per hour, constitute forced labor under federal law.', count: 'Hundreds of thousands compelled into labor annually' },
    { statute: '15th/24th Amendments — Felony Disenfranchisement', description: 'Laws stripping voting rights from people with felony convictions — which disproportionately affect Black Americans — function as a modern poll tax and voting restriction targeting racial minorities.', count: 'An estimated 4.6 million Americans disenfranchised due to felony convictions' },
  ],
  coverup: [
    'John Ehrlichman\'s 1994 confession that the War on Drugs was designed to target Black Americans and the anti-war left was not published until 2016 — 22 years after the interview and 17 years after his death. The policy continued without interruption during those decades.',
    'The 100:1 crack-to-powder cocaine sentencing disparity was maintained for 24 years (1986-2010) despite being universally recognized as racially discriminatory. Congress reduced it to 18:1 rather than equalizing it, and refused to make the change retroactive.',
    'Private prison companies have spent over $25 million lobbying state and federal governments since 1989, and contributed millions more to political campaigns. Their lobbying apparatus ensures policies that maintain high incarceration rates remain in place.',
    'The American Legislative Exchange Council (ALEC), funded by private prison companies, drafted model "truth in sentencing" and "three-strikes" legislation that was adopted by multiple states, directly increasing the prison population and private prison profits.',
    'Federal and state governments have systematically defunded public defenders, ensuring that 80% of criminal defendants — overwhelmingly poor people of color — receive inadequate legal representation, leading to unjust convictions and excessive sentences.',
    'The Bureau of Justice Statistics has repeatedly documented racial disparities in every stage of the criminal justice system, but no administration has treated these findings as evidence of systemic civil rights violations requiring structural intervention.',
    'States have suppressed data on prison conditions, inmate deaths, and use of solitary confinement. The Prison Rape Elimination Act (PREA), passed in 2003, remains poorly enforced, with most facilities self-reporting compliance without independent verification.',
    'The school-to-prison pipeline — where Black students are suspended and expelled at 3.5 times the rate of white students, and schools increasingly rely on police officers rather than counselors — funnels children into the criminal justice system while maintaining the appearance of colorblind policy.',
    'Multiple presidents have acknowledged mass incarceration as a crisis while failing to take meaningful action. Obama called it "a defining feature of our time" but presided over continued federal prosecution of nonviolent drug offenses. Biden authored the 1994 crime bill and later acknowledged its harm without pursuing structural reform.',
    'Prosecutors wield near-absolute power in the system through charging decisions and plea bargaining — 97% of federal convictions and 94% of state convictions result from plea deals, not trials — effectively bypassing the constitutional right to a jury trial with minimal accountability.',
  ],
  sources: [
    { title: 'Dan Baum, "Legalize It All: How to Win the War on Drugs" (Ehrlichman Confession)', url: 'https://harpers.org/archive/2016/04/legalize-it-all/', date: 'April 2016' },
    { title: 'The Sentencing Project: Report to the United Nations on Racial Disparities', url: 'https://www.sentencingproject.org/reports/report-to-the-united-nations-on-racial-disparities-in-the-u-s-criminal-justice-system/', date: '2018' },
    { title: 'Bureau of Justice Statistics: Prisoners in 2022 — Statistical Tables', url: 'https://bjs.ojp.gov/library/publications/prisoners-2022-statistical-tables', date: '2023' },
    { title: 'Prison Policy Initiative: Mass Incarceration — The Whole Pie 2024', url: 'https://www.prisonpolicy.org/reports/pie2024.html', date: 'March 2024' },
    { title: 'Michelle Alexander, "The New Jim Crow: Mass Incarceration in the Age of Colorblindness"', url: 'https://newjimcrow.com/', date: '2010' },
    { title: 'Ava DuVernay, "13th" (Documentary on Netflix)', url: 'https://www.netflix.com/title/80091741', date: '2016' },
    { title: 'ACLU: A Living Death — Life Without Parole for Nonviolent Offenses', url: 'https://www.aclu.org/report/living-death-life-without-parole-nonviolent-offenses', date: 'November 2013' },
    { title: 'Brown v. Plata, 563 U.S. 493 (2011) — Prison Overcrowding', url: 'https://supreme.justia.com/cases/federal/us/563/493/', date: 'May 23, 2011' },
    { title: 'In the Public Interest: Criminal Justice — How Private Prison Companies Increase Incarceration', url: 'https://www.inthepublicinterest.org/criminal-justice-report/', date: 'June 2016' },
    { title: 'Equal Justice Initiative: Slavery to Mass Incarceration', url: 'https://eji.org/news/history-racial-injustice-slavery-to-mass-incarceration/', date: 'Ongoing' },
    { title: 'NPR: Kids for Cash — Judges Sentenced to Prison for Jailing Children for Profit', url: 'https://www.npr.org/sections/thetwo-way/2011/08/11/139536686/penn-judge-sentenced-to-28-years-in-massive-juvenile-justice-bribery-scandal', date: 'August 11, 2011' },
  ],
};

export default function MassIncarcerationPage() {
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
