'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import {
  ArrowLeft,
  AlertTriangle,
  Users,
  Calendar,
  FileText,
  ExternalLink,
  MapPin,
  Plane,
  Scale, ShieldAlert, DollarSign, Eye, Building, Globe, BookOpen} from 'lucide-react';
import GlitchText from '@/components/effects/GlitchText';

const investigation = {
  title: 'Epstein Network Complicity',
  subtitle: 'Elite Sex Trafficking Ring and Its Powerful Enablers',
  severity: 'critical',
  status: 'Ongoing - Documents Still Being Unsealed',
  summary: 'Jeffrey Epstein operated one of the most sophisticated sex trafficking networks in modern history, targeting minors for decades while protected by a web of powerful associates spanning politics, finance, royalty, academia, entertainment, and intelligence agencies. Despite his 2008 conviction, a sweetheart plea deal engineered by future Trump Labor Secretary Alexander Acosta protected co-conspirators. Epstein\'s 2019 death in federal custody under impossible circumstances left the full scope of his network unexposed. Court documents continue to be unsealed, revealing an ever-expanding web of complicity that implicates some of the most powerful people and institutions in the world.',

  // ============================
  // KEY FIGURES & ASSOCIATES
  // ============================
  keyFigures: [
    // Core Network
    { name: 'Jeffrey Epstein', role: 'Network Operator, Convicted Sex Offender, Alleged Intelligence Asset', href: '/entities/individuals/jeffrey-epstein', status: 'Deceased (2019)' },
    { name: 'Ghislaine Maxwell', role: 'Co-Conspirator, Chief Recruiter, Convicted Sex Trafficker', href: '/entities/individuals/ghislaine-maxwell', status: 'Serving 20 Years' },
    // Political Figures
    { name: 'Donald Trump', role: 'Social Associate, Mar-a-Lago Host, Flight Logs, 26+ Sexual Misconduct Accusers', href: '/entities/individuals/donald-trump', status: 'Subject of Investigation' },
    { name: 'Bill Clinton', role: 'Flight Logs: 26+ Flights on Lolita Express, Visited Island Per Witness Testimony', href: '/entities/individuals/bill-clinton', status: 'Named in Documents' },
    { name: 'Prince Andrew', role: 'Photographed with Victim Virginia Giuffre, Settled Lawsuit for $12M', href: '/entities/individuals/prince-andrew', status: 'Civil Settlement' },
    { name: 'Ehud Barak', role: 'Former Israeli Prime Minister, Visited Epstein NYC Apartment Multiple Times', href: '/entities/individuals/ehud-barak', status: 'Named in Documents' },
    { name: 'George Mitchell', role: 'Former US Senate Majority Leader, Named by Virginia Giuffre', href: '/entities/individuals/george-mitchell', status: 'Named in Documents' },
    { name: 'Bill Richardson', role: 'Former NM Governor, Named by Virginia Giuffre, Denied Allegations', href: '/entities/individuals/bill-richardson', status: 'Deceased (2023)' },
    // Legal / Law Enforcement
    { name: 'Alexander Acosta', role: 'US Attorney Who Gave Sweetheart Plea Deal, Later Trump Labor Secretary', href: '/entities/individuals/alex-acosta', status: 'Resigned as Labor Sec.' },
    { name: 'Alan Dershowitz', role: 'Defense Attorney for Epstein, Accused by Virginia Giuffre', href: '/entities/individuals/alan-dershowitz', status: 'Named in Documents' },
    { name: 'William Barr', role: 'AG During Epstein\'s Death in Custody, Father Hired Epstein at Dalton', href: '/entities/individuals/william-barr', status: 'AG During Death' },
    { name: 'Donald Barr', role: 'Dalton School Headmaster, Hired 20-Year-Old Epstein as Teacher', href: '/entities/individuals/donald-barr', status: 'Deceased (2004)' },
    { name: 'Robert Mueller', role: 'FBI Director During Original Investigation (2001-2013)', href: '/entities/individuals/robert-mueller', status: 'FBI Oversight' },
    { name: 'James Comey', role: 'FBI Director, Daughter Maurene Comey Prosecuted Maxwell Case', href: '/entities/individuals/james-comey', status: 'FBI Oversight' },
    { name: 'Kenneth Starr', role: 'Former Special Counsel, Joined Epstein Defense Team', href: '/entities/individuals/kenneth-starr', status: 'Deceased (2022)' },
    { name: 'Jay Lefkowitz', role: 'Attorney Who Negotiated NPA Terms with Acosta', href: '/entities/individuals/jay-lefkowitz', status: 'Defense Attorney' },
    // Finance / Business
    { name: 'Les Wexner', role: 'Primary Financial Backer, Gifted $77M Mansion, Power of Attorney', href: '/entities/individuals/les-wexner', status: 'Under Investigation' },
    { name: 'Leon Black', role: 'Apollo Global CEO, Paid Epstein $158M After Conviction', href: '/entities/individuals/leon-black', status: 'Stepped Down as CEO' },
    { name: 'Bill Gates', role: 'Multiple Documented Meetings After 2008 Conviction, Flew on Epstein Jet', href: '/entities/individuals/bill-gates', status: 'Named in Documents' },
    { name: 'Jes Staley', role: 'JPMorgan Executive Then Barclays CEO, 1,200+ Emails With Epstein', href: '/entities/individuals/jes-staley', status: 'Fired from Barclays' },
    { name: 'Glenn Dubin', role: 'Billionaire Hedge Fund Manager, Inner Circle, Wife Eva Named as Facilitator', href: '/entities/individuals/glenn-dubin', status: 'Named in Documents' },
    { name: 'Eva Dubin', role: 'Glenn Dubin\'s Wife, Former Epstein Girlfriend, Named as Facilitator by Victims', href: '/entities/individuals/eva-dubin', status: 'Named in Documents' },
    { name: 'Reid Hoffman', role: 'LinkedIn Founder, Admitted Post-Conviction Meetings, Apologized', href: '/entities/individuals/reid-hoffman', status: 'Named in Documents' },
    { name: 'Mort Zuckerman', role: 'US News & World Report Owner, Epstein Financial Associate', href: '/entities/individuals/mort-zuckerman', status: 'Named in Documents' },
    { name: 'Thomas Pritzker', role: 'Hyatt Hotels Heir, Named in Unsealed Documents', href: '/entities/individuals/thomas-pritzker', status: 'Named in Documents' },
    { name: 'Michael Steinhardt', role: 'Hedge Fund Pioneer, Named in Unsealed Documents', href: '/entities/individuals/michael-steinhardt', status: 'Named in Documents' },
    { name: 'Steve Bannon', role: 'Trump Strategist, Met With Epstein Before Arrest', href: '/entities/individuals/steve-bannon', status: 'Named in Reports' },
    // Epstein Inner Circle / Staff
    { name: 'Jean-Luc Brunel', role: 'Model Scout, MC2 Agency Owner, Procurer for Network', href: '/entities/individuals/jean-luc-brunel', status: 'Deceased (2022)' },
    { name: 'Sarah Kellen', role: 'Personal Assistant, Scheduled Victims, Core Logistics', href: '/entities/individuals/sarah-kellen', status: 'Granted Immunity' },
    { name: 'Nadia Marcinkova', role: 'Victim-Turned-Participant, Epstein\'s "Sex Slave" Per Documents', href: '/entities/individuals/nadia-marcinkova', status: 'Granted Immunity' },
    { name: 'Adriana Ross', role: 'Recruited by Maxwell, Witness Who Invoked 5th Amendment 100+ Times', href: '/entities/individuals/adriana-ross', status: 'Granted Immunity' },
    { name: 'Lesley Groff', role: 'Executive Assistant, Managed Logistics for Trafficking Operation', href: '/entities/individuals/lesley-groff', status: 'Granted Immunity' },
    { name: 'Haley Robson', role: 'Victim-Turned-Recruiter, Paid $200 Per Girl Brought to Epstein', href: '/entities/individuals/haley-robson', status: 'Cooperating Witness' },
    { name: 'Emmy Tayler', role: 'Maxwell\'s Personal Assistant, Facilitated Abuse', href: '/entities/individuals/emmy-tayler', status: 'Named in Documents' },
    { name: 'Miles Alexander', role: 'Butler at Little St. James, Potential Witness', href: '/entities/individuals/miles-alexander', status: 'Named in Documents' },
    { name: 'Cathy Alexander', role: 'Chef at Little St. James, Potential Witness', href: '/entities/individuals/cathy-alexander', status: 'Named in Documents' },
    // Maxwell Family
    { name: 'Robert Maxwell', role: 'Ghislaine\'s Father, Media Baron, Suspected Mossad/MI6 Asset', href: '/entities/individuals/robert-maxwell', status: 'Deceased (1991)' },
    { name: 'Christine Maxwell', role: 'Ghislaine\'s Sister, Co-Founded Chiliad (Data Mining for FBI/CIA)', href: '/entities/individuals/christine-maxwell', status: 'Intelligence Ties' },
    { name: 'Isabel Maxwell', role: 'Ghislaine\'s Sister, Israeli Tech Connections', href: '/entities/individuals/isabel-maxwell', status: 'Tech/Intel Ties' },
    { name: 'Kevin Maxwell', role: 'Ghislaine\'s Brother, Convicted of Fraud in Maxwell Pension Case', href: '/entities/individuals/kevin-maxwell', status: 'Named in Documents' },
    // Academic / Science
    { name: 'Marvin Minsky', role: 'MIT AI Pioneer, Accused by Virginia Giuffre of Sexual Contact on Island', href: '/entities/individuals/marvin-minsky', status: 'Deceased (2016)' },
    { name: 'Lawrence Krauss', role: 'Theoretical Physicist, Defended Epstein, Received Epstein Funding', href: '/entities/individuals/lawrence-krauss', status: 'Forced to Resign ASU' },
    { name: 'Joi Ito', role: 'MIT Media Lab Director, Accepted Hidden Epstein Funding Post-Conviction', href: '/entities/individuals/joi-ito', status: 'Resigned from MIT' },
    { name: 'Stephen Hawking', role: 'Physicist, Named in Unsealed Documents as Island Visitor', href: '/entities/individuals/stephen-hawking', status: 'Deceased (2018)' },
    { name: 'Larry Summers', role: 'Former US Treasury Secretary, Harvard President, Epstein Associate', href: '/entities/individuals/larry-summers', status: 'Named in Documents' },
    { name: 'George Church', role: 'Harvard Geneticist, Received Epstein Funding, Discussed Eugenics', href: '/entities/individuals/george-church', status: 'Named in Documents' },
    { name: 'Martin Nowak', role: 'Harvard Professor, Ran Epstein-Funded Program for Evolutionary Dynamics', href: '/entities/individuals/martin-nowak', status: 'Under Investigation' },
    // Entertainment / Media
    { name: 'Kevin Spacey', role: 'Actor, Flight Logs Show Trips on Lolita Express with Clinton', href: '/entities/individuals/kevin-spacey', status: 'Named in Flight Logs' },
    { name: 'Chris Tucker', role: 'Actor, Flight Logs Show Trip to Africa with Clinton on Lolita Express', href: '/entities/individuals/chris-tucker', status: 'Named in Flight Logs' },
    { name: 'Naomi Campbell', role: 'Supermodel, Flight Logs, Close Friend of Maxwell', href: '/entities/individuals/naomi-campbell', status: 'Named in Flight Logs' },
    { name: 'Woody Allen', role: 'Director, Social Relationship, Dined with Epstein Post-Conviction', href: '/entities/individuals/woody-allen', status: 'Named in Documents' },
    // Victims / Accusers
    { name: 'Virginia Giuffre', role: 'Primary Victim and Accuser, Filed Landmark Lawsuits, Recruited at Mar-a-Lago at Age 16', href: '/entities/individuals/virginia-giuffre', status: 'Key Witness' },
    { name: 'Maria Farmer', role: 'Early Victim/Whistleblower (1996), Reported to FBI - Ignored for Years', href: '/entities/individuals/maria-farmer', status: 'Key Witness' },
    { name: 'Annie Farmer', role: 'Maria\'s Sister, Abused as Minor, Testified at Maxwell Trial', href: '/entities/individuals/annie-farmer', status: 'Key Witness' },
    { name: 'Courtney Wild', role: 'Victim Advocate, Led Legal Challenge Against NPA', href: '/entities/individuals/courtney-wild', status: 'Key Witness' },
    { name: 'Carolyn Andriano', role: 'Testified at Maxwell Trial, Recruited at Age 14', href: '/entities/individuals/carolyn-andriano', status: 'Deceased (2021)' },
  ],

  // ============================
  // INTELLIGENCE CONNECTIONS
  // ============================
  intelligenceConnections: [
    { entity: 'Mossad (Israeli Intelligence)', role: 'Alleged Blackmail Operation', details: 'Robert Maxwell was widely reported as a Mossad agent by multiple intelligence sources. Former Israeli intelligence officer Ari Ben-Menashe claimed Epstein and Maxwell were both Israeli intelligence assets running a sexual blackmail operation against Western politicians and businessmen. Ehud Barak, former Israeli PM, had extensive documented contact with Epstein.', href: '/entities/agencies/mossad' },
    { entity: 'CIA (Central Intelligence Agency)', role: 'Alleged Protection and Utilization', details: 'Alexander Acosta reportedly told Trump transition team the Epstein case was "above his pay grade" and that Epstein "belonged to intelligence." Former CIA officer John Kiriakou confirmed intelligence community awareness of Epstein\'s activities. The CIA has refused to release documents related to Epstein citing national security.', href: '/entities/agencies/cia' },
    { entity: 'MI6 (British Intelligence)', role: 'Robert Maxwell Connection', details: 'Robert Maxwell was suspected of being an MI6 asset in addition to Mossad. His sudden death and the subsequent cover-up of his intelligence ties suggest deep connections. Ghislaine Maxwell\'s access to British establishment figures including Prince Andrew raises questions about continued MI6 involvement.', href: '/entities/agencies/mi6' },
    { entity: 'FBI (Federal Bureau of Investigation)', role: 'Failed Investigation and Oversight', details: 'The FBI documented extensive abuse evidence by 2006 but a 53-page indictment was never filed. Maria Farmer reported abuse and Epstein/Maxwell to the FBI in 1996 but was ignored. Robert Mueller was FBI Director during the original investigation. James Comey\'s daughter later prosecuted Maxwell. Christine Maxwell co-founded Chiliad, which provided data analytics to the FBI.', href: '/entities/agencies/fbi' },
    { entity: 'Southern District of New York', role: 'Eventual Prosecution', details: 'SDNY finally brought federal charges in 2019 under the leadership of then-US Attorney Geoffrey Berman. AG William Barr attempted to fire Berman and install a replacement. Epstein died in SDNY custody at MCC New York under AG Barr\'s Department of Justice.', href: '/entities/agencies/doj' },
  ],

  // ============================
  // INSTITUTIONAL CONNECTIONS
  // ============================
  institutionalConnections: [
    { entity: 'Dalton School', role: 'Epstein\'s Entry Point (1973-1975)', details: 'Epstein was hired as a math and physics teacher at the elite Manhattan prep school at age 20 despite lacking a college degree. He was hired by headmaster Donald Barr, whose son William Barr later became the Attorney General overseeing federal prisons when Epstein died. Donald Barr wrote a science fiction novel about aliens running a sex slavery operation.', href: '/entities/corporations/dalton-school' },
    { entity: 'Harvard University', role: 'Major Donor, Office Space, Academic Cover', details: 'Epstein donated $9M+ to Harvard over the years. He maintained an office in Harvard\'s Department of Evolutionary Biology even after his 2008 conviction. Martin Nowak ran an Epstein-funded program. Larry Summers met with Epstein multiple times. Professor Alan Dershowitz represented Epstein legally. Harvard accepted money after his sex offender registration.', href: '/entities/corporations/harvard-university' },
    { entity: 'MIT Media Lab', role: 'Hidden Post-Conviction Funding', details: 'Director Joi Ito accepted Epstein funding after his 2008 conviction and actively concealed it, referring to Epstein as "he who shall not be named" in internal emails. The lab also solicited donations from Epstein on behalf of MIT. Marvin Minsky, MIT AI pioneer, was named in victim depositions. Ito resigned in September 2019 after exposure.', href: '/entities/corporations/mit' },
    { entity: 'Ohio State / Wexner Foundation', role: 'Wexner\'s Academic Power Base', details: 'Les Wexner was the largest individual donor to Ohio State University. The Wexner Foundation and Wexner Center for the Arts gave Wexner enormous institutional influence. Questions remain about whether Epstein accessed victims through Wexner\'s institutional connections.', href: '/entities/corporations/ohio-state' },
    { entity: 'Victoria\'s Secret / L Brands', role: 'Trafficking Cover and Recruiting Pipeline', details: 'Epstein posed as a Victoria\'s Secret talent scout to approach and recruit victims. Multiple victims testified they were lured with promises of modeling careers. Wexner gave Epstein sweeping power over his fashion empire. MC2 Model Management, run by Jean-Luc Brunel, served as a parallel recruiting pipeline.', href: '/entities/corporations/l-brands' },
    { entity: 'MC2 Model Management', role: 'Trafficking Front Operation', details: 'Jean-Luc Brunel\'s modeling agency was funded by Epstein and served as a trafficking pipeline. Brought young models (some underage) from South America, Eastern Europe, and France to the US on work visas arranged by Epstein\'s attorneys. Multiple victims were recruited through MC2.', href: '/entities/corporations/mc2' },
    { entity: 'TerraMar Project', role: 'Maxwell\'s Non-Profit Front', details: 'Ghislaine Maxwell\'s ocean conservation charity, closed days after Epstein\'s 2019 arrest. Used to provide Maxwell with nonprofit credibility, travel justification, and access to influential circles including the UN. Financial irregularities in its operations.', href: '/entities/organizations/terramar' },
    { entity: 'Clinton Foundation', role: 'Institutional Connection', details: 'Clinton and Epstein\'s relationship extended to institutional connections. Epstein visited the Clinton White House multiple times. Flight logs show Clinton on Lolita Express for African charity trips. Maxwell attended Chelsea Clinton\'s wedding.', href: '/entities/organizations/clinton-foundation' },
    { entity: 'Interlochen Center for the Arts', role: 'Youth Access Pipeline', details: 'Epstein donated to Interlochen, a prestigious arts camp for young people in Michigan. The lodge named after him was renamed after his arrest. Provided Epstein access to young, aspiring artists and performers.', href: '/entities/corporations/interlochen' },
    { entity: 'Council on Foreign Relations', role: 'Elite Network Access', details: 'Epstein was a member of the Council on Foreign Relations and used it to network with powerful political and business figures. Provided him legitimacy and institutional cover for his activities.', href: '/entities/organizations/cfr' },
    { entity: 'Trilateral Commission', role: 'Elite Network Access', details: 'Epstein was connected to members of the Trilateral Commission through his financial and social networks, giving him access to global power brokers.', href: '/entities/organizations/trilateral-commission' },
    { entity: 'Metropolitan Correctional Center (MCC)', role: 'Site of Death Under Suspicious Circumstances', details: 'Federal detention facility in Manhattan where Epstein died on August 10, 2019. Both cameras malfunctioned, both guards asleep, removed from suicide watch after 12 days despite prior attempt. One of the most secure federal facilities in the country. The facility was subsequently closed in 2021.', href: '/entities/agencies/bop' },
  ],

  // ============================
  // PROPERTIES & LOCATIONS
  // ============================
  properties: [
    { name: 'Little St. James Island', location: 'U.S. Virgin Islands', details: '"Pedophile Island" - Primary abuse location, mysterious temple structure with blue-and-white striped dome, elaborate tunnel system discovered during FBI raid, purchased 1998 for $7.95M' },
    { name: 'Great St. James Island', location: 'U.S. Virgin Islands', details: 'Second island purchased in 2016 for $18M to control surrounding access and prevent observation of Little St. James. Construction was ongoing at time of arrest.' },
    { name: '9 East 71st Street', location: 'Manhattan, NYC', details: 'Largest private residence in Manhattan ($77M), gifted by Les Wexner through a $0 transaction. Seven stories, 40 rooms. FBI raid found trove of photos, CDs in locked safe labeled with names. Hidden cameras throughout.' },
    { name: 'El Brillo Way', location: 'Palm Beach, Florida', details: 'Site of initial police investigation (2005). Where the massage table abuse primarily occurred. Neighbors reported streams of young girls entering. Valued at $12M.' },
    { name: 'Zorro Ranch', location: 'Stanley, New Mexico', details: '7,500-acre ranch, purchased 1993. Reported "baby ranch" for eugenics experiments where Epstein allegedly planned to seed the human race with his DNA by impregnating 20+ women. NM AG investigated but charges dropped after death.' },
    { name: 'Paris Apartment', location: '22 Avenue Foch, Paris, France', details: 'European base of operations on one of Paris\'s most expensive streets. Jean-Luc Brunel operated nearby. French authorities opened investigation in 2019.' },
    { name: 'London Residence', location: '44 Kinnerton Street, Belgravia, London', details: 'Maxwell\'s London home where Virginia Giuffre says she was introduced to Prince Andrew. Key location in British connections to the network.' },
  ],

  // ============================
  // AIRCRAFT
  // ============================
  aircraft: [
    { name: 'N908JE - Boeing 727-31', nickname: '"Lolita Express"', details: 'Primary transport aircraft. Flight logs obtained through FOIA show hundreds of flights with victims, politicians, celebrities. Configured for private use with bedroom, removed from service by 2016. Logs name Clinton, Trump, Prince Andrew, Dershowitz, and dozens of others.' },
    { name: 'N120JE - Gulfstream IV-SP', nickname: 'Secondary Executive Jet', details: 'Used for shorter trips between properties and for trips when the 727 was not needed. Also appears extensively in flight logs.' },
    { name: 'N212JE - Cessna Citation', nickname: 'Third Aircraft', details: 'Smaller jet used for regional flights, particularly between Palm Beach and New York.' },
    { name: 'Helicopter Fleet', nickname: 'Island Shuttle', details: 'Used to shuttle guests between St. Thomas airport and Little St. James Island. Multiple helicopter models used over the years.' },
  ],

  // ============================
  // COMPREHENSIVE TIMELINE
  // ============================
  timeline: [
    { date: '1953 Jan 20', event: 'Jeffrey Edward Epstein born in Brooklyn, New York to Seymour and Pauline Epstein' },
    { date: '1969', event: 'Epstein enrolls at Cooper Union but drops out; later attends NYU Courant Institute without completing degree' },
    { date: '1973', event: 'Hired as math/physics teacher at Dalton School (elite Manhattan prep school) at age 20, despite no degree. Hired by headmaster Donald Barr (father of future AG William Barr)' },
    { date: '1975', event: 'Fired from Dalton School reportedly for poor performance and inappropriate behavior with students' },
    { date: '1976', event: 'Hired at Bear Stearns as options trader despite lacking college degree. Reportedly recruited by a student\'s father. Rises quickly.' },
    { date: '1981', event: 'Leaves Bear Stearns after SEC investigation into the firm. Founds J. Epstein & Company, claims to manage money exclusively for billionaires.' },
    { date: '1986', event: 'Les Wexner becomes primary client and financial benefactor. Wexner grants Epstein sweeping power of attorney over his entire fortune ($1B+).' },
    { date: '1988', event: 'Epstein begins acquiring properties and building his network of wealthy and powerful contacts using Wexner\'s resources and connections.' },
    { date: '1991 Nov 5', event: 'Robert Maxwell (Ghislaine\'s father) found dead floating next to his yacht near Canary Islands. Ruled drowning. Widely suspected of being a Mossad/MI6 asset. Posthumously revealed to have stolen $465M from employee pension funds.' },
    { date: '1992', event: 'Ghislaine Maxwell moves to New York. Begins relationship with Epstein. Epstein begins attending events at Mar-a-Lago; friendship with Donald Trump develops.' },
    { date: '1993', event: 'Trump appears on Epstein\'s "Lolita Express" flight logs. Epstein purchases Zorro Ranch in New Mexico (7,500 acres).' },
    { date: '1994', event: 'Katie Johnson lawsuit later alleges Trump raped her at age 13 at Epstein party. Peak trafficking operations begin.' },
    { date: '1994-2004', event: 'Peak years of trafficking operation. Victims recruited from Mar-a-Lago, Victoria\'s Secret, MC2 Model Management, and through social networks. Hundreds of victims as young as 11.' },
    { date: '1995', event: 'Epstein establishes Southern Trust Company in US Virgin Islands, gaining tax advantages and reduced regulatory oversight for his financial operations.' },
    { date: '1996', event: 'Maria Farmer reports sexual abuse by Epstein and Maxwell to NYPD and FBI. FBI declines to investigate. Her sister Annie was also abused as a minor.' },
    { date: '1998', event: 'Epstein purchases Little St. James Island in the US Virgin Islands for $7.95M. Begins construction of compound including the mysterious blue-striped temple.' },
    { date: '2002 Feb', event: 'Bill Clinton takes first documented flight on Epstein\'s 727 to Africa for Clinton Foundation. Eventually logs 26+ flights.' },
    { date: '2002', event: 'Trump tells New York Magazine: Epstein "likes beautiful women as much as I do, and many of them are on the younger side"' },
    { date: '2003 Mar', event: 'Vanity Fair publishes "The Talented Mr. Epstein" but reporting on underage girls is edited out after Epstein threatens writer Vicky Ward.' },
    { date: '2004', event: 'Trump and Epstein publicly fall out reportedly over Palm Beach property dispute, though some contact continues.' },
    { date: '2005 Mar', event: 'Palm Beach Police begin investigation after a 14-year-old victim\'s mother files complaint. Detective Joe Recarey leads investigation.' },
    { date: '2005-2006', event: 'Palm Beach PD identifies 40+ victims. Chief Michael Reiter refers case to FBI after state attorney Barry Krischer resists prosecution.' },
    { date: '2006', event: 'FBI takes over investigation under Supervisory Agent Nesbitt Kuyrkendall. Documents extensive abuse pattern involving dozens of minors.' },
    { date: '2007', event: 'Federal prosecutors prepare 53-page federal indictment under SDFL. Behind-the-scenes negotiations between Acosta and Epstein lawyers (Dershowitz, Starr, Lefkowitz) begin.' },
    { date: '2008 Jun', event: 'Alexander Acosta negotiates Non-Prosecution Agreement. Epstein pleads guilty to two state prostitution charges instead of federal sex trafficking. NPA kept secret from victims in violation of Crime Victims\' Rights Act.' },
    { date: '2008 Jul', event: 'Epstein sentenced to 18 months in Palm Beach County Stockade. Serves 13 months with unprecedented work release 6 days/week, 12 hours/day at his office. NPA grants immunity to unnamed co-conspirators.' },
    { date: '2009 Jul', event: 'Epstein released from custody. Required to register as sex offender. Immediately resumes social activities with elites.' },
    { date: '2011', event: 'Bill Gates begins documented meetings with Epstein despite sex offender conviction. Meetings continue through 2014. Gates flies on Epstein\'s jet.' },
    { date: '2011', event: 'Leon Black begins paying Epstein "advisory fees" totaling $158M between 2012-2017.' },
    { date: '2011', event: 'Joi Ito of MIT Media Lab begins accepting hidden funding from Epstein, referring to him internally as "he who shall not be named" and "Voldemort."' },
    { date: '2012', event: 'Jes Staley, then at JPMorgan, maintains close contact with Epstein. They exchange 1,200+ emails. Staley visits Epstein in Palm Beach.' },
    { date: '2015 Jan', event: 'Virginia Giuffre files lawsuit against Ghislaine Maxwell. Court filings name Prince Andrew, Alan Dershowitz, and others. Documents begin to be unsealed.' },
    { date: '2016', event: 'Epstein purchases Great St. James Island for $18M to control access near his existing island. Jane Doe v. Trump/Epstein (Katie Johnson) lawsuit filed and refiled.' },
    { date: '2017', event: 'Trump appoints Alexander Acosta as Secretary of Labor. Acosta reportedly told Trump transition team that Epstein case was "above his pay grade" and Epstein "belonged to intelligence."' },
    { date: '2018 Nov', event: 'Miami Herald publishes Julie K. Brown\'s "Perversion of Justice" investigation, reigniting public attention on the case and Acosta\'s role.' },
    { date: '2019 Feb', event: 'Federal judge Kenneth Marra rules that the 2008 NPA violated the Crime Victims\' Rights Act by keeping victims uninformed.' },
    { date: '2019 Jul 6', event: 'Epstein arrested by FBI-NYPD task force at Teterboro Airport upon return from Paris. Charged by SDNY with sex trafficking of minors.' },
    { date: '2019 Jul 8', event: 'Thousands of photographs and CDs found in Epstein\'s Manhattan safe, labeled with names. Bail denied.' },
    { date: '2019 Jul 12', event: 'Acosta resigns as Secretary of Labor amid renewed scrutiny of his role in the 2008 plea deal.' },
    { date: '2019 Jul 23', event: 'Epstein found injured and semi-conscious in his cell with marks on his neck. Cellmate Nicholas Tartaglione (ex-cop charged with quadruple murder) questioned.' },
    { date: '2019 Jul 24', event: 'Epstein placed on suicide watch at MCC New York.' },
    { date: '2019 Aug 5', event: 'Epstein removed from suicide watch after only 12 days, per decision by MCC psychology staff, violating Bureau of Prisons protocols.' },
    { date: '2019 Aug 10', event: 'Jeffrey Epstein found dead in cell at MCC New York. Ruled suicide by hanging. Both cameras outside cell malfunctioned. Both guards assigned to check on him every 30 minutes had fallen asleep and falsified logs. Cellmate had been transferred out, leaving Epstein alone. AG William Barr oversaw the Bureau of Prisons.' },
    { date: '2019 Aug 10', event: 'Medical examiner Dr. Barbara Sampson rules death suicide by hanging. Epstein\'s family forensic expert Dr. Michael Baden finds evidence more consistent with homicidal strangulation (broken hyoid bone, hemorrhages).' },
    { date: '2019 Aug 13', event: 'Trump retweets conspiracy theory linking Clintons to Epstein\'s death. #ClintonBodyCount trends.' },
    { date: '2019 Sep', event: 'Joi Ito resigns from MIT Media Lab after New Yorker exposes hidden Epstein funding. MIT President Reif apologizes.' },
    { date: '2019 Dec', event: 'MCC guards Tova Noel and Michael Thomas charged with conspiracy and falsifying records for sleeping on duty and fabricating check logs.' },
    { date: '2020 Jan', event: 'AG Letitia James of USVI files lawsuit against Epstein estate, alleging decades of trafficking in the territory.' },
    { date: '2020 Jul 2', event: 'Ghislaine Maxwell arrested by FBI at her hideout in Bradford, New Hampshire. Charged with conspiracy, enticement of minors, sex trafficking, and perjury.' },
    { date: '2020 Aug', event: 'Court-ordered document release from Giuffre v. Maxwell reveals new details about network operations and previously redacted names.' },
    { date: '2021 Jun', event: 'MCC guards Noel and Thomas take deferred prosecution deal, avoid prison, perform community service instead.' },
    { date: '2021 Nov 29', event: 'United States v. Maxwell trial begins in SDNY. Key witnesses include Annie Farmer, "Kate" (pseudonym), Carolyn Andriano, and others.' },
    { date: '2021 Dec 29', event: 'Ghislaine Maxwell convicted on 5 of 6 federal charges including sex trafficking of a minor.' },
    { date: '2022 Feb 19', event: 'Jean-Luc Brunel found dead by hanging in his French prison cell while awaiting trial for rape and sex trafficking. Third key figure in Epstein network to die in custody.' },
    { date: '2022 Jun 28', event: 'Maxwell sentenced to 20 years in federal prison. Judge Alison Nathan calls her crimes "heinous and predatory."' },
    { date: '2023 Jun', event: 'JPMorgan Chase agrees to pay $290M to settle victim lawsuit alleging the bank knowingly facilitated Epstein\'s trafficking. Internal emails show executives were aware.' },
    { date: '2023 Nov', event: 'DOJ Inspector General releases report finding "serious failures" in BOP monitoring of Epstein, including systemic breakdown in supervision.' },
    { date: '2024 Jan', event: 'Major court-ordered document unsealing from Giuffre v. Maxwell case reveals 170+ names previously redacted, including politicians, billionaires, and scientists.' },
    { date: '2024', event: 'Additional documents, depositions, and flight logs continue to be released. Names include Ehud Barak, Tom Pritzker, Michael Steinhardt, Stephen Hawking, and many others.' },
    { date: '2025', event: 'Ongoing investigations, lawsuits, and document releases continue to expose the full scope of the Epstein network. USVI case against estate continues. International investigations in France, UK, and Israel remain open.' },
  ],

  // ============================
  // LEGAL OUTCOMES
  // ============================
  legalOutcomes: [
    { defendant: 'Jeffrey Epstein', charge: 'Florida State Solicitation of Prostitution (2008)', outcome: '13 months county jail with work release 6 days per week - sweetheart plea deal by Acosta' },
    { defendant: 'Jeffrey Epstein', charge: 'SDNY Sex Trafficking of Minors (2019)', outcome: 'Died in custody before trial (August 10, 2019)' },
    { defendant: 'Ghislaine Maxwell', charge: 'Sex Trafficking of Minors (5 federal counts)', outcome: 'Convicted December 2021, sentenced to 20 years federal prison (June 2022)' },
    { defendant: 'Jean-Luc Brunel', charge: 'Rape of Minors and Sex Trafficking (French charges)', outcome: 'Found dead by hanging in French prison cell before trial (February 2022)' },
    { defendant: 'Prince Andrew', charge: 'Civil Sexual Abuse lawsuit (Virginia Giuffre)', outcome: 'Settled for reported $12 million, no admission of liability (February 2022)' },
    { defendant: 'Alexander Acosta', charge: 'Criticism for sweetheart plea deal as U.S. Attorney', outcome: 'Resigned as Secretary of Labor amid backlash (July 2019)' },
    { defendant: 'Sarah Kellen', charge: 'Sex Trafficking Conspiracy', outcome: 'Granted immunity under 2008 NPA. Never prosecuted despite being named as key facilitator.' },
    { defendant: 'Nadia Marcinkova', charge: 'Sex Trafficking Conspiracy', outcome: 'Granted immunity under 2008 NPA. Rebranded as "Nadia Marcinko," became helicopter pilot.' },
    { defendant: 'Adriana Ross', charge: 'Sex Trafficking Conspiracy', outcome: 'Granted immunity under 2008 NPA. Invoked 5th Amendment 100+ times in deposition.' },
    { defendant: 'Lesley Groff', charge: 'Sex Trafficking Conspiracy', outcome: 'Granted immunity under 2008 NPA. Never faced charges despite orchestrating logistics.' },
    { defendant: 'JPMorgan Chase', charge: 'Civil - Knowingly Facilitating Sex Trafficking', outcome: 'Paid $290M settlement to Epstein victims (2023). Paid $75M to USVI.' },
    { defendant: 'Deutsche Bank', charge: 'Regulatory Failure - Processing Suspicious Transactions', outcome: 'Paid $150M fine to NY Department of Financial Services (2020)' },
    { defendant: 'Jes Staley', charge: 'Civil - Relationship with Epstein While at JPMorgan', outcome: 'Forced out as Barclays CEO (2021). JPMorgan sued him for causing $290M+ in liability.' },
    { defendant: 'Leon Black', charge: 'Civil allegations regarding $158M in payments', outcome: 'Stepped down as Apollo Global Management CEO (2021). Investigation by Dechert LLP found no criminal wrongdoing.' },
    { defendant: 'MCC Guards (Noel & Thomas)', charge: 'Conspiracy and Falsifying Records', outcome: 'Deferred prosecution agreement - community service only, no prison time (2021)' },
    { defendant: 'Epstein Estate', charge: 'USVI AG Lawsuit - Decades of Trafficking', outcome: 'Ongoing. Epstein Victims\' Compensation Program distributed $125M+ to 150+ claimants.' },
  ],

  // ============================
  // CRIMINAL CHARGES
  // ============================
  charges: [
    { statute: '18 U.S.C. 1591', description: 'Sex Trafficking of Minors', count: 'Multiple counts (2019 SDNY)' },
    { statute: '18 U.S.C. 1594', description: 'Attempted Sex Trafficking of Minors', count: 'Multiple counts' },
    { statute: '18 U.S.C. 2423', description: 'Transportation of Minors for Illegal Sexual Activity', count: 'Multiple counts' },
    { statute: '18 U.S.C. 371', description: 'Conspiracy to Commit Sex Trafficking', count: 'Multiple counts' },
    { statute: 'FL 796.07', description: 'Florida State Solicitation of Prostitution (2008 Plea)', count: '2 counts' },
    { statute: 'TVPA', description: 'Trafficking Victims Protection Act Violations', count: 'Multiple counts' },
    { statute: '18 U.S.C. 2251', description: 'Sexual Exploitation of Children (Possession of Materials)', count: 'Implied - CDs found in safe' },
  ],

  // ============================
  // COVER-UP & OBSTRUCTION
  // ============================
  coverup: [
    'Alexander Acosta, as U.S. Attorney for Southern District of Florida, negotiated a secret Non-Prosecution Agreement in 2008 that shielded unnamed co-conspirators from federal charges. Later told Trump transition team the case was "above his pay grade" and that Epstein "belonged to intelligence."',
    'The 2008 plea deal violated the Crime Victims\' Rights Act by failing to notify over 30 identified victims, as ruled by federal judge Kenneth Marra in February 2019.',
    'Both security cameras outside Epstein\'s cell at MCC New York malfunctioned on the night of August 10, 2019. Both guards assigned to check on him every 30 minutes fell asleep and falsified records. His cellmate had been transferred out, leaving him alone in violation of protocol.',
    'Epstein was removed from suicide watch only 12 days after a prior incident despite Bureau of Prisons protocols requiring extended monitoring. The decision was made by MCC psychology staff under unclear circumstances.',
    'AG William Barr - whose father Donald Barr hired Epstein at Dalton School decades earlier - oversaw the Bureau of Prisons at the time of Epstein\'s death. Barr declared he was "satisfied" the death was a suicide despite the circumstances.',
    'Dr. Michael Baden, hired by Epstein\'s family, found the autopsy evidence more consistent with homicidal strangulation than suicide, citing a broken hyoid bone (rare in suicidal hanging but common in strangulation) and bilateral hemorrhages.',
    'The FBI had documented evidence of extensive abuse involving dozens of minors as early as 2006 through the Palm Beach investigation, but a prepared 53-page federal indictment was never filed after behind-the-scenes negotiations with Epstein\'s defense team.',
    'Maria Farmer reported Epstein and Maxwell to the FBI in 1996, three years before the Palm Beach investigation. The FBI took no action for nearly a decade.',
    'Flight logs and visitor records were kept sealed for years. Court-ordered unsealing continues to reveal new high-profile names, but many documents remain redacted or sealed.',
    'Multiple key witnesses and associates died under suspicious circumstances: Epstein himself (2019, prison), Jean-Luc Brunel (2022, French prison), and Bill Richardson (2023, natural causes per officials, but timing questioned).',
    'Mar-a-Lago served as a documented recruiting ground for trafficking victims according to court filings and witness testimony, yet faced no institutional consequences from law enforcement.',
    'JPMorgan Chase maintained Epstein accounts for 15+ years after his conviction, processing suspicious transactions including $725,000+ in cash withdrawals and payments to young women. Internal emails show executives knew about trafficking allegations.',
    'The CIA has refused to release documents related to Epstein, citing national security exemptions under FOIA.',
    'Vanity Fair writer Vicky Ward had her 2003 article about Epstein\'s interest in underage girls edited out after Epstein directly threatened her and her unborn children.',
    'Palm Beach State Attorney Barry Krischer initially resisted prosecution despite police evidence, leading Police Chief Michael Reiter to refer the case to the FBI. A grand jury under Krischer returned only a single state charge.',
    'Joi Ito and MIT Media Lab actively concealed Epstein funding after his conviction, with internal emails showing deliberate efforts to hide the relationship from public scrutiny.',
  ],

  // ============================
  // TRUMP CONNECTIONS
  // ============================
  trumpConnections: [
    'Documented friendship spanning 1992-2019 (publicly fell out in 2004 over property dispute, but contact continued)',
    'Mar-a-Lago was a documented recruiting ground for Epstein victims per court documents and witness testimony. Virginia Giuffre was recruited from Mar-a-Lago at age 16.',
    'Trump\'s 2002 New York Magazine quote: Epstein "likes beautiful women as much as I do, and many of them are on the younger side"',
    'Trump appears on "Lolita Express" flight logs (1993 Palm Beach to NYC)',
    'Multiple documented visits to Epstein\'s 9 East 71st Street Manhattan mansion',
    'Epstein was a member of Mar-a-Lago club before being expelled (reported in 2004 but timeline disputed)',
    'Katie Johnson lawsuit (Jane Doe v. Trump/Epstein) alleges Trump raped her at age 13 at Epstein party in 1994. Case filed in 2016, withdrawn under reported threats.',
    'Trump appointed Alexander Acosta as Secretary of Labor in 2017 - the same prosecutor who gave Epstein the sweetheart plea deal',
    'Acosta reportedly told Trump transition team the Epstein case was "above his pay grade" and Epstein "belonged to intelligence"',
    '26+ women have accused Trump of sexual misconduct, establishing a pattern consistent with allegations',
    'Trump wished Ghislaine Maxwell "well" multiple times after her July 2020 arrest on sex trafficking charges',
    'Trump tweeted conspiracy theory linking Clintons to Epstein\'s death within 48 hours of it occurring',
    'Virginia Giuffre stated in depositions that she saw Trump at Epstein properties but did not personally accuse him of sexual contact with minors',
    'Court documents reference Trump\'s phone numbers in Epstein\'s "black book" with 14 separate contact numbers listed',
    'Former Epstein butler Juan Alessi testified that Trump was a frequent dinner guest at Epstein\'s Palm Beach home',
  ],

  // ============================
  // VICTIMS
  // ============================
  victims: 'Hundreds of documented victims, some as young as 11 years old. The Epstein Victims\' Compensation Program received 225+ claims and distributed $125M+ to 150+ claimants. Recruitment methods included: modeling agency scouts (MC2, Victoria\'s Secret), massage promises targeting vulnerable teens, Mar-a-Lago staff recruitment, financial manipulation of impoverished young women, school and camp recruitment through institutional access, peer-to-peer recruitment with cash incentives ($200-$300 per girl referred). Victims spanned multiple countries including the US, UK, France, Sweden, Thailand, and numerous Eastern European and South American nations.',

  // ============================
  // FINANCIAL CONNECTIONS
  // ============================
  financialConnections: [
    { entity: 'JPMorgan Chase', role: 'Primary Banking Partner (1998-2013)', details: 'Maintained Epstein accounts for 15+ years including after his sex offender conviction. Processed $725,000+ in suspicious cash withdrawals. Internal emails show senior executives including Jes Staley knew about trafficking allegations. Paid $290M settlement to victims and $75M to USVI in 2023.', href: '/entities/corporations/jpmorgan-chase' },
    { entity: 'Deutsche Bank', role: 'Banking Partner (2013-2019)', details: 'Took over Epstein accounts after JPMorgan dropped him. Processed hundreds of suspicious transactions including payments to Russian models, school tuition for women, and hotel payments. Paid $150M fine to NY regulators in 2020. Anti-money-laundering controls flagged but were overridden.', href: '/entities/corporations/deutsche-bank' },
    { entity: 'Les Wexner / L Brands', role: 'Primary Financial Backer', details: 'Granted Epstein power of attorney over his $1B+ fortune. Gifted $77M Manhattan mansion through a $0 transaction. Epstein managed Wexner\'s finances for decades. Victoria\'s Secret used as a recruiting and cover operation. Wexner claims Epstein "misappropriated" $46M but took no legal action for years.', href: '/entities/individuals/les-wexner' },
    { entity: 'Leon Black / Apollo Global Management', role: 'Post-Conviction Payments of $158M', details: 'Paid Epstein $158M in "advisory fees" between 2012-2017, years after sex offender conviction. Payments included estate planning and tax advice. Stepped down as Apollo CEO in 2021. Independent review by Dechert LLP cleared him of wrongdoing but findings questioned.', href: '/entities/individuals/leon-black' },
    { entity: 'Bill Gates / Gates Foundation', role: 'Post-Conviction Meetings and Flights', details: 'Multiple documented meetings with Epstein from 2011-2014, after conviction. Gates flew on Epstein\'s Lolita Express in 2013. Epstein helped arrange a $2M donation from Gates to MIT. Melinda Gates cited the Epstein relationship as a factor in their divorce. Gates has said meetings were a "mistake."', href: '/entities/individuals/bill-gates' },
    { entity: 'Jes Staley / JPMorgan / Barclays', role: 'Personal Relationship and Banking Access', details: 'Maintained close personal relationship with Epstein from mid-2000s. Exchanged 1,200+ emails. Visited Epstein in Palm Beach jail. As JPMorgan executive, facilitated Epstein\'s banking. Later became Barclays CEO, fired in 2021 over Epstein ties. JPMorgan sued him for $75M.', href: '/entities/individuals/jes-staley' },
    { entity: 'Victoria\'s Secret / L Brands', role: 'Trafficking Cover and Recruiting Pipeline', details: 'Epstein posed as a Victoria\'s Secret talent scout to approach and recruit young women. Multiple victims testified they were lured with promises of modeling careers. Wexner gave Epstein extraordinary access to his fashion empire.', href: '/entities/corporations/l-brands' },
    { entity: 'Bear Stearns', role: 'Original Employer and Entry to Finance', details: 'Epstein worked as options trader 1976-1981. Hired despite lacking college degree, reportedly through a Dalton School parent connection. Made the connections that launched his financial career and access to ultra-wealthy clients.', href: '/entities/corporations/bear-stearns' },
    { entity: 'Southern Trust Company', role: 'Epstein\'s USVI Financial Entity', details: 'Shell company established by Epstein in the US Virgin Islands. Provided tax advantages and reduced regulatory oversight. Part of Epstein\'s complex network of financial entities designed to obscure the sources and uses of his wealth.', href: '/entities/corporations/southern-trust' },
    { entity: 'Financial Trust Company', role: 'Epstein\'s USVI Financial Entity', details: 'Another USVI-based entity in Epstein\'s financial web. Received significant tax benefits from the government. USVI AG later sued estate alleging these benefits were obtained through fraud.', href: '/entities/corporations/financial-trust' },
    { entity: 'Gratitude America Ltd', role: 'Maxwell\'s Financial Entity', details: 'LLC controlled by Ghislaine Maxwell used to purchase the Bradford, NH property where she was eventually arrested. Part of Maxwell\'s efforts to conceal her whereabouts and assets after Epstein\'s death.', href: '/entities/corporations/gratitude-america' },
    { entity: 'Apollo Global Management', role: 'Leon Black\'s Firm', details: 'One of the world\'s largest alternative asset managers. CEO Leon Black\'s $158M in payments to Epstein raised questions about whether Epstein had leverage over Black. Black stepped down as CEO in March 2021.', href: '/entities/corporations/apollo-global' },
    { entity: 'Epstein Victims\' Compensation Program', role: 'Post-Death Victim Fund', details: 'Established in 2020, managed by Jordana Feldman. Distributed $125M+ to 150+ eligible claimants from Epstein\'s estate ($634M at death). Claimants waived right to sue the estate but not third parties.', href: '/entities/organizations/epstein-vcf' },
  ],

  // ============================
  // SOURCES & DOCUMENTATION
  // ============================
  sources: [
    { title: 'Miami Herald: Perversion of Justice Investigation (Julie K. Brown)', url: 'https://www.miamiherald.com/topics/jeffrey-epstein', date: '2018' },
    { title: 'SDNY Federal Indictment - Sex Trafficking of Minors', url: 'https://www.justice.gov/usao-sdny/pr/jeffrey-epstein-charged-sex-trafficking-minors', date: '2019' },
    { title: 'Giuffre v. Maxwell Court Documents (Full Docket)', url: 'https://www.courtlistener.com/docket/4355835/giuffre-v-maxwell/', date: '2015-2025' },
    { title: 'United States v. Maxwell Trial (Full Docket)', url: 'https://www.courtlistener.com/docket/17318376/united-states-v-maxwell/', date: '2021-2022' },
    { title: 'Epstein Flight Logs (DocumentCloud)', url: 'https://www.documentcloud.org/documents/21165424-epstein-flight-logs', date: '2021-2025' },
    { title: 'Katie Johnson v. Trump/Epstein Lawsuit', url: 'https://www.courtlistener.com/docket/4154484/katie-johnson-v-donald-j-trump/', date: '2016' },
    { title: 'Palm Beach Police Department Investigation Report', url: 'https://www.documentcloud.org/documents/1508273-palm-beach-police-investigation', date: '2005' },
    { title: 'Non-Prosecution Agreement (DocumentCloud)', url: 'https://www.documentcloud.org/documents/1508967-non-prosecution-agreement', date: '2008' },
    { title: '2024 Unsealed Court Documents (Giuffre v. Maxwell)', url: 'https://www.courtlistener.com/docket/4355835/giuffre-v-maxwell/', date: '2024' },
    { title: 'Trump 2002 New York Magazine Quote on Epstein', url: 'https://nymag.com/nymetro/news/people/n_7912/', date: '2002' },
    { title: 'Vanity Fair: The Talented Mr. Epstein', url: 'https://www.vanityfair.com/news/2003/03/jeffrey-epstein-200303', date: '2003' },
    { title: 'JPMorgan $290M Victim Settlement (Reuters)', url: 'https://www.reuters.com/legal/jpmorgan-settlement-with-epstein-victims-gets-final-approval-2023-11-28/', date: '2023' },
    { title: 'Deutsche Bank $150M Fine (NY DFS)', url: 'https://www.dfs.ny.gov/reports_and_publications/press_releases/pr202007071', date: '2020' },
    { title: 'DOJ Inspector General Report on Epstein Death', url: 'https://oig.justice.gov/reports/investigation-and-review-federal-bureau-prisons-monitoring-jeffrey-epstein-following-his', date: '2023' },
    { title: 'Leon Black-Epstein $158M Payments (NYT)', url: 'https://www.nytimes.com/2021/01/25/business/leon-black-jeffrey-epstein.html', date: '2021' },
    { title: 'Bill Gates-Epstein Meetings (NYT)', url: 'https://www.nytimes.com/2019/10/12/business/jeffrey-epstein-bill-gates.html', date: '2019' },
    { title: 'Epstein\'s "Black Book" (DocumentCloud)', url: 'https://www.documentcloud.org/documents/1508273-jeffrey-epsteins-little-black-book-redacted', date: '2015' },
    { title: 'Dr. Michael Baden Autopsy Findings (Fox News)', url: 'https://www.foxnews.com/us/forensic-pathologist-jeffrey-epstein-homicide', date: '2019' },
    { title: 'New Yorker: MIT Media Lab Hidden Epstein Funding', url: 'https://www.newyorker.com/news/news-desk/how-an-elite-university-research-center-concealed-its-relationship-with-jeffrey-epstein', date: '2019' },
    { title: 'Ari Ben-Menashe Claims on Epstein Intelligence Ties', url: 'https://www.mintpressnews.com/ari-ben-menashe-jeffrey-epstein-ghislaine-maxwell-israel-intelligence/261104/', date: '2019' },
    { title: 'USVI AG Lawsuit Against Epstein Estate', url: 'https://www.documentcloud.org/documents/6598112-USVI-v-Epstein', date: '2020' },
    { title: 'Epstein Victims\' Compensation Fund Final Report', url: 'https://www.epsteinclaims.com/', date: '2021' },
    { title: 'Harvard $9M Epstein Donations Investigation', url: 'https://www.thecrimson.com/article/2020/5/1/harvard-epstein-donations/', date: '2020' },
    { title: 'Vicky Ward: Vanity Fair Article Censorship Account', url: 'https://www.thedailybeast.com/jeffrey-epstein-threatened-vanity-fair-writer', date: '2019' },
    { title: 'Robert Maxwell: A Life of Intelligence (Seymour Hersh)', url: 'https://www.nytimes.com/1991/11/10/books/a-tycoon-s-secret-world.html', date: '1991' },
    { title: 'Christine Maxwell / Chiliad FBI-CIA Contract', url: 'https://www.theguardian.com/us-news/2019/aug/22/ghislaine-maxwell-what-is-known-about-the-life-of-jeffrey-epsteins-closest-associate', date: '2019' },
    { title: 'Acosta "Intelligence" Quote (Daily Beast)', url: 'https://www.thedailybeast.com/jeffrey-epsteins-sick-story-played-out-for-years-in-plain-sight', date: '2019' },
    { title: 'JPMorgan v. Jes Staley Lawsuit', url: 'https://www.reuters.com/business/finance/jpmorgan-sues-former-executive-jes-staley-over-epstein-ties-2023-03-08/', date: '2023' },
    { title: 'Maxwell Trial Transcripts (Inner City Press)', url: 'https://www.innercitypress.com/sdny16maxwell.html', date: '2021' },
    { title: 'Filthy Rich (Netflix Documentary)', url: 'https://www.netflix.com/title/80224905', date: '2020' },
    { title: 'Julie K. Brown: Perversion of Justice (Book)', url: 'https://www.harpercollins.com/products/perversion-of-justice-julie-k-brown', date: '2021' },
    { title: 'Bradley Edwards: Relentless Pursuit (Book)', url: 'https://www.simonandschuster.com/books/Relentless-Pursuit/Bradley-J-Edwards/9781982148454', date: '2020' },
  ],
};

const severityColors = {
  critical: 'bg-red-500/20 text-red-400 border-red-500/30',
  high: 'bg-orange-500/20 text-orange-400 border-orange-500/30',
  medium: 'bg-yellow-500/20 text-yellow-400 border-yellow-500/30',
  low: 'bg-green-500/20 text-green-400 border-green-500/30',
};

export default function EpsteinNetworkPage() {
  return (
    <div className="min-h-screen pt-20 lg:pt-24 pb-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Back Link */}
        <Link
          href="/investigations"
          className="inline-flex items-center gap-2 text-zinc-400 hover:text-blood-500 transition-colors mb-6 pt-4"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Investigations
        </Link>

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="border-2 border-blood-800/60 bg-black/80 p-6 lg:p-8 mb-8"
        >
          <div className="flex items-center gap-3 mb-4">
            <span className={`px-3 py-1 text-xs font-bold uppercase border ${severityColors.critical}`}>
              {investigation.severity}
            </span>
            <span className="px-3 py-1 text-xs font-bold uppercase border border-yellow-500/30 bg-yellow-500/20 text-yellow-400">
              {investigation.status}
            </span>
          </div>

          <h1 className="text-3xl lg:text-4xl font-black text-white uppercase tracking-wider mb-2">
            <GlitchText text={investigation.title} />
          </h1>
          <p className="text-lg text-blood-500 font-bold mb-4">{investigation.subtitle}</p>
          <p className="text-zinc-400 leading-relaxed">{investigation.summary}</p>
        </motion.div>

        {/* Key Figures */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="border-2 border-zinc-800 bg-black/60 p-6 mb-8"
        >
          <h2 className="text-xl font-bold text-white uppercase tracking-wider mb-4 flex items-center gap-2">
            <Users className="w-5 h-5 text-blood-500" />
            Key Figures & Associates
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {investigation.keyFigures.map((figure, idx) => (
              <Link
                key={idx}
                href={figure.href}
                className="border border-zinc-700 bg-zinc-900/50 p-4 hover:border-blood-600 transition-colors group"
              >
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="font-bold text-white group-hover:text-blood-500 transition-colors">
                      {figure.name}
                    </h3>
                    <p className="text-sm text-zinc-400">{figure.role}</p>
                  </div>
                  <span className="text-xs text-zinc-500">{figure.status}</span>
                </div>
              </Link>
            ))}
          </div>
        </motion.div>

        {/* Cover-Up */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.12 }} className="border-2 border-red-800/60 bg-red-950/10 p-6 mb-8 border-l-4 border-l-blood-600">
          <h2 className="text-xl font-bold text-white uppercase tracking-wider mb-4 flex items-center gap-2"><ShieldAlert className="w-5 h-5 text-blood-500" />The Cover-Up</h2>
          <div className="space-y-3">{investigation.coverup.map((item, idx) => (<div key={idx} className="p-3 bg-red-950/20 border border-red-500/30"><p className="text-sm text-zinc-300">{item}</p></div>))}</div>
        </motion.div>

        {/* Intelligence Connections */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.125 }}
          className="border-2 border-red-900/60 bg-red-950/5 p-6 mb-8"
        >
          <h2 className="text-xl font-bold text-white uppercase tracking-wider mb-4 flex items-center gap-2">
            <Eye className="w-5 h-5 text-blood-500" />
            Intelligence Connections
          </h2>
          <div className="space-y-4">
            {investigation.intelligenceConnections.map((conn, idx) => (
              <Link
                key={idx}
                href={conn.href}
                className="block border border-red-800/40 bg-red-950/10 p-4 hover:border-blood-600 transition-colors group"
              >
                <h3 className="font-bold text-white group-hover:text-blood-500 transition-colors">{conn.entity}</h3>
                <p className="text-sm text-blood-400 mt-1">{conn.role}</p>
                <p className="text-xs text-zinc-400 mt-2">{conn.details}</p>
              </Link>
            ))}
          </div>
        </motion.div>

        {/* Institutional Connections */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.127 }}
          className="border-2 border-zinc-800 bg-black/60 p-6 mb-8"
        >
          <h2 className="text-xl font-bold text-white uppercase tracking-wider mb-4 flex items-center gap-2">
            <Building className="w-5 h-5 text-blood-500" />
            Institutional Connections
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {investigation.institutionalConnections.map((conn, idx) => (
              <Link
                key={idx}
                href={conn.href}
                className="border border-zinc-700 bg-zinc-900/50 p-4 hover:border-blood-600 transition-colors group"
              >
                <h3 className="font-bold text-white group-hover:text-blood-500 transition-colors">{conn.entity}</h3>
                <p className="text-sm text-blood-400 mt-1">{conn.role}</p>
                <p className="text-xs text-zinc-400 mt-2">{conn.details}</p>
              </Link>
            ))}
          </div>
        </motion.div>

        {/* Financial Connections */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.13 }}
          className="border-2 border-zinc-800 bg-black/60 p-6 mb-8"
        >
          <h2 className="text-xl font-bold text-white uppercase tracking-wider mb-4 flex items-center gap-2">
            <DollarSign className="w-5 h-5 text-blood-500" />
            Financial Connections & Enablers
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {investigation.financialConnections.map((conn, idx) => (
              <Link
                key={idx}
                href={conn.href}
                className="border border-zinc-700 bg-zinc-900/50 p-4 hover:border-blood-600 transition-colors group"
              >
                <h3 className="font-bold text-white group-hover:text-blood-500 transition-colors">{conn.entity}</h3>
                <p className="text-sm text-blood-400 mt-1">{conn.role}</p>
                <p className="text-xs text-zinc-400 mt-2">{conn.details}</p>
              </Link>
            ))}
          </div>
        </motion.div>

        {/* Trump Connections */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15 }}
          className="border-2 border-red-800/60 bg-red-950/20 p-6 mb-8"
        >
          <h2 className="text-xl font-bold text-white uppercase tracking-wider mb-4 flex items-center gap-2">
            <AlertTriangle className="w-5 h-5 text-red-500" />
            Trump-Epstein Connections
          </h2>
          <ul className="space-y-3">
            {investigation.trumpConnections.map((connection, idx) => (
              <li key={idx} className="flex items-start gap-3">
                <span className="w-2 h-2 mt-2 bg-red-500 flex-shrink-0" />
                <span className="text-zinc-300">{connection}</span>
              </li>
            ))}
          </ul>
        </motion.div>

        {/* Properties */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="border-2 border-zinc-800 bg-black/60 p-6 mb-8"
        >
          <h2 className="text-xl font-bold text-white uppercase tracking-wider mb-4 flex items-center gap-2">
            <MapPin className="w-5 h-5 text-blood-500" />
            Properties & Locations
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {investigation.properties.map((property, idx) => (
              <div key={idx} className="border border-zinc-700 bg-zinc-900/50 p-4">
                <h3 className="font-bold text-white">{property.name}</h3>
                <p className="text-sm text-blood-500">{property.location}</p>
                <p className="text-sm text-zinc-400 mt-1">{property.details}</p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Aircraft */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.25 }}
          className="border-2 border-zinc-800 bg-black/60 p-6 mb-8"
        >
          <h2 className="text-xl font-bold text-white uppercase tracking-wider mb-4 flex items-center gap-2">
            <Plane className="w-5 h-5 text-blood-500" />
            Aircraft & Transportation
          </h2>
          <div className="space-y-4">
            {investigation.aircraft.map((craft, idx) => (
              <div key={idx} className="border border-zinc-700 bg-zinc-900/50 p-4">
                <h3 className="font-bold text-white">{craft.name}</h3>
                <p className="text-sm text-blood-500">{craft.nickname}</p>
                <p className="text-sm text-zinc-400 mt-1">{craft.details}</p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Victims */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.28 }}
          className="border-2 border-red-800/60 bg-red-950/10 p-6 mb-8"
        >
          <h2 className="text-xl font-bold text-white uppercase tracking-wider mb-4 flex items-center gap-2">
            <Globe className="w-5 h-5 text-blood-500" />
            Victims
          </h2>
          <p className="text-zinc-300 leading-relaxed">{investigation.victims}</p>
        </motion.div>

        {/* Charges */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="border-2 border-zinc-800 bg-black/60 p-6 mb-8"
        >
          <h2 className="text-xl font-bold text-white uppercase tracking-wider mb-4 flex items-center gap-2">
            <Scale className="w-5 h-5 text-blood-500" />
            Criminal Charges
          </h2>
          <div className="space-y-3">
            {investigation.charges.map((charge, idx) => (
              <div key={idx} className="border border-zinc-700 bg-zinc-900/50 p-4">
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="font-mono text-sm text-blood-500">{charge.statute}</h3>
                    <p className="text-zinc-300">{charge.description}</p>
                  </div>
                  <span className="text-xs text-zinc-500">{charge.count}</span>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Timeline */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.35 }}
          className="border-2 border-zinc-800 bg-black/60 p-6 mb-8"
        >
          <h2 className="text-xl font-bold text-white uppercase tracking-wider mb-4 flex items-center gap-2">
            <Calendar className="w-5 h-5 text-blood-500" />
            Timeline of Events
          </h2>
          <div className="space-y-4">
            {investigation.timeline.map((item, idx) => (
              <div key={idx} className="flex gap-4 border-l-2 border-zinc-700 pl-4 hover:border-blood-500 transition-colors">
                <span className="text-blood-500 font-mono text-sm whitespace-nowrap">{item.date}</span>
                <span className="text-zinc-300">{item.event}</span>
              </div>
            ))}
          </div>
        </motion.div>

        
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5 }} className="border-2 border-zinc-800 bg-black/60 p-6 mb-8">
          <h2 className="text-xl font-bold text-white uppercase tracking-wider mb-4 flex items-center gap-2"><Scale className="w-5 h-5 text-blood-500" />Legal Outcomes</h2>
          <div className="space-y-3">{investigation.legalOutcomes.map((item, idx) => (<div key={idx} className="p-3 bg-zinc-900/50 border border-zinc-800"><p className="font-bold text-white text-sm">{item.defendant}</p><p className="text-xs text-zinc-400 mt-1">{item.charge}</p><p className="text-xs text-blood-400 mt-1">{item.outcome}</p></div>))}</div>
        </motion.div>
        {/* Sources */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="border-2 border-zinc-800 bg-black/60 p-6"
        >
          <h2 className="text-xl font-bold text-white uppercase tracking-wider mb-4 flex items-center gap-2">
            <FileText className="w-5 h-5 text-blood-500" />
            Sources & Documentation
          </h2>
          <div className="space-y-3">
            {investigation.sources.map((source, idx) => (
              <a
                key={idx}
                href={source.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between border border-zinc-700 bg-zinc-900/50 p-3 hover:border-blood-600 transition-colors group"
              >
                <div>
                  <h3 className="text-zinc-300 group-hover:text-blood-500 transition-colors">{source.title}</h3>
                  <p className="text-xs text-zinc-500">{source.date}</p>
                </div>
                <ExternalLink className="w-4 h-4 text-zinc-500 group-hover:text-blood-500 transition-colors" />
              </a>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}
