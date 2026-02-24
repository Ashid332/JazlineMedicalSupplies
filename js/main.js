document.addEventListener('DOMContentLoaded', () => {
    // Mobile Navigation Toggle
    const mobileToggle = document.querySelector('.mobile-toggle');
    const mobileClose = document.querySelector('.mobile-close');
    const mobileNav = document.querySelector('.mobile-nav');

    if (mobileToggle && mobileClose && mobileNav) {
        mobileToggle.addEventListener('click', () => {
            mobileNav.classList.add('open');
        });

        mobileClose.addEventListener('click', () => {
            mobileNav.classList.remove('open');
        });
    }
});
