/* ══════════════════════════════════════════════
   main.js  —  Yun Chen Personal Site
   ══════════════════════════════════════════════ */

/* ── Active nav link on scroll ───────────────── */
const sections = document.querySelectorAll('section[id]');
const navLinks  = document.querySelectorAll('.nav-links a');

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const id = entry.target.getAttribute('id');
        navLinks.forEach(a => {
          a.classList.toggle('active', a.getAttribute('href') === `#${id}`);
        });
      }
    });
  },
  { rootMargin: '-40% 0px -55% 0px' }
);

sections.forEach(s => observer.observe(s));

/* ── Fade-in on scroll ───────────────────────── */
const fadeEls = document.querySelectorAll(
  '.pub-card, .proj-card, .tl-item'
);

const fadeObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity   = '1';
        entry.target.style.transform = 'translateY(0)';
        fadeObserver.unobserve(entry.target);
      }
    });
  },
  { rootMargin: '0px 0px -60px 0px' }
);

fadeEls.forEach(el => {
  el.style.opacity   = '0';
  el.style.transform = 'translateY(16px)';
  el.style.transition = 'opacity .45s ease, transform .45s ease';
  fadeObserver.observe(el);
});

/* ── Current year in footer ──────────────────── */
const yearEl = document.getElementById('year');
if (yearEl) yearEl.textContent = new Date().getFullYear();
