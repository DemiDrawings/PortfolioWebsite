(function () {
  const bar = document.createElement('div');
  bar.id = 'socialBar';
  bar.className = 'social-bar';
  bar.innerHTML = `
    <p class="social-bar-text">Want to chat? <span>I'd love to hear from you!</span></p>
    <div class="social-bar-icons">
      <a href="https://www.linkedin.com/in/demidraws" target="_blank">
        <img src="linkedin.png" alt="LinkedIn">
      </a>
      <a href="https://www.instagram.com/demi_saleeb/" target="_blank">
        <img src="insta.png" alt="Instagram">
      </a>
      <a href="mailto:demianas@outlook.com">
        <img src="mail.png" alt="Email">
      </a>
    </div>
  `;
  document.body.appendChild(bar);

  let barShown = false;

  window.addEventListener('scroll', () => {
    const atBottom = window.innerHeight + window.scrollY >= document.body.offsetHeight - 60;
    if (atBottom && !barShown) {
      barShown = true;
      bar.classList.remove('hidden');
      bar.classList.add('visible');
    } else if (!atBottom && barShown) {
      barShown = false;
      bar.classList.remove('visible');
      bar.classList.add('hidden');
    }
  });
})();