'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger);

export default function SignalSpine() {
  const sections = [
    { id: 'intent', label: 'Intent' },
    { id: 'think', label: 'Think' },
    { id: 'build', label: 'Build' },
    { id: 'orchestrate', label: 'Orchestrate' },
    { id: 'hexim', label: 'HEXIM' },
    { id: 'execute', label: 'Execute' },
  ];

  const trackRef = useRef<HTMLDivElement>(null);
  const fgRef = useRef<HTMLDivElement>(null);
  const [spineNodes, setSpineNodes] = useState<Array<{ id: string; el: HTMLDivElement }>>([]);

  useEffect(() => {
    const buildSpine = () => {
      const track = document.querySelector('.spine-track') as HTMLElement;
      if (!track) return;
      
      track.querySelectorAll('.spine-node').forEach(n => n.remove());
      const trackTop = document.querySelector('.spine-track')?.getBoundingClientRect().top + window.scrollY || 0;
      const trackEl = document.querySelector('.spine-track') as HTMLElement;
      track.style.height = document.body.scrollHeight + 'px';

      document.querySelectorAll('[data-stage]').forEach((section) => {
        const r = (section as HTMLElement).getBoundingClientRect();
        const trackTop = document.querySelector('.spine-track')?.getBoundingClientRect().top + window.scrollY || 0;
        const top = r.top + window.scrollY - trackTop;
        
        const node = document.createElement('div');
        node.className = 'spine-node';
        node.style.top = top + 'px';
        document.querySelector('.spine-track')?.appendChild(node);
      });
    };

    setTimeout(buildSpine, 100);
    window.addEventListener('resize', buildSpine);
    return () => window.removeEventListener('resize', buildSpine);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const fg = document.getElementById('spine-fg');
      const docH = document.body.scrollHeight - window.innerHeight;
      const pct = docH > 0 ? (window.scrollY / docH) * 100 : 0;
      const fgEl = document.getElementById('spine-fg');
      if (fgEl) fgEl.style.height = Math.min(pct, 100) + '%';
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <div className="spine-track" id="spine" aria-hidden="true">
      <div className="spine-line-bg" />
      <div className="spine-line-fg" id="spine-fg" />
    </div>
  );
}

export default function SignalSpine() {
  const sections = [
    { id: 'intent', label: 'Intent' },
    { id: 'think', label: 'Think' },
    { id: 'build', label: 'Build' },
    { id: 'orchestrate', label: 'Orchestrate' },
    { id: 'hexim', label: 'HEXIM' },
    { id: 'execute', label: 'Execute' },
  ];

  return (
    <div className="spine-track" id="spine" aria-hidden="true">
      <div className="spine-line-bg" />
      <div className="spine-line-fg" id="spine-fg" />
    </div>
  );
}

export default function SignalSpine() {
  const sections = [
    { id: 'intent', label: 'Intent' },
    { id: 'think', label: 'Think' },
    { id: 'build', label: 'Build' },
    { id: 'orchestrate', label: 'Orchestrate' },
    { id: 'hexim', label: 'HEXIM' },
    { id: 'execute', label: 'Execute' },
  ];

  return (
    <div className="spine-track" id="spine" aria-hidden="true">
      <div className="spine-line-bg" />
      <div className="spine-line-fg" id="spine-fg" />
    </div>
  );
}