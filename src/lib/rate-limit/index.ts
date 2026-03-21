'use client';

/**
 * Rate Limiting Middleware
 * Protects against abuse with multiple rate limiting strategies
 */

// ============================================================================
// Types
// ============================================================================

export type RateLimitStrategy = 'fixed-window' | 'sliding-window' | 'token-bucket' | 'leaky-bucket';

export interface RateLimitConfig {
  strategy: RateLimitStrategy;
  limit: number;
  windowMs: number;
  keyGenerator?: (request: RateLimitRequest) => string;
  skip?: (request: RateLimitRequest) => boolean;
  onRateLimited?: (info: RateLimitInfo) => void;
}

export interface RateLimitRequest {
  ip?: string;
  userId?: string;
  path?: string;
  method?: string;
  headers?: Record<string, string>;
}

export interface RateLimitInfo {
  key: string;
  limit: number;
  remaining: number;
  reset: number;
  retryAfter: number;
}

export interface RateLimitResult {
  allowed: boolean;
  info: RateLimitInfo;
}

interface WindowEntry {
  count: number;
  resetAt: number;
}

interface SlidingWindowEntry {
  timestamps: number[];
}

interface TokenBucketEntry {
  tokens: number;
  lastRefill: number;
}

interface LeakyBucketEntry {
  queue: number[];
  lastDrain: number;
}

// ============================================================================
// Rate Limiter Implementation
// ============================================================================

export class RateLimiter {
  private config: Required<RateLimitConfig>;
  private store: Map<string, WindowEntry | SlidingWindowEntry | TokenBucketEntry | LeakyBucketEntry> = new Map();
  private cleanupTimer: NodeJS.Timeout | null = null;

  constructor(config: RateLimitConfig) {
    this.config = {
      keyGenerator: (req) => req.ip || req.userId || 'anonymous',
      skip: () => false,
      onRateLimited: () => {},
      ...config,
    };

    this.startCleanup();
  }

  check(request: RateLimitRequest): RateLimitResult {
    if (this.config.skip(request)) {
      return {
        allowed: true,
        info: {
          key: 'skipped',
          limit: this.config.limit,
          remaining: this.config.limit,
          reset: Date.now() + this.config.windowMs,
          retryAfter: 0,
        },
      };
    }

    const key = this.config.keyGenerator(request);

    switch (this.config.strategy) {
      case 'fixed-window':
        return this.checkFixedWindow(key);
      case 'sliding-window':
        return this.checkSlidingWindow(key);
      case 'token-bucket':
        return this.checkTokenBucket(key);
      case 'leaky-bucket':
        return this.checkLeakyBucket(key);
    }
  }

  // Fixed Window
  private checkFixedWindow(key: string): RateLimitResult {
    const now = Date.now();
    let entry = this.store.get(key) as WindowEntry | undefined;

    if (!entry || now >= entry.resetAt) {
      entry = {
        count: 0,
        resetAt: now + this.config.windowMs,
      };
    }

    entry.count++;
    this.store.set(key, entry);

    const allowed = entry.count <= this.config.limit;
    const remaining = Math.max(0, this.config.limit - entry.count);
    const retryAfter = allowed ? 0 : Math.ceil((entry.resetAt - now) / 1000);

    const info: RateLimitInfo = {
      key,
      limit: this.config.limit,
      remaining,
      reset: entry.resetAt,
      retryAfter,
    };

    if (!allowed) {
      this.config.onRateLimited(info);
    }

    return { allowed, info };
  }

  // Sliding Window
  private checkSlidingWindow(key: string): RateLimitResult {
    const now = Date.now();
    const windowStart = now - this.config.windowMs;
    
    let entry = this.store.get(key) as SlidingWindowEntry | undefined;
    
    if (!entry) {
      entry = { timestamps: [] };
    }

    // Remove timestamps outside the window
    entry.timestamps = entry.timestamps.filter(ts => ts > windowStart);

    const allowed = entry.timestamps.length < this.config.limit;

    if (allowed) {
      entry.timestamps.push(now);
    }

    this.store.set(key, entry);

    const remaining = Math.max(0, this.config.limit - entry.timestamps.length);
    const oldestTimestamp = entry.timestamps[0] || now;
    const reset = oldestTimestamp + this.config.windowMs;
    const retryAfter = allowed ? 0 : Math.ceil((reset - now) / 1000);

    const info: RateLimitInfo = {
      key,
      limit: this.config.limit,
      remaining,
      reset,
      retryAfter,
    };

    if (!allowed) {
      this.config.onRateLimited(info);
    }

    return { allowed, info };
  }

  // Token Bucket
  private checkTokenBucket(key: string): RateLimitResult {
    const now = Date.now();
    let entry = this.store.get(key) as TokenBucketEntry | undefined;

    if (!entry) {
      entry = {
        tokens: this.config.limit,
        lastRefill: now,
      };
    }

    // Refill tokens
    const elapsed = now - entry.lastRefill;
    const refillRate = this.config.limit / this.config.windowMs; // tokens per ms
    const tokensToAdd = elapsed * refillRate;
    entry.tokens = Math.min(this.config.limit, entry.tokens + tokensToAdd);
    entry.lastRefill = now;

    const allowed = entry.tokens >= 1;

    if (allowed) {
      entry.tokens -= 1;
    }

    this.store.set(key, entry);

    const remaining = Math.floor(entry.tokens);
    const msUntilNextToken = entry.tokens < 1 ? (1 - entry.tokens) / refillRate : 0;
    const reset = now + this.config.windowMs;
    const retryAfter = allowed ? 0 : Math.ceil(msUntilNextToken / 1000);

    const info: RateLimitInfo = {
      key,
      limit: this.config.limit,
      remaining,
      reset,
      retryAfter,
    };

    if (!allowed) {
      this.config.onRateLimited(info);
    }

    return { allowed, info };
  }

  // Leaky Bucket
  private checkLeakyBucket(key: string): RateLimitResult {
    const now = Date.now();
    let entry = this.store.get(key) as LeakyBucketEntry | undefined;

    if (!entry) {
      entry = {
        queue: [],
        lastDrain: now,
      };
    }

    // Drain the bucket
    const drainRate = this.config.windowMs / this.config.limit; // ms per request
    const elapsed = now - entry.lastDrain;
    const toDrain = Math.floor(elapsed / drainRate);
    
    if (toDrain > 0) {
      entry.queue = entry.queue.slice(toDrain);
      entry.lastDrain = now;
    }

    const allowed = entry.queue.length < this.config.limit;

    if (allowed) {
      entry.queue.push(now);
    }

    this.store.set(key, entry);

    const remaining = Math.max(0, this.config.limit - entry.queue.length);
    const reset = now + this.config.windowMs;
    const retryAfter = allowed ? 0 : Math.ceil(drainRate / 1000);

    const info: RateLimitInfo = {
      key,
      limit: this.config.limit,
      remaining,
      reset,
      retryAfter,
    };

    if (!allowed) {
      this.config.onRateLimited(info);
    }

    return { allowed, info };
  }

  // Reset
  reset(key: string): void {
    this.store.delete(key);
  }

  resetAll(): void {
    this.store.clear();
  }

  // Cleanup
  private startCleanup(): void {
    this.cleanupTimer = setInterval(() => {
      const now = Date.now();
      const staleThreshold = now - this.config.windowMs * 2;

      this.store.forEach((entry, key) => {
        if ('resetAt' in entry && entry.resetAt < staleThreshold) {
          this.store.delete(key);
        } else if ('timestamps' in entry && entry.timestamps.every(ts => ts < staleThreshold)) {
          this.store.delete(key);
        } else if ('lastRefill' in entry && entry.lastRefill < staleThreshold) {
          this.store.delete(key);
        } else if ('lastDrain' in entry && entry.lastDrain < staleThreshold) {
          this.store.delete(key);
        }
      });
    }, this.config.windowMs);
  }

  destroy(): void {
    if (this.cleanupTimer) {
      clearInterval(this.cleanupTimer);
    }
    this.store.clear();
  }
}

// ============================================================================
// Composable Rate Limiters
// ============================================================================

export class CompositeRateLimiter {
  private limiters: Array<{ name: string; limiter: RateLimiter }> = [];

  add(name: string, limiter: RateLimiter): this {
    this.limiters.push({ name, limiter });
    return this;
  }

  check(request: RateLimitRequest): { allowed: boolean; blockedBy?: string; results: Record<string, RateLimitResult> } {
    const results: Record<string, RateLimitResult> = {};
    let allowed = true;
    let blockedBy: string | undefined;

    for (const { name, limiter } of this.limiters) {
      const result = limiter.check(request);
      results[name] = result;

      if (!result.allowed && allowed) {
        allowed = false;
        blockedBy = name;
      }
    }

    return { allowed, blockedBy, results };
  }

  reset(key: string): void {
    this.limiters.forEach(({ limiter }) => limiter.reset(key));
  }

  resetAll(): void {
    this.limiters.forEach(({ limiter }) => limiter.resetAll());
  }

  destroy(): void {
    this.limiters.forEach(({ limiter }) => limiter.destroy());
    this.limiters = [];
  }
}

// ============================================================================
// Pre-configured Rate Limiters
// ============================================================================

export const RATE_LIMITS = {
  // API endpoints
  api: {
    strategy: 'sliding-window' as RateLimitStrategy,
    limit: 100,
    windowMs: 60 * 1000, // 100 requests per minute
  },
  
  // Search queries
  search: {
    strategy: 'token-bucket' as RateLimitStrategy,
    limit: 30,
    windowMs: 60 * 1000, // 30 searches per minute
  },
  
  // Form submissions
  submit: {
    strategy: 'fixed-window' as RateLimitStrategy,
    limit: 5,
    windowMs: 60 * 1000, // 5 submissions per minute
  },
  
  // File uploads
  upload: {
    strategy: 'leaky-bucket' as RateLimitStrategy,
    limit: 10,
    windowMs: 5 * 60 * 1000, // 10 uploads per 5 minutes
  },
  
  // Authentication attempts
  auth: {
    strategy: 'fixed-window' as RateLimitStrategy,
    limit: 5,
    windowMs: 15 * 60 * 1000, // 5 attempts per 15 minutes
  },
  
  // Export / download
  export: {
    strategy: 'token-bucket' as RateLimitStrategy,
    limit: 3,
    windowMs: 60 * 60 * 1000, // 3 exports per hour
  },
};

// ============================================================================
// React Integration
// ============================================================================

import { useState, useEffect, useCallback, useRef, createContext, useContext } from 'react';
import React from 'react';

// Context
interface RateLimitContextValue {
  isLimited: boolean;
  info: RateLimitInfo | null;
  check: (action: string) => boolean;
  reset: () => void;
}

export const RateLimitContext = createContext<RateLimitContextValue>({
  isLimited: false,
  info: null,
  check: () => true,
  reset: () => {},
});

// Hook: Rate limit check
export function useRateLimit(
  config: RateLimitConfig,
  request?: Partial<RateLimitRequest>
): {
  isLimited: boolean;
  info: RateLimitInfo | null;
  check: () => boolean;
  remaining: number;
  retryAfter: number;
} {
  const limiterRef = useRef<RateLimiter>(new RateLimiter(config));
  const [info, setInfo] = useState<RateLimitInfo | null>(null);
  const [isLimited, setIsLimited] = useState(false);

  useEffect(() => {
    return () => {
      limiterRef.current.destroy();
    };
  }, []);

  const check = useCallback(() => {
    const result = limiterRef.current.check({
      ...request,
    });
    setInfo(result.info);
    setIsLimited(!result.allowed);
    return result.allowed;
  }, [request]);

  return {
    isLimited,
    info,
    check,
    remaining: info?.remaining ?? config.limit,
    retryAfter: info?.retryAfter ?? 0,
  };
}

// Hook: Throttled function
export function useThrottle<T extends (...args: unknown[]) => unknown>(
  fn: T,
  config: RateLimitConfig
): {
  call: (...args: Parameters<T>) => ReturnType<T> | undefined;
  isLimited: boolean;
  remaining: number;
} {
  const limiterRef = useRef<RateLimiter>(new RateLimiter(config));
  const [isLimited, setIsLimited] = useState(false);
  const [remaining, setRemaining] = useState(config.limit);

  useEffect(() => {
    return () => {
      limiterRef.current.destroy();
    };
  }, []);

  const call = useCallback((...args: Parameters<T>) => {
    const result = limiterRef.current.check({});
    setIsLimited(!result.allowed);
    setRemaining(result.info.remaining);

    if (result.allowed) {
      return fn(...args) as ReturnType<T>;
    }
    return undefined;
  }, [fn]);

  return { call, isLimited, remaining };
}

// Hook: Debounced function
export function useDebounce<T extends (...args: unknown[]) => unknown>(
  fn: T,
  delayMs: number
): (...args: Parameters<T>) => void {
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  return useCallback((...args: Parameters<T>) => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    timeoutRef.current = setTimeout(() => {
      fn(...args);
    }, delayMs);
  }, [fn, delayMs]);
}

// ============================================================================
// UI Components
// ============================================================================

import { AlertCircle, Clock, Shield } from 'lucide-react';

interface RateLimitWarningProps {
  info: RateLimitInfo;
  message?: string;
}

export function RateLimitWarning({ info, message }: RateLimitWarningProps): React.ReactElement {
  const [countdown, setCountdown] = useState(info.retryAfter);

  useEffect(() => {
    setCountdown(info.retryAfter);
    
    if (info.retryAfter > 0) {
      const interval = setInterval(() => {
        setCountdown(prev => Math.max(0, prev - 1));
      }, 1000);
      return () => clearInterval(interval);
    }
  }, [info.retryAfter]);

  return (
    <div className="bg-zinc-800/30 border border-zinc-800 p-4 flex items-start gap-3">
      <AlertCircle className="w-5 h-5 text-zinc-400 flex-shrink-0 mt-0.5" />
      <div>
        <p className="text-sm text-zinc-300">
          {message || 'You have been rate limited. Please wait before trying again.'}
        </p>
        {countdown > 0 && (
          <p className="text-xs text-zinc-400 mt-1 flex items-center gap-1">
            <Clock className="w-3 h-3" />
            Retry in {countdown} second{countdown !== 1 ? 's' : ''}
          </p>
        )}
      </div>
    </div>
  );
}

interface RateLimitStatusProps {
  remaining: number;
  limit: number;
  showWarning?: number; // Show warning when remaining drops below this
}

export function RateLimitStatus({ remaining, limit, showWarning = 5 }: RateLimitStatusProps): React.ReactElement {
  const percentage = (remaining / limit) * 100;
  const isLow = remaining <= showWarning;

  return (
    <div className="flex items-center gap-2">
      <Shield className={`w-4 h-4 ${isLow ? 'text-yellow-400' : 'text-zinc-500'}`} />
      <span className={`text-xs ${isLow ? 'text-yellow-400' : 'text-zinc-500'}`}>
        {remaining} / {limit} requests remaining
      </span>
      <div className="w-20 h-1.5 bg-zinc-800">
        <div
          className={`h-full transition-all duration-300 ${
            percentage > 50 ? 'bg-emerald-500' :
            percentage > 20 ? 'bg-yellow-500' :
            'bg-zinc-600'
          }`}
          style={{ width: `${percentage}%` }}
        />
      </div>
    </div>
  );
}

interface RateLimitedButtonProps {
  onClick: () => void;
  config: RateLimitConfig;
  children: React.ReactNode;
  className?: string;
  disabled?: boolean;
}

export function RateLimitedButton({
  onClick,
  config,
  children,
  className = '',
  disabled = false,
}: RateLimitedButtonProps): React.ReactElement {
  const { isLimited, check, remaining, retryAfter } = useRateLimit(config);
  const [showWarning, setShowWarning] = useState(false);

  const handleClick = () => {
    if (check()) {
      onClick();
    } else {
      setShowWarning(true);
      setTimeout(() => setShowWarning(false), 3000);
    }
  };

  return (
    <div className="relative">
      <button
        onClick={handleClick}
        disabled={disabled || isLimited}
        className={`${className} ${isLimited ? 'opacity-50 cursor-not-allowed' : ''}`}
      >
        {children}
      </button>
      
      {isLimited && (
        <span className="absolute -top-2 -right-2 text-xs bg-zinc-600 text-white px-1.5 py-0.5">
          {retryAfter}s
        </span>
      )}
      
      {showWarning && !isLimited && remaining <= 3 && (
        <span className="absolute top-full left-0 mt-1 text-xs text-yellow-400 whitespace-nowrap">
          {remaining} requests left
        </span>
      )}
    </div>
  );
}

// ============================================================================
// Factory
// ============================================================================

export function createRateLimiter(config: RateLimitConfig): RateLimiter {
  return new RateLimiter(config);
}

export function createCompositeRateLimiter(
  configs: Array<{ name: string; config: RateLimitConfig }>
): CompositeRateLimiter {
  const composite = new CompositeRateLimiter();
  configs.forEach(({ name, config }) => {
    composite.add(name, new RateLimiter(config));
  });
  return composite;
}

// Default export
export default RateLimiter;
