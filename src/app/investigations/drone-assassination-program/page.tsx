'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowLeft, AlertTriangle, Users, Calendar, FileText, ExternalLink, Scale, ShieldAlert, Skull } from 'lucide-react';
import GlitchText from '@/components/effects/GlitchText';

const investigation = {
  title: 'U.S. Drone Assassination Program',
  subtitle: 'Extrajudicial Killing of Thousands Including U.S. Citizens — The President\'s Kill List',
  severity: 'critical',
  status: 'ONGOING — PROGRAM STILL ACTIVE',
  summary: 'Since 2002, the United States has conducted thousands of drone strikes across at least seven countries — Pakistan, Yemen, Somalia, Afghanistan, Iraq, Syria, and Libya — killing an estimated 8,858 to 16,901 people, including 910 to 2,200 civilians and 283 to 454 children. The Obama administration dramatically expanded the program, institutionalizing a secret "disposition matrix" (kill list) where the President personally selected individuals for assassination during "Terror Tuesday" meetings. The program killed U.S. citizen Anwar al-Awlaki without trial, then killed his 16-year-old American son Abdulrahman two weeks later, and later killed his 8-year-old American daughter Nawar in a Trump-era raid. "Signature strikes" targeted unidentified individuals based on behavioral patterns, meaning the U.S. government killed people without even knowing who they were. The CIA and JSOC operated parallel kill programs with minimal oversight, redefining "combatant" to mean any military-age male in a strike zone — automatically classifying dead civilians as militants. Multiple independent investigations have found evidence of war crimes, yet no U.S. official has ever been held accountable.',
  keyFigures: [
    { name: 'Barack Obama', role: 'President who dramatically expanded drone program, personally approved kill list targets during "Terror Tuesday" meetings, authorized killing of U.S. citizens without trial', href: '/entities/individuals/barack-obama', status: 'Served 2009-2017' },
    { name: 'John Brennan', role: 'CIA Director (2013-2017) and chief architect of drone program as counterterrorism advisor, managed "disposition matrix" kill list, initially denied any civilian casualties', href: '/entities/individuals/john-brennan', status: 'Key Architect' },
    { name: 'Anwar al-Awlaki', role: 'U.S. citizen and Islamic cleric killed by drone strike in Yemen on September 30, 2011 without trial, charge, or due process — first known targeted assassination of a U.S. citizen', href: '/entities/individuals/anwar-al-awlaki', status: 'Killed by Drone' },
    { name: 'Abdulrahman al-Awlaki', role: '16-year-old U.S. citizen killed by separate drone strike in Yemen on October 14, 2011 — two weeks after his father. Born in Denver, Colorado. Robert Gibbs said he "should have had a more responsible father"', href: '/entities/individuals/abdulrahman-al-awlaki', status: 'Killed Age 16' },
    { name: 'Nawar al-Awlaki', role: '8-year-old U.S. citizen daughter of Anwar, killed in a Trump-ordered SEAL raid on Yemen on January 29, 2017. Shot in the neck, bled for two hours before dying', href: '/entities/individuals/nawar-al-awlaki', status: 'Killed Age 8' },
    { name: 'George W. Bush', role: 'President who initiated the drone assassination program post-9/11, authorized first CIA drone killing of suspected al-Qaeda operative in Yemen in 2002', href: '/entities/individuals/george-w-bush', status: 'Initiated Program' },
    { name: 'Dick Cheney', role: 'Vice President who championed expanded executive authority for targeted killings as part of the "War on Terror" framework', href: '/entities/individuals/dick-cheney', status: 'Program Advocate' },
    { name: 'Donald Rumsfeld', role: 'Secretary of Defense who developed JSOC parallel drone kill program operating alongside CIA with even less oversight', href: '/entities/individuals/donald-rumsfeld', status: 'JSOC Kill Program' },
    { name: 'Michael Hayden', role: 'CIA Director (2006-2009) who expanded drone strikes in Pakistan\'s tribal areas, oversaw development of signature strike methodology', href: '/entities/individuals/michael-hayden', status: 'Expanded Program' },
    { name: 'Leon Panetta', role: 'CIA Director (2009-2011) who called drone strikes "the only game in town" and dramatically increased strike tempo in Pakistan', href: '/entities/individuals/leon-panetta', status: 'Escalated Strikes' },
    { name: 'James Clapper', role: 'Director of National Intelligence who repeatedly misled Congress about the scope and civilian toll of the drone program', href: '/entities/individuals/james-clapper', status: 'Misled Congress' },
    { name: 'John Yoo', role: 'DOJ Office of Legal Counsel attorney who authored legal memos authorizing targeted killings and "enhanced interrogation" as part of the same executive authority framework', href: '/entities/individuals/john-yoo', status: 'Legal Architect' },
    { name: 'Eric Holder', role: 'Attorney General who provided legal justification for killing U.S. citizens abroad, argued due process does not necessarily mean judicial process', href: '/entities/individuals/eric-holder', status: 'Legal Justification' },
    { name: 'Gina Haspel', role: 'CIA official who oversaw drone operations and later became CIA Director under Trump, continued the program without reform', href: '/entities/individuals/gina-haspel', status: 'CIA Director' },
    { name: 'Stanley McChrystal', role: 'JSOC Commander who ran parallel assassination program in Afghanistan, later admitted drone strikes created more enemies than they eliminated', href: '/entities/individuals/stanley-mcchrystal', status: 'JSOC Commander' },
  ],
  timeline: [
    { date: 'November 2001', event: 'CIA Predator drone kills al-Qaeda military chief Mohammed Atef near Kabul — first drone strike killing a high-value target' },
    { date: 'February 4, 2002', event: 'CIA drone strike in Paktia, Afghanistan kills three men near Khost, believed to include Osama bin Laden — all three were innocent civilians collecting scrap metal' },
    { date: 'November 3, 2002', event: 'First acknowledged targeted killing: CIA drone kills six men in Yemen including U.S. citizen Kamal Derwish, establishing lethal precedent' },
    { date: '2004', event: 'Bush administration begins drone strikes in Pakistan\'s tribal regions without Pakistani public consent, beginning years of covert war' },
    { date: '2008', event: 'CIA conducts 36 drone strikes in Pakistan, killing estimated 273-313 people — a dramatic escalation from previous years' },
    { date: 'January 23, 2009', event: 'Obama\'s first drone strike, just three days into presidency: CIA hits two targets in Waziristan, killing up to 20 people including civilians' },
    { date: '2009-2010', event: 'Obama increases Pakistan drone strikes to 122 in two years, more than Bush\'s entire presidency combined' },
    { date: 'April 2010', event: 'Obama authorizes targeted killing of U.S. citizen Anwar al-Awlaki — first known presidential order to assassinate an American without trial' },
    { date: 'December 17, 2009', event: 'U.S. cruise missile strike on al-Majalah, Yemen kills 55 people including 21 children and 14 women. Wikileaks cables reveal Yemen\'s president agreed to "lie" and claim it was a Yemeni operation' },
    { date: 'March 17, 2011', event: 'CIA drone and JSOC strike hit a tribal jirga (peace meeting) in Datta Khel, Pakistan, killing at least 42 people — mostly tribal elders. Despite video evidence, CIA claimed all killed were militants' },
    { date: 'September 30, 2011', event: 'CIA drone kills U.S. citizen Anwar al-Awlaki in Yemen. No indictment, no trial, no judicial review — execution by presidential decree' },
    { date: 'October 14, 2011', event: 'Separate CIA drone strike kills 16-year-old U.S. citizen Abdulrahman al-Awlaki while eating at an outdoor restaurant in Yemen. Government claims he was not the target' },
    { date: 'February 2012', event: 'Obama administration adopts policy of counting all military-age males in strike zones as combatants unless posthumously proven innocent — artificially reducing "civilian" casualty counts' },
    { date: 'May 2012', event: 'New York Times reveals Obama personally selects targets from "kill lists" during "Terror Tuesday" meetings with advisors in the Situation Room' },
    { date: 'March 2013', event: 'Senator Rand Paul conducts 13-hour filibuster demanding answers on whether the President can kill American citizens on U.S. soil with drones. Attorney General Holder eventually says "no"' },
    { date: 'April 23, 2015', event: 'Obama admits U.S. drone strike accidentally killed American hostage Warren Weinstein and Italian hostage Giovanni Lo Porto in Pakistan. CIA did not know they were present' },
    { date: 'January 29, 2017', event: 'Trump-era SEAL raid in Yemen kills 8-year-old Nawar al-Awlaki (Anwar\'s daughter) along with 25 civilians including 9 children under age 13' },
    { date: 'March 2017', event: 'Trump removes Obama-era requirement for high-level vetting of drone strikes, loosening rules of engagement across multiple theaters' },
    { date: 'September 2019', event: 'U.S. drone strike in Afghanistan kills 30 pine nut farmers resting after a day\'s harvest — military initially claims all were ISIS fighters' },
    { date: 'August 29, 2021', event: 'U.S. drone strike in Kabul kills aid worker Zemari Ahmadi and 9 family members including 7 children during Afghan withdrawal. Pentagon initially claims it was a "righteous strike" against ISIS-K. Investigation proves the target was loading water containers, not explosives' },
  ],
  legalOutcomes: [
    { defendant: 'Barack Obama', charge: 'Authorized extrajudicial killing of U.S. citizens; expanded signature strikes', outcome: 'No charges filed — program remains classified executive action' },
    { defendant: 'John Brennan', charge: 'Repeatedly lied about zero civilian casualties; managed kill list', outcome: 'No accountability — served as CIA Director' },
    { defendant: 'CIA Drone Operators', charge: 'Execution of strikes killing civilians including children', outcome: 'No operator ever charged — identities classified' },
    { defendant: 'JSOC Personnel', charge: 'Parallel assassination program with minimal oversight', outcome: 'No charges — operations completely classified' },
    { defendant: 'Al-Aulaqi v. Obama (2010)', charge: 'ACLU/CCR lawsuit challenging the right to assassinate U.S. citizens', outcome: 'Dismissed — court ruled father lacked standing to sue on behalf of son' },
    { defendant: 'Al-Aulaqi v. Panetta (2014)', charge: 'Wrongful death suit for Anwar, Abdulrahman, and Samir Khan', outcome: 'Dismissed — court ruled targeted killings are "political questions" beyond judicial review' },
    { defendant: 'Kabul Drone Strike (2021)', charge: 'Killing of 10 civilians including 7 children in mistaken strike', outcome: 'Pentagon investigation found no violation of law — no disciplinary action taken' },
    { defendant: 'Faisal bin Ali Jaber v. Germany', charge: 'Yemeni engineer challenged use of Ramstein Air Base for drone relay', outcome: 'German court ruled Germany must ensure U.S. drone operations comply with international law' },
  ],
  charges: [
    { statute: 'U.S. Constitution — 5th Amendment', description: 'No person shall be deprived of life without due process of law. The targeted killing of U.S. citizens al-Awlaki (father and son) without any judicial process violated the most fundamental constitutional guarantee', count: 'At minimum 4 U.S. citizens killed: Anwar al-Awlaki, Abdulrahman al-Awlaki, Samir Khan, Nawar al-Awlaki' },
    { statute: 'War Crimes Act (18 U.S.C. § 2441)', description: 'Prohibits grave breaches of the Geneva Conventions including willful killing of civilians. "Signature strikes" on unidentified targets and "double-tap" strikes on rescuers constitute willful killing', count: 'Estimated 910-2,200 civilians killed across all theaters' },
    { statute: 'Geneva Conventions — Common Article 3', description: 'Prohibits violence to life, murder, and cruel treatment of persons taking no active part in hostilities. Drone strikes on weddings, funerals, and rescuers violate these protections', count: 'Multiple documented strikes on protected events and persons' },
    { statute: 'International Humanitarian Law — Principle of Distinction', description: 'Requires distinguishing between combatants and civilians. "Signature strikes" targeted behavioral patterns rather than identified individuals, killing unknown persons based on algorithmic analysis', count: 'Hundreds of signature strikes on unidentified targets' },
    { statute: 'International Humanitarian Law — Principle of Proportionality', description: 'Prohibits attacks where civilian harm is excessive relative to military advantage. Many strikes produced catastrophic civilian casualties for the killing of low-level or misidentified targets', count: 'Repeated violations documented by UN, Amnesty International, Human Rights Watch' },
    { statute: 'Executive Order 12333 — Prohibition on Assassination', description: 'President Ford\'s 1976 executive order banning political assassinations. The drone program effectively circumvented this by redefining targeted killings as "self-defense" rather than assassination', count: 'Thousands of targeted killings rebranded as military operations' },
    { statute: 'Torture Victim Protection Act (28 U.S.C. § 1350)', description: '"Double-tap" strikes — deliberately targeting rescuers and first responders arriving at the scene of an initial strike — constitute a deliberate strategy to maximize casualties and terrorize populations', count: 'Multiple documented double-tap strikes in Pakistan and Yemen' },
    { statute: '18 U.S.C. § 1119 — Foreign Murder of U.S. Nationals', description: 'Federal law criminalizing the killing of U.S. nationals abroad. The government killed multiple American citizens without criminal charges, indictments, or trial', count: '4 confirmed U.S. citizens killed by drone/military strikes' },
    { statute: 'UN Charter Article 2(4) — Prohibition on Use of Force', description: 'Drone strikes conducted in sovereign nations without consent (Pakistan, Yemen, Somalia) violate the prohibition on use of force against the territorial integrity of other states', count: 'Strikes in at least 7 countries, many without formal authorization or host nation consent' },
  ],
  coverup: [
    'John Brennan publicly claimed in June 2011 that there had not been "a single collateral death" from drone strikes in the previous year — a claim contradicted by all independent investigations, classified intelligence, and later government admissions. This was a deliberate, calculated lie to the American public.',
    'The Obama administration redefined "combatant" to mean ALL military-age males in a strike zone, automatically classifying dead civilians as militants unless proven innocent posthumously. This statistical manipulation made it nearly impossible to count civilian deaths accurately and allowed the government to claim absurdly low casualty figures.',
    'After the 2009 al-Majalah massacre in Yemen that killed 55 people including 21 children, Wikileaks cables revealed President Saleh told General Petraeus: "We\'ll continue saying the bombs are ours, not yours." The U.S. government concealed its responsibility for a mass killing of women and children.',
    'The "disposition matrix" — a comprehensive database used to determine who should be killed — was developed in secret with no congressional oversight, no judicial review, and no public accountability. The criteria for inclusion on the kill list have never been made public.',
    'The August 2021 Kabul drone strike that killed aid worker Zemari Ahmadi and 9 family members was initially described by Pentagon spokesman John Kirby as a "righteous strike." General Mark Milley called it "righteous." Only after NYT investigation proved the target was carrying water, not explosives, did the military admit error — and still no one was punished.',
    'The Obama administration fought in court to prevent release of the legal memos justifying the killing of American citizens. When finally released under court order, the memos revealed an expansive theory of executive power to kill anyone deemed a threat, with the President serving as judge, jury, and executioner.',
    'CIA routinely engaged in "signature strikes" — hitting targets based on suspicious behavior patterns detected by surveillance algorithms rather than confirmed identities. The U.S. government killed hundreds of people without even knowing who they were, then classified them as combatants after their deaths.',
    'Multiple whistleblowers including Daniel Hale (sentenced to 45 months in prison) and Brandon Bryant revealed that drone strike intelligence was often based on cell phone metadata rather than direct visual confirmation — meaning the government frequently killed whoever was carrying a particular phone, not a confirmed target.',
  ],
  sources: [
    { title: 'The Drone Papers — The Intercept (leaked classified documents)', url: 'https://theintercept.com/drone-papers/', date: 'October 15, 2015' },
    { title: 'Living Under Drones: Death, Injury and Trauma — Stanford/NYU Law School Report', url: 'https://law.stanford.edu/publications/living-under-drones-death-injury-and-trauma-to-civilians-from-us-drone-practices-in-pakistan/', date: 'September 2012' },
    { title: 'Secret "Kill List" Proves a Test of Obama\'s Principles and Will — New York Times', url: 'https://www.nytimes.com/2012/05/29/world/obamas-leadership-in-war-on-al-qaeda.html', date: 'May 29, 2012' },
    { title: 'The Bureau of Investigative Journalism — Drone Warfare Database', url: 'https://www.thebureauinvestigates.com/projects/drone-war', date: 'Ongoing' },
    { title: 'Will I Be Next? U.S. Drone Strikes in Pakistan — Amnesty International', url: 'https://www.amnesty.org/en/documents/asa33/013/2013/en/', date: 'October 2013' },
    { title: 'Times Investigation: In U.S. Drone Strike, Evidence Suggests No ISIS Bomb — New York Times (Kabul Strike)', url: 'https://www.nytimes.com/2021/09/10/world/asia/us-air-strike-drone-kabul-afghanistan-isis.html', date: 'September 10, 2021' },
    { title: 'Between a Drone and Al-Qaeda: The Civilian Cost of U.S. Targeted Killings in Yemen — Human Rights Watch', url: 'https://www.hrw.org/report/2013/10/22/between-drone-and-al-qaeda/civilian-cost-us-targeted-killings-yemen', date: 'October 22, 2013' },
    { title: 'DOJ White Paper: Lawfulness of a Lethal Operation Against a U.S. Citizen', url: 'https://fas.org/irp/eprint/doj-lethal.pdf', date: 'November 8, 2011' },
    { title: 'Daniel Hale Sentencing — Drone Whistleblower Gets 45 Months', url: 'https://www.nytimes.com/2021/07/27/us/politics/daniel-hale-drone-leak-sentence.html', date: 'July 27, 2021' },
    { title: 'Recommendation of the UN Special Rapporteur on Extrajudicial Killings', url: 'https://www.ohchr.org/en/special-procedures/sr-executions', date: 'Multiple Reports' },
  ],
};

export default function DroneAssassinationProgramPage() {
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
