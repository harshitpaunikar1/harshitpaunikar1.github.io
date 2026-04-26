;(function() {
  'use strict';

  /* ── Header scroll shadow ── */
  var header = document.getElementById('header');
  if (header) {
    var onScroll = function() {
      header.classList.toggle('header--scrolled', window.scrollY > 10);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
  }

  /* ── Mobile menu toggle ── */
  var menuToggle = document.getElementById('menuToggle');
  var mobileNav = document.getElementById('mobileNav');

  if (menuToggle && mobileNav) {
    menuToggle.addEventListener('click', function() {
      var isOpen = mobileNav.classList.toggle('is-open');
      menuToggle.classList.toggle('is-open', isOpen);
      menuToggle.setAttribute('aria-expanded', isOpen);
      document.body.style.overflow = isOpen ? 'hidden' : '';
    });

    // Close on link click
    mobileNav.querySelectorAll('a').forEach(function(link) {
      link.addEventListener('click', function() {
        mobileNav.classList.remove('is-open');
        menuToggle.classList.remove('is-open');
        menuToggle.setAttribute('aria-expanded', 'false');
        document.body.style.overflow = '';
      });
    });
  }

  /* ── Smooth scroll for anchor links ── */
  document.querySelectorAll('a[href^="#"]').forEach(function(link) {
    link.addEventListener('click', function(e) {
      var targetId = this.getAttribute('href');
      if (targetId === '#') return;
      var target = document.querySelector(targetId);
      if (!target) return;
      e.preventDefault();

      var headerH = header ? header.offsetHeight : 0;
      var top = target.getBoundingClientRect().top + window.pageYOffset - headerH - 16;

      window.scrollTo({ top: Math.max(0, top), behavior: 'smooth' });

      // Update URL without scroll
      if (history.pushState) {
        history.pushState(null, null, targetId);
      }
    });
  });

  /* ── Scroll reveal ── */
  var revealElements = document.querySelectorAll('.section, .trust');
  if (revealElements.length && 'IntersectionObserver' in window) {
    revealElements.forEach(function(el) { el.classList.add('reveal'); });

    var observer = new IntersectionObserver(function(entries) {
      entries.forEach(function(entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.08, rootMargin: '0px 0px -40px 0px' });

    revealElements.forEach(function(el) { observer.observe(el); });
  }

  /* ── Skills search / filter ── */
  var skillsSearch = document.getElementById('skillsSearch');
  if (skillsSearch) {
    skillsSearch.addEventListener('input', function() {
      var query = this.value.toLowerCase().trim();
      var categories = document.querySelectorAll('#skillsCategories .skill-category');

      categories.forEach(function(cat) {
        if (!query) {
          cat.classList.remove('hidden');
          cat.removeAttribute('open');
          // Keep first one open by default
          if (cat === categories[0]) cat.setAttribute('open', '');
          return;
        }

        var text = cat.textContent.toLowerCase();
        var match = text.indexOf(query) !== -1;
        cat.classList.toggle('hidden', !match);
        if (match) cat.setAttribute('open', '');
      });
    });
  }

  /* ── Active nav link highlighting ── */
  var navLinks = document.querySelectorAll('.header__nav a[href^="#"]');
  if (navLinks.length && 'IntersectionObserver' in window) {
    var sections = [];
    navLinks.forEach(function(link) {
      var id = link.getAttribute('href').substring(1);
      var section = document.getElementById(id);
      if (section) sections.push({ el: section, link: link });
    });

    var navObserver = new IntersectionObserver(function(entries) {
      entries.forEach(function(entry) {
        if (entry.isIntersecting) {
          navLinks.forEach(function(l) { l.style.color = ''; l.style.background = ''; });
          sections.forEach(function(s) {
            if (s.el === entry.target) {
              s.link.style.color = 'var(--color-text)';
              s.link.style.background = 'var(--color-bg-alt)';
            }
          });
        }
      });
    }, { threshold: 0.2, rootMargin: '-80px 0px -60% 0px' });

    sections.forEach(function(s) { navObserver.observe(s.el); });
  }

}());
