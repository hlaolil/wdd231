// Get the current year and set it in the footer
const yearElement = document.getElementById("currentyear");
const currentYear = new Date().getFullYear();
yearElement.textContent = currentYear;

// Get the last modified date and set it in the footer
const lastModifiedElement = document.getElementById("lastModified");
const lastModified = document.lastModified;
lastModifiedElement.textContent = `Last updated: ${lastModified}`;