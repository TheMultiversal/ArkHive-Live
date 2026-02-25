'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowLeft, AlertTriangle, Users, Calendar, FileText, ExternalLink, Scale, ShieldAlert, Skull } from 'lucide-react';
import GlitchText from '@/components/effects/GlitchText';

const investigation = {
  title: 'Purdue Pharma & the OxyContin Crisis',
  subtitle: 'How the Sackler Family Engineered America\'s Deadliest Drug Epidemic for Profit',
  severity: 'critical',
  status: 'BANKRUPTCY SHIELD  -  PARTIAL ACCOUNTABILITY',
  summary: 'Purdue Pharma, owned by the Sackler family, launched OxyContin in 1996 with a deliberate campaign of lies. They told doctors the drug was virtually non-addictive, paid physicians to push prescriptions, suppressed evidence of widespread abuse, and generated over $35 billion in revenue while more than 500,000 Americans died from opioid overdoses. When lawsuits mounted, the Sacklers extracted billions from the company, then used bankruptcy proceedings to shield themselves from personal liability  -  a masterclass in how American wealth insulates the powerful from consequences for mass death.',
  keyFigures: [
    { name: 'Arthur M. Sackler', role: 'Patriarch who pioneered pharmaceutical marketing techniques; laid groundwork for Purdue\'s aggressive sales approach', href: '/entities/individuals/arthur-sackler', status: 'Deceased (1987)' },
    { name: 'Richard Sackler', role: 'President of Purdue Pharma (1999-2003); drove aggressive OxyContin sales expansion and blamed addicts for the crisis', href: '/entities/individuals/richard-sackler', status: 'Under Investigation' },
    { name: 'Mortimer Sackler', role: 'Co-owner of Purdue Pharma; board member who oversaw marketing strategy', href: '/entities/individuals/mortimer-sackler', status: 'Deceased (2010)' },
    { name: 'Kathe Sackler', role: 'Board member who approved marketing campaigns and was aware of abuse reports', href: '/entities/individuals/kathe-sackler', status: 'Named Defendant' },
    { name: 'David Sackler', role: 'Board member who advocated for aggressive sales despite mounting evidence of addiction crisis', href: '/entities/individuals/david-sackler', status: 'Named Defendant' },
    { name: 'Michael Friedman', role: 'Former President and CEO of Purdue Pharma; pled guilty to federal misbranding charges in 2007', href: '/entities/individuals/michael-friedman', status: 'Convicted' },
    { name: 'Howard Udell', role: 'Former General Counsel of Purdue Pharma; pled guilty to misbranding charges', href: '/entities/individuals/howard-udell', status: 'Convicted (Deceased)' },
    { name: 'Paul Goldenheim', role: 'Former Chief Medical Officer of Purdue Pharma; pled guilty to misbranding charges', href: '/entities/individuals/paul-goldenheim', status: 'Convicted' },
    { name: 'Curtis Wright', role: 'FDA examiner who approved OxyContin\'s label claiming low addiction risk, then took a job at Purdue Pharma', href: '/entities/individuals/curtis-wright', status: 'Revolving Door' },
    { name: 'Russell Portenoy', role: 'Pain specialist who promoted opioids as safe; later admitted he was wrong and was funded by the industry', href: '/entities/individuals/russell-portenoy', status: 'Recanted' },
    { name: 'Maura Healey', role: 'Massachusetts AG who filed groundbreaking lawsuit naming individual Sackler family members', href: '/entities/individuals/maura-healey', status: 'Key Litigator' },
    { name: 'Craig Landau', role: 'Final CEO of Purdue Pharma who oversaw the bankruptcy proceedings', href: '/entities/individuals/craig-landau', status: 'Former CEO' },
  ],
  timeline: [
    { date: '1952', event: 'Arthur Sackler revolutionizes pharmaceutical advertising by marketing Valium directly to doctors' },
    { date: '1995', event: 'FDA approves OxyContin with label stating addiction risk is "very rare"  -  a claim Purdue lobbied for aggressively' },
    { date: '1996-01', event: 'OxyContin launches; Purdue deploys unprecedented direct-to-doctor marketing campaign' },
    { date: '1996-2001', event: 'Purdue spends over $200 million marketing OxyContin; sales force grows from 318 to over 700 representatives' },
    { date: '1999', event: 'Richard Sackler becomes president; emails reveal he wanted to "hammer the abusers" rather than address addiction crisis' },
    { date: '2001', event: 'Annual OxyContin sales reach $1.1 billion; reports of widespread abuse flooding into the company' },
    { date: '2002', event: 'Internal Purdue documents show company tracked specific "OxyContin abuser" prescribers but failed to report them' },
    { date: '2004', event: 'OxyContin sales peak at $2.8 billion annually; opioid overdose deaths double from 1999 levels' },
    { date: '2007-05', event: 'Purdue Pharma and three executives plead guilty to federal misbranding charges; company pays $634.5 million fine' },
    { date: '2007-2012', event: 'Despite conviction, Purdue continues aggressive marketing; Sacklers extract billions in profits from the company' },
    { date: '2010', event: 'Purdue releases "abuse-deterrent" OxyContin reformulation  -  critics say it was timed to extend patents, not save lives' },
    { date: '2017', event: 'Opioid crisis declared a national public health emergency; over 47,000 Americans die from opioid overdoses that year' },
    { date: '2018', event: 'Massachusetts AG Maura Healey files lawsuit naming individual Sackler family members for the first time' },
    { date: '2019-09', event: 'Purdue Pharma files for Chapter 11 bankruptcy as a proposed resolution to thousands of lawsuits' },
    { date: '2020', event: 'Purdue pleads guilty to federal criminal charges for the second time; DOJ announces $8.3 billion settlement' },
    { date: '2021', event: 'Judge approves Purdue bankruptcy plan granting Sacklers immunity from civil suits in exchange for $4.5 billion payment' },
    { date: '2024', event: 'Supreme Court rejects Purdue bankruptcy deal that shielded Sacklers from lawsuits; case returns to lower courts' },
  ],
  legalOutcomes: [
    { defendant: 'Purdue Pharma (2007)', charge: 'Federal misbranding of OxyContin', outcome: '$634.5 million fine; three executives plead guilty to misdemeanors' },
    { defendant: 'Purdue Pharma (2020)', charge: 'Conspiracy to defraud the United States, violating anti-kickback statutes', outcome: 'Pled guilty to federal criminal charges; $8.3 billion settlement (largely uncollectible)' },
    { defendant: 'Sackler Family', charge: 'Personal liability for opioid crisis', outcome: 'Proposed $6 billion payment in exchange for civil lawsuit immunity; Supreme Court rejected initial deal in 2024' },
    { defendant: 'Michael Friedman', charge: 'Misbranding a pharmaceutical', outcome: 'Pled guilty; $19 million fine, 400 hours community service, no prison time' },
    { defendant: 'Howard Udell', charge: 'Misbranding a pharmaceutical', outcome: 'Pled guilty; fined $8 million, community service, no prison time' },
    { defendant: 'Paul Goldenheim', charge: 'Misbranding a pharmaceutical', outcome: 'Pled guilty; fined $7.5 million, community service, no prison time' },
    { defendant: 'Richard Sackler', charge: 'Named defendant in multiple state suits', outcome: 'No personal criminal charges; protected by corporate structure and bankruptcy proceedings' },
    { defendant: 'McKinsey & Company', charge: 'Advising Purdue on how to "turbocharge" OxyContin sales', outcome: 'Settled for $573 million with 47 states in 2021' },
  ],
  charges: [
    { statute: '21 U.S.C. § 331  -  Misbranding a Drug', description: 'OxyContin was marketed with false claims about addiction risk and safety', count: 'Purdue pled guilty in 2007 and again in 2020' },
    { statute: '18 U.S.C. § 371  -  Conspiracy to Defraud the United States', description: 'Systematic scheme to impede the DEA\'s efforts to combat diversion of prescription opioids', count: 'Part of 2020 guilty plea' },
    { statute: '42 U.S.C. § 1320a-7b  -  Anti-Kickback Statute', description: 'Purdue paid doctors to prescribe OxyContin through speaker programs and other inducements', count: 'Part of 2020 settlement' },
    { statute: '18 U.S.C. § 1341  -  Mail Fraud', description: 'Misleading materials sent to doctors and patients about OxyContin\'s safety profile', count: 'Investigated but resolved through settlement' },
    { statute: '21 U.S.C. § 841  -  Drug Trafficking Parallel', description: 'Knowingly supplying drugs to "pill mills" and suspicious prescribers without reporting', count: 'Basis for state-level trafficking analogies' },
    { statute: 'State Consumer Protection Laws (Various)', description: 'Deceptive marketing practices targeting doctors and patients across all 50 states', count: 'Thousands of consolidated lawsuits' },
    { statute: '18 U.S.C. § 1962  -  RICO', description: 'Operating an enterprise through a pattern of racketeering to maximize opioid sales', count: 'Alleged in multiple state and private suits' },
    { statute: '11 U.S.C. § 548  -  Fraudulent Transfer (Bankruptcy Code)', description: 'Sacklers extracted $10.7 billion from Purdue in the years before bankruptcy filing', count: 'Central issue in bankruptcy proceedings' },
  ],
  coverup: [
    'Purdue\'s own studies showed OxyContin wore off before 12 hours in many patients, but they marketed it as 12-hour relief to justify premium pricing  -  forcing doctors to increase doses rather than frequency, fueling addiction',
    'Internal emails from Richard Sackler blamed addicts rather than the drug: "We have to hammer on abusers in every way possible. They are the culprits and the problem."',
    'The FDA reviewer who approved OxyContin\'s misleading label  -  Curtis Wright  -  left the agency and took a $400,000/year job at Purdue Pharma within two years',
    'Purdue maintained a database called "Region Zero" tracking doctors who were running pill mills but failed to report them to the DEA, allowing massive diversion to continue',
    'The Sackler family extracted over $10.7 billion from Purdue through dividends and payments in the decade before filing bankruptcy, shielding personal wealth from creditors',
    'When the 2007 conviction occurred, only low-level executives took the fall  -  the Sacklers faced zero personal consequences and continued profiting for another 12 years',
    'Purdue hired McKinsey & Company, which advised them to "turbocharge" sales and even suggested paying rebates to pharmacies for every OxyContin overdose  -  essentially profiting from the deaths they caused',
    'The company funded over 20,000 "pain education" programs for doctors, which were thinly veiled marketing events designed to normalize high-dose opioid prescribing',
    'After reformulating OxyContin to be "abuse-deterrent" in 2010, many users switched to heroin and fentanyl  -  a predictable consequence Purdue failed to address or warn about',
  ],
  sources: [
    { title: 'Empire of Pain: The Secret History of the Sackler Dynasty  -  Patrick Radden Keefe', url: 'https://www.penguinrandomhouse.com/books/612785/empire-of-pain-by-patrick-radden-keefe/', date: '2021' },
    { title: 'Massachusetts AG Complaint Against Purdue Pharma and Sacklers', url: 'https://www.mass.gov/lists/ag-purdue-pharma-lawsuit-documents', date: '2019-01-31' },
    { title: 'DOJ Announces Global Resolution of Criminal and Civil Investigations with Purdue Pharma', url: 'https://www.justice.gov/opa/pr/justice-department-announces-global-resolution-criminal-and-civil-investigations-opioid', date: '2020-10-21' },
    { title: 'Supreme Court Rejects Purdue Pharma Bankruptcy Deal Shielding Sacklers', url: 'https://www.supremecourt.gov/opinions/23pdf/23-124_k536.pdf', date: '2024-06-27' },
    { title: 'OxyContin Marketing and Misbranding  -  GAO Report', url: 'https://www.gao.gov/products/gao-04-110', date: '2003-12' },
    { title: 'CDC  -  Understanding the Opioid Overdose Epidemic', url: 'https://www.cdc.gov/opioids/basics/epidemic.html', date: 'Updated 2023' },
    { title: 'How McKinsey Helped the Opioid Crisis  -  NYT Investigation', url: 'https://www.nytimes.com/2020/11/27/business/mckinsey-purdue-oxycontin-opioids.html', date: '2020-11-27' },
    { title: 'Purdue Pharma 2007 Guilty Plea  -  DOJ Press Release', url: 'https://www.justice.gov/archive/opa/pr/2007/May/07_civ_388.html', date: '2007-05-10' },
    { title: 'Art of the Steal: Sackler Family\'s Opioid Fortune  -  Forbes', url: 'https://www.forbes.com/sites/nathanvardi/2017/10/16/the-oxycontin-clan-the-14-billion-newcomer-to-forbes-2015-list-of-richest-u-s-families/', date: '2017-10-16' },
  ],
};

export default function PurdueOxyContin() {
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
