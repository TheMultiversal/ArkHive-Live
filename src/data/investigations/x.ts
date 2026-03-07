// Investigation data shard
import type { InvestigationData } from './types';

const investigations_x: Record<string, InvestigationData> = {
  'xkeyscore-universal-data-collection': {
    title: 'XKeyscore Universal Data Collection',
    subtitle: 'Uncovering institutional connections behind XKeyscore Universal Data Collection',
    severity: 'low',
    category: 'Institutional Accountability',
    date: 'January 28, 2011',
    lastUpdated: 'January 2, 2013',
    summary: 'Investigation into XKeyscore Universal Data Collection. Case file developed through years of public records analysis, FOIA requests, and source-based investigative reporting documenting institutional failures requiring accountability.',
    content: [
      'This investigation is actively maintained as new evidence surfaces through court proceedings, government investigations, and public records requests. Recent developments have expanded the scope of documented concerns significantly.',
      'Key individuals and organizations connected to XKeyscore Universal Data Collection have been identified through extensive cross-referencing of public records, financial disclosures, and court documents. Each connection has been verified against independent sources.',
      'This case intersects with several other investigations documented in this archive, revealing broader patterns of institutional failure and accountability gaps that extend well beyond any single incident or entity.',
    ],
    tags: ['Transparency', 'Public Interest', 'Accountability', 'Institutional Failure'],
    sources: [
      { title: 'Center for Responsive Politics', url: 'https://www.opensecrets.org', type: 'Financial Analysis' },
      { title: 'Inspector General Reports', url: 'https://www.ignet.gov', type: 'Government Audit' },
      { title: 'Public Citizen Research', url: 'https://www.citizen.org', type: 'Policy Research' },
      { title: 'Congressional Research Service', url: 'https://crsreports.congress.gov', type: 'Congressional Report' },
      { title: 'FOIA Request Archive', url: 'https://www.foia.gov', type: 'Government Record' },
    ],
    affiliations: [
    ],
  },

};

export default investigations_x;
