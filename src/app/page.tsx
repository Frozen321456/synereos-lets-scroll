'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import Navbar from '@/components/Navbar';
import SignalSpine from '@/components/SignalSpine';
import HeroCanvas from '@/components/HeroCanvas';
import NetworkCanvas from '@/components/NetworkCanvas';

gsap.registerPlugin(ScrollTrigger);

const sections = [
  { id: 'intent', label: 'Intent' },
  { id: 'think', label: 'Think' },
  { id: 'build', label: 'Build' },
  { id: 'orchestrate', label: 'Orchestrate' },
  { id: 'hexim', label: 'HEXIM' },
  { id: 'execute', label: 'Execute' },
];

export default function HomePage() {
  useEffect(() => {
    // Immediate preloader hide
    const preloader = document.getElementById('preloader');
    if (preloader) preloader.style.display = 'none';
    
    // Safety timeout
    setTimeout(() => {
      const preloader = document.getElementById('preloader');
      if (preloader) preloader.style.display = 'none';
    }, 100);
  }, []);

  return (
    <>
      {/* Background atmosphere */}
      <div className="grain" aria-hidden="true" />
      <div className="void-glow" aria-hidden="true" />

      {/* Signal Spine (Desktop only) */}
      <div className="spine-track" id="spine" aria-hidden="true">
        <div className="spine-line-bg" />
        <div className="spine-line-fg" id="spine-fg" />
      </div>

      <div id="top"></div>

      {/* Sticky Glass Navbar */}
      <header id="navbar" className="nav-bar" role="navigation" aria-label="Main navigation">
        <div className="nav-left">
          <a className="logo" href="#top"><span className="logo-dot" aria-hidden="true" />SYNEREOS</a>
        </div>
        <nav className="nav-links" id="nav-links" role="menubar">
          <a href="#intent" data-nav>Intent</a>
          <a href="#think" data-nav>Think</a>
          <a href="#build" data-nav>Build</a>
          <a href="#orchestrate" data-nav>Orchestrate</a>
          <a href="#hexim" data-nav>HEXIM</a>
        </nav>
        <a href="#execute" className="nav-cta" style={{ display: window.innerWidth > 860 ? 'inline-flex' : 'none' }} id="nav-cta-desktop">Enter Synereos</a>
        <button className="nav-burger" id="burger" aria-label="Toggle menu" aria-expanded="false">
          <span></span><span></span><span></span>
        </button>
      </header>

      <div id="mobile-menu">
        <a href="#intent" data-nav-mobile>Intent</a>
        <a href="#think" data-nav-mobile>Think</a>
        <a href="#build" data-nav-mobile>Build</a>
        <a href="#orchestrate" data-nav-mobile>Orchestrate</a>
        <a href="#hexim" data-nav-mobile>HEXIM</a>
        <a href="#execute" className="mm-cta" data-nav-mobile>Enter Synereos</a>
      </div>

      <div className="spine-track" id="spine" aria-hidden="true">
        <div className="spine-line-bg" />
        <div className="spine-line-fg" id="spine-fg" />
      </div>

      <div id="top"></div>

      {/* ================= HERO ================= */}
      <section className="hero">
        <canvas className="hero-canvas" id="hero-canvas"></canvas>
        <div className="hero-fade"></div>
        <div className="hero-inner">
          <div className="eyebrow">AN AI OPERATING SYSTEM FOR BUILDERS</div>
          <h1 data-reveal>Build what comes next.</h1>
          <p data-reveal>Synereos turns a raw idea into a running system — it reasons through the plan, writes and executes the work, and orchestrates every agent and tool in between.</p>
          <div className="hero-actions">
            <a href="#execute" className="btn-primary">Enter Synereos →</a>
            <a href="#hexim" className="btn-ghost">Read the HEXIM research</a>
          </div>
        </div>
        <div className="scroll-cue"><div className="bar"></div>Scroll to explore</div>
      </section>

      <main>
        {/* ============ 01 INTENT ============ */}
        <section className="stage" id="intent" data-stage>
          <div className="stage-num">01 / 05</div>
          <div className="stage-head">
            <h2 data-reveal>Say what you <br /> <b>mean to build.</b></h2>
            <p className="stage-lede" data-reveal>Every system starts as an unformed idea. Synereos gives it shape before it gives it code — turning a loose brief into a scoped, buildable spec.</p>
          </div>
          <div className="card-row">
            <div className="glass-card" data-reveal>
              <div className="tag">CAPTURE</div>
              <h3>Plain-language intake</h3>
              <p>Describe the outcome you want in your own words. No ticket format, no rigid schema required.</p>
            </div>
            <div className="glass-card" data-reveal>
              <div className="tag">CLARIFY</div>
              <h3>Gap detection</h3>
              <p>Synereos flags missing constraints and ambiguous goals before a single line of work begins.</p>
            </div>
            <div className="glass-card" data-reveal>
              <div className="tag">SCOPE</div>
              <h3>Structured brief</h3>
              <p>Your intent becomes a versioned spec that every downstream agent reads from the same source.</p>
            </div>
          </div>
        </section>

        {/* ============ 02 THINK ============ */}
        <section className="stage" id="think" data-stage>
          <div className="stage-num">02 / 05</div>
          <div className="stage-head">
            <h2 data-reveal>Reason through it <br /> <b>before acting.</b></h2>
            <p className="stage-lede" data-reveal>A plan gets tested against edge cases and prior runs, so the system commits to an approach it can actually defend.</p>
          </div>
          <div className="card-row">
            <div className="glass-card" data-reveal>
              <div className="tag">DECOMPOSE</div>
              <h3>Task graphs</h3>
              <p>Work is broken into dependency-ordered steps, not a flat to-do list.</p>
            </div>
            <div className="glass-card" data-reveal>
              <div className="tag">SIMULATE</div>
              <h3>Pre-flight checks</h3>
              <p>Plans are dry-run against known failure modes before real resources are spent.</p>
            </div>
            <div className="glass-card" data-reveal>
              <div className="tag">MEMORY</div>
              <h3>Prior-run recall</h3>
              <p>Past decisions on similar work inform the current plan instead of starting cold.</p>
            </div>
          </div>
        </section>

        {/* ============ 03 BUILD ============ */}
        <section className="stage" id="build" data-stage>
          <div className="stage-num">03 / 05</div>
          <div className="stage-head">
            <h2 data-reveal>Write it, run it, <br /> <b>watch it work.</b></h2>
            <p className="stage-lede" data-reveal>Code gets generated, executed, and tested in a live sandbox — with every change visible as it happens.</p>
          </div>

          <div className="media-panel">
            <span className="media-tag">● live sandbox — demo view</span>
            <canvas className="stage-canvas" id="build-canvas"></canvas>
            <video className="stage-video" autoplay muted loop playsinline playsinline poster="/assets/intent.png" preload="metadata">
              <source src="/assets/vid/build.mp4" type="video/mp4" media="(min-width:641px)" />
              <source src="/assets/vid/build-m.mp4" type="video/mp4" media="(max-width:640px)" />
            </video>
          </div>

          <div className="card-row">
            <div className="glass-card" data-reveal>
              <div className="tag">GENERATE</div>
              <h3>Multi-file changes</h3>
              <p>Synereos writes across a whole codebase, not one file in isolation.</p>
            </div>
            <div className="glass-card" data-reveal>
              <div className="tag">TEST</div>
              <h3>Inline verification</h3>
              <p>Every change runs against real tests before it's proposed as done.</p>
            </div>
          </div>
        </section>

        {/* ============ 04 ORCHESTRATE ============ */}
        <section className="stage" id="orchestrate" data-stage>
          <div className="stage-num">04 / 05</div>
          <div className="stage-head">
            <h2 data-reveal>Coordinate every <br /> <b>agent and tool.</b></h2>
            <p className="stage-lede" data-reveal>Nothing runs in isolation. Synereos routes work between specialized agents, external tools, and your own infrastructure.</p>
          </div>
          <div className="card-row">
            <div className="glass-card" data-reveal>
              <div className="tag">ROUTE</div>
              <h3>Agent handoff</h3>
              <p>Work moves to whichever agent is best suited for the next step, automatically.</p>
            </div>
            <div className="glass-card" data-reveal>
              <div className="tag">CONNECT</div>
              <h3>Tool + API mesh</h3>
              <p>Your existing services plug in as first-class tools, not bolted-on integrations.</p>
            </div>
            <div className="glass-card" data-reveal>
              <div className="tag">OBSERVE</div>
              <h3>Full run trace</h3>
              <p>Every decision and handoff is logged, replayable, and inspectable after the fact.</p>
            </div>
          </div>
        </section>

        {/* ============ HEXIM (research pillar, offset) ============ */}
        <section className="hexim" id="hexim" data-stage>
          <div className="hexim-panel">
            <div className="hexim-eyebrow">RESEARCH PILLAR</div>
            <h2>HEXIM — inference for <br /> constrained hardware.</h2>
            <p>Synereos runs on models that fit where they're deployed. HEXIM is the research effort behind that: a persistent agent and self-hosted inference stack built to run well below datacenter scale, without giving up reasoning quality.</p>
            <a href="#" className="hexim-link">Read the HEXIM research →</a>
          </div>
        </section>

        {/* ============ 05 EXECUTE ============ */}
        <section className="execute" id="execute" data-stage>
          <div className="stage-num" style={{ textAlign: 'center' }}>05 / 05</div>
          <div className="eyebrow">READY WHEN YOU ARE</div>
          <h2 data-reveal>Stop planning it. <br /> <em>Enter Synereos.</em></h2>
          <div className="hero-actions">
            <a href="#" className="btn-primary">Enter Synereos →</a>
            <a href="#" className="btn-ghost">Talk to the team</a>
          </div>
        </section>

      </main>

      <footer>
        <div className="foot-grid">
          <div className="foot-brand">
            <div className="logo"><span className="logo-dot"></span>SYNEREOS</div>
            <p>An AI Operating System for Builders. Think. Build. Orchestrate.</p>
          </div>
          <div className="foot-col">
            <h4>Product</h4>
            <a href="#intent">Intent</a>
            <a href="#think">Think</a>
            <a href="#build">Build</a>
            <a href="#orchestrate">Orchestrate</a>
            <a href="#execute">Execute</a>
          </div>
          <div className="foot-col">
            <h4>Research</h4>
            <a href="#hexim">HEXIM</a>
            <a href="#">Sparse MoE</a>
            <a href="#">Compression</a>
            <a href="#">Edge AI</a>
          </div>
          <div className="foot-col">
            <h4>Company</h4>
            <a href="#">About</a>
            <a href="#">Careers</a>
            <a href="#">Blog</a>
            <a href="#">Contact</a>
          </div>
        </div>
        <div className="foot-bottom">
          <div>© 2026 Synereos. All rights reserved.</          <div className="legal"><a href="#">Privacy</a><a href="#">Terms</a><a href="#">Security</a></div>
        </div>
      </footer>

      <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.5/gsap.min.js" defer></script>
      <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.5/ScrollTrigger.min.js" defer></script>
      <script
        dangerouslySetInnerHTML={{
          __html: `
            (function(){
              var reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
              var preloader = document.getElementById('preloader');
              function hidePreloader(){
                if(preloader && !preloader.classList.contains('hidden')){
                  preloader.classList.add('hidden');
                }
              }
              // IMMEDIATELY hide preloader - don't wait for anything
              if(preloader && !preloader.classList.contains('hidden')){
                preloader.classList.add('hidden');
              }
              var reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

              /* ---------- navbar glass-on-scroll ---------- */
              var nav = document.getElementById('navbar');
              var navCta = document.getElementById('nav-cta-desktop');
              function onScroll(){
                if(window.scrollY > 40){ nav.classList.add('scrolled'); }
                else{ nav.classList.remove('scrolled'); }
              }
              window.addEventListener('scroll', onScroll, { passive:true });
              onScroll();
              if(window.innerWidth > 860){ navCta.style.display = 'inline-flex'; }

              /* ---------- mobile menu ---------- */
              var burger = document.getElementById('burger');
              var menu = document.getElementById('mobile-menu');
              function closeMenu(){
                burger.classList.remove('open');
                menu.classList.remove('open');
                burger.setAttribute('aria-expanded','false');
              }
              burger.addEventListener('click', function(){
                var open = menu.classList.toggle('open');
                burger.classList.toggle('open', open);
                burger.setAttribute('aria-expanded', open ? 'true' : 'false');
              });
              document.querySelectorAll('[data-nav-mobile]').forEach(function(a){
                a.addEventListener('click', closeMenu);
              });

              /* ---------- scrollspy + spine ---------- */
              var stages = document.querySelectorAll('[data-stage]');
              var navA = document.querySelectorAll('[data-nav]');
              var spineNodes = [];
              var spine = document.getElementById('spine');
              var spineFg = document.getElementById('spine-fg');
              var track = document.querySelector('.spine-track');

              function setActive(id){
                navA.forEach(function(a){
                  a.classList.toggle('active', a.getAttribute('href') === '#' + id);
                });
                spineNodes.forEach(function(n){
                  n.el.classList.toggle('active', n.id === id);
                });
              }

              if('IntersectionObserver' in window){
                var io = new IntersectionObserver(function(entries){
                  entries.forEach(function(e){
                    if(e.isIntersecting){ setActive(e.target.id); }
                  });
                }, { rootMargin: '-40% 0px -50% 0px' });
                stages.forEach(function(s){ io.observe(s); });
              }

              function buildSpine(){
                if(!track) return;
                track.querySelectorAll('.spine-node').forEach(function(n){ n.remove(); });
                spineNodes = [];
                var first = stages[0].getBoundingClientRect();
                var trackTop = track.getBoundingClientRect().top + window.scrollY;
                var totalHeight = document.body.scrollHeight;
                track.style.height = totalHeight + 'px';

                stages.forEach(function(s){
                  var r = s.getBoundingClientRect();
                  var top = r.top + window.scrollY - trackTop;
                  var node = document.createElement('div');
                  node.className = 'spine-node';
                  node.style.top = top + 'px';
                  track.appendChild(node);
                  spineNodes.push({ id: s.id, el: node });
                });
              }
              buildSpine();
              window.addEventListener('resize', buildSpine);

              window.addEventListener('scroll', function(){
                var docH = document.body.scrollHeight - window.innerHeight;
                var pct = docH > 0 ? (window.scrollY / docH) * 100 : 0;
                if(spineFg) spineFg.style.height = Math.min(pct, 100) + '%';
              }, { passive:true });

              /* ---------- GSAP reveals ---------- */
              if(window.gsap && window.ScrollTrigger && !reduced){
                gsap.registerPlugin(ScrollTrigger);
                gsap.utils.toArray('[data-reveal]').forEach(function(el, i){
                  gsap.to(el, {
                    opacity:1, y:0, duration:0.9, ease:'power3.out',
                    scrollTrigger:{ trigger: el, start:'top 85%' },
                    delay: (i % 3) * 0.08
                  });
                });
              } else {
                document.querySelectorAll('[data-reveal]').forEach(function(el){
                  el.style.opacity = 1; el.style.transform = 'none';
                });
              }

              /* ---------- hero canvas: procedural "orchestration network" ---------- */
              function networkCanvas(canvas, opts){
                if(!canvas) return;
                var ctx = canvas.getContext('2d');
                var W, H, dpr = Math.min(window.devicePixelRatio || 1, 2);
                var points = [];
                var count = opts.count || 46;

                function resize(){
                  W = canvas.clientWidth; H = canvas.clientHeight;
                  canvas.width = W * dpr; canvas.height = H * dpr;
                  ctx.setTransform(dpr,0,0,dpr,0,0);
                }
                function init(){
                  points = [];
                  for(var i=0;i<count;i++){
                    points.push({
                      x: Math.random()*W, y: Math.random()*H,
                      vx: (Math.random()-0.5)*0.18, vy: (Math.random()-0.5)*0.18,
                      r: Math.random()*1.6+0.6
                    });
                  }
                }
                function step(){
                  ctx.clearRect(0,0,W,H);
                  points.forEach(function(p){
                    p.x += p.vx; p.y += p.vy;
                    if(p.x<0||p.x>W) p.vx*=-1;
                    if(p.y<0||p.y>H) p.vy*=-1;
                  });
                  for(var i=0;i<points.length;i++){
                    for(var j=i+1;j<points.length;j++){
                      var a=points[i], b=points[j];
                      var dx=a.x-b.x, dy=a.y-b.y;
                      var d = Math.sqrt(dx*dx+dy*dy);
                      var max = opts.linkDist || 150;
                      if(d < max){
                        ctx.strokeStyle = 'rgba(124,255,196,' + (0.16 * (1 - d/max)) + ')';
                        ctx.lineWidth = 1;
                        ctx.beginPath(); ctx.moveTo(a.x,a.y); ctx.lineTo(b.x,b.y); ctx.stroke();
                      }
                    }
                  }
                  points.forEach(function(p){
                    ctx.beginPath();
                    ctx.arc(p.x,p.y,p.r,0,Math.PI*2);
                    ctx.fillStyle = 'rgba(124,255,196,0.55)';
                    ctx.fill();
                  });
                  if(!reduced) requestAnimationFrame(step);
                }
                resize(); init(); step();
                window.addEventListener('resize', function(){ resize(); init(); });
              }

              networkCanvas(document.getElementById('hero-canvas'), { count:56, linkDist:170 });
              networkCanvas(document.getElementById('build-canvas'), { count:34, linkDist:120 });
            })();
          `
        }}
      />
    </body>
  </html>
}