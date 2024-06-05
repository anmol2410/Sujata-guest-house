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
  