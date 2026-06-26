document.addEventListener("DOMContentLoaded", () => {
    /* ==========================================
       3D PARALLAX IMAGE TILT EFFECT
       ========================================== */
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
});
