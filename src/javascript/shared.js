// Top Projects to display
const TopProjects = [
    {
        "name": "F1 Data Graphing & Analysis Website",
        "brief": "This project utilises the Ergast API to provide users with graphs to be able analyse previous F1 races. It is complete with a back-end for user authentication and authorisation. Future goal involves integrating with F1 2022 game, through a UDP connection to provide users real time insights regarding their race metrics and comparisons to real racers through Ergast API.",
        "technologies": "MERN Stack (MongoDB, Express.js, React, Node), Azure Static Web Apps, Azure Functions",
        "github": "https://github.com/onlysilvercrow/f1_website",
        "link": ""
    },
    {
        "name": "Adminstration and Management App",
        "brief": "Developed a comprehensive full stack application for effective team, project, and user management. The application offers role-based access, providing tailored views and functionalities for both administrators and workers. Administrators can oversee and update team structures, project details, and user information, while workers have streamlined access to their specific tasks and project details.",
        "technologies": "Java, Spring, PostgreSQL, pgAdmin, Postman, Angular, JavaScript, HTML5, CSS, Git, Figma",
        "github": "https://github.com/sahilpatel1906/AdminApp-Cooksys",
        "link": "" 
    },
    {
        "name": "Jeanius Delivery App",
        "brief": "This project aims to improve delivery logistics by implementing an efficient route planning system for drivers. Currently, the delivery fleet is underutilised due to fixed routes and inefficient assignment practices that do not consider package quantities, leading to unreliable delivery times. By developing a dynamic route planning system, this project aims to optimise delivery routes, ensuring efficient vehicle utilisation and timely deliveries. The project's goal is to revolutionise delivery operations within RainforestRetail, maximising fleet efficiency and delivering a superior customer experience.",
        "technologies": "Java, Spring, React, PostgreSQL, Postman, Trello, MUI",
        "github": "https://github.com/sahilpatel1906/Capstone_Project",
        "link": ""
    }, 
]


// Top Projects to display
const AllProjects = [
    {
        "name": "F1 Data Graphing & Analysis Website",
        "brief": "This project utilises the Ergast API to provide users with graphs to be able analyse previous F1 races. It is complete with a back-end for user authentication and authorisation. Future goal involves integrating with F1 2022 game, through a UDP connection to provide users real time insights regarding their race metrics and comparisons to real racers through Ergast API.",
        "technologies": "MERN Stack (MongoDB, Express.js, React, Node), Azure Static Web Apps, Azure Functions",
        "github": "https://github.com/onlysilvercrow/f1_website",
        "link": ""
    },
    {
        "name": "Jeanius Delivery App",
        "brief": "This project aims to improve delivery logistics by implementing an efficient route planning system for drivers. Currently, the delivery fleet is underutilised due to fixed routes and inefficient assignment practices that do not consider package quantities, leading to unreliable delivery times. By developing a dynamic route planning system, this project aims to optimise delivery routes, ensuring efficient vehicle utilisation and timely deliveries. The project's goal is to revolutionise delivery operations within RainforestRetail, maximising fleet efficiency and delivering a superior customer experience.",
        "technologies": "Java, Spring, React, PostgreSQL, Postman, Trello, MUI",
        "github": "https://github.com/sahilpatel1906/Capstone_Project",
        "link": ""
    },
    {
        "name": "Conversa Api",
        "brief": "This back-end project utilised Java, Spring Boot and a PostgreSQL database to build a chatroom application programming interface (API) that allows users to make requests to a back-end database. The motivation behind this project was to deepen our understanding of developing back-end APIs using the Spring Framework in conjunction with PostgreSQL databases.",
        "technologies": "Java, Sprint Boot, PostgreSQL, Postico, Postman, Trello",
        "github": "https://github.com/sahilpatel1906/Conversa_API",
        "link": ""
    },
    {
        "name": "Blog Front-end",
        "brief": "Created a frontend for a blog site API. Users would be able to log in to their account and view all blogs posted on the site. They would also be able to view, create, edit, and delete their own personal blogs. Users should also be able to filter the blogs to search for particular titles. Users can leave comments and likes on posts within blogs. Only the creater of a blog can add posts to a blog.",
        "technologies": "HTML5, CSS, JavaScript, React, Postico, Postman, Trello",
        "github": "https://github.com/sahilpatel1906/Blog_Frontend",
        "link": "" 
    },
    {
        "name": "Mock Twitter API",
        "brief": "Developed a RESTful API simulating Twitter functionality, utilizing CRUD operations to interact with a PostgreSQL database server, enabling features such as posting tweets. ",
        "technologies": "Java, Spring, PostgreSQL, Git, Postman, pgAdmin",
        "github": "https://github.com/sahilpatel1906/Mock-Twitter-API",
        "link": "" 
    },
    {
        "name": "TrackGuesser",
        "brief": "Developed a song guesser game application utilizing the Spotify API for fetching track-related data, and implemented three distinct game modes as part of a two-person team. ",
        "technologies": "Angular, JavaScript, HTML5, Tailwind CSS, Git, Figma",
        "github": "https://github.com/sahilpatel1906/TrackGuesser",
        "link": "" 
    },
    {
        "name": "Adminstration and Management App",
        "brief": "Developed a comprehensive full stack application for effective team, project, and user management. The application offers role-based access, providing tailored views and functionalities for both administrators and workers. Administrators can oversee and update team structures, project details, and user information, while workers have streamlined access to their specific tasks and project details.",
        "technologies": "Java, Spring, PostgreSQL, pgAdmin, Postman, Angular, JavaScript, HTML5, CSS, Git, Figma",
        "github": "https://github.com/sahilpatel1906/AdminApp-Cooksys",
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
        "info": "Full Stack Developer at Cook Systems (Deployed at FedEx)"
    } 
]

// function to create a list of projects based on provided json and elementId
function createProjectsList(projectsList, elemId) {
    for (let idx = 0; idx < projectsList.length; idx++) {
        let project = projectsList[idx]
        $(elemId).append(`
            <article class="single-project" id="project-${idx}">
                <div class="project-heading">
                    <h4><span class="span-bold">${project.name}</span></h4>
                    <a href="${project.github}"><img src="./img/github-mark.png" alt="Github Link to project ${project.github}"></a>
                </div>
                <div>
                    <p><span class="span-bold">Brief: </span>${project.brief}</p>
                    <p><span class="span-bold">Technologies: </span>${project.technologies} </p>
                </div>
            </article>
        `);
        $(".carousel-nav").append(
            `<a class="carousel-a-tag" href="#" value="${idx}"></a>`
        );
    }
}

// Create bio for index page
async function getProfilePic() {
    await fetch("https://api.github.com/users/sahilpatel1906")
    .then(response => response.json())
    .then(data => 
        {
            $('#github-profile-pic').attr("src",data.avatar_url);
            $('#github-profile-pic-a').attr("href",data.avatar_url);
        })
};

getProfilePic();

// function to create a list of projects based on provided json and elementId
function createAllProjectsList(projectsList, elemId) {
    for (let idx = 0; idx < projectsList.length; idx++) {
        let project = projectsList[idx]
        $(elemId).append(`
            <article class="single-project" id="project-${idx}">
                <div class="project-heading">
                    <h4><span class="span-bold">${project.name}</span></h4>
                    <a href="${project.github}"><img src="./img/github-mark.png" alt="Github Link to project ${project.github}"></a>
                </div>
                <div>
                    <p><span class="span-bold">Brief: </span>${project.brief}</p>
                    <p><span class="span-bold">Technologies: </span>${project.technologies} </p>
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
                <div>
                    <h4><span class="span-bold"> ${item.year} </span></h4>
                    <p>${item.info}</p>
                </div>
            </article>  
        `);     
    }
}

// Generate top projects list
createProjectsList(TopProjects, '#recent-projects')

// Generate top projects list
createAllProjectsList(AllProjects, '#all-projects')

// Generate timeline components
createTimeline(timeline, '#timeline-div')

$(".carousel-a-tag").click(function(event) {
    event.preventDefault();
    const projectId = event.target.getAttribute("value");
    const carousel =  $("#recent-projects");
    const left = $(`#project-${projectId}`).offset().left;
    carousel.scrollLeft(left);
}
)
