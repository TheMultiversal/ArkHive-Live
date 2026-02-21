'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowLeft, AlertTriangle, Users, Calendar, FileText, ExternalLink, Scale, ShieldAlert, Skull } from 'lucide-react';
import GlitchText from '@/components/effects/GlitchText';

const investigation = {
  title: 'CIA Torture Program',
  subtitle: 'Enhanced Interrogation, Black Sites, and the Systematic Brutalization of Human Beings in America\'s Name',
  severity: 'critical',
  status: 'EXPOSED — ZERO ACCOUNTABILITY',
  summary: 'Following the September 11 attacks, the CIA established a global network of secret "black site" prisons where detainees were subjected to torture techniques euphemistically called "enhanced interrogation." The program — authorized at the highest levels of the Bush administration and given legal cover by Justice Department lawyers — included waterboarding (simulated drowning), rectal feeding and rectal rehydration (sexual assault), prolonged sleep deprivation up to 180 hours, confinement in coffin-sized boxes, ice water baths, stress positions, mock executions, and wall slamming ("walling"). At least 119 detainees were held in the program. At least one, Gul Rahman, was tortured to death — chained to a cold concrete floor in a freezing cell, found dead of hypothermia. The 2014 Senate Intelligence Committee Torture Report — based on 6.3 million CIA documents — concluded the program was far more brutal than disclosed, produced no actionable intelligence that couldn\'t have been obtained through legal means, and that the CIA systematically lied to Congress, the White House, and the public about its effectiveness. When the Senate began investigating, the CIA hacked the Committee\'s computers. When evidence existed on videotape, CIA officer Jose Rodriguez ordered the destruction of 92 interrogation recordings. No CIA officer, no Bush administration official, and no Justice Department lawyer has ever been prosecuted. The only person imprisoned in connection with the torture program was John Kiriakou — the CIA whistleblower who revealed it to the public.',
  keyFigures: [
    { name: 'Dick Cheney', role: 'Vice President and primary political architect of the torture program; personally advocated for waterboarding and other techniques; has publicly defended the program as "absolutely, totally justified"', href: '/entities/individuals/dick-cheney', status: 'No accountability' },
    { name: 'George W. Bush', role: 'President who authorized the CIA detention and interrogation program through secret presidential findings and executive orders', href: '/entities/individuals/george-w-bush', status: 'No accountability' },
    { name: 'John Yoo', role: 'DOJ Office of Legal Counsel attorney who authored the "Torture Memos" providing legal justification for waterboarding, stress positions, and other techniques by redefining torture', href: '/entities/individuals/john-yoo', status: 'No accountability — UC Berkeley professor' },
    { name: 'Jay Bybee', role: 'Assistant Attorney General who signed the Torture Memos authorizing enhanced interrogation — now a federal appellate judge', href: '/entities/individuals/jay-bybee', status: 'Active — Federal judge' },
    { name: 'Alberto Gonzales', role: 'White House Counsel who called the Geneva Conventions "quaint" and "obsolete"; later Attorney General who helped authorize the program', href: '/entities/individuals/alberto-gonzales', status: 'No accountability' },
    { name: 'Gina Haspel', role: 'CIA officer who ran the Thailand black site where Abu Zubaydah was waterboarded 83 times; later drafted the order to destroy 92 interrogation videotapes; promoted to CIA Director by Trump', href: '/entities/individuals/gina-haspel', status: 'Promoted — Former CIA Director' },
    { name: 'James Mitchell', role: 'Psychologist with no interrogation experience who designed the CIA torture program based on Air Force SERE training; his company was paid $81 million by the CIA', href: '/entities/individuals/james-mitchell', status: 'No accountability — Paid $81M' },
    { name: 'Bruce Jessen', role: 'Psychologist who co-designed the torture program with Mitchell; neither had any experience in interrogation, counterterrorism, or al-Qaeda', href: '/entities/individuals/bruce-jessen', status: 'No accountability — Paid $81M' },
    { name: 'George Tenet', role: 'CIA Director who approved the enhanced interrogation program and oversaw its implementation; personally briefed on techniques including waterboarding', href: '/entities/individuals/george-tenet', status: 'Medal of Freedom recipient' },
    { name: 'Jose Rodriguez', role: 'CIA Counterterrorism Center Director who ordered the destruction of 92 videotapes showing the waterboarding of Abu Zubaydah and Abd al-Rahim al-Nashiri — obstruction of justice never prosecuted', href: '/entities/individuals/jose-rodriguez', status: 'No accountability' },
    { name: 'Abu Zubaydah', role: 'First high-value detainee tortured by CIA; waterboarded 83 times, confined in coffin-sized box, subjected to sleep deprivation — later determined not to be an al-Qaeda member or leader', href: '/entities/individuals/abu-zubaydah', status: 'Still detained at Guantánamo — never charged' },
    { name: 'Gul Rahman', role: 'Afghan detainee who died of hypothermia at the CIA\'s COBALT (Salt Pit) black site in Afghanistan after being stripped, chained to a cold floor, and left overnight in freezing temperatures', href: '/entities/individuals/gul-rahman', status: 'Tortured to death — November 2002' },
    { name: 'Dianne Feinstein', role: 'Senate Intelligence Committee Chair who oversaw the 6-year investigation producing the 6,700-page Torture Report — fought CIA attempts to obstruct and intimidate the investigation', href: '/entities/individuals/dianne-feinstein', status: 'Deceased (2023)' },
    { name: 'John Kiriakou', role: 'CIA officer who became the first to publicly confirm waterboarding; prosecuted and imprisoned for 30 months — the only person jailed in connection with the torture program, for revealing it', href: '/entities/individuals/john-kiriakou', status: 'Whistleblower — Served prison time' },
    { name: 'Donald Rumsfeld', role: 'Secretary of Defense who authorized torture techniques at Guantánamo Bay and Abu Ghraib; personally approved stress positions, hooding, 20-hour interrogations, and use of dogs', href: '/entities/individuals/donald-rumsfeld', status: 'Deceased (2021)' },
  ],
  timeline: [
    { date: '2001-09-17', event: 'President Bush signs secret finding authorizing the CIA to capture, detain, and interrogate suspected terrorists worldwide — the legal foundation for the black site program' },
    { date: '2002-02-07', event: 'Bush signs executive order declaring that the Geneva Conventions do not apply to al-Qaeda or Taliban detainees — removing legal protections against torture' },
    { date: '2002-03-28', event: 'Abu Zubaydah captured in Pakistan — the first "high-value detainee" in the CIA program. He is later waterboarded 83 times and confined in a coffin-sized box for over 11 days' },
    { date: '2002-04-01', event: 'CIA contracts psychologists James Mitchell and Bruce Jessen to design the "enhanced interrogation" program — based on Chinese Communist torture techniques used on Korean War POWs' },
    { date: '2002-08-01', event: 'John Yoo and Jay Bybee sign the "Torture Memos" — redefining torture to require pain "equivalent in intensity to organ failure, impairment of bodily function, or even death"' },
    { date: '2002-08-04', event: 'CIA begins waterboarding Abu Zubaydah at the Thailand black site — he is waterboarded 83 times over the following weeks. CIA cables describe him as "completely unresponsive, with bubbles rising through his open, full mouth"' },
    { date: '2002-11-20', event: 'Gul Rahman dies of hypothermia at the CIA\'s COBALT (Salt Pit) black site in Afghanistan — stripped naked from the waist down, chained to a cold concrete floor overnight in 36°F temperatures' },
    { date: '2003-03-01', event: 'Khalid Sheikh Mohammed captured and transferred to CIA custody; waterboarded 183 times over the following month. CIA claims he provided actionable intelligence — the Senate report found this was false' },
    { date: '2003-04-28', event: 'Photos from Abu Ghraib prison leak showing U.S. soldiers torturing, sexually humiliating, and abusing Iraqi detainees — Rumsfeld had authorized similar techniques' },
    { date: '2004-06-22', event: 'OLC withdraws the Bybee/Yoo torture memos under pressure — but issues new memos that effectively reauthorize the same techniques with different legal reasoning' },
    { date: '2005-11-02', event: 'Washington Post reveals existence of CIA "black sites" — secret prisons in Thailand, Poland, Romania, Lithuania, Afghanistan, and other countries where detainees are tortured' },
    { date: '2005-11-09', event: 'Jose Rodriguez orders the destruction of 92 videotapes showing the interrogation and waterboarding of Abu Zubaydah and Abd al-Rahim al-Nashiri — destroying critical evidence' },
    { date: '2006-09-06', event: 'Bush publicly acknowledges the CIA detention program for the first time, transfers 14 "high-value detainees" to Guantánamo Bay — claims the program "saved lives" while concealing its brutality' },
    { date: '2007-12-06', event: 'New York Times reveals the CIA destroyed interrogation videotapes — sparking congressional investigation into obstruction of evidence' },
    { date: '2009-01-22', event: 'President Obama signs executive orders banning torture, closing CIA black sites, and limiting interrogations to Army Field Manual techniques — but refuses to prosecute anyone involved' },
    { date: '2009-08-24', event: 'AG Eric Holder appoints prosecutor John Durham to review CIA interrogation abuses — investigation results in zero prosecutions despite documented deaths in custody' },
    { date: '2012-08-30', event: 'DOJ announces no charges will be filed in any CIA torture case — including the death of Gul Rahman. Eric Holder declares "the admissible evidence would not be sufficient to obtain and sustain a conviction"' },
    { date: '2013-03-11', event: 'CIA hacks Senate Intelligence Committee computers during the Torture Report investigation — CIA Director John Brennan initially denies it, then apologizes when the CIA Inspector General confirms it' },
    { date: '2014-12-09', event: 'Senate Intelligence Committee releases 525-page executive summary of the 6,700-page Torture Report — concluding the program was more brutal than disclosed and produced no unique intelligence' },
    { date: '2018-05-21', event: 'Gina Haspel — who ran the Thailand black site and helped destroy evidence — is confirmed as CIA Director by the Senate in a 54-45 vote' },
    { date: '2022-02-11', event: 'Drawings by Abu Zubaydah depicting his torture — waterboarding, confinement boxes, stress positions, nudity — are published by his attorneys, providing visual documentation of CIA brutality' },
  ],
  legalOutcomes: [
    { defendant: 'John Kiriakou (CIA Whistleblower)', charge: 'Revealing the identity of a covert CIA officer involved in the torture program — the only person imprisoned in connection with CIA torture', outcome: 'Convicted; sentenced to 30 months in federal prison. The torturer walked free; the whistleblower went to prison.' },
    { defendant: 'Jose Rodriguez', charge: 'Ordered the destruction of 92 videotapes showing waterboarding and torture — evidence destruction and obstruction of justice', outcome: 'DOJ declined to prosecute in 2010 despite documented evidence destruction' },
    { defendant: 'James Mitchell & Bruce Jessen', charge: 'Designed and implemented the CIA torture program; personally participated in torture sessions. Paid $81 million by the CIA.', outcome: 'Sued by ACLU on behalf of torture victims. Case settled in 2017 — terms undisclosed. No criminal charges ever filed.' },
    { defendant: 'CIA (Institutional)', charge: 'Senate Torture Report found CIA lied to Congress, White House, and public about the program\'s effectiveness and brutality', outcome: 'No institutional consequences. No officer prosecuted. CIA hacked the Senate computers investigating them — and no one was prosecuted for that either.' },
    { defendant: 'Gina Haspel', charge: 'Ran the Thailand black site where Zubaydah was waterboarded 83 times; helped draft the order to destroy videotape evidence', outcome: 'Never prosecuted; promoted to CIA Director in 2018' },
    { defendant: 'John Yoo / Jay Bybee', charge: 'Authored the legal memos authorizing torture — DOJ Office of Professional Responsibility found they committed "intentional professional misconduct"', outcome: 'OPR finding was overruled by DOJ political appointee David Margolis; no bar referral, no prosecution. Bybee is now a federal judge.' },
    { defendant: 'Gul Rahman Death', charge: 'CIA officer responsible for detainee who froze to death at COBALT black site — first and only CIA detainee death investigated', outcome: 'CIA officer received a $2,500 cash bonus. DOJ declined prosecution in 2012. No one was held accountable.' },
    { defendant: 'Abu Zubaydah', charge: 'Waterboarded 83 times, confined in coffin-sized box, subjected to extreme sleep deprivation — later determined not to be an al-Qaeda leader', outcome: 'Still detained at Guantánamo Bay without charge — 23 years and counting. The U.S. government will not charge or release him because a trial would expose the torture program.' },
    { defendant: 'European Complicity', charge: 'Poland, Romania, Lithuania, Thailand, and other nations hosted CIA black sites where torture occurred on their soil', outcome: 'European Court of Human Rights found Poland and Romania violated the European Convention on Human Rights; ordered compensation payments to victims' },
  ],
  charges: [
    { statute: '18 U.S.C. § 2340A — Torture', description: 'Waterboarding, rectal feeding, sleep deprivation up to 180 hours, confinement in coffin-sized boxes, ice water immersion, and mock executions — all constitute torture under federal and international law', count: 'At least 119 detainees subjected to enhanced interrogation; 39 subjected to the most extreme techniques' },
    { statute: '18 U.S.C. § 1111 — Murder', description: 'Death of Gul Rahman from hypothermia after being stripped, chained to a cold floor in freezing temperatures — death was a foreseeable consequence of the treatment', count: 'At least 1 confirmed death in custody; multiple detainees died in circumstances connected to interrogation' },
    { statute: '18 U.S.C. § 2441 — War Crimes Act', description: 'Torture of detainees in the war on terror constitutes a grave breach of the Geneva Conventions — a federal felony under the War Crimes Act', count: 'Systematic violations across multiple black sites over years' },
    { statute: '18 U.S.C. § 1519 — Destruction of Evidence', description: 'Jose Rodriguez ordered the destruction of 92 videotapes showing the waterboarding of Abu Zubaydah and al-Nashiri — deliberate destruction of evidence of federal crimes', count: '92 videotapes destroyed; unknown additional documentation destroyed' },
    { statute: '18 U.S.C. § 1505 — Obstruction of Congressional Proceedings', description: 'CIA provided false information to Congress about the torture program\'s effectiveness; CIA hacked Senate Intelligence Committee computers during the investigation', count: 'Systematic obstruction spanning years — false briefings, hacking, evidence destruction' },
    { statute: 'Geneva Convention III, Article 17 — Treatment of Prisoners', description: 'Prohibition on physical or mental torture of prisoners of war and detained persons — violated by every technique in the enhanced interrogation program', count: 'Systemic violation of international humanitarian law' },
    { statute: 'Convention Against Torture (CAT) — Articles 1-4', description: 'The U.S. is a signatory to the UN Convention Against Torture, which prohibits torture and cruel, inhuman, or degrading treatment under all circumstances, with no exceptions', count: 'Violation of binding treaty obligations' },
    { statute: '18 U.S.C. § 371 — Conspiracy', description: 'Coordinated conspiracy between CIA, DOJ, White House, and military officials to design, authorize, implement, and conceal a systematic torture program', count: 'Multi-agency criminal conspiracy spanning 2001-2009' },
    { statute: '18 U.S.C. § 1001 — False Statements', description: 'CIA officials made false statements to Congress, the DOJ, and the White House about the nature and effectiveness of the interrogation program', count: 'Senate Report documents dozens of false and misleading statements to oversight bodies' },
  ],
  coverup: [
    'The CIA destroyed 92 videotapes showing the waterboarding of Abu Zubaydah and Abd al-Rahim al-Nashiri — Jose Rodriguez ordered the destruction despite a court order and congressional request to preserve them. He was never prosecuted.',
    'The CIA hacked into the Senate Intelligence Committee\'s computers during the Torture Report investigation — accessing staff search queries and documents. CIA Director John Brennan initially denied it, then was forced to apologize when the Inspector General confirmed it. No one was prosecuted.',
    'The DOJ\'s Office of Professional Responsibility found that John Yoo and Jay Bybee committed "intentional professional misconduct" in writing the Torture Memos — but political appointee David Margolis overruled the finding and downgraded it to "poor judgment," blocking bar disciplinary referrals.',
    'The full 6,700-page Senate Torture Report remains classified — only the 525-page executive summary was released. The CIA and executive branch have fought to keep the complete documented record from public view.',
    'Abu Zubaydah has been held at Guantánamo Bay for 23 years without charge specifically because putting him on trial would require disclosing the full extent of his torture — the government\'s solution is indefinite detention without trial.',
    'The CIA officer directly responsible for Gul Rahman\'s death by hypothermia at the COBALT black site received a $2,500 cash bonus. The DOJ declined to prosecute, and the officer\'s identity remains classified.',
    'The Obama administration chose to "look forward, not backward" — refusing to prosecute any CIA officer, Bush administration official, or DOJ lawyer involved in the torture program. The only person imprisoned was whistleblower John Kiriakou.',
    'Mitchell and Jessen\'s $81 million CIA contract included a provision indemnifying them against legal liability — the government agreed to pay their legal costs if they were ever sued for the torture they designed and carried out.',
    'When European courts found that Poland and Romania hosted CIA black sites and violated human rights, the U.S. government refused to cooperate with the investigations or acknowledge the program\'s scope.',
    'Gina Haspel\'s role at the Thailand black site was classified during her CIA Director confirmation hearings — senators could not publicly discuss her involvement in torture or evidence destruction, biasing the public record in her favor.',
  ],
  sources: [
    { title: 'Senate Select Committee on Intelligence — "Committee Study of the CIA\'s Detention and Interrogation Program" (Executive Summary)', url: 'https://www.intelligence.senate.gov/sites/default/files/publications/CRPT-113srpt288.pdf', date: '2014-12-09' },
    { title: 'ACLU — "The Torture Report: What We Know About the CIA\'s Detention and Interrogation Program"', url: 'https://www.aclu.org/issues/national-security/torture/torture-report', date: '2014-12-09' },
    { title: 'The New York Times — "Panel Faults C.I.A. Over Brutality and Deceit in Terrorism Interrogations"', url: 'https://www.nytimes.com/2014/12/10/world/senate-intelligence-committee-cia-torture-report.html', date: '2014-12-09' },
    { title: 'The Bureau of Investigative Journalism — "CIA Torture Unredacted" (Complete Timeline)', url: 'https://www.thebureauinvestigates.com/stories/2019-06-14/cia-torture-unredacted', date: '2019-06-14' },
    { title: 'The Guardian — "Abu Zubaydah\'s Drawings of CIA Torture Published for First Time"', url: 'https://www.theguardian.com/us-news/2022/feb/11/abu-zubaydah-drawings-cia-torture-guantanamo', date: '2022-02-11' },
    { title: 'Human Rights Watch — "No More Excuses: A Roadmap to Justice for CIA Torture"', url: 'https://www.hrw.org/report/2015/12/01/no-more-excuses/roadmap-justice-cia-torture', date: '2015-12-01' },
    { title: 'Washington Post — "CIA Holds Terror Suspects in Secret Prisons" by Dana Priest', url: 'https://www.washingtonpost.com/wp-dyn/content/article/2005/11/01/AR2005110101644.html', date: '2005-11-02' },
    { title: 'The Rendition Project — Mapping CIA Black Sites and Extraordinary Rendition', url: 'https://www.therenditionproject.org.uk/', date: '2023-01-01' },
    { title: 'European Court of Human Rights — "Husayn (Abu Zubaydah) v. Poland" Judgment', url: 'https://hudoc.echr.coe.int/eng?i=001-146047', date: '2014-07-24' },
    { title: 'The Intercept — "The CIA Tortured an Afghan Suspect to Death but Covered It Up"', url: 'https://theintercept.com/2023/06/20/cia-torture-gul-rahman-salt-pit/', date: '2023-06-20' },
    { title: 'DOJ Office of Professional Responsibility — "Investigation of OLC Memoranda Concerning Issues Relating to CIA\'s Use of Enhanced Interrogation Techniques"', url: 'https://irp.fas.org/agency/doj/opr-final.pdf', date: '2009-07-29' },
  ],
};

export default function CIATortureProgramPage() {
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
