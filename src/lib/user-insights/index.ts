'use client';

/**
 * User Behavior Insights System
 * Heatmaps, session recordings, interaction analysis, engagement metrics
 */

import React, { createContext, useContext, useEffect, useRef, useCallback, ReactElement } from 'react';

// ============================================================================
// Types
// ============================================================================

export interface ClickPoint {
  x: number;
  y: number;
  timestamp: number;
  element: string;
  pageUrl: string;
  viewportWidth: number;
  viewportHeight: number;
}

export interface ScrollEvent {
  scrollY: number;
  maxScrollY: number;
  percentage: number;
  timestamp: number;
  pageUrl: string;
}

export interface MouseMovement {
  x: number;
  y: number;
  timestamp: number;
}

export interface InteractionEvent {
  type: 'click' | 'scroll' | 'hover' | 'input' | 'form_submit' | 'rage_click';
  element: string;
  timestamp: number;
  data?: Record<string, unknown>;
}

export interface SessionRecording {
  sessionId: string;
  startTime: number;
  endTime?: number;
  pageUrl: string;
  events: InteractionEvent[];
  mouseMovements: MouseMovement[];
  scrollEvents: ScrollEvent[];
  clicks: ClickPoint[];
}

export interface HeatmapData {
  pageUrl: string;
  clicks: ClickPoint[];
  movements: MouseMovement[];
  scrollDepths: number[];
}

export interface EngagementMetrics {
  totalSessions: number;
  averageSessionDuration: number;
  averagePageViews: number;
  bounceRate: number;
  engagementScore: number;
  topInteractions: Array<{ element: string; count: number }>;
  scrollDepthDistribution: Record<string, number>;
}

export interface UserSegment {
  name: string;
  conditions: Array<{
    metric: string;
    operator: 'gt' | 'lt' | 'eq' | 'contains';
    value: unknown;
  }>;
}

export interface BehaviorConfig {
  trackClicks?: boolean;
  trackMouseMovement?: boolean;
  trackScroll?: boolean;
  trackRageClicks?: boolean;
  trackForms?: boolean;
  mouseMovementSampleRate?: number; // ms between samples
  maxRecordingDuration?: number; // ms
  debug?: boolean;
}

// ============================================================================
// Behavior Tracker Class
// ============================================================================

class BehaviorTracker {
  private config: BehaviorConfig;
  private sessionId: string;
  private recording: SessionRecording;
  private lastMouseMoveTime: number = 0;
  private rageClickTracker: Map<string, number[]> = new Map();
  private isRecording: boolean = false;

  constructor(config: BehaviorConfig = {}) {
    this.config = {
      trackClicks: true,
      trackMouseMovement: true,
      trackScroll: true,
      trackRageClicks: true,
      trackForms: true,
      mouseMovementSampleRate: 100,
      maxRecordingDuration: 30 * 60 * 1000, // 30 minutes
      debug: false,
      ...config,
    };

    this.sessionId = this.generateSessionId();
    this.recording = this.createNewRecording();

    if (typeof window !== 'undefined') {
      this.init();
    }
  }

  private generateSessionId(): string {
    return `${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;
  }

  private createNewRecording(): SessionRecording {
    return {
      sessionId: this.sessionId,
      startTime: Date.now(),
      pageUrl: typeof window !== 'undefined' ? window.location.href : '',
      events: [],
      mouseMovements: [],
      scrollEvents: [],
      clicks: [],
    };
  }

  private init(): void {
    this.isRecording = true;

    if (this.config.trackClicks) {
      document.addEventListener('click', this.handleClick);
    }

    if (this.config.trackMouseMovement) {
      document.addEventListener('mousemove', this.handleMouseMove);
    }

    if (this.config.trackScroll) {
      window.addEventListener('scroll', this.handleScroll, { passive: true });
    }

    if (this.config.trackForms) {
      document.addEventListener('submit', this.handleFormSubmit);
      document.addEventListener('input', this.handleInput);
    }

    // Auto-stop recording after max duration
    setTimeout(() => {
      this.stopRecording();
    }, this.config.maxRecordingDuration);
  }

  private getElementSelector(element: HTMLElement): string {
    if (element.id) return `#${element.id}`;
    
    let selector = element.tagName.toLowerCase();
    if (element.className) {
      const classes = element.className.split(' ').filter(c => c).slice(0, 2);
      if (classes.length) {
        selector += '.' + classes.join('.');
      }
    }
    
    return selector;
  }

  private handleClick = (event: MouseEvent): void => {
    if (!this.isRecording) return;

    const target = event.target as HTMLElement;
    const elementSelector = this.getElementSelector(target);

    const click: ClickPoint = {
      x: event.clientX,
      y: event.clientY,
      timestamp: Date.now(),
      element: elementSelector,
      pageUrl: window.location.href,
      viewportWidth: window.innerWidth,
      viewportHeight: window.innerHeight,
    };

    this.recording.clicks.push(click);

    // Track rage clicks
    if (this.config.trackRageClicks) {
      this.detectRageClick(elementSelector, click.timestamp);
    }

    this.addEvent({
      type: 'click',
      element: elementSelector,
      timestamp: click.timestamp,
      data: { x: click.x, y: click.y },
    });

    if (this.config.debug) {
      console.log('[Behavior] Click:', click);
    }
  };

  private detectRageClick(element: string, timestamp: number): void {
    const clicks = this.rageClickTracker.get(element) || [];
    clicks.push(timestamp);

    // Keep only clicks from last 2 seconds
    const recentClicks = clicks.filter(t => timestamp - t < 2000);
    this.rageClickTracker.set(element, recentClicks);

    // 3+ clicks in 2 seconds = rage click
    if (recentClicks.length >= 3) {
      this.addEvent({
        type: 'rage_click',
        element,
        timestamp,
        data: { clickCount: recentClicks.length },
      });

      if (this.config.debug) {
        console.log('[Behavior] Rage click detected:', element);
      }
    }
  }

  private handleMouseMove = (event: MouseEvent): void => {
    if (!this.isRecording) return;

    const now = Date.now();
    if (now - this.lastMouseMoveTime < (this.config.mouseMovementSampleRate || 100)) {
      return;
    }
    this.lastMouseMoveTime = now;

    const movement: MouseMovement = {
      x: event.clientX,
      y: event.clientY,
      timestamp: now,
    };

    this.recording.mouseMovements.push(movement);
  };

  private handleScroll = (): void => {
    if (!this.isRecording) return;

    const scrollY = window.scrollY;
    const maxScrollY = document.documentElement.scrollHeight - window.innerHeight;
    const percentage = maxScrollY > 0 ? Math.round((scrollY / maxScrollY) * 100) : 0;

    const scrollEvent: ScrollEvent = {
      scrollY,
      maxScrollY,
      percentage,
      timestamp: Date.now(),
      pageUrl: window.location.href,
    };

    this.recording.scrollEvents.push(scrollEvent);

    this.addEvent({
      type: 'scroll',
      element: 'window',
      timestamp: scrollEvent.timestamp,
      data: { percentage },
    });
  };

  private handleFormSubmit = (event: Event): void => {
    if (!this.isRecording) return;

    const form = event.target as HTMLFormElement;
    this.addEvent({
      type: 'form_submit',
      element: this.getElementSelector(form),
      timestamp: Date.now(),
      data: { formId: form.id, formAction: form.action },
    });
  };

  private handleInput = (event: Event): void => {
    if (!this.isRecording) return;

    const target = event.target as HTMLInputElement;
    this.addEvent({
      type: 'input',
      element: this.getElementSelector(target),
      timestamp: Date.now(),
      data: { 
        inputType: target.type,
        inputName: target.name,
        hasValue: !!target.value,
      },
    });
  };

  private addEvent(event: InteractionEvent): void {
    this.recording.events.push(event);
  }

  // Public API

  startRecording(): void {
    if (this.isRecording) return;
    this.recording = this.createNewRecording();
    this.isRecording = true;
  }

  stopRecording(): SessionRecording {
    this.isRecording = false;
    this.recording.endTime = Date.now();
    return this.recording;
  }

  getRecording(): SessionRecording {
    return this.recording;
  }

  getHeatmapData(): HeatmapData {
    return {
      pageUrl: window.location.href,
      clicks: this.recording.clicks,
      movements: this.recording.mouseMovements,
      scrollDepths: this.recording.scrollEvents.map(e => e.percentage),
    };
  }

  destroy(): void {
    this.stopRecording();
    document.removeEventListener('click', this.handleClick);
    document.removeEventListener('mousemove', this.handleMouseMove);
    window.removeEventListener('scroll', this.handleScroll);
    document.removeEventListener('submit', this.handleFormSubmit);
    document.removeEventListener('input', this.handleInput);
  }
}

// ============================================================================
// Singleton Instance
// ============================================================================

let behaviorTracker: BehaviorTracker | null = null;

export function initBehaviorTracker(config: BehaviorConfig = {}): BehaviorTracker {
  if (!behaviorTracker) {
    behaviorTracker = new BehaviorTracker(config);
  }
  return behaviorTracker;
}

export function getBehaviorTracker(): BehaviorTracker | null {
  return behaviorTracker;
}

// ============================================================================
// React Integration
// ============================================================================

interface BehaviorContextValue {
  getRecording: () => SessionRecording | null;
  getHeatmapData: () => HeatmapData | null;
  startRecording: () => void;
  stopRecording: () => SessionRecording | null;
}

const BehaviorContext = createContext<BehaviorContextValue>({
  getRecording: () => null,
  getHeatmapData: () => null,
  startRecording: () => {},
  stopRecording: () => null,
});

export function useBehavior(): BehaviorContextValue {
  return useContext(BehaviorContext);
}

interface BehaviorProviderProps {
  config?: BehaviorConfig;
  children: React.ReactNode;
}

export function BehaviorProvider({ config, children }: BehaviorProviderProps): ReactElement {
  const tracker = useRef<BehaviorTracker | null>(null);

  useEffect(() => {
    tracker.current = initBehaviorTracker(config);
    return () => tracker.current?.destroy();
  }, [config]);

  const getRecording = useCallback(() => tracker.current?.getRecording() || null, []);
  const getHeatmapData = useCallback(() => tracker.current?.getHeatmapData() || null, []);
  const startRecording = useCallback(() => tracker.current?.startRecording(), []);
  const stopRecording = useCallback(() => tracker.current?.stopRecording() || null, []);

  return (
    <BehaviorContext.Provider value={{ getRecording, getHeatmapData, startRecording, stopRecording }}>
      {children}
    </BehaviorContext.Provider>
  );
}

// ============================================================================
// Analysis Utilities
// ============================================================================

export function calculateEngagementMetrics(
  recordings: SessionRecording[]
): EngagementMetrics {
  if (recordings.length === 0) {
    return {
      totalSessions: 0,
      averageSessionDuration: 0,
      averagePageViews: 0,
      bounceRate: 0,
      engagementScore: 0,
      topInteractions: [],
      scrollDepthDistribution: {},
    };
  }

  const totalSessions = recordings.length;
  
  // Calculate average session duration
  const durations = recordings
    .filter(r => r.endTime)
    .map(r => (r.endTime || 0) - r.startTime);
  const averageSessionDuration = durations.length > 0
    ? durations.reduce((a, b) => a + b, 0) / durations.length
    : 0;

  // Calculate bounce rate (sessions with < 2 events)
  const bouncedSessions = recordings.filter(r => r.events.length < 2).length;
  const bounceRate = (bouncedSessions / totalSessions) * 100;

  // Calculate top interactions
  const interactionCounts = new Map<string, number>();
  recordings.forEach(r => {
    r.events.forEach(e => {
      if (e.type === 'click') {
        const count = interactionCounts.get(e.element) || 0;
        interactionCounts.set(e.element, count + 1);
      }
    });
  });

  const topInteractions = Array.from(interactionCounts.entries())
    .sort((a, b) => b[1] - a[1])
    .slice(0, 10)
    .map(([element, count]) => ({ element, count }));

  // Calculate scroll depth distribution
  const scrollDepthDistribution: Record<string, number> = {
    '0-25%': 0,
    '25-50%': 0,
    '50-75%': 0,
    '75-100%': 0,
  };

  recordings.forEach(r => {
    const maxScroll = Math.max(...r.scrollEvents.map(e => e.percentage), 0);
    if (maxScroll <= 25) scrollDepthDistribution['0-25%']++;
    else if (maxScroll <= 50) scrollDepthDistribution['25-50%']++;
    else if (maxScroll <= 75) scrollDepthDistribution['50-75%']++;
    else scrollDepthDistribution['75-100%']++;
  });

  // Calculate engagement score (0-100)
  const avgEvents = recordings.reduce((sum, r) => sum + r.events.length, 0) / totalSessions;
  const avgScrollDepth = recordings.reduce((sum, r) => {
    const maxScroll = Math.max(...r.scrollEvents.map(e => e.percentage), 0);
    return sum + maxScroll;
  }, 0) / totalSessions;
  
  const engagementScore = Math.min(100, (
    (avgEvents / 10) * 40 + // Events contribute 40%
    (avgScrollDepth / 100) * 30 + // Scroll depth contributes 30%
    ((100 - bounceRate) / 100) * 30 // Non-bounce contributes 30%
  ));

  return {
    totalSessions,
    averageSessionDuration,
    averagePageViews: 1, // Simplified
    bounceRate,
    engagementScore,
    topInteractions,
    scrollDepthDistribution,
  };
}

export function segmentUsers(
  recordings: SessionRecording[],
  segments: UserSegment[]
): Map<string, SessionRecording[]> {
  const result = new Map<string, SessionRecording[]>();

  segments.forEach(segment => {
    const matchingRecordings = recordings.filter(recording => {
      return segment.conditions.every(condition => {
        let metricValue: unknown;

        switch (condition.metric) {
          case 'eventCount':
            metricValue = recording.events.length;
            break;
          case 'sessionDuration':
            metricValue = (recording.endTime || Date.now()) - recording.startTime;
            break;
          case 'scrollDepth':
            metricValue = Math.max(...recording.scrollEvents.map(e => e.percentage), 0);
            break;
          case 'clickCount':
            metricValue = recording.clicks.length;
            break;
          default:
            return false;
        }

        switch (condition.operator) {
          case 'gt':
            return (metricValue as number) > (condition.value as number);
          case 'lt':
            return (metricValue as number) < (condition.value as number);
          case 'eq':
            return metricValue === condition.value;
          case 'contains':
            return String(metricValue).includes(String(condition.value));
          default:
            return false;
        }
      });
    });

    result.set(segment.name, matchingRecordings);
  });

  return result;
}

// ============================================================================
// Visualization Components
// ============================================================================

interface HeatmapOverlayProps {
  data: HeatmapData;
  intensity?: number;
}

export function HeatmapOverlay({ data, intensity = 0.5 }: HeatmapOverlayProps): ReactElement {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    // Clear canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Draw click points
    data.clicks.forEach(click => {
      const gradient = ctx.createRadialGradient(
        click.x, click.y, 0,
        click.x, click.y, 30
      );
      gradient.addColorStop(0, `rgba(214, 69, 69, ${intensity})`);
      gradient.addColorStop(1, 'rgba(214, 69, 69, 0)');

      ctx.fillStyle = gradient;
      ctx.beginPath();
      ctx.arc(click.x, click.y, 30, 0, Math.PI * 2);
      ctx.fill();
    });
  }, [data, intensity]);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-50"
      style={{ mixBlendMode: 'screen' }}
    />
  );
}

interface ScrollDepthChartProps {
  data: Record<string, number>;
}

export function ScrollDepthChart({ data }: ScrollDepthChartProps): ReactElement {
  const total = Object.values(data).reduce((a, b) => a + b, 0);

  return (
    <div className="bg-zinc-900 p-4">
      <h3 className="text-lg font-medium text-white mb-4">Scroll Depth Distribution</h3>
      <div className="space-y-3">
        {Object.entries(data).map(([range, count]) => (
          <div key={range} className="space-y-1">
            <div className="flex items-center justify-between text-sm">
              <span className="text-zinc-300">{range}</span>
              <span className="text-zinc-500">
                {count} ({total > 0 ? ((count / total) * 100).toFixed(1) : 0}%)
              </span>
            </div>
            <div className="h-4 bg-black/50">
              <div 
                className="h-full bg-blood-600"
                style={{ width: total > 0 ? `${(count / total) * 100}%` : '0%' }}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

interface EngagementScoreProps {
  score: number;
  label?: string;
}

export function EngagementScore({ score, label = 'Engagement' }: EngagementScoreProps): ReactElement {
  const getScoreColor = () => {
    if (score >= 75) return 'text-green-400';
    if (score >= 50) return 'text-yellow-400';
    if (score >= 25) return 'text-orange-400';
    return 'text-blood-400';
  };

  return (
    <div className="bg-zinc-900 p-4 text-center">
      <div className={`text-4xl font-bold ${getScoreColor()}`}>
        {Math.round(score)}
      </div>
      <div className="text-sm text-zinc-500 mt-1">{label} Score</div>
      <div className="mt-3 h-2 bg-black/50">
        <div 
          className={`h-full ${score >= 75 ? 'bg-green-600' : score >= 50 ? 'bg-yellow-600' : score >= 25 ? 'bg-orange-600' : 'bg-blood-600'}`}
          style={{ width: `${score}%` }}
        />
      </div>
    </div>
  );
}

interface InteractionListProps {
  interactions: Array<{ element: string; count: number }>;
}

export function InteractionList({ interactions }: InteractionListProps): ReactElement {
  return (
    <div className="bg-zinc-900 p-4">
      <h3 className="text-lg font-medium text-white mb-4">Top Interactions</h3>
      <div className="space-y-2">
        {interactions.map((item, index) => (
          <div 
            key={item.element}
            className="flex items-center justify-between p-2 bg-black/50 border border-zinc-800"
          >
            <div className="flex items-center gap-3">
              <span className="text-sm text-zinc-500 w-6">{index + 1}.</span>
              <code className="text-sm text-blood-400 truncate max-w-[200px]">
                {item.element}
              </code>
            </div>
            <span className="text-sm text-zinc-400">{item.count} clicks</span>
          </div>
        ))}
      </div>
    </div>
  );
}

// ============================================================================
// Export
// ============================================================================

export { BehaviorTracker };

export default {
  initBehaviorTracker,
  getBehaviorTracker,
  BehaviorProvider,
  useBehavior,
  calculateEngagementMetrics,
  segmentUsers,
  HeatmapOverlay,
  ScrollDepthChart,
  EngagementScore,
  InteractionList,
};
