'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowLeft, AlertTriangle, Users, Calendar, FileText, ExternalLink, Scale, ShieldAlert, Skull } from 'lucide-react';
import GlitchText from '@/components/effects/GlitchText';

const investigation = {
  title: 'Corporate Homicide',
  subtitle: 'When Corporations Knowingly Kill People for Profit — The Mathematics of Murder',
  severity: 'critical',
  status: 'SYSTEMIC — ONGOING',
  summary: 'Across industries, corporations have knowingly manufactured products that kill people, buried the evidence, and calculated that paying wrongful death settlements was cheaper than fixing the problem. Ford determined that $11 per car was too expensive to prevent Pinto fuel tank explosions that incinerated passengers. Boeing disabled safety features to avoid pilot retraining costs, killing 346 people in two crashes. Union Carbide\'s negligence in Bhopal killed over 16,000 people and poisoned 500,000 more. The tobacco industry suppressed cancer research for decades, killing 480,000 Americans per year. Purdue Pharma launched OxyContin knowing it was addictive, fueling an epidemic that has killed over 500,000 Americans. Johns-Manville knew asbestos caused cancer in the 1930s and hid it for 40 years. 3M and DuPont knowingly contaminated water supplies with PFAS "forever chemicals" linked to cancer, immune suppression, and birth defects. These are not accidents — they are calculated decisions where human life was assigned a dollar value and found wanting.',
  keyFigures: [
    { name: 'Lee Iacocca', role: 'Ford President — Imposed $2,000 cost ceiling on Pinto, rejected $11/car fuel tank fix', href: '/entities/individuals/lee-iacocca', status: 'Deceased' },
    { name: 'Dennis Muilenburg', role: 'Boeing CEO — Oversaw 737 MAX development, resisted grounding after first crash', href: '/entities/individuals/dennis-muilenburg', status: 'Forced Out' },
    { name: 'Greg Smith', role: 'Boeing Chief Technical Pilot — Concealed MCAS system from regulators and pilots', href: '/entities/individuals/greg-smith-boeing', status: 'Indicted' },
    { name: 'Warren Anderson', role: 'Union Carbide CEO — Fled India after Bhopal disaster, never extradited', href: '/entities/individuals/warren-anderson', status: 'Deceased' },
    { name: 'Richard Sackler', role: 'Purdue Pharma President — Directed aggressive OxyContin marketing, pushed higher doses', href: '/entities/individuals/richard-sackler', status: 'Settled' },
    { name: 'Raymond Sackler', role: 'Purdue Pharma Co-founder — Oversaw company during opioid marketing expansion', href: '/entities/individuals/raymond-sackler', status: 'Deceased' },
    { name: 'Kathe Sackler', role: 'Purdue Board Member — Approved marketing strategies targeting high-volume prescribers', href: '/entities/individuals/kathe-sackler', status: 'Settled' },
    { name: 'David Sackler', role: 'Purdue Board Member — Withdrew $300M+ from company as lawsuits mounted', href: '/entities/individuals/david-sackler', status: 'Settled' },
    { name: 'Mortimer Sackler', role: 'Purdue Pharma Co-founder — Built family fortune on addictive painkillers', href: '/entities/individuals/mortimer-sackler', status: 'Deceased' },
    { name: 'Craig Landau', role: 'Purdue Pharma CEO — Led company through guilty plea and bankruptcy', href: '/entities/individuals/craig-landau', status: 'Resigned' },
    { name: 'Robert Clifford', role: 'Boeing Whistleblower Attorney — Exposed internal safety culture failures', href: '/entities/individuals/robert-clifford', status: 'Active' },
    { name: 'Don Blankenship', role: 'Massey Energy CEO — Ignored safety warnings before Upper Big Branch mine explosion killed 29', href: '/entities/individuals/don-blankenship', status: 'Convicted' },
    { name: 'Jeffrey Wigand', role: 'Brown & Williamson VP — Whistleblower who exposed tobacco industry\'s nicotine manipulation', href: '/entities/individuals/jeffrey-wigand', status: 'Key Witness' },
    { name: 'Thomas Stephens', role: 'Johns-Manville CEO — Oversaw decades of asbestos cover-up and worker exposure', href: '/entities/individuals/thomas-stephens', status: 'Deceased' },
    { name: 'Rob Bilott', role: 'Attorney — Exposed DuPont\'s PFAS contamination of drinking water in Parkersburg, WV', href: '/entities/individuals/rob-bilott', status: 'Active' },
    { name: 'Mary Barra', role: 'GM CEO — Led company during ignition switch scandal that killed 124 people', href: '/entities/individuals/mary-barra', status: 'Active' },
  ],
  timeline: [
    { date: '1930s', event: 'Johns-Manville internal memos confirm asbestos causes fatal lung disease; company suppresses findings and continues production' },
    { date: '1953', event: 'Tobacco industry meets at Plaza Hotel NYC, creates Tobacco Industry Research Committee to manufacture doubt about cancer link' },
    { date: '1965', event: 'Internal GM research confirms Corvair suspension design is dangerous; Ralph Nader publishes "Unsafe at Any Speed"' },
    { date: '1968', event: 'Ford begins Pinto development under Lee Iacocca\'s $2,000 cost ceiling — fuel tank placement known to be dangerous' },
    { date: '1973', event: 'Ford internal "Pinto Memo" calculates cost-benefit: $11/car fix vs. $200,000 per death x 180 projected deaths = cheaper to let people burn' },
    { date: '1977', event: 'Mother Jones publishes "Pinto Madness" exposing Ford\'s cost-benefit analysis of human life' },
    { date: '1984-12-03', event: 'Union Carbide pesticide plant in Bhopal, India leaks methyl isocyanate gas; 3,800 killed immediately, 16,000+ total deaths' },
    { date: '1994', event: 'Mississippi Attorney General Mike Moore files first state lawsuit against Big Tobacco; seven CEOs testify under oath nicotine is not addictive' },
    { date: '1996', event: 'Jeffrey Wigand appears on 60 Minutes, exposing Brown & Williamson\'s knowledge that nicotine is addictive and cigarettes cause cancer' },
    { date: '1998', event: 'Master Settlement Agreement: Big Tobacco pays $206 billion over 25 years — roughly $400 per death per year' },
    { date: '1999', event: 'DuPont internal studies confirm PFAS chemicals cause cancer in workers; company conceals findings for years' },
    { date: '2004', event: 'Merck withdraws Vioxx after internal studies show doubled heart attack risk; 27,785 estimated cardiac deaths during marketing period' },
    { date: '2007', event: 'Purdue Pharma pleads guilty to misbranding OxyContin, pays $600M fine — fraction of $35B+ in total sales' },
    { date: '2010-04-05', event: 'Upper Big Branch mine explosion kills 29 miners; Massey Energy had 600+ safety violations in prior year' },
    { date: '2014', event: 'GM recalls 30 million vehicles for faulty ignition switches; GM knew of defect for 13 years, 124 people died' },
    { date: '2018-10-29', event: 'Lion Air Flight 610 crashes in Indonesia, killing 189 people; Boeing MCAS system implicated' },
    { date: '2019-03-10', event: 'Ethiopian Airlines Flight 302 crashes, killing 157 people; same Boeing MCAS failure; 737 MAX grounded worldwide' },
    { date: '2020', event: '3M reaches $850M settlement over PFAS contamination; company documents show 50+ years of concealing toxicity data' },
    { date: '2021-09-01', event: 'Purdue Pharma bankruptcy plan approved; Sackler family pays $4.5B for immunity from civil suits — keeps $6B+ fortune' },
    { date: '2024-01-05', event: 'Boeing 737 MAX door plug blows out on Alaska Airlines Flight 1282; renewed scrutiny of Boeing safety culture' },
    { date: '2024-07', event: 'Boeing agrees to plead guilty to conspiracy to defraud the United States over 737 MAX crashes' },
  ],
  legalOutcomes: [
    { defendant: 'Ford Motor Company', charge: 'Reckless Homicide (Elkhart County, IN)', outcome: 'Acquitted 1980 — first time corporation charged with murder; set precedent despite acquittal' },
    { defendant: 'Big Tobacco (Philip Morris, RJR, et al.)', charge: 'Consumer Fraud / RICO', outcome: '$206 billion Master Settlement Agreement (1998); DOJ RICO verdict (2006) — no executives jailed' },
    { defendant: 'Purdue Pharma', charge: 'Misbranding / Fraud', outcome: 'Pled guilty 2007 ($600M), pled guilty again 2020 ($8.3B); Sackler family received civil immunity' },
    { defendant: 'Union Carbide / Dow Chemical', charge: 'Criminal Negligence (India)', outcome: 'Warren Anderson declared absconder; $470M settlement — roughly $500 per victim' },
    { defendant: 'Don Blankenship (Massey Energy)', charge: 'Conspiracy to violate mine safety standards', outcome: 'Convicted 2015; sentenced to 1 year in prison for killing 29 miners' },
    { defendant: 'General Motors', charge: 'Deferred Prosecution Agreement', outcome: '$900M settlement for ignition switch deaths; no individual executives charged' },
    { defendant: 'Boeing', charge: 'Conspiracy to Defraud the United States', outcome: 'Deferred prosecution 2021 ($2.5B); guilty plea 2024 after DPA violation' },
    { defendant: 'DuPont / Chemours', charge: 'Environmental Contamination', outcome: '$671M class-action settlement for PFAS contamination; no criminal charges' },
    { defendant: 'Johnson & Johnson', charge: 'Fraud / Failure to Warn', outcome: '$8.9B talc-asbestos settlement proposal for cancer victims; ongoing litigation' },
    { defendant: '3M Company', charge: 'Environmental Contamination (PFAS)', outcome: '$10.3B settlement with public water systems (2023); no criminal charges' },
  ],
  charges: [
    { statute: '18 U.S.C. § 1001', description: 'False Statements — Corporations repeatedly lied to regulators about product safety data', count: 'Multiple counts across industries' },
    { statute: '18 U.S.C. § 1341/1343', description: 'Wire/Mail Fraud — Fraudulent marketing of dangerous products to consumers', count: 'Thousands of counts (Purdue, J&J, tobacco)' },
    { statute: '18 U.S.C. § 371', description: 'Conspiracy to Defraud the United States — Boeing\'s concealment of MCAS from FAA', count: '1 count (Boeing guilty plea 2024)' },
    { statute: '18 U.S.C. § 1962 (RICO)', description: 'Racketeering — Tobacco industry\'s coordinated decades-long fraud conspiracy', count: 'DOJ RICO verdict against all major tobacco companies (2006)' },
    { statute: '21 U.S.C. § 331', description: 'Misbranding of Drugs — Purdue\'s false claims about OxyContin addiction risk', count: 'Multiple counts (2007 and 2020 guilty pleas)' },
    { statute: '30 U.S.C. § 820', description: 'Mine Safety Violations — Massey Energy\'s systematic disregard of safety standards', count: '600+ violations at Upper Big Branch in year before explosion' },
    { statute: '49 U.S.C. § 46316', description: 'Aircraft Safety Fraud — Providing false information to FAA during certification', count: 'Multiple counts (Boeing 737 MAX)' },
    { statute: '42 U.S.C. § 6928', description: 'RCRA Violations — Illegal disposal of hazardous waste (PFAS, chemical contamination)', count: 'Multiple counts across PFAS manufacturers' },
    { statute: 'State Manslaughter/Homicide Statutes', description: 'Knowing manufacture and sale of products certain to cause death', count: 'Rarely charged — corporate veil protects executives' },
    { statute: '15 U.S.C. § 2068', description: 'Consumer Product Safety Act violations — Failure to report known product defects', count: 'Multiple (GM ignition switch, Ford Pinto, Boeing)' },
    { statute: '18 U.S.C. § 1519', description: 'Obstruction — Destruction of evidence related to product safety defects', count: 'Multiple (tobacco document destruction, GM email purges)' },
  ],
  coverup: [
    'Ford\'s 1973 internal memo explicitly calculated that paying $200,000 per death for an estimated 180 burn deaths was cheaper than the $11-per-car fuel tank fix — the document literally priced human life and chose profit.',
    'The tobacco industry created the Council for Tobacco Research in 1954 specifically to manufacture scientific doubt about the cancer link. Internal documents later revealed executives knew cigarettes caused cancer as early as 1953.',
    'Seven tobacco CEOs testified under oath before Congress in 1994 that nicotine is not addictive, despite internal company research proving the opposite for decades.',
    'Boeing concealed the existence of the MCAS flight control system from pilots and airlines to avoid costly retraining requirements. Internal messages showed employees joking about the plane being "designed by clowns supervised by monkeys."',
    'Purdue Pharma\'s internal slogan was "the blizzard of Rx" — flooding communities with prescriptions. Company documents show they specifically targeted Appalachian communities with high rates of disability and pain.',
    'Johns-Manville\'s corporate medical director wrote in 1966: "As long as the man is not disabled, it is felt that he should not be told of his condition so that he does not become unduly alarmed." Workers were literally not told they were dying.',
    'DuPont\'s own scientists found PFAS in workers\' blood in the 1970s and linked it to cancer, birth defects, and immune system damage. The company classified the research and continued dumping chemicals into waterways for decades.',
    'General Motors knew about the ignition switch defect for 13 years before issuing a recall. A GM attorney ordered employees to never use words like "defect," "safety," or "problem" in internal communications — they called them "issues."',
    'After the Bhopal disaster, Union Carbide CEO Warren Anderson was arrested in India but released on bail and fled the country. He was declared a fugitive by Indian courts but was never extradited by the United States.',
    'The Sackler family withdrew over $10 billion from Purdue Pharma as the opioid crisis accelerated, sheltering assets in trusts and overseas accounts before the company declared bankruptcy to shield itself from lawsuits.',
  ],
  sources: [
    { title: 'Mother Jones: "Pinto Madness" — The Ford Pinto Cost-Benefit Memo', url: 'https://www.motherjones.com/politics/1977/09/pinto-madness/', date: 'Sep 1977' },
    { title: 'The New York Times: "Boeing Reaches $2.5 Billion Settlement in 737 MAX Crashes"', url: 'https://www.nytimes.com/2021/01/07/business/boeing-settlement-justice-department.html', date: 'Jan 2021' },
    { title: 'House Committee on Transportation: Final Report on Boeing 737 MAX', url: 'https://transportation.house.gov/committee-activity/boeing-737-max-702702', date: 'Sep 2020' },
    { title: 'UCSF Truth Tobacco Industry Documents Archive', url: 'https://www.industrydocuments.ucsf.edu/tobacco/', date: 'Ongoing' },
    { title: 'The Guardian: "Bhopal Disaster — 40 Years On"', url: 'https://www.theguardian.com/environment/bhopal', date: 'Dec 2024' },
    { title: 'Reuters: "The Sackler Family\'s Plan to Keep Its Billions"', url: 'https://www.reuters.com/investigates/special-report/usa-opioids-sackler/', date: '2019' },
    { title: 'The New York Times: "The Chemicals in Your Water — PFAS Investigation"', url: 'https://www.nytimes.com/2024/pfas-forever-chemicals', date: '2024' },
    { title: 'NPR: "Upper Big Branch Mine Disaster Investigation"', url: 'https://www.npr.org/series/upper-big-branch-mine-disaster', date: '2010-2015' },
    { title: 'Department of Justice: United States v. Purdue Pharma', url: 'https://www.justice.gov/opa/pr/opioid-manufacturer-purdue-pharma-admits-guilt', date: 'Oct 2020' },
    { title: 'ProPublica: "Boeing\'s Safety Culture and the 737 MAX"', url: 'https://www.propublica.org/series/boeing', date: '2019-2024' },
    { title: 'The Intercept: "Dark Waters — The DuPont PFAS Cover-Up"', url: 'https://theintercept.com/series/the-teflon-toxin/', date: '2015-2020' },
  ],
};

export default function CorporateHomicidePage() {
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
