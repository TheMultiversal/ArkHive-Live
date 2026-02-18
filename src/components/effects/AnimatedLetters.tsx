'use client';

interface AnimatedLettersProps {
  lines: string[];
  className?: string;
}

export default function AnimatedLetters({ lines, className = '' }: AnimatedLettersProps) {
  return (
    <div className={`${className}`}>
      <div className="inline-block px-6 py-4 border-2 border-blood-800/50 bg-black/50 animate-fade-in" style={{ animationDelay: '200ms' }}>
        {lines.map((line, lineIndex) => (
          <p 
            key={lineIndex} 
            className="text-xl sm:text-2xl lg:text-3xl font-black uppercase tracking-[0.15em] text-blood-600 animate-blood-pulse"
            style={{
              animationDelay: `${lineIndex * 0.15}s`,
            }}
          >
            {line}
          </p>
        ))}
      </div>
      
      <style jsx>{`
        @keyframes bloodPulse {
          0%, 100% {
            opacity: 0.7;
            text-shadow: 0 0 10px rgba(220, 38, 38, 0.3);
          }
          50% {
            opacity: 1;
            text-shadow: 0 0 20px rgba(220, 38, 38, 0.6), 0 0 40px rgba(220, 38, 38, 0.3);
          }
        }
        .animate-blood-pulse {
          animation: bloodPulse 3s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
}
