'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowLeft, AlertTriangle, Users, Calendar, FileText, ExternalLink, Scale, ShieldAlert, Skull } from 'lucide-react';
import GlitchText from '@/components/effects/GlitchText';

const investigation = {
  title: 'Gulf of Tonkin Incident',
  subtitle: 'The Fabricated Naval Attack That Gave a President Unchecked War Powers and Launched America\'s Deadliest Foreign Policy Disaster',
  severity: 'critical',
  status: 'Confirmed — Declassified NSA Documents',
  summary: 'On August 2, 1964, the USS Maddox engaged three North Vietnamese torpedo boats in the Gulf of Tonkin — a real but deliberately provoked encounter, as the Maddox was conducting covert signals intelligence in support of South Vietnamese commando raids (OPLAN 34A) against the North. Two days later, on August 4, Captain John Herrick reported a second attack on the Maddox and USS Turner Joy. Within hours, President Lyndon B. Johnson went on national television to announce "unprovoked" aggression and ordered retaliatory airstrikes. Congress passed the Gulf of Tonkin Resolution on August 7 with only two dissenting votes, granting LBJ virtually unlimited authority to wage war without a formal declaration. The second attack never happened. Radar operators were tracking phantom contacts in heavy seas. Sonar men were hearing their own ship\'s propeller noise. Commander James Stockdale, flying overhead that night, saw no enemy vessels, no torpedo wakes, no gunfire — nothing but black water. NSA signals intelligence analysts had manipulated intercepts to support a narrative of attack that matched what Washington wanted to hear. Secretary of Defense Robert McNamara personally suppressed contradictory evidence and lied repeatedly to Congress. Declassified NSA documents released in 2005 confirmed that the second attack was fabricated, that intelligence was deliberately distorted, and that the Johnson administration knowingly used a non-event to justify a war that would kill 58,220 Americans and an estimated 2 to 3 million Vietnamese. The Gulf of Tonkin Resolution became the legal foundation for over a decade of devastating warfare, all built on a lie told to the American people and their elected representatives.',
  keyFigures: [
    { name: 'Lyndon B. Johnson', role: 'President of the United States. Ordered retaliatory strikes within hours of the fabricated second attack and pressured Congress to pass the Gulf of Tonkin Resolution, gaining unchecked war authority.', status: 'Deceased — 1973', href: null },
    { name: 'Robert McNamara', role: 'Secretary of Defense. Personally suppressed evidence contradicting the second attack, lied to Congress during testimony, and drove the escalation. Later admitted doubts in his 1995 memoir "In Retrospect."', status: 'Deceased — 2009', href: '/entities/individuals/robert-mcnamara' },
    { name: 'Dean Rusk', role: 'Secretary of State. Testified before Congress in support of the resolution and publicly defended the administration\'s account of an unprovoked attack despite internal doubts.', status: 'Deceased — 1994', href: null },
    { name: 'Captain John Herrick', role: 'Commander of the Maddox task group. Initially reported the second attack, then sent a cable hours later urging "complete evaluation before any further action" and warning that "freak weather effects on radar" and "overeager sonar men" may have produced false readings. His doubts were ignored.', status: 'Deceased — 2012', href: null },
    { name: 'Commander James Stockdale', role: 'Navy pilot flying overhead during the alleged second attack. Saw absolutely no enemy boats, no torpedo wakes, no weapons fire. Later wrote: "I had the best seat in the house to watch that event, and our destroyers were just shooting at phantom targets."', status: 'Deceased — 2005', href: null },
    { name: 'Senator Wayne Morse', role: 'One of only two senators to vote against the Gulf of Tonkin Resolution. Warned that the resolution was a predated declaration of war and that Congress was abdicating its constitutional responsibilities.', status: 'Deceased — 1974', href: null },
    { name: 'Senator Ernest Gruening', role: 'The other dissenting vote. Declared from the Senate floor: "All Vietnam is not worth the life of a single American boy" and condemned the resolution as an unconstitutional grant of war powers.', status: 'Deceased — 1974', href: null },
    { name: 'Senator J. William Fulbright', role: 'Chairman of the Senate Foreign Relations Committee. Shepherded the resolution through the Senate, then reversed course and became the war\'s most prominent congressional critic after learning the truth. Held investigative hearings in 1966-1968.', status: 'Deceased — 1995', href: null },
    { name: 'McGeorge Bundy', role: 'National Security Advisor. Helped craft the administration\'s narrative and coordinated the rapid political response, including the pre-drafted resolution text that had been prepared weeks before the incident.', status: 'Deceased — 1996', href: null },
    { name: 'Admiral Ulysses S. Grant Sharp Jr.', role: 'Commander-in-Chief, Pacific (CINCPAC). Pressured Herrick to confirm the second attack and relayed the unverified reports upward to Washington as confirmed intelligence.', status: 'Deceased — 2001', href: null },
    { name: 'General Maxwell Taylor', role: 'Ambassador to South Vietnam and former Chairman of the Joint Chiefs. Advocated for escalation and helped shape the political justification for expanded military operations.', status: 'Deceased — 1987', href: null },
    { name: 'Daniel Ellsberg', role: 'RAND Corporation analyst and former Defense Department official who leaked the Pentagon Papers in 1971, revealing that the government had systematically lied about Tonkin and the entire Vietnam War.', status: 'Deceased — 2023', href: null },
  ],
  timeline: [
    { date: 'January 1964', event: 'OPLAN 34A commando raids against North Vietnam begin under U.S. direction — covert operations the public is never told about.' },
    { date: 'July 30, 1964', event: 'South Vietnamese commandos raid North Vietnamese islands of Hon Me and Hon Ngu as part of OPLAN 34A, inflaming tensions.' },
    { date: 'July 31, 1964', event: 'USS Maddox begins DESOTO patrol in the Gulf of Tonkin, conducting signals intelligence operations miles from the coast.' },
    { date: 'August 2, 1964', event: 'Three North Vietnamese torpedo boats engage the Maddox. The Maddox returns fire and is supported by aircraft from USS Ticonderoga. One bullet hole in the Maddox. Real incident, but provoked by covert U.S. operations.' },
    { date: 'August 3, 1964', event: 'Despite the engagement, USS Turner Joy is ordered to join the Maddox for continued patrols. OPLAN 34A raids resume that same night.' },
    { date: 'August 4, 1964 (PM)', event: 'Maddox and Turner Joy report a second attack based on radar and sonar contacts. Crews fire at empty ocean for two hours. Stockdale overhead sees nothing.' },
    { date: 'August 4, 1964 (late PM)', event: 'Captain Herrick cables Pacific Command: "Review of action makes many reported contacts and torpedoes fired appear doubtful... Suggest complete evaluation before any further action taken."' },
    { date: 'August 4, 1964 (evening)', event: 'Johnson goes on national television to announce "unprovoked" attacks and orders retaliatory airstrikes (Operation Pierce Arrow) against North Vietnamese targets.' },
    { date: 'August 5, 1964', event: 'U.S. aircraft strike North Vietnamese naval bases and an oil storage depot. Two American planes shot down; Lt. Everett Alvarez Jr. becomes first American POW of the war.' },
    { date: 'August 7, 1964', event: 'Congress passes the Gulf of Tonkin Resolution with only 2 dissenting votes (Morse and Gruening). The House vote is 416-0. It grants the president authority to use military force without a declaration of war.' },
    { date: 'February 1965', event: 'LBJ uses the resolution to authorize Operation Rolling Thunder — sustained bombing of North Vietnam that will last over three years.' },
    { date: 'March 1965', event: 'First U.S. combat troops (3,500 Marines) land at Da Nang. By year\'s end, 184,000 troops are in Vietnam.' },
    { date: '1966-1968', event: 'Senator Fulbright holds televised hearings challenging the administration\'s Tonkin Gulf account. McNamara testifies and continues to lie about the evidence.' },
    { date: 'June 1971', event: 'Daniel Ellsberg leaks the Pentagon Papers, revealing the government\'s systematic deception about Vietnam, including the Tonkin incident.' },
    { date: 'January 1971', event: 'Congress repeals the Gulf of Tonkin Resolution, but Nixon continues the war under claimed executive authority.' },
    { date: 'April 30, 1975', event: 'Fall of Saigon. The war ends with 58,220 Americans dead, over 150,000 wounded, and an estimated 2-3 million Vietnamese killed.' },
    { date: '2005', event: 'NSA historian Robert J. Hanyok\'s study is declassified, confirming that NSA intelligence on the August 4 "attack" was deliberately falsified and that agency officials had covered up the fabrication for decades.' },
  ],
  legalOutcomes: [
    { defendant: 'Lyndon B. Johnson', charge: 'Fraud upon Congress, abuse of war powers', outcome: 'Never charged — declined to seek re-election in 1968, died January 22, 1973' },
    { defendant: 'Robert McNamara', charge: 'Perjury before Congress, suppression of evidence', outcome: 'Never charged — became World Bank president, admitted errors in 1995 memoir' },
    { defendant: 'Dean Rusk', charge: 'False testimony supporting fraudulent casus belli', outcome: 'Never charged — returned to academia at University of Georgia' },
    { defendant: 'NSA Officials', charge: 'Falsification of intelligence, cover-up of fabricated signals', outcome: 'Never charged — NSA\'s own 2005 internal history confirmed the deception' },
    { defendant: 'Admiral U.S. Grant Sharp Jr.', charge: 'Pressuring subordinates to confirm false attack reports', outcome: 'Never charged — retired with honors in 1968' },
    { defendant: 'Daniel Ellsberg', charge: 'Espionage, theft, conspiracy (for leaking Pentagon Papers exposing the lies)', outcome: 'All charges dismissed in 1973 due to government misconduct including illegal wiretapping' },
  ],
  charges: [
    { statute: 'U.S. Constitution, Article I, Section 8', description: 'Congress holds the sole power to declare war. The Gulf of Tonkin Resolution effectively transferred this authority to the executive branch based on fabricated intelligence, circumventing the constitutional framework.', count: 'Constitutional violation — undeclared war waged for over a decade' },
    { statute: '18 U.S.C. § 1001 — False Statements', description: 'McNamara and other officials made materially false statements to Congress about the nature and evidence of the August 4 attack, directly influencing the vote on the resolution.', count: 'Multiple counts — repeated false testimony over several years' },
    { statute: '18 U.S.C. § 371 — Conspiracy to Defraud the United States', description: 'Senior administration officials conspired to present fabricated intelligence as genuine, suppress contradictory evidence, and deceive Congress into authorizing military force.', count: 'Ongoing conspiracy from August 1964 through at least 1968' },
    { statute: '18 U.S.C. § 1505 — Obstruction of Congressional Proceedings', description: 'The administration suppressed Captain Herrick\'s cables expressing doubt, manipulated NSA intercepts, and withheld OPLAN 34A details from Congress during deliberations.', count: 'Multiple counts across congressional hearings and briefings' },
    { statute: 'War Powers — Abuse of Executive Authority', description: 'The pre-drafted resolution and predetermined retaliatory strikes indicate the incident was exploited (if not engineered) as a pretext for a war the administration had already decided to pursue.', count: 'Systematic abuse spanning the Johnson and Nixon administrations' },
    { statute: '18 U.S.C. § 1621 — Perjury', description: 'Robert McNamara\'s sworn testimony before the Senate Foreign Relations Committee contained statements he knew to be false regarding the evidence for the second attack.', count: 'Multiple counts during 1964 and 1966-1968 testimony' },
  ],
  coverup: [
    'Captain Herrick\'s cable expressing grave doubts about the second attack was received in Washington before Johnson addressed the nation — and was deliberately suppressed.',
    'The administration concealed OPLAN 34A — the covert commando raids against North Vietnam — from Congress and the public, falsely framing the Maddox patrol as routine and the North Vietnamese response as "unprovoked."',
    'NSA signals intelligence analysts selectively reported intercepts that supported the attack narrative and omitted or altered those that contradicted it. A 2005 NSA internal history confirmed deliberate falsification.',
    'Robert McNamara personally withheld contradictory intelligence from Congress during his testimony supporting the resolution and in subsequent hearings.',
    'The Gulf of Tonkin Resolution had been drafted weeks before the incident — the administration was waiting for a pretext, and the fabricated second attack provided one.',
    'Commander Stockdale\'s eyewitness account (he saw no enemy vessels from directly overhead) was classified and kept from Congress and the public.',
    'When Senator Fulbright began investigating in 1966, the administration stonewalled requests for documents and provided misleading briefings to the committee.',
    'The Pentagon Papers, leaked by Daniel Ellsberg in 1971, revealed that the government had systematically lied about the incident and the war — the Nixon administration tried to suppress their publication through prior restraint.',
    'McNamara continued to publicly defend the administration\'s account for decades, only admitting doubts in his 1995 memoir "In Retrospect" — and even then minimized the deliberate nature of the deception.',
    'The full NSA internal history by Robert J. Hanyok, completed in 2001, was classified and suppressed for four years before being released in 2005, confirming that the August 4 attack never happened.',
  ],
  sources: [
    { title: 'NSA Declassified: Skunks, Bogies, Silent Hounds, and the Flying Fish — The Gulf of Tonkin Mystery (Robert J. Hanyok)', url: 'https://www.nsa.gov/portals/75/documents/news-features/declassified-documents/gulf-of-tonkin/articles/rel1_Gulf_of_Tonkin_2.pdf', date: '2005' },
    { title: 'National Security Archive — The Gulf of Tonkin Incident: 40 Years Later', url: 'https://nsarchive2.gwu.edu/NSAEBB/NSAEBB132/', date: '2004' },
    { title: 'Pentagon Papers (National Archives)', url: 'https://www.archives.gov/research/pentagon-papers', date: '1971 / Declassified 2011' },
    { title: 'Gulf of Tonkin Resolution — Full Text (Avalon Project, Yale Law School)', url: 'https://avalon.law.yale.edu/20th_century/tonkin-g.asp', date: 'August 7, 1964' },
    { title: 'U.S. Senate Foreign Relations Committee — The Gulf of Tonkin: The 1964 Incidents (Hearing Transcript)', url: 'https://www.govinfo.gov/content/pkg/CHRG-90shrg71606/pdf/CHRG-90shrg71606.pdf', date: '1968' },
    { title: 'In Retrospect: The Tragedy and Lessons of Vietnam — Robert S. McNamara', url: 'https://www.penguinrandomhouse.com/books/163372/in-retrospect-by-robert-s-mcnamara/', date: '1995' },
    { title: 'Miller Center, University of Virginia — LBJ White House Tapes: Gulf of Tonkin Conversations', url: 'https://millercenter.org/the-presidency/educational-resources/gulf-of-tonkin', date: 'Released 2001' },
    { title: 'The Fog of War: Eleven Lessons from the Life of Robert S. McNamara (Documentary)', url: 'https://www.imdb.com/title/tt0317910/', date: '2003' },
    { title: 'James Stockdale — "In Love and War" (Memoir Account of August 4, 1964)', url: 'https://www.usna.edu/Ethics/publications/documents/Stockdale1.pdf', date: '1984' },
    { title: 'Congressional Research Service — Tonkin Gulf Resolution: Legal and Historical Context', url: 'https://sgp.fas.org/crs/natsec/R45918.pdf', date: '2019' },
  ],
};

export default function GulfOfTonkinPage() {
  return (
    <div className="min-h-screen pt-20 lg:pt-24 pb-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <Link href="/investigations" className="inline-flex items-center gap-2 text-zinc-400 hover:text-blood-500 transition-colors mb-6 pt-4">
          <ArrowLeft className="w-4 h-4" />Back to Investigations
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
