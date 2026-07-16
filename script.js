// Initialize Lucide icons
if (typeof lucide !== 'undefined') {
    lucide.createIcons();
}

// Mobile menu toggle
function toggleMenu() {
    document.querySelector('.nav-links').classList.toggle('active');
}

// Smooth scroll for nav links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
            // Close mobile menu if open
            document.querySelector('.nav-links').classList.remove('active');
        }
    });
});

// Add animate class to elements first
const animatedElements = document.querySelectorAll('.skill-card, .project-card, .timeline-item, .stat-card');
animatedElements.forEach((el, index) => {
    el.classList.add('animate');
    el.style.animationDelay = `${index * 0.1}s`;
});

// Intersection Observer for animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, observerOptions);

// Now observe the elements that have the animate class
animatedElements.forEach(el => observer.observe(el));

// Fallback: ensure elements become visible after 2 seconds no matter what
setTimeout(() => {
    animatedElements.forEach(el => {
        el.classList.add('visible');
    });
}, 2000);
