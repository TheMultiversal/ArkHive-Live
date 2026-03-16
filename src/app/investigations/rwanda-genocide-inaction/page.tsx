'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowLeft, AlertTriangle, Users, Calendar, FileText, ExternalLink, Scale, ShieldAlert, Skull } from 'lucide-react';
import GlitchText from '@/components/effects/GlitchText';

const investigation = {
 title: 'Rwanda Genocide: The World Looked Away',
 subtitle: '800,000 Murdered in 100 Days While the US Blocked International Intervention',
 severity: 'critical',
 status: 'CLOSED, UNACCOUNTED',
 summary: 'Between April and July 1994, an estimated 800,000 Tutsis and moderate Hutus were systematically massacred in Rwanda in one of the most efficient genocides in human history (roughly 8,000 people per day for 100 days. The United States, under the Clinton administration, not only failed to intervene but actively blocked efforts at the United Nations to authorize a peacekeeping force that could have saved hundreds of thousands of lives. The State Department was instructed to avoid using the word "genocide" because doing so would have legally obligated the US to act under the 1948 Genocide Convention. General Roméo Dallaire, the UN peacekeeping commander on the ground, had repeatedly warned of the impending genocide and requested reinforcements) he was denied. The Clinton administration later called its failure to act in Rwanda its greatest foreign policy failure, but no official was ever held accountable.',
 keyFigures: [
 { name: 'Bill Clinton', role: 'US President who failed to authorize intervention and later called Rwanda his"biggest regret"', href: '/entities/individuals/bill-clinton', status: 'Active' },
 { name: 'Madeleine Albright', role: 'US Ambassador to the UN who helped block expansion of UNAMIR peacekeeping force', href: '/entities/individuals/madeleine-albright', status: 'Deceased (2022)' },
 { name: 'Warren Christopher', role: 'Secretary of State who avoided the term "genocide" to circumvent legal obligations', href: '/entities/individuals/warren-christopher', status: 'Deceased (2011)' },
 { name: 'Anthony Lake', role: 'National Security Advisor who was aware of genocide intelligence but failed to act', href: '/entities/individuals/anthony-lake', status: 'Active' },
 { name: 'Roméo Dallaire', role: 'Canadian UN force commander who warned of genocide and pleaded for reinforcements', href: '/entities/individuals/romeo-dallaire', status: 'Active' },
 { name: 'Kofi Annan', role: 'UN Peacekeeping head who failed to pass Dallaire\'s warnings to the Security Council', href: '/entities/individuals/kofi-annan', status: 'Deceased (2018)' },
 { name: 'Boutros Boutros-Ghali', role: 'UN Secretary-General who failed to mobilize a response to the genocide', href: '/entities/individuals/boutros-boutros-ghali', status: 'Deceased (2016)' },
 { name: 'Théoneste Bagosora', role: 'Rwandan military official considered the mastermind of the genocide', href: '/entities/individuals/theoneste-bagosora', status: 'Imprisoned' },
 { name: 'Juvénal Habyarimana', role: 'Rwandan President whose assassination triggered the genocide', href: '/entities/individuals/juvenal-habyarimana', status: 'Deceased (1994)' },
 { name: 'Paul Kagame', role: 'RPF leader who ended the genocide; became President of Rwanda', href: '/entities/individuals/paul-kagame', status: 'Active' },
 { name: 'Prudence Bushnell', role: 'Deputy Assistant Secretary of State who advocated action but was overruled', href: '/entities/individuals/prudence-bushnell', status: 'Active' },
 ],
 timeline: [
 { date: '1990-10', event: 'Rwandan Patriotic Front (RPF) invades Rwanda from Uganda; civil war begins between Hutu government and Tutsi-led RPF' },
 { date: '1993-08', event: 'Arusha Accords signed, power-sharing agreement between Hutu government and RPF; UN authorized to send peacekeepers' },
 { date: '1993-10', event: 'UNAMIR peacekeeping force deployed with 2,548 troops, far fewer than Dallaire requested' },
 { date: '1994-01-11', event: 'Dallaire sends"genocide fax"to UN headquarters warning of Interahamwe weapons caches and extermination plan, ignored by Kofi Annan\'s office' },
 { date: '1994-04-06', event: 'President Habyarimana\'s plane shot down; genocide begins within hours with pre-positioned death lists' },
 { date: '1994-04-07', event: '10 Belgian peacekeepers murdered; Belgium withdraws troops, weakening UNAMIR at the critical moment' },
 { date: '1994-04-12', event: 'Belgian withdrawal complete; France and other nations evacuate their citizens but not Rwandans' },
 { date: '1994-04-21', event: 'UN Security Council REDUCES UNAMIR to 270 troops as genocide accelerates, US pushes for withdrawal' },
 { date: '1994-04-28', event: 'State Department memo instructs spokespersons to describe events as"acts of genocide"rather than "genocide" to avoid legal trigger' },
 { date: '1994-05', event: 'Clinton administration opposes jamming Radio Mille Collines broadcasts inciting genocide, citing cost and legal concerns' },
 { date: '1994-05-17', event: 'UN Security Council finally authorizes 5,500 troops for UNAMIR II, but deployment delayed for months while killing continues' },
 { date: '1994-06-10', event: 'State Department spokesperson Christine Shelly refuses to say "genocide" in press briefing, says only"acts of genocide may have occurred"' },
 { date: '1994-06-22', event: 'France launches Operation Turquoise, ostensibly humanitarian but creates safe zone that protects many génocidaires' },
 { date: '1994-07-04', event: 'RPF captures Kigali; genocide effectively ends after 100 days and approximately 800,000 dead' },
 { date: '1994-11', event: 'International Criminal Tribunal for Rwanda (ICTR) established in Arusha, Tanzania' },
 { date: '1998-03', event: 'Clinton visits Rwanda for 3.5 hours, offers partial apology while engine running on Air Force One' },
 { date: '2004', event: 'Dallaire publishes "Shake Hands with the Devil,"detailing the UN and US failures in devastating detail' },
 ],
 legalOutcomes: [
 { defendant: 'Théoneste Bagosora', charge: 'Genocide, crimes against humanity', outcome: 'Convicted by ICTR in 2008; sentenced to life imprisonment (reduced to 35 years on appeal)' },
 { defendant: 'Jean Kambanda', charge: 'Genocide (as Prime Minister during the genocide)', outcome: 'Pleaded guilty to genocide at ICTR, first head of government convicted of genocide' },
 { defendant: 'Jean-Paul Akayesu', charge: 'Genocide and crimes against humanity including systematic rape', outcome: 'Convicted by ICTR in 1998; landmark ruling recognizing rape as a tool of genocide' },
 { defendant: 'Ferdinand Nahimana', charge: 'Incitement to genocide through Radio Mille Collines broadcasts', outcome: 'Convicted by ICTR in 2003 ("Media Trial"); sentenced to life, reduced to 30 years on appeal' },
 { defendant: 'United States Government', charge: 'Failure to prevent genocide under 1948 Convention', outcome: 'No accountability; Clinton offered partial apology in 1998 but no official was punished' },
 { defendant: 'United Nations', charge: 'Failure to protect, reducing peacekeeping force during active genocide', outcome: 'UN report (1999) acknowledged failure; Kofi Annan expressed"deep remorse"' },
 { defendant: 'France (Operation Turquoise)', charge: 'Complicity in protecting génocidaires through safe zone', outcome: 'French commission (2021) acknowledged"heavy responsibilities"but cleared France of direct complicity' },
 { defendant: 'Belgian Government', charge: 'Withdrawal of peacekeepers during genocide', outcome: 'Belgium apologized for withdrawal that emboldened killers; no formal accountability' },
 ],
 charges: [
 { statute: 'Convention on the Prevention and Punishment of the Crime of Genocide (1948)', description: 'The US ratified this convention and was legally obligated to act to prevent genocide, the State Department deliberately avoided the word to evade this obligation', count: '800,000 lives that intervention could have saved' },
 { statute: 'UN Charter, Chapter VII', description: 'Security Council authority to authorize military intervention to prevent genocide, blocked by US and others', count: 'UNAMIR reduced from 2,548 to 270 during active genocide' },
 { statute: '18 U.S.C. § 1091 (US Genocide Convention Implementation Act)', description: 'US law implementing genocide convention obligations, administration deliberately circumvented', count: 'Entire government apparatus mobilized to avoid legal trigger' },
 { statute: 'Rome Statute (Crimes Against Humanity)', description: 'Though not yet in force during Rwanda, the genocide demonstrated the need for permanent international criminal court', count: 'Led directly to establishment of ICC in 2002' },
 { statute: 'Geneva Conventions, Common Article 3', description: 'Protections for civilians in non-international armed conflicts, violated on massive scale', count: '800,000 civilians systematically murdered' },
 { statute: '18 U.S.C. § 1505 (Obstruction)', description: 'US government obstructed international efforts to respond to genocide through blocking Security Council action', count: 'Multiple Security Council sessions where US advocated inaction' },
 { statute: 'Universal Declaration of Human Rights, Article 3', description: 'Right to life, liberty, and security of person, collectively denied to 800,000 Rwandans', count: 'Systematic violation over 100 days' },
 { statute: 'International humanitarian law', description: 'Obligation of the international community to protect civilian populations from genocide', count: 'Complete failure of "Never Again"commitment' },
 ],
 coverup: [
 'The State Department instructed officials to use the phrase"acts of genocide"rather than "genocide" specifically to avoid triggering the legal obligation to act under the 1948 Convention.',
 'Intelligence reports and Dallaire\'s"genocide fax"warned of the impending genocide months before it began, but UN and US officials failed to act on clear intelligence.',
 'The Clinton administration actively blocked proposals to jam Radio Mille Collines, which was broadcasting instructions to killers, citing cost concerns and free speech principles.',
 'When the genocide began, the US pushed for UNAMIR troop reduction rather than reinforcement, sending a clear signal that the international community would not protect Rwandans.',
 'Clinton\'s 1998"apology"in Rwanda was carefully worded to avoid admitting direct US responsibility, he spent only 3.5 hours on the ground with Air Force One engines running.',
 'France\'s Operation Turquoise, presented as humanitarian intervention, created a safe zone that many génocidaires used to escape to Zaire (now DRC) with their weapons.',
 'After the genocide, the US blocked efforts to have the ICTR funded at levels that would allow rapid prosecution, delaying justice for survivors.',
 'The full extent of US intelligence awareness before and during the genocide remains classified, key documents have never been declassified despite repeated requests.',
 ],
 sources: [
 { title: 'Shake Hands with the Devil, Roméo Dallaire', url: 'https://www.penguinrandomhouse.com/books/288503/shake-hands-with-the-devil-by-romeo-dallaire/', date: '2004' },
 { title: 'A Problem from Hell: America and the Age of Genocide, Samantha Power', url: 'https://www.penguinrandomhouse.com/books/4191/a-problem-from-hell-by-samantha-power/', date: '2002' },
 { title: 'The Genocide Fax, National Security Archive', url: 'https://nsarchive2.gwu.edu/NSAEBB/NSAEBB53/', date: '2001' },
 { title: 'Ghosts of Rwanda, PBS Frontline', url: 'https://www.pbs.org/wgbh/pages/frontline/shows/ghosts/', date: '2004-04-01' },
 { title: 'Report of the Independent Inquiry into the Actions of the United Nations During the 1994 Genocide in Rwanda', url: 'https://www.un.org/en/ga/search/view_doc.asp?symbol=S/1999/1257', date: '1999-12-15' },
 { title: 'Clinton\'s Rwanda Apology, BBC', url: 'http://news.bbc.co.uk/2/hi/africa/714025.stm', date: '1998-03-26' },
 { title: 'Bystanders to Genocide, The Atlantic', url: 'https://www.theatlantic.com/magazine/archive/2001/09/bystanders-to-genocide/304571/', date: '2001-09' },
 { title: 'ICTR Legacy, United Nations Mechanism for International Criminal Tribunals', url: 'https://unictr.irmct.org/', date: '2015' },
 ],
};

export default function RwandaGenocidePage() {
 return (
 <div className="min-h-screen pt-20 lg:pt-24 pb-16">
 <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
 <Link href="/investigations"className="inline-flex items-center gap-2 text-zinc-400 hover:text-blood-500 transition-colors mb-6 pt-4"><ArrowLeft className="w-4 h-4"/>Back to Investigations</Link>
 <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="border-2 border-blood-800/60 bg-[rgba(0,12,35,0.65)] p-6 lg:p-8 mb-8">
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
 <div className="space-y-3">{investigation.keyFigures.map((figure, idx) => (<div key={idx} className="flex items-start justify-between p-3 bg-[rgba(0,20,55,0.40)] border border-[rgba(60,160,255,0.12)]"><div className="flex-1">{figure.href ? (<Link href={figure.href} className="font-bold text-blood-400 hover:text-blood-300 transition-colors">{figure.name}</Link>) : (<span className="font-bold glass-text">{figure.name}</span>)}<p className="text-sm text-zinc-400 mt-1">{figure.role}</p></div><span className="text-xs px-2 py-1 bg-[rgba(0,30,80,0.40)] text-zinc-400 border border-[rgba(60,160,255,0.18)] whitespace-nowrap ml-2">{figure.status}</span></div>))}</div>
 </motion.div>
 <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }} className="glass-card p-6">
 <h2 className="text-xl font-bold glass-text uppercase tracking-wider mb-4 flex items-center gap-2"><Scale className="w-5 h-5 text-blood-500"/>Applicable Charges &amp; Statutes</h2>
 <div className="space-y-3">{investigation.charges.map((charge, idx) => (<div key={idx} className="p-4 bg-[rgba(0,20,55,0.40)] border border-[rgba(60,160,255,0.12)]"><p className="font-bold text-blood-400 text-sm font-mono">{charge.statute}</p><p className="text-sm text-zinc-300 mt-1">{charge.description}</p><p className="text-xs text-blood-400 mt-1">{charge.count}</p></div>))}</div>
 </motion.div>
 </div>
 <div className="space-y-6">
 <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} className="glass-card p-6">
 <h3 className="text-lg font-bold glass-text uppercase tracking-wider mb-4 flex items-center gap-2"><Calendar className="w-4 h-4 text-blood-500"/>Timeline</h3>
 <div className="space-y-4">{investigation.timeline.map((item, idx) => (<div key={idx} className="relative pl-4 border-l-2 border-[rgba(60,160,255,0.12)]"><div className="absolute -left-[5px] top-0 w-2 h-2 bg-blood-500"/><p className="text-xs text-blood-500 font-mono">{item.date}</p><p className="text-sm text-zinc-300">{item.event}</p></div>))}</div>
 </motion.div>
 <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.1 }} className="glass-card p-6">
 <h3 className="text-lg font-bold glass-text uppercase tracking-wider mb-4 flex items-center gap-2"><Scale className="w-5 h-5 text-blood-500"/>Legal Outcomes</h3>
 <div className="space-y-3">{investigation.legalOutcomes.map((item, idx) => (<div key={idx} className="p-3 bg-[rgba(0,20,55,0.40)] border border-[rgba(60,160,255,0.12)]"><p className="font-bold glass-text text-sm">{item.defendant}</p><p className="text-xs text-zinc-400 mt-1">{item.charge}</p><p className="text-xs text-blood-400 mt-1">{item.outcome}</p></div>))}</div>
 </motion.div>
 <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.2 }} className="glass-card p-6">
 <h3 className="text-lg font-bold glass-text uppercase tracking-wider mb-4">Sources</h3>
 <div className="space-y-2">{investigation.sources.map((source, idx) => (<a key={idx} href={source.url} target="_blank"rel="noopener noreferrer"className="flex items-start gap-2 p-2 text-sm text-zinc-400 hover:text-blood-400 hover:bg-[rgba(0,20,55,0.40)] transition-colors"><ExternalLink className="w-4 h-4 mt-0.5 flex-shrink-0"/><div><span>{source.title}</span><span className="text-zinc-600 ml-2">({source.date})</span></div></a>))}</div>
 </motion.div>
 </div>
 </div>
 </div>
 </div>
 );
}
