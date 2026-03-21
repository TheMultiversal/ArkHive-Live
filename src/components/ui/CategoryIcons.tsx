'use client';

import { motion } from 'framer-motion';

interface CategoryIconProps {
  size?: number;
  className?: string;
}

/**
 * Government Agencies - All-seeing surveillance eye inside a shield.
 * Represents state power, institutional authority, and the apparatus of control.
 */
export function GovernmentIcon({ size = 32, className = '' }: CategoryIconProps) {
  return (
    <motion.svg
      width={size}
      height={size}
      viewBox="0 0 100 100"
      className={className}
      whileHover={{ scale: 1.1 }}
    >
      <defs>
        <linearGradient id="gov-shield" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#e0e0e0" />
          <stop offset="50%" stopColor="#a0a0a0" />
          <stop offset="100%" stopColor="#606060" />
        </linearGradient>
        <linearGradient id="gov-iris" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#ff4444" />
          <stop offset="50%" stopColor="#4a4a4a" />
          <stop offset="100%" stopColor="#6b0000" />
        </linearGradient>
        <filter id="gov-glow" x="-30%" y="-30%" width="160%" height="160%">
          <feGaussianBlur stdDeviation="2" result="blur" />
          <feFlood floodColor="rgba(150, 150, 150, 0.5)" />
          <feComposite in2="blur" operator="in" />
          <feMerge>
            <feMergeNode />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>

      <g filter="url(#gov-glow)">
        {/* Shield body */}
        <path
          d="M50 8 L85 25 L85 55 Q85 75 50 92 Q15 75 15 55 L15 25 Z"
          fill="url(#gov-shield)"
          stroke="#fff"
          strokeWidth="1.5"
          opacity="0.9"
        />
        {/* Shield inner bevel */}
        <path
          d="M50 14 L78 28 L78 54 Q78 71 50 86 Q22 71 22 54 L22 28 Z"
          fill="none"
          stroke="rgba(255,255,255,0.3)"
          strokeWidth="0.5"
        />
        {/* Shield dark interior */}
        <path
          d="M50 16 L76 29 L76 53 Q76 69 50 84 Q24 69 24 53 L24 29 Z"
          fill="#0a0a0a"
        />

        {/* Eye - almond shape */}
        <motion.g
          animate={{ scaleY: [1, 0.15, 1] }}
          transition={{ duration: 4, repeat: Infinity, repeatDelay: 3, times: [0, 0.04, 0.1] }}
          style={{ transformOrigin: '50px 48px' }}
        >
          <path
            d="M30 48 Q40 34 50 34 Q60 34 70 48 Q60 62 50 62 Q40 62 30 48 Z"
            fill="#1a0000"
            stroke="#3d3d3d"
            strokeWidth="1"
          />
          {/* Iris */}
          <circle cx="50" cy="48" r="9" fill="url(#gov-iris)" />
          {/* Pupil */}
          <motion.circle
            cx="50"
            cy="48"
            r="4"
            fill="#000"
            animate={{ r: [4, 3, 4, 5, 4] }}
            transition={{ duration: 3, repeat: Infinity }}
          />
          {/* Specular highlights */}
          <circle cx="53" cy="45" r="2" fill="#fff" opacity="0.85" />
          <circle cx="47" cy="50" r="1" fill="#fff" opacity="0.4" />
          {/* Iris detail rings */}
          <circle cx="50" cy="48" r="7" fill="none" stroke="#ff3333" strokeWidth="0.3" opacity="0.6" />
          <circle cx="50" cy="48" r="5.5" fill="none" stroke="#6b6b6b" strokeWidth="0.2" opacity="0.4" />
        </motion.g>

        {/* Surveillance rays emanating from eye */}
        {[-35, -20, 0, 20, 35].map((angle, i) => {
          const rad = (angle - 90) * Math.PI / 180;
          const x1 = 50 + Math.cos(rad) * 18;
          const y1 = 48 + Math.sin(rad) * 18;
          const x2 = 50 + Math.cos(rad) * 28;
          const y2 = 48 + Math.sin(rad) * 28;
          return (
            <motion.line
              key={i}
              x1={x1} y1={y1} x2={x2} y2={y2}
              stroke="#4a4a4a"
              strokeWidth="0.5"
              opacity="0.4"
              animate={{ opacity: [0.2, 0.6, 0.2] }}
              transition={{ duration: 1.5, repeat: Infinity, delay: i * 0.2 }}
            />
          );
        })}

        {/* Column details on shield sides */}
        <line x1="30" y1="30" x2="30" y2="60" stroke="rgba(255,255,255,0.1)" strokeWidth="1" />
        <line x1="70" y1="30" x2="70" y2="60" stroke="rgba(255,255,255,0.1)" strokeWidth="1" />

        {/* Stars at top of shield */}
        {[-8, 0, 8].map((offset, i) => (
          <motion.circle
            key={i}
            cx={50 + offset}
            cy="22"
            r="1.2"
            fill="#fff"
            opacity="0.7"
            animate={{ opacity: [0.4, 0.9, 0.4] }}
            transition={{ duration: 2, repeat: Infinity, delay: i * 0.4 }}
          />
        ))}
      </g>
    </motion.svg>
  );
}

/**
 * Corporations - Corporate tower with money/influence tendrils and all-seeing eye at top.
 * Represents concentrated financial power, corporate surveillance, and profit over people.
 */
export function CorporationIcon({ size = 32, className = '' }: CategoryIconProps) {
  return (
    <motion.svg
      width={size}
      height={size}
      viewBox="0 0 100 100"
      className={className}
      whileHover={{ scale: 1.1 }}
    >
      <defs>
        <linearGradient id="corp-tower" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#888" />
          <stop offset="50%" stopColor="#555" />
          <stop offset="100%" stopColor="#333" />
        </linearGradient>
        <linearGradient id="corp-gold" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#ffd700" />
          <stop offset="100%" stopColor="#b8860b" />
        </linearGradient>
        <filter id="corp-glow" x="-30%" y="-30%" width="160%" height="160%">
          <feGaussianBlur stdDeviation="2" result="blur" />
          <feFlood floodColor="rgba(150, 150, 150, 0.4)" />
          <feComposite in2="blur" operator="in" />
          <feMerge>
            <feMergeNode />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>

      <g filter="url(#corp-glow)">
        {/* Central tower */}
        <rect x="38" y="22" width="24" height="68" fill="url(#corp-tower)" stroke="#999" strokeWidth="0.5" />
        {/* Tower windows - grid */}
        {[0, 1, 2, 3, 4, 5, 6, 7].map(row => (
          [0, 1, 2].map(col => (
            <motion.rect
              key={`${row}-${col}`}
              x={41 + col * 7}
              y={28 + row * 7.5}
              width="4"
              height="5"
              fill={row === 0 && col === 1 ? '#4a4a4a' : '#1a1a1a'}
              animate={
                Math.random() > 0.6
                  ? { fill: ['#1a1a1a', '#332200', '#1a1a1a'] }
                  : {}
              }
              transition={{ duration: 3 + Math.random() * 3, repeat: Infinity, delay: Math.random() * 5 }}
            />
          ))
        )).flat()}

        {/* Left wing building */}
        <rect x="18" y="42" width="20" height="48" fill="#444" stroke="#666" strokeWidth="0.5" />
        {[0, 1, 2, 3, 4, 5].map(row => (
          [0, 1].map(col => (
            <rect
              key={`l-${row}-${col}`}
              x={21 + col * 8}
              y={47 + row * 7.5}
              width="4"
              height="5"
              fill="#1a1a1a"
            />
          ))
        )).flat()}

        {/* Right wing building */}
        <rect x="62" y="42" width="20" height="48" fill="#444" stroke="#666" strokeWidth="0.5" />
        {[0, 1, 2, 3, 4, 5].map(row => (
          [0, 1].map(col => (
            <rect
              key={`r-${row}-${col}`}
              x={65 + col * 8}
              y={47 + row * 7.5}
              width="4"
              height="5"
              fill="#1a1a1a"
            />
          ))
        )).flat()}

        {/* Antenna / spire on top */}
        <line x1="50" y1="22" x2="50" y2="12" stroke="#aaa" strokeWidth="1.5" />
        <motion.circle
          cx="50" cy="10" r="2"
          fill="#4a4a4a"
          animate={{ opacity: [0.4, 1, 0.4], r: [1.5, 2.5, 1.5] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        />

        {/* Money tendrils - flowing lines */}
        {[
          'M18 55 Q8 50 5 40 Q3 32 8 25',
          'M82 55 Q92 50 95 40 Q97 32 92 25',
          'M18 70 Q6 68 3 60',
          'M82 70 Q94 68 97 60',
        ].map((d, i) => (
          <motion.path
            key={i}
            d={d}
            fill="none"
            stroke="url(#corp-gold)"
            strokeWidth="1"
            strokeDasharray="4 3"
            opacity="0.5"
            animate={{ strokeDashoffset: [0, -14] }}
            transition={{ duration: 2, repeat: Infinity, ease: 'linear' }}
          />
        ))}

        {/* Dollar signs at tendril ends */}
        {[
          { x: 8, y: 23 },
          { x: 92, y: 23 },
        ].map((pos, i) => (
          <motion.text
            key={i}
            x={pos.x}
            y={pos.y}
            fill="#ffd700"
            fontSize="8"
            fontWeight="bold"
            textAnchor="middle"
            opacity="0.6"
            animate={{ opacity: [0.3, 0.7, 0.3] }}
            transition={{ duration: 2, repeat: Infinity, delay: i * 0.8 }}
          >
            $
          </motion.text>
        ))}

        {/* Ground line */}
        <line x1="10" y1="90" x2="90" y2="90" stroke="#666" strokeWidth="0.5" />
      </g>
    </motion.svg>
  );
}

/**
 * Key Individuals - Figure silhouette with crosshair target overlay and connection threads.
 * Represents tracking decision-makers, accountability, and connecting people to actions.
 */
export function IndividualIcon({ size = 32, className = '' }: CategoryIconProps) {
  return (
    <motion.svg
      width={size}
      height={size}
      viewBox="0 0 100 100"
      className={className}
      whileHover={{ scale: 1.1 }}
    >
      <defs>
        <linearGradient id="ind-silhouette" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#ccc" />
          <stop offset="100%" stopColor="#666" />
        </linearGradient>
        <filter id="ind-glow" x="-30%" y="-30%" width="160%" height="160%">
          <feGaussianBlur stdDeviation="2" result="blur" />
          <feFlood floodColor="rgba(150, 150, 150, 0.5)" />
          <feComposite in2="blur" operator="in" />
          <feMerge>
            <feMergeNode />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>

      <g filter="url(#ind-glow)">
        {/* Figure silhouette - head */}
        <circle cx="50" cy="30" r="12" fill="url(#ind-silhouette)" />
        {/* Figure silhouette - shoulders/torso */}
        <path
          d="M30 90 L30 65 Q30 50 50 48 Q70 50 70 65 L70 90"
          fill="url(#ind-silhouette)"
        />

        {/* Crosshair reticle */}
        <motion.g
          animate={{ rotate: [0, 360] }}
          transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
          style={{ transformOrigin: '50px 45px' }}
        >
          {/* Outer ring */}
          <circle cx="50" cy="45" r="30" fill="none" stroke="#4a4a4a" strokeWidth="0.8" opacity="0.6" />
          {/* Tick marks on ring */}
          {[0, 90, 180, 270].map((angle, i) => {
            const rad = angle * Math.PI / 180;
            return (
              <line
                key={i}
                x1={50 + Math.cos(rad) * 27}
                y1={45 + Math.sin(rad) * 27}
                x2={50 + Math.cos(rad) * 33}
                y2={45 + Math.sin(rad) * 33}
                stroke="#4a4a4a"
                strokeWidth="1"
                opacity="0.7"
              />
            );
          })}
        </motion.g>

        {/* Inner crosshair - static */}
        <circle cx="50" cy="45" r="18" fill="none" stroke="#6b6b6b" strokeWidth="0.5" opacity="0.4" strokeDasharray="2 2" />
        {/* Crosshair lines */}
        <line x1="50" y1="10" x2="50" y2="38" stroke="#4a4a4a" strokeWidth="0.7" opacity="0.5" />
        <line x1="50" y1="52" x2="50" y2="80" stroke="#4a4a4a" strokeWidth="0.7" opacity="0.5" />
        <line x1="15" y1="45" x2="42" y2="45" stroke="#4a4a4a" strokeWidth="0.7" opacity="0.5" />
        <line x1="58" y1="45" x2="85" y2="45" stroke="#4a4a4a" strokeWidth="0.7" opacity="0.5" />
        {/* Center dot */}
        <motion.circle
          cx="50" cy="45" r="2"
          fill="#ff3333"
          animate={{ r: [1.5, 2.5, 1.5], opacity: [0.6, 1, 0.6] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        />

        {/* Connection threads going to edges - representing links to other entities */}
        {[
          { x: 8, y: 15, label: '' },
          { x: 92, y: 20, label: '' },
          { x: 10, y: 80, label: '' },
          { x: 88, y: 75, label: '' },
        ].map((target, i) => (
          <g key={i}>
            <motion.line
              x1="50" y1="45"
              x2={target.x} y2={target.y}
              stroke="#4a4a4a"
              strokeWidth="0.5"
              strokeDasharray="3 3"
              opacity="0.3"
              animate={{ strokeDashoffset: [0, -12] }}
              transition={{ duration: 2, repeat: Infinity, ease: 'linear' }}
            />
            <motion.circle
              cx={target.x} cy={target.y} r="3"
              fill="none"
              stroke="#3d3d3d"
              strokeWidth="0.5"
              animate={{ r: [2, 4, 2], opacity: [0.3, 0.6, 0.3] }}
              transition={{ duration: 2, repeat: Infinity, delay: i * 0.5 }}
            />
          </g>
        ))}

        {/* Data readout lines beside figure */}
        {[0, 1, 2].map(i => (
          <motion.line
            key={i}
            x1="75"
            y1={55 + i * 6}
            x2={85 + Math.random() * 10}
            y2={55 + i * 6}
            stroke="#3d3d3d"
            strokeWidth="1"
            opacity="0.3"
            animate={{ x2: [80, 92, 80] }}
            transition={{ duration: 2 + i * 0.5, repeat: Infinity }}
          />
        ))}
      </g>
    </motion.svg>
  );
}

/**
 * Organizations - Network web of interconnected nodes with a central hub.
 * Represents shadow networks, hidden connections, and organizational power structures.
 */
export function OrganizationIcon({ size = 32, className = '' }: CategoryIconProps) {
  // Node positions arranged in an organic network layout
  const nodes = [
    { x: 50, y: 50, r: 6, primary: true },   // Central hub
    { x: 25, y: 25, r: 4, primary: false },
    { x: 75, y: 22, r: 4, primary: false },
    { x: 18, y: 55, r: 3.5, primary: false },
    { x: 82, y: 52, r: 3.5, primary: false },
    { x: 30, y: 78, r: 4, primary: false },
    { x: 72, y: 80, r: 4, primary: false },
    { x: 50, y: 18, r: 3, primary: false },
    { x: 10, y: 38, r: 2.5, primary: false },
    { x: 90, y: 36, r: 2.5, primary: false },
    { x: 50, y: 88, r: 3, primary: false },
    { x: 15, y: 72, r: 2.5, primary: false },
    { x: 88, y: 70, r: 2.5, primary: false },
  ];

  // Connections between nodes (indices)
  const connections = [
    [0, 1], [0, 2], [0, 3], [0, 4], [0, 5], [0, 6],
    [1, 7], [1, 8], [2, 7], [2, 9],
    [3, 8], [3, 11], [4, 9], [4, 12],
    [5, 11], [5, 10], [6, 12], [6, 10],
    [1, 3], [2, 4], [5, 6],
  ];

  return (
    <motion.svg
      width={size}
      height={size}
      viewBox="0 0 100 100"
      className={className}
      whileHover={{ scale: 1.1 }}
    >
      <defs>
        <radialGradient id="org-node" cx="40%" cy="40%" r="60%">
          <stop offset="0%" stopColor="#ff5555" />
          <stop offset="100%" stopColor="#3d3d3d" />
        </radialGradient>
        <radialGradient id="org-hub" cx="40%" cy="40%" r="60%">
          <stop offset="0%" stopColor="#ff6666" />
          <stop offset="50%" stopColor="#6b6b6b" />
          <stop offset="100%" stopColor="#6b0000" />
        </radialGradient>
        <filter id="org-glow" x="-30%" y="-30%" width="160%" height="160%">
          <feGaussianBlur stdDeviation="2" result="blur" />
          <feFlood floodColor="rgba(150, 150, 150, 0.5)" />
          <feComposite in2="blur" operator="in" />
          <feMerge>
            <feMergeNode />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>

      <g filter="url(#org-glow)">
        {/* Connection lines with animated data flow */}
        {connections.map(([from, to], i) => (
          <motion.line
            key={`c-${i}`}
            x1={nodes[from].x}
            y1={nodes[from].y}
            x2={nodes[to].x}
            y2={nodes[to].y}
            stroke="#4a4a4a"
            strokeWidth={from === 0 || to === 0 ? 1.2 : 0.6}
            opacity={from === 0 || to === 0 ? 0.6 : 0.3}
            strokeDasharray={from === 0 || to === 0 ? 'none' : '2 2'}
          />
        ))}

        {/* Animated pulse along primary connections */}
        {connections.filter(([from, to]) => from === 0 || to === 0).map(([from, to], i) => {
          const fromNode = nodes[from];
          const toNode = nodes[to];
          return (
            <motion.circle
              key={`p-${i}`}
              r="1.5"
              fill="#ff4444"
              opacity="0.8"
              animate={{
                cx: [fromNode.x, toNode.x],
                cy: [fromNode.y, toNode.y],
                opacity: [0.8, 0.2],
              }}
              transition={{
                duration: 1.5 + i * 0.3,
                repeat: Infinity,
                delay: i * 0.4,
                ease: 'linear',
              }}
            />
          );
        })}

        {/* Nodes */}
        {nodes.map((node, i) => (
          <g key={`n-${i}`}>
            {/* Node pulse ring for hub */}
            {node.primary && (
              <motion.circle
                cx={node.x}
                cy={node.y}
                r={node.r}
                fill="none"
                stroke="#6b6b6b"
                strokeWidth="0.5"
                animate={{ r: [node.r, node.r + 6, node.r], opacity: [0.5, 0, 0.5] }}
                transition={{ duration: 2, repeat: Infinity }}
              />
            )}
            {/* Node body */}
            <motion.circle
              cx={node.x}
              cy={node.y}
              r={node.r}
              fill={node.primary ? 'url(#org-hub)' : 'url(#org-node)'}
              stroke={node.primary ? '#fff' : '#6b6b6b'}
              strokeWidth={node.primary ? 1 : 0.5}
              animate={
                !node.primary
                  ? { r: [node.r, node.r + 0.5, node.r] }
                  : {}
              }
              transition={{ duration: 2 + i * 0.2, repeat: Infinity }}
            />
            {/* Specular highlight */}
            <circle
              cx={node.x - node.r * 0.25}
              cy={node.y - node.r * 0.25}
              r={node.r * 0.35}
              fill="#fff"
              opacity={node.primary ? 0.5 : 0.3}
            />
          </g>
        ))}
      </g>
    </motion.svg>
  );
}

/**
 * Vault Submit - Archive vault with a document being inserted and an all-seeing eye on the vault door.
 * Represents secure archival submission, the act of contributing evidence to the permanent record.
 */
export function VaultSubmitIcon({ size = 32, className = '' }: CategoryIconProps) {
  return (
    <motion.svg
      width={size}
      height={size}
      viewBox="0 0 100 100"
      className={className}
      whileHover={{ scale: 1.1 }}
    >
      <defs>
        <linearGradient id="vault-body" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#c0c0c0" />
          <stop offset="30%" stopColor="#808080" />
          <stop offset="70%" stopColor="#555" />
          <stop offset="100%" stopColor="#333" />
        </linearGradient>
        <linearGradient id="vault-door" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#999" />
          <stop offset="50%" stopColor="#666" />
          <stop offset="100%" stopColor="#444" />
        </linearGradient>
        <linearGradient id="vault-iris" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#ff4444" />
          <stop offset="50%" stopColor="#4a4a4a" />
          <stop offset="100%" stopColor="#6b0000" />
        </linearGradient>
        <linearGradient id="vault-doc" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#f0f0f0" />
          <stop offset="100%" stopColor="#cccccc" />
        </linearGradient>
        <filter id="vault-glow" x="-30%" y="-30%" width="160%" height="160%">
          <feGaussianBlur stdDeviation="2" result="blur" />
          <feFlood floodColor="rgba(150, 150, 150, 0.5)" />
          <feComposite in2="blur" operator="in" />
          <feMerge>
            <feMergeNode />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>

      <g filter="url(#vault-glow)">
        {/* Vault body - main box */}
        <rect x="15" y="28" width="55" height="58" rx="3" fill="url(#vault-body)" stroke="#888" strokeWidth="1" />
        {/* Vault body top */}
        <rect x="15" y="28" width="55" height="8" rx="3" fill="#999" opacity="0.4" />

        {/* Vault door face */}
        <rect x="20" y="34" width="45" height="46" rx="2" fill="url(#vault-door)" stroke="#aaa" strokeWidth="0.5" />

        {/* Vault door inner ring */}
        <circle cx="42" cy="57" r="16" fill="none" stroke="#888" strokeWidth="1.5" />
        <circle cx="42" cy="57" r="14" fill="#1a0000" stroke="#555" strokeWidth="0.5" />

        {/* Eye on vault door */}
        <motion.g
          animate={{ scaleY: [1, 0.1, 1] }}
          transition={{ duration: 5, repeat: Infinity, repeatDelay: 4, times: [0, 0.03, 0.08] }}
          style={{ transformOrigin: '42px 57px' }}
        >
          {/* Eye almond */}
          <path
            d="M30 57 Q36 48 42 48 Q48 48 54 57 Q48 66 42 66 Q36 66 30 57 Z"
            fill="#0d0000"
            stroke="#3d3d3d"
            strokeWidth="0.8"
          />
          {/* Iris */}
          <circle cx="42" cy="57" r="6" fill="url(#vault-iris)" />
          {/* Pupil */}
          <motion.circle
            cx="42" cy="57" r="2.5"
            fill="#000"
            animate={{ r: [2.5, 2, 2.5, 3, 2.5] }}
            transition={{ duration: 3, repeat: Infinity }}
          />
          {/* Specular */}
          <circle cx="44" cy="55" r="1.5" fill="#fff" opacity="0.8" />
          <circle cx="40" cy="59" r="0.7" fill="#fff" opacity="0.35" />
        </motion.g>

        {/* Vault handle / locking bolts */}
        {/* Top bolt */}
        <rect x="39" y="36" width="6" height="3" rx="1" fill="#aaa" stroke="#666" strokeWidth="0.3" />
        {/* Bottom bolt */}
        <rect x="39" y="74" width="6" height="3" rx="1" fill="#aaa" stroke="#666" strokeWidth="0.3" />
        {/* Left bolt */}
        <rect x="21" y="54" width="3" height="6" rx="1" fill="#aaa" stroke="#666" strokeWidth="0.3" />
        {/* Right bolt */}
        <rect x="61" y="54" width="3" height="6" rx="1" fill="#aaa" stroke="#666" strokeWidth="0.3" />

        {/* Hinges on left side */}
        <rect x="13" y="38" width="4" height="8" rx="1" fill="#777" stroke="#555" strokeWidth="0.3" />
        <rect x="13" y="68" width="4" height="8" rx="1" fill="#777" stroke="#555" strokeWidth="0.3" />

        {/* Document being inserted from top-right */}
        <motion.g
          animate={{ y: [0, 3, 0], rotate: [0, -1, 0] }}
          transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut' }}
          style={{ transformOrigin: '75px 30px' }}
        >
          {/* Document page */}
          <rect x="62" y="8" width="24" height="32" fill="url(#vault-doc)" stroke="#999" strokeWidth="0.5" />
          {/* Folded corner */}
          <path d="M80 8 L86 8 L86 14 Z" fill="#ddd" stroke="#999" strokeWidth="0.3" />
          <path d="M80 8 L80 14 L86 14" fill="none" stroke="#bbb" strokeWidth="0.3" />
          {/* Text lines on document */}
          <line x1="66" y1="16" x2="78" y2="16" stroke="#888" strokeWidth="1" />
          <line x1="66" y1="20" x2="80" y2="20" stroke="#aaa" strokeWidth="0.7" />
          <line x1="66" y1="23" x2="76" y2="23" stroke="#aaa" strokeWidth="0.7" />
          <line x1="66" y1="26" x2="79" y2="26" stroke="#aaa" strokeWidth="0.7" />
          <line x1="66" y1="29" x2="74" y2="29" stroke="#aaa" strokeWidth="0.7" />
          {/* Classified stamp */}
          <rect x="67" y="32" width="16" height="5" fill="none" stroke="#4a4a4a" strokeWidth="0.8" opacity="0.7" />
          <text x="75" y="36" fill="#4a4a4a" fontSize="3.5" fontWeight="bold" textAnchor="middle" opacity="0.8">CLASSIFIED</text>
        </motion.g>

        {/* Arrow indicating insertion direction */}
        <motion.g
          animate={{ opacity: [0.3, 0.8, 0.3], y: [0, 2, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          <path d="M72 42 L68 46 L76 46 Z" fill="#4a4a4a" opacity="0.6" />
          <line x1="72" y1="38" x2="72" y2="42" stroke="#4a4a4a" strokeWidth="1.5" opacity="0.6" />
        </motion.g>

        {/* Security scan lines on vault face */}
        <motion.line
          x1="22" y1="36"
          x2="63" y2="36"
          stroke="#ff3333"
          strokeWidth="0.5"
          opacity="0.15"
          animate={{ y1: [36, 78, 36], y2: [36, 78, 36] }}
          transition={{ duration: 3, repeat: Infinity, ease: 'linear' }}
        />

        {/* Base / platform */}
        <rect x="12" y="86" width="61" height="4" rx="1" fill="#555" stroke="#777" strokeWidth="0.5" />
      </g>
    </motion.svg>
  );
}
