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
        "info": "Birth",
        "side": "left"
    },
    {
        "year": "2018-2022",
        "info": "Started University",
        "side": "right"
    },
    {
        "year": "2022-2023",
        "info": "F1 Website Data Graphing & Analysis",
        "side": "left"
    }
    
]

// function to create a list of projects based on provided json and elementId
function createProjectsList(projectsList, elemId) {
    for (let project of projectsList) {
        $(elemId).append(`
             <article>
                <h4>${project.name}</h4>
                <a href="${project.github}" /><img src="" alt="Github Link to project ${project.github}"></a>
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
             <article class="container ${item.side}">
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


