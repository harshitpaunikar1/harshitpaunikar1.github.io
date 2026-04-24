// Typewriter effect
const phrases = [
  'Web Developer',
  'Frontend Engineer',
  'GitHub Enthusiast',
  'Problem Solver',
];
let phraseIdx = 0, charIdx = 0, deleting = false;
const el = document.getElementById('typewriter');

function type() {
  const current = phrases[phraseIdx];
  el.textContent = deleting
    ? current.slice(0, --charIdx)
    : current.slice(0, ++charIdx);

  let delay = deleting ? 60 : 100;
  if (!deleting && charIdx === current.length) { delay = 1800; deleting = true; }
  else if (deleting && charIdx === 0) { deleting = false; phraseIdx = (phraseIdx + 1) % phrases.length; delay = 400; }
  setTimeout(type, delay);
}
type();

// Navbar hamburger
document.getElementById('hamburger').addEventListener('click', () => {
  document.querySelector('.nav-links').classList.toggle('open');
});
document.querySelectorAll('.nav-links a').forEach(a =>
  a.addEventListener('click', () => document.querySelector('.nav-links').classList.remove('open'))
);

// Animated counters
function animateCounters() {
  document.querySelectorAll('.stat-num').forEach(el => {
    const target = +el.dataset.target;
    let count = 0;
    const step = Math.ceil(target / 40);
    const timer = setInterval(() => {
      count = Math.min(count + step, target);
      el.textContent = count + (target >= 100 ? '+' : '');
      if (count >= target) clearInterval(timer);
    }, 40);
  });
}

// Project cards
const projects = [
  { icon: '🚀', name: 'Project 1',  desc: 'A web project built with modern technologies.' },
  { icon: '💡', name: 'Project 2',  desc: 'Creative solution solving a real-world problem.' },
  { icon: '🛠️', name: 'Project 3',  desc: 'Full-featured application with clean UI.' },
  { icon: '🎨', name: 'Project 4',  desc: 'Design-focused project with smooth interactions.' },
  { icon: '📦', name: 'Project 5',  desc: 'Utility tool to boost developer productivity.' },
  { icon: '🌐', name: 'Project 6',  desc: 'Responsive web experience across all devices.' },
];

const grid = document.getElementById('projects-grid');
projects.forEach(p => {
  grid.innerHTML += `
    <div class="project-card">
      <div class="project-icon">${p.icon}</div>
      <div class="project-name">${p.name}</div>
      <div class="project-desc">${p.desc}</div>
      <a href="https://github.com/harshitpaunikar1/${p.name.replace(' ','-')}" target="_blank" class="project-link">View on GitHub →</a>
    </div>`;
});

// Contact form (no backend — shows confirmation)
document.getElementById('contact-form').addEventListener('submit', e => {
  e.preventDefault();
  const status = document.getElementById('form-status');
  status.textContent = 'Thanks! I will get back to you soon.';
  e.target.reset();
  setTimeout(() => (status.textContent = ''), 4000);
});

// Intersection Observer for counter + fade-in
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      if (entry.target.classList.contains('about')) animateCounters();
    }
  });
}, { threshold: 0.2 });

document.querySelectorAll('.about, .projects, .contact').forEach(s => observer.observe(s));

// Smooth active nav highlight
const sections = document.querySelectorAll('section[id]');
window.addEventListener('scroll', () => {
  const scrollY = window.scrollY;
  sections.forEach(s => {
    const link = document.querySelector(`.nav-links a[href="#${s.id}"]`);
    if (!link) return;
    const inView = scrollY >= s.offsetTop - 120 && scrollY < s.offsetTop + s.offsetHeight - 120;
    link.style.color = inView ? 'var(--accent)' : '';
  });
});
