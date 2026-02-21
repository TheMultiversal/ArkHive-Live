'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowLeft, Users, Calendar, ExternalLink, Scale, Heart, Syringe, FileText, AlertTriangle } from 'lucide-react';
import GlitchText from '@/components/effects/GlitchText';

const investigation = {
  title: 'Tuskegee Syphilis Study: 40 Years of Medical Genocide',
  subtitle: 'How the US Public Health Service Deliberately Withheld Treatment from 399 Black Men with Syphilis — Watching Them Die for "Science"',
  severity: 'critical',
  status: 'Confirmed — US Government Apologized 1997',
  summary: 'From 1932 to 1972, the United States Public Health Service (USPHS) conducted the "Tuskegee Study of Untreated Syphilis in the Negro Male" in Macon County, Alabama. 399 Black men with syphilis and 201 without were enrolled under the pretense of receiving free healthcare. They never received treatment — even after penicillin became the standard cure for syphilis in 1947. Researchers deliberately withheld treatment, provided placebos, and actively prevented participants from receiving treatment elsewhere, all to study the "natural progression" of syphilis in Black bodies. By the time the study was exposed by journalist Jean Heller in 1972, 128 men had died of syphilis or its complications, 40 wives had been infected, and 19 children were born with congenital syphilis. This was not science — it was racially motivated medical torture.',
  scale: {
    syphilisPatients: '399 infected men',
    controlGroup: '201 uninfected men',
    deaths: '128+ died of syphilis',
    infectedWives: '40 wives infected',
    congenitalCases: '19 children born with syphilis',
    duration: '40 years (1932-1972)',
  },
  deceptions: [
    { lie: '"Free Treatment"', reality: 'Participants were told they were receiving treatment for "bad blood." They received aspirin, vitamins, and spinal taps presented as "treatment" but were never given actual syphilis medication.' },
    { lie: '"Free Healthcare"', reality: 'The "healthcare" was observation and data collection. Researchers performed painful and dangerous spinal taps (lumbar punctures) as diagnostic procedures while telling men it was a "special treatment."' },
    { lie: '"Six Months" Study', reality: 'Originally planned for 6-9 months, the study continued for 40 years because researchers wanted to study subjects until death and perform autopsies.' },
    { lie: '"No Available Treatment"', reality: 'Penicillin became the standard cure for syphilis in 1947. The USPHS not only refused to provide it but actively prevented subjects from receiving treatment at other facilities, including blocking draft treatment during WWII.' },
    { lie: '"Burial Stipend"', reality: 'Participants\' families were offered $50 burial stipends in exchange for consent to autopsy — the researchers needed to examine the ravages of untreated syphilis on their bodies.' },
  ],
  keyFigures: [
    { name: 'Taliaferro Clark', role: 'USPHS officer who conceived and initiated the study in 1932', status: 'Deceased — retired shortly after study began' },
    { name: 'Raymond Vonderlehr', role: 'USPHS director who expanded the study and made it long-term. Developed the deception protocols.', status: 'Deceased — Never held accountable' },
    { name: 'John Heller', role: 'USPHS director who continued the study. Said: "The men\'s status did not warrant ethical debate. They were subjects, not patients; clinical material, not sick people."', status: 'Deceased — Never held accountable' },
    { name: 'Eunice Rivers', role: 'Black nurse who served as liaison between researchers and subjects for 40 years. Maintained participants\' trust while facilitating their exploitation.', status: 'Deceased — Complex legacy' },
    { name: 'Peter Buxtun', role: 'USPHS epidemiologist who reported the study to the press after internal complaints were ignored', status: 'Whistleblower — Living' },
    { name: 'Jean Heller', role: 'Associated Press journalist who broke the story publicly on July 25, 1972', status: 'Journalist who exposed the study' },
    { name: 'Fred Gray', role: 'Civil rights attorney who filed the class action lawsuit on behalf of the Tuskegee subjects', href: '/entities/individuals/fred-gray', status: 'Successfully represented victims' },
  ],
  penicillinBetrayal: {
    yearAvailable: '1947',
    yearsWithheld: '25 years (1947-1972)',
    description: 'When penicillin became the standard treatment for syphilis in 1947, the researchers made a deliberate decision to withhold it from participants. They also worked to prevent participants from receiving treatment elsewhere. During World War II, when some participants received draft notices that would have led to mandatory syphilis treatment, researchers worked with the local draft board to exclude them from the military — specifically to prevent them from being cured.',
    additionalDead: 'An estimated 100+ additional deaths occurred between 1947 and 1972 that could have been prevented by penicillin treatment.',
  },
  charges: [
    'Nuremberg Code Violations — Lack of informed consent, deliberate withholding of treatment',
    '18 USC §242 — Deprivation of Rights Under Color of Law (government actors withholding medical care based on race)',
    '18 USC §1111 — Second-Degree Murder (deliberate withholding of lifesaving treatment causing death)',
    'Common Rule / 45 CFR 46 — Created BECAUSE of Tuskegee; researchers violated every principle of ethical research',
    'Geneva Convention Protections — Medical experimentation without consent mirrors war crimes protocols',
    'Civil Rights Act Violations — Racially motivated selection and exploitation of vulnerable Black community',
  ],
  timeline: [
    { date: '1932', event: 'Study begins in Macon County, Alabama. 600 Black men enrolled under false pretenses.' },
    { date: '1934', event: 'First research papers published. Medical community aware of study design.' },
    { date: '1940', event: 'Researchers prevent drafted participants from receiving military-mandated syphilis treatment' },
    { date: '1943', event: 'Henderson Act requires testing and treatment for venereal diseases — Tuskegee subjects exempted' },
    { date: '1947', event: 'Penicillin becomes standard syphilis cure. Researchers DELIBERATELY withhold it from subjects.' },
    { date: '1947', event: 'Nuremberg Code established requiring informed consent for medical experiments. Tuskegee continues.' },
    { date: '1964', event: 'Declaration of Helsinki strengthens medical ethics. Tuskegee subjects still receiving placebos.' },
    { date: '1966', event: 'Peter Buxtun first raises ethical concerns with USPHS. The CDC "Venereal Disease Branch" reviews and authorizes continuation.' },
    { date: '1969', event: 'CDC committee votes unanimously to continue the study' },
    { date: '1972', event: 'Buxtun leaks to AP journalist Jean Heller. Story breaks July 25, causing national outrage.' },
    { date: '1972', event: 'Assistant Secretary for Health & Scientific Affairs terminates the study' },
    { date: '1973', event: 'Fred Gray files class action lawsuit on behalf of participants' },
    { date: '1974', event: '$10 million settlement — living syphilis participants receive $37,500 each; heirs receive $15,000' },
    { date: '1974', event: 'National Research Act creates IRBs (Institutional Review Boards) for human subjects research' },
    { date: '1979', event: 'Belmont Report establishes modern research ethics principles — direct response to Tuskegee' },
    { date: 'May 16, 1997', event: 'President Clinton officially apologizes: "The United States government did something that was wrong—deeply, profoundly, morally wrong."' },
    { date: '2004', event: 'Last Tuskegee participant dies. Government continues healthcare for families.' },
  ],
  legalOutcomes: [
    { defendant: 'US Public Health Service', charge: 'Medical experimentation without consent; withholding treatment', outcome: '$10 million out-of-court settlement (1974)' },
    { defendant: 'Individual USPHS researchers', charge: 'Medical malpractice, civil rights violations', outcome: 'NO individual was EVER criminally charged' },
    { defendant: 'CDC officials who voted to continue', charge: 'Complicity in medical abuse', outcome: 'No consequences — careers continued' },
    { defendant: 'US Government', charge: 'Formal acknowledgment of wrongdoing', outcome: 'Presidential apology (1997) — 25 years after exposure' },
  ],
  sources: [
    { title: 'James H. Jones: Bad Blood: The Tuskegee Syphilis Experiment', url: 'https://archive.org/details/badbloodtuskegee00jone', date: '1981/1993' },
    { title: 'CDC: The Tuskegee Timeline', url: 'https://www.cdc.gov/tuskegee/timeline.htm', date: 'Official record' },
    { title: 'Jean Heller Original AP Article', url: 'https://apnews.com/article/tuskegee-syphilis-study-50th-anniversary-f3b39a7984cbbb9c4dee0bfa4e0c7e6f', date: '1972' },
    { title: 'President Clinton\'s Apology', url: 'https://clintonwhitehouse4.archives.gov/New/Remarks/Fri/19970516-898.html', date: '1997' },
    { title: 'Susan Reverby: Examining Tuskegee', url: 'https://uncpress.org/book/9780807833100/examining-tuskegee/', date: '2009' },
    { title: 'National Research Act of 1974 (created by Tuskegee)', url: 'https://www.congress.gov/bill/93rd-congress/house-bill/7724', date: '1974' },
    { title: 'The Belmont Report — Ethical Principles for Human Subjects Research', url: 'https://www.hhs.gov/ohrp/regulations-and-policy/belmont-report/index.html', date: '1979' },
  ],
};

export default function TuskegeeExperimentPage() {
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
          <p className="text-zinc-400 leading-relaxed">{investigation.summary}</p>
        </motion.div>

        {/* Scale */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="border-2 border-red-800/60 bg-red-950/20 p-6 mb-8">
          <h2 className="text-xl font-bold text-white uppercase tracking-wider mb-4 flex items-center gap-2"><Heart className="w-5 h-5 text-red-500" />Scale of Atrocity</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {Object.entries(investigation.scale).map(([key, val]) => (
              <div key={key} className="text-center p-4 border border-red-500/30 bg-red-950/30">
                <p className="text-2xl font-black text-red-500">{val}</p>
                <p className="text-xs text-zinc-400 capitalize">{key.replace(/([A-Z])/g, ' $1').trim()}</p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Penicillin Betrayal */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.15 }} className="border-2 border-red-800/60 bg-red-950/20 p-6 mb-8">
          <h2 className="text-xl font-bold text-white uppercase tracking-wider mb-4 flex items-center gap-2">
            <Syringe className="w-5 h-5 text-red-500" />
            The Penicillin Betrayal: 25 Years of Preventable Death
          </h2>
          <div className="grid md:grid-cols-3 gap-4 mb-4">
            <div className="text-center p-4 border border-red-500/30 bg-red-950/30"><p className="text-lg font-black text-red-500">Cure Available: {investigation.penicillinBetrayal.yearAvailable}</p></div>
            <div className="text-center p-4 border border-red-500/30 bg-red-950/30"><p className="text-lg font-black text-red-500">{investigation.penicillinBetrayal.yearsWithheld}</p></div>
            <div className="text-center p-4 border border-red-500/30 bg-red-950/30"><p className="text-lg font-black text-red-500">{investigation.penicillinBetrayal.additionalDead}</p></div>
          </div>
          <p className="text-sm text-zinc-300">{investigation.penicillinBetrayal.description}</p>
        </motion.div>

        {/* Deceptions */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.18 }} className="glass-card p-6 mb-8 border-l-4 border-blood-600">
          <h2 className="text-xl font-bold text-white uppercase tracking-wider mb-4">The Lies They Told</h2>
          <div className="space-y-3">
            {investigation.deceptions.map((d, idx) => (
              <div key={idx} className="p-4 bg-zinc-900/50 border border-zinc-800">
                <p className="font-bold text-blood-400 text-sm">{d.lie}</p>
                <p className="text-sm text-zinc-300 mt-2">{d.reality}</p>
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
              <h2 className="text-xl font-bold text-white uppercase tracking-wider mb-4 flex items-center gap-2"><AlertTriangle className="w-5 h-5 text-red-500" />Applicable Charges & Statutes</h2>
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
              <h3 className="text-lg font-bold text-white uppercase tracking-wider mb-4 flex items-center gap-2"><FileText className="w-4 h-4 text-blood-500" />Sources</h3>
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
