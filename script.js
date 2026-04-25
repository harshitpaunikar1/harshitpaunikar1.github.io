// ===== NAV OVERLAY =====
const navToggle   = document.getElementById('navToggle');
const overlayNav  = document.getElementById('overlayNav');
const overlayClose = document.getElementById('overlayClose');

navToggle.addEventListener('click', () => {
  navToggle.classList.toggle('open');
  overlayNav.classList.toggle('open');
  document.body.style.overflow = overlayNav.classList.contains('open') ? 'hidden' : '';
});

overlayClose.addEventListener('click', closeNav);
document.querySelectorAll('.nav-link').forEach(link => link.addEventListener('click', closeNav));

function closeNav() {
  navToggle.classList.remove('open');
  overlayNav.classList.remove('open');
  document.body.style.overflow = '';
}

// ===== TYPEWRITER =====
const phrases = [
  'Data & AI Professional',
  'Computer Vision Engineer',
  'ML & Analytics Expert',
  'Logistics Tech Builder',
  'Product & Platform Designer',
];
let pIdx = 0, cIdx = 0, deleting = false;
const tw = document.getElementById('typewriter');

function type() {
  const cur = phrases[pIdx];
  tw.textContent = deleting ? cur.slice(0, --cIdx) : cur.slice(0, ++cIdx);
  let delay = deleting ? 55 : 95;
  if (!deleting && cIdx === cur.length) { delay = 1800; deleting = true; }
  else if (deleting && cIdx === 0) { deleting = false; pIdx = (pIdx + 1) % phrases.length; delay = 400; }
  setTimeout(type, delay);
}
type();

// ===== SCROLL FADE-IN =====
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');

      // Animate skill bars
      entry.target.querySelectorAll('.skill-fill').forEach(bar => {
        bar.style.width = bar.dataset.w + '%';
      });

      // Animate counters
      entry.target.querySelectorAll('.stat-num').forEach(el => {
        const target = +el.dataset.target;
        let count = 0;
        const step = Math.max(1, Math.ceil(target / 50));
        const timer = setInterval(() => {
          count = Math.min(count + step, target);
          el.textContent = count + (target >= 100 ? '+' : '');
          if (count >= target) clearInterval(timer);
        }, 35);
      });
    }
  });
}, { threshold: 0.15 });

// Add fade-in class to key elements and observe
document.querySelectorAll(
  '.section-label, .section-heading, .about-image-col, .about-text-col, ' +
  '.service-card, .work-card, .testimonial-card, .stat-item, ' +
  '.contact-info-col, .contact-form-col, .footer-col'
).forEach((el, i) => {
  el.classList.add('fade-in');
  el.style.transitionDelay = (i % 4) * 0.08 + 's';
  observer.observe(el);
});

// Also observe section wrappers for counters/bars
document.querySelectorAll('.about-section, .testimonials-section').forEach(s => {
  s.classList.add('fade-in');
  observer.observe(s);
});

// ===== WORK FILTER =====
const filterBtns = document.querySelectorAll('.filter-btn');
const workCards  = document.querySelectorAll('.work-card');

filterBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    filterBtns.forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    const filter = btn.dataset.filter;
    workCards.forEach(card => {
      const cats = card.dataset.cat || '';
      if (filter === 'all' || cats.includes(filter)) {
        card.classList.remove('hidden');
      } else {
        card.classList.add('hidden');
      }
    });
  });
});

// ===== CONTACT FORM =====
document.getElementById('contactForm').addEventListener('submit', e => {
  e.preventDefault();
  const msg = document.getElementById('formMsg');
  msg.textContent = 'Thanks for reaching out! I will get back to you soon.';
  e.target.reset();
  setTimeout(() => (msg.textContent = ''), 5000);
});

// ===== ACTIVE NAV ON SCROLL =====
const sections = document.querySelectorAll('section[id]');
window.addEventListener('scroll', () => {
  const y = window.scrollY + 120;
  sections.forEach(s => {
    const link = document.querySelector(`.overlay-nav a[href="#${s.id}"]`);
    if (!link) return;
    link.style.opacity = (y >= s.offsetTop && y < s.offsetTop + s.offsetHeight) ? '1' : '0.7';
  });
});
