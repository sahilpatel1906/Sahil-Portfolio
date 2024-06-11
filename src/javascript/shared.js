// Top Projects to display
const TopProjects = [
    {
        "name": "F1 Data Graphing & Analysis Website",
        "brief": "lorem",
        "technologies": "",
        "github": "https://github.com/onlysilvercrow/f1_website",
        "link": ""
    },
    {
        "name": "Jeanius Delivery App",
        "brief": "lorem",
        "technologies": "",
        "github": "",
        "link": ""
    },
    {
        "name": "Conversa Api",
        "brief": "lorem",
        "technologies": "",
        "github": "",
        "link": ""
    },
    
]

// Timeline information
const timeline = [
    {
        "year": "2000",
        "info": "Birth"
    },
    {
        "year": "2018-2022",
        "info": "University of Bristol: Masters in Mechanical and Electrical Engineering"
    },
    {
        "year": "2022-2023",
        "info": "F1 Website Data Graphing & Analysis"
    },
    {
        "year": "2023",
        "info": "Data Science Internship at REPLY"
    },
    {
        "year": "2023",
        "info": "AWS Cloud Practitioner Foundational"
    },
    {
        "year": "2024",
        "info": "Completed full Stack Bootcamp by Bright Network Technology Academy"
    },
    {
        "year": "Now",
        "info": "Full stack development at CookSys"
    }

    
]

// function to create a list of projects based on provided json and elementId
function createProjectsList(projectsList, elemId) {
    for (let idx = 0; idx < projectsList.length; idx++) {
        let project = projectsList[idx]
        $(elemId).append(`
            <article class="single-project" id="project-${idx}">
                <h4>${project.name}</h4>
                <a href="${project.github}"><img src="" alt="Github Link to project ${project.github}"></a>
                <div>
                    <p>${project.brief}</p>
                    <p>Technologies:${project.technologies} </p>
                </div>
            </article>
        `);
        $(".carousel-nav").append(
            `<a href="#project-${idx}"></a>`
        );
    }
}

// function to create a list of projects based on provided json and elementId
function createAllProjectsList(projectsList, elemId) {
    for (let idx = 0; idx < projectsList.length; idx++) {
        let project = projectsList[idx]
        $(elemId).append(`
            <article class="single-project" id="project-${idx}">
                <h4>${project.name}</h4>
                <a href="${project.github}"><img src="" alt="Github Link to project ${project.github}"></a>
                <div>
                    <p>${project.brief}</p>
                    <p>Technologies:${project.technologies} </p>
                </div>
            </article>
        `);
    }
}


// function to create a timeline components
function createTimeline(timelineItems, elemId) {
    for (let item of timelineItems) {
        $(elemId).append(`          
             <article class="container">
                <div class="content">
                    <h4>${item.year}</h4>
                    <p>${item.info}</p>
                </div>
            </article>  
        `);     
    }
}

// Generate top projects list
createProjectsList(TopProjects, '#recent-projects')


// Generate timeline components
createTimeline(timeline, '#timeline-div')


