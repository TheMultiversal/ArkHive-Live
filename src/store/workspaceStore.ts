'use client';

import { create } from 'zustand';
import { 
 Workspace, 
 WorkspaceMember, 
 WorkspaceMessage, 
 Evidence, 
 WorkspaceDocument,
 WorkspaceTimeline,
 ResearchTask,
 WorkspaceRole,
 EvidenceCategory
} from '@/types/workspace';

// Import extended workspace data
import { extendedWorkspaces } from './workspaceData';
import { extendedWorkspaces2 } from './workspaceData2';
import { extendedWorkspaces3 } from './workspaceData3';
import { extendedWorkspaces4 } from './workspaceData4';

// Mock data for demonstration
const mockMembers: WorkspaceMember[] = [
 {
 id: '1',
 name: 'Sarah Chen',
 role: 'owner',
 joinedAt: new Date('2024-01-15'),
 lastActive: new Date(),
 contributions: 247,
 isOnline: true,
 expertise: ['Data Analysis', 'FOIA Requests'],
 },
 {
 id: '2',
 name: 'Marcus Rivera',
 role: 'admin',
 joinedAt: new Date('2024-02-01'),
 lastActive: new Date(),
 contributions: 189,
 isOnline: true,
 expertise: ['Government Affairs', 'Legal Research'],
 },
 {
 id: '3',
 name: 'Dr. Emily Watson',
 role: 'investigator',
 joinedAt: new Date('2024-02-15'),
 lastActive: new Date(Date.now() - 3600000),
 contributions: 156,
 isOnline: false,
 expertise: ['Toxicology', 'Environmental Science'],
 },
 {
 id: '4',
 name: 'James Mitchell',
 role: 'researcher',
 joinedAt: new Date('2024-03-01'),
 lastActive: new Date(Date.now() - 7200000),
 contributions: 89,
 isOnline: true,
 expertise: ['Open Source Intelligence', 'Document Analysis'],
 },
 {
 id: '5',
 name: 'Anonymous Contributor',
 role: 'viewer',
 joinedAt: new Date('2024-03-15'),
 lastActive: new Date(Date.now() - 86400000),
 contributions: 12,
 isOnline: false,
 },
];

const mockMessages: WorkspaceMessage[] = [
 {
 id: 'm1',
 authorId: '1',
 authorName: 'Sarah Chen',
 content: 'Just uploaded the new batch of FOIA documents. Check the document library for the EPA correspondence from 2019-2022.',
 type: 'text',
 timestamp: new Date(Date.now() - 3600000),
 isPinned: true,
 },
 {
 id: 'm2',
 authorId: '2',
 authorName: 'Marcus Rivera',
 content: 'Great find! I cross-referenced with the internal memos and there are some concerning discrepancies.',
 type: 'text',
 timestamp: new Date(Date.now() - 3000000),
 },
 {
 id: 'm3',
 authorId: '3',
 authorName: 'Dr. Emily Watson',
 content: 'The toxicology reports show levels 15x above the reported "safe" thresholds. Adding this to the evidence board.',
 type: 'text',
 timestamp: new Date(Date.now() - 2400000),
 },
 {
 id: 'm4',
 authorId: '1',
 authorName: 'System',
 content: 'Dr. Emily Watson added new evidence:"Toxicology Report Analysis Q3 2021"',
 type: 'system',
 timestamp: new Date(Date.now() - 2300000),
 },
 {
 id: 'm5',
 authorId: '4',
 authorName: 'James Mitchell',
 content: 'Found satellite imagery showing the unreported discharge events. Uploading now.',
 type: 'text',
 timestamp: new Date(Date.now() - 1800000),
 },
 {
 id: 'm6',
 authorId: '2',
 authorName: 'Marcus Rivera',
 content: 'This is huge. We need to verify the dates match the internal communications.',
 type: 'text',
 timestamp: new Date(Date.now() - 1200000),
 },
 {
 id: 'm7',
 authorId: '1',
 authorName: 'Sarah Chen',
 content: 'Everyone, let\'s focus on building the timeline for the next 48 hours. We\'re getting close to having enough for publication.',
 type: 'text',
 timestamp: new Date(Date.now() - 600000),
 isPinned: true,
 },
];

const mockEvidence: Evidence[] = [
 {
 id: 'e1',
 title: 'EPA Internal Memo, Suppressed Findings',
 description: 'Internal memorandum revealing knowledge of contamination levels prior to public disclosure',
 type: 'document',
 category: 'verified',
 verificationStatus: 'verified',
 source: 'FOIA Request #2024-EPA-00847',
 addedAt: new Date('2024-02-20'),
 addedBy: '1',
 addedByName: 'Sarah Chen',
 tags: ['EPA', 'Suppression', 'Internal Communications'],
 connections: ['e2', 'e3'],
 verifiedBy: ['2', '3'],
 position: { x: 100, y: 100 },
 },
 {
 id: 'e2',
 title: 'Toxicology Report, Flint Water Supply',
 description: 'Laboratory analysis showing lead levels significantly above federal limits',
 type: 'document',
 category: 'verified',
 verificationStatus: 'verified',
 source: 'Independent Laboratory Analysis',
 addedAt: new Date('2024-02-22'),
 addedBy: '3',
 addedByName: 'Dr. Emily Watson',
 tags: ['Toxicology', 'Lead Contamination', 'Water Quality'],
 connections: ['e1', 'e4'],
 verifiedBy: ['1', '2'],
 position: { x: 300, y: 150 },
 },
 {
 id: 'e3',
 title: 'Corporate-Government Email Chain',
 description: 'Email correspondence between industry lobbyists and EPA officials',
 type: 'document',
 category: 'primary',
 verificationStatus: 'pending',
 source: 'Whistleblower Submission',
 addedAt: new Date('2024-03-01'),
 addedBy: '2',
 addedByName: 'Marcus Rivera',
 tags: ['Lobbying', 'Corruption', 'Email'],
 connections: ['e1'],
 position: { x: 200, y: 300 },
 },
 {
 id: 'e4',
 title: 'Satellite Imagery, Discharge Events',
 description: 'Satellite images showing unreported industrial discharge into water supply',
 type: 'image',
 category: 'supporting',
 verificationStatus: 'verified',
 source: 'Sentinel-2 Satellite Data',
 sourceUrl: 'https://scihub.copernicus.eu',
 addedAt: new Date('2024-03-10'),
 addedBy: '4',
 addedByName: 'James Mitchell',
 tags: ['Satellite', 'Environmental', 'Visual Evidence'],
 connections: ['e2'],
 position: { x: 500, y: 200 },
 },
 {
 id: 'e5',
 title: 'Whistleblower Testimony',
 description: 'Recorded testimony from former facility employee',
 type: 'audio',
 category: 'primary',
 verificationStatus: 'pending',
 source: 'Anonymous Source',
 addedAt: new Date('2024-03-15'),
 addedBy: '1',
 addedByName: 'Sarah Chen',
 tags: ['Testimony', 'Whistleblower', 'Audio'],
 connections: ['e1', 'e3'],
 position: { x: 400, y: 400 },
 },
];

const mockDocuments: WorkspaceDocument[] = [
 {
 id: 'd1',
 name: 'EPA_FOIA_Response_2024.pdf',
 type: 'application/pdf',
 size: 2456789,
 url: '#',
 uploadedBy: '1',
 uploadedByName: 'Sarah Chen',
 uploadedAt: new Date('2024-02-20'),
 folder: 'FOIA Documents',
 category: 'FOIA Documents',
 description: 'Complete FOIA response package from EPA',
 downloads: 45,
 isPublic: false,
 },
 {
 id: 'd2',
 name: 'Toxicology_Analysis_Report.pdf',
 type: 'application/pdf',
 size: 1234567,
 url: '#',
 uploadedBy: '3',
 uploadedByName: 'Dr. Emily Watson',
 uploadedAt: new Date('2024-02-22'),
 folder: 'Scientific Reports',
 category: 'Scientific Reports',
 description: 'Independent toxicology analysis',
 downloads: 38,
 isPublic: false,
 },
 {
 id: 'd3',
 name: 'Timeline_Master_Doc.xlsx',
 type: 'application/vnd.ms-excel',
 size: 567890,
 url: '#',
 uploadedBy: '2',
 uploadedByName: 'Marcus Rivera',
 uploadedAt: new Date('2024-03-01'),
 folder: 'Research Materials',
 category: 'Research Materials',
 description: 'Master timeline of events',
 downloads: 67,
 isPublic: false,
 },
 {
 id: 'd4',
 name: 'Satellite_Images_March2024.zip',
 type: 'application/zip',
 size: 45678901,
 url: '#',
 uploadedBy: '4',
 uploadedByName: 'James Mitchell',
 uploadedAt: new Date('2024-03-10'),
 folder: 'Visual Evidence',
 category: 'Visual Evidence',
 description: 'Satellite imagery package',
 downloads: 23,
 isPublic: false,
 },
];

const mockTimeline: WorkspaceTimeline[] = [
 {
 id: 't1',
 date: new Date('2019-03-15'),
 title: 'First Internal Warning',
 description: 'Internal memo warns of potential contamination issues',
 evidenceIds: ['e1'],
 addedBy: '1',
 importance: 'major',
 },
 {
 id: 't2',
 date: new Date('2019-08-22'),
 title: 'Contamination Levels Exceed Limits',
 description: 'Lab tests confirm levels 15x above safe thresholds',
 evidenceIds: ['e2'],
 addedBy: '3',
 importance: 'major',
 },
 {
 id: 't3',
 date: new Date('2020-01-10'),
 title: 'Industry Lobbyist Meeting',
 description: 'Email chain reveals meeting between EPA officials and industry representatives',
 evidenceIds: ['e3'],
 addedBy: '2',
 importance: 'major',
 },
 {
 id: 't4',
 date: new Date('2021-06-05'),
 title: 'Satellite Captures Discharge Event',
 description: 'Unreported discharge event captured by satellite',
 evidenceIds: ['e4'],
 addedBy: '4',
 importance: 'minor',
 },
 {
 id: 't5',
 date: new Date('2024-02-01'),
 title: 'Whistleblower Comes Forward',
 description: 'Former employee provides testimony and documents',
 evidenceIds: ['e5'],
 addedBy: '1',
 importance: 'major',
 },
];

const mockTasks: ResearchTask[] = [
 {
 id: 'task1',
 title: 'Verify satellite imagery dates',
 description: 'Cross-reference satellite imagery timestamps with internal communications',
 assignedTo: ['4'],
 status: 'in-progress',
 priority: 'high',
 createdBy: '1',
 createdAt: new Date('2024-03-12'),
 dueDate: new Date('2024-03-20'),
 },
 {
 id: 'task2',
 title: 'Complete toxicology analysis review',
 description: 'Review and annotate all toxicology reports for publication',
 assignedTo: ['3'],
 status: 'completed',
 priority: 'critical',
 createdBy: '1',
 createdAt: new Date('2024-02-25'),
 completedAt: new Date('2024-03-05'),
 },
 {
 id: 'task3',
 title: 'Prepare FOIA follow-up request',
 description: 'Draft additional FOIA requests based on initial findings',
 assignedTo: ['1', '2'],
 status: 'pending',
 priority: 'medium',
 createdBy: '2',
 createdAt: new Date('2024-03-10'),
 },
];

const mockWorkspaces: Workspace[] = [
 {
 id: 'ws1',
 name: 'Water Contamination Cover-Up Investigation',
 description: 'Investigating the systematic suppression of water quality data and corporate-government collusion in environmental enforcement.',
 investigation: 'water-contamination-coverup',
 status: 'active',
 priority: 'critical',
 visibility: 'private',
 createdAt: new Date('2024-01-15'),
 updatedAt: new Date(),
 createdBy: '1',
 members: mockMembers,
 messages: mockMessages,
 evidence: mockEvidence,
 documents: mockDocuments,
 timeline: mockTimeline,
 tasks: mockTasks,
 tags: ['Environmental', 'EPA', 'Water Quality', 'Cover-Up'],
 isPublic: false,
 viewCount: 1247,
 lastActivity: new Date(),
 milestones: [
 { id: 'ms1', title: 'Initial FOIA Request Filed', description: 'Submit initial FOIA request to EPA', isCompleted: true, completedAt: new Date('2024-01-20') },
 { id: 'ms2', title: 'Evidence Collection Phase', description: 'Gather all primary source documents', isCompleted: true, completedAt: new Date('2024-02-28') },
 { id: 'ms3', title: 'Verification & Cross-Reference', description: 'Verify all evidence and cross-reference sources', isCompleted: false },
 { id: 'ms4', title: 'Draft Report', description: 'Prepare initial investigation report', isCompleted: false },
 ],
 },
 {
 id: 'ws2',
 name: 'Pharmaceutical Price Fixing Investigation',
 description: 'Documenting evidence of coordinated price manipulation and regulatory capture in the pharmaceutical industry.',
 investigation: 'pharma-price-fixing',
 status: 'active',
 priority: 'high',
 visibility: 'team',
 createdAt: new Date('2024-02-01'),
 updatedAt: new Date(Date.now() - 86400000),
 createdBy: '2',
 members: mockMembers.slice(0, 3),
 messages: [
 { id: 'pm1', authorId: '2', authorName: 'Marcus Rivera', content: 'Found pricing data from Senate HELP Committee hearings. Multiple pharma CEOs testified under oath about pricing decisions.', type: 'text' as const, timestamp: new Date(Date.now() - 7200000), isPinned: true },
 { id: 'pm2', authorId: '1', authorName: 'Sarah Chen', content: 'Cross-referencing with SEC filings. Several companies show suspicious timing of price increases right after acquiring competitors.', type: 'text' as const, timestamp: new Date(Date.now() - 6000000) },
 { id: 'pm3', authorId: '3', authorName: 'Dr. Emily Watson', content: 'The insulin price analysis is damning. Three companies control 90% of the market and prices moved in lockstep for over a decade.', type: 'text' as const, timestamp: new Date(Date.now() - 4800000) },
 { id: 'pm4', authorId: '1', authorName: 'System', content: 'Marcus Rivera uploaded new document:"Senate_HELP_Pricing_Testimony.pdf"', type: 'system' as const, timestamp: new Date(Date.now() - 3600000) },
 { id: 'pm5', authorId: '2', authorName: 'Marcus Rivera', content: 'Eli Lilly, Novo Nordisk, and Sanofi all raised insulin list prices by similar percentages within weeks of each other. This pattern repeated dozens of times between 2009 and 2019.', type: 'text' as const, timestamp: new Date(Date.now() - 2400000) },
 ],
 evidence: [
 { id: 'pe1', title: 'Insulin Pricing Parallel Analysis', description: 'Chart showing coordinated insulin price increases across Eli Lilly, Novo Nordisk, and Sanofi from 2009-2023', type: 'document', category: 'verified' as const, verificationStatus: 'verified' as const, source: 'Senate HELP Committee Data', addedAt: new Date('2024-03-01'), addedBy: '2', addedByName: 'Marcus Rivera', tags: ['Insulin', 'Price Fixing', 'Parallel Pricing'], connections: ['pe2'], verifiedBy: ['1', '3'], position: { x: 100, y: 100 } },
 { id: 'pe2', title: 'PBM Rebate Structure Analysis', description: 'Analysis of pharmacy benefit manager rebate structures that incentivize higher list prices', type: 'document', category: 'primary' as const, verificationStatus: 'verified' as const, source: 'FTC Interim Report on PBMs', addedAt: new Date('2024-03-10'), addedBy: '1', addedByName: 'Sarah Chen', tags: ['PBM', 'Rebates', 'Market Structure'], connections: ['pe1'], verifiedBy: ['2'], position: { x: 300, y: 150 } },
 { id: 'pe3', title: 'Patient Death Records from Price Rationing', description: 'Documented cases of patients dying after rationing insulin due to cost', type: 'document', category: 'verified' as const, verificationStatus: 'verified' as const, source: 'T1International Patient Reports', addedAt: new Date('2024-03-15'), addedBy: '3', addedByName: 'Dr. Emily Watson', tags: ['Patient Deaths', 'Insulin Rationing'], connections: ['pe1'], verifiedBy: ['1', '2'], position: { x: 200, y: 300 } },
 ],
 documents: [
 { id: 'pd1', name: 'Senate_HELP_Pricing_Testimony.pdf', type: 'application/pdf', size: 3456789, url: '#', uploadedBy: '2', uploadedByName: 'Marcus Rivera', uploadedAt: new Date('2024-03-05'), folder: 'Congressional Records', category: 'Congressional Records', description: 'Full testimony transcripts from pharma CEO hearings', downloads: 34, isPublic: false },
 { id: 'pd2', name: 'FTC_PBM_Interim_Report.pdf', type: 'application/pdf', size: 2345678, url: '#', uploadedBy: '1', uploadedByName: 'Sarah Chen', uploadedAt: new Date('2024-03-10'), folder: 'Government Reports', category: 'Government Reports', description: 'FTC findings on PBM market concentration', downloads: 28, isPublic: false },
 { id: 'pd3', name: 'Insulin_Price_Timeline_2009_2023.xlsx', type: 'application/vnd.ms-excel', size: 567890, url: '#', uploadedBy: '3', uploadedByName: 'Dr. Emily Watson', uploadedAt: new Date('2024-03-12'), folder: 'Data Analysis', category: 'Data Analysis', description: 'Comprehensive insulin price data with manufacturer comparison', downloads: 42, isPublic: false },
 ],
 timeline: [
 { id: 'pt1', date: new Date('2009-01-01'), title: 'Insulin Price Escalation Begins', description: 'Coordinated price increases begin across all three major insulin manufacturers', evidenceIds: ['pe1'], addedBy: '2', importance: 'major' as const },
 { id: 'pt2', date: new Date('2019-04-02'), title: 'Senate Hearing on Drug Pricing', description: 'Senate HELP Committee grills insulin manufacturers on parallel pricing', evidenceIds: ['pe1'], addedBy: '2', importance: 'major' as const },
 { id: 'pt3', date: new Date('2024-01-16'), title: 'FTC Report on PBMs', description: 'FTC releases damning interim report on pharmacy benefit manager practices', evidenceIds: ['pe2'], addedBy: '1', importance: 'major' as const },
 ],
 tasks: [],
 tags: ['Pharmaceutical', 'Price Fixing', 'Healthcare', 'Antitrust'],
 isPublic: false,
 viewCount: 892,
 lastActivity: new Date(Date.now() - 86400000),
 milestones: [
 { id: 'ms1', title: 'Initial Research', description: 'Gather publicly available data', isCompleted: true, completedAt: new Date('2024-02-15') },
 { id: 'ms2', title: 'Source Development', description: 'Develop industry sources', isCompleted: false },
 ],
 },
 {
 id: 'ws3',
 name: 'Surveillance Technology Export Investigation',
 description: 'Tracking the export of surveillance technology to authoritarian regimes and potential human rights violations.',
 investigation: 'surveillance-exports',
 status: 'active',
 priority: 'high',
 visibility: 'private',
 createdAt: new Date('2024-03-01'),
 updatedAt: new Date(Date.now() - 172800000),
 createdBy: '1',
 members: mockMembers.slice(0, 4),
 messages: [
 { id: 'sm1', authorId: '1', authorName: 'Sarah Chen', content: 'NSO Group Pegasus spyware sales to Saudi Arabia and UAE confirmed through leaked contracts. Both used it against journalists and dissidents.', type: 'text' as const, timestamp: new Date(Date.now() - 86400000), isPinned: true },
 { id: 'sm2', authorId: '4', authorName: 'James Mitchell', content: 'Tracked Cellebrite phone-cracking tech exports to Bangladesh, Belarus, and Myanmar military. All have documented human rights abuses.', type: 'text' as const, timestamp: new Date(Date.now() - 72000000) },
 { id: 'sm3', authorId: '2', authorName: 'Marcus Rivera', content: 'BIS export licenses show dozens of approvals for surveillance tech to countries on the State Dept human rights watch list.', type: 'text' as const, timestamp: new Date(Date.now() - 54000000) },
 { id: 'sm4', authorId: '1', authorName: 'System', content: 'James Mitchell added new evidence:"Cellebrite Export Records"', type: 'system' as const, timestamp: new Date(Date.now() - 48000000) },
 { id: 'sm5', authorId: '3', authorName: 'Dr. Emily Watson', content: 'Found Citizen Lab reports documenting Pegasus infections on phones of 36 Al Jazeera journalists. Traced back to Saudi and UAE operators.', type: 'text' as const, timestamp: new Date(Date.now() - 36000000) },
 ],
 evidence: [
 { id: 'se1', title: 'NSO Group Pegasus Contract, Saudi Arabia', description: 'Leaked contract documents showing NSO Group sale of Pegasus spyware to Saudi intelligence', type: 'document', category: 'verified' as const, verificationStatus: 'verified' as const, source: 'Citizen Lab / The Guardian', addedAt: new Date('2024-03-15'), addedBy: '1', addedByName: 'Sarah Chen', tags: ['NSO Group', 'Pegasus', 'Saudi Arabia'], connections: ['se2'], verifiedBy: ['2', '4'], position: { x: 100, y: 100 } },
 { id: 'se2', title: 'Cellebrite Export Records', description: 'Bureau of Industry and Security records of Cellebrite tech exports to authoritarian regimes', type: 'document', category: 'primary' as const, verificationStatus: 'pending' as const, source: 'BIS FOIA Response', addedAt: new Date('2024-03-20'), addedBy: '4', addedByName: 'James Mitchell', tags: ['Cellebrite', 'Export Controls', 'BIS'], connections: ['se1'], position: { x: 300, y: 200 } },
 { id: 'se3', title: 'Citizen Lab Pegasus Infection Analysis', description: 'Technical analysis confirming Pegasus infections on Al Jazeera journalist devices', type: 'document', category: 'verified' as const, verificationStatus: 'verified' as const, source: 'Citizen Lab / University of Toronto', addedAt: new Date('2024-03-25'), addedBy: '3', addedByName: 'Dr. Emily Watson', tags: ['Citizen Lab', 'Journalists', 'Al Jazeera'], connections: ['se1'], verifiedBy: ['1'], position: { x: 200, y: 350 } },
 ],
 documents: [
 { id: 'sd1', name: 'NSO_Pegasus_Sales_Analysis.pdf', type: 'application/pdf', size: 4567890, url: '#', uploadedBy: '1', uploadedByName: 'Sarah Chen', uploadedAt: new Date('2024-03-16'), folder: 'Pegasus Investigation', category: 'Pegasus Investigation', description: 'Comprehensive analysis of NSO Group clients and Pegasus deployments', downloads: 23, isPublic: false },
 { id: 'sd2', name: 'BIS_Export_License_FOIA.pdf', type: 'application/pdf', size: 1234567, url: '#', uploadedBy: '4', uploadedByName: 'James Mitchell', uploadedAt: new Date('2024-03-20'), folder: 'Government Records', category: 'Government Records', description: 'Bureau of Industry and Security export license approvals', downloads: 15, isPublic: false },
 { id: 'sd3', name: 'Citizen_Lab_Pegasus_Report.pdf', type: 'application/pdf', size: 2345678, url: '#', uploadedBy: '3', uploadedByName: 'Dr. Emily Watson', uploadedAt: new Date('2024-03-25'), folder: 'Technical Analysis', category: 'Technical Analysis', description: 'Citizen Lab technical report on Pegasus infections', downloads: 31, isPublic: false },
 ],
 timeline: [
 { id: 'st1', date: new Date('2016-08-01'), title: 'NSO Group Targets UAE Activist', description: 'Ahmed Mansoor targeted with Pegasus spyware, discovered by Citizen Lab', evidenceIds: ['se1'], addedBy: '1', importance: 'major' as const },
 { id: 'st2', date: new Date('2018-10-02'), title: 'Khashoggi Murder, Pegasus Connection', description: 'Evidence that Pegasus was used to monitor Khashoggi before his assassination', evidenceIds: ['se1'], addedBy: '2', importance: 'major' as const },
 { id: 'st3', date: new Date('2021-07-18'), title: 'Pegasus Project Published', description: '17 media organizations reveal 50,000+ potential surveillance targets', evidenceIds: ['se1', 'se3'], addedBy: '1', importance: 'major' as const },
 ],
 tasks: [],
 tags: ['Surveillance', 'Technology', 'Human Rights', 'Export Controls'],
 isPublic: false,
 viewCount: 567,
 lastActivity: new Date(Date.now() - 172800000),
 milestones: [],
 },
 {
 id: 'ws4',
 name: 'Food Safety Deregulation Impact',
 description: 'Analyzing the health impacts of reduced food safety inspections and regulatory rollbacks.',
 investigation: 'food-safety-deregulation',
 status: 'paused',
 priority: 'medium',
 visibility: 'public',
 createdAt: new Date('2024-01-20'),
 updatedAt: new Date(Date.now() - 604800000),
 createdBy: '3',
 members: mockMembers.slice(2, 5),
 messages: [
 { id: 'fm1', authorId: '3', authorName: 'Dr. Emily Watson', content: 'FDA inspection data shows a 23% decline in food facility inspections between 2017 and 2020. Simultaneously, foodborne illness outbreaks increased by 18%.', type: 'text' as const, timestamp: new Date(Date.now() - 604800000), isPinned: true },
 { id: 'fm2', authorId: '4', authorName: 'James Mitchell', content: 'Found internal USDA documents showing political appointees overruled career scientists on poultry processing speed limits.', type: 'text' as const, timestamp: new Date(Date.now() - 518400000) },
 { id: 'fm3', authorId: '5', authorName: 'Anonymous Contributor', content: 'Former FSIS inspector confirms plants were allowed to self-police quality control. Inspectors were pressured to not write up violations.', type: 'text' as const, timestamp: new Date(Date.now() - 432000000) },
 ],
 evidence: [
 { id: 'fe1', title: 'FDA Inspection Frequency Data 2015-2023', description: 'Analysis of FDA food facility inspection rates showing steep decline under deregulation', type: 'document', category: 'verified' as const, verificationStatus: 'verified' as const, source: 'FDA FOIA Response / Public Records', addedAt: new Date('2024-02-15'), addedBy: '3', addedByName: 'Dr. Emily Watson', tags: ['FDA', 'Inspections', 'Data Analysis'], connections: ['fe2'], verifiedBy: ['4'], position: { x: 100, y: 100 } },
 { id: 'fe2', title: 'USDA Internal Memo on Line Speeds', description: 'Internal USDA memo where political appointees overruled scientists on poultry line speeds', type: 'document', category: 'primary' as const, verificationStatus: 'pending' as const, source: 'Whistleblower Submission', addedAt: new Date('2024-02-20'), addedBy: '4', addedByName: 'James Mitchell', tags: ['USDA', 'Poultry', 'Line Speeds'], connections: ['fe1'], position: { x: 300, y: 200 } },
 ],
 documents: [
 { id: 'fd1', name: 'FDA_Inspection_Trends_2015_2023.xlsx', type: 'application/vnd.ms-excel', size: 890123, url: '#', uploadedBy: '3', uploadedByName: 'Dr. Emily Watson', uploadedAt: new Date('2024-02-15'), folder: 'Data Analysis', category: 'Data Analysis', description: 'FDA inspection frequency and foodborne illness correlation data', downloads: 19, isPublic: false },
 { id: 'fd2', name: 'USDA_Line_Speed_Internal_Memo.pdf', type: 'application/pdf', size: 456789, url: '#', uploadedBy: '4', uploadedByName: 'James Mitchell', uploadedAt: new Date('2024-02-20'), folder: 'Government Documents', category: 'Government Documents', description: 'Internal USDA correspondence on poultry processing', downloads: 12, isPublic: false },
 ],
 timeline: [
 { id: 'ft1', date: new Date('2017-03-01'), title: 'FDA Budget Cuts Proposed', description: 'Administration proposes significant cuts to FDA food safety budget', evidenceIds: ['fe1'], addedBy: '3', importance: 'major' as const },
 { id: 'ft2', date: new Date('2018-09-01'), title: 'FSIS Self-Policing Expansion', description: 'USDA expands programs allowing meat processors to conduct their own quality inspections', evidenceIds: ['fe2'], addedBy: '4', importance: 'major' as const },
 ],
 tasks: [],
 tags: ['Food Safety', 'FDA', 'Deregulation', 'Public Health'],
 isPublic: true,
 viewCount: 2341,
 lastActivity: new Date(Date.now() - 604800000),
 milestones: [],
 },
];

interface WorkspaceStore {
 workspaces: Workspace[];
 currentWorkspace: Workspace | null;
 isLoading: boolean;
 
 // Actions
 setCurrentWorkspace: (id: string) => void;
 addMessage: (workspaceId: string, message: Omit<WorkspaceMessage, 'id' | 'timestamp'>) => void;
 addEvidence: (workspaceId: string, evidence: Omit<Evidence, 'id' | 'addedAt'>) => void;
 addDocument: (workspaceId: string, document: Omit<WorkspaceDocument, 'id' | 'uploadedAt' | 'downloads'>) => void;
 updateEvidenceCategory: (workspaceId: string, evidenceId: string, category: EvidenceCategory) => void;
 addMember: (workspaceId: string, member: Omit<WorkspaceMember, 'joinedAt' | 'contributions'>) => void;
 updateMemberRole: (workspaceId: string, memberId: string, role: WorkspaceRole) => void;
 createWorkspace: (workspace: Omit<Workspace, 'id' | 'createdAt' | 'updatedAt' | 'lastActivity' | 'viewCount' | 'messages' | 'evidence' | 'documents' | 'timeline' | 'tasks' | 'milestones'>) => Workspace;
 pinMessage: (workspaceId: string, messageId: string) => void;
 toggleTaskStatus: (workspaceId: string, taskId: string) => void;
}

export const useWorkspaceStore = create<WorkspaceStore>((set, get) => ({
 workspaces: [...mockWorkspaces, ...extendedWorkspaces, ...extendedWorkspaces2, ...extendedWorkspaces3, ...extendedWorkspaces4],
 currentWorkspace: null,
 isLoading: false,

 setCurrentWorkspace: (id: string) => {
 const workspace = get().workspaces.find((w) => w.id === id) || null;
 set({ currentWorkspace: workspace });
 },

 addMessage: (workspaceId: string, message) => {
 const newMessage: WorkspaceMessage = {
 ...message,
 id: `m${Date.now()}`,
 timestamp: new Date(),
 };
 
 set((state) => ({
 workspaces: state.workspaces.map((w) =>
 w.id === workspaceId
 ? { ...w, messages: [...w.messages, newMessage], lastActivity: new Date() }
 : w
 ),
 currentWorkspace: state.currentWorkspace?.id === workspaceId
 ? { ...state.currentWorkspace, messages: [...state.currentWorkspace.messages, newMessage], lastActivity: new Date() }
 : state.currentWorkspace,
 }));
 },

 addEvidence: (workspaceId: string, evidence) => {
 const newEvidence: Evidence = {
 ...evidence,
 id: `e${Date.now()}`,
 addedAt: new Date(),
 };
 
 set((state) => ({
 workspaces: state.workspaces.map((w) =>
 w.id === workspaceId
 ? { ...w, evidence: [...w.evidence, newEvidence], lastActivity: new Date() }
 : w
 ),
 currentWorkspace: state.currentWorkspace?.id === workspaceId
 ? { ...state.currentWorkspace, evidence: [...state.currentWorkspace.evidence, newEvidence], lastActivity: new Date() }
 : state.currentWorkspace,
 }));
 },

 addDocument: (workspaceId: string, document) => {
 const newDocument: WorkspaceDocument = {
 ...document,
 id: `d${Date.now()}`,
 uploadedAt: new Date(),
 downloads: 0,
 };
 
 set((state) => ({
 workspaces: state.workspaces.map((w) =>
 w.id === workspaceId
 ? { ...w, documents: [...w.documents, newDocument], lastActivity: new Date() }
 : w
 ),
 currentWorkspace: state.currentWorkspace?.id === workspaceId
 ? { ...state.currentWorkspace, documents: [...state.currentWorkspace.documents, newDocument], lastActivity: new Date() }
 : state.currentWorkspace,
 }));
 },

 updateEvidenceCategory: (workspaceId: string, evidenceId: string, category: EvidenceCategory) => {
 set((state) => ({
 workspaces: state.workspaces.map((w) =>
 w.id === workspaceId
 ? {
 ...w,
 evidence: w.evidence.map((e) =>
 e.id === evidenceId ? { ...e, category } : e
 ),
 }
 : w
 ),
 currentWorkspace: state.currentWorkspace?.id === workspaceId
 ? {
 ...state.currentWorkspace,
 evidence: state.currentWorkspace.evidence.map((e) =>
 e.id === evidenceId ? { ...e, category } : e
 ),
 }
 : state.currentWorkspace,
 }));
 },

 addMember: (workspaceId: string, member) => {
 const newMember: WorkspaceMember = {
 ...member,
 joinedAt: new Date(),
 contributions: 0,
 };
 
 set((state) => ({
 workspaces: state.workspaces.map((w) =>
 w.id === workspaceId
 ? { ...w, members: [...w.members, newMember] }
 : w
 ),
 currentWorkspace: state.currentWorkspace?.id === workspaceId
 ? { ...state.currentWorkspace, members: [...state.currentWorkspace.members, newMember] }
 : state.currentWorkspace,
 }));
 },

 updateMemberRole: (workspaceId: string, memberId: string, role: WorkspaceRole) => {
 set((state) => ({
 workspaces: state.workspaces.map((w) =>
 w.id === workspaceId
 ? {
 ...w,
 members: w.members.map((m) =>
 m.id === memberId ? { ...m, role } : m
 ),
 }
 : w
 ),
 currentWorkspace: state.currentWorkspace?.id === workspaceId
 ? {
 ...state.currentWorkspace,
 members: state.currentWorkspace.members.map((m) =>
 m.id === memberId ? { ...m, role } : m
 ),
 }
 : state.currentWorkspace,
 }));
 },

 createWorkspace: (workspace) => {
 const newWorkspace: Workspace = {
 ...workspace,
 id: `ws${Date.now()}`,
 createdAt: new Date(),
 updatedAt: new Date(),
 lastActivity: new Date(),
 viewCount: 0,
 messages: [],
 evidence: [],
 documents: [],
 timeline: [],
 tasks: [],
 milestones: [],
 };
 
 set((state) => ({
 workspaces: [...state.workspaces, newWorkspace],
 }));
 
 return newWorkspace;
 },

 pinMessage: (workspaceId: string, messageId: string) => {
 set((state) => ({
 workspaces: state.workspaces.map((w) =>
 w.id === workspaceId
 ? {
 ...w,
 messages: w.messages.map((m) =>
 m.id === messageId ? { ...m, isPinned: !m.isPinned } : m
 ),
 }
 : w
 ),
 currentWorkspace: state.currentWorkspace?.id === workspaceId
 ? {
 ...state.currentWorkspace,
 messages: state.currentWorkspace.messages.map((m) =>
 m.id === messageId ? { ...m, isPinned: !m.isPinned } : m
 ),
 }
 : state.currentWorkspace,
 }));
 },

 toggleTaskStatus: (workspaceId: string, taskId: string) => {
 set((state) => ({
 workspaces: state.workspaces.map((w) =>
 w.id === workspaceId
 ? {
 ...w,
 tasks: w.tasks.map((t) =>
 t.id === taskId
 ? {
 ...t,
 status: t.status === 'completed' ? 'pending' : 'completed',
 completedAt: t.status === 'completed' ? undefined : new Date(),
 }
 : t
 ),
 }
 : w
 ),
 currentWorkspace: state.currentWorkspace?.id === workspaceId
 ? {
 ...state.currentWorkspace,
 tasks: state.currentWorkspace.tasks.map((t) =>
 t.id === taskId
 ? {
 ...t,
 status: t.status === 'completed' ? 'pending' : 'completed',
 completedAt: t.status === 'completed' ? undefined : new Date(),
 }
 : t
 ),
 }
 : state.currentWorkspace,
 }));
 },
}));
