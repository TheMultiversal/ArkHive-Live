import { NextRequest, NextResponse } from 'next/server';

// ============================================================
// Types
// ============================================================

interface TeamMember {
  id: string;
  name: string;
  email: string;
  avatar?: string;
  role: 'owner' | 'admin' | 'investigator' | 'analyst' | 'viewer';
  status: 'active' | 'away' | 'offline' | 'pending';
  department?: string;
  joinedAt: Date;
  lastActive: Date;
  permissions: string[];
}

interface TeamInvite {
  id: string;
  email: string;
  role: string;
  invitedBy: string;
  invitedAt: Date;
  expiresAt: Date;
  message?: string;
}

// ============================================================
// Mock Data Store
// ============================================================

const teamStore: TeamMember[] = [
  {
    id: 'user_1',
    name: 'Alex Chen',
    email: 'alex.chen@arkhive.io',
    role: 'owner',
    status: 'active',
    department: 'Leadership',
    joinedAt: new Date('2023-01-15'),
    lastActive: new Date(),
    permissions: ['all'],
  },
  {
    id: 'user_2',
    name: 'Sarah Miller',
    email: 'sarah.miller@arkhive.io',
    role: 'admin',
    status: 'active',
    department: 'Investigation Lead',
    joinedAt: new Date('2023-03-20'),
    lastActive: new Date(Date.now() - 1000 * 60 * 30),
    permissions: ['investigations', 'entities', 'documents', 'team'],
  },
];

const invitesStore: TeamInvite[] = [];

// ============================================================
// GET /api/teams - Get team members
// ============================================================

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const role = searchParams.get('role');
    const status = searchParams.get('status');
    const search = searchParams.get('search');
    const includeInvites = searchParams.get('includeInvites') === 'true';

    let members = [...teamStore];

    // Apply filters
    if (role) {
      members = members.filter(m => m.role === role);
    }
    if (status) {
      members = members.filter(m => m.status === status);
    }
    if (search) {
      const searchLower = search.toLowerCase();
      members = members.filter(m => 
        m.name.toLowerCase().includes(searchLower) ||
        m.email.toLowerCase().includes(searchLower)
      );
    }

    const response: {
      members: TeamMember[];
      invites?: TeamInvite[];
      stats: {
        total: number;
        active: number;
        pending: number;
      };
    } = {
      members,
      stats: {
        total: members.length,
        active: members.filter(m => m.status === 'active').length,
        pending: invitesStore.length,
      },
    };

    if (includeInvites) {
      response.invites = invitesStore;
    }

    return NextResponse.json(response);
  } catch (error) {
    console.error('Teams GET error:', error);
    return NextResponse.json(
      { error: 'Failed to fetch team members' },
      { status: 500 }
    );
  }
}

// ============================================================
// POST /api/teams - Invite a new team member
// ============================================================

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    // Validate required fields
    if (!body.email) {
      return NextResponse.json(
        { error: 'Email is required' },
        { status: 400 }
      );
    }

    // Check if already a member
    if (teamStore.some(m => m.email === body.email)) {
      return NextResponse.json(
        { error: 'This person is already a team member' },
        { status: 409 }
      );
    }

    // Check if already invited
    if (invitesStore.some(i => i.email === body.email)) {
      return NextResponse.json(
        { error: 'This person has already been invited' },
        { status: 409 }
      );
    }

    const invite: TeamInvite = {
      id: `invite_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`,
      email: body.email,
      role: body.role || 'viewer',
      invitedBy: body.invitedBy || 'unknown',
      invitedAt: new Date(),
      expiresAt: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000), // 7 days
      message: body.message,
    };

    invitesStore.push(invite);

    return NextResponse.json({ success: true, invite }, { status: 201 });
  } catch (error) {
    console.error('Teams POST error:', error);
    return NextResponse.json(
      { error: 'Failed to send invite' },
      { status: 500 }
    );
  }
}

// ============================================================
// PATCH /api/teams - Update team member
// ============================================================

export async function PATCH(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const memberId = searchParams.get('id');
    const body = await request.json();

    if (!memberId) {
      return NextResponse.json(
        { error: 'Member ID is required' },
        { status: 400 }
      );
    }

    const memberIndex = teamStore.findIndex(m => m.id === memberId);
    if (memberIndex === -1) {
      return NextResponse.json(
        { error: 'Team member not found' },
        { status: 404 }
      );
    }

    // Prevent changing owner role unless there's another owner
    if (teamStore[memberIndex].role === 'owner' && body.role !== 'owner') {
      const otherOwners = teamStore.filter(m => m.role === 'owner' && m.id !== memberId);
      if (otherOwners.length === 0) {
        return NextResponse.json(
          { error: 'Cannot remove the only owner. Assign another owner first.' },
          { status: 400 }
        );
      }
    }

    const updatedMember: TeamMember = {
      ...teamStore[memberIndex],
      ...body,
      lastActive: new Date(),
    };

    teamStore[memberIndex] = updatedMember;

    return NextResponse.json(updatedMember);
  } catch (error) {
    console.error('Teams PATCH error:', error);
    return NextResponse.json(
      { error: 'Failed to update team member' },
      { status: 500 }
    );
  }
}

// ============================================================
// DELETE /api/teams - Remove team member or revoke invite
// ============================================================

export async function DELETE(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const memberId = searchParams.get('id');
    const inviteId = searchParams.get('inviteId');

    // Delete invite
    if (inviteId) {
      const inviteIndex = invitesStore.findIndex(i => i.id === inviteId);
      if (inviteIndex === -1) {
        return NextResponse.json(
          { error: 'Invite not found' },
          { status: 404 }
        );
      }
      invitesStore.splice(inviteIndex, 1);
      return NextResponse.json({ success: true, message: 'Invite revoked' });
    }

    // Delete member
    if (!memberId) {
      return NextResponse.json(
        { error: 'Member ID or Invite ID is required' },
        { status: 400 }
      );
    }

    const memberIndex = teamStore.findIndex(m => m.id === memberId);
    if (memberIndex === -1) {
      return NextResponse.json(
        { error: 'Team member not found' },
        { status: 404 }
      );
    }

    // Prevent removing owner
    if (teamStore[memberIndex].role === 'owner') {
      return NextResponse.json(
        { error: 'Cannot remove the owner' },
        { status: 400 }
      );
    }

    const removed = teamStore.splice(memberIndex, 1)[0];

    return NextResponse.json({ success: true, removed });
  } catch (error) {
    console.error('Teams DELETE error:', error);
    return NextResponse.json(
      { error: 'Failed to remove team member' },
      { status: 500 }
    );
  }
}
