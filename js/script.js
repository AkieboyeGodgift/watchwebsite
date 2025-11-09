const sections = document.querySelectorAll(".fade-section");

const observer = new IntersectionObserver(
(entries) => {
    entries.forEach((entry) => {
    if (entry.isIntersecting) {
        entry.target.classList.add("visible");
    } else {
        entry.target.classList.remove("visible");
    }
    });
},
{ threshold: 0.1 }
);

sections.forEach((section) => {
observer.observe(section);
});

// Show/hide navbar on scroll
let lastScroll = 0;
const navbar = document.getElementById("navbar");
const mobileMenu = document.getElementById("mobile-menu");
const menuToggle = document.getElementById("menu-toggle");

window.addEventListener("scroll", () => {
const currentScroll = window.pageYOffset;
if (currentScroll > lastScroll && currentScroll > 80) {
    navbar.style.top = "-100px"; // Hide on scroll down
} else {
    navbar.style.top = "20px"; // Show on scroll up
}
lastScroll = currentScroll;
});

// Mobile menu toggle
menuToggle.addEventListener("click", () => {
mobileMenu.classList.toggle("hidden");
mobileMenu.classList.toggle("animate-fadeIn");
});

// Tailwind animation utility for mobile menu
tailwind.config = {
theme: {
    extend: {
    keyframes: {
        fadeIn: {
        "0%": { opacity: 0, transform: "translateY(-10px)" },
        "100%": { opacity: 1, transform: "translateY(0)" },
        },
    },
    animation: {
        fadeIn: "fadeIn 0.3s ease forwards",
    },
    },
},
};