document.addEventListener("DOMContentLoaded", () => {
  // Add smooth scrolling to all links
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault()

      document.querySelector(this.getAttribute("href")).scrollIntoView({
        behavior: "smooth",
      })
    })
  })

  // Add animation to feature items
  const featureItems = document.querySelectorAll(".feature-item")
  featureItems.forEach((item, index) => {
    item.style.animationDelay = `${index * 0.2}s`
    item.classList.add("animate-fade-in")
  })
})

// Add a class to trigger animations when elements come into view
const observerOptions = {
  root: null,
  rootMargin: "0px",
  threshold: 0.1,
}

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("in-view")
    }
  })
}, observerOptions)

document.querySelectorAll(".feature-item, .product-image, .product-description, .team-member").forEach((el) => {
  observer.observe(el)
})

// Back to top button functionality
const backToTopButton = document.getElementById('back-to-top');

window.addEventListener('scroll', () => {
    if (window.pageYOffset > 300) {
        backToTopButton.classList.add('visible');
    } else {
        backToTopButton.classList.remove('visible');
    }
});

backToTopButton.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});