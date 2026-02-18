'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  BarChart3, 
  TrendingUp, 
  TrendingDown,
  Users, 
  FileText, 
  Activity,
  Eye,
  Clock,
  Target,
  AlertTriangle,
  Network,
  Download,
  Calendar,
  Filter,
  RefreshCw
} from 'lucide-react';
import { GlitchText } from '@/components/effects/GlitchText';

// ============================================================
// Types
// ============================================================

interface MetricCard {
  id: string;
  title: string;
  value: number | string;
  change: number;
  changeType: 'increase' | 'decrease' | 'neutral';
  icon: React.ReactNode;
  color: string;
}

interface ChartData {
  label: string;
  value: number;
  color?: string;
}

// ============================================================
// Mock Data
// ============================================================

const overviewMetrics: MetricCard[] = [
  {
    id: 'investigations',
    title: 'Active Investigations',
    value: 47,
    change: 12,
    changeType: 'increase',
    icon: <Target className="w-6 h-6" />,
    color: 'blood-500',
  },
  {
    id: 'entities',
    title: 'Tracked Entities',
    value: 1284,
    change: 8.5,
    changeType: 'increase',
    icon: <Users className="w-6 h-6" />,
    color: 'amber-500',
  },
  {
    id: 'documents',
    title: 'Documents Analyzed',
    value: '23.4K',
    change: 23,
    changeType: 'increase',
    icon: <FileText className="w-6 h-6" />,
    color: 'emerald-500',
  },
  {
    id: 'connections',
    title: 'Network Connections',
    value: '8.7K',
    change: -3.2,
    changeType: 'decrease',
    icon: <Network className="w-6 h-6" />,
    color: 'purple-500',
  },
];

const severityData: ChartData[] = [
  { label: 'Critical', value: 12, color: '#dc2626' },
  { label: 'High', value: 28, color: '#ea580c' },
  { label: 'Medium', value: 45, color: '#ca8a04' },
  { label: 'Low', value: 62, color: '#16a34a' },
];

const monthlyData: ChartData[] = [
  { label: 'Jan', value: 24 },
  { label: 'Feb', value: 31 },
  { label: 'Mar', value: 28 },
  { label: 'Apr', value: 45 },
  { label: 'May', value: 52 },
  { label: 'Jun', value: 38 },
  { label: 'Jul', value: 67 },
  { label: 'Aug', value: 58 },
  { label: 'Sep', value: 72 },
  { label: 'Oct', value: 64 },
  { label: 'Nov', value: 81 },
  { label: 'Dec', value: 76 },
];

const entityTypeData: ChartData[] = [
  { label: 'Corporations', value: 45, color: '#3b82f6' },
  { label: 'Agencies', value: 28, color: '#8b5cf6' },
  { label: 'Individuals', value: 18, color: '#f59e0b' },
  { label: 'Organizations', value: 9, color: '#10b981' },
];

const recentActivity = [
  { action: 'New investigation opened', target: 'Operation Blackwater', time: '2 hours ago', type: 'investigation' },
  { action: 'Entity flagged', target: 'Nexus Holdings Ltd', time: '4 hours ago', type: 'entity' },
  { action: 'Document leaked', target: 'Internal Memo #4521', time: '6 hours ago', type: 'document' },
  { action: 'Connection discovered', target: 'Senator J. Smith ↔ Apex Corp', time: '8 hours ago', type: 'connection' },
  { action: 'Risk level elevated', target: 'Shadow Protocol', time: '12 hours ago', type: 'risk' },
];

// ============================================================
// Components
// ============================================================

function MetricCardComponent({ metric }: { metric: MetricCard }) {
  const isPositive = metric.changeType === 'increase';
  const isNegative = metric.changeType === 'decrease';

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="glass-card p-6"
    >
      <div className="flex items-start justify-between">
        <div>
          <p className="text-zinc-400 text-sm">{metric.title}</p>
          <p className="text-3xl font-bold text-white mt-2">{metric.value}</p>
        </div>
        <div className={`p-3 bg-${metric.color}/20 text-${metric.color}`}>
          {metric.icon}
        </div>
      </div>
      
      <div className="flex items-center gap-2 mt-4">
        {isPositive && (
          <>
            <TrendingUp className="w-4 h-4 text-emerald-500" />
            <span className="text-emerald-500 text-sm">+{metric.change}%</span>
          </>
        )}
        {isNegative && (
          <>
            <TrendingDown className="w-4 h-4 text-red-500" />
            <span className="text-red-500 text-sm">{metric.change}%</span>
          </>
        )}
        <span className="text-zinc-500 text-sm">vs last month</span>
      </div>
    </motion.div>
  );
}

function SimpleBarChart({ data, title }: { data: ChartData[]; title: string }) {
  const maxValue = Math.max(...data.map((d) => d.value));

  return (
    <div className="glass-card p-6">
      <h3 className="text-lg font-semibold text-white mb-6">{title}</h3>
      <div className="space-y-4">
        {data.map((item, index) => (
          <div key={item.label}>
            <div className="flex justify-between text-sm mb-1">
              <span className="text-zinc-400">{item.label}</span>
              <span className="text-white font-medium">{item.value}</span>
            </div>
            <div className="h-3 bg-zinc-800 overflow-hidden">
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: `${(item.value / maxValue) * 100}%` }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="h-full"
                style={{ backgroundColor: item.color || '#d64545' }}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function SimpleLineChart({ data, title }: { data: ChartData[]; title: string }) {
  const maxValue = Math.max(...data.map((d) => d.value));
  const minValue = Math.min(...data.map((d) => d.value));
  const range = maxValue - minValue;

  const getY = (value: number) => {
    const normalized = (value - minValue) / range;
    return 150 - normalized * 120;
  };

  const points = data.map((d, i) => ({
    x: 40 + (i * (560 / (data.length - 1))),
    y: getY(d.value),
  }));

  const pathData = points
    .map((p, i) => `${i === 0 ? 'M' : 'L'} ${p.x} ${p.y}`)
    .join(' ');

  return (
    <div className="glass-card p-6">
      <h3 className="text-lg font-semibold text-white mb-6">{title}</h3>
      <svg viewBox="0 0 600 180" className="w-full h-48">
        {/* Grid lines */}
        {[0, 1, 2, 3, 4].map((i) => (
          <line
            key={i}
            x1="40"
            y1={30 + i * 30}
            x2="580"
            y2={30 + i * 30}
            stroke="#27272a"
            strokeDasharray="4"
          />
        ))}
        
        {/* Line */}
        <motion.path
          d={pathData}
          fill="none"
          stroke="#d64545"
          strokeWidth="2"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 1.5 }}
        />
        
        {/* Data points */}
        {points.map((p, i) => (
          <motion.circle
            key={i}
            cx={p.x}
            cy={p.y}
            r="4"
            fill="#d64545"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.1 * i }}
          />
        ))}
        
        {/* X-axis labels */}
        {data.map((d, i) => (
          <text
            key={i}
            x={points[i].x}
            y="170"
            textAnchor="middle"
            className="fill-zinc-500 text-xs"
          >
            {d.label}
          </text>
        ))}
      </svg>
    </div>
  );
}

function PieChartSimple({ data, title }: { data: ChartData[]; title: string }) {
  const total = data.reduce((acc, d) => acc + d.value, 0);
  let currentAngle = 0;

  const segments = data.map((d) => {
    const percentage = d.value / total;
    const angle = percentage * 360;
    const startAngle = currentAngle;
    currentAngle += angle;
    
    const startRad = (startAngle - 90) * (Math.PI / 180);
    const endRad = (startAngle + angle - 90) * (Math.PI / 180);
    
    const x1 = 100 + 70 * Math.cos(startRad);
    const y1 = 100 + 70 * Math.sin(startRad);
    const x2 = 100 + 70 * Math.cos(endRad);
    const y2 = 100 + 70 * Math.sin(endRad);
    
    const largeArc = angle > 180 ? 1 : 0;
    
    return {
      ...d,
      percentage,
      path: `M 100 100 L ${x1} ${y1} A 70 70 0 ${largeArc} 1 ${x2} ${y2} Z`,
    };
  });

  return (
    <div className="glass-card p-6">
      <h3 className="text-lg font-semibold text-white mb-6">{title}</h3>
      <div className="flex items-center gap-8">
        <svg viewBox="0 0 200 200" className="w-40 h-40">
          {segments.map((segment, i) => (
            <motion.path
              key={i}
              d={segment.path}
              fill={segment.color}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: i * 0.15 }}
            />
          ))}
          <circle cx="100" cy="100" r="35" fill="#0a0a0a" />
        </svg>
        
        <div className="space-y-2">
          {segments.map((segment, i) => (
            <div key={i} className="flex items-center gap-3">
              <div
                className="w-3 h-3"
                style={{ backgroundColor: segment.color }}
              />
              <span className="text-zinc-400 text-sm">{segment.label}</span>
              <span className="text-white text-sm font-medium">
                {(segment.percentage * 100).toFixed(0)}%
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

// ============================================================
// Main Page
// ============================================================

export default function AnalyticsPage() {
  const [dateRange, setDateRange] = useState('30d');

  return (
    <div className="min-h-screen bg-black">
      <div className="max-w-7xl mx-auto px-6 py-12">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-4xl font-black tracking-tighter text-white mb-2">
              <GlitchText text="ANALYTICS" />
            </h1>
            <p className="text-zinc-400">
              Intelligence metrics and operational insights
            </p>
          </div>
          
          <div className="flex items-center gap-4">
            {/* Date Range Selector */}
            <div className="flex items-center gap-2 glass p-1">
              {['7d', '30d', '90d', '1y'].map((range) => (
                <button
                  key={range}
                  onClick={() => setDateRange(range)}
                  className={`px-4 py-2 text-sm font-medium transition-colors ${
                    dateRange === range
                      ? 'bg-blood-600 text-white'
                      : 'text-zinc-400 hover:text-white'
                  }`}
                >
                  {range}
                </button>
              ))}
            </div>
            
            <button className="p-2 glass text-zinc-400 hover:text-white transition-colors">
              <Filter className="w-5 h-5" />
            </button>
            
            <button className="p-2 glass text-zinc-400 hover:text-white transition-colors">
              <RefreshCw className="w-5 h-5" />
            </button>
            
            <button className="flex items-center gap-2 px-4 py-2 bg-blood-600 text-white hover:bg-blood-500 transition-colors">
              <Download className="w-4 h-4" />
              Export
            </button>
          </div>
        </div>

        {/* Overview Metrics */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {overviewMetrics.map((metric, index) => (
            <motion.div
              key={metric.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <MetricCardComponent metric={metric} />
            </motion.div>
          ))}
        </div>

        {/* Charts Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
          <SimpleLineChart data={monthlyData} title="Investigation Activity (Monthly)" />
          <SimpleBarChart data={severityData} title="Severity Distribution" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
          <PieChartSimple data={entityTypeData} title="Entity Types" />
          
          {/* Recent Activity */}
          <div className="lg:col-span-2 glass-card p-6">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-lg font-semibold text-white">Recent Activity</h3>
              <Activity className="w-5 h-5 text-blood-500" />
            </div>
            
            <div className="space-y-4">
              {recentActivity.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-center gap-4 p-3 bg-zinc-900/50 hover:bg-zinc-800/50 transition-colors"
                >
                  <div className={`w-2 h-2 ${
                    item.type === 'investigation' ? 'bg-blood-500' :
                    item.type === 'entity' ? 'bg-amber-500' :
                    item.type === 'document' ? 'bg-blue-500' :
                    item.type === 'connection' ? 'bg-purple-500' :
                    'bg-red-600'
                  }`} />
                  
                  <div className="flex-1">
                    <p className="text-white text-sm">
                      {item.action}: <span className="text-blood-400">{item.target}</span>
                    </p>
                  </div>
                  
                  <div className="flex items-center gap-2 text-zinc-500 text-xs">
                    <Clock className="w-3 h-3" />
                    {item.time}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* Alert Banner */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="glass-card p-6 border-l-4 border-blood-500"
        >
          <div className="flex items-center gap-4">
            <AlertTriangle className="w-8 h-8 text-blood-500" />
            <div>
              <h3 className="text-white font-semibold">Anomaly Detected</h3>
              <p className="text-zinc-400 text-sm">
                Unusual activity spike detected in the surveillance sector. 
                3 new connections identified between previously unrelated entities.
              </p>
            </div>
            <button className="ml-auto px-4 py-2 border border-blood-500 text-blood-500 hover:bg-blood-500/10 transition-colors">
              Investigate
            </button>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
