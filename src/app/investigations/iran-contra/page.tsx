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
  Scale,
  Crosshair,
  DollarSign,
  ShieldAlert,
} from 'lucide-react';
import GlitchText from '@/components/effects/GlitchText';

const investigation = {
  title: 'Iran-Contra Affair',
  subtitle: 'How the Reagan Administration Secretly Sold Weapons to Iran and Funded Death Squads in Central America — In Violation of US Law',
  severity: 'critical',
  status: 'Historical Record — Pardons Obstructed Justice',
  summary: 'The Iran-Contra affair was a political scandal in the United States that came to light in November 1986. Senior Reagan administration officials secretly facilitated the sale of arms to the Khomeini regime in Iran — which was the subject of an arms embargo — and used the proceeds to illegally fund the Contras, right-wing rebel groups in Nicaragua, in direct violation of the Boland Amendment passed by Congress. The scandal involved drug trafficking through CIA-connected networks, death squads that killed tens of thousands of civilians, and a systematic cover-up that reached the Oval Office. President George H.W. Bush later pardoned six key figures, effectively ending the investigation before it could reach Reagan or Bush himself.',
  scale: {
    weapons: '$48M+ in arms to Iran',
    contraFunding: '$34M+ diverted illegally',
    hostages: '7 American hostages (3 released)',
    convicted: '14 individuals charged',
    pardoned: '6 pardoned by Bush',
    killed: '30,000+ Nicaraguans killed by Contras',
  },
  theScheme: [
    { phase: 'Phase 1: Arms to Iran (1985-1986)', description: 'Despite an arms embargo, the Reagan administration sold over 2,500 TOW anti-tank missiles and HAWK anti-aircraft missiles to Iran through Israel as intermediary. The stated purpose was securing release of American hostages held by Hezbollah in Lebanon, but this violated the Arms Export Control Act and the administration\'s own policy of never negotiating with terrorists.' },
    { phase: 'Phase 2: Diversion to Contras (1985-1986)', description: 'NSC staffer Oliver North devised a scheme to overcharge Iran for the weapons and divert the "profits" (approximately $18 million) to the Contras in Nicaragua. This directly violated the Boland Amendment, which Congress passed specifically to prohibit the Reagan administration from funding the Contras.' },
    { phase: 'Phase 3: The Drug Connection', description: 'Congressional investigations and journalist Gary Webb documented that CIA-connected Contra supply networks were simultaneously trafficking cocaine into the United States. The crack cocaine epidemic in American inner cities was directly fueled by these networks. The CIA Inspector General later confirmed awareness of drug trafficking by Contra-connected individuals.' },
    { phase: 'Phase 4: Cover-Up and Pardons', description: 'Oliver North and his secretary Fawn Hall shredded thousands of documents. Attorney General Edwin Meese was given advance notice of the investigation, allowing time for document destruction. President Bush pardoned 6 key figures on Christmas Eve 1992, just weeks before leaving office, effectively killing the investigation.' },
  ],
  keyFigures: [
    { name: 'Ronald Reagan', role: 'President who approved arms sales to Iran and claimed not to remember key details', href: '/entities/individuals/ronald-reagan', status: 'Tower Commission found him "disengaged." Never charged.' },
    { name: 'Oliver North', role: 'NSC staffer who ran the operation, shredded documents', href: '/entities/individuals/oliver-north', status: 'Convicted on 3 counts — reversed on appeal due to immunized testimony' },
    { name: 'John Poindexter', role: 'National Security Advisor who approved the diversion', href: '/entities/individuals/john-poindexter', status: 'Convicted on 5 counts — reversed on appeal' },
    { name: 'Caspar Weinberger', role: 'Secretary of Defense who concealed his notes from investigators', href: '/entities/individuals/caspar-weinberger', status: 'Indicted — Pardoned by Bush before trial' },
    { name: 'George H.W. Bush', role: 'Vice President who claimed to be "out of the loop" despite evidence to the contrary', href: '/entities/individuals/george-hw-bush', status: 'Pardoned 6 key figures — killed investigation' },
    { name: 'William Casey', role: 'CIA Director who likely orchestrated the scheme — died before he could testify', href: '/entities/individuals/william-casey', status: 'Deceased (brain tumor) — never testified' },
    { name: 'Fawn Hall', role: 'Oliver North\'s secretary who helped shred classified documents', href: '/entities/individuals/fawn-hall', status: 'Granted immunity for testimony' },
    { name: 'Elliott Abrams', role: 'Assistant Secretary of State who lied to Congress about Contra funding', status: 'Convicted of withholding information — Pardoned by Bush' },
    { name: 'Robert McFarlane', role: 'Former NSA who traveled to Tehran with weapons and a birthday cake for Khomeini', status: 'Convicted of withholding info — Pardoned by Bush' },
    { name: 'Edwin Meese', role: 'Attorney General who gave advance warning, allowing document destruction', status: 'Never charged despite Independent Counsel criticism' },
    { name: 'Lawrence Walsh', role: 'Independent Counsel who spent 7 years investigating', status: 'Investigation killed by Bush pardons' },
  ],
  contraCrimes: [
    { crime: 'Mass Murder of Civilians', description: 'Contras systematically murdered, tortured, and raped Nicaraguan civilians. Human Rights Watch documented massacres, mutilation, and execution of prisoners. Victims included women, children, and elderly.', toll: '30,000+ Nicaraguan civilians killed' },
    { crime: 'Drug Trafficking', description: 'CIA-connected Contra supply networks trafficked cocaine into the US. Pilots who flew weapons to Central America returned with cocaine. The crack epidemic in Black communities was directly connected. CIA Inspector General confirmed links.', toll: 'Millions of Americans affected by crack epidemic' },
    { crime: 'Torture', description: 'Contras were trained by CIA-funded Argentine military officers in torture techniques. The CIA published a "psychological operations" manual for the Contras that included assassinations.', toll: 'Systematic — thousands of victims' },
    { crime: 'Mining of Harbors', description: 'CIA directly mined Nicaraguan harbors in 1984, damaging commercial vessels from multiple countries. The International Court of Justice found the US guilty of violating international law.', toll: 'Multiple ships damaged and injured sailors' },
  ],
  bolandAmendment: {
    text: '"No funds available to the Central Intelligence Agency, the Department of Defense, or any other agency or entity of the United States involved in intelligence activities may be obligated or expended for the purpose of which would have the effect of supporting, directly or indirectly, military or paramilitary operations in Nicaragua."',
    passage: 'Passed by Congress in 1984',
    violation: 'The Reagan administration circumvented this law through Oliver North\'s secret operation, funded by Iranian arms sales proceeds and illegal donations from foreign governments and private donors.',
  },
  icjRuling: {
    case: 'Nicaragua v. United States of America (1986)',
    court: 'International Court of Justice',
    ruling: 'Found the United States guilty of violating international law by supporting the Contras and mining Nicaraguan harbors. Awarded reparations to Nicaragua.',
    usResponse: 'The United States refused to recognize the court\'s jurisdiction, refused to pay reparations, and vetoed enforcement by the UN Security Council.',
  },
  timeline: [
    { date: '1979', event: 'Sandinista revolution overthrows US-backed Somoza dictatorship in Nicaragua' },
    { date: '1981', event: 'Reagan authorizes CIA to fund Contras against Sandinista government' },
    { date: '1982', event: 'First Boland Amendment restricts funding for overthrowing Nicaraguan government' },
    { date: '1984', event: 'CIA mines Nicaraguan harbors. Second Boland Amendment bans all Contra funding. ICJ rules against US.' },
    { date: '1985', event: 'First arms shipment to Iran via Israel (96 TOW missiles). Hostage Benjamin Weir released.' },
    { date: 'Jan 17, 1986', event: 'Reagan signs secret finding authorizing direct arms sales to Iran' },
    { date: 'Feb 1986', event: '1,000 TOW missiles shipped to Iran. Hostage released. North diverts profits to Contras.' },
    { date: 'Oct 5, 1986', event: 'Sandinistas shoot down CIA supply plane. Survivor Eugene Hasenfus captured, reveals CIA connection.' },
    { date: 'Nov 3, 1986', event: 'Lebanese magazine Al-Shiraa exposes US arms sales to Iran' },
    { date: 'Nov 13, 1986', event: 'Reagan addresses nation: "We did not — repeat — did not trade weapons or anything else for hostages"' },
    { date: 'Nov 25, 1986', event: 'AG Meese announces discovery of diversion to Contras. North fired, Poindexter resigns.' },
    { date: 'Nov-Dec 1986', event: 'North and Hall shred thousands of documents. Hall smuggles docs in her clothing.' },
    { date: 'Feb 1987', event: 'Tower Commission report criticizes Reagan for "disengaged" management style' },
    { date: 'May-Aug 1987', event: 'Congressional Iran-Contra hearings televised nationally. North testifies in uniform.' },
    { date: 'Mar 1988', event: 'Oliver North and John Poindexter indicted' },
    { date: 'May 1989', event: 'North convicted on 3 of 12 counts' },
    { date: 'Apr 1990', event: 'Poindexter convicted on 5 counts' },
    { date: 'July 1990', event: 'North\'s convictions overturned on appeal (immunized testimony tainted trial)' },
    { date: 'Nov 1991', event: 'Poindexter\'s convictions overturned on same grounds' },
    { date: 'June 1992', event: 'Caspar Weinberger indicted for perjury and obstruction' },
    { date: 'Dec 24, 1992', event: 'President Bush pardons Weinberger and 5 others on Christmas Eve — 2 weeks before leaving office' },
    { date: 'Jan 1994', event: 'Walsh\'s final report: Bush pardon "undermined the principle that no man is above the law"' },
  ],
  legalOutcomes: [
    { defendant: 'Oliver North', charge: 'Aiding and abetting obstruction, destroying documents, accepting illegal gratuity', outcome: 'Convicted on 3 counts — ALL reversed on appeal (1990)' },
    { defendant: 'John Poindexter', charge: 'Conspiracy, obstruction, false statements, destruction of documents', outcome: 'Convicted on 5 counts — ALL reversed on appeal (1991)' },
    { defendant: 'Caspar Weinberger', charge: 'Perjury, obstruction, false statements', outcome: 'Indicted — Pardoned by Bush before trial' },
    { defendant: 'Robert McFarlane', charge: 'Withholding information from Congress', outcome: 'Pled guilty — Pardoned by Bush' },
    { defendant: 'Elliott Abrams', charge: 'Withholding information from Congress', outcome: 'Pled guilty — Pardoned by Bush. Later served under Trump.' },
    { defendant: 'Clair George (CIA)', charge: 'Perjury, false statements', outcome: 'Convicted — Pardoned by Bush' },
    { defendant: 'Duane Clarridge (CIA)', charge: 'Perjury', outcome: 'Pardoned by Bush before trial' },
    { defendant: 'Alan Fiers (CIA)', charge: 'Withholding information', outcome: 'Pled guilty — Pardoned by Bush' },
    { defendant: 'Richard Secord', charge: 'False statements to Congress', outcome: 'Pled guilty — probation' },
    { defendant: 'Albert Hakim', charge: 'Supplementing salary of Oliver North', outcome: 'Pled guilty — probation and fine' },
  ],
  charges: [
    { statute: 'Boland Amendment (1984)', description: 'Congressional prohibition on US funding of Contra military operations', count: 'Systematically violated by NSC operation' },
    { statute: 'Arms Export Control Act (22 U.S.C. § 2778)', description: 'Unauthorized export of defense articles to Iran', count: 'Multiple shipments totaling $48M+' },
    { statute: '18 U.S.C. § 1001 — False Statements', description: 'Lying to Congress about knowledge of operations', count: 'Multiple defendants convicted/pled guilty' },
    { statute: '18 U.S.C. § 1503/1505 — Obstruction of Congress', description: 'Destroying documents, withholding information from investigations', count: 'Multiple defendants' },
    { statute: '18 U.S.C. § 1621 — Perjury', description: 'Lying under oath about involvement and knowledge', count: 'Multiple defendants' },
    { statute: 'ICJ Ruling — Violation of International Law', description: 'Mining harbors, supporting paramilitary operations against sovereign nation', count: 'US found guilty — refused to comply' },
    { statute: '21 U.S.C. § 841 — Drug Trafficking (Contra networks)', description: 'CIA-connected networks imported cocaine into US', count: 'Documented but never prosecuted at policy level' },
  ],
  sources: [
    { title: 'Report of the Congressional Committees Investigating the Iran-Contra Affair', url: 'https://archive.org/details/reportofcongress87unit', date: '1987' },
    { title: 'Lawrence Walsh Final Report — Independent Counsel for Iran/Contra Matters', url: 'https://irp.fas.org/offdocs/walsh/', date: '1993' },
    { title: 'Tower Commission Report', url: 'https://archive.org/details/towercommissionr00unit', date: '1987' },
    { title: 'ICJ: Nicaragua v. United States', url: 'https://www.icj-cij.org/case/70', date: '1986' },
    { title: 'National Security Archive: Iran-Contra at 30', url: 'https://nsarchive.gwu.edu/briefing-book/iran/2016-11-25/iran-contra-affair-30-years-later', date: '2016' },
    { title: 'CIA Inspector General Report on Contra Drug Links', url: 'https://www.cia.gov/readingroom/collection/cia-inspector-general-report-investigations', date: '1998' },
    { title: 'Gary Webb: Dark Alliance — CIA, Contras, and Crack Cocaine', url: 'https://www.penguinrandomhouse.com/books/163468/dark-alliance-by-gary-webb/', date: '1999' },
    { title: 'Understanding the Iran-Contra Affairs — Brown University', url: 'https://www.brown.edu/Research/Understanding_the_Iran_Contra_Affair/', date: 'Educational' },
  ],
};

export default function IranContraPage() {
  return (
    <div className="min-h-screen pt-20 lg:pt-24 pb-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <Link href="/investigations" className="inline-flex items-center gap-2 text-zinc-400 hover:text-blood-500 transition-colors mb-6 pt-4">
          <ArrowLeft className="w-4 h-4" />
          Back to Investigations
        </Link>

        {/* Header */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="border-2 border-blood-800/60 bg-black/80 p-6 lg:p-8 mb-8">
          <div className="flex items-center gap-3 mb-4">
            <span className="px-3 py-1 text-xs font-bold uppercase border border-red-500/30 bg-red-500/20 text-red-400">{investigation.severity}</span>
            <span className="px-3 py-1 text-xs font-bold uppercase border border-zinc-500/30 bg-zinc-500/20 text-zinc-400">{investigation.status}</span>
          </div>
          <h1 className="text-3xl lg:text-4xl font-black text-white uppercase tracking-wider mb-2">
            <GlitchText text={investigation.title} />
          </h1>
          <p className="text-lg text-blood-500 font-bold mb-4">{investigation.subtitle}</p>
          <p className="text-zinc-400 leading-relaxed">{investigation.summary}</p>
        </motion.div>

        {/* Scale */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="border-2 border-red-800/60 bg-red-950/20 p-6 mb-8">
          <h2 className="text-xl font-bold text-white uppercase tracking-wider mb-4 flex items-center gap-2">
            <Crosshair className="w-5 h-5 text-red-500" />
            The Numbers
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {Object.entries(investigation.scale).map(([key, val]) => (
              <div key={key} className="text-center p-4 border border-red-500/30 bg-red-950/30">
                <p className="text-2xl font-black text-red-500">{val}</p>
                <p className="text-xs text-zinc-400 capitalize">{key.replace(/([A-Z])/g, ' $1').trim()}</p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* The Scheme */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.15 }} className="glass-card p-6 mb-8 border-l-4 border-blood-600">
          <h2 className="text-xl font-bold text-white uppercase tracking-wider mb-4">The Scheme</h2>
          <div className="space-y-4">
            {investigation.theScheme.map((phase, idx) => (
              <div key={idx} className="p-4 bg-zinc-900/50 border border-zinc-800">
                <p className="font-bold text-blood-400 text-sm">{phase.phase}</p>
                <p className="text-sm text-zinc-300 mt-2">{phase.description}</p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Boland Amendment */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.18 }} className="glass-card p-6 mb-8">
          <h2 className="text-xl font-bold text-white uppercase tracking-wider mb-4 flex items-center gap-2">
            <FileText className="w-5 h-5 text-blood-500" />
            The Law They Broke: Boland Amendment
          </h2>
          <blockquote className="p-4 bg-zinc-900/50 border-l-4 border-blood-600 text-sm text-zinc-300 italic mb-4">
            {investigation.bolandAmendment.text}
          </blockquote>
          <p className="text-xs text-zinc-400">{investigation.bolandAmendment.passage}</p>
          <p className="text-sm text-red-400 mt-2">{investigation.bolandAmendment.violation}</p>
        </motion.div>

        {/* ICJ Ruling */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="border-2 border-red-800/60 bg-red-950/20 p-6 mb-8">
          <h2 className="text-xl font-bold text-white uppercase tracking-wider mb-4 flex items-center gap-2">
            <Scale className="w-5 h-5 text-red-500" />
            International Court of Justice Ruling
          </h2>
          <div className="space-y-3">
            <p className="text-sm text-zinc-400">Case: <span className="text-white font-bold">{investigation.icjRuling.case}</span></p>
            <p className="text-sm text-zinc-400">Court: <span className="text-white">{investigation.icjRuling.court}</span></p>
            <p className="text-sm text-red-400 font-bold">{investigation.icjRuling.ruling}</p>
            <p className="text-sm text-zinc-500 italic">{investigation.icjRuling.usResponse}</p>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-8">
            {/* Contra Crimes */}
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.25 }} className="glass-card p-6">
              <h2 className="text-xl font-bold text-white uppercase tracking-wider mb-4 flex items-center gap-2">
                <AlertTriangle className="w-5 h-5 text-blood-500" />
                What the Contras Did With US Money
              </h2>
              <div className="space-y-4">
                {investigation.contraCrimes.map((crime, idx) => (
                  <div key={idx} className="p-4 bg-red-950/20 border border-red-500/30">
                    <p className="font-bold text-red-400 text-sm">{crime.crime}</p>
                    <p className="text-sm text-zinc-300 mt-2">{crime.description}</p>
                    <p className="text-xs text-red-500 font-bold mt-2">{crime.toll}</p>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Key Figures */}
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }} className="glass-card p-6">
              <h2 className="text-xl font-bold text-white uppercase tracking-wider mb-4 flex items-center gap-2">
                <Users className="w-5 h-5 text-blood-500" />
                Key Figures
              </h2>
              <div className="space-y-3">
                {investigation.keyFigures.map((figure, idx) => (
                  <div key={idx} className="flex items-start justify-between p-3 bg-zinc-900/50 border border-zinc-800">
                    <div className="flex-1">
                      {figure.href ? (
                        <Link href={figure.href} className="font-bold text-blood-400 hover:text-blood-300 transition-colors">{figure.name}</Link>
                      ) : (
                        <span className="font-bold text-white">{figure.name}</span>
                      )}
                      <p className="text-sm text-zinc-400 mt-1">{figure.role}</p>
                    </div>
                    <span className="text-xs px-2 py-1 bg-zinc-800 text-zinc-400 border border-zinc-700 whitespace-nowrap ml-2">{figure.status}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Charges */}
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.35 }} className="glass-card p-6">
              <h2 className="text-xl font-bold text-white uppercase tracking-wider mb-4 flex items-center gap-2">
                <Scale className="w-5 h-5 text-blood-500" />
                Criminal Charges &amp; Violations
              </h2>
              <div className="space-y-3">
                {investigation.charges.map((charge, idx) => (
                  <div key={idx} className="p-4 bg-zinc-900/50 border border-zinc-800">
                    <p className="font-bold text-blood-400 text-sm font-mono">{charge.statute}</p>
                    <p className="text-sm text-zinc-300 mt-1">{charge.description}</p>
                    <p className="text-xs text-red-400 mt-1">{charge.count}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Timeline */}
            <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} className="glass-card p-6">
              <h3 className="text-lg font-bold text-white uppercase tracking-wider mb-4 flex items-center gap-2">
                <Calendar className="w-4 h-4 text-blood-500" />
                Timeline
              </h3>
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

            {/* Legal Outcomes */}
            <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.1 }} className="glass-card p-6">
              <h3 className="text-lg font-bold text-white uppercase tracking-wider mb-4 flex items-center gap-2">
                <Scale className="w-5 h-5 text-blood-500" />
                Legal Outcomes
              </h3>
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

            {/* Sources */}
            <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.2 }} className="glass-card p-6">
              <h3 className="text-lg font-bold text-white uppercase tracking-wider mb-4">Sources</h3>
              <div className="space-y-2">
                {investigation.sources.map((source, idx) => (
                  <a key={idx} href={source.url} target="_blank" rel="noopener noreferrer" className="flex items-start gap-2 p-2 text-sm text-zinc-400 hover:text-blood-400 hover:bg-zinc-900/50 transition-colors">
                    <ExternalLink className="w-4 h-4 mt-0.5 flex-shrink-0" />
                    <div>
                      <span>{source.title}</span>
                      <span className="text-zinc-600 ml-2">({source.date})</span>
                    </div>
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
