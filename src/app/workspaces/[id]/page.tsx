'use client';

import { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';
import Link from 'next/link';
import { 
 ArrowLeft, 
 Users,
 MessageSquare,
 FileText,
 Shield,
 Clock,
 Eye,
 Lock,
 Globe,
 AlertTriangle
} from 'lucide-react';
import { useWorkspaceStore } from '@/store/workspaceStore';
import { EvidenceBoard, ChatPanel, MemberList, DocumentLibrary } from '@/components/workspace';

type TabId = 'evidence' | 'chat' | 'documents' | 'members';

function WorkspaceDetailContent() {
 const params = useParams();
 const id = params.id as string;
 const { currentWorkspace, setCurrentWorkspace, addEvidence, addDocument } = useWorkspaceStore();
 const [activeTab, setActiveTab] = useState<TabId>('evidence');

 useEffect(() => {
 if (id) setCurrentWorkspace(id);
 }, [id, setCurrentWorkspace]);

 if (!currentWorkspace) {
 return (
 <div className="min-h-screen pt-20 lg:pt-24 pb-16">
 <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center py-20">
 <AlertTriangle className="w-16 h-16 text-zinc-600 mx-auto mb-6" />
 <h1 className="text-3xl font-black text-white uppercase tracking-wider mb-4">Workspace Not Found</h1>
 <p className="text-zinc-400 mb-8">This workspace does not exist or you do not have access.</p>
 <Link href="/workspaces" className="inline-flex items-center gap-2 px-6 py-3 bg-zinc-900 border border-zinc-700 text-zinc-300 hover:text-white hover:border-zinc-500 transition-all">
 <ArrowLeft className="w-4 h-4" /> Back to Workspaces
 </Link>
 </div>
 </div>
 );
 }

 const workspace = currentWorkspace;
 const onlineMembers = workspace.members.filter(m => m.isOnline).length;

 const priorityColors: Record<string, string> = {
 critical: 'text-red-400 bg-red-500/10 border-red-500/20',
 high: 'text-orange-400 bg-orange-500/10 border-orange-500/20',
 medium: 'text-yellow-400 bg-yellow-500/10 border-yellow-500/20',
 low: 'text-zinc-400 bg-zinc-500/10 border-zinc-500/20',
 };

 const visibilityIcon = workspace.visibility === 'public' ? <Globe className="w-3.5 h-3.5" /> : workspace.visibility === 'team' ? <Users className="w-3.5 h-3.5" /> : <Lock className="w-3.5 h-3.5" />;

 const tabs: { id: TabId; label: string; icon: React.ReactNode; count?: number }[] = [
 { id: 'evidence', label: 'Evidence Board', icon: <Shield className="w-4 h-4" />, count: workspace.evidence.length },
 { id: 'chat', label: 'Discussion', icon: <MessageSquare className="w-4 h-4" />, count: workspace.messages.length },
 { id: 'documents', label: 'Documents', icon: <FileText className="w-4 h-4" />, count: workspace.documents.length },
 { id: 'members', label: 'Members', icon: <Users className="w-4 h-4" />, count: workspace.members.length },
 ];

 return (
 <div className="min-h-screen pt-16 lg:pt-20">
 {/* Header */}
 <div className="border-b border-white/[0.04]">
 <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
 <div className="flex items-center gap-3 mb-4">
 <Link href="/workspaces" className="p-1.5 hover:bg-[#0a0a0a] text-white/25 hover:text-white/40 transition-colors">
 <ArrowLeft className="w-4 h-4" />
 </Link>
 <span className={`px-2 py-0.5 text-[10px] uppercase tracking-widest border ${priorityColors[workspace.priority] || priorityColors.medium}`}>
 {workspace.priority}
 </span>
 <span className="flex items-center gap-1 text-[10px] text-white/30">
 {visibilityIcon} {workspace.visibility}
 </span>
 </div>
 <h1 className="text-xl font-black text-white uppercase tracking-wider mb-2">{workspace.name}</h1>
 {workspace.description && (
 <p className="text-sm text-white/40 max-w-3xl">{workspace.description}</p>
 )}
 <div className="flex items-center gap-6 mt-4 text-[11px] text-white/30">
 <span className="flex items-center gap-1.5">
 <Users className="w-3.5 h-3.5" /> {workspace.members.length} members ({onlineMembers} online)
 </span>
 <span className="flex items-center gap-1.5">
 <Eye className="w-3.5 h-3.5" /> {workspace.viewCount} views
 </span>
 <span className="flex items-center gap-1.5">
 <Clock className="w-3.5 h-3.5" /> {new Date(workspace.lastActivity).toLocaleDateString()}
 </span>
 </div>
 {workspace.tags.length > 0 && (
 <div className="flex flex-wrap gap-1.5 mt-3">
 {workspace.tags.map(tag => (
 <span key={tag} className="px-2 py-0.5 bg-[#0a0a0a] border border-white/[0.04] text-[10px] text-white/30">{tag}</span>
 ))}
 </div>
 )}
 </div>
 </div>

 {/* Tabs */}
 <div className="border-b border-white/[0.04]">
 <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
 <div className="flex gap-0">
 {tabs.map(tab => (
 <button
 key={tab.id}
 onClick={() => setActiveTab(tab.id)}
 className={`flex items-center gap-2 px-4 py-3 text-[11px] font-medium uppercase tracking-wider border-b-2 transition-all ${
 activeTab === tab.id
 ? 'border-white/20 text-white/70'
 : 'border-transparent text-white/25 hover:text-white/40'
 }`}
 >
 {tab.icon}
 {tab.label}
 {tab.count !== undefined && (
 <span className="text-[9px] text-white/20">{tab.count}</span>
 )}
 </button>
 ))}
 </div>
 </div>
 </div>

 {/* Tab Content */}
 <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
 {activeTab === 'evidence' && (
 <EvidenceBoard
 evidence={workspace.evidence}
 onAddEvidence={(evidence) => addEvidence(workspace.id, evidence)}
 />
 )}
 {activeTab === 'chat' && (
 <ChatPanel
 workspaceId={workspace.id}
 messages={workspace.messages}
 members={workspace.members}
 />
 )}
 {activeTab === 'documents' && (
 <DocumentLibrary
 documents={workspace.documents}
 onUpload={(doc) => addDocument(workspace.id, doc)}
 />
 )}
 {activeTab === 'members' && (
 <MemberList members={workspace.members} />
 )}
 </div>
 </div>
 );
}

export default function WorkspaceDetailPage() {
 return <WorkspaceDetailContent />;
}
