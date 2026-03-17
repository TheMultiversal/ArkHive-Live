'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowLeft, AlertTriangle, Users, Calendar, FileText, ExternalLink, Scale, ShieldAlert, Skull } from 'lucide-react';
import GlitchText from '@/components/effects/GlitchText';

const investigation = {
 title: 'McCarthyism & The Red Scare',
 subtitle: 'Senate Witch Hunts That Destroyed Thousands of American Lives',
 severity: 'critical',
 status: 'DOCUMENTED',
 summary: 'From 1947 to 1957, the United States government waged a campaign of political repression against suspected communists that destroyed the careers, reputations, and lives of thousands of innocent Americans. Senator Joseph McCarthy\'s Senate Permanent Subcommittee on Investigations, the House Un-American Activities Committee (HUAC), loyalty oaths, and FBI surveillance programs created a culture of fear where accusation equaled guilt. The Hollywood blacklist destroyed the careers of hundreds of screenwriters, directors, and actors. The Rosenbergs were executed on disputed evidence. Teachers, government employees, labor organizers, and civil rights activists were targeted. An estimated 10,000 to 12,000 Americans lost their jobs, and many were imprisoned, deported, or driven to suicide. McCarthyism stands as one of the most systematic violations of civil liberties in American history, and a template for authoritarian repression that continues to echo today.',
 keyFigures: [
 { name: 'Joseph McCarthy', role: 'Republican Senator from Wisconsin who led anti-communist crusade from 1950-1954', href: '/entities/individuals/joseph-mccarthy', status: 'Deceased (1957)' },
 { name: 'J. Edgar Hoover', role: 'FBI Director who fed names to HUAC and ran covert surveillance of suspected communists', href: '/entities/individuals/j-edgar-hoover', status: 'Deceased (1972)' },
 { name: 'Roy Cohn', role: 'McCarthy\'s chief counsel, later mentor to Donald Trump, disbarred for unethical conduct', href: '/entities/individuals/roy-cohn', status: 'Deceased (1986)' },
 { name: 'Julius Rosenberg', role: 'Electrical engineer executed for conspiracy to commit espionage, convicted on disputed evidence', href: '/entities/individuals/julius-rosenberg', status: 'Executed (1953)' },
 { name: 'Ethel Rosenberg', role: 'Executed alongside husband based on testimony later recanted by brother David Greenglass', href: '/entities/individuals/ethel-rosenberg', status: 'Executed (1953)' },
 { name: 'Richard Nixon', role: 'HUAC member who rose to prominence prosecuting Alger Hiss case', href: '/entities/individuals/richard-nixon', status: 'Deceased (1994)' },
 { name: 'J. Parnell Thomas', role: 'HUAC Chairman who sent Hollywood Ten to prison; later imprisoned himself for fraud', href: '/entities/individuals/j-parnell-thomas', status: 'Deceased (1970)' },
 { name: 'Dalton Trumbo', role: 'Oscar-winning screenwriter blacklisted and imprisoned as one of the Hollywood Ten', href: '/entities/individuals/dalton-trumbo', status: 'Deceased (1976)' },
 { name: 'Edward R. Murrow', role: 'CBS journalist whose \"See It Now\"broadcast helped expose McCarthy\'s tactics', href: '/entities/individuals/edward-r-murrow', status: 'Deceased (1965)' },
 { name: 'Joseph Welch', role: 'Army attorney whose \"Have you no sense of decency\"rebuke at Army-McCarthy hearings turned public opinion', href: '/entities/individuals/joseph-welch', status: 'Deceased (1960)' },
 { name: 'Elia Kazan', role: 'Director who named names before HUAC, destroying careers of colleagues to save his own', href: '/entities/individuals/elia-kazan', status: 'Deceased (2003)' },
 { name: 'David Greenglass', role: 'Ethel Rosenberg\'s brother whose recanted testimony sent her to the electric chair', href: '/entities/individuals/david-greenglass', status: 'Deceased (2014)' },
 { name: 'Harry Truman', role: 'President who signed Executive Order 9835 creating the Federal Loyalty Program in 1947', href: '/entities/individuals/harry-truman', status: 'Deceased (1972)' },
 { name: 'Margaret Chase Smith', role: 'Republican Senator who delivered the Declaration of Conscience against McCarthy in 1950', href: '/entities/individuals/margaret-chase-smith', status: 'Deceased (1995)' },
 ],
 timeline: [
 { date: '1938', event: 'House Un-American Activities Committee (HUAC) established as permanent committee to investigate "subversive" activities' },
 { date: '1940', event: 'Smith Act passed, criminalizing advocacy of overthrowing the government, used to prosecute Communist Party members' },
 { date: '1947', event: 'President Truman signs Executive Order 9835, creating Federal Employee Loyalty Program requiring loyalty oaths for 2.5 million government workers' },
 { date: '1947', event: 'HUAC begins Hollywood hearings; ten screenwriters and directors refuse to testify and are cited for contempt of Congress' },
 { date: '1948', event: 'Alger Hiss case: former State Department official accused of espionage by Whittaker Chambers, launching Richard Nixon\'s career' },
 { date: '1948', event: 'Hollywood blacklist begins: studios agree to fire and refuse to hire anyone who refuses to cooperate with HUAC' },
 { date: '1950-FEB-09', event: 'McCarthy gives Wheeling, West Virginia speech claiming to have a list of 205 (later changed to 57) communists in the State Department' },
 { date: '1950', event: 'McCarran Internal Security Act passed over Truman\'s veto, requiring communist organizations to register with the government' },
 { date: '1950', event: 'FBI launches COINTELPRO-CPUSA targeting the Communist Party USA with infiltration, disruption, and illegal surveillance' },
 { date: '1951', event: 'Rosenbergs convicted of conspiracy to commit espionage; worldwide protests question evidence and fairness of trial' },
 { date: '1953-JUN-19', event: 'Julius and Ethel Rosenberg executed at Sing Sing prison despite international pleas for clemency and questions about Ethel\'s guilt' },
 { date: '1953', event: 'McCarthy becomes chairman of Senate Permanent Subcommittee on Investigations, intensifying witch hunt hearings' },
 { date: '1954-APR', event: 'Army-McCarthy hearings begin, televised nationally; McCarthy\'s bullying tactics are exposed to 20 million viewers' },
 { date: '1954-JUN-09', event: 'Joseph Welch\'s famous rebuke:"Have you no sense of decency, sir, at long last? Have you left no sense of decency?"turns public opinion' },
 { date: '1954-DEC-02', event: 'Senate votes 67-22 to censure McCarthy, effectively ending his political influence' },
 { date: '1957-MAY-02', event: 'McCarthy dies at age 48 from hepatitis exacerbated by alcoholism at Bethesda Naval Hospital' },
 { date: '1960', event: 'Dalton Trumbo publicly credited for screenplay of Spartacus and Exodus, breaking the Hollywood blacklist' },
 { date: '1995', event: 'Venona Project declassified, revealing some Soviet espionage but also confirming many McCarthy targets were innocent' },
 { date: '2001', event: 'David Greenglass admits he lied about Ethel Rosenberg\'s involvement to protect his own wife from prosecution' },
 ],
 legalOutcomes: [
 { defendant: 'Hollywood Ten', charge: 'Contempt of Congress for refusing to answer HUAC questions', outcome: 'All ten convicted; sentenced to 6-12 months in federal prison' },
 { defendant: 'Julius & Ethel Rosenberg', charge: 'Conspiracy to commit espionage', outcome: 'Executed by electric chair June 19, 1953; Ethel\'s guilt remained disputed for decades' },
 { defendant: 'Alger Hiss', charge: 'Perjury (denied espionage before HUAC)', outcome: 'Convicted, sentenced to 5 years; maintained innocence until death' },
 { defendant: 'Joseph McCarthy', charge: 'Senate censure for conduct unbecoming a senator', outcome: 'Censured 67-22 by Senate on December 2, 1954' },
 { defendant: 'J. Parnell Thomas', charge: 'Salary fraud and kickbacks as HUAC Chairman', outcome: 'Convicted and imprisoned at same facility as Hollywood Ten members he had jailed' },
 { defendant: 'CPUSA Leaders (Smith Act trials)', charge: 'Advocating overthrow of the government', outcome: '11 leaders convicted in 1949; Supreme Court partially reversed in Yates v. United States (1957)' },
 { defendant: 'Pete Seeger', charge: 'Contempt of Congress for refusing to answer HUAC questions', outcome: 'Convicted in 1961; conviction overturned on appeal in 1962' },
 { defendant: 'Arthur Miller', charge: 'Contempt of Congress for refusing to name names before HUAC', outcome: 'Convicted in 1957; conviction overturned on appeal in 1958' },
 ],
 charges: [
 { statute: 'Smith Act (18 U.S.C. § 2385)', description: 'Made it a crime to advocate or teach the overthrow of the government by force, used to prosecute Communist Party members for their beliefs', count: '140+ indictments under Smith Act between 1949-1957' },
 { statute: 'McCarran Internal Security Act (1950)', description: 'Required communist organizations to register with the government and authorized detention camps for suspected subversives during emergencies', count: 'Passed over President Truman\'s veto; declared partly unconstitutional in 1965' },
 { statute: 'Contempt of Congress (2 U.S.C. § 192)', description: 'Used to prosecute witnesses who refused to cooperate with HUAC or Senate investigations into communist activities', count: '100+ citations; dozens of convictions including Hollywood Ten' },
 { statute: 'Executive Order 9835 (Loyalty Program)', description: 'Required loyalty investigations for all federal employees; allowed firing based on"reasonable grounds"of disloyalty', count: '2.5 million investigated; 2,700 dismissed; 12,000 resigned under pressure' },
 { statute: 'Espionage Act (18 U.S.C. § 793-794)', description: 'Used to prosecute the Rosenbergs and others for alleged transfer of atomic secrets to the Soviet Union', count: 'Rosenbergs executed; multiple others imprisoned' },
 { statute: 'Communist Control Act (1954)', description: 'Outlawed the Communist Party USA, stripping it of all rights and immunities, effectively criminalizing political belief', count: 'Applied to Communist Party and its members nationwide' },
 { statute: 'Immigration and Nationality Act (McCarran-Walter Act, 1952)', description: 'Used to deport resident aliens for communist associations and bar entry of suspected communists into the United States', count: 'Hundreds deported or denied entry based on political beliefs' },
 { statute: 'State Sedition Laws (various)', description: 'State-level loyalty oaths and anti-subversion laws modeled on federal legislation; used against teachers, professors, and public employees', count: '39 states enacted loyalty oath requirements; thousands fired' },
 ],
 coverup: [
 'FBI Director J. Edgar Hoover secretly fed unverified names to HUAC while publicly denying coordination between the bureau and congressional investigators',
 'The Hollywood blacklist was never formally acknowledged by the major studios, executives privately agreed to enforce it while publicly denying its existence',
 'Government prosecutors knew Ethel Rosenberg\'s guilt was doubtful but used the death penalty threat against her as leverage to pressure Julius into confessing',
 'David Greenglass admitted in 2001 that he fabricated testimony about his sister Ethel typing classified notes, the key evidence that sent her to the electric chair',
 'The Venona Project, which decoded Soviet communications and could have exonerated some accused Americans, was kept classified until 1995 to protect intelligence methods',
 'McCarthy\'s actual "list" of communists in the State Department never existed in any verified form, the numbers changed from speech to speech (205, 57, 81, 10)',
 'HUAC investigators routinely leaked names of uncooperative witnesses to media before hearings, ensuring maximum career damage regardless of testimony outcomes',
 'The FBI maintained illegal surveillance programs, including mail opening and warrantless wiretaps, that were concealed from courts and the public for decades',
 'Thousands of teachers, professors, and government employees were quietly fired based on anonymous accusations with no opportunity to face their accusers or present evidence',
 ],
 sources: [
 { title: 'Schrecker, Ellen, Many Are the Crimes: McCarthyism in America (Princeton University Press)', url: 'https://press.princeton.edu/books/paperback/9780691048895/many-are-the-crimes', date: '1998' },
 { title: 'Senate Historical Office, Senate Censure of Joseph McCarthy', url: 'https://www.senate.gov/about/powers-procedures/censure/133McCarthy.htm', date: '1954' },
 { title: 'National Archives, Records of the House Un-American Activities Committee', url: 'https://www.archives.gov/legislative/guide/house/chapter-22-un-american.html', date: '2023' },
 { title: 'Truman Library, Executive Order 9835: Loyalty Program', url: 'https://www.trumanlibrary.gov/library/executive-orders/9835/executive-order-9835', date: '1947' },
 { title: 'History Channel, McCarthyism and the Red Scare', url: 'https://www.history.com/topics/cold-war/red-scare', date: '2023' },
 { title: 'FBI Records, Venona Project', url: 'https://www.fbi.gov/history/famous-cases/venona', date: '2023' },
 { title: 'New York Times, David Greenglass Admits He Lied About Sister Ethel Rosenberg', url: 'https://www.nytimes.com/2001/12/05/nyregion/david-greenglass-grand-jury-testimony.html', date: '2001-12-05' },
 { title: 'American Civil Liberties Union, The History of McCarthyism', url: 'https://www.aclu.org/news/civil-liberties/the-history-of-mccarthyism', date: '2023' },
 { title: 'PBS American Experience, McCarthy Documentary', url: 'https://www.pbs.org/wgbh/americanexperience/films/mccarthy/', date: '2020' },
 ],
};

export default function MccarthyismRedScarePage() {
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
 <div className="space-y-3">{investigation.keyFigures.map((figure, idx) => (<div key={idx} className="flex items-start justify-between p-3 bg-[#1c0a00] border border-[rgba(255, 80, 80,0.15)]"><div className="flex-1">{figure.href ? (<Link href={figure.href} className="font-bold text-blood-400 hover:text-blood-300 transition-colors">{figure.name}</Link>) : (<span className="font-bold glass-text">{figure.name}</span>)}<p className="text-sm text-zinc-400 mt-1">{figure.role}</p></div><span className="text-xs px-2 py-1 bg-[#200c00] text-zinc-400 border border-[rgba(255, 60, 60,0.18)] whitespace-nowrap ml-2">{figure.status}</span></div>))}</div>
 </motion.div>
 <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }} className="glass-card p-6">
 <h2 className="text-xl font-bold glass-text uppercase tracking-wider mb-4 flex items-center gap-2"><Scale className="w-5 h-5 text-blood-500"/>Applicable Charges &amp; Statutes</h2>
 <div className="space-y-3">{investigation.charges.map((charge, idx) => (<div key={idx} className="p-4 bg-[#1c0a00] border border-[rgba(255, 80, 80,0.15)]"><p className="font-bold text-blood-400 text-sm font-mono">{charge.statute}</p><p className="text-sm text-zinc-300 mt-1">{charge.description}</p><p className="text-xs text-blood-400 mt-1">{charge.count}</p></div>))}</div>
 </motion.div>
 </div>
 <div className="space-y-6">
 <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} className="glass-card p-6">
 <h3 className="text-lg font-bold glass-text uppercase tracking-wider mb-4 flex items-center gap-2"><Calendar className="w-4 h-4 text-blood-500"/>Timeline</h3>
 <div className="space-y-4">{investigation.timeline.map((item, idx) => (<div key={idx} className="relative pl-4 border-l-2 border-[rgba(255, 80, 80,0.15)]"><div className="absolute -left-[5px] top-0 w-2 h-2 bg-blood-500"/><p className="text-xs text-blood-500 font-mono">{item.date}</p><p className="text-sm text-zinc-300">{item.event}</p></div>))}</div>
 </motion.div>
 <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.1 }} className="glass-card p-6">
 <h3 className="text-lg font-bold glass-text uppercase tracking-wider mb-4 flex items-center gap-2"><Scale className="w-5 h-5 text-blood-500"/>Legal Outcomes</h3>
 <div className="space-y-3">{investigation.legalOutcomes.map((item, idx) => (<div key={idx} className="p-3 bg-[#1c0a00] border border-[rgba(255, 80, 80,0.15)]"><p className="font-bold glass-text text-sm">{item.defendant}</p><p className="text-xs text-zinc-400 mt-1">{item.charge}</p><p className="text-xs text-blood-400 mt-1">{item.outcome}</p></div>))}</div>
 </motion.div>
 <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.2 }} className="glass-card p-6">
 <h3 className="text-lg font-bold glass-text uppercase tracking-wider mb-4">Sources</h3>
 <div className="space-y-2">{investigation.sources.map((source, idx) => (<a key={idx} href={source.url} target="_blank"rel="noopener noreferrer"className="flex items-start gap-2 p-2 text-sm text-zinc-400 hover:text-blood-400 hover:bg-[#1c0a00] transition-colors"><ExternalLink className="w-4 h-4 mt-0.5 flex-shrink-0"/><div><span>{source.title}</span><span className="text-zinc-600 ml-2">({source.date})</span></div></a>))}</div>
 </motion.div>
 </div>
 </div>
 </div>
 </div>
 );
}
