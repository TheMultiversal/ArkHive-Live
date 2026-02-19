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
  Baby,
  Heart,
} from 'lucide-react';
import GlitchText from '@/components/effects/GlitchText';

const investigation = {
  title: 'Family Separation Crisis',
  subtitle: 'Zero Tolerance: Caged Children & Lost Families',
  severity: 'critical',
  status: 'Ongoing Humanitarian Crisis',
  summary: 'The Trump administration\'s "zero tolerance" policy deliberately separated thousands of children from their parents at the U.S.-Mexico border, placing children, including infants, in cages in detention facilities. Internal documents reveal the policy was designed as a deterrent through cruelty. Years later, hundreds of children remain separated from their families, some may never be reunited.',
  statistics: {
    childrenSeparated: '5,500+ children separated',
    stillSeparated: '1,000+ children still not reunited with families',
    infantsSeparated: 'Children as young as 4 months old separated',
    averageSeparation: 'Average separation: 47 days (some over 2 years)',
    deathsInCustody: '7 children died in CBP custody 2018-2019',
  },
  keyFigures: [
    { name: 'Donald Trump', role: 'Ordered zero tolerance policy, signed executive order after outcry', href: '/entities/individuals/donald-trump', status: 'Policy architect' },
    { name: 'Jeff Sessions', role: 'Announced zero tolerance, quoted Bible to justify separations', href: '/entities/individuals/jeff-sessions', status: 'Policy implementer' },
    { name: 'Stephen Miller', role: 'White House advisor, chief architect of family separation policy', href: '/entities/individuals/stephen-miller', status: 'Policy architect' },
    { name: 'Kirstjen Nielsen', role: 'DHS Secretary, denied policy existed then defended it', href: '/entities/individuals/kirstjen-nielsen', status: 'Policy implementer' },
    { name: 'John Kelly', role: 'Chief of Staff, proposed separation as deterrent', href: '/entities/individuals/john-kelly', status: 'Proposed policy' },
  ],
  childDeaths: [
    { name: 'Jakelin Caal Maquin', age: 7, date: 'Dec 8, 2018', cause: 'Bacterial infection after hours without medical care' },
    { name: 'Felipe Gómez Alonzo', age: 8, date: 'Dec 24, 2018', cause: 'Flu, died on Christmas Eve' },
    { name: 'Juan de León Gutiérrez', age: 16, date: 'Apr 30, 2019', cause: 'Brain swelling, infection' },
    { name: 'Wilmer Josué Ramírez Vásquez', age: 2, date: 'May 14, 2019', cause: 'Pneumonia' },
    { name: 'Carlos Hernandez Vasquez', age: 16, date: 'May 20, 2019', cause: 'Flu, found dead in cell' },
  ],
  conditions: [
    'Children held in chain-link enclosures (termed "cages")',
    'Mylar blankets on concrete floors for sleeping',
    'Lights on 24 hours a day',
    'Limited access to showers, toothbrushes, soap',
    'Children forced to care for younger children',
    'Infants and toddlers separated from parents',
    'No tracking system to reunite families',
  ],
  sessionsQuote: {
    quote: 'I would cite you to the Apostle Paul and his clear and wise command in Romans 13, to obey the laws of the government because God has ordained the government for his purposes.',
    date: 'June 14, 2018',
    context: 'Justifying family separation using the same Bible verse used to defend slavery',
  },
  millerEmails: {
    description: 'Leaked emails revealed Stephen Miller pushed white nationalist content and drove family separation',
    revelations: [
      'Promoted white nationalist literature and websites',
      'Pushed for faster, more aggressive separations',
      'Sought to remove legal protections for immigrant children',
      'Proposed denying asylum to domestic violence survivors',
    ],
  },
  timeline: [
    { date: 'Feb 2017', event: 'DHS Secretary Kelly proposes family separation as deterrent' },
    { date: 'Apr 2017', event: 'DOJ pilot program separates families in El Paso' },
    { date: 'Apr 6, 2018', event: 'Sessions announces "zero tolerance" policy' },
    { date: 'May 2018', event: 'Separations increase dramatically; no tracking system exists' },
    { date: 'Jun 2018', event: 'Audio of crying children in detention center released' },
    { date: 'Jun 14, 2018', event: 'Sessions cites Bible to justify separations' },
    { date: 'Jun 17, 2018', event: 'Photos of children in cages spark global outrage' },
    { date: 'Jun 20, 2018', event: 'Trump signs executive order "ending" separations (continues anyway)' },
    { date: 'Jun 26, 2018', event: 'Federal judge orders families reunified within 30 days' },
    { date: 'Jul 2018', event: 'Deadline missed; government admits it can\'t find all parents' },
    { date: 'Dec 2018', event: 'First child dies in CBP custody (Jakelin Caal Maquin)' },
    { date: 'Dec 2018', event: 'Second child dies on Christmas Eve (Felipe Gómez Alonzo)' },
    { date: 'Jan 2019', event: 'HHS IG reveals thousands more separated than disclosed' },
    { date: 'May 2019', event: 'Three more children die in custody' },
    { date: 'Nov 2019', event: 'Stephen Miller\'s white nationalist emails leaked' },
    { date: 'Jan 2021', event: 'Biden creates task force to reunify families' },
    { date: '2023', event: 'Hundreds of children still not reunited' },
  ],
  legalFindings: [
    { finding: 'Policy violated constitutional rights', source: 'ACLU v. DHS ruling' },
    { finding: 'Government failed to track separated families', source: 'HHS Inspector General' },
    { finding: 'Conditions violated Flores Settlement', source: 'Federal court' },
    { finding: 'Deliberate cruelty as deterrent', source: 'Internal documents' },
  ],
  sources: [
    { title: 'HHS Inspector General Report', url: 'https://oig.hhs.gov/oei/reports/oei-BL-18-00511.pdf', date: '2019' },
    { title: 'ACLU Family Separation Report', url: 'https://www.aclu.org/report/family-separation-by-the-numbers', date: '2020' },
    { title: 'Ms. L v. ICE (Class Action)', url: 'https://www.aclu.org/cases/ms-l-v-ice', date: '2018' },
    { title: 'Stephen Miller Emails (SPLC)', url: 'https://www.splcenter.org/stephen-miller-emails-hatewatch', date: '2019' },
    { title: 'DHS IG Report on Child Deaths', url: 'https://www.oig.dhs.gov/sites/default/files/assets/2019-09/OIG-19-63-Sep19.pdf', date: '2019' },
    { title: 'Flores Settlement Agreement', url: 'https://www.aclu.org/legal-document/flores-v-reno-settlement-agreement', date: '1997' },
  ],
};

export default function FamilySeparationPage() {
  return (
    <div className="min-h-screen pt-20 lg:pt-24 pb-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <Link
          href="/investigations"
          className="inline-flex items-center gap-2 text-zinc-400 hover:text-blood-500 transition-colors mb-6 pt-4"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Investigations
        </Link>

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="border-2 border-blood-800/60 bg-black/80 p-6 lg:p-8 mb-8"
        >
          <div className="flex items-center gap-3 mb-4">
            <span className="px-3 py-1 text-xs font-bold uppercase border border-red-500/30 bg-red-500/20 text-red-400">
              {investigation.severity}
            </span>
            <span className="px-3 py-1 text-xs font-bold uppercase border border-yellow-500/30 bg-yellow-500/20 text-yellow-400">
              {investigation.status}
            </span>
          </div>
          <h1 className="text-3xl lg:text-4xl font-black text-white uppercase tracking-wider mb-2">
            <GlitchText text={investigation.title} />
          </h1>
          <p className="text-lg text-blood-500 font-bold mb-4">{investigation.subtitle}</p>
          <p className="text-zinc-400 leading-relaxed">{investigation.summary}</p>
        </motion.div>

        {/* Statistics */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="border-2 border-red-800/60 bg-red-950/20 p-6 mb-8"
        >
          <h2 className="text-xl font-bold text-white uppercase tracking-wider mb-4 flex items-center gap-2">
            <Baby className="w-5 h-5 text-red-500" />
            Human Cost
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            <div className="border border-red-800/50 bg-black/50 p-4 text-center">
              <p className="text-3xl font-bold text-red-500">{investigation.statistics.childrenSeparated}</p>
              <p className="text-sm text-zinc-400">Children Separated</p>
            </div>
            <div className="border border-red-800/50 bg-black/50 p-4 text-center">
              <p className="text-3xl font-bold text-red-500">{investigation.statistics.stillSeparated}</p>
              <p className="text-sm text-zinc-400">Still Not Reunited</p>
            </div>
            <div className="border border-red-800/50 bg-black/50 p-4 text-center">
              <p className="text-3xl font-bold text-red-500">{investigation.statistics.deathsInCustody}</p>
              <p className="text-sm text-zinc-400">Deaths in Custody</p>
            </div>
          </div>
          <div className="mt-4 grid grid-cols-2 gap-4">
            <div className="border border-zinc-700 bg-black/50 p-3">
              <p className="text-zinc-300">{investigation.statistics.infantsSeparated}</p>
            </div>
            <div className="border border-zinc-700 bg-black/50 p-3">
              <p className="text-zinc-300">{investigation.statistics.averageSeparation}</p>
            </div>
          </div>
        </motion.div>

        {/* Sessions Quote */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15 }}
          className="border-2 border-yellow-800/60 bg-yellow-950/20 p-6 mb-8"
        >
          <h2 className="text-xl font-bold text-white uppercase tracking-wider mb-4 flex items-center gap-2">
            <AlertTriangle className="w-5 h-5 text-yellow-500" />
            Biblical Justification - {investigation.sessionsQuote.date}
          </h2>
          <div className="border border-yellow-800/50 bg-black/50 p-4">
            <p className="text-zinc-300 italic">&quot;{investigation.sessionsQuote.quote}&quot;</p>
            <p className="text-xs text-zinc-500 mt-2">- Jeff Sessions, Attorney General</p>
            <p className="text-sm text-red-400 mt-2">{investigation.sessionsQuote.context}</p>
          </div>
        </motion.div>

        {/* Child Deaths */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="border-2 border-red-900/80 bg-red-950/30 p-6 mb-8"
        >
          <h2 className="text-xl font-bold text-white uppercase tracking-wider mb-4 flex items-center gap-2">
            <Heart className="w-5 h-5 text-red-500" />
            Children Who Died in Custody
          </h2>
          <div className="space-y-3">
            {investigation.childDeaths.map((child, idx) => (
              <div key={idx} className="border border-red-800/50 bg-black/50 p-4">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="font-bold text-white">{child.name}, {child.age}</h3>
                  <span className="text-xs text-zinc-400">{child.date}</span>
                </div>
                <p className="text-sm text-zinc-400">{child.cause}</p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Key Figures */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.25 }}
          className="border-2 border-zinc-800 bg-black/60 p-6 mb-8"
        >
          <h2 className="text-xl font-bold text-white uppercase tracking-wider mb-4 flex items-center gap-2">
            <Users className="w-5 h-5 text-blood-500" />
            Key Figures
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {investigation.keyFigures.map((figure, idx) => (
              <Link
                key={idx}
                href={figure.href}
                className="border border-zinc-700 bg-zinc-900/50 p-4 hover:border-blood-600 transition-colors group"
              >
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="font-bold text-white group-hover:text-blood-500">{figure.name}</h3>
                    <p className="text-sm text-zinc-400">{figure.role}</p>
                  </div>
                  <span className="text-xs text-red-400">{figure.status}</span>
                </div>
              </Link>
            ))}
          </div>
        </motion.div>

        {/* Conditions */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="border-2 border-zinc-800 bg-black/60 p-6 mb-8"
        >
          <h2 className="text-xl font-bold text-white uppercase tracking-wider mb-4">
            Detention Conditions
          </h2>
          <div className="space-y-2">
            {investigation.conditions.map((condition, idx) => (
              <div key={idx} className="flex items-start gap-2 text-zinc-300 border border-zinc-700 bg-zinc-900/50 p-3">
                <span className="text-blood-500">■</span>
                {condition}
              </div>
            ))}
          </div>
        </motion.div>

        {/* Stephen Miller Emails */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.35 }}
          className="border-2 border-zinc-800 bg-black/60 p-6 mb-8"
        >
          <h2 className="text-xl font-bold text-white uppercase tracking-wider mb-4">
            Stephen Miller Leaked Emails
          </h2>
          <p className="text-zinc-400 mb-4">{investigation.millerEmails.description}</p>
          <div className="space-y-2">
            {investigation.millerEmails.revelations.map((rev, idx) => (
              <div key={idx} className="flex items-start gap-2 text-zinc-300 border border-zinc-700 bg-zinc-900/50 p-3">
                <span className="text-red-500">■</span>
                {rev}
              </div>
            ))}
          </div>
        </motion.div>

        {/* Timeline */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="border-2 border-zinc-800 bg-black/60 p-6 mb-8"
        >
          <h2 className="text-xl font-bold text-white uppercase tracking-wider mb-4 flex items-center gap-2">
            <Calendar className="w-5 h-5 text-blood-500" />
            Timeline
          </h2>
          <div className="space-y-4 max-h-96 overflow-y-auto pr-2">
            {investigation.timeline.map((item, idx) => (
              <div key={idx} className="flex gap-4 border-l-2 border-zinc-700 pl-4 hover:border-blood-500 transition-colors">
                <span className="text-blood-500 font-mono text-sm whitespace-nowrap min-w-[100px]">{item.date}</span>
                <span className="text-zinc-300">{item.event}</span>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Sources */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.45 }}
          className="border-2 border-zinc-800 bg-black/60 p-6"
        >
          <h2 className="text-xl font-bold text-white uppercase tracking-wider mb-4 flex items-center gap-2">
            <FileText className="w-5 h-5 text-blood-500" />
            Sources & Documentation
          </h2>
          <div className="space-y-3">
            {investigation.sources.map((source, idx) => (
              <a
                key={idx}
                href={source.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between border border-zinc-700 bg-zinc-900/50 p-3 hover:border-blood-600 transition-colors group"
              >
                <div>
                  <h3 className="text-zinc-300 group-hover:text-blood-500 transition-colors">{source.title}</h3>
                  <p className="text-xs text-zinc-500">{source.date}</p>
                </div>
                <ExternalLink className="w-4 h-4 text-zinc-500 group-hover:text-blood-500" />
              </a>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}
