'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowLeft, AlertTriangle, Users, Calendar, FileText, ExternalLink, Scale, ShieldAlert, Skull } from 'lucide-react';
import GlitchText from '@/components/effects/GlitchText';

const investigation = {
  title: 'The Phoenix Program',
  subtitle: 'CIA\'s Systematic Assassination and Torture Campaign in Vietnam',
  severity: 'critical',
  status: 'CONFIRMED - DECLASSIFIED',
  summary: 'The Phoenix Program (1965-1972) was a CIA-coordinated operation during the Vietnam War that targeted the Viet Cong infrastructure through infiltration, capture, terrorism, torture, and assassination. The program resulted in the deaths of between 20,000 and 40,000 Vietnamese civilians, many of whom were falsely identified or had no connection to the Viet Cong. The program operated through Provincial Reconnaissance Units (PRUs) and utilized systematic torture techniques including electric shock, water torture, and sexual violence. Despite congressional hearings and widespread condemnation, no American official was ever held accountable for the program\'s atrocities.',
  keyFigures: [
    { name: 'William Colby', role: 'CIA Director, head of CORDS and Phoenix Program architect', href: '/entities/individuals/william-colby', status: 'Deceased (1996)' },
    { name: 'Robert Komer', role: 'Head of CORDS (Civil Operations and Revolutionary Development Support)', href: '/entities/individuals/robert-komer', status: 'Deceased (2000)' },
    { name: 'Evan Parker', role: 'First director of the Phoenix Program', href: '/entities/individuals/evan-parker', status: 'Deceased' },
    { name: 'Nelson Brickham', role: 'CIA officer who conceived the Phoenix Program', href: '/entities/individuals/nelson-brickham', status: 'Deceased' },
    { name: 'William Westmoreland', role: 'Commander of US forces in Vietnam, authorized Phoenix operations', href: '/entities/individuals/william-westmoreland', status: 'Deceased (2005)' },
    { name: 'Richard Helms', role: 'CIA Director who oversaw Phoenix expansion', href: '/entities/individuals/richard-helms', status: 'Deceased (2002)' },
    { name: 'Creighton Abrams', role: 'Succeeded Westmoreland, continued Phoenix operations', href: '/entities/individuals/creighton-abrams', status: 'Deceased (1974)' },
    { name: 'John Paul Vann', role: 'Senior CORDS advisor, key Phoenix figure', href: '/entities/individuals/john-paul-vann', status: 'Deceased (1972)' },
    { name: 'Ted Shackley', role: 'CIA Station Chief Saigon, oversaw Phoenix operations', href: '/entities/individuals/ted-shackley', status: 'Deceased (2002)' },
    { name: 'Lyndon B. Johnson', role: 'President who authorized covert operations in Vietnam', href: '/entities/individuals/lyndon-johnson', status: 'Deceased (1973)' },
    { name: 'Richard Nixon', role: 'President who expanded and continued the Phoenix Program', href: '/entities/individuals/richard-nixon', status: 'Deceased (1994)' },
    { name: 'K. Barton Osborn', role: 'Military intelligence officer, testified about Phoenix torture', href: '/entities/individuals/k-barton-osborn', status: 'Unknown' },
  ],
  timeline: [
    { date: '1965', event: 'CIA begins Intelligence Coordination and Exploitation (ICEX) program, precursor to Phoenix' },
    { date: 'May 1967', event: 'CORDS established under Robert Komer to coordinate pacification efforts' },
    { date: 'July 1968', event: 'Phoenix Program (Phung Hoang) officially launched with MACV Directive 381-41' },
    { date: 'January 1968', event: 'Tet Offensive exposes failure of existing intelligence programs, accelerates Phoenix' },
    { date: '1968', event: 'Provincial Reconnaissance Units (PRUs) expanded with CIA funding and training' },
    { date: '1969', event: 'Phoenix sets quotas: 1,800 VCI neutralizations per month across South Vietnam' },
    { date: '1969', event: 'William Colby takes over CORDS, expands Phoenix Program dramatically' },
    { date: '1969-1970', event: 'Reports of widespread torture at Provincial Interrogation Centers emerge' },
    { date: '1970', event: 'Phoenix claims 20,587 VCI "neutralized" in single year — 6,187 killed' },
    { date: 'June 1971', event: 'Pentagon Papers released, revealing scope of deception in Vietnam War' },
    { date: 'July 1971', event: 'K. Barton Osborn testifies before Congress about Phoenix torture and murder' },
    { date: 'August 1971', event: 'William Colby testifies before Senate, admits 20,587 killed under Phoenix' },
    { date: '1971', event: 'Congressional hearings reveal torture techniques including electric shock and water torture' },
    { date: '1972', event: 'Phoenix Program officially turned over to South Vietnamese government' },
    { date: '1973', event: 'William Colby appointed CIA Director despite Phoenix controversies' },
    { date: '1975', event: 'Church Committee investigations reveal broader CIA assassination programs' },
    { date: '1988', event: 'CIA Inspector General report acknowledges Phoenix abuses but concludes no accountability needed' },
    { date: '2004', event: 'Parallels drawn between Phoenix Program and War on Terror interrogation techniques' },
  ],
  legalOutcomes: [
    { defendant: 'William Colby', charge: 'Congressional testimony on Phoenix killings', outcome: 'No charges — appointed CIA Director instead' },
    { defendant: 'CIA Officers', charge: 'Torture and extrajudicial killing', outcome: 'No prosecutions ever brought' },
    { defendant: 'PRU Operatives', charge: 'Murder of civilians misidentified as VCI', outcome: 'Granted immunity under program rules' },
    { defendant: 'US Military Personnel', charge: 'War crimes under Phoenix operations', outcome: 'No courts-martial conducted' },
    { defendant: 'South Vietnamese Operatives', charge: 'Torture at Provincial Interrogation Centers', outcome: 'No accountability after fall of Saigon' },
    { defendant: 'Richard Helms', charge: 'Perjury before Congress (related testimony)', outcome: 'Pled no contest, received suspended sentence' },
    { defendant: 'CORDS Leadership', charge: 'Command responsibility for civilian deaths', outcome: 'No charges ever filed' },
    { defendant: 'Ted Shackley', charge: 'Oversight of extrajudicial operations', outcome: 'No prosecution — continued CIA career' },
  ],
  charges: [
    { statute: '18 U.S.C. § 2441 - War Crimes Act', description: 'Systematic torture and extrajudicial killing of Vietnamese civilians', count: 'Estimated 20,000-40,000 victims' },
    { statute: 'Geneva Convention III, Article 3', description: 'Cruel treatment and torture of prisoners and detained persons', count: 'Thousands of documented cases' },
    { statute: 'Geneva Convention IV, Articles 31-32', description: 'Physical coercion, torture of protected civilian persons', count: 'Systematic across provinces' },
    { statute: '18 U.S.C. § 1111 - Murder', description: 'Extrajudicial execution of suspected Viet Cong infrastructure', count: 'Minimum 20,587 acknowledged killed' },
    { statute: '18 U.S.C. § 2340 - Torture', description: 'Electric shock, water torture, sexual violence at interrogation centers', count: 'Routine practice documented' },
    { statute: 'Hague Convention IV, Article 23', description: 'Killing or wounding treacherously individuals belonging to hostile nation', count: 'Core feature of assassination program' },
    { statute: 'EO 11905 / 12333 - Assassination Ban', description: 'Targeted killing program operated before executive order ban', count: 'Program-wide systematic practice' },
    { statute: '18 U.S.C. § 371 - Conspiracy', description: 'Coordinated conspiracy to commit war crimes across military and intelligence agencies', count: 'Multi-agency program' },
    { statute: 'Nuremberg Principle VI', description: 'Crimes against peace and crimes against humanity', count: 'Program-level systematic violations' },
  ],
  coverup: [
    'CIA destroyed thousands of Phoenix Program documents before congressional investigations could access them',
    'William Colby\'s congressional testimony deliberately minimized civilian death tolls, citing 20,587 killed while internal estimates ran as high as 40,000',
    'The program used euphemisms like "neutralization" to disguise assassination and "detention" to disguise indefinite imprisonment and torture',
    'Provincial Reconnaissance Units operated with no accountability — kills were attributed to "combat operations" rather than targeted assassination',
    'South Vietnamese officials were given credit for successful operations while CIA maintained deniability for failures and atrocities',
    'Military intelligence officers who attempted to report Phoenix abuses were transferred, discredited, or threatened',
    'K. Barton Osborn\'s congressional testimony about witnessing torture and murder was dismissed by CIA as "unreliable" despite corroboration',
    'The handover of Phoenix to South Vietnamese control in 1972 was designed to distance the US from ongoing atrocities',
    'CIA Inspector General investigations were deliberately limited in scope and conducted by personnel with conflicts of interest',
    'Classification of Phoenix-related documents continued for decades beyond any legitimate national security justification',
  ],
  sources: [
    { title: 'Phoenix Program - CIA FOIA Reading Room', url: 'https://www.cia.gov/readingroom/collection/vietnam-histories', date: 'Declassified documents' },
    { title: 'Douglas Valentine - The Phoenix Program (1990)', url: 'https://archive.org/details/phoenixprogram00vale', date: '1990' },
    { title: 'Alfred W. McCoy - A Question of Torture', url: 'https://www.penguinrandomhouse.com/books/296003/a-question-of-torture-by-alfred-w-mccoy/', date: '2006' },
    { title: 'Senate Foreign Relations Committee Hearings on Phoenix', url: 'https://www.govinfo.gov/content/pkg/CHRG-hearings-vietnam/pdf/', date: '1970' },
    { title: 'CIA and the Vietnam Policymakers - CIA History Staff', url: 'https://www.cia.gov/readingroom/docs/DOC_0005359663.pdf', date: '2007' },
    { title: 'Nick Turse - Kill Anything That Moves', url: 'https://www.penguinrandomhouse.com/books/202080/kill-anything-that-moves-by-nick-turse/', date: '2013' },
    { title: 'William Colby Congressional Testimony Records', url: 'https://www.govinfo.gov/content/pkg/CHRG-senate-colby/pdf/', date: '1971' },
    { title: 'Church Committee - Alleged Assassination Plots', url: 'https://www.intelligence.senate.gov/sites/default/files/94465.pdf', date: '1975' },
    { title: 'Mark Moyar - Phoenix and the Birds of Prey', url: 'https://www.nebraskapress.unl.edu/nebraska/9780803283527/', date: '2007' },
  ],
};

export default function PhoenixProgramPage() {
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
