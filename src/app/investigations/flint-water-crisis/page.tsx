'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowLeft, Users, Calendar, ExternalLink, Scale, Droplets, AlertTriangle, FileText, Building } from 'lucide-react';
import GlitchText from '@/components/effects/GlitchText';

const investigation = {
  title: 'Flint Water Crisis: Government-Poisoned City',
  subtitle: 'How Michigan Officials Switched Flint\'s Water Supply to Save Money — Poisoning 100,000 Residents with Lead and Killing at Least 12 People',
  severity: 'critical',
  status: 'Confirmed — Criminal Charges Filed',
  summary: 'In April 2014, Michigan\'s state-appointed emergency manager switched the city of Flint\'s water supply from Lake Huron (via Detroit) to the corrosive Flint River to save approximately $5 million over two years. Despite immediate complaints from residents about discolored, foul-smelling water, state and federal officials repeatedly dismissed concerns and falsified water quality reports. The corrosive river water leached lead from aging pipes, poisoning an estimated 100,000 residents — including 9,000 children under 6 — with dangerous levels of lead. Lead poisoning in children causes irreversible brain damage, developmental delays, and behavioral problems. At least 12 people died from Legionnaires\' disease linked to the contaminated water. State officials knew about the contamination and covered it up for 18 months while telling residents the water was safe to drink. This was environmental racism — Flint is 54% Black and 41% below the poverty line.',
  scale: {
    residents: '100,000 residents exposed',
    children: '9,000+ children poisoned',
    deaths: '12+ Legionnaires\' deaths',
    leadLevels: '13,200 ppb (EPA limit: 15)',
    coverupDuration: '18 months of lies',
    costSaved: '$5M saved (cost $400M+)',
  },
  waterSwitchDetails: {
    previousSource: 'Lake Huron via Detroit Water & Sewerage (safe, treated water)',
    newSource: 'Flint River (known to be highly corrosive, contaminated with industrial waste)',
    reason: 'Cost savings of ~$5 million/2 years under emergency manager',
    criticalFailure: 'Michigan Department of Environmental Quality did NOT require corrosion control treatment — a basic, inexpensive step ($100/day) that would have prevented lead leaching',
    leadLevels: 'Some homes tested at 13,200 ppb — 880 times the EPA action level of 15 ppb. Children were bathing in, drinking, and cooking with lead-contaminated water.',
  },
  coverup: [
    { action: 'Falsified Testing', description: 'MDEQ instructed water testers to use methods that minimized lead readings — including pre-flushing taps, removing high readings from reports, and testing homes known to have newer pipes.' },
    { action: 'Dismissed Complaints', description: 'When residents brought discolored water to town halls, officials told them it was safe. Governor Snyder\'s staff emailed internally that residents were "basically getting blown off."' },
    { action: 'Attacked Whistleblowers', description: 'When EPA Region 5 employee Miguel Del Toral wrote a memo warning about lead contamination, his superiors tried to discredit and silence him. MDEQ called his report "a preliminary draft."' },
    { action: 'Discredited Scientists', description: 'When Virginia Tech researcher Marc Edwards and pediatrician Dr. Mona Hanna-Attisha presented data showing elevated lead levels in children, state officials publicly attacked their methodology and called their findings "unfortunate."' },
    { action: 'Delayed Action', description: 'Despite knowing about contamination, officials waited 18 months before declaring an emergency. During this time, residents continued drinking poisoned water.' },
  ],
  keyFigures: [
    { name: 'Rick Snyder', role: 'Michigan Governor who appointed emergency manager and allegedly knew about contamination for months while doing nothing', href: '/entities/individuals/rick-snyder', status: 'Charged with 2 misdemeanors — charges later dropped' },
    { name: 'Darnell Earley', role: 'Flint emergency manager who authorized the water switch. Appointed by Snyder.', status: 'Charged — charges dropped 2022' },
    { name: 'Nick Lyon', role: 'Michigan Health Director charged with involuntary manslaughter for failing to alert the public about Legionnaires\' disease', status: 'Charged with involuntary manslaughter — charges dropped' },
    { name: 'Eden Wells', role: 'Michigan Chief Medical Executive charged with obstruction and lying to police about the crisis', status: 'Charged — charges dropped 2022' },
    { name: 'Marc Edwards', role: 'Virginia Tech professor who independently tested Flint\'s water and proved lead contamination', status: 'Whistleblower/Hero' },
    { name: 'Mona Hanna-Attisha', role: 'Pediatrician who proved elevated blood lead levels in Flint children despite state attacks on her research', status: 'Whistleblower/Hero — awarded multiple honors' },
    { name: 'Miguel Del Toral', role: 'EPA employee who first raised the alarm about lead in Flint\'s water — silenced by superiors', status: 'Whistleblower — vindicated' },
    { name: 'LeeAnne Walters', role: 'Flint resident and mother who organized water testing and exposed contamination after her children became ill', status: 'Activist — Goldman Environmental Prize winner' },
  ],
  environmentalRacism: {
    description: 'Flint is 54% Black, 41% below poverty line. The emergency manager law that enabled the water switch stripped elected officials of power in majority-Black cities. At the time of the crisis, over half of Michigan\'s Black population lived under emergency management. This would never have happened in a wealthy, white suburb.',
    comparisons: [
      'Ann Arbor (85% white, median income $60K) — never subjected to emergency management',
      'Flint (54% Black, median income $25K) — emergency manager imposed, water poisoned',
      'Grosse Pointe (93% white, median income $100K) — same water infrastructure age, never switched to corrosive source',
    ],
  },
  charges: [
    '18 USC §242 — Deprivation of Rights Under Color of Law (government officials knowingly exposing residents to toxic water)',
    '18 USC §1001 — False Statements (falsifying water quality reports)',
    'Michigan MCL 750.321 — Involuntary Manslaughter (Legionnaires\' disease deaths)',
    'Misconduct in Office — Failure to protect public health',
    'Obstruction of Justice — Covering up evidence of contamination',
    'Reckless Endangerment — Knowingly exposing 100,000 people to lead-contaminated water',
    'Environmental Protection Act Violations — Clean Water Act, Safe Drinking Water Act',
  ],
  timeline: [
    { date: 'Apr 25, 2014', event: 'Flint switches water supply from Detroit (Lake Huron) to Flint River' },
    { date: 'Aug 2014', event: 'E. coli detected in water. Residents complain of rashes, hair loss, discolored water.' },
    { date: 'Oct 2014', event: 'General Motors stops using Flint water — it\'s corroding engine parts. Residents told it\'s safe to drink.' },
    { date: 'Jan 2015', event: 'Detroit offers to reconnect Flint to safe water. Emergency manager refuses.' },
    { date: 'Feb 2015', event: 'EPA\'s Miguel Del Toral finds high lead levels in LeeAnne Walters\' home: 13,200 ppb' },
    { date: 'Jun 2015', event: 'Del Toral writes internal memo warning of lead crisis. EPA Region 5 suppresses it.' },
    { date: 'Jul 2015', event: 'MDEQ tells EPA the situation is under control. It is not.' },
    { date: 'Sep 2015', event: 'Dr. Mona Hanna-Attisha publishes data showing doubled/tripled blood lead levels in children' },
    { date: 'Sep 2015', event: 'State officials attack Hanna-Attisha: "I would not cause undue alarm." "Unfortunate" findings.' },
    { date: 'Oct 1, 2015', event: 'Genesee County declares health emergency. State finally acknowledges crisis — 18 MONTHS after switch.' },
    { date: 'Oct 16, 2015', event: 'Flint reconnects to Detroit water. Damage already done — pipes permanently corroded.' },
    { date: 'Jan 2016', event: 'Governor Snyder declares state of emergency. Federal emergency declared.' },
    { date: '2016-17', event: '15 state officials charged including Governor Snyder' },
    { date: '2019', event: 'All charges mysteriously dropped by new Attorney General' },
    { date: '2021', event: 'New charges filed — including 9 counts against Snyder' },
    { date: '2022', event: 'Judge dismisses all charges citing grand jury procedure issues' },
    { date: '2021', event: '$626 million settlement for residents — most receive $2,000-$5,000' },
    { date: 'Present', event: 'Flint residents still don\'t trust the water. Children face lifelong consequences of lead poisoning.' },
  ],
  legalOutcomes: [
    { defendant: 'Rick Snyder (Governor)', charge: 'Two misdemeanor willful neglect of duty charges', outcome: 'Charges dismissed June 2022 — NO accountability for governor' },
    { defendant: '15 state/local officials', charge: 'Various charges including involuntary manslaughter', outcome: 'ALL charges dropped or dismissed — ZERO convictions' },
    { defendant: 'City of Flint / State of Michigan', charge: 'Class action - civil rights, negligence', outcome: '$626 million settlement (2021) — most residents receive $2,000-$5,000' },
    { defendant: 'EPA Region 5', charge: 'Failure to enforce Safe Drinking Water Act', outcome: 'Inspector General report critical of EPA — no personnel consequences' },
  ],
  sources: [
    { title: 'Michigan Civil Rights Commission: The Flint Water Crisis Report', url: 'https://www.michigan.gov/documents/mdcr/VFlintCrisisRep-F-Edited3-13-17_554317_7.pdf', date: '2017' },
    { title: 'Anna Clark: The Poisoned City — Flint\'s Water and the American Urban Tragedy', url: 'https://us.macmillan.com/books/9781250181619/thepoisonedcity', date: '2018' },
    { title: 'Mona Hanna-Attisha: What the Eyes Don\'t See', url: 'https://www.penguinrandomhouse.com/books/556174/what-the-eyes-dont-see-by-mona-hanna-attisha-md-mph/', date: '2018' },
    { title: 'Virginia Tech Flint Water Study', url: 'http://flintwaterstudy.org/', date: '2015-present' },
    { title: 'EPA Office of Inspector General: Management Alert — Drinking Water Contamination in Flint', url: 'https://www.epa.gov/office-inspector-general/report-management-alert-drinking-water-contamination-flint-michigan', date: '2018' },
    { title: 'CNN: Flint Water Crisis Fast Facts', url: 'https://www.cnn.com/2016/03/04/us/flint-water-crisis-fast-facts/index.html', date: 'Updated ongoing' },
  ],
};

export default function FlintWaterCrisisPage() {
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
          <h2 className="text-xl font-bold text-white uppercase tracking-wider mb-4 flex items-center gap-2"><Droplets className="w-5 h-5 text-red-500" />Scale of Poisoning</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {Object.entries(investigation.scale).map(([key, val]) => (
              <div key={key} className="text-center p-4 border border-red-500/30 bg-red-950/30">
                <p className="text-xl font-black text-red-500">{val}</p>
                <p className="text-xs text-zinc-400 capitalize">{key.replace(/([A-Z])/g, ' $1').trim()}</p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Water Switch Details */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.12 }} className="border-2 border-red-800/60 bg-red-950/20 p-6 mb-8">
          <h2 className="text-xl font-bold text-white uppercase tracking-wider mb-4 flex items-center gap-2"><Building className="w-5 h-5 text-red-500" />The Switch</h2>
          <div className="space-y-3">
            <p className="text-sm text-zinc-300"><strong className="text-white">Previous Source:</strong> {investigation.waterSwitchDetails.previousSource}</p>
            <p className="text-sm text-zinc-300"><strong className="text-white">New Source:</strong> {investigation.waterSwitchDetails.newSource}</p>
            <p className="text-sm text-zinc-300"><strong className="text-white">Reason:</strong> {investigation.waterSwitchDetails.reason}</p>
            <p className="text-sm text-red-400 font-bold">{investigation.waterSwitchDetails.criticalFailure}</p>
            <p className="text-sm text-red-400">{investigation.waterSwitchDetails.leadLevels}</p>
          </div>
        </motion.div>

        {/* Environmental Racism */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.14 }} className="glass-card p-6 mb-8 border-l-4 border-blood-600">
          <h2 className="text-xl font-bold text-white uppercase tracking-wider mb-4">Environmental Racism</h2>
          <p className="text-sm text-zinc-300 mb-4">{investigation.environmentalRacism.description}</p>
          <div className="space-y-2">
            {investigation.environmentalRacism.comparisons.map((c, idx) => (
              <p key={idx} className="text-sm text-zinc-400 pl-4 border-l-2 border-red-500/50 py-1">{c}</p>
            ))}
          </div>
        </motion.div>

        {/* Coverup */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.16 }} className="glass-card p-6 mb-8">
          <h2 className="text-xl font-bold text-white uppercase tracking-wider mb-4 flex items-center gap-2"><AlertTriangle className="w-5 h-5 text-red-500" />The Cover-Up</h2>
          <div className="space-y-3">
            {investigation.coverup.map((c, idx) => (
              <div key={idx} className="p-4 bg-zinc-900/50 border border-zinc-800">
                <p className="font-bold text-blood-400 text-sm">{c.action}</p>
                <p className="text-sm text-zinc-300 mt-2">{c.description}</p>
              </div>
            ))}
          </div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-8">
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
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.25 }} className="glass-card p-6 border-l-4 border-red-600">
              <h2 className="text-xl font-bold text-white uppercase tracking-wider mb-4 flex items-center gap-2"><FileText className="w-5 h-5 text-red-500" />Applicable Charges</h2>
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
