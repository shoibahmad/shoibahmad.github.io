document.addEventListener('DOMContentLoaded', function () {
  // --- Navbar Toggle ---
  const burgerMenu = document.querySelector('.burger-menu');
  const navLinks = document.querySelector('.nav-links');
  burgerMenu.addEventListener('click', function() {
      navLinks.classList.toggle('active');
  });
  // --- Typed Animation ---
  const typedTextSpan = document.getElementById('typed-text');
  const typedText = typedTextSpan.textContent;
  typedTextSpan.textContent = '';
  let typedIndex = 0;
  function type() {
      if (typedIndex < typedText.length) {
          typedTextSpan.textContent += typedText.charAt(typedIndex);
          typedIndex++;
          setTimeout(type, 70);
      }
  }
  type();
  // --- GSAP Animations ---
  gsap.registerPlugin(ScrollTrigger);
  // Hero Section Animations
  const heroTimeline = gsap.timeline();
  heroTimeline.fromTo('#hero-section .hero-container h1', {y: -20, opacity: 0}, {y: 0, opacity: 1, duration: 0.6})
      .fromTo('#hero-section .hero-container p', {opacity: 0}, {opacity: 1, duration: 0.8}, "-=0.2")
      .fromTo('#hero-section .social-links a', {opacity: 0, y: 10}, {opacity: 1, y: 0, stagger: 0.2, duration: 0.5}, "-=0.4");
  //About section Animations
  gsap.fromTo('#about-section h2', {opacity: 0, y: 20}, {opacity: 1, y: 0, duration: 0.6, scrollTrigger: {
          trigger: "#about-section h2",
          start: "top 80%",
          end: "top 20%",
          toggleActions: "play none none reverse",
      }});
  gsap.fromTo('#about-section .about-content', {opacity: 0, y: 20}, {opacity: 1, y: 0, duration: 0.8, scrollTrigger: {
          trigger: "#about-section .about-content",
          start: "top 80%",
          end: "top 20%",
          toggleActions: "play none none reverse",
      }});
  gsap.fromTo('#about-section .skills', {opacity: 0, y: 20}, {opacity: 1, y: 0, duration: 0.8, scrollTrigger: {
          trigger: "#about-section .skills",
          start: "top 80%",
          end: "top 20%",
          toggleActions: "play none none reverse",
      }});
  //Project section Animations
  gsap.fromTo('#projects-section h2', {opacity: 0, y: 20}, {opacity: 1, y: 0, duration: 0.6, scrollTrigger: {
          trigger: "#projects-section h2",
          start: "top 80%",
          end: "top 20%",
          toggleActions: "play none none reverse",
      }});
  gsap.fromTo("#projects-section .project-grid", {opacity: 0, y:20}, {opacity: 1, y: 0, duration: 0.8,scrollTrigger: {
          trigger: "#projects-section .project-grid",
          start: "top 80%",
          end: "top 20%",
          toggleActions: "play none none reverse",
      }});
  //Certificate Section Animations
  gsap.fromTo('#certificates-section h2', {opacity: 0, y: 20}, {opacity: 1, y: 0, duration: 0.6, scrollTrigger: {
          trigger: "#certificates-section h2",
          start: "top 80%",
          end: "top 20%",
          toggleActions: "play none none reverse",
      }});
  gsap.fromTo("#certificates-section .certificate-grid", {opacity: 0, y:20}, {opacity: 1, y: 0, duration: 0.8,scrollTrigger: {
          trigger: "#certificates-section .certificate-grid",
          start: "top 80%",
          end: "top 20%",
          toggleActions: "play none none reverse",
      }});
  //Contact Section Animations
  gsap.fromTo('#contact-section h2', {opacity: 0, y: 20}, {opacity: 1, y: 0, duration: 0.6, scrollTrigger: {
          trigger: "#contact-section h2",
          start: "top 80%",
          end: "top 20%",
          toggleActions: "play none none reverse",
      }});
  gsap.fromTo("#contact-section .contact-form", {opacity: 0, y:20}, {opacity: 1, y: 0, duration: 0.8,scrollTrigger: {
          trigger: "#contact-section .contact-form",
          start: "top 80%",
          end: "top 20%",
          toggleActions: "play none none reverse",
      }});
  gsap.fromTo("#contact-section .contact-card", {opacity: 0, y:20}, {opacity: 1, y: 0, duration: 0.8,scrollTrigger: {
          trigger: "#contact-section .contact-card",
          start: "top 80%",
          end: "top 20%",
          toggleActions: "play none none reverse",
      }});
  // Initialize Skill Bars
  const skillLevels = document.querySelectorAll('.skill-level');
  skillLevels.forEach(skillLevel => {
      const percentage = skillLevel.dataset.level;
      skillLevel.style.width = percentage + '%';
  });

  // --- Contact Form Submission ---
  const contactForm = document.getElementById('contact-form');

  contactForm.addEventListener('submit', async (e) => {
      e.preventDefault();

      const name = document.getElementById('name').value;
      const email = document.getElementById('email').value;
      const message = document.getElementById('message').value;

      try {
          const response = await fetch('/.netlify/functions/contact', {
              method: 'POST',
              body: JSON.stringify({ name, email, message }),
              headers: {
                  'Content-Type': 'application/json',
              },
          });

          if (response.ok) {
              alert('Message sent successfully!');
              contactForm.reset(); // Clear the form
          } else {
              alert('Failed to send message. Please try again.');
              console.error('Form submission error:', response.status, await response.text());
          }
      } catch (error) {
          alert('An error occurred. Please try again later.');
          console.error('Form submission error:', error);
      }
  });
});

let img = document.getElementById("certificate-card");
let btn = document.getElementById("certi-button")
openF = () => {
    img.classList = "zooming-img"
}