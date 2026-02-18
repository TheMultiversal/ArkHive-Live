'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Bookmark,
  BookmarkCheck,
  FolderPlus,
  ChevronDown,
  Plus,
  Check,
} from 'lucide-react';
import { cn } from '@/lib/utils';

// ============================================================
// Types
// ============================================================

interface Collection {
  id: string;
  name: string;
  count: number;
}

interface BookmarkButtonProps {
  isBookmarked: boolean;
  onToggle: () => void | Promise<void>;
  collections?: Collection[];
  selectedCollections?: string[];
  onCollectionToggle?: (collectionId: string) => void;
  onCreateCollection?: (name: string) => void;
  showCollections?: boolean;
  size?: 'sm' | 'md' | 'lg';
  variant?: 'icon' | 'button' | 'text';
  className?: string;
}

// ============================================================
// Component
// ============================================================

export default function BookmarkButton({
  isBookmarked,
  onToggle,
  collections = [],
  selectedCollections = [],
  onCollectionToggle,
  onCreateCollection,
  showCollections = false,
  size = 'md',
  variant = 'icon',
  className,
}: BookmarkButtonProps) {
  const [showMenu, setShowMenu] = useState(false);
  const [newCollection, setNewCollection] = useState('');
  const [animating, setAnimating] = useState(false);

  const sizeClasses = {
    sm: variant === 'icon' ? 'p-1' : 'px-2 py-1 text-xs',
    md: variant === 'icon' ? 'p-1.5' : 'px-3 py-1.5 text-sm',
    lg: variant === 'icon' ? 'p-2' : 'px-4 py-2 text-base',
  };

  const iconSizes = {
    sm: 'w-4 h-4',
    md: 'w-5 h-5',
    lg: 'w-6 h-6',
  };

  const handleToggle = async () => {
    setAnimating(true);
    try {
      await onToggle();
    } finally {
      setTimeout(() => setAnimating(false), 400);
    }
  };

  const handleCreateCollection = () => {
    if (newCollection.trim() && onCreateCollection) {
      onCreateCollection(newCollection.trim());
      setNewCollection('');
    }
  };

  const Icon = isBookmarked ? BookmarkCheck : Bookmark;

  return (
    <div className={cn('relative', className)}>
      <div className="flex items-center">
        {/* Main Button */}
        <button
          onClick={handleToggle}
          className={cn(
            'relative flex items-center gap-2 transition-all',
            sizeClasses[size],
            isBookmarked
              ? 'text-blood-500 bg-blood-500/10'
              : 'text-zinc-400 hover:text-blood-500 bg-zinc-800 hover:bg-zinc-700'
          )}
        >
          <motion.div
            animate={animating ? { scale: [1, 1.3, 1] } : {}}
            transition={{ duration: 0.3 }}
          >
            <Icon className={iconSizes[size]} />
          </motion.div>
          
          {variant !== 'icon' && (
            <span>{isBookmarked ? 'Saved' : 'Save'}</span>
          )}

          {/* Pop effect */}
          <AnimatePresence>
            {animating && !isBookmarked && (
              <motion.div
                initial={{ opacity: 1, scale: 0 }}
                animate={{ opacity: 0, scale: 2.5 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
                className="absolute inset-0 bg-blood-500/20"
              />
            )}
          </AnimatePresence>
        </button>

        {/* Collections Dropdown Trigger */}
        {showCollections && collections.length > 0 && (
          <button
            onClick={() => setShowMenu(!showMenu)}
            className={cn(
              'flex items-center transition-colors border-l border-zinc-700',
              sizeClasses[size],
              'text-zinc-400 hover:text-white bg-zinc-800 hover:bg-zinc-700'
            )}
          >
            <ChevronDown className="w-3 h-3" />
          </button>
        )}
      </div>

      {/* Collections Menu */}
      <AnimatePresence>
        {showMenu && (
          <motion.div
            initial={{ opacity: 0, y: -5 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -5 }}
            className="absolute right-0 top-full mt-2 w-56 bg-zinc-800 border border-zinc-700 shadow-xl z-20"
          >
            <div className="p-2 border-b border-zinc-700">
              <p className="text-xs text-zinc-500 uppercase tracking-wider px-2 mb-2">
                Add to Collection
              </p>
              
              {collections.map((collection) => (
                <button
                  key={collection.id}
                  onClick={() => onCollectionToggle?.(collection.id)}
                  className="w-full flex items-center justify-between px-2 py-1.5 text-sm text-zinc-300 hover:bg-zinc-700 transition-colors"
                >
                  <span>{collection.name}</span>
                  <div className="flex items-center gap-2">
                    <span className="text-xs text-zinc-500">{collection.count}</span>
                    {selectedCollections.includes(collection.id) && (
                      <Check className="w-4 h-4 text-green-500" />
                    )}
                  </div>
                </button>
              ))}
            </div>

            {/* Create New Collection */}
            {onCreateCollection && (
              <div className="p-2">
                <div className="flex items-center gap-2">
                  <input
                    type="text"
                    value={newCollection}
                    onChange={(e) => setNewCollection(e.target.value)}
                    onKeyDown={(e) => e.key === 'Enter' && handleCreateCollection()}
                    placeholder="New collection..."
                    className="flex-1 px-2 py-1.5 text-sm bg-zinc-900 border border-zinc-700 text-white placeholder-zinc-500 focus:outline-none focus:border-blood-500"
                  />
                  <button
                    onClick={handleCreateCollection}
                    disabled={!newCollection.trim()}
                    className="p-1.5 text-zinc-400 hover:text-white bg-zinc-700 hover:bg-zinc-600 disabled:opacity-50 transition-colors"
                  >
                    <Plus className="w-4 h-4" />
                  </button>
                </div>
              </div>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

// ============================================================
// Simple Bookmark Toggle
// ============================================================

interface SimpleBookmarkProps {
  isBookmarked: boolean;
  onToggle: () => void;
  count?: number;
  showCount?: boolean;
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

export function SimpleBookmark({
  isBookmarked,
  onToggle,
  count,
  showCount = false,
  size = 'md',
  className,
}: SimpleBookmarkProps) {
  const iconSizes = {
    sm: 'w-4 h-4',
    md: 'w-5 h-5',
    lg: 'w-6 h-6',
  };

  return (
    <button
      onClick={onToggle}
      className={cn(
        'flex items-center gap-1.5 transition-colors',
        isBookmarked
          ? 'text-blood-500'
          : 'text-zinc-500 hover:text-blood-500',
        className
      )}
    >
      {isBookmarked ? (
        <BookmarkCheck className={iconSizes[size]} />
      ) : (
        <Bookmark className={iconSizes[size]} />
      )}
      {showCount && count !== undefined && (
        <span className="text-sm">{count}</span>
      )}
    </button>
  );
}

export { BookmarkButton };
