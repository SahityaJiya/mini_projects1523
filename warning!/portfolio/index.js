document.addEventListener("DOMContentLoaded", () => {
    // GSAP animation for the navigation
    gsap.from("header nav ul li", {
        duration: 1,
        opacity: 0,
        y: -30,
        stagger: 0.2,
        ease: "power3.out"
    });

    // Hero Section animation
    gsap.from(".hero h1", {
        duration: 1.5,
        opacity: 0,
        y: 50,
        ease: "power3.out"
    });

    gsap.from(".hero p", {
        duration: 1.5,
        opacity: 0,
        y: 50,
        delay: 0.3,
        ease: "power3.out"
    });

    gsap.from(".hero button", {
        duration: 1.5,
        opacity: 0,
        y: 50,
        delay: 0.6,
        ease: "power3.out"
    });

    // Projects Section animation
    gsap.from("#projects h2", {
        duration: 1,
        opacity: 0,
        y: 30,
        scrollTrigger: "#projects",
        ease: "power2.out"
    });

    gsap.from(".project", {
        duration: 1.2,
        opacity: 0,
        scale: 0.9,
        stagger: 0.2,
        scrollTrigger: "#projects",
        ease: "power2.out"
    });

    // Contact Section animation
    gsap.from("#contact h2", {
        duration: 1,
        opacity: 0,
        y: 30,
        scrollTrigger: "#contact",
        ease: "power2.out"
    });

    gsap.from("#contact form input, #contact form textarea, #contact form button", {
        duration: 1,
        opacity: 0,
        y: 20,
        stagger: 0.2,
        scrollTrigger: "#contact",
        ease: "power2.out"
    });

    // Footer icons animation
    gsap.from("footer.social-icons li", {
        duration: 1,
        opacity: 0,
        y: 20,
        stagger: 0.2,
        scrollTrigger: "footer",
        ease: "power2.out"
    });

    // Scroll to section function
    window.scrollToSection = (id) => {
        document.getElementById(id).scrollIntoView({ behavior: "smooth" });
    };

    // Form submission logic
    const contactForm = document.getElementById('contact-form');
    const commentForm = document.getElementById('comment-form');

    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        document.querySelector('.form-success').style.display = 'block';
        setTimeout(() => {
            document.querySelector('.form-success').style.display = 'none';
            contactForm.reset();
        }, 3000);
    });

    commentForm.addEventListener('submit', function(e) {
        e.preventDefault();
        document.querySelector('.comment-success').style.display = 'block';
        setTimeout(() => {
            document.querySelector('.comment-success').style.display = 'none';
            commentForm.reset();
        }, 3000);
    });
});
