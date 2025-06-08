'use strict';

document.addEventListener('DOMContentLoaded', () => {
  const topnav = document.getElementById('myTopnav');

  // 1. Mobile menu (hamburger) toggle
  document.getElementById('navToggle').addEventListener('click', () => {
    topnav.classList.toggle('responsive');
  });

  // 2. Highlight active link on scroll
  window.addEventListener('scroll', () => {
    const y = window.pageYOffset;
    document.querySelectorAll('section[id]').forEach(sec => {
      const top    = sec.offsetTop - 80;
      const bottom = top + sec.offsetHeight;
      const id     = sec.getAttribute('id');
      const link   = document.querySelector(`.menu a[href="#${id}"]`);
      if (y >= top && y < bottom) link?.classList.add('active');
      else link?.classList.remove('active');
    });
  });

  // 3. Dropdown click-to-toggle
  document.querySelectorAll('.dropdown').forEach(dd => {
    const trigger = dd.querySelector('a');
    trigger.addEventListener('click', e => {
      e.preventDefault();
      e.stopPropagation();
      // close any other open dropdowns
      document.querySelectorAll('.dropdown.open').forEach(openDd => {
        if (openDd !== dd) openDd.classList.remove('open');
      });
      // toggle this one
      dd.classList.toggle('open');
    });
  });

  // 4. Close dropdowns when clicking outside
  document.addEventListener('click', () => {
    document.querySelectorAll('.dropdown.open').forEach(dd => {
      dd.classList.remove('open');
    });
  });
});
