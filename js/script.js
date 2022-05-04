const hamburger = document.querySelector('.toggle-nav');
const nav = document.querySelector('.nav-links');
const navPattern = document.querySelector('.nav-pattern');

hamburger.addEventListener('click', (e) => {
  const icon = e.target;
  if (icon.alt === 'hamburger') {
    icon.setAttribute('alt', 'close');
    icon.setAttribute('src', 'images/icon-close.svg');
  } else {
    icon.setAttribute('alt', 'hamburger');
    icon.setAttribute('src', 'images/icon-hamburger.svg');
  }
  nav.classList.toggle('nav-open');
  navPattern.classList.toggle('nav-pattern-toggle');
});
