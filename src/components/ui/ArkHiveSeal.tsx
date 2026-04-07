'use client';

import React from 'react';

interface ArkHiveSealProps {
  size?: number;
  className?: string;
}

/* ================================================================
   MASTERWORK GOVERNMENT-STYLE SEAL (SVG for web)

   Multi-layer architecture:
   1. Triple serrated outer edge with varying tooth depth
   2. Guilloché-inspired concentric wave band
   3. Triple rope border (three twisted strands)
   4. 200+ fine radial notch marks with major/minor hierarchy
   5. Dual text arc band: "IN GOD WE TRUST" / "ACCOUNTABILITY"
   6. 4 cardinal stars + 8 intercardinal ornaments
   7. 13 stars in Great Seal constellation arc
   8. Double inner decorative ring with dot fill
   9. Laurel wreaths (16 leaves per side + berries + veins)
   10. Inverted pyramid with 8 course lines + subtle fill
   11. All-seeing eye with iris, pupil, reflection, lids
   12. 11 radiating glory rays through pyramid
   13. "ARKHIVE" wordmark with ornamental rules + diamond ends
   14. "EST. 2009" with flanking flourishes
   15. Motto ribbon: "TRUTH · ACCOUNTABILITY · TRANSPARENCY"
   16. Microprint simulation ring (360 dots)
   17. Inner crosshatch background pattern
   ================================================================ */

export default function ArkHiveSeal({ size = 120, className = '' }: ArkHiveSealProps) {
  const c = '#1a1a1a';
  const cMd = '#333333';
  const cLt = '#555555';

  const PI = Math.PI;
  const TAU = PI * 2;

  const laurelLeaves = (side: 'left' | 'right') => {
    const dir = side === 'left' ? -1 : 1;
    const elements: React.ReactElement[] = [];
    for (let i = 0; i < 16; i++) {
      const baseAngle = (side === 'left' ? 195 : 345) + (i * 10.5 * dir);
      const rad = (baseAngle * PI) / 180;
      const lx = 100 + 63 * Math.cos(rad);
      const ly = 100 + 63 * Math.sin(rad);
      const leafAngle = baseAngle + (side === 'left' ? -30 : 30);
      const leafRad = (leafAngle * PI) / 180;
      const leafLen = 6 + (8 - Math.abs(i - 8)) * 0.4;
      const tipX = lx + leafLen * Math.cos(leafRad);
      const tipY = ly + leafLen * Math.sin(leafRad);
      const cp1x = lx + leafLen * 0.6 * Math.cos(leafRad - 0.35 * dir);
      const cp1y = ly + leafLen * 0.6 * Math.sin(leafRad - 0.35 * dir);
      const cp2x = lx + leafLen * 0.6 * Math.cos(leafRad + 0.35 * dir);
      const cp2y = ly + leafLen * 0.6 * Math.sin(leafRad + 0.35 * dir);
      elements.push(
        <path
          key={`leaf-${side}-${i}`}
          d={`M ${lx.toFixed(1)},${ly.toFixed(1)} Q ${cp1x.toFixed(1)},${cp1y.toFixed(1)} ${tipX.toFixed(1)},${tipY.toFixed(1)} Q ${cp2x.toFixed(1)},${cp2y.toFixed(1)} ${lx.toFixed(1)},${ly.toFixed(1)}`}
          fill={c}
          opacity={0.45 + i * 0.025}
        />
      );
      // Leaf vein (center line)
      elements.push(
        <line
          key={`vein-${side}-${i}`}
          x1={lx} y1={ly} x2={tipX} y2={tipY}
          stroke={cMd} strokeWidth="0.15" opacity="0.3"
        />
      );
      // Berry (every 3rd leaf)
      if (i % 3 === 1) {
        const bx = lx + 2 * Math.cos(rad + 0.15 * dir);
        const by = ly + 2 * Math.sin(rad + 0.15 * dir);
        elements.push(
          <circle key={`berry-${side}-${i}`} cx={bx} cy={by} r="0.8" fill={c} opacity="0.5" />
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
      {/* === 1. TRIPLE SERRATED OUTER EDGE === */}
      {[{ teeth: 160, rOut: 99, rIn: 95.5, sw: 0.6, op: 0.7 },
        { teeth: 80, rOut: 98, rIn: 96.5, sw: 0.3, op: 0.3 }].map((ring, ri) => (
        <path
          key={`serr-${ri}`}
          d={Array.from({ length: ring.teeth }, (_, i) => {
            const a = (i * TAU) / ring.teeth;
            const r = i % 2 === 0 ? ring.rOut : ring.rIn;
            return `${i === 0 ? 'M' : 'L'} ${(100 + r * Math.cos(a)).toFixed(2)},${(100 + r * Math.sin(a)).toFixed(2)}`;
          }).join(' ') + ' Z'}
          stroke={c}
          strokeWidth={ring.sw}
          fill="none"
          opacity={ring.op}
        />
      ))}

      {/* === 2. GUILLOCHÉ BAND (concentric wave pattern) === */}
      {[0, 1, 2].map(pass => {
        const r = 93 - pass * 1.2;
        const pts = Array.from({ length: 361 }, (_, i) => {
          const a = (i * TAU) / 360;
          const wave = Math.sin(i * 12 * (TAU / 360)) * (0.6 - pass * 0.15);
          const rr = r + wave;
          return `${i === 0 ? 'M' : 'L'} ${(100 + rr * Math.cos(a)).toFixed(2)},${(100 + rr * Math.sin(a)).toFixed(2)}`;
        }).join(' ');
        return <path key={`guil-${pass}`} d={pts} stroke={c} strokeWidth="0.2" fill="none" opacity={0.15 + pass * 0.05} />;
      })}

      {/* === 3. TRIPLE ROPE BORDER === */}
      {[{ r: 90, sw: 2.2, dash: '3.5 1.8', op: 0.85 },
        { r: 88.5, sw: 1.2, dash: '2 2.5', op: 0.45 },
        { r: 87.2, sw: 0.6, dash: '1.5 3', op: 0.25 }].map((rope, i) => (
        <circle key={`rope-${i}`} cx="100" cy="100" r={rope.r} stroke={c}
          strokeWidth={rope.sw} fill="none" strokeDasharray={rope.dash} opacity={rope.op} />
      ))}

      {/* === 4. OUTER SOLID RING === */}
      <circle cx="100" cy="100" r="86" stroke={c} strokeWidth="1.6" fill="none" />

      {/* === 5. 200 FINE NOTCH MARKS === */}
      {Array.from({ length: 200 }).map((_, i) => {
        const a = (i * TAU) / 200;
        const isMajor = i % 20 === 0;
        const isMid = i % 10 === 0;
        const isMinor = i % 5 === 0;
        const inner = isMajor ? 84 : isMid ? 84.8 : isMinor ? 85.2 : 85.6;
        return (
          <line key={`n-${i}`}
            x1={100 + inner * Math.cos(a)} y1={100 + inner * Math.sin(a)}
            x2={100 + 86 * Math.cos(a)} y2={100 + 86 * Math.sin(a)}
            stroke={c}
            strokeWidth={isMajor ? 1 : isMid ? 0.5 : isMinor ? 0.25 : 0.12}
            opacity={isMajor ? 0.9 : isMid ? 0.5 : isMinor ? 0.3 : 0.15}
          />
        );
      })}

      {/* === 6. TEXT RING BORDERS === */}
      <circle cx="100" cy="100" r="83.5" stroke={c} strokeWidth="0.4" fill="none" opacity="0.25" />
      <circle cx="100" cy="100" r="72" stroke={c} strokeWidth="0.4" fill="none" opacity="0.25" />
      {/* Subtle fill for text band */}
      <circle cx="100" cy="100" r="83" stroke="none" fill={c} opacity="0.015" />

      {/* === 7. CURVED TEXT === */}
      <defs>
        <path id="topArc" d="M 20,100 a 80,80 0 1,1 160,0" />
        <path id="bottomArc" d="M 180,100 a 80,80 0 1,1 -160,0" />
        <path id="mottoArc" d="M 38,100 a 62,62 0 1,0 124,0" />
      </defs>
      <text fill={c} fontSize="5.8" fontFamily="Georgia, serif" fontWeight="bold" letterSpacing="3.5">
        <textPath href="#topArc" startOffset="50%" textAnchor="middle">
          ★ IN GOD WE TRUST ★
        </textPath>
      </text>
      <text fill={c} fontSize="5.8" fontFamily="Georgia, serif" fontWeight="bold" letterSpacing="3.5">
        <textPath href="#bottomArc" startOffset="50%" textAnchor="middle">
          ★ ACCOUNTABILITY ★
        </textPath>
      </text>

      {/* === 8. CARDINAL ORNAMENTS (stars at N/S/E/W + diamonds at diagonals) === */}
      {[0, 90, 180, 270].map((deg) => {
        const rad = (deg * PI) / 180;
        return (
          <text key={`card-${deg}`} x={100 + 78 * Math.cos(rad)} y={100 + 78 * Math.sin(rad)}
            textAnchor="middle" dominantBaseline="central" fill={c} fontSize="5" fontFamily="serif">★</text>
        );
      })}
      {[45, 135, 225, 315].map((deg) => {
        const rad = (deg * PI) / 180;
        const dx = 100 + 78 * Math.cos(rad);
        const dy = 100 + 78 * Math.sin(rad);
        return (
          <path key={`dia-${deg}`}
            d={`M ${dx},${dy - 2} L ${dx + 1.5},${dy} L ${dx},${dy + 2} L ${dx - 1.5},${dy} Z`}
            fill={c} opacity="0.4" />
        );
      })}

      {/* === 9. 13 STARS IN CONSTELLATION ARC (Great Seal pattern) === */}
      {Array.from({ length: 13 }).map((_, i) => {
        const a = -PI * 0.16 - (i * PI * 0.68) / 12;
        const sr = 65;
        return (
          <text key={`star-${i}`} x={100 + sr * Math.cos(a)} y={100 + sr * Math.sin(a)}
            textAnchor="middle" dominantBaseline="central" fill={c} fontSize="4" fontFamily="serif"
            opacity="0.7">★</text>
        );
      })}

      {/* === 10. DOUBLE INNER RING === */}
      <circle cx="100" cy="100" r="57" stroke={c} strokeWidth="1.2" fill="none" />
      <circle cx="100" cy="100" r="55.2" stroke={c} strokeWidth="0.35" fill="none" opacity="0.3" />
      {/* Dot fill between inner rings */}
      {Array.from({ length: 72 }).map((_, i) => {
        const a = (i * TAU) / 72;
        return <circle key={`dot-${i}`} cx={100 + 56.1 * Math.cos(a)} cy={100 + 56.1 * Math.sin(a)} r="0.35" fill={c} opacity="0.2" />;
      })}

      {/* === 11. LAUREL WREATHS (16 leaves per side + berries + veins) === */}
      {laurelLeaves('left')}
      {laurelLeaves('right')}

      {/* === 12. INVERTED PYRAMID (pointing DOWN, with fill) === */}
      <path d="M 75 70 L 125 70 L 100 119 Z" fill={c} opacity="0.025" />
      <path d="M 75 70 L 125 70 L 100 119 Z" stroke={c} strokeWidth="1.6" fill="none" strokeLinejoin="round" />
      {/* 8 course lines */}
      {Array.from({ length: 8 }).map((_, i) => {
        const t = (i + 1) / 9;
        const y = 70 + t * 49;
        const hw = 25 * (1 - t);
        return <line key={`course-${i}`} x1={100 - hw} y1={y} x2={100 + hw} y2={y}
          stroke={c} strokeWidth="0.4" opacity={0.3 - i * 0.03} />;
      })}

      {/* === 13. ALL-SEEING EYE === */}
      <ellipse cx="100" cy="85" rx="10.5" ry="6.8" stroke={c} strokeWidth="1.2" fill="none" />
      <circle cx="100" cy="85" r="4.8" stroke={c} strokeWidth="0.4" fill="none" opacity="0.35" />
      <circle cx="100" cy="85" r="3.2" fill={c} />
      <circle cx="99" cy="84" r="1" fill="#ffffff" opacity="0.6" />
      {/* Eyelid arcs */}
      <path d="M 88.5,85 Q 94,78 100,77 Q 106,78 111.5,85" stroke={c} strokeWidth="0.45" fill="none" opacity="0.35" />
      <path d="M 88.5,85 Q 94,92 100,93 Q 106,92 111.5,85" stroke={c} strokeWidth="0.45" fill="none" opacity="0.35" />
      {/* Lash lines */}
      {[-3, -2, -1, 0, 1, 2, 3].map((i) => {
        const a = (-PI / 2) + (i * 0.12);
        return <line key={`lash-${i}`}
          x1={100 + 10 * Math.cos(a)} y1={85 + 6.5 * Math.sin(a)}
          x2={100 + 12 * Math.cos(a)} y2={85 + 8 * Math.sin(a)}
          stroke={c} strokeWidth="0.3" opacity="0.25" />;
      })}

      {/* === 14. RADIATING GLORY RAYS === */}
      {[-45, -35, -25, -15, 0, 15, 25, 35, 45].map((deg, i) => {
        const rad = ((deg + 90) * PI) / 180;
        return (
          <line key={`ray-${i}`}
            x1={100 + 12 * Math.cos(rad)} y1={85 + 8 * Math.sin(rad)}
            x2={100 + 24 * Math.cos(rad)} y2={85 + 20 * Math.sin(rad)}
            stroke={c} strokeWidth="0.6" opacity={0.3 - Math.abs(deg) * 0.004} />
        );
      })}

      {/* === 15. ARKHIVE WORDMARK === */}
      <text x="100" y="132" textAnchor="middle" fill={c}
        fontSize="11.5" fontFamily="Georgia, serif" fontWeight="900" letterSpacing="4.5">ARKHIVE</text>
      {/* Ornamental rules with diamond terminals */}
      <line x1="66" y1="125" x2="134" y2="125" stroke={c} strokeWidth="0.5" opacity="0.35" />
      <line x1="70" y1="137.5" x2="130" y2="137.5" stroke={c} strokeWidth="0.5" opacity="0.35" />
      {[66, 134].map(x => (
        <path key={`dt-${x}`} d={`M ${x},123 L ${x + 1.5},125 L ${x},127 L ${x - 1.5},125 Z`} fill={c} opacity="0.4" />
      ))}
      {[70, 130].map(x => (
        <path key={`db-${x}`} d={`M ${x},135.5 L ${x + 1.5},137.5 L ${x},139.5 L ${x - 1.5},137.5 Z`} fill={c} opacity="0.4" />
      ))}

      {/* === 16. EST. 2009 with flanking flourishes === */}
      <text x="100" y="146" textAnchor="middle" fill={c}
        fontSize="5" fontFamily="Georgia, serif" fontWeight="bold" letterSpacing="2.5" opacity="0.6">EST. 2009</text>
      <line x1="78" y1="146" x2="85" y2="146" stroke={c} strokeWidth="0.3" opacity="0.3" />
      <line x1="115" y1="146" x2="122" y2="146" stroke={c} strokeWidth="0.3" opacity="0.3" />

      {/* === 17. MOTTO RIBBON (curved at bottom) === */}
      <text fill={cLt} fontSize="3" fontFamily="Georgia, serif" fontWeight="bold" letterSpacing="1.5" opacity="0.5">
        <textPath href="#mottoArc" startOffset="50%" textAnchor="middle">
          TRUTH · ACCOUNTABILITY · TRANSPARENCY
        </textPath>
      </text>

      {/* === 18. MICROPRINT SIMULATION RING === */}
      {Array.from({ length: 360 }).map((_, i) => {
        const a = (i * TAU) / 360;
        return <circle key={`mp-${i}`} cx={100 + 71 * Math.cos(a)} cy={100 + 71 * Math.sin(a)} r="0.2" fill={c} opacity="0.08" />;
      })}

      {/* === 19. INNER CROSSHATCH PATTERN === */}
      <circle cx="100" cy="100" r="24" stroke={cMd} strokeWidth="0.2" fill="none" opacity="0.06" strokeDasharray="0.8 1.5" />
      <circle cx="100" cy="100" r="18" stroke={cMd} strokeWidth="0.15" fill="none" opacity="0.04" strokeDasharray="0.5 2" />
    </svg>
  );
}


/* ================================================================
   MASTERWORK GOVERNMENT-STYLE SEAL (Canvas → PNG for PDF)
   1200px resolution, guilloché band, triple rope border,
   200+ notch marks, enhanced laurel wreaths with berries + veins,
   inverted pyramid with 10 courses, all-seeing eye with lashes,
   13-star constellation, motto text, microprint ring,
   diamond ornaments, flanking flourishes.
   Colors: black/gray (#1a1a1a) for print-friendly monochrome.
   ================================================================ */

export async function getArkHiveSealPngDataUri(): Promise<string> {
  const size = 1200;
  const canvas = document.createElement('canvas');
  canvas.width = size;
  canvas.height = size;
  const maybeCtx = canvas.getContext('2d');
  if (!maybeCtx) return '';
  const ctx = maybeCtx;

  const cx = size / 2;
  const cy = size / 2;
  const color = '#1a1a1a';
  const colorMd = '#333333';
  const colorLt = '#555555';
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
    fillColor = color,
  ) {
    const chars = text.split('');
    const n = chars.length;
    if (n === 0) return;
    const step = n > 1 ? (endAngle - startAngle) / (n - 1) : 0;
    ctx.save();
    ctx.fillStyle = fillColor;
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
      ctx.lineTo(x + r * Math.cos(a), y + r * Math.sin(a));
    }
    ctx.closePath();
    ctx.fill();
    ctx.restore();
  }

  function diamond(x: number, y: number, rx: number, ry: number, alpha = 0.5) {
    ctx.save();
    ctx.globalAlpha = alpha;
    ctx.fillStyle = color;
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
    ctx.strokeStyle = color;
    ctx.lineWidth = 2;
    ctx.globalAlpha = 0.35;
    ctx.beginPath();
    const stemStart = side === 'left' ? PI * 0.57 : TAU - PI * 0.57;
    const stemEnd = side === 'left' ? PI * 1.43 : PI * 1.43;
    for (let t = 0; t <= 1; t += 0.015) {
      const a = stemStart + t * (stemEnd - stemStart) * dir;
      const px = cx + 340 * Math.cos(a);
      const py = cy + 340 * Math.sin(a);
      if (t === 0) ctx.moveTo(px, py); else ctx.lineTo(px, py);
    }
    ctx.stroke();
    ctx.restore();

    // 20 leaves with veins
    for (let i = 0; i < 20; i++) {
      const baseA = (side === 'left' ? PI * 0.58 : TAU - PI * 0.58) + (i * PI * 0.042 * dir);
      const branchR = 340;
      const bx = cx + branchR * Math.cos(baseA);
      const by = cy + branchR * Math.sin(baseA);
      const leafA = baseA + (side === 'left' ? -0.45 : 0.45);
      const leafLen = 24 + (10 - Math.abs(i - 10)) * 1.8;
      const tipX = bx + leafLen * Math.cos(leafA);
      const tipY = by + leafLen * Math.sin(leafA);
      const cpDist = leafLen * 0.6;
      const cp1a = leafA - 0.22 * dir;
      const cp2a = leafA + 0.22 * dir;

      // Leaf fill
      ctx.save();
      ctx.globalAlpha = 0.4 + i * 0.02;
      ctx.fillStyle = color;
      ctx.beginPath();
      ctx.moveTo(bx, by);
      ctx.quadraticCurveTo(bx + cpDist * Math.cos(cp1a), by + cpDist * Math.sin(cp1a), tipX, tipY);
      ctx.quadraticCurveTo(bx + cpDist * Math.cos(cp2a), by + cpDist * Math.sin(cp2a), bx, by);
      ctx.fill();
      ctx.restore();

      // Leaf vein
      ctx.save();
      ctx.strokeStyle = colorMd;
      ctx.lineWidth = 0.6;
      ctx.globalAlpha = 0.25;
      ctx.beginPath();
      ctx.moveTo(bx, by);
      ctx.lineTo(tipX, tipY);
      ctx.stroke();
      ctx.restore();

      // Berry every 3rd leaf
      if (i % 3 === 1) {
        ctx.save();
        ctx.fillStyle = color;
        ctx.globalAlpha = 0.45;
        ctx.beginPath();
        const bry = by + 3 * Math.sin(baseA + 0.12 * dir);
        const brx = bx + 3 * Math.cos(baseA + 0.12 * dir);
        ctx.arc(brx, bry, 3, 0, TAU);
        ctx.fill();
        ctx.restore();
      }
    }
  }

  ctx.clearRect(0, 0, size, size);

  // ==== 1. TRIPLE SERRATED OUTER EDGE ====
  for (const cfg of [
    { teeth: 240, rOut: 590, rIn: 578, lw: 1.8, alpha: 0.7 },
    { teeth: 120, rOut: 588, rIn: 582, lw: 0.6, alpha: 0.3 },
  ]) {
    ctx.save();
    ctx.strokeStyle = color;
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

  // ==== 2. GUILLOCHÉ BAND (3 concentric wave rings) ====
  for (let pass = 0; pass < 3; pass++) {
    const r = 568 - pass * 5;
    ctx.save();
    ctx.strokeStyle = color;
    ctx.lineWidth = 0.6;
    ctx.globalAlpha = 0.12 + pass * 0.04;
    ctx.beginPath();
    for (let i = 0; i <= 720; i++) {
      const a = (i * TAU) / 720;
      const wave = Math.sin(i * 16 * (TAU / 720)) * (2.5 - pass * 0.6);
      const rr = r + wave;
      ctx.lineTo(cx + rr * Math.cos(a), cy + rr * Math.sin(a));
    }
    ctx.stroke();
    ctx.restore();
  }

  // ==== 3. TRIPLE ROPE BORDER ====
  circle(555, 5, 0.85, [9, 4]);
  circle(548, 3, 0.45, [5, 5]);
  circle(543, 1.5, 0.22, [3, 6]);

  // ==== 4. OUTER SOLID RING ====
  circle(535, 4, 1);

  // ==== 5. 240 FINE NOTCH MARKS ====
  for (let i = 0; i < 240; i++) {
    const a = (i * TAU) / 240;
    const isMajor = i % 20 === 0;
    const isMid = i % 10 === 0;
    const isMinor = i % 5 === 0;
    const inner = isMajor ? 512 : isMid ? 518 : isMinor ? 522 : 526;
    ctx.save();
    ctx.strokeStyle = color;
    ctx.lineWidth = isMajor ? 2.5 : isMid ? 1.2 : isMinor ? 0.6 : 0.3;
    ctx.globalAlpha = isMajor ? 0.9 : isMid ? 0.5 : isMinor ? 0.3 : 0.12;
    ctx.beginPath();
    ctx.moveTo(cx + inner * Math.cos(a), cy + inner * Math.sin(a));
    ctx.lineTo(cx + 535 * Math.cos(a), cy + 535 * Math.sin(a));
    ctx.stroke();
    ctx.restore();
  }

  // ==== 6. TEXT BAND BORDERS ====
  circle(510, 2, 0.7);
  circle(440, 2, 0.7);

  // Subtle fill for text band
  ctx.save();
  ctx.globalAlpha = 0.02;
  ctx.fillStyle = color;
  ctx.beginPath();
  ctx.arc(cx, cy, 510, 0, TAU);
  ctx.arc(cx, cy, 440, 0, TAU, true);
  ctx.fill();
  ctx.restore();

  // ==== 7. CURVED TEXT ====
  arcText(
    '\u2605  I N   G O D   W E   T R U S T  \u2605',
    475, -PI * 0.72, -PI * 0.28, true, 30,
  );
  arcText(
    '\u2605  A C C O U N T A B I L I T Y  \u2605',
    475, PI * 0.72, PI * 0.28, false, 30,
  );

  // ==== 8. CARDINAL STARS + INTERCARDINAL DIAMONDS ====
  for (const deg of [0, 90, 180, 270]) {
    const a = (deg * PI) / 180;
    star5(cx + 475 * Math.cos(a), cy + 475 * Math.sin(a), 14, 6, 0.6);
  }
  for (const deg of [45, 135, 225, 315]) {
    const a = (deg * PI) / 180;
    diamond(cx + 475 * Math.cos(a), cy + 475 * Math.sin(a), 5, 8, 0.35);
  }

  // ==== 9. 13 STARS IN CONSTELLATION ARC ====
  for (let i = 0; i < 13; i++) {
    const a = -PI * 0.14 - (i * PI * 0.72) / 12;
    star5(cx + 395 * Math.cos(a), cy + 395 * Math.sin(a), 9, 4, 0.65);
  }

  // ==== 10. DOUBLE INNER RING WITH DOT FILL ====
  circle(375, 3, 0.9);
  circle(368, 1.2, 0.3);
  // Dot fill between rings
  for (let i = 0; i < 120; i++) {
    const a = (i * TAU) / 120;
    ctx.save();
    ctx.fillStyle = color;
    ctx.globalAlpha = 0.18;
    ctx.beginPath();
    ctx.arc(cx + 371 * Math.cos(a), cy + 371 * Math.sin(a), 1.2, 0, TAU);
    ctx.fill();
    ctx.restore();
  }

  // ==== 11. LAUREL WREATHS (20 leaves per side + berries + veins) ====
  laurelBranch('left');
  laurelBranch('right');

  // ==== 12. INNER FIELD RING ====
  circle(295, 2, 0.45);

  // ==== 13. INVERTED PYRAMID (pointing DOWN, with fill + 10 courses) ====
  const pyrTop = cy - 105;
  const pyrBot = cy + 90;
  const pyrHalfW = 120;

  // Subtle fill
  ctx.save();
  ctx.globalAlpha = 0.03;
  ctx.fillStyle = color;
  ctx.beginPath();
  ctx.moveTo(cx - pyrHalfW, pyrTop);
  ctx.lineTo(cx + pyrHalfW, pyrTop);
  ctx.lineTo(cx, pyrBot);
  ctx.closePath();
  ctx.fill();
  ctx.restore();

  // Pyramid body stroke
  ctx.save();
  ctx.strokeStyle = color;
  ctx.lineWidth = 4;
  ctx.lineJoin = 'round';
  ctx.beginPath();
  ctx.moveTo(cx - pyrHalfW, pyrTop);
  ctx.lineTo(cx + pyrHalfW, pyrTop);
  ctx.lineTo(cx, pyrBot);
  ctx.closePath();
  ctx.stroke();
  ctx.restore();

  // 10 course lines
  for (let i = 1; i <= 10; i++) {
    const t = i / 11;
    const y = pyrTop + t * (pyrBot - pyrTop);
    const halfW = pyrHalfW * (1 - t);
    ctx.save();
    ctx.strokeStyle = color;
    ctx.lineWidth = 1;
    ctx.globalAlpha = 0.3 - i * 0.025;
    ctx.beginPath();
    ctx.moveTo(cx - halfW, y);
    ctx.lineTo(cx + halfW, y);
    ctx.stroke();
    ctx.restore();
  }

  // ==== 14. ALL-SEEING EYE ====
  const eyeY = cy - 45;

  // Outer eye shape
  ctx.save();
  ctx.strokeStyle = color;
  ctx.lineWidth = 3;
  ctx.beginPath();
  ctx.ellipse(cx, eyeY, 42, 27, 0, 0, TAU);
  ctx.stroke();
  ctx.restore();

  // Iris ring
  ctx.save();
  ctx.strokeStyle = color;
  ctx.lineWidth = 1.2;
  ctx.globalAlpha = 0.4;
  ctx.beginPath();
  ctx.arc(cx, eyeY, 17, 0, TAU);
  ctx.stroke();
  ctx.restore();

  // Pupil
  ctx.save();
  ctx.fillStyle = color;
  ctx.beginPath();
  ctx.arc(cx, eyeY, 11, 0, TAU);
  ctx.fill();
  ctx.restore();

  // Light reflection
  ctx.save();
  ctx.fillStyle = '#ffffff';
  ctx.globalAlpha = 0.6;
  ctx.beginPath();
  ctx.arc(cx - 3, eyeY - 3, 3.5, 0, TAU);
  ctx.fill();
  ctx.restore();

  // Eyelid curves
  ctx.save();
  ctx.strokeStyle = color;
  ctx.lineWidth = 1.2;
  ctx.globalAlpha = 0.35;
  ctx.beginPath();
  ctx.moveTo(cx - 45, eyeY);
  ctx.quadraticCurveTo(cx, eyeY - 36, cx + 45, eyeY);
  ctx.stroke();
  ctx.beginPath();
  ctx.moveTo(cx - 45, eyeY);
  ctx.quadraticCurveTo(cx, eyeY + 36, cx + 45, eyeY);
  ctx.stroke();
  ctx.restore();

  // Lash lines (upper)
  for (let i = -5; i <= 5; i++) {
    const a = -PI / 2 + i * 0.1;
    ctx.save();
    ctx.strokeStyle = color;
    ctx.lineWidth = 0.8;
    ctx.globalAlpha = 0.2;
    ctx.beginPath();
    ctx.moveTo(cx + 40 * Math.cos(a), eyeY + 26 * Math.sin(a));
    ctx.lineTo(cx + 48 * Math.cos(a), eyeY + 32 * Math.sin(a));
    ctx.stroke();
    ctx.restore();
  }

  // Radiating glory rays (downward through pyramid)
  for (let i = -7; i <= 7; i++) {
    const a = PI / 2 + (i * PI) / 28;
    ctx.save();
    ctx.strokeStyle = color;
    ctx.lineWidth = 1.5;
    ctx.globalAlpha = 0.22 - Math.abs(i) * 0.02;
    ctx.beginPath();
    ctx.moveTo(cx + 32 * Math.cos(a), eyeY + 32 * Math.sin(a));
    ctx.lineTo(cx + 80 * Math.cos(a), eyeY + 80 * Math.sin(a));
    ctx.stroke();
    ctx.restore();
  }

  // ==== 15. ARKHIVE TEXT ====
  ctx.save();
  ctx.fillStyle = color;
  ctx.font = '900 50px Georgia, serif';
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';
  const arkY = cy + 150;
  const arkSpacing = 42;
  const arkText = 'ARKHIVE';
  const arkStartX = cx - ((arkText.length - 1) * arkSpacing) / 2;
  arkText.split('').forEach((ch, i) => {
    ctx.fillText(ch, arkStartX + i * arkSpacing, arkY);
  });
  ctx.restore();

  // Ornamental rules with diamond terminals
  ctx.save();
  ctx.strokeStyle = color;
  ctx.lineWidth = 1.2;
  ctx.globalAlpha = 0.4;
  ctx.beginPath();
  ctx.moveTo(cx - 120, arkY - 24);
  ctx.lineTo(cx + 120, arkY - 24);
  ctx.stroke();
  ctx.beginPath();
  ctx.moveTo(cx - 105, arkY + 24);
  ctx.lineTo(cx + 105, arkY + 24);
  ctx.stroke();
  ctx.restore();

  // Diamond terminals
  for (const xOff of [-120, 120]) {
    diamond(cx + xOff, arkY - 24, 4, 6, 0.45);
  }
  for (const xOff of [-105, 105]) {
    diamond(cx + xOff, arkY + 24, 3.5, 5.5, 0.4);
  }

  // ==== 16. EST. 2009 with flanking lines ====
  ctx.save();
  ctx.fillStyle = color;
  ctx.font = 'bold 22px Georgia, serif';
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';
  ctx.globalAlpha = 0.6;
  ctx.fillText('EST. 2009', cx, arkY + 48);
  ctx.restore();

  // Flanking lines
  ctx.save();
  ctx.strokeStyle = color;
  ctx.lineWidth = 0.8;
  ctx.globalAlpha = 0.3;
  ctx.beginPath();
  ctx.moveTo(cx - 80, arkY + 48);
  ctx.lineTo(cx - 50, arkY + 48);
  ctx.stroke();
  ctx.beginPath();
  ctx.moveTo(cx + 50, arkY + 48);
  ctx.lineTo(cx + 80, arkY + 48);
  ctx.stroke();
  ctx.restore();

  // ==== 17. MOTTO TEXT (below EST) ====
  arcText(
    'T R U T H  ·  A C C O U N T A B I L I T Y  ·  T R A N S P A R E N C Y',
    410, PI * 0.75, PI * 0.25, false, 12, colorLt,
  );

  // ==== 18. CARDINAL POINT STARS ====
  for (const deg of [0, 90, 180, 270]) {
    const a = (deg * PI) / 180;
    star5(cx + 410 * Math.cos(a), cy + 410 * Math.sin(a), 7, 3, 0.35);
  }

  // ==== 19. MICROPRINT RING (540 dots) ====
  ctx.save();
  ctx.fillStyle = color;
  ctx.globalAlpha = 0.1;
  for (let i = 0; i < 540; i++) {
    const a = (i * TAU) / 540;
    ctx.beginPath();
    ctx.arc(cx + 430 * Math.cos(a), cy + 430 * Math.sin(a), 1, 0, TAU);
    ctx.fill();
  }
  ctx.restore();

  // ==== 20. INNER CROSSHATCH PATTERN ====
  ctx.save();
  ctx.strokeStyle = colorMd;
  ctx.lineWidth = 0.4;
  ctx.globalAlpha = 0.05;
  ctx.setLineDash([2, 4]);
  ctx.beginPath();
  ctx.arc(cx, cy, 150, 0, TAU);
  ctx.stroke();
  ctx.beginPath();
  ctx.arc(cx, cy, 110, 0, TAU);
  ctx.stroke();
  ctx.restore();

  return canvas.toDataURL('image/png');
}
