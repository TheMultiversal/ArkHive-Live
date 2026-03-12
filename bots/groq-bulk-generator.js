#!/usr/bin/env node
/**
 * ArkHive Groq Bulk Generator
 * 
 * Generates thousands of entity profiles using Groq's free API (Llama 3.3 70B).
 * Free tier: 30 requests/minute, 14,400 tokens/min on llama-3.3-70b-versatile.
 * 
 * Usage:
 *   node bots/groq-bulk-generator.js                    # Generate all entity types
 *   node bots/groq-bulk-generator.js --type individuals  # Only individuals
 *   node bots/groq-bulk-generator.js --type agencies     # Only agencies
 *   node bots/groq-bulk-generator.js --type corporations # Only corporations
 *   node bots/groq-bulk-generator.js --type organizations # Only organizations
 *   node bots/groq-bulk-generator.js --resume            # Resume from last checkpoint
 *   node bots/groq-bulk-generator.js --dry-run           # Preview without writing
 */

const fs = require('fs');
const path = require('path');
const https = require('https');

// ─── Configuration ───────────────────────────────────────────────
const PROJECT_ROOT = path.resolve(__dirname, '..');
const DATA_DIR = path.join(PROJECT_ROOT, 'src', 'data');
const CHECKPOINT_FILE = path.join(__dirname, '.groq-checkpoint.json');

// Load API key from .env.local
function loadApiKey() {
  const envPath = path.join(PROJECT_ROOT, '.env.local');
  if (!fs.existsSync(envPath)) {
    console.error('ERROR: .env.local not found. Create it with GROQ_API_KEY=your_key');
    process.exit(1);
  }
  const env = fs.readFileSync(envPath, 'utf8');
  const match = env.match(/GROQ_API_KEY=(.+)/);
  if (!match || !match[1] || match[1] === 'your_key_here') {
    console.error('ERROR: GROQ_API_KEY not set in .env.local');
    process.exit(1);
  }
  return match[1].trim();
}

const GROQ_API_KEY = loadApiKey();
const GROQ_MODEL = 'llama-3.3-70b-versatile';
const REQUESTS_PER_MINUTE = 28; // Stay under 30 limit
const DELAY_MS = Math.ceil(60000 / REQUESTS_PER_MINUTE);

// ─── Comprehensive Name Lists ────────────────────────────────────
// Real public figures, agencies, corporations, and organizations
// that belong on an investigative journalism platform.

const INDIVIDUALS_TO_GENERATE = [
  // US Presidents & VPs
  { name: 'George H.W. Bush', title: 'Former US President', role: 'CIA Director, Vice President, President' },
  { name: 'George W. Bush', title: 'Former US President', role: '43rd President, Iraq War architect' },
  { name: 'Dick Cheney', title: 'Former US Vice President', role: 'VP, Halliburton CEO, Iraq War architect' },
  { name: 'Ronald Reagan', title: 'Former US President', role: '40th President, Iran-Contra' },
  { name: 'Richard Nixon', title: 'Former US President', role: '37th President, Watergate' },
  { name: 'Lyndon B. Johnson', title: 'Former US President', role: '36th President, Vietnam escalation' },
  { name: 'Joe Biden', title: 'US President', role: '46th President' },
  { name: 'Kamala Harris', title: 'US Vice President', role: 'VP, former Senator, former AG of California' },
  { name: 'Mike Pence', title: 'Former US Vice President', role: 'VP under Trump, Jan 6 target' },
  { name: 'Al Gore', title: 'Former US Vice President', role: 'VP, 2000 election, climate activist' },
  
  // US Political Figures
  { name: 'Mitch McConnell', title: 'US Senate Minority Leader', role: 'Senate Majority/Minority Leader' },
  { name: 'Nancy Pelosi', title: 'Former Speaker of the House', role: 'Speaker, stock trading controversy' },
  { name: 'Chuck Schumer', title: 'US Senate Majority Leader', role: 'Senator from New York' },
  { name: 'Kevin McCarthy', title: 'Former Speaker of the House', role: 'Ousted Speaker, Jan 6 flip-flop' },
  { name: 'Jim Jordan', title: 'US Representative', role: 'Ohio Rep, Judiciary Committee Chair' },
  { name: 'Matt Gaetz', title: 'Former US Representative', role: 'DOJ sex trafficking investigation' },
  { name: 'Marjorie Taylor Greene', title: 'US Representative', role: 'Georgia Rep, conspiracy theories' },
  { name: 'Lauren Boebert', title: 'US Representative', role: 'Colorado Rep, gun rights activist' },
  { name: 'Ted Cruz', title: 'US Senator', role: 'Texas Senator, Cancun controversy' },
  { name: 'Josh Hawley', title: 'US Senator', role: 'Missouri Senator, Jan 6 fist pump' },
  { name: 'Lindsey Graham', title: 'US Senator', role: 'South Carolina Senator, Georgia election call' },
  { name: 'Ron DeSantis', title: 'Governor of Florida', role: 'Florida Governor, 2024 candidate' },
  { name: 'Greg Abbott', title: 'Governor of Texas', role: 'Texas Governor, border policies' },
  { name: 'Ron Johnson', title: 'US Senator', role: 'Wisconsin Senator, fake electors' },
  { name: 'Rand Paul', title: 'US Senator', role: 'Kentucky Senator, Fauci confrontations' },
  { name: 'Marco Rubio', title: 'US Senator', role: 'Florida Senator, Secretary of State nominee' },
  { name: 'Rick Scott', title: 'US Senator', role: 'Florida Senator, Columbia/HCA Medicare fraud' },
  { name: 'Tom Cotton', title: 'US Senator', role: 'Arkansas Senator, military hawk' },
  { name: 'Elise Stefanik', title: 'US Representative', role: 'NY Rep, Trump ally, UN Ambassador nominee' },
  { name: 'Paul Gosar', title: 'US Representative', role: 'Arizona Rep, censured, white nationalist ties' },
  { name: 'Scott Perry', title: 'US Representative', role: 'Pennsylvania Rep, Jan 6, phone seized by FBI' },
  { name: 'Mark Meadows', title: 'Former White House Chief of Staff', role: 'Chief of Staff, Jan 6 texts' },
  { name: 'John Eastman', title: 'Attorney', role: 'Architect of Jan 6 legal strategy, disbarred' },
  { name: 'Sidney Powell', title: 'Attorney', role: 'Kraken lawyer, Georgia RICO plea deal' },
  { name: 'Lin Wood', title: 'Attorney', role: 'Election conspiracy lawyer' },
  { name: 'Kenneth Chesebro', title: 'Attorney', role: 'Fake electors scheme architect, plea deal' },
  { name: 'Jeffrey Clark', title: 'Former DOJ Official', role: 'Tried to use DOJ to overturn election' },
  { name: 'Peter Navarro', title: 'Former White House Adviser', role: 'Trade adviser, imprisoned for contempt' },
  { name: 'Steve Bannon', title: 'Former White House Strategist', role: 'Breitbart, Build the Wall fraud, contempt' },
  { name: 'Clarence Thomas', title: 'Supreme Court Justice', role: 'SCOTUS, Harlan Crow gifts, Ginni Thomas Jan 6' },
  { name: 'Samuel Alito', title: 'Supreme Court Justice', role: 'SCOTUS, upside-down flag, Dobbs leak' },
  { name: 'Brett Kavanaugh', title: 'Supreme Court Justice', role: 'SCOTUS, sexual assault allegations' },
  { name: 'Neil Gorsuch', title: 'Supreme Court Justice', role: 'SCOTUS, Merrick Garland seat' },
  { name: 'Leonard Leo', title: 'Federalist Society Co-Chair', role: 'Dark money, SCOTUS kingmaker' },
  { name: 'Harlan Crow', title: 'Billionaire', role: 'Clarence Thomas benefactor, Nazi memorabilia' },
  
  // World Leaders & Strongmen  
  { name: 'Vladimir Putin', title: 'President of Russia', role: 'Russian President, Ukraine invasion' },
  { name: 'Xi Jinping', title: 'President of China', role: 'CCP General Secretary, Uyghur genocide' },
  { name: 'Kim Jong-un', title: 'Supreme Leader of North Korea', role: 'Nuclear weapons, human rights abuses' },
  { name: 'Recep Tayyip Erdogan', title: 'President of Turkey', role: 'Authoritarian turn, press crackdown' },
  { name: 'Viktor Orbán', title: 'Prime Minister of Hungary', role: 'Illiberal democracy, CPAC ties' },
  { name: 'Jair Bolsonaro', title: 'Former President of Brazil', role: 'Amazon deforestation, coup attempt' },
  { name: 'Narendra Modi', title: 'Prime Minister of India', role: 'Hindu nationalism, Muslim persecution' },
  { name: 'Rodrigo Duterte', title: 'Former President of Philippines', role: 'Drug war extrajudicial killings' },
  { name: 'Bashar al-Assad', title: 'Former President of Syria', role: 'Chemical weapons, civil war' },
  { name: 'Abdel Fattah el-Sisi', title: 'President of Egypt', role: 'Military coup, political prisoners' },
  { name: 'Nicolás Maduro', title: 'President of Venezuela', role: 'Authoritarian rule, economic collapse' },
  { name: 'Alexander Lukashenko', title: 'President of Belarus', role: 'Rigged elections, protest crackdown' },
  { name: 'Benjamin Netanyahu', title: 'Prime Minister of Israel', role: 'Corruption charges, Gaza operations' },
  { name: 'Augusto Pinochet', title: 'Former Dictator of Chile', role: 'CIA-backed coup, Operation Condor' },
  { name: 'Saddam Hussein', title: 'Former President of Iraq', role: 'Gulf Wars, WMD claims' },
  { name: 'Muammar Gaddafi', title: 'Former Leader of Libya', role: 'Dictator, NATO intervention' },
  
  // Intelligence & Military
  { name: 'J. Edgar Hoover', title: 'Former FBI Director', role: 'COINTELPRO, surveillance state' },
  { name: 'Allen Dulles', title: 'Former CIA Director', role: 'CIA coups, MKUltra, JFK Warren Commission' },
  { name: 'Henry Kissinger', title: 'Former Secretary of State', role: 'Cambodia bombing, Chile coup, Nobel Peace Prize' },
  { name: 'Oliver North', title: 'Former NSC Member', role: 'Iran-Contra, NRA President' },
  { name: 'Erik Prince', title: 'Blackwater Founder', role: 'Private military, UAE ties, DeVos brother' },
  { name: 'Gina Haspel', title: 'Former CIA Director', role: 'CIA black site, enhanced interrogation' },
  { name: 'Michael Hayden', title: 'Former NSA/CIA Director', role: 'Warrantless wiretapping, enhanced interrogation' },
  { name: 'John Brennan', title: 'Former CIA Director', role: 'Drone program, CIA hacking tools leak' },
  { name: 'James Clapper', title: 'Former DNI', role: 'Lied to Congress about mass surveillance' },
  { name: 'Donald Rumsfeld', title: 'Former Secretary of Defense', role: 'Iraq War, Abu Ghraib, known unknowns' },
  { name: 'Paul Wolfowitz', title: 'Former Deputy Secretary of Defense', role: 'Iraq War architect, neoconservative' },
  { name: 'John Bolton', title: 'Former National Security Adviser', role: 'War hawk, Iraq War advocate' },
  { name: 'William Barr', title: 'Former Attorney General', role: 'Mueller Report spin, Jan 6 denials' },
  { name: 'Jeff Sessions', title: 'Former Attorney General', role: 'Family separation, Russia recusal' },
  
  // Tech & Billionaires
  { name: 'Elon Musk', title: 'CEO of Tesla/SpaceX/xAI', role: 'Twitter/X acquisition, DOGE, political influence' },
  { name: 'Mark Zuckerberg', title: 'CEO of Meta', role: 'Facebook, Cambridge Analytica, content moderation' },
  { name: 'Jeff Bezos', title: 'Founder of Amazon', role: 'Labor abuses, Washington Post, Blue Origin' },
  { name: 'Peter Thiel', title: 'Venture Capitalist', role: 'Palantir, PayPal, JD Vance backer' },
  { name: 'Larry Ellison', title: 'Co-founder of Oracle', role: 'NSA contracts, Trump supporter' },
  { name: 'Tim Cook', title: 'CEO of Apple', role: 'China manufacturing, privacy vs backdoors' },
  { name: 'Sundar Pichai', title: 'CEO of Google/Alphabet', role: 'Antitrust, AI ethics, China project' },
  { name: 'Satya Nadella', title: 'CEO of Microsoft', role: 'AI race, government contracts, layoffs' },
  { name: 'Sam Altman', title: 'CEO of OpenAI', role: 'AGI race, boardroom coup, safety concerns' },
  { name: 'Sam Bankman-Fried', title: 'Former CEO of FTX', role: 'Crypto fraud, $8B missing, convicted' },
  { name: 'Elizabeth Holmes', title: 'Former CEO of Theranos', role: 'Fraud, fake blood testing, imprisoned' },
  { name: 'Adam Neumann', title: 'Former CEO of WeWork', role: 'Corporate governance failure, golden parachute' },
  { name: 'Travis Kalanick', title: 'Former CEO of Uber', role: 'Toxic culture, Greyball, surveillance' },
  { name: 'Palmer Luckey', title: 'Founder of Anduril', role: 'Oculus, defense tech, border surveillance' },
  { name: 'Jack Dorsey', title: 'Co-founder of Twitter', role: 'Content moderation, Bitcoin maximalist' },
  { name: 'Larry Page', title: 'Co-founder of Google', role: 'Surveillance capitalism, AI development' },
  { name: 'Sergey Brin', title: 'Co-founder of Google', role: 'Surveillance capitalism, AI development' },
  
  // Financial Criminals & Oligarchs
  { name: 'Jamie Dimon', title: 'CEO of JPMorgan Chase', role: 'Banking scandals, London Whale, Epstein ties' },
  { name: 'Lloyd Blankfein', title: 'Former CEO of Goldman Sachs', role: '2008 crisis, 1MDB scandal' },
  { name: 'Larry Fink', title: 'CEO of BlackRock', role: 'ESG controversy, $10T asset management' },
  { name: 'Ken Griffin', title: 'CEO of Citadel', role: 'Payment for order flow, GameStop, political donations' },
  { name: 'George Soros', title: 'Investor', role: 'Philanthropy, conspiracy target, democracy funding' },
  { name: 'Charles Koch', title: 'CEO of Koch Industries', role: 'Political network, climate denial funding' },
  { name: 'David Koch', title: 'Former Koch Industries Executive', role: 'Political network, climate denial' },
  { name: 'Rupert Murdoch', title: 'Media Mogul', role: 'Fox News, News Corp, global media empire' },
  { name: 'Roman Abramovich', title: 'Russian Oligarch', role: 'Chelsea FC, Putin ties, sanctions' },
  { name: 'Oleg Deripaska', title: 'Russian Oligarch', role: 'Manafort ties, aluminum, sanctions' },
  { name: 'Mohammed bin Salman', title: 'Crown Prince of Saudi Arabia', role: 'Khashoggi murder, Yemen war, LIV Golf' },
  { name: 'Jared Kushner', title: 'Former Senior White House Adviser', role: 'Affinity Partners, $2B Saudi fund, 666 Fifth Ave' },
  { name: 'Ivanka Trump', title: 'Former Senior White House Adviser', role: 'Business conflicts, Chinese trademarks' },
  { name: 'Donald Trump Jr.', title: 'EVP Trump Organization', role: 'Trump Tower meeting, fraud trial' },
  { name: 'Eric Trump', title: 'EVP Trump Organization', role: 'Charity fraud, fraud trial' },
  { name: 'Sheldon Adelson', title: 'Former Casino Mogul', role: 'Republican mega-donor, Israel policy' },
  { name: 'Steve Schwarzman', title: 'CEO of Blackstone', role: 'Private equity, political donor' },
  { name: 'Carl Icahn', title: 'Investor', role: 'Trump adviser, biofuels conflict of interest' },
  { name: 'Wilbur Ross', title: 'Former Commerce Secretary', role: 'Paradise Papers, Russia shipping ties' },
  
  // Media & Propaganda
  { name: 'Tucker Carlson', title: 'Former Fox News Host', role: 'White replacement theory, Putin interview' },
  { name: 'Sean Hannity', title: 'Fox News Host', role: 'Jan 6 texts, Trump adviser' },
  { name: 'Alex Jones', title: 'InfoWars Host', role: 'Sandy Hook defamation, $1.5B judgment' },
  { name: 'Laura Ingraham', title: 'Fox News Host', role: 'Jan 6 texts, immigration rhetoric' },
  { name: 'Sinclair Broadcasting', title: 'Media Company', role: 'Must-run segments, local news monopoly' },
  { name: 'Roger Ailes', title: 'Former Fox News CEO', role: 'Sexual harassment, propaganda machine' },
  { name: 'Lachlan Murdoch', title: 'CEO of Fox Corporation', role: 'Dominion lawsuit, Fox leadership' },
  
  // Dark Money & Influence
  { name: 'Ginni Thomas', title: 'Conservative Activist', role: 'Jan 6 texts, Clarence Thomas wife' },
  { name: 'Roger Stone', title: 'Political Operative', role: 'Dirty tricks, convicted, pardoned, Proud Boys' },
  { name: 'Paul Manafort', title: 'Former Trump Campaign Chairman', role: 'Ukraine lobbying, convicted, pardoned' },
  { name: 'Michael Cohen', title: 'Former Trump Attorney', role: 'Hush money, fixer, convicted' },
  { name: 'Allen Weisselberg', title: 'Former Trump Org CFO', role: 'Tax fraud, perjury, imprisoned' },
  { name: 'Rudy Giuliani', title: 'Former NYC Mayor', role: 'Trump personal attorney, election lies, disbarred' },
  { name: 'Kash Patel', title: 'Trump Ally', role: 'FBI Director nominee, Deep State conspiracy' },
  { name: 'Stephen Miller', title: 'Former Senior White House Adviser', role: 'Immigration policy architect, family separation' },
  { name: 'Michael Flynn', title: 'Former National Security Adviser', role: 'Russia ties, QAnon, pardoned' },
  { name: 'George Papadopoulos', title: 'Former Campaign Adviser', role: 'Russia probe, convicted, pardoned' },
  { name: 'Carter Page', title: 'Former Campaign Adviser', role: 'FISA warrant target, Russia contacts' },
  { name: 'Tom Barrack', title: 'Investor', role: 'UAE lobbying, inaugural committee, acquitted' },
  
  // Pharma & Health
  { name: 'Richard Sackler', title: 'Former Purdue Pharma President', role: 'OxyContin, opioid epidemic architect' },
  { name: 'Martin Shkreli', title: 'Former Pharma CEO', role: 'Drug price gouging, fraud, imprisoned' },
  { name: 'Alex Azar', title: 'Former HHS Secretary', role: 'Eli Lilly, COVID response' },
  { name: 'Robert F. Kennedy Jr.', title: 'HHS Secretary Nominee', role: 'Anti-vaccine, conspiracy theories' },
  
  // Historical Figures of Investigative Interest
  { name: 'J. Robert Oppenheimer', title: 'Physicist', role: 'Manhattan Project, nuclear weapons' },
  { name: 'Joseph McCarthy', title: 'Former US Senator', role: 'Red Scare, McCarthyism' },
  { name: 'Roy Cohn', title: 'Attorney', role: 'McCarthy aide, Trump mentor, mob lawyer' },
  { name: 'Prescott Bush', title: 'Former US Senator', role: 'Nazi business ties, Bush dynasty founder' },
  { name: 'John Foster Dulles', title: 'Former Secretary of State', role: 'Cold War brinkmanship, CIA brother' },
  
  // Whistleblowers & Figures
  { name: 'Edward Snowden', title: 'NSA Whistleblower', role: 'Mass surveillance revelations, Russia exile' },
  { name: 'Chelsea Manning', title: 'Army Whistleblower', role: 'WikiLeaks, Iraq War Logs, pardoned' },
  { name: 'Julian Assange', title: 'WikiLeaks Founder', role: 'Classified leaks, extradition, plea deal' },
  { name: 'Daniel Ellsberg', title: 'Pentagon Papers Whistleblower', role: 'Vietnam War revelations' },
  { name: 'Reality Winner', title: 'NSA Whistleblower', role: 'Russian election interference document' },
  { name: 'Frances Haugen', title: 'Facebook Whistleblower', role: 'Facebook Files, Instagram harm research' },
  
  // More US Political
  { name: 'Bob Menendez', title: 'Former US Senator', role: 'Bribery, gold bars, Egyptian agent' },
  { name: 'George Santos', title: 'Former US Representative', role: 'Fabricated biography, fraud charges' },
  { name: 'Herschel Walker', title: 'Former Senate Candidate', role: 'Abortion controversy, residency issues' },
  { name: 'Tommy Tuberville', title: 'US Senator', role: 'Military promotion blockade' },
  { name: 'Mike Johnson', title: 'Speaker of the House', role: 'Speaker, election objector' },
  { name: 'Byron Donalds', title: 'US Representative', role: 'Speaker supporter, Florida Rep' },
  { name: 'Vivek Ramaswamy', title: 'Entrepreneur', role: 'DOGE co-lead, 2024 candidate' },
  { name: 'JD Vance', title: 'US Vice President', role: 'VP, Hillbilly Elegy, Peter Thiel backed' },
  { name: 'Nikki Haley', title: 'Former UN Ambassador', role: 'Governor, 2024 candidate' },
  { name: 'Chris Christie', title: 'Former Governor of NJ', role: 'Bridgegate, 2024 candidate' },
  
  // International Figures
  { name: 'Yevgeny Prigozhin', title: 'Former Wagner Group Leader', role: 'Wagner mutiny, Africa operations, plane crash' },
  { name: 'Alexei Navalny', title: 'Russian Opposition Leader', role: 'Novichok poisoning, died in prison' },
  { name: 'Jamal Khashoggi', title: 'Journalist', role: 'Murdered by Saudi agents, dismembered' },
  { name: 'Volodymyr Zelenskyy', title: 'President of Ukraine', role: 'Russian invasion, Trump call' },
  { name: 'Boris Johnson', title: 'Former UK Prime Minister', role: 'Brexit, Partygate, Ukraine' },
  { name: 'Tony Blair', title: 'Former UK Prime Minister', role: 'Iraq War, WMD dossier' },
  { name: 'Silvio Berlusconi', title: 'Former Italian Prime Minister', role: 'Media monopoly, bunga bunga' },
  { name: 'Marine Le Pen', title: 'French Political Leader', role: 'Far right, Russian bank loan' },
  { name: 'Javier Milei', title: 'President of Argentina', role: 'Libertarian, chainsaw, dollarization' },
  { name: 'Nayib Bukele', title: 'President of El Salvador', role: 'Bitcoin, mass incarceration' },
  
  // Corporate Criminals
  { name: 'Kenneth Lay', title: 'Former CEO of Enron', role: 'Enron fraud, died before sentencing' },
  { name: 'Jeffrey Skilling', title: 'Former CEO of Enron', role: 'Enron fraud, 24 counts, imprisoned' },
  { name: 'Bernie Ebbers', title: 'Former CEO of WorldCom', role: '$11B accounting fraud, died in prison' },
  { name: 'Dennis Kozlowski', title: 'Former CEO of Tyco', role: '$600M fraud, $6k shower curtain' },
  { name: 'Martin Winterkorn', title: 'Former CEO of Volkswagen', role: 'Dieselgate emissions fraud' },
  { name: 'Dennis Muilenburg', title: 'Former CEO of Boeing', role: '737 MAX crashes, 346 deaths' },
  { name: 'David Calhoun', title: 'Former CEO of Boeing', role: 'Continued safety failures, whistleblower deaths' },
  { name: 'Carlos Ghosn', title: 'Former CEO of Nissan-Renault', role: 'Financial misconduct, escape from Japan' },
  
  // Law Enforcement & Justice System
  { name: 'Derek Chauvin', title: 'Former Police Officer', role: 'Murder of George Floyd, convicted' },
  { name: 'Darren Wilson', title: 'Former Police Officer', role: 'Killed Michael Brown, Ferguson' },
  { name: 'Daniel Pantaleo', title: 'Former NYPD Officer', role: 'Eric Garner chokehold death' },
  { name: 'Joe Arpaio', title: 'Former Maricopa County Sheriff', role: 'Racial profiling, tent city, pardoned by Trump' },
  { name: 'Fani Willis', title: 'Fulton County DA', role: 'Trump Georgia RICO prosecution' },
  { name: 'Alvin Bragg', title: 'Manhattan DA', role: 'Trump hush money prosecution' },
  { name: 'Jack Smith', title: 'Special Counsel', role: 'Trump federal prosecutions, dismissed' },
  { name: 'Robert Mueller', title: 'Former Special Counsel', role: 'Russia investigation, Mueller Report' },
  { name: 'James Comey', title: 'Former FBI Director', role: 'Clinton emails, Trump firing' },
  { name: 'Andrew McCabe', title: 'Former FBI Deputy Director', role: 'Acting FBI Director, fired then reinstated' },
  
  // Additional Notable Figures
  { name: 'Ghislaine Maxwell', title: 'Convicted Sex Trafficker', role: 'Epstein associate, convicted' },
  { name: 'Jeffrey Epstein', title: 'Convicted Sex Offender', role: 'Sex trafficking network, died in custody' },
  { name: 'Harvey Weinstein', title: 'Former Film Producer', role: 'Sexual assault, #MeToo, convicted' },
  { name: 'R. Kelly', title: 'Former Musician', role: 'Sex trafficking, racketeering, convicted' },
  { name: 'Bill Cosby', title: 'Former Entertainer', role: 'Sexual assault, conviction overturned' },
  { name: 'Keith Raniere', title: 'NXIVM Founder', role: 'Sex cult, racketeering, convicted' },
  
  // Defense & Military Industry
  { name: 'Marillyn Hewson', title: 'Former CEO of Lockheed Martin', role: 'Defense contracts, lobbying' },
  { name: 'Gregory Hayes', title: 'CEO of RTX (Raytheon)', role: 'Defense contracts, Yemen bombs' },
  
  // More International
  { name: 'Daniel Ortega', title: 'President of Nicaragua', role: 'Authoritarian rule, human rights abuses' },
  { name: 'Robert Mugabe', title: 'Former President of Zimbabwe', role: 'Decades of authoritarian rule' },
  { name: 'Imelda Marcos', title: 'Former First Lady of Philippines', role: '3,000 shoes, kleptocracy' },
  { name: 'Ferdinand Marcos Jr.', title: 'President of Philippines', role: 'Dynasty restoration, historical revisionism' },
  { name: 'Nursultan Nazarbayev', title: 'Former President of Kazakhstan', role: 'Authoritarian rule, Western lobbying' },
  { name: 'Paul Kagame', title: 'President of Rwanda', role: 'Post-genocide leader, authoritarian concerns' },
  { name: 'Aung San Suu Kyi', title: 'Former State Counsellor of Myanmar', role: 'Rohingya genocide inaction' },
  { name: 'Hun Sen', title: 'Former PM of Cambodia', role: 'One of longest-serving leaders, authoritarianism' },
];

const AGENCIES_TO_GENERATE = [
  { name: 'National Security Agency', acronym: 'NSA', role: 'Signals Intelligence Agency' },
  { name: 'Defense Intelligence Agency', acronym: 'DIA', role: 'Military Intelligence Agency' },
  { name: 'Bureau of Alcohol, Tobacco, Firearms and Explosives', acronym: 'ATF', role: 'Law Enforcement Agency' },
  { name: 'Drug Enforcement Administration', acronym: 'DEA', role: 'Drug Law Enforcement Agency' },
  { name: 'U.S. Marshals Service', acronym: 'USMS', role: 'Federal Law Enforcement' },
  { name: 'U.S. Secret Service', acronym: 'USSS', role: 'Protective & Investigation Agency' },
  { name: 'Environmental Protection Agency', acronym: 'EPA', role: 'Environmental Regulatory Agency' },
  { name: 'Federal Communications Commission', acronym: 'FCC', role: 'Communications Regulatory Agency' },
  { name: 'Federal Trade Commission', acronym: 'FTC', role: 'Consumer Protection Agency' },
  { name: 'Securities and Exchange Commission', acronym: 'SEC', role: 'Financial Regulatory Agency' },
  { name: 'Federal Reserve System', acronym: 'Fed', role: 'Central Banking System' },
  { name: 'Internal Revenue Service', acronym: 'IRS', role: 'Tax Collection Agency' },
  { name: 'Department of State', acronym: 'State', role: 'Foreign Affairs Department' },
  { name: 'Department of Defense', acronym: 'DoD', role: 'Military Department' },
  { name: 'Department of Treasury', acronym: 'Treasury', role: 'Financial Department' },
  { name: 'Department of Education', acronym: 'DoEd', role: 'Education Department' },
  { name: 'Department of Energy', acronym: 'DoE', role: 'Energy & Nuclear Department' },
  { name: 'Department of Health and Human Services', acronym: 'HHS', role: 'Health Department' },
  { name: 'Department of Veterans Affairs', acronym: 'VA', role: 'Veterans Services' },
  { name: 'Federal Aviation Administration', acronym: 'FAA', role: 'Aviation Safety' },
  { name: 'Food and Drug Administration', acronym: 'FDA', role: 'Public Health' },
  { name: 'Centers for Disease Control', acronym: 'CDC', role: 'Disease Prevention' },
  { name: 'National Institutes of Health', acronym: 'NIH', role: 'Medical Research' },
  { name: 'U.S. Customs and Border Protection', acronym: 'CBP', role: 'Border Security' },
  { name: 'Transportation Security Administration', acronym: 'TSA', role: 'Transportation Security' },
  { name: 'National Geospatial-Intelligence Agency', acronym: 'NGA', role: 'Geospatial Intelligence' },
  { name: 'Office of the Director of National Intelligence', acronym: 'ODNI', role: 'Intelligence Coordination' },
  { name: 'Financial Crimes Enforcement Network', acronym: 'FinCEN', role: 'Financial Crime Investigation' },
  { name: 'Consumer Financial Protection Bureau', acronym: 'CFPB', role: 'Consumer Finance Regulation' },
  { name: 'Commodity Futures Trading Commission', acronym: 'CFTC', role: 'Derivatives Regulation' },
  // International
  { name: 'MI6 - Secret Intelligence Service', acronym: 'MI6', role: 'UK Foreign Intelligence' },
  { name: 'MI5 - Security Service', acronym: 'MI5', role: 'UK Domestic Intelligence' },
  { name: 'Mossad', acronym: 'Mossad', role: 'Israeli Intelligence Agency' },
  { name: 'SVR - Foreign Intelligence Service', acronym: 'SVR', role: 'Russian Foreign Intelligence' },
  { name: 'FSB - Federal Security Service', acronym: 'FSB', role: 'Russian Domestic Intelligence' },
  { name: 'GRU - Military Intelligence', acronym: 'GRU', role: 'Russian Military Intelligence' },
  { name: 'Ministry of State Security', acronym: 'MSS', role: 'Chinese Intelligence Agency' },
  { name: 'Inter-Services Intelligence', acronym: 'ISI', role: 'Pakistani Intelligence Agency' },
  { name: 'DGSE - General Directorate for External Security', acronym: 'DGSE', role: 'French Intelligence' },
  { name: 'BND - Federal Intelligence Service', acronym: 'BND', role: 'German Intelligence Agency' },
  { name: 'International Criminal Court', acronym: 'ICC', role: 'International Justice' },
  { name: 'International Court of Justice', acronym: 'ICJ', role: 'UN Judicial Organ' },
  { name: 'International Atomic Energy Agency', acronym: 'IAEA', role: 'Nuclear Oversight' },
  { name: 'INTERPOL', acronym: 'INTERPOL', role: 'International Law Enforcement' },
  { name: 'Europol', acronym: 'Europol', role: 'European Law Enforcement' },
  { name: 'World Health Organization', acronym: 'WHO', role: 'Global Health Authority' },
];

const CORPORATIONS_TO_GENERATE = [
  { name: 'Goldman Sachs', industry: 'Investment Banking', role: 'Wall Street, 1MDB, 2008 crisis' },
  { name: 'JPMorgan Chase', industry: 'Banking', role: 'Largest US bank, fines, Epstein accounts' },
  { name: 'Deutsche Bank', industry: 'Banking', role: 'Trump loans, money laundering, Russian oligarchs' },
  { name: 'BlackRock', industry: 'Asset Management', role: '$10T AUM, ESG controversy, political influence' },
  { name: 'Lockheed Martin', industry: 'Defense', role: 'Largest defense contractor, F-35, lobbying' },
  { name: 'Raytheon Technologies', industry: 'Defense', role: 'Missiles, Saudi arms sales, Yemen' },
  { name: 'Boeing', industry: 'Aerospace', role: '737 MAX crashes, safety failures, whistleblower deaths' },
  { name: 'Northrop Grumman', industry: 'Defense', role: 'B-21 bomber, nuclear weapons, classified programs' },
  { name: 'General Dynamics', industry: 'Defense', role: 'Submarines, tanks, defense lobbying' },
  { name: 'Amazon', industry: 'Technology/Retail', role: 'Labor abuses, monopoly, AWS surveillance' },
  { name: 'Meta Platforms', industry: 'Technology', role: 'Facebook, Instagram, Cambridge Analytica, teen harm' },
  { name: 'Alphabet/Google', industry: 'Technology', role: 'Search monopoly, surveillance capitalism, AI' },
  { name: 'Apple', industry: 'Technology', role: 'China manufacturing, tax havens, App Store monopoly' },
  { name: 'Microsoft', industry: 'Technology', role: 'AI race, government contracts, antitrust history' },
  { name: 'Palantir Technologies', industry: 'Data Analytics', role: 'ICE contracts, surveillance, Thiel founded' },
  { name: 'ExxonMobil', industry: 'Oil & Gas', role: 'Climate denialism, decades of coverup' },
  { name: 'Chevron', industry: 'Oil & Gas', role: 'Ecuador pollution, Donziger prosecution' },
  { name: 'Shell', industry: 'Oil & Gas', role: 'Nigeria, climate litigation, greenwashing' },
  { name: 'BP', industry: 'Oil & Gas', role: 'Deepwater Horizon, 11 dead, $65B costs' },
  { name: 'Koch Industries', industry: 'Conglomerate', role: 'Political network, pollution, climate denial' },
  { name: 'Purdue Pharma', industry: 'Pharmaceutical', role: 'OxyContin, opioid epidemic, Sackler family' },
  { name: 'Johnson & Johnson', industry: 'Pharmaceutical', role: 'Talc cancer, opioids, asbestos' },
  { name: 'Pfizer', industry: 'Pharmaceutical', role: 'Drug pricing, largest healthcare fraud settlement' },
  { name: 'Monsanto/Bayer', industry: 'Agriculture', role: 'Roundup cancer, GMO controversy, farmer lawsuits' },
  { name: '3M Company', industry: 'Manufacturing', role: 'PFAS forever chemicals, water contamination' },
  { name: 'DuPont', industry: 'Chemical', role: 'PFAS/Teflon poisoning, Dark Waters' },
  { name: 'Wells Fargo', industry: 'Banking', role: 'Fake accounts scandal, 2M unauthorized accounts' },
  { name: 'Credit Suisse', industry: 'Banking', role: 'Collapsed, money laundering, oligarch accounts' },
  { name: 'HSBC', industry: 'Banking', role: 'Mexican cartel money laundering, sanctions evasion' },
  { name: 'Uber', industry: 'Technology', role: 'Greyball, toxic culture, gig economy exploitation' },
  { name: 'Tesla', industry: 'Automotive', role: 'Autopilot deaths, labor issues, Musk governance' },
  { name: 'SpaceX', industry: 'Aerospace', role: 'Government contracts, safety concerns, Starlink' },
  { name: 'Halliburton', industry: 'Oil Services', role: 'Iraq War profiteering, Cheney, KBR' },
  { name: 'Blackwater/Academi', industry: 'Private Military', role: 'Nisour Square massacre, Erik Prince' },
  { name: 'Cambridge Analytica', industry: 'Data Analytics', role: 'Facebook data harvesting, election manipulation' },
  { name: 'Dominion Voting Systems', industry: 'Election Technology', role: '$787M Fox News settlement' },
  { name: 'Smartmatic', industry: 'Election Technology', role: '$2.7B lawsuit against Fox News' },
  { name: 'Philip Morris International', industry: 'Tobacco', role: 'Decades of cancer coverup, IQOS' },
  { name: 'Nestlé', industry: 'Food', role: 'Water privatization, child labor, baby formula' },
  { name: 'Walmart', industry: 'Retail', role: 'Labor abuses, opioid lawsuits, minimum wage' },
];

const ORGANIZATIONS_TO_GENERATE = [
  { name: 'The Federalist Society', type: 'Legal Organization', role: 'Conservative judicial pipeline, SCOTUS' },
  { name: 'Heritage Foundation', type: 'Think Tank', role: 'Project 2025, conservative policy' },
  { name: 'American Legislative Exchange Council', acronym: 'ALEC', type: 'Policy Organization', role: 'Model legislation, corporate influence' },
  { name: 'Council on Foreign Relations', acronym: 'CFR', type: 'Think Tank', role: 'Foreign policy establishment' },
  { name: 'Brookings Institution', type: 'Think Tank', role: 'Centrist policy research' },
  { name: 'RAND Corporation', type: 'Think Tank', role: 'Military/government research' },
  { name: 'Bilderberg Group', type: 'Conference', role: 'Annual elite meeting, secrecy' },
  { name: 'World Economic Forum', acronym: 'WEF', type: 'International Organization', role: 'Davos, Great Reset, global elites' },
  { name: 'Trilateral Commission', type: 'International Organization', role: 'US-Europe-Japan policy coordination' },
  { name: 'National Rifle Association', acronym: 'NRA', type: 'Lobbying Organization', role: 'Gun lobby, Russian funding investigation' },
  { name: 'AIPAC', type: 'Lobbying Organization', role: 'Israel lobby, political donations' },
  { name: 'Proud Boys', type: 'Extremist Group', role: 'Jan 6, seditious conspiracy convictions' },
  { name: 'Oath Keepers', type: 'Extremist Group', role: 'Jan 6, seditious conspiracy convictions' },
  { name: 'QAnon', type: 'Conspiracy Movement', role: 'Mass radicalization, political violence' },
  { name: 'Three Percenters', type: 'Extremist Group', role: 'Anti-government militia, Jan 6' },
  { name: 'Ku Klux Klan', acronym: 'KKK', type: 'Hate Group', role: 'White supremacy, domestic terrorism' },
  { name: 'United Nations', acronym: 'UN', type: 'International Organization', role: 'Global diplomacy, peacekeeping' },
  { name: 'NATO', type: 'Military Alliance', role: 'Collective defense, expansion, Russia tensions' },
  { name: 'European Union', acronym: 'EU', type: 'Political Union', role: 'European governance, regulation' },
  { name: 'World Bank', type: 'International Financial', role: 'Development lending, structural adjustment' },
  { name: 'International Monetary Fund', acronym: 'IMF', type: 'International Financial', role: 'Financial stability, austerity conditions' },
  { name: 'World Trade Organization', acronym: 'WTO', type: 'International Trade', role: 'Trade rules, dispute resolution' },
  { name: 'Amnesty International', type: 'Human Rights NGO', role: 'Human rights monitoring' },
  { name: 'Human Rights Watch', type: 'Human Rights NGO', role: 'Human rights research and advocacy' },
  { name: 'Transparency International', type: 'Anti-Corruption NGO', role: 'Corruption monitoring, CPI index' },
  { name: 'Doctors Without Borders', acronym: 'MSF', type: 'Humanitarian NGO', role: 'Medical aid, conflict zones' },
  { name: 'Red Cross', type: 'Humanitarian Organization', role: 'Disaster relief, humanitarian law' },
  { name: 'Open Society Foundations', type: 'Philanthropic Network', role: 'Soros funded, democracy support' },
  { name: 'Koch Network', type: 'Political Network', role: 'Conservative donor network, policy influence' },
  { name: 'Turning Point USA', type: 'Political Organization', role: 'Youth conservative activism, Charlie Kirk' },
  { name: 'Project Veritas', type: 'Media Organization', role: 'Undercover sting journalism, deceptive editing' },
  { name: 'Opus Dei', type: 'Religious Organization', role: 'Catholic influence, political connections' },
  { name: 'Church of Scientology', type: 'Religious Organization', role: 'Abuse allegations, tax exemption' },
  { name: 'Wagner Group', type: 'Private Military Company', role: 'Russian mercenaries, Africa, mutiny' },
  { name: 'Blackstone Group', type: 'Private Equity', role: 'Housing crisis, $1T AUM' },
  { name: 'Carlyle Group', type: 'Private Equity', role: 'Defense investments, Bush connections' },
  { name: 'Republican National Committee', acronym: 'RNC', type: 'Political Party', role: 'Republican organizing, election challenges' },
  { name: 'Democratic National Committee', acronym: 'DNC', type: 'Political Party', role: 'Democratic organizing, 2016 hack' },
  { name: 'Citizens United', type: 'Political Organization', role: 'SCOTUS case, unlimited political spending' },
  { name: 'Club for Growth', type: 'Political Organization', role: 'Conservative tax cut advocacy' },
];

// ─── Groq API Client ─────────────────────────────────────────────

function groqRequest(messages, maxTokens = 4000) {
  return new Promise((resolve, reject) => {
    const payload = JSON.stringify({
      model: GROQ_MODEL,
      messages,
      max_tokens: maxTokens,
      temperature: 0.7,
      response_format: { type: 'json_object' },
    });

    const options = {
      hostname: 'api.groq.com',
      path: '/openai/v1/chat/completions',
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${GROQ_API_KEY}`,
      },
    };

    const req = https.request(options, (res) => {
      let data = '';
      res.on('data', (chunk) => data += chunk);
      res.on('end', () => {
        try {
          const json = JSON.parse(data);
          if (json.error) {
            reject(new Error(`Groq API error: ${json.error.message}`));
            return;
          }
          const content = json.choices[0].message.content;
          try {
            resolve(JSON.parse(content));
          } catch {
            // Try to extract JSON from the response
            const match = content.match(/\{[\s\S]*\}/);
            if (match) resolve(JSON.parse(match[0]));
            else reject(new Error('Failed to parse JSON from response'));
          }
        } catch (e) {
          reject(new Error(`Failed to parse Groq response: ${e.message}\nRaw: ${data.slice(0, 500)}`));
        }
      });
    });

    req.on('error', reject);
    req.setTimeout(60000, () => { req.destroy(); reject(new Error('Request timeout')); });
    req.write(payload);
    req.end();
  });
}

function sleep(ms) { return new Promise(r => setTimeout(r, ms)); }

// ─── Profile Generation Prompts ──────────────────────────────────

function buildIndividualPrompt(person) {
  return [
    {
      role: 'system',
      content: `You are a factual investigative journalism database compiler. Generate accurate, well-sourced profiles of public figures for an investigative journalism platform. Use ONLY verified, publicly documented facts. Never fabricate sources or events. Be detailed and thorough. Return valid JSON matching the exact schema requested.`
    },
    {
      role: 'user',
      content: `Generate a comprehensive investigative profile for: ${person.name}
Title: ${person.title}
Context: ${person.role}

Return JSON with these exact fields:
{
  "name": "Full Name",
  "slug": "lowercase-hyphenated-name",
  "title": "Official Title or Role",
  "role": "One-sentence summary of significance",
  "riskLevel": "critical|high|medium|low",
  "description": "3-5 paragraph detailed biography focusing on investigative relevance, controversies, and power connections. Be specific with dates, amounts, and facts.",
  "birthDate": "YYYY-MM-DD or empty string",
  "birthPlace": "City, Country",
  "education": ["Degree, Institution"],
  "netWorth": "$X billion/million (estimated)",
  "nationality": "Country",
  "affiliations": [{"name": "Organization Name", "role": "Their role there", "type": "agency|corporation|organization"}],
  "controversies": ["One-sentence summary of each real controversy"],
  "knownAssociates": [{"name": "Person Name", "relationship": "Nature of connection"}],
  "timeline": [{"date": "YYYY-MM-DD", "event": "What happened"}],
  "sources": [{"title": "Article/Document Title", "url": "https://real-url", "date": "YYYY-MM-DD"}],
  "relatedInvestigations": [{"title": "Investigation Name", "slug": "investigation-slug", "severity": "critical|high|medium|low"}]
}

Be thorough. Include at least 5 controversies, 8 timeline events, 5 affiliations, 5 known associates, and 5 sources with real URLs. The description should be 300+ words.`
    }
  ];
}

function buildAgencyPrompt(agency) {
  return [
    {
      role: 'system',
      content: `You are a factual investigative journalism database compiler. Generate accurate agency profiles for an investigative platform. Use only verified facts. Return valid JSON.`
    },
    {
      role: 'user',
      content: `Generate an investigative profile for the government agency: ${agency.name} (${agency.acronym})
Role: ${agency.role}

Return JSON:
{
  "id": "${agency.acronym.toLowerCase()}",
  "slug": "${agency.acronym.toLowerCase().replace(/[^a-z0-9]/g, '-')}",
  "name": "${agency.name}",
  "type": "agency",
  "description": "3-4 paragraph description focusing on controversies, abuses of power, and investigative significance. 200+ words.",
  "role": "${agency.role}",
  "investigationCount": 1,
  "riskLevel": "extreme|high|moderate|low"
}`
    }
  ];
}

function buildCorporationPrompt(corp) {
  return [
    {
      role: 'system',
      content: `You are a factual investigative journalism database compiler. Generate accurate corporate profiles for an investigative platform. Focus on documented corporate crimes, fines, lawsuits, and controversies. Use only verified facts. Return valid JSON.`
    },
    {
      role: 'user',
      content: `Generate an investigative profile for: ${corp.name}
Industry: ${corp.industry}
Context: ${corp.role}

Return JSON:
{
  "id": "slug-name",
  "slug": "slug-name",
  "name": "${corp.name}",
  "type": "corporation",
  "description": "3-4 paragraph description focusing on corporate crimes, fines, lawsuits, environmental damage, labor abuses, and political influence. 200+ words. Be specific with dollar amounts and dates.",
  "role": "${corp.industry}",
  "investigationCount": 1,
  "riskLevel": "extreme|high|moderate|low"
}`
    }
  ];
}

function buildOrganizationPrompt(org) {
  return [
    {
      role: 'system',
      content: `You are a factual investigative journalism database compiler. Generate accurate organization profiles for an investigative platform. Use only verified facts. Return valid JSON.`
    },
    {
      role: 'user',
      content: `Generate an investigative profile for: ${org.name}${org.acronym ? ` (${org.acronym})` : ''}
Type: ${org.type}
Context: ${org.role}

Return JSON:
{
  "id": "slug-name",
  "slug": "slug-name",
  "name": "${org.name}",
  "type": "organization",
  "description": "3-4 paragraph description focusing on controversies, influence, funding, and investigative significance. 200+ words.",
  "role": "${org.type}",
  "investigationCount": 1,
  "riskLevel": "extreme|high|moderate|low"
}`
    }
  ];
}

// ─── Data Injection ──────────────────────────────────────────────

function getExistingSlugs(type) {
  const slugs = new Set();
  try {
    if (type === 'individuals') {
      for (let c = 97; c <= 122; c++) {
        const f = path.join(DATA_DIR, 'individuals', String.fromCharCode(c) + '.ts');
        if (fs.existsSync(f)) {
          const content = fs.readFileSync(f, 'utf8');
          const matches = content.match(/slug:\s*['"]([^'"]+)['"]/g) || [];
          matches.forEach(m => {
            const s = m.match(/['"]([^'"]+)['"]/);
            if (s) slugs.add(s[1]);
          });
        }
      }
    } else {
      const indexPath = path.join(DATA_DIR, type, 'index.ts');
      if (fs.existsSync(indexPath)) {
        const content = fs.readFileSync(indexPath, 'utf8');
        const matches = content.match(/['"]([a-z0-9-]+)['"]\s*:/g) || [];
        matches.forEach(m => {
          const s = m.match(/['"]([^'"]+)['"]/);
          if (s) slugs.add(s[1]);
        });
      }
    }
  } catch (e) {
    console.error(`Error reading existing slugs for ${type}:`, e.message);
  }
  return slugs;
}

function makeSlug(name) {
  return name.toLowerCase()
    .replace(/['']/g, '')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-|-$/g, '');
}

function injectIndividual(profile) {
  const slug = profile.slug || makeSlug(profile.name);
  const letter = slug[0];
  const shardFile = path.join(DATA_DIR, 'individuals', `${letter}.ts`);
  
  if (!fs.existsSync(shardFile)) {
    console.error(`  Shard file not found: ${shardFile}`);
    return false;
  }

  let content = fs.readFileSync(shardFile, 'utf8');
  
  // Build the TypeScript object
  const entry = buildIndividualEntry(slug, profile);
  
  // Find the closing of the default export and inject before it
  // Pattern: find the last "};" or "};\n\nexport default"
  const exportMatch = content.match(/\n(export default \w+;?\s*)$/);
  if (exportMatch) {
    const insertPoint = content.lastIndexOf(exportMatch[0]);
    // Find the end of the last entry (closing brace + comma or just brace)
    const beforeExport = content.substring(0, insertPoint).trimEnd();
    content = beforeExport + '\n' + entry + '\n\n' + exportMatch[0].trim() + '\n';
  } else {
    // Fallback: append before the last line
    const lines = content.split('\n');
    const lastLine = lines.pop();
    lines.push(entry);
    lines.push(lastLine);
    content = lines.join('\n');
  }
  
  fs.writeFileSync(shardFile, content, 'utf8');
  return true;
}

function buildIndividualEntry(slug, p) {
  const esc = (s) => (s || '').replace(/\\/g, '\\\\').replace(/'/g, "\\'").replace(/\n/g, ' ');
  
  let entry = `  '${slug}': {\n`;
  entry += `    name: '${esc(p.name)}',\n`;
  entry += `    slug: '${slug}',\n`;
  entry += `    title: '${esc(p.title)}',\n`;
  entry += `    role: '${esc(p.role)}',\n`;
  entry += `    riskLevel: '${p.riskLevel || 'medium'}',\n`;
  entry += `    description: '${esc(p.description)}',\n`;
  if (p.birthDate) entry += `    birthDate: '${esc(p.birthDate)}',\n`;
  if (p.birthPlace) entry += `    birthPlace: '${esc(p.birthPlace)}',\n`;
  if (p.nationality) entry += `    nationality: '${esc(p.nationality)}',\n`;
  if (p.netWorth) entry += `    netWorth: '${esc(p.netWorth)}',\n`;
  
  // Education
  entry += `    education: [${(p.education || []).map(e => `'${esc(e)}'`).join(', ')}],\n`;
  
  // Affiliations
  entry += `    affiliations: [\n`;
  (p.affiliations || []).forEach(a => {
    entry += `      { name: '${esc(a.name)}', role: '${esc(a.role)}', type: '${a.type || 'organization'}' },\n`;
  });
  entry += `    ],\n`;
  
  // Controversies
  entry += `    controversies: [\n`;
  (p.controversies || []).forEach(c => {
    entry += `      '${esc(c)}',\n`;
  });
  entry += `    ],\n`;
  
  // Known Associates
  if (p.knownAssociates && p.knownAssociates.length > 0) {
    entry += `    knownAssociates: [\n`;
    p.knownAssociates.forEach(a => {
      entry += `      { name: '${esc(a.name)}', relationship: '${esc(a.relationship)}' },\n`;
    });
    entry += `    ],\n`;
  }
  
  // Related Investigations
  entry += `    relatedInvestigations: [\n`;
  (p.relatedInvestigations || []).forEach(r => {
    entry += `      { title: '${esc(r.title)}', slug: '${r.slug || makeSlug(r.title)}', severity: '${r.severity || 'medium'}' },\n`;
  });
  entry += `    ],\n`;
  
  // Timeline
  entry += `    timeline: [\n`;
  (p.timeline || []).forEach(t => {
    entry += `      { date: '${esc(t.date)}', event: '${esc(t.event)}' },\n`;
  });
  entry += `    ],\n`;
  
  // Sources
  if (p.sources && p.sources.length > 0) {
    entry += `    sources: [\n`;
    p.sources.forEach(s => {
      entry += `      { title: '${esc(s.title)}'${s.url ? `, url: '${esc(s.url)}'` : ''}${s.date ? `, date: '${esc(s.date)}'` : ''} },\n`;
    });
    entry += `    ],\n`;
  }
  
  entry += `  },`;
  return entry;
}

function injectAgency(profile) {
  const slug = profile.slug || makeSlug(profile.name);
  const indexPath = path.join(DATA_DIR, 'agencies', 'index.ts');
  let content = fs.readFileSync(indexPath, 'utf8');
  
  const esc = (s) => (s || '').replace(/\\/g, '\\\\').replace(/'/g, "\\'").replace(/\n/g, ' ');
  
  let entry = `  '${slug}': {\n`;
  entry += `    id: '${slug}',\n`;
  entry += `    slug: '${slug}',\n`;
  entry += `    name: '${esc(profile.name)}',\n`;
  entry += `    type: 'agency',\n`;
  entry += `    description: '${esc(profile.description)}',\n`;
  entry += `    role: '${esc(profile.role)}',\n`;
  entry += `    investigationCount: ${profile.investigationCount || 1},\n`;
  entry += `    riskLevel: '${profile.riskLevel || 'moderate'}',\n`;
  entry += `  },`;
  
  // Insert before the closing of the Record
  const exportMatch = content.match(/\n};[\s\n]*(export default|module\.exports)/);
  if (exportMatch) {
    const insertPoint = content.indexOf(exportMatch[0]);
    content = content.substring(0, insertPoint) + '\n' + entry + content.substring(insertPoint);
  }
  
  fs.writeFileSync(indexPath, content, 'utf8');
  return true;
}

function injectCorporation(profile) {
  const slug = profile.slug || makeSlug(profile.name);
  const indexPath = path.join(DATA_DIR, 'corporations', 'index.ts');
  let content = fs.readFileSync(indexPath, 'utf8');
  
  const esc = (s) => (s || '').replace(/\\/g, '\\\\').replace(/'/g, "\\'").replace(/\n/g, ' ');
  
  let entry = `  '${slug}': {\n`;
  entry += `    id: '${slug}',\n`;
  entry += `    slug: '${slug}',\n`;
  entry += `    name: '${esc(profile.name)}',\n`;
  entry += `    type: 'corporation',\n`;
  entry += `    description: '${esc(profile.description)}',\n`;
  entry += `    role: '${esc(profile.role)}',\n`;
  entry += `    investigationCount: ${profile.investigationCount || 1},\n`;
  entry += `    riskLevel: '${profile.riskLevel || 'moderate'}',\n`;
  entry += `  },`;
  
  const exportMatch = content.match(/\n};[\s\n]*(export default|module\.exports)/);
  if (exportMatch) {
    const insertPoint = content.indexOf(exportMatch[0]);
    content = content.substring(0, insertPoint) + '\n' + entry + content.substring(insertPoint);
  }
  
  fs.writeFileSync(indexPath, content, 'utf8');
  return true;
}

function injectOrganization(profile) {
  const slug = profile.slug || makeSlug(profile.name);
  const indexPath = path.join(DATA_DIR, 'organizations', 'index.ts');
  let content = fs.readFileSync(indexPath, 'utf8');
  
  const esc = (s) => (s || '').replace(/\\/g, '\\\\').replace(/'/g, "\\'").replace(/\n/g, ' ');
  
  let entry = `  '${slug}': {\n`;
  entry += `    id: '${slug}',\n`;
  entry += `    slug: '${slug}',\n`;
  entry += `    name: '${esc(profile.name)}',\n`;
  entry += `    type: 'organization',\n`;
  entry += `    description: '${esc(profile.description)}',\n`;
  entry += `    role: '${esc(profile.role)}',\n`;
  entry += `    investigationCount: ${profile.investigationCount || 1},\n`;
  entry += `    riskLevel: '${profile.riskLevel || 'moderate'}',\n`;
  entry += `  },`;
  
  const exportMatch = content.match(/\n};[\s\n]*(export default|module\.exports)/);
  if (exportMatch) {
    const insertPoint = content.indexOf(exportMatch[0]);
    content = content.substring(0, insertPoint) + '\n' + entry + content.substring(insertPoint);
  }
  
  fs.writeFileSync(indexPath, content, 'utf8');
  return true;
}

// ─── Checkpoint System ───────────────────────────────────────────

function loadCheckpoint() {
  try {
    if (fs.existsSync(CHECKPOINT_FILE)) {
      return JSON.parse(fs.readFileSync(CHECKPOINT_FILE, 'utf8'));
    }
  } catch {}
  return { individuals: [], agencies: [], corporations: [], organizations: [], errors: [] };
}

function saveCheckpoint(checkpoint) {
  fs.writeFileSync(CHECKPOINT_FILE, JSON.stringify(checkpoint, null, 2), 'utf8');
}

// ─── Main Execution ──────────────────────────────────────────────

async function main() {
  const args = process.argv.slice(2);
  const typeFilter = args.find(a => a.startsWith('--type='))?.split('=')[1];
  const isDryRun = args.includes('--dry-run');
  const isResume = args.includes('--resume');
  
  console.log('╔══════════════════════════════════════════════════════╗');
  console.log('║          ARKHIVE GROQ BULK GENERATOR                ║');
  console.log('╠══════════════════════════════════════════════════════╣');
  console.log(`║  Model: ${GROQ_MODEL.padEnd(42)}║`);
  console.log(`║  Rate: ${REQUESTS_PER_MINUTE} req/min (${DELAY_MS}ms delay)${' '.repeat(21)}║`);
  console.log(`║  Dry Run: ${isDryRun}${' '.repeat(40 - String(isDryRun).length)}║`);
  console.log('╚══════════════════════════════════════════════════════╝');
  
  const checkpoint = isResume ? loadCheckpoint() : { individuals: [], agencies: [], corporations: [], organizations: [], errors: [] };
  const completedSlugs = new Set([
    ...checkpoint.individuals,
    ...checkpoint.agencies,
    ...checkpoint.corporations,
    ...checkpoint.organizations,
  ]);
  
  // Get existing slugs to avoid duplicates
  const existingIndividuals = getExistingSlugs('individuals');
  const existingAgencies = getExistingSlugs('agencies');
  const existingCorps = getExistingSlugs('corporations');
  const existingOrgs = getExistingSlugs('organizations');
  
  console.log(`\nExisting entities: ${existingIndividuals.size} individuals, ${existingAgencies.size} agencies, ${existingCorps.size} corps, ${existingOrgs.size} orgs`);
  
  let generated = 0;
  let skipped = 0;
  let errors = 0;
  const startTime = Date.now();
  
  // Process each type
  const types = typeFilter ? [typeFilter] : ['individuals', 'agencies', 'corporations', 'organizations'];
  
  for (const type of types) {
    let items, promptBuilder, injector, existingSlugs;
    
    switch (type) {
      case 'individuals':
        items = INDIVIDUALS_TO_GENERATE;
        promptBuilder = buildIndividualPrompt;
        injector = injectIndividual;
        existingSlugs = existingIndividuals;
        break;
      case 'agencies':
        items = AGENCIES_TO_GENERATE;
        promptBuilder = buildAgencyPrompt;
        injector = injectAgency;
        existingSlugs = existingAgencies;
        break;
      case 'corporations':
        items = CORPORATIONS_TO_GENERATE;
        promptBuilder = buildCorporationPrompt;
        injector = injectCorporation;
        existingSlugs = existingCorps;
        break;
      case 'organizations':
        items = ORGANIZATIONS_TO_GENERATE;
        promptBuilder = buildOrganizationPrompt;
        injector = injectOrganization;
        existingSlugs = existingOrgs;
        break;
      default:
        console.error(`Unknown type: ${type}`);
        continue;
    }
    
    console.log(`\n▸ Processing ${type}: ${items.length} entries`);
    
    for (let i = 0; i < items.length; i++) {
      const item = items[i];
      const slug = makeSlug(item.name);
      
      // Skip if already exists or already processed
      if (existingSlugs.has(slug) || completedSlugs.has(slug)) {
        skipped++;
        continue;
      }
      
      const elapsed = ((Date.now() - startTime) / 1000).toFixed(0);
      const rate = generated > 0 ? (generated / ((Date.now() - startTime) / 60000)).toFixed(1) : '0';
      process.stdout.write(`  [${elapsed}s] ${type} ${i+1}/${items.length} (${rate}/min) Generating: ${item.name}...`);
      
      try {
        const messages = promptBuilder(item);
        const profile = await groqRequest(messages);
        
        if (!isDryRun) {
          const success = injector(profile);
          if (success) {
            generated++;
            checkpoint[type].push(slug);
            saveCheckpoint(checkpoint);
            console.log(' ✓');
          } else {
            console.log(' ✗ (injection failed)');
            errors++;
          }
        } else {
          generated++;
          console.log(' ✓ (dry run)');
        }
      } catch (e) {
        console.log(` ✗ (${e.message.slice(0, 60)})`);
        checkpoint.errors.push({ slug, type, error: e.message, time: new Date().toISOString() });
        saveCheckpoint(checkpoint);
        errors++;
        
        // If rate limited, wait longer
        if (e.message.includes('rate') || e.message.includes('429')) {
          console.log('  ⏳ Rate limited. Waiting 60s...');
          await sleep(60000);
        }
      }
      
      // Respect rate limit
      await sleep(DELAY_MS);
    }
  }
  
  const totalTime = ((Date.now() - startTime) / 1000).toFixed(0);
  console.log('\n╔══════════════════════════════════════════════════════╗');
  console.log(`║  COMPLETE: ${generated} generated, ${skipped} skipped, ${errors} errors`);
  console.log(`║  Time: ${totalTime}s | Rate: ${(generated / (totalTime / 60)).toFixed(1)}/min`);
  console.log('╚══════════════════════════════════════════════════════╝');
}

main().catch(e => {
  console.error('Fatal error:', e);
  process.exit(1);
});
