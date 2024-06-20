const newsletterForm = document.getElementById("newsletter-form");
const firstNameInput = document.getElementById("first-name");
const middleNameInput = document.getElementById("middle-name");
const lastNameInput = document.getElementById("last-name");

newsletterForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const firstName = firstNameInput.value.trim();
  const middleName = middleNameInput.value.trim();
  const lastName = lastNameInput.value.trim();

  const isValid = validateInputs(firstName, middleName, lastName);

  if (isValid) {
    // Form is valid, redirect to subscription.html
    window.location.href = 'sector-selection.html';
  } else {
    // Form is invalid, display error messages is handled within validateInputs
  }
});

function validateInputs(firstName, middleName, lastName) {
  let errors = [];
  let isValid = true;

  if (!firstName.match(/^[a-zA-Z'-\s]+$/)) {
    errors.push("First name must contain only letters, apostrophes, hyphens, and spaces.");
  }

  if (middleName && !middleName.match(/^[a-zA-Z'-\s]+$/)) {
    errors.push("Middle name must contain only letters, apostrophes, hyphens, and spaces.");
  }

  if (!lastName.match(/^[a-zA-Z'-\s]+$/)) {
    errors.push("Last name must contain only letters, apostrophes, hyphens, and spaces.");
  }
  
  if (errors.length > 0) {
    isValid = false;
    displayErrorMessages(errors); // Now correctly passing errors array
  }

  return isValid;
}

function displayErrorMessages(errors) {
    const errorElements = newsletterForm.querySelectorAll(".error");
    errorElements.forEach((errorElement) => {
      errorElement.remove();
    });
    
    errors.forEach((message) => {
      const errorElement = document.createElement("div");
      errorElement.textContent = message;
      errorElement.className = "error";
      errorElement.style.color = 'red'; // Add this line to style the error messages in red
      newsletterForm.appendChild(errorElement);
    });
  }
  function displayErrorMessages(errors) {
    const errorElements = newsletterForm.querySelectorAll(".error");
    errorElements.forEach((errorElement) => {
      errorElement.remove();
    });
    
    errors.forEach((message) => {
      const errorElement = document.createElement("div");
      errorElement.textContent = message;
      errorElement.className = "error";
      errorElement.style.color = 'red'; // Add this line to style the error messages in red
      newsletterForm.appendChild(errorElement);
    });
  }
