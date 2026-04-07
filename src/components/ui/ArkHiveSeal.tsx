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
   1–5.  Quintuple serrated outer edge (5 concentric scallop rings)
   6.    Beaded border ring (180 filled dots)
   7–15. Guilloché band (9 interlocking wave passes)
   16–18. Triple rope border
   19.   Heavy outer solid ring
   20.   480 fine radial notch marks, 6-tier hierarchy
   21–22. Text ring borders + band fill
   23–24. Curved text: "IN GOD WE TRUST" / "ACCOUNTABILITY"
   25.   8 cardinal/intercardinal ornaments (proper star polygons)
   26.   16-star constellation arc
   27–29. Triple inner ring with beaded fill (120 beads)
   30.   Laurel wreaths (28 leaves per side + berries + veins + stem)
   31.   Inner field ring
   32.   Latin motto: VERITAS · LUX · JUSTITIA (full circle)
   33.   Inverted pyramid, 16 courses, brick + hatched fill
   34.   All-seeing eye: 36 iris striations, double eyelid, 11 lash lines
   35.   24 radiating glory rays
   36.   "ARKHIVE" wordmark + triple ornamental rules + diamond terminals
   37.   "EST. 2009" with decorative flanking elements
   38.   Motto ribbon: "TRUTH · ACCOUNTABILITY · TRANSPARENCY"
   39.   900-dot primary microprint simulation ring
   40.   300-dot secondary microprint ring
   41.   80-dot inner security bead ring
   42.   Concentric security hairlines (6 rings)
   43–45. Sacred geometry radial hash clusters (12 positions)
   46.   Inner decorative diamond ring (48 marks)
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

    // 28 leaves with veins
    for (let i = 0; i < 28; i++) {
      const baseAngle = (side === 'left' ? 195 : 345) + (i * 6.2 * dir);
      const rad = (baseAngle * PI) / 180;
      const brR = 58;
      const lx = 100 + brR * Math.cos(rad);
      const ly = 100 + brR * Math.sin(rad);
      const leafAngle = baseAngle + (side === 'left' ? -28 : 28);
      const leafRad = (leafAngle * PI) / 180;
      const leafLen = 7 + (14 - Math.abs(i - 14)) * 0.4;
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
      {/* === 1–5. QUINTUPLE SERRATED OUTER EDGE === */}
      {[
        { teeth: 240, rOut: 99.5, rIn: 95, sw: 0.9, op: 0.9 },
        { teeth: 160, rOut: 98.5, rIn: 96.5, sw: 0.5, op: 0.6 },
        { teeth: 360, rOut: 97.5, rIn: 96, sw: 0.2, op: 0.35 },
        { teeth: 100, rOut: 97, rIn: 95.5, sw: 0.35, op: 0.2 },
        { teeth: 480, rOut: 96.5, rIn: 95.8, sw: 0.1, op: 0.15 },
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

      {/* === 6. BEADED BORDER RING (180 dots) === */}
      {Array.from({ length: 180 }).map((_, i) => {
        const a = (i * TAU) / 180;
        return <circle key={`bead-${i}`} cx={100 + 93.5 * Math.cos(a)} cy={100 + 93.5 * Math.sin(a)} r="0.35" fill={B} opacity="0.6" />;
      })}

      {/* === 7–15. GUILLOCHÉ BAND (9 interlocking wave passes) === */}
      {[0, 1, 2, 3, 4, 5, 6, 7, 8].map(pass => {
        const r = 91.5 - pass * 0.55;
        const freq = 12 + pass * 3;
        const amp = 0.55 - pass * 0.04;
        const pts = Array.from({ length: 721 }, (_, i) => {
          const a = (i * TAU) / 720;
          const wave = Math.sin(i * freq * (TAU / 720)) * amp;
          const rr = r + wave;
          return `${i === 0 ? 'M' : 'L'} ${(100 + rr * Math.cos(a)).toFixed(2)},${(100 + rr * Math.sin(a)).toFixed(2)}`;
        }).join(' ');
        return <path key={`guil-${pass}`} d={pts} stroke={B} strokeWidth="0.15" fill="none" opacity={0.2 + pass * 0.05} />;
      })}

      {/* === 16–18. TRIPLE ROPE BORDER === */}
      {[
        { r: 87.5, sw: 2.5, dash: '3 1.5', op: 1 },
        { r: 85.8, sw: 1.2, dash: '2 2', op: 0.55 },
        { r: 84.5, sw: 0.5, dash: '1.2 2.5', op: 0.3 },
      ].map((rope, i) => (
        <circle key={`rope-${i}`} cx="100" cy="100" r={rope.r}
          stroke={B} strokeWidth={rope.sw} fill="none"
          strokeDasharray={rope.dash} opacity={rope.op} />
      ))}

      {/* === 19. HEAVY OUTER SOLID RING === */}
      <circle cx="100" cy="100" r="82.5" stroke={B} strokeWidth="2" fill="none" />

      {/* === 20. 480 FINE NOTCH MARKS (6-tier hierarchy) === */}
      {Array.from({ length: 480 }).map((_, i) => {
        const a = (i * TAU) / 480;
        const isMajor = i % 40 === 0;
        const isMid = i % 20 === 0;
        const isMinor = i % 10 === 0;
        const isSub = i % 5 === 0;
        const isTiny = i % 2 === 0;
        const inner = isMajor ? 79 : isMid ? 80 : isMinor ? 80.5 : isSub ? 81 : isTiny ? 81.5 : 82;
        return (
          <line key={`n-${i}`}
            x1={100 + inner * Math.cos(a)} y1={100 + inner * Math.sin(a)}
            x2={100 + 82.5 * Math.cos(a)} y2={100 + 82.5 * Math.sin(a)}
            stroke={B}
            strokeWidth={isMajor ? 1.4 : isMid ? 0.7 : isMinor ? 0.35 : isSub ? 0.18 : isTiny ? 0.1 : 0.05}
            opacity={isMajor ? 1 : isMid ? 0.7 : isMinor ? 0.4 : isSub ? 0.2 : isTiny ? 0.12 : 0.06}
          />
        );
      })}

      {/* === 21–22. TEXT RING BORDERS + BAND FILL === */}
      <circle cx="100" cy="100" r="79" stroke={B} strokeWidth="0.6" fill="none" opacity="0.4" />
      <circle cx="100" cy="100" r="68.5" stroke={B} strokeWidth="0.6" fill="none" opacity="0.4" />
      {/* Subtle band fill */}
      <circle cx="100" cy="100" r="78.5" stroke="none" fill={B} opacity="0.02" />

      {/* === 23–24. CURVED TEXT === */}
      <defs>
        <path id="topArc" d="M 22,100 a 78,78 0 1,1 156,0" />
        <path id="bottomArc" d="M 178,100 a 78,78 0 1,1 -156,0" />
        <path id="mottoArc" d="M 35,100 a 65,65 0 1,0 130,0" />
      </defs>
      <text fill={B} fontSize="5.5" fontFamily="Georgia, serif" fontWeight="bold" letterSpacing="3.2">
        <textPath href="#topArc" startOffset="50%" textAnchor="middle">
          IN GOD WE TRUST
        </textPath>
      </text>
      <text fill={B} fontSize="5.5" fontFamily="Georgia, serif" fontWeight="bold" letterSpacing="3.2">
        <textPath href="#bottomArc" startOffset="50%" textAnchor="middle">
          ACCOUNTABILITY
        </textPath>
      </text>

      {/* === 25. CARDINAL + INTERCARDINAL ORNAMENTS === */}
      {/* Stars only at 0° (right) and 180° (left) — NOT at 90°/270° to avoid text overlap */}
      {[0, 180].map((deg) => {
        const rad = (deg * PI) / 180;
        const sx = 100 + 74 * Math.cos(rad);
        const sy = 100 + 74 * Math.sin(rad);
        return <path key={`cstar-${deg}`} d={starPath(sx, sy, 3.2, 1.4)} fill={B} opacity="0.8" />;
      })}
      {/* Diamonds at 90°/270° and intercardinals */}
      {[45, 90, 135, 225, 270, 315].map((deg) => {
        const rad = (deg * PI) / 180;
        const dx = 100 + 74 * Math.cos(rad);
        const dy = 100 + 74 * Math.sin(rad);
        return (
          <path key={`dia-${deg}`}
            d={`M ${dx},${dy - 2.2} L ${dx + 1.6},${dy} L ${dx},${dy + 2.2} L ${dx - 1.6},${dy} Z`}
            fill={B} opacity="0.5" />
        );
      })}

      {/* === 26. 36-STAR CONSTELLATION (full circle) === */}
      {Array.from({ length: 36 }).map((_, i) => {
        const a = (i * TAU) / 36;
        const sr = 62;
        return <path key={`star13-${i}`} d={starPath(100 + sr * Math.cos(a), 100 + sr * Math.sin(a), 1.8, 0.8)} fill={B} opacity="0.6" />;
      })}

      {/* === 27–29. TRIPLE INNER RING + BEADED FILL === */}
      <circle cx="100" cy="100" r="55" stroke={B} strokeWidth="1.5" fill="none" />
      <circle cx="100" cy="100" r="53" stroke={B} strokeWidth="0.4" fill="none" opacity="0.45" />
      <circle cx="100" cy="100" r="51.5" stroke={B} strokeWidth="0.2" fill="none" opacity="0.2" />
      {/* 120 beads between rings */}
      {Array.from({ length: 120 }).map((_, i) => {
        const a = (i * TAU) / 120;
        return <circle key={`bead2-${i}`} cx={100 + 52 * Math.cos(a)} cy={100 + 52 * Math.sin(a)} r="0.28" fill={B} opacity="0.35" />;
      })}

      {/* === 30. LAUREL WREATHS (28 leaves per side + veins + berries + stem) === */}
      {laurelLeaves('left')}
      {laurelLeaves('right')}

      {/* === 31. INNER FIELD RING === */}
      <circle cx="100" cy="100" r="44" stroke={B} strokeWidth="0.6" fill="none" opacity="0.5" />

      {/* === 32. LATIN MOTTO: VERITAS · LUX · JUSTITIA (full circle) === */}
      <defs>
        <path id="latinArc" d="M 56,100 a 44,44 0 1,1 88,0 a 44,44 0 1,1 -88,0" />
      </defs>
      <text fill={B} fontSize="2.5" fontFamily="Georgia, serif" fontWeight="bold" letterSpacing="1.5" opacity="0.35">
        <textPath href="#latinArc" startOffset="0%">
          VERITAS · LUX · JUSTITIA · VERITAS · LUX · JUSTITIA · VERITAS · LUX · JUSTITIA · VERITAS · LUX · JUSTITIA
        </textPath>
      </text>

      {/* === 33. INVERTED PYRAMID (16 courses + brick + hatched fill) === */}
      <path d="M 73 68 L 127 68 L 100 120 Z" fill={B} opacity="0.03" />
      <path d="M 73 68 L 127 68 L 100 120 Z" stroke={B} strokeWidth="2" fill="none" strokeLinejoin="round" />
      {/* 16 course lines */}
      {Array.from({ length: 16 }).map((_, i) => {
        const t = (i + 1) / 17;
        const y = 68 + t * 52;
        const hw = 27 * (1 - t);
        return <line key={`course-${i}`} x1={100 - hw} y1={y} x2={100 + hw} y2={y}
          stroke={B} strokeWidth="0.3" opacity={0.4 - i * 0.02} />;
      })}
      {/* Brick pattern (vertical lines in each course) */}
      {Array.from({ length: 14 }).map((_, i) => {
        const t = (i + 1) / 15;
        const y1 = 68 + (t - 1 / 15) * 52;
        const y2 = 68 + t * 52;
        const hw = 27 * (1 - t);
        const offset = i % 2 === 0 ? 0 : hw * 0.3;
        const bricks = Math.max(2, Math.floor(hw / 3));
        return Array.from({ length: bricks }).map((_, bi) => {
          const bx = 100 - hw + offset + (bi * 2 * hw) / bricks;
          if (bx < 100 - hw || bx > 100 + hw) return null;
          return <line key={`brick-${i}-${bi}`} x1={bx} y1={y1} x2={bx} y2={y2}
            stroke={B} strokeWidth="0.06" opacity="0.06" />;
        });
      })}
      {/* Cross-hatching (diagonal lines) */}
      {Array.from({ length: 12 }).map((_, i) => {
        const t = (i + 1) / 13;
        const y = 68 + t * 52;
        const hw = 27 * (1 - t);
        return <line key={`hatch-${i}`} x1={100 - hw * 0.7} y1={y - 2} x2={100 + hw * 0.7} y2={y + 2}
          stroke={B} strokeWidth="0.06" opacity="0.06" />;
      })}

      {/* === 34. ALL-SEEING EYE (massively enhanced detail) === */}
      {/* Outer eye shape */}
      <ellipse cx="100" cy="84" rx="11.5" ry="7.5" stroke={B} strokeWidth="1.6" fill="none" />
      {/* Sclera texture (fine radial lines in eye whites) */}
      {Array.from({ length: 16 }).map((_, i) => {
        const a = PI + (i * PI) / 15;
        return <line key={`sclera-${i}`}
          x1={100 + 8 * Math.cos(a)} y1={84 + 5 * Math.sin(a)}
          x2={100 + 11 * Math.cos(a)} y2={84 + 7 * Math.sin(a)}
          stroke={B} strokeWidth="0.04" opacity="0.08" />;
      })}
      {/* Triple eyelid (upper) */}
      <path d="M 87.5,84 Q 93,76.5 100,75.5 Q 107,76.5 112.5,84" stroke={B} strokeWidth="0.6" fill="none" opacity="0.5" />
      <path d="M 86.5,84 Q 92,74.5 100,73.5 Q 108,74.5 113.5,84" stroke={B} strokeWidth="0.3" fill="none" opacity="0.25" />
      <path d="M 85.8,84 Q 91,73 100,72 Q 109,73 114.2,84" stroke={B} strokeWidth="0.15" fill="none" opacity="0.12" />
      {/* Lower eyelid */}
      <path d="M 87.5,84 Q 93,91.5 100,92.5 Q 107,91.5 112.5,84" stroke={B} strokeWidth="0.6" fill="none" opacity="0.5" />
      <path d="M 86.5,84 Q 92,93 100,94 Q 108,93 113.5,84" stroke={B} strokeWidth="0.2" fill="none" opacity="0.15" />
      {/* Corneal rim */}
      <circle cx="100" cy="84" r="6" stroke={B} strokeWidth="0.3" fill="none" opacity="0.2" />
      {/* Iris outer ring */}
      <circle cx="100" cy="84" r="5.2" stroke={B} strokeWidth="0.6" fill="none" opacity="0.5" />
      {/* Iris inner ring */}
      <circle cx="100" cy="84" r="4.2" stroke={B} strokeWidth="0.15" fill="none" opacity="0.2" />
      {/* Iris striations (36 radial lines in iris) */}
      {Array.from({ length: 36 }).map((_, i) => {
        const a = (i * TAU) / 36;
        return <line key={`iris-${i}`}
          x1={100 + 3.5 * Math.cos(a)} y1={84 + 3.5 * Math.sin(a)}
          x2={100 + 5 * Math.cos(a)} y2={84 + 5 * Math.sin(a)}
          stroke={B} strokeWidth="0.1" opacity="0.18" />;
      })}
      {/* Pupil */}
      <circle cx="100" cy="84" r="3.3" fill={B} />
      {/* Light reflections */}
      <circle cx="98.6" cy="82.5" r="1.2" fill={W} opacity="0.75" />
      <circle cx="101.5" cy="85.5" r="0.55" fill={W} opacity="0.4" />
      <circle cx="99.5" cy="86" r="0.25" fill={W} opacity="0.2" />
      {/* Tear duct detail */}
      <path d="M 88,84 Q 87,84.5 87.3,85" stroke={B} strokeWidth="0.15" fill="none" opacity="0.3" />
      <path d="M 112,84 Q 113,84.5 112.7,85" stroke={B} strokeWidth="0.15" fill="none" opacity="0.3" />
      {/* 11 lash lines (upper, varying lengths) */}
      {[-5, -4, -3, -2, -1, 0, 1, 2, 3, 4, 5].map((i) => {
        const a = (-PI / 2) + (i * 0.09);
        const lashLen = 2.8 - Math.abs(i) * 0.15;
        return <line key={`lash-${i}`}
          x1={100 + 11 * Math.cos(a)} y1={84 + 7 * Math.sin(a)}
          x2={100 + (11 + lashLen) * Math.cos(a)} y2={84 + (7 + lashLen) * Math.sin(a)}
          stroke={B} strokeWidth="0.3" opacity={0.4 - Math.abs(i) * 0.025} />;
      })}
      {/* Lower lash lines (subtle) */}
      {[-3, -2, -1, 0, 1, 2, 3].map((i) => {
        const a = (PI / 2) + (i * 0.08);
        return <line key={`llash-${i}`}
          x1={100 + 11 * Math.cos(a)} y1={84 + 7 * Math.sin(a)}
          x2={100 + 12.5 * Math.cos(a)} y2={84 + 8.2 * Math.sin(a)}
          stroke={B} strokeWidth="0.15" opacity="0.15" />;
      })}

      {/* === 35. 36 RADIATING GLORY RAYS (full 360°) === */}
      {Array.from({ length: 36 }).map((_, i) => {
        const rad = (i * TAU) / 36;
        return (
          <line key={`ray-${i}`}
            x1={100 + 12.5 * Math.cos(rad)} y1={84 + 12.5 * Math.sin(rad)}
            x2={100 + 28 * Math.cos(rad)} y2={84 + 28 * Math.sin(rad)}
            stroke={B} strokeWidth={i % 3 === 0 ? "0.7" : "0.4"} opacity={0.35 - (i % 6) * 0.02} />
        );
      })}

      {/* === 36. ARKHIVE WORDMARK + TRIPLE ORNAMENTAL RULES + DIAMONDS === */}
      <text x="100" y="133" textAnchor="middle" fill={B}
        fontSize="12" fontFamily="Georgia, serif" fontWeight="900" letterSpacing="5">ARKHIVE</text>
      {/* Upper triple rule */}
      <line x1="64" y1="125.5" x2="136" y2="125.5" stroke={B} strokeWidth="0.7" opacity="0.55" />
      <line x1="66" y1="124" x2="134" y2="124" stroke={B} strokeWidth="0.25" opacity="0.25" />
      <line x1="68" y1="122.5" x2="132" y2="122.5" stroke={B} strokeWidth="0.1" opacity="0.12" />
      {/* Lower triple rule */}
      <line x1="68" y1="139" x2="132" y2="139" stroke={B} strokeWidth="0.7" opacity="0.55" />
      <line x1="70" y1="140.5" x2="130" y2="140.5" stroke={B} strokeWidth="0.25" opacity="0.25" />
      <line x1="72" y1="142" x2="128" y2="142" stroke={B} strokeWidth="0.1" opacity="0.12" />
      {/* Diamond terminals */}
      {[64, 136].map(x => (
        <path key={`dt-${x}`} d={`M ${x},123.5 L ${x + 2},125.5 L ${x},127.5 L ${x - 2},125.5 Z`} fill={B} opacity="0.55" />
      ))}
      {[68, 132].map(x => (
        <path key={`db-${x}`} d={`M ${x},137 L ${x + 1.8},139 L ${x},141 L ${x - 1.8},139 Z`} fill={B} opacity="0.5" />
      ))}

      {/* === 37. EST. 2009 + flanking ornaments === */}
      <text x="100" y="148" textAnchor="middle" fill={B}
        fontSize="5" fontFamily="Georgia, serif" fontWeight="bold" letterSpacing="3" opacity="0.7">EST. 2009</text>
      {/* Flanking small diamonds */}
      <path d="M 77,148 L 79,147 L 81,148 L 79,149 Z" fill={B} opacity="0.3" />
      <path d="M 119,148 L 121,147 L 123,148 L 121,149 Z" fill={B} opacity="0.3" />
      {/* Flanking lines */}
      <line x1="72" y1="148" x2="76" y2="148" stroke={B} strokeWidth="0.3" opacity="0.35" />
      <line x1="124" y1="148" x2="128" y2="148" stroke={B} strokeWidth="0.3" opacity="0.35" />

      {/* === 38. MOTTO RIBBON === */}
      <text fill={B} fontSize="2.8" fontFamily="Georgia, serif" fontWeight="bold" letterSpacing="1.3" opacity="0.55">
        <textPath href="#mottoArc" startOffset="50%" textAnchor="middle">
          TRUTH · ACCOUNTABILITY · TRANSPARENCY
        </textPath>
      </text>

      {/* === 39. 900-DOT PRIMARY MICROPRINT RING === */}
      {Array.from({ length: 900 }).map((_, i) => {
        const a = (i * TAU) / 900;
        return <circle key={`mp-${i}`} cx={100 + 67 * Math.cos(a)} cy={100 + 67 * Math.sin(a)} r="0.12" fill={B} opacity="0.1" />;
      })}

      {/* === 40. 300-DOT SECONDARY MICROPRINT RING === */}
      {Array.from({ length: 300 }).map((_, i) => {
        const a = (i * TAU) / 300;
        return <circle key={`mp2-${i}`} cx={100 + 48 * Math.cos(a)} cy={100 + 48 * Math.sin(a)} r="0.08" fill={B} opacity="0.06" />;
      })}

      {/* === 41. 80-DOT INNER SECURITY BEAD RING === */}
      {Array.from({ length: 80 }).map((_, i) => {
        const a = (i * TAU) / 80;
        return <circle key={`sb-${i}`} cx={100 + 45 * Math.cos(a)} cy={100 + 45 * Math.sin(a)} r="0.25" fill={B} opacity="0.2" />;
      })}

      {/* === 42. CONCENTRIC SECURITY HAIRLINES === */}
      {[63, 64.5, 66, 69, 70.5, 72].map((r, i) => (
        <circle key={`sec-${i}`} cx="100" cy="100" r={r} stroke={B} strokeWidth="0.06" fill="none" opacity={0.04 + i * 0.01} />
      ))}

      {/* === 43–45. SACRED GEOMETRY RADIAL HASH CLUSTERS (full circle, 12 positions) === */}
      {Array.from({ length: 12 }).map((_, gi) => {
        const deg = gi * 30;
        const rad = (deg * PI) / 180;
        const hx = 100 + 47 * Math.cos(rad);
        const hy = 100 + 47 * Math.sin(rad);
        return Array.from({ length: 7 }).map((_, hi) => {
          const ha = rad + (hi - 3) * 0.06;
          return <line key={`hash-${gi}-${hi}`}
            x1={hx + 1.5 * Math.cos(ha)} y1={hy + 1.5 * Math.sin(ha)}
            x2={hx + 3.5 * Math.cos(ha)} y2={hy + 3.5 * Math.sin(ha)}
            stroke={B} strokeWidth="0.1" opacity="0.12" />;
        });
      })}

      {/* === 46. INNER DECORATIVE DIAMOND RING (48 marks, full circle) === */}
      {Array.from({ length: 48 }).map((_, i) => {
        const a = (i * TAU) / 48;
        const x = 100 + 46 * Math.cos(a);
        const y = 100 + 46 * Math.sin(a);
        return <path key={`idm-${i}`}
          d={`M ${x},${y - 0.8} L ${x + 0.5},${y} L ${x},${y + 0.8} L ${x - 0.5},${y} Z`}
          fill={B} opacity="0.2" />;
      })}
    </svg>
  );
}


/* ================================================================
   MASTERWORK GOVERNMENT-STYLE SEAL (Canvas → PNG for PDF)
   1800px resolution. Pure black (#000000) and white (#ffffff) only.
   No grays. 45+ layers of intricate detail.
   ================================================================ */

export async function getArkHiveSealPngDataUri(): Promise<string> {
  const size = 1800;
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

    // Branch stem — arcs through the same side as leaves
    ctx.save();
    ctx.strokeStyle = B;
    ctx.lineWidth = 2.5;
    ctx.globalAlpha = 0.5;
    ctx.beginPath();
    const stemStart = side === 'left' ? PI * 1.09 : PI * 1.91;
    for (let t = 0; t <= 1; t += 0.01) {
      const a = stemStart + t * PI * 1.01 * dir;
      const px = cx + 495 * Math.cos(a);
      const py = cy + 495 * Math.sin(a);
      if (t === 0) ctx.moveTo(px, py); else ctx.lineTo(px, py);
    }
    ctx.stroke();
    ctx.restore();

    // 30 leaves with veins + side veins
    // Angles match SVG: LEFT from 195° CW to ~15°, RIGHT from 345° CCW to ~165°
    // Gap at top of seal (traditional wreath opening)
    for (let i = 0; i < 30; i++) {
      const baseDeg = (side === 'left' ? 195 : 345) + (i * 6.0 * dir);
      const baseA = (baseDeg * PI) / 180;
      const branchR = 495;
      const bx = cx + branchR * Math.cos(baseA);
      const by = cy + branchR * Math.sin(baseA);
      const leafA = baseA + (side === 'left' ? -0.49 : 0.49);
      const leafLen = 35 + (15 - Math.abs(i - 15)) * 2;
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
      if (leafLen > 37) {
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

  // ==== 1–5. QUINTUPLE SERRATED OUTER EDGE ====
  for (const cfg of [
    { teeth: 360, rOut: 890, rIn: 860, lw: 3.5, alpha: 0.95 },
    { teeth: 240, rOut: 886, rIn: 868, lw: 2, alpha: 0.65 },
    { teeth: 480, rOut: 878, rIn: 868, lw: 0.8, alpha: 0.4 },
    { teeth: 160, rOut: 875, rIn: 866, lw: 1, alpha: 0.25 },
    { teeth: 600, rOut: 872, rIn: 866, lw: 0.4, alpha: 0.18 },
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

  // ==== 6. BEADED BORDER (280 filled dots) ====
  for (let i = 0; i < 280; i++) {
    const a = (i * TAU) / 280;
    ctx.save();
    ctx.fillStyle = B;
    ctx.globalAlpha = 0.65;
    ctx.beginPath();
    ctx.arc(cx + 855 * Math.cos(a), cy + 855 * Math.sin(a), 3.2, 0, TAU);
    ctx.fill();
    ctx.restore();
  }

  // ==== 7–15. GUILLOCHÉ BAND (9 interlocking wave passes) ====
  for (let pass = 0; pass < 9; pass++) {
    const r = 842 - pass * 4;
    const freq = 14 + pass * 3;
    const amp = 5 - pass * 0.35;
    ctx.save();
    ctx.strokeStyle = B;
    ctx.lineWidth = 0.8;
    ctx.globalAlpha = 0.25 + pass * 0.05;
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

  // ==== 16–18. TRIPLE ROPE BORDER ====
  circle(798, 10, 1, [14, 7]);
  circle(786, 5, 0.6, [8, 7]);
  circle(778, 2.5, 0.35, [5, 9]);

  // ==== 19. HEAVY OUTER SOLID RING ====
  circle(767, 8, 1);

  // ==== 20. 600 FINE NOTCH MARKS (6-tier) ====
  for (let i = 0; i < 600; i++) {
    const a = (i * TAU) / 600;
    const isMajor = i % 50 === 0;
    const isMid = i % 25 === 0;
    const isMinor = i % 10 === 0;
    const isSub = i % 5 === 0;
    const isTiny = i % 2 === 0;
    const inner = isMajor ? 720 : isMid ? 732 : isMinor ? 740 : isSub ? 746 : isTiny ? 751 : 756;
    ctx.save();
    ctx.strokeStyle = B;
    ctx.lineWidth = isMajor ? 4.5 : isMid ? 2.5 : isMinor ? 1.2 : isSub ? 0.6 : isTiny ? 0.3 : 0.15;
    ctx.globalAlpha = isMajor ? 1 : isMid ? 0.75 : isMinor ? 0.45 : isSub ? 0.25 : isTiny ? 0.14 : 0.07;
    ctx.beginPath();
    ctx.moveTo(cx + inner * Math.cos(a), cy + inner * Math.sin(a));
    ctx.lineTo(cx + 767 * Math.cos(a), cy + 767 * Math.sin(a));
    ctx.stroke();
    ctx.restore();
  }

  // ==== 21–22. TEXT BAND BORDERS ====
  circle(720, 4, 0.8);
  circle(635, 4, 0.8);

  // Subtle band fill
  ctx.save();
  ctx.globalAlpha = 0.02;
  ctx.fillStyle = B;
  ctx.beginPath();
  ctx.arc(cx, cy, 720, 0, TAU);
  ctx.arc(cx, cy, 635, 0, TAU, true);
  ctx.fill();
  ctx.restore();

  // ==== 23–24. CURVED TEXT ====
  arcText(
    'I N   G O D   W E   T R U S T',
    678, -PI * 0.72, -PI * 0.28, true, 42,
  );
  arcText(
    'A C C O U N T A B I L I T Y',
    678, PI * 0.72, PI * 0.28, false, 42,
  );

  // ==== 25. CARDINAL STARS + INTERCARDINAL DIAMONDS ====
  // Stars only at 0° (right) and 180° (left) — NOT at 90/270 to avoid text overlap
  for (const deg of [0, 180]) {
    const a = (deg * PI) / 180;
    star5(cx + 678 * Math.cos(a), cy + 678 * Math.sin(a), 22, 10, 0.8);
  }
  // Diamonds at 90°/270° (where text is) plus intercardinals
  for (const deg of [45, 90, 135, 225, 270, 315]) {
    const a = (deg * PI) / 180;
    diamond(cx + 678 * Math.cos(a), cy + 678 * Math.sin(a), 8, 13, 0.5);
  }

  // ==== 26. 36-STAR CONSTELLATION (full circle) ====
  for (let i = 0; i < 36; i++) {
    const a = (i * TAU) / 36;
    star5(cx + 570 * Math.cos(a), cy + 570 * Math.sin(a), 10, 4.5, 0.55);
  }

  // ==== 27–29. TRIPLE INNER RING + BEADED FILL ====
  circle(540, 6, 1);
  circle(528, 2.5, 0.5);
  circle(522, 1.2, 0.25);
  // 200 beads between rings
  for (let i = 0; i < 200; i++) {
    const a = (i * TAU) / 200;
    ctx.save();
    ctx.fillStyle = B;
    ctx.globalAlpha = 0.35;
    ctx.beginPath();
    ctx.arc(cx + 533 * Math.cos(a), cy + 533 * Math.sin(a), 2.2, 0, TAU);
    ctx.fill();
    ctx.restore();
  }

  // ==== 30. LAUREL WREATHS (30 leaves per side + veins + berries + stem) ====
  laurelBranch('left');
  laurelBranch('right');

  // ==== 31. INNER FIELD RING ====
  circle(440, 4, 0.6);
  circle(435, 1, 0.2);

  // ==== 32. LATIN MOTTO RING (full circle, repeated) ====
  arcText(
    'V E R I T A S  \u00b7  L U X  \u00b7  J U S T I T I A  \u00b7  V E R I T A S  \u00b7  L U X  \u00b7  J U S T I T I A  \u00b7  V E R I T A S  \u00b7  L U X  \u00b7  J U S T I T I A',
    455, 0, TAU * 0.97, true, 14, 0.35,
  );

  // ==== 32b. INNER DECORATIVE DIAMOND RING (48 marks, full circle) ====
  for (let i = 0; i < 48; i++) {
    const a = (i * TAU) / 48;
    diamond(cx + 450 * Math.cos(a), cy + 450 * Math.sin(a), 3, 5, 0.2);
  }

  // ==== 33. INVERTED PYRAMID (16 courses + brick + cross-hatch) ====
  const pyrTop = cy - 160;
  const pyrBot = cy + 140;
  const pyrHalfW = 180;

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
  ctx.lineWidth = 6;
  ctx.lineJoin = 'round';
  ctx.beginPath();
  ctx.moveTo(cx - pyrHalfW, pyrTop);
  ctx.lineTo(cx + pyrHalfW, pyrTop);
  ctx.lineTo(cx, pyrBot);
  ctx.closePath();
  ctx.stroke();
  ctx.restore();

  // 16 course lines
  for (let i = 1; i <= 16; i++) {
    const t = i / 17;
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

  // Cross-hatch + brick pattern
  for (let i = 1; i <= 14; i++) {
    const t = i / 15;
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

  // Brick vertical lines (alternating offset per course)
  for (let i = 1; i <= 16; i++) {
    const t = i / 17;
    const y = pyrTop + t * (pyrBot - pyrTop);
    const nextT = (i + 1) / 17;
    const nextY = pyrTop + nextT * (pyrBot - pyrTop);
    const halfW = pyrHalfW * (1 - t);
    const brickCount = Math.max(2, Math.floor(halfW / 20));
    const offset = i % 2 === 0 ? halfW / brickCount / 2 : 0;
    for (let b = 1; b < brickCount; b++) {
      const bx = cx - halfW + (b * 2 * halfW) / brickCount + offset;
      if (bx < cx - halfW || bx > cx + halfW) continue;
      ctx.save();
      ctx.strokeStyle = B;
      ctx.lineWidth = 0.3;
      ctx.globalAlpha = 0.04;
      ctx.beginPath();
      ctx.moveTo(bx, y);
      ctx.lineTo(bx, Math.min(nextY, y + 20));
      ctx.stroke();
      ctx.restore();
    }
  }

  // ==== 34. ALL-SEEING EYE (massively enhanced) ====
  const eyeY = cy - 65;

  // Outer eye shape
  ctx.save();
  ctx.strokeStyle = B;
  ctx.lineWidth = 5;
  ctx.beginPath();
  ctx.ellipse(cx, eyeY, 65, 42, 0, 0, TAU);
  ctx.stroke();
  ctx.restore();

  // Second eye outline for weight
  ctx.save();
  ctx.strokeStyle = B;
  ctx.lineWidth = 1.5;
  ctx.globalAlpha = 0.3;
  ctx.beginPath();
  ctx.ellipse(cx, eyeY, 68, 45, 0, 0, TAU);
  ctx.stroke();
  ctx.restore();

  // Sclera texture (fine radial lines in eye whites)
  for (let i = 0; i < 16; i++) {
    const a = (i * TAU) / 16;
    ctx.save();
    ctx.strokeStyle = B;
    ctx.lineWidth = 0.3;
    ctx.globalAlpha = 0.04;
    ctx.beginPath();
    ctx.moveTo(cx + 28 * Math.cos(a), eyeY + 18 * Math.sin(a));
    ctx.lineTo(cx + 62 * Math.cos(a), eyeY + 40 * Math.sin(a));
    ctx.stroke();
    ctx.restore();
  }

  // Triple eyelid (upper)
  ctx.save();
  ctx.strokeStyle = B;
  ctx.lineWidth = 2;
  ctx.globalAlpha = 0.5;
  ctx.beginPath();
  ctx.moveTo(cx - 68, eyeY);
  ctx.quadraticCurveTo(cx, eyeY - 55, cx + 68, eyeY);
  ctx.stroke();
  ctx.restore();

  ctx.save();
  ctx.strokeStyle = B;
  ctx.lineWidth = 1;
  ctx.globalAlpha = 0.25;
  ctx.beginPath();
  ctx.moveTo(cx - 72, eyeY);
  ctx.quadraticCurveTo(cx, eyeY - 63, cx + 72, eyeY);
  ctx.stroke();
  ctx.restore();

  ctx.save();
  ctx.strokeStyle = B;
  ctx.lineWidth = 0.5;
  ctx.globalAlpha = 0.12;
  ctx.beginPath();
  ctx.moveTo(cx - 75, eyeY);
  ctx.quadraticCurveTo(cx, eyeY - 70, cx + 75, eyeY);
  ctx.stroke();
  ctx.restore();

  // Lower eyelid (double)
  ctx.save();
  ctx.strokeStyle = B;
  ctx.lineWidth = 2;
  ctx.globalAlpha = 0.5;
  ctx.beginPath();
  ctx.moveTo(cx - 68, eyeY);
  ctx.quadraticCurveTo(cx, eyeY + 55, cx + 68, eyeY);
  ctx.stroke();
  ctx.restore();

  ctx.save();
  ctx.strokeStyle = B;
  ctx.lineWidth = 0.6;
  ctx.globalAlpha = 0.15;
  ctx.beginPath();
  ctx.moveTo(cx - 72, eyeY);
  ctx.quadraticCurveTo(cx, eyeY + 62, cx + 72, eyeY);
  ctx.stroke();
  ctx.restore();

  // Corneal rim
  ctx.save();
  ctx.strokeStyle = B;
  ctx.lineWidth = 0.8;
  ctx.globalAlpha = 0.2;
  ctx.beginPath();
  ctx.arc(cx, eyeY, 28, 0, TAU);
  ctx.stroke();
  ctx.restore();

  // Iris outer ring
  ctx.save();
  ctx.strokeStyle = B;
  ctx.lineWidth = 3;
  ctx.globalAlpha = 0.6;
  ctx.beginPath();
  ctx.arc(cx, eyeY, 25, 0, TAU);
  ctx.stroke();
  ctx.restore();

  // Iris inner ring
  ctx.save();
  ctx.strokeStyle = B;
  ctx.lineWidth = 1;
  ctx.globalAlpha = 0.25;
  ctx.beginPath();
  ctx.arc(cx, eyeY, 20, 0, TAU);
  ctx.stroke();
  ctx.restore();

  // Iris striations (64 radial lines)
  for (let i = 0; i < 64; i++) {
    const a = (i * TAU) / 64;
    ctx.save();
    ctx.strokeStyle = B;
    ctx.lineWidth = 0.4;
    ctx.globalAlpha = 0.15;
    ctx.beginPath();
    ctx.moveTo(cx + 16 * Math.cos(a), eyeY + 16 * Math.sin(a));
    ctx.lineTo(cx + 24 * Math.cos(a), eyeY + 24 * Math.sin(a));
    ctx.stroke();
    ctx.restore();
  }

  // Pupil
  ctx.save();
  ctx.fillStyle = B;
  ctx.beginPath();
  ctx.arc(cx, eyeY, 15, 0, TAU);
  ctx.fill();
  ctx.restore();

  // Light reflections (3 spots)
  ctx.save();
  ctx.fillStyle = W;
  ctx.globalAlpha = 0.75;
  ctx.beginPath();
  ctx.arc(cx - 5, eyeY - 5, 5, 0, TAU);
  ctx.fill();
  ctx.restore();

  ctx.save();
  ctx.fillStyle = W;
  ctx.globalAlpha = 0.4;
  ctx.beginPath();
  ctx.arc(cx + 6, eyeY + 6, 2.5, 0, TAU);
  ctx.fill();
  ctx.restore();

  ctx.save();
  ctx.fillStyle = W;
  ctx.globalAlpha = 0.2;
  ctx.beginPath();
  ctx.arc(cx - 2, eyeY + 8, 1.5, 0, TAU);
  ctx.fill();
  ctx.restore();

  // Tear duct detail
  ctx.save();
  ctx.strokeStyle = B;
  ctx.lineWidth = 0.5;
  ctx.globalAlpha = 0.3;
  ctx.beginPath();
  ctx.moveTo(cx - 63, eyeY);
  ctx.quadraticCurveTo(cx - 65, eyeY + 3, cx - 63, eyeY + 4);
  ctx.stroke();
  ctx.beginPath();
  ctx.moveTo(cx + 63, eyeY);
  ctx.quadraticCurveTo(cx + 65, eyeY + 3, cx + 63, eyeY + 4);
  ctx.stroke();
  ctx.restore();

  // 11 lash lines (upper, varying lengths)
  for (let i = -5; i <= 5; i++) {
    const a = -PI / 2 + i * 0.09;
    const lashLen = 12 - Math.abs(i) * 0.8;
    ctx.save();
    ctx.strokeStyle = B;
    ctx.lineWidth = 1.2;
    ctx.globalAlpha = 0.4 - Math.abs(i) * 0.025;
    ctx.beginPath();
    ctx.moveTo(cx + 62 * Math.cos(a), eyeY + 40 * Math.sin(a));
    ctx.lineTo(cx + (62 + lashLen) * Math.cos(a), eyeY + (40 + lashLen) * Math.sin(a));
    ctx.stroke();
    ctx.restore();
  }

  // 7 lower lash lines (subtle)
  for (let i = -3; i <= 3; i++) {
    const a = PI / 2 + i * 0.08;
    ctx.save();
    ctx.strokeStyle = B;
    ctx.lineWidth = 0.6;
    ctx.globalAlpha = 0.15;
    ctx.beginPath();
    ctx.moveTo(cx + 62 * Math.cos(a), eyeY + 40 * Math.sin(a));
    ctx.lineTo(cx + 70 * Math.cos(a), eyeY + 46 * Math.sin(a));
    ctx.stroke();
    ctx.restore();
  }

  // ==== 35. 48 RADIATING GLORY RAYS (full 360°) ====
  for (let i = 0; i < 48; i++) {
    const a = (i * TAU) / 48;
    ctx.save();
    ctx.strokeStyle = B;
    ctx.lineWidth = i % 3 === 0 ? 3 : i % 2 === 0 ? 2 : 1;
    ctx.globalAlpha = 0.4 - (i % 6) * 0.018;
    ctx.beginPath();
    ctx.moveTo(cx + 48 * Math.cos(a), eyeY + 48 * Math.sin(a));
    ctx.lineTo(cx + 135 * Math.cos(a), eyeY + 135 * Math.sin(a));
    ctx.stroke();
    ctx.restore();
  }

  // ==== 36. ARKHIVE TEXT ====
  ctx.save();
  ctx.fillStyle = B;
  ctx.font = '900 78px Georgia, serif';
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';
  const arkY = cy + 225;
  const arkSpacing = 66;
  const arkText = 'ARKHIVE';
  const arkStartX = cx - ((arkText.length - 1) * arkSpacing) / 2;
  arkText.split('').forEach((ch, i) => {
    ctx.fillText(ch, arkStartX + i * arkSpacing, arkY);
  });
  ctx.restore();

  // Triple ornamental rules with diamond terminals
  // Upper rules
  ctx.save();
  ctx.strokeStyle = B;
  ctx.lineWidth = 2;
  ctx.globalAlpha = 0.55;
  ctx.beginPath();
  ctx.moveTo(cx - 180, arkY - 32);
  ctx.lineTo(cx + 180, arkY - 32);
  ctx.stroke();
  ctx.restore();
  ctx.save();
  ctx.strokeStyle = B;
  ctx.lineWidth = 0.8;
  ctx.globalAlpha = 0.3;
  ctx.beginPath();
  ctx.moveTo(cx - 175, arkY - 37);
  ctx.lineTo(cx + 175, arkY - 37);
  ctx.stroke();
  ctx.restore();
  ctx.save();
  ctx.strokeStyle = B;
  ctx.lineWidth = 0.3;
  ctx.globalAlpha = 0.15;
  ctx.beginPath();
  ctx.moveTo(cx - 170, arkY - 41);
  ctx.lineTo(cx + 170, arkY - 41);
  ctx.stroke();
  ctx.restore();

  // Lower rules
  ctx.save();
  ctx.strokeStyle = B;
  ctx.lineWidth = 2;
  ctx.globalAlpha = 0.55;
  ctx.beginPath();
  ctx.moveTo(cx - 160, arkY + 32);
  ctx.lineTo(cx + 160, arkY + 32);
  ctx.stroke();
  ctx.restore();
  ctx.save();
  ctx.strokeStyle = B;
  ctx.lineWidth = 0.8;
  ctx.globalAlpha = 0.3;
  ctx.beginPath();
  ctx.moveTo(cx - 155, arkY + 37);
  ctx.lineTo(cx + 155, arkY + 37);
  ctx.stroke();
  ctx.restore();
  ctx.save();
  ctx.strokeStyle = B;
  ctx.lineWidth = 0.3;
  ctx.globalAlpha = 0.15;
  ctx.beginPath();
  ctx.moveTo(cx - 150, arkY + 41);
  ctx.lineTo(cx + 150, arkY + 41);
  ctx.stroke();
  ctx.restore();

  // Diamond terminals
  for (const xOff of [-180, 180]) {
    diamond(cx + xOff, arkY - 32, 6, 8, 0.6);
  }
  for (const xOff of [-160, 160]) {
    diamond(cx + xOff, arkY + 32, 5.5, 7.5, 0.55);
  }

  // ==== 37. EST. 2009 + flanking ornaments ====
  ctx.save();
  ctx.fillStyle = B;
  ctx.font = 'bold 30px Georgia, serif';
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';
  ctx.globalAlpha = 0.7;
  ctx.fillText('EST. 2009', cx, arkY + 72);
  ctx.restore();

  // Flanking diamonds
  diamond(cx - 85, arkY + 72, 5, 6, 0.35);
  diamond(cx + 85, arkY + 72, 5, 6, 0.35);

  // Flanking lines
  ctx.save();
  ctx.strokeStyle = B;
  ctx.lineWidth = 1;
  ctx.globalAlpha = 0.35;
  ctx.beginPath();
  ctx.moveTo(cx - 112, arkY + 72);
  ctx.lineTo(cx - 92, arkY + 72);
  ctx.stroke();
  ctx.beginPath();
  ctx.moveTo(cx + 92, arkY + 72);
  ctx.lineTo(cx + 112, arkY + 72);
  ctx.stroke();
  ctx.restore();

  // ==== 38. MOTTO TEXT ====
  arcText(
    'T R U T H  ·  A C C O U N T A B I L I T Y  ·  T R A N S P A R E N C Y',
    600, PI * 0.76, PI * 0.24, false, 16, 0.55,
  );

  // ==== 39. CARDINAL POINT STARS ON INNER RING ====
  for (const deg of [0, 90, 180, 270]) {
    const a = (deg * PI) / 180;
    star5(cx + 600 * Math.cos(a), cy + 600 * Math.sin(a), 11, 5, 0.4);
  }

  // ==== 40. 1200-DOT PRIMARY MICROPRINT RING ====
  ctx.save();
  ctx.fillStyle = B;
  ctx.globalAlpha = 0.12;
  for (let i = 0; i < 1200; i++) {
    const a = (i * TAU) / 1200;
    ctx.beginPath();
    ctx.arc(cx + 620 * Math.cos(a), cy + 620 * Math.sin(a), 1.6, 0, TAU);
    ctx.fill();
  }
  ctx.restore();

  // ==== 41. 600-DOT SECONDARY MICROPRINT RING ====
  ctx.save();
  ctx.fillStyle = B;
  ctx.globalAlpha = 0.08;
  for (let i = 0; i < 600; i++) {
    const a = (i * TAU) / 600;
    ctx.beginPath();
    ctx.arc(cx + 505 * Math.cos(a), cy + 505 * Math.sin(a), 1.2, 0, TAU);
    ctx.fill();
  }
  ctx.restore();

  // ==== 42. 100-DOT INNER SECURITY BEAD RING ====
  ctx.save();
  ctx.fillStyle = B;
  ctx.globalAlpha = 0.18;
  for (let i = 0; i < 100; i++) {
    const a = (i * TAU) / 100;
    ctx.beginPath();
    ctx.arc(cx + 460 * Math.cos(a), cy + 460 * Math.sin(a), 2.2, 0, TAU);
    ctx.fill();
  }
  ctx.restore();

  // ==== 43. CONCENTRIC SECURITY HAIRLINES ====
  for (const r of [485, 493, 505, 515, 550, 558, 575, 583, 610, 625]) {
    circle(r, 0.35, 0.05);
  }

  // ==== 44–45. SACRED GEOMETRY RADIAL HASH CLUSTERS ====
  for (let gi = 0; gi < 12; gi++) {
    const deg = gi * 30;
    const rad = (deg * PI) / 180;
    const hx = cx + 470 * Math.cos(rad);
    const hy = cy + 470 * Math.sin(rad);
    for (let hi = -3; hi <= 3; hi++) {
      const ha = rad + hi * 0.06;
      ctx.save();
      ctx.strokeStyle = B;
      ctx.lineWidth = 0.4;
      ctx.globalAlpha = 0.08;
      ctx.beginPath();
      ctx.moveTo(hx + 8 * Math.cos(ha), hy + 8 * Math.sin(ha));
      ctx.lineTo(hx + 22 * Math.cos(ha), hy + 22 * Math.sin(ha));
      ctx.stroke();
      ctx.restore();
    }
  }

  return canvas.toDataURL('image/png');
}
