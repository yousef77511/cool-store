// Dark mode toggle
const toggleTheme = document.getElementById("toggle-theme");
if (toggleTheme) {
  toggleTheme.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");
  });
}

// FAQ slide toggle
document.querySelectorAll(".ww-faq-question").forEach((question) => {
  question.addEventListener("click", () => {
    const answer = question.nextElementSibling;
    const isActive = answer.classList.contains("active");

    document.querySelectorAll(".ww-faq-answer").forEach((ans) => {
      ans.classList.remove("active");
      ans.style.maxHeight = null;
    });

    if (!isActive) {
      answer.classList.add("active");
      answer.style.maxHeight = answer.scrollHeight + "px";
    }
  });
});

// Card fade-in animation on scroll
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("fade-in");
        observer.unobserve(entry.target);
      }
    });
  },
  {
    threshold: 0.2,
  }
);

document.querySelectorAll(".ww-card").forEach((card) => {
  observer.observe(card);
});

window.addEventListener("load", () => {
  const preloader = document.getElementById("preloader");
  preloader.classList.add("hidden");
});
