'use client';

/**
 * Caching Layer
 * In-memory cache with TTL, LRU eviction, and persistence options
 */

// ============================================================================
// Types
// ============================================================================

export interface CacheEntry<T = unknown> {
  key: string;
  value: T;
  createdAt: number;
  updatedAt: number;
  expiresAt?: number;
  accessCount: number;
  lastAccessedAt: number;
  tags?: string[];
  metadata?: Record<string, unknown>;
}

export interface CacheConfig {
  maxSize?: number;
  defaultTTL?: number;
  evictionPolicy?: 'lru' | 'lfu' | 'fifo';
  persistStorage?: 'localStorage' | 'sessionStorage' | 'indexedDB' | 'none';
  namespace?: string;
  onEvict?: (entry: CacheEntry) => void;
  onExpire?: (entry: CacheEntry) => void;
}

export interface CacheStats {
  size: number;
  maxSize: number;
  hits: number;
  misses: number;
  hitRate: number;
  evictions: number;
  expirations: number;
}

export interface CacheOptions {
  ttl?: number;
  tags?: string[];
  metadata?: Record<string, unknown>;
}

// ============================================================================
// LRU Cache Implementation
// ============================================================================

class LRUNode<K, V> {
  key: K;
  value: V;
  prev: LRUNode<K, V> | null = null;
  next: LRUNode<K, V> | null = null;

  constructor(key: K, value: V) {
    this.key = key;
    this.value = value;
  }
}

class DoublyLinkedList<K, V> {
  private head: LRUNode<K, V> | null = null;
  private tail: LRUNode<K, V> | null = null;
  private _size = 0;

  get size(): number {
    return this._size;
  }

  addToFront(node: LRUNode<K, V>): void {
    node.prev = null;
    node.next = this.head;

    if (this.head) {
      this.head.prev = node;
    }
    this.head = node;

    if (!this.tail) {
      this.tail = node;
    }
    this._size++;
  }

  remove(node: LRUNode<K, V>): void {
    if (node.prev) {
      node.prev.next = node.next;
    } else {
      this.head = node.next;
    }

    if (node.next) {
      node.next.prev = node.prev;
    } else {
      this.tail = node.prev;
    }

    node.prev = null;
    node.next = null;
    this._size--;
  }

  moveToFront(node: LRUNode<K, V>): void {
    if (this.head === node) return;
    this.remove(node);
    this.addToFront(node);
  }

  removeLast(): LRUNode<K, V> | null {
    if (!this.tail) return null;
    const node = this.tail;
    this.remove(node);
    return node;
  }

  clear(): void {
    this.head = null;
    this.tail = null;
    this._size = 0;
  }

  toArray(): LRUNode<K, V>[] {
    const result: LRUNode<K, V>[] = [];
    let current = this.head;
    while (current) {
      result.push(current);
      current = current.next;
    }
    return result;
  }
}

// ============================================================================
// Cache Implementation
// ============================================================================

export class Cache {
  private entries: Map<string, CacheEntry> = new Map();
  private lruList: DoublyLinkedList<string, CacheEntry> = new DoublyLinkedList();
  private nodeMap: Map<string, LRUNode<string, CacheEntry>> = new Map();
  private config: Required<CacheConfig>;
  private stats = {
    hits: 0,
    misses: 0,
    evictions: 0,
    expirations: 0,
  };
  private cleanupTimer: NodeJS.Timeout | null = null;

  constructor(config: CacheConfig = {}) {
    this.config = {
      maxSize: 1000,
      defaultTTL: 5 * 60 * 1000, // 5 minutes
      evictionPolicy: 'lru',
      persistStorage: 'none',
      namespace: 'arkhive-cache',
      onEvict: () => {},
      onExpire: () => {},
      ...config,
    };

    this.loadFromStorage();
    this.startCleanupTimer();
  }

  // Core Operations
  get<T = unknown>(key: string): T | undefined {
    const entry = this.entries.get(key);

    if (!entry) {
      this.stats.misses++;
      return undefined;
    }

    // Check expiration
    if (entry.expiresAt && Date.now() > entry.expiresAt) {
      this.delete(key);
      this.stats.expirations++;
      this.config.onExpire?.(entry);
      this.stats.misses++;
      return undefined;
    }

    // Update access stats
    entry.accessCount++;
    entry.lastAccessedAt = Date.now();
    this.stats.hits++;

    // Update LRU position
    const node = this.nodeMap.get(key);
    if (node && this.config.evictionPolicy === 'lru') {
      this.lruList.moveToFront(node);
    }

    return entry.value as T;
  }

  set<T = unknown>(key: string, value: T, options: CacheOptions = {}): void {
    const now = Date.now();
    const ttl = options.ttl ?? this.config.defaultTTL;

    const entry: CacheEntry<T> = {
      key,
      value,
      createdAt: now,
      updatedAt: now,
      expiresAt: ttl > 0 ? now + ttl : undefined,
      accessCount: 0,
      lastAccessedAt: now,
      tags: options.tags,
      metadata: options.metadata,
    };

    // Check if updating existing
    if (this.entries.has(key)) {
      const existing = this.entries.get(key)!;
      entry.createdAt = existing.createdAt;
      entry.accessCount = existing.accessCount;
    } else {
      // Evict if at capacity
      if (this.entries.size >= this.config.maxSize) {
        this.evict();
      }
    }

    this.entries.set(key, entry as CacheEntry);

    // Update LRU list
    let node = this.nodeMap.get(key);
    if (node) {
      node.value = entry as CacheEntry;
      if (this.config.evictionPolicy === 'lru') {
        this.lruList.moveToFront(node);
      }
    } else {
      node = new LRUNode(key, entry as CacheEntry);
      this.nodeMap.set(key, node);
      this.lruList.addToFront(node);
    }

    this.persistToStorage();
  }

  has(key: string): boolean {
    const entry = this.entries.get(key);
    if (!entry) return false;

    if (entry.expiresAt && Date.now() > entry.expiresAt) {
      this.delete(key);
      return false;
    }

    return true;
  }

  delete(key: string): boolean {
    const entry = this.entries.get(key);
    if (!entry) return false;

    this.entries.delete(key);

    const node = this.nodeMap.get(key);
    if (node) {
      this.lruList.remove(node);
      this.nodeMap.delete(key);
    }

    this.persistToStorage();
    return true;
  }

  clear(): void {
    this.entries.clear();
    this.lruList.clear();
    this.nodeMap.clear();
    this.persistToStorage();
  }

  // Batch Operations
  getMany<T = unknown>(keys: string[]): Map<string, T> {
    const result = new Map<string, T>();
    for (const key of keys) {
      const value = this.get<T>(key);
      if (value !== undefined) {
        result.set(key, value);
      }
    }
    return result;
  }

  setMany<T = unknown>(entries: Array<{ key: string; value: T; options?: CacheOptions }>): void {
    for (const { key, value, options } of entries) {
      this.set(key, value, options);
    }
  }

  deleteMany(keys: string[]): number {
    let deleted = 0;
    for (const key of keys) {
      if (this.delete(key)) {
        deleted++;
      }
    }
    return deleted;
  }

  // Tag Operations
  getByTag<T = unknown>(tag: string): Map<string, T> {
    const result = new Map<string, T>();
    this.entries.forEach((entry, key) => {
      if (entry.tags?.includes(tag)) {
        const value = this.get<T>(key);
        if (value !== undefined) {
          result.set(key, value);
        }
      }
    });
    return result;
  }

  deleteByTag(tag: string): number {
    const keys: string[] = [];
    this.entries.forEach((entry, key) => {
      if (entry.tags?.includes(tag)) {
        keys.push(key);
      }
    });
    return this.deleteMany(keys);
  }

  // Pattern Operations
  getByPattern<T = unknown>(pattern: RegExp): Map<string, T> {
    const result = new Map<string, T>();
    this.entries.forEach((entry, key) => {
      if (pattern.test(key)) {
        const value = this.get<T>(key);
        if (value !== undefined) {
          result.set(key, value);
        }
      }
    });
    return result;
  }

  deleteByPattern(pattern: RegExp): number {
    const keys: string[] = [];
    this.entries.forEach((_, key) => {
      if (pattern.test(key)) {
        keys.push(key);
      }
    });
    return this.deleteMany(keys);
  }

  // TTL Operations
  getTTL(key: string): number | undefined {
    const entry = this.entries.get(key);
    if (!entry || !entry.expiresAt) return undefined;

    const remaining = entry.expiresAt - Date.now();
    return remaining > 0 ? remaining : 0;
  }

  setTTL(key: string, ttl: number): boolean {
    const entry = this.entries.get(key);
    if (!entry) return false;

    entry.expiresAt = ttl > 0 ? Date.now() + ttl : undefined;
    entry.updatedAt = Date.now();
    this.persistToStorage();
    return true;
  }

  persist(key: string): boolean {
    return this.setTTL(key, 0);
  }

  // Eviction
  private evict(): void {
    let entry: CacheEntry | undefined;

    switch (this.config.evictionPolicy) {
      case 'lru': {
        const node = this.lruList.removeLast();
        if (node) {
          entry = this.entries.get(node.key);
          this.entries.delete(node.key);
          this.nodeMap.delete(node.key);
        }
        break;
      }
      case 'lfu': {
        let minAccess = Infinity;
        let minKey: string | undefined;
        this.entries.forEach((e, k) => {
          if (e.accessCount < minAccess) {
            minAccess = e.accessCount;
            minKey = k;
          }
        });
        if (minKey) {
          entry = this.entries.get(minKey);
          this.delete(minKey);
        }
        break;
      }
      case 'fifo': {
        let oldest = Infinity;
        let oldestKey: string | undefined;
        this.entries.forEach((e, k) => {
          if (e.createdAt < oldest) {
            oldest = e.createdAt;
            oldestKey = k;
          }
        });
        if (oldestKey) {
          entry = this.entries.get(oldestKey);
          this.delete(oldestKey);
        }
        break;
      }
    }

    if (entry) {
      this.stats.evictions++;
      this.config.onEvict?.(entry);
    }
  }

  // Cleanup expired entries
  private cleanup(): void {
    const now = Date.now();
    const expired: string[] = [];

    this.entries.forEach((entry, key) => {
      if (entry.expiresAt && now > entry.expiresAt) {
        expired.push(key);
        this.stats.expirations++;
        this.config.onExpire?.(entry);
      }
    });

    this.deleteMany(expired);
  }

  private startCleanupTimer(): void {
    this.cleanupTimer = setInterval(() => {
      this.cleanup();
    }, 60000); // Every minute
  }

  // Statistics
  getStats(): CacheStats {
    const total = this.stats.hits + this.stats.misses;
    return {
      size: this.entries.size,
      maxSize: this.config.maxSize,
      hits: this.stats.hits,
      misses: this.stats.misses,
      hitRate: total > 0 ? this.stats.hits / total : 0,
      evictions: this.stats.evictions,
      expirations: this.stats.expirations,
    };
  }

  resetStats(): void {
    this.stats = {
      hits: 0,
      misses: 0,
      evictions: 0,
      expirations: 0,
    };
  }

  // Persistence
  private persistToStorage(): void {
    if (this.config.persistStorage === 'none') return;
    if (typeof window === 'undefined') return;

    try {
      const data = Array.from(this.entries.entries());
      const serialized = JSON.stringify(data);

      switch (this.config.persistStorage) {
        case 'localStorage':
          localStorage.setItem(this.config.namespace, serialized);
          break;
        case 'sessionStorage':
          sessionStorage.setItem(this.config.namespace, serialized);
          break;
        case 'indexedDB':
          // IndexedDB persistence would go here
          break;
      }
    } catch (error) {
      console.error('Failed to persist cache:', error);
    }
  }

  private loadFromStorage(): void {
    if (this.config.persistStorage === 'none') return;
    if (typeof window === 'undefined') return;

    try {
      let serialized: string | null = null;

      switch (this.config.persistStorage) {
        case 'localStorage':
          serialized = localStorage.getItem(this.config.namespace);
          break;
        case 'sessionStorage':
          serialized = sessionStorage.getItem(this.config.namespace);
          break;
      }

      if (serialized) {
        const data: Array<[string, CacheEntry]> = JSON.parse(serialized);
        const now = Date.now();

        for (const [key, entry] of data) {
          // Skip expired entries
          if (entry.expiresAt && now > entry.expiresAt) continue;

          this.entries.set(key, entry);
          const node = new LRUNode(key, entry);
          this.nodeMap.set(key, node);
          this.lruList.addToFront(node);
        }
      }
    } catch (error) {
      console.error('Failed to load cache:', error);
    }
  }

  // Debug
  keys(): string[] {
    return Array.from(this.entries.keys());
  }

  values<T = unknown>(): T[] {
    return Array.from(this.entries.values()).map(e => e.value as T);
  }

  entries<T = unknown>(): Array<[string, T]> {
    return Array.from(this.entries.entries()).map(([k, e]) => [k, e.value as T]);
  }

  getEntry(key: string): CacheEntry | undefined {
    return this.entries.get(key);
  }

  // Cleanup
  destroy(): void {
    if (this.cleanupTimer) {
      clearInterval(this.cleanupTimer);
    }
    this.clear();
  }
}

// ============================================================================
// Memoization
// ============================================================================

export interface MemoConfig {
  cache?: Cache;
  keyGenerator?: (...args: unknown[]) => string;
  ttl?: number;
  tags?: string[];
}

export function memoize<T extends (...args: unknown[]) => unknown>(
  fn: T,
  config: MemoConfig = {}
): T {
  const cache = config.cache ?? new Cache();
  const keyGen = config.keyGenerator ?? ((...args) => JSON.stringify(args));

  return ((...args: unknown[]) => {
    const key = keyGen(...args);
    const cached = cache.get(key);

    if (cached !== undefined) {
      return cached;
    }

    const result = fn(...args);

    if (result instanceof Promise) {
      return result.then(value => {
        cache.set(key, value, { ttl: config.ttl, tags: config.tags });
        return value;
      });
    }

    cache.set(key, result, { ttl: config.ttl, tags: config.tags });
    return result;
  }) as T;
}

// ============================================================================
// React Integration
// ============================================================================

import { useState, useEffect, useCallback, createContext, useContext, useMemo, useRef } from 'react';
import React from 'react';

// Cache Context
interface CacheContextValue {
  cache: Cache;
  get: <T>(key: string) => T | undefined;
  set: <T>(key: string, value: T, options?: CacheOptions) => void;
  invalidate: (key: string) => void;
  invalidateByTag: (tag: string) => void;
  stats: CacheStats;
}

export const CacheContext = createContext<CacheContextValue | null>(null);

// Provider
interface CacheProviderProps {
  config?: CacheConfig;
  children: React.ReactNode;
}

export function CacheProvider({ config, children }: CacheProviderProps): React.ReactElement {
  const cacheRef = useRef<Cache>(new Cache(config));
  const [stats, setStats] = useState<CacheStats>(cacheRef.current.getStats());

  useEffect(() => {
    const interval = setInterval(() => {
      setStats(cacheRef.current.getStats());
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const value = useMemo(() => ({
    cache: cacheRef.current,
    get: <T,>(key: string) => cacheRef.current.get<T>(key),
    set: <T,>(key: string, val: T, options?: CacheOptions) => cacheRef.current.set(key, val, options),
    invalidate: (key: string) => cacheRef.current.delete(key),
    invalidateByTag: (tag: string) => cacheRef.current.deleteByTag(tag),
    stats,
  }), [stats]);

  return (
    <CacheContext.Provider value={value}>
      {children}
    </CacheContext.Provider>
  );
}

// Hook: Use cache
export function useCache(): CacheContextValue {
  const context = useContext(CacheContext);
  if (!context) {
    throw new Error('useCache must be used within a CacheProvider');
  }
  return context;
}

// Hook: Cached value
export function useCachedValue<T>(
  key: string,
  fetcher: () => Promise<T>,
  options?: CacheOptions & { enabled?: boolean }
): {
  data: T | undefined;
  isLoading: boolean;
  error: Error | undefined;
  refetch: () => Promise<void>;
} {
  const { cache } = useCache();
  const [data, setData] = useState<T | undefined>(() => cache.get<T>(key));
  const [isLoading, setIsLoading] = useState(data === undefined);
  const [error, setError] = useState<Error | undefined>();

  const fetch = useCallback(async () => {
    if (options?.enabled === false) return;

    try {
      setIsLoading(true);
      setError(undefined);

      const result = await fetcher();
      cache.set(key, result, options);
      setData(result);
    } catch (err) {
      setError(err instanceof Error ? err : new Error(String(err)));
    } finally {
      setIsLoading(false);
    }
  }, [cache, key, fetcher, options]);

  useEffect(() => {
    const cached = cache.get<T>(key);
    if (cached !== undefined) {
      setData(cached);
      setIsLoading(false);
    } else {
      fetch();
    }
  }, [cache, key, fetch]);

  return { data, isLoading, error, refetch: fetch };
}

// Hook: Cache stats
export function useCacheStats(): CacheStats {
  const { stats } = useCache();
  return stats;
}

// ============================================================================
// UI Components
// ============================================================================

import { Database, Trash2, RefreshCw, BarChart2 } from 'lucide-react';

interface CacheStatsDisplayProps {
  stats: CacheStats;
}

export function CacheStatsDisplay({ stats }: CacheStatsDisplayProps): React.ReactElement {
  return (
    <div className="bg-zinc-900 border border-zinc-800 p-4">
      <div className="flex items-center gap-2 mb-4">
        <Database className="w-4 h-4 text-zinc-400" />
        <h3 className="text-sm font-medium text-zinc-300">Cache Statistics</h3>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <div>
          <p className="text-xs text-zinc-500 uppercase tracking-wider">Size</p>
          <p className="text-lg font-mono text-zinc-300">
            {stats.size} / {stats.maxSize}
          </p>
        </div>
        <div>
          <p className="text-xs text-zinc-500 uppercase tracking-wider">Hit Rate</p>
          <p className="text-lg font-mono text-emerald-400">
            {(stats.hitRate * 100).toFixed(1)}%
          </p>
        </div>
        <div>
          <p className="text-xs text-zinc-500 uppercase tracking-wider">Hits / Misses</p>
          <p className="text-lg font-mono text-zinc-300">
            <span className="text-emerald-400">{stats.hits}</span>
            {' / '}
            <span className="text-zinc-400">{stats.misses}</span>
          </p>
        </div>
        <div>
          <p className="text-xs text-zinc-500 uppercase tracking-wider">Evictions</p>
          <p className="text-lg font-mono text-yellow-400">{stats.evictions}</p>
        </div>
      </div>

      {/* Visual bar */}
      <div className="mt-4">
        <div className="flex items-center justify-between text-xs text-zinc-500 mb-1">
          <span>Cache Usage</span>
          <span>{((stats.size / stats.maxSize) * 100).toFixed(0)}%</span>
        </div>
        <div className="h-2 bg-zinc-800">
          <div
            className="h-full bg-zinc-600 transition-all duration-300"
            style={{ width: `${(stats.size / stats.maxSize) * 100}%` }}
          />
        </div>
      </div>
    </div>
  );
}

interface CacheEntryListProps {
  entries: Array<[string, CacheEntry]>;
  onDelete?: (key: string) => void;
}

export function CacheEntryList({ entries, onDelete }: CacheEntryListProps): React.ReactElement {
  if (entries.length === 0) {
    return (
      <div className="text-center py-8 text-zinc-500">
        Cache is empty
      </div>
    );
  }

  return (
    <div className="divide-y divide-zinc-800">
      {entries.map(([key, entry]) => (
        <div key={key} className="py-3 flex items-start justify-between">
          <div className="min-w-0 flex-1">
            <p className="text-sm font-mono text-zinc-300 truncate">{key}</p>
            <div className="flex items-center gap-4 mt-1 text-xs text-zinc-500">
              <span>Hits: {entry.accessCount}</span>
              {entry.expiresAt && (
                <span>
                  TTL: {Math.max(0, Math.floor((entry.expiresAt - Date.now()) / 1000))}s
                </span>
              )}
              {entry.tags?.length ? (
                <span>Tags: {entry.tags.join(', ')}</span>
              ) : null}
            </div>
          </div>
          {onDelete && (
            <button
              onClick={() => onDelete(key)}
              className="p-1 text-zinc-500 hover:text-white"
            >
              <Trash2 className="w-4 h-4" />
            </button>
          )}
        </div>
      ))}
    </div>
  );
}

interface CacheManagerProps {
  cache: Cache;
}

export function CacheManager({ cache }: CacheManagerProps): React.ReactElement {
  const [stats, setStats] = useState<CacheStats>(cache.getStats());
  const [showEntries, setShowEntries] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setStats(cache.getStats());
    }, 1000);
    return () => clearInterval(interval);
  }, [cache]);

  return (
    <div className="space-y-4">
      <CacheStatsDisplay stats={stats} />

      <div className="flex gap-2">
        <button
          onClick={() => setShowEntries(!showEntries)}
          className="px-3 py-1.5 text-sm bg-zinc-800 text-zinc-300 hover:bg-zinc-700 flex items-center gap-2"
        >
          <BarChart2 className="w-4 h-4" />
          {showEntries ? 'Hide' : 'Show'} Entries
        </button>
        <button
          onClick={() => cache.resetStats()}
          className="px-3 py-1.5 text-sm bg-zinc-800 text-zinc-300 hover:bg-zinc-700 flex items-center gap-2"
        >
          <RefreshCw className="w-4 h-4" />
          Reset Stats
        </button>
        <button
          onClick={() => {
            cache.clear();
            setStats(cache.getStats());
          }}
          className="px-3 py-1.5 text-sm bg-zinc-800/50 text-zinc-400 hover:bg-zinc-800 flex items-center gap-2"
        >
          <Trash2 className="w-4 h-4" />
          Clear Cache
        </button>
      </div>

      {showEntries && (
        <div className="bg-zinc-900 border border-zinc-800 p-4 max-h-96 overflow-y-auto">
          <CacheEntryList
            entries={cache.entries().map(([k]) => [k, cache.getEntry(k)!])}
            onDelete={(key) => {
              cache.delete(key);
              setStats(cache.getStats());
            }}
          />
        </div>
      )}
    </div>
  );
}

// ============================================================================
// Factory
// ============================================================================

let defaultCache: Cache | null = null;

export function getCache(config?: CacheConfig): Cache {
  if (!defaultCache) {
    defaultCache = new Cache(config);
  }
  return defaultCache;
}

export function createCache(config?: CacheConfig): Cache {
  return new Cache(config);
}

// Default export
export default Cache;
