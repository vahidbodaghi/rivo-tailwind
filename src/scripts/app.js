const toggle = document.querySelector(".nav-toggle");
const nav = document.getElementById("nav");

toggle.addEventListener("click", () => {
  const isOpen = nav.classList.toggle("hidden");
});

// Close the mobile menu after selecting a link
nav.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    if (window.innerWidth < 768) {
      nav.classList.add("hidden");
    }
  });
});

