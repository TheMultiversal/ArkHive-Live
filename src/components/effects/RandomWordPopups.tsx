'use client';

import { useEffect, useState, useRef, useMemo } from 'react';

interface PopupWord {
  id: number;
  word: string;
  x: number;
  y: number;
  size: number;
  duration: number;
  rotation: number;
}

// Default words related to the theme
const DEFAULT_WORDS = [
  "LIES", "DEATH", "CONTROL", "POISON", "SILENCE", "PROFIT", 
  "DECEIT", "GREED", "FEAR", "COVER-UP", "CORRUPTION", "BETRAYAL",
  "GENOCIDE", "EXPERIMENT", "SURVEILLANCE", "PROPAGANDA", "CENSORSHIP",
  "FLUORIDE", "VACCINE", "TOXINS", "CHEMTRAILS", "AGENDA", "DEPOPULATION",
  "MIND CONTROL", "FALSE FLAG", "BLACKSITE", "MK-ULTRA", "OPERATION",
  "CLASSIFIED", "REDACTED", "TERMINATED", "ELIMINATED", "SUPPRESSED",
  "BIG PHARMA", "DEEP STATE", "SHADOW GOV", "NEW WORLD ORDER",
  "COMPLY", "OBEY", "CONSUME", "SLEEP", "SUBMIT", "CONFORM"
];

interface RandomWordPopupsProps {
  customWords?: string[]; // Additional words (like submitted names)
  frequency?: number; // ms between popups
}

export default function RandomWordPopups({ 
  customWords = [], 
  frequency = 5000 
}: RandomWordPopupsProps) {
  const [words, setWords] = useState<PopupWord[]>([]);
  const wordIdRef = useRef(0);
  const allWords = useMemo(() => [...DEFAULT_WORDS, ...customWords], [customWords]);

  useEffect(() => {
    const createWord = () => {
      const newWord: PopupWord = {
        id: wordIdRef.current++,
        word: allWords[Math.floor(Math.random() * allWords.length)],
        x: 5 + Math.random() * 90, // 5-95% from edges
        y: 10 + Math.random() * 80, // 10-90% from edges
        size: 14 + Math.random() * 10, // 14-24px (larger, more readable)
        duration: 5000 + Math.random() * 3000, // 5-8 seconds visible (stays readable)
        rotation: (Math.random() - 0.5) * 16, // -8 to 8 degrees
      };
      
      setWords(prev => [...prev.slice(-2), newWord]); // Max 2 words at a time

      // Remove after duration
      setTimeout(() => {
        setWords(prev => prev.filter(w => w.id !== newWord.id));
      }, newWord.duration);
    };

    // Create initial word after 3 seconds delay
    const initialTimeout = setTimeout(createWord, 3000);

    // Create words every 5-8 seconds
    const interval = setInterval(() => {
      createWord();
    }, frequency + Math.random() * 3000);

    return () => {
      clearTimeout(initialTimeout);
      clearInterval(interval);
    };
  }, [allWords, frequency]);

  return (
    <div className="fixed inset-0 pointer-events-none z-30 overflow-hidden">
      {words.map((word) => (
        <div
          key={word.id}
          className="absolute animate-word-popup"
          style={{
            left: `${word.x}%`,
            top: `${word.y}%`,
            fontSize: `${word.size}px`,
            transform: `translate(-50%, -50%) rotate(${word.rotation}deg)`,
            animationDuration: `${word.duration}ms`,
          }}
        >
          <span 
            className="font-black tracking-wider text-blood-800/80"
            style={{
              textShadow: '0 0 2px #000, 0 0 4px #000, 2px 2px 0 #000',
              WebkitTextStroke: '0.5px rgba(0,0,0,0.5)',
            }}
          >
            {word.word}
          </span>
        </div>
      ))}

      <style jsx>{`
        @keyframes wordPopup {
          0% {
            opacity: 0;
            transform: translate(-50%, -50%) rotate(var(--rotation)) scale(0.8);
          }
          5% {
            opacity: 1;
            transform: translate(-50%, -50%) rotate(var(--rotation)) scale(1.05);
          }
          10% {
            opacity: 1;
            transform: translate(-50%, -50%) rotate(var(--rotation)) scale(1);
          }
          90% {
            opacity: 1;
            transform: translate(-50%, -50%) rotate(var(--rotation)) scale(1);
          }
          100% {
            opacity: 0;
            transform: translate(-50%, -50%) rotate(var(--rotation)) scale(0.9);
          }
        }
        .animate-word-popup {
          animation: wordPopup var(--duration, 5s) ease-out forwards;
        }
      `}</style>
    </div>
  );
}
