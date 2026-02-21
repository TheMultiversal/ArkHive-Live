'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowLeft, AlertTriangle, Users, Calendar, FileText, ExternalLink, Scale, ShieldAlert, Skull } from 'lucide-react';
import GlitchText from '@/components/effects/GlitchText';

const investigation = {
  title: 'Operation Condor',
  subtitle: 'CIA-Backed Transnational Terror Network — 60,000+ Killed, 30,000+ Disappeared, 400,000+ Tortured Across South America',
  severity: 'critical',
  status: 'DECLASSIFIED — PERPETRATORS LARGELY UNPUNISHED',
  summary: 'Operation Condor was a covert campaign of political repression, state terror, and cross-border assassination coordinated by the military dictatorships of Argentina, Chile, Brazil, Uruguay, Paraguay, and Bolivia during the 1970s and 1980s, with direct support from the United States Central Intelligence Agency. The operation created an international network of intelligence agencies that systematically kidnapped, tortured, "disappeared," and murdered an estimated 60,000-80,000 people — political dissidents, labor organizers, students, journalists, priests, and anyone deemed a leftist threat. At least 30,000 people were forcibly disappeared (their remains never found), and 400,000 were imprisoned and tortured. The CIA provided training, funding, intelligence sharing, communications infrastructure (including telex networks), and political cover for the participating regimes. Secretary of State Henry Kissinger personally approved of the operation and actively blocked State Department efforts to intervene. Declassified documents prove the U.S. government knew about the mass killings from the beginning and chose to support, enable, and protect the perpetrators.',
  keyFigures: [
    { name: 'Henry Kissinger', role: 'U.S. Secretary of State who personally approved Operation Condor, told Argentine junta to finish repression quickly "before Congress gets back," blocked human rights protests, and gave Chilean coup the "green light"', href: '/entities/individuals/henry-kissinger', status: 'Never Charged' },
    { name: 'Augusto Pinochet', role: 'Chilean dictator and co-founder of Operation Condor. His regime murdered 3,200+, tortured 40,000+, and used the National Stadium as a concentration camp. Ordered the assassination of Orlando Letelier in Washington, D.C.', href: '/entities/individuals/augusto-pinochet', status: 'Died 2006 — No Conviction' },
    { name: 'Jorge Rafael Videla', role: 'Argentine dictator who presided over the "Dirty War" — 30,000 disappeared, thousands thrown alive from aircraft into the Atlantic Ocean ("death flights"), babies stolen from murdered mothers and given to military families', href: '/entities/individuals/jorge-videla', status: 'Convicted — Died in Prison 2013' },
    { name: 'Manuel Contreras', role: 'Head of DINA (Chilean secret police), operational director of Condor assassination operations, ordered the Letelier car bombing in Washington D.C., trained at the School of the Americas', href: '/entities/individuals/manuel-contreras', status: 'Convicted — Died in Prison 2015' },
    { name: 'Richard Nixon', role: 'U.S. President who ordered the CIA to prevent Allende from taking power ("make the economy scream"), authorized covert operations that led directly to the 1973 Chilean coup and the creation of Operation Condor', href: '/entities/individuals/richard-nixon', status: 'Resigned 1974' },
    { name: 'Alfredo Stroessner', role: 'Paraguayan dictator (1954-1989) and Condor participant. His regime hosted the founding meeting of Operation Condor in November 1975. The "Archives of Terror" discovered in Paraguay in 1992 proved the operation\'s existence', href: '/entities/individuals/alfredo-stroessner', status: 'Died in Exile 2006' },
    { name: 'Emilio Eduardo Massera', role: 'Argentine Navy Admiral who oversaw ESMA (Navy Mechanics School) — the most notorious torture and extermination center where 5,000+ were tortured and murdered, including pregnant women whose babies were stolen', href: '/entities/individuals/emilio-massera', status: 'Convicted — Died 2010' },
    { name: 'Hugo Banzer', role: 'Bolivian dictator (1971-1978) and Condor participant. His CIA-backed regime detained 14,000+ political prisoners, tortured thousands, and coordinated cross-border operations with Chile and Argentina', href: '/entities/individuals/hugo-banzer', status: 'Died 2002 — Charges Pending' },
    { name: 'Allen Dulles', role: 'Former CIA Director who established the institutional framework of Latin American intervention that would evolve into Operation Condor — pioneered regime change operations including Guatemala (1954)', href: '/entities/individuals/allen-dulles', status: 'Died 1969' },
    { name: 'Orlando Letelier', role: 'Former Chilean ambassador and Allende government minister assassinated by a DINA car bomb on Embassy Row in Washington, D.C. on September 21, 1976 — an act of state terrorism on U.S. soil', href: '/entities/individuals/orlando-letelier', status: 'Assassinated in D.C.' },
    { name: 'Carlos Prats', role: 'Former Chilean Army Commander-in-Chief loyal to democracy, assassinated by DINA car bomb in Buenos Aires on September 30, 1974 along with his wife Sofia — targeted for opposing the coup', href: '/entities/individuals/carlos-prats', status: 'Assassinated' },
    { name: 'Bernardo Leighton', role: 'Former Chilean Vice President and Christian Democratic leader, shot in Rome on October 6, 1975 by DINA-connected Italian neofascist operative. Survived but permanently disabled', href: '/entities/individuals/bernardo-leighton', status: 'Assassination Survivor' },
    { name: 'Leopoldo Galtieri', role: 'Argentine military junta leader (1981-1982) who continued Dirty War disappearances and orchestrated the Falklands War to distract from domestic repression', href: '/entities/individuals/leopoldo-galtieri', status: 'Convicted — Died 2003' },
    { name: 'Vernon Walters', role: 'CIA Deputy Director who served as liaison between U.S. intelligence and South American military dictatorships, personally met with junta leaders to coordinate Condor activities', href: '/entities/individuals/vernon-walters', status: 'Never Charged' },
    { name: 'Robert Scherrer', role: 'FBI Legal Attaché in Buenos Aires who uncovered details of Operation Condor in 1976 and sent classified cables to Washington warning of the assassination network — his reports were largely ignored', href: '/entities/individuals/robert-scherrer', status: 'Whistleblower' },
    { name: 'Michael Townley', role: 'American-born DINA agent who built and planted the car bomb that killed Orlando Letelier in Washington D.C. Convicted but received reduced sentence of 5 years for cooperation. Given new identity under witness protection', href: '/entities/individuals/michael-townley', status: 'Convicted — 5 Years' },
  ],
  timeline: [
    { date: '1964', event: 'CIA-backed military coup in Brazil overthrows democratically elected President João Goulart, installing 21-year military dictatorship — setting the template for regional coups' },
    { date: 'September 11, 1973', event: 'CIA-backed coup in Chile overthrows President Allende. Pinochet seizes power. Thousands arrested, tortured, and murdered in the National Stadium within days' },
    { date: '1973-1974', event: 'DINA established under Manuel Contreras with CIA training, funding, and intelligence sharing. Begins systematic elimination of Chilean opposition' },
    { date: 'September 30, 1974', event: 'DINA car bomb assassinates General Carlos Prats and his wife in Buenos Aires — first confirmed cross-border Condor assassination' },
    { date: 'November 25, 1975', event: 'Operation Condor formally founded at secret meeting in Santiago, Chile. Intelligence chiefs from Argentina, Bolivia, Brazil, Chile, Paraguay, and Uruguay sign founding documents' },
    { date: 'October 6, 1975', event: 'DINA-connected operative shoots Chilean exile Bernardo Leighton and his wife in Rome, Italy — Condor operations extend to Europe' },
    { date: 'March 24, 1976', event: 'Argentine military coup installs junta led by General Videla. The "Dirty War" begins in earnest — 30,000 will be disappeared over the next seven years' },
    { date: 'June 1976', event: 'Kissinger meets Argentine Foreign Minister Guzzetti and tells him: "Look, our basic attitude is that we would like you to succeed. The quicker you succeed the better." This was a direct green light for mass murder' },
    { date: 'August 1976', event: 'U.S. Ambassador Robert Hill warns Washington that Argentine junta is planning assassinations in the U.S. and Europe. Kissinger blocks the State Department from delivering a formal warning (the "démarche")' },
    { date: 'September 21, 1976', event: 'DINA car bomb kills Orlando Letelier and American colleague Ronni Moffitt on Embassy Row in Washington, D.C. — a brazen act of state terrorism on U.S. soil ordered by Pinochet' },
    { date: '1976-1983', event: 'Argentina\'s Dirty War: Up to 30,000 disappeared. Methods include "death flights" (drugging prisoners and throwing them from aircraft into the ocean), electric shock torture, and theft of babies from captive mothers' },
    { date: 'May 1978', event: 'FBI agent Robert Scherrer sends detailed cable identifying Condor as coordinated assassination program — cable circulates within U.S. government but no action taken to stop the killing' },
    { date: '1978', event: 'Michael Townley arrested for the Letelier assassination. Confesses to DINA involvement and receives plea deal of only 5 years — enters witness protection with new identity' },
    { date: '1979', event: 'Anastasio Somoza, former Nicaraguan dictator who joined Condor, is assassinated in Paraguay by Argentine revolutionaries — showing how the violence spread' },
    { date: '1983', event: 'Argentine military junta collapses. Democratic elections held. The Mothers of the Plaza de Mayo, who had protested every Thursday demanding their disappeared children, are vindicated' },
    { date: 'December 22, 1992', event: 'Paraguayan judge José Agustín Fernández discovers the "Archives of Terror" in a police station in Lambaré — 700,000 documents proving Operation Condor\'s existence, including records of 50,000 murdered, 30,000 disappeared, and 400,000 imprisoned' },
    { date: '1998', event: 'Pinochet arrested in London on Spanish warrant for crimes against humanity. Held for 503 days before being released on "health grounds" — returned to Chile, never stood full trial' },
    { date: '2000-2010', event: 'Videla, Massera, and other Argentine junta members convicted and sentenced. Videla receives life in prison. Argentina\'s trials become model for transitional justice worldwide' },
    { date: '2010', event: 'U.S. State Department releases 4,677 previously classified documents on Chile and human rights — confirming U.S. knowledge and support of Operation Condor from its inception' },
    { date: '2016', event: 'Argentine federal court convicts 15 former military officers of conspiracy in Operation Condor, including Reynaldo Bignone (last Argentine dictator). Court rules Condor was a criminal conspiracy, not a legitimate military operation' },
  ],
  legalOutcomes: [
    { defendant: 'Jorge Rafael Videla (Argentina)', charge: 'Crimes against humanity, murder, torture, kidnapping, systematic theft of babies', outcome: 'Convicted — sentenced to life in prison. Died in prison April 2013' },
    { defendant: 'Emilio Massera (Argentina)', charge: 'Crimes against humanity at ESMA — oversaw torture and murder of 5,000+ prisoners', outcome: 'Convicted — life sentence. Died under house arrest in 2010' },
    { defendant: 'Manuel Contreras (Chile)', charge: 'Ordering the assassination of Orlando Letelier in Washington D.C., hundreds of murders and disappearances as DINA chief', outcome: 'Convicted — multiple sentences totaling 500+ years. Died in prison August 2015' },
    { defendant: 'Augusto Pinochet (Chile)', charge: 'Over 300 criminal complaints filed including human rights abuses, tax evasion, passport fraud', outcome: 'Arrested in London 1998, released on "health grounds." Died December 2006 without full trial — stripped of immunity in multiple cases' },
    { defendant: 'Michael Townley (DINA/U.S.)', charge: 'Murder of Orlando Letelier and Ronni Moffitt via car bomb in Washington D.C.', outcome: 'Plea deal — sentenced to only 5 years despite admitting to murder. Given new identity under witness protection' },
    { defendant: 'Henry Kissinger (U.S.)', charge: 'Complicity in Operation Condor assassinations, blocking human rights warnings, supporting military coups', outcome: 'Never charged. French and Argentine judges sought his testimony — he refused. Died November 2023 at age 100 with total impunity' },
    { defendant: 'Operation Condor Trial (Argentina, 2016)', charge: 'Criminal conspiracy across six nations to kidnap, torture, and murder political opponents', outcome: '15 former officials convicted. Court ruled Condor constituted a transnational criminal conspiracy. Sentences ranged from 8-25 years' },
    { defendant: 'Reynaldo Bignone (Argentina)', charge: 'Last Argentine dictator — crimes against humanity, baby theft, forced disappearances', outcome: 'Convicted and sentenced to 25 years in Operation Condor trial. Died in prison March 2018' },
  ],
  charges: [
    { statute: 'Rome Statute — Crimes Against Humanity (Article 7)', description: 'Systematic and widespread attack against civilian populations including murder, torture, enforced disappearance, and persecution. Operation Condor constitutes one of the most documented cases of crimes against humanity in the Western Hemisphere', count: '60,000-80,000 killed, 30,000+ disappeared, 400,000+ tortured across six nations' },
    { statute: 'Genocide Convention (1948)', description: 'Acts committed with intent to destroy, in whole or in part, a national or political group. Argentina\'s targeting of an entire generation of students, intellectuals, and labor organizers meets the criteria for political genocide', count: 'Systematic targeting of identifiable political/social groups across six countries' },
    { statute: 'Geneva Conventions — Common Article 3 / Additional Protocol II', description: 'Protections for persons taking no active part in hostilities. Condor regimes tortured, murdered, and disappeared tens of thousands of civilians including pregnant women, children, elderly, and clergy', count: 'Hundreds of clandestine detention centers operated across South America' },
    { statute: 'Convention Against Torture (CAT)', description: 'Prohibition on torture and cruel, inhuman, or degrading treatment. Condor states employed systematic torture including electric shock (the "picana"), waterboarding, sexual violence, suspension from ceilings, and live burial', count: '400,000+ persons detained and subjected to torture' },
    { statute: 'International Convention for the Protection of All Persons from Enforced Disappearance', description: 'Enforced disappearance as a crime against humanity when practiced systematically. Condor regimes perfected the "disappearance" — kidnapping victims, torturing them in secret, and disposing of their bodies so they could never be found', count: '30,000+ persons forcibly disappeared — most remains never recovered' },
    { statute: 'U.S. Foreign Assistance Act § 502B', description: 'Prohibits U.S. security assistance to governments engaged in gross violations of internationally recognized human rights. The U.S. continued providing military aid, training (School of the Americas), and intelligence support to Condor regimes despite documented atrocities', count: 'Millions of dollars in U.S. military aid continued throughout the worst of the killings' },
    { statute: '18 U.S.C. § 2332 — Terrorism / 18 U.S.C. § 1116 — Murder of Internationally Protected Person', description: 'The assassination of Chilean Ambassador Orlando Letelier by a car bomb in Washington, D.C. was an act of state-sponsored terrorism on U.S. soil. An internationally protected diplomat was murdered by a foreign intelligence service operating inside the United States', count: '2 killed (Letelier and Ronni Moffitt) in Washington D.C. bombing' },
    { statute: 'Alien Tort Statute (28 U.S.C. § 1350)', description: 'Federal courts have jurisdiction over violations of the law of nations. Multiple lawsuits brought against Condor perpetrators in U.S. courts, establishing that foreign officials can be held liable for torture and extrajudicial killing', count: 'Multiple civil suits filed and won against Condor officials' },
    { statute: 'Inter-American Convention on Forced Disappearance of Persons', description: 'Regional treaty criminalizing enforced disappearance. Condor states systematically violated the right to life, liberty, and security by maintaining networks of secret prisons where victims were tortured and killed without any judicial process', count: '600+ clandestine detention and torture centers documented across South America' },
  ],
  coverup: [
    'Henry Kissinger personally blocked a State Department démarche (formal warning) to the Argentine junta about planned assassinations in Washington D.C. and Europe in August 1976. One month later, Orlando Letelier was assassinated by car bomb on Embassy Row. Kissinger\'s deliberate inaction enabled state terrorism on American soil.',
    'The U.S. government provided the communications infrastructure for Condor — a continent-wide encrypted telex network through U.S. military channels in the Panama Canal Zone, allowing the six dictatorships to coordinate kidnappings and assassinations in real time across borders.',
    'The CIA trained Condor operatives at the School of the Americas (Fort Benning, Georgia) and through in-country programs. Training manuals included techniques for torture, interrogation, execution, and "neutralization" of political opponents. The U.S. government denied the existence of these manuals until they were declassified in 1996.',
    'After the Letelier assassination — an act of terrorism committed by a foreign intelligence service on U.S. soil — the U.S. government delayed and obstructed the FBI investigation for years to protect its relationship with the Pinochet regime and avoid exposing CIA connections to DINA.',
    'Argentina\'s military junta developed the "death flights" program: drugging political prisoners with pentothal, loading them onto military aircraft, and throwing them alive into the Atlantic Ocean. Military chaplains told pilots and soldiers this was a "Christian death" because the prisoners would die painlessly. The Catholic Church hierarchy in Argentina knew and remained largely silent.',
    'The systematic theft of babies from captive mothers was a deliberate policy: pregnant political prisoners were kept alive long enough to give birth, then murdered. Their babies were given to military families or regime supporters. Over 500 babies were stolen. The Grandmothers of the Plaza de Mayo have identified approximately 130 as of 2024.',
    'The U.S. State Department classified key documents about Operation Condor for decades. When forced to declassify in 2000 and 2010, the released documents confirmed that the CIA and State Department knew about the mass killings from the very beginning and chose not only to do nothing but to actively support and enable the perpetrators.',
    'Paraguay\'s "Archives of Terror," discovered in 1992, contained 700,000 pages of documentation including photographs of torture victims, lists of murdered and disappeared persons, and records of cross-border coordination. The archives proved that the operation was far more systematic and extensive than previously acknowledged, and that U.S. intelligence agencies were deeply embedded in the network.',
  ],
  sources: [
    { title: 'National Security Archive — Operation Condor Declassified Documents', url: 'https://nsarchive.gwu.edu/project/chile-documentation-project', date: 'Multiple releases 2000-2016' },
    { title: 'The Condor Years: How Pinochet and His Allies Brought Terrorism to Three Continents — John Dinges', url: 'https://thenewpress.com/books/condor-years', date: '2004' },
    { title: 'The Trial of Henry Kissinger — Christopher Hitchens', url: 'https://www.versobooks.com/products/1946-the-trial-of-henry-kissinger', date: '2001' },
    { title: 'CIA Activities in Chile — U.S. Senate Select Committee on Intelligence Report', url: 'https://www.intelligence.senate.gov/sites/default/files/hearings/ciaactivitiesinchile.pdf', date: 'September 18, 2000' },
    { title: 'Kissinger and Argentina\'s Dirty War — National Security Archive', url: 'https://nsarchive.gwu.edu/briefing-book/southern-cone/2003-12-04/kissinger-argentinas-dirty-war', date: 'December 4, 2003' },
    { title: 'Archives of Terror: Paraguay\'s Police Files', url: 'https://nsarchive.gwu.edu/briefing-book/southern-cone/2019-12-28/operation-condor-archives-terror', date: 'December 1992' },
    { title: 'Operation Condor Trial (Argentina) — Final Judgment', url: 'https://www.cels.org.ar/web/en/publicaciones/the-condor-trial/', date: 'May 27, 2016' },
    { title: 'U.S. Department of State — Chile Declassification Project (24,000 documents)', url: 'https://foia.state.gov/Search/Results.aspx?collection=CHILE', date: '2000-2010' },
    { title: 'A Lexicon of Terror: Argentina and the Legacies of Torture — Marguerite Feitlowitz', url: 'https://global.oup.com/academic/product/a-lexicon-of-terror-9780199744695', date: '1998, Revised 2011' },
    { title: 'Amnesty International — Operation Condor: Former Head of Secret Police Gets 20 Years', url: 'https://www.amnesty.org/en/latest/news/2016/05/operation-condor-former-head-secret-police/', date: 'May 2016' },
    { title: 'Inter-American Commission on Human Rights — Report on Argentina (OEA/Ser.L/V/II.49)', url: 'https://www.cidh.oas.org/countryrep/Argentina80eng/toc.htm', date: 'April 11, 1980' },
  ],
};

export default function OperationCondorPage() {
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
