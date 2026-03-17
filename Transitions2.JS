/* =============================================
   PAGE TRANSITION — MULTI-PANEL SLASH + GLITCH
   Drop this script tag just before </body> on every page:
   <script src="transitions2.js"></script>

   Also add these two elements right after your <body> tag:

   <div id="transition-overlay">
     <div class="t-panel"></div>
     <div class="t-panel"></div>
     <div class="t-panel"></div>
     <div class="t-panel"></div>
     <div class="t-panel"></div>
   </div>
   <div id="transition-label"></div>
   ============================================= */

(function () {
  const overlay = document.getElementById('transition-overlay');
  const label   = document.getElementById('transition-label');
  let isTransitioning = false;

  /* ── On page load: run the EXIT animation (panels slash off-screen) ── */
  window.addEventListener('DOMContentLoaded', () => {
    document.body.classList.add('page-loaded');

    // If we arrived via a transition, panels are fully covering screen.
    // Slash them out to reveal the new page.
    overlay.classList.add('exiting');

    // Clean up after exit animation finishes (~0.7s total with delays)
    setTimeout(() => {
      overlay.classList.remove('exiting');
    }, 900);

    // Wire up all nav links
    document.querySelectorAll('nav a, .logo').forEach(link => {
      link.addEventListener('click', handleNavClick);
    });
  });

  /* ── Intercept nav clicks ── */
  function handleNavClick(e) {
    const href = this.getAttribute('href');

    // Let anchor links (#section), mailto, external links pass through normally
    if (!href || href.startsWith('#') || href.startsWith('mailto') || href.startsWith('http')) return;

    e.preventDefault();
    if (isTransitioning) return;

    const pageName = this.textContent.trim();
    triggerTransition(href, pageName);
  }

  /* ── Main transition sequence ── */
  function triggerTransition(href, pageName) {
    isTransitioning = true;

    // 1. Body glitch flash
    document.body.classList.add('transitioning');
    setTimeout(() => document.body.classList.remove('transitioning'), 400);

    // 2. Show the page name label mid-screen with glitch effect
    if (label) {
      label.textContent = pageName;
      label.classList.remove('visible');
      void label.offsetWidth; // force reflow to restart animation
      label.classList.add('visible');
    }

    // 3. Panels slash IN (cover the screen)
    overlay.classList.remove('exiting');
    overlay.classList.add('entering');

    // 4. Once fully covered (~0.72s = last panel delay 0.16s + duration 0.55s),
    //    navigate to the new page
    setTimeout(() => {
      window.location.href = href;
    }, 750);
  }

})();