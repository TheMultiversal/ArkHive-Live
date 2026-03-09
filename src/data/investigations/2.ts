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
 'LASTING DAMAGE: Bush v. Gore damaged public trust in the Supreme Court\'s impartiality and established that the Court would intervene in elections to benefit Republicans. It foreshadowed future judicial power grabs.',
 ],
 tags: ['2000 Election', 'Bush v Gore', 'Supreme Court', 'Florida Recount', 'Katherine Harris', 'Stolen Election'],
 sources: [
 { title: 'Bush v. Gore Decision', url: 'https://supreme.justia.com/cases/federal/us/531/98/', type: 'Court Decision' },
 { title: 'Florida Recount Study, NORC', url: 'https://www.norc.org/Research/Projects/Pages/florida-ballot-project.aspx', type: 'Academic Research' },
 { title: 'Felon Voter Purge Analysis', url: 'https://www.usccr.gov/pubs/vote2000/report/ch5.htm', type: 'Government Report' },
 ],
 affiliations: [
 { id: '1', name: 'George W. Bush', type: 'individual', relationship: 'Beneficiary of Court intervention', href: '/entities/individuals/george-w-bush' },
 { id: '2', name: 'Al Gore', type: 'individual', relationship: 'Likely actual winner', href: '/entities/individuals/al-gore' },
 { id: '3', name: 'Katherine Harris', type: 'individual', relationship: 'Secretary of State, Bush campaign co-chair', href: '/entities/individuals/katherine-harris' },
 { id: '4', name: 'Jeb Bush', type: 'individual', relationship: 'Florida Governor, brother', href: '/entities/individuals/jeb-bush' },
 { id: '5', name: 'Supreme Court', type: 'agency', relationship: 'Stopped recount, decided election', href: '/entities/agencies/supreme-court' },
 { id: '6', name: 'Antonin Scalia', type: 'individual', relationship: 'Key vote to stop count', href: '/entities/individuals/antonin-scalia' },
 ],
 },
  '2020-election-overturn': {
 title: '2020 Election Overturn Attempt',
 subtitle: 'The multi-prong conspiracy to steal the election',
 severity: 'critical',
 category: 'Election Interference',
 date: 'December 1, 2020',
 lastUpdated: 'May 8, 2025',
 summary: 'Trump and allies attempted to overturn the 2020 election through multiple schemes: fake electors, DOJ pressure, state official pressure, Pence pressure, and ultimately violence. The conspiracy was documented by the January 6 Committee and forms the basis of federal indictments.',
 content: [
 'FAKE ELECTORS: Trump allies organized fake electoral slates in seven states to be used to justify rejecting real results.',
 'DOJ PRESSURE: Trump tried to install Jeffrey Clark as acting AG to send letters claiming fraud to states.',
 'STATE PRESSURE: Trump called Georgia election officials demanding they "find "votes. He pressured other states similarly.',
 'PENCE PRESSURE: Trump demanded Pence reject electoral votes. Pence refused. The mob chanted to hang him.',
 'JANUARY 6: When legal schemes failed, violence was the final option. See January 6 Insurrection investigation.',
 ],
 tags: ['2020 Election', 'Fake Electors', 'January 6', 'Trump', 'Election Interference'],
 sources: [
 { title: 'January 6 Committee Report', url: 'https://www.govinfo.gov/content/pkg/GPO-J6-REPORT/pdf/GPO-J6-REPORT.pdf', type: 'Government Report' },
 { title: 'Trump Federal Indictment', url: 'https://www.justice.gov/storage/US_v_Trump_23-cr-257.pdf', type: 'Court Filing' },
 ],
 affiliations: [
 { id: '1', name: 'Donald Trump', type: 'individual', relationship: 'Led the conspiracy', href: '/entities/individuals/donald-trump' },
 { id: '2', name: 'John Eastman', type: 'individual', relationship: 'Coup memo author', href: '/entities/individuals/john-eastman' },
 { id: '3', name: 'Rudy Giuliani', type: 'individual', relationship: 'Fake electors organizer', href: '/entities/individuals/rudy-giuliani' },
 { id: '4', name: 'Jeffrey Clark', type: 'individual', relationship: 'Would-be acting AG', href: '/entities/individuals/jeffrey-clark' },
 ],
 },
  '2016-election': {
 title: '2016 Election Interference',
 subtitle: 'Russian interference in the 2016 U.S. presidential election through hacking, social media manipulati',
 severity: 'critical',
 category: 'Election Security',
 date: 'March 12, 2025',
 lastUpdated: 'December 12, 2025',
 summary: 'Russian interference in the 2016 U.S. presidential election through hacking, social media manipulation, and contacts with the Trump campaign.',
 content: [
 'Russian military intelligence (GRU) hacked the DNC and Clinton campaign, releasing stolen emails through WikiLeaks to damage the Clinton campaign.',
 'The Internet Research Agency conducted a sophisticated social media influence operation reaching millions of Americans across platforms.',
 'Special Counsel Robert Mueller documented extensive contacts between the Trump campaign and Russian operatives, resulting in 34 indictments and 7 guilty pleas.',
 ],
 tags: ['Election Security', 'Investigation', 'Accountability'],
 sources: [
 { title: 'Public Records', url: 'https://www.documentcloud.org/', type: 'Government' },
 ],
 affiliations: [
 { id: '1', name: 'Donald Trump', type: 'individual', relationship: 'Key figure in investigation', href: '/entities/individuals/donald-trump' },
 { id: '2', name: 'Internet Research Agency', type: 'corporation', relationship: 'Key figure in investigation', href: '/entities/corporations/internet-research-agency' },
 { id: '3', name: 'Internet Research Agency', type: 'organization', relationship: 'Key figure in investigation', href: '/entities/organizations/internet-research-agency' },
 ],
 },
};

export default investigations_2;
