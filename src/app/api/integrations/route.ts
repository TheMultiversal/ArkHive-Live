import { NextRequest, NextResponse } from 'next/server';

// ============================================================
// Types
// ============================================================

interface Integration {
  id: string;
  name: string;
  type: 'storage' | 'communication' | 'analytics' | 'security' | 'ai' | 'export';
  provider: string;
  status: 'connected' | 'disconnected' | 'error' | 'pending';
  config: Record<string, unknown>;
  createdAt: Date;
  updatedAt: Date;
  lastSync?: Date;
  syncInterval?: number; // minutes
  error?: string;
  metadata?: Record<string, unknown>;
}

// ============================================================
// Mock Data Store
// ============================================================

const integrationsStore: Integration[] = [
  {
    id: 'int_1',
    name: 'Google Drive',
    type: 'storage',
    provider: 'google',
    status: 'connected',
    config: { folderId: 'xxx', autoSync: true },
    createdAt: new Date('2024-01-01'),
    updatedAt: new Date('2024-01-15'),
    lastSync: new Date(Date.now() - 1000 * 60 * 60),
    syncInterval: 30,
  },
  {
    id: 'int_2',
    name: 'Slack',
    type: 'communication',
    provider: 'slack',
    status: 'connected',
    config: { channel: '#investigations', notifications: true },
    createdAt: new Date('2024-01-05'),
    updatedAt: new Date('2024-01-10'),
  },
];

// ============================================================
// Available Integration Providers
// ============================================================

const availableProviders = [
  { id: 'google', name: 'Google Drive', type: 'storage', icon: 'google' },
  { id: 'dropbox', name: 'Dropbox', type: 'storage', icon: 'dropbox' },
  { id: 'onedrive', name: 'OneDrive', type: 'storage', icon: 'microsoft' },
  { id: 'slack', name: 'Slack', type: 'communication', icon: 'slack' },
  { id: 'discord', name: 'Discord', type: 'communication', icon: 'discord' },
  { id: 'teams', name: 'Microsoft Teams', type: 'communication', icon: 'microsoft' },
  { id: 'amplitude', name: 'Amplitude', type: 'analytics', icon: 'amplitude' },
  { id: 'mixpanel', name: 'Mixpanel', type: 'analytics', icon: 'mixpanel' },
  { id: 'okta', name: 'Okta', type: 'security', icon: 'okta' },
  { id: 'auth0', name: 'Auth0', type: 'security', icon: 'auth0' },
  { id: 'openai', name: 'OpenAI', type: 'ai', icon: 'openai' },
  { id: 'anthropic', name: 'Anthropic', type: 'ai', icon: 'anthropic' },
];

// ============================================================
// GET /api/integrations - Get integrations
// ============================================================

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const integrationId = searchParams.get('id');
    const type = searchParams.get('type');
    const status = searchParams.get('status');
    const listProviders = searchParams.get('providers') === 'true';

    // List available providers
    if (listProviders) {
      const typeFilter = searchParams.get('providerType');
      let providers = [...availableProviders];
      if (typeFilter) {
        providers = providers.filter(p => p.type === typeFilter);
      }
      return NextResponse.json({ providers });
    }

    // Get specific integration
    if (integrationId) {
      const integration = integrationsStore.find(i => i.id === integrationId);
      if (!integration) {
        return NextResponse.json(
          { error: 'Integration not found' },
          { status: 404 }
        );
      }
      return NextResponse.json(integration);
    }

    // List integrations
    let integrations = [...integrationsStore];

    if (type) {
      integrations = integrations.filter(i => i.type === type);
    }
    if (status) {
      integrations = integrations.filter(i => i.status === status);
    }

    return NextResponse.json({
      data: integrations,
      total: integrations.length,
    });
  } catch (error) {
    console.error('Integrations GET error:', error);
    return NextResponse.json(
      { error: 'Failed to fetch integrations' },
      { status: 500 }
    );
  }
}

// ============================================================
// POST /api/integrations - Create integration
// ============================================================

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    // Validate required fields
    if (!body.provider) {
      return NextResponse.json(
        { error: 'Provider is required' },
        { status: 400 }
      );
    }

    // Validate provider exists
    const providerInfo = availableProviders.find(p => p.id === body.provider);
    if (!providerInfo) {
      return NextResponse.json(
        { error: 'Invalid provider' },
        { status: 400 }
      );
    }

    // Check if already integrated
    if (integrationsStore.some(i => i.provider === body.provider && i.status === 'connected')) {
      return NextResponse.json(
        { error: 'This provider is already connected' },
        { status: 409 }
      );
    }

    const integration: Integration = {
      id: `int_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`,
      name: body.name || providerInfo.name,
      type: providerInfo.type as Integration['type'],
      provider: body.provider,
      status: 'pending',
      config: body.config || {},
      createdAt: new Date(),
      updatedAt: new Date(),
      syncInterval: body.syncInterval,
      metadata: body.metadata,
    };

    integrationsStore.push(integration);

    // Simulate OAuth flow completion
    setTimeout(() => {
      const idx = integrationsStore.findIndex(i => i.id === integration.id);
      if (idx !== -1) {
        integrationsStore[idx].status = 'connected';
        integrationsStore[idx].updatedAt = new Date();
      }
    }, 1000);

    return NextResponse.json(integration, { status: 201 });
  } catch (error) {
    console.error('Integrations POST error:', error);
    return NextResponse.json(
      { error: 'Failed to create integration' },
      { status: 500 }
    );
  }
}

// ============================================================
// PATCH /api/integrations - Update integration
// ============================================================

export async function PATCH(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const integrationId = searchParams.get('id');
    const action = searchParams.get('action');
    const body = await request.json();

    if (!integrationId) {
      return NextResponse.json(
        { error: 'Integration ID is required' },
        { status: 400 }
      );
    }

    const integrationIndex = integrationsStore.findIndex(i => i.id === integrationId);
    if (integrationIndex === -1) {
      return NextResponse.json(
        { error: 'Integration not found' },
        { status: 404 }
      );
    }

    // Handle special actions
    if (action === 'sync') {
      integrationsStore[integrationIndex].lastSync = new Date();
      integrationsStore[integrationIndex].updatedAt = new Date();
      return NextResponse.json({ 
        success: true, 
        message: 'Sync initiated',
        integration: integrationsStore[integrationIndex],
      });
    }

    if (action === 'reconnect') {
      integrationsStore[integrationIndex].status = 'pending';
      integrationsStore[integrationIndex].error = undefined;
      integrationsStore[integrationIndex].updatedAt = new Date();
      
      // Simulate reconnection
      setTimeout(() => {
        const idx = integrationsStore.findIndex(i => i.id === integrationId);
        if (idx !== -1) {
          integrationsStore[idx].status = 'connected';
          integrationsStore[idx].updatedAt = new Date();
        }
      }, 1000);

      return NextResponse.json({ 
        success: true, 
        message: 'Reconnection initiated',
      });
    }

    // Regular update
    const updatedIntegration: Integration = {
      ...integrationsStore[integrationIndex],
      ...body,
      updatedAt: new Date(),
    };

    integrationsStore[integrationIndex] = updatedIntegration;

    return NextResponse.json(updatedIntegration);
  } catch (error) {
    console.error('Integrations PATCH error:', error);
    return NextResponse.json(
      { error: 'Failed to update integration' },
      { status: 500 }
    );
  }
}

// ============================================================
// DELETE /api/integrations - Disconnect integration
// ============================================================

export async function DELETE(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const integrationId = searchParams.get('id');

    if (!integrationId) {
      return NextResponse.json(
        { error: 'Integration ID is required' },
        { status: 400 }
      );
    }

    const integrationIndex = integrationsStore.findIndex(i => i.id === integrationId);
    if (integrationIndex === -1) {
      return NextResponse.json(
        { error: 'Integration not found' },
        { status: 404 }
      );
    }

    const deleted = integrationsStore.splice(integrationIndex, 1)[0];

    return NextResponse.json({ success: true, deleted });
  } catch (error) {
    console.error('Integrations DELETE error:', error);
    return NextResponse.json(
      { error: 'Failed to disconnect integration' },
      { status: 500 }
    );
  }
}
