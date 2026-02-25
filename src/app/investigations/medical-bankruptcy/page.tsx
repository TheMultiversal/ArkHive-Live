'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowLeft, AlertTriangle, Users, Calendar, FileText, ExternalLink, Scale, ShieldAlert, Skull } from 'lucide-react';
import GlitchText from '@/components/effects/GlitchText';

const investigation = {
  title: 'Medical Bankruptcy in America',
  subtitle: 'The Only Wealthy Nation Where Getting Sick Can Destroy Your Life  -  100 Million Americans Carry Medical Debt While 68,000 Die Annually From Lack of Insurance',
  severity: 'critical',
  status: 'ONGOING  -  SYSTEMIC CRISIS',
  summary: 'The United States is the only wealthy nation on Earth without universal healthcare, and the consequences are catastrophic. Medical debt is the number one cause of bankruptcy, affecting an estimated 530,000 families annually. Over 100 million Americans carry medical debt, with total medical debt exceeding $220 billion. An estimated 68,000 Americans die every year from preventable causes because they lack health insurance. Hospitals charge wildly inflated prices  -  a $30 bag of saline costs $700, an aspirin costs $25  -  while insurance companies deny claims as a business model. The healthcare industry spends over $700 million annually lobbying Congress to prevent universal coverage. Americans spend $4.3 trillion on healthcare annually  -  17.3% of GDP  -  yet have worse health outcomes than nations spending a fraction of that. The system is not broken; it is working exactly as designed  -  to maximize profit at the cost of human life.',
  keyFigures: [
    { name: 'Joe Lieberman', role: 'Senator who killed the public option in the ACA; received $1.5M+ from insurance industry; caucused with Democrats', href: '/entities/individuals/joe-lieberman', status: 'Deceased (2024)' },
    { name: 'Max Baucus', role: 'Senate Finance Committee chair who excluded single-payer advocates from ACA hearings; took $5M from health industry', href: '/entities/individuals/max-baucus', status: 'Retired' },
    { name: 'Rick Scott', role: 'Before becoming Senator, was CEO of Columbia/HCA when it committed the largest Medicare fraud in history ($1.7B fine)', href: '/entities/individuals/rick-scott', status: 'Active  -  US Senator' },
    { name: 'Wendell Potter', role: 'Former Cigna VP who became whistleblower exposing insurance industry tactics to deny coverage', href: '/entities/individuals/wendell-potter', status: 'Active  -  journalist and author' },
    { name: 'Stephen Hemsley', role: 'UnitedHealth Group CEO ($300M+ compensation) who oversaw company while it systematically denied claims', href: '/entities/individuals/stephen-hemsley', status: 'Active' },
    { name: 'Karen Ignagni', role: 'AHIP president who led insurance industry lobbying against public option; promised Obama cooperation then sabotaged reform', href: '/entities/individuals/karen-ignagni', status: 'Active  -  CEO EmblemHealth' },
    { name: 'Billy Tauzin', role: 'PhRMA president who negotiated deal with Obama to protect drug pricing in exchange for ACA support', href: '/entities/individuals/billy-tauzin', status: 'Retired' },
    { name: 'Liz Fowler', role: 'Senate staffer who wrote much of the ACA; previously VP at WellPoint (now Anthem); returned to industry after', href: '/entities/individuals/liz-fowler', status: 'Active  -  CMS Innovation Center' },
    { name: 'Bernie Sanders', role: 'Senator who has led fight for Medicare for All; held hearing on healthcare profiteering', href: '/entities/individuals/bernie-sanders', status: 'Active' },
    { name: 'Barack Obama', role: 'President who signed ACA but dropped public option and single-payer under industry pressure', href: '/entities/individuals/barack-obama', status: 'Active' },
    { name: 'Becky Barr', role: 'Emergency room patient charged $18,000 for a broken arm  -  became symbol of surprise billing crisis', href: '/entities/individuals/becky-barr', status: 'Active advocate' },
    { name: 'R.J. Lehmann', role: 'Patient advocates who documented hospital chargemaster pricing  -  $25 aspirin, $700 saline bags', href: '/entities/individuals/rj-lehmann', status: 'Active' },
  ],
  timeline: [
    { date: '1945', event: 'Truman proposes national health insurance; AMA calls it "socialized medicine" and spends $1.5M defeating it' },
    { date: '1965', event: 'Medicare and Medicaid signed into law; provide coverage for elderly and poor but leave working Americans in private system' },
    { date: '1971', event: 'Nixon proposes employer mandate with private insurance; Kennedy pushes single-payer; neither passes; for-profit HMOs authorized' },
    { date: '1993', event: 'Clinton healthcare plan dies after $100M+ insurance industry campaign ("Harry and Louise" ads)' },
    { date: '1997', event: 'Columbia/HCA (Rick Scott, CEO) charged with largest Medicare fraud in history; company pays $1.7 billion in fines' },
    { date: '2000', event: 'WHO ranks US healthcare system 37th in world despite spending more per capita than any other nation' },
    { date: '2005', event: 'Bankruptcy Abuse Prevention Act makes it harder to discharge all debt including medical debt; medical remains #1 cause' },
    { date: '2007', event: 'Study finds 62% of all bankruptcies are medical-related; 78% of those had insurance at the time illness began' },
    { date: '2009', event: 'Senate Finance Committee excludes single-payer advocates from ACA hearings; arrests doctors who protest' },
    { date: '2009', event: 'Joe Lieberman threatens to filibuster ACA if it includes public option; Obama drops public option to save bill' },
    { date: 'March 2010', event: 'Affordable Care Act signed; expands coverage to 20 million but preserves private insurance profit system' },
    { date: '2010-2020', event: '12 Republican-led states refuse Medicaid expansion, leaving 2.2 million people in coverage gap  -  too poor for ACA, denied Medicaid' },
    { date: '2013', event: 'Time magazine publishes "Bitter Pill" exposing hospital chargemaster pricing: $1.50 Tylenol billed at $15, $30 saline at $700' },
    { date: '2019', event: 'Study finds 137 million Americans face financial hardship from medical costs; #1 GoFundMe category is medical bills' },
    { date: '2020', event: 'COVID-19 pandemic exposes healthcare system failures; 27 million lose employer-based insurance; uninsured face devastating bills' },
    { date: '2022', event: 'Consumer Financial Protection Bureau finds $88 billion in medical debt on credit reports; begins cracking down on medical debt collections' },
    { date: '2023', event: 'No Surprises Act takes effect limiting surprise billing; insurance companies find new ways to shift costs to patients' },
    { date: '2024', event: 'KFF survey finds 100 million Americans carry medical debt; 41% of adults have debt from medical or dental care' },
    { date: '2024', event: 'UnitedHealth Group reports $371 billion in revenue  -  the largest company in healthcare  -  while denying claims at unprecedented rates' },
  ],
  legalOutcomes: [
    { defendant: 'Columbia/HCA (Rick Scott)', charge: 'Largest Medicare and Medicaid fraud in US history  -  false claims, kickbacks, billing for services not provided', outcome: 'Company paid $1.7 billion in fines; CEO Rick Scott left with $300M+ golden parachute; later elected Governor then Senator' },
    { defendant: 'Anthem/WellPoint', charge: 'Systematic denial of claims and rescission of policies when patients got sick', outcome: 'Multiple state AG settlements; practices partially curtailed by ACA but denial rates remain high' },
    { defendant: 'UnitedHealth Group', charge: 'AI-powered claim denials overriding physician decisions; DOJ investigation into Medicare Advantage overbilling', outcome: 'DOJ investigating billions in potential Medicare fraud; class action lawsuits pending' },
    { defendant: 'Various Hospitals (chargemaster)', charge: 'Charging wildly inflated prices for basic medical supplies and services', outcome: 'CMS price transparency rule (2021) requires hospitals to post prices; compliance remains low and enforcement weak' },
    { defendant: 'Surprise Billing Providers', charge: 'Out-of-network charges to patients at in-network facilities  -  sometimes tens of thousands of dollars', outcome: 'No Surprises Act (2022) provides some protection; arbitration process often favors providers' },
    { defendant: 'Medical Debt Collectors', charge: 'Aggressive collection practices including wage garnishment, credit score destruction, and lawsuits against patients', outcome: 'CFPB proposed rule to remove medical debt from credit reports; 3 credit bureaus removed debts under $500 voluntarily' },
    { defendant: 'Insurance Industry', charge: 'Spending $700M+ annually lobbying Congress to prevent universal healthcare', outcome: 'No accountability; lobbying continues to block Medicare for All, public option, and price controls' },
    { defendant: 'State Governments (Medicaid non-expansion)', charge: '12 states refused Medicaid expansion, leaving 2.2 million residents in coverage gap', outcome: 'Supreme Court ruled Medicaid expansion optional in NFIB v. Sebelius (2012); millions remain uninsured by political choice' },
  ],
  charges: [
    { statute: 'Universal Declaration of Human Rights  -  Article 25', description: 'The right to healthcare is recognized as a fundamental human right in international law; the US is the only wealthy nation that denies this right to its citizens', count: '27.5 million Americans have no health insurance; 68,000 die annually from preventable causes due to lack of coverage' },
    { statute: 'False Claims Act  -  31 U.S.C. § 3729 (Healthcare Fraud)', description: 'Hospitals and insurance companies submit false claims, inflate charges, and bill for unnecessary services', count: 'DOJ recovers $2-3 billion annually in healthcare fraud cases; Columbia/HCA: $1.7B; estimated fraud exceeds $100B/year' },
    { statute: 'Anti-Kickback Statute  -  42 U.S.C. § 1320a-7b', description: 'Pharmaceutical companies, device makers, and hospitals engage in illegal referral schemes and financial relationships', count: 'Hundreds of prosecutions annually; billions in settlements; system remains rife with financial conflicts' },
    { statute: 'ERISA  -  Employee Retirement Income Security Act (Preemption Abuse)', description: 'Federal ERISA law preempts state consumer protections, allowing self-insured employer plans to deny claims without state oversight', count: '130+ million Americans in ERISA-governed plans with limited legal recourse when claims are denied' },
    { statute: 'Antitrust Violations  -  Hospital Consolidation', description: 'Hospital mergers have created regional monopolies that drive up prices; FTC has challenged too few mergers too late', count: 'Hospital prices are 12% higher in concentrated markets; 75% of metro areas are highly concentrated' },
    { statute: 'Consumer Protection Violations  -  Chargemaster Pricing', description: 'Hospitals charge uninsured patients 5-10x what insurers pay for identical services through inflated list prices', count: '$30 saline bags billed at $700; $10 aspirin at $25; emergency room visits averaging $2,200 vs. $200 actual cost' },
    { statute: 'Breach of Fiduciary Duty  -  Insurance Claim Denials', description: 'Insurance companies deny claims using AI algorithms and undertrained reviewers, prioritizing profit over patient care', count: 'Prior authorization denials affect 35% of patients; UnitedHealth AI denial rate flagged by Congress' },
    { statute: 'Wrongful Death  -  Systemic', description: 'The failure to provide universal healthcare constitutes a systemic, ongoing denial of life-saving care', count: '68,000 Americans die annually from lack of insurance; millions more suffer delayed diagnosis and treatment' },
  ],
  coverup: [
    'The insurance industry spent over $100 million on the "Harry and Louise" ad campaign in 1993-1994 to kill Clinton\'s healthcare reform, framing universal coverage as government tyranny.',
    'During the ACA debate, the Senate Finance Committee literally had single-payer advocates arrested when they tried to testify  -  physically removing doctors from the hearing room.',
    'Joe Lieberman killed the public option after receiving $1.5 million from the insurance industry, but it was presented as a principled policy disagreement rather than corruption.',
    'Liz Fowler, the WellPoint VP who wrote much of the ACA, cycled between industry and government  -  the insurance industry literally wrote its own regulation.',
    'Rick Scott oversaw the largest Medicare fraud in history ($1.7 billion in fines) at Columbia/HCA, then was elected Governor and Senator of Florida with no legal consequences for himself.',
    'The "#1 GoFundMe category is medical bills" stat reveals that America has privatized the social safety net  -  crowdfunding for healthcare is presented as heartwarming rather than a systemic failure.',
    'Hospital price transparency rules required since 2021 are widely ignored  -  a CMS study found only 36% of hospitals fully complied, and enforcement penalties are negligible.',
    'Insurance companies use AI-powered algorithms to automatically deny claims at scale, with some systems denying claims in an average of 1.2 seconds without human review.',
    'The US spends $4.3 trillion on healthcare (17.3% of GDP) yet ranks last among wealthy nations in access, equity, and outcomes  -  proving the system maximizes revenue extraction, not health.',
  ],
  sources: [
    { title: 'Medical Debt in America  -  Kaiser Family Foundation', url: 'https://www.kff.org/health-costs/issue-brief/the-burden-of-medical-debt-in-the-united-states/', date: '2024' },
    { title: 'Bitter Pill: Why Medical Bills Are Killing Us  -  Time Magazine', url: 'https://time.com/198/bitter-pill-why-medical-bills-are-killing-us/', date: 'February 2013' },
    { title: 'Medical Bankruptcy in the United States  -  American Journal of Public Health', url: 'https://ajph.aphapublications.org/doi/10.2105/AJPH.2018.304901', date: '2019' },
    { title: 'Dying of Whiteness: How Racial Resentment Is Killing America\'s Heartland  -  Jonathan Metzl', url: 'https://www.basicbooks.com/titles/jonathan-m-metzl/dying-of-whiteness/9781541644984/', date: '2019' },
    { title: 'Health Insurance Industry Lobbying  -  OpenSecrets', url: 'https://www.opensecrets.org/federal-lobbying/industries/summary?cycle=2023&id=F09', date: 'Ongoing' },
    { title: 'Columbia/HCA Medicare Fraud Settlement  -  Department of Justice', url: 'https://www.justice.gov/archive/dag/pubdoc/hospitalfacorpagree.htm', date: '2000' },
    { title: 'Mirror, Mirror: US Healthcare Compared to Other Countries  -  Commonwealth Fund', url: 'https://www.commonwealthfund.org/publications/fund-reports/2021/aug/mirror-mirror-2021-reflecting-poorly', date: '2021' },
    { title: 'Deadly Consequences: Uninsured and Underinsured in America  -  Families USA', url: 'https://familiesusa.org/resources/dying-for-coverage-the-deadly-consequences-of-being-uninsured/', date: '2023' },
    { title: 'CFPB Report on Medical Debt  -  Consumer Financial Protection Bureau', url: 'https://www.consumerfinance.gov/data-research/research-reports/medical-debt-burden-in-the-united-states/', date: '2022' },
  ],
};

export default function MedicalBankruptcyPage() {
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
