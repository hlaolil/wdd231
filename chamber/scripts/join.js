// Set the current timestamp
document.getElementById('timestamp').value = new Date().toISOString();

document.addEventListener("DOMContentLoaded", function () {
    const modals = document.querySelectorAll(".modal");
    
    modals.forEach((modal) => {
        modal.style.display = "none"; // Hide any accidentally shown modals
    });
});

document.addEventListener("DOMContentLoaded", function () {
    // Select all membership cards and modals
    const cards = document.querySelectorAll(".card");
    const modals = document.querySelectorAll(".modal");
    const closeButtons = document.querySelectorAll(".close");

    
    // Function to open the correct modal
    cards.forEach((card) => {
        card.addEventListener("click", function () {
            const membershipType = card.getAttribute("data-membership");
            const modal = document.getElementById(`${membershipType}-modal`);
            if (modal) {
                modal.style.display = "block";
            }
        });
    });

    // Function to close the modal
    closeButtons.forEach((button) => {
        button.addEventListener("click", function () {
            this.parentElement.parentElement.style.display = "none";
        });
    });

    // Close modal if clicked outside the content
    window.addEventListener("click", function (event) {
        modals.forEach((modal) => {
            if (event.target === modal) {
                modal.style.display = "none";
            }
        });
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

window.addEventListener('load', function() {
    const currentLocation = window.location.pathname.replace(/\/$/, ''); // Get current path, remove trailing slash
    const navLinks = document.querySelectorAll('nav ul li a'); // Select all navigation links

    // Treat root path `/` as `/index.html` for comparison
    if (currentLocation === '') {
        currentLocation = '/index.html';
    }
    
    navLinks.forEach(link => {
        const linkPath = new URL(link.href).pathname.replace(/\/$/, ''); // Get path of the link, remove trailing slash

        if (linkPath === currentLocation) {
            link.classList.add('active'); // Add active class to the current page link
        } else {
            link.classList.remove('active'); // Ensure others don't have it
        }
    });
});

const year = document.querySelector("#currentyear");
const lastModified = document.querySelector("#lastModified");

// Get the current year for footer
const date = new Date();
year.textContent = date.getFullYear();

// Get the last modification date of the home page
let lastMod = document.lastModified;
lastModified.textContent = `Last Modified: ${lastMod}`;



