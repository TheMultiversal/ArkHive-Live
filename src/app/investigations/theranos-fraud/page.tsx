'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowLeft, AlertTriangle, Users, Calendar, FileText, ExternalLink, Scale, ShieldAlert, Skull } from 'lucide-react';
import GlitchText from '@/components/effects/GlitchText';

const investigation = {
 title: 'Theranos Fraud',
 subtitle: 'The $9 Billion Lie: How Elizabeth Holmes Built a Blood-Testing Empire on Fake Technology',
 severity: 'critical',
 status: 'CONVICTED - 11+ YEARS',
 summary: 'Theranos, founded by Stanford dropout Elizabeth Holmes in 2003, claimed to have revolutionized blood testing with a device called the Edison that could run hundreds of tests from a single drop of blood. The technology never worked. Holmes and president Ramesh "Sunny" Balwani raised over $700 million from investors and built a $9 billion valuation through systematic deception: faking demonstrations, using competitors\' machines while claiming proprietary technology, endangering patients with inaccurate test results, and intimidating employees into silence. The fraud unraveled after a Wall Street Journal investigation by reporter John Carreyrou exposed the lies in 2015.',
 keyFigures: [
 { name: 'Elizabeth Holmes', role: 'Founder and CEO of Theranos; the face of the fraud who deceived investors, partners, and patients for over a decade', href: '/entities/individuals/elizabeth-holmes', status: 'Convicted - 11.25 Years' },
 { name: 'Ramesh "Sunny" Balwani', role: 'President and COO of Theranos; Holmes\' secret romantic partner who managed the lab and intimidated employees', href: '/entities/individuals/sunny-balwani', status: 'Convicted - 12.75 Years' },
 { name: 'John Carreyrou', role: 'Wall Street Journal investigative reporter who broke the story exposing Theranos\' fraudulent technology', href: '/entities/individuals/john-carreyrou', status: 'Journalist' },
 { name: 'Tyler Shultz', role: 'Theranos lab employee and grandson of board member George Shultz; became a key whistleblower despite family pressure', href: '/entities/individuals/tyler-shultz', status: 'Whistleblower' },
 { name: 'Erika Cheung', role: 'Theranos lab associate who identified quality control failures and became a whistleblower', href: '/entities/individuals/erika-cheung', status: 'Whistleblower' },
 { name: 'George Shultz', role: 'Former Secretary of State who served on Theranos board; pressured his own grandson to remain silent', href: '/entities/individuals/george-shultz', status: 'Deceased (2021)' },
 { name: 'Henry Kissinger', role: 'Former Secretary of State who served on Theranos board, lending credibility to the fraud', href: '/entities/individuals/henry-kissinger', status: 'Deceased (2023)' },
 { name: 'James Mattis', role: 'Former Secretary of Defense and Theranos board member; helped facilitate military testing partnerships', href: '/entities/individuals/james-mattis', status: 'Former Board Member' },
 { name: 'David Boies', role: 'Attorney for Theranos who used aggressive legal tactics to intimidate whistleblowers and journalists', href: '/entities/individuals/david-boies', status: 'Former Counsel' },
 { name: 'Ian Gibbons', role: 'Theranos chief scientist who was aware the technology didn\'t work; died by suicide before being deposed', href: '/entities/individuals/ian-gibbons', status: 'Deceased (2013)' },
 { name: 'Rupert Murdoch', role: 'Invested $125 million in Theranos; owned WSJ but did not interfere with Carreyrou\'s investigation', href: '/entities/individuals/rupert-murdoch', status: 'Investor' },
 ],
 timeline: [
 { date: '2003', event: 'Elizabeth Holmes drops out of Stanford at age 19 and founds Real-Time Cures, later renamed Theranos' },
 { date: '2004-2010', event: 'Holmes raises early funding from venture capitalists; Theranos operates in secrecy, claiming revolutionary breakthroughs' },
 { date: '2009', event: 'Sunny Balwani joins Theranos as President and COO; his relationship with Holmes is kept secret from investors' },
 { date: '2010', event: 'Theranos signs deal with Pfizer for drug trial blood testing; Pfizer eventually discovers the data is unreliable' },
 { date: '2013-04', event: 'Chief scientist Ian Gibbons dies by suicide one week before he was scheduled to be deposed in a patent lawsuit' },
 { date: '2013-09', event: 'Theranos launches partnership with Walgreens to offer blood tests in retail pharmacy locations' },
 { date: '2013-12', event: 'Holmes appears on cover of numerous magazines; Theranos reaches $9 billion valuation' },
 { date: '2014', event: 'Theranos begins testing real patient blood, using mostly conventional machines from Siemens while claiming proprietary technology' },
 { date: '2014-10', event: 'Walgreens Theranos Wellness Centers open in Palo Alto and Phoenix; patients receive inaccurate test results' },
 { date: '2015-02', event: 'John Carreyrou receives tip from a former Theranos employee and begins investigating' },
 { date: '2015-05', event: 'Tyler Shultz contacts regulators about quality control failures at Theranos; Theranos hires private investigators to follow him' },
 { date: '2015-10-15', event: 'Wall Street Journal publishes Carreyrou\'s explosive investigation:"Hot Startup Theranos Has Struggled With Its Blood-Test Technology"' },
 { date: '2016-01', event: 'CMS inspectors find serious deficiencies at Theranos\'s Newark lab; determine patient safety at"immediate jeopardy"' },
 { date: '2016-07', event: 'CMS bans Holmes from operating a lab for two years; Theranos voids two years of Edison test results' },
 { date: '2016-10', event: 'Theranos shuts down its clinical labs; partner Walgreens terminates the relationship and later sues for $140 million' },
 { date: '2018-03', event: 'SEC charges Holmes and Balwani with massive fraud; Holmes settles, paying $500,000 and relinquishing control' },
 { date: '2018-06', event: 'DOJ indicts Holmes and Balwani on wire fraud and conspiracy charges' },
 { date: '2022-01', event: 'Holmes convicted on 4 of 11 counts: 3 counts of wire fraud and 1 count of conspiracy to defraud investors' },
 { date: '2022-07', event: 'Balwani convicted on all 12 counts of wire fraud and conspiracy' },
 { date: '2023-04', event: 'Holmes sentenced to 11 years and 3 months in federal prison; Balwani receives 12 years and 9 months' },
 ],
 legalOutcomes: [
 { defendant: 'Elizabeth Holmes', charge: 'Wire fraud (3 counts), conspiracy to commit wire fraud (1 count)', outcome: 'Convicted; sentenced to 11 years 3 months prison, $452 million restitution' },
 { defendant: 'Ramesh "Sunny" Balwani', charge: 'Wire fraud (10 counts), conspiracy to commit wire fraud (2 counts)', outcome: 'Convicted on all 12 counts; sentenced to 12 years 9 months prison' },
 { defendant: 'Holmes (SEC)', charge: 'Securities fraud', outcome: '$500,000 fine, relinquished voting control, barred from serving as officer/director for 10 years' },
 { defendant: 'Theranos (Walgreens)', charge: 'Breach of contract, fraud', outcome: '$140 million lawsuit; settled for undisclosed amount' },
 { defendant: 'Theranos (Partner Fund Management)', charge: 'Investor fraud', outcome: 'Investors lost $96 million; claims pursued through criminal restitution' },
 { defendant: 'Theranos (Arizona AG)', charge: 'Consumer fraud affecting Arizona patients', outcome: '$4.65 million settlement' },
 { defendant: 'David Boies / Boies Schiller', charge: 'Allegations of enabling fraud and intimidating whistleblowers', outcome: 'No formal charges; reputational damage' },
 { defendant: 'Theranos Board Members', charge: 'Failure of fiduciary duty', outcome: 'No charges; board dissolved when company shut down in 2018' },
 ],
 charges: [
 { statute: '18 U.S.C. § 1343: Wire Fraud', description: 'Holmes used electronic communications to execute a scheme to defraud investors and patients', count: 'Convicted on 3 of 9 investor fraud counts; acquitted on patient fraud counts' },
 { statute: '18 U.S.C. § 1349: Conspiracy to Commit Wire Fraud', description: 'Holmes and Balwani conspired to defraud investors through systematic lies about Theranos technology', count: '1 count, convicted' },
 { statute: '15 U.S.C. § 78j: Securities Fraud (SEC)', description: 'Making materially false statements to investors about Theranos\'s technology, finances, and business relationships', count: 'SEC settlement in 2018' },
 { statute: '42 U.S.C. § 263a: CLIA (Clinical Laboratory Improvement Amendments) Violations', description: 'Operating a clinical laboratory that failed to meet federal quality standards, endangering patient safety', count: 'CMS sanctions; 2-year ban on Holmes operating a laboratory' },
 { statute: '18 U.S.C. § 1341: Mail Fraud', description: 'Sending fraudulent test results and marketing materials through the U.S. mail', count: 'Considered but charged as wire fraud' },
 { statute: 'Arizona Revised Statutes § 44-1522: Consumer Fraud', description: 'Providing inaccurate blood test results to Arizona patients through Walgreens locations', count: '$4.65 million state settlement' },
 { statute: '18 U.S.C. § 1001: False Statements', description: 'Making false representations to CMS and state regulators about laboratory practices', count: 'Addressed through regulatory enforcement' },
 { statute: '18 U.S.C. § 1512: Witness Tampering / Obstruction', description: 'Using private investigators and legal threats to intimidate whistleblowers and journalists', count: 'Investigated but not separately charged' },
 ],
 coverup: [
 'Theranos\'s Edison device could only perform roughly 12 types of tests (not the 200+ Holmes claimed) and many of those were unreliable; the company secretly ran the majority of patient tests on commercially available Siemens machines',
 'When chief scientist Ian Gibbons expressed concerns about the technology and was subpoenaed for a patent case, he died by suicide; Holmes showed no public acknowledgment and restructured his role to erase his contributions',
 'Holmes hired David Boies, one of America\'s most powerful attorneys, who used private investigators, threats of legal action, and intimidation campaigns against whistleblowers Tyler Shultz and Erika Cheung',
 'George Shultz, a Theranos board member, reportedly pressured his own grandson Tyler Shultz to recant his whistleblower complaints and even had lawyers attempt to get Tyler to sign documents that would have silenced him',
 'During investor demonstrations, Theranos rigged the Edison devices to display pre-loaded favorable results rather than running actual tests, a deliberate fraud to maintain the illusion of working technology',
 'Holmes stacked the Theranos board with powerful political figures (Kissinger, Mattis, Shultz) rather than medical or technology experts, using political prestige as a shield against scientific scrutiny',
 'Theranos voided two full years of Edison test results after the CMS investigation, meaning patients had received medical treatments based on completely unreliable blood test data',
 'Holmes maintained an elaborate personal mythology (including a deep voice many believed was artificially adopted) creating a Steve Jobs persona that made skepticism feel like an attack on innovation itself',
 'Internal Theranos communications showed that employees who raised concerns were systematically fired, and departing employees were forced to sign extremely aggressive non-disclosure agreements',
 ],
 sources: [
 { title: 'Bad Blood: Secrets and Lies in a Silicon Valley Startup, John Carreyrou', url: 'https://www.penguinrandomhouse.com/books/549670/bad-blood-by-john-carreyrou/', date: '2018-05' },
 { title: 'WSJ, Hot Startup Theranos Has Struggled With Its Blood-Test Technology', url: 'https://web.archive.org/web/2024/https://www.wsj.com/articles/theranos-has-struggled-with-blood-tests-1444881901', date: '2015-10-15' },
 { title: 'DOJ Indictment of Holmes and Balwani', url: 'https://www.justice.gov/usao-ndca/press-release/file/1072511/download', date: '2018-06-15' },
 { title: 'SEC Charges Theranos and Holmes with Securities Fraud', url: 'https://www.sec.gov/news/press-release/2018-41', date: '2018-03-14' },
 { title: 'Holmes Sentencing, DOJ Press Release', url: 'https://www.justice.gov/usao-ndca/pr/theranos-founder-elizabeth-holmes-sentenced-more-11-years-federal-prison', date: '2022-11-18' },
 { title: 'CMS Inspection Report, Theranos Newark Lab', url: 'https://www.cms.gov/newsroom/fact-sheets/theranos-inc', date: '2016-01' },
 { title: 'The Inventor: Out for Blood in Silicon Valley, HBO Documentary', url: 'https://www.hbo.com/movies/the-inventor-out-for-blood-in-silicon-valley', date: '2019-03' },
 { title: 'Balwani Convicted on All Counts, Reuters', url: 'https://web.archive.org/web/2024/https://www.reuters.com/legal/theranos-executive-sunny-balwani-convicted-fraud-2022-07-07/', date: '2022-07-07' },
 ],
};

export default function TheranosFraudPage() {
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
