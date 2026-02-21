'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowLeft, AlertTriangle, Users, Calendar, FileText, ExternalLink, Scale, ShieldAlert, Skull } from 'lucide-react';
import GlitchText from '@/components/effects/GlitchText';

const investigation = {
  title: 'Private Prison Industry',
  subtitle: 'Profiting from Human Cages \u2014 How Corporations Turned Mass Incarceration into a Business Model',
  severity: 'critical',
  status: 'ACTIVE \u2014 EXPANDING',
  summary: 'The United States incarcerates more people than any nation on earth \u2014 2.1 million people behind bars, a 500% increase over the last 40 years. The private prison industry has transformed this human catastrophe into a profit center. CoreCivic (formerly Corrections Corporation of America) and GEO Group, the two largest private prison corporations, generated over $4 billion in combined revenue in 2023 alone. These companies have spent hundreds of millions lobbying for harsher sentencing laws, mandatory minimums, three-strikes legislation, and immigration enforcement \u2014 all of which fill their beds. The American Legislative Exchange Council (ALEC), a corporate-funded lobbying group, drafted model "tough on crime" bills that were adopted by state legislatures across the country. Private prisons have contractual occupancy guarantees \u2014 some requiring states to keep facilities at 80-90% capacity or pay for empty beds. In the most grotesque example, Pennsylvania Judge Mark Ciavarella accepted $2.6 million in kickbacks from private juvenile detention facility operators to sentence children \u2014 some as young as 10 \u2014 to extended stays for trivial offenses like creating a MySpace parody page. The industry has expanded into immigration detention, operating the majority of ICE detention facilities where migrants are held in conditions that have been repeatedly found to violate basic human rights standards. Guards are underpaid, undertrained, and facilities are understaffed. Sexual assault, medical neglect, and deaths in custody are routine. This is the commodification of human suffering \u2014 a system designed not to rehabilitate, not to protect public safety, but to generate shareholder returns from locked bodies.',
  keyFigures: [
    { name: 'Mark Ciavarella', role: 'Luzerne County Judge \u2014 Accepted $2.6M in kickbacks to sentence thousands of children to private juvenile detention', href: '/entities/individuals/mark-ciavarella', status: 'Convicted \u2014 28 years' },
    { name: 'Michael Conahan', role: 'Luzerne County Judge \u2014 Co-conspirator in kids-for-cash scandal; arranged contracts with private facilities', href: '/entities/individuals/michael-conahan', status: 'Convicted \u2014 17.5 years' },
    { name: 'Damon Hininger', role: 'CoreCivic CEO \u2014 Led company through rebranding from CCA; compensation exceeded $4M annually while cutting staff and services', href: '/entities/individuals/damon-hininger', status: 'Active' },
    { name: 'George Zoley', role: 'GEO Group Founder/CEO \u2014 Built $2.4B private prison empire; top political donor; compensation $9.6M in 2020', href: '/entities/individuals/george-zoley', status: 'Active' },
    { name: 'Joe Biden', role: 'President \u2014 Signed executive order ending federal private prison contracts in 2021; did not apply to immigration detention', href: '/entities/individuals/joe-biden', status: 'Left Office' },
    { name: 'Donald Trump', role: 'President \u2014 Reversed Biden\'s executive order; expanded ICE detention contracts with private prison corporations', href: '/entities/individuals/donald-trump', status: 'Current President' },
    { name: 'Jeff Sessions', role: 'Attorney General \u2014 Reversed Obama-era memo phasing out private prisons; expanded immigration enforcement', href: '/entities/individuals/jeff-sessions', status: 'Left Office' },
    { name: 'Bill Barr', role: 'Attorney General \u2014 Expanded federal private prison use; former board member of entities with private prison investments', href: '/entities/individuals/bill-barr', status: 'Left Office' },
    { name: 'Thomas Beasley', role: 'CCA Co-founder \u2014 Former Republican Party chairman who conceived privatizing prisons as a business opportunity in 1983', href: '/entities/individuals/thomas-beasley', status: 'Retired' },
    { name: 'Robert Crants', role: 'CCA Co-founder \u2014 West Point graduate who co-founded Corrections Corporation of America with $50,000 investment', href: '/entities/individuals/robert-crants', status: 'Retired' },
    { name: 'Terrell Don Hutto', role: 'CCA Co-founder \u2014 Former Arkansas corrections commissioner; namesake of infamous T. Don Hutto immigrant detention center', href: '/entities/individuals/terrell-don-hutto', status: 'Retired' },
    { name: 'Michael MPowell', role: 'ALEC National Chairman \u2014 Oversaw development of model legislation increasing incarceration rates', href: '/entities/individuals/michael-mPowell', status: 'Active' },
    { name: 'Ronald Reagan', role: 'President \u2014 War on Drugs policies and mandatory minimums created the mass incarceration boom private prisons exploited', href: '/entities/individuals/ronald-reagan', status: 'Deceased' },
    { name: 'Richard Nixon', role: 'President \u2014 Launched War on Drugs in 1971; adviser John Ehrlichman later admitted it targeted Black communities', href: '/entities/individuals/richard-nixon', status: 'Deceased' },
  ],
  timeline: [
    { date: '1971', event: 'Nixon declares War on Drugs; adviser John Ehrlichman later admits it was designed to target Black people and anti-war activists' },
    { date: '1983', event: 'Corrections Corporation of America (CCA) founded in Nashville, Tennessee \u2014 first private prison company in modern era' },
    { date: '1984', event: 'CCA wins first contract to operate Shelby County, TN jail; Sentencing Reform Act establishes federal sentencing guidelines increasing prison time' },
    { date: '1986', event: 'Anti-Drug Abuse Act creates mandatory minimums including 100:1 crack-to-powder cocaine disparity \u2014 devastating Black communities' },
    { date: '1993', event: 'Three-strikes sentencing laws proliferate across states; ALEC distributes model "Truth in Sentencing" bills to state legislatures' },
    { date: '1994', event: 'Clinton signs Violent Crime Control Act \u2014 largest crime bill in history; $9.7 billion for prison construction; eliminates Pell Grants for prisoners' },
    { date: '1996', event: 'Illegal Immigration Reform Act expands immigration detention; private prison companies begin securing lucrative ICE contracts' },
    { date: '1997', event: 'CCA stock peaks; company operating 77 facilities in 25 states \u2014 the largest private prison operator in the world' },
    { date: '2003-2008', event: 'Kids-for-Cash scandal: Judge Ciavarella sentences thousands of children to PA Child Care and Western PA Child Care facilities for kickbacks' },
    { date: '2009-02', event: 'Kids-for-Cash exposed; Judges Ciavarella and Conahan arrested by FBI; 4,000+ juvenile convictions subsequently vacated' },
    { date: '2010', event: 'ALEC model bills including "Arizona SB 1070" anti-immigration law drafted with private prison industry input; NPR investigation reveals connection' },
    { date: '2011', event: 'CCA sends letter to 48 state governors offering to buy state prisons \u2014 requiring 90% occupancy guarantee for 20 years' },
    { date: '2013', event: 'In the Public Interest report reveals 65% of private prison contracts contain occupancy guarantees of 80-90%' },
    { date: '2016-08', event: 'Obama DOJ announces phase-out of federal private prisons after inspector general finds they are less safe and no cheaper than government facilities' },
    { date: '2017-02', event: 'Jeff Sessions reverses Obama memo; DOJ resumes private prison contracts; CoreCivic and GEO Group stocks surge' },
    { date: '2018', event: 'Family separation crisis: thousands of migrant children detained in private facilities; reports of abuse and neglect proliferate' },
    { date: '2019', event: 'Congressional investigation reveals private immigration detention facilities have death rates 40% higher than government facilities' },
    { date: '2021-01-26', event: 'Biden signs Executive Order 14006 ending DOJ\'s use of private prisons \u2014 does NOT apply to ICE or immigration detention' },
    { date: '2023', event: 'CoreCivic revenue reaches $1.9B; GEO Group revenue reaches $2.4B; immigration detention now primary growth driver' },
    { date: '2025', event: 'Trump administration expands ICE detention; private prison companies secure billions in new contracts for immigration enforcement' },
  ],
  legalOutcomes: [
    { defendant: 'Judge Mark Ciavarella', charge: 'Racketeering, fraud, money laundering, extortion (Kids-for-Cash)', outcome: 'Convicted on 12 of 39 counts; sentenced to 28 years in federal prison; 4,000+ juvenile convictions vacated' },
    { defendant: 'Judge Michael Conahan', charge: 'Racketeering conspiracy (Kids-for-Cash)', outcome: 'Pled guilty; sentenced to 17.5 years in federal prison; released to home confinement during COVID' },
    { defendant: 'CoreCivic (CCA)', charge: 'Understaffing, abuse, medical neglect (multiple lawsuits)', outcome: 'Settled hundreds of lawsuits for millions; no systemic reform required; continues operating' },
    { defendant: 'GEO Group', charge: 'Forced labor, wage theft, abuse (multiple lawsuits)', outcome: 'Paid forced labor at $1/day in immigrant detention; sued under Trafficking Victims Protection Act; cases ongoing' },
    { defendant: 'Idaho Correctional Center ("Gladiator School")', charge: 'Deliberate indifference to violence', outcome: 'ACLU lawsuit revealed CCA guards allowed and encouraged inmate violence; state terminated contract 2014' },
    { defendant: 'T. Don Hutto Detention Center', charge: 'Detention of immigrant children in prison conditions', outcome: 'ACLU lawsuit; settlement required reforms; facility converted to adult-only detention' },
    { defendant: 'Private Prison Industry (lobbying)', charge: 'Corruption of democratic process through lobbying for incarceration', outcome: 'No legal consequences; companies spent $25M+ lobbying 2010-2020; contributed millions to political campaigns' },
    { defendant: 'Eloy Federal Contract Facility (CCA)', charge: 'Highest death rate in ICE detention system', outcome: '15 deaths 2003-2015; medical neglect documented; facility continues operating' },
    { defendant: 'Stewart Detention Center (CoreCivic)', charge: 'Medical neglect, COVID deaths', outcome: 'Multiple detainee deaths during COVID; ACLU lawsuit; facility continues operating under government contract' },
  ],
  charges: [
    { statute: '18 U.S.C. \u00a7 1962 (RICO)', description: 'Racketeering \u2014 Kids-for-Cash scheme was a corrupt enterprise; applicable to industry-wide lobbying for incarceration', count: '12 counts (Ciavarella); potential industry-wide application' },
    { statute: '18 U.S.C. \u00a7 201', description: 'Bribery of Public Officials \u2014 Private prison companies paying judges, legislators, and officials for favorable contracts and sentencing', count: 'Multiple documented cases; rarely prosecuted beyond Kids-for-Cash' },
    { statute: '18 U.S.C. \u00a7 1589', description: 'Forced Labor \u2014 Detainees in private ICE facilities forced to work for $1/day or face solitary confinement', count: 'Class action lawsuits pending against GEO Group' },
    { statute: '18 U.S.C. \u00a7 242', description: 'Deprivation of Rights Under Color of Law \u2014 Systematic abuse, medical neglect, and use of excessive force by private prison staff', count: 'Hundreds of documented incidents; rarely prosecuted' },
    { statute: '42 U.S.C. \u00a7 1983', description: 'Civil Rights Violations \u2014 Deliberate indifference to safety, medical needs, and conditions of confinement', count: 'Thousands of lawsuits filed; most settled confidentially' },
    { statute: '18 U.S.C. \u00a7 1341', description: 'Mail Fraud \u2014 Filing false staffing reports and inflating operational costs to defraud government contracts', count: 'Multiple investigations; DOJ IG found systematic overbilling' },
    { statute: '18 U.S.C. \u00a7 371', description: 'Conspiracy \u2014 Coordinated lobbying through ALEC to draft model legislation increasing incarceration rates for profit', count: 'Industry-wide conspiracy; legally protected as "lobbying"' },
    { statute: 'Eighth Amendment', description: 'Cruel and Unusual Punishment \u2014 Conditions in private prisons including violence, sexual assault, inadequate medical care, and solitary confinement', count: 'Constitutional violations documented in DOJ investigations' },
    { statute: '18 U.S.C. \u00a7 1591', description: 'Sex Trafficking \u2014 Sexual abuse of detainees by guards in private facilities; systematic failure to prevent or investigate', count: 'Hundreds of reported incidents; DOJ IG found "serious concerns"' },
  ],
  coverup: [
    'In the Kids-for-Cash scandal, Judge Ciavarella sentenced children as young as 10 to juvenile detention for offenses like creating a MySpace parody of a school principal, stealing loose change from unlocked cars, and appearing in the presence of someone who shoplifted. Over 4,000 children were sentenced without legal representation because Ciavarella convinced them to waive their right to counsel.',
    'CoreCivic and GEO Group have spent over $25 million on lobbying between 2010 and 2020, and contributed millions more to political campaigns. Both companies were major donors to Trump\'s inaugural committee. Their lobbyists drafted portions of immigration enforcement legislation.',
    'Private prison contracts routinely include "lockup quotas" or "bed guarantees" requiring states to keep facilities at 80-90% capacity \u2014 or pay for empty beds. In Arizona, three private prisons had 100% occupancy guarantees, meaning taxpayers paid for full capacity regardless of crime rates.',
    'The American Legislative Exchange Council (ALEC) brought together private prison executives and state legislators behind closed doors to draft model bills. ALEC\'s "Truth in Sentencing" and "Three Strikes" model bills were adopted by dozens of states, dramatically increasing prison populations and private prison profits.',
    'When CCA operated the Idaho Correctional Center, violence was so endemic that inmates called it "Gladiator School." An ACLU investigation revealed guards intentionally housed rival gang members together and ran a system where violence was used as population control. CCA falsified staffing records to hide understaffing.',
    'Private immigration detention facilities have been documented by DHS inspectors as having: raw sewage backup in cells, expired food served to detainees, inadequate medical care resulting in preventable deaths, and guards using pepper spray on compliant detainees. Companies faced no criminal consequences.',
    'GEO Group operates the Northwest ICE Processing Center where detainees are paid $1 per day for work that keeps the facility running \u2014 cleaning, cooking, laundry. Those who refuse face solitary confinement. Federal courts have ruled this constitutes forced labor under the Trafficking Victims Protection Act.',
    'After Biden signed his executive order ending federal private prison contracts, both CoreCivic and GEO Group saw stock prices drop \u2014 then recover when it became clear the order excluded immigration detention, their fastest-growing revenue stream. The "ban" was functionally meaningless.',
  ],
  sources: [
    { title: 'Juvenile Law Center: "Luzerne County Kids-for-Cash Scandal"', url: 'https://jlc.org/luzerne-county-kids-cash-scandal', date: 'Ongoing' },
    { title: 'The Sentencing Project: "Private Prisons in the United States"', url: 'https://www.sentencingproject.org/reports/private-prisons-in-the-united-states/', date: '2023' },
    { title: 'In the Public Interest: "Criminal: How Lockup Quotas and Low-Crime Taxes Guarantee Profits for Private Prison Corporations"', url: 'https://www.inthepublicinterest.org/criminal-how-lockup-quotas-and-low-crime-taxes-guarantee-profits-for-private-prison-corporations/', date: 'Sep 2013' },
    { title: 'DOJ Office of Inspector General: Review of the Federal Bureau of Prisons\u2019 Monitoring of Contract Prisons', url: 'https://oig.justice.gov/reports/2016/e1606.pdf', date: 'Aug 2016' },
    { title: 'NPR: "ALEC, Private Prisons, and Arizona\'s SB 1070"', url: 'https://www.npr.org/2010/10/28/130833741/prison-economics-help-drive-ariz-immigration-law', date: 'Oct 2010' },
    { title: 'The Marshall Project: "Inside the Private Prison Industry"', url: 'https://www.themarshallproject.org/records/86-private-prisons', date: 'Ongoing' },
    { title: 'ACLU: "Banking on Bondage \u2014 Private Prisons and Mass Incarceration"', url: 'https://www.aclu.org/report/banking-bondage-private-prisons-and-mass-incarceration', date: 'Nov 2011' },
    { title: 'ProPublica: "Inside CoreCivic \u2014 Private Prisons Investigation"', url: 'https://www.propublica.org/series/locked-up', date: '2016-2023' },
    { title: 'DHS Office of Inspector General: ICE Detention Facility Inspections', url: 'https://www.oig.dhs.gov/reports/ice', date: 'Ongoing' },
    { title: 'Worth Rises: "The Prison Industry \u2014 Exposed"', url: 'https://worthrises.org/theprisonindustry', date: '2023' },
  ],
};

export default function PrivatePrisonIndustryPage() {
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
