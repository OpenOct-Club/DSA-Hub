import './style.css';

// Initialize the application
document.addEventListener('DOMContentLoaded', () => {
  // Setup event listeners
  setupEventListeners();
});

// Setup event listeners
function setupEventListeners() {
  // Theme toggle
  const themeToggle = document.querySelector('.theme-toggle');
  if (themeToggle) {
    themeToggle.addEventListener('click', toggleTheme);
  }
  
  // Mobile menu toggle
  const hamburger = document.querySelector('.hamburger');
  if (hamburger) {
    hamburger.addEventListener('click', toggleMobileMenu);
  }
  
  // Contact form submission
  const contactForm = document.querySelector('.contact-form');
  if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
      e.preventDefault();
      
      // Get form values
      const name = document.getElementById('name').value;
      const email = document.getElementById('email').value;
      const message = document.getElementById('message').value;
      
      // Simple validation
      if (!name || !email || !message) {
        alert('Please fill in all fields');
        return;
      }
      
      // Simulate form submission
      alert(`Thank you for your message, ${name}! We'll get back to you soon.`);
      contactForm.reset();
    });
  }
}

// Toggle theme between light and dark
function toggleTheme() {
  const body = document.body;
  const themeIcon = document.querySelector('.theme-toggle i');
  
  body.classList.toggle('light-theme');
  
  if (body.classList.contains('light-theme')) {
    themeIcon.classList.remove('fa-moon');
    themeIcon.classList.add('fa-sun');
    localStorage.setItem('theme', 'light');
  } else {
    themeIcon.classList.remove('fa-sun');
    themeIcon.classList.add('fa-moon');
    localStorage.setItem('theme', 'dark');
  }
}

// Toggle mobile menu
function toggleMobileMenu() {
  const navLinks = document.querySelector('.nav-links');
  navLinks.classList.toggle('active');
}

// Check for saved theme preference
function loadThemePreference() {
  const savedTheme = localStorage.getItem('theme');
  const body = document.body;
  const themeIcon = document.querySelector('.theme-toggle i');
  
  if (savedTheme === 'light') {
    body.classList.add('light-theme');
    themeIcon.classList.remove('fa-moon');
    themeIcon.classList.add('fa-sun');
  }
}

// Load theme preference on page load
document.addEventListener('DOMContentLoaded', loadThemePreference);