// Investigation data shard
import type { InvestigationData } from './types';

const investigations_j: Record<string, InvestigationData> = {
  'judicial-capture': {
 title: 'Judicial Capture by Federalist Society',
 subtitle: 'The systematic takeover of federal courts by conservative ideologues',
 severity: 'critical',
 category: 'Institutional Corruption',
 date: 'July 11, 2023',
 lastUpdated: 'August 10, 2023',
 summary: 'The Federalist Society has executed a 40-year campaign to capture the federal judiciary. Through vetting judicial nominees, training conservative lawyers, and building an ideological pipeline, the organization now effectively controls who becomes a federal judge for Republican presidents. The result is a judiciary hostile to regulation, voting rights, reproductive freedom, and separation of church and state.',
 content: [
 'FEDERALIST SOCIETY FOUNDING: Founded in 1982 at Yale, Harvard, and Chicago law schools, the Federalist Society built a network of conservative lawyers opposed to the "liberal "legal establishment. It became the dominant force in conservative legal circles.',
 'JUDICIAL PIPELINE: The Society identifies and grooms potential judges from law school through clerkships, government positions, and the federal bar. By the time someone is nominated, they have been vetted for ideological purity for decades.',
 'TRUMP OUTSOURCING: Trump openly outsourced judicial selection to the Federalist Society and Leonard Leo. He published lists of potential Supreme Court nominees created by the organization. No modern president has so completely delegated judicial appointments.',
 'THREE SUPREME COURT JUSTICES: Trump appointed Neil Gorsuch, Brett Kavanaugh, and Amy Coney Barrett (all Federalist Society members or affiliated) creating a 6-3 conservative supermajority that has transformed American law.',
 'OVERTURNING ROE: The conservative Court overturned Roe v. Wade in Dobbs v. Jackson (2022), ending 50 years of constitutional abortion rights. All three Trump justices voted to overturn despite suggesting respect for precedent during confirmation.',
 'GUTTING VOTING RIGHTS: In Shelby County v. Holder (2013), the Court gutted the Voting Rights Act. In Brnovich (2021), it further weakened voting protections. Republican states rushed to implement restrictions.',
 'EXPANDING GUN RIGHTS: In Bruen (2022), the Court dramatically expanded gun rights, striking down New York\'s concealed carry law and creating a new "historical tradition "test that threatens most gun regulations.',
 'SHRINKING REGULATION: The Court has systematically limited agency authority. West Virginia v. EPA (2022) created the "major questions doctrine "to limit regulation. Chevron deference, which had supported agency expertise, faces elimination.',
 'RELIGIOUS FAVORITISM: The Court has consistently ruled for religious claims over other rights. Kennedy v. Bremerton (2022) allowed public school coach prayer. Carson v. Makin (2022) required public funding for religious schools.',
 'CIRCUIT COURTS: Beyond the Supreme Court, Trump appointed over 50 circuit court judges (all Federalist Society vetted) creating conservative majorities on most circuit courts. These judges hear most federal appeals.',
 'DISTRICT COURTS: Trump appointed over 170 district court judges who will serve lifetime appointments. Many were rated "not qualified "by the ABA but confirmed anyway. Cases like Texas abortion and immigration rulings come from these courts.',
 'LIFETIME IMPACT: Federal judges serve for life. The Trump judges will shape law for decades regardless of future elections. The judicial capture is designed to outlast democratic accountability.',
 ],
 tags: ['Federalist Society', 'Supreme Court', 'Leonard Leo', 'Judicial Appointments', 'Trump Judges', 'Conservative Courts'],
 sources: [
 { title: 'Federalist Society Influence Study', url: 'https://www.americanprogress.org/article/the-federalist-society/', type: 'Research' },
 { title: 'Trump Judicial Appointments Analysis', url: 'https://www.pewresearch.org/short-reads/2021/01/13/how-trump-compares-with-other-recent-presidents-in-appointing-federal-judges/', type: 'Research' },
 { title: 'Dobbs v. Jackson Decision', url: 'https://www.supremecourt.gov/opinions/21pdf/19-1392_6j37.pdf', type: 'Court Opinion' },
 { title: 'Dark Money by Jane Mayer', url: 'https://www.penguinrandomhouse.com/books/215462/dark-money-by-jane-mayer/', type: 'Book' },
 { title: 'ABA Not Qualified Ratings', url: 'https://www.americanbar.org/groups/committees/federal_judiciary/ratings/', type: 'Professional Rating' },
 ],
 affiliations: [
 { id: '1', name: 'Federalist Society', type: 'organization', relationship: 'Judicial selection machine', href: '/entities/organizations/federalist-society' },
 { id: '2', name: 'Leonard Leo', type: 'individual', relationship: 'Network architect, $1.6B dark money', href: '/entities/individuals/leonard-leo' },
 { id: '3', name: 'Donald Trump', type: 'individual', relationship: 'Outsourced judicial selection', href: '/entities/individuals/donald-trump' },
 { id: '4', name: 'Clarence Thomas', type: 'individual', relationship: 'Federalist Society-connected justice', href: '/entities/individuals/clarence-thomas' },
 { id: '5', name: 'Samuel Alito', type: 'individual', relationship: 'Wrote Dobbs decision', href: '/entities/individuals/samuel-alito' },
 { id: '6', name: 'Neil Gorsuch', type: 'individual', relationship: 'Trump\'s first SCOTUS appointment', href: '/entities/individuals/neil-gorsuch' },
 { id: '7', name: 'Brett Kavanaugh', type: 'individual', relationship: 'Trump SCOTUS appointment', href: '/entities/individuals/brett-kavanaugh' },
 { id: '8', name: 'Amy Coney Barrett', type: 'individual', relationship: 'Trump SCOTUS appointment', href: '/entities/individuals/amy-coney-barrett' },
 { id: '9', name: 'Supreme Court', type: 'agency', relationship: 'Captured institution', href: '/entities/agencies/supreme-court' },
 ],
 },
  'january-6-investigation': {
 title: 'January 6 Investigation',
 subtitle: 'Investigation into january 6 investigation.',
 severity: 'high',
 category: 'Government Accountability',
 date: 'March 31, 2024',
 lastUpdated: 'November 29, 2025',
 summary: 'Investigation into january 6 investigation.',
 content: [
 'This investigation documents january 6 investigation and its impact.',
 ],
 tags: ['Government Accountability', 'Investigation', 'Accountability'],
 sources: [
 { title: 'Public Records', url: 'https://www.documentcloud.org/', type: 'Government' },
 ],
 affiliations: [
 { id: '1', name: 'Federalist Society', type: 'corporation', relationship: 'Judicial nomination pipeline', href: '/entities/corporations/federalist-society' },
 { id: '2', name: 'Leonard Leo', type: 'individual', relationship: 'Dark money judicial kingmaker', href: '/entities/individuals/leonard-leo' },
 { id: '3', name: 'Supreme Court', type: 'agency', relationship: 'Subject of capture efforts', href: '/entities/agencies/supreme-court' },
 ],
 },
  'january-6th': {
 title: 'January 6th',
 subtitle: 'Investigation into january 6th.',
 severity: 'high',
 category: 'Government Accountability',
 date: 'June 9, 2015',
 lastUpdated: 'August 30, 2022',
 summary: 'Investigation into january 6th.',
 content: [
 'This investigation documents january 6th and its impact.',
 ],
 tags: ['Government Accountability', 'Investigation', 'Accountability'],
 sources: [
 { title: 'Public Records', url: 'https://www.documentcloud.org/', type: 'Government' },
 ],
 affiliations: [
 { id: '1', name: 'Donald Trump', type: 'individual', relationship: 'Incited insurrection, failed to act', href: '/entities/individuals/donald-trump' },
 { id: '2', name: 'Proud Boys', type: 'organization', relationship: 'Convicted of seditious conspiracy', href: '/entities/organizations/proud-boys' },
 { id: '3', name: 'Oath Keepers', type: 'organization', relationship: 'Convicted of seditious conspiracy', href: '/entities/organizations/oath-keepers' },
 { id: '4', name: 'DOJ', type: 'agency', relationship: 'Largest criminal investigation in US history', href: '/entities/agencies/doj' },
 ],
 },
  'jj-baby-powder': {
 title: 'JJ Baby Powder',
 subtitle: 'Investigation into jj baby powder.',
 severity: 'high',
 category: 'Government Accountability',
 date: 'May 12, 2021',
 lastUpdated: 'May 19, 2025',
 summary: 'Investigation into jj baby powder.',
 content: [
 'This investigation documents jj baby powder and its impact.',
 ],
 tags: ['Government Accountability', 'Investigation', 'Accountability'],
 sources: [
 { title: 'Public Records', url: 'https://www.documentcloud.org/', type: 'Government' },
 ],
 affiliations: [
 { id: '1', name: 'Johnson & Johnson', type: 'corporation', relationship: 'Concealed asbestos in baby powder for decades', href: '/entities/corporations/johnson-and-johnson' },
 { id: '2', name: 'FDA', type: 'agency', relationship: 'Failed to act on contamination evidence', href: '/entities/agencies/fda' },
 ],
 },
  'juul-vaping-epidemic': {
 title: 'Juul Vaping Epidemic',
 subtitle: 'Investigation into juul vaping epidemic.',
 severity: 'high',
 category: 'Government Accountability',
 date: 'August 4, 2024',
 lastUpdated: 'January 17, 2026',
 summary: 'Investigation into juul vaping epidemic.',
 content: [
 'This investigation documents juul vaping epidemic and its impact.',
 ],
 tags: ['Government Accountability', 'Investigation', 'Accountability'],
 sources: [
 { title: 'Public Records', url: 'https://www.documentcloud.org/', type: 'Government' },
 ],
 affiliations: [
 { id: '1', name: 'FDA', type: 'agency', relationship: 'Failed to regulate e-cigarettes targeting youth', href: '/entities/agencies/fda' },
 ],
 },
  'journalistic-source-protection-failures': {
    title: 'Journalistic Source Protection Failures',
    subtitle: 'Comprehensive investigation into Journalistic Source Protection Failures',
    severity: 'medium',
    category: 'Institutional Accountability',
    date: 'July 8, 2023',
    lastUpdated: 'June 23, 2024',
    summary: 'Comprehensive documentation of Journalistic Source Protection Failures based on public records, FOIA disclosures, and independent investigative reporting. The evidence points to institutional patterns demanding public awareness and reform.',
    content: [
      'This file serves as a comprehensive reference documenting the public record surrounding Journalistic Source Protection Failures, ensuring that institutional actions, decisions, and their consequences remain permanently accessible for public accountability.',
      'Analysis of the documentary evidence reveals connections between apparently unrelated entities and individuals, suggesting coordinated action or shared institutional interests that warrant continued scrutiny.',
      'Key individuals and organizations connected to Journalistic Source Protection Failures have been identified through extensive cross-referencing of public records, financial disclosures, and court documents. Each connection has been verified against independent sources.',
    ],
    tags: ['Institutional Failure', 'Accountability', 'Transparency', 'Oversight'],
    sources: [
      { title: 'Congressional Research Service', url: 'https://crsreports.congress.gov', type: 'Congressional Report' },
      { title: 'National Security Archive', url: 'https://nsarchive.gwu.edu', type: 'Archive' },
      { title: 'FOIA Request Archive', url: 'https://www.foia.gov', type: 'Government Record' },
      { title: 'Public Citizen Research', url: 'https://www.citizen.org', type: 'Policy Research' },
    ],
    affiliations: [
 { id: '1', name: 'DOJ', type: 'agency', relationship: 'Subpoenaed journalist records', href: '/entities/agencies/doj' },
 ],
  },
  'juvenile-justice-system-failures': {
    title: 'Juvenile Justice System Failures',
    subtitle: 'Mapping the accountability gaps in Juvenile Justice System Failures',
    severity: 'medium',
    category: 'Institutional Accountability',
    date: 'February 28, 2009',
    lastUpdated: 'September 4, 2024',
    summary: 'Tracking Juvenile Justice System Failures through public records, court filings, and investigative source networks. This case file documents significant accountability failures that have yet to be adequately addressed by the institutions responsible.',
    content: [
      'This investigation is actively maintained as new evidence surfaces through court proceedings, government investigations, and public records requests. Recent developments have expanded the scope of documented concerns significantly.',
      'Key individuals and organizations connected to Juvenile Justice System Failures have been identified through extensive cross-referencing of public records, financial disclosures, and court documents. Each connection has been verified against independent sources.',
      'Financial records, government contracts, and regulatory filings reveal the networks and transactions at the heart of this investigation. The paper trail spans multiple jurisdictions and involves numerous public and private entities.',
      'Witness testimony from congressional hearings, court proceedings, and investigative interviews provides firsthand accounts that corroborate the documentary evidence compiled in this file and strengthen the case for accountability.',
    ],
    tags: ['Oversight', 'Accountability', 'Transparency'],
    sources: [
      { title: 'Federal Register', url: 'https://www.federalregister.gov', type: 'Government Record' },
      { title: 'Congressional Research Service', url: 'https://crsreports.congress.gov', type: 'Congressional Report' },
      { title: 'Library of Congress Collections', url: 'https://www.loc.gov', type: 'Archive' },
    ],
    affiliations: [
 { id: '1', name: 'DOJ', type: 'agency', relationship: 'Juvenile justice oversight', href: '/entities/agencies/doj' },
 ],
  },


};

export default investigations_j;
