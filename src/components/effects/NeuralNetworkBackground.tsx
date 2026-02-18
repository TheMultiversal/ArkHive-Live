'use client';

import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { useEffect, useState, useRef } from 'react';

export default function NeuralNetworkBackground() {
  const containerRef = useRef<HTMLDivElement>(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const smoothX = useSpring(mouseX, { stiffness: 50, damping: 30 });
  const smoothY = useSpring(mouseY, { stiffness: 50, damping: 30 });
  
  const [nodes, setNodes] = useState<{ x: number; y: number; id: number }[]>([]);
  const [activeNode, setActiveNode] = useState<number | null>(null);

  // Generate random nodes
  useEffect(() => {
    const generateNodes = () => {
      const newNodes = [];
      for (let i = 0; i < 30; i++) {
        newNodes.push({
          x: Math.random() * 100,
          y: Math.random() * 100,
          id: i,
        });
      }
      setNodes(newNodes);
    };
    generateNodes();
  }, []);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
      
      // Find closest node
      if (containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect();
        const x = ((e.clientX - rect.left) / rect.width) * 100;
        const y = ((e.clientY - rect.top) / rect.height) * 100;
        
        let closest = null;
        let minDist = Infinity;
        nodes.forEach(node => {
          const dist = Math.sqrt((node.x - x) ** 2 + (node.y - y) ** 2);
          if (dist < minDist && dist < 15) {
            minDist = dist;
            closest = node.id;
          }
        });
        setActiveNode(closest);
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [mouseX, mouseY, nodes]);

  // Get connections between nearby nodes
  const getConnections = () => {
    const connections: { from: typeof nodes[0]; to: typeof nodes[0] }[] = [];
    nodes.forEach((node, i) => {
      nodes.slice(i + 1).forEach(otherNode => {
        const dist = Math.sqrt((node.x - otherNode.x) ** 2 + (node.y - otherNode.y) ** 2);
        if (dist < 20) {
          connections.push({ from: node, to: otherNode });
        }
      });
    });
    return connections;
  };

  return (
    <div ref={containerRef} className="fixed inset-0 z-0 overflow-hidden bg-black">
      {/* Sharp grid underlay */}
      <svg className="absolute inset-0 w-full h-full opacity-[0.08]">
        <defs>
          <pattern id="sharpGrid" width="40" height="40" patternUnits="userSpaceOnUse">
            <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#dc2626" strokeWidth="1" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#sharpGrid)" />
      </svg>

      {/* Neural network SVG */}
      <svg className="absolute inset-0 w-full h-full">
        <defs>
          {/* Sharp glow filter - minimal blur */}
          <filter id="nodeGlow" x="-100%" y="-100%" width="300%" height="300%">
            <feFlood floodColor="#dc2626" floodOpacity="0.8" />
            <feComposite in2="SourceGraphic" operator="in" />
            <feGaussianBlur stdDeviation="1" />
            <feMerge>
              <feMergeNode />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {/* Connection lines */}
        {getConnections().map(({ from, to }, i) => {
          const isActive = activeNode === from.id || activeNode === to.id;
          return (
            <motion.line
              key={`${from.id}-${to.id}`}
              x1={`${from.x}%`}
              y1={`${from.y}%`}
              x2={`${to.x}%`}
              y2={`${to.y}%`}
              stroke="#dc2626"
              strokeWidth={isActive ? 2 : 0.5}
              opacity={isActive ? 0.8 : 0.15}
              animate={{
                opacity: isActive ? [0.6, 1, 0.6] : 0.15,
              }}
              transition={{
                duration: 1,
                repeat: isActive ? Infinity : 0,
              }}
            />
          );
        })}

        {/* Nodes */}
        {nodes.map((node) => {
          const isActive = activeNode === node.id;
          return (
            <g key={node.id}>
              {/* Node circle */}
              <motion.circle
                cx={`${node.x}%`}
                cy={`${node.y}%`}
                r={isActive ? 6 : 3}
                fill={isActive ? '#ef4444' : '#dc2626'}
                opacity={isActive ? 1 : 0.4}
                filter={isActive ? 'url(#nodeGlow)' : undefined}
                animate={{
                  r: isActive ? [5, 7, 5] : 3,
                  opacity: isActive ? [0.8, 1, 0.8] : 0.4,
                }}
                transition={{
                  duration: 1,
                  repeat: Infinity,
                }}
              />
              {/* Inner dot */}
              <circle
                cx={`${node.x}%`}
                cy={`${node.y}%`}
                r="1"
                fill="#fff"
                opacity={isActive ? 0.8 : 0.3}
              />
            </g>
          );
        })}

        {/* Cursor influence area */}
        <motion.circle
          cx={smoothX}
          cy={smoothY}
          r="100"
          fill="url(#cursorInfluence)"
          opacity="0.3"
        />
        <defs>
          <radialGradient id="cursorInfluence">
            <stop offset="0%" stopColor="#dc2626" stopOpacity="0.2" />
            <stop offset="100%" stopColor="#dc2626" stopOpacity="0" />
          </radialGradient>
        </defs>
      </svg>

      {/* Animated pulse rings from active node */}
      {activeNode !== null && nodes[activeNode] && (
        <motion.div
          className="absolute pointer-events-none"
          style={{
            left: `${nodes[activeNode].x}%`,
            top: `${nodes[activeNode].y}%`,
            transform: 'translate(-50%, -50%)',
          }}
        >
          {[0, 1, 2].map((i) => (
            <motion.div
              key={i}
              className="absolute border border-blood-600"
              style={{
                width: 20,
                height: 20,
                borderRadius: '50%',
                left: -10,
                top: -10,
              }}
              animate={{
                scale: [1, 4],
                opacity: [0.6, 0],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                delay: i * 0.6,
              }}
            />
          ))}
        </motion.div>
      )}

      {/* Corner frame accents - sharp lines */}
      <div className="absolute top-4 left-4">
        <motion.div 
          className="w-16 h-px bg-blood-600"
          animate={{ opacity: [0.5, 1, 0.5], width: ['60px', '70px', '60px'] }}
          transition={{ duration: 3, repeat: Infinity }}
        />
        <motion.div 
          className="w-px h-16 bg-blood-600"
          animate={{ opacity: [0.5, 1, 0.5], height: ['60px', '70px', '60px'] }}
          transition={{ duration: 3, repeat: Infinity }}
        />
      </div>
      <div className="absolute top-4 right-4">
        <motion.div 
          className="w-16 h-px bg-blood-600 ml-auto"
          animate={{ opacity: [0.5, 1, 0.5] }}
          transition={{ duration: 3, repeat: Infinity, delay: 0.5 }}
        />
        <motion.div 
          className="w-px h-16 bg-blood-600 ml-auto"
          animate={{ opacity: [0.5, 1, 0.5] }}
          transition={{ duration: 3, repeat: Infinity, delay: 0.5 }}
        />
      </div>
      <div className="absolute bottom-4 left-4">
        <motion.div 
          className="w-px h-16 bg-blood-600"
          animate={{ opacity: [0.5, 1, 0.5] }}
          transition={{ duration: 3, repeat: Infinity, delay: 1 }}
        />
        <motion.div 
          className="w-16 h-px bg-blood-600"
          animate={{ opacity: [0.5, 1, 0.5] }}
          transition={{ duration: 3, repeat: Infinity, delay: 1 }}
        />
      </div>
      <div className="absolute bottom-4 right-4">
        <motion.div 
          className="w-px h-16 bg-blood-600 ml-auto"
          animate={{ opacity: [0.5, 1, 0.5] }}
          transition={{ duration: 3, repeat: Infinity, delay: 1.5 }}
        />
        <motion.div 
          className="w-16 h-px bg-blood-600 ml-auto"
          animate={{ opacity: [0.5, 1, 0.5] }}
          transition={{ duration: 3, repeat: Infinity, delay: 1.5 }}
        />
      </div>

      {/* Edge vignette - sharp gradient */}
      <div 
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'linear-gradient(to right, rgba(0,0,0,0.95) 0%, transparent 10%, transparent 90%, rgba(0,0,0,0.95) 100%)',
        }}
      />
      <div 
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'linear-gradient(to bottom, rgba(0,0,0,0.8) 0%, transparent 15%, transparent 85%, rgba(0,0,0,0.8) 100%)',
        }}
      />
    </div>
  );
}
