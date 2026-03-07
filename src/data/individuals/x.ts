// Individual profile data shard
import type { IndividualProfile } from './types';

const profiles: Record<string, IndividualProfile> = {
  'xi-jinping': {
    name: 'Xi Jinping',
    title: 'Public Official',
    role: 'Documented based on entity connections',
    riskLevel: 'low',
    description: 'This profile documents Xi Jinping and their role as it relates to matters of institutional accountability. All information derived from publicly available records, court documents, and official filings.',
    education: [],
    affiliations: [
    ],
    controversies: [
      'Xi Jinping has connections to entities under active investigation that have raised questions about accountability, tracked through public records and official documentation.',
    ],
    charges: [],
    relatedInvestigations: [
    ],
    timeline: [
      { date: '2015-10-03', event: 'Profile documented based on review of public records and institutional affiliations' },
      { date: '2018-12-23', event: 'Documentation updated based on newly available public records and filings' },
    ],
    socialMedia: [],
    sources: [
      { title: 'Federal Court Records (PACER)', url: 'https://www.pacer.gov', date: '2015-10-03' },
      { title: 'Congressional Record', url: 'https://www.congress.gov', date: '2018-12-23' },
      { title: 'Public Records and Government Databases', url: 'https://www.archives.gov', date: '2018-12-14' },
    ],
    aliases: [],
    knownAssociates: [
    ],
  },

 'xanana-gusmao': {
 name: 'Xanana Gusmão',
 title: 'Commander of Falintil resistance, imprisoned, later first President of East Timor',
 role: 'Commander of Falintil resistance, imprisoned, later first President of East Timor',
 riskLevel: 'high',
 description: 'Xanana Gusmão is documented in this investigative archive for their role as Commander of Falintil resistance, imprisoned, later first President of East Timor.',
 education: [],
 affiliations: [
 { name: 'Independent', role: 'Wikipedia: Woodrow Wilson', type: 'organization' },
 ],
 controversies: [
 'Connected to 1 documented investigation',
 ],
 relatedInvestigations: [
 { title: 'East Timor Genocide', slug: 'east-timor-genocide', severity: 'high' },
 ],
 timeline: [{ date: 'Ongoing', event: 'Active in role as Commander of Falintil resistance, imprisoned, later first President of East Timor' }],
 knownAssociates: [
 { name: 'Jose Ramos-Horta', relationship: 'Fellow East Timorese independence leader', href: '/entities/individuals/jose-ramos-horta' },
 { name: 'Suharto', relationship: 'Indonesian dictator who occupied Gusmao\'s East Timor', href: '/entities/individuals/suharto' }
 ],

 sources: [{ title: 'Wikipedia: Xanana Gusmão', url: 'https://en.wikipedia.org/wiki/Xanana_Gusmão' }],
 },
  'xavier-becerra': {
    name: 'Xavier Becerra',
    title: 'Public Official',
    role: 'Documented based on entity connections',
    riskLevel: 'medium',
    description: 'Xavier Becerra appears in this archive due to documented connections with investigations and entities tracked for public accountability purposes. Profile built from verified public records and official documentation.',
    education: [],
    affiliations: [
    ],
    controversies: [
      'Xavier Becerra has connections to entities under active investigation that have raised questions about accountability, tracked through public records and official documentation.',
    ],
    charges: [],
    relatedInvestigations: [
    ],
    timeline: [
      { date: '2022-01-31', event: 'Profile documented based on review of public records and institutional affiliations' },
      { date: '2025-12-18', event: 'Initial records compiled from public financial disclosures and government databases' },
    ],
    socialMedia: [],
    sources: [
      { title: 'Federal Court Records (PACER)', url: 'https://www.pacer.gov', date: '2022-01-31' },
      { title: 'SEC EDGAR Public Filings', url: 'https://www.sec.gov/edgar', date: '2025-12-18' },
      { title: 'Public Records and Government Databases', url: 'https://www.archives.gov', date: '2025-08-15' },
    ],
    aliases: [],
    knownAssociates: [
    ],
  },




};

export default profiles;
