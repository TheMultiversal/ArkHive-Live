'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowLeft, AlertTriangle, Users, Calendar, FileText, ExternalLink, Scale, ShieldAlert, Skull } from 'lucide-react';
import GlitchText from '@/components/effects/GlitchText';

const investigation = {
 title: 'East Timor Genocide',
 subtitle: 'Indonesian Invasion with US Weapons: 180,000 Dead, Ford & Kissinger Gave the Green Light',
 severity: 'critical',
 status: 'CLOSED, PARTIAL ACCOUNTABILITY',
 summary: 'On December 7, 1975, Indonesia invaded East Timor just hours after President Gerald Ford and Secretary of State Henry Kissinger left Jakarta, having given their explicit approval. The invasion was carried out with American-supplied weapons in violation of US law, which prohibited their use for offensive operations. Over the next 24 years of brutal occupation, an estimated 100,000 to 180,000 East Timorese were killed (up to a third of the population) through military operations, forced starvation, and disease. The US continued supplying Indonesia with weapons and military aid throughout the occupation, including during the worst periods of mass killing. The Carter, Reagan, and Bush administrations all maintained support for Indonesia\'s occupation, valuing the Suharto regime as a Cold War ally and protecting access to the Timor Gap\'s oil reserves.',
 keyFigures: [
 { name: 'Gerald Ford', role: 'US President who approved the invasion during a visit to Jakarta on December 6, 1975', href: '/entities/individuals/gerald-ford', status: 'Deceased (2006)' },
 { name: 'Henry Kissinger', role: 'Secretary of State who gave the green light and ensured continued arms supply', href: '/entities/individuals/henry-kissinger', status: 'Deceased (2023)' },
 { name: 'Suharto', role: 'Indonesian dictator who ordered the invasion and 24-year occupation', href: '/entities/individuals/suharto', status: 'Deceased (2008)' },
 { name: 'Daniel Patrick Moynihan', role: 'US Ambassador to UN who blocked Security Council action on East Timor', href: '/entities/individuals/daniel-patrick-moynihan', status: 'Deceased (2003)' },
 { name: 'Benny Murdani', role: 'Indonesian military intelligence chief who planned and commanded the invasion', href: '/entities/individuals/benny-murdani', status: 'Deceased (2004)' },
 { name: 'José Ramos-Horta', role: 'East Timorese resistance leader, Nobel Peace Prize laureate, later President', href: '/entities/individuals/jose-ramos-horta', status: 'Active' },
 { name: 'Xanana Gusmão', role: 'Commander of Falintil resistance, imprisoned, later first President of East Timor', href: '/entities/individuals/xanana-gusmao', status: 'Active' },
 { name: 'Bishop Carlos Ximenes Belo', role: 'Catholic bishop in Dili, Nobel Peace Prize laureate for documenting atrocities', href: '/entities/individuals/carlos-ximenes-belo', status: 'Active' },
 { name: 'Allan Nairn', role: 'American journalist who witnessed the Santa Cruz massacre and exposed US complicity', href: '/entities/individuals/allan-nairn', status: 'Active' },
 { name: 'Eurico Guterres', role: 'Pro-Indonesian militia leader responsible for 1999 violence during independence referendum', href: '/entities/individuals/eurico-guterres', status: 'Convicted' },
 ],
 timeline: [
 { date: '1974-04', event: 'Portuguese Carnation Revolution ends dictatorship; Portugal begins decolonization process including East Timor' },
 { date: '1975-08', event: 'Brief civil war in East Timor; Fretilin party takes control and declares independence on November 28' },
 { date: '1975-12-06', event: 'Ford and Kissinger meet Suharto in Jakarta; give approval for invasion -"We understand the problem and will not press you on it"' },
 { date: '1975-12-07', event: 'Indonesia invades East Timor with 10,000 troops; mass killings begin immediately in Dili' },
 { date: '1975-12', event: 'US blocks UN Security Council from taking effective action against its ally Indonesia' },
 { date: '1976', event: 'Indonesia formally annexes East Timor as its 27th province; no country except Australia recognizes the annexation' },
 { date: '1977-78', event: 'Indonesian military launches"encirclement and annihilation"campaigns in East Timor highlands; forced starvation kills tens of thousands' },
 { date: '1977', event: 'Carter administration increases military aid to Indonesia despite human rights rhetoric' },
 { date: '1979', event: 'International Red Cross reports famine-like conditions; estimated 100,000 dead in first four years of occupation' },
 { date: '1981', event: 'Reagan administration dramatically increases military sales to Indonesia; classifies East Timor human rights information' },
 { date: '1991-11-12', event: 'Santa Cruz massacre: Indonesian troops open fire on a peaceful funeral procession in Dili, killing at least 250 people, Allan Nairn and Amy Goodman witness and survive' },
 { date: '1996', event: 'Nobel Peace Prize awarded to José Ramos-Horta and Bishop Belo for their work toward a just and peaceful solution' },
 { date: '1999-08-30', event: 'UN-supervised referendum: 78.5% of East Timorese vote for independence' },
 { date: '1999-09', event: 'Indonesian military and militias launch scorched-earth campaign after referendum, killing 1,400+, displacing 300,000' },
 { date: '1999-09', event: 'International peacekeeping force (INTERFET) led by Australia finally deploys after intense international pressure' },
 { date: '2002-05-20', event: 'East Timor becomes independent nation, Timor-Leste' },
 { date: '2005', event: 'Commission for Reception, Truth and Reconciliation (CAVR) documents Indonesian military atrocities and US/Australian complicity' },
 ],
 legalOutcomes: [
 { defendant: 'Eurico Guterres', charge: 'Crimes against humanity during 1999 post-referendum violence', outcome: 'Convicted by Indonesian ad hoc tribunal; sentence later overturned on appeal' },
 { defendant: 'Indonesian military commanders', charge: 'Genocide, crimes against humanity during 24-year occupation', outcome: 'Indonesia\'s ad hoc tribunal acquitted virtually all defendants, widely condemned as a sham' },
 { defendant: 'United States Government', charge: 'Supplying weapons used for genocide in violation of Arms Export Control Act', outcome: 'Congress briefly restricted (but never stopped) military aid; no accountability for Ford/Kissinger decision' },
 { defendant: 'Australia', charge: 'Complicity, only country to formally recognize Indonesia\'s annexation; negotiated Timor Gap oil treaty', outcome: 'Australia signed Timor Gap Treaty with Indonesia, dividing East Timor\'s oil resources; treaty later renegotiated with Timor-Leste' },
 { defendant: 'UN / International community', charge: 'Failure to enforce right to self-determination for 24 years', outcome: 'UN maintained de jure Portuguese sovereignty but took no action for decades' },
 { defendant: 'Henry Kissinger', charge: 'Complicity in genocide through approval and continued arms supply', outcome: 'No prosecution; French court attempted to serve summons in 2001 but was blocked' },
 { defendant: 'CAVR Final Report', charge: 'Truth commission findings on atrocities and complicity', outcome: 'Report confirmed 102,800 conflict-related deaths; recommended accountability measures largely ignored' },
 { defendant: 'Indonesia-Timor-Leste Truth Commission', charge: 'Bilateral accountability process', outcome: 'Commission acknowledged institutional responsibility but recommended against prosecution, survivors received no justice' },
 ],
 charges: [
 { statute: 'Convention on the Prevention and Punishment of the Crime of Genocide (1948)', description: 'Systematic killing of East Timorese as a national group, including forced starvation, mass killing, and destruction of population', count: '100,000-180,000 killed, up to one-third of the population' },
 { statute: '22 U.S.C. § 2754 (Arms Export Control Act)', description: 'US-supplied weapons used for offensive invasion and genocide in violation of end-use agreements', count: '90% of weapons used in invasion were American-made' },
 { statute: 'Geneva Conventions, Articles 3 and 147', description: 'Willful killing, torture, forced transfers, and destruction of civilian property during military occupation', count: '24 years of systematic violations' },
 { statute: 'UN Charter, Article 2(4)', description: 'Indonesia\'s invasion violated the territorial integrity and political independence of East Timor', count: 'Full-scale military invasion and annexation' },
 { statute: 'Right to Self-Determination (UN Charter Article 1)', description: 'Denial of the East Timorese people\'s right to self-determination for 24 years', count: 'Entire population subjected to foreign occupation' },
 { statute: 'Rome Statute (Crimes Against Humanity)', description: 'Widespread and systematic attack directed against a civilian population: murder, deportation, torture, rape', count: 'Systematic across entire territory for 24 years' },
 { statute: '18 U.S.C. § 2381 (Aiding and Abetting)', description: 'US government knowingly provided material support to Indonesia during commission of genocide', count: 'Continuous military aid from 1975-1999' },
 { statute: 'Convention Against Torture', description: 'Systematic use of torture by Indonesian military against East Timorese civilians and detainees', count: 'Documented across decades; thousands of victims' },
 ],
 coverup: [
 'Ford and Kissinger timed their departure from Jakarta to provide plausible deniability, the invasion began just hours after they left, but declassified transcripts confirm they gave explicit approval.',
 'US Ambassador Moynihan later boasted in his memoir that he had"rendered the United Nations utterly ineffective"in response to the invasion, describing it as following State Department instructions.',
 'The US continued to supply Indonesia with weapons throughout the occupation, including OV-10 Bronco counterinsurgency aircraft used to bomb villages, in clear violation of end-use restrictions.',
 'The Carter administration increased military aid to Indonesia despite its human rights rhetoric, with National Security Advisor Zbigniew Brzezinski prioritizing the Cold War alliance.',
 'The Santa Cruz massacre in 1991 was initially denied by Indonesia, only the presence of journalists and amateur videographer Max Stahl preserved the evidence.',
 'Australia secretly negotiated the Timor Gap Treaty with Indonesia in 1989 to split East Timor\'s oil and gas reserves, literally profiting from the occupation.',
 'The US classified human rights reports on East Timor for years, preventing Congress and the public from understanding the scale of atrocities committed with American weapons.',
 'Indonesia\'s post-independence ad hoc tribunal was designed to fail, virtually every defendant was acquitted, and the process was condemned by international observers as a whitewash.',
 ],
 sources: [
 { title: 'Chega! Final Report of the CAVR (Commission for Reception, Truth and Reconciliation)', url: 'https://www.etan.org/news/2006/cavr.htm', date: '2005' },
 { title: 'Ford, Kissinger, and the Indonesian Invasion, National Security Archive', url: 'https://nsarchive2.gwu.edu/NSAEBB/NSAEBB62/', date: '2001-12-06' },
 { title: 'East Timor: Genocide in Paradise, Matthew Jardine', url: 'https://www.goodreads.com/book/show/1036555.East_Timor', date: '1999' },
 { title: 'A Not-So-Distant Horror: Mass Violence in East Timor, Joseph Nevins', url: 'https://www.cornellpress.cornell.edu/book/9780801489433/a-not-so-distant-horror/', date: '2005' },
 { title: 'Manufacturing Consent: East Timor, Noam Chomsky', url: 'https://chomsky.info/east-timor/', date: '1999' },
 { title: 'The Trial of Henry Kissinger, Christopher Hitchens', url: 'https://www.penguinrandomhouse.com/books/288427/the-trial-of-henry-kissinger-by-christopher-hitchens/', date: '2001' },
 { title: 'US Weapons Sales to Indonesia, East Timor Action Network', url: 'https://www.etan.org/issues/arms.htm', date: '2002' },
 { title: 'Santa Cruz Massacre Footage, Max Stahl/CNN', url: 'https://www.youtube.com/watch?v=4Fz5jY0P1FQ', date: '1991-11-12' },
 ],
};

export default function EastTimorGenocidePage() {
 return (
 <div className="min-h-screen pt-20 lg:pt-24 pb-16">
 <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
 <Link href="/investigations"className="inline-flex items-center gap-2 text-zinc-400 hover:text-blood-500 transition-colors mb-6 pt-4"><ArrowLeft className="w-4 h-4"/>Back to Investigations</Link>
 <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="border-2 border-blood-800/60 bg-black/80 p-6 lg:p-8 mb-8">
 <div className="flex items-center gap-3 mb-4"><span className="px-3 py-1 text-xs font-bold uppercase border border-blood-500/30 bg-blood-500/20 text-blood-400">{investigation.severity}</span><span className="px-3 py-1 text-xs font-bold uppercase border border-zinc-500/30 bg-zinc-500/20 text-zinc-400">{investigation.status}</span></div>
 <h1 className="text-3xl lg:text-4xl font-black glass-text uppercase tracking-wider mb-2"><GlitchText text={investigation.title} /></h1>
 <p className="text-lg text-blood-500 font-bold mb-4">{investigation.subtitle}</p>
 <p className="text-zinc-400 leading-relaxed">{investigation.summary}</p>
 </motion.div>
 <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.15 }} className="glass-card p-6 mb-8 border-l-4 border-blood-600">
 <h2 className="text-xl font-bold glass-text uppercase tracking-wider mb-4 flex items-center gap-2"><ShieldAlert className="w-5 h-5 text-blood-500"/>The Cover-Up</h2>
 <div className="space-y-3">{investigation.coverup.map((item, idx) => (<div key={idx} className="p-3 bg-blood-950/20 border border-blood-500/30"><p className="text-sm text-zinc-300">{item}</p></div>))}</div>
 </motion.div>
 <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
 <div className="lg:col-span-2 space-y-8">
 <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }} className="glass-card p-6">
 <h2 className="text-xl font-bold glass-text uppercase tracking-wider mb-4 flex items-center gap-2"><Users className="w-5 h-5 text-blood-500"/>Key Figures</h2>
 <div className="space-y-3">{investigation.keyFigures.map((figure, idx) => (<div key={idx} className="flex items-start justify-between p-3 bg-zinc-900/50 border border-zinc-800"><div className="flex-1">{figure.href ? (<Link href={figure.href} className="font-bold text-blood-400 hover:text-blood-300 transition-colors">{figure.name}</Link>) : (<span className="font-bold glass-text">{figure.name}</span>)}<p className="text-sm text-zinc-400 mt-1">{figure.role}</p></div><span className="text-xs px-2 py-1 bg-zinc-800 text-zinc-400 border border-zinc-700 whitespace-nowrap ml-2">{figure.status}</span></div>))}</div>
 </motion.div>
 <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }} className="glass-card p-6">
 <h2 className="text-xl font-bold glass-text uppercase tracking-wider mb-4 flex items-center gap-2"><Scale className="w-5 h-5 text-blood-500"/>Applicable Charges &amp; Statutes</h2>
 <div className="space-y-3">{investigation.charges.map((charge, idx) => (<div key={idx} className="p-4 bg-zinc-900/50 border border-zinc-800"><p className="font-bold text-blood-400 text-sm font-mono">{charge.statute}</p><p className="text-sm text-zinc-300 mt-1">{charge.description}</p><p className="text-xs text-blood-400 mt-1">{charge.count}</p></div>))}</div>
 </motion.div>
 </div>
 <div className="space-y-6">
 <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} className="glass-card p-6">
 <h3 className="text-lg font-bold glass-text uppercase tracking-wider mb-4 flex items-center gap-2"><Calendar className="w-4 h-4 text-blood-500"/>Timeline</h3>
 <div className="space-y-4">{investigation.timeline.map((item, idx) => (<div key={idx} className="relative pl-4 border-l-2 border-zinc-800"><div className="absolute -left-[5px] top-0 w-2 h-2 bg-blood-500"/><p className="text-xs text-blood-500 font-mono">{item.date}</p><p className="text-sm text-zinc-300">{item.event}</p></div>))}</div>
 </motion.div>
 <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.1 }} className="glass-card p-6">
 <h3 className="text-lg font-bold glass-text uppercase tracking-wider mb-4 flex items-center gap-2"><Scale className="w-5 h-5 text-blood-500"/>Legal Outcomes</h3>
 <div className="space-y-3">{investigation.legalOutcomes.map((item, idx) => (<div key={idx} className="p-3 bg-zinc-900/50 border border-zinc-800"><p className="font-bold glass-text text-sm">{item.defendant}</p><p className="text-xs text-zinc-400 mt-1">{item.charge}</p><p className="text-xs text-blood-400 mt-1">{item.outcome}</p></div>))}</div>
 </motion.div>
 <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.2 }} className="glass-card p-6">
 <h3 className="text-lg font-bold glass-text uppercase tracking-wider mb-4">Sources</h3>
 <div className="space-y-2">{investigation.sources.map((source, idx) => (<a key={idx} href={source.url} target="_blank"rel="noopener noreferrer"className="flex items-start gap-2 p-2 text-sm text-zinc-400 hover:text-blood-400 hover:bg-zinc-900/50 transition-colors"><ExternalLink className="w-4 h-4 mt-0.5 flex-shrink-0"/><div><span>{source.title}</span><span className="text-zinc-600 ml-2">({source.date})</span></div></a>))}</div>
 </motion.div>
 </div>
 </div>
 </div>
 </div>
 );
}
