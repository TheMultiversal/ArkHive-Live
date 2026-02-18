'use client';

import { create } from 'zustand';

// ============================================================
// Types
// ============================================================

interface Entity {
  id: string;
  slug: string;
  name: string;
  type: 'agency' | 'corporation' | 'individual' | 'organization';
  description: string;
  riskLevel: 'critical' | 'high' | 'medium' | 'low';
  status: 'active' | 'inactive' | 'under-investigation' | 'cleared';
  connections: number;
  investigations: string[];
  metadata: Record<string, unknown>;
  createdAt: Date;
  updatedAt: Date;
}

interface EntityFilters {
  search: string;
  types: string[];
  riskLevels: string[];
  status: string[];
  sortBy: 'name' | 'risk' | 'connections' | 'date';
  sortOrder: 'asc' | 'desc';
}

interface EntityState {
  entities: Entity[];
  selectedEntity: Entity | null;
  filters: EntityFilters;
  loading: boolean;
  error: string | null;
  
  // Actions
  setEntities: (entities: Entity[]) => void;
  addEntity: (entity: Entity) => void;
  updateEntity: (id: string, updates: Partial<Entity>) => void;
  removeEntity: (id: string) => void;
  selectEntity: (entity: Entity | null) => void;
  setFilters: (filters: Partial<EntityFilters>) => void;
  resetFilters: () => void;
  setLoading: (loading: boolean) => void;
  setError: (error: string | null) => void;
}

// ============================================================
// Initial Filters
// ============================================================

const initialFilters: EntityFilters = {
  search: '',
  types: [],
  riskLevels: [],
  status: [],
  sortBy: 'name',
  sortOrder: 'asc',
};

// ============================================================
// Store Definition
// ============================================================

export const useEntityStore = create<EntityState>((set) => ({
  entities: [],
  selectedEntity: null,
  filters: initialFilters,
  loading: false,
  error: null,

  // Set all entities
  setEntities: (entities) =>
    set({ entities, loading: false, error: null }),

  // Add entity
  addEntity: (entity) =>
    set((state) => ({
      entities: [entity, ...state.entities],
    })),

  // Update entity
  updateEntity: (id, updates) =>
    set((state) => ({
      entities: state.entities.map((ent) =>
        ent.id === id
          ? { ...ent, ...updates, updatedAt: new Date() }
          : ent
      ),
      selectedEntity:
        state.selectedEntity?.id === id
          ? { ...state.selectedEntity, ...updates, updatedAt: new Date() }
          : state.selectedEntity,
    })),

  // Remove entity
  removeEntity: (id) =>
    set((state) => ({
      entities: state.entities.filter((ent) => ent.id !== id),
      selectedEntity:
        state.selectedEntity?.id === id ? null : state.selectedEntity,
    })),

  // Select entity
  selectEntity: (entity) =>
    set({ selectedEntity: entity }),

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

export const selectFilteredEntities = (state: EntityState) => {
  let filtered = [...state.entities];
  const { search, types, riskLevels, status, sortBy, sortOrder } = state.filters;

  // Search filter
  if (search) {
    const searchLower = search.toLowerCase();
    filtered = filtered.filter(
      (ent) =>
        ent.name.toLowerCase().includes(searchLower) ||
        ent.description.toLowerCase().includes(searchLower)
    );
  }

  // Type filter
  if (types.length > 0) {
    filtered = filtered.filter((ent) => types.includes(ent.type));
  }

  // Risk level filter
  if (riskLevels.length > 0) {
    filtered = filtered.filter((ent) => riskLevels.includes(ent.riskLevel));
  }

  // Status filter
  if (status.length > 0) {
    filtered = filtered.filter((ent) => status.includes(ent.status));
  }

  // Sorting
  filtered.sort((a, b) => {
    let comparison = 0;
    switch (sortBy) {
      case 'name':
        comparison = a.name.localeCompare(b.name);
        break;
      case 'risk':
        const riskOrder = { critical: 1, high: 2, medium: 3, low: 4 };
        comparison = riskOrder[a.riskLevel] - riskOrder[b.riskLevel];
        break;
      case 'connections':
        comparison = a.connections - b.connections;
        break;
      case 'date':
        comparison = a.createdAt.getTime() - b.createdAt.getTime();
        break;
    }
    return sortOrder === 'asc' ? comparison : -comparison;
  });

  return filtered;
};

export const selectEntitiesByType = (type: Entity['type']) =>
  (state: EntityState) =>
    state.entities.filter((ent) => ent.type === type);

export const selectEntityById = (id: string) =>
  (state: EntityState) =>
    state.entities.find((ent) => ent.id === id);

export const selectEntityBySlug = (slug: string) =>
  (state: EntityState) =>
    state.entities.find((ent) => ent.slug === slug);

export default useEntityStore;
