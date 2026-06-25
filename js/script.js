document.addEventListener("DOMContentLoaded", () => {
    // Typewriter Animation
    const textElement = document.querySelector(".home-content h3 span");
    if (textElement) {
        const words = ["AI & ML Student", "Python Developer", "Full Stack Developer"];
        let wordIndex = 0;
        let charIndex = 0;
        let isDeleting = false;

        function type() {
            const currentWord = words[wordIndex];
            if (isDeleting) {
                textElement.textContent = currentWord.substring(0, charIndex - 1);
                charIndex--;
            } else {
                textElement.textContent = currentWord.substring(0, charIndex + 1);
                charIndex++;
            }

            let typeSpeed = 100;
            if (isDeleting) {
                typeSpeed /= 2;
            }

            if (!isDeleting && charIndex === currentWord.length) {
                typeSpeed = 1500; // Pause at the end of the word
                isDeleting = true;
            } else if (isDeleting && charIndex === 0) {
                isDeleting = false;
                wordIndex = (wordIndex + 1) % words.length;
                typeSpeed = 500; // Pause before typing the next word
            }

            setTimeout(type, typeSpeed);
        }
        type();
    }

    // Dynamic Floating Capsule Navbar Scroll
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

    // Mouse Move Parallax Effect on Profile Image Box
    const imgBox = document.querySelector(".img-box");
    const homeImg = document.querySelector(".home-img");
    if (imgBox && homeImg) {
        homeImg.addEventListener("mousemove", (e) => {
            const rect = homeImg.getBoundingClientRect();
            const x = e.clientX - rect.left - (rect.width / 2);
            const y = e.clientY - rect.top - (rect.height / 2);
            
            // Limit the tilt rotation
            const rotateX = -(y / rect.height) * 15;
            const rotateY = (x / rect.width) * 15;
            
            imgBox.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.03)`;
        });
        
        homeImg.addEventListener("mouseleave", () => {
            imgBox.style.transform = "rotateX(0deg) rotateY(0deg) scale(1)";
        });
    }

    // Nav Link Clicks Active Toggle
    const navLinks = document.querySelectorAll(".nav-links a");
    navLinks.forEach(link => {
        link.addEventListener("click", function() {
            navLinks.forEach(l => l.classList.remove("active"));
            this.classList.add("active");
        });
    });
});
