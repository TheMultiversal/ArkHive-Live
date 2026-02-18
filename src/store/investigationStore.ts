'use client';

import { create } from 'zustand';

// ============================================================
// Types
// ============================================================

interface Investigation {
  id: string;
  slug: string;
  title: string;
  description: string;
  severity: 'critical' | 'high' | 'medium' | 'low';
  status: 'active' | 'ongoing' | 'concluded' | 'archived';
  startDate: Date;
  endDate?: Date;
  tags: string[];
  entities: string[];
  documents: number;
  connections: number;
  createdAt: Date;
  updatedAt: Date;
}

interface InvestigationFilters {
  search: string;
  severity: string[];
  status: string[];
  tags: string[];
  dateRange: {
    start: Date | null;
    end: Date | null;
  };
  sortBy: 'date' | 'severity' | 'title' | 'connections';
  sortOrder: 'asc' | 'desc';
}

interface InvestigationState {
  investigations: Investigation[];
  selectedInvestigation: Investigation | null;
  filters: InvestigationFilters;
  loading: boolean;
  error: string | null;
  
  // Actions
  setInvestigations: (investigations: Investigation[]) => void;
  addInvestigation: (investigation: Investigation) => void;
  updateInvestigation: (id: string, updates: Partial<Investigation>) => void;
  removeInvestigation: (id: string) => void;
  selectInvestigation: (investigation: Investigation | null) => void;
  setFilters: (filters: Partial<InvestigationFilters>) => void;
  resetFilters: () => void;
  setLoading: (loading: boolean) => void;
  setError: (error: string | null) => void;
}

// ============================================================
// Initial Filters
// ============================================================

const initialFilters: InvestigationFilters = {
  search: '',
  severity: [],
  status: [],
  tags: [],
  dateRange: {
    start: null,
    end: null,
  },
  sortBy: 'date',
  sortOrder: 'desc',
};

// ============================================================
// Store Definition
// ============================================================

export const useInvestigationStore = create<InvestigationState>((set) => ({
  investigations: [],
  selectedInvestigation: null,
  filters: initialFilters,
  loading: false,
  error: null,

  // Set all investigations
  setInvestigations: (investigations) =>
    set({ investigations, loading: false, error: null }),

  // Add investigation
  addInvestigation: (investigation) =>
    set((state) => ({
      investigations: [investigation, ...state.investigations],
    })),

  // Update investigation
  updateInvestigation: (id, updates) =>
    set((state) => ({
      investigations: state.investigations.map((inv) =>
        inv.id === id
          ? { ...inv, ...updates, updatedAt: new Date() }
          : inv
      ),
      selectedInvestigation:
        state.selectedInvestigation?.id === id
          ? { ...state.selectedInvestigation, ...updates, updatedAt: new Date() }
          : state.selectedInvestigation,
    })),

  // Remove investigation
  removeInvestigation: (id) =>
    set((state) => ({
      investigations: state.investigations.filter((inv) => inv.id !== id),
      selectedInvestigation:
        state.selectedInvestigation?.id === id ? null : state.selectedInvestigation,
    })),

  // Select investigation
  selectInvestigation: (investigation) =>
    set({ selectedInvestigation: investigation }),

  // Set filters
  setFilters: (filters) =>
    set((state) => ({
      filters: { ...state.filters, ...filters },
    })),

  // Reset filters
  resetFilters: () => set({ filters: initialFilters }),

  // Loading/Error
  setLoading: (loading) => set({ loading }),
  setError: (error) => set({ error, loading: false }),
}));

// ============================================================
// Selectors
// ============================================================

export const selectFilteredInvestigations = (state: InvestigationState) => {
  let filtered = [...state.investigations];
  const { search, severity, status, tags, dateRange, sortBy, sortOrder } = state.filters;

  // Search filter
  if (search) {
    const searchLower = search.toLowerCase();
    filtered = filtered.filter(
      (inv) =>
        inv.title.toLowerCase().includes(searchLower) ||
        inv.description.toLowerCase().includes(searchLower)
    );
  }

  // Severity filter
  if (severity.length > 0) {
    filtered = filtered.filter((inv) => severity.includes(inv.severity));
  }

  // Status filter
  if (status.length > 0) {
    filtered = filtered.filter((inv) => status.includes(inv.status));
  }

  // Tags filter
  if (tags.length > 0) {
    filtered = filtered.filter((inv) =>
      tags.some((tag) => inv.tags.includes(tag))
    );
  }

  // Date range filter
  if (dateRange.start) {
    filtered = filtered.filter((inv) => inv.startDate >= dateRange.start!);
  }
  if (dateRange.end) {
    filtered = filtered.filter((inv) => inv.startDate <= dateRange.end!);
  }

  // Sorting
  filtered.sort((a, b) => {
    let comparison = 0;
    switch (sortBy) {
      case 'date':
        comparison = a.startDate.getTime() - b.startDate.getTime();
        break;
      case 'severity':
        const severityOrder = { critical: 1, high: 2, medium: 3, low: 4 };
        comparison = severityOrder[a.severity] - severityOrder[b.severity];
        break;
      case 'title':
        comparison = a.title.localeCompare(b.title);
        break;
      case 'connections':
        comparison = a.connections - b.connections;
        break;
    }
    return sortOrder === 'asc' ? comparison : -comparison;
  });

  return filtered;
};

export const selectInvestigationById = (id: string) =>
  (state: InvestigationState) =>
    state.investigations.find((inv) => inv.id === id);

export const selectInvestigationBySlug = (slug: string) =>
  (state: InvestigationState) =>
    state.investigations.find((inv) => inv.slug === slug);

export default useInvestigationStore;
