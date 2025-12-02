// Mobile menu toggle (optional future expansion)
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('show');
});

// Shrink navbar on scroll
window.addEventListener("scroll", () => {
    const navbar = document.querySelector(".navbar");
    navbar.style.padding = window.scrollY > 20 ? "10px 0" : "18px 0";
});
window.addEventListener("scroll", () => {
    const header = document.querySelector("header");

    if (window.scrollY > 20) {
        header.style.background = "rgba(255, 255, 255, 0.28)";
        header.style.backdropFilter = "blur(18px)";
    } else {
        header.style.background = "rgba(255, 255, 255, 0.2)";
        header.style.backdropFilter = "blur(12px)";
    }
});
// Soft fade-in animation when section enters view
const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add("fadeInUp");
        }
    });
});

document.querySelectorAll(".about, .about-card, .mv-box")
    .forEach(el => observer.observe(el));
<script>
  document.getElementById('year').textContent = new Date().getFullYear();
</script>
