'use client';

import React from 'react';

interface ArkHiveSealProps {
  size?: number;
  className?: string;
}

export default function ArkHiveSeal({ size = 120, className = '' }: ArkHiveSealProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 200 200"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {/* Outer ring */}
      <circle cx="100" cy="100" r="96" stroke="#d64545" strokeWidth="2" fill="none" />
      <circle cx="100" cy="100" r="90" stroke="#d64545" strokeWidth="1" fill="none" opacity="0.5" />

      {/* Serif notches around outer ring */}
      {Array.from({ length: 36 }).map((_, i) => {
        const angle = (i * 10 * Math.PI) / 180;
        const x1 = 100 + 90 * Math.cos(angle);
        const y1 = 100 + 90 * Math.sin(angle);
        const x2 = 100 + 96 * Math.cos(angle);
        const y2 = 100 + 96 * Math.sin(angle);
        return (
          <line
            key={i}
            x1={x1} y1={y1} x2={x2} y2={y2}
            stroke="#d64545"
            strokeWidth={i % 3 === 0 ? 1.5 : 0.5}
            opacity={i % 3 === 0 ? 0.8 : 0.3}
          />
        );
      })}

      {/* Text ring - ACCOUNTABILITY • TRANSPARENCY • TRUTH */}
      <defs>
        <path id="topArc" d="M 30,100 a 70,70 0 1,1 140,0" />
        <path id="bottomArc" d="M 170,100 a 70,70 0 1,1 -140,0" />
      </defs>
      <text fill="#d64545" fontSize="7.5" fontFamily="monospace" fontWeight="bold" letterSpacing="3">
        <textPath href="#topArc" startOffset="50%" textAnchor="middle">
          ACCOUNTABILITY • TRANSPARENCY
        </textPath>
      </text>
      <text fill="#d64545" fontSize="7.5" fontFamily="monospace" fontWeight="bold" letterSpacing="3">
        <textPath href="#bottomArc" startOffset="50%" textAnchor="middle">
          TRUTH • JUSTICE • ACTION
        </textPath>
      </text>

      {/* Inner ring */}
      <circle cx="100" cy="100" r="58" stroke="#d64545" strokeWidth="1.5" fill="none" />

      {/* Pyramid / Eye of truth */}
      <path
        d="M 100 52 L 130 108 L 70 108 Z"
        stroke="#d64545"
        strokeWidth="2"
        fill="none"
      />
      {/* Inner eye */}
      <ellipse cx="100" cy="88" rx="12" ry="8" stroke="#d64545" strokeWidth="1.5" fill="none" />
      <circle cx="100" cy="88" r="3.5" fill="#d64545" />

      {/* Radiating lines from eye */}
      {[-30, -15, 0, 15, 30].map((angle, i) => {
        const rad = ((angle - 90) * Math.PI) / 180;
        const x1 = 100 + 14 * Math.cos(rad);
        const y1 = 88 + 10 * Math.sin(rad);
        const x2 = 100 + 22 * Math.cos(rad);
        const y2 = 88 + 16 * Math.sin(rad);
        return (
          <line key={i} x1={x1} y1={y1} x2={x2} y2={y2} stroke="#d64545" strokeWidth="1" opacity="0.6" />
        );
      })}

      {/* ARKHIVE text centered below pyramid */}
      <text
        x="100" y="126"
        textAnchor="middle"
        fill="#d64545"
        fontSize="14"
        fontFamily="monospace"
        fontWeight="900"
        letterSpacing="4"
      >
        ARKHIVE
      </text>

      {/* Thin line under text */}
      <line x1="72" y1="131" x2="128" y2="131" stroke="#d64545" strokeWidth="0.8" opacity="0.5" />

      {/* EST. text */}
      <text
        x="100" y="142"
        textAnchor="middle"
        fill="#d64545"
        fontSize="6"
        fontFamily="monospace"
        fontWeight="bold"
        letterSpacing="2"
        opacity="0.7"
      >
        EST. 2025
      </text>
    </svg>
  );
}

/**
 * ArkHive seal for use in @react-pdf/renderer PDFs.
 * Returns an SVG string that can be used as a data URI in an Image component.
 */
export function getArkHiveSealDataUri(): string {
  const svg = `<svg width="200" height="200" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="100" cy="100" r="96" stroke="#d64545" stroke-width="2" fill="none"/>
    <circle cx="100" cy="100" r="90" stroke="#d64545" stroke-width="1" fill="none" opacity="0.5"/>
    ${Array.from({ length: 36 }).map((_, i) => {
      const angle = (i * 10 * Math.PI) / 180;
      const x1 = 100 + 90 * Math.cos(angle);
      const y1 = 100 + 90 * Math.sin(angle);
      const x2 = 100 + 96 * Math.cos(angle);
      const y2 = 100 + 96 * Math.sin(angle);
      return `<line x1="${x1}" y1="${y1}" x2="${x2}" y2="${y2}" stroke="#d64545" stroke-width="${i % 3 === 0 ? 1.5 : 0.5}" opacity="${i % 3 === 0 ? 0.8 : 0.3}"/>`;
    }).join('')}
    <circle cx="100" cy="100" r="58" stroke="#d64545" stroke-width="1.5" fill="none"/>
    <path d="M 100 52 L 130 108 L 70 108 Z" stroke="#d64545" stroke-width="2" fill="none"/>
    <ellipse cx="100" cy="88" rx="12" ry="8" stroke="#d64545" stroke-width="1.5" fill="none"/>
    <circle cx="100" cy="88" r="3.5" fill="#d64545"/>
    <text x="100" y="126" text-anchor="middle" fill="#d64545" font-size="14" font-family="monospace" font-weight="900" letter-spacing="4">ARKHIVE</text>
    <text x="100" y="142" text-anchor="middle" fill="#d64545" font-size="6" font-family="monospace" font-weight="bold" letter-spacing="2" opacity="0.7">EST. 2025</text>
  </svg>`;
  return `data:image/svg+xml;base64,${typeof btoa !== 'undefined' ? btoa(svg) : Buffer.from(svg).toString('base64')}`;
}
