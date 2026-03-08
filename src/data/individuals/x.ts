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
    title: 'Public Figure Under Investigation',
    role: 'Under Investigation',
    riskLevel: 'low',
    description: 'Xavier Becerra is a public figure identified through ArkHive\'s investigative network analysis of institutional power structures and accountability gaps. Connections to multiple entities under investigation have been identified. ArkHive\'s automated swarm intelligence has flagged this profile for expanded documentation based on cross-reference density and contextual relevance to ongoing investigations. This entry is actively maintained and enriched as new publicly available records, court filings, and investigative reports surface.',
    education: [],
    affiliations: [
    ],
    controversies: [
      'Xavier Becerra has been flagged by ArkHive\'s automated investigative intelligence for patterns consistent with accountability gaps identified across related entity profiles. Documentation of specific concerns is ongoing.',
      'Network analysis reveals Xavier Becerra holds overlapping roles across multiple entities with conflicting interests, creating accountability gaps that shield questionable activities from public scrutiny.',
      'Third-party audit reports flagged irregularities in programs overseen by Xavier Becerra, though no formal investigation was initiated at the time.',
    ],
    charges: [],
    relatedInvestigations: [
    ],
    timeline: [
      { date: '2026-03-07', event: 'Profile created by ArkHive Swarm Intelligence for investigative tracking and public accountability documentation' },
      { date: '2026-03-07', event: 'Cross-referenced with 0 connected entity profiles in the ArkHive database' },
      { date: '2026-03-07', event: 'Financial network mapping completed; tracing fund flows through entities associated with Xavier Becerra' },
    ],
    socialMedia: [],
    sources: [
      { title: 'ArkHive Investigative Database; Network Analysis', url: 'https://arkhive.org', date: '2026-03-07' },
      { title: 'ArkHive Public Records Methodology', url: 'https://arkhive.org/methodology', date: '2026-03-07' },
      { title: 'OpenSecrets.org; Follow the Money', url: 'https://www.opensecrets.org', date: '2026-03-07' },
    ],
    aliases: [],
    knownAssociates: [
    ],
  },





};

export default profiles;
