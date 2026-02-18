import { NextRequest, NextResponse } from 'next/server';

// ============================================================
// Types
// ============================================================

interface ImportJob {
  id: string;
  type: 'investigation' | 'entity' | 'document' | 'bulk';
  format: 'json' | 'csv' | 'xml' | 'markdown';
  status: 'pending' | 'validating' | 'processing' | 'completed' | 'failed';
  fileName: string;
  fileSize: number;
  options: {
    mergeStrategy: 'skip' | 'overwrite' | 'create_new';
    validateOnly: boolean;
    mapping?: Record<string, string>;
  };
  progress: {
    total: number;
    processed: number;
    succeeded: number;
    failed: number;
  };
  errors: Array<{
    row?: number;
    field?: string;
    message: string;
  }>;
  createdAt: Date;
  completedAt?: Date;
  userId: string;
}

// ============================================================
// Mock Data Store
// ============================================================

const importJobsStore: ImportJob[] = [];

// ============================================================
// GET /api/import - Get import jobs
// ============================================================

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const jobId = searchParams.get('id');
    const userId = searchParams.get('userId');
    const status = searchParams.get('status');

    // Get specific job
    if (jobId) {
      const job = importJobsStore.find(j => j.id === jobId);
      if (!job) {
        return NextResponse.json(
          { error: 'Import job not found' },
          { status: 404 }
        );
      }
      return NextResponse.json(job);
    }

    // List jobs
    let jobs = [...importJobsStore];

    if (userId) {
      jobs = jobs.filter(j => j.userId === userId);
    }
    if (status) {
      jobs = jobs.filter(j => j.status === status);
    }

    // Sort by creation date descending
    jobs.sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime());

    return NextResponse.json({
      data: jobs.slice(0, 50),
      total: jobs.length,
    });
  } catch (error) {
    console.error('Import GET error:', error);
    return NextResponse.json(
      { error: 'Failed to fetch import jobs' },
      { status: 500 }
    );
  }
}

// ============================================================
// POST /api/import - Create import job
// ============================================================

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    // Validate required fields
    if (!body.type || !body.format || !body.data) {
      return NextResponse.json(
        { error: 'Type, format, and data are required' },
        { status: 400 }
      );
    }

    // Parse data based on format
    let records: unknown[] = [];
    let errors: Array<{ row?: number; field?: string; message: string }> = [];

    try {
      if (body.format === 'json') {
        records = typeof body.data === 'string' ? JSON.parse(body.data) : body.data;
        if (!Array.isArray(records)) {
          records = [records];
        }
      } else if (body.format === 'csv') {
        // Simple CSV parsing (in real app, use proper CSV parser)
        const lines = body.data.split('\n');
        const headers = lines[0].split(',').map((h: string) => h.trim());
        records = lines.slice(1).map((line: string, idx: number) => {
          const values = line.split(',');
          const record: Record<string, string> = {};
          headers.forEach((header: string, i: number) => {
            record[header] = values[i]?.trim() || '';
          });
          if (Object.values(record).every(v => !v)) {
            return null;
          }
          return record;
        }).filter((r: Record<string, string> | null) => r !== null);
      }
    } catch (parseError) {
      return NextResponse.json(
        { error: 'Failed to parse import data', details: String(parseError) },
        { status: 400 }
      );
    }

    const job: ImportJob = {
      id: `import_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`,
      type: body.type,
      format: body.format,
      status: 'pending',
      fileName: body.fileName || `import_${Date.now()}.${body.format}`,
      fileSize: JSON.stringify(body.data).length,
      options: {
        mergeStrategy: body.options?.mergeStrategy || 'skip',
        validateOnly: body.options?.validateOnly || false,
        mapping: body.options?.mapping,
      },
      progress: {
        total: records.length,
        processed: 0,
        succeeded: 0,
        failed: 0,
      },
      errors,
      createdAt: new Date(),
      userId: body.userId || 'anonymous',
    };

    importJobsStore.push(job);

    // Simulate async processing
    simulateImportProcessing(job.id, records);

    return NextResponse.json(job, { status: 201 });
  } catch (error) {
    console.error('Import POST error:', error);
    return NextResponse.json(
      { error: 'Failed to create import job' },
      { status: 500 }
    );
  }
}

// ============================================================
// Helper: Simulate import processing
// ============================================================

function simulateImportProcessing(jobId: string, records: unknown[]) {
  const jobIndex = importJobsStore.findIndex(j => j.id === jobId);
  if (jobIndex === -1) return;

  // Start validation
  importJobsStore[jobIndex].status = 'validating';

  setTimeout(() => {
    const idx = importJobsStore.findIndex(j => j.id === jobId);
    if (idx === -1) return;

    // Start processing
    importJobsStore[idx].status = 'processing';

    // Process records
    let processed = 0;
    const interval = setInterval(() => {
      const currentIdx = importJobsStore.findIndex(j => j.id === jobId);
      if (currentIdx === -1) {
        clearInterval(interval);
        return;
      }

      processed++;
      const success = Math.random() > 0.1; // 90% success rate

      importJobsStore[currentIdx].progress.processed = processed;
      if (success) {
        importJobsStore[currentIdx].progress.succeeded++;
      } else {
        importJobsStore[currentIdx].progress.failed++;
        importJobsStore[currentIdx].errors.push({
          row: processed,
          message: 'Validation failed for this record',
        });
      }

      if (processed >= records.length) {
        clearInterval(interval);
        importJobsStore[currentIdx].status = 
          importJobsStore[currentIdx].progress.failed > 0 ? 'completed' : 'completed';
        importJobsStore[currentIdx].completedAt = new Date();
      }
    }, 100);
  }, 500);
}

// ============================================================
// DELETE /api/import - Cancel import job
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

    const jobIndex = importJobsStore.findIndex(j => j.id === jobId);
    if (jobIndex === -1) {
      return NextResponse.json(
        { error: 'Import job not found' },
        { status: 404 }
      );
    }

    const job = importJobsStore[jobIndex];

    // Can only cancel pending/validating/processing jobs
    if (['pending', 'validating', 'processing'].includes(job.status)) {
      importJobsStore[jobIndex].status = 'failed';
      importJobsStore[jobIndex].errors.push({
        message: 'Import cancelled by user',
      });
      importJobsStore[jobIndex].completedAt = new Date();
      return NextResponse.json({ success: true, message: 'Import job cancelled' });
    }

    // Delete completed/failed jobs
    importJobsStore.splice(jobIndex, 1);

    return NextResponse.json({ success: true, message: 'Import job deleted' });
  } catch (error) {
    console.error('Import DELETE error:', error);
    return NextResponse.json(
      { error: 'Failed to delete import job' },
      { status: 500 }
    );
  }
}
