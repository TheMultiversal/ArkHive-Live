/**
 * Investigation-to-Defendant Cross-Reference Database
 * Maps investigation slugs to known defendants with conviction status.
 * Based on publicly available court records, indictments, and legal proceedings.
 */

import type { Defendant } from './types';

const investigationDefendants: Record<string, Defendant[]> = {
  '1mdb-scandal': [
    { name: 'Jho Low', role: 'Mastermind of 1MDB fund embezzlement', status: 'charged', charges: ['Money laundering', 'Conspiracy to commit fraud'], notes: 'Fugitive; charged by DOJ in 2018; believed to be in China/Macau' },
    { name: 'Najib Razak', imageUrl: '/defendants/najib-razak.jpg', role: 'Former Prime Minister of Malaysia', status: 'convicted', charges: ['Abuse of power', 'Money laundering', 'Criminal breach of trust'], sentence: '12 years imprisonment', fine: '$50 million', convictionDate: '2020-07-28', notes: 'Convicted on all 7 charges; sentence upheld by Federal Court 2022' },
    { name: 'Goldman Sachs', role: 'Underwriter of fraudulent 1MDB bonds', status: 'settled', fine: '$2.9 billion', notes: 'Global settlement 2020; admitted role in bribery scheme' },
    { name: 'Tim Leissner', role: 'Former Goldman Sachs partner', status: 'convicted', charges: ['Conspiracy to launder money', 'Foreign bribery'], convictionDate: '2018-08-28', notes: 'Pled guilty; cooperating witness' },
    { name: 'Roger Ng', role: 'Former Goldman Sachs managing director', status: 'convicted', charges: ['Conspiracy to launder money', 'Bribery'], convictionDate: '2022-04-08', notes: 'Convicted at trial in Brooklyn federal court' },
  ],
  'financial-crisis-accountability-failure': [
    { name: 'Countrywide Financial / Angelo Mozilo', imageUrl: '/defendants/angelo-mozilo.jpg', role: 'CEO of largest subprime lender', status: 'settled', fine: '$67.5 million', notes: 'SEC civil settlement 2010; no criminal charges despite massive fraud' },
    { name: 'Bear Stearns / Ralph Cioffi & Matthew Tannin', role: 'Hedge fund managers who misled investors', status: 'acquitted', notes: 'Acquitted at trial 2009; rare case that actually went to court' },
    { name: 'Goldman Sachs', role: 'Sold CDOs while betting against them (ABACUS)', status: 'settled', fine: '$550 million', notes: 'SEC settlement 2010; no admission of wrongdoing' },
    { name: 'JPMorgan Chase', role: 'Mortgage-backed securities fraud', status: 'settled', fine: '$13 billion', notes: 'Largest settlement in DOJ history at the time (2013)' },
    { name: 'Bank of America', role: 'Mortgage fraud and toxic securities', status: 'settled', fine: '$16.65 billion', notes: 'DOJ settlement 2014' },
    { name: 'Citigroup', role: 'Misleading investors on mortgage securities', status: 'settled', fine: '$7 billion', notes: 'DOJ settlement 2014' },
    { name: 'Kareem Serageldin', role: 'Credit Suisse executive who hid losses', status: 'convicted', sentence: '30 months', convictionDate: '2013-11-22', notes: 'Only Wall Street executive imprisoned for crisis-era conduct' },
  ],
  '2020-election-overturn': [
    { name: 'Donald Trump', imageUrl: '/defendants/donald-trump.jpg', role: 'Principal instigator of election overturn scheme', status: 'indicted', charges: ['Conspiracy to defraud the United States', 'Conspiracy to obstruct an official proceeding', 'Obstruction of an official proceeding', 'Conspiracy against rights'], indictmentDate: '2023-08-01', notes: 'Federal indictment by Special Counsel Jack Smith; case dropped after 2024 election' },
    { name: 'Rudy Giuliani', imageUrl: '/defendants/rudy-giuliani.jpg', role: 'Personal attorney promoting false election claims', status: 'indicted', charges: ['RICO conspiracy', 'False statements'], notes: 'Indicted in Georgia RICO case; disbarred in NY and DC; $148M defamation judgment' },
    { name: 'John Eastman', imageUrl: '/defendants/john-eastman.jpg', role: 'Author of plan to have VP overturn election', status: 'indicted', charges: ['RICO conspiracy', 'Conspiracy to commit forgery'], notes: 'Indicted in Georgia; disbarred in California 2024' },
    { name: 'Sidney Powell', role: 'Attorney promoting conspiracy theories about voting machines', status: 'convicted', charges: ['RICO conspiracy', 'Conspiracy to commit election fraud'], convictionDate: '2023-10-19', notes: 'Pled guilty in Georgia RICO case; cooperating witness' },
    { name: 'Kenneth Chesebro', role: 'Architect of fake electors scheme', status: 'convicted', charges: ['Conspiracy to commit filing false documents'], convictionDate: '2023-10-20', notes: 'Pled guilty in Georgia RICO case' },
    { name: 'Mark Meadows', imageUrl: '/defendants/mark-meadows.jpg', role: 'White House Chief of Staff coordinating overturn efforts', status: 'indicted', charges: ['RICO conspiracy', 'Solicitation of violation of oath by public officer'], notes: 'Indicted in Georgia RICO case' },
    { name: 'Jeffrey Clark', role: 'DOJ official who drafted false election fraud letter', status: 'indicted', charges: ['RICO conspiracy', 'Criminal attempt to commit false statements'], notes: 'Indicted in Georgia RICO case' },
  ],
  '2016-election': [
    { name: 'Internet Research Agency (IRA)', role: 'Russian troll farm conducting influence operations', status: 'indicted', charges: ['Conspiracy to defraud the United States', 'Wire fraud', 'Identity theft'], indictmentDate: '2018-02-16', notes: 'Indicted by Mueller; charges later dropped as unenforceable' },
    { name: 'GRU Unit 26165 (12 officers)', role: 'Russian military intelligence - DNC hacking', status: 'indicted', charges: ['Conspiracy to commit computer crimes', 'Aggravated identity theft', 'Money laundering'], indictmentDate: '2018-07-13', notes: 'Mueller indictment; fugitives in Russia' },
    { name: 'Paul Manafort', imageUrl: '/defendants/paul-manafort.jpg', role: 'Trump campaign chairman with Russian ties', status: 'convicted', charges: ['Tax fraud', 'Bank fraud', 'Foreign lobbying violations'], sentence: '7.5 years', convictionDate: '2018-08-21', pardonDate: '2020-12-23', pardonedBy: 'Donald Trump', notes: 'Convicted at trial; later pardoned' },
    { name: 'Michael Flynn', imageUrl: '/defendants/michael-flynn.jpg', role: 'National Security Advisor who lied about Russian contacts', status: 'convicted', charges: ['Making false statements to FBI'], convictionDate: '2017-12-01', pardonDate: '2020-11-25', pardonedBy: 'Donald Trump', notes: 'Pled guilty; later pardoned before sentencing' },
    { name: 'Roger Stone', imageUrl: '/defendants/roger-stone.jpg', role: 'Political operative - WikiLeaks coordination', status: 'convicted', charges: ['Obstruction', 'Witness tampering', 'False statements'], sentence: '40 months', convictionDate: '2019-11-15', pardonDate: '2020-12-23', pardonedBy: 'Donald Trump' },
    { name: 'Rick Gates', imageUrl: '/defendants/rick-gates.jpg', role: 'Deputy campaign chairman', status: 'convicted', charges: ['Conspiracy against the United States', 'False statements'], convictionDate: '2018-02-23', sentence: '45 days jail + probation', notes: 'Cooperating witness' },
  ],
  'access-hollywood': [
    { name: 'Donald Trump', imageUrl: '/defendants/donald-trump.jpg', role: 'Subject of tape describing sexual assault', status: 'pending', notes: 'No criminal charges from tape itself; connected to hush money payments that led to conviction' },
    { name: 'NBCUniversal', role: 'Network that suppressed tape before election', status: 'pending', notes: 'Held tape for weeks; leaked by Access Hollywood staff rather than NBC News reporting' },
  ],
  'blackwater-massacre': [
    { name: 'Nicholas Slatten', role: 'Blackwater guard who fired first shots', status: 'convicted', charges: ['First-degree murder'], sentence: 'Life imprisonment', convictionDate: '2014-10-22', pardonDate: '2020-12-22', pardonedBy: 'Donald Trump' },
    { name: 'Paul Slough', role: 'Blackwater guard', status: 'convicted', charges: ['Voluntary manslaughter', '13 counts attempted manslaughter'], sentence: '15 years', convictionDate: '2014-10-22', pardonDate: '2020-12-22', pardonedBy: 'Donald Trump' },
    { name: 'Evan Liberty', role: 'Blackwater guard', status: 'convicted', charges: ['Voluntary manslaughter', 'Attempted manslaughter'], sentence: '15 years', convictionDate: '2014-10-22', pardonDate: '2020-12-22', pardonedBy: 'Donald Trump' },
    { name: 'Dustin Heard', role: 'Blackwater guard', status: 'convicted', charges: ['Voluntary manslaughter', 'Attempted manslaughter'], sentence: '30 years', convictionDate: '2014-10-22', pardonDate: '2020-12-22', pardonedBy: 'Donald Trump' },
    { name: 'Erik Prince', imageUrl: '/defendants/erik-prince.jpg', role: 'Blackwater founder and CEO', status: 'pending', notes: 'Never charged; company rebranded to Academi; congressional investigations ongoing' },
  ],
  'boeing-safety-crisis': [
    { name: 'Boeing Company', role: 'Manufacturer of 737 MAX with known design defects', status: 'charged', charges: ['Conspiracy to defraud the United States'], fine: '$2.5 billion', notes: 'Deferred prosecution agreement 2021; DOJ found Boeing violated DPA in 2024' },
    { name: 'Dennis Muilenburg', imageUrl: '/defendants/dennis-muilenburg.jpg', role: 'CEO during 737 MAX crashes', status: 'pending', notes: 'Fired December 2019; never criminally charged' },
    { name: 'Mark Forkner', role: 'Former Boeing test pilot who misled FAA', status: 'acquitted', charges: ['Wire fraud'], notes: 'Acquitted at trial March 2022' },
  ],
  'big-tobacco-lies': [
    { name: 'Philip Morris', role: 'Largest tobacco company; decades of deception', status: 'convicted', notes: 'Found guilty of RICO violations in DOJ case (2006); ordered to publish corrective statements' },
    { name: 'R.J. Reynolds', role: 'Concealed health risks and marketed to children', status: 'convicted', notes: 'Found guilty in landmark DOJ RICO case' },
    { name: 'British American Tobacco', role: 'International tobacco conspiracy', status: 'convicted', notes: 'Part of RICO judgment' },
    { name: 'Lorillard', role: 'Targeted youth marketing', status: 'convicted', notes: 'Part of RICO judgment; later acquired by R.J. Reynolds' },
    { name: 'Liggett Group', role: 'First to break industry silence', status: 'settled', notes: 'First tobacco company to settle and admit health risks (1996)' },
    { name: 'Altria Group', role: 'Parent company of Philip Morris', status: 'convicted', notes: 'Part of DOJ RICO judgment; ongoing corrective statement obligations' },
  ],
  'bhopal-disaster': [
    { name: 'Union Carbide Corporation', role: 'Owner of pesticide plant that leaked toxic gas', status: 'settled', fine: '$470 million', notes: 'Settled with Indian government 1989; widely considered inadequate' },
    { name: 'Warren Anderson', role: 'CEO of Union Carbide at time of disaster', status: 'charged', charges: ['Culpable homicide'], notes: 'Arrested in India then fled; declared fugitive; died 2014 without facing trial' },
    { name: 'Dow Chemical', role: 'Acquired Union Carbide; refused cleanup responsibility', status: 'pending', notes: 'Acquired Union Carbide in 2001; denies liability for Bhopal' },
  ],
  'central-park-five': [
    { name: 'NYPD Detectives', role: 'Coerced false confessions from five teenagers', status: 'pending', charges: ['Coercion', 'Civil rights violations'], notes: 'No officers were ever charged despite proven wrongful convictions' },
    { name: 'Linda Fairstein', imageUrl: '/defendants/linda-fairstein.jpg', role: 'Head of Manhattan DA Sex Crimes Unit', status: 'pending', notes: 'Led prosecution of innocent teenagers; faced no criminal accountability' },
    { name: 'Elizabeth Lederer', role: 'Prosecutor at trial', status: 'pending', notes: 'Resigned from Columbia Law School teaching position in 2019' },
    { name: 'City of New York', role: 'Wrongful prosecution and imprisonment', status: 'settled', fine: '$41 million', notes: 'Settlement reached 2014; all five exonerated after Matias Reyes confession and DNA match' },
  ],
  'catholic-church-abuse': [
    { name: 'Cardinal Bernard Law', imageUrl: '/defendants/bernard-law.jpg', role: 'Archbishop of Boston who covered up abuse', status: 'pending', notes: 'Resigned 2002; never criminally charged; reassigned to Rome by Vatican' },
    { name: 'Cardinal Theodore McCarrick', role: 'Former Archbishop accused of serial abuse', status: 'charged', charges: ['Indecent assault and battery'], notes: 'Defrocked by Vatican 2019; criminal charges dropped due to cognitive decline' },
    { name: 'Archdiocese of Los Angeles', role: 'Institutional cover-up of clergy abuse', status: 'settled', fine: '$660 million', notes: 'Largest single settlement in clergy abuse history (2007); additional $880M in 2024' },
    { name: 'Diocese of Rockville Centre', role: 'Cover-up of hundreds of abuse cases', status: 'pending', notes: 'Filed for bankruptcy 2020 facing 200+ abuse claims' },
  ],
  'hush-money': [
    { name: 'Donald Trump', imageUrl: '/defendants/donald-trump.jpg', role: 'Directed hush money payments and falsified business records', status: 'convicted', charges: ['34 counts of falsifying business records in the first degree'], convictionDate: '2024-05-30', notes: 'First former US president convicted of felony crimes; sentenced to unconditional discharge January 2025' },
    { name: 'Michael Cohen', imageUrl: '/defendants/michael-cohen.jpg', role: 'Personal attorney who made hush money payment', status: 'convicted', charges: ['Campaign finance violations', 'Tax evasion', 'False statements'], sentence: '3 years', convictionDate: '2018-08-21', notes: 'Key prosecution witness in Trump trial' },
    { name: 'Allen Weisselberg', role: 'Trump Organization CFO', status: 'convicted', charges: ['Grand larceny', 'Tax fraud', 'Perjury'], sentence: '5 months (first case) + 5 months (perjury)', notes: 'Convicted twice; testified for prosecution in org fraud case' },
    { name: 'Trump Organization', role: 'Corporate entity used to funnel payments', status: 'convicted', charges: ['Tax fraud', 'Scheme to defraud'], fine: '$1.6 million', convictionDate: '2022-12-06' },
    { name: 'David Pecker', role: 'AMI/National Enquirer CEO who ran catch-and-kill scheme', status: 'pending', notes: 'Non-prosecution agreement; key prosecution witness; admitted to catch-and-kill scheme' },
  ],
  'trump-org-fraud': [
    { name: 'Donald Trump', imageUrl: '/defendants/donald-trump.jpg', role: 'Principal who inflated asset values to obtain loans', status: 'convicted', fine: '$354.9 million', notes: 'Civil fraud judgment by Judge Engoron (Feb 2024); barred from running NY business for 3 years; appealing' },
    { name: 'Donald Trump Jr.', imageUrl: '/defendants/donald-trump-jr.jpg', role: 'Executive who signed fraudulent financial statements', status: 'convicted', fine: '$4 million', notes: 'Civil fraud judgment; joint and several liability' },
    { name: 'Eric Trump', imageUrl: '/defendants/eric-trump.jpg', role: 'Executive involved in asset inflation scheme', status: 'convicted', fine: '$4 million', notes: 'Civil fraud judgment; joint and several liability' },
    { name: 'Allen Weisselberg', role: 'CFO who orchestrated tax fraud and false valuations', status: 'convicted', charges: ['Grand larceny', 'Tax fraud'], sentence: '5 months', convictionDate: '2022-08-18' },
    { name: 'Trump Organization', role: 'Corporate entity found guilty of fraud schemes', status: 'convicted', charges: ['Tax fraud', 'Scheme to defraud', 'Falsifying business records'], fine: '$1.6 million', convictionDate: '2022-12-06' },
  ],
  'cia-torture': [
    { name: 'James Mitchell', role: 'Psychologist who designed CIA torture program', status: 'pending', notes: 'Contracted by CIA; testified at Guantanamo hearings; settled civil lawsuit with ACLU' },
    { name: 'Bruce Jessen', imageUrl: '/defendants/bruce-jessen.jpg', role: 'Psychologist who co-designed torture program', status: 'pending', notes: 'Contracted by CIA alongside Mitchell; their firm paid $81 million' },
    { name: 'Gina Haspel', imageUrl: '/defendants/gina-haspel.jpg', role: 'CIA officer who oversaw black site; later CIA Director', status: 'pending', notes: 'Ran Thailand black site; promoted to CIA Director 2018; never charged' },
    { name: 'Jose Rodriguez', role: 'CIA official who ordered destruction of interrogation tapes', status: 'pending', notes: 'Destroyed 92 tapes; DOJ declined to prosecute in 2010' },
  ],
  'covid-misinfo': [
    { name: 'Alex Jones', imageUrl: '/defendants/alex-jones.jpg', role: 'Promoted conspiracy theories and dangerous treatments', status: 'convicted', fine: '$1.5 billion', notes: 'Defamation judgment in Sandy Hook case; separately spread COVID misinformation' },
    { name: 'Fox News', role: 'Amplified misinformation about treatments and vaccines', status: 'settled', fine: '$787.5 million', notes: 'Dominion Voting Systems defamation settlement 2023; largest media defamation settlement in US history' },
  ],
  'climate-denial': [
    { name: 'ExxonMobil', role: 'Concealed climate science for decades', status: 'pending', charges: ['Consumer fraud', 'Deceptive practices'], notes: 'Multiple state AG lawsuits; internal documents showed company knew of climate risks since 1977' },
    { name: 'Koch Industries', role: 'Funded climate denial network', status: 'pending', notes: 'Spent hundreds of millions on climate denial think tanks and lobbying' },
    { name: 'Chevron', role: 'Concealed climate research and funded denial', status: 'pending', notes: 'Facing multiple climate liability lawsuits from cities and states' },
    { name: 'Shell', role: 'Internal climate projections while funding denial', status: 'pending', notes: 'Dutch court ordered 45% emissions reduction by 2030 (overturned on appeal)' },
  ],
  'enron-fraud': [
    { name: 'Jeffrey Skilling', imageUrl: '/defendants/jeffrey-skilling.jpg', role: 'CEO who orchestrated accounting fraud', status: 'convicted', charges: ['Conspiracy', 'Securities fraud', 'Insider trading'], sentence: '24 years (reduced to 14)', convictionDate: '2006-05-25', releaseDate: '2019-02-21' },
    { name: 'Kenneth Lay', imageUrl: '/defendants/kenneth-lay.jpg', role: 'Founder and Chairman', status: 'convicted', charges: ['Conspiracy', 'Securities fraud', 'Wire fraud', 'Bank fraud'], convictionDate: '2006-05-25', notes: 'Conviction vacated after death in July 2006' },
    { name: 'Andrew Fastow', role: 'CFO who created off-balance-sheet entities', status: 'convicted', charges: ['Wire fraud', 'Securities fraud', 'Conspiracy'], sentence: '6 years', convictionDate: '2004-01-14', notes: 'Cooperating witness; pled guilty' },
    { name: 'Arthur Andersen LLP', role: 'Auditor that shredded evidence', status: 'convicted', charges: ['Obstruction of justice'], convictionDate: '2002-06-15', notes: 'Conviction overturned by Supreme Court 2005; firm already destroyed' },
  ],
  'wells-fargo-fraud': [
    { name: 'Wells Fargo', role: 'Created millions of unauthorized accounts', status: 'settled', fine: '$3 billion', notes: 'DOJ/SEC settlement 2020; admitted to creating 3.5M+ fake accounts' },
    { name: 'John Stumpf', imageUrl: '/defendants/john-stumpf.jpg', role: 'CEO during fake account scandal', status: 'settled', fine: '$17.5 million', notes: 'OCC personal fine; barred from banking industry; resigned 2016' },
    { name: 'Carrie Tolstedt', role: 'Head of Community Banking division', status: 'settled', fine: '$25 million', notes: 'OCC fine; oversaw division that created fake accounts' },
  ],
  'arms-trafficking': [
    { name: 'Oliver North', imageUrl: '/defendants/oliver-north.jpg', role: 'NSC staff who facilitated arms-for-hostages deal', status: 'convicted', charges: ['Aiding and abetting obstruction of Congress', 'Destroying documents', 'Accepting illegal gratuity'], convictionDate: '1989-05-04', notes: 'Convictions overturned on appeal due to immunized testimony' },
    { name: 'John Poindexter', imageUrl: '/defendants/john-poindexter.jpg', role: 'National Security Advisor', status: 'convicted', charges: ['Conspiracy', 'Obstruction of Congress', 'False statements'], convictionDate: '1990-04-07', notes: 'Convictions overturned on appeal' },
    { name: 'Caspar Weinberger', imageUrl: '/defendants/caspar-weinberger.jpg', role: 'Secretary of Defense who concealed information', status: 'indicted', charges: ['Perjury', 'Obstruction'], pardonDate: '1992-12-24', pardonedBy: 'George H.W. Bush', notes: 'Pardoned before trial by President Bush' },
    { name: 'Elliott Abrams', imageUrl: '/defendants/elliott-abrams.jpg', role: 'Assistant Secretary of State who lied to Congress', status: 'convicted', charges: ['Withholding information from Congress'], convictionDate: '1991-10-07', pardonDate: '1992-12-24', pardonedBy: 'George H.W. Bush' },
  ],
  'boeing-criminal-enterprise': [
    { name: 'Boeing Company', role: 'Corporate pattern of safety failures and cover-ups', status: 'charged', charges: ['Conspiracy to defraud the United States'], fine: '$2.5 billion', notes: 'DOJ found Boeing violated 2021 DPA; new criminal proceedings 2024' },
    { name: 'Dennis Muilenburg', imageUrl: '/defendants/dennis-muilenburg.jpg', role: 'CEO who prioritized production over safety', status: 'pending', notes: 'Fired December 2019; testified to Congress; never charged' },
  ],
  'banking-corruption': [
    { name: 'HSBC', role: 'Money laundering for drug cartels and sanctioned nations', status: 'settled', fine: '$1.9 billion', notes: 'Deferred prosecution 2012; laundered money for Mexican cartels and Iran' },
    { name: 'Deutsche Bank', role: 'Russian mirror trading money laundering scheme', status: 'settled', fine: '$630 million', notes: 'Fined by US and UK regulators 2017; facilitated $10B in suspicious Russian trades' },
    { name: 'Credit Suisse', role: 'Tax evasion conspiracy and fraud', status: 'convicted', charges: ['Conspiracy to aid tax evasion'], fine: '$2.6 billion', convictionDate: '2014-05-19', notes: 'First major bank guilty plea in 20 years' },
    { name: 'Wachovia', role: 'Laundered $378.4 billion for Mexican drug cartels', status: 'settled', fine: '$160 million', notes: 'Deferred prosecution 2010; absorbed by Wells Fargo' },
  ],
  'buffalo-massacre': [
    { name: 'Payton Gendron', role: 'White supremacist mass shooter', status: 'convicted', charges: ['First-degree murder (10 counts)', 'Domestic terrorism motivated by hate'], sentence: 'Life without parole', convictionDate: '2023-02-15', notes: 'Pled guilty to state charges; also facing federal hate crime charges' },
  ],
  'charleston-massacre': [
    { name: 'Dylann Roof', role: 'White supremacist mass shooter at Emanuel AME Church', status: 'convicted', charges: ['33 federal counts including hate crimes and murder'], sentence: 'Death', convictionDate: '2017-01-10', notes: 'First person sentenced to death for a federal hate crime' },
  ],
  'ahmaud-arbery-murder': [
    { name: 'Travis McMichael', role: 'Shooter who killed Ahmaud Arbery', status: 'convicted', charges: ['Murder', 'Federal hate crime'], sentence: 'Life without parole (state) + Life (federal)', convictionDate: '2022-01-07' },
    { name: 'Gregory McMichael', role: 'Initiated armed pursuit of Arbery', status: 'convicted', charges: ['Murder', 'Federal hate crime'], sentence: 'Life without parole (state) + Life (federal)', convictionDate: '2022-01-07' },
    { name: 'William Bryan', role: 'Filmed murder and participated in pursuit', status: 'convicted', charges: ['Murder', 'Federal hate crime'], sentence: 'Life with parole (state) + 35 years (federal)', convictionDate: '2022-01-07' },
    { name: 'Jackie Johnson', role: 'DA who delayed prosecution and recused', status: 'indicted', charges: ['Violation of oath of office', 'Obstruction'], indictmentDate: '2021-09-02', notes: 'Former Brunswick DA; indicted for showing favoritism to McMichaels' },
  ],
  'botham-jean-murder': [
    { name: 'Amber Guyger', imageUrl: '/defendants/amber-guyger.jpg', role: 'Off-duty Dallas officer who shot unarmed man in his apartment', status: 'convicted', charges: ['Murder'], sentence: '10 years', convictionDate: '2019-10-01', notes: 'Claimed she mistook his apartment for her own' },
  ],
  'build-the-wall-fraud': [
    { name: 'Steve Bannon', imageUrl: '/defendants/steve-bannon.jpg', role: 'Co-conspirator in We Build the Wall fraud', status: 'indicted', charges: ['Money laundering', 'Conspiracy to commit wire fraud'], pardonDate: '2021-01-20', pardonedBy: 'Donald Trump', notes: 'Federal charges; pardoned by Trump; convicted separately of contempt of Congress' },
    { name: 'Brian Kolfage', role: 'Founder of We Build the Wall', status: 'convicted', charges: ['Conspiracy to commit wire fraud', 'Money laundering'], sentence: '51 months', convictionDate: '2022-04-21', notes: 'Diverted over $350K from donors for personal use' },
    { name: 'Andrew Badolato', role: 'Co-conspirator', status: 'convicted', charges: ['Conspiracy to commit wire fraud'], sentence: '36 months', convictionDate: '2022-04-21' },
    { name: 'Timothy Shea', role: 'Co-conspirator', status: 'convicted', charges: ['Conspiracy to commit wire fraud', 'Money laundering'], sentence: '63 months', convictionDate: '2023-01-13' },
  ],
  'comey-firing': [
    { name: 'Donald Trump', imageUrl: '/defendants/donald-trump.jpg', role: 'Fired FBI Director investigating Russian interference', status: 'pending', notes: 'Mueller found substantial evidence of obstruction but did not indict per DOJ policy' },
  ],
  'coffee-county': [
    { name: 'Misty Hampton', role: 'Former Coffee County elections supervisor', status: 'indicted', charges: ['RICO conspiracy', 'Conspiracy to commit election fraud'], notes: 'Indicted in Georgia RICO case for allowing unauthorized access to election equipment' },
    { name: 'Cathy Latham', role: 'Former GOP chairwoman of Coffee County', status: 'indicted', charges: ['RICO conspiracy', 'Conspiracy to commit election fraud'], notes: 'Indicted in Georgia RICO case' },
  ],
  'crow-network': [
    { name: 'Clarence Thomas', imageUrl: '/defendants/clarence-thomas.jpg', role: 'Supreme Court Justice who failed to disclose gifts', status: 'pending', notes: 'ProPublica revealed undisclosed luxury travel, yacht trips, and real estate transactions from Harlan Crow' },
    { name: 'Harlan Crow', role: 'Billionaire donor providing undisclosed gifts to Justice Thomas', status: 'pending', notes: 'Provided luxury travel, purchased property from Thomas family, paid tuition for Thomass grandnephew' },
  ],
  'scotus-corruption': [
    { name: 'Clarence Thomas', imageUrl: '/defendants/clarence-thomas.jpg', role: 'Failed to disclose luxury gifts and travel', status: 'pending', notes: 'Undisclosed gifts from Harlan Crow; RV from Anthony Welters; Ginni Thomas Jan 6 involvement' },
    { name: 'Samuel Alito', imageUrl: '/defendants/samuel-alito.jpg', role: 'Failed to disclose luxury fishing trip', status: 'pending', notes: 'Undisclosed Alaska fishing trip with Paul Singer; refused to recuse from Singer cases' },
  ],
  'pandemic-profiteering-covid-corruption': [
    { name: 'Richard Burr', imageUrl: '/defendants/richard-burr.jpg', role: 'Senator who sold stocks after classified COVID briefing', status: 'pending', notes: 'DOJ investigation closed without charges 2021; SEC investigation also dropped' },
    { name: 'Kelly Loeffler', imageUrl: '/defendants/kelly-loeffler.jpg', role: 'Senator who traded stocks after classified COVID briefing', status: 'pending', notes: 'DOJ cleared of wrongdoing; trades conducted by third-party managers' },
  ],
  'campaign-finance': [
    { name: 'Citizens United (organizational)', role: 'Supreme Court case that opened unlimited dark money', status: 'pending', notes: 'Citizens United v. FEC (2010) struck down campaign finance restrictions' },
  ],
  'alaska-airlines-1282': [
    { name: 'Boeing Company', role: 'Manufactured 737 MAX 9 with missing door bolts', status: 'charged', notes: 'FAA grounded all 737 MAX 9s; connected to ongoing Boeing criminal proceedings' },
    { name: 'Spirit AeroSystems', role: 'Key supplier that produced the door plug', status: 'pending', notes: 'NTSB found bolts were removed and not reinstalled during production' },
  ],
  'chicago-police-torture': [
    { name: 'Jon Burge', role: 'Chicago Police commander who tortured over 100 suspects', status: 'convicted', charges: ['Obstruction of justice', 'Perjury'], sentence: '4.5 years', convictionDate: '2010-06-28', notes: 'Tortured confessions from over 100 Black men; statute of limitations prevented torture charges; died 2018' },
    { name: 'City of Chicago', role: 'Institutional cover-up of torture program', status: 'settled', fine: '$5.5 million', notes: 'Reparations ordinance 2015 for Burge torture victims' },
  ],
  'civil-rights-rollbacks': [
    { name: 'Shelby County', role: 'Successfully challenged Voting Rights Act preclearance', status: 'pending', notes: 'Shelby County v. Holder (2013) gutted Section 5 of VRA' },
  ],
  'columbia-hca-fraud': [
    { name: 'Columbia/HCA Healthcare', role: 'Largest healthcare fraud in US history', status: 'convicted', charges: ['Medicare fraud', 'Kickbacks', 'False claims'], fine: '$1.7 billion', notes: 'Pled guilty to 14 felonies; largest fraud settlement in US history at the time' },
    { name: 'Rick Scott', imageUrl: '/defendants/rick-scott.jpg', role: 'CEO during fraud; later Governor and Senator', status: 'pending', notes: 'Resigned as CEO; invoked Fifth Amendment 75 times; never charged; elected Governor of Florida twice' },
  ],
  'bill-cosby-sexual-assault': [
    { name: 'Bill Cosby', imageUrl: '/defendants/bill-cosby.jpg', role: 'Serial sexual assault over decades', status: 'released', charges: ['Three counts of aggravated indecent assault'], sentence: '3-10 years', convictionDate: '2018-04-26', releaseDate: '2021-06-30', notes: 'PA Supreme Court overturned conviction on due process grounds (prior DA non-prosecution agreement)' },
  ],
  '1980s-insider-trading': [
    { name: 'Ivan Boesky', role: 'Stock speculator and insider trader', status: 'convicted', charges: ['Insider trading'], sentence: '3.5 years', fine: '$100 million', convictionDate: '1987-12-18', notes: 'Cooperated with prosecution; famous Wall Street insider trader' },
    { name: 'Michael Milken', role: 'Junk bond king at Drexel Burnham Lambert', status: 'convicted', charges: ['Securities fraud', 'Tax fraud'], sentence: '10 years (served 2)', fine: '$600 million', convictionDate: '1990-04-24', pardonDate: '2020-02-18', pardonedBy: 'Donald Trump', imageUrl: '/defendants/michael-milken.jpg' },
    { name: 'Dennis Levine', role: 'Investment banker insider trader', status: 'convicted', charges: ['Securities fraud', 'Tax evasion', 'Perjury'], sentence: '2 years', fine: '$362,000', convictionDate: '1986-06-05', notes: 'Cooperated; triggered investigation of Boesky and Milken', imageUrl: '/defendants/dennis-levine.jpg' },
    { name: 'Drexel Burnham Lambert', role: 'Investment bank at center of junk bond fraud', status: 'convicted', charges: ['Securities fraud'], fine: '$650 million', convictionDate: '1988-12-21', notes: 'Pled guilty; filed bankruptcy 1990' },
  ],
  'aurora-shooting': [
    { name: 'James Holmes', role: 'Mass shooter at Century 16 theater', status: 'convicted', charges: ['24 counts first-degree murder', '140 counts attempted murder', '1 count of explosives possession'], sentence: 'Life without parole plus 3,318 years', convictionDate: '2015-08-07', notes: 'Insanity plea rejected by jury' },
  ],
  'aig-bailout-scandal': [
    { name: 'AIG / Joseph Cassano', role: 'Head of FP unit that sold toxic credit default swaps', status: 'pending', notes: 'DOJ investigated but declined to prosecute; AIG received $182 billion bailout' },
    { name: 'Hank Greenberg', imageUrl: '/defendants/hank-greenberg.jpg', role: 'Former CEO accused of accounting fraud', status: 'settled', fine: '$15 million', notes: 'SEC civil settlement 2017; fought charges for over a decade' },
  ],
  'crypto-exchange-fraud-ecosystem': [
    { name: 'Sam Bankman-Fried', imageUrl: '/defendants/sam-bankman-fried.jpg', role: 'Founder of FTX who stole billions in customer funds', status: 'convicted', charges: ['Wire fraud', 'Conspiracy to commit money laundering', 'Campaign finance violations'], sentence: '25 years', convictionDate: '2024-03-28', notes: 'Convicted on all counts; FTX collapsed November 2022 with $8B+ missing' },
    { name: 'Caroline Ellison', role: 'CEO of Alameda Research', status: 'convicted', charges: ['Wire fraud', 'Conspiracy'], sentence: '2 years', convictionDate: '2024-09-24', notes: 'Cooperating witness; pled guilty' },
    { name: 'Gary Wang', role: 'Co-founder of FTX', status: 'convicted', charges: ['Wire fraud', 'Conspiracy'], notes: 'Cooperating witness; pled guilty; no jail recommended by prosecutors' },
    { name: 'Changpeng Zhao', imageUrl: '/defendants/changpeng-zhao.jpg', role: 'Binance CEO who violated money laundering laws', status: 'convicted', charges: ['Violating Bank Secrecy Act'], sentence: '4 months', fine: '$50 million personal + $4.3B corporate', convictionDate: '2024-04-30' },
    { name: 'Do Kwon', imageUrl: '/defendants/do-kwon.jpg', role: 'Terraform Labs founder - Luna/Terra collapse', status: 'charged', charges: ['Securities fraud', 'Wire fraud', 'Commodities fraud'], notes: 'Extradited to US from Montenegro 2024; $40B collapse of Terra/Luna' },
    { name: 'Alex Mashinsky', imageUrl: '/defendants/alex-mashinsky.jpg', role: 'Celsius Network CEO who defrauded depositors', status: 'charged', charges: ['Securities fraud', 'Commodities fraud', 'Wire fraud'], notes: 'Arrested July 2023; Celsius filed bankruptcy with $4.7B hole' },
  ],
  'child-exploitation': [
    { name: 'Jeffrey Epstein', imageUrl: '/defendants/jeffrey-epstein.jpg', role: 'Financier who ran child sex trafficking network', status: 'charged', charges: ['Sex trafficking of minors', 'Conspiracy to commit sex trafficking'], notes: 'Died in custody August 2019 before trial; first plea deal (2008) widely condemned as corrupt' },
    { name: 'Ghislaine Maxwell', imageUrl: '/defendants/ghislaine-maxwell.jpg', role: 'Recruited and groomed victims for Epstein', status: 'convicted', charges: ['Sex trafficking of a minor', 'Conspiracy', 'Transporting a minor for illegal sexual activity'], sentence: '20 years', convictionDate: '2021-12-29' },
  ],
  'aids-crisis': [
    { name: 'Reagan Administration', role: 'Deliberate inaction during early AIDS epidemic', status: 'pending', notes: 'No official response until 1985; 20,000+ deaths before Reagan publicly said "AIDS"' },
    { name: 'Bayer AG', role: 'Sold HIV-contaminated blood products knowingly', status: 'settled', fine: '$600 million', notes: 'Continued selling Factor VIII known to be contaminated; distributed overseas after US ban' },
  ],
  'antisemitic-violence': [
    { name: 'Robert Bowers', role: 'Tree of Life synagogue mass shooter', status: 'convicted', charges: ['63 federal counts including hate crimes and murder'], sentence: 'Death', convictionDate: '2023-06-16', notes: 'Killed 11 worshippers; deadliest antisemitic attack in US history' },
  ],
  'civil-rights': [
    { name: 'J. Edgar Hoover', imageUrl: '/defendants/j-edgar-hoover.jpg', role: 'FBI Director who ran COINTELPRO against civil rights movement', status: 'pending', notes: 'Died 1972; COINTELPRO revelations came through Church Committee 1975' },
    { name: 'Bull Connor', imageUrl: '/defendants/bull-connor.jpg', role: 'Birmingham Commissioner who ordered violence against protesters', status: 'pending', notes: 'Used fire hoses and police dogs on children; catalyzed Civil Rights Act passage' },
    { name: 'Byron De La Beckwith', imageUrl: '/defendants/byron-de-la-beckwith.jpg', role: 'Assassin of Medgar Evers', status: 'convicted', charges: ['Murder'], sentence: 'Life', convictionDate: '1994-02-05', notes: 'Two mistrials in 1964 with all-white juries; finally convicted 30 years later' },
  ],
  'bear-stearns-2008-collapse': [
    { name: 'Ralph Cioffi', role: 'Bear Stearns hedge fund manager', status: 'acquitted', charges: ['Securities fraud', 'Conspiracy'], notes: 'Acquitted November 2009 despite evidence of misleading investors' },
    { name: 'Matthew Tannin', role: 'Bear Stearns hedge fund manager', status: 'acquitted', charges: ['Securities fraud', 'Conspiracy'], notes: 'Acquitted alongside Cioffi; funds lost $1.6 billion' },
  ],
  'wall-street-bailout': [
    { name: 'Goldman Sachs', role: 'Profited from bailout after creating toxic CDOs', status: 'settled', fine: '$5.06 billion', notes: 'DOJ settlement 2016; received $12.9B indirectly through AIG bailout' },
    { name: 'JPMorgan Chase', role: 'Received bailout funds while engaging in fraud', status: 'settled', fine: '$13 billion', notes: 'Largest DOJ settlement (2013) for mortgage-backed securities fraud' },
    { name: 'Bank of America / Countrywide', role: 'Massive mortgage fraud preceding bailout', status: 'settled', fine: '$16.65 billion', notes: 'DOJ settlement 2014' },
    { name: 'Citigroup', role: 'Required $45B bailout after toxic securities losses', status: 'settled', fine: '$7 billion', notes: 'DOJ settlement 2014' },
    { name: 'Morgan Stanley', role: 'Deceived investors on mortgage risks', status: 'settled', fine: '$3.2 billion', notes: 'DOJ settlement 2016' },
  ],
  'war-on-drugs': [
    { name: 'Richard Nixon (posthumous)', role: 'Designed War on Drugs to target political opponents', status: 'pending', notes: 'Aide John Ehrlichman admitted in 1994: "We knew we couldn\'t make it illegal to be...against the war or black"' },
    { name: 'DEA (institutional)', role: 'Enforcement agency with racial disparities in targeting', status: 'pending', notes: 'Black Americans 3.73x more likely to be arrested for marijuana despite equal usage rates' },
    { name: 'Purdue Pharma', role: 'Created opioid epidemic while DEA targeted street drugs', status: 'convicted', charges: ['Conspiracy to defraud the United States', 'Violating anti-kickback statute'], fine: '$8.3 billion', convictionDate: '2020-11-24', notes: 'Pled guilty; bankruptcy plan approved; Sackler family immunity later overturned by Supreme Court' },
  ],
  'white-supremacist-violence': [
    { name: 'Dylann Roof', role: 'Charleston church massacre', status: 'convicted', sentence: 'Death', convictionDate: '2017-01-10' },
    { name: 'Robert Bowers', role: 'Tree of Life synagogue massacre', status: 'convicted', sentence: 'Death', convictionDate: '2023-06-16' },
    { name: 'Patrick Crusius', role: 'El Paso Walmart massacre targeting Hispanics', status: 'convicted', charges: ['90 federal hate crime counts'], sentence: 'Life (federal) + consecutive life sentences (state)', convictionDate: '2023-07-07' },
    { name: 'Payton Gendron', role: 'Buffalo supermarket massacre', status: 'convicted', sentence: 'Life without parole', convictionDate: '2023-02-15' },
    { name: 'James Fields Jr.', imageUrl: '/defendants/james-fields-jr.jpg', role: 'Charlottesville car attack that killed Heather Heyer', status: 'convicted', charges: ['29 federal hate crime charges', 'First-degree murder (state)'], sentence: 'Life + 419 years (federal) + Life (state)', convictionDate: '2019-06-28' },
  ],
  'my-lai-massacre': [
    { name: 'William Calley', imageUrl: '/defendants/william-calley.jpg', role: 'Platoon leader who ordered massacre of civilians', status: 'convicted', charges: ['Murder of 22 Vietnamese civilians'], sentence: 'Life (reduced to 3.5 years house arrest)', convictionDate: '1971-03-29', notes: 'Only person convicted despite 26 soldiers charged; Nixon intervened to reduce sentence' },
    { name: 'Ernest Medina', imageUrl: '/defendants/ernest-medina.jpg', role: 'Company commander who may have ordered massacre', status: 'acquitted', notes: 'Acquitted at court-martial September 1971' },
    { name: 'US Army (institutional)', role: 'Systematic cover-up of massacre', status: 'pending', notes: 'Peers Commission found 30 persons involved in cover-up; only Calley convicted' },
  ],
  'tuskegee-experiment': [
    { name: 'US Public Health Service', role: 'Conducted 40-year experiment on unwitting Black men', status: 'settled', fine: '$10 million', notes: 'Class action settlement 1974; free medical care for survivors; formal presidential apology 1997' },
    { name: 'John Cutler', imageUrl: '/defendants/john-cutler.jpg', role: 'PHS researcher who also ran Guatemala experiments', status: 'pending', notes: 'Conducted nonconsensual STD experiments in Guatemala; died 2003 without accountability' },
    { name: 'Macon County Medical Society', role: 'Local doctors who participated in deception', status: 'pending', notes: 'Local physicians agreed not to treat subjects; complicit in withholding penicillin after 1947' },
  ],
  'police-brutality': [
    { name: 'Derek Chauvin', role: 'Minneapolis officer who murdered George Floyd', status: 'convicted', charges: ['Second-degree unintentional murder', 'Federal civil rights violations'], sentence: '22.5 years (state) + 21 years (federal)', convictionDate: '2021-04-20' },
    { name: 'Jason Van Dyke', role: 'Chicago officer who shot Laquan McDonald 16 times', status: 'convicted', charges: ['Second-degree murder', '16 counts aggravated battery'], sentence: '81 months', convictionDate: '2018-10-05', releaseDate: '2022-02-03' },
    { name: 'Daniel Pantaleo', role: 'NYPD officer who used chokehold on Eric Garner', status: 'pending', notes: 'Grand jury declined to indict; fired from NYPD 2019; no criminal charges' },
  ],
  'russian-interference': [
    { name: 'Internet Research Agency', role: 'Russian state-backed troll operation', status: 'indicted', indictmentDate: '2018-02-16', notes: 'Mueller indictment; charges dropped as unenforceable against Russian entities' },
    { name: 'GRU Officers (12)', role: 'Russian military intelligence hackers', status: 'indicted', indictmentDate: '2018-07-13', notes: 'Hacked DNC and DCCC; released documents via WikiLeaks' },
    { name: 'Maria Butina', imageUrl: '/defendants/maria-butina.jpg', role: 'Russian agent who infiltrated NRA and GOP', status: 'convicted', charges: ['Conspiracy to act as unregistered foreign agent'], sentence: '18 months', convictionDate: '2018-12-13' },
  ],
  'libor-scandal': [
    { name: 'Barclays', role: 'First bank to settle LIBOR manipulation charges', status: 'settled', fine: '$453 million', notes: 'US/UK settlement 2012; CEO Bob Diamond resigned' },
    { name: 'UBS', role: 'LIBOR manipulation', status: 'settled', fine: '$1.5 billion', notes: 'Settlement 2012; Japanese subsidiary pled guilty' },
    { name: 'Deutsche Bank', role: 'LIBOR manipulation', status: 'settled', fine: '$2.5 billion', notes: 'US/UK settlement 2015' },
    { name: 'Rabobank', role: 'LIBOR manipulation', status: 'convicted', charges: ['Wire fraud'], fine: '$1 billion', convictionDate: '2013-10-29' },
    { name: 'Tom Hayes', role: 'UBS/Citigroup trader - first individual convicted', status: 'convicted', charges: ['Conspiracy to commit fraud'], sentence: '14 years (reduced to 11)', convictionDate: '2015-08-03', notes: 'First individual convicted for LIBOR rigging; conviction overturned on appeal 2024' },
  ],
  'cambridge-analytica-global-operations': [
    { name: 'Cambridge Analytica', role: 'Harvested Facebook data of 87 million users', status: 'pending', notes: 'Company dissolved 2018; UK ICO fined remnant entity' },
    { name: 'Alexander Nix', imageUrl: '/defendants/alexander-nix.jpg', role: 'CEO of Cambridge Analytica', status: 'pending', notes: 'Suspended then fired; testified to UK Parliament; no criminal charges' },
    { name: 'Facebook/Meta', role: 'Failed to protect user data', status: 'settled', fine: '$5 billion', notes: 'FTC fine 2019; largest privacy penalty in history' },
    { name: 'Aleksandr Kogan', role: 'Researcher who harvested Facebook data', status: 'pending', notes: 'Created "thisisyourdigitallife" app that scraped data; testified to UK Parliament' },
  ],
  'bribery-corruption': [
    { name: 'Bob Menendez', imageUrl: '/defendants/bob-menendez.jpg', role: 'Senator convicted of corruption', status: 'convicted', charges: ['Bribery', 'Acting as foreign agent', 'Extortion'], convictionDate: '2024-07-16', notes: 'Found gold bars and cash in home; acted as agent for Egypt' },
    { name: 'Rod Blagojevich', imageUrl: '/defendants/rod-blagojevich.jpg', role: 'Illinois Governor who tried to sell Senate seat', status: 'convicted', charges: ['Corruption', 'Attempting to sell Senate seat'], sentence: '14 years', convictionDate: '2011-06-27', pardonDate: '2020-02-18', pardonedBy: 'Donald Trump', notes: 'Commuted by Trump after serving 8 years' },
  ],
};

export default investigationDefendants;
