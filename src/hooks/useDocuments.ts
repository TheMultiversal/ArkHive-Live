'use client';

import { useFetch } from './useFetch';
import { ROUTES } from '@/lib/routes';

// ============================================================
// Types
// ============================================================

interface Document {
  id: string;
  title: string;
  type: 'pdf' | 'image' | 'video' | 'audio' | 'text' | 'spreadsheet' | 'archive' | 'other';
  mimeType: string;
  size: number;
  url: string;
  description?: string;
  tags: string[];
  createdAt: Date;
  updatedAt: Date;
  accessLevel: 'public' | 'internal' | 'confidential' | 'classified';
}

interface DocumentsResponse {
  data: Document[];
  pagination: {
    page: number;
    limit: number;
    total: number;
    totalPages: number;
    hasMore: boolean;
  };
}

interface UseDocumentsOptions {
  page?: number;
  limit?: number;
  type?: string;
  accessLevel?: string;
  investigationId?: string;
  entityId?: string;
  search?: string;
  tag?: string;
}

// ============================================================
// useDocuments Hook
// ============================================================

export function useDocuments(options: UseDocumentsOptions = {}) {
  const params = new URLSearchParams();
  
  if (options.page) params.set('page', String(options.page));
  if (options.limit) params.set('limit', String(options.limit));
  if (options.type) params.set('type', options.type);
  if (options.accessLevel) params.set('accessLevel', options.accessLevel);
  if (options.investigationId) params.set('investigationId', options.investigationId);
  if (options.entityId) params.set('entityId', options.entityId);
  if (options.search) params.set('search', options.search);
  if (options.tag) params.set('tag', options.tag);

  const queryString = params.toString();
  const url = `${ROUTES.API.DOCUMENTS}${queryString ? `?${queryString}` : ''}`;

  return useFetch<DocumentsResponse>(url, {
    cache: true,
    cacheTime: 60000,
  });
}

// ============================================================
// useDocument Hook
// ============================================================

export function useDocument(id: string | null) {
  const url = id ? `${ROUTES.API.DOCUMENTS}?id=${id}` : null;

  return useFetch<Document>(url, {
    cache: true,
    cacheTime: 120000,
  });
}

export default useDocuments;
