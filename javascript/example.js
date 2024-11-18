// script.js

// Sample data for projects
const projects = [
    { title: "Build a Personal Portfolio Website", category: "web", budget: 450, description: "Looking for a developer to build a simple personal portfolio website.", id: 1 },
    { title: "Logo Design for Startup", category: "graphic", budget: 600, description: "A logo design for a new tech startup.", id: 2 },
    { title: "Article Writing for Blog", category: "writing", budget: 300, description: "Writing SEO optimized articles for a tech blog.", id: 3 },
    { title: "E-commerce Website Development", category: "web", budget: 2500, description: "Build an e-commerce platform with payment integration.", id: 4 },
    { title: "Social Media Graphics", category: "graphic", budget: 700, description: "Create high-quality graphics for our social media channels.", id: 5 },
    { title: "Technical Writing for User Manual", category: "writing", budget: 1200, description: "Writing a user manual for a software product.", id: 6 }
];

const projectsContainer = document.getElementById('projects-container');
const filterForm = document.getElementById('filter-form');

function displayProjects(filteredProjects) {
    projectsContainer.innerHTML = ''; // Clear the previous project cards
    filteredProjects.forEach(project => {
        const projectCard = document.createElement('div');
        projectCard.classList.add('project-card');
        projectCard.innerHTML = `
            <h3>${project.title}</h3>
            <p>${project.description}</p>
            <span class="category">${project.category.charAt(0).toUpperCase() + project.category.slice(1)}</span> |
            <span class="budget">$${project.budget}</span>
            <button onclick="selectProject(${project.id})">Select Project</button>
        `;
        projectsContainer.appendChild(projectCard);
    });
}

function filterProjects(event) {
    event.preventDefault();

    const category = document.getElementById('category').value;
    const budget = document.getElementById('budget').value;

    let filteredProjects = projects;

    if (category !== 'all') {
        filteredProjects = filteredProjects.filter(project => project.category === category);
    }

    if (budget !== 'all') {
        const budgetRanges = {
            low: [0, 500],
            medium: [500, 2000],
            high: [2000, Infinity]
        };
        const [minBudget, maxBudget] = budgetRanges[budget];
        filteredProjects = filteredProjects.filter(project => project.budget >= minBudget && project.budget <= maxBudget);
    }

    displayProjects(filteredProjects);
}

function selectProject(projectId) {
    alert('You selected project with ID: ${ projectId }');
    // Here you would typically send the project ID to your backend for further processing.
}

filterForm.addEventListener('submit', filterProjects);

// Initial display of all projects
displayProjects(projects);