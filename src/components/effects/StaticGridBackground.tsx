'use client';

// Lightweight static grid background - no animation, minimal CPU usage
export default function StaticGridBackground() {
  return (
    <div className="fixed inset-0 pointer-events-none z-0">
      {/* Base dark layer */}
      <div className="absolute inset-0 bg-black" />
      
      {/* Static grid pattern using CSS */}
      <div 
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: `
            linear-gradient(rgba(127, 29, 29, 0.3) 1px, transparent 1px),
            linear-gradient(90deg, rgba(127, 29, 29, 0.3) 1px, transparent 1px)
          `,
          backgroundSize: '60px 60px',
        }}
      />
      
      {/* Subtle radial vignette */}
      <div 
        className="absolute inset-0"
        style={{
          background: 'radial-gradient(ellipse at center, transparent 0%, rgba(0,0,0,0.6) 70%, rgba(0,0,0,0.9) 100%)',
        }}
      />
      
      {/* Corner accents - static */}
      <div className="absolute top-0 left-0 w-40 h-40 border-l border-t border-blood-900/30" />
      <div className="absolute top-0 right-0 w-40 h-40 border-r border-t border-blood-900/30" />
      <div className="absolute bottom-0 left-0 w-40 h-40 border-l border-b border-blood-900/30" />
      <div className="absolute bottom-0 right-0 w-40 h-40 border-r border-b border-blood-900/30" />
      
      {/* Center subtle glow - CSS only */}
      <div 
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full opacity-10"
        style={{
          background: 'radial-gradient(circle, rgba(220, 38, 38, 0.4) 0%, transparent 70%)',
        }}
      />
    </div>
  );
}
