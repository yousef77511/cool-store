// Preloader hide with fade animation
window.addEventListener("load", () => {
  const preloader = document.getElementById("preloader");
  if (preloader) {
    preloader.classList.add("hidden");
    setTimeout(() => {
      preloader.style.display = "none";
    }, 600);
  }
});

// Intersection Observer for scroll-based animation
const observer = new IntersectionObserver(
  (entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("fade-in-up");
        observer.unobserve(entry.target);
      }
    });
  },
  {
    threshold: 0.1,
  }
);

const regularElements = document.querySelectorAll(
  ".ww-card, .ww-flavor-card, .ww-reasons div, .ww-location-list div"
);
regularElements.forEach((el, i) => {
  el.style.opacity = 0;
  el.style.animationDelay = `${i * 0.1}s`;
  observer.observe(el);
});

const reviewElements = document.querySelectorAll(".ww-review");
reviewElements.forEach((el, i) => {
  el.style.opacity = 0;
  el.style.animationDelay = `${i * 0.05}s`; // Trigger reviews earlier
  observer.observe(el);
});

// New clean sticky navbar logic
const toggleTheme = document.getElementById("toggle-theme");
if (toggleTheme) {
  toggleTheme.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");
  });
}

// FAQ question toggle with animation
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

// Smooth image slider with slight parallax effect
const images = [
  "images/waffle1.jpg",
  "images/waffle2.jpg",
  "images/waffle3.jpg",
];
let index = 0;
const sliderImage = document.getElementById("slider-image");

function fadeOutIn(callback) {
  if (!sliderImage) return;
  sliderImage.style.opacity = 0;
  setTimeout(() => {
    callback();
    sliderImage.style.opacity = 1;
  }, 300);
}

function showNextImage() {
  index = (index + 1) % images.length;
  fadeOutIn(() => {
    sliderImage.src = images[index];
  });
}

if (sliderImage) {
  sliderImage.style.transition = "opacity 0.9s ease, transform 0.5s ease";
  setInterval(showNextImage, 3000);
  window.addEventListener("scroll", () => {
    const scrollY = window.scrollY;
    sliderImage.style.transform = `translateY(${scrollY * 0.02}px)`;
  });
}

// Fix mobile menu toggle
const hamburger = document.getElementById("hamburger");
const navLinks = document.getElementById("navLinks");

if (hamburger && navLinks) {
  hamburger.addEventListener("click", () => {
    navLinks.classList.toggle("active");
    hamburger.classList.toggle("open");
  });
}
