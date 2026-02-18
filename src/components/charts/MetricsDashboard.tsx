'use client';

import { useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import {
  TrendingUp,
  TrendingDown,
  Minus,
  Activity,
  Users,
  FileText,
  Eye,
  Clock,
  Target,
  AlertTriangle,
  CheckCircle,
  BarChart3,
  PieChart as PieChartIcon,
  Maximize2,
  RefreshCw,
  Download,
  Settings,
  Calendar,
} from 'lucide-react';
import { cn } from '@/lib/utils';
import { BarChart, LineChart, PieChart, GaugeChart, Sparkline } from './Charts';

// ============================================================
// Types
// ============================================================

interface MetricCard {
  id: string;
  title: string;
  value: number | string;
  previousValue?: number;
  change?: number;
  changeType?: 'increase' | 'decrease' | 'neutral';
  format?: 'number' | 'currency' | 'percentage' | 'duration';
  icon?: typeof TrendingUp;
  color?: string;
  sparklineData?: number[];
  target?: number;
}

interface ChartConfig {
  id: string;
  title: string;
  type: 'bar' | 'line' | 'pie' | 'gauge';
  data: unknown[];
  size?: 'small' | 'medium' | 'large';
  config?: Record<string, unknown>;
}

interface MetricsDashboardProps {
  metrics: MetricCard[];
  charts?: ChartConfig[];
  title?: string;
  refreshInterval?: number;
  onRefresh?: () => void;
  onExport?: () => void;
  lastUpdated?: Date;
  className?: string;
}

// ============================================================
// Format Helpers
// ============================================================

function formatValue(value: number | string, format?: string): string {
  if (typeof value === 'string') return value;

  switch (format) {
    case 'currency':
      return new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
        notation: value >= 1000000 ? 'compact' : 'standard',
      }).format(value);
    case 'percentage':
      return `${value.toFixed(1)}%`;
    case 'duration':
      const hours = Math.floor(value / 3600);
      const minutes = Math.floor((value % 3600) / 60);
      return hours > 0 ? `${hours}h ${minutes}m` : `${minutes}m`;
    default:
      return value >= 1000000
        ? new Intl.NumberFormat('en-US', { notation: 'compact' }).format(value)
        : value.toLocaleString();
  }
}

// ============================================================
// Metric Card Component
// ============================================================

interface MetricCardItemProps {
  metric: MetricCard;
}

function MetricCardItem({ metric }: MetricCardItemProps) {
  const Icon = metric.icon || Activity;
  const changeIcon =
    metric.changeType === 'increase' ? TrendingUp :
    metric.changeType === 'decrease' ? TrendingDown : Minus;
  
  const changeColor =
    metric.changeType === 'increase' ? 'text-green-500' :
    metric.changeType === 'decrease' ? 'text-red-500' : 'text-zinc-500';

  const progress = metric.target
    ? (Number(metric.value) / metric.target) * 100
    : null;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-zinc-800/50 border border-zinc-700 p-4"
    >
      <div className="flex items-start justify-between mb-2">
        <div
          className="p-2"
          style={{ backgroundColor: `${metric.color || '#d64545'}20` }}
        >
          <Icon
            className="w-5 h-5"
            style={{ color: metric.color || '#d64545' }}
          />
        </div>
        {metric.sparklineData && (
          <Sparkline
            data={metric.sparklineData}
            width={80}
            height={24}
            color={metric.color || '#d64545'}
          />
        )}
      </div>

      <div className="mb-1">
        <p className="text-sm text-zinc-500">{metric.title}</p>
        <p className="text-2xl font-bold text-white">
          {formatValue(metric.value, metric.format)}
        </p>
      </div>

      {metric.change !== undefined && (
        <div className={cn('flex items-center gap-1 text-sm', changeColor)}>
          {React.createElement(changeIcon, { className: 'w-4 h-4' })}
          <span>
            {metric.change > 0 ? '+' : ''}
            {metric.change.toFixed(1)}%
          </span>
          <span className="text-zinc-600">vs last period</span>
        </div>
      )}

      {progress !== null && (
        <div className="mt-3">
          <div className="flex items-center justify-between text-xs mb-1">
            <span className="text-zinc-500">Target: {formatValue(metric.target!, metric.format)}</span>
            <span className="text-zinc-400">{progress.toFixed(0)}%</span>
          </div>
          <div className="h-1.5 bg-zinc-700">
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: `${Math.min(progress, 100)}%` }}
              transition={{ duration: 0.5 }}
              className="h-full"
              style={{ backgroundColor: metric.color || '#d64545' }}
            />
          </div>
        </div>
      )}
    </motion.div>
  );
}

// Import React for createElement
import React from 'react';

// ============================================================
// Chart Component
// ============================================================

interface ChartCardProps {
  chart: ChartConfig;
}

function ChartCard({ chart }: ChartCardProps) {
  const [isExpanded, setIsExpanded] = useState(false);

  const sizeClasses = {
    small: 'col-span-1',
    medium: 'col-span-2',
    large: 'col-span-3',
  };

  const renderChart = () => {
    switch (chart.type) {
      case 'bar':
        return (
          <BarChart
            data={chart.data as { label: string; value: number }[]}
            height={200}
            {...(chart.config as Record<string, unknown>)}
          />
        );
      case 'line':
        return (
          <LineChart
            data={chart.data as { x: number | string; y: number }[]}
            height={200}
            {...(chart.config as Record<string, unknown>)}
          />
        );
      case 'pie':
        return (
          <PieChart
            data={chart.data as { label: string; value: number }[]}
            size={180}
            {...(chart.config as Record<string, unknown>)}
          />
        );
      case 'gauge':
        const gaugeData = chart.data[0] as { value: number; max?: number };
        return (
          <GaugeChart
            value={gaugeData.value}
            max={gaugeData.max || 100}
            size={180}
            {...(chart.config as Record<string, unknown>)}
          />
        );
      default:
        return null;
    }
  };

  return (
    <motion.div
      layout
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      className={cn(
        'bg-zinc-800/50 border border-zinc-700 p-4',
        sizeClasses[chart.size || 'medium']
      )}
    >
      <div className="flex items-center justify-between mb-4">
        <h3 className="font-medium text-white">{chart.title}</h3>
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          aria-label={isExpanded ? 'Collapse chart' : 'Expand chart'}
          className="p-1 text-zinc-400 hover:text-white transition-colors"
        >
          <Maximize2 className="w-4 h-4" />
        </button>
      </div>
      <div className="flex items-center justify-center">
        {renderChart()}
      </div>
    </motion.div>
  );
}

// ============================================================
// Main Dashboard Component
// ============================================================

export default function MetricsDashboard({
  metrics,
  charts = [],
  title = 'Dashboard',
  refreshInterval,
  onRefresh,
  onExport,
  lastUpdated,
  className,
}: MetricsDashboardProps) {
  const [dateRange, setDateRange] = useState('7d');

  // Auto refresh
  React.useEffect(() => {
    if (refreshInterval && onRefresh) {
      const interval = setInterval(onRefresh, refreshInterval);
      return () => clearInterval(interval);
    }
  }, [refreshInterval, onRefresh]);

  return (
    <div className={cn('space-y-6', className)}>
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-white">{title}</h1>
          {lastUpdated && (
            <p className="text-sm text-zinc-500 flex items-center gap-1 mt-1">
              <Clock className="w-3 h-3" />
              Last updated: {lastUpdated.toLocaleString()}
            </p>
          )}
        </div>

        <div className="flex items-center gap-2">
          {/* Date range selector */}
          <div className="flex items-center border border-zinc-700">
            {['24h', '7d', '30d', '90d'].map((range) => (
              <button
                key={range}
                onClick={() => setDateRange(range)}
                className={cn(
                  'px-3 py-1.5 text-sm transition-colors',
                  dateRange === range
                    ? 'bg-zinc-700 text-white'
                    : 'text-zinc-400 hover:text-white'
                )}
              >
                {range}
              </button>
            ))}
          </div>

          {/* Refresh */}
          {onRefresh && (
            <button
              onClick={onRefresh}
              aria-label="Refresh data"
              className="p-2 text-zinc-400 hover:text-white bg-zinc-800 border border-zinc-700 transition-colors"
            >
              <RefreshCw className="w-4 h-4" />
            </button>
          )}

          {/* Export */}
          {onExport && (
            <button
              onClick={onExport}
              aria-label="Export data"
              className="p-2 text-zinc-400 hover:text-white bg-zinc-800 border border-zinc-700 transition-colors"
            >
              <Download className="w-4 h-4" />
            </button>
          )}
        </div>
      </div>

      {/* Metrics Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {metrics.map((metric) => (
          <MetricCardItem key={metric.id} metric={metric} />
        ))}
      </div>

      {/* Charts Grid */}
      {charts.length > 0 && (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {charts.map((chart) => (
            <ChartCard key={chart.id} chart={chart} />
          ))}
        </div>
      )}
    </div>
  );
}

export { MetricsDashboard };
export type { MetricCard, ChartConfig };
