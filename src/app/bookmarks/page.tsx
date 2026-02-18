'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Bookmark,
  Folder,
  FolderPlus,
  Search,
  Grid,
  List,
  MoreVertical,
  Trash2,
  ExternalLink,
  Target,
  Users,
  FileText,
  Calendar,
  Tag,
  Edit2,
  Star,
  Clock,
} from 'lucide-react';
import { format, formatDistanceToNow } from 'date-fns';
import Link from 'next/link';
import { GlitchText } from '@/components/effects/GlitchText';

// ============================================================
// Types
// ============================================================

interface BookmarkItem {
  id: string;
  type: 'investigation' | 'entity' | 'document' | 'workspace';
  title: string;
  description: string;
  url: string;
  folder?: string;
  tags: string[];
  createdAt: Date;
  starred: boolean;
}

interface BookmarkFolder {
  id: string;
  name: string;
  color: string;
  count: number;
}

// ============================================================
// Mock Data
// ============================================================

const mockFolders: BookmarkFolder[] = [
  { id: 'fol_1', name: 'Priority', color: '#ef4444', count: 5 },
  { id: 'fol_2', name: 'Research', color: '#3b82f6', count: 8 },
  { id: 'fol_3', name: 'Leads', color: '#10b981', count: 3 },
  { id: 'fol_4', name: 'Archive', color: '#6b7280', count: 12 },
];

const mockBookmarks: BookmarkItem[] = [
  {
    id: 'bm_1',
    type: 'investigation',
    title: 'Operation Blackwater',
    description: 'Critical investigation into defense contractor activities',
    url: '/investigations/operation-blackwater',
    folder: 'Priority',
    tags: ['defense', 'contractors', 'government'],
    createdAt: new Date(Date.now() - 1000 * 60 * 60 * 2),
    starred: true,
  },
  {
    id: 'bm_2',
    type: 'entity',
    title: 'Nexus Holdings Ltd',
    description: 'Shell corporation under investigation',
    url: '/entities/corporations/nexus-holdings',
    folder: 'Research',
    tags: ['corporation', 'offshore', 'financial'],
    createdAt: new Date(Date.now() - 1000 * 60 * 60 * 24),
    starred: true,
  },
  {
    id: 'bm_3',
    type: 'document',
    title: 'Financial Report Q4 2023',
    description: 'Leaked internal financial documents',
    url: '/documents/financial-report-q4',
    folder: 'Research',
    tags: ['financial', 'leaked', 'evidence'],
    createdAt: new Date(Date.now() - 1000 * 60 * 60 * 48),
    starred: false,
  },
  {
    id: 'bm_4',
    type: 'investigation',
    title: 'Shadow Protocol',
    description: 'Surveillance program investigation',
    url: '/investigations/shadow-protocol',
    folder: 'Priority',
    tags: ['surveillance', 'privacy', 'nsa'],
    createdAt: new Date(Date.now() - 1000 * 60 * 60 * 72),
    starred: false,
  },
  {
    id: 'bm_5',
    type: 'entity',
    title: 'Senator James Morrison',
    description: 'Public official with corporate ties',
    url: '/entities/individuals/james-morrison',
    folder: 'Leads',
    tags: ['politician', 'lobbying', 'corruption'],
    createdAt: new Date(Date.now() - 1000 * 60 * 60 * 96),
    starred: true,
  },
  {
    id: 'bm_6',
    type: 'workspace',
    title: 'Financial Crimes Unit',
    description: 'Collaborative workspace for financial investigations',
    url: '/workspaces/financial-crimes',
    tags: ['team', 'financial', 'collaboration'],
    createdAt: new Date(Date.now() - 1000 * 60 * 60 * 120),
    starred: false,
  },
];

// ============================================================
// Helper Components
// ============================================================

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

function BookmarkCard({ 
  bookmark, 
  viewMode,
  onDelete,
  onToggleStar,
}: { 
  bookmark: BookmarkItem;
  viewMode: 'grid' | 'list';
  onDelete: (id: string) => void;
  onToggleStar: (id: string) => void;
}) {
  const [showMenu, setShowMenu] = useState(false);

  const content = (
    <>
      <div className="flex items-start justify-between mb-3">
        <div className={`p-2 ${typeColors[bookmark.type]}`}>
          {typeIcons[bookmark.type]}
        </div>
        <div className="flex items-center gap-1">
          <button
            onClick={(e) => {
              e.preventDefault();
              onToggleStar(bookmark.id);
            }}
            className={`p-1 transition-colors ${
              bookmark.starred ? 'text-amber-500' : 'text-zinc-600 hover:text-amber-500'
            }`}
          >
            <Star className={`w-4 h-4 ${bookmark.starred ? 'fill-current' : ''}`} />
          </button>
          <div className="relative">
            <button
              onClick={(e) => {
                e.preventDefault();
                setShowMenu(!showMenu);
              }}
              className="p-1 text-zinc-600 hover:text-white transition-colors"
            >
              <MoreVertical className="w-4 h-4" />
            </button>
            
            {showMenu && (
              <div className="absolute right-0 top-full mt-1 w-32 glass border border-zinc-700 py-1 z-10">
                <button
                  onClick={(e) => {
                    e.preventDefault();
                    setShowMenu(false);
                  }}
                  className="w-full px-3 py-2 text-left text-sm text-zinc-400 hover:text-white hover:bg-zinc-800 flex items-center gap-2"
                >
                  <Edit2 className="w-3 h-3" />
                  Edit
                </button>
                <button
                  onClick={(e) => {
                    e.preventDefault();
                    onDelete(bookmark.id);
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
      </div>
      
      <h3 className="text-white font-semibold mb-1 group-hover:text-blood-400 transition-colors">
        {bookmark.title}
      </h3>
      <p className="text-zinc-500 text-sm line-clamp-2 mb-3">{bookmark.description}</p>
      
      <div className="flex flex-wrap gap-1 mb-3">
        {bookmark.tags.slice(0, 3).map((tag) => (
          <span key={tag} className="px-2 py-0.5 bg-zinc-800 text-zinc-400 text-xs">
            {tag}
          </span>
        ))}
      </div>
      
      <div className="flex items-center justify-between pt-3 border-t border-zinc-800 text-xs text-zinc-500">
        <span className="capitalize">{bookmark.type}</span>
        <span className="flex items-center gap-1">
          <Clock className="w-3 h-3" />
          {formatDistanceToNow(bookmark.createdAt, { addSuffix: true })}
        </span>
      </div>
    </>
  );

  if (viewMode === 'list') {
    return (
      <Link href={bookmark.url}>
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="glass-card p-4 flex items-center gap-4 group hover:border-blood-500/50 transition-colors"
        >
          <div className={`p-2 ${typeColors[bookmark.type]}`}>
            {typeIcons[bookmark.type]}
          </div>
          
          <div className="flex-1 min-w-0">
            <div className="flex items-center gap-2 mb-1">
              <h3 className="text-white font-semibold group-hover:text-blood-400 transition-colors">
                {bookmark.title}
              </h3>
              {bookmark.starred && <Star className="w-4 h-4 text-amber-500 fill-current" />}
            </div>
            <p className="text-zinc-500 text-sm truncate">{bookmark.description}</p>
          </div>
          
          <div className="flex items-center gap-2">
            {bookmark.folder && (
              <span className="px-2 py-1 bg-zinc-800 text-zinc-400 text-xs">
                {bookmark.folder}
              </span>
            )}
            <button
              onClick={(e) => {
                e.preventDefault();
                onToggleStar(bookmark.id);
              }}
              className={`p-1 transition-colors ${
                bookmark.starred ? 'text-amber-500' : 'text-zinc-600 hover:text-amber-500'
              }`}
            >
              <Star className={`w-4 h-4 ${bookmark.starred ? 'fill-current' : ''}`} />
            </button>
            <button
              onClick={(e) => {
                e.preventDefault();
                onDelete(bookmark.id);
              }}
              className="p-1 text-zinc-600 hover:text-red-400 transition-colors"
            >
              <Trash2 className="w-4 h-4" />
            </button>
          </div>
        </motion.div>
      </Link>
    );
  }

  return (
    <Link href={bookmark.url}>
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        className="glass-card p-5 group hover:border-blood-500/50 transition-colors h-full"
      >
        {content}
      </motion.div>
    </Link>
  );
}

// ============================================================
// Main Page
// ============================================================

export default function BookmarksPage() {
  const [bookmarks, setBookmarks] = useState(mockBookmarks);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedFolder, setSelectedFolder] = useState<string | null>(null);
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');

  const handleDelete = (id: string) => {
    setBookmarks((prev) => prev.filter((b) => b.id !== id));
  };

  const handleToggleStar = (id: string) => {
    setBookmarks((prev) =>
      prev.map((b) => (b.id === id ? { ...b, starred: !b.starred } : b))
    );
  };

  const filteredBookmarks = bookmarks.filter((b) => {
    if (searchQuery) {
      const search = searchQuery.toLowerCase();
      if (!b.title.toLowerCase().includes(search) && !b.description.toLowerCase().includes(search)) {
        return false;
      }
    }
    if (selectedFolder && b.folder !== selectedFolder) {
      return false;
    }
    return true;
  });

  const starredCount = bookmarks.filter((b) => b.starred).length;

  return (
    <div className="min-h-screen bg-black">
      <div className="max-w-7xl mx-auto px-6 py-12">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-4xl font-black tracking-tighter text-white mb-2">
              <GlitchText text="BOOKMARKS" />
            </h1>
            <p className="text-zinc-400">
              {bookmarks.length} saved items · {starredCount} starred
            </p>
          </div>

          <button className="flex items-center gap-2 px-6 py-3 bg-blood-600 text-white hover:bg-blood-500 transition-colors">
            <FolderPlus className="w-5 h-5" />
            New Folder
          </button>
        </div>

        <div className="flex gap-8">
          {/* Sidebar */}
          <div className="w-64 flex-shrink-0">
            <div className="glass-card p-4">
              <h3 className="text-sm font-medium text-zinc-400 mb-3">Folders</h3>
              
              <div className="space-y-1">
                <button
                  onClick={() => setSelectedFolder(null)}
                  className={`w-full flex items-center gap-3 px-3 py-2 text-left transition-colors ${
                    selectedFolder === null
                      ? 'bg-blood-600/20 text-blood-400'
                      : 'text-zinc-400 hover:text-white hover:bg-zinc-800'
                  }`}
                >
                  <Bookmark className="w-4 h-4" />
                  <span className="flex-1">All Bookmarks</span>
                  <span className="text-xs">{bookmarks.length}</span>
                </button>
                
                <button
                  onClick={() => setSelectedFolder('starred')}
                  className={`w-full flex items-center gap-3 px-3 py-2 text-left transition-colors ${
                    selectedFolder === 'starred'
                      ? 'bg-blood-600/20 text-blood-400'
                      : 'text-zinc-400 hover:text-white hover:bg-zinc-800'
                  }`}
                >
                  <Star className="w-4 h-4" />
                  <span className="flex-1">Starred</span>
                  <span className="text-xs">{starredCount}</span>
                </button>

                <div className="h-px bg-zinc-800 my-2" />
                
                {mockFolders.map((folder) => (
                  <button
                    key={folder.id}
                    onClick={() => setSelectedFolder(folder.name)}
                    className={`w-full flex items-center gap-3 px-3 py-2 text-left transition-colors ${
                      selectedFolder === folder.name
                        ? 'bg-blood-600/20 text-blood-400'
                        : 'text-zinc-400 hover:text-white hover:bg-zinc-800'
                    }`}
                  >
                    <div
                      className="w-3 h-3"
                      style={{ backgroundColor: folder.color }}
                    />
                    <span className="flex-1">{folder.name}</span>
                    <span className="text-xs">{folder.count}</span>
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="flex-1">
            {/* Search & View Toggle */}
            <div className="flex items-center gap-4 mb-6">
              <div className="flex-1 relative">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-zinc-500" />
                <input
                  type="text"
                  placeholder="Search bookmarks..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-12 pr-4 py-3 glass text-white placeholder:text-zinc-500 focus:outline-none focus:border-blood-500"
                />
              </div>
              
              <div className="flex items-center glass p-1">
                <button
                  onClick={() => setViewMode('grid')}
                  className={`p-2 ${viewMode === 'grid' ? 'bg-blood-600 text-white' : 'text-zinc-500'}`}
                >
                  <Grid className="w-4 h-4" />
                </button>
                <button
                  onClick={() => setViewMode('list')}
                  className={`p-2 ${viewMode === 'list' ? 'bg-blood-600 text-white' : 'text-zinc-500'}`}
                >
                  <List className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Bookmarks */}
            <div className={viewMode === 'grid' 
              ? 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4' 
              : 'space-y-3'
            }>
              <AnimatePresence>
                {filteredBookmarks.map((bookmark, index) => (
                  <motion.div
                    key={bookmark.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ delay: index * 0.05 }}
                  >
                    <BookmarkCard
                      bookmark={bookmark}
                      viewMode={viewMode}
                      onDelete={handleDelete}
                      onToggleStar={handleToggleStar}
                    />
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>

            {filteredBookmarks.length === 0 && (
              <div className="text-center py-16">
                <Bookmark className="w-16 h-16 text-zinc-700 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-white mb-2">No bookmarks found</h3>
                <p className="text-zinc-400">
                  {searchQuery 
                    ? 'Try adjusting your search'
                    : 'Start bookmarking items to see them here'
                  }
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
