'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowLeft, Users, Calendar, ExternalLink, Scale, Shield, Skull, BarChart3, AlertTriangle } from 'lucide-react';
import GlitchText from '@/components/effects/GlitchText';

const investigation = {
  title: 'Police Brutality & Qualified Immunity',
  subtitle: 'How American Law Enforcement Kills 1,000+ People Per Year, Disproportionately Black, While Legal Doctrine Makes Accountability Nearly Impossible',
  severity: 'critical',
  status: 'Ongoing — Systemic Crisis',
  summary: 'American police kill approximately 1,100 people per year — more than any other developed nation. Black Americans are killed by police at 2.9 times the rate of white Americans. Despite this, officers are almost never held criminally accountable due to qualified immunity, police union protections, and a legal system designed to shield law enforcement from consequences. The doctrine of qualified immunity, created by the Supreme Court in 1967 and expanded dramatically since, requires that victims prove an officer violated a "clearly established" right — meaning unless a previous case with nearly identical facts exists, officers are immune from civil liability regardless of how egregious their conduct. This creates a system where police can kill with impunity, and the families of victims have virtually no legal recourse.',
  scale: {
    killedPerYear: '~1,100 killed annually',
    since2000: '25,000+ killed since 2000',
    blackDisparity: '2.9x rate for Black Americans',
    convictionRate: '<2% officers charged',
    qualifiedImmunity: '57% cases dismissed',
    noKnockRaids: '20,000+ no-knock raids/year',
  },
  notableKillings: [
    { name: 'George Floyd', date: 'May 25, 2020', location: 'Minneapolis, MN', description: 'Officer Derek Chauvin knelt on Floyd\'s neck for 9 minutes and 29 seconds while Floyd repeatedly said "I can\'t breathe." Three other officers assisted or watched. Floyd\'s murder sparked the largest protests in US history.', outcome: 'Chauvin convicted of murder — 22.5 years. Other officers convicted of federal civil rights violations.' },
    { name: 'Breonna Taylor', date: 'Mar 13, 2020', location: 'Louisville, KY', description: 'Police executed a no-knock warrant at Taylor\'s apartment after midnight. Officers fired 32 rounds into the apartment. Taylor was shot 6 times in her bed. The suspect police were looking for was already in custody.', outcome: 'One officer charged — acquitted. Settlement: $12 million. No murder charges.' },
    { name: 'Tamir Rice', date: 'Nov 22, 2014', location: 'Cleveland, OH', description: '12-year-old Tamir Rice was playing with a toy gun in a park. Officer Timothy Loehmann shot him within 2 seconds of arriving — before the patrol car had even stopped. Neither officer rendered first aid.', outcome: 'Grand jury declined to indict. No criminal charges. $6 million settlement.' },
    { name: 'Eric Garner', date: 'Jul 17, 2014', location: 'Staten Island, NY', description: 'Officer Daniel Pantaleo put Garner in a banned chokehold while arresting him for selling loose cigarettes. Garner said "I can\'t breathe" 11 times before losing consciousness. The medical examiner ruled it a homicide.', outcome: 'Grand jury declined to indict. DOJ declined federal charges. Pantaleo fired 5 years later.' },
    { name: 'Philando Castile', date: 'Jul 6, 2016', location: 'Falcon Heights, MN', description: 'During a traffic stop, Castile informed Officer Jeronimo Yanez he had a licensed firearm. As Castile reached for his ID (as instructed), Yanez fired 7 shots, killing Castile in front of his girlfriend and her 4-year-old daughter.', outcome: 'Yanez acquitted of all charges. $3 million settlement.' },
    { name: 'Elijah McClain', date: 'Aug 24, 2019', location: 'Aurora, CO', description: 'McClain was walking home wearing a ski mask (he had anemia and got cold easily). Officers put him in a carotid hold and paramedics injected him with ketamine. He went into cardiac arrest and died days later.', outcome: 'Two officers and one paramedic convicted of criminally negligent homicide (2023).' },
    { name: 'Ahmaud Arbery', date: 'Feb 23, 2020', location: 'Brunswick, GA', description: 'Three white men chased and shot Arbery while he was jogging. Local DA initially declined to prosecute. Video leaked 2 months later. Former DA indicted for trying to cover up the murder.', outcome: 'All three convicted of murder. Federal hate crime convictions. Former DA indicted.' },
    { name: 'Daniel Shaver', date: 'Jan 18, 2016', location: 'Mesa, AZ', description: 'Shaver was unarmed, sobbing, and crawling on the floor following contradictory police commands. Officer Philip Brailsford shot him with an AR-15 engraved with "YOU\'RE FUCKED." Brailsford was acquitted and later rehired to receive a $2,500/month pension.', outcome: 'Acquitted. Rehired for 42 days to qualify for $31,000/year pension for PTSD.' },
  ],
  qualifiedImmunity: {
    origin: 'Pierson v. Ray (1967) — Supreme Court created qualified immunity from whole cloth. No statutory basis.',
    expansion: 'Harlow v. Fitzgerald (1982) — Supreme Court dramatically expanded doctrine. Officers immune unless they violate "clearly established" law.',
    problem: 'Courts have interpreted "clearly established" so narrowly that unless a previous case involves nearly identical facts, officers are immune. Courts have ruled that: an officer who stole $225,000 had qualified immunity because no prior case involved theft of that exact amount; officers who sicced a dog on a surrendering suspect had immunity because the suspect was sitting, not lying down like in a prior case.',
    absurdExamples: [
      'Officer who shot a 10-year-old while aiming at nonthreatening family dog — QUALIFIED IMMUNITY GRANTED',
      'Officers who stole $225,000 in cash and rare coins during a search warrant — QUALIFIED IMMUNITY GRANTED',
      'Officer who body-slammed a woman for slowly walking away — QUALIFIED IMMUNITY GRANTED',
      'Officer who shot a man in his own yard while responding to wrong address — QUALIFIED IMMUNITY GRANTED',
    ],
  },
  systemicIssues: [
    { issue: 'Police Unions', description: 'Police unions negotiate contracts that make discipline nearly impossible. Fired officers are routinely reinstated with back pay. Misconduct records are sealed or destroyed. Unions block reform legislation and fund politicians who oppose accountability.' },
    { issue: 'Internal Affairs', description: 'Police investigate themselves and find no wrongdoing 96% of the time. "Internal affairs" divisions are staffed by fellow officers with inherent conflicts of interest. Civilian oversight boards are routinely underfunded and stripped of enforcement power.' },
    { issue: '"Gypsy Cops"', description: 'Officers fired for misconduct simply move to another department. There is no national database of police misconduct. Officers with records of violence, racism, and corruption cycle through departments, continuing to abuse power.' },
    { issue: 'Warrior Training', description: 'Departments send officers to "warrior mindset" training programs like "Killology" (founded by Dave Grossman), which teach officers to view citizens as threats and prepare them to kill without hesitation or remorse.' },
    { issue: 'Civil Asset Forfeiture', description: 'Police can seize property without charging anyone with a crime. In 2014, police seized more property from Americans through civil forfeiture than burglars stole. Departments keep the proceeds, creating a financial incentive for theft.' },
    { issue: 'Militarization', description: 'The 1033 program transfers military equipment to local police. Departments have tanks, grenade launchers, and military-grade weapons. This equipment is disproportionately deployed in communities of color.' },
  ],
  keyFigures: [
    { name: 'Derek Chauvin', role: 'Convicted murderer of George Floyd. Knelt on Floyd\'s neck for 9:29.', href: '/entities/individuals/derek-chauvin', status: 'Convicted — 22.5 years federal + 21 years state' },
    { name: 'Darren Wilson', role: 'Officer who killed Michael Brown in Ferguson, MO. Never charged.', status: 'No charges — resigned from police' },
    { name: 'Timothy Loehmann', role: 'Officer who killed 12-year-old Tamir Rice within 2 seconds of arriving', status: 'Not charged — fired, later hired by another department' },
    { name: 'Daniel Pantaleo', role: 'Officer who killed Eric Garner with banned chokehold over loose cigarettes', status: 'Not indicted — fired 5 years later' },
    { name: 'Dave Grossman', role: '"Killology" trainer who teaches police to kill without hesitation. Calls killing "the universal human phobia" that officers must overcome.', status: 'Active — trains thousands of officers annually' },
    { name: 'Bob Kroll', role: 'Minneapolis police union president who called George Floyd a "violent criminal" and praised officers', status: 'Retired with full pension' },
  ],
  charges: [
    '18 USC §242 — Deprivation of Rights Under Color of Law (used in some federal civil rights cases)',
    '18 USC §241 — Conspiracy Against Rights',
    '42 USC §1983 — Civil Rights Lawsuit (blocked by qualified immunity in most cases)',
    'State Murder/Manslaughter Charges — Rarely filed; when filed, juries frequently acquit',
    'Fourth Amendment — Unreasonable Search and Seizure (excessive force = constitutional violation)',
    'Fourteenth Amendment — Equal Protection (racially disparate policing)',
  ],
  timeline: [
    { date: '1967', event: 'Supreme Court creates qualified immunity doctrine in Pierson v. Ray' },
    { date: '1982', event: 'Harlow v. Fitzgerald dramatically expands qualified immunity protections' },
    { date: '1991', event: 'Rodney King beating filmed by bystander. Officers acquitted, sparking LA riots.' },
    { date: '2014', event: 'Eric Garner killed. Michael Brown killed. Tamir Rice killed. Black Lives Matter movement grows.' },
    { date: '2015', event: 'Washington Post begins Tracking Police Shootings database — first comprehensive national count' },
    { date: '2020', event: 'George Floyd murdered. Largest protests in US history. Global reckoning on police violence.' },
    { date: '2020', event: 'Breonna Taylor killed in no-knock raid. National outrage over lack of charges.' },
    { date: '2021', event: 'Chauvin convicted — rare accountability. Most killings still result in no charges.' },
    { date: '2023', event: 'Tyre Nichols beaten to death by 5 Memphis officers. All charged with murder.' },
    { date: 'Present', event: 'Police continue killing ~1,100 people/year. Qualified immunity remains. Systemic reform stalled.' },
  ],
  legalOutcomes: [
    { defendant: 'Derek Chauvin', charge: 'Murder of George Floyd', outcome: 'Convicted — 22.5 years (rare accountability)' },
    { defendant: 'Qualified Immunity Doctrine', charge: 'Blocking civil rights lawsuits', outcome: 'Still in effect. Supreme Court refuses to revisit despite growing criticism.' },
    { defendant: 'Systematic Police Violence', charge: 'Pattern-and-practice investigations', outcome: 'DOJ consent decrees in some cities— but compliance is voluntary and enforcement weak' },
    { defendant: 'Police Departments', charge: 'Civil rights settlements', outcome: 'Cities pay $300M+/year in settlements — taxpayers pay, officers face no consequences' },
  ],
  sources: [
    { title: 'Washington Post Police Shootings Database', url: 'https://www.washingtonpost.com/graphics/investigations/police-shootings-database/', date: '2015-present' },
    { title: 'Mapping Police Violence', url: 'https://mappingpoliceviolence.us/', date: 'Ongoing' },
    { title: 'Reuters: Qualified Immunity Investigation', url: 'https://www.reuters.com/investigates/special-report/usa-police-immunity-scotus/', date: '2020' },
    { title: 'ACLU: Qualified Immunity — A Legal, Practical, and Moral Failure', url: 'https://www.aclu.org/news/criminal-law-reform/the-supreme-court-has-a-chance-to-end-qualified-immunity', date: '2020' },
    { title: 'DOJ: Investigation of the Minneapolis Police Department', url: 'https://www.justice.gov/crt/case/investigation-city-minneapolis-and-minneapolis-police-department', date: '2023' },
    { title: 'Radley Balko: Rise of the Warrior Cop — The Militarization of America\'s Police Forces', url: 'https://www.publicaffairsbooks.com/titles/radley-balko/rise-of-the-warrior-cop/9781610394574/', date: '2013' },
    { title: 'The Counted — Guardian US Database of Police Killings', url: 'https://www.theguardian.com/us-news/series/counted-us-police-killings', date: '2015-2016' },
  ],
};

export default function PoliceBrutalityPage() {
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

        {/* Scale */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="border-2 border-red-800/60 bg-red-950/20 p-6 mb-8">
          <h2 className="text-xl font-bold text-white uppercase tracking-wider mb-4 flex items-center gap-2"><BarChart3 className="w-5 h-5 text-red-500" />Scale of Violence</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {Object.entries(investigation.scale).map(([key, val]) => (
              <div key={key} className="text-center p-4 border border-red-500/30 bg-red-950/30">
                <p className="text-xl font-black text-red-500">{val}</p>
                <p className="text-xs text-zinc-400 capitalize">{key.replace(/([A-Z])/g, ' $1').trim()}</p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Notable Killings */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.12 }} className="border-2 border-red-800/60 bg-red-950/20 p-6 mb-8">
          <h2 className="text-xl font-bold text-white uppercase tracking-wider mb-4 flex items-center gap-2">
            <Skull className="w-5 h-5 text-red-500" />
            Notable Cases
          </h2>
          <div className="space-y-4">
            {investigation.notableKillings.map((k, idx) => (
              <div key={idx} className="p-4 bg-zinc-900/50 border border-zinc-800">
                <div className="flex flex-wrap items-center gap-2 mb-2">
                  <p className="font-bold text-blood-400 text-sm">{k.name}</p>
                  <span className="text-xs text-zinc-500">{k.date} — {k.location}</span>
                </div>
                <p className="text-sm text-zinc-300 mb-2">{k.description}</p>
                <p className="text-xs text-red-400 font-bold">{k.outcome}</p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Qualified Immunity */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.15 }} className="glass-card p-6 mb-8 border-l-4 border-blood-600">
          <h2 className="text-xl font-bold text-white uppercase tracking-wider mb-4 flex items-center gap-2"><Shield className="w-5 h-5 text-blood-500" />Qualified Immunity: License to Kill</h2>
          <div className="space-y-3 mb-4">
            <p className="text-sm text-zinc-300"><strong className="text-white">Origin:</strong> {investigation.qualifiedImmunity.origin}</p>
            <p className="text-sm text-zinc-300"><strong className="text-white">Expansion:</strong> {investigation.qualifiedImmunity.expansion}</p>
            <p className="text-sm text-zinc-300"><strong className="text-white">The Problem:</strong> {investigation.qualifiedImmunity.problem}</p>
          </div>
          <h3 className="text-sm font-bold text-red-400 uppercase tracking-wider mb-2">Absurd Examples</h3>
          <ul className="space-y-2">
            {investigation.qualifiedImmunity.absurdExamples.map((ex, idx) => (
              <li key={idx} className="text-sm text-zinc-300 pl-4 border-l-2 border-red-500/50 py-1">{ex}</li>
            ))}
          </ul>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-8">
            {/* Systemic Issues */}
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.18 }} className="glass-card p-6">
              <h2 className="text-xl font-bold text-white uppercase tracking-wider mb-4">Systemic Issues</h2>
              <div className="space-y-4">
                {investigation.systemicIssues.map((si, idx) => (
                  <div key={idx} className="p-4 bg-zinc-900/50 border border-zinc-800">
                    <p className="font-bold text-blood-400 text-sm">{si.issue}</p>
                    <p className="text-sm text-zinc-300 mt-2">{si.description}</p>
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
