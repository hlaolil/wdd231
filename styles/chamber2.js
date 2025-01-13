courses.forEach(course => {
  const courseCard = document.createElement('div'); // Create a child div for each course
  courseCard.className = 'course-grid-item'; // Add styling
  courseCard.textContent = course; // Set the content (course name)
  coursesDiv.appendChild(courseCard); // Append it to the container
});
