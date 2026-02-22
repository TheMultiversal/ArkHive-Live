'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowLeft, AlertTriangle, Users, Calendar, FileText, ExternalLink, Scale, ShieldAlert, Skull } from 'lucide-react';
import GlitchText from '@/components/effects/GlitchText';

const investigation = {
  title: 'Waco Siege',
  subtitle: 'ATF, FBI, and the Branch Davidians: 76 Dead Including 25 Children, CS Gas, and the Question of Who Started the Fire',
  severity: 'critical',
  status: 'INVESTIGATIONS CLOSED',
  summary: 'The Waco siege began on February 28, 1993, when the Bureau of Alcohol, Tobacco, and Firearms (ATF) raided the Branch Davidian compound near Waco, Texas, ostensibly to execute a search warrant for illegal weapons. The initial raid resulted in a gun battle that killed 4 ATF agents and 6 Branch Davidians. A 51-day standoff followed, managed by the FBI. On April 19, 1993, the FBI launched a CS gas assault using modified M60 tanks, and the compound erupted in fire. 76 people died, including 25 children and group leader David Koresh. The government claimed the Davidians set the fire, but infrared footage, survivor testimony, and independent analyses have raised serious questions. The decision to use CS gas — a chemical weapon banned in warfare — against a building containing children remains one of the most controversial law enforcement actions in American history.',
  keyFigures: [
    { name: 'David Koresh', role: 'Branch Davidian leader; killed in the fire on April 19, 1993', href: '/entities/individuals/david-koresh', status: 'Deceased — April 19, 1993' },
    { name: 'Janet Reno', role: 'Attorney General who approved the CS gas assault; later said it was her biggest regret', href: '/entities/individuals/janet-reno', status: 'Deceased 2016' },
    { name: 'Jeff Jamar', role: 'FBI Special Agent in Charge who commanded the siege operations', href: '/entities/individuals/jeff-jamar', status: 'Retired' },
    { name: 'Byron Sage', role: 'FBI lead negotiator who communicated with Koresh during the 51-day standoff', href: '/entities/individuals/byron-sage', status: 'Retired' },
    { name: 'Richard Rogers', role: 'FBI Hostage Rescue Team commander who directed the final assault', href: '/entities/individuals/richard-rogers', status: 'Retired' },
    { name: 'Charles Schumer', role: 'Congressman who chaired hearings and defended government actions', href: '/entities/individuals/charles-schumer', status: 'US Senator' },
    { name: 'Dick DeGuerin', role: 'Attorney who entered the compound and negotiated with Koresh during the standoff', href: '/entities/individuals/dick-deguerin', status: 'Active' },
    { name: 'Ruth Riddle', role: 'Branch Davidian survivor who escaped the fire with Koresh\'s manuscript', href: '/entities/individuals/ruth-riddle', status: 'Survivor' },
    { name: 'David Thibodeau', role: 'Branch Davidian survivor who wrote account of life inside the compound', href: '/entities/individuals/david-thibodeau', status: 'Survivor — Author' },
    { name: 'John Danforth', role: 'Former Senator appointed as special counsel to investigate; cleared government of wrongdoing', href: '/entities/individuals/john-danforth', status: 'Retired' },
    { name: 'Bill Buford', role: 'ATF Special Agent in Charge of the initial raid; wounded in the February 28 gun battle', href: '/entities/individuals/bill-buford', status: 'Retired' },
  ],
  timeline: [
    { date: '1992-05-01', event: 'ATF begins investigation of Branch Davidians for illegal weapons and explosives' },
    { date: '1993-02-28', event: 'ATF raids Branch Davidian compound; gun battle erupts — 4 ATF agents and 6 Davidians killed' },
    { date: '1993-02-28', event: 'Standoff begins; FBI takes over from ATF after the failed raid' },
    { date: '1993-03-01', event: 'FBI begins negotiations; Koresh agrees to surrender but later reneges' },
    { date: '1993-03-02', event: 'FBI establishes headquarters at Texas State Technical College nearby' },
    { date: '1993-03-12', event: 'FBI begins psychological warfare: bright lights, loud music, and sounds of rabbits being slaughtered played 24/7' },
    { date: '1993-03-21', event: '35 people exit the compound including 21 children; 85 remain inside' },
    { date: '1993-04-01', event: 'Attorney Dick DeGuerin enters compound; Koresh working on manuscript of Seven Seals interpretation' },
    { date: '1993-04-12', event: 'AG Janet Reno briefed on plan to use CS gas; approves the assault' },
    { date: '1993-04-14', event: 'Reno told (incorrectly, per later investigation) that children are being abused, prompting approval' },
    { date: '1993-04-19', event: '6:00 AM — FBI begins CS gas insertion using modified M60 combat engineering vehicles' },
    { date: '1993-04-19', event: 'Tanks punch holes in compound walls; CS gas pumped in for 6 hours' },
    { date: '1993-04-19', event: '12:07 PM — Fire erupts in multiple locations; compound engulfed in minutes' },
    { date: '1993-04-19', event: '76 Branch Davidians die in the fire, including 25 children and David Koresh' },
    { date: '1993-08-01', event: 'FBI insists Davidians started the fire; survivors deny this' },
    { date: '1994-02-01', event: 'Eleven surviving Davidians tried; 4 convicted of manslaughter, others acquitted' },
    { date: '1999-08-25', event: 'FBI admits it used pyrotechnic tear gas rounds — contradicting 6 years of denials' },
    { date: '1999-09-01', event: 'FLIR (infrared) footage analysis suggests possible gunfire from FBI positions during the fire' },
    { date: '2000-07-21', event: 'Danforth Report clears government; attributes fire to Davidians; critics dispute methodology' },
  ],
  legalOutcomes: [
    { defendant: 'Surviving Branch Davidians (11)', charge: 'Murder of federal agents and conspiracy', outcome: '4 convicted of manslaughter; others acquitted; judge enhanced sentences controversially' },
    { defendant: 'Federal Government', charge: 'Wrongful death civil lawsuit by survivors', outcome: 'Jury found government not liable; appeals denied' },
    { defendant: 'FBI', charge: 'Use of pyrotechnic tear gas rounds', outcome: 'Admitted in 1999 after 6 years of denial; Danforth cleared FBI' },
    { defendant: 'ATF', charge: 'Botched initial raid and failure to arrest Koresh off-premises', outcome: 'Internal review; several agents disciplined; no criminal charges' },
    { defendant: 'Janet Reno', charge: 'Authorization of CS gas assault on compound with children', outcome: 'No charges; publicly stated it was her biggest regret' },
    { defendant: 'Richard Rogers (HRT)', charge: 'Direction of final assault operations', outcome: 'No charges; previously involved in Ruby Ridge' },
    { defendant: 'John Danforth (Special Counsel)', charge: 'Investigation of government actions', outcome: 'Cleared government of wrongdoing in 2000 report' },
    { defendant: 'CS Gas decision-makers', charge: 'Use of chemical weapon banned in warfare against building with children', outcome: 'No accountability — CS gas banned under Chemical Weapons Convention' },
  ],
  charges: [
    { statute: '18 U.S.C. § 1111 — Murder of Federal Officers', description: 'Killing of 4 ATF agents during the initial February 28 raid', count: '4 counts — against surviving Davidians' },
    { statute: '18 U.S.C. § 924(c) — Use of Firearms During Crime of Violence', description: 'Firearms possession and use during the confrontation with federal agents', count: 'Multiple counts against survivors' },
    { statute: '18 U.S.C. § 242 — Deprivation of Rights Under Color of Law', description: 'Use of CS gas (banned in warfare) against civilians including 25 children', count: 'Never charged — applicable to federal agents' },
    { statute: '18 U.S.C. § 1001 — False Statements', description: 'FBI denied for 6 years the use of pyrotechnic tear gas rounds at Waco', count: 'Admitted 1999 — no charges filed' },
    { statute: 'Chemical Weapons Convention Violation', description: 'CS gas is prohibited in warfare under the CWC; used against American civilians including children', count: 'April 19, 1993 assault' },
    { statute: '18 U.S.C. § 1519 — Destruction/Falsification of Records', description: 'Allegations of missing and altered evidence including FLIR footage and audio recordings', count: 'Disputed — Danforth investigation' },
    { statute: '42 U.S.C. § 1983 — Civil Rights Violation', description: 'Excessive use of force resulting in 76 deaths including 25 children', count: 'Civil suit filed — government not found liable' },
    { statute: '18 U.S.C. § 2332a — Use of Weapons of Mass Destruction', description: 'CS gas delivery system using modified military vehicles against civilian structure', count: 'Theoretical charge — never applied' },
  ],
  coverup: [
    'The FBI denied for six years that pyrotechnic tear gas rounds were used at Waco, finally admitting it in 1999 when evidence became undeniable',
    'ATF could have arrested David Koresh during his regular trips to town but chose a dramatic televised raid to justify their budget requests',
    'The decision to use CS gas — a chemical weapon banned in international warfare — against a building known to contain 25 children was never adequately explained',
    'FLIR (infrared) footage from the day of the fire appears to show gunfire from FBI positions, but the Danforth investigation dismissed this evidence',
    'FBI negotiators and tactical teams operated at cross-purposes: negotiators made progress while HRT escalated pressure, undermining surrender efforts',
    'Janet Reno approved the assault partly based on claims of child abuse inside the compound — claims later found to be unsubstantiated for that time period',
    'Evidence handling at the crime scene was compromised; the compound was bulldozed before independent investigators could examine it thoroughly',
    'The government\'s claim that Davidians started the fire has been disputed by survivor testimony and independent fire investigation experts',
    'Surviving Davidians received enhanced sentences using a provision rarely applied, with the sentencing judge later expressing regret',
  ],
  sources: [
    { title: 'Danforth Report — Final Report to the Deputy Attorney General', url: 'https://www.justice.gov/archives/publications/waco/report-deputy-attorney-general-events-waco-texas', date: '2000-07-21' },
    { title: 'Treasury Department Report on ATF Raid', url: 'https://www.treasury.gov/press/releases/reports/atf.pdf', date: '1993-09-01' },
    { title: 'Waco: The Rules of Engagement — Documentary', url: 'https://www.pbs.org/wgbh/pages/frontline/waco/', date: '1997-10-01' },
    { title: 'FBI Admits Using Pyrotechnic Tear Gas at Waco', url: 'https://www.nytimes.com/1999/08/26/us/fbi-admits-tear-gas-was-used-at-waco.html', date: '1999-08-26' },
    { title: 'Waco Siege — FBI Vault Records', url: 'https://vault.fbi.gov/waco-branch-davidian-compound', date: '2023-01-01' },
    { title: 'The Waco Siege: 25 Years Later', url: 'https://www.washingtonpost.com/news/retropolis/wp/2018/04/19/the-waco-siege-25-years-later/', date: '2018-04-19' },
    { title: 'Janet Reno\'s Biggest Regret: The 1993 Waco Siege', url: 'https://www.bbc.com/news/world-us-canada-37870226', date: '2016-11-07' },
    { title: 'Congressional Hearings on Waco — C-SPAN Archive', url: 'https://www.c-span.org/video/?66349-1/waco-investigation', date: '1995-07-19' },
  ],
};

export default function WacoSiegePage() {
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
