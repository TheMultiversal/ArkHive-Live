'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  FileText, 
  Download, 
  Upload, 
  Search, 
  Folder,
  File,
  Image as ImageIcon,
  FileSpreadsheet,
  FileCode,
  Plus,
  MoreHorizontal,
  Clock,
  User,
  ChevronRight,
  X,
  Check,
  FolderOpen
} from 'lucide-react';
import { WorkspaceDocument } from '@/types/workspace';

interface DocumentLibraryProps {
  documents: WorkspaceDocument[];
  onUpload?: (doc: Omit<WorkspaceDocument, 'id' | 'uploadedAt'>) => void;
}

export default function DocumentLibrary({ documents, onUpload }: DocumentLibraryProps) {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedFolder, setSelectedFolder] = useState<string | null>(null);
  const [showUploadModal, setShowUploadModal] = useState(false);
  const [viewMode, setViewMode] = useState<'list' | 'grid'>('list');

  const getFileIcon = (type: string) => {
    if (type.includes('image')) return <ImageIcon className="w-4 h-4" />;
    if (type.includes('spreadsheet') || type.includes('csv')) return <FileSpreadsheet className="w-4 h-4" />;
    if (type.includes('code') || type.includes('json')) return <FileCode className="w-4 h-4" />;
    if (type.includes('pdf') || type.includes('doc')) return <FileText className="w-4 h-4" />;
    return <File className="w-4 h-4" />;
  };

  const formatFileSize = (bytes: number) => {
    if (bytes < 1024) return `${bytes} B`;
    if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(1)} KB`;
    return `${(bytes / (1024 * 1024)).toFixed(1)} MB`;
  };

  const folders = [...new Set(documents.map(d => d.folder).filter((f): f is string => Boolean(f)))];
  
  const filteredDocuments = documents.filter(doc => {
    const matchesSearch = doc.name.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesFolder = !selectedFolder || doc.folder === selectedFolder;
    return matchesSearch && matchesFolder;
  });

  const groupedByFolder = filteredDocuments.reduce((acc, doc) => {
    const folder = doc.folder || 'Uncategorized';
    if (!acc[folder]) acc[folder] = [];
    acc[folder].push(doc);
    return acc;
  }, {} as Record<string, WorkspaceDocument[]>);

  return (
    <div className="h-full flex flex-col bg-[#050505]">
      {/* Header */}
      <div className="p-4 border-b border-white/[0.04]">
        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center gap-2">
            <h3 className="text-xs font-medium text-white/50 uppercase tracking-widest">Documents</h3>
            <span className="text-[10px] text-white/25 px-1.5 py-0.5 bg-white/[0.03] rounded">
              {documents.length}
            </span>
          </div>
          <button
            onClick={() => setShowUploadModal(true)}
            className="flex items-center gap-1 px-2 py-1 bg-blood-600/20 text-blood-400/80 rounded text-[10px] font-medium hover:bg-blood-600/30 transition-colors"
            aria-label="Upload document"
          >
            <Upload className="w-3 h-3" aria-hidden="true" />
            Upload
          </button>
        </div>

        <div className="relative">
          <Search className="absolute left-2.5 top-1/2 -translate-y-1/2 w-3 h-3 text-white/20" aria-hidden="true" />
          <input
            type="text"
            placeholder="Search files..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            aria-label="Search documents"
            className="w-full pl-7 pr-3 py-1.5 bg-white/[0.02] border border-white/[0.06] rounded text-[11px] text-white/70 placeholder-white/20 focus:outline-none focus:border-white/[0.1] transition-colors"
          />
        </div>
      </div>

      {/* Folder Nav */}
      {folders.length > 0 && (
        <div 
          className="px-4 py-2 border-b border-white/[0.03] flex items-center gap-1 overflow-x-auto"
          role="tablist"
          aria-label="Document folders"
        >
          <button
            onClick={() => setSelectedFolder(null)}
            role="tab"
            aria-selected={!selectedFolder}
            className={`flex items-center gap-1 px-2 py-1 rounded text-[10px] transition-colors shrink-0 ${
              !selectedFolder ? 'bg-white/[0.06] text-white/50' : 'text-white/25 hover:text-white/40'
            }`}
          >
            <FolderOpen className="w-3 h-3" aria-hidden="true" />
            All
          </button>
          {folders.map(folder => (
            <button
              key={folder}
              onClick={() => setSelectedFolder(folder)}
              role="tab"
              aria-selected={selectedFolder === folder}
              className={`flex items-center gap-1 px-2 py-1 rounded text-[10px] transition-colors shrink-0 ${
                selectedFolder === folder ? 'bg-white/[0.06] text-white/50' : 'text-white/25 hover:text-white/40'
              }`}
            >
              <Folder className="w-3 h-3" aria-hidden="true" />
              {folder}
            </button>
          ))}
        </div>
      )}

      {/* Documents List */}
      <div className="flex-1 overflow-y-auto p-3">
        {filteredDocuments.length === 0 ? (
          <div className="h-full flex items-center justify-center">
            <div className="text-center">
              <div className="w-10 h-10 mx-auto mb-3 rounded-full bg-white/[0.02] flex items-center justify-center">
                <FileText className="w-4 h-4 text-white/15" />
              </div>
              <p className="text-[11px] text-white/25">No documents found</p>
              <button
                onClick={() => setShowUploadModal(true)}
                className="mt-2 text-[10px] text-blood-400/60 hover:text-blood-400/80 transition-colors"
              >
                Upload a file
              </button>
            </div>
          </div>
        ) : selectedFolder ? (
          <div className="space-y-1">
            {filteredDocuments.map((doc, index) => (
              <DocumentItem key={doc.id} document={doc} index={index} getFileIcon={getFileIcon} formatFileSize={formatFileSize} />
            ))}
          </div>
        ) : (
          <div className="space-y-4">
            {Object.entries(groupedByFolder).map(([folder, docs]) => (
              <div key={folder}>
                <div className="flex items-center gap-2 mb-2 px-1">
                  <Folder className="w-3 h-3 text-white/20" />
                  <span className="text-[10px] font-medium text-white/30 uppercase tracking-wider">{folder}</span>
                  <span className="text-[9px] text-white/15">{docs.length}</span>
                </div>
                <div className="space-y-0.5">
                  {docs.map((doc, index) => (
                    <DocumentItem key={doc.id} document={doc} index={index} getFileIcon={getFileIcon} formatFileSize={formatFileSize} />
                  ))}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Upload Modal */}
      {showUploadModal && (
        <UploadModal 
          onClose={() => setShowUploadModal(false)}
          onUpload={(doc) => {
            onUpload?.(doc);
            setShowUploadModal(false);
          }}
          folders={folders}
        />
      )}
    </div>
  );
}

interface DocumentItemProps {
  document: WorkspaceDocument;
  index: number;
  getFileIcon: (type: string) => React.ReactNode;
  formatFileSize: (bytes: number) => string;
}

function DocumentItem({ document, index, getFileIcon, formatFileSize }: DocumentItemProps) {
  const [showActions, setShowActions] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, x: -4 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: index * 0.02 }}
      className="group flex items-center gap-3 p-2 rounded hover:bg-white/[0.02] transition-colors cursor-pointer"
      onMouseEnter={() => setShowActions(true)}
      onMouseLeave={() => setShowActions(false)}
    >
      <div className="w-8 h-8 rounded bg-white/[0.03] flex items-center justify-center text-white/25">
        {getFileIcon(document.type)}
      </div>
      
      <div className="flex-1 min-w-0">
        <h4 className="text-[11px] font-medium text-white/60 truncate">{document.name}</h4>
        <div className="flex items-center gap-2 text-[9px] text-white/25">
          <span>{formatFileSize(document.size)}</span>
          <span>·</span>
          <span>{new Date(document.uploadedAt).toLocaleDateString()}</span>
        </div>
      </div>

      <div className={`flex items-center gap-1 transition-opacity ${showActions ? 'opacity-100' : 'opacity-0'}`}>
        <button 
          className="p-1.5 rounded hover:bg-white/[0.04] text-white/25 hover:text-white/40 transition-colors"
          aria-label={`Download ${document.name}`}
        >
          <Download className="w-3 h-3" aria-hidden="true" />
        </button>
        <button 
          className="p-1.5 rounded hover:bg-white/[0.04] text-white/25 hover:text-white/40 transition-colors"
          aria-label={`More options for ${document.name}`}
        >
          <MoreHorizontal className="w-3 h-3" aria-hidden="true" />
        </button>
      </div>
    </motion.div>
  );
}

interface UploadModalProps {
  onClose: () => void;
  onUpload: (doc: Omit<WorkspaceDocument, 'id' | 'uploadedAt'>) => void;
  folders: string[];
}

function UploadModal({ onClose, onUpload, folders }: UploadModalProps) {
  const [name, setName] = useState('');
  const [folder, setFolder] = useState('');
  const [newFolder, setNewFolder] = useState('');
  const [isDragging, setIsDragging] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim()) return;

    onUpload({
      name: name.trim(),
      type: 'application/pdf',
      size: Math.floor(Math.random() * 5000000) + 100000,
      url: '#',
      uploadedBy: '1',
      uploadedByName: 'You',
      folder: newFolder.trim() || folder || undefined,
      category: 'general',
      downloads: 0,
      isPublic: false,
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
          <h3 className="text-xs font-medium text-white/50 uppercase tracking-widest">Upload Document</h3>
          <button onClick={onClose} className="p-1 text-white/30 hover:text-white/50 transition-colors">
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Drop Zone */}
        <div
          className={`border-2 border-dashed rounded-lg p-6 text-center mb-4 transition-colors ${
            isDragging ? 'border-blood-500/50 bg-blood-500/5' : 'border-white/[0.08] hover:border-white/[0.12]'
          }`}
          onDragOver={(e) => { e.preventDefault(); setIsDragging(true); }}
          onDragLeave={() => setIsDragging(false)}
          onDrop={(e) => { e.preventDefault(); setIsDragging(false); }}
        >
          <Upload className="w-6 h-6 mx-auto mb-2 text-white/20" />
          <p className="text-[11px] text-white/40 mb-1">Drop files here or click to browse</p>
          <p className="text-[9px] text-white/20">PDF, DOC, XLS, Images up to 50MB</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-3">
          <div>
            <label className="block text-[10px] text-white/30 uppercase tracking-wider mb-1">File Name</label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Document name..."
              className="w-full px-3 py-2 bg-white/[0.02] border border-white/[0.06] rounded text-[11px] text-white/70 placeholder-white/20 focus:outline-none focus:border-white/[0.1] transition-colors"
              required
            />
          </div>

          <div>
            <label className="block text-[10px] text-white/30 uppercase tracking-wider mb-1">Folder</label>
            <select
              value={folder}
              onChange={(e) => setFolder(e.target.value)}
              className="w-full px-3 py-2 bg-white/[0.02] border border-white/[0.06] rounded text-[11px] text-white/50 focus:outline-none cursor-pointer mb-2"
            >
              <option value="" className="bg-[#0a0a0a]">Select folder...</option>
              {folders.map(f => (
                <option key={f} value={f} className="bg-[#0a0a0a]">{f}</option>
              ))}
            </select>
            <input
              type="text"
              value={newFolder}
              onChange={(e) => setNewFolder(e.target.value)}
              placeholder="Or create new folder..."
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
              Upload
            </button>
          </div>
        </form>
      </motion.div>
    </motion.div>
  );
}
