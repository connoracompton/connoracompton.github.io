// Hamburger menu toggle - combines navigation and header-right items
const hamburger = document.querySelector('.hamburger');
const nav = document.querySelector('nav');
const headerRight = document.querySelector('.header-right');

if (hamburger && nav) {
    hamburger.addEventListener('click', () => {
        nav.classList.toggle('active');
    });

    // Close menu when clicking outside
    document.addEventListener('click', (e) => {
        if (!hamburger.contains(e.target) && !nav.contains(e.target) && !headerRight.contains(e.target)) {
            nav.classList.remove('active');
        }
    });

    // Close menu when clicking a link
    const navLinks = nav.querySelectorAll('a');
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            nav.classList.remove('active');
        });
    });
}