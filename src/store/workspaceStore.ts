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
    content: 'Dr. Emily Watson added new evidence: "Toxicology Report Analysis Q3 2021"',
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
    title: 'EPA Internal Memo - Suppressed Findings',
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
    title: 'Toxicology Report - Flint Water Supply',
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
    title: 'Satellite Imagery - Discharge Events',
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
    messages: [],
    evidence: [],
    documents: [],
    timeline: [],
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
    messages: [],
    evidence: [],
    documents: [],
    timeline: [],
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
    messages: [],
    evidence: [],
    documents: [],
    timeline: [],
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
  workspaces: mockWorkspaces,
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
