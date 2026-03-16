'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowLeft, AlertTriangle, Users, Calendar, FileText, ExternalLink, Scale, ShieldAlert, Skull } from 'lucide-react';
import GlitchText from '@/components/effects/GlitchText';

const investigation = {
 title: 'Libya Intervention: From Regime Change to Failed State',
 subtitle: 'NATO bombing destroyed Africa\'s most prosperous nation, creating slave markets and a jihadi stronghold',
 severity: 'critical',
 status: 'ONGOING CRISIS',
 summary: 'In 2011, the United States and NATO allies launched a military intervention in Libya under the guise of"humanitarian protection,"transforming a UN-authorized no-fly zone into a full-scale regime change operation. The bombing campaign destroyed Libya\'s government, infrastructure, and civil society. Muammar Gaddafi was captured and extrajudicially killed. The aftermath has been catastrophic: Libya descended into civil war between competing governments and militias, open-air slave markets emerged selling sub-Saharan African migrants, ISIS established a foothold, and weapons flooded across North Africa and the Sahel, destabilizing multiple neighboring countries. President Obama later called the failure to plan for post-Gaddafi Libya the"worst mistake"of his presidency.',
 keyFigures: [
 { name: 'Barack Obama', role: 'President who authorized military intervention; later called it his"worst mistake"', href: '/entities/individuals/barack-obama', status: 'Living' },
 { name: 'Hillary Clinton', role: 'Secretary of State who championed regime change; said "We came, we saw, he died"', href: '/entities/individuals/hillary-clinton', status: 'Living' },
 { name: 'Susan Rice', role: 'U.S. Ambassador to UN who pushed for intervention authorization', href: '/entities/individuals/susan-rice', status: 'Living' },
 { name: 'Samantha Power', role: 'NSC advisor who advocated intervention on "Responsibility to Protect"doctrine', href: '/entities/individuals/samantha-power', status: 'Living' },
 { name: 'Nicolas Sarkozy', role: 'French President who led the push for intervention; later investigated for Libyan campaign financing', href: '/entities/individuals/nicolas-sarkozy', status: 'Living' },
 { name: 'David Cameron', role: 'UK Prime Minister who co-led the NATO campaign', href: '/entities/individuals/david-cameron', status: 'Living' },
 { name: 'Muammar Gaddafi', role: 'Libyan leader overthrown and extrajudicially killed during intervention', href: '/entities/individuals/muammar-gaddafi', status: 'Deceased, Killed Oct 2011' },
 { name: 'Khalifa Haftar', role: 'CIA-linked warlord who became commander of eastern Libyan forces', href: '/entities/individuals/khalifa-haftar', status: 'Active' },
 { name: 'Abdel Hakim Belhaj', role: 'Former LIFG jihadist who became Tripoli military commander with NATO support', href: '/entities/individuals/abdel-hakim-belhaj', status: 'Active' },
 { name: 'Robert Gates', role: 'Secretary of Defense who privately opposed intervention', href: '/entities/individuals/robert-gates', status: 'Living' },
 { name: 'Anders Fogh Rasmussen', role: 'NATO Secretary General who oversaw the bombing campaign', href: '/entities/individuals/anders-fogh-rasmussen', status: 'Living' },
 ],
 timeline: [
 { date: 'February 15, 2011', event: 'Protests begin in Benghazi as part of the Arab Spring wave' },
 { date: 'February 26, 2011', event: 'UN Security Council passes Resolution 1970, imposing sanctions on Libya' },
 { date: 'March 17, 2011', event: 'UN Resolution 1973 authorizes no-fly zone, explicitly prohibits ground occupation' },
 { date: 'March 19, 2011', event: 'Operation Odyssey Dawn: U.S., UK, and France begin bombing Libyan government forces' },
 { date: 'March 31, 2011', event: 'NATO takes command under Operation Unified Protector, rapidly expanding beyond no-fly zone mandate' },
 { date: 'April 2011', event: 'NATO begins targeting Gaddafi\'s compound and government infrastructure, clear regime change operation' },
 { date: 'June 2011', event: 'Obama administration argues bombing doesn\'t constitute "hostilities" to avoid War Powers Act constraints' },
 { date: 'August 2011', event: 'Rebel forces enter Tripoli with NATO air support; widespread looting of weapons arsenals' },
 { date: 'October 20, 2011', event: 'Gaddafi captured and extrajudicially killed by rebels; Clinton jokes "We came, we saw, he died"' },
 { date: 'October 31, 2011', event: 'NATO ends military operations; no peacekeeping or stability plan in place' },
 { date: 'September 11, 2012', event: 'Attack on U.S. diplomatic compound in Benghazi kills Ambassador Chris Stevens and three others' },
 { date: '2014', event: 'Libya splits into rival governments: Tripoli and Tobruk; civil war resumes' },
 { date: '2015', event: 'ISIS establishes significant presence in Sirte; open slave markets reported by migrants' },
 { date: '2017', event: 'CNN reports on open-air slave auctions of African migrants in Libya' },
 { date: '2019', event: 'Haftar launches offensive on Tripoli; Turkey intervenes militarily' },
 { date: '2020', event: 'UN arms embargo confirmed to be violated by multiple countries including the U.S., Russia, UAE, and Turkey' },
 { date: '2023', event: 'Libya remains divided between two governments; instability continues with no resolution in sight' },
 ],
 legalOutcomes: [
 { defendant: 'NATO', charge: 'Exceeding UN Security Council mandate, converting no-fly zone to regime change', outcome: 'No accountability; Russia and China blocked subsequent humanitarian interventions citing Libya precedent' },
 { defendant: 'United States', charge: 'Violation of War Powers Resolution, continued bombing beyond 60-day limit without Congressional authorization', outcome: 'Obama administration argued bombing wasn\'t"hostilities"; Congress did not challenge' },
 { defendant: 'NATO Forces', charge: 'Civilian casualties from bombing campaign', outcome: 'NATO refused to investigate or acknowledge civilian deaths for years' },
 { defendant: 'Rebel Forces', charge: 'Extrajudicial killing of Gaddafi and mass reprisals against Black Libyans', outcome: 'No prosecutions; perpetrators became government officials' },
 { defendant: 'Nicolas Sarkozy', charge: 'Receiving campaign financing from Gaddafi regime; launching war partly to conceal it', outcome: 'Under investigation in France; questioned by police in 2018' },
 { defendant: 'Arms Trading Nations', charge: 'Violating UN arms embargo on Libya', outcome: 'Multiple countries confirmed violating embargo; no consequences' },
 { defendant: 'Human Traffickers in Libya', charge: 'Enslavement and trafficking of African migrants', outcome: 'Some prosecutions but slave markets continued operating for years' },
 { defendant: 'U.S. Government', charge: 'Arming rebel groups with known extremist elements', outcome: 'Weapons later found in hands of ISIS and other jihadist groups across the Sahel' },
 ],
 charges: [
 { statute: 'UN Security Council Res. 1973: Mandate Exceeded', description: 'Resolution authorized protection of civilians only; NATO transformed it into regime change operation', count: '7,700 strike sorties flown; government infrastructure systematically destroyed' },
 { statute: 'War Powers Resolution (50 U.S.C. § 1541)', description: 'President continued military operations beyond 60 days without Congressional authorization', count: '7 months of bombing without Congressional approval or declaration of war' },
 { statute: 'Geneva Convention (IV): Protection of Civilians', description: 'NATO bombing caused significant civilian casualties in populated areas', count: 'Hundreds of civilian casualties documented; NATO initially denied all civilian deaths' },
 { statute: 'Rome Statute, Art. 8(2)(a)(i)', description: 'Willful killing, extrajudicial execution of a head of state', count: 'Gaddafi captured alive but tortured and killed; NATO forces enabled capture' },
 { statute: 'UN Charter, Art. 2(7)', description: 'Intervention in matters within domestic jurisdiction of a state', count: 'Full-scale regime change in violation of non-intervention principle' },
 { statute: 'International Humanitarian Law, Proportionality', description: 'Bombing campaign disproportionate to stated objective of civilian protection', count: '26,500+ sorties flown, thousands of bombs dropped on a country of 6 million' },
 { statute: 'Arms Export Control Act', description: 'Transfer of weapons to unvetted rebel groups with known extremist ties', count: 'Weapons subsequently found across the Sahel and in hands of jihadist organizations' },
 { statute: 'Protocol I, Art. 51: Indiscriminate Attacks', description: 'Bombing of dual-use infrastructure affecting civilian populations', count: 'Destruction of water, electrical, and communications infrastructure across Libya' },
 ],
 coverup: [
 'The Obama administration argued that sustained bombing of Libya did not constitute "hostilities" under the War Powers Resolution, contradicting the opinion of the Pentagon\'s own lawyers.',
 'NATO initially denied causing any civilian casualties despite extensive evidence from journalists and human rights organizations on the ground.',
 'The "Responsibility to Protect"doctrine was used to justify intervention, but the actual goal was regime change, a fact later admitted by participants.',
 'Intelligence reports warning about the power vacuum and extremist elements among rebel forces were downplayed or ignored by policymakers.',
 'The connection between Libyan weapons flooding into Syria, Mali, and across the Sahel was minimized in official accounts of the intervention\'s consequences.',
 'Hillary Clinton\'s emails, released later, showed extensive private lobbying by Sidney Blumenthal about business opportunities in post-Gaddafi Libya.',
 'The Benghazi attack was initially attributed to a spontaneous protest over a YouTube video rather than a planned terrorist assault.',
 'The emergence of open-air slave markets in Libya received minimal sustained coverage, and no Western leader accepted responsibility for the conditions that enabled it.',
 'France\'s role in pushing for intervention was partly motivated by Sarkozy\'s desire to cover up alleged Libyan campaign financing, a scandal still being investigated.',
 ],
 sources: [
 { title: 'The Libya Model: Obama and the Consequences of Regime Change, Alan Kuperman', url: 'https://www.belfercenter.org/publication/obamas-libya-debacle', date: '2015' },
 { title: 'UK Parliament Foreign Affairs Committee, Libya Examination', url: 'https://publications.parliament.uk/pa/cm201617/cmselect/cmfaff/119/119.pdf', date: '2016' },
 { title: 'CNN Exclusive: Migrants Being Sold as Slaves in Libya', url: 'https://www.cnn.com/2017/11/14/africa/libya-migrant-auctions/index.html', date: '2017' },
 { title: 'Obama Says Libya Was His \'Worst Mistake\' - BBC', url: 'https://www.bbc.com/news/world-us-canada-36013703', date: '2016' },
 { title: 'Human Rights Watch, NATO Bombing Civilian Casualties', url: 'https://www.hrw.org/report/2012/05/14/unacknowledged-deaths/civilian-casualties-natos-air-campaign-libya', date: '2012' },
 { title: 'The New Yorker, The Libya Gamble', url: 'https://www.newyorker.com/magazine/2016/02/01/the-libya-gamble-annals-of-diplomacy-jon-lee-anderson', date: '2016' },
 { title: 'Amnesty International, Libya: Rule of the Gun', url: 'https://www.amnesty.org/en/documents/mde19/7602/2024/en/', date: '2024' },
 { title: 'Washington Post, Scramble for Libya\'s Weapons', url: 'https://www.washingtonpost.com/world/national-security/libyas-weapons-flooding-out/', date: '2012' },
 ],
};

export default function LibyaInterventionPage() {
 return (
 <div className="min-h-screen pt-20 lg:pt-24 pb-16">
 <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
 <Link href="/investigations"className="inline-flex items-center gap-2 text-zinc-400 hover:text-blood-500 transition-colors mb-6 pt-4"><ArrowLeft className="w-4 h-4"/>Back to Investigations</Link>
 <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="border-2 border-blood-800/60 bg-[rgba(0,6,20,0.90)] p-6 lg:p-8 mb-8">
 <div className="flex items-center gap-3 mb-4"><span className="px-3 py-1 text-xs font-bold uppercase border border-blood-800 bg-blood-950 text-blood-400">{investigation.severity}</span><span className="px-3 py-1 text-xs font-bold uppercase border border-zinc-700 bg-zinc-900 text-zinc-400">{investigation.status}</span></div>
 <h1 className="text-3xl lg:text-4xl font-black glass-text uppercase tracking-wider mb-2"><GlitchText text={investigation.title} /></h1>
 <p className="text-lg text-blood-500 font-bold mb-4">{investigation.subtitle}</p>
 <p className="text-zinc-400 leading-relaxed">{investigation.summary}</p>
 </motion.div>
 <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.15 }} className="glass-card p-6 mb-8 border-l-4 border-blood-600">
 <h2 className="text-xl font-bold glass-text uppercase tracking-wider mb-4 flex items-center gap-2"><ShieldAlert className="w-5 h-5 text-blood-500"/>The Cover-Up</h2>
 <div className="space-y-3">{investigation.coverup.map((item, idx) => (<div key={idx} className="p-3 bg-blood-950 border border-blood-800"><p className="text-sm text-zinc-300">{item}</p></div>))}</div>
 </motion.div>
 <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
 <div className="lg:col-span-2 space-y-8">
 <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }} className="glass-card p-6">
 <h2 className="text-xl font-bold glass-text uppercase tracking-wider mb-4 flex items-center gap-2"><Users className="w-5 h-5 text-blood-500"/>Key Figures</h2>
 <div className="space-y-3">{investigation.keyFigures.map((figure, idx) => (<div key={idx} className="flex items-start justify-between p-3 bg-[#000a1c] border border-[rgba(80,180,255,0.15)]"><div className="flex-1">{figure.href ? (<Link href={figure.href} className="font-bold text-blood-400 hover:text-blood-300 transition-colors">{figure.name}</Link>) : (<span className="font-bold glass-text">{figure.name}</span>)}<p className="text-sm text-zinc-400 mt-1">{figure.role}</p></div><span className="text-xs px-2 py-1 bg-[#000c20] text-zinc-400 border border-[rgba(60,160,255,0.18)] whitespace-nowrap ml-2">{figure.status}</span></div>))}</div>
 </motion.div>
 <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }} className="glass-card p-6">
 <h2 className="text-xl font-bold glass-text uppercase tracking-wider mb-4 flex items-center gap-2"><Scale className="w-5 h-5 text-blood-500"/>Applicable Charges &amp; Statutes</h2>
 <div className="space-y-3">{investigation.charges.map((charge, idx) => (<div key={idx} className="p-4 bg-[#000a1c] border border-[rgba(80,180,255,0.15)]"><p className="font-bold text-blood-400 text-sm font-mono">{charge.statute}</p><p className="text-sm text-zinc-300 mt-1">{charge.description}</p><p className="text-xs text-blood-400 mt-1">{charge.count}</p></div>))}</div>
 </motion.div>
 </div>
 <div className="space-y-6">
 <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} className="glass-card p-6">
 <h3 className="text-lg font-bold glass-text uppercase tracking-wider mb-4 flex items-center gap-2"><Calendar className="w-4 h-4 text-blood-500"/>Timeline</h3>
 <div className="space-y-4">{investigation.timeline.map((item, idx) => (<div key={idx} className="relative pl-4 border-l-2 border-[rgba(80,180,255,0.15)]"><div className="absolute -left-[5px] top-0 w-2 h-2 bg-blood-500"/><p className="text-xs text-blood-500 font-mono">{item.date}</p><p className="text-sm text-zinc-300">{item.event}</p></div>))}</div>
 </motion.div>
 <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.1 }} className="glass-card p-6">
 <h3 className="text-lg font-bold glass-text uppercase tracking-wider mb-4 flex items-center gap-2"><Scale className="w-5 h-5 text-blood-500"/>Legal Outcomes</h3>
 <div className="space-y-3">{investigation.legalOutcomes.map((item, idx) => (<div key={idx} className="p-3 bg-[#000a1c] border border-[rgba(80,180,255,0.15)]"><p className="font-bold glass-text text-sm">{item.defendant}</p><p className="text-xs text-zinc-400 mt-1">{item.charge}</p><p className="text-xs text-blood-400 mt-1">{item.outcome}</p></div>))}</div>
 </motion.div>
 <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.2 }} className="glass-card p-6">
 <h3 className="text-lg font-bold glass-text uppercase tracking-wider mb-4">Sources</h3>
 <div className="space-y-2">{investigation.sources.map((source, idx) => (<a key={idx} href={source.url} target="_blank"rel="noopener noreferrer"className="flex items-start gap-2 p-2 text-sm text-zinc-400 hover:text-blood-400 hover:bg-[#000a1c] transition-colors"><ExternalLink className="w-4 h-4 mt-0.5 flex-shrink-0"/><div><span>{source.title}</span><span className="text-zinc-600 ml-2">({source.date})</span></div></a>))}</div>
 </motion.div>
 </div>
 </div>
 </div>
 </div>
 );
}
