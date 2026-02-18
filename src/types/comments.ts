// ============================================================
// Comment Types
// ============================================================

export type CommentVote = 'up' | 'down' | null;

export type CommentStatus = 'visible' | 'hidden' | 'flagged' | 'deleted';

export interface CommentAuthor {
  id: string;
  name: string;
  avatar?: string;
  role?: 'user' | 'moderator' | 'admin';
  verified?: boolean;
}

export interface Comment {
  id: string;
  content: string;
  author: CommentAuthor;
  parentId?: string;
  createdAt: string;
  updatedAt?: string;
  edited: boolean;
  deleted: boolean;
  upvotes: number;
  downvotes: number;
  userVote?: CommentVote;
  replyCount: number;
  status: CommentStatus;
  flagCount?: number;
  metadata?: Record<string, unknown>;
}

export interface CommentThread {
  id: string;
  targetType: 'investigation' | 'entity' | 'document' | 'workspace';
  targetId: string;
  rootComments: Comment[];
  totalCount: number;
  participantCount: number;
}

// ============================================================
// API Request Types
// ============================================================

export interface CreateCommentRequest {
  content: string;
  parentId?: string;
  targetType: string;
  targetId: string;
  metadata?: Record<string, unknown>;
}

export interface UpdateCommentRequest {
  content: string;
}

export interface VoteCommentRequest {
  vote: CommentVote;
}

export interface ReportCommentRequest {
  reason: 'spam' | 'abuse' | 'harassment' | 'misinformation' | 'other';
  description?: string;
}

// ============================================================
// API Response Types
// ============================================================

export interface CommentResponse {
  comment: Comment;
}

export interface CommentsListResponse {
  comments: Comment[];
  total: number;
  page: number;
  limit: number;
  hasMore: boolean;
}

export interface CommentThreadResponse {
  thread: CommentThread;
}

// ============================================================
// Filter & Sort Types
// ============================================================

export interface CommentFilter {
  authorId?: string;
  status?: CommentStatus[];
  hasReplies?: boolean;
  dateRange?: {
    from?: string;
    to?: string;
  };
}

export type CommentSortBy = 'newest' | 'oldest' | 'top' | 'controversial';

export interface CommentQueryParams {
  targetType: string;
  targetId: string;
  parentId?: string;
  filter?: CommentFilter;
  sortBy?: CommentSortBy;
  page?: number;
  limit?: number;
}

// ============================================================
// Event Types
// ============================================================

export type CommentEventType =
  | 'comment:created'
  | 'comment:updated'
  | 'comment:deleted'
  | 'comment:voted'
  | 'comment:reported'
  | 'comment:moderated';

export interface CommentEvent {
  type: CommentEventType;
  payload: {
    comment?: Comment;
    commentId?: string;
    vote?: CommentVote;
    userId?: string;
  };
  timestamp: string;
}

// ============================================================
// Moderation Types
// ============================================================

export interface CommentReport {
  id: string;
  commentId: string;
  reporterId: string;
  reason: string;
  description?: string;
  status: 'pending' | 'reviewed' | 'resolved' | 'dismissed';
  createdAt: string;
  resolvedAt?: string;
  resolvedBy?: string;
  resolution?: string;
}

export interface ModerationAction {
  id: string;
  commentId: string;
  action: 'hide' | 'delete' | 'restore' | 'warn';
  moderatorId: string;
  reason: string;
  createdAt: string;
}
