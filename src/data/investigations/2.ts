// Investigation data shard
import type { InvestigationData } from './types';

const investigations_2: Record<string, InvestigationData> = {
  '2000-election': {
 title: '2000 Election: Bush v. Gore',
 subtitle: 'How the Supreme Court handed the presidency to George W. Bush',
 severity: 'critical',
 category: 'Election Interference',
 date: 'February 11, 2009',
 lastUpdated: 'January 12, 2026',
 summary: 'The 2000 presidential election was decided not by voters but by the Supreme Court. With Florida\'s electoral votes determining the winner, and the margin there just hundreds of votes, the Court stopped the recount in Bush v. Gore. Five Republican-appointed justices handed the presidency to George W. Bush. Subsequent media recounts suggested Al Gore may have won. The decision\'s explicit statement that it set no precedent revealed its political nature.',
 content: [
 'ELECTION NIGHT: On November 7, 2000, the presidential race came down to Florida\'s 25 electoral votes. Networks initially called Florida for Gore, then Bush, then marked it "too close to call."Bush\'s brother Jeb was Florida\'s governor. The margin was razor-thin.',
 'THE INITIAL COUNT: After initial counting, Bush led by approximately 1,800 votes out of 6 million cast, a margin of 0.03%. Florida law required an automatic machine recount at such margins, which reduced Bush\'s lead to just 327 votes.',
 'BUTTERFLY BALLOT: Palm Beach County used a confusing "butterfly ballot "that led thousands of Gore voters to accidentally vote for Pat Buchanan. Statistical analysis confirmed the anomaly. These votes couldn\'t be recovered.',
 'CHAD CONTROVERSIES: Florida\'s punch card ballots produced "hanging chads "and "dimpled chads," incompletely punched ballots where voter intent was disputed. Different counties applied different standards for counting these ballots.',
 'KATHERINE HARRIS: Florida Secretary of State Katherine Harris, a Bush campaign co-chair, made key decisions favoring Bush. She certified results before recounts completed and used a flawed felon purge list that wrongly disenfranchised thousands of eligible voters.',
 'BROOKS BROTHERS RIOT: On November 22, 2000, Republican operatives staged a violent protest at the Miami-Dade County election office, forcing the canvassing board to stop its recount. Several participants were later identified as Republican congressional staffers.',
 'THE SUPREME COURT INTERVENES: Bush\'s team appealed to the U.S. Supreme Court to stop the recounts. On December 12, 2000, in Bush v. Gore, the Court ruled 5-4 to halt all recounting, effectively declaring Bush the winner.',
 'THE DECISION: The majority opinion found that different recount standards violated equal protection. But it explicitly stated:"Our consideration is limited to the present circumstances."The justices knew their reasoning couldn\'t withstand application as precedent.',
 'THE DISSENTERS: Justice John Paul Stevens wrote:"Although we may never know with complete certainty the identity of the winner of this year\'s Presidential election, the identity of the loser is perfectly clear. It is the Nation\'s confidence in the judge as an impartial guardian of the rule of law."',
 'MEDIA RECOUNTS: Subsequent media-sponsored recounts reached varying conclusions depending on which ballots were counted and what standards applied. Several scenarios showed Gore winning. The most comprehensive count suggested Gore won under most recount methodologies.',
 'CONSEQUENCES: Bush\'s presidency brought the Iraq War (based on lies), Hurricane Katrina failures, the 2008 financial crisis, and Supreme Court appointments that later overturned Roe v. Wade. None of this was democratically chosen.',
 'LASTING DAMAGE: Bush v. Gore damaged public trust in the Supreme Court\'s impartiality and established that the Court would intervene in elections to benefit Republicans. It foreshadowed future judicial power grabs.'
 ],
 tags: ['2000 Election', 'Bush v Gore', 'Supreme Court', 'Florida Recount', 'Katherine Harris', 'Stolen Election'],
 sources: [
 { title: 'Bush v. Gore Decision', url: 'https://supreme.justia.com/cases/federal/us/531/98/', type: 'Court Decision' },
 { title: 'Florida Recount Study, NORC', url: 'https://www.norc.org/Research/Projects/Pages/florida-ballot-project.aspx', type: 'Academic Research' },
 { title: 'Felon Voter Purge Analysis', url: 'https://www.usccr.gov/pubs/vote2000/report/ch5.htm', type: 'Government Report' }
 ],
 affiliations: [
 { id: '1', name: 'George W. Bush', type: 'individual', relationship: 'Beneficiary of Court intervention', href: '/entities/individuals/george-w-bush' },
 { id: '2', name: 'Al Gore', type: 'individual', relationship: 'Likely actual winner', href: '/entities/individuals/al-gore' },
 { id: '3', name: 'Katherine Harris', type: 'individual', relationship: 'Secretary of State, Bush campaign co-chair', href: '/entities/individuals/katherine-harris' },
 { id: '4', name: 'Jeb Bush', type: 'individual', relationship: 'Florida Governor, brother', href: '/entities/individuals/jeb-bush' },
 { id: '5', name: 'Supreme Court', type: 'agency', relationship: 'Stopped recount, decided election', href: '/entities/agencies/supreme-court' },
 { id: '6', name: 'Antonin Scalia', type: 'individual', relationship: 'Key vote to stop count', href: '/entities/individuals/antonin-scalia' }
 ],
   eventOriginDate: '2000-01-01',
   lastActivityDate: '2026-01-12',
   pageUpdatedDate: '2026-03-18',
   timeline: [
     { date: '2000-11-07', event: 'ELECTION NIGHT: On November 7, 2000, the presidential race came down to Florida\'s 25 electoral votes', type: 'political' },
     { date: '2000-11-22', event: 'BROOKS BROTHERS RIOT: On November 22, 2000, Republican operatives staged a violent protest at the Miami-Dade County election office, forcing the canvassing board to stop its recount', type: 'political' },
     { date: '2000-12-12', event: 'Supreme Court rules 5-4 in Bush v. Gore to halt Florida recount, effectively awarding presidency to George W. Bush along partisan lines', type: 'legal' },
     { date: '2008', event: 'Bush presidency brought the Iraq War (based on false WMD claims), Hurricane Katrina failures, the 2008 financial crisis, and Supreme Court appointments that later overturned Roe v. Wade', type: 'legal' }
   ],

 defendants: [

   { name: 'Katherine Harris', role: 'Florida Secretary of State who certified Bush\'s 537-vote victory while serving as co-chair of Bush\'s Florida campaign', status: 'pending', notes: 'Halted recount; ordered counties to certify results. No charges filed despite conflict of interest.' },

   { name: 'Supreme Court (Bush v. Gore)', role: '5-4 decision along partisan lines halted Florida recount, effectively deciding the presidential election', status: 'pending', notes: 'Per curiam opinion stated "limited to the present circumstances." No legal accountability.' }

 ],
 },
  '2020-election-overturn': {
 title: '2020 Election Overturn Conspiracy',
 subtitle: 'Trump\'s Multi-Pronged Scheme to Subvert Democracy: Fake Electors, DOJ Corruption, State Coercion, and the January 6 Attack',
 severity: 'critical',
 category: 'Election Interference',
 date: 'December 1, 2020',
 lastUpdated: 'July 15, 2025',
 summary: 'After losing the 2020 presidential election by over 7 million popular votes and 306-232 in the Electoral College, Donald Trump orchestrated the most comprehensive attempt to overturn an American election in history. The conspiracy operated through at least five distinct but coordinated channels: (1) organizing fraudulent alternate electoral slates in seven states, (2) pressuring state election officials to falsify vote counts, (3) attempting to corrupt the Department of Justice into sending false fraud claims to states, (4) pressuring Vice President Pence to unconstitutionally reject certified electoral votes, and (5) mobilizing a violent mob to attack the U.S. Capitol when all other schemes failed. Over 60 legal challenges were rejected by courts at every level, including by Trump-appointed judges. The conspiracy was documented in exhaustive detail by the House Select Committee (publishing 845 pages and 1,000+ witness interviews) and resulted in federal and state indictments. Trump was charged with conspiracy to defraud the United States, obstruction of an official proceeding, and conspiracy against the right to vote. In Georgia, 19 people including Trump were charged under RICO statutes. Over 1,200 January 6 participants have been convicted of federal crimes. Four people died at the Capitol and several officers committed suicide in the aftermath.',
 content: [
 'FAKE ELECTORS SCHEME: Trump attorneys John Eastman, Kenneth Chesebro, and Rudy Giuliani orchestrated the creation of fraudulent electoral certificates in seven states: Arizona, Georgia, Michigan, Nevada, New Mexico, Pennsylvania, and Wisconsin. Republican operatives in each state signed documents falsely claiming to be the duly appointed presidential electors. These fake certificates were transmitted to the National Archives and Congress to be used as a pretext for rejecting the legitimate results on January 6. The scheme required either Vice President Pence or state legislatures to accept the fraudulent certificates over the certified results. Chesebro authored memos detailing the legal strategy and later pled guilty in the Georgia RICO case.',
 'GEORGIA PRESSURE CAMPAIGN: On January 2, 2021, Trump called Georgia Secretary of State Brad Raffensperger in a recorded 67-minute call, telling him "I just want to find 11,780 votes, which is one more than we have." Trump alternated between flattery, threats, and false fraud claims during the call. He told Raffensperger "the people of Georgia are angry" and suggested criminal consequences for failing to act. When Raffensperger refused to alter the results, Trump pressured Governor Brian Kemp, Lt. Governor Geoff Duncan, and state legislators. Trump also called Frances Watson, the chief investigator for the Secretary of State, pressuring her to find fraud. All refused.',
 'DOJ CORRUPTION ATTEMPT: Trump held at least nine meetings with Acting Attorney General Jeffrey Rosen and Deputy AG Richard Donoghue between December 2020 and January 2021, demanding the DOJ announce it had found voter fraud. When Rosen refused, Trump attempted to install Jeffrey Clark (a mid-level environmental lawyer with no election expertise) as Acting AG. Clark had drafted a letter to Georgia officials falsely stating the DOJ had "identified significant concerns" about election irregularities. In a dramatic January 3, 2021 Oval Office meeting, White House Counsel Pat Cipollone, Rosen, Donoghue, and senior DOJ leadership threatened mass resignation if Clark was installed. Trump backed down only when told every senior DOJ official would resign simultaneously.',
 'PENCE PRESSURE: Trump publicly and privately pressured Vice President Pence to either reject certified electoral votes or send them back to state legislatures during the January 6 joint session of Congress. John Eastman wrote two memos outlining a theory that the Vice President had unilateral authority to reject electoral votes, a theory rejected by every constitutional scholar and by Pence\'s own counsel Greg Jacob. On the morning of January 6, Trump called Pence and told him "you can either go down in history as a patriot... or you can go down in history as a p---y." When Pence issued his letter refusing to obstruct the certification, Trump attacked him on Twitter, leading to rioters chanting "Hang Mike Pence" while constructing a gallows outside the Capitol.',
 'JANUARY 6 ATTACK: After a rally where Trump told supporters to "fight like hell" and march to the Capitol, thousands stormed the building, overwhelming police lines and breaching both chambers of Congress. The attack caused the first interruption of the peaceful transfer of presidential power in American history. Five people died in connection with the attack. Over 140 law enforcement officers were injured. The mob came within 40 feet of Vice President Pence. Members of Congress hid under desks and donned gas masks. Trump watched the violence unfold on television for 187 minutes before issuing a statement telling rioters to go home, during which time he rejected requests from aides, family members, and congressional allies to intervene.',
 'LEGAL RECKONING: As of 2025, over 1,200 January 6 defendants have been convicted of federal crimes, with sentences ranging from probation to 22 years (for Oath Keepers leader Stewart Rhodes, convicted of seditious conspiracy). The Georgia RICO case resulted in 19 initial indictments. Sidney Powell and Kenneth Chesebro pled guilty. Jenna Ellis pled guilty. Scott Hall pled guilty. Trump was federally indicted on four counts by Special Counsel Jack Smith in August 2023, but the case was dropped after Trump won the 2024 presidential election. The Georgia case remains pending but proceedings have slowed significantly. John Eastman was disbarred in California in 2024. Rudy Giuliani was disbarred in New York and DC and hit with a $148 million defamation judgment by Dominion Voting Systems election workers.'
 ],
 tags: ['2020 Election', 'Fake Electors', 'January 6', 'Trump', 'Election Interference', 'RICO', 'Insurrection', 'Seditious Conspiracy'],
 sources: [
 { title: 'House Select Committee Final Report (845 pages)', url: 'https://www.govinfo.gov/content/pkg/GPO-J6-REPORT/pdf/GPO-J6-REPORT.pdf', type: 'Government Report' },
 { title: 'DOJ January 6 Prosecutions Database', url: 'https://www.justice.gov/usao-dc/january-6-attack-capitol', type: 'Government' },
 { title: 'Trump Federal Indictment - Jack Smith (4 counts)', url: 'https://www.justice.gov/storage/US_v_Trump_23_cr_257.pdf', type: 'Court Filing' },
 { title: 'Fulton County RICO Indictment (Georgia, 19 defendants)', url: 'https://d3i6fh83elv35t.cloudfront.net/static/2023/08/CRIMINAL-INDICTMENT-Trump-Fulton-County-GA.pdf', type: 'Court Filing' },
 { title: 'Trump-Raffensperger Phone Call Recording and Transcript', url: 'https://www.washingtonpost.com/politics/trump-raffensperger-call-transcript-georgia-vote/2021/01/03/2768e0cc-4ddd-11eb-83e3-322644d82356_story.html', type: 'Primary Document' },
 { title: 'Senate Judiciary Committee: Subverting Justice - Report on DOJ Pressure', url: 'https://www.judiciary.senate.gov/imo/media/doc/Interim%20Staff%20Report%20FINAL.pdf', type: 'Government Report' },
 { title: 'Eastman Memos on Pence Authority (leaked)', url: 'https://www.cnn.com/2021/09/21/politics/read-eastman-memo/index.html', type: 'Primary Document' },
 { title: 'Brennan Center for Justice: January 6 Legal Tracker', url: 'https://www.brennancenter.org/', type: 'Legal Analysis' },
 { title: 'NPR: Timeline of the January 6 Capitol Attack', url: 'https://www.npr.org/2022/01/05/1070199411/a-timeline-of-how-the-jan-6-attack-unfolded-including-who-said-what-and-when', type: 'Timeline' },
 { title: 'Lawfare: Legal Analysis of Election Overturn Efforts', url: 'https://www.lawfaremedia.org/', type: 'Legal Analysis' }
 ],
 affiliations: [
 { id: 'donald-trump', name: 'Donald Trump', type: 'individual', relationship: 'Orchestrated the entire conspiracy. Pressured state officials, DOJ, VP Pence. Incited January 6 mob. Federally indicted on 4 counts (case dropped). Georgia RICO defendant.', href: '/entities/individuals/donald-trump' },
 { id: 'john-eastman', name: 'John Eastman', type: 'individual', relationship: 'Authored memos claiming VP could reject electoral votes. Key architect of constitutional subversion strategy. Disbarred in California 2024. Georgia RICO defendant.', href: '/entities/individuals/john-eastman' },
 { id: 'rudy-giuliani', name: 'Rudy Giuliani', type: 'individual', relationship: 'Organized fake elector scheme across 7 states. Publicly promoted false election fraud claims. Disbarred. $148M defamation judgment. Georgia RICO defendant.', href: '/entities/individuals/rudy-giuliani' },
 { id: 'jeffrey-clark', name: 'Jeffrey Clark', type: 'individual', relationship: 'DOJ official who drafted fraudulent letter to Georgia claiming DOJ found fraud. Trump attempted to install him as Acting AG. Georgia RICO defendant.', href: '/entities/individuals/jeffrey-clark' },
 { id: 'mark-meadows', name: 'Mark Meadows', type: 'individual', relationship: 'White House Chief of Staff who coordinated overturn efforts. Texted with state officials pushing fraud claims. Georgia RICO defendant.', href: '/entities/individuals/mark-meadows' },
 { id: 'sidney-powell', name: 'Sidney Powell', type: 'individual', relationship: 'Attorney who promoted voting machine conspiracy theories. Pled guilty in Georgia RICO case. Cooperating witness.', href: '/entities/individuals/sidney-powell' },
 { id: 'kenneth-chesebro', name: 'Kenneth Chesebro', type: 'individual', relationship: 'Architect of the fake electors legal strategy. Authored memos detailing scheme. Pled guilty in Georgia RICO case.' },
 { id: 'mike-pence', name: 'Mike Pence', type: 'individual', relationship: 'Vice President who refused to obstruct certification despite extreme pressure. Came within 40 feet of rioters at the Capitol.', href: '/entities/individuals/mike-pence' },
 { id: 'brad-raffensperger', name: 'Brad Raffensperger', type: 'individual', relationship: 'Georgia Secretary of State who refused Trump\'s demand to "find 11,780 votes." Recorded the call and made it public.' },
 { id: 'stewart-rhodes', name: 'Stewart Rhodes', type: 'individual', relationship: 'Oath Keepers leader convicted of seditious conspiracy. Sentenced to 18 years, longest January 6 sentence.' }
 ],
   eventOriginDate: '2020-11-03',
   lastActivityDate: '2025-07-15',
   pageUpdatedDate: '2025-07-15',
   timeline: [
     { date: '2020-11-03', event: 'Election Day. Biden defeats Trump 306-232 in Electoral College and by 7+ million popular votes', type: 'critical' },
     { date: '2020-11-07', event: 'Major networks call race for Biden. Trump refuses to concede and tweets "I WON THIS ELECTION, BY A LOT!"' },
     { date: '2020-11-09', event: 'Trump fires Defense Secretary Mark Esper, installs loyalists at Pentagon in first sign of overturn planning' },
     { date: '2020-11-14', event: 'Fake electors scheme begins. Chesebro memo outlines plan to create alternate electoral slates in 7 states', type: 'critical' },
     { date: '2020-12-01', event: 'AG William Barr tells AP there is "no evidence of fraud that would change the election outcome." Trump is furious' },
     { date: '2020-12-14', event: 'Electoral College votes. Biden wins 306-232. Fake electors in 7 states sign fraudulent certificates the same day', type: 'critical' },
     { date: '2020-12-18', event: 'White House meeting where Sidney Powell, Michael Flynn, and others propose seizing voting machines and appointing Powell as special counsel' },
     { date: '2020-12-27', event: 'Trump calls Acting AG Rosen demanding DOJ "just say the election was corrupt and leave the rest to me and Republican congressmen"', type: 'critical' },
     { date: '2021-01-02', event: 'Trump calls Georgia Secretary of State Raffensperger demanding he "find 11,780 votes." Call is recorded', type: 'critical' },
     { date: '2021-01-03', event: 'Showdown in Oval Office: Trump nearly installs Jeffrey Clark as AG. Senior DOJ officials threaten mass resignation. Trump backs down' },
     { date: '2021-01-05', event: 'Trump speaks to Pence, pressuring him to reject electoral votes. Eastman presents plan at rally near White House' },
     { date: '2021-01-06', event: 'Trump rally at Ellipse. Mob storms Capitol. Congress evacuated. 5 die in connection with attack. Trump watches on TV for 187 minutes. Pence comes within 40 feet of rioters', type: 'critical' },
     { date: '2021-01-13', event: 'House impeaches Trump for "incitement of insurrection" (232-197). Ten Republicans vote yes' },
     { date: '2021-02-13', event: 'Senate acquits Trump 57-43 (short of 2/3 needed). Senate minority leader McConnell calls Trump "practically and morally responsible" but votes to acquit' },
     { date: '2021-06-30', event: 'House Select Committee created to investigate January 6; subpoenas hundreds of witnesses' },
     { date: '2022-06-09', event: 'First public January 6 Committee hearing. 20 million+ viewers watch testimony from witnesses inside the White House' },
     { date: '2022-12-19', event: 'Select Committee refers Trump to DOJ for criminal prosecution on at least 4 charges including insurrection' },
     { date: '2023-08-01', event: 'Special Counsel Jack Smith indicts Trump on 4 federal counts: conspiracy to defraud the US, obstruction, conspiracy against rights', type: 'critical' },
     { date: '2023-08-14', event: 'Fulton County DA Fani Willis indicts Trump and 18 co-conspirators under Georgia RICO statute', type: 'critical' },
     { date: '2023-10-19', event: 'Sidney Powell pleads guilty in Georgia RICO case. Cooperating witness' },
     { date: '2023-10-20', event: 'Kenneth Chesebro pleads guilty in Georgia RICO case' },
     { date: '2024-03-04', event: 'Supreme Court rules on Trump immunity claim, delaying federal trial indefinitely' },
     { date: '2024-07-01', event: 'Supreme Court grants broad presidential immunity in Trump v. United States, effectively shielding many alleged acts', type: 'critical' },
     { date: '2024-11-05', event: 'Trump wins 2024 presidential election. Federal case dropped per DOJ policy against prosecuting a sitting president', type: 'critical' },
     { date: '2024-11', event: 'John Eastman disbarred in California for his role in the election overturn scheme' },
     { date: '2025', event: 'Georgia RICO case remains pending but proceedings severely slowed. Over 1,200 January 6 defendants convicted of federal crimes' }
   ],

 defendants: [

   { name: 'Donald Trump', role: 'Orchestrated multi-pronged effort to overturn 2020 election results including pressuring state officials and VP Pence', status: 'indicted', notes: 'Indicted by Special Counsel Jack Smith on 4 federal charges. Case complicated by immunity ruling.' },

   { name: 'Mark Meadows', role: 'White House Chief of Staff who coordinated efforts to overturn election results', status: 'indicted', notes: 'Indicted in Georgia RICO case. Attempted to remove case to federal court.' },

   { name: 'Rudy Giuliani', role: 'Led legal team spreading false election fraud claims; pressured state legislators', status: 'indicted', notes: 'Indicted in Georgia and Arizona. Disbarred in NY and DC. Filed for bankruptcy.' },

   { name: 'John Eastman', role: 'Authored legal memo arguing VP Pence could reject electoral votes', status: 'indicted', notes: 'Indicted in Georgia. Disbarred in California in 2024.' },

   { name: 'Jeffrey Clark', role: 'DOJ official who attempted to use DOJ to pressure Georgia to overturn results', status: 'indicted', notes: 'Indicted in Georgia RICO case. Faced DOJ disciplinary proceedings.' }

 ],
 },
  '2016-election': {
 title: '2016 Election Interference',
 subtitle: 'Russian military intelligence hacking, a $1.25 million per month social media warfare operation, and over 140 documented Trump campaign contacts with Russian operatives',
 severity: 'critical',
 category: 'Election Security',
 date: 'March 12, 2025',
 lastUpdated: 'December 12, 2025',
 summary: 'The Russian government conducted a sweeping, systematic interference campaign targeting the 2016 U.S. presidential election. GRU military intelligence units hacked Democratic organizations and weaponized stolen documents through WikiLeaks. The Internet Research Agency spent $1.25 million per month on social media manipulation reaching 126 million Americans on Facebook alone. The Mueller investigation documented over 140 contacts between the Trump campaign and Russian operatives, resulting in 34 indictments, 7 guilty pleas, and 199 criminal charges. The bipartisan Senate Intelligence Committee confirmed Russian interference in a five-volume, 1,313-page report.',
 content: [
   'GRU HACKING OPERATIONS: Russian military intelligence Units 26165 and 74455 conducted cyber operations against the Democratic National Committee, the Democratic Congressional Campaign Committee, and Hillary Clinton campaign chairman John Podesta beginning in March 2016. Unit 26165 (Fancy Bear/APT28) used spearphishing emails to compromise accounts and exfiltrate tens of thousands of documents. Unit 74455 handled the weaponization and release of stolen materials through the fictitious personas DCLeaks and Guccifer 2.0, and coordinated the timing of WikiLeaks releases for maximum political damage.',
   'INTERNET RESEARCH AGENCY: The IRA, based in St. Petersburg, Russia, employed over 80 people working 12-hour shifts in what they called the "American Department." Operating on a budget of approximately $1.25 million per month by September 2016, they created thousands of fake social media accounts impersonating American citizens and organizations. Their content reached an estimated 126 million people on Facebook, 20 million on Instagram, and 1.4 million on Twitter. They organized real-world rallies in U.S. cities on both sides of the political spectrum, with unwitting Americans attending events organized from Russia.',
   'WIKILEAKS WEAPONIZATION: WikiLeaks published 20,000 DNC emails on July 22, 2016, three days before the Democratic National Convention, maximizing disruption. A second release of Podesta emails began October 7, 2016, within one hour of the Access Hollywood tape release. Roger Stone had advance knowledge of WikiLeaks releases and communicated with WikiLeaks through intermediaries. Julian Assange coordinated timing with Russian intelligence cutouts to inflict maximum political damage on the Clinton campaign.',
   'TRUMP TOWER MEETING: On June 9, 2016, Donald Trump Jr., Jared Kushner, and campaign chairman Paul Manafort met with Russian lawyer Natalia Veselnitskaya and four others at Trump Tower after being promised "dirt" on Hillary Clinton described as "part of Russia and its government\'s support for Mr. Trump." Trump Jr. responded "if it\'s what you say I love it especially later in the summer." The meeting was concealed until the New York Times discovered it in July 2017, and misleading statements about its purpose were drafted aboard Air Force One.',
   'MANAFORT-KILIMNIK CONNECTION: Campaign chairman Paul Manafort shared internal polling data and campaign strategy with Konstantin Kilimnik, whom the Senate Intelligence Committee identified as a Russian intelligence officer. Manafort met with Kilimnik at least three times during the campaign, including at the Grand Havana Room in New York on August 2, 2016, where he shared detailed polling data for key battleground states. The Senate report called this "a grave counterintelligence threat."',
   'FLYNN-KISLYAK COMMUNICATIONS: Incoming National Security Advisor Michael Flynn spoke with Russian Ambassador Sergey Kislyak multiple times in December 2016, discussing the lifting of Obama-era sanctions. Flynn later pleaded guilty to lying to the FBI about these conversations. The conversations occurred as Russia was deciding how to respond to Obama\'s expulsion of 35 Russian diplomats for election interference. Putin decided not to retaliate, and Trump tweeted praise for Putin\'s restraint.',
   'ROGER STONE AND WIKILEAKS: Political operative Roger Stone served as an intermediary between the Trump campaign and WikiLeaks. Stone communicated with Guccifer 2.0 (a GRU persona) and told senior Trump campaign officials he had advance knowledge of WikiLeaks releases. He was convicted of lying to Congress, witness tampering, and obstruction. Trump commuted his sentence and later pardoned him.',
   'MUELLER INVESTIGATION RESULTS: Special Counsel Robert Mueller\'s 22-month investigation resulted in 34 indictments (including 26 Russian nationals), 7 guilty pleas (Flynn, Manafort, Gates, Cohen, Papadopoulos, Pinedo, van der Zwaan), and 199 criminal charges. The investigation also generated 14 referrals to other prosecutors. Despite documenting over 140 contacts between the Trump campaign and Russian operatives, Mueller did not establish a criminal conspiracy, though the report explicitly stated it "does not exonerate" Trump on obstruction.',
   'SENATE INTELLIGENCE COMMITTEE: The bipartisan Senate Intelligence Committee released a five-volume, 1,313-page report confirming Russian interference and detailing the Trump campaign\'s receptivity to it. Volume 5 identified Manafort as a "grave counterintelligence threat" and confirmed Kilimnik\'s intelligence ties. The committee found that Russia\'s interference was "the most serious challenge to the integrity of our election process" and warned of ongoing threats.',
   'OBSTRUCTION PATTERN: The Mueller Report documented at least 10 episodes of potential obstruction by Trump, including firing FBI Director James Comey, attempting to fire Mueller, ordering White House Counsel Don McGahn to create a false record about the firing attempt, dangling pardons for witnesses, and publicly attacking cooperating witnesses while praising those who refused to cooperate. Mueller declined to make a prosecutorial judgment due to the OLC opinion against indicting a sitting president.'
 ],
 tags: ['Election Security', 'GRU', 'Russia', 'Mueller Investigation', 'Internet Research Agency', 'WikiLeaks', 'Trump Tower Meeting', 'Foreign Interference', 'Manafort', 'Flynn'],
 sources: [
   { title: 'Mueller Report: Report on the Investigation into Russian Interference in the 2016 Presidential Election', url: 'https://www.justice.gov/archives/sco/file/1373816/dl', type: 'Government Report' },
   { title: 'Senate Intelligence Committee: Russian Active Measures (5 Volumes)', url: 'https://www.intelligence.senate.gov/publications/report-select-committee-intelligence-united-states-senate-russian-active-measures', type: 'Government Report' },
   { title: 'DOJ: Indictment of 12 Russian GRU Officers (Case 1:18-cr-00215)', url: 'https://www.justice.gov/file/1080281/dl', type: 'Court Document' },
   { title: 'DOJ: Indictment of Internet Research Agency and 13 Russian Nationals', url: 'https://www.justice.gov/file/1035477/dl', type: 'Court Document' },
   { title: 'ODNI: Intelligence Community Assessment on Russian Activities (ICA 2017-01D)', url: 'https://www.dni.gov/files/documents/ICA_2017_01.pdf', type: 'Intelligence Assessment' },
   { title: 'Senate Judiciary Committee: Trump Tower Meeting Transcripts', url: 'https://www.judiciary.senate.gov/press/rep/releases/chairman-grassley-releases-trump-tower-meeting-transcripts', type: 'Congressional Record' },
   { title: 'New Knowledge: Disinformation Report to Senate Intelligence Committee', url: 'https://www.intelligence.senate.gov/sites/default/files/documents/Report_Volume2.pdf', type: 'Research Report' },
   { title: 'Roger Stone Indictment and Trial Record', url: 'https://www.justice.gov/file/1124706/dl', type: 'Court Document' }
 ],
 affiliations: [
   { id: '1', name: 'Donald Trump', type: 'individual', relationship: 'Over 140 campaign-Russia contacts documented; 10 obstruction episodes', href: '/entities/individuals/donald-trump' },
   { id: '2', name: 'Vladimir Putin', type: 'individual', relationship: 'Ordered interference campaign per IC assessment', href: '/entities/individuals/vladimir-putin' },
   { id: '3', name: 'Paul Manafort', type: 'individual', relationship: 'Campaign chair; shared polling data with Russian intelligence officer', href: '/entities/individuals/paul-manafort' },
   { id: '4', name: 'Michael Flynn', type: 'individual', relationship: 'NSA; lied about Kislyak sanctions discussions; pled guilty', href: '/entities/individuals/michael-flynn' },
   { id: '5', name: 'Roger Stone', type: 'individual', relationship: 'WikiLeaks intermediary; convicted of obstruction and witness tampering', href: '/entities/individuals/roger-stone' },
   { id: '6', name: 'Jared Kushner', type: 'individual', relationship: 'Attended Trump Tower meeting; back-channel communications', href: '/entities/individuals/jared-kushner' },
   { id: '7', name: 'Internet Research Agency', type: 'corporation', relationship: '$1.25M/month social media warfare operation reaching 126M Americans', href: '/entities/corporations/internet-research-agency' },
   { id: '8', name: 'GRU (Russian Military Intelligence)', type: 'organization', relationship: 'Units 26165 and 74455 conducted hacking and weaponized releases', href: '/entities/organizations/gru' },
   { id: '9', name: 'WikiLeaks', type: 'organization', relationship: 'Published stolen DNC/Podesta emails at strategically timed intervals', href: '/entities/organizations/wikileaks' },
   { id: '10', name: 'FBI', type: 'agency', relationship: 'Crossfire Hurricane investigation; Comey fired for Russia probe', href: '/entities/agencies/fbi' }
 ],
   eventOriginDate: '2015-07-01',
   lastActivityDate: '2025-12-12',
   pageUpdatedDate: '2026-06-01',
   timeline: [
     { date: '2015-07', event: 'FBI detects Russian intrusion into DNC networks; alerts DNC IT staff who fail to escalate the warning', type: 'critical' },
     { date: '2016-03', event: 'GRU Unit 26165 begins spearphishing campaign against Clinton campaign chairman John Podesta and DNC officials', type: 'critical' },
     { date: '2016-04', event: 'GRU exfiltrates tens of thousands of emails and documents from DNC and DCCC servers', type: 'critical' },
     { date: '2016-06-09', event: 'Trump Tower meeting: Don Jr., Kushner, and Manafort meet Russian nationals after promise of Clinton "dirt" from "Russia and its government\'s support"', type: 'critical' },
     { date: '2016-06-14', event: 'CrowdStrike publicly attributes DNC hack to Russian intelligence; DNC breach becomes public', type: 'political' },
     { date: '2016-06-15', event: 'Guccifer 2.0 persona (GRU Unit 74455) begins publishing stolen DNC documents', type: 'critical' },
     { date: '2016-07-22', event: 'WikiLeaks publishes 20,000 stolen DNC emails three days before Democratic National Convention', type: 'critical' },
     { date: '2016-07-27', event: 'Trump publicly calls on Russia: "Russia, if you\'re listening, I hope you\'re able to find the 30,000 emails"; GRU attempts to hack Clinton servers that same day', type: 'critical' },
     { date: '2016-08-02', event: 'Manafort meets Kilimnik at Grand Havana Room, shares internal polling data for battleground states', type: 'critical' },
     { date: '2016-10-07', event: 'WikiLeaks begins publishing Podesta emails within one hour of Access Hollywood tape release', type: 'critical' },
     { date: '2016-12-29', event: 'Flynn speaks with Kislyak about sanctions; Putin declines retaliation; Trump praises Putin\'s restraint', type: 'political' },
     { date: '2017-01-06', event: 'Intelligence Community Assessment: Putin ordered interference campaign to help Trump and hurt Clinton', type: 'critical' },
     { date: '2017-02-13', event: 'Flynn resigns as National Security Advisor after lying about Kislyak conversations', type: 'political' },
     { date: '2017-05-09', event: 'Trump fires FBI Director James Comey; tells Russian officials it relieved "great pressure" from Russia investigation', type: 'critical' },
     { date: '2017-05-17', event: 'Deputy AG Rod Rosenstein appoints Robert Mueller as Special Counsel', type: 'legal' },
     { date: '2018-02-16', event: 'Mueller indicts Internet Research Agency and 13 Russian nationals for conspiracy to defraud the United States', type: 'legal' },
     { date: '2018-07-13', event: 'Mueller indicts 12 GRU officers (Units 26165 and 74455) for hacking DNC, DCCC, and Clinton campaign', type: 'legal' },
     { date: '2019-01-25', event: 'Roger Stone arrested on 7 counts including obstruction, witness tampering, and false statements', type: 'legal' },
     { date: '2019-03-22', event: 'Mueller delivers final report to AG Barr: 448 pages documenting interference and obstruction', type: 'legal' },
     { date: '2019-04-18', event: 'Redacted Mueller Report released publicly; documents 10 obstruction episodes, states it "does not exonerate" Trump', type: 'legal' },
     { date: '2019-11-15', event: 'Roger Stone convicted on all 7 counts by a federal jury in Washington, D.C.', type: 'legal' },
     { date: '2020-02-20', event: 'Stone sentenced to 40 months; Trump commutes sentence in July 2020, pardons in December 2020', type: 'legal' },
     { date: '2020-08', event: 'Senate Intelligence Committee releases Volume 5: "Russian Active Measures Campaigns and Interference in the 2016 U.S. Election"', type: 'political' }
   ],

 defendants: [

   { name: 'Russian Internet Research Agency', role: 'Conducted social media disinformation campaign to influence 2016 US election', status: 'indicted', notes: 'Indicted by Mueller; charges later dropped as unenforceable against foreign entities' },

   { name: 'GRU Officers (12)', role: 'Russian military intelligence officers who hacked DNC and Clinton campaign', status: 'indicted', notes: '12 GRU officers indicted by Mueller in July 2018; none extradited' }

 ],
 },
 'pandemic-profiteering-covid-corruption': {
  title: 'COVID-19 Pandemic Profiteering and Government Corruption',
  subtitle: 'How corporations, politicians, and fraudsters exploited the deadliest pandemic in a century  -  from $200 billion in PPP fraud to pharmaceutical price-gouging to congressional insider trading',
  severity: 'critical' as const,
  category: 'Corruption',
  date: '2024-11-01',
  lastUpdated: '2025-03-10',
  summary: 'The COVID-19 pandemic, which killed over 1.1 million Americans, became the largest opportunity for fraud and profiteering in U.S. history. An estimated $200 billion of the $800 billion Paycheck Protection Program was fraudulently obtained. Members of Congress traded stocks based on non-public briefings about the pandemic\'s severity. Pharmaceutical companies received $30 billion in taxpayer funding for vaccine development then charged $110-$130 per dose and generated $100+ billion in revenue. PPE and testing supply chains were corrupted by political operatives channeling contracts to unqualified companies. The pandemic inspector general position was kept vacant for 14 months as the first $3 trillion in relief was disbursed.',
  content: [
   'The Paycheck Protection Program (PPP), designed to help small businesses retain employees, became the largest fraud event in U.S. history. The SBA disbursed $800 billion through hastily designed programs with minimal verification. The Secret Service, FBI, and DOJ have identified over $200 billion in fraudulent PPP loans. Fraudsters created fictitious businesses, fabricated payroll records, and submitted thousands of fraudulent applications  -  often successfully. Banks that processed the loans earned processing fees regardless of fraud, creating a perverse incentive to approve applications without scrutiny.',
   'Congressional insider trading during the pandemic revealed the moral bankruptcy at the highest levels. On January 24, 2020, the Senate Intelligence Committee received a classified briefing on the pandemic\'s potential severity. In the weeks that followed, Senator Richard Burr sold $1.7 million in stocks before the market crashed. Senator Kelly Loeffler sold millions in holdings. Both publicly downplayed the threat while privately protecting their portfolios. The DOJ investigated but did not bring charges against any senator. The STOCK Act, supposedly banning congressional insider trading, proved unenforceable.',
   'Pharmaceutical profiteering turned taxpayer-funded research into the largest windfall in pharmaceutical history. The U.S. government provided $30 billion in funding for COVID vaccine development through Operation Warp Speed. Moderna received $2.5 billion in direct funding and its executives sold $1 billion in stock during the pandemic. Pfizer, while not receiving direct development funding, benefited from a $1.95 billion advance purchase commitment that guaranteed a market. When these companies set prices at $110-$130 per dose (retail)  -  far exceeding manufacturing costs of $2-$5 per dose  -  the government had no price controls despite having funded the research.',
   'PPE and medical supply procurement was corrupted by political interference and cronyism. The Trump administration\'s Project Airbridge prioritized politically connected companies over established medical supply chains. Contracts worth hundreds of millions were awarded to companies with no experience in medical supplies. A company run by a former White House aide received a $3.5 million contract for ventilators despite having no medical device experience. States were forced to compete against each other and the federal government on the open market, driving up prices. Governor Cuomo described it as "being on eBay with 50 other states."',
   'The pandemic Inspectors General  -  the primary oversight mechanism  -  were systematically neutralized. Trump fired the intelligence community IG who forwarded the whistleblower complaint, removed the SIGPR chair overseeing pandemic spending within days of his appointment, and the Pandemic Response Accountability Committee\'s special inspector general position was left vacant for 14 months as the first $3+ trillion flowed out. When oversight finally ramped up, the scale of fraud was so massive that prosecutors could only target the most egregious cases. As of 2025, DOJ has charged approximately 3,500 defendants but recovered only a fraction of the $200 billion estimated fraud.'
  ],
  tags: ['COVID-19', 'pandemic', 'PPP fraud', 'insider trading', 'pharmaceutical profiteering', 'Moderna', 'Pfizer', 'PPE', 'inspector general', 'corruption'],
  sources: [
   { title: 'Pandemic Response Accountability Committee: Top Challenges Reports', url: 'https://www.pandemicoversight.gov/', type: 'Government Report' },
   { title: 'SBA OIG: Inspection of SBA\'s Implementation of PPP', url: 'https://www.sba.gov/document/report-21-02-inspection-sbas-implementation-paycheck-protection-program/', type: 'Government Report' },
   { title: 'ProPublica: Tracking PPP and Pandemic Spending', url: 'https://projects.propublica.org/coronavirus/bailouts/', type: 'Investigation' }
  ],
  affiliations: [
   { id: '1', name: 'SBA', type: 'agency', relationship: 'Disbursed $800B in PPP with inadequate verification; estimated $200B in fraud; processing speed prioritized over fraud prevention' },
   { id: '2', name: 'DOJ', type: 'agency', relationship: 'Charged 3,500+ PPP fraud defendants but recovered fraction of losses; declined to prosecute congressional insider trading; pandemic fraud task force overwhelmed by scale', href: '/entities/agencies/doj' }
  ],
  eventOriginDate: '2020-01-01',
  lastActivityDate: '2025-03-10',
  pageUpdatedDate: '2026-03-18',
      timeline: [
     { date: '2020', event: 'On January 24, 2020, the Senate Intelligence Committee received a classified briefing on the pandemic\'s potential severity.', type: 'political' },
     { date: '2020-01-24', event: 'On January 24, 2020, the Senate Intelligence Committee received a classified briefing on the pandemic\'s potential severity.', type: 'political' },
     { date: '2025', event: 'As of 2025, DOJ has charged approximately 3,500 defendants but recovered only a fraction of the $200 billion estimated fraud.', type: 'financial' }
     ],

  defendants: [

    { name: 'Various PPP Loan Fraudsters', role: 'Fraudulently obtained Paycheck Protection Program loans totaling billions', status: 'convicted', notes: 'DOJ charged 3,000+ defendants for PPP fraud totaling $1.4B+ as of 2024' },

    { name: 'Price Gougers', role: 'Individuals and companies that illegally inflated prices on PPE, sanitizer, and medical equipment', status: 'charged', notes: 'FTC and state AGs brought hundreds of enforcement actions' }

  ],
 },
  '2008-financial-crisis': {
 title: '2008 Financial Crisis',
 subtitle: 'Wall Street Burned the Economy, Got Bailed Out, and Nobody Went to Prison',
 severity: 'critical',
 category: 'Financial Crime',
 date: 'September 15, 2008',
 lastUpdated: '2026-03-28',
 summary: 'The 2008 financial crisis was the most devastating economic catastrophe since the Great Depression, triggered by Wall Street\'s deliberate and systematic fraud in the mortgage-backed securities market. Major banks (including Goldman Sachs, JPMorgan Chase, Lehman Brothers, Bear Stearns, Citigroup, and Countrywide Financial) knowingly packaged toxic subprime mortgages into complex financial instruments (CDOs and MBS), secured fraudulent AAA ratings from captured rating agencies, sold them to pension funds and municipalities, and then secretly bet against the same products using credit default swaps. When the house of cards collapsed, 8.7 million Americans lost their jobs, 10 million families lost their homes to foreclosure, household wealth declined by $13 trillion, and the global economy plunged into recession. The U.S. government responded with a $700 billion taxpayer-funded bailout (TARP) plus trillions in Federal Reserve emergency lending, rescuing the very institutions that caused the crisis. Despite the Financial Crisis Inquiry Commission concluding the crisis was "avoidable" and driven by"widespread failures in financial regulation,""dramatic breakdowns in corporate governance,"and"an explosive mix of excessive borrowing and risk,"not a single top Wall Street executive was criminally prosecuted. Instead, they received billions in bonuses. The banks emerged larger, more powerful, and more profitable than before, while working-class Americans (disproportionately Black and Latino homeowners targeted by predatory lending) were left to rebuild from nothing.',
 content: [
   'The Department of Justice under Attorney General Eric Holder adopted a de facto policy of"too big to jail,"declining to prosecute any top Wall Street executives despite overwhelming evidence of fraud documented in the FCIC report and internal bank communications.',
   'Hank Paulson (former Goldman Sachs CEO) served as Treasury Secretary during the bailout, directing billions to his former firm. Goldman received $12.9B through the AIG backdoor bailout, paid at 100 cents on the dollar while ordinary creditors received fractions.',
   'The Federal Reserve conducted trillions of dollars in emergency lending through secret facilities, refusing to disclose the recipients until forced by court order and legislation years later. Bloomberg News revealed $7.77 trillion in undisclosed Fed commitments.',
   'Rating agencies (S&P, Moody\'s, Fitch) gave AAA ratings to securities they privately described as "ridiculous" and "monstrous" because they were paid by the banks issuing the securities, a structural conflict of interest that was never criminally prosecuted.',
   'Goldman Sachs\'s ABACUS deal, designed with hedge fund manager John Paulson (no relation to Hank) to fail, was marketed to investors as a legitimate product. Goldman secretly shorted the deal. Only one junior trader was charged; no Goldman executive faced prosecution.',
   'The government\'s Home Affordable Modification Program (HAMP), ostensibly designed to help homeowners, was described by Tim Geithner as a way to"foam the runway"for banks by spreading out foreclosures rather than preventing them.',
   'Banks systematically engaged in"robo-signing"- executing fraudulent foreclosure documents without review, to accelerate the seizure of homes. When exposed, the government negotiated the $25B National Mortgage Settlement that allowed banks to credit phantom "relief" as compliance.',
   'Eric Holder returned to his former law firm Covington & Burling (which represents most major Wall Street banks) after leaving the DOJ, completing the revolving door that ensured no prosecutions.',
   'The Dodd-Frank Act was systematically weakened through industry lobbying before passage and regulatory capture afterward. By 2018, key provisions were rolled back entirely, including Volcker Rule restrictions on the very banks bailed out in 2008.',
   'Internal bank emails and documents revealed in civil litigation showed executives knew the products were"shit"(Goldman),"nuclear holocaust"(Citigroup), and"total crap"(S&P), yet no criminal charges were brought based on this evidence.'
 ],
 tags: ['financial-crime', 'fraud'],
 sources: [
   { title: 'Financial Crisis Inquiry Commission Report', url: 'https://www.govinfo.gov/content/pkg/GPO-FCIC/pdf/GPO-FCIC.pdf', type: 'Article' },
   { title: 'Senate Permanent Subcommittee on Investigations: Wall Street and the Financial Crisis', url: 'https://www.hsgac.senate.gov/subcommittees/investigations/media/senate-investigations-subcommittee-releases-levin-coburn-report-on-the-financial-crisis', type: 'Article' },
   { title: 'ProPublica: Bailout Tracker, Every Recipient of TARP Funds', url: 'https://projects.propublica.org/bailout/', type: 'Article' },
   { title: 'Bloomberg: The Fed\'s Secret Liquidity Lifelines', url: 'https://www.bloomberg.com/news/articles/2011-11-28/secret-fed-loans-undisclosed-to-congress-gave-banks-13-billion-in-income', type: 'Article' },
   { title: 'Matt Taibbi,"The Great American Bubble Machine"(Goldman Sachs)', url: 'https://www.rollingstone.com/politics/politics-news/the-great-american-bubble-machine-195229/', type: 'Article' },
   { title: 'New York Times: A Revolving Door in Washington, Eric Holder Returns to Corporate Law', url: 'https://www.nytimes.com/2015/07/07/us/eric-holder-returns-to-covington-burling-law-firm.html', type: 'Article' },
   { title: 'SEC v. Goldman Sachs (ABACUS CDO)', url: 'https://www.sec.gov/litigation/litreleases/2010/lr21592.htm', type: 'Article' },
   { title: 'Inside Job (Documentary): Academy Award-Winning Film on the Financial Crisis', url: 'https://www.imdb.com/title/tt1645089/', type: 'Article' },
   { title: 'Michael Lewis,"The Big Short: Inside the Doomsday Machine"', url: 'https://wwnorton.com/books/the-big-short/', type: 'Article' },
   { title: 'Center for Responsible Lending: Lost Ground, Disparities in Subprime Lending', url: 'https://www.responsiblelending.org/mortgage-lending/research-analysis/lost-ground-2011.html', type: 'Article' },
   { title: 'PBS Frontline: The Untouchables, Why Wall Street Executives Were Never Prosecuted', url: 'https://www.pbs.org/wgbh/frontline/documentary/untouchables/', type: 'Article' }
 ],
 affiliations: [
   { id: 'hank-paulson', name: 'Hank Paulson', type: 'individual', relationship: 'U.S. Treasury Secretary (2006-2009). Former Goldman Sachs CEO. Designed and implemented the $700B TARP bailout that rescued his former firm and Wall Street peers. His $700M Goldman holdings were liquidated tax-free upon entering government.', href: '/entities/individuals/hank-paulson' },
   { id: 'lloyd-blankfein', name: 'Lloyd Blankfein', type: 'individual', relationship: 'Goldman Sachs CEO (2006-2018). Oversaw Goldman\'s strategy of packaging and selling toxic CDOs to clients while simultaneously shorting them. Famously claimed Goldman was doing "God\'s work."Goldman paid $5.06B fine, a fraction of profits.', href: '/entities/individuals/lloyd-blankfein' },
   { id: 'jamie-dimon', name: 'Jamie Dimon', type: 'individual', relationship: 'JPMorgan Chase CEO (2005-present). JPMorgan sold billions in toxic mortgage securities while internal reports warned they were junk. Received $13B bailout. Paid $13B settlement in 2013; no admission of wrongdoing.', href: '/entities/individuals/jamie-dimon' },
   { id: 'dick-fuld', name: 'Dick Fuld', type: 'individual', relationship: 'Lehman Brothers CEO. Oversaw Lehman\'s massive leveraging into subprime mortgages and use of Repo 105 accounting tricks to hide $50B in debt from investors. When Lehman collapsed on September 15, 2008, it triggered global panic.', href: '/entities/individuals/dick-fuld' },
   { id: 'angelo-mozilo', name: 'Angelo Mozilo', type: 'individual', relationship: 'Countrywide Financial CEO. Pioneered predatory subprime lending, specifically targeting Black and Latino borrowers with exploitative adjustable-rate mortgages. While publicly promoting loans, he privately called them "toxic" and "poison" in emails.', href: '/entities/individuals/angelo-mozilo' },
   { id: 'ben-bernanke', name: 'Ben Bernanke', type: 'individual', relationship: 'Federal Reserve Chairman (2006-2014). Failed to regulate the shadow banking system and dismissed warnings about the housing bubble. Later orchestrated massive emergency lending (over $16T) to rescue financial institutions.', href: '/entities/individuals/ben-bernanke' },
   { id: 'alan-greenspan', name: 'Alan Greenspan', type: 'individual', relationship: 'Federal Reserve Chairman (1987-2006). Ardent opponent of financial regulation who championed deregulation of derivatives and blocked efforts to regulate credit default swaps. Later admitted his ideology had a"flaw."', href: '/entities/individuals/alan-greenspan' },
   { id: 'janet-yellen', name: 'Janet Yellen', type: 'individual', relationship: 'President of the San Francisco Fed (2004-2010). Oversaw the district that included Countrywide Financial and Washington Mutual (two of the worst predatory lenders) but took no meaningful regulatory action.', href: '/entities/individuals/janet-yellen' },
   { id: 'tim-geithner', name: 'Tim Geithner', type: 'individual', relationship: 'President of the New York Fed (2003-2009), then Treasury Secretary (2009-2013). Oversaw the bailouts and opposed holding executives accountable. His"foam the runway"approach prioritized bank survival over homeowner relief.', href: '/entities/individuals/tim-geithner' },
   { id: 'david-solomon', name: 'David Solomon', type: 'individual', relationship: 'Goldman Sachs executive during the crisis era, later CEO (2018-present). Goldman\'s ABACUS deal (packaging securities designed to fail, selling them to clients, and betting against them) epitomized Wall Street\'s fraud.', href: '/entities/individuals/david-solomon' },
   { id: 'brian-moynihan', name: 'Brian Moynihan', type: 'individual', relationship: 'Bank of America executive. BofA acquired Countrywide Financial in 2008, inheriting its predatory lending portfolio. BofA paid $16.65B in the largest settlement in American corporate history, no executives jailed.', href: '/entities/individuals/brian-moynihan' },
   { id: 'larry-fink', name: 'Larry Fink', type: 'individual', relationship: 'BlackRock CEO. BlackRock was hired by the Federal Reserve to manage the government\'s toxic asset purchases, a massive conflict of interest as the firm profited from the crisis while managing the cleanup.', href: '/entities/individuals/larry-fink' },
   { id: 'steve-mnuchin', name: 'Steve Mnuchin', type: 'individual', relationship: 'Goldman Sachs partner who purchased IndyMac bank in 2009, renamed it OneWest, and aggressively foreclosed on thousands of homeowners (including elderly and minority borrowers) earning the nickname "Foreclosure King."', href: '/entities/individuals/steve-mnuchin' },
   { id: 'warren-buffett', name: 'Warren Buffett', type: 'individual', relationship: 'Berkshire Hathaway CEO. Invested $5B in Goldman Sachs at the height of the crisis, earning $3.7B in profits. Called derivatives"financial weapons of mass destruction"while profiting from the system that produced them.', href: '/entities/individuals/warren-buffett' },
   { id: 'barack-obama', name: 'Barack Obama', type: 'individual', relationship: '44th President. Received more Wall Street campaign donations than any previous candidate. His administration chose to bail out banks rather than homeowners, prosecuting zero top executives despite evidence of systematic fraud.', href: '/entities/individuals/barack-obama' },
   { id: 'george-w-bush', name: 'George W. Bush', type: 'individual', relationship: '43rd President. Signed the Emergency Economic Stabilization Act creating TARP. His administration\'s deregulatory policies and SEC enforcement failures enabled the fraud that caused the crisis.', href: '/entities/individuals/george-w-bush' },
   { id: 'eric-holder', name: 'Eric Holder', type: 'individual', relationship: 'Attorney General (2009-2015). Coined the doctrine that banks were"too big to jail."Former Covington & Burling partner who returned to the firm after DOJ, representing the same banks he declined to prosecute.', href: '/entities/individuals/eric-holder' }
 ],
 timeline: [
   { date: '1999', event: 'Gramm-Leach-Bliley Act repeals Glass-Steagall, eliminating the Depression-era firewall between commercial and investment banking, enabling banks to gamble with depositor funds.' },
   { date: '2000', event: 'Commodity Futures Modernization Act exempts credit default swaps and over-the-counter derivatives from regulation, creating a $60 trillion shadow market with zero oversight.' },
   { date: '2001-2004', event: 'Federal Reserve slashes interest rates to 1%, flooding the economy with cheap money. Housing prices begin an unprecedented surge as lending standards collapse.' },
   { date: '2003-2006', event: 'Peak era of predatory lending. Countrywide, Washington Mutual, and other lenders issue "NINJA loans"(No Income, No Job, No Assets) and adjustable-rate mortgages designed to default.' },
   { date: '2004', event: 'SEC relaxes net capital rules for the five largest investment banks, allowing leverage ratios to soar from 12:1 to 40:1. All five would later collapse or require rescue.' },
   { date: '2005', event: 'Federal regulators receive warnings about Countrywide\'s predatory practices. No enforcement action taken. Countrywide\'s Mozilo privately emails colleagues calling his own products"toxic."' },
   { date: '2006', event: 'Housing prices peak. Goldman Sachs begins secretly building massive short positions against the mortgage market while continuing to sell CDOs to clients.' },
   { date: 'April 2007', event: 'New Century Financial, the second-largest subprime lender, files for bankruptcy. Wall Street banks continue selling mortgage-backed securities despite knowing the underlying loans are failing.' },
   { date: 'June-August 2007', event: 'Two Bear Stearns hedge funds that invested heavily in subprime mortgages collapse, losing $1.6B. Rating agencies begin mass downgrades of mortgage securities.' },
   { date: 'March 2008', event: 'Bear Stearns collapses and is acquired by JPMorgan for $2/share (later raised to $10); a 98% loss. The Federal Reserve absorbs $30B in Bear Stearns\' toxic assets.' },
   { date: 'September 7, 2008', event: 'Federal government seizes Fannie Mae and Freddie Mac, placing them in conservatorship. Combined exposure: $5.3 trillion in mortgage guarantees.' },
   { date: 'September 15, 2008', event: 'Lehman Brothers files for bankruptcy, the largest in American history at $639B in assets. Global financial markets panic. Merrill Lynch is sold to Bank of America the same day.' },
   { date: 'September 16, 2008', event: 'AIG receives an $85B federal bailout (eventually totaling $182B). AIG had written $440B in credit default swaps insuring Wall Street\'s toxic products, including $12.9B owed to Goldman Sachs, paid at 100 cents on the dollar.' },
   { date: 'September 19, 2008', event: 'Hank Paulson and Ben Bernanke present Congress with a 3-page proposal demanding $700B with no oversight. Paulson reportedly gets on one knee before Nancy Pelosi to beg for the bailout.' },
   { date: 'October 3, 2008', event: 'Emergency Economic Stabilization Act signed, creating the $700B Troubled Asset Relief Program (TARP). Money flows to Wall Street banks, not homeowners.' },
   { date: 'October-December 2008', event: 'Citigroup receives $45B in TARP funds plus $306B in government guarantees on toxic assets. Bank of America receives $45B. Goldman Sachs and Morgan Stanley each receive $10B.' },
   { date: '2008-2012', event: '10 million American families lose their homes to foreclosure. Black and Latino families lose 53% and 66% of their wealth respectively. 8.7 million jobs are destroyed.' },
   { date: 'January 2010', event: 'Financial Crisis Inquiry Commission holds public hearings. Former Citigroup CEO Chuck Prince\'s quote becomes emblematic:"As long as the music is playing, you\'ve got to get up and dance."' },
   { date: 'July 2010', event: 'Dodd-Frank Wall Street Reform Act signed. Critics call it inadequate, it does not break up"too big to fail"banks, which emerge larger and more concentrated than before the crisis.' },
   { date: '2012-2016', event: 'Major banks pay $150B+ in combined settlements. Goldman: $5.06B. JPMorgan: $13B. Bank of America: $16.65B. Citigroup: $7B. Morgan Stanley: $3.2B. No top executives criminally charged.' },
   { date: '2013', event: 'Attorney General Eric Holder tells Congress some banks are"too big to jail"- admitting the DOJ\'s policy of protecting Wall Street executives from criminal prosecution.' }
 ],
 statutes: [
   { code: '18 U.S.C. § 1348: Securities Fraud', description: 'Wall Street banks knowingly packaged defective mortgages into securities, secured fraudulent ratings, and sold them to investors as safe investments while simultaneously betting against them.' },
   { code: '18 U.S.C. § 1341 (Mail Fraud / 18 U.S.C. § 1343) Wire Fraud', description: 'The systematic use of mail and electronic communications to execute schemes to defraud investors, including prospectuses containing material misrepresentations about the quality of mortgage-backed securities.' },
   { code: '18 U.S.C. § 1962: RICO (Racketeer Influenced and Corrupt Organizations)', description: 'The coordinated, cross-institutional pattern of fraud (involving mortgage originators, investment banks, rating agencies, and servicers) constituted an ongoing criminal enterprise.' },
   { code: '18 U.S.C. § 1014: False Statements to Financial Institutions', description: 'Mortgage originators systematically fabricated borrower income, assets, and employment on loan applications. Internal audits at multiple banks revealed fraud rates exceeding 80% in loan samples.' },
   { code: '18 U.S.C. § 1956: Money Laundering', description: 'The laundering of fraud proceeds through complex financial instruments designed to obscure the toxic nature of underlying mortgage assets and distribute fraud losses to unwitting investors.' },
   { code: '18 U.S.C. § 371: Conspiracy to Defraud the United States', description: 'The coordinated effort by Wall Street executives at multiple institutions to circumvent financial regulations, mislead regulators, and conceal the true risk of their activities from government oversight.' },
   { code: '15 U.S.C. § 78j(b): SEC Rule 10b-5 Violations', description: 'Material misrepresentations and omissions in the sale of securities, including the failure to disclose adverse selection of mortgage pools, inflated appraisals, and internal risk assessments.' },
   { code: '12 U.S.C. § 1833a: FIRREA (Financial Institutions Reform)', description: 'Fraud affecting federally insured financial institutions. The DOJ used this statute for civil settlements but declined to pursue criminal charges against individuals under the same statute.' },
   { code: '18 U.S.C. § 1519: Destruction of Records (Sarbanes-Oxley)', description: 'Banks destroyed and altered internal documents, communications, and risk assessments that would have demonstrated knowledge of fraud in mortgage-backed securities.' }
 ],
 defendants: [
   { name: 'Goldman Sachs', role: 'Selling toxic CDOs while secretly betting against them (ABACUS scandal)', status: 'charged', notes: '$5.06B settlement. SEC charged one mid-level trader (Fabrice Tourre). No senior executive prosecuted.' },
   { name: 'JPMorgan Chase', role: 'Selling billions in fraudulent mortgage-backed securities', status: 'charged', notes: '$13B settlement, largest corporate fine in history at the time. No criminal charges against executives.' },
   { name: 'Bank of America / Countrywide', role: 'Predatory lending, fraudulent mortgage origination and securitization', status: 'charged', notes: '$16.65B settlement. Angelo Mozilo paid $67.5M civil fine (SEC). No criminal charges.' },
   { name: 'Citigroup', role: 'Selling toxic mortgage securities while concealing their risk', status: 'charged', notes: '$7B settlement. No criminal charges against executives.' },
   { name: 'Morgan Stanley', role: 'Selling defective mortgage-backed securities', status: 'charged', notes: '$3.2B settlement. No criminal charges.' },
   { name: 'Credit Suisse', role: 'Misrepresenting the quality of residential mortgage-backed securities', status: 'charged', notes: '$5.28B settlement. No individual prosecutions.' },
   { name: 'S&P / Moody\'s (Rating Agencies)', role: 'Issuing fraudulent AAA ratings on securities they knew were toxic', status: 'charged', notes: 'S&P paid $1.5B to settle government and state lawsuits. Moody\'s paid $864M. No executives charged.' },
   { name: 'Kareem Serageldin (Credit Suisse)', role: 'Hiding $100M in losses on mortgage-backed securities', status: 'incarcerated', notes: 'Only Wall Street banker to serve prison time for crisis-related fraud. Sentenced to 30 months.' },
   { name: 'Dick Fuld (Lehman Brothers)', role: 'Misleading investors through Repo 105 transactions hiding $50B in liabilities', status: 'charged', notes: 'Never charged criminally. SEC did not pursue him. Lehman examiner found"colorable claims"of fraud.' },
   { name: 'AIG / Joseph Cassano', role: 'Writing $440B in credit default swaps with inadequate reserves, requiring $182B bailout', status: 'charged', notes: 'Cassano investigated, never charged. Received $315M in compensation before and after the crisis.' }
 ],



},
};

export default investigations_2;
