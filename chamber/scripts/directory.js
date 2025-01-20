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

const directoryData = [
    {
        name: "Tech Solutions Ltd.",
        address: "123 Tech Street, Silicon Valley, CA",
        phone: "(123) 456-7890",
        website: "https://techsolutions.com",
        image: "tech-solutions-logo.png", // Image or icon file
        membershipLevel: 3, // Gold membership
        otherInfo: "Leading tech company specializing in cloud services."
    },
    {
        name: "Global Ventures Inc.",
        address: "456 Business Blvd, London, UK",
        phone: "(234) 567-8901",
        website: "https://globalventures.com",
        image: "global-ventures-logo.png", // Image or icon file
        membershipLevel: 2, // Silver membership
        otherInfo: "Expanding businesses across Europe and Asia."
    },
    {
        name: "Eco Innovations",
        address: "789 Green Rd, Johannesburg, South Africa",
        phone: "(345) 678-9012",
        website: "https://ecoinnovations.com",
        image: "eco-innovations-logo.png", // Image or icon file
        membershipLevel: 1, // Member
        otherInfo: "Sustainable solutions for the future."
    },
    {
        name: "Alpha Manufacturing",
        address: "321 Industry Park, Tokyo, Japan",
        phone: "(456) 789-0123",
        website: "https://alphamanufacturing.com",
        image: "alpha-manufacturing-logo.png", // Image or icon file
        membershipLevel: 3, // Gold membership
        otherInfo: "Innovating production processes for global industries."
    },
    {
        name: "Creative Designs Studio",
        address: "654 Art Lane, Paris, France",
        phone: "(567) 890-1234",
        website: "https://creativedesigns.com",
        image: "creative-designs-logo.png", // Image or icon file
        membershipLevel: 2, // Silver membership
        otherInfo: "Designing memorable brands and experiences."
    },
    {
        name: "Smart Logistics Co.",
        address: "987 Supply Rd, Sydney, Australia",
        phone: "(678) 901-2345",
        website: "https://smartlogistics.com",
        image: "smart-logistics-logo.png", // Image or icon file
        membershipLevel: 1, // Member
        otherInfo: "Efficient supply chain solutions for modern businesses."
    },
    {
        name: "FinTech Innovations",
        address: "111 Finance St, New York, USA",
        phone: "(789) 012-3456",
        website: "https://fintechinnovations.com",
        image: "fintech-innovations-logo.png", // Image or icon file
        membershipLevel: 3, // Gold membership
        otherInfo: "Transforming the future of financial services with cutting-edge tech."
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
            <img src="images/${business.image}" alt="${business.name} Logo" class="business-logo">
            <h3>${business.name}</h3>
            <p><strong>Address:</strong> ${business.address}</p>
            <p><strong>Phone:</strong> ${business.phone}</p>
            <p><strong>Website:</strong> <a href="${business.website}" target="_blank">${business.website}</a></p>
            <p><strong>Membership Level:</strong> ${getMembershipLevel(business.membershipLevel)}</p>
            <p><strong>Other Information:</strong> ${business.otherInfo}</p>
        `;

        // Append the new business div to the section
        directorySection.appendChild(businessDiv);
    });
}

// Function to get membership level as a string
function getMembershipLevel(level) {
    switch(level) {
        case 1: return "Member";
        case 2: return "Silver";
        case 3: return "Gold";
        default: return "Unknown";
    }
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

