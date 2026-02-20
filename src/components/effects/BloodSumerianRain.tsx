'use client';

import { useEffect, useRef } from 'react';

// Blood-red Sumerian matrix rain background.
// Lightweight canvas animation + faint thematic word overlay (investigation, evidence, archive).

export default function BloodSumerianRain() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current!;
    const ctx = canvas.getContext('2d')!;
    let w = (canvas.width = window.innerWidth);
    let h = (canvas.height = window.innerHeight);

    const cols = Math.floor(w / 18);
    const yPositions = new Array(cols).fill(0).map(() => Math.random() * h);

    // glyphs that evoke cuneiform/sumerian + fallback characters
    const glyphs = ['𒀭', '𒁹', '𒈨', '𒊭', '𒀱', '⸮', 'ᚠ', 'ᚢ', 'ᚦ', '▲', '◆', '▴', '◧', '✶', 'Ξ'];

    let rafId: number;
    let last = performance.now();

    function resize() {
      w = canvas.width = window.innerWidth;
      h = canvas.height = window.innerHeight;
    }

    function draw(now: number) {
      const dt = now - last;
      last = now;

      // translucent black to create trail effect
      ctx.fillStyle = 'rgba(0,0,0,0.15)';
      ctx.fillRect(0, 0, w, h);

      ctx.font = '16px ui-monospace, SFMono-Regular, Menlo, Monaco, monospace';
      ctx.textAlign = 'center';

      for (let i = 0; i < cols; i++) {
        const x = i * 18 + 9; // center offset
        const glyph = glyphs[Math.floor(Math.random() * glyphs.length)];

        const y = yPositions[i];

        // blood-red glow for lead glyph
        ctx.fillStyle = 'rgba(220,24,24,0.95)';
        ctx.shadowColor = 'rgba(220,24,24,0.9)';
        ctx.shadowBlur = 8;
        ctx.fillText(glyph, x, y);

        // dim trailing characters (slightly above)
        ctx.fillStyle = 'rgba(120,8,8,0.35)';
        ctx.shadowBlur = 0;
        ctx.fillText(glyphs[(Math.floor(Math.random() * glyphs.length))], x, y - 18);

        // advance y
        yPositions[i] = (y + 18 + Math.random() * 10 * (dt / 16)) % (h + 100);
      }

      rafId = requestAnimationFrame(draw);
    }

    window.addEventListener('resize', resize);
    rafId = requestAnimationFrame(draw);

    return () => {
      window.removeEventListener('resize', resize);
      cancelAnimationFrame(rafId);
    };
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      <canvas ref={canvasRef} className="w-full h-full block" />

      {/* Thematic faint word overlay (investigative context) */}
      <div className="absolute inset-0 opacity-8 mix-blend-screen pointer-events-none" style={{ display: 'grid', placeItems: 'center' }}>
        <div style={{ transform: 'rotate(-12deg)', opacity: 0.06, color: '#7b1111', fontSize: 120, fontWeight: 900, letterSpacing: '0.3em' }}>
          INVESTIGATION • EVIDENCE • ARCHIVE
        </div>
      </div>

      {/* subtle vignette */}
      <div className="absolute inset-0" style={{ background: 'radial-gradient(ellipse at center, rgba(0,0,0,0) 30%, rgba(0,0,0,0.6) 80%)' }} />
    </div>
  );
}
