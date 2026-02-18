import { useState, useEffect, useCallback, useRef } from 'react';

// ============================================================
// Types
// ============================================================

interface FetchState<T> {
  data: T | null;
  loading: boolean;
  error: Error | null;
}

interface UseFetchOptions<T> {
  immediate?: boolean;
  initialData?: T;
  onSuccess?: (data: T) => void;
  onError?: (error: Error) => void;
  transform?: (data: unknown) => T;
  cache?: boolean;
  cacheTime?: number;
  retries?: number;
  retryDelay?: number;
}

interface UseFetchReturn<T> extends FetchState<T> {
  refetch: () => Promise<void>;
  mutate: (data: T | null) => void;
  reset: () => void;
}

// ============================================================
// Cache Implementation
// ============================================================

const cache = new Map<string, { data: unknown; timestamp: number }>();

function getCached<T>(key: string, maxAge: number): T | null {
  const entry = cache.get(key);
  if (!entry) return null;
  
  if (Date.now() - entry.timestamp > maxAge) {
    cache.delete(key);
    return null;
  }
  
  return entry.data as T;
}

function setCache(key: string, data: unknown): void {
  cache.set(key, { data, timestamp: Date.now() });
}

// ============================================================
// useFetch Hook
// ============================================================

export function useFetch<T>(
  url: string | null,
  options: UseFetchOptions<T> = {}
): UseFetchReturn<T> {
  const {
    immediate = true,
    initialData = null,
    onSuccess,
    onError,
    transform,
    cache: useCache = false,
    cacheTime = 5 * 60 * 1000, // 5 minutes
    retries = 0,
    retryDelay = 1000,
  } = options;

  const [state, setState] = useState<FetchState<T>>({
    data: initialData,
    loading: immediate && !!url,
    error: null,
  });

  const abortControllerRef = useRef<AbortController | null>(null);
  const mountedRef = useRef(true);

  const fetchData = useCallback(async (fetchUrl: string, attempt = 0): Promise<T | null> => {
    // Check cache first
    if (useCache) {
      const cached = getCached<T>(fetchUrl, cacheTime);
      if (cached) {
        setState({ data: cached, loading: false, error: null });
        onSuccess?.(cached);
        return cached;
      }
    }

    // Cancel previous request
    if (abortControllerRef.current) {
      abortControllerRef.current.abort();
    }

    abortControllerRef.current = new AbortController();

    try {
      const response = await fetch(fetchUrl, {
        signal: abortControllerRef.current.signal,
      });

      if (!response.ok) {
        throw new Error(`HTTP ${response.status}: ${response.statusText}`);
      }

      let data = await response.json();
      
      if (transform) {
        data = transform(data);
      }

      if (mountedRef.current) {
        setState({ data, loading: false, error: null });
        
        if (useCache) {
          setCache(fetchUrl, data);
        }
        
        onSuccess?.(data);
      }

      return data;
    } catch (error) {
      if (error instanceof Error && error.name === 'AbortError') {
        return null;
      }

      // Retry logic
      if (attempt < retries) {
        await new Promise(resolve => setTimeout(resolve, retryDelay * (attempt + 1)));
        return fetchData(fetchUrl, attempt + 1);
      }

      const err = error instanceof Error ? error : new Error(String(error));
      
      if (mountedRef.current) {
        setState(prev => ({ ...prev, loading: false, error: err }));
        onError?.(err);
      }

      return null;
    }
  }, [useCache, cacheTime, transform, onSuccess, onError, retries, retryDelay]);

  const refetch = useCallback(async () => {
    if (!url) return;
    
    setState(prev => ({ ...prev, loading: true, error: null }));
    await fetchData(url);
  }, [url, fetchData]);

  const mutate = useCallback((data: T | null) => {
    setState(prev => ({ ...prev, data }));
    
    if (url && useCache && data) {
      setCache(url, data);
    }
  }, [url, useCache]);

  const reset = useCallback(() => {
    setState({ data: initialData, loading: false, error: null });
  }, [initialData]);

  useEffect(() => {
    mountedRef.current = true;

    if (immediate && url) {
      setState(prev => ({ ...prev, loading: true }));
      fetchData(url);
    }

    return () => {
      mountedRef.current = false;
      if (abortControllerRef.current) {
        abortControllerRef.current.abort();
      }
    };
  }, [url, immediate, fetchData]);

  return {
    ...state,
    refetch,
    mutate,
    reset,
  };
}

// ============================================================
// useFetchCallback Hook
// ============================================================

interface FetchOptions extends RequestInit {
  transform?: (data: unknown) => unknown;
}

export function useFetchCallback() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<Error | null>(null);

  const fetchFn = useCallback(async <T>(
    url: string,
    options: FetchOptions = {}
  ): Promise<T | null> => {
    const { transform, ...fetchOptions } = options;
    
    setLoading(true);
    setError(null);

    try {
      const response = await fetch(url, fetchOptions);
      
      if (!response.ok) {
        throw new Error(`HTTP ${response.status}: ${response.statusText}`);
      }

      let data = await response.json();
      
      if (transform) {
        data = transform(data);
      }

      setLoading(false);
      return data as T;
    } catch (err) {
      const error = err instanceof Error ? err : new Error(String(err));
      setError(error);
      setLoading(false);
      return null;
    }
  }, []);

  return { fetch: fetchFn, loading, error };
}

export default useFetch;
