'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowLeft, Users, Calendar, ExternalLink, Scale, Radio, Eye, Newspaper, AlertTriangle } from 'lucide-react';
import GlitchText from '@/components/effects/GlitchText';

const investigation = {
  title: 'Operation Mockingbird: CIA Media Control',
  subtitle: 'How the CIA Recruited Journalists, Infiltrated Media Organizations, and Manufactured Consent to Control the American Narrative',
  severity: 'critical',
  status: 'Confirmed — Church Committee & Carl Bernstein Investigation',
  summary: 'Operation Mockingbird was a large-scale CIA program begun in the early 1950s to recruit American journalists, editors, and media organizations to serve as CIA assets and propaganda outlets. At its peak, the CIA had relationships with over 400 journalists and 25 major media organizations including The Washington Post, The New York Times, CBS, Time, Newsweek, and the Associated Press. The operation was directed by Frank Wisner, head of the CIA\'s Office of Policy Coordination, and later by Cord Meyer and Richard Helms. Journalists were paid to publish CIA-approved stories, suppress unfavorable reporting, and serve as intelligence operatives abroad. The program subverted the free press — the very foundation of democracy — turning news organizations into instruments of state propaganda.',
  scale: {
    journalists: '400+ journalist assets',
    mediaOrgs: '25+ news organizations',
    books: '1,000+ books funded/published',
    foreignPublications: '800+ foreign publications',
    operationYears: '1950s-1970s+ (likely ongoing)',
  },
  mediaAssets: [
    { organization: 'The Washington Post', details: 'Publisher Philip Graham was one of Mockingbird\'s earliest and most important recruits. His wife Katharine Graham later acknowledged CIA connections. Post reporters served dual roles as journalists and intelligence assets.' },
    { organization: 'CBS News', details: 'William Paley, CBS president, allowed the CIA to use CBS facilities and personnel. CBS correspondents were recruited as intelligence sources. CIA reviewed CBS scripts and footage.' },
    { organization: 'The New York Times', details: 'At least 10 CIA agents worked undercover as NYT journalists or stringers. Arthur Hays Sulzberger cooperated with CIA requests to plant, delay, or kill stories.' },
    { organization: 'Time/Life Magazines', details: 'Henry Luce, founder of Time Inc., provided cover for CIA agents and agreed to run agency propaganda. Time magazine\'s foreign correspondents frequently briefed the CIA.' },
    { organization: 'Associated Press (AP)', details: 'The world\'s largest news wire service provided CIA cover and intelligence. AP\'s global network gave the CIA unparalleled reach for both intelligence gathering and propaganda distribution.' },
    { organization: 'Newsweek', details: 'Multiple Newsweek journalists had CIA relationships. The magazine served as a vehicle for CIA-approved analysis and coverage of foreign affairs.' },
  ],
  methods: [
    { method: 'Direct Recruitment', description: 'CIA officers recruited individual journalists as paid assets. Some received regular salaries; others were paid per assignment. Journalists provided intelligence, planted stories, and killed unfavorable coverage.' },
    { method: 'Media Organization Infiltration', description: 'CIA established relationships with owners, publishers, and editors of major media companies. These executives provided institutional cover and editorial cooperation.' },
    { method: 'Book Publishing', description: 'CIA funded the publication of over 1,000 books through front organizations and sympathetic publishers. Books were used to advance Cold War narratives and discredit the Soviet Union.' },
    { method: 'Foreign Media Control', description: 'CIA purchased or subsidized over 800 foreign news publications. These outlets published CIA-approved content that was then cited by American media as "independent" foreign reporting.' },
    { method: 'Academic Infiltration', description: 'CIA recruited university professors to provide intellectual cover for agency positions. Academic publications and conferences served as propaganda channels.' },
    { method: 'Story Suppression', description: 'CIA pressured media organizations to kill or delay stories that could damage national security interests or expose agency operations. Guatemala coup coverage, Bay of Pigs, and other operations were suppressed.' },
  ],
  keyFigures: [
    { name: 'Frank Wisner', role: 'CIA Office of Policy Coordination chief who created and ran Mockingbird — called his media network "Wisner\'s Wurlitzer"', status: 'Committed suicide 1965' },
    { name: 'Allen Dulles', role: 'CIA Director who expanded Mockingbird. Close personal friendships with major media executives.', href: '/entities/individuals/allen-dulles', status: 'Deceased 1969' },
    { name: 'Cord Meyer', role: 'CIA officer who ran Mockingbird operations after Wisner. Managed relationships with liberal intellectuals and media.', status: 'Deceased 2001' },
    { name: 'Richard Helms', role: 'CIA Director who authorized continued media manipulation. Later convicted of lying to Congress.', href: '/entities/individuals/richard-helms', status: 'Convicted — misdemeanor, suspended sentence' },
    { name: 'Philip Graham', role: 'Washington Post publisher and key Mockingbird recruit. Helped CIA recruit other journalists.', status: 'Committed suicide 1963' },
    { name: 'William Paley', role: 'CBS president who allowed CIA to use CBS for cover and propaganda', status: 'Deceased 1990 — Never held accountable' },
    { name: 'Henry Luce', role: 'Time/Life founder who provided CIA cover for agents posing as Time correspondents', status: 'Deceased 1967 — Never held accountable' },
    { name: 'Carl Bernstein', role: 'Journalist who exposed Mockingbird in landmark 1977 Rolling Stone investigation', status: 'Key whistleblower' },
  ],
  publishingFronts: [
    { name: 'Praeger Publishers', description: 'Published at least 15 CIA-funded books. Frederick Praeger acknowledged CIA funding after exposure.' },
    { name: 'Congress for Cultural Freedom', description: 'CIA-funded organization that published literary and political journals across Europe and influenced intellectual discourse globally.' },
    { name: 'Encounter Magazine', description: 'London-based literary journal secretly funded by CIA through Congress for Cultural Freedom. Used to promote pro-Western intellectual positions.' },
    { name: 'Radio Free Europe/Radio Liberty', description: 'CIA-funded radio networks broadcasting into communist countries. Presented as independent journalism but controlled by agency.' },
  ],
  timeline: [
    { date: '1948', event: 'Frank Wisner appointed head of Office of Policy Coordination — begins recruiting journalists' },
    { date: '1950', event: 'Operation Mockingbird formally established. Philip Graham recruited as key asset.' },
    { date: '1953', event: 'CIA suppresses media coverage of Guatemala coup planning to protect Operation PBSUCCESS' },
    { date: '1954', event: 'CIA-controlled media reports Guatemala coup as "popular uprising" — complete fabrication' },
    { date: '1961', event: 'CIA pressures media to suppress Bay of Pigs invasion reporting. NYT reduces story at CIA request.' },
    { date: '1965', event: 'Frank Wisner commits suicide. Cord Meyer takes over media operations.' },
    { date: '1967', event: 'Ramparts magazine exposes CIA funding of National Student Association — first major crack in Mockingbird' },
    { date: '1973', event: 'CIA Director William Colby begins dismantling some media relationships (claims)' },
    { date: '1975', event: 'Church Committee investigates CIA media manipulation' },
    { date: '1976', event: 'CIA Director George H.W. Bush issues policy "prohibiting" paid journalist relationships (widely ignored)' },
    { date: '1977', event: 'Carl Bernstein publishes "The CIA and the Media" in Rolling Stone — names 400+ journalist assets' },
    { date: '2014', event: 'German journalist Udo Ulfkotte publishes "Bought Journalists" alleging CIA media manipulation continues in Europe' },
  ],
  legalOutcomes: [
    { defendant: 'CIA / US Government', charge: 'Subversion of free press / First Amendment violations', outcome: 'Church Committee documented abuses — NO criminal charges filed against any CIA officer' },
    { defendant: 'Richard Helms', charge: 'Lying to Congress about CIA operations (including media)', outcome: 'Pled no contest to misdemeanor — $2,000 fine, 2-year suspended sentence (1977)' },
    { defendant: 'CIA', charge: 'Executive Order restrictions on media relationships', outcome: 'EO 12333 (1981) nominally restricts CIA media use — enforcement is self-policed by CIA itself' },
    { defendant: 'No individual', charge: 'First Amendment violations', outcome: 'NO person was EVER criminally prosecuted for Operation Mockingbird' },
  ],
  applicableCharges: [
    '18 USC §1001 — False Statements (CIA officials lying to Congress about media operations)',
    '18 USC §371 — Conspiracy to Defraud the United States (systematic subversion of free press)',
    'First Amendment Violations — Government manipulation of press undermines constitutional guarantees',
    'Smith-Mundt Act Violations — Propaganda directed at domestic audiences (pre-2012 amendment)',
  ],
  sources: [
    { title: 'Carl Bernstein: "The CIA and the Media" — Rolling Stone', url: 'https://www.carlbernstein.com/the-cia-and-the-media-rolling-stone-10-20-1977', date: '1977' },
    { title: 'Church Committee: Final Report — Book I, Foreign and Military Intelligence', url: 'https://www.intelligence.senate.gov/sites/default/files/94755_I.pdf', date: '1976' },
    { title: 'CIA Family Jewels (declassified documents on media operations)', url: 'https://www.cia.gov/readingroom/collection/family-jewels', date: '2007' },
    { title: 'Frances Stonor Saunders: The Cultural Cold War: The CIA and the World of Arts and Letters', url: 'https://thenewpress.com/books/cultural-cold-war', date: '2000' },
    { title: 'Hugh Wilford: The Mighty Wurlitzer: How the CIA Played America', url: 'https://www.hup.harvard.edu/books/9780674026810', date: '2008' },
    { title: 'Deborah Davis: Katharine the Great (Washington Post and CIA)', url: 'https://archive.org/details/katharinegreatka00davi', date: '1979' },
  ],
};

export default function OperationMockingbirdPage() {
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
          <h2 className="text-xl font-bold text-white uppercase tracking-wider mb-4 flex items-center gap-2"><Radio className="w-5 h-5 text-red-500" />Scale of Propaganda</h2>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
            {Object.entries(investigation.scale).map(([key, val]) => (
              <div key={key} className="text-center p-4 border border-red-500/30 bg-red-950/30">
                <p className="text-2xl font-black text-red-500">{val}</p>
                <p className="text-xs text-zinc-400 capitalize">{key.replace(/([A-Z])/g, ' $1').trim()}</p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Compromised Media */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.15 }} className="border-2 border-red-800/60 bg-red-950/20 p-6 mb-8">
          <h2 className="text-xl font-bold text-white uppercase tracking-wider mb-4 flex items-center gap-2">
            <Newspaper className="w-5 h-5 text-red-500" />
            Compromised Media Organizations
          </h2>
          <div className="grid md:grid-cols-2 gap-4">
            {investigation.mediaAssets.map((asset, idx) => (
              <div key={idx} className="p-4 bg-zinc-900/50 border border-zinc-800">
                <p className="font-bold text-blood-400 text-sm">{asset.organization}</p>
                <p className="text-sm text-zinc-300 mt-2">{asset.details}</p>
              </div>
            ))}
          </div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-8">
            {/* Methods */}
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="glass-card p-6">
              <h2 className="text-xl font-bold text-white uppercase tracking-wider mb-4 flex items-center gap-2"><Eye className="w-5 h-5 text-blood-500" />Methods of Control</h2>
              <div className="space-y-4">
                {investigation.methods.map((m, idx) => (
                  <div key={idx} className="p-4 bg-zinc-900/50 border border-zinc-800">
                    <p className="font-bold text-blood-400 text-sm">{m.method}</p>
                    <p className="text-sm text-zinc-300 mt-2">{m.description}</p>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Publishing Fronts */}
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.22 }} className="glass-card p-6">
              <h2 className="text-xl font-bold text-white uppercase tracking-wider mb-4">CIA Publishing Fronts</h2>
              <div className="space-y-3">
                {investigation.publishingFronts.map((pf, idx) => (
                  <div key={idx} className="p-4 bg-zinc-900/50 border border-zinc-800">
                    <p className="font-bold text-white text-sm">{pf.name}</p>
                    <p className="text-sm text-zinc-300 mt-2">{pf.description}</p>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Key Figures */}
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.25 }} className="glass-card p-6">
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

            {/* Applicable Charges */}
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.28 }} className="glass-card p-6 border-l-4 border-red-600">
              <h2 className="text-xl font-bold text-white uppercase tracking-wider mb-4 flex items-center gap-2"><AlertTriangle className="w-5 h-5 text-red-500" />Applicable Charges & Statutes</h2>
              <ul className="space-y-2">
                {investigation.applicableCharges.map((charge, idx) => (
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
              <h3 className="text-lg font-bold text-white uppercase tracking-wider mb-4">Sources</h3>
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
