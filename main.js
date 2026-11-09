// NUTTIN' site interactions
document.documentElement.classList.add('js');

// Ingredient photos (real, openly licensed — see credits in footer)
document.querySelectorAll('[data-ing]').forEach(el => {
  const img = document.createElement('img');
  img.src = `assets/img/ing/${el.dataset.ing}.webp`;
  img.alt = '';
  img.width = 320; img.height = 320;
  img.loading = 'lazy'; img.decoding = 'async';
  el.appendChild(img);
  el.setAttribute('aria-hidden', 'true');
  el.classList.add('photo');
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
