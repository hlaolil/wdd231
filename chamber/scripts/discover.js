
const hamButton = document.querySelector('.ham-button');
const navigation = document.querySelector('.navigation');

// Initial HTML content for the hamburger icon
const hamburgerHTML = `
            <span class="bar"></span>
            <span class="bar"></span>
            <span class="bar"></span>
        `;

// Close icon HTML
const closeIconHTML = '✖';

// Track the state of the menu
let isMenuOpen = false;

hamButton.addEventListener('click', () => {
    isMenuOpen = !isMenuOpen; // Toggle the menu state

     if (isMenuOpen) {
        hamButton.innerHTML = closeIconHTML; // Change to close icon
        navigation.classList.add('show'); // Show the navigation
        hamButton.setAttribute('aria-expanded', 'true'); // Update ARIA attribute
    } else {
        hamButton.innerHTML = hamburgerHTML; // Change back to hamburger icon
        navigation.classList.remove('show'); // Hide the navigation
        hamButton.setAttribute('aria-expanded', 'false'); // Update ARIA attribute
    }
});


const year = document.querySelector("#currentyear");
const lastModified = document.querySelector("#lastModified");

// Get the current year for footer
const date = new Date();
year.textContent = date.getFullYear();

// Get the last modification date of the home page
let lastMod = document.lastModified;
lastModified.textContent = `Last Modified: ${lastMod}`;


// Store the current visit date
const currentVisitDate = new Date().toLocaleString();

// Get the last visit date from localStorage
const lastVisitDate = localStorage.getItem('lastVisitDate');

// Store the current visit date in localStorage for next time
localStorage.setItem('lastVisitDate', currentVisitDate);

// Display different messages based on the time since the last visit
document.addEventListener("DOMContentLoaded", () => {
    const lastVisitMessage = document.getElementById('last-visit-message');

    let message = '';

    if (!lastVisitDate) {
        message = "Welcome to your first visit!";
    } else {
        const lastVisit = new Date(lastVisitDate);
        const timeDiff = new Date(currentVisitDate) - lastVisit;
        const daysSinceLastVisit = Math.floor(timeDiff / (1000 * 3600 * 24));

        if (daysSinceLastVisit < 1) {
            message = "You visited recently!";
        } else if (daysSinceLastVisit < 7) {
            message = `You last visited ${daysSinceLastVisit} day(s) ago.`;
        } else {
            message = `You last visited ${daysSinceLastVisit} day(s) ago. Welcome back!`;
        }
    }

    lastVisitMessage.innerHTML = message;
});


// Function to fetch and populate the places directory
async function populatePlacesDirectory() {
    const placesContainer = document.querySelector('.grid-container'); // Select the grid container

    try {
        // Fetch the JSON file
        const response = await fetch('places.json');
        if (!response.ok) throw new Error('Failed to fetch the JSON file');

        // Parse the JSON data
        const placesData = await response.json();

        // Process the data and create the HTML elements
        placesData.places.forEach(place => {
            const placeDiv = document.createElement('div');
            placeDiv.classList.add('place-card'); // Updated class name for styling

            placeDiv.innerHTML = `
                <h2>${place.name}</h2>
                <figure>
                    <img src="${place.image}" alt="${place.name}" width="300" height="200" loading= "lazy">
                </figure>
                <address>${place.address}</address>
                <button class="learn-more" data-name="${place.name}" data-description="${place.description}">Learn More</button>
            `;

            placesContainer.appendChild(placeDiv);
        });

        // Add event listeners to the "Learn More" buttons
        document.querySelectorAll('.learn-more').forEach(button => {
            button.addEventListener('click', function () {
                const modal = document.getElementById('modal');
                document.getElementById('modal-title').textContent = this.getAttribute('data-name');
                document.getElementById('modal-description').textContent = this.getAttribute('data-description');
                modal.style.display = 'flex';
            });
        });

    } catch (error) {
        console.error('Error loading the places directory:', error);
    }
}

// Call the function to populate the directory
populatePlacesDirectory();



// Modal close functionality
document.addEventListener('DOMContentLoaded', function () {
    const modal = document.getElementById('modal');
    const closeModal = document.querySelector('.close');

    closeModal.addEventListener('click', function () {
        modal.style.display = 'none';
    });

    window.addEventListener('click', function (event) {
        if (event.target === modal) {
            modal.style.display = 'none';
        }
    });
    // Ensure modal is hidden initially (extra safeguard)
    modal.style.display = 'none';
});

