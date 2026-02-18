'use client';

import { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  ChevronLeft,
  ChevronRight,
  Plus,
  Calendar as CalendarIcon,
  Clock,
  MapPin,
  User,
  MoreVertical,
  X,
} from 'lucide-react';
import { cn } from '@/lib/utils';

// ============================================================
// Types
// ============================================================

interface CalendarEvent {
  id: string;
  title: string;
  description?: string;
  start: Date;
  end: Date;
  allDay?: boolean;
  color?: string;
  location?: string;
  attendees?: Array<{
    id: string;
    name: string;
    avatar?: string;
  }>;
  category?: string;
}

interface CalendarProps {
  events: CalendarEvent[];
  selectedDate?: Date;
  view?: 'month' | 'week' | 'day';
  onDateSelect?: (date: Date) => void;
  onEventClick?: (event: CalendarEvent) => void;
  onAddEvent?: (date: Date) => void;
  onEventUpdate?: (event: CalendarEvent) => void;
  showWeekNumbers?: boolean;
  firstDayOfWeek?: 0 | 1; // 0 = Sunday, 1 = Monday
  className?: string;
}

// ============================================================
// Helpers
// ============================================================

const DAYS = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
const MONTHS = [
  'January', 'February', 'March', 'April', 'May', 'June',
  'July', 'August', 'September', 'October', 'November', 'December'
];

function getMonthDays(year: number, month: number, firstDayOfWeek: number = 0) {
  const firstDay = new Date(year, month, 1);
  const lastDay = new Date(year, month + 1, 0);
  const daysInMonth = lastDay.getDate();
  
  const startDayOfWeek = (firstDay.getDay() - firstDayOfWeek + 7) % 7;
  const days: Array<{ date: Date; isCurrentMonth: boolean }> = [];
  
  // Previous month days
  const prevMonth = new Date(year, month, 0);
  for (let i = startDayOfWeek - 1; i >= 0; i--) {
    days.push({
      date: new Date(year, month - 1, prevMonth.getDate() - i),
      isCurrentMonth: false,
    });
  }
  
  // Current month days
  for (let i = 1; i <= daysInMonth; i++) {
    days.push({
      date: new Date(year, month, i),
      isCurrentMonth: true,
    });
  }
  
  // Next month days
  const remainingDays = 42 - days.length;
  for (let i = 1; i <= remainingDays; i++) {
    days.push({
      date: new Date(year, month + 1, i),
      isCurrentMonth: false,
    });
  }
  
  return days;
}

function isSameDay(date1: Date, date2: Date): boolean {
  return (
    date1.getDate() === date2.getDate() &&
    date1.getMonth() === date2.getMonth() &&
    date1.getFullYear() === date2.getFullYear()
  );
}

function getWeekNumber(date: Date): number {
  const d = new Date(Date.UTC(date.getFullYear(), date.getMonth(), date.getDate()));
  const dayNum = d.getUTCDay() || 7;
  d.setUTCDate(d.getUTCDate() + 4 - dayNum);
  const yearStart = new Date(Date.UTC(d.getUTCFullYear(), 0, 1));
  return Math.ceil((((d.getTime() - yearStart.getTime()) / 86400000) + 1) / 7);
}

// ============================================================
// Event Component
// ============================================================

interface EventChipProps {
  event: CalendarEvent;
  onClick?: () => void;
  compact?: boolean;
}

function EventChip({ event, onClick, compact = false }: EventChipProps) {
  const eventColor = event.color || '#d64545';

  return (
    <motion.button
      layout
      whileHover={{ scale: 1.02 }}
      onClick={(e) => {
        e.stopPropagation();
        onClick?.();
      }}
      className={cn(
        'w-full text-left truncate transition-colors',
        compact ? 'px-1 py-0.5 text-[10px]' : 'px-2 py-1 text-xs'
      )}
      style={{
        backgroundColor: `${eventColor}30`,
        borderLeft: `2px solid ${eventColor}`,
        color: eventColor,
      }}
    >
      {!event.allDay && !compact && (
        <span className="mr-1">
          {event.start.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
        </span>
      )}
      {event.title}
    </motion.button>
  );
}

// ============================================================
// Day Cell Component
// ============================================================

interface DayCellProps {
  date: Date;
  events: CalendarEvent[];
  isCurrentMonth: boolean;
  isToday: boolean;
  isSelected: boolean;
  weekNumber?: number;
  showWeekNumber?: boolean;
  onSelect: () => void;
  onEventClick?: (event: CalendarEvent) => void;
  onAddEvent?: () => void;
}

function DayCell({
  date,
  events,
  isCurrentMonth,
  isToday,
  isSelected,
  weekNumber,
  showWeekNumber,
  onSelect,
  onEventClick,
  onAddEvent,
}: DayCellProps) {
  const [showMore, setShowMore] = useState(false);
  const displayEvents = events.slice(0, 2);
  const moreCount = events.length - 2;

  return (
    <div
      onClick={onSelect}
      className={cn(
        'min-h-[100px] p-1 border-b border-r border-zinc-800 cursor-pointer transition-colors group',
        !isCurrentMonth && 'bg-zinc-900/50',
        isSelected && 'ring-2 ring-inset ring-blood-500',
        'hover:bg-zinc-800/50'
      )}
    >
      <div className="flex items-center justify-between mb-1">
        {showWeekNumber && date.getDay() === 0 && (
          <span className="text-[10px] text-zinc-600">W{weekNumber}</span>
        )}
        <span
          className={cn(
            'text-sm w-6 h-6 flex items-center justify-center',
            !isCurrentMonth && 'text-zinc-600',
            isCurrentMonth && 'text-zinc-300',
            isToday && 'bg-blood-500 text-white font-bold'
          )}
        >
          {date.getDate()}
        </span>
        <button
          onClick={(e) => {
            e.stopPropagation();
            onAddEvent?.();
          }}
          className="opacity-0 group-hover:opacity-100 p-0.5 text-zinc-500 hover:text-white transition-all"
        >
          <Plus className="w-3 h-3" />
        </button>
      </div>

      {/* Events */}
      <div className="space-y-0.5">
        {displayEvents.map((event) => (
          <EventChip
            key={event.id}
            event={event}
            onClick={() => onEventClick?.(event)}
            compact
          />
        ))}
        {moreCount > 0 && (
          <button
            onClick={(e) => {
              e.stopPropagation();
              setShowMore(true);
            }}
            className="text-[10px] text-zinc-500 hover:text-white"
          >
            +{moreCount} more
          </button>
        )}
      </div>

      {/* More events popup */}
      <AnimatePresence>
        {showMore && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            className="absolute z-20 bg-zinc-800 border border-zinc-700 p-2 shadow-lg min-w-[200px]"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm text-white">
                {date.toLocaleDateString()}
              </span>
              <button
                onClick={() => setShowMore(false)}
                className="p-1 text-zinc-400 hover:text-white"
              >
                <X className="w-3 h-3" />
              </button>
            </div>
            <div className="space-y-1">
              {events.map((event) => (
                <EventChip
                  key={event.id}
                  event={event}
                  onClick={() => onEventClick?.(event)}
                />
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

// ============================================================
// Main Component
// ============================================================

export default function Calendar({
  events,
  selectedDate,
  view = 'month',
  onDateSelect,
  onEventClick,
  onAddEvent,
  onEventUpdate,
  showWeekNumbers = false,
  firstDayOfWeek = 0,
  className,
}: CalendarProps) {
  const [currentDate, setCurrentDate] = useState(selectedDate || new Date());
  const [selectedDay, setSelectedDay] = useState<Date | null>(selectedDate || null);

  const today = new Date();
  const year = currentDate.getFullYear();
  const month = currentDate.getMonth();

  // Get days to display
  const days = useMemo(
    () => getMonthDays(year, month, firstDayOfWeek),
    [year, month, firstDayOfWeek]
  );

  // Get ordered day names
  const dayNames = useMemo(() => {
    const names = [...DAYS];
    if (firstDayOfWeek === 1) {
      names.push(names.shift()!);
    }
    return names;
  }, [firstDayOfWeek]);

  // Group events by date
  const eventsByDate = useMemo(() => {
    const map = new Map<string, CalendarEvent[]>();
    events.forEach((event) => {
      const key = event.start.toISOString().split('T')[0];
      if (!map.has(key)) map.set(key, []);
      map.get(key)!.push(event);
    });
    return map;
  }, [events]);

  const navigateMonth = (direction: number) => {
    setCurrentDate(new Date(year, month + direction, 1));
  };

  const goToToday = () => {
    setCurrentDate(new Date());
    setSelectedDay(new Date());
  };

  const handleDaySelect = (date: Date) => {
    setSelectedDay(date);
    onDateSelect?.(date);
  };

  return (
    <div className={cn('bg-zinc-900 border border-zinc-800', className)}>
      {/* Header */}
      <div className="flex items-center justify-between p-4 border-b border-zinc-800">
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-1">
            <button
              onClick={() => navigateMonth(-1)}
              className="p-2 text-zinc-400 hover:text-white hover:bg-zinc-800 transition-colors"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <button
              onClick={() => navigateMonth(1)}
              className="p-2 text-zinc-400 hover:text-white hover:bg-zinc-800 transition-colors"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>

          <h2 className="text-lg font-semibold text-white">
            {MONTHS[month]} {year}
          </h2>
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={goToToday}
            className="px-3 py-1.5 text-sm text-zinc-300 hover:text-white bg-zinc-800 hover:bg-zinc-700 transition-colors"
          >
            Today
          </button>

          {/* View selector */}
          <div className="flex items-center border border-zinc-700">
            <button
              className={cn(
                'px-3 py-1.5 text-sm transition-colors',
                view === 'month'
                  ? 'bg-zinc-700 text-white'
                  : 'text-zinc-400 hover:text-white'
              )}
            >
              Month
            </button>
            <button
              className={cn(
                'px-3 py-1.5 text-sm transition-colors',
                view === 'week'
                  ? 'bg-zinc-700 text-white'
                  : 'text-zinc-400 hover:text-white'
              )}
            >
              Week
            </button>
            <button
              className={cn(
                'px-3 py-1.5 text-sm transition-colors',
                view === 'day'
                  ? 'bg-zinc-700 text-white'
                  : 'text-zinc-400 hover:text-white'
              )}
            >
              Day
            </button>
          </div>
        </div>
      </div>

      {/* Day headers */}
      <div
        className={cn(
          'grid border-b border-zinc-800',
          showWeekNumbers ? 'grid-cols-8' : 'grid-cols-7'
        )}
      >
        {showWeekNumbers && (
          <div className="p-2 text-xs text-zinc-600 text-center">Wk</div>
        )}
        {dayNames.map((day) => (
          <div
            key={day}
            className="p-2 text-xs text-zinc-500 text-center border-r border-zinc-800 last:border-r-0"
          >
            {day}
          </div>
        ))}
      </div>

      {/* Calendar grid */}
      <div
        className={cn(
          'grid',
          showWeekNumbers ? 'grid-cols-8' : 'grid-cols-7'
        )}
      >
        {days.map((day, index) => {
          const dayKey = day.date.toISOString().split('T')[0];
          const dayEvents = eventsByDate.get(dayKey) || [];
          const showWeekNum = showWeekNumbers && index % 7 === 0;

          return (
            <>
              {showWeekNum && (
                <div
                  key={`week-${index}`}
                  className="p-1 text-[10px] text-zinc-600 text-center border-b border-r border-zinc-800 flex items-center justify-center"
                >
                  {getWeekNumber(day.date)}
                </div>
              )}
              <DayCell
                key={day.date.toISOString()}
                date={day.date}
                events={dayEvents}
                isCurrentMonth={day.isCurrentMonth}
                isToday={isSameDay(day.date, today)}
                isSelected={selectedDay ? isSameDay(day.date, selectedDay) : false}
                weekNumber={getWeekNumber(day.date)}
                showWeekNumber={showWeekNumbers}
                onSelect={() => handleDaySelect(day.date)}
                onEventClick={onEventClick}
                onAddEvent={() => onAddEvent?.(day.date)}
              />
            </>
          );
        })}
      </div>
    </div>
  );
}

export { Calendar };
export type { CalendarEvent };
