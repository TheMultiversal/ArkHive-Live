'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import {
  Activity,
  Clock,
  User,
  FileText,
  Target,
  Users,
  MessageSquare,
  Link2,
  AlertTriangle,
  Eye,
  Edit,
  Plus,
  Trash2,
  Filter,
  Calendar,
  Download,
  ChevronDown,
} from 'lucide-react';
import { format, formatDistanceToNow, isToday, isYesterday, startOfDay } from 'date-fns';
import { GlitchText } from '@/components/effects/GlitchText';

// ============================================================
// Types
// ============================================================

interface ActivityItem {
  id: string;
  type: 'investigation' | 'entity' | 'document' | 'workspace' | 'comment' | 'connection' | 'alert';
  action: 'created' | 'updated' | 'deleted' | 'viewed' | 'commented' | 'shared' | 'linked' | 'flagged';
  user: {
    id: string;
    name: string;
    avatar?: string;
  };
  target: {
    id: string;
    name: string;
    type: string;
  };
  metadata?: {
    field?: string;
    from?: string;
    to?: string;
    reason?: string;
    preview?: string;
    sharedWith?: string;
    description?: string;
    [key: string]: string | undefined;
  };
  timestamp: Date;
}

// ============================================================
// Mock Data
// ============================================================

const mockActivities: ActivityItem[] = [
  {
    id: 'act_1',
    type: 'investigation',
    action: 'updated',
    user: { id: 'u1', name: 'Alex Chen' },
    target: { id: 'inv_1', name: 'Operation Blackwater', type: 'investigation' },
    metadata: { field: 'severity', from: 'high', to: 'critical' },
    timestamp: new Date(Date.now() - 1000 * 60 * 15),
  },
  {
    id: 'act_2',
    type: 'document',
    action: 'created',
    user: { id: 'u2', name: 'Sarah Miller' },
    target: { id: 'doc_1', name: 'Financial Report Q4 2023', type: 'document' },
    timestamp: new Date(Date.now() - 1000 * 60 * 45),
  },
  {
    id: 'act_3',
    type: 'entity',
    action: 'flagged',
    user: { id: 'u3', name: 'James Wilson' },
    target: { id: 'ent_1', name: 'Nexus Holdings Ltd', type: 'corporation' },
    metadata: { reason: 'Suspicious activity detected' },
    timestamp: new Date(Date.now() - 1000 * 60 * 60 * 2),
  },
  {
    id: 'act_4',
    type: 'comment',
    action: 'commented',
    user: { id: 'u4', name: 'Emily Rodriguez' },
    target: { id: 'inv_2', name: 'Shadow Protocol', type: 'investigation' },
    metadata: { preview: 'Found new connections between the shell companies...' },
    timestamp: new Date(Date.now() - 1000 * 60 * 60 * 3),
  },
  {
    id: 'act_5',
    type: 'connection',
    action: 'linked',
    user: { id: 'u1', name: 'Alex Chen' },
    target: { id: 'conn_1', name: 'Senator J. Smith ↔ Apex Corp', type: 'connection' },
    timestamp: new Date(Date.now() - 1000 * 60 * 60 * 5),
  },
  {
    id: 'act_6',
    type: 'workspace',
    action: 'shared',
    user: { id: 'u2', name: 'Sarah Miller' },
    target: { id: 'ws_1', name: 'Financial Crimes Unit', type: 'workspace' },
    metadata: { sharedWith: 'External Partner Group' },
    timestamp: new Date(Date.now() - 1000 * 60 * 60 * 8),
  },
  {
    id: 'act_7',
    type: 'alert',
    action: 'flagged',
    user: { id: 'system', name: 'System' },
    target: { id: 'alert_1', name: 'Anomaly Detection Alert', type: 'alert' },
    metadata: { description: 'Unusual access pattern detected' },
    timestamp: new Date(Date.now() - 1000 * 60 * 60 * 12),
  },
  {
    id: 'act_8',
    type: 'investigation',
    action: 'viewed',
    user: { id: 'u5', name: 'Michael Brown' },
    target: { id: 'inv_3', name: 'Project Nightfall', type: 'investigation' },
    timestamp: new Date(Date.now() - 1000 * 60 * 60 * 24),
  },
  {
    id: 'act_9',
    type: 'document',
    action: 'deleted',
    user: { id: 'u3', name: 'James Wilson' },
    target: { id: 'doc_2', name: 'Draft Report v1.2', type: 'document' },
    timestamp: new Date(Date.now() - 1000 * 60 * 60 * 28),
  },
  {
    id: 'act_10',
    type: 'entity',
    action: 'created',
    user: { id: 'u4', name: 'Emily Rodriguez' },
    target: { id: 'ent_2', name: 'Global Dynamics Inc', type: 'corporation' },
    timestamp: new Date(Date.now() - 1000 * 60 * 60 * 36),
  },
];

// ============================================================
// Helper Functions
// ============================================================

const getTypeIcon = (type: ActivityItem['type']) => {
  const icons = {
    investigation: <Target className="w-4 h-4" />,
    entity: <Users className="w-4 h-4" />,
    document: <FileText className="w-4 h-4" />,
    workspace: <Users className="w-4 h-4" />,
    comment: <MessageSquare className="w-4 h-4" />,
    connection: <Link2 className="w-4 h-4" />,
    alert: <AlertTriangle className="w-4 h-4" />,
  };
  return icons[type];
};

const getActionIcon = (action: ActivityItem['action']) => {
  const icons = {
    created: <Plus className="w-3 h-3" />,
    updated: <Edit className="w-3 h-3" />,
    deleted: <Trash2 className="w-3 h-3" />,
    viewed: <Eye className="w-3 h-3" />,
    commented: <MessageSquare className="w-3 h-3" />,
    shared: <Users className="w-3 h-3" />,
    linked: <Link2 className="w-3 h-3" />,
    flagged: <AlertTriangle className="w-3 h-3" />,
  };
  return icons[action];
};

const getTypeColor = (type: ActivityItem['type']) => {
  const colors = {
    investigation: 'text-blood-500 bg-blood-500/10',
    entity: 'text-amber-500 bg-amber-500/10',
    document: 'text-blue-500 bg-blue-500/10',
    workspace: 'text-purple-500 bg-purple-500/10',
    comment: 'text-emerald-500 bg-emerald-500/10',
    connection: 'text-cyan-500 bg-cyan-500/10',
    alert: 'text-red-500 bg-red-500/10',
  };
  return colors[type];
};

const getActionText = (activity: ActivityItem) => {
  const actionTexts: Record<ActivityItem['action'], string> = {
    created: 'created',
    updated: 'updated',
    deleted: 'deleted',
    viewed: 'viewed',
    commented: 'commented on',
    shared: 'shared',
    linked: 'linked',
    flagged: 'flagged',
  };
  return actionTexts[activity.action];
};

const getDateGroup = (date: Date): string => {
  if (isToday(date)) return 'Today';
  if (isYesterday(date)) return 'Yesterday';
  return format(date, 'MMMM d, yyyy');
};

// ============================================================
// Components
// ============================================================

function ActivityItemCard({ activity }: { activity: ActivityItem }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      className="flex gap-4 p-4 hover:bg-zinc-900/50 transition-colors"
    >
      {/* Type Icon */}
      <div className={`p-2 h-fit ${getTypeColor(activity.type)}`}>
        {getTypeIcon(activity.type)}
      </div>

      {/* Content */}
      <div className="flex-1 min-w-0">
        <div className="flex items-start justify-between gap-4">
          <div>
            <p className="text-white">
              <span className="font-medium">{activity.user.name}</span>
              <span className="text-zinc-400"> {getActionText(activity)} </span>
              <span className="text-blood-400 font-medium">{activity.target.name}</span>
            </p>
            
            {activity.metadata && (
              <div className="mt-1 text-sm text-zinc-500">
                {activity.metadata.field && (
                  <span>
                    Changed {String(activity.metadata.field)} from &quot;{String(activity.metadata.from)}&quot; to &quot;{String(activity.metadata.to)}&quot;
                  </span>
                )}
                {activity.metadata.preview && (
                  <span className="italic">&quot;{String(activity.metadata.preview)}&quot;</span>
                )}
                {activity.metadata.reason && (
                  <span>Reason: {String(activity.metadata.reason)}</span>
                )}
                {activity.metadata.sharedWith && (
                  <span>Shared with {String(activity.metadata.sharedWith)}</span>
                )}
                {activity.metadata.description && (
                  <span>{String(activity.metadata.description)}</span>
                )}
              </div>
            )}
          </div>
          
          <div className="flex items-center gap-2 text-zinc-500 text-xs whitespace-nowrap">
            <Clock className="w-3 h-3" />
            {formatDistanceToNow(activity.timestamp, { addSuffix: true })}
          </div>
        </div>
      </div>
    </motion.div>
  );
}

function FilterDropdown({ 
  label, 
  options, 
  selected, 
  onChange 
}: { 
  label: string;
  options: { value: string; label: string }[];
  selected: string[];
  onChange: (values: string[]) => void;
}) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 px-4 py-2 glass text-zinc-400 hover:text-white transition-colors"
      >
        {label}
        {selected.length > 0 && (
          <span className="px-1.5 py-0.5 bg-blood-600 text-white text-xs">
            {selected.length}
          </span>
        )}
        <ChevronDown className={`w-4 h-4 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
      </button>
      
      {isOpen && (
        <div className="absolute top-full left-0 mt-1 w-48 glass border border-zinc-700 py-2 z-10">
          {options.map((option) => (
            <button
              key={option.value}
              onClick={() => {
                if (selected.includes(option.value)) {
                  onChange(selected.filter(v => v !== option.value));
                } else {
                  onChange([...selected, option.value]);
                }
              }}
              className={`w-full px-4 py-2 text-left text-sm flex items-center gap-2 hover:bg-zinc-800 ${
                selected.includes(option.value) ? 'text-blood-400' : 'text-zinc-400'
              }`}
            >
              <div className={`w-4 h-4 border ${
                selected.includes(option.value) 
                  ? 'bg-blood-600 border-blood-600' 
                  : 'border-zinc-600'
              } flex items-center justify-center`}>
                {selected.includes(option.value) && (
                  <span className="text-white text-xs">✓</span>
                )}
              </div>
              {option.label}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

// ============================================================
// Main Page
// ============================================================

export default function ActivityPage() {
  const [selectedTypes, setSelectedTypes] = useState<string[]>([]);
  const [selectedActions, setSelectedActions] = useState<string[]>([]);

  const filteredActivities = mockActivities.filter((activity) => {
    if (selectedTypes.length > 0 && !selectedTypes.includes(activity.type)) {
      return false;
    }
    if (selectedActions.length > 0 && !selectedActions.includes(activity.action)) {
      return false;
    }
    return true;
  });

  // Group activities by date
  const groupedActivities = filteredActivities.reduce((acc, activity) => {
    const group = getDateGroup(activity.timestamp);
    if (!acc[group]) {
      acc[group] = [];
    }
    acc[group].push(activity);
    return acc;
  }, {} as Record<string, ActivityItem[]>);

  const typeOptions = [
    { value: 'investigation', label: 'Investigations' },
    { value: 'entity', label: 'Entities' },
    { value: 'document', label: 'Documents' },
    { value: 'workspace', label: 'Workspaces' },
    { value: 'comment', label: 'Comments' },
    { value: 'connection', label: 'Connections' },
    { value: 'alert', label: 'Alerts' },
  ];

  const actionOptions = [
    { value: 'created', label: 'Created' },
    { value: 'updated', label: 'Updated' },
    { value: 'deleted', label: 'Deleted' },
    { value: 'viewed', label: 'Viewed' },
    { value: 'commented', label: 'Commented' },
    { value: 'shared', label: 'Shared' },
    { value: 'flagged', label: 'Flagged' },
  ];

  return (
    <div className="min-h-screen bg-black">
      <div className="max-w-5xl mx-auto px-6 py-12">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-4xl font-black tracking-tighter text-white mb-2">
              <GlitchText text="ACTIVITY" />
            </h1>
            <p className="text-zinc-400">
              Real-time feed of all actions across the platform
            </p>
          </div>

          <div className="flex items-center gap-4">
            <button className="flex items-center gap-2 px-4 py-2 glass text-zinc-400 hover:text-white transition-colors">
              <Calendar className="w-4 h-4" />
              Date Range
            </button>
            <button className="flex items-center gap-2 px-4 py-2 bg-blood-600 text-white hover:bg-blood-500 transition-colors">
              <Download className="w-4 h-4" />
              Export
            </button>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-4 gap-4 mb-8">
          {[
            { label: 'Total Activities', value: mockActivities.length, icon: <Activity className="w-5 h-5" /> },
            { label: 'Today', value: mockActivities.filter(a => isToday(a.timestamp)).length, icon: <Clock className="w-5 h-5 text-emerald-500" /> },
            { label: 'Active Users', value: new Set(mockActivities.map(a => a.user.id)).size, icon: <User className="w-5 h-5 text-blue-500" /> },
            { label: 'Alerts', value: mockActivities.filter(a => a.type === 'alert').length, icon: <AlertTriangle className="w-5 h-5 text-red-500" /> },
          ].map((stat, i) => (
            <div key={i} className="glass-card p-4 flex items-center gap-4">
              <div className="p-2 bg-zinc-800">
                {stat.icon}
              </div>
              <div>
                <p className="text-zinc-400 text-sm">{stat.label}</p>
                <p className="text-white text-xl font-bold">{stat.value}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Filters */}
        <div className="flex items-center gap-4 mb-8">
          <FilterDropdown
            label="Type"
            options={typeOptions}
            selected={selectedTypes}
            onChange={setSelectedTypes}
          />
          <FilterDropdown
            label="Action"
            options={actionOptions}
            selected={selectedActions}
            onChange={setSelectedActions}
          />
          
          {(selectedTypes.length > 0 || selectedActions.length > 0) && (
            <button
              onClick={() => {
                setSelectedTypes([]);
                setSelectedActions([]);
              }}
              className="text-sm text-zinc-400 hover:text-white transition-colors"
            >
              Clear filters
            </button>
          )}
        </div>

        {/* Activity Feed */}
        <div className="space-y-6">
          {Object.entries(groupedActivities).map(([date, activities]) => (
            <div key={date}>
              <div className="flex items-center gap-4 mb-4">
                <div className="h-px flex-1 bg-zinc-800" />
                <span className="text-zinc-500 text-sm font-medium px-3">
                  {date}
                </span>
                <div className="h-px flex-1 bg-zinc-800" />
              </div>

              <div className="glass-card overflow-hidden divide-y divide-zinc-800">
                {activities.map((activity) => (
                  <ActivityItemCard key={activity.id} activity={activity} />
                ))}
              </div>
            </div>
          ))}
        </div>

        {filteredActivities.length === 0 && (
          <div className="text-center py-16">
            <Activity className="w-16 h-16 text-zinc-700 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-white mb-2">No activity found</h3>
            <p className="text-zinc-400">
              Try adjusting your filters
            </p>
          </div>
        )}

        {/* Load More */}
        <div className="flex justify-center mt-8">
          <button className="px-8 py-3 glass text-zinc-400 hover:text-white transition-colors">
            Load More Activity
          </button>
        </div>
      </div>
    </div>
  );
}
