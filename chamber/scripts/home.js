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

  // Define the events
  const events = [
    "Tech Meetup",
    "Workshop on Web Development",
    "Hackathon 2025",
    "Networking Session"
  ];

  // Populate the list with events
  events.forEach(event => {
    const listItem = document.createElement('li');
    listItem.textContent = event;
    eventsList.appendChild(listItem);
  });

  // Append the list to the events div
  eventsDiv.appendChild(eventsList);
} else {
  console.error("The '.events' div was not found.");
}

const API_KEY = '3ba94e27626600d2c4a58e9b5d157562'; // Replace with your API key
const LOCATION = 'Butha-Buthe, LS'; // Chamber location
const UNITS = 'metric'; // Use 'imperial' for Fahrenheit

const weatherURL = `https://api.openweathermap.org/data/2.5/weather?q=${LOCATION}&units=${UNITS}&appid=${API_KEY}`;
const forecastURL = `https://api.openweathermap.org/data/2.5/forecast?q=${LOCATION}&units=${UNITS}&appid=${API_KEY}`;

// Function to fetch and display current weather
async function getCurrentWeather() {
    try {
        const response = await fetch(weatherURL);
        const data = await response.json();

        // Extract and display data
        const temp = Math.round(data.main.temp);
        const description = data.weather[0].description;

        document.getElementById('weather-temp').textContent = `Temperature: ${temp}°C`;
        document.getElementById('weather-desc').textContent = `Description: ${description}`;
    } catch (error) {
        console.error('Error fetching current weather:', error);
    }
}

// Function to fetch and display 3-day weather forecast
async function getWeatherForecast() {
    try {
        const response = await fetch(forecastURL);
        const data = await response.json();

        const forecastList = document.getElementById('forecast-list');
        forecastList.innerHTML = ''; // Clear previous content

        // Extract forecast for the next 3 days
        const dailyData = data.list.filter((entry) =>
            entry.dt_txt.includes('12:00:00')
        ).slice(0, 3);

        dailyData.forEach((forecast) => {
            const date = new Date(forecast.dt_txt).toLocaleDateString();
            const temp = Math.round(forecast.main.temp);
            const description = forecast.weather[0].description;

            const listItem = document.createElement('li');
            listItem.textContent = `${date}: ${temp}°C, ${description}`;
            forecastList.appendChild(listItem);
        });
    } catch (error) {
        console.error('Error fetching weather forecast:', error);
    }
}

// Call the functions when the page loads
document.addEventListener('DOMContentLoaded', () => {
    getCurrentWeather();
    getWeatherForecast();
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

// Function to fetch and display spotlight members
async function displaySpotlight() {
    const spotlightSection = document.querySelector('.spotlight'); // Select the spotlight section

    try {
        // Fetch the JSON file
        const response = await fetch('data/member.json');
        if (!response.ok) throw new Error('Failed to fetch the JSON file');

        // Parse the JSON data
        const directoryData = await response.json();

        // Filter only Gold and Silver members
        const spotlightMembers = directoryData.filter(
            (member) => member.membershipLevel === 2 || member.membershipLevel === 3
        );

        // Randomly select two or three members for the spotlight
        const selectedMembers = getRandomMembers(spotlightMembers, 2 + Math.floor(Math.random() * 2));

        // Use a DocumentFragment for better performance
        const fragment = document.createDocumentFragment();

        // Generate spotlight cards
        selectedMembers.forEach((member) => {
            const { image = 'default.png', name, address = 'N/A', phone = 'N/A', website = '#', membershipLevel = 0 } = member;

            const cardDiv = document.createElement('div');
            cardDiv.classList.add('spotlight-card'); // Add class for styling

            cardDiv.innerHTML = `
                <img src="images/${image}" alt="${name ? name + ' Logo' : 'Business Logo'}" class="business-logo">
                <h3>${name || 'Unknown Business'}</h3>
                <p><strong>Address:</strong> ${address}</p>
                <p><strong>Phone:</strong> ${phone}</p>
                <p><strong>Website:</strong> <a href="${website}" target="_blank">${name || 'Visit Website'}</a></p>
                <p><strong>Membership Level:</strong> ${getMembershipLevel(membershipLevel)}</p>
            `;

            fragment.appendChild(cardDiv);
        });

        // Append the spotlight cards to the section
        spotlightSection.innerHTML = ''; // Clear previous content
        spotlightSection.appendChild(fragment);
    } catch (error) {
        console.error('Error displaying the spotlight:', error);
        spotlightSection.innerHTML = `<p class="error">Failed to load spotlight members. Please try again later.</p>`;
    }
}

// Function to get random members from an array
function getRandomMembers(array, count) {
    const shuffled = array.sort(() => 0.5 - Math.random());
    return shuffled.slice(0, count);
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
document.addEventListener('DOMContentLoaded', displaySpotlight);

