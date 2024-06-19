document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('sector-selection-form');
    const checkboxes = form.querySelectorAll('input[type="checkbox"]');
    const nextButton = form.querySelector('button[type="submit"]');
    const errorMessage = document.createElement('p');
    errorMessage.style.color = 'red';
    errorMessage.textContent = 'Please select at least one sector.';
    errorMessage.id = 'error-message';
    errorMessage.style.display = 'none'; // Hide the error message initially

    // Insert the error message next to the "Next" button
    nextButton.insertAdjacentElement('afterend', errorMessage);

    form.addEventListener('submit', function(event) {
        const isAnyCheckboxChecked = Array.from(checkboxes).some(checkbox => checkbox.checked);

        if (!isAnyCheckboxChecked) {
            event.preventDefault(); // Prevent form submission
            errorMessage.style.display = ''; // Show the error message
        } else {
            errorMessage.style.display = 'none'; // Hide the error message if any checkbox is checked
            // Use setTimeout to ensure the redirection happens after any form processing
            setTimeout(function() {
                window.location.href = 'subscription.html';
            }, 0); // Delay is set to 0ms to allow for immediate redirection
        }
    });
});