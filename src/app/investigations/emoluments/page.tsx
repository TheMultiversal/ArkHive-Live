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
  Building,
  DollarSign,
} from 'lucide-react';
import GlitchText from '@/components/effects/GlitchText';

const investigation = {
  title: 'Emoluments Violations',
  subtitle: 'Profiting from the Presidency',
  severity: 'high',
  status: 'Cases Dismissed as Moot After Term',
  summary: 'Throughout his presidency, Donald Trump refused to divest from his businesses and accepted payments from foreign governments through his hotels and properties, a direct violation of the Constitution\'s Emoluments Clauses. Foreign governments, state governments, and political groups spent millions at Trump properties, effectively paying the President for access and influence.',
  constitutionalProvisions: [
    { clause: 'Foreign Emoluments Clause (Art. I, Sec. 9)', text: 'No Person holding any Office of Profit or Trust under them, shall, without the Consent of the Congress, accept of any present, Emolument, Office, or Title, of any kind whatever, from any King, Prince, or foreign State.' },
    { clause: 'Domestic Emoluments Clause (Art. II, Sec. 1)', text: 'The President shall not receive...any other Emolument from the United States, or any of them.' },
  ],
  trumpHotelDC: {
    opened: 'September 12, 2016 (lease from GSA for Old Post Office)',
    lease: 'GSA lease prohibited any elected official from benefiting from the lease',
    conflict: 'Trump profited from a government lease while overseeing the agency that administered it',
    foreignSpending: [
      { country: 'Saudi Arabia', payments: 'Hundreds of thousands of dollars; lobbyists spent $270,000' },
      { country: 'Kuwait', payments: 'National Day celebrations moved to Trump Hotel' },
      { country: 'Malaysia', payments: 'Government delegation stayed at hotel' },
      { country: 'Philippines', payments: 'Embassy spent on events at hotel' },
      { country: 'Turkey', payments: 'Government officials stayed during lobbying efforts' },
    ],
    revenue: '$72 million+ in revenue during presidency (Congressional investigation)',
  },
  marALagoMemberships: {
    fee: 'Membership fee doubled to $200,000 after inauguration',
    members: 'Members gained access to President, cabinet officials',
    foreign: 'Foreign nationals purchased memberships for access',
    security: 'Unsecured discussions of sensitive matters with members present',
  },
  keyViolations: [
    { source: 'Saudi Arabia', method: 'Trump Hotel stays, Trump Tower purchases', amount: 'Millions' },
    { source: 'China', method: 'Trademarks granted to Ivanka Trump during negotiations', amount: 'Valuable IP' },
    { source: 'Qatar', method: 'Trump Tower Qatar investors', amount: 'Undisclosed' },
    { source: 'U.S. Government', method: 'Secret Service, staff stayed at Trump properties', amount: '$1M+ billed to taxpayers' },
    { source: 'Republican Party', method: 'RNC, campaigns spent at Trump properties', amount: '$20M+' },
    { source: 'T-Mobile', method: 'Executives stayed at Trump Hotel during merger approval', amount: '$195,000+' },
  ],
  lawsuits: [
    { case: 'CREW v. Trump', plaintiff: 'Citizens for Responsibility and Ethics', status: 'Dismissed as moot' },
    { case: 'District of Columbia & Maryland v. Trump', plaintiff: 'DC and Maryland AGs', status: 'Dismissed as moot' },
    { case: 'Blumenthal v. Trump', plaintiff: '200+ Democratic members of Congress', status: 'Dismissed as moot' },
  ],
  keyFigures: [
    { name: 'Donald Trump', role: 'Retained ownership of businesses while president', href: '/entities/individuals/donald-trump', status: 'Profited throughout term' },
    { name: 'Donald Trump Jr.', role: 'Ran Trump Organization during presidency', href: '/entities/individuals/donald-trump-jr', status: 'Operated business' },
    { name: 'Eric Trump', role: 'Ran Trump Organization during presidency', href: '/entities/individuals/eric-trump', status: 'Operated business' },
    { name: 'Ivanka Trump', role: 'Received Chinese trademarks while advising on China policy', href: '/entities/individuals/ivanka-trump', status: 'Conflicts of interest' },
  ],
  timeline: [
    { date: 'Jan 2017', event: 'Trump inaugurated; refuses to divest from businesses' },
    { date: 'Jan 2017', event: 'CREW files first emoluments lawsuit' },
    { date: 'Mar 2017', event: 'Kuwaiti Embassy moves event to Trump Hotel' },
    { date: 'Jun 2017', event: 'DC and Maryland AGs file lawsuit' },
    { date: 'Sep 2017', event: 'Saudi lobbyists rack up $270,000 at Trump Hotel' },
    { date: 'May 2018', event: 'Ivanka Trump receives Chinese trademarks same day Trump aids ZTE' },
    { date: 'Jul 2019', event: 'Appeals court allows emoluments lawsuit to proceed' },
    { date: 'Oct 2019', event: 'Trump proposes hosting G7 at his Doral resort (withdraws after backlash)' },
    { date: 'Jan 2021', event: 'Trump leaves office; cases dismissed as moot' },
    { date: 'Feb 2021', event: 'House Oversight reveals $3.7M from foreign governments' },
    { date: '2022', event: 'Trump sells DC Hotel for $375 million (after profiting throughout term)' },
  ],
  sources: [
    { title: 'House Oversight Foreign Payments Report', url: 'https://oversight.house.gov/wp-content/uploads/2022/01/Trump-Hotel-Report-January-2022.pdf', date: '2022' },
    { title: 'CREW Emoluments Tracking', url: 'https://www.citizensforethics.org/reports-investigations/crew-reports/president-trump-accepted-663-payments-foreign-governments/', date: '2020' },
    { title: 'GSA Lease Agreement', url: 'https://www.gsa.gov/real-estate/gsa-properties/gsa-properties-faq/old-post-office-building-washington-dc', date: '2013' },
    { title: 'DC & Maryland Lawsuit', url: 'https://oag.dc.gov/blog/district-columbia-and-maryland-file-lawsuit-against-president-trump', date: '2017' },
    { title: 'Congressional Research Service Report', url: 'https://crsreports.congress.gov/product/pdf/R/R45992', date: '2019' },
  ],
};

export default function EmolumentsPage() {
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
            <span className="px-3 py-1 text-xs font-bold uppercase border border-orange-500/30 bg-orange-500/20 text-orange-400">
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

        {/* Constitutional Clauses */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="border-2 border-yellow-800/60 bg-yellow-950/20 p-6 mb-8"
        >
          <h2 className="text-xl font-bold text-white uppercase tracking-wider mb-4 flex items-center gap-2">
            <AlertTriangle className="w-5 h-5 text-yellow-500" />
            Constitutional Violations
          </h2>
          <div className="space-y-4">
            {investigation.constitutionalProvisions.map((prov, idx) => (
              <div key={idx} className="border border-yellow-800/50 bg-black/50 p-4">
                <h3 className="text-yellow-400 font-bold mb-2">{prov.clause}</h3>
                <p className="text-zinc-300 italic">&quot;{prov.text}&quot;</p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Trump Hotel DC */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15 }}
          className="border-2 border-zinc-800 bg-black/60 p-6 mb-8"
        >
          <h2 className="text-xl font-bold text-white uppercase tracking-wider mb-4 flex items-center gap-2">
            <Building className="w-5 h-5 text-blood-500" />
            Trump International Hotel, Washington D.C.
          </h2>
          <div className="grid grid-cols-2 gap-4 mb-4">
            <div className="border border-zinc-700 bg-zinc-900/50 p-4">
              <p className="text-zinc-400 text-sm">Revenue During Presidency</p>
              <p className="text-2xl font-bold text-blood-500">{investigation.trumpHotelDC.revenue}</p>
            </div>
            <div className="border border-zinc-700 bg-zinc-900/50 p-4">
              <p className="text-zinc-400 text-sm">Conflict</p>
              <p className="text-sm text-zinc-300">{investigation.trumpHotelDC.conflict}</p>
            </div>
          </div>
          <h3 className="text-white font-bold mb-2">Foreign Government Spending:</h3>
          <div className="space-y-2">
            {investigation.trumpHotelDC.foreignSpending.map((spend, idx) => (
              <div key={idx} className="flex justify-between items-start border border-zinc-700 bg-zinc-900/50 p-3">
                <span className="text-white font-bold">{spend.country}</span>
                <span className="text-zinc-400">{spend.payments}</span>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Mar-a-Lago */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="border-2 border-zinc-800 bg-black/60 p-6 mb-8"
        >
          <h2 className="text-xl font-bold text-white uppercase tracking-wider mb-4 flex items-center gap-2">
            <DollarSign className="w-5 h-5 text-blood-500" />
            Mar-a-Lago &quot;Pay to Play&quot;
          </h2>
          <div className="grid grid-cols-2 gap-4">
            <div className="border border-zinc-700 bg-zinc-900/50 p-4">
              <p className="text-blood-500 font-bold">{investigation.marALagoMemberships.fee}</p>
            </div>
            <div className="border border-zinc-700 bg-zinc-900/50 p-4">
              <p className="text-zinc-300">{investigation.marALagoMemberships.members}</p>
            </div>
            <div className="border border-zinc-700 bg-zinc-900/50 p-4">
              <p className="text-zinc-300">{investigation.marALagoMemberships.foreign}</p>
            </div>
            <div className="border border-zinc-700 bg-zinc-900/50 p-4">
              <p className="text-zinc-300">{investigation.marALagoMemberships.security}</p>
            </div>
          </div>
        </motion.div>

        {/* Key Violations */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.25 }}
          className="border-2 border-red-800/60 bg-red-950/20 p-6 mb-8"
        >
          <h2 className="text-xl font-bold text-white uppercase tracking-wider mb-4">
            Documented Emoluments
          </h2>
          <div className="space-y-3">
            {investigation.keyViolations.map((viol, idx) => (
              <div key={idx} className="border border-zinc-700 bg-zinc-900/50 p-4">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="font-bold text-white">{viol.source}</h3>
                  <span className="text-blood-500">{viol.amount}</span>
                </div>
                <p className="text-sm text-zinc-400">{viol.method}</p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Lawsuits */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="border-2 border-zinc-800 bg-black/60 p-6 mb-8"
        >
          <h2 className="text-xl font-bold text-white uppercase tracking-wider mb-4">
            Emoluments Lawsuits
          </h2>
          <div className="space-y-3">
            {investigation.lawsuits.map((suit, idx) => (
              <div key={idx} className="border border-zinc-700 bg-zinc-900/50 p-4">
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="font-bold text-white">{suit.case}</h3>
                    <p className="text-sm text-zinc-400">{suit.plaintiff}</p>
                  </div>
                  <span className="text-xs text-yellow-400">{suit.status}</span>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Key Figures */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.35 }}
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
                <span className="text-blood-500 font-mono text-sm whitespace-nowrap min-w-[80px]">{item.date}</span>
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
