document.addEventListener("DOMContentLoaded", () => {
  const popup = document.querySelector('.bottom-popup');
  const popupBtn = document.querySelector('.popup-btn');

  function updatePopup(show) {
    if (show) popup.classList.add('show');
    else popup.classList.remove('show');
  }

  // Smooth scroll to top
  popupBtn.addEventListener('click', () => {
    if (window.LocoScrollInstance) {
      window.LocoScrollInstance.scrollTo(0, { duration: 800 });
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  });

  // Wait until Locomotive Scroll is initialized
  function initPopupWithLoco(locoScroll) {
    window.LocoScrollInstance = locoScroll;

    locoScroll.on('scroll', (obj) => {
      const scrollY = obj.scroll.y;
      const limitY = obj.limit.y;
      const threshold = 50;

      if (scrollY >= limitY - threshold) {
        updatePopup(true);
      } else {
        updatePopup(false);
      }
    });
  }

  // Check if Locomotive Scroll exists
  if (typeof LocomotiveScroll !== 'undefined') {
    const scrollEl = document.querySelector('[data-scroll-container]');
    if (scrollEl) {
      const locoScroll = new LocomotiveScroll({
        el: scrollEl,
        smooth: true
      });
      initPopupWithLoco(locoScroll);
    }
  } else {
    // Fallback for normal scroll
    window.addEventListener('scroll', () => {
      const scrollY = window.scrollY || window.pageYOffset;
      const scrollHeight = document.documentElement.scrollHeight;
      const clientHeight = window.innerHeight;
      const threshold = 50;

      if (scrollY + clientHeight >= scrollHeight - threshold) {
        updatePopup(true);
      } else {
        updatePopup(false);
      }
    });
  }
});
