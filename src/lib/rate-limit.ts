/**
 * Rate Limiting Utilities
 * Token bucket and sliding window implementations for API rate limiting
 */

// ============================================================
// Types
// ============================================================

interface RateLimitState {
  tokens: number;
  lastRefill: number;
  windowStart: number;
  requestCount: number;
}

interface RateLimitResult {
  allowed: boolean;
  remaining: number;
  resetAt: number;
  retryAfter?: number;
}

interface RateLimitConfig {
  maxRequests: number;
  windowMs: number;
  tokensPerInterval?: number;
  interval?: number;
}

// ============================================================
// Token Bucket Rate Limiter
// ============================================================

export class TokenBucket {
  private tokens: number;
  private lastRefill: number;
  private readonly maxTokens: number;
  private readonly refillRate: number; // tokens per ms
  private readonly refillInterval: number;

  constructor(maxTokens: number, refillRate: number, refillInterval = 1000) {
    this.maxTokens = maxTokens;
    this.tokens = maxTokens;
    this.lastRefill = Date.now();
    this.refillRate = refillRate;
    this.refillInterval = refillInterval;
  }

  private refill(): void {
    const now = Date.now();
    const timePassed = now - this.lastRefill;
    const tokensToAdd = (timePassed / this.refillInterval) * this.refillRate;
    
    this.tokens = Math.min(this.maxTokens, this.tokens + tokensToAdd);
    this.lastRefill = now;
  }

  consume(tokens = 1): RateLimitResult {
    this.refill();

    if (this.tokens >= tokens) {
      this.tokens -= tokens;
      return {
        allowed: true,
        remaining: Math.floor(this.tokens),
        resetAt: this.lastRefill + this.refillInterval,
      };
    }

    const deficit = tokens - this.tokens;
    const waitTime = (deficit / this.refillRate) * this.refillInterval;

    return {
      allowed: false,
      remaining: 0,
      resetAt: this.lastRefill + this.refillInterval,
      retryAfter: Math.ceil(waitTime),
    };
  }

  getState(): { tokens: number; maxTokens: number } {
    this.refill();
    return {
      tokens: Math.floor(this.tokens),
      maxTokens: this.maxTokens,
    };
  }
}

// ============================================================
// Sliding Window Rate Limiter
// ============================================================

export class SlidingWindowRateLimiter {
  private requests: number[] = [];
  private readonly maxRequests: number;
  private readonly windowMs: number;

  constructor(maxRequests: number, windowMs: number) {
    this.maxRequests = maxRequests;
    this.windowMs = windowMs;
  }

  private cleanup(): void {
    const now = Date.now();
    const windowStart = now - this.windowMs;
    this.requests = this.requests.filter(timestamp => timestamp > windowStart);
  }

  check(): RateLimitResult {
    this.cleanup();
    
    const remaining = this.maxRequests - this.requests.length;
    const resetAt = this.requests.length > 0 
      ? this.requests[0] + this.windowMs 
      : Date.now() + this.windowMs;

    if (this.requests.length < this.maxRequests) {
      return {
        allowed: true,
        remaining: remaining - 1,
        resetAt,
      };
    }

    return {
      allowed: false,
      remaining: 0,
      resetAt,
      retryAfter: resetAt - Date.now(),
    };
  }

  consume(): RateLimitResult {
    const result = this.check();
    
    if (result.allowed) {
      this.requests.push(Date.now());
    }
    
    return result;
  }

  getState(): { requestCount: number; maxRequests: number; windowMs: number } {
    this.cleanup();
    return {
      requestCount: this.requests.length,
      maxRequests: this.maxRequests,
      windowMs: this.windowMs,
    };
  }
}

// ============================================================
// Memory Store for Rate Limiting
// ============================================================

class RateLimitStore {
  private store = new Map<string, TokenBucket | SlidingWindowRateLimiter>();
  private cleanupInterval: NodeJS.Timeout | null = null;

  constructor(cleanupIntervalMs = 60000) {
    // Periodic cleanup of expired entries
    if (typeof setInterval !== 'undefined') {
      this.cleanupInterval = setInterval(() => this.cleanup(), cleanupIntervalMs);
    }
  }

  get(key: string): TokenBucket | SlidingWindowRateLimiter | undefined {
    return this.store.get(key);
  }

  set(key: string, limiter: TokenBucket | SlidingWindowRateLimiter): void {
    this.store.set(key, limiter);
  }

  delete(key: string): void {
    this.store.delete(key);
  }

  private cleanup(): void {
    // In a real implementation, you'd track last access time
    // and remove entries that haven't been accessed recently
    if (this.store.size > 10000) {
      // Clear oldest 20% when store gets too large
      const entries = Array.from(this.store.keys());
      const toDelete = Math.floor(entries.length * 0.2);
      entries.slice(0, toDelete).forEach(key => this.store.delete(key));
    }
  }

  destroy(): void {
    if (this.cleanupInterval) {
      clearInterval(this.cleanupInterval);
    }
    this.store.clear();
  }
}

// ============================================================
// Rate Limiter Factory
// ============================================================

const defaultStore = new RateLimitStore();

export interface RateLimiterOptions {
  type?: 'token-bucket' | 'sliding-window';
  maxRequests?: number;
  windowMs?: number;
  tokensPerInterval?: number;
  interval?: number;
  keyGenerator?: (identifier: string) => string;
  store?: RateLimitStore;
}

export function createRateLimiter(options: RateLimiterOptions = {}) {
  const {
    type = 'sliding-window',
    maxRequests = 100,
    windowMs = 60000,
    tokensPerInterval = maxRequests,
    interval = windowMs,
    keyGenerator = (id: string) => id,
    store = defaultStore,
  } = options;

  return {
    check(identifier: string): RateLimitResult {
      const key = keyGenerator(identifier);
      let limiter = store.get(key);

      if (!limiter) {
        limiter = type === 'token-bucket'
          ? new TokenBucket(maxRequests, tokensPerInterval, interval)
          : new SlidingWindowRateLimiter(maxRequests, windowMs);
        store.set(key, limiter);
      }

      if (limiter instanceof TokenBucket) {
        return limiter.consume();
      }
      
      return limiter.consume();
    },

    reset(identifier: string): void {
      const key = keyGenerator(identifier);
      store.delete(key);
    },
  };
}

// ============================================================
// Middleware Helper for Next.js API Routes
// ============================================================

export function withRateLimit(
  handler: (req: Request) => Promise<Response>,
  options: RateLimiterOptions & { 
    getIdentifier?: (req: Request) => string;
  } = {}
) {
  const rateLimiter = createRateLimiter(options);
  const getIdentifier = options.getIdentifier || ((req: Request) => {
    // Default: use IP or fallback to a header
    return req.headers.get('x-forwarded-for') || 
           req.headers.get('x-real-ip') || 
           'anonymous';
  });

  return async (req: Request): Promise<Response> => {
    const identifier = getIdentifier(req);
    const result = rateLimiter.check(identifier);

    // Add rate limit headers
    const headers = new Headers();
    headers.set('X-RateLimit-Limit', options.maxRequests?.toString() || '100');
    headers.set('X-RateLimit-Remaining', result.remaining.toString());
    headers.set('X-RateLimit-Reset', result.resetAt.toString());

    if (!result.allowed) {
      headers.set('Retry-After', Math.ceil((result.retryAfter || 1000) / 1000).toString());
      
      return new Response(
        JSON.stringify({
          code: 'RATE_LIMIT_EXCEEDED',
          message: 'Too many requests. Please try again later.',
          status: 429,
          retryAfter: result.retryAfter,
        }),
        {
          status: 429,
          headers,
        }
      );
    }

    const response = await handler(req);
    
    // Add rate limit headers to successful response
    const newHeaders = new Headers(response.headers);
    headers.forEach((value, key) => newHeaders.set(key, value));
    
    return new Response(response.body, {
      status: response.status,
      statusText: response.statusText,
      headers: newHeaders,
    });
  };
}

export default createRateLimiter;
