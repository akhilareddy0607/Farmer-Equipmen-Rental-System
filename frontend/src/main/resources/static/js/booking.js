// Booking Page JavaScript

document.addEventListener('DOMContentLoaded', function() {
    console.log('Booking page loaded');
    initializeBookingPage();
});

function initializeBookingPage() {
    loadEquipmentOptions();
    setupDateValidation();
    setupBookingForm();
}

function loadEquipmentOptions() {
    // Sample equipment - would come from backend API
    const equipment = [
        { id: 1, name: 'Tractor - Brand A' },
        { id: 2, name: 'Plow - Brand B' },
        { id: 3, name: 'Harvester - Brand C' }
    ];
    
    const select = document.getElementById('equipment');
    if (select) {
        select.innerHTML = '<option value="">Select Equipment</option>' +
            equipment.map(item => `<option value="${item.id}">${item.name}</option>`).join('');
    }
}

function setupDateValidation() {
    const startDateInput = document.getElementById('start_date');
    const endDateInput = document.getElementById('end_date');
    
    if (startDateInput && endDateInput) {
        // Set minimum date to today
        const today = new Date().toISOString().split('T')[0];
        startDateInput.min = today;
        endDateInput.min = today;
        
        startDateInput.addEventListener('change', function() {
            endDateInput.min = this.value;
        });
    }
}

function setupBookingForm() {
    const form = document.querySelector('form');
    if (form) {
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            handleBooking();
        });
    }
}

function handleBooking() {
    const equipment = document.getElementById('equipment').value;
    const startDate = document.getElementById('start_date').value;
    const endDate = document.getElementById('end_date').value;
    const location = document.getElementById('location').value;
    
    if (!equipment || !startDate || !endDate || !location) {
        alert('Please fill all required fields');
        return;
    }
    
    console.log('Booking data:', { equipment, startDate, endDate, location });
    alert('Proceeding to payment...');
    // Redirect to payment page
    // window.location.href = 'payment.html';
}

function calculateDays(startDate, endDate) {
    const start = new Date(startDate);
    const end = new Date(endDate);
    const diffTime = Math.abs(end - start);
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    return diffDays;
}
