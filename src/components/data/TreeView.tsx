'use client';

import { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  ChevronRight,
  ChevronDown,
  Folder,
  FolderOpen,
  File,
  FileText,
  FileCode,
  FileImage,
  FileVideo,
  FileAudio,
  FilePlus,
  FolderPlus,
  Trash2,
  Pencil,
  Copy,
  MoreVertical,
  Search,
  Filter,
  SortAsc,
} from 'lucide-react';
import { cn } from '@/lib/utils';

// ============================================================
// Types
// ============================================================

interface TreeNode {
  id: string;
  name: string;
  type: 'file' | 'folder';
  children?: TreeNode[];
  icon?: React.ReactNode;
  metadata?: Record<string, unknown>;
  disabled?: boolean;
}

interface TreeViewProps {
  data: TreeNode[];
  selectedId?: string | null;
  expandedIds?: string[];
  onSelect?: (node: TreeNode) => void;
  onExpand?: (id: string, isExpanded: boolean) => void;
  onRename?: (node: TreeNode, newName: string) => void;
  onDelete?: (node: TreeNode) => void;
  onDuplicate?: (node: TreeNode) => void;
  onCreateFile?: (parentId: string | null) => void;
  onCreateFolder?: (parentId: string | null) => void;
  showSearch?: boolean;
  showActions?: boolean;
  multiSelect?: boolean;
  className?: string;
}

// ============================================================
// File Type Icons
// ============================================================

const getFileIcon = (filename: string): typeof File => {
  const ext = filename.split('.').pop()?.toLowerCase();
  
  const iconMap: Record<string, typeof File> = {
    // Code
    js: FileCode,
    jsx: FileCode,
    ts: FileCode,
    tsx: FileCode,
    py: FileCode,
    rs: FileCode,
    go: FileCode,
    java: FileCode,
    cpp: FileCode,
    c: FileCode,
    html: FileCode,
    css: FileCode,
    json: FileCode,
    xml: FileCode,
    yaml: FileCode,
    yml: FileCode,
    // Text
    md: FileText,
    txt: FileText,
    doc: FileText,
    docx: FileText,
    pdf: FileText,
    // Images
    png: FileImage,
    jpg: FileImage,
    jpeg: FileImage,
    gif: FileImage,
    svg: FileImage,
    webp: FileImage,
    // Video
    mp4: FileVideo,
    webm: FileVideo,
    mov: FileVideo,
    avi: FileVideo,
    // Audio
    mp3: FileAudio,
    wav: FileAudio,
    ogg: FileAudio,
    flac: FileAudio,
  };

  return iconMap[ext || ''] || File;
};

// ============================================================
// TreeNode Component
// ============================================================

interface TreeNodeItemProps {
  node: TreeNode;
  depth: number;
  isSelected: boolean;
  isExpanded: boolean;
  onSelect: () => void;
  onToggle: () => void;
  onRename?: (newName: string) => void;
  onDelete?: () => void;
  onDuplicate?: () => void;
  onCreateFile?: () => void;
  onCreateFolder?: () => void;
  showActions: boolean;
  renderChildren: () => React.ReactNode;
}

function TreeNodeItem({
  node,
  depth,
  isSelected,
  isExpanded,
  onSelect,
  onToggle,
  onRename,
  onDelete,
  onDuplicate,
  onCreateFile,
  onCreateFolder,
  showActions,
  renderChildren,
}: TreeNodeItemProps) {
  const [isEditing, setIsEditing] = useState(false);
  const [editName, setEditName] = useState(node.name);
  const [showMenu, setShowMenu] = useState(false);

  const isFolder = node.type === 'folder';
  const FileIcon = isFolder ? (isExpanded ? FolderOpen : Folder) : getFileIcon(node.name);

  const handleRename = () => {
    if (editName.trim() && editName !== node.name) {
      onRename?.(editName.trim());
    }
    setIsEditing(false);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleRename();
    } else if (e.key === 'Escape') {
      setEditName(node.name);
      setIsEditing(false);
    }
  };

  return (
    <div>
      <div
        className={cn(
          'flex items-center gap-1 py-1 px-2 cursor-pointer transition-colors group',
          isSelected
            ? 'bg-blood-500/20 text-blood-400'
            : 'text-zinc-400 hover:bg-zinc-800 hover:text-white',
          node.disabled && 'opacity-50 cursor-not-allowed'
        )}
        style={{ paddingLeft: `${depth * 16 + 8}px` }}
        onClick={() => {
          if (node.disabled) return;
          onSelect();
          if (isFolder) onToggle();
        }}
      >
        {/* Expand/Collapse */}
        {isFolder ? (
          <button
            onClick={(e) => {
              e.stopPropagation();
              onToggle();
            }}
            className="p-0.5 hover:bg-zinc-700 transition-colors"
          >
            {isExpanded ? (
              <ChevronDown className="w-3.5 h-3.5" />
            ) : (
              <ChevronRight className="w-3.5 h-3.5" />
            )}
          </button>
        ) : (
          <span className="w-4" />
        )}

        {/* Icon */}
        {node.icon || (
          <FileIcon
            className={cn(
              'w-4 h-4 flex-shrink-0',
              isFolder ? 'text-yellow-500' : 'text-zinc-500'
            )}
          />
        )}

        {/* Name */}
        {isEditing ? (
          <input
            type="text"
            value={editName}
            onChange={(e) => setEditName(e.target.value)}
            onBlur={handleRename}
            onKeyDown={handleKeyDown}
            className="flex-1 px-1 bg-zinc-800 border border-blood-500 text-white text-sm focus:outline-none"
            autoFocus
            onClick={(e) => e.stopPropagation()}
          />
        ) : (
          <span className="flex-1 text-sm truncate">{node.name}</span>
        )}

        {/* Actions */}
        {showActions && !isEditing && (
          <div className="relative opacity-0 group-hover:opacity-100 transition-opacity">
            <button
              onClick={(e) => {
                e.stopPropagation();
                setShowMenu(!showMenu);
              }}
              className="p-1 hover:bg-zinc-700 transition-colors"
            >
              <MoreVertical className="w-3.5 h-3.5" />
            </button>

            <AnimatePresence>
              {showMenu && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  className="absolute right-0 top-full mt-1 w-36 bg-zinc-800 border border-zinc-700 shadow-lg z-10"
                  onClick={(e) => e.stopPropagation()}
                >
                  {isFolder && (
                    <>
                      <button
                        onClick={() => {
                          onCreateFile?.();
                          setShowMenu(false);
                        }}
                        className="w-full flex items-center gap-2 px-3 py-1.5 text-sm text-zinc-300 hover:bg-zinc-700"
                      >
                        <FilePlus className="w-3.5 h-3.5" />
                        New File
                      </button>
                      <button
                        onClick={() => {
                          onCreateFolder?.();
                          setShowMenu(false);
                        }}
                        className="w-full flex items-center gap-2 px-3 py-1.5 text-sm text-zinc-300 hover:bg-zinc-700"
                      >
                        <FolderPlus className="w-3.5 h-3.5" />
                        New Folder
                      </button>
                      <div className="border-t border-zinc-700 my-1" />
                    </>
                  )}
                  <button
                    onClick={() => {
                      setIsEditing(true);
                      setShowMenu(false);
                    }}
                    className="w-full flex items-center gap-2 px-3 py-1.5 text-sm text-zinc-300 hover:bg-zinc-700"
                  >
                    <Pencil className="w-3.5 h-3.5" />
                    Rename
                  </button>
                  <button
                    onClick={() => {
                      onDuplicate?.();
                      setShowMenu(false);
                    }}
                    className="w-full flex items-center gap-2 px-3 py-1.5 text-sm text-zinc-300 hover:bg-zinc-700"
                  >
                    <Copy className="w-3.5 h-3.5" />
                    Duplicate
                  </button>
                  <div className="border-t border-zinc-700 my-1" />
                  <button
                    onClick={() => {
                      onDelete?.();
                      setShowMenu(false);
                    }}
                    className="w-full flex items-center gap-2 px-3 py-1.5 text-sm text-red-400 hover:bg-zinc-700"
                  >
                    <Trash2 className="w-3.5 h-3.5" />
                    Delete
                  </button>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        )}
      </div>

      {/* Children */}
      <AnimatePresence>
        {isFolder && isExpanded && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.15 }}
          >
            {renderChildren()}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

// ============================================================
// Main Component
// ============================================================

export default function TreeView({
  data,
  selectedId,
  expandedIds: controlledExpandedIds,
  onSelect,
  onExpand,
  onRename,
  onDelete,
  onDuplicate,
  onCreateFile,
  onCreateFolder,
  showSearch = false,
  showActions = true,
  multiSelect = false,
  className,
}: TreeViewProps) {
  const [localExpandedIds, setLocalExpandedIds] = useState<Set<string>>(new Set());
  const [searchQuery, setSearchQuery] = useState('');

  // Use controlled or local expanded state
  const expandedIds = useMemo(() => {
    return controlledExpandedIds
      ? new Set(controlledExpandedIds)
      : localExpandedIds;
  }, [controlledExpandedIds, localExpandedIds]);

  const toggleExpand = (id: string) => {
    const newExpanded = new Set(expandedIds);
    const isExpanded = newExpanded.has(id);
    
    if (isExpanded) {
      newExpanded.delete(id);
    } else {
      newExpanded.add(id);
    }
    
    if (!controlledExpandedIds) {
      setLocalExpandedIds(newExpanded);
    }
    onExpand?.(id, !isExpanded);
  };

  // Filter nodes by search
  const filteredData = useMemo(() => {
    const filterNodes = (nodes: TreeNode[]): TreeNode[] => {
      if (!searchQuery) return nodes;
      
      return nodes
        .map((node) => {
          if (node.type === 'folder' && node.children) {
            const filteredChildren = filterNodes(node.children);
            if (filteredChildren.length > 0) {
              return { ...node, children: filteredChildren };
            }
          }
          
          if (node.name.toLowerCase().includes(searchQuery.toLowerCase())) {
            return node;
          }
          
          return null;
        })
        .filter(Boolean) as TreeNode[];
    };
    
    return filterNodes(data);
  }, [data, searchQuery]);

  // Render tree recursively
  const renderTree = (nodes: TreeNode[], depth: number = 0): React.ReactNode => {
    return nodes.map((node) => (
      <TreeNodeItem
        key={node.id}
        node={node}
        depth={depth}
        isSelected={selectedId === node.id}
        isExpanded={expandedIds.has(node.id)}
        onSelect={() => onSelect?.(node)}
        onToggle={() => toggleExpand(node.id)}
        onRename={onRename ? (name) => onRename(node, name) : undefined}
        onDelete={onDelete ? () => onDelete(node) : undefined}
        onDuplicate={onDuplicate ? () => onDuplicate(node) : undefined}
        onCreateFile={onCreateFile ? () => onCreateFile(node.id) : undefined}
        onCreateFolder={onCreateFolder ? () => onCreateFolder(node.id) : undefined}
        showActions={showActions}
        renderChildren={() =>
          node.children ? renderTree(node.children, depth + 1) : null
        }
      />
    ));
  };

  return (
    <div className={cn('bg-zinc-900 border border-zinc-800', className)}>
      {/* Header */}
      <div className="flex items-center justify-between p-2 border-b border-zinc-800 bg-zinc-800/50">
        {showSearch ? (
          <div className="flex items-center gap-2 flex-1">
            <Search className="w-4 h-4 text-zinc-500" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search files..."
              className="flex-1 bg-transparent text-sm text-white placeholder-zinc-500 focus:outline-none"
            />
          </div>
        ) : (
          <span className="text-sm text-zinc-400">Files</span>
        )}

        {/* Root level actions */}
        {showActions && (
          <div className="flex items-center gap-1">
            <button
              onClick={() => onCreateFile?.(null)}
              className="p-1 text-zinc-400 hover:text-white transition-colors"
              title="New File"
            >
              <FilePlus className="w-4 h-4" />
            </button>
            <button
              onClick={() => onCreateFolder?.(null)}
              className="p-1 text-zinc-400 hover:text-white transition-colors"
              title="New Folder"
            >
              <FolderPlus className="w-4 h-4" />
            </button>
          </div>
        )}
      </div>

      {/* Tree */}
      <div className="overflow-auto max-h-96">
        {filteredData.length > 0 ? (
          renderTree(filteredData)
        ) : (
          <div className="p-4 text-center text-zinc-500 text-sm">
            {searchQuery ? 'No matching files' : 'No files'}
          </div>
        )}
      </div>
    </div>
  );
}

export { TreeView };
