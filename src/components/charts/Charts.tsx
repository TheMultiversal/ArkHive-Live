'use client';

import { useMemo } from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

// ============================================================
// Types
// ============================================================

interface DataPoint {
  label: string;
  value: number;
  color?: string;
}

// ============================================================
// Bar Chart
// ============================================================

interface BarChartProps {
  data: DataPoint[];
  height?: number;
  showValues?: boolean;
  showLabels?: boolean;
  orientation?: 'vertical' | 'horizontal';
  animate?: boolean;
  className?: string;
}

export function BarChart({
  data,
  height = 200,
  showValues = true,
  showLabels = true,
  orientation = 'vertical',
  animate = true,
  className,
}: BarChartProps) {
  const maxValue = Math.max(...data.map((d) => d.value));
  const defaultColors = ['#d64545', '#3b82f6', '#22c55e', '#f59e0b', '#a855f7'];

  if (orientation === 'horizontal') {
    return (
      <div className={cn('space-y-2', className)}>
        {data.map((item, index) => (
          <div key={item.label} className="flex items-center gap-3">
            {showLabels && (
              <div className="w-24 text-sm text-zinc-400 truncate">
                {item.label}
              </div>
            )}
            <div className="flex-1 h-6 bg-zinc-800 relative">
              <motion.div
                initial={animate ? { width: 0 } : false}
                animate={{ width: `${(item.value / maxValue) * 100}%` }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="h-full"
                style={{
                  backgroundColor: item.color || defaultColors[index % defaultColors.length],
                }}
              />
              {showValues && (
                <span className="absolute right-2 top-1/2 -translate-y-1/2 text-xs text-white">
                  {item.value.toLocaleString()}
                </span>
              )}
            </div>
          </div>
        ))}
      </div>
    );
  }

  return (
    <div
      className={cn('flex items-end gap-2 justify-around', className)}
      style={{ height }}
    >
      {data.map((item, index) => (
        <div
          key={item.label}
          className="flex flex-col items-center gap-1 flex-1"
        >
          {showValues && (
            <span className="text-xs text-zinc-400">
              {item.value.toLocaleString()}
            </span>
          )}
          <motion.div
            initial={animate ? { height: 0 } : false}
            animate={{ height: `${(item.value / maxValue) * 100}%` }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="w-full max-w-[40px]"
            style={{
              backgroundColor: item.color || defaultColors[index % defaultColors.length],
            }}
          />
          {showLabels && (
            <span className="text-xs text-zinc-500 truncate max-w-full">
              {item.label}
            </span>
          )}
        </div>
      ))}
    </div>
  );
}

// ============================================================
// Line Chart
// ============================================================

interface LineChartPoint {
  x: number | string;
  y: number;
}

interface LineChartProps {
  data: LineChartPoint[];
  width?: number;
  height?: number;
  color?: string;
  fillArea?: boolean;
  showDots?: boolean;
  showGrid?: boolean;
  showLabels?: boolean;
  animate?: boolean;
  className?: string;
}

export function LineChart({
  data,
  width = 400,
  height = 200,
  color = '#d64545',
  fillArea = true,
  showDots = true,
  showGrid = true,
  showLabels = true,
  animate = true,
  className,
}: LineChartProps) {
  const padding = 40;
  const chartWidth = width - padding * 2;
  const chartHeight = height - padding * 2;

  const { points, pathD, areaD } = useMemo(() => {
    const maxY = Math.max(...data.map((d) => d.y));
    const minY = Math.min(...data.map((d) => d.y), 0);
    const range = maxY - minY || 1;

    const pts = data.map((d, i) => ({
      x: padding + (i / (data.length - 1)) * chartWidth,
      y: padding + chartHeight - ((d.y - minY) / range) * chartHeight,
      original: d,
    }));

    const path = pts.map((p, i) => `${i === 0 ? 'M' : 'L'} ${p.x} ${p.y}`).join(' ');
    const area = `${path} L ${pts[pts.length - 1].x} ${padding + chartHeight} L ${pts[0].x} ${padding + chartHeight} Z`;

    return { points: pts, pathD: path, areaD: area };
  }, [data, chartWidth, chartHeight, padding]);

  return (
    <svg
      viewBox={`0 0 ${width} ${height}`}
      className={cn('w-full', className)}
      style={{ maxWidth: width }}
    >
      {/* Grid */}
      {showGrid && (
        <g className="text-zinc-800">
          {[0, 0.25, 0.5, 0.75, 1].map((ratio) => (
            <line
              key={ratio}
              x1={padding}
              y1={padding + chartHeight * ratio}
              x2={padding + chartWidth}
              y2={padding + chartHeight * ratio}
              stroke="currentColor"
              strokeDasharray="4"
            />
          ))}
        </g>
      )}

      {/* Area fill */}
      {fillArea && (
        <motion.path
          d={areaD}
          fill={`${color}20`}
          initial={animate ? { opacity: 0 } : false}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        />
      )}

      {/* Line */}
      <motion.path
        d={pathD}
        fill="none"
        stroke={color}
        strokeWidth={2}
        initial={animate ? { pathLength: 0 } : false}
        animate={{ pathLength: 1 }}
        transition={{ duration: 1, ease: 'easeOut' }}
      />

      {/* Dots */}
      {showDots &&
        points.map((point, i) => (
          <motion.circle
            key={i}
            cx={point.x}
            cy={point.y}
            r={4}
            fill={color}
            initial={animate ? { scale: 0 } : false}
            animate={{ scale: 1 }}
            transition={{ duration: 0.3, delay: 0.5 + i * 0.05 }}
          />
        ))}

      {/* X-axis labels */}
      {showLabels &&
        points.map((point, i) => (
          <text
            key={i}
            x={point.x}
            y={height - 10}
            textAnchor="middle"
            className="text-[10px] fill-zinc-500"
          >
            {point.original.x}
          </text>
        ))}
    </svg>
  );
}

// ============================================================
// Pie Chart
// ============================================================

interface PieChartProps {
  data: DataPoint[];
  size?: number;
  donut?: boolean;
  showLabels?: boolean;
  showLegend?: boolean;
  animate?: boolean;
  className?: string;
}

export function PieChart({
  data,
  size = 200,
  donut = false,
  showLabels = true,
  showLegend = true,
  animate = true,
  className,
}: PieChartProps) {
  const total = data.reduce((sum, d) => sum + d.value, 0);
  const radius = size / 2 - 10;
  const innerRadius = donut ? radius * 0.6 : 0;

  const segments = useMemo(() => {
    const defaultColors = ['#d64545', '#3b82f6', '#22c55e', '#f59e0b', '#a855f7', '#ec4899'];
    let currentAngle = -90;
    return data.map((item, index) => {
      const angle = (item.value / total) * 360;
      const startAngle = currentAngle;
      const endAngle = currentAngle + angle;
      currentAngle = endAngle;

      const start = {
        x: Math.cos((startAngle * Math.PI) / 180) * radius + size / 2,
        y: Math.sin((startAngle * Math.PI) / 180) * radius + size / 2,
      };
      const end = {
        x: Math.cos((endAngle * Math.PI) / 180) * radius + size / 2,
        y: Math.sin((endAngle * Math.PI) / 180) * radius + size / 2,
      };
      const innerStart = {
        x: Math.cos((startAngle * Math.PI) / 180) * innerRadius + size / 2,
        y: Math.sin((startAngle * Math.PI) / 180) * innerRadius + size / 2,
      };
      const innerEnd = {
        x: Math.cos((endAngle * Math.PI) / 180) * innerRadius + size / 2,
        y: Math.sin((endAngle * Math.PI) / 180) * innerRadius + size / 2,
      };

      const largeArc = angle > 180 ? 1 : 0;

      let path: string;
      if (donut) {
        path = `
          M ${start.x} ${start.y}
          A ${radius} ${radius} 0 ${largeArc} 1 ${end.x} ${end.y}
          L ${innerEnd.x} ${innerEnd.y}
          A ${innerRadius} ${innerRadius} 0 ${largeArc} 0 ${innerStart.x} ${innerStart.y}
          Z
        `;
      } else {
        path = `
          M ${size / 2} ${size / 2}
          L ${start.x} ${start.y}
          A ${radius} ${radius} 0 ${largeArc} 1 ${end.x} ${end.y}
          Z
        `;
      }

      // Label position
      const labelAngle = ((startAngle + endAngle) / 2) * (Math.PI / 180);
      const labelRadius = donut ? (radius + innerRadius) / 2 : radius * 0.6;
      const labelPos = {
        x: Math.cos(labelAngle) * labelRadius + size / 2,
        y: Math.sin(labelAngle) * labelRadius + size / 2,
      };

      return {
        ...item,
        path,
        color: item.color || defaultColors[index % defaultColors.length],
        percentage: ((item.value / total) * 100).toFixed(1),
        labelPos,
      };
    });
  }, [data, total, radius, innerRadius, donut, size]);

  return (
    <div className={cn('flex items-center gap-4', className)}>
      <svg width={size} height={size}>
        {segments.map((segment, i) => (
          <motion.path
            key={segment.label}
            d={segment.path}
            fill={segment.color}
            initial={animate ? { opacity: 0, scale: 0.8 } : false}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="hover:opacity-80 transition-opacity cursor-pointer"
          />
        ))}

        {/* Labels */}
        {showLabels &&
          segments.map((segment) => (
            <text
              key={segment.label}
              x={segment.labelPos.x}
              y={segment.labelPos.y}
              textAnchor="middle"
              dominantBaseline="middle"
              className="text-xs fill-white font-medium pointer-events-none"
            >
              {segment.percentage}%
            </text>
          ))}

        {/* Center text for donut */}
        {donut && (
          <text
            x={size / 2}
            y={size / 2}
            textAnchor="middle"
            dominantBaseline="middle"
            className="text-xl fill-white font-bold"
          >
            {total.toLocaleString()}
          </text>
        )}
      </svg>

      {/* Legend */}
      {showLegend && (
        <div className="space-y-2">
          {segments.map((segment) => (
            <div key={segment.label} className="flex items-center gap-2">
              <div
                className="w-3 h-3"
                style={{ backgroundColor: segment.color }}
              />
              <span className="text-sm text-zinc-400">{segment.label}</span>
              <span className="text-sm text-zinc-500">
                ({segment.value.toLocaleString()})
              </span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

// ============================================================
// Gauge Chart
// ============================================================

interface GaugeChartProps {
  value: number;
  min?: number;
  max?: number;
  label?: string;
  size?: number;
  color?: string;
  thresholds?: Array<{ value: number; color: string }>;
  showValue?: boolean;
  animate?: boolean;
  className?: string;
}

export function GaugeChart({
  value,
  min = 0,
  max = 100,
  label,
  size = 200,
  color = '#d64545',
  thresholds,
  showValue = true,
  animate = true,
  className,
}: GaugeChartProps) {
  const percentage = ((value - min) / (max - min)) * 100;
  const angle = (percentage / 100) * 180;
  const radius = size / 2 - 20;

  // Determine color based on thresholds
  let fillColor = color;
  if (thresholds) {
    for (const threshold of thresholds.sort((a, b) => b.value - a.value)) {
      if (value >= threshold.value) {
        fillColor = threshold.color;
        break;
      }
    }
  }

  const endX = Math.cos(((180 - angle) * Math.PI) / 180) * radius + size / 2;
  const endY = -Math.sin(((180 - angle) * Math.PI) / 180) * radius + size / 2 + 20;

  return (
    <div className={cn('flex flex-col items-center', className)}>
      <svg width={size} height={size / 2 + 40}>
        {/* Background arc */}
        <path
          d={`
            M ${20} ${size / 2 + 20}
            A ${radius} ${radius} 0 0 1 ${size - 20} ${size / 2 + 20}
          `}
          fill="none"
          stroke="#27272a"
          strokeWidth={16}
          strokeLinecap="round"
        />

        {/* Value arc */}
        <motion.path
          d={`
            M ${20} ${size / 2 + 20}
            A ${radius} ${radius} 0 0 1 ${endX} ${endY}
          `}
          fill="none"
          stroke={fillColor}
          strokeWidth={16}
          strokeLinecap="round"
          initial={animate ? { pathLength: 0 } : false}
          animate={{ pathLength: 1 }}
          transition={{ duration: 1, ease: 'easeOut' }}
        />

        {/* Value text */}
        {showValue && (
          <text
            x={size / 2}
            y={size / 2 + 10}
            textAnchor="middle"
            className="text-2xl fill-white font-bold"
          >
            {value.toLocaleString()}
          </text>
        )}

        {/* Min/Max labels */}
        <text
          x={25}
          y={size / 2 + 35}
          className="text-xs fill-zinc-500"
        >
          {min}
        </text>
        <text
          x={size - 25}
          y={size / 2 + 35}
          textAnchor="end"
          className="text-xs fill-zinc-500"
        >
          {max}
        </text>
      </svg>

      {label && (
        <span className="text-sm text-zinc-400 mt-2">{label}</span>
      )}
    </div>
  );
}

// ============================================================
// Sparkline
// ============================================================

interface SparklineProps {
  data: number[];
  width?: number;
  height?: number;
  color?: string;
  showDot?: boolean;
  className?: string;
}

export function Sparkline({
  data,
  width = 100,
  height = 30,
  color = '#d64545',
  showDot = true,
  className,
}: SparklineProps) {
  const max = Math.max(...data);
  const min = Math.min(...data);
  const range = max - min || 1;

  const points = data.map((value, i) => ({
    x: (i / (data.length - 1)) * width,
    y: height - ((value - min) / range) * height,
  }));

  const pathD = points.map((p, i) => `${i === 0 ? 'M' : 'L'} ${p.x} ${p.y}`).join(' ');
  const lastPoint = points[points.length - 1];

  return (
    <svg width={width} height={height} className={className}>
      <path
        d={pathD}
        fill="none"
        stroke={color}
        strokeWidth={1.5}
      />
      {showDot && lastPoint && (
        <circle
          cx={lastPoint.x}
          cy={lastPoint.y}
          r={3}
          fill={color}
        />
      )}
    </svg>
  );
}
