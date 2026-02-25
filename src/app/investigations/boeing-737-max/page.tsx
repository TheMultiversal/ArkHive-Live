'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowLeft, AlertTriangle, Users, Calendar, FileText, ExternalLink, Scale, ShieldAlert, Skull } from 'lucide-react';
import GlitchText from '@/components/effects/GlitchText';

const investigation = {
  title: 'Boeing 737 MAX Disaster',
  subtitle: '346 Lives Lost: How Boeing Prioritized Profits Over Safety and Captured Its Own Regulator',
  severity: 'critical',
  status: 'CRIMINAL CHARGES  -  DEFERRED PROSECUTION',
  summary: 'Two Boeing 737 MAX crashes  -  Lion Air Flight 610 (October 2018) and Ethiopian Airlines Flight 302 (March 2019)  -  killed all 346 people aboard. Investigations revealed that Boeing\'s MCAS (Maneuvering Characteristics Augmentation System) was fatally flawed, relying on a single angle-of-attack sensor with no redundancy. Boeing concealed the system\'s existence from pilots and airlines, pressured the FAA to delegate safety certification to Boeing itself, cut costs on safety features, and misled regulators about the aircraft\'s design. Internal messages showed employees knew the plane was unsafe, calling it "designed by clowns, who in turn are supervised by monkeys."',
  keyFigures: [
    { name: 'Dennis Muilenburg', role: 'CEO of Boeing (2015-2019); oversaw 737 MAX development and initial crash response; fired after failed recovery', href: '/entities/individuals/dennis-muilenburg', status: 'Forced Out' },
    { name: 'David Calhoun', role: 'CEO of Boeing (2020-2024); managed aftermath including criminal settlement negotiations', href: '/entities/individuals/david-calhoun', status: 'Resigned' },
    { name: 'Mark Forkner', role: 'Boeing\'s chief technical pilot for the 737 MAX; charged with fraud for deceiving FAA about MCAS', href: '/entities/individuals/mark-forkner', status: 'Acquitted' },
    { name: 'Ali Bahrami', role: 'FAA Associate Administrator who oversaw the delegated certification process that allowed Boeing to self-certify', href: '/entities/individuals/ali-bahrami', status: 'Retired' },
    { name: 'Michael Teal', role: 'Boeing 737 MAX chief engineer who led the design team that created the flawed MCAS system', href: '/entities/individuals/michael-teal', status: 'Former Engineer' },
    { name: 'Ed Pierson', role: 'Former Boeing senior manager who warned about production quality issues before the crashes; became key whistleblower', href: '/entities/individuals/ed-pierson', status: 'Whistleblower' },
    { name: 'Peter DeFazio', role: 'House Transportation Committee Chair who led the congressional investigation into Boeing and FAA', href: '/entities/individuals/peter-defazio', status: 'Former Congressman' },
    { name: 'Sam Salehpour', role: 'Boeing quality engineer who raised alarms about structural defects in the 787 Dreamliner; faced retaliation', href: '/entities/individuals/sam-salehpour', status: 'Whistleblower' },
    { name: 'John Barnett', role: 'Boeing quality manager who reported manufacturing defects and safety shortcuts; found dead during legal proceedings', href: '/entities/individuals/john-barnett', status: 'Deceased (2024)' },
    { name: 'Steve Dickson', role: 'FAA Administrator (2019-2022); oversaw the 737 MAX recertification process after the groundings', href: '/entities/individuals/steve-dickson', status: 'Former FAA Admin' },
    { name: 'Jim McNerney', role: 'Former Boeing CEO (2005-2015) who initiated the cost-cutting culture that prioritized stock buybacks over engineering', href: '/entities/individuals/jim-mcnerney', status: 'Former CEO' },
  ],
  timeline: [
    { date: '2011', event: 'Boeing decides to re-engine the existing 737 design rather than build a new aircraft  -  a cost-cutting decision that led to MCAS' },
    { date: '2012', event: 'Boeing offers the 737 MAX to compete with Airbus A320neo; larger engines change the aircraft\'s aerodynamic characteristics' },
    { date: '2013', event: 'MCAS system conceived to compensate for the 737 MAX\'s tendency to pitch up due to forward-mounted engines' },
    { date: '2015', event: 'Boeing pressures FAA to delegate more certification authority through Organization Designation Authorization (ODA)' },
    { date: '2016', event: 'During simulator testing, MCAS demonstrates aggressive nose-down behavior; engineers expand its authority without adequate review' },
    { date: '2016-11', event: 'Boeing chief technical pilot Mark Forkner discovers MCAS behaves erratically in simulator; messages show concern but no formal report' },
    { date: '2017-03', event: 'FAA certifies the 737 MAX; Boeing successfully argued MCAS was minor enough not to require separate pilot training' },
    { date: '2017-05', event: 'Boeing begins delivering 737 MAX aircraft to airlines worldwide; MCAS is not mentioned in pilot manuals' },
    { date: '2018-10-29', event: 'Lion Air Flight 610 crashes into the Java Sea 13 minutes after takeoff from Jakarta, killing all 189 aboard' },
    { date: '2018-11', event: 'Boeing issues a bulletin about MCAS  -  the first time most pilots and airlines learn the system exists' },
    { date: '2019-02', event: 'Internal Boeing messages surface: employee wrote the 737 MAX was "designed by clowns, who in turn are supervised by monkeys"' },
    { date: '2019-03-10', event: 'Ethiopian Airlines Flight 302 crashes 6 minutes after takeoff from Addis Ababa, killing all 157 aboard' },
    { date: '2019-03-13', event: 'FAA grounds the 737 MAX  -  the last major regulator to do so, after China and Europe acted days earlier' },
    { date: '2019-10', event: 'Internal Boeing documents reveal employees mocked FAA oversight and boasted about manipulating regulators' },
    { date: '2020-09', event: 'House Transportation Committee releases 238-page report finding Boeing misled FAA and FAA failed its oversight role' },
    { date: '2021-01', event: 'Boeing agrees to $2.5 billion deferred prosecution agreement with DOJ  -  including $500M to crash victims\' families' },
    { date: '2021-11', event: 'FAA recertifies the 737 MAX with design changes; aircraft returns to service after 20-month grounding' },
    { date: '2024-01', event: 'Alaska Airlines Flight 1282 door plug blows out mid-flight, reigniting concerns about Boeing manufacturing quality' },
    { date: '2024-03', event: 'Whistleblower John Barnett found dead during wrongful termination lawsuit deposition against Boeing' },
  ],
  legalOutcomes: [
    { defendant: 'Boeing (DOJ)', charge: 'Conspiracy to defraud the United States', outcome: '$2.5 billion deferred prosecution agreement: $243.6M fine, $500M to crash victims, $1.77B to airlines' },
    { defendant: 'Boeing (Shareholder Suit)', charge: 'Board failure of safety oversight', outcome: '$237.5 million settlement  -  largest derivative suit involving officers and directors' },
    { defendant: 'Mark Forkner', charge: 'Wire fraud for deceiving FAA about MCAS', outcome: 'Acquitted by federal jury in 2022' },
    { defendant: 'Boeing (Ethiopian Airlines Families)', charge: 'Wrongful death', outcome: 'Individual settlements with families; amounts confidential' },
    { defendant: 'Boeing (Lion Air Families)', charge: 'Wrongful death', outcome: 'Individual settlements with families; amounts confidential' },
    { defendant: 'Boeing (SEC)', charge: 'Misleading investors about 737 MAX safety', outcome: '$200 million SEC settlement in 2022' },
    { defendant: 'Boeing (DOJ 2024)', charge: 'Breach of deferred prosecution agreement', outcome: 'DOJ found Boeing violated DPA; new criminal proceedings possible' },
    { defendant: 'FAA', charge: 'Congressional findings of regulatory failure', outcome: 'Aircraft Certification, Safety, and Accountability Act passed in 2020; reforms to ODA process' },
  ],
  charges: [
    { statute: '18 U.S.C. § 371  -  Conspiracy to Defraud the United States', description: 'Boeing employees conspired to deceive FAA about the MCAS system\'s scope and behavior', count: 'Basis for $2.5B deferred prosecution agreement' },
    { statute: '18 U.S.C. § 1343  -  Wire Fraud', description: 'Fraudulent electronic communications to FAA regarding MCAS flight characteristics and pilot training requirements', count: 'Charged against Mark Forkner (acquitted)' },
    { statute: '18 U.S.C. § 1001  -  False Statements', description: 'Providing false and misleading information to FAA during the 737 MAX certification process', count: 'Part of DOJ investigation' },
    { statute: '49 U.S.C. § 46316  -  Aircraft Safety Violations', description: 'Failing to meet federal aviation safety standards in design and certification of the 737 MAX', count: 'Addressed through FAA enforcement actions' },
    { statute: '15 U.S.C. § 78j  -  Securities Fraud', description: 'Misleading investors about the safety of the 737 MAX and Boeing\'s internal knowledge of defects', count: '$200M SEC settlement' },
    { statute: '18 U.S.C. § 1519  -  Obstruction (Destruction of Evidence)', description: 'Allegations that Boeing failed to preserve relevant communications during investigation', count: 'Under investigation' },
    { statute: 'State Wrongful Death Statutes', description: '346 deaths across two crashes caused by known design defects that Boeing concealed', count: 'Hundreds of individual wrongful death suits' },
    { statute: '49 U.S.C. § 44701  -  FAA Certification Fraud', description: 'Obtaining type certification through deceptive means regarding MCAS system behavior', count: 'Central to congressional and DOJ findings' },
  ],
  coverup: [
    'Boeing deliberately classified MCAS as a minor modification to avoid triggering new pilot training requirements  -  saving airlines money but leaving pilots unaware of a system that could crash their plane',
    'The original MCAS design relied on a single angle-of-attack sensor with no redundancy; Boeing made a disagree alert (which would warn of sensor failure) an optional paid upgrade rather than a standard safety feature',
    'After Lion Air Flight 610, Boeing blamed the pilots and issued a bulletin  -  but did not ground the fleet, leading to a second identical crash that killed 157 more people',
    'Internal messages showed Boeing employees mocking FAA oversight: "This airplane is designed by clowns, who in turn are supervised by monkeys" and "I wouldn\'t put my family on a MAX"',
    'Boeing lobbied to use the FAA\'s Organization Designation Authorization (ODA) system, effectively allowing Boeing to certify the safety of its own aircraft with minimal independent FAA review',
    'The FAA was the last major aviation regulator in the world to ground the 737 MAX after the second crash  -  China and Europe acted days earlier, exposing the depth of regulatory capture',
    'Boeing spent over $60 billion on stock buybacks between 2013-2019 while cutting engineering and safety budgets  -  prioritizing shareholder returns over the lives of passengers',
    'Multiple Boeing whistleblowers reported manufacturing quality issues and faced retaliation; John Barnett was found dead during his wrongful termination deposition in 2024',
    'Boeing\'s deferred prosecution agreement of $2.5 billion meant no executive went to prison for decisions that killed 346 people  -  the DOJ later found Boeing violated even this lenient deal',
  ],
  sources: [
    { title: 'House Transportation Committee  -  Final Committee Report on the Boeing 737 MAX', url: 'https://transportation.house.gov/committee-activity/boeing-737-max-702702702702702702702investigation', date: '2020-09' },
    { title: 'DOJ Deferred Prosecution Agreement with Boeing', url: 'https://www.justice.gov/opa/pr/boeing-charged-737-max-fraud-conspiracy-and-agrees-pay-over-25-billion', date: '2021-01-07' },
    { title: 'KNKT Final Report  -  Lion Air Flight 610', url: 'https://knkt.go.id/KNKT/templateB/Investigation/IFP/Aircraft%20Accident%20Investigation%20Report%20-%20PT.%20Lion%20Mentari%20Airlines%20Boeing%20737-8%20(MAX).pdf', date: '2019-10' },
    { title: 'Ethiopian Aircraft Accident Investigation Bureau  -  ET302 Report', url: 'https://www.bbc.com/news/business-50265531', date: '2020-03' },
    { title: 'Boeing Internal Messages Released to Congress', url: 'https://www.nytimes.com/2020/01/09/business/boeing-737-messages.html', date: '2020-01-09' },
    { title: 'SEC Settlement with Boeing  -  $200M', url: 'https://www.sec.gov/news/press-release/2022-178', date: '2022-09-22' },
    { title: 'Flying Blind: The 737 MAX Tragedy and the Fall of Boeing  -  Peter Robison', url: 'https://www.penguinrandomhouse.com/books/646497/flying-blind-by-peter-robison/', date: '2021-11' },
    { title: 'Alaska Airlines Door Plug Incident  -  NTSB Preliminary Report', url: 'https://www.ntsb.gov/investigations/Pages/DCA24MA063.aspx', date: '2024-01' },
  ],
};

export default function Boeing737MaxPage() {
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
