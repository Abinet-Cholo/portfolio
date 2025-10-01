// ============================== script.js ==============================

// Contact form – simple redirect (can replace with AJAX later)
const contactForm = document.getElementById("contactForm");
if (contactForm) {
  contactForm.addEventListener("submit", (e) => {
    e.preventDefault();
    window.location.href = "thankyou.html";
  });
}

// Toggle Experience Sections
const techBtn = document.getElementById('show-tech');
const leadBtn = document.getElementById('show-lead');
const techExp = document.getElementById('technical-experience');
const leadExp = document.getElementById('leadership-experience');

if (techBtn && leadBtn && techExp && leadExp) {
  techBtn.addEventListener('click', () => {
    techExp.style.display = 'block';
    leadExp.style.display = 'none';
    techBtn.classList.add('active');
    leadBtn.classList.remove('active');
  });

  leadBtn.addEventListener('click', () => {
    techExp.style.display = 'none';
    leadExp.style.display = 'block';
    leadBtn.classList.add('active');
    techBtn.classList.remove('active');
  });
}

// AOS init with easing and delay
AOS.init({
  duration: 1200,
  once: true,
  easing: 'ease-in-out',
  delay: 100,
});

// GSAP navbar animation
gsap.from(".navbar", {
  y: -50,
  opacity: 0,
  duration: 1,
  ease: "power3.out"
});

// Smooth fade-in for sections using ScrollTrigger
if (gsap && gsap.utils && gsap.utils.toArray) {
  gsap.registerPlugin(ScrollTrigger);
  gsap.utils.toArray(".section").forEach((section) => {
    gsap.from(section, {
      scrollTrigger: {
        trigger: section,
        start: "top 80%",
        toggleActions: "play none none reverse",
      },
      opacity: 0,
      y: 30,
      duration: 1,
      ease: "power2.out"
    });
  });
}

// Interactive skill tag hover effect with GSAP
document.querySelectorAll('.skill-tag').forEach(tag => {
  tag.addEventListener('mouseenter', () => {
    gsap.to(tag, { scale: 1.1, boxShadow: "0 0 12px #a64dff", duration: 0.2 });
  });
  tag.addEventListener('mouseleave', () => {
    gsap.to(tag, { scale: 1, boxShadow: "none", duration: 0.2 });
  });
});

// Smooth scroll for nav links
document.querySelectorAll('a.nav-link').forEach(link => {
  link.addEventListener('click', (e) => {
    if (link.hash) {
      e.preventDefault();
      document.querySelector(link.hash).scrollIntoView({
        behavior: 'smooth'
      });
    }
  });
});

