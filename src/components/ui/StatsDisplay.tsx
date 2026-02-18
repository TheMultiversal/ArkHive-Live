'use client';

import { motion } from 'framer-motion';

interface StatsDisplayProps {
  stats: {
    totalInvestigations: number;
    entitiesTracked: number;
    documentsArchived: number;
    activeAlerts: number;
  };
}

// Custom animated SVG icons
function InvestigationIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
      <motion.circle
        cx="12" cy="12" r="8"
        stroke="#ef4444"
        strokeWidth="1.5"
        fill="none"
        animate={{ scale: [1, 1.1, 1] }}
        transition={{ duration: 2, repeat: Infinity }}
      />
      <motion.circle
        cx="12" cy="12" r="4"
        stroke="#dc2626"
        strokeWidth="1.5"
        fill="none"
        animate={{ scale: [1.1, 1, 1.1] }}
        transition={{ duration: 2, repeat: Infinity }}
      />
      <motion.circle
        cx="12" cy="12" r="1.5"
        fill="#ef4444"
        animate={{ opacity: [1, 0.5, 1] }}
        transition={{ duration: 1, repeat: Infinity }}
      />
      {/* Crosshair lines */}
      <motion.g stroke="#dc2626" strokeWidth="1" opacity="0.7">
        <line x1="12" y1="2" x2="12" y2="6" />
        <line x1="12" y1="18" x2="12" y2="22" />
        <line x1="2" y1="12" x2="6" y2="12" />
        <line x1="18" y1="12" x2="22" y2="12" />
      </motion.g>
    </svg>
  );
}

function EntitiesIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
      {/* Network nodes */}
      <motion.circle
        cx="12" cy="6" r="3"
        fill="#dc2626"
        animate={{ y: [0, -1, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      />
      <motion.circle
        cx="5" cy="18" r="3"
        fill="#b91c1c"
        animate={{ x: [0, -1, 0] }}
        transition={{ duration: 2, repeat: Infinity, delay: 0.3 }}
      />
      <motion.circle
        cx="19" cy="18" r="3"
        fill="#991b1b"
        animate={{ x: [0, 1, 0] }}
        transition={{ duration: 2, repeat: Infinity, delay: 0.6 }}
      />
      {/* Connecting lines */}
      <motion.g 
        stroke="#ef4444" 
        strokeWidth="1.5" 
        opacity="0.6"
        animate={{ opacity: [0.4, 0.8, 0.4] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <line x1="12" y1="9" x2="6" y2="15" />
        <line x1="12" y1="9" x2="18" y2="15" />
        <line x1="8" y1="18" x2="16" y2="18" />
      </motion.g>
    </svg>
  );
}

function DocumentsIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
      {/* Stacked documents */}
      <motion.rect
        x="5" y="4" width="14" height="16" rx="1"
        fill="#991b1b"
        animate={{ y: [0, -0.5, 0] }}
        transition={{ duration: 1.5, repeat: Infinity }}
      />
      <motion.rect
        x="6" y="3" width="12" height="16" rx="1"
        fill="#b91c1c"
        animate={{ y: [0, -0.5, 0] }}
        transition={{ duration: 1.5, repeat: Infinity, delay: 0.1 }}
      />
      <motion.rect
        x="7" y="2" width="10" height="16" rx="1"
        fill="#dc2626"
        stroke="#ef4444"
        strokeWidth="0.5"
        animate={{ y: [0, -0.5, 0] }}
        transition={{ duration: 1.5, repeat: Infinity, delay: 0.2 }}
      />
      {/* Text lines */}
      <motion.g 
        stroke="#fff" 
        strokeWidth="1" 
        opacity="0.6"
        animate={{ opacity: [0.4, 0.8, 0.4] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <line x1="9" y1="6" x2="15" y2="6" />
        <line x1="9" y1="9" x2="14" y2="9" />
        <line x1="9" y1="12" x2="13" y2="12" />
      </motion.g>
    </svg>
  );
}

function AlertsIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
      {/* Pulsing warning triangle */}
      <motion.path
        d="M12 2 L22 20 L2 20 Z"
        fill="none"
        stroke="#dc2626"
        strokeWidth="2"
        animate={{ 
          scale: [1, 1.05, 1],
          filter: ['drop-shadow(0 0 2px #dc2626)', 'drop-shadow(0 0 8px #dc2626)', 'drop-shadow(0 0 2px #dc2626)']
        }}
        transition={{ duration: 1, repeat: Infinity }}
        style={{ transformOrigin: '12px 14px' }}
      />
      <motion.path
        d="M12 2 L22 20 L2 20 Z"
        fill="#dc2626"
        opacity="0.3"
        animate={{ opacity: [0.2, 0.4, 0.2] }}
        transition={{ duration: 1, repeat: Infinity }}
      />
      {/* Exclamation */}
      <motion.g
        fill="#fff"
        animate={{ opacity: [1, 0.6, 1] }}
        transition={{ duration: 0.5, repeat: Infinity }}
      >
        <rect x="11" y="8" width="2" height="6" rx="1" />
        <circle cx="12" cy="16" r="1" />
      </motion.g>
    </svg>
  );
}

export default function StatsDisplay({ stats }: StatsDisplayProps) {
  const statItems = [
    {
      label: "Active Investigations",
      value: stats.totalInvestigations,
      Icon: InvestigationIcon,
    },
    {
      label: "Entities Tracked",
      value: stats.entitiesTracked,
      Icon: EntitiesIcon,
    },
    {
      label: "Documents Archived",
      value: stats.documentsArchived,
      Icon: DocumentsIcon,
    },
    {
      label: "Active Alerts",
      value: stats.activeAlerts,
      Icon: AlertsIcon,
    },
  ];

  return (
    <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
      {statItems.map((item, index) => (
        <motion.div 
          key={item.label} 
          className="glass-card p-5 group"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.1 }}
          whileHover={{ scale: 1.02, borderColor: 'rgba(153, 27, 27, 0.5)' }}
        >
          <div className="flex items-center gap-3 mb-3">
            <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-blood-900/50 to-blood-950/50 border border-blood-600/20 flex items-center justify-center group-hover:border-blood-600/40 transition-colors">
              <item.Icon />
            </div>
          </div>
          <motion.div 
            className="text-3xl font-bold text-white mb-1"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: index * 0.1 + 0.3 }}
          >
            {item.value.toLocaleString()}
          </motion.div>
          <div className="text-sm text-dark-400 group-hover:text-blood-500/70 transition-colors">
            {item.label}
          </div>
        </motion.div>
      ))}
    </div>
  );
}

