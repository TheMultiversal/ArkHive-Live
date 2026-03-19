// Workspace Components Barrel Export
export { default as WorkspaceCard } from './WorkspaceCard';
export { default as ChatPanel } from './ChatPanel';
export { default as EvidenceBoard } from './EvidenceBoard';
export { default as DocumentLibrary } from './DocumentLibrary';
export { default as MemberList } from './MemberList';
export * from './LoadingStates';

// Collaborative Tools
export {
  PresenceIndicator,
  CollaboratorCursors,
  CollaboratorList,
  AnnotationPin,
  AnnotationPanel,
  CollaborationToolbar,
  TypingIndicator,
  type PresenceStatus,
  type CollaboratorActivity,
  type Collaborator,
  type Annotation,
  type AnnotationReply,
} from './CollaborativeTools';

// Realtime Sync
export {
  useSync,
  SyncStatusIndicator,
  PendingChangesPanel,
  ConflictResolutionDialog,
  SyncActivityLog,
  type SyncStatus,
  type ChangeType,
  type SyncChange,
  type SyncState,
  type ConflictResolution,
} from './RealtimeSync';

// Permission Manager
export {
  DEFAULT_ROLES,
  PermissionBadge,
  RoleBadge,
  RoleSelector,
  MemberPermissionRow,
  PermissionMatrix,
  InviteMemberDialog,
  AccessLinkManager,
  hasPermission,
  type Permission,
  type ResourceType,
  type Role,
  type MemberPermission,
  type AccessLink,
} from './PermissionManager';

// Activity Feed
export {
  default as ActivityFeed,
  ActivityWidget,
  NotificationBell,
  type ActivityType,
  type ActivityCategory,
  type ActivityItem,
  type ActivityFilter,
} from './ActivityFeed';

// Conflict Resolution
export {
  default as ConflictResolutionPanel,
  ConflictBadge,
  DiffView,
  FieldResolver,
  ConflictCard,
  type ConflictType,
  type ResolutionStrategy,
  type ConflictField,
  type Conflict,
} from './ConflictResolution';
