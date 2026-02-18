'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import {
  Tag,
  Plus,
  Search,
  Edit2,
  Trash2,
  Filter,
  TrendingUp,
  Hash,
  FileText,
  Users,
  Target,
  MoreVertical,
} from 'lucide-react';
import { GlitchText } from '@/components/effects/GlitchText';

// ============================================================
// Types
// ============================================================

interface TagData {
  id: string;
  name: string;
  slug: string;
  color: string;
  description: string;
  category: 'investigation' | 'entity' | 'document' | 'general';
  usageCount: number;
  investigations: number;
  entities: number;
  documents: number;
  createdAt: Date;
  updatedAt: Date;
  trending: boolean;
}

// ============================================================
// Mock Data
// ============================================================

const mockTags: TagData[] = [
  {
    id: 'tag_1',
    name: 'Government',
    slug: 'government',
    color: '#3b82f6',
    description: 'Items related to government agencies and officials',
    category: 'general',
    usageCount: 456,
    investigations: 23,
    entities: 89,
    documents: 344,
    createdAt: new Date('2023-06-15'),
    updatedAt: new Date('2024-01-10'),
    trending: true,
  },
  {
    id: 'tag_2',
    name: 'Financial Crime',
    slug: 'financial-crime',
    color: '#f59e0b',
    description: 'Money laundering, fraud, and financial misconduct',
    category: 'investigation',
    usageCount: 312,
    investigations: 45,
    entities: 67,
    documents: 200,
    createdAt: new Date('2023-07-20'),
    updatedAt: new Date('2024-01-08'),
    trending: true,
  },
  {
    id: 'tag_3',
    name: 'Surveillance',
    slug: 'surveillance',
    color: '#ef4444',
    description: 'Mass surveillance and privacy violations',
    category: 'investigation',
    usageCount: 289,
    investigations: 18,
    entities: 34,
    documents: 237,
    createdAt: new Date('2023-05-10'),
    updatedAt: new Date('2024-01-05'),
    trending: false,
  },
  {
    id: 'tag_4',
    name: 'Corporate',
    slug: 'corporate',
    color: '#8b5cf6',
    description: 'Corporate entities and business operations',
    category: 'entity',
    usageCount: 523,
    investigations: 56,
    entities: 234,
    documents: 233,
    createdAt: new Date('2023-04-01'),
    updatedAt: new Date('2024-01-12'),
    trending: true,
  },
  {
    id: 'tag_5',
    name: 'Leaked Document',
    slug: 'leaked-document',
    color: '#ec4899',
    description: 'Classified or confidential documents that were leaked',
    category: 'document',
    usageCount: 178,
    investigations: 12,
    entities: 0,
    documents: 166,
    createdAt: new Date('2023-08-15'),
    updatedAt: new Date('2024-01-03'),
    trending: false,
  },
  {
    id: 'tag_6',
    name: 'Whistleblower',
    slug: 'whistleblower',
    color: '#10b981',
    description: 'Cases involving insider information disclosure',
    category: 'general',
    usageCount: 145,
    investigations: 34,
    entities: 45,
    documents: 66,
    createdAt: new Date('2023-09-20'),
    updatedAt: new Date('2024-01-01'),
    trending: true,
  },
  {
    id: 'tag_7',
    name: 'Defense Contractor',
    slug: 'defense-contractor',
    color: '#6366f1',
    description: 'Military industrial complex entities',
    category: 'entity',
    usageCount: 234,
    investigations: 19,
    entities: 78,
    documents: 137,
    createdAt: new Date('2023-03-10'),
    updatedAt: new Date('2023-12-28'),
    trending: false,
  },
  {
    id: 'tag_8',
    name: 'Classified',
    slug: 'classified',
    color: '#dc2626',
    description: 'Highly sensitive classified materials',
    category: 'document',
    usageCount: 89,
    investigations: 8,
    entities: 0,
    documents: 81,
    createdAt: new Date('2023-10-05'),
    updatedAt: new Date('2023-12-15'),
    trending: false,
  },
];

const categoryColors = {
  investigation: 'bg-blood-600 text-white',
  entity: 'bg-purple-600 text-white',
  document: 'bg-blue-600 text-white',
  general: 'bg-zinc-600 text-white',
};

// ============================================================
// Components
// ============================================================

function TagCard({ tag }: { tag: TagData }) {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="glass-card p-6 relative group"
    >
      {/* Header */}
      <div className="flex items-start justify-between mb-4">
        <div className="flex items-center gap-3">
          <div
            className="w-4 h-4"
            style={{ backgroundColor: tag.color }}
          />
          <h3 className="text-lg font-semibold text-white">{tag.name}</h3>
          {tag.trending && (
            <span className="flex items-center gap-1 px-2 py-0.5 bg-emerald-500/20 text-emerald-400 text-xs">
              <TrendingUp className="w-3 h-3" />
              Trending
            </span>
          )}
        </div>

        <div className="relative">
          <button
            onClick={() => setShowMenu(!showMenu)}
            className="p-1 text-zinc-500 hover:text-white opacity-0 group-hover:opacity-100 transition-opacity"
          >
            <MoreVertical className="w-4 h-4" />
          </button>
          
          {showMenu && (
            <div className="absolute right-0 top-full mt-1 w-32 glass border border-zinc-700 py-1 z-10">
              <button className="w-full px-3 py-2 text-left text-sm text-zinc-400 hover:text-white hover:bg-zinc-800 flex items-center gap-2">
                <Edit2 className="w-3 h-3" />
                Edit
              </button>
              <button className="w-full px-3 py-2 text-left text-sm text-red-400 hover:text-red-300 hover:bg-zinc-800 flex items-center gap-2">
                <Trash2 className="w-3 h-3" />
                Delete
              </button>
            </div>
          )}
        </div>
      </div>

      {/* Description */}
      <p className="text-zinc-400 text-sm mb-4">{tag.description}</p>

      {/* Category Badge */}
      <span className={`inline-block px-2 py-1 text-xs font-medium capitalize ${categoryColors[tag.category]} mb-4`}>
        {tag.category}
      </span>

      {/* Stats */}
      <div className="grid grid-cols-3 gap-4 pt-4 border-t border-zinc-800">
        <div className="text-center">
          <div className="flex items-center justify-center gap-1 text-blood-400 mb-1">
            <Target className="w-4 h-4" />
          </div>
          <p className="text-white font-semibold">{tag.investigations}</p>
          <p className="text-zinc-500 text-xs">Investigations</p>
        </div>
        <div className="text-center">
          <div className="flex items-center justify-center gap-1 text-amber-400 mb-1">
            <Users className="w-4 h-4" />
          </div>
          <p className="text-white font-semibold">{tag.entities}</p>
          <p className="text-zinc-500 text-xs">Entities</p>
        </div>
        <div className="text-center">
          <div className="flex items-center justify-center gap-1 text-blue-400 mb-1">
            <FileText className="w-4 h-4" />
          </div>
          <p className="text-white font-semibold">{tag.documents}</p>
          <p className="text-zinc-500 text-xs">Documents</p>
        </div>
      </div>

      {/* Usage Bar */}
      <div className="mt-4">
        <div className="flex justify-between text-xs text-zinc-500 mb-1">
          <span>Total Usage</span>
          <span>{tag.usageCount}</span>
        </div>
        <div className="h-1 bg-zinc-800 overflow-hidden">
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: `${Math.min((tag.usageCount / 600) * 100, 100)}%` }}
            transition={{ duration: 0.5 }}
            className="h-full"
            style={{ backgroundColor: tag.color }}
          />
        </div>
      </div>
    </motion.div>
  );
}

function CreateTagModal({ 
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
        <h2 className="text-xl font-bold text-white mb-6">Create New Tag</h2>
        
        <div className="space-y-4">
          <div>
            <label className="block text-zinc-400 text-sm mb-2">Tag Name</label>
            <input
              type="text"
              placeholder="Enter tag name..."
              className="w-full px-4 py-2 bg-zinc-900 border border-zinc-700 text-white placeholder:text-zinc-500 focus:outline-none focus:border-blood-500"
            />
          </div>

          <div>
            <label className="block text-zinc-400 text-sm mb-2">Description</label>
            <textarea
              placeholder="Describe what this tag is for..."
              rows={3}
              className="w-full px-4 py-2 bg-zinc-900 border border-zinc-700 text-white placeholder:text-zinc-500 focus:outline-none focus:border-blood-500 resize-none"
            />
          </div>

          <div>
            <label className="block text-zinc-400 text-sm mb-2">Category</label>
            <select className="w-full px-4 py-2 bg-zinc-900 border border-zinc-700 text-white focus:outline-none focus:border-blood-500">
              <option value="general">General</option>
              <option value="investigation">Investigation</option>
              <option value="entity">Entity</option>
              <option value="document">Document</option>
            </select>
          </div>

          <div>
            <label className="block text-zinc-400 text-sm mb-2">Color</label>
            <div className="flex gap-2">
              {['#ef4444', '#f59e0b', '#10b981', '#3b82f6', '#8b5cf6', '#ec4899'].map((color) => (
                <button
                  key={color}
                  className="w-8 h-8 border-2 border-transparent hover:border-white transition-colors"
                  style={{ backgroundColor: color }}
                />
              ))}
            </div>
          </div>
        </div>

        <div className="flex justify-end gap-4 mt-8">
          <button
            onClick={onClose}
            className="px-4 py-2 text-zinc-400 hover:text-white transition-colors"
          >
            Cancel
          </button>
          <button className="px-6 py-2 bg-blood-600 text-white hover:bg-blood-500 transition-colors">
            Create Tag
          </button>
        </div>
      </motion.div>
    </div>
  );
}

// ============================================================
// Main Page
// ============================================================

export default function TagsPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [showCreateModal, setShowCreateModal] = useState(false);
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');

  const filteredTags = mockTags.filter((tag) => {
    if (searchQuery) {
      const search = searchQuery.toLowerCase();
      if (!tag.name.toLowerCase().includes(search) && !tag.description.toLowerCase().includes(search)) {
        return false;
      }
    }
    if (selectedCategory !== 'all' && tag.category !== selectedCategory) {
      return false;
    }
    return true;
  });

  return (
    <div className="min-h-screen bg-black">
      <div className="max-w-7xl mx-auto px-6 py-12">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-4xl font-black tracking-tighter text-white mb-2">
              <GlitchText text="TAGS" />
            </h1>
            <p className="text-zinc-400">
              Organize and categorize your investigations, entities, and documents
            </p>
          </div>

          <button
            onClick={() => setShowCreateModal(true)}
            className="flex items-center gap-2 px-6 py-3 bg-blood-600 text-white hover:bg-blood-500 transition-colors"
          >
            <Plus className="w-5 h-5" />
            Create Tag
          </button>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-4 gap-4 mb-8">
          {[
            { label: 'Total Tags', value: mockTags.length, icon: <Tag className="w-5 h-5" /> },
            { label: 'Trending', value: mockTags.filter(t => t.trending).length, icon: <TrendingUp className="w-5 h-5 text-emerald-500" /> },
            { label: 'Total Usage', value: mockTags.reduce((acc, t) => acc + t.usageCount, 0).toLocaleString(), icon: <Hash className="w-5 h-5 text-blue-500" /> },
            { label: 'Categories', value: 4, icon: <Filter className="w-5 h-5 text-purple-500" /> },
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
              placeholder="Search tags..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-4 py-3 glass text-white placeholder:text-zinc-500 focus:outline-none focus:border-blood-500"
            />
          </div>

          <div className="flex items-center gap-2 glass p-1">
            {['all', 'investigation', 'entity', 'document', 'general'].map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 text-sm font-medium capitalize transition-colors ${
                  selectedCategory === category
                    ? 'bg-blood-600 text-white'
                    : 'text-zinc-400 hover:text-white'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Trending Tags */}
        <div className="mb-8">
          <h2 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
            <TrendingUp className="w-5 h-5 text-emerald-500" />
            Trending Tags
          </h2>
          <div className="flex flex-wrap gap-3">
            {mockTags.filter(t => t.trending).map((tag) => (
              <motion.button
                key={tag.id}
                whileHover={{ scale: 1.05 }}
                className="flex items-center gap-2 px-4 py-2 glass hover:border-blood-500 transition-colors"
              >
                <div className="w-3 h-3" style={{ backgroundColor: tag.color }} />
                <span className="text-white">{tag.name}</span>
                <span className="text-zinc-500 text-sm">({tag.usageCount})</span>
              </motion.button>
            ))}
          </div>
        </div>

        {/* Tags Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredTags.map((tag, index) => (
            <motion.div
              key={tag.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.05 }}
            >
              <TagCard tag={tag} />
            </motion.div>
          ))}
        </div>

        {filteredTags.length === 0 && (
          <div className="text-center py-16">
            <Tag className="w-16 h-16 text-zinc-700 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-white mb-2">No tags found</h3>
            <p className="text-zinc-400">
              Try adjusting your search or filters
            </p>
          </div>
        )}

        {/* Create Modal */}
        <CreateTagModal 
          isOpen={showCreateModal} 
          onClose={() => setShowCreateModal(false)} 
        />
      </div>
    </div>
  );
}
