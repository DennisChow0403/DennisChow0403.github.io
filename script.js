/* script.js */

document.addEventListener("DOMContentLoaded", function () {
    // Mobile nav toggle
    const navToggle = document.getElementById('nav-toggle');
    const mainNav = document.getElementById('main-nav');

    if (navToggle && mainNav) {
        navToggle.addEventListener('click', () => {
            mainNav.classList.toggle('open');
        });
    }

    // Smooth scroll for internal links
    const navLinks = document.querySelectorAll("a[href^='#']");
    navLinks.forEach(link => {
        link.addEventListener('click', function (e) {
            const href = this.getAttribute('href');
            if (!href || href === '#') return;
            const targetId = href.substring(1);
            const target = document.getElementById(targetId);
            if (!target) return;
            e.preventDefault();
            const offset = 24; // small offset for aesthetics
            const top = target.getBoundingClientRect().top + window.pageYOffset - offset;
            window.scrollTo({ top, behavior: 'smooth' });

            // close mobile nav after click
            if (mainNav && mainNav.classList.contains('open')) {
                mainNav.classList.remove('open');
            }
        });
    });

    // dynamic year in footer (if present)
    const yearEl = document.getElementById('current-year');
    if (yearEl) yearEl.textContent = new Date().getFullYear();
});
