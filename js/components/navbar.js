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
       MOBILE HAMBURGER TOGGLE MENU
       ========================================== */
    const navToggle = document.querySelector(".nav-toggle");
    const navLinksContainer = document.querySelector(".nav-links");
    const navLinks = document.querySelectorAll(".nav-links a");

    if (navToggle && navLinksContainer) {
        navToggle.addEventListener("click", (e) => {
            e.stopPropagation();
            navToggle.classList.toggle("open");
            navLinksContainer.classList.toggle("open");
        });

        // Close menu when a link is clicked
        navLinks.forEach(link => {
            link.addEventListener("click", () => {
                navToggle.classList.remove("open");
                navLinksContainer.classList.remove("open");
            });
        });

        // Close menu when clicking outside
        document.addEventListener("click", (e) => {
            if (!navLinksContainer.contains(e.target) && !navToggle.contains(e.target)) {
                navToggle.classList.remove("open");
                navLinksContainer.classList.remove("open");
            }
        });
    }

    /* ==========================================
       SMOOTH SCROLLING WITH NAVBAR OFFSET
       ========================================== */
    navLinks.forEach(link => {
        link.addEventListener("click", function(e) {
            const targetId = this.getAttribute("href");
            if (targetId.startsWith("#")) {
                e.preventDefault();
                
                if (targetId === "#" || targetId === "#home") {
                    window.scrollTo({
                        top: 0,
                        behavior: "smooth"
                    });
                    
                    // Manually update active class
                    navLinks.forEach(l => l.classList.remove("active"));
                    const homeLink = document.querySelector('.nav-links a[href="#home"]') || document.querySelector('.nav-links a[href="#"]');
                    if (homeLink) homeLink.classList.add("active");
                    return;
                }

                const targetElement = document.querySelector(targetId);
                if (targetElement) {
                    const headerHeight = header ? header.offsetHeight : 80;
                    const elementPosition = targetElement.getBoundingClientRect().top + window.pageYOffset;
                    const offsetPosition = elementPosition - headerHeight;

                    window.scrollTo({
                        top: offsetPosition,
                        behavior: "smooth"
                    });
                }
            }
        });
    });

    /* ==========================================
       INTERSECTION OBSERVER FOR ACTIVE NAV LINKS
       ========================================== */
    const observedElements = document.querySelectorAll("section[id]");
    
    if (observedElements.length > 0) {
        const observerOptions = {
            root: null,
            rootMargin: "-25% 0px -55% 0px", // Trigger when section occupies the sweet spot of viewport
            threshold: 0
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const id = entry.target.getAttribute("id");
                    if (id) {
                        navLinks.forEach(link => {
                            link.classList.remove("active");
                            if (link.getAttribute("href") === `#${id}`) {
                                link.classList.add("active");
                            }
                        });

                        // Trigger skills card staggered fade-in animations when skills section is visible
                        if (id === "skills") {
                            const cards = entry.target.querySelectorAll(".skills-card");
                            cards.forEach(card => {
                                card.classList.add("visible");
                            });
                        }
                    }
                }
            });
        }, observerOptions);

        observedElements.forEach(element => observer.observe(element));
    }

    /* ==========================================
       SCROLL PROGRESS & BACK TO TOP BUTTON
       ========================================== */
    const backToTopBtn = document.getElementById("back-to-top");
    const progressBar = document.querySelector(".progress-bar");
    
    if (backToTopBtn && progressBar) {
        const calculateScroll = () => {
            const scrollTotal = document.documentElement.scrollHeight - window.innerHeight;
            const scrollPercent = scrollTotal > 0 ? window.scrollY / scrollTotal : 0;
            
            // stroke-dasharray is 283 (circumference for radius 45)
            const offset = 283 - (scrollPercent * 283);
            progressBar.style.strokeDashoffset = offset;
            
            if (window.scrollY > 200) {
                backToTopBtn.classList.add("visible");
            } else {
                backToTopBtn.classList.remove("visible");
            }
        };
        
        window.addEventListener("scroll", calculateScroll);
        window.addEventListener("resize", calculateScroll);
        
        backToTopBtn.addEventListener("click", () => {
            window.scrollTo({
                top: 0,
                behavior: "smooth"
            });
        });
        
        // Initial run
        calculateScroll();
    }

    /* ==========================================
       CUSTOM INTERACTIVE PINK TOUCH CURSOR
       ========================================== */
    const cursorTouch = document.querySelector(".custom-cursor-touch");
    
    if (cursorTouch && window.matchMedia("(pointer: fine)").matches) {
        let mouseX = 0, mouseY = 0; // Real mouse coordinates
        let touchX = 0, touchY = 0; // Trailing touch bubble coordinates
        
        // Track mouse movement
        window.addEventListener("mousemove", (e) => {
            mouseX = e.clientX;
            mouseY = e.clientY;
        });
        
        // Animation loop for fluid LERP trail lagging
        const animateCursor = () => {
            // Lerp algorithm: trailing coordinate = current + (target - current) * factor
            // Factor 0.24 makes it feel responsive yet organic like a fluid touch bubble
            touchX += (mouseX - touchX) * 0.24;
            touchY += (mouseY - touchY) * 0.24;
            
            cursorTouch.style.left = `${touchX}px`;
            cursorTouch.style.top = `${touchY}px`;
            
            requestAnimationFrame(animateCursor);
        };
        requestAnimationFrame(animateCursor);
        
        // Hover state on links & buttons
        const hoverTargets = document.querySelectorAll("a, button, [role='button'], .logo");
        hoverTargets.forEach(target => {
            target.addEventListener("mouseenter", () => {
                document.body.classList.add("cursor-hover");
            });
            target.addEventListener("mouseleave", () => {
                document.body.classList.remove("cursor-hover");
            });
        });
        
        // Click state listeners
        window.addEventListener("mousedown", () => {
            document.body.classList.add("cursor-clicking");
        });
        
        window.addEventListener("mouseup", () => {
            document.body.classList.remove("cursor-clicking");
        });
    }
});
