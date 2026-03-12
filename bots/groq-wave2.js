#!/usr/bin/env node
/**
 * ArkHive Groq Bulk Generator — WAVE 2
 * Thousands more entities across all categories.
 * Run after wave 1 completes, or in parallel.
 * 
 * Usage: node bots/groq-wave2.js [--resume] [--type=individuals|agencies|corporations|organizations]
 */

const fs = require('fs');
const path = require('path');
const https = require('https');

const PROJECT_ROOT = path.resolve(__dirname, '..');
const DATA_DIR = path.join(PROJECT_ROOT, 'src', 'data');
const CHECKPOINT_FILE = path.join(__dirname, '.groq-wave2-checkpoint.json');

function loadApiKey() {
  const envPath = path.join(PROJECT_ROOT, '.env.local');
  if (!fs.existsSync(envPath)) { console.error('ERROR: .env.local not found'); process.exit(1); }
  const match = fs.readFileSync(envPath, 'utf8').match(/GROQ_API_KEY=(.+)/);
  if (!match || !match[1] || match[1] === 'your_key_here') { console.error('ERROR: GROQ_API_KEY not set'); process.exit(1); }
  return match[1].trim();
}

const GROQ_API_KEY = loadApiKey();
const GROQ_MODEL = 'llama-3.3-70b-versatile';
const REQUESTS_PER_MINUTE = 28;
const DELAY_MS = Math.ceil(60000 / REQUESTS_PER_MINUTE);

// ──────────────────────────────────────────────────────────────────
// WAVE 2: MASSIVE NAME LISTS
// ──────────────────────────────────────────────────────────────────

const INDIVIDUALS_WAVE2 = [
  // ── US Congress Members (Current/Recent) ──
  { name: 'Alexandria Ocasio-Cortez', title: 'US Representative', role: 'NY-14, progressive, Green New Deal' },
  { name: 'Ilhan Omar', title: 'US Representative', role: 'MN-5, first Somali-American in Congress' },
  { name: 'Rashida Tlaib', title: 'US Representative', role: 'MI-12, Palestinian-American, censured' },
  { name: 'Ayanna Pressley', title: 'US Representative', role: 'MA-7, progressive Squad member' },
  { name: 'Cori Bush', title: 'Former US Representative', role: 'MO-1, BLM activist, security spending probe' },
  { name: 'Jamaal Bowman', title: 'Former US Representative', role: 'NY-16, fire alarm incident, AIPAC target' },
  { name: 'Bernie Sanders', title: 'US Senator', role: 'Vermont Independent, democratic socialist' },
  { name: 'Elizabeth Warren', title: 'US Senator', role: 'Massachusetts, consumer protection, Wall Street critic' },
  { name: 'Joe Manchin', title: 'Former US Senator', role: 'West Virginia, coal interests, BBB obstruction' },
  { name: 'Kyrsten Sinema', title: 'Former US Senator', role: 'Arizona, party switch, filibuster defender' },
  { name: 'Tim Scott', title: 'US Senator', role: 'South Carolina, 2024 candidate, police reform' },
  { name: 'John Fetterman', title: 'US Senator', role: 'Pennsylvania, stroke recovery, progressive' },
  { name: 'Katie Porter', title: 'Former US Representative', role: 'California, whiteboard oversight' },
  { name: 'Adam Schiff', title: 'US Senator', role: 'California, impeachment manager, Intelligence Committee' },
  { name: 'Jamie Raskin', title: 'US Representative', role: 'Maryland, impeachment manager, Jan 6 Committee' },
  { name: 'Liz Cheney', title: 'Former US Representative', role: 'Wyoming, Jan 6 Committee Vice Chair, ousted by GOP' },
  { name: 'Bennie Thompson', title: 'US Representative', role: 'Mississippi, Jan 6 Committee Chair' },
  { name: 'Dan Crenshaw', title: 'US Representative', role: 'Texas, former Navy SEAL, stock trading' },
  { name: 'Madison Cawthorn', title: 'Former US Representative', role: 'North Carolina, scandals, cocaine orgies claim' },
  { name: 'George Santos', title: 'Former US Representative', role: 'NY, fabricated biography, expelled' },
  { name: 'Henry Cuellar', title: 'US Representative', role: 'Texas, Azerbaijan bribery charges' },
  { name: 'Dianne Feinstein', title: 'Former US Senator', role: 'California, cognitive decline, Chinese spy driver' },
  { name: 'Richard Blumenthal', title: 'US Senator', role: 'Connecticut, Vietnam service misrepresentation' },
  { name: 'Chuck Grassley', title: 'US Senator', role: 'Iowa, Judiciary Committee, whistleblower advocate' },
  { name: 'Susan Collins', title: 'US Senator', role: 'Maine, Kavanaugh vote, moderate swing' },
  { name: 'Lisa Murkowski', title: 'US Senator', role: 'Alaska, Trump impeachment vote' },
  { name: 'Mitt Romney', title: 'Former US Senator', role: 'Utah, Bain Capital, Trump critic, Pierre Delecto' },
  { name: 'Mike Lee', title: 'US Senator', role: 'Utah, Jan 6 texts to Meadows' },
  { name: 'Cindy Hyde-Smith', title: 'US Senator', role: 'Mississippi, hanging comment controversy' },
  { name: 'Martha McSally', title: 'Former US Senator', role: 'Arizona, military sexual assault survivor' },
  
  // ── Trump Administration Officials ──
  { name: 'Rex Tillerson', title: 'Former Secretary of State', role: 'ExxonMobil CEO, Russia Order of Friendship' },
  { name: 'Scott Pruitt', title: 'Former EPA Administrator', role: 'EPA dismantling, ethics scandals, $43k phone booth' },
  { name: 'Ryan Zinke', title: 'Former Interior Secretary', role: 'Real estate deals, helicopter rides' },
  { name: 'Ben Carson', title: 'Former HUD Secretary', role: 'Brain surgeon, $31k dining set, REO controversy' },
  { name: 'Betsy DeVos', title: 'Former Education Secretary', role: 'School choice, Amway fortune, Erik Prince sister' },
  { name: 'Steven Mnuchin', title: 'Former Treasury Secretary', role: 'Goldman Sachs, OneWest foreclosures, Saudi fund' },
  { name: 'Elaine Chao', title: 'Former Transportation Secretary', role: 'Mitch McConnell wife, Chinese shipping family' },
  { name: 'Mike Pompeo', title: 'Former Secretary of State', role: 'CIA Director, Kansas politics, Ukraine' },
  { name: 'Chad Wolf', title: 'Former Acting DHS Secretary', role: 'Illegally appointed, Portland deployments' },
  { name: 'Ken Cuccinelli', title: 'Former Acting DHS Deputy', role: 'Anti-immigration, illegally appointed' },
  { name: 'Robert Lighthizer', title: 'Former Trade Representative', role: 'Trade wars, tariff architect' },
  { name: 'Larry Kudlow', title: 'Former NEC Director', role: 'Economic adviser, COVID denial' },
  { name: 'Kellyanne Conway', title: 'Former Senior Counselor', role: 'Alternative facts, Hatch Act violations' },
  { name: 'Hope Hicks', title: 'Former Communications Director', role: 'Trump confidant, hush money witness' },
  { name: 'Sean Spicer', title: 'Former Press Secretary', role: 'Inauguration crowd size, Holocaust gaffe' },
  { name: 'Sarah Huckabee Sanders', title: 'Governor of Arkansas', role: 'Former Press Secretary, Arkansas Governor' },
  { name: 'Kayleigh McEnany', title: 'Former Press Secretary', role: 'Election denial briefings' },
  { name: 'John Kelly', title: 'Former Chief of Staff', role: 'Marine General, Trump critic, Gold Star family' },
  { name: 'H.R. McMaster', title: 'Former National Security Adviser', role: 'Army General, replaced Flynn' },
  { name: 'Reince Priebus', title: 'Former Chief of Staff', role: 'RNC Chairman, first CoS, quickly fired' },
  
  // ── International Political Figures ──
  { name: 'Angela Merkel', title: 'Former Chancellor of Germany', role: 'Longest-serving European leader, refugee crisis' },
  { name: 'Emmanuel Macron', title: 'President of France', role: 'French President, pension reform protests' },
  { name: 'Olaf Scholz', title: 'Chancellor of Germany', role: 'Cum-ex scandal, Ukraine policy' },
  { name: 'Giorgia Meloni', title: 'Prime Minister of Italy', role: 'Far-right, Brothers of Italy' },
  { name: 'Geert Wilders', title: 'Dutch Political Leader', role: 'Anti-Islam, PVV party' },
  { name: 'Volodymyr Zelenskyy', title: 'President of Ukraine', role: 'War leader, comedian turned president' },
  { name: 'Lula da Silva', title: 'President of Brazil', role: 'Returned to power, corruption conviction overturned' },
  { name: 'Andrés Manuel López Obrador', title: 'Former President of Mexico', role: 'AMLO, militarization, drug policy' },
  { name: 'Claudia Sheinbaum', title: 'President of Mexico', role: 'First female Mexican president' },
  { name: 'Justin Trudeau', title: 'Former Prime Minister of Canada', role: 'SNC-Lavalin, blackface, resignation' },
  { name: 'Jacinda Ardern', title: 'Former PM of New Zealand', role: 'COVID response, Christchurch, resignation' },
  { name: 'Scott Morrison', title: 'Former PM of Australia', role: 'Secret ministry scandal, Robodebt' },
  { name: 'Rishi Sunak', title: 'Former UK Prime Minister', role: 'Wealthy PM, wife tax controversy' },
  { name: 'Liz Truss', title: 'Former UK Prime Minister', role: 'Shortest-serving PM, economic crash' },
  { name: 'Keir Starmer', title: 'UK Prime Minister', role: 'Labour leader, former prosecutor' },
  { name: 'Fumio Kishida', title: 'Former PM of Japan', role: 'Unification Church ties, slush funds' },
  { name: 'Shinzo Abe', title: 'Former PM of Japan', role: 'Assassination, Nippon Kaigi, Abenomics' },
  { name: 'Moon Jae-in', title: 'Former President of South Korea', role: 'North Korea diplomacy' },
  { name: 'Yoon Suk-yeol', title: 'President of South Korea', role: 'Martial law declaration, impeachment' },
  { name: 'Imran Khan', title: 'Former PM of Pakistan', role: 'Imprisoned, military opposition, Toshakhana' },
  
  // ── Russian Power Structure ──
  { name: 'Dmitri Medvedev', title: 'Deputy Chairman Security Council', role: 'Former President, nuclear threats' },
  { name: 'Sergei Lavrov', title: 'Russian Foreign Minister', role: 'Longest-serving FM, propaganda' },
  { name: 'Sergei Shoigu', title: 'Former Russian Defense Minister', role: 'Ukraine war failures, replaced' },
  { name: 'Nikolai Patrushev', title: 'Former Security Council Secretary', role: 'FSB, Ukraine hawk' },
  { name: 'Ramzan Kadyrov', title: 'Head of Chechen Republic', role: 'Putin enforcer, human rights abuses, TikTok battalion' },
  { name: 'Mikhail Khodorkovsky', title: 'Former Oligarch', role: 'Yukos, imprisoned by Putin, exile' },
  { name: 'Alexei Miller', title: 'CEO of Gazprom', role: 'Putin ally, energy weapon' },
  { name: 'Igor Sechin', title: 'CEO of Rosneft', role: 'Putin inner circle, sanctions' },
  
  // ── Chinese Power Structure ──
  { name: 'Li Qiang', title: 'Premier of China', role: 'Premier, Shanghai lockdown' },
  { name: 'Wang Yi', title: 'Chinese Foreign Minister', role: 'Diplomat, wolf warrior' },
  { name: 'Jack Ma', title: 'Co-founder of Alibaba', role: 'Disappeared after criticizing regulators, returned' },
  { name: 'Peng Shuai', title: 'Tennis Player', role: 'Sexual assault accusation against CCP official, disappeared' },
  { name: 'Carrie Lam', title: 'Former Chief Executive of Hong Kong', role: 'Extradition bill, crackdown' },
  
  // ── Middle East Power Figures ──
  { name: 'Mohammed bin Zayed', title: 'President of UAE', role: 'MBZ, Yemen war, Abraham Accords' },
  { name: 'Qasem Soleimani', title: 'Former IRGC Commander', role: 'Assassinated by US drone, proxy operations' },
  { name: 'Ebrahim Raisi', title: 'Former President of Iran', role: 'Death committee, died in helicopter crash' },
  { name: 'Ismail Haniyeh', title: 'Former Hamas Political Bureau Chief', role: 'Assassinated in Tehran' },
  { name: 'Yahya Sinwar', title: 'Former Hamas Leader', role: 'October 7 mastermind, killed' },
  { name: 'Hassan Nasrallah', title: 'Former Hezbollah Leader', role: 'Assassinated by Israel, Lebanon influence' },
  { name: 'Naftali Bennett', title: 'Former PM of Israel', role: 'Short-lived coalition, settler background' },
  { name: 'Yair Lapid', title: 'Israeli Opposition Leader', role: 'Former PM, centrist' },
  { name: 'Itamar Ben-Gvir', title: 'Israeli National Security Minister', role: 'Extremist, settler violence' },
  { name: 'Bezalel Smotrich', title: 'Israeli Finance Minister', role: 'Extremist, settlements expansion' },
  
  // ── African Leaders ──
  { name: 'Abiy Ahmed', title: 'PM of Ethiopia', role: 'Nobel Peace Prize, Tigray war' },
  { name: 'Omar al-Bashir', title: 'Former President of Sudan', role: 'ICC arrest warrant, Darfur genocide' },
  { name: 'Yoweri Museveni', title: 'President of Uganda', role: '38 years in power, anti-LGBT law' },
  { name: 'Paul Biya', title: 'President of Cameroon', role: '42 years in power, anglophone crisis' },
  { name: 'Teodoro Obiang', title: 'President of Equatorial Guinea', role: 'Longest-serving president, kleptocracy' },
  { name: 'William Ruto', title: 'President of Kenya', role: 'ICC charges dropped, tax protests' },
  { name: 'Emmerson Mnangagwa', title: 'President of Zimbabwe', role: 'Post-Mugabe, Crocodile, military coup' },
  
  // ── Latin American Figures ──
  { name: 'Alberto Fujimori', title: 'Former President of Peru', role: 'Authoritarian, pardoned, sterilizations' },
  { name: 'Hugo Chávez', title: 'Former President of Venezuela', role: 'Bolivarian revolution, oil economy destruction' },
  { name: 'Cristina Fernández de Kirchner', title: 'Former President of Argentina', role: 'Corruption conviction, assassination attempt' },
  { name: 'Gustavo Petro', title: 'President of Colombia', role: 'First left-wing Colombian president, former guerrilla' },
  { name: 'Gabriel Boric', title: 'President of Chile', role: 'Youngest Chilean president, protest movement' },
  
  // ── Historical Investigative Figures ──
  { name: 'Lee Harvey Oswald', title: 'Alleged JFK Assassin', role: 'Killed before trial, conspiracy theories' },
  { name: 'Jack Ruby', title: 'Nightclub Owner', role: 'Killed Oswald on live TV' },
  { name: 'Sirhan Sirhan', title: 'RFK Assassin', role: 'Still in prison, MKUltra theories' },
  { name: 'James Earl Ray', title: 'MLK Assassin', role: 'Pled guilty, later recanted' },
  { name: 'Mark David Chapman', title: 'John Lennon Assassin', role: 'Still in prison' },
  { name: 'John Wilkes Booth', title: 'Lincoln Assassin', role: 'Confederate sympathizer, actor' },
  { name: 'Timothy McVeigh', title: 'Oklahoma City Bomber', role: 'Domestic terrorism, executed' },
  { name: 'Ted Kaczynski', title: 'Unabomber', role: 'Harvard experiment, manifesto, died in prison' },
  { name: 'Charles Manson', title: 'Cult Leader', role: 'Helter Skelter, Tate-LaBianca murders' },
  { name: 'Jim Jones', title: 'Peoples Temple Leader', role: 'Jonestown massacre, 918 dead' },
  { name: 'David Koresh', title: 'Branch Davidian Leader', role: 'Waco siege, ATF/FBI raid, 86 dead' },
  { name: 'Warren Jeffs', title: 'FLDS President', role: 'Child sexual assault, polygamist cult' },
  
  // ── Financial Criminals & White-Collar ──
  { name: 'Bernard Madoff', title: 'Ponzi Scheme Operator', role: '$65B fraud, 150-year sentence, died in prison' },
  { name: 'Jordan Belfort', title: 'Former Stockbroker', role: 'Wolf of Wall Street, pump and dump' },
  { name: 'Ivan Boesky', title: 'Former Financier', role: 'Inside trading, "Greed is good" inspiration' },
  { name: 'Michael Milken', title: 'Former Financier', role: 'Junk bond king, insider trading, pardoned' },
  { name: 'Raj Rajaratnam', title: 'Former Hedge Fund Manager', role: 'Galleon Group insider trading' },
  { name: 'Steven Cohen', title: 'Hedge Fund Manager', role: 'SAC Capital insider trading, Point72' },
  { name: 'Tom Hayes', title: 'Former Trader', role: 'LIBOR rigging, first person convicted' },
  { name: 'Do Kwon', title: 'Former Terraform Labs CEO', role: 'Terra/Luna crypto collapse, $40B lost' },
  { name: 'Alex Mashinsky', title: 'Former Celsius CEO', role: 'Crypto lending fraud' },
  { name: 'Su Zhu', title: 'Three Arrows Capital Co-founder', role: 'Crypto hedge fund collapse' },
  { name: 'Charlie Javice', title: 'Former Frank CEO', role: 'Faked 4M customers, sold to JPMorgan' },
  { name: 'Trevor Milton', title: 'Former Nikola CEO', role: 'EV fraud, rolling truck downhill' },
  { name: 'Sunny Balwani', title: 'Former Theranos COO', role: 'Convicted of fraud with Elizabeth Holmes' },
  { name: 'Markus Braun', title: 'Former Wirecard CEO', role: '€1.9B accounting fraud, Wirecard collapse' },
  { name: 'Carlos Ghosn', title: 'Former Nissan-Renault CEO', role: 'Financial misconduct, escape from Japan in instrument case' },
  
  // ── Tech Industry Figures ──
  { name: 'Sheryl Sandberg', title: 'Former Meta COO', role: 'Lean In, Cambridge Analytica response, boyfriend controversy' },
  { name: 'Susan Wojcicki', title: 'Former YouTube CEO', role: 'Content moderation, died 2024' },
  { name: 'Andy Jassy', title: 'CEO of Amazon', role: 'AWS growth, RTO mandate, layoffs' },
  { name: 'Jensen Huang', title: 'CEO of Nvidia', role: 'AI chip monopoly, $3T valuation' },
  { name: 'Lisa Su', title: 'CEO of AMD', role: 'AI competition, turnaround CEO' },
  { name: 'Dara Khosrowshahi', title: 'CEO of Uber', role: 'Post-Kalanick cleanup, Uber Files' },
  { name: 'Daniel Ek', title: 'CEO of Spotify', role: 'Artist pay controversy, AI controversy' },
  { name: 'Bobby Kotick', title: 'Former CEO of Activision Blizzard', role: 'Sexual harassment culture, Epstein contact' },
  { name: 'Reed Hastings', title: 'Former CEO of Netflix', role: 'Password crackdown, content spending' },
  { name: 'Brian Chesky', title: 'CEO of Airbnb', role: 'Housing crisis impact, party ban' },
  { name: 'Patrick Collison', title: 'CEO of Stripe', role: 'Payments monopoly, valuation' },
  { name: 'Brian Armstrong', title: 'CEO of Coinbase', role: 'Crypto regulation battles, SEC lawsuit' },
  { name: 'Changpeng Zhao', title: 'Former CEO of Binance', role: 'CZ, $4.3B DOJ settlement, imprisoned' },
  { name: 'Evan Spiegel', title: 'CEO of Snap', role: 'Snapchat, teen safety concerns' },
  { name: 'Whitney Wolfe Herd', title: 'Founder of Bumble', role: 'Tinder lawsuit, youngest female IPO CEO' },
  
  // ── Media & Journalism ──
  { name: 'Bob Woodward', title: 'Journalist', role: 'Watergate, Deep Throat, Trump recordings' },
  { name: 'Carl Bernstein', title: 'Journalist', role: 'Watergate investigation, Washington Post' },
  { name: 'Ronan Farrow', title: 'Journalist', role: 'Weinstein investigation, Catch and Kill' },
  { name: 'Glenn Greenwald', title: 'Journalist', role: 'Snowden revelations, Brazil, political shift' },
  { name: 'Matt Taibbi', title: 'Journalist', role: 'Twitter Files, Goldman Sachs vampire squid' },
  { name: 'Chris Cuomo', title: 'Former CNN Anchor', role: 'Fired for helping brother Andrew' },
  { name: 'Don Lemon', title: 'Former CNN Anchor', role: 'Fired, sexism allegations' },
  { name: 'Rachel Maddow', title: 'MSNBC Host', role: 'Liberal media, Trump-Russia coverage' },
  { name: 'Joe Rogan', title: 'Podcast Host', role: 'Spotify deal, COVID misinformation, influence' },
  { name: 'Ben Shapiro', title: 'Media Personality', role: 'Daily Wire, conservative media' },
  { name: 'Candace Owens', title: 'Media Personality', role: 'Blexit, conspiracy theories, fired from Daily Wire' },
  { name: 'Steve Bannon', title: 'Former Breitbart CEO', role: 'Build the Wall fraud, contempt, jailed' },
  
  // ── Governors & State Officials ──
  { name: 'Andrew Cuomo', title: 'Former Governor of New York', role: 'COVID nursing homes, sexual harassment, resigned' },
  { name: 'Gavin Newsom', title: 'Governor of California', role: 'French Laundry, presidential aspirations' },
  { name: 'Gretchen Whitmer', title: 'Governor of Michigan', role: 'Kidnapping plot target, COVID response' },
  { name: 'Brian Kemp', title: 'Governor of Georgia', role: 'Election certification, voter purges as SoS' },
  { name: 'Kari Lake', title: 'Political Candidate', role: 'Election denial, repeated losses' },
  { name: 'Doug Ducey', title: 'Former Governor of Arizona', role: 'Ignored Trump election call' },
  { name: 'Kristi Noem', title: 'Governor of South Dakota', role: 'Dog shooting story, DHS nominee' },
  { name: 'Glenn Youngkin', title: 'Governor of Virginia', role: 'Carlyle Group, education wars' },
  { name: 'Brad Raffensperger', title: 'Georgia Secretary of State', role: 'Trump "find 11,780 votes" call recipient' },
  { name: 'Katie Hobbs', title: 'Governor of Arizona', role: 'Election administrator turned governor' },
  
  // ── Military & Defense Figures ──
  { name: 'Mark Milley', title: 'Former Chairman Joint Chiefs', role: 'China call, Jan 6 concerns, Trump critic' },
  { name: 'James Mattis', title: 'Former Secretary of Defense', role: 'Mad Dog, resigned over Syria withdrawal' },
  { name: 'Lloyd Austin', title: 'Former Secretary of Defense', role: 'Secret hospitalization, Raytheon board' },
  { name: 'David Petraeus', title: 'Former CIA Director', role: 'Affair, classified documents, plea deal' },
  { name: 'Stanley McChrystal', title: 'Former General', role: 'Rolling Stone article, fired by Obama' },
  { name: 'Colin Powell', title: 'Former Secretary of State', role: 'UN Iraq WMD presentation, died 2021' },
  { name: 'Condoleezza Rice', title: 'Former Secretary of State', role: 'Iraq War, Chevron board, Stanford' },
  { name: 'Alexander Vindman', title: 'Retired Army Officer', role: 'Trump-Ukraine call whistleblower' },
  
  // ── Epstein Network & Associates ──
  { name: 'Jean-Luc Brunel', title: 'Former Model Agent', role: 'Epstein associate, died in prison' },
  { name: 'Les Wexner', title: 'Former CEO of L Brands', role: 'Epstein financial relationship, Victoria\'s Secret' },
  { name: 'Alan Dershowitz', title: 'Harvard Law Professor', role: 'Epstein defense, Trump defense, accusations' },
  { name: 'Prince Andrew', title: 'Duke of York', role: 'Epstein victim settlement, stripped of titles' },
  { name: 'Bill Gates', title: 'Former CEO of Microsoft', role: 'Philanthropy, Epstein meetings, divorce' },
  
  // ── Law & Justice Figures ──
  { name: 'Merrick Garland', title: 'Attorney General', role: 'Stolen SCOTUS seat, AG, criticized from all sides' },
  { name: 'Elena Kagan', title: 'Supreme Court Justice', role: 'SCOTUS liberal wing' },
  { name: 'Sonia Sotomayor', title: 'Supreme Court Justice', role: 'SCOTUS, first Latina, dissents' },
  { name: 'Ketanji Brown Jackson', title: 'Supreme Court Justice', role: 'First Black woman on SCOTUS' },
  { name: 'John Roberts', title: 'Chief Justice', role: 'Chief Justice, institutional concerns, swing vote' },
  { name: 'Kenneth Starr', title: 'Former Independent Counsel', role: 'Clinton investigation, Baylor cover-up, Epstein defense' },
  { name: 'Tanya Chutkan', title: 'Federal Judge', role: 'Trump Jan 6 case judge' },
  { name: 'Juan Merchan', title: 'Judge', role: 'Trump hush money trial judge' },
  { name: 'Engoron Arthur', title: 'Judge', role: 'Trump civil fraud trial judge' },
  { name: 'Cannon Aileen', title: 'Federal Judge', role: 'Trump documents case, dismissed charges' },
  
  // ── Environmental & Science ──
  { name: 'Greta Thunberg', title: 'Climate Activist', role: 'School strikes, UN speech, arrested at protests' },
  { name: 'David Attenborough', title: 'Broadcaster/Naturalist', role: 'Planet Earth, climate advocacy' },
  { name: 'Michael Mann', title: 'Climate Scientist', role: 'Hockey stick graph, defamation lawsuit won' },
  { name: 'Wei Sun Christianson', title: 'Banker', role: 'Morgan Stanley China, dual US-China power broker' },
  
  // ── Sports & Entertainment with Political Dimensions ──
  { name: 'Colin Kaepernick', title: 'Former NFL Quarterback', role: 'Kneeling protest, blackballed' },
  { name: 'LeBron James', title: 'NBA Player', role: 'Political activism, China controversy' },
  { name: 'Dave Chappelle', title: 'Comedian', role: 'Netflix specials, trans controversy' },
  { name: 'Kanye West', title: 'Rapper/Designer', role: 'Ye, antisemitism, White Lives Matter, 2024' },
  { name: 'Taylor Swift', title: 'Musician', role: 'Political influence, Ticketmaster antitrust, billionaire' },
  
  // ── Pharmaceutical & Healthcare ──
  { name: 'Albert Bourla', title: 'CEO of Pfizer', role: 'COVID vaccine, pricing controversy' },
  { name: 'Stéphane Bancel', title: 'CEO of Moderna', role: 'mRNA technology, COVID billions' },
  { name: 'Alex Gorsky', title: 'Former CEO J&J', role: 'Talc lawsuits, opioid settlements' },
  { name: 'David Ricks', title: 'CEO of Eli Lilly', role: 'Insulin pricing, weight loss drugs' },
  { name: 'Kenneth Frazier', title: 'Former CEO of Merck', role: 'Trump council resignation, Vioxx' },
  
  // ── Criminal Justice & Civil Rights ──
  { name: 'Bryan Stevenson', title: 'Civil Rights Attorney', role: 'Equal Justice Initiative, Just Mercy' },
  { name: 'Benjamin Crump', title: 'Civil Rights Attorney', role: 'Floyd, Taylor, Arbery families' },
  { name: 'Kim Foxx', title: 'Former Cook County SA', role: 'Jussie Smollett case controversy' },
  { name: 'Larry Krasner', title: 'Philadelphia DA', role: 'Progressive prosecution, impeachment' },
  { name: 'George Gascón', title: 'Former LA County DA', role: 'Progressive prosecution, recalled' },
];

const AGENCIES_WAVE2 = [
  { name: 'Bureau of Indian Affairs', acronym: 'BIA', role: 'Native American Affairs' },
  { name: 'National Reconnaissance Office', acronym: 'NRO', role: 'Spy Satellite Operations' },
  { name: 'Defense Advanced Research Projects Agency', acronym: 'DARPA', role: 'Military Research' },
  { name: 'U.S. Cyber Command', acronym: 'USCYBERCOM', role: 'Military Cyber Operations' },
  { name: 'National Science Foundation', acronym: 'NSF', role: 'Science Funding' },
  { name: 'Office of Personnel Management', acronym: 'OPM', role: 'Federal Workforce Management' },
  { name: 'Government Accountability Office', acronym: 'GAO', role: 'Congressional Watchdog' },
  { name: 'Inspector General Network', acronym: 'IG', role: 'Government Oversight' },
  { name: 'Federal Bureau of Prisons', acronym: 'BOP', role: 'Federal Prison System' },
  { name: 'U.S. Postal Inspection Service', acronym: 'USPIS', role: 'Postal Law Enforcement' },
  { name: 'Office of Foreign Assets Control', acronym: 'OFAC', role: 'Sanctions Enforcement' },
  { name: 'General Services Administration', acronym: 'GSA', role: 'Government Buildings & Services' },
  { name: 'Small Business Administration', acronym: 'SBA', role: 'Small Business Support' },
  { name: 'Federal Emergency Management Agency', acronym: 'FEMA', role: 'Disaster Response' },
  { name: 'Nuclear Regulatory Commission', acronym: 'NRC', role: 'Nuclear Safety' },
  { name: 'Occupational Safety and Health Administration', acronym: 'OSHA', role: 'Workplace Safety' },
  { name: 'National Labor Relations Board', acronym: 'NLRB', role: 'Labor Rights' },
  { name: 'Equal Employment Opportunity Commission', acronym: 'EEOC', role: 'Anti-Discrimination' },
  // International
  { name: 'GCHQ - Government Communications Headquarters', acronym: 'GCHQ', role: 'UK Signals Intelligence' },
  { name: 'Australian Signals Directorate', acronym: 'ASD', role: 'Australian Intelligence' },
  { name: 'Communications Security Establishment', acronym: 'CSE', role: 'Canadian Intelligence' },
  { name: 'UNIT 8200', acronym: '8200', role: 'Israeli Signals Intelligence' },
  { name: 'Research and Analysis Wing', acronym: 'RAW', role: 'Indian Foreign Intelligence' },
  { name: 'National Intelligence Service of South Korea', acronym: 'NIS', role: 'South Korean Intelligence' },
  { name: 'Turkish National Intelligence Organization', acronym: 'MIT', role: 'Turkish Intelligence' },
  { name: 'SAVAK/VEVAK', acronym: 'VEVAK', role: 'Iranian Intelligence' },
  { name: 'General Intelligence Presidency', acronym: 'GIP', role: 'Saudi Arabian Intelligence' },
];

const CORPORATIONS_WAVE2 = [
  { name: 'Citigroup', industry: 'Banking', role: 'Subprime crisis, Mexico money laundering' },
  { name: 'Bank of America', industry: 'Banking', role: 'Countrywide acquisition, mortgage fraud' },
  { name: 'Morgan Stanley', industry: 'Investment Banking', role: '2008 crisis, wealth management' },
  { name: 'Barclays', industry: 'Banking', role: 'LIBOR scandal, dark pool fraud' },
  { name: 'UBS', industry: 'Banking', role: 'Tax evasion assistance, LIBOR rigging' },
  { name: 'Volkswagen', industry: 'Automotive', role: 'Dieselgate, $30B in fines' },
  { name: 'Toyota', industry: 'Automotive', role: 'Unintended acceleration cover-up' },
  { name: 'General Motors', industry: 'Automotive', role: 'Ignition switch defect, 124 deaths' },
  { name: 'Facebook/Meta', industry: 'Technology', role: 'Cambridge Analytica, teen mental health' },
  { name: 'Twitter/X Corp', industry: 'Technology', role: 'Musk acquisition, content moderation collapse' },
  { name: 'TikTok/ByteDance', industry: 'Technology', role: 'China data concerns, ban threats' },
  { name: 'Saudi Aramco', industry: 'Oil & Gas', role: 'Largest oil company, climate responsibility' },
  { name: 'Glencore', industry: 'Commodities', role: 'Bribery, corruption, $1.1B DOJ settlement' },
  { name: 'BAE Systems', industry: 'Defense', role: 'Saudi arms deals, corruption' },
  { name: 'Thales Group', industry: 'Defense', role: 'Arms sales, electronic surveillance' },
  { name: 'L3Harris Technologies', industry: 'Defense', role: 'ISR systems, border surveillance' },
  { name: 'Anduril Industries', industry: 'Defense Tech', role: 'Border surveillance towers, Palmer Luckey' },
  { name: 'NSO Group', industry: 'Surveillance Tech', role: 'Pegasus spyware, government surveillance' },
  { name: 'Clearview AI', industry: 'Surveillance Tech', role: 'Facial recognition, scraped billions of photos' },
  { name: 'Cellebrite', industry: 'Surveillance Tech', role: 'Phone hacking tools for law enforcement' },
  { name: 'Palantir Technologies', industry: 'Data Analytics', role: 'ICE contracts, surveillance, CIA funded' },
  { name: 'Huawei', industry: 'Telecommunications', role: 'Espionage concerns, 5G bans, Meng Wanzhou' },
  { name: 'Rio Tinto', industry: 'Mining', role: 'Destroyed 46,000-year-old Aboriginal caves' },
  { name: 'Vale SA', industry: 'Mining', role: 'Brumadinho dam collapse, 270 dead' },
  { name: 'Trafigura', industry: 'Commodities', role: 'Ivory Coast toxic waste dumping' },
  { name: 'Cargill', industry: 'Agriculture', role: 'Deforestation, child labor in cocoa' },
  { name: 'Tyson Foods', industry: 'Food', role: 'Worker safety, environmental violations, price fixing' },
  { name: 'Perdue Farms', industry: 'Food', role: 'Worker safety, animal welfare' },
  { name: 'JBS', industry: 'Food', role: 'Brazilian meat giant, bribery, deforestation' },
  { name: 'McKinsey & Company', industry: 'Consulting', role: 'Opioid consulting, authoritarian regimes, ICE' },
  { name: 'Bain & Company', industry: 'Consulting', role: 'South Africa state capture, Romney' },
  { name: 'Boston Consulting Group', industry: 'Consulting', role: 'Government contracts, restructuring' },
  { name: 'Deloitte', industry: 'Consulting', role: 'Audit failures, government contracts' },
  { name: 'Ernst & Young', industry: 'Accounting', role: 'Wirecard audit failure, SEC fine' },
  { name: 'KPMG', industry: 'Accounting', role: 'South Africa scandal, audit failures' },
  { name: 'PricewaterhouseCoopers', industry: 'Accounting', role: 'Tax avoidance schemes, LuxLeaks' },
  { name: 'Syngenta', industry: 'Agriculture', role: 'Pesticides, Chinese acquisition, atrazine' },
  { name: 'Dow Chemical', industry: 'Chemical', role: 'Bhopal disaster, Agent Orange' },
  { name: 'BASF', industry: 'Chemical', role: 'Environmental record, IG Farben history' },
  { name: 'Bechtel', industry: 'Engineering', role: 'Iraq reconstruction, water privatization' },
];

const ORGANIZATIONS_WAVE2 = [
  { name: 'Bohemian Grove', type: 'Private Club', role: 'Elite retreat, secrecy, conspiracy theories' },
  { name: 'Skull and Bones', type: 'Secret Society', role: 'Yale, Bush family, Kerry, elite network' },
  { name: 'Council for National Policy', acronym: 'CNP', type: 'Conservative Network', role: 'Shadow GOP policy group' },
  { name: 'Cato Institute', type: 'Think Tank', role: 'Koch-founded libertarian policy' },
  { name: 'American Enterprise Institute', acronym: 'AEI', type: 'Think Tank', role: 'Neoconservative policy' },
  { name: 'Hoover Institution', type: 'Think Tank', role: 'Stanford conservative policy' },
  { name: 'Manhattan Institute', type: 'Think Tank', role: 'Conservative urban policy' },
  { name: 'Center for American Progress', type: 'Think Tank', role: 'Liberal policy, Clinton aligned' },
  { name: 'Judicial Crisis Network', type: 'Dark Money Group', role: 'SCOTUS confirmations, anonymous donors' },
  { name: 'Donors Trust', type: 'Dark Money Fund', role: 'Conservative donor anonymization' },
  { name: 'Leonard Leo Network', type: 'Dark Money Network', role: '$1.6B donation, SCOTUS pipeline' },
  { name: 'Americans for Prosperity', type: 'Political Organization', role: 'Koch grassroots, Tea Party' },
  { name: 'Concerned Women for America', type: 'Political Organization', role: 'Conservative women, anti-abortion' },
  { name: 'Family Research Council', type: 'Political Organization', role: 'Anti-LGBTQ, designated hate group' },
  { name: 'ACLU', type: 'Civil Liberties Organization', role: 'Legal advocacy, free speech, surveillance' },
  { name: 'Southern Poverty Law Center', acronym: 'SPLC', type: 'Civil Rights Organization', role: 'Hate group monitoring' },
  { name: 'Electronic Frontier Foundation', acronym: 'EFF', type: 'Digital Rights Organization', role: 'Privacy, free speech online' },
  { name: 'Wikimedia Foundation', type: 'Nonprofit', role: 'Wikipedia, information access' },
  { name: 'Clinton Foundation', type: 'Nonprofit', role: 'Haiti, donor access, uranium controversy' },
  { name: 'Trump Foundation', type: 'Former Nonprofit', role: 'Dissolved for self-dealing, fined' },
  { name: 'NRA Foundation', type: 'Nonprofit', role: 'Gun lobby, Russian money investigation, bankruptcy' },
  { name: 'OPEC', type: 'Intergovernmental Organization', role: 'Oil production cartel' },
  { name: 'Five Eyes Alliance', type: 'Intelligence Alliance', role: 'US/UK/Canada/Australia/NZ surveillance' },
  { name: 'Shanghai Cooperation Organisation', acronym: 'SCO', type: 'Intergovernmental', role: 'China-Russia led bloc' },
  { name: 'BRICS', type: 'Economic Alliance', role: 'Alternative to Western institutions' },
  { name: 'G7', type: 'Intergovernmental Forum', role: 'Western economic powers' },
  { name: 'G20', type: 'Intergovernmental Forum', role: 'Global economic governance' },
  { name: 'International Criminal Police Organization', type: 'Legal Body', role: 'Red notices, political abuse' },
  { name: 'Organization of American States', acronym: 'OAS', type: 'Regional Organization', role: 'Americas diplomacy' },
  { name: 'African Union', type: 'Continental Organization', role: 'African governance, peacekeeping' },
];

// ─── Reuse infrastructure from wave 1 ───────────────────────────

// All utility functions inlined below

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
      headers: { 'Content-Type': 'application/json', 'Authorization': `Bearer ${GROQ_API_KEY}` },
    };
    const req = https.request(options, (res) => {
      let data = '';
      res.on('data', (chunk) => data += chunk);
      res.on('end', () => {
        try {
          const json = JSON.parse(data);
          if (json.error) { reject(new Error(`Groq: ${json.error.message}`)); return; }
          const content = json.choices[0].message.content;
          try { resolve(JSON.parse(content)); } catch {
            const m = content.match(/\{[\s\S]*\}/);
            if (m) resolve(JSON.parse(m[0]));
            else reject(new Error('JSON parse failed'));
          }
        } catch (e) { reject(new Error(`Parse error: ${e.message}`)); }
      });
    });
    req.on('error', reject);
    req.setTimeout(60000, () => { req.destroy(); reject(new Error('Timeout')); });
    req.write(payload);
    req.end();
  });
}

function sleep(ms) { return new Promise(r => setTimeout(r, ms)); }
function makeSlug(n) { return n.toLowerCase().replace(/['']/g,'').replace(/[^a-z0-9]+/g,'-').replace(/^-|-$/g,''); }

function getExistingSlugs(type) {
  const slugs = new Set();
  try {
    if (type === 'individuals') {
      for (let c = 97; c <= 122; c++) {
        const f = path.join(DATA_DIR, 'individuals', String.fromCharCode(c) + '.ts');
        if (fs.existsSync(f)) {
          const ms = fs.readFileSync(f,'utf8').match(/slug:\s*['"]([^'"]+)['"]/g) || [];
          ms.forEach(m => { const s = m.match(/['"]([^'"]+)['"]/); if (s) slugs.add(s[1]); });
        }
      }
    } else {
      const f = path.join(DATA_DIR, type, 'index.ts');
      if (fs.existsSync(f)) {
        const ms = fs.readFileSync(f,'utf8').match(/['"]([a-z0-9-]+)['"]\s*:/g) || [];
        ms.forEach(m => { const s = m.match(/['"]([^'"]+)['"]/); if (s) slugs.add(s[1]); });
      }
    }
  } catch {}
  return slugs;
}

function esc(s) { return (s||'').replace(/\\/g,'\\\\').replace(/'/g,"\\'").replace(/\n/g,' '); }

function injectIndividual(profile) {
  const slug = profile.slug || makeSlug(profile.name);
  const letter = slug[0];
  const shardFile = path.join(DATA_DIR, 'individuals', `${letter}.ts`);
  if (!fs.existsSync(shardFile)) return false;
  let content = fs.readFileSync(shardFile, 'utf8');
  const entry = buildIndividualEntry(slug, profile);
  const exportMatch = content.match(/\n(export default \w+;?\s*)$/);
  if (exportMatch) {
    const insertPoint = content.lastIndexOf(exportMatch[0]);
    content = content.substring(0, insertPoint).trimEnd() + '\n' + entry + '\n\n' + exportMatch[0].trim() + '\n';
  }
  fs.writeFileSync(shardFile, content, 'utf8');
  return true;
}

function buildIndividualEntry(slug, p) {
  let e = `  '${slug}': {\n`;
  e += `    name: '${esc(p.name)}',\n    slug: '${slug}',\n    title: '${esc(p.title)}',\n    role: '${esc(p.role)}',\n`;
  e += `    riskLevel: '${p.riskLevel||'medium'}',\n    description: '${esc(p.description)}',\n`;
  if (p.birthDate) e += `    birthDate: '${esc(p.birthDate)}',\n`;
  if (p.birthPlace) e += `    birthPlace: '${esc(p.birthPlace)}',\n`;
  if (p.nationality) e += `    nationality: '${esc(p.nationality)}',\n`;
  if (p.netWorth) e += `    netWorth: '${esc(p.netWorth)}',\n`;
  e += `    education: [${(p.education||[]).map(x=>`'${esc(x)}'`).join(', ')}],\n`;
  e += `    affiliations: [\n`;
  (p.affiliations||[]).forEach(a=>{ e += `      { name: '${esc(a.name)}', role: '${esc(a.role)}', type: '${a.type||'organization'}' },\n`; });
  e += `    ],\n    controversies: [\n`;
  (p.controversies||[]).forEach(c=>{ e += `      '${esc(c)}',\n`; });
  e += `    ],\n`;
  if (p.knownAssociates?.length) { e += `    knownAssociates: [\n`; p.knownAssociates.forEach(a=>{ e += `      { name: '${esc(a.name)}', relationship: '${esc(a.relationship)}' },\n`; }); e += `    ],\n`; }
  e += `    relatedInvestigations: [\n`;
  (p.relatedInvestigations||[]).forEach(r=>{ e += `      { title: '${esc(r.title)}', slug: '${r.slug||makeSlug(r.title)}', severity: '${r.severity||'medium'}' },\n`; });
  e += `    ],\n    timeline: [\n`;
  (p.timeline||[]).forEach(t=>{ e += `      { date: '${esc(t.date)}', event: '${esc(t.event)}' },\n`; });
  e += `    ],\n`;
  if (p.sources?.length) { e += `    sources: [\n`; p.sources.forEach(s=>{ e += `      { title: '${esc(s.title)}'${s.url?`, url: '${esc(s.url)}'`:''}${s.date?`, date: '${esc(s.date)}'`:''} },\n`; }); e += `    ],\n`; }
  e += `  },`;
  return e;
}

function injectEntity(profile, type) {
  const slug = profile.slug || makeSlug(profile.name);
  const indexPath = path.join(DATA_DIR, type, 'index.ts');
  let content = fs.readFileSync(indexPath, 'utf8');
  let entry = `  '${slug}': {\n    id: '${slug}',\n    slug: '${slug}',\n    name: '${esc(profile.name)}',\n    type: '${type.slice(0,-1)}',\n    description: '${esc(profile.description)}',\n    role: '${esc(profile.role)}',\n    investigationCount: ${profile.investigationCount||1},\n    riskLevel: '${profile.riskLevel||'moderate'}',\n  },`;
  const exportMatch = content.match(/\n};[\s\n]*(export default|module\.exports)/);
  if (exportMatch) {
    const insertPoint = content.indexOf(exportMatch[0]);
    content = content.substring(0, insertPoint) + '\n' + entry + content.substring(insertPoint);
  }
  fs.writeFileSync(indexPath, content, 'utf8');
  return true;
}

function buildPrompt(item, type) {
  const sysMsg = { role: 'system', content: 'You are a factual investigative journalism database compiler. Generate accurate, well-sourced profiles for an investigative journalism platform. Use ONLY verified, publicly documented facts. Never fabricate. Return valid JSON.' };
  if (type === 'individuals') {
    return [sysMsg, { role: 'user', content: `Generate a comprehensive investigative profile for: ${item.name}\nTitle: ${item.title}\nContext: ${item.role}\n\nReturn JSON: {"name":"","slug":"","title":"","role":"","riskLevel":"critical|high|medium|low","description":"3-5 paragraphs, 300+ words, focusing on investigative relevance","birthDate":"","birthPlace":"","education":[],"netWorth":"","nationality":"","affiliations":[{"name":"","role":"","type":"agency|corporation|organization"}],"controversies":["5+ real controversies"],"knownAssociates":[{"name":"","relationship":""}],"timeline":[{"date":"","event":""}],"sources":[{"title":"","url":"","date":""}],"relatedInvestigations":[{"title":"","slug":"","severity":""}]}\n\nInclude 5+ controversies, 8+ timeline events, 5+ affiliations, 5+ associates, 5+ real sources.` }];
  }
  return [sysMsg, { role: 'user', content: `Generate an investigative profile for: ${item.name}${item.acronym ? ` (${item.acronym})` : ''}\nType: ${type}\nRole: ${item.role}\n\nReturn JSON: {"id":"slug","slug":"slug","name":"${item.name}","type":"${type.slice(0,-1)}","description":"3-4 paragraphs, 200+ words with controversies and investigative significance","role":"${item.role || item.type}","investigationCount":1,"riskLevel":"extreme|high|moderate|low"}` }];
}

function loadCheckpoint() {
  try { if (fs.existsSync(CHECKPOINT_FILE)) return JSON.parse(fs.readFileSync(CHECKPOINT_FILE,'utf8')); } catch {}
  return { individuals:[], agencies:[], corporations:[], organizations:[], errors:[] };
}
function saveCheckpoint(cp) { fs.writeFileSync(CHECKPOINT_FILE, JSON.stringify(cp,null,2),'utf8'); }

async function main() {
  const args = process.argv.slice(2);
  const typeFilter = args.find(a=>a.startsWith('--type='))?.split('=')[1];
  const isResume = args.includes('--resume');
  
  console.log('═══ ARKHIVE GROQ WAVE 2 ═══');
  const checkpoint = isResume ? loadCheckpoint() : { individuals:[], agencies:[], corporations:[], organizations:[], errors:[] };
  const done = new Set([...checkpoint.individuals,...checkpoint.agencies,...checkpoint.corporations,...checkpoint.organizations]);
  
  const allTypes = { individuals: INDIVIDUALS_WAVE2, agencies: AGENCIES_WAVE2, corporations: CORPORATIONS_WAVE2, organizations: ORGANIZATIONS_WAVE2 };
  const types = typeFilter ? { [typeFilter]: allTypes[typeFilter] } : allTypes;
  
  let gen = 0, skip = 0, err = 0;
  const start = Date.now();
  
  for (const [type, items] of Object.entries(types)) {
    if (!items) continue;
    const existing = getExistingSlugs(type);
    console.log(`\n▸ ${type}: ${items.length} items (${existing.size} existing)`);
    
    for (let i = 0; i < items.length; i++) {
      const item = items[i];
      if (item.role?.includes('SKIP')) { skip++; continue; }
      const slug = makeSlug(item.name);
      if (existing.has(slug) || done.has(slug)) { skip++; continue; }
      
      const elapsed = ((Date.now()-start)/1000).toFixed(0);
      process.stdout.write(`  [${elapsed}s] ${i+1}/${items.length} ${item.name}...`);
      
      try {
        const messages = buildPrompt(item, type);
        const profile = await groqRequest(messages);
        const ok = type === 'individuals' ? injectIndividual(profile) : injectEntity(profile, type);
        if (ok) { gen++; checkpoint[type].push(slug); saveCheckpoint(checkpoint); console.log(' ✓'); }
        else { console.log(' ✗'); err++; }
      } catch (e) {
        console.log(` ✗ ${e.message.slice(0,50)}`);
        checkpoint.errors.push({ slug, type, error: e.message });
        saveCheckpoint(checkpoint);
        err++;
        if (e.message.includes('rate') || e.message.includes('429')) { console.log('  ⏳ Rate limited, waiting 60s...'); await sleep(60000); }
      }
      await sleep(DELAY_MS);
    }
  }
  
  console.log(`\n═══ DONE: ${gen} generated, ${skip} skipped, ${err} errors in ${((Date.now()-start)/1000).toFixed(0)}s ═══`);
}

main().catch(e => { console.error('Fatal:', e); process.exit(1); });
