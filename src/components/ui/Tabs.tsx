'use client';

import { useState, useCallback, createContext, useContext, ReactNode, useId } from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

// Context
interface TabsContextValue {
  activeTab: string;
  setActiveTab: (id: string) => void;
  baseId: string;
}

const TabsContext = createContext<TabsContextValue | null>(null);

function useTabsContext() {
  const context = useContext(TabsContext);
  if (!context) {
    throw new Error('Tab components must be used within Tabs');
  }
  return context;
}

// Main Tabs component
interface TabsProps {
  children: ReactNode;
  defaultTab?: string;
  onChange?: (tabId: string) => void;
  className?: string;
}

export default function Tabs({
  children,
  defaultTab,
  onChange,
  className,
}: TabsProps) {
  const baseId = useId();
  const [activeTab, setActiveTabState] = useState(defaultTab || '');

  const setActiveTab = useCallback((id: string) => {
    setActiveTabState(id);
    onChange?.(id);
  }, [onChange]);

  return (
    <TabsContext.Provider value={{ activeTab, setActiveTab, baseId }}>
      <div className={cn('', className)}>
        {children}
      </div>
    </TabsContext.Provider>
  );
}

// Tab List (container for tab buttons)
interface TabListProps {
  children: ReactNode;
  variant?: 'default' | 'pills' | 'underline';
  className?: string;
}

export function TabList({ children, variant = 'default', className }: TabListProps) {
  const variantClasses = {
    default: 'flex gap-1 p-1 bg-zinc-900 border border-zinc-800',
    pills: 'flex gap-2',
    underline: 'flex gap-6 border-b border-zinc-800',
  };

  return (
    <div
      role="tablist"
      className={cn(variantClasses[variant], className)}
    >
      {children}
    </div>
  );
}

// Individual Tab
interface TabProps {
  id: string;
  children: ReactNode;
  icon?: ReactNode;
  disabled?: boolean;
  variant?: 'default' | 'pills' | 'underline';
  className?: string;
}

export function Tab({
  id,
  children,
  icon,
  disabled = false,
  variant = 'default',
  className,
}: TabProps) {
  const { activeTab, setActiveTab, baseId } = useTabsContext();
  const isActive = activeTab === id;

  const baseClasses = 'relative flex items-center gap-2 font-medium transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-blood-500';
  
  const variantClasses = {
    default: cn(
      'px-4 py-2 text-sm',
      isActive
        ? 'bg-blood-900/50 text-white'
        : 'text-zinc-400 hover:text-white hover:bg-zinc-800/50',
      disabled && 'opacity-50 cursor-not-allowed'
    ),
    pills: cn(
      'px-4 py-2 text-sm border',
      isActive
        ? 'bg-blood-700 border-blood-600 text-white'
        : 'bg-transparent border-zinc-700 text-zinc-400 hover:text-white hover:border-zinc-600',
      disabled && 'opacity-50 cursor-not-allowed'
    ),
    underline: cn(
      'pb-3 text-sm',
      isActive
        ? 'text-white'
        : 'text-zinc-400 hover:text-white',
      disabled && 'opacity-50 cursor-not-allowed'
    ),
  };

  return (
    <button
      role="tab"
      id={`${baseId}-tab-${id}`}
      aria-selected={isActive}
      aria-controls={`${baseId}-panel-${id}`}
      tabIndex={isActive ? 0 : -1}
      disabled={disabled}
      onClick={() => !disabled && setActiveTab(id)}
      className={cn(baseClasses, variantClasses[variant], className)}
    >
      {icon && <span className="flex-shrink-0">{icon}</span>}
      {children}
      {variant === 'underline' && isActive && (
        <motion.div
          layoutId={`${baseId}-underline`}
          className="absolute bottom-0 left-0 right-0 h-0.5 bg-blood-500"
        />
      )}
    </button>
  );
}

// Tab Panel
interface TabPanelProps {
  id: string;
  children: ReactNode;
  className?: string;
}

export function TabPanel({ id, children, className }: TabPanelProps) {
  const { activeTab, baseId } = useTabsContext();
  const isActive = activeTab === id;

  if (!isActive) return null;

  return (
    <motion.div
      role="tabpanel"
      id={`${baseId}-panel-${id}`}
      aria-labelledby={`${baseId}-tab-${id}`}
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.2 }}
      className={cn('py-4', className)}
    >
      {children}
    </motion.div>
  );
}

// Convenience wrapper for simple tabs
interface SimpleTabsProps {
  tabs: { id: string; label: string; icon?: ReactNode; content: ReactNode }[];
  defaultTab?: string;
  variant?: 'default' | 'pills' | 'underline';
  className?: string;
}

export function SimpleTabs({ tabs, defaultTab, variant = 'default', className }: SimpleTabsProps) {
  return (
    <Tabs defaultTab={defaultTab || tabs[0]?.id} className={className}>
      <TabList variant={variant}>
        {tabs.map((tab) => (
          <Tab key={tab.id} id={tab.id} icon={tab.icon} variant={variant}>
            {tab.label}
          </Tab>
        ))}
      </TabList>
      {tabs.map((tab) => (
        <TabPanel key={tab.id} id={tab.id}>
          {tab.content}
        </TabPanel>
      ))}
    </Tabs>
  );
}
