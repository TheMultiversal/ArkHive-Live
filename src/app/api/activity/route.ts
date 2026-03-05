import { NextResponse } from 'next/server';

export const dynamic = 'force-static';

// ============================================================
// Types
// ============================================================

interface ActivityItem {
 id: string;
 type: 'investigation' | 'entity' | 'document' | 'workspace' | 'comment' | 'connection' | 'alert' | 'system';
 action: 'created' | 'updated' | 'deleted' | 'viewed' | 'commented' | 'shared' | 'linked' | 'flagged' | 'joined' | 'left';
 userId: string;
 userName: string;
 resourceId: string;
 resourceName: string;
 resourceType: string;
 description: string;
 timestamp: Date;
 metadata?: Record<string, unknown>;
 isRead?: boolean;
}

// ============================================================
// Mock Data Store
// ============================================================

const activityStore: ActivityItem[] = [
 {
 id: 'activity_1',
 type: 'investigation',
 action: 'created',
 userId: 'user_1',
 userName: 'Alex Chen',
 resourceId: 'inv_1',
 resourceName: 'Operation Blackwater',
 resourceType: 'investigation',
 description: 'Created new investigation',
 timestamp: new Date(Date.now() - 1000 * 60 * 30),
 },
 {
 id: 'activity_2',
 type: 'document',
 action: 'updated',
 userId: 'user_2',
 userName: 'Sarah Miller',
 resourceId: 'doc_1',
 resourceName: 'Financial Records 2024',
 resourceType: 'document',
 description: 'Updated document with new findings',
 timestamp: new Date(Date.now() - 1000 * 60 * 120),
 },
];

// ============================================================
// GET /api/activity - Get activity feed
// ============================================================

export async function GET() {
 try {
 const activities = [...activityStore];

 // Sort by timestamp descending
 activities.sort((a, b) => new Date(b.timestamp).getTime() - new Date(a.timestamp).getTime());

 const limit = 50;
 const paginatedActivities = activities.slice(0, limit);

 return NextResponse.json({
 data: paginatedActivities,
 pagination: {
 page: 1,
 limit,
 total: activities.length,
 totalPages: Math.ceil(activities.length / limit),
 hasMore: activities.length > limit,
 },
 });
 } catch (error) {
 console.error('Activity GET error:', error);
 return NextResponse.json(
 { error: 'Failed to fetch activity' },
 { status: 500 }
 );
 }
}

// ============================================================
// POST /api/activity - Log new activity
// ============================================================

export async function POST(request: Request) {
 try {
 const body = await request.json();

 // Validate required fields
 if (!body.type || !body.action || !body.resourceId) {
 return NextResponse.json(
 { error: 'Type, action, and resourceId are required' },
 { status: 400 }
 );
 }

 const activity: ActivityItem = {
 id: `activity_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`,
 type: body.type,
 action: body.action,
 userId: body.userId || 'anonymous',
 userName: body.userName || 'Anonymous User',
 resourceId: body.resourceId,
 resourceName: body.resourceName || 'Unknown',
 resourceType: body.resourceType || body.type,
 description: body.description || `${body.action} ${body.type}`,
 timestamp: new Date(),
 metadata: body.metadata,
 isRead: false,
 };

 activityStore.unshift(activity);

 // Keep only last 10000 activities
 if (activityStore.length > 10000) {
 activityStore.pop();
 }

 return NextResponse.json(activity, { status: 201 });
 } catch (error) {
 console.error('Activity POST error:', error);
 return NextResponse.json(
 { error: 'Failed to log activity' },
 { status: 500 }
 );
 }
}

// ============================================================
// PATCH /api/activity - Mark activity as read
// ============================================================

export async function PATCH(request: Request) {
 try {
 const { searchParams } = new URL(request.url);
 const activityId = searchParams.get('id');
 const markAll = searchParams.get('markAll') === 'true';
 const userId = searchParams.get('userId');

 if (markAll && userId) {
 // Mark all user activities as read
 activityStore.forEach((a, idx) => {
 if (a.userId === userId) {
 activityStore[idx].isRead = true;
 }
 });
 return NextResponse.json({ success: true, message: 'All activities marked as read' });
 }

 if (!activityId) {
 return NextResponse.json(
 { error: 'Activity ID is required' },
 { status: 400 }
 );
 }

 const activityIndex = activityStore.findIndex(a => a.id === activityId);
 if (activityIndex === -1) {
 return NextResponse.json(
 { error: 'Activity not found' },
 { status: 404 }
 );
 }

 activityStore[activityIndex].isRead = true;

 return NextResponse.json(activityStore[activityIndex]);
 } catch (error) {
 console.error('Activity PATCH error:', error);
 return NextResponse.json(
 { error: 'Failed to update activity' },
 { status: 500 }
 );
 }
}
