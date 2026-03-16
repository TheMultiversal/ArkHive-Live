'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowLeft, AlertTriangle, Users, Calendar, FileText, ExternalLink, Scale, ShieldAlert, Skull } from 'lucide-react';
import GlitchText from '@/components/effects/GlitchText';

const investigation = {
 title: 'Union Busting in America',
 subtitle: 'The Systematic Destruction of Organized Labor, From Pinkertons to Amazon Surveillance',
 severity: 'critical',
 status: 'ONGOING',
 summary: 'The history of American labor is a history of corporate and government violence against workers. From the Pinkerton detective agency\'s massacres of striking miners to Reagan\'s destruction of PATCO, from the Taft-Hartley Act gutting collective bargaining to Koch-funded right-to-work legislation, American elites have waged a century-long war on workers\' ability to organize. Today, Amazon deploys military-grade surveillance against union organizers, Starbucks has been found to have committed over 400 labor law violations, and Walmart has closed entire stores rather than allow unionization. Union membership has fallen from 35% in the 1950s to just 10% today, not because workers don\'t want unions, but because the system has been rigged against them. The result: wage stagnation, rising inequality, and the hollowing out of the American middle class.',
 keyFigures: [
 { name: 'Ronald Reagan', role: 'President who fired 11,345 PATCO air traffic controllers and permanently replaced them, signaling open season on unions', href: '/entities/individuals/ronald-reagan', status: 'Deceased (2004)' },
 { name: 'Jeff Bezos', role: 'Amazon founder; company spent $14.2M on anti-union consultants in 2022 alone', href: '/entities/individuals/jeff-bezos', status: 'Active' },
 { name: 'Howard Schultz', role: 'Starbucks CEO who oversaw aggressive anti-union campaign; found to have violated labor law', href: '/entities/individuals/howard-schultz', status: 'Active' },
 { name: 'Charles Koch', role: 'Koch Industries; funded network of organizations pushing right-to-work laws and anti-union legislation', href: '/entities/individuals/charles-koch', status: 'Active' },
 { name: 'David Koch', role: 'Koch Industries co-owner; funded ALEC and Americans for Prosperity anti-labor campaigns', href: '/entities/individuals/david-koch', status: 'Deceased (2019)' },
 { name: 'Sam Walton', role: 'Walmart founder who built company culture of extreme anti-unionism; closed stores rather than allow unions', href: '/entities/individuals/sam-walton', status: 'Deceased (1992)' },
 { name: 'Robert Taft', role: 'Senator who co-authored Taft-Hartley Act of 1947 restricting workers\' right to strike and organize', href: '/entities/individuals/robert-taft', status: 'Deceased (1953)' },
 { name: 'Allan Pinkerton', role: 'Founder of Pinkerton National Detective Agency; provided strikebreakers and spies to crush labor organizing', href: '/entities/individuals/allan-pinkerton', status: 'Deceased (1884)' },
 { name: 'Henry Clay Frick', role: 'Carnegie Steel executive who hired Pinkertons to attack striking workers at Homestead in 1892', href: '/entities/individuals/henry-clay-frick', status: 'Deceased (1919)' },
 { name: 'Chris Smalls', role: 'Former Amazon worker who organized first successful Amazon union at JFK8 warehouse in Staten Island', href: '/entities/individuals/chris-smalls', status: 'Active' },
 { name: 'Scott Walker', role: 'Wisconsin Governor who passed Act 10 eliminating collective bargaining for public employees', href: '/entities/individuals/scott-walker', status: 'Active' },
 { name: 'Jennifer Abruzzo', role: 'NLRB General Counsel who issued landmark complaints against Amazon and Starbucks', href: '/entities/individuals/jennifer-abruzzo', status: 'Active' },
 { name: 'Elon Musk', role: 'Tesla CEO; NLRB found Tesla illegally fired union supporter and ordered Musk to delete anti-union tweet', href: '/entities/individuals/elon-musk', status: 'Active' },
 ],
 timeline: [
 { date: '1892', event: 'Homestead Strike: Henry Clay Frick hires 300 Pinkerton agents who battle steelworkers; 16 killed; Pennsylvania National Guard occupies town' },
 { date: '1894', event: 'Pullman Strike: Federal troops deployed against railroad workers; Eugene Debs imprisoned; Supreme Court approves federal injunctions against strikes' },
 { date: '1914', event: 'Ludlow Massacre: Colorado National Guard and Rockefeller-hired guards burn tent colony of striking miners; 21 killed including 11 children' },
 { date: '1935', event: 'National Labor Relations Act (Wagner Act) signed, establishing right to organize and bargain collectively' },
 { date: '1947', event: 'Taft-Hartley Act passed over Truman\'s veto; bans sympathy strikes, allows states to pass right-to-work laws, requires anti-communist oaths' },
 { date: '1955', event: 'Union membership peaks at 35% of workforce; American middle class reaches its height' },
 { date: '1959', event: 'Landrum-Griffin Act further restricts union activities and requires financial reporting' },
 { date: 'August 1981', event: 'Reagan fires 11,345 PATCO air traffic controllers and bans them from federal employment for life, sending message to all employers' },
 { date: '1981-2000', event: 'Private sector permanently replaces striking workers at unprecedented rates following Reagan\'s PATCO example' },
 { date: '2000', event: 'Walmart shuts down meat-cutting department across all stores after 10 workers in Jacksonville, TX, vote to unionize' },
 { date: '2011', event: 'Wisconsin Governor Scott Walker passes Act 10, eliminating collective bargaining rights for most public employees' },
 { date: '2012', event: 'Michigan passes right-to-work law, the birthplace of the UAW becomes hostile to organized labor' },
 { date: '2018', event: 'Janus v. AFSCME: Supreme Court rules public sector unions cannot collect fees from non-members, gutting union finances' },
 { date: '2021', event: 'Amazon defeats union vote in Bessemer, Alabama, amid allegations of illegal interference; NLRB orders re-run' },
 { date: 'April 2022', event: 'Amazon Labor Union wins historic victory at JFK8 warehouse in Staten Island, first Amazon union in US' },
 { date: '2022', event: 'Starbucks Workers United organizes 300+ stores; NLRB files over 100 unfair labor practice complaints against Starbucks' },
 { date: '2023', event: 'NLRB finds Tesla illegally fired union supporter; orders Elon Musk to delete anti-union tweet' },
 { date: '2023', event: 'SAG-AFTRA and WGA strikes demonstrate continued power of collective action; win protections against AI replacement' },
 { date: '2024', event: 'Amazon refuses to bargain with certified ALU union; NLRB issues complaint but penalties are minimal under current law' },
 ],
 legalOutcomes: [
 { defendant: 'Starbucks', charge: 'Over 400 unfair labor practice charges including retaliatory firings and store closures', outcome: 'NLRB issued multiple complaints; company ordered to rehire workers; minimal financial penalties' },
 { defendant: 'Amazon', charge: 'Illegal interference in Bessemer union election; surveillance of workers; retaliatory firings', outcome: 'NLRB ordered new election; Amazon found to have violated labor law; remedies insufficient to deter' },
 { defendant: 'Tesla', charge: 'Illegally firing union supporter; Musk\'s coercive anti-union tweets', outcome: 'NLRB ordered reinstatement and Musk to delete tweet; Tesla appealed' },
 { defendant: 'Walmart', charge: 'Retaliation against workers who participated in OUR Walmart protests', outcome: 'NLRB found Walmart violated workers\' rights; company ordered to pay back wages, cost of doing business' },
 { defendant: 'Reagan Administration (PATCO)', charge: 'Mass termination of 11,345 striking air traffic controllers', outcome: 'Courts upheld firings; controllers banned from federal employment until Clinton rescinded ban in 1993' },
 { defendant: 'Janus v. AFSCME (2018)', charge: 'Challenge to public sector union agency fees', outcome: 'Supreme Court 5-4 ruled fees violate First Amendment; devastating blow to public sector union finances' },
 { defendant: 'NLRB v. Various', charge: 'Systemic failure of labor law enforcement due to weak penalties', outcome: 'Maximum NLRB penalty is posting a notice and back pay; no punitive damages; companies treat violations as cost of business' },
 { defendant: 'Various Mining Companies (early 1900s)', charge: 'Use of private armies, hired gunmen, and state militias against striking workers', outcome: 'Ludlow Massacre led to some reforms but no criminal accountability for corporate violence' },
 ],
 charges: [
 { statute: 'National Labor Relations Act § 8(a)(1): Interference with Rights', description: 'Employers systematically interfere with workers\' right to organize through captive audience meetings, surveillance, threats, and retaliation', count: 'NLRB receives 20,000-25,000 unfair labor practice charges annually' },
 { statute: 'National Labor Relations Act § 8(a)(3): Discrimination', description: 'Retaliatory firing, demotion, or punishment of workers for union activity', count: 'One in five union election campaigns results in an illegal firing; workers fired in 42% of union campaigns' },
 { statute: 'First Amendment Violations, Captive Audience Meetings', description: 'Forcing workers to attend mandatory anti-union propaganda meetings as condition of employment', count: 'Over 90% of employers hold captive audience meetings during union campaigns' },
 { statute: 'RICO, Pattern of Racketeering Activity', description: 'Systematic corporate campaigns to destroy unions through coordinated illegal activity including surveillance, intimidation, and retaliation', count: 'Companies spend $340M annually on anti-union consultants ("persuaders")' },
 { statute: 'Civil Rights Act of 1964: Discriminatory Impact', description: 'Anti-union laws and practices disproportionately harm Black, Latino, and women workers who benefit most from union representation', count: 'Union wage premium is 17.3% for Black workers vs 11.1% for white workers' },
 { statute: 'Taft-Hartley Act § 14(b): Right-to-Work Authorization', description: 'Federal authorization for states to ban union security agreements, weakening collective bargaining power', count: '27 states have right-to-work laws; workers in those states earn $6,109 less annually' },
 { statute: 'Antitrust Violations, Coordinated Anti-Union Activity', description: 'Industry-wide coordination among employers to suppress wages and prevent unionization', count: 'Silicon Valley wage-fixing conspiracy (Apple, Google, Intel, Adobe); fast food no-poach agreements' },
 { statute: 'Occupational Safety and Health Act Violations', description: 'Using retaliatory firings to silence workers who report safety violations; union workplaces have 30% fewer safety violations', count: 'Over 5,000 workplace deaths annually; non-union workplaces have significantly higher injury rates' },
 ],
 coverup: [
 'The Taft-Hartley Act was sold as protecting workers\'"freedom"but was explicitly designed by corporate lobbyists to weaken unions, Truman called it a"slave-labor bill"when he vetoed it.',
 '"Right-to-work"laws are marketed as worker freedom but actually allow free-riding, workers get union benefits without paying dues, deliberately bankrupting unions. The naming itself is propaganda.',
 'Amazon spent $14.2 million on anti-union consultants in 2022 alone, but the National Labor Relations Act\'s maximum penalty is posting a notice, making union-busting a rational business calculation.',
 'The PATCO strike-breaking established a precedent that had nothing to do with air traffic control safety, Reagan already had plans to fire the controllers before they even walked out.',
 'Wisconsin\'s Act 10 was drafted in coordination with ALEC and the Koch network before Scott Walker even took office, but was presented as a response to a budget crisis.',
 'Walmart\'s internal training videos instruct managers on how to detect and suppress union organizing activity; one leaked video warned that unions are a"third party"that would"come between"workers and management.',
 'The Supreme Court\'s Janus v. AFSCME decision was the product of a decades-long corporate legal strategy funded by the National Right to Work Legal Defense Foundation and the Bradley Foundation.',
 'Starbucks publicly brands itself as progressive and employee-friendly while committing over 400 documented labor law violations against baristas trying to organize.',
 'The decline of union membership from 35% to 10% is presented as workers freely choosing not to unionize, when in reality it reflects a systematic legal and corporate campaign to make organizing nearly impossible.',
 ],
 sources: [
 { title: 'Beaten Down, Worked Up: The Past, Present, and Future of American Labor, Steven Greenhouse', url: 'https://www.penguinrandomhouse.com/books/561677/beaten-down-worked-up-by-steven-greenhouse/', date: '2019' },
 { title: 'NLRB Complaints Against Amazon, National Labor Relations Board', url: 'https://www.nlrb.gov/case/29-CA-283110', date: '2022' },
 { title: 'Starbucks Unfair Labor Practice Cases, NLRB', url: 'https://www.nlrb.gov/news-outreach/news-story/nlrb-general-counsel-issues-consolidated-complaint-against-starbucks', date: '2022' },
 { title: 'The PATCO Strike and Its Impact on American Labor, Federal Reserve History', url: 'https://www.federalreservehistory.org/essays/patco-strike', date: '2013' },
 { title: 'Employer Opposition to Union Organizing, Economic Policy Institute', url: 'https://www.epi.org/publication/fear-at-work/', date: '2019' },
 { title: 'Janus v. AFSCME, Supreme Court Opinion', url: 'https://www.supremecourt.gov/opinions/17pdf/16-1466_2b3j.pdf', date: 'June 2018' },
 { title: 'Union Decline and the Rise of Inequality, Economic Policy Institute', url: 'https://www.epi.org/publication/unions-help-reduce-disparities-and-strengthen-our-democracy/', date: '2021' },
 { title: 'Amazon\'s Anti-Union Spending, Department of Labor LM-10 Filings', url: 'https://www.dol.gov/agencies/olms/public-disclosure-room', date: '2022' },
 { title: 'There Is Power in a Union: The Epic Story of Labor in America, Philip Dray', url: 'https://www.penguinrandomhouse.com/books/304024/there-is-power-in-a-union-by-philip-dray/', date: '2010' },
 ],
};

export default function UnionBustingPage() {
 return (
 <div className="min-h-screen pt-20 lg:pt-24 pb-16">
 <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
 <Link href="/investigations"className="inline-flex items-center gap-2 text-zinc-400 hover:text-blood-500 transition-colors mb-6 pt-4"><ArrowLeft className="w-4 h-4"/>Back to Investigations</Link>
 <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="border-2 border-blood-800/60 bg-[rgba(0,6,20,0.90)] p-6 lg:p-8 mb-8">
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
 <div className="space-y-3">{investigation.keyFigures.map((figure, idx) => (<div key={idx} className="flex items-start justify-between p-3 bg-[rgba(0,10,28,0.82)] border border-[rgba(80,180,255,0.15)]"><div className="flex-1">{figure.href ? (<Link href={figure.href} className="font-bold text-blood-400 hover:text-blood-300 transition-colors">{figure.name}</Link>) : (<span className="font-bold glass-text">{figure.name}</span>)}<p className="text-sm text-zinc-400 mt-1">{figure.role}</p></div><span className="text-xs px-2 py-1 bg-[rgba(0,12,32,0.85)] text-zinc-400 border border-[rgba(60,160,255,0.18)] whitespace-nowrap ml-2">{figure.status}</span></div>))}</div>
 </motion.div>
 <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }} className="glass-card p-6">
 <h2 className="text-xl font-bold glass-text uppercase tracking-wider mb-4 flex items-center gap-2"><Scale className="w-5 h-5 text-blood-500"/>Applicable Charges &amp; Statutes</h2>
 <div className="space-y-3">{investigation.charges.map((charge, idx) => (<div key={idx} className="p-4 bg-[rgba(0,10,28,0.82)] border border-[rgba(80,180,255,0.15)]"><p className="font-bold text-blood-400 text-sm font-mono">{charge.statute}</p><p className="text-sm text-zinc-300 mt-1">{charge.description}</p><p className="text-xs text-blood-400 mt-1">{charge.count}</p></div>))}</div>
 </motion.div>
 </div>
 <div className="space-y-6">
 <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} className="glass-card p-6">
 <h3 className="text-lg font-bold glass-text uppercase tracking-wider mb-4 flex items-center gap-2"><Calendar className="w-4 h-4 text-blood-500"/>Timeline</h3>
 <div className="space-y-4">{investigation.timeline.map((item, idx) => (<div key={idx} className="relative pl-4 border-l-2 border-[rgba(80,180,255,0.15)]"><div className="absolute -left-[5px] top-0 w-2 h-2 bg-blood-500"/><p className="text-xs text-blood-500 font-mono">{item.date}</p><p className="text-sm text-zinc-300">{item.event}</p></div>))}</div>
 </motion.div>
 <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.1 }} className="glass-card p-6">
 <h3 className="text-lg font-bold glass-text uppercase tracking-wider mb-4 flex items-center gap-2"><Scale className="w-5 h-5 text-blood-500"/>Legal Outcomes</h3>
 <div className="space-y-3">{investigation.legalOutcomes.map((item, idx) => (<div key={idx} className="p-3 bg-[rgba(0,10,28,0.82)] border border-[rgba(80,180,255,0.15)]"><p className="font-bold glass-text text-sm">{item.defendant}</p><p className="text-xs text-zinc-400 mt-1">{item.charge}</p><p className="text-xs text-blood-400 mt-1">{item.outcome}</p></div>))}</div>
 </motion.div>
 <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.2 }} className="glass-card p-6">
 <h3 className="text-lg font-bold glass-text uppercase tracking-wider mb-4">Sources</h3>
 <div className="space-y-2">{investigation.sources.map((source, idx) => (<a key={idx} href={source.url} target="_blank"rel="noopener noreferrer"className="flex items-start gap-2 p-2 text-sm text-zinc-400 hover:text-blood-400 hover:bg-[rgba(0,10,28,0.82)] transition-colors"><ExternalLink className="w-4 h-4 mt-0.5 flex-shrink-0"/><div><span>{source.title}</span><span className="text-zinc-600 ml-2">({source.date})</span></div></a>))}</div>
 </motion.div>
 </div>
 </div>
 </div>
 </div>
 );
}
