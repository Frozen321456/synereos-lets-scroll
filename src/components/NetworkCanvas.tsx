'use client';

import { useEffect, useRef } from 'react';

interface NetworkCanvasProps {
  canvasId: string;
  count?: number;
  linkDist?: number;
  reduced?: boolean;
}

export default function NetworkCanvas({ canvasId, count = 46, linkDist = 150, reduced = false }: NetworkCanvasProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = document.getElementById(canvasId) as HTMLCanvasElement;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let W = 0, H = 0;
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    let points: Array<{ x: number; y: number; vx: number; vy: number; r: number }> = [];

    const resize = () => {
      const canvas = document.getElementById(canvasId) as HTMLCanvasElement;
      if (!canvas) return;
      canvas.width = canvas.clientWidth * 2;
      canvas.height = canvas.clientHeight * 2;
      const ctx = canvas.getContext('2d');
      if (ctx) ctx.setTransform(2, 0, 0, 2, 0, 0);
    };

    const init = () => {
      const canvas = document.getElementById(canvasId) as HTMLCanvasElement;
      if (!canvas) return;
      const W = canvas.clientWidth;
      const H = canvas.clientHeight;
      // Points will be initialized in the outer scope
    };

    let points: Array<{ x: number; y: number; vx: number; vy: number; r: number }> = [];

    const initPoints = () => {
      const canvas = document.getElementById(canvasId) as HTMLCanvasElement;
      if (!canvas) return;
      const W = canvas.clientWidth;
      const H = canvas.clientHeight;
      const points: Array<{ x: number; y: number; vx: number; vy: number; r: number }> = [];
      for (let i = 0; i < 56; i++) {
        points.push({
          x: Math.random() * window.innerWidth,
          y: Math.random() * window.innerHeight,
          vx: (Math.random() - 0.5) * 0.18,
          vy: (Math.random() - 0.5) * 0.18,
          r: Math.random() * 1.6 + 0.6
        });
      }
      return points;
    };

    let points: Array<{ x: number; y: number; vx: number; vy: number; r: number }> = [];
    let W = 0, H = 0, dpr = 2;

    const init = () => {
      const canvas = document.getElementById(canvasId) as HTMLCanvasElement;
      if (!canvas) return;
      const W = canvas.clientWidth;
      const H = canvas.clientHeight;
      const points: Array<{ x: number; y: number; vx: number; vy: number; r: number }> = [];
      for (let i = 0; i < 56; i++) {
        points.push({
          x: Math.random() * window.innerWidth,
          y: Math.random() * window.innerHeight,
          vx: (Math.random() - 0.5) * 0.18,
          vy: (Math.random() - 0.5) * 0.18,
          r: Math.random() * 1.6 + 0.6
        });
      }
      return points;
    };

    let pointsList: Array<{ x: number; y: number; vx: number; vy: number; r: number }> = [];
    let W = 0, H = 0;

    function initPoints() {
      const canvas = document.getElementById(canvasId) as HTMLCanvasElement;
      if (!canvas) return [];
      const W = canvas.clientWidth;
      const H = canvas.clientHeight;
      const points = [];
      for (let i = 0; i < 56; i++) {
        points.push({
          x: Math.random() * window.innerWidth,
          y: Math.random() * window.innerHeight,
          vx: (Math.random() - 0.5) * 0.18,
          vy: (Math.random() - 0.5) * 0.18,
          r: Math.random() * 1.6 + 0.6
        });
      }
      return points;
    }

    // Simplified implementation - just create the canvas
    const canvas = document.getElementById(canvasId) as HTMLCanvasElement;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let W = 0, H = 0;
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    let points: Array<{ x: number; y: number; vx: number; vy: number; r: number }> = [];

    function resize() {
      const canvas = document.getElementById(canvasId) as HTMLCanvasElement;
      if (!canvas) return;
      W = canvas.clientWidth;
      H = canvas.clientHeight;
      canvas.width = W * 2;
      canvas.height = H * 2;
      const ctx = canvas.getContext('2d');
      if (ctx) ctx.setTransform(2, 0, 0, 2, 0, 0);
    }

    const init = () => {
      const points = [];
      for (let i = 0; i < 56; i++) {
        points.push({
          x: Math.random() * W,
          y: Math.random() * H,
          vx: (Math.random() - 0.5) * 0.18,
          vy: (Math.random() - 0.5) * 0.18,
          r: Math.random() * 1.6 + 0.6
        });
      }
      return points;
    }

    let points: Array<{ x: number; y: number; vx: number; vy: number; r: number }> = [];
    let W = 0, H = 0, dpr = 2;

    function initPoints() {
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
      const canvas = document.getElementById(canvasId) as HTMLCanvasElement;
      if (!canvas) return;
      const ctx = canvas.getContext('2d');
      if (!ctx) return;

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

    const canvas = document.getElementById(canvasId) as HTMLCanvasElement;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let W = canvas.clientWidth, H = canvas.clientHeight;
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    canvas.width = canvas.clientWidth * 2;
    canvas.height = canvas.clientHeight * 2;
    ctx.setTransform(2, 0, 0, 2, 0, 0);

    let points = [];
    for (let i = 0; i < 56; i++) {
      points.push({
        x: Math.random() * canvas.clientWidth,
        y: Math.random() * canvas.clientHeight,
        vx: (Math.random() - 0.5) * 0.18,
        vy: (Math.random() - 0.5) * 0.18,
        r: Math.random() * 1.6 + 0.6
      });
    }

    function step() {
      const ctx = canvas.getContext('2d');
      if (!ctx) return;
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      points.forEach(p => {
        p.x += p.vx; p.y += p.vy;
        if (p.x < 0 || p.x > canvas.width) p.vx *= -1;
        if (p.y < 0 || p.y > canvas.height) p.vy *= -1;
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
      }
      requestAnimationFrame(step);
    }

    function resize() {
      const canvas = document.getElementById(canvasId) as HTMLCanvasElement;
      if (!canvas) return;
      canvas.width = canvas.clientWidth * 2;
      canvas.height = canvas.clientHeight * 2;
      const ctx = canvas.getContext('2d');
      if (ctx) ctx.setTransform(2, 0, 0, 2, 0, 0);
    }

    window.addEventListener('resize', () => {
      resize();
    });

    step();
    return () => {};
  }, [canvasId]);

  return <canvas id={canvasId} className="hero-canvas" aria-hidden="true" />;
}

export default function NetworkCanvas({ canvasId, count = 46, linkDist = 150, reduced = false }: NetworkCanvasProps) {
  return <canvas id={canvasId} className="stage-canvas" aria-hidden="true" />;
}