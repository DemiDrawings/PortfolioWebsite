document.addEventListener("DOMContentLoaded", () => {
  const hamburger = document.querySelector('.ham-menu');
  const nav = document.querySelector('.main-nav');

  function toggleNav(e) {
    e.preventDefault();
    hamburger.classList.toggle('active');
    nav.classList.toggle('active');
  }

  // Click & touch support for iOS
  hamburger.addEventListener('click', toggleNav);
  hamburger.addEventListener('touchstart', toggleNav);

  // Close nav when a link is clicked
  nav.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      hamburger.classList.remove('active');
      nav.classList.remove('active');
    });
  });
});
