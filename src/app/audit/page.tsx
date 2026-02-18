'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  History,
  User,
  FileText,
  Edit,
  Trash2,
  Eye,
  Plus,
  Download,
  Filter,
  Search,
  Calendar,
  ChevronDown,
  ChevronRight,
  AlertTriangle,
  CheckCircle,
  Clock,
  Shield,
  Lock,
  Unlock,
} from 'lucide-react';
import { format } from 'date-fns';
import { GlitchText } from '@/components/effects/GlitchText';

// ============================================================
// Types
// ============================================================

interface AuditLogEntry {
  id: string;
  timestamp: Date;
  user: {
    id: string;
    name: string;
    email: string;
    avatar?: string;
  };
  action: 'create' | 'read' | 'update' | 'delete' | 'login' | 'logout' | 'export' | 'share' | 'permission';
  resource: {
    type: 'investigation' | 'entity' | 'document' | 'workspace' | 'user' | 'system';
    id: string;
    name: string;
  };
  details: string;
  metadata?: Record<string, unknown>;
  ipAddress: string;
  userAgent: string;
  success: boolean;
  riskLevel: 'low' | 'medium' | 'high' | 'critical';
}

// ============================================================
// Mock Data
// ============================================================

const mockAuditLogs: AuditLogEntry[] = [
  {
    id: 'log_1',
    timestamp: new Date('2024-01-15T14:32:00'),
    user: { id: 'u1', name: 'Alex Chen', email: 'alex@arkhive.io' },
    action: 'update',
    resource: { type: 'investigation', id: 'inv_1', name: 'Operation Blackwater' },
    details: 'Updated investigation severity from "high" to "critical"',
    ipAddress: '192.168.1.105',
    userAgent: 'Mozilla/5.0 (Windows NT 10.0; Win64; x64)',
    success: true,
    riskLevel: 'medium',
  },
  {
    id: 'log_2',
    timestamp: new Date('2024-01-15T13:45:00'),
    user: { id: 'u2', name: 'Sarah Miller', email: 'sarah@arkhive.io' },
    action: 'export',
    resource: { type: 'document', id: 'doc_1', name: 'Classified Report #4521' },
    details: 'Exported document to PDF format',
    ipAddress: '192.168.1.87',
    userAgent: 'Mozilla/5.0 (Macintosh; Intel Mac OS X)',
    success: true,
    riskLevel: 'high',
  },
  {
    id: 'log_3',
    timestamp: new Date('2024-01-15T12:20:00'),
    user: { id: 'u3', name: 'System', email: 'system@arkhive.io' },
    action: 'delete',
    resource: { type: 'user', id: 'u_old', name: 'Deactivated User' },
    details: 'Automatic user account cleanup after 90 days inactivity',
    ipAddress: '10.0.0.1',
    userAgent: 'ArkHive System/1.0',
    success: true,
    riskLevel: 'low',
  },
  {
    id: 'log_4',
    timestamp: new Date('2024-01-15T11:15:00'),
    user: { id: 'u4', name: 'Unknown Actor', email: 'unknown' },
    action: 'login',
    resource: { type: 'system', id: 'auth', name: 'Authentication System' },
    details: 'Failed login attempt - invalid credentials (3rd attempt)',
    ipAddress: '45.33.32.156',
    userAgent: 'curl/7.68.0',
    success: false,
    riskLevel: 'critical',
  },
  {
    id: 'log_5',
    timestamp: new Date('2024-01-15T10:30:00'),
    user: { id: 'u1', name: 'Alex Chen', email: 'alex@arkhive.io' },
    action: 'create',
    resource: { type: 'entity', id: 'ent_5', name: 'Nexus Holdings Ltd' },
    details: 'Created new entity with risk level "high"',
    ipAddress: '192.168.1.105',
    userAgent: 'Mozilla/5.0 (Windows NT 10.0; Win64; x64)',
    success: true,
    riskLevel: 'medium',
  },
  {
    id: 'log_6',
    timestamp: new Date('2024-01-15T09:00:00'),
    user: { id: 'u5', name: 'James Wilson', email: 'james@arkhive.io' },
    action: 'permission',
    resource: { type: 'workspace', id: 'ws_1', name: 'Shadow Protocol Team' },
    details: 'Granted "admin" access to new team member',
    ipAddress: '192.168.1.45',
    userAgent: 'Mozilla/5.0 (Windows NT 10.0; Win64; x64)',
    success: true,
    riskLevel: 'high',
  },
  {
    id: 'log_7',
    timestamp: new Date('2024-01-14T18:45:00'),
    user: { id: 'u2', name: 'Sarah Miller', email: 'sarah@arkhive.io' },
    action: 'share',
    resource: { type: 'investigation', id: 'inv_2', name: 'Corporate Espionage Case' },
    details: 'Shared investigation with external collaborator',
    ipAddress: '192.168.1.87',
    userAgent: 'Mozilla/5.0 (Macintosh; Intel Mac OS X)',
    success: true,
    riskLevel: 'critical',
  },
];

// ============================================================
// Helper Functions
// ============================================================

const getActionIcon = (action: AuditLogEntry['action']) => {
  const icons = {
    create: <Plus className="w-4 h-4" />,
    read: <Eye className="w-4 h-4" />,
    update: <Edit className="w-4 h-4" />,
    delete: <Trash2 className="w-4 h-4" />,
    login: <Unlock className="w-4 h-4" />,
    logout: <Lock className="w-4 h-4" />,
    export: <Download className="w-4 h-4" />,
    share: <User className="w-4 h-4" />,
    permission: <Shield className="w-4 h-4" />,
  };
  return icons[action] || <FileText className="w-4 h-4" />;
};

const getActionColor = (action: AuditLogEntry['action']) => {
  const colors = {
    create: 'text-emerald-500 bg-emerald-500/10',
    read: 'text-blue-500 bg-blue-500/10',
    update: 'text-amber-500 bg-amber-500/10',
    delete: 'text-red-500 bg-red-500/10',
    login: 'text-green-500 bg-green-500/10',
    logout: 'text-zinc-500 bg-zinc-500/10',
    export: 'text-purple-500 bg-purple-500/10',
    share: 'text-cyan-500 bg-cyan-500/10',
    permission: 'text-orange-500 bg-orange-500/10',
  };
  return colors[action] || 'text-zinc-500 bg-zinc-500/10';
};

const getRiskColor = (level: AuditLogEntry['riskLevel']) => {
  const colors = {
    low: 'text-green-500',
    medium: 'text-amber-500',
    high: 'text-orange-500',
    critical: 'text-red-500',
  };
  return colors[level];
};

// ============================================================
// Components
// ============================================================

function AuditLogRow({ log, isExpanded, onToggle }: { 
  log: AuditLogEntry; 
  isExpanded: boolean;
  onToggle: () => void;
}) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="border-b border-zinc-800 last:border-0"
    >
      <div
        className={`flex items-center gap-4 p-4 cursor-pointer hover:bg-zinc-900/50 transition-colors ${
          !log.success ? 'bg-red-950/20' : ''
        }`}
        onClick={onToggle}
      >
        <button className="text-zinc-500">
          {isExpanded ? (
            <ChevronDown className="w-4 h-4" />
          ) : (
            <ChevronRight className="w-4 h-4" />
          )}
        </button>

        <div className={`p-2 ${getActionColor(log.action)}`}>
          {getActionIcon(log.action)}
        </div>

        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2">
            <span className="text-white font-medium">{log.user.name}</span>
            <span className="text-zinc-500">·</span>
            <span className="text-zinc-400 capitalize">{log.action}</span>
            <span className="text-zinc-500">·</span>
            <span className="text-blood-400">{log.resource.name}</span>
          </div>
          <p className="text-zinc-500 text-sm truncate mt-1">{log.details}</p>
        </div>

        <div className="flex items-center gap-4">
          {!log.success && (
            <AlertTriangle className="w-4 h-4 text-red-500" />
          )}
          <span className={`text-xs font-medium uppercase ${getRiskColor(log.riskLevel)}`}>
            {log.riskLevel}
          </span>
          <div className="flex items-center gap-1 text-zinc-500 text-sm">
            <Clock className="w-3 h-3" />
            {format(log.timestamp, 'HH:mm')}
          </div>
        </div>
      </div>

      <AnimatePresence>
        {isExpanded && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="overflow-hidden"
          >
            <div className="px-4 pb-4 pl-14 grid grid-cols-2 gap-4 text-sm">
              <div>
                <span className="text-zinc-500">Resource Type:</span>
                <span className="text-white ml-2 capitalize">{log.resource.type}</span>
              </div>
              <div>
                <span className="text-zinc-500">Resource ID:</span>
                <span className="text-white ml-2 font-mono">{log.resource.id}</span>
              </div>
              <div>
                <span className="text-zinc-500">IP Address:</span>
                <span className="text-white ml-2 font-mono">{log.ipAddress}</span>
              </div>
              <div>
                <span className="text-zinc-500">Timestamp:</span>
                <span className="text-white ml-2">
                  {format(log.timestamp, 'PPpp')}
                </span>
              </div>
              <div className="col-span-2">
                <span className="text-zinc-500">User Agent:</span>
                <span className="text-white ml-2 text-xs font-mono break-all">
                  {log.userAgent}
                </span>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

// ============================================================
// Main Page
// ============================================================

export default function AuditPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedActions, setSelectedActions] = useState<string[]>([]);
  const [selectedRisks, setSelectedRisks] = useState<string[]>([]);
  const [expandedLogs, setExpandedLogs] = useState<Set<string>>(new Set());

  const toggleExpanded = (id: string) => {
    setExpandedLogs((prev) => {
      const next = new Set(prev);
      if (next.has(id)) {
        next.delete(id);
      } else {
        next.add(id);
      }
      return next;
    });
  };

  const filteredLogs = mockAuditLogs.filter((log) => {
    if (searchQuery) {
      const search = searchQuery.toLowerCase();
      if (
        !log.user.name.toLowerCase().includes(search) &&
        !log.resource.name.toLowerCase().includes(search) &&
        !log.details.toLowerCase().includes(search)
      ) {
        return false;
      }
    }
    if (selectedActions.length > 0 && !selectedActions.includes(log.action)) {
      return false;
    }
    if (selectedRisks.length > 0 && !selectedRisks.includes(log.riskLevel)) {
      return false;
    }
    return true;
  });

  // Group logs by date
  const groupedLogs = filteredLogs.reduce((acc, log) => {
    const dateKey = format(log.timestamp, 'yyyy-MM-dd');
    if (!acc[dateKey]) {
      acc[dateKey] = [];
    }
    acc[dateKey].push(log);
    return acc;
  }, {} as Record<string, AuditLogEntry[]>);

  return (
    <div className="min-h-screen bg-black">
      <div className="max-w-7xl mx-auto px-6 py-12">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-4xl font-black tracking-tighter text-white mb-2">
              <GlitchText text="AUDIT LOG" />
            </h1>
            <p className="text-zinc-400">
              Complete record of all system activities and changes
            </p>
          </div>

          <div className="flex items-center gap-4">
            <button className="flex items-center gap-2 px-4 py-2 glass text-zinc-400 hover:text-white transition-colors">
              <Calendar className="w-4 h-4" />
              Date Range
            </button>
            <button className="flex items-center gap-2 px-4 py-2 bg-blood-600 text-white hover:bg-blood-500 transition-colors">
              <Download className="w-4 h-4" />
              Export Logs
            </button>
          </div>
        </div>

        {/* Stats Bar */}
        <div className="grid grid-cols-4 gap-4 mb-8">
          {[
            { label: 'Total Events', value: '12,847', icon: <History className="w-5 h-5" /> },
            { label: 'Failed Actions', value: '23', icon: <AlertTriangle className="w-5 h-5 text-red-500" /> },
            { label: 'High Risk Events', value: '156', icon: <Shield className="w-5 h-5 text-orange-500" /> },
            { label: 'Active Users', value: '47', icon: <User className="w-5 h-5 text-blue-500" /> },
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
        <div className="glass-card p-4 mb-6">
          <div className="flex items-center gap-4">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-500" />
              <input
                type="text"
                placeholder="Search logs..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2 bg-zinc-900 border border-zinc-800 text-white placeholder:text-zinc-500 focus:outline-none focus:border-blood-500"
              />
            </div>

            <div className="flex items-center gap-2">
              <span className="text-zinc-400 text-sm">Actions:</span>
              {['create', 'update', 'delete', 'export'].map((action) => (
                <button
                  key={action}
                  onClick={() =>
                    setSelectedActions((prev) =>
                      prev.includes(action)
                        ? prev.filter((a) => a !== action)
                        : [...prev, action]
                    )
                  }
                  className={`px-3 py-1 text-xs font-medium capitalize ${
                    selectedActions.includes(action)
                      ? 'bg-blood-600 text-white'
                      : 'bg-zinc-800 text-zinc-400 hover:text-white'
                  }`}
                >
                  {action}
                </button>
              ))}
            </div>

            <div className="flex items-center gap-2">
              <span className="text-zinc-400 text-sm">Risk:</span>
              {['low', 'medium', 'high', 'critical'].map((risk) => (
                <button
                  key={risk}
                  onClick={() =>
                    setSelectedRisks((prev) =>
                      prev.includes(risk)
                        ? prev.filter((r) => r !== risk)
                        : [...prev, risk]
                    )
                  }
                  className={`px-3 py-1 text-xs font-medium capitalize ${
                    selectedRisks.includes(risk)
                      ? 'bg-blood-600 text-white'
                      : 'bg-zinc-800 text-zinc-400 hover:text-white'
                  }`}
                >
                  {risk}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Log Entries */}
        <div className="space-y-6">
          {Object.entries(groupedLogs).map(([date, logs]) => (
            <div key={date}>
              <div className="flex items-center gap-4 mb-4">
                <div className="h-px flex-1 bg-zinc-800" />
                <span className="text-zinc-500 text-sm font-medium">
                  {format(new Date(date), 'EEEE, MMMM d, yyyy')}
                </span>
                <div className="h-px flex-1 bg-zinc-800" />
              </div>

              <div className="glass-card overflow-hidden">
                {logs.map((log) => (
                  <AuditLogRow
                    key={log.id}
                    log={log}
                    isExpanded={expandedLogs.has(log.id)}
                    onToggle={() => toggleExpanded(log.id)}
                  />
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Pagination */}
        <div className="flex items-center justify-between mt-8">
          <p className="text-zinc-400 text-sm">
            Showing {filteredLogs.length} of {mockAuditLogs.length} entries
          </p>
          <div className="flex items-center gap-2">
            <button className="px-4 py-2 glass text-zinc-400 hover:text-white transition-colors disabled:opacity-50" disabled>
              Previous
            </button>
            <button className="px-4 py-2 bg-blood-600 text-white">1</button>
            <button className="px-4 py-2 glass text-zinc-400 hover:text-white transition-colors">2</button>
            <button className="px-4 py-2 glass text-zinc-400 hover:text-white transition-colors">3</button>
            <button className="px-4 py-2 glass text-zinc-400 hover:text-white transition-colors">
              Next
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
