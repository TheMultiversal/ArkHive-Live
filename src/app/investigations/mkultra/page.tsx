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
  Brain,
  Skull,
  ShieldAlert,
} from 'lucide-react';
import GlitchText from '@/components/effects/GlitchText';

const investigation = {
  title: 'MKUltra: CIA Mind Control Program',
  subtitle: 'The United States Government\'s 20-Year Program of Torture, Human Experimentation, and Mind Control',
  severity: 'critical',
  status: 'Confirmed — Partially Declassified',
  summary: 'From 1953 to 1973, the Central Intelligence Agency conducted MKUltra — a vast, illegal program of human experimentation designed to develop techniques for mind control, interrogation, and psychological torture. At least 150 research projects were funded across 80+ institutions including universities, hospitals, and prisons. Thousands of unwitting American and Canadian citizens were subjected to LSD, electroshock, sensory deprivation, sexual abuse, and psychological torture. CIA Director Richard Helms ordered the destruction of most MKUltra files in 1973; only 20,000 documents survived due to a filing error.',
  scale: {
    projects: '149+',
    institutions: '80+',
    duration: '20 years (1953-1973)',
    victims: 'Thousands (exact number unknown — records destroyed)',
    budget: '$25+ million ($250M+ in 2024 dollars)',
  },
  subprojects: [
    { name: 'Subproject 68 (Dr. Ewen Cameron)', description: 'McGill University — "psychic driving," forced LSD, 30-65 days continuous sleep, 150+ ECT sessions to erase memories. Victims included a sitting Canadian member of parliament\'s wife.', victims: '332 patients without consent' },
    { name: 'Subproject 54 (Navy)', description: 'Attempted to find a way to cause concussions, amnesia, or death through sub-aural frequency blasts', victims: 'Unknown' },
    { name: 'Subproject 119', description: 'Techniques for activating the human organism by remote electronic means — precursor to modern neurostimulation', victims: 'Unknown' },
    { name: 'Operation Midnight Climax', description: 'CIA-operated brothels in San Francisco and New York where prostitutes lured unwitting men who were dosed with LSD behind one-way mirrors while CIA agents watched', victims: 'Hundreds' },
    { name: 'Subproject 3 (Dr. James Hamilton)', description: 'Testing of hallucinogens on prisoners at Vacaville, Bordentown, and other prisons', victims: 'Hundreds of prisoners' },
    { name: 'Subproject 22 (Dr. Charles Geschickter)', description: 'Hypnosis and drugs on terminal cancer patients at Georgetown University', victims: 'Unknown number — patients unable to consent' },
  ],
  keyFigures: [
    { name: 'Allen Dulles', role: 'CIA Director (1953-1961) who authorized MKUltra', href: '/entities/individuals/allen-dulles', status: 'Deceased — Never prosecuted' },
    { name: 'Richard Helms', role: 'CIA Director who ordered destruction of all MKUltra files in 1973', href: '/entities/individuals/richard-helms', status: 'Deceased — Convicted of perjury before Congress' },
    { name: 'Sidney Gottlieb', role: 'CIA chemist who ran MKUltra — "The Black Sorcerer"', href: '/entities/individuals/sidney-gottlieb', status: 'Deceased — Never prosecuted' },
    { name: 'Ewen Cameron', role: 'McGill psychiatrist who tortured patients with "psychic driving"', status: 'Deceased — Never prosecuted' },
    { name: 'Frank Olson', role: 'Army scientist dosed with LSD without consent, died falling from hotel window', href: '/entities/individuals/frank-olson', status: 'Victim — Death ruled homicide by Manhattan DA (1996)' },
    { name: 'Donald Ewen Cameron', role: 'President of the American Psychiatric Association while torturing patients', status: 'Deceased — Never disciplined by APA' },
    { name: 'George Hunter White', role: 'Federal narcotics agent who ran Operation Midnight Climax', status: 'Deceased — Retired with honors' },
    { name: 'Ted Kaczynski', role: 'Harvard student subjected to MKUltra experiments at age 16', status: 'Deceased — Became the Unabomber' },
  ],
  techniques: [
    { method: 'LSD Administration', description: 'Subjects dosed without knowledge or consent, sometimes for weeks continuously. CIA employees, military personnel, prisoners, mental patients, and random citizens were all targeted.', legality: 'Violation of Nuremberg Code, Geneva Convention, US Constitution' },
    { method: 'Electroconvulsive Therapy (ECT)', description: 'Multiple daily sessions at 30-40x normal therapeutic voltage to "de-pattern" brains and erase memories', legality: 'Assault, torture under all definitions' },
    { method: 'Sensory Deprivation', description: 'Subjects confined in dark, soundproof rooms for weeks to months. Some wore blackout goggles and earmuffs continuously.', legality: 'Torture' },
    { method: 'Hypnosis', description: 'Attempted creation of "Manchurian candidates" — hypno-programmed assassins. Combined with drugs for enhanced suggestibility.', legality: 'Assault, conspiracy' },
    { method: 'Sexual Abuse', description: 'Operation Midnight Climax used sex workers to dose unwitting targets. Children were used in some subprojects.', legality: 'Sexual assault, child abuse, trafficking' },
    { method: 'Psychic Driving', description: 'Dr. Cameron forced patients to listen to repetitive recorded messages for 16+ hours/day while drugged and in medically-induced comas', legality: 'Torture, assault, medical malpractice' },
  ],
  institutions: [
    'Harvard University', 'Stanford University', 'Columbia University', 'McGill University (Allan Memorial Institute)',
    'Georgetown University', 'UC Berkeley', 'University of Oklahoma', 'University of Rochester',
    'Indiana University', 'University of Minnesota', 'Boston Psychopathic Hospital',
    'Bureau of Narcotics (predecessor to DEA)', 'US Army Chemical Corps, Fort Detrick',
    'Vacaville State Prison', 'Bordentown Reformatory', 'Atlanta Federal Penitentiary',
  ],
  timeline: [
    { date: 'April 13, 1953', event: 'CIA Director Allen Dulles authorizes Project MKUltra, initially a response to alleged Soviet, Chinese, and North Korean brainwashing techniques used on Korean War POWs' },
    { date: '1953', event: 'Sidney Gottlieb begins coordinating 149+ subprojects across universities, hospitals, pharmaceutical companies, and prisons' },
    { date: 'Nov 19, 1953', event: 'Army scientist Frank Olson is secretly dosed with LSD by Sidney Gottlieb at a CIA retreat. Nine days later, Olson falls to his death from a 13th-floor hotel window in New York City.' },
    { date: '1954-1964', event: 'Dr. Ewen Cameron conducts "psychic driving" experiments at McGill University, destroying patients\' memories through massive ECT and LSD doses. The CIA funds his work through a front organization.' },
    { date: '1955-1965', event: 'Operation Midnight Climax: CIA-run brothels in San Francisco and New York dose unwitting men with LSD while agents watch from behind one-way mirrors.' },
    { date: '1957-1962', event: 'Harvard psychologist Henry Murray conducts abusive experiments on 22 undergraduates including 16-year-old Ted Kaczynski, later the Unabomber.' },
    { date: '1963', event: 'CIA Inspector General John Earman issues internal report criticizing MKUltra\'s lack of oversight and ethical violations. Program continues.' },
    { date: '1964', event: 'MKUltra renamed MKSEARCH. Research continues with reduced scope.' },
    { date: '1973', event: 'CIA Director Richard Helms orders destruction of all MKUltra files before leaving office. A financial records cache of ~20,000 documents survives due to a filing error.' },
    { date: 'Dec 22, 1974', event: 'Seymour Hersh publishes New York Times article revealing CIA domestic spying, triggering investigations.' },
    { date: '1975', event: 'Church Committee (Senate) and Rockefeller Commission investigate CIA abuses; MKUltra becomes public.' },
    { date: '1977', event: 'Senate hearings on MKUltra. Senator Ted Kennedy: "The Deputy Director of the CIA revealed that over thirty universities and institutions were involved." Surviving 20,000 documents are released through FOIA.' },
    { date: '1975-1977', event: 'Olson family receives $750,000 settlement and personal apology from President Ford and CIA Director Colby after threatening to sue.' },
    { date: '1980', event: 'Canadian victims of Dr. Cameron file lawsuit. Eventually settled for $100,000 per victim in 1992.' },
    { date: '1994', event: 'Advisory Committee on Human Radiation Experiments confirms scope of Cold War-era government experiments on unwitting subjects.' },
    { date: '1996', event: 'Manhattan DA reopens Frank Olson case; forensic pathologist finds evidence consistent with homicide, not suicide.' },
    { date: '2018', event: 'Additional declassified documents reveal scope of sexual abuse and child experimentation in some subprojects.' },
  ],
  legalOutcomes: [
    { defendant: 'Richard Helms', charge: 'Perjury before Congress (lying about CIA activities in Chile)', outcome: 'Pled no contest, $2,000 fine, no prison. Wore conviction "like a badge of honor."' },
    { defendant: 'Sidney Gottlieb', charge: 'None — granted immunity in exchange for testimony', outcome: 'Retired to rural Virginia, raised goats. Died 1999.' },
    { defendant: 'CIA (Frank Olson case)', charge: 'Settlement for wrongful death', outcome: '$750,000 to Olson family (1975). Case reopened by Manhattan DA in 1996.' },
    { defendant: 'CIA (Canadian victims)', charge: 'Lawsuit by 77 Cameron victims', outcome: '$100,000 per victim settlement (1992) — approximately $7.7 million total' },
    { defendant: 'U.S. Government', charge: 'Various civil suits by victims', outcome: 'Most dismissed on national security grounds or statute of limitations' },
  ],
  charges: [
    { statute: 'Nuremberg Code (1947)', description: 'All human experimentation requires voluntary informed consent', count: 'Violated across all 149+ subprojects' },
    { statute: '18 U.S.C. § 242 — Deprivation of Rights Under Color of Law', description: 'Government agents subjecting persons to deprivation of constitutional rights', count: 'Thousands of instances — never prosecuted' },
    { statute: '18 U.S.C. § 1111 — Murder (Frank Olson)', description: 'Possible homicide disguised as suicide', count: '1 count — never prosecuted federally' },
    { statute: 'Assault and Battery', description: 'Forcible administration of drugs, ECT, sensory deprivation', count: 'Thousands of instances — never prosecuted' },
    { statute: 'Geneva Convention (Article 3, Common)', description: 'Prohibition of violence, cruel treatment, and torture', count: 'Mass violations — no accountability' },
    { statute: '18 U.S.C. § 1519 — Destruction of Records', description: 'Richard Helms ordered destruction of MKUltra files', count: 'Only charged with perjury, not obstruction' },
  ],
  coverup: [
    'CIA Director Richard Helms ordered ALL MKUltra files destroyed in 1973 — only 20,000 documents survived a filing error',
    'No CIA officer was ever criminally prosecuted for MKUltra despite thousands of victims',
    'Frank Olson\'s death was ruled "suicide" for 22 years before Manhattan DA found evidence of homicide',
    'Sidney Gottlieb was granted immunity from prosecution in exchange for testimony that was largely evasive',
    'Many institutional participants (Harvard, Stanford, etc.) have never fully disclosed their involvement',
    'The full scope remains unknown because the vast majority of records were intentionally destroyed',
    'Victims were chosen specifically because they could not easily report abuse: prisoners, mental patients, sex workers, minorities',
  ],
  sources: [
    { title: 'Church Committee Final Report — Book I: Foreign and Military Intelligence', url: 'https://www.intelligence.senate.gov/sites/default/files/94755_I.pdf', date: '1976' },
    { title: 'Senate Hearing: Project MKUltra, The CIA\'s Program of Research in Behavioral Modification', url: 'https://www.intelligence.senate.gov/sites/default/files/hearings/95mkultra.pdf', date: '1977' },
    { title: 'CIA Inspector General Report on MKUltra (1963)', url: 'https://nsarchive2.gwu.edu/NSAEBB/NSAEBB439/docs/Area%2011%20-%20IG%20investigations.pdf', date: '1963/Declassified' },
    { title: 'Frank Olson Project — Declassified Documents', url: 'https://frankolsonproject.org/', date: 'Ongoing' },
    { title: 'National Security Archive: CIA Mind Control Collection', url: 'https://nsarchive2.gwu.edu/NSAEBB/NSAEBB439/', date: 'Various' },
    { title: 'Advisory Committee on Human Radiation Experiments Final Report', url: 'https://bioethicsarchive.georgetown.edu/achre/final/report.html', date: '1994' },
    { title: 'New York Times: Seymour Hersh CIA Exposé', url: 'https://www.nytimes.com/1974/12/22/archives/huge-cia-operation-reported-in-us-against-antiwar-forces.html', date: '1974' },
    { title: 'The Poisoner in Chief: Sidney Gottlieb and the CIA Search for Mind Control (Stephen Kinzer)', url: 'https://www.penguinrandomhouse.com/books/533751/the-poisoner-in-chief-by-stephen-kinzer/', date: '2019' },
  ],
};

export default function MKUltraPage() {
  return (
    <div className="min-h-screen pt-20 lg:pt-24 pb-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <Link href="/investigations" className="inline-flex items-center gap-2 text-zinc-400 hover:text-blood-500 transition-colors mb-6 pt-4">
          <ArrowLeft className="w-4 h-4" />
          Back to Investigations
        </Link>

        {/* Header */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="border-2 border-blood-800/60 bg-black/80 p-6 lg:p-8 mb-8">
          <div className="flex items-center gap-3 mb-4">
            <span className="px-3 py-1 text-xs font-bold uppercase border border-red-500/30 bg-red-500/20 text-red-400">{investigation.severity}</span>
            <span className="px-3 py-1 text-xs font-bold uppercase border border-zinc-500/30 bg-zinc-500/20 text-zinc-400">{investigation.status}</span>
          </div>
          <h1 className="text-3xl lg:text-4xl font-black text-white uppercase tracking-wider mb-2">
            <GlitchText text={investigation.title} />
          </h1>
          <p className="text-lg text-blood-500 font-bold mb-4">{investigation.subtitle}</p>
          <p className="text-zinc-400 leading-relaxed">{investigation.summary}</p>
        </motion.div>

        {/* Scale */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="border-2 border-red-800/60 bg-red-950/20 p-6 mb-8">
          <h2 className="text-xl font-bold text-white uppercase tracking-wider mb-4 flex items-center gap-2">
            <Skull className="w-5 h-5 text-red-500" />
            Scale of the Program
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
            {Object.entries(investigation.scale).map(([key, val]) => (
              <div key={key} className="text-center p-4 border border-red-500/30 bg-red-950/30">
                <p className="text-2xl font-black text-red-500">{val}</p>
                <p className="text-xs text-zinc-400 capitalize">{key.replace(/([A-Z])/g, ' $1').trim()}</p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Cover-Up */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.15 }} className="glass-card p-6 mb-8 border-l-4 border-blood-600">
          <h2 className="text-xl font-bold text-white uppercase tracking-wider mb-4 flex items-center gap-2">
            <ShieldAlert className="w-5 h-5 text-blood-500" />
            The Cover-Up
          </h2>
          <div className="space-y-3">
            {investigation.coverup.map((item, idx) => (
              <div key={idx} className="p-3 bg-red-950/20 border border-red-500/30">
                <p className="text-sm text-zinc-300">{item}</p>
              </div>
            ))}
          </div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-8">
            {/* Known Subprojects */}
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="glass-card p-6">
              <h2 className="text-xl font-bold text-white uppercase tracking-wider mb-4 flex items-center gap-2">
                <Brain className="w-5 h-5 text-blood-500" />
                Known Subprojects
              </h2>
              <div className="space-y-4">
                {investigation.subprojects.map((proj, idx) => (
                  <div key={idx} className="p-4 bg-zinc-900/50 border border-zinc-800">
                    <p className="font-bold text-blood-400 text-sm">{proj.name}</p>
                    <p className="text-sm text-zinc-300 mt-2">{proj.description}</p>
                    <p className="text-xs text-red-400 mt-2">Known victims: {proj.victims}</p>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Techniques Used */}
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.25 }} className="glass-card p-6">
              <h2 className="text-xl font-bold text-white uppercase tracking-wider mb-4 flex items-center gap-2">
                <AlertTriangle className="w-5 h-5 text-blood-500" />
                Techniques of Torture
              </h2>
              <div className="space-y-4">
                {investigation.techniques.map((tech, idx) => (
                  <div key={idx} className="p-4 bg-zinc-900/50 border border-zinc-800">
                    <p className="font-bold text-white text-sm">{tech.method}</p>
                    <p className="text-sm text-zinc-300 mt-2">{tech.description}</p>
                    <p className="text-xs text-red-400 mt-2">Legal violation: {tech.legality}</p>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Key Figures */}
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }} className="glass-card p-6">
              <h2 className="text-xl font-bold text-white uppercase tracking-wider mb-4 flex items-center gap-2">
                <Users className="w-5 h-5 text-blood-500" />
                Key Figures
              </h2>
              <div className="space-y-3">
                {investigation.keyFigures.map((figure, idx) => (
                  <div key={idx} className="flex items-start justify-between p-3 bg-zinc-900/50 border border-zinc-800">
                    <div className="flex-1">
                      {figure.href ? (
                        <Link href={figure.href} className="font-bold text-blood-400 hover:text-blood-300 transition-colors">{figure.name}</Link>
                      ) : (
                        <span className="font-bold text-white">{figure.name}</span>
                      )}
                      <p className="text-sm text-zinc-400 mt-1">{figure.role}</p>
                    </div>
                    <span className="text-xs px-2 py-1 bg-zinc-800 text-zinc-400 border border-zinc-700 whitespace-nowrap ml-2">{figure.status}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Participating Institutions */}
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.35 }} className="glass-card p-6">
              <h2 className="text-xl font-bold text-white uppercase tracking-wider mb-4 flex items-center gap-2">
                <FileText className="w-5 h-5 text-blood-500" />
                Known Participating Institutions
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                {investigation.institutions.map((inst, idx) => (
                  <div key={idx} className="p-2 bg-zinc-900/50 border border-zinc-800 text-sm text-zinc-300">{inst}</div>
                ))}
              </div>
            </motion.div>

            {/* Charges */}
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }} className="glass-card p-6">
              <h2 className="text-xl font-bold text-white uppercase tracking-wider mb-4 flex items-center gap-2">
                <Scale className="w-5 h-5 text-blood-500" />
                Applicable Charges &amp; Statutes
              </h2>
              <div className="space-y-3">
                {investigation.charges.map((charge, idx) => (
                  <div key={idx} className="p-4 bg-zinc-900/50 border border-zinc-800">
                    <p className="font-bold text-blood-400 text-sm font-mono">{charge.statute}</p>
                    <p className="text-sm text-zinc-300 mt-1">{charge.description}</p>
                    <p className="text-xs text-red-400 mt-1">{charge.count}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Timeline */}
            <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} className="glass-card p-6">
              <h3 className="text-lg font-bold text-white uppercase tracking-wider mb-4 flex items-center gap-2">
                <Calendar className="w-4 h-4 text-blood-500" />
                Timeline
              </h3>
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

            {/* Legal Outcomes */}
            <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.1 }} className="glass-card p-6">
              <h3 className="text-lg font-bold text-white uppercase tracking-wider mb-4 flex items-center gap-2">
                <Scale className="w-5 h-5 text-blood-500" />
                Legal Outcomes
              </h3>
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

            {/* Sources */}
            <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.2 }} className="glass-card p-6">
              <h3 className="text-lg font-bold text-white uppercase tracking-wider mb-4">Sources</h3>
              <div className="space-y-2">
                {investigation.sources.map((source, idx) => (
                  <a key={idx} href={source.url} target="_blank" rel="noopener noreferrer" className="flex items-start gap-2 p-2 text-sm text-zinc-400 hover:text-blood-400 hover:bg-zinc-900/50 transition-colors">
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
