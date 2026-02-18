'use client';

import { useState, useCallback } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import {
  MessageSquare,
  Reply,
  MoreHorizontal,
  Edit,
  Trash2,
  Flag,
  ThumbsUp,
  ThumbsDown,
  ChevronDown,
  ChevronUp,
  Send,
  AlertTriangle,
} from 'lucide-react';
import { cn } from '@/lib/utils';
import { formatDistanceToNow } from 'date-fns';
import type { Comment, CommentVote } from '@/types/comments';

// ============================================================
// Types
// ============================================================

interface CommentSectionProps {
  comments: Comment[];
  currentUserId?: string;
  onAddComment: (content: string, parentId?: string) => Promise<void>;
  onEditComment: (id: string, content: string) => Promise<void>;
  onDeleteComment: (id: string) => Promise<void>;
  onVote: (id: string, vote: CommentVote) => Promise<void>;
  onReport: (id: string, reason: string) => Promise<void>;
  loading?: boolean;
  sortBy?: 'newest' | 'oldest' | 'top';
  onSortChange?: (sort: 'newest' | 'oldest' | 'top') => void;
  maxDepth?: number;
  className?: string;
}

// ============================================================
// Component
// ============================================================

export default function CommentSection({
  comments,
  currentUserId,
  onAddComment,
  onEditComment,
  onDeleteComment,
  onVote,
  onReport,
  loading = false,
  sortBy = 'newest',
  onSortChange,
  maxDepth = 3,
  className,
}: CommentSectionProps) {
  const [newComment, setNewComment] = useState('');
  const [submitting, setSubmitting] = useState(false);
  const [replyingTo, setReplyingTo] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!newComment.trim() || submitting) return;

    setSubmitting(true);
    try {
      await onAddComment(newComment.trim());
      setNewComment('');
    } finally {
      setSubmitting(false);
    }
  };

  // Build comment tree
  const rootComments = comments.filter((c) => !c.parentId);
  const commentMap = new Map(comments.map((c) => [c.id, c]));
  
  const getReplies = (parentId: string): Comment[] => {
    return comments.filter((c) => c.parentId === parentId);
  };

  const sortedRootComments = [...rootComments].sort((a, b) => {
    if (sortBy === 'newest') {
      return new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime();
    }
    if (sortBy === 'oldest') {
      return new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime();
    }
    // top - sort by net votes
    return (b.upvotes - b.downvotes) - (a.upvotes - a.downvotes);
  });

  return (
    <div className={cn('space-y-6', className)}>
      {/* Header */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <MessageSquare className="w-5 h-5 text-blood-500" />
          <h3 className="font-semibold text-white">
            Comments ({comments.length})
          </h3>
        </div>

        {/* Sort */}
        {onSortChange && (
          <div className="flex items-center gap-2">
            <span className="text-xs text-zinc-500">Sort by:</span>
            <select
              value={sortBy}
              onChange={(e) => onSortChange(e.target.value as typeof sortBy)}
              className="px-2 py-1 text-sm bg-zinc-800 border border-zinc-700 text-white focus:outline-none focus:border-blood-500"
            >
              <option value="newest">Newest</option>
              <option value="oldest">Oldest</option>
              <option value="top">Top</option>
            </select>
          </div>
        )}
      </div>

      {/* New Comment Form */}
      <form onSubmit={handleSubmit} className="space-y-3">
        <textarea
          value={newComment}
          onChange={(e) => setNewComment(e.target.value)}
          placeholder="Add a comment..."
          rows={3}
          className="w-full px-4 py-3 bg-zinc-900 border border-zinc-800 text-white placeholder-zinc-500 focus:outline-none focus:border-blood-500 resize-none"
        />
        <div className="flex justify-end">
          <button
            type="submit"
            disabled={!newComment.trim() || submitting}
            className="flex items-center gap-2 px-4 py-2 bg-blood-600 text-white font-medium hover:bg-blood-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <Send className="w-4 h-4" />
            {submitting ? 'Posting...' : 'Post Comment'}
          </button>
        </div>
      </form>

      {/* Comments List */}
      <div className="space-y-4">
        {loading ? (
          <div className="text-center py-8 text-zinc-500">
            Loading comments...
          </div>
        ) : sortedRootComments.length === 0 ? (
          <div className="text-center py-8">
            <MessageSquare className="w-12 h-12 text-zinc-700 mx-auto mb-3" />
            <p className="text-zinc-500">No comments yet. Be the first!</p>
          </div>
        ) : (
          <AnimatePresence initial={false}>
            {sortedRootComments.map((comment) => (
              <CommentItem
                key={comment.id}
                comment={comment}
                currentUserId={currentUserId}
                getReplies={getReplies}
                onAddComment={onAddComment}
                onEditComment={onEditComment}
                onDeleteComment={onDeleteComment}
                onVote={onVote}
                onReport={onReport}
                replyingTo={replyingTo}
                setReplyingTo={setReplyingTo}
                depth={0}
                maxDepth={maxDepth}
              />
            ))}
          </AnimatePresence>
        )}
      </div>
    </div>
  );
}

// ============================================================
// Comment Item
// ============================================================

interface CommentItemProps {
  comment: Comment;
  currentUserId?: string;
  getReplies: (parentId: string) => Comment[];
  onAddComment: (content: string, parentId?: string) => Promise<void>;
  onEditComment: (id: string, content: string) => Promise<void>;
  onDeleteComment: (id: string) => Promise<void>;
  onVote: (id: string, vote: CommentVote) => Promise<void>;
  onReport: (id: string, reason: string) => Promise<void>;
  replyingTo: string | null;
  setReplyingTo: (id: string | null) => void;
  depth: number;
  maxDepth: number;
}

function CommentItem({
  comment,
  currentUserId,
  getReplies,
  onAddComment,
  onEditComment,
  onDeleteComment,
  onVote,
  onReport,
  replyingTo,
  setReplyingTo,
  depth,
  maxDepth,
}: CommentItemProps) {
  const [showReplies, setShowReplies] = useState(true);
  const [editing, setEditing] = useState(false);
  const [editContent, setEditContent] = useState(comment.content);
  const [replyContent, setReplyContent] = useState('');
  const [showMenu, setShowMenu] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const replies = getReplies(comment.id);
  const isOwner = currentUserId === comment.author.id;
  const canReply = depth < maxDepth;
  const timeAgo = formatDistanceToNow(new Date(comment.createdAt), { addSuffix: true });
  const netVotes = comment.upvotes - comment.downvotes;

  const handleReply = async () => {
    if (!replyContent.trim() || submitting) return;
    setSubmitting(true);
    try {
      await onAddComment(replyContent.trim(), comment.id);
      setReplyContent('');
      setReplyingTo(null);
    } finally {
      setSubmitting(false);
    }
  };

  const handleEdit = async () => {
    if (!editContent.trim() || submitting) return;
    setSubmitting(true);
    try {
      await onEditComment(comment.id, editContent.trim());
      setEditing(false);
    } finally {
      setSubmitting(false);
    }
  };

  const handleDelete = async () => {
    if (!confirm('Delete this comment?')) return;
    await onDeleteComment(comment.id);
  };

  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, height: 0 }}
      className={cn(
        'relative',
        depth > 0 && 'ml-6 pl-4 border-l-2 border-zinc-800'
      )}
    >
      <div className={cn(
        'p-4 bg-zinc-900/50',
        comment.deleted && 'opacity-50'
      )}>
        {/* Header */}
        <div className="flex items-start justify-between mb-2">
          <div className="flex items-center gap-2">
            {comment.author.avatar ? (
              <Image
                src={comment.author.avatar}
                alt={comment.author.name}
                width={32}
                height={32}
                className="w-8 h-8 rounded-full"
              />
            ) : (
              <div className="w-8 h-8 bg-zinc-700 rounded-full flex items-center justify-center text-xs font-bold text-zinc-400">
                {comment.author.name.charAt(0).toUpperCase()}
              </div>
            )}
            <div>
              <span className="text-sm font-medium text-white">
                {comment.author.name}
              </span>
              <span className="mx-2 text-zinc-600">·</span>
              <span className="text-xs text-zinc-500">{timeAgo}</span>
              {comment.edited && (
                <span className="ml-2 text-xs text-zinc-600">(edited)</span>
              )}
            </div>
          </div>

          {/* Menu */}
          {!comment.deleted && (
            <div className="relative">
              <button
                onClick={() => setShowMenu(!showMenu)}
                className="p-1 text-zinc-500 hover:text-white transition-colors"
              >
                <MoreHorizontal className="w-4 h-4" />
              </button>
              <AnimatePresence>
                {showMenu && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    className="absolute right-0 top-full mt-1 w-36 bg-zinc-800 border border-zinc-700 shadow-lg z-10"
                  >
                    {isOwner && (
                      <>
                        <button
                          onClick={() => {
                            setEditing(true);
                            setShowMenu(false);
                          }}
                          className="w-full flex items-center gap-2 px-3 py-2 text-sm text-zinc-400 hover:bg-zinc-700 hover:text-white"
                        >
                          <Edit className="w-4 h-4" />
                          Edit
                        </button>
                        <button
                          onClick={() => {
                            handleDelete();
                            setShowMenu(false);
                          }}
                          className="w-full flex items-center gap-2 px-3 py-2 text-sm text-red-400 hover:bg-zinc-700"
                        >
                          <Trash2 className="w-4 h-4" />
                          Delete
                        </button>
                      </>
                    )}
                    <button
                      onClick={() => {
                        onReport(comment.id, 'inappropriate');
                        setShowMenu(false);
                      }}
                      className="w-full flex items-center gap-2 px-3 py-2 text-sm text-zinc-400 hover:bg-zinc-700 hover:text-white"
                    >
                      <Flag className="w-4 h-4" />
                      Report
                    </button>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          )}
        </div>

        {/* Content */}
        {comment.deleted ? (
          <p className="text-sm text-zinc-500 italic flex items-center gap-2">
            <AlertTriangle className="w-4 h-4" />
            This comment has been deleted.
          </p>
        ) : editing ? (
          <div className="space-y-2">
            <textarea
              value={editContent}
              onChange={(e) => setEditContent(e.target.value)}
              rows={3}
              className="w-full px-3 py-2 bg-zinc-800 border border-zinc-700 text-white focus:outline-none focus:border-blood-500 resize-none text-sm"
            />
            <div className="flex gap-2">
              <button
                onClick={handleEdit}
                disabled={submitting}
                className="px-3 py-1 text-sm bg-blood-600 text-white hover:bg-blood-700 disabled:opacity-50"
              >
                Save
              </button>
              <button
                onClick={() => {
                  setEditing(false);
                  setEditContent(comment.content);
                }}
                className="px-3 py-1 text-sm bg-zinc-700 text-white hover:bg-zinc-600"
              >
                Cancel
              </button>
            </div>
          </div>
        ) : (
          <p className="text-sm text-zinc-300 whitespace-pre-wrap">
            {comment.content}
          </p>
        )}

        {/* Actions */}
        {!comment.deleted && (
          <div className="flex items-center gap-4 mt-3">
            {/* Votes */}
            <div className="flex items-center gap-1">
              <button
                onClick={() => onVote(comment.id, comment.userVote === 'up' ? null : 'up')}
                className={cn(
                  'p-1 transition-colors',
                  comment.userVote === 'up'
                    ? 'text-green-500'
                    : 'text-zinc-500 hover:text-green-500'
                )}
              >
                <ThumbsUp className="w-4 h-4" />
              </button>
              <span className={cn(
                'text-sm font-medium min-w-[20px] text-center',
                netVotes > 0 ? 'text-green-500' : netVotes < 0 ? 'text-red-500' : 'text-zinc-500'
              )}>
                {netVotes}
              </span>
              <button
                onClick={() => onVote(comment.id, comment.userVote === 'down' ? null : 'down')}
                className={cn(
                  'p-1 transition-colors',
                  comment.userVote === 'down'
                    ? 'text-red-500'
                    : 'text-zinc-500 hover:text-red-500'
                )}
              >
                <ThumbsDown className="w-4 h-4" />
              </button>
            </div>

            {/* Reply */}
            {canReply && (
              <button
                onClick={() => setReplyingTo(replyingTo === comment.id ? null : comment.id)}
                className="flex items-center gap-1 text-xs text-zinc-500 hover:text-white transition-colors"
              >
                <Reply className="w-4 h-4" />
                Reply
              </button>
            )}

            {/* Toggle Replies */}
            {replies.length > 0 && (
              <button
                onClick={() => setShowReplies(!showReplies)}
                className="flex items-center gap-1 text-xs text-zinc-500 hover:text-white transition-colors"
              >
                {showReplies ? (
                  <ChevronUp className="w-4 h-4" />
                ) : (
                  <ChevronDown className="w-4 h-4" />
                )}
                {replies.length} {replies.length === 1 ? 'reply' : 'replies'}
              </button>
            )}
          </div>
        )}

        {/* Reply Form */}
        <AnimatePresence>
          {replyingTo === comment.id && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="mt-3 space-y-2"
            >
              <textarea
                value={replyContent}
                onChange={(e) => setReplyContent(e.target.value)}
                placeholder="Write a reply..."
                rows={2}
                className="w-full px-3 py-2 bg-zinc-800 border border-zinc-700 text-white placeholder-zinc-500 focus:outline-none focus:border-blood-500 resize-none text-sm"
                autoFocus
              />
              <div className="flex gap-2">
                <button
                  onClick={handleReply}
                  disabled={!replyContent.trim() || submitting}
                  className="px-3 py-1 text-sm bg-blood-600 text-white hover:bg-blood-700 disabled:opacity-50"
                >
                  Reply
                </button>
                <button
                  onClick={() => {
                    setReplyingTo(null);
                    setReplyContent('');
                  }}
                  className="px-3 py-1 text-sm bg-zinc-700 text-white hover:bg-zinc-600"
                >
                  Cancel
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Replies */}
      <AnimatePresence>
        {showReplies && replies.length > 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="mt-2 space-y-2"
          >
            {replies.map((reply) => (
              <CommentItem
                key={reply.id}
                comment={reply}
                currentUserId={currentUserId}
                getReplies={getReplies}
                onAddComment={onAddComment}
                onEditComment={onEditComment}
                onDeleteComment={onDeleteComment}
                onVote={onVote}
                onReport={onReport}
                replyingTo={replyingTo}
                setReplyingTo={setReplyingTo}
                depth={depth + 1}
                maxDepth={maxDepth}
              />
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export { CommentSection, CommentItem };
