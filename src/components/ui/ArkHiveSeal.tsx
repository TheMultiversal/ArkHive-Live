'use client';

import React from 'react';

interface ArkHiveSealProps {
  size?: number;
  className?: string;
}

/* ================================================================
   MASTERWORK GOVERNMENT-STYLE SEAL (SVG for web)
   Pure black (#000000) on transparent. No grays.

   30-layer architecture:
   1–3.  Quad serrated outer edge (4 concentric scallop rings)
   4.    Beaded border ring (120 filled dots)
   5–8.  Guilloché band (5 interlocking wave passes)
   9–11. Triple rope border
   12.   Heavy outer solid ring
   13.   360 fine radial notch marks, 5-tier hierarchy
   14–15. Text ring borders + band fill
   16–17. Curved text: "IN GOD WE TRUST" / "ACCOUNTABILITY"
   18.   8 cardinal/intercardinal ornaments (proper star polygons)
   19.   13-star constellation arc
   20–21. Triple inner ring with beaded fill
   22.   Laurel wreaths (22 leaves per side + berries + veins + stem)
   23.   Inner field ring
   24.   Inverted pyramid, 12 courses, hatched fill
   25.   All-seeing eye: iris striations, double eyelid, 9 lash lines
   26.   15 radiating glory rays
   27.   "ARKHIVE" wordmark + ornamental rules + diamond terminals
   28.   "EST. 2009" with decorative flanking elements
   29.   Motto ribbon: "TRUTH · ACCOUNTABILITY · TRANSPARENCY"
   30.   600-dot microprint simulation ring
   ================================================================ */

export default function ArkHiveSeal({ size = 120, className = '' }: ArkHiveSealProps) {
  const B = '#000000';
  const W = '#ffffff';

  const PI = Math.PI;
  const TAU = PI * 2;

  /* ---- 5-pointed star polygon path ---- */
  const starPath = (cx: number, cy: number, oR: number, iR: number) => {
    const pts: string[] = [];
    for (let i = 0; i < 10; i++) {
      const a = -PI / 2 + (i * PI) / 5;
      const r = i % 2 === 0 ? oR : iR;
      pts.push(`${i === 0 ? 'M' : 'L'} ${(cx + r * Math.cos(a)).toFixed(2)},${(cy + r * Math.sin(a)).toFixed(2)}`);
    }
    return pts.join(' ') + ' Z';
  };

  const laurelLeaves = (side: 'left' | 'right') => {
    const dir = side === 'left' ? -1 : 1;
    const elements: React.ReactElement[] = [];

    // Stem arc
    const stemPts: string[] = [];
    for (let t = 0; t <= 1; t += 0.015) {
      const startA = side === 'left' ? PI * 0.58 : TAU - PI * 0.58;
      const a = startA + t * PI * 0.84 * dir;
      const px = 100 + 58 * Math.cos(a);
      const py = 100 + 58 * Math.sin(a);
      stemPts.push(`${t === 0 ? 'M' : 'L'} ${px.toFixed(2)},${py.toFixed(2)}`);
    }
    elements.push(
      <path key={`stem-${side}`} d={stemPts.join(' ')} stroke={B} strokeWidth="0.5" fill="none" opacity="0.5" />
    );

    // 22 leaves with veins
    for (let i = 0; i < 22; i++) {
      const baseAngle = (side === 'left' ? 195 : 345) + (i * 8 * dir);
      const rad = (baseAngle * PI) / 180;
      const brR = 58;
      const lx = 100 + brR * Math.cos(rad);
      const ly = 100 + brR * Math.sin(rad);
      const leafAngle = baseAngle + (side === 'left' ? -28 : 28);
      const leafRad = (leafAngle * PI) / 180;
      const leafLen = 7 + (11 - Math.abs(i - 11)) * 0.45;
      const tipX = lx + leafLen * Math.cos(leafRad);
      const tipY = ly + leafLen * Math.sin(leafRad);
      const cpDist = leafLen * 0.6;
      const cp1x = lx + cpDist * Math.cos(leafRad - 0.3 * dir);
      const cp1y = ly + cpDist * Math.sin(leafRad - 0.3 * dir);
      const cp2x = lx + cpDist * Math.cos(leafRad + 0.3 * dir);
      const cp2y = ly + cpDist * Math.sin(leafRad + 0.3 * dir);

      // Leaf body
      elements.push(
        <path
          key={`leaf-${side}-${i}`}
          d={`M ${lx.toFixed(2)},${ly.toFixed(2)} Q ${cp1x.toFixed(2)},${cp1y.toFixed(2)} ${tipX.toFixed(2)},${tipY.toFixed(2)} Q ${cp2x.toFixed(2)},${cp2y.toFixed(2)} ${lx.toFixed(2)},${ly.toFixed(2)}`}
          fill={B}
          opacity={0.5 + i * 0.015}
        />
      );

      // Central vein
      elements.push(
        <line key={`vein-${side}-${i}`}
          x1={lx} y1={ly} x2={tipX} y2={tipY}
          stroke={B} strokeWidth="0.12" opacity="0.3" />
      );

      // Side veins (2 per leaf, on larger leaves)
      if (leafLen > 7.5) {
        for (const vDir of [-0.4, 0.4]) {
          const vRad = leafRad + vDir * dir;
          const vLen = leafLen * 0.35;
          const midX = lx + (tipX - lx) * 0.45;
          const midY = ly + (tipY - ly) * 0.45;
          elements.push(
            <line key={`svein-${side}-${i}-${vDir}`}
              x1={midX} y1={midY}
              x2={midX + vLen * Math.cos(vRad)} y2={midY + vLen * Math.sin(vRad)}
              stroke={B} strokeWidth="0.08" opacity="0.2" />
          );
        }
      }

      // Berry every 3rd leaf
      if (i % 3 === 1) {
        const bx = lx + 1.8 * Math.cos(rad + 0.15 * dir);
        const by = ly + 1.8 * Math.sin(rad + 0.15 * dir);
        elements.push(
          <circle key={`berry-${side}-${i}`} cx={bx} cy={by} r="0.9" fill={B} opacity="0.6" />
        );
      }
    }
    return elements;
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
      {/* === 1–3. QUAD SERRATED OUTER EDGE === */}
      {[
        { teeth: 200, rOut: 99, rIn: 95, sw: 0.8, op: 0.85 },
        { teeth: 120, rOut: 98.2, rIn: 96.2, sw: 0.4, op: 0.5 },
        { teeth: 300, rOut: 97, rIn: 95.8, sw: 0.15, op: 0.25 },
      ].map((ring, ri) => (
        <path
          key={`serr-${ri}`}
          d={Array.from({ length: ring.teeth }, (_, i) => {
            const a = (i * TAU) / ring.teeth;
            const r = i % 2 === 0 ? ring.rOut : ring.rIn;
            return `${i === 0 ? 'M' : 'L'} ${(100 + r * Math.cos(a)).toFixed(2)},${(100 + r * Math.sin(a)).toFixed(2)}`;
          }).join(' ') + ' Z'}
          stroke={B} strokeWidth={ring.sw} fill="none" opacity={ring.op}
        />
      ))}

      {/* === 4. BEADED BORDER RING (120 dots) === */}
      {Array.from({ length: 120 }).map((_, i) => {
        const a = (i * TAU) / 120;
        return <circle key={`bead-${i}`} cx={100 + 93.5 * Math.cos(a)} cy={100 + 93.5 * Math.sin(a)} r="0.35" fill={B} opacity="0.6" />;
      })}

      {/* === 5–8. GUILLOCHÉ BAND (5 interlocking wave passes) === */}
      {[0, 1, 2, 3, 4].map(pass => {
        const r = 91.5 - pass * 0.9;
        const freq = 14 + pass * 4;
        const amp = 0.5 - pass * 0.06;
        const pts = Array.from({ length: 721 }, (_, i) => {
          const a = (i * TAU) / 720;
          const wave = Math.sin(i * freq * (TAU / 720)) * amp;
          const rr = r + wave;
          return `${i === 0 ? 'M' : 'L'} ${(100 + rr * Math.cos(a)).toFixed(2)},${(100 + rr * Math.sin(a)).toFixed(2)}`;
        }).join(' ');
        return <path key={`guil-${pass}`} d={pts} stroke={B} strokeWidth="0.15" fill="none" opacity={0.2 + pass * 0.05} />;
      })}

      {/* === 9–11. TRIPLE ROPE BORDER === */}
      {[
        { r: 87.5, sw: 2.5, dash: '3 1.5', op: 1 },
        { r: 85.8, sw: 1.2, dash: '2 2', op: 0.55 },
        { r: 84.5, sw: 0.5, dash: '1.2 2.5', op: 0.3 },
      ].map((rope, i) => (
        <circle key={`rope-${i}`} cx="100" cy="100" r={rope.r}
          stroke={B} strokeWidth={rope.sw} fill="none"
          strokeDasharray={rope.dash} opacity={rope.op} />
      ))}

      {/* === 12. HEAVY OUTER SOLID RING === */}
      <circle cx="100" cy="100" r="82.5" stroke={B} strokeWidth="2" fill="none" />

      {/* === 13. 360 FINE NOTCH MARKS (5-tier hierarchy) === */}
      {Array.from({ length: 360 }).map((_, i) => {
        const a = (i * TAU) / 360;
        const isMajor = i % 30 === 0;
        const isMid = i % 15 === 0;
        const isMinor = i % 5 === 0;
        const isTiny = i % 2 === 0;
        const inner = isMajor ? 79.5 : isMid ? 80.5 : isMinor ? 81 : isTiny ? 81.5 : 82;
        return (
          <line key={`n-${i}`}
            x1={100 + inner * Math.cos(a)} y1={100 + inner * Math.sin(a)}
            x2={100 + 82.5 * Math.cos(a)} y2={100 + 82.5 * Math.sin(a)}
            stroke={B}
            strokeWidth={isMajor ? 1.2 : isMid ? 0.6 : isMinor ? 0.3 : isTiny ? 0.12 : 0.06}
            opacity={isMajor ? 1 : isMid ? 0.65 : isMinor ? 0.35 : isTiny ? 0.15 : 0.08}
          />
        );
      })}

      {/* === 14–15. TEXT RING BORDERS + BAND FILL === */}
      <circle cx="100" cy="100" r="79" stroke={B} strokeWidth="0.6" fill="none" opacity="0.4" />
      <circle cx="100" cy="100" r="68.5" stroke={B} strokeWidth="0.6" fill="none" opacity="0.4" />
      {/* Subtle band fill */}
      <circle cx="100" cy="100" r="78.5" stroke="none" fill={B} opacity="0.02" />

      {/* === 16–17. CURVED TEXT === */}
      <defs>
        <path id="topArc" d="M 22,100 a 78,78 0 1,1 156,0" />
        <path id="bottomArc" d="M 178,100 a 78,78 0 1,1 -156,0" />
        <path id="mottoArc" d="M 35,100 a 65,65 0 1,0 130,0" />
      </defs>
      <text fill={B} fontSize="5.5" fontFamily="Georgia, serif" fontWeight="bold" letterSpacing="3.2">
        <textPath href="#topArc" startOffset="50%" textAnchor="middle">
          ★ IN GOD WE TRUST ★
        </textPath>
      </text>
      <text fill={B} fontSize="5.5" fontFamily="Georgia, serif" fontWeight="bold" letterSpacing="3.2">
        <textPath href="#bottomArc" startOffset="50%" textAnchor="middle">
          ★ ACCOUNTABILITY ★
        </textPath>
      </text>

      {/* === 18. CARDINAL + INTERCARDINAL ORNAMENTS === */}
      {[0, 90, 180, 270].map((deg) => {
        const rad = (deg * PI) / 180;
        const sx = 100 + 74 * Math.cos(rad);
        const sy = 100 + 74 * Math.sin(rad);
        return <path key={`cstar-${deg}`} d={starPath(sx, sy, 3.2, 1.4)} fill={B} opacity="0.8" />;
      })}
      {[45, 135, 225, 315].map((deg) => {
        const rad = (deg * PI) / 180;
        const dx = 100 + 74 * Math.cos(rad);
        const dy = 100 + 74 * Math.sin(rad);
        return (
          <path key={`dia-${deg}`}
            d={`M ${dx},${dy - 2.2} L ${dx + 1.6},${dy} L ${dx},${dy + 2.2} L ${dx - 1.6},${dy} Z`}
            fill={B} opacity="0.5" />
        );
      })}

      {/* === 19. 13-STAR CONSTELLATION ARC === */}
      {Array.from({ length: 13 }).map((_, i) => {
        const a = -PI * 0.14 - (i * PI * 0.72) / 12;
        const sr = 62;
        return <path key={`star13-${i}`} d={starPath(100 + sr * Math.cos(a), 100 + sr * Math.sin(a), 2.2, 1)} fill={B} opacity="0.75" />;
      })}

      {/* === 20–21. TRIPLE INNER RING + BEADED FILL === */}
      <circle cx="100" cy="100" r="55" stroke={B} strokeWidth="1.5" fill="none" />
      <circle cx="100" cy="100" r="53" stroke={B} strokeWidth="0.4" fill="none" opacity="0.45" />
      <circle cx="100" cy="100" r="51.5" stroke={B} strokeWidth="0.2" fill="none" opacity="0.2" />
      {/* 90 beads between rings */}
      {Array.from({ length: 90 }).map((_, i) => {
        const a = (i * TAU) / 90;
        return <circle key={`bead2-${i}`} cx={100 + 52 * Math.cos(a)} cy={100 + 52 * Math.sin(a)} r="0.3" fill={B} opacity="0.3" />;
      })}

      {/* === 22. LAUREL WREATHS (22 leaves per side + veins + berries + stem) === */}
      {laurelLeaves('left')}
      {laurelLeaves('right')}

      {/* === 23. INNER FIELD RING === */}
      <circle cx="100" cy="100" r="44" stroke={B} strokeWidth="0.6" fill="none" opacity="0.5" />

      {/* === 24. INVERTED PYRAMID (12 courses + hatched fill) === */}
      <path d="M 73 68 L 127 68 L 100 120 Z" fill={B} opacity="0.03" />
      <path d="M 73 68 L 127 68 L 100 120 Z" stroke={B} strokeWidth="1.8" fill="none" strokeLinejoin="round" />
      {/* 12 course lines */}
      {Array.from({ length: 12 }).map((_, i) => {
        const t = (i + 1) / 13;
        const y = 68 + t * 52;
        const hw = 27 * (1 - t);
        return <line key={`course-${i}`} x1={100 - hw} y1={y} x2={100 + hw} y2={y}
          stroke={B} strokeWidth="0.35" opacity={0.35 - i * 0.025} />;
      })}
      {/* Cross-hatching inside pyramid (diagonal lines) */}
      {Array.from({ length: 8 }).map((_, i) => {
        const t = (i + 1) / 9;
        const y = 68 + t * 52;
        const hw = 27 * (1 - t);
        return <line key={`hatch-${i}`} x1={100 - hw * 0.7} y1={y - 2} x2={100 + hw * 0.7} y2={y + 2}
          stroke={B} strokeWidth="0.08" opacity="0.08" />;
      })}

      {/* === 25. ALL-SEEING EYE (enhanced detail) === */}
      {/* Outer eye shape */}
      <ellipse cx="100" cy="84" rx="11.5" ry="7.5" stroke={B} strokeWidth="1.4" fill="none" />
      {/* Double eyelid */}
      <path d="M 87.5,84 Q 93,76.5 100,75.5 Q 107,76.5 112.5,84" stroke={B} strokeWidth="0.5" fill="none" opacity="0.45" />
      <path d="M 86.5,84 Q 92,74.5 100,73.5 Q 108,74.5 113.5,84" stroke={B} strokeWidth="0.25" fill="none" opacity="0.2" />
      <path d="M 87.5,84 Q 93,91.5 100,92.5 Q 107,91.5 112.5,84" stroke={B} strokeWidth="0.5" fill="none" opacity="0.45" />
      {/* Iris outer ring */}
      <circle cx="100" cy="84" r="5.2" stroke={B} strokeWidth="0.5" fill="none" opacity="0.45" />
      {/* Iris striations (radial lines in iris) */}
      {Array.from({ length: 24 }).map((_, i) => {
        const a = (i * TAU) / 24;
        return <line key={`iris-${i}`}
          x1={100 + 3.5 * Math.cos(a)} y1={84 + 3.5 * Math.sin(a)}
          x2={100 + 5 * Math.cos(a)} y2={84 + 5 * Math.sin(a)}
          stroke={B} strokeWidth="0.12" opacity="0.2" />;
      })}
      {/* Pupil */}
      <circle cx="100" cy="84" r="3.3" fill={B} />
      {/* Light reflection */}
      <circle cx="98.8" cy="82.8" r="1.1" fill={W} opacity="0.7" />
      <circle cx="101.5" cy="85.5" r="0.5" fill={W} opacity="0.35" />
      {/* 9 lash lines */}
      {[-4, -3, -2, -1, 0, 1, 2, 3, 4].map((i) => {
        const a = (-PI / 2) + (i * 0.1);
        return <line key={`lash-${i}`}
          x1={100 + 11 * Math.cos(a)} y1={84 + 7 * Math.sin(a)}
          x2={100 + 13.5 * Math.cos(a)} y2={84 + 9 * Math.sin(a)}
          stroke={B} strokeWidth="0.35" opacity="0.35" />;
      })}

      {/* === 26. 15 RADIATING GLORY RAYS === */}
      {Array.from({ length: 15 }).map((_, i) => {
        const deg = -50 + i * (100 / 14);
        const rad = ((deg + 90) * PI) / 180;
        return (
          <line key={`ray-${i}`}
            x1={100 + 12.5 * Math.cos(rad)} y1={84 + 9 * Math.sin(rad)}
            x2={100 + 26 * Math.cos(rad)} y2={84 + 22 * Math.sin(rad)}
            stroke={B} strokeWidth="0.6" opacity={0.35 - Math.abs(i - 7) * 0.03} />
        );
      })}

      {/* === 27. ARKHIVE WORDMARK + ORNAMENTAL RULES + DIAMONDS === */}
      <text x="100" y="133" textAnchor="middle" fill={B}
        fontSize="12" fontFamily="Georgia, serif" fontWeight="900" letterSpacing="5">ARKHIVE</text>
      {/* Upper rule */}
      <line x1="64" y1="125.5" x2="136" y2="125.5" stroke={B} strokeWidth="0.6" opacity="0.5" />
      <line x1="66" y1="124" x2="134" y2="124" stroke={B} strokeWidth="0.2" opacity="0.2" />
      {/* Lower rule */}
      <line x1="68" y1="139" x2="132" y2="139" stroke={B} strokeWidth="0.6" opacity="0.5" />
      <line x1="70" y1="140.5" x2="130" y2="140.5" stroke={B} strokeWidth="0.2" opacity="0.2" />
      {/* Diamond terminals */}
      {[64, 136].map(x => (
        <path key={`dt-${x}`} d={`M ${x},123.5 L ${x + 2},125.5 L ${x},127.5 L ${x - 2},125.5 Z`} fill={B} opacity="0.55" />
      ))}
      {[68, 132].map(x => (
        <path key={`db-${x}`} d={`M ${x},137 L ${x + 1.8},139 L ${x},141 L ${x - 1.8},139 Z`} fill={B} opacity="0.5" />
      ))}

      {/* === 28. EST. 2009 + flanking ornaments === */}
      <text x="100" y="148" textAnchor="middle" fill={B}
        fontSize="5" fontFamily="Georgia, serif" fontWeight="bold" letterSpacing="3" opacity="0.7">EST. 2009</text>
      {/* Flanking small diamonds */}
      <path d="M 77,148 L 79,147 L 81,148 L 79,149 Z" fill={B} opacity="0.3" />
      <path d="M 119,148 L 121,147 L 123,148 L 121,149 Z" fill={B} opacity="0.3" />
      {/* Flanking lines */}
      <line x1="72" y1="148" x2="76" y2="148" stroke={B} strokeWidth="0.3" opacity="0.35" />
      <line x1="124" y1="148" x2="128" y2="148" stroke={B} strokeWidth="0.3" opacity="0.35" />

      {/* === 29. MOTTO RIBBON === */}
      <text fill={B} fontSize="2.8" fontFamily="Georgia, serif" fontWeight="bold" letterSpacing="1.3" opacity="0.55">
        <textPath href="#mottoArc" startOffset="50%" textAnchor="middle">
          TRUTH · ACCOUNTABILITY · TRANSPARENCY
        </textPath>
      </text>

      {/* === 30. 600-DOT MICROPRINT RING === */}
      {Array.from({ length: 600 }).map((_, i) => {
        const a = (i * TAU) / 600;
        return <circle key={`mp-${i}`} cx={100 + 67 * Math.cos(a)} cy={100 + 67 * Math.sin(a)} r="0.15" fill={B} opacity="0.12" />;
      })}
    </svg>
  );
}


/* ================================================================
   MASTERWORK GOVERNMENT-STYLE SEAL (Canvas → PNG for PDF)
   1400px resolution. Pure black (#000000) and white (#ffffff) only.
   No grays. 30+ layers of intricate detail.
   ================================================================ */

export async function getArkHiveSealPngDataUri(): Promise<string> {
  const size = 1400;
  const canvas = document.createElement('canvas');
  canvas.width = size;
  canvas.height = size;
  const maybeCtx = canvas.getContext('2d');
  if (!maybeCtx) return '';
  const ctx = maybeCtx;

  const cx = size / 2;
  const cy = size / 2;
  const B = '#000000';
  const W = '#ffffff';
  const PI = Math.PI;
  const TAU = PI * 2;

  /* ---- helpers ---- */
  function circle(r: number, lw: number, alpha = 1, dash?: number[]) {
    ctx.save();
    ctx.globalAlpha = alpha;
    ctx.strokeStyle = B;
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
    alpha = 1,
  ) {
    const chars = text.split('');
    const n = chars.length;
    if (n === 0) return;
    const step = n > 1 ? (endAngle - startAngle) / (n - 1) : 0;
    ctx.save();
    ctx.fillStyle = B;
    ctx.globalAlpha = alpha;
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
    ctx.fillStyle = B;
    ctx.beginPath();
    for (let i = 0; i < 10; i++) {
      const a = -PI / 2 + (i * PI) / 5;
      const r = i % 2 === 0 ? outerR : innerR;
      ctx.lineTo(x + r * Math.cos(a), y + r * Math.sin(a));
    }
    ctx.closePath();
    ctx.fill();
    ctx.restore();
  }

  function diamond(x: number, y: number, rx: number, ry: number, alpha = 0.6) {
    ctx.save();
    ctx.globalAlpha = alpha;
    ctx.fillStyle = B;
    ctx.beginPath();
    ctx.moveTo(x, y - ry);
    ctx.lineTo(x + rx, y);
    ctx.lineTo(x, y + ry);
    ctx.lineTo(x - rx, y);
    ctx.closePath();
    ctx.fill();
    ctx.restore();
  }

  function laurelBranch(side: 'left' | 'right') {
    const dir = side === 'left' ? -1 : 1;

    // Branch stem
    ctx.save();
    ctx.strokeStyle = B;
    ctx.lineWidth = 2.5;
    ctx.globalAlpha = 0.5;
    ctx.beginPath();
    const stemStart = side === 'left' ? PI * 0.56 : TAU - PI * 0.56;
    for (let t = 0; t <= 1; t += 0.01) {
      const a = stemStart + t * PI * 0.88 * dir;
      const px = cx + 395 * Math.cos(a);
      const py = cy + 395 * Math.sin(a);
      if (t === 0) ctx.moveTo(px, py); else ctx.lineTo(px, py);
    }
    ctx.stroke();
    ctx.restore();

    // 24 leaves with veins + side veins
    for (let i = 0; i < 24; i++) {
      const baseA = (side === 'left' ? PI * 0.57 : TAU - PI * 0.57) + (i * PI * 0.036 * dir);
      const branchR = 395;
      const bx = cx + branchR * Math.cos(baseA);
      const by = cy + branchR * Math.sin(baseA);
      const leafA = baseA + (side === 'left' ? -0.42 : 0.42);
      const leafLen = 30 + (12 - Math.abs(i - 12)) * 2;
      const tipX = bx + leafLen * Math.cos(leafA);
      const tipY = by + leafLen * Math.sin(leafA);
      const cpDist = leafLen * 0.6;
      const cp1a = leafA - 0.2 * dir;
      const cp2a = leafA + 0.2 * dir;

      // Leaf fill
      ctx.save();
      ctx.globalAlpha = 0.55 + i * 0.012;
      ctx.fillStyle = B;
      ctx.beginPath();
      ctx.moveTo(bx, by);
      ctx.quadraticCurveTo(bx + cpDist * Math.cos(cp1a), by + cpDist * Math.sin(cp1a), tipX, tipY);
      ctx.quadraticCurveTo(bx + cpDist * Math.cos(cp2a), by + cpDist * Math.sin(cp2a), bx, by);
      ctx.fill();
      ctx.restore();

      // Central vein
      ctx.save();
      ctx.strokeStyle = B;
      ctx.lineWidth = 0.5;
      ctx.globalAlpha = 0.3;
      ctx.beginPath();
      ctx.moveTo(bx, by);
      ctx.lineTo(tipX, tipY);
      ctx.stroke();
      ctx.restore();

      // Side veins on larger leaves
      if (leafLen > 32) {
        for (const vDir of [-0.35, 0.35]) {
          const vRad = leafA + vDir * dir;
          const vLen = leafLen * 0.3;
          const midX = bx + (tipX - bx) * 0.45;
          const midY = by + (tipY - by) * 0.45;
          ctx.save();
          ctx.strokeStyle = B;
          ctx.lineWidth = 0.3;
          ctx.globalAlpha = 0.15;
          ctx.beginPath();
          ctx.moveTo(midX, midY);
          ctx.lineTo(midX + vLen * Math.cos(vRad), midY + vLen * Math.sin(vRad));
          ctx.stroke();
          ctx.restore();
        }
      }

      // Berry every 3rd leaf
      if (i % 3 === 1) {
        ctx.save();
        ctx.fillStyle = B;
        ctx.globalAlpha = 0.55;
        ctx.beginPath();
        ctx.arc(bx + 4 * Math.cos(baseA + 0.1 * dir), by + 4 * Math.sin(baseA + 0.1 * dir), 3.5, 0, TAU);
        ctx.fill();
        ctx.restore();
      }
    }
  }

  ctx.clearRect(0, 0, size, size);

  // ==== 1–3. QUAD SERRATED OUTER EDGE ====
  for (const cfg of [
    { teeth: 280, rOut: 690, rIn: 672, lw: 2.5, alpha: 0.9 },
    { teeth: 160, rOut: 685, rIn: 677, lw: 1, alpha: 0.5 },
    { teeth: 400, rOut: 680, rIn: 675, lw: 0.5, alpha: 0.25 },
  ]) {
    ctx.save();
    ctx.strokeStyle = B;
    ctx.lineWidth = cfg.lw;
    ctx.globalAlpha = cfg.alpha;
    ctx.beginPath();
    for (let i = 0; i < cfg.teeth; i++) {
      const a = (i * TAU) / cfg.teeth;
      const r = i % 2 === 0 ? cfg.rOut : cfg.rIn;
      ctx.lineTo(cx + r * Math.cos(a), cy + r * Math.sin(a));
    }
    ctx.closePath();
    ctx.stroke();
    ctx.restore();
  }

  // ==== 4. BEADED BORDER (150 filled dots) ====
  for (let i = 0; i < 150; i++) {
    const a = (i * TAU) / 150;
    ctx.save();
    ctx.fillStyle = B;
    ctx.globalAlpha = 0.6;
    ctx.beginPath();
    ctx.arc(cx + 660 * Math.cos(a), cy + 660 * Math.sin(a), 2.5, 0, TAU);
    ctx.fill();
    ctx.restore();
  }

  // ==== 5–8. GUILLOCHÉ BAND (5 interlocking wave passes) ====
  for (let pass = 0; pass < 5; pass++) {
    const r = 648 - pass * 5;
    const freq = 16 + pass * 5;
    const amp = 3 - pass * 0.4;
    ctx.save();
    ctx.strokeStyle = B;
    ctx.lineWidth = 0.6;
    ctx.globalAlpha = 0.2 + pass * 0.05;
    ctx.beginPath();
    for (let i = 0; i <= 1440; i++) {
      const a = (i * TAU) / 1440;
      const wave = Math.sin(i * freq * (TAU / 1440)) * amp;
      const rr = r + wave;
      ctx.lineTo(cx + rr * Math.cos(a), cy + rr * Math.sin(a));
    }
    ctx.stroke();
    ctx.restore();
  }

  // ==== 9–11. TRIPLE ROPE BORDER ====
  circle(620, 7, 1, [10, 5]);
  circle(610, 3.5, 0.55, [6, 5]);
  circle(604, 1.8, 0.3, [3.5, 7]);

  // ==== 12. HEAVY OUTER SOLID RING ====
  circle(595, 6, 1);

  // ==== 13. 360 FINE NOTCH MARKS (5-tier) ====
  for (let i = 0; i < 360; i++) {
    const a = (i * TAU) / 360;
    const isMajor = i % 30 === 0;
    const isMid = i % 15 === 0;
    const isMinor = i % 5 === 0;
    const isTiny = i % 2 === 0;
    const inner = isMajor ? 565 : isMid ? 575 : isMinor ? 580 : isTiny ? 585 : 590;
    ctx.save();
    ctx.strokeStyle = B;
    ctx.lineWidth = isMajor ? 3.5 : isMid ? 1.8 : isMinor ? 0.8 : isTiny ? 0.4 : 0.15;
    ctx.globalAlpha = isMajor ? 1 : isMid ? 0.65 : isMinor ? 0.35 : isTiny ? 0.15 : 0.08;
    ctx.beginPath();
    ctx.moveTo(cx + inner * Math.cos(a), cy + inner * Math.sin(a));
    ctx.lineTo(cx + 595 * Math.cos(a), cy + 595 * Math.sin(a));
    ctx.stroke();
    ctx.restore();
  }

  // ==== 14–15. TEXT BAND BORDERS ====
  circle(560, 3, 0.7);
  circle(490, 3, 0.7);

  // Subtle band fill
  ctx.save();
  ctx.globalAlpha = 0.02;
  ctx.fillStyle = B;
  ctx.beginPath();
  ctx.arc(cx, cy, 560, 0, TAU);
  ctx.arc(cx, cy, 490, 0, TAU, true);
  ctx.fill();
  ctx.restore();

  // ==== 16–17. CURVED TEXT ====
  arcText(
    '\u2605  I N   G O D   W E   T R U S T  \u2605',
    525, -PI * 0.72, -PI * 0.28, true, 36,
  );
  arcText(
    '\u2605  A C C O U N T A B I L I T Y  \u2605',
    525, PI * 0.72, PI * 0.28, false, 36,
  );

  // ==== 18. CARDINAL STARS + INTERCARDINAL DIAMONDS ====
  for (const deg of [0, 90, 180, 270]) {
    const a = (deg * PI) / 180;
    star5(cx + 525 * Math.cos(a), cy + 525 * Math.sin(a), 18, 8, 0.8);
  }
  for (const deg of [45, 135, 225, 315]) {
    const a = (deg * PI) / 180;
    diamond(cx + 525 * Math.cos(a), cy + 525 * Math.sin(a), 6, 10, 0.5);
  }

  // ==== 19. 13-STAR CONSTELLATION ARC ====
  for (let i = 0; i < 13; i++) {
    const a = -PI * 0.14 - (i * PI * 0.72) / 12;
    star5(cx + 440 * Math.cos(a), cy + 440 * Math.sin(a), 12, 5.5, 0.75);
  }

  // ==== 20–21. TRIPLE INNER RING + BEADED FILL ====
  circle(420, 4, 1);
  circle(410, 1.5, 0.45);
  circle(405, 0.8, 0.2);
  // 120 beads between rings
  for (let i = 0; i < 120; i++) {
    const a = (i * TAU) / 120;
    ctx.save();
    ctx.fillStyle = B;
    ctx.globalAlpha = 0.3;
    ctx.beginPath();
    ctx.arc(cx + 414 * Math.cos(a), cy + 414 * Math.sin(a), 1.8, 0, TAU);
    ctx.fill();
    ctx.restore();
  }

  // ==== 22. LAUREL WREATHS (24 leaves per side + veins + berries + stem) ====
  laurelBranch('left');
  laurelBranch('right');

  // ==== 23. INNER FIELD RING ====
  circle(340, 2.5, 0.5);

  // ==== 24. INVERTED PYRAMID (12 courses + cross-hatch) ====
  const pyrTop = cy - 125;
  const pyrBot = cy + 105;
  const pyrHalfW = 140;

  // Subtle fill
  ctx.save();
  ctx.globalAlpha = 0.03;
  ctx.fillStyle = B;
  ctx.beginPath();
  ctx.moveTo(cx - pyrHalfW, pyrTop);
  ctx.lineTo(cx + pyrHalfW, pyrTop);
  ctx.lineTo(cx, pyrBot);
  ctx.closePath();
  ctx.fill();
  ctx.restore();

  // Pyramid body stroke
  ctx.save();
  ctx.strokeStyle = B;
  ctx.lineWidth = 5;
  ctx.lineJoin = 'round';
  ctx.beginPath();
  ctx.moveTo(cx - pyrHalfW, pyrTop);
  ctx.lineTo(cx + pyrHalfW, pyrTop);
  ctx.lineTo(cx, pyrBot);
  ctx.closePath();
  ctx.stroke();
  ctx.restore();

  // 12 course lines
  for (let i = 1; i <= 12; i++) {
    const t = i / 13;
    const y = pyrTop + t * (pyrBot - pyrTop);
    const halfW = pyrHalfW * (1 - t);
    ctx.save();
    ctx.strokeStyle = B;
    ctx.lineWidth = 1.2;
    ctx.globalAlpha = 0.35 - i * 0.025;
    ctx.beginPath();
    ctx.moveTo(cx - halfW, y);
    ctx.lineTo(cx + halfW, y);
    ctx.stroke();
    ctx.restore();
  }

  // Cross-hatch (subtle diagonal lines inside pyramid)
  for (let i = 1; i <= 8; i++) {
    const t = i / 9;
    const y = pyrTop + t * (pyrBot - pyrTop);
    const halfW = pyrHalfW * (1 - t) * 0.65;
    ctx.save();
    ctx.strokeStyle = B;
    ctx.lineWidth = 0.3;
    ctx.globalAlpha = 0.06;
    ctx.beginPath();
    ctx.moveTo(cx - halfW, y - 3);
    ctx.lineTo(cx + halfW, y + 3);
    ctx.stroke();
    ctx.restore();
  }

  // ==== 25. ALL-SEEING EYE (enhanced) ====
  const eyeY = cy - 50;

  // Outer eye shape
  ctx.save();
  ctx.strokeStyle = B;
  ctx.lineWidth = 4;
  ctx.beginPath();
  ctx.ellipse(cx, eyeY, 50, 32, 0, 0, TAU);
  ctx.stroke();
  ctx.restore();

  // Double eyelid (upper)
  ctx.save();
  ctx.strokeStyle = B;
  ctx.lineWidth = 1.5;
  ctx.globalAlpha = 0.45;
  ctx.beginPath();
  ctx.moveTo(cx - 53, eyeY);
  ctx.quadraticCurveTo(cx, eyeY - 42, cx + 53, eyeY);
  ctx.stroke();
  ctx.restore();

  ctx.save();
  ctx.strokeStyle = B;
  ctx.lineWidth = 0.8;
  ctx.globalAlpha = 0.2;
  ctx.beginPath();
  ctx.moveTo(cx - 56, eyeY);
  ctx.quadraticCurveTo(cx, eyeY - 50, cx + 56, eyeY);
  ctx.stroke();
  ctx.restore();

  // Lower eyelid
  ctx.save();
  ctx.strokeStyle = B;
  ctx.lineWidth = 1.5;
  ctx.globalAlpha = 0.45;
  ctx.beginPath();
  ctx.moveTo(cx - 53, eyeY);
  ctx.quadraticCurveTo(cx, eyeY + 42, cx + 53, eyeY);
  ctx.stroke();
  ctx.restore();

  // Iris outer ring
  ctx.save();
  ctx.strokeStyle = B;
  ctx.lineWidth = 1.5;
  ctx.globalAlpha = 0.5;
  ctx.beginPath();
  ctx.arc(cx, eyeY, 20, 0, TAU);
  ctx.stroke();
  ctx.restore();

  // Iris striations (radial lines)
  for (let i = 0; i < 32; i++) {
    const a = (i * TAU) / 32;
    ctx.save();
    ctx.strokeStyle = B;
    ctx.lineWidth = 0.4;
    ctx.globalAlpha = 0.15;
    ctx.beginPath();
    ctx.moveTo(cx + 13 * Math.cos(a), eyeY + 13 * Math.sin(a));
    ctx.lineTo(cx + 19 * Math.cos(a), eyeY + 19 * Math.sin(a));
    ctx.stroke();
    ctx.restore();
  }

  // Pupil
  ctx.save();
  ctx.fillStyle = B;
  ctx.beginPath();
  ctx.arc(cx, eyeY, 12, 0, TAU);
  ctx.fill();
  ctx.restore();

  // Light reflections
  ctx.save();
  ctx.fillStyle = W;
  ctx.globalAlpha = 0.7;
  ctx.beginPath();
  ctx.arc(cx - 4, eyeY - 4, 4, 0, TAU);
  ctx.fill();
  ctx.restore();

  ctx.save();
  ctx.fillStyle = W;
  ctx.globalAlpha = 0.35;
  ctx.beginPath();
  ctx.arc(cx + 5, eyeY + 5, 2, 0, TAU);
  ctx.fill();
  ctx.restore();

  // 9 lash lines (upper)
  for (let i = -4; i <= 4; i++) {
    const a = -PI / 2 + i * 0.1;
    ctx.save();
    ctx.strokeStyle = B;
    ctx.lineWidth = 1;
    ctx.globalAlpha = 0.35;
    ctx.beginPath();
    ctx.moveTo(cx + 48 * Math.cos(a), eyeY + 30 * Math.sin(a));
    ctx.lineTo(cx + 58 * Math.cos(a), eyeY + 38 * Math.sin(a));
    ctx.stroke();
    ctx.restore();
  }

  // ==== 26. 15 RADIATING GLORY RAYS ====
  for (let i = 0; i < 15; i++) {
    const deg = -50 + i * (100 / 14);
    const a = ((deg + 90) * PI) / 180;
    ctx.save();
    ctx.strokeStyle = B;
    ctx.lineWidth = 2;
    ctx.globalAlpha = 0.35 - Math.abs(i - 7) * 0.03;
    ctx.beginPath();
    ctx.moveTo(cx + 38 * Math.cos(a), eyeY + 38 * Math.sin(a));
    ctx.lineTo(cx + 95 * Math.cos(a), eyeY + 95 * Math.sin(a));
    ctx.stroke();
    ctx.restore();
  }

  // ==== 27. ARKHIVE TEXT ====
  ctx.save();
  ctx.fillStyle = B;
  ctx.font = '900 60px Georgia, serif';
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';
  const arkY = cy + 175;
  const arkSpacing = 50;
  const arkText = 'ARKHIVE';
  const arkStartX = cx - ((arkText.length - 1) * arkSpacing) / 2;
  arkText.split('').forEach((ch, i) => {
    ctx.fillText(ch, arkStartX + i * arkSpacing, arkY);
  });
  ctx.restore();

  // Double ornamental rules with diamond terminals
  // Upper rule
  ctx.save();
  ctx.strokeStyle = B;
  ctx.lineWidth = 1.8;
  ctx.globalAlpha = 0.55;
  ctx.beginPath();
  ctx.moveTo(cx - 140, arkY - 28);
  ctx.lineTo(cx + 140, arkY - 28);
  ctx.stroke();
  ctx.restore();
  ctx.save();
  ctx.strokeStyle = B;
  ctx.lineWidth = 0.6;
  ctx.globalAlpha = 0.25;
  ctx.beginPath();
  ctx.moveTo(cx - 135, arkY - 32);
  ctx.lineTo(cx + 135, arkY - 32);
  ctx.stroke();
  ctx.restore();

  // Lower rule
  ctx.save();
  ctx.strokeStyle = B;
  ctx.lineWidth = 1.8;
  ctx.globalAlpha = 0.55;
  ctx.beginPath();
  ctx.moveTo(cx - 125, arkY + 28);
  ctx.lineTo(cx + 125, arkY + 28);
  ctx.stroke();
  ctx.restore();
  ctx.save();
  ctx.strokeStyle = B;
  ctx.lineWidth = 0.6;
  ctx.globalAlpha = 0.25;
  ctx.beginPath();
  ctx.moveTo(cx - 120, arkY + 32);
  ctx.lineTo(cx + 120, arkY + 32);
  ctx.stroke();
  ctx.restore();

  // Diamond terminals
  for (const xOff of [-140, 140]) {
    diamond(cx + xOff, arkY - 28, 5, 7, 0.6);
  }
  for (const xOff of [-125, 125]) {
    diamond(cx + xOff, arkY + 28, 4.5, 6.5, 0.55);
  }

  // ==== 28. EST. 2009 + flanking ornaments ====
  ctx.save();
  ctx.fillStyle = B;
  ctx.font = 'bold 26px Georgia, serif';
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';
  ctx.globalAlpha = 0.7;
  ctx.fillText('EST. 2009', cx, arkY + 58);
  ctx.restore();

  // Flanking diamonds
  diamond(cx - 70, arkY + 58, 4, 5, 0.35);
  diamond(cx + 70, arkY + 58, 4, 5, 0.35);

  // Flanking lines
  ctx.save();
  ctx.strokeStyle = B;
  ctx.lineWidth = 1;
  ctx.globalAlpha = 0.35;
  ctx.beginPath();
  ctx.moveTo(cx - 93, arkY + 58);
  ctx.lineTo(cx - 76, arkY + 58);
  ctx.stroke();
  ctx.beginPath();
  ctx.moveTo(cx + 76, arkY + 58);
  ctx.lineTo(cx + 93, arkY + 58);
  ctx.stroke();
  ctx.restore();

  // ==== 29. MOTTO TEXT ====
  arcText(
    'T R U T H  ·  A C C O U N T A B I L I T Y  ·  T R A N S P A R E N C Y',
    465, PI * 0.76, PI * 0.24, false, 14, 0.55,
  );

  // ==== 30. CARDINAL POINT STARS ON INNER RING ====
  for (const deg of [0, 90, 180, 270]) {
    const a = (deg * PI) / 180;
    star5(cx + 465 * Math.cos(a), cy + 465 * Math.sin(a), 9, 4, 0.4);
  }

  // ==== 31. 600-DOT MICROPRINT RING ====
  ctx.save();
  ctx.fillStyle = B;
  ctx.globalAlpha = 0.12;
  for (let i = 0; i < 600; i++) {
    const a = (i * TAU) / 600;
    ctx.beginPath();
    ctx.arc(cx + 480 * Math.cos(a), cy + 480 * Math.sin(a), 1.3, 0, TAU);
    ctx.fill();
  }
  ctx.restore();

  return canvas.toDataURL('image/png');
}
