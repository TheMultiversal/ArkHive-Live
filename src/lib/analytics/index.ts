'use client';

/**
 * Analytics Tracking System
 * Event tracking, page views, user journeys, and conversion funnels
 */

import React, { createContext, useContext, useEffect, useRef, useCallback, ReactElement } from 'react';

// ============================================================================
// Types
// ============================================================================

export interface AnalyticsEvent {
  name: string;
  category: string;
  action: string;
  label?: string;
  value?: number;
  properties?: Record<string, unknown>;
  timestamp: number;
  sessionId: string;
  userId?: string;
  pageUrl: string;
  pageTitle: string;
}

export interface PageView {
  url: string;
  title: string;
  referrer: string;
  timestamp: number;
  sessionId: string;
  userId?: string;
  duration?: number;
  scrollDepth?: number;
}

export interface UserJourney {
  sessionId: string;
  userId?: string;
  startTime: number;
  endTime?: number;
  pageViews: PageView[];
  events: AnalyticsEvent[];
  conversionGoals: ConversionGoal[];
}

export interface ConversionGoal {
  name: string;
  achieved: boolean;
  timestamp?: number;
  value?: number;
}

export interface FunnelStep {
  name: string;
  eventName: string;
  count: number;
  dropoff: number;
  conversionRate: number;
}

export interface AnalyticsConfig {
  trackPageViews?: boolean;
  trackClicks?: boolean;
  trackScrollDepth?: boolean;
  trackTimeOnPage?: boolean;
  sampleRate?: number; // 0-1, percentage of sessions to track
  debug?: boolean;
  endpoints?: {
    events?: string;
    pageViews?: string;
    batch?: string;
  };
  flushInterval?: number;
  maxBatchSize?: number;
}

// ============================================================================
// Session & ID Management
// ============================================================================

function generateId(): string {
  return `${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;
}

function getSessionId(): string {
  if (typeof window === 'undefined') return '';
  
  let sessionId = sessionStorage.getItem('analytics_session_id');
  if (!sessionId) {
    sessionId = generateId();
    sessionStorage.setItem('analytics_session_id', sessionId);
  }
  return sessionId;
}

function getUserId(): string | undefined {
  if (typeof window === 'undefined') return undefined;
  return localStorage.getItem('analytics_user_id') || undefined;
}

// ============================================================================
// Analytics Core Class
// ============================================================================

class AnalyticsTracker {
  private config: AnalyticsConfig;
  private eventQueue: AnalyticsEvent[] = [];
  private pageViewQueue: PageView[] = [];
  private currentJourney: UserJourney | null = null;
  private flushTimer: NodeJS.Timeout | null = null;
  private pageStartTime: number = 0;
  private maxScrollDepth: number = 0;
  private isEnabled: boolean = true;

  constructor(config: AnalyticsConfig = {}) {
    this.config = {
      trackPageViews: true,
      trackClicks: true,
      trackScrollDepth: true,
      trackTimeOnPage: true,
      sampleRate: 1,
      debug: false,
      flushInterval: 10000,
      maxBatchSize: 50,
      ...config,
    };

    this.isEnabled = Math.random() < (this.config.sampleRate || 1);
    
    if (typeof window !== 'undefined' && this.isEnabled) {
      this.init();
    }
  }

  private init(): void {
    this.currentJourney = {
      sessionId: getSessionId(),
      userId: getUserId(),
      startTime: Date.now(),
      pageViews: [],
      events: [],
      conversionGoals: [],
    };

    this.startFlushTimer();
    this.setupEventListeners();
    this.trackPageView();
  }

  private startFlushTimer(): void {
    if (this.flushTimer) clearInterval(this.flushTimer);
    this.flushTimer = setInterval(() => {
      this.flush();
    }, this.config.flushInterval);
  }

  private setupEventListeners(): void {
    if (this.config.trackClicks) {
      document.addEventListener('click', this.handleClick);
    }

    if (this.config.trackScrollDepth) {
      window.addEventListener('scroll', this.handleScroll, { passive: true });
    }

    // Track page visibility
    document.addEventListener('visibilitychange', this.handleVisibility);
    window.addEventListener('beforeunload', this.handleUnload);
  }

  private handleClick = (event: MouseEvent): void => {
    const target = event.target as HTMLElement;
    const trackableElement = target.closest('[data-track]');
    
    if (trackableElement) {
      const trackData = trackableElement.getAttribute('data-track');
      const category = trackableElement.getAttribute('data-track-category') || 'interaction';
      const label = trackableElement.getAttribute('data-track-label');
      
      if (trackData) {
        this.track(trackData, {
          category,
          action: 'click',
          label,
          properties: {
            elementTag: target.tagName,
            elementText: target.textContent?.substring(0, 100),
          },
        });
      }
    }

    // Track link clicks
    const link = target.closest('a');
    if (link) {
      const href = link.getAttribute('href');
      const isExternal = href?.startsWith('http') && !href?.includes(window.location.hostname);
      
      this.track('link_click', {
        category: isExternal ? 'outbound' : 'navigation',
        action: 'click',
        label: href || undefined,
        properties: {
          text: link.textContent?.substring(0, 100),
          isExternal,
        },
      });
    }
  };

  private handleScroll = (): void => {
    const scrollTop = window.scrollY;
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    const scrollPercent = Math.round((scrollTop / docHeight) * 100);
    
    this.maxScrollDepth = Math.max(this.maxScrollDepth, scrollPercent);
  };

  private handleVisibility = (): void => {
    if (document.hidden) {
      this.flush();
    }
  };

  private handleUnload = (): void => {
    // Send final page view with duration
    const duration = Date.now() - this.pageStartTime;
    this.updateLastPageView(duration);
    this.flush(true);
  };

  private updateLastPageView(duration: number): void {
    const lastPageView = this.pageViewQueue[this.pageViewQueue.length - 1];
    if (lastPageView) {
      lastPageView.duration = duration;
      lastPageView.scrollDepth = this.maxScrollDepth;
    }
  }

  // Public API

  track(
    name: string,
    options: {
      category?: string;
      action?: string;
      label?: string;
      value?: number;
      properties?: Record<string, unknown>;
    } = {}
  ): void {
    if (!this.isEnabled) return;

    const event: AnalyticsEvent = {
      name,
      category: options.category || 'general',
      action: options.action || name,
      label: options.label,
      value: options.value,
      properties: options.properties,
      timestamp: Date.now(),
      sessionId: getSessionId(),
      userId: getUserId(),
      pageUrl: typeof window !== 'undefined' ? window.location.href : '',
      pageTitle: typeof document !== 'undefined' ? document.title : '',
    };

    this.eventQueue.push(event);
    this.currentJourney?.events.push(event);

    if (this.config.debug) {
      console.log('[Analytics] Event:', event);
    }

    if (this.eventQueue.length >= (this.config.maxBatchSize || 50)) {
      this.flush();
    }
  }

  trackPageView(customTitle?: string, customUrl?: string): void {
    if (!this.isEnabled || typeof window === 'undefined') return;

    // Update previous page view with duration
    if (this.pageStartTime > 0) {
      this.updateLastPageView(Date.now() - this.pageStartTime);
    }

    this.pageStartTime = Date.now();
    this.maxScrollDepth = 0;

    const pageView: PageView = {
      url: customUrl || window.location.href,
      title: customTitle || document.title,
      referrer: document.referrer,
      timestamp: Date.now(),
      sessionId: getSessionId(),
      userId: getUserId(),
    };

    this.pageViewQueue.push(pageView);
    this.currentJourney?.pageViews.push(pageView);

    if (this.config.debug) {
      console.log('[Analytics] Page View:', pageView);
    }
  }

  identify(userId: string, traits?: Record<string, unknown>): void {
    if (!this.isEnabled) return;

    localStorage.setItem('analytics_user_id', userId);
    
    if (this.currentJourney) {
      this.currentJourney.userId = userId;
    }

    this.track('user_identified', {
      category: 'identity',
      action: 'identify',
      properties: { userId, ...traits },
    });
  }

  setConversionGoal(name: string, value?: number): void {
    if (!this.isEnabled || !this.currentJourney) return;

    const goal: ConversionGoal = {
      name,
      achieved: true,
      timestamp: Date.now(),
      value,
    };

    this.currentJourney.conversionGoals.push(goal);
    
    this.track('conversion_goal', {
      category: 'conversion',
      action: 'achieved',
      label: name,
      value,
    });
  }

  async flush(sync = false): Promise<void> {
    if (this.eventQueue.length === 0 && this.pageViewQueue.length === 0) return;

    const events = [...this.eventQueue];
    const pageViews = [...this.pageViewQueue];
    
    this.eventQueue = [];
    this.pageViewQueue = [];

    const payload = { events, pageViews };

    if (this.config.debug) {
      console.log('[Analytics] Flushing:', payload);
    }

    // Use sendBeacon for sync flush (on page unload)
    if (sync && navigator.sendBeacon && this.config.endpoints?.batch) {
      navigator.sendBeacon(
        this.config.endpoints.batch,
        JSON.stringify(payload)
      );
      return;
    }

    // Async flush
    if (this.config.endpoints?.batch) {
      try {
        await fetch(this.config.endpoints.batch, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(payload),
          keepalive: true,
        });
      } catch (error) {
        // Re-queue events on failure
        this.eventQueue = [...events, ...this.eventQueue];
        this.pageViewQueue = [...pageViews, ...this.pageViewQueue];
        
        if (this.config.debug) {
          console.error('[Analytics] Flush failed:', error);
        }
      }
    }
  }

  getJourney(): UserJourney | null {
    return this.currentJourney;
  }

  disable(): void {
    this.isEnabled = false;
    this.flush();
    if (this.flushTimer) clearInterval(this.flushTimer);
  }

  enable(): void {
    this.isEnabled = true;
    this.startFlushTimer();
  }

  destroy(): void {
    this.flush();
    if (this.flushTimer) clearInterval(this.flushTimer);
    document.removeEventListener('click', this.handleClick);
    window.removeEventListener('scroll', this.handleScroll);
    document.removeEventListener('visibilitychange', this.handleVisibility);
    window.removeEventListener('beforeunload', this.handleUnload);
  }
}

// ============================================================================
// Singleton Instance
// ============================================================================

let analyticsInstance: AnalyticsTracker | null = null;

export function initAnalytics(config: AnalyticsConfig = {}): AnalyticsTracker {
  if (!analyticsInstance) {
    analyticsInstance = new AnalyticsTracker(config);
  }
  return analyticsInstance;
}

export function getAnalytics(): AnalyticsTracker | null {
  return analyticsInstance;
}

// ============================================================================
// React Integration
// ============================================================================

interface AnalyticsContextValue {
  track: (name: string, options?: Record<string, unknown>) => void;
  trackPageView: (title?: string, url?: string) => void;
  identify: (userId: string, traits?: Record<string, unknown>) => void;
  setConversionGoal: (name: string, value?: number) => void;
}

const AnalyticsContext = createContext<AnalyticsContextValue>({
  track: () => {},
  trackPageView: () => {},
  identify: () => {},
  setConversionGoal: () => {},
});

export function useAnalytics(): AnalyticsContextValue {
  return useContext(AnalyticsContext);
}

interface AnalyticsProviderProps {
  config?: AnalyticsConfig;
  children: React.ReactNode;
}

export function AnalyticsProvider({ config, children }: AnalyticsProviderProps): ReactElement {
  const tracker = useRef<AnalyticsTracker | null>(null);

  useEffect(() => {
    tracker.current = initAnalytics(config);
    return () => tracker.current?.destroy();
  }, [config]);

  const track = useCallback((name: string, options?: Record<string, unknown>) => {
    tracker.current?.track(name, options);
  }, []);

  const trackPageView = useCallback((title?: string, url?: string) => {
    tracker.current?.trackPageView(title, url);
  }, []);

  const identify = useCallback((userId: string, traits?: Record<string, unknown>) => {
    tracker.current?.identify(userId, traits);
  }, []);

  const setConversionGoal = useCallback((name: string, value?: number) => {
    tracker.current?.setConversionGoal(name, value);
  }, []);

  return (
    <AnalyticsContext.Provider value={{ track, trackPageView, identify, setConversionGoal }}>
      {children}
    </AnalyticsContext.Provider>
  );
}

// Hook: Track event on mount
export function useTrackEvent(
  eventName: string,
  options?: Record<string, unknown>,
  deps: unknown[] = []
): void {
  const { track } = useAnalytics();

  useEffect(() => {
    track(eventName, options);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, deps);
}

// Hook: Track page view
export function useTrackPageView(title?: string, url?: string): void {
  const { trackPageView } = useAnalytics();

  useEffect(() => {
    trackPageView(title, url);
  }, [trackPageView, title, url]);
}

// ============================================================================
// Funnel Analysis Utilities
// ============================================================================

export function analyzeFunnel(
  events: AnalyticsEvent[],
  funnelSteps: string[]
): FunnelStep[] {
  const result: FunnelStep[] = [];
  
  // Group events by session
  const sessionEvents = new Map<string, AnalyticsEvent[]>();
  events.forEach(event => {
    const existing = sessionEvents.get(event.sessionId) || [];
    existing.push(event);
    sessionEvents.set(event.sessionId, existing);
  });

  // For each step, count sessions that reached it
  let previousCount = sessionEvents.size;

  funnelSteps.forEach((stepName, index) => {
    let count = 0;

    sessionEvents.forEach(sessionEventList => {
      // Check if session has this event
      const hasEvent = sessionEventList.some(e => e.name === stepName);
      
      // For sequential funnels, check order
      if (hasEvent && index > 0) {
        const previousStep = funnelSteps[index - 1];
        const hasPreviousEvent = sessionEventList.some(e => e.name === previousStep);
        if (hasPreviousEvent) {
          count++;
        }
      } else if (hasEvent) {
        count++;
      }
    });

    const dropoff = previousCount - count;
    const conversionRate = previousCount > 0 ? (count / previousCount) * 100 : 0;

    result.push({
      name: stepName,
      eventName: stepName,
      count,
      dropoff,
      conversionRate,
    });

    previousCount = count;
  });

  return result;
}

// ============================================================================
// Analytics Dashboard Components
// ============================================================================

interface EventListProps {
  events: AnalyticsEvent[];
  maxItems?: number;
}

export function EventList({ events, maxItems = 50 }: EventListProps): ReactElement {
  const displayEvents = events.slice(-maxItems).reverse();

  return (
    <div className="bg-zinc-900 p-4">
      <h3 className="text-lg font-medium text-white mb-4">Recent Events</h3>
      <div className="space-y-2 max-h-96 overflow-y-auto">
        {displayEvents.map((event, index) => (
          <div 
            key={`${event.timestamp}-${index}`}
            className="flex items-center justify-between p-2 bg-black/50 border border-zinc-800"
          >
            <div>
              <span className="text-zinc-400 font-medium">{event.name}</span>
              <span className="text-zinc-500 ml-2 text-sm">{event.category}</span>
            </div>
            <span className="text-xs text-zinc-600">
              {new Date(event.timestamp).toLocaleTimeString()}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

interface FunnelChartProps {
  steps: FunnelStep[];
}

export function FunnelChart({ steps }: FunnelChartProps): ReactElement {
  const maxCount = Math.max(...steps.map(s => s.count));

  return (
    <div className="bg-zinc-900 p-4">
      <h3 className="text-lg font-medium text-white mb-4">Conversion Funnel</h3>
      <div className="space-y-3">
        {steps.map((step, index) => (
          <div key={step.name} className="space-y-1">
            <div className="flex items-center justify-between text-sm">
              <span className="text-zinc-300">{step.name}</span>
              <span className="text-zinc-500">
                {step.count} ({step.conversionRate.toFixed(1)}%)
              </span>
            </div>
            <div className="h-6 bg-black/50 relative">
              <div 
                className="h-full bg-zinc-700"
                style={{ width: `${(step.count / maxCount) * 100}%` }}
              />
            </div>
            {index < steps.length - 1 && step.dropoff > 0 && (
              <div className="text-xs text-zinc-600 text-right">
                -{step.dropoff} dropped
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

// ============================================================================
// Export
// ============================================================================

export { AnalyticsTracker };

export default {
  initAnalytics,
  getAnalytics,
  AnalyticsProvider,
  useAnalytics,
  useTrackEvent,
  useTrackPageView,
  analyzeFunnel,
  EventList,
  FunnelChart,
};
