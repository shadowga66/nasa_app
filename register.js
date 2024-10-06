document.getElementById("login-toggle").addEventListener("click", function () {
    document.getElementById("login-form").classList.add("active");
    document.getElementById("register-form").classList.remove("active");
});

document.getElementById("register-toggle").addEventListener("click", function () {
    document.getElementById("register-form").classList.add("active");
    document.getElementById("login-form").classList.remove("active");
});

function togglePasswordVisibility(inputId) {
    const passwordField = document.getElementById(inputId);
    if (passwordField.type === "password") {
        passwordField.type = "text";
    } else {
        passwordField.type = "password";
    }
}

function toggleDarkMode() {
    document.body.classList.toggle("dark-mode");
}

function handleLogin(event) {
    event.preventDefault();
    document.getElementById('login-spinner').style.display = 'block';
    setTimeout(function () {
        document.getElementById('login-spinner').style.display = 'none';
        window.location.href = 'index.html';
    }, 2000);
}

function handleRegister(event) {
    event.preventDefault();
    document.getElementById('register-spinner').style.display = 'block';
    setTimeout(function () {
        document.getElementById('register-spinner').style.display = 'none';
        window.location.href = 'index.html';
    }, 2000);
}
