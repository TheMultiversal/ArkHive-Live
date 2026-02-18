/**
 * URL Utility Functions
 * URL parsing, building, and manipulation
 */

/**
 * Parse query string to object
 */
export function parseQueryString(query: string): Record<string, string | string[]> {
  if (!query) return {};
  
  const params = new URLSearchParams(query.startsWith('?') ? query.slice(1) : query);
  const result: Record<string, string | string[]> = {};
  
  params.forEach((value, key) => {
    const existing = result[key];
    if (existing !== undefined) {
      result[key] = Array.isArray(existing) ? [...existing, value] : [existing, value];
    } else {
      result[key] = value;
    }
  });
  
  return result;
}

/**
 * Build query string from object
 */
export function buildQueryString(
  params: Record<string, string | number | boolean | string[] | undefined | null>
): string {
  const searchParams = new URLSearchParams();
  
  Object.entries(params).forEach(([key, value]) => {
    if (value === undefined || value === null) return;
    
    if (Array.isArray(value)) {
      value.forEach(v => searchParams.append(key, v));
    } else {
      searchParams.append(key, String(value));
    }
  });
  
  const queryString = searchParams.toString();
  return queryString ? `?${queryString}` : '';
}

/**
 * Parse URL into parts
 */
export function parseUrl(url: string): {
  protocol: string;
  host: string;
  hostname: string;
  port: string;
  pathname: string;
  search: string;
  hash: string;
  origin: string;
} {
  const parsed = new URL(url, 'http://localhost');
  return {
    protocol: parsed.protocol,
    host: parsed.host,
    hostname: parsed.hostname,
    port: parsed.port,
    pathname: parsed.pathname,
    search: parsed.search,
    hash: parsed.hash,
    origin: parsed.origin,
  };
}

/**
 * Build URL from parts
 */
export function buildUrl(
  base: string,
  path?: string,
  params?: Record<string, string | number | boolean | string[] | undefined | null>
): string {
  let url = base;
  
  if (path) {
    // Ensure single slash between base and path
    const basePart = base.endsWith('/') ? base.slice(0, -1) : base;
    const pathPart = path.startsWith('/') ? path : `/${path}`;
    url = basePart + pathPart;
  }
  
  if (params) {
    url += buildQueryString(params);
  }
  
  return url;
}

/**
 * Join URL paths
 */
export function joinPaths(...parts: (string | undefined | null)[]): string {
  return parts
    .filter((part): part is string => Boolean(part))
    .map((part, index) => {
      if (index === 0) {
        return part.replace(/\/+$/, '');
      }
      return part.replace(/^\/+|\/+$/g, '');
    })
    .filter(Boolean)
    .join('/');
}

/**
 * Get file extension from URL
 */
export function getExtension(url: string): string {
  const pathname = url.split('?')[0];
  const lastDot = pathname.lastIndexOf('.');
  if (lastDot === -1) return '';
  return pathname.slice(lastDot + 1).toLowerCase();
}

/**
 * Get filename from URL
 */
export function getFilename(url: string): string {
  const pathname = url.split('?')[0].split('#')[0];
  const lastSlash = pathname.lastIndexOf('/');
  return lastSlash === -1 ? pathname : pathname.slice(lastSlash + 1);
}

/**
 * Check if URL is absolute
 */
export function isAbsoluteUrl(url: string): boolean {
  return /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i.test(url);
}

/**
 * Check if URL is relative
 */
export function isRelativeUrl(url: string): boolean {
  return !isAbsoluteUrl(url);
}

/**
 * Check if URL is external (different origin)
 */
export function isExternalUrl(url: string, origin?: string): boolean {
  if (!isAbsoluteUrl(url)) return false;
  
  const baseOrigin = origin || (typeof window !== 'undefined' ? window.location.origin : '');
  if (!baseOrigin) return true;
  
  try {
    const urlOrigin = new URL(url).origin;
    return urlOrigin !== baseOrigin;
  } catch {
    return true;
  }
}

/**
 * Resolve URL against base
 */
export function resolveUrl(base: string, path: string): string {
  if (isAbsoluteUrl(path)) return path;
  return new URL(path, base).href;
}

/**
 * Add or update query parameter
 */
export function setQueryParam(
  url: string,
  key: string,
  value: string | number | boolean
): string {
  const urlObj = new URL(url, 'http://localhost');
  urlObj.searchParams.set(key, String(value));
  return urlObj.toString().replace('http://localhost', '');
}

/**
 * Remove query parameter
 */
export function removeQueryParam(url: string, key: string): string {
  const urlObj = new URL(url, 'http://localhost');
  urlObj.searchParams.delete(key);
  const result = urlObj.toString().replace('http://localhost', '');
  return result === '' ? url.split('?')[0] : result;
}

/**
 * Get query parameter value
 */
export function getQueryParam(url: string, key: string): string | null {
  const urlObj = new URL(url, 'http://localhost');
  return urlObj.searchParams.get(key);
}

/**
 * Get all query parameter values for a key
 */
export function getQueryParams(url: string, key: string): string[] {
  const urlObj = new URL(url, 'http://localhost');
  return urlObj.searchParams.getAll(key);
}

/**
 * Check if URL has query parameter
 */
export function hasQueryParam(url: string, key: string): boolean {
  const urlObj = new URL(url, 'http://localhost');
  return urlObj.searchParams.has(key);
}

/**
 * Strip query string from URL
 */
export function stripQuery(url: string): string {
  return url.split('?')[0];
}

/**
 * Strip hash from URL
 */
export function stripHash(url: string): string {
  return url.split('#')[0];
}

/**
 * Clean URL (remove query and hash)
 */
export function cleanUrl(url: string): string {
  return stripHash(stripQuery(url));
}

/**
 * Normalize URL slashes
 */
export function normalizeSlashes(url: string): string {
  return url.replace(/([^:]\/)\/+/g, '$1');
}

/**
 * Encode URI component safely
 */
export function encode(value: string): string {
  return encodeURIComponent(value).replace(/[!'()*]/g, c => 
    `%${c.charCodeAt(0).toString(16).toUpperCase()}`
  );
}

/**
 * Decode URI component safely
 */
export function decode(value: string): string {
  try {
    return decodeURIComponent(value);
  } catch {
    return value;
  }
}

/**
 * Check if string is valid URL
 */
export function isValidUrl(url: string): boolean {
  try {
    new URL(url);
    return true;
  } catch {
    return false;
  }
}

/**
 * Get domain from URL
 */
export function getDomain(url: string): string | null {
  try {
    return new URL(url).hostname;
  } catch {
    return null;
  }
}

/**
 * Get base URL (protocol + host)
 */
export function getBaseUrl(url: string): string | null {
  try {
    const parsed = new URL(url);
    return `${parsed.protocol}//${parsed.host}`;
  } catch {
    return null;
  }
}

/**
 * Convert object to URL search params
 */
export function toSearchParams(
  obj: Record<string, string | number | boolean | string[] | undefined | null>
): URLSearchParams {
  const params = new URLSearchParams();
  
  Object.entries(obj).forEach(([key, value]) => {
    if (value === undefined || value === null) return;
    
    if (Array.isArray(value)) {
      value.forEach(v => params.append(key, v));
    } else {
      params.append(key, String(value));
    }
  });
  
  return params;
}

/**
 * Convert URL search params to object
 */
export function fromSearchParams(params: URLSearchParams): Record<string, string | string[]> {
  const result: Record<string, string | string[]> = {};
  
  params.forEach((value, key) => {
    const existing = result[key];
    if (existing !== undefined) {
      result[key] = Array.isArray(existing) ? [...existing, value] : [existing, value];
    } else {
      result[key] = value;
    }
  });
  
  return result;
}
