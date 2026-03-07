// Investigation data shard
import type { InvestigationData } from './types';

const investigations_1: Record<string, InvestigationData> = {
  '1980s-insider-trading': {
 title: '1980s Insider Trading Scandals',
 subtitle: 'Wall Street insider trading ring involving Ivan Boesky, Michael Milken, and others that defined an e',
 severity: 'high',
 category: 'Financial Crime',
 date: 'February 3, 2012',
 lastUpdated: 'June 15, 2014',
 summary: 'Wall Street insider trading ring involving Ivan Boesky, Michael Milken, and others that defined an era of financial excess and regulatory failure.',
 content: [
 'Ivan Boesky paid $100 million in fines after admitting to insider trading in 1986. His cooperation led to the prosecution of Michael Milken.',
 'Michael Milken, the "junk bond king," was indicted on 98 counts of racketeering and securities fraud. He pleaded guilty to six felonies and paid $600 million in fines.',
 'The scandals exposed systemic corruption on Wall Street and led to the passage of the Insider Trading Sanctions Act and stricter SEC enforcement.',
 ],
 tags: ['Financial Crime', 'Investigation', 'Accountability'],
 sources: [
 { title: 'Public Records', url: 'https://www.documentcloud.org/', type: 'Government' },
 ],
 affiliations: [],
 },
  '1mdb-scandal': {
 title: '1MDB Sovereign Wealth Fund Scandal',
 subtitle: 'Billions stolen from Malaysian sovereign wealth fund 1MDB involving global banks, politicians, and G',
 severity: 'critical',
 category: 'Financial Crime',
 date: 'December 19, 2022',
 lastUpdated: 'August 4, 2023',
 summary: 'Billions stolen from Malaysian sovereign wealth fund 1MDB involving global banks, politicians, and Goldman Sachs.',
 content: [
 'The 1Malaysia Development Berhad (1MDB) scandal involved the misappropriation of over $4.5 billion from the Malaysian sovereign wealth fund.',
 'Goldman Sachs paid $2.9 billion in penalties for its role in underwriting bonds that facilitated the theft. Former PM Najib Razak was convicted and sentenced to 12 years.',
 'The DOJ described it as the largest kleptocracy case in history, with stolen funds used to purchase luxury real estate, yachts, artwork, and finance the film "The Wolf of Wall Street."',
 ],
 tags: ['Financial Crime', 'Fraud', 'Investigation', 'Accountability'],
 sources: [
 { title: 'Public Records', url: 'https://www.documentcloud.org/', type: 'Government' },
 ],
 affiliations: [],
 },
};

export default investigations_1;
