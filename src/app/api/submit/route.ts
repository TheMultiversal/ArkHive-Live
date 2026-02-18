import { NextResponse } from 'next/server';
import { v4 as uuidv4 } from 'uuid';

interface SubmissionData {
  subject: string;
  category: string;
  description: string;
  entities?: string;
  sources?: string;
  contact?: string;
}

// In-memory storage for demo purposes
// In production, this would go to a database
const submissions: Array<SubmissionData & { id: string; submittedAt: string }> = [];

export async function POST(request: Request) {
  try {
    const body: SubmissionData = await request.json();

    // Validate required fields
    if (!body.subject || !body.category || !body.description) {
      return NextResponse.json(
        { error: 'Missing required fields: subject, category, and description are required' },
        { status: 400 }
      );
    }

    // Create submission record
    const submission = {
      id: uuidv4(),
      ...body,
      submittedAt: new Date().toISOString(),
    };

    // Store submission (in production, save to database)
    submissions.push(submission);

    // Log for development
    console.log('New submission received:', submission.id);

    return NextResponse.json({
      success: true,
      message: 'Submission received successfully',
      id: submission.id,
    });
  } catch (error) {
    console.error('Submission error:', error);
    return NextResponse.json(
      { error: 'Failed to process submission' },
      { status: 500 }
    );
  }
}

// GET endpoint to retrieve submissions (admin only in production)
export async function GET() {
  return NextResponse.json({
    data: submissions,
    total: submissions.length,
  });
}
