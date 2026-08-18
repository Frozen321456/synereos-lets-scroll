'use client';

import { useEffect, useRef } from 'react';

export default function HeroCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = document.getElementById('hero-canvas') as HTMLCanvasElement;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let W = canvas.clientWidth;
    let H = canvas.clientHeight;
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    canvas.width = W * 2;
    canvas.height = H * 2;
    ctx.setTransform(2, 0, 0, 2, 0, 0);

    interface Point {
      x: number;
      y: number;
      vx: number;
      vy: number;
      r: number;
    }

    let points: Point[] = [];

    function init() {
      const W = canvas.clientWidth;
      const H = canvas.clientHeight;
      points = [];
      for (let i = 0; i < 56; i++) {
        points.push({
          x: Math.random() * W,
          y: Math.random() * H,
          vx: (Math.random() - 0.5) * 0.18,
          vy: (Math.random() - 0.5) * 0.18,
          r: Math.random() * 1.6 + 0.6
        });
      }
    }

    function step() {
      const W = canvas.clientWidth;
      const H = canvas.clientHeight;
      ctx.clearRect(0, 0, W, H);
      
      points.forEach(p => {
        p.x += p.vx; p.y += p.vy;
        if (p.x < 0 || p.x > W) p.vx *= -1;
        if (p.y < 0 || p.y > H) p.vy *= -1;
      });
      
      for (let i = 0; i < points.length; i++) {
        for (let j = i + 1; j < points.length; j++) {
          const a = points[i], b = points[j];
          const dx = a.x - b.x, dy = a.y - b.y;
          const d = Math.sqrt(dx * dx + dy * dy);
          const max = 170;
          if (d < max) {
            ctx.strokeStyle = 'rgba(124,255,196,' + (0.16 * (1 - d / max)) + ')';
            ctx.lineWidth = 1;
            ctx.beginPath(); ctx.moveTo(a.x, a.y); ctx.lineTo(b.x, b.y); ctx.stroke();
          }
        }
      }
      
      points.forEach(p => {
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = 'rgba(124,255,196,0.55)';
        ctx.fill();
      });
      
      requestAnimationFrame(step);
    }

    const W = canvas.clientWidth;
    const H = canvas.clientHeight;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    canvas.width = W * 2;
    canvas.height = H * 2;
    ctx.setTransform(2, 0, 0, 2, 0, 0);

    init();
    step();

    function resize() {
      const W = canvas.clientWidth;
      const H = canvas.clientHeight;
      canvas.width = W * 2;
      canvas.height = H * 2;
      ctx.setTransform(2, 0, 0, 2, 0, 0);
    }

    window.addEventListener('resize', resize);
    
    return () => {};
  }, []);

  return <canvas className="hero-canvas" id="hero-canvas" aria-hidden="true" />;
}

export default function HeroCanvas() {
  return <canvas className="hero-canvas" id="hero-canvas" aria-hidden="true" />;
}