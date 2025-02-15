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

document.addEventListener("DOMContentLoaded", () => {
    const eventsDiv = document.querySelector(".events");
  
    if (eventsDiv) {
      const eventsList = document.createElement("ul");
      eventsList.classList.add("events-list");
  
      // Define events with names and dates
      const events = [
        { name: "Year planning", date: "11-Jan" },
        { name: "Board meeting", date: "18-Jan" },
        { name: "Giving to the less privileged", date: "25-Jan" },
        { name: "Prayer and fasting", date: "2-Feb" },
        { name: "Communion service", date: "23-Feb" },
        { name: "Night prayer", date: "21-Feb" },
        { name: "Leadership training", date: "11-Mar" },
        { name: "Marriage seminar - Speaker Ntate Likhama", date: "25-Mar" },
        { name: "Open air evangelism", date: "14-Jun" },
        { name: "Children’s conference", date: "21-Jun" },
        { name: "Ketekelo ea mosali ea khabane", date: "1-Aug" },
        { name: "Expedition Saturday Fun Walk from Sekubu", date: "30-Aug" },
        { name: "Rally for missions", date: "2-Nov" },
        { name: "Healing campaign & personal evangelism", date: "29-Nov" },
        { name: "Small business development training - Moruti Hlaoli", date: "3-Dec" },
        { name: "Revival Speaker - Moruti Lesana", date: "5-Dec" },
        { name: "Children’s dedication and baptism", date: "15-Dec" },
        { name: "Prison visits", date: "ad hoc" },
        { name: "Bible study", date: "Every Sunday" },
        { name: "Church service", date: "Every Sunday" },
        { name: "Intercession", date: "Every Sunday" },
        { name: "Wednesday prayer meeting (Needs modification)", date: "TBD" },
      ];
  
      // Get today's date
      const today = new Date();
      const threeMonthsLater = new Date();
      threeMonthsLater.setMonth(today.getMonth() + 3);
  
      // Function to convert "dd-MMM" format to a Date object
      function parseEventDate(eventDate) {
        const [day, month] = eventDate.split("-");
        const year = today.getFullYear();
        return new Date(`${month} ${day}, ${year}`);
      }
  
      // Filter events within the next 3 months and sort them by date
      const upcomingEvents = events
        .filter(event => {
          if (event.date === "ad hoc" || event.date === "Every Sunday" || event.date === "TBD") {
            return false;
          }
  
          const eventDate = parseEventDate(event.date);
          return eventDate >= today && eventDate <= threeMonthsLater;
        })
        .sort((a, b) => parseEventDate(a.date) - parseEventDate(b.date)); // Sort by date
  
      // Use DocumentFragment for performance
      const fragment = document.createDocumentFragment();
  
      upcomingEvents.forEach(event => {
        const listItem = document.createElement("li");
        listItem.textContent = `${event.name} - ${event.date}`;
        fragment.appendChild(listItem);
      });
  
      eventsList.appendChild(fragment);
      eventsDiv.appendChild(eventsList);
    } else {
      console.error("The '.events' div was not found.");
    }
  });

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

document.addEventListener("DOMContentLoaded", () => {
    displaySpotlight(); // Load spotlight section
    displayUpcomingEvents(); // Load upcoming events section
});

// Function to display the spotlight (Routine Services)
function displaySpotlight() {
    const spotlightSection = document.querySelector(".spotlight"); // Select the spotlight section

    if (spotlightSection) {
        // Define routine services (Spotlighted section)
        const routineServices = [
            { 
                name: "Wednesday Prayer Meeting", 
                schedule: "Every Wednesday, 17:00 - 18:00",
                image: "prayer.jpg",
                contact: "Kelebone Lekunya - +266 6320 6940"
            },
            { 
                name: "Sunday Service", 
                schedule: "Every Sunday, 10:00 - 13:00",
                image: "sunday.jpg",
                contact: "Church Office - +266 6223 3969"
            },
            
        ];

        // Use a DocumentFragment for performance
        const fragment = document.createDocumentFragment();

        // Generate spotlight cards for routine services
        routineServices.forEach(service => {
            const serviceCard = document.createElement("div");
            serviceCard.classList.add("spotlight-card"); // Add class for styling

            serviceCard.innerHTML = `
                <img src="images/${service.image}" alt="${service.name}" class="service-image">
                <h3>${service.name}</h3>
                <p><strong>Schedule:</strong> ${service.schedule}</p>
                <p><strong>Contact:</strong> ${service.contact}</p>
            `;

            fragment.appendChild(serviceCard);
        });

        // Append to the spotlight section
        spotlightSection.innerHTML = ''; // Clear previous content
        spotlightSection.appendChild(fragment);
    } else {
        console.error("The '.spotlight' section was not found.");
    }
}
