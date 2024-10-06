document.getElementById('paymentForm').addEventListener('submit', function(e) {
    e.preventDefault();

    resetErrors();

    const fullName = document.getElementById('fullName').value.trim();
    const email = document.getElementById('email').value.trim();
    const cardNumber = document.getElementById('cardNumber').value.replace(/\s+/g, '');
    const expiryDate = document.getElementById('expiryDate').value.trim();
    const cvv = document.getElementById('cvv').value.trim();
    const amount = document.getElementById('amount').value.trim();
    const paymentStatus = document.getElementById('paymentStatus');
    const loader = document.getElementById('loader');

    let isValid = validateForm(fullName, email, cardNumber, expiryDate, cvv);

    if (isValid) {
        loader.style.display = 'block';
        setTimeout(() => {
            loader.style.display = 'none';
            if (Math.random() > 0.5) {
                paymentStatus.innerHTML = `<span style="color: limegreen;">Payment Successful! $${amount} charged.</span>`;
                setTimeout(() => {
                    window.location.href = "index.html";
                }, 2000);
            } else {
                paymentStatus.innerHTML = `<span style="color: red;">Payment Failed. Please try again.</span>`;
            }
        }, 2000);
    }
});

function validateForm(fullName, email, cardNumber, expiryDate, cvv) {
    let isValid = true;

    if (fullName === "") {
        showError('nameError', "Name is required");
        isValid = false;
    }

    if (!validateEmail(email)) {
        showError('emailError', "Invalid email address");
        isValid = false;
    }

    if (!validateCardNumber(cardNumber)) {
        showError('cardError', "Invalid card number");
        isValid = false;
    }

    if (!validateExpiryDate(expiryDate)) {
        showError('expiryError', "Invalid expiry date");
        isValid = false;
    }

    if (cvv.length !== 3 || !/^\d{3}$/.test(cvv)) {
        showError('cvvError', "Invalid CVV");
        isValid = false;
    }

    return isValid;
}

function showError(elementId, message) {
    const errorElement = document.getElementById(elementId);
    errorElement.style.visibility = 'visible';
    errorElement.innerText = message;
}

function resetErrors() {
    document.querySelectorAll('.error').forEach(error => {
        error.style.visibility = 'hidden';
        error.innerText = "";
    });
}

function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}

function validateCardNumber(cardNumber) {
    const re = /^\d{16}$/;
    return re.test(cardNumber);
}

function validateExpiryDate(expiryDate) {
    const re = /^(0[1-9]|1[0-2])\/?([0-9]{2})$/;
    return re.test(expiryDate);
}
