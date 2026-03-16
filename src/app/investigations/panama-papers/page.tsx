'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowLeft, AlertTriangle, Users, Calendar, FileText, ExternalLink, Scale, ShieldAlert, Skull } from 'lucide-react';
import GlitchText from '@/components/effects/GlitchText';

const investigation = {
 title: 'The Panama Papers',
 subtitle: '11.5 Million Leaked Documents Expose the Global Elite\'s Hidden Wealth Network',
 severity: 'critical',
 status: 'EXPOSED, INVESTIGATIONS ONGOING',
 summary: 'In April 2016, the International Consortium of Investigative Journalists (ICIJ) published the Panama Papers; 11.5 million documents leaked from Mossack Fonseca, a Panamanian law firm specializing in creating offshore shell companies. The files exposed how world leaders, billionaires, celebrities, and criminals hid trillions of dollars in offshore accounts to evade taxes, launder money, and circumvent sanctions. The leak implicated 140 politicians from more than 50 countries, including 12 current or former world leaders. It led to the resignation of Iceland\'s prime minister, criminal investigations worldwide, and the recovery of over $1.36 billion in back taxes, but also highlighted how fundamentally broken the global financial system remains.',
 keyFigures: [
 { name: 'Jürgen Mossack', role: 'Co-founder of Mossack Fonseca; created the law firm that became the world\'s fourth-largest offshore services provider', href: '/entities/individuals/jurgen-mossack', status: 'Charged (Panama)' },
 { name: 'Ramón Fonseca', role: 'Co-founder of Mossack Fonseca and adviser to Panama\'s president; oversaw the creation of thousands of shell companies', href: '/entities/individuals/ramon-fonseca', status: 'Deceased (2024)' },
 { name: 'John Doe (Anonymous Source)', role: 'The unidentified whistleblower who leaked 11.5 million documents to journalist Bastian Obermayer', href: '', status: 'Identity Unknown' },
 { name: 'Bastian Obermayer', role: 'Süddeutsche Zeitung journalist who received the leak and organized the global investigation with ICIJ', href: '/entities/individuals/bastian-obermayer', status: 'Journalist' },
 { name: 'Frederik Obermaier', role: 'Süddeutsche Zeitung journalist who co-led the reporting with Obermayer', href: '/entities/individuals/frederik-obermaier', status: 'Journalist' },
 { name: 'Sigmundur Davíð Gunnlaugsson', role: 'Prime Minister of Iceland who resigned after papers revealed he held undisclosed offshore investments', href: '/entities/individuals/sigmundur-gunnlaugsson', status: 'Resigned' },
 { name: 'Vladimir Putin (Associates)', role: 'Though not directly named, close associates including cellist Sergei Roldugin moved $2 billion through offshore accounts', href: '/entities/individuals/vladimir-putin', status: 'Implicated via Associates' },
 { name: 'Nawaz Sharif', role: 'Prime Minister of Pakistan; disqualified from office after papers revealed his family\'s offshore companies', href: '/entities/individuals/nawaz-sharif', status: 'Removed from Office' },
 { name: 'Xi Jinping (Family)', role: 'Relatives of China\'s president, including brother-in-law, linked to offshore companies in the leaked files', href: '/entities/individuals/xi-jinping', status: 'Implicated via Family' },
 { name: 'Petro Poroshenko', role: 'President of Ukraine who created an offshore company while Russia was invading eastern Ukraine', href: '/entities/individuals/petro-poroshenko', status: 'Exposed' },
 { name: 'Daphne Caruana Galizia', role: 'Maltese journalist who investigated Panama Papers connections to Malta\'s government; murdered by car bomb in 2017', href: '/entities/individuals/daphne-caruana-galizia', status: 'Assassinated (2017)' },
 ],
 timeline: [
 { date: '1977', event: 'Jürgen Mossack founds his law firm in Panama City; Ramón Fonseca joins later to form Mossack Fonseca' },
 { date: '1980s-2010s', event: 'Mossack Fonseca grows to become the world\'s fourth-largest offshore services provider, creating over 214,000 shell entities' },
 { date: '2014', event: 'Anonymous source ("John Doe") contacts Bastian Obermayer of the German newspaper Süddeutsche Zeitung' },
 { date: '2014-2015', event: '11.5 million files (totaling 2.6 terabytes) are transferred to the journalists over encrypted channels' },
 { date: '2015', event: 'ICIJ organizes a global team of over 370 journalists from 100+ media organizations in 80 countries to analyze the documents' },
 { date: '2016-04-03', event: 'Panama Papers published simultaneously worldwide; the largest coordinated leak in journalism history' },
 { date: '2016-04-04', event: 'Iceland\'s PM Sigmundur Davíð Gunnlaugsson faces massive protests after papers reveal his undisclosed offshore holdings' },
 { date: '2016-04-05', event: 'Gunnlaugsson resigns as Prime Minister of Iceland, the first head of state to fall because of the leak' },
 { date: '2016-04-06', event: 'China censors all mentions of the Panama Papers on domestic internet; the leak implicated relatives of senior party leaders' },
 { date: '2016-05', event: 'UK PM David Cameron admits he profited from his father\'s offshore fund revealed in the papers, sparking public outrage' },
 { date: '2017-02', event: 'Mossack Fonseca founders Jürgen Mossack and Ramón Fonseca arrested in Panama on money laundering charges' },
 { date: '2017-03', event: 'Pakistan\'s Supreme Court launches investigation into PM Nawaz Sharif\'s family wealth revealed by the papers' },
 { date: '2017-07', event: 'Nawaz Sharif disqualified from office by Pakistan\'s Supreme Court based on Panama Papers revelations' },
 { date: '2017-10-16', event: 'Daphne Caruana Galizia, who investigated Malta\'s Panama Papers connections, assassinated by car bomb' },
 { date: '2018-03', event: 'Mossack Fonseca announces it is closing down, citing"reputational deterioration"and loss of business' },
 { date: '2019', event: 'EU creates new anti-money laundering directives partly in response to Panama Papers revelations' },
 { date: '2021', event: 'Pandora Papers released, a successor leak revealing even more extensive offshore dealings' },
 { date: '2023', event: 'ICIJ reports over $1.36 billion recovered in back taxes globally as a result of Panama Papers investigations' },
 ],
 legalOutcomes: [
 { defendant: 'Jürgen Mossack', charge: 'Money laundering', outcome: 'Arrested in Panama in 2017; trial ongoing' },
 { defendant: 'Ramón Fonseca', charge: 'Money laundering', outcome: 'Arrested in 2017; died in 2024 before trial concluded' },
 { defendant: 'Sigmundur Davíð Gunnlaugsson', charge: 'Undisclosed conflicts of interest', outcome: 'Resigned as PM of Iceland; no criminal charges filed' },
 { defendant: 'Nawaz Sharif', charge: 'Corruption, asset concealment', outcome: 'Disqualified from office; convicted of corruption in 2018 (later acquitted on appeal)' },
 { defendant: 'Juan Carlos Varela (Panama President)', charge: 'Corruption allegations', outcome: 'Investigated; no charges filed during presidency' },
 { defendant: 'David Cameron (UK PM)', charge: 'Public outrage over offshore trust profits', outcome: 'No legal consequences; political damage; published tax returns' },
 { defendant: 'Global Tax Authorities', charge: 'Tax evasion investigations worldwide', outcome: 'Over $1.36 billion recovered in back taxes across multiple countries' },
 { defendant: 'Four individuals (Caruana Galizia murder)', charge: 'Murder of investigative journalist', outcome: 'Three men convicted; businessman Jorgen Fenech charged as mastermind' },
 ],
 charges: [
 { statute: 'Panamanian Criminal Code, Money Laundering', description: 'Mossack Fonseca allegedly helped clients launder proceeds of criminal activity through anonymous shell companies', count: 'Founders arrested in 2017' },
 { statute: '26 U.S.C. § 7201: Tax Evasion (U.S.)', description: 'U.S. taxpayers concealed assets in offshore accounts to evade federal income taxes', count: 'Multiple DOJ investigations and prosecutions' },
 { statute: 'EU Anti-Money Laundering Directives', description: 'European citizens and institutions used offshore structures to circumvent EU financial regulations', count: 'New regulations enacted in response' },
 { statute: 'UK Proceeds of Crime Act 2002', description: 'UK nationals used offshore structures revealed in the papers to conceal proceeds of corruption', count: 'HMRC investigations launched' },
 { statute: '31 U.S.C. § 5314: FBAR (Foreign Bank Account Reporting)', description: 'Failure to report foreign financial accounts above $10,000', count: 'Multiple U.S. penalties assessed' },
 { statute: 'Pakistan Anti-Corruption Laws', description: 'PM Sharif\'s family used offshore companies to acquire London real estate with undisclosed funds', count: 'PM removed from office; convicted' },
 { statute: '18 U.S.C. § 1956: Money Laundering', description: 'Using U.S. financial system to process transactions through anonymous offshore entities', count: 'DOJ criminal investigations' },
 { statute: 'Maltese Criminal Code, Corruption & Murder', description: 'Maltese officials linked to Panama Papers corruption; journalist investigating connections was assassinated', count: 'Murder convictions; corruption trials ongoing' },
 ],
 coverup: [
 'Mossack Fonseca created over 214,000 shell companies specifically designed to obscure the true ownership of assets, making it nearly impossible for regulators to trace money flows',
 'The firm offered"nominee directors"- professional stand-ins who would appear as the legal owners of companies, hiding the true beneficial owners behind layers of corporate secrecy',
 'When banks or regulators asked for due diligence information, Mossack Fonseca would provide fabricated documentation or simply refuse to cooperate, knowing enforcement was weak',
 'China\'s government completely censored all mentions of the Panama Papers from the domestic internet within hours of publication, demonstrating the reach of those implicated',
 'Daphne Caruana Galizia, who pursued Malta\'s government connections to the Panama Papers, was murdered by a car bomb, a stark warning about the dangers of investigating the powerful',
 'Many of the offshore structures were technically legal under the laws of the jurisdictions where they were created, exposing how the global financial system was designed to serve the wealthy',
 'Despite the massive scale of the leak, relatively few powerful individuals faced criminal prosecution, most countries lacked the legal framework or political will to hold elites accountable',
 'Panama itself refused to cooperate with international investigations for years, protecting its status as a secrecy jurisdiction and the financial services industry that depended on it',
 ],
 sources: [
 { title: 'ICIJ, Panama Papers: The Power Players', url: 'https://www.icij.org/investigations/panama-papers/', date: '2016-04-03' },
 { title: 'Panama Papers: A Global Investigation, Süddeutsche Zeitung', url: 'https://panamapapers.sueddeutsche.de/en/', date: '2016-04-03' },
 { title: 'Panama Papers Source Manifesto ("John Doe")', url: 'https://panamapapers.icij.org/20160506-john-doe-statement.html', date: '2016-05-06' },
 { title: 'Panama Papers: How the World\'s Rich and Powerful Hide Their Money, The Guardian', url: 'https://www.theguardian.com/news/2016/apr/03/what-you-need-to-know-about-the-panama-papers', date: '2016-04-03' },
 { title: 'Panama Papers Impact, ICIJ', url: 'https://www.icij.org/investigations/panama-papers/panama-papers-helps-recover-more-than-1-2-billion-around-the-world/', date: '2023' },
 { title: 'Daphne Caruana Galizia Murder, Reuters Investigation', url: 'https://web.archive.org/web/2024/https://www.reuters.com/investigates/special-report/malta-daphne/', date: '2018' },
 { title: 'Nawaz Sharif Panama Papers Disqualification, BBC', url: 'https://www.bbc.com/news/world-asia-40730038', date: '2017-07-28' },
 { title: 'Panama Papers: The Secrets of Dirty Money, Netflix Documentary', url: 'https://www.netflix.com/title/80206517', date: '2018' },
 ],
};

export default function PanamaPapersPage() {
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
