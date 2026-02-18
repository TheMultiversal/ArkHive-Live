'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import {
  FileEdit,
  Target,
  FileText,
  Search,
  Plus,
  MoreVertical,
  Trash2,
  Edit2,
  Eye,
  Clock,
  Calendar,
  Tag,
  Send,
} from 'lucide-react';
import { format, formatDistanceToNow } from 'date-fns';
import Link from 'next/link';
import { GlitchText } from '@/components/effects/GlitchText';

// ============================================================
// Types
// ============================================================

interface Draft {
  id: string;
  type: 'investigation' | 'document' | 'report';
  title: string;
  description: string;
  content?: string;
  tags: string[];
  createdAt: Date;
  updatedAt: Date;
  autoSaved: boolean;
  wordCount: number;
  status: 'draft' | 'review' | 'pending';
}

// ============================================================
// Mock Data
// ============================================================

const mockDrafts: Draft[] = [
  {
    id: 'draft_1',
    type: 'investigation',
    title: 'Corporate Espionage - Tech Sector',
    description: 'Investigation into alleged intellectual property theft between competing tech firms',
    tags: ['corporate', 'tech', 'ip-theft'],
    createdAt: new Date(Date.now() - 1000 * 60 * 60 * 2),
    updatedAt: new Date(Date.now() - 1000 * 60 * 15),
    autoSaved: true,
    wordCount: 1247,
    status: 'draft',
  },
  {
    id: 'draft_2',
    type: 'report',
    title: 'Q4 2023 Financial Analysis Report',
    description: 'Comprehensive analysis of suspicious financial activities across monitored entities',
    tags: ['financial', 'analysis', 'quarterly'],
    createdAt: new Date(Date.now() - 1000 * 60 * 60 * 24),
    updatedAt: new Date(Date.now() - 1000 * 60 * 60 * 4),
    autoSaved: true,
    wordCount: 3456,
    status: 'review',
  },
  {
    id: 'draft_3',
    type: 'document',
    title: 'Whistleblower Interview Notes',
    description: 'Preliminary notes from confidential source meeting',
    tags: ['whistleblower', 'interview', 'confidential'],
    createdAt: new Date(Date.now() - 1000 * 60 * 60 * 48),
    updatedAt: new Date(Date.now() - 1000 * 60 * 60 * 24),
    autoSaved: false,
    wordCount: 892,
    status: 'draft',
  },
  {
    id: 'draft_4',
    type: 'investigation',
    title: 'Money Laundering Network Analysis',
    description: 'Mapping financial flows through shell companies',
    tags: ['money-laundering', 'network', 'offshore'],
    createdAt: new Date(Date.now() - 1000 * 60 * 60 * 72),
    updatedAt: new Date(Date.now() - 1000 * 60 * 60 * 36),
    autoSaved: true,
    wordCount: 2134,
    status: 'pending',
  },
  {
    id: 'draft_5',
    type: 'report',
    title: 'Surveillance Program Exposé',
    description: 'Draft article exposing government surveillance overreach',
    tags: ['surveillance', 'privacy', 'government'],
    createdAt: new Date(Date.now() - 1000 * 60 * 60 * 96),
    updatedAt: new Date(Date.now() - 1000 * 60 * 60 * 48),
    autoSaved: true,
    wordCount: 5678,
    status: 'review',
  },
];

const typeIcons = {
  investigation: <Target className="w-4 h-4" />,
  document: <FileText className="w-4 h-4" />,
  report: <FileEdit className="w-4 h-4" />,
};

const typeColors = {
  investigation: 'text-blood-500 bg-blood-500/10',
  document: 'text-blue-500 bg-blue-500/10',
  report: 'text-purple-500 bg-purple-500/10',
};

const statusColors = {
  draft: 'text-zinc-400 bg-zinc-800',
  review: 'text-amber-500 bg-amber-500/10',
  pending: 'text-emerald-500 bg-emerald-500/10',
};

// ============================================================
// Components
// ============================================================

function DraftCard({ 
  draft, 
  onDelete 
}: { 
  draft: Draft;
  onDelete: (id: string) => void;
}) {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="glass-card p-6 group"
    >
      {/* Header */}
      <div className="flex items-start justify-between mb-4">
        <div className="flex items-center gap-3">
          <div className={`p-2 ${typeColors[draft.type]}`}>
            {typeIcons[draft.type]}
          </div>
          <div>
            <span className={`px-2 py-0.5 text-xs font-medium capitalize ${statusColors[draft.status]}`}>
              {draft.status}
            </span>
          </div>
        </div>

        <div className="relative">
          <button
            onClick={() => setShowMenu(!showMenu)}
            className="p-1 text-zinc-600 hover:text-white opacity-0 group-hover:opacity-100 transition-all"
          >
            <MoreVertical className="w-4 h-4" />
          </button>
          
          {showMenu && (
            <div className="absolute right-0 top-full mt-1 w-36 glass border border-zinc-700 py-1 z-10">
              <button className="w-full px-3 py-2 text-left text-sm text-zinc-400 hover:text-white hover:bg-zinc-800 flex items-center gap-2">
                <Edit2 className="w-3 h-3" />
                Edit
              </button>
              <button className="w-full px-3 py-2 text-left text-sm text-zinc-400 hover:text-white hover:bg-zinc-800 flex items-center gap-2">
                <Eye className="w-3 h-3" />
                Preview
              </button>
              <button className="w-full px-3 py-2 text-left text-sm text-zinc-400 hover:text-white hover:bg-zinc-800 flex items-center gap-2">
                <Send className="w-3 h-3" />
                Publish
              </button>
              <button
                onClick={() => {
                  onDelete(draft.id);
                  setShowMenu(false);
                }}
                className="w-full px-3 py-2 text-left text-sm text-red-400 hover:text-red-300 hover:bg-zinc-800 flex items-center gap-2"
              >
                <Trash2 className="w-3 h-3" />
                Delete
              </button>
            </div>
          )}
        </div>
      </div>

      {/* Content */}
      <h3 className="text-white font-semibold mb-2 line-clamp-1">{draft.title}</h3>
      <p className="text-zinc-500 text-sm line-clamp-2 mb-4">{draft.description}</p>

      {/* Tags */}
      <div className="flex flex-wrap gap-1 mb-4">
        {draft.tags.slice(0, 3).map((tag) => (
          <span key={tag} className="px-2 py-0.5 bg-zinc-800 text-zinc-400 text-xs">
            {tag}
          </span>
        ))}
      </div>

      {/* Footer */}
      <div className="flex items-center justify-between pt-4 border-t border-zinc-800 text-xs text-zinc-500">
        <div className="flex items-center gap-4">
          <span>{draft.wordCount.toLocaleString()} words</span>
          {draft.autoSaved && (
            <span className="text-emerald-500">Auto-saved</span>
          )}
        </div>
        <span className="flex items-center gap-1">
          <Clock className="w-3 h-3" />
          {formatDistanceToNow(draft.updatedAt, { addSuffix: true })}
        </span>
      </div>
    </motion.div>
  );
}

// ============================================================
// Main Page
// ============================================================

export default function DraftsPage() {
  const [drafts, setDrafts] = useState(mockDrafts);
  const [searchQuery, setSearchQuery] = useState('');
  const [typeFilter, setTypeFilter] = useState<string>('all');
  const [statusFilter, setStatusFilter] = useState<string>('all');

  const handleDelete = (id: string) => {
    setDrafts((prev) => prev.filter((d) => d.id !== id));
  };

  const filteredDrafts = drafts.filter((draft) => {
    if (searchQuery) {
      const search = searchQuery.toLowerCase();
      if (!draft.title.toLowerCase().includes(search) && !draft.description.toLowerCase().includes(search)) {
        return false;
      }
    }
    if (typeFilter !== 'all' && draft.type !== typeFilter) return false;
    if (statusFilter !== 'all' && draft.status !== statusFilter) return false;
    return true;
  });

  const totalWords = drafts.reduce((acc, d) => acc + d.wordCount, 0);

  return (
    <div className="min-h-screen bg-black">
      <div className="max-w-6xl mx-auto px-6 py-12">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-4xl font-black tracking-tighter text-white mb-2">
              <GlitchText text="DRAFTS" />
            </h1>
            <p className="text-zinc-400">
              {drafts.length} drafts · {totalWords.toLocaleString()} total words
            </p>
          </div>

          <button className="flex items-center gap-2 px-6 py-3 bg-blood-600 text-white hover:bg-blood-500 transition-colors">
            <Plus className="w-5 h-5" />
            New Draft
          </button>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-4 gap-4 mb-8">
          {[
            { label: 'Total Drafts', value: drafts.length, color: 'text-white' },
            { label: 'In Review', value: drafts.filter(d => d.status === 'review').length, color: 'text-amber-500' },
            { label: 'Pending', value: drafts.filter(d => d.status === 'pending').length, color: 'text-emerald-500' },
            { label: 'Auto-saved', value: drafts.filter(d => d.autoSaved).length, color: 'text-blue-500' },
          ].map((stat, i) => (
            <div key={i} className="glass-card p-4 text-center">
              <p className={`text-2xl font-bold ${stat.color}`}>{stat.value}</p>
              <p className="text-zinc-500 text-sm">{stat.label}</p>
            </div>
          ))}
        </div>

        {/* Filters */}
        <div className="flex items-center gap-4 mb-8">
          <div className="flex-1 relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-zinc-500" />
            <input
              type="text"
              placeholder="Search drafts..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-4 py-3 glass text-white placeholder:text-zinc-500 focus:outline-none focus:border-blood-500"
            />
          </div>

          <div className="flex items-center gap-2">
            <span className="text-zinc-400 text-sm">Type:</span>
            {['all', 'investigation', 'document', 'report'].map((type) => (
              <button
                key={type}
                onClick={() => setTypeFilter(type)}
                className={`px-3 py-1 text-xs font-medium capitalize transition-colors ${
                  typeFilter === type
                    ? 'bg-blood-600 text-white'
                    : 'bg-zinc-800 text-zinc-400 hover:text-white'
                }`}
              >
                {type === 'all' ? 'All' : type}
              </button>
            ))}
          </div>

          <div className="flex items-center gap-2">
            <span className="text-zinc-400 text-sm">Status:</span>
            {['all', 'draft', 'review', 'pending'].map((status) => (
              <button
                key={status}
                onClick={() => setStatusFilter(status)}
                className={`px-3 py-1 text-xs font-medium capitalize transition-colors ${
                  statusFilter === status
                    ? 'bg-blood-600 text-white'
                    : 'bg-zinc-800 text-zinc-400 hover:text-white'
                }`}
              >
                {status}
              </button>
            ))}
          </div>
        </div>

        {/* Drafts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredDrafts.map((draft, index) => (
            <motion.div
              key={draft.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.05 }}
            >
              <DraftCard draft={draft} onDelete={handleDelete} />
            </motion.div>
          ))}
        </div>

        {filteredDrafts.length === 0 && (
          <div className="text-center py-16">
            <FileEdit className="w-16 h-16 text-zinc-700 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-white mb-2">No drafts found</h3>
            <p className="text-zinc-400 mb-6">
              {searchQuery 
                ? 'Try adjusting your search'
                : 'Start writing to create your first draft'
              }
            </p>
            <button className="flex items-center gap-2 px-6 py-3 bg-blood-600 text-white hover:bg-blood-500 transition-colors mx-auto">
              <Plus className="w-5 h-5" />
              Create Draft
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
