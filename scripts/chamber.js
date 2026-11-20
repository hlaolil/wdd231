// Get the current year and set it in the footer
const yearElement = document.getElementById("currentyear");
const currentYear = new Date().getFullYear();
yearElement.textContent = currentYear;

// Get the last modified date and set it in the footer
const lastModifiedElement = document.getElementById("lastModified");
const lastModified = document.lastModified;
lastModifiedElement.textContent = `Last updated: ${lastModified}`;

const coursesDiv = document.getElementById('courses');
const courses = [
    {
        "subject": "PC",
        "number": "101",
        "title": "Life Skills",
        "credits": 3,
        "certificate": "PathwayConnect",
        "grade": "A",
        "term": "2023 Fall",
        "description": "Builds habits for success as a student: goal setting, time management, study skills and spiritual foundations.",
        "technology": [],
        "completed": true
    },
    {
        "subject": "PC",
        "number": "102",
        "title": "Professional Skills",
        "credits": 3,
        "certificate": "PathwayConnect",
        "grade": "A",
        "term": "2023 Fall",
        "description": "Career and workplace skills: communication, teamwork, problem solving and planning a career path.",
        "technology": [],
        "completed": true
    },
    {
        "subject": "CSE",
        "number": "110",
        "title": "Introduction to Programming",
        "credits": 2,
        "certificate": "Web & Computer Programming",
        "grade": "A",
        "term": "2024 Winter",
        "description": "Science for everyday life: the systems that sustain human health, food, water and environment, applied in a course project.",
        "technology": [
            "Python"
        ],
        "completed": true
    },
    {
        "subject": "PC",
        "number": "103",
        "title": "University Skills",
        "credits": 1,
        "certificate": "PathwayConnect",
        "grade": "A",
        "term": "2024 Winter",
        "description": "Prepares students for university study: academic writing, research and online learning.",
        "technology": [],
        "completed": true
    },
    {
        "subject": "CSE",
        "number": "111",
        "title": "Programming with Functions",
        "credits": 2,
        "certificate": "Web & Computer Programming",
        "grade": "A",
        "term": "2024 Spring",
        "description": "CSE 111 students become more organized, efficient, and powerful computer programmers by learning to research and call functions written by others; to write, call , debug, and test their own functions; and to handle errors within functions. CSE 111 students write programs with functions to solve problems in many disciplines, including business, physical science, human performance, and humanities.",
        "technology": [
            "Python"
        ],
        "completed": true
    },
    {
        "subject": "EIL",
        "number": "171",
        "title": "EIL Speaking",
        "credits": 0,
        "certificate": "General Education",
        "grade": "Pass",
        "term": "2024 Spring",
        "description": "English for professional and academic speaking. Passed; its 4 credits are not counted in the transcript totals.",
        "technology": [],
        "completed": true
    },
    {
        "subject": "WDD",
        "number": "130",
        "title": "Web Fundamentals",
        "credits": 2,
        "certificate": "Web & Computer Programming",
        "grade": "A",
        "term": "2024 Spring",
        "description": "This course introduces students to the World Wide Web and to careers in web site design and development. The course is hands on with students actually participating in simple web designs and programming. It is anticipated that students who complete this course will understand the fields of web design and development and will have a good idea if they want to pursue this degree as a major.",
        "technology": [
            "HTML",
            "CSS"
        ],
        "completed": true
    },
    {
        "subject": "CSE",
        "number": "210",
        "title": "Programming with Classes",
        "credits": 2,
        "certificate": "Web & Computer Programming",
        "grade": "A",
        "term": "2024 Fall",
        "description": "This course will introduce the notion of classes and objects. It will present encapsulation at a conceptual level. It will also work with inheritance and polymorphism.",
        "technology": [
            "C#"
        ],
        "completed": true
    },
    {
        "subject": "WDD",
        "number": "131",
        "title": "Dynamic Web Fundamentals",
        "credits": 2,
        "certificate": "Web & Computer Programming",
        "grade": "A",
        "term": "2024 Fall",
        "description": "This course builds on prior experience in Web Fundamentals and programming. Students will learn to create dynamic websites that use JavaScript to respond to events, update content, and create responsive user experiences.",
        "technology": [
            "HTML",
            "CSS",
            "JavaScript"
        ],
        "completed": true
    },
    {
        "subject": "WDD",
        "number": "231",
        "title": "Web Frontend Development I",
        "credits": 2,
        "certificate": "Web & Computer Programming",
        "grade": "A",
        "term": "2025 Term 1",
        "description": "This course builds on prior experience with Dynamic Web Fundamentals and programming. Students will focus on user experience, accessibility, compliance, performance optimization, and basic API usage.",
        "technology": [
            "HTML",
            "CSS",
            "JavaScript"
        ],
        "completed": true
    },
    {
        "subject": "ITM",
        "number": "111",
        "title": "Introduction to Databases",
        "credits": 3,
        "certificate": "Web Development",
        "grade": "A",
        "term": "2025 Term 2",
        "description": "Relational database design and SQL: modelling data, building tables and writing queries.",
        "technology": [
            "SQL",
            "MySQL"
        ],
        "completed": true
    },
    {
        "subject": "WDD",
        "number": "330",
        "title": "Web Frontend Development II",
        "credits": 3,
        "certificate": "Web Development",
        "grade": "A",
        "term": "2025 Term 3",
        "description": "Builds larger frontend applications with modular JavaScript, third-party APIs, build tools and client-side storage, ending in an individual project.",
        "technology": [
            "HTML",
            "CSS",
            "JavaScript",
            "Vite"
        ],
        "completed": true
    },
    {
        "subject": "CSE",
        "number": "340",
        "title": "Web Backend Development",
        "credits": 3,
        "certificate": "Web Development",
        "grade": "A",
        "term": "2025 Term 4",
        "description": "Server-side web development with the MVC pattern: routing, templating, data validation, sessions and a relational database behind a working web application.",
        "technology": [
            "Node.js",
            "Express",
            "EJS",
            "PostgreSQL"
        ],
        "completed": true
    },
    {
        "subject": "GS",
        "number": "170",
        "title": "Career Development",
        "credits": 1,
        "certificate": "General Education",
        "grade": "A",
        "term": "2025 Term 4",
        "description": "Plans a career path: strengths, résumé, networking and job searching.",
        "technology": [],
        "completed": true
    },
    {
        "subject": "CSE",
        "number": "341",
        "title": "Web Services",
        "credits": 3,
        "certificate": "Web Development",
        "grade": "A",
        "term": "2025 Term 5",
        "description": "Designs, documents and deploys REST APIs, with a NoSQL database, OAuth authentication and API documentation.",
        "technology": [
            "Node.js",
            "Express",
            "MongoDB",
            "Swagger"
        ],
        "completed": true
    },
    {
        "subject": "WDD",
        "number": "430",
        "title": "Web Full-Stack Development",
        "credits": 3,
        "certificate": "Web Development",
        "grade": "A",
        "term": "2025 Term 6",
        "description": "A team course that builds a full-stack application with a modern framework, from frontend components to the database and deployment.",
        "technology": [
            "Next.js",
            "React",
            "TypeScript",
            "PostgreSQL"
        ],
        "completed": true
    },
    {
        "subject": "WRIT",
        "number": "101",
        "title": "Writing in Professional Contexts",
        "credits": 3,
        "certificate": "General Education",
        "grade": "A",
        "term": "2025 Term 6",
        "description": "Clear, purposeful writing for workplace audiences.",
        "technology": [],
        "completed": true
    },
    {
        "subject": "BUS",
        "number": "301",
        "title": "Advanced Writing in Professional Contexts",
        "credits": 3,
        "certificate": "General Education",
        "grade": "A",
        "term": "2026 Block 1",
        "description": "Advanced professional and research writing for business settings.",
        "technology": [],
        "completed": true
    },
    {
        "subject": "CSE",
        "number": "212",
        "title": "Programming with Data Structures",
        "credits": 2,
        "certificate": "Software Development",
        "grade": "A",
        "term": "2026 Block 1",
        "description": "Uses stacks, queues, linked lists, sets, maps and trees to solve problems, with attention to how the choice of data structure affects performance.",
        "technology": [
            "Python"
        ],
        "completed": true
    },
    {
        "subject": "MATH",
        "number": "108X",
        "title": "Math for the Real World",
        "credits": 3,
        "certificate": "General Education",
        "grade": "A-",
        "term": "2026 Block 1",
        "description": "Practical mathematics for everyday decisions: finance, statistics and modelling.",
        "technology": [],
        "completed": true
    },
    {
        "subject": "CSE",
        "number": "300",
        "title": "Professional Readiness",
        "credits": 1,
        "certificate": "Software Development",
        "grade": "A",
        "term": "2026 Block 2",
        "description": "Prepares for work in software: portfolio, interviewing and professional practice.",
        "technology": [],
        "completed": true
    },
    {
        "subject": "CSE",
        "number": "325",
        "title": ".NET Software Development",
        "credits": 3,
        "certificate": "Software Development",
        "grade": "A",
        "term": "2026 Block 2",
        "description": "Builds web applications on the .NET platform with C#, Blazor and Entity Framework, working with data and deploying the result.",
        "technology": [
            "C#",
            ".NET",
            "Blazor"
        ],
        "completed": true
    },
    {
        "subject": "BUS",
        "number": "321",
        "title": "Organizational Leadership",
        "credits": 3,
        "certificate": "General Education",
        "grade": "A",
        "term": "2026 Block 3",
        "description": "Leadership in organisations: influence, teams, culture and change.",
        "technology": [],
        "completed": true
    },
    {
        "subject": "FCS",
        "number": "160",
        "title": "Family Leadership and Resource Management",
        "credits": 3,
        "certificate": "General Education",
        "grade": "A",
        "term": "2026 Block 3",
        "description": "Leading a family well: managing time, money and other household resources.",
        "technology": [],
        "completed": true
    },
    {
        "subject": "CSE",
        "number": "270",
        "title": "Software Testing",
        "credits": 3,
        "certificate": "Software Development",
        "grade": "B+",
        "term": "2026 Block 4",
        "description": "Plans and carries out software testing: test cases, test campaigns, defect tracking, and unit and automated testing.",
        "technology": [
            "Squash TM",
            "Python"
        ],
        "completed": true
    },
    {
        "subject": "HUM",
        "number": "110",
        "title": "Discovery and Discernment Through the Arts",
        "credits": 3,
        "certificate": "General Education",
        "grade": "A",
        "term": "2026 Block 4",
        "description": "Explores how art, music and literature express questions of truth, beauty and meaning, and how to respond to them thoughtfully.",
        "technology": [],
        "completed": true
    },
    {
        "subject": "CSE",
        "number": "310",
        "title": "Applied Programming",
        "credits": 3,
        "certificate": "Software Development",
        "grade": "A",
        "term": "2026 Block 5",
        "description": "Self-directed sprints that learn a new language, framework or skill in each module and build a small project to show it.",
        "technology": [
            "C#",
            "Python",
            "pandas"
        ],
        "completed": true
    },
    {
        "subject": "GESCI",
        "number": "110",
        "title": "Sustaining Human Life",
        "credits": 3,
        "certificate": "General Education",
        "grade": "A",
        "term": "2026 Block 5",
        "description": "Science for everyday life: the systems that sustain human health, food, water and environment, applied in a course project.",
        "technology": [],
        "completed": true
    },
    {
        "subject": "REL",
        "number": "200",
        "title": "The Eternal Family",
        "credits": 2,
        "certificate": "Religion",
        "grade": "Transfer",
        "term": "Institute",
        "description": "Gospel principles of marriage, parenthood and family life.",
        "technology": [],
        "completed": true
    },
    {
        "subject": "REL",
        "number": "225",
        "title": "Foundations of the Restoration",
        "credits": 2,
        "certificate": "Religion",
        "grade": "Transfer",
        "term": "Institute",
        "description": "The history and doctrine of the Restoration.",
        "technology": [],
        "completed": true
    },
    {
        "subject": "REL",
        "number": "250",
        "title": "Jesus Christ and His Everlasting Gospel",
        "credits": 2,
        "certificate": "Religion",
        "grade": "Transfer",
        "term": "Institute",
        "description": "The life, mission and teachings of Jesus Christ.",
        "technology": [],
        "completed": true
    },
    {
        "subject": "REL",
        "number": "275A",
        "title": "Teachings and Doctrine of the Book of Mormon A",
        "credits": 1,
        "certificate": "Religion",
        "grade": "Pass",
        "term": "2025 Term 2",
        "description": "The first half of the Book of Mormon and its teachings.",
        "technology": [],
        "completed": true
    },
    {
        "subject": "REL",
        "number": "275B",
        "title": "Teachings and Doctrine of the Book of Mormon B",
        "credits": 1,
        "certificate": "Religion",
        "grade": "Pass",
        "term": "2025 Term 3",
        "description": "The second half of the Book of Mormon and its teachings.",
        "technology": [],
        "completed": true
    },
    {
        "subject": "REL",
        "number": "290A",
        "title": "The Divine Gift of Forgiveness A",
        "credits": 1,
        "certificate": "Religion",
        "grade": "Pass",
        "term": "2025 Term 5",
        "description": "Repentance, forgiveness and the Atonement of Jesus Christ.",
        "technology": [],
        "completed": true
    },
    {
        "subject": "REL",
        "number": "290B",
        "title": "The Divine Gift of Forgiveness B",
        "credits": 1,
        "certificate": "Religion",
        "grade": "Pass",
        "term": "2025 Term 6",
        "description": "Forgiving others and healing relationships.",
        "technology": [],
        "completed": true
    },
    {
        "subject": "REL",
        "number": "333A",
        "title": "Teachings of Living Prophets A",
        "credits": 1,
        "certificate": "Religion",
        "grade": "Pass",
        "term": "2026 Block 2",
        "description": "Teachings of modern prophets and apostles.",
        "technology": [],
        "completed": true
    },
    {
        "subject": "REL",
        "number": "333B",
        "title": "Teachings of Living Prophets B",
        "credits": 1,
        "certificate": "Religion",
        "grade": "Pass",
        "term": "2026 Block 3",
        "description": "Teachings of modern prophets and apostles, continued.",
        "technology": [],
        "completed": true
    }
]
// Filter courses by subject
function filterCourses(filter) {
  switch (filter) {
    case 'wdd':
      return courses.filter(course => course.subject === 'WDD');
    case 'cse':
      return courses.filter(course => course.subject === 'CSE');
    case 'other':
      return courses.filter(course => !['WDD', 'CSE'].includes(course.subject));
    default:
      return courses; // All courses
  }
}

// Render courses dynamically as buttons that open a modal
function renderCourses(filteredCourses) {
  const coursesDiv = document.getElementById('courses');
  coursesDiv.innerHTML = ''; // Clear previous content

  let totalCredits = 0;

  filteredCourses.forEach(course => {
    // Create a button element for the course
    const courseButton = document.createElement('button');
    courseButton.classList.add('course-card', course.completed ? 'completed' : 'incomplete');
    
    // Instead of innerHTML with just a paragraph, add content to the button:
    courseButton.innerHTML = `<p><strong>${course.subject} ${course.number}</strong></p>`;
    
    // Add an event listener to open the modal with course details
    courseButton.addEventListener('click', () => {
      openCourseModal(course);
    });

    totalCredits += course.credits || 0;
    coursesDiv.appendChild(courseButton);
  });

  // Update total credits dynamically
  const creditDiv = document.getElementById('total-credits');
  creditDiv.textContent = totalCredits;
}

// Function to open modal and display course details
function openCourseModal(course) {
  const modal = document.getElementById('course-modal');
  const modalDetails = document.getElementById('modal-details');

  // Populate modal details (customize as needed)
  modalDetails.innerHTML = `
    <h2>${course.subject} ${course.number}</h2>
    <p><strong>Name:</strong> ${course.title || 'N/A'}</p>
    <p><strong>Credits:</strong> ${course.credits || 'N/A'}</p>
    <p><strong>Certificate:</strong> ${course.certificate || 'N/A'}</p>
    <p><strong>Taken:</strong> ${course.term || 'N/A'} · <strong>Grade:</strong> ${course.grade || 'N/A'}</p>
    ${course.technology && course.technology.length ? `<p><strong>Technology:</strong> ${course.technology.join(', ')}</p>` : ''}
    <p><strong>Status:</strong> ${course.completed ? 'Completed' : 'In Progress'}</p>
    <p><strong>Description:</strong> ${course.description || 'No description available.'}</p>
  `;

  // Display the modal
  modal.style.display = 'block';
}

// Event listener to close modal when clicking on the close button
document.getElementById('modal-close').addEventListener('click', () => {
  document.getElementById('course-modal').style.display = 'none';
});

// Optional: close modal when clicking outside of modal content
window.addEventListener('click', (event) => {
  const modal = document.getElementById('course-modal');
  if (event.target === modal) {
    modal.style.display = 'none';
  }
});

// Button event listeners to filter courses remain the same
document.getElementById('all-courses-btn').addEventListener('click', () => {
  renderCourses(filterCourses('all'));
});

document.getElementById('wdd-courses-btn').addEventListener('click', () => {
  renderCourses(filterCourses('wdd'));
});

document.getElementById('other-courses-btn').addEventListener('click', () => {
  renderCourses(filterCourses('other'));
});

document.getElementById('cse-courses-btn').addEventListener('click', () => {
  renderCourses(filterCourses('cse'));
});

// Initial render for all courses
renderCourses(courses);

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
    let currentLocation = window.location.pathname.replace(/\/$/, ''); // Get current path, remove trailing slash
    const navLinks = document.querySelectorAll('nav ul li a'); // Select all navigation links

    // Treat root path `/` as `/index.html` for comparison
    if (currentLocation === '' || currentLocation.endsWith('/wdd231')) {
        currentLocation += '/index.html';
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


