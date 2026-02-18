import { NextRequest, NextResponse } from 'next/server';

// ============================================================
// Types
// ============================================================

interface ExportJob {
  id: string;
  type: 'investigation' | 'entity' | 'document' | 'report' | 'bulk';
  format: 'json' | 'csv' | 'pdf' | 'markdown' | 'xml';
  status: 'pending' | 'processing' | 'completed' | 'failed';
  resourceIds: string[];
  options: {
    includeMetadata: boolean;
    includeComments: boolean;
    includeHistory: boolean;
    dateRange?: { start: Date; end: Date };
  };
  createdAt: Date;
  completedAt?: Date;
  downloadUrl?: string;
  error?: string;
  userId: string;
  fileSize?: number;
}

// ============================================================
// Mock Data Store
// ============================================================

const exportJobsStore: ExportJob[] = [];

// ============================================================
// GET /api/export - Get export jobs
// ============================================================

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const jobId = searchParams.get('id');
    const userId = searchParams.get('userId');
    const status = searchParams.get('status');

    // Get specific job
    if (jobId) {
      const job = exportJobsStore.find(j => j.id === jobId);
      if (!job) {
        return NextResponse.json(
          { error: 'Export job not found' },
          { status: 404 }
        );
      }
      return NextResponse.json(job);
    }

    // List jobs
    let jobs = [...exportJobsStore];

    if (userId) {
      jobs = jobs.filter(j => j.userId === userId);
    }
    if (status) {
      jobs = jobs.filter(j => j.status === status);
    }

    // Sort by creation date descending
    jobs.sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime());

    return NextResponse.json({
      data: jobs.slice(0, 50), // Last 50 jobs
      total: jobs.length,
    });
  } catch (error) {
    console.error('Export GET error:', error);
    return NextResponse.json(
      { error: 'Failed to fetch export jobs' },
      { status: 500 }
    );
  }
}

// ============================================================
// POST /api/export - Create export job
// ============================================================

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    // Validate required fields
    if (!body.type || !body.format) {
      return NextResponse.json(
        { error: 'Export type and format are required' },
        { status: 400 }
      );
    }

    const job: ExportJob = {
      id: `export_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`,
      type: body.type,
      format: body.format,
      status: 'pending',
      resourceIds: body.resourceIds || [],
      options: {
        includeMetadata: body.options?.includeMetadata ?? true,
        includeComments: body.options?.includeComments ?? false,
        includeHistory: body.options?.includeHistory ?? false,
        dateRange: body.options?.dateRange,
      },
      createdAt: new Date(),
      userId: body.userId || 'anonymous',
    };

    exportJobsStore.push(job);

    // Simulate async processing
    setTimeout(() => {
      const jobIndex = exportJobsStore.findIndex(j => j.id === job.id);
      if (jobIndex !== -1) {
        exportJobsStore[jobIndex].status = 'processing';
        
        // Complete after another delay
        setTimeout(() => {
          const idx = exportJobsStore.findIndex(j => j.id === job.id);
          if (idx !== -1) {
            exportJobsStore[idx].status = 'completed';
            exportJobsStore[idx].completedAt = new Date();
            exportJobsStore[idx].downloadUrl = `/api/export/download?id=${job.id}`;
            exportJobsStore[idx].fileSize = Math.floor(Math.random() * 10000000);
          }
        }, 2000);
      }
    }, 500);

    return NextResponse.json(job, { status: 201 });
  } catch (error) {
    console.error('Export POST error:', error);
    return NextResponse.json(
      { error: 'Failed to create export job' },
      { status: 500 }
    );
  }
}

// ============================================================
// DELETE /api/export - Cancel or delete export job
// ============================================================

export async function DELETE(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const jobId = searchParams.get('id');

    if (!jobId) {
      return NextResponse.json(
        { error: 'Job ID is required' },
        { status: 400 }
      );
    }

    const jobIndex = exportJobsStore.findIndex(j => j.id === jobId);
    if (jobIndex === -1) {
      return NextResponse.json(
        { error: 'Export job not found' },
        { status: 404 }
      );
    }

    const job = exportJobsStore[jobIndex];

    // Can only cancel pending/processing jobs
    if (job.status === 'pending' || job.status === 'processing') {
      exportJobsStore[jobIndex].status = 'failed';
      exportJobsStore[jobIndex].error = 'Cancelled by user';
      return NextResponse.json({ success: true, message: 'Export job cancelled' });
    }

    // Delete completed/failed jobs
    exportJobsStore.splice(jobIndex, 1);

    return NextResponse.json({ success: true, message: 'Export job deleted' });
  } catch (error) {
    console.error('Export DELETE error:', error);
    return NextResponse.json(
      { error: 'Failed to delete export job' },
      { status: 500 }
    );
  }
}
