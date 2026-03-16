'use client';

import { useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import {
 Bookmark,
 BookmarkCheck,
 Target,
 Users,
 Search,
 Trash2,
 ExternalLink,
 Clock,
 AlertTriangle,
 UserPlus,
} from 'lucide-react';
import { formatDistanceToNow } from 'date-fns';
import { useContributorStore } from '@/store/contributorStore';
import type { BookmarkedPage } from '@/store/contributorStore';
import { GlitchText } from '@/components/effects/GlitchText';

const typeIcons: Record<string, React.ReactNode> = {
 investigation: <Target className="w-4 h-4"/>,
 entity: <Users className="w-4 h-4"/>,
};

const severityColors: Record<string, string> = {
 critical: 'text-blood-400 bg-blood-600/20 border-blood-600/30',
 high: 'text-blood-500 bg-blood-700/20 border-blood-700/30',
 medium: 'text-blood-500 bg-blood-600/20 border-blood-600/30',
 low: 'text-blood-400 bg-blood-500/20 border-blood-500/30',
};

function SavedPageCard({
 item,
 onRemove,
}: {
 item: BookmarkedPage;
 onRemove: (href: string) => void;
}) {
 return (
 <motion.div
 layout
 initial={{ opacity: 0, y: 20 }}
 animate={{ opacity: 1, y: 0 }}
 exit={{ opacity: 0, scale: 0.95 }}
 className="glass-card p-5 group"
 >
 <div className="flex items-start justify-between mb-3">
 <div className="flex items-center gap-2">
 <div className="p-1.5 bg-zinc-800 text-zinc-400">
 {typeIcons[item.type] || <Bookmark className="w-4 h-4"/>}
 </div>
 <span className="px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider bg-zinc-800 text-zinc-500">
 {item.type}
 </span>
 {item.severity && (
 <span className={`px-2 py-0.5 text-[10px] font-bold uppercase border ${severityColors[item.severity] || 'text-zinc-400 bg-zinc-800 border-zinc-700'}`}>
 {item.severity}
 </span>
 )}
 </div>
 <button
 onClick={() => onRemove(item.href)}
 className="p-1.5 text-zinc-600 hover:text-blood-500 opacity-0 group-hover:opacity-100 transition-all"
 title="Remove from saved"
 >
 <Trash2 className="w-4 h-4"/>
 </button>
 </div>

 <Link href={item.href} className="block group/link">
 <h3 className="text-white font-semibold mb-1 group-hover/link:text-blood-500 transition-colors line-clamp-2">
 {item.title}
 </h3>
 {item.category && (
 <p className="text-zinc-500 text-xs mb-3">{item.category}</p>
 )}
 </Link>

 <div className="flex items-center justify-between pt-3 border-t border-zinc-800 text-xs text-zinc-500">
 <div className="flex items-center gap-1">
 <Clock className="w-3 h-3"/>
 Saved {formatDistanceToNow(new Date(item.savedAt), { addSuffix: true })}
 </div>
 <Link href={item.href} className="flex items-center gap-1 text-zinc-600 hover:text-blood-500 transition-colors">
 <ExternalLink className="w-3 h-3"/>
 Open
 </Link>
 </div>
 </motion.div>
 );
}

export default function SavedPagesPage() {
 const { currentUser, getBookmarks, removeBookmark } = useContributorStore();
 const [searchQuery, setSearchQuery] = useState('');
 const [typeFilter, setTypeFilter] = useState<string>('all');

 // Not signed in
 if (!currentUser) {
 return (
 <div className="min-h-screen pt-20 lg:pt-24 pb-16">
 <div className="max-w-2xl mx-auto px-6 py-12 text-center">
 <div className="w-16 h-16 mx-auto mb-6 border-2 border-zinc-700 flex items-center justify-center">
 <Bookmark className="w-8 h-8 text-zinc-600"/>
 </div>
 <h1 className="text-3xl font-black glass-text mb-3 uppercase tracking-wider">
 <GlitchText text="SAVED PAGES"/>
 </h1>
 <p className="text-zinc-400 mb-8">
 Sign in to save investigations and entities to your personal collection.
 </p>
 <Link
 href="/contributor"
 className="inline-flex items-center gap-2 px-6 py-3 bg-blood-700 hover:bg-blood-600 glass-text font-bold uppercase tracking-wider text-sm transition-colors"
 >
 <UserPlus className="w-4 h-4"/>
 Sign In / Create Account
 </Link>
 </div>
 </div>
 );
 }

 const bookmarks = getBookmarks();

 const filteredItems = bookmarks.filter((item) => {
 if (searchQuery) {
 const search = searchQuery.toLowerCase();
 if (!item.title.toLowerCase().includes(search) && !(item.category || '').toLowerCase().includes(search)) {
 return false;
 }
 }
 if (typeFilter !== 'all' && item.type !== typeFilter) return false;
 return true;
 });

 const investigationCount = bookmarks.filter(b => b.type === 'investigation').length;
 const entityCount = bookmarks.filter(b => b.type === 'entity').length;

 return (
 <div className="min-h-screen pt-20 lg:pt-24 pb-16">
 <div className="max-w-6xl mx-auto px-6 py-12">
 {/* Header */}
 <div className="flex items-center justify-between mb-8">
 <div>
 <h1 className="text-2xl sm:text-4xl font-black tracking-tighter text-white mb-2">
 <GlitchText text="SAVED PAGES"/>
 </h1>
 <p className="text-zinc-400">
 {bookmarks.length} saved {bookmarks.length === 1 ? 'item' : 'items'}
 <span className="text-zinc-600 mx-2">|</span>
 <span className="text-zinc-500">{currentUser.email}</span>
 </p>
 </div>
 </div>

 {/* Stats */}
 {bookmarks.length > 0 && (
 <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 mb-8">
 <div className="glass-card p-4 flex items-center gap-4">
 <div className="p-2 bg-zinc-800">
 <BookmarkCheck className="w-5 h-5 text-blood-500"/>
 </div>
 <div>
 <p className="text-white text-xl font-bold">{bookmarks.length}</p>
 <p className="text-zinc-500 text-sm">Total Saved</p>
 </div>
 </div>
 <div className="glass-card p-4 flex items-center gap-4">
 <div className="p-2 bg-zinc-800">
 <Target className="w-5 h-5 text-blood-500"/>
 </div>
 <div>
 <p className="text-white text-xl font-bold">{investigationCount}</p>
 <p className="text-zinc-500 text-sm">Investigations</p>
 </div>
 </div>
 <div className="glass-card p-4 flex items-center gap-4">
 <div className="p-2 bg-zinc-800">
 <Users className="w-5 h-5 text-zinc-400"/>
 </div>
 <div>
 <p className="text-white text-xl font-bold">{entityCount}</p>
 <p className="text-zinc-500 text-sm">Entities</p>
 </div>
 </div>
 </div>
 )}

 {/* Filters */}
 {bookmarks.length > 0 && (
 <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 mb-8">
 <div className="flex-1 relative w-full">
 <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-zinc-500"/>
 <input
 type="text"
 placeholder="Search saved pages..."
 value={searchQuery}
 onChange={(e) => setSearchQuery(e.target.value)}
 className="w-full pl-12 pr-4 py-3 glass text-white placeholder:text-zinc-500 focus:outline-none focus:border-blood-500 text-sm"
 />
 </div>
 <div className="flex items-center gap-2">
 {['all', 'investigation', 'entity'].map((type) => (
 <button
 key={type}
 onClick={() => setTypeFilter(type)}
 className={`px-3 py-1.5 text-xs font-bold uppercase tracking-wider transition-colors ${
 typeFilter === type
 ? 'bg-blood-600 text-white'
 : 'bg-zinc-800 text-zinc-400 hover:text-white'
 }`}
 >
 {type === 'all' ? 'All' : type === 'investigation' ? 'Investigations' : 'Entities'}
 </button>
 ))}
 </div>
 </div>
 )}

 {/* Grid */}
 <AnimatePresence mode="popLayout">
 {filteredItems.length > 0 ? (
 <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
 {filteredItems.map((item) => (
 <SavedPageCard
 key={item.id}
 item={item}
 onRemove={removeBookmark}
 />
 ))}
 </motion.div>
 ) : (
 <motion.div
 initial={{ opacity: 0 }}
 animate={{ opacity: 1 }}
 className="text-center py-16"
 >
 <Bookmark className="w-16 h-16 text-zinc-700 mx-auto mb-4"/>
 <h3 className="text-xl font-semibold text-white mb-2">
 {searchQuery || typeFilter !== 'all' ? 'No matches found' : 'No saved pages yet'}
 </h3>
 <p className="text-zinc-400 mb-6">
 {searchQuery || typeFilter !== 'all'
 ? 'Try adjusting your search or filters'
 : 'Click the Save button on any investigation to add it here'}
 </p>
 <Link
 href="/investigations"
 className="inline-flex items-center gap-2 px-5 py-2.5 border border-zinc-700 text-zinc-300 hover:border-blood-700 hover:text-white text-sm transition-colors"
 >
 <Target className="w-4 h-4"/>
 Browse Investigations
 </Link>
 </motion.div>
 )}
 </AnimatePresence>

 {/* Privacy Note */}
 <div className="mt-12 border border-zinc-800 bg-zinc-900/50 p-4">
 <div className="flex items-start gap-3">
 <AlertTriangle className="w-5 h-5 text-blood-500 flex-shrink-0 mt-0.5"/>
 <div>
 <h3 className="text-sm font-bold glass-text uppercase tracking-wider mb-1">Local Storage Only</h3>
 <p className="text-xs text-zinc-500 leading-relaxed">
 Saved pages are stored in your browser&apos;s local storage. They are tied to your contributor account
 and will persist until you clear your browser data or delete your account.
 No bookmark data is transmitted to our servers.
 </p>
 </div>
 </div>
 </div>
 </div>
 </div>
 );
}
