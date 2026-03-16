'use client';

import { useState, useCallback, useMemo } from 'react';
import Image from 'next/image';
import { motion, Reorder, AnimatePresence } from 'framer-motion';
import {
 Plus,
 MoreVertical,
 GripVertical,
 X,
 Pencil,
 Trash2,
 Archive,
 Clock,
 User,
 Tag,
 Calendar,
 CheckSquare,
 Filter,
 Search,
} from 'lucide-react';
import { cn } from '@/lib/utils';

// ============================================================
// Types
// ============================================================

interface KanbanCard {
 id: string;
 title: string;
 description?: string;
 assignee?: {
 id: string;
 name: string;
 avatar?: string;
 };
 dueDate?: Date;
 labels?: Array<{
 id: string;
 name: string;
 color: string;
 }>;
 priority?: 'low' | 'medium' | 'high' | 'critical';
 completed?: boolean;
 createdAt: Date;
}

interface KanbanColumn {
 id: string;
 title: string;
 color?: string;
 cards: KanbanCard[];
 limit?: number;
}

interface KanbanBoardProps {
 columns: KanbanColumn[];
 onColumnsChange: (columns: KanbanColumn[]) => void;
 onCardClick?: (card: KanbanCard, columnId: string) => void;
 onAddCard?: (columnId: string) => void;
 onAddColumn?: () => void;
 onDeleteColumn?: (columnId: string) => void;
 onEditColumn?: (column: KanbanColumn) => void;
 showSearch?: boolean;
 showFilters?: boolean;
 className?: string;
}

// ============================================================
// Priority Colors
// ============================================================

const priorityColors = {
 low: 'bg-blood-500/20 text-blood-400 border-blood-500/50',
 medium: 'bg-zinc-400/20 text-zinc-300 border-zinc-400/50',
 high: 'bg-blood-700/20 text-blood-600 border-blood-700/50',
 critical: 'bg-blood-500/20 text-blood-400 border-blood-500/50',
};

// ============================================================
// Card Component
// ============================================================

interface KanbanCardItemProps {
 card: KanbanCard;
 onClick?: () => void;
}

function KanbanCardItem({ card, onClick }: KanbanCardItemProps) {
 const [showMenu, setShowMenu] = useState(false);

 const isOverdue = card.dueDate && new Date(card.dueDate) < new Date() && !card.completed;

 return (
 <motion.div
 layout
 layoutId={card.id}
 initial={{ opacity: 0, y: 10 }}
 animate={{ opacity: 1, y: 0 }}
 exit={{ opacity: 0, scale: 0.9 }}
 whileHover={{ scale: 1.02 }}
 className={cn(
 'bg-[rgba(0,12,32,0.85)] border border-[rgba(60,160,255,0.18)] p-3 cursor-pointer group',
 'hover:border-zinc-600 transition-colors'
 )}
 onClick={onClick}
 >
 {/* Priority indicator */}
 {card.priority && (
 <div
 className={cn(
 'text-[10px] px-1.5 py-0.5 border inline-block mb-2',
 priorityColors[card.priority]
 )}
 >
 {card.priority.toUpperCase()}
 </div>
 )}

 {/* Title */}
 <h4 className="text-sm font-medium text-white mb-1 line-clamp-2">
 {card.title}
 </h4>

 {/* Description */}
 {card.description && (
 <p className="text-xs text-zinc-500 mb-2 line-clamp-2">
 {card.description}
 </p>
 )}

 {/* Labels */}
 {card.labels && card.labels.length > 0 && (
 <div className="flex flex-wrap gap-1 mb-2">
 {card.labels.map((label) => (
 <span
 key={label.id}
 className="text-[10px] px-1.5 py-0.5"
 style={{ backgroundColor: `${label.color}30`, color: label.color }}
 >
 {label.name}
 </span>
 ))}
 </div>
 )}

 {/* Footer */}
 <div className="flex items-center justify-between mt-2 pt-2 border-t border-[rgba(60,160,255,0.18)]">
 {/* Due date */}
 {card.dueDate && (
 <div
 className={cn(
 'flex items-center gap-1 text-xs',
 isOverdue ? 'text-blood-400' : 'text-zinc-500'
 )}
 >
 <Calendar className="w-3 h-3"/>
 {new Date(card.dueDate).toLocaleDateString()}
 </div>
 )}

 {/* Assignee */}
 {card.assignee && (
 <div className="flex items-center gap-1">
 {card.assignee.avatar ? (
 <Image
 src={card.assignee.avatar}
 alt={card.assignee.name}
 width={20}
 height={20}
 className="w-5 h-5"
 />
 ) : (
 <div className="w-5 h-5 bg-zinc-700 flex items-center justify-center">
 <User className="w-3 h-3 text-zinc-400"/>
 </div>
 )}
 </div>
 )}

 {/* Completed indicator */}
 {card.completed && (
 <CheckSquare className="w-4 h-4 text-blood-500"/>
 )}
 </div>

 {/* Drag handle */}
 <div className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity">
 <GripVertical className="w-4 h-4 text-zinc-500"/>
 </div>
 </motion.div>
 );
}

// ============================================================
// Column Component
// ============================================================

interface KanbanColumnProps {
 column: KanbanColumn;
 onCardsReorder: (cards: KanbanCard[]) => void;
 onCardClick?: (card: KanbanCard) => void;
 onAddCard?: () => void;
 onEdit?: () => void;
 onDelete?: () => void;
}

function KanbanColumnComponent({
 column,
 onCardsReorder,
 onCardClick,
 onAddCard,
 onEdit,
 onDelete,
}: KanbanColumnProps) {
 const [showMenu, setShowMenu] = useState(false);

 const isAtLimit = column.limit !== undefined && column.limit > 0 && column.cards.length >= column.limit;

 return (
 <div className="flex-shrink-0 w-72 bg-[rgba(0,10,28,0.85)] border border-[rgba(80,180,255,0.15)] flex flex-col">
 {/* Header */}
 <div className="flex items-center justify-between p-3 border-b border-[rgba(80,180,255,0.15)]">
 <div className="flex items-center gap-2">
 {column.color && (
 <div
 className="w-3 h-3"
 style={{ backgroundColor: column.color }}
 />
 )}
 <h3 className="font-medium text-white text-sm">{column.title}</h3>
 <span className="text-xs text-zinc-500 bg-[rgba(0,12,32,0.85)] px-1.5 py-0.5">
 {column.cards.length}
 {column.limit && `/${column.limit}`}
 </span>
 </div>

 <div className="relative">
 <button
 onClick={() => setShowMenu(!showMenu)}
 className="p-1 text-zinc-400 hover:text-white transition-colors"
 >
 <MoreVertical className="w-4 h-4"/>
 </button>

 <AnimatePresence>
 {showMenu && (
 <motion.div
 initial={{ opacity: 0, scale: 0.95 }}
 animate={{ opacity: 1, scale: 1 }}
 exit={{ opacity: 0, scale: 0.95 }}
 className="absolute right-0 top-full mt-1 w-36 bg-[rgba(0,12,32,0.85)] border border-[rgba(60,160,255,0.18)] shadow-lg z-10"
 >
 <button
 onClick={() => {
 onEdit?.();
 setShowMenu(false);
 }}
 className="w-full flex items-center gap-2 px-3 py-2 text-sm text-zinc-300 hover:bg-zinc-700"
 >
 <Pencil className="w-3.5 h-3.5"/>
 Edit
 </button>
 <button
 onClick={() => {
 onDelete?.();
 setShowMenu(false);
 }}
 className="w-full flex items-center gap-2 px-3 py-2 text-sm text-blood-400 hover:bg-zinc-700"
 >
 <Trash2 className="w-3.5 h-3.5"/>
 Delete
 </button>
 </motion.div>
 )}
 </AnimatePresence>
 </div>
 </div>

 {/* Cards */}
 <div className="flex-1 p-2 space-y-2 overflow-y-auto max-h-[500px]">
 <Reorder.Group
 axis="y"
 values={column.cards}
 onReorder={onCardsReorder}
 className="space-y-2"
 >
 {column.cards.map((card) => (
 <Reorder.Item key={card.id} value={card}>
 <KanbanCardItem
 card={card}
 onClick={() => onCardClick?.(card)}
 />
 </Reorder.Item>
 ))}
 </Reorder.Group>

 {/* Empty state */}
 {column.cards.length === 0 && (
 <div className="text-center py-8 text-zinc-600 text-sm">
 No cards
 </div>
 )}
 </div>

 {/* Add card button */}
 <div className="p-2 border-t border-[rgba(80,180,255,0.15)]">
 <button
 onClick={onAddCard}
 disabled={isAtLimit}
 className={cn(
 'w-full flex items-center justify-center gap-2 py-2 text-sm transition-colors',
 isAtLimit
 ? 'text-zinc-600 cursor-not-allowed'
 : 'text-zinc-400 hover:text-white hover:bg-[rgba(0,12,32,0.85)]'
 )}
 >
 <Plus className="w-4 h-4"/>
 Add Card
 </button>
 </div>
 </div>
 );
}

// ============================================================
// Main Component
// ============================================================

export default function KanbanBoard({
 columns,
 onColumnsChange,
 onCardClick,
 onAddCard,
 onAddColumn,
 onDeleteColumn,
 onEditColumn,
 showSearch = true,
 showFilters = true,
 className,
}: KanbanBoardProps) {
 const [searchQuery, setSearchQuery] = useState('');
 const [priorityFilter, setPriorityFilter] = useState<string | null>(null);

 // Filter cards
 const filteredColumns = useMemo(() => {
 return columns.map((column) => ({
 ...column,
 cards: column.cards.filter((card) => {
 const matchesSearch =
 !searchQuery ||
 card.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
 card.description?.toLowerCase().includes(searchQuery.toLowerCase());
 
 const matchesPriority =
 !priorityFilter || card.priority === priorityFilter;

 return matchesSearch && matchesPriority;
 }),
 }));
 }, [columns, searchQuery, priorityFilter]);

 // Handle card reorder within a column
 const handleCardsReorder = (columnId: string, cards: KanbanCard[]) => {
 const newColumns = columns.map((col) =>
 col.id === columnId ? { ...col, cards } : col
 );
 onColumnsChange(newColumns);
 };

 return (
 <div className={cn('flex flex-col h-full', className)}>
 {/* Toolbar */}
 {(showSearch || showFilters) && (
 <div className="flex items-center gap-4 p-4 border-b border-[rgba(80,180,255,0.15)] bg-[rgba(0,10,28,0.82)]">
 {showSearch && (
 <div className="flex items-center gap-2 flex-1 max-w-xs bg-[rgba(0,12,32,0.85)] px-3 py-1.5">
 <Search className="w-4 h-4 text-zinc-500"/>
 <input
 type="text"
 value={searchQuery}
 onChange={(e) => setSearchQuery(e.target.value)}
 placeholder="Search cards..."
 className="flex-1 bg-transparent text-sm text-white placeholder-zinc-500 focus:outline-none"
 />
 </div>
 )}

 {showFilters && (
 <div className="flex items-center gap-2">
 <Filter className="w-4 h-4 text-zinc-500"/>
 <select
 value={priorityFilter || ''}
 onChange={(e) => setPriorityFilter(e.target.value || null)}
 className="bg-[rgba(0,12,32,0.85)] text-sm text-white px-3 py-1.5 focus:outline-none focus:ring-1 focus:ring-blood-500"
 >
 <option value="">All Priorities</option>
 <option value="critical">Critical</option>
 <option value="high">High</option>
 <option value="medium">Medium</option>
 <option value="low">Low</option>
 </select>
 </div>
 )}
 </div>
 )}

 {/* Board */}
 <div className="flex-1 overflow-x-auto p-4">
 <div className="flex gap-4 h-full">
 {filteredColumns.map((column) => (
 <KanbanColumnComponent
 key={column.id}
 column={column}
 onCardsReorder={(cards) => handleCardsReorder(column.id, cards)}
 onCardClick={(card) => onCardClick?.(card, column.id)}
 onAddCard={() => onAddCard?.(column.id)}
 onEdit={() => onEditColumn?.(column)}
 onDelete={() => onDeleteColumn?.(column.id)}
 />
 ))}

 {/* Add column button */}
 {onAddColumn && (
 <button
 onClick={onAddColumn}
 className="flex-shrink-0 w-72 h-full min-h-[200px] border-2 border-dashed border-[rgba(60,160,255,0.18)] hover:border-zinc-600 flex items-center justify-center text-zinc-500 hover:text-zinc-400 transition-colors"
 >
 <Plus className="w-6 h-6"/>
 </button>
 )}
 </div>
 </div>
 </div>
 );
}

export { KanbanBoard };
export type { KanbanCard, KanbanColumn };
