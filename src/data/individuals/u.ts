// Individual profile data shard
import type { IndividualProfile } from './types';

const profiles: Record<string, IndividualProfile> = {
 'ulysses-s-grant': {
 name: 'Ulysses S. Grant',
 title: '18th President of the United States',
 role: 'Civil War General; President; Indian Policy Architect',
 riskLevel: 'high',
 description: 'Ulysses S. Grant was the 18th President of the United States (1869-1877) and commanding general of the Union Army that won the Civil War. While celebrated for preserving the Union and advancing Reconstruction-era protections for freed slaves; Grant\'s presidency also implemented devastating policies against Native Americans that laid the groundwork for decades of cultural genocide. Grant\'s "Peace Policy" (1869) was framed as humanitarian reform but fundamentally sought to concentrate Native peoples onto reservations and replace their cultures with Western Christian civilization. He assigned Indian agencies to various Christian denominations; requiring Native children to attend mission schools where they were forbidden from speaking their languages or practicing their traditions. This policy directly preceded and enabled the Indian boarding school system formalized under Richard Henry Pratt\'s Carlisle Industrial School (1879); whose motto was "Kill the Indian; save the man." Over the next century; the federal boarding school system would forcibly remove over 100;000 Native children from their families; with thousands dying from disease; abuse; and neglect in at least 523 schools identified by the Department of the Interior\'s 2022 investigation. Grant also signed legislation enabling railroad expansion through tribal lands; supported the deliberate destruction of buffalo herds as a military strategy against Plains tribes (General Philip Sheridan estimated 4.5 million buffalo were killed between 1872-1874 alone); and presided over the Red Cloud War aftermath and the Black Hills crisis that led to the Great Sioux War. His administration was riddled with corruption including the Whiskey Ring scandal; Credit Mobilier; and the Belknap scandal involving the sale of Indian trading post appointments.',
 birthDate: 'April 27, 1822',
 birthPlace: 'Point Pleasant, Ohio',
 deathDate: 'July 23, 1885',
 education: ['United States Military Academy at West Point (1843)'],
 affiliations: [
 { name: 'United States Government', role: '18th President (1869-1877)', type: 'agency' },
 { name: 'U.S. Army', role: 'Commanding General of the Union Army (1864-1869)', type: 'agency' },
 { name: 'Republican Party', role: 'Member', type: 'organization' },
 ],
 controversies: [
 'Peace Policy (1869): concentrated Native peoples onto reservations and assigned Indian agencies to Christian denominations; forcing religious conversion and cultural erasure as precursors to the boarding school system',
 'Enabled the Indian boarding school system that forcibly removed over 100;000 Native children from families; at least 523 schools operated; thousands of children died from disease; abuse; and neglect',
 'Supported and enabled the deliberate destruction of buffalo herds as a military strategy against Plains tribes; General Sheridan estimated 4.5 million buffalo killed between 1872-1874 alone; devastating Native food sources and way of life',
 'Signed legislation enabling railroad expansion through tribal lands without meaningful consent; displacing Native communities and fragmenting traditional territories',
 'Presided over the Black Hills crisis after gold was discovered on Sioux treaty land; leading to the Great Sioux War of 1876 and the illegal seizure of the Black Hills in violation of the 1868 Fort Laramie Treaty',
 'Administration plagued by corruption: Whiskey Ring scandal (tax fraud; Grant\'s personal secretary Orville Babcock indicted); Credit Mobilier railroad fraud; Belknap scandal (Secretary of War impeached for selling Indian trading post appointments)',
 'Issued General Order No. 11 (1862) expelling all Jews from the Department of the Tennessee; the most sweeping anti-Jewish regulation in American history; later revoked by Lincoln',
 'Despite advancing Reconstruction protections for Black Americans; his Indian policies demonstrated how civil rights for one group coexisted with brutal oppression of another',
 ],
 charges: [],
 relatedInvestigations: [
 { title: 'American Indian Boarding Schools', slug: 'indian-boarding-schools', severity: 'critical' },
 ],
 timeline: [
 { date: 'April 27, 1822', event: 'Born in Point Pleasant; Ohio' },
 { date: '1843', event: 'Graduated from West Point' },
 { date: '1864', event: 'Appointed Commanding General of all Union forces by Lincoln' },
 { date: 'April 9, 1865', event: 'Accepted Confederate surrender from Robert E. Lee at Appomattox Court House' },
 { date: '1869', event: 'Inaugurated as 18th President; implemented "Peace Policy" for Native Americans' },
 { date: '1869', event: 'Established Board of Indian Commissioners; assigned tribal agencies to Christian denominations' },
 { date: '1872-1874', event: 'Buffalo destruction accelerates as military strategy; 4.5 million killed in two years' },
 { date: '1874', event: 'Gold discovered in Black Hills by Custer\'s expedition; on Sioux treaty land' },
 { date: '1875', event: 'Grant secretly decided not to enforce treaty protections for Black Hills; allowing illegal mining' },
 { date: '1876', event: 'Great Sioux War; Battle of Little Bighorn; Custer killed; government seizes Black Hills' },
 { date: '1877', event: 'Left presidency; administration marked by corruption scandals' },
 { date: '1879', event: 'Carlisle Indian Industrial School opens (post-presidency); direct outgrowth of Grant\'s Peace Policy' },
 { date: 'July 23, 1885', event: 'Died of throat cancer at age 63 in Mount McGregor; New York' },
 ],
 socialMedia: [],
 sources: [
 { title: 'Department of the Interior: Federal Indian Boarding School Initiative', url: 'https://www.doi.gov/priorities/strengthening-indian-country/federal-indian-boarding-school-initiative', date: '2022' },
 { title: 'National Park Service: Grant and Indian Policy', url: 'https://www.nps.gov/ulsg/', date: '2023' },
 { title: 'American Experience: Grant (PBS)', url: 'https://www.pbs.org/', date: '2017' },
 ],
 aliases: ['U.S. Grant', 'Unconditional Surrender Grant'],
 knownAssociates: [
 { name: 'William Tecumseh Sherman', relationship: 'Fellow Union general; implemented Indian removal policies as Commanding General after Grant became President', href: '/entities/individuals/william-tecumseh-sherman' },
 { name: 'Philip Sheridan', relationship: 'Union cavalry commander; oversaw Indian Wars; reportedly said "the only good Indian is a dead Indian"', href: '/entities/individuals/philip-sheridan' },
 { name: 'Nathan Bedford Forrest', relationship: 'Confederate general and first Grand Wizard of the Ku Klux Klan', href: '/entities/individuals/nathan-bedford-forrest' },
 ],
 },






 'ursula-von-der-leyen': {
 name: 'Ursula von der Leyen',
 title: 'President of the European Commission',
 role: 'EU Commission President; Former German Defense Minister',
 riskLevel: 'medium',
 description: 'Ursula von der Leyen has served as President of the European Commission since 2019; the first woman to hold the position. Previously; she served as German Minister of Defense (2013-2019) and held several other cabinet positions under Chancellor Angela Merkel. Her tenure has been marked by significant controversies. As German Defense Minister; she faced a major scandal when she hired expensive external consultants from McKinsey and Accenture without proper procurement procedures; costing taxpayers hundreds of millions of euros. A parliamentary investigation was launched; but critical evidence was destroyed when the phones of von der Leyen and key staff were wiped; ostensibly for "security reasons;" before they could be examined. As EU Commission President; she became embroiled in "Pfizergate" when the New York Times revealed she had exchanged personal text messages with Pfizer CEO Albert Bourla during negotiations for a massive COVID-19 vaccine contract worth up to 35 billion euros for 1.8 billion doses; far more than the EU\'s population of 450 million. The European Ombudsman found the Commission\'s refusal to search for the texts constituted "maladministration." The European Public Prosecutor\'s Office (EPPO) opened a criminal investigation in October 2022. Von der Leyen has refused to disclose the texts; claiming they were personal communications. She was narrowly re-elected for a second term in 2024 despite these ongoing investigations.',
 birthDate: 'October 8, 1958',
 birthPlace: 'Brussels, Belgium',
 education: ['London School of Economics', 'Hannover Medical School, MD (1991)'],
 affiliations: [
 { name: 'European Commission', role: 'President (2019-present)', type: 'agency' },
 { name: 'German Federal Ministry of Defence', role: 'Minister (2013-2019)', type: 'agency' },
 { name: 'CDU (Christian Democratic Union)', role: 'Member', type: 'organization' },
 ],
 controversies: [
 '"Pfizergate": exchanged personal text messages with Pfizer CEO Albert Bourla during negotiations for a 35 billion euro vaccine contract (1.8 billion doses for a population of 450 million); then refused to disclose the texts; European Public Prosecutor opened criminal investigation in October 2022',
 'European Ombudsman ruled the Commission\'s refusal to search for von der Leyen\'s text messages with Bourla constituted "maladministration"',
 'As German Defense Minister; hired external consultants from McKinsey and Accenture worth hundreds of millions of euros without proper procurement procedures; triggered Bundestag investigation',
 'Key evidence in the consulting scandal was destroyed when mobile phones belonging to von der Leyen and staff were wiped before parliamentary investigators could examine them',
 'The Bundeswehr (German military) under her leadership suffered severe readiness problems; with reports of soldiers training with broomsticks instead of weapons and helicopters and tanks largely non-operational',
 'Plagiarism allegations in her 1991 medical dissertation from Hannover Medical School; a commission found "some shortcomings" but did not revoke the degree',
 'Oversaw EU vaccine procurement that resulted in massive overordering; 1.8 billion doses for 450 million people with questionable terms and liability protections for pharmaceutical companies',
 ],
 charges: [],
 relatedInvestigations: [
 { title: 'COVID-19 Pandemic Response', slug: 'covid-pandemic-response', severity: 'critical' },
 ],
 timeline: [
 { date: 'October 8, 1958', event: 'Born in Brussels; Belgium (father was European Commission official)' },
 { date: '1991', event: 'Completed MD at Hannover Medical School' },
 { date: '2003', event: 'Entered Merkel\'s shadow cabinet; began political career' },
 { date: '2013', event: 'Became Germany\'s first female Defense Minister' },
 { date: '2019', event: 'Bundestag launched investigation into consulting scandal at Defense Ministry; phones wiped' },
 { date: 'July 2019', event: 'Narrowly elected President of the European Commission' },
 { date: '2020-2021', event: 'Negotiated EU COVID vaccine contracts; exchanged texts with Pfizer CEO Bourla' },
 { date: 'April 2021', event: 'New York Times reported on text message exchanges with Bourla; Commission refused disclosure' },
 { date: 'July 2022', event: 'European Ombudsman ruled Commission\'s handling of text message requests was "maladministration"' },
 { date: 'October 2022', event: 'European Public Prosecutor\'s Office opened criminal investigation into vaccine contract negotiations' },
 { date: 'July 2024', event: 'Narrowly re-elected for second term as Commission President despite ongoing investigations' },
 ],
 socialMedia: [],
 sources: [
 { title: 'New York Times: Ursula von der Leyen Texts', url: 'https://www.nytimes.com/2021/04/28/world/europe/european-union-pfizer-von-der-leyen-texts.html', date: '2021' },
 { title: 'European Ombudsman: Decision on Pfizer Texts', url: 'https://www.ombudsman.europa.eu/', date: '2022' },
 { title: 'Politico EU: Pfizergate', url: 'https://www.politico.eu/', date: '2023' },
 ],
 aliases: ['VdL', 'Queen Ursula'],
 knownAssociates: [
 { name: 'Angela Merkel', relationship: 'Served in Merkel\'s cabinet for over a decade' },
 { name: 'Albert Bourla', relationship: 'Pfizer CEO; exchanged undisclosed text messages during vaccine contract negotiations', href: '/entities/individuals/albert-bourla' },
 ],
 },
 'john-stumpf': {
  name: 'John Stumpf',
  title: 'Former CEO of Wells Fargo',
  role: 'Bank CEO Who Oversaw Millions of Fake Accounts',
  riskLevel: 'critical' as const,
  description: 'John Stumpf led Wells Fargo during a massive scandal in which bank employees created over 3.5 million fake accounts and credit cards in customers names without their consent, driven by unrealistic sales quotas and a toxic corporate culture. He initially blamed low-level employees before being forced to resign and paying $17.5 million in fines.',
  birthDate: '1953-09-15',
  birthPlace: 'Pierz, Minnesota',
  education: [
   'B.S. in Finance, St. Cloud State University (1976)',
   'M.B.A., University of Minnesota (1982)',
  ],
  affiliations: [
   { name: 'Wells Fargo', role: 'Chairman and CEO (2007-2016)', type: 'corporation' as const },
  ],
  controversies: [
   'Wells Fargo employees created over 3.5 million fake bank accounts and credit cards in customers names without their knowledge or consent',
   'Bank imposed aggressive cross-selling quotas that pressured employees to commit fraud; internal motto was "Eight is Great" (accounts per customer)',
   'Initially blamed low-level employees for the fraud and fired over 5,300 workers while executives retained bonuses',
   'Told Senate Banking Committee the fake accounts were the result of individual employee misconduct rather than systemic corporate culture',
   'OCC banned Stumpf from the banking industry for life and fined him $17.5 million',
   'Wells Fargo ultimately paid over $3 billion in fines across multiple regulatory actions for the fake accounts scandal',
   'Clawed back $69 million in stock awards from Stumpf, the largest executive clawback in banking history at that time',
  ],
  relatedInvestigations: [
   { title: 'Predatory Lending Post-Crisis', slug: 'predatory-lending-post-crisis', severity: 'critical' },
  ],
  timeline: [
   { date: '2007', event: 'Became CEO of Wells Fargo' },
   { date: '2013-2016', event: 'Internal reports flagged fake account creation; management took limited action' },
   { date: '2016-09', event: 'CFPB fined Wells Fargo $185 million; 5,300 employees fired for fake accounts' },
   { date: '2016-09-20', event: 'Testified before Senate Banking Committee; blamed individual employees' },
   { date: '2016-10-12', event: 'Resigned as CEO under pressure; forfeited $41 million in stock awards' },
   { date: '2020-01', event: 'OCC banned Stumpf from banking for life and fined him $17.5 million' },
   { date: '2020-02', event: 'Wells Fargo paid $3 billion to settle DOJ and SEC charges related to fake accounts' },
  ],
  sources: [
   { title: 'CFPB: Wells Fargo Fake Accounts Enforcement Action', date: '2016' },
   { title: 'OCC: Stumpf Lifetime Ban and Fine', date: '2020' },
   { title: 'Senate Banking Committee: Stumpf Fake Accounts Hearing', date: '2016' },
  ],
  aliases: [],
  knownAssociates: [
   { name: 'Carrie Tolstedt', relationship: 'Head of community banking division where fake accounts originated; also banned from banking and fined' },
  ],
 },
};

export default profiles;
