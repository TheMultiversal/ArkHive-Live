'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowLeft, AlertTriangle, Users, Calendar, FileText, ExternalLink, Scale, ShieldAlert, Skull } from 'lucide-react';
import GlitchText from '@/components/effects/GlitchText';

const investigation = {
  title: 'Guant\u00e1namo Bay',
  subtitle: 'America\u2019s Gulag \u2014 Indefinite Detention, Torture, and the Death of Due Process',
  severity: 'critical',
  status: 'ACTIVE \u2014 30 DETAINEES REMAIN',
  summary: 'Since January 2002, the United States has operated a detention facility at Guant\u00e1namo Bay Naval Base in Cuba specifically designed to exist outside the reach of American law. 780 men have been held there. 741 have been released \u2014 the vast majority without ever being charged with any crime. At its peak, the facility held nearly 680 detainees in conditions that the International Committee of the Red Cross, the United Nations, and virtually every human rights organization on earth have condemned as torture. Detainees were subjected to waterboarding, sleep deprivation for up to 180 hours, stress positions, sexual humiliation, rectal feeding, exposure to extreme temperatures, and prolonged solitary confinement. The CIA\'s "enhanced interrogation" program, designed by psychologists James Mitchell and Bruce Jessen, was modeled on Chinese Communist torture techniques used during the Korean War to produce false confessions. The legal framework was equally grotesque: John Yoo and Jay Bybee authored memos redefining torture to exclude everything short of organ failure or death. Military commissions replaced civilian courts. Habeas corpus was suspended. The cost to American taxpayers exceeds $13 million per prisoner per year \u2014 making Guant\u00e1namo the most expensive prison on earth. As of 2026, 30 men remain detained, some for over two decades without charge. The facility stands as a permanent monument to what happens when a democracy decides that some people don\'t deserve rights.',
  keyFigures: [
    { name: 'George W. Bush', role: 'President \u2014 Authorized Guant\u00e1namo detention facility and military commissions by executive order, January 2002', href: '/entities/individuals/george-w-bush', status: 'Left Office' },
    { name: 'Dick Cheney', role: 'Vice President \u2014 Principal architect of detention and interrogation policies; pushed for unlimited executive authority', href: '/entities/individuals/dick-cheney', status: 'Left Office' },
    { name: 'Donald Rumsfeld', role: 'Secretary of Defense \u2014 Personally approved "enhanced interrogation" techniques; signed off on torture methods', href: '/entities/individuals/donald-rumsfeld', status: 'Deceased (2021)' },
    { name: 'Alberto Gonzales', role: 'White House Counsel/AG \u2014 Called Geneva Conventions "quaint" and "obsolete"; authorized torture memos', href: '/entities/individuals/alberto-gonzales', status: 'Left Office' },
    { name: 'John Yoo', role: 'OLC Attorney \u2014 Authored "torture memos" redefining torture to exclude waterboarding, stress positions, and sleep deprivation', href: '/entities/individuals/john-yoo', status: 'UC Berkeley Professor' },
    { name: 'Jay Bybee', role: 'OLC Head \u2014 Signed torture memos; rewarded with lifetime appointment to Ninth Circuit Court of Appeals', href: '/entities/individuals/jay-bybee', status: 'Federal Judge (Ret.)' },
    { name: 'Gina Haspel', role: 'CIA Officer \u2014 Oversaw CIA black site in Thailand where detainees were waterboarded; ordered destruction of interrogation tapes', href: '/entities/individuals/gina-haspel', status: 'Former CIA Director' },
    { name: 'James Mitchell', role: 'CIA Contract Psychologist \u2014 Co-designed "enhanced interrogation" program based on SERE training; personally waterboarded detainees', href: '/entities/individuals/james-mitchell', status: 'Paid $81M by CIA' },
    { name: 'Bruce Jessen', role: 'CIA Contract Psychologist \u2014 Co-designed torture program with Mitchell; no psychology license for clinical practice', href: '/entities/individuals/bruce-jessen', status: 'Paid $81M by CIA' },
    { name: 'George Tenet', role: 'CIA Director \u2014 Authorized CIA black sites and rendition program; received Presidential Medal of Freedom', href: '/entities/individuals/george-tenet', status: 'Medal of Freedom' },
    { name: 'John Brennan', role: 'CIA Deputy/Director \u2014 Defended "enhanced interrogation" as necessary; led CIA during Senate torture report investigation', href: '/entities/individuals/john-brennan', status: 'Left Office' },
    { name: 'Barack Obama', role: 'President \u2014 Signed executive order to close Guant\u00e1namo on Day 2; failed to close it in 8 years', href: '/entities/individuals/barack-obama', status: 'Left Office' },
    { name: 'Donald Trump', role: 'President \u2014 Signed executive order to keep Guant\u00e1namo open indefinitely; called for "loading it up"', href: '/entities/individuals/donald-trump', status: 'Current President' },
    { name: 'Joe Biden', role: 'President \u2014 Continued detention operations; transferred some detainees but facility remained open', href: '/entities/individuals/joe-biden', status: 'Left Office' },
  ],
  timeline: [
    { date: '2001-11-13', event: 'Bush signs Military Order authorizing indefinite detention and military tribunals for non-citizens suspected of terrorism' },
    { date: '2002-01-11', event: 'First 20 detainees arrive at Guant\u00e1namo Bay in orange jumpsuits, hooded and shackled; held in outdoor wire cages (Camp X-Ray)' },
    { date: '2002-02-07', event: 'Bush memo declares Geneva Conventions do not apply to al-Qaeda or Taliban detainees \u2014 stripping prisoners of all legal protections' },
    { date: '2002-08-01', event: 'John Yoo\'s "torture memos" define torture as pain equivalent to organ failure or death \u2014 everything else is legal' },
    { date: '2002-12-02', event: 'Rumsfeld personally approves "enhanced interrogation techniques" including stress positions, hooding, 20-hour interrogations, stripping, and dogs' },
    { date: '2003-01', event: 'CIA begins using waterboarding at black sites; Khalid Sheikh Mohammed waterboarded 183 times in one month' },
    { date: '2004-04', event: 'Abu Ghraib torture photos published; world sees American soldiers torturing Iraqi prisoners \u2014 only low-ranking soldiers prosecuted' },
    { date: '2004-06-28', event: 'Supreme Court rules in Rasul v. Bush that Guant\u00e1namo detainees can challenge detention in federal court' },
    { date: '2005-12', event: 'Detainee Treatment Act (McCain Amendment) bans cruel, inhuman treatment \u2014 Bush issues signing statement preserving presidential authority to ignore it' },
    { date: '2006-06-29', event: 'Supreme Court rules in Hamdan v. Rumsfeld that military commissions violate Geneva Conventions and UCMJ' },
    { date: '2006-10', event: 'Military Commissions Act strips federal courts of habeas jurisdiction over Guant\u00e1namo detainees; Congress retroactively legalizes military tribunals' },
    { date: '2008-06-12', event: 'Supreme Court rules in Boumediene v. Bush that detainees have constitutional right to habeas corpus; MCA provision struck down' },
    { date: '2009-01-22', event: 'Obama signs Executive Order 13492 to close Guant\u00e1namo within one year; Congress blocks funding for transfers' },
    { date: '2012-01', event: 'NDAA signed with provisions restricting Guant\u00e1namo transfers; closure becomes politically impossible' },
    { date: '2014-12-09', event: 'Senate Intelligence Committee releases CIA Torture Report \u2014 525-page summary of 6,700-page classified report; reveals systematic torture was ineffective' },
    { date: '2015-06', event: 'Senate Torture Report reveals CIA paid psychologists Mitchell and Jessen $81 million for designing torture program' },
    { date: '2018-01-30', event: 'Trump signs executive order to keep Guant\u00e1namo open; considers sending new detainees there' },
    { date: '2021-02', event: 'Biden administration begins review of detention operations; some transfers resume but facility stays open' },
    { date: '2024-06', event: 'Khalid Sheikh Mohammed and two co-defendants agree to plead guilty; plea deals later revoked by Secretary of Defense' },
  ],
  legalOutcomes: [
    { defendant: 'Rasul v. Bush (2004)', charge: 'Habeas Corpus Rights', outcome: 'Supreme Court rules 6-3 that Guant\u00e1namo detainees can access federal courts \u2014 Bush administration ignores spirit of ruling' },
    { defendant: 'Hamdan v. Rumsfeld (2006)', charge: 'Legality of Military Commissions', outcome: 'Supreme Court strikes down military commissions as violating Geneva Conventions; Congress passes MCA to override ruling' },
    { defendant: 'Boumediene v. Bush (2008)', charge: 'Constitutional Habeas Corpus', outcome: 'Supreme Court rules 5-4 that detainees have constitutional right to habeas corpus; many subsequently ordered released' },
    { defendant: 'Abu Zubaydah (Detainee)', charge: 'Never formally charged', outcome: 'Waterboarded 83 times; held since 2002; CIA later admitted he was not a senior al-Qaeda figure as claimed' },
    { defendant: 'Khalid Sheikh Mohammed', charge: '9/11 conspiracy / murder of 2,976 people', outcome: '20+ years in detention without trial; plea deal negotiated 2024 then revoked; military commission still pending' },
    { defendant: 'Mohamedou Ould Slahi', charge: 'Suspected al-Qaeda ties', outcome: 'Tortured for years; wrote "Guant\u00e1namo Diary" from cell; cleared for release 2010, not freed until 2016 \u2014 never charged' },
    { defendant: 'James Mitchell & Bruce Jessen', charge: 'Civil suit by torture victims (Salim v. Mitchell)', outcome: 'Settled 2017; psychologists paid by CIA $81M for torture program; no criminal charges ever filed' },
    { defendant: 'Gina Haspel', charge: 'Overseeing torture / destroying evidence', outcome: 'Promoted to CIA Director in 2018 despite running black site and ordering destruction of 92 interrogation videotapes' },
    { defendant: '741 Released Detainees', charge: 'Most never charged with any crime', outcome: 'Held for years without trial; many tortured; released with no compensation, no apology, no legal recourse' },
  ],
  charges: [
    { statute: '18 U.S.C. \u00a7 2340A', description: 'Torture \u2014 Waterboarding, stress positions, sleep deprivation up to 180 hours, rectal feeding, confinement boxes, walling, and other methods constitute torture under federal law', count: 'Hundreds of acts against dozens of detainees \u2014 zero prosecutions' },
    { statute: '18 U.S.C. \u00a7 1519', description: 'Obstruction \u2014 CIA destroyed 92 videotapes of waterboarding sessions to prevent evidence from being used in legal proceedings', count: 'At least 92 tapes destroyed \u2014 no charges filed' },
    { statute: 'Geneva Conventions (Common Article 3)', description: 'War Crimes \u2014 Torture, cruel treatment, and outrages upon personal dignity constitute violations of the laws of war', count: 'Systematic violations acknowledged by Senate Torture Report' },
    { statute: '18 U.S.C. \u00a7 241', description: 'Conspiracy Against Rights \u2014 Coordinated program to deny constitutional rights including habeas corpus and due process', count: 'Program-wide conspiracy involving multiple agencies' },
    { statute: '18 U.S.C. \u00a7 242', description: 'Deprivation of Rights Under Color of Law \u2014 Government officials systematically deprived detainees of legal rights', count: 'Hundreds of victims over 20+ years' },
    { statute: 'Fifth Amendment', description: 'Due Process \u2014 Indefinite detention without charge or trial; denial of access to counsel; coerced confessions through torture', count: '780 detainees denied due process; 30 still held' },
    { statute: 'Eighth Amendment', description: 'Cruel and Unusual Punishment \u2014 Conditions of confinement, force-feeding of hunger strikers, prolonged solitary confinement', count: 'Ongoing \u2014 force-feeding ruled "painful, humiliating, and degrading" by federal judge' },
    { statute: '28 U.S.C. \u00a7 2241', description: 'Habeas Corpus \u2014 Right to challenge detention; repeatedly denied by executive and legislative branches until Supreme Court intervention', count: 'Constitutional right suspended for years' },
  ],
  coverup: [
    'The Bush administration deliberately chose Guant\u00e1namo Bay because it was outside U.S. sovereign territory \u2014 the explicit purpose was to create a "legal black hole" where the Constitution did not apply and no court had jurisdiction.',
    'Alberto Gonzales, White House Counsel, wrote a memo calling the Geneva Conventions "quaint" and "obsolete" to justify stripping all legal protections from detainees. When he became Attorney General, he continued to defend the torture program.',
    'The CIA\'s "enhanced interrogation" program was designed by two psychologists, James Mitchell and Bruce Jessen, who had no interrogation experience and no relevant language skills. Their techniques were reverse-engineered from SERE training \u2014 which was based on Chinese Communist methods designed to produce false confessions.',
    'The CIA destroyed 92 videotapes of waterboarding sessions conducted at black sites. Gina Haspel \u2014 who oversaw one of those black sites \u2014 drafted the cable ordering the destruction. She was later promoted to CIA Director.',
    'The Senate Intelligence Committee spent five years and reviewed 6.3 million pages of CIA documents to produce a 6,700-page torture report. The CIA spied on the Senate investigators\u2019 computers during the investigation. Only a 525-page executive summary was ever declassified.',
    'The military commissions at Guant\u00e1namo were designed to guarantee convictions: hearsay evidence was admissible, coerced statements could be used, defense attorneys were restricted from accessing evidence, and the government could classify proceedings at will.',
    'Of 780 detainees held at Guant\u00e1namo, at least 150 were determined by the U.S. government\'s own review boards to be innocent \u2014 farmers, taxi drivers, people sold for bounties. Many were tortured before being released years later without apology or compensation.',
    'The cost of operating Guant\u00e1namo exceeds $540 million per year for 30 remaining detainees \u2014 over $13 million per prisoner annually. The facility employs 1,500 military personnel. By comparison, federal supermax prisons cost approximately $78,000 per prisoner per year.',
    'Force-feeding of hunger-striking detainees involved strapping prisoners to a restraint chair and inserting a tube through the nose into the stomach. A federal judge described the practice as "painful, humiliating, and degrading." The practice continues.',
  ],
  sources: [
    { title: 'Senate Select Committee on Intelligence: CIA Torture Report (Executive Summary)', url: 'https://www.intelligence.senate.gov/sites/default/files/publications/CRPT-113srpt288.pdf', date: 'Dec 2014' },
    { title: 'The New York Times: "The Guant\u00e1namo Docket" \u2014 Complete Detainee Database', url: 'https://www.nytimes.com/interactive/2021/us/guantanamo-bay-detainees.html', date: 'Ongoing' },
    { title: 'ACLU: "Guant\u00e1namo Bay Detention Camp"', url: 'https://www.aclu.org/issues/national-security/detention/guantanamo-bay-detention-camp', date: 'Ongoing' },
    { title: 'Human Rights First: "Tortured Justice \u2014 Military Commissions at Guant\u00e1namo"', url: 'https://humanrightsfirst.org/topics/torture/', date: 'Ongoing' },
    { title: 'The Rendition Project: CIA Black Sites and Extraordinary Rendition', url: 'https://www.therenditionproject.org.uk/', date: 'Ongoing' },
    { title: 'Mohamedou Ould Slahi: "Guant\u00e1namo Diary" (memoir written from detention)', url: 'https://www.penguinrandomhouse.com/books/309060/guantanamo-diary-by-mohamedou-ould-slahi/', date: '2015' },
    { title: 'The Guardian: "The Guant\u00e1namo Files" \u2014 WikiLeaks Detainee Assessment Briefs', url: 'https://www.theguardian.com/world/guantanamo-files', date: 'Apr 2011' },
    { title: 'ProPublica: "Guant\u00e1namo \u2014 A History of Injustice"', url: 'https://www.propublica.org/series/guantanamo', date: '2010-2024' },
    { title: 'Constitution Project: Task Force on Detainee Treatment Report', url: 'https://constitutionproject.org/publications/the-report-of-the-constitution-projects-task-force-on-detainee-treatment', date: 'Apr 2013' },
    { title: 'Miami Herald: "Guant\u00e1namo Bay \u2014 Ongoing Coverage"', url: 'https://www.miamiherald.com/news/nation-world/world/americas/guantanamo/', date: 'Ongoing' },
    { title: 'Salim v. Mitchell: ACLU Lawsuit Against CIA Torture Psychologists', url: 'https://www.aclu.org/cases/salim-v-mitchell', date: '2015-2017' },
  ],
};

export default function GuantanamoBayPage() {
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
