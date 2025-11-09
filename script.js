// main.js

document.addEventListener("DOMContentLoaded", function () {
  const boxes = document.querySelectorAll(".box");

  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        observer.unobserve(entry.target); // optional: stop observing once visible
      }
    });
  }, {
    threshold: 0.2 // triggers when 20% of the element is visible
  });

  boxes.forEach(box => observer.observe(box));
});
