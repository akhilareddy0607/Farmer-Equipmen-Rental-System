// Payment Page JavaScript

document.addEventListener('DOMContentLoaded', function() {
    console.log('Payment page loaded');
    initializePaymentPage();
});

function initializePaymentPage() {
    setupPaymentForm();
    formatCardInput();
}

function setupPaymentForm() {
    const form = document.querySelector('form');
    if (form) {
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            processPayment();
        });
    }
}

function formatCardInput() {
    const cardInput = document.getElementById('card_number');
    const expiryInput = document.getElementById('expiry');
    const cvvInput = document.getElementById('cvv');
    
    if (cardInput) {
        cardInput.addEventListener('input', function(e) {
            // Format card number with spaces
            let value = e.target.value.replace(/\s/g, '');
            let formattedValue = value.match(/.{1,4}/g)?.join(' ') || value;
            e.target.value = formattedValue;
        });
    }
    
    if (expiryInput) {
        expiryInput.addEventListener('input', function(e) {
            // Format expiry as MM/YY
            let value = e.target.value.replace(/\D/g, '');
            if (value.length >= 2) {
                value = value.slice(0, 2) + '/' + value.slice(2, 4);
            }
            e.target.value = value;
        });
    }
    
    if (cvvInput) {
        cvvInput.addEventListener('input', function(e) {
            // Only allow numbers for CVV
            e.target.value = e.target.value.replace(/\D/g, '').slice(0, 3);
        });
    }
}

function processPayment() {
    const cardName = document.getElementById('card_name').value;
    const cardNumber = document.getElementById('card_number').value;
    const expiry = document.getElementById('expiry').value;
    const cvv = document.getElementById('cvv').value;
    
    // Validate inputs
    if (!cardName || !cardNumber || !expiry || !cvv) {
        alert('Please fill all payment fields');
        return;
    }
    
    if (!validateCardNumber(cardNumber)) {
        alert('Please enter a valid card number');
        return;
    }
    
    if (!validateExpiry(expiry)) {
        alert('Please enter a valid expiry date');
        return;
    }
    
    if (cvv.length !== 3) {
        alert('Please enter a valid CVV');
        return;
    }
    
    console.log('Processing payment...');
    alert('Payment processed successfully!');
    // Redirect to confirmation
    // window.location.href = 'confirmation.html';
}

function validateCardNumber(cardNumber) {
    const cleaned = cardNumber.replace(/\s/g, '');
    return cleaned.length === 16 && /^\d+$/.test(cleaned);
}

function validateExpiry(expiry) {
    const [month, year] = expiry.split('/');
    if (!month || !year || month > 12 || month < 1) {
        return false;
    }
    return true;
}
