'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Users,
  UserPlus,
  Search,
  Mail,
  Shield,
  Clock,
  Activity,
  MoreVertical,
  Edit2,
  Trash2,
  Eye,
  Settings,
  Crown,
  CheckCircle,
  XCircle,
  Calendar,
  MessageSquare,
  Target,
  FileText,
} from 'lucide-react';
import { format, formatDistanceToNow } from 'date-fns';
import { GlitchText } from '@/components/effects/GlitchText';

// ============================================================
// Types
// ============================================================

interface TeamMember {
  id: string;
  name: string;
  email: string;
  avatar?: string;
  role: 'owner' | 'admin' | 'investigator' | 'analyst' | 'viewer';
  status: 'active' | 'away' | 'offline';
  department?: string;
  joinedAt: Date;
  lastActive: Date;
  stats: {
    investigations: number;
    documents: number;
    comments: number;
  };
  permissions: string[];
}

// ============================================================
// Mock Data
// ============================================================

const mockTeamMembers: TeamMember[] = [
  {
    id: 'user_1',
    name: 'Alex Chen',
    email: 'alex.chen@arkhive.io',
    role: 'owner',
    status: 'active',
    department: 'Leadership',
    joinedAt: new Date('2023-01-15'),
    lastActive: new Date(),
    stats: { investigations: 47, documents: 234, comments: 892 },
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
    stats: { investigations: 34, documents: 156, comments: 567 },
    permissions: ['investigations', 'entities', 'documents', 'team'],
  },
  {
    id: 'user_3',
    name: 'James Wilson',
    email: 'james.wilson@arkhive.io',
    role: 'investigator',
    status: 'away',
    department: 'Corporate Affairs',
    joinedAt: new Date('2023-06-10'),
    lastActive: new Date(Date.now() - 1000 * 60 * 60 * 2),
    stats: { investigations: 23, documents: 89, comments: 234 },
    permissions: ['investigations', 'entities', 'documents'],
  },
  {
    id: 'user_4',
    name: 'Emily Rodriguez',
    email: 'emily.rodriguez@arkhive.io',
    role: 'analyst',
    status: 'active',
    department: 'Data Analysis',
    joinedAt: new Date('2023-08-05'),
    lastActive: new Date(Date.now() - 1000 * 60 * 15),
    stats: { investigations: 12, documents: 345, comments: 178 },
    permissions: ['investigations.view', 'entities.view', 'documents'],
  },
  {
    id: 'user_5',
    name: 'Michael Brown',
    email: 'michael.brown@arkhive.io',
    role: 'investigator',
    status: 'offline',
    department: 'Government Relations',
    joinedAt: new Date('2023-09-15'),
    lastActive: new Date(Date.now() - 1000 * 60 * 60 * 24),
    stats: { investigations: 18, documents: 67, comments: 145 },
    permissions: ['investigations', 'entities', 'documents'],
  },
  {
    id: 'user_6',
    name: 'Lisa Thompson',
    email: 'lisa.thompson@arkhive.io',
    role: 'viewer',
    status: 'offline',
    department: 'External Partner',
    joinedAt: new Date('2024-01-02'),
    lastActive: new Date(Date.now() - 1000 * 60 * 60 * 48),
    stats: { investigations: 0, documents: 12, comments: 23 },
    permissions: ['investigations.view', 'entities.view'],
  },
];

const roleColors: Record<TeamMember['role'], string> = {
  owner: 'bg-amber-500 text-black',
  admin: 'bg-purple-500 text-white',
  investigator: 'bg-blood-500 text-white',
  analyst: 'bg-blue-500 text-white',
  viewer: 'bg-zinc-600 text-white',
};

const statusColors: Record<TeamMember['status'], string> = {
  active: 'bg-emerald-500',
  away: 'bg-amber-500',
  offline: 'bg-zinc-500',
};

// ============================================================
// Components
// ============================================================

function TeamMemberCard({ member }: { member: TeamMember }) {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="glass-card p-6 relative group"
    >
      {/* Menu Button */}
      <div className="absolute top-4 right-4">
        <button
          onClick={() => setShowMenu(!showMenu)}
          className="p-1 text-zinc-500 hover:text-white opacity-0 group-hover:opacity-100 transition-opacity"
        >
          <MoreVertical className="w-4 h-4" />
        </button>
        
        <AnimatePresence>
          {showMenu && (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="absolute right-0 top-full mt-1 w-36 glass border border-zinc-700 py-1 z-10"
            >
              <button className="w-full px-3 py-2 text-left text-sm text-zinc-400 hover:text-white hover:bg-zinc-800 flex items-center gap-2">
                <Eye className="w-3 h-3" />
                View Profile
              </button>
              <button className="w-full px-3 py-2 text-left text-sm text-zinc-400 hover:text-white hover:bg-zinc-800 flex items-center gap-2">
                <Settings className="w-3 h-3" />
                Edit Permissions
              </button>
              <button className="w-full px-3 py-2 text-left text-sm text-red-400 hover:text-red-300 hover:bg-zinc-800 flex items-center gap-2">
                <Trash2 className="w-3 h-3" />
                Remove
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Avatar & Basic Info */}
      <div className="flex items-start gap-4 mb-4">
        <div className="relative">
          <div className="w-14 h-14 bg-zinc-800 flex items-center justify-center text-xl font-bold text-white">
            {member.name.split(' ').map(n => n[0]).join('')}
          </div>
          <div className={`absolute -bottom-1 -right-1 w-4 h-4 ${statusColors[member.status]} border-2 border-black`} />
        </div>
        
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2">
            <h3 className="text-lg font-semibold text-white truncate">{member.name}</h3>
            {member.role === 'owner' && (
              <Crown className="w-4 h-4 text-amber-500" />
            )}
          </div>
          <p className="text-zinc-400 text-sm truncate">{member.email}</p>
          {member.department && (
            <p className="text-zinc-500 text-xs mt-1">{member.department}</p>
          )}
        </div>
      </div>

      {/* Role Badge */}
      <div className="flex items-center gap-2 mb-4">
        <span className={`px-2 py-1 text-xs font-medium capitalize ${roleColors[member.role]}`}>
          {member.role}
        </span>
        <span className="text-zinc-500 text-xs">
          Joined {format(member.joinedAt, 'MMM yyyy')}
        </span>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-3 gap-4 pt-4 border-t border-zinc-800">
        <div className="text-center">
          <Target className="w-4 h-4 text-blood-400 mx-auto mb-1" />
          <p className="text-white font-semibold text-sm">{member.stats.investigations}</p>
          <p className="text-zinc-500 text-xs">Cases</p>
        </div>
        <div className="text-center">
          <FileText className="w-4 h-4 text-blue-400 mx-auto mb-1" />
          <p className="text-white font-semibold text-sm">{member.stats.documents}</p>
          <p className="text-zinc-500 text-xs">Docs</p>
        </div>
        <div className="text-center">
          <MessageSquare className="w-4 h-4 text-amber-400 mx-auto mb-1" />
          <p className="text-white font-semibold text-sm">{member.stats.comments}</p>
          <p className="text-zinc-500 text-xs">Comments</p>
        </div>
      </div>

      {/* Last Active */}
      <div className="flex items-center gap-2 mt-4 pt-4 border-t border-zinc-800 text-sm">
        <Clock className="w-4 h-4 text-zinc-500" />
        <span className="text-zinc-500">Last active:</span>
        <span className="text-zinc-400">
          {formatDistanceToNow(member.lastActive, { addSuffix: true })}
        </span>
      </div>
    </motion.div>
  );
}

function InviteModal({ 
  isOpen, 
  onClose 
}: { 
  isOpen: boolean; 
  onClose: () => void;
}) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="glass-card w-full max-w-md p-6"
      >
        <h2 className="text-xl font-bold text-white mb-2">Invite Team Member</h2>
        <p className="text-zinc-400 text-sm mb-6">
          Send an invitation to collaborate on investigations
        </p>
        
        <div className="space-y-4">
          <div>
            <label className="block text-zinc-400 text-sm mb-2">Email Address</label>
            <input
              type="email"
              placeholder="colleague@example.com"
              className="w-full px-4 py-2 bg-zinc-900 border border-zinc-700 text-white placeholder:text-zinc-500 focus:outline-none focus:border-blood-500"
            />
          </div>

          <div>
            <label className="block text-zinc-400 text-sm mb-2">Role</label>
            <select className="w-full px-4 py-2 bg-zinc-900 border border-zinc-700 text-white focus:outline-none focus:border-blood-500">
              <option value="viewer">Viewer - Can view investigations</option>
              <option value="analyst">Analyst - Can analyze documents</option>
              <option value="investigator">Investigator - Full investigation access</option>
              <option value="admin">Admin - Team management access</option>
            </select>
          </div>

          <div>
            <label className="block text-zinc-400 text-sm mb-2">Personal Message (optional)</label>
            <textarea
              placeholder="Add a personal note to your invitation..."
              rows={3}
              className="w-full px-4 py-2 bg-zinc-900 border border-zinc-700 text-white placeholder:text-zinc-500 focus:outline-none focus:border-blood-500 resize-none"
            />
          </div>
        </div>

        <div className="flex justify-end gap-4 mt-8">
          <button
            onClick={onClose}
            className="px-4 py-2 text-zinc-400 hover:text-white transition-colors"
          >
            Cancel
          </button>
          <button className="flex items-center gap-2 px-6 py-2 bg-blood-600 text-white hover:bg-blood-500 transition-colors">
            <Mail className="w-4 h-4" />
            Send Invite
          </button>
        </div>
      </motion.div>
    </div>
  );
}

// ============================================================
// Main Page
// ============================================================

export default function TeamPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedRole, setSelectedRole] = useState<string>('all');
  const [showInviteModal, setShowInviteModal] = useState(false);

  const filteredMembers = mockTeamMembers.filter((member) => {
    if (searchQuery) {
      const search = searchQuery.toLowerCase();
      if (
        !member.name.toLowerCase().includes(search) &&
        !member.email.toLowerCase().includes(search)
      ) {
        return false;
      }
    }
    if (selectedRole !== 'all' && member.role !== selectedRole) {
      return false;
    }
    return true;
  });

  const activeCount = mockTeamMembers.filter(m => m.status === 'active').length;
  const awayCount = mockTeamMembers.filter(m => m.status === 'away').length;

  return (
    <div className="min-h-screen bg-black">
      <div className="max-w-7xl mx-auto px-6 py-12">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-4xl font-black tracking-tighter text-white mb-2">
              <GlitchText text="TEAM" />
            </h1>
            <p className="text-zinc-400">
              Manage your investigative team and collaborators
            </p>
          </div>

          <button
            onClick={() => setShowInviteModal(true)}
            className="flex items-center gap-2 px-6 py-3 bg-blood-600 text-white hover:bg-blood-500 transition-colors"
          >
            <UserPlus className="w-5 h-5" />
            Invite Member
          </button>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-4 gap-4 mb-8">
          {[
            { label: 'Total Members', value: mockTeamMembers.length, icon: <Users className="w-5 h-5" /> },
            { label: 'Online Now', value: activeCount, icon: <CheckCircle className="w-5 h-5 text-emerald-500" /> },
            { label: 'Away', value: awayCount, icon: <Clock className="w-5 h-5 text-amber-500" /> },
            { label: 'Pending Invites', value: 3, icon: <Mail className="w-5 h-5 text-blue-500" /> },
          ].map((stat, i) => (
            <div key={i} className="glass-card p-4 flex items-center gap-4">
              <div className="p-2 bg-zinc-800">
                {stat.icon}
              </div>
              <div>
                <p className="text-zinc-400 text-sm">{stat.label}</p>
                <p className="text-white text-xl font-bold">{stat.value}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Filters */}
        <div className="flex items-center gap-4 mb-8">
          <div className="flex-1 relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-zinc-500" />
            <input
              type="text"
              placeholder="Search team members..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-4 py-3 glass text-white placeholder:text-zinc-500 focus:outline-none focus:border-blood-500"
            />
          </div>

          <div className="flex items-center gap-2 glass p-1">
            {['all', 'owner', 'admin', 'investigator', 'analyst', 'viewer'].map((role) => (
              <button
                key={role}
                onClick={() => setSelectedRole(role)}
                className={`px-4 py-2 text-sm font-medium capitalize transition-colors ${
                  selectedRole === role
                    ? 'bg-blood-600 text-white'
                    : 'text-zinc-400 hover:text-white'
                }`}
              >
                {role}
              </button>
            ))}
          </div>
        </div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredMembers.map((member, index) => (
            <motion.div
              key={member.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.05 }}
            >
              <TeamMemberCard member={member} />
            </motion.div>
          ))}
        </div>

        {filteredMembers.length === 0 && (
          <div className="text-center py-16">
            <Users className="w-16 h-16 text-zinc-700 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-white mb-2">No team members found</h3>
            <p className="text-zinc-400">
              Try adjusting your search or filters
            </p>
          </div>
        )}

        {/* Pending Invites Section */}
        <div className="mt-12">
          <h2 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
            <Mail className="w-5 h-5 text-blue-500" />
            Pending Invitations
          </h2>
          
          <div className="glass-card divide-y divide-zinc-800">
            {[
              { email: 'john.doe@external.com', role: 'analyst', sentAt: new Date(Date.now() - 1000 * 60 * 60 * 24) },
              { email: 'jane.smith@partner.org', role: 'viewer', sentAt: new Date(Date.now() - 1000 * 60 * 60 * 48) },
              { email: 'bob.johnson@agency.gov', role: 'investigator', sentAt: new Date(Date.now() - 1000 * 60 * 60 * 72) },
            ].map((invite, i) => (
              <div key={i} className="flex items-center justify-between p-4">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 bg-zinc-800 flex items-center justify-center text-zinc-500">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-white">{invite.email}</p>
                    <p className="text-zinc-500 text-sm">
                      Invited as <span className="capitalize">{invite.role}</span> · {formatDistanceToNow(invite.sentAt, { addSuffix: true })}
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <button className="px-3 py-1 text-sm text-zinc-400 hover:text-white transition-colors">
                    Resend
                  </button>
                  <button className="px-3 py-1 text-sm text-red-400 hover:text-red-300 transition-colors">
                    Revoke
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Invite Modal */}
        <InviteModal 
          isOpen={showInviteModal} 
          onClose={() => setShowInviteModal(false)} 
        />
      </div>
    </div>
  );
}
