// Investigation data shard
import type { InvestigationData } from './types';

const investigations_9: Record<string, InvestigationData> = {
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
   'The border-industrial complex includes not just detention companies but defense contractors and technology firms that profit from continuous expansion. Elbit Systems, an Israeli defense company, has received billions in contracts for surveillance towers; General Atomics manufactures border drones; Palantir provides data analytics to ICE. These companies donate to politicians on both sides who support increased border spending. The result is a self-reinforcing cycle: border spending enriches companies who lobby for more spending, ensuring the budget never decreases regardless of border conditions. The fundamental policy question — whether enforcement-only approaches can ever address immigration driven by economic forces — is never seriously debated.'
  ],
  tags: ['border militarization', 'immigration enforcement', 'CBP', 'private detention', 'CoreCivic', 'GEO Group', 'migrant deaths', 'border wall', 'ICE', 'border-industrial complex'],
  sources: [
   { title: 'American Immigration Council: The Cost of Immigration Enforcement', url: 'https://www.americanimmigrationcouncil.org/', type: 'Research' },
   { title: 'DHS Inspector General: Immigration Detention Facility Inspections', url: 'https://www.oig.dhs.gov/', type: 'Government Report' },
   { title: 'Missing Migrants Project (IOM): Deaths at the U.S.-Mexico Border', url: 'https://missingmigrants.iom.int/', type: 'International Organization' }
  ],
  affiliations: [
   { id: '1', name: 'CBP', type: 'agency', relationship: 'Largest federal law enforcement agency with $19B budget; implemented "Prevention Through Deterrence" strategy; 21,000+ Border Patrol agents', href: '/entities/agencies/cbp' },
   { id: '2', name: 'ICE', type: 'agency', relationship: 'Manages immigration detention with 34,000 bed mandate; 200+ deaths in custody since 2004; relied on private prison contractors for 80% of detention', href: '/entities/agencies/ice' }
  ],
  eventOriginDate: '1994-01-01',
  lastActivityDate: '2025-03-01',
  pageUpdatedDate: '2026-03-18',
   timeline: [
     { date: '1994', event: 'By making easy crossing points inaccessible, enforcement strategy deliberately funneled migrants into the most dangerous terrain — a policy called "Prevention Through Deterrence" adopted in 1994', type: 'default' },
     { date: '2000', event: 'The Border Patrol budget increased from $1.1 billion in 2000 to $6.3 billion in 2024', type: 'political' },
     { date: '2004', event: 'Over 200 people have died in ICE custody since 2004', type: 'critical' },
     { date: '2024', event: 'Customs and Border Protection became the largest law enforcement agency in the country with a $19 billion annual budget (2024)', type: 'political' }
   ],
 },
};

export default investigations_9;
