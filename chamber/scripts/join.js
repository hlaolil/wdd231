// Set the current timestamp
document.getElementById('timestamp').value = new Date().toISOString();

// Modal functionality (simplified example)
const modals = document.querySelectorAll('.modal');
const buttons = document.querySelectorAll('.card button');
const closeButtons = document.querySelectorAll('.close');

buttons.forEach((btn, index) => {
        btn.addEventListener('click', () => {
        modals[index].style.display = 'block';
        });
});

closeButtons.forEach((btn) => {
        btn.addEventListener('click', () => {
        btn.closest('.modal').style.display = 'none';
        });
});

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

const eventsDiv = document.querySelector('.events');

if (eventsDiv) { // Ensure the container exists
  // Create an unordered list
  const eventsList = document.createElement('ul');
  eventsList.classList.add('events-list'); // Optional: Add a class for styling
