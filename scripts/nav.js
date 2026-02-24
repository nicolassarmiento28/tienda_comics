document.addEventListener('DOMContentLoaded', () => {
    const navbar = document.getElementById('navbar');
    const menuToggle = document.getElementById('menuToggle');

    if (!navbar || !menuToggle) {
        return;
    }

    menuToggle.addEventListener('click', (event) => {
        event.preventDefault();
        navbar.classList.toggle('active');
    });

    const navLinks = navbar.querySelectorAll('a:not(.responsive)');
    navLinks.forEach((link) => {
        link.addEventListener('click', () => {
            navbar.classList.remove('active');
        });
    });

    window.addEventListener('resize', () => {
        if (window.innerWidth > 600) {
            navbar.classList.remove('active');
        }
    });

    window.addEventListener('scroll', () => {
        navbar.classList.remove('active');
    });
});
