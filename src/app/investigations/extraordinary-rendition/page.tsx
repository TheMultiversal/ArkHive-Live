'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowLeft, AlertTriangle, Users, Calendar, FileText, ExternalLink, Scale, ShieldAlert, Skull } from 'lucide-react';
import GlitchText from '@/components/effects/GlitchText';

const investigation = {
  title: 'Extraordinary Rendition',
  subtitle: 'CIA\'s Global Kidnapping, Torture, and Black Site Network',
  severity: 'critical',
  status: 'CONFIRMED - SENATE INVESTIGATION',
  summary: 'The CIA\'s extraordinary rendition program (2001-2009) was a systematic campaign of kidnapping, secret detention, and torture conducted across a global network of "black sites" in at least 54 countries. The program involved the extrajudicial transfer of suspected terrorists to countries known to practice torture, as well as CIA-operated secret prisons where "enhanced interrogation techniques" — including waterboarding, sleep deprivation, rectal feeding, and confinement in coffin-sized boxes — were employed. The 2014 Senate Intelligence Committee report confirmed that the program produced no actionable intelligence that could not have been obtained through lawful means. At least 119 individuals were held in CIA custody, with at least 39 subjected to enhanced interrogation. Multiple detainees were later found to have been wrongfully detained.',
  keyFigures: [
    { name: 'George W. Bush', role: 'President who authorized enhanced interrogation techniques and black sites', href: '/entities/individuals/george-w-bush', status: 'Former President' },
    { name: 'Dick Cheney', role: 'Vice President, primary advocate for enhanced interrogation program', href: '/entities/individuals/dick-cheney', status: 'Former VP' },
    { name: 'George Tenet', role: 'CIA Director who oversaw creation of rendition and black site program', href: '/entities/individuals/george-tenet', status: 'Former CIA Director' },
    { name: 'Jose Rodriguez', role: 'CIA Counterterrorism Center chief who ordered destruction of interrogation tapes', href: '/entities/individuals/jose-rodriguez', status: 'Retired' },
    { name: 'James Mitchell', role: 'Psychologist who designed CIA enhanced interrogation program', href: '/entities/individuals/james-mitchell', status: 'Contractor' },
    { name: 'Bruce Jessen', role: 'Psychologist and co-architect of CIA torture program with Mitchell', href: '/entities/individuals/bruce-jessen', status: 'Contractor' },
    { name: 'John Yoo', role: 'DOJ lawyer who authored "Torture Memos" providing legal justification', href: '/entities/individuals/john-yoo', status: 'UC Berkeley Professor' },
    { name: 'Jay Bybee', role: 'Assistant AG who signed Torture Memos authorizing enhanced interrogation', href: '/entities/individuals/jay-bybee', status: 'Federal Judge' },
    { name: 'Gina Haspel', role: 'CIA officer who oversaw Thailand black site, later became CIA Director', href: '/entities/individuals/gina-haspel', status: 'Former CIA Director' },
    { name: 'Dianne Feinstein', role: 'Senate Intelligence Committee Chair who led investigation into CIA torture', href: '/entities/individuals/dianne-feinstein', status: 'Deceased (2023)' },
    { name: 'Khalid Sheikh Mohammed', role: 'Detainee waterboarded 183 times at CIA black sites', href: '/entities/individuals/khalid-sheikh-mohammed', status: 'Guantanamo detainee' },
    { name: 'Abu Zubaydah', role: 'First CIA detainee subjected to enhanced interrogation, held without charge', href: '/entities/individuals/abu-zubaydah', status: 'Guantanamo detainee' },
  ],
  timeline: [
    { date: 'September 17, 2001', event: 'President Bush signs covert action Memorandum of Notification authorizing CIA detention and interrogation' },
    { date: 'November 2001', event: 'CIA establishes first black site ("Detention Site Cobalt") in Afghanistan' },
    { date: 'March 2002', event: 'Abu Zubaydah captured in Pakistan — becomes first CIA enhanced interrogation subject' },
    { date: 'August 1, 2002', event: 'John Yoo and Jay Bybee issue "Torture Memos" redefining torture to authorize techniques' },
    { date: 'August 2002', event: 'Abu Zubaydah waterboarded 83 times at CIA Thailand black site' },
    { date: 'December 2002', event: 'Gul Rahman dies of hypothermia at CIA Salt Pit black site in Afghanistan' },
    { date: 'March 2003', event: 'Khalid Sheikh Mohammed captured — subjected to waterboarding 183 times' },
    { date: 'December 2003', event: 'CIA\'s Inspector General begins review of interrogation program' },
    { date: 'May 2004', event: 'CIA Inspector General report finds interrogation techniques may constitute torture' },
    { date: 'November 2005', event: 'Washington Post reveals existence of CIA black sites in Eastern Europe' },
    { date: 'November 2005', event: 'Jose Rodriguez orders destruction of 92 interrogation videotapes' },
    { date: 'December 2005', event: 'Condoleezza Rice acknowledges rendition flights used European airspace' },
    { date: 'June 2006', event: 'Supreme Court rules in Hamdan v. Rumsfeld that Geneva Conventions apply to detainees' },
    { date: 'September 2006', event: 'Bush acknowledges CIA black sites, transfers 14 "high value" detainees to Guantanamo' },
    { date: 'January 2009', event: 'President Obama signs executive order closing CIA black sites and banning enhanced interrogation' },
    { date: 'December 9, 2014', event: 'Senate Intelligence Committee releases 525-page summary of 6,700-page torture report' },
    { date: '2017', event: 'Gina Haspel nominated as CIA Director despite overseeing Thailand black site' },
    { date: '2022', event: 'European Court of Human Rights rules against Poland and Romania for hosting CIA black sites' },
  ],
  legalOutcomes: [
    { defendant: 'James Mitchell & Bruce Jessen', charge: 'Designing CIA torture program', outcome: 'ACLU lawsuit settled — no criminal charges ever filed' },
    { defendant: 'Jose Rodriguez', charge: 'Destruction of 92 interrogation tapes', outcome: 'DOJ declined prosecution' },
    { defendant: 'CIA Officers', charge: 'Torture and cruel treatment of detainees', outcome: 'No prosecutions — blanket immunity provided' },
    { defendant: 'John Yoo', charge: 'Providing legal cover for torture through Torture Memos', outcome: 'No charges — ethical complaint dismissed' },
    { defendant: 'Poland (State)', charge: 'Hosting CIA black site', outcome: 'European Court of Human Rights — found guilty, ordered reparations' },
    { defendant: 'Romania (State)', charge: 'Hosting CIA black site', outcome: 'European Court of Human Rights — found guilty' },
    { defendant: 'Gina Haspel', charge: 'Overseeing torture at Thailand black site', outcome: 'No charges — appointed CIA Director in 2018' },
    { defendant: 'George Tenet', charge: 'Authorizing torture program as CIA Director', outcome: 'No prosecution — received Presidential Medal of Freedom' },
  ],
  charges: [
    { statute: '18 U.S.C. § 2340 - Federal Torture Statute', description: 'Systematic torture including waterboarding, stress positions, sleep deprivation, and rectal feeding', count: 'At least 39 detainees subjected to enhanced interrogation' },
    { statute: 'Geneva Convention III, Article 3', description: 'Cruel treatment, torture, and outrages upon personal dignity of prisoners', count: '119 individuals held in CIA custody' },
    { statute: '18 U.S.C. § 1519 - Destruction of Evidence', description: 'Jose Rodriguez ordered destruction of 92 interrogation videotapes', count: '92 tapes destroyed' },
    { statute: '18 U.S.C. § 1201 - Kidnapping', description: 'Extrajudicial seizure and transfer of individuals across international borders', count: 'Dozens of individuals rendered from multiple countries' },
    { statute: 'Convention Against Torture (CAT)', description: 'Transfer of individuals to countries where torture was foreseeable', count: 'Systematic practice across 54 cooperating countries' },
    { statute: '18 U.S.C. § 1111 - Murder', description: 'Death of Gul Rahman from hypothermia at CIA Salt Pit, death of others in custody', count: 'Multiple deaths in CIA custody documented' },
    { statute: '18 U.S.C. § 241 - Conspiracy Against Rights', description: 'Systematic deprivation of constitutional and human rights through secret detention', count: 'Program-wide conspiracy' },
    { statute: 'War Crimes Act - 18 U.S.C. § 2441', description: 'Grave breaches of Geneva Conventions through torture and inhuman treatment', count: 'Systematic violations across black site network' },
  ],
  coverup: [
    'CIA destroyed 92 videotapes of interrogation sessions to prevent them from becoming public evidence of torture',
    'The DOJ Office of Legal Counsel issued the "Torture Memos" specifically to provide retroactive legal cover for techniques already being used',
    'CIA systematically misrepresented the effectiveness of enhanced interrogation to Congress, the White House, and the public',
    'The Senate Intelligence Committee found that CIA provided inaccurate information to the DOJ, impeding oversight of the program',
    'CIA officers who raised concerns about the program\'s legality were sidelined or threatened with prosecution under secrecy agreements',
    'The full 6,700-page Senate Torture Report remains classified — only a 525-page executive summary was released',
    'CIA attempted to interfere with the Senate investigation by searching Senate computers, leading to a constitutional crisis',
    'Multiple countries that hosted black sites actively suppressed information about their cooperation with CIA torture program',
    'Detainees who were wrongfully held were released without acknowledgment, compensation, or apology from the US government',
    'Contractors Mitchell and Jessen received $81 million for designing the torture program — their company was never sanctioned',
  ],
  sources: [
    { title: 'Senate Select Committee on Intelligence - Study of CIA Detention and Interrogation Program', url: 'https://www.intelligence.senate.gov/sites/default/files/publications/CRPT-113srpt288.pdf', date: 'December 9, 2014' },
    { title: 'ACLU — Extraordinary Rendition Documentation', url: 'https://www.aclu.org/issues/national-security/torture/extraordinary-rendition', date: 'Ongoing' },
    { title: 'The Constitution Project — Task Force on Detainee Treatment', url: 'https://detaineetaskforce.org/report/', date: '2013' },
    { title: 'Open Society Justice Initiative — Globalizing Torture', url: 'https://www.justiceinitiative.org/publications/globalizing-torture-cia-secret-detention-and-extraordinary-rendition', date: '2013' },
    { title: 'European Court of Human Rights — Al Nashiri v. Poland', url: 'https://hudoc.echr.coe.int/eng?i=001-146044', date: '2014' },
    { title: 'Jane Mayer — The Dark Side', url: 'https://www.penguinrandomhouse.com/books/301404/the-dark-side-by-jane-mayer/', date: '2008' },
    { title: 'CIA Inspector General Special Review of Counterterrorism Detention and Interrogation', url: 'https://www.cia.gov/readingroom/docs/0006541927.pdf', date: '2004' },
    { title: 'Washington Post — CIA Holds Terror Suspects in Secret Prisons', url: 'https://www.washingtonpost.com/wp-dyn/content/article/2005/11/01/AR2005110101644.html', date: 'November 2, 2005' },
    { title: 'The Rendition Project — Flight Data and Documentation', url: 'https://www.therenditionproject.org.uk/', date: 'Ongoing' },
  ],
};

export default function ExtraordinaryRenditionPage() {
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
