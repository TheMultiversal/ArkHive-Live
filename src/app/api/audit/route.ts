import { NextResponse } from 'next/server';

export const dynamic = 'force-static';

// ============================================================
// Types
// ============================================================

interface AuditLogEntry {
 id: string;
 timestamp: Date;
 userId: string;
 userName: string;
 userEmail: string;
 action: string;
 resourceType: string;
 resourceId: string;
 resourceName: string;
 details: string;
 ipAddress: string;
 userAgent: string;
 success: boolean;
 riskLevel: 'low' | 'medium' | 'high' | 'critical';
 metadata?: Record<string, unknown>;
}

// ============================================================
// Mock Data Store
// ============================================================

const auditStore: AuditLogEntry[] = [
 {
 id: 'audit_1',
 timestamp: new Date(),
 userId: 'user_1',
 userName: 'Alex Chen',
 userEmail: 'alex@arkhive.io',
 action: 'update',
 resourceType: 'investigation',
 resourceId: 'inv_1',
 resourceName: 'Operation Blackwater',
 details: 'Updated severity from high to critical',
 ipAddress: '192.168.1.105',
 userAgent: 'Mozilla/5.0',
 success: true,
 riskLevel: 'medium',
 },
];

// ============================================================
// GET /api/audit - Get audit logs
// ============================================================

export async function GET() {
 try {
 const logs = [...auditStore];

 // Sort by timestamp descending
 logs.sort((a, b) => new Date(b.timestamp).getTime() - new Date(a.timestamp).getTime());

 const limit = 50;
 const paginatedLogs = logs.slice(0, limit);

 return NextResponse.json({
 data: paginatedLogs,
 pagination: {
 page: 1,
 limit,
 total: logs.length,
 totalPages: Math.ceil(logs.length / limit),
 hasMore: logs.length > limit,
 },
 });
 } catch (error) {
 console.error('Audit GET error:', error);
 return NextResponse.json(
 { error: 'Failed to fetch audit logs' },
 { status: 500 }
 );
 }
}

// ============================================================
// POST /api/audit - Create audit log entry
// ============================================================

export async function POST(request: Request) {
 try {
 const body = await request.json();

 const entry: AuditLogEntry = {
 id: `audit_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`,
 timestamp: new Date(),
 userId: body.userId,
 userName: body.userName,
 userEmail: body.userEmail,
 action: body.action,
 resourceType: body.resourceType,
 resourceId: body.resourceId,
 resourceName: body.resourceName,
 details: body.details,
 ipAddress: request.headers.get('x-forwarded-for') || 
 request.headers.get('x-real-ip') || 
 'unknown',
 userAgent: request.headers.get('user-agent') || 'unknown',
 success: body.success ?? true,
 riskLevel: body.riskLevel || 'low',
 metadata: body.metadata,
 };

 auditStore.unshift(entry);

 // Keep only last 50000 entries
 if (auditStore.length > 50000) {
 auditStore.pop();
 }

 return NextResponse.json({ success: true, id: entry.id });
 } catch (error) {
 console.error('Audit POST error:', error);
 return NextResponse.json(
 { error: 'Failed to create audit entry' },
 { status: 500 }
 );
 }
}
