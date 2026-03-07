// Individual profile data shard
import type { IndividualProfile } from './types';

const profiles: Record<string, IndividualProfile> = {
 'qasem-soleimani': {
 name: 'Qasem Soleimani',
 title: 'Former Iranian Military Commander',
 role: 'Commander of Quds Force',
 riskLevel: 'critical',
 description: 'Commander of Iran\'s Quds Force, killed by U.S. drone strike in January 2020. His assassination nearly started a war.',
 birthDate: 'March 11, 1957',
 birthPlace: 'Qanat-e Malek, Iran',
 deathDate: 'January 3, 2020',
 education: [
 'Iranian military training',
 ],
 affiliations: [
 { name: 'Islamic Revolutionary Guard Corps', role: 'Quds Force Commander', type: 'agency' },
 { name: 'Iranian Government', role: 'Major General', type: 'agency' },
 ],
 knownAssociates: [
 { name: 'Donald Trump', relationship: 'President who ordered Soleimani\'s assassination via drone strike at Baghdad airport in January 2020', href: '/entities/individuals/donald-trump' },
 { name: 'Ali Khamenei', relationship: 'Supreme Leader of Iran whom Soleimani served as head of the Quds Force', href: '/entities/individuals/ali-khamenei' },
 { name: 'Mike Pompeo', relationship: 'Secretary of State who advocated for Soleimani\'s killing and defended it publicly', href: '/entities/individuals/mike-pompeo' },
 ],
 controversies: [
 'PROXY WARS: Coordinated Iranian proxy forces across Middle East',
 'IRAQ: Supported Shia militias against U.S. forces',
 'SYRIA: Supported Assad regime',
 'ASSASSINATION: Killed by U.S. drone strike ordered by Trump',
 ],
 charges: [],
 relatedInvestigations: [
 { title: 'Drone Assassination Program', slug: 'drone-assassinations', severity: 'critical' },
 ],
 timeline: [
 { date: 'March 11, 1957', event: 'Born in Qanat-e Malek, Iran' },
 { date: '1998', event: 'Becomes Quds Force commander' },
 { date: 'January 3, 2020', event: 'Killed by U.S. drone strike in Baghdad' },
 ],
 sources: [{ title: 'Wikipedia: Qasem Soleimani', url: 'https://en.wikipedia.org/wiki/Qasem_Soleimani' }, { title: 'Military Times: Qasem Soleimani', url: 'https://www.militarytimes.com/' }],
 },
 'queen-isabella': {
 name: 'Queen Isabella I of Castile',
 title: 'Queen of Castile and León',
 role: 'Head of State',
 riskLevel: 'critical',
 description: 'Queen Isabella I of Castile was a Spanish monarch who, together with King Ferdinand II of Aragon, sponsored Christopher Columbus\'s voyages to the Americas beginning in 1492. These voyages initiated the European colonization of the Americas, leading to the genocide, enslavement, and displacement of millions of indigenous peoples. She also established the Spanish Inquisition and ordered the expulsion of Jews and Muslims from Spain.',
 birthDate: 'April 22, 1451',
 birthPlace: 'Madrigal de las Altas Torres, Castile',
 deathDate: 'November 26, 1504',
 education: [],
 aliases: ['Isabella the Catholic', 'Isabel la Católica'],
 affiliations: [
 { name: 'Kingdom of Castile', role: 'Queen (1474-1504)', type: 'agency' },
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
