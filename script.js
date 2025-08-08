// Page transition animations
document.addEventListener('DOMContentLoaded', function() {
    const links = document.querySelectorAll('.link');
    
    links.forEach(link => {
        link.addEventListener('click', function(e) {
            // Don't intercept external links
            if (this.classList.contains('external')) {
                return;
            }
            
            e.preventDefault();
            const href = this.getAttribute('href');
            
            // Add exit animation
            document.body.classList.add('page-exit');
            
            // Wait for animation to complete, then navigate
            setTimeout(() => {
                window.location.href = href;
            }, 300);
        });
    });
    
    // Add entrance animation for new pages
    document.body.classList.add('page-enter');
    setTimeout(() => {
        document.body.classList.remove('page-enter');
    }, 50);
});

// Add subtle hover sound effect (optional)
const links = document.querySelectorAll('.link');
links.forEach(link => {
    link.addEventListener('mouseenter', function() {
        this.style.transition = 'all 0.2s cubic-bezier(0.25, 0.46, 0.45, 0.94)';
    });
});

// Add keyboard navigation support
document.addEventListener('keydown', function(e) {
    if (e.key === 'Tab') {
        document.body.classList.add('keyboard-navigation');
    }
});

document.addEventListener('mousedown', function() {
    document.body.classList.remove('keyboard-navigation');
});

// Smooth scroll to top on page load
window.addEventListener('load', function() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});