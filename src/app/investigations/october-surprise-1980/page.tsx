'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowLeft, AlertTriangle, Users, Calendar, FileText, ExternalLink, Scale, ShieldAlert, Skull } from 'lucide-react';
import GlitchText from '@/components/effects/GlitchText';

const investigation = {
 title: 'The October Surprise (1980)',
 subtitle: 'How the Reagan Campaign Allegedly Sabotaged Hostage Negotiations to Win the Presidency',
 severity: 'critical',
 status: 'CONFIRMED (2023)',
 summary: 'The October Surprise conspiracy centers on allegations that members of Ronald Reagan\'s 1980 presidential campaign secretly negotiated with Iran to delay the release of 52 American hostages held at the U.S. Embassy in Tehran until after the November 1980 election, ensuring that President Jimmy Carter could not benefit from an "October surprise"resolution. The hostages were released on January 20, 1981, literally minutes after Reagan was sworn in as president. In 2023, former Texas Governor John Connally\'s aide Ben Barnes publicly confessed that he and Connally traveled to Middle Eastern capitals in the summer of 1980 to urge leaders to convey a message to Iran: don\'t release the hostages before the election. Reagan\'s campaign manager William Casey, later CIA Director, and George H.W. Bush have been repeatedly implicated. If true, this represents one of the most treasonous acts in American political history, sacrificing American hostages\' freedom for political power.',
 keyFigures: [
 { name: 'Ronald Reagan', role: '1980 Republican presidential candidate who benefited from the delayed hostage release', href: '/entities/individuals/ronald-reagan', status: 'Deceased (2004)' },
 { name: 'William Casey', role: 'Reagan campaign manager, later CIA Director; central figure in alleged Iran negotiations', href: '/entities/individuals/william-casey', status: 'Deceased (1987)' },
 { name: 'George H.W. Bush', role: 'Reagan\'s running mate; alleged participant in Paris meetings with Iranian officials', href: '/entities/individuals/george-hw-bush', status: 'Deceased (2018)' },
 { name: 'Ben Barnes', role: 'Former Texas Lieutenant Governor who confessed in 2023 to carrying messages to Iran on Reagan\'s behalf', href: '/entities/individuals/ben-barnes', status: 'Active' },
 { name: 'John Connally', role: 'Former Texas Governor who traveled Middle East with Barnes to relay message to Iran to delay hostage release', href: '/entities/individuals/john-connally', status: 'Deceased (1993)' },
 { name: 'Jimmy Carter', role: 'Incumbent president whose re-election was undermined by failure to resolve hostage crisis', href: '/entities/individuals/jimmy-carter', status: 'Deceased (2024)' },
 { name: 'Abolhassan Banisadr', role: 'Iranian President (1980-81) who stated Reagan campaign negotiated with Iran to delay release', href: '/entities/individuals/abolhassan-banisadr', status: 'Deceased (2024)' },
 { name: 'Ari Ben-Menashe', role: 'Former Israeli intelligence officer who claimed Israel helped broker the Reagan-Iran deal', href: '/entities/individuals/ari-ben-menashe', status: 'Active' },
 { name: 'Gary Sick', role: 'Carter NSC official who published "October Surprise"documenting the conspiracy', href: '/entities/individuals/gary-sick', status: 'Active' },
 { name: 'Robert McFarlane', role: 'Reagan NSC advisor who later facilitated Iran-Contra arms-for-hostages deals', href: '/entities/individuals/robert-mcfarlane', status: 'Deceased (2022)' },
 { name: 'Cyrus Hashemi', role: 'Iranian arms dealer who allegedly served as intermediary; died mysteriously in London in 1986', href: '/entities/individuals/cyrus-hashemi', status: 'Deceased (1986)' },
 { name: 'Lee Hamilton', role: 'Chair of House Task Force that investigated and controversially dismissed October Surprise allegations', href: '/entities/individuals/lee-hamilton', status: 'Active' },
 ],
 timeline: [
 { date: '1979-NOV-04', event: 'Iranian students seize U.S. Embassy in Tehran, taking 52 American diplomats and citizens hostage' },
 { date: '1980-APR-24', event: 'Operation Eagle Claw, Carter\'s military rescue attempt fails catastrophically in the Iranian desert, killing 8 servicemen' },
 { date: '1980-JUL', event: 'Ben Barnes and John Connally travel to Jordan, Syria, Lebanon, Egypt and other countries with message for Iran: delay hostage release' },
 { date: '1980-JUL-27', event: 'Shah of Iran dies in exile in Egypt, complicating hostage negotiations' },
 { date: '1980-AUG', event: 'Alleged meetings in Madrid between William Casey and Iranian representatives to negotiate delayed release' },
 { date: '1980-SEP-22', event: 'Iraq invades Iran, starting the Iran-Iraq War; Iran now desperate for U.S. weapons and spare parts' },
 { date: '1980-OCT', event: 'Alleged meetings in Paris between Bush, Casey, and Iranian officials finalizing the hostage delay agreement' },
 { date: '1980-OCT', event: 'Carter administration\'s negotiations with Iran stall repeatedly at crucial moments' },
 { date: '1980-NOV-04', event: 'Reagan defeats Carter in a landslide election; hostage crisis is a major factor in Carter\'s defeat' },
 { date: '1981-JAN-20', event: 'Hostages released minutes after Reagan is inaugurated, exactly as alleged deal specified' },
 { date: '1981', event: 'Reagan administration begins covert arms sales to Iran, fulfilling alleged quid pro quo of the hostage delay deal' },
 { date: '1986', event: 'Iran-Contra scandal exposed, revealing Reagan administration sold weapons to Iran in exchange for hostage releases in Lebanon' },
 { date: '1986-JUL', event: 'Cyrus Hashemi, alleged intermediary in October Surprise negotiations, dies of"acute myeloid leukemia"in London under suspicious circumstances' },
 { date: '1991', event: 'Gary Sick publishes "October Surprise: America\'s Hostages in Iran and the Election of Ronald Reagan,"laying out evidence' },
 { date: '1993', event: 'House Task Force under Lee Hamilton investigates and controversially concludes allegations are"not credible"- later disputed' },
 { date: '2023-MAR', event: 'Ben Barnes publicly confesses to New York Times that he accompanied Connally to Middle East to relay message to delay hostage release' },
 { date: '2023', event: 'Newly declassified documents provide additional evidence supporting the October Surprise theory' },
 ],
 legalOutcomes: [
 { defendant: 'William Casey', charge: 'Alleged conspiracy to commit treason by negotiating with a foreign adversary', outcome: 'Died of brain tumor in May 1987 before Iran-Contra testimony; never charged for October Surprise' },
 { defendant: 'Reagan Campaign Officials', charge: 'Violation of Logan Act, unauthorized negotiation with foreign government', outcome: 'House Task Force investigation in 1993 controversially dismissed allegations' },
 { defendant: 'George H.W. Bush', charge: 'Alleged participation in Paris meetings with Iranian officials', outcome: 'Denied attending any meetings; Secret Service records claimed to support alibi but were disputed' },
 { defendant: 'Iran-Contra Defendants', charge: 'Related arms sales to Iran that may have been October Surprise quid pro quo', outcome: 'Multiple convictions; most pardoned by George H.W. Bush on Christmas Eve 1992' },
 { defendant: 'Oliver North', charge: 'Conspiracy, obstruction, document destruction in Iran-Contra', outcome: 'Convicted on 3 felony counts; convictions vacated on appeal due to immunized testimony' },
 { defendant: 'Robert McFarlane', charge: 'Withholding information from Congress on Iran-Contra', outcome: 'Pleaded guilty to 4 misdemeanor counts; pardoned by Bush Sr. in 1992' },
 { defendant: 'Caspar Weinberger', charge: 'Perjury and obstruction regarding Iran-Contra', outcome: 'Indicted but pardoned by George H.W. Bush before trial in 1992' },
 { defendant: 'Lee Hamilton Investigation', charge: 'Failure to adequately investigate October Surprise allegations', outcome: 'Criticized for insufficient investigation; key witnesses not called; time constraints artificially imposed' },
 ],
 charges: [
 { statute: 'Logan Act (18 U.S.C. § 953)', description: 'Prohibits unauthorized citizens from negotiating with foreign governments regarding disputes with the United States', count: 'Multiple Reagan campaign officials potentially violated by negotiating with Iran' },
 { statute: 'Treason (18 U.S.C. § 2381)', description: 'Levying war against the United States or adhering to its enemies, giving them aid and comfort', count: 'Sabotaging hostage negotiations could constitute adhering to an adversarial foreign power' },
 { statute: 'Conspiracy Against the United States (18 U.S.C. § 371)', description: 'Agreement between two or more persons to defraud the United States or commit offenses against it', count: 'Coordinated campaign to undermine sitting president\'s foreign policy' },
 { statute: 'Arms Export Control Act (22 U.S.C. § 2778)', description: 'Prohibits unauthorized export of defense articles, weapons shipped to Iran violated this act', count: 'Thousands of TOW missiles and HAWK parts shipped to Iran as part of alleged quid pro quo' },
 { statute: 'Obstruction of Congress (18 U.S.C. § 1505)', description: 'Obstruction of proceedings before Congressional committees investigating the October Surprise', count: 'Multiple instances of document destruction and witness intimidation alleged' },
 { statute: 'Hostage Act (18 U.S.C. § 1203)', description: 'Taking or detaining hostages; extending captivity of hostages for political purposes', count: '52 Americans held an additional 2+ months allegedly due to campaign interference' },
 { statute: 'Conspiracy to Commit Election Fraud', description: 'Coordinated effort to manipulate presidential election outcome through secret foreign negotiations', count: 'Affected outcome of 1980 presidential election between Carter and Reagan' },
 { statute: 'Misprision of Felony (18 U.S.C. § 4)', description: 'Having knowledge of a felony and concealing it from authorities', count: 'Multiple participants who knew of deal but kept silent for decades' },
 ],
 coverup: [
 'The 1993 House Task Force investigation under Lee Hamilton was given insufficient time, resources, and subpoena power to adequately investigate, Hamilton later admitted the investigation was constrained',
 'William Casey died of a brain tumor in May 1987, conveniently before he could testify about either October Surprise or Iran-Contra',
 'George H.W. Bush pardoned six Iran-Contra defendants on Christmas Eve 1992, just weeks before leaving office, preventing trials that could have exposed October Surprise connections',
 'The Reagan administration\'s arms sales to Iran, exposed in Iran-Contra, may have been fulfillment of the original October Surprise quid pro quo, but this connection was never officially investigated',
 'Cyrus Hashemi, a key intermediary, died under suspicious circumstances in London in 1986; his sudden "leukemia" has been questioned by investigators',
 'Secret Service records that could have confirmed or denied George H.W. Bush\'s presence at alleged Paris meetings were incomplete and contradictory',
 'Ben Barnes kept silent for over 40 years about his role in carrying messages for Connally, only coming forward in 2023 after weighing his conscience',
 'Iranian President Abolhassan Banisadr repeatedly stated that the Reagan campaign negotiated with Iran, but U.S. media largely dismissed his testimony as unreliable',
 'Key documents related to the October Surprise remain classified or were destroyed during the Iran-Contra document shredding operation led by Oliver North',
 ],
 sources: [
 { title: 'New York Times, A Four-Decade Secret: One Man\'s Story of Sabotaging Carter\'s Re-election', url: 'https://www.nytimes.com/2023/03/18/us/politics/carter-reagan-hostages-october-surprise.html', date: '2023-03-18' },
 { title: 'Sick, Gary, October Surprise: America\'s Hostages in Iran and the Election of Ronald Reagan', url: 'https://www.penguinrandomhouse.com/books/331796/october-surprise-by-gary-sick/', date: '1991' },
 { title: 'The Intercept, Ben Barnes Revelations Confirm October Surprise Conspiracy', url: 'https://theintercept.com/2023/03/18/october-surprise-ben-barnes-iran-hostages/', date: '2023-03-18' },
 { title: 'PBS Frontline, The October Surprise', url: 'https://www.pbs.org/wgbh/frontline/', date: '1991' },
 { title: 'National Security Archive, The October Surprise Documents', url: 'https://nsarchive.gwu.edu/briefing-book/iran/2023-01-19/october-surprise-x-files', date: '2023' },
 { title: 'Congressional Research Service, Iran Hostage Crisis: October Surprise Allegations', url: 'https://www.congress.gov/', date: '1993' },
 { title: 'New Republic, The October Surprise Case Is Back', url: 'https://newrepublic.com/article/171180/october-surprise-reagan-iran-hostage', date: '2023' },
 { title: 'Washington Post, Former Texas politician says he went to Iran to help Reagan win in 1980', url: 'https://www.washingtonpost.com/politics/2023/03/18/reagan-iran-hostages-october-surprise/', date: '2023-03-18' },
 ],
};

export default function OctoberSurprise1980Page() {
 return (
 <div className="min-h-screen pt-20 lg:pt-24 pb-16">
 <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
 <Link href="/investigations"className="inline-flex items-center gap-2 text-zinc-400 hover:text-white transition-colors mb-6 pt-4"><ArrowLeft className="w-4 h-4"/>Back to Investigations</Link>
 <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="border-2 border-zinc-800/60 bg-[rgba(0,6,20,0.90)] p-6 lg:p-8 mb-8">
 <div className="flex items-center gap-3 mb-4"><span className="px-3 py-1 text-xs font-bold uppercase border border-zinc-800 bg-zinc-900 text-zinc-400">{investigation.severity}</span><span className="px-3 py-1 text-xs font-bold uppercase border border-zinc-700 bg-zinc-900 text-zinc-400">{investigation.status}</span></div>
 <h1 className="text-3xl lg:text-4xl font-black glass-text uppercase tracking-wider mb-2"><GlitchText text={investigation.title} /></h1>
 <p className="text-lg text-zinc-300 font-bold mb-4">{investigation.subtitle}</p>
 <p className="text-zinc-400 leading-relaxed">{investigation.summary}</p>
 </motion.div>
 <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.15 }} className="glass-card p-6 mb-8 border-l-4 border-zinc-700">
 <h2 className="text-xl font-bold glass-text uppercase tracking-wider mb-4 flex items-center gap-2"><ShieldAlert className="w-5 h-5 text-zinc-300"/>The Cover-Up</h2>
 <div className="space-y-3">{investigation.coverup.map((item, idx) => (<div key={idx} className="p-3 bg-zinc-900 border border-zinc-800"><p className="text-sm text-zinc-300">{item}</p></div>))}</div>
 </motion.div>
 <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
 <div className="lg:col-span-2 space-y-8">
 <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }} className="glass-card p-6">
 <h2 className="text-xl font-bold glass-text uppercase tracking-wider mb-4 flex items-center gap-2"><Users className="w-5 h-5 text-zinc-300"/>Key Figures</h2>
 <div className="space-y-3">{investigation.keyFigures.map((figure, idx) => (<div key={idx} className="flex items-start justify-between p-3 bg-[#0a0a0a] border border-[rgba(255,255,255,0.15)]"><div className="flex-1">{figure.href ? (<Link href={figure.href} className="font-bold text-zinc-400 hover:text-white transition-colors">{figure.name}</Link>) : (<span className="font-bold glass-text">{figure.name}</span>)}<p className="text-sm text-zinc-400 mt-1">{figure.role}</p></div><span className="text-xs px-2 py-1 bg-[#0d0d0d] text-zinc-400 border border-[rgba(255,255,255,0.18)] whitespace-nowrap ml-2">{figure.status}</span></div>))}</div>
 </motion.div>
 <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }} className="glass-card p-6">
 <h2 className="text-xl font-bold glass-text uppercase tracking-wider mb-4 flex items-center gap-2"><Scale className="w-5 h-5 text-zinc-300"/>Applicable Charges &amp; Statutes</h2>
 <div className="space-y-3">{investigation.charges.map((charge, idx) => (<div key={idx} className="p-4 bg-[#0a0a0a] border border-[rgba(255,255,255,0.15)]"><p className="font-bold text-zinc-400 text-sm font-mono">{charge.statute}</p><p className="text-sm text-zinc-300 mt-1">{charge.description}</p><p className="text-xs text-zinc-400 mt-1">{charge.count}</p></div>))}</div>
 </motion.div>
 </div>
 <div className="space-y-6">
 <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} className="glass-card p-6">
 <h3 className="text-lg font-bold glass-text uppercase tracking-wider mb-4 flex items-center gap-2"><Calendar className="w-4 h-4 text-zinc-300"/>Timeline</h3>
 <div className="space-y-4">{investigation.timeline.map((item, idx) => (<div key={idx} className="relative pl-4 border-l-2 border-[rgba(255,255,255,0.15)]"><div className="absolute -left-[5px] top-0 w-2 h-2 bg-zinc-600"/><p className="text-xs text-zinc-300 font-mono">{item.date}</p><p className="text-sm text-zinc-300">{item.event}</p></div>))}</div>
 </motion.div>
 <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.1 }} className="glass-card p-6">
 <h3 className="text-lg font-bold glass-text uppercase tracking-wider mb-4 flex items-center gap-2"><Scale className="w-5 h-5 text-zinc-300"/>Legal Outcomes</h3>
 <div className="space-y-3">{investigation.legalOutcomes.map((item, idx) => (<div key={idx} className="p-3 bg-[#0a0a0a] border border-[rgba(255,255,255,0.15)]"><p className="font-bold glass-text text-sm">{item.defendant}</p><p className="text-xs text-zinc-400 mt-1">{item.charge}</p><p className="text-xs text-zinc-400 mt-1">{item.outcome}</p></div>))}</div>
 </motion.div>
 <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.2 }} className="glass-card p-6">
 <h3 className="text-lg font-bold glass-text uppercase tracking-wider mb-4">Sources</h3>
 <div className="space-y-2">{investigation.sources.map((source, idx) => (<a key={idx} href={source.url} target="_blank"rel="noopener noreferrer"className="flex items-start gap-2 p-2 text-sm text-zinc-400 hover:text-white hover:bg-[#0a0a0a] transition-colors"><ExternalLink className="w-4 h-4 mt-0.5 flex-shrink-0"/><div><span>{source.title}</span><span className="text-zinc-600 ml-2">({source.date})</span></div></a>))}</div>
 </motion.div>
 </div>
 </div>
 </div>
 </div>
 );
}
