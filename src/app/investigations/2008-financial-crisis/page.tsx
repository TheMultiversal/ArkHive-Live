'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowLeft, AlertTriangle, Users, Calendar, FileText, ExternalLink, Scale, ShieldAlert, Skull } from 'lucide-react';
import GlitchText from '@/components/effects/GlitchText';

const investigation = {
  title: '2008 Financial Crisis',
  subtitle: 'Wall Street Burned the Economy, Got Bailed Out, and Nobody Went to Prison',
  severity: 'critical',
  status: 'SYSTEMIC FRAUD',
  summary: 'The 2008 financial crisis was the most devastating economic catastrophe since the Great Depression, triggered by Wall Street\'s deliberate and systematic fraud in the mortgage-backed securities market. Major banks — including Goldman Sachs, JPMorgan Chase, Lehman Brothers, Bear Stearns, Citigroup, and Countrywide Financial — knowingly packaged toxic subprime mortgages into complex financial instruments (CDOs and MBS), secured fraudulent AAA ratings from captured rating agencies, sold them to pension funds and municipalities, and then secretly bet against the same products using credit default swaps. When the house of cards collapsed, 8.7 million Americans lost their jobs, 10 million families lost their homes to foreclosure, household wealth declined by $13 trillion, and the global economy plunged into recession. The U.S. government responded with a $700 billion taxpayer-funded bailout (TARP) plus trillions in Federal Reserve emergency lending — rescuing the very institutions that caused the crisis. Despite the Financial Crisis Inquiry Commission concluding the crisis was "avoidable" and driven by "widespread failures in financial regulation," "dramatic breakdowns in corporate governance," and "an explosive mix of excessive borrowing and risk," not a single top Wall Street executive was criminally prosecuted. Instead, they received billions in bonuses. The banks emerged larger, more powerful, and more profitable than before, while working-class Americans — disproportionately Black and Latino homeowners targeted by predatory lending — were left to rebuild from nothing.',
  keyFigures: [
    { name: 'Hank Paulson', role: 'U.S. Treasury Secretary (2006-2009). Former Goldman Sachs CEO. Designed and implemented the $700B TARP bailout that rescued his former firm and Wall Street peers. His $700M Goldman holdings were liquidated tax-free upon entering government.', href: '/entities/individuals/hank-paulson', status: 'Former Treasury Sec.' },
    { name: 'Lloyd Blankfein', role: 'Goldman Sachs CEO (2006-2018). Oversaw Goldman\'s strategy of packaging and selling toxic CDOs to clients while simultaneously shorting them. Famously claimed Goldman was doing "God\'s work." Goldman paid $5.06B fine — a fraction of profits.', href: '/entities/individuals/lloyd-blankfein', status: 'Former Goldman CEO' },
    { name: 'Jamie Dimon', role: 'JPMorgan Chase CEO (2005-present). JPMorgan sold billions in toxic mortgage securities while internal reports warned they were junk. Received $13B bailout. Paid $13B settlement in 2013 — no admission of wrongdoing.', href: '/entities/individuals/jamie-dimon', status: 'Current JPMorgan CEO' },
    { name: 'Dick Fuld', role: 'Lehman Brothers CEO. Oversaw Lehman\'s massive leveraging into subprime mortgages and use of Repo 105 accounting tricks to hide $50B in debt from investors. When Lehman collapsed on September 15, 2008, it triggered global panic.', href: '/entities/individuals/dick-fuld', status: 'Never Charged' },
    { name: 'Angelo Mozilo', role: 'Countrywide Financial CEO. Pioneered predatory subprime lending, specifically targeting Black and Latino borrowers with exploitative adjustable-rate mortgages. While publicly promoting loans, he privately called them "toxic" and "poison" in emails.', href: '/entities/individuals/angelo-mozilo', status: 'Civil Fine Only' },
    { name: 'Ben Bernanke', role: 'Federal Reserve Chairman (2006-2014). Failed to regulate the shadow banking system and dismissed warnings about the housing bubble. Later orchestrated massive emergency lending (over $16T) to rescue financial institutions.', href: '/entities/individuals/ben-bernanke', status: 'Former Fed Chair' },
    { name: 'Alan Greenspan', role: 'Federal Reserve Chairman (1987-2006). Ardent opponent of financial regulation who championed deregulation of derivatives and blocked efforts to regulate credit default swaps. Later admitted his ideology had a "flaw."', href: '/entities/individuals/alan-greenspan', status: 'Former Fed Chair' },
    { name: 'Janet Yellen', role: 'President of the San Francisco Fed (2004-2010). Oversaw the district that included Countrywide Financial and Washington Mutual — two of the worst predatory lenders — but took no meaningful regulatory action.', href: '/entities/individuals/janet-yellen', status: 'Former Treasury Sec.' },
    { name: 'Tim Geithner', role: 'President of the New York Fed (2003-2009), then Treasury Secretary (2009-2013). Oversaw the bailouts and opposed holding executives accountable. His "foam the runway" approach prioritized bank survival over homeowner relief.', href: '/entities/individuals/tim-geithner', status: 'Former Treasury Sec.' },
    { name: 'David Solomon', role: 'Goldman Sachs executive during the crisis era, later CEO (2018-present). Goldman\'s ABACUS deal — packaging securities designed to fail, selling them to clients, and betting against them — epitomized Wall Street\'s fraud.', href: '/entities/individuals/david-solomon', status: 'Current Goldman CEO' },
    { name: 'Brian Moynihan', role: 'Bank of America executive. BofA acquired Countrywide Financial in 2008, inheriting its predatory lending portfolio. BofA paid $16.65B in the largest settlement in American corporate history — no executives jailed.', href: '/entities/individuals/brian-moynihan', status: 'Current BofA CEO' },
    { name: 'Larry Fink', role: 'BlackRock CEO. BlackRock was hired by the Federal Reserve to manage the government\'s toxic asset purchases — a massive conflict of interest as the firm profited from the crisis while managing the cleanup.', href: '/entities/individuals/larry-fink', status: 'Current BlackRock CEO' },
    { name: 'Steve Mnuchin', role: 'Goldman Sachs partner who purchased IndyMac bank in 2009, renamed it OneWest, and aggressively foreclosed on thousands of homeowners — including elderly and minority borrowers — earning the nickname "Foreclosure King."', href: '/entities/individuals/steve-mnuchin', status: 'Former Treasury Sec.' },
    { name: 'Warren Buffett', role: 'Berkshire Hathaway CEO. Invested $5B in Goldman Sachs at the height of the crisis, earning $3.7B in profits. Called derivatives "financial weapons of mass destruction" while profiting from the system that produced them.', href: '/entities/individuals/warren-buffett', status: 'CEO, Berkshire Hathaway' },
    { name: 'Barack Obama', role: '44th President. Received more Wall Street campaign donations than any previous candidate. His administration chose to bail out banks rather than homeowners, prosecuting zero top executives despite evidence of systematic fraud.', href: '/entities/individuals/barack-obama', status: 'Former President' },
    { name: 'George W. Bush', role: '43rd President. Signed the Emergency Economic Stabilization Act creating TARP. His administration\'s deregulatory policies and SEC enforcement failures enabled the fraud that caused the crisis.', href: '/entities/individuals/george-w-bush', status: 'Former President' },
    { name: 'Eric Holder', role: 'Attorney General (2009-2015). Coined the doctrine that banks were "too big to jail." Former Covington & Burling partner who returned to the firm after DOJ, representing the same banks he declined to prosecute.', href: '/entities/individuals/eric-holder', status: 'Former AG' },
  ],
  timeline: [
    { date: '1999', event: 'Gramm-Leach-Bliley Act repeals Glass-Steagall, eliminating the Depression-era firewall between commercial and investment banking, enabling banks to gamble with depositor funds.' },
    { date: '2000', event: 'Commodity Futures Modernization Act exempts credit default swaps and over-the-counter derivatives from regulation, creating a $60 trillion shadow market with zero oversight.' },
    { date: '2001-2004', event: 'Federal Reserve slashes interest rates to 1%, flooding the economy with cheap money. Housing prices begin an unprecedented surge as lending standards collapse.' },
    { date: '2003-2006', event: 'Peak era of predatory lending. Countrywide, Washington Mutual, and other lenders issue "NINJA loans" (No Income, No Job, No Assets) and adjustable-rate mortgages designed to default.' },
    { date: '2004', event: 'SEC relaxes net capital rules for the five largest investment banks, allowing leverage ratios to soar from 12:1 to 40:1. All five would later collapse or require rescue.' },
    { date: '2005', event: 'Federal regulators receive warnings about Countrywide\'s predatory practices. No enforcement action taken. Countrywide\'s Mozilo privately emails colleagues calling his own products "toxic."' },
    { date: '2006', event: 'Housing prices peak. Goldman Sachs begins secretly building massive short positions against the mortgage market while continuing to sell CDOs to clients.' },
    { date: 'April 2007', event: 'New Century Financial, the second-largest subprime lender, files for bankruptcy. Wall Street banks continue selling mortgage-backed securities despite knowing the underlying loans are failing.' },
    { date: 'June-August 2007', event: 'Two Bear Stearns hedge funds that invested heavily in subprime mortgages collapse, losing $1.6B. Rating agencies begin mass downgrades of mortgage securities.' },
    { date: 'March 2008', event: 'Bear Stearns collapses and is acquired by JPMorgan for $2/share (later raised to $10) — a 98% loss. The Federal Reserve absorbs $30B in Bear Stearns\' toxic assets.' },
    { date: 'September 7, 2008', event: 'Federal government seizes Fannie Mae and Freddie Mac, placing them in conservatorship. Combined exposure: $5.3 trillion in mortgage guarantees.' },
    { date: 'September 15, 2008', event: 'Lehman Brothers files for bankruptcy — the largest in American history at $639B in assets. Global financial markets panic. Merrill Lynch is sold to Bank of America the same day.' },
    { date: 'September 16, 2008', event: 'AIG receives an $85B federal bailout (eventually totaling $182B). AIG had written $440B in credit default swaps insuring Wall Street\'s toxic products, including $12.9B owed to Goldman Sachs — paid at 100 cents on the dollar.' },
    { date: 'September 19, 2008', event: 'Hank Paulson and Ben Bernanke present Congress with a 3-page proposal demanding $700B with no oversight. Paulson reportedly gets on one knee before Nancy Pelosi to beg for the bailout.' },
    { date: 'October 3, 2008', event: 'Emergency Economic Stabilization Act signed, creating the $700B Troubled Asset Relief Program (TARP). Money flows to Wall Street banks, not homeowners.' },
    { date: 'October-December 2008', event: 'Citigroup receives $45B in TARP funds plus $306B in government guarantees on toxic assets. Bank of America receives $45B. Goldman Sachs and Morgan Stanley each receive $10B.' },
    { date: '2008-2012', event: '10 million American families lose their homes to foreclosure. Black and Latino families lose 53% and 66% of their wealth respectively. 8.7 million jobs are destroyed.' },
    { date: 'January 2010', event: 'Financial Crisis Inquiry Commission holds public hearings. Former Citigroup CEO Chuck Prince\'s quote becomes emblematic: "As long as the music is playing, you\'ve got to get up and dance."' },
    { date: 'July 2010', event: 'Dodd-Frank Wall Street Reform Act signed. Critics call it inadequate — it does not break up "too big to fail" banks, which emerge larger and more concentrated than before the crisis.' },
    { date: '2012-2016', event: 'Major banks pay $150B+ in combined settlements. Goldman: $5.06B. JPMorgan: $13B. Bank of America: $16.65B. Citigroup: $7B. Morgan Stanley: $3.2B. No top executives criminally charged.' },
    { date: '2013', event: 'Attorney General Eric Holder tells Congress some banks are "too big to jail" — admitting the DOJ\'s policy of protecting Wall Street executives from criminal prosecution.' },
  ],
  legalOutcomes: [
    { defendant: 'Goldman Sachs', charge: 'Selling toxic CDOs while secretly betting against them (ABACUS scandal)', outcome: '$5.06B settlement. SEC charged one mid-level trader (Fabrice Tourre). No senior executive prosecuted.' },
    { defendant: 'JPMorgan Chase', charge: 'Selling billions in fraudulent mortgage-backed securities', outcome: '$13B settlement — largest corporate fine in history at the time. No criminal charges against executives.' },
    { defendant: 'Bank of America / Countrywide', charge: 'Predatory lending, fraudulent mortgage origination and securitization', outcome: '$16.65B settlement. Angelo Mozilo paid $67.5M civil fine (SEC). No criminal charges.' },
    { defendant: 'Citigroup', charge: 'Selling toxic mortgage securities while concealing their risk', outcome: '$7B settlement. No criminal charges against executives.' },
    { defendant: 'Morgan Stanley', charge: 'Selling defective mortgage-backed securities', outcome: '$3.2B settlement. No criminal charges.' },
    { defendant: 'Credit Suisse', charge: 'Misrepresenting the quality of residential mortgage-backed securities', outcome: '$5.28B settlement. No individual prosecutions.' },
    { defendant: 'S&P / Moody\'s (Rating Agencies)', charge: 'Issuing fraudulent AAA ratings on securities they knew were toxic', outcome: 'S&P paid $1.5B to settle government and state lawsuits. Moody\'s paid $864M. No executives charged.' },
    { defendant: 'Kareem Serageldin (Credit Suisse)', charge: 'Hiding $100M in losses on mortgage-backed securities', outcome: 'Only Wall Street banker to serve prison time for crisis-related fraud. Sentenced to 30 months.' },
    { defendant: 'Dick Fuld (Lehman Brothers)', charge: 'Misleading investors through Repo 105 transactions hiding $50B in liabilities', outcome: 'Never charged criminally. SEC did not pursue him. Lehman examiner found "colorable claims" of fraud.' },
    { defendant: 'AIG / Joseph Cassano', charge: 'Writing $440B in credit default swaps with inadequate reserves, requiring $182B bailout', outcome: 'Cassano investigated, never charged. Received $315M in compensation before and after the crisis.' },
  ],
  charges: [
    { statute: '18 U.S.C. § 1348 — Securities Fraud', description: 'Wall Street banks knowingly packaged defective mortgages into securities, secured fraudulent ratings, and sold them to investors as safe investments while simultaneously betting against them.', count: 'Tens of billions of dollars in fraudulent securities sold to pension funds, municipalities, and investors' },
    { statute: '18 U.S.C. § 1341 — Mail Fraud / 18 U.S.C. § 1343 — Wire Fraud', description: 'The systematic use of mail and electronic communications to execute schemes to defraud investors, including prospectuses containing material misrepresentations about the quality of mortgage-backed securities.', count: 'Millions of fraudulent transactions across the entire financial system' },
    { statute: '18 U.S.C. § 1962 — RICO (Racketeer Influenced and Corrupt Organizations)', description: 'The coordinated, cross-institutional pattern of fraud — involving mortgage originators, investment banks, rating agencies, and servicers — constituted an ongoing criminal enterprise.', count: 'Enterprise-wide pattern involving multiple firms over a decade' },
    { statute: '18 U.S.C. § 1014 — False Statements to Financial Institutions', description: 'Mortgage originators systematically fabricated borrower income, assets, and employment on loan applications. Internal audits at multiple banks revealed fraud rates exceeding 80% in loan samples.', count: 'Millions of fraudulent loan applications originated 2003-2007' },
    { statute: '18 U.S.C. § 1956 — Money Laundering', description: 'The laundering of fraud proceeds through complex financial instruments designed to obscure the toxic nature of underlying mortgage assets and distribute fraud losses to unwitting investors.', count: 'Trillions of dollars in structured financial products' },
    { statute: '18 U.S.C. § 371 — Conspiracy to Defraud the United States', description: 'The coordinated effort by Wall Street executives at multiple institutions to circumvent financial regulations, mislead regulators, and conceal the true risk of their activities from government oversight.', count: 'Multi-firm, multi-year conspiracy involving top executives' },
    { statute: '15 U.S.C. § 78j(b) — SEC Rule 10b-5 Violations', description: 'Material misrepresentations and omissions in the sale of securities, including the failure to disclose adverse selection of mortgage pools, inflated appraisals, and internal risk assessments.', count: 'Systemic violations across the entire securitization chain' },
    { statute: '12 U.S.C. § 1833a — FIRREA (Financial Institutions Reform)', description: 'Fraud affecting federally insured financial institutions. The DOJ used this statute for civil settlements but declined to pursue criminal charges against individuals under the same statute.', count: 'Fraud affecting virtually every major FDIC-insured institution' },
    { statute: '18 U.S.C. § 1519 — Destruction of Records (Sarbanes-Oxley)', description: 'Banks destroyed and altered internal documents, communications, and risk assessments that would have demonstrated knowledge of fraud in mortgage-backed securities.', count: 'Documented evidence destruction at multiple major institutions' },
  ],
  coverup: [
    'The Department of Justice under Attorney General Eric Holder adopted a de facto policy of "too big to jail," declining to prosecute any top Wall Street executives despite overwhelming evidence of fraud documented in the FCIC report and internal bank communications.',
    'Hank Paulson — former Goldman Sachs CEO — served as Treasury Secretary during the bailout, directing billions to his former firm. Goldman received $12.9B through the AIG backdoor bailout, paid at 100 cents on the dollar while ordinary creditors received fractions.',
    'The Federal Reserve conducted trillions of dollars in emergency lending through secret facilities, refusing to disclose the recipients until forced by court order and legislation years later. Bloomberg News revealed $7.77 trillion in undisclosed Fed commitments.',
    'Rating agencies (S&P, Moody\'s, Fitch) gave AAA ratings to securities they privately described as "ridiculous" and "monstrous" because they were paid by the banks issuing the securities — a structural conflict of interest that was never criminally prosecuted.',
    'Goldman Sachs\'s ABACUS deal, designed with hedge fund manager John Paulson (no relation to Hank) to fail, was marketed to investors as a legitimate product. Goldman secretly shorted the deal. Only one junior trader was charged; no Goldman executive faced prosecution.',
    'The government\'s Home Affordable Modification Program (HAMP), ostensibly designed to help homeowners, was described by Tim Geithner as a way to "foam the runway" for banks by spreading out foreclosures rather than preventing them.',
    'Banks systematically engaged in "robo-signing" — executing fraudulent foreclosure documents without review — to accelerate the seizure of homes. When exposed, the government negotiated the $25B National Mortgage Settlement that allowed banks to credit phantom "relief" as compliance.',
    'Eric Holder returned to his former law firm Covington & Burling — which represents most major Wall Street banks — after leaving the DOJ, completing the revolving door that ensured no prosecutions.',
    'The Dodd-Frank Act was systematically weakened through industry lobbying before passage and regulatory capture afterward. By 2018, key provisions were rolled back entirely, including Volcker Rule restrictions on the very banks bailed out in 2008.',
    'Internal bank emails and documents revealed in civil litigation showed executives knew the products were "shit" (Goldman), "nuclear holocaust" (Citigroup), and "total crap" (S&P), yet no criminal charges were brought based on this evidence.',
  ],
  sources: [
    { title: 'Financial Crisis Inquiry Commission Report', url: 'https://www.govinfo.gov/content/pkg/GPO-FCIC/pdf/GPO-FCIC.pdf', date: 'January 2011' },
    { title: 'Senate Permanent Subcommittee on Investigations: Wall Street and the Financial Crisis', url: 'https://www.hsgac.senate.gov/subcommittees/investigations/media/senate-investigations-subcommittee-releases-levin-coburn-report-on-the-financial-crisis', date: 'April 13, 2011' },
    { title: 'ProPublica: Bailout Tracker — Every Recipient of TARP Funds', url: 'https://projects.propublica.org/bailout/', date: 'Ongoing' },
    { title: 'Bloomberg: The Fed\'s Secret Liquidity Lifelines', url: 'https://www.bloomberg.com/news/articles/2011-11-28/secret-fed-loans-undisclosed-to-congress-gave-banks-13-billion-in-income', date: 'November 28, 2011' },
    { title: 'Matt Taibbi, "The Great American Bubble Machine" (Goldman Sachs)', url: 'https://www.rollingstone.com/politics/politics-news/the-great-american-bubble-machine-195229/', date: 'April 5, 2010' },
    { title: 'New York Times: A Revolving Door in Washington — Eric Holder Returns to Corporate Law', url: 'https://www.nytimes.com/2015/07/07/us/eric-holder-returns-to-covington-burling-law-firm.html', date: 'July 6, 2015' },
    { title: 'SEC v. Goldman Sachs (ABACUS CDO)', url: 'https://www.sec.gov/litigation/litreleases/2010/lr21592.htm', date: 'April 16, 2010' },
    { title: 'Inside Job (Documentary) — Academy Award-Winning Film on the Financial Crisis', url: 'https://www.imdb.com/title/tt1645089/', date: '2010' },
    { title: 'Michael Lewis, "The Big Short: Inside the Doomsday Machine"', url: 'https://wwnorton.com/books/the-big-short/', date: '2010' },
    { title: 'Center for Responsible Lending: Lost Ground — Disparities in Subprime Lending', url: 'https://www.responsiblelending.org/mortgage-lending/research-analysis/lost-ground-2011.html', date: 'November 2011' },
    { title: 'PBS Frontline: The Untouchables — Why Wall Street Executives Were Never Prosecuted', url: 'https://www.pbs.org/wgbh/frontline/documentary/untouchables/', date: 'January 22, 2013' },
  ],
};

export default function FinancialCrisis2008Page() {
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
