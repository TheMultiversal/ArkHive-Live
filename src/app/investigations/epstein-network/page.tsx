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
  MapPin,
  Plane,
  Scale,
} from 'lucide-react';
import GlitchText from '@/components/effects/GlitchText';

const investigation = {
  title: 'Epstein Network Complicity',
  subtitle: 'Elite Sex Trafficking Ring and Its Powerful Enablers',
  severity: 'critical',
  status: 'Ongoing - Documents Still Being Unsealed',
  summary: 'Jeffrey Epstein operated a sophisticated sex trafficking network targeting minors for decades, enabled by powerful associates including politicians, businessmen, and royalty. Despite his 2008 conviction, a sweetheart plea deal protected co-conspirators. Epstein\'s 2019 death in custody while awaiting trial left many questions unanswered. The network\'s full scope continues to be revealed through unsealed court documents.',
  keyFigures: [
    { name: 'Jeffrey Epstein', role: 'Network Operator, Convicted Sex Offender', href: '/entities/individuals/jeffrey-epstein', status: 'Deceased (2019)' },
    { name: 'Ghislaine Maxwell', role: 'Co-Conspirator, Recruiter, Convicted', href: '/entities/individuals/ghislaine-maxwell', status: 'Serving 20 Years' },
    { name: 'Donald Trump', role: 'Social Associate, Mar-a-Lago Host', href: '/entities/individuals/donald-trump', status: 'Subject of Investigation' },
    { name: 'Bill Clinton', role: 'Flight Logs: 26+ Flights', href: '#', status: 'Named in Documents' },
    { name: 'Prince Andrew', role: 'Photographed with Victim, Settled Lawsuit', href: '#', status: 'Civil Settlement' },
    { name: 'Les Wexner', role: 'Primary Financial Backer', href: '#', status: 'Under Investigation' },
    { name: 'Jean-Luc Brunel', role: 'Model Scout, Procurer', href: '#', status: 'Deceased (2022)' },
  ],
  properties: [
    { name: 'Little St. James Island', location: 'U.S. Virgin Islands', details: '"Pedophile Island" - Primary abuse location, mysterious temple structure' },
    { name: 'Great St. James Island', location: 'U.S. Virgin Islands', details: 'Second island purchased to control access' },
    { name: '9 East 71st Street', location: 'Manhattan, NYC', details: 'Largest private residence in Manhattan, gifted by Les Wexner' },
    { name: 'El Brillo Way', location: 'Palm Beach, Florida', details: 'Site of initial police investigation (2005)' },
    { name: 'Zorro Ranch', location: 'New Mexico', details: '7,500 acres, reported "baby ranch" for eugenics experiments' },
    { name: 'Paris Apartment', location: 'France', details: 'European base of operations' },
  ],
  aircraft: [
    { name: 'N908JE - Boeing 727', nickname: '"Lolita Express"', details: 'Primary transport aircraft, flight logs show hundreds of flights with victims and associates' },
    { name: 'N212JE - Gulfstream', nickname: 'Secondary Aircraft', details: 'Used for shorter trips' },
    { name: 'Helicopter', nickname: 'Island Transport', details: 'Used to shuttle guests to Little St. James' },
  ],
  timeline: [
    { date: '1953', event: 'Jeffrey Epstein born in Brooklyn, New York' },
    { date: '1976', event: 'Hired at Bear Stearns despite lacking college degree' },
    { date: '1981', event: 'Leaves Bear Stearns, starts own firm' },
    { date: '1986', event: 'Les Wexner becomes primary client and benefactor' },
    { date: '1991', event: 'Ghislaine Maxwell\'s father Robert Maxwell dies mysteriously at sea' },
    { date: '1992', event: 'Begins relationship with Ghislaine Maxwell; begins friendship with Donald Trump' },
    { date: '1993', event: 'Trump flight on "Lolita Express" documented in logs' },
    { date: '1994', event: 'Katie Johnson lawsuit alleges Trump raped her at age 13 at Epstein party' },
    { date: '1994-2004', event: 'Peak years of trafficking operation, recruiting victims from Mar-a-Lago' },
    { date: '2002', event: 'Trump tells New York Magazine: Epstein "likes beautiful women as much as I do, and many of them are on the younger side"' },
    { date: '2005', event: 'Palm Beach Police begin investigation after mother\'s complaint' },
    { date: '2006', event: 'FBI takes over investigation, documents extensive abuse' },
    { date: '2007', event: 'Federal prosecutors prepare 53-page indictment' },
    { date: '2008', event: 'Alexander Acosta (future Trump Labor Secretary) negotiates sweetheart plea deal' },
    { date: '2008', event: 'Epstein pleads guilty to state charges, serves 13 months, work release 6 days/week' },
    { date: '2008', event: 'Secret Non-Prosecution Agreement protects unnamed co-conspirators' },
    { date: '2015', event: 'Virginia Giuffre lawsuit against Maxwell unsealed, details emerge' },
    { date: '2018', event: 'Miami Herald "Perversion of Justice" investigation published' },
    { date: '2019 Feb', event: 'Federal judge rules NPA violated Crime Victims\' Rights Act' },
    { date: '2019 Jul 6', event: 'Epstein arrested at Teterboro Airport on federal sex trafficking charges' },
    { date: '2019 Jul 8', event: 'Denied bail, detained at Metropolitan Correctional Center' },
    { date: '2019 Jul 23', event: 'Found injured in cell (first incident)' },
    { date: '2019 Aug 10', event: 'Found dead in cell - ruled suicide, cameras malfunctioned, guards asleep' },
    { date: '2019 Aug', event: 'Trump tweets conspiracy theory about Clinton involvement in death' },
    { date: '2020 Jul 2', event: 'Ghislaine Maxwell arrested in New Hampshire' },
    { date: '2021 Dec 29', event: 'Maxwell convicted on 5 of 6 federal charges' },
    { date: '2022 Jun 28', event: 'Maxwell sentenced to 20 years in federal prison' },
    { date: '2022 Feb', event: 'Jean-Luc Brunel found dead in French prison cell' },
    { date: '2024', event: 'Major document unsealing reveals new names and details' },
    { date: '2025', event: 'Additional flight logs and documents continue to be released' },
  ],
  charges: [
    { statute: '18 U.S.C. § 1591', description: 'Sex Trafficking of Minors', count: 'Multiple counts' },
    { statute: '18 U.S.C. § 2423', description: 'Transportation of Minors for Illegal Sexual Activity', count: 'Multiple counts' },
    { statute: '18 U.S.C. § 371', description: 'Conspiracy', count: 'Multiple counts' },
    { statute: 'TVPA', description: 'Trafficking Victims Protection Act Violations', count: 'Multiple counts' },
  ],
  trumpConnections: [
    'Documented friendship spanning 1992-2019 (publicly fell out in 2004 over property dispute, but contact continued)',
    'Mar-a-Lago was a recruiting ground for Epstein victims per court documents',
    'Trump\'s 2002 quote praising Epstein\'s taste for young women',
    'Trump flight on "Lolita Express" (1993)',
    'Multiple documented visits to Epstein\'s Manhattan mansion',
    'Epstein was a member of Mar-a-Lago club',
    'Katie Johnson lawsuit alleging Trump raped her at age 13 at Epstein party (1994)',
    'Trump appointed Alexander Acosta as Labor Secretary - the prosecutor who gave Epstein sweetheart deal',
    'Access Hollywood tape suggests pattern consistent with allegations',
    '26+ women have accused Trump of sexual misconduct',
    'Trump wished Ghislaine Maxwell "well" after her arrest',
  ],
  victims: 'Hundreds of documented victims, some as young as 11 years old. Recruitment through modeling agencies, massage promises, and financial manipulation.',
  sources: [
    { title: 'Miami Herald: Perversion of Justice Investigation', url: 'https://www.miamiherald.com/topics/jeffrey-epstein', date: '2018' },
    { title: 'SDNY Federal Indictment', url: 'https://www.justice.gov/usao-sdny/pr/jeffrey-epstein-charged-sex-trafficking-minors', date: '2019' },
    { title: 'Giuffre v. Maxwell Court Documents', url: 'https://www.courtlistener.com/docket/4355835/giuffre-v-maxwell/', date: '2015-2025' },
    { title: 'United States v. Maxwell Trial', url: 'https://www.courtlistener.com/docket/17318376/united-states-v-maxwell/', date: '2021' },
    { title: 'Epstein Flight Logs', url: 'https://www.documentcloud.org/documents/21165424-epstein-flight-logs', date: '2025' },
    { title: 'Katie Johnson v. Trump/Epstein Lawsuit', url: 'https://www.courtlistener.com/docket/4154484/katie-johnson-v-donald-j-trump/', date: '2016' },
    { title: 'Palm Beach Police Investigation', url: '#', date: '2005' },
    { title: 'Non-Prosecution Agreement Documents', url: '#', date: '2008' },
    { title: '2024 Unsealed Court Documents', url: '#', date: '2024' },
    { title: 'Trump 2002 New York Magazine Quote', url: 'https://nymag.com/nymetro/news/people/n_7912/', date: '2002' },
  ],
};

const severityColors = {
  critical: 'bg-red-500/20 text-red-400 border-red-500/30',
  high: 'bg-orange-500/20 text-orange-400 border-orange-500/30',
  medium: 'bg-yellow-500/20 text-yellow-400 border-yellow-500/30',
  low: 'bg-green-500/20 text-green-400 border-green-500/30',
};

export default function EpsteinNetworkPage() {
  return (
    <div className="min-h-screen pt-20 lg:pt-24 pb-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Back Link */}
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
            <span className={`px-3 py-1 text-xs font-bold uppercase border ${severityColors.critical}`}>
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

        {/* Key Figures */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="border-2 border-zinc-800 bg-black/60 p-6 mb-8"
        >
          <h2 className="text-xl font-bold text-white uppercase tracking-wider mb-4 flex items-center gap-2">
            <Users className="w-5 h-5 text-blood-500" />
            Key Figures & Associates
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
                    <h3 className="font-bold text-white group-hover:text-blood-500 transition-colors">
                      {figure.name}
                    </h3>
                    <p className="text-sm text-zinc-400">{figure.role}</p>
                  </div>
                  <span className="text-xs text-zinc-500">{figure.status}</span>
                </div>
              </Link>
            ))}
          </div>
        </motion.div>

        {/* Trump Connections */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15 }}
          className="border-2 border-red-800/60 bg-red-950/20 p-6 mb-8"
        >
          <h2 className="text-xl font-bold text-white uppercase tracking-wider mb-4 flex items-center gap-2">
            <AlertTriangle className="w-5 h-5 text-red-500" />
            Trump-Epstein Connections
          </h2>
          <ul className="space-y-3">
            {investigation.trumpConnections.map((connection, idx) => (
              <li key={idx} className="flex items-start gap-3">
                <span className="w-2 h-2 mt-2 bg-red-500 flex-shrink-0" />
                <span className="text-zinc-300">{connection}</span>
              </li>
            ))}
          </ul>
        </motion.div>

        {/* Properties */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="border-2 border-zinc-800 bg-black/60 p-6 mb-8"
        >
          <h2 className="text-xl font-bold text-white uppercase tracking-wider mb-4 flex items-center gap-2">
            <MapPin className="w-5 h-5 text-blood-500" />
            Properties & Locations
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {investigation.properties.map((property, idx) => (
              <div key={idx} className="border border-zinc-700 bg-zinc-900/50 p-4">
                <h3 className="font-bold text-white">{property.name}</h3>
                <p className="text-sm text-blood-500">{property.location}</p>
                <p className="text-sm text-zinc-400 mt-1">{property.details}</p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Aircraft */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.25 }}
          className="border-2 border-zinc-800 bg-black/60 p-6 mb-8"
        >
          <h2 className="text-xl font-bold text-white uppercase tracking-wider mb-4 flex items-center gap-2">
            <Plane className="w-5 h-5 text-blood-500" />
            Aircraft & Transportation
          </h2>
          <div className="space-y-4">
            {investigation.aircraft.map((craft, idx) => (
              <div key={idx} className="border border-zinc-700 bg-zinc-900/50 p-4">
                <h3 className="font-bold text-white">{craft.name}</h3>
                <p className="text-sm text-blood-500">{craft.nickname}</p>
                <p className="text-sm text-zinc-400 mt-1">{craft.details}</p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Charges */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="border-2 border-zinc-800 bg-black/60 p-6 mb-8"
        >
          <h2 className="text-xl font-bold text-white uppercase tracking-wider mb-4 flex items-center gap-2">
            <Scale className="w-5 h-5 text-blood-500" />
            Criminal Charges
          </h2>
          <div className="space-y-3">
            {investigation.charges.map((charge, idx) => (
              <div key={idx} className="border border-zinc-700 bg-zinc-900/50 p-4">
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="font-mono text-sm text-blood-500">{charge.statute}</h3>
                    <p className="text-zinc-300">{charge.description}</p>
                  </div>
                  <span className="text-xs text-zinc-500">{charge.count}</span>
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
            Timeline of Events
          </h2>
          <div className="space-y-4 max-h-96 overflow-y-auto pr-2">
            {investigation.timeline.map((item, idx) => (
              <div key={idx} className="flex gap-4 border-l-2 border-zinc-700 pl-4 hover:border-blood-500 transition-colors">
                <span className="text-blood-500 font-mono text-sm whitespace-nowrap">{item.date}</span>
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
                <ExternalLink className="w-4 h-4 text-zinc-500 group-hover:text-blood-500 transition-colors" />
              </a>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}
