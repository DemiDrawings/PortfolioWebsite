document.addEventListener('DOMContentLoaded', function() {
  var popup = document.getElementById('scrollPopup');
  var btn = document.getElementById('topButton');
  
  // Wait for Locomotive Scroll to initialize
  setTimeout(function() {
    var locoScroll = document.querySelector('[data-scroll-container]');
    
    if (locoScroll && window.LocomotiveScroll) {
      // Locomotive Scroll is active - use its scroll events
      var scroll = new LocomotiveScroll({
        el: locoScroll,
        smooth: true,
        multiplier: 1
      });
      
      scroll.on('scroll', function(obj) {
        var scrollY = obj.scroll.y;
        var limitY = obj.limit.y;
        
        // Show popup when within 200px of bottom
        if (scrollY >= limitY - 200) {
          popup.classList.add('visible');
        } else {
          popup.classList.remove('visible');
        }
      });
      
      // Back to top with Locomotive
      btn.onclick = function() {
        scroll.scrollTo(0);
      };
      
    } else {
      // Fallback for pages without Locomotive
      window.onscroll = function() {
        var bottom = window.innerHeight + window.pageYOffset >= document.body.offsetHeight - 200;
        
        if (bottom) {
          popup.classList.add('visible');
        } else {
          popup.classList.remove('visible');
        }
      };
      
      btn.onclick = function() {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      };
    }
  }, 500);
});