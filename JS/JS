'use strict';

/* === Utility: sanitize user input === */
function sanitize(input) {
  const div = document.createElement('div');
  div.textContent = input;
  return div.innerHTML;
}

/* === Smooth scrolling & nav highlight === */
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  });
});

const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('header nav a');
window.addEventListener('scroll', () => {
  let scrollY = window.pageYOffset;
  sections.forEach(sec => {
    const top = sec.offsetTop - 120;
    const bottom = top + sec.offsetHeight;
    const id = sec.getAttribute('id');
    navLinks.forEach(link => {
      link.classList.toggle(
        'active',
        scrollY >= top && scrollY < bottom && link.getAttribute('href') === '#' + id
      );
    });
  });
});

/* === Bite-button Animation & Navigation === */
const biteWrappers = document.querySelectorAll('.bite-button-wrapper');
biteWrappers.forEach(wrapper => {
  const btn = wrapper.querySelector('.bite-button');
  const teeth = wrapper.querySelector('.teeth');

  btn.addEventListener('click', () => {
    // 1. Trigger CSS bite animation
    wrapper.classList.add('bite');

    // 2. After animation, navigate
    teeth.addEventListener('transitionend', () => {
      // Example: scroll to portfolio
      window.location.hash = '#portfolio';
    }, { once: true });
  });
});
