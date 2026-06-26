document.addEventListener("DOMContentLoaded", () => {
    /* ==========================================
       DYNAMIC NAVBAR SCROLL STYLING
       ========================================== */
    const header = document.querySelector("header");
    if (header) {
        window.addEventListener("scroll", () => {
            if (window.scrollY > 50) {
                header.classList.add("scrolled");
            } else {
                header.classList.remove("scrolled");
            }
        });
    }

    /* ==========================================
       NAV BAR CLICK ACTIVE TOGGLE
       ========================================== */
    const navLinks = document.querySelectorAll(".nav-links a");
    navLinks.forEach(link => {
        link.addEventListener("click", function() {
            navLinks.forEach(l => l.classList.remove("active"));
            this.classList.add("active");
        });
    });
});
