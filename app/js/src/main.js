document.addEventListener('DOMContentLoaded', () => {
    const links = document.querySelectorAll('a[href="#contact"]');
    const target = document.querySelector('.main-contacts');

    if (target) {
        links.forEach(link => {
            link.addEventListener('click', e => {
                e.preventDefault();
                target.classList.toggle('show');
            });
        });
    }
});
