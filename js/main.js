/**
 * DF Advogados — Main Application Entry Point
 * Initializes all modules when the DOM is ready.
 */

import { initNavbar } from './navbar.js';
import { initScrollReveal } from './scroll-reveal.js';
import { initSmoothScroll } from './smooth-scroll.js';
import { initContactForm } from './contact-form.js';

document.addEventListener('DOMContentLoaded', () => {
  initNavbar();
  initScrollReveal();
  initSmoothScroll();
  initContactForm();

  console.log('✅ DF Advogados — Site initialized.');
});
