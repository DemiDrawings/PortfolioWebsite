// ===== HAMBURGER MENU =====
const hamburger = document.querySelector('.ham-menu');
const nav = document.querySelector('header nav');

hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('active');
  nav.classList.toggle('active');
});

// Optional: Close nav when a link is clicked (mobile)
nav.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    hamburger.classList.remove('active');
    nav.classList.remove('active');
  });
});

// ===== BOTTOM POPUP =====
// Select popup element
const popup = document.querySelector('.bottom-popup');
const popupBtn = popup ? popup.querySelector('.popup-btn') : null;

// Function to show popup once scrolled to bottom
function handleScrollPopup() {
  const scrollY = window.scrollY || window.pageYOffset;
  const windowHeight = window.innerHeight;
  const bodyHeight = document.body.scrollHeight;

  if (scrollY + windowHeight >= bodyHeight - 5) { // near bottom
    popup.classList.add('show');
  } else {
    popup.classList.remove('show');
  }
}

window.addEventListener('scroll', handleScrollPopup);

// Optional: hide popup when button clicked
if (popupBtn) {
  popupBtn.addEventListener('click', () => {
    popup.classList.remove('show');
  });
}
