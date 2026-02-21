'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowLeft, AlertTriangle, Users, Calendar, FileText, ExternalLink, Scale, ShieldAlert, Skull } from 'lucide-react';
import GlitchText from '@/components/effects/GlitchText';

const investigation = {
  title: 'Dark Money in American Politics',
  subtitle: 'How Billionaires Bought Democracy — Citizens United, Super PACs, and the Corporate Capture of Government',
  severity: 'critical',
  status: 'ONGOING — ESCALATING',
  summary: 'The 2010 Citizens United v. FEC Supreme Court decision unleashed an unprecedented flood of anonymous corporate money into American elections, fundamentally transforming the democratic process into an auction house for billionaires. Dark money — political spending by nonprofit organizations that are not required to disclose their donors — has surpassed $1 billion in federal elections since the ruling. The Koch brothers\' donor network alone spent over $889 million in the 2016 election cycle, rivaling the budgets of both major political parties. Groups like the Federalist Society, Judicial Crisis Network, and Crossroads GPS have funneled hundreds of millions in untraceable funds to reshape the judiciary, deregulate industries, and suppress voting rights. This is not politics. This is the hostile takeover of a nation.',
  keyFigures: [
    { name: 'Charles Koch', role: 'Co-founder of Koch Industries; architect of the Koch donor network spending $889M+ per election cycle to reshape American politics and policy', href: '/entities/individuals/charles-koch', status: 'Active — Billionaire donor' },
    { name: 'David Koch', role: 'Co-founder of Koch Industries; co-architect of the Koch political network and funder of Americans for Prosperity', href: '/entities/individuals/david-koch', status: 'Deceased (2019)' },
    { name: 'Sheldon Adelson', role: 'Casino magnate who donated over $500 million to Republican causes; single largest individual political donor in U.S. history', href: '/entities/individuals/sheldon-adelson', status: 'Deceased (2021)' },
    { name: 'Leonard Leo', role: 'Federalist Society co-chairman who secretly directed $1.6 billion in dark money to reshape the federal judiciary and overturn Roe v. Wade', href: '/entities/individuals/leonard-leo', status: 'Under investigation' },
    { name: 'Karl Rove', role: 'GOP strategist and co-founder of Crossroads GPS, a 501(c)(4) dark money group that spent $300M+ in undisclosed funds', href: '/entities/individuals/karl-rove', status: 'Active — Political operative' },
    { name: 'John Roberts', role: 'Chief Justice who authored the Citizens United majority opinion and gutted the Voting Rights Act in Shelby County v. Holder', href: '/entities/individuals/john-roberts', status: 'Active — Chief Justice' },
    { name: 'Anthony Kennedy', role: 'Wrote the Citizens United majority opinion declaring that corporate spending on elections cannot be limited under the First Amendment', href: '/entities/individuals/anthony-kennedy', status: 'Retired' },
    { name: 'Mitch McConnell', role: 'Senate Majority Leader who blocked campaign finance reform for decades and championed unlimited dark money in politics', href: '/entities/individuals/mitch-mcconnell', status: 'Active — Senator' },
    { name: 'Robert Mercer', role: 'Hedge fund billionaire who funded Breitbart, Cambridge Analytica, and poured tens of millions into far-right political operations', href: '/entities/individuals/robert-mercer', status: 'Active — Donor' },
    { name: 'Rebekah Mercer', role: 'Co-managed the Mercer family political empire; board member of Cambridge Analytica and key Trump transition figure', href: '/entities/individuals/rebekah-mercer', status: 'Active — Donor' },
    { name: 'Bradley Smith', role: 'Former FEC Chairman who systematically weakened campaign finance enforcement and advocacy for deregulation of political spending', href: '/entities/individuals/bradley-smith', status: 'Active — Legal advocate' },
    { name: 'Harlan Crow', role: 'Billionaire real estate magnate who spent lavishly on Supreme Court Justice Clarence Thomas while having interests before the Court', href: '/entities/individuals/harlan-crow', status: 'Active — Donor' },
    { name: 'Timothy Mellon', role: 'Banking heir who donated $150M+ to pro-Trump super PAC Make America Great Again Inc. in 2024 — largest single donation in U.S. history', href: '/entities/individuals/timothy-mellon', status: 'Active — Mega-donor' },
    { name: 'Peter Thiel', role: 'Tech billionaire who spent $30M+ to install hand-picked Senate candidates including J.D. Vance and Blake Masters', href: '/entities/individuals/peter-thiel', status: 'Active — Donor' },
  ],
  timeline: [
    { date: '1976-01-30', event: 'Buckley v. Valeo: Supreme Court rules that spending money on elections is a form of protected speech, striking down expenditure limits' },
    { date: '2002-03-27', event: 'Bipartisan Campaign Reform Act (McCain-Feingold) signed into law, banning soft money contributions to political parties' },
    { date: '2007-06-25', event: 'FEC v. Wisconsin Right to Life weakens McCain-Feingold by allowing issue ads funded by corporate money close to elections' },
    { date: '2010-01-21', event: 'Citizens United v. FEC: Supreme Court rules 5-4 that corporations and unions can spend unlimited money on elections' },
    { date: '2010-03-26', event: 'SpeechNow.org v. FEC: D.C. Circuit Court creates Super PACs — PACs that can accept unlimited contributions' },
    { date: '2010-06-08', event: 'DISCLOSE Act fails in Senate after Republican filibuster — would have required disclosure of dark money donors' },
    { date: '2012-11-06', event: 'First post-Citizens United presidential election sees $1B+ in outside spending; Sheldon Adelson alone spends $150M' },
    { date: '2013-06-25', event: 'Shelby County v. Holder: Roberts Court guts Voting Rights Act Section 5, enabling wave of voter suppression laws' },
    { date: '2014-04-02', event: 'McCutcheon v. FEC: Supreme Court strikes down aggregate limits on individual campaign contributions' },
    { date: '2016-11-08', event: 'Koch network spends $889M on 2016 cycle; dark money groups outspend parties in key Senate races' },
    { date: '2018-06-25', event: 'Janus v. AFSCME: Supreme Court weakens public sector unions, reducing a major counterweight to corporate political spending' },
    { date: '2020-01-01', event: 'Dark money in federal elections exceeds $1 billion cumulative since Citizens United' },
    { date: '2021-08-22', event: 'Barre Seid donates $1.6 billion to Leonard Leo\'s Marble Freedom Trust — largest known dark money donation in U.S. history' },
    { date: '2022-06-24', event: 'Dobbs v. Jackson: Overturns Roe v. Wade — culmination of decades of dark money spending to capture the judiciary' },
    { date: '2023-04-20', event: 'ProPublica reveals Leonard Leo directed $1.6B in dark money through network of front groups to reshape courts' },
    { date: '2024-02-08', event: 'FEC reports show outside spending in 2024 cycle on track to exceed $4 billion — most ever' },
    { date: '2024-07-01', event: 'Timothy Mellon donates $150M to pro-Trump Super PAC — largest single donation in American history' },
  ],
  legalOutcomes: [
    { defendant: 'Dinesh D\'Souza', charge: 'Illegal straw donor scheme — funneled $20,000 through others to Senate candidate', outcome: 'Pleaded guilty; sentenced to probation. Later pardoned by Trump.' },
    { defendant: 'National Rifle Association', charge: 'Campaign finance violations and alleged funneling of Russian money through NRA to U.S. political campaigns', outcome: 'Under investigation; NRA filed for bankruptcy in 2021; leadership found liable for financial misconduct' },
    { defendant: 'Campaign Legal Center v. FEC', charge: 'Challenged FEC failure to enforce disclosure laws against dark money groups', outcome: 'Courts repeatedly found FEC acted "contrary to law" but agency refused to act' },
    { defendant: 'Crossroads GPS', charge: 'Operating as a de facto political committee while claiming 501(c)(4) tax-exempt status to avoid donor disclosure', outcome: 'IRS failed to enforce; no consequences despite spending $300M+ on elections' },
    { defendant: 'Americans for Prosperity', charge: 'Koch-funded group spent hundreds of millions on elections while claiming social welfare nonprofit status', outcome: 'No enforcement action; IRS targeting controversy provided political cover' },
    { defendant: 'Judicial Crisis Network', charge: 'Spent $35M+ on Supreme Court confirmation battles without disclosing donors', outcome: 'No legal consequences; rebranded as Concord Fund and continued operations' },
    { defendant: 'John Roberts / Citizens United Majority', charge: 'Overturning century of campaign finance precedent based on fiction that corporate spending cannot corrupt', outcome: 'No accountability; decision remains law of the land' },
    { defendant: 'Sam Bankman-Fried', charge: 'Illegal straw donations of $100M+ to political campaigns using customer funds', outcome: 'Convicted on fraud and campaign finance charges; sentenced to 25 years' },
  ],
  charges: [
    { statute: '52 U.S.C. § 30121 — Foreign Money in Elections', description: 'Prohibition on foreign nationals contributing to U.S. elections — alleged violations through NRA and other conduits', count: 'Multiple potential violations — largely uninvestigated' },
    { statute: '52 U.S.C. § 30122 — Contributions in Name of Another (Straw Donors)', description: 'Making contributions in the name of another person to circumvent contribution limits', count: 'Systematic evasion through shell corporations and LLCs' },
    { statute: '26 U.S.C. § 501(c)(4) — Social Welfare Organization Abuse', description: 'Political organizations fraudulently claiming tax-exempt social welfare status to hide donors while primarily engaging in political activity', count: 'Hundreds of groups operating as shadow political committees' },
    { statute: '52 U.S.C. § 30104 — Failure to Report Campaign Contributions', description: 'Deliberate structuring of political spending to avoid disclosure requirements', count: 'Over $1 billion in unreported dark money since 2010' },
    { statute: '18 U.S.C. § 1001 — False Statements to Federal Agencies', description: 'Filing false reports with the FEC and IRS regarding the nature of political spending organizations', count: 'Systematic misrepresentation of organizational purpose' },
    { statute: '18 U.S.C. § 371 — Conspiracy to Defraud the United States', description: 'Coordinated schemes between dark money groups, campaigns, and donors to circumvent campaign finance laws', count: 'Pattern of coordination disguised as independent expenditure' },
    { statute: '18 U.S.C. § 1956 — Money Laundering', description: 'Layering political donations through multiple shell organizations to obscure the original source of funds', count: 'Billions laundered through chains of nonprofits' },
    { statute: '26 U.S.C. § 7206 — Tax Fraud', description: 'Claiming tax-exempt status for organizations whose primary purpose is political campaign intervention', count: 'Widespread abuse of 501(c)(4) and 501(c)(3) designations' },
    { statute: '52 U.S.C. § 30116 — Excessive Contributions', description: 'Circumventing contribution limits through coordinated spending between Super PACs and campaigns', count: 'Routinely violated through wink-and-nod coordination' },
  ],
  coverup: [
    'The FEC has been deliberately deadlocked by partisan commissioners who block enforcement of campaign finance laws — the agency has not levied a significant fine in years, effectively legalizing violations through non-enforcement.',
    'The IRS was politically intimidated after the manufactured "IRS targeting scandal" and has since abandoned scrutiny of 501(c)(4) dark money groups claiming tax-exempt status while spending primarily on elections.',
    'Donor-advised funds and fiscal sponsorship chains create layers of anonymous giving that make it virtually impossible to trace the original source of political money.',
    'The Supreme Court itself — stacked through dark money campaigns — refuses to hear challenges to Citizens United, creating a self-reinforcing cycle of corruption.',
    'Leonard Leo\'s network uses over 30 interlocking nonprofit entities to shuffle $1.6 billion in dark money, making forensic accounting nearly impossible without subpoena power.',
    'Congress has blocked every attempt at campaign finance reform since Citizens United — the DISCLOSE Act has failed repeatedly due to Republican filibuster, despite majority support.',
    'The "independent expenditure" fiction — Super PACs openly coordinate with campaigns through shared consultants, former staffers, and public signal strategies — is treated as legal by the FEC.',
    'Corporate donors hide behind trade associations like the U.S. Chamber of Commerce, which spends hundreds of millions on elections without disclosing which corporations paid.',
    'State-level dark money networks mirror the federal system, with even less oversight — billions flow into state legislative and judicial races with zero disclosure in many states.',
  ],
  sources: [
    { title: 'Citizens United v. FEC — Supreme Court Opinion (558 U.S. 310)', url: 'https://supreme.justia.com/cases/federal/us/558/310/', date: '2010-01-21' },
    { title: 'OpenSecrets — Dark Money Database and Analysis', url: 'https://www.opensecrets.org/dark-money', date: '2024-01-01' },
    { title: 'The New Yorker — "The Koch Brothers\' Dark Money" by Jane Mayer', url: 'https://www.newyorker.com/magazine/2016/01/25/new-koch', date: '2016-01-25' },
    { title: 'ProPublica — "The Massive Secret Network Behind Leonard Leo" by Andy Kroll', url: 'https://www.propublica.org/article/leonard-leo-dark-money-federalist-society', date: '2023-04-20' },
    { title: 'Brennan Center for Justice — "Secret Spending in the States"', url: 'https://www.brennancenter.org/our-work/research-reports/secret-spending-states', date: '2021-06-15' },
    { title: 'The Intercept — "How Dark Money Shaped the Supreme Court"', url: 'https://theintercept.com/2022/07/01/dark-money-supreme-court-leonard-leo/', date: '2022-07-01' },
    { title: 'The Washington Post — "$1.6 Billion Donation to Leo Group Is Largest Known Dark Money Gift"', url: 'https://www.washingtonpost.com/politics/2022/08/22/dark-money-donation-leonard-leo/', date: '2022-08-22' },
    { title: 'Campaign Legal Center — Exposed: The Dark Money ATM of the Conservative Movement', url: 'https://campaignlegal.org/update/exposed-dark-money-atm-conservative-movement', date: '2023-03-15' },
    { title: 'Shelby County v. Holder — Supreme Court Opinion (570 U.S. 529)', url: 'https://supreme.justia.com/cases/federal/us/570/529/', date: '2013-06-25' },
    { title: 'Senate Finance Committee — Investigation of NRA and Foreign Funding', url: 'https://www.finance.senate.gov/ranking-members-news/wyden-nra-investigation', date: '2019-09-27' },
  ],
};

export default function DarkMoneyPoliticsPage() {
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
