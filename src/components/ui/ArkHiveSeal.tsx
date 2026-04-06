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
      <circle cx="100" cy="100" r="96" stroke="#d64545" strokeWidth="2.5" fill="none" />
      <circle cx="100" cy="100" r="88" stroke="#d64545" strokeWidth="1.5" fill="none" />

      {/* Notch marks between rings */}
      {Array.from({ length: 72 }).map((_, i) => {
        const angle = (i * 5 * Math.PI) / 180;
        const x1 = 100 + 88 * Math.cos(angle);
        const y1 = 100 + 88 * Math.sin(angle);
        const x2 = 100 + 96 * Math.cos(angle);
        const y2 = 100 + 96 * Math.sin(angle);
        return (
          <line
            key={i}
            x1={x1} y1={y1} x2={x2} y2={y2}
            stroke="#d64545"
            strokeWidth={i % 6 === 0 ? 1.5 : 0.5}
            opacity={i % 6 === 0 ? 0.9 : 0.3}
          />
        );
      })}

      {/* Text ring */}
      <defs>
        <path id="topArc" d="M 22,100 a 78,78 0 1,1 156,0" />
        <path id="bottomArc" d="M 178,100 a 78,78 0 1,1 -156,0" />
      </defs>
      <text fill="#d64545" fontSize="7" fontFamily="serif" fontWeight="bold" letterSpacing="2.5">
        <textPath href="#topArc" startOffset="50%" textAnchor="middle">
          ★ IN GOD WE TRUST ★
        </textPath>
      </text>
      <text fill="#d64545" fontSize="7" fontFamily="serif" fontWeight="bold" letterSpacing="2.5">
        <textPath href="#bottomArc" startOffset="50%" textAnchor="middle">
          ★ ACCOUNTABILITY ★
        </textPath>
      </text>

      {/* Inner ring */}
      <circle cx="100" cy="100" r="58" stroke="#d64545" strokeWidth="1.5" fill="none" />
      <circle cx="100" cy="100" r="55" stroke="#d64545" strokeWidth="0.5" fill="none" opacity="0.4" />

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
        fontFamily="serif"
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
        fontFamily="serif"
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
 * Generate ArkHive government-style seal as a PNG data URI.
 * Draws directly to Canvas for 100% reliable rendering in @react-pdf/renderer.
 * Includes: "IN GOD WE TRUST", "ACCOUNTABILITY", pyramid/eye, "ARKHIVE"
 */
export async function getArkHiveSealPngDataUri(): Promise<string> {
  const size = 600;
  const canvas = document.createElement('canvas');
  canvas.width = size;
  canvas.height = size;
  const maybeCtx = canvas.getContext('2d');
  if (!maybeCtx) return '';
  const ctx = maybeCtx;

  const cx = size / 2;
  const cy = size / 2;
  const color = '#d64545';

  function arcText(
    text: string, radius: number,
    startAngle: number, endAngle: number,
    outward: boolean, fontSize: number,
  ) {
    const chars = text.split('');
    const n = chars.length;
    if (n === 0) return;
    const step = n > 1 ? (endAngle - startAngle) / (n - 1) : 0;

    ctx.save();
    ctx.fillStyle = color;
    ctx.font = `bold ${fontSize}px Georgia, serif`;
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';

    chars.forEach((ch, i) => {
      const angle = startAngle + i * step;
      ctx.save();
      ctx.translate(cx + radius * Math.cos(angle), cy + radius * Math.sin(angle));
      ctx.rotate(angle + (outward ? Math.PI / 2 : -Math.PI / 2));
      ctx.fillText(ch, 0, 0);
      ctx.restore();
    });
    ctx.restore();
  }

  ctx.clearRect(0, 0, size, size);

  // ---- OUTER RINGS ----
  ctx.strokeStyle = color;
  ctx.lineWidth = 4;
  ctx.beginPath();
  ctx.arc(cx, cy, 290, 0, Math.PI * 2);
  ctx.stroke();

  ctx.lineWidth = 2.5;
  ctx.beginPath();
  ctx.arc(cx, cy, 270, 0, Math.PI * 2);
  ctx.stroke();

  // ---- NOTCH MARKS BETWEEN RINGS ----
  for (let i = 0; i < 72; i++) {
    const angle = (i * Math.PI * 2) / 72;
    ctx.lineWidth = i % 6 === 0 ? 2.5 : 1;
    ctx.globalAlpha = i % 6 === 0 ? 0.9 : 0.35;
    ctx.beginPath();
    ctx.moveTo(cx + 270 * Math.cos(angle), cy + 270 * Math.sin(angle));
    ctx.lineTo(cx + 290 * Math.cos(angle), cy + 290 * Math.sin(angle));
    ctx.stroke();
  }
  ctx.globalAlpha = 1;

  // ---- TEXT GUIDE RING ----
  ctx.lineWidth = 0.5;
  ctx.globalAlpha = 0.2;
  ctx.beginPath();
  ctx.arc(cx, cy, 250, 0, Math.PI * 2);
  ctx.stroke();
  ctx.globalAlpha = 1;

  // ---- TOP TEXT: IN GOD WE TRUST ----
  arcText(
    '\u2605  I N  G O D  W E  T R U S T  \u2605',
    240, -Math.PI * 0.72, -Math.PI * 0.28, true, 18,
  );

  // ---- BOTTOM TEXT: ACCOUNTABILITY ----
  arcText(
    '\u2605  A C C O U N T A B I L I T Y  \u2605',
    240, Math.PI * 0.72, Math.PI * 0.28, false, 18,
  );

  // ---- SIDE STARS at 3 and 9 o'clock ----
  ctx.fillStyle = color;
  ctx.font = 'bold 20px Georgia, serif';
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';
  ctx.fillText('\u2605', cx + 240, cy);
  ctx.fillText('\u2605', cx - 240, cy);

  // ---- INNER RING ----
  ctx.strokeStyle = color;
  ctx.lineWidth = 2.5;
  ctx.beginPath();
  ctx.arc(cx, cy, 175, 0, Math.PI * 2);
  ctx.stroke();

  ctx.lineWidth = 1;
  ctx.globalAlpha = 0.4;
  ctx.beginPath();
  ctx.arc(cx, cy, 170, 0, Math.PI * 2);
  ctx.stroke();
  ctx.globalAlpha = 1;

  // ---- FOUR STARS inside inner ring at diagonals ----
  ctx.fillStyle = color;
  ctx.font = 'bold 14px Georgia, serif';
  const starR = 155;
  for (const a of [-Math.PI / 4, Math.PI / 4, Math.PI * 3 / 4, -Math.PI * 3 / 4]) {
    ctx.fillText('\u2605', cx + starR * Math.cos(a), cy + starR * Math.sin(a));
  }

  // ---- PYRAMID ----
  ctx.strokeStyle = color;
  ctx.lineWidth = 3;
  ctx.beginPath();
  ctx.moveTo(cx, cy - 85);
  ctx.lineTo(cx + 60, cy + 35);
  ctx.lineTo(cx - 60, cy + 35);
  ctx.closePath();
  ctx.stroke();

  // ---- EYE ----
  ctx.lineWidth = 2.5;
  ctx.beginPath();
  ctx.ellipse(cx, cy - 25, 22, 14, 0, 0, Math.PI * 2);
  ctx.stroke();

  ctx.fillStyle = color;
  ctx.beginPath();
  ctx.arc(cx, cy - 25, 7, 0, Math.PI * 2);
  ctx.fill();

  // ---- RAYS FROM EYE ----
  for (let i = -3; i <= 3; i++) {
    const angle = -Math.PI / 2 + (i * Math.PI) / 14;
    ctx.strokeStyle = color;
    ctx.lineWidth = 1.5;
    ctx.globalAlpha = 0.5;
    ctx.beginPath();
    ctx.moveTo(cx + 26 * Math.cos(angle), cy - 25 + 26 * Math.sin(angle));
    ctx.lineTo(cx + 40 * Math.cos(angle), cy - 25 + 40 * Math.sin(angle));
    ctx.stroke();
  }
  ctx.globalAlpha = 1;

  // ---- ARKHIVE TEXT ----
  ctx.fillStyle = color;
  ctx.font = '900 28px Georgia, serif';
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';
  // Manual letter spacing by drawing each character
  const arkText = 'ARKHIVE';
  const arkY = cy + 70;
  const arkSpacing = 22;
  const arkStartX = cx - ((arkText.length - 1) * arkSpacing) / 2;
  arkText.split('').forEach((ch, i) => {
    ctx.fillText(ch, arkStartX + i * arkSpacing, arkY);
  });

  // ---- DECORATIVE LINE ----
  ctx.strokeStyle = color;
  ctx.lineWidth = 1;
  ctx.globalAlpha = 0.5;
  ctx.beginPath();
  ctx.moveTo(cx - 55, cy + 88);
  ctx.lineTo(cx + 55, cy + 88);
  ctx.stroke();
  ctx.globalAlpha = 1;

  // ---- EST. 2025 ----
  ctx.fillStyle = color;
  ctx.font = 'bold 13px Georgia, serif';
  ctx.globalAlpha = 0.7;
  ctx.fillText('EST. 2025', cx, cy + 105);
  ctx.globalAlpha = 1;

  return canvas.toDataURL('image/png');
}
