const toggle = document.querySelector(".nav-toggle");
const nav = document.querySelector(".nav");

toggle.addEventListener("click", () => {
  nav.classList.toggle("open");
});

nav.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    nav.classList.remove("open");
  });
});

// ================= SCROLL REVEAL =================

const revealElements = document.querySelectorAll(".reveal");

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("active");
      } else {
        // 👇 ESTO es lo que hace que se reinicie al subir
        entry.target.classList.remove("active");
      }
    });
  },
  {
    threshold: 0.15,
  },
);

revealElements.forEach((el) => observer.observe(el));
