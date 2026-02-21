'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowLeft, AlertTriangle, Users, Calendar, FileText, ExternalLink, Scale, ShieldAlert, Skull } from 'lucide-react';
import GlitchText from '@/components/effects/GlitchText';

const investigation = {
  title: 'Henry Kissinger\'s Crimes Against Humanity',
  subtitle: 'Architect of Genocide, Coups, and Mass Civilian Slaughter Across Four Continents',
  severity: 'critical',
  status: 'EXPOSED — SUBJECT DECEASED NOV 29, 2023',
  summary: 'Henry Alfred Kissinger served as National Security Advisor (1969\u20131975) and Secretary of State (1973\u20131977) under Presidents Nixon and Ford and used those positions to orchestrate some of the most devastating atrocities in modern history. He secretly bombed Cambodia in Operation Menu and subsequent campaigns, killing an estimated 150,000\u2013500,000+ civilians and destabilizing the country into the Khmer Rouge genocide. He engineered the September 11, 1973 coup in Chile that overthrew democratically elected President Salvador Allende and installed dictator Augusto Pinochet, whose regime murdered 3,000+ and tortured 40,000+. He gave the \u201Cgreen light\u201D to Indonesia\u2019s invasion of East Timor, resulting in 100,000\u2013180,000 deaths. He supported Pakistan\u2019s genocide in Bangladesh (1971), backed Argentina\u2019s military junta in the Dirty War, helped coordinate Operation Condor across Latin America, massively escalated bombing in Vietnam and Laos, and sabotaged the 1968 Vietnam peace talks for political gain\u2014a violation of the Logan Act. Despite warrants from multiple countries and overwhelming documentary evidence, Kissinger evaded justice for over fifty years, shielded by successive U.S. administrations, until his death at age 100.',
  keyFigures: [
    { name: 'Henry Kissinger', role: 'National Security Advisor (1969\u20131975), Secretary of State (1973\u20131977) \u2014 Chief architect of multiple genocides and coups', href: '/entities/individuals/henry-kissinger', status: 'Deceased (Nov 29, 2023)' },
    { name: 'Richard Nixon', role: '37th President of the United States \u2014 Authorized secret Cambodia bombing, Chile coup, and other Kissinger operations', href: '/entities/individuals/richard-nixon', status: 'Deceased' },
    { name: 'Gerald Ford', role: '38th President of the United States \u2014 Continued Kissinger policies, approved East Timor invasion green light', href: '/entities/individuals/gerald-ford', status: 'Deceased' },
    { name: 'Augusto Pinochet', role: 'Dictator of Chile (1973\u20131990) \u2014 Installed via CIA-backed coup orchestrated by Kissinger; 3,000+ murdered, 40,000+ tortured', href: '/entities/individuals/augusto-pinochet', status: 'Deceased' },
    { name: 'Salvador Allende', role: 'Democratically elected President of Chile \u2014 Overthrown and killed during the September 11, 1973 coup', href: '/entities/individuals/salvador-allende', status: 'Deceased (Victim)' },
    { name: 'Richard Helms', role: 'CIA Director (1966\u20131973) \u2014 Executed covert operations in Chile, Cambodia, and Latin America under Kissinger\u2019s direction', href: '/entities/individuals/richard-helms', status: 'Deceased' },
    { name: 'Jorge Rafael Videla', role: 'Argentine military dictator (1976\u20131981) \u2014 Kissinger gave tacit approval for Dirty War; 30,000+ disappeared', href: '/entities/individuals/jorge-videla', status: 'Deceased' },
    { name: 'Alexander Haig', role: 'White House Chief of Staff, later Secretary of State \u2014 Key intermediary executing Kissinger\u2019s orders', href: null, status: 'Deceased' },
    { name: 'Suharto', role: 'Indonesian dictator \u2014 Received Kissinger-Ford green light for East Timor invasion; 100,000\u2013180,000 killed', href: null, status: 'Deceased' },
    { name: 'Yahya Khan', role: 'President of Pakistan (1969\u20131971) \u2014 Perpetrated Bangladesh genocide with Kissinger\u2019s support and weapons', href: null, status: 'Deceased' },
    { name: 'Lon Nol', role: 'Cambodian leader installed after US-backed coup \u2014 Regime propped up while secret bombing devastated countryside', href: null, status: 'Deceased' },
    { name: 'Ren\u00E9 Schneider', role: 'Chilean Army Commander-in-Chief \u2014 Assassinated in CIA kidnapping plot approved by Kissinger to clear path for coup', href: null, status: 'Deceased (Victim)' },
    { name: 'Orlando Letelier', role: 'Chilean diplomat and Allende minister \u2014 Assassinated by Pinochet\u2019s DINA in Washington, D.C. (1976)', href: null, status: 'Deceased (Victim)' },
    { name: 'Christopher Hitchens', role: 'Journalist and author of The Trial of Henry Kissinger (2001) \u2014 Documented case for war crimes prosecution', href: null, status: 'Deceased' },
    { name: 'Brent Scowcroft', role: 'National Security Advisor \u2014 Kissinger prot\u00E9g\u00E9 who continued interventionist policies', href: null, status: 'Deceased' },
    { name: 'Manuel Contreras', role: 'Head of Chilean DINA secret police \u2014 Directed torture and assassination program under Pinochet with Kissinger\u2019s knowledge', href: null, status: 'Deceased' },
  ],
  timeline: [
    { date: 'Oct 1968', event: 'Kissinger secretly feeds classified intel to Nixon campaign about Vietnam peace talks, sabotaging LBJ\u2019s Paris negotiations \u2014 a clear Logan Act violation' },
    { date: 'Jan 1969', event: 'Kissinger becomes National Security Advisor under Nixon; immediately begins planning secret Cambodia operations' },
    { date: 'Mar 1969', event: 'Operation Menu begins: Secret B-52 carpet bombing of Cambodia without Congressional knowledge. 3,875 sorties drop 108,823 tons of bombs' },
    { date: 'Mar 1969 \u2013 May 1970', event: 'Cambodia bombing expands through Operations Breakfast, Lunch, Snack, Dinner, Dessert, and Supper \u2014 codenames for systematic civilian slaughter' },
    { date: 'Nov 1969', event: 'My Lai massacre coverup: Kissinger helps suppress investigation into the killing of 500+ Vietnamese civilians by U.S. troops' },
    { date: 'Mar 1970', event: 'Kissinger supports coup overthrowing Cambodian Prince Sihanouk, replacing him with pro-US Lon Nol government' },
    { date: 'Mar 1971', event: 'Pakistan launches Operation Searchlight in Bangladesh (East Pakistan). Kissinger and Nixon back Pakistan despite State Department cables documenting genocide. Blood Telegram sent by Consul General Archer Blood documenting atrocities' },
    { date: 'Jul 1971', event: 'Kissinger\u2019s secret trip to China via Pakistan, rewarding Yahya Khan\u2019s regime during active genocide' },
    { date: 'Sep 1970', event: 'Kissinger orders CIA to prevent Allende\u2019s inauguration in Chile: "Make the economy scream." Track I and Track II covert operations begin' },
    { date: 'Oct 1970', event: 'Chilean Army Commander-in-Chief Ren\u00E9 Schneider assassinated in CIA kidnapping plot approved by Kissinger to remove obstacle to coup' },
    { date: 'Sep 11, 1973', event: 'CIA-backed military coup overthrows Allende in Chile. Allende dies in La Moneda palace. Pinochet seizes power. Kissinger: "We didn\u2019t do it... I mean we helped them."' },
    { date: '1973\u20131990', event: 'Pinochet regime kills 3,000+, tortures 40,000+, and disappears thousands in concentration camps and \u201CCaravan of Death\u201D operations' },
    { date: '1973\u20131975', event: 'Kissinger oversees massive expansion of Laos bombing. Over 2 million tons of ordnance dropped on Laos total \u2014 making it the most heavily bombed country per capita in history. 200 million unexploded bombs remain' },
    { date: 'Sep 1973', event: 'Kissinger becomes Secretary of State while retaining National Security Advisor role \u2014 unprecedented dual power consolidation' },
    { date: 'Sep 1974', event: 'Operation Condor formally launched: US-backed coordination of South American dictatorships to assassinate dissidents across borders. Kissinger briefed and supportive' },
    { date: 'Sep 1976', event: 'Orlando Letelier and American Ronni Moffitt assassinated by car bomb in Washington, D.C. by Pinochet\u2019s DINA agents. Kissinger\u2019s State Department slow-walked warnings' },
    { date: 'Dec 6, 1975', event: 'Kissinger and Ford meet Suharto in Jakarta. Within 24 hours, Indonesia invades East Timor. Kissinger personally approves use of American weapons for the invasion' },
    { date: '1975\u20131999', event: 'Indonesian occupation of East Timor kills 100,000\u2013180,000 people (roughly one-quarter to one-third of the population) using US-supplied weapons' },
    { date: '1976\u20131983', event: 'Argentine Dirty War: Military junta disappears 30,000+ people. Kissinger tells Argentine foreign minister: "If there are things that have to be done, you should do them quickly."' },
    { date: '1977', event: 'Kissinger leaves government, founds Kissinger Associates \u2014 begins lucrative consulting for dictators and authoritarian regimes worldwide' },
    { date: '2001', event: 'Christopher Hitchens publishes The Trial of Henry Kissinger, laying out comprehensive war crimes case. French judge Roger Le Loire issues summons for Kissinger to testify about Operation Condor' },
    { date: '2001\u20132002', event: 'Argentine judge Rodolfo Canicoba Corral requests Kissinger\u2019s testimony on Dirty War. Chilean judge Juan Guzm\u00E1n issues questions about the Schneider assassination. Brazilian court issues summons. Kissinger refuses all' },
    { date: '2002', event: 'Bush appoints Kissinger to head 9/11 Commission \u2014 forced to resign within weeks due to conflicts of interest with Kissinger Associates\u2019 client list' },
    { date: 'Nov 29, 2023', event: 'Kissinger dies at age 100 at his home in Kent, Connecticut, having never faced trial for any of his crimes. Millions of victims received no justice' },
  ],
  legalOutcomes: [
    { defendant: 'Henry Kissinger', charge: 'French summons for testimony on Operation Condor (Judge Le Loire, 2001)', outcome: 'Kissinger fled Paris to avoid being served; refused to cooperate' },
    { defendant: 'Henry Kissinger', charge: 'Argentine judicial request for testimony on Dirty War disappearances (Judge Canicoba Corral, 2001)', outcome: 'U.S. State Department refused to serve summons on Kissinger' },
    { defendant: 'Henry Kissinger', charge: 'Chilean judicial inquiry into Schneider assassination (Judge Guzm\u00E1n, 2001)', outcome: 'Kissinger refused to answer written questions; never testified' },
    { defendant: 'Henry Kissinger', charge: 'Brazilian court summons for testimony on Operation Condor', outcome: 'Ignored; U.S. provided no cooperation' },
    { defendant: 'Henry Kissinger', charge: 'Spanish universal jurisdiction investigation (Judge Garc\u00E9s, Operation Condor)', outcome: 'Kissinger unreachable due to U.S. government protection' },
    { defendant: 'Henry Kissinger', charge: 'Christopher Hitchens\u2019 case for prosecution \u2014 war crimes, crimes against humanity, kidnapping, murder', outcome: 'No formal prosecution ever initiated by any U.S. authority' },
    { defendant: 'Augusto Pinochet', charge: 'Genocide, torture, crimes against humanity (Spanish warrant, Judges Garz\u00F3n/Garc\u00E9s)', outcome: 'Arrested in London 1998; returned to Chile; died 2006 without conviction. Kissinger connection documented but never prosecuted' },
    { defendant: 'Manuel Contreras', charge: 'Murder of Orlando Letelier and Ronni Moffitt (DINA, Washington D.C.)', outcome: 'Convicted in Chile (1993) and U.S. (in absentia). Kissinger\u2019s role in enabling DINA never prosecuted' },
    { defendant: 'Jorge Rafael Videla', charge: 'Crimes against humanity, Dirty War disappearances', outcome: 'Convicted 2010, life sentence. Died in prison 2013. Kissinger\u2019s "do it quickly" encouragement entered historical record but no U.S. charges' },
    { defendant: 'Richard Nixon', charge: 'Conspiracy to obstruct justice (Watergate, related to Cambodia cover-up)', outcome: 'Resigned August 9, 1974. Pardoned by Ford. Cambodia bombing never prosecuted' },
  ],
  charges: [
    { statute: 'ICC Rome Statute \u2014 Article 7: Crimes Against Humanity', description: 'Systematic attack against civilian populations: Cambodia bombing (150,000\u2013500,000+ dead), Laos bombing (200,000+ dead), East Timor invasion support (100,000\u2013180,000 dead)', count: 'Millions of civilian casualties across multiple countries and decades' },
    { statute: 'ICC Rome Statute \u2014 Article 8: War Crimes', description: 'Intentionally directing attacks against civilian populations, cities, and villages not justified by military necessity. Indiscriminate carpet bombing of Cambodian villages', count: '113,716 sites bombed in Cambodia alone' },
    { statute: 'Convention on the Prevention and Punishment of the Crime of Genocide (1948)', description: 'Complicity in genocide: Providing direct military and diplomatic support to Pakistan during Bangladesh genocide (1971), supporting Indonesian genocide in East Timor (1975\u20131999)', count: 'Accessory to 300,000\u20133,000,000 deaths (Bangladesh) and 100,000\u2013180,000 deaths (East Timor)' },
    { statute: 'Geneva Convention IV \u2014 Protection of Civilian Persons in Time of War', description: 'Willful killing, torture, and inhuman treatment of protected persons. Deliberate targeting of civilian infrastructure in Cambodia, Laos, and Vietnam', count: 'Systematic violations across Southeast Asia (1969\u20131975)' },
    { statute: 'Logan Act (18 U.S.C. \u00A7 953)', description: 'Unauthorized negotiation with foreign government: Kissinger, as a private citizen in 1968, secretly communicated with South Vietnamese government to sabotage Paris peace talks, prolonging the war for political gain', count: 'One count \u2014 resulted in estimated 20,000+ additional American and countless Vietnamese deaths' },
    { statute: '18 U.S.C. \u00A7 2441 \u2014 War Crimes Act', description: 'Grave breaches of the Geneva Conventions committed by or against U.S. nationals. Kissinger authorized operations that constituted grave breaches in multiple theaters', count: 'Multiple counts across Cambodia, Vietnam, Laos, Chile' },
    { statute: '18 U.S.C. \u00A7 1116 \u2014 Murder of Foreign Officials', description: 'Conspiracy in the assassination of Chilean Army Commander-in-Chief Ren\u00E9 Schneider (October 1970) to remove obstacle to military coup', count: 'One count \u2014 CIA kidnapping plot directly authorized by Kissinger' },
    { statute: '18 U.S.C. \u00A7 371 \u2014 Conspiracy to Commit Offense Against the United States', description: 'Conspiracy to conceal the secret bombing of Cambodia from Congress and the American public (1969\u20131973). Falsified military records, dual reporting systems', count: 'Ongoing conspiracy (1969\u20131973)' },
    { statute: 'OAS Inter-American Convention on Forced Disappearance of Persons', description: 'Complicity in the forced disappearance of tens of thousands across Latin America through Operation Condor coordination and diplomatic cover for participating dictatorships', count: '60,000\u201380,000 murders and 400,000+ political imprisonments under Operation Condor' },
    { statute: 'UN Convention Against Torture (CAT)', description: 'Aiding and abetting torture by providing military aid, training, and diplomatic protection to regimes known to practice systematic torture: Chile, Argentina, Brazil, Indonesia, Pakistan', count: 'Hundreds of thousands of documented torture victims across client states' },
  ],
  coverup: [
    'The secret bombing of Cambodia (1969\u20131973) was hidden from Congress through a dual reporting system: official records showed bombs falling on South Vietnam while B-52s actually struck Cambodia. Kissinger personally supervised the falsification through a "back-channel" reporting system',
    'When the New York Times broke the Cambodia bombing story in May 1969, Kissinger ordered FBI wiretaps on his own NSC staff and journalists to identify the leaker \u2014 the beginning of the Nixon-era domestic surveillance that led to Watergate',
    'Kissinger systematically removed or classified documents related to Chile operations. Key cables were destroyed. The "Track II" covert operation to prevent Allende\u2019s inauguration was hidden from the Secretary of State, Secretary of Defense, and U.S. Ambassador to Chile',
    'The "Blood Telegram" \u2014 sent by U.S. Consul General Archer Blood documenting Pakistan\u2019s genocide in Bangladesh \u2014 was suppressed and Blood was punished with reassignment for reporting the atrocities Kissinger was supporting',
    'Kissinger and Ford delayed issuing any warning to Pinochet about Operation Condor assassinations. A cable drafted to warn against cross-border killings was rescinded on Kissinger\u2019s orders \u2014 three weeks before the Letelier assassination in Washington, D.C.',
    'When French, Argentine, Chilean, and Brazilian judges sought Kissinger\u2019s testimony on Operation Condor in 2001\u20132002, the U.S. State Department and successive administrations actively shielded him from service of process and refused all cooperation',
    'Kissinger Associates\u2019 client list was kept secret. When appointed to head the 9/11 Commission in 2002, Kissinger resigned rather than disclose his clients, which reportedly included Saudi Arabian royals and defense contractors',
    'Declassified documents (released 1999\u20132004 under the Chile Declassification Project) confirmed Kissinger\u2019s direct role in the Chile coup, but by then the political will for prosecution had evaporated',
    'The U.S. government has never acknowledged criminal liability for the secret Cambodia bombing, despite it being conducted without Congressional authorization and in a neutral country \u2014 a clear violation of the War Powers framework',
    'Kissinger received the Nobel Peace Prize in 1973 for the Vietnam ceasefire \u2014 a war he personally escalated and whose peace talks he had sabotaged in 1968. Co-laureate Le Duc Tho refused the prize. Two Nobel Committee members resigned in protest',
    'Major U.S. media outlets consistently described Kissinger as a "statesman" and "diplomatic giant" in obituaries upon his death in 2023, largely omitting or minimizing the millions of civilian deaths attributable to his policies',
    'The U.S. legal system\u2019s doctrine of sovereign immunity and political question doctrine were effectively weaponized to prevent any domestic judicial review of Kissinger\u2019s actions, despite abundant evidence meeting international criminal law standards',
  ],
  sources: [
    { title: 'The Trial of Henry Kissinger \u2014 Christopher Hitchens (Verso Books, 2001)', url: 'https://www.versobooks.com/products/2369-the-trial-of-henry-kissinger', date: '2001' },
    { title: 'Kissinger\u2019s Shadow: The Long Reach of America\u2019s Most Controversial Statesman \u2014 Greg Grandin (Metropolitan Books)', url: 'https://us.macmillan.com/books/9781250113917/kissingersshadow', date: '2015' },
    { title: 'The Blood Telegram: Nixon, Kissinger, and a Forgotten Genocide \u2014 Gary J. Bass (Knopf)', url: 'https://www.penguinrandomhouse.com/books/216426/the-blood-telegram-by-gary-j-bass/', date: '2013' },
    { title: 'National Security Archive \u2014 Chile Documentation Project: Kissinger and Chile', url: 'https://nsarchive2.gwu.edu/NSAEBB/NSAEBB437/', date: '2013' },
    { title: 'National Security Archive \u2014 Kissinger and East Timor: Declassified Documents', url: 'https://nsarchive2.gwu.edu/NSAEBB/NSAEBB62/', date: '2001' },
    { title: 'National Security Archive \u2014 Operation Condor on Trial: Declassified U.S. Documents', url: 'https://nsarchive.gwu.edu/briefing-book/southern-cone/2019-05-28/operation-condor-trial-legal-proceedings-unprecedented-latin-american-cold-war', date: '2019' },
    { title: 'Yale University \u2014 Cambodia Genocide Program: Bombing Database', url: 'https://gsp.yale.edu/case-studies/cambodian-genocide-program', date: 'Ongoing' },
    { title: 'The Intercept \u2014 The Kissinger Cables (WikiLeaks/Intercept Analysis)', url: 'https://theintercept.com/2023/11/29/henry-kissinger-obituary/', date: '2023' },
    { title: 'Rolling Stone \u2014 Henry Kissinger, War Criminal Beloved by America\u2019s Ruling Class, Finally Dies', url: 'https://www.rollingstone.com/politics/political-commentary/henry-kissinger-war-criminal-dead-1234914964/', date: '2023' },
    { title: 'Declassified Documents: U.S. Policy in Chile (1969\u20131973) \u2014 National Security Archive', url: 'https://nsarchive2.gwu.edu/NSAEBB/NSAEBB8/nsaebb8i.htm', date: '1999' },
    { title: 'Senate Select Committee (Church Committee) \u2014 Covert Action in Chile 1963\u20131973', url: 'https://www.intelligence.senate.gov/sites/default/files/94chile.pdf', date: '1975' },
    { title: 'Jacobin \u2014 Henry Kissinger\u2019s Crimes Should Never Be Forgotten', url: 'https://jacobin.com/2023/11/henry-kissinger-death-united-states-foreign-policy-war-crimes', date: '2023' },
  ],
};

export default function KissingerCrimesPage() {
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
