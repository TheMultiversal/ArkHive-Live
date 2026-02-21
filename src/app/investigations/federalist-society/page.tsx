'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowLeft, AlertTriangle, Users, Calendar, FileText, ExternalLink, Scale, ShieldAlert, Skull } from 'lucide-react';
import GlitchText from '@/components/effects/GlitchText';

const investigation = {
  title: 'The Federalist Society',
  subtitle: 'How One Organization Captured the Federal Judiciary, Installed a Supreme Court Supermajority, and Rewrote American Law Through a $1.6 Billion Dark Money Pipeline',
  severity: 'critical',
  status: 'ACTIVE — JUDICIARY CAPTURED',
  summary: 'The Federalist Society for Law and Public Policy Studies is the most consequential political organization in modern American history that most Americans have never heard of. Founded in 1982 by law students at Yale and the University of Chicago — including future Supreme Court Justice Antonin Scalia\'s mentees — the Society evolved from an academic debating club into a shadow judicial nomination machine that has effectively captured the federal courts. Through its executive vice president Leonard Leo, who controls a $1.6 billion dark money network of interlocking nonprofits and shell companies, the Federalist Society has been the exclusive pipeline for Republican judicial nominations for over two decades. Every single one of the six conservative Supreme Court justices — Clarence Thomas, John Roberts, Samuel Alito, Neil Gorsuch, Brett Kavanaugh, and Amy Coney Barrett — was vetted, selected, and promoted by the Federalist Society. Leo personally oversaw the campaigns to confirm each one, spending hundreds of millions in anonymized dark money on advertising, lobbying, and influence operations. The organization\'s capture of the judiciary has produced the most consequential legal decisions of the 21st century: Citizens United v. FEC (2010) — unleashing unlimited dark money in politics; Shelby County v. Holder (2013) — gutting the Voting Rights Act; Dobbs v. Jackson Women\'s Health (2022) — overturning Roe v. Wade and eliminating the constitutional right to abortion. This is not judicial philosophy. This is the privatization of the American legal system by a single ideological network, funded by anonymous billionaires, accountable to no one.',
  keyFigures: [
    { name: 'Leonard Leo', role: 'Federalist Society Executive Vice President and de facto kingmaker of the federal judiciary. Controls a $1.6 billion dark money network through interlocking nonprofits. Personally selected and managed confirmation campaigns for all six conservative Supreme Court justices. Under investigation by DC Attorney General.', href: '/entities/individuals/leonard-leo', status: 'Under investigation — DC AG' },
    { name: 'Clarence Thomas', role: 'Associate Justice since 1991. First Federalist Society-connected justice confirmed to SCOTUS. Accepted millions in undisclosed gifts from billionaire Harlan Crow — luxury travel, private jet flights, real estate, tuition payments — while ruling on cases affecting Crow\'s interests.', href: '/entities/individuals/clarence-thomas', status: 'Active — Associate Justice' },
    { name: 'Samuel Alito', role: 'Associate Justice who authored the Dobbs decision overturning Roe v. Wade. Accepted undisclosed luxury fishing trip from billionaire Paul Singer, then ruled on Singer\'s cases without recusal. Flew insurrectionist flags at his homes.', href: '/entities/individuals/samuel-alito', status: 'Active — Associate Justice' },
    { name: 'John Roberts', role: 'Chief Justice appointed through Federalist Society pipeline. Authored Citizens United majority opinion unleashing dark money. Authored Shelby County decision gutting the Voting Rights Act. Resists all binding ethics reform.', href: '/entities/individuals/john-roberts', status: 'Active — Chief Justice' },
    { name: 'Neil Gorsuch', role: 'Associate Justice nominated by Trump from Leo\'s pre-approved list — occupying the seat Mitch McConnell held open by refusing to consider Merrick Garland for 293 days. Sold property to law firm head with business before the Court.', href: '/entities/individuals/neil-gorsuch', status: 'Active — Associate Justice' },
    { name: 'Brett Kavanaugh', role: 'Associate Justice confirmed despite credible sexual assault allegations. $92,000+ in debts mysteriously disappeared before confirmation. Leo\'s network spent $17 million on his confirmation campaign.', href: '/entities/individuals/brett-kavanaugh', status: 'Active — Associate Justice' },
    { name: 'Amy Coney Barrett', role: 'Associate Justice confirmed 8 days before 2020 election in rushed process after McConnell refused to follow the precedent he set with Garland. Leo\'s network spent $35+ million on her confirmation campaign.', href: '/entities/individuals/amy-coney-barrett', status: 'Active — Associate Justice' },
    { name: 'Antonin Scalia', role: 'Associate Justice (1986-2016) and Federalist Society intellectual godfather. His "originalist" philosophy became the organization\'s legal framework. His death in 2016 created the vacancy McConnell refused to fill — ultimately captured by Gorsuch.', href: '/entities/individuals/antonin-scalia', status: 'Deceased (2016)' },
    { name: 'Mitch McConnell', role: 'Senate Majority Leader who blocked Merrick Garland\'s nomination for 293 days — the longest Supreme Court vacancy in modern history — then rammed through Barrett\'s confirmation in 30 days. Transformed judicial confirmation into raw partisan power.', href: '/entities/individuals/mitch-mcconnell', status: 'Active — Senate Minority Leader' },
    { name: 'Don McGahn', role: 'Trump White House Counsel who served as the direct liaison between the Federalist Society and the Trump administration for judicial nominations. Oversaw the appointment of 234 federal judges — all from Leo\'s vetted lists.', href: '/entities/individuals/don-mcgahn', status: 'Active — Private practice' },
    { name: 'Edwin Meese III', role: 'Reagan Attorney General and Federalist Society founding patron. Championed "originalism" as judicial philosophy. Chair of Heritage Foundation\'s Center for Legal and Judicial Studies. Key link between Federalist Society and Project 2025.', href: '/entities/individuals/edwin-meese', status: 'Active — Heritage Foundation' },
    { name: 'Harlan Crow', role: 'Billionaire real estate developer and Federalist Society donor who gave Clarence Thomas millions in undisclosed gifts — luxury vacations, private jet flights, yacht trips, real estate, and private school tuition for Thomas\'s grandnephew.', href: '/entities/individuals/harlan-crow', status: 'Under Senate subpoena' },
    { name: 'Ginni Thomas', role: 'Conservative activist and wife of Justice Thomas who lobbied to overturn the 2020 election while her husband ruled on related cases. Received payments through a Leonard Leo-connected nonprofit. Texted Mark Meadows urging "martial law."', href: '/entities/individuals/ginni-thomas', status: 'Active — Lobbying' },
    { name: 'John Yoo', role: 'Federalist Society member who authored the Bush-era "Torture Memos" providing legal cover for CIA waterboarding and enhanced interrogation. Now a UC Berkeley professor — the Federalist Society as career protection for architects of illegal policy.', href: '/entities/individuals/john-yoo', status: 'Active — UC Berkeley professor' },
  ],
  timeline: [
    { date: '1982', event: 'Federalist Society founded at Yale Law School, Harvard Law School, and University of Chicago Law School by law students who felt legal academia was too liberal — with funding from conservative foundations' },
    { date: '1982-04-01', event: 'First Federalist Society symposium held at Yale Law School — Antonin Scalia, Robert Bork, and other conservative legal luminaries speak, establishing the intellectual framework' },
    { date: '1986-09-26', event: 'Antonin Scalia confirmed to Supreme Court — the first justice directly connected to the Federalist Society network, establishing the pipeline that would capture the Court' },
    { date: '1991-10-15', event: 'Clarence Thomas confirmed to Supreme Court by 52-48 vote despite Anita Hill\'s testimony — begins 30+ years of undisclosed conflicts of interest and Federalist Society influence on the bench' },
    { date: '1997', event: 'Leonard Leo joins the Federalist Society full-time — begins building the judicial nomination infrastructure and dark money network that would eventually control all Republican judicial appointments' },
    { date: '2000-12-12', event: 'Bush v. Gore decided 5-4 along ideological lines — Federalist Society-connected justices Scalia and Thomas in the majority, stopping Florida recount and installing George W. Bush as president' },
    { date: '2005-01-31', event: 'Leonard Leo takes leave from Federalist Society to manage John Roberts\' Supreme Court confirmation campaign — establishing his role as the de facto judicial nomination czar' },
    { date: '2006-01-31', event: 'Samuel Alito confirmed to Supreme Court — Leo again manages the confirmation campaign, spending millions in dark money on advertising and lobbying' },
    { date: '2010-01-21', event: 'Citizens United v. FEC decided 5-4 — Conservative supermajority strikes down campaign finance limits, unleashing unlimited dark money that flows directly back to organizations like Leo\'s network' },
    { date: '2013-06-25', event: 'Shelby County v. Holder decided 5-4 — Roberts writes majority opinion gutting the Voting Rights Act, eliminating preclearance requirements that protected minority voting rights for 50 years' },
    { date: '2016-02-13', event: 'Justice Scalia dies — Mitch McConnell announces within hours that he will not allow any Obama nominee to receive a hearing, holding the seat open for 293 days' },
    { date: '2016-03-16', event: 'Obama nominates Merrick Garland to the Supreme Court — McConnell and Senate Republicans refuse to hold hearings or a vote, an unprecedented act of constitutional obstruction' },
    { date: '2016-11-08', event: 'Trump wins presidential election after publicly releasing a list of potential Supreme Court nominees vetted by the Federalist Society — the first time a presidential candidate outsourced judicial selection to an outside organization' },
    { date: '2017-04-07', event: 'Neil Gorsuch confirmed to the stolen Scalia seat after McConnell eliminates the filibuster for Supreme Court nominees — "the nuclear option." Leo\'s network spends $10 million on the confirmation campaign' },
    { date: '2018-10-06', event: 'Brett Kavanaugh confirmed 50-48 despite Christine Blasey Ford\'s testimony — Leo\'s network spends $17 million. FBI investigation into sexual assault allegations is later revealed to have been severely limited by the White House' },
    { date: '2020-09-18', event: 'Justice Ruth Bader Ginsburg dies — McConnell announces he will fill the vacancy before the election, reversing the precedent he established with Garland just four years earlier' },
    { date: '2020-10-26', event: 'Amy Coney Barrett confirmed 8 days before election — Leo\'s network spends $35+ million. Senate Republicans ignore their own Garland precedent, cementing a 6-3 conservative supermajority' },
    { date: '2022-06-24', event: 'Dobbs v. Jackson Women\'s Health Organization decided 6-3 — Alito writes majority overturning Roe v. Wade, eliminating the constitutional right to abortion after 49 years. All six majority justices came from the Federalist Society pipeline' },
    { date: '2022-08-22', event: 'Barre Seid donates $1.6 billion to Leo-controlled Marble Freedom Trust — the largest known dark money donation in U.S. history, giving Leo unprecedented financial power over politics and the judiciary' },
    { date: '2023-04-06', event: 'ProPublica reveals Clarence Thomas accepted decades of undisclosed luxury travel, gifts, and real estate transactions from Harlan Crow — the beginning of a series of Supreme Court ethics scandals' },
    { date: '2023-06-20', event: 'ProPublica reveals Samuel Alito accepted undisclosed luxury Alaska fishing trip from billionaire Paul Singer, then failed to recuse from Singer\'s cases — further exposing the Court\'s ethics crisis' },
    { date: '2024-07-01', event: 'Senate Judiciary Committee issues subpoenas to Harlan Crow and Leonard Leo — both refuse to comply, asserting the Senate has no authority to investigate the Supreme Court\'s ethical failures' },
  ],
  legalOutcomes: [
    { defendant: 'Leonard Leo / Dark Money Network', charge: 'DC Attorney General investigation into whether Leo\'s network of nonprofits violated charitable solicitation laws and engaged in self-dealing', outcome: 'Investigation ongoing — Leo has refused to comply with subpoenas' },
    { defendant: 'Clarence Thomas', charge: 'Failed to disclose decades of gifts, luxury travel, real estate transactions, and tuition payments from Harlan Crow — violating federal disclosure requirements', outcome: 'No consequences — Supreme Court polices itself, ethics code has no enforcement mechanism' },
    { defendant: 'Samuel Alito', charge: 'Failed to disclose luxury trip funded by billionaire Paul Singer, then ruled on Singer\'s cases without recusal — violation of recusal obligations and disclosure requirements', outcome: 'No consequences — Alito refuses to recuse, claiming he "did not know" Singer had business before the Court' },
    { defendant: 'Neil Gorsuch', charge: 'Sold property to head of major law firm with business before the Court nine days after confirmation — failed to disclose the buyer\'s identity on financial disclosure forms', outcome: 'No investigation — self-policing Court declined to examine the transaction' },
    { defendant: 'Senate Republicans (Garland Blockade)', charge: 'Refused to hold hearings or vote on a Supreme Court nominee for 293 days — an unprecedented act that violated the spirit of the Constitution\'s Advice and Consent clause', outcome: 'No legal remedy — the theft of a Supreme Court seat has permanently altered American law' },
    { defendant: 'Harlan Crow', charge: 'Provided millions in undisclosed gifts to a sitting Supreme Court justice while having interests before the Court — potential bribery and corruption', outcome: 'Subpoenaed by Senate Judiciary Committee — refused to comply' },
    { defendant: 'Ginni Thomas', charge: 'Lobbied to overturn 2020 election while husband Justice Thomas ruled on related cases — Thomas refused to recuse from election-related cases despite his wife\'s direct involvement', outcome: 'No consequences — Justice Thomas has not recused from any case despite documented conflicts' },
    { defendant: 'Citizens United Impact', charge: 'The Citizens United decision unleashed unlimited dark money in politics — the very dark money that funds the Federalist Society\'s judicial capture operation', outcome: 'The decision created a self-reinforcing cycle: dark money captures courts, captured courts protect dark money' },
  ],
  charges: [
    { statute: '18 U.S.C. § 201 — Bribery of Public Officials', description: 'Providing luxury vacations, private jet flights, yacht trips, real estate, and tuition payments to a sitting Supreme Court justice while having cases before the Court constitutes bribery', count: 'Decades of unreported gifts to Clarence Thomas by Harlan Crow and other donors' },
    { statute: '5 U.S.C. App. § 101-111 — Ethics in Government Act', description: 'Supreme Court justices are required to file annual financial disclosure reports — Thomas, Alito, and Gorsuch all failed to disclose gifts, trips, and transactions', count: 'Dozens of unreported gifts, trips, and financial transactions across multiple justices' },
    { statute: '28 U.S.C. § 455 — Disqualification of Justice', description: 'Justices must recuse when their impartiality might reasonably be questioned — Thomas ruling on cases involving his wife\'s political activities, Alito ruling on cases involving his benefactor', count: 'Multiple documented instances of refusal to recuse despite clear conflicts' },
    { statute: '18 U.S.C. § 1346 — Honest Services Fraud', description: 'The public is entitled to the honest services of government officials — secretly accepting gifts from parties with business before the Court while ruling in their favor deprives the public of honest services', count: 'Pattern of corruption across multiple justices and decades' },
    { statute: '26 U.S.C. § 501(c) — Tax-Exempt Organization Abuse', description: 'Leo\'s network of nonprofits may be violating tax-exempt status requirements by engaging primarily in political activity while claiming charitable/educational status', count: '$1.6 billion+ routed through Leo\'s network of interlocking tax-exempt entities' },
    { statute: '52 U.S.C. § 30121 — Foreign Money in Elections', description: 'The dark money flowing through Leo\'s anonymous donor network creates the potential for foreign money to influence judicial confirmations — the anonymity is the point', count: 'Unknown — dark money structure prevents identification of all donors' },
    { statute: '18 U.S.C. § 371 — Conspiracy', description: 'Coordinated, decades-long conspiracy between the Federalist Society, conservative donors, and Senate Republicans to capture the federal judiciary through dark money and norm-breaking', count: 'Multi-decade conspiracy involving hundreds of millions in dark money' },
    { statute: '18 U.S.C. § 1001 — False Statements', description: 'Filing financial disclosure forms that omit required gifts, travel, and transactions constitutes making false statements to the federal government', count: 'Multiple justices filed incomplete or inaccurate disclosure forms' },
    { statute: 'DC Charitable Solicitation Laws', description: 'DC Attorney General investigating whether Leo\'s nonprofits violated charitable solicitation requirements and engaged in self-dealing — using charity funds for political and personal purposes', count: 'Investigation covers network totaling $1.6 billion+' },
  ],
  coverup: [
    'The Federalist Society officially claims it "takes no positions on legal or public policy" and is merely an "educational" debate forum — while functioning as the exclusive pipeline for all Republican judicial nominations and spending hundreds of millions to confirm Supreme Court justices.',
    'Leonard Leo\'s dark money network operates through dozens of interlocking nonprofits, shell companies, and pass-through entities specifically designed to hide donor identities — the $1.6 billion donation from Barre Seid was only revealed through tax document analysis by investigative journalists.',
    'Clarence Thomas failed to disclose decades of gifts from Harlan Crow because existing Supreme Court ethics rules had no enforcement mechanism — when ProPublica exposed the gifts, Thomas retroactively amended his disclosures while claiming his non-disclosure was "inadvertent."',
    'The FBI investigation into sexual assault allegations against Brett Kavanaugh was severely limited by the Trump White House — the FBI was given a restricted list of witnesses to interview and told to complete the investigation in less than a week. Thousands of tips to the FBI tip line were never investigated.',
    'When Senate Democrats attempted to investigate Supreme Court ethics violations, Leonard Leo and Harlan Crow refused to comply with subpoenas — facing no consequences because the Supreme Court claims Congress has no authority to investigate or regulate the Court.',
    'Samuel Alito published a preemptive defense in the Wall Street Journal before ProPublica\'s Alaska trip story was published — demonstrating he had advance knowledge of the investigation and coordinated a media strategy rather than addressing the ethical violations.',
    'The Federalist Society\'s role in judicial selection is deliberately kept informal — there are no official documents, no formal nomination lists, no paper trail. Leo communicates through phone calls and personal meetings, ensuring the capture of the judiciary leaves minimal evidence.',
    'After the Dobbs decision overturning Roe v. Wade, Federalist Society members and allies insist the decision was based on "pure legal reasoning" and "originalism" — obscuring the 40-year, billion-dollar campaign specifically designed to produce exactly this outcome.',
    'Supreme Court Chief Justice John Roberts convened the Court to adopt a voluntary "ethics code" in November 2023 — which contained no enforcement mechanism and did not require any justice to recuse or change behavior, allowing the ethical crisis to continue unchecked.',
  ],
  sources: [
    { title: 'ProPublica — "Clarence Thomas and the Billionaire" by Joshua Kaplan, Justin Elliott, and Alex Mierjeski', url: 'https://www.propublica.org/article/clarence-thomas-scotus-undisclosed-luxury-travel-gifts-harlan-crow', date: '2023-04-06' },
    { title: 'ProPublica — "Justice Samuel Alito Took Luxury Trip to Alaska on Billionaire\'s Private Jet"', url: 'https://www.propublica.org/article/samuel-alito-luxury-fishing-trip-paul-singer-scotus', date: '2023-06-20' },
    { title: 'The Washington Post — "$1.6 Billion Donation to Leonard Leo Group Is Largest Known Dark Money Gift"', url: 'https://www.washingtonpost.com/politics/2022/08/22/dark-money-donation-leonard-leo/', date: '2022-08-22' },
    { title: 'The New Yorker — "The Secrets of Leonard Leo, the Man Behind Trump\'s Supreme Court" by David D. Kirkpatrick', url: 'https://www.newyorker.com/news/news-desk/the-secrets-of-leonard-leo-the-man-behind-trumps-supreme-court', date: '2019-04-17' },
    { title: 'Senator Sheldon Whitehouse — "The Scheme: How the Right Wing Used Dark Money to Capture the Supreme Court"', url: 'https://www.simonandschuster.com/books/The-Scheme/Sheldon-Whitehouse/9781620977385', date: '2022-10-04' },
    { title: 'The Guardian — "Leonard Leo: The Man Who Reshaped the US Supreme Court"', url: 'https://www.theguardian.com/us-news/2022/sep/01/leonard-leo-supreme-court-federalist-society', date: '2022-09-01' },
    { title: 'OpenSecrets — "Leonard Leo\'s Dark Money Network Analysis"', url: 'https://www.opensecrets.org/news/2023/04/leonard-leos-dark-money-network/', date: '2023-04-01' },
    { title: 'Senate Judiciary Committee — "Subpoenas to Harlan Crow and Leonard Leo"', url: 'https://www.judiciary.senate.gov/press/dem/releases/judiciary-committee-issues-subpoenas-to-harlan-crow-and-leonard-leo', date: '2024-07-01' },
    { title: 'The Intercept — "How Dark Money Shaped the Supreme Court"', url: 'https://theintercept.com/2022/07/01/dark-money-supreme-court-leonard-leo/', date: '2022-07-01' },
    { title: 'NPR — "The Federalist Society: From Fringe to Mainstream"', url: 'https://www.npr.org/2023/11/07/1211098680/the-federalist-society-supreme-court', date: '2023-11-07' },
  ],
};

export default function FederalistSocietyPage() {
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
