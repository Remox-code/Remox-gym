// افکت ظاهر شدن نرم هنگام اسکرول
const elements = document.querySelectorAll('.fade');

function revealOnScroll() {
    elements.forEach(el => {
        const rect = el.getBoundingClientRect();
        if (rect.top < window.innerHeight - 100) {
            el.classList.add('visible');
        }
    });
}

window.addEventListener('scroll', revealOnScroll);
window.addEventListener('load', revealOnScroll);
