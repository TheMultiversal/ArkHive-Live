// Individual profile data shard
import type { IndividualProfile } from './types';

const profiles: Record<string, IndividualProfile> = {
 'ulysses-s-grant': {
 name: 'Ulysses S. Grant',
 title: 'US President who implemented early Indian reservation and assimilation policies including Peace Policy',
 role: 'Political Figure',
 riskLevel: 'critical',
 description: 'Ulysses S. Grant. Profile pending review.',
 education: [],
 affiliations: [
 { name: 'United States Government', role: '18th President', type: 'agency' },
 ],
 controversies: [
 'Implemented reservation system and early Indian boarding school policies as part of forced assimilation',
 ],
 charges: [],
 relatedInvestigations: [
 { title: 'American Indian Boarding Schools', slug: 'indian-boarding-schools', severity: 'critical' },
 ],
 timeline: [
 { date: '1869', event: 'Implemented "Peace Policy" establishing reservation system and early boarding school programs for Native Americans' },
 ],
 socialMedia: [],
 sources: [
 { title: 'American Indian Boarding Schools', url: '/investigations/indian-boarding-schools', date: '' },
 ],
 aliases: [],
 knownAssociates: [
 { name: 'William Tecumseh Sherman', relationship: 'Sherman served under Grant in Civil War', href: '/entities/individuals/william-tecumseh-sherman' },
 { name: 'Nathan Bedford Forrest', relationship: 'Confederate general and KKK founder Grant later fought', href: '/entities/individuals/nathan-bedford-forrest' },
 { name: 'Philip Sheridan', relationship: 'Fellow Union general who oversaw Indian Wars', href: '/entities/individuals/philip-sheridan' },
 ],
 },






 'ursula-von-der-leyen': {
 name: 'Ursula von der Leyen',
 title: 'Profile Under Review',
 role: '',
 riskLevel: 'low',
 description: 'Ursula von der Leyen. Profile pending review.',
 education: [],
 affiliations: [
 ],
 controversies: [
 ],
 charges: [],
 relatedInvestigations: [
 ],
 timeline: [
 ],
 socialMedia: [],
 sources: [
 ],
 aliases: [],
 knownAssociates: [
 ],
 },







};

export default profiles;
