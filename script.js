/ Add event listeners to navigation links
document.querySelectorAll('nav a').forEach(link => {
    link.addEventListener('click', event => {
        event.preventDefault();
        const target = document.querySelector(link.getAttribute('href'));
        target.scrollIntoView({ behavior: 'smooth' });
    });
});

// Adjust layout for smaller screens
window.addEventListener('resize', () => {
    if (window.innerWidth < 768) {
        document.querySelector('.project-grid')