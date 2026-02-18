'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import {
  Info,
  CheckCircle,
  AlertTriangle,
  XCircle,
  FileText,
  Building,
  Users,
  FolderOpen,
  Bell,
  Check,
  Trash2,
  MoreHorizontal,
  ExternalLink,
} from 'lucide-react';
import { cn } from '@/lib/utils';
import { formatDistanceToNow } from 'date-fns';
import type { Notification, NotificationType } from '@/types/notifications';

// ============================================================
// Types
// ============================================================

interface NotificationItemProps {
  notification: Notification;
  onMarkAsRead: () => void;
  onDelete: () => void;
  onClick?: () => void;
  showActions?: boolean;
  className?: string;
}

// ============================================================
// Icon Map
// ============================================================

const iconMap: Record<NotificationType, typeof Info> = {
  info: Info,
  success: CheckCircle,
  warning: AlertTriangle,
  error: XCircle,
  investigation: FileText,
  entity: Building,
  document: FileText,
  workspace: Users,
  system: Bell,
};

const colorMap: Record<NotificationType, string> = {
  info: 'text-blue-500 bg-blue-500/10',
  success: 'text-green-500 bg-green-500/10',
  warning: 'text-yellow-500 bg-yellow-500/10',
  error: 'text-red-500 bg-red-500/10',
  investigation: 'text-blood-500 bg-blood-500/10',
  entity: 'text-purple-500 bg-purple-500/10',
  document: 'text-orange-500 bg-orange-500/10',
  workspace: 'text-cyan-500 bg-cyan-500/10',
  system: 'text-zinc-500 bg-zinc-500/10',
};

// ============================================================
// Component
// ============================================================

export function NotificationItem({
  notification,
  onMarkAsRead,
  onDelete,
  onClick,
  showActions = true,
  className,
}: NotificationItemProps) {
  const [showMenu, setShowMenu] = useState(false);
  const [isDeleting, setIsDeleting] = useState(false);

  const Icon = iconMap[notification.type];
  const colorClass = colorMap[notification.type];

  const handleDelete = () => {
    setIsDeleting(true);
    setTimeout(() => {
      onDelete();
    }, 200);
  };

  const handleClick = () => {
    if (!notification.read) {
      onMarkAsRead();
    }
    onClick?.();
  };

  const timeAgo = formatDistanceToNow(new Date(notification.createdAt), {
    addSuffix: true,
  });

  return (
    <motion.div
      layout
      initial={{ opacity: 1, height: 'auto' }}
      animate={{ opacity: isDeleting ? 0 : 1, height: isDeleting ? 0 : 'auto' }}
      exit={{ opacity: 0, height: 0 }}
      className={cn(
        'relative group',
        !notification.read && 'bg-zinc-800/30',
        className
      )}
    >
      <div
        className={cn(
          'flex gap-3 p-4 cursor-pointer hover:bg-zinc-800/50 transition-colors',
          onClick && 'cursor-pointer'
        )}
        onClick={handleClick}
      >
        {/* Unread indicator */}
        {!notification.read && (
          <div className="absolute left-1 top-1/2 -translate-y-1/2 w-1.5 h-1.5 bg-blood-500 rounded-full" />
        )}

        {/* Icon */}
        <div
          className={cn(
            'flex-shrink-0 w-10 h-10 flex items-center justify-center',
            colorClass
          )}
        >
          <Icon className="w-5 h-5" />
        </div>

        {/* Content */}
        <div className="flex-1 min-w-0">
          <p
            className={cn(
              'text-sm leading-tight',
              notification.read ? 'text-zinc-400' : 'text-white'
            )}
          >
            {notification.title}
          </p>
          {notification.message && (
            <p className="text-xs text-zinc-500 mt-1 line-clamp-2">
              {notification.message}
            </p>
          )}
          <div className="flex items-center gap-2 mt-2">
            <span className="text-xs text-zinc-600">{timeAgo}</span>
            {notification.actionUrl && (
              <a
                href={notification.actionUrl}
                onClick={(e) => e.stopPropagation()}
                className="flex items-center gap-1 text-xs text-blood-500 hover:text-blood-400"
              >
                View <ExternalLink className="w-3 h-3" />
              </a>
            )}
          </div>
        </div>

        {/* Actions */}
        {showActions && (
          <div className="flex-shrink-0 flex items-start gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
            {!notification.read && (
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  onMarkAsRead();
                }}
                className="p-1.5 text-zinc-500 hover:text-green-500 hover:bg-zinc-700 transition-colors"
                title="Mark as read"
              >
                <Check className="w-4 h-4" />
              </button>
            )}
            <button
              onClick={(e) => {
                e.stopPropagation();
                handleDelete();
              }}
              className="p-1.5 text-zinc-500 hover:text-red-500 hover:bg-zinc-700 transition-colors"
              title="Delete"
            >
              <Trash2 className="w-4 h-4" />
            </button>
          </div>
        )}
      </div>
    </motion.div>
  );
}
