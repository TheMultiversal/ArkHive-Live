'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowLeft, AlertTriangle, Users, Calendar, FileText, ExternalLink, Scale, ShieldAlert, Skull } from 'lucide-react';
import GlitchText from '@/components/effects/GlitchText';

const investigation = {
  title: 'Bernie Madoff Ponzi Scheme',
  subtitle: 'The $64.8 Billion Fraud: SEC Failures, Ignored Whistleblowers, and the Largest Ponzi Scheme in History',
  severity: 'critical',
  status: 'CONVICTED — 150 YEARS',
  summary: 'Bernard L. Madoff operated the largest Ponzi scheme in history, defrauding thousands of investors of an estimated $64.8 billion in stated account values ($17.5 billion in actual invested principal). For at least 17 years, Madoff fabricated account statements showing steady returns while using new investor money to pay existing clients. The SEC received detailed complaints from whistleblower Harry Markopolos as early as 2000 — including a submission titled "The World\'s Largest Hedge Fund is a Fraud" — but failed to investigate meaningfully on at least six occasions. Madoff\'s scheme destroyed the savings of thousands, wiped out charitable foundations, and led to multiple suicides among victims. He was sentenced to 150 years in federal prison. The SEC\'s inspector general later concluded that the agency had received "more than enough information to warrant a thorough and comprehensive examination" but failed at every turn.',
  keyFigures: [
    { name: 'Bernard Madoff', role: 'Founder of Bernard L. Madoff Investment Securities; orchestrated $64.8B Ponzi scheme for 17+ years', href: '/entities/individuals/bernie-madoff', status: 'Deceased 2021 — in prison' },
    { name: 'Harry Markopolos', role: 'Financial analyst and whistleblower who alerted the SEC to the fraud starting in 2000', href: '/entities/individuals/harry-markopolos', status: 'Vindicated whistleblower' },
    { name: 'Ruth Madoff', role: 'Wife of Bernard Madoff; forfeited $80M in assets; claimed ignorance of the fraud', href: '/entities/individuals/ruth-madoff', status: 'Settled — forfeited assets' },
    { name: 'Mark Madoff', role: 'Son who reported his father to authorities; committed suicide in 2010', href: '/entities/individuals/mark-madoff', status: 'Deceased 2010 — suicide' },
    { name: 'Andrew Madoff', role: 'Son who also reported his father; died of cancer in 2014', href: '/entities/individuals/andrew-madoff', status: 'Deceased 2014' },
    { name: 'Frank DiPascali', role: 'Madoff\'s chief financial officer who helped fabricate account statements for decades', href: '/entities/individuals/frank-dipascali', status: 'Deceased 2015 — cooperated' },
    { name: 'Peter Madoff', role: 'Brother and Chief Compliance Officer; pleaded guilty to conspiracy and falsifying records', href: '/entities/individuals/peter-madoff', status: 'Served 10 years' },
    { name: 'Irving Picard', role: 'Trustee appointed to recover Madoff victim funds; recovered over $14.4 billion', href: '/entities/individuals/irving-picard', status: 'Active — Trustee' },
    { name: 'Christopher Cox', role: 'SEC Chairman during the final years of the fraud; resigned amid criticism of agency failures', href: '/entities/individuals/christopher-cox', status: 'Former SEC Chair' },
    { name: 'David Kotz', role: 'SEC Inspector General who investigated the agency\'s failure to detect the Madoff fraud', href: '/entities/individuals/david-kotz', status: 'Former IG' },
    { name: 'Jeffry Picower', role: 'Madoff\'s largest individual beneficiary who withdrew $7.2B; estate settled for $7.2B after his death', href: '/entities/individuals/jeffry-picower', status: 'Deceased 2009' },
  ],
  timeline: [
    { date: '1960-01-01', event: 'Bernard Madoff founds Bernard L. Madoff Investment Securities LLC with $5,000 in savings' },
    { date: '1991-01-01', event: 'Madoff begins managing money through feeder funds; Ponzi operations suspected to begin around this period' },
    { date: '1992-12-01', event: 'SEC investigates Avellino & Bienes feeder fund raising money for Madoff; finds unregistered securities but misses the fraud' },
    { date: '1999-05-01', event: 'Harry Markopolos begins analyzing Madoff\'s stated returns; concludes they are mathematically impossible' },
    { date: '2000-05-01', event: 'Markopolos submits first complaint to SEC Boston office detailing why Madoff must be running a Ponzi scheme' },
    { date: '2001-05-01', event: 'Barron\'s and MAR/Hedge Fund report raise questions about Madoff\'s impossibly consistent returns' },
    { date: '2005-11-01', event: 'Markopolos submits updated 21-page complaint to SEC: "The World\'s Largest Hedge Fund is a Fraud"' },
    { date: '2006-01-01', event: 'SEC opens investigation but relies on Madoff\'s own representations; closes case without finding fraud' },
    { date: '2007-06-01', event: 'Markopolos submits third complaint to SEC — still no meaningful investigation' },
    { date: '2008-10-01', event: 'Financial crisis triggers wave of redemption requests that Madoff cannot meet' },
    { date: '2008-12-10', event: 'Madoff confesses to his sons Mark and Andrew that the investment business is "one big lie"' },
    { date: '2008-12-11', event: 'Mark and Andrew Madoff report their father to the FBI; Madoff arrested at his apartment' },
    { date: '2009-03-12', event: 'Madoff pleads guilty to 11 federal charges; no plea deal, no cooperation agreement' },
    { date: '2009-06-29', event: 'Madoff sentenced to 150 years in federal prison — the maximum possible' },
    { date: '2009-09-02', event: 'SEC Inspector General releases 477-page report documenting systematic agency failures' },
    { date: '2010-12-11', event: 'Mark Madoff commits suicide on the second anniversary of his father\'s arrest' },
    { date: '2012-06-29', event: 'Peter Madoff sentenced to 10 years for conspiracy, falsifying records, and securities fraud' },
    { date: '2021-04-14', event: 'Bernard Madoff dies in federal prison at age 82; trustee has recovered $14.4B for victims' },
    { date: '2024-01-01', event: 'Trustee Irving Picard has recovered over 88% of allowed victim claims — recovery efforts ongoing' },
  ],
  legalOutcomes: [
    { defendant: 'Bernard Madoff', charge: 'Securities fraud, investment adviser fraud, mail fraud, wire fraud, money laundering (11 counts)', outcome: 'Pleaded guilty — 150 years; died in prison 2021' },
    { defendant: 'Peter Madoff', charge: 'Conspiracy, falsifying records, securities fraud', outcome: 'Pleaded guilty — 10 years; forfeited $143M' },
    { defendant: 'Frank DiPascali', charge: 'Securities fraud, conspiracy (10 counts)', outcome: 'Pleaded guilty; cooperated; died 2015 before sentencing' },
    { defendant: 'Five back-office employees', charge: 'Conspiracy, securities fraud, falsifying records', outcome: 'All convicted at trial — 2.5 to 6 years' },
    { defendant: 'Jeffry Picower Estate', charge: 'Recovery of fraudulent transfers', outcome: '$7.2B settlement — largest individual Ponzi recovery in history' },
    { defendant: 'JPMorgan Chase', charge: 'Failure to report suspicious activity (BSA violations)', outcome: 'Deferred prosecution — $2.6B settlement' },
    { defendant: 'SEC (institutional)', charge: 'Failure to detect fraud despite multiple tips', outcome: 'IG report documented "systemic failures"; internal reforms' },
    { defendant: 'Ruth Madoff', charge: 'Civil forfeiture of assets', outcome: 'Forfeited $80M in assets; retained $2.5M' },
  ],
  charges: [
    { statute: '15 U.S.C. § 78j(b) / Rule 10b-5 — Securities Fraud', description: 'Fraudulent scheme to defraud investors by fabricating returns and stealing invested capital', count: '1 count — encompassing 17+ years' },
    { statute: '15 U.S.C. § 80b-6 — Investment Adviser Fraud', description: 'Defrauding clients while acting as registered investment adviser', count: '1 count' },
    { statute: '18 U.S.C. § 1341 — Mail Fraud', description: 'Using the US mail to distribute fraudulent account statements to thousands of investors', count: '3 counts' },
    { statute: '18 U.S.C. § 1343 — Wire Fraud', description: 'Using electronic communications to execute the Ponzi scheme', count: '2 counts' },
    { statute: '18 U.S.C. § 1956 — Money Laundering', description: 'Laundering billions through domestic and international transfers to sustain the fraud', count: '1 count — international' },
    { statute: '18 U.S.C. § 1957 — Monetary Transaction with Criminal Proceeds', description: 'Using proceeds of fraud for personal enrichment including real estate and luxury items', count: '1 count' },
    { statute: '18 U.S.C. § 1001 — False Statements', description: 'Filing false documents with SEC and making false statements to regulators', count: '1 count' },
    { statute: '26 U.S.C. § 7206 — False Tax Returns', description: 'Filing fraudulent tax returns concealing the true nature of investment operations', count: '1 count' },
  ],
  coverup: [
    'The SEC received detailed complaints from Harry Markopolos at least six times between 2000 and 2008 but failed to conduct a meaningful investigation',
    'Markopolos\'s 2005 submission — titled "The World\'s Largest Hedge Fund is a Fraud" — mathematically proved the returns were impossible, yet the SEC ignored it',
    'When the SEC did investigate in 2006, examiners relied on Madoff\'s own representations and never verified his trades with counterparties',
    'JPMorgan Chase, Madoff\'s primary bank, filed suspicious activity concerns internally but failed to report them to authorities as required by law',
    'Madoff\'s scheme was sustained by a network of "feeder funds" that earned billions in fees by funneling investor money to Madoff without due diligence',
    'The SEC inspector general found that agency staff were intimidated by Madoff\'s reputation as a former NASDAQ chairman and industry leader',
    'Madoff fabricated all trade confirmations, account statements, and regulatory filings for decades using a separate floor of his building hidden from legitimate operations',
    'Multiple financial professionals in the industry suspected the fraud but remained silent, either out of complicity or fear of losing access to Madoff\'s "returns"',
    'The SEC\'s institutional culture prioritized deference to industry insiders over investor protection, enabling the fraud to continue for nearly two decades',
  ],
  sources: [
    { title: 'SEC Inspector General Report on Madoff Investigation Failures', url: 'https://www.sec.gov/news/studies/2009/oig-509.pdf', date: '2009-09-02' },
    { title: 'United States v. Madoff — Criminal Complaint', url: 'https://www.justice.gov/usao-sdny/pr/bernard-l-madoff-pleads-guilty-11-count-criminal-information', date: '2009-03-12' },
    { title: 'Harry Markopolos Congressional Testimony', url: 'https://www.c-span.org/video/?283881-1/sec-regulation-oversight', date: '2009-02-04' },
    { title: 'Madoff Trustee Recovery Efforts — SIPC', url: 'https://www.madofftrustee.com/', date: '2024-01-01' },
    { title: 'No One Would Listen — Harry Markopolos', url: 'https://www.nytimes.com/2010/03/07/books/review/Kolbert-t.html', date: '2010-03-07' },
    { title: 'JPMorgan $2.6B Madoff Settlement', url: 'https://www.reuters.com/article/us-jpmorgan-madoff-settlement-idUSBREA060AZ20140107', date: '2014-01-07' },
    { title: 'The Madoff Affair — PBS Frontline Documentary', url: 'https://www.pbs.org/wgbh/frontline/documentary/madoff/', date: '2009-05-12' },
    { title: 'Picower Estate $7.2B Settlement', url: 'https://www.nytimes.com/2010/12/18/business/18madoff.html', date: '2010-12-17' },
  ],
};

export default function MadoffPage() {
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
