document.addEventListener('DOMContentLoaded', () => {
    const track = document.getElementById('color-guard-videos');
    const previous = document.querySelector('[data-video-direction="-1"]');
    const next = document.querySelector('[data-video-direction="1"]');
    if (!track || !previous || !next) return;

    const updateButtons = () => {
        previous.disabled = track.scrollLeft <= 2;
        next.disabled = track.scrollLeft >= track.scrollWidth - track.clientWidth - 2;
    };

    [previous, next].forEach((button) => {
        button.addEventListener('click', () => {
            const cards = track.querySelectorAll('.hobby-video');
            if (!cards.length) return;
            const step = cards.length > 1
                ? cards[1].getBoundingClientRect().left - cards[0].getBoundingClientRect().left
                : cards[0].getBoundingClientRect().width;
            track.scrollBy({
                left: Number(button.dataset.videoDirection) * step,
                behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'instant' : 'smooth'
            });
        });
    });
    track.addEventListener('scroll', updateButtons, { passive: true });
    window.addEventListener('resize', updateButtons);
    updateButtons();
});
