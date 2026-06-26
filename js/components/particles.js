document.addEventListener("DOMContentLoaded", () => {
    /* ==========================================
       HTML5 CANVAS PARTICLE SYSTEM
       ========================================== */
    const canvas = document.getElementById("bg-canvas");
    if (canvas) {
        const ctx = canvas.getContext("2d");
        let particles = [];
        let mouse = { x: null, y: null, radius: 140 };

        // Handle window resizing
        function resizeCanvas() {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
            initParticles();
        }
        window.addEventListener("resize", resizeCanvas);
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;

        // Particle Class definition
        class Particle {
            constructor() {
                this.x = Math.random() * canvas.width;
                this.y = Math.random() * canvas.height;
                this.size = Math.random() * 2 + 1; // 1px to 3px size
                this.speedX = Math.random() * 0.4 - 0.2; // slow drift
                this.speedY = Math.random() * 0.4 - 0.2;
                // Dual colors matching the cyan-pink gradient theme
                this.color = Math.random() > 0.5 ? "rgba(0, 229, 255, 0.4)" : "rgba(255, 0, 127, 0.3)";
            }

            update() {
                this.x += this.speedX;
                this.y += this.speedY;

                // Bounce on viewport boundary
                if (this.x < 0 || this.x > canvas.width) this.speedX *= -1;
                if (this.y < 0 || this.y > canvas.height) this.speedY *= -1;
            }

            draw() {
                ctx.fillStyle = this.color;
                ctx.beginPath();
                ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
                ctx.fill();
            }
        }

        // Initialize particles count based on screen area
        function initParticles() {
            particles = [];
            const count = Math.floor((canvas.width * canvas.height) / 12000);
            const maxCount = Math.min(count, 120); // Cap particles to maintain top performance
            for (let i = 0; i < maxCount; i++) {
                particles.push(new Particle());
            }
        }

        // Mouse listeners
        window.addEventListener("mousemove", (e) => {
            mouse.x = e.clientX;
            mouse.y = e.clientY;
        });

        window.addEventListener("mouseleave", () => {
            mouse.x = null;
            mouse.y = null;
        });

        // Animation Loop
        function animate() {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            
            particles.forEach((p, index) => {
                p.update();
                p.draw();
                
                // Draw connecting lines between close particles
                for (let j = index + 1; j < particles.length; j++) {
                    const p2 = particles[j];
                    const dx = p.x - p2.x;
                    const dy = p.y - p2.y;
                    const dist = Math.sqrt(dx * dx + dy * dy);
                    
                    if (dist < 110) {
                        ctx.beginPath();
                        ctx.strokeStyle = `rgba(14, 165, 233, ${0.15 * (1 - driftVal(dist) / 110)})`; // Fades out as distance grows
                        ctx.lineWidth = 0.5;
                        ctx.moveTo(p.x, p.y);
                        ctx.lineTo(p2.x, p2.y);
                        ctx.stroke();
                    }
                }

                // Draw connecting lines to the mouse pointer
                if (mouse.x !== null && mouse.y !== null) {
                    const dx = p.x - mouse.x;
                    const dy = p.y - mouse.y;
                    const dist = Math.sqrt(dx * dx + dy * dy);
                    
                    if (dist < mouse.radius) {
                        ctx.beginPath();
                        ctx.strokeStyle = `rgba(0, 229, 255, ${0.25 * (1 - dist / mouse.radius)})`;
                        ctx.lineWidth = 0.8;
                        ctx.moveTo(p.x, p.y);
                        ctx.lineTo(mouse.x, mouse.y);
                        ctx.stroke();
                    }
                }
            });
            
            requestAnimationFrame(animate);
        }

        // Quick helper for distance calculations
        function driftVal(val) {
            return val;
        }

        initParticles();
        animate();
    }
});
