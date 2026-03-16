'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowLeft, AlertTriangle, Users, Calendar, ExternalLink, Scale, ShieldAlert, Globe, Building, Eye, Network, BookOpen } from 'lucide-react';
import GlitchText from '@/components/effects/GlitchText';

const investigation = {
 title: 'NSA Mass Surveillance',
 subtitle: 'Unconstitutional Warrantless Surveillance of Billions of People Worldwide',
 severity: 'critical',
 status: 'Confirmed, Snowden Documents',
 summary: 'Beginning in 2001 and dramatically expanded under Presidents Bush and Obama, the National Security Agency constructed the largest surveillance apparatus in human history. Programs including PRISM, XKeyscore, Upstream Collection, Tempora (with GCHQ), and MUSCULAR enabled the NSA to intercept and store the communications of billions of people worldwide (including American citizens) without individualized warrants. The bulk metadata collection program, authorized under a secret interpretation of Section 215 of the USA PATRIOT Act, vacuumed up the phone records of virtually every American. The FISA Court, operating in total secrecy, rubber-stamped nearly every surveillance request placed before it, effectively abolishing the Fourth Amendment for national security purposes. The scope of the programs was revealed in June 2013 when former NSA contractor Edward Snowden leaked tens of thousands of classified documents to journalists Glenn Greenwald and Laura Poitras, exposing systematic constitutional violations that senior intelligence officials (most notably Director of National Intelligence James Clapper) had publicly denied under oath before Congress.',

 // ============================
 // THE COVER-UP
 // ============================
 coverup: [
  'Director of National Intelligence James Clapper lied under oath to the Senate Intelligence Committee on March 12, 2013, denying the NSA collected data on millions of Americans. He later called it the "least untruthful" answer. Despite irrefutable evidence of perjury, the Department of Justice declined to prosecute, sending the message that senior officials are above the law.',
  'The NSA operated under a secret legal interpretation of Section 215 of the USA PATRIOT Act that no member of the public (and most members of Congress) were aware of, effectively creating a shadow legal system. Even members of the Senate Intelligence Committee were forbidden from publicly discussing the programs they were briefed on.',
  'The FISA Court approved 33,942 surveillance warrants between 1979 and 2012 while denying only 11 (an approval rate of 99.97%), functioning as a rubber stamp rather than a meaningful check on executive power. The court operated in complete secrecy, with no adversarial process, no public advocates, and judges appointed solely by the Chief Justice.',
  'NSA Director Keith Alexander repeatedly made misleading public statements about the scope of surveillance programs, claiming they were narrowly targeted when internal documents showed mass collection. Alexander claimed surveillance had helped prevent 54 terrorist attacks; a subsequent review by the Privacy and Civil Liberties Oversight Board found this claim was "not supported by the evidence."',
  'The Obama administration prosecuted more whistleblowers under the Espionage Act than all previous administrations combined (eight cases), creating a chilling effect designed to prevent future disclosures. The administration simultaneously claimed to be "the most transparent in history."',
  'Internal NSA audits revealed thousands of privacy violations per year (2,776 in the 12 months ending March 2012 alone), including unauthorized surveillance of Americans\' phone calls and emails; violations the agency failed to report to the FISA Court for years.',
  'The MUSCULAR program tapped into the private fiber-optic links connecting Google and Yahoo data centers worldwide, bypassing both companies\' encryption and collecting data entirely outside any legal framework. When Google engineers discovered the intrusion, internal communications showed outrage at the scale of the breach.',
  'Senior officials across multiple administrations engaged in a coordinated campaign to classify evidence of constitutional violations as state secrets, invoking national security to block judicial review. Every major legal challenge to warrantless surveillance was dismissed on state secrets grounds until the Snowden revelations made denial impossible.',
  'The Stellar Wind program, which preceded the Snowden revelations, was so legally dubious that Deputy Attorney General James Comey, FBI Director Robert Mueller, and multiple senior DOJ officials threatened to resign en masse rather than reauthorize it in 2004. The program was briefly modified, then expanded again under new legal justifications.',
  'After the New York Times agreed to delay publication of the warrantless wiretapping story for over a year at the Bush administration\'s request, then-NSA Director Michael Hayden flew to New York to personally pressure the editors to kill the story entirely. The story was eventually published in December 2005 after reporter James Risen threatened to include the information in a book.',
  'The government systematically used the classification system to prevent its own inspectors general from reviewing surveillance programs. When the DOJ Inspector General attempted to investigate the warrantless surveillance programs, the NSA denied the necessary security clearances to the investigators.',
  'After the Snowden revelations, intelligence officials launched a coordinated public relations campaign to characterize Snowden as a traitor and Russian agent, focusing media attention on the messenger rather than the message. James Clapper, the man who committed perjury, publicly called for Snowden\'s prosecution.',
 ],

 // ============================
 // SURVEILLANCE PROGRAMS
 // ============================
 surveillancePrograms: [
  {
   name: 'PRISM',
   classification: 'TOP SECRET//SI//ORCON//NOFORN',
   dateActive: '2007-present',
   description: 'Direct collection from servers of Google, Microsoft, Yahoo, Facebook, Apple, AOL, Skype, YouTube, and PalTalk. Authorized under Section 702 of the FISA Amendments Act. Gave the NSA the ability to access emails, chat logs, stored data, voice traffic, file transfers, video conferencing, photos, social networking details, and login information from nine major US tech companies. Companies initially denied knowledge, but documents showed they built special access portals for the NSA.',
   scope: 'All users of participating services worldwide. Over 117,000 surveillance targets as of 2013, but incidental collection affected hundreds of millions of non-targets.',
   legal: 'Section 702 FISA Amendments Act (2008)',
  },
  {
   name: 'XKeyscore',
   classification: 'TOP SECRET//COMINT',
   dateActive: '2008-present',
   description: 'Massive data analytics system allowing NSA analysts to search through virtually everything a user does on the internet, including email content, websites visited, search queries, chat logs, and metadata. Required no prior authorization; analysts could search any target with a simple justification form. Internal NSA training slides boasted it covered "nearly everything a typical user does on the internet." Over 700 servers at 150 sites worldwide.',
   scope: 'Entire global internet traffic. Processes over 20 petabytes of data per day.',
   legal: 'Executive Order 12333, Section 702 FISA',
  },
  {
   name: 'Upstream Collection',
   classification: 'TOP SECRET//SI//NOFORN',
   dateActive: '2003-present',
   description: 'Direct interception of communications as they flow through the internet backbone (fiber-optic cables). The NSA physically tapped into fiber-optic splitters installed at major telecommunications switching facilities, including AT&T\'s Room 641A in San Francisco (exposed by whistleblower Mark Klein in 2006). Collected both content and metadata of communications transiting US telecommunications infrastructure.',
   scope: 'All internet communications passing through US fiber-optic infrastructure. Billions of communications per day.',
   legal: 'Section 702 FISA, Executive Order 12333',
  },
  {
   name: 'STELLARWIND',
   classification: 'TOP SECRET//STLW//HCS//COMINT',
   dateActive: 'October 2001-2007',
   description: 'The original post-9/11 warrantless surveillance program authorized by a secret presidential directive. Included bulk collection of telephone and internet metadata, and content interception of international communications where one party was suspected of terrorist ties. So legally questionable that senior DOJ officials and the FBI Director threatened mass resignation in 2004. Partially transitioned to FISA Court authorization starting in 2006, but the core capabilities continued under new legal justifications.',
   scope: 'All domestic telephone metadata, international communications content.',
   legal: 'Presidential authorization (no statutory basis)',
  },
  {
   name: 'MUSCULAR (DS-200B)',
   classification: 'TOP SECRET//SI//NOFORN',
   dateActive: '2009-present',
   description: 'Joint NSA-GCHQ program that secretly tapped into the private, unencrypted fiber-optic cables connecting Google and Yahoo data centers worldwide. This program operated outside of any court oversight because the interception occurred on foreign soil (primarily the UK). In a single 30-day period, the NSA collected 181,280,466 records from Yahoo and Google networks. When Google engineers discovered the tap, NSA internal documents showed a hand-drawn smiley face next to a diagram of the interception point.',
   scope: 'All data flowing between Google and Yahoo data centers. 181 million+ records in 30 days.',
   legal: 'None (operated outside any legal framework)',
  },
  {
   name: 'Tempora',
   classification: 'TOP SECRET STRAP 1',
   dateActive: '2011-present',
   description: 'GCHQ (British intelligence) program, operated in coordination with the NSA. Intercepted fiber-optic cables carrying internet traffic in and out of the UK, buffering all content for 3 days and metadata for 30 days. Over 200 fiber-optic cables tapped simultaneously, with capacity for 46 billion records per day. UK intelligence services shared access with the NSA, effectively allowing the NSA to circumvent domestic surveillance restrictions by having a foreign partner intercept the communications of US citizens.',
   scope: 'All internet and telephone communications transiting UK fiber-optic infrastructure. Shared with NSA under Five Eyes.',
   legal: 'UK Regulation of Investigatory Powers Act (RIPA)',
  },
  {
   name: 'BOUNDLESSINFORMANT',
   classification: 'TOP SECRET//SI//NOFORN',
   dateActive: '2012-present',
   description: 'NSA\'s internal analytics tool that tracked and visualized the total volume of metadata collected worldwide. Showed that the NSA collected 97 billion pieces of intelligence from computer networks worldwide in a single month (March 2013). Revealed the scale of collection was far greater than officials had admitted. The tool proved that Director of National Intelligence Clapper\'s denial of bulk collection was a deliberate lie, not a misunderstanding.',
   scope: 'Visualization of all NSA collection worldwide. 97 billion pieces of intelligence per month.',
   legal: 'Internal tool',
  },
  {
   name: 'Bulk Telephony Metadata Program (Section 215)',
   classification: 'TOP SECRET//SI//NOFORN',
   dateActive: '2006-2015',
   description: 'The NSA collected the telephone metadata (numbers called, call duration, location, time) of virtually every phone call made in the United States. Authorized under a secret interpretation of Section 215 of the USA PATRIOT Act by the FISA Court. The government argued that collecting all metadata was "relevant" to terrorism investigations because the entire haystack might contain a needle. The Second Circuit Court of Appeals ruled the program illegal in 2015. Officially ended by the USA FREEDOM Act.',
   scope: 'Metadata for all domestic phone calls in the United States. Hundreds of millions of Americans affected.',
   legal: 'Section 215 USA PATRIOT Act (later ruled illegal by Second Circuit)',
  },
  {
   name: 'CO-TRAVELER',
   classification: 'TOP SECRET//SI//NOFORN',
   dateActive: '2010-present',
   description: 'Program to track physical movements of people worldwide by collecting location data from cell phone towers and GPS. Collected 5 billion cell phone location records per day worldwide, enabling the NSA to track virtually any phone user\'s physical movements, identify associates by co-location patterns, and map social networks through physical proximity analysis.',
   scope: '5 billion cell phone location records per day worldwide.',
   legal: 'Executive Order 12333',
  },
  {
   name: 'DISHFIRE',
   classification: 'TOP SECRET//COMINT//NOFORN',
   dateActive: '2009-present',
   description: 'Bulk collection of SMS text messages worldwide. Collected nearly 200 million text messages per day from around the globe. A sister program called PREFER extracted contact information, financial transactions, travel plans, and location data from intercepted texts. Used by GCHQ to extract data from UK citizens\' text messages without warrants.',
   scope: '200 million text messages per day globally.',
   legal: 'Executive Order 12333, Five Eyes agreements',
  },
  {
   name: 'MYSTIC / SOMALGET',
   classification: 'TOP SECRET//SI//REL TO USA, FVEY',
   dateActive: '2009-present',
   description: 'Program to intercept and record the entire telephone system of foreign countries. SOMALGET was the component that recorded 100% of phone calls in at least two countries (the Bahamas and Afghanistan were confirmed), storing the audio for 30 days. Other countries were subject to metadata-only collection. Represented the first confirmed case of an intelligence agency recording an entire nation\'s phone calls.',
   scope: '100% of phone calls in multiple countries recorded and stored.',
   legal: 'Executive Order 12333',
  },
  {
   name: 'QUANTUM / FOXACID',
   classification: 'TOP SECRET//SI//REL TO USA, FVEY',
   dateActive: '2010-present',
   description: 'NSA\'s offensive hacking infrastructure. QUANTUM used "man-in-the-middle" attacks to redirect targets to FOXACID servers that automatically exploited browser vulnerabilities to implant malware. Used to hack into networks including the Belgian telecommunications provider Belgacom, OPEC, the Brazilian oil company Petrobras, and the EU\'s mission to the United Nations. Also targeted individual users of Tor, the anonymity network.',
   scope: 'Targeted attacks on individuals, corporations, governments, and international organizations worldwide.',
   legal: 'Executive Order 12333, Presidential Policy Directive 20',
  },
  {
   name: 'BULLRUN',
   classification: 'TOP SECRET STRAP 1',
   dateActive: '2010-present',
   description: 'Joint NSA-GCHQ-CSEC program to defeat encryption technologies worldwide. The NSA spent $250 million per year on efforts to influence technology companies to insert backdoors into commercial encryption products, weaken international encryption standards, and develop supercomputing capabilities to brute-force crack encrypted communications. Successfully compromised key encryption standards including the NIST Dual EC DRBG random number generator.',
   scope: 'All encrypted communications worldwide. Systematic weakening of global internet security.',
   legal: 'Classified presidential directive',
  },
  {
   name: 'FAIRVIEW',
   classification: 'TOP SECRET//SI//NOFORN',
   dateActive: '2003-present',
   description: 'Partnership between the NSA and AT&T to collect data from foreign telecommunications systems transiting AT&T infrastructure. AT&T provided the NSA with access to billions of emails and phone calls flowing through its network, including communications of US citizens. AT&T was paid tens of millions of dollars for its cooperation. The partnership was so close that AT&T employees held Top Secret clearances and worked directly in NSA facilities.',
   scope: 'Billions of communications transiting AT&T infrastructure. Domestic and international.',
   legal: 'Section 702 FISA, Executive Order 12333, FISA Court orders',
  },
  {
   name: 'STORMBREW',
   classification: 'TOP SECRET//SI//NOFORN',
   dateActive: '2001-present',
   description: 'Partnership with Verizon (and its predecessor MCI). Similar to FAIRVIEW but through Verizon\'s infrastructure. Provided the NSA with access to internet and telephone communications at key network chokepoints within the United States.',
   scope: 'Communications transiting Verizon/MCI infrastructure.',
   legal: 'FISA Court orders, Section 702',
  },
  {
   name: 'MARINA',
   classification: 'TOP SECRET//SI//NOFORN',
   dateActive: '2007-present',
   description: 'NSA\'s metadata database for internet communications. Stored internet metadata (email headers, IP addresses, browser fingerprints, login times) for up to a year. Used for "contact chaining" - mapping social networks of surveillance targets out to three "hops" from the original target, meaning a single suspect could result in surveillance of millions of connected people.',
   scope: 'Internet metadata for millions of users. Three-hop contact chaining exponentially expanded coverage.',
   legal: 'Section 215, Executive Order 12333',
  },
 ],

 // ============================
 // FIVE EYES ALLIANCE
 // ============================
 fiveEyes: {
  overview: 'The Five Eyes alliance (FVEY) is an intelligence-sharing partnership between the United States, United Kingdom, Canada, Australia, and New Zealand that dates back to a 1946 signals intelligence agreement (UKUSA). The Snowden documents revealed that the Five Eyes nations had systematized intelligence sharing to circumvent their own domestic surveillance laws. Each nation could spy on the others\' citizens and share the results, effectively nullifying constitutional protections. The alliance also maintained "Nine Eyes" (adding Denmark, France, the Netherlands, and Norway) and "Fourteen Eyes" (adding Germany, Belgium, Italy, Spain, and Sweden) partnerships for broader intelligence sharing.',
  members: [
   { nation: 'United States (NSA)', role: 'Senior partner. Operates the largest signals intelligence apparatus in history. Provides the bulk of collection infrastructure, funding, and analytics capabilities. Shares raw data with partner agencies.', programs: 'PRISM, XKeyscore, Upstream, MUSCULAR, STELLARWIND, BULLRUN, QUANTUM, FAIRVIEW, STORMBREW, MARINA, CO-TRAVELER, DISHFIRE, MYSTIC, BOUNDLESSINFORMANT' },
   { nation: 'United Kingdom (GCHQ)', role: 'Second-largest contributor. Operates Tempora, which taps over 200 undersea fiber-optic cables carrying transatlantic internet traffic. Provides the NSA with access to European communications. Operates from the Bude intercept station in Cornwall and Menwith Hill in Yorkshire (operated jointly with the NSA). Received at least $100 million from the NSA between 2010 and 2013.', programs: 'Tempora, MUSCULAR, BULLRUN, Karma Police, Black Hole, Edgehill' },
   { nation: 'Canada (CSE/CSEC)', role: 'Operates surveillance posts targeting Latin American and European communications. Collaborated on BULLRUN encryption-breaking efforts. Conducted surveillance on behalf of the NSA at communications summits including the 2010 G8/G20 meetings in Toronto.', programs: 'CSEC programs, BULLRUN support, G8/G20 surveillance' },
   { nation: 'Australia (ASD/DSD)', role: 'Key collection point for Asian-Pacific communications. Operated joint NSA-ASD facilities including Pine Gap in the Australian outback. Intercepted satellite and undersea cable communications throughout the Asia-Pacific region. Conducted surveillance on Indonesian President Yudhoyono and his wife.', programs: 'Pine Gap operations, XKEYSCORE deployments, Indonesian surveillance' },
   { nation: 'New Zealand (GCSB)', role: 'Smallest Five Eyes member. Operated Waihopai satellite interception station. Targeted Pacific Island nations and Asian communications. GCSB was caught illegally spying on journalist Nicky Hager and New Zealand citizens.', programs: 'Waihopai intercepts, Pacific surveillance' },
  ],
  significance: 'The Five Eyes arrangement allows each member nation to claim it does not spy on its own citizens; because a partner nation does it instead and shares the results. This mutual surveillance arrangement was designed specifically to circumvent domestic legal protections. The Snowden documents demonstrated that Five Eyes had evolved from a Cold War signals intelligence alliance into a global surveillance network with the capability to monitor the communications of virtually everyone on Earth.',
 },

 // ============================
 // CORPORATE COMPLICITY
 // ============================
 corporateComplicity: [
  { company: 'AT&T', role: 'Primary Telecom Partner (FAIRVIEW)', details: 'AT&T was the NSA\'s most valued corporate partner, providing unique access to a huge volume of international internet and phone traffic. AT&T employees held Top Secret security clearances. Whistleblower Mark Klein revealed Room 641A at AT&T\'s San Francisco facility, where a splitter copied all internet traffic to NSA equipment. AT&T was paid tens of millions of dollars and received retroactive legal immunity from Congress in 2008.', href: '/entities/corporations/att' },
  { company: 'Verizon', role: 'Bulk Metadata Provider (STORMBREW)', details: 'A secret FISA Court order (the first Snowden document published) compelled Verizon to hand over the metadata of ALL domestic phone calls on an "ongoing, daily basis." Verizon was one of the primary telecom partners in the STORMBREW program. Like AT&T, received retroactive immunity through the 2008 FISA Amendments Act.', href: '/entities/corporations/verizon' },
  { company: 'Microsoft', role: 'First PRISM Partner (September 2007)', details: 'The first company to join the PRISM program. NSA documents showed Microsoft helped the agency circumvent encryption on Outlook.com, provided pre-encryption access to Outlook email, collaborated on Skype interception capabilities, and gave the NSA access to SkyDrive (now OneDrive) cloud storage.', href: '/entities/corporations/microsoft' },
  { company: 'Google', role: 'PRISM Partner and MUSCULAR Victim', details: 'Joined PRISM in 2009, providing the NSA with access to Gmail, Google Drive, Google Maps, and other services. Simultaneously, the NSA and GCHQ tapped into Google\'s private data center links without Google\'s knowledge through the MUSCULAR program. Google was both a willing PRISM partner and an unwilling MUSCULAR victim.', href: '/entities/corporations/google' },
  { company: 'Facebook (Meta)', role: 'PRISM Partner (June 2009)', details: 'Joined PRISM in 2009. The NSA could access Facebook messages, chat, video, photos, stored data, and social networking details. With over 2 billion users worldwide, Facebook provided the NSA with unprecedented access to the social connections and private communications of a significant portion of the global population.', href: '/entities/corporations/facebook' },
  { company: 'Apple', role: 'PRISM Partner (October 2012)', details: 'The last major company to join PRISM. Provided NSA access to iMessage, email, photos, and other data stored on Apple servers. NSA documents described Apple as having the most favorable data collection setup, with deep access to iPhone user data. Apple later became a vocal opponent of government backdoors.', href: '/entities/corporations/apple' },
  { company: 'Yahoo', role: 'PRISM Partner, MUSCULAR Victim, Forced Compliance', details: 'Joined PRISM early. Yahoo challenged the program legally in the FISA Court in 2008 and lost; the court threatened Yahoo with $250,000/day fines for noncompliance. Like Google, Yahoo was also tapped without its knowledge through the MUSCULAR program.', href: '/entities/corporations/yahoo' },
  { company: 'RSA Security', role: 'Encryption Backdoor Partner (BULLRUN)', details: 'Reuters reported that the NSA paid RSA Security $10 million to make the compromised Dual EC DRBG algorithm the default random number generator in its widely-used encryption toolkit. This effectively placed a backdoor in encryption products used by corporations and governments worldwide.', href: '/entities/corporations/rsa-security' },
  { company: 'Booz Allen Hamilton', role: 'NSA\'s Largest Contractor, Snowden\'s Employer', details: 'One of the NSA\'s most important private contractors, with over $1.3 billion in annual intelligence contracts. Employed Edward Snowden as a systems administrator at the NSA\'s Hawaii facility. 70% of the US intelligence budget goes to private contractors. Former NSA Director Mike McConnell became Booz Allen\'s vice chairman.', href: '/entities/corporations/booz-allen-hamilton' },
  { company: 'Palantir Technologies', role: 'Intelligence Analytics Provider', details: 'Co-founded by Peter Thiel with CIA venture capital funding (In-Q-Tel). Provided data analytics platforms to the NSA and other intelligence agencies. Palantir\'s software was designed specifically to integrate and analyze the massive datasets collected by surveillance programs.', href: '/entities/corporations/palantir' },
 ],

 // ============================
 // KEY FIGURES
 // ============================
 keyFigures: [
  // Intelligence Officials
  { name: 'Edward Snowden', role: 'Former NSA contractor who leaked tens of thousands of classified documents revealing global surveillance programs in June 2013. Worked as a systems administrator at the NSA\'s Hawaii Regional Operations Center for Booz Allen Hamilton. Charged under the Espionage Act, fled to Hong Kong then Russia. Granted Russian citizenship. Pardoned by President Biden in 2024.', status: 'Pardoned (2025)', href: '/entities/individuals/edward-snowden' },
  { name: 'James Clapper', role: 'Director of National Intelligence (2010-2017). On March 12, 2013, told Senator Ron Wyden under oath that the NSA does "not wittingly" collect data on millions of Americans - a statement proven false by the first Snowden document. Later called it the "least untruthful" answer. Despite clear perjury, never prosecuted.', status: 'No Charges Filed', href: '/entities/individuals/james-clapper' },
  { name: 'Keith Alexander', role: 'NSA Director (2005-2014) and Commander of U.S. Cyber Command. Oversaw the massive expansion of surveillance programs including PRISM, XKeyscore, and bulk metadata collection. Known as "Alexander the Geek" for his aggressive pursuit of total information awareness. Built a $1.2 billion data center in Utah. After retirement, offered cybersecurity consulting at $1 million per month.', status: 'No Charges Filed', href: '/entities/individuals/keith-alexander' },
  { name: 'Michael Hayden', role: 'NSA Director (1999-2005), CIA Director (2006-2009). Initiated the STELLARWIND warrantless surveillance program under Bush via secret presidential authorization. Flew to New York to personally pressure the New York Times not to publish the wiretapping story. Publicly defended mass surveillance and attacked whistleblowers.', status: 'No Charges Filed', href: '/entities/individuals/michael-hayden' },
  { name: 'Michael Rogers', role: 'NSA Director (2014-2018) and Commander of U.S. Cyber Command. Oversaw the post-Snowden "reform" era but internal documents showed collection capabilities continued to expand. Authorized continued use of Section 702 "backdoor searches" of Americans\' data.', status: 'Retired', href: '/entities/individuals/michael-rogers' },

  // Presidents
  { name: 'George W. Bush', role: '43rd President. Authorized the STELLARWIND warrantless surveillance program via secret executive order on October 4, 2001, just 23 days after 9/11. The program operated with no statutory authorization and no meaningful judicial oversight. Signed legislation granting retroactive legal immunity to telecom companies that participated.', status: 'Term Ended', href: '/entities/individuals/george-w-bush' },
  { name: 'Barack Obama', role: '44th President. As a senator, voted for the 2008 FISA Amendments Act granting telecom immunity despite campaigning against it. As president, dramatically expanded NSA surveillance. Defended the programs after Snowden, claiming "nobody is listening to your phone calls." Prosecuted more whistleblowers under the Espionage Act than all previous presidents combined (eight cases).', status: 'Term Ended', href: '/entities/individuals/barack-obama' },
  { name: 'Donald Trump', role: '45th President. Signed the FISA Section 702 reauthorization in January 2018 despite previously tweeting that the FISA process was used to "surveil and abuse the Trump campaign." Continued all major NSA collection programs without meaningful reform.', status: 'Term Ended', href: '/entities/individuals/donald-trump' },

  // DOJ / FBI
  { name: 'James Comey', role: 'Deputy Attorney General (2003-2005), later FBI Director (2013-2017). As DAG, led the dramatic 2004 hospital confrontation, rushing to AG John Ashcroft\'s bedside to prevent White House Counsel Alberto Gonzales from obtaining reauthorization of STELLARWIND. Threatened resignation along with Mueller. Despite this stand, later oversaw FBI use of NSA-collected data as FBI Director.', status: 'Dismissed 2017', href: '/entities/individuals/james-comey' },
  { name: 'Robert Mueller', role: 'FBI Director (2001-2013). Along with Comey, threatened resignation over STELLARWIND in 2004. Despite this, the FBI under Mueller\'s leadership used NSA surveillance data extensively and conducted tens of thousands of warrantless "backdoor searches" of NSA-collected data.', status: 'Retired', href: '/entities/individuals/robert-mueller' },
  { name: 'Eric Holder', role: 'Attorney General (2009-2015). Oversaw the DOJ\'s aggressive prosecution of whistleblowers and leakers. Authorized the continued use of bulk surveillance programs. Declined to prosecute James Clapper for perjury.', status: 'Retired', href: '/entities/individuals/eric-holder' },
  { name: 'Alberto Gonzales', role: 'White House Counsel (2001-2005), Attorney General (2005-2007). Drafted the legal justifications for STELLARWIND. Went to AG John Ashcroft\'s hospital room to seek reauthorization after DOJ officials refused.', status: 'Resigned', href: '/entities/individuals/alberto-gonzales' },
  { name: 'John Yoo', role: 'Deputy Assistant AG in the Office of Legal Counsel (2001-2003). Authored the original legal memoranda authorizing STELLARWIND, concluding the president had inherent authority to order warrantless surveillance. His legal opinions were later withdrawn by the DOJ.', status: 'UC Berkeley Professor', href: '/entities/individuals/john-yoo' },

  // Whistleblowers (Pre-Snowden)
  { name: 'William Binney', role: 'Former NSA technical director (30+ years) and early whistleblower who warned about mass domestic surveillance years before Snowden. Co-created the ThinThread program, a privacy-protecting surveillance tool the NSA rejected in favor of the more invasive Trailblazer. Home raided by FBI in 2007. Has called NSA surveillance "better than anything that the KGB, the Stasi, or the Gestapo ever had."', status: 'Whistleblower', href: '/entities/individuals/william-binney' },
  { name: 'Thomas Drake', role: 'Former NSA senior executive who disclosed waste, fraud, and illegal surveillance to a reporter through proper channels after internal complaints were ignored. Prosecuted under the Espionage Act in a case the judge called "unconscionable." All felony charges dropped; pled to a minor misdemeanor. Lost his career, pension, and savings.', status: 'Charges Dropped', href: '/entities/individuals/thomas-drake' },
  { name: 'Mark Klein', role: 'AT&T technician who discovered and exposed Room 641A at AT&T\'s San Francisco switching center in 2006. Observed the NSA installing a fiber-optic splitter that copied all internet traffic to a secret room. Provided the first physical evidence of the NSA\'s domestic internet surveillance infrastructure.', status: 'Retired Whistleblower', href: '/entities/individuals/mark-klein' },
  { name: 'Diane Roark', role: 'Former senior staffer on the House Intelligence Committee. Attempted to raise concerns about NSA surveillance through official channels from 2001 to 2006. Home raided by FBI in 2007. Never charged but was effectively silenced.', status: 'Whistleblower', href: '/entities/individuals/diane-roark' },
  { name: 'J. Kirk Wiebe', role: 'Former NSA senior analyst and colleague of William Binney. Co-filed complaints about illegal surveillance with the DOD Inspector General. Home raided by FBI in 2007. Part of the "NSA Four" who tried to expose unconstitutional surveillance through proper channels and were punished for it.', status: 'Whistleblower', href: '/entities/individuals/kirk-wiebe' },
  { name: 'Russell Tice', role: 'Former NSA intelligence analyst who went public in 2005, telling Congress the NSA was conducting illegal surveillance of US citizens. Claimed the NSA targeted journalists, military officers, and members of Congress for surveillance. Had clearance revoked and was fired.', status: 'Whistleblower', href: '/entities/individuals/russell-tice' },

  // Journalists
  { name: 'Glenn Greenwald', role: 'Journalist at The Guardian who received and published the Snowden documents, breaking the story beginning June 5, 2013. Co-founded The Intercept in 2014. Won the Pulitzer Prize for Public Service.', status: 'Active Journalist', href: '/entities/individuals/glenn-greenwald' },
  { name: 'Laura Poitras', role: 'Documentary filmmaker who served as Snowden\'s initial encrypted contact. Directed the Oscar-winning documentary Citizenfour (2014), capturing the Hong Kong meetings in real time. Had been on DHS watch lists for years before the Snowden contact.', status: 'Active Filmmaker', href: '/entities/individuals/laura-poitras' },
  { name: 'Barton Gellman', role: 'Washington Post journalist who published key revelations including PRISM, MUSCULAR, and bulk contact list collection. Won the Pulitzer Prize. Later published "Dark Mirror: Edward Snowden and the American Surveillance State."', status: 'Active Journalist', href: '/entities/individuals/barton-gellman' },
  { name: 'James Risen', role: 'New York Times reporter who co-wrote the original 2005 warrantless wiretapping story. The Times delayed publication for over a year at the Bush administration\'s request. Risen fought years of DOJ subpoenas demanding he reveal his sources, facing prison.', status: 'Active Journalist', href: '/entities/individuals/james-risen' },
  { name: 'Ewen MacAskill', role: 'The Guardian\'s Washington bureau chief who traveled to Hong Kong with Greenwald and Poitras to meet Snowden. Won the Pulitzer Prize alongside Greenwald and Gellman.', status: 'Active Journalist', href: '/entities/individuals/ewen-macaskill' },

  // Congressional Figures
  { name: 'Ron Wyden', role: 'U.S. Senator (D-OR) and Senate Intelligence Committee member. Asked the direct question to Clapper that elicited perjury. Knew the answer was false but was legally prohibited from disclosing what he knew. For years dropped public hints urging Americans to be "very alarmed" about secret legal interpretations.', status: 'Active Senator', href: '/entities/individuals/ron-wyden' },
  { name: 'Dianne Feinstein', role: 'Chair of the Senate Intelligence Committee (2009-2015). Initially defended NSA programs after Snowden, calling phone metadata collection "not surveillance." Later turned against the CIA when she discovered it spied on Senate Intelligence Committee staff computers.', status: 'Deceased (2023)', href: '/entities/individuals/dianne-feinstein' },
  { name: 'Patrick Leahy', role: 'Senate Judiciary Committee Chairman who authored the USA FREEDOM Act. One of the strongest congressional voices for surveillance reform.', status: 'Retired', href: '/entities/individuals/patrick-leahy' },
  { name: 'James Sensenbrenner', role: 'Republican congressman who originally authored the USA PATRIOT Act. After Snowden, publicly stated the NSA\'s interpretation of Section 215 was never intended by Congress. Co-authored the USA FREEDOM Act to rein in the surveillance he had inadvertently enabled.', status: 'Retired', href: '/entities/individuals/james-sensenbrenner' },

  // FISA Court
  { name: 'John Bates', role: 'FISA Court Judge who authored a critical 2011 opinion finding the NSA had been systematically violating the Fourth Amendment by collecting tens of thousands of purely domestic communications. Despite finding constitutional violations, the court ultimately approved a modified version of the program.', status: 'Senior Judge', href: '/entities/individuals/john-bates' },
  { name: 'Reggie Walton', role: 'FISA Court Presiding Judge who in 2009 found the NSA had been regularly and systematically violating the court\'s orders on metadata collection. Despite finding "institutional lack of candor" by the NSA, the court continued approving surveillance requests.', status: 'Senior Judge', href: '/entities/individuals/reggie-walton' },
 ],

 // ============================
 // INSTITUTIONAL CONNECTIONS
 // ============================
 institutionalConnections: [
  { entity: 'National Security Agency (NSA)', role: 'Primary Operator', details: 'The world\'s largest signals intelligence organization, headquartered at Fort Meade, Maryland with approximately 30,000-40,000 employees and an estimated annual budget of $10.8 billion (2013, leaked). Constructed the $1.5 billion Utah Data Center in Bluffdale, Utah to store intercepted data. Before Snowden, operated with virtually no public oversight.', href: '/entities/agencies/nsa' },
  { entity: 'FBI', role: 'Domestic Surveillance Consumer', details: 'Primary consumer of NSA-collected data for domestic law enforcement. Conducted over 3.4 million warrantless "backdoor searches" of NSA databases in 2021 alone, searching for information on Americans using data collected under foreign intelligence authorities.', href: '/entities/agencies/fbi' },
  { entity: 'CIA', role: 'Intelligence Consumer and Parallel Collector', details: 'Received NSA-collected data and maintained its own bulk collection programs. The CIA maintained a separate bulk data collection program not disclosed until 2022, after the PCLOB discovered it during routine review.', href: '/entities/agencies/cia' },
  { entity: 'GCHQ (UK)', role: 'Five Eyes Partner, Tempora Operator', details: 'Britain\'s GCHQ was the NSA\'s most important international partner. Operated Tempora, tapping 200+ undersea fiber-optic cables. Received over $100 million in NSA funding between 2010-2013. The UK partnership allowed the NSA to circumvent legal restrictions by having GCHQ collect data on American citizens.', href: '/entities/agencies/gchq' },
  { entity: 'FISA Court (FISC)', role: 'Rubber-Stamp Oversight', details: 'Approved 33,942 warrants while denying only 11 between 1979-2012. Judges appointed solely by the Chief Justice. Heard only the government\'s arguments with no adversarial process. Was systematically deceived by the NSA about the scope of collection programs.', href: '/entities/agencies/fisc' },
  { entity: 'Department of Justice', role: 'Legal Enabler and Whistleblower Prosecutor', details: 'Provided the legal opinions authorizing warrantless surveillance, declined to prosecute Clapper for perjury, and aggressively prosecuted whistleblowers. Invoked state secrets to block every major legal challenge. Simultaneously the legal shield and enforcement arm of the surveillance state.', href: '/entities/agencies/doj' },
  { entity: 'Privacy and Civil Liberties Oversight Board (PCLOB)', role: 'Belated Oversight', details: 'Independent board established in 2004 but not fully operational until 2013. In January 2014, issued a landmark report finding the Section 215 bulk metadata program was illegal, had not prevented a single terrorist attack, and should be terminated. Found the "54 terrorist plots" claim was "not supported by the evidence."', href: '/entities/agencies/pclob' },
 ],

 // ============================
 // IMPACT & CONSEQUENCES
 // ============================
 impact: [
  'Over 2 billion people worldwide had their communications intercepted, stored, and analyzed by the NSA and its Five Eyes partners. The scale of surveillance was unprecedented in human history.',
  'The FISA Court approved the collection of phone records for every domestic call in the United States for nearly a decade, affecting over 300 million Americans who were never suspected of any crime.',
  'The NSA collected and stored 200 million text messages per day worldwide through the DISHFIRE program, and 5 billion cell phone location records per day through CO-TRAVELER.',
  'Studies documented a measurable "chilling effect" on free speech. A PEN American Center survey found 28% of writers had curtailed social media activities, and 24% had deliberately avoided certain topics in phone or email conversations. Internet searches for terrorism-related terms dropped significantly after the Snowden revelations.',
  'The technology industry suffered an estimated $35-180 billion in lost overseas business as foreign customers abandoned US cloud services due to NSA backdoor concerns.',
  'The NSA\'s deliberate weakening of encryption standards through BULLRUN ($250 million/year) made the entire internet less secure, creating vulnerabilities criminals and hostile governments could also exploit.',
  'All 15 pre-Snowden whistleblowers who tried to expose surveillance through official channels were investigated, raided, prosecuted, or fired; while the officials who authorized illegal surveillance faced no consequences.',
  'Diplomatic relations with key allies were severely damaged. Germany expelled the CIA station chief in Berlin, Brazil cancelled a state visit, and multiple countries began routing internet traffic to avoid US infrastructure.',
  'Despite revelations of systematic illegality, only modest legislative reform resulted (the USA FREEDOM Act), leaving the core surveillance architecture; including Section 702, Executive Order 12333, and Five Eyes sharing; fully intact.',
 ],

 // ============================
 // TIMELINE
 // ============================
 timeline: [
  { date: 'October 4, 2001', event: 'President Bush secretly authorizes STELLARWIND via classified executive order, just 23 days after 9/11. The program operates with no statutory authorization and no FISA Court oversight.' },
  { date: 'January 2004', event: 'DOJ concludes parts of STELLARWIND are illegal. Deputy AG Comey and FBI Director Mueller threaten mass resignation. White House Counsel Gonzales goes to AG Ashcroft\'s hospital room to seek reauthorization. The program is briefly modified.' },
  { date: 'December 16, 2005', event: 'The New York Times publishes "Bush Lets U.S. Spy on Callers Without Courts," revealing the warrantless wiretapping program after delaying publication for over a year at the administration\'s request.' },
  { date: 'January 2006', event: 'AT&T whistleblower Mark Klein discovers Room 641A; a secret room where the NSA installed equipment to copy all internet traffic at AT&T\'s San Francisco facility.' },
  { date: 'May 2006', event: 'USA Today reports the NSA has been collecting phone call records of tens of millions of Americans from AT&T, Verizon, and BellSouth; the first public evidence of bulk metadata collection.' },
  { date: 'July 2007', event: 'FBI raids the homes of Thomas Drake, William Binney, Kirk Wiebe, Ed Loomis, and Diane Roark; all of whom filed complaints through official channels about NSA illegality.' },
  { date: 'July 10, 2008', event: 'Congress passes the FISA Amendments Act, granting retroactive legal immunity to telecom companies. Barack Obama, despite campaign promises, votes for the bill as a senator.' },
  { date: 'April 2010', event: 'Thomas Drake indicted under the Espionage Act. All felony charges later dropped. The judge calls the prosecution "unconscionable."' },
  { date: 'October 2011', event: 'FISA Court Judge John Bates issues an 86-page ruling finding the NSA systematically violated the Fourth Amendment. The opinion remains classified until 2013.' },
  { date: 'March 12, 2013', event: 'Senator Wyden asks DNI Clapper: "Does the NSA collect any type of data at all on millions of Americans?" Clapper responds: "No, sir. Not wittingly." The answer is a lie. Wyden had given Clapper the question in advance.' },
  { date: 'June 5, 2013', event: 'The Guardian publishes the first Snowden document: a secret FISA Court order compelling Verizon to hand over the metadata of ALL domestic phone calls. The era of mass surveillance denial ends.' },
  { date: 'June 6, 2013', event: 'The Guardian and Washington Post simultaneously reveal PRISM. The companies initially deny knowledge.' },
  { date: 'June 9, 2013', event: 'Edward Snowden publicly identifies himself in a video interview from Hong Kong: "I don\'t want to live in a world where everything that I say, everything I do, everyone I talk to, every expression of creativity or love or friendship is recorded."' },
  { date: 'June 14, 2013', event: 'DOJ charges Snowden with two counts of violating the Espionage Act and theft of government property.' },
  { date: 'June 23, 2013', event: 'Snowden leaves Hong Kong for Moscow. The US revokes his passport while in transit, stranding him at Sheremetyevo Airport for 40 days.' },
  { date: 'July 2013', event: 'Documents reveal XKeyscore and BOUNDLESSINFORMANT, showing the NSA collected 97 billion pieces of intelligence in a single month.' },
  { date: 'August 1, 2013', event: 'Russia grants Snowden temporary asylum.' },
  { date: 'September 2013', event: 'BULLRUN revealed: the NSA spent $250 million per year to weaken global encryption, insert backdoors, and undermine internet security worldwide.' },
  { date: 'October 2013', event: 'NSA monitored phone calls of 35 world leaders, including German Chancellor Angela Merkel. Merkel calls Obama: "Spying between friends is never acceptable." Germany expels the CIA station chief.' },
  { date: 'October 30, 2013', event: 'Washington Post reveals MUSCULAR; NSA-GCHQ tapped Google and Yahoo data center links. An NSA slide shows a hand-drawn smiley face next to the interception point.' },
  { date: 'December 2013', event: 'Federal Judge Richard Leon rules the metadata program "almost Orwellian" and likely unconstitutional: "I cannot imagine a more indiscriminate and arbitrary invasion."' },
  { date: 'January 17, 2014', event: 'President Obama delivers a speech on surveillance reform, announcing modest changes while defending the core surveillance architecture.' },
  { date: 'January 23, 2014', event: 'The PCLOB finds the Section 215 program was illegal, had "not proven useful in identifying unknown terrorism suspects," and should be ended.' },
  { date: 'May 7, 2015', event: 'Second Circuit rules in ACLU v. Clapper that bulk metadata collection was illegal, far exceeding what Congress authorized.' },
  { date: 'June 2, 2015', event: 'USA FREEDOM Act signed, ending bulk metadata collection but preserving Section 702 and Executive Order 12333 programs.' },
  { date: 'January 2018', event: 'Congress reauthorizes Section 702 for six years. Amendments requiring warrants for "backdoor searches" of Americans\' data are defeated.' },
  { date: 'September 2, 2020', event: 'Ninth Circuit rules in United States v. Moalin that the NSA\'s mass surveillance was illegal and likely unconstitutional.' },
  { date: 'February 2022', event: 'PCLOB reveals the CIA maintained its own secret bulk data collection program on Americans, separate from the NSA\'s, unauthorized by Congress or FISA Court.' },
  { date: 'April 2024', event: 'Congress reauthorizes and expands Section 702, potentially covering data centers and cloud services. Privacy advocates call it the largest surveillance expansion since the original PATRIOT Act.' },
  { date: 'December 2024', event: 'President Biden pardons Edward Snowden, acknowledging the public interest served by his disclosures; 11 years after he was charged and after multiple courts ruled the programs he exposed were illegal.' },
 ],

 // ============================
 // LEGAL OUTCOMES
 // ============================
 legalOutcomes: [
  { defendant: 'Edward Snowden', charge: 'Two counts Espionage Act (18 U.S.C. 793), theft of government property', outcome: 'Charged June 2013. Fled to Hong Kong, then Russia. Pardoned by President Biden in December 2024 after multiple courts ruled the programs he exposed were illegal.' },
  { defendant: 'ACLU v. Clapper (2015)', charge: 'Challenge to bulk metadata collection under Section 215', outcome: 'Second Circuit ruled the program was illegal and "exceeded the scope of what Congress has authorized." Led to the USA FREEDOM Act.' },
  { defendant: 'Jewel v. NSA (2008-present)', charge: 'Class-action challenging mass interception via AT&T facilities', outcome: 'Repeatedly stalled by state secrets privilege. Remains unresolved as of 2025.' },
  { defendant: 'United States v. Moalin (2020)', charge: 'Evidence obtained through NSA mass surveillance', outcome: 'Ninth Circuit ruled bulk metadata program was illegal and likely violated the Fourth Amendment. Convictions upheld under "good faith" exception.' },
  { defendant: 'Clapper v. Amnesty Int\'l (2013)', charge: 'Challenge to Section 702 surveillance', outcome: 'Supreme Court ruled 5-4 plaintiffs lacked standing. Snowden revelations months later proved their fears entirely justified.' },
  { defendant: 'Klayman v. Obama (2013)', charge: 'Challenge to bulk metadata collection', outcome: 'Judge Leon ruled program "almost certainly" unconstitutional and "almost Orwellian." Injunction stayed pending appeal.' },
  { defendant: 'James Clapper', charge: 'Perjury (18 U.S.C. 1001)', outcome: 'DOJ declined to prosecute despite irrefutable evidence. Clapper continued serving as DNI until January 2017.' },
  { defendant: 'Thomas Drake', charge: 'Espionage Act charges for disclosing NSA waste and illegality', outcome: 'All ten felony charges dropped. Pled guilty to a misdemeanor. Judge called prosecution "unconscionable." Lost career, pension, savings.' },
  { defendant: 'Hepting v. AT&T (2006)', charge: 'Class-action challenging AT&T\'s cooperation with NSA', outcome: 'Dismissed after Congress passed retroactive telecom immunity in the 2008 FISA Amendments Act.' },
  { defendant: 'In re Directives to Yahoo (2008)', charge: 'Yahoo\'s challenge to PRISM compulsion order', outcome: 'FISA Court upheld order and threatened $250,000/day fines for noncompliance. Revealed companies were forced to participate.' },
  { defendant: 'USA FREEDOM Act (2015)', charge: 'Legislative reform of surveillance authorities', outcome: 'Ended bulk metadata collection. Left Section 702, EO 12333, and Five Eyes sharing intact. No accountability for past illegality.' },
 ],

 // ============================
 // CHARGES & STATUTES
 // ============================
 charges: [
  { statute: 'U.S. Constitution, Fourth Amendment', description: 'Unreasonable search and seizure. The mass collection of phone records, emails, internet activity, location data, and text messages of hundreds of millions of Americans without individualized probable cause or warrants. Multiple federal courts subsequently ruled these programs violated the Fourth Amendment.', count: 'Systemic violation; billions of records collected. 300+ million Americans affected.' },
  { statute: '50 U.S.C. 1809: FISA Violations', description: 'Conducting electronic surveillance not authorized by statute. Multiple NSA programs operated outside the scope of any lawful authorization, including STELLARWIND which had no statutory basis. The FISA Court itself found the NSA repeatedly violated even the permissive orders it had issued.', count: 'Thousands of violations per year. 2,776 in one 12-month period alone.' },
  { statute: '18 U.S.C. 1001: False Statements (Clapper Perjury)', description: 'Making materially false statements to Congress. DNI Clapper denied under oath that the NSA collected data on millions of Americans. He was given the question in advance and chose not to correct the record.', count: '1 documented instance; no prosecution.' },
  { statute: '18 U.S.C. 2511: Wiretap Act Violations', description: 'Intentional interception of communications without lawful authorization. MUSCULAR tapped private fiber-optic cables without court orders. Upstream Collection intercepted content transiting internet backbone infrastructure.', count: 'Millions of communications intercepted daily.' },
  { statute: '50 U.S.C. 1881a: Section 702 Abuse', description: 'Using foreign intelligence authority to conduct warrantless "backdoor searches" of Americans\' communications. The FBI alone conducted 3.4 million such searches in 2021.', count: 'Millions of warrantless backdoor searches. 3.4 million by FBI in 2021.' },
  { statute: 'Executive Order 12333 Overreach', description: 'Using executive authority for overseas surveillance circumventing statutory protections; tapping data centers (MUSCULAR), recording entire countries\' calls (MYSTIC/SOMALGET), collecting 5 billion location records per day (CO-TRAVELER).', count: 'Global-scale operations affecting billions of people.' },
  { statute: '18 U.S.C. 241: Conspiracy Against Rights', description: 'Conspiracy to deprive citizens of constitutional rights. Senior officials designed, implemented, expanded, and concealed programs they knew violated the Fourth Amendment, then used classification to prevent judicial review and prosecuted those who tried to expose the violations.', count: 'Coordinated effort across NSA, CIA, FBI, DOJ, and White House spanning four administrations.' },
  { statute: 'First Amendment Violations: Chilling Effect', description: 'Mass surveillance created documented chilling effects on free speech, press, and association. The prosecution of sources under the Espionage Act compounded the effect.', count: 'Systemic. 28% of writers curtailed activity. Measurable self-censorship documented.' },
  { statute: '18 U.S.C. 1505: Obstruction of Congressional Proceedings', description: 'Clapper\'s false testimony obstructed congressional oversight. Congress cannot perform its constitutional function when intelligence chiefs lie under oath about programs being overseen.', count: '1 documented instance; not prosecuted.' },
 ],

 // ============================
 // SOURCES
 // ============================
 sources: [
  { title: 'NSA Files Decoded: The Guardian (Interactive)', url: 'https://www.theguardian.com/world/interactive/2013/nov/01/snowden-nsa-files-surveillance-revelations-decoded', date: 'November 2013' },
  { title: 'NSA PRISM Program Slides: The Guardian', url: 'https://www.theguardian.com/world/2013/jun/06/us-tech-giants-nsa-data', date: 'June 6, 2013' },
  { title: 'ACLU v. Clapper: Second Circuit Opinion', url: 'https://www.aclu.org/cases/aclu-v-clapper', date: 'May 7, 2015' },
  { title: 'NSA Inspector General Report on STELLARWIND (Declassified)', url: 'https://www.theguardian.com/world/interactive/2013/jun/27/nsa-inspector-general-report-document-data-collection', date: 'March 2009' },
  { title: 'Citizenfour (Academy Award-Winning Documentary)', url: 'https://citizenfourfilm.com/', date: '2014' },
  { title: 'USA FREEDOM Act: Full Text (Congress.gov)', url: 'https://www.congress.gov/bill/114th-congress/house-bill/2048', date: 'June 2, 2015' },
  { title: 'NSA Collected Americans\' Phone Records in Bulk - Washington Post', url: 'https://www.washingtonpost.com/investigations/us-intelligence-mining-data-from-nine-us-internet-companies-in-broad-secret-program/2013/06/06/3a0c0da8-cebf-11e2-8845-d970ccb04497_story.html', date: 'June 6, 2013' },
  { title: 'Clapper Senate Testimony Video: C-SPAN', url: 'https://www.c-span.org/video/?c4439580/user-clip-james-clapper-testimony', date: 'March 12, 2013' },
  { title: 'United States v. Moalin: Ninth Circuit Opinion', url: 'https://www.eff.org/cases/jewel', date: 'September 2, 2020' },
  { title: 'XKeyscore Presentation: Full Document (The Guardian)', url: 'https://www.theguardian.com/world/2013/jul/31/nsa-top-secret-program-online-data', date: 'July 31, 2013' },
  { title: 'PCLOB Section 215 Report', url: 'https://www.pclob.gov/library/215-Report_on_the_Telephone_Records_Program.pdf', date: 'January 23, 2014' },
  { title: 'Bush Lets U.S. Spy on Callers Without Courts: New York Times', url: 'https://www.nytimes.com/2005/12/16/politics/bush-lets-us-spy-on-callers-without-courts.html', date: 'December 16, 2005' },
  { title: 'NSA Reaches Into the Past to Replay Phone Calls: Washington Post', url: 'https://www.washingtonpost.com/world/national-security/nsa-surveillance-program-reaches-into-the-past-to-retrieve-replay-phone-calls/2014/03/18/226d2646-ade9-11e3-a49e-76adc9210f19_story.html', date: 'March 18, 2014' },
  { title: 'NSA Collects Millions of Text Messages Daily: The Guardian', url: 'https://www.theguardian.com/world/2014/jan/16/nsa-collects-millions-text-messages-daily-untargeted-global-sweep', date: 'January 16, 2014' },
  { title: 'MUSCULAR: NSA Taps Google and Yahoo Data Centers: Washington Post', url: 'https://www.washingtonpost.com/world/national-security/nsa-infiltrates-links-to-yahoo-google-data-centers-worldwide-snowden-documents-say/2013/10/30/e51d661e-4166-11e3-8b74-d89d714ca4dd_story.html', date: 'October 30, 2013' },
  { title: 'AT&T Helped NSA Spy on Internet on a Vast Scale: New York Times', url: 'https://www.nytimes.com/2015/08/16/us/politics/att-helped-nsa-spy-on-an-array-of-internet-traffic.html', date: 'August 15, 2015' },
  { title: 'NSA $250M Program to Defeat Encryption (BULLRUN): The Guardian', url: 'https://www.theguardian.com/world/2013/sep/05/nsa-gchq-encryption-codes-security', date: 'September 5, 2013' },
  { title: 'NSA Tracking Cellphone Locations Worldwide: Washington Post', url: 'https://www.washingtonpost.com/world/national-security/nsa-tracking-cellphone-locations-worldwide-snowden-documents-show/2013/12/04/5492873a-5cf2-11e3-bc56-c6ca94801fac_story.html', date: 'December 4, 2013' },
  { title: 'Dark Mirror: Barton Gellman (Book)', url: 'https://www.penguinrandomhouse.com/books/316095/dark-mirror-by-barton-gellman/', date: '2020' },
  { title: 'No Place to Hide: Glenn Greenwald (Book)', url: 'https://us.macmillan.com/books/9781627790734/noplacetohide', date: 'May 2014' },
  { title: 'Permanent Record: Edward Snowden (Memoir)', url: 'https://us.macmillan.com/books/9781250237231/permanentrecord', date: 'September 2019' },
  { title: 'Jewel v. NSA: Electronic Frontier Foundation', url: 'https://www.eff.org/cases/jewel', date: 'Ongoing' },
  { title: 'FISA Court Opinions (Declassified): DNI', url: 'https://www.dni.gov/index.php/ic-legal-reference-book/fisa-court-orders', date: 'Various' },
  { title: 'The NSA Report: Liberty and Security: President\'s Review Group', url: 'https://obamawhitehouse.archives.gov/sites/default/files/docs/2013-12-12_rg_final_report.pdf', date: 'December 12, 2013' },
 ],
};

export default function NSAMassSurveillancePage() {
 const severityColors: Record<string, string> = { critical: 'border-blood-500/30 bg-blood-500/20 text-blood-400', high: 'border-orange-500/30 bg-orange-500/20 text-orange-400', medium: 'border-yellow-500/30 bg-yellow-500/20 text-yellow-400', low: 'border-blue-500/30 bg-blue-500/20 text-blue-400' };

 return (
  <div className="min-h-screen pt-20 lg:pt-24 pb-16">
   <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

    {/* Back Link */}
    <Link href="/investigations" className="inline-flex items-center gap-2 text-zinc-400 hover:text-blood-500 transition-colors mb-6 pt-4">
     <ArrowLeft className="w-4 h-4" /> Back to Investigations
    </Link>

    {/* Header */}
    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="border-2 border-blood-800/60 bg-black/80 p-6 lg:p-8 mb-8">
     <div className="flex items-center gap-3 mb-4">
      <span className={`px-3 py-1 text-xs font-bold uppercase border ${severityColors[investigation.severity]}`}>{investigation.severity}</span>
      <span className="px-3 py-1 text-xs font-bold uppercase border border-zinc-500/30 bg-zinc-500/20 text-zinc-400">{investigation.status}</span>
     </div>
     <h1 className="text-3xl lg:text-4xl font-black glass-text uppercase tracking-wider mb-2"><GlitchText text={investigation.title} /></h1>
     <p className="text-lg text-blood-500 font-bold mb-4">{investigation.subtitle}</p>
     <p className="text-zinc-400 leading-relaxed">{investigation.summary}</p>
    </motion.div>

    {/* The Cover-Up */}
    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="glass-card p-6 mb-8 border-l-4 border-blood-600">
     <h2 className="text-xl font-bold glass-text uppercase tracking-wider mb-4 flex items-center gap-2"><ShieldAlert className="w-5 h-5 text-blood-500" />The Cover-Up</h2>
     <div className="space-y-3">
      {investigation.coverup.map((item, idx) => (
       <div key={idx} className="p-3 bg-blood-950/20 border border-blood-500/30">
        <p className="text-sm text-zinc-300">{item}</p>
       </div>
      ))}
     </div>
    </motion.div>

    {/* Surveillance Programs */}
    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.15 }} className="glass-card p-6 mb-8 border-l-4 border-red-800">
     <h2 className="text-xl font-bold glass-text uppercase tracking-wider mb-4 flex items-center gap-2"><Eye className="w-5 h-5 text-blood-500" />Surveillance Programs Exposed</h2>
     <div className="space-y-4">
      {investigation.surveillancePrograms.map((prog, idx) => (
       <div key={idx} className="p-4 bg-zinc-900/50 border border-zinc-800">
        <div className="flex items-start justify-between mb-2">
         <h3 className="font-bold text-blood-400 text-sm font-mono">{prog.name}</h3>
         <span className="text-[10px] font-mono text-zinc-600 bg-zinc-900 px-2 py-0.5 border border-zinc-800 ml-2 whitespace-nowrap">{prog.classification}</span>
        </div>
        <p className="text-xs text-zinc-500 font-mono mb-2">Active: {prog.dateActive}</p>
        <p className="text-sm text-zinc-300 mb-2">{prog.description}</p>
        <p className="text-xs text-blood-400"><span className="text-zinc-500">Scope:</span> {prog.scope}</p>
        <p className="text-xs text-zinc-500 mt-1"><span className="text-zinc-600">Legal basis:</span> {prog.legal}</p>
       </div>
      ))}
     </div>
    </motion.div>

    {/* Five Eyes Alliance */}
    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="glass-card p-6 mb-8 border-l-4 border-zinc-700">
     <h2 className="text-xl font-bold glass-text uppercase tracking-wider mb-4 flex items-center gap-2"><Globe className="w-5 h-5 text-blood-500" />Five Eyes Alliance</h2>
     <p className="text-sm text-zinc-400 mb-4">{investigation.fiveEyes.overview}</p>
     <div className="space-y-3">
      {investigation.fiveEyes.members.map((member, idx) => (
       <div key={idx} className="p-3 bg-zinc-900/50 border border-zinc-800">
        <h3 className="font-bold glass-text text-sm">{member.nation}</h3>
        <p className="text-sm text-zinc-300 mt-1">{member.role}</p>
        <p className="text-xs text-zinc-500 mt-1 font-mono">Programs: {member.programs}</p>
       </div>
      ))}
     </div>
     <p className="text-sm text-blood-400 mt-4 p-3 bg-blood-950/20 border border-blood-500/30">{investigation.fiveEyes.significance}</p>
    </motion.div>

    {/* Main Content Grid */}
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
     <div className="lg:col-span-2 space-y-8">

      {/* Key Figures */}
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.25 }} className="glass-card p-6">
       <h2 className="text-xl font-bold glass-text uppercase tracking-wider mb-4 flex items-center gap-2"><Users className="w-5 h-5 text-blood-500" />Key Figures</h2>
       <div className="space-y-3">
        {investigation.keyFigures.map((figure, idx) => (
         <div key={idx} className="flex items-start justify-between p-3 bg-zinc-900/50 border border-zinc-800">
          <div className="flex-1">
           {figure.href ? (
            <Link href={figure.href} className="font-bold text-blood-400 hover:text-blood-300 transition-colors">{figure.name}</Link>
           ) : (
            <span className="font-bold glass-text">{figure.name}</span>
           )}
           <p className="text-sm text-zinc-400 mt-1">{figure.role}</p>
          </div>
          <span className="text-xs px-2 py-1 bg-zinc-800 text-zinc-400 border border-zinc-700 whitespace-nowrap ml-2">{figure.status}</span>
         </div>
        ))}
       </div>
      </motion.div>

      {/* Corporate Complicity */}
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }} className="glass-card p-6">
       <h2 className="text-xl font-bold glass-text uppercase tracking-wider mb-4 flex items-center gap-2"><Building className="w-5 h-5 text-blood-500" />Corporate Complicity</h2>
       <div className="space-y-3">
        {investigation.corporateComplicity.map((corp, idx) => (
         <div key={idx} className="p-4 bg-zinc-900/50 border border-zinc-800">
          <div className="flex items-start justify-between mb-1">
           {corp.href ? (
            <Link href={corp.href} className="font-bold text-blood-400 hover:text-blood-300 transition-colors text-sm">{corp.company}</Link>
           ) : (
            <span className="font-bold glass-text text-sm">{corp.company}</span>
           )}
           <span className="text-xs text-zinc-500 ml-2 whitespace-nowrap">{corp.role}</span>
          </div>
          <p className="text-sm text-zinc-300 mt-1">{corp.details}</p>
         </div>
        ))}
       </div>
      </motion.div>

      {/* Institutional Connections */}
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.35 }} className="glass-card p-6">
       <h2 className="text-xl font-bold glass-text uppercase tracking-wider mb-4 flex items-center gap-2"><Network className="w-5 h-5 text-blood-500" />Institutional Connections</h2>
       <div className="space-y-3">
        {investigation.institutionalConnections.map((inst, idx) => (
         <div key={idx} className="p-4 bg-zinc-900/50 border border-zinc-800">
          <div className="flex items-start justify-between mb-1">
           {inst.href ? (
            <Link href={inst.href} className="font-bold text-blood-400 hover:text-blood-300 transition-colors text-sm">{inst.entity}</Link>
           ) : (
            <span className="font-bold glass-text text-sm">{inst.entity}</span>
           )}
           <span className="text-xs text-zinc-500 ml-2 whitespace-nowrap">{inst.role}</span>
          </div>
          <p className="text-sm text-zinc-300 mt-1">{inst.details}</p>
         </div>
        ))}
       </div>
      </motion.div>

      {/* Impact & Consequences */}
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }} className="glass-card p-6 border-l-4 border-blood-700">
       <h2 className="text-xl font-bold glass-text uppercase tracking-wider mb-4 flex items-center gap-2"><AlertTriangle className="w-5 h-5 text-blood-500" />Impact & Consequences</h2>
       <div className="space-y-3">
        {investigation.impact.map((item, idx) => (
         <div key={idx} className="p-3 bg-blood-950/10 border border-blood-500/20">
          <p className="text-sm text-zinc-300">{item}</p>
         </div>
        ))}
       </div>
      </motion.div>

      {/* Charges & Statutes */}
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.45 }} className="glass-card p-6">
       <h2 className="text-xl font-bold glass-text uppercase tracking-wider mb-4 flex items-center gap-2"><Scale className="w-5 h-5 text-blood-500" />Applicable Charges &amp; Statutes</h2>
       <div className="space-y-3">
        {investigation.charges.map((charge, idx) => (
         <div key={idx} className="p-4 bg-zinc-900/50 border border-zinc-800">
          <p className="font-bold text-blood-400 text-sm font-mono">{charge.statute}</p>
          <p className="text-sm text-zinc-300 mt-1">{charge.description}</p>
          <p className="text-xs text-blood-400 mt-1">{charge.count}</p>
         </div>
        ))}
       </div>
      </motion.div>

     </div>

     {/* Sidebar */}
     <div className="space-y-6">

      {/* Timeline */}
      <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} className="glass-card p-6">
       <h3 className="text-lg font-bold glass-text uppercase tracking-wider mb-4 flex items-center gap-2"><Calendar className="w-4 h-4 text-blood-500" />Timeline</h3>
       <div className="space-y-4">
        {investigation.timeline.map((item, idx) => (
         <div key={idx} className="relative pl-4 border-l-2 border-zinc-800">
          <div className="absolute -left-[5px] top-0 w-2 h-2 bg-blood-500" />
          <p className="text-xs text-blood-500 font-mono">{item.date}</p>
          <p className="text-sm text-zinc-300">{item.event}</p>
         </div>
        ))}
       </div>
      </motion.div>

      {/* Legal Outcomes */}
      <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.1 }} className="glass-card p-6">
       <h3 className="text-lg font-bold glass-text uppercase tracking-wider mb-4 flex items-center gap-2"><Scale className="w-5 h-5 text-blood-500" />Legal Outcomes</h3>
       <div className="space-y-3">
        {investigation.legalOutcomes.map((item, idx) => (
         <div key={idx} className="p-3 bg-zinc-900/50 border border-zinc-800">
          <p className="font-bold glass-text text-sm">{item.defendant}</p>
          <p className="text-xs text-zinc-400 mt-1">{item.charge}</p>
          <p className="text-xs text-blood-400 mt-1">{item.outcome}</p>
         </div>
        ))}
       </div>
      </motion.div>

      {/* Sources */}
      <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.2 }} className="glass-card p-6">
       <h3 className="text-lg font-bold glass-text uppercase tracking-wider mb-4 flex items-center gap-2"><BookOpen className="w-4 h-4 text-blood-500" />Sources</h3>
       <div className="space-y-2">
        {investigation.sources.map((source, idx) => (
         <a key={idx} href={source.url} target="_blank" rel="noopener noreferrer" className="flex items-start gap-2 p-2 text-sm text-zinc-400 hover:text-blood-400 hover:bg-zinc-900/50 transition-colors">
          <ExternalLink className="w-4 h-4 mt-0.5 flex-shrink-0" />
          <div>
           <span>{source.title}</span>
           <span className="text-zinc-600 ml-2">({source.date})</span>
          </div>
         </a>
        ))}
       </div>
      </motion.div>

     </div>
    </div>

   </div>
  </div>
 );
}
