import { NextRequest, NextResponse } from 'next/server';

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

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const page = parseInt(searchParams.get('page') || '1');
    const limit = parseInt(searchParams.get('limit') || '50');
    const userId = searchParams.get('userId');
    const action = searchParams.get('action');
    const resourceType = searchParams.get('resourceType');
    const riskLevel = searchParams.get('riskLevel');
    const startDate = searchParams.get('startDate');
    const endDate = searchParams.get('endDate');

    let logs = [...auditStore];

    // Apply filters
    if (userId) {
      logs = logs.filter(l => l.userId === userId);
    }
    if (action) {
      logs = logs.filter(l => l.action === action);
    }
    if (resourceType) {
      logs = logs.filter(l => l.resourceType === resourceType);
    }
    if (riskLevel) {
      logs = logs.filter(l => l.riskLevel === riskLevel);
    }
    if (startDate) {
      const start = new Date(startDate);
      logs = logs.filter(l => new Date(l.timestamp) >= start);
    }
    if (endDate) {
      const end = new Date(endDate);
      logs = logs.filter(l => new Date(l.timestamp) <= end);
    }

    // Sort by timestamp descending
    logs.sort((a, b) => new Date(b.timestamp).getTime() - new Date(a.timestamp).getTime());

    // Pagination
    const total = logs.length;
    const totalPages = Math.ceil(total / limit);
    const offset = (page - 1) * limit;
    const paginatedLogs = logs.slice(offset, offset + limit);

    return NextResponse.json({
      data: paginatedLogs,
      pagination: {
        page,
        limit,
        total,
        totalPages,
        hasMore: page < totalPages,
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

export async function POST(request: NextRequest) {
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
