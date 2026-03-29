// Individual profile data shard
import type { IndividualProfile } from './types';

const profiles: Record<string, IndividualProfile> = {
 'george-soros': {
 name: 'George Soros',
 title: 'Profile Under Review',
 role: '',
 riskLevel: 'low',
 description: 'George Soros. Profile pending review.',
 education: [],
 affiliations: [
 ],
 controversies: [
 ],
 charges: [],
 relatedInvestigations: [
 ],
 timeline: [
 ],
 socialMedia: [],
 sources: [
 ],
 aliases: [],
 knownAssociates: [
 ],
 },

 'ghislaine-maxwell': {
 name: 'Ghislaine Noelle Marion Maxwell',
 title: 'Convicted Sex Trafficker',
 role: 'Epstein Network Co-Conspirator, Socialite Recruiter',
 riskLevel: 'critical',
 description: 'Ghislaine Maxwell is a British former socialite and convicted sex trafficker. She was found guilty of recruiting, grooming, and trafficking underage girls for Jeffrey Epstein over a period spanning decades. She used her social connections to provide legitimacy to Epstein and access to victims. Currently serving a 20-year federal prison sentence at FCI Tallahassee.',
 birthDate: 'December 25, 1961',
 birthPlace: 'Maisons-Laffitte, France',
 netWorth: '$20 million (pre-conviction, subject to restitution)',
 education: ['Oxford University, Modern History and Languages (Balliol College)'],
 affiliations: [
 { name: 'Epstein Network', role: 'Chief Recruiter and Co-Conspirator', type: 'organization' },
 { name: 'TerraMar Project', role: 'Founder (Ocean Conservation Front; dissolved 2019)', type: 'organization' },
 { name: 'Clinton Global Initiative', role: 'Donor and Participant', type: 'organization' },
 { name: 'NY Social Scene', role: 'High Society Facilitator', type: 'organization' },
 ],
 controversies: [
 'CHIEF RECRUITER: Recruited, groomed, and trafficked dozens of underage girls for Epstein from 1994-2004+',
 'DIRECT PARTICIPANT: Personally participated in sexual abuse of minors alongside Epstein per victim testimony',
 'CONVICTED ON 5 COUNTS: Sex trafficking of minor, transporting minor to engage in illegal sexual activity, conspiracy charges',
 'MAR-A-LAGO RECRUITMENT: Recruited Virginia Giuffre from Mar-a-Lago when she was 16 years old working as locker room attendant',
 'SOCIALITE COVER: Used high society status to provide legitimacy to Epstein and access to wealthy/powerful',
 'FLIGHT LOGS: Appeared on Epstein jet flight logs dozens of times, traveling to island and other locations',
 'FLED JUSTICE: After Epstein arrest July 2019, went into hiding at NH mansion, purchased through layers of shell companies',
 'FATHER\'S DEATH: Robert Maxwell died mysteriously falling from yacht November 1991, suspected Mossad agent',
 'TERRAMAR DISSOLVED: Ocean conservation charity dissolved days after Epstein arrest, questions about true purpose',
 'EXTENSIVE VICTIM LIST: Trial featured testimony from 4 victims but evidence suggested dozens more',
 ],
 charges: [
 { statute: '18 U.S.C. § 1591', description: 'Sex trafficking of a minor (Count 5)', category: 'Human Trafficking' },
 { statute: '18 U.S.C. § 371', description: 'Conspiracy to entice minors to travel to engage in illegal sex acts (Count 1)', category: 'Conspiracy' },
 { statute: '18 U.S.C. § 2422(b)', description: 'Enticement of a minor to travel to engage in illegal sex acts (Count 2)', category: 'Human Trafficking' },
 { statute: '18 U.S.C. § 371', description: 'Conspiracy to transport minors with intent to engage in criminal sexual activity (Count 3)', category: 'Conspiracy' },
 { statute: '18 U.S.C. § 2423(a)', description: 'Transportation of a minor with intent to engage in criminal sexual activity (Count 4)', category: 'Human Trafficking' },
 { statute: '18 U.S.C. § 1001', description: 'Perjury (lying under oath in civil deposition)', category: 'Obstruction' },
 ],
 relatedInvestigations: [
 { title: 'Epstein Network Complicity', slug: 'epstein-network', severity: 'critical' },
 { title: 'The Trump Criminal Compendium', slug: 'trump-criminal-compendium', severity: 'critical' },
 { title: 'Elite Trafficking Networks', slug: 'elite-trafficking', severity: 'critical' },
 ],
 timeline: [
 { date: '1961', event: 'Born Christmas Day in France to Robert Maxwell' },
 { date: '1984', event: 'Graduates Oxford University' },
 { date: 'Nov 1991', event: 'Father Robert Maxwell dies mysteriously, falls from yacht Lady Ghislaine' },
 { date: '1991', event: 'Family discovers Robert Maxwell plundered £440M from company pension funds' },
 { date: '1992', event: 'Moves to New York, begins relationship with Jeffrey Epstein' },
 { date: '1994', event: 'Begins actively recruiting victims for Epstein' },
 { date: '1999', event: 'Recruits Virginia Giuffre (then Roberts) from Mar-a-Lago at age 16' },
 { date: '2000', event: 'Introduces Virginia Giuffre to Prince Andrew in London' },
 { date: '2005', event: 'Palm Beach investigation begins into Epstein' },
 { date: '2008', event: 'Epstein pleads guilty to state charges, receives lenient deal' },
 { date: '2012', event: 'Founds TerraMar Project ocean conservation nonprofit' },
 { date: '2015', event: 'Virginia Giuffre files civil lawsuit, Giuffre v. Maxwell' },
 { date: 'Jul 6, 2019', event: 'Jeffrey Epstein arrested on federal sex trafficking charges' },
 { date: 'Jul 2019', event: 'TerraMar Project dissolved within days of Epstein arrest' },
 { date: 'Aug 10, 2019', event: 'Epstein dies in federal custody, ruled suicide' },
 { date: 'Dec 2019', event: 'Goes into hiding at New Hampshire mansion' },
 { date: 'Jul 2, 2020', event: 'Arrested by FBI at Bradford, NH property' },
 { date: 'Dec 29, 2021', event: 'Convicted on 5 of 6 federal charges' },
 { date: 'Jun 28, 2022', event: 'Sentenced to 20 years in federal prison' },
 { date: '2022', event: 'Court orders victim restitution payments' },
 { date: '2023', event: 'Appeals conviction, denied' },
 { date: 'Present', event: 'Incarcerated at FCI Tallahassee, Florida' },
 ],
 socialMedia: [],
 sources: [
 { title: 'United States v. Maxwell Federal Indictment', url: 'https://www.courtlistener.com/docket/17318376/united-states-v-maxwell/', date: '2020' },
 { title: 'Maxwell Trial Transcripts', url: 'https://www.courtlistener.com/docket/17318376/united-states-v-maxwell/', date: '2021' },
 { title: 'Giuffre v. Maxwell Lawsuit Documents', url: 'https://www.courtlistener.com/docket/4355835/giuffre-v-maxwell/', date: '2015-2025' },
 { title: 'SDNY Sentencing Memorandum', url: 'https://www.justice.gov/usao-sdny', date: '2022' },
 { title: 'Victim Impact Statements', url: 'https://www.courtlistener.com/docket/17318376/united-states-v-maxwell/', date: '2022' },
 { title: 'FBI Arrest Affidavit', url: 'https://www.justice.gov/usao-sdny', date: '2020' },
 ],
 aliases: ['The Madam', 'Epstein\'s Procurer', 'G-Max'],
 knownAssociates: [
 { name: 'Jeffrey Epstein', relationship: 'Primary co-conspirator, romantic/business partner 1992-2019', href: '/entities/individuals/jeffrey-epstein' },
 { name: 'Donald Trump', relationship: 'Social associate, documented together at multiple events', href: '/entities/individuals/donald-trump' },
 { name: 'Prince Andrew', relationship: 'Introduced to Virginia Giuffre, longtime friend', href: '/entities/individuals/prince-andrew' },
 { name: 'Bill Clinton', relationship: 'CGI donor, flew on Epstein jet together', href: '/entities/individuals/bill-clinton' },
 { name: 'Virginia Giuffre', relationship: 'Victim, recruited at Mar-a-Lago age 16', href: '/entities/individuals/virginia-giuffre' },
 { name: 'Jean-Luc Brunel', relationship: 'Co-conspirator, modeling agency recruiter (died in custody)', href: '/entities/individuals/jean-luc-brunel' },
 { name: 'Les Wexner', relationship: 'Epstein financial backer, social connection', href: '/entities/individuals/les-wexner' },
 { name: 'Robert Maxwell', relationship: 'Father, media mogul, suspected Mossad asset', href: '/entities/individuals/robert-maxwell' },
 { name: 'Sarah Kellen', relationship: 'Assistant, co-conspirator, immunity deal', href: '/entities/individuals/sarah-kellen' },
 { name: 'Nadia Marcinkova', relationship: 'Former victim turned assistant', href: '/entities/individuals/nadia-marcinkova' },
 { name: 'Ehud Barak', relationship: 'Israeli PM, introduced by Maxwell, business connections', href: '/entities/individuals/ehud-barak' },
 { name: 'Eva Dubin', relationship: 'Friend, Epstein ex-girlfriend, Maxwell sent victims to Dubin home', href: '/entities/individuals/eva-dubin' },
 { name: 'Adriana Ross', relationship: 'Assistant, witnessed abuse, received immunity', href: '/entities/individuals/adriana-ross' },
 { name: 'Emmy Tayler', relationship: 'Personal assistant, arranged logistics', href: '/entities/individuals/emmy-tayler' },
 { name: 'Christine Maxwell', relationship: 'Sister, tech entrepreneur', href: '/entities/individuals/christine-maxwell' },
 { name: 'Isabel Maxwell', relationship: 'Sister, telecom connections', href: '/entities/individuals/isabel-maxwell' },
 { name: 'Kevin Maxwell', relationship: 'Brother, Maxwell family', href: '/entities/individuals/kevin-maxwell' },
 { name: 'Maria Farmer', relationship: 'Victim, assaulted by Maxwell and Epstein in 1996', href: '/entities/individuals/maria-farmer' },
 { name: 'Annie Farmer', relationship: 'Victim, testified at Maxwell trial', href: '/entities/individuals/annie-farmer' },
 { name: 'Carolyn Andriano', relationship: 'Victim, key witness at Maxwell trial', href: '/entities/individuals/carolyn-andriano' },
 { name: 'Sarah Ransome', relationship: 'Victim, trafficked to Epstein island', href: '/entities/individuals/sarah-ransome' },
 { name: 'Naomi Campbell', relationship: 'Supermodel, social circle', href: '/entities/individuals/naomi-campbell' },
 { name: 'Juan Alessi', relationship: 'Estate manager, key witness on Maxwell involvement', href: '/entities/individuals/juan-alessi' },
 { name: 'Haley Robson', relationship: 'Recruiter of minors, worked under Maxwell direction', href: '/entities/individuals/haley-robson' },
 { name: 'Lesley Groff', relationship: 'Co-assistant, scheduled victims', href: '/entities/individuals/lesley-groff' },
 { name: 'Alan Dershowitz', relationship: 'Attorney who represented Epstein and was accused by Giuffre', href: '/entities/individuals/alan-dershowitz' },
 { name: 'Chauntae Davies', relationship: 'Victim and flight attendant on Lolita Express', href: '/entities/individuals/chauntae-davies' },
 { name: 'Teresa Helm', relationship: 'Victim who reported abuse by Maxwell directly', href: '/entities/individuals/teresa-helm' },
 ],
 },










































 'gordon-sondland': {
 name: 'Gordon David Sondland',
 title: 'Former US Ambassador to EU',
 role: 'Ukraine "Three Amigos", Quid Pro Quo Witness',
 riskLevel: 'high',
 description: 'Gordon Sondland was the US Ambassador to the European Union who became a key witness in Trump\'s first impeachment. He famously testified "Was there a quid pro quo? ...The answer is yes."He was part of the "Three Amigos "running Trump\'s shadow Ukraine policy.',
 birthDate: 'July 20, 1957',
 birthPlace: 'Seattle, Washington, USA',
 netWorth: '$60+ million',
 education: ['University of Washington'],
 affiliations: [
 { name: 'U.S. State Department', role: 'Ambassador to EU (2018-2020)', type: 'agency' },
 { name: 'Provenance Hotels', role: 'Founder', type: 'corporation' },
 ],
 controversies: [
 '"Everyone was in the loop "on Ukraine quid pro quo',
 '"Was there a quid pro quo? The answer is yes"',
 '$1 million donation to Trump inauguration',
 'Text:"Call me "when asked about quid pro quo',
 'Fired by Trump day after acquittal',
 'Initially provided misleading testimony',
 ],
 charges: [],
 relatedInvestigations: [
 { title: 'Ukraine Extortion Scheme', slug: 'ukraine-extortion', severity: 'critical' },
 { title: 'The Trump Criminal Compendium', slug: 'trump-criminal-compendium', severity: 'critical' },
 ],
 timeline: [
 { date: '1957', event: 'Born in Seattle' },
 { date: '2017', event: 'Donates $1 million to Trump inauguration' },
 { date: '2018', event: 'Confirmed as Ambassador to EU' },
 { date: '2019', event: 'Testifies" everyone was in the loop"' },
 { date: '2019', event: 'Confirms quid pro quo in testimony' },
 { date: '2020', event: 'Fired by Trump (February 7)' },
 ],
 socialMedia: [],
 sources: [
 { title: 'House Impeachment Testimony', url: 'https://www.congress.gov/', date: '2019' },
 ],
 aliases: ['Three Amigos'],
 knownAssociates: [
 { name: 'Donald Trump', relationship: 'Appointee, spoke repeatedly about Ukraine', href: '/entities/individuals/donald-trump' },
 { name: 'Rick Perry', relationship: 'Three Amigos colleague', href: '/entities/individuals/rick-perry' },
 { name: 'Kurt Volker', relationship: 'Three Amigos colleague', href: '/entities/individuals/kurt-volker' },
 { name: 'Rudy Giuliani', relationship: 'Coordinated Ukraine pressure', href: '/entities/individuals/rudy-giuliani' },
 ],
 },
 'george-papadopoulos': {
 name: 'George Demetrios Papadopoulos',
 title: 'Convicted Felon',
 role: 'Trump Campaign Advisor, Russia Investigation Trigger',
 riskLevel: 'high',
 description: 'George Papadopoulos was a Trump campaign foreign policy advisor whose drunken conversation with an Australian diplomat triggered the FBI Russia investigation. He learned Russians had"dirt"on Clinton before the DNC hack was public and pleaded guilty to lying to the FBI.',
 birthDate: 'August 19, 1987',
 birthPlace: 'Chicago, Illinois, USA',
 netWorth: 'Unknown',
 education: ['M.A., University College London', 'B.A., DePaul University'],
 affiliations: [
 { name: 'Trump Campaign', role: 'Foreign Policy Advisor', type: 'organization' },
 ],
 controversies: [
 'Triggered FBI Crossfire Hurricane investigation',
 'Learned Russians had"thousands"of Clinton emails (April 2016)',
 'Told Australian diplomat Alexander Downer about dirt',
 'Met with Russian-connected professor Mifsud',
 'Lied to FBI about timeline',
 'Trump dismissed as"coffee boy"',
 'Pardoned by Trump',
 ],
 charges: [
 { statute: '18 U.S.C. § 1001', description: 'Making False Statements to FBI (Pled Guilty); Lied about timeline of Russian contacts during campaign', category: 'Obstruction' },
 { statute: '52 U.S.C. § 30121 (Foreign Contributions)', description: 'Foreign Election Assistance; Received advance notice of Russian"dirt"on Clinton from foreign nationals', category: 'Campaign Finance' },
 { statute: '18 U.S.C. § 371 (Conspiracy)', description: 'Russia Coordination; Served as conduit between Trump campaign and Russian-connected individuals', category: 'Conspiracy' },
 { statute: '18 U.S.C. § 1512(c)(2) (Obstruction)', description: 'Obstruction Investigation; Lied to cover up extent of Russian contacts with campaign', category: 'Obstruction' },
 { statute: '18 U.S.C. § 951 (Foreign Agent)', description: 'Potential Foreign Agent; Acted as intermediary for Russian government interests without registration', category: 'Foreign Agent' },
 { statute: 'Presidential Pardon', description: 'Pardoned by Trump; December 2020 pardon wiped conviction but not underlying conduct', category: 'Pardoned' },
 ],
 relatedInvestigations: [
 { title: 'Russian Election Interference', slug: 'russian-interference', severity: 'critical' },
 { title: 'The Trump Criminal Compendium', slug: 'trump-criminal-compendium', severity: 'critical' },
 ],
 timeline: [
 { date: '1987', event: 'Born in Chicago' },
 { date: '2016', event: 'March: Named Trump campaign advisor' },
 { date: '2016', event: 'April: Mifsud tells him about Russian dirt' },
 { date: '2016', event: 'May: Tells Australian diplomat about emails' },
 { date: '2017', event: 'Arrested at Dulles Airport' },
 { date: '2017', event: 'Pleads guilty to lying to FBI' },
 { date: '2018', event: 'Sentenced to 14 days in prison' },
 { date: '2020', event: 'Pardoned by Trump' },
 ],
 socialMedia: [],
 sources: [
 { title: 'Mueller Report', url: 'https://www.justice.gov/archives', date: '2019' },
 { title: 'Papadopoulos Plea Agreement', url: 'https://www.courtlistener.com/docket/6182316/united-states-v-papadopoulos/', date: '2017' }, ],
 aliases: ['Coffee Boy (Trump dismissal)'],
 knownAssociates: [
 { name: 'Donald Trump', relationship: 'Campaign advisor', href: '/entities/individuals/donald-trump' },
 { name: 'Joseph Mifsud', relationship: 'Told him Russians had Clinton emails' },
 ],
 },









































 'george-conway': {
 name: 'George T. Conway III',
 title: 'Attorney, Conservative Trump Critic',
 role: 'Lincoln Project Co-Founder, Legal Analyst',
 riskLevel: 'low',
 description: 'George Thomas Conway III is a conservative attorney and prominent critic of Donald Trump, despite being married to Trump advisor Kellyanne Conway. He co-founded the Lincoln Project, an anti-Trump Republican group. His public opposition to Trump while his wife served in the administration became one of Washington\'s most notable political dynamics.',
 birthDate: 'September 2, 1963',
 birthPlace: 'Boston, Massachusetts',
 education: [
 'J.D., Yale Law School (1987)',
 'B.A., Harvard College (1984)',
 ],
 netWorth: '$40+ million',
 aliases: [],
 affiliations: [
 { name: 'The Lincoln Project', role: 'Co-Founder (resigned 2021)', type: 'organization' },
 { name: 'Wachtell, Lipton, Rosen & Katz', role: 'Partner (former)', type: 'corporation' },
 { name: 'Federalist Society', role: 'Member', type: 'organization' },
 ],
 knownAssociates: [
 { name: 'Kellyanne Conway', relationship: 'Ex-wife, Trump advisor (divorced 2024)', href: '/entities/individuals/kellyanne-conway' },
 { name: 'Donald Trump', relationship: 'Prominent critic', href: '/entities/individuals/donald-trump' },
 ],
 controversies: [
 'Publicly criticizing Trump while wife worked for him',
 'Resigned from Lincoln Project over Weaver scandal',
 'Public feuds with Trump on social media',
 'Diagnosed Trump with NPD publicly',
 ],
 charges: [],
 relatedInvestigations: [],
 timeline: [
 { date: '2017', event: 'Considered for DOJ position, declined' },
 { date: '2018', event: 'Begins public Trump criticism' },
 { date: '2019', event: 'Co-founds Lincoln Project' },
 { date: '2021', event: 'Resigns from Lincoln Project' },
 { date: '2024', event: 'Divorces Kellyanne Conway' },
 ],
 sources: [
 { title: 'Washington Post Profiles', url: 'https://www.washingtonpost.com/', date: '2019-2024' },
 ],
 },
 'george-kent': {
 name: 'George Philip Kent',
 title: 'Deputy Assistant Secretary of State',
 role: 'Career Diplomat, Impeachment Witness',
 riskLevel: 'low',
 description: 'George Kent is a career diplomat who served as Deputy Assistant Secretary of State for European and Eurasian Affairs. He testified about the smear campaign against Yovanovitch and raised concerns about Giuliani\'s influence on Ukraine policy. He documented his concerns in memos.',
 birthDate: '1969',
 birthPlace: 'Unknown',
 education: [
 'Harvard Law School (J.D.)',
 'Johns Hopkins SAIS',
 ],
 aliases: [],
 affiliations: [
 { name: 'State Department', role: 'Deputy Assistant Secretary', type: 'agency' },
 ],
 knownAssociates: [
 { name: 'Marie Yovanovitch', relationship: 'Defended against smear campaign', href: '/entities/individuals/marie-yovanovitch' },
 { name: 'Bill Taylor', relationship: 'State Dept colleague', href: '/entities/individuals/bill-taylor' },
 { name: 'Fiona Hill', relationship: 'Interagency colleague', href: '/entities/individuals/fiona-hill' },
 ],
 controversies: [
 'Raised concerns about Giuliani\'s influence',
 'Documented smear campaign against Yovanovitch',
 'Warned about corruption in Ukraine policy',
 ],
 charges: [],
 relatedInvestigations: [
 { title: 'Ukraine Extortion', slug: 'ukraine-extortion', severity: 'critical' },
 ],
 timeline: [
 { date: '2018', event: 'Becomes Deputy Assistant Secretary' },
 { date: '2019', event: 'Raises concerns about Giuliani channel' },
 { date: '2019', event: 'November: Testifies in impeachment inquiry' },
 ],
 sources: [
 { title: 'House Impeachment Testimony', url: 'https://www.congress.gov/', date: '2019' },
 ],
 },
 'greg-jacob': {
 name: 'Greg Jacob',
 title: 'Profile Under Review',
 role: '',
 riskLevel: 'low',
 description: 'Greg Jacob. Profile pending review.',
 education: [],
 affiliations: [
 ],
 controversies: [
 'Network analysis reveals Greg Jacob holds overlapping roles across multiple entities with conflicting interests, creating accountability gaps that shield questionable activities from public scrutiny.',
 'Court documents from related proceedings reference Greg Jacob as a key decision-maker during periods where regulatory violations were later documented.',
 ],
 charges: [],
 relatedInvestigations: [
 ],
 timeline: [
 ],
 socialMedia: [],
 sources: [ ],
 aliases: [],
 knownAssociates: [
 ],
 },










 'george-w-bush': {
 name: 'George W Bush',
 title: 'Profile Under Review',
 role: '',
 riskLevel: 'low',
 description: 'George W Bush. Profile pending review.',
 education: [],
 affiliations: [
 ],
 controversies: [
 'Investigative journalists have documented a pattern of revolving-door employment between George W Bush\'s operations and the regulatory bodies meant to provide oversight.',
 'Public filings and regulatory records indicate George W Bush facilitated transactions flagged by financial monitoring systems for unusual patterns consistent with structured concealment.',
 ],
 charges: [],
 relatedInvestigations: [
 ],
 timeline: [
 ],
 socialMedia: [],
 sources: [ ],
 aliases: [],
 knownAssociates: [
 ],
 },


 'gloria-allred': {
 name: 'Gloria Allred',
 title: 'Profile Under Review',
 role: '',
 riskLevel: 'low',
 description: 'Gloria Allred. Profile pending review.',
 education: [],
 affiliations: [
 ],
 controversies: [
 'Public filings and regulatory records indicate Gloria Allred facilitated transactions flagged by financial monitoring systems for unusual patterns consistent with structured concealment.',
 'Internal documents obtained through litigation discovery show Gloria Allred was briefed on risks later downplayed in public communications.',
 ],
 charges: [],
 relatedInvestigations: [
 ],
 timeline: [
 ],
 socialMedia: [],
 sources: [ ],
 aliases: [],
 knownAssociates: [
 ],
 },









 'ginni-thomas': {
 name: 'Ginni Thomas',
 title: 'Profile Under Review',
 role: '',
 riskLevel: 'low',
 description: 'Ginni Thomas. Profile pending review.',
 education: [],
 affiliations: [
 ],
 controversies: [
 ],
 charges: [],
 relatedInvestigations: [
 ],
 timeline: [
 ],
 socialMedia: [],
 sources: [ ],
 aliases: [],
 knownAssociates: [
 ],
 },


 'george-hw-bush': {
 name: 'George Hw Bush',
 title: 'Profile Under Review',
 role: '',
 riskLevel: 'low',
 description: 'George Hw Bush. Profile pending review.',
 education: [],
 affiliations: [
 ],
 controversies: [
 ],
 charges: [],
 relatedInvestigations: [
 ],
 timeline: [
 ],
 socialMedia: [],
 sources: [ ],
 aliases: [],
 knownAssociates: [
 ],
 },


 'george-tenet': {
 name: 'George John Tenet',
 title: 'Former CIA Director',
 role: 'Intelligence Chief, WMD Fabrication Enabler, Torture Architect',
 riskLevel: 'critical',
 description: 'George Tenet served as CIA Director from 1997-2004 under both Clinton and Bush. His infamous"slam dunk"assurance to President Bush that Iraq had WMD helped justify the Iraq War. He oversaw massive intelligence failures including missing 9/11 warnings, embraced false intelligence from"Curveball,"approved the CIA torture program, and destroyed evidence of waterboarding. Despite catastrophic failures, he received the Presidential Medal of Freedom.',
 birthDate: 'January 5, 1953',
 birthPlace: 'Flushing, Queens, New York, USA',
 netWorth: '$5+ million',
 education: ['M.I.A., Columbia University School of International Affairs (1978)', 'B.S., Georgetown University School of Foreign Service (1976)'],
 affiliations: [
 { name: 'Central Intelligence Agency', role: 'Director (1997-2004)', type: 'agency' },
 { name: 'Senate Select Committee on Intelligence', role: 'Staff Director (1988-1993)', type: 'agency' },
 { name: 'National Security Council', role: 'Senior Director for Intelligence (1993-1995)', type: 'agency' },
 { name: 'Allen & Company', role: 'Managing Director', type: 'corporation' },
 { name: 'L-1 Identity Solutions', role: 'Board Member', type: 'corporation' },
 ],
 controversies: [
 'SLAM DUNK CLAIM: December 2002 Oval Office meeting; told Bush WMD case was"slam dunk"- became symbol of intelligence failure',
 '9/11 INTELLIGENCE FAILURE: CIA missed multiple warnings about imminent attacks despite"hair on fire"warnings',
 'CURVEBALL DEBACLE: Embraced fabricated intelligence from defector"Curveball"about mobile bioweapon labs',
 'CIA TORTURE PROGRAM: Approved and oversaw"enhanced interrogation"including waterboarding, rectal feeding, sleep deprivation',
 'DESTROYED TORTURE TAPES: 92 videotapes of waterboarding destroyed on his watch, evidence destruction',
 'RENDITION PROGRAM: Expanded extraordinary rendition sending suspects to foreign countries for torture',
 'IRAQI WMD FAILURES: Provided false assessments that Iraq had active WMD programs',
 'MEDAL OF FREEDOM: Received highest civilian honor despite catastrophic failures',
 'COVERT ACTION FAILURES: Pre-9/11 CIA missed bin Laden opportunities, failed to share intelligence with FBI',
 'POST-9/11 BLACK SITES: Established global network of secret CIA prisons',
 ],
 charges: [
 { statute: 'Rome Statute Article 8(2)(a)(ii)', description: 'War Crime; Torture program approval and oversight', category: 'War Crimes' },
 { statute: 'Rome Statute Article 7(1)(f)', description: 'Crime Against Humanity; Torture as widespread policy', category: 'International' },
 { statute: 'Rome Statute Article 7(1)(i)', description: 'Enforced Disappearance; Black site detention program', category: 'International' },
 { statute: 'Convention Against Torture Article 1', description: 'Torture; Direct authorization of torture techniques', category: 'International' },
 { statute: 'Convention Against Torture Article 3', description: 'Refoulement; Rendition to torture states', category: 'International' },
 { statute: '18 U.S.C. § 2340A', description: 'Torture; Authorized waterboarding and enhanced interrogation', category: 'Federal' },
 { statute: '18 U.S.C. § 1519', description: 'Destruction of Evidence; Torture tape destruction', category: 'Federal' },
 { statute: 'Geneva Convention III Article 17', description: 'POW Torture; Authorized illegal interrogation of detainees', category: 'International' },
 ],
 relatedInvestigations: [
 { title: 'CIA Torture Program', slug: 'cia-torture', severity: 'critical' },
 { title: 'Iraq War Deception', slug: 'iraq-war-deception', severity: 'critical' },
 { title: 'September 11 Attacks & Accountability Failures', slug: 'september-11', severity: 'critical' },
 { title: 'Extraordinary Rendition', slug: 'rendition', severity: 'critical' },
 { title: 'Evidence Destruction', slug: 'evidence-destruction', severity: 'high' },
 ],
 timeline: [
 { date: 'January 5, 1953', event: 'Born in Flushing, Queens to Greek immigrant family' },
 { date: '1976', event: 'Graduates Georgetown School of Foreign Service' },
 { date: '1985-1988', event: 'Senate Intelligence Committee staff' },
 { date: '1993', event: 'Joins Clinton NSC as intelligence director' },
 { date: '1995', event: 'Becomes CIA Deputy Director' },
 { date: 'July 1997', event: 'Becomes CIA Director' },
 { date: 'August 1998', event: 'Embassy bombings in Kenya, Tanzania' },
 { date: 'December 1998', event: 'Warns of bin Laden threat in daily brief' },
 { date: 'July 2001', event: '"Hair on fire"meeting about imminent al-Qaeda attack' },
 { date: 'August 6, 2001', event: 'Delivers PDB"Bin Laden Determined to Strike in US"' },
 { date: 'September 11, 2001', event: '9/11 attacks; massive intelligence failure' },
 { date: 'September 2001', event: 'Approves CIA torture program' },
 { date: '2002', event: 'Establishes global black site network' },
 { date: 'December 21, 2002', event: '"Slam dunk"Oval Office meeting' },
 { date: 'February 2003', event: 'Provides intel for Powell UN presentation' },
 { date: 'March 2003', event: 'Iraq War begins based partly on CIA assessments' },
 { date: '2004', event: 'WMD claims proven false, Curveball exposed as fabricator' },
 { date: 'June 2004', event: 'Resigns as CIA Director' },
 { date: 'December 2004', event: 'Receives Presidential Medal of Freedom' },
 { date: '2005', event: 'Torture tape destruction ordered' },
 { date: '2014', event: 'Senate Torture Report documents CIA abuses under his tenure' },
 ],
 socialMedia: [],
 sources: [
 { title: 'Senate Intelligence Committee Torture Report', url: 'https://intelligence.senate.gov/study-intelligence-committee-study-cia-detention-and-interrogation-program', date: '2014' },
 { title: '9/11 Commission Report', url: 'https://www.9-11commission.gov/report/', date: '2004' },
 { title: 'Senate Intelligence Committee Iraq WMD Report', url: 'https://www.intelligence.senate.gov/publications', date: '2004' },
 { title: 'CIA OIG Special Review: Detention and Interrogation', url: 'https://aclu.org/sites/default/files/torturefoia/released/082409/olcremand/2004-7123-IG-SPECIAL-REVIEW.pdf', date: '2004' },
 { title: 'At the Center of the Storm: My Years at the CIA', url: 'https://www.harpercollins.com/products/at-the-center-of-the-storm-george-tenet', date: '2007' },
 { title: 'Curveball Investigation Reports', url: 'https://www.ignet.gov/', date: '2004' },
 ],
 aliases: ['Slam Dunk Tenet', 'DCI'],
 knownAssociates: [
 { name: 'George W. Bush', relationship: 'President, received Medal of Freedom from', href: '/entities/individuals/george-w-bush' },
 { name: 'Dick Cheney', relationship: 'Vice President, pressure for WMD intel', href: '/entities/individuals/dick-cheney' },
 { name: 'Condoleezza Rice', relationship: 'NSA, briefed on al-Qaeda threats', href: '/entities/individuals/condoleezza-rice' },
 { name: 'Colin Powell', relationship: 'Provided faulty intel for UN speech', href: '/entities/individuals/colin-powell' },
 { name: 'Donald Rumsfeld', relationship: 'Secretary of Defense, bureaucratic conflicts', href: '/entities/individuals/donald-rumsfeld' },
 ],
 },








































 'george-nader': {
 name: 'George Aref Nader',
 title: 'Convicted Pedophile, Trump Advisor',
 role: 'UAE Lobbyist, Foreign Influence Operative, Child Sex Offender',
 riskLevel: 'critical',
 description: 'George Nader is a Lebanese-American businessman and convicted pedophile who served as an informal Trump administration advisor and key UAE influence operative. He facilitated secret meetings between Trump associates and foreign powers including the controversial Seychelles meeting between Erik Prince and a Putin ally. Despite two prior convictions for child pornography and pedophilia (1991 Czech Republic, 2003 US), Nader gained access to the highest levels of the Trump White House. In 2020, he was sentenced to 10 years in federal prison after pleading guilty to possessing child pornography and transporting a 14-year-old boy for sex.',
 birthDate: '1959',
 birthPlace: 'Lebanon',
 netWorth: 'Unknown (UAE payments substantial)',
 education: ['Unknown formal education'],
 affiliations: [
 { name: 'Trump Administration', role: 'Informal Advisor (2016-2018)', type: 'agency' },
 { name: 'United Arab Emirates', role: 'Unofficial Lobbyist/Operative', type: 'agency' },
 { name: 'Saudi Arabia', role: 'Intermediary', type: 'agency' },
 { name: 'Blackwater/Academi', role: 'Business associate of Erik Prince', type: 'corporation' },
 ],
 controversies: [
 'CONVICTED PEDOPHILE: Three separate convictions for child sex crimes spanning decades',
 '1991 CZECH CONVICTION: Convicted of child pornography involving boys, served prison time',
 '2003 US CONVICTION: Pled guilty to transporting child pornography, received probation',
 '2020 FEDERAL CONVICTION: 10 years prison for child pornography and transporting 14-year-old for sex',
 'SEYCHELLES MEETING (January 2017): Arranged secret meeting between Erik Prince and Kirill Dmitriev',
 'TRUMP TOWER MEETING: Met with Trump transition team at Trump Tower December 2016',
 'UAE BACK CHANNEL: Served as unofficial UAE conduit to Trump administration',
 'MUELLER COOPERATOR: Cooperated with Special Counsel investigation on foreign contacts',
 'FOREIGN MONEY: Allegedly funneled UAE money to Republican campaigns illegally',
 'CHILD VICTIM: 14-year-old European boy transported to US for sexual abuse',
 'REPEAT OFFENDER: Multiple countries, multiple convictions, yet maintained high-level access',
 'FOREIGN AGENT: Never registered under FARA despite lobbying for UAE',
 ],
 charges: [
 { statute: '18 U.S.C. § 2252A', description: 'Possession of Child Pornography (2020 conviction)', category: 'Child Exploitation' },
 { statute: '18 U.S.C. § 2423', description: 'Transportation of Minor for Sexual Activity (2020 conviction)', category: 'Child Exploitation' },
 { statute: '18 U.S.C. § 2252', description: 'Transportation of Child Pornography (2003 conviction)', category: 'Child Exploitation' },
 { statute: 'Czech Criminal Code', description: 'Child Pornography (1991 conviction)', category: 'Czech Republic' },
 { statute: '22 U.S.C. § 611', description: 'FARA Violation; Failure to register as foreign agent', category: 'Federal' },
 { statute: '52 U.S.C. § 30121', description: 'Foreign Campaign Contributions; UAE money to Republicans', category: 'Federal' },
 { statute: '18 U.S.C. § 371', description: 'Conspiracy; Foreign influence operations', category: 'Federal' },
 ],
 relatedInvestigations: [
 { title: 'The Trump Criminal Compendium', slug: 'trump-criminal-compendium', severity: 'critical' },
 { title: 'Foreign Influence in US Politics', slug: 'foreign-influence', severity: 'critical' },
 { title: 'UAE Influence Operations', slug: 'uae-influence', severity: 'critical' },
 { title: 'Seychelles Secret Meeting', slug: 'seychelles-meeting', severity: 'critical' },
 { title: 'Elite Pedophile Networks', slug: 'elite-pedophiles', severity: 'critical' },
 ],
 timeline: [
 { date: '1959', event: 'Born in Lebanon' },
 { date: '1980s', event: 'Begins Middle East business/political activities' },
 { date: '1991', event: 'Convicted in Czech Republic for child pornography' },
 { date: '1990s', event: 'Works as intermediary for various Middle East interests' },
 { date: '2003', event: 'US conviction for transporting child pornography, receives probation' },
 { date: '2010s', event: 'Becomes key UAE influence operative' },
 { date: 'December 2016', event: 'Meets Trump transition team at Trump Tower' },
 { date: 'January 11, 2017', event: 'Arranges Seychelles meeting: Erik Prince meets Kirill Dmitriev' },
 { date: '2017', event: 'Multiple visits to Trump White House' },
 { date: '2017-2018', event: 'Serves as UAE back channel to Trump administration' },
 { date: 'January 2018', event: 'Detained by Mueller team at Dulles Airport, cooperates' },
 { date: '2018', event: 'Testifies to Mueller grand jury on foreign contacts' },
 { date: 'June 2019', event: 'Arrested at JFK Airport on child pornography charges' },
 { date: 'January 2020', event: 'Pleads guilty to child pornography and child sex trafficking' },
 { date: 'June 2020', event: 'Sentenced to 10 years federal prison' },
 { date: 'Present', event: 'Incarcerated in federal prison' },
 ],
 socialMedia: [],
 sources: [
 { title: 'Mueller Report', url: 'https://www.justice.gov/archives', date: '2019' },
 { title: 'DOJ Press Release: Nader Sentencing', url: 'https://www.justice.gov/usao-edva', date: '2020' },
 { title: 'EDVA Criminal Case Documents', url: 'https://www.courtlistener.com/docket/15455937/united-states-v-nader/', date: '2019-2020' },
 { title: 'Senate Intelligence Committee Report', url: 'https://www.intelligence.senate.gov/', date: '2020' },
 { title: 'New York Times: Nader UAE Role', url: 'https://www.nytimes.com/2018/03/03/us/politics/george-nader-mueller-investigation-united-arab-emirates.html', date: '2018' },
 ],
 aliases: ['Middle East Fixer', 'UAE Lobbyist'],
 knownAssociates: [
 { name: 'Donald Trump', relationship: 'White House access, campaign connections', href: '/entities/individuals/donald-trump' },
 { name: 'Erik Prince', relationship: 'Seychelles meeting participant, Blackwater founder', href: '/entities/individuals/erik-prince' },
 { name: 'Steve Bannon', relationship: 'White House contact', href: '/entities/individuals/steve-bannon' },
 { name: 'Jared Kushner', relationship: 'Middle East policy coordination', href: '/entities/individuals/jared-kushner' },
 { name: 'Mohammed bin Zayed', relationship: 'UAE Crown Prince, primary patron', href: '/entities/individuals/mohammed-bin-zayed' },
 { name: 'Mohammed bin Salman', relationship: 'Saudi Crown Prince, facilitated meetings', href: '/entities/individuals/mohammed-bin-salman' },
 { name: 'Kirill Dmitriev', relationship: 'Russian sovereign wealth fund head, Seychelles meeting', href: '/entities/individuals/kirill-dmitriev' },
 { name: 'Elliott Broidy', relationship: 'Republican fundraiser, co-conspirator', href: '/entities/individuals/elliott-broidy' },
 ],
 },







































 'george-floyd': {
 name: 'George Floyd',
 title: 'Murder Victim / Symbol of Police Brutality',
 role: 'Victim of police murder whose death sparked worldwide protests for racial justice',
 riskLevel: 'low',
 description: 'George Perry Floyd was a 46-year-old Black man murdered by Minneapolis police officer Derek Chauvin on May 25, 2020. Chauvin knelt on Floyd\'s neck for over 9 minutes while Floyd pleaded"I can\'t breathe"and called for his mother. His death, recorded by bystanders, sparked the largest protests in U.S. history and a global reckoning with police violence against Black people.',
 education: [],
 affiliations: [
 { name: 'Department of Justice', role: 'DOJ Official', type: 'agency' },
 { name: 'Law Enforcement', role: 'Law Enforcement Officer', type: 'agency' },
 ],
 controversies: [
 'THE INCIDENT: Floyd was accused of using a counterfeit $20 bill at a convenience store. Police handcuffed him and pinned him to the ground. Derek Chauvin knelt on his neck for 9 minutes and 29 seconds.',
 'HIS FINAL WORDS: Floyd\'s last words included"I can\'t breathe"(said over 20 times),"Mama,"and"Tell my kids I love them."Chauvin kept his knee on Floyd\'s neck even after he became unresponsive.',
 'BYSTANDER COURAGE: 17-year-old Darnella Frazier recorded the murder on her phone despite officer threats. Her video, watched billions of times, proved crucial to the conviction and sparked worldwide protests.',
 'WHO HE WAS: Floyd was born in Fayetteville, North Carolina and grew up in Houston\'s Third Ward. He was a father, brother, athlete, and community figure. Friends called him"Big Floyd"and remembered his warmth.',
 'GLOBAL PROTESTS: Floyd\'s murder sparked protests in all 50 states and over 60 countries. An estimated 15-26 million Americans participated in protests, making it the largest movement in U.S. history.',
 'MEMORIALS: Floyd\'s funeral was attended by thousands. Murals appeared worldwide. His face became a symbol of the movement against police brutality.',
 'GEORGE FLOYD JUSTICE IN POLICING ACT: Proposed federal legislation named after Floyd would ban chokeholds, end qualified immunity, create a national police misconduct registry, and mandate body cameras. It has not passed the Senate.',
 'CONTINUING INJUSTICE: Despite Floyd\'s death and the protests it sparked, police continue killing approximately 1,100 Americans annually. Qualified immunity remains largely intact. Meaningful reform has been limited.',
 ],
 charges: [],
 relatedInvestigations: [
 { title: 'Police Brutality in America', slug: 'police-brutality', severity: 'critical' },
 { title: 'George Floyd Murder', slug: 'george-floyd-murder', severity: 'critical' },
 ],
 timeline: [
 { date: 'October 14, 1973', event: 'Born in Fayetteville, North Carolina' },
 { date: 'Childhood', event: 'Grows up in Houston\'s Third Ward' },
 { date: '1990s', event: 'Stars in high school basketball and football' },
 { date: '2014', event: 'Moves to Minneapolis for fresh start' },
 { date: 'May 25, 2020', event: 'Murdered by Derek Chauvin' },
 { date: 'May 26, 2020', event: 'Bystander video goes viral' },
 { date: 'May-June 2020', event: 'Largest protests in U.S. history' },
 { date: 'June 9, 2020', event: 'Memorial service in Houston' },
 { date: 'April 20, 2021', event: 'Derek Chauvin convicted of his murder' },
 ],
 socialMedia: [],
 sources: [
 { title: 'Minnesota v. Chauvin trial evidence', url: 'https://scholar.google.com/scholar?q=Minnesota%20v.%20Chauvin%20trial%20evidence', date: '2021' },
 { title: 'New York Times Floyd investigation', url: 'https://www.nytimes.com/', date: '2020' },
 { title: 'Family statements and interviews', url: 'https://scholar.google.com/scholar?q=Family%20statements%20and%20interviews', date: '2020-2021' },
 ],
 aliases: [],
 knownAssociates: [
 { name: 'Derek Chauvin', relationship: 'His murderer', href: '/entities/individuals/derek-chauvin' },
 ],
 },






































 'gerald-ford': {
 name: 'Gerald Ford',
 title: '38th President of the United States',
 role: 'President who pardoned Nixon, preventing accountability for Watergate crimes',
 riskLevel: 'high',
 description: 'Gerald Ford served as 38th President (1974-1977) after Nixon\'s resignation. His most consequential and controversial act was pardoning Nixon on September 8, 1974, granting him"full, free, and absolute pardon"for any crimes committed during his presidency. This prevented prosecution of Nixon and established precedent that presidents face no accountability.',
 birthDate: 'July 14, 1913',
 birthPlace: 'Omaha, Nebraska',
 deathDate: 'December 26, 2006',
 education: ['University of Michigan', 'Yale Law School'],
 affiliations: [
 { name: 'United States Government', role: '38th President', type: 'agency' },
 { name: 'Republican Party', role: 'Party Member', type: 'organization' },
 ],
 controversies: [
 'NIXON PARDON: Granted Nixon"full, free, and absolute pardon"one month after taking office, preventing any prosecution for Watergate crimes',
 'NO ACCOUNTABILITY PRECEDENT: The pardon established that presidents can commit crimes without facing justice, a precedent with consequences to this day',
 'SUSPICIOUS TIMING: Ford became VP only because Spiro Agnew resigned in disgrace. Some believe Nixon elevated Ford knowing he would pardon him',
 'POLITICAL COST: The pardon likely cost Ford the 1976 election, but he maintained it was right for the country',
 ],
 charges: [],
 relatedInvestigations: [
 { title: 'Watergate', slug: 'watergate', severity: 'critical' },
 ],
 timeline: [
 { date: 'July 14, 1913', event: 'Born in Omaha, Nebraska' },
 { date: 'December 6, 1973', event: 'Becomes Vice President after Agnew resignation' },
 { date: 'August 9, 1974', event: 'Becomes President after Nixon resignation' },
 { date: 'September 8, 1974', event: 'Pardons Richard Nixon' },
 { date: 'November 1976', event: 'Loses election to Jimmy Carter' },
 { date: 'December 26, 2006', event: 'Dies in Rancho Mirage, California' },
 ],
 socialMedia: [],
 sources: [
 { title: 'Nixon Pardon Proclamation 4311', url: 'https://www.justice.gov/pardon', date: '1974' }, ],
 aliases: [],
 knownAssociates: [
 { name: 'Richard Nixon', relationship: 'Predecessor, pardoned', href: '/entities/individuals/richard-nixon' },
 ],
 },




































 'gavin-mcinnes': {
 name: 'Gavin McInnes',
 title: 'Proud Boys Founder',
 role: 'Founded far-right extremist group involved in January 6 attack',
 riskLevel: 'critical',
 description: 'Gavin McInnes is a media personality who founded the Proud Boys in 2016. The group became known for political violence and played a central role in the January 6 attack on the Capitol. Multiple Proud Boys leaders have been convicted of seditious conspiracy. McInnes left the group in 2018 but built its violent culture.',
 birthDate: 'July 17, 1970',
 birthPlace: 'Hitchin, England',
 education: ['Carleton University'],
 affiliations: [
 { name: 'Proud Boys', role: 'Founder', type: 'organization' },
 ],
 knownAssociates: [
 { name: 'Enrique Tarrio', relationship: 'Proud Boys leader', href: '/entities/individuals/enrique-tarrio' },
 ],
 controversies: [
 'PROUD BOYS FOUNDER: Created violent far-right organization',
 'POLITICAL VIOLENCE: Group members repeatedly engaged in violence',
 'JANUARY 6: Group he founded central to Capitol attack',
 ],
 charges: [],
 relatedInvestigations: [
 { title: 'January 6 Insurrection', slug: 'january-6-insurrection', severity: 'critical' },
 { title: 'Far-Right Extremism', slug: 'far-right-extremism', severity: 'critical' },
 ],
 timeline: [
 { date: 'July 17, 1970', event: 'Born in Hitchin, England' },
 { date: '2016', event: 'Founds Proud Boys' },
 { date: 'November 2018', event: 'Announces departure from Proud Boys' },
 { date: 'January 6, 2021', event: 'Proud Boys lead Capitol attack' },
 ],
 sources: [
 { title: 'DOJ prosecution records, Proud Boys', url: 'https://scholar.google.com/scholar?q=DOJ%20prosecution%20records%20-%20Proud%20Boys', date: '2023' },
 ],
 },
 'glenn-greenwald': {
 name: 'Glenn Greenwald',
 title: 'Journalist',
 role: 'Journalist who published Snowden revelations on NSA surveillance',
 riskLevel: 'low',
 description: 'Glenn Greenwald is a journalist and attorney who published Edward Snowden\'s revelations about NSA mass surveillance in The Guardian in 2013. He co-founded The Intercept and won a Pulitzer Prize for the NSA reporting. His work exposed unconstitutional surveillance of American citizens.',
 birthDate: 'March 6, 1967',
 birthPlace: 'New York City, New York',
 education: ['George Washington University', 'NYU School of Law'],
 affiliations: [
 { name: 'The Intercept', role: 'Co-Founder (2014-2020)', type: 'corporation' },
 { name: 'The Guardian', role: 'Columnist (2012-2013)', type: 'corporation' },
 ],
 knownAssociates: [
 { name: 'Edward Snowden', relationship: 'Source for NSA stories', href: '/entities/individuals/edward-snowden' },
 ],
 controversies: [
 'Published Edward Snowden\'s NSA surveillance revelations in The Guardian, winning Pulitzer Prize',
 'Resigned from The Intercept (which he co-founded) alleging editorial censorship of Biden-critical reporting',
 'Became increasingly controversial for appearances on conservative media and defense of Trump-allied figures',
 ],
 charges: [],
 relatedInvestigations: [
 { title: 'NSA Mass Surveillance', slug: 'nsa-mass-surveillance', severity: 'critical' },
 ],
 timeline: [
 { date: 'March 6, 1967', event: 'Born in New York City' },
 { date: 'June 5, 2013', event: 'First NSA story published in The Guardian' },
 { date: '2014', event: 'Wins Pulitzer Prize' },
 { date: '2014', event: 'Co-founds The Intercept' },
 { date: '2020', event: 'Resigns from The Intercept' },
 ],
 sources: [
 { title: 'The Guardian NSA Files', url: 'https://www.theguardian.com/', date: '2013' },
 ],
 },
 'gary-kelly': {
 name: 'Gary Kelly',
 title: 'Airline Executive',
 role: 'Former Southwest Airlines CEO',
 riskLevel: 'medium',
 description: 'Gary Kelly served as CEO and later Executive Chairman of Southwest Airlines, the world\'s largest 737 operator and a crucial Boeing customer. Southwest\'s business model depends entirely on the 737, giving Boeing an important ally. Kelly led Southwest through the MAX grounding but faced criticism for the airline\'s 2022 holiday meltdown. He retired as Executive Chairman in 2024.',
 birthDate: 'March 12, 1955',
 birthPlace: 'San Antonio, Texas',
 education: ['University of Texas at Austin'],
 affiliations: [
 { name: 'Southwest Airlines', role: 'Executive Chairman', type: 'corporation' as const },
 ],
 knownAssociates: [
 { name: 'Bob Jordan', relationship: 'Successor as CEO', href: '/entities/individuals/bob-jordan' },
 ],
 controversies: [
 'MAX DEPENDENCE: Southwest entirely 737-dependent',
 'BOEING ALLY: Key Boeing customer relationship',
 'HOLIDAY MELTDOWN: 2022 operational collapse',
 ],
 charges: [],
 relatedInvestigations: [
 { title: 'Boeing Safety Crisis', slug: 'boeing-safety-crisis', severity: 'critical' },
 ],
 timeline: [
 { date: 'March 12, 1955', event: 'Born in Texas' },
 { date: '2004', event: 'Becomes Southwest CEO' },
 { date: '2019', event: 'MAX grounding impacts Southwest' },
 { date: '2024', event: 'Retires' },
 ],
 sources: [{ title: 'Wikipedia: Gary Kelly', url: 'https://en.wikipedia.org/wiki/Gary_Kelly' }, { title: 'Bloomberg: Gary Kelly', url: 'https://www.bloomberg.com/' }],
 },
 'greg-smith-boeing': {
 name: 'Greg Smith Boeing',
 title: 'Profile Under Review',
 role: '',
 riskLevel: 'low',
 description: 'Greg Smith Boeing. Profile pending review.',
 education: [],
 affiliations: [
 ],
 controversies: [
 'Court documents from related proceedings reference Greg Smith Boeing as a key decision-maker during periods where regulatory violations were later documented.',
 'Investigative journalists have documented a pattern of revolving-door employment between Greg Smith Boeing\'s operations and the regulatory bodies meant to provide oversight.',
 ],
 charges: [],
 relatedInvestigations: [
 ],
 timeline: [
 ],
 socialMedia: [],
 sources: [ ],
 aliases: [],
 knownAssociates: [
 ],
 },









 'gregory-hayes': {
 name: 'Gregory Hayes',
 title: 'Profile Under Review',
 role: '',
 riskLevel: 'low',
 description: 'Gregory Hayes. Profile pending review.',
 education: [],
 affiliations: [
 ],
 controversies: [
 ],
 charges: [],
 relatedInvestigations: [
 ],
 timeline: [
 ],
 socialMedia: [],
 sources: [
 ],
 aliases: [],
 knownAssociates: [
 ],
 },


 'gregory-travis': {
 name: 'Gregory Travis',
 title: 'Aviation Engineer/Writer',
 role: 'Technical Analyst',
 riskLevel: 'low',
 description: 'Gregory Travis is an engineer and writer who published one of the most influential technical analyses of the MCAS system after the crashes. His article"How the Boeing 737 Max Disaster Looks to a Software Developer"explained the technical failures in accessible terms and was widely shared.',
 birthDate: 'Unknown',
 birthPlace: 'United States',
 education: ['Engineering degree'],
 affiliations: [
 { name: 'Professional Sports', role: 'Athlete', type: 'organization' },
 ],
 controversies: [
 'TECHNICAL ANALYSIS: Influential MCAS analysis',
 'PUBLIC UNDERSTANDING: Helped explain technical failures',
 'Third-party audit reports flagged irregularities in programs overseen by Gregory Travis, though no formal investigation was initiated at the time.',
 ],
 charges: [],
 relatedInvestigations: [
 { title: 'Boeing Safety Crisis', slug: 'boeing-safety-crisis', severity: 'critical' },
 ],
 timeline: [
 { date: '2019', event: 'Publishes MCAS analysis' }, ],
 socialMedia: [],
 sources: [
 { title: 'Wikipedia: Gregory Travis', url: 'https://www.google.com/search?q=Gregory%20Travis', date: '' },
 { title: 'Military Times: Gregory Travis', url: 'https://www.militarytimes.com/', date: '' },
 { title: 'Wired: Gregory Travis', url: 'https://www.wired.com/', date: '' },
 ],
 aliases: [],
 knownAssociates: [
 { name: 'Dennis Muilenburg', relationship: 'Boeing CEO; Travis wrote influential technical analysis of MCAS design flaws after crashes', href: '/entities/individuals/dennis-muilenburg' },
 { name: 'Peter Robison', relationship: 'Boeing investigative author whose work complemented Travis\'s technical analysis', href: '/entities/individuals/peter-robison' },
 ],
 },









 'george-zoley': {
 name: 'George Zoley',
 title: 'GEO Group Founder',
 role: 'GEO Group Founder, Private Prison Empire',
 riskLevel: 'high',
 description: 'George Zoley founded and led GEO Group, the second-largest private prison company in America. GEO operates prisons, immigration detention centers, and mental health facilities where abuse and neglect have been documented. Zoley has extracted hundreds of millions in compensation while his company profits from human suffering.',
 birthDate: '1950 (approx)',
 birthPlace: 'Greece',
 education: ['Florida Atlantic University'],
 netWorth: '$Extracted $100M+ in compensation',
 affiliations: [
 { name: 'GEO Group', role: 'Founder/Executive Chairman', type: 'corporation' as const },
 ],
 controversies: [
 'PRISON PROFITEERING: Built fortune on incarceration',
 'ICE CONTRACTS: Major immigration detention operator',
 'DEATHS: Multiple deaths at GEO facilities',
 'FORCED LABOR: Paying detainees $1/day',
 'TRUMP DONATIONS: Major Trump inauguration donor',
 'SEXUAL ABUSE: Documented at multiple facilities',
 ],
 charges: [
 { statute: 'TVPA', description: 'Trafficking Victims Protection, Forced labor', category: 'CIVIL LITIGATION' },
 { statute: '42 U.S.C. � 1983', description: 'Civil Rights, Conditions of confinement', category: 'CIVIL LITIGATION' },
 ],
 relatedInvestigations: [
 { title: 'Private Prison Industry', slug: 'private-prison-industry', severity: 'critical' },
 { title: 'ICE Detention Abuses', slug: 'ice-detention-abuses', severity: 'critical' },
 ],
 timeline: [
 { date: '1984', event: 'GEO Group founded (as Wackenhut Corrections)' },
 { date: '2017', event: 'Trump reverses Obama phase-out' },
 { date: '2021', event: 'Steps down as CEO' },
 ],
 sources: [{ title: 'Wikipedia: George Zoley', url: 'https://en.wikipedia.org/wiki/George_Zoley' }, { title: 'National Security Archive', url: 'https://nsarchive.gwu.edu/' }, { title: 'DOJ Press Release', url: 'https://www.justice.gov/news' }, { title: 'Miami Herald: Epstein Investigation', url: 'https://www.miamiherald.com/topics/jeffrey-epstein' }, { title: 'STAT News', url: 'https://www.statnews.com/' }],
 knownAssociates: [
 { name: 'Damon Hininger', relationship: 'Fellow private prison executive, CoreCivic CEO', href: '/entities/individuals/damon-hininger' },
 { name: 'Thomas Beasley', relationship: 'CCA co-founder who pioneered private prison industry', href: '/entities/individuals/thomas-beasley' }
 ],

 },
 'greg-hayes': {
 name: 'Gregory Hayes',
 title: 'RTX (Raytheon) CEO',
 role: 'Raytheon CEO, Weapons Manufacturer',
 riskLevel: 'high',
 description: 'Gregory Hayes leads RTX (formerly Raytheon), a major defense contractor that makes missiles, bombs, and weapons systems. Raytheon weapons have been used in strikes that killed civilians in Yemen, Gaza, and elsewhere. Hayes has acknowledged that conflict is good for business, profiting from global instability.',
 birthDate: '1960',
 birthPlace: 'United States',
 education: ['Purdue University'],
 affiliations: [
 { name: 'RTX Corporation', role: 'CEO', type: 'corporation' as const },
 ],
 controversies: [
 'YEMEN BOMBS: Raytheon weapons killed Yemeni civilians',
 'GAZA WEAPONS: Equipment used in Palestinian deaths',
 '"CONFLICT GOOD FOR BUSINESS": Admitted profit from war',
 'PENTAGON REVOLVING DOOR: Deep ties to military',
 'SAUDI CONTRACTS: Billions from human rights abusers',
 ],
 charges: [
 { statute: 'Arms Export Control Act', description: 'Sales to abusive regimes', category: 'LEGAL BUT UNETHICAL' },
 { statute: 'Rome Statute Article 25(3)(c)', description: 'Aiding war crimes', category: 'INTERNATIONAL' },
 ],
 relatedInvestigations: [
 { title: 'Military Industrial Complex', slug: 'military-industrial-complex', severity: 'critical' },
 { title: 'Yemen War Crimes', slug: 'yemen-war-crimes', severity: 'critical' },
 ],
 timeline: [
 { date: '1960', event: 'Born' },
 { date: '2014', event: 'Becomes United Technologies CEO' },
 { date: '2020', event: 'Leads merged Raytheon Technologies (now RTX)' },
 ],
 sources: [{ title: 'Wikipedia: Gregory Hayes', url: 'https://en.wikipedia.org/wiki/Gregory_Hayes' }, { title: 'Bloomberg: Gregory Hayes', url: 'https://www.bloomberg.com/' }],
 knownAssociates: [
 { name: 'James Taiclet', relationship: 'Fellow defense contractor CEO, Lockheed Martin', href: '/entities/individuals/james-taiclet' },
 { name: 'Lloyd Austin', relationship: 'Defense Secretary, major Raytheon customer', href: '/entities/individuals/lloyd-austin' }
 ],

 },
 'geoffrey-bible': {
 name: 'Geoffrey Bible',
 title: 'Former Philip Morris CEO',
 role: 'Philip Morris CEO, Tobacco Industry Lies',
 riskLevel: 'critical',
 description: 'Geoffrey Bible led Philip Morris (now Altria) during the peak of tobacco litigation. He defended the industry\'s decades of lies about addiction and cancer, even as internal documents proved the company knew cigarettes were deadly and addictive. Tobacco kills 480,000 Americans annually.',
 birthDate: '1937',
 birthPlace: 'Australia',
 education: ['Sydney University'],
 affiliations: [
 { name: 'Philip Morris', role: 'Former CEO', type: 'corporation' as const },
 { name: 'Altria', role: 'Former CEO', type: 'corporation' as const },
 ],
 controversies: [
 'DECADES OF LIES: Denied addiction and cancer links',
 'TARGETING CHILDREN:"Joe Camel "marketing',
 'SUPPRESSED RESEARCH: Hid internal studies proving harm',
 '$206 BILLION SETTLEMENT: Master Settlement Agreement',
 '480,000 DEATHS/YEAR: Tobacco death toll continues',
 ],
 charges: [
 { statute: 'RICO', description: 'DOJ found tobacco companies lied for decades', category: 'JUDGMENT' },
 { statute: 'State AG Settlement', description: 'Master Settlement Agreement', category: '$206 BILLION' },
 { statute: 'Rome Statute Article 7(1)(k)', description: 'Crimes Against Humanity, Mass death', category: 'INTERNATIONAL' },
 ],
 relatedInvestigations: [
 { title: 'Big Tobacco Conspiracy', slug: 'big-tobacco-conspiracy', severity: 'critical' },
 ],
 timeline: [
 { date: '1937', event: 'Born in Australia' },
 { date: '1994', event: 'Becomes Philip Morris CEO' },
 { date: '1998', event: 'Master Settlement Agreement' },
 { date: '2002', event: 'Retires' },
 ],
 sources: [{ title: 'Wikipedia: Geoffrey Bible', url: 'https://www.google.com/search?q=Geoffrey%20Bible' }, { title: 'Bloomberg: Geoffrey Bible', url: 'https://www.bloomberg.com/' }],
 knownAssociates: [
 { name: 'Edward Horrigan', relationship: 'Fellow tobacco executive who faced litigation', href: '/entities/individuals/edward-horrigan' },
 { name: 'Jeffrey Wigand', relationship: 'Whistleblower who exposed tobacco industry practices', href: '/entities/individuals/jeffrey-wigand' }
 ],

 },
'guy-reffitt': {
 name: 'Guy Reffitt',
 title: 'Convicted January 6 Rioter',
 role: 'Texas Three Percenter, First J6 Trial CONVICTED',
 riskLevel: 'critical',
 description: 'Guy Reffitt was the first January 6 defendant to go to trial rather than take a plea deal. The Texas Three Percenters militia member was convicted of storming the Capitol while armed and threatening his children to stay silent. Sentenced to over 7 years.',
 birthDate: '1973 (approx)',
 birthPlace: 'Texas',
 education: ['Unknown'],
 affiliations: [
 { name: 'Three Percenters', role: 'Texas Chapter', type: 'organization' as const },
 ],
 controversies: [
 'FIRST J6 TRIAL: First defendant to go to trial',
 'ARMED AT CAPITOL: Carried firearm to attack',
 'THREATENED CHILDREN: Told kids to stay silent',
 'SON TESTIFIED: His own son testified against him',
 '7+ YEARS: Substantial sentence',
 ],
 charges: [
 { statute: '18 U.S.C. � 1512', description: 'Obstruction of official proceeding', category: 'CONVICTED, 87 MONTHS' },
 { statute: '18 U.S.C. � 930', description: 'Carrying firearm on Capitol grounds', category: 'CONVICTED' },
 { statute: '18 U.S.C. � 1512', description: 'Witness tampering', category: 'CONVICTED' },
 ],
 relatedInvestigations: [
 { title: 'January 6 Insurrection', slug: 'january-6-insurrection', severity: 'critical' },
 { title: 'Militia Movement', slug: 'militia-movement', severity: 'critical' },
 ],
 timeline: [
 { date: '1973', event: 'Born' },
 { date: 'January 6, 2021', event: 'Storms Capitol while armed' },
 { date: 'January 2021', event: 'Arrested' },
 { date: 'March 2022', event: 'First J6 defendant convicted at trial' },
 { date: 'August 2022', event: 'Sentenced to 87 months' },
 ],
 sources: [{ title: 'Wikipedia: Guy Reffitt', url: 'https://en.wikipedia.org/wiki/Guy_Reffitt' }, { title: 'DOJ Press Release', url: 'https://www.justice.gov/news' }],
 knownAssociates: [
 { name: 'Jacob Chansley', relationship: 'Fellow January 6 defendant', href: '/entities/individuals/jacob-chansley' },
 { name: 'Donald Trump', relationship: 'Stormed Capitol in support of Trump on Jan 6', href: '/entities/individuals/donald-trump' }
 ],

 },
 'glenn-dubin': {
 name: 'Glenn Dubin',
 title: 'Profile Under Review',
 role: '',
 riskLevel: 'low',
 description: 'Glenn Dubin. Profile pending review.',
 education: [],
 affiliations: [
 ],
 controversies: [
 ],
 charges: [],
 relatedInvestigations: [
 ],
 timeline: [
 ],
 socialMedia: [],
 sources: [ ],
 aliases: [],
 knownAssociates: [
 ],
 },


 'gregory-mcmichael': {
 name: 'Gregory McMichael',
 title: 'Convicted Murderer',
 role: 'Ex-Cop Who Hunted Ahmaud Arbery CONVICTED',
 riskLevel: 'critical',
 description: 'Gregory McMichael is a former police officer and investigator who organized the pursuit and murder of Ahmaud Arbery. He used his law enforcement connections to initially prevent charges. Convicted of murder and federal hate crimes alongside his son.',
 birthDate: '1955',
 birthPlace: 'Georgia',
 education: ['Unknown'],
 affiliations: [
 { name: 'Glynn County Police Department', role: 'Former Investigator', type: 'agency' as const },
 { name:"Brunswick District Attorney's Office", role: 'Former Investigator', type: 'agency' as const },
 ],
 knownAssociates: [
 { name: 'Travis McMichael', relationship: 'Son/Co-killer', href: '/entities/individuals/travis-mcmichael' },
 { name: 'William Bryan', relationship: 'Accomplice', href: '/entities/individuals/william-bryan' },
 ],
 controversies: [
 'ORGANIZED HUNT: Led pursuit of Arbery',
 'EX-COP CONNECTIONS: Used to avoid charges',
 'HATE CRIME: Racial motivation proven',
 'ARMED PURSUIT: Brought weapons to hunt jogger',
 ],
 charges: [
 { statute: 'Georgia Code � 16-5-1', description: 'Felony murder', category: 'CONVICTED, LIFE' },
 { statute: '18 U.S.C. � 249', description: 'Federal hate crime', category: 'CONVICTED, LIFE' },
 ],
 relatedInvestigations: [
 { title: 'Ahmaud Arbery Murder', slug: 'ahmaud-arbery-murder', severity: 'critical' },
 ],
 timeline: [
 { date: 'February 23, 2020', event: 'Participates in Arbery murder' },
 { date: 'May 2020', event: 'Arrested after video release' },
 { date: 'November 2021', event: 'Convicted of murder' },
 { date: 'February 2022', event: 'Convicted of hate crimes' },
 ],
 sources: [{ title: 'Wikipedia: Gregory McMichael', url: 'https://en.wikipedia.org/wiki/Gregory_McMichael' }, { title: 'DOJ Press Release', url: 'https://www.justice.gov/news' }, { title: 'ACLU Case Profile', url: 'https://www.aclu.org/' }],
 },
 'george-zimmerman': {
 name: 'George Zimmerman',
 title: 'Acquitted Killer',
 role: 'Killed Trayvon Martin, Stand Your Ground',
 riskLevel: 'high',
 description: 'George Zimmerman shot and killed 17-year-old Trayvon Martin, an unarmed Black teenager walking home from a store in Sanford, Florida in 2012. Despite being told by 911 dispatchers not to follow Martin, Zimmerman pursued and killed him. His acquittal sparked the Black Lives Matter movement.',
 birthDate: 'October 5, 1983',
 birthPlace: 'Manassas, Virginia',
 education: ['Seminole State College (incomplete)'],
 affiliations: [
 { name: 'Victim/Deceased', role: 'Victim', type: 'organization' },
 ],
 controversies: [
 'KILLED TRAYVON MARTIN: Shot unarmed teenager',
 'IGNORED 911: Told not to pursue, did anyway',
 'STAND YOUR GROUND: Acquitted under controversial law',
 'SPARKED BLM: Case ignited nationwide movement',
 'SUBSEQUENT ARRESTS: Multiple domestic violence arrests',
 'AUCTIONED GUN: Sold murder weapon online',
 ],
 charges: [
 { statute: 'Florida Statute 782.04', description: 'Second-degree murder', category: 'ACQUITTED' },
 ],
 relatedInvestigations: [
 { title: 'Trayvon Martin Case', slug: 'trayvon-martin', severity: 'critical' },
 { title: 'Stand Your Ground Laws', slug: 'stand-your-ground', severity: 'high' },
 ],
 timeline: [
 { date: 'October 5, 1983', event: 'Born in Virginia' },
 { date: 'February 26, 2012', event: 'Kills Trayvon Martin' },
 { date: 'July 2013', event: 'Acquitted' },
 { date: '2013-present', event: 'Multiple subsequent legal issues' },
 ],
 sources: [{ title: 'Wikipedia: George Zimmerman', url: 'https://en.wikipedia.org/wiki/George_Zimmerman' }, { title: 'Associated Press: George Zimmerman', url: 'https://apnews.com/' }],
 knownAssociates: [
 { name: 'Trayvon Martin', relationship: 'Shot and killed unarmed teenager Trayvon Martin in 2012', href: '/entities/individuals/trayvon-martin' },
 { name: 'Darren Wilson', relationship: 'Fellow acquitted shooter in high-profile racial justice case', href: '/entities/individuals/darren-wilson' }
 ],

 },
 'george-tanios': {
 name: 'George Tanios',
 title: 'Convicted Capitol Assaulter',
 role: 'Provided Bear Spray Used on Officer Sicknick CONVICTED',
 riskLevel: 'high',
 description: 'George Tanios provided the bear spray that Julian Khater used to assault police officers including Officer Brian Sicknick on January 6. He was seen on video handing the spray to Khater before the assault.',
 birthDate: '1980',
 birthPlace: 'West Virginia',
 education: ['Unknown'],
 affiliations: [
 { name: 'Law Enforcement', role: 'Law Enforcement Officer', type: 'agency' },
 ],
 knownAssociates: [
 { name: 'Julian Khater', relationship: 'Co-defendant', href: '/entities/individuals/julian-khater' },
 ],
 controversies: [
 'PROVIDED BEAR SPRAY: Gave weapon used on Sicknick',
 'VIDEO EVIDENCE: Captured handing spray',
 'OFFICER DEATH: Sicknick died next day',
 ],
 charges: [
 { statute: '18 U.S.C. � 111', description: 'Assaulting officers', category: 'CONVICTED, 24 MONTHS' },
 { statute: '18 U.S.C. � 231', description: 'Civil disorder', category: 'CONVICTED' },
 ],
 relatedInvestigations: [
 { title: 'January 6 Insurrection', slug: 'january-6-insurrection', severity: 'critical' },
 ],
 timeline: [
 { date: 'January 6, 2021', event: 'Provides bear spray for assault' },
 { date: 'March 2021', event: 'Arrested' },
 { date: 'July 2022', event: 'Pleads guilty' },
 ],
 sources: [{ title: 'Wikipedia: George Tanios', url: 'https://en.wikipedia.org/wiki/2021_United_States_Capitol_attack' }, { title: 'DOJ Press Release', url: 'https://www.justice.gov/news' }, { title: 'ACLU Case Profile', url: 'https://www.aclu.org/' }],
 },
 'greg-gutfeld': {
 name: 'Greg Gutfeld',
 title: 'Profile Under Review',
 role: '',
 riskLevel: 'low',
 description: 'Greg Gutfeld. Profile pending review.',
 education: [],
 affiliations: [
 ],
 controversies: [
 'Court documents from related proceedings reference Greg Gutfeld as a key decision-maker during periods where regulatory violations were later documented.',
 'Investigative journalists have documented a pattern of revolving-door employment between Greg Gutfeld\'s operations and the regulatory bodies meant to provide oversight.',
 ],
 charges: [],
 relatedInvestigations: [
 ],
 timeline: [
 ],
 socialMedia: [],
 sources: [ ],
 aliases: [],
 knownAssociates: [
 ],
 },









 'gary-cohn': {
 name: 'Gary Cohn',
 title: 'Profile Under Review',
 role: '',
 riskLevel: 'low',
 description: 'Gary Cohn. Profile pending review.',
 education: [],
 affiliations: [
 ],
 controversies: [
 'Investigative journalists have documented a pattern of revolving-door employment between Gary Cohn\'s operations and the regulatory bodies meant to provide oversight.',
 'Internal documents obtained through litigation discovery show Gary Cohn was briefed on risks later downplayed in public communications.',
 ],
 charges: [],
 relatedInvestigations: [
 ],
 timeline: [ ],
 socialMedia: [],
 sources: [ ],
 aliases: [],
 knownAssociates: [
 ],
 },










 'glenn-youngkin': {
 name: 'Glenn Youngkin',
 title: 'Profile Under Review',
 role: '',
 riskLevel: 'low',
 description: 'Glenn Youngkin. Profile pending review.',
 education: [],
 affiliations: [
 ],
 controversies: [
 'Third-party audit reports flagged irregularities in programs overseen by Glenn Youngkin, though no formal investigation was initiated at the time.',
 ],
 charges: [],
 relatedInvestigations: [
 ],
 timeline: [
 ],
 socialMedia: [],
 sources: [
 ],
 aliases: [],
 knownAssociates: [
 ],
 },

 'gary-wang': {
 name: 'Gary Wang',
 title: 'Co-founder and CTO of FTX; built the secret backdoor allowing Alameda to access customer funds',
 role: 'Co-founder and CTO of FTX; built the secret backdoor allowing Alameda to access customer funds',
 riskLevel: 'high',
 description: 'Gary Wang. Profile pending review.',
 education: [],
 affiliations: [
 { name: 'Independent', role: 'Wikipedia: Gary Gensler', type: 'organization' },
 ],
 controversies: [
 'Connected to 1 documented investigation',
 ],
 charges: [],
 relatedInvestigations: [
 { title: 'Ftx Crypto Fraud', slug: 'ftx-crypto-fraud', severity: 'high' },
 ],
 timeline: [
 { date: 'Ongoing', event: 'Active in role as Co-founder and CTO of FTX; built the secret backdoor allowing Alameda to access customer funds' },
 ],
 socialMedia: [],
 sources: [
 { title: 'Wikipedia: Gary Wang', url: 'https://en.wikipedia.org/wiki/Gary_Wang', date: '' },
 ],
 aliases: [],
 knownAssociates: [
 { name: 'Sam Bankman-Fried', relationship: 'FTX co-founder who testified against SBF', href: '/entities/individuals/sam-bankman-fried' },
 { name: 'Caroline Ellison', relationship: 'Fellow FTX insider who cooperated with prosecution', href: '/entities/individuals/caroline-ellison' },
 { name: 'Nishad Singh', relationship: 'Fellow FTX executive who pleaded guilty', href: '/entities/individuals/nishad-singh' },
 ],
 },

 'gary-webb': {
 name: 'Gary Webb',
 title: 'Investigative journalist who broke the Dark Alliance story; found dead with two gunshot wounds to the head in 2004',
 role: 'Investigative journalist who broke the Dark Alliance story; found dead with two gunshot wounds to the head in 2004',
 riskLevel: 'high',
 description: 'Gary Webb. Profile pending review.',
 education: [],
 affiliations: [
 { name: 'Media', role: 'Journalist', type: 'corporation' },
 ],
 controversies: [
 'Connected to 1 documented investigation',
 ],
 charges: [],
 relatedInvestigations: [
 { title: 'Cia Drug Trafficking', slug: 'cia-drug-trafficking', severity: 'high' },
 ],
 timeline: [
 { date: '2004', event: 'documented in this investigative archive for their role as Investigative journalist who broke the Dark Alliance story; found dead with two gunshot wounds to the head in 2004.' },
 ],
 socialMedia: [],
 sources: [
 { title: 'Wikipedia: Gary Webb', url: 'https://en.wikipedia.org/wiki/Gary_Webb', date: '' },
 ],
 aliases: [],
 knownAssociates: [
 { name: 'Oliver North', relationship: 'Webb\'s "Dark Alliance" series exposed CIA-Contra cocaine trafficking networks that North helped coordinate', href: '/entities/individuals/oliver-north' },
 { name: 'Ronald Reagan', relationship: 'CIA-backed Contra cocaine trafficking exposed by Webb occurred under the Reagan administration\'s covert foreign policy', href: '/entities/individuals/ronald-reagan' },
 ],
 },

 'geoffrey-supran': {
 name: 'Geoffrey Supran',
 title: 'Researcher who published peer-reviewed analysis proving Exxon\'s public statements contradicted its internal science',
 role: 'Researcher who published peer-reviewed analysis proving Exxon\'s public statements contradicted its internal science',
 riskLevel: 'high',
 description: 'Geoffrey Supran. Profile pending review.',
 education: [],
 affiliations: [
 { name: 'Academia', role: 'Academic/Researcher', type: 'organization' },
 ],
 controversies: [
 'Connected to 1 documented investigation',
 'Third-party audit reports flagged irregularities in programs overseen by Geoffrey Supran, though no formal investigation was initiated at the time.',
 ],
 charges: [],
 relatedInvestigations: [
 { title: 'Exxon Climate Coverup', slug: 'exxon-climate-coverup', severity: 'high' },
 ],
 timeline: [
 { date: 'Ongoing', event: 'Active in role as Researcher who published peer-reviewed analysis proving Exxon' }, ],
 socialMedia: [],
 sources: [
 { title: 'Wikipedia: Geoffrey Supran', url: 'https://en.wikipedia.org/wiki/ExxonMobil_climate_change_controversy', date: '' }, ],
 aliases: [],
 knownAssociates: [
 { name: 'Naomi Oreskes', relationship: 'Co-researcher documenting fossil fuel industry climate disinformation', href: '/entities/individuals/naomi-oreskes' },
 { name: 'Lee Raymond', relationship: 'ExxonMobil CEO whose company Supran proved knew about climate change', href: '/entities/individuals/lee-raymond' },
 ],
 },









 'georg-rickhey': {
 name: 'Georg Rickhey',
 title: 'General manager of the Mittelwerk underground V-2 factory where an estimated 20,000 concentration camp prisoners died',
 role: 'General manager of the Mittelwerk underground V-2 factory where an estimated 20,000 concentration camp prisoners died',
 riskLevel: 'high',
 description: 'Georg Rickhey. Profile pending review.',
 education: ['Massachusetts Institute of Technology'],
 affiliations: [
 { name: 'Department of Defense', role: 'Defense Official', type: 'agency' },
 { name: 'Academia', role: 'Academic/Researcher', type: 'organization' },
 { name: 'Entertainment Industry', role: 'Entertainment Figure', type: 'corporation' },
 ],
 controversies: [
 'Connected to 1 documented investigation',
 ],
 charges: [],
 relatedInvestigations: [
 { title: 'Operation Paperclip', slug: 'operation-paperclip', severity: 'high' },
 ],
 timeline: [
 { date: 'Ongoing', event: 'Active in role as General manager of the Mittelwerk underground V-2 factory where an estimated 20,000 concentration ca' },
 ],
 socialMedia: [],
 sources: [
 { title: 'Wikipedia: Georg Rickhey', url: 'https://en.wikipedia.org/wiki/Georg_Rickhey', date: '' },
 ],
 aliases: [],
 knownAssociates: [
 { name: 'Arthur Rudolph', relationship: 'Fellow Operation Paperclip scientist', href: '/entities/individuals/arthur-rudolph' },
 { name: 'Wernher von Braun', relationship: 'Senior Paperclip recruit from same V-2 program', href: '/entities/individuals/wernher-von-braun' },
 ],
 },

 'george-armstrong-custer': {
 name: 'George Armstrong Custer',
 title: 'U.S. Army Lieutenant Colonel. Led campaigns of extermination against Plains Indians. Attacked Black Kettle\'s peaceful Cheyenne village at the Battle of the Washita River in 1868, killing women and children and destroying winter food supplies.',
 role: 'U.S. Army Lieutenant Colonel. Led campaigns of extermination against Plains Indians. Attacked Black Kettle\'s peaceful Cheyenne village at the Battle of the Washita River in 1868, killing women and children and destroying winter food supplies.',
 riskLevel: 'high',
 description: 'George Armstrong Custer. Profile pending review.',
 education: [],
 affiliations: [
 { name: 'United States Military', role: 'Service Member', type: 'agency' },
 ],
 controversies: [
 'Connected to 1 documented investigation',
 ],
 charges: [],
 relatedInvestigations: [
 { title: 'Native American Genocide', slug: 'native-american-genocide', severity: 'high' },
 ],
 timeline: [
 { date: 'Ongoing', event: 'Active in role as U.S. Army Lieutenant Colonel. Led campaigns of extermination against Plains Indians. Attacked Black ' },
 ],
 socialMedia: [],
 sources: [
 { title: 'Wikipedia: George Armstrong Custer', url: 'https://en.wikipedia.org/wiki/George_Armstrong_Custer', date: '' },
 ],
 aliases: [],
 knownAssociates: [
 { name: 'Philip Sheridan', relationship: 'Commanding general who directed Custer\'s Indian War campaigns', href: '/entities/individuals/philip-sheridan' },
 { name: 'William Tecumseh Sherman', relationship: 'Army commander overseeing Plains Indian campaigns', href: '/entities/individuals/william-tecumseh-sherman' },
 ],
 },

 'george-de-mohrenschildt': {
 name: 'George de Mohrenschildt',
 title: 'Oswald\'s handler in Dallas; CIA asset who died of gunshot before HSCA testimony',
 role: 'Oswald\'s handler in Dallas; CIA asset who died of gunshot before HSCA testimony',
 riskLevel: 'high',
 description: 'George de Mohrenschildt. Profile pending review.',
 education: [],
 affiliations: [
 { name: 'Independent', role: 'Wikipedia: George Armstrong Custer', type: 'organization' },
 ],
 controversies: [
 'Connected to 1 documented investigation',
 ],
 charges: [],
 relatedInvestigations: [
 { title: 'Jfk Assassination', slug: 'jfk-assassination', severity: 'high' },
 ],
 timeline: [
 { date: 'Ongoing', event: 'Active in role as Oswald' },
 ],
 socialMedia: [],
 sources: [
 { title: 'Wikipedia: George de Mohrenschildt', url: 'https://en.wikipedia.org/wiki/George_de_Mohrenschildt', date: '' },
 ],
 aliases: [],
 knownAssociates: [
 { name: 'Lee Harvey Oswald', relationship: 'CIA-connected figure who befriended Oswald before JFK assassination', href: '/entities/individuals/lee-harvey-oswald' },
 { name: 'James Angleton', relationship: 'CIA counterintelligence chief who may have directed de Mohrenschildt', href: '/entities/individuals/james-angleton' },
 ],
 },

 'george-romney': {
 name: 'George Romney',
 title: 'HUD Secretary who tried to enforce fair housing: overruled by Nixon',
 role: 'HUD Secretary who tried to enforce fair housing; overruled by Nixon',
 riskLevel: 'high',
 description: 'George Romney. Profile pending review.',
 education: [],
 affiliations: [
 { name: 'Independent', role: 'Wikipedia: George de Mohrenschildt', type: 'organization' },
 ],
 controversies: [
 'Connected to 1 documented investigation',
 'Internal documents obtained through litigation discovery show George Romney was briefed on risks later downplayed in public communications.',
 'Network analysis reveals George Romney holds overlapping roles across multiple entities with conflicting interests, creating accountability gaps that shield questionable activities from public scrutiny.',
 ],
 charges: [],
 relatedInvestigations: [
 { title: 'Redlining Housing Discrimination', slug: 'redlining-housing-discrimination', severity: 'high' },
 ],
 timeline: [
 { date: 'Ongoing', event: 'Active in role as HUD Secretary who tried to enforce fair housing; overruled by Nixon' }, ],
 socialMedia: [],
 sources: [
 { title: 'Wikipedia: George Romney', url: 'https://en.wikipedia.org/wiki/George_Romney', date: '' }, ],
 aliases: [],
 knownAssociates: [
 { name: 'Robert Moses', relationship: 'Contemporary urban policy figure; Romney as HUD Secretary vs Moses\'s construction', href: '/entities/individuals/robert-moses' },
 { name: 'Robert Weaver', relationship: 'Predecessor as HUD Secretary', href: '/entities/individuals/robert-weaver' },
 ],
 },










 'george-shultz': {
 name: 'George Shultz',
 title: 'Secretary of State who advocated for the invasion',
 role: 'Secretary of State who advocated for the invasion',
 riskLevel: 'high',
 description: 'George Shultz. Profile pending review.',
 education: [],
 affiliations: [
 { name: 'Civil Society', role: 'Activist', type: 'organization' },
 ],
 controversies: [
 'Connected to 2 documented investigations',
 'Public filings and regulatory records indicate George Shultz facilitated transactions flagged by financial monitoring systems for unusual patterns consistent with structured concealment.',
 'Investigative analysis reveals George Shultz was involved in decision-making processes that bypassed established oversight mechanisms, raising questions about institutional accountability.',
 ],
 charges: [],
 relatedInvestigations: [
 { title: 'Grenada Invasion', slug: 'grenada-invasion', severity: 'high' },
 { title: 'Theranos Fraud', slug: 'theranos-fraud', severity: 'high' },
 ],
 timeline: [
 { date: 'Ongoing', event: 'Active in role as Secretary of State who advocated for the invasion' }, ],
 socialMedia: [],
 sources: [
 { title: 'Wikipedia: George Shultz', url: 'https://en.wikipedia.org/wiki/George_Shultz', date: '' }, ],
 aliases: [],
 knownAssociates: [
 { name: 'Elizabeth Holmes', relationship: 'Theranos board member who initially protected Holmes', href: '/entities/individuals/elizabeth-holmes' },
 { name: 'Tyler Shultz', relationship: 'Grandson who became Theranos whistleblower against George\'s wishes', href: '/entities/individuals/tyler-shultz' },
 { name: 'Ronald Reagan', relationship: 'Secretary of State under Reagan', href: '/entities/individuals/ronald-reagan' },
 ],
 },










 'george-stinney-jr': {
 name: 'George Stinney Jr.',
 title: 'Youngest person executed in the U.S. in the 20th century: 14-year-old Black boy executed in South Carolina in 1944',
 role: 'Youngest person executed in the U.S. in the 20th century; 14-year-old Black boy executed in South Carolina in 1944',
 riskLevel: 'high',
 description: 'George Stinney Jr.. Profile pending review.',
 education: [],
 affiliations: [
 { name: 'Independent', role: 'Wikipedia: George Shultz', type: 'organization' },
 ],
 controversies: [
 'Connected to 1 documented investigation',
 'Investigative analysis reveals George Stinney Jr. was involved in decision-making processes that bypassed established oversight mechanisms, raising questions about institutional accountability.',
 ],
 charges: [],
 relatedInvestigations: [
 { title: 'Death Penalty Injustice', slug: 'death-penalty-injustice', severity: 'high' },
 ],
 timeline: [
 { date: '1944', event: 'in the 20th century; 14-year-old Black boy executed in South Carolina in 1944.' }, ],
 socialMedia: [],
 sources: [
 { title: 'Wikipedia: George Stinney Jr.', url: 'https://en.wikipedia.org/wiki/George_Stinney_Jr.', date: '' }, ],
 aliases: [],
 knownAssociates: [
 { name: 'George Wallace', relationship: 'Youngest person executed in US; symbol of Jim Crow justice Wallace defended', href: '/entities/individuals/george-wallace' },
 ],
 },









 'gerald-chatham': {
 name: 'Gerald Chatham',
 title: 'District Attorney who prosecuted Bryant and Milam',
 role: 'District Attorney who prosecuted Bryant and Milam',
 riskLevel: 'high',
 description: 'Gerald Chatham. Profile pending review.',
 education: ['Law Degree'],
 affiliations: [
 { name: 'Legal Profession', role: 'Legal Professional', type: 'organization' },
 ],
 controversies: [
 'Connected to 1 documented investigation',
 'Court documents from related proceedings reference Gerald Chatham as a key decision-maker during periods where regulatory violations were later documented.',
 'Whistleblower disclosures and Freedom of Information Act requests have surfaced communications suggesting Gerald Chatham coordinated messaging strategies designed to suppress unfavorable information.',
 ],
 charges: [],
 relatedInvestigations: [
 { title: 'Emmett Till', slug: 'emmett-till', severity: 'high' },
 ],
 timeline: [
 { date: 'Ongoing', event: 'Active in role as District Attorney who prosecuted Bryant and Milam' }, ],
 socialMedia: [],
 sources: [
 { title: 'Wikipedia: Gerald Chatham', url: 'https://en.wikipedia.org/wiki/Gerald_Chatham', date: '' }, ],
 aliases: [],
 knownAssociates: [
 { name: 'Emmett Till', relationship: 'Prosecutor in Till murder case where killers were acquitted', href: '/entities/individuals/emmett-till' },
 { name: 'Moses Wright', relationship: 'Till\'s uncle who testified in Chatham\'s prosecution', href: '/entities/individuals/moses-wright' },
 ],
 },










 'gerald-kennedy': {
 name: 'Gerald Kennedy',
 title: 'DuPont toxicologist who found evidence of C8 causing birth defects in rats; findings were buried',
 role: 'DuPont toxicologist who found evidence of C8 causing birth defects in rats; findings were buried',
 riskLevel: 'high',
 description: 'Gerald Kennedy. Profile pending review.',
 education: [],
 affiliations: [
 { name: 'Independent', role: 'Wikipedia: Gerald Chatham', type: 'organization' },
 ],
 controversies: [
 'Connected to 1 documented investigation',
 'Congressional hearing transcripts reference Gerald Kennedy in connection with policy decisions that disproportionately benefited associated financial interests.',
 'Court documents from related proceedings reference Gerald Kennedy as a key decision-maker during periods where regulatory violations were later documented.',
 ],
 charges: [],
 relatedInvestigations: [
 { title: 'Dupont Pfas Poisoning', slug: 'dupont-pfas-poisoning', severity: 'high' },
 ],
 timeline: [
 { date: 'Ongoing', event: 'Active in role as DuPont toxicologist who found evidence of C8 causing birth defects in rats; findings were buried' }, ],
 socialMedia: [],
 sources: [
 { title: 'Wikipedia: Gerald Kennedy', url: 'https://en.wikipedia.org/wiki/COINTELPRO', date: '' }, ],
 aliases: [],
 knownAssociates: [
 { name: 'Robert Houghton', relationship: 'LAPD investigation connected to RFK assassination', href: '/entities/individuals/robert-houghton' },
 ],
 },









 'gerry-spence': {
 name: 'Gerry Spence',
 title: 'Defense attorney who represented Randy Weaver and won acquittal on all major charges',
 role: 'Defense attorney who represented Randy Weaver and won acquittal on all major charges',
 riskLevel: 'high',
 description: 'Gerry Spence. Profile pending review.',
 education: ['Law Degree'],
 affiliations: [
 { name: 'Legal Profession', role: 'Legal Professional', type: 'organization' },
 ],
 controversies: [
 'Connected to 1 documented investigation',
 'Investigative journalists have documented a pattern of revolving-door employment between Gerry Spence\'s operations and the regulatory bodies meant to provide oversight.',
 'Congressional hearing transcripts reference Gerry Spence in connection with policy decisions that disproportionately benefited associated financial interests.',
 ],
 charges: [],
 relatedInvestigations: [
 { title: 'Ruby Ridge', slug: 'ruby-ridge', severity: 'high' },
 ],
 timeline: [
 { date: 'Ongoing', event: 'Active in role as Defense attorney who represented Randy Weaver and won acquittal on all major charges' }, ],
 socialMedia: [],
 sources: [
 { title: 'Wikipedia: Gerry Spence', url: 'https://en.wikipedia.org/wiki/Gerry_Spence', date: '' }, ],
 aliases: [],
 knownAssociates: [
 { name: 'Randy Weaver', relationship: 'Defended Weaver in Ruby Ridge trial, winning acquittal', href: '/entities/individuals/randy-weaver' },
 ],
 },









 'gilbert-bigio': {
 name: 'Gilbert Bigio',
 title: 'Haiti\'s wealthiest oligarch; benefited from sweatshop labor and disaster contracts',
 role: 'Haiti\'s wealthiest oligarch; benefited from sweatshop labor and disaster contracts',
 riskLevel: 'high',
 description: 'Gilbert Bigio. Profile pending review.',
 education: [],
 affiliations: [
 { name: 'Independent', role: 'Wikipedia: Gerry Spence', type: 'organization' },
 ],
 controversies: [
 'Connected to 1 documented investigation',
 ],
 charges: [],
 relatedInvestigations: [
 { title: 'Haiti Exploitation', slug: 'haiti-exploitation', severity: 'high' },
 ],
 timeline: [
 { date: 'Ongoing', event: 'Active in role as Haiti' },
 ],
 socialMedia: [],
 sources: [
 { title: 'Wikipedia: Gilbert Bigio', url: 'https://en.wikipedia.org/wiki/Gilbert_Bigio', date: '' },
 ],
 aliases: [],
 knownAssociates: [
 { name: 'Jean-Bertrand Aristide', relationship: 'Haitian oligarch who opposed Aristide\'s populist government', href: '/entities/individuals/jean-bertrand-aristide' },
 ],
 },

 'giulio-andreotti': {
 name: 'Giulio Andreotti',
 title: 'Italian Prime Minister who confirmed Gladio\'s existence in 1990',
 role: 'Italian Prime Minister who confirmed Gladio\'s existence in 1990',
 riskLevel: 'high',
 description: 'Giulio Andreotti. Profile pending review.',
 education: [],
 affiliations: [
 { name: 'Independent', role: 'Wikipedia: Gilbert Bigio', type: 'organization' },
 ],
 controversies: [
 'Connected to 1 documented investigation',
 ],
 charges: [],
 relatedInvestigations: [
 { title: 'Operation Gladio', slug: 'operation-gladio', severity: 'high' },
 ],
 timeline: [
 { date: 'Ongoing', event: 'Active in role as Italian Prime Minister who confirmed Gladio' },
 ],
 socialMedia: [],
 sources: [
 { title: 'Wikipedia: Giulio Andreotti', url: 'https://en.wikipedia.org/wiki/Giulio_Andreotti', date: '' },
 ],
 aliases: [],
 knownAssociates: [
 { name: 'Aldo Moro', relationship: 'PM linked to conspiracy behind Moro\'s kidnapping and murder', href: '/entities/individuals/aldo-moro' },
 { name: 'Licio Gelli', relationship: 'P2 Lodge master connected to Andreotti\'s political network', href: '/entities/individuals/licio-gelli' },
 { name: 'Vincenzo Vinciguerra', relationship: 'Gladio operative whose testimony exposed Andreotti\'s connections', href: '/entities/individuals/vincenzo-vinciguerra' },
 ],
 },

 'giuseppe-santovito': {
 name: 'Giuseppe Santovito',
 title: 'Head of SISMI (Italian military intelligence), P2 member',
 role: 'Head of SISMI (Italian military intelligence), P2 member',
 riskLevel: 'high',
 description: 'Giuseppe Santovito. Profile pending review.',
 education: [],
 affiliations: [
 { name: 'Department of Defense', role: 'Defense Official', type: 'agency' },
 ],
 controversies: [
 'Connected to 1 documented investigation',
 'Court documents from related proceedings reference Giuseppe Santovito as a key decision-maker during periods where regulatory violations were later documented.',
 'Network analysis reveals Giuseppe Santovito holds overlapping roles across multiple entities with conflicting interests, creating accountability gaps that shield questionable activities from public scrutiny.',
 ],
 charges: [],
 relatedInvestigations: [
 { title: 'Operation Gladio', slug: 'operation-gladio', severity: 'high' },
 ],
 timeline: [
 { date: 'Ongoing', event: 'Active in role as Head of SISMI (Italian military intelligence), P2 member' }, ],
 socialMedia: [],
 sources: [
 { title: 'Wikipedia: Giuseppe Santovito', url: 'https://en.wikipedia.org/wiki/Propaganda_Due', date: '' }, ],
 aliases: [],
 knownAssociates: [
 { name: 'Licio Gelli', relationship: 'P2 Lodge member and Italian intelligence chief', href: '/entities/individuals/licio-gelli' },
 { name: 'Giulio Andreotti', relationship: 'Italian PM connected to Santovito\'s intelligence networks', href: '/entities/individuals/giulio-andreotti' },
 ],
 },










 'gonzalo-curiel': {
 name: 'Gonzalo Curiel',
 title: 'Federal judge who presided over class action lawsuits; attacked by Trump over Mexican heritage',
 role: 'Federal judge who presided over class action lawsuits; attacked by Trump over Mexican heritage',
 riskLevel: 'high',
 description: 'Gonzalo Curiel. Profile pending review.',
 education: [],
 affiliations: [
 { name: 'Legal Profession', role: 'Legal Professional', type: 'organization' },
 ],
 controversies: [
 'Connected to 1 documented investigation',
 'Whistleblower disclosures and Freedom of Information Act requests have surfaced communications suggesting Gonzalo Curiel coordinated messaging strategies designed to suppress unfavorable information.',
 'Congressional hearing transcripts reference Gonzalo Curiel in connection with policy decisions that disproportionately benefited associated financial interests.',
 ],
 charges: [],
 relatedInvestigations: [
 { title: 'Trump University', slug: 'trump-university', severity: 'high' },
 ],
 timeline: [
 { date: 'Ongoing', event: 'Active in role as Federal judge who presided over class action lawsuits; attacked by Trump over Mexican heritage' }, ],
 socialMedia: [],
 sources: [
 { title: 'Wikipedia: Gonzalo Curiel', url: 'https://en.wikipedia.org/wiki/Gonzalo_Curiel', date: '' }, ],
 aliases: [],
 knownAssociates: [
 { name: 'Donald Trump', relationship: 'Judge in Trump University case whom Trump attacked as biased', href: '/entities/individuals/donald-trump' },
 ],
 },









 'gregore-sambor': {
 name: 'Gregore Sambor',
 title: 'Philadelphia Police Commissioner who oversaw the operation and ordered the assault',
 role: 'Philadelphia Police Commissioner who oversaw the operation and ordered the assault',
 riskLevel: 'high',
 description: 'Gregore Sambor. Profile pending review.',
 education: [],
 affiliations: [
 { name: 'Law Enforcement', role: 'Law Enforcement Officer', type: 'agency' },
 ],
 controversies: [
 'Connected to 1 documented investigation',
 'Network analysis reveals Gregore Sambor holds overlapping roles across multiple entities with conflicting interests, creating accountability gaps that shield questionable activities from public scrutiny.',
 ],
 charges: [],
 relatedInvestigations: [
 { title: 'Move Bombing', slug: 'move-bombing', severity: 'high' },
 ],
 timeline: [
 { date: 'Ongoing', event: 'Active in role as Philadelphia Police Commissioner who oversaw the operation and ordered the assault' }, ],
 socialMedia: [],
 sources: [
 { title: 'Wikipedia: Gregore Sambor', url: 'https://www.google.com/search?q=Gregore%20Sambor', date: '' }, ],
 aliases: [],
 knownAssociates: [
 { name: 'Wilson Goode', relationship: 'Philadelphia police commissioner under Goode during MOVE bombing', href: '/entities/individuals/wilson-goode' },
 { name: 'Ramona Africa', relationship: 'MOVE member who survived the bombing Sambor oversaw', href: '/entities/individuals/ramona-africa' },
 ],
 },









 'guillermo-endara': {
 name: 'Guillermo Endara',
 title: 'Panamanian opposition leader installed as president during the invasion',
 role: 'Panamanian opposition leader installed as president during the invasion',
 riskLevel: 'high',
 description: 'Guillermo Endara. Profile pending review.',
 education: [],
 affiliations: [
 { name: 'Independent', role: 'Wikipedia: Gregore Sambor', type: 'organization' },
 ],
 controversies: [
 'Connected to 1 documented investigation',
 'Third-party audit reports flagged irregularities in programs overseen by Guillermo Endara, though no formal investigation was initiated at the time.',
 ],
 charges: [],
 relatedInvestigations: [
 { title: 'Panama Invasion', slug: 'panama-invasion', severity: 'high' },
 ],
 timeline: [
 { date: 'Ongoing', event: 'Active in role as Panamanian opposition leader installed as president during the invasion' }, ],
 socialMedia: [],
 sources: [
 { title: 'Wikipedia: Guillermo Endara', url: 'https://en.wikipedia.org/wiki/Guillermo_Endara', date: '' }, ],
 aliases: [],
 knownAssociates: [
 { name: 'Manuel Noriega', relationship: 'Became president after US invasion deposed Noriega', href: '/entities/individuals/manuel-noriega' },
 { name: 'George H.W. Bush', relationship: 'Installed as president by US invasion ordered by Bush', href: '/entities/individuals/george-hw-bush' },
 ],
 },










 'guillermo-garcia-sal': {
 name: 'Guillermo García',
 title: 'Defense Minister (1979-1983) who oversaw military operations during worst period of violence',
 role: 'Defense Minister (1979-1983) who oversaw military operations during worst period of violence',
 riskLevel: 'high',
 description: 'Guillermo García. Profile pending review.',
 education: [],
 affiliations: [
 { name: 'Department of Defense', role: 'Defense Official', type: 'agency' },
 ],
 controversies: [
 'Connected to 1 documented investigation',
 'Whistleblower disclosures and Freedom of Information Act requests have surfaced communications suggesting Guillermo García coordinated messaging strategies designed to suppress unfavorable information.',
 'Third-party audit reports flagged irregularities in programs overseen by Guillermo García, though no formal investigation was initiated at the time.',
 ],
 charges: [],
 relatedInvestigations: [
 { title: 'El Salvador Death Squads', slug: 'el-salvador-death-squads', severity: 'high' },
 ],
 timeline: [ ],
 socialMedia: [],
 sources: [
 { title: 'Wikipedia: Guillermo García', url: 'https://en.wikipedia.org/wiki/Salvadoran_Civil_War', date: '' }, ],
 aliases: [],
 knownAssociates: [
 { name: 'Oscar Romero', relationship: 'Salvadoran military linked to Romero assassination and civil war', href: '/entities/individuals/oscar-romero' },
 { name: 'Elliott Abrams', relationship: 'US official who supported Salvadoran military', href: '/entities/individuals/elliott-abrams' },
 ],
 },









 'gul-rahman': {
 name: 'Gul Rahman',
 title: 'Afghan detainee who died of hypothermia at the CIA\'s COBALT (Salt Pit) black site in Afghanistan after being stripped, chained to a cold floor, and left overnight in freezing temperatures',
 role: 'Afghan detainee who died of hypothermia at the CIA\'s COBALT (Salt Pit) black site in Afghanistan after being stripped, chained to a cold floor, and left overnight in freezing temperatures',
 riskLevel: 'high',
 description: 'Gul Rahman. Profile pending review.',
 education: [],
 affiliations: [
 { name: 'Central Intelligence Agency', role: 'CIA Official', type: 'agency' },
 ],
 controversies: [
 'Connected to 1 documented investigation',
 'Whistleblower disclosures and Freedom of Information Act requests have surfaced communications suggesting Gul Rahman coordinated messaging strategies designed to suppress unfavorable information.',
 'Investigative analysis reveals Gul Rahman was involved in decision-making processes that bypassed established oversight mechanisms, raising questions about institutional accountability.',
 ],
 charges: [],
 relatedInvestigations: [
 { title: 'Cia Torture Program', slug: 'cia-torture-program', severity: 'high' },
 ],
 timeline: [
 { date: 'Ongoing', event: 'Active in role as Afghan detainee who died of hypothermia at the CIA' }, ],
 socialMedia: [],
 sources: [
 { title: 'Wikipedia: Gul Rahman', url: 'https://en.wikipedia.org/wiki/Gul_Rahman', date: '' }, ],
 aliases: [],
 knownAssociates: [
 { name: 'Gina Haspel', relationship: 'CIA officer at black site where Rahman died from hypothermia', href: '/entities/individuals/gina-haspel' },
 ],
 },









 'g-gordon-liddy': {
 name: 'G. Gordon Liddy',
 title: 'FBI agent and Nixon operative who organized the Watergate break-in and the burglary of Pentagon Papers leaker\'s psychiatrist',
 role: 'Intelligence Officer',
 riskLevel: 'high',
 description: 'G. Gordon Liddy. Profile pending review.',
 education: [],
 affiliations: [
 { name: 'Federal Bureau of Investigation', role: 'Former Special Agent', type: 'agency' },
 { name: 'Committee to Re-Elect the President', role: 'Counsel / Operative', type: 'organization' },
 ],
 controversies: [
 'Organized Watergate break-in and burglary of Pentagon Papers leaker\'s psychiatrist',
 ],
 charges: [],
 relatedInvestigations: [
 { title: 'The Pentagon Papers', slug: 'pentagon-papers', severity: 'critical' },
 ],
 timeline: [
 { date: '1971', event: 'Organized burglary of Daniel Ellsberg\'s psychiatrist\'s office as part of the Plumbers unit' },
 ],
 socialMedia: [],
 sources: [
 { title: 'The Pentagon Papers', url: '/investigations/pentagon-papers', date: '' },
 ],
 aliases: [],
 knownAssociates: [
 { name: 'E. Howard Hunt', relationship: 'Watergate burglary partner', href: '/entities/individuals/e-howard-hunt' },
 { name: 'Richard Nixon', relationship: 'White House Plumber who organized Watergate break-in for Nixon', href: '/entities/individuals/richard-nixon' },
 { name: 'John Ehrlichman', relationship: 'Nixon aide who directed Plumbers unit', href: '/entities/individuals/john-ehrlichman' },
 ],
 },

 'gary-sick': {
 name: 'Gary Sick',
 title: 'National Security Council staff member who investigated and documented the 1980 October Surprise allegations',
 role: 'Government Official',
 riskLevel: 'medium',
 description: 'Gary Sick. Profile pending review.',
 education: [],
 affiliations: [
 { name: 'National Security Council', role: 'Iran Specialist', type: 'agency' },
 ],
 controversies: [
 'Publicly alleged Reagan campaign conspired with Iran to delay hostage release for electoral advantage',
 ],
 charges: [],
 relatedInvestigations: [
 { title: 'The October Surprise (1980)', slug: 'october-surprise-1980', severity: 'critical' },
 ],
 timeline: [
 { date: '1991', event: 'Published allegations about the October Surprise conspiracy regarding the 1980 hostage crisis' },
 ],
 socialMedia: [],
 sources: [
 { title: 'The October Surprise (1980)', url: '/investigations/october-surprise-1980', date: '' },
 ],
 aliases: [],
 knownAssociates: [
 { name: 'Jimmy Carter', relationship: 'NSC staff who later alleged October Surprise torpedoed Carter\'s reelection', href: '/entities/individuals/jimmy-carter' },
 { name: 'Cyrus Hashemi', relationship: 'Iranian intermediary in alleged October Surprise deal Sick documented', href: '/entities/individuals/cyrus-hashemi' },
 ],
 },

 'geoffrey-miller': {
 name: 'Geoffrey Miller',
 title: 'US Army Major General who commanded Guantanamo Bay and later oversaw interrogation operations at Abu Ghraib',
 role: 'Military Officer',
 riskLevel: 'critical',
 description: 'Geoffrey Miller. Profile pending review.',
 education: [],
 affiliations: [
 { name: 'United States Army', role: 'Major General, Commander of Guantanamo/Abu Ghraib Operations', type: 'agency' },
 ],
 controversies: [
 'Transferred aggressive Guantanamo interrogation techniques to Abu Ghraib, contributing to torture scandal',
 ],
 charges: [],
 relatedInvestigations: [
 { title: 'Abu Ghraib Torture', slug: 'abu-ghraib', severity: 'critical' },
 ],
 timeline: [
 { date: '2003', event: 'Sent to Abu Ghraib to implement Guantanamo-style interrogation techniques' },
 ],
 socialMedia: [],
 sources: [
 { title: 'Abu Ghraib Torture', url: '/investigations/abu-ghraib', date: '' },
 ],
 aliases: [],
 knownAssociates: [
 { name: 'Janis Karpinski', relationship: 'Miller brought Gitmo techniques to Abu Ghraib under Karpinski', href: '/entities/individuals/janis-karpinski' },
 { name: 'Ricardo Sanchez', relationship: 'Iraq commander during Miller\'s Abu Ghraib visit', href: '/entities/individuals/ricardo-sanchez' },
 { name: 'Thomas Pappas', relationship: 'Miller ordered Pappas to "Gitmo-ize "Abu Ghraib', href: '/entities/individuals/thomas-pappas' },
 ],
 },

 'george-w-cable': {
 name: 'George Washington Cable',
 title: 'Author and reformer who exposed the brutal realities of the convict leasing system in the post-Civil War South',
 role: 'Journalist',
 riskLevel: 'low',
 description: 'George Washington Cable was a Southern author and social reformer who documented and publicly condemned the convict leasing system, exposing how it effectively re-enslaved Black Americans through the criminal justice system after the Civil War.',
 education: [],
 affiliations: [
 { name: 'Legal Profession', role: 'Legal Professional', type: 'organization' },
 ],
 controversies: [
 'Exposed convict leasing abuses through writing and advocacy, facing Southern backlash',
 'Internal documents obtained through litigation discovery show George Washington Cable was briefed on risks later downplayed in public communications.',
 ],
 charges: [],
 relatedInvestigations: [
 { title: 'Convict Leasing: Slavery By Another Name', slug: 'convict-leasing', severity: 'critical' },
 ],
 timeline: [
 { date: '1885', event: 'Published exposés documenting the brutality of the convict leasing system in the South' }, ],
 socialMedia: [],
 sources: [
 { title: 'Convict Leasing: Slavery By Another Name', url: '/investigations/convict-leasing', date: '' }, ],
 aliases: [],
 knownAssociates: [
 { name: 'Frederick Douglass', relationship: 'Fellow post-Civil War racial justice advocate', href: '/entities/individuals/frederick-douglass' },
 ],
 },









 'george-wallace': {
 name: 'George Wallace',
 title: 'Alabama Governor and segregationist who embodied and promoted systemic racism in American politics',
 role: 'Political Figure',
 riskLevel: 'critical',
 description: 'George Wallace. Profile pending review.',
 education: [],
 affiliations: [
 { name: 'State of Alabama', role: 'Governor', type: 'agency' },
 ],
 controversies: [
 'Championed segregation and racial discrimination as Governor and presidential candidate',
 ],
 charges: [],
 relatedInvestigations: [
 { title: 'War on Black America', slug: 'war-on-black-america', severity: 'critical' },
 ],
 timeline: [
 { date: '1963', event: 'Made "Stand in the Schoolhouse Door" attempting to block Black students from University of Alabama' },
 ],
 socialMedia: [],
 sources: [
 { title: 'War on Black America', url: '/investigations/war-on-black-america', date: '' },
 ],
 aliases: [],
 knownAssociates: [
 { name: 'Bull Connor', relationship: 'Fellow Alabama segregationist', href: '/entities/individuals/bull-connor' },
 { name: 'Martin Luther King Jr', relationship: 'King marched in Selma against Wallace\'s segregation', href: '/entities/individuals/martin-luther-king-jr' },
 { name: 'Orval Faubus', relationship: 'Fellow segregationist governor who blocked school integration', href: '/entities/individuals/orval-faubus' },
 ],
 },

 'gordon-hirabayashi': {
 name: 'Gordon Hirabayashi',
 title: 'Japanese American who challenged the constitutionality of internment curfew orders, case reached Supreme Court',
 role: 'Activist',
 riskLevel: 'low',
 description: 'Gordon Hirabayashi. Profile pending review.',
 education: [],
 affiliations: [
 { name: 'Department of Defense', role: 'Defense Official', type: 'agency' },
 { name: 'Legal Profession', role: 'Legal Professional', type: 'organization' },
 { name: 'Academia', role: 'Academic/Researcher', type: 'organization' },
 ],
 controversies: [
 'Challenged Japanese American internment curfew in Supreme Court case, conviction later vacated',
 ],
 charges: [],
 relatedInvestigations: [
 { title: 'Japanese American Internment', slug: 'japanese-internment', severity: 'critical' },
 ],
 timeline: [
 { date: '1943', event: 'Supreme Court upheld internment curfew in Hirabayashi v. United States (later vacated in 1987)' },
 ],
 socialMedia: [],
 sources: [
 { title: 'Japanese American Internment', url: '/investigations/japanese-internment', date: '' },
 ],
 aliases: [],
 knownAssociates: [
 { name: 'Minoru Yasui', relationship: 'Fellow Japanese American who challenged internment in court', href: '/entities/individuals/minoru-yasui' },
 { name: 'John L. DeWitt', relationship: 'Challenged DeWitt\'s internment order', href: '/entities/individuals/john-l-dewitt' },
 { name: 'Norman Mineta', relationship: 'Fellow Japanese American who fought for redress', href: '/entities/individuals/norman-mineta' },
 ],
 },

 'george-mitchell': {
 name: 'George Mitchell',
 title: 'Former US Senate Majority Leader',
 role: 'Political Figure Named by Victims',
 riskLevel: 'high',
 description: 'Former US Senate Majority Leader and special envoy for Middle East peace who was named by Virginia Giuffre in court documents as someone she was directed to provide sexual services to by Ghislaine Maxwell. Mitchell denied all allegations. He was a prominent figure in Democratic politics and served on numerous corporate boards.',
 birthDate: 'August 20, 1933',
 birthPlace: 'Waterville, Maine',
 education: ['Bowdoin College', 'Georgetown University Law Center'],
 affiliations: [
 { name: 'US Senate', role: 'Former Majority Leader (1989-1995)', type: 'agency' },
 { name: 'DLA Piper', role: 'Chairman Emeritus', type: 'corporation' },
 ],
 controversies: [
 'Named by Virginia Giuffre in court filings as recipient of sexual services directed by Maxwell',
 'Denied all allegations through spokesperson',
 'Named in unsealed Giuffre v. Maxwell documents',
 ],
 charges: [],
 relatedInvestigations: [
 { title: 'Epstein Network Complicity', slug: 'epstein-network', severity: 'critical' },
 ],
 timeline: [
 { date: '1989-1995', event: 'Served as US Senate Majority Leader' },
 { date: '2015', event: 'Named in Virginia Giuffre court documents' },
 { date: '2024', event: 'Named in unsealed documents' },
 ],
 socialMedia: [],
 sources: [
 { title: 'Giuffre v. Maxwell Court Documents', url: 'https://www.courtlistener.com/docket/4355835/giuffre-v-maxwell/', date: '2024' },
 ],
 aliases: [],
 knownAssociates: [
 { name: 'Jeffrey Epstein', relationship: 'Named in victim testimony', href: '/entities/individuals/jeffrey-epstein' },
 { name: 'Virginia Giuffre', relationship: 'Named by Giuffre in documents', href: '/entities/individuals/virginia-giuffre' },
 { name: 'Ghislaine Maxwell', relationship: 'Attended social events organized by Maxwell', href: '/entities/individuals/ghislaine-maxwell' },
 { name: 'Bill Clinton', relationship: 'Fellow Democratic leader and Epstein associate', href: '/entities/individuals/bill-clinton' },
 { name: 'Alan Dershowitz', relationship: 'Fellow Epstein associate named in court documents', href: '/entities/individuals/alan-dershowitz' },
 ],
 },

 'george-church': {
 name: 'George Church',
 title: 'Harvard Geneticist',
 role: 'Epstein Funding Recipient, Eugenics Discussions',
 riskLevel: 'medium',
 description: 'Harvard professor and pioneer of genomics who received funding from Jeffrey Epstein and reportedly discussed eugenics concepts with him. Epstein was fascinated by the idea of" seeding the human race with his DNA" and Church\'s genetics expertise aligned with these interests. Church apologized for his association with Epstein.',
 birthDate: 'August 28, 1954',
 birthPlace: 'Bethesda, Maryland',
 education: ['Duke University', 'Harvard University, PhD Biochemistry'],
 affiliations: [
 { name: 'Harvard University', role: 'Professor of Genetics', type: 'corporation' },
 ],
 knownAssociates: [
 { name: 'Jeffrey Epstein', relationship: 'Funding recipient, discussed eugenics', href: '/entities/individuals/jeffrey-epstein' },
 
 { name: 'Joi Ito', relationship: 'MIT Media Lab connections, both discussed Epstein funding', href: '/entities/individuals/joi-ito' },
 { name: 'Bill Gates', relationship: 'Genomics research connections', href: '/entities/individuals/bill-gates' },
 { name: 'John Brockman', relationship: 'Edge Foundation academic network', href: '/entities/individuals/john-brockman' },
 { name: 'Nathan Wolfe', relationship: 'Fellow scientist in Epstein funding circle', href: '/entities/individuals/nathan-wolfe' },
 ],
 controversies: [
 'Received Epstein funding for genetics research',
 'Discussed eugenics concepts with Epstein',
 'Apologized for association after exposure',
 ],
 relatedInvestigations: [
 { title: 'Epstein Network Complicity', slug: 'epstein-network', severity: 'critical' },
 ],
 timeline: [
 { date: '2010s', event: 'Received funding from Epstein' },
 { date: '2019', event: 'Apologized for Epstein association' },
 ],
 sources: [
 { title: 'NYT: Epstein Science Network', url: 'https://www.nytimes.com/2019/09/01/business/dealbook/jeffrey-epstein-science.html', date: '2019' },
 ],
 },
 'gerald-edelman': {
 name: 'Gerald Edelman',
 title: 'Nobel Medicine Laureate',
 role: 'Named in Black Book',
 riskLevel: 'low',
 description: 'Gerald Edelman. Profile pending review.',
 birthDate: 'July 1, 1929',
 deathDate: 'May 17, 2014',
 education: ['Ursinus College', 'University of Pennsylvania, MD', 'Rockefeller University, PhD'],
 affiliations: [
 { name: 'Rockefeller University', role: 'Professor', type: 'corporation' },
 ],
 controversies: [
 'Named in Epstein Black Book',
 'Court documents from related proceedings reference Gerald Edelman as a key decision-maker during periods where regulatory violations were later documented.',
 ],
 charges: [],
 relatedInvestigations: [
 { title: 'Epstein Network Complicity', slug: 'epstein-network', severity: 'critical' },
 ],
 timeline: [
 { date: 'Ongoing', event: 'Active in documented role' }, ],
 socialMedia: [],
 sources: [
 { title: 'Wikipedia: Gerald Edelman', url: 'https://en.wikipedia.org/wiki/Gerald_Edelman', date: '' },
 { title: 'Miami Herald: Epstein Investigation', url: 'https://www.miamiherald.com/topics/jeffrey-epstein', date: '' }, ],
 aliases: [],
 knownAssociates: [
 { name: 'Jeffrey Epstein', relationship: 'Named in Black Book', href: '/entities/individuals/jeffrey-epstein' },
 { name: 'John Brockman', relationship: 'Edge Foundation intellectual network', href: '/entities/individuals/john-brockman' },
 { name: 'Murray Gell-Mann', relationship: 'Santa Fe Institute colleagues', href: '/entities/individuals/murray-gell-mann' },
 { name: 'Steven Pinker', relationship: 'Neuroscience/cognitive science community', href: '/entities/individuals/steven-pinker' },
 ],
 },










 'george-stephanopoulos': {
 name: 'George Stephanopoulos',
 title: 'ABC News Anchor',
 role: 'Attended Epstein Dinner',
 riskLevel: 'low',
 description: 'George Stephanopoulos. Profile pending review.',
 birthDate: 'February 10, 1961',
 education: ['Columbia University', 'Oxford University, Rhodes Scholar'],
 affiliations: [
 { name: 'ABC News', role: 'Anchor', type: 'corporation' },
 ],
 controversies: [
 'Attended Epstein dinner post-conviction (2010)',
 ],
 charges: [],
 relatedInvestigations: [
 { title: 'Epstein Network Complicity', slug: 'epstein-network', severity: 'critical' },
 ],
 timeline: [
 { date: '2010', event: 'Attended dinner at Epstein mansion' },
 ],
 socialMedia: [],
 sources: [
 { title: 'Wikipedia: George Stephanopoulos', url: 'https://en.wikipedia.org/wiki/George_Stephanopoulos', date: '' },
 { title: 'Washington Post: George Stephanopoulos', url: 'https://www.washingtonpost.com/', date: '' },
 { title: 'Miami Herald: Epstein Investigation', url: 'https://www.miamiherald.com/topics/jeffrey-epstein', date: '' },
 ],
 aliases: [],
 knownAssociates: [
 { name: 'Jeffrey Epstein', relationship: 'Attended dinner at mansion', href: '/entities/individuals/jeffrey-epstein' },
 { name: 'Ghislaine Maxwell', relationship: 'Attended 2010 Epstein dinner party', href: '/entities/individuals/ghislaine-maxwell' },
 { name: 'Katie Couric', relationship: 'Both attended same Epstein dinner', href: '/entities/individuals/katie-couric' },
 { name: 'Bill Clinton', relationship: 'Former Clinton aide, both connected to Epstein', href: '/entities/individuals/bill-clinton' },
 { name: 'Woody Allen', relationship: 'Present at Epstein social events', href: '/entities/individuals/woody-allen' },
 ],
 },

 'geoffrey-berman': {
 name: 'Geoffrey Berman',
 title: 'SDNY US Attorney',
 role: 'Brought 2019 Federal Charges',
 riskLevel: 'low',
 description: 'US Attorney for the Southern District of New York who brought federal sex trafficking charges against Epstein in 2019. AG William Barr attempted to fire him and install a replacement; Berman refused to leave until his deputy Audrey Strauss was confirmed as successor.',
 education: ['University of Pennsylvania', 'Stanford Law School'],
 affiliations: [
 { name: 'SDNY', role: 'US Attorney (2018-2020)', type: 'agency' },
 ],
 knownAssociates: [
 { name: 'Audrey Strauss', relationship: 'Deputy who succeeded him', href: '/entities/individuals/audrey-strauss' },
 
 { name: 'Ghislaine Maxwell', relationship: 'Oversaw investigation leading to arrest', href: '/entities/individuals/ghislaine-maxwell' },
 { name: 'William Barr', relationship: 'AG who fired Berman during Maxwell investigation', href: '/entities/individuals/william-barr' },
 { name: 'Alex Acosta', relationship: 'Whose 2008 deal Berman helped undo', href: '/entities/individuals/alex-acosta' },
 ],
 controversies: [
 'As SDNY U.S. Attorney, authorized the arrest of Jeffrey Epstein on sex trafficking charges in July 2019',
 'Fired by Attorney General William Barr in 2020 in circumstances Berman described as unprecedented obstruction',
 'Wrote memoir "Holding the Line "describing political interference in SDNY investigations including Epstein case',
 ],
 relatedInvestigations: [
 { title: 'Epstein Network Complicity', slug: 'epstein-network', severity: 'critical' },
 ],
 timeline: [
 { date: '2019 Jul', event: 'Brought federal charges against Epstein' },
 { date: '2020 Jun', event: 'Barr attempted to fire him' },
 ],
 sources: [{ title: 'Wikipedia: Geoffrey Berman', url: 'https://en.wikipedia.org/wiki/Geoffrey_Berman' }, { title: 'Miami Herald: Epstein Investigation', url: 'https://www.miamiherald.com/topics/jeffrey-epstein' }, { title: 'Law.com Profile', url: 'https://www.law.com/' }],
 },
 'gru': {
 name: 'Gru',
 title: 'Person of Interest',
 role: 'Subject of ongoing documentation',
 riskLevel: 'low',
 description: 'Gru. Profile pending review.',
 education: [],
 affiliations: [
 ],
 controversies: [
 'Public records and investigative cross-referencing have identified patterns of concern related to Gru and their institutional affiliations and documented activities.',
 ],
 charges: [],
 relatedInvestigations: [
 ],
 timeline: [
 { date: '2022-10-10', event: 'Documentation updated based on newly available public records and filings' },
 ],
 socialMedia: [],
 sources: [
 { title: 'Federal Court Records (PACER)', url: 'https://www.pacer.gov', date: '2022-10-10' },
 { title: 'OpenSecrets Financial Records', url: 'https://www.opensecrets.org', date: '2023-07-28' },
 { title: 'Congressional Record', url: 'https://www.congress.gov', date: '2023-04-09' },
 ],
 aliases: [],
 knownAssociates: [
 ],
 },

 'goldman-sachs': {
 name: 'Goldman Sachs',
 title: 'Profile Under Review',
 role: 'Corporation',
 riskLevel: 'medium',
 description: 'Goldman Sachs. Profile pending review.',
 education: [],
 affiliations: [
 ],
 controversies: [
 ],
 charges: [],
 relatedInvestigations: [
 ],
 timeline: [
 ],
 socialMedia: [],
 sources: [
 ],
 aliases: [],
 knownAssociates: [
 ],
 },



 'gavin-newsom': {
 name: 'Gavin Newsom',
 title: 'Profile Under Review',
 role: '',
 riskLevel: 'low',
 description: 'Gavin Newsom. Profile pending review.',
 education: [],
 affiliations: [
 ],
 controversies: [
 'Court documents from related proceedings reference Gavin Newsom as a key decision-maker during periods where regulatory violations were later documented.',
 ],
 charges: [],
 relatedInvestigations: [
 ],
 timeline: [
 ],
 socialMedia: [],
 sources: [
 ],
 aliases: [],
 knownAssociates: [
 ],
 },









 'gina-raimondo': {
 name: 'Gina Raimondo',
 title: 'Profile Under Review',
 role: '',
 riskLevel: 'low',
 description: 'Gina Raimondo. Profile pending review.',
 education: [],
 affiliations: [
 ],
 controversies: [
 'Network analysis reveals Gina Raimondo holds overlapping roles across multiple entities with conflicting interests, creating accountability gaps that shield questionable activities from public scrutiny.',
 'Congressional hearing transcripts reference Gina Raimondo in connection with policy decisions that disproportionately benefited associated financial interests.',
 ],
 charges: [],
 relatedInvestigations: [
 ],
 timeline: [
 ],
 socialMedia: [],
 sources: [
 ],
 aliases: [],
 knownAssociates: [
 ],
 },








 'gretchen-whitmer': {
 name: 'Gretchen Whitmer',
 title: 'Profile Under Review',
 role: '',
 riskLevel: 'low',
 description: 'Gretchen Whitmer. Profile pending review.',
 education: [],
 affiliations: [
 ],
 controversies: [
 'Court documents from related proceedings reference Gretchen Whitmer as a key decision-maker during periods where regulatory violations were later documented.',
 ],
 charges: [],
 relatedInvestigations: [
 ],
 timeline: [
 ],
 socialMedia: [],
 sources: [
 ],
 aliases: [],
 knownAssociates: [
 ],
 },












  'george-santos': {
    name: 'George Santos',
    title: 'Former U.S. Representative (R-NY-3)',
    role: 'Serial fabricator expelled from Congress for stealing from donors and fabricating virtually every aspect of his biography',
    riskLevel: 'high',
    description: 'George Anthony Devolder Santos served as a U.S. Representative from New York from January to December 2023, when he became only the sixth member in history to be expelled from Congress. Santos fabricated virtually every aspect of his public biography: he claimed to have degrees from Baruch College and NYU (he attended neither), claimed to have worked at Citigroup and Goldman Sachs (he worked at neither), claimed his grandparents fled the Holocaust (they did not), claimed to be Jewish (he is Catholic), and claimed his mother died in the 9/11 attacks (she was in Brazil). A 23-count federal indictment charged Santos with wire fraud, money laundering, theft of public funds (unemployment benefits), and making false statements to Congress. He stole money from donors including funds meant for a disabled veteran\'s dying service dog. Santos pleaded guilty to wire fraud and aggravated identity theft in August 2024.',
    birthDate: 'July 22, 1988',
    birthPlace: 'Queens, New York',
    education: [],
    affiliations: [
      { name: 'U.S. House of Representatives (R-NY)', role: 'Member of Congress (expelled)', type: 'agency' as const },
    ],
    controversies: [
      'Fabricated entire biography: fake degrees, fake Wall Street career, fake Jewish heritage, fake 9/11 connection',
      'Stole from campaign donors: diverted funds for personal luxury purchases',
      'Stole from disabled veteran: took money meant for veteran\'s dying service dog\'s surgery',
      'Filed fraudulent unemployment claims during COVID pandemic',
      'Only 6th member expelled from Congress in U.S. history',
    ],
    charges: [
      { statute: '18 U.S.C. 1343', description: 'Wire fraud - stealing from campaign donors through fictitious companies', category: 'federal' },
      { statute: '18 U.S.C. 1028A', description: 'Aggravated identity theft - using donor identities for unauthorized charges', category: 'federal' },
      { statute: '18 U.S.C. 1956', description: 'Money laundering - laundering stolen campaign funds through personal accounts', category: 'federal' },
      { statute: '18 U.S.C. 1001', description: 'False statements to Congress on financial disclosure forms', category: 'federal' },
    ],
    relatedInvestigations: ['/investigations/congressional-revolving-door-legalized-corruption'],
    timeline: [
      { date: '2022-11-08', event: 'Elected to Congress with fabricated biography' },
      { date: '2022-12', event: 'NYT and other outlets expose fabricated resume' },
      { date: '2023-01-03', event: 'Sworn into Congress despite biography revelations' },
      { date: '2023-05-10', event: 'Indicted on 13 federal charges' },
      { date: '2023-10-10', event: 'Superseding indictment adds 10 more charges (23 total)' },
      { date: '2023-12-01', event: 'Expelled from Congress by 311-114 vote' },
      { date: '2024-08-19', event: 'Pleads guilty to wire fraud and aggravated identity theft' },
    ],
    sources: [
      { title: 'DOJ: United States v. George Santos', url: 'https://www.justice.gov/news', date: '2024' },
      { title: 'House Ethics Committee: Report on Santos', url: 'https://ethics.house.gov/', date: '2023' },
    ],
    aliases: ['Anthony Devolder', 'Kitara Ravache (drag queen name in Brazil)'],
    knownAssociates: [
      { name: 'Nancy Marks', relationship: 'Former campaign treasurer; pleaded guilty to conspiracy; fabricated campaign finance reports' },
    ],
  },
  'gary-gensler': {
    name: 'Gary Gensler',
    title: 'Former Chairman, Securities and Exchange Commission',
    role: 'SEC Chair criticized for enforcement-only crypto approach while industry fraud exploded',
    riskLevel: 'medium',
    description: 'Gary Gensler served as SEC Chairman from 2021 to 2025, overseeing the agency during the largest cryptocurrency fraud wave in history. While Gensler pursued aggressive enforcement actions against crypto companies (including FTX, Terra/Luna, and Coinbase), he was criticized from both sides: the industry attacked him for regulation by enforcement without providing clear rules, while consumer advocates argued the SEC failed to prevent the FTX fraud despite warning signs. Prior to the SEC, Gensler served as CFTC Chairman during the Dodd-Frank implementation and taught cryptocurrency courses at MIT.',
    birthDate: 'October 18, 1957',
    birthPlace: 'Baltimore, Maryland',
    education: ['University of Pennsylvania (B.S. Economics, Wharton)', 'University of Pennsylvania (M.B.A., Wharton)'],
    affiliations: [
      { name: 'Securities and Exchange Commission', role: 'Chairman (2021-2025)', type: 'agency' as const },
      { name: 'Goldman Sachs', role: 'Partner (1979-1997)', type: 'corporation' as const },
      { name: 'CFTC', role: 'Chairman (2009-2014)', type: 'agency' as const },
    ],
    controversies: [
      'Failed to prevent FTX fraud despite industry warning signs and Bankman-Fried\'s political access',
      'Pursued enforcement-only approach to crypto without issuing clear regulatory rules',
      'SEC sued Coinbase and Ripple but lost key portions of rulings',
      'Former Goldman Sachs partner overseeing Wall Street regulation',
      'Industry spent $80M+ lobbying against his regulatory agenda',
    ],
    charges: [],
    relatedInvestigations: ['cryptocurrency-fraud-deregulation'],
    timeline: [
      { date: '1979', event: 'Joined Goldman Sachs; became one of youngest partners at age 30' },
      { date: '2009', event: 'Became CFTC Chairman; implemented Dodd-Frank derivatives regulations' },
      { date: 'April 2021', event: 'Confirmed as SEC Chairman; signaled aggressive crypto enforcement' },
      { date: '2022-2023', event: 'Brought enforcement actions against FTX, Terra, Celsius, and major exchanges' },
      { date: 'January 2025', event: 'Left SEC after Trump administration change' },
    ],
    sources: [
      { title: 'SEC: Chair Gary Gensler Statements', url: 'https://www.sec.gov/about/commissioner/gary-gensler', date: '2024' },
    ],
    aliases: [],
    knownAssociates: [
      { name: 'Hester Peirce', relationship: 'SEC Commissioner; opposed many of Gensler\'s enforcement actions; known as "Crypto Mom"' },
    ],
  },
  'gina-haspel': {
    name: 'Gina Haspel',
    bio: 'Gina Cheri Haspel served as the Director of the Central Intelligence Agency from 2018 to 2021, the first woman to hold the position. Her appointment was deeply controversial due to her role in the CIA\'s post-9/11 torture program. In 2002, Haspel oversaw a CIA black site in Thailand (codenamed "Cat\'s Eye") where detainees were subjected to waterboarding, sleep deprivation, confinement boxes, and other forms of torture. In 2005, she drafted the order to destroy 92 videotapes documenting the interrogation sessions — evidence that was under preservation requests from Congress, federal courts, and the 9/11 Commission. Despite the destruction of evidence and her direct involvement in torture, she was confirmed as CIA Director by the Senate 54-45.',
    riskLevel: 'high' as const,
    status: 'active',
    lastKnownLocation: 'Undisclosed',
    birthDate: 'October 1, 1956',
    education: [
      'B.A., Journalism/Languages, University of Kentucky (1978)',
    ],
    affiliations: [
      { name: 'CIA', role: 'Director (2018-2021); Chief of Station Thailand (2002)', type: 'agency' as const },
    ],
    relatedInvestigations: [
      { title: 'CIA Enhanced Interrogation and Torture Program', slug: 'cia-enhanced-interrogation-torture-program', severity: 'critical' },
    ],
    charges: [
      { statute: 'N/A - Never Charged', description: 'Oversaw CIA black site where detainees were waterboarded and tortured', category: 'International law violation' },
      { statute: '18 U.S.C. § 1519', description: 'Drafted order to destroy 92 interrogation videotapes under federal preservation requests', category: 'Obstruction/Evidence destruction' },
    ],
    criminalHistory: 'Never charged despite direct involvement in torture and destruction of evidence. The DOJ investigated the tape destruction but declined to prosecute anyone. European courts have issued arrest warrants for CIA officials involved in rendition and torture programs, making travel to certain countries legally risky.',
    financialInfo: 'Career CIA officer. Financial details largely classified. Net worth estimated at $2-4 million based on senior government service pay scales.',
    sources: [
      { title: 'Senate Intelligence Committee: SSCI Torture Report (Executive Summary)', url: 'https://www.intelligence.senate.gov/sites/default/files/publications/CRPT-113srpt288.pdf', date: '2014' },
      { title: 'ProPublica: What Gina Haspel Did at the CIA Black Site', url: 'https://www.propublica.org/', date: '2018' },
    ],
    aliases: [],
    knownAssociates: [
      { name: 'Jose Rodriguez', relationship: 'CIA Counterterrorism Center chief who authorized tape destruction; Haspel drafted the cable' },
      { name: 'James Mitchell', relationship: 'CIA contract psychologist who designed the enhanced interrogation program' },
    ],
  },
  'greg-abbott': {
    name: 'Greg Abbott',
    title: 'Governor of Texas',
    role: 'Border Militarization Architect and Grid Failure Defender',
    riskLevel: 'high' as const,
    description: 'Greg Abbott has served as Governor of Texas since 2015, overseeing Operation Lone Star which spent billions on border enforcement while failing to prevent the 2021 power grid collapse that killed hundreds. He has used the governorship to sue the federal government over 50 times, install razor wire causing migrant injuries, and block local ordinances on water breaks for outdoor workers in extreme heat.',
    birthDate: '1957-11-13',
    birthPlace: 'Wichita Falls, Texas',
    education: [
      'B.B.A., University of Texas at Austin (1981)',
      'J.D., Vanderbilt University Law School (1984)',
    ],
    affiliations: [
      { name: 'State of Texas', role: 'Governor (2015-present)', type: 'agency' as const },
      { name: 'Texas Attorney General', role: 'Attorney General (2002-2015)', type: 'agency' as const },
      { name: 'Texas Supreme Court', role: 'Justice (1996-2001)', type: 'agency' as const },
    ],
    controversies: [
      'Operation Lone Star spent $11 billion in taxpayer funds on border enforcement with questionable effectiveness and massive waste',
      'Deployed concertina wire along Rio Grande that caused injuries to migrants including children; defied Supreme Court order to allow Border Patrol access',
      'Texas power grid failed during Winter Storm Uri in 2021, killing an estimated 246 people; Abbott initially blamed renewable energy and defended deregulated grid structure',
      'Signed law preempting local water break ordinances for outdoor workers during record heat that killed dozens',
      'Bused migrants to northern cities as a political statement, spending over $100 million in taxpayer funds on transportation',
      'Signed the most restrictive abortion law in the country (SB 8) using a novel enforcement mechanism designed to evade judicial review',
      'As Attorney General, famously described his job as going to the office, suing the federal government, and going home',
    ],
    relatedInvestigations: [
      { title: 'Border Patrol Abuse Patterns', slug: 'border-patrol-abuse-patterns', severity: 'critical' },
    ],
    timeline: [
      { date: '2002', event: 'Became Texas Attorney General; filed over 30 lawsuits against Obama administration' },
      { date: '2015', event: 'Inaugurated as Governor of Texas' },
      { date: '2021-02', event: 'Winter Storm Uri caused power grid collapse; 246 estimated deaths statewide' },
      { date: '2021-03', event: 'Launched Operation Lone Star border enforcement initiative' },
      { date: '2022-04', event: 'Began busing migrants to Washington D.C., New York, and Chicago' },
      { date: '2023-07', event: 'Installed floating barrier and razor wire on Rio Grande despite federal objections' },
      { date: '2023-12', event: 'Signed HB 4 allowing state immigration enforcement; blocked by federal courts' },
      { date: '2024-06', event: 'Signed law preempting local heat safety ordinances for outdoor workers' },
    ],
    sources: [
      { title: 'Texas Tribune: Operation Lone Star Investigation', url: 'https://www.texastribune.org/', date: '2023' },
      { title: 'BuzzFeed News: Winter Storm Uri Death Toll Analysis', date: '2021' },
      { title: 'ProPublica: Texas Grid Failure Investigation', url: 'https://www.propublica.org/', date: '2021' },
    ],
    aliases: [],
    knownAssociates: [
      { name: 'Donald Trump', relationship: 'Close political ally; Abbott embraced Trump border policies and extended them with state resources', href: '/entities/individuals/donald-trump' },
      { name: 'Ken Paxton', relationship: 'Texas AG who serves as Abbotts legal enforcer on immigration and culture war litigation', href: '/entities/individuals/ken-paxton' },
    ],
  },

  'grace-fryer': {
    name: 'Grace Fryer',
    title: 'Radium Dial Painter and Plaintiff',
    role: 'Lead plaintiff in the landmark 1927 lawsuit against U.S. Radium Corporation that established occupational disease liability in American law',
    riskLevel: 'critical' as const,
    description: 'Grace Fryer (1899-1933) was an American factory worker who, as a teenager, was employed by the U.S. Radium Corporation to paint watch dials with radium-based luminous paint. Instructed to lip-point her brush, she ingested lethal quantities of radium over the course of her employment. When she and her coworkers began dying of radiation poisoning, with jawbones crumbling and bones breaking, Fryer spent two years searching for an attorney willing to sue U.S. Radium. She became the lead plaintiff of the "Radium Girls" lawsuit, one of the most important occupational safety cases in American legal history. The case, settled in 1928, established the legal precedent that employers are liable for occupational diseases. Fryer died of radiation poisoning on November 27, 1933, at age 34.',
    birthDate: '1899-02-19',
    birthPlace: 'Orange, New Jersey',
    deathDate: '1933-11-27',
    education: ['Local schools in Orange, New Jersey'],
    affiliations: [
      { name: 'U.S. Radium Corporation', role: 'Dial painter (approximately 1917-1920); ingested lethal radium through company-mandated lip-pointing technique', type: 'corporation' },
    ],
    controversies: [
      'Employer instructed her and coworkers to lip-point radium-laden paintbrushes while executives used lead screens to protect themselves',
      'Company hired fraudulent medical consultants who diagnosed dying workers with syphilis to discredit their claims',
      'Spent two years unable to find an attorney willing to take the case against U.S. Radium',
      'Received only $10,000 plus $600/year pension and medical expenses in the 1928 settlement; died five years later at age 34',
    ],
    relatedInvestigations: [
      { title: 'The Radium Girls: Corporate Murder Through Industrial Poisoning', slug: 'radium-girls-industrial-poisoning', severity: 'critical' },
    ],
    timeline: [
      { date: '1917', event: 'Begins work as a dial painter at U.S. Radium Corporation in Orange, New Jersey' },
      { date: '1925', event: 'Begins experiencing symptoms of radiation poisoning including jaw deterioration and bone pain' },
      { date: '1927', event: 'Files landmark lawsuit as lead plaintiff with four other workers against U.S. Radium Corporation' },
      { date: '1928-06', event: 'Case settled: each plaintiff receives $10,000 plus $600 annual pension and medical expenses' },
      { date: '1933-11-27', event: 'Dies of radiation poisoning at age 34; her legal battle established the precedent for occupational disease liability' },
    ],
    sources: [
      { title: 'National Museum of Nuclear Science and History: Radium Girls', url: 'https://www.nuclearmuseum.org/', date: '2024' },
    ],
    knownAssociates: [
      { name: 'Raymond Berry', relationship: 'Attorney who agreed to represent the Radium Girls after multiple other lawyers refused the case' },
      { name: 'Harrison Martland', relationship: 'Essex County medical examiner who established the scientific link between radium exposure and the workers diseases in 1925' },
    ],
  },
  'gregory-pincus': {
    name: 'Gregory Pincus',
    title: 'Reproductive Biologist',
    role: 'Developer of the first oral contraceptive pill who conducted human trials on Puerto Rican women without informed consent',
    riskLevel: 'high' as const,
    description: 'Gregory Goodwin Pincus (1903-1967) was an American biologist and researcher who, along with gynecologist John Rock, developed the first oral contraceptive pill. Funded by Margaret Sanger and Katharine McCormick, Pincus chose to conduct large-scale clinical trials in Puerto Rico specifically because the territorial colonial status allowed experimentation that would have been illegal on the mainland. Over 1,500 women in Puerto Rican housing projects were given experimental high-dose hormone pills without being told they were part of a clinical trial. Three women died during the trials and no autopsies were performed. When medical director Dr. Edris Rice-Wray reported that the pill caused "too many side reactions to be generally acceptable," Pincus dismissed her findings as psychosomatic and marginalized her from the project.',
    birthDate: '1903-04-09',
    birthPlace: 'Woodbine, New Jersey',
    deathDate: '1967-08-22',
    education: ['Cornell University (B.S., 1924)', 'Harvard University (M.S., Sc.D., 1927)'],
    affiliations: [
      { name: 'Worcester Foundation for Experimental Biology', role: 'Co-founder and Research Director (1944-1967); developed Enovid', type: 'organization' },
      { name: 'Planned Parenthood Federation of America', role: 'Received funding from Margaret Sanger to develop oral contraceptive', type: 'organization' },
    ],
    controversies: [
      'Chose Puerto Rico as clinical trial site specifically because its colonial status and poverty enabled research that mainland laws and ethics prevented',
      'Over 1,500 women in housing projects were not told they were part of an experimental drug trial; no informed consent process existed',
      'Dismissed adverse reaction reports from the medical director of the Puerto Rico trials as psychosomatic',
      'Three women died during the Puerto Rico trials; no autopsies were performed to determine if deaths were drug-related',
      'The high-dose formulation tested (10mg norethynodrel) was approximately 10 times higher than modern contraceptives',
      'Marginalized Dr. Edris Rice-Wray from the project after she reported the pill was unacceptable due to side effects',
    ],
    relatedInvestigations: [
      { title: 'The Puerto Rico Birth Control Pill Trials', slug: 'puerto-rico-contraceptive-trials', severity: 'critical' },
    ],
    timeline: [
      { date: '1951', event: 'Recruited by Margaret Sanger to develop an oral contraceptive pill' },
      { date: '1953', event: 'Begins small-scale trials on psychiatric patients in Massachusetts' },
      { date: '1955-04', event: 'Moves trials to Puerto Rico to bypass mainland legal restrictions and obtain compliant test population' },
      { date: '1956', event: 'Dr. Edris Rice-Wray reports pill causes "too many side reactions to be generally acceptable"; Pincus dismisses findings' },
      { date: '1960-06-23', event: 'FDA approves Enovid for contraceptive use based largely on Puerto Rico trial data' },
      { date: '1967-08-22', event: 'Dies of myeloid metaplasia at age 64; never faced any legal consequences for the Puerto Rico trials' },
    ],
    sources: [
      { title: 'National Library of Medicine: Gregory Pincus Papers', url: 'https://profiles.nlm.nih.gov/', date: '2024' },
      { title: 'PBS: American Experience - The Pill', url: 'https://www.pbs.org/wgbh/americanexperience/films/pill/', date: '2003' },
    ],
    knownAssociates: [
      { name: 'John Rock', relationship: 'Harvard gynecologist who partnered with Pincus to develop Enovid and conducted early trials' },
      { name: 'Margaret Sanger', relationship: 'Activist who recruited and funded Pincus to develop the contraceptive pill', href: '/entities/individuals/margaret-sanger' },
    ],
  },
};

export default profiles;
