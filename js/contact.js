// Animation for the label element
const labels = document.querySelectorAll('.custom-label');
const inputs = document.querySelectorAll('.custom-input');

labels.forEach((label, index) => {
  label.addEventListener('click', () => {
    inputs[index].focus();
  });

  inputs[index].addEventListener('focus', () => {
    label.classList.add('focused');
    inputs[index].placeholder = ''; // Hide placeholder when field gets focus
  });

  inputs[index].addEventListener('blur', () => {
    if (inputs[index].value === '') {
      label.classList.remove('focused');
      inputs[index].placeholder = label.getAttribute('data-placeholder'); // Restore placeholder if field is empty
    }
  });
});

// Funtion to validate inputs and send email
function validateAndOpenEmailClient() {
  var form = document.getElementById('emailForm');
  var fields = {
    name: 'nameError',
    email: 'emailError',
    subject: 'subjectError',
    message: 'messageError'
  };

  var hasError = false;
  var currentError = null;

  // Field validation
  for (var field in fields) {
    var fieldValue = form[field].value;
    var errorElement = document.getElementById(fields[field]);

    if (!fieldValue) {
      if (!currentError) {
        errorElement.textContent = "Please complete this field.";
        currentError = errorElement;
        hasError = true;
        removeErrorMessage(errorElement);
      }
    } else {
      errorElement.textContent = "";
    }
  }

  if (hasError) {
    return;
  }

  // Build the "mailto" URL with the form data
  var email = form.email.value;
  var subject = form.subject.value;
  var message = form.message.value;

  var mailtoUrl = "mailto:jjorgesarricolea18@gmail.com" +
    "?subject=" + encodeURIComponent(subject) +
    "&body=" + encodeURIComponent(message);

  // Open a link with the URL "mailto" in a new tab
  var newTab = window.open(mailtoUrl, '_blank');
  if (newTab) {
    // Close the open tab after 1 second
    setTimeout(function () {
      newTab.close();
    }, 1000);
  } else {
    // If a new tab could not be opened, redirect the user to the "mailto" URL directly
    window.location.href = mailtoUrl;
  }
}

// Function to hide error messages
function removeErrorMessage(errorElement) {
  setTimeout(function () {
    errorElement.textContent = "";
    currentError = null;
  }, 3000);
}

