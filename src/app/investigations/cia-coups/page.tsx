'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowLeft, AlertTriangle, Users, Calendar, FileText, ExternalLink, Scale, ShieldAlert, Skull } from 'lucide-react';
import GlitchText from '@/components/effects/GlitchText';

const investigation = {
  title: 'CIA Coups & Regime Change',
  subtitle: 'Seven Decades of Overthrowing Democracies and Installing Dictators',
  severity: 'critical',
  status: 'Confirmed — Declassified Documents',
  summary: 'From 1953 to the present, the Central Intelligence Agency has orchestrated, facilitated, or supported the overthrow of at least 25 governments worldwide — most of them democratically elected. In Iran (1953), Operation TPAJAX overthrew Prime Minister Mohammad Mossadegh to protect British and American oil interests, installing Shah Pahlavi whose secret police SAVAK tortured and killed tens of thousands. In Guatemala (1954), Operation PBSUCCESS toppled President Jacobo Árbenz to protect United Fruit Company profits, triggering a 36-year civil war that killed over 200,000 people, including a documented genocide of Mayan indigenous communities. In the Congo (1960-61), the CIA collaborated with Belgian intelligence to assassinate Patrice Lumumba, the first democratically elected leader of the newly independent nation, installing the kleptocratic dictator Mobutu Sese Seko who plundered the country for 32 years. In Brazil (1964), the CIA backed a military coup against President João Goulart, ushering in 21 years of military dictatorship during which thousands were tortured and killed. In Indonesia (1965-66), the CIA provided kill lists to the Indonesian military, facilitating the mass murder of an estimated 500,000 to 1,000,000 people in an anti-communist purge that brought General Suharto to power. In Chile (1973), the CIA spent $8 million destabilizing the democratically elected government of Salvador Allende, culminating in Augusto Pinochet\\\'s military coup on September 11, 1973 — Allende died in the presidential palace, and Pinochet\\\'s 17-year dictatorship killed over 3,200 people and tortured more than 40,000. In Nicaragua (1980s), the CIA armed, trained, and directed the Contras, who committed systematic atrocities including murder, rape, and torture against civilians, killing over 30,000 people. In Haiti, the CIA supported the Duvalier dynasty and later undermined Jean-Bertrand Aristide\\\'s democratically elected government multiple times. In Honduras (2009), the Obama administration tacitly supported a military coup against President Manuel Zelaya. In Libya (2011), CIA operations contributed to the overthrow of Muammar Gaddafi, plunging the country into a decade of civil war. Additional operations targeted Syria, South Vietnam (1963 coup against Diem), Greece (1967 military junta), Bolivia, the Dominican Republic (1965), Cambodia, Laos, Afghanistan, Iraq, and dozens of other nations. Conservative estimates place the total death toll from CIA regime change operations at well over 6 million people.',
  coverup: [
    'OPERATION AJAX CLASSIFIED 60+ YEARS: Full CIA operational history of the 1953 Iran coup was classified until 2013. The CIA denied involvement for decades despite overwhelming evidence. The 2013 release was still heavily redacted.',
    'GUATEMALA GENOCIDE DENIED: Despite Church Committee revelations, the US government continued to deny responsibility for Guatemala\\\'s civil war and genocide until President Clinton\\\'s 1999 apology. CIA documents about PBSUCCESS remain partially classified.',
    'LUMUMBA ASSASSINATION COVERED UP: The CIA\\\'s role in Patrice Lumumba\\\'s assassination was hidden for decades. The Church Committee revealed assassination plots in 1975, but the full extent of CIA involvement was not acknowledged until Belgian parliamentary investigations in 2001.',
    'INDONESIA KILL LISTS DENIED: The CIA\\\'s provision of kill lists containing thousands of names to the Indonesian military during the 1965-66 massacres was denied for decades. Documents released in 2017 confirmed the CIA\\\'s direct support for the mass killings.',
    'CHILE DOCUMENTS STILL CLASSIFIED: Though thousands of documents were declassified under Clinton in 1999-2000, significant CIA records about the Chile coup and Operation Condor remain classified. The CIA\\\'s "Track II" plan to prevent Allende\\\'s inauguration was hidden for years.',
    'OPERATION CONDOR COLLABORATION: The CIA\\\'s coordination of Operation Condor — a campaign of political repression and assassination across six South American dictatorships — was systematically denied. Documents show the CIA helped create DINA, Pinochet\\\'s secret police.',
    'CONTRA DRUG TRAFFICKING SUPPRESSED: CIA Inspector General Frederick Hitz confirmed in 1998 that the CIA knew about and protected Contra drug trafficking networks. The story was suppressed for years and journalist Gary Webb was destroyed professionally for reporting it.',
    'PHOENIX PROGRAM BODY COUNT HIDDEN: The CIA\\\'s Phoenix Program in Vietnam, which assassinated an estimated 20,000-40,000 suspected Viet Cong, was initially denied entirely. William Colby later admitted to 20,587 killed under the program.',
    'CHURCH COMMITTEE REFORMS GUTTED: After the Church Committee exposed CIA assassination programs in 1975, Executive Order 11905 banned assassinations. However, subsequent administrations routinely circumvented this through creative legal interpretations and proxy operations.',
    'MEDIA MANIPULATION VIA MOCKINGBIRD: Operation Mockingbird placed CIA assets in major news organizations to shape public perception and suppress stories about coups. The program ensured that regime change operations were framed as "anti-communist" rather than anti-democratic.',
    'FREEDOM OF INFORMATION STONEWALLING: The CIA has systematically delayed, redacted, and withheld documents about regime change operations using national security exemptions. FOIA requests about coups routinely take decades to process.',
    'CONGRESSIONAL OVERSIGHT CIRCUMVENTED: The CIA routinely conducted covert operations without proper congressional notification, as required by law. When Congress passed the Boland Amendment to stop Contra funding, the CIA simply moved operations off-book through Oliver North\\\'s "Enterprise."'
  ],
  keyFigures: [
    { name: 'Allen Dulles', role: 'CIA Director (1953-1961) — Architect of the Iran and Guatemala coups, authorized MKUltra, launched Bay of Pigs, expanded global covert operations. His brother John Foster Dulles served as Secretary of State simultaneously, creating an unprecedented consolidation of covert and diplomatic power.', href: '/entities/individuals/allen-dulles', status: 'Died 1969 — Never Charged' },
    { name: 'John Foster Dulles', role: 'Secretary of State (1953-1959) — Coordinated with brother Allen Dulles on regime change operations. Previously represented United Fruit Company as a Sullivan & Cromwell attorney, directly profiting from the Guatemala coup.', href: '/entities/individuals/john-foster-dulles', status: 'Died 1959 — Never Charged' },
    { name: 'Dwight D. Eisenhower', role: 'President (1953-1961) — Authorized the Iran coup (Operation Ajax), Guatemala coup (PBSUCCESS), Congo assassination plots, and Cuba invasion planning. Later warned of the "military-industrial complex" he helped build.', href: '/entities/individuals/dwight-eisenhower', status: 'Died 1969 — Never Charged' },
    { name: 'Kermit Roosevelt Jr.', role: 'CIA operative who personally directed Operation TPAJAX in Iran (1953), bribing politicians, hiring mobs, and orchestrating the overthrow of Mossadegh. Later lobbied for foreign governments as a private consultant.', href: '/entities/individuals/kermit-roosevelt', status: 'Died 2000 — Never Charged' },
    { name: 'Henry Kissinger', role: 'National Security Advisor & Secretary of State — Oversaw "Track II" to prevent Allende\\\'s inauguration in Chile, orchestrated Pinochet coup support, enabled Indonesia\\\'s genocide in East Timor, authorized secret bombing of Cambodia (150,000+ civilians killed), and supported Operation Condor.', href: '/entities/individuals/henry-kissinger', status: 'Died 2023 — Never Charged' },
    { name: 'Richard Nixon', role: 'President (1969-1974) — Ordered the CIA to "make the economy scream" in Chile to destabilize Allende, authorized Track I and Track II operations, expanded covert operations in Southeast Asia and Latin America.', href: '/entities/individuals/richard-nixon', status: 'Died 1994 — Resigned; Never Charged for Coups' },
    { name: 'Richard Helms', role: 'CIA Director (1966-1973) — Oversaw CIA operations during the Chile coup, Phoenix Program in Vietnam, domestic surveillance (Operation CHAOS). Convicted of lying to Congress about CIA activities in Chile. Destroyed MKUltra records.', href: '/entities/individuals/richard-helms', status: 'Died 2002 — Convicted of Perjury (1977)' },
    { name: 'Frank Wisner', role: 'CIA Deputy Director of Plans (1948-1958) — Created the covert action infrastructure used for regime changes. Ran Operation Mockingbird to control media narratives. Oversaw early operations in Eastern Europe, Guatemala, and Iran.', href: '/entities/individuals/frank-wisner', status: 'Died 1965 — Never Charged' },
    { name: 'John F. Kennedy', role: 'President (1961-1963) — Inherited and approved the Bay of Pigs invasion which failed catastrophically. Authorized Operation Mongoose to overthrow Castro. Approved the coup against South Vietnam\\\'s President Diem in 1963.', href: '/entities/individuals/john-f-kennedy', status: 'Assassinated 1963' },
    { name: 'Ronald Reagan', role: 'President (1981-1989) — Authorized CIA funding and direction of the Contras in Nicaragua in violation of the Boland Amendment. Expanded covert operations in Central America, Afghanistan, Angola, and Cambodia under the "Reagan Doctrine."', href: '/entities/individuals/ronald-reagan', status: 'Died 2004 — Never Charged' },
    { name: 'William Casey', role: 'CIA Director (1981-1987) — Massively expanded covert operations worldwide under Reagan. Orchestrated Contra support operations, armed Afghan mujahideen, and ran covert wars on three continents simultaneously.', href: '/entities/individuals/william-casey', status: 'Died 1987 — Never Charged' },
    { name: 'George H.W. Bush', role: 'CIA Director (1976-1977), Vice President (1981-1989), President (1989-1993) — Pardoned six Iran-Contra figures on Christmas Eve 1992. As CIA Director, oversaw agency during Operation Condor. As President, invaded Panama to remove former CIA asset Manuel Noriega.', href: '/entities/individuals/george-hw-bush', status: 'Died 2018 — Never Charged' },
    { name: 'Oliver North', role: 'NSC Staff Member — Ran the secret "Enterprise" that illegally funded the Contras using proceeds from arms sales to Iran. Destroyed thousands of documents. Convicted on three felony counts, later reversed on technicality.', href: '/entities/individuals/oliver-north', status: 'Convictions Reversed' },
    { name: 'Augusto Pinochet', role: 'Chilean dictator (1973-1990) — Installed by CIA-backed coup against Allende. His regime killed 3,200+ people, tortured 40,000+, and ran Operation Condor\\\'s assassination network across South America, including the car bombing of Orlando Letelier in Washington, D.C.', href: '/entities/individuals/augusto-pinochet', status: 'Died 2006 — Indicted; Never Convicted' },
    { name: 'Salvador Allende', role: 'Democratically elected President of Chile (1970-1973) — Target of CIA destabilization campaign. Died during the September 11, 1973 military coup when the presidential palace was bombed. Officially ruled suicide.', href: '/entities/individuals/salvador-allende', status: 'Killed During Coup — 1973' },
    { name: 'Patrice Lumumba', role: 'First democratically elected Prime Minister of the Congo (1960) — Target of CIA assassination plot authorized by Eisenhower. Captured with CIA/Belgian assistance and executed by firing squad on January 17, 1961.', href: '/entities/individuals/patrice-lumumba', status: 'Assassinated 1961' },
    { name: 'Barack Obama', role: 'President (2009-2017) — Administration tacitly supported the 2009 Honduras coup, refused to call it a "military coup" which would have required cutting aid. Authorized the 2011 Libya intervention that led to Gaddafi\\\'s overthrow and the country\\\'s collapse into civil war.', href: '/entities/individuals/barack-obama', status: 'No Charges' },
    { name: 'Hillary Clinton', role: 'Secretary of State (2009-2013) — Advocated for Libya intervention in 2011. Emails revealed she was advised that the Honduras coup was illegal but the administration avoided formal designation. Later joked about Gaddafi\\\'s murder: "We came, we saw, he died."', href: '/entities/individuals/hillary-clinton', status: 'No Charges' },
    { name: 'Manuel Contreras', role: 'Head of DINA (Chile\\\'s secret police, 1973-1977) — CIA asset who ran Pinochet\\\'s torture and assassination apparatus. Ordered the car bombing assassination of Orlando Letelier in Washington, D.C. in 1976.', href: '/entities/individuals/manuel-contreras', status: 'Convicted — Died in Prison 2015' }
  ],
  timeline: [
    { date: '1947', event: 'National Security Act creates the CIA. Covert action authority derived from vague "other functions" clause — no explicit congressional authorization for regime change.' },
    { date: '1948-1953', event: 'CIA conducts covert operations in Italy, Albania, Eastern Europe, and the Philippines. Frank Wisner builds the Office of Policy Coordination covert action apparatus.' },
    { date: 'August 1953', event: 'OPERATION AJAX (TPAJAX): CIA overthrows Iranian Prime Minister Mohammad Mossadegh, installs Shah Pahlavi. Triggered by Iran\\\'s nationalization of Anglo-Iranian Oil Company (now BP). Cost: $1 million in bribes.' },
    { date: 'June 1954', event: 'OPERATION PBSUCCESS: CIA overthrows Guatemalan President Jacobo Árbenz to protect United Fruit Company. Begins 36-year civil war; 200,000+ killed including Mayan genocide documented by UN truth commission.' },
    { date: '1960-1961', event: 'CONGO: CIA-backed plot to assassinate Prime Minister Patrice Lumumba. Sidney Gottlieb personally carries poison to Congo. Lumumba captured with CIA help, executed January 17, 1961. Mobutu installed, rules for 32 years.' },
    { date: 'April 1961', event: 'BAY OF PIGS: CIA-organized invasion of Cuba fails catastrophically. 1,400 CIA-trained Cuban exiles defeated in three days. JFK fires Allen Dulles.' },
    { date: 'November 1963', event: 'SOUTH VIETNAM: CIA-backed coup overthrows and assassinates President Ngo Dinh Diem. Kennedy had approved the coup but was reportedly shocked by Diem\\\'s murder. JFK assassinated three weeks later.' },
    { date: 'March 1964', event: 'BRAZIL: CIA supports military coup overthrowing President João Goulart (Operation Brother Sam). Military dictatorship lasts 21 years; systematic torture and killings.' },
    { date: '1965-1966', event: 'INDONESIA: CIA provides kill lists to Indonesian military. 500,000-1,000,000 people massacred in anti-communist purge. General Suharto seizes power, rules for 32 years with continuous US support.' },
    { date: 'April 1967', event: 'GREECE: CIA-backed military junta seizes power in Athens. The "Regime of the Colonels" rules until 1974, with systematic torture documented by Amnesty International.' },
    { date: 'September 11, 1973', event: 'CHILE: Military coup overthrows President Salvador Allende. Pinochet\\\'s regime kills 3,200+, tortures 40,000+. CIA spent $8 million destabilizing Allende\\\'s government. Kissinger: "I don\\\'t see why we need to stand by and watch a country go communist."' },
    { date: '1975', event: 'CHURCH COMMITTEE: Senator Frank Church\\\'s committee exposes CIA assassination plots against foreign leaders, domestic surveillance, and illegal covert operations. Recommends major reforms.' },
    { date: '1975-1989', event: 'OPERATION CONDOR: CIA-coordinated campaign of political repression across six South American military dictatorships. 60,000+ killed, 400,000+ imprisoned.' },
    { date: '1976', event: 'CIA asset Manuel Contreras orders car bombing of Chilean dissident Orlando Letelier on Embassy Row in Washington, D.C. — an act of state-sponsored terrorism on American soil.' },
    { date: '1978', event: 'Executive Order 12036 (Carter) bans assassinations. CIA shifts to proxy operations and plausible deniability structures.' },
    { date: '1979-1992', event: 'AFGHANISTAN: CIA\\\'s Operation Cyclone arms Afghan mujahideen with $3 billion+ in weapons including Stinger missiles. Creates jihadist networks that later become al-Qaeda and the Taliban.' },
    { date: '1981-1990', event: 'NICARAGUA: CIA arms, trains, and directs Contra rebels. 30,000+ killed. Iran-Contra scandal exposes illegal funding through arms sales to Iran. World Court rules US guilty of "unlawful use of force."' },
    { date: '1989', event: 'PANAMA: US invades Panama (Operation Just Cause) to remove Manuel Noriega — a former CIA asset and drug trafficker who fell out of favor. Hundreds of civilians killed.' },
    { date: '1990s-2000s', event: 'CIA involved in Haiti\\\'s political destabilization, supporting the 1991 and 2004 coups against Jean-Bertrand Aristide. CIA funded and maintained relationships with Haitian paramilitary death squad FRAPH.' },
    { date: 'June 2009', event: 'HONDURAS: Military coup overthrows President Manuel Zelaya. Obama administration refuses to call it a "coup," avoiding legally mandated aid cutoff. The country descends into violence and becomes a murder capital.' },
    { date: '2011', event: 'LIBYA: NATO intervention, backed by CIA operations, leads to overthrow and killing of Muammar Gaddafi. Libya collapses into civil war, becomes failed state with open slave markets.' },
    { date: '2012-present', event: 'SYRIA: CIA\\\'s Timber Sycamore program provides $1 billion+ per year to arm Syrian rebel groups, many of which had ties to jihadist organizations. The program was shut down by Trump in 2017.' },
    { date: '2013', event: 'CIA finally releases (heavily redacted) operational history admitting its role in the 1953 Iran coup, 60 years after the fact.' },
    { date: '2017', event: 'Declassified documents confirm CIA provided kill lists and communications equipment to Indonesian military during the 1965-66 massacres.' }
  ],
  charges: [
    { statute: 'Nuremberg Principles (1945) — Crimes Against Peace', description: 'Planning, preparing, initiating, or waging wars of aggression and wars in violation of international treaties. CIA regime change operations constitute "crimes against peace" under the principles established at the Nuremberg Trials.', count: 'Applicable to 20+ CIA-orchestrated coups and interventions' },
    { statute: 'UN Charter, Article 2(4) — Prohibition on Use of Force', description: 'All UN members shall refrain from the threat or use of force against the territorial integrity or political independence of any state. Every CIA regime change operation violated this fundamental principle of international law.', count: 'Violated in every single operation documented' },
    { statute: 'OAS Charter, Articles 15 & 17 — Non-Intervention', description: 'No state has the right to intervene, directly or indirectly, in the internal or external affairs of any other state. CIA operations in Latin America systematically violated the Organization of American States Charter.', count: 'Violated across all Latin American operations' },
    { statute: 'ICJ Ruling: Nicaragua v. United States (1986)', description: 'The International Court of Justice ruled the United States guilty of "unlawful use of force" for mining Nicaraguan harbors and supporting the Contras. The US refused to recognize the court\\\'s jurisdiction and vetoed UN enforcement.', count: 'US found guilty — Ignored ruling, refused to pay reparations' },
    { statute: 'Executive Order 11905/12333 — Assassination Ban', description: 'Presidential executive orders prohibiting US government employees from engaging in political assassination. The CIA circumvented these through proxy operations, "extraordinary rendition," and creative legal interpretations.', count: 'Systematically circumvented from 1976 to present' },
    { statute: '18 U.S.C. § 1001 — False Statements to Congress', description: 'CIA Director Richard Helms was convicted of lying to Congress about CIA activities in Chile. Multiple CIA officials provided false testimony about regime change operations to congressional oversight committees.', count: 'Richard Helms convicted (1977); pattern of perjury by multiple directors' },
    { statute: 'Boland Amendment (1982-1984) — Congressional Funding Prohibition', description: 'Congress specifically prohibited the CIA from using funds to support the Contras in Nicaragua. The Reagan administration circumvented this through Oliver North\\\'s illegal "Enterprise" network.', count: '14 individuals charged in Iran-Contra; 6 pardoned by George H.W. Bush' },
    { statute: 'War Crimes — Geneva Conventions, Common Article 3', description: 'CIA-supported regimes and proxy forces committed systematic torture, extrajudicial killing, and targeting of civilians — all violations of the Geneva Conventions to which the United States is a signatory.', count: 'Applicable to operations in Guatemala, Chile, Indonesia, Nicaragua, Vietnam, and others' },
    { statute: 'Genocide Convention (1948)', description: 'The Guatemalan civil war triggered by the 1954 CIA coup resulted in a UN-documented genocide against Mayan indigenous communities. The Indonesian massacres of 1965-66, facilitated by CIA kill lists, meet the legal definition of genocide.', count: 'Guatemala (200,000 killed, Mayan genocide); Indonesia (500,000-1,000,000 killed)' },
    { statute: 'Sovereignty Violations — Customary International Law', description: 'The principle of sovereign equality and non-interference in internal affairs is a foundational norm of international law. CIA regime change operations represent the most systematic and large-scale violation of sovereignty in modern history.', count: '25+ sovereign governments overthrown or destabilized' },
    { statute: '18 U.S.C. § 2381 — Violation of Constitutional War Powers', description: 'CIA operations constituted acts of war conducted without congressional declaration or authorization, usurping the constitutional war-making power reserved exclusively to Congress.', count: 'Pattern of unconstitutional covert warfare across seven decades' }
  ],
  legalOutcomes: [
    { defendant: 'Richard Helms (CIA Director)', charge: 'Perjury — Lying to Congress about CIA activities in Chile', outcome: 'Convicted 1977 — Given suspended sentence and $2,000 fine. Wore conviction as "badge of honor."' },
    { defendant: 'Oliver North', charge: 'Three felony counts for Iran-Contra (aiding obstruction, destroying documents, accepting illegal gratuity)', outcome: 'Convicted 1989 — Convictions reversed on appeal (immunized testimony tainted trial). Never retried.' },
    { defendant: 'John Poindexter (National Security Advisor)', charge: 'Five felony counts for Iran-Contra conspiracy', outcome: 'Convicted 1990 — Convictions reversed on appeal (same immunity issue as North).' },
    { defendant: 'Caspar Weinberger (Secretary of Defense)', charge: 'Perjury and obstruction related to Iran-Contra', outcome: 'Pardoned by George H.W. Bush on Christmas Eve 1992, before trial.' },
    { defendant: 'Church Committee (1975)', charge: 'Investigated CIA assassination plots, domestic surveillance, and covert operations', outcome: 'Exposed massive illegality but led to only modest reforms. CIA adapted and continued operations through new channels.' },
    { defendant: 'United States (ICJ Nicaragua v. US, 1986)', charge: 'Unlawful use of force, violation of sovereignty, mining of harbors', outcome: 'Found GUILTY by International Court of Justice. US withdrew from ICJ compulsory jurisdiction and refused to pay $17 billion in reparations.' },
    { defendant: 'Augusto Pinochet', charge: 'Human rights abuses, torture, murder, forced disappearances during 17-year dictatorship', outcome: 'Arrested in London 1998 on Spanish warrant. Released on health grounds. Indicted in Chile but died in 2006 before trial.' },
    { defendant: 'Manuel Contreras (DINA Chief)', charge: 'Murder of Orlando Letelier, crimes against humanity, torture', outcome: 'Convicted multiple times. Sentenced to 529 years. Died in prison 2015.' },
    { defendant: 'Guatemala Truth Commission (1999)', charge: 'UN Commission for Historical Clarification investigated 36-year civil war', outcome: 'Found state forces responsible for 93% of violations. Documented genocide against Mayan people. US role acknowledged.' },
    { defendant: 'CIA — FOIA Litigation (Ongoing)', charge: 'Systematic withholding of regime change documents from public', outcome: 'Courts have ordered partial releases. Most operational files remain classified or heavily redacted decades after operations.' }
  ],
  sources: [
    { title: 'CIA FOIA Reading Room — Declassified Coup Documents', url: 'https://www.cia.gov/readingroom/', date: 'Ongoing' },
    { title: 'National Security Archive — CIA Coups Collection', url: 'https://nsarchive.gwu.edu/project/cia-covert-operations', date: 'Ongoing' },
    { title: 'Church Committee Final Report (1976)', url: 'https://www.intelligence.senate.gov/resources/intelligence-related-commissions', date: '1976' },
    { title: 'Senate Select Committee — Alleged Assassination Plots Involving Foreign Leaders', url: 'https://www.intelligence.senate.gov/sites/default/files/94465.pdf', date: '1975' },
    { title: 'ICJ: Nicaragua v. United States — Full Judgment', url: 'https://www.icj-cij.org/case/70', date: '1986' },
    { title: 'National Security Archive — Chile Documentation Project', url: 'https://nsarchive.gwu.edu/project/chile-documentation-project', date: '1999-present' },
    { title: 'CIA Admits Role in 1953 Iran Coup — National Security Archive', url: 'https://nsarchive2.gwu.edu/NSAEBB/NSAEBB435/', date: '2013' },
    { title: 'Foreign Relations of the United States (FRUS) — Guatemala 1952-1954', url: 'https://history.state.gov/historicaldocuments/frus1952-54Guat', date: '2003' },
    { title: 'Indonesia Mass Killings — Declassified US Documents', url: 'https://nsarchive.gwu.edu/briefing-book/indonesia/2017-10-17/indonesia-mass-murder-1965-us-embassy-files', date: '2017' },
    { title: 'Stephen Kinzer, "Overthrow: America\\\'s Century of Regime Change"', url: 'https://www.penguinrandomhouse.com/books/288367/overthrow-by-stephen-kinzer/', date: '2006' },
    { title: 'William Blum, "Killing Hope: US Military and CIA Interventions Since WWII"', url: 'https://williamblum.org/books/killing-hope', date: '2004' },
    { title: 'Tim Weiner, "Legacy of Ashes: The History of the CIA"', url: 'https://www.penguinrandomhouse.com/books/298325/legacy-of-ashes-by-tim-weiner/', date: '2007' },
    { title: 'Guatemala Truth Commission — Memory of Silence Report', url: 'https://hrdag.org/resources/publications/memory-of-silence/', date: '1999' },
    { title: 'The Guardian — CIA\\\'s Role in Guatemala\\\'s Genocide', url: 'https://www.theguardian.com/world/2011/sep/04/guatemala-genocide-cia-involvement', date: '2011' }
  ]
};

export default function CIACoupsPage() {
  return (
    <div className="min-h-screen pt-20 lg:pt-24 pb-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <Link href="/investigations" className="inline-flex items-center gap-2 text-zinc-400 hover:text-blood-500 transition-colors mb-6 pt-4">
          <ArrowLeft className="w-4 h-4" />Back to Investigations
        </Link>
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="border-2 border-blood-800/60 bg-black/80 p-6 lg:p-8 mb-8">
          <div className="flex items-center gap-3 mb-4">
            <span className="px-3 py-1 text-xs font-bold uppercase border border-red-500/30 bg-red-500/20 text-red-400">{investigation.severity}</span>
            <span className="px-3 py-1 text-xs font-bold uppercase border border-zinc-500/30 bg-zinc-500/20 text-zinc-400">{investigation.status}</span>
          </div>
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
