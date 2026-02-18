/**
 * API Client
 * Type-safe HTTP client with error handling, retries, and request/response interceptors
 */

import {
  ApiError,
  ApiException,
  ApiResponse,
  PaginatedResponse,
  RequestConfig,
  HttpMethod,
  isApiError,
} from '@/types/api';

// ============================================================
// Configuration
// ============================================================

const DEFAULT_BASE_URL = process.env.NEXT_PUBLIC_API_URL || '/api';
const DEFAULT_TIMEOUT = 30000;
const DEFAULT_RETRIES = 3;
const DEFAULT_RETRY_DELAY = 1000;

interface ApiClientConfig {
  baseUrl?: string;
  timeout?: number;
  retries?: number;
  retryDelay?: number;
  headers?: Record<string, string>;
  onRequest?: (config: RequestConfig) => RequestConfig | Promise<RequestConfig>;
  onResponse?: <T>(response: T) => T | Promise<T>;
  onError?: (error: ApiException) => void | Promise<void>;
}

// ============================================================
// API Client Class
// ============================================================

class ApiClient {
  private baseUrl: string;
  private timeout: number;
  private retries: number;
  private retryDelay: number;
  private defaultHeaders: Record<string, string>;
  private onRequest?: (config: RequestConfig) => RequestConfig | Promise<RequestConfig>;
  private onResponse?: <T>(response: T) => T | Promise<T>;
  private onError?: (error: ApiException) => void | Promise<void>;

  constructor(config: ApiClientConfig = {}) {
    this.baseUrl = config.baseUrl || DEFAULT_BASE_URL;
    this.timeout = config.timeout || DEFAULT_TIMEOUT;
    this.retries = config.retries || DEFAULT_RETRIES;
    this.retryDelay = config.retryDelay || DEFAULT_RETRY_DELAY;
    this.defaultHeaders = {
      'Content-Type': 'application/json',
      ...config.headers,
    };
    this.onRequest = config.onRequest;
    this.onResponse = config.onResponse;
    this.onError = config.onError;
  }

  /**
   * Build URL with query parameters
   */
  private buildUrl(path: string, params?: Record<string, string | number | boolean | undefined>): string {
    const url = new URL(path.startsWith('http') ? path : `${this.baseUrl}${path}`);
    
    if (params) {
      Object.entries(params).forEach(([key, value]) => {
        if (value !== undefined) {
          url.searchParams.append(key, String(value));
        }
      });
    }
    
    return url.toString();
  }

  /**
   * Create abort controller with timeout
   */
  private createAbortController(timeout: number, signal?: AbortSignal): AbortController {
    const controller = new AbortController();
    
    // Timeout abort
    const timeoutId = setTimeout(() => {
      controller.abort(new Error('Request timeout'));
    }, timeout);
    
    // Clean up on abort
    controller.signal.addEventListener('abort', () => {
      clearTimeout(timeoutId);
    });
    
    // Chain with external signal
    if (signal) {
      signal.addEventListener('abort', () => {
        controller.abort(signal.reason);
      });
    }
    
    return controller;
  }

  /**
   * Parse error response
   */
  private async parseError(response: Response): Promise<ApiError> {
    try {
      const body = await response.json();
      
      if (isApiError(body)) {
        return body;
      }
      
      return {
        code: 'UNKNOWN_ERROR',
        message: body.message || body.error || 'An unknown error occurred',
        status: response.status,
      };
    } catch {
      return {
        code: 'PARSE_ERROR',
        message: response.statusText || 'Failed to parse error response',
        status: response.status,
      };
    }
  }

  /**
   * Determine if error is retryable
   */
  private isRetryable(status: number): boolean {
    return status >= 500 || status === 408 || status === 429;
  }

  /**
   * Sleep utility for retry delay
   */
  private sleep(ms: number): Promise<void> {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

  /**
   * Execute request with retries
   */
  private async executeWithRetry<T>(
    method: HttpMethod,
    path: string,
    config: RequestConfig = {}
  ): Promise<T> {
    const maxRetries = config.retries ?? this.retries;
    const retryDelay = config.retryDelay ?? this.retryDelay;
    
    let lastError: ApiException | null = null;
    
    for (let attempt = 0; attempt <= maxRetries; attempt++) {
      try {
        return await this.execute<T>(method, path, config);
      } catch (error) {
        if (error instanceof ApiException) {
          lastError = error;
          
          // Don't retry non-retryable errors
          if (!this.isRetryable(error.status) || attempt === maxRetries) {
            throw error;
          }
          
          // Exponential backoff
          const delay = retryDelay * Math.pow(2, attempt);
          await this.sleep(delay);
        } else {
          throw error;
        }
      }
    }
    
    throw lastError;
  }

  /**
   * Execute a single request
   */
  private async execute<T>(
    method: HttpMethod,
    path: string,
    config: RequestConfig = {}
  ): Promise<T> {
    // Apply request interceptor
    let finalConfig: RequestConfig & { method: HttpMethod } = { ...config, method };
    if (this.onRequest) {
      const interceptedConfig = await this.onRequest(finalConfig);
      finalConfig = { ...interceptedConfig, method: interceptedConfig.method ?? method };
    }

    const url = this.buildUrl(path, finalConfig.params);
    const timeout = finalConfig.timeout ?? this.timeout;
    const controller = this.createAbortController(timeout, finalConfig.signal);

    const headers = {
      ...this.defaultHeaders,
      ...finalConfig.headers,
    };

    const fetchOptions: RequestInit = {
      method,
      headers,
      signal: controller.signal,
    };

    if (finalConfig.body && method !== 'GET') {
      fetchOptions.body = JSON.stringify(finalConfig.body);
    }

    try {
      const response = await fetch(url, fetchOptions);

      if (!response.ok) {
        const error = await this.parseError(response);
        const exception = new ApiException(error, response);
        
        if (this.onError) {
          await this.onError(exception);
        }
        
        throw exception;
      }

      // Handle empty responses
      const contentType = response.headers.get('content-type');
      if (!contentType || !contentType.includes('application/json')) {
        return undefined as T;
      }

      let data = await response.json() as T;

      // Apply response interceptor
      if (this.onResponse) {
        data = await this.onResponse(data);
      }

      return data;
    } catch (error) {
      if (error instanceof ApiException) {
        throw error;
      }

      // Handle fetch errors
      const apiError: ApiError = {
        code: 'NETWORK_ERROR',
        message: error instanceof Error ? error.message : 'Network request failed',
        status: 0,
      };

      const exception = new ApiException(apiError);
      
      if (this.onError) {
        await this.onError(exception);
      }

      throw exception;
    }
  }

  /**
   * GET request
   */
  async get<T>(path: string, config?: RequestConfig): Promise<T> {
    return this.executeWithRetry<T>('GET', path, config);
  }

  /**
   * POST request
   */
  async post<T>(path: string, body?: unknown, config?: RequestConfig): Promise<T> {
    return this.executeWithRetry<T>('POST', path, { ...config, body });
  }

  /**
   * PUT request
   */
  async put<T>(path: string, body?: unknown, config?: RequestConfig): Promise<T> {
    return this.executeWithRetry<T>('PUT', path, { ...config, body });
  }

  /**
   * PATCH request
   */
  async patch<T>(path: string, body?: unknown, config?: RequestConfig): Promise<T> {
    return this.executeWithRetry<T>('PATCH', path, { ...config, body });
  }

  /**
   * DELETE request
   */
  async delete<T>(path: string, config?: RequestConfig): Promise<T> {
    return this.executeWithRetry<T>('DELETE', path, config);
  }

  /**
   * Paginated GET request
   */
  async getPaginated<T>(
    path: string,
    page = 1,
    pageSize = 20,
    config?: RequestConfig
  ): Promise<PaginatedResponse<T>> {
    return this.get<PaginatedResponse<T>>(path, {
      ...config,
      params: {
        ...config?.params,
        page,
        pageSize,
      },
    });
  }
}

// ============================================================
// Default Client Instance
// ============================================================

export const api = new ApiClient();

// ============================================================
// Factory Function
// ============================================================

export function createApiClient(config?: ApiClientConfig): ApiClient {
  return new ApiClient(config);
}

export default ApiClient;
