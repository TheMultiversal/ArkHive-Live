'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Crown, 
  Shield, 
  Search as SearchIcon, 
  User, 
  Eye,
  MoreHorizontal,
  Clock,
  ChevronDown
} from 'lucide-react';
import { WorkspaceMember, WorkspaceRole } from '@/types/workspace';

interface MemberListProps {
  members: WorkspaceMember[];
  currentUserId?: string;
}

export default function MemberList({ members, currentUserId = '1' }: MemberListProps) {
  const [searchQuery, setSearchQuery] = useState('');
  const [showOffline, setShowOffline] = useState(true);

  const getRoleIcon = (role: WorkspaceRole) => {
    switch (role) {
      case 'owner': return <Crown className="w-3 h-3" />;
      case 'admin': return <Shield className="w-3 h-3" />;
      case 'investigator': return <SearchIcon className="w-3 h-3" />;
      case 'viewer': return <Eye className="w-3 h-3" />;
      default: return <User className="w-3 h-3" />;
    }
  };

  const formatLastActive = (date: Date) => {
    const now = new Date();
    const diffMs = now.getTime() - new Date(date).getTime();
    const diffMins = Math.floor(diffMs / 60000);
    const diffHours = Math.floor(diffMs / 3600000);
    const diffDays = Math.floor(diffMs / 86400000);

    if (diffMins < 1) return 'now';
    if (diffMins < 60) return `${diffMins}m`;
    if (diffHours < 24) return `${diffHours}h`;
    return `${diffDays}d`;
  };

  const filteredMembers = members.filter(member => {
    const matchesSearch = member.name.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesOnline = showOffline || member.isOnline;
    return matchesSearch && matchesOnline;
  });

  const onlineMembers = filteredMembers.filter(m => m.isOnline);
  const offlineMembers = filteredMembers.filter(m => !m.isOnline);

  const sortMembers = (a: WorkspaceMember, b: WorkspaceMember) => {
    const roleOrder: Record<WorkspaceRole, number> = { owner: 0, admin: 1, investigator: 2, researcher: 3, viewer: 4 };
    if (roleOrder[a.role] !== roleOrder[b.role]) return roleOrder[a.role] - roleOrder[b.role];
    return b.contributions - a.contributions;
  };

  return (
    <div className="h-full flex flex-col bg-[#050505]">
      {/* Header */}
      <div className="p-4 border-b border-white/[0.04]">
        <div className="flex items-center justify-between mb-3">
          <h3 className="text-xs font-medium text-white/50 uppercase tracking-widest">Team</h3>
          <span className="text-[10px] text-white/25">{onlineMembers.length}/{members.length}</span>
        </div>
        
        <div className="relative">
          <SearchIcon className="absolute left-2.5 top-1/2 -translate-y-1/2 w-3 h-3 text-white/20" aria-hidden="true" />
          <input
            type="text"
            placeholder="Search..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            aria-label="Search team members"
            className="w-full pl-7 pr-3 py-1.5 bg-white/[0.02] border border-white/[0.06] rounded text-[11px] text-white/70 placeholder-white/20 focus:outline-none focus:border-white/[0.1] transition-colors"
          />
        </div>
      </div>

      {/* Members */}
      <div className="flex-1 overflow-y-auto" role="list" aria-label="Team members">
        {onlineMembers.length > 0 && (
          <div className="p-3">
            <h4 className="text-[10px] font-medium text-white/25 uppercase tracking-widest mb-2 px-1">
              Online | {onlineMembers.length}
            </h4>
            <div className="space-y-0.5">
              {onlineMembers.sort(sortMembers).map((member, index) => (
                <MemberItem 
                  key={member.id} 
                  member={member} 
                  index={index}
                  getRoleIcon={getRoleIcon}
                  formatLastActive={formatLastActive}
                  isCurrentUser={member.id === currentUserId}
                />
              ))}
            </div>
          </div>
        )}

        {showOffline && offlineMembers.length > 0 && (
          <div className="p-3 border-t border-white/[0.03]">
            <h4 className="text-[10px] font-medium text-white/20 uppercase tracking-widest mb-2 px-1">
              Offline | {offlineMembers.length}
            </h4>
            <div className="space-y-0.5">
              {offlineMembers.sort(sortMembers).map((member, index) => (
                <MemberItem 
                  key={member.id} 
                  member={member} 
                  index={index}
                  getRoleIcon={getRoleIcon}
                  formatLastActive={formatLastActive}
                  isCurrentUser={member.id === currentUserId}
                />
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Legend */}
      <div className="p-3 border-t border-white/[0.04]" role="complementary" aria-label="Role legend">
        <div className="grid grid-cols-2 gap-1 text-[10px]">
          <div className="flex items-center gap-1.5 text-white/25"><Crown className="w-2.5 h-2.5" aria-hidden="true" />Owner</div>
          <div className="flex items-center gap-1.5 text-white/25"><Shield className="w-2.5 h-2.5" aria-hidden="true" />Admin</div>
          <div className="flex items-center gap-1.5 text-white/25"><SearchIcon className="w-2.5 h-2.5" aria-hidden="true" />Investigator</div>
          <div className="flex items-center gap-1.5 text-white/25"><Eye className="w-2.5 h-2.5" aria-hidden="true" />Viewer</div>
        </div>
      </div>
    </div>
  );
}

interface MemberItemProps {
  member: WorkspaceMember;
  index: number;
  getRoleIcon: (role: WorkspaceRole) => React.ReactNode;
  formatLastActive: (date: Date) => string;
  isCurrentUser: boolean;
}

function MemberItem({ member, index, getRoleIcon, formatLastActive, isCurrentUser }: MemberItemProps) {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: index * 0.02 }}
    >
      <div 
        className={`group flex items-center gap-2 p-2 rounded cursor-pointer transition-colors ${
          isCurrentUser ? 'bg-blood-950/20' : 'hover:bg-white/[0.02]'
        }`}
        onClick={() => setIsExpanded(!isExpanded)}
        role="button"
        aria-expanded={isExpanded}
        aria-label={`${member.name}, ${member.role}${member.isOnline ? ', online' : ', offline'}. Click to ${isExpanded ? 'collapse' : 'expand'} details`}
        tabIndex={0}
        onKeyDown={(e) => e.key === 'Enter' && setIsExpanded(!isExpanded)}
      >
        <div className="relative">
          <div className={`w-6 h-6 rounded-full bg-blood-900/40 flex items-center justify-center text-[10px] font-medium text-white/50 ${!member.isOnline ? 'opacity-50' : ''}`}>
            {member.name.charAt(0)}
          </div>
          <div className={`absolute -bottom-0.5 -right-0.5 w-2 h-2 rounded-full border border-[#050505] ${member.isOnline ? 'bg-emerald-500/80' : 'bg-white/20'}`} />
        </div>

        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-1.5">
            <span className={`text-[11px] font-medium truncate ${member.isOnline ? 'text-white/60' : 'text-white/30'}`}>
              {member.name}
            </span>
            {isCurrentUser && <span className="text-[9px] text-blood-500/60">you</span>}
            <span className="text-white/20">{getRoleIcon(member.role)}</span>
          </div>
          {!member.isOnline && (
            <div className="flex items-center gap-1 text-[9px] text-white/20">
              <Clock className="w-2 h-2" />
              {formatLastActive(member.lastActive)}
            </div>
          )}
        </div>

        <ChevronDown className={`w-3 h-3 text-white/15 transition-transform ${isExpanded ? 'rotate-180' : ''}`} />
      </div>

      {isExpanded && (
        <motion.div
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: 'auto', opacity: 1 }}
          className="px-2 pb-2 ml-8"
        >
          <div className="text-[10px] text-white/25 space-y-1">
            <div>{member.contributions} contributions</div>
            <div>Joined {new Date(member.joinedAt).toLocaleDateString()}</div>
            {member.expertise && (
              <div className="flex flex-wrap gap-1 mt-1">
                {member.expertise.map((exp, i) => (
                  <span key={i} className="px-1.5 py-0.5 bg-white/[0.03] rounded text-white/30">{exp}</span>
                ))}
              </div>
            )}
          </div>
        </motion.div>
      )}
    </motion.div>
  );
}
