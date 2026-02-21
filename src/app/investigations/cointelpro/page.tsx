'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowLeft, Users, Calendar, ExternalLink, Scale, Shield, Eye, Target, AlertTriangle } from 'lucide-react';
import GlitchText from '@/components/effects/GlitchText';

const investigation = {
  title: 'COINTELPRO: FBI Domestic Terrorism Against Americans',
  subtitle: 'How the FBI Waged a Secret War Against Civil Rights Leaders, Antiwar Activists, and Political Dissidents — Including Assassination',
  severity: 'critical',
  status: 'Confirmed — Church Committee Exposed',
  summary: 'COINTELPRO (Counter Intelligence Program) was a series of covert and illegal FBI operations conducted from 1956 to 1971 under Director J. Edgar Hoover. The program systematically surveilled, infiltrated, discredited, and disrupted domestic political organizations including the civil rights movement, antiwar movement, Black Power movement, American Indian Movement, women\'s movement, and socialist organizations. COINTELPRO directly contributed to the assassination of Black Panther leader Fred Hampton, the harassment and psychological torture of Dr. Martin Luther King Jr., and the destruction of countless lives and organizations. When exposed by the Citizens\' Commission to Investigate the FBI in 1971, the program revealed the most extensive domestic intelligence abuse in American history.',
  scale: {
    operations: '2,370+ documented actions',
    targets: '500,000+ Americans under surveillance',
    programs: '5 major target programs',
    duration: '15 years (1956-1971)',
    agentsInvolved: 'Thousands of FBI agents',
  },
  programs: [
    { name: 'COINTELPRO-CPUSA (1956-1971)', target: 'Communist Party USA', description: 'The original program. FBI infiltrated, wiretapped, and disrupted the Communist Party. Over 1,388 documented actions including disinformation, agent provocateurs, and employment sabotage.' },
    { name: 'COINTELPRO-SWP (1961-1971)', target: 'Socialist Workers Party', description: 'Over 46 disruption operations. FBI burglarized SWP offices 94 times, stole or copied 12,600 documents, used 1,300 informants, and wiretapped 20,000+ conversations.' },
    { name: 'COINTELPRO-White Hate (1964-1971)', target: 'KKK & White Supremacists', description: 'The only program targeting right-wing groups. FBI infiltrated KKK but also used Klan informants as agents provocateurs. Some informants participated in violence against civil rights workers.' },
    { name: 'COINTELPRO-Black Nationalist (1967-1971)', target: 'Black Panthers, SCLC, SNCC, Nation of Islam', description: 'The most aggressive program. Hoover called the Black Panther Party "the greatest threat to the internal security of the country." FBI created internal conflicts, planted false evidence, conducted raids, and orchestrated the assassination of Fred Hampton.' },
    { name: 'COINTELPRO-New Left (1968-1971)', target: 'Antiwar Movement, SDS, Women\'s Liberation', description: 'Targeted Vietnam War protesters and campus activists. FBI infiltrated Students for a Democratic Society, planted provocateurs at protests, and worked with local police to conduct violent raids.' },
  ],
  mlkOperations: [
    { action: 'Wiretapping', description: 'Attorney General Robert Kennedy authorized FBI wiretaps on King in 1963. FBI bugged King\'s hotel rooms, offices, and home for years, recording intimate personal conversations.' },
    { action: '"Suicide Letter"', description: 'In 1964, the FBI anonymously mailed King a package containing recordings of sexual encounters and a letter suggesting he commit suicide within 34 days or the recordings would be released: "King, there is only one thing left for you to do. You know what it is."' },
    { action: 'Nobel Prize Sabotage', description: 'FBI attempted to prevent King from receiving the Nobel Peace Prize by distributing derogatory information about him to foreign governments and media.' },
    { action: 'Organizational Disruption', description: 'FBI informants created internal conflicts within SCLC, spread rumors, and attempted to replace King with more "acceptable" Black leaders.' },
    { action: 'Media Manipulation', description: 'FBI planted stories with friendly journalists to discredit King and the civil rights movement. Reporters received FBI-prepared "background" materials.' },
  ],
  fredHampton: {
    victim: 'Fred Hampton, Chairman of the Illinois Black Panther Party',
    age: '21 years old',
    date: 'December 4, 1969',
    description: 'FBI informant William O\'Neal, who had become Hampton\'s bodyguard, provided the floor plan of Hampton\'s apartment and drugged Hampton before the raid. Chicago police officers, working with the FBI, fired 82-99 shots into the apartment while the occupants were sleeping. Hampton was shot in bed — forensic evidence showed he was likely unconscious (drugged) when killed. Only one shot was fired by the Panthers.',
    aftermath: 'A federal grand jury found the raid was conducted by the Chicago Police at the FBI\'s direction. A civil rights lawsuit resulted in a $1.85 million settlement. No one was ever criminally charged for Hampton\'s assassination.',
  },
  keyFigures: [
    { name: 'J. Edgar Hoover', role: 'FBI Director who created and directed COINTELPRO for 15 years', href: '/entities/individuals/j-edgar-hoover', status: 'Deceased 1972 — Never held accountable' },
    { name: 'Fred Hampton', role: 'Black Panther Chairman assassinated by FBI-directed raid at age 21', href: '/entities/individuals/fred-hampton', status: 'Victim — Assassinated Dec 4, 1969' },
    { name: 'Martin Luther King Jr.', role: 'Civil rights leader subjected to years of FBI harassment and blackmail', href: '/entities/individuals/martin-luther-king-jr', status: 'Victim — Assassinated Apr 4, 1968' },
    { name: 'William O\'Neal', role: 'FBI informant who betrayed Fred Hampton — provided floor plan and drugged him', href: '/entities/individuals/william-oneal', status: 'FBI informant — Committed suicide 1990' },
    { name: 'William Sullivan', role: 'FBI Domestic Intelligence chief who ran COINTELPRO operations', status: 'Shot dead in 1977 — ruled hunting accident' },
    { name: 'Mark Felt', role: 'FBI Associate Director who later became "Deep Throat" in Watergate', status: 'Revealed 2005 — Also ran COINTELPRO operations' },
  ],
  tactics: [
    { tactic: 'Infiltration', description: 'FBI planted informants and agents provocateurs in target organizations. Some agents rose to leadership positions and steered organizations toward actions that would discredit them.' },
    { tactic: 'Black Propaganda', description: 'FBI created fake letters, leaflets, and publications in the name of target groups to sow discord, create rifts between organizations, and provoke violence.' },
    { tactic: 'Legal Harassment', description: 'FBI worked with local police to arrest activists on false or exaggerated charges, denied bail, and used the legal system to drain organizations\' resources.' },
    { tactic: 'Extralegal Force', description: 'FBI directed or facilitated violence against targets including raids, bombings, and assassinations. The Hampton assassination is the most documented example.' },
    { tactic: 'Psychological Warfare', description: 'FBI sent anonymous threatening letters, made harassing phone calls, spread rumors about activists\' personal lives, and attempted to destroy marriages and relationships.' },
    { tactic: 'Employment Sabotage', description: 'FBI contacted employers to get targets fired, interfered with job applications, and used background investigations to make activists unemployable.' },
  ],
  timeline: [
    { date: '1956', event: 'Hoover launches COINTELPRO against Communist Party USA' },
    { date: '1961', event: 'Program expanded to Socialist Workers Party' },
    { date: '1963', event: 'FBI begins wiretapping Martin Luther King Jr.' },
    { date: '1964', event: 'FBI sends anonymous "suicide letter" and sex recordings to King' },
    { date: '1964', event: 'COINTELPRO-White Hate launched against KKK' },
    { date: '1967', event: 'COINTELPRO-Black Nationalist launched. Hoover: BPP is "greatest threat to internal security"' },
    { date: '1968', event: 'COINTELPRO-New Left targets antiwar movement' },
    { date: 'Apr 4, 1968', event: 'Martin Luther King Jr. assassinated in Memphis' },
    { date: 'Dec 4, 1969', event: 'Fred Hampton assassinated in FBI-directed Chicago police raid' },
    { date: 'Mar 8, 1971', event: 'Citizens\' Commission burglarizes FBI office in Media, PA — steals COINTELPRO documents' },
    { date: '1971', event: 'Stolen documents published. FBI officially terminates COINTELPRO.' },
    { date: '1975-76', event: 'Church Committee exposes full scope of COINTELPRO' },
    { date: '1976', event: 'Attorney General Edward Levi issues guidelines restricting FBI domestic operations' },
    { date: '1982', event: 'Hampton family receives $1.85 million civil rights settlement' },
  ],
  legalOutcomes: [
    { defendant: 'FBI / US Government', charge: 'Civil rights violations (Hampton assassination)', outcome: '$1.85 million settlement to Hampton family (1982)' },
    { defendant: 'FBI / US Government', charge: 'SWP lawsuit for illegal surveillance', outcome: '$264,000 damages (1986) — judge called FBI actions "patently unconstitutional"' },
    { defendant: 'J. Edgar Hoover', charge: 'Abuse of power, civil rights violations', outcome: 'Died 1972 — Never charged or held accountable' },
    { defendant: 'Mark Felt & Edward Miller', charge: 'Authorizing illegal break-ins', outcome: 'Convicted 1980 — Pardoned by Reagan 1981' },
    { defendant: 'No individual FBI agent', charge: 'Any criminal charge for COINTELPRO', outcome: 'NO FBI agent was EVER criminally prosecuted for COINTELPRO operations' },
  ],
  sources: [
    { title: 'Church Committee: Intelligence Activities and the Rights of Americans — Book II', url: 'https://www.intelligence.senate.gov/sites/default/files/94755_II.pdf', date: '1976' },
    { title: 'Church Committee: Supplementary Detailed Staff Reports — Book III (COINTELPRO)', url: 'https://www.intelligence.senate.gov/sites/default/files/94755_III.pdf', date: '1976' },
    { title: 'FBI COINTELPRO Documents — FBI Vault', url: 'https://vault.fbi.gov/cointel-pro', date: 'Declassified' },
    { title: 'COINTELPRO: The FBI\'s Secret War on Political Freedom (Nelson Blackstock)', url: 'https://www.pathfinderpress.com/cointelpro-the-fbis-secret-war-on-political-freedom', date: '1988' },
    { title: 'The Assassination of Fred Hampton (Jeffrey Haas)', url: 'https://lawrenceandwishart.co.uk/product/the-assassination-of-fred-hampton/', date: '2010' },
    { title: 'The FBI\'s War on Black America (Documentary)', url: 'https://www.imdb.com/title/tt0181621/', date: '1990' },
    { title: 'Betty Medsger: The Burglary — Discovery of COINTELPRO', url: 'https://www.penguinrandomhouse.com/books/221075/the-burglary-by-betty-medsger/', date: '2014' },
  ],
};

export default function COINTELPROPage() {
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
          <h2 className="text-xl font-bold text-white uppercase tracking-wider mb-4 flex items-center gap-2"><Eye className="w-5 h-5 text-red-500" />Scale of Surveillance</h2>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
            {Object.entries(investigation.scale).map(([key, val]) => (
              <div key={key} className="text-center p-4 border border-red-500/30 bg-red-950/30">
                <p className="text-2xl font-black text-red-500">{val}</p>
                <p className="text-xs text-zinc-400 capitalize">{key.replace(/([A-Z])/g, ' $1').trim()}</p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Fred Hampton Assassination */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.15 }} className="border-2 border-red-800/60 bg-red-950/20 p-6 mb-8">
          <h2 className="text-xl font-bold text-white uppercase tracking-wider mb-4 flex items-center gap-2">
            <Target className="w-5 h-5 text-red-500" />
            The Assassination of Fred Hampton
          </h2>
          <div className="grid md:grid-cols-3 gap-4 mb-4">
            <div className="text-center p-4 border border-red-500/30 bg-red-950/30"><p className="text-lg font-black text-red-500">{investigation.fredHampton.victim}</p></div>
            <div className="text-center p-4 border border-red-500/30 bg-red-950/30"><p className="text-lg font-black text-red-500">Age: {investigation.fredHampton.age}</p></div>
            <div className="text-center p-4 border border-red-500/30 bg-red-950/30"><p className="text-lg font-black text-red-500">{investigation.fredHampton.date}</p></div>
          </div>
          <p className="text-sm text-zinc-300 mb-4">{investigation.fredHampton.description}</p>
          <p className="text-sm text-red-400 font-bold">{investigation.fredHampton.aftermath}</p>
        </motion.div>

        {/* MLK Operations */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.18 }} className="glass-card p-6 mb-8 border-l-4 border-blood-600">
          <h2 className="text-xl font-bold text-white uppercase tracking-wider mb-4">FBI vs. Martin Luther King Jr.</h2>
          <div className="space-y-3">
            {investigation.mlkOperations.map((op, idx) => (
              <div key={idx} className="p-4 bg-zinc-900/50 border border-zinc-800">
                <p className="font-bold text-blood-400 text-sm">{op.action}</p>
                <p className="text-sm text-zinc-300 mt-2">{op.description}</p>
              </div>
            ))}
          </div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-8">
            {/* Programs */}
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="glass-card p-6">
              <h2 className="text-xl font-bold text-white uppercase tracking-wider mb-4 flex items-center gap-2"><Shield className="w-5 h-5 text-blood-500" />COINTELPRO Programs</h2>
              <div className="space-y-4">
                {investigation.programs.map((prog, idx) => (
                  <div key={idx} className="p-4 bg-zinc-900/50 border border-zinc-800">
                    <p className="font-bold text-blood-400 text-sm">{prog.name}</p>
                    <p className="text-xs text-zinc-500 mb-2">Target: {prog.target}</p>
                    <p className="text-sm text-zinc-300">{prog.description}</p>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Tactics */}
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.25 }} className="glass-card p-6">
              <h2 className="text-xl font-bold text-white uppercase tracking-wider mb-4 flex items-center gap-2"><AlertTriangle className="w-5 h-5 text-blood-500" />Tactics Used</h2>
              <div className="space-y-3">
                {investigation.tactics.map((t, idx) => (
                  <div key={idx} className="p-4 bg-zinc-900/50 border border-zinc-800">
                    <p className="font-bold text-white text-sm">{t.tactic}</p>
                    <p className="text-sm text-zinc-300 mt-2">{t.description}</p>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Key Figures */}
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }} className="glass-card p-6">
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
