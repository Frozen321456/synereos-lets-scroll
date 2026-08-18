// Synereos Main Script - Loaded after page load

// IMMEDIATELY hide preloader - runs before body renders
if (document.getElementById('preloader')) {
  document.getElementById('preloader').style.display = 'none';
}
setTimeout(() => {
  const preloader = document.getElementById('preloader');
  if (preloader) preloader.style.display = 'none';
}, 100);

// Safety: force hide after 2 seconds max
setTimeout(() => {
  const preloader = document.getElementById('preloader');
  if (preloader) preloader.style.display = 'none';
}, 2000);

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