'use client';

import { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import {
  FileText, Filter, Search, Grid, List,
  Calendar, Tag, Lock, Unlock, File, FileImage, FileArchive,
  SortAsc, SortDesc, ChevronDown, ExternalLink, BookOpen
} from 'lucide-react';
import { documents, type DocumentEntry } from '@/data/documents';

const typeIcons: Record<string, typeof FileText> = {
  pdf: File,
  image: FileImage,
  archive: FileArchive,
  text: FileText,
};

const sortOptions = ['date', 'title', 'downloads', 'category'] as const;

const ITEMS_PER_PAGE = 60;

export default function DocumentsPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedClassification, setSelectedClassification] = useState('All');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('list');
  const [sortBy, setSortBy] = useState<typeof sortOptions[number]>('date');
  const [sortDirection, setSortDirection] = useState<'asc' | 'desc'>('desc');
  const [showFilters, setShowFilters] = useState(false);
  const [visibleCount, setVisibleCount] = useState(ITEMS_PER_PAGE);
  const [selectedInvestigation, setSelectedInvestigation] = useState('All');

  const categories = useMemo(() => {
    const cats = new Set(documents.map(d => d.category));
    return ['All', ...Array.from(cats).sort()];
  }, []);

  const investigations = useMemo(() => {
    const invs = new Set(documents.map(d => d.investigation));
    return ['All', ...Array.from(invs).sort()];
  }, []);

  const classifications = ['All', 'public', 'restricted', 'sensitive'];

  const filteredDocuments = useMemo(() => {
    let filtered = documents;

    if (searchQuery) {
      const q = searchQuery.toLowerCase();
      filtered = filtered.filter(d =>
        d.title.toLowerCase().includes(q) ||
        d.description.toLowerCase().includes(q) ||
        d.investigation.toLowerCase().includes(q) ||
        d.category.toLowerCase().includes(q)
      );
    }

    if (selectedCategory !== 'All') {
      filtered = filtered.filter(d => d.category === selectedCategory);
    }

    if (selectedClassification !== 'All') {
      filtered = filtered.filter(d => d.classification === selectedClassification);
    }

    if (selectedInvestigation !== 'All') {
      filtered = filtered.filter(d => d.investigation === selectedInvestigation);
    }

    filtered = [...filtered].sort((a, b) => {
      let cmp = 0;
      switch (sortBy) {
        case 'date':
          cmp = a.date.localeCompare(b.date);
          break;
        case 'title':
          cmp = a.title.localeCompare(b.title);
          break;
        case 'downloads':
          cmp = a.downloadCount; b.downloadCount;
          break;
        case 'category':
          cmp = a.category.localeCompare(b.category);
          break;
      }
      return sortDirection === 'desc' ? -cmp : cmp;
    });

    return filtered;
  }, [searchQuery, selectedCategory, selectedClassification, selectedInvestigation, sortBy, sortDirection]);

  const visibleDocs = filteredDocuments.slice(0, visibleCount);
  const hasMore = visibleCount < filteredDocuments.length;

  // Stats
  const totalDocs = documents.length;
  const totalInvestigations = new Set(documents.map(d => d.investigationSlug)).size;
  const categoryCount = new Set(documents.map(d => d.category)).size;

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-6"
      >
        <div className="flex items-center gap-3 mb-3">
          <div className="bg-blood-500/20 p-2.5">
            <BookOpen className="w-6 h-6 text-blood-500" />
          </div>
          <h1 className="text-3xl font-black text-white tracking-tight">
            Document Archive
          </h1>
        </div>
        <p className="text-zinc-400 max-w-3xl mb-4">
          {totalDocs.toLocaleString()} primary source documents referenced across {totalInvestigations} investigations.
          Court filings, government reports, FOIA releases, congressional testimony,
          declassified intelligence, and investigative journalism, all linked to their original sources.
        </p>
        <div className="flex flex-wrap gap-3 text-xs text-zinc-500">
          <span className="bg-zinc-900 border border-zinc-800 px-3 py-1">
            {totalDocs.toLocaleString()} Documents
          </span>
          <span className="bg-zinc-900 border border-zinc-800 px-3 py-1">
            {totalInvestigations} Investigations
          </span>
          <span className="bg-zinc-900 border border-zinc-800 px-3 py-1">
            {categoryCount} Categories
          </span>
        </div>
      </motion.div>

      {/* Source Notice */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.1 }}
        className="bg-zinc-800/20 border border-zinc-600/50 p-4 mb-8"
      >
        <p className="text-zinc-300/90 text-sm">
          All documents link to their original external sources: government archives, court systems,
          news organizations, and research institutions. ArkHive does not host these files directly.
          Some sources may require registration or have access restrictions.
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
              placeholder="Search documents, investigations, categories..."
              value={searchQuery}
              onChange={(e) => { setSearchQuery(e.target.value); setVisibleCount(ITEMS_PER_PAGE); }}
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
              <option value="category">Category</option>
            </select>
            <button
              onClick={() => setSortDirection(d => d === 'asc' ? 'desc' : 'asc')}
              className="p-2.5 bg-zinc-900 border border-zinc-800 text-zinc-400 hover:text-white transition-colors"
            >
              {sortDirection === 'desc' ? <SortDesc className="w-5 h-5" /> : <SortAsc className="w-5 h-5" />}
            </button>
          </div>

          {/* View mode */}
          <div className="flex">
            <button
              onClick={() => setViewMode('list')}
              className={`p-2.5 border transition-colors ${
                viewMode === 'list'
                  ? 'bg-blood-500/20 border-blood-500 text-blood-400'
                  : 'bg-zinc-900 border-zinc-800 text-zinc-400'
              }`}
            >
              <List className="w-5 h-5" />
            </button>
            <button
              onClick={() => setViewMode('grid')}
              className={`p-2.5 border border-l-0 transition-colors ${
                viewMode === 'grid'
                  ? 'bg-blood-500/20 border-blood-500 text-blood-400'
                  : 'bg-zinc-900 border-zinc-800 text-zinc-400'
              }`}
            >
              <Grid className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Filter panels */}
        <AnimatePresence>
          {showFilters && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
            >
              <div className="bg-zinc-900/50 border border-zinc-800 p-4 flex flex-wrap gap-6">
                <div>
                  <label className="block text-sm text-zinc-400 mb-2">Category</label>
                  <select
                    value={selectedCategory}
                    onChange={(e) => { setSelectedCategory(e.target.value); setVisibleCount(ITEMS_PER_PAGE); }}
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
                    onChange={(e) => { setSelectedClassification(e.target.value); setVisibleCount(ITEMS_PER_PAGE); }}
                    className="bg-zinc-800 border border-zinc-700 text-white px-3 py-2 focus:border-blood-500 focus:outline-none"
                  >
                    {classifications.map(cls => (
                      <option key={cls} value={cls}>
                        {cls === 'All' ? 'All' : cls.charAt(0).toUpperCase() + cls.slice(1)}
                      </option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="block text-sm text-zinc-400 mb-2">Investigation</label>
                  <select
                    value={selectedInvestigation}
                    onChange={(e) => { setSelectedInvestigation(e.target.value); setVisibleCount(ITEMS_PER_PAGE); }}
                    className="bg-zinc-800 border border-zinc-700 text-white px-3 py-2 focus:border-blood-500 focus:outline-none max-w-[280px]"
                  >
                    {investigations.map(inv => (
                      <option key={inv} value={inv}>{inv}</option>
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
        Showing {visibleDocs.length} of {filteredDocuments.length} documents
      </div>

      {/* Documents; List View */}
      {viewMode === 'list' ? (
        <div className="space-y-2">
          {visibleDocs.map((doc, index) => {
            const TypeIcon = typeIcons[doc.type];
            return (
              <motion.div
                key={doc.id}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: Math.min(index * 0.02, 0.5) }}
                className="bg-zinc-900/50 border border-zinc-800 p-4 hover:border-zinc-700 transition-colors group"
              >
                <div className="flex items-start gap-4">
                  <div className="bg-zinc-800 p-3 shrink-0">
                    <TypeIcon className="w-6 h-6 text-zinc-400" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-start justify-between gap-4">
                      <div className="min-w-0">
                        <h3 className="text-white font-semibold mb-1 line-clamp-1">{doc.title}</h3>
                        <Link
                          href={`/investigations/${doc.investigationSlug}`}
                          className="text-blood-500 hover:text-blood-400 text-xs transition-colors"
                        >
                          {doc.investigation}
                        </Link>
                      </div>
                      <div className="flex items-center gap-2 shrink-0">
                        {doc.classification === 'public' ? (
                          <Unlock className="w-4 h-4 text-blood-500" />
                        ) : (
                          <Lock className={`w-4 h-4 ${
                            doc.classification === 'sensitive' ? 'text-blood-500' : 'text-zinc-400'
                          }`} />
                        )}
                        <span className={`px-2 py-0.5 text-xs ${
                          doc.classification === 'public'
                            ? 'bg-blood-500/20 text-blood-400'
                            : doc.classification === 'restricted'
                            ? 'bg-zinc-400/20 text-zinc-300'
                            : 'bg-blood-500/20 text-blood-400'
                        }`}>
                          {doc.classification}
                        </span>
                      </div>
                    </div>
                    <div className="flex items-center gap-4 mt-2 text-xs text-zinc-500">
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
                  <a
                    href={doc.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 px-3 py-2 bg-blood-500/20 text-blood-400 hover:bg-blood-500/30 transition-colors text-sm shrink-0"
                  >
                    <ExternalLink className="w-4 h-4" />
                    <span className="hidden sm:inline">Source</span>
                  </a>
                </div>
              </motion.div>
            );
          })}
        </div>
      ) : (
        /* Grid View */
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {visibleDocs.map((doc, index) => {
            const TypeIcon = typeIcons[doc.type];
            return (
              <motion.div
                key={doc.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: Math.min(index * 0.03, 0.5) }}
                className="bg-zinc-900/50 border border-zinc-800 p-5 hover:border-zinc-700 transition-colors"
              >
                <div className="flex items-start justify-between mb-3">
                  <div className="bg-zinc-800 p-2">
                    <TypeIcon className="w-5 h-5 text-zinc-400" />
                  </div>
                  <span className={`px-2 py-0.5 text-xs ${
                    doc.classification === 'public'
                      ? 'bg-blood-500/20 text-blood-400'
                      : doc.classification === 'restricted'
                      ? 'bg-zinc-400/20 text-zinc-300'
                      : 'bg-blood-500/20 text-blood-400'
                  }`}>
                    {doc.classification}
                  </span>
                </div>
                <h3 className="text-white font-semibold mb-2 line-clamp-2 text-sm">{doc.title}</h3>
                <Link
                  href={`/investigations/${doc.investigationSlug}`}
                  className="text-blood-500 hover:text-blood-400 text-xs transition-colors line-clamp-1 block mb-3"
                >
                  {doc.investigation}
                </Link>
                <div className="flex items-center justify-between text-xs text-zinc-500 mb-4">
                  <span>{doc.date}</span>
                  <span className="flex items-center gap-1">
                    <Tag className="w-3 h-3" />
                    {doc.category}
                  </span>
                </div>
                <a
                  href={doc.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-2 bg-blood-500/20 text-blood-400 hover:bg-blood-500/30 text-sm transition-colors flex items-center justify-center gap-2"
                >
                  <ExternalLink className="w-4 h-4" />
                  View Source
                </a>
              </motion.div>
            );
          })}
        </div>
      )}

      {/* Load More */}
      {hasMore && (
        <div className="mt-8 text-center">
          <button
            onClick={() => setVisibleCount(prev => prev + ITEMS_PER_PAGE)}
            className="px-6 py-3 bg-zinc-900 border border-zinc-800 text-zinc-400 hover:text-white hover:border-zinc-600 transition-colors"
          >
            Load More ({filteredDocuments.length - visibleCount} remaining)
          </button>
        </div>
      )}

      {/* No results */}
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
  );
}
