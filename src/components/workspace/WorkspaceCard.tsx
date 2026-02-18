'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { 
  Users, 
  MessageSquare, 
  FileText, 
  Clock, 
  Eye,
  Lock,
  ChevronRight,
  Flame
} from 'lucide-react';
import { Workspace } from '@/types/workspace';

interface WorkspaceCardProps {
  workspace: Workspace;
  index?: number;
  viewMode?: 'grid' | 'list';
}

export default function WorkspaceCard({ workspace, index = 0, viewMode = 'grid' }: WorkspaceCardProps) {
  const formatTimeAgo = (date: Date) => {
    const now = new Date();
    const diffMs = now.getTime() - new Date(date).getTime();
    const diffMins = Math.floor(diffMs / 60000);
    const diffHours = Math.floor(diffMs / 3600000);
    const diffDays = Math.floor(diffMs / 86400000);

    if (diffMins < 1) return 'Just now';
    if (diffMins < 60) return `${diffMins}m ago`;
    if (diffHours < 24) return `${diffHours}h ago`;
    if (diffDays < 7) return `${diffDays}d ago`;
    return new Date(date).toLocaleDateString();
  };

  const onlineMembers = workspace.members.filter(m => m.isOnline).length;
  const completedMilestones = workspace.milestones.filter(m => m.isCompleted).length;
  const progressPercent = workspace.milestones.length > 0 
    ? (completedMilestones / workspace.milestones.length) * 100 
    : 0;

  // List view variant
  if (viewMode === 'list') {
    return (
      <motion.div
        initial={{ opacity: 0, x: -8 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: index * 0.02, duration: 0.2 }}
      >
        <Link href={`/workspaces/${workspace.id}`}>
          <div className="group relative flex items-center gap-4 bg-[#0a0a0a] border border-white/[0.06] rounded-lg hover:border-white/[0.12] transition-all duration-200 cursor-pointer overflow-hidden p-4">
            {/* Priority accent */}
            <div className={`absolute left-0 top-0 bottom-0 w-[2px] ${
              workspace.priority === 'critical' ? 'bg-blood-500' :
              workspace.priority === 'high' ? 'bg-blood-600/60' :
              'bg-white/[0.08]'
            }`} />

            {/* Main content */}
            <div className="flex-1 min-w-0 pl-2">
              <div className="flex items-center gap-2 mb-1">
                {workspace.priority === 'critical' && (
                  <Flame className="w-3 h-3 text-blood-500" />
                )}
                <h3 className="text-sm font-medium text-white/80 group-hover:text-white transition-colors truncate">
                  {workspace.name}
                </h3>
                {!workspace.isPublic && (
                  <Lock className="w-2.5 h-2.5 text-white/20 flex-shrink-0" />
                )}
              </div>
              <p className="text-[11px] text-white/30 truncate">{workspace.description}</p>
            </div>

            {/* Stats */}
            <div className="hidden sm:flex items-center gap-4 text-white/25 flex-shrink-0">
              <div className="flex items-center gap-1">
                <Users className="w-3 h-3" />
                <span className="text-[10px]">{workspace.members.length}</span>
              </div>
              <div className="flex items-center gap-1">
                <MessageSquare className="w-3 h-3" />
                <span className="text-[10px]">{workspace.messages.length}</span>
              </div>
              <div className="flex items-center gap-1">
                <FileText className="w-3 h-3" />
                <span className="text-[10px]">{workspace.evidence.length}</span>
              </div>
            </div>

            {/* Progress indicator */}
            {workspace.milestones.length > 0 && (
              <div className="hidden md:flex items-center gap-2 flex-shrink-0">
                <div className="w-16 h-1 bg-white/[0.04] rounded-full overflow-hidden">
                  <div 
                    className="h-full bg-blood-500/80"
                    style={{ width: `${progressPercent}%` }}
                  />
                </div>
                <span className="text-[9px] text-white/25 w-7">{Math.round(progressPercent)}%</span>
              </div>
            )}

            {/* Online indicator and time */}
            <div className="flex items-center gap-3 flex-shrink-0">
              {onlineMembers > 0 && (
                <div className="flex items-center gap-1">
                  <span className="w-1.5 h-1.5 bg-emerald-500/80 rounded-full" />
                  <span className="text-[10px] text-white/25">{onlineMembers}</span>
                </div>
              )}
              <div className="flex items-center gap-1 text-white/20">
                <Clock className="w-3 h-3" />
                <span className="text-[10px]">{formatTimeAgo(workspace.lastActivity)}</span>
              </div>
              <ChevronRight className="w-4 h-4 text-white/10 group-hover:text-white/30 group-hover:translate-x-0.5 transition-all" />
            </div>
          </div>
        </Link>
      </motion.div>
    );
  }

  // Grid view (default)
  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.04, duration: 0.25 }}
    >
      <Link href={`/workspaces/${workspace.id}`}>
        <div className="group relative bg-[#0a0a0a] border border-white/[0.06] rounded-lg hover:border-white/[0.12] transition-all duration-200 cursor-pointer overflow-hidden">
          {/* Priority accent */}
          <div className={`absolute left-0 top-0 bottom-0 w-[2px] ${
            workspace.priority === 'critical' ? 'bg-blood-500' :
            workspace.priority === 'high' ? 'bg-blood-600/60' :
            'bg-white/[0.08]'
          }`} />

          <div className="p-5 pl-6">
            {/* Header */}
            <div className="flex items-start justify-between mb-3">
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2 mb-2">
                  {workspace.priority === 'critical' && (
                    <Flame className="w-3 h-3 text-blood-500" />
                  )}
                  <span className="text-[10px] font-medium uppercase tracking-widest text-white/30">
                    {workspace.priority}
                  </span>
                  {!workspace.isPublic && (
                    <Lock className="w-2.5 h-2.5 text-white/20" />
                  )}
                </div>
                <h3 className="text-[15px] font-medium text-white/90 group-hover:text-white transition-colors line-clamp-1">
                  {workspace.name}
                </h3>
              </div>
              <ChevronRight className="w-4 h-4 text-white/10 group-hover:text-white/30 group-hover:translate-x-0.5 transition-all flex-shrink-0" />
            </div>

            {/* Description */}
            <p className="text-[13px] text-white/35 mb-4 line-clamp-2 leading-relaxed">
              {workspace.description}
            </p>

            {/* Tags */}
            <div className="flex flex-wrap gap-1 mb-4">
              {workspace.tags.slice(0, 3).map((tag, i) => (
                <span 
                  key={i}
                  className="px-2 py-0.5 text-[10px] font-medium tracking-wide bg-white/[0.03] text-white/40 rounded"
                >
                  {tag}
                </span>
              ))}
              {workspace.tags.length > 3 && (
                <span className="text-[10px] text-white/20 px-1">
                  +{workspace.tags.length - 3}
                </span>
              )}
            </div>

            {/* Progress */}
            {workspace.milestones.length > 0 && (
              <div className="mb-4">
                <div className="flex items-center justify-between text-[10px] text-white/30 mb-1">
                  <span className="uppercase tracking-wider">Progress</span>
                  <span>{Math.round(progressPercent)}%</span>
                </div>
                <div className="h-[3px] bg-white/[0.04] rounded-full overflow-hidden">
                  <motion.div 
                    className="h-full bg-blood-500/80"
                    initial={{ width: 0 }}
                    animate={{ width: `${progressPercent}%` }}
                    transition={{ duration: 0.6, delay: index * 0.04 + 0.15 }}
                  />
                </div>
              </div>
            )}

            {/* Footer */}
            <div className="flex items-center justify-between pt-3 border-t border-white/[0.04]">
              <div className="flex items-center gap-3">
                <div className="flex items-center gap-1 text-white/25">
                  <Users className="w-3 h-3" />
                  <span className="text-[11px]">{workspace.members.length}</span>
                </div>
                <div className="flex items-center gap-1 text-white/25">
                  <MessageSquare className="w-3 h-3" />
                  <span className="text-[11px]">{workspace.messages.length}</span>
                </div>
                <div className="flex items-center gap-1 text-white/25">
                  <FileText className="w-3 h-3" />
                  <span className="text-[11px]">{workspace.evidence.length}</span>
                </div>
              </div>

              <div className="flex items-center gap-2">
                {onlineMembers > 0 && (
                  <div className="flex items-center gap-1">
                    <span className="w-1 h-1 bg-emerald-500/80 rounded-full" />
                    <span className="text-[10px] text-white/25">{onlineMembers}</span>
                  </div>
                )}
                <div className="flex items-center gap-1 text-white/20">
                  <Clock className="w-2.5 h-2.5" />
                  <span className="text-[10px]">{formatTimeAgo(workspace.lastActivity)}</span>
                </div>
              </div>
            </div>

            {/* Avatars */}
            <div className="flex items-center justify-between mt-3">
              <div className="flex -space-x-1.5">
                {workspace.members.slice(0, 4).map((member) => (
                  <div 
                    key={member.id}
                    className="w-5 h-5 rounded-full bg-blood-900/60 flex items-center justify-center text-[9px] font-medium text-white/60 border border-[#0a0a0a]"
                  >
                    {member.name.charAt(0)}
                  </div>
                ))}
                {workspace.members.length > 4 && (
                  <div className="w-5 h-5 rounded-full bg-white/[0.04] flex items-center justify-center text-[9px] text-white/30 border border-[#0a0a0a]">
                    +{workspace.members.length - 4}
                  </div>
                )}
              </div>
              <div className="flex items-center gap-1 text-white/15">
                <Eye className="w-2.5 h-2.5" />
                <span className="text-[10px]">{workspace.viewCount.toLocaleString()}</span>
              </div>
            </div>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}
