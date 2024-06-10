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

createProjectsList(TopProjects, '#recent-projects')


