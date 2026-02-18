'use client';

import { motion, useInView } from 'framer-motion';
import { useState, useEffect, useRef, createElement } from 'react';

interface TypewriterTextProps {
  text: string;
  className?: string;
  speed?: number; // ms per character
  delay?: number; // ms before starting
  cursor?: boolean;
  cursorColor?: string;
  sound?: boolean;
  onComplete?: () => void;
  classified?: boolean; // Add "CLASSIFIED" stamp after
  element?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'span' | 'div';
}

export default function TypewriterText({
  text,
  className = '',
  speed = 50,
  delay = 0,
  cursor = true,
  cursorColor = '#dc2626',
  sound = false,
  onComplete,
  classified = false,
  element = 'div',
}: TypewriterTextProps) {
  const [displayedText, setDisplayedText] = useState('');
  const [isComplete, setIsComplete] = useState(false);
  const [showStamp, setShowStamp] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });

  useEffect(() => {
    if (!isInView) return;

    let currentIndex = 0;
    let timeout: NodeJS.Timeout;

    const startTyping = () => {
      timeout = setTimeout(() => {
        const typeNextChar = () => {
          if (currentIndex < text.length) {
            setDisplayedText(text.slice(0, currentIndex + 1));
            currentIndex++;
            timeout = setTimeout(typeNextChar, speed + Math.random() * 30);
          } else {
            setIsComplete(true);
            if (classified) {
              setTimeout(() => setShowStamp(true), 300);
            }
            onComplete?.();
          }
        };
        typeNextChar();
      }, delay);
    };

    startTyping();

    return () => clearTimeout(timeout);
  }, [isInView, text, speed, delay, onComplete, classified]);

  const content = (
    <>
      {/* Main text */}
      <span>
        {displayedText}
        
        {/* Blinking cursor */}
        {cursor && !isComplete && (
          <motion.span
            className="inline-block w-[2px] h-[1em] ml-[2px] align-middle"
            style={{ backgroundColor: cursorColor }}
            animate={{ opacity: [1, 0, 1] }}
            transition={{ duration: 0.8, repeat: Infinity }}
          />
        )}
      </span>

      {/* CLASSIFIED stamp */}
      {showStamp && classified && (
        <motion.div
          className="absolute -top-2 -right-4 transform rotate-[-15deg]"
          initial={{ scale: 2, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.2, ease: 'easeOut' }}
        >
          <div className="border-4 border-blood-700 px-3 py-1 bg-transparent">
            <span className="text-blood-700 font-bold text-lg tracking-widest font-mono">
              CLASSIFIED
            </span>
          </div>
        </motion.div>
      )}
    </>
  );

  return createElement(
    element,
    { ref, className: `relative ${className}` },
    content
  );
}

// Multi-line typewriter for documents
export function TypewriterDocument({
  lines,
  className = '',
  lineDelay = 500,
}: {
  lines: { text: string; classified?: boolean }[];
  className?: string;
  lineDelay?: number;
}) {
  const [visibleLines, setVisibleLines] = useState(0);

  useEffect(() => {
    if (visibleLines < lines.length) {
      const timeout = setTimeout(() => {
        setVisibleLines(prev => prev + 1);
      }, lineDelay);
      return () => clearTimeout(timeout);
    }
  }, [visibleLines, lines.length, lineDelay]);

  return (
    <div className={`space-y-2 ${className}`}>
      {lines.slice(0, visibleLines + 1).map((line, index) => (
        <TypewriterText
          key={index}
          text={line.text}
          delay={index === visibleLines ? 0 : 0}
          speed={40}
          classified={line.classified}
          cursor={index === visibleLines}
          onComplete={() => {
            if (index === visibleLines && visibleLines < lines.length - 1) {
              setTimeout(() => setVisibleLines(prev => prev + 1), lineDelay);
            }
          }}
        />
      ))}
    </div>
  );
}

// Redacted typewriter - some text is blacked out
export function RedactedTypewriter({
  text,
  redactedWords = [],
  className = '',
}: {
  text: string;
  redactedWords: string[];
  className?: string;
}) {
  const [displayedText, setDisplayedText] = useState('');
  const [isComplete, setIsComplete] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (!isInView) return;

    let currentIndex = 0;
    const typeNextChar = () => {
      if (currentIndex < text.length) {
        setDisplayedText(text.slice(0, currentIndex + 1));
        currentIndex++;
        setTimeout(typeNextChar, 30 + Math.random() * 20);
      } else {
        setIsComplete(true);
      }
    };
    
    setTimeout(typeNextChar, 500);
  }, [isInView, text]);

  // Process text to add redaction spans
  const processText = (str: string) => {
    let result = str;
    redactedWords.forEach(word => {
      const regex = new RegExp(`(${word})`, 'gi');
      result = result.replace(regex, '██████');
    });
    return result;
  };

  return (
    <div ref={ref} className={`font-mono ${className}`}>
      <span>{processText(displayedText)}</span>
      {!isComplete && (
        <motion.span
          className="inline-block w-[2px] h-[1em] bg-blood-600 ml-[2px]"
          animate={{ opacity: [1, 0, 1] }}
          transition={{ duration: 0.8, repeat: Infinity }}
        />
      )}
    </div>
  );
}
