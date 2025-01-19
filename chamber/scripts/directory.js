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

// Example data (can be replaced by API call, JSON file, etc.)
const directoryData = [
    {
        name: "Business 1",
        description: "Description of Business 1",
        website: "https://example.com/1"
    },
    {
        name: "Business 2",
        description: "Description of Business 2",
        website: "https://example.com/2"
    },
    {
        name: "Business 3",
        description: "Description of Business 3",
        website: "https://example.com/3"
    }
];

// Function to populate the directory dynamically
function populateDirectory() {
    const directorySection = document.querySelector('.directory'); // Select the section

    directoryData.forEach(business => {
        // Create a new div for each business entry
        const businessDiv = document.createElement('div');
        businessDiv.classList.add('business-entry'); // Add class for styling

        // Populate the businessDiv with data
        businessDiv.innerHTML = `
            <h3>${business.name}</h3>
            <p>${business.description}</p>
            <a href="${business.website}" target="_blank">Visit Website</a>
        `;

        // Append the new business div to the section
        directorySection.appendChild(businessDiv);
    });
}

// Call the function when the page has loaded
document.addEventListener('DOMContentLoaded', populateDirectory);


const year = document.querySelector("#currentyear");
const lastModified = document.querySelector("#lastModified");

// Get the current year for footer
const date = new Date();
year.textContent = date.getFullYear();

// Get the last modification date of the home page
let lastMod = document.lastModified;
lastModified.textContent = `Last Modified: ${lastMod}`;

