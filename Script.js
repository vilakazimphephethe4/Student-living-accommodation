// Sticky Navbar Scroll Effect
const header = document.querySelector("header");
if (header) {
  window.addEventListener("scroll", () => {
    header.classList.toggle("scrolled", window.scrollY > 50);
  });
}

// Mobile Menu Toggle
const menuToggle = document.getElementById("menuToggle");
const navbar = document.getElementById("navbar");

if (menuToggle && navbar) {
  menuToggle.addEventListener("click", () => {
    navbar.classList.toggle("active");
  });
}

// Back To Top Button
const backToTop = document.getElementById("backToTop");
if (backToTop) {
  window.addEventListener("scroll", () => {
    backToTop.style.display = window.scrollY > 300 ? "block" : "none";
  });
  backToTop.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
}

// Smooth Scroll for Anchor Links
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }

    // Close navbar on link click (safe check)
    if (navbar) {
      navbar.classList.remove("active");
    }
  });
});

// Lightbox Gallery
const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightbox-img');
const captionText = document.getElementById('caption');
const closeBtn = document.querySelector('.close');
const nextBtn = document.querySelector('.next');
const prevBtn = document.querySelector('.prev');

const images = Array.from(document.querySelectorAll('.gal-images'));
let currentIndex = 0;

if (images.length > 0 && lightbox && lightboxImg) {
  // Open Lightbox
  function openLightbox(index) {
    currentIndex = index;
    lightbox.style.display = 'flex';
    updateLightbox();
  }

  // Update the displayed image
  function updateLightbox() {
    const img = images[currentIndex];
    lightboxImg.src = img.src;
    captionText.textContent = img.alt || '';
  }

  // Close Lightbox
  function closeLightbox() {
    lightbox.style.display = 'none';
  }

  // Next/Prev navigation
  function showNext() {
    currentIndex = (currentIndex + 1) % images.length;
    updateLightbox();
  }

  function showPrev() {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    updateLightbox();
  }

  // Add Event Listeners
  images.forEach((img, i) => {
    img.addEventListener('click', () => openLightbox(i));
  });

  if (closeBtn) closeBtn.addEventListener('click', closeLightbox);
  if (nextBtn) nextBtn.addEventListener('click', showNext);
  if (prevBtn) prevBtn.addEventListener('click', showPrev);

  // Close on background click
  lightbox.addEventListener('click', (e) => {
    if (e.target === lightbox) closeLightbox();
  });

  // Keyboard support
  document.addEventListener('keydown', (e) => {
    if (lightbox.style.display === 'flex') {
      if (e.key === 'ArrowRight') showNext();
      if (e.key === 'ArrowLeft') showPrev();
      if (e.key === 'Escape') closeLightbox();
    }
  });
}

console.log("✅ Script loaded successfully");

