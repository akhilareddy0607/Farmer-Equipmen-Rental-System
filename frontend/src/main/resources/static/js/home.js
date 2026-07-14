// Home Page JavaScript

document.addEventListener('DOMContentLoaded', function() {
    console.log('Home page loaded');
    initializeHomePage();
});

function initializeHomePage() {
    // Initialize any dynamic content on home page
    loadFeaturedEquipment();
    setupEventListeners();
}

function loadFeaturedEquipment() {
    // This would typically fetch data from backend API
    console.log('Loading featured equipment...');
}

function setupEventListeners() {
    // Setup any event listeners for home page
    const browseBtn = document.querySelector('.btn');
    if (browseBtn) {
        browseBtn.addEventListener('click', function() {
            console.log('Browse button clicked');
        });
    }
}

// Smooth scroll for navigation
function smoothScroll(targetId) {
    const element = document.getElementById(targetId);
    if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
    }
}
