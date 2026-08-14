// Small progressive enhancements — the site works fully without this file.

document.addEventListener('DOMContentLoaded', () => {
  // Highlight the active nav link based on scroll position.
  const sections = document.querySelectorAll('main section[id]');
  const navLinks = document.querySelectorAll('.site-nav a');

  if ('IntersectionObserver' in window && sections.length && navLinks.length) {
    const map = new Map();
    navLinks.forEach(link => {
      const id = link.getAttribute('href').replace('#', '');
      map.set(id, link);
    });

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        const link = map.get(entry.target.id);
        if (!link) return;
        if (entry.isIntersecting) {
          navLinks.forEach(l => l.removeAttribute('aria-current'));
          link.setAttribute('aria-current', 'true');
        }
      });
    }, { rootMargin: '-40% 0px -50% 0px' });

    sections.forEach(section => observer.observe(section));
  }
});
