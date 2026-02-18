document.addEventListener('DOMContentLoaded', function() {
  var popup = document.getElementById('bottomPopup');
  var backToTopBtn = document.getElementById('backToTop');
  
  // Back to top button
  backToTopBtn.addEventListener('click', function() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
  
  // Check scroll position
  function checkScroll() {
    var scrollPosition = window.scrollY + window.innerHeight;
    var pageHeight = document.documentElement.scrollHeight;
    
    // Show popup only when within 100px of bottom
    if (pageHeight - scrollPosition <= 100) {
      popup.classList.add('show');
    } else {
      popup.classList.remove('show');
    }
  }
  
  // Listen to scroll
  window.addEventListener('scroll', checkScroll);
  
  // Check on load
  checkScroll();
});