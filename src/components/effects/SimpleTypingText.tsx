'use client';

interface SimpleTypingTextProps {
  text: string;
  className?: string;
  rewriteInterval?: number; // kept for compatibility, not used
}

// Static headline with fade-in - no animations that cause lag
export default function SimpleTypingText({ 
  text, 
  className = '',
}: SimpleTypingTextProps) {
  return (
    <div className={`relative ${className}`}>
      <span 
        className="bg-gradient-to-b from-blood-600 via-blood-700 to-blood-800 bg-clip-text text-transparent animate-fade-in"
        style={{
          filter: 'drop-shadow(0 0 30px rgba(220, 38, 38, 0.5))',
        }}
      >
        {text}
      </span>
    </div>
  );
}
