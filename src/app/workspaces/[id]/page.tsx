'use client';

import { useState, use } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { 
  ArrowLeft, 
  Settings, 
  Users, 
  MessageSquare, 
  FileText, 
  Layers,
  Clock,
  MoreHorizontal,
  Share2,
  Bell,
  BellOff,
  Lock,
  Globe
} from 'lucide-react';
import { useWorkspaceStore } from '@/store/workspaceStore';
import ChatPanel from '@/components/workspace/ChatPanel';
import EvidenceBoard from '@/components/workspace/EvidenceBoard';
import DocumentLibrary from '@/components/workspace/DocumentLibrary';
import MemberList from '@/components/workspace/MemberList';

type TabId = 'chat' | 'evidence' | 'documents' | 'members';

interface Tab {
  id: TabId;
  label: string;
  icon: React.ReactNode;
}

const tabs: Tab[] = [
  { id: 'chat', label: 'Chat', icon: <MessageSquare className="w-3.5 h-3.5" /> },
  { id: 'evidence', label: 'Evidence', icon: <Layers className="w-3.5 h-3.5" /> },
  { id: 'documents', label: 'Files', icon: <FileText className="w-3.5 h-3.5" /> },
  { id: 'members', label: 'Team', icon: <Users className="w-3.5 h-3.5" /> },
];

export default function WorkspaceDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = use(params);
  const { workspaces, addMessage, addEvidence, addDocument } = useWorkspaceStore();
  const [activeTab, setActiveTab] = useState<TabId>('chat');
  const [showSettings, setShowSettings] = useState(false);
  const [notifications, setNotifications] = useState(true);

  const workspace = workspaces.find(w => w.id === id);

  if (!workspace) {
    return (
      <div className="min-h-screen bg-[#030303] pt-16 lg:pt-20 flex items-center justify-center">
        <div className="text-center">
          <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-white/[0.02] flex items-center justify-center">
            <FileText className="w-5 h-5 text-white/15" />
          </div>
          <p className="text-sm text-white/30 mb-4">Workspace not found</p>
          <Link 
            href="/workspaces" 
            className="text-xs text-blood-400/60 hover:text-blood-400/80 transition-colors"
          >
            ← Back to workspaces
          </Link>
        </div>
      </div>
    );
  }

  const getPriorityAccent = (priority: string) => {
    switch (priority) {
      case 'critical': return 'bg-blood-500';
      case 'high': return 'bg-blood-600/80';
      case 'medium': return 'bg-blood-700/60';
      default: return 'bg-white/10';
    }
  };

  const formatLastActivity = (date: Date) => {
    const now = new Date();
    const diffMs = now.getTime() - new Date(date).getTime();
    const diffMins = Math.floor(diffMs / 60000);
    const diffHours = Math.floor(diffMs / 3600000);
    const diffDays = Math.floor(diffMs / 86400000);

    if (diffMins < 1) return 'Just now';
    if (diffMins < 60) return `${diffMins}m ago`;
    if (diffHours < 24) return `${diffHours}h ago`;
    return `${diffDays}d ago`;
  };

  const onlineCount = workspace.members.filter(m => m.isOnline).length;

  return (
    <div className="min-h-screen bg-[#030303] pt-16 lg:pt-20 flex flex-col">
      {/* Workspace Header */}
      <div className="border-b border-white/[0.04]">
        <div className="px-4 py-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <Link 
                href="/workspaces" 
                className="p-1.5 rounded hover:bg-white/[0.03] text-white/25 hover:text-white/40 transition-colors"
              >
                <ArrowLeft className="w-4 h-4" />
              </Link>
              
              <div className="flex items-center gap-2">
                <div className={`w-1 h-6 rounded-full ${getPriorityAccent(workspace.priority)}`} />
                <div>
                  <div className="flex items-center gap-2">
                    <h1 className="text-sm font-medium text-white/70">{workspace.name}</h1>
                    {workspace.visibility === 'private' ? (
                      <Lock className="w-3 h-3 text-white/20" />
                    ) : (
                      <Globe className="w-3 h-3 text-white/20" />
                    )}
                  </div>
                  <div className="flex items-center gap-2 text-[10px] text-white/25">
                    <span className="flex items-center gap-1">
                      <Users className="w-2.5 h-2.5" />
                      {onlineCount}/{workspace.members.length}
                    </span>
                    <span>·</span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-2.5 h-2.5" />
                      {formatLastActivity(workspace.lastActivity)}
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex items-center gap-1">
              <button
                onClick={() => setNotifications(!notifications)}
                className={`p-2 rounded transition-colors ${notifications ? 'text-white/30 hover:text-white/50' : 'text-white/15 hover:text-white/25'}`}
                title={notifications ? 'Mute notifications' : 'Enable notifications'}
              >
                {notifications ? <Bell className="w-4 h-4" /> : <BellOff className="w-4 h-4" />}
              </button>
              <button className="p-2 rounded text-white/30 hover:text-white/50 transition-colors">
                <Share2 className="w-4 h-4" />
              </button>
              <button 
                onClick={() => setShowSettings(!showSettings)}
                className={`p-2 rounded transition-colors ${showSettings ? 'bg-white/[0.04] text-white/50' : 'text-white/30 hover:text-white/50'}`}
              >
                <Settings className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Tabs */}
          <div className="flex items-center gap-1 mt-3 -mb-px">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center gap-1.5 px-3 py-2 text-[11px] font-medium border-b-2 transition-colors ${
                  activeTab === tab.id 
                    ? 'border-blood-500/50 text-white/60' 
                    : 'border-transparent text-white/25 hover:text-white/40'
                }`}
              >
                {tab.icon}
                {tab.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="flex-1 flex overflow-hidden">
        <div className="flex-1 relative">
          {activeTab === 'chat' && (
            <ChatPanel
              workspaceId={workspace.id}
              messages={workspace.messages}
              members={workspace.members}
              currentUserId="1"
            />
          )}
          {activeTab === 'evidence' && (
            <EvidenceBoard
              evidence={workspace.evidence}
              onAddEvidence={(evidence) => addEvidence(workspace.id, evidence)}
            />
          )}
          {activeTab === 'documents' && (
            <DocumentLibrary
              documents={workspace.documents}
              onUpload={(doc) => addDocument(workspace.id, doc)}
            />
          )}
          {activeTab === 'members' && (
            <MemberList
              members={workspace.members}
              currentUserId="1"
            />
          )}
        </div>

        {/* Settings Panel */}
        {showSettings && (
          <motion.div
            initial={{ width: 0, opacity: 0 }}
            animate={{ width: 280, opacity: 1 }}
            exit={{ width: 0, opacity: 0 }}
            className="border-l border-white/[0.04] bg-[#050505] overflow-hidden"
          >
            <div className="p-4">
              <h3 className="text-xs font-medium text-white/50 uppercase tracking-widest mb-4">Settings</h3>
              
              <div className="space-y-4">
                <div>
                  <label className="block text-[10px] text-white/30 uppercase tracking-wider mb-2">Description</label>
                  <p className="text-[11px] text-white/40 leading-relaxed">{workspace.description}</p>
                </div>

                <div>
                  <label className="block text-[10px] text-white/30 uppercase tracking-wider mb-2">Tags</label>
                  <div className="flex flex-wrap gap-1">
                    {workspace.tags.map((tag, i) => (
                      <span key={i} className="px-2 py-0.5 bg-white/[0.03] rounded text-[10px] text-white/30">{tag}</span>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="block text-[10px] text-white/30 uppercase tracking-wider mb-2">Priority</label>
                  <div className="flex items-center gap-2">
                    <div className={`w-2 h-2 rounded-full ${getPriorityAccent(workspace.priority)}`} />
                    <span className="text-[11px] text-white/40 capitalize">{workspace.priority}</span>
                  </div>
                </div>

                <div>
                  <label className="block text-[10px] text-white/30 uppercase tracking-wider mb-2">Visibility</label>
                  <div className="flex items-center gap-2">
                    {workspace.visibility === 'private' ? (
                      <Lock className="w-3 h-3 text-white/25" />
                    ) : (
                      <Globe className="w-3 h-3 text-white/25" />
                    )}
                    <span className="text-[11px] text-white/40 capitalize">{workspace.visibility}</span>
                  </div>
                </div>

                <div>
                  <label className="block text-[10px] text-white/30 uppercase tracking-wider mb-2">Created</label>
                  <span className="text-[11px] text-white/40">{new Date(workspace.createdAt).toLocaleDateString()}</span>
                </div>

                <div className="pt-4 border-t border-white/[0.04]">
                  <button className="w-full px-3 py-2 bg-blood-600/20 text-blood-400/70 rounded text-[11px] font-medium hover:bg-blood-600/30 transition-colors">
                    Edit Workspace
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </div>
    </div>
  );
}
