'use client';

import { useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { 
  Plus, 
  Search, 
  Filter,
  Grid3X3,
  List,
  Users,
  Clock,
  Archive,
  ChevronDown
} from 'lucide-react';
import { useWorkspaceStore } from '@/store/workspaceStore';
import WorkspaceCard from '@/components/workspace/WorkspaceCard';

type FilterStatus = 'all' | 'active' | 'archived';
type SortOption = 'recent' | 'name' | 'members';

export default function WorkspacesPage() {
  const { workspaces } = useWorkspaceStore();
  const [searchQuery, setSearchQuery] = useState('');
  const [filterStatus, setFilterStatus] = useState<FilterStatus>('all');
  const [sortBy, setSortBy] = useState<SortOption>('recent');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [showFilters, setShowFilters] = useState(false);

  const filteredWorkspaces = workspaces
    .filter(ws => {
      const matchesSearch = ws.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                            ws.description.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesStatus = filterStatus === 'all' || ws.status === filterStatus;
      return matchesSearch && matchesStatus;
    })
    .sort((a, b) => {
      switch (sortBy) {
        case 'recent': return new Date(b.lastActivity).getTime() - new Date(a.lastActivity).getTime();
        case 'name': return a.name.localeCompare(b.name);
        case 'members': return b.members.length - a.members.length;
        default: return 0;
      }
    });

  const stats = {
    total: workspaces.length,
    active: workspaces.filter(w => w.status === 'active').length,
    members: workspaces.reduce((sum, w) => sum + w.members.length, 0),
  };

  return (
    <div className="min-h-screen bg-[#030303] pt-16 lg:pt-20">
      {/* Page Header */}
      <div className="border-b border-white/[0.04]">
        <div className="max-w-7xl mx-auto px-6 py-8">
          <div className="flex items-start justify-between mb-6">
            <div>
              <h1 className="text-lg font-medium text-white/80 tracking-tight mb-1">Workspaces</h1>
              <p className="text-xs text-white/30">Collaborative investigation environments</p>
            </div>
            <Link
              href="/workspaces/create"
              className="flex items-center gap-2 px-3 py-2 bg-blood-600/20 text-blood-400/80 rounded text-[11px] font-medium hover:bg-blood-600/30 transition-colors"
            >
              <Plus className="w-3.5 h-3.5" />
              New Workspace
            </Link>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-4 mb-6">
            <div className="p-3 bg-white/[0.01] border border-white/[0.04] rounded-lg">
              <div className="text-lg font-medium text-white/60 mb-0.5">{stats.total}</div>
              <div className="text-[10px] text-white/25 uppercase tracking-wider">Total</div>
            </div>
            <div className="p-3 bg-white/[0.01] border border-white/[0.04] rounded-lg">
              <div className="text-lg font-medium text-blood-400/70 mb-0.5">{stats.active}</div>
              <div className="text-[10px] text-white/25 uppercase tracking-wider">Active</div>
            </div>
            <div className="p-3 bg-white/[0.01] border border-white/[0.04] rounded-lg">
              <div className="text-lg font-medium text-white/60 mb-0.5">{stats.members}</div>
              <div className="text-[10px] text-white/25 uppercase tracking-wider">Investigators</div>
            </div>
          </div>

          {/* Search and Filters */}
          <div className="flex gap-3">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-white/20" />
              <input
                type="text"
                placeholder="Search workspaces..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-9 pr-4 py-2 bg-white/[0.02] border border-white/[0.06] rounded-lg text-xs text-white/70 placeholder-white/25 focus:outline-none focus:border-white/[0.1] transition-colors"
              />
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={() => setShowFilters(!showFilters)}
                className={`flex items-center gap-1.5 px-3 py-2 border rounded-lg text-xs transition-colors ${
                  showFilters ? 'bg-white/[0.04] border-white/[0.08] text-white/50' : 'border-white/[0.06] text-white/30 hover:text-white/50'
                }`}
              >
                <Filter className="w-3.5 h-3.5" />
                Filters
                <ChevronDown className={`w-3 h-3 transition-transform ${showFilters ? 'rotate-180' : ''}`} />
              </button>

              <div className="flex items-center border border-white/[0.06] rounded-lg overflow-hidden">
                <button
                  onClick={() => setViewMode('grid')}
                  className={`p-2 transition-colors ${viewMode === 'grid' ? 'bg-white/[0.04] text-white/50' : 'text-white/20 hover:text-white/40'}`}
                >
                  <Grid3X3 className="w-3.5 h-3.5" />
                </button>
                <button
                  onClick={() => setViewMode('list')}
                  className={`p-2 transition-colors ${viewMode === 'list' ? 'bg-white/[0.04] text-white/50' : 'text-white/20 hover:text-white/40'}`}
                >
                  <List className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          </div>

          {/* Filter Options */}
          {showFilters && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              className="mt-4 flex items-center gap-4 pt-4 border-t border-white/[0.04]"
            >
              <div className="flex items-center gap-2">
                <span className="text-[10px] text-white/25 uppercase tracking-wider">Status</span>
                <div className="flex gap-1">
                  {(['all', 'active', 'archived'] as const).map((status) => (
                    <button
                      key={status}
                      onClick={() => setFilterStatus(status)}
                      className={`px-2 py-1 rounded text-[10px] transition-colors ${
                        filterStatus === status 
                          ? 'bg-white/[0.06] text-white/50' 
                          : 'text-white/25 hover:text-white/40'
                      }`}
                    >
                      {status.charAt(0).toUpperCase() + status.slice(1)}
                    </button>
                  ))}
                </div>
              </div>

              <div className="w-px h-4 bg-white/[0.06]" />

              <div className="flex items-center gap-2">
                <span className="text-[10px] text-white/25 uppercase tracking-wider">Sort</span>
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value as SortOption)}
                  className="px-2 py-1 bg-transparent border border-white/[0.06] rounded text-[10px] text-white/40 focus:outline-none cursor-pointer"
                >
                  <option value="recent" className="bg-[#0a0a0a]">Recent Activity</option>
                  <option value="name" className="bg-[#0a0a0a]">Name</option>
                  <option value="members" className="bg-[#0a0a0a]">Members</option>
                </select>
              </div>
            </motion.div>
          )}
        </div>
      </div>

      {/* Workspaces Grid */}
      <div className="max-w-7xl mx-auto px-6 py-8">
        {filteredWorkspaces.length === 0 ? (
          <div className="text-center py-16">
            <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-white/[0.02] flex items-center justify-center">
              <Users className="w-5 h-5 text-white/15" />
            </div>
            <p className="text-sm text-white/30 mb-2">No workspaces found</p>
            <p className="text-xs text-white/20 mb-4">Create a new workspace to start investigating</p>
            <Link
              href="/workspaces/create"
              className="inline-flex items-center gap-2 px-4 py-2 bg-blood-600/20 text-blood-400/70 rounded text-xs font-medium hover:bg-blood-600/30 transition-colors"
            >
              <Plus className="w-3.5 h-3.5" />
              Create Workspace
            </Link>
          </div>
        ) : (
          <div className={viewMode === 'grid' 
            ? 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4' 
            : 'space-y-3'
          }>
            {filteredWorkspaces.map((workspace, index) => (
              <motion.div
                key={workspace.id}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.03 }}
              >
                <WorkspaceCard workspace={workspace} viewMode={viewMode} />
              </motion.div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
