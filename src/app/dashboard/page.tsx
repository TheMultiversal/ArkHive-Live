'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import {
  FileText, Users, Building2, AlertTriangle, TrendingUp, TrendingDown,
  Eye, Clock, Activity, BarChart3, Shield, Globe, Calendar,
  ChevronRight, Zap, Target
} from 'lucide-react';

interface StatData {
  label: string;
  value: number;
  change: number;
  changeLabel: string;
  icon: typeof FileText;
  color: string;
}

interface RecentActivity {
  id: string;
  type: 'investigation' | 'document' | 'entity' | 'workspace';
  title: string;
  action: string;
  time: string;
}

interface ActiveInvestigation {
  id: string;
  title: string;
  severity: 'critical' | 'high' | 'medium' | 'low';
  progress: number;
  lastUpdate: string;
}

const stats: StatData[] = [
  {
    label: 'Active Investigations',
    value: 24,
    change: 12,
    changeLabel: 'from last month',
    icon: Target,
    color: 'blood'
  },
  {
    label: 'Documents Analyzed',
    value: 1847,
    change: 23,
    changeLabel: 'this week',
    icon: FileText,
    color: 'blue'
  },
  {
    label: 'Entities Tracked',
    value: 342,
    change: 8,
    changeLabel: 'new this month',
    icon: Building2,
    color: 'purple'
  },
  {
    label: 'Active Collaborators',
    value: 56,
    change: 15,
    changeLabel: 'growth',
    icon: Users,
    color: 'green'
  }
];

const recentActivity: RecentActivity[] = [
  {
    id: '1',
    type: 'investigation',
    title: 'Project Nightshade',
    action: 'New evidence uploaded',
    time: '2 minutes ago'
  },
  {
    id: '2',
    type: 'document',
    title: 'FDA Internal Memo',
    action: 'Classified as sensitive',
    time: '15 minutes ago'
  },
  {
    id: '3',
    type: 'entity',
    title: 'Meridian Chemical Corp',
    action: 'New affiliation discovered',
    time: '1 hour ago'
  },
  {
    id: '4',
    type: 'workspace',
    title: 'Operation Deep Dive',
    action: 'New member joined',
    time: '2 hours ago'
  },
  {
    id: '5',
    type: 'investigation',
    title: 'Silent Erosion',
    action: 'Status changed to critical',
    time: '3 hours ago'
  }
];

const activeInvestigations: ActiveInvestigation[] = [
  {
    id: '1',
    title: 'Project Nightshade',
    severity: 'critical',
    progress: 78,
    lastUpdate: 'Today'
  },
  {
    id: '2',
    title: 'Operation Blackwater',
    severity: 'high',
    progress: 45,
    lastUpdate: 'Yesterday'
  },
  {
    id: '3',
    title: 'Silent Erosion',
    severity: 'critical',
    progress: 62,
    lastUpdate: 'Today'
  },
  {
    id: '4',
    title: 'The Meridian Files',
    severity: 'medium',
    progress: 34,
    lastUpdate: '3 days ago'
  }
];

const severityColors = {
  critical: 'bg-red-500',
  high: 'bg-orange-500',
  medium: 'bg-yellow-500',
  low: 'bg-green-500'
};

const activityIcons = {
  investigation: Target,
  document: FileText,
  entity: Building2,
  workspace: Users
};

export default function DashboardPage() {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => setCurrentTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="min-h-screen bg-black pt-24 pb-16">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex flex-col md:flex-row md:items-center md:justify-between mb-8"
        >
          <div>
            <h1 className="text-3xl font-bold text-white mb-2">Dashboard</h1>
            <p className="text-zinc-400">
              Overview of ongoing investigations and activity
            </p>
          </div>
          <div className="mt-4 md:mt-0 flex items-center gap-4 text-zinc-400">
            <Clock className="w-5 h-5" />
            <span className="font-mono">
              {currentTime.toLocaleTimeString('en-US', { hour12: false })}
            </span>
            <span className="text-zinc-600">|</span>
            <Calendar className="w-5 h-5" />
            <span>
              {currentTime.toLocaleDateString('en-US', { 
                weekday: 'short', 
                month: 'short', 
                day: 'numeric' 
              })}
            </span>
          </div>
        </motion.div>

        {/* Alert Banner */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.1 }}
          className="bg-blood-900/30 border border-blood-800/50 p-4 mb-8 flex items-center gap-4"
        >
          <AlertTriangle className="w-6 h-6 text-blood-500 shrink-0" />
          <div className="flex-1">
            <p className="text-blood-400 font-medium">Critical Alert</p>
            <p className="text-blood-400/70 text-sm">
              2 investigations have been escalated to critical status in the past 24 hours
            </p>
          </div>
          <Link
            href="/investigations"
            className="shrink-0 text-blood-400 hover:text-blood-300 text-sm font-medium"
          >
            View All →
          </Link>
        </motion.div>

        {/* Stats Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 + index * 0.05 }}
              className="bg-zinc-900/50 border border-zinc-800 p-5"
            >
              <div className="flex items-start justify-between mb-4">
                <div className={`p-2 ${
                  stat.color === 'blood' ? 'bg-blood-500/20' :
                  stat.color === 'blue' ? 'bg-blue-500/20' :
                  stat.color === 'purple' ? 'bg-purple-500/20' :
                  'bg-green-500/20'
                }`}>
                  <stat.icon className={`w-5 h-5 ${
                    stat.color === 'blood' ? 'text-blood-500' :
                    stat.color === 'blue' ? 'text-blue-500' :
                    stat.color === 'purple' ? 'text-purple-500' :
                    'text-green-500'
                  }`} />
                </div>
                <span className="flex items-center gap-1 text-green-400 text-sm">
                  <TrendingUp className="w-4 h-4" />
                  +{stat.change}%
                </span>
              </div>
              <p className="text-3xl font-bold text-white mb-1">
                {stat.value.toLocaleString()}
              </p>
              <p className="text-zinc-500 text-sm">{stat.label}</p>
            </motion.div>
          ))}
        </div>

        <div className="grid lg:grid-cols-3 gap-6">
          {/* Active Investigations */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="lg:col-span-2 bg-zinc-900/50 border border-zinc-800 p-5"
          >
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-lg font-semibold text-white flex items-center gap-2">
                <Activity className="w-5 h-5 text-blood-500" />
                Active Investigations
              </h2>
              <Link
                href="/investigations"
                className="text-zinc-400 hover:text-blood-400 text-sm flex items-center gap-1"
              >
                View All <ChevronRight className="w-4 h-4" />
              </Link>
            </div>
            <div className="space-y-4">
              {activeInvestigations.map((inv) => (
                <div
                  key={inv.id}
                  className="bg-zinc-800/30 border border-zinc-700/50 p-4"
                >
                  <div className="flex items-start justify-between mb-3">
                    <div>
                      <h3 className="text-white font-medium">{inv.title}</h3>
                      <p className="text-zinc-500 text-sm">Last update: {inv.lastUpdate}</p>
                    </div>
                    <span className={`px-2 py-0.5 text-xs font-medium text-white ${severityColors[inv.severity]}`}>
                      {inv.severity.toUpperCase()}
                    </span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="flex-1 bg-zinc-700/30 h-2">
                      <div
                        className="bg-blood-500 h-full"
                        style={{ width: `${inv.progress}%` }}
                      />
                    </div>
                    <span className="text-zinc-400 text-sm font-mono">
                      {inv.progress}%
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Recent Activity */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.35 }}
            className="bg-zinc-900/50 border border-zinc-800 p-5"
          >
            <h2 className="text-lg font-semibold text-white flex items-center gap-2 mb-6">
              <Zap className="w-5 h-5 text-blood-500" />
              Recent Activity
            </h2>
            <div className="space-y-4">
              {recentActivity.map((activity) => {
                const Icon = activityIcons[activity.type];
                return (
                  <div
                    key={activity.id}
                    className="flex items-start gap-3 pb-4 border-b border-zinc-800 last:border-0 last:pb-0"
                  >
                    <div className="bg-zinc-800 p-2 shrink-0">
                      <Icon className="w-4 h-4 text-zinc-400" />
                    </div>
                    <div className="min-w-0">
                      <p className="text-white text-sm font-medium truncate">
                        {activity.title}
                      </p>
                      <p className="text-zinc-500 text-xs">{activity.action}</p>
                      <p className="text-zinc-600 text-xs mt-1">{activity.time}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </motion.div>
        </div>

        {/* Quick Actions */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="mt-8 grid md:grid-cols-4 gap-4"
        >
          <Link
            href="/workspaces/create"
            className="bg-zinc-900/50 border border-zinc-800 p-5 hover:border-blood-500/50 transition-colors group"
          >
            <Users className="w-8 h-8 text-blood-500 mb-3" />
            <h3 className="text-white font-semibold group-hover:text-blood-400 transition-colors">
              New Workspace
            </h3>
            <p className="text-zinc-500 text-sm">Start a collaborative investigation</p>
          </Link>
          <Link
            href="/submit"
            className="bg-zinc-900/50 border border-zinc-800 p-5 hover:border-blood-500/50 transition-colors group"
          >
            <Shield className="w-8 h-8 text-blood-500 mb-3" />
            <h3 className="text-white font-semibold group-hover:text-blood-400 transition-colors">
              Submit Tip
            </h3>
            <p className="text-zinc-500 text-sm">Secure anonymous submission</p>
          </Link>
          <Link
            href="/documents"
            className="bg-zinc-900/50 border border-zinc-800 p-5 hover:border-blood-500/50 transition-colors group"
          >
            <FileText className="w-8 h-8 text-blood-500 mb-3" />
            <h3 className="text-white font-semibold group-hover:text-blood-400 transition-colors">
              Documents
            </h3>
            <p className="text-zinc-500 text-sm">Browse primary sources</p>
          </Link>
          <Link
            href="/entities"
            className="bg-zinc-900/50 border border-zinc-800 p-5 hover:border-blood-500/50 transition-colors group"
          >
            <Globe className="w-8 h-8 text-blood-500 mb-3" />
            <h3 className="text-white font-semibold group-hover:text-blood-400 transition-colors">
              Entity Database
            </h3>
            <p className="text-zinc-500 text-sm">Search tracked organizations</p>
          </Link>
        </motion.div>
      </div>
    </div>
  );
}
