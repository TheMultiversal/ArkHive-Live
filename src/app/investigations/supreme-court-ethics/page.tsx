'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowLeft, AlertTriangle, Users, Calendar, FileText, ExternalLink, Scale, ShieldAlert, Skull } from 'lucide-react';
import GlitchText from '@/components/effects/GlitchText';

const investigation = {
  title: 'Supreme Court Ethics Crisis',
  subtitle: 'Corruption on the Highest Bench — Undisclosed Gifts, Billionaire Benefactors, and the Capture of American Justice',
  severity: 'critical',
  status: 'ONGOING — ACTIVE INVESTIGATION',
  summary: 'The Supreme Court of the United States — the final arbiter of constitutional rights for 330 million Americans — has been exposed as a den of undisclosed corruption. Justice Clarence Thomas accepted decades of lavish gifts from billionaire Harlan Crow worth millions of dollars, including luxury vacations, private jet travel, a $267,230 gift to pay for his grandnephew\'s private school tuition, and the purchase of Thomas\'s mother\'s home — none of which Thomas disclosed on his mandatory financial forms. Justice Samuel Alito accepted an unreported luxury fishing trip to Alaska valued at over $100,000, provided by hedge fund billionaire Paul Singer — who later had business before the Court. Meanwhile, Leonard Leo, the Federalist Society co-chairman, directed $1.6 billion in dark money to engineer the nominations and confirmations of Justices who would overturn Roe v. Wade and dismantle the regulatory state. The Court has no binding ethics code, no enforcement mechanism, and its members serve for life with no accountability. This is not a court. It is a captured institution.',
  keyFigures: [
    { name: 'Clarence Thomas', role: 'Associate Justice who accepted millions in undisclosed gifts from billionaire Harlan Crow over 20+ years, including luxury travel, private jet flights, and real estate transactions', href: '/entities/individuals/clarence-thomas', status: 'Active — Associate Justice' },
    { name: 'Harlan Crow', role: 'Dallas real estate billionaire who lavished gifts on Thomas for decades — private jet travel, yacht vacations, $267K tuition payment, and purchase of Thomas family property', href: '/entities/individuals/harlan-crow', status: 'Active — Thomas benefactor' },
    { name: 'Ginni Thomas', role: 'Wife of Clarence Thomas; conservative activist who urged White House Chief of Staff Mark Meadows to overturn the 2020 election while Thomas ruled on related cases', href: '/entities/individuals/ginni-thomas', status: 'Active — Political operative' },
    { name: 'Samuel Alito', role: 'Associate Justice who accepted undisclosed luxury Alaska fishing trip from Paul Singer, failed to recuse from Singer\'s cases, and flew insurrectionist flags at his homes', href: '/entities/individuals/samuel-alito', status: 'Active — Associate Justice' },
    { name: 'Leonard Leo', role: 'Federalist Society co-chairman who directed $1.6 billion in dark money to capture the judiciary; orchestrated the nominations of Thomas, Alito, Gorsuch, Kavanaugh, and Barrett', href: '/entities/individuals/leonard-leo', status: 'Under investigation — DC AG' },
    { name: 'John Roberts', role: 'Chief Justice who has resisted binding ethics rules and external oversight of the Court; authored decisions gutting campaign finance and voting rights protections', href: '/entities/individuals/john-roberts', status: 'Active — Chief Justice' },
    { name: 'Paul Singer', role: 'Hedge fund billionaire who took Justice Alito on unreported luxury Alaska fishing trip and subsequently had multiple cases before the Court', href: '/entities/individuals/paul-singer', status: 'Active — Alito benefactor' },
    { name: 'Neil Gorsuch', role: 'Associate Justice who sold property to the head of a major law firm with business before the Court — nine days after confirmation — and failed to disclose the buyer', href: '/entities/individuals/neil-gorsuch', status: 'Active — Associate Justice' },
    { name: 'Brett Kavanaugh', role: 'Associate Justice whose $92,000+ in debts were mysteriously paid off before confirmation; nominated after Leonard Leo\'s dark money campaign', href: '/entities/individuals/brett-kavanaugh', status: 'Active — Associate Justice' },
    { name: 'Amy Coney Barrett', role: 'Associate Justice confirmed in rushed process 8 days before 2020 election after Leo\'s network spent $35M+ on her confirmation campaign', href: '/entities/individuals/amy-coney-barrett', status: 'Active — Associate Justice' },
    { name: 'Barre Seid', role: 'Electronics magnate who donated $1.6 billion — the largest known dark money gift in U.S. history — to Leonard Leo\'s Marble Freedom Trust', href: '/entities/individuals/barre-seid', status: 'Deceased-era gift' },
    { name: 'Mark Meadows', role: 'Trump White House Chief of Staff who exchanged texts with Ginni Thomas about overturning the 2020 election while Clarence Thomas ruled on related cases', href: '/entities/individuals/mark-meadows', status: 'Cooperating witness' },
    { name: 'Robin Arkley II', role: 'Billionaire who provided undisclosed gifts to Justice Thomas and hosted him at his private resort properties', href: '/entities/individuals/robin-arkley-ii', status: 'Active — Thomas donor' },
  ],
  timeline: [
    { date: '1991-10-15', event: 'Clarence Thomas confirmed to Supreme Court 52-48 despite Anita Hill sexual harassment testimony — narrowest margin in a century' },
    { date: '1991-12-01', event: 'Thomas begins relationship with Harlan Crow; Crow\'s gifts to Thomas would eventually span over two decades' },
    { date: '2004-01-01', event: 'Thomas stops disclosing private jet travel from Crow and others on his annual financial disclosure forms' },
    { date: '2009-01-01', event: 'Harlan Crow purchases the house where Thomas\'s mother lives in Savannah, GA, plus two adjacent lots for $133,363 — Thomas does not disclose the transaction' },
    { date: '2010-01-21', event: 'Citizens United v. FEC decided 5-4; Thomas concurs, arguing even disclosure requirements are unconstitutional while receiving undisclosed gifts' },
    { date: '2011-01-01', event: 'Thomas fails to disclose $686,589 in income earned by wife Ginni from the Heritage Foundation over four years — later amends reports' },
    { date: '2014-01-01', event: 'Harlan Crow pays $267,230 in private school tuition for Thomas\'s grandnephew — Thomas does not report the gift' },
    { date: '2019-07-01', event: 'Justice Alito takes luxury fishing trip to Alaska as guest of billionaire Paul Singer, who has cases before the Court — fails to disclose or recuse' },
    { date: '2020-11-10', event: 'Ginni Thomas sends text messages to Mark Meadows urging him to overturn the 2020 election; Clarence Thomas later dissents in cases to block release of January 6 records' },
    { date: '2021-01-06', event: 'Capitol insurrection occurs; Thomas is the lone dissent against releasing White House documents to January 6 Committee — his wife\'s texts to Meadows were in those records' },
    { date: '2022-06-24', event: 'Dobbs v. Jackson overturns Roe v. Wade — the culmination of Leonard Leo\'s decades-long dark money campaign to capture the Court' },
    { date: '2023-01-23', event: 'Alito\'s upside-down American flag flown at his home days after January 6 is reported — a symbol used by Stop the Steal movement' },
    { date: '2023-04-06', event: 'ProPublica reveals Clarence Thomas accepted luxury trips from Harlan Crow for over 20 years without disclosure — vacations on superyacht, private jet travel, exclusive resorts' },
    { date: '2023-04-13', event: 'ProPublica reveals Harlan Crow purchased Thomas\'s mother\'s house and paid $267K for grandnephew\'s tuition — Thomas disclosed neither' },
    { date: '2023-06-20', event: 'ProPublica reveals Justice Samuel Alito\'s undisclosed luxury Alaska fishing trip provided by billionaire Paul Singer' },
    { date: '2023-08-10', event: 'ProPublica reveals Gorsuch sold Colorado property to major law firm head with cases before the Court; failed to disclose buyer identity' },
    { date: '2023-11-13', event: 'Supreme Court adopts voluntary "ethics code" — widely criticized as toothless, with no enforcement mechanism and no independent oversight' },
    { date: '2024-05-16', event: 'NYT reports "Appeal to Heaven" flag — associated with Christian nationalist movement and January 6 — was flown at Alito\'s beach house' },
    { date: '2024-07-01', event: 'Senate Judiciary Committee issues subpoenas to Harlan Crow and Leonard Leo for records related to gifts to justices — both refuse to comply' },
  ],
  legalOutcomes: [
    { defendant: 'Clarence Thomas', charge: 'Failure to disclose gifts, travel, and real estate transactions worth millions on mandatory financial disclosure forms (Ethics in Government Act)', outcome: 'No legal consequences; Thomas filed amended disclosures but faced no penalties' },
    { defendant: 'Samuel Alito', charge: 'Failure to disclose luxury fishing trip from litigant Paul Singer; failure to recuse from Singer\'s cases before the Court', outcome: 'No consequences; Alito refused to recuse and published op-ed attacking ProPublica' },
    { defendant: 'Leonard Leo', charge: 'Under investigation by DC Attorney General for potentially funneling nonprofit funds for personal benefit and misrepresenting charitable purpose', outcome: 'Investigation ongoing; Leo has refused to comply with Senate subpoena' },
    { defendant: 'Harlan Crow', charge: 'Subpoenaed by Senate Judiciary Committee for records of gifts to Clarence Thomas', outcome: 'Refused to comply with subpoena; no enforcement action taken' },
    { defendant: 'Supreme Court (Institutional)', charge: 'No binding ethics code despite all other federal judges being subject to Code of Conduct for United States Judges', outcome: 'Adopted voluntary code in November 2023 — no enforcement mechanism, no independent oversight body' },
    { defendant: 'Ginni Thomas', charge: 'Potential conflicts of interest — political activism on cases before the Court while married to sitting justice', outcome: 'Thomas has refused all recusal requests; no enforcement mechanism exists' },
    { defendant: 'Neil Gorsuch', charge: 'Failure to fully disclose real estate transaction with head of major law firm appearing before the Court', outcome: 'No consequences; disclosure rules deemed insufficient' },
    { defendant: 'Senate (Institutional)', charge: 'Failure to pass Supreme Court ethics legislation despite bipartisan public support', outcome: 'Supreme Court Ethics, Recusal, and Transparency Act passed committee but blocked from floor vote' },
  ],
  charges: [
    { statute: '5 U.S.C. App. § 101-111 — Ethics in Government Act', description: 'Mandatory financial disclosure for federal officials — Thomas failed to disclose gifts worth millions over 20+ years', count: 'Dozens of unreported gifts, travel, and transactions by Thomas alone' },
    { statute: '18 U.S.C. § 1001 — False Statements', description: 'Filing false or materially incomplete financial disclosure reports with the Judicial Conference', count: 'Multiple false filings by Thomas (2004-2023); Alito unreported gifts' },
    { statute: '5 C.F.R. § 2635.202 — Standards of Ethical Conduct (Gifts)', description: 'Federal employees may not accept gifts from prohibited sources — billionaires with interests before the Court', count: 'Pattern of gifts from litigants and parties with interests before the Court' },
    { statute: '28 U.S.C. § 455 — Disqualification of Justice or Judge', description: 'Mandatory recusal when impartiality might reasonably be questioned — Thomas on January 6 cases involving wife\'s activities', count: 'Multiple failures to recuse by Thomas and Alito in cases involving benefactors' },
    { statute: '18 U.S.C. § 201 — Bribery of Public Officials', description: 'Receiving anything of value in connection with official acts — pattern of gifts from parties with business before the Court', count: 'Potential violations — gifts correlated with favorable rulings for benefactors\' interests' },
    { statute: '18 U.S.C. § 371 — Conspiracy to Defraud the United States', description: 'Coordinated scheme to capture the judiciary through dark money combined with improper gifts to sitting justices', count: 'Leo network + Crow/Singer gifts represent systematic corruption of judicial independence' },
    { statute: '26 U.S.C. § 6033 — Tax-Exempt Organization Reporting', description: 'Leonard Leo\'s network of nonprofits potentially misrepresented charitable purpose while primarily funding political activity', count: 'DC AG investigation into Leo\'s nonprofit network' },
    { statute: '18 U.S.C. § 1505 — Obstruction of Congressional Investigation', description: 'Refusing to comply with Senate Judiciary Committee subpoenas for records of gifts and payments to justices', count: 'Crow and Leo both refused subpoena compliance' },
  ],
  coverup: [
    'The Supreme Court operated for 234 years without a binding code of ethics — the only court in the federal system exempt from the Code of Conduct governing all other federal judges.',
    'When caught, Thomas simply filed amended disclosures years after the fact — there is no penalty for late filing, no enforcement body, and no mechanism to investigate whether the "corrections" are complete.',
    'Chief Justice Roberts has repeatedly refused to testify before Congress about Court ethics, claiming separation of powers — while accepting the complete absence of any external oversight.',
    'The November 2023 "ethics code" adopted by the Court is entirely self-enforced, contains no penalties for violations, creates no independent investigative body, and was widely condemned as a PR exercise.',
    'Alito took the extraordinary step of publishing a pre-emptive op-ed in the Wall Street Journal attacking ProPublica before their investigation was published — attempting to poison public perception of legitimate journalism.',
    'Thomas\'s allies have argued that luxury vacations on superyachts and private jets are merely "personal hospitality" exempt from disclosure — a loophole that exists nowhere else in federal ethics law as applied.',
    'Ginni Thomas\'s January 6-related activism was hidden from the January 6 Committee for months; Clarence Thomas was the sole dissenter in the case that would have revealed her communications.',
    'Senate Republicans have blocked every legislative attempt to impose binding ethics rules on the Supreme Court, including the bipartisan Supreme Court Ethics, Recusal, and Transparency Act.',
    'The Judicial Conference — the body that receives financial disclosures — has no meaningful enforcement power and has never referred a Supreme Court justice for prosecution despite obvious violations.',
  ],
  sources: [
    { title: 'ProPublica — "Clarence Thomas and the Billionaire" by Joshua Kaplan, Justin Elliott, and Alex Mierjeski', url: 'https://www.propublica.org/article/clarence-thomas-scotus-undisclosed-luxury-travel-gifts-harlan-crow', date: '2023-04-06' },
    { title: 'ProPublica — "Harlan Crow Bought Property From Clarence Thomas. Thomas Didn\'t Disclose the Deal."', url: 'https://www.propublica.org/article/clarence-thomas-harlan-crow-real-estate-scotus', date: '2023-04-13' },
    { title: 'ProPublica — "Justice Samuel Alito Took Luxury Trip to Alaska on Billionaire\'s Private Jet"', url: 'https://www.propublica.org/article/samuel-alito-luxury-fishing-trip-paul-singer-scotus', date: '2023-06-20' },
    { title: 'ProPublica — "Clarence Thomas Had a Child in Private School. Harlan Crow Paid the Tuition."', url: 'https://www.propublica.org/article/clarence-thomas-harlan-crow-private-school-tuition-scotus', date: '2023-05-04' },
    { title: 'The New York Times — "Another Provocative Flag Was Flown at Justice Alito\'s Beach House"', url: 'https://www.nytimes.com/2024/05/16/us/justice-alito-flag-beach-house.html', date: '2024-05-16' },
    { title: 'The Washington Post — "Ginni Thomas Pressed White House Chief to Pursue Unrelenting Efforts to Overturn 2020 Election"', url: 'https://www.washingtonpost.com/politics/2022/03/24/virginia-thomas-mark-meadows-texts/', date: '2022-03-24' },
    { title: 'Fix the Court — "Exposed: The Dark Money Network Capturing the Courts"', url: 'https://fixthecourt.com/dark-money/', date: '2023-08-01' },
    { title: 'Senate Judiciary Committee — "Subpoenas to Harlan Crow and Leonard Leo"', url: 'https://www.judiciary.senate.gov/press/dem/releases/judiciary-committee-issues-subpoenas-to-harlan-crow-and-leonard-leo', date: '2024-07-01' },
    { title: 'Politico — "Supreme Court Adopts Ethics Code Amid Thomas and Alito Controversies"', url: 'https://www.politico.com/news/2023/11/13/supreme-court-code-of-conduct-ethics-00127002', date: '2023-11-13' },
    { title: 'The Guardian — "Leonard Leo: The Man Who Reshaped the US Supreme Court"', url: 'https://www.theguardian.com/us-news/2022/sep/01/leonard-leo-supreme-court-federalist-society', date: '2022-09-01' },
  ],
};

export default function SupremeCourtEthicsPage() {
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
