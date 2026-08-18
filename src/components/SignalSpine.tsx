'use client';

import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger);

interface SignalSpineProps {
  sections: Array<{ id: string; label: string }>;
}

export default function SignalSpine({ sections }: SignalSpineProps) {
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

      stages.forEach((s) => {
        const r = s.getBoundingClientRect();
        const top = r.top + window.scrollY - trackTop;
        
        const node = document.createElement('div');
        node.className = 'spine-node';
        node.style.top = top + 'px';
        track.appendChild(node);
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
      const pct = Math.min(1, Math.max(0, window.scrollY / (document.body.scrollHeight - window.innerHeight)));
      if (spineFg) spineFg.style.height = Math.min(100, pct * 100) + '%';
      
      const vh = window.innerHeight;
      let active = 0;
      sections.forEach((s, i) => {
        const el = document.getElementById(s.id);
        if (el) { 
          const r = el.getBoundingClientRect(); 
          if (r.top < vh*0.6 && r.bottom > vh*0.4) active = i; 
        }
      });
      
      if (active !== lastActive) {
        lastActive = active;
        const navAs = navLinks.querySelectorAll('a');
        navAs.forEach((a, i) => a.classList.toggle('active', i === active));
        document.documentElement.style.setProperty('--sw-accent', sections[active].accent);
        document.querySelectorAll('.scene').forEach(sc => sc.classList.remove('flash'));
        const sc = document.querySelectorAll('.scene')[active]; 
        if (sc) sc.classList.add('flash');
      }
      scrollHint.classList.toggle('show', window.scrollY > 100);
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

export default function SignalSpine({ sections }: { sections: Array<{ id: string; label: string }> }) {
  return (
    <div className="spine-track" id="spine" aria-hidden="true">
      <div className="spine-line-bg" />
      <div className="spine-line-fg" id="spine-fg" />
    </div>
  );
}