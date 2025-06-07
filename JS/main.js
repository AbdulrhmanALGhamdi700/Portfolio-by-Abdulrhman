// JS/main.js
'use strict';

// Sanitize helper (if you ever inject user strings)
function sanitize(input) {
  const div = document.createElement('div');
  div.textContent = input;
  return div.innerHTML;
}

document.addEventListener('DOMContentLoaded', () => {
  // Mobile nav toggle
  const navToggle = document.querySelector('.nav-toggle');
  const nav = document.querySelector('.nav');
  navToggle.addEventListener('click', () => {
    nav.classList.toggle('open');
  });

  // Smooth scroll for anchor links & guard
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', e => {
      const href = anchor.getAttribute('href');
      const targetId = href.slice(1);
      const target = document.getElementById(targetId);
      if (!target) return;
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth' });
      if (nav.classList.contains('open')) {
        nav.classList.remove('open');
      }
    });
  });

  // Nav-link highlight on scroll
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav a');
  window.addEventListener('scroll', () => {
    let scrollY = window.pageYOffset;
    sections.forEach(sec => {
      const top = sec.offsetTop - 120;
      const bottom = top + sec.offsetHeight;
      const id = sec.getAttribute('id');
      navLinks.forEach(link => {
        link.classList.toggle(
          'active',
          scrollY >= top && scrollY < bottom && link.getAttribute('href') === `#${id}`
        );
      });
    });
  });

  // Bite-button animation & nav
  document.querySelectorAll('.bite-button-wrapper').forEach(wrapper => {
    const btn = wrapper.querySelector('.bite-button');
    const teeth = wrapper.querySelector('.teeth');
    btn.addEventListener('click', () => {
      wrapper.classList.add('bite');
      teeth.addEventListener('transitionend', () => {
        window.location.hash = '#portfolio';
      }, { once: true });
    });
  });
});
