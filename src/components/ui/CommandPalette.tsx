'use client';

import { useState, useEffect, useCallback, useRef, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useRouter } from 'next/navigation';
import {
  Search,
  Home,
  FileText,
  Users,
  Building2,
  User,
  Clock,
  Send,
  FolderOpen,
  ArrowRight,
  Command,
  X,
} from 'lucide-react';

interface CommandItem {
  id: string;
  title: string;
  description?: string;
  icon: React.ReactNode;
  action: () => void;
  keywords?: string[];
  category: string;
}

interface CommandPaletteProps {
  isOpen: boolean;
  onClose: () => void;
  customCommands?: CommandItem[];
}

export default function CommandPalette({ isOpen, onClose, customCommands = [] }: CommandPaletteProps) {
  const [query, setQuery] = useState('');
  const [selectedIndex, setSelectedIndex] = useState(0);
  const inputRef = useRef<HTMLInputElement>(null);
  const listRef = useRef<HTMLDivElement>(null);
  const router = useRouter();

  // Default navigation commands
  const defaultCommands: CommandItem[] = useMemo(() => [
    {
      id: 'home',
      title: 'Go to Home',
      description: 'Navigate to the home page',
      icon: <Home className="w-4 h-4" />,
      action: () => router.push('/'),
      keywords: ['home', 'main', 'start'],
      category: 'Navigation',
    },
    {
      id: 'investigations',
      title: 'Go to Investigations',
      description: 'View all investigations',
      icon: <FileText className="w-4 h-4" />,
      action: () => router.push('/investigations'),
      keywords: ['investigations', 'cases', 'reports'],
      category: 'Navigation',
    },
    {
      id: 'agencies',
      title: 'Go to Agencies',
      description: 'View government agencies',
      icon: <Building2 className="w-4 h-4" />,
      action: () => router.push('/entities/agencies'),
      keywords: ['agencies', 'government', 'fbi', 'cia', 'nsa'],
      category: 'Navigation',
    },
    {
      id: 'corporations',
      title: 'Go to Corporations',
      description: 'View corporations',
      icon: <Building2 className="w-4 h-4" />,
      action: () => router.push('/entities/corporations'),
      keywords: ['corporations', 'companies', 'business'],
      category: 'Navigation',
    },
    {
      id: 'individuals',
      title: 'Go to Individuals',
      description: 'View individuals of interest',
      icon: <User className="w-4 h-4" />,
      action: () => router.push('/entities/individuals'),
      keywords: ['individuals', 'people', 'persons'],
      category: 'Navigation',
    },
    {
      id: 'entities',
      title: 'Go to All Entities',
      description: 'View all tracked entities',
      icon: <Users className="w-4 h-4" />,
      action: () => router.push('/entities'),
      keywords: ['entities', 'all', 'tracked'],
      category: 'Navigation',
    },
    {
      id: 'timeline',
      title: 'Go to Timeline',
      description: 'View event timeline',
      icon: <Clock className="w-4 h-4" />,
      action: () => router.push('/timeline'),
      keywords: ['timeline', 'events', 'history', 'chronology'],
      category: 'Navigation',
    },
    {
      id: 'workspaces',
      title: 'Go to Workspaces',
      description: 'View collaborative workspaces',
      icon: <FolderOpen className="w-4 h-4" />,
      action: () => router.push('/workspaces'),
      keywords: ['workspaces', 'collaboration', 'teams'],
      category: 'Navigation',
    },
    {
      id: 'submit',
      title: 'Submit Evidence',
      description: 'Submit new information',
      icon: <Send className="w-4 h-4" />,
      action: () => router.push('/submit'),
      keywords: ['submit', 'upload', 'evidence', 'tip', 'leak'],
      category: 'Actions',
    },
  ], [router]);

  // Combine default and custom commands
  const allCommands = useMemo(() => [...defaultCommands, ...customCommands], [defaultCommands, customCommands]);

  // Filter commands based on query
  const filteredCommands = useMemo(() => {
    if (!query.trim()) return allCommands;
    
    const lowerQuery = query.toLowerCase();
    return allCommands.filter((command) => {
      const matchesTitle = command.title.toLowerCase().includes(lowerQuery);
      const matchesDescription = command.description?.toLowerCase().includes(lowerQuery);
      const matchesKeywords = command.keywords?.some(k => k.toLowerCase().includes(lowerQuery));
      return matchesTitle || matchesDescription || matchesKeywords;
    });
  }, [query, allCommands]);

  // Group commands by category
  const groupedCommands = useMemo(() => {
    const groups: Record<string, CommandItem[]> = {};
    filteredCommands.forEach((command) => {
      if (!groups[command.category]) {
        groups[command.category] = [];
      }
      groups[command.category].push(command);
    });
    return groups;
  }, [filteredCommands]);

  // Focus input when opened
  useEffect(() => {
    if (isOpen) {
      inputRef.current?.focus();
      setQuery('');
      setSelectedIndex(0);
    }
  }, [isOpen]);

  // Reset selected index when filtered commands change
  useEffect(() => {
    setSelectedIndex(0);
  }, [filteredCommands]);

  // Scroll selected item into view
  useEffect(() => {
    const selectedElement = listRef.current?.querySelector(`[data-index="${selectedIndex}"]`);
    selectedElement?.scrollIntoView({ block: 'nearest' });
  }, [selectedIndex]);

  const executeCommand = useCallback((command: CommandItem) => {
    command.action();
    onClose();
  }, [onClose]);

  const handleKeyDown = useCallback((e: React.KeyboardEvent) => {
    switch (e.key) {
      case 'ArrowDown':
        e.preventDefault();
        setSelectedIndex((prev) => 
          prev < filteredCommands.length - 1 ? prev + 1 : 0
        );
        break;
      case 'ArrowUp':
        e.preventDefault();
        setSelectedIndex((prev) => 
          prev > 0 ? prev - 1 : filteredCommands.length - 1
        );
        break;
      case 'Enter':
        e.preventDefault();
        if (filteredCommands[selectedIndex]) {
          executeCommand(filteredCommands[selectedIndex]);
        }
        break;
      case 'Escape':
        e.preventDefault();
        onClose();
        break;
    }
  }, [filteredCommands, selectedIndex, executeCommand, onClose]);

  // Global keyboard shortcut to open
  useEffect(() => {
    const handleGlobalKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        if (isOpen) {
          onClose();
        }
      }
    };

    document.addEventListener('keydown', handleGlobalKeyDown);
    return () => document.removeEventListener('keydown', handleGlobalKeyDown);
  }, [isOpen, onClose]);

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50"
            onClick={onClose}
          />

          {/* Command Palette */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: -20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: -20 }}
            transition={{ type: 'spring', stiffness: 500, damping: 30 }}
            className="fixed top-[20%] left-1/2 -translate-x-1/2 w-full max-w-lg z-50"
          >
            <div className="bg-zinc-900 border border-zinc-800 shadow-2xl overflow-hidden">
              {/* Search Input */}
              <div className="flex items-center gap-3 px-4 py-3 border-b border-zinc-800">
                <Search className="w-5 h-5 text-zinc-500" />
                <input
                  ref={inputRef}
                  type="text"
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  onKeyDown={handleKeyDown}
                  placeholder="Search commands..."
                  className="flex-1 bg-transparent text-white placeholder-zinc-500 outline-none text-sm"
                />
                <div className="flex items-center gap-1 text-xs text-zinc-500">
                  <kbd className="px-1.5 py-0.5 bg-zinc-800 border border-zinc-700">esc</kbd>
                </div>
                <button onClick={onClose} className="text-zinc-500 hover:text-white">
                  <X className="w-4 h-4" />
                </button>
              </div>

              {/* Commands List */}
              <div ref={listRef} className="max-h-[300px] overflow-y-auto">
                {filteredCommands.length === 0 ? (
                  <div className="px-4 py-8 text-center text-zinc-500 text-sm">
                    No commands found for &quot;{query}&quot;
                  </div>
                ) : (
                  Object.entries(groupedCommands).map(([category, commands]) => (
                    <div key={category}>
                      <div className="px-4 py-2 text-xs font-semibold text-zinc-500 uppercase tracking-wider bg-zinc-900/50">
                        {category}
                      </div>
                      {commands.map((command) => {
                        const globalIndex = filteredCommands.indexOf(command);
                        const isSelected = globalIndex === selectedIndex;
                        return (
                          <button
                            key={command.id}
                            data-index={globalIndex}
                            onClick={() => executeCommand(command)}
                            className={`
                              w-full flex items-center gap-3 px-4 py-2.5 text-left transition-colors
                              ${isSelected ? 'bg-blood-900/50 text-white' : 'text-zinc-400 hover:bg-zinc-800'}
                            `}
                          >
                            <span className={isSelected ? 'text-blood-500' : 'text-zinc-500'}>
                              {command.icon}
                            </span>
                            <div className="flex-1 min-w-0">
                              <p className="text-sm font-medium truncate">{command.title}</p>
                              {command.description && (
                                <p className="text-xs text-zinc-500 truncate">{command.description}</p>
                              )}
                            </div>
                            {isSelected && (
                              <ArrowRight className="w-4 h-4 text-blood-500" />
                            )}
                          </button>
                        );
                      })}
                    </div>
                  ))
                )}
              </div>

              {/* Footer */}
              <div className="px-4 py-2 border-t border-zinc-800 flex items-center justify-between text-xs text-zinc-500">
                <div className="flex items-center gap-4">
                  <span className="flex items-center gap-1">
                    <kbd className="px-1 py-0.5 bg-zinc-800 border border-zinc-700">↑</kbd>
                    <kbd className="px-1 py-0.5 bg-zinc-800 border border-zinc-700">↓</kbd>
                    to navigate
                  </span>
                  <span className="flex items-center gap-1">
                    <kbd className="px-1 py-0.5 bg-zinc-800 border border-zinc-700">↵</kbd>
                    to select
                  </span>
                </div>
                <div className="flex items-center gap-1">
                  <Command className="w-3 h-3" />
                  <span>K to toggle</span>
                </div>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}

// Hook for managing command palette state
export function useCommandPalette() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        setIsOpen((prev) => !prev);
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, []);

  return {
    isOpen,
    open: () => setIsOpen(true),
    close: () => setIsOpen(false),
    toggle: () => setIsOpen((prev) => !prev),
  };
}
