'use client';

import { useEffect, useRef } from 'react';

// Sumerian cuneiform Unicode block (U+12000-U+1237F) + extras
const SUMERIAN_CHARS = [
  '𒀀','𒀁','𒀂','𒀃','𒀄','𒀅','𒀆','𒀇','𒀈','𒀉','𒀊','𒀋','𒀌','𒀍','𒀎','𒀏',
  '𒀐','𒀑','𒀒','𒀓','𒀔','𒀕','𒀖','𒀗','𒀘','𒀙','𒀚','𒀛','𒀜','𒀝','𒀞','𒀟',
  '𒀠','𒀡','𒀢','𒀣','𒀤','𒀥','𒀦','𒀧','𒀨','𒀩','𒀪','𒀫','𒀬','𒀭','𒀮','𒀯',
  '𒀰','𒀱','𒀲','𒀳','𒀴','𒀵','𒀶','𒀷','𒁀','𒁁','𒁂','𒁃','𒁄','𒁅','𒁆','𒁇',
  '𒁈','𒁉','𒁊','𒁋','𒁌','𒁍','𒁎','𒁏','𒁐','𒁑','𒁒','𒁓','𒁔','𒁕','𒁖','𒁗',
  '𒂀','𒂁','𒂂','𒂃','𒂄','𒂅','𒂆','𒂇','𒂈','𒂉','𒂊','𒂋','𒂌','𒂍','𒂎','𒂏',
  '𒃀','𒃁','𒃂','𒃃','𒃄','𒃅','𒃆','𒃇','𒃈','𒃉','𒃊','𒃋','𒃌','𒃍','𒃎','𒃏',
  '𒄀','𒄁','𒄂','𒄃','𒄄','𒄅','𒄆','𒄇','𒄈','𒄉','𒄊','𒄋','𒄌','𒄍','𒄎','𒄏',
  '𒅀','𒅁','𒅂','𒅃','𒅄','𒅅','𒅆','𒅇','𒅈','𒅉','𒅊','𒅋','𒅌','𒅍','𒅎','𒅏',
  '𒆀','𒆁','𒆂','𒆃','𒆄','𒆅','𒆆','𒆇','𒆈','𒆉','𒆊','𒆋','𒆌','𒆍','𒆎','𒆏',
];

interface Column {
  x: number;
  y: number;
  speed: number;
  chars: string[];
  length: number;
  opacity: number;
}

export default function SumerianMatrixRain() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const columnsRef = useRef<Column[]>([]);
  const animRef = useRef<number>(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const CHAR_SIZE = 16;
    let width = window.innerWidth;
    let height = window.innerHeight;

    const resize = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width;
      canvas.height = height;
      initColumns();
    };

    const randomChar = () => SUMERIAN_CHARS[Math.floor(Math.random() * SUMERIAN_CHARS.length)];

    const initColumns = () => {
      const numCols = Math.ceil(width / CHAR_SIZE);
      columnsRef.current = [];
      for (let i = 0; i < numCols; i++) {
        columnsRef.current.push({
          x: i * CHAR_SIZE,
          y: Math.random() * height * -1,
          speed: 0.5 + Math.random() * 2,
          chars: Array.from({ length: 15 + Math.floor(Math.random() * 20) }, randomChar),
          length: 15 + Math.floor(Math.random() * 20),
          opacity: 0.3 + Math.random() * 0.5,
        });
      }
    };

    resize();
    window.addEventListener('resize', resize);

    let lastTime = 0;
    const FPS = 20; // Keep it low for performance
    const interval = 1000 / FPS;

    const draw = (time: number) => {
      animRef.current = requestAnimationFrame(draw);

      const delta = time - lastTime;
      if (delta < interval) return;
      lastTime = time - (delta % interval);

      // Semi-transparent black to create trail effect
      ctx.fillStyle = 'rgba(0, 0, 0, 0.08)';
      ctx.fillRect(0, 0, width, height);

      const columns = columnsRef.current;
      for (let i = 0; i < columns.length; i++) {
        const col = columns[i];

        for (let j = 0; j < col.chars.length; j++) {
          const charY = col.y + j * CHAR_SIZE;
          if (charY < -CHAR_SIZE || charY > height + CHAR_SIZE) continue;

          // Head char is bright blood-red, rest fade to dark red
          const progress = j / col.chars.length;
          if (j === col.chars.length - 1) {
            // Leading character - bright
            ctx.fillStyle = `rgba(239, 68, 68, ${col.opacity * 1.0})`;
            ctx.shadowColor = '#ef4444';
            ctx.shadowBlur = 8;
          } else if (progress > 0.7) {
            // Near head - medium bright
            ctx.fillStyle = `rgba(220, 38, 38, ${col.opacity * 0.8})`;
            ctx.shadowColor = 'transparent';
            ctx.shadowBlur = 0;
          } else {
            // Tail - dark and fading
            const fade = 0.15 + progress * 0.4;
            ctx.fillStyle = `rgba(127, 29, 29, ${col.opacity * fade})`;
            ctx.shadowColor = 'transparent';
            ctx.shadowBlur = 0;
          }

          ctx.font = `${CHAR_SIZE}px serif`;
          ctx.fillText(col.chars[j], col.x, charY);

          // Randomly mutate characters
          if (Math.random() < 0.02) {
            col.chars[j] = randomChar();
          }
        }

        col.y += col.speed * CHAR_SIZE * 0.15;

        // Reset when off screen
        if (col.y - col.chars.length * CHAR_SIZE > height) {
          col.y = -col.length * CHAR_SIZE - Math.random() * height * 0.5;
          col.speed = 0.5 + Math.random() * 2;
          col.opacity = 0.3 + Math.random() * 0.5;
          col.chars = Array.from({ length: col.length }, randomChar);
        }
      }

      // Reset shadow
      ctx.shadowBlur = 0;
    };

    animRef.current = requestAnimationFrame(draw);

    return () => {
      cancelAnimationFrame(animRef.current);
      window.removeEventListener('resize', resize);
    };
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-0">
      {/* Pure black base */}
      <div className="absolute inset-0 bg-black" />
      {/* Canvas for matrix rain */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0"
        style={{ opacity: 0.7 }}
      />
      {/* Vignette overlay so edges are darker */}
      <div
        className="absolute inset-0"
        style={{
          background: 'radial-gradient(ellipse at center, transparent 0%, rgba(0,0,0,0.5) 60%, rgba(0,0,0,0.85) 100%)',
        }}
      />
    </div>
  );
}
