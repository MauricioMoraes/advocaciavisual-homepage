// Advocacia Visual Animations with Anime.js
document.addEventListener('DOMContentLoaded', function() {
    
    // Hero Section Animations
    const heroSection = document.getElementById('advocacia-visual-hero');
    if (heroSection) {
        
        // Badge animation with visual design theme
        anime({
            targets: '.advocacia-visual-badge',
            translateY: [-40, 0],
            opacity: [0, 1],
            rotateX: [90, 0],
            duration: 1000,
            easing: 'easeOutCubic',
            delay: 300
        });
        
        // Title animation with creative effect
        anime({
            targets: '.advocacia-visual-title',
            translateX: [-100, 0],
            opacity: [0, 1],
            duration: 1200,
            easing: 'easeOutCubic',
            delay: 500
        });
        
        // Description with typewriter effect
        const description = document.querySelector('.advocacia-visual-description');
        if (description) {
            anime({
                targets: description,
                translateY: [30, 0],
                opacity: [0, 1],
                duration: 800,
                easing: 'easeOutCubic',
                delay: 700
            });
        }
        
        // CTA Buttons with design-focused animation
        anime({
            targets: '.advocacia-visual-cta-primary, .advocacia-visual-cta-secondary, .advocacia-visual-cta-tertiary',
            scale: [0.8, 1],
            opacity: [0, 1],
            duration: 600,
            easing: 'easeOutBack',
            delay: anime.stagger(100, {start: 900})
        });
        
        // Stats animation with visual law theme
        anime({
            targets: '.advocacia-visual-stat-1',
            innerHTML: [0, 500],
            round: 1,
            duration: 2000,
            easing: 'easeOutCubic',
            delay: 1300
        });
        
        anime({
            targets: '.advocacia-visual-stat-2',
            innerHTML: [0, 95],
            round: 1,
            duration: 2000,
            easing: 'easeOutCubic',
            delay: 1500
        });
        
        anime({
            targets: '.advocacia-visual-stat-3',
            innerHTML: [0, 50],
            round: 1,
            duration: 2000,
            easing: 'easeOutCubic',
            delay: 1700
        });
        
        // Creative floating animation for design elements
        anime({
            targets: '.stat-icon',
            translateY: function() {
                return anime.random(-10, 10);
            },
            rotate: function() {
                return anime.random(-5, 5);
            },
            duration: 3000,
            direction: 'alternate',
            loop: true,
            easing: 'easeInOutSine',
            delay: anime.stagger(400, {start: 2000})
        });
        
        // Color morphing animation for visual elements
        anime({
            targets: '.arrow-indicator',
            background: [
                'linear-gradient(45deg, #FF6B6B, #4ECDC4)',
                'linear-gradient(45deg, #4ECDC4, #45B7D1)',
                'linear-gradient(45deg, #45B7D1, #FF6B6B)'
            ],
            duration: 2000,
            loop: true,
            direction: 'alternate',
            easing: 'easeInOutQuad',
            delay: anime.stagger(500, {start: 2500})
        });
    }
    
    // Logo animation with design/visual theme
    anime({
        targets: '.navbar-logo',
        scale: [0.5, 1],
        rotate: [180, 0],
        opacity: [0, 1],
        duration: 1000,
        easing: 'easeOutElastic',
        delay: 100
    });
    
    // Visual Law gradient text animation
    const gradientText = document.querySelector('.text-gradient');
    if (gradientText) {
        anime({
            targets: gradientText,
            background: [
                'linear-gradient(90deg, #FF6B6B, #4ECDC4)',
                'linear-gradient(90deg, #4ECDC4, #45B7D1)',
                'linear-gradient(90deg, #45B7D1, #FF9F43)',
                'linear-gradient(90deg, #FF9F43, #FF6B6B)'
            ],
            duration: 4000,
            loop: true,
            easing: 'easeInOutQuad'
        });
    }
    
    // Interactive hover animations for CTA buttons
    document.querySelectorAll('.advocacia-visual-cta-primary, .advocacia-visual-cta-secondary, .advocacia-visual-cta-tertiary').forEach(button => {
        button.addEventListener('mouseenter', function() {
            anime({
                targets: this,
                scale: 1.1,
                boxShadow: '0 10px 30px rgba(0,0,0,0.2)',
                duration: 300,
                easing: 'easeOutCubic'
            });
        });
        
        button.addEventListener('mouseleave', function() {
            anime({
                targets: this,
                scale: 1,
                boxShadow: '0 4px 15px rgba(0,0,0,0.1)',
                duration: 300,
                easing: 'easeOutCubic'
            });
        });
    });
    
    // Design elements floating animation
    const designElements = document.querySelectorAll('.design-element');
    if (designElements.length > 0) {
        anime({
            targets: designElements,
            translateY: function() {
                return anime.random(-20, 20);
            },
            translateX: function() {
                return anime.random(-10, 10);
            },
            rotate: function() {
                return anime.random(-10, 10);
            },
            duration: function() {
                return anime.random(2000, 4000);
            },
            direction: 'alternate',
            loop: true,
            easing: 'easeInOutSine',
            delay: anime.stagger(200)
        });
    }
    
    // Scroll-triggered animations for sections
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Animate elements when they come into view with visual design theme
                anime({
                    targets: entry.target.querySelectorAll('.animate-on-scroll'),
                    translateY: [50, 0],
                    opacity: [0, 1],
                    rotate: [5, 0],
                    duration: 800,
                    easing: 'easeOutCubic',
                    delay: anime.stagger(150)
                });
                
                // Special animation for visual law elements
                anime({
                    targets: entry.target.querySelectorAll('.visual-law-element'),
                    scale: [0.9, 1],
                    opacity: [0, 1],
                    duration: 1000,
                    easing: 'easeOutElastic',
                    delay: anime.stagger(200, {start: 300})
                });
            }
        });
    }, observerOptions);
    
    // Observe sections for scroll animations
    document.querySelectorAll('section:not(#advocacia-visual-hero)').forEach(section => {
        observer.observe(section);
    });
    
    // Special animation for infographic previews
    document.querySelectorAll('.infographic-preview').forEach(preview => {
        preview.addEventListener('mouseenter', function() {
            anime({
                targets: this,
                scale: 1.05,
                rotateY: 5,
                duration: 400,
                easing: 'easeOutCubic'
            });
        });
        
        preview.addEventListener('mouseleave', function() {
            anime({
                targets: this,
                scale: 1,
                rotateY: 0,
                duration: 400,
                easing: 'easeOutCubic'
            });
        });
    });
});