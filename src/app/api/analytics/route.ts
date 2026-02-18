import { NextRequest, NextResponse } from 'next/server';

// ============================================================
// Types
// ============================================================

interface AnalyticsEvent {
  id: string;
  type: string;
  name: string;
  properties: Record<string, unknown>;
  userId?: string;
  sessionId: string;
  timestamp: Date;
  page: string;
  referrer?: string;
}

interface AnalyticsSummary {
  totalEvents: number;
  uniqueUsers: number;
  uniqueSessions: number;
  pageViews: number;
  topPages: Array<{ page: string; views: number }>;
  topEvents: Array<{ event: string; count: number }>;
  eventsByHour: Array<{ hour: number; count: number }>;
}

// ============================================================
// Mock Data Store (In real app, this would be a database)
// ============================================================

const analyticsStore: AnalyticsEvent[] = [];

// ============================================================
// GET /api/analytics - Get analytics summary
// ============================================================

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const startDate = searchParams.get('startDate');
    const endDate = searchParams.get('endDate');
    const type = searchParams.get('type');

    let events = [...analyticsStore];

    // Filter by date range
    if (startDate) {
      const start = new Date(startDate);
      events = events.filter(e => new Date(e.timestamp) >= start);
    }
    if (endDate) {
      const end = new Date(endDate);
      events = events.filter(e => new Date(e.timestamp) <= end);
    }

    // Filter by type
    if (type) {
      events = events.filter(e => e.type === type);
    }

    // Calculate summary
    const uniqueUsers = new Set(events.filter(e => e.userId).map(e => e.userId)).size;
    const uniqueSessions = new Set(events.map(e => e.sessionId)).size;
    const pageViews = events.filter(e => e.type === 'pageview').length;

    // Top pages
    const pageCount: Record<string, number> = {};
    events.filter(e => e.type === 'pageview').forEach(e => {
      pageCount[e.page] = (pageCount[e.page] || 0) + 1;
    });
    const topPages = Object.entries(pageCount)
      .map(([page, views]) => ({ page, views }))
      .sort((a, b) => b.views - a.views)
      .slice(0, 10);

    // Top events
    const eventCount: Record<string, number> = {};
    events.filter(e => e.type === 'event').forEach(e => {
      eventCount[e.name] = (eventCount[e.name] || 0) + 1;
    });
    const topEvents = Object.entries(eventCount)
      .map(([event, count]) => ({ event, count }))
      .sort((a, b) => b.count - a.count)
      .slice(0, 10);

    // Events by hour
    const hourCount: Record<number, number> = {};
    events.forEach(e => {
      const hour = new Date(e.timestamp).getHours();
      hourCount[hour] = (hourCount[hour] || 0) + 1;
    });
    const eventsByHour = Array.from({ length: 24 }, (_, hour) => ({
      hour,
      count: hourCount[hour] || 0,
    }));

    const summary: AnalyticsSummary = {
      totalEvents: events.length,
      uniqueUsers,
      uniqueSessions,
      pageViews,
      topPages,
      topEvents,
      eventsByHour,
    };

    return NextResponse.json(summary);
  } catch (error) {
    console.error('Analytics GET error:', error);
    return NextResponse.json(
      { error: 'Failed to fetch analytics' },
      { status: 500 }
    );
  }
}

// ============================================================
// POST /api/analytics - Track an analytics event
// ============================================================

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    
    const event: AnalyticsEvent = {
      id: `evt_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`,
      type: body.type || 'event',
      name: body.name || 'unknown',
      properties: body.properties || {},
      userId: body.userId,
      sessionId: body.sessionId || `session_${Date.now()}`,
      timestamp: new Date(),
      page: body.page || '/',
      referrer: body.referrer,
    };

    analyticsStore.push(event);

    // Keep only last 10000 events in memory
    if (analyticsStore.length > 10000) {
      analyticsStore.shift();
    }

    return NextResponse.json({ success: true, eventId: event.id });
  } catch (error) {
    console.error('Analytics POST error:', error);
    return NextResponse.json(
      { error: 'Failed to track event' },
      { status: 500 }
    );
  }
}

// ============================================================
// DELETE /api/analytics - Clear analytics data
// ============================================================

export async function DELETE(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const confirm = searchParams.get('confirm');

    if (confirm !== 'true') {
      return NextResponse.json(
        { error: 'Must confirm deletion with ?confirm=true' },
        { status: 400 }
      );
    }

    analyticsStore.length = 0;

    return NextResponse.json({ success: true, message: 'Analytics data cleared' });
  } catch (error) {
    console.error('Analytics DELETE error:', error);
    return NextResponse.json(
      { error: 'Failed to clear analytics' },
      { status: 500 }
    );
  }
}
