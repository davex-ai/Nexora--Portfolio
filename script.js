// script.js
// For now, just to test the setup
console.log("Portfolio loaded!");
  // Smooth scroll behavior (already works)
  document.querySelectorAll('nav a').forEach(link => {
    link.addEventListener('click', function(e) {
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });

  // Reveal About Section on scroll
  const aboutSection = document.querySelector('.about-section');

  function checkAboutVisible() {
    const triggerPoint = window.innerHeight * 0.8;
    const sectionTop = aboutSection.getBoundingClientRect().top;

    if (sectionTop < triggerPoint) {
      aboutSection.classList.add('show');
      window.removeEventListener('scroll', checkAboutVisible); // Only run once
    }
  }

  window.addEventListener('scroll', checkAboutVisible);
  // Run it on load too, in case it's already in view
  checkAboutVisible();


  function revealSectionOnScroll() {
    const sectionTop = aboutSection.getBoundingClientRect().top;
    const screenHeight = window.innerHeight;

    if (sectionTop < screenHeight - 100) { // adjust threshold if needed
      aboutSection.classList.add('show');
      window.removeEventListener('scroll', revealSectionOnScroll); // optional: run once
    }
  }

  window.addEventListener('scroll', revealSectionOnScroll);

 let lastScrollTop = 0;
const iconBar = document.getElementById("contact-icons");

window.addEventListener("scroll", function () {
  const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

  if (scrollTop > lastScrollTop) {
    // scrolling down
    iconBar.style.opacity = "0";
    iconBar.style.transform = "translateY(-20px)";
  } else {
    // scrolling up
    iconBar.style.opacity = "1";
    iconBar.style.transform = "translateY(0)";
  }

  lastScrollTop = scrollTop <= 0 ? 0 : scrollTop; // Avoid negative values
});
  
  