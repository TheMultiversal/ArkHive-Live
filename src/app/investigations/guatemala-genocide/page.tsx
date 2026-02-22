'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowLeft, AlertTriangle, Users, Calendar, FileText, ExternalLink, Scale, ShieldAlert, Skull } from 'lucide-react';
import GlitchText from '@/components/effects/GlitchText';

const investigation = {
  title: 'The Guatemalan Genocide',
  subtitle: 'How the CIA Helped Kill 200,000 Indigenous Maya While Reagan Called Their Executioner a Man of Integrity',
  severity: 'critical',
  status: 'CONFIRMED GENOCIDE',
  summary: 'Between 1960 and 1996, the Guatemalan military waged a systematic campaign of genocide against the indigenous Maya population, killing an estimated 200,000 people and displacing over 1.5 million. The violence was rooted in the CIA-orchestrated 1954 coup that overthrew democratically elected President Jacobo Árbenz to protect United Fruit Company\'s profits. US-trained and funded military dictators, most notably Efraín Ríos Montt, carried out scorched-earth campaigns that destroyed 626 villages. The 1999 UN Commission for Historical Clarification concluded that acts of genocide were committed, with the United States bearing significant responsibility. President Reagan personally vouched for Ríos Montt as "a man of great personal integrity" even as reports of massacres flooded international media.',
  keyFigures: [
    { name: 'Efraín Ríos Montt', role: 'Military dictator (1982-1983) who ordered scorched-earth campaigns against Maya communities', href: '/entities/individuals/efrain-rios-montt', status: 'Deceased (2018), convicted of genocide 2013' },
    { name: 'Jacobo Árbenz', role: 'Democratically elected president overthrown in CIA-backed 1954 coup', href: '/entities/individuals/jacobo-arbenz', status: 'Deceased (1971)' },
    { name: 'Ronald Reagan', role: 'US President who restored military aid to Guatemala and defended Ríos Montt', href: '/entities/individuals/ronald-reagan', status: 'Deceased (2004)' },
    { name: 'Allen Dulles', role: 'CIA Director who orchestrated Operation PBSUCCESS to overthrow Árbenz', href: '/entities/individuals/allen-dulles', status: 'Deceased (1969)' },
    { name: 'John Foster Dulles', role: 'Secretary of State who advocated for the coup; Sullivan & Cromwell represented United Fruit', href: '/entities/individuals/john-foster-dulles', status: 'Deceased (1959)' },
    { name: 'Carlos Castillo Armas', role: 'CIA-installed dictator who replaced Árbenz in 1954', href: '/entities/individuals/carlos-castillo-armas', status: 'Deceased (1957)' },
    { name: 'José Efraín Ríos Montt', role: 'Head of military junta; oversaw Plan Victoria 82 genocide operations', href: '/entities/individuals/efrain-rios-montt', status: 'Deceased (2018)' },
    { name: 'Otto Pérez Molina', role: 'Military commander in Ixil Triangle during genocide; later President of Guatemala', href: '/entities/individuals/otto-perez-molina', status: 'Imprisoned for corruption' },
    { name: 'Hector Gramajo', role: 'Defense Minister who designed the "beans and bullets" counterinsurgency strategy', href: '/entities/individuals/hector-gramajo', status: 'Deceased (2004)' },
    { name: 'Elliott Abrams', role: 'Reagan\'s Assistant Secretary of State who denied massacres and pushed continued military aid', href: '/entities/individuals/elliott-abrams', status: 'Active' },
    { name: 'Rigoberta Menchú', role: 'Indigenous K\'iche\' activist who won 1992 Nobel Peace Prize for documenting genocide', href: '/entities/individuals/rigoberta-menchu', status: 'Active' },
    { name: 'Thomas Stroock', role: 'US Ambassador to Guatemala (1989-1992) who defended military despite evidence of atrocities', href: '/entities/individuals/thomas-stroock', status: 'Deceased (2020)' },
    { name: 'Mauricio Rodríguez Sánchez', role: 'Head of military intelligence during Ríos Montt regime; co-defendant in genocide trial', href: '/entities/individuals/mauricio-rodriguez-sanchez', status: 'Acquitted (2013)' },
  ],
  timeline: [
    { date: '1944', event: 'Guatemalan Revolution overthrows dictator Jorge Ubico, leading to democratic reforms' },
    { date: '1951', event: 'President Jacobo Árbenz enacts Decree 900 agrarian reform, threatening United Fruit Company\'s unused lands' },
    { date: '1953', event: 'CIA begins Operation PBSUCCESS to overthrow Árbenz; United Fruit lobbies through the Dulles brothers' },
    { date: 'June 1954', event: 'CIA-backed coup overthrows Árbenz, installs Carlos Castillo Armas; land reforms reversed' },
    { date: '1960', event: 'Failed military uprising sparks 36-year civil war; leftist guerrilla groups form' },
    { date: '1966-1968', event: 'US Green Berets assist Guatemalan military in counterinsurgency campaign killing 8,000 civilians' },
    { date: '1978', event: 'Panzós massacre: army kills over 100 Q\'eqchi\' Maya demanding land rights' },
    { date: 'January 1980', event: 'Spanish Embassy massacre: security forces burn embassy killing 37 indigenous protesters, including Vicente Menchú' },
    { date: 'March 1982', event: 'Ríos Montt seizes power in military coup; declares state of siege' },
    { date: 'April 1982', event: 'Plan Victoria 82 launched: systematic scorched-earth campaign targeting Maya highlands' },
    { date: 'July 1982', event: 'Massacres at Plan de Sánchez and Dos Erres kill hundreds of men, women, and children' },
    { date: 'December 1982', event: 'Reagan meets Ríos Montt, declares him "a man of great personal integrity" getting "a bum rap"' },
    { date: '1983', event: 'Amnesty International documents widespread massacres; Reagan certifies Guatemala is improving on human rights to continue aid' },
    { date: '1983', event: 'Ríos Montt overthrown by his own Defense Minister Óscar Mejía Víctores; violence continues' },
    { date: '1992', event: 'Rigoberta Menchú wins Nobel Peace Prize for documenting genocide against her people' },
    { date: 'December 1996', event: 'Peace Accords signed ending 36-year civil war; 200,000 dead, 45,000 disappeared' },
    { date: 'February 1999', event: 'UN Commission for Historical Clarification finds acts of genocide were committed; 83% of victims were Maya' },
    { date: '1999', event: 'President Clinton apologizes: US support for Guatemalan military forces "was wrong"' },
    { date: 'May 2013', event: 'Ríos Montt convicted of genocide and crimes against humanity — first former head of state convicted of genocide by domestic court' },
    { date: 'May 2013', event: 'Constitutional Court annuls Ríos Montt conviction on procedural grounds after 10 days' },
    { date: '2018', event: 'Ríos Montt dies at 91 during retrial, never serving full sentence' },
  ],
  legalOutcomes: [
    { defendant: 'Efraín Ríos Montt', charge: 'Genocide and crimes against humanity', outcome: 'Convicted May 2013 to 80 years; annulled 10 days later on procedural grounds; died during retrial 2018' },
    { defendant: 'Mauricio Rodríguez Sánchez', charge: 'Genocide and crimes against humanity (co-defendant)', outcome: 'Acquitted in 2013; retried and acquitted again in 2018' },
    { defendant: 'Guatemalan State', charge: 'Genocide under 1948 Convention', outcome: 'UN Commission for Historical Clarification confirmed genocide in 1999 report "Guatemala: Memory of Silence"' },
    { defendant: 'Plan de Sánchez perpetrators', charge: 'Massacre of 268 Maya Achí civilians', outcome: 'Inter-American Court of Human Rights ordered reparations in 2004' },
    { defendant: 'Dos Erres massacre perpetrators', charge: 'Murder of 201 villagers including children', outcome: 'Four former soldiers convicted in 2011, sentenced to 6,060 years each' },
    { defendant: 'United States', charge: 'Complicity in genocide through training, funding, and intelligence support', outcome: 'Clinton issued apology in 1999; no legal accountability' },
    { defendant: 'Otto Pérez Molina', charge: 'Military commander in Ixil Triangle during genocide era', outcome: 'Never prosecuted for genocide; later imprisoned for customs corruption in 2015' },
    { defendant: 'Five former military officers', charge: 'Enforced disappearance of Fernando García and others', outcome: 'Convicted in 2010 to 40 years each; Guatemala\'s first enforced disappearance conviction' },
  ],
  charges: [
    { statute: 'Convention on the Prevention and Punishment of the Crime of Genocide (1948)', description: 'Deliberate destruction of the Maya Ixil ethnic group in whole or in part through systematic killings, bodily harm, and conditions calculated to bring about physical destruction', count: '1,771 documented massacres confirmed by UN truth commission' },
    { statute: 'Geneva Conventions Common Article 3', description: 'Violence against persons taking no active part in hostilities, including murder and cruel treatment of civilians in internal armed conflict', count: 'Over 200,000 killed, 83% identified as indigenous Maya' },
    { statute: 'Crimes Against Humanity — Extermination', description: 'Intentional killing of a large number of people as part of a widespread and systematic attack on a civilian population', count: '626 villages completely destroyed during scorched-earth campaigns' },
    { statute: 'Crimes Against Humanity — Forced Displacement', description: 'Forced transfer of Maya populations from traditional lands as part of military strategy', count: 'Over 1.5 million displaced internally and across borders' },
    { statute: 'War Crimes — Sexual Violence', description: 'Systematic rape of indigenous women as an instrument of genocide and terror', count: 'Thousands of cases documented by truth commission; exact count unknown' },
    { statute: 'Crimes Against Humanity — Enforced Disappearance', description: 'Arrest, detention, and disappearance of civilian suspects by state security forces', count: '45,000+ people disappeared during 36-year conflict' },
    { statute: '18 U.S.C. § 2441 — War Crimes Act (US)', description: 'US personnel participated in training, planning, and intelligence support for military operations constituting war crimes', count: 'Green Berets directly assisted counterinsurgency operations 1966-1968' },
    { statute: 'CIA Authorization of Covert Action — Executive Order 10421', description: 'Operation PBSUCCESS: CIA-organized coup against democratically elected government to protect corporate interests', count: 'One democratic government overthrown; 36 years of military dictatorship followed' },
  ],
  coverup: [
    'The CIA destroyed or classified thousands of documents related to its role in the 1954 coup and subsequent support for military regimes, with many records still classified decades later.',
    'Reagan administration officials, including Elliott Abrams, systematically denied reports of massacres and certified that Guatemala was making progress on human rights to continue military aid.',
    'President Reagan personally defended Ríos Montt in December 1982, calling reports of genocide "a bum rap" while the dictator was overseeing the destruction of hundreds of Maya villages.',
    'The US Embassy in Guatemala systematically downplayed reports of atrocities, with Ambassador Thomas Stroock dismissing human rights organizations as unreliable.',
    'United Fruit Company\'s lobbying for the 1954 coup was disguised as anti-communist policy through propaganda campaigns created by Edward Bernays, the "father of public relations."',
    'Guatemalan military destroyed evidence of mass graves and classified army operations records; many documents were only discovered in 2005 when 80 million pages were found in an abandoned police archive.',
    'The Guatemalan Constitutional Court annulled Ríos Montt\'s genocide conviction just 10 days after the verdict under pressure from military and business elites.',
    'US intelligence agencies provided targeting information and surveillance assistance to the Guatemalan military while publicly denying involvement in internal affairs.',
    'School of the Americas training manuals obtained through FOIA revealed instruction in torture, extortion, and execution — techniques used extensively in Guatemala.',
  ],
  sources: [
    { title: 'Guatemala: Memory of Silence — UN Commission for Historical Clarification Report', url: 'https://hrdag.org/wp-content/uploads/2013/01/CEHreport-english.pdf', date: '1999' },
    { title: 'CIA and Guatemala Assassination Proposals 1952-1954 — CIA Historical Review', url: 'https://nsarchive2.gwu.edu/NSAEBB/NSAEBB4/', date: '1997' },
    { title: 'Secret History: The CIA\'s Classified Account of Its Operations in Guatemala', url: 'https://nsarchive2.gwu.edu/NSAEBB/NSAEBB4/', date: '2003' },
    { title: 'Ríos Montt Convicted of Genocide — International Justice Monitor', url: 'https://www.ijmonitor.org/category/efrain-rios-montt/', date: 'May 2013' },
    { title: 'Clinton: Support for Guatemala Was Wrong — New York Times', url: 'https://www.nytimes.com/1999/03/11/world/clinton-says-us-was-wrong-on-guatemala.html', date: 'March 1999' },
    { title: 'Recovery of Historical Memory (REMHI) Project — Archdiocese of Guatemala', url: 'https://www.remhi.org.gt/', date: '1998' },
    { title: 'Guatemala\'s Police Archives: Window Into Horror', url: 'https://nsarchive2.gwu.edu/NSAEBB/NSAEBB170/', date: '2005' },
    { title: 'Bitter Fruit: The Story of the American Coup in Guatemala — Schlesinger & Kinzer', url: 'https://www.hup.harvard.edu/catalog.php?isbn=9780674019300', date: '1982' },
    { title: 'Reagan Defends Guatemala\'s Rios Montt — UPI Archives', url: 'https://www.upi.com/Archives/1982/12/04/Reagan-defends-Guatemalas-Rios-Montt/5765407826000/', date: 'December 1982' },
  ],
};

export default function GuatemalaGenocidePage() {
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
