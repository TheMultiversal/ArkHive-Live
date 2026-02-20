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
  FolderOpen,
  Shield,
} from 'lucide-react';
import GlitchText from '@/components/effects/GlitchText';

const investigation = {
  title: 'Mar-a-Lago Classified Documents',
  subtitle: 'Willful Retention of National Defense Information',
  severity: 'critical',
  status: 'Indictment Dismissed - Appeal Pending',
  summary: 'After leaving office, Donald Trump illegally retained hundreds of classified documents at his Mar-a-Lago residence, including some of the nation\'s most sensitive national defense secrets. Despite multiple requests to return the documents, Trump refused, hid them from FBI and his own lawyers, and caused them to be moved to obstruct the investigation. He was indicted on 40 federal counts but the case was dismissed by Judge Aileen Cannon, a ruling under appeal.',
  documentBreakdown: {
    total: '300+ classified documents recovered',
    topSecret: '90+ documents marked TOP SECRET',
    sci: '18 documents marked TOP SECRET/SCI (Special Compartmented Information)',
    humanSources: 'Documents revealing identities of human intelligence sources',
    militaryPlans: 'War plans, nuclear capabilities information',
    locations: 'Documents found in ballroom, bathroom, bedroom, storage room',
  },
  keyFigures: [
    { name: 'Donald Trump', role: 'Retained classified documents, directed obstruction', href: '/entities/individuals/donald-trump', status: 'Indicted (40 counts)' },
    { name: 'Walt Nauta', role: 'Trump valet, moved boxes to hide from FBI/lawyers', href: '/entities/individuals/walt-nauta', status: 'Indicted' },
    { name: 'Carlos De Oliveira', role: 'Mar-a-Lago property manager, attempted to delete security footage', href: '/entities/individuals/carlos-de-oliveira', status: 'Indicted' },
    { name: 'Evan Corcoran', role: 'Trump attorney, recorded describing Trump\'s instructions', href: '/entities/individuals/evan-corcoran', status: 'Witness (crime-fraud exception)' },
  ],
  obstructionActs: [
    { act: 'Hiding boxes from FBI', detail: 'Directed Nauta to move 64 boxes before FBI visit', evidence: 'Video surveillance, texts' },
    { act: 'Lying through lawyers', detail: 'Caused lawyer to sign false certification that all documents returned', evidence: 'Attorney testimony, recordings' },
    { act: 'Showing classified documents', detail: 'Showed classified war plans to visitors at Bedminster', evidence: 'Audio recording by Trump' },
    { act: 'Attempting to delete footage', detail: 'Asked IT staffer to delete security camera footage', evidence: 'Witness testimony' },
    { act: 'Refusing subpoena', detail: 'Failed to comply with grand jury subpoena for documents', evidence: 'Timeline, subsequent search' },
  ],
  charges: [
    { count: '1-31', statute: '18 U.S.C. § 793(e)', description: 'Willful retention of national defense information', max: '10 years each' },
    { count: '32', statute: '18 U.S.C. § 1512(k)', description: 'Conspiracy to obstruct justice', max: '20 years' },
    { count: '33', statute: '18 U.S.C. § 1512(b)(2)(A)', description: 'Withholding documents from federal investigation', max: '20 years' },
    { count: '34', statute: '18 U.S.C. § 1512(c)(1)', description: 'Corruptly concealing documents', max: '20 years' },
    { count: '35', statute: '18 U.S.C. § 1519', description: 'Concealing documents in federal investigation', max: '20 years' },
    { count: '36', statute: '18 U.S.C. § 1001(a)(1)', description: 'Scheme to conceal', max: '5 years' },
    { count: '37', statute: '18 U.S.C. § 1001(a)(2)', description: 'False statements and representations', max: '5 years' },
    { count: '38-40', statute: '18 U.S.C. § 793(e)', description: 'Additional willful retention counts (superseding)', max: '10 years each' },
  ],
  timeline: [
    { date: 'Jan 20, 2021', event: 'Trump leaves office, takes 15 boxes of records to Mar-a-Lago' },
    { date: 'May 2021', event: 'National Archives realizes presidential records missing, requests return' },
    { date: 'Jun-Dec 2021', event: 'Multiple requests from Archives; Trump refuses to return documents' },
    { date: 'Jan 2022', event: 'Archives retrieves 15 boxes; finds 184 classified documents' },
    { date: 'Feb 2022', event: 'Archives refers matter to DOJ for criminal investigation' },
    { date: 'Apr 2022', event: 'FBI opens criminal investigation' },
    { date: 'May 2022', event: 'Grand jury subpoena issued for all classified documents' },
    { date: 'Jun 2, 2022', event: 'Trump lawyer visits Mar-a-Lago to search for documents' },
    { date: 'Jun 2, 2022', event: 'Before lawyer arrives, Nauta moves 64 boxes out of storage room' },
    { date: 'Jun 3, 2022', event: 'Trump lawyer provides 38 documents, signs false certification' },
    { date: 'Jul 2022', event: 'Trump shows classified Iran war plans to visitors at Bedminster (recorded)' },
    { date: 'Aug 8, 2022', event: 'FBI executes search warrant at Mar-a-Lago' },
    { date: 'Aug 8, 2022', event: 'FBI finds 102 more classified documents in Trump\'s office and storage' },
    { date: 'Aug 2022', event: 'Trump aide asks IT staffer to delete security footage' },
    { date: 'Nov 2022', event: 'Jack Smith appointed Special Counsel' },
    { date: 'Mar 2023', event: 'Crime-fraud exception pierces attorney-client privilege' },
    { date: 'Jun 8, 2023', event: 'Trump indicted on 37 counts' },
    { date: 'Jul 27, 2023', event: 'Superseding indictment adds Carlos De Oliveira, 3 counts' },
    { date: 'Jul 2024', event: 'Judge Cannon dismisses case (Special Counsel "unlawfully appointed")' },
    { date: 'Aug 2024', event: 'DOJ appeals dismissal to 11th Circuit' },
  ],
  keyEvidence: [
    { type: 'Audio Recording', description: 'Trump recorded showing classified document: "This is secret information. Look at this... this was done by the military"' },
    { type: 'Surveillance Video', description: '64 boxes moved out of storage room hours before lawyer\'s search' },
    { type: 'Attorney Notes', description: 'Evan Corcoran\'s contemporaneous recordings describing Trump\'s instructions' },
    { type: 'Photographs', description: 'FBI photos of classified documents on floor, in bathroom, etc.' },
    { type: 'Text Messages', description: 'Communications coordinating box movements' },
  ],
  sources: [
    { title: 'Jack Smith Indictment (37 counts)', url: 'https://www.justice.gov/storage/US_v_Trump-Nauta_23-80101.pdf', date: 'Jun 2023' },
    { title: 'Superseding Indictment (40 counts)', url: 'https://www.justice.gov/storage/US-v-Trump-Nauta-De-Oliveira-23-80101.pdf', date: 'Jul 2023' },
    { title: 'FBI Search Warrant Affidavit', url: 'https://www.justice.gov/d9/press-releases/attachments/2022/08/26/2022.08.30_government_motion_for_court_to_order_that_the_filter_review_team_may_continue_its_review.pdf', date: 'Aug 2022' },
    { title: 'National Archives Letter to Trump', url: 'https://www.archives.gov/files/foia/2022-0311-f-letter-from-nara-to-trump-representatives.pdf', date: '2022' },
    { title: 'Judge Cannon Dismissal Order', url: 'https://storage.courtlistener.com/recap/gov.uscourts.flsd.618763/gov.uscourts.flsd.618763.730.0.pdf', date: 'Jul 2024' },
    { title: 'DOJ Appeal to 11th Circuit', url: 'https://www.justice.gov/storage/US-v-Trump-Nauta-De-Oliveira-23-80101-Appeal.pdf', date: 'Aug 2024' }, // TODO: dead link — no archive found (check scripts/404-replacements.json)
  ],
};

export default function MarALagoDocumentsPage() {
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

        {/* Document Breakdown */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="border-2 border-red-800/60 bg-red-950/20 p-6 mb-8"
        >
          <h2 className="text-xl font-bold text-white uppercase tracking-wider mb-4 flex items-center gap-2">
            <FolderOpen className="w-5 h-5 text-red-500" />
            Classified Documents Breakdown
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="border border-red-800/50 bg-black/50 p-4">
              <p className="text-3xl font-bold text-blood-500">{investigation.documentBreakdown.total}</p>
              <p className="text-sm text-zinc-400">Total Classified Documents</p>
            </div>
            <div className="border border-red-800/50 bg-black/50 p-4">
              <p className="text-3xl font-bold text-blood-500">{investigation.documentBreakdown.topSecret}</p>
              <p className="text-sm text-zinc-400">TOP SECRET Documents</p>
            </div>
            <div className="border border-red-800/50 bg-black/50 p-4">
              <p className="text-3xl font-bold text-blood-500">{investigation.documentBreakdown.sci}</p>
              <p className="text-sm text-zinc-400">TOP SECRET/SCI Documents</p>
            </div>
            <div className="border border-red-800/50 bg-black/50 p-4">
              <p className="text-sm text-zinc-300">{investigation.documentBreakdown.locations}</p>
              <p className="text-sm text-zinc-500 mt-1">Where documents were found</p>
            </div>
          </div>
          <div className="mt-4 space-y-2">
            <div className="border border-red-800/50 bg-black/50 p-3">
              <p className="text-red-400 font-bold">⚠ HUMAN SOURCES</p>
              <p className="text-sm text-zinc-300">{investigation.documentBreakdown.humanSources}</p>
            </div>
            <div className="border border-red-800/50 bg-black/50 p-3">
              <p className="text-red-400 font-bold">⚠ MILITARY PLANS</p>
              <p className="text-sm text-zinc-300">{investigation.documentBreakdown.militaryPlans}</p>
            </div>
          </div>
        </motion.div>

        {/* Key Figures */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15 }}
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

        {/* Obstruction Acts */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="border-2 border-zinc-800 bg-black/60 p-6 mb-8"
        >
          <h2 className="text-xl font-bold text-white uppercase tracking-wider mb-4 flex items-center gap-2">
            <AlertTriangle className="w-5 h-5 text-blood-500" />
            Obstruction Acts
          </h2>
          <div className="space-y-3">
            {investigation.obstructionActs.map((act, idx) => (
              <div key={idx} className="border border-zinc-700 bg-zinc-900/50 p-4">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="font-bold text-white">{act.act}</h3>
                  <span className="text-xs text-blood-500">Evidence: {act.evidence}</span>
                </div>
                <p className="text-sm text-zinc-400">{act.detail}</p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Key Evidence */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.25 }}
          className="border-2 border-yellow-800/60 bg-yellow-950/20 p-6 mb-8"
        >
          <h2 className="text-xl font-bold text-white uppercase tracking-wider mb-4 flex items-center gap-2">
            <Shield className="w-5 h-5 text-yellow-500" />
            Key Evidence
          </h2>
          <div className="space-y-3">
            {investigation.keyEvidence.map((ev, idx) => (
              <div key={idx} className="border border-zinc-700 bg-zinc-900/50 p-4">
                <h3 className="font-bold text-yellow-400 text-sm">{ev.type}</h3>
                <p className="text-sm text-zinc-300">{ev.description}</p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Criminal Charges */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="border-2 border-zinc-800 bg-black/60 p-6 mb-8"
        >
          <h2 className="text-xl font-bold text-white uppercase tracking-wider mb-4 flex items-center gap-2">
            <Scale className="w-5 h-5 text-blood-500" />
            Criminal Charges (40 Counts)
          </h2>
          <div className="space-y-3 max-h-80 overflow-y-auto pr-2">
            {investigation.charges.map((charge, idx) => (
              <div key={idx} className="border border-zinc-700 bg-zinc-900/50 p-4">
                <div className="flex justify-between items-start">
                  <div>
                    <span className="text-blood-500 font-bold mr-2">Count {charge.count}</span>
                    <span className="font-mono text-sm text-zinc-500">{charge.statute}</span>
                    <p className="text-zinc-300 mt-1">{charge.description}</p>
                  </div>
                  <span className="text-xs text-red-400">Max: {charge.max}</span>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Timeline */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.35 }}
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
          transition={{ delay: 0.4 }}
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
