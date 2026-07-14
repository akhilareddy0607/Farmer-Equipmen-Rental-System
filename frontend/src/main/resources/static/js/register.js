// Register Page JavaScript

document.addEventListener('DOMContentLoaded', function() {
    const registerForm = document.querySelector('form');
    
    if (registerForm) {
        registerForm.addEventListener('submit', function(e) {
            e.preventDefault();
            handleRegister();
        });
    }
});

function handleRegister() {
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirm_password').value;
    const userType = document.getElementById('user_type').value;
    
    // Validate inputs
    if (!name || !email || !phone || !password || !confirmPassword || !userType) {
        alert('Please fill all fields');
        return;
    }
    
    if (!validateEmail(email)) {
        alert('Please enter a valid email address');
        return;
    }
    
    if (password.length < 6) {
        alert('Password must be at least 6 characters long');
        return;
    }
    
    if (password !== confirmPassword) {
        alert('Passwords do not match');
        return;
    }
    
    // Here you would typically send registration data to backend
    console.log('Registration data:', { name, email, phone, userType });
    alert('Registration successful! Please login.');
    // Redirect to login
    // window.location.href = 'login.html';
}

function validateEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}
