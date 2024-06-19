// script.js
const newsletterForm = document.getElementById("newsletter-form");
const firstNameInput = document.getElementById("first-name");
const lastNameInput = document.getElementById("last-name");
const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("password");
const technologyCheckbox = document.getElementById("technology");
const healthCheckbox = document.getElementById("health");
const financeCheckbox = document.getElementById("finance");
const energyCheckbox = document.getElementById("energy");
const automotiveCheckbox = document.getElementById("automotive");
const aerospaceCheckbox = document.getElementById("aerospace");
const biotechnologyCheckbox = document.getElementById("biotechnology");
const chemicalsCheckbox = document.getElementById("chemicals");
const constructionCheckbox = document.getElementById("construction");
const educationCheckbox = document.getElementById("education");
const environmentalCheckbox = document.getElementById("environmental");
const foodAndBeverageCheckbox = document.getElementById("food-and-beverage");
const healthcareCheckbox = document.getElementById("healthcare");
const manufacturingCheckbox = document.getElementById("manufacturing");
const mediaAndEntertainmentCheckbox = document.getElementById("media-and-entertainment");
const realEstateCheckbox = document.getElementById("real-estate");
const retailCheckbox = document.getElementById("retail");
const transportationCheckbox = document.getElementById("transportation");

newsletterForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const firstName = firstNameInput.value.trim();
  const lastName = lastNameInput.value.trim();
  const email = emailInput.value.trim();
  const password = passwordInput.value.trim();
  const subscriptionPreferences = [];

  if (technologyCheckbox.checked) {
    subscriptionPreferences.push("technology");
  }
  if (healthCheckbox.checked) {
    subscriptionPreferences.push("health");
  }
  if (financeCheckbox.checked) {
    subscriptionPreferences.push("finance");
  }
  if (energyCheckbox.checked) {
    subscriptionPreferences.push("energy");
  }
  if (automotiveCheckbox.checked) {
    subscriptionPreferences.push("automotive");
  }
  if (aerospaceCheckbox.checked) {
    subscriptionPreferences.push("aerospace");
  }
  if (biotechnologyCheckbox.checked) {
    subscriptionPreferences.push("biotechnology");
  }
  if (chemicalsCheckbox.checked) {
    subscriptionPreferences.push("chemicals");
  }
  if (constructionCheckbox.checked) {
    subscriptionPreferences.push("construction");
  }
  if (educationCheckbox.checked) {
    subscriptionPreferences.push("education");
  }
  if (environmentalCheckbox.checked) {
    subscriptionPreferences.push("environmental");
  }
  if (foodAndBeverageCheckbox.checked) {
    subscriptionPreferences.push("food-and-beverage");
  }
  if (healthcareCheckbox.checked) {
    subscriptionPreferences.push("healthcare");
  }
  if (manufacturingCheckbox.checked) {
    subscriptionPreferences.push("manufacturing");
  }
  if (mediaAndEntertainmentCheckbox.checked) {
    subscriptionPreferences.push("media-and-entertainment");
  }
  if (realEstateCheckbox.checked) {
    subscriptionPreferences.push("real-estate");
  }
  if (retailCheckbox.checked) {
    subscriptionPreferences.push("retail");
  }
  if (transportationCheckbox.checked) {
    subscriptionPreferences.push("transportation");
  }

  const isValid = validateInputs(firstName, lastName, email, password, subscriptionPreferences);

  if (isValid) {
    // Form is valid, submit the form
    newsletterForm.submit();
  } else {
    // Form is invalid, display error messages
    displayErrorMessages();
  }
});

function validateInputs(firstName, lastName, email, password, subscriptionPreferences) {
  let isValid = true;

  if (!firstName.match(/^[a-zA-Z]+$/)) {
    isValid = false;
    displayErrorMessage("First name must contain only letters.");
  }

  if (!lastName.match(/^[a-zA-Z]+$/)) {
    isValid = false;
    displayErrorMessage("Last name must contain only letters.");
  }

  if (!email.match(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/)) {
    isValid = false;
    displayErrorMessage("Email address is invalid.");
  }

  if (!password.match(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@#$%^&*]).{8,}$/)) {
    isValid = false;
    displayErrorMessage("Password must be at least 8 characters, contain at least one uppercase letter, one lowercase letter, one number, and one special character.");
  }

  if (subscriptionPreferences.length === 0) {
    isValid = false;
    displayErrorMessage("Please select at least one subscription preference.");
  }

  return isValid;
}

function displayErrorMessage(message) {
  const errorElement = document.createElement("div");
  errorElement.textContent = message;
  errorElement.className = "error";
  newsletterForm.appendChild(errorElement);
}

function displayErrorMessages() {
  const errorElements = newsletterForm.querySelectorAll(".error");
  errorElements.forEach((errorElement) => {
    errorElement.remove();
  });
  displayErrorMessage("Please correct the following errors:");
}