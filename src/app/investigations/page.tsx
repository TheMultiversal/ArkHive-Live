"use client";

import { useState } from "react";
import InvestigationCard, { Investigation } from "@/components/cards/InvestigationCard";
import SearchFilter, { FilterState } from "@/components/ui/SearchFilter";
import { FileSearch, AlertTriangle } from "lucide-react";

// Comprehensive investigation database
const allInvestigations: Investigation[] = [
  {
    id: "trump-1",
    slug: "trump-criminal-compendium",
    title: "The Trump Criminal Compendium",
    summary: "A comprehensive juridical documentation of Donald Trump's crimes against humanity, universal law, and democratic institutions. Includes 40+ charges spanning election interference, human trafficking complicity, financial crimes, espionage, and incitement of insurrection.",
    category: "Crimes Against Humanity",
    severity: "critical",
    date: "June 16, 2015",
    entityCount: 28,
    tags: ["Election Interference", "Human Trafficking", "Tax Evasion", "RICO", "January 6", "Epstein"],
  },
  {
    id: "epstein-1",
    slug: "epstein-network",
    title: "Epstein Network Investigation",
    summary: "Comprehensive investigation into Jeffrey Epstein's global trafficking operation, his connections to Trump, and the network of powerful individuals who enabled decades of abuse.",
    category: "Human Trafficking",
    severity: "critical",
    date: "March 5, 2016",
    entityCount: 15,
    tags: ["Epstein", "Maxwell", "Trump", "Trafficking", "Sexual Abuse"],
  },
  {
    id: "j6-1",
    slug: "january-6-insurrection",
    title: "January 6 Insurrection",
    summary: "The violent attack on American democracy: Trump incited a mob to storm the Capitol, resulting in deaths, injuries, and attempted overthrow of a lawful election. Includes criminal convictions and ongoing proceedings.",
    category: "Election Interference",
    severity: "critical",
    date: "January 6, 2021",
    entityCount: 12,
    tags: ["January 6", "Insurrection", "Seditious Conspiracy", "Proud Boys", "Oath Keepers"],
  },
  {
    id: "russia-1",
    slug: "russian-interference",
    title: "Russian Election Interference",
    summary: "Mueller investigation documented 'sweeping and systematic' Russian interference in 2016 to help Trump, 140+ Trump-Russia contacts, and 10+ instances of obstruction of justice.",
    category: "Election Interference",
    severity: "critical",
    date: "June 14, 2016",
    entityCount: 10,
    tags: ["Mueller", "Russia", "Obstruction", "Collusion", "Manafort"],
  },
  {
    id: "docs-1",
    slug: "mar-a-lago-documents",
    title: "Mar-a-Lago Classified Documents",
    summary: "Trump illegally retained 300+ classified documents including TOP SECRET/SCI material, hid them from FBI, and obstructed justice. 40 federal counts in indictment.",
    category: "National Security",
    severity: "critical",
    date: "August 8, 2022",
    entityCount: 5,
    tags: ["Classified Documents", "Espionage", "Obstruction", "National Security"],
  },
  {
    id: "ga-1",
    slug: "georgia-rico",
    title: "Georgia Election RICO",
    summary: "Trump and 18 co-conspirators indicted under RICO for criminal enterprise to overturn 2020 Georgia election. Includes 'find 11,780 votes' call, fake electors, Ruby Freeman harassment.",
    category: "Election Interference",
    severity: "critical",
    date: "January 2, 2021",
    entityCount: 19,
    tags: ["RICO", "Georgia", "Election Fraud", "Raffensperger", "Fake Electors"],
  },
  {
    id: "fraud-1",
    slug: "trump-org-fraud",
    title: "Trump Organization Fraud",
    summary: "Trump found liable for massive fraud inflating assets by billions. $454 million judgment. Criminal conviction of Trump Org on 17 felony counts. CFO Weisselberg pled guilty to perjury.",
    category: "Financial Crimes",
    severity: "critical",
    date: "July 1, 2021",
    entityCount: 6,
    tags: ["Fraud", "Tax Evasion", "NY AG", "Civil Judgment"],
  },
  {
    id: "hush-1",
    slug: "hush-money",
    title: "Hush Money Election Fraud",
    summary: "First former president convicted of felonies. 34 counts of falsifying business records to conceal payments to Stormy Daniels and influence 2016 election.",
    category: "Election Interference",
    severity: "critical",
    date: "October 27, 2016",
    entityCount: 7,
    tags: ["Stormy Daniels", "Michael Cohen", "Campaign Finance", "Felony Conviction"],
  },
  {
    id: "ukraine-1",
    slug: "ukraine-extortion",
    title: "Ukraine Extortion",
    summary: "First Trump impeachment: Withheld $391M in military aid to pressure Ukraine into announcing Biden investigations. 'I would like you to do us a favor though.'",
    category: "Abuse of Power",
    severity: "critical",
    date: "July 25, 2019",
    entityCount: 8,
    tags: ["Impeachment", "Ukraine", "Quid Pro Quo", "Giuliani"],
  },
  {
    id: "family-1",
    slug: "family-separation",
    title: "Family Separation Crisis",
    summary: "Zero tolerance policy deliberately separated 5,500+ children from parents at border. Children in cages, infants taken, 7 children died in custody, 1,000+ still not reunited.",
    category: "Crimes Against Humanity",
    severity: "critical",
    date: "April 6, 2018",
    entityCount: 5,
    tags: ["Immigration", "Children", "Human Rights", "Stephen Miller"],
  },
  {
    id: "saudi-1",
    slug: "saudi-connections",
    title: "Saudi Arabia Connections",
    summary: "Khashoggi murder cover-up, MBS 'has Kushner in his pocket', $2B Saudi investment in Kushner's fund, emergency arms sales, Yemen war complicity.",
    category: "Foreign Corruption",
    severity: "critical",
    date: "October 2, 2018",
    entityCount: 5,
    tags: ["Saudi Arabia", "Khashoggi", "Kushner", "MBS", "Arms Deals"],
  },
  {
    id: "emol-1",
    slug: "emoluments",
    title: "Emoluments Violations",
    summary: "Trump profited from presidency through foreign government payments to his hotels. $72M+ from Trump DC Hotel, Saudi spending, T-Mobile executives during merger approval.",
    category: "Corruption",
    severity: "high",
    date: "January 20, 2017",
    entityCount: 4,
    tags: ["Emoluments", "Trump Hotel", "Foreign Payments", "Corruption"],
  },
  {
    id: "covid-1",
    slug: "covid-response",
    title: "COVID-19 Response Failure",
    summary: "Catastrophic pandemic mismanagement: 400,000+ preventable deaths, disbanded pandemic team, suppressed CDC guidance, promoted dangerous treatments, downplayed severity for months.",
    category: "Public Health",
    severity: "critical",
    date: "February 7, 2020",
    entityCount: 8,
    tags: ["COVID-19", "Pandemic", "Public Health", "CDC", "Death Toll"],
  },
  {
    id: "muslim-1",
    slug: "muslim-ban",
    title: "Muslim Travel Ban",
    summary: "Discriminatory ban on travel from Muslim-majority countries, implemented through chaos with no preparation, families separated, green card holders detained, courts intervened multiple times.",
    category: "Civil Rights",
    severity: "high",
    date: "January 27, 2017",
    entityCount: 5,
    tags: ["Muslim Ban", "Immigration", "Discrimination", "Executive Order"],
  },
  {
    id: "tax-1",
    slug: "tax-evasion",
    title: "Tax Evasion & Fraud",
    summary: "NY Times exposed decades of tax fraud: $100M+ evaded, fraudulent deductions, inheritance schemes, fake consulting payments to Ivanka. $454M civil judgment.",
    category: "Financial Crimes",
    severity: "critical",
    date: "October 2, 2018",
    entityCount: 6,
    tags: ["Tax Fraud", "NY Times", "Fred Trump", "Inheritance"],
  },
  {
    id: "obstruction-1",
    slug: "obstruction-of-justice",
    title: "Obstruction of Justice",
    summary: "Mueller documented 10+ instances of obstruction: Comey firing, witness tampering, dangling pardons, ordering Mueller fired, lying to investigators.",
    category: "Abuse of Power",
    severity: "critical",
    date: "May 9, 2017",
    entityCount: 7,
    tags: ["Mueller", "Obstruction", "Comey", "Pardons"],
  },
  {
    id: "climate-1",
    slug: "climate-sabotage",
    title: "Climate & Environmental Sabotage",
    summary: "Paris Agreement withdrawal, 100+ environmental rollbacks, EPA captured by industry, Scott Pruitt corruption scandals, accelerated climate destruction.",
    category: "Environment",
    severity: "critical",
    date: "June 1, 2017",
    entityCount: 5,
    tags: ["Climate", "EPA", "Paris Agreement", "Rollbacks"],
  },
  {
    id: "uni-1",
    slug: "trump-university",
    title: "Trump University Fraud",
    summary: "Fake university scammed 6,000+ students with worthless 'education' and high-pressure sales. $25 million settlement. Not accredited, not a university.",
    category: "Financial Crimes",
    severity: "high",
    date: "July 14, 2015",
    entityCount: 3,
    tags: ["Fraud", "Education", "Settlement", "Victims"],
  },
  {
    id: "foundation-1",
    slug: "trump-foundation",
    title: "Trump Foundation Self-Dealing",
    summary: "Charity fraud: Used foundation funds for campaign, portraits of himself, legal settlements. $2M penalty, forced dissolution, banned from running NY charities.",
    category: "Financial Crimes",
    severity: "high",
    date: "June 14, 2018",
    entityCount: 4,
    tags: ["Foundation", "Charity Fraud", "Self-Dealing", "NY AG"],
  },
  {
    id: "voter-1",
    slug: "voter-suppression",
    title: "Voter Suppression & USPS Sabotage",
    summary: "DeJoy dismantled mail sorting machines before 2020 election, Georgia 'find 11,780 votes' call, Big Lie campaign, fake electors scheme across 7 states.",
    category: "Election Interference",
    severity: "critical",
    date: "August 18, 2020",
    entityCount: 8,
    tags: ["Voter Suppression", "USPS", "DeJoy", "Big Lie"],
  },
  {
    id: "money-1",
    slug: "money-laundering",
    title: "Money Laundering Operations",
    summary: "Trump properties as laundromats for Russian/foreign cash: all-cash purchases, shell companies, Deutsche Bank relationship ($2B+ loans), suspicious property sales.",
    category: "Financial Crimes",
    severity: "critical",
    date: "March 6, 2013",
    entityCount: 6,
    tags: ["Money Laundering", "Russia", "Deutsche Bank", "Real Estate"],
  },
  {
    id: "assault-1",
    slug: "sexual-assault",
    title: "Sexual Assault Allegations",
    summary: "26+ women accusing Trump of sexual misconduct. E. Jean Carroll: Found liable for sexual abuse and defamation ($88.3M). Access Hollywood tape admission.",
    category: "Criminal Conduct",
    severity: "critical",
    date: "October 7, 2016",
    entityCount: 4,
    tags: ["Sexual Assault", "E. Jean Carroll", "Access Hollywood", "Defamation"],
  },
  {
    id: "pardons-1",
    slug: "pardons-corruption",
    title: "Corrupt Pardons",
    summary: "Pardoned Russia investigation witnesses (Manafort, Stone, Flynn), war criminals (Blackwater), cronies (Bannon), and family (Kushner's father). Obstruction via clemency.",
    category: "Abuse of Power",
    severity: "high",
    date: "December 23, 2020",
    entityCount: 10,
    tags: ["Pardons", "Obstruction", "Manafort", "Stone", "Flynn"],
  },
  {
    id: "cambridge-1",
    slug: "cambridge-analytica",
    title: "Cambridge Analytica",
    summary: "87 million Facebook users harvested without consent. Bannon-led firm used psychographic targeting for Trump campaign. $5 billion Facebook fine. Company dissolved.",
    category: "Election Interference",
    severity: "critical",
    date: "March 17, 2018",
    entityCount: 5,
    tags: ["Cambridge Analytica", "Facebook", "Bannon", "Data Harvesting"],
  },
  {
    id: "opioid-1",
    slug: "opioid-crisis",
    title: "Opioid Crisis Response",
    summary: "500,000+ Americans dead. Regulatory capture: Alex Azar (pharma exec) as HHS Secretary. Drug czar nominee withdrew after exposé on weakening DEA enforcement.",
    category: "Public Health",
    severity: "critical",
    date: "June 12, 2017",
    entityCount: 5,
    tags: ["Opioid", "Pharma", "Regulatory Capture", "Deaths"],
  },
  {
    id: "wall-1",
    slug: "build-the-wall-fraud",
    title: "Build the Wall Fraud",
    summary: "Steve Bannon and Brian Kolfage's 'We Build the Wall' scam: $25M raised, millions stolen for personal use. Bannon pardoned by Trump. Kolfage sentenced to 51 months.",
    category: "Financial Crimes",
    severity: "high",
    date: "December 17, 2018",
    entityCount: 5,
    tags: ["Bannon", "Fraud", "Wall", "Pardon", "Crowdfunding"],
  },
  {
    id: "platform-1",
    slug: "welcome-to-arkhive",
    title: "Welcome to the ArkHive Platform",
    summary: "This investigative platform is now live and ready to receive information. Each piece of data you provide will be researched, expanded, and documented with all related entities, connections, and affiliations.",
    category: "Platform",
    severity: "medium",
    date: "January 31, 2026",
    entityCount: 0,
    tags: ["Getting Started", "Platform Information", "How It Works"],
  },
  {
    id: "proud-boys-1",
    slug: "proud-boys-sedition",
    title: "Proud Boys Seditious Conspiracy",
    summary: "Proud Boys leadership convicted of seditious conspiracy for plotting to violently stop the transfer of power on January 6. Enrique Tarrio: 22 years, longest January 6 sentence.",
    category: "Election Interference",
    severity: "critical",
    date: "January 6, 2021",
    entityCount: 7,
    tags: ["Proud Boys", "Seditious Conspiracy", "January 6", "Tarrio", "Domestic Terrorism"],
  },
  {
    id: "oath-keepers-1",
    slug: "oath-keepers-sedition",
    title: "Oath Keepers Seditious Conspiracy",
    summary: "Stewart Rhodes and Oath Keepers convicted of seditious conspiracy for January 6. Stored weapons at DC-area hotel for 'quick reaction force.' First sedition convictions since 1995.",
    category: "Election Interference",
    severity: "critical",
    date: "January 6, 2021",
    entityCount: 6,
    tags: ["Oath Keepers", "Seditious Conspiracy", "January 6", "Stewart Rhodes", "QRF"],
  },
  {
    id: "fake-electors-1",
    slug: "fake-electors",
    title: "Fake Electors Scheme",
    summary: "Coordinated scheme across 7 states to submit fraudulent electoral certificates to overturn 2020 election. Dozens charged in Georgia, Michigan, Arizona, Nevada, Wisconsin.",
    category: "Election Interference",
    severity: "critical",
    date: "December 14, 2020",
    entityCount: 12,
    tags: ["Fake Electors", "Election Fraud", "Georgia RICO", "Eastman", "Chesebro"],
  },
  {
    id: "dominion-1",
    slug: "dominion-defamation",
    title: "Dominion Defamation",
    summary: "Fox News settled for record $787.5 million after spreading lies about Dominion Voting Systems. Giuliani ordered to pay $148 million for defaming election workers Ruby Freeman and Shaye Moss.",
    category: "Election Interference",
    severity: "critical",
    date: "November 7, 2020",
    entityCount: 9,
    tags: ["Dominion", "Fox News", "Giuliani", "Defamation", "Big Lie"],
  },
  {
    id: "deutsche-bank-1",
    slug: "deutsche-bank",
    title: "Deutsche Bank Investigation",
    summary: "Two decades of suspicious loans totaling $2+ billion to Trump when no other bank would lend. Connections to Russian money laundering, internal red flags ignored, ongoing investigations.",
    category: "Financial Crimes",
    severity: "critical",
    date: "September 22, 2015",
    entityCount: 8,
    tags: ["Deutsche Bank", "Money Laundering", "Russia", "Loans", "Fraud"],
  },
  {
    id: "inaugural-1",
    slug: "inaugural-committee",
    title: "Inaugural Committee Investigation",
    summary: "Record $107 million raised for Trump's 2017 inauguration, double Obama's total, yet delivered fewer events. Trump Hotel overcharged, $26M to Melania's friend, foreign donors investigated.",
    category: "Corruption",
    severity: "high",
    date: "January 20, 2017",
    entityCount: 7,
    tags: ["Inaugural Committee", "Tom Barrack", "Foreign Donations", "Nonprofit Fraud"],
  },
  {
    id: "charlottesville-1",
    slug: "charlottesville",
    title: "Charlottesville Response",
    summary: "After neo-Nazis killed Heather Heyer at 'Unite the Right' rally, Trump declared 'very fine people on both sides.' Defining moral failure condemned by military and religious leaders.",
    category: "Civil Rights",
    severity: "critical",
    date: "August 12, 2017",
    entityCount: 6,
    tags: ["Charlottesville", "White Supremacy", "Heather Heyer", "Very Fine People"],
  },
  {
    id: "lafayette-1",
    slug: "lafayette-square",
    title: "Lafayette Square Incident",
    summary: "Peaceful protesters tear-gassed so Trump could pose with a Bible at St. John's Church. Gen. Milley apologized. Military leaders issued rare public rebuke of authoritarian tactics.",
    category: "Abuse of Power",
    severity: "critical",
    date: "June 1, 2020",
    entityCount: 7,
    tags: ["Lafayette Square", "Tear Gas", "Photo Op", "BLM", "Military"],
  },
  {
    id: "puerto-rico-1",
    slug: "puerto-rico",
    title: "Puerto Rico Hurricane Response",
    summary: "Nearly 3,000 Americans died after Hurricane Maria. Trump threw paper towels, denied death toll, blocked billions in aid, and called it an 'incredible unsung success.'",
    category: "Crimes Against Humanity",
    severity: "critical",
    date: "September 20, 2017",
    entityCount: 6,
    tags: ["Puerto Rico", "Hurricane Maria", "FEMA", "Deaths", "Aid Blocked"],
  },
  {
    id: "defamation-1",
    slug: "defamation",
    title: "Defamation & Reputational Destruction",
    summary: "$88.3 million in judgments against Trump for defaming E. Jean Carroll (sexual assault survivor) and the Georgia election workers Ruby Freeman and Shaye Moss who received death threats.",
    category: "Criminal Conduct",
    severity: "critical",
    date: "June 21, 2019",
    entityCount: 7,
    tags: ["Defamation", "E. Jean Carroll", "Ruby Freeman", "Sexual Assault", "Election Lies"],
  },
  {
    id: "saudi-arms-1",
    slug: "saudi-arms-deal",
    title: "Saudi Arms Deal & Yemen Genocide",
    summary: "$110 billion arms deal enabling mass civilian casualties in Yemen. Over 150,000 dead. Trump vetoed congressional override. Kushner received $2B from Saudis after leaving office.",
    category: "Foreign Corruption",
    severity: "critical",
    date: "May 20, 2017",
    entityCount: 7,
    tags: ["Saudi Arabia", "Yemen", "Arms Sales", "War Crimes", "Khashoggi", "Kushner"],
  },
  // Historical and Systemic Investigations
  {
    id: "mkultra-1",
    slug: "mkultra",
    title: "MKUltra: CIA Mind Control Program",
    summary: "CIA conducted illegal experiments on unwitting Americans, testing LSD, electroshock, and mind control techniques. Thousands of victims. Most records destroyed to prevent accountability.",
    category: "Crimes Against Humanity",
    severity: "critical",
    date: "January 17, 2010",
    entityCount: 5,
    tags: ["CIA", "MKUltra", "Mind Control", "LSD", "Human Experimentation"],
  },
  {
    id: "tuskegee-1",
    slug: "tuskegee-experiment",
    title: "Tuskegee Syphilis Study",
    summary: "40 years of deliberate medical torture: U.S. government withheld treatment from 399 Black men with syphilis to study disease progression. At least 128 died, 40 wives infected.",
    category: "Crimes Against Humanity",
    severity: "critical",
    date: "April 22, 2009",
    entityCount: 3,
    tags: ["Tuskegee", "Medical Experimentation", "Racism", "Syphilis"],
  },
  {
    id: "cointelpro-1",
    slug: "cointelpro",
    title: "COINTELPRO: FBI Domestic Terrorism",
    summary: "FBI's systematic destruction of civil rights movement. Targeted MLK, Fred Hampton (assassinated), Black Panthers. Used illegal wiretaps, planted evidence, spread disinformation.",
    category: "Government Abuse of Power",
    severity: "critical",
    date: "March 29, 2010",
    entityCount: 5,
    tags: ["FBI", "COINTELPRO", "MLK", "Fred Hampton", "Black Panthers"],
  },
  {
    id: "mockingbird-1",
    slug: "operation-mockingbird",
    title: "Operation Mockingbird: CIA Media Control",
    summary: "CIA infiltrated American journalism, influencing 400+ journalists and 25 major news organizations to plant stories and suppress unfavorable coverage.",
    category: "Government Abuse of Power",
    severity: "critical",
    date: "July 14, 2010",
    entityCount: 4,
    tags: ["CIA", "Mockingbird", "Propaganda", "Media Manipulation"],
  },
  {
    id: "war-on-drugs-1",
    slug: "war-on-drugs",
    title: "War on Drugs: Systemic Racial Targeting",
    summary: "Nixon aide confessed: designed to target 'Black people and antiwar left.' $1 trillion spent, millions incarcerated, no reduction in drug use. Black Americans 5x more likely imprisoned.",
    category: "Systemic Racism",
    severity: "critical",
    date: "October 5, 2010",
    entityCount: 5,
    tags: ["War on Drugs", "Mass Incarceration", "Nixon", "Racial Targeting"],
  },
  {
    id: "police-brutality-1",
    slug: "police-brutality",
    title: "Police Brutality & Qualified Immunity",
    summary: "American police kill ~1,100 people annually - 30-60x more than other wealthy nations. Black Americans killed at 2.5x rate. Qualified immunity shields officers from accountability.",
    category: "Civil Rights",
    severity: "critical",
    date: "June 30, 2014",
    entityCount: 4,
    tags: ["Police Brutality", "Qualified Immunity", "George Floyd", "BLM"],
  },
  {
    id: "flint-1",
    slug: "flint-water-crisis",
    title: "Flint Water Crisis",
    summary: "Deliberate poisoning of Black city: 100,000 residents exposed to lead, children suffered brain damage. Officials covered up for 18 months. Criminal charges dropped.",
    category: "Environmental Racism",
    severity: "critical",
    date: "April 25, 2014",
    entityCount: 4,
    tags: ["Flint", "Lead Poisoning", "Environmental Racism", "Michigan"],
  },
  {
    id: "native-genocide-1",
    slug: "native-american-genocide",
    title: "Native American Genocide",
    summary: "Indigenous population reduced from 60-100 million to 800,000 through deliberate extermination, forced relocation, biological warfare, and cultural genocide. The largest genocide in history.",
    category: "Crimes Against Humanity",
    severity: "critical",
    date: "March 15, 2009",
    entityCount: 3,
    tags: ["Genocide", "Native Americans", "Trail of Tears", "Boarding Schools"],
  },
  {
    id: "japanese-internment-1",
    slug: "japanese-internment",
    title: "Japanese American Internment",
    summary: "120,000 Americans imprisoned without charge based on race. 62% were U.S. citizens. No Japanese American was ever charged with espionage. Driven by racism.",
    category: "Crimes Against Humanity",
    severity: "critical",
    date: "June 8, 2009",
    entityCount: 3,
    tags: ["Japanese Internment", "WWII", "Executive Order 9066", "Civil Liberties"],
  },
  {
    id: "nsa-surveillance-1",
    slug: "nsa-mass-surveillance",
    title: "NSA Mass Surveillance",
    summary: "Snowden exposed NSA collecting metadata on every American phone call, reading emails, accessing cloud data. Programs violated Fourth Amendment. No official faced consequences.",
    category: "Constitutional Violations",
    severity: "critical",
    date: "May 17, 2016",
    entityCount: 5,
    tags: ["NSA", "Snowden", "Mass Surveillance", "PRISM", "Privacy"],
  },
  {
    id: "tonkin-1",
    slug: "gulf-of-tonkin",
    title: "Gulf of Tonkin Incident",
    summary: "The lie that started Vietnam War: August 4 'attack' never happened, Johnson and McNamara knew and lied anyway. 58,000 Americans and 2-3 million Vietnamese died.",
    category: "War Crimes",
    severity: "critical",
    date: "February 12, 2011",
    entityCount: 4,
    tags: ["Vietnam War", "Gulf of Tonkin", "LBJ", "McNamara"],
  },
  {
    id: "cia-coups-1",
    slug: "cia-coups",
    title: "CIA Regime Change Operations",
    summary: "CIA overthrew 50+ governments: Iran (1953), Guatemala (1954), Chile (1973) and more. Killed millions, installed dictatorships, created lasting instability.",
    category: "War Crimes",
    severity: "critical",
    date: "November 8, 2011",
    entityCount: 4,
    tags: ["CIA", "Coup", "Regime Change", "Iran", "Chile", "Guatemala"],
  },
  {
    id: "kissinger-1",
    slug: "kissinger-crimes",
    title: "Henry Kissinger War Crimes",
    summary: "Architect of American atrocities: Cambodia bombing (150,000 civilians), Chile coup (3,000+ killed), Bangladesh genocide complicity (300,000-3,000,000 dead). Never prosecuted.",
    category: "War Crimes",
    severity: "critical",
    date: "August 9, 2011",
    entityCount: 5,
    tags: ["Kissinger", "War Crimes", "Cambodia", "Chile", "Bangladesh"],
  },
  {
    id: "dark-money-1",
    slug: "dark-money-politics",
    title: "Dark Money in American Politics",
    summary: "Citizens United enabled $1 billion+ in anonymous spending. Koch network spends $400M/cycle. Leonard Leo's $1.6B captured the judiciary. Billionaires bought democracy.",
    category: "Corruption",
    severity: "critical",
    date: "January 21, 2010",
    entityCount: 4,
    tags: ["Dark Money", "Citizens United", "Koch", "Leonard Leo"],
  },
  {
    id: "scotus-ethics-1",
    slug: "supreme-court-ethics",
    title: "Supreme Court Ethics Crisis",
    summary: "Thomas accepted millions from Harlan Crow. Alito took billionaire's private jet. No binding ethics code, refused recusals. Public trust collapsed to historic lows.",
    category: "Corruption",
    severity: "critical",
    date: "April 6, 2023",
    entityCount: 5,
    tags: ["Supreme Court", "Clarence Thomas", "Alito", "Ethics", "Corruption"],
  },
  {
    id: "iraq-war-1",
    slug: "iraq-war-lies",
    title: "Iraq War Lies",
    summary: "Bush administration lied about WMD and al-Qaeda connections to justify invasion. Hundreds of thousands killed, $2+ trillion cost, ISIS created. No accountability.",
    category: "War Crimes",
    severity: "critical",
    date: "April 22, 2013",
    entityCount: 5,
    tags: ["Iraq War", "WMD Lies", "Bush", "Cheney", "War Crimes"],
  },
  {
    id: "cia-torture-1",
    slug: "cia-torture-program",
    title: "CIA Torture Program",
    summary: "Post-9/11 torture at black sites: waterboarding, rectal feeding, coffin confinement. Senate report found no useful intelligence. No prosecutions - only whistleblower jailed.",
    category: "War Crimes",
    severity: "critical",
    date: "June 19, 2013",
    entityCount: 5,
    tags: ["CIA", "Torture", "Black Sites", "Waterboarding", "War Crimes"],
  },
  {
    id: "drone-1",
    slug: "drone-assassination-program",
    title: "Drone Assassination Program",
    summary: "Extrajudicial killing without due process. Thousands killed in Pakistan, Yemen, Somalia. American citizens assassinated. Civilian casualties systematically undercounted.",
    category: "War Crimes",
    severity: "critical",
    date: "January 9, 2014",
    entityCount: 4,
    tags: ["Drones", "Assassination", "Yemen", "Pakistan", "War Crimes"],
  },
  {
    id: "condor-1",
    slug: "operation-condor",
    title: "Operation Condor",
    summary: "CIA-backed assassination network of South American dictatorships. Six nations coordinated to murder 60,000+ dissidents. Kissinger authorized support. Letelier assassinated in Washington D.C.",
    category: "War Crimes",
    severity: "critical",
    date: "January 26, 2012",
    entityCount: 8,
    tags: ["Operation Condor", "CIA", "Chile", "Argentina", "Kissinger", "Assassination"],
  },
  {
    id: "chile-1",
    slug: "chile-coup",
    title: "Chile Coup (1973)",
    summary: "CIA helped overthrow democratically elected Salvador Allende. Pinochet dictatorship killed 3,000+, tortured 40,000+. Kissinger: 'I don't see why we need to stand by and watch a country go communist.'",
    category: "War Crimes",
    severity: "critical",
    date: "April 7, 2012",
    entityCount: 6,
    tags: ["Chile", "Pinochet", "CIA", "Coup", "Kissinger", "Allende"],
  },
  {
    id: "iran-coup-1",
    slug: "iran-coup",
    title: "Iran Coup (1953)",
    summary: "CIA/MI6 overthrew democratically elected Mosaddegh over oil nationalization. Installed Shah dictatorship, created SAVAK torture regime. Blowback: 1979 revolution, hostage crisis.",
    category: "War Crimes",
    severity: "critical",
    date: "July 15, 2012",
    entityCount: 5,
    tags: ["Iran", "CIA", "Coup", "Shah", "Oil", "Mosaddegh"],
  },
  {
    id: "project-2025-1",
    slug: "project-2025",
    title: "Project 2025: Authoritarian Blueprint",
    summary: "Heritage Foundation's 900-page plan to dismantle federal government, purge civil servants, weaponize DOJ, eliminate agencies, and consolidate executive power into autocracy.",
    category: "Abuse of Power",
    severity: "critical",
    date: "January 1, 2023",
    entityCount: 12,
    tags: ["Project 2025", "Heritage Foundation", "Authoritarianism", "Schedule F"],
  },
  {
    id: "federalist-1",
    slug: "federalist-society",
    title: "Federalist Society Judicial Capture",
    summary: "Dark money network has captured the federal judiciary. Leonard Leo directed $1.6B+ to install 6 Supreme Court justices who overturned Roe, gutted voting rights, and granted presidential immunity.",
    category: "Corruption",
    severity: "critical",
    date: "December 3, 2014",
    entityCount: 8,
    tags: ["Federalist Society", "Leonard Leo", "Supreme Court", "Dark Money", "Judicial Capture"],
  },
  {
    id: "vietnam-1",
    slug: "vietnam-war-crimes",
    title: "Vietnam War Crimes",
    summary: "My Lai massacre (500+ civilians murdered), Agent Orange (400,000 killed, 500,000 birth defects), Phoenix Program (20,000+ extrajudicial killings). 2-3 million Vietnamese dead.",
    category: "War Crimes",
    severity: "critical",
    date: "May 20, 2011",
    entityCount: 6,
    tags: ["Vietnam", "My Lai", "Agent Orange", "War Crimes", "Phoenix Program"],
  },
  {
    id: "abu-ghraib-1",
    slug: "abu-ghraib",
    title: "Abu Ghraib Torture Scandal",
    summary: "U.S. soldiers tortured Iraqi prisoners: sexual humiliation, electric shocks, mock executions, dogs. Photos leaked. Only low-level soldiers punished, commanders escaped accountability.",
    category: "War Crimes",
    severity: "critical",
    date: "February 14, 2013",
    entityCount: 5,
    tags: ["Abu Ghraib", "Iraq", "Torture", "War Crimes", "Military"],
  },
  {
    id: "boarding-schools-1",
    slug: "indian-boarding-schools",
    title: "Indian Boarding Schools",
    summary: "'Kill the Indian, save the man.' Children forcibly removed, native languages/culture forbidden. Physical and sexual abuse rampant. Thousands died. Federal investigation found 500+ burial sites.",
    category: "Crimes Against Humanity",
    severity: "critical",
    date: "October 30, 2012",
    entityCount: 4,
    tags: ["Boarding Schools", "Native Americans", "Genocide", "Cultural Destruction"],
  },
  {
    id: "iran-contra-1",
    slug: "iran-contra",
    title: "Iran-Contra Affair",
    summary: "Reagan secretly sold weapons to Iran, used profits to fund Nicaraguan death squads in violation of law. Oliver North shredded evidence. Key figures pardoned by Bush.",
    category: "Government Abuse of Power",
    severity: "critical",
    date: "November 18, 2011",
    entityCount: 7,
    tags: ["Iran-Contra", "Reagan", "Oliver North", "Nicaragua", "Arms Dealing"],
  },
  {
    id: "bush-v-gore-1",
    slug: "bush-v-gore",
    title: "Bush v. Gore: Stolen Election",
    summary: "Supreme Court stopped Florida recount, selected Bush as president by 5-4 vote. Scalia: counting votes would cause 'irreparable harm.' Recount showed Gore won Florida.",
    category: "Election Interference",
    severity: "critical",
    date: "March 18, 2014",
    entityCount: 6,
    tags: ["Bush v. Gore", "Supreme Court", "Florida", "Election", "Scalia"],
  },
  {
    id: "watergate-1",
    slug: "watergate",
    title: "Watergate Scandal",
    summary: "Nixon's men burglarized DNC, then covered it up. Saturday Night Massacre. 'I am not a crook.' Nixon resigned facing certain impeachment. Many conspirators imprisoned.",
    category: "Government Abuse of Power",
    severity: "critical",
    date: "September 3, 2009",
    entityCount: 8,
    tags: ["Watergate", "Nixon", "Cover-up", "Impeachment", "Saturday Night Massacre"],
  },
  {
    id: "2008-crisis-1",
    slug: "2008-financial-crisis",
    title: "2008 Financial Crisis",
    summary: "Wall Street fraud crashed global economy. 8 million jobs lost, millions lost homes. Taxpayers bailed out banks. No executives jailed. Bonuses paid with bailout money.",
    category: "Financial Crimes",
    severity: "critical",
    date: "May 28, 2015",
    entityCount: 7,
    tags: ["Financial Crisis", "Wall Street", "Bailout", "Fraud", "Recession"],
  },
  {
    id: "mass-incarceration-1",
    slug: "mass-incarceration",
    title: "Mass Incarceration System",
    summary: "U.S. has 4% of world population, 25% of prisoners. 2+ million incarcerated. Black Americans 5x more likely imprisoned. Private prisons profit from human caging.",
    category: "Systemic Racism",
    severity: "critical",
    date: "October 15, 2014",
    entityCount: 5,
    tags: ["Mass Incarceration", "Prison", "Racism", "War on Drugs", "Private Prisons"],
  },
  {
    id: "health-insurance-1",
    slug: "health-insurance-deaths",
    title: "Health Insurance Industry Deaths",
    summary: "68,000+ Americans die annually from lack of insurance. Insurers deny claims to maximize profit. Prior authorization delays kill patients. CEO Thompson assassinated 2024.",
    category: "Crimes Against Humanity",
    severity: "critical",
    date: "April 20, 2015",
    entityCount: 5,
    tags: ["Healthcare", "Insurance", "Deaths", "Denial of Care", "UnitedHealth"],
  },
  {
    id: "corporate-homicide-1",
    slug: "corporate-homicide",
    title: "Corporate Homicide: Unpunished Deaths",
    summary: "Corporations kill workers and consumers with impunity. Boeing 737 MAX (346 dead), Purdue Pharma opioids (500,000+ dead), Ford Pinto (180 dead). Executives rarely prosecuted.",
    category: "Criminal Conduct",
    severity: "critical",
    date: "February 11, 2015",
    entityCount: 6,
    tags: ["Corporate Crime", "Homicide", "Boeing", "Opioids", "Negligence"],
  },
  {
    id: "patriot-act-1",
    slug: "patriot-act",
    title: "USA PATRIOT Act",
    summary: "Rushed through Congress after 9/11. Enabled mass surveillance, NSL abuse, indefinite detention. Most legislators admitted they didn't read it. Still in effect.",
    category: "Constitutional Violations",
    severity: "critical",
    date: "August 11, 2013",
    entityCount: 4,
    tags: ["PATRIOT Act", "Surveillance", "9/11", "Civil Liberties"],
  },
  {
    id: "guantanamo-1",
    slug: "guantanamo-bay",
    title: "Guantánamo Bay Detention",
    summary: "Indefinite detention without trial. Torture including waterboarding, force-feeding, sleep deprivation. 780 detained, most never charged. Still open despite promises to close.",
    category: "War Crimes",
    severity: "critical",
    date: "October 28, 2013",
    entityCount: 5,
    tags: ["Guantánamo", "Torture", "Detention", "War on Terror", "Human Rights"],
  },
  {
    id: "private-prisons-1",
    slug: "private-prison-industry",
    title: "Private Prison Industrial Complex",
    summary: "CoreCivic and GEO Group profit from incarceration. Lobby for harsh sentencing. Deaths, abuse, inadequate care. Immigration detention contracts worth billions.",
    category: "Corruption",
    severity: "critical",
    date: "August 6, 2014",
    entityCount: 5,
    tags: ["Private Prisons", "GEO Group", "CoreCivic", "Immigration", "Lobbying"],
  },
];

const categories = [
  "Crimes Against Humanity",
  "Human Trafficking",
  "Election Interference",
  "National Security",
  "Financial Crimes",
  "Abuse of Power",
  "Foreign Corruption",
  "Corruption",
  "Public Health",
  "Environment",
  "Civil Rights",
  "Criminal Conduct",
  "Platform",
  "Government Abuse of Power",
  "Systemic Racism",
  "Environmental Racism",
  "Constitutional Violations",
  "War Crimes",
];

const severityLevels = ["Critical", "High", "Medium", "Low"];

export default function InvestigationsPage() {
  const [filteredInvestigations, setFilteredInvestigations] = useState(allInvestigations);
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = (query: string) => {
    setSearchQuery(query);
    filterInvestigations(query, null);
  };

  const handleFilterChange = (filters: FilterState) => {
    filterInvestigations(searchQuery, filters);
  };

  const filterInvestigations = (query: string, filters: FilterState | null) => {
    let results = allInvestigations;

    if (query) {
      const lowerQuery = query.toLowerCase();
      results = results.filter(
        (inv) =>
          inv.title.toLowerCase().includes(lowerQuery) ||
          inv.summary.toLowerCase().includes(lowerQuery) ||
          inv.tags.some((tag) => tag.toLowerCase().includes(lowerQuery))
      );
    }

    if (filters) {
      if (filters.category) {
        results = results.filter((inv) => inv.category === filters.category);
      }
      if (filters.severity) {
        results = results.filter(
          (inv) => inv.severity.toLowerCase() === filters.severity.toLowerCase()
        );
      }
    }

    setFilteredInvestigations(results);
  };

  return (
    <div className="min-h-screen pt-20 lg:pt-24 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header - Crystal Clear */}
        <div className="py-8 lg:py-12">
          <div className="border-2 border-blood-800/60 bg-black/60 p-6 lg:p-8 mb-8">
            {/* Top decorative line */}
            <div className="flex items-center gap-4 mb-6">
              <span className="h-[2px] flex-1 bg-gradient-to-r from-blood-700 to-transparent" />
              <span className="text-xs text-zinc-600 uppercase tracking-[0.3em]">Declassified Files</span>
              <span className="h-[2px] flex-1 bg-gradient-to-l from-blood-700 to-transparent" />
            </div>

            {/* Main Title */}
            <div className="text-center mb-6">
              <h1 className="text-4xl lg:text-5xl font-black text-white uppercase tracking-wider mb-2">
                INVESTIGATIONS
              </h1>
              <p className="text-lg text-blood-600 font-bold uppercase tracking-[0.2em]">
                The Evidence They Don&apos;t Want You To See
              </p>
            </div>

            {/* Description */}
            <div className="max-w-3xl mx-auto text-center">
              <p className="text-zinc-400 leading-relaxed mb-4">
                Every document here represents a crime. Every file exposes a lie. Every investigation 
                traces the web of corruption from the shadows into the light.
              </p>
              <div className="flex flex-wrap justify-center gap-4 text-xs">
                <span className="flex items-center gap-2 text-zinc-500">
                  <span className="w-2 h-2 bg-blood-700" />
                  Government Operations
                </span>
                <span className="flex items-center gap-2 text-zinc-500">
                  <span className="w-2 h-2 bg-blood-700" />
                  Corporate Collusion
                </span>
                <span className="flex items-center gap-2 text-zinc-500">
                  <span className="w-2 h-2 bg-blood-700" />
                  Medical Experiments
                </span>
                <span className="flex items-center gap-2 text-zinc-500">
                  <span className="w-2 h-2 bg-blood-700" />
                  Cover-Ups & Lies
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Search & Filters */}
        <div className="mb-8">
          <SearchFilter
            onSearch={handleSearch}
            onFilterChange={handleFilterChange}
            categories={categories}
            severityLevels={severityLevels}
          />
        </div>

        {/* Results Count */}
        <div className="flex items-center justify-between mb-6">
          <p className="text-dark-400">
            Showing <span className="text-white font-semibold">{filteredInvestigations.length}</span> investigation{filteredInvestigations.length !== 1 ? "s" : ""}
          </p>
        </div>

        {/* Investigations Grid */}
        {filteredInvestigations.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredInvestigations.map((investigation, index) => (
              <InvestigationCard
                key={investigation.id}
                investigation={investigation}
                featured={index === 0 && filteredInvestigations.length > 2}
              />
            ))}
          </div>
        ) : (
          <div className="border border-zinc-800 bg-black/60 p-12 text-center">
            <div className="w-16 h-16 border-2 border-zinc-700 flex items-center justify-center mx-auto mb-4">
              <AlertTriangle className="w-8 h-8 text-zinc-600" />
            </div>
            <h3 className="text-xl font-bold text-white mb-2 uppercase tracking-wider">No Files Found</h3>
            <p className="text-zinc-500 max-w-md mx-auto">
              No investigations match your search criteria. Adjust your filters or check back 
              as new evidence is declassified.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
