// Investigation data shard
import type { InvestigationData } from './types';

const investigations_y: Record<string, InvestigationData> = {
  'yemen-war-crimes': {
 title: 'Yemen War Crimes',
 subtitle: 'Investigation into yemen war crimes.',
 severity: 'high',
 category: 'Financial Crime',
 date: 'June 6, 2023',
 lastUpdated: 'January 9, 2025',
 summary: 'Investigation into yemen war crimes.',
 content: [
 'This investigation documents yemen war crimes and its impact.',
 ],
 tags: ['Financial Crime', 'Investigation', 'Accountability'],
 sources: [
 { title: 'Public Records', url: 'https://www.documentcloud.org/', type: 'Government' },
 ],
 affiliations: [
 { id: '1', name: 'Saudi Arabia', type: 'organization', relationship: 'Saudi-led coalition bombing campaign', href: '/entities/organizations/saudi-arabian-government' },
 { id: '2', name: 'Raytheon Company (now RTX Corporation)', type: 'corporation', relationship: 'Supplied bombs used on civilians', href: '/entities/corporations/raytheon' },
 { id: '3', name: 'Pentagon', type: 'agency', relationship: 'US military support for Saudi campaign', href: '/entities/agencies/pentagon' },
 ],
 },
  'youtube-extremism': {
 title: 'Youtube Extremism',
 subtitle: 'Investigation into youtube extremism.',
 severity: 'high',
 category: 'Media & Disinformation',
 date: 'June 9, 2020',
 lastUpdated: 'August 11, 2025',
 summary: 'Investigation into youtube extremism.',
 content: [
 'This investigation documents youtube extremism and its impact.',
 ],
 tags: ['Media & Disinformation', 'Investigation', 'Accountability'],
 sources: [
 { title: 'Public Records', url: 'https://www.documentcloud.org/', type: 'Government' },
 ],
 affiliations: [
 { id: '1', name: 'Google', type: 'corporation', relationship: 'YouTube parent company, recommendation algorithm', href: '/entities/corporations/google' },
 ],
 },
};

export default investigations_y;
