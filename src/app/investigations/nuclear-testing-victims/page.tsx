'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowLeft, AlertTriangle, Users, Calendar, FileText, ExternalLink, Scale, ShieldAlert, Skull } from 'lucide-react';
import GlitchText from '@/components/effects/GlitchText';

const investigation = {
  title: 'Nuclear Testing Victims',
  subtitle: 'Downwinders, Marshall Islanders, and Atomic Veterans — Over 1,000 Nuclear Tests and Millions Irradiated',
  severity: 'critical',
  status: 'CONFIRMED - ONGOING HARM',
  summary: 'Between 1945 and 1992, the United States conducted 1,032 nuclear weapons tests — 216 atmospheric and 816 underground — exposing millions of Americans and Pacific Islanders to radioactive fallout. "Downwinders" in Nevada, Utah, and Arizona were subjected to repeated fallout from above-ground tests at the Nevada Test Site without warning or consent. In the Marshall Islands, the 1954 Castle Bravo test was 1,000 times more powerful than Hiroshima, showering inhabited islands with radioactive ash. Over 300,000 US military personnel — "atomic veterans" — were deliberately exposed during tests while being ordered not to discuss what they witnessed. The government knew the health risks from the beginning but chose to continue testing, classifying health data and denying compensation for decades. Cancer rates in affected populations remain elevated to this day.',
  keyFigures: [
    { name: 'Lewis Strauss', role: 'AEC Chairman who authorized Castle Bravo test and suppressed health data', href: '/entities/individuals/lewis-strauss', status: 'Deceased (1974)' },
    { name: 'Edward Teller', role: 'Father of the hydrogen bomb, advocated for continued atmospheric testing', href: '/entities/individuals/edward-teller', status: 'Deceased (2003)' },
    { name: 'J. Robert Oppenheimer', role: 'Manhattan Project director, later opposed hydrogen bomb development', href: '/entities/individuals/j-robert-oppenheimer', status: 'Deceased (1967)' },
    { name: 'Thomas Murray', role: 'AEC Commissioner who pushed for expanded Pacific testing', href: '/entities/individuals/thomas-murray', status: 'Deceased (1961)' },
    { name: 'Stafford Warren', role: 'Medical director of Manhattan Project, documented radiation effects', href: '/entities/individuals/stafford-warren', status: 'Deceased (1981)' },
    { name: 'John Anjain', role: 'Rongelap Atoll magistrate, led effort to relocate contaminated community', href: '/entities/individuals/john-anjain', status: 'Deceased (2004)' },
    { name: 'Darlene Keju', role: 'Marshallese activist who documented birth defects and cancers from testing', href: '/entities/individuals/darlene-keju', status: 'Deceased (1996)' },
    { name: 'Claudia Peterson', role: 'Utah downwinder activist, fought for Radiation Exposure Compensation Act', href: '/entities/individuals/claudia-peterson', status: 'Active' },
    { name: 'Orville Kelly', role: 'Atomic veteran who founded National Association of Atomic Veterans', href: '/entities/individuals/orville-kelly', status: 'Deceased (1980)' },
    { name: 'Stewart Udall', role: 'Former Interior Secretary who represented downwinders and uranium miners in court', href: '/entities/individuals/stewart-udall', status: 'Deceased (2010)' },
    { name: 'Tom Saffer', role: 'Atomic veteran and co-author documenting military nuclear testing exposure', href: '/entities/individuals/tom-saffer', status: 'Active' },
  ],
  timeline: [
    { date: 'July 16, 1945', event: 'Trinity Test — first nuclear detonation at Alamogordo, New Mexico. Fallout drifts over ranches and communities' },
    { date: '1946', event: 'Operation Crossroads — two nuclear tests at Bikini Atoll, Marshall Islands. 167 islanders relocated, never allowed to return' },
    { date: '1951', event: 'Nevada Test Site established — atmospheric tests begin 65 miles from Las Vegas' },
    { date: '1951-1962', event: 'Over 100 above-ground nuclear tests at Nevada Test Site, fallout reaches as far as New York' },
    { date: '1953', event: 'Upshot-Knothole test series — "Dirty Harry" shot sends fallout cloud directly over St. George, Utah' },
    { date: 'March 1, 1954', event: 'Castle Bravo test at Bikini Atoll — 15 megatons, 1,000x Hiroshima. Fallout covers Rongelap and Utirik atolls' },
    { date: '1954', event: 'Japanese fishing vessel Lucky Dragon 5 contaminated by Castle Bravo fallout — one crew member dies' },
    { date: '1955', event: 'AEC classified study confirms elevated cancer rates among downwinder populations' },
    { date: '1957', event: 'Plumbbob test series — 29 tests in 5 months, largest contamination of US mainland population' },
    { date: '1962', event: 'Limited Test Ban Treaty negotiations begin after global pressure over atmospheric fallout' },
    { date: 'August 5, 1963', event: 'Partial Nuclear Test Ban Treaty signed — bans atmospheric testing but not underground' },
    { date: '1982', event: 'Congressional hearings on radiation exposure of military personnel during nuclear tests' },
    { date: '1986', event: 'Marshallese petition for independence and nuclear cleanup — US refuses full remediation' },
    { date: '1988', event: 'Advisory Committee on Human Radiation Experiments reviews government knowledge of health risks' },
    { date: '1990', event: 'Radiation Exposure Compensation Act (RECA) passed — provides limited payments to some victims' },
    { date: 'September 23, 1992', event: 'Last US nuclear test conducted — testing moratorium begins' },
    { date: '2022', event: 'RECA reauthorization stalls in Congress despite expansion needed for all affected communities' },
    { date: '2024', event: 'Expanded RECA signed into law after decades of advocacy, covers additional downwinder communities' },
  ],
  legalOutcomes: [
    { defendant: 'United States Government', charge: 'Irwin Allen v. United States (downwinder suit)', outcome: 'Initial victory overturned — government claimed sovereign immunity' },
    { defendant: 'Atomic Energy Commission', charge: 'Concealing health data from exposed populations', outcome: 'No prosecution — agency dissolved, replaced by NRC/DOE' },
    { defendant: 'US Government', charge: 'Radiation exposure of Marshall Islanders', outcome: 'Nuclear Claims Tribunal awarded $2.3B — US refuses to pay most of it' },
    { defendant: 'Department of Defense', charge: 'Exposing 300,000 military personnel to radiation without consent', outcome: 'RECA provides $75,000 per qualifying veteran — many claims denied' },
    { defendant: 'US Government', charge: 'Radiation Exposure Compensation Act claims', outcome: '$2.6 billion paid to ~39,000 claimants (fraction of those affected)' },
    { defendant: 'Uranium Mining Companies', charge: 'Exposing Navajo miners to radiation without protection', outcome: 'Some RECA compensation — most mines never cleaned up' },
    { defendant: 'US Government', charge: 'Failure to clean up Marshall Islands testing sites', outcome: 'Bikini Atoll remains uninhabitable 80 years after testing' },
    { defendant: 'AEC/DOE', charge: 'Deliberate concealment of radiation health effects', outcome: 'Declassified documents confirm cover-up but no prosecutions' },
  ],
  charges: [
    { statute: '42 U.S.C. § 2210 - Price-Anderson Nuclear Industries Indemnity Act', description: 'Government nuclear activities caused widespread radiation injuries to civilians', count: 'Millions of downwinders, atomic veterans, and islanders affected' },
    { statute: 'Nuremberg Code (1947)', description: 'Human experimentation without informed consent — military personnel and islanders exposed deliberately', count: '300,000+ atomic veterans; entire Marshall Islands population' },
    { statute: '42 U.S.C. § 1983 - Civil Rights Violation', description: 'Deliberate exposure of minority communities (Navajo, Marshallese) to radiation hazards', count: 'Disproportionate impact on indigenous populations' },
    { statute: '18 U.S.C. § 1111 - Murder/Manslaughter', description: 'Continued testing despite knowledge that fallout would cause fatal cancers', count: 'Tens of thousands of excess cancer deaths documented' },
    { statute: '18 U.S.C. § 1001 - False Statements', description: 'AEC publicly claimed tests were safe while internal documents showed otherwise', count: 'Decades of systematic deception' },
    { statute: 'Geneva Convention - Protocol I, Article 35', description: 'Methods of warfare causing widespread, long-term environmental damage', count: 'Marshall Islands contaminated for centuries' },
    { statute: '42 U.S.C. § 2011 - Atomic Energy Act Violations', description: 'Failure to protect public health and safety in nuclear activities', count: 'Systematic institutional failure' },
    { statute: 'NEPA - 42 U.S.C. § 4321', description: 'No environmental impact assessment conducted for atmospheric nuclear testing', count: '216 atmospheric tests without assessment' },
  ],
  coverup: [
    'The AEC classified health studies showing elevated cancer rates among downwinders, preventing affected communities from knowing their exposure levels',
    'Military personnel at nuclear tests were ordered to sign secrecy agreements threatening court-martial if they discussed what they witnessed or health effects they experienced',
    'The government publicly claimed fallout from Nevada tests was harmless while internal documents showed scientists knew radiation doses exceeded safe levels',
    'Castle Bravo\'s yield was known to possibly exceed predictions, but no evacuation plan was created for inhabited Marshall Islands atolls in the fallout zone',
    'AEC deliberately chose test dates when winds would carry fallout over less populated areas — but "less populated" still meant thousands of downwinders',
    'The government used Marshallese islanders as unwitting subjects in Project 4.1, studying radiation effects on humans exposed to Castle Bravo fallout',
    'Radiation Exposure Compensation Act deliberately excluded many affected communities and set cancer criteria so narrow that most legitimate claims were denied',
    'The Pentagon reclassified documents related to atomic veteran exposure whenever FOIA requests threatened to reveal the scale of deliberate irradiation',
    'Navajo uranium miners were not told about radiation hazards and were denied protective equipment, leading to epidemic cancer rates on the Navajo Nation',
  ],
  sources: [
    { title: 'Advisory Committee on Human Radiation Experiments — Final Report', url: 'https://bioethicsarchive.georgetown.edu/achre/final/report.html', date: '1995' },
    { title: 'National Cancer Institute — Estimated Exposures and Thyroid Doses from NTS Fallout', url: 'https://www.cancer.gov/about-cancer/causes-prevention/risk/radiation/i131-report-and-appendix', date: '1997' },
    { title: 'Radiation Exposure Compensation Program — Claims Statistics', url: 'https://www.justice.gov/civil/common/reca', date: 'Ongoing' },
    { title: 'Atomic Heritage Foundation — Nuclear Testing Program', url: 'https://ahf.nuclearmuseum.org/ahf/history/nuclear-testing/', date: 'Ongoing' },
    { title: 'Marshall Islands Nuclear Claims Tribunal', url: 'https://nuclearclaimstribunal.com/', date: 'Ongoing' },
    { title: 'Barton Hacker — Elements of Controversy: The AEC and Radiation Safety, 1947-1974', url: 'https://www.ucpress.edu/book/9780520083233/elements-of-controversy', date: '1994' },
    { title: 'Carole Gallagher — American Ground Zero: The Secret Nuclear War', url: 'https://mitpress.mit.edu/9780262571067/american-ground-zero/', date: '1993' },
    { title: 'Congressional Research Service — Radiation Exposure Compensation Act', url: 'https://sgp.fas.org/crs/misc/R43956.pdf', date: '2024' },
    { title: 'Department of Energy — United States Nuclear Tests 1945-1992', url: 'https://www.nnss.gov/docs/docs_LibraryPublications/DOE_NV-209_REV16.pdf', date: '2015' },
  ],
};

export default function NuclearTestingPage() {
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
