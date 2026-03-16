// Investigation data shard
import type { InvestigationData } from './types';

const investigations_9: Record<string, InvestigationData> = {
  '911-intelligence': {
 title: '9/11 Intelligence Failures',
 subtitle: 'The warnings that were ignored before September 11, 2001',
 severity: 'critical',
 category: 'Intelligence Failures',
 date: 'September 18, 2009',
 lastUpdated: 'October 4, 2022',
 summary: 'In the months before September 11, 2001, U.S. intelligence agencies received numerous warnings about an imminent al-Qaeda attack. The August 6, 2001 Presidential Daily Brief titled "Bin Laden Determined to Strike in US" explicitly warned of the threat. CIA and FBI possessed pieces of the puzzle that, combined, could have prevented the attack. Institutional failures, bureaucratic walls, and leadership inattention allowed 3,000 people to die.',
 content: [
 'THE AUGUST 6 PDB: One month before 9/11, President Bush received a Presidential Daily Brief titled "Bin Laden Determined to Strike in US."It warned of al-Qaeda surveillance of federal buildings in New York and preparations for hijackings. Bush took no action.',
 'BUSH\'S RESPONSE: When presented with the PDB, Bush reportedly told the briefer:"All right, you\'ve covered your ass now."He then went fishing. No meetings were called. No additional security measures were ordered.',
 'COVERT ACTION MEMORANDUM: In January 2001, Richard Clarke sent a memo to Condoleezza Rice requesting an urgent cabinet meeting on al-Qaeda. It took until September 4 (one week before 9/11) for a principals meeting to occur.',
 'PHOENIX MEMO: FBI agent Ken Williams sent a memo warning that al-Qaeda might be sending students to U.S. flight schools. The memo was ignored at FBI headquarters and not shared with other agencies.',
 'MOUSSAOUI INVESTIGATION: The FBI arrested Zacarias Moussaoui in August 2001 for suspicious flight training. Field agents sought a warrant to search his computer but were denied by FBI lawyers. His laptop contained evidence of the plot.',
 'THE WALL: Legal barriers prevented FBI intelligence and criminal divisions from sharing information. The CIA and FBI failed to communicate. Information that could have connected the dots was siloed.',
 'KNOWN HIJACKERS: Two of the eventual hijackers (Nawaf al-Hazmi and Khalid al-Mihdhar) were known to the CIA. The CIA failed to add them to watchlists or inform the FBI. They lived openly in San Diego.',
 'IGNORED WARNINGS: CIA Director George Tenet said the system was" blinking red "all summer. Multiple foreign intelligence services warned of attacks. None of these warnings resulted in preventive action.',
 '9/11 COMMISSION: The 9/11 Commission documented systemic failures across agencies. It found "a failure of imagination "but also concrete failures to act on available information.',
 'ACCOUNTABILITY: Despite catastrophic failures, no one was fired. George Tenet remained CIA Director. Condoleezza Rice was promoted to Secretary of State. The failure of accountability was complete.',
 'INTEL REFORMS: The Intelligence Reform Act of 2004 created the Director of National Intelligence to coordinate agencies. Whether the reforms would have prevented 9/11 remains debated.',
 'OUTSTANDING QUESTIONS: The Saudi government\'s role remains partially classified. 28 pages of the congressional inquiry were redacted. Full transparency has never been achieved.',
 ],
 tags: ['9/11', 'Intelligence', 'al-Qaeda', 'CIA', 'FBI', 'Bush', 'Bin Laden', 'PDB'],
 sources: [
 { title: 'August 6 2001 PDB, Declassified', url: 'https://nsarchive2.gwu.edu/NSAEBB/NSAEBB116/pdb8-6-2001.pdf', type: 'Government Document' },
 { title: '9/11 Commission Report', url: 'https://www.9-11commission.gov/report/911Report.pdf', type: 'Government Report' },
 { title: 'Phoenix Memo', url: 'https://nsarchive2.gwu.edu/NSAEBB/NSAEBB318/doc01.pdf', type: 'Government Document' },
 { title: 'Clarke Memo to Rice', url: 'https://nsarchive2.gwu.edu/NSAEBB/NSAEBB147/index.htm', type: 'Government Document' },
 ],
 affiliations: [
 { id: '1', name: 'George W. Bush', type: 'individual', relationship: 'Received and ignored PDB warning', href: '/entities/individuals/george-w-bush' },
 { id: '2', name: 'Condoleezza Rice', type: 'individual', relationship: 'NSA who delayed Clarke meeting', href: '/entities/individuals/condoleezza-rice' },
 { id: '3', name: 'George Tenet', type: 'individual', relationship: 'CIA Director, system" blinking red"', href: '/entities/individuals/george-tenet' },
 { id: '4', name: 'Richard Clarke', type: 'individual', relationship: 'Counterterrorism chief who warned', href: '/entities/individuals/richard-clarke' },
 { id: '5', name: 'CIA', type: 'agency', relationship: 'Failed to share hijacker information', href: '/entities/agencies/cia' },
 { id: '6', name: 'FBI', type: 'agency', relationship: 'Ignored Phoenix Memo, denied Moussaoui warrant', href: '/entities/agencies/fbi' },
 { id: '7', name: 'NSA', type: 'agency', relationship: 'Intercepted al-Qaeda communications', href: '/entities/agencies/nsa' },
 ],
 },
  '9-11-failures': {
 title: '9/11 Intelligence Failures',
 subtitle: 'The warnings ignored, the attack enabled',
 severity: 'critical',
 category: 'Intelligence Failures',
 date: 'September 11, 2009',
 lastUpdated: 'September 3, 2010',
 summary: 'Multiple intelligence agencies had warnings about the 9/11 attacks but failed to act or share information. The August 6, 2001 PDB titled "Bin Laden Determined to Strike in US" was ignored. The failures have never been fully explained or accounted for.',
 content: [
 'AUGUST 6 PDB: Bush received briefing titled "Bin Laden Determined to Strike in US."He reportedly responded "All right, you\'ve covered your ass now."',
 'FBI PHOENIX MEMO: FBI agent warned about suspicious flight school students. The memo was ignored.',
 'CIA WARNINGS: CIA tracked two hijackers but didn\'t inform FBI. The "wall "between agencies was later blamed.',
 '9/11 COMMISSION: The investigation was delayed, underfunded, and limited. Many questions remain unanswered.',
 'SAUDI CONNECTIONS: 15 of 19 hijackers were Saudi. 28 pages on Saudi involvement were classified for years.',
 ],
 tags: ['9/11', 'Intelligence', 'FBI', 'CIA', 'Bush', 'Saudi Arabia'],
 sources: [
 { title: '9/11 Commission Report', url: 'https://www.9-11commission.gov/report/', type: 'Government Report' },
 ],
 affiliations: [
 { id: '1', name: 'George W. Bush', type: 'individual', relationship: 'Ignored warnings', href: '/entities/individuals/george-w-bush' },
 { id: '2', name: 'CIA', type: 'agency', relationship: 'Failed to share intelligence', href: '/entities/agencies/cia' },
 { id: '3', name: 'FBI', type: 'agency', relationship: 'Ignored warnings', href: '/entities/agencies/fbi' },
 ],
 },
 'border-militarization-immigration-enforcement': {
  title: 'Border Militarization and Immigration Enforcement Complex',
  subtitle: 'How $333 billion spent on border enforcement since 9/11 has created a militarized zone but failed to achieve its goals, while generating a $25 billion private border industry and enabling human rights abuses',
  severity: 'high' as const,
  category: 'Immigration',
  date: '2024-10-01',
  lastUpdated: '2025-03-01',
  summary: 'Since 9/11, the United States has spent over $333 billion on immigration enforcement — more than all other federal law enforcement agencies combined. The Border Patrol has grown from 9,800 agents in 2001 to over 21,000. The border features 700+ miles of barriers, surveillance towers, drones, and military technology. Despite this massive investment, unauthorized border crossings have not been eliminated, and the enforcement approach has primarily succeeded in making the journey more deadly: over 10,000 migrants have died crossing the border since 2000. Meanwhile, the private border-industrial complex — detention contractors, technology companies, and defense firms — has become a $25 billion annual industry with powerful lobbying interests in maintaining the current approach.',
  content: [
   'The militarization of the U.S.-Mexico border accelerated dramatically after 9/11, despite the fact that the 9/11 hijackers entered through airports with valid visas, not across the southern border. Customs and Border Protection became the largest law enforcement agency in the country with a $19 billion annual budget (2024). The Border Patrol budget increased from $1.1 billion in 2000 to $6.3 billion in 2024. Military-grade technology including Predator drones, facial recognition systems, and seismic sensors were deployed. Yet unauthorized crossings continued, driven by the fundamental economic forces of labor demand and push factors in sending countries.',
   'The human cost of border enforcement is catastrophic. By making easy crossing points inaccessible, enforcement strategy deliberately funneled migrants into the most dangerous terrain — a policy called "Prevention Through Deterrence" adopted in 1994. Since then, over 10,000 migrants have died crossing deserts, rivers, and mountains. The actual number is likely far higher, as bodies in remote desert areas often go undiscovered. The Tucson sector alone recovers 150-200 bodies per year. Humanitarian organizations like No More Deaths that leave water in the desert have been prosecuted by the federal government for littering.',
   'Private immigration detention has become a multi-billion dollar industry. Two companies — CoreCivic (formerly CCA) and GEO Group — operate 80% of private immigration detention beds and have a combined market capitalization exceeding $4 billion. These companies spend $5+ million annually on lobbying and campaign contributions to maintain detention bed mandates written into congressional appropriations bills. Congress requires ICE to maintain a minimum of 34,000 detention beds at all times (the "bed quota"), regardless of actual enforcement needs — a provision lobbied for by the private prison industry.',
   'Conditions in immigration detention facilities have been documented as systematically inhumane. DHS Inspector General reports have found spoiled food, inadequate medical care, prolonged solitary confinement, sexual abuse, and deaths from preventable medical conditions. Over 200 people have died in ICE custody since 2004. The COVID-19 pandemic revealed that ICE facilities had among the highest infection rates of any congregate setting. Detained individuals have no right to a public defender despite facing proceedings that can result in permanent banishment from the country.',
   'The border-industrial complex includes not just detention companies but defense contractors and technology firms that profit from continuous expansion. Elbit Systems, an Israeli defense company, has received billions in contracts for surveillance towers; General Atomics manufactures border drones; Palantir provides data analytics to ICE. These companies donate to politicians on both sides who support increased border spending. The result is a self-reinforcing cycle: border spending enriches companies who lobby for more spending, ensuring the budget never decreases regardless of border conditions. The fundamental policy question — whether enforcement-only approaches can ever address immigration driven by economic forces — is never seriously debated.',
  ],
  tags: ['border militarization', 'immigration enforcement', 'CBP', 'private detention', 'CoreCivic', 'GEO Group', 'migrant deaths', 'border wall', 'ICE', 'border-industrial complex'],
  sources: [
   { title: 'American Immigration Council: The Cost of Immigration Enforcement', url: 'https://www.americanimmigrationcouncil.org/', type: 'Research' },
   { title: 'DHS Inspector General: Immigration Detention Facility Inspections', url: 'https://www.oig.dhs.gov/', type: 'Government Report' },
   { title: 'Missing Migrants Project (IOM): Deaths at the U.S.-Mexico Border', url: 'https://missingmigrants.iom.int/', type: 'International Organization' },
  ],
  affiliations: [
   { id: '1', name: 'CBP', type: 'agency', relationship: 'Largest federal law enforcement agency with $19B budget; implemented "Prevention Through Deterrence" strategy; 21,000+ Border Patrol agents', href: '/entities/agencies/cbp' },
   { id: '2', name: 'ICE', type: 'agency', relationship: 'Manages immigration detention with 34,000 bed mandate; 200+ deaths in custody since 2004; relied on private prison contractors for 80% of detention', href: '/entities/agencies/ice' },
  ],
 },
};

export default investigations_9;
