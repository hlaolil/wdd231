document.addEventListener("DOMContentLoaded", () => {
    const routineServices = [
        { 
            name: "Youth Meeting", 
            schedule: "Every Saturday, 15:00",
            image: "youth.jpg",
            contact: "Youth Leader - +266 5912 6226"
        },
        { 
            name: "Women’s Meeting", 
            schedule: "Every Thursday, 14:00",
            image: "women.jpg",
            contact: "Women’s Ministry - +266 63135521"
        },
        {
            name: "Children's Ministry",
            schedule: "Every Sunday, 10:30 - 11:30",
            image: "children.jpg",
            contact: "Teacher - +266 5919 3208"
        }
    ];

    const gridContainer = document.getElementById("ministriesGrid");
    const modal = document.getElementById("modal");
    const modalTitle = document.getElementById("modal-title");
    const modalDescription = document.getElementById("modal-description");
    const closeModal = document.querySelector(".close");

    // Ensure modal starts hidden
    modal.style.display = "none";

    // Populate ministries dynamically
    routineServices.forEach(service => {
        const card = document.createElement("div");
        card.classList.add("card");

        card.innerHTML = `
            <img src="${service.image}" alt="${service.name}">
            <h3>${service.name}</h3>
            <p>${service.schedule}</p>
        `;

        card.addEventListener("click", () => {
            modalTitle.textContent = service.name;
            modalDescription.innerHTML = `<strong>Schedule:</strong> ${service.schedule}<br><strong>Contact:</strong> ${service.contact}`;
            modal.style.display = "flex";
        });

        gridContainer.appendChild(card);
    });

    // Close modal when clicking the close button
    closeModal.addEventListener("click", () => {
        modal.style.display = "none";
    });

    // Close modal when clicking outside of it
    window.addEventListener("click", (e) => {
        if (e.target === modal) {
            modal.style.display = "none";
        }
    });
});
