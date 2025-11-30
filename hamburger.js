document.addEventListener('DOMContentLoaded', () => {
  const hamMenu = document.querySelector('.ham-menu');
  const offScreenMenu = document.querySelector('.off-screen-menu');

  if (!hamMenu || !offScreenMenu) {
    console.warn('ham-menu or off-screen-menu element not found. Check class names.');
    return;
  }

  // Toggle menu open/close
  const toggleMenu = () => {
    hamMenu.classList.toggle('active');
    offScreenMenu.classList.toggle('active');
    document.body.classList.toggle('menu-open');
  };

  hamMenu.addEventListener('click', (e) => {
    e.stopPropagation(); // prevent click bubbling to document
    toggleMenu();
  });

  // Close when clicking any link inside the menu
  offScreenMenu.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      hamMenu.classList.remove('active');
      offScreenMenu.classList.remove('active');
      document.body.classList.remove('menu-open');
    });
  });

  // Close when clicking/tapping outside the menu
  document.addEventListener('click', (e) => {
    if (!offScreenMenu.classList.contains('active')) return;
    if (!offScreenMenu.contains(e.target) && !hamMenu.contains(e.target)) {
      hamMenu.classList.remove('active');
      offScreenMenu.classList.remove('active');
      document.body.classList.remove('menu-open');
    }
  }, { passive: true });

  // Close on Escape
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && offScreenMenu.classList.contains('active')) {
      hamMenu.classList.remove('active');
      offScreenMenu.classList.remove('active');
      document.body.classList.remove('menu-open');
    }
  });
});
