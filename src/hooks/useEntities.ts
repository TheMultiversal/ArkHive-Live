'use client';

import { useFetch } from './useFetch';
import { ROUTES } from '@/lib/routes';

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
  status: 'active' | 'inactive' | 'under_investigation' | 'cleared';
  tags: string[];
  createdAt: Date;
  updatedAt: Date;
}

interface EntitiesResponse {
  data: Entity[];
  pagination: {
    page: number;
    limit: number;
    total: number;
    totalPages: number;
    hasMore: boolean;
  };
}

interface UseEntitiesOptions {
  page?: number;
  limit?: number;
  type?: string;
  riskLevel?: string;
  status?: string;
  search?: string;
  tag?: string;
}

// ============================================================
// useEntities Hook
// ============================================================

export function useEntities(options: UseEntitiesOptions = {}) {
  const params = new URLSearchParams();
  
  if (options.page) params.set('page', String(options.page));
  if (options.limit) params.set('limit', String(options.limit));
  if (options.type) params.set('type', options.type);
  if (options.riskLevel) params.set('riskLevel', options.riskLevel);
  if (options.status) params.set('status', options.status);
  if (options.search) params.set('search', options.search);
  if (options.tag) params.set('tag', options.tag);

  const queryString = params.toString();
  const url = `${ROUTES.API.ENTITIES}${queryString ? `?${queryString}` : ''}`;

  return useFetch<EntitiesResponse>(url, {
    cache: true,
    cacheTime: 60000,
  });
}

// ============================================================
// useEntity Hook
// ============================================================

export function useEntity(idOrSlug: string | null) {
  const url = idOrSlug 
    ? `${ROUTES.API.ENTITIES}?${idOrSlug.startsWith('entity_') ? 'id' : 'slug'}=${idOrSlug}`
    : null;

  return useFetch<Entity>(url, {
    cache: true,
    cacheTime: 120000,
  });
}

export default useEntities;
