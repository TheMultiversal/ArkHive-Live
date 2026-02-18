'use client';

import { motion } from 'framer-motion';

interface BiohazardIconProps {
  size?: number;
  variant?: 'standard' | 'nuclear' | 'chemical' | 'biological' | 'pharmaceutical';
  className?: string;
  animate?: boolean;
}

export default function BiohazardIcon({ 
  size = 24, 
  variant = 'standard',
  className = '',
  animate = true
}: BiohazardIconProps) {
  
  const variantColors = {
    standard: { primary: '#dc2626', secondary: '#7f1d1d', glow: 'rgba(220, 38, 38, 0.5)' },
    nuclear: { primary: '#eab308', secondary: '#a16207', glow: 'rgba(234, 179, 8, 0.5)' },
    chemical: { primary: '#22c55e', secondary: '#166534', glow: 'rgba(34, 197, 94, 0.5)' },
    biological: { primary: '#a855f7', secondary: '#7c3aed', glow: 'rgba(168, 85, 247, 0.5)' },
    pharmaceutical: { primary: '#3b82f6', secondary: '#1d4ed8', glow: 'rgba(59, 130, 246, 0.5)' },
  };

  const colors = variantColors[variant];

  // Different symbols for different variants
  const renderSymbol = () => {
    switch (variant) {
      case 'nuclear':
        return (
          // Radioactive symbol
          <g>
            <circle cx="50" cy="50" r="10" fill={colors.primary} />
            {[0, 120, 240].map((angle, i) => (
              <motion.path
                key={i}
                d={`M50 50 L${50 + 35 * Math.cos((angle - 30) * Math.PI / 180)} ${50 + 35 * Math.sin((angle - 30) * Math.PI / 180)} 
                   A35 35 0 0 1 ${50 + 35 * Math.cos((angle + 30) * Math.PI / 180)} ${50 + 35 * Math.sin((angle + 30) * Math.PI / 180)} Z`}
                fill={colors.primary}
                animate={animate ? { opacity: [0.7, 1, 0.7] } : {}}
                transition={{ duration: 1.5, repeat: Infinity, delay: i * 0.3 }}
              />
            ))}
          </g>
        );
      
      case 'chemical':
        return (
          // Test tube / flask
          <g>
            <motion.path
              d="M35 20 L35 55 Q35 75 50 80 Q65 75 65 55 L65 20"
              fill="none"
              stroke={colors.primary}
              strokeWidth="4"
              strokeLinecap="round"
              animate={animate ? { 
                fill: [`${colors.primary}00`, `${colors.primary}40`, `${colors.primary}00`] 
              } : {}}
              transition={{ duration: 2, repeat: Infinity }}
            />
            <line x1="30" y1="20" x2="70" y2="20" stroke={colors.primary} strokeWidth="4" strokeLinecap="round" />
            <motion.ellipse
              cx="50"
              cy="65"
              rx="12"
              ry="6"
              fill={colors.secondary}
              animate={animate ? { ry: [6, 8, 6], cy: [65, 63, 65] } : {}}
              transition={{ duration: 1.5, repeat: Infinity }}
            />
            {/* Bubbles */}
            <motion.circle cx="45" cy="55" r="3" fill={colors.primary}
              animate={animate ? { cy: [55, 45], opacity: [1, 0] } : {}}
              transition={{ duration: 1, repeat: Infinity }}
            />
            <motion.circle cx="55" cy="60" r="2" fill={colors.primary}
              animate={animate ? { cy: [60, 48], opacity: [1, 0] } : {}}
              transition={{ duration: 1.2, repeat: Infinity, delay: 0.5 }}
            />
          </g>
        );
      
      case 'pharmaceutical':
        return (
          // Pill / Rx symbol
          <g>
            {/* Pill capsule */}
            <motion.rect
              x="25"
              y="40"
              width="50"
              height="20"
              rx="10"
              fill={colors.secondary}
              animate={animate ? { rotate: [0, 5, 0, -5, 0] } : {}}
              transition={{ duration: 3, repeat: Infinity }}
              style={{ transformOrigin: '50px 50px' }}
            />
            <rect x="25" y="40" width="25" height="20" rx="10" fill={colors.primary} />
            {/* Rx */}
            <text x="50" y="35" fill={colors.primary} fontSize="16" fontWeight="bold" textAnchor="middle">Rx</text>
          </g>
        );
      
      case 'biological':
        return (
          // Virus-like symbol
          <g>
            <circle cx="50" cy="50" r="15" fill={colors.primary} />
            {[0, 45, 90, 135, 180, 225, 270, 315].map((angle, i) => (
              <motion.g key={i}
                animate={animate ? { scale: [1, 1.1, 1] } : {}}
                transition={{ duration: 1, repeat: Infinity, delay: i * 0.1 }}
                style={{ transformOrigin: '50px 50px' }}
              >
                <line
                  x1={50 + 15 * Math.cos(angle * Math.PI / 180)}
                  y1={50 + 15 * Math.sin(angle * Math.PI / 180)}
                  x2={50 + 30 * Math.cos(angle * Math.PI / 180)}
                  y2={50 + 30 * Math.sin(angle * Math.PI / 180)}
                  stroke={colors.primary}
                  strokeWidth="3"
                />
                <circle
                  cx={50 + 33 * Math.cos(angle * Math.PI / 180)}
                  cy={50 + 33 * Math.sin(angle * Math.PI / 180)}
                  r="5"
                  fill={colors.secondary}
                />
              </motion.g>
            ))}
          </g>
        );
      
      default:
        return (
          // Standard biohazard
          <g>
            <circle cx="50" cy="50" r="8" fill="none" stroke={colors.primary} strokeWidth="3" />
            {[0, 120, 240].map((angle, i) => (
              <motion.g key={i}
                animate={animate ? { opacity: [0.7, 1, 0.7] } : {}}
                transition={{ duration: 2, repeat: Infinity, delay: i * 0.3 }}
              >
                {/* Outer arc */}
                <path
                  d={`M${50 + 12 * Math.cos(angle * Math.PI / 180)} ${50 + 12 * Math.sin(angle * Math.PI / 180)}
                     Q${50 + 30 * Math.cos((angle) * Math.PI / 180)} ${50 + 30 * Math.sin((angle) * Math.PI / 180)}
                      ${50 + 35 * Math.cos((angle + 40) * Math.PI / 180)} ${50 + 35 * Math.sin((angle + 40) * Math.PI / 180)}
                     A20 20 0 0 1 ${50 + 35 * Math.cos((angle - 40) * Math.PI / 180)} ${50 + 35 * Math.sin((angle - 40) * Math.PI / 180)}
                     Q${50 + 30 * Math.cos((angle) * Math.PI / 180)} ${50 + 30 * Math.sin((angle) * Math.PI / 180)}
                      ${50 + 12 * Math.cos(angle * Math.PI / 180)} ${50 + 12 * Math.sin(angle * Math.PI / 180)}`}
                  fill={colors.primary}
                />
                {/* Inner circle cutout appearance */}
                <circle
                  cx={50 + 22 * Math.cos((angle + 60) * Math.PI / 180)}
                  cy={50 + 22 * Math.sin((angle + 60) * Math.PI / 180)}
                  r="8"
                  fill="#000"
                />
                <circle
                  cx={50 + 22 * Math.cos((angle - 60) * Math.PI / 180)}
                  cy={50 + 22 * Math.sin((angle - 60) * Math.PI / 180)}
                  r="8"
                  fill="#000"
                />
              </motion.g>
            ))}
          </g>
        );
    }
  };

  return (
    <motion.svg
      width={size}
      height={size}
      viewBox="0 0 100 100"
      className={className}
      whileHover={{ scale: 1.1 }}
    >
      <defs>
        <filter id={`glow-${variant}`} x="-50%" y="-50%" width="200%" height="200%">
          <feGaussianBlur stdDeviation="3" result="blur" />
          <feFlood floodColor={colors.glow} />
          <feComposite in2="blur" operator="in" />
          <feMerge>
            <feMergeNode />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>
      
      <g filter={`url(#glow-${variant})`}>
        {renderSymbol()}
      </g>
    </motion.svg>
  );
}
