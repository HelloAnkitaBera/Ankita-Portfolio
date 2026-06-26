document.addEventListener("DOMContentLoaded", () => {
    /* ==========================================
       TYPEWRITER ANIMATION
       ========================================== */
    const textElement = document.querySelector(".role-badge span");
    if (textElement) {
        const words = ["AI & ML Developer", "Python Developer", "Full Stack Developer"];
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
});
