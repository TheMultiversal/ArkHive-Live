// Investigation data shard
import type { InvestigationData } from './types';

const investigations_1: Record<string, InvestigationData> = {
  '1980s-insider-trading': {
 title: '1980s Insider Trading Scandals',
 subtitle: 'Wall Street insider trading ring involving Ivan Boesky, Michael Milken, and others that defined an era of financial excess and regulatory failure.',
 severity: 'high',
 category: 'Financial Crime',
 date: 'February 3, 2012',
 lastUpdated: 'June 15, 2014',
 summary: 'Wall Street insider trading ring involving Ivan Boesky, Michael Milken, and others that defined an era of financial excess and regulatory failure.',
 content: [
 'Ivan Boesky paid $100 million in fines after admitting to insider trading in 1986. His cooperation led to the prosecution of Michael Milken.',
 'Michael Milken, the "junk bond king," was indicted on 98 counts of racketeering and securities fraud. He pleaded guilty to six felonies and paid $600 million in fines.',
 'The scandals exposed systemic corruption on Wall Street and led to the passage of the Insider Trading Sanctions Act and stricter SEC enforcement.',
 ],
 tags: ['Financial Crime', 'Investigation', 'Accountability'],
 sources: [
 { title: 'SEC Insider Trading Cases', url: 'https://www.sec.gov/spotlight/insidertrading/cases.shtml', type: 'Government' },
 { title: 'Bloomberg Markets Coverage', url: 'https://www.bloomberg.com/markets', type: 'Analysis' },
 { title: 'WSJ Markets Coverage', url: 'https://www.wsj.com/news/markets', type: 'Analysis' },
 { title: 'FinCEN Enforcement Actions', url: 'https://web.archive.org/web/20241230154038/https://www.fincen.gov/news/news-releases/', type: 'Government' },
 { title: 'FDIC Failed Banks List', url: 'https://www.fdic.gov/resources/resolutions/bank-failures/failed-bank-list/', type: 'Government' },
   { title: 'SEC Litigation Releases', url: 'https://www.sec.gov/litigation/litreleases.htm', type: 'Reference' },
 ],
 affiliations: [
 { id: '1', name: 'SEC', type: 'agency', relationship: 'Key figure in investigation', href: '/entities/agencies/sec' },
 { id: '2', name: 'Ivan Boesky', type: 'individual', relationship: 'Key figure in investigation', href: '/entities/individuals/ivan-boesky' },
 { id: '3', name: 'Michael Milken', type: 'individual', relationship: 'Key figure in investigation', href: '/entities/individuals/michael-milken' },
 ],
   eventOriginDate: '1980-01-01',
   lastActivityDate: '2014-06-15',
   pageUpdatedDate: '2026-03-18',
   timeline: [
     { date: '1980-01-01', event: 'Wall Street insider trading ring involving Ivan Boesky, Michael Milken, and others that defined an era of financial excess and regulatory', type: 'financial' },
     { date: '1986', event: 'Ivan Boesky paid $100 million in fines after admitting to insider trading in 1986.', type: 'financial' },
     ],
 },
  '1mdb-scandal': {
 title: '1MDB Sovereign Wealth Fund Scandal',
 subtitle: 'Billions stolen from Malaysian sovereign wealth fund 1MDB involving global banks, politicians, and Goldman Sachs.',
 severity: 'critical',
 category: 'Financial Crime',
 date: 'December 19, 2022',
 lastUpdated: 'August 4, 2023',
 summary: 'Billions stolen from Malaysian sovereign wealth fund 1MDB involving global banks, politicians, and Goldman Sachs.',
 content: [
 'The 1Malaysia Development Berhad (1MDB) scandal involved the misappropriation of over $4.5 billion from the Malaysian sovereign wealth fund.',
 'Goldman Sachs paid $2.9 billion in penalties for its role in underwriting bonds that facilitated the theft. Former PM Najib Razak was convicted and sentenced to 12 years.',
 'The DOJ described it as the largest kleptocracy case in history, with stolen funds used to purchase luxury real estate, yachts, artwork, and finance the film "The Wolf of Wall Street."',
 ],
 tags: ['Financial Crime', 'Fraud', 'Investigation', 'Accountability'],
 sources: [
 { title: 'FinCEN Enforcement Actions', url: 'https://web.archive.org/web/20241230154038/https://www.fincen.gov/news/news-releases/', type: 'Government' },
 { title: 'FDIC Failed Banks List', url: 'https://www.fdic.gov/resources/resolutions/bank-failures/failed-bank-list/', type: 'Government' },
 { title: 'Congressional Research Service Reports', url: 'https://crsreports.congress.gov/', type: 'Government' },
   { title: 'SEC Litigation Releases', url: 'https://www.sec.gov/litigation/litreleases.htm', type: 'Reference' },
 ],
 affiliations: [
 { id: '1', name: 'DOJ', type: 'agency', relationship: 'Key figure in investigation', href: '/entities/agencies/doj' },
 { id: '2', name: 'Goldman Sachs', type: 'corporation', relationship: 'Key figure in investigation', href: '/entities/corporations/goldman-sachs' },
 ],
   eventOriginDate: '2022-12-19',
   lastActivityDate: '2023-08-04',
   pageUpdatedDate: '2026-03-18',
   timeline: [
     { date: '2022', event: '1MDB Sovereign Wealth Fund Scandal — initial events and core patterns documented', type: 'default' },
     { date: '2027', event: 'Continued developments in 1mdb sovereign wealth fund scandal with new evidence emerging', type: 'default' },
   ],
 },
 'financial-crisis-accountability-failure': {
  title: '2008 Financial Crisis: The Greatest Accountability Failure in American History',
  subtitle: 'How Wall Street banks crashed the global economy through fraud, received $700 billion in taxpayer bailouts, and emerged more powerful than ever — with zero senior executives imprisoned',
  severity: 'critical' as const,
  category: 'Financial Crime',
  date: '2024-09-15',
  lastUpdated: '2025-02-20',
  summary: 'The 2008 financial crisis — caused by systematic fraud in mortgage origination, securitization, and credit ratings — destroyed $11 trillion in household wealth, cost 8.7 million jobs, and triggered the worst economic downturn since the Great Depression. Despite overwhelming evidence of criminal fraud at every level, zero senior executives at major banks were criminally prosecuted. Instead, the government provided $700 billion in TARP bailouts plus trillions in Federal Reserve emergency lending to the same institutions that caused the crisis. By 2012, the bailed-out banks were larger, more profitable, and more concentrated than before the crisis.',
  content: [
   'The crisis originated in predatory mortgage lending. Banks like Countrywide Financial, Washington Mutual, and Ameriquest originated millions of mortgages to borrowers who could not afford them — often using no-documentation "liar loans," adjustable-rate mortgages with exploding payments, and outright fraud. Internal emails show loan officers were instructed to falsify income figures and were rewarded with bonuses for volume regardless of quality. Countrywide CEO Angelo Mozilo called his own products "toxic" and "poison" in private emails while publicly promoting them.',
   'The securitization pipeline converted fraudulent mortgages into AAA-rated securities sold to pension funds, municipalities, and investors worldwide. Goldman Sachs, Deutsche Bank, and other Wall Street firms bundled junk mortgages into collateralized debt obligations (CDOs), then bet against those same securities using credit default swaps. Goldman\'s Abacus deal — in which the firm let a hedge fund select mortgages likely to fail, sold them to investors, and profited when they collapsed — resulted in a $550 million SEC settlement (five days of revenue) and no criminal charges.',
   'The credit rating agencies — Moody\'s, Standard & Poor\'s, and Fitch — assigned AAA ratings to securities they knew were toxic because their revenue depended on fees from the banks issuing the securities. Internal communications released by the Senate showed analysts calling deals "ridiculous" and a "nightmare" while rating them investment-grade. A Moody\'s managing director testified that the company would rate a deal "structured by cows" if it meant maintaining market share. Not a single rating agency employee was criminally charged.',
   'The government response prioritized saving banks over prosecuting fraud or protecting homeowners. The $700 billion TARP bailout was supplemented by trillions in Federal Reserve emergency lending (revealed years later by Bloomberg through FOIA litigation to total $7.77 trillion in peak lending). Banks that received bailouts simultaneously paid billions in bonuses: AIG paid $165 million in bonuses within days of receiving $170 billion in taxpayer funds. Meanwhile, 10 million Americans lost their homes to foreclosure, and the Obama administration\'s HAMP program helped only 1.8 million homeowners — far short of the 4 million promised.',
   'Attorney General Eric Holder explicitly stated that some banks were "too big to jail" — that criminal prosecution could destabilize the financial system. DOJ settled with virtually every major bank through deferred prosecution agreements and corporate fines. Banks paid $150+ billion in combined settlements but admitted no wrongdoing, and not a single CEO, CFO, or senior executive of a major bank was criminally convicted. Kareem Serageldin, a mid-level Credit Suisse trader, was the only Wall Street executive imprisoned for crisis-related conduct. Iceland, by contrast, imprisoned 26 bankers. The crisis demonstrated that at sufficient scale, financial fraud becomes effectively legal.',
  ],
  tags: ['financial crisis', '2008', 'Wall Street', 'bailout', 'TARP', 'Goldman Sachs', 'CDO', 'credit ratings', 'Too Big to Fail', 'mortgage fraud', 'accountability'],
  sources: [
   { title: 'FCIC: Financial Crisis Inquiry Commission Report', url: 'https://www.govinfo.gov/content/pkg/GPO-FCIC/pdf/GPO-FCIC.pdf', type: 'Government Report' },
   { title: 'Senate Permanent Subcommittee: Wall Street and the Financial Crisis (Levin Report)', url: 'https://www.hsgac.senate.gov/subcommittees/investigations/', type: 'Congressional Report' },
   { title: 'ProPublica: Bailout Tracker', url: 'https://projects.propublica.org/bailout/', type: 'Investigation' },
    { title: 'SEC Litigation Releases', url: 'https://www.sec.gov/litigation/litreleases.htm', type: 'Reference' },
  ],
  affiliations: [
   { id: '1', name: 'DOJ', type: 'agency', relationship: 'AG Holder declared banks too big to jail; zero senior executives prosecuted; settled with deferred prosecution agreements and corporate fines; Holder returned to bank defense firm after DOJ', href: '/entities/agencies/doj' },
   { id: '2', name: 'SEC', type: 'agency', relationship: 'Failed to detect Madoff despite warnings; settled Goldman Sachs Abacus fraud for $550M with no admission; destroyed records of 9,000+ preliminary investigations', href: '/entities/agencies/sec' },
  ],
  eventOriginDate: '2008-01-01',
  lastActivityDate: '2025-02-20',
  pageUpdatedDate: '2026-03-18',
   timeline: [
     { date: '2008', event: 'The 2008 financial crisis — caused by systematic fraud in mortgage origination, securitization, and credit ratings — destroyed $11 trillion in household wealth, cost 8.', type: 'financial' },
     { date: '2012', event: 'By 2012, the bailed-out banks were larger, more profitable, and more concentrated than before the crisis.', type: 'critical' },
     ],
 },
};

export default investigations_1;
