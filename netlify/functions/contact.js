document.addEventListener('DOMContentLoaded', function () {
    // Typed.js initialization
    const typedTextSpan = document.getElementById('typed-text');
    if (typedTextSpan) {
        const typed = new Typed('#typed-text', {
            strings: ['Software Engineer | Flutter Enthusiast.', 'Problem Solver.', 'Creative Mind.'],
            typeSpeed: 50,
            backSpeed: 25,
            backDelay: 2000,
            loop: true
        });
    }

    // Navbar toggle
    const burgerMenu = document.querySelector('.burger-menu');
    const navLinks = document.querySelector('.nav-links');

    if (burgerMenu && navLinks) {
        burgerMenu.addEventListener('click', () => {
            navLinks.classList.toggle('active');
        });
    }

    // Skill bars animation
    const skillLevels = document.querySelectorAll('.skill-level');

    skillLevels.forEach(skillLevel => {
        const level = skillLevel.dataset.level;
        skillLevel.style.width = level + '%';
    });


    // Certificate Modal Functionality
    const modal = document.getElementById('certificateModal');
    const modalImage = document.getElementById('modalImage');
    const closeButton = document.querySelector('.close-button');
    const certificateImages = document.querySelectorAll('.certificate-card img');
    const viewCertificateButtons = document.querySelectorAll('.view-certificate-btn');


    function openModal(imageSrc) {
        modalImage.src = imageSrc;
        modal.style.display = "block";
    }

    certificateImages.forEach(image => {
        image.addEventListener('click', () => {
            openModal(image.src);
        });
    });

    viewCertificateButtons.forEach(button => {
        button.addEventListener('click', (event) => {
            event.stopPropagation(); // Prevent click from propagating to the card
            const imageSrc = button.parentElement.querySelector('img').src;
            openModal(imageSrc);
        });
    });


    closeButton.addEventListener('click', () => {
        modal.style.display = "none";
    });

    window.addEventListener('click', (event) => {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    });

    // Contact Form Submission
    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', function (event) {
            event.preventDefault();

            // Validate form
            let isValid = true;
            const nameInput = document.getElementById('name');
            const emailInput = document.getElementById('email');
            const messageInput = document.getElementById('message');

            const nameError = document.getElementById('name-error');
            const emailError = document.getElementById('email-error');
            const messageError = document.getElementById('message-error');

            if (!nameInput.value.trim()) {
                nameError.textContent = 'Name is required';
                isValid = false;
            } else {
                nameError.textContent = '';
            }

            if (!emailInput.value.trim()) {
                emailError.textContent = 'Email is required';
                isValid = false;
            } else if (!isValidEmail(emailInput.value.trim())) {
                emailError.textContent = 'Invalid email format';
                isValid = false;
            } else {
                emailError.textContent = '';
            }

            if (!messageInput.value.trim()) {
                messageError.textContent = 'Message is required';
                isValid = false;
            } else {
                messageError.textContent = '';
            }

            if (isValid) {
                // Simulate success (replace with actual submission logic)
                Swal.fire({
                    title: 'Message Sent!',
                    text: 'Thank you for your message. I will get back to you soon!',
                    icon: 'success',
                    confirmButtonText: 'Okay'
                }).then(() => {
                    // Clear the form
                    nameInput.value = '';
                    emailInput.value = '';
                    messageInput.value = '';
                });
            }
        });
    }

    // Helper function to validate email format
    function isValidEmail(email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }

    // GSAP Animations
    gsap.registerPlugin(ScrollTrigger);

    gsap.from(".hero-container h1", {
        duration: 1,
        y: -50,
        opacity: 0,
        ease: "power2.out"
    });

    gsap.from(".hero-container p", {
        duration: 1,
        opacity: 0,
        delay: 0.5,
        ease: "power2.out"
    });

    gsap.from(".social-links a", {
        duration: 0.8,
        opacity: 0,
        stagger: 0.2,
        delay: 1,
        ease: "power2.out"
    });

    gsap.from("#about-section h2, .about-content, .skills", {
        scrollTrigger: {
            trigger: "#about-section",
            start: "top 80%",
            end: "bottom 20%",
            toggleActions: "restart pause resume reverse"
        },
        duration: 1,
        y: 50,
        opacity: 0,
        stagger: 0.3,
        ease: "power2.out"
    });

    gsap.from("#projects-section h2, .project-grid", {
        scrollTrigger: {
            trigger: "#projects-section",
            start: "top 80%",
            end: "bottom 20%",
            toggleActions: "restart pause resume reverse"
        },
        duration: 1,
        y: 50,
        opacity: 0,
        stagger: 0.3,
        ease: "power2.out"
    });

    gsap.from("#certificates-section h2, .certificate-grid", {
        scrollTrigger: {
            trigger: "#certificates-section",
            start: "top 80%",
            end: "bottom 20%",
            toggleActions: "restart pause resume reverse"
        },
        duration: 1,
        y: 50,
        opacity: 0,
        stagger: 0.3,
        ease: "power2.out"
    });

    gsap.from("#contact-section h2, .contact-form, .contact-card", {
        scrollTrigger: {
            trigger: "#contact-section",
            start: "top 80%",
            end: "bottom 20%",
            toggleActions: "restart pause resume reverse"
        },
        duration: 1,
        y: 50,
        opacity: 0,
        stagger: 0.3,
        ease: "power2.out"
    });
});