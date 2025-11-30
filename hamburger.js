const hamMenu = document.querySelector('.ham-menu');
let mobileNav = document.querySelector('.mobile-nav');

// If you don’t already have a mobile nav in HTML, create it dynamically from the desktop nav
if (!mobileNav) {
  mobileNav = document.createElement('nav');
  mobileNav.classList.add('mobile-nav');
  document.querySelector('header').appendChild(mobileNav);

  // Copy links from desktop nav
  document.querySelectorAll('.main-nav a').forEach(a => {
    const link = a.cloneNode(true);
    mobileNav.appendChild(link);
  });
}

// Toggle hamburger and mobile nav
hamMenu.addEventListener('click', () => {
  hamMenu.classList.toggle('active');
  mobileNav.classList.toggle('active');
});
