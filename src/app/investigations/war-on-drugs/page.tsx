'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowLeft, Users, Calendar, ExternalLink, Scale, DollarSign, Lock, BarChart3, AlertTriangle } from 'lucide-react';
import GlitchText from '@/components/effects/GlitchText';

const investigation = {
  title: 'War on Drugs: 50 Years of Systemic Racial Targeting',
  subtitle: 'Nixon\'s Advisor Admitted It Was Never About Drugs — It Was About Criminalizing Black People and the Antiwar Left',
  severity: 'critical',
  status: 'Ongoing — Exposed by Ehrlichman Confession',
  summary: 'The War on Drugs, declared by President Richard Nixon in 1971 and dramatically escalated by Ronald Reagan in the 1980s, was never about public health. In 1994, Nixon\'s domestic policy chief John Ehrlichman confessed: "The Nixon campaign in 1968, and the Nixon White House after that, had two enemies: the antiwar left and Black people. We knew we couldn\'t make it illegal to be either against the war or Black, but by getting the public to associate the hippies with marijuana and Blacks with heroin, and then criminalizing both heavily, we could disrupt those communities. We could arrest their leaders, raid their homes, break up their meetings, and vilify them night after night on the evening news. Did we know we were lying about the drugs? Of course we did." The result: over 45 million arrests, a 500% increase in incarceration, racial disparities that see Black Americans imprisoned for drug offenses at nearly 6 times the rate of whites despite similar usage rates, and the destruction of millions of families and communities — all by design.',
  scale: {
    totalArrests: '45+ million drug arrests',
    currentPrisoners: '400,000+ currently imprisoned',
    annualCost: '$47+ billion/year spent',
    incarcerationIncrease: '500% prison population increase',
    racialDisparity: '5.8x Black imprisonment rate',
    totalSpent: '$1+ trillion since 1971',
  },
  ehrlichmanQuote: {
    speaker: 'John Ehrlichman, Nixon\'s Domestic Policy Advisor',
    year: '1994 (published 2016)',
    quote: '"The Nixon campaign in 1968, and the Nixon White House after that, had two enemies: the antiwar left and Black people. You understand what I\'m saying? We knew we couldn\'t make it illegal to be either against the war or Black, but by getting the public to associate the hippies with marijuana and Blacks with heroin, and then criminalizing both heavily, we could disrupt those communities. We could arrest their leaders, raid their homes, break up their meetings, and vilify them night after night on the evening news. Did we know we were lying about the drugs? Of course we did."',
  },
  racialDisparities: [
    { stat: 'Drug use rates are roughly equal across races', detail: 'According to the Substance Abuse and Mental Health Services Administration, roughly 12% of both white and Black Americans use illegal drugs — yet Black Americans are 3.73x more likely to be arrested for marijuana possession.' },
    { stat: '100-to-1 Crack/Powder Cocaine Disparity', detail: 'The 1986 Anti-Drug Abuse Act set mandatory minimums: 5 grams of crack (used more in Black communities) = 5 years. 500 grams of powder cocaine (used more in white communities) = 5 years. This 100:1 ratio was explicitly racially targeted.' },
    { stat: 'Black Americans are 12.4% of drug users but 32% of drug arrests and 40% of drug prisoners', detail: 'Policing priorities, stop-and-frisk, and prosecutorial discretion create a system where identical behavior leads to radically different outcomes based on race.' },
    { stat: 'Collateral Consequences', detail: 'A drug felony conviction triggers loss of voting rights, public housing eligibility, student loan access, food stamps, professional licenses, and employment. These "invisible punishments" perpetuate poverty and exclusion across generations.' },
  ],
  keyFigures: [
    { name: 'Richard Nixon', role: 'Declared the War on Drugs in 1971. His advisor later admitted it was a racist political strategy.', href: '/entities/individuals/richard-nixon', status: 'Resigned 1974 — Pardoned' },
    { name: 'John Ehrlichman', role: 'Nixon domestic policy advisor who confessed the War on Drugs was designed to target Black people', status: 'Served 18 months for Watergate — confession published posthumously' },
    { name: 'Ronald Reagan', role: 'Massively expanded the War on Drugs. Signed Anti-Drug Abuse Act of 1986 with racist crack/powder disparity.', href: '/entities/individuals/ronald-reagan', status: 'Deceased 2004' },
    { name: 'Nancy Reagan', role: '"Just Say No" campaign architect. Diverted attention from systemic racism to individual "moral failure."', status: 'Deceased 2016' },
    { name: 'Joe Biden', role: 'As Senator, authored the 1994 Crime Bill expanding mandatory minimums and creating "three strikes"', href: '/entities/individuals/joe-biden', status: 'President — later expressed partial regret' },
    { name: 'Bill Clinton', role: 'Signed 1994 Crime Bill. Massively expanded federal mandatory minimums and "three strikes" provisions.', href: '/entities/individuals/bill-clinton', status: 'Later called it a mistake' },
    { name: 'Harry Anslinger', role: 'First head of Federal Bureau of Narcotics. Used explicitly racist propaganda to criminalize marijuana in the 1930s.', status: 'Deceased 1975 — Never held accountable' },
    { name: 'Gary Webb', role: 'San Jose Mercury News journalist who exposed CIA-Contra cocaine trafficking. Career destroyed. Found dead with two gunshots to the head — ruled "suicide."', status: 'Died 2004 — ruled suicide' },
  ],
  ciaDrugConnection: {
    title: 'CIA Drug Trafficking',
    description: 'While the government waged war on drug users, the CIA was actively facilitating drug trafficking. During the 1980s, the CIA\'s Contra allies in Nicaragua trafficked cocaine into American cities to fund their operations. Journalist Gary Webb documented in his "Dark Alliance" series how Contra-connected dealers played a significant role in the crack epidemic devastating Black communities. The CIA Inspector General later confirmed that the agency had maintained relationships with known drug traffickers and had not reported their activities to law enforcement. The same government imprisoning millions for drug possession was simultaneously importing drugs into those very communities.',
    sources: ['Gary Webb: Dark Alliance — CIA, the Contras, and the Crack Cocaine Explosion', 'CIA Inspector General Report: Allegations of Connections Between CIA and Contras in Cocaine Trafficking (1998)', 'Kerry Committee Report: Drugs, Law Enforcement and Foreign Policy (1989)'],
  },
  mandatoryMinimums: [
    { law: 'Boggs Act (1952)', description: 'First mandatory minimums for drug offenses: 2-5 years for first marijuana offense' },
    { law: 'Comprehensive Drug Abuse Prevention and Control Act (1970)', description: 'Created drug scheduling system still used today. Cannabis classified as Schedule I (no medical use) alongside heroin — above cocaine and methamphetamine.' },
    { law: 'Anti-Drug Abuse Act (1986)', description: '100:1 crack/powder disparity. 5 grams crack = 5 years mandatory minimum. Created career for mass incarceration.' },
    { law: 'Anti-Drug Abuse Act (1988)', description: 'Created the "drug czar" position and federal penalties for simple possession. Established drug-free school zones (which overwhelmingly targeted urban/Black neighborhoods).' },
    { law: 'Violent Crime Control Act (1994)', description: '"Three strikes" provision. $9.7 billion for new prisons. Eliminated Pell Grants for prisoners. Federal mandatory minimums.' },
    { law: 'Fair Sentencing Act (2010)', description: 'Reduced crack/powder disparity from 100:1 to 18:1. Still not equal. Still not retroactive until later reforms.' },
  ],
  timeline: [
    { date: '1937', event: 'Marijuana Tax Act criminalizes cannabis using racist propaganda targeting Mexican Americans and Black jazz musicians' },
    { date: 'Jun 17, 1971', event: 'Nixon declares drugs "public enemy number one" — officially launches War on Drugs' },
    { date: '1973', event: 'Nixon creates Drug Enforcement Administration (DEA)' },
    { date: '1980s', event: 'CIA-backed Contras flood US cities with crack cocaine while Reagan escalates War on Drugs' },
    { date: '1986', event: 'Reagan signs Anti-Drug Abuse Act — 100:1 crack/powder disparity. Mass incarceration begins.' },
    { date: '1994', event: 'Clinton signs Crime Bill with "three strikes," $9.7B for prisons, eliminates prisoner education' },
    { date: '1994', event: 'Ehrlichman confesses War on Drugs was designed to target Black people (published 2016)' },
    { date: '1996', event: 'Gary Webb publishes "Dark Alliance" exposing CIA-Contra cocaine connection. Career destroyed.' },
    { date: '2004', event: 'Gary Webb found dead — two gunshots to head, ruled suicide' },
    { date: '2010', event: 'Fair Sentencing Act reduces crack/powder disparity to 18:1 (still not equal)' },
    { date: '2016', event: 'Harper\'s Magazine publishes Ehrlichman\'s 1994 confession. Confirmation it was racial targeting.' },
    { date: '2020', event: 'Oregon decriminalizes all drug possession. Movement toward treating addiction as health issue.' },
    { date: 'Present', event: '400,000+ Americans remain imprisoned for drug offenses. Racial disparities persist.' },
  ],
  charges: [
    '18 USC §242 — Deprivation of Rights Under Color of Law (systematic racial targeting through drug enforcement)',
    '18 USC §241 — Conspiracy Against Rights (coordinated effort to disrupt communities through selective enforcement)',
    'Fourth Amendment Violations — Stop-and-frisk, no-knock raids, civil asset forfeiture without conviction',
    'Eighth Amendment — Cruel and Unusual Punishment (mandatory minimums disproportionate to offense)',
    'Fourteenth Amendment — Equal Protection (enforced with knowing racial disparity)',
    'Civil Rights Act Violations — Facially neutral laws designed and enforced to target racial minorities',
  ],
  legalOutcomes: [
    { defendant: 'US Government', charge: 'Racially motivated drug policy', outcome: 'Ehrlichman confession (1994/2016) — No legal consequences' },
    { defendant: 'CIA', charge: 'Facilitating Contra cocaine trafficking', outcome: 'CIA IG confirmed but no prosecutions. Gary Webb discredited and died.' },
    { defendant: 'Crack/Powder Disparity', charge: 'Racially discriminatory sentencing', outcome: 'Reduced from 100:1 to 18:1 in 2010 — still not equal' },
    { defendant: '45+ million Americans', charge: 'Drug offenses', outcome: 'Arrested and processed. Millions imprisoned. Families destroyed. Communities devastated.' },
  ],
  sources: [
    { title: 'John Ehrlichman Confession — Harper\'s Magazine', url: 'https://harpers.org/archive/2016/04/legalize-it-all/', date: '2016' },
    { title: 'Michelle Alexander: The New Jim Crow — Mass Incarceration in the Age of Colorblindness', url: 'https://newjimcrow.com/', date: '2010' },
    { title: 'Gary Webb: Dark Alliance — CIA, Contras, and Crack Cocaine', url: 'https://archive.org/details/darkalliance00webb', date: '1998' },
    { title: 'ACLU: The War on Marijuana in Black and White', url: 'https://www.aclu.org/report/report-war-marijuana-black-and-white', date: '2013' },
    { title: 'The Sentencing Project: Racial Disparities in Drug Arrests', url: 'https://www.sentencingproject.org/reports/the-color-of-justice-racial-and-ethnic-disparity-in-state-prisons-the-sentencing-project/', date: '2021' },
    { title: 'Drug Policy Alliance: A History of the Drug War', url: 'https://drugpolicy.org/issues/brief-history-drug-war', date: 'Ongoing' },
    { title: 'Kerry Committee Report: Drugs, Law Enforcement, and Foreign Policy', url: 'https://nsarchive2.gwu.edu/NSAEBB/NSAEBB113/', date: '1989' },
  ],
};

export default function WarOnDrugsPage() {
  return (
    <div className="min-h-screen pt-20 lg:pt-24 pb-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <Link href="/investigations" className="inline-flex items-center gap-2 text-zinc-400 hover:text-blood-500 transition-colors mb-6 pt-4">
          <ArrowLeft className="w-4 h-4" />
          Back to Investigations
        </Link>

        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="border-2 border-blood-800/60 bg-black/80 p-6 lg:p-8 mb-8">
          <div className="flex items-center gap-3 mb-4">
            <span className="px-3 py-1 text-xs font-bold uppercase border border-red-500/30 bg-red-500/20 text-red-400">{investigation.severity}</span>
            <span className="px-3 py-1 text-xs font-bold uppercase border border-zinc-500/30 bg-zinc-500/20 text-zinc-400">{investigation.status}</span>
          </div>
          <h1 className="text-3xl lg:text-4xl font-black text-white uppercase tracking-wider mb-2"><GlitchText text={investigation.title} /></h1>
          <p className="text-lg text-blood-500 font-bold mb-4">{investigation.subtitle}</p>
          <p className="text-zinc-400 leading-relaxed text-sm">{investigation.summary}</p>
        </motion.div>

        {/* Ehrlichman Quote */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.08 }} className="border-2 border-red-800/60 bg-red-950/20 p-6 mb-8">
          <h2 className="text-xl font-bold text-white uppercase tracking-wider mb-4">The Confession</h2>
          <blockquote className="text-zinc-300 italic border-l-4 border-red-500 pl-4 text-sm leading-relaxed">{investigation.ehrlichmanQuote.quote}</blockquote>
          <p className="text-xs text-zinc-500 mt-3">— {investigation.ehrlichmanQuote.speaker}, {investigation.ehrlichmanQuote.year}</p>
        </motion.div>

        {/* Scale */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="border-2 border-red-800/60 bg-red-950/20 p-6 mb-8">
          <h2 className="text-xl font-bold text-white uppercase tracking-wider mb-4 flex items-center gap-2"><BarChart3 className="w-5 h-5 text-red-500" />Scale of Destruction</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {Object.entries(investigation.scale).map(([key, val]) => (
              <div key={key} className="text-center p-4 border border-red-500/30 bg-red-950/30">
                <p className="text-xl font-black text-red-500">{val}</p>
                <p className="text-xs text-zinc-400 capitalize">{key.replace(/([A-Z])/g, ' $1').trim()}</p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* CIA Drug Connection */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.12 }} className="glass-card p-6 mb-8 border-l-4 border-blood-600">
          <h2 className="text-xl font-bold text-white uppercase tracking-wider mb-4">{investigation.ciaDrugConnection.title}</h2>
          <p className="text-sm text-zinc-300 mb-3">{investigation.ciaDrugConnection.description}</p>
          <div className="space-y-1">
            {investigation.ciaDrugConnection.sources.map((s, idx) => (
              <p key={idx} className="text-xs text-zinc-500 pl-4 border-l border-zinc-700">{s}</p>
            ))}
          </div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-8">
            {/* Racial Disparities */}
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.15 }} className="glass-card p-6">
              <h2 className="text-xl font-bold text-white uppercase tracking-wider mb-4">Racial Disparities by Design</h2>
              <div className="space-y-4">
                {investigation.racialDisparities.map((rd, idx) => (
                  <div key={idx} className="p-4 bg-zinc-900/50 border border-zinc-800">
                    <p className="font-bold text-blood-400 text-sm">{rd.stat}</p>
                    <p className="text-sm text-zinc-300 mt-2">{rd.detail}</p>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Mandatory Minimums */}
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.18 }} className="glass-card p-6">
              <h2 className="text-xl font-bold text-white uppercase tracking-wider mb-4 flex items-center gap-2"><Lock className="w-5 h-5 text-blood-500" />Key Legislation</h2>
              <div className="space-y-3">
                {investigation.mandatoryMinimums.map((mm, idx) => (
                  <div key={idx} className="p-4 bg-zinc-900/50 border border-zinc-800">
                    <p className="font-bold text-white text-sm">{mm.law}</p>
                    <p className="text-sm text-zinc-300 mt-2">{mm.description}</p>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Key Figures */}
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="glass-card p-6">
              <h2 className="text-xl font-bold text-white uppercase tracking-wider mb-4 flex items-center gap-2"><Users className="w-5 h-5 text-blood-500" />Key Figures</h2>
              <div className="space-y-3">
                {investigation.keyFigures.map((figure, idx) => (
                  <div key={idx} className="flex items-start justify-between p-3 bg-zinc-900/50 border border-zinc-800">
                    <div className="flex-1">
                      {figure.href ? (<Link href={figure.href} className="font-bold text-blood-400 hover:text-blood-300 transition-colors">{figure.name}</Link>) : (<span className="font-bold text-white">{figure.name}</span>)}
                      <p className="text-sm text-zinc-400 mt-1">{figure.role}</p>
                    </div>
                    <span className="text-xs px-2 py-1 bg-zinc-800 text-zinc-400 border border-zinc-700 whitespace-nowrap ml-2">{figure.status}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Charges */}
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.22 }} className="glass-card p-6 border-l-4 border-red-600">
              <h2 className="text-xl font-bold text-white uppercase tracking-wider mb-4 flex items-center gap-2"><AlertTriangle className="w-5 h-5 text-red-500" />Applicable Charges</h2>
              <ul className="space-y-2">
                {investigation.charges.map((charge, idx) => (
                  <li key={idx} className="text-sm text-zinc-300 pl-4 border-l-2 border-red-500/50 py-1">{charge}</li>
                ))}
              </ul>
            </motion.div>
          </div>

          <div className="space-y-6">
            <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} className="glass-card p-6">
              <h3 className="text-lg font-bold text-white uppercase tracking-wider mb-4 flex items-center gap-2"><Calendar className="w-4 h-4 text-blood-500" />Timeline</h3>
              <div className="space-y-4">
                {investigation.timeline.map((item, idx) => (
                  <div key={idx} className="relative pl-4 border-l-2 border-zinc-800">
                    <div className="absolute -left-[5px] top-0 w-2 h-2 rounded-full bg-blood-500" />
                    <p className="text-xs text-blood-500 font-mono">{item.date}</p>
                    <p className="text-sm text-zinc-300">{item.event}</p>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.1 }} className="glass-card p-6">
              <h3 className="text-lg font-bold text-white uppercase tracking-wider mb-4 flex items-center gap-2"><Scale className="w-5 h-5 text-blood-500" />Legal Outcomes</h3>
              <div className="space-y-3">
                {investigation.legalOutcomes.map((item, idx) => (
                  <div key={idx} className="p-3 bg-zinc-900/50 border border-zinc-800">
                    <p className="font-bold text-white text-sm">{item.defendant}</p>
                    <p className="text-xs text-zinc-400 mt-1">{item.charge}</p>
                    <p className="text-xs text-blood-400 mt-1">{item.outcome}</p>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.2 }} className="glass-card p-6">
              <h3 className="text-lg font-bold text-white uppercase tracking-wider mb-4">Sources</h3>
              <div className="space-y-2">
                {investigation.sources.map((source, idx) => (
                  <a key={idx} href={source.url} target="_blank" rel="noopener noreferrer" className="flex items-start gap-2 p-2 text-sm text-zinc-400 hover:text-blood-400 hover:bg-zinc-900/50 transition-colors">
                    <ExternalLink className="w-4 h-4 mt-0.5 flex-shrink-0" />
                    <div><span>{source.title}</span><span className="text-zinc-600 ml-2">({source.date})</span></div>
                  </a>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}
