// Equipment Page JavaScript

document.addEventListener('DOMContentLoaded', function() {
    console.log('Equipment page loaded');
    initializeEquipmentPage();
});

function initializeEquipmentPage() {
    loadEquipment();
    setupFilters();
}

function loadEquipment() {
    // Sample equipment data - would come from backend API
    const equipmentData = [
        {
            id: 1,
            name: 'Tractor',
            category: 'Tractors',
            price: 50,
            image: '../src/main/resources/static/images/tractor.jpg'
        },
        {
            id: 2,
            name: 'Plow',
            category: 'Plows',
            price: 30,
            image: '../src/main/resources/static/images/plow.jpg'
        },
        {
            id: 3,
            name: 'Harvester',
            category: 'Harvesters',
            price: 100,
            image: '../src/main/resources/static/images/harvester.jpg'
        }
    ];
    
    displayEquipment(equipmentData);
}

function displayEquipment(equipment) {
    const grid = document.querySelector('.equipment-grid');
    if (!grid) return;
    
    grid.innerHTML = equipment.map(item => `
        <div class="equipment-card">
            <img src="${item.image}" alt="${item.name}">
            <div class="equipment-card-content">
                <h3>${item.name}</h3>
                <p>Category: ${item.category}</p>
                <p class="price">$${item.price}/day</p>
                <button onclick="viewDetails(${item.id})">View Details</button>
            </div>
        </div>
    `).join('');
}

function setupFilters() {
    const searchInput = document.querySelector('input[placeholder="Search equipment..."]');
    const categorySelect = document.querySelector('select');
    
    if (searchInput) {
        searchInput.addEventListener('input', function() {
            console.log('Search:', this.value);
            // Implement search functionality
        });
    }
    
    if (categorySelect) {
        categorySelect.addEventListener('change', function() {
            console.log('Category filter:', this.value);
            // Implement category filter
        });
    }
}

function viewDetails(equipmentId) {
    console.log('Viewing details for equipment:', equipmentId);
    // Redirect to equipment details page
    window.location.href = `equipment-details.html?id=${equipmentId}`;
}
