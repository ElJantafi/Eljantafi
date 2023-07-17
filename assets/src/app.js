function validateForm() {
  const fname = document.getElementById('fname');
  const lname = document.getElementById('lname');
  const phone = document.getElementById('phone');
  const message = document.getElementById('message');
  const subject = document.getElementById('subject');

  let isValid = true;

  if (fname.value.trim() === '') {
    displayError(fname, 'Please enter your first name.');
    isValid = false;
  } else {
    hideError(fname);
  }

  if (lname.value.trim() === '') {
    displayError(lname, 'Please enter your last name.');
    isValid = false;
  } else {
    hideError(lname);
  }

  if (phone.value.trim() === '') {
    displayError(phone, 'Please enter your phone number.');
    isValid = false;
  } else {
    hideError(phone);
  }

  if (subject.value.trim() === '') {
    displayError(subject, 'Please enter the subject.');
    isValid = false;
  } else {
    hideError(subject);
  }

  if (message.value.trim() === '') {
    displayError(message, 'Please type the message.');
    isValid = false;
  } else {
    hideError(message);
  }

  return isValid;
}

function displayError(input, errorMessage) {
  const errorElement = input.parentElement.querySelector('.error-message');
  errorElement.innerText = errorMessage;
  errorElement.style.display = 'block';
}

function hideError(input) {
  const errorElement = input.parentElement.querySelector('.error-message');
  errorElement.style.display = 'none';
}

function sendMail() {
  if (!validateForm()) {
    return;
  }

  const fname = document.getElementById('fname').value;
  const lname = document.getElementById('lname').value;
  const phone = document.getElementById('phone').value;
  const message = document.getElementById('message').value;
  const subject = document.getElementById('subject').value;

  const params = {
    from_name: fname + ' ' + lname,
    to_name: 'Salah',
    phone: phone,
    message: message,
    subject: subject,
  };

  emailjs.send('service_1fwaqm9', 'template_bzfe5ff', params).then(
    function (res) {
      alert('Message sent successfully!');
      document.getElementById('myForm').reset();
    },
    function (error) {
      alert('Error sending email: ' + error);
    }
  );
}

document.getElementById('submit').onclick = function (e) {
  e.preventDefault();
  sendMail();
};
