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
  MapPin,
} from 'lucide-react';
import GlitchText from '@/components/effects/GlitchText';

const investigation = {
  title: 'Fake Electors Scheme',
  subtitle: 'The Seven-State Conspiracy to Steal the Presidency',
  severity: 'critical',
  status: 'Prosecutions Ongoing',
  summary: 'In seven states Biden won (Arizona, Georgia, Michigan, Nevada, New Mexico, Pennsylvania, Wisconsin), Trump allies organized fake slates of electors to sign fraudulent certificates claiming Trump had won. These were submitted to Congress and the National Archives in a coordinated scheme to give Mike Pence a pretext to reject the real electoral votes on January 6, 2021.',
  states: [
    { name: 'Georgia', electors: 16, status: 'RICO charges filed', prosecuted: true },
    { name: 'Michigan', electors: 16, status: 'Charges filed against 16 fake electors', prosecuted: true },
    { name: 'Arizona', electors: 11, status: 'AG investigation, charges filed', prosecuted: true },
    { name: 'Nevada', electors: 6, status: 'AG investigation, charges filed', prosecuted: true },
    { name: 'Wisconsin', electors: 10, status: 'Civil settlement reached', prosecuted: false },
    { name: 'Pennsylvania', electors: 20, status: 'Federal investigation only', prosecuted: false },
    { name: 'New Mexico', electors: 5, status: 'Federal investigation only', prosecuted: false },
  ],
  keyFigures: [
    { name: 'Kenneth Chesebro', role: 'Architect - Wrote memos outlining scheme', href: '/entities/individuals/kenneth-chesebro', status: 'Pled Guilty (GA)' },
    { name: 'John Eastman', role: 'Legal architect - Pushed scheme to Pence', href: '/entities/individuals/john-eastman', status: 'Indicted, Disbarred' },
    { name: 'Donald Trump', role: 'Directed scheme, pressured Pence to execute', href: '/entities/individuals/donald-trump', status: 'Indicted (Federal, GA)' },
    { name: 'Rudy Giuliani', role: 'Coordinated fake elector meetings', href: '/entities/individuals/rudy-giuliani', status: 'Indicted (GA, AZ)' },
    { name: 'Mark Meadows', role: 'White House coordination', href: '/entities/individuals/mark-meadows', status: 'Indicted (GA)' },
    { name: 'Boris Epshteyn', role: 'Coordinated state-level implementation', href: '/entities/individuals/boris-epshteyn', status: 'Indicted (AZ)' },
    { name: 'Mike Pence', role: 'Refused to accept fake electors on January 6', href: '/entities/individuals/mike-pence', status: 'Key Witness' },
  ],
  timeline: [
    { date: 'Nov 3, 2020', event: 'Election Day - Biden wins all seven targeted states' },
    { date: 'Nov 18, 2020', event: 'Chesebro writes first memo outlining fake electors plan' },
    { date: 'Dec 6, 2020', event: 'Chesebro memo proposes submitting alternate electors' },
    { date: 'Dec 9, 2020', event: 'Trump campaign begins organizing fake elector meetings' },
    { date: 'Dec 13, 2020', event: 'RNC helps coordinate fake elector gatherings' },
    { date: 'Dec 14, 2020', event: 'Real Electoral College meets - Biden wins 306-232' },
    { date: 'Dec 14, 2020', event: 'Fake electors meet in all 7 states, sign fraudulent certificates' },
    { date: 'Dec 14, 2020', event: 'Fake certificates sent to Congress and National Archives' },
    { date: 'Dec 23, 2020', event: 'Eastman memo details how Pence could use fake slates' },
    { date: 'Jan 4, 2021', event: 'Eastman briefs Trump and Pence on plan' },
    { date: 'Jan 5, 2021', event: 'Trump pressures Pence to accept fake electors' },
    { date: 'Jan 6, 2021', event: 'Pence refuses to accept fake slates, certifies Biden' },
    { date: 'Aug 2023', event: 'Trump indicted federally for fake electors scheme' },
    { date: 'Aug 2023', event: 'Georgia RICO indictment includes fake electors charges' },
    { date: 'Oct 2023', event: 'Chesebro pleads guilty in Georgia' },
    { date: '2024', event: 'Arizona, Michigan, Nevada file charges against fake electors' },
  ],
  charges: [
    { statute: '18 U.S.C. § 371', description: 'Conspiracy to defraud the United States', jurisdiction: 'Federal' },
    { statute: 'O.C.G.A. § 16-14-4', description: 'Georgia RICO - Pattern of racketeering activity', jurisdiction: 'Georgia' },
    { statute: '18 U.S.C. § 1512', description: 'Obstruction of official proceeding', jurisdiction: 'Federal' },
    { statute: 'Forgery statutes', description: 'Creating fraudulent electoral certificates', jurisdiction: 'Multiple States' },
    { statute: 'Election fraud statutes', description: 'Submitting false election documents', jurisdiction: 'Multiple States' },
  ],
  evidence: [
    'Chesebro memos outlining entire scheme',
    'Eastman memos to Trump and Pence',
    'Fake electoral certificates with forged signatures',
    'Emails coordinating fake elector meetings',
    'Video of fake electors signing documents',
    'Text messages between conspirators',
    'Testimony from cooperating fake electors',
    'RNC coordination documents',
  ],
  fraudulentDocs: [
    { state: 'Georgia', submitted: true, target: 'Congress & National Archives' },
    { state: 'Michigan', submitted: true, target: 'Congress & National Archives' },
    { state: 'Arizona', submitted: true, target: 'Congress & National Archives' },
    { state: 'Nevada', submitted: true, target: 'Congress & National Archives' },
    { state: 'Wisconsin', submitted: true, target: 'Congress & National Archives' },
    { state: 'Pennsylvania', submitted: true, target: 'Congress & National Archives' },
    { state: 'New Mexico', submitted: true, target: 'Congress & National Archives' },
  ],
  sources: [
    { title: 'DOJ Jack Smith January 6 Indictment', url: 'https://www.justice.gov/storage/US_v_Trump_23_cr_257.pdf', date: '2023' },
      { title: 'Georgia RICO Indictment', url: 'https://web.archive.org/web/*/https://int.nyt.com/data/documenttools/ga-trump-indictment/daed97d37562a76f/full.pdf', date: '2023' }, // TODO: dead link — no archive found (check scripts/404-replacements.json)
    { title: 'January 6 Committee Final Report', url: 'https://www.govinfo.gov/content/pkg/GPO-J6-REPORT/pdf/GPO-J6-REPORT.pdf', date: '2022' },
    { title: 'Michigan AG Fake Electors Charges', url: 'https://www.michigan.gov/ag/news/press-releases/2023/07/18/ag-nessel-charges-16-individuals-as-false-electors', date: '2023' },
    { title: 'Arizona AG Fake Electors Indictment', url: 'https://www.azag.gov/', date: '2024' },
    { title: 'Nevada AG Fake Electors Charges', url: 'https://ag.nv.gov/', date: '2024' },
  ],
};

export default function FakeElectorsPage() {
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

        {/* States Map */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="border-2 border-zinc-800 bg-black/80 p-6 mb-8"
        >
          <h2 className="text-xl font-bold text-white uppercase tracking-wider mb-4 flex items-center gap-2">
            <MapPin className="w-5 h-5 text-blood-500" />
            Seven Targeted States
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {investigation.states.map((state, idx) => (
              <div key={idx} className={`p-4 border ${state.prosecuted ? 'border-red-500/30 bg-red-950/20' : 'border-zinc-800 bg-zinc-900/20'}`}>
                <p className="text-lg font-bold text-white">{state.name}</p>
                <p className="text-2xl font-black text-blood-500">{state.electors}</p>
                <p className="text-xs text-zinc-500">Electoral Votes</p>
                <p className={`text-xs mt-2 ${state.prosecuted ? 'text-red-400' : 'text-zinc-500'}`}>
                  {state.status}
                </p>
              </div>
            ))}
            <div className="p-4 border border-blood-500/30 bg-blood-950/20">
              <p className="text-lg font-bold text-white">TOTAL</p>
              <p className="text-2xl font-black text-blood-500">84</p>
              <p className="text-xs text-zinc-500">Fake Electors</p>
              <p className="text-xs mt-2 text-blood-400">Multi-State Conspiracy</p>
            </div>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Key Figures */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="glass-card p-6"
            >
              <h2 className="text-xl font-bold text-white uppercase tracking-wider mb-4 flex items-center gap-2">
                <Users className="w-5 h-5 text-blood-500" />
                Key Figures
              </h2>
              <div className="space-y-3">
                {investigation.keyFigures.map((figure, idx) => (
                  <div key={idx} className="flex items-start justify-between p-3 bg-zinc-900/50 border border-zinc-800">
                    <div className="flex-1">
                      {figure.href ? (
                        <Link href={figure.href} className="font-bold text-blood-400 hover:text-blood-300 transition-colors">
                          {figure.name}
                        </Link>
                      ) : (
                        <span className="font-bold text-white">{figure.name}</span>
                      )}
                      <p className="text-sm text-zinc-400 mt-1">{figure.role}</p>
                    </div>
                    <span className="text-xs px-2 py-1 bg-red-500/20 text-red-400 border border-red-500/30">
                      {figure.status}
                    </span>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* How It Worked */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.25 }}
              className="glass-card p-6 border-l-4 border-blood-600"
            >
              <h2 className="text-xl font-bold text-white uppercase tracking-wider mb-4 flex items-center gap-2">
                <AlertTriangle className="w-5 h-5 text-blood-500" />
                How The Scheme Worked
              </h2>
              <div className="space-y-4 text-sm text-zinc-400">
                <div className="p-3 bg-zinc-900/50 border-l-2 border-blood-500">
                  <p className="font-bold text-white mb-1">Step 1: Organize Fake Electors</p>
                  <p>Trump campaign organized willing Republicans in each state to pose as official electors</p>
                </div>
                <div className="p-3 bg-zinc-900/50 border-l-2 border-blood-500">
                  <p className="font-bold text-white mb-1">Step 2: Sign Fraudulent Certificates</p>
                  <p>On December 14, 2020, fake electors met and signed certificates falsely claiming Trump won</p>
                </div>
                <div className="p-3 bg-zinc-900/50 border-l-2 border-blood-500">
                  <p className="font-bold text-white mb-1">Step 3: Submit to Government</p>
                  <p>Fake certificates were mailed to Congress and the National Archives</p>
                </div>
                <div className="p-3 bg-zinc-900/50 border-l-2 border-blood-500">
                  <p className="font-bold text-white mb-1">Step 4: Pressure Pence</p>
                  <p>Plan required Pence to either accept fake slates or claim ambiguity to delay certification</p>
                </div>
                <div className="p-3 bg-zinc-900/50 border-l-2 border-green-500">
                  <p className="font-bold text-white mb-1">Step 5: Pence Refused</p>
                  <p>On January 6, Pence rejected the scheme, certified Biden&apos;s victory, and mob attacked Capitol</p>
                </div>
              </div>
            </motion.div>

            {/* Timeline */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="glass-card p-6"
            >
              <h2 className="text-xl font-bold text-white uppercase tracking-wider mb-4 flex items-center gap-2">
                <Calendar className="w-5 h-5 text-blood-500" />
                Timeline
              </h2>
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
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Charges */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              className="glass-card p-6"
            >
              <h3 className="text-lg font-bold text-white uppercase tracking-wider mb-4 flex items-center gap-2">
                <Scale className="w-5 h-5 text-blood-500" />
                Criminal Charges
              </h3>
              <div className="space-y-3">
                {investigation.charges.map((charge, idx) => (
                  <div key={idx} className="p-3 bg-zinc-900/50 border border-zinc-800">
                    <code className="text-xs text-blood-400 font-mono">{charge.statute}</code>
                    <p className="text-sm text-zinc-300 mt-1">{charge.description}</p>
                    <p className="text-xs text-zinc-500 mt-1">{charge.jurisdiction}</p>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Evidence */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.1 }}
              className="glass-card p-6"
            >
              <h3 className="text-lg font-bold text-white uppercase tracking-wider mb-4 flex items-center gap-2">
                <FileText className="w-5 h-5 text-blood-500" />
                Key Evidence
              </h3>
              <ul className="space-y-2">
                {investigation.evidence.map((item, idx) => (
                  <li key={idx} className="text-sm text-zinc-400 flex items-start gap-2">
                    <span className="text-blood-500">•</span>
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Sources */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="glass-card p-6"
            >
              <h3 className="text-lg font-bold text-white uppercase tracking-wider mb-4">
                Sources
              </h3>
              <div className="space-y-2">
                {investigation.sources.map((source, idx) => (
                  <a
                    key={idx}
                    href={source.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-start gap-2 p-2 text-sm text-zinc-400 hover:text-blood-400 hover:bg-zinc-900/50 transition-colors"
                  >
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
