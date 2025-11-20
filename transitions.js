document.addEventListener("DOMContentLoaded", () => {
    
    // PAGE LOAD — fade-in + zoom-in
    requestAnimationFrame(() => {
        document.body.classList.add("page-loaded");
    });

    // PAGE EXIT — fade-out + fast zoom-out
    document.querySelectorAll('a[href]').forEach(link => {
        const url = link.getAttribute("href");

        // Ignore anchors and JS links
        if (!url || url.startsWith("#") || url.startsWith("javascript")) return;

        link.addEventListener("click", e => {
            e.preventDefault();

            document.body.classList.add("page-exit");

            setTimeout(() => {
                window.location.href = url;
            }, 320); // match exit animation speed
        });
    });
});
