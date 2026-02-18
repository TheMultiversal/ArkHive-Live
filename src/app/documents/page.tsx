'use client';

import { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  FileText, Download, Eye, Filter, Search, Grid, List,
  Calendar, Tag, Lock, Unlock, File, FileImage, FileArchive,
  SortAsc, SortDesc, ChevronDown
} from 'lucide-react';

interface Document {
  id: string;
  title: string;
  description: string;
  type: 'pdf' | 'image' | 'archive' | 'text';
  classification: 'public' | 'restricted' | 'sensitive';
  date: string;
  size: string;
  category: string;
  investigation?: string;
  downloadCount: number;
  previewAvailable: boolean;
}

const documents: Document[] = [
  {
    id: '1',
    title: 'FDA Internal Memo - Drug Approval Fast-Track',
    description: 'Internal communications regarding expedited approval process for experimental treatments.',
    type: 'pdf',
    classification: 'public',
    date: '2024-11-15',
    size: '2.4 MB',
    category: 'Health',
    investigation: 'Project Nightshade',
    downloadCount: 1247,
    previewAvailable: true
  },
  {
    id: '2',
    title: 'Corporate Lobbying Expenditure Report Q3 2024',
    description: 'Detailed breakdown of pharmaceutical industry lobbying spending.',
    type: 'pdf',
    classification: 'public',
    date: '2024-10-28',
    size: '856 KB',
    category: 'Corporate',
    downloadCount: 892,
    previewAvailable: true
  },
  {
    id: '3',
    title: 'EPA Waiver Documentation - Chemical Plant',
    description: 'Environmental protection waivers granted to Meridian Chemical facilities.',
    type: 'archive',
    classification: 'public',
    date: '2024-09-12',
    size: '15.7 MB',
    category: 'Environmental',
    investigation: 'Silent Erosion',
    downloadCount: 567,
    previewAvailable: false
  },
  {
    id: '4',
    title: 'Classified Budget Allocation - Defense Department',
    description: 'Redacted portions of defense spending for black budget programs.',
    type: 'pdf',
    classification: 'restricted',
    date: '2024-08-03',
    size: '1.1 MB',
    category: 'Government',
    downloadCount: 2341,
    previewAvailable: true
  },
  {
    id: '5',
    title: 'Internal Clinical Trial Data - Adverse Events',
    description: 'Unreported adverse events from Phase 3 clinical trials.',
    type: 'pdf',
    classification: 'sensitive',
    date: '2024-07-22',
    size: '4.8 MB',
    category: 'Health',
    investigation: 'Project Nightshade',
    downloadCount: 3156,
    previewAvailable: true
  },
  {
    id: '6',
    title: 'Financial Transaction Records - Shell Companies',
    description: 'Bank records linking offshore entities to domestic operations.',
    type: 'archive',
    classification: 'sensitive',
    date: '2024-06-15',
    size: '23.4 MB',
    category: 'Financial',
    downloadCount: 1834,
    previewAvailable: false
  },
  {
    id: '7',
    title: 'Satellite Imagery - Facility Construction',
    description: 'Time-lapse satellite images showing undisclosed facility construction.',
    type: 'image',
    classification: 'public',
    date: '2024-05-08',
    size: '45.2 MB',
    category: 'Government',
    downloadCount: 723,
    previewAvailable: true
  },
  {
    id: '8',
    title: 'Whistleblower Testimony Transcript',
    description: 'Anonymized testimony from former agency employee.',
    type: 'text',
    classification: 'restricted',
    date: '2024-04-19',
    size: '156 KB',
    category: 'Government',
    downloadCount: 4521,
    previewAvailable: true
  }
];

const typeIcons = {
  pdf: FileText,
  image: FileImage,
  archive: FileArchive,
  text: File
};

const categories = ['All', 'Health', 'Corporate', 'Environmental', 'Government', 'Financial'];
const classifications = ['All', 'public', 'restricted', 'sensitive'];
const sortOptions = ['date', 'title', 'downloads'] as const;

export default function DocumentsPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedClassification, setSelectedClassification] = useState('All');
  const [sortBy, setSortBy] = useState<typeof sortOptions[number]>('date');
  const [sortOrder, setSortOrder] = useState<'asc' | 'desc'>('desc');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('list');
  const [showFilters, setShowFilters] = useState(false);

  const filteredDocuments = useMemo(() => {
    let filtered = documents.filter(doc => {
      const matchesSearch = doc.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        doc.description.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesCategory = selectedCategory === 'All' || doc.category === selectedCategory;
      const matchesClassification = selectedClassification === 'All' || 
        doc.classification === selectedClassification;
      return matchesSearch && matchesCategory && matchesClassification;
    });

    // Sort
    filtered.sort((a, b) => {
      let comparison = 0;
      switch (sortBy) {
        case 'date':
          comparison = new Date(a.date).getTime() - new Date(b.date).getTime();
          break;
        case 'title':
          comparison = a.title.localeCompare(b.title);
          break;
        case 'downloads':
          comparison = a.downloadCount - b.downloadCount;
          break;
      }
      return sortOrder === 'desc' ? -comparison : comparison;
    });

    return filtered;
  }, [searchQuery, selectedCategory, selectedClassification, sortBy, sortOrder]);

  return (
    <div className="min-h-screen bg-black pt-24 pb-16">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8"
        >
          <h1 className="text-4xl font-bold text-white mb-4">
            Document <span className="text-blood-500">Library</span>
          </h1>
          <p className="text-lg text-zinc-400 max-w-2xl">
            Primary source documents from our investigations. Download, verify, and use 
            in your own research.
          </p>
        </motion.div>

        {/* Classification Warning */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.1 }}
          className="bg-yellow-900/20 border border-yellow-700/50 p-4 mb-8"
        >
          <p className="text-yellow-200/90 text-sm">
            <strong>Note:</strong> Some documents contain sensitive information. 
            Restricted documents require account verification. Please handle all 
            materials responsibly.
          </p>
        </motion.div>

        {/* Search and Controls */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.15 }}
          className="mb-6 space-y-4"
        >
          {/* Main controls row */}
          <div className="flex flex-col md:flex-row gap-4">
            {/* Search */}
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-zinc-500" />
              <input
                type="text"
                placeholder="Search documents..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-zinc-900 border border-zinc-800 text-white pl-10 pr-4 py-2.5 placeholder-zinc-500 focus:border-blood-500 focus:outline-none"
              />
            </div>

            {/* Filter toggle */}
            <button
              onClick={() => setShowFilters(!showFilters)}
              className={`flex items-center gap-2 px-4 py-2.5 border transition-colors ${
                showFilters
                  ? 'bg-blood-500/20 border-blood-500 text-blood-400'
                  : 'bg-zinc-900 border-zinc-800 text-zinc-400 hover:border-zinc-600'
              }`}
            >
              <Filter className="w-5 h-5" />
              Filters
              <ChevronDown className={`w-4 h-4 transition-transform ${showFilters ? 'rotate-180' : ''}`} />
            </button>

            {/* Sort */}
            <div className="flex items-center gap-2">
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value as typeof sortOptions[number])}
                className="bg-zinc-900 border border-zinc-800 text-white px-4 py-2.5 focus:border-blood-500 focus:outline-none"
              >
                <option value="date">Date</option>
                <option value="title">Title</option>
                <option value="downloads">Downloads</option>
              </select>
              <button
                onClick={() => setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc')}
                className="p-2.5 bg-zinc-900 border border-zinc-800 text-zinc-400 hover:border-zinc-600"
              >
                {sortOrder === 'asc' ? <SortAsc className="w-5 h-5" /> : <SortDesc className="w-5 h-5" />}
              </button>
            </div>

            {/* View mode */}
            <div className="flex border border-zinc-800">
              <button
                onClick={() => setViewMode('grid')}
                className={`p-2.5 ${viewMode === 'grid' ? 'bg-blood-500/20 text-blood-400' : 'bg-zinc-900 text-zinc-400'}`}
              >
                <Grid className="w-5 h-5" />
              </button>
              <button
                onClick={() => setViewMode('list')}
                className={`p-2.5 ${viewMode === 'list' ? 'bg-blood-500/20 text-blood-400' : 'bg-zinc-900 text-zinc-400'}`}
              >
                <List className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Expandable filters */}
          <AnimatePresence>
            {showFilters && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: 'auto', opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                className="overflow-hidden"
              >
                <div className="bg-zinc-900/50 border border-zinc-800 p-4 flex flex-wrap gap-6">
                  <div>
                    <label className="block text-sm text-zinc-400 mb-2">Category</label>
                    <select
                      value={selectedCategory}
                      onChange={(e) => setSelectedCategory(e.target.value)}
                      className="bg-zinc-800 border border-zinc-700 text-white px-3 py-2 focus:border-blood-500 focus:outline-none"
                    >
                      {categories.map(cat => (
                        <option key={cat} value={cat}>{cat}</option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm text-zinc-400 mb-2">Classification</label>
                    <select
                      value={selectedClassification}
                      onChange={(e) => setSelectedClassification(e.target.value)}
                      className="bg-zinc-800 border border-zinc-700 text-white px-3 py-2 focus:border-blood-500 focus:outline-none"
                    >
                      {classifications.map(cls => (
                        <option key={cls} value={cls}>
                          {cls === 'All' ? 'All' : cls.charAt(0).toUpperCase() + cls.slice(1)}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>

        {/* Results count */}
        <div className="text-sm text-zinc-500 mb-4">
          {filteredDocuments.length} documents found
        </div>

        {/* Documents */}
        {viewMode === 'list' ? (
          <div className="space-y-2">
            {filteredDocuments.map((doc, index) => {
              const TypeIcon = typeIcons[doc.type];
              return (
                <motion.div
                  key={doc.id}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.03 }}
                  className="bg-zinc-900/50 border border-zinc-800 p-4 hover:border-zinc-700 transition-colors"
                >
                  <div className="flex items-start gap-4">
                    <div className="bg-zinc-800 p-3">
                      <TypeIcon className="w-6 h-6 text-zinc-400" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-start justify-between gap-4">
                        <div>
                          <h3 className="text-white font-semibold mb-1">{doc.title}</h3>
                          <p className="text-zinc-500 text-sm line-clamp-1">{doc.description}</p>
                        </div>
                        <div className="flex items-center gap-2 shrink-0">
                          {doc.classification === 'public' ? (
                            <Unlock className="w-4 h-4 text-green-500" />
                          ) : (
                            <Lock className={`w-4 h-4 ${
                              doc.classification === 'sensitive' ? 'text-red-500' : 'text-yellow-500'
                            }`} />
                          )}
                          <span className={`px-2 py-0.5 text-xs ${
                            doc.classification === 'public'
                              ? 'bg-green-500/20 text-green-400'
                              : doc.classification === 'restricted'
                              ? 'bg-yellow-500/20 text-yellow-400'
                              : 'bg-red-500/20 text-red-400'
                          }`}>
                            {doc.classification}
                          </span>
                        </div>
                      </div>
                      <div className="flex items-center gap-4 mt-3 text-xs text-zinc-500">
                        <span className="flex items-center gap-1">
                          <Calendar className="w-3.5 h-3.5" />
                          {doc.date}
                        </span>
                        <span className="flex items-center gap-1">
                          <Tag className="w-3.5 h-3.5" />
                          {doc.category}
                        </span>
                        <span>{doc.size}</span>
                        <span>{doc.downloadCount.toLocaleString()} downloads</span>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      {doc.previewAvailable && (
                        <button className="p-2 bg-zinc-800 text-zinc-400 hover:text-white transition-colors">
                          <Eye className="w-5 h-5" />
                        </button>
                      )}
                      <button className="p-2 bg-blood-500/20 text-blood-400 hover:bg-blood-500/30 transition-colors">
                        <Download className="w-5 h-5" />
                      </button>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {filteredDocuments.map((doc, index) => {
              const TypeIcon = typeIcons[doc.type];
              return (
                <motion.div
                  key={doc.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.05 }}
                  className="bg-zinc-900/50 border border-zinc-800 p-5 hover:border-zinc-700 transition-colors"
                >
                  <div className="flex items-start justify-between mb-3">
                    <div className="bg-zinc-800 p-2">
                      <TypeIcon className="w-5 h-5 text-zinc-400" />
                    </div>
                    <span className={`px-2 py-0.5 text-xs ${
                      doc.classification === 'public'
                        ? 'bg-green-500/20 text-green-400'
                        : doc.classification === 'restricted'
                        ? 'bg-yellow-500/20 text-yellow-400'
                        : 'bg-red-500/20 text-red-400'
                    }`}>
                      {doc.classification}
                    </span>
                  </div>
                  <h3 className="text-white font-semibold mb-2 line-clamp-2">{doc.title}</h3>
                  <p className="text-zinc-500 text-sm mb-4 line-clamp-2">{doc.description}</p>
                  <div className="flex items-center justify-between text-xs text-zinc-500">
                    <span>{doc.date}</span>
                    <span>{doc.size}</span>
                  </div>
                  <div className="flex items-center gap-2 mt-4">
                    {doc.previewAvailable && (
                      <button className="flex-1 py-2 bg-zinc-800 text-zinc-400 hover:text-white text-sm transition-colors flex items-center justify-center gap-2">
                        <Eye className="w-4 h-4" />
                        Preview
                      </button>
                    )}
                    <button className="flex-1 py-2 bg-blood-500/20 text-blood-400 hover:bg-blood-500/30 text-sm transition-colors flex items-center justify-center gap-2">
                      <Download className="w-4 h-4" />
                      Download
                    </button>
                  </div>
                </motion.div>
              );
            })}
          </div>
        )}

        {filteredDocuments.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-16"
          >
            <FileText className="w-12 h-12 text-zinc-700 mx-auto mb-4" />
            <p className="text-zinc-400">No documents match your search criteria</p>
          </motion.div>
        )}
      </div>
    </div>
  );
}
