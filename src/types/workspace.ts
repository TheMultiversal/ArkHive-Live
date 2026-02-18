/**
 * Collaborative Investigation Workspace Types
 * @module types/workspace
 * 
 * This module contains type definitions for the collaborative workspace feature,
 * including members, messages, evidence, documents, and workspace management.
 */

// ============================================================
// Role & Status Type Definitions
// ============================================================

/** Member roles with different permission levels */
export type WorkspaceRole = 'owner' | 'admin' | 'investigator' | 'researcher' | 'viewer';

/** Current state of a workspace */
export type WorkspaceStatus = 'active' | 'archived' | 'paused';

/** Visibility settings controlling access */
export type WorkspaceVisibility = 'private' | 'team' | 'public';

/** Priority levels for workspaces and tasks */
export type WorkspacePriority = 'critical' | 'high' | 'medium' | 'low';

/** Types of evidence that can be added to a workspace */
export type EvidenceType = 'document' | 'image' | 'video' | 'audio' | 'link' | 'note' | 'timeline';

/** Categories for organizing evidence by reliability */
export type EvidenceCategory = 'primary' | 'supporting' | 'disputed' | 'verified' | 'unverified';

/** Verification status of evidence */
export type VerificationStatus = 'verified' | 'disputed' | 'pending' | 'unverified';

/** Types of messages in the chat */
export type MessageType = 'text' | 'system' | 'evidence' | 'milestone';

/** Alias for workspace priority used in investigations */
export type InvestigationPriority = 'critical' | 'high' | 'medium' | 'low';

// ============================================================
// Member & Communication Types
// ============================================================

/**
 * A member of a workspace with role and activity info
 */
export interface WorkspaceMember {
  /** Unique member identifier */
  id: string;
  /** Display name */
  name: string;
  /** Avatar image URL */
  avatar?: string;
  /** Permission role */
  role: WorkspaceRole;
  /** Date joined workspace */
  joinedAt: Date;
  /** Last activity timestamp */
  lastActive: Date;
  /** Number of contributions made */
  contributions: number;
  /** Current online status */
  isOnline: boolean;
  /** Areas of expertise */
  expertise?: string[];
}

/**
 * A message in the workspace chat
 */
export interface WorkspaceMessage {
  /** Unique message identifier */
  id: string;
  /** Author's user ID */
  authorId: string;
  /** Author's display name */
  authorName: string;
  /** Author's avatar URL */
  authorAvatar?: string;
  /** Message content */
  content: string;
  /** Type of message */
  type: MessageType;
  /** When the message was sent */
  timestamp: Date;
  /** File attachments */
  attachments?: MessageAttachment[];
  /** Emoji reactions */
  reactions?: MessageReaction[];
  /** ID of message being replied to */
  replyTo?: string;
  /** Whether message has been edited */
  isEdited?: boolean;
  /** Whether message is pinned */
  isPinned?: boolean;
}

/**
 * File attachment on a message
 */
export interface MessageAttachment {
  /** Unique attachment identifier */
  id: string;
  /** File name */
  name: string;
  /** MIME type */
  type: string;
  /** Download URL */
  url: string;
  /** File size in bytes */
  size: number;
}

/**
 * Emoji reaction on a message
 */
export interface MessageReaction {
  /** Emoji character */
  emoji: string;
  /** IDs of users who reacted */
  users: string[];
}

// ============================================================
// Evidence Types
// ============================================================

/**
 * A piece of evidence in an investigation
 */
export interface Evidence {
  /** Unique evidence identifier */
  id: string;
  /** Display title */
  title: string;
  /** Detailed description */
  description: string;
  /** Type of evidence */
  type: EvidenceType;
  /** Reliability category */
  category: EvidenceCategory;
  /** Current verification status */
  verificationStatus: VerificationStatus;
  /** Source attribution */
  source: string;
  /** URL to source */
  sourceUrl?: string;
  /** When evidence was added */
  addedAt: Date;
  /** User ID who added it */
  addedBy: string;
  /** Display name of user who added it */
  addedByName: string;
  /** Tags for categorization */
  tags: string[];
  /** IDs of connected evidence pieces */
  connections: string[];
  /** IDs of users who verified */
  verifiedBy?: string[];
  /** Additional notes */
  notes?: string;
  /** URL to uploaded file */
  fileUrl?: string;
  /** Thumbnail image URL */
  thumbnail?: string;
  /** Position on visual evidence board */
  position?: { x: number; y: number };
}

// ============================================================
// Document Types
// ============================================================

/**
 * A document uploaded to a workspace
 */
export interface WorkspaceDocument {
  /** Unique document identifier */
  id: string;
  /** File name */
  name: string;
  /** MIME type */
  type: string;
  /** File size in bytes */
  size: number;
  /** Download URL */
  url: string;
  /** Uploader's user ID */
  uploadedBy: string;
  /** Uploader's display name */
  uploadedByName: string;
  /** Upload timestamp */
  uploadedAt: Date;
  /** Folder for organization */
  folder?: string;
  /** Document category */
  category: string;
  /** Optional description */
  description?: string;
  /** Download count */
  downloads: number;
  /** Whether publicly accessible */
  isPublic: boolean;
}

// ============================================================
// Timeline Types
// ============================================================

/**
 * A timeline entry tracking investigation events
 */
export interface WorkspaceTimeline {
  /** Unique timeline entry identifier */
  id: string;
  /** Event date */
  date: Date;
  /** Event title */
  title: string;
  /** Event description */
  description: string;
  /** Related evidence IDs */
  evidenceIds: string[];
  /** User ID who added it */
  addedBy: string;
  /** Significance level */
  importance: 'major' | 'minor' | 'context';
}

// ============================================================
// Task Types
// ============================================================

/**
 * A research task assigned to team members
 */
export interface ResearchTask {
  /** Unique task identifier */
  id: string;
  /** Task title */
  title: string;
  /** Task description */
  description: string;
  /** IDs of assigned members */
  assignedTo: string[];
  /** Current status */
  status: 'pending' | 'in-progress' | 'completed' | 'blocked';
  /** Priority level */
  priority: InvestigationPriority;
  /** Due date */
  dueDate?: Date;
  /** User ID who created the task */
  createdBy: string;
  /** Creation timestamp */
  createdAt: Date;
  /** Completion timestamp */
  completedAt?: Date;
}

// ============================================================
// Workspace Types
// ============================================================

/**
 * Main workspace entity containing all collaborative features
 */
export interface Workspace {
  /** Unique workspace identifier */
  id: string;
  /** Display name */
  name: string;
  /** Workspace description */
  description: string;
  /** Linked investigation ID */
  investigation: string;
  /** Cover image URL */
  coverImage?: string;
  /** Current status */
  status: WorkspaceStatus;
  /** Priority level */
  priority: InvestigationPriority;
  /** Access visibility */
  visibility: WorkspaceVisibility;
  /** Creation timestamp */
  createdAt: Date;
  /** Last update timestamp */
  updatedAt: Date;
  /** Creator's user ID */
  createdBy: string;
  /** Workspace members */
  members: WorkspaceMember[];
  /** Chat messages */
  messages: WorkspaceMessage[];
  /** Evidence items */
  evidence: Evidence[];
  /** Uploaded documents */
  documents: WorkspaceDocument[];
  /** Investigation timeline */
  timeline: WorkspaceTimeline[];
  /** Research tasks */
  tasks: ResearchTask[];
  /** Tags for categorization */
  tags: string[];
  /** Whether publicly accessible */
  isPublic: boolean;
  /** Total view count */
  viewCount: number;
  /** Last activity timestamp */
  lastActivity: Date;
  /** Project milestones */
  milestones: WorkspaceMilestone[];
}

/**
 * A milestone in the workspace progress
 */
export interface WorkspaceMilestone {
  /** Unique milestone identifier */
  id: string;
  /** Milestone title */
  title: string;
  /** Milestone description */
  description: string;
  /** Completion timestamp */
  completedAt?: Date;
  /** Whether milestone is complete */
  isCompleted: boolean;
}

/**
 * Activity log entry for workspace actions
 */
export interface WorkspaceActivity {
  /** Unique activity identifier */
  id: string;
  /** Associated workspace ID */
  workspaceId: string;
  /** User who performed action */
  userId: string;
  /** User's display name */
  userName: string;
  /** Action type/name */
  action: string;
  /** Action details */
  details: string;
  /** Activity timestamp */
  timestamp: Date;
}

/**
 * Workspace invitation for new members
 */
export interface WorkspaceInvite {
  /** Unique invite identifier */
  id: string;
  /** Target workspace ID */
  workspaceId: string;
  /** Invitee email address */
  email: string;
  /** Assigned role */
  role: WorkspaceRole;
  /** Inviter's user ID */
  invitedBy: string;
  /** Invite creation timestamp */
  createdAt: Date;
  /** Invite expiration timestamp */
  expiresAt: Date;
  /** Current invite status */
  status: 'pending' | 'accepted' | 'declined' | 'expired';
}

// ============================================================
// UI State Types
// ============================================================

/**
 * Chat panel UI state
 */
export interface ChatState {
  /** All chat messages */
  messages: WorkspaceMessage[];
  /** User IDs currently typing */
  isTyping: string[];
  /** ID of message being replied to */
  replyingTo: string | null;
  /** IDs of pinned messages */
  pinnedMessages: string[];
}

/**
 * Evidence board UI state
 */
export interface EvidenceBoardState {
  /** All evidence items */
  evidence: Evidence[];
  /** Currently selected evidence ID */
  selectedEvidence: string | null;
  /** Display mode */
  viewMode: 'grid' | 'board' | 'list';
  /** Active filter */
  filterCategory: EvidenceCategory | 'all';
  /** Current zoom level */
  zoom: number;
}
