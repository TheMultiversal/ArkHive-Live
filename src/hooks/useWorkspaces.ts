'use client';

import { useFetch } from './useFetch';
import { ROUTES } from '@/lib/routes';

// ============================================================
// Types
// ============================================================

interface Workspace {
  id: string;
  name: string;
  description: string;
  type: 'investigation' | 'research' | 'collaboration' | 'archive';
  status: 'active' | 'archived' | 'locked';
  createdAt: Date;
  updatedAt: Date;
  members: Array<{
    userId: string;
    role: string;
    joinedAt: Date;
  }>;
}

interface WorkspacesResponse {
  data: Workspace[];
  pagination: {
    page: number;
    limit: number;
    total: number;
    totalPages: number;
    hasMore: boolean;
  };
}

interface UseWorkspacesOptions {
  page?: number;
  limit?: number;
  type?: string;
  status?: string;
  userId?: string;
}

// ============================================================
// useWorkspaces Hook
// ============================================================

export function useWorkspaces(options: UseWorkspacesOptions = {}) {
  const params = new URLSearchParams();
  
  if (options.page) params.set('page', String(options.page));
  if (options.limit) params.set('limit', String(options.limit));
  if (options.type) params.set('type', options.type);
  if (options.status) params.set('status', options.status);
  if (options.userId) params.set('userId', options.userId);

  const queryString = params.toString();
  const url = `${ROUTES.API.WORKSPACES}${queryString ? `?${queryString}` : ''}`;

  return useFetch<WorkspacesResponse>(url, {
    cache: true,
    cacheTime: 60000,
  });
}

// ============================================================
// useWorkspace Hook
// ============================================================

export function useWorkspace(id: string | null) {
  const url = id ? `${ROUTES.API.WORKSPACES}?id=${id}` : null;

  return useFetch<Workspace>(url, {
    cache: true,
    cacheTime: 120000,
  });
}

export default useWorkspaces;
