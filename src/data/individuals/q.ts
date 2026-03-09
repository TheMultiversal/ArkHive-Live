// Individual profile data shard
import type { IndividualProfile } from './types';

const profiles: Record<string, IndividualProfile> = {
  'qasem-soleimani': {
    name: 'Qasem Soleimani',
    title: 'Former Commander, IRGC Quds Force',
    role: 'Iranian military leader',
    riskLevel: 'critical',
    description: 'Major General Qasem Soleimani commanded the Quds Force of Iran Islamic Revolutionary Guard Corps (IRGC) for over two decades, overseeing Iran proxy warfare and covert operations across the Middle East. He was killed in a U.S. drone strike at Baghdad International Airport on January 3, 2020, in an operation ordered directly by President Trump.',
    birthDate: 'March 11, 1957',
    birthPlace: 'Qanat-e Malek, Iran',
    deathDate: 'January 3, 2020',
    education: ['Kerman University (partial)'],
    affiliations: [
      { name: 'Islamic Revolutionary Guard Corps', role: 'Quds Force Commander', type: 'agency' },
      { name: 'Iranian Government', role: 'Major General', type: 'agency' },
    ],
    controversies: [
      'Directed Iranian proxy operations across Iraq, Syria, Lebanon, and Yemen that resulted in hundreds of American military deaths through provision of explosively formed penetrators (EFPs) and other weapons to Iraqi militias',
      'Orchestrated Iranian military intervention in Syria to prop up the Assad regime, including coordination of Hezbollah, Iraqi Shia militias, and Afghan Fatemiyoun Brigade',
      'Designated as a terrorist by the United States, European Union, and multiple other nations for supporting terrorism worldwide',
      'Assassination by U.S. drone strike in January 2020 triggered Iranian ballistic missile attack on U.S. bases in Iraq, with over 100 American troops suffering traumatic brain injuries',
      'Pentagon assessment attributed responsibility for the deaths of at least 603 American service members in Iraq to Soleimani-directed militia operations',
    ],
    charges: [
      { statute: 'Executive Order 13224', description: 'Specially Designated Global Terrorist', category: 'Terrorism' },
      { statute: 'UNSCR 1747', description: 'UN Security Council travel ban and asset freeze', category: 'Sanctions' },
    ],
    relatedInvestigations: [
      { title: 'Drone Assassination Program', slug: 'drone-assassinations', severity: 'critical' },
    ],
    timeline: [
      { date: '1998-01-01', event: 'Appointed commander of IRGC Quds Force' },
      { date: '2003-04-01', event: 'Began directing support for Iraqi Shia militias following U.S. invasion' },
      { date: '2007-10-25', event: 'Designated under Executive Order 13224 by U.S. Treasury' },
      { date: '2011-10-11', event: 'Implicated in Iranian plot to assassinate Saudi Ambassador to U.S. at a Washington D.C. restaurant' },
      { date: '2014-06-01', event: 'Personally directed Iraqi Shia militia defense of Baghdad against ISIS' },
      { date: '2015-09-01', event: 'Traveled to Moscow to coordinate Russian intervention in Syria' },
      { date: '2020-01-03', event: 'Killed by U.S. MQ-9 Reaper drone strike at Baghdad International Airport' },
    ],
    socialMedia: [],
    sources: [
      { title: 'DOD Statement on Strike Against Soleimani', url: 'https://www.defense.gov/News/Releases/Release/Article/2049534/', date: '2020-01-03' },
      { title: 'Treasury OFAC - Soleimani Designation', url: 'https://www.treasury.gov/resource-center/sanctions/', date: '2007-10-25' },
      { title: 'FOIA Electronic Reading Room', url: 'https://www.foia.gov', date: '2026-03-09' },
    ],
    aliases: [],
    knownAssociates: [
      { name: 'Abu Mahdi al-Muhandis', relationship: 'Iraqi militia commander killed in same drone strike', href: '/entities/individuals/abu-mahdi-al-muhandis' },
    ],
  },

 'queen-isabella': {
 name: 'Queen Isabella I',
 title: 'Queen of Castile',
 role: 'Spanish monarch who sponsored colonization and the Inquisition',
 riskLevel: 'critical',
 description: 'Isabella I of Castile was Queen of Castile from 1474 and, with her husband Ferdinand II of Aragon, united the Spanish kingdoms. She sponsored Columbus\'s voyages to the Americas, established the Spanish Inquisition, and ordered the expulsion of Jews from Spain, initiating the colonization and genocide of indigenous peoples across the Americas.',
 education: [],
 affiliations: [
 { name: 'Kingdom of Castile', role: 'Queen', type: 'organization' },
 ],
 controversies: [
 'Sponsored Columbus\'s voyages that led to colonization and genocide of indigenous peoples',
 'Established the Spanish Inquisition (1478) targeting religious minorities',
 'Ordered expulsion of Jews from Spain (Alhambra Decree, 1492)',
 'Authorized enslavement and exploitation of indigenous populations in the Americas',
 ],
 relatedInvestigations: [
 { title: 'Columbus Legacy', slug: 'columbus-legacy', severity: 'critical' },
 ],
 timeline: [
 { date: '1474', event: 'Became Queen of Castile' },
 { date: '1478', event: 'Established the Spanish Inquisition' },
 { date: '1492', event: 'Sponsored Columbus\'s first voyage to the Americas' },
 { date: '1492', event: 'Issued Alhambra Decree expelling Jews from Spain' },
 { date: '1493-1504', event: 'Sponsored subsequent Columbus voyages, beginning colonization of the Americas' },
 ],
 sources: [
 { title: 'Columbus Legacy', url: '/investigations/columbus-legacy' },
 ],
 knownAssociates: [
 { name: 'Bartolome de las Casas', relationship: 'Spanish friar who documented abuses Isabella\'s colonization caused', href: '/entities/individuals/bartolome-de-las-casas' }
 ],

 },
};

export default profiles;
