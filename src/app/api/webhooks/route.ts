import { NextRequest, NextResponse } from 'next/server';

// ============================================================
// Types
// ============================================================

interface Webhook {
  id: string;
  name: string;
  url: string;
  events: string[];
  secret?: string;
  active: boolean;
  createdAt: Date;
  updatedAt: Date;
  lastTriggered?: Date;
  failureCount: number;
  metadata?: Record<string, unknown>;
}

interface WebhookDelivery {
  id: string;
  webhookId: string;
  event: string;
  payload: Record<string, unknown>;
  status: 'pending' | 'success' | 'failed';
  statusCode?: number;
  response?: string;
  attempts: number;
  createdAt: Date;
  completedAt?: Date;
}

// ============================================================
// Mock Data Store
// ============================================================

const webhooksStore: Webhook[] = [
  {
    id: 'webhook_1',
    name: 'Slack Notifications',
    url: 'https://hooks.slack.com/services/xxx',
    events: ['investigation.created', 'investigation.updated', 'alert.triggered'],
    active: true,
    createdAt: new Date('2024-01-01'),
    updatedAt: new Date('2024-01-01'),
    failureCount: 0,
  },
];

const deliveriesStore: WebhookDelivery[] = [];

// ============================================================
// GET /api/webhooks - Get webhooks
// ============================================================

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const webhookId = searchParams.get('id');
    const includeDeliveries = searchParams.get('includeDeliveries') === 'true';

    // Get specific webhook
    if (webhookId) {
      const webhook = webhooksStore.find(w => w.id === webhookId);
      if (!webhook) {
        return NextResponse.json(
          { error: 'Webhook not found' },
          { status: 404 }
        );
      }

      const response: { webhook: Webhook; deliveries?: WebhookDelivery[] } = { webhook };

      if (includeDeliveries) {
        response.deliveries = deliveriesStore
          .filter(d => d.webhookId === webhookId)
          .slice(0, 50);
      }

      return NextResponse.json(response);
    }

    // List all webhooks
    return NextResponse.json({
      data: webhooksStore,
      total: webhooksStore.length,
    });
  } catch (error) {
    console.error('Webhooks GET error:', error);
    return NextResponse.json(
      { error: 'Failed to fetch webhooks' },
      { status: 500 }
    );
  }
}

// ============================================================
// POST /api/webhooks - Create webhook
// ============================================================

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    // Validate required fields
    if (!body.name || !body.url || !body.events) {
      return NextResponse.json(
        { error: 'Name, URL, and events are required' },
        { status: 400 }
      );
    }

    // Validate URL
    try {
      new URL(body.url);
    } catch {
      return NextResponse.json(
        { error: 'Invalid webhook URL' },
        { status: 400 }
      );
    }

    const webhook: Webhook = {
      id: `webhook_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`,
      name: body.name,
      url: body.url,
      events: body.events,
      secret: body.secret,
      active: body.active ?? true,
      createdAt: new Date(),
      updatedAt: new Date(),
      failureCount: 0,
      metadata: body.metadata,
    };

    webhooksStore.push(webhook);

    return NextResponse.json(webhook, { status: 201 });
  } catch (error) {
    console.error('Webhooks POST error:', error);
    return NextResponse.json(
      { error: 'Failed to create webhook' },
      { status: 500 }
    );
  }
}

// ============================================================
// PATCH /api/webhooks - Update webhook
// ============================================================

export async function PATCH(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const webhookId = searchParams.get('id');
    const body = await request.json();

    if (!webhookId) {
      return NextResponse.json(
        { error: 'Webhook ID is required' },
        { status: 400 }
      );
    }

    const webhookIndex = webhooksStore.findIndex(w => w.id === webhookId);
    if (webhookIndex === -1) {
      return NextResponse.json(
        { error: 'Webhook not found' },
        { status: 404 }
      );
    }

    // Validate URL if provided
    if (body.url) {
      try {
        new URL(body.url);
      } catch {
        return NextResponse.json(
          { error: 'Invalid webhook URL' },
          { status: 400 }
        );
      }
    }

    const updatedWebhook: Webhook = {
      ...webhooksStore[webhookIndex],
      ...body,
      updatedAt: new Date(),
    };

    webhooksStore[webhookIndex] = updatedWebhook;

    return NextResponse.json(updatedWebhook);
  } catch (error) {
    console.error('Webhooks PATCH error:', error);
    return NextResponse.json(
      { error: 'Failed to update webhook' },
      { status: 500 }
    );
  }
}

// ============================================================
// DELETE /api/webhooks - Delete webhook
// ============================================================

export async function DELETE(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const webhookId = searchParams.get('id');

    if (!webhookId) {
      return NextResponse.json(
        { error: 'Webhook ID is required' },
        { status: 400 }
      );
    }

    const webhookIndex = webhooksStore.findIndex(w => w.id === webhookId);
    if (webhookIndex === -1) {
      return NextResponse.json(
        { error: 'Webhook not found' },
        { status: 404 }
      );
    }

    const deleted = webhooksStore.splice(webhookIndex, 1)[0];

    // Also remove deliveries
    const deliveryIds = deliveriesStore
      .filter(d => d.webhookId === webhookId)
      .map(d => d.id);
    deliveryIds.forEach(id => {
      const idx = deliveriesStore.findIndex(d => d.id === id);
      if (idx !== -1) deliveriesStore.splice(idx, 1);
    });

    return NextResponse.json({ success: true, deleted });
  } catch (error) {
    console.error('Webhooks DELETE error:', error);
    return NextResponse.json(
      { error: 'Failed to delete webhook' },
      { status: 500 }
    );
  }
}
