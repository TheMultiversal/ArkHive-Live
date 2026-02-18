'use client';

import { useFetch } from './useFetch';
import { ROUTES } from '@/lib/routes';

// ============================================================
// Types
// ============================================================

interface Investigation {
  id: string;
  slug: string;
  title: string;
  summary: string;
  description: string;
  severity: 'critical' | 'high' | 'medium' | 'low';
  status: 'active' | 'pending' | 'closed' | 'archived';
  tags: string[];
  createdAt: Date;
  updatedAt: Date;
}

interface InvestigationsResponse {
  data: Investigation[];
  pagination: {
    page: number;
    limit: number;
    total: number;
    totalPages: number;
    hasMore: boolean;
  };
}

interface UseInvestigationsOptions {
  page?: number;
  limit?: number;
  severity?: string;
  status?: string;
  search?: string;
  tag?: string;
}

// ============================================================
// useInvestigations Hook
// ============================================================

export function useInvestigations(options: UseInvestigationsOptions = {}) {
  const params = new URLSearchParams();
  
  if (options.page) params.set('page', String(options.page));
  if (options.limit) params.set('limit', String(options.limit));
  if (options.severity) params.set('severity', options.severity);
  if (options.status) params.set('status', options.status);
  if (options.search) params.set('search', options.search);
  if (options.tag) params.set('tag', options.tag);

  const queryString = params.toString();
  const url = `${ROUTES.API.INVESTIGATIONS}${queryString ? `?${queryString}` : ''}`;

  return useFetch<InvestigationsResponse>(url, {
    cache: true,
    cacheTime: 60000, // 1 minute
  });
}

// ============================================================
// useInvestigation Hook
// ============================================================

export function useInvestigation(idOrSlug: string | null) {
  const url = idOrSlug 
    ? `${ROUTES.API.INVESTIGATIONS}?${idOrSlug.startsWith('inv_') ? 'id' : 'slug'}=${idOrSlug}`
    : null;

  return useFetch<Investigation>(url, {
    cache: true,
    cacheTime: 120000, // 2 minutes
  });
}

export default useInvestigations;
