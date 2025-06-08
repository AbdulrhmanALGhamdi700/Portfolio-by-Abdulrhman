'use strict';
document.addEventListener('DOMContentLoaded', () => {
  // Mobile sidebar toggle
  const toggle = document.querySelector('.mobile-toggle');
  const sidebar = document.querySelector('.sidebar');
  toggle?.addEventListener('click', () => {
    sidebar.classList.toggle('open');
  });

  // Smooth scroll for in-page links
  document.querySelectorAll('a[href^="#"]').forEach(a => {
    a.addEventListener('click', e => {
      const tgt = document.querySelector(a.getAttribute('href'));
      if (!tgt) return;
      e.preventDefault();
      tgt.scrollIntoView({ behavior: 'smooth' });
      if (sidebar.classList.contains('open')) {
        sidebar.classList.remove('open');
      }
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
