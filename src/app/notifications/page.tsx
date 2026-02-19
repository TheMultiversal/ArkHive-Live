'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Bell,
  Check,
  CheckCheck,
  Trash2,
  Filter,
  Settings,
  AlertTriangle,
  FileText,
  Users,
  Target,
  MessageSquare,
  Clock,
  MoreVertical,
  Eye,
  Volume2,
  VolumeX,
} from 'lucide-react';
import { format, formatDistanceToNow, isToday, isThisWeek } from 'date-fns';
import { GlitchText } from '@/components/effects/GlitchText';

// ============================================================
// Types
// ============================================================

interface NotificationItem {
  id: string;
  type: 'alert' | 'investigation' | 'document' | 'team' | 'comment' | 'system';
  title: string;
  message: string;
  read: boolean;
  timestamp: Date;
  actionUrl?: string;
  metadata?: Record<string, unknown>;
}

// ============================================================
// Mock Data
// ============================================================

const mockNotifications: NotificationItem[] = [
  {
    id: 'notif_1',
    type: 'alert',
    title: 'Security Alert',
    message: 'Unusual access pattern detected on your account. Please verify recent activity.',
    read: false,
    timestamp: new Date(Date.now() - 1000 * 60 * 15),
    actionUrl: '/audit',
  },
  {
    id: 'notif_2',
    type: 'investigation',
    title: 'Investigation Update',
    message: 'Blackwater Massacre has been elevated to critical severity level.',
    read: false,
    timestamp: new Date(Date.now() - 1000 * 60 * 60),
    actionUrl: '/investigations/blackwater-massacre',
  },
  {
    id: 'notif_3',
    type: 'comment',
    title: 'New Comment',
    message: 'Sarah Miller commented on NSA Mass Surveillance: "Found new connections..."',
    read: false,
    timestamp: new Date(Date.now() - 1000 * 60 * 60 * 3),
    actionUrl: '/investigations/nsa-mass-surveillance',
  },
  {
    id: 'notif_4',
    type: 'team',
    title: 'Team Invitation',
    message: 'You have been invited to join the Financial Crimes workspace.',
    read: true,
    timestamp: new Date(Date.now() - 1000 * 60 * 60 * 6),
    actionUrl: '/workspaces',
  },
  {
    id: 'notif_5',
    type: 'document',
    title: 'Document Shared',
    message: 'James Wilson shared "Classified Report Q4" with you.',
    read: true,
    timestamp: new Date(Date.now() - 1000 * 60 * 60 * 12),
    actionUrl: '/documents',
  },
  {
    id: 'notif_6',
    type: 'system',
    title: 'System Maintenance',
    message: 'Scheduled maintenance will occur on Jan 20, 2024 from 2-4 AM UTC.',
    read: true,
    timestamp: new Date(Date.now() - 1000 * 60 * 60 * 24),
  },
  {
    id: 'notif_7',
    type: 'investigation',
    title: 'New Connection Found',
    message: 'Automated analysis discovered a new link between Nexus Holdings and Global Dynamics.',
    read: true,
    timestamp: new Date(Date.now() - 1000 * 60 * 60 * 36),
    actionUrl: '/investigations',
  },
  {
    id: 'notif_8',
    type: 'alert',
    title: 'Expiring Documents',
    message: '3 documents in your workspace are set to expire within 7 days.',
    read: true,
    timestamp: new Date(Date.now() - 1000 * 60 * 60 * 48),
    actionUrl: '/documents',
  },
];

// ============================================================
// Helper Functions
// ============================================================

const typeIcons = {
  alert: <AlertTriangle className="w-5 h-5" />,
  investigation: <Target className="w-5 h-5" />,
  document: <FileText className="w-5 h-5" />,
  team: <Users className="w-5 h-5" />,
  comment: <MessageSquare className="w-5 h-5" />,
  system: <Bell className="w-5 h-5" />,
};

const typeColors = {
  alert: 'text-red-500 bg-red-500/10',
  investigation: 'text-blood-500 bg-blood-500/10',
  document: 'text-blue-500 bg-blue-500/10',
  team: 'text-purple-500 bg-purple-500/10',
  comment: 'text-emerald-500 bg-emerald-500/10',
  system: 'text-zinc-500 bg-zinc-500/10',
};

// ============================================================
// Components
// ============================================================

function NotificationCard({ 
  notification, 
  onMarkRead, 
  onDelete 
}: { 
  notification: NotificationItem;
  onMarkRead: (id: string) => void;
  onDelete: (id: string) => void;
}) {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: 20 }}
      className={`p-4 border-l-2 ${
        notification.read 
          ? 'border-zinc-700 bg-transparent' 
          : 'border-blood-500 bg-blood-500/5'
      } hover:bg-zinc-900/50 transition-colors relative group`}
    >
      <div className="flex gap-4">
        <div className={`p-2 h-fit ${typeColors[notification.type]}`}>
          {typeIcons[notification.type]}
        </div>
        
        <div className="flex-1 min-w-0">
          <div className="flex items-start justify-between gap-4">
            <div>
              <h3 className={`font-semibold ${notification.read ? 'text-zinc-400' : 'text-white'}`}>
                {notification.title}
              </h3>
              <p className="text-zinc-500 text-sm mt-1">{notification.message}</p>
            </div>
            
            <div className="flex items-center gap-2">
              <span className="text-zinc-600 text-xs whitespace-nowrap">
                {formatDistanceToNow(notification.timestamp, { addSuffix: true })}
              </span>
              
              <div className="relative">
                <button
                  onClick={() => setShowMenu(!showMenu)}
                  className="p-1 text-zinc-600 hover:text-white opacity-0 group-hover:opacity-100 transition-opacity"
                >
                  <MoreVertical className="w-4 h-4" />
                </button>
                
                <AnimatePresence>
                  {showMenu && (
                    <motion.div
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.95 }}
                      className="absolute right-0 top-full mt-1 w-36 glass border border-zinc-700 py-1 z-10"
                    >
                      {!notification.read && (
                        <button
                          onClick={() => {
                            onMarkRead(notification.id);
                            setShowMenu(false);
                          }}
                          className="w-full px-3 py-2 text-left text-sm text-zinc-400 hover:text-white hover:bg-zinc-800 flex items-center gap-2"
                        >
                          <Check className="w-3 h-3" />
                          Mark as read
                        </button>
                      )}
                      {notification.actionUrl && (
                        <a
                          href={notification.actionUrl}
                          className="w-full px-3 py-2 text-left text-sm text-zinc-400 hover:text-white hover:bg-zinc-800 flex items-center gap-2"
                        >
                          <Eye className="w-3 h-3" />
                          View details
                        </a>
                      )}
                      <button
                        onClick={() => {
                          onDelete(notification.id);
                          setShowMenu(false);
                        }}
                        className="w-full px-3 py-2 text-left text-sm text-red-400 hover:text-red-300 hover:bg-zinc-800 flex items-center gap-2"
                      >
                        <Trash2 className="w-3 h-3" />
                        Delete
                      </button>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>
          </div>
          
          {notification.actionUrl && (
            <a
              href={notification.actionUrl}
              className="inline-block mt-2 text-sm text-blood-500 hover:text-blood-400 transition-colors"
            >
              View details →
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
}

// ============================================================
// Main Page
// ============================================================

export default function NotificationsPage() {
  const [notifications, setNotifications] = useState(mockNotifications);
  const [filter, setFilter] = useState<'all' | 'unread'>('all');
  const [typeFilter, setTypeFilter] = useState<string>('all');
  const [soundEnabled, setSoundEnabled] = useState(true);

  const handleMarkRead = (id: string) => {
    setNotifications((prev) =>
      prev.map((n) => (n.id === id ? { ...n, read: true } : n))
    );
  };

  const handleDelete = (id: string) => {
    setNotifications((prev) => prev.filter((n) => n.id !== id));
  };

  const handleMarkAllRead = () => {
    setNotifications((prev) => prev.map((n) => ({ ...n, read: true })));
  };

  const handleClearAll = () => {
    setNotifications([]);
  };

  const filteredNotifications = notifications.filter((n) => {
    if (filter === 'unread' && n.read) return false;
    if (typeFilter !== 'all' && n.type !== typeFilter) return false;
    return true;
  });

  const unreadCount = notifications.filter((n) => !n.read).length;

  // Group by time
  const grouped = {
    today: filteredNotifications.filter((n) => isToday(n.timestamp)),
    thisWeek: filteredNotifications.filter((n) => !isToday(n.timestamp) && isThisWeek(n.timestamp)),
    older: filteredNotifications.filter((n) => !isThisWeek(n.timestamp)),
  };

  return (
    <div className="min-h-screen bg-black">
      <div className="max-w-4xl mx-auto px-6 py-12">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-4xl font-black tracking-tighter text-white mb-2">
              <GlitchText text="NOTIFICATIONS" />
            </h1>
            <p className="text-zinc-400">
              {unreadCount > 0 
                ? `You have ${unreadCount} unread notification${unreadCount > 1 ? 's' : ''}`
                : 'All caught up!'
              }
            </p>
          </div>

          <div className="flex items-center gap-4">
            <button
              onClick={() => setSoundEnabled(!soundEnabled)}
              className={`p-2 glass ${soundEnabled ? 'text-white' : 'text-zinc-500'}`}
              title={soundEnabled ? 'Mute notifications' : 'Enable sound'}
            >
              {soundEnabled ? <Volume2 className="w-5 h-5" /> : <VolumeX className="w-5 h-5" />}
            </button>
            <button className="p-2 glass text-zinc-400 hover:text-white transition-colors">
              <Settings className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Actions Bar */}
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-4">
            <div className="flex items-center glass p-1">
              <button
                onClick={() => setFilter('all')}
                className={`px-4 py-2 text-sm font-medium transition-colors ${
                  filter === 'all' ? 'bg-blood-600 text-white' : 'text-zinc-400 hover:text-white'
                }`}
              >
                All
              </button>
              <button
                onClick={() => setFilter('unread')}
                className={`px-4 py-2 text-sm font-medium transition-colors ${
                  filter === 'unread' ? 'bg-blood-600 text-white' : 'text-zinc-400 hover:text-white'
                }`}
              >
                Unread ({unreadCount})
              </button>
            </div>

            <select
              value={typeFilter}
              onChange={(e) => setTypeFilter(e.target.value)}
              className="px-3 py-2 bg-zinc-900 border border-zinc-700 text-white text-sm focus:outline-none focus:border-blood-500"
            >
              <option value="all">All types</option>
              <option value="alert">Alerts</option>
              <option value="investigation">Investigations</option>
              <option value="document">Documents</option>
              <option value="team">Team</option>
              <option value="comment">Comments</option>
              <option value="system">System</option>
            </select>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handleMarkAllRead}
              disabled={unreadCount === 0}
              className="flex items-center gap-2 px-4 py-2 text-zinc-400 hover:text-white transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <CheckCheck className="w-4 h-4" />
              Mark all read
            </button>
            <button
              onClick={handleClearAll}
              disabled={notifications.length === 0}
              className="flex items-center gap-2 px-4 py-2 text-red-400 hover:text-red-300 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <Trash2 className="w-4 h-4" />
              Clear all
            </button>
          </div>
        </div>

        {/* Notifications List */}
        <div className="space-y-6">
          {grouped.today.length > 0 && (
            <div>
              <h2 className="text-sm font-medium text-zinc-500 mb-3 flex items-center gap-2">
                <Clock className="w-4 h-4" />
                Today
              </h2>
              <div className="glass-card overflow-hidden divide-y divide-zinc-800">
                <AnimatePresence>
                  {grouped.today.map((notification) => (
                    <NotificationCard
                      key={notification.id}
                      notification={notification}
                      onMarkRead={handleMarkRead}
                      onDelete={handleDelete}
                    />
                  ))}
                </AnimatePresence>
              </div>
            </div>
          )}

          {grouped.thisWeek.length > 0 && (
            <div>
              <h2 className="text-sm font-medium text-zinc-500 mb-3">This Week</h2>
              <div className="glass-card overflow-hidden divide-y divide-zinc-800">
                <AnimatePresence>
                  {grouped.thisWeek.map((notification) => (
                    <NotificationCard
                      key={notification.id}
                      notification={notification}
                      onMarkRead={handleMarkRead}
                      onDelete={handleDelete}
                    />
                  ))}
                </AnimatePresence>
              </div>
            </div>
          )}

          {grouped.older.length > 0 && (
            <div>
              <h2 className="text-sm font-medium text-zinc-500 mb-3">Older</h2>
              <div className="glass-card overflow-hidden divide-y divide-zinc-800">
                <AnimatePresence>
                  {grouped.older.map((notification) => (
                    <NotificationCard
                      key={notification.id}
                      notification={notification}
                      onMarkRead={handleMarkRead}
                      onDelete={handleDelete}
                    />
                  ))}
                </AnimatePresence>
              </div>
            </div>
          )}
        </div>

        {filteredNotifications.length === 0 && (
          <div className="text-center py-16">
            <Bell className="w-16 h-16 text-zinc-700 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-white mb-2">No notifications</h3>
            <p className="text-zinc-400">
              {filter === 'unread' 
                ? "You've read all your notifications"
                : "You don't have any notifications yet"
              }
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
