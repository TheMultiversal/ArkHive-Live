'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import {
  Archive,
  Target,
  Users,
  FileText,
  Search,
  MoreVertical,
  Trash2,
  RotateCcw,
  Eye,
  Clock,
  Calendar,
  Filter,
  Download,
  AlertTriangle,
} from 'lucide-react';
import { format, formatDistanceToNow } from 'date-fns';
import Link from 'next/link';
import { GlitchText } from '@/components/effects/GlitchText';

// ============================================================
// Types
// ============================================================

interface ArchivedItem {
  id: string;
  type: 'investigation' | 'entity' | 'document' | 'workspace';
  title: string;
  description: string;
  reason: string;
  archivedAt: Date;
  archivedBy: string;
  originalDate: Date;
  retentionDays: number;
  size?: string;
}

// ============================================================
// Mock Data
// ============================================================

const mockArchivedItems: ArchivedItem[] = [
  {
    id: 'arch_1',
    type: 'investigation',
    title: 'Project Icarus - Concluded',
    description: 'Investigation into aerospace contractor fraud - case closed with prosecution',
    reason: 'Investigation concluded',
    archivedAt: new Date(Date.now() - 1000 * 60 * 60 * 24 * 30),
    archivedBy: 'Alex Chen',
    originalDate: new Date('2022-06-15'),
    retentionDays: 365,
    size: '2.4 GB',
  },
  {
    id: 'arch_2',
    type: 'entity',
    title: 'Defunct Corp Holdings LLC',
    description: 'Shell corporation - company dissolved',
    reason: 'Entity no longer exists',
    archivedAt: new Date(Date.now() - 1000 * 60 * 60 * 24 * 45),
    archivedBy: 'Sarah Miller',
    originalDate: new Date('2021-11-20'),
    retentionDays: 730,
  },
  {
    id: 'arch_3',
    type: 'document',
    title: 'Obsolete Policy Document v2.3',
    description: 'Superseded by new policy documentation',
    reason: 'Document superseded',
    archivedAt: new Date(Date.now() - 1000 * 60 * 60 * 24 * 60),
    archivedBy: 'James Wilson',
    originalDate: new Date('2020-03-10'),
    retentionDays: 180,
    size: '4.2 MB',
  },
  {
    id: 'arch_4',
    type: 'workspace',
    title: 'Legacy Project Alpha',
    description: 'Collaborative workspace from previous investigation cycle',
    reason: 'Project completed',
    archivedAt: new Date(Date.now() - 1000 * 60 * 60 * 24 * 90),
    archivedBy: 'Emily Rodriguez',
    originalDate: new Date('2021-08-25'),
    retentionDays: 365,
    size: '12.8 GB',
  },
  {
    id: 'arch_5',
    type: 'investigation',
    title: 'Operation Clearwater',
    description: 'Environmental violation case - settled out of court',
    reason: 'Case settled',
    archivedAt: new Date(Date.now() - 1000 * 60 * 60 * 24 * 120),
    archivedBy: 'Alex Chen',
    originalDate: new Date('2022-02-14'),
    retentionDays: 730,
    size: '8.6 GB',
  },
  {
    id: 'arch_6',
    type: 'document',
    title: 'Interview Transcript - Redacted',
    description: 'Source interview - information no longer relevant',
    reason: 'Information outdated',
    archivedAt: new Date(Date.now() - 1000 * 60 * 60 * 24 * 150),
    archivedBy: 'Michael Brown',
    originalDate: new Date('2021-05-08'),
    retentionDays: 180,
    size: '1.8 MB',
  },
];

const typeIcons = {
  investigation: <Target className="w-4 h-4" />,
  entity: <Users className="w-4 h-4" />,
  document: <FileText className="w-4 h-4" />,
  workspace: <Users className="w-4 h-4" />,
};

const typeColors = {
  investigation: 'text-blood-500 bg-blood-500/10',
  entity: 'text-amber-500 bg-amber-500/10',
  document: 'text-blue-500 bg-blue-500/10',
  workspace: 'text-purple-500 bg-purple-500/10',
};

// ============================================================
// Components
// ============================================================

function ArchivedItemCard({ 
  item, 
  onRestore,
  onDelete,
}: { 
  item: ArchivedItem;
  onRestore: (id: string) => void;
  onDelete: (id: string) => void;
}) {
  const [showMenu, setShowMenu] = useState(false);

  const daysUntilDeletion = Math.max(
    0,
    item.retentionDays - Math.floor((Date.now() - item.archivedAt.getTime()) / (1000 * 60 * 60 * 24))
  );
  const isExpiringSoon = daysUntilDeletion < 30;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="glass-card p-6 group"
    >
      {/* Header */}
      <div className="flex items-start justify-between mb-4">
        <div className="flex items-center gap-3">
          <div className={`p-2 ${typeColors[item.type]} opacity-60`}>
            {typeIcons[item.type]}
          </div>
          <span className="px-2 py-0.5 text-xs font-medium capitalize bg-zinc-800 text-zinc-400">
            Archived
          </span>
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
                <Eye className="w-3 h-3" />
                View
              </button>
              <button
                onClick={() => {
                  onRestore(item.id);
                  setShowMenu(false);
                }}
                className="w-full px-3 py-2 text-left text-sm text-emerald-400 hover:text-emerald-300 hover:bg-zinc-800 flex items-center gap-2"
              >
                <RotateCcw className="w-3 h-3" />
                Restore
              </button>
              <button className="w-full px-3 py-2 text-left text-sm text-zinc-400 hover:text-white hover:bg-zinc-800 flex items-center gap-2">
                <Download className="w-3 h-3" />
                Export
              </button>
              <button
                onClick={() => {
                  onDelete(item.id);
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
      <h3 className="text-zinc-300 font-semibold mb-2 line-clamp-1">{item.title}</h3>
      <p className="text-zinc-500 text-sm line-clamp-2 mb-3">{item.description}</p>

      {/* Reason */}
      <div className="flex items-center gap-2 text-sm mb-4">
        <span className="text-zinc-500">Reason:</span>
        <span className="text-zinc-400">{item.reason}</span>
      </div>

      {/* Retention Warning */}
      {isExpiringSoon && (
        <div className="flex items-center gap-2 p-2 bg-red-500/10 text-red-400 text-xs mb-4">
          <AlertTriangle className="w-4 h-4" />
          <span>Expires in {daysUntilDeletion} days</span>
        </div>
      )}

      {/* Footer */}
      <div className="flex items-center justify-between pt-4 border-t border-zinc-800 text-xs text-zinc-500">
        <div className="flex items-center gap-1">
          <Clock className="w-3 h-3" />
          {formatDistanceToNow(item.archivedAt, { addSuffix: true })}
        </div>
        {item.size && <span>{item.size}</span>}
      </div>
    </motion.div>
  );
}

// ============================================================
// Main Page
// ============================================================

export default function ArchivesPage() {
  const [archivedItems, setArchivedItems] = useState(mockArchivedItems);
  const [searchQuery, setSearchQuery] = useState('');
  const [typeFilter, setTypeFilter] = useState<string>('all');

  const handleRestore = (id: string) => {
    setArchivedItems((prev) => prev.filter((item) => item.id !== id));
    // In real app, would also restore the item
  };

  const handleDelete = (id: string) => {
    setArchivedItems((prev) => prev.filter((item) => item.id !== id));
  };

  const filteredItems = archivedItems.filter((item) => {
    if (searchQuery) {
      const search = searchQuery.toLowerCase();
      if (!item.title.toLowerCase().includes(search) && !item.description.toLowerCase().includes(search)) {
        return false;
      }
    }
    if (typeFilter !== 'all' && item.type !== typeFilter) return false;
    return true;
  });

  const totalSize = archivedItems
    .filter(i => i.size)
    .reduce((acc, i) => {
      const size = parseFloat(i.size!);
      const unit = i.size!.includes('GB') ? 1024 : 1;
      return acc + size * unit;
    }, 0);

  return (
    <div className="min-h-screen bg-black">
      <div className="max-w-6xl mx-auto px-6 py-12">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-4xl font-black tracking-tighter text-white mb-2">
              <GlitchText text="ARCHIVES" />
            </h1>
            <p className="text-zinc-400">
              {archivedItems.length} archived items · {(totalSize / 1024).toFixed(1)} GB total
            </p>
          </div>

          <div className="flex items-center gap-4">
            <button className="flex items-center gap-2 px-4 py-2 glass text-zinc-400 hover:text-white transition-colors">
              <Download className="w-4 h-4" />
              Export All
            </button>
          </div>
        </div>

        {/* Warning Banner */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="glass-card p-4 border-l-4 border-amber-500 mb-8"
        >
          <div className="flex items-center gap-4">
            <AlertTriangle className="w-6 h-6 text-amber-500" />
            <div className="flex-1">
              <p className="text-white font-medium">Retention Policy Active</p>
              <p className="text-zinc-400 text-sm">
                Archived items are automatically deleted after their retention period expires. 
                Export or restore items before they are permanently removed.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Stats */}
        <div className="grid grid-cols-4 gap-4 mb-8">
          {[
            { label: 'Investigations', value: archivedItems.filter(i => i.type === 'investigation').length, icon: <Target className="w-5 h-5 text-blood-500" /> },
            { label: 'Entities', value: archivedItems.filter(i => i.type === 'entity').length, icon: <Users className="w-5 h-5 text-amber-500" /> },
            { label: 'Documents', value: archivedItems.filter(i => i.type === 'document').length, icon: <FileText className="w-5 h-5 text-blue-500" /> },
            { label: 'Workspaces', value: archivedItems.filter(i => i.type === 'workspace').length, icon: <Users className="w-5 h-5 text-purple-500" /> },
          ].map((stat, i) => (
            <div key={i} className="glass-card p-4 flex items-center gap-4">
              <div className="p-2 bg-zinc-800">
                {stat.icon}
              </div>
              <div>
                <p className="text-white text-xl font-bold">{stat.value}</p>
                <p className="text-zinc-500 text-sm">{stat.label}</p>
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
              placeholder="Search archives..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-4 py-3 glass text-white placeholder:text-zinc-500 focus:outline-none focus:border-blood-500"
            />
          </div>

          <div className="flex items-center gap-2">
            <span className="text-zinc-400 text-sm">Type:</span>
            {['all', 'investigation', 'entity', 'document', 'workspace'].map((type) => (
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
        </div>

        {/* Archives Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.05 }}
            >
              <ArchivedItemCard
                item={item}
                onRestore={handleRestore}
                onDelete={handleDelete}
              />
            </motion.div>
          ))}
        </div>

        {filteredItems.length === 0 && (
          <div className="text-center py-16">
            <Archive className="w-16 h-16 text-zinc-700 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-white mb-2">No archived items</h3>
            <p className="text-zinc-400">
              {searchQuery 
                ? 'Try adjusting your search'
                : 'Items you archive will appear here'
              }
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
