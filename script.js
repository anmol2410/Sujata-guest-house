document.addEventListener('DOMContentLoaded', () => {
    const navbarToggle = document.getElementById('navbar-toggle');
    const navbarRight = document.getElementById('navbar-right');
    const subNavbarToggle = document.getElementById('sub-navbar-toggle');
    const subNavbarLinks = document.getElementById('sub-navbar-links');

  
    navbarToggle.addEventListener('click', () => {
      navbarRight.classList.toggle('active');
    });
  
    subNavbarToggle.addEventListener('click', () => {
      subNavbarLinks.classList.toggle('active');
    });
  
    // Accessibility enhancements
    navbarToggle.setAttribute('aria-expanded', 'false');
    navbarToggle.addEventListener('click', () => {
      const expanded = navbarToggle.getAttribute('aria-expanded') === 'true' || false;
      navbarToggle.setAttribute('aria-expanded', !expanded);
    });
  
    subNavbarToggle.setAttribute('aria-expanded', 'false');
    subNavbarToggle.addEventListener('click', () => {
      const expanded = subNavbarToggle.getAttribute('aria-expanded') === 'true' || false;
      subNavbarToggle.setAttribute('aria-expanded', !expanded);
    });
  });
  


let slideIndex = 0;

function showSlides() {
    let slides = document.getElementsByClassName("slide");
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";  
    }
    slideIndex++;
    if (slideIndex > slides.length) {
        slideIndex = 1;
    }    
    slides[slideIndex - 1].style.display = "block";  
    setTimeout(showSlides, 5000); // Change image every 3 seconds
}

document.addEventListener("DOMContentLoaded", function() {
    showSlides();
});
