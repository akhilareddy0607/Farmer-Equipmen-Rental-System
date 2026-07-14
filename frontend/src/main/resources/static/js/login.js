// Login Page JavaScript

document.addEventListener('DOMContentLoaded', function() {
    const loginForm = document.querySelector('form');
    
    if (loginForm) {
        loginForm.addEventListener('submit', function(e) {
            e.preventDefault();
            handleLogin();
        });
    }
});

function handleLogin() {
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    
    // Validate email
    if (!validateEmail(email)) {
        alert('Please enter a valid email address');
        return;
    }
    
    // Validate password
    if (password.length < 6) {
        alert('Password must be at least 6 characters long');
        return;
    }
    
    // Here you would typically send login data to backend
    console.log('Login attempt with email:', email);
    alert('Login successful!');
    // Redirect to dashboard
    // window.location.href = 'farmer-dashboard.html';
}

function validateEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}
