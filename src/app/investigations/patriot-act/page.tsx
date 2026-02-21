'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowLeft, AlertTriangle, Users, Calendar, FileText, ExternalLink, Scale, ShieldAlert, Skull } from 'lucide-react';
import GlitchText from '@/components/effects/GlitchText';

const investigation = {
  title: 'The PATRIOT Act',
  subtitle: 'How America Traded Liberty for Security Theater — And Never Got Either Back',
  severity: 'critical',
  status: 'ACTIVE — PARTIALLY REAUTHORIZED',
  summary: 'Signed into law just 45 days after September 11, 2001, the USA PATRIOT Act (Uniting and Strengthening America by Providing Appropriate Tools Required to Intercept and Obstruct Terrorism Act) represented the most dramatic expansion of government surveillance power in American history. The 342-page bill was passed with almost no debate — most members of Congress admitted they never read it. Section 215 authorized bulk collection of phone records for every American. National Security Letters allowed the FBI to demand personal records without judicial oversight. Sneak-and-peek warrants let agents search homes without notifying targets. The law was used overwhelmingly not against terrorists but against ordinary Americans: of 11,129 sneak-and-peek warrants issued from 2006-2009, only 51 were terrorism-related. Muslim communities were subjected to systematic surveillance, mosque infiltration, and entrapment operations. The FBI manufactured terrorism cases against vulnerable individuals — often mentally ill or economically desperate people — while actual threats went undetected. The NSA\'s mass surveillance programs, revealed by Edward Snowden in 2013, showed the PATRIOT Act had been secretly interpreted to justify the collection of virtually all digital communications. Twenty-four years later, key provisions remain in force, and the surveillance infrastructure has only expanded.',
  keyFigures: [
    { name: 'George W. Bush', role: 'President — Signed PATRIOT Act into law October 26, 2001; authorized warrantless wiretapping program', href: '/entities/individuals/george-w-bush', status: 'Left Office' },
    { name: 'Dick Cheney', role: 'Vice President — Architect of post-9/11 surveillance state; pushed for expanded executive power', href: '/entities/individuals/dick-cheney', status: 'Left Office' },
    { name: 'John Ashcroft', role: 'Attorney General — Implemented PATRIOT Act; authorized mass detention of Muslim immigrants after 9/11', href: '/entities/individuals/john-ashcroft', status: 'Left Office' },
    { name: 'Robert Mueller', role: 'FBI Director — Oversaw FBI\'s use of National Security Letters and mosque surveillance programs', href: '/entities/individuals/robert-mueller', status: 'Left Office' },
    { name: 'James Clapper', role: 'Director of National Intelligence — Lied under oath to Congress about NSA bulk data collection', href: '/entities/individuals/james-clapper', status: 'No Charges' },
    { name: 'Michael Hayden', role: 'NSA Director / CIA Director — Implemented warrantless wiretapping program (Stellar Wind)', href: '/entities/individuals/michael-hayden', status: 'Left Office' },
    { name: 'Edward Snowden', role: 'NSA Contractor / Whistleblower — Exposed mass surveillance programs in 2013', href: '/entities/individuals/edward-snowden', status: 'Exiled (Russia)' },
    { name: 'John Yoo', role: 'OLC Attorney — Authored legal memos justifying warrantless surveillance and expanded executive power', href: '/entities/individuals/john-yoo', status: 'UC Berkeley Professor' },
    { name: 'Jay Bybee', role: 'OLC Head — Signed off on surveillance and torture memos; appointed to federal bench', href: '/entities/individuals/jay-bybee', status: 'Federal Judge' },
    { name: 'Barack Obama', role: 'President — Renewed PATRIOT Act provisions; expanded drone program and surveillance capabilities', href: '/entities/individuals/barack-obama', status: 'Left Office' },
    { name: 'Jeff Sessions', role: 'Senator/AG — Championed PATRIOT Act reauthorization; expanded immigration enforcement surveillance', href: '/entities/individuals/jeff-sessions', status: 'Left Office' },
    { name: 'James Comey', role: 'FBI Director — Expanded use of National Security Letters; pushed for encryption backdoors', href: '/entities/individuals/james-comey', status: 'Fired 2017' },
    { name: 'John Brennan', role: 'CIA Director — Oversaw expanded surveillance and drone targeting programs under Obama', href: '/entities/individuals/john-brennan', status: 'Left Office' },
    { name: 'Bill Barr', role: 'Attorney General — Pushed for reauthorization of FISA surveillance powers under Trump', href: '/entities/individuals/bill-barr', status: 'Left Office' },
  ],
  timeline: [
    { date: '2001-09-11', event: 'Al-Qaeda attacks kill 2,977 people; Bush administration begins drafting sweeping surveillance legislation within hours' },
    { date: '2001-10-26', event: 'USA PATRIOT Act signed into law — 342 pages passed with minimal debate; Senate vote 98-1 (Russ Feingold sole dissenter)' },
    { date: '2001-11', event: 'DOJ rounds up 1,200+ Muslim and Arab immigrants for detention; none are ever charged with terrorism' },
    { date: '2002-01', event: 'Bush secretly authorizes NSA warrantless wiretapping program (Stellar Wind) — bypassing FISA courts entirely' },
    { date: '2002-11', event: 'Total Information Awareness program launched under DARPA to create massive domestic surveillance database; later defunded after public outcry' },
    { date: '2003', event: 'FBI begins issuing tens of thousands of National Security Letters per year — recipients forbidden from disclosing they received them under gag orders' },
    { date: '2004', event: 'FBI inspector general reports widespread abuse of National Security Letters; finds agents routinely violated legal requirements' },
    { date: '2005-12', event: 'New York Times reveals Bush\'s warrantless wiretapping program after holding story for over a year at White House request' },
    { date: '2006', event: 'USA Today reveals NSA collecting phone records of tens of millions of Americans from AT&T, Verizon, and BellSouth' },
    { date: '2007', event: 'Protect America Act further expands warrantless surveillance; retroactive immunity granted to telecom companies that helped NSA' },
    { date: '2008', event: 'FISA Amendments Act of 2008 legalizes broad warrantless surveillance; Senator Obama votes for it after pledging to filibuster' },
    { date: '2011-05', event: 'Obama signs four-year PATRIOT Act extension — provisions renewed without any reform' },
    { date: '2013-06-05', event: 'Edward Snowden reveals NSA PRISM program — direct access to servers of Google, Apple, Facebook, Microsoft, and other tech giants' },
    { date: '2013-06-06', event: 'Snowden reveals bulk phone metadata collection under Section 215 — every American\'s call records collected and stored' },
    { date: '2013-03-12', event: 'James Clapper testifies under oath to Senate that NSA does "not wittingly" collect data on millions of Americans — proven false by Snowden' },
    { date: '2015-06', event: 'USA FREEDOM Act passes — modestly reforms Section 215 but leaves most surveillance infrastructure intact' },
    { date: '2017', event: 'Section 702 of FISA reauthorized with minimal reforms; FBI continues "backdoor searches" of Americans\' communications' },
    { date: '2020-03', event: 'Key PATRIOT Act provisions expire briefly; reauthorized with minor modifications amid COVID pandemic distraction' },
    { date: '2023', event: 'Section 702 reauthorized again; FISA court reveals FBI conducted 278,000 warrantless searches of Americans\' data in single year' },
  ],
  legalOutcomes: [
    { defendant: 'James Clapper', charge: 'Perjury (lying to Congress about NSA surveillance)', outcome: 'No charges filed — Obama administration declined to prosecute despite clear false testimony under oath' },
    { defendant: 'Edward Snowden', charge: 'Espionage Act violations (whistleblowing)', outcome: 'Charged with theft of government property and two counts under Espionage Act; fled to Russia; pardoned by Biden in 2025' },
    { defendant: 'AT&T, Verizon, et al.', charge: 'Illegal wiretapping / privacy violations', outcome: 'Congress granted retroactive immunity in 2008 FISA Amendments Act — all lawsuits dismissed' },
    { defendant: 'Thomas Drake (NSA Whistleblower)', charge: 'Espionage Act violations', outcome: 'Charged with 10 felonies for reporting NSA waste and abuse; all charges eventually dropped to misdemeanor' },
    { defendant: 'FBI (Institutional)', charge: 'National Security Letter abuse', outcome: 'Inspector General found systematic abuse; no individuals disciplined or charged' },
    { defendant: 'NYPD Intelligence Division', charge: 'Unconstitutional surveillance of Muslim communities', outcome: 'Handschu settlement modified; surveillance guidelines reformed after AP investigation; no officers disciplined' },
    { defendant: 'Various FBI Entrapment Targets', charge: 'Material Support for Terrorism', outcome: '700+ prosecution cases post-9/11; Human Rights Watch found majority involved FBI informants who initiated plots' },
    { defendant: 'John Yoo / Jay Bybee', charge: 'Professional misconduct for surveillance/torture memos', outcome: 'OPR found "poor judgment" but not professional misconduct; Bybee remains federal judge; Yoo remains law professor' },
  ],
  charges: [
    { statute: '18 U.S.C. § 1621', description: 'Perjury — James Clapper knowingly lied under oath to Congress about the scope of NSA surveillance', count: 'At least 1 count — never prosecuted' },
    { statute: '18 U.S.C. § 2511', description: 'Illegal Wiretapping — Warrantless interception of domestic communications without FISA court authorization', count: 'Millions of violations — retroactive immunity granted' },
    { statute: 'Fourth Amendment', description: 'Unreasonable Search and Seizure — Bulk collection of phone records, emails, and internet activity of all Americans without probable cause', count: 'Constitutional violation — ongoing' },
    { statute: 'First Amendment', description: 'Chilling Effect on Free Speech — Surveillance of journalists, mosques, political organizations, and protest groups', count: 'Systematic violation across agencies' },
    { statute: '18 U.S.C. § 241', description: 'Conspiracy Against Rights — Coordinated programs targeting Muslim communities based on religion and ethnicity', count: 'Multiple programs (NYPD Demographics Unit, FBI mosque surveillance)' },
    { statute: '50 U.S.C. § 1809', description: 'Criminal FISA Violations — Conducting electronic surveillance not authorized by statute', count: 'Thousands of violations documented by FISA court' },
    { statute: '18 U.S.C. § 1001', description: 'False Statements — FBI agents making false representations to obtain National Security Letters and FISA warrants', count: 'Hundreds of documented instances per IG reports' },
    { statute: '42 U.S.C. § 1983', description: 'Deprivation of Civil Rights Under Color of Law — Government officials using PATRIOT Act powers to violate constitutional rights', count: 'Systematic — class action suits filed nationwide' },
  ],
  coverup: [
    'The 342-page PATRIOT Act was introduced and passed in just 45 days. Representative John Conyers later admitted: "We don\'t really read most of the bills. Do you know what that would entail if we read every bill that we passed?"',
    'The Bush administration secretly authorized the Stellar Wind warrantless wiretapping program, bypassing the FISA courts entirely. When the New York Times discovered the program in 2004, the White House convinced the paper to delay publication for over a year.',
    'James Clapper, Director of National Intelligence, testified under oath before the Senate in March 2013 that the NSA did "not wittingly" collect data on millions of Americans. Three months later, Edward Snowden proved this was a lie. Clapper was never prosecuted.',
    'The FBI issued over 300,000 National Security Letters between 2003 and 2006 alone. Each came with a gag order prohibiting recipients from ever disclosing they had been surveilled — effectively making the surveillance invisible.',
    'Of 11,129 sneak-and-peek warrants issued between 2006 and 2009 under the PATRIOT Act, only 51 (0.5%) were used for terrorism investigations. The vast majority were used for drug cases — the law was sold as counterterrorism but used for ordinary law enforcement.',
    'The NSA\'s PRISM program gave intelligence agencies direct access to the servers of Google, Microsoft, Apple, Facebook, Yahoo, and other tech companies. Companies initially denied participation; Snowden documents proved they were legally compelled and financially compensated.',
    'The FBI ran a systematic entrapment operation against Muslim communities. Informants — many paid over $100,000 — befriended vulnerable individuals, proposed terrorist plots, provided fake weapons, and then arrested their targets. A Human Rights Watch report found the FBI often targeted people with mental illness or intellectual disabilities.',
    'Congress granted retroactive legal immunity to AT&T, Verizon, and other telecom companies that illegally wiretapped Americans at the government\'s request — killing dozens of pending lawsuits and ensuring no company would ever be held accountable.',
  ],
  sources: [
    { title: 'ACLU: "Surveillance Under the USA PATRIOT Act"', url: 'https://www.aclu.org/issues/national-security/privacy-and-surveillance/surveillance-under-usapatriot-act', date: 'Ongoing' },
    { title: 'The Guardian: "NSA Files — Decoded" (Snowden revelations)', url: 'https://www.theguardian.com/world/interactive/2013/nov/01/snowden-nsa-files-surveillance-revelations-decoded', date: 'Nov 2013' },
    { title: 'Electronic Frontier Foundation: "NSA Spying"', url: 'https://www.eff.org/nsa-spying', date: 'Ongoing' },
    { title: 'Human Rights Watch: "Illusion of Justice — FBI Entrapment of Muslims"', url: 'https://www.hrw.org/report/2014/07/21/illusion-justice/human-rights-abuses-us-terrorism-prosecutions', date: 'Jul 2014' },
    { title: 'Associated Press: "NYPD Intelligence Division Muslim Surveillance"', url: 'https://www.ap.org/nypd-intelligence-operations', date: '2011-2012' },
    { title: 'DOJ Inspector General: Report on FBI Use of National Security Letters', url: 'https://oig.justice.gov/reports/2007/nsl/nsl-report.htm', date: 'Mar 2007' },
    { title: 'The New York Times: "Bush Lets U.S. Spy on Callers Without Courts"', url: 'https://www.nytimes.com/2005/12/16/politics/bush-lets-us-spy-on-callers-without-courts.html', date: 'Dec 2005' },
    { title: 'Brennan Center for Justice: "Why Has the PATRIOT Act Not Been Reformed?"', url: 'https://www.brennancenter.org/issues/protect-liberty-security/privacy-free-expression/patriot-act', date: 'Ongoing' },
    { title: 'ProPublica: "The FBI\'s Manufactured War on Terror"', url: 'https://www.propublica.org/series/the-fbis-manufactured-war-on-terror', date: '2011-2021' },
    { title: 'FISA Court Opinions (Declassified) on Bulk Collection', url: 'https://www.intelligence.gov/ic-on-the-record/fisa-transparency', date: '2013-2023' },
  ],
};

export default function PatriotActPage() {
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
