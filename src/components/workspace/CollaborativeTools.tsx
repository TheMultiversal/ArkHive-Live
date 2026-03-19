"use client";

import { useState, useEffect, useCallback, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Users,
  MousePointer2,
  MessageSquare,
  Pin,
  Eye,
  Edit3,
  Clock,
  Circle,
  ChevronDown,
  ChevronUp,
  Video,
  Phone,
  Share2,
  UserPlus,
  Send,
  Maximize2,
  Minimize2,
  X,
  AlertCircle,
  CheckCircle,
  Bell,
  BellOff,
} from "lucide-react";

// ============================================================================
// TYPES
// ============================================================================

export type PresenceStatus = "online" | "away" | "busy" | "offline";

export type CollaboratorActivity =
  | "viewing"
  | "editing"
  | "commenting"
  | "idle";

export interface Collaborator {
  id: string;
  name: string;
  avatar?: string;
  color: string;
  status: PresenceStatus;
  activity: CollaboratorActivity;
  cursor?: { x: number; y: number };
  lastSeen: Date;
  role: "owner" | "editor" | "viewer";
  currentSection?: string;
}

export interface Annotation {
  id: string;
  authorId: string;
  authorName: string;
  authorColor: string;
  content: string;
  position: { x: number; y: number };
  targetId?: string;
  createdAt: Date;
  resolved: boolean;
  replies: AnnotationReply[];
}

export interface AnnotationReply {
  id: string;
  authorId: string;
  authorName: string;
  content: string;
  createdAt: Date;
}

// ============================================================================
// UTILITIES
// ============================================================================

const statusColors: Record<PresenceStatus, string> = {
  online: "bg-emerald-500",
  away: "bg-amber-500",
  busy: "bg-red-500",
  offline: "bg-zinc-500",
};

const statusLabels: Record<PresenceStatus, string> = {
  online: "Online",
  away: "Away",
  busy: "Do Not Disturb",
  offline: "Offline",
};

const activityLabels: Record<CollaboratorActivity, string> = {
  viewing: "Viewing",
  editing: "Editing",
  commenting: "Commenting",
  idle: "Idle",
};

// ============================================================================
// PRESENCE INDICATOR
// ============================================================================

interface PresenceIndicatorProps {
  collaborators: Collaborator[];
  maxVisible?: number;
  onCollaboratorClick?: (collaborator: Collaborator) => void;
  className?: string;
}

export function PresenceIndicator({
  collaborators,
  maxVisible = 5,
  onCollaboratorClick,
  className = "",
}: PresenceIndicatorProps) {
  const onlineCollaborators = collaborators.filter(
    (c) => c.status !== "offline"
  );
  const visibleCollaborators = onlineCollaborators.slice(0, maxVisible);
  const remainingCount = Math.max(0, onlineCollaborators.length - maxVisible);

  return (
    <div className={`flex items-center gap-2 ${className}`}>
      <div className="flex -space-x-2">
        {visibleCollaborators.map((collaborator) => (
          <button
            key={collaborator.id}
            onClick={() => onCollaboratorClick?.(collaborator)}
            className="relative group"
            title={`${collaborator.name} - ${statusLabels[collaborator.status]}`}
          >
            <div
              className="w-8 h-8 border-2 border-zinc-900 flex items-center justify-center text-xs font-bold text-white"
              style={{ backgroundColor: collaborator.color }}
            >
              {collaborator.avatar ? (
                <img
                  src={collaborator.avatar}
                  alt={collaborator.name}
                  className="w-full h-full object-cover"
                />
              ) : (
                collaborator.name.charAt(0).toUpperCase()
              )}
            </div>
            <span
              className={`absolute -bottom-0.5 -right-0.5 w-3 h-3 ${
                statusColors[collaborator.status]
              } border-2 border-zinc-900 rounded-full`}
            />
          </button>
        ))}

        {remainingCount > 0 && (
          <div className="w-8 h-8 border-2 border-zinc-900 bg-zinc-800 flex items-center justify-center text-xs font-medium text-zinc-400">
            +{remainingCount}
          </div>
        )}
      </div>

      <span className="text-sm text-zinc-400">
        {onlineCollaborators.length} online
      </span>
    </div>
  );
}

// ============================================================================
// COLLABORATOR CURSORS
// ============================================================================

interface CollaboratorCursorsProps {
  collaborators: Collaborator[];
  containerRef: React.RefObject<HTMLElement>;
  className?: string;
}

export function CollaboratorCursors({
  collaborators,
  className = "",
}: CollaboratorCursorsProps) {
  const cursorsToShow = collaborators.filter(
    (c) => c.cursor && c.status !== "offline"
  );

  return (
    <div className={`pointer-events-none ${className}`}>
      <AnimatePresence>
        {cursorsToShow.map((collaborator) => (
          <motion.div
            key={collaborator.id}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{
              opacity: 1,
              scale: 1,
              x: collaborator.cursor!.x,
              y: collaborator.cursor!.y,
            }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{ type: "spring", damping: 30, stiffness: 500 }}
            className="absolute z-50"
          >
            <MousePointer2
              className="w-4 h-4"
              style={{ color: collaborator.color }}
            />
            <span
              className="absolute left-4 top-4 px-2 py-0.5 text-xs text-white whitespace-nowrap"
              style={{ backgroundColor: collaborator.color }}
            >
              {collaborator.name}
            </span>
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  );
}

// ============================================================================
// COLLABORATOR LIST PANEL
// ============================================================================

interface CollaboratorListProps {
  collaborators: Collaborator[];
  currentUserId: string;
  onInvite?: () => void;
  onCall?: (collaboratorId: string) => void;
  onMessage?: (collaboratorId: string) => void;
  className?: string;
}

export function CollaboratorList({
  collaborators,
  currentUserId,
  onInvite,
  onCall,
  onMessage,
  className = "",
}: CollaboratorListProps) {
  const [filter, setFilter] = useState<PresenceStatus | "all">("all");

  const filteredCollaborators = useMemo(() => {
    if (filter === "all") return collaborators;
    return collaborators.filter((c) => c.status === filter);
  }, [collaborators, filter]);

  const groupedCollaborators = useMemo(() => {
    const online = filteredCollaborators.filter((c) => c.status === "online");
    const away = filteredCollaborators.filter((c) => c.status === "away");
    const busy = filteredCollaborators.filter((c) => c.status === "busy");
    const offline = filteredCollaborators.filter((c) => c.status === "offline");
    return { online, away, busy, offline };
  }, [filteredCollaborators]);

  return (
    <div className={`glass-card ${className}`}>
      <div className="flex items-center justify-between p-4 border-b border-zinc-800">
        <h3 className="flex items-center gap-2 font-semibold text-white">
          <Users className="w-5 h-5 text-blood-500" />
          Collaborators
        </h3>
        {onInvite && (
          <button
            onClick={onInvite}
            className="flex items-center gap-1 text-sm text-blood-400 hover:text-blood-300 transition-colors"
          >
            <UserPlus className="w-4 h-4" />
            Invite
          </button>
        )}
      </div>

      {/* Filter tabs */}
      <div className="flex border-b border-zinc-800">
        {(["all", "online", "away", "busy", "offline"] as const).map((status) => (
          <button
            key={status}
            onClick={() => setFilter(status)}
            className={`flex-1 px-3 py-2 text-xs transition-colors ${
              filter === status
                ? "bg-zinc-800 text-white"
                : "text-zinc-500 hover:text-zinc-300"
            }`}
          >
            {status === "all" ? "All" : statusLabels[status]}
          </button>
        ))}
      </div>

      {/* Collaborator list */}
      <div className="max-h-80 overflow-y-auto">
        {Object.entries(groupedCollaborators).map(([status, members]) => {
          if (members.length === 0) return null;

          return (
            <div key={status}>
              <div className="px-4 py-2 text-xs text-zinc-500 uppercase tracking-wider bg-zinc-900/50">
                {statusLabels[status as PresenceStatus]} ({members.length})
              </div>
              {members.map((collaborator) => (
                <div
                  key={collaborator.id}
                  className={`flex items-center gap-3 p-3 border-b border-zinc-800/50 hover:bg-zinc-900/50 transition-colors ${
                    collaborator.id === currentUserId ? "bg-blood-900/10" : ""
                  }`}
                >
                  {/* Avatar */}
                  <div className="relative">
                    <div
                      className="w-10 h-10 flex items-center justify-center text-sm font-bold text-white"
                      style={{ backgroundColor: collaborator.color }}
                    >
                      {collaborator.avatar ? (
                        <img
                          src={collaborator.avatar}
                          alt={collaborator.name}
                          className="w-full h-full object-cover"
                        />
                      ) : (
                        collaborator.name.charAt(0).toUpperCase()
                      )}
                    </div>
                    <span
                      className={`absolute -bottom-0.5 -right-0.5 w-3 h-3 ${
                        statusColors[collaborator.status]
                      } border-2 border-zinc-900 rounded-full`}
                    />
                  </div>

                  {/* Info */}
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2">
                      <span className="font-medium text-white truncate">
                        {collaborator.name}
                        {collaborator.id === currentUserId && (
                          <span className="text-xs text-zinc-500 ml-1">
                            (you)
                          </span>
                        )}
                      </span>
                      <span className="text-xs text-zinc-500 capitalize">
                        {collaborator.role}
                      </span>
                    </div>
                    <div className="flex items-center gap-2 text-xs text-zinc-500">
                      <span className="flex items-center gap-1">
                        {collaborator.activity === "editing" ? (
                          <Edit3 className="w-3 h-3" />
                        ) : collaborator.activity === "commenting" ? (
                          <MessageSquare className="w-3 h-3" />
                        ) : (
                          <Eye className="w-3 h-3" />
                        )}
                        {activityLabels[collaborator.activity]}
                      </span>
                      {collaborator.currentSection && (
                        <span className="truncate">
                          in {collaborator.currentSection}
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Actions */}
                  {collaborator.id !== currentUserId && (
                    <div className="flex items-center gap-1">
                      {onMessage && (
                        <button
                          onClick={() => onMessage(collaborator.id)}
                          className="p-1.5 text-zinc-500 hover:text-white transition-colors"
                          title="Send message"
                        >
                          <MessageSquare className="w-4 h-4" />
                        </button>
                      )}
                      {onCall && collaborator.status === "online" && (
                        <button
                          onClick={() => onCall(collaborator.id)}
                          className="p-1.5 text-zinc-500 hover:text-emerald-400 transition-colors"
                          title="Start call"
                        >
                          <Video className="w-4 h-4" />
                        </button>
                      )}
                    </div>
                  )}
                </div>
              ))}
            </div>
          );
        })}
      </div>
    </div>
  );
}

// ============================================================================
// ANNOTATION PIN
// ============================================================================

interface AnnotationPinProps {
  annotation: Annotation;
  isSelected: boolean;
  onClick: () => void;
  className?: string;
}

export function AnnotationPin({
  annotation,
  isSelected,
  onClick,
  className = "",
}: AnnotationPinProps) {
  return (
    <motion.button
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      exit={{ scale: 0 }}
      onClick={onClick}
      className={`absolute z-40 group ${className}`}
      style={{
        left: annotation.position.x,
        top: annotation.position.y,
      }}
    >
      <div
        className={`relative p-1.5 transition-transform ${
          isSelected ? "scale-125" : "hover:scale-110"
        }`}
        style={{ backgroundColor: annotation.authorColor }}
      >
        <Pin
          className={`w-4 h-4 text-white ${
            annotation.resolved ? "opacity-50" : ""
          }`}
        />
        {annotation.replies.length > 0 && (
          <span className="absolute -top-1 -right-1 w-4 h-4 bg-blood-600 text-white text-xs flex items-center justify-center">
            {annotation.replies.length}
          </span>
        )}
      </div>

      {/* Hover preview */}
      <div
        className={`absolute left-full top-0 ml-2 w-48 p-2 bg-zinc-900 border border-zinc-800 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none ${
          isSelected ? "hidden" : ""
        }`}
      >
        <div className="flex items-center gap-2 mb-1">
          <span
            className="w-2 h-2"
            style={{ backgroundColor: annotation.authorColor }}
          />
          <span className="text-xs font-medium text-white">
            {annotation.authorName}
          </span>
        </div>
        <p className="text-xs text-zinc-400 line-clamp-2">
          {annotation.content}
        </p>
      </div>
    </motion.button>
  );
}

// ============================================================================
// ANNOTATION PANEL
// ============================================================================

interface AnnotationPanelProps {
  annotation: Annotation;
  currentUserId: string;
  onReply: (content: string) => void;
  onResolve: () => void;
  onDelete: () => void;
  onClose: () => void;
  className?: string;
}

export function AnnotationPanel({
  annotation,
  currentUserId,
  onReply,
  onResolve,
  onDelete,
  onClose,
  className = "",
}: AnnotationPanelProps) {
  const [replyContent, setReplyContent] = useState("");
  const [isExpanded, setIsExpanded] = useState(true);

  const handleSubmitReply = () => {
    if (replyContent.trim()) {
      onReply(replyContent.trim());
      setReplyContent("");
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: 20 }}
      className={`glass-card w-80 ${className}`}
    >
      {/* Header */}
      <div className="flex items-center justify-between p-3 border-b border-zinc-800">
        <div className="flex items-center gap-2">
          <span
            className="w-3 h-3"
            style={{ backgroundColor: annotation.authorColor }}
          />
          <span className="font-medium text-white text-sm">
            {annotation.authorName}
          </span>
          {annotation.resolved && (
            <span className="px-1.5 py-0.5 text-xs bg-emerald-500/20 text-emerald-400 border border-emerald-500/30">
              Resolved
            </span>
          )}
        </div>
        <div className="flex items-center gap-1">
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className="p-1 text-zinc-500 hover:text-white transition-colors"
          >
            {isExpanded ? (
              <Minimize2 className="w-4 h-4" />
            ) : (
              <Maximize2 className="w-4 h-4" />
            )}
          </button>
          <button
            onClick={onClose}
            className="p-1 text-zinc-500 hover:text-white transition-colors"
          >
            <X className="w-4 h-4" />
          </button>
        </div>
      </div>

      <AnimatePresence>
        {isExpanded && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
          >
            {/* Content */}
            <div className="p-3 border-b border-zinc-800">
              <p className="text-sm text-zinc-300">{annotation.content}</p>
              <span className="text-xs text-zinc-500 mt-2 block">
                {annotation.createdAt.toLocaleString()}
              </span>
            </div>

            {/* Replies */}
            {annotation.replies.length > 0 && (
              <div className="p-3 border-b border-zinc-800 max-h-40 overflow-y-auto space-y-3">
                {annotation.replies.map((reply) => (
                  <div key={reply.id} className="pl-3 border-l-2 border-zinc-700">
                    <div className="flex items-center gap-2 mb-1">
                      <span className="text-xs font-medium text-zinc-300">
                        {reply.authorName}
                      </span>
                      <span className="text-xs text-zinc-500">
                        {reply.createdAt.toLocaleTimeString()}
                      </span>
                    </div>
                    <p className="text-xs text-zinc-400">{reply.content}</p>
                  </div>
                ))}
              </div>
            )}

            {/* Reply input */}
            <div className="p-3 border-b border-zinc-800">
              <div className="flex gap-2">
                <input
                  type="text"
                  value={replyContent}
                  onChange={(e) => setReplyContent(e.target.value)}
                  placeholder="Add a reply..."
                  className="flex-1 px-3 py-1.5 bg-zinc-900 border border-zinc-800 text-white text-sm placeholder-zinc-500 focus:outline-none focus:border-blood-500"
                  onKeyDown={(e) => e.key === "Enter" && handleSubmitReply()}
                />
                <button
                  onClick={handleSubmitReply}
                  disabled={!replyContent.trim()}
                  className="p-1.5 bg-blood-600 text-white disabled:opacity-50 disabled:cursor-not-allowed hover:bg-blood-500 transition-colors"
                >
                  <Send className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Actions */}
            <div className="flex items-center justify-between p-3">
              <div className="flex items-center gap-2">
                {!annotation.resolved && (
                  <button
                    onClick={onResolve}
                    className="flex items-center gap-1 text-xs text-emerald-400 hover:text-emerald-300 transition-colors"
                  >
                    <CheckCircle className="w-3.5 h-3.5" />
                    Resolve
                  </button>
                )}
              </div>
              {annotation.authorId === currentUserId && (
                <button
                  onClick={onDelete}
                  className="text-xs text-red-400 hover:text-red-300 transition-colors"
                >
                  Delete
                </button>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

// ============================================================================
// COLLABORATION TOOLBAR
// ============================================================================

interface CollaborationToolbarProps {
  collaborators: Collaborator[];
  isAnnotating: boolean;
  notificationsEnabled: boolean;
  onToggleAnnotating: () => void;
  onToggleNotifications: () => void;
  onShare: () => void;
  onStartCall?: () => void;
  className?: string;
}

export function CollaborationToolbar({
  collaborators,
  isAnnotating,
  notificationsEnabled,
  onToggleAnnotating,
  onToggleNotifications,
  onShare,
  onStartCall,
  className = "",
}: CollaborationToolbarProps) {
  const onlineCount = collaborators.filter((c) => c.status !== "offline").length;

  return (
    <div
      className={`flex items-center gap-2 p-2 bg-zinc-900 border border-zinc-800 ${className}`}
    >
      {/* Presence */}
      <PresenceIndicator collaborators={collaborators} maxVisible={3} />

      <div className="w-px h-6 bg-zinc-700" />

      {/* Tools */}
      <button
        onClick={onToggleAnnotating}
        className={`p-2 transition-colors ${
          isAnnotating
            ? "bg-blood-600 text-white"
            : "text-zinc-400 hover:text-white hover:bg-zinc-800"
        }`}
        title={isAnnotating ? "Stop annotating" : "Add annotation"}
      >
        <Pin className="w-4 h-4" />
      </button>

      <button
        onClick={onToggleNotifications}
        className={`p-2 transition-colors ${
          notificationsEnabled
            ? "text-zinc-400 hover:text-white hover:bg-zinc-800"
            : "text-zinc-600"
        }`}
        title={notificationsEnabled ? "Mute notifications" : "Enable notifications"}
      >
        {notificationsEnabled ? (
          <Bell className="w-4 h-4" />
        ) : (
          <BellOff className="w-4 h-4" />
        )}
      </button>

      <div className="w-px h-6 bg-zinc-700" />

      {/* Actions */}
      {onStartCall && onlineCount > 1 && (
        <button
          onClick={onStartCall}
          className="p-2 text-zinc-400 hover:text-emerald-400 hover:bg-zinc-800 transition-colors"
          title="Start call"
        >
          <Video className="w-4 h-4" />
        </button>
      )}

      <button
        onClick={onShare}
        className="p-2 text-zinc-400 hover:text-white hover:bg-zinc-800 transition-colors"
        title="Share"
      >
        <Share2 className="w-4 h-4" />
      </button>
    </div>
  );
}

// ============================================================================
// TYPING INDICATOR
// ============================================================================

interface TypingIndicatorProps {
  collaborators: Collaborator[];
  className?: string;
}

export function TypingIndicator({
  collaborators,
  className = "",
}: TypingIndicatorProps) {
  const editingCollaborators = collaborators.filter(
    (c) => c.activity === "editing" && c.status === "online"
  );

  if (editingCollaborators.length === 0) return null;

  const names = editingCollaborators.map((c) => c.name);
  let message: string;

  if (names.length === 1) {
    message = `${names[0]} is editing...`;
  } else if (names.length === 2) {
    message = `${names[0]} and ${names[1]} are editing...`;
  } else {
    message = `${names[0]} and ${names.length - 1} others are editing...`;
  }

  return (
    <div
      className={`flex items-center gap-2 px-3 py-1.5 bg-zinc-900 border border-zinc-800 text-sm ${className}`}
    >
      <div className="flex items-center gap-1">
        <motion.span
          animate={{ opacity: [1, 0.4, 1] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="w-1.5 h-1.5 bg-blood-500 rounded-full"
        />
        <motion.span
          animate={{ opacity: [1, 0.4, 1] }}
          transition={{ duration: 1.5, repeat: Infinity, delay: 0.2 }}
          className="w-1.5 h-1.5 bg-blood-500 rounded-full"
        />
        <motion.span
          animate={{ opacity: [1, 0.4, 1] }}
          transition={{ duration: 1.5, repeat: Infinity, delay: 0.4 }}
          className="w-1.5 h-1.5 bg-blood-500 rounded-full"
        />
      </div>
      <span className="text-zinc-400">{message}</span>
    </div>
  );
}
