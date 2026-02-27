/**
 * DF Advogados — Scroll Reveal Module
 * Uses IntersectionObserver to animate elements on scroll.
 */

export function initScrollReveal() {
  const reveals = document.querySelectorAll('.reveal');

  if (!reveals.length) return;

  const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.1,
  };

  const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        // Optional: stop observing after revealed
        // revealObserver.unobserve(entry.target);
      }
    });
  }, observerOptions);

  reveals.forEach((el) => revealObserver.observe(el));
}
