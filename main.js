// NUTTIN' site interactions
document.documentElement.classList.add('js');

// Ingredient illustrations (viewBox 0 0 100 100)
const HL = '<ellipse cx="38" cy="30" rx="10" ry="6" fill="#fff" opacity=".28" transform="rotate(-30 38 30)"/>';
const ING = {
  kismishitam: `<svg viewBox="0 0 100 100"><path d="M22 30C30 12 64 8 76 24 92 40 86 72 66 82 46 92 18 80 14 60 12 48 16 38 22 30Z" fill="#2A1A22"/><path d="M30 40c10 6 22 4 34-4M26 58c14 4 30 2 44-8M40 74c8-2 16-6 22-12" stroke="#4E3644" stroke-width="3.5" fill="none" stroke-linecap="round"/>${HL}</svg>`,
  kismis: `<svg viewBox="0 0 100 100"><path d="M20 34C28 14 62 10 78 26 92 42 84 74 64 84 44 92 16 78 14 58 12 48 14 40 20 34Z" fill="#7A3A22"/><path d="M28 44c12 6 24 4 36-6M24 62c14 4 30 0 44-10M42 78c8-2 14-6 20-12" stroke="#A65A38" stroke-width="3.5" fill="none" stroke-linecap="round"/>${HL}</svg>`,
  sunflower: `<svg viewBox="0 0 100 100"><path d="M50 6C66 22 70 60 59 87 55 95 45 95 41 87 30 60 34 22 50 6Z" fill="#DCD2B4"/><path d="M50 14C54 40 54 66 50 88" stroke="#BFB18C" stroke-width="3" fill="none"/><ellipse cx="44" cy="34" rx="4" ry="12" fill="#fff" opacity=".45"/></svg>`,
  almond: `<svg viewBox="0 0 100 100"><path d="M50 4C74 20 84 52 73 79 66 94 34 94 27 79 16 52 26 20 50 4Z" fill="#B4682F"/><path d="M42 22c-4 18-4 40 2 60M56 20c4 18 6 40 0 62M34 40c-2 14 0 28 4 40M66 40c2 14 0 28-4 40" stroke="#8B4B1E" stroke-width="2.6" fill="none" opacity=".6" stroke-linecap="round"/><ellipse cx="40" cy="34" rx="6" ry="16" fill="#fff" opacity=".22" transform="rotate(12 40 34)"/></svg>`,
  mete: `<svg viewBox="0 0 100 100"><path d="M34 10C12 22 8 60 28 80 44 96 76 94 88 76 92 68 84 62 78 66 66 76 50 74 42 60 34 46 38 30 46 22 52 14 42 6 34 10Z" fill="#EBCB8E"/><path d="M30 26C22 42 24 62 36 74" stroke="#D2AC68" stroke-width="3" fill="none" stroke-linecap="round"/><ellipse cx="26" cy="44" rx="4" ry="12" fill="#fff" opacity=".4"/></svg>`,
  pumpkin: `<svg viewBox="0 0 100 100"><path d="M50 4C72 16 78 52 68 80 62 95 38 95 32 80 22 52 28 16 50 4Z" fill="#3F5C26"/><path d="M50 12C66 24 70 54 62 78 57 88 43 88 38 78 30 54 34 24 50 12Z" fill="#6E9142"/><path d="M50 20C52 44 52 64 50 82" stroke="#58783A" stroke-width="3" fill="none"/><ellipse cx="44" cy="36" rx="4" ry="12" fill="#fff" opacity=".3"/></svg>`,
  cranberry: `<svg viewBox="0 0 100 100"><path d="M18 40C20 18 52 8 72 18 92 30 90 62 76 78 60 94 28 90 18 72 12 60 16 50 18 40Z" fill="#B21E36"/><path d="M28 36c12 8 26 8 40 0M24 56c16 6 34 4 50-6M36 74c10 0 20-4 28-10" stroke="#7C0F22" stroke-width="3.5" fill="none" stroke-linecap="round"/>${HL}</svg>`,
  walnut: `<svg viewBox="0 0 100 100"><path d="M20 40C16 22 34 10 48 18 60 8 82 16 82 34 94 44 88 66 74 70 72 86 52 92 42 82 26 88 10 74 18 60 8 54 10 42 20 40Z" fill="#C68E4E"/><path d="M50 20C46 40 54 60 46 84M30 36c8 4 12 12 10 22M70 34c-8 6-10 14-8 24M28 64c6-2 12 0 16 6M72 62c-6-2-12 0-16 6" stroke="#93602D" stroke-width="3.2" fill="none" stroke-linecap="round"/><ellipse cx="36" cy="30" rx="8" ry="5" fill="#fff" opacity=".25"/></svg>`,
  goji: `<svg viewBox="0 0 100 100"><g transform="rotate(-35 50 50)"><path d="M50 6C66 10 70 40 66 70 63 90 37 90 34 70 30 40 34 10 50 6Z" fill="#D8432A"/><path d="M44 20c-2 20-2 40 2 60M56 22c2 18 2 38-2 58" stroke="#A92A16" stroke-width="2.6" fill="none" opacity=".7"/><path d="M47 4h6v6h-6z" fill="#6B3A1A"/><ellipse cx="42" cy="30" rx="4" ry="12" fill="#fff" opacity=".3"/></g></svg>`,
  wijen: `<svg viewBox="0 0 100 100">${[[30, 36, -20], [56, 26, 25], [70, 54, -40], [42, 62, 15], [24, 74, 60], [60, 78, -10], [80, 30, 80]].map(([x, y, r]) => `<g transform="translate(${x} ${y}) rotate(${r})"><path d="M0-13C7-6 7 6 0 13-7 6-7-6 0-13Z" fill="#F4E8CB" stroke="#CDB98C" stroke-width="2"/></g>`).join('')}</svg>`,
};
document.querySelectorAll('[data-ing]').forEach(el => {
  el.innerHTML = ING[el.dataset.ing] || '';
  el.setAttribute('aria-hidden', 'true');
});

// Sticky nav shadow
const nav = document.querySelector('.nav');
const onScroll = () => nav.classList.toggle('is-scrolled', window.scrollY > 8);
onScroll();
window.addEventListener('scroll', onScroll, { passive: true });

// Mobile menu
const toggle = document.querySelector('.nav__toggle');
const menu = document.getElementById('menu');
const setMenu = open => {
  toggle.setAttribute('aria-expanded', String(open));
  toggle.querySelector('.sr').textContent = open ? 'Tutup menu' : 'Buka menu';
  menu.classList.toggle('is-open', open);
};
toggle.addEventListener('click', () => setMenu(toggle.getAttribute('aria-expanded') !== 'true'));
menu.addEventListener('click', e => { if (e.target.closest('a')) setMenu(false); });
document.addEventListener('keydown', e => { if (e.key === 'Escape') setMenu(false); });

// Active section highlight
const links = [...document.querySelectorAll('.nav__menu a:not(.btn)')];
const sections = links.map(a => document.querySelector(a.getAttribute('href'))).filter(Boolean);
const spy = new IntersectionObserver(entries => {
  entries.forEach(en => {
    if (!en.isIntersecting) return;
    links.forEach(a => a.classList.toggle('is-active', a.getAttribute('href') === '#' + en.target.id));
  });
}, { rootMargin: '-45% 0px -50% 0px' });
sections.forEach(s => spy.observe(s));

// Reveal on scroll (staggered within groups)
const reveal = new IntersectionObserver(entries => {
  entries.forEach(en => {
    if (!en.isIntersecting) return;
    const el = en.target;
    const sibs = [...el.parentElement.children].filter(c => c.classList.contains('reveal'));
    el.style.transitionDelay = Math.min(sibs.indexOf(el), 6) * 70 + 'ms';
    el.classList.add('is-in');
    reveal.unobserve(el);
  });
}, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });
document.querySelectorAll('.reveal').forEach(el => reveal.observe(el));
// Safety net: never leave content hidden
setTimeout(() => document.querySelectorAll('.reveal:not(.is-in)').forEach(el => {
  if (el.getBoundingClientRect().top < window.innerHeight) el.classList.add('is-in');
}), 1500);

// Video tabs
const player = document.getElementById('player');
document.querySelectorAll('.tabs [role="tab"]').forEach(btn => {
  btn.addEventListener('click', () => {
    document.querySelectorAll('.tabs [role="tab"]').forEach(b => b.setAttribute('aria-selected', String(b === btn)));
    player.poster = btn.dataset.poster;
    player.querySelector('source').src = btn.dataset.src;
    player.load();
    player.play().catch(() => {});
  });
});
