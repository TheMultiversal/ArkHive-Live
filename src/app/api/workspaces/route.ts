import { NextRequest, NextResponse } from 'next/server';

// ============================================================
// Types
// ============================================================

interface Workspace {
  id: string;
  name: string;
  description: string;
  type: 'investigation' | 'research' | 'collaboration' | 'archive';
  status: 'active' | 'archived' | 'locked';
  createdAt: Date;
  updatedAt: Date;
  createdBy: string;
  members: Array<{
    userId: string;
    role: 'owner' | 'admin' | 'editor' | 'viewer';
    joinedAt: Date;
  }>;
  investigationIds: string[];
  entityIds: string[];
  documentIds: string[];
  settings: {
    isPrivate: boolean;
    allowComments: boolean;
    allowInvites: boolean;
    retentionDays?: number;
  };
}

// ============================================================
// Mock Data Store
// ============================================================

const workspacesStore: Workspace[] = [
  {
    id: 'ws_1',
    name: 'Operation Blackwater Investigation',
    description: 'Collaborative workspace for investigating Operation Blackwater',
    type: 'investigation',
    status: 'active',
    createdAt: new Date('2024-01-01'),
    updatedAt: new Date('2024-01-20'),
    createdBy: 'user_1',
    members: [
      { userId: 'user_1', role: 'owner', joinedAt: new Date('2024-01-01') },
      { userId: 'user_2', role: 'editor', joinedAt: new Date('2024-01-05') },
    ],
    investigationIds: ['inv_1'],
    entityIds: ['entity_1', 'entity_2'],
    documentIds: ['doc_1', 'doc_2'],
    settings: {
      isPrivate: true,
      allowComments: true,
      allowInvites: false,
    },
  },
];

// ============================================================
// GET /api/workspaces - Get workspaces
// ============================================================

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const id = searchParams.get('id');
    const userId = searchParams.get('userId');
    const type = searchParams.get('type');
    const status = searchParams.get('status');
    const page = parseInt(searchParams.get('page') || '1');
    const limit = parseInt(searchParams.get('limit') || '20');

    // Get by ID
    if (id) {
      const workspace = workspacesStore.find(w => w.id === id);
      if (!workspace) {
        return NextResponse.json(
          { error: 'Workspace not found' },
          { status: 404 }
        );
      }
      return NextResponse.json(workspace);
    }

    // List workspaces
    let workspaces = [...workspacesStore];

    // Apply filters
    if (userId) {
      workspaces = workspaces.filter(w => 
        w.members.some(m => m.userId === userId)
      );
    }
    if (type) {
      const types = type.split(',');
      workspaces = workspaces.filter(w => types.includes(w.type));
    }
    if (status) {
      const statuses = status.split(',');
      workspaces = workspaces.filter(w => statuses.includes(w.status));
    }

    // Sort by updated date descending
    workspaces.sort((a, b) => 
      new Date(b.updatedAt).getTime() - new Date(a.updatedAt).getTime()
    );

    // Pagination
    const total = workspaces.length;
    const totalPages = Math.ceil(total / limit);
    const offset = (page - 1) * limit;
    const paginatedWorkspaces = workspaces.slice(offset, offset + limit);

    return NextResponse.json({
      data: paginatedWorkspaces,
      pagination: {
        page,
        limit,
        total,
        totalPages,
        hasMore: page < totalPages,
      },
    });
  } catch (error) {
    console.error('Workspaces GET error:', error);
    return NextResponse.json(
      { error: 'Failed to fetch workspaces' },
      { status: 500 }
    );
  }
}

// ============================================================
// POST /api/workspaces - Create workspace
// ============================================================

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    // Validate required fields
    if (!body.name) {
      return NextResponse.json(
        { error: 'Name is required' },
        { status: 400 }
      );
    }

    const workspace: Workspace = {
      id: `ws_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`,
      name: body.name,
      description: body.description || '',
      type: body.type || 'collaboration',
      status: 'active',
      createdAt: new Date(),
      updatedAt: new Date(),
      createdBy: body.userId || 'anonymous',
      members: [
        {
          userId: body.userId || 'anonymous',
          role: 'owner',
          joinedAt: new Date(),
        },
      ],
      investigationIds: body.investigationIds || [],
      entityIds: body.entityIds || [],
      documentIds: body.documentIds || [],
      settings: {
        isPrivate: body.settings?.isPrivate ?? true,
        allowComments: body.settings?.allowComments ?? true,
        allowInvites: body.settings?.allowInvites ?? true,
        retentionDays: body.settings?.retentionDays,
      },
    };

    workspacesStore.push(workspace);

    return NextResponse.json(workspace, { status: 201 });
  } catch (error) {
    console.error('Workspaces POST error:', error);
    return NextResponse.json(
      { error: 'Failed to create workspace' },
      { status: 500 }
    );
  }
}

// ============================================================
// PATCH /api/workspaces - Update workspace
// ============================================================

export async function PATCH(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const id = searchParams.get('id');
    const action = searchParams.get('action');
    const body = await request.json();

    if (!id) {
      return NextResponse.json(
        { error: 'Workspace ID is required' },
        { status: 400 }
      );
    }

    const index = workspacesStore.findIndex(w => w.id === id);
    if (index === -1) {
      return NextResponse.json(
        { error: 'Workspace not found' },
        { status: 404 }
      );
    }

    // Handle member actions
    if (action === 'addMember') {
      if (!body.userId) {
        return NextResponse.json(
          { error: 'User ID is required' },
          { status: 400 }
        );
      }
      if (workspacesStore[index].members.some(m => m.userId === body.userId)) {
        return NextResponse.json(
          { error: 'User is already a member' },
          { status: 409 }
        );
      }
      workspacesStore[index].members.push({
        userId: body.userId,
        role: body.role || 'viewer',
        joinedAt: new Date(),
      });
      workspacesStore[index].updatedAt = new Date();
      return NextResponse.json(workspacesStore[index]);
    }

    if (action === 'removeMember') {
      if (!body.userId) {
        return NextResponse.json(
          { error: 'User ID is required' },
          { status: 400 }
        );
      }
      const memberIndex = workspacesStore[index].members.findIndex(
        m => m.userId === body.userId
      );
      if (memberIndex === -1) {
        return NextResponse.json(
          { error: 'User is not a member' },
          { status: 404 }
        );
      }
      if (workspacesStore[index].members[memberIndex].role === 'owner') {
        return NextResponse.json(
          { error: 'Cannot remove the owner' },
          { status: 400 }
        );
      }
      workspacesStore[index].members.splice(memberIndex, 1);
      workspacesStore[index].updatedAt = new Date();
      return NextResponse.json(workspacesStore[index]);
    }

    // Regular update
    const updated: Workspace = {
      ...workspacesStore[index],
      ...body,
      updatedAt: new Date(),
    };

    workspacesStore[index] = updated;

    return NextResponse.json(updated);
  } catch (error) {
    console.error('Workspaces PATCH error:', error);
    return NextResponse.json(
      { error: 'Failed to update workspace' },
      { status: 500 }
    );
  }
}

// ============================================================
// DELETE /api/workspaces - Delete workspace
// ============================================================

export async function DELETE(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const id = searchParams.get('id');

    if (!id) {
      return NextResponse.json(
        { error: 'Workspace ID is required' },
        { status: 400 }
      );
    }

    const index = workspacesStore.findIndex(w => w.id === id);
    if (index === -1) {
      return NextResponse.json(
        { error: 'Workspace not found' },
        { status: 404 }
      );
    }

    const deleted = workspacesStore.splice(index, 1)[0];

    return NextResponse.json({ success: true, deleted });
  } catch (error) {
    console.error('Workspaces DELETE error:', error);
    return NextResponse.json(
      { error: 'Failed to delete workspace' },
      { status: 500 }
    );
  }
}
