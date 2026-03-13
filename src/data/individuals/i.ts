// Individual profile data shard
import type { IndividualProfile } from './types';

const profiles: Record<string, IndividualProfile> = {
 'ivanka-trump': {
 name: 'Ivana Marie Trump',
 title: 'Former Senior Advisor to the President',
 role: 'Trump Daughter, Businesswoman',
 riskLevel: 'high',
 description: 'Ivanka Marie Trump served as Senior Advisor to President Donald Trump from 2017 to 2021. She leveraged her White House position to secure Chinese trademarks for her fashion brand and participated in high-level diplomatic meetings despite no government experience. She testified before the January 6th Committee and distanced herself from her father\'s election fraud claims.',
 birthDate: 'October 30, 1981',
 birthPlace: 'Manhattan, New York City, USA',
 netWorth: '$300+ million',
 education: ['B.S., University of Pennsylvania (Wharton)'],
 affiliations: [
 { name: 'White House', role: 'Senior Advisor (2017-2021)', type: 'agency' },
 { name: 'Trump Organization', role: 'Executive Vice President', type: 'corporation' },
 ],
 controversies: [
 'Chinese trademarks approved while serving in White House',
 'Personal email use for government business',
 'January 6 Committee testimony about trying to stop father',
 'New York civil fraud case testimony',
 'Using official position to promote business interests',
 ],
 charges: [
 { statute: '18 U.S.C. § 208', description: 'Potential Conflict of Interest; Received Chinese trademarks while serving in White House on China policy matters', category: 'Potential Ethics' },
 { statute: '18 U.S.C. § 201', description: 'Potential Bribery; Chinese trademark approvals coincided with favorable China policies', category: 'Potential Federal' },
 { statute: '44 U.S.C. § 3106', description: 'Federal Records Act Violations; Used personal email for official government business', category: 'Federal' },
 { statute: 'New York Exec. Law § 63(12)', description: 'Civil Fraud; Named defendant in NY AG lawsuit for fraudulent Trump Organization practices (removed before trial)', category: 'State Civil' },
 { statute: '5 C.F.R. § 2635.702', description: 'Use of Public Office for Private Gain; Promoted Ivanka Trump brand products while serving as federal official', category: 'Ethics' },
 { statute: '18 U.S.C. § 1001', description: 'Potential False Statements; Testimony in NY fraud case about involvement in financial statements', category: 'Potential Federal' },
 ],
 relatedInvestigations: [
 { title: 'Trump Organization Financial Fraud', slug: 'trump-org-fraud', severity: 'critical' },
 { title: 'The Trump Criminal Compendium', slug: 'trump-criminal-compendium', severity: 'critical' },
 ],
 timeline: [
 { date: '1981', event: 'Born in Manhattan' },
 { date: '2009', event: 'Marries Jared Kushner' },
 { date: '2017', event: 'Joins White House as Senior Advisor' },
 { date: '2018', event: 'Chinese trademark approvals during service' },
 { date: '2021', event: 'Leaves White House' },
 { date: '2022', event: 'Testifies to January 6 Committee' },
 { date: '2023', event: 'Testifies in New York fraud trial' },
 ],
 socialMedia: [],
 sources: [
 { title: 'January 6 Committee Testimony', url: 'https://www.govinfo.gov/content/pkg/GPO-J6-REPORT/pdf/GPO-J6-REPORT.pdf', date: '2022' }, ],
 aliases: ['First Daughter'],
 knownAssociates: [
 { name: 'Donald Trump', relationship: 'Father', href: '/entities/individuals/donald-trump' },
 { name: 'Jared Kushner', relationship: 'Husband', href: '/entities/individuals/jared-kushner' },
 ],
 },


































 'igor-fruman': {
 name: 'Igor Fruman',
 title: 'Convicted Felon',
 role: 'Giuliani Associate, Ukraine Scheme Operative',
 riskLevel: 'high',
 description: 'Igor Fruman is a Belarus-born American businessman who worked alongside Lev Parnas and Rudy Giuliani in the Ukraine pressure campaign. He was convicted of campaign finance violations.',
 birthDate: '1966',
 birthPlace: 'Belarus, Soviet Union',
 education: ['Unknown'],
 netWorth: 'Unknown',
 aliases: ['Giuliani\'s Fixer'],
 affiliations: [
 { name: 'Global Energy Producers', role: 'Co-Founder', type: 'corporation' },
 ],
 knownAssociates: [
 { name: 'Rudy Giuliani', relationship: 'Ukraine pressure campaign', href: '/entities/individuals/rudy-giuliani' },
 { name: 'Lev Parnas', relationship: 'Business partner, co-defendant', href: '/entities/individuals/lev-parnas' },
 { name: 'Donald Trump', relationship: 'Met at fundraisers', href: '/entities/individuals/donald-trump' },
 ],
 controversies: [
 'Ukraine pressure campaign',
 'Illegal campaign contributions',
 'Arrested fleeing country with Parnas',
 'Funneled foreign money to Republicans',
 ],
 charges: [
 { statute: '52 U.S.C. § 30121', description: 'Foreign national campaign contributions', category: 'Election Crimes' },
 { statute: '52 U.S.C. § 30122', description: 'Straw donor contributions', category: 'Election Crimes' },
 ],
 relatedInvestigations: [
 { title: 'Ukraine Extortion Scheme', slug: 'ukraine-extortion', severity: 'critical' },
 { title: 'The Trump Criminal Compendium', slug: 'trump-criminal-compendium', severity: 'critical' },
 ],
 timeline: [
 { date: '1966', event: 'Born in Belarus' },
 { date: '2018', event: 'Begins Ukraine scheme with Giuliani' },
 { date: '2019', event: 'Arrested at Dulles Airport (October 9)' },
 { date: '2021', event: 'Pleads guilty to campaign finance charge' },
 { date: '2022', event: 'Sentenced to 1 year in prison' },
 ],
 sources: [
 { title: 'SDNY Indictment', url: 'https://www.justice.gov/usao-sdny/pr/lev-parnas-and-igor-fruman-charged-campaign-finance-offenses', date: '2019' },
 ],
 },
 'ivan-timofeev': {
 name: 'Ivan Timofeev',
 title: 'Director of Programs at the Russian International Affairs Council (RIAC)',
 role: 'Russian Foreign Policy Analyst; Trump-Russia Contact',
 riskLevel: 'medium',
 description: 'Ivan Timofeev is a Russian political scientist and the Director of Programs at the Russian International Affairs Council (RIAC); a Kremlin-affiliated think tank that operates under the Russian Ministry of Foreign Affairs and serves as a track-two diplomatic channel. Timofeev became a figure of interest in the Trump-Russia investigation when it was revealed that George Papadopoulos; a Trump campaign foreign policy advisor; communicated with Timofeev in 2016 while seeking to arrange a meeting between Donald Trump and Vladimir Putin. Timofeev connected Papadopoulos with other Russian contacts; including Ivan Polonskiy of the Russian MFA; and helped facilitate discussions about potential Trump-Putin summits. The Mueller investigation documented these communications extensively; noting that Timofeev served as a critical intermediary between the Trump campaign and Russian government-linked officials during the 2016 election cycle.',
 birthDate: 'Unknown',
 birthPlace: 'Russia',
 education: ['Moscow State Institute of International Relations (MGIMO)'],
 affiliations: [
 { name: 'Russian International Affairs Council', role: 'Director of Programs', type: 'organization' },
 { name: 'Higher School of Economics (Moscow)', role: 'Associate Professor', type: 'organization' },
 ],
 controversies: [
 'Communicated with Trump campaign advisor George Papadopoulos throughout 2016 about arranging Trump-Putin meetings',
 'Connected Papadopoulos with Russian Ministry of Foreign Affairs officials',
 'RIAC operates under Russian government oversight; raising questions about whether Timofeev acted as unofficial government channel',
 'Mueller Report documented his role as intermediary between Trump campaign and Russian officials',
 'Facilitated track-two diplomacy discussions that became part of federal criminal investigation',
 ],
 charges: [],
 relatedInvestigations: [
 { title: 'Russian Election Interference', slug: 'russian-election-interference', severity: 'critical' },
 ],
 timeline: [
 { date: 'March 2016', event: 'George Papadopoulos begins email exchanges with Timofeev about Trump-Russia meeting' },
 { date: 'April 2016', event: 'Timofeev connects Papadopoulos with additional Russian government-linked contacts' },
 { date: 'May 2016', event: 'Discussions about potential Trump-Putin summit continue through Timofeev channel' },
 { date: '2017', event: 'Mueller investigation obtains Papadopoulos-Timofeev communications' },
 { date: 'April 2019', event: 'Mueller Report published; documenting Timofeev as key intermediary' },
 ],
 socialMedia: [],
 sources: [
 { title: 'Mueller Report Volume I: Russian Contacts with the Campaign', url: 'https://www.justice.gov/archives/sco/file/1373816/dl', date: '2019' },
 { title: 'George Papadopoulos Statement of Offense', url: 'https://www.justice.gov/archives/sco/file/1007346/dl', date: '2017' },
 ],
 aliases: [],
 knownAssociates: [
 { name: 'George Papadopoulos', relationship: 'Trump campaign advisor who communicated with Timofeev about Russia meetings', href: '/entities/individuals/george-papadopoulos' },
 { name: 'Joseph Mifsud', relationship: 'Maltese professor who separately told Papadopoulos about Russian dirt on Clinton', href: '/entities/individuals/joseph-mifsud' },
 ],
 },


 'ike-kaveladze': {
 name: 'Ike Kaveladze',
 title: 'Vice President of Crocus Group; Attendee of June 2016 Trump Tower Meeting',
 role: 'Agalarov Business Executive; Money Laundering Subject',
 riskLevel: 'high',
 description: 'Irakli "Ike" Kaveladze is a Georgian-American businessman who serves as vice president of the Crocus Group; the Russian real estate and entertainment conglomerate owned by billionaire Aras Agalarov. Kaveladze was the eighth attendee at the infamous June 9; 2016 Trump Tower meeting between senior Trump campaign officials and Russian nationals; where he represented the Agalarov family\'s interests. Prior to this; Kaveladze had been the subject of a 2000 Government Accountability Office (GAO) investigation into Russian money laundering through U.S. banks; which found he had opened over 2;000 bank accounts and moved approximately $1.4 billion through them on behalf of Russian brokers. Though never criminally charged for the banking activities; the GAO report highlighted his role as a conduit for suspicious financial flows. Kaveladze testified before the Senate Judiciary Committee in November 2017 about the Trump Tower meeting and was interviewed by the Mueller investigation.',
 birthDate: '1962',
 birthPlace: 'Tbilisi, Georgia (Soviet Union)',
 education: ['University of New Haven (Connecticut)'],
 affiliations: [
 { name: 'Crocus Group', role: 'Vice President', type: 'corporation' },
 { name: 'International Business Creations', role: 'President', type: 'corporation' },
 ],
 controversies: [
 'Attended June 9; 2016 Trump Tower meeting as representative of Aras Agalarov; alongside Donald Trump Jr.; Jared Kushner; Paul Manafort; and Russian lawyer Natalia Veselnitskaya',
 'Subject of 2000 GAO investigation that found he opened 2;000+ bank accounts moving $1.4 billion for Russian brokers',
 'Senate Judiciary Committee testimony in 2017 about Trump Tower meeting',
 'Mueller investigation interview regarding Russian contacts with Trump campaign',
 'His boss Aras Agalarov helped arrange the Trump Tower meeting through publicist Rob Goldstone',
 ],
 charges: [],
 relatedInvestigations: [
 { title: 'Russian Election Interference', slug: 'russian-election-interference', severity: 'critical' },
 { title: 'The Trump Criminal Compendium', slug: 'trump-criminal-compendium', severity: 'critical' },
 ],
 timeline: [
 { date: '1962', event: 'Born in Tbilisi; Georgia' },
 { date: '1991', event: 'Immigrates to the United States' },
 { date: '2000', event: 'GAO investigation reveals 2;000+ bank accounts and $1.4B in suspicious transfers' },
 { date: 'June 9, 2016', event: 'Attends Trump Tower meeting as Agalarov representative; alongside Don Jr.; Kushner; Manafort; and Russian nationals' },
 { date: 'November 2017', event: 'Testifies before Senate Judiciary Committee about Trump Tower meeting' },
 { date: '2018', event: 'Interviewed by Mueller investigation team' },
 ],
 socialMedia: [],
 sources: [
 { title: 'GAO Report on Suspicious Banking Activity', url: 'https://www.gao.gov/products/osi-01-3', date: '2000' },
 { title: 'Mueller Report Volume I', url: 'https://www.justice.gov/archives/sco/file/1373816/dl', date: '2019' },
 ],
 aliases: ['Irakli Kaveladze'],
 knownAssociates: [
 { name: 'Aras Agalarov', relationship: 'Employer; Crocus Group billionaire who arranged Trump Tower meeting', href: '/entities/individuals/aras-agalarov' },
 { name: 'Donald Trump Jr.', relationship: 'Attended June 2016 Trump Tower meeting together', href: '/entities/individuals/donald-trump-jr' },
 { name: 'Natalia Veselnitskaya', relationship: 'Russian lawyer at Trump Tower meeting', href: '/entities/individuals/natalia-veselnitskaya' },
 { name: 'Rob Goldstone', relationship: 'Publicist who arranged Trump Tower meeting on behalf of Agalarovs', href: '/entities/individuals/rob-goldstone' },
 ],
 },








 'ivana-trump': {
 name: 'Ivana Trump',
 title: 'Czech-American Businesswoman; First Wife of Donald Trump',
 role: 'Trump Organization Executive; Fashion Entrepreneur',
 riskLevel: 'medium',
 description: 'Ivana Marie Trump (born Zelnicekova) was a Czech-American businesswoman; fashion designer; author; and the first wife of Donald Trump. Born in communist Czechoslovakia; she immigrated to Canada in the 1970s and married Trump in 1977. She served as vice president of interior design for the Trump Organization; overseeing the decoration of Trump Tower; and as president and CEO of Trump\'s Castle casino in Atlantic City. Their highly publicized 1990 divorce; fueled by Trump\'s affair with Marla Maples; became a tabloid sensation and resulted in a reported $14 million settlement plus a $650;000 annual alimony and a 45-room mansion in Greenwich; Connecticut. During sworn divorce deposition testimony in 1989; Ivana accused Donald of rape; a claim she later walked back saying she did not mean it in a "literal or criminal sense." Her name appeared in Jeffrey Epstein\'s black book of contacts. She launched her own fashion and jewelry lines on QVC and wrote several books. Ivana died on July 14; 2022; from blunt impact injuries sustained in a fall down the stairs of her Manhattan townhouse; ruled accidental by the New York City medical examiner.',
 birthDate: 'February 20, 1949',
 birthPlace: 'Zlin, Czechoslovakia (now Czech Republic)',
 deathDate: 'July 14, 2022',
 education: ['Charles University, Prague (Physical Education)', 'McGill University, Montreal'],
 affiliations: [
 { name: 'Trump Organization', role: 'Vice President of Interior Design; CEO of Trump\'s Castle Casino', type: 'corporation' },
 { name: 'Ivana Trump Collection', role: 'Founder; Fashion and Jewelry Lines', type: 'corporation' },
 ],
 controversies: [
 'Accused Donald Trump of marital rape during 1989 sworn divorce deposition; later said she did not mean it in a "literal or criminal sense"',
 'Named in Jeffrey Epstein\'s black book of contacts',
 'Highly publicized 1990 divorce from Donald Trump became national tabloid spectacle',
 'Managed Trump\'s Castle casino during period of severe financial losses and eventual bankruptcy',
 'Controversy over Donald Trump burying her on his Bedminster golf course for tax benefits (New Jersey tax exemptions for cemetery land)',
 'Death at age 73 from staircase fall at Manhattan townhouse raised public speculation; ruled accidental',
 ],
 charges: [],
 relatedInvestigations: [
 { title: 'The Trump Criminal Compendium', slug: 'trump-criminal-compendium', severity: 'critical' },
 { title: 'Epstein Network Complicity', slug: 'epstein-network', severity: 'critical' },
 ],
 timeline: [
 { date: 'February 20, 1949', event: 'Born Ivana Marie Zelnicekova in Zlin; Czechoslovakia' },
 { date: '1971', event: 'Marries Alfred Winklmayr to obtain Austrian passport and leave communist Czechoslovakia' },
 { date: '1977', event: 'Marries Donald Trump in New York City' },
 { date: '1983', event: 'Oversees interior design of Trump Tower as Trump Organization VP' },
 { date: '1988', event: 'Becomes president and CEO of Trump\'s Castle casino in Atlantic City' },
 { date: '1989', event: 'Files for divorce; accuses Donald of rape in sworn deposition' },
 { date: '1990', event: 'Finalizes divorce; receives $14 million settlement plus properties and alimony' },
 { date: '1995', event: 'Launches fashion and jewelry lines on QVC' },
 { date: 'July 14, 2022', event: 'Dies from blunt impact injuries in fall at Manhattan townhouse; age 73' },
 { date: 'July 2022', event: 'Buried at Trump National Golf Club Bedminster; sparking tax exemption controversy' },
 ],
 socialMedia: [],
 sources: [
 { title: 'New York City Medical Examiner Report', url: 'https://www.nytimes.com/2022/07/15/nyregion/ivana-trump-dead.html', date: '2022' },
 { title: 'Ivana Trump Divorce Deposition', url: 'https://www.thedailybeast.com/ex-wife-donald-trump-made-me-feel-violated-during-sex', date: '1989' },
 ],
 aliases: ['Ivana Zelnicekova', 'Ivana Winklmayr'],
 knownAssociates: [
 { name: 'Donald Trump', relationship: 'First husband (1977-1990); accused of marital rape in divorce proceedings', href: '/entities/individuals/donald-trump' },
 { name: 'Ivanka Trump', relationship: 'Daughter', href: '/entities/individuals/ivanka-trump' },
 { name: 'Donald Trump Jr.', relationship: 'Son', href: '/entities/individuals/donald-trump-jr' },
 { name: 'Eric Trump', relationship: 'Son', href: '/entities/individuals/eric-trump' },
 ],
 },







 'irving-kristol': {
 name: 'Irving Kristol',
 title: 'Founder of Neoconservatism; Intellectual Architect of the Iraq War\'s Ideological Foundation',
 role: 'Political Theorist; Publisher; Cold War Ideologue',
 riskLevel: 'medium',
 description: 'Irving Kristol was an American journalist; writer; and political theorist widely regarded as the "godfather of neoconservatism." Born in Brooklyn to Jewish immigrants from Eastern Europe; he began his intellectual career as a Trotskyist at City College of New York before undergoing a dramatic ideological transformation during the Cold War. He co-founded and edited The Public Interest (1965-2005) and served as editor of Encounter magazine; which was later revealed to have received covert funding from the CIA through the Congress for Cultural Freedom. Kristol advocated for an aggressive American foreign policy; free-market economics paired with a strong welfare state skepticism; and the integration of traditional moral values into public policy. His ideas directly influenced the neoconservative movement that pushed for the 2003 Iraq War; regime change in the Middle East; and an expansionist American military posture. He received the Presidential Medal of Freedom from George W. Bush in 2002. His son William Kristol became one of the most prominent neoconservative voices as founder of The Weekly Standard and a key advocate for the Iraq invasion.',
 birthDate: 'January 22, 1920',
 birthPlace: 'Brooklyn, New York, USA',
 deathDate: 'September 18, 2009',
 education: ['City College of New York, BA (1940)'],
 affiliations: [
 { name: 'American Enterprise Institute', role: 'Senior Fellow; leading neoconservative think tank', type: 'organization' },
 { name: 'The Public Interest', role: 'Co-Founder and Co-Editor (1965-2005)', type: 'corporation' },
 { name: 'Encounter Magazine', role: 'Editor; later revealed as CIA-funded through Congress for Cultural Freedom', type: 'corporation' },
 ],
 controversies: [
 'Edited Encounter magazine which received covert CIA funding through the Congress for Cultural Freedom without disclosing it to readers',
 'Intellectual framework he built became the ideological justification for the 2003 Iraq War and regime change policies',
 'Shifted from Trotskyist socialism to aggressive anti-communism and right-wing interventionism',
 'American Enterprise Institute fellowship used to build infrastructure for neoconservative policy influence',
 'His famous quip that a neoconservative is "a liberal who has been mugged by reality" masked the movement\'s radical foreign policy ambitions',
 'Son William Kristol directly leveraged father\'s intellectual legacy to push for Iraq War through Project for the New American Century',
 ],
 charges: [],
 relatedInvestigations: [
 { title: 'Neocon Network', slug: 'neocon-network', severity: 'high' },
 ],
 timeline: [
 { date: 'January 22, 1920', event: 'Born in Brooklyn to Jewish immigrant parents from Eastern Europe' },
 { date: '1940', event: 'Graduates from City College of New York; active in Trotskyist political circles' },
 { date: '1942-1945', event: 'Serves in U.S. Army during World War II; combat infantry in Europe' },
 { date: '1953', event: 'Becomes editor of Encounter magazine in London; covertly funded by CIA' },
 { date: '1965', event: 'Co-founds The Public Interest journal with Daniel Bell; becomes key neoconservative publication' },
 { date: '1967', event: 'CIA funding of Encounter magazine exposed; Kristol denies knowledge' },
 { date: '1978', event: 'Joins American Enterprise Institute as Senior Fellow' },
 { date: '2002', event: 'Receives Presidential Medal of Freedom from George W. Bush' },
 { date: 'September 18, 2009', event: 'Dies in Washington D.C. at age 89' },
 ],
 socialMedia: [],
 sources: [
 { title: 'CIA and the Congress for Cultural Freedom', url: 'https://www.cia.gov/readingroom/collection/congress-cultural-freedom', date: '' },
 { title: 'Neoconservatism: The Autobiography of an Idea (Irving Kristol)', url: 'https://www.loc.gov', date: '1995' },
 ],
 aliases: ['Godfather of Neoconservatism'],
 knownAssociates: [
 { name: 'William Kristol', relationship: 'Son; founded The Weekly Standard and Project for the New American Century; key Iraq War advocate', href: '/entities/individuals/william-kristol' },
 { name: 'Daniel Bell', relationship: 'Co-founder of The Public Interest journal', href: '/entities/individuals/daniel-bell' },
 { name: 'Norman Podhoretz', relationship: 'Fellow neoconservative intellectual; editor of Commentary magazine', href: '/entities/individuals/norman-podhoretz' },
 ],
 },

 'ike-riffel': {
 name: 'Ike Riffel',
 title: 'Victims Advocate',
 role: 'Father of Ethiopian Crash Victim',
 riskLevel: 'low',
 description: 'Ike Riffel is an American father whose son Melvin was killed in the Ethiopian Airlines Flight 302 crash at age 26. Melvin was traveling to Kenya for his work helping communities get clean water. Ike has become a vocal advocate for accountability, testifying before Congress and pushing for criminal prosecution of Boeing executives.',
 birthDate: 'Unknown',
 birthPlace: 'United States',
 education: ['Unknown'],
 affiliations: [
 { name: 'Boeing 737 MAX Victims Families', role: 'Advocacy Member; Father of Crash Victim', type: 'organization' },
 ],
 controversies: [
 'Son Melvin Riffel killed in Ethiopian Airlines Flight 302 crash at age 26 while traveling to Kenya for clean water projects',
 'Testified before Congress demanding criminal prosecution of Boeing executives for the 737 MAX design failures',
 'Became vocal advocate for aviation safety reform and corporate accountability after son\'s death',
 ],
 charges: [],
 relatedInvestigations: [
 { title: 'Boeing Safety Crisis', slug: 'boeing-safety-crisis', severity: 'critical' },
 ],
 timeline: [
 { date: 'March 10, 2019', event: 'Son Melvin killed in Ethiopian 302' },
 { date: '2019-present', event: 'Advocacy for accountability' }, ],
 socialMedia: [],
 sources: [
 { title: 'Wikipedia: Ike Riffel', url: 'https://en.wikipedia.org/wiki/Ike_Riffel', date: '' },
 { title: 'Bloomberg: Ike Riffel', url: 'https://www.bloomberg.com/', date: '' }, ],
 aliases: [],
 knownAssociates: [
 { name: 'Michael Stumo', relationship: 'Fellow victims advocate', href: '/entities/individuals/michael-stumo' },
 { name: 'Paul Njoroge', relationship: 'Fellow victims advocate', href: '/entities/individuals/paul-njoroge' },
 ],
 },







 'ivan-boesky': {
 name: 'Ivan Boesky',
 title: 'Convicted Wall Street Insider Trader; Architect of 1980s Financial Fraud',
 role: 'Stock Speculator; Arbitrageur; Cooperating Witness',
 riskLevel: 'high',
 description: 'Ivan Frederick Boesky was an American stock trader and arbitrageur who became the face of 1980s Wall Street corruption. Operating from his New York trading firm; Ivan F. Boesky & Company; he amassed a fortune exceeding $200 million by illegally trading on inside information obtained from investment bankers; most notably Dennis Levine at Drexel Burnham Lambert. Boesky\'s most famous moment came at a 1986 UC Berkeley commencement speech where he declared "Greed is all right; I think greed is healthy" ; a line that inspired Gordon Gekko\'s "greed is good" speech in the 1987 film Wall Street. After the SEC caught Levine; who cooperated and exposed Boesky; the government secured Boesky\'s cooperation in exchange for a reduced sentence. Boesky then wore a wire and helped the SEC build cases against junk bond king Michael Milken and others at Drexel Burnham Lambert. He paid a $100 million SEC penalty; served 22 months in federal prison; and was permanently barred from the securities industry. His cooperation triggered the collapse of Drexel Burnham Lambert; which filed for bankruptcy in 1990; and ended the era of leveraged buyout excess.',
 birthDate: 'March 6, 1937',
 birthPlace: 'Detroit, Michigan, USA',
 deathDate: 'May 20, 2024',
 education: ['Cranbrook School', 'University of Michigan', 'Detroit College of Law (Wayne State University)'],
 affiliations: [
 { name: 'Ivan F. Boesky & Company', role: 'Founder and Principal; stock arbitrage firm', type: 'corporation' },
 { name: 'Drexel Burnham Lambert', role: 'Client; received insider tips from investment bankers', type: 'corporation' },
 ],
 controversies: [
 '"Greed is all right" speech at UC Berkeley (1986) became symbol of Wall Street excess; inspired Wall Street film',
 'Paid $100 million SEC penalty; one of largest individual penalties in securities enforcement history at the time',
 'Cooperated with government and wore a wire to help build case against Michael Milken',
 'His cooperation led to the collapse of Drexel Burnham Lambert; which filed bankruptcy in 1990',
 'Illegally traded on inside information provided by Dennis Levine and others',
 'Wife Seema Boesky (daughter of hotel magnate Ben Silberstein) divorced him after conviction',
 ],
 charges: [
 { statute: '15 U.S.C. § 78j(b); SEC Rule 10b-5', description: 'Securities Fraud; Insider trading on material non-public information obtained from investment bankers', category: 'Federal' },
 { statute: '15 U.S.C. § 78ff', description: 'Conspiracy to commit securities fraud; coordinated insider trading ring with Dennis Levine and others', category: 'Federal' },
 ],
 relatedInvestigations: [
 { title: 'Wall Street Insider Trading Scandal', slug: 'wall-street-insider-trading', severity: 'high' },
 ],
 timeline: [
 { date: 'March 6, 1937', event: 'Born in Detroit; Michigan to Russian Jewish immigrant family' },
 { date: '1975', event: 'Founds Ivan F. Boesky & Company; begins stock arbitrage operations' },
 { date: 'May 1986', event: 'Delivers "Greed is all right" speech at UC Berkeley commencement' },
 { date: 'November 14, 1986', event: 'SEC announces $100 million penalty and guilty plea; Boesky agrees to cooperate' },
 { date: '1987', event: 'Cooperates with SEC wearing a wire; helps build case against Michael Milken' },
 { date: 'December 1987', event: 'Sentenced to 3 years in federal prison' },
 { date: '1989', event: 'Released after serving 22 months at Lompoc Federal Prison Camp' },
 { date: '1990', event: 'Drexel Burnham Lambert files bankruptcy; largely due to cases built on Boesky cooperation' },
 { date: 'May 20, 2024', event: 'Dies at age 87' },
 ],
 socialMedia: [],
 sources: [
 { title: 'SEC Enforcement Action: Ivan F. Boesky', url: 'https://www.sec.gov/litigation/litreleases/lr11288.htm', date: '1986' },
 { title: 'Den of Thieves by James B. Stewart', url: 'https://www.loc.gov', date: '1991' },
 ],
 aliases: ['Ivan the Terrible (Wall Street nickname)'],
 knownAssociates: [
 { name: 'Michael Milken', relationship: 'Junk bond king exposed by Boesky\'s cooperation with SEC', href: '/entities/individuals/michael-milken' },
 { name: 'Dennis Levine', relationship: 'Investment banker who provided inside tips to Boesky; first to be caught and cooperate', href: '/entities/individuals/dennis-levine' },
 ],
 },






 'ian-gibbons': {
 name: 'Ian Gibbons',
 title: 'Theranos Chief Scientist Who Knew the Technology Was Fraudulent',
 role: 'Biochemist; Theranos Whistleblower (Silenced)',
 riskLevel: 'low',
 description: 'Ian Gibbons was a distinguished British biochemist who served as the chief scientist at Theranos from 2005 until his death in 2013. With decades of experience in clinical chemistry and diagnostic technology; Gibbons was one of the few people inside Theranos who understood that Elizabeth Holmes\' blood-testing technology fundamentally did not work as claimed. He repeatedly raised concerns internally about the accuracy and reliability of the miniaturized blood-testing devices; but was marginalized; demoted; and threatened with termination by Holmes and company president Sunny Balwani. When Gibbons was subpoenaed to give a deposition in a patent lawsuit that would have required him to testify about the technology\'s capabilities; he became deeply distressed. On May 23; 2013; the night before his scheduled deposition; Gibbons died by suicide at his home in San Jose; California. His wife Rochelle later revealed that Holmes\' office called the day after his death; not to offer condolences; but to ask for the return of his company laptop. Gibbons\' death became a central element in the Theranos fraud narrative; illustrating the human cost of Holmes\' deception and the company\'s culture of intimidation.',
 birthDate: 'Unknown',
 birthPlace: 'United Kingdom',
 deathDate: 'May 23, 2013',
 education: ['University of Cambridge (Biochemistry)'],
 affiliations: [
 { name: 'Theranos', role: 'Chief Scientist (2005-2013)', type: 'corporation' },
 { name: 'Biosite Incorporated', role: 'Former Senior Scientist', type: 'corporation' },
 ],
 controversies: [
 'Repeatedly warned Theranos leadership that the miniaturized blood-testing technology did not work; was ignored and marginalized',
 'Demoted and threatened with termination by Elizabeth Holmes and Sunny Balwani for raising scientific concerns',
 'Died by suicide the night before a deposition where he would have been required to testify about Theranos technology failures',
 'Theranos called his wife the day after his death to request return of company laptop rather than offering condolences',
 'His death was used as evidence of Theranos\' toxic culture of suppression and intimidation during Holmes\' criminal trial',
 ],
 charges: [],
 relatedInvestigations: [
 { title: 'Theranos Fraud', slug: 'theranos-fraud', severity: 'high' },
 ],
 timeline: [
 { date: '2005', event: 'Joins Theranos as chief scientist; brings decades of clinical chemistry expertise' },
 { date: '2010-2012', event: 'Repeatedly raises concerns about blood-testing technology accuracy to Holmes and Balwani' },
 { date: '2012', event: 'Demoted and marginalized after persistent warnings about technology failures' },
 { date: 'May 2013', event: 'Subpoenaed to give deposition in patent lawsuit requiring testimony about Theranos technology' },
 { date: 'May 23, 2013', event: 'Dies by suicide at his San Jose home the night before his scheduled deposition' },
 { date: 'May 24, 2013', event: 'Theranos contacts his wife to request return of company laptop' },
 { date: '2018', event: 'John Carreyrou\'s book Bad Blood details Gibbons\' story; bringing it to public attention' },
 { date: '2022', event: 'His treatment cited during Elizabeth Holmes\' criminal trial as evidence of intimidation culture' },
 ],
 socialMedia: [],
 sources: [
 { title: 'Bad Blood: Secrets and Lies in a Silicon Valley Startup by John Carreyrou', url: 'https://www.loc.gov', date: '2018' },
 { title: 'United States v. Elizabeth Holmes; No. 5:18-cr-00258', url: 'https://www.justice.gov/usao-ndca/us-v-elizabeth-holmes-et-al', date: '2022' },
 ],
 aliases: [],
 knownAssociates: [
 { name: 'Elizabeth Holmes', relationship: 'Theranos CEO who suppressed his scientific warnings', href: '/entities/individuals/elizabeth-holmes' },
 { name: 'Ramesh "Sunny" Balwani', relationship: 'Theranos president who helped marginalize Gibbons', href: '/entities/individuals/sunny-balwani' },
 { name: 'Tyler Shultz', relationship: 'Fellow Theranos whistleblower who later exposed the fraud', href: '/entities/individuals/tyler-shultz' },
 ],
 },







 'ida-b-wells': {
 name: 'Ida B. Wells',
 title: 'Investigative Journalist; Anti-Lynching Crusader; Civil Rights Pioneer',
 role: 'Journalist; Activist; Co-Founder of NAACP',
 riskLevel: 'low',
 description: 'Ida Bell Wells-Barnett was an African-American investigative journalist; educator; and early civil rights leader who became one of the most prominent anti-lynching crusaders in United States history. Born into slavery in Holly Springs; Mississippi during the Civil War; Wells was freed by the Emancipation Proclamation and later became a teacher and journalist. After three of her friends; Thomas Moss; Calvin McDowell; and Henry Stewart; were lynched in Memphis in 1892 for the crime of operating a successful grocery store that competed with a white-owned business; Wells launched a fearless one-woman crusade to document lynching across the American South. Her pamphlets "Southern Horrors: Lynch Law in All Its Phases" (1892) and "The Red Record" (1895) systematically dismantled the myth that lynching was punishment for Black criminality; proving through meticulous data collection that the overwhelming majority of lynch victims were killed for economic competition; political activism; or fabricated accusations. She was driven from Memphis after her newspaper office was destroyed by a white mob. Wells took her anti-lynching campaign to Britain; generating international pressure on the United States. She co-founded the National Association for the Advancement of Colored People (NAACP) in 1909 and was a founding member of the National Afro-American Council. She was posthumously awarded a Pulitzer Prize special citation in 2020.',
 birthDate: 'July 16, 1862',
 birthPlace: 'Holly Springs, Mississippi, USA',
 deathDate: 'March 25, 1931',
 education: ['Rust College (Shaw University); Holly Springs; Mississippi', 'Fisk University; Nashville; Tennessee'],
 affiliations: [
 { name: 'NAACP', role: 'Co-Founder (1909)', type: 'organization' },
 { name: 'Memphis Free Speech and Headlight', role: 'Editor and Co-Owner', type: 'corporation' },
 { name: 'Chicago Conservator', role: 'Journalist', type: 'corporation' },
 ],
 controversies: [
 'Newspaper office (Memphis Free Speech) burned by white mob after publishing anti-lynching editorials in 1892; death threats forced her permanent exile from Memphis',
 'Publicly challenged white suffrage leaders Frances Willard and Susan B. Anthony for their silence on lynching',
 'Boycotted the 1893 World\'s Columbian Exposition in Chicago for excluding Black Americans; distributed protest pamphlet "The Reason Why the Colored American Is Not in the World\'s Columbian Exposition"',
 'Documented that 728 Black people were lynched between 1884 and 1892; disproving the "rape myth" used to justify extrajudicial murder',
 'Her anti-lynching work was deliberately excluded from mainstream historical narratives for decades',
 'Marginalized within the NAACP she co-founded due to conflicts with W.E.B. Du Bois over strategy',
 ],
 charges: [],
 relatedInvestigations: [
 { title: 'Convict Leasing', slug: 'convict-leasing', severity: 'high' },
 { title: 'Lynching In America', slug: 'lynching-in-america', severity: 'high' },
 { title: 'Sundown Towns', slug: 'sundown-towns', severity: 'high' },
 ],
 timeline: [
 { date: 'July 16, 1862', event: 'Born into slavery in Holly Springs; Mississippi' },
 { date: '1863', event: 'Freed by the Emancipation Proclamation' },
 { date: '1878', event: 'Parents and infant brother die in yellow fever epidemic; begins teaching at age 16 to support siblings' },
 { date: '1884', event: 'Sued Chesapeake & Ohio Railroad after being forcibly removed from first-class car; won initially; overturned by Tennessee Supreme Court' },
 { date: 'March 9, 1892', event: 'Three friends (Thomas Moss; Calvin McDowell; Henry Stewart) lynched in Memphis; sparking her anti-lynching campaign' },
 { date: '1892', event: 'Publishes "Southern Horrors: Lynch Law in All Its Phases"; newspaper office destroyed by mob' },
 { date: '1893', event: 'Takes anti-lynching campaign to Britain; generates international condemnation' },
 { date: '1895', event: 'Publishes "The Red Record"; the first statistical study of lynching in America' },
 { date: '1909', event: 'Co-founds the NAACP' },
 { date: 'March 25, 1931', event: 'Dies in Chicago at age 68' },
 { date: '2020', event: 'Posthumously awarded Pulitzer Prize special citation for outstanding and courageous reporting' },
 ],
 socialMedia: [],
 sources: [
 { title: 'The Red Record: Tabulated Statistics and Alleged Causes of Lynching in the United States (1895)', url: 'https://www.loc.gov/item/01022454/', date: '1895' },
 { title: 'Crusade for Justice: The Autobiography of Ida B. Wells', url: 'https://www.loc.gov', date: '1970' },
 ],
 aliases: ['Ida B. Wells-Barnett', 'Iola (pen name)'],
 knownAssociates: [
 { name: 'Frederick Douglass', relationship: 'Fellow civil rights pioneer; wrote introduction to "The Reason Why" pamphlet', href: '/entities/individuals/frederick-douglass' },
 { name: 'Mamie Till-Mobley', relationship: 'Wells\' anti-lynching legacy continued through Till case activism decades later', href: '/entities/individuals/mamie-till-mobley' },
 { name: 'W.E.B. Du Bois', relationship: 'Fellow NAACP co-founder; had conflicts over organizational strategy', href: '/entities/individuals/web-du-bois' },
 ],
 },

 'irving-picard': {
 name: 'Irving Picard',
 title: 'Court-Appointed Trustee Who Recovered $14.4 Billion for Madoff Victims',
 role: 'Securities Attorney; SIPA Trustee',
 riskLevel: 'low',
 description: 'Irving H. Picard is an American attorney and partner at Baker & Hostetler LLP who was appointed by the Securities Investor Protection Corporation (SIPC) as trustee for the liquidation of Bernard L. Madoff Investment Securities LLC following the exposure of the largest Ponzi scheme in history. Over more than 15 years; Picard and his team filed over 1;000 lawsuits to recover assets from Madoff\'s net winners; those who withdrew more money than they deposited; and from feeder funds that channeled billions into the scheme. His most significant recovery was $7.2 billion from the estate of Jeffry Picower; who had been the largest individual beneficiary of the Madoff fraud. Picard also recovered $2.4 billion from the family of Carl Shapiro; $1.7 billion from the estate of Norman Levy; and billions more from feeder funds including Fairfield Greenwich Group and Union Bancaire Privee. By 2024; Picard had recovered approximately $14.4 billion of the estimated $17.5 billion in principal losses; an extraordinary recovery rate exceeding 80%. His aggressive approach drew controversy; particularly from innocent investors who were sued for "fictitious profits" they had received in good faith.',
 birthDate: 'Unknown',
 birthPlace: 'United States',
 education: ['University of Michigan Law School; JD'],
 affiliations: [
 { name: 'Baker & Hostetler LLP', role: 'Partner; Securities Litigation', type: 'corporation' },
 { name: 'Securities Investor Protection Corporation', role: 'Court-Appointed SIPA Trustee for Madoff Liquidation', type: 'organization' },
 ],
 controversies: [
 'Sued thousands of Madoff investors to recover "fictitious profits"; including elderly retirees who believed their gains were legitimate',
 'Recovered $7.2 billion from Jeffry Picower estate; the largest single clawback in securities fraud history',
 'Baker & Hostetler earned over $1.5 billion in legal fees from the Madoff trusteeship; drawing criticism about incentive alignment',
 'Filed suit against JPMorgan Chase for $19 billion; alleging the bank ignored obvious signs of Madoff\'s fraud; settled for $1.7 billion',
 'Sued the Mets owners (Fred Wilpon and Saul Katz) for $1 billion in Madoff profits; settled for $162 million',
 'U.S. Court of Appeals limited his ability to sue foreign feeder funds; reducing potential recoveries by billions',
 ],
 charges: [],
 relatedInvestigations: [
 { title: 'Bernie Madoff Ponzi', slug: 'bernie-madoff-ponzi', severity: 'high' },
 ],
 timeline: [
 { date: 'December 2008', event: 'Appointed SIPA trustee for liquidation of Madoff\'s firm after fraud exposed' },
 { date: '2009', event: 'Files first wave of lawsuits against Madoff "net winners" and feeder funds' },
 { date: 'December 2010', event: 'Recovers $7.2 billion from Jeffry Picower estate' },
 { date: '2011', event: 'Files $19 billion suit against JPMorgan Chase' },
 { date: 'January 2014', event: 'Settles with JPMorgan Chase for $1.7 billion' },
 { date: '2017', event: 'Total recoveries surpass $13 billion; begins distributing funds to victims' },
 { date: '2024', event: 'Cumulative recoveries reach approximately $14.4 billion of $17.5 billion in principal losses' },
 ],
 socialMedia: [],
 sources: [
 { title: 'SIPC Madoff Recovery Website', url: 'https://www.madofftrustee.com', date: '' },
 { title: 'United States v. JPMorgan Chase Settlement', url: 'https://www.justice.gov/usao-sdny/pr/manhattan-us-attorney-announces-recovery-17-billion-largest-forfeiture-ever', date: '2014' },
 ],
 aliases: [],
 knownAssociates: [
 { name: 'Bernie Madoff', relationship: 'Ponzi scheme operator whose firm Picard was appointed to liquidate', href: '/entities/individuals/bernie-madoff' },
 { name: 'Jeffry Picower', relationship: 'Largest Madoff beneficiary; Picard recovered $7.2 billion from estate', href: '/entities/individuals/jeffry-picower' },
 { name: 'Frank DiPascali', relationship: 'Madoff\'s chief financial officer who cooperated with government; aided Picard\'s recovery efforts', href: '/entities/individuals/frank-dipascali' },
 ],
 },

 'isabel-maxwell': {
 name: 'Isabel Maxwell',
 title: 'Technology Executive and Investor',
 role: 'Ghislaine Maxwell sister',
 riskLevel: 'low',
 description: 'Isabel Maxwell is a British-American technology executive and the sister of Ghislaine Maxwell. She served as president of Commtouch (now Cyren), an Israeli-based cybersecurity company, and has been an investor in multiple technology startups. Her connections spanning Israeli tech, intelligence circles, and the Maxwell family have drawn scrutiny.',
 education: ['University of Oxford, BA Modern Languages'],
 affiliations: [
 { name: 'CommTouch (Cyren)', role: 'Former President', type: 'corporation' },
 ],
 knownAssociates: [
 { name: 'Ghislaine Maxwell', relationship: 'Sister, convicted sex trafficker', href: '/entities/individuals/ghislaine-maxwell' },
 { name: 'Christine Maxwell', relationship: 'Twin sister', href: '/entities/individuals/christine-maxwell' },
 { name: 'Robert Maxwell', relationship: 'Father, media mogul with suspected intelligence ties', href: '/entities/individuals/robert-maxwell' },
 ],
 controversies: [
 'Twin sister of Christine Maxwell and older sister of convicted sex trafficker Ghislaine Maxwell',
 'Served as president of Commtouch, an Israeli email security company with alleged intelligence connections',
 'Father Robert Maxwell was suspected by multiple intelligence agencies of being an asset for Mossad and possibly other services',
 'Her position at the intersection of Israeli technology and intelligence communities has fueled speculation about the broader Maxwell family network',
 ],
 relatedInvestigations: [
 { title: 'Epstein Network Complicity', slug: 'epstein-network', severity: 'critical' },
 ],
 timeline: [
 { date: '2000-01-01', event: 'Became president of Commtouch (later Cyren), Israeli cybersecurity firm' },
 { date: '2021-12-29', event: 'Sister Ghislaine convicted on sex trafficking charges' },
 ],
 sources: [
 { title: 'SEC Filings: Commtouch Software Ltd', url: 'https://www.sec.gov/cgi-bin/browse-edgar?company=commtouch', date: '2006-01-01' },
 ],
 },
 'itzhak-perlman': {
 name: 'Itzhak Perlman',
 title: 'Virtuoso Violinist; Named in Jeffrey Epstein\'s Black Book',
 role: 'Classical Musician; Cultural Figure',
 riskLevel: 'low',
 description: 'Itzhak Perlman is an Israeli-American violinist; conductor; and music pedagogue widely considered one of the greatest violinists of the 20th and 21st centuries. Born in Tel Aviv; he contracted polio at age four; which left him walking with crutches and leg braces for the rest of his life. He gained fame after appearing on The Ed Sullivan Show at age 13 and went on to study at Juilliard under Ivan Galamian and Dorothy DeLay. Perlman has performed with every major orchestra in the world; won 16 Grammy Awards; received the Presidential Medal of Freedom (2015); and was awarded the Genesis Prize (2017). His name appears in Jeffrey Epstein\'s black book of contacts; which contained the names of hundreds of prominent individuals across entertainment; politics; science; and business. There is no evidence Perlman was involved in or aware of any criminal activity; contact books of this nature reflect Epstein\'s strategy of cultivating social connections with high-profile figures to build legitimacy and access.',
 birthDate: 'August 31, 1945',
 birthPlace: 'Tel Aviv, British Mandate of Palestine (now Israel)',
 education: ['Juilliard School; studied under Ivan Galamian and Dorothy DeLay'],
 affiliations: [
 { name: 'Juilliard School', role: 'Student; later Faculty Member', type: 'organization' },
 { name: 'Perlman Music Program', role: 'Founder', type: 'organization' },
 ],
 controversies: [
 'Named in Jeffrey Epstein\'s black book of contacts; no evidence of involvement in criminal activity',
 'Epstein\'s Black Book inclusion reflects Epstein\'s pattern of collecting contact information of prominent cultural figures to build social legitimacy',
 ],
 charges: [],
 relatedInvestigations: [
 { title: 'Epstein Network Complicity', slug: 'epstein-network', severity: 'critical' },
 ],
 timeline: [
 { date: 'August 31, 1945', event: 'Born in Tel Aviv' },
 { date: '1949', event: 'Contracts polio at age four; left permanently disabled' },
 { date: '1958', event: 'Appears on The Ed Sullivan Show at age 13; gains national attention' },
 { date: '1964', event: 'Makes Carnegie Hall debut' },
 { date: '1986', event: 'Awarded Medal of Liberty by President Reagan' },
 { date: '2015', event: 'Receives Presidential Medal of Freedom from President Obama' },
 { date: '2017', event: 'Awarded the Genesis Prize' },
 ],
 socialMedia: [],
 sources: [
 { title: 'Epstein Black Book (Court Records)', url: 'https://www.documentcloud.org/documents/1508273-jeffrey-epsteins-little-black-book-redacted', date: '' },
 ],
 aliases: [],
 knownAssociates: [
 { name: 'Jeffrey Epstein', relationship: 'Named in Epstein\'s black book of contacts', href: '/entities/individuals/jeffrey-epstein' },
 ],
 },








 'igor-zinoviev': {
 name: 'Igor Zinoviev',
 title: 'Former MMA Fighter; Employed as Bodyguard in Jeffrey Epstein Household',
 role: 'Security Staff; Mixed Martial Artist',
 riskLevel: 'low',
 description: 'Igor Zinoviev is a Russian-born former mixed martial arts fighter who competed in the UFC and other promotions in the late 1990s and early 2000s before becoming employed as a bodyguard and personal security staff member for Jeffrey Epstein. Zinoviev worked at Epstein\'s various properties; including his Manhattan townhouse and Palm Beach estate; during the period when Epstein was actively trafficking and abusing underage girls. As a member of the household staff; Zinoviev would have been present during the operations of Epstein\'s trafficking network. His name appeared in court documents and depositions related to Epstein\'s criminal cases; though he was identified primarily as staff rather than as an active participant. Like other household employees (including Juan Alessi; Epstein\'s former house manager who testified about the abuse he witnessed); Zinoviev\'s proximity to Epstein\'s activities made him a person of interest to investigators examining who knew about and facilitated the trafficking operation.',
 birthDate: 'November 4, 1969',
 birthPlace: 'Saint Petersburg, Russia (then Leningrad, Soviet Union)',
 education: [],
 affiliations: [
 { name: 'Ultimate Fighting Championship (UFC)', role: 'Former Fighter', type: 'organization' },
 { name: 'Epstein Household', role: 'Bodyguard and Personal Security', type: 'individual' },
 ],
 controversies: [
 'Employed as bodyguard at Epstein properties during period of active sex trafficking',
 'Named in court documents related to Epstein criminal proceedings',
 'Proximity to Epstein\'s trafficking operation as household staff raised questions about knowledge and complicity',
 'Other household staff (Juan Alessi) testified to witnessing abuse; raising questions about what all staff members observed',
 ],
 charges: [],
 relatedInvestigations: [
 { title: 'Epstein Network Complicity', slug: 'epstein-network', severity: 'critical' },
 ],
 timeline: [
 { date: 'November 4, 1969', event: 'Born in Leningrad (Saint Petersburg); Soviet Union' },
 { date: '1996-2001', event: 'Competes in UFC and other MMA promotions' },
 { date: '2000s', event: 'Employed as bodyguard and security at Epstein\'s properties' },
 { date: '2008', event: 'Epstein\'s first criminal case; plea deal in Florida' },
 { date: '2019', event: 'Epstein arrested on federal sex trafficking charges; household staff scrutinized' },
 ],
 socialMedia: [],
 sources: [
 { title: 'Court Filings: United States v. Ghislaine Maxwell (S.D.N.Y.)', url: 'https://www.courtlistener.com', date: '2021' },
 { title: 'Miami Herald Epstein Investigation', url: 'https://www.miamiherald.com/topics/jeffrey-epstein', date: '2018' },
 ],
 aliases: [],
 knownAssociates: [
 { name: 'Jeffrey Epstein', relationship: 'Employer; worked as personal bodyguard', href: '/entities/individuals/jeffrey-epstein' },
 { name: 'Ghislaine Maxwell', relationship: 'Worked under Maxwell as part of Epstein household staff', href: '/entities/individuals/ghislaine-maxwell' },
 { name: 'Juan Alessi', relationship: 'Fellow Epstein household staff member who later testified about abuse', href: '/entities/individuals/juan-alessi' },
 { name: 'Sarah Kellen', relationship: 'Epstein\'s assistant; interacted as household staff', href: '/entities/individuals/sarah-kellen' },
 ],
 },








 'ice': {
 name: 'U.S. Immigration and Customs Enforcement (ICE)',
 title: 'Federal Immigration Enforcement Agency (Misplaced; Should Be in Agencies)',
 role: 'DHS Component Agency; Immigration Enforcement and Detention',
 riskLevel: 'high',
 description: 'U.S. Immigration and Customs Enforcement (ICE) is a federal law enforcement agency under the Department of Homeland Security (DHS); created in 2003 as part of the post-9/11 reorganization of federal security agencies. ICE operates through two primary divisions: Enforcement and Removal Operations (ERO); which handles immigration arrests; detention; and deportation; and Homeland Security Investigations (HSI); which investigates transnational crime including human trafficking; drug smuggling; and financial crimes. ICE has become one of the most controversial federal agencies in the United States due to its immigration enforcement practices; including family separations at the border; prolonged detention of asylum seekers in facilities operated by private prison companies (GEO Group; CoreCivic); deaths in ICE custody; and cooperation with local law enforcement through 287(g) agreements that critics argue enable racial profiling. During the Trump administration; ICE expanded workplace raids; targeted sanctuary cities; and arrested immigrants at courthouses; churches; and hospitals. Multiple reports have documented sexual abuse; medical neglect; and forced sterilizations in ICE detention facilities. Note: This entry is misplaced in the individuals data file; ICE should be categorized as a federal agency.',
 affiliations: [
 { name: 'Department of Homeland Security', role: 'Parent Agency', type: 'agency' },
 { name: 'GEO Group', role: 'Private Detention Facility Operator', type: 'corporation' },
 { name: 'CoreCivic', role: 'Private Detention Facility Operator', type: 'corporation' },
 ],
 controversies: [
 'Family separation policy (2018): Separated thousands of children from parents at the border under Trump\'s "zero tolerance" policy',
 'Deaths in ICE custody: Hundreds of detainees have died in ICE custody since 2003; many from medical neglect',
 'Forced hysterectomies at Irwin County Detention Center exposed by whistleblower Dawn Wooten in 2020',
 'Private prison profiteering: ICE contracts worth billions awarded to GEO Group and CoreCivic; major political donors',
 'Courthouse arrests of immigrants appearing for legal proceedings; undermining access to justice',
 '287(g) agreements enabling local police to act as immigration agents; leading to racial profiling complaints',
 'Deporting U.S. military veterans who were promised citizenship paths',
 ],
 charges: [],
 relatedInvestigations: [
 { title: 'Immigration Enforcement Abuses', slug: 'immigration-enforcement-abuses', severity: 'critical' },
 ],
 timeline: [
 { date: 'March 1, 2003', event: 'ICE established under DHS as part of Homeland Security Act reorganization' },
 { date: '2006', event: 'Begins 287(g) program allowing local law enforcement to enforce immigration law' },
 { date: '2018', event: 'Family separation crisis; thousands of children separated from parents at border' },
 { date: 'September 2020', event: 'Whistleblower Dawn Wooten reveals forced hysterectomies at Irwin County facility' },
 { date: '2021', event: 'Biden administration narrows enforcement priorities; controversy over continued detention' },
 ],
 socialMedia: [],
 sources: [
 { title: 'DHS Office of Inspector General Reports on ICE Detention', url: 'https://www.oig.dhs.gov', date: '' },
 { title: 'ACLU: ICE Detention Conditions', url: 'https://www.aclu.org/issues/immigrants-rights/ice-and-border-patrol-abuses', date: '' },
 ],
 aliases: ['ICE'],
 knownAssociates: [],
 },





 'infowars': {
 name: 'InfoWars',
 title: 'Far-Right Conspiracy Media Platform (Misplaced; Should Be in Organizations)',
 role: 'Media Company; Conspiracy Media; Dietary Supplement Sales',
 riskLevel: 'high',
 description: 'InfoWars is an American far-right conspiracy theory and fake news media platform founded by Alex Jones in 1999. Operating through websites; podcasts; and a daily web show; InfoWars became one of the most influential disinformation outlets in the United States; promoting conspiracy theories including 9/11 trutherism; Sandy Hook massacre denial; Pizzagate; QAnon; COVID-19 misinformation; and 2020 election fraud claims. The platform generates substantial revenue through sales of dietary supplements; survival gear; and other products marketed to its audience through the InfoWars Store. In 2022; Jones was found liable in defamation lawsuits brought by Sandy Hook victims\' families for falsely claiming the massacre was staged; resulting in nearly $1.5 billion in damages. Free Speech Systems LLC; the parent company of InfoWars; filed for bankruptcy in 2022. A federal bankruptcy court ordered the liquidation of Jones\' assets in 2024 to pay Sandy Hook families. InfoWars played a significant role in promoting the January 6; 2021 Capitol attack; with Jones personally leading crowds toward the Capitol and broadcasting from the scene. Note: This entry is misplaced in the individuals data file; InfoWars should be categorized as an organization or media company.',
 affiliations: [
 { name: 'Free Speech Systems LLC', role: 'Parent Company', type: 'corporation' },
 { name: 'Alex Jones', role: 'Founder and Host', type: 'individual' },
 ],
 controversies: [
 'Sandy Hook massacre denial: Alex Jones claimed on InfoWars that the 2012 shooting was staged with crisis actors; leading to $1.5 billion in defamation damages',
 'Pizzagate conspiracy: InfoWars promoted the false claim that a D.C. pizza restaurant was a front for a child trafficking ring; leading to an armed attack on the restaurant',
 'January 6 promotion: InfoWars actively promoted the Capitol rally and Jones led crowds toward the building',
 'COVID-19 misinformation: Promoted unproven cures and anti-vaccine conspiracy theories',
 '2020 election fraud: Major amplifier of false claims about stolen election',
 'Dietary supplement scams: Multiple products marketed with unsubstantiated health claims',
 'Bankruptcy and liquidation ordered by federal court to pay Sandy Hook families',
 ],
 charges: [],
 relatedInvestigations: [
 { title: 'January 6th Insurrection', slug: 'january-6th-insurrection', severity: 'critical' },
 ],
 timeline: [
 { date: '1999', event: 'Alex Jones launches InfoWars website' },
 { date: '2012', event: 'Begins promoting Sandy Hook massacre denial conspiracy theories' },
 { date: '2016', event: 'Promotes Pizzagate conspiracy; gains massive audience during Trump presidential campaign' },
 { date: 'January 6, 2021', event: 'Jones broadcasts from Capitol; leads supporters toward building during insurrection' },
 { date: '2022', event: 'Jones found liable for Sandy Hook defamation; ordered to pay nearly $1.5 billion' },
 { date: '2022', event: 'Free Speech Systems LLC files for bankruptcy' },
 { date: '2024', event: 'Federal bankruptcy court orders liquidation of Jones\' assets' },
 ],
 socialMedia: [],
 sources: [
 { title: 'Sandy Hook Defamation Verdicts', url: 'https://www.courtlistener.com', date: '2022' },
 { title: 'January 6th Committee Final Report', url: 'https://www.govinfo.gov/content/pkg/GPO-J6-REPORT/pdf/GPO-J6-REPORT.pdf', date: '2022' },
 ],
 aliases: ['Info Wars', 'The Alex Jones Show'],
 knownAssociates: [],
 },

 'investigations-page': {
 name: 'Investigations Page',
 title: 'Data Artifact (Not a Real Person or Entity)',
 role: 'Erroneous Data Entry',
 riskLevel: 'low',
 description: 'This entry is a data artifact that was incorrectly generated during automated data processing. "Investigations Page" is not a person; organization; or entity. It appears to be a reference to the investigations page of the website itself that was erroneously parsed as an individual profile. The affiliations and known associates listed were cross-references to agencies and entities that appear on investigation pages; not genuine interpersonal connections. This entry should be removed in a future data cleanup.',
 education: [],
 affiliations: [],
 controversies: [],
 charges: [],
 relatedInvestigations: [],
 timeline: [],
 socialMedia: [],
 sources: [],
 aliases: [],
 knownAssociates: [],
 },


























 'icc': {
 name: 'International Criminal Court (ICC)',
 title: 'International Tribunal for War Crimes and Crimes Against Humanity (Misplaced; Should Be in Organizations)',
 role: 'International Judicial Body; War Crimes Tribunal',
 riskLevel: 'medium',
 description: 'The International Criminal Court (ICC) is an intergovernmental organization and international tribunal seated in The Hague; Netherlands; established by the Rome Statute in 2002 to prosecute individuals for genocide; crimes against humanity; war crimes; and the crime of aggression. The ICC serves as a court of last resort; stepping in when national courts are unwilling or unable to prosecute. As of 2024; the ICC has 124 member states; though notably the United States; Russia; China; India; and Israel have not ratified the Rome Statute. The ICC has issued arrest warrants for sitting heads of state including Omar al-Bashir (Sudan; 2009); Vladimir Putin (Russia; 2023); and Benjamin Netanyahu (Israel; 2024). The court has faced criticism from multiple directions: African nations have accused it of disproportionately targeting African leaders while ignoring Western crimes; the United States under the Trump administration imposed sanctions on ICC officials investigating American military personnel for alleged war crimes in Afghanistan; and critics argue the court lacks enforcement power since it has no police force and depends on member states to execute arrests. The ICC has secured convictions of Thomas Lubanga (Congo); Bosco Ntaganda (Congo); and Dominic Ongwen (Uganda); among others. Note: This entry is misplaced in the individuals data file; the ICC should be categorized as an international organization.',
 affiliations: [
 { name: 'United Nations', role: 'Cooperative relationship; though ICC is independent', type: 'organization' },
 { name: 'Assembly of States Parties', role: 'Governing body of 124 member states', type: 'organization' },
 ],
 controversies: [
 'U.S. sanctions on ICC officials: Trump administration sanctioned ICC prosecutor Fatou Bensouda and other officials for investigating American military in Afghanistan',
 'African Union backlash: Multiple African nations threatened to withdraw; accusing ICC of targeting African leaders while ignoring Western powers',
 'Lack of enforcement power: ICC has no police force and cannot compel arrests; Putin travels freely to non-member states',
 'Israel/Palestine jurisdiction disputes: ICC assertion of jurisdiction over Palestinian territories contested by Israel and the United States',
 'Arrest warrant for Netanyahu (2024) over Gaza military operations created diplomatic crisis',
 'Russia withdrew signature from Rome Statute after ICC opened investigation into Crimea annexation',
 ],
 charges: [],
 relatedInvestigations: [
 { title: 'War Crimes and International Justice', slug: 'war-crimes-international-justice', severity: 'critical' },
 ],
 timeline: [
 { date: 'July 17, 1998', event: 'Rome Statute adopted by 120 states' },
 { date: 'July 1, 2002', event: 'ICC officially established when Rome Statute enters into force' },
 { date: 'March 4, 2009', event: 'Issues arrest warrant for sitting head of state Omar al-Bashir of Sudan' },
 { date: 'March 17, 2023', event: 'Issues arrest warrant for Vladimir Putin for deportation of Ukrainian children' },
 { date: 'November 2024', event: 'Issues arrest warrant for Benjamin Netanyahu over Gaza operations' },
 ],
 socialMedia: [],
 sources: [
 { title: 'Rome Statute of the International Criminal Court', url: 'https://www.icc-cpi.int/sites/default/files/RS-Eng.pdf', date: '1998' },
 ],
 aliases: ['ICC', 'The Hague Court'],
 knownAssociates: [],
 },

 'icrc': {
 name: 'International Committee of the Red Cross (ICRC)',
 title: 'Humanitarian Organization and Guardian of International Humanitarian Law (Misplaced; Should Be in Organizations)',
 role: 'International Humanitarian Organization; Geneva Conventions Custodian',
 riskLevel: 'low',
 description: 'The International Committee of the Red Cross (ICRC) is a private humanitarian organization headquartered in Geneva; Switzerland; founded in 1863 by Henry Dunant and Gustave Moynier. The ICRC serves as the custodian of the Geneva Conventions and operates as a neutral intermediary in armed conflicts; providing protection and assistance to victims of war including prisoners of war; civilians; and wounded combatants. The organization has won three Nobel Peace Prizes (1917; 1944; 1963) and operates in over 100 countries. While widely respected; the ICRC has faced criticism for its strict neutrality policy; particularly its silence during the Holocaust when it was aware of Nazi concentration camps but chose not to publicly denounce the genocide to maintain access to POW camps. More recently; the ICRC has been criticized for not adequately documenting U.S. torture at Abu Ghraib and Guantanamo Bay despite having exclusive access to detainees; and for institutional secrecy around its findings. The ICRC\'s 2004 confidential report on CIA "enhanced interrogation techniques" was leaked and became crucial evidence of systematic torture. Note: This entry is misplaced in the individuals data file; the ICRC should be categorized as an international organization.',
 affiliations: [
 { name: 'International Red Cross and Red Crescent Movement', role: 'Founding Component', type: 'organization' },
 { name: 'Geneva Conventions', role: 'Custodian and Monitor of Compliance', type: 'organization' },
 ],
 controversies: [
 'Holocaust silence: ICRC was aware of Nazi death camps but chose not to publicly denounce the genocide to maintain neutrality and access to POW camps',
 'Abu Ghraib and Guantanamo: Confidential 2004 ICRC report documented CIA torture methods (waterboarding; sleep deprivation; stress positions) but organization did not publicly disclose findings',
 'Criticized for prioritizing institutional access over public accountability in conflict zones',
 'Strict neutrality policy prevents ICRC from naming perpetrators of war crimes; frustrating human rights advocates',
 'Internal workplace culture complaints: 2018 investigation revealed sexual misconduct by ICRC staff in conflict zones',
 ],
 charges: [],
 relatedInvestigations: [
 { title: 'CIA Torture Program', slug: 'cia-torture-program', severity: 'critical' },
 ],
 timeline: [
 { date: 'February 17, 1863', event: 'Founded in Geneva by Henry Dunant and four others' },
 { date: '1864', event: 'First Geneva Convention adopted; establishing rules for treatment of wounded soldiers' },
 { date: '1917', event: 'First Nobel Peace Prize for humanitarian work during World War I' },
 { date: '1944', event: 'Second Nobel Peace Prize for World War II work; later criticized for Holocaust silence' },
 { date: '2004', event: 'Confidential report on CIA torture leaked; documenting enhanced interrogation at black sites' },
 { date: '2018', event: 'Internal investigation reveals staff sexual misconduct in conflict zones' },
 ],
 socialMedia: [],
 sources: [
 { title: 'ICRC Report on the Treatment of Fourteen High Value Detainees in CIA Custody (leaked)', url: 'https://www.nybooks.com/articles/2009/04/09/icrc-report-treatment-fourteen-high-value-detainee/', date: '2007' },
 ],
 aliases: ['ICRC', 'Red Cross', 'Comite international de la Croix-Rouge'],
 knownAssociates: [],
 },

 'investigations-data': {
 name: 'Investigations Data',
 title: 'Data Artifact (Not a Real Person or Entity)',
 role: 'Erroneous Data Entry',
 riskLevel: 'low',
 description: 'This entry is a data artifact that was incorrectly generated during automated data processing. "Investigations Data" is not a person; organization; or entity. It appears to be a reference to the investigations data structure of the website that was erroneously parsed as an individual profile. The affiliations listed (Andy Puzder; Brett Favre) are unrelated individuals who appear in separate investigation pages; not genuine connections to a nonexistent entity. This entry should be removed in a future data cleanup.',
 education: [],
 affiliations: [],
 controversies: [],
 charges: [],
 relatedInvestigations: [],
 timeline: [],
 socialMedia: [],
 sources: [],
 aliases: [],
 knownAssociates: [],
 },

};

export default profiles;
