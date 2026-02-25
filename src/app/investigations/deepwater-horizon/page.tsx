'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowLeft, AlertTriangle, Users, Calendar, FileText, ExternalLink, Scale, ShieldAlert, Skull } from 'lucide-react';
import GlitchText from '@/components/effects/GlitchText';

const investigation = {
  title: 'BP Deepwater Horizon Disaster',
  subtitle: '11 Workers Killed, 4.9 Million Barrels of Oil Spilled, Safety Corners Cut: The Worst Environmental Disaster in U.S. History',
  severity: 'critical',
  status: 'SETTLED  -  $65B+',
  summary: 'On April 20, 2010, the Deepwater Horizon drilling rig exploded in the Gulf of Mexico, killing 11 workers and injuring 17 others. The blowout released approximately 4.9 million barrels (210 million gallons) of crude oil over 87 days, creating the largest marine oil spill in history. Investigations revealed that BP, Transocean, and Halliburton made a series of cost-cutting decisions that compromised safety, including using an insufficient number of centralizers, ignoring negative pressure test results, and overriding the warnings of on-site engineers. Internal documents showed BP was $58 million over budget and 43 days behind schedule on the Macondo well, creating immense pressure to cut corners. The company\'s own risk assessments identified the exact failure modes that caused the blowout, yet management chose speed and cost savings over safety. BP ultimately paid over $65 billion in cleanup costs, fines, and settlements  -  yet the environmental damage to the Gulf ecosystem persists over a decade later.',
  keyFigures: [
    { name: 'Tony Hayward', role: 'BP CEO who said "I\'d like my life back" during the disaster; resigned amid public outrage', href: '/entities/individuals/tony-hayward', status: 'Resigned 2010' },
    { name: 'Robert Dudley', role: 'Succeeded Hayward as BP CEO; oversaw $65B+ in settlements and liability payments', href: '/entities/individuals/robert-dudley', status: 'Former CEO' },
    { name: 'Donald Vidrine', role: 'BP well site leader who approved proceeding despite failed negative pressure test', href: '/entities/individuals/donald-vidrine', status: 'Pleaded guilty  -  Probation' },
    { name: 'Robert Kaluza', role: 'BP well site leader charged with manslaughter; charges later dropped', href: '/entities/individuals/robert-kaluza', status: 'Charges dropped' },
    { name: 'Kurt Mix', role: 'BP engineer who deleted text messages and voicemails about oil flow rate estimates', href: '/entities/individuals/kurt-mix', status: 'Convicted  -  Obstruction' },
    { name: 'David Rainey', role: 'BP VP charged with obstruction for lying about flow rate; acquitted at trial', href: '/entities/individuals/david-rainey', status: 'Acquitted' },
    { name: 'Jimmy Harrell', role: 'Transocean offshore installation manager who argued against BP\'s well decisions', href: '/entities/individuals/jimmy-harrell', status: 'Witness  -  Deceased' },
    { name: 'Mike Williams', role: 'Transocean chief electronics technician; key survivor witness who testified about safety failures', href: '/entities/individuals/mike-williams', status: 'Survivor  -  Witness' },
    { name: 'Jesse Gagliano', role: 'Halliburton cementing engineer who warned BP about insufficient centralizers', href: '/entities/individuals/jesse-gagliano', status: 'Witness' },
    { name: 'Thad Allen', role: 'Coast Guard Admiral who served as National Incident Commander for the federal response', href: '/entities/individuals/thad-allen', status: 'Retired  -  Response leader' },
    { name: 'Ken Salazar', role: 'Interior Secretary who reorganized the failed Minerals Management Service after the disaster', href: '/entities/individuals/ken-salazar', status: 'Former Secretary' },
  ],
  timeline: [
    { date: '2009-10-06', event: 'BP begins drilling the Macondo Prospect well (Mississippi Canyon Block 252) in the Gulf of Mexico' },
    { date: '2010-03-08', event: 'Drilling problems cause the well to become $58 million over budget and 43 days behind schedule' },
    { date: '2010-04-09', event: 'Halliburton engineer Jesse Gagliano advises BP to use 21 centralizers; BP decides to use only 6 to save time' },
    { date: '2010-04-15', event: 'BP\'s own internal risk assessment identifies the well as having "SEVERE" gas flow potential' },
    { date: '2010-04-19', event: 'Halliburton finishes cementing the well; cement job is later found to be defective' },
    { date: '2010-04-20', event: 'Negative pressure test fails twice; BP well site leaders misinterpret results and declare the test successful' },
    { date: '2010-04-20T21:49', event: 'Methane gas reaches the platform and ignites; Deepwater Horizon explodes, killing 11 workers' },
    { date: '2010-04-22', event: 'Deepwater Horizon sinks; the riser pipe buckles, and oil begins flowing freely into the Gulf' },
    { date: '2010-04-28', event: 'NOAA estimates 5,000 barrels per day; later investigations reveal the actual rate was 62,000 barrels per day' },
    { date: '2010-05-26', event: '"Top Kill" attempt fails  -  BP pumps mud and cement into the well but cannot stop the flow' },
    { date: '2010-06-15', event: 'Internal BP documents reveal company knew flow rate was far higher than publicly stated' },
    { date: '2010-06-16', event: 'BP establishes $20 billion escrow fund for claims after White House pressure' },
    { date: '2010-07-15', event: 'Capping stack finally stops the oil flow  -  87 days after the initial blowout' },
    { date: '2010-09-19', event: 'Relief well completed; Macondo well permanently sealed with cement' },
    { date: '2011-01-11', event: 'National Commission on the BP Deepwater Horizon Oil Spill releases final report: "systemic" causes' },
    { date: '2012-11-15', event: 'BP pleads guilty to 11 counts of felony manslaughter and agrees to pay $4.5 billion' },
    { date: '2014-09-04', event: 'Federal judge rules BP was "grossly negligent" and "reckless"  -  triggering maximum Clean Water Act penalties' },
    { date: '2015-10-05', event: 'BP agrees to pay $20.8 billion  -  largest environmental settlement in U.S. history' },
    { date: '2016-04-04', event: 'Federal judge gives final approval to BP settlement; total liability exceeds $65 billion' },
  ],
  legalOutcomes: [
    { defendant: 'BP (corporate)', charge: '11 counts felony manslaughter, 1 count felony obstruction, environmental crimes', outcome: '$4.5B criminal fine  -  largest in U.S. history at the time' },
    { defendant: 'BP (civil)', charge: 'Gross negligence under Clean Water Act', outcome: '$20.8B settlement  -  largest environmental settlement in U.S. history' },
    { defendant: 'Donald Vidrine', charge: 'Involuntary manslaughter  -  11 counts', outcome: 'Pleaded guilty to misdemeanor CWA violation; 10 months probation' },
    { defendant: 'Robert Kaluza', charge: 'Involuntary manslaughter  -  11 counts', outcome: 'Charges dismissed  -  insufficient evidence' },
    { defendant: 'Kurt Mix', charge: 'Obstruction of justice  -  deleting evidence', outcome: 'Convicted; sentenced to 6 months probation' },
    { defendant: 'Transocean', charge: 'CWA violations  -  rig safety failures', outcome: '$1.4B criminal and civil settlement' },
    { defendant: 'Halliburton', charge: 'Destruction of evidence (post-incident cement testing)', outcome: 'Pleaded guilty to destruction of evidence; $200K fine; $55M to National Fish and Wildlife Foundation' },
    { defendant: 'MOEX Offshore', charge: 'CWA violations as minority well partner', outcome: '$90M civil settlement' },
  ],
  charges: [
    { statute: '18 U.S.C. § 1115  -  Seaman\'s Manslaughter', description: 'Death of 11 workers due to misconduct, negligence, and inattention to duties aboard a vessel', count: '11 counts  -  BP corporate plea' },
    { statute: '33 U.S.C. § 1319(c)  -  Clean Water Act Violations', description: 'Negligent and grossly negligent discharge of 4.9 million barrels of oil into navigable waters', count: '1 count  -  $5.5B in CWA penalties' },
    { statute: '18 U.S.C. § 1519  -  Obstruction of Justice', description: 'Destruction of evidence including deletion of text messages about oil flow rates', count: 'Multiple charges against individuals' },
    { statute: '16 U.S.C. § 703  -  Migratory Bird Treaty Act', description: 'Death of over 1 million seabirds, including brown pelicans and terns', count: '1 count  -  corporate guilty plea' },
    { statute: '33 U.S.C. § 2701  -  Oil Pollution Act (OPA)', description: 'Liability for oil spill cleanup costs and natural resource damages', count: 'Basis for $20.8B settlement' },
    { statute: '18 U.S.C. § 1001  -  False Statements', description: 'Making materially false statements to Congress and federal investigators about oil flow rate', count: 'Charged against David Rainey (acquitted)' },
    { statute: '42 U.S.C. § 9601  -  CERCLA (Superfund)', description: 'Release of hazardous substances into the environment requiring comprehensive cleanup', count: 'Applied to long-term environmental remediation' },
    { statute: '18 U.S.C. § 371  -  Conspiracy', description: 'Conspiracy to make false statements and obstruct official proceedings', count: 'Charged in connection with flow rate concealment' },
  ],
  coverup: [
    'BP initially claimed the well was leaking 1,000 barrels per day, then 5,000  -  the actual rate was 62,000 barrels per day, meaning BP underreported the spill by 92%',
    'BP engineer Kurt Mix deleted over 200 text messages discussing flow rate estimates that contradicted BP\'s public statements',
    'Halliburton destroyed evidence by ordering employees to delete computer simulations of the cement job that showed it would fail',
    'BP\'s own risk assessment classified the Macondo well as "SEVERE" risk before the blowout, but this assessment was not shared with regulators',
    'The Minerals Management Service (MMS), the regulatory agency responsible for oversight, had a culture of corruption  -  accepting gifts, meals, and trips from oil companies it regulated',
    'BP distributed millions of gallons of the chemical dispersant Corexit, which scientists warned was toxic, to make the oil slick less visible on the surface rather than removing it',
    'Internal BP emails showed company officials discussing "who cares, it\'s done, end of story, will probably be fine" in response to warnings about the number of centralizers',
    'BP initially blamed Transocean and Halliburton exclusively; investigations revealed the disaster resulted from decisions made by all three companies',
    'The Coast Guard allowed BP to control media access to affected areas, preventing journalists from documenting the full extent of environmental damage',
  ],
  sources: [
    { title: 'National Commission on the BP Deepwater Horizon Oil Spill  -  Final Report', url: 'https://www.govinfo.gov/content/pkg/GPO-OILCOMMISSION/pdf/GPO-OILCOMMISSION.pdf', date: '2011-01-11' },
    { title: 'DOJ Announces $4.5 Billion BP Criminal Settlement', url: 'https://www.justice.gov/opa/pr/bp-exploration-and-production-inc-pleads-guilty-felony-manslaughter', date: '2012-11-15' },
    { title: 'EPA: Deepwater Horizon  -  BP Gulf of Mexico Oil Spill', url: 'https://www.epa.gov/enforcement/deepwater-horizon-bp-gulf-mexico-oil-spill', date: '2020-06-01' },
    { title: 'DOJ Announces $20.8 Billion BP Settlement', url: 'https://www.justice.gov/opa/pr/federal-government-and-state-co-trustees-reach-208-billion-settlement-bp', date: '2015-10-05' },
    { title: 'Federal Judge Rules BP "Grossly Negligent"', url: 'https://www.nytimes.com/2014/09/05/business/bp-negligent-in-2010-oil-spill-judge-rules.html', date: '2014-09-04' },
    { title: 'Chemical Safety Board Investigation Report', url: 'https://www.csb.gov/macondo-blowout-and-explosion/', date: '2016-04-20' },
    { title: 'Transocean Settlement  -  $1.4 Billion', url: 'https://www.justice.gov/opa/pr/transocean-pleads-guilty-agrees-pay-14-billion-criminal-and-civil-penalties', date: '2013-02-14' },
    { title: 'New York Times: The Spill  -  A Deep Dive Investigation', url: 'https://www.nytimes.com/interactive/2010/06/27/us/20100627-deepwater-horizon.html', date: '2010-06-27' },
  ],
};

export default function DeepwaterHorizonPage() {
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
