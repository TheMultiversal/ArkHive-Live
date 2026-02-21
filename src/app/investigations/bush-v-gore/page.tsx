'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowLeft, AlertTriangle, Users, Calendar, FileText, ExternalLink, Scale, ShieldAlert, Skull } from 'lucide-react';
import GlitchText from '@/components/effects/GlitchText';

const investigation = {
  title: 'Bush v. Gore: The Stolen 2000 Election',
  subtitle: '537 Votes, a Supreme Court Coup, and the Death of Democratic Legitimacy',
  severity: 'critical',
  status: 'JUDICIAL COUP',
  summary: 'The 2000 presidential election between George W. Bush and Al Gore remains the most consequential theft of democratic power in modern American history. After election night in Florida ended with a margin of just 537 votes out of nearly 6 million cast, the state became ground zero for a coordinated effort to prevent a full recount. Florida Secretary of State Katherine Harris — who simultaneously served as co-chair of the Bush Florida campaign — purged tens of thousands of eligible Black voters from registration rolls using a deeply flawed "felons list." Republican operatives organized the "Brooks Brothers Riot," a staged mob that physically shut down the Miami-Dade County recount. Confusing "butterfly ballots" in Palm Beach County caused an estimated 19,120 Gore voters to accidentally vote for Pat Buchanan. Ultimately, five Republican-appointed Supreme Court justices — in a decision they themselves declared should never be cited as precedent — stopped the Florida recount in Bush v. Gore (531 U.S. 98), handing the presidency to George W. Bush. The unsigned per curiam opinion remains one of the most criticized decisions in Supreme Court history. Subsequent media recounts confirmed that under most counting standards, Gore would have won Florida and the presidency. The stolen election led directly to the Iraq War, the Patriot Act, the 2008 financial crisis, and the deaths of hundreds of thousands.',
  keyFigures: [
    { name: 'George W. Bush', role: '43rd President of the United States. Declared winner of the 2000 election after the Supreme Court halted the Florida recount. His presidency — built on a contested election — led to the Iraq War, warrantless surveillance, and torture programs.', href: '/entities/individuals/george-w-bush', status: 'Former President' },
    { name: 'Al Gore', role: 'Vice President (1993-2001) and Democratic presidential nominee. Won the national popular vote by over 543,000 votes but lost the Electoral College after the Supreme Court stopped the Florida recount. Conceded on December 13, 2000.', href: '/entities/individuals/al-gore', status: 'Former VP' },
    { name: 'Katherine Harris', role: 'Florida Secretary of State and co-chair of the Bush Florida campaign. Certified the election results while simultaneously overseeing a voter purge that disproportionately removed Black voters from rolls. Refused to extend recount deadlines.', href: '/entities/individuals/katherine-harris', status: 'Former FL SoS' },
    { name: 'Roger Stone', role: 'Republican political operative. Organized and directed the "Brooks Brothers Riot" — a group of Republican staffers flown to Miami-Dade to physically disrupt and shut down the manual recount on November 22, 2000.', href: '/entities/individuals/roger-stone', status: 'Political Operative' },
    { name: 'Jeb Bush', role: 'Governor of Florida (1999-2007) and brother of candidate George W. Bush. Oversaw the state apparatus during the recount while his own brother was on the ballot. Promised to "deliver Florida" for his brother.', href: '/entities/individuals/jeb-bush', status: 'Former FL Governor' },
    { name: 'Antonin Scalia', role: 'Supreme Court Justice. Authored the concurrence in Bush v. Gore and was the primary architect of the stay that halted the recount. Argued that counting legal votes would cause "irreparable harm" to Bush.', href: '/entities/individuals/antonin-scalia', status: 'Deceased (2016)' },
    { name: 'Sandra Day O\'Connor', role: 'Supreme Court Justice. Joined the 5-4 majority in Bush v. Gore. Reportedly said "this is terrible" on election night when it appeared Gore had won, reflecting partisan concern rather than judicial impartiality.', href: '/entities/individuals/sandra-day-oconnor', status: 'Deceased (2023)' },
    { name: 'James Baker III', role: 'Former Secretary of State. Led the Bush legal and political team during the Florida recount, deploying a scorched-earth strategy that prioritized winning over counting votes.', href: '/entities/individuals/james-baker', status: 'Former Sec. of State' },
    { name: 'Dick Cheney', role: 'Vice Presidential candidate and subsequent VP (2001-2009). Headed the Bush transition team and wielded extraordinary influence over the post-election strategy and subsequent administration.', href: '/entities/individuals/dick-cheney', status: 'Former VP' },
    { name: 'Karl Rove', role: 'Chief political strategist for Bush. Orchestrated the broader political campaign to delegitimize the recount and frame Democratic efforts to count votes as attempts to "steal" the election.', href: '/entities/individuals/karl-rove', status: 'Political Strategist' },
    { name: 'John Roberts', role: 'Current Chief Justice of the Supreme Court. As a private attorney in 2000, provided legal advice to the Bush team during the Florida recount — then was appointed to the Supreme Court by the man he helped install.', href: '/entities/individuals/john-roberts', status: 'Chief Justice' },
    { name: 'Clarence Thomas', role: 'Supreme Court Justice. Joined the 5-4 majority despite his wife Virginia Thomas being actively involved in recruiting Bush administration officials — a clear conflict of interest.', href: '/entities/individuals/clarence-thomas', status: 'Supreme Court Justice' },
    { name: 'Brett Kavanaugh', role: 'Current Supreme Court Justice. As a young attorney on the Bush legal team, worked directly on the Florida recount litigation. Rewarded with federal judgeship and later Supreme Court appointment by Bush-aligned power.', href: '/entities/individuals/brett-kavanaugh', status: 'Supreme Court Justice' },
    { name: 'Colin Powell', role: 'Secretary of State-designate during the recount. His early involvement in the Bush transition lent establishment credibility to the contested outcome before the Supreme Court even ruled.', href: '/entities/individuals/colin-powell', status: 'Deceased (2021)' },
  ],
  timeline: [
    { date: 'November 7, 2000', event: 'Election Day. Networks call Florida for Gore, then retract, then call it for Bush, then retract again. The margin is razor-thin, triggering automatic machine recount.' },
    { date: 'November 8, 2000', event: 'Machine recount reduces Bush\'s lead from 1,784 to 327 votes. Gore requests manual recounts in four heavily Democratic counties: Broward, Miami-Dade, Palm Beach, and Volusia.' },
    { date: 'November 9, 2000', event: 'Florida Division of Elections reveals that Database Technologies (DBT) purged 57,700 voters from rolls as alleged felons. NAACP later finds at least 12,000 were eligible voters, disproportionately Black.' },
    { date: 'November 11, 2000', event: 'Bush campaign files federal lawsuit to stop manual recounts. Republicans frame hand-counting of ballots — the gold standard in election disputes — as inherently unreliable.' },
    { date: 'November 13, 2000', event: 'Katherine Harris announces she will certify results on November 14, before manual recounts can be completed, despite ongoing legal disputes.' },
    { date: 'November 14, 2000', event: 'Volusia County completes its manual recount, netting Gore 98 additional votes. Harris declines to extend the deadline for other counties.' },
    { date: 'November 17, 2000', event: 'Florida Supreme Court bars Harris from certifying results before manual recounts are complete, extending the deadline to November 26.' },
    { date: 'November 19, 2000', event: 'Butterfly ballot analysis reveals an estimated 19,120 Palm Beach County voters — predominantly elderly Jewish Democrats — accidentally voted for Pat Buchanan instead of Gore. Buchanan himself admits the votes were not intended for him.' },
    { date: 'November 22, 2000', event: 'The "Brooks Brothers Riot": dozens of Republican congressional staffers, flown to Miami and organized by Roger Stone, storm the Miami-Dade canvassing board, physically intimidating counters. The board stops its recount entirely.' },
    { date: 'November 26, 2000', event: 'Harris certifies Bush as the winner by 537 votes, excluding incomplete recount totals from Miami-Dade and Palm Beach counties.' },
    { date: 'December 4, 2000', event: 'U.S. Supreme Court vacates the Florida Supreme Court\'s recount extension, sending the case back with questions about the legal basis.' },
    { date: 'December 8, 2000', event: 'Florida Supreme Court orders a statewide manual recount of all "undervotes" — ballots where machines detected no presidential vote. Counting begins.' },
    { date: 'December 9, 2000', event: 'U.S. Supreme Court issues emergency stay halting the recount. Scalia writes that counting votes would cause "irreparable harm" to Bush by "casting a cloud" on his legitimacy. Stevens dissents: "Counting every legally cast vote cannot constitute irreparable harm."' },
    { date: 'December 12, 2000', event: 'Bush v. Gore decided 5-4. The per curiam opinion rules the recount violates equal protection because different counties use different standards for evaluating ballots — then says the remedy is to stop counting entirely rather than establish uniform standards. The majority declares the decision should not be cited as precedent.' },
    { date: 'December 13, 2000', event: 'Al Gore concedes the election, calling for unity. Bush is declared the 43rd President-elect with 271 electoral votes.' },
    { date: 'January 6, 2001', event: 'Congressional Black Caucus members object to Florida\'s electoral votes during the joint session of Congress. No senator joins the objection, so it is dismissed under Senate rules. Gore, presiding as Senate President, gavels down the objections.' },
    { date: 'November 2001', event: 'The National Opinion Research Center (NORC) consortium media recount finds that under most counting standards, including the one most commonly used in Florida, Gore would have won the state.' },
    { date: '2003-2011', event: 'The Iraq War — a direct consequence of the stolen 2000 election — kills over 4,400 American service members and an estimated 200,000+ Iraqi civilians.' },
  ],
  legalOutcomes: [
    { defendant: 'Bush v. Gore (531 U.S. 98)', charge: 'U.S. Supreme Court halted the Florida recount', outcome: '5-4 decision. Unsigned per curiam opinion declared limited to the case. Widely regarded as the most politically motivated Supreme Court decision in modern history.' },
    { defendant: 'Katherine Harris', charge: 'Dual role as Secretary of State and Bush campaign co-chair; premature certification', outcome: 'No legal consequences. Elected to U.S. Congress in 2002.' },
    { defendant: 'Database Technologies (DBT Online/ChoicePoint)', charge: 'Provided deeply flawed voter purge list that disenfranchised thousands of eligible voters', outcome: 'Paid $2.3M settlement to Florida. No criminal charges.' },
    { defendant: 'Brooks Brothers Riot Participants', charge: 'Organized disruption of a lawful electoral recount', outcome: 'No charges filed. Several participants later received Bush administration appointments.' },
    { defendant: 'Florida Election Officials', charge: 'Inconsistent ballot design (butterfly ballot) causing mass voter confusion', outcome: 'No accountability. Election supervisor Theresa LePore redesigned the ballot "for readability."' },
    { defendant: 'Roger Stone', charge: 'Orchestrated the Brooks Brothers Riot to halt the Miami-Dade County recount', outcome: 'No charges related to 2000 election. Later convicted and pardoned in separate matter.' },
    { defendant: 'Florida Supreme Court', charge: 'Initial recount extension vacated by SCOTUS', outcome: 'The state court\'s attempts to ensure full counting were overridden by the federal Supreme Court.' },
    { defendant: 'Jeb Bush', charge: 'Conflict of interest as governor during brother\'s election dispute', outcome: 'No investigation into potential abuse of office. Continued as governor until 2007.' },
  ],
  charges: [
    { statute: '52 U.S.C. § 20511 — Voter Registration Fraud / Purge', description: 'The systematic purge of 57,700 voters from Florida\'s registration rolls using a grossly inaccurate "felons list" that disproportionately targeted Black voters, effectively disenfranchising thousands of eligible citizens.', count: 'At least 12,000 eligible voters illegally purged' },
    { statute: '18 U.S.C. § 594 — Intimidation of Voters', description: 'The Brooks Brothers Riot constituted organized intimidation of election workers engaged in a lawful recount, carried out with the intent to prevent the accurate counting of votes.', count: 'Single organized event affecting an entire county recount' },
    { statute: '18 U.S.C. § 241 — Conspiracy Against Rights', description: 'The coordinated, multi-pronged effort by Republican operatives — including voter purges, recount disruption, and selective certification — constituted a conspiracy to deprive Florida voters of their right to have their votes counted.', count: 'Multi-party conspiracy involving campaign, state officials, and operatives' },
    { statute: '52 U.S.C. § 10307 — Voting Rights Act Violations', description: 'The voter purge disproportionately affected Black voters in violation of the Voting Rights Act. The U.S. Commission on Civil Rights found that Black voters were ten times more likely to have ballots rejected than white voters.', count: 'Systematic discrimination affecting tens of thousands of Black voters' },
    { statute: '18 U.S.C. § 1346 — Honest Services Fraud', description: 'Katherine Harris\'s dual role as Secretary of State overseeing the election and co-chair of the Bush campaign constituted a scheme to defraud Florida voters of their right to her honest services as an impartial elections official.', count: 'Pattern of biased decisions by conflicted official' },
    { statute: '28 U.S.C. § 455 — Judicial Disqualification', description: 'Multiple Supreme Court justices had disqualifying conflicts of interest: Scalia\'s sons worked for law firms representing Bush; Thomas\'s wife was involved in the Bush transition; O\'Connor expressed partisan distress at a Gore win.', count: 'At least 3 justices with material conflicts of interest' },
    { statute: '18 U.S.C. § 595 — Interference by Administrative Employees', description: 'State election officials, acting in their administrative capacities, took actions designed to benefit one candidate over another, including premature certification and arbitrary recount deadline enforcement.', count: 'Multiple state officials acted in coordinated partisan manner' },
    { statute: '42 U.S.C. § 1983 — Deprivation of Civil Rights', description: 'Florida voters were deprived of their constitutional right to vote and to have their votes counted through state action, including the voter purge, ballot design failures, and premature certification.', count: 'Hundreds of thousands of Florida voters affected' },
  ],
  coverup: [
    'The Supreme Court\'s per curiam opinion in Bush v. Gore explicitly stated that the decision should not be cited as precedent — an extraordinary admission that the ruling was outcome-driven rather than principled, and an attempt to prevent scrutiny of its reasoning.',
    'Katherine Harris certified the election results while simultaneously serving as co-chair of the Bush Florida campaign. No investigation was conducted into this blatant conflict of interest.',
    'The voter purge list created by Database Technologies was known to be deeply flawed before the election. Harris\'s office instructed county supervisors to use the list aggressively, ensuring maximum disenfranchisement.',
    'Roger Stone\'s role in organizing the Brooks Brothers Riot was not fully exposed until years later. Participants — many of whom were Republican congressional staffers — were later rewarded with Bush administration positions.',
    'The butterfly ballot in Palm Beach County was identified as confusing before the election, but no corrective action was taken. An estimated 19,120 votes were lost to the flawed design.',
    'Media consortium recounts conducted after the inauguration found that Gore would have won under most counting standards, but these findings were buried in the aftermath of the September 11 attacks.',
    'The U.S. Commission on Civil Rights found "an extraordinarily high and inexcusable level" of disenfranchisement of Black voters in Florida but its findings led to no criminal referrals or meaningful reform.',
    'Justice Sandra Day O\'Connor\'s reported reaction on election night — expressing dismay at a potential Gore victory because she wanted to retire under a Republican president — was suppressed and only emerged in later reporting.',
    'The Florida legislature was preparing to appoint its own slate of Bush electors regardless of the recount outcome, revealing that the fix was in at multiple levels of government.',
    'John Roberts, Brett Kavanaugh, and Amy Coney Barrett — all of whom worked on the Bush side during the Florida recount — were subsequently appointed to the Supreme Court, creating a lasting structural reward for participation in the stolen election.',
  ],
  sources: [
    { title: 'Bush v. Gore, 531 U.S. 98 (2000) — Supreme Court Decision', url: 'https://supreme.justia.com/cases/federal/us/531/98/', date: 'December 12, 2000' },
    { title: 'U.S. Commission on Civil Rights: Voting Irregularities in Florida During the 2000 Presidential Election', url: 'https://www.usccr.gov/files/pubs/vote2000/report/main.htm', date: 'June 2001' },
    { title: 'NORC Florida Ballot Project — Full Recount Results', url: 'https://web.archive.org/web/2007/https://www.norc.org/projects/florida+ballot+project.htm', date: 'November 2001' },
    { title: 'Jeffrey Toobin, "Too Close to Call: The Thirty-Six-Day Battle to Decide the 2000 Election"', url: 'https://www.penguinrandomhouse.com/books/118101/too-close-to-call-by-jeffrey-toobin/', date: '2002' },
    { title: 'The Atlantic: "The Path to Florida" — The Stolen Election', url: 'https://www.theatlantic.com/politics/archive/2020/11/bush-v-gore-20-years-later/617033/', date: 'November 2020' },
    { title: 'New York Times: How Bush Took Florida — Examining the Vote', url: 'https://www.nytimes.com/2001/11/12/us/examining-vote-overview-study-disputed-florida-ballots-finds-justices-did-not.html', date: 'November 12, 2001' },
    { title: 'Washington Post: Florida Recount Study', url: 'https://www.washingtonpost.com/wp-srv/onpolitics/transcripts/recount_report.htm', date: 'November 2001' },
    { title: 'Greg Palast, "The Best Democracy Money Can Buy" — The Florida Voter Purge', url: 'https://www.gregpalast.com/the-best-democracy-money-can-buy/', date: '2002' },
    { title: 'NPR: The Brooks Brothers Riot — 20 Years Later', url: 'https://www.npr.org/2018/11/12/666812854/the-florida-recount-of-2000-a-nightmare-that-goes-on-haunting', date: 'November 2018' },
    { title: 'Vanity Fair: Sandra Day O\'Connor\'s Election Night Comments', url: 'https://www.vanityfair.com/news/2013/02/ralph-nader-sandra-day-oconnor-2000-election', date: '2013' },
  ],
};

export default function BushVGorePage() {
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
