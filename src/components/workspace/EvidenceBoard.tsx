'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Plus, 
  Search, 
  Filter,
  Link2,
  FileText,
  Image as ImageIcon,
  Video,
  Mic,
  ExternalLink,
  AlertTriangle,
  Check,
  Clock,
  X,
  ChevronDown,
  Grid3X3,
  List
} from 'lucide-react';
import { Evidence, EvidenceType, VerificationStatus } from '@/types/workspace';

interface EvidenceBoardProps {
  evidence: Evidence[];
  onAddEvidence?: (evidence: Omit<Evidence, 'id' | 'addedAt'>) => void;
}

export default function EvidenceBoard({ evidence, onAddEvidence }: EvidenceBoardProps) {
  const [searchQuery, setSearchQuery] = useState('');
  const [filterType, setFilterType] = useState<EvidenceType | 'all'>('all');
  const [filterStatus, setFilterStatus] = useState<VerificationStatus | 'all'>('all');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [showAddModal, setShowAddModal] = useState(false);
  const [selectedEvidence, setSelectedEvidence] = useState<Evidence | null>(null);

  const getTypeIcon = (type: EvidenceType) => {
    switch (type) {
      case 'document': return <FileText className="w-3.5 h-3.5" />;
      case 'image': return <ImageIcon className="w-3.5 h-3.5" />;
      case 'video': return <Video className="w-3.5 h-3.5" />;
      case 'audio': return <Mic className="w-3.5 h-3.5" />;
      case 'link': return <Link2 className="w-3.5 h-3.5" />;
      default: return <FileText className="w-3.5 h-3.5" />;
    }
  };

  const getStatusIcon = (status: VerificationStatus) => {
    switch (status) {
      case 'verified': return <Check className="w-3 h-3" />;
      case 'disputed': return <AlertTriangle className="w-3 h-3" />;
      case 'pending': return <Clock className="w-3 h-3" />;
      default: return null;
    }
  };

  const getStatusColor = (status: VerificationStatus) => {
    switch (status) {
      case 'verified': return 'text-emerald-400/70 bg-emerald-500/10';
      case 'disputed': return 'text-amber-400/70 bg-amber-500/10';
      case 'pending': return 'text-white/40 bg-white/5';
      default: return 'text-white/40 bg-white/5';
    }
  };

  const filteredEvidence = evidence.filter(item => {
    const matchesSearch = item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          item.description?.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesType = filterType === 'all' || item.type === filterType;
    const matchesStatus = filterStatus === 'all' || item.verificationStatus === filterStatus;
    return matchesSearch && matchesType && matchesStatus;
  });

  const typeOptions: { value: EvidenceType | 'all'; label: string }[] = [
    { value: 'all', label: 'All Types' },
    { value: 'document', label: 'Documents' },
    { value: 'image', label: 'Images' },
    { value: 'video', label: 'Videos' },
    { value: 'audio', label: 'Audio' },
    { value: 'link', label: 'Links' },
  ];

  return (
    <div className="h-full flex flex-col bg-[#050505]">
      {/* Header */}
      <div className="p-4 border-b border-white/[0.04]">
        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center gap-2">
            <h3 className="text-xs font-medium text-white/50 uppercase tracking-widest">Evidence</h3>
            <span className="text-[10px] text-white/25 px-1.5 py-0.5 bg-white/[0.03] rounded">
              {filteredEvidence.length}
            </span>
          </div>
          <div className="flex items-center gap-1">
            <button
              onClick={() => setViewMode('grid')}
              aria-label="Grid view"
              className={`p-1.5 rounded transition-colors ${viewMode === 'grid' ? 'bg-white/[0.06] text-white/50' : 'text-white/20 hover:text-white/40'}`}
            >
              <Grid3X3 className="w-3 h-3" />
            </button>
            <button
              onClick={() => setViewMode('list')}
              aria-label="List view"
              className={`p-1.5 rounded transition-colors ${viewMode === 'list' ? 'bg-white/[0.06] text-white/50' : 'text-white/20 hover:text-white/40'}`}
            >
              <List className="w-3 h-3" />
            </button>
            <button
              onClick={() => setShowAddModal(true)}
              className="ml-2 flex items-center gap-1 px-2 py-1 bg-blood-600/20 text-blood-400/80 rounded text-[10px] font-medium hover:bg-blood-600/30 transition-colors"
            >
              <Plus className="w-3 h-3" />
              Add
            </button>
          </div>
        </div>

        {/* Search and Filters */}
        <div className="flex gap-2">
          <div className="relative flex-1">
            <Search className="absolute left-2.5 top-1/2 -translate-y-1/2 w-3 h-3 text-white/20" />
            <input
              type="text"
              placeholder="Search evidence..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-7 pr-3 py-1.5 bg-white/[0.02] border border-white/[0.06] rounded text-[11px] text-white/70 placeholder-white/20 focus:outline-none focus:border-white/[0.1] transition-colors"
            />
          </div>
          <select
            value={filterType}
            onChange={(e) => setFilterType(e.target.value as EvidenceType | 'all')}
            className="px-2 py-1.5 bg-white/[0.02] border border-white/[0.06] rounded text-[11px] text-white/50 focus:outline-none cursor-pointer"
          >
            {typeOptions.map(option => (
              <option key={option.value} value={option.value} className="bg-[#0a0a0a]">{option.label}</option>
            ))}
          </select>
        </div>
      </div>

      {/* Evidence Grid/List */}
      <div className="flex-1 overflow-y-auto p-4">
        {filteredEvidence.length === 0 ? (
          <div className="h-full flex items-center justify-center">
            <div className="text-center">
              <div className="w-10 h-10 mx-auto mb-3 rounded-full bg-white/[0.02] flex items-center justify-center">
                <FileText className="w-4 h-4 text-white/15" />
              </div>
              <p className="text-[11px] text-white/25">No evidence found</p>
            </div>
          </div>
        ) : viewMode === 'grid' ? (
          <div className="grid grid-cols-2 lg:grid-cols-3 gap-2">
            {filteredEvidence.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.02 }}
                onClick={() => setSelectedEvidence(item)}
                className="group p-3 bg-white/[0.01] border border-white/[0.04] rounded-lg cursor-pointer hover:bg-white/[0.02] hover:border-white/[0.06] transition-all"
              >
                <div className="flex items-start justify-between mb-2">
                  <div className="text-white/30">{getTypeIcon(item.type)}</div>
                  <span className={`flex items-center gap-1 px-1.5 py-0.5 rounded text-[9px] ${getStatusColor(item.verificationStatus)}`}>
                    {getStatusIcon(item.verificationStatus)}
                    {item.verificationStatus}
                  </span>
                </div>
                <h4 className="text-[11px] font-medium text-white/60 mb-1 line-clamp-2">{item.title}</h4>
                {item.description && (
                  <p className="text-[10px] text-white/25 line-clamp-2 mb-2">{item.description}</p>
                )}
                {item.tags && item.tags.length > 0 && (
                  <div className="flex flex-wrap gap-1">
                    {item.tags.slice(0, 2).map((tag, i) => (
                      <span key={i} className="px-1.5 py-0.5 bg-white/[0.03] rounded text-[9px] text-white/30">{tag}</span>
                    ))}
                    {item.tags.length > 2 && (
                      <span className="text-[9px] text-white/20">+{item.tags.length - 2}</span>
                    )}
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        ) : (
          <div className="space-y-1">
            {filteredEvidence.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, x: -4 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.02 }}
                onClick={() => setSelectedEvidence(item)}
                className="group flex items-center gap-3 p-2.5 bg-white/[0.01] border border-white/[0.04] rounded cursor-pointer hover:bg-white/[0.02] hover:border-white/[0.06] transition-all"
              >
                <div className="w-8 h-8 rounded bg-white/[0.03] flex items-center justify-center text-white/25">
                  {getTypeIcon(item.type)}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2">
                    <h4 className="text-[11px] font-medium text-white/60 truncate">{item.title}</h4>
                    <span className={`flex items-center gap-0.5 px-1.5 py-0.5 rounded text-[9px] shrink-0 ${getStatusColor(item.verificationStatus)}`}>
                      {getStatusIcon(item.verificationStatus)}
                    </span>
                  </div>
                  <p className="text-[10px] text-white/25 truncate">{item.addedBy} · {new Date(item.addedAt).toLocaleDateString()}</p>
                </div>
                <ExternalLink className="w-3 h-3 text-white/15 opacity-0 group-hover:opacity-100 transition-opacity" />
              </motion.div>
            ))}
          </div>
        )}
      </div>

      {/* Evidence Detail Modal */}
      <AnimatePresence>
        {selectedEvidence && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4 z-50"
            onClick={() => setSelectedEvidence(null)}
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              className="w-full max-w-lg bg-[#0a0a0a] border border-white/[0.06] rounded-lg p-4"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center gap-2">
                  <div className="text-white/30">{getTypeIcon(selectedEvidence.type)}</div>
                  <span className={`flex items-center gap-1 px-1.5 py-0.5 rounded text-[10px] ${getStatusColor(selectedEvidence.verificationStatus)}`}>
                    {getStatusIcon(selectedEvidence.verificationStatus)}
                    {selectedEvidence.verificationStatus}
                  </span>
                </div>
                <button
                  onClick={() => setSelectedEvidence(null)}
                  aria-label="Close details"
                  className="p-1 text-white/30 hover:text-white/50 transition-colors"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>

              <h3 className="text-sm font-medium text-white/70 mb-2">{selectedEvidence.title}</h3>
              {selectedEvidence.description && (
                <p className="text-[11px] text-white/40 mb-4 leading-relaxed">{selectedEvidence.description}</p>
              )}

              <div className="space-y-2 text-[10px] text-white/30 mb-4">
                <div className="flex justify-between">
                  <span>Added by</span>
                  <span className="text-white/50">{selectedEvidence.addedBy}</span>
                </div>
                <div className="flex justify-between">
                  <span>Date</span>
                  <span className="text-white/50">{new Date(selectedEvidence.addedAt).toLocaleDateString()}</span>
                </div>
                {selectedEvidence.sourceUrl && (
                  <div className="flex justify-between">
                    <span>Source</span>
                    <a href={selectedEvidence.sourceUrl} target="_blank" rel="noopener noreferrer" className="text-blood-400/70 hover:text-blood-400 flex items-center gap-1">
                      View <ExternalLink className="w-2.5 h-2.5" />
                    </a>
                  </div>
                )}
              </div>

              {selectedEvidence.tags && selectedEvidence.tags.length > 0 && (
                <div className="flex flex-wrap gap-1 pt-3 border-t border-white/[0.04]">
                  {selectedEvidence.tags.map((tag, i) => (
                    <span key={i} className="px-2 py-0.5 bg-white/[0.03] rounded text-[10px] text-white/30">{tag}</span>
                  ))}
                </div>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Add Evidence Modal */}
      <AnimatePresence>
        {showAddModal && (
          <AddEvidenceModal
            onClose={() => setShowAddModal(false)}
            onAdd={(data) => {
              onAddEvidence?.(data);
              setShowAddModal(false);
            }}
          />
        )}
      </AnimatePresence>
    </div>
  );
}

interface AddEvidenceModalProps {
  onClose: () => void;
  onAdd: (evidence: Omit<Evidence, 'id' | 'addedAt'>) => void;
}

function AddEvidenceModal({ onClose, onAdd }: AddEvidenceModalProps) {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [type, setType] = useState<EvidenceType>('document');
  const [sourceUrl, setSourceUrl] = useState('');
  const [tags, setTags] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!title.trim()) return;
    
    onAdd({
      title: title.trim(),
      description: description.trim() || '',
      type,
      category: 'unverified',
      verificationStatus: 'pending',
      source: sourceUrl.trim() || 'User submitted',
      sourceUrl: sourceUrl.trim() || undefined,
      tags: tags.split(',').map(t => t.trim()).filter(Boolean),
      addedBy: '1',
      addedByName: 'You',
      connections: [],
    });
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="absolute inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4 z-50"
      onClick={onClose}
    >
      <motion.div
        initial={{ scale: 0.95, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.95, opacity: 0 }}
        className="w-full max-w-md bg-[#0a0a0a] border border-white/[0.06] rounded-lg p-4"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-xs font-medium text-white/50 uppercase tracking-widest">Add Evidence</h3>
          <button onClick={onClose} aria-label="Close modal" className="p-1 text-white/30 hover:text-white/50 transition-colors">
            <X className="w-4 h-4" />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="space-y-3">
          <div>
            <label className="block text-[10px] text-white/30 uppercase tracking-wider mb-1">Title</label>
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="Evidence title..."
              className="w-full px-3 py-2 bg-white/[0.02] border border-white/[0.06] rounded text-[11px] text-white/70 placeholder-white/20 focus:outline-none focus:border-white/[0.1] transition-colors"
              required
            />
          </div>

          <div>
            <label className="block text-[10px] text-white/30 uppercase tracking-wider mb-1">Type</label>
            <select
              value={type}
              onChange={(e) => setType(e.target.value as EvidenceType)}
              className="w-full px-3 py-2 bg-white/[0.02] border border-white/[0.06] rounded text-[11px] text-white/50 focus:outline-none cursor-pointer"
            >
              <option value="document" className="bg-[#0a0a0a]">Document</option>
              <option value="image" className="bg-[#0a0a0a]">Image</option>
              <option value="video" className="bg-[#0a0a0a]">Video</option>
              <option value="audio" className="bg-[#0a0a0a]">Audio</option>
              <option value="link" className="bg-[#0a0a0a]">Link</option>
            </select>
          </div>

          <div>
            <label className="block text-[10px] text-white/30 uppercase tracking-wider mb-1">Description</label>
            <textarea
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder="Brief description..."
              rows={3}
              className="w-full px-3 py-2 bg-white/[0.02] border border-white/[0.06] rounded text-[11px] text-white/70 placeholder-white/20 focus:outline-none focus:border-white/[0.1] transition-colors resize-none"
            />
          </div>

          <div>
            <label className="block text-[10px] text-white/30 uppercase tracking-wider mb-1">Source URL</label>
            <input
              type="url"
              value={sourceUrl}
              onChange={(e) => setSourceUrl(e.target.value)}
              placeholder="https://..."
              className="w-full px-3 py-2 bg-white/[0.02] border border-white/[0.06] rounded text-[11px] text-white/70 placeholder-white/20 focus:outline-none focus:border-white/[0.1] transition-colors"
            />
          </div>

          <div>
            <label className="block text-[10px] text-white/30 uppercase tracking-wider mb-1">Tags (comma-separated)</label>
            <input
              type="text"
              value={tags}
              onChange={(e) => setTags(e.target.value)}
              placeholder="foia, government, health..."
              className="w-full px-3 py-2 bg-white/[0.02] border border-white/[0.06] rounded text-[11px] text-white/70 placeholder-white/20 focus:outline-none focus:border-white/[0.1] transition-colors"
            />
          </div>

          <div className="flex gap-2 pt-2">
            <button
              type="button"
              onClick={onClose}
              className="flex-1 px-3 py-2 bg-white/[0.03] text-white/40 rounded text-[11px] font-medium hover:bg-white/[0.05] transition-colors"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="flex-1 px-3 py-2 bg-blood-600/30 text-blood-400/80 rounded text-[11px] font-medium hover:bg-blood-600/40 transition-colors"
            >
              Add Evidence
            </button>
          </div>
        </form>
      </motion.div>
    </motion.div>
  );
}
