'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import {
  Clock,
  Target,
  Users,
  FileText,
  ExternalLink,
  Trash2,
  MoreVertical,
  Calendar,
  Eye,
  Filter,
} from 'lucide-react';
import { format, formatDistanceToNow, isToday, isYesterday, isThisWeek } from 'date-fns';
import Link from 'next/link';
import { GlitchText } from '@/components/effects/GlitchText';

// ============================================================
// Types
// ============================================================

interface RecentItem {
  id: string;
  type: 'investigation' | 'entity' | 'document' | 'workspace';
  title: string;
  description: string;
  url: string;
  viewedAt: Date;
  viewCount: number;
}

// ============================================================
// Mock Data - Recent investigations/entities viewed
// ============================================================

const mockRecentItems: RecentItem[] = [
  {
    id: 'rec_1',
    type: 'investigation',
    title: 'Trump Criminal Compendium',
    description: '91 felony indictments, 34 convictions, $454M fraud judgment',
    url: '/investigations/trump-criminal-compendium',
    viewedAt: new Date(Date.now() - 1000 * 60 * 5),
    viewCount: 1247,
  },
  {
    id: 'rec_2',
    type: 'entity',
    title: 'Donald Trump',
    description: 'First former president convicted of felonies',
    url: '/entities/individuals/donald-trump',
    viewedAt: new Date(Date.now() - 1000 * 60 * 30),
    viewCount: 2341,
  },
  {
    id: 'rec_3',
    type: 'investigation',
    title: 'January 6 Insurrection',
    description: 'Attack on the Capitol, seditious conspiracy convictions',
    url: '/investigations/january-6-insurrection',
    viewedAt: new Date(Date.now() - 1000 * 60 * 60),
    viewCount: 892,
  },
  {
    id: 'rec_4',
    type: 'entity',
    title: 'Jeffrey Epstein',
    description: 'Sex trafficking network operator',
    url: '/entities/individuals/jeffrey-epstein',
    viewedAt: new Date(Date.now() - 1000 * 60 * 60 * 3),
    viewCount: 1567,
  },
  {
    id: 'rec_5',
    type: 'investigation',
    title: 'Project 2025',
    description: 'Heritage Foundation authoritarian blueprint',
    url: '/investigations/project-2025',
    viewedAt: new Date(Date.now() - 1000 * 60 * 60 * 6),
    viewCount: 756,
  },
  {
    id: 'rec_6',
    type: 'entity',
    title: 'Clarence Thomas',
    description: 'SCOTUS justice with ethics violations',
    url: '/entities/individuals/clarence-thomas',
    viewedAt: new Date(Date.now() - 1000 * 60 * 60 * 24),
    viewCount: 534,
  },
  {
    id: 'rec_7',
    type: 'investigation',
    title: 'Operation Condor',
    description: 'CIA-backed assassination network in South America',
    url: '/investigations/operation-condor',
    viewedAt: new Date(Date.now() - 1000 * 60 * 60 * 48),
    viewCount: 467,
  },
  {
    id: 'rec_8',
    type: 'entity',
    title: 'Henry Kissinger',
    description: 'Architect of war crimes in Cambodia, Chile, Bangladesh',
    url: '/entities/individuals/henry-kissinger',
    viewedAt: new Date(Date.now() - 1000 * 60 * 60 * 72),
    viewCount: 645,
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
// Helper Functions
// ============================================================

const getTimeGroup = (date: Date): string => {
  if (isToday(date)) return 'Today';
  if (isYesterday(date)) return 'Yesterday';
  if (isThisWeek(date)) return 'This Week';
  return 'Earlier';
};

// ============================================================
// Components
// ============================================================

function RecentItemCard({ 
  item, 
  onRemove 
}: { 
  item: RecentItem;
  onRemove: (id: string) => void;
}) {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      className="flex items-center gap-4 p-4 hover:bg-zinc-900/50 transition-colors group"
    >
      <div className={`p-2 ${typeColors[item.type]}`}>
        {typeIcons[item.type]}
      </div>
      
      <div className="flex-1 min-w-0">
        <Link href={item.url} className="block">
          <h3 className="text-white font-medium group-hover:text-blood-400 transition-colors">
            {item.title}
          </h3>
          <p className="text-zinc-500 text-sm truncate">{item.description}</p>
        </Link>
      </div>
      
      <div className="flex items-center gap-4 text-zinc-500 text-sm">
        <span className="flex items-center gap-1">
          <Eye className="w-3 h-3" />
          {item.viewCount}
        </span>
        <span className="flex items-center gap-1 whitespace-nowrap">
          <Clock className="w-3 h-3" />
          {formatDistanceToNow(item.viewedAt, { addSuffix: true })}
        </span>
        
        <div className="relative">
          <button
            onClick={() => setShowMenu(!showMenu)}
            className="p-1 opacity-0 group-hover:opacity-100 text-zinc-500 hover:text-white transition-all"
          >
            <MoreVertical className="w-4 h-4" />
          </button>
          
          {showMenu && (
            <div className="absolute right-0 top-full mt-1 w-32 glass border border-zinc-700 py-1 z-10">
              <Link
                href={item.url}
                className="w-full px-3 py-2 text-left text-sm text-zinc-400 hover:text-white hover:bg-zinc-800 flex items-center gap-2"
              >
                <ExternalLink className="w-3 h-3" />
                Open
              </Link>
              <button
                onClick={() => {
                  onRemove(item.id);
                  setShowMenu(false);
                }}
                className="w-full px-3 py-2 text-left text-sm text-red-400 hover:text-red-300 hover:bg-zinc-800 flex items-center gap-2"
              >
                <Trash2 className="w-3 h-3" />
                Remove
              </button>
            </div>
          )}
        </div>
      </div>
    </motion.div>
  );
}

// ============================================================
// Main Page
// ============================================================

export default function RecentPage() {
  const [recentItems, setRecentItems] = useState(mockRecentItems);
  const [typeFilter, setTypeFilter] = useState<string>('all');

  const handleRemove = (id: string) => {
    setRecentItems((prev) => prev.filter((item) => item.id !== id));
  };

  const handleClearAll = () => {
    setRecentItems([]);
  };

  const filteredItems = recentItems.filter((item) => {
    if (typeFilter !== 'all' && item.type !== typeFilter) return false;
    return true;
  });

  // Group by time period
  const groupedItems = filteredItems.reduce((acc, item) => {
    const group = getTimeGroup(item.viewedAt);
    if (!acc[group]) acc[group] = [];
    acc[group].push(item);
    return acc;
  }, {} as Record<string, RecentItem[]>);

  const groupOrder = ['Today', 'Yesterday', 'This Week', 'Earlier'];

  return (
    <div className="min-h-screen bg-black">
      <div className="max-w-4xl mx-auto px-6 py-12">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-4xl font-black tracking-tighter text-white mb-2">
              <GlitchText text="RECENT" />
            </h1>
            <p className="text-zinc-400">
              Your recently viewed items
            </p>
          </div>

          <button
            onClick={handleClearAll}
            disabled={recentItems.length === 0}
            className="flex items-center gap-2 px-4 py-2 text-red-400 hover:text-red-300 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <Trash2 className="w-4 h-4" />
            Clear History
          </button>
        </div>

        {/* Filters */}
        <div className="flex items-center gap-4 mb-8">
          <span className="text-zinc-400 text-sm">Filter:</span>
          <div className="flex items-center gap-2">
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
                {type === 'all' ? 'All' : `${type}s`}
              </button>
            ))}
          </div>
        </div>

        {/* Recent Items */}
        <div className="space-y-6">
          {groupOrder.map((group) => {
            const items = groupedItems[group];
            if (!items || items.length === 0) return null;

            return (
              <div key={group}>
                <div className="flex items-center gap-4 mb-3">
                  <h2 className="text-sm font-medium text-zinc-500">{group}</h2>
                  <div className="h-px flex-1 bg-zinc-800" />
                </div>

                <div className="glass-card overflow-hidden divide-y divide-zinc-800">
                  {items.map((item) => (
                    <RecentItemCard
                      key={item.id}
                      item={item}
                      onRemove={handleRemove}
                    />
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {filteredItems.length === 0 && (
          <div className="text-center py-16">
            <Clock className="w-16 h-16 text-zinc-700 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-white mb-2">No recent items</h3>
            <p className="text-zinc-400">
              Items you view will appear here
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
