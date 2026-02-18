'use client';

import { useFetch } from './useFetch';
import { ROUTES } from '@/lib/routes';

// ============================================================
// Types
// ============================================================

interface AnalyticsSummary {
  totalEvents: number;
  uniqueUsers: number;
  uniqueSessions: number;
  pageViews: number;
  topPages: Array<{ page: string; views: number }>;
  topEvents: Array<{ event: string; count: number }>;
  eventsByHour: Array<{ hour: number; count: number }>;
}

interface UseAnalyticsOptions {
  startDate?: string;
  endDate?: string;
  type?: string;
}

// ============================================================
// useAnalytics Hook
// ============================================================

export function useAnalytics(options: UseAnalyticsOptions = {}) {
  const params = new URLSearchParams();
  
  if (options.startDate) params.set('startDate', options.startDate);
  if (options.endDate) params.set('endDate', options.endDate);
  if (options.type) params.set('type', options.type);

  const queryString = params.toString();
  const url = `${ROUTES.API.ANALYTICS}${queryString ? `?${queryString}` : ''}`;

  return useFetch<AnalyticsSummary>(url, {
    cache: true,
    cacheTime: 300000, // 5 minutes
  });
}

export default useAnalytics;
