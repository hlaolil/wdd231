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



// Function to fetch and populate the directory
async function populateDirectoryFromJSON() {
    const directorySection = document.querySelector('.directory'); // Select the section

    try {
        // Fetch the JSON file
        const response = await fetch('data/member.json');
        if (!response.ok) throw new Error('Failed to fetch the JSON file');

        // Parse the JSON data
        const directoryData = await response.json();

        // Process the data and create the HTML elements
        directoryData.forEach(business => {
            const businessDiv = document.createElement('div');
            businessDiv.classList.add('business-entry'); // Add class for styling

            businessDiv.innerHTML = `
                <img src="images/${business.image}" alt="${business.name} Logo" class="business-logo">
                <h3>${business.name}</h3>
                <p><strong>Address:</strong> ${business.address}</p>
                <p><strong>Phone:</strong> ${business.phone}</p>
                <p><strong>Website:</strong> <a href="${business.website}" target="_blank">${business.website}</a></p>
                <p><strong>Membership Level:</strong> ${getMembershipLevel(business.membershipLevel)}</p>
                <p><strong>Other Information:</strong> ${business.otherInfo}</p>
            `;

            directorySection.appendChild(businessDiv);
        });
    } catch (error) {
        console.error('Error loading the directory:', error);
    }
}

// Function to map membership levels
function getMembershipLevel(level) {
    switch (level) {
        case 1: return "Member";
        case 2: return "Silver";
        case 3: return "Gold";
        default: return "Unknown";
    }
}

// Call the function when the DOM content is loaded
document.addEventListener('DOMContentLoaded', populateDirectoryFromJSON);



const year = document.querySelector("#currentyear");
const lastModified = document.querySelector("#lastModified");

// Get the current year for footer
const date = new Date();
year.textContent = date.getFullYear();

// Get the last modification date of the home page
let lastMod = document.lastModified;
lastModified.textContent = `Last Modified: ${lastMod}`;

// Add content to the "Events" section
const eventsDiv = document.querySelector('.events');
const eventsContent = document.createElement('p');
eventsContent.textContent = "Upcoming events: Tech Meetup, Workshop on Web Development, and more!";
eventsDiv.appendChild(eventsContent);

// Add content to the "Current Weather" section
const currentWeatherDiv = document.querySelector('.current-weather');
const weatherContent = document.createElement('p');
weatherContent.textContent = "Sunny, 25°C (77°F)";
currentWeatherDiv.appendChild(weatherContent);

// Add content to the "Weather Forecast" section
const weatherForecastDiv = document.querySelector('.weather-forecast');
const forecastContent = document.createElement('ul');

const forecastData = ["Monday: Cloudy, 22°C", "Tuesday: Rainy, 18°C", "Wednesday: Sunny, 24°C"];
forecastData.forEach(day => {
    const listItem = document.createElement('li');
    listItem.textContent = day;
    forecastContent.appendChild(listItem);
});

weatherForecastDiv.appendChild(forecastContent);


