'use strict';

document.addEventListener('DOMContentLoaded', () => {
  // Mobile nav toggle
  const navToggle = document.querySelector('.nav-toggle');
  const nav       = document.querySelector('.nav');
  navToggle?.addEventListener('click', () => {
    nav.classList.toggle('open');
  });

  // Smooth scroll for in-page anchors (CV page)
  document.querySelectorAll('a[href^="#"]').forEach(a => {
    a.addEventListener('click', e => {
      const tgt = document.querySelector(a.getAttribute('href'));
      if (!tgt) return;
      e.preventDefault();
      tgt.scrollIntoView({ behavior: 'smooth' });
      nav.classList.remove('open');
    });
  });

  // Dropdown toggle for mobile
  document.querySelectorAll('.dropbtn').forEach(btn => {
    btn.addEventListener('click', e => {
      e.stopPropagation();
      btn.parentElement.classList.toggle('open');
    });
  });
  document.addEventListener('click', () => {
    document.querySelectorAll('.dropdown.open').forEach(dd => {
      dd.classList.remove('open');
    });
  });

  // Demo overlay logic (Projects page)
  const overlay  = document.getElementById('demo-overlay');
  const iframe   = document.getElementById('demo-frame');
  const closeBtn = document.getElementById('overlay-close');

  document.querySelectorAll('.play-btn').forEach(btn => {
    btn.addEventListener('click', e => {
      const demo = e.target.closest('.project-card')?.dataset.demo;
      if (!demo) return;
      iframe.src = `${demo}/index.html`;
      overlay.classList.add('open');
    });
  });

  closeBtn?.addEventListener('click', () => {
    overlay.classList.remove('open');
    iframe.src = '';
  });
});
