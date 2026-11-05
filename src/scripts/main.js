'use strict';

const form = document.querySelector('.contact-form');
const animatedElements = document.querySelectorAll(
  '.recommended, .categories, .about-us, .contact-us, .product, .category',
);

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.15 },
);

animatedElements.forEach((element) =>
  observer.observe(element),
);

const updateMenuState = () => {
  document.body.classList.toggle(
    'menu-open',
    window.location.hash === '#menu',
  );
};

updateMenuState();
window.addEventListener('hashchange', updateMenuState);

document.querySelectorAll('.nav__link').forEach((link) => {
  link.addEventListener('click', () => {
    window.location.hash = link.getAttribute('href');
  });
});

form?.addEventListener('submit', (event) => {
  event.preventDefault();

  const button = form.querySelector('button');

  if (!button) {
    return;
  }

  button.textContent = 'Sent!';
  button.classList.add('button--sent');
  button.disabled = true;
  form.reset();

  window.setTimeout(() => {
    button.classList.remove('button--sent');
  }, 600);

  window.setTimeout(() => {
    button.textContent = 'Send';
    button.disabled = false;
  }, 2000);
});
