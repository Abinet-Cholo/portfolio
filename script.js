// ===== MOBILE NAV TOGGLE =====
const navToggle = document.getElementById("navToggle");
const navLinks = document.getElementById("navLinks");

if (navToggle && navLinks) {
  navToggle.addEventListener("click", () => {
    navLinks.classList.toggle("open");
  });
}

// ===== FOOTER YEAR =====
const y = document.getElementById("year");
if (y) y.textContent = new Date().getFullYear();

// ===== TYPING ANIMATION =====
const typedEl = document.getElementById("typed");
const phrases = [
  "CS @ NYU",
  "Backend & AI Enthusiast",
  "Building APIs & Products"
];
let p = 0,
  i = 0,
  deleting = false;

function typeLoop() {
  if (!typedEl) return;

  const text = phrases[p];
  typedEl.textContent = text.substring(0, i);

  if (!deleting && i++ === text.length) {
    deleting = true;
    setTimeout(typeLoop, 1200); // pause at end of word
    return;
  }
  if (deleting && i-- === 0) {
    deleting = false;
    p = (p + 1) % phrases.length;
  }
  setTimeout(typeLoop, deleting ? 50 : 100);
}
typeLoop();

// ===== SCROLL REVEAL =====
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((e) => {
      if (e.isIntersecting) e.target.classList.add("show");
    });
  },
  { threshold: 0.12 }
);

document
  .querySelectorAll(".section .card, .section__title")
  .forEach((el) => {
    el.classList.add("reveal");
    observer.observe(el);
  });

// ===== SMOOTH SCROLL =====
document.querySelectorAll('a[href^="#"]').forEach((a) => {
  a.addEventListener("click", (e) => {
    const id = a.getAttribute("href").slice(1);
    const target = document.getElementById(id);
    if (target) {
      e.preventDefault();
      window.scrollTo({
        top: target.offsetTop - 64,
        behavior: "smooth",
      });
      if (navLinks.classList.contains("open")) {
        navLinks.classList.remove("open");
      }
    }
  });
});
