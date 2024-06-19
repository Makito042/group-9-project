document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('subscription-form');
    const emailInput = document.getElementById('email');
    const errorMessage = document.createElement('div');
    errorMessage.className = 'error-message'; // Ensure you have styles for this class
    errorMessage.style.color = 'red'; // Example style, adjust as needed
  
    form.addEventListener('submit', function(event) {
      event.preventDefault(); // Always prevent default to manually control the form submission
      const email = emailInput.value;
      if (!validateEmail(email)) {
        // Display error message if email is invalid
        if (!document.querySelector('.error-message')) { // Avoid multiple messages
          errorMessage.textContent = 'Please enter a valid email address.';
          form.insertBefore(errorMessage, form.firstChild);
        }
      } else {
        // Redirect to verification.html if email is valid
        window.location.href = 'verification.html';
      }
    });
  
  });