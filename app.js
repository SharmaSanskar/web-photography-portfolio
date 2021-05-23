// Selectors
const navLinks = document.querySelector('.nav-links');
const burger = document.querySelector('.burger');
const links = navLinks.querySelectorAll('a');

// Toggling burger menu
burger.addEventListener('click', () => {
  navLinks.classList.toggle('nav-open');
  burger.classList.toggle('toggle');
});

links.forEach((link) => {
  link.addEventListener('click', () => {
    navLinks.classList.toggle('nav-open');
    burger.classList.toggle('toggle');
  });
});
