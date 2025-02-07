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
