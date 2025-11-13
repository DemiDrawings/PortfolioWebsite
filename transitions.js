document.addEventListener("DOMContentLoaded", () => {
    const transition = document.querySelector(".page-transition");
    const content = document.querySelector(".page-content");

    // PAGE ENTER — wait a tick then reveal content
    setTimeout(() => {
        content.classList.add("show");
    }, 80);

    // HANDLE LINK CLICKS
    document.querySelectorAll("a[href]").forEach(link => {
        // Ignore external or anchor links
        const url = link.getAttribute("href");
        if (!url || url.startsWith("#") || url.includes("javascript")) return;

        link.addEventListener("click", e => {
            e.preventDefault();
            transition.classList.add("active");

            setTimeout(() => {
                window.location.href = url;
            }, 600); // match CSS duration
        });
    });
});

document.querySelectorAll("a[href]").forEach(link => {
  link.addEventListener("click", e => {
    const url = link.getAttribute("href");
    if(url.startsWith("#")) return;
    e.preventDefault();

    const overlay = document.querySelector(".page-transition");
    overlay.classList.add("active"); // show overlay

    setTimeout(() => {
      window.location.href = url;
    }, 600); // match CSS transition duration
  });
});

