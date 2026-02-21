'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowLeft, AlertTriangle, Users, Calendar, FileText, ExternalLink, Scale, ShieldAlert, Skull } from 'lucide-react';
import GlitchText from '@/components/effects/GlitchText';

const investigation = {
  title: 'Project 2025',
  subtitle: 'The Heritage Foundation\'s 920-Page Authoritarian Blueprint to Dismantle American Democracy and Establish One-Party Rule',
  severity: 'critical',
  status: 'ACTIVE — IMPLEMENTATION IN PROGRESS',
  summary: 'Project 2025 is a $22 million initiative coordinated by the Heritage Foundation and over 100 far-right organizations to fundamentally restructure the United States federal government into an instrument of authoritarian executive power. The 920-page policy document, titled "Mandate for Leadership: The Conservative Promise," lays out a detailed plan to purge tens of thousands of career civil servants and replace them with pre-vetted political loyalists through the reinstatement of Schedule F, weaponize the Department of Justice to prosecute political opponents, dismantle environmental protections by gutting the EPA and abolishing the Department of Education, criminalize abortion nationwide, roll back LGBTQ+ rights, end climate change research, militarize immigration enforcement including mass deportation camps, consolidate executive power by bringing independent agencies under direct presidential control, and replace the merit-based civil service with a spoils system loyal to a single individual. The project has been training an army of 20,000+ loyalist operatives through its Presidential Administration Academy since 2023, creating a "government-in-waiting" ready to seize control of every federal agency on Day One. Despite Donald Trump\'s public attempts to distance himself from the project, at least 140 people who worked in his administration contributed to it, and its architects — Kevin Roberts, Russell Vought, Stephen Miller — are core Trump allies. This is not a policy proposal. It is a detailed operational plan for the destruction of American democratic governance.',
  keyFigures: [
    { name: 'Kevin Roberts', role: 'Heritage Foundation President and Project 2025 mastermind. Declared the project a "second American Revolution" that "will remain bloodless if the left allows it to be" — an open threat of political violence. Previously purged professors at Texas universities.', href: '/entities/individuals/kevin-roberts', status: 'Active — Leading implementation' },
    { name: 'Leonard Leo', role: 'Federalist Society co-chairman and dark money kingpin who controls a $1.6 billion political network. Architect of the Supreme Court supermajority. Connected to Project 2025 through overlapping donor networks and organizational ties.', href: '/entities/individuals/leonard-leo', status: 'Active — Dark money architect' },
    { name: 'Russell Vought', role: 'Former OMB Director and author of Project 2025\'s Chapter 2 on Executive Office of the President. Architect of the "unitary executive" strategy to place all federal power under presidential control. Secretly recorded discussing plans to "radically reshape" government.', href: '/entities/individuals/russell-vought', status: 'Active — Policy architect' },
    { name: 'Stephen Miller', role: 'Former Senior Advisor and founder of America First Legal. Author of the mass deportation and immigration crackdown components. Architect of family separation policy. Connected to white nationalist networks through leaked emails.', href: '/entities/individuals/stephen-miller', status: 'Active — Immigration hardliner' },
    { name: 'Mark Meadows', role: 'Former White House Chief of Staff and Project 2025 contributor. Coordinated between Trump administration veterans and Heritage Foundation. RICO defendant in Georgia election interference case.', href: '/entities/individuals/mark-meadows', status: 'Cooperating witness — GA RICO' },
    { name: 'John McEntee', role: 'Former Director of the Presidential Personnel Office who led Trump-era loyalty purges. Now leads Project 2025\'s personnel database — vetting 20,000+ applicants for ideological loyalty to install across every federal agency.', href: '/entities/individuals/john-mcentee', status: 'Active — Personnel czar' },
    { name: 'Jeffrey Clark', role: 'Former DOJ official who attempted to use the Department of Justice to overturn the 2020 election. Project 2025 contributor focused on weaponizing DOJ. Indicted in Georgia RICO case.', href: '/entities/individuals/jeffrey-clark', status: 'Indicted — GA RICO' },
    { name: 'Michael Flynn', role: 'Former National Security Advisor (fired for lying to FBI). Advocates for martial law and military tribunals. Connected to Project 2025 networks through MAGA movement infrastructure.', href: '/entities/individuals/michael-flynn', status: 'Pardoned — Active in MAGA' },
    { name: 'Ken Cuccinelli', role: 'Former Acting DHS Deputy Secretary. Project 2025 contributor on immigration enforcement. Advocates for ending birthright citizenship and deploying military for mass deportations.', href: '/entities/individuals/ken-cuccinelli', status: 'Active — Immigration hawk' },
    { name: 'Rick Dearborn', role: 'Former Trump Deputy Chief of Staff and Heritage Foundation advisor. Coordinates between Project 2025 policy teams and potential administration appointees.', href: '/entities/individuals/rick-dearborn', status: 'Active — Transition planning' },
    { name: 'Christopher Miller', role: 'Former Acting Secretary of Defense installed after Trump fired Mark Esper. Oversaw Pentagon during January 6th delay. Project 2025 contributor on defense restructuring.', href: '/entities/individuals/christopher-miller', status: 'Active — Defense contributor' },
    { name: 'Peter Navarro', role: 'Former White House trade advisor convicted of contempt of Congress for defying January 6th subpoena. Spent 4 months in prison. Advocates for extreme executive power expansion.', href: '/entities/individuals/peter-navarro', status: 'Convicted — Contempt of Congress' },
    { name: 'Roger Severino', role: 'Former HHS Office for Civil Rights Director and Project 2025 chapter author. Architects HHS restructuring to eliminate reproductive rights, transgender health protections, and civil rights enforcement.', href: '/entities/individuals/roger-severino', status: 'Active — HHS architect' },
    { name: 'Russ Vought', role: 'Center for Renewing America founder secretly recorded by undercover journalist describing plans to "flood the zone" with executive orders and obliterate the administrative state on Day One', href: '/entities/individuals/russell-vought', status: 'Active — Strategic planner' },
  ],
  timeline: [
    { date: '1981', event: 'Heritage Foundation publishes original "Mandate for Leadership" — Reagan adopts 60% of its 2,000 recommendations within first year, establishing the template for Project 2025' },
    { date: '2020-10-22', event: 'Trump signs Executive Order 13957 creating Schedule F — a new classification allowing the firing of tens of thousands of career civil servants and replacing them with political loyalists' },
    { date: '2021-01-22', event: 'Biden revokes Schedule F on his second day in office — but Heritage Foundation immediately begins planning to reinstate and expand it' },
    { date: '2022-04-01', event: 'Heritage Foundation formally launches Project 2025 with a $22 million budget, uniting over 100 conservative organizations in the most comprehensive government takeover plan in American history' },
    { date: '2022-06-24', event: 'Supreme Court overturns Roe v. Wade in Dobbs v. Jackson — a preview of Project 2025\'s judicial strategy, achieved through Leonard Leo\'s captured Court' },
    { date: '2023-01-01', event: 'Presidential Administration Academy launches — an online training program vetting and preparing 20,000+ loyalists for federal positions, requiring ideological screening and commitment to the "unitary executive"' },
    { date: '2023-04-20', event: 'Heritage Foundation publishes the 920-page "Mandate for Leadership 2025" policy document — detailing the dismantlement of the administrative state agency by agency' },
    { date: '2023-07-01', event: 'Russell Vought secretly recorded by undercover Centre for Climate Reporting journalist describing plans to executive power, "radical" restructuring, and Christian nationalism as governing philosophy' },
    { date: '2023-09-15', event: 'Analysis reveals 140+ former Trump administration officials contributed to Project 2025 — despite Trump\'s public denials of connection to the project' },
    { date: '2023-11-13', event: 'Trump announces plan to reinstate Schedule F on Day One, proposing to reclassify up to 50,000 federal employees as at-will and fireable — the cornerstone of Project 2025\'s personnel strategy' },
    { date: '2024-01-15', event: 'Kevin Roberts tells media he believes in the "second American Revolution" and that Project 2025 will "institutionalize Trumpism" regardless of whether Trump wins or not' },
    { date: '2024-02-01', event: 'Project 2025 training videos leaked showing participants being coached on how to identify and purge "disloyal" civil servants, circumvent congressional oversight, and consolidate agency power' },
    { date: '2024-07-04', event: 'Kevin Roberts declares on Steve Bannon\'s podcast: "We are in the process of the second American Revolution, which will remain bloodless if the left allows it to be"' },
    { date: '2024-07-05', event: 'Trump publicly claims he "knows nothing about Project 2025" and has "no idea who is behind it" — despite 140+ of his former officials contributing and his close ties to Kevin Roberts' },
    { date: '2024-07-30', event: 'Project 2025 director Paul Dans steps down amid public backlash — Heritage Foundation insists the policy work is "complete" and implementation planning continues regardless' },
    { date: '2024-11-05', event: 'Trump wins presidential election — Project 2025 transition teams immediately begin identifying targets for personnel replacement across all federal agencies' },
    { date: '2025-01-20', event: 'Trump issues dozens of executive orders on Day One implementing core Project 2025 recommendations — including federal DEI program elimination, immigration crackdowns, and agency restructuring' },
    { date: '2025-02-01', event: 'DOGE (Department of Government Efficiency) begins mass federal employee firings aligned with Project 2025 personnel strategy — thousands of career civil servants terminated across multiple agencies' },
  ],
  legalOutcomes: [
    { defendant: 'Schedule F Implementation', charge: 'Unconstitutional violation of civil service protections established by the Pendleton Civil Service Reform Act of 1883 — converting merit-based positions to political patronage', outcome: 'Multiple lawsuits filed challenging the legality of mass firings — courts have issued some temporary restraining orders' },
    { defendant: 'EPA Gutting', charge: 'Violates the Clean Air Act, Clean Water Act, and National Environmental Policy Act by eliminating enforcement capacity and regulatory authority', outcome: 'Environmental groups filing emergency litigation — implementation proceeding despite legal challenges' },
    { defendant: 'DOJ Weaponization', charge: 'Using the Department of Justice to investigate and prosecute political opponents violates the constitutional separation of powers and due process protections', outcome: 'Ongoing — unprecedented politicization of federal law enforcement' },
    { defendant: 'Mass Deportation Operations', charge: 'Immigration enforcement operations violating the Fourth Amendment, due process, and international refugee law obligations', outcome: 'ACLU and immigration organizations filing challenges nationwide' },
    { defendant: 'Education Department Dismantling', charge: 'Attempting to abolish a Cabinet-level department without congressional authorization violates the separation of powers', outcome: 'Legal challenges pending — Congress has not authorized abolition' },
    { defendant: 'Reproductive Rights Rollback', charge: 'Reinterpreting the Comstock Act to ban mailing abortion medication constitutes an end-run around democratic legislative process', outcome: 'Litigation challenging Comstock Act reinterpretation filed in multiple jurisdictions' },
    { defendant: 'Federal Employee Purges', charge: 'Mass terminations violating due process, First Amendment protections, and federal employment law', outcome: 'Federal employee unions filing emergency injunctions — some firings temporarily blocked' },
    { defendant: 'Heritage Foundation / Project 2025', charge: 'Coordinated campaign to subvert democratic governance through pre-planned capture of federal agencies constitutes a conspiracy against the rights of citizens', outcome: 'No criminal investigation — operating in plain sight under the guise of "policy recommendations"' },
  ],
  charges: [
    { statute: '18 U.S.C. § 595 — Interference with Civil Service', description: 'Using political loyalty tests to hire and fire federal employees violates civil service protections and constitutes interference with merit-based government employment', count: '50,000+ positions targeted for political conversion under Schedule F' },
    { statute: '5 U.S.C. § 2302 — Prohibited Personnel Practices', description: 'Firing career civil servants based on political beliefs, perceived disloyalty, or failure to implement partisan agenda violates federal prohibited personnel practice statutes', count: 'Thousands of career employees targeted across every agency' },
    { statute: '18 U.S.C. § 241 — Conspiracy Against Rights', description: 'Coordinated plan to deprive American citizens of their constitutional rights through captured federal agencies, weaponized DOJ, and elimination of civil service protections', count: 'Systematic conspiracy involving 100+ organizations and 20,000+ operatives' },
    { statute: '18 U.S.C. § 1505 — Obstruction of Congressional Proceedings', description: 'Plans to bring independent agencies under direct presidential control and circumvent congressional oversight violate the constitutional separation of powers', count: 'Multiple independent agencies targeted for executive capture' },
    { statute: 'Administrative Procedure Act (5 U.S.C. § 551 et seq.)', description: 'Implementing sweeping regulatory rollbacks without required notice-and-comment rulemaking violates the APA and due process', count: 'Hundreds of regulations targeted for elimination without proper process' },
    { statute: 'Clean Air Act / Clean Water Act Violations', description: 'Dismantling EPA enforcement capacity and withdrawing environmental regulations violates statutory obligations to protect public health and the environment', count: 'Comprehensive rollback of 50+ years of environmental protection' },
    { statute: 'First Amendment — Freedom of Speech & Association', description: 'Political loyalty tests for federal employment, suppression of scientific research, and censorship of government communications violate the First Amendment', count: 'Government-wide suppression of dissent and scientific information' },
    { statute: '18 U.S.C. § 371 — Conspiracy to Defraud the United States', description: 'Coordinated effort to interfere with the lawful functions of federal agencies through deceptive means — including Trump\'s denial of knowledge despite 140+ contributors from his administration', count: 'Multi-year conspiracy involving Heritage Foundation, 100+ organizations, and Trump allies' },
    { statute: 'Pendleton Civil Service Reform Act of 1883', description: 'The foundational law establishing merit-based civil service — Schedule F represents the most direct attack on this law since its passage 140 years ago', count: 'Complete subversion of the merit-based civil service system' },
  ],
  coverup: [
    'Donald Trump publicly claimed he "knows nothing about Project 2025" and has "no idea who is behind it" — despite the fact that at least 140 former Trump administration officials contributed to the document, its director was a Trump appointee, and Kevin Roberts is a close Trump ally.',
    'After public backlash, Heritage Foundation removed the names of contributors from the Project 2025 website and attempted to rebrand the initiative — while insisting the policy work was "complete" and implementation planning would continue.',
    'Project 2025 training videos were conducted in secret, vetting participants for ideological loyalty. When videos leaked showing coaching on purging civil servants and circumventing oversight, Heritage claimed they were "educational" materials.',
    'Russell Vought was secretly recorded describing plans for radical government restructuring and Christian nationalism — when the recordings were published, the organization denied the implications while continuing to implement the exact strategies described.',
    'The $22 million funding for Project 2025 was funneled through a dark money network making it impossible to trace all donors — the same network Leonard Leo uses to fund judicial capture and Supreme Court influence operations.',
    'Heritage Foundation and allied organizations coordinated a media strategy to dismiss criticism of Project 2025 as "conspiracy theories" and "left-wing hysteria" — while simultaneously executing every component of the plan in plain sight.',
    'The personnel database vetting 20,000+ loyalists operates with minimal transparency — applicants are screened for ideological alignment rather than competence, creating a shadow government-in-waiting outside any democratic accountability.',
    'When journalists began investigating connections between Project 2025 and the Trump campaign, both entities issued coordinated denials — while Trump allies simultaneously praised the document as the "governing blueprint" for a second term.',
    'The Heritage Foundation classified the full personnel database and training materials, refusing FOIA requests and congressional inquiries about the scope of the loyalty vetting operation.',
  ],
  sources: [
    { title: 'Heritage Foundation — "Mandate for Leadership 2025: The Conservative Promise" (Full 920-Page Document)', url: 'https://www.project2025.org/policy/', date: '2023' },
    { title: 'CNN — "What is Project 2025? The ultra-conservative plan for a second Trump presidency"', url: 'https://www.cnn.com/2024/07/10/politics/project-2025-trump-explained/index.html', date: '2024-07-10' },
    { title: 'The New York Times — "Inside the Heritage Foundation\'s Plans for \'Institutionalizing Trumpism\'"', url: 'https://www.nytimes.com/2024/01/21/magazine/heritage-foundation-project-2025.html', date: '2024-01-21' },
    { title: 'ProPublica — "Inside Project 2025\'s Secret Training Videos"', url: 'https://www.propublica.org/article/inside-project-2025-secret-training-videos', date: '2024-08-29' },
    { title: 'The Guardian — "Kevin Roberts: \'Second American Revolution\' will be bloodless \'if the left allows it\'"', url: 'https://www.theguardian.com/us-news/article/2024/jul/04/project-2025-heritage-foundation-kevin-roberts', date: '2024-07-04' },
    { title: 'Centre for Climate Reporting — "Russell Vought Secret Recordings on Project 2025 Plans"', url: 'https://www.cfcr.org.uk/project-2025', date: '2023-07-01' },
    { title: 'Democracy Forward — "Tracking Project 2025 Implementation"', url: 'https://democracyforward.org/project-2025/', date: '2024' },
    { title: 'NPR — "What is Schedule F, and why does it matter?"', url: 'https://www.npr.org/2023/11/13/1212810705/trump-schedule-f-plan-explained', date: '2023-11-13' },
    { title: 'The Washington Post — "The anti-government crusade behind Project 2025"', url: 'https://www.washingtonpost.com/politics/2024/08/10/project-2025-heritage-foundation/', date: '2024-08-10' },
    { title: 'Media Matters — "The 140+ Trump Administration Officials Behind Project 2025"', url: 'https://www.mediamatters.org/heritage-foundation/guide-project-2025-former-trump-administration-officials', date: '2024-07-12' },
  ],
};

export default function Project2025Page() {
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
