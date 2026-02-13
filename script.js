// Love Messages Array
const loveMessages = [
    "You are my favorite person in the whole world!",
    "Every moment with you is a moment well spent.",
    "My love for you grows stronger with each passing day.",
    "You make my heart skip a beat every single time.",
    "In you, I found my soulmate and best friend.",
    "You are the reason I smile, no matter what.",
    "Forever isn't long enough to love you.",
    "You are my greatest blessing and my sweetest dream.",
    "I love you more than words could ever express.",
    "With you, every day feels like Valentine's Day.",
    "You are my sunshine on the darkest days.",
    "My heart belongs to you completely and totally.",
    "You are the love of my life, today and always.",
    "Falling in love with you was the best decision.",
    "You are my today and all my tomorrows."
];

// Countdown Timer
function startCountdown() {
    function updateCountdown() {
        // Valentine's Day 2026 - February 14th
        const valentinesDay = new Date(2026, 1, 14).getTime();
        const now = new Date().getTime();
        const distance = valentinesDay - now;

        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        document.getElementById('days').textContent = days;
        document.getElementById('hours').textContent = hours;
        document.getElementById('minutes').textContent = minutes;
        document.getElementById('seconds').textContent = seconds;

        if (distance < 0) {
            document.getElementById('days').textContent = "0";
            document.getElementById('hours').textContent = "0";
            document.getElementById('minutes').textContent = "0";
            document.getElementById('seconds').textContent = "0";
        }
    }

    updateCountdown();
    setInterval(updateCountdown, 1000);
}

// Generate Random Love Message
function generateMessage() {
    const randomIndex = Math.floor(Math.random() * loveMessages.length);
    const message = loveMessages[randomIndex];
    const messageBox = document.getElementById('messageBox');
    const generatedMessage = document.getElementById('generatedMessage');

    generatedMessage.textContent = `"${message}"`;
    messageBox.style.display = 'block';
}

// Handle Contact Form Submission
function handleSubmit(event) {
    event.preventDefault();
    const formMessage = document.getElementById('formMessage');
    formMessage.textContent = '💕 Thank you for your message! Your love has been sent!';
    formMessage.style.color = '#e91e63';
    event.target.reset();

    setTimeout(() => {
        formMessage.textContent = '';
    }, 4000);
}

// Smooth Scroll to Section
function scrollToSection(sectionId) {
    const element = document.getElementById(sectionId);
    if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
    }
}

// Initialize
document.addEventListener('DOMContentLoaded', function() {
    startCountdown();

    // Add click animation to hearts
    const hearts = document.querySelectorAll('.heart');
    hearts.forEach(heart => {
        heart.addEventListener('click', function() {
            this.style.animation = 'none';
            setTimeout(() => {
                this.style.animation = '';
            }, 10);
        });
    });

    // Add animation to gallery items on scroll
    const galleryItems = document.querySelectorAll('.gallery-item');
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -100px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    galleryItems.forEach(item => {
        item.style.opacity = '0';
        item.style.transform = 'translateY(20px)';
        item.style.transition = 'all 0.6s ease';
        observer.observe(item);
    });

    // Add animation to about cards on scroll
    const aboutCards = document.querySelectorAll('.about-card');
    aboutCards.forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';
        card.style.transition = 'all 0.6s ease';
        observer.observe(card);
    });
});

// Create floating hearts on mouse movement (optional bonus feature)
document.addEventListener('mousemove', function(e) {
    if (Math.random() < 0.1) {
        const heart = document.createElement('div');
        heart.textContent = '❤️';
        heart.style.position = 'fixed';
        heart.style.left = e.clientX + 'px';
        heart.style.top = e.clientY + 'px';
        heart.style.fontSize = '1.5rem';
        heart.style.pointerEvents = 'none';
        heart.style.animation = 'float 3s ease-in-out forwards';
        heart.style.zIndex = '999';

        document.body.appendChild(heart);

        setTimeout(() => {
            heart.remove();
        }, 3000);
    }
});
