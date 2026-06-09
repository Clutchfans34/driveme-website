// ══════════════════════════════════════════
// DRIVE ME — SVG Icon Library (Lucide paths)
// ══════════════════════════════════════════
const IC = {
  car:`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"><path d="M5 17H3a2 2 0 0 1-2-2v-4a2 2 0 0 1 .5-1.3L5 6h14l3.5 3.7A2 2 0 0 1 23 11v4a2 2 0 0 1-2 2h-2"/><circle cx="7.5" cy="17.5" r="2.5"/><circle cx="16.5" cy="17.5" r="2.5"/><line x1="10" y1="17.5" x2="14" y2="17.5"/></svg>`,
  tag:`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"><path d="M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z"/><line x1="7" y1="7" x2="7.01" y2="7"/></svg>`,
  globe:`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>`,
  shield:`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>`,
  wrench:`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/></svg>`,
  'arrow-right':`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>`,
  check:`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>`,
  phone:`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.6 1.27h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.96a16 16 0 0 0 6.07 6.07l.96-1.96a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 21.73 15z"/></svg>`,
  mail:`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>`,
  'map-pin':`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>`,
  clock:`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>`,
  menu:`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round"><line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="18" x2="21" y2="18"/></svg>`,
  x:`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>`,
  'chevron-right':`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="9 18 15 12 9 6"/></svg>`,
  users:`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>`,
  star:`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>`,
  truck:`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"><rect x="1" y="3" width="15" height="13"/><polygon points="16 8 20 8 23 11 23 16 16 16 16 8"/><circle cx="5.5" cy="18.5" r="2.5"/><circle cx="18.5" cy="18.5" r="2.5"/></svg>`,
  'file-text':`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/><polyline points="10 9 9 9 8 9"/></svg>`,
  'trending-up':`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"><polyline points="23 6 13.5 15.5 8.5 10.5 1 18"/><polyline points="17 6 23 6 23 12"/></svg>`,
  zap:`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg>`,
  ship:`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"><path d="M2 21c.6.5 1.2 1 2.5 1 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1 .6.5 1.2 1 2.5 1 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1"/><path d="M19.38 20A11.6 11.6 0 0 0 21 14l-9-4-9 4c0 2.9.94 5.34 2.81 7.76"/><path d="M19 13V7a2 2 0 0 0-2-2H7a2 2 0 0 0-2 2v6"/><polyline points="12 3 12 7"/><line x1="8" y1="11" x2="16" y2="11"/></svg>`,
  'alert-triangle':`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"><path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"/><line x1="12" y1="9" x2="12" y2="13"/><line x1="12" y1="17" x2="12.01" y2="17"/></svg>`,
  dollar:`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"><line x1="12" y1="1" x2="12" y2="23"/><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg>`,
  settings:`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83-2.83l.06-.06A1.65 1.65 0 0 0 4.68 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 2.83-2.83l.06.06A1.65 1.65 0 0 0 9 4.68a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 2.83l-.06.06A1.65 1.65 0 0 0 19.4 9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z"/></svg>`,
};

function ico(name, size=20) {
  const s = IC[name];
  if (!s) return '';
  return s
    .replace('viewBox', `width="${size}" height="${size}" viewBox`)
    .trim();
}

// ── NAV SCROLL ──
const nav = document.querySelector('.nav');
if (nav) {
  const onScroll = () => nav.classList.toggle('scrolled', window.scrollY > 16);
  window.addEventListener('scroll', onScroll, {passive:true});
}

// ── HAMBURGER ──
const ham = document.querySelector('.hamburger');
const mobNav = document.querySelector('.mob-nav');
if (ham && mobNav) {
  ham.addEventListener('click', () => {
    const open = mobNav.classList.toggle('open');
    const spans = ham.querySelectorAll('span');
    if (open) {
      spans[0].style.transform = 'rotate(45deg) translate(5px,5px)';
      spans[1].style.opacity = '0';
      spans[2].style.transform = 'rotate(-45deg) translate(5px,-5px)';
    } else {
      spans[0].style.transform = spans[1].style.opacity = spans[2].style.transform = '';
      spans[1].style.opacity = '';
    }
  });
  document.addEventListener('click', e => {
    if (!ham.contains(e.target) && !mobNav.contains(e.target)) {
      mobNav.classList.remove('open');
      const s = ham.querySelectorAll('span');
      s[0].style.transform = s[2].style.transform = '';
      s[1].style.opacity = '';
    }
  });
}

// ── ACTIVE NAV LINK ──
const cur = location.pathname.split('/').pop() || 'index.html';
document.querySelectorAll('.nav-link, .mob-nav-link').forEach(a => {
  const h = a.getAttribute('href').split('/').pop();
  if (h === cur) a.classList.add('active');
});

// ── SCROLL REVEAL ──
const ro = new IntersectionObserver(entries => {
  entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('in'); ro.unobserve(e.target); }});
}, {threshold:0.08, rootMargin:'0px 0px -32px 0px'});
document.querySelectorAll('.reveal').forEach(el => ro.observe(el));

// ── COUNTER ANIMATION ──
function animCount(el) {
  const target = +el.dataset.target;
  const suffix = el.dataset.suffix || '';
  const dur = 1600;
  const start = performance.now();
  const tick = now => {
    const p = Math.min((now - start) / dur, 1);
    const ease = 1 - Math.pow(1 - p, 3);
    el.textContent = Math.round(ease * target) + suffix;
    if (p < 1) requestAnimationFrame(tick);
  };
  requestAnimationFrame(tick);
}
const co = new IntersectionObserver(entries => {
  entries.forEach(e => { if (e.isIntersecting) { animCount(e.target); co.unobserve(e.target); }});
}, {threshold:0.5});
document.querySelectorAll('[data-target]').forEach(el => co.observe(el));

// ── FORM SUBMIT ──
document.querySelectorAll('.js-form').forEach(f => {
  f.addEventListener('submit', e => {
    e.preventDefault();
    const btn = f.querySelector('[type=submit]');
    const orig = btn.innerHTML;
    btn.innerHTML = ico('check', 16) + ' Заявку відправлено';
    btn.style.background = 'linear-gradient(135deg,#2CC88A,rgba(44,200,138,0.8))';
    btn.disabled = true;
    setTimeout(() => {
      btn.innerHTML = orig;
      btn.style.background = '';
      btn.disabled = false;
      f.reset();
    }, 3500);
  });
});

// ── ORBITAL SYSTEM ──
const orbData = {
  fleet:     { label:'Автопарк',    metric:'344+ авто',   color:'#E8732A' },
  sales:     { label:'Продаж авто', metric:'Trade-in',    color:'#5B9FE8' },
  import:    { label:'Імпорт авто', metric:'−40% ціна',  color:'#E8B42A' },
  insurance: { label:'Страхування', metric:'% від факту', color:'#2CC88A' },
  service:   { label:'Автосервіс',  metric:'3 міс. гарант.',color:'#9B78E0' },
};

function initOrbit() {
  const nodes   = document.querySelectorAll('.orb-node');
  const lines   = document.querySelectorAll('.orb-ln');
  const center  = document.getElementById('orbCenter');
  const defEl   = document.getElementById('orbDef');
  const infoEl  = document.getElementById('orbInfo');
  const tagEl   = document.getElementById('orbTag');
  const metricEl= document.getElementById('orbMetric');
  if (!nodes.length) return;

  function activate(svc) {
    const d = orbData[svc];
    if (!d) return;
    // Center
    defEl.classList.add('hide');
    tagEl.textContent    = d.label;
    tagEl.style.color    = d.color;
    metricEl.textContent = d.metric;
    metricEl.style.color = d.color;
    infoEl.classList.add('show');
    center.classList.add('lit');
    center.style.borderColor = d.color + '55';
    // Lines
    lines.forEach(l => { l.classList.remove('lit'); l.style.stroke = ''; });
    const ln = document.getElementById('ln-' + svc);
    if (ln) { ln.classList.add('lit'); ln.style.stroke = d.color; }
    // Nodes
    nodes.forEach(n => n.classList.remove('active'));
    document.querySelector(`.orb-node[data-svc="${svc}"]`)?.classList.add('active');
  }

  function deactivate() {
    defEl.classList.remove('hide');
    infoEl.classList.remove('show');
    center.classList.remove('lit');
    center.style.borderColor = '';
    lines.forEach(l => { l.classList.remove('lit'); l.style.stroke = ''; });
    nodes.forEach(n => n.classList.remove('active'));
  }

  nodes.forEach(node => {
    const svc = node.dataset.svc;
    node.addEventListener('mouseenter', () => activate(svc));
    node.addEventListener('mouseleave', deactivate);
    // Touch support
    node.addEventListener('touchstart', e => { e.preventDefault(); activate(svc); }, {passive:false});
    node.addEventListener('touchend', () => setTimeout(deactivate, 800));
  });
}
initOrbit();

// ── BAR CHART ANIMATE ──
const baro = new IntersectionObserver(entries => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      e.target.querySelectorAll('.bar-fill[data-w]').forEach(b => {
        setTimeout(() => b.style.width = b.dataset.w + '%', 200);
      });
      baro.unobserve(e.target);
    }
  });
}, {threshold:0.3});
document.querySelectorAll('.feature-vis').forEach(v => baro.observe(v));
// init bars to 0
document.querySelectorAll('.bar-fill[data-w]').forEach(b => b.style.width = '0');
