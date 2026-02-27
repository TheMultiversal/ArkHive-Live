'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import {
  ArrowLeft,
  AlertTriangle,
  Users,
  Calendar,
  FileText,
  ExternalLink,
  MapPin,
  Plane,
  Scale, ShieldAlert, DollarSign} from 'lucide-react';
import GlitchText from '@/components/effects/GlitchText';

const investigation = {
  title: 'Epstein Network Complicity',
  subtitle: 'Elite Sex Trafficking Ring and Its Powerful Enablers',
  severity: 'critical',
  status: 'Ongoing - Documents Still Being Unsealed',
  summary: 'Jeffrey Epstein operated a sophisticated sex trafficking network targeting minors for decades, enabled by powerful associates including politicians, businessmen, and royalty. Despite his 2008 conviction, a sweetheart plea deal protected co-conspirators. Epstein\'s 2019 death in custody while awaiting trial left many questions unanswered. The network\'s full scope continues to be revealed through unsealed court documents.',
  keyFigures: [
    { name: 'Jeffrey Epstein', role: 'Network Operator, Convicted Sex Offender', href: '/entities/individuals/jeffrey-epstein', status: 'Deceased (2019)' },
    { name: 'Ghislaine Maxwell', role: 'Co-Conspirator, Recruiter, Convicted Sex Trafficker', href: '/entities/individuals/ghislaine-maxwell', status: 'Serving 20 Years' },
    { name: 'Donald Trump', role: 'Social Associate, Mar-a-Lago Host, Flight Logs', href: '/entities/individuals/donald-trump', status: 'Subject of Investigation' },
    { name: 'Bill Clinton', role: 'Flight Logs: 26+ Flights on Lolita Express', href: '/entities/individuals/bill-clinton', status: 'Named in Documents' },
    { name: 'Prince Andrew', role: 'Photographed with Victim, Settled Lawsuit for $12M', href: '/entities/individuals/prince-andrew', status: 'Civil Settlement' },
    { name: 'Les Wexner', role: 'Primary Financial Backer, Gifted $77M Mansion', href: '/entities/individuals/les-wexner', status: 'Under Investigation' },
    { name: 'Jean-Luc Brunel', role: 'Model Scout, Procurer for Epstein Network', href: '/entities/individuals/jean-luc-brunel', status: 'Deceased (2022)' },
    { name: 'Alan Dershowitz', role: 'Defense Attorney, Accused by Victims', href: '/entities/individuals/alan-dershowitz', status: 'Named in Documents' },
    { name: 'Alexander Acosta', role: 'US Attorney Who Gave Sweetheart Plea Deal', href: '/entities/individuals/alex-acosta', status: 'Resigned as Labor Sec.' },
    { name: 'Virginia Giuffre', role: 'Primary Victim and Accuser, Filed Landmark Lawsuits', href: '/entities/individuals/virginia-giuffre', status: 'Key Witness' },
    { name: 'Bill Gates', role: 'Multiple Documented Meetings After 2008 Conviction', href: '/entities/individuals/bill-gates', status: 'Named in Documents' },
    { name: 'Leon Black', role: 'Paid Epstein $158M After Conviction', href: '/entities/individuals/leon-black', status: 'Under Investigation' },
    { name: 'Sarah Kellen', role: 'Personal Assistant, Scheduled Victims', href: '/entities/individuals/sarah-kellen', status: 'Granted Immunity' },
    { name: 'Nadia Marcinkova', role: 'Victim-Turned-Participant, Epstein Inner Circle', href: '/entities/individuals/nadia-marcinkova', status: 'Granted Immunity' },
    { name: 'Glenn Dubin', role: 'Billionaire, Inner Circle, Wife Named as Facilitator', href: '/entities/individuals/glenn-dubin', status: 'Named in Documents' },
    { name: 'Jes Staley', role: 'Barclays CEO, Forced Out Over Epstein Ties', href: '/entities/individuals/jes-staley', status: 'Fired from Barclays' },
    { name: 'Reid Hoffman', role: 'LinkedIn Founder, Admitted Post-Conviction Meetings', href: '/entities/individuals/reid-hoffman', status: 'Named in Documents' },
    { name: 'Mort Zuckerman', role: 'US News Owner, Epstein Financial Associate', href: '/entities/individuals/mort-zuckerman', status: 'Named in Documents' },
    { name: 'Robert Maxwell', role: 'Ghislaine\'s Father, Suspected Intelligence Ties', href: '/entities/individuals/robert-maxwell', status: 'Deceased (1991)' },
  ],
  properties: [
    { name: 'Little St. James Island', location: 'U.S. Virgin Islands', details: '"Pedophile Island" - Primary abuse location, mysterious temple structure' },
    { name: 'Great St. James Island', location: 'U.S. Virgin Islands', details: 'Second island purchased to control access' },
    { name: '9 East 71st Street', location: 'Manhattan, NYC', details: 'Largest private residence in Manhattan, gifted by Les Wexner' },
    { name: 'El Brillo Way', location: 'Palm Beach, Florida', details: 'Site of initial police investigation (2005)' },
    { name: 'Zorro Ranch', location: 'New Mexico', details: '7,500 acres, reported "baby ranch" for eugenics experiments' },
    { name: 'Paris Apartment', location: 'France', details: 'European base of operations' },
  ],
  aircraft: [
    { name: 'N908JE - Boeing 727', nickname: '"Lolita Express"', details: 'Primary transport aircraft, flight logs show hundreds of flights with victims and associates' },
    { name: 'N212JE - Gulfstream', nickname: 'Secondary Aircraft', details: 'Used for shorter trips' },
    { name: 'Helicopter', nickname: 'Island Transport', details: 'Used to shuttle guests to Little St. James' },
  ],
  timeline: [
    { date: '1953', event: 'Jeffrey Epstein born in Brooklyn, New York' },
    { date: '1976', event: 'Hired at Bear Stearns despite lacking college degree' },
    { date: '1981', event: 'Leaves Bear Stearns, starts own firm' },
    { date: '1986', event: 'Les Wexner becomes primary client and benefactor' },
    { date: '1991', event: 'Ghislaine Maxwell\'s father Robert Maxwell dies mysteriously at sea' },
    { date: '1992', event: 'Begins relationship with Ghislaine Maxwell; begins friendship with Donald Trump' },
    { date: '1993', event: 'Trump flight on "Lolita Express" documented in logs' },
    { date: '1994', event: 'Katie Johnson lawsuit alleges Trump raped her at age 13 at Epstein party' },
    { date: '1994-2004', event: 'Peak years of trafficking operation, recruiting victims from Mar-a-Lago' },
    { date: '2002', event: 'Trump tells New York Magazine: Epstein "likes beautiful women as much as I do, and many of them are on the younger side"' },
    { date: '2005', event: 'Palm Beach Police begin investigation after mother\'s complaint' },
    { date: '2006', event: 'FBI takes over investigation, documents extensive abuse' },
    { date: '2007', event: 'Federal prosecutors prepare 53-page indictment' },
    { date: '2008', event: 'Alexander Acosta (future Trump Labor Secretary) negotiates sweetheart plea deal' },
    { date: '2008', event: 'Epstein pleads guilty to state charges, serves 13 months, work release 6 days/week' },
    { date: '2008', event: 'Secret Non-Prosecution Agreement protects unnamed co-conspirators' },
    { date: '2015', event: 'Virginia Giuffre lawsuit against Maxwell unsealed, details emerge' },
    { date: '2018', event: 'Miami Herald "Perversion of Justice" investigation published' },
    { date: '2019 Feb', event: 'Federal judge rules NPA violated Crime Victims\' Rights Act' },
    { date: '2019 Jul 6', event: 'Epstein arrested at Teterboro Airport on federal sex trafficking charges' },
    { date: '2019 Jul 8', event: 'Denied bail, detained at Metropolitan Correctional Center' },
    { date: '2019 Jul 23', event: 'Found injured in cell (first incident)' },
    { date: '2019 Aug 10', event: 'Found dead in cell - ruled suicide, cameras malfunctioned, guards asleep' },
    { date: '2019 Aug', event: 'Trump tweets conspiracy theory about Clinton involvement in death' },
    { date: '2020 Jul 2', event: 'Ghislaine Maxwell arrested in New Hampshire' },
    { date: '2021 Dec 29', event: 'Maxwell convicted on 5 of 6 federal charges' },
    { date: '2022 Jun 28', event: 'Maxwell sentenced to 20 years in federal prison' },
    { date: '2022 Feb', event: 'Jean-Luc Brunel found dead in French prison cell' },
    { date: '2024', event: 'Major document unsealing reveals new names and details' },
    { date: '2025', event: 'Additional flight logs and documents continue to be released' },
  ],
  legalOutcomes: [
    { defendant: 'Jeffrey Epstein', charge: 'Florida State Solicitation of Prostitution (2008)', outcome: '13 months county jail with work release 6 days per week - sweetheart plea deal' },
    { defendant: 'Ghislaine Maxwell', charge: 'Sex Trafficking of Minors (5 federal counts)', outcome: 'Convicted - sentenced to 20 years federal prison (June 2022)' },
    { defendant: 'Jean-Luc Brunel', charge: 'Rape of Minors and Sex Trafficking (French charges)', outcome: 'Found dead in French prison cell before trial (February 2022)' },
    { defendant: 'Prince Andrew', charge: 'Civil Sexual Abuse lawsuit (Virginia Giuffre)', outcome: 'Settled for reported $12 million - no admission of liability (February 2022)' },
    { defendant: 'Alexander Acosta', charge: 'Criticism for sweetheart plea deal as U.S. Attorney', outcome: 'Resigned as Secretary of Labor amid backlash (July 2019)' },
    { defendant: 'Sarah Kellen', charge: 'Sex Trafficking Conspiracy', outcome: 'Granted immunity under 2008 Non-Prosecution Agreement' },
    { defendant: 'Nadia Marcinkova', charge: 'Sex Trafficking Conspiracy', outcome: 'Granted immunity under 2008 Non-Prosecution Agreement' },
  ],
  charges: [
    { statute: '18 U.S.C. § 1591', description: 'Sex Trafficking of Minors', count: 'Multiple counts' },
    { statute: '18 U.S.C. § 2423', description: 'Transportation of Minors for Illegal Sexual Activity', count: 'Multiple counts' },
    { statute: '18 U.S.C. § 371', description: 'Conspiracy', count: 'Multiple counts' },
    { statute: 'TVPA', description: 'Trafficking Victims Protection Act Violations', count: 'Multiple counts' },
  ],
  coverup: [
    'Alexander Acosta, as U.S. Attorney, negotiated a secret Non-Prosecution Agreement in 2008 that shielded unnamed co-conspirators from federal charges',
    'The 2008 plea deal violated the Crime Victims\' Rights Act by failing to notify over 30 identified victims, as ruled by a federal judge in 2019',
    'Both security cameras outside Epstein\'s cell at MCC New York malfunctioned on the night of his death, and both guards assigned to check on him fell asleep',
    'Epstein was removed from suicide watch only 12 days before his death despite a prior attempt, in violation of Bureau of Prisons protocols',
    'Flight logs and visitor records were kept sealed for years; court-ordered unsealing continues to reveal new high-profile names associated with the network',
    'The FBI had documented evidence of extensive abuse involving dozens of minors as early as 2006, but a prepared 53-page federal indictment was never filed',
    'Multiple key witnesses and associates died under suspicious circumstances, including Jean-Luc Brunel who was found hanged in his French prison cell',
    'Mar-a-Lago served as a documented recruiting ground for trafficking victims according to court filings, yet faced no institutional consequences',
  ],
  trumpConnections: [
    'Documented friendship spanning 1992-2019 (publicly fell out in 2004 over property dispute, but contact continued)',
    'Mar-a-Lago was a recruiting ground for Epstein victims per court documents',
    'Trump\'s 2002 quote praising Epstein\'s taste for young women',
    'Trump flight on "Lolita Express" (1993)',
    'Multiple documented visits to Epstein\'s Manhattan mansion',
    'Epstein was a member of Mar-a-Lago club',
    'Katie Johnson lawsuit alleging Trump raped her at age 13 at Epstein party (1994)',
    'Trump appointed Alexander Acosta as Labor Secretary - the prosecutor who gave Epstein sweetheart deal',
    'Access Hollywood tape suggests pattern consistent with allegations',
    '26+ women have accused Trump of sexual misconduct',
    'Trump wished Ghislaine Maxwell "well" after her arrest',
  ],
  victims: 'Hundreds of documented victims, some as young as 11 years old. Recruitment through modeling agencies, massage promises, and financial manipulation.',
  financialConnections: [
    { entity: 'JPMorgan Chase', role: 'Primary Banking Partner', details: 'Maintained Epstein accounts for 15+ years after conviction. Paid $290M settlement to victims in 2023. Internal emails show executives knew of trafficking allegations.', href: '/entities/corporations/jpmorgan-chase' },
    { entity: 'Deutsche Bank', role: 'Banking Partner Post-2013', details: 'Took over Epstein accounts after JPMorgan dropped him. Paid $150M fine to NY regulators. Processed suspicious transactions including payments to Russian models.', href: '/entities/corporations/deutsche-bank' },
    { entity: 'Les Wexner / L Brands', role: 'Primary Financial Backer', details: 'Granted Epstein power of attorney over his finances. Gifted $77M Manhattan mansion. Epstein managed Wexner\'s $1B+ fortune. Victoria\'s Secret used as recruiting pipeline.', href: '/entities/individuals/les-wexner' },
    { entity: 'Leon Black / Apollo Global', role: 'Post-Conviction Payments', details: 'Paid Epstein $158M in "advisory fees" between 2012-2017, years after sex offender conviction. Stepped down as Apollo CEO. Claims payments were for tax advice.', href: '/entities/individuals/leon-black' },
    { entity: 'Bill Gates / Gates Foundation', role: 'Post-Conviction Meetings', details: 'Multiple documented meetings with Epstein from 2011-2014, after conviction. Gates flew on Epstein\'s jet. Melinda Gates cited Epstein relationship as factor in divorce.', href: '/entities/individuals/bill-gates' },
    { entity: 'Jes Staley / Barclays', role: 'Personal Relationship', details: 'Maintained close personal relationship with Epstein for years. Exchanged 1,200+ emails. Visited Epstein in jail. Fired as Barclays CEO over the relationship.', href: '/entities/individuals/jes-staley' },
    { entity: 'Victoria\'s Secret / L Brands', role: 'Recruiting Pipeline', details: 'Epstein posed as Victoria\'s Secret talent scout to lure victims. Used Wexner\'s fashion empire as cover for approaching young women. Multiple victims recruited this way.', href: '/entities/individuals/les-wexner' },
    { entity: 'Bear Stearns', role: 'Original Employer', details: 'Epstein worked as options trader 1976-1981. Hired despite lacking college degree. Made connections that launched his financial career and access to wealthy clients.', href: '/entities/individuals/jeffrey-epstein' },
  ],
  sources: [
    { title: 'Miami Herald: Perversion of Justice Investigation', url: 'https://www.miamiherald.com/topics/jeffrey-epstein', date: '2018' },
    { title: 'SDNY Federal Indictment', url: 'https://www.justice.gov/usao-sdny/pr/jeffrey-epstein-charged-sex-trafficking-minors', date: '2019' },
    { title: 'Giuffre v. Maxwell Court Documents', url: 'https://www.courtlistener.com/docket/4355835/giuffre-v-maxwell/', date: '2015-2025' },
    { title: 'United States v. Maxwell Trial', url: 'https://www.courtlistener.com/docket/17318376/united-states-v-maxwell/', date: '2021' },
    { title: 'Epstein Flight Logs', url: 'https://www.documentcloud.org/documents/21165424-epstein-flight-logs', date: '2025' },
    { title: 'Katie Johnson v. Trump/Epstein Lawsuit', url: 'https://www.courtlistener.com/docket/4154484/katie-johnson-v-donald-j-trump/', date: '2016' },
    { title: 'Palm Beach Police Investigation Report', url: 'https://www.documentcloud.org/documents/1508273-palm-beach-police-investigation', date: '2005' },
    { title: 'Non-Prosecution Agreement Documents', url: 'https://www.documentcloud.org/documents/1508967-non-prosecution-agreement', date: '2008' },
    { title: '2024 Unsealed Court Documents (Giuffre v. Maxwell)', url: 'https://www.courtlistener.com/docket/4355835/giuffre-v-maxwell/', date: '2024' },
    { title: 'Trump 2002 New York Magazine Quote', url: 'https://nymag.com/nymetro/news/people/n_7912/', date: '2002' },
    { title: 'Vanity Fair: The Talented Mr. Epstein', url: 'https://www.vanityfair.com/news/2003/03/jeffrey-epstein-200303', date: '2003' },
    { title: 'JPMorgan $290M Victim Settlement', url: 'https://www.reuters.com/legal/jpmorgan-settlement-with-epstein-victims-gets-final-approval-2023-11-28/', date: '2023' },
    { title: 'Deutsche Bank $150M Fine (NY DFS)', url: 'https://www.dfs.ny.gov/reports_and_publications/press_releases/pr202007071', date: '2020' },
    { title: 'DOJ Inspector General Report on Epstein Death', url: 'https://oig.justice.gov/reports/investigation-and-review-federal-bureau-prisons-monitoring-jeffrey-epstein-following-his', date: '2023' },
    { title: 'Leon Black-Epstein $158M Payments (NYT)', url: 'https://www.nytimes.com/2021/01/25/business/leon-black-jeffrey-epstein.html', date: '2021' },
    { title: 'Bill Gates-Epstein Meetings (NYT)', url: 'https://www.nytimes.com/2019/10/12/business/jeffrey-epstein-bill-gates.html', date: '2019' },
  ],
};

const severityColors = {
  critical: 'bg-red-500/20 text-red-400 border-red-500/30',
  high: 'bg-orange-500/20 text-orange-400 border-orange-500/30',
  medium: 'bg-yellow-500/20 text-yellow-400 border-yellow-500/30',
  low: 'bg-green-500/20 text-green-400 border-green-500/30',
};

export default function EpsteinNetworkPage() {
  return (
    <div className="min-h-screen pt-20 lg:pt-24 pb-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Back Link */}
        <Link
          href="/investigations"
          className="inline-flex items-center gap-2 text-zinc-400 hover:text-blood-500 transition-colors mb-6 pt-4"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Investigations
        </Link>

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="border-2 border-blood-800/60 bg-black/80 p-6 lg:p-8 mb-8"
        >
          <div className="flex items-center gap-3 mb-4">
            <span className={`px-3 py-1 text-xs font-bold uppercase border ${severityColors.critical}`}>
              {investigation.severity}
            </span>
            <span className="px-3 py-1 text-xs font-bold uppercase border border-yellow-500/30 bg-yellow-500/20 text-yellow-400">
              {investigation.status}
            </span>
          </div>

          <h1 className="text-3xl lg:text-4xl font-black text-white uppercase tracking-wider mb-2">
            <GlitchText text={investigation.title} />
          </h1>
          <p className="text-lg text-blood-500 font-bold mb-4">{investigation.subtitle}</p>
          <p className="text-zinc-400 leading-relaxed">{investigation.summary}</p>
        </motion.div>

        {/* Key Figures */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="border-2 border-zinc-800 bg-black/60 p-6 mb-8"
        >
          <h2 className="text-xl font-bold text-white uppercase tracking-wider mb-4 flex items-center gap-2">
            <Users className="w-5 h-5 text-blood-500" />
            Key Figures & Associates
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {investigation.keyFigures.map((figure, idx) => (
              <Link
                key={idx}
                href={figure.href}
                className="border border-zinc-700 bg-zinc-900/50 p-4 hover:border-blood-600 transition-colors group"
              >
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="font-bold text-white group-hover:text-blood-500 transition-colors">
                      {figure.name}
                    </h3>
                    <p className="text-sm text-zinc-400">{figure.role}</p>
                  </div>
                  <span className="text-xs text-zinc-500">{figure.status}</span>
                </div>
              </Link>
            ))}
          </div>
        </motion.div>

        {/* Cover-Up */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.12 }} className="border-2 border-red-800/60 bg-red-950/10 p-6 mb-8 border-l-4 border-l-blood-600">
          <h2 className="text-xl font-bold text-white uppercase tracking-wider mb-4 flex items-center gap-2"><ShieldAlert className="w-5 h-5 text-blood-500" />The Cover-Up</h2>
          <div className="space-y-3">{investigation.coverup.map((item, idx) => (<div key={idx} className="p-3 bg-red-950/20 border border-red-500/30"><p className="text-sm text-zinc-300">{item}</p></div>))}</div>
        </motion.div>

        {/* Financial Connections */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.13 }}
          className="border-2 border-zinc-800 bg-black/60 p-6 mb-8"
        >
          <h2 className="text-xl font-bold text-white uppercase tracking-wider mb-4 flex items-center gap-2">
            <DollarSign className="w-5 h-5 text-blood-500" />
            Financial Connections & Enablers
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {investigation.financialConnections.map((conn, idx) => (
              <Link
                key={idx}
                href={conn.href}
                className="border border-zinc-700 bg-zinc-900/50 p-4 hover:border-blood-600 transition-colors group"
              >
                <h3 className="font-bold text-white group-hover:text-blood-500 transition-colors">{conn.entity}</h3>
                <p className="text-sm text-blood-400 mt-1">{conn.role}</p>
                <p className="text-xs text-zinc-400 mt-2">{conn.details}</p>
              </Link>
            ))}
          </div>
        </motion.div>

        {/* Trump Connections */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15 }}
          className="border-2 border-red-800/60 bg-red-950/20 p-6 mb-8"
        >
          <h2 className="text-xl font-bold text-white uppercase tracking-wider mb-4 flex items-center gap-2">
            <AlertTriangle className="w-5 h-5 text-red-500" />
            Trump-Epstein Connections
          </h2>
          <ul className="space-y-3">
            {investigation.trumpConnections.map((connection, idx) => (
              <li key={idx} className="flex items-start gap-3">
                <span className="w-2 h-2 mt-2 bg-red-500 flex-shrink-0" />
                <span className="text-zinc-300">{connection}</span>
              </li>
            ))}
          </ul>
        </motion.div>

        {/* Properties */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="border-2 border-zinc-800 bg-black/60 p-6 mb-8"
        >
          <h2 className="text-xl font-bold text-white uppercase tracking-wider mb-4 flex items-center gap-2">
            <MapPin className="w-5 h-5 text-blood-500" />
            Properties & Locations
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {investigation.properties.map((property, idx) => (
              <div key={idx} className="border border-zinc-700 bg-zinc-900/50 p-4">
                <h3 className="font-bold text-white">{property.name}</h3>
                <p className="text-sm text-blood-500">{property.location}</p>
                <p className="text-sm text-zinc-400 mt-1">{property.details}</p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Aircraft */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.25 }}
          className="border-2 border-zinc-800 bg-black/60 p-6 mb-8"
        >
          <h2 className="text-xl font-bold text-white uppercase tracking-wider mb-4 flex items-center gap-2">
            <Plane className="w-5 h-5 text-blood-500" />
            Aircraft & Transportation
          </h2>
          <div className="space-y-4">
            {investigation.aircraft.map((craft, idx) => (
              <div key={idx} className="border border-zinc-700 bg-zinc-900/50 p-4">
                <h3 className="font-bold text-white">{craft.name}</h3>
                <p className="text-sm text-blood-500">{craft.nickname}</p>
                <p className="text-sm text-zinc-400 mt-1">{craft.details}</p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Charges */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="border-2 border-zinc-800 bg-black/60 p-6 mb-8"
        >
          <h2 className="text-xl font-bold text-white uppercase tracking-wider mb-4 flex items-center gap-2">
            <Scale className="w-5 h-5 text-blood-500" />
            Criminal Charges
          </h2>
          <div className="space-y-3">
            {investigation.charges.map((charge, idx) => (
              <div key={idx} className="border border-zinc-700 bg-zinc-900/50 p-4">
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="font-mono text-sm text-blood-500">{charge.statute}</h3>
                    <p className="text-zinc-300">{charge.description}</p>
                  </div>
                  <span className="text-xs text-zinc-500">{charge.count}</span>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Timeline */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.35 }}
          className="border-2 border-zinc-800 bg-black/60 p-6 mb-8"
        >
          <h2 className="text-xl font-bold text-white uppercase tracking-wider mb-4 flex items-center gap-2">
            <Calendar className="w-5 h-5 text-blood-500" />
            Timeline of Events
          </h2>
          <div className="space-y-4 max-h-96 overflow-y-auto pr-2">
            {investigation.timeline.map((item, idx) => (
              <div key={idx} className="flex gap-4 border-l-2 border-zinc-700 pl-4 hover:border-blood-500 transition-colors">
                <span className="text-blood-500 font-mono text-sm whitespace-nowrap">{item.date}</span>
                <span className="text-zinc-300">{item.event}</span>
              </div>
            ))}
          </div>
        </motion.div>

        
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5 }} className="border-2 border-zinc-800 bg-black/60 p-6 mb-8">
          <h2 className="text-xl font-bold text-white uppercase tracking-wider mb-4 flex items-center gap-2"><Scale className="w-5 h-5 text-blood-500" />Legal Outcomes</h2>
          <div className="space-y-3">{investigation.legalOutcomes.map((item, idx) => (<div key={idx} className="p-3 bg-zinc-900/50 border border-zinc-800"><p className="font-bold text-white text-sm">{item.defendant}</p><p className="text-xs text-zinc-400 mt-1">{item.charge}</p><p className="text-xs text-blood-400 mt-1">{item.outcome}</p></div>))}</div>
        </motion.div>
        {/* Sources */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="border-2 border-zinc-800 bg-black/60 p-6"
        >
          <h2 className="text-xl font-bold text-white uppercase tracking-wider mb-4 flex items-center gap-2">
            <FileText className="w-5 h-5 text-blood-500" />
            Sources & Documentation
          </h2>
          <div className="space-y-3">
            {investigation.sources.map((source, idx) => (
              <a
                key={idx}
                href={source.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between border border-zinc-700 bg-zinc-900/50 p-3 hover:border-blood-600 transition-colors group"
              >
                <div>
                  <h3 className="text-zinc-300 group-hover:text-blood-500 transition-colors">{source.title}</h3>
                  <p className="text-xs text-zinc-500">{source.date}</p>
                </div>
                <ExternalLink className="w-4 h-4 text-zinc-500 group-hover:text-blood-500 transition-colors" />
              </a>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}
