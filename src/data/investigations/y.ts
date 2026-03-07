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
 affiliations: [],
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
 affiliations: [],
 },
};

export default investigations_y;
