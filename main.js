// SCROLL ANIM
document.addEventListener("scroll", () => {
    document.querySelectorAll(".scroll-anim").forEach(el => {
        const pos = el.getBoundingClientRect().top;
        if (pos < window.innerHeight - 100) {
            el.classList.add("visible");
        }
    });
});

// TILT EFFECT
document.querySelectorAll(".tilt").forEach(card => {
    card.addEventListener("mousemove", e => {
        const rect = card.getBoundingClientRect();
        const x = (e.clientX - rect.left) / rect.width;
        const y = (e.clientY - rect.top) / rect.height;

        card.style.transform =
            `rotateX(${(0.5 - y) * 15}deg) rotateY(${(x - 0.5) * 15}deg)`;
    });

    card.addEventListener("mouseleave", () => {
        card.style.transform = "rotateX(0) rotateY(0)";
    });
});

// PARALLAX ON TRAINING CARDS
document.querySelectorAll(".parallax").forEach(card => {
    card.addEventListener("mousemove", e => {
        card.querySelector(".training-img").style.transform =
            `translateY(${(e.clientY / 60)}px)`;
    });
});
