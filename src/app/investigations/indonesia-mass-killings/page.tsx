'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowLeft, AlertTriangle, Users, Calendar, FileText, ExternalLink, Scale, ShieldAlert, Skull } from 'lucide-react';
import GlitchText from '@/components/effects/GlitchText';

const investigation = {
  title: 'Indonesia Mass Killings 1965-66',
  subtitle: 'CIA-Backed Genocide: 500,000 to 1 Million Communists Massacred with American Kill Lists',
  severity: 'critical',
  status: 'CLOSED - DECLASSIFIED',
  summary: 'Between October 1965 and mid-1966, the Indonesian military and allied militias carried out one of the largest mass killings of the 20th century, murdering an estimated 500,000 to over 1 million suspected communists, ethnic Chinese, intellectuals, and trade unionists. The United States, under the Johnson administration, actively supported the killings — the CIA provided lists of thousands of suspected Communist Party (PKI) members to the Indonesian military, knowing they would be killed. US Embassy officials in Jakarta checked names off the lists as the killings progressed. The massacre destroyed the PKI, the world\'s largest non-governing communist party, and installed General Suharto in power for 31 years. The US hailed the outcome as a Cold War victory. The killings have never been officially acknowledged by the US government, and Indonesia has never held formal accountability proceedings.',
  keyFigures: [
    { name: 'Suharto', role: 'Indonesian Army general who orchestrated the purge and seized the presidency', href: '/entities/individuals/suharto', status: 'Deceased (2008)' },
    { name: 'Lyndon B. Johnson', role: 'US President whose administration supported and facilitated the killings', href: '/entities/individuals/lyndon-johnson', status: 'Deceased (1973)' },
    { name: 'Marshall Green', role: 'US Ambassador to Indonesia who maintained close contact with military during killings', href: '/entities/individuals/marshall-green', status: 'Deceased (1998)' },
    { name: 'Robert J. Martens', role: 'US Embassy political officer who compiled and provided kill lists to Indonesian military', href: '/entities/individuals/robert-martens', status: 'Deceased' },
    { name: 'Howard Jones', role: 'Former US Ambassador who laid groundwork for close ties with Indonesian military', href: '/entities/individuals/howard-jones', status: 'Deceased' },
    { name: 'Sukarno', role: 'President of Indonesia who was gradually stripped of power by Suharto during the purge', href: '/entities/individuals/sukarno', status: 'Deceased (1970)' },
    { name: 'Dean Rusk', role: 'Secretary of State who approved covert support for the Indonesian military', href: '/entities/individuals/dean-rusk', status: 'Deceased (1994)' },
    { name: 'William Colby', role: 'CIA Far East Division chief who oversaw covert operations in Indonesia', href: '/entities/individuals/william-colby', status: 'Deceased (1996)' },
    { name: 'Adam Malik', role: 'Indonesian political figure who liaised with US Embassy during the killings', href: '/entities/individuals/adam-malik', status: 'Deceased (1984)' },
    { name: 'Sarwo Edhie Wibowo', role: 'Commander of Army Special Forces (RPKAD) that led massacres in Central and East Java', href: '/entities/individuals/sarwo-edhie-wibowo', status: 'Deceased (1989)' },
  ],
  timeline: [
    { date: '1957', event: 'CIA begins covert operations in Indonesia, including support for regional rebellions against Sukarno' },
    { date: '1958', event: 'US-backed PRRI-Permesta rebellion fails; embarrassing exposure forces shift to building ties with Indonesian military' },
    { date: '1962-1965', event: 'US provides military training and equipment to Indonesian officers through USAID and Pentagon programs' },
    { date: '1965-09-30', event: '"September 30th Movement" — group of officers kill six army generals; Suharto claims it was a PKI coup attempt' },
    { date: '1965-10-01', event: 'Suharto takes control of the army and launches propaganda campaign blaming PKI for the generals\' deaths' },
    { date: '1965-10', event: 'Indonesian military begins systematic mass killings of PKI members; US Embassy cables describe "ichthyological situation" (blood in water)' },
    { date: '1965-11', event: 'US Embassy political officer Robert Martens provides lists of thousands of PKI members to Indonesian military' },
    { date: '1965-11', event: 'Mass killings intensify in Central Java, East Java, and Bali — rivers clogged with bodies' },
    { date: '1965-12', event: 'State Department cables express satisfaction with the "army\'s progress" in destroying the PKI' },
    { date: '1966-01', event: 'US provides covert financial assistance, communications equipment, and small arms to the Indonesian military' },
    { date: '1966-03', event: 'Suharto forces Sukarno to sign the Supersemar decree, effectively transferring power' },
    { date: '1966-03', event: 'PKI officially banned; remaining members face arrest, torture, and imprisonment without trial' },
    { date: '1966-06', event: 'Killings largely subside; estimated 500,000 to 1,000,000+ dead; millions more imprisoned' },
    { date: '1967', event: 'Suharto formally becomes president; US immediately increases economic and military aid' },
    { date: '1990', event: 'Robert Martens tells journalist he provided lists to the military: "It really was a big help to the army"' },
    { date: '2017', event: 'Declassified US Embassy cables confirm American knowledge and support of the mass killings' },
    { date: '2017', event: 'International People\'s Tribunal in The Hague finds Indonesia guilty of crimes against humanity' },
  ],
  legalOutcomes: [
    { defendant: 'Indonesian Government', charge: 'Genocide and crimes against humanity', outcome: 'International People\'s Tribunal (2017) found Indonesia guilty; no enforcement mechanism' },
    { defendant: 'Suharto', charge: 'Mass murder, crimes against humanity', outcome: 'Ruled too ill to stand trial; died in 2008 without facing justice' },
    { defendant: 'United States Government', charge: 'Complicity in genocide — providing kill lists and material support', outcome: 'No accountability; documents slowly declassified but no official acknowledgment' },
    { defendant: 'CIA', charge: 'Providing intelligence used for mass killings', outcome: 'Most CIA records remain classified; Agency admits to providing "some assistance" without details' },
    { defendant: 'Indonesian military officers', charge: 'Command responsibility for mass killings', outcome: 'No prosecutions; perpetrators remained in positions of power for decades' },
    { defendant: 'Militia groups (Pancasila Youth, etc.)', charge: 'Direct participation in mass killings', outcome: 'Members celebrated as heroes in Indonesia; featured in documentary "The Act of Killing"' },
    { defendant: 'Indonesian National Human Rights Commission', charge: 'Investigation into 1965-66 events', outcome: 'Commission found evidence of crimes against humanity (2012); government rejected findings' },
    { defendant: 'US Embassy Jakarta', charge: 'Coordination with perpetrators of mass atrocities', outcome: 'Cables declassified in 2017 confirming complicity; no official consequences' },
  ],
  charges: [
    { statute: 'Convention on the Prevention and Punishment of the Crime of Genocide (1948)', description: 'Systematic extermination of political group members (PKI) and ethnic Chinese Indonesians', count: '500,000 to 1,000,000+ killed' },
    { statute: '18 U.S.C. § 2381 (Complicity)', description: 'US government provided material support, intelligence lists, and financial aid to perpetrators of mass killing', count: 'Thousands of names provided; covert funds and equipment supplied' },
    { statute: 'Geneva Conventions, Common Article 3', description: 'Murder, torture, and cruel treatment of persons taking no active part in hostilities', count: 'Hundreds of thousands of civilians murdered' },
    { statute: 'Universal Declaration of Human Rights, Articles 3, 5, 9', description: 'Right to life, freedom from torture, and freedom from arbitrary detention — all systematically violated', count: 'Up to 1 million killed; hundreds of thousands imprisoned without trial' },
    { statute: 'UN Charter, Article 2(4)', description: 'US interference in Indonesia\'s internal affairs through covert operations to reshape government', count: 'Decades of covert operations from 1957 onward' },
    { statute: '50 U.S.C. § 3093 (Intelligence Authorization)', description: 'Covert operations conducted without proper congressional notification or oversight', count: 'Multiple covert programs supporting the Indonesian military' },
    { statute: 'Rome Statute (Crimes Against Humanity)', description: 'Widespread and systematic attack against a civilian population: murder, imprisonment, torture, persecution', count: 'Enterprise-level systematic killing across entire archipelago' },
    { statute: '22 U.S.C. § 2304 (Human Rights Conditions on Aid)', description: 'US continued and increased military aid despite knowing the Indonesian military was committing mass atrocities', count: 'Aid increased after the killings concluded' },
  ],
  coverup: [
    'The US Embassy used coded language in cables — referring to the killings as an "ichthyological situation" (there\'s blood in the water) to maintain plausible deniability.',
    'Robert Martens admitted in 1990 to providing lists of thousands of PKI members to the Indonesian military, knowing they would be killed — he called it "a big help to the army."',
    'The CIA\'s full role remains classified over 55 years later. What has been declassified confirms complicity, but the full archive of covert operations remains hidden.',
    'The Indonesian government has never officially acknowledged the mass killings or allowed a formal truth and reconciliation process.',
    'Perpetrators of the mass killings are celebrated as national heroes in Indonesia; the paramilitary group Pancasila Youth boasted of their role in the documentary "The Act of Killing."',
    'The Suharto regime imprisoned hundreds of thousands of suspected communists for years without trial, and survivors faced discrimination and employment restrictions for decades.',
    'US media largely ignored the killings at the time; Time magazine called it "the best news for years in Asia" — framing genocide as a Cold War victory.',
    'Declassified documents were released in dribs and drabs over decades, ensuring the story never gained critical mass in American public consciousness.',
  ],
  sources: [
    { title: 'The Jakarta Method: Washington\'s Anticommunist Crusade — Vincent Bevins', url: 'https://www.vincentbevins.com/book', date: '2020' },
    { title: 'Declassified US Embassy Cables on Indonesia 1965 — National Security Archive', url: 'https://nsarchive.gwu.edu/briefing-book/indonesia/2017-10-17/indonesia-mass-murder-1965-us-embassy-files', date: '2017-10-17' },
    { title: 'The Act of Killing — Documentary by Joshua Oppenheimer', url: 'https://theactofkilling.com/', date: '2012' },
    { title: 'The Army and the Indonesian Genocide: Mechanics of Mass Murder — Jess Melvin', url: 'https://www.routledge.com/The-Army-and-the-Indonesian-Genocide/Melvin/p/book/9781138574427', date: '2018' },
    { title: 'Lists of Death: CIA and Indonesian Army Kill Lists — Kathy Kadane (States News Service)', url: 'https://nsarchive.gwu.edu/briefing-book/indonesia/2017-10-17/indonesia-mass-murder-1965', date: '1990' },
    { title: 'International People\'s Tribunal on 1965 Crimes Against Humanity — Final Report', url: 'http://www.tribunal1965.org/en/final-report-of-the-ipt-1965/', date: '2017' },
    { title: 'Indonesia\'s 1965 Genocide: US Government Documents Released — AP', url: 'https://apnews.com/article/indonesia-us-declassified-1965-killings-b63b7f8b9c7845c3b4d51e0acb7f3fd9', date: '2017-10-18' },
    { title: 'The Shadow War: US Covert Operations in Indonesia — Bradley Simpson', url: 'https://www.sup.org/books/title/?id=12208', date: '2008' },
  ],
};

export default function IndonesiaMassKillingsPage() {
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
