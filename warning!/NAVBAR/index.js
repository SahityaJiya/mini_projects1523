document.querySelectorAll("nav ul li button").forEach((button, index) => {
    button.addEventListener("click", () => {
        const activeItem = document.querySelector(".active");
        if (activeItem) {
            activeItem.classList.remove("active");
        }
        button.parentElement.classList.add("active");

        gsap.to(button, {
            duration: 0.6,
            scale: 1.1,
            ease: "power2.out",
            backgroundColor: "#e0e0e0",
            onComplete: () => {
                gsap.to(button, { scale: 1, duration: 0.4, ease: "power1.in" });
            }
        });
    });

    button.addEventListener("mouseenter", () => {
        gsap.to(button, { duration: 0.3, y: -10, ease: "power2.out" });
    });

    button.addEventListener("mouseleave", () => {
        gsap.to(button, { duration: 0.3, y: 0, ease: "power2.in" });
    });
});
