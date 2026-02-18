import { NextRequest, NextResponse } from 'next/server';

// ============================================================
// Types
// ============================================================

interface AIAnalysis {
  id: string;
  type: 'summarize' | 'analyze' | 'extract' | 'classify' | 'connect' | 'predict';
  status: 'pending' | 'processing' | 'completed' | 'failed';
  input: {
    text?: string;
    documentIds?: string[];
    entityIds?: string[];
    investigationId?: string;
  };
  output?: {
    summary?: string;
    entities?: Array<{ name: string; type: string; confidence: number }>;
    classifications?: Array<{ label: string; confidence: number }>;
    connections?: Array<{ from: string; to: string; type: string; strength: number }>;
    predictions?: Array<{ label: string; probability: number; reasoning: string }>;
    keyInsights?: string[];
    riskAssessment?: { level: string; factors: string[] };
  };
  model: string;
  tokens: { input: number; output: number };
  createdAt: Date;
  completedAt?: Date;
  userId: string;
  error?: string;
}

// ============================================================
// Mock Data Store
// ============================================================

const aiJobsStore: AIAnalysis[] = [];

// ============================================================
// GET /api/ai - Get AI analysis jobs
// ============================================================

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const jobId = searchParams.get('id');
    const userId = searchParams.get('userId');
    const type = searchParams.get('type');
    const status = searchParams.get('status');

    // Get specific job
    if (jobId) {
      const job = aiJobsStore.find(j => j.id === jobId);
      if (!job) {
        return NextResponse.json(
          { error: 'AI analysis job not found' },
          { status: 404 }
        );
      }
      return NextResponse.json(job);
    }

    // List jobs
    let jobs = [...aiJobsStore];

    if (userId) {
      jobs = jobs.filter(j => j.userId === userId);
    }
    if (type) {
      jobs = jobs.filter(j => j.type === type);
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
    console.error('AI GET error:', error);
    return NextResponse.json(
      { error: 'Failed to fetch AI jobs' },
      { status: 500 }
    );
  }
}

// ============================================================
// POST /api/ai - Create AI analysis job
// ============================================================

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    // Validate required fields
    if (!body.type) {
      return NextResponse.json(
        { error: 'Analysis type is required' },
        { status: 400 }
      );
    }

    const validTypes = ['summarize', 'analyze', 'extract', 'classify', 'connect', 'predict'];
    if (!validTypes.includes(body.type)) {
      return NextResponse.json(
        { error: `Invalid type. Must be one of: ${validTypes.join(', ')}` },
        { status: 400 }
      );
    }

    // Validate input
    if (!body.text && !body.documentIds && !body.entityIds && !body.investigationId) {
      return NextResponse.json(
        { error: 'At least one input (text, documentIds, entityIds, or investigationId) is required' },
        { status: 400 }
      );
    }

    const job: AIAnalysis = {
      id: `ai_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`,
      type: body.type,
      status: 'pending',
      input: {
        text: body.text,
        documentIds: body.documentIds,
        entityIds: body.entityIds,
        investigationId: body.investigationId,
      },
      model: body.model || 'arkhive-analysis-v1',
      tokens: { input: 0, output: 0 },
      createdAt: new Date(),
      userId: body.userId || 'anonymous',
    };

    aiJobsStore.push(job);

    // Simulate AI processing
    simulateAIProcessing(job.id, body.type, body.text || '');

    return NextResponse.json(job, { status: 201 });
  } catch (error) {
    console.error('AI POST error:', error);
    return NextResponse.json(
      { error: 'Failed to create AI analysis job' },
      { status: 500 }
    );
  }
}

// ============================================================
// Helper: Simulate AI processing
// ============================================================

function simulateAIProcessing(jobId: string, type: string, inputText: string) {
  const jobIndex = aiJobsStore.findIndex(j => j.id === jobId);
  if (jobIndex === -1) return;

  // Start processing
  setTimeout(() => {
    const idx = aiJobsStore.findIndex(j => j.id === jobId);
    if (idx === -1) return;

    aiJobsStore[idx].status = 'processing';
    aiJobsStore[idx].tokens.input = inputText.length / 4; // Rough token estimate

    // Complete processing
    setTimeout(() => {
      const currentIdx = aiJobsStore.findIndex(j => j.id === jobId);
      if (currentIdx === -1) return;

      const output = generateMockAIOutput(type, inputText);
      
      aiJobsStore[currentIdx].status = 'completed';
      aiJobsStore[currentIdx].output = output;
      aiJobsStore[currentIdx].tokens.output = JSON.stringify(output).length / 4;
      aiJobsStore[currentIdx].completedAt = new Date();
    }, 2000);
  }, 500);
}

function generateMockAIOutput(type: string, inputText: string): AIAnalysis['output'] {
  switch (type) {
    case 'summarize':
      return {
        summary: `Analysis of the provided content reveals key patterns related to investigative findings. The document discusses ${inputText.length > 100 ? 'extensive' : 'brief'} evidence and connections between multiple entities. Further investigation recommended.`,
        keyInsights: [
          'Multiple entities identified with potential connections',
          'Timeline suggests coordinated activity',
          'Financial patterns indicate possible irregularities',
          'Geographic clustering in specific regions',
        ],
      };
    
    case 'extract':
      return {
        entities: [
          { name: 'Unknown Corporation', type: 'organization', confidence: 0.92 },
          { name: 'John Doe', type: 'individual', confidence: 0.87 },
          { name: 'Federal Agency', type: 'agency', confidence: 0.95 },
          { name: 'Shell Company LLC', type: 'corporation', confidence: 0.78 },
        ],
      };
    
    case 'classify':
      return {
        classifications: [
          { label: 'Financial Crime', confidence: 0.85 },
          { label: 'Government Corruption', confidence: 0.72 },
          { label: 'Money Laundering', confidence: 0.68 },
          { label: 'Corporate Fraud', confidence: 0.61 },
        ],
      };
    
    case 'connect':
      return {
        connections: [
          { from: 'entity_1', to: 'entity_2', type: 'financial', strength: 0.89 },
          { from: 'entity_2', to: 'entity_3', type: 'organizational', strength: 0.75 },
          { from: 'entity_1', to: 'entity_3', type: 'personal', strength: 0.62 },
          { from: 'entity_3', to: 'entity_4', type: 'contractual', strength: 0.81 },
        ],
      };
    
    case 'predict':
      return {
        predictions: [
          {
            label: 'High likelihood of additional undiscovered connections',
            probability: 0.78,
            reasoning: 'Pattern analysis suggests hidden relationships based on financial flows',
          },
          {
            label: 'Investigation may expand to international scope',
            probability: 0.65,
            reasoning: 'Entity connections span multiple jurisdictions',
          },
        ],
        riskAssessment: {
          level: 'high',
          factors: [
            'Multiple high-profile entities involved',
            'Cross-border financial transactions detected',
            'Pattern matches known fraud indicators',
          ],
        },
      };
    
    case 'analyze':
    default:
      return {
        summary: 'Comprehensive analysis complete.',
        keyInsights: [
          'Primary subjects identified and profiled',
          'Network structure mapped with confidence',
          'Risk factors assessed and categorized',
          'Recommended follow-up actions generated',
        ],
        riskAssessment: {
          level: 'medium',
          factors: [
            'Moderate evidence of irregular activity',
            'Some connections require verification',
          ],
        },
      };
  }
}

// ============================================================
// DELETE /api/ai - Cancel AI job
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

    const jobIndex = aiJobsStore.findIndex(j => j.id === jobId);
    if (jobIndex === -1) {
      return NextResponse.json(
        { error: 'AI job not found' },
        { status: 404 }
      );
    }

    const job = aiJobsStore[jobIndex];

    // Can only cancel pending/processing jobs
    if (['pending', 'processing'].includes(job.status)) {
      aiJobsStore[jobIndex].status = 'failed';
      aiJobsStore[jobIndex].error = 'Cancelled by user';
      aiJobsStore[jobIndex].completedAt = new Date();
      return NextResponse.json({ success: true, message: 'AI job cancelled' });
    }

    // Delete completed/failed jobs
    aiJobsStore.splice(jobIndex, 1);

    return NextResponse.json({ success: true, message: 'AI job deleted' });
  } catch (error) {
    console.error('AI DELETE error:', error);
    return NextResponse.json(
      { error: 'Failed to delete AI job' },
      { status: 500 }
    );
  }
}
