/**
 * DF Advogados — Navbar Module
 * Handles scroll effect and mobile menu toggle.
 */

export function initNavbar() {
  const navbar = document.getElementById('navbar');
  const hamburger = document.getElementById('hamburger');
  const navLinks = document.getElementById('navLinks');

  if (!navbar) return;

  // Scroll effect — add/remove class on scroll
  const SCROLL_THRESHOLD = 50;

  function handleScroll() {
    if (window.scrollY > SCROLL_THRESHOLD) {
      navbar.classList.add('navbar--scrolled');
    } else {
      navbar.classList.remove('navbar--scrolled');
    }
  }

  window.addEventListener('scroll', handleScroll, { passive: true });

  // Mobile menu toggle
  if (hamburger && navLinks) {
    hamburger.addEventListener('click', () => {
      navLinks.classList.toggle('navbar__links--active');
      hamburger.setAttribute(
        'aria-expanded',
        navLinks.classList.contains('navbar__links--active')
      );
    });
  }

  // Close mobile menu on link click
  if (navLinks) {
    navLinks.querySelectorAll('a').forEach((link) => {
      link.addEventListener('click', () => {
        navLinks.classList.remove('navbar__links--active');
        if (hamburger) {
          hamburger.setAttribute('aria-expanded', 'false');
        }
      });
    });
  }
}
