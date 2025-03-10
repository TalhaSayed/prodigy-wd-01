// Toggle the navigation menu for mobile view
function toggleMenu() {
    const navLinks = document.querySelector('.nav-links');
    navLinks.classList.toggle('active');
  }
  
  // Smooth scroll for navigation links
  document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
  
      document.querySelector(this.getAttribute('href')).scrollIntoView({
        behavior: 'smooth'
      });
    });
  });
  
  // Form submission and validation
  document.getElementById('contact-form').addEventListener('submit', function (e) {
    e.preventDefault();
  
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;
  
    if (name && email && message) {
      document.getElementById('form-response').textContent = "Your message has been sent successfully!";
      document.getElementById('form-response').classList.remove('hidden');
      document.getElementById('contact-form').reset();
    } else {
      document.getElementById('form-response').textContent = "Please fill in all fields!";
      document.getElementById('form-response').classList.remove('hidden');
      document.getElementById('form-response').style.backgroundColor = "#e74c3c";
    }
  });
