/**
 * API Types and Response Interfaces
 * Standardized types for API communication
 */

// ============================================================
// Error Types
// ============================================================

export interface ApiErrorDetail {
  field?: string;
  message: string;
  code?: string;
}

export interface ApiError {
  code: string;
  message: string;
  status: number;
  details?: ApiErrorDetail[];
  timestamp?: string;
  path?: string;
  requestId?: string;
}

export class ApiException extends Error {
  constructor(
    public readonly error: ApiError,
    public readonly response?: Response
  ) {
    super(error.message);
    this.name = 'ApiException';
  }

  get status(): number {
    return this.error.status;
  }

  get code(): string {
    return this.error.code;
  }

  get details(): ApiErrorDetail[] | undefined {
    return this.error.details;
  }
}

// ============================================================
// Response Types
// ============================================================

export interface ApiResponse<T> {
  data: T;
  success: true;
  meta?: ApiResponseMeta;
}

export interface ApiResponseMeta {
  requestId?: string;
  timestamp?: string;
  duration?: number;
}

export interface PaginatedResponse<T> {
  data: T[];
  success: true;
  pagination: PaginationInfo;
  meta?: ApiResponseMeta;
}

export interface PaginationInfo {
  page: number;
  pageSize: number;
  totalItems: number;
  totalPages: number;
  hasNextPage: boolean;
  hasPreviousPage: boolean;
}

export interface CursorPaginatedResponse<T> {
  data: T[];
  success: true;
  cursor: CursorInfo;
  meta?: ApiResponseMeta;
}

export interface CursorInfo {
  nextCursor: string | null;
  previousCursor: string | null;
  hasMore: boolean;
}

// ============================================================
// Request Types
// ============================================================

export interface PaginationParams {
  page?: number;
  pageSize?: number;
  limit?: number;
  offset?: number;
}

export interface SortParams {
  sortBy?: string;
  sortOrder?: 'asc' | 'desc';
}

export interface FilterParams {
  [key: string]: string | number | boolean | string[] | undefined;
}

export interface SearchParams extends PaginationParams, SortParams {
  query?: string;
  filters?: FilterParams;
}

// ============================================================
// HTTP Method Types
// ============================================================

export type HttpMethod = 'GET' | 'POST' | 'PUT' | 'PATCH' | 'DELETE';

export interface RequestConfig {
  method?: HttpMethod;
  headers?: Record<string, string>;
  body?: unknown;
  params?: Record<string, string | number | boolean | undefined>;
  timeout?: number;
  retries?: number;
  retryDelay?: number;
  signal?: AbortSignal;
}

// ============================================================
// API Endpoint Types
// ============================================================

export interface Endpoint<TParams = void, TResponse = unknown> {
  path: string;
  method: HttpMethod;
  _params?: TParams;
  _response?: TResponse;
}

// ============================================================
// Utility Types
// ============================================================

export type ApiResult<T> = 
  | { success: true; data: T; error?: never }
  | { success: false; data?: never; error: ApiError };

export type AsyncApiResult<T> = Promise<ApiResult<T>>;

// Type guard for API errors
export function isApiError(error: unknown): error is ApiError {
  return (
    typeof error === 'object' &&
    error !== null &&
    'code' in error &&
    'message' in error &&
    'status' in error
  );
}

// Type guard for API exceptions
export function isApiException(error: unknown): error is ApiException {
  return error instanceof ApiException;
}
