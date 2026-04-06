'use client';

import React from 'react';

interface ArkHiveSealProps {
  size?: number;
  className?: string;
}

/* ================================================================
   PROFESSIONAL GOVERNMENT-STYLE SEAL (SVG for web)
   Features: rope border, serrated edge, laurel wreaths,
   inverted pyramid with all-seeing eye, 13 stars,
   "IN GOD WE TRUST" / "ACCOUNTABILITY" curved text
   ================================================================ */

export default function ArkHiveSeal({ size = 120, className = '' }: ArkHiveSealProps) {
  const c = '#d64545';
  const cDk = '#6b1515';

  // Laurel leaf helper (mirrored pair)
  const laurelLeaves = (side: 'left' | 'right') => {
    const dir = side === 'left' ? -1 : 1;
    const leaves = [];
    for (let i = 0; i < 9; i++) {
      const baseAngle = (side === 'left' ? 190 : 350) + (i * 16 * dir);
      const rad = (baseAngle * Math.PI) / 180;
      const lx = 100 + 64 * Math.cos(rad);
      const ly = 100 + 64 * Math.sin(rad);
      const leafAngle = baseAngle + (side === 'left' ? -35 : 35);
      const leafRad = (leafAngle * Math.PI) / 180;
      const tipX = lx + 8 * Math.cos(leafRad);
      const tipY = ly + 8 * Math.sin(leafRad);
      const cp1x = lx + 5 * Math.cos(leafRad - 0.4 * dir);
      const cp1y = ly + 5 * Math.sin(leafRad - 0.4 * dir);
      const cp2x = lx + 5 * Math.cos(leafRad + 0.4 * dir);
      const cp2y = ly + 5 * Math.sin(leafRad + 0.4 * dir);
      leaves.push(
        <path
          key={`${side}-${i}`}
          d={`M ${lx},${ly} Q ${cp1x},${cp1y} ${tipX},${tipY} Q ${cp2x},${cp2y} ${lx},${ly}`}
          fill={c}
          opacity={0.6 + i * 0.03}
        />
      );
    }
    return leaves;
  };

  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 200 200"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {/* === SERRATED OUTER EDGE === */}
      <path
        d={Array.from({ length: 120 }, (_, i) => {
          const a = (i * Math.PI * 2) / 120;
          const r = i % 2 === 0 ? 98 : 94;
          const x = 100 + r * Math.cos(a);
          const y = 100 + r * Math.sin(a);
          return `${i === 0 ? 'M' : 'L'} ${x.toFixed(2)},${y.toFixed(2)}`;
        }).join(' ') + ' Z'}
        stroke={c}
        strokeWidth="0.8"
        fill="none"
      />

      {/* === ROPE BORDER (double twisted) === */}
      {[0, 1].map(pass => (
        <circle
          key={`rope-${pass}`}
          cx="100" cy="100" r={91 - pass * 2}
          stroke={c}
          strokeWidth={pass === 0 ? 2.5 : 1.5}
          fill="none"
          strokeDasharray={pass === 0 ? '4 2' : '2 3'}
          opacity={pass === 0 ? 0.9 : 0.5}
        />
      ))}

      {/* === OUTER SOLID RING === */}
      <circle cx="100" cy="100" r="87" stroke={c} strokeWidth="1.8" fill="none" />

      {/* === 120 FINE NOTCH MARKS === */}
      {Array.from({ length: 120 }).map((_, i) => {
        const a = (i * Math.PI * 2) / 120;
        const isMajor = i % 10 === 0;
        const isMid = i % 5 === 0;
        const inner = isMajor ? 85.5 : isMid ? 86 : 86.5;
        return (
          <line
            key={`n-${i}`}
            x1={100 + inner * Math.cos(a)} y1={100 + inner * Math.sin(a)}
            x2={100 + 87 * Math.cos(a)} y2={100 + 87 * Math.sin(a)}
            stroke={c}
            strokeWidth={isMajor ? 1.2 : isMid ? 0.6 : 0.3}
            opacity={isMajor ? 0.9 : isMid ? 0.5 : 0.25}
          />
        );
      })}

      {/* === TEXT RING BACKGROUND === */}
      <circle cx="100" cy="100" r="85" stroke={c} strokeWidth="0.3" fill="none" opacity="0.2" />
      <circle cx="100" cy="100" r="73" stroke={c} strokeWidth="0.3" fill="none" opacity="0.2" />

      {/* === CURVED TEXT === */}
      <defs>
        <path id="topArc" d="M 20,100 a 80,80 0 1,1 160,0" />
        <path id="bottomArc" d="M 180,100 a 80,80 0 1,1 -160,0" />
      </defs>
      <text fill={c} fontSize="6.5" fontFamily="Georgia, serif" fontWeight="bold" letterSpacing="3">
        <textPath href="#topArc" startOffset="50%" textAnchor="middle">
          ★ IN GOD WE TRUST ★
        </textPath>
      </text>
      <text fill={c} fontSize="6.5" fontFamily="Georgia, serif" fontWeight="bold" letterSpacing="3">
        <textPath href="#bottomArc" startOffset="50%" textAnchor="middle">
          ★ ACCOUNTABILITY ★
        </textPath>
      </text>

      {/* === 13 STARS IN ARC (above inner content) === */}
      {Array.from({ length: 13 }).map((_, i) => {
        const a = -Math.PI * 0.18 - (i * Math.PI * 0.64) / 12;
        const sr = 66;
        return (
          <text
            key={`star-${i}`}
            x={100 + sr * Math.cos(a)}
            y={100 + sr * Math.sin(a)}
            textAnchor="middle"
            dominantBaseline="central"
            fill={c}
            fontSize="4.5"
            fontFamily="serif"
          >★</text>
        );
      })}

      {/* === INNER DECORATIVE RING (double) === */}
      <circle cx="100" cy="100" r="56" stroke={c} strokeWidth="1.2" fill="none" />
      <circle cx="100" cy="100" r="54" stroke={c} strokeWidth="0.4" fill="none" opacity="0.35" />

      {/* === LAUREL WREATHS (left and right) === */}
      {laurelLeaves('left')}
      {laurelLeaves('right')}

      {/* === INVERTED PYRAMID (pointing DOWN) === */}
      <path
        d="M 75 72 L 125 72 L 100 118 Z"
        stroke={c}
        strokeWidth="1.8"
        fill="none"
        strokeLinejoin="round"
      />
      {/* Pyramid horizontal courses */}
      <line x1="79" y1="79" x2="121" y2="79" stroke={c} strokeWidth="0.6" opacity="0.4" />
      <line x1="83" y1="86" x2="117" y2="86" stroke={c} strokeWidth="0.6" opacity="0.4" />
      <line x1="87" y1="93" x2="113" y2="93" stroke={c} strokeWidth="0.6" opacity="0.4" />
      <line x1="91" y1="100" x2="109" y2="100" stroke={c} strokeWidth="0.6" opacity="0.3" />

      {/* === ALL-SEEING EYE (centered in inverted pyramid) === */}
      <ellipse cx="100" cy="86" rx="10" ry="6.5" stroke={c} strokeWidth="1.3" fill="none" />
      <circle cx="100" cy="86" r="3" fill={c} />
      {/* Iris ring */}
      <circle cx="100" cy="86" r="4.5" stroke={c} strokeWidth="0.5" fill="none" opacity="0.4" />
      {/* Eyelid lines */}
      <path d="M 89,86 Q 94,80 100,79 Q 106,80 111,86" stroke={c} strokeWidth="0.5" fill="none" opacity="0.4" />
      <path d="M 89,86 Q 94,92 100,93 Q 106,92 111,86" stroke={c} strokeWidth="0.5" fill="none" opacity="0.4" />

      {/* === RADIATING RAYS (from eye, downward through pyramid) === */}
      {[-40, -25, -12, 0, 12, 25, 40].map((deg, i) => {
        const rad = ((deg + 90) * Math.PI) / 180;
        return (
          <line
            key={`ray-${i}`}
            x1={100 + 12 * Math.cos(rad)} y1={86 + 8 * Math.sin(rad)}
            x2={100 + 22 * Math.cos(rad)} y2={86 + 18 * Math.sin(rad)}
            stroke={c} strokeWidth="0.8" opacity="0.4"
          />
        );
      })}

      {/* === ARKHIVE TEXT === */}
      <text
        x="100" y="132"
        textAnchor="middle"
        fill={c}
        fontSize="12"
        fontFamily="Georgia, serif"
        fontWeight="900"
        letterSpacing="4.5"
      >ARKHIVE</text>

      {/* Ornamental rules above and below text */}
      <line x1="68" y1="125" x2="132" y2="125" stroke={c} strokeWidth="0.5" opacity="0.35" />
      <line x1="72" y1="137" x2="128" y2="137" stroke={c} strokeWidth="0.5" opacity="0.35" />

      {/* === EST. 2009 === */}
      <text
        x="100" y="146"
        textAnchor="middle"
        fill={c}
        fontSize="5.5"
        fontFamily="Georgia, serif"
        fontWeight="bold"
        letterSpacing="2.5"
        opacity="0.65"
      >EST. 2009</text>

      {/* === CORNER ORNAMENTS (small stars at cardinal points between rings) === */}
      {[0, 90, 180, 270].map((deg) => {
        const rad = (deg * Math.PI) / 180;
        return (
          <text
            key={`card-${deg}`}
            x={100 + 79 * Math.cos(rad)}
            y={100 + 79 * Math.sin(rad)}
            textAnchor="middle"
            dominantBaseline="central"
            fill={c}
            fontSize="5"
            fontFamily="serif"
          >★</text>
        );
      })}

      {/* === SUBTLE INNER BACKGROUND PATTERN (crosshatch at center) === */}
      <circle cx="100" cy="100" r="25" stroke={cDk} strokeWidth="0.3" fill="none" opacity="0.1"
        strokeDasharray="1 2" />
    </svg>
  );
}


/* ================================================================
   PROFESSIONAL GOVERNMENT-STYLE SEAL (Canvas → PNG for PDF)
   800px resolution, rope border, laurel wreaths, serrated edge,
   inverted pyramid, all-seeing eye, 13 stars, ornamental rings
   ================================================================ */

export async function getArkHiveSealPngDataUri(): Promise<string> {
  const size = 800;
  const canvas = document.createElement('canvas');
  canvas.width = size;
  canvas.height = size;
  const maybeCtx = canvas.getContext('2d');
  if (!maybeCtx) return '';
  const ctx = maybeCtx;

  const cx = size / 2;
  const cy = size / 2;
  const color = '#d64545';
  const colorDk = '#8b2020';
  const PI = Math.PI;
  const TAU = PI * 2;

  /* ---- helpers ---- */
  function circle(r: number, lw: number, alpha = 1, dash?: number[]) {
    ctx.save();
    ctx.globalAlpha = alpha;
    ctx.strokeStyle = color;
    ctx.lineWidth = lw;
    if (dash) ctx.setLineDash(dash);
    ctx.beginPath();
    ctx.arc(cx, cy, r, 0, TAU);
    ctx.stroke();
    ctx.restore();
  }

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
      const a = startAngle + i * step;
      ctx.save();
      ctx.translate(cx + radius * Math.cos(a), cy + radius * Math.sin(a));
      ctx.rotate(a + (outward ? PI / 2 : -PI / 2));
      ctx.fillText(ch, 0, 0);
      ctx.restore();
    });
    ctx.restore();
  }

  function star5(x: number, y: number, outerR: number, innerR: number, alpha = 1) {
    ctx.save();
    ctx.globalAlpha = alpha;
    ctx.fillStyle = color;
    ctx.beginPath();
    for (let i = 0; i < 10; i++) {
      const a = -PI / 2 + (i * PI) / 5;
      const r = i % 2 === 0 ? outerR : innerR;
      const px = x + r * Math.cos(a);
      const py = y + r * Math.sin(a);
      if (i === 0) ctx.moveTo(px, py); else ctx.lineTo(px, py);
    }
    ctx.closePath();
    ctx.fill();
    ctx.restore();
  }

  function laurelBranch(side: 'left' | 'right') {
    const dir = side === 'left' ? -1 : 1;
    // Branch stem (curved line)
    ctx.save();
    ctx.strokeStyle = color;
    ctx.lineWidth = 1.5;
    ctx.globalAlpha = 0.4;
    ctx.beginPath();
    const stemStartA = side === 'left' ? PI * 0.58 : -PI * 0.58 + TAU;
    const stemEndA = side === 'left' ? PI * 1.42 : PI * 1.42;
    for (let t = 0; t <= 1; t += 0.02) {
      const a = stemStartA + t * (stemEndA - stemStartA) * dir;
      const r = 230;
      const px = cx + r * Math.cos(a);
      const py = cy + r * Math.sin(a);
      if (t === 0) ctx.moveTo(px, py); else ctx.lineTo(px, py);
    }
    ctx.stroke();
    ctx.restore();

    // Leaves
    for (let i = 0; i < 14; i++) {
      const baseA = (side === 'left' ? PI * 0.6 : TAU - PI * 0.6) + (i * PI * 0.055 * dir);
      const branchR = 230;
      const bx = cx + branchR * Math.cos(baseA);
      const by = cy + branchR * Math.sin(baseA);
      const leafA = baseA + (side === 'left' ? -0.5 : 0.5);
      const leafLen = 18 + (7 - Math.abs(i - 7)) * 1.5;
      const tipX = bx + leafLen * Math.cos(leafA);
      const tipY = by + leafLen * Math.sin(leafA);

      ctx.save();
      ctx.globalAlpha = 0.5 + i * 0.02;
      ctx.fillStyle = color;
      ctx.beginPath();
      const cp1a = leafA - 0.25 * dir;
      const cp2a = leafA + 0.25 * dir;
      const cpDist = leafLen * 0.6;
      ctx.moveTo(bx, by);
      ctx.quadraticCurveTo(bx + cpDist * Math.cos(cp1a), by + cpDist * Math.sin(cp1a), tipX, tipY);
      ctx.quadraticCurveTo(bx + cpDist * Math.cos(cp2a), by + cpDist * Math.sin(cp2a), bx, by);
      ctx.fill();
      ctx.restore();

      // Leaf vein
      ctx.save();
      ctx.strokeStyle = colorDk;
      ctx.lineWidth = 0.5;
      ctx.globalAlpha = 0.3;
      ctx.beginPath();
      ctx.moveTo(bx, by);
      ctx.lineTo(tipX, tipY);
      ctx.stroke();
      ctx.restore();
    }
  }

  ctx.clearRect(0, 0, size, size);

  // ==== 1. SERRATED OUTER EDGE ====
  ctx.save();
  ctx.strokeStyle = color;
  ctx.lineWidth = 1.5;
  ctx.globalAlpha = 0.8;
  ctx.beginPath();
  const teethCount = 160;
  for (let i = 0; i < teethCount; i++) {
    const a = (i * TAU) / teethCount;
    const r = i % 2 === 0 ? 392 : 385;
    const px = cx + r * Math.cos(a);
    const py = cy + r * Math.sin(a);
    if (i === 0) ctx.moveTo(px, py); else ctx.lineTo(px, py);
  }
  ctx.closePath();
  ctx.stroke();
  ctx.restore();

  // ==== 2. ROPE BORDER (two twisted strands) ====
  circle(378, 3.5, 0.85, [6, 3]);
  circle(375, 2, 0.45, [3, 4]);

  // ==== 3. OUTER SOLID RING ====
  circle(368, 3, 1);

  // ==== 4. FINE NOTCH MARKS (160 between outer ring and text band) ====
  for (let i = 0; i < 160; i++) {
    const a = (i * TAU) / 160;
    const isMajor = i % 10 === 0;
    const isMid = i % 5 === 0;
    const inner = isMajor ? 352 : isMid ? 356 : 360;
    ctx.save();
    ctx.strokeStyle = color;
    ctx.lineWidth = isMajor ? 2 : isMid ? 1 : 0.5;
    ctx.globalAlpha = isMajor ? 0.9 : isMid ? 0.5 : 0.2;
    ctx.beginPath();
    ctx.moveTo(cx + inner * Math.cos(a), cy + inner * Math.sin(a));
    ctx.lineTo(cx + 368 * Math.cos(a), cy + 368 * Math.sin(a));
    ctx.stroke();
    ctx.restore();
  }

  // ==== 5. TEXT BAND BORDERS ====
  circle(350, 1.5, 0.7);
  circle(300, 1.5, 0.7);

  // Subtle fill for text band
  ctx.save();
  ctx.globalAlpha = 0.03;
  ctx.fillStyle = color;
  ctx.beginPath();
  ctx.arc(cx, cy, 350, 0, TAU);
  ctx.arc(cx, cy, 300, 0, TAU, true);
  ctx.fill();
  ctx.restore();

  // ==== 6. CURVED TEXT ====
  arcText(
    '\u2605  I N   G O D   W E   T R U S T  \u2605',
    322, -PI * 0.73, -PI * 0.27, true, 22,
  );
  arcText(
    '\u2605  A C C O U N T A B I L I T Y  \u2605',
    322, PI * 0.73, PI * 0.27, false, 22,
  );

  // ==== 7. SIDE STARS (3 and 9 o'clock, between text arcs) ====
  star5(cx + 322, cy, 12, 5);
  star5(cx - 322, cy, 12, 5);

  // ==== 8. 13 STARS IN ARC (above inner content, like Great Seal) ====
  for (let i = 0; i < 13; i++) {
    const a = -PI * 0.15 - (i * PI * 0.7) / 12;
    const sr = 265;
    star5(cx + sr * Math.cos(a), cy + sr * Math.sin(a), 7, 3, 0.7);
  }

  // ==== 9. INNER DECORATIVE DOUBLE RING ====
  circle(250, 2.5, 0.9);
  circle(245, 1, 0.35);

  // ==== 10. LAUREL WREATHS ====
  laurelBranch('left');
  laurelBranch('right');

  // ==== 11. INNER FIELD RING ====
  circle(200, 1.5, 0.5);

  // ==== 12. INVERTED PYRAMID (pointing DOWN) ====
  const pyrTop = cy - 70;
  const pyrBot = cy + 60;
  const pyrHalfW = 80;
  // Pyramid body
  ctx.save();
  ctx.strokeStyle = color;
  ctx.lineWidth = 3.5;
  ctx.lineJoin = 'round';
  ctx.beginPath();
  ctx.moveTo(cx - pyrHalfW, pyrTop);
  ctx.lineTo(cx + pyrHalfW, pyrTop);
  ctx.lineTo(cx, pyrBot);
  ctx.closePath();
  ctx.stroke();
  ctx.restore();

  // Pyramid course lines (horizontal)
  const courseCount = 6;
  for (let i = 1; i <= courseCount; i++) {
    const t = i / (courseCount + 1);
    const y = pyrTop + t * (pyrBot - pyrTop);
    const halfW = pyrHalfW * (1 - t);
    ctx.save();
    ctx.strokeStyle = color;
    ctx.lineWidth = 0.8;
    ctx.globalAlpha = 0.35 - i * 0.03;
    ctx.beginPath();
    ctx.moveTo(cx - halfW, y);
    ctx.lineTo(cx + halfW, y);
    ctx.stroke();
    ctx.restore();
  }

  // Pyramid subtle gradient fill
  ctx.save();
  ctx.globalAlpha = 0.04;
  ctx.fillStyle = color;
  ctx.beginPath();
  ctx.moveTo(cx - pyrHalfW, pyrTop);
  ctx.lineTo(cx + pyrHalfW, pyrTop);
  ctx.lineTo(cx, pyrBot);
  ctx.closePath();
  ctx.fill();
  ctx.restore();

  // ==== 13. ALL-SEEING EYE (upper portion of inverted pyramid) ====
  const eyeY = cy - 30;
  // Outer eye shape
  ctx.save();
  ctx.strokeStyle = color;
  ctx.lineWidth = 2.5;
  ctx.beginPath();
  ctx.ellipse(cx, eyeY, 28, 18, 0, 0, TAU);
  ctx.stroke();
  ctx.restore();

  // Iris ring
  ctx.save();
  ctx.strokeStyle = color;
  ctx.lineWidth = 1;
  ctx.globalAlpha = 0.5;
  ctx.beginPath();
  ctx.arc(cx, eyeY, 11, 0, TAU);
  ctx.stroke();
  ctx.restore();

  // Pupil (filled)
  ctx.save();
  ctx.fillStyle = color;
  ctx.beginPath();
  ctx.arc(cx, eyeY, 7, 0, TAU);
  ctx.fill();
  ctx.restore();

  // Light reflection in pupil
  ctx.save();
  ctx.fillStyle = '#000';
  ctx.globalAlpha = 0.4;
  ctx.beginPath();
  ctx.arc(cx - 2, eyeY - 2, 2, 0, TAU);
  ctx.fill();
  ctx.restore();

  // Eyelid curves
  ctx.save();
  ctx.strokeStyle = color;
  ctx.lineWidth = 1;
  ctx.globalAlpha = 0.4;
  // Upper lid
  ctx.beginPath();
  ctx.moveTo(cx - 30, eyeY);
  ctx.quadraticCurveTo(cx, eyeY - 24, cx + 30, eyeY);
  ctx.stroke();
  // Lower lid
  ctx.beginPath();
  ctx.moveTo(cx - 30, eyeY);
  ctx.quadraticCurveTo(cx, eyeY + 24, cx + 30, eyeY);
  ctx.stroke();
  ctx.restore();

  // Radiating rays from eye (downward, through pyramid body)
  for (let i = -5; i <= 5; i++) {
    const a = PI / 2 + (i * PI) / 20;
    ctx.save();
    ctx.strokeStyle = color;
    ctx.lineWidth = 1.2;
    ctx.globalAlpha = 0.25 - Math.abs(i) * 0.02;
    ctx.beginPath();
    ctx.moveTo(cx + 22 * Math.cos(a), eyeY + 22 * Math.sin(a));
    ctx.lineTo(cx + 55 * Math.cos(a), eyeY + 55 * Math.sin(a));
    ctx.stroke();
    ctx.restore();
  }

  // ==== 14. ARKHIVE TEXT ====
  ctx.save();
  ctx.fillStyle = color;
  ctx.font = '900 36px Georgia, serif';
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';
  const arkText = 'ARKHIVE';
  const arkY = cy + 100;
  const arkSpacing = 30;
  const arkStartX = cx - ((arkText.length - 1) * arkSpacing) / 2;
  arkText.split('').forEach((ch, i) => {
    ctx.fillText(ch, arkStartX + i * arkSpacing, arkY);
  });
  ctx.restore();

  // Ornamental rules
  ctx.save();
  ctx.strokeStyle = color;
  ctx.lineWidth = 1;
  ctx.globalAlpha = 0.4;
  ctx.beginPath();
  ctx.moveTo(cx - 80, arkY - 16);
  ctx.lineTo(cx + 80, arkY - 16);
  ctx.stroke();
  ctx.beginPath();
  ctx.moveTo(cx - 70, arkY + 16);
  ctx.lineTo(cx + 70, arkY + 16);
  ctx.stroke();
  ctx.restore();

  // Small diamond ornaments at rule ends
  for (const xOff of [-80, 80]) {
    ctx.save();
    ctx.fillStyle = color;
    ctx.globalAlpha = 0.5;
    ctx.beginPath();
    const dx = cx + xOff;
    const dy = arkY - 16;
    ctx.moveTo(dx, dy - 2.5);
    ctx.lineTo(dx + 2.5, dy);
    ctx.lineTo(dx, dy + 2.5);
    ctx.lineTo(dx - 2.5, dy);
    ctx.closePath();
    ctx.fill();
    ctx.restore();
  }

  // ==== 15. EST. 2009 ====
  ctx.save();
  ctx.fillStyle = color;
  ctx.font = 'bold 16px Georgia, serif';
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';
  ctx.globalAlpha = 0.65;
  ctx.fillText('EST. 2009', cx, arkY + 33);
  ctx.restore();

  // ==== 16. CARDINAL POINT STARS (N,S,E,W between inner rings) ====
  for (const deg of [0, 90, 180, 270]) {
    const a = (deg * PI) / 180;
    star5(cx + 275 * Math.cos(a), cy + 275 * Math.sin(a), 5, 2.2, 0.4);
  }

  // ==== 17. MICROTEXT RING (tiny dots simulating microprinting) ====
  ctx.save();
  ctx.fillStyle = color;
  ctx.globalAlpha = 0.12;
  for (let i = 0; i < 360; i++) {
    const a = (i * TAU) / 360;
    ctx.beginPath();
    ctx.arc(cx + 290 * Math.cos(a), cy + 290 * Math.sin(a), 0.8, 0, TAU);
    ctx.fill();
  }
  ctx.restore();

  return canvas.toDataURL('image/png');
}
