// ============================================================
// Analytics Utility
// Event tracking and analytics helpers
// ============================================================

// ============================================================
// Types
// ============================================================

export interface AnalyticsEvent {
  name: string;
  category: string;
  action?: string;
  label?: string;
  value?: number;
  timestamp: Date;
  properties?: Record<string, unknown>;
  userId?: string;
  sessionId?: string;
}

export interface PageView {
  path: string;
  title: string;
  referrer?: string;
  timestamp: Date;
  duration?: number;
  userId?: string;
  sessionId?: string;
}

export interface AnalyticsConfig {
  enabled: boolean;
  debug: boolean;
  trackPageViews: boolean;
  trackClicks: boolean;
  trackScrollDepth: boolean;
  sampleRate: number;
  excludePaths?: string[];
  customDimensions?: Record<string, string>;
}

export interface Analytics {
  config: AnalyticsConfig;
  track: (event: Omit<AnalyticsEvent, 'timestamp'>) => void;
  pageView: (view: Omit<PageView, 'timestamp'>) => void;
  identify: (userId: string, traits?: Record<string, unknown>) => void;
  setCustomDimension: (key: string, value: string) => void;
  getSessionId: () => string;
  flush: () => void;
}

// ============================================================
// Default Config
// ============================================================

const DEFAULT_CONFIG: AnalyticsConfig = {
  enabled: true,
  debug: false,
  trackPageViews: true,
  trackClicks: true,
  trackScrollDepth: true,
  sampleRate: 1.0,
  excludePaths: ['/api', '/_next'],
};

// ============================================================
// Session Management
// ============================================================

let sessionId: string | null = null;
let userId: string | null = null;

function generateSessionId(): string {
  return `session_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
}

function getOrCreateSessionId(): string {
  if (typeof window === 'undefined') return 'server';

  if (!sessionId) {
    const stored = sessionStorage.getItem('analytics_session_id');
    if (stored) {
      sessionId = stored;
    } else {
      sessionId = generateSessionId();
      sessionStorage.setItem('analytics_session_id', sessionId);
    }
  }
  return sessionId;
}

// ============================================================
// Event Queue
// ============================================================

const eventQueue: AnalyticsEvent[] = [];
const pageViewQueue: PageView[] = [];

// ============================================================
// Analytics Implementation
// ============================================================

class AnalyticsService implements Analytics {
  config: AnalyticsConfig;

  constructor(config: Partial<AnalyticsConfig> = {}) {
    this.config = { ...DEFAULT_CONFIG, ...config };
  }

  private shouldTrack(): boolean {
    if (!this.config.enabled) return false;
    if (this.config.sampleRate < 1) {
      return Math.random() < this.config.sampleRate;
    }
    return true;
  }

  private shouldExcludePath(path: string): boolean {
    return (
      this.config.excludePaths?.some((excluded) =>
        path.startsWith(excluded)
      ) ?? false
    );
  }

  private log(type: string, data: unknown): void {
    if (this.config.debug) {
      console.log(`[Analytics] ${type}:`, data);
    }
  }

  track(event: Omit<AnalyticsEvent, 'timestamp'>): void {
    if (!this.shouldTrack()) return;

    const fullEvent: AnalyticsEvent = {
      ...event,
      timestamp: new Date(),
      sessionId: getOrCreateSessionId(),
      userId: userId || undefined,
    };

    eventQueue.push(fullEvent);
    this.log('Event', fullEvent);

    // In a real app, send to analytics endpoint
    this.sendToEndpoint('event', fullEvent);
  }

  pageView(view: Omit<PageView, 'timestamp'>): void {
    if (!this.config.trackPageViews) return;
    if (!this.shouldTrack()) return;
    if (this.shouldExcludePath(view.path)) return;

    const fullView: PageView = {
      ...view,
      timestamp: new Date(),
      sessionId: getOrCreateSessionId(),
      userId: userId || undefined,
    };

    pageViewQueue.push(fullView);
    this.log('Page View', fullView);

    // In a real app, send to analytics endpoint
    this.sendToEndpoint('pageview', fullView);
  }

  identify(id: string, traits?: Record<string, unknown>): void {
    userId = id;
    localStorage.setItem('analytics_user_id', id);

    this.log('Identify', { userId: id, traits });

    if (traits) {
      this.sendToEndpoint('identify', { userId: id, traits });
    }
  }

  setCustomDimension(key: string, value: string): void {
    this.config.customDimensions = {
      ...this.config.customDimensions,
      [key]: value,
    };
    this.log('Custom Dimension', { key, value });
  }

  getSessionId(): string {
    return getOrCreateSessionId();
  }

  flush(): void {
    // Send all queued events
    if (eventQueue.length > 0) {
      this.sendToEndpoint('events', eventQueue);
      eventQueue.length = 0;
    }

    if (pageViewQueue.length > 0) {
      this.sendToEndpoint('pageviews', pageViewQueue);
      pageViewQueue.length = 0;
    }
  }

  private async sendToEndpoint(type: string, data: unknown): Promise<void> {
    // In a real app, this would send to your analytics server
    // For now, we just log in debug mode
    if (this.config.debug) {
      console.log(`[Analytics] Would send ${type}:`, data);
    }

    // Example: send to server
    // try {
    //   await fetch('/api/analytics', {
    //     method: 'POST',
    //     headers: { 'Content-Type': 'application/json' },
    //     body: JSON.stringify({ type, data }),
    //   });
    // } catch (error) {
    //   console.error('Analytics error:', error);
    // }
  }
}

// ============================================================
// Singleton Instance
// ============================================================

let analyticsInstance: AnalyticsService | null = null;

export function initAnalytics(config?: Partial<AnalyticsConfig>): Analytics {
  if (!analyticsInstance) {
    analyticsInstance = new AnalyticsService(config);
  }
  return analyticsInstance;
}

export function getAnalytics(): Analytics {
  if (!analyticsInstance) {
    analyticsInstance = new AnalyticsService();
  }
  return analyticsInstance;
}

// ============================================================
// Convenience Functions
// ============================================================

/**
 * Track a custom event
 */
export function trackEvent(
  name: string,
  properties?: Record<string, unknown>
): void {
  getAnalytics().track({
    name,
    category: 'custom',
    properties,
  });
}

/**
 * Track a button click
 */
export function trackClick(
  elementName: string,
  properties?: Record<string, unknown>
): void {
  getAnalytics().track({
    name: 'click',
    category: 'interaction',
    action: 'click',
    label: elementName,
    properties,
  });
}

/**
 * Track a form submission
 */
export function trackFormSubmit(
  formName: string,
  success: boolean,
  properties?: Record<string, unknown>
): void {
  getAnalytics().track({
    name: 'form_submit',
    category: 'form',
    action: success ? 'submit_success' : 'submit_error',
    label: formName,
    properties,
  });
}

/**
 * Track search
 */
export function trackSearch(
  query: string,
  resultsCount: number,
  properties?: Record<string, unknown>
): void {
  getAnalytics().track({
    name: 'search',
    category: 'search',
    action: 'query',
    label: query,
    value: resultsCount,
    properties,
  });
}

/**
 * Track error
 */
export function trackError(
  error: Error | string,
  properties?: Record<string, unknown>
): void {
  getAnalytics().track({
    name: 'error',
    category: 'error',
    action: 'occurrence',
    label: error instanceof Error ? error.message : error,
    properties: {
      ...properties,
      stack: error instanceof Error ? error.stack : undefined,
    },
  });
}

/**
 * Track timing
 */
export function trackTiming(
  category: string,
  variable: string,
  timeMs: number
): void {
  getAnalytics().track({
    name: 'timing',
    category,
    action: variable,
    value: timeMs,
  });
}

// ============================================================
// Auto-tracking Utilities
// ============================================================

/**
 * Measure function execution time
 */
export function measureTime<T>(
  fn: () => T,
  category: string,
  variable: string
): T {
  const start = performance.now();
  const result = fn();
  const duration = performance.now() - start;
  trackTiming(category, variable, Math.round(duration));
  return result;
}

/**
 * Measure async function execution time
 */
export async function measureTimeAsync<T>(
  fn: () => Promise<T>,
  category: string,
  variable: string
): Promise<T> {
  const start = performance.now();
  const result = await fn();
  const duration = performance.now() - start;
  trackTiming(category, variable, Math.round(duration));
  return result;
}
