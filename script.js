document.addEventListener("DOMContentLoaded", function() {
  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("fade-in-visible");
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1 });

  // Observe all elements with the class "fade-in"
  document.querySelectorAll('.fade-in').forEach(element => {
    observer.observe(element);
  });
});
