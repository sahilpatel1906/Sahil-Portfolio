// Create bio for index page
async function getBio() {
    await fetch("https://api.github.com/users/sahilpatel1906")
    .then(response => response.json())
    .then(data => 
        {
            $('#github-bio').html(`${data.bio}`);
        })
};

getBio();

function getRandomLocation() {
    return Math.floor(Math.random()*100)
}
function getRandomDuration() {
    return Math.floor(Math.random()*15 +1)
}
function createBoxesDiv(x = 10) {
    for (let idx = 0; idx < x; idx++) {
        $("#animation-wrapper").append(`
                <span style="z-index: -1; top:${getRandomLocation()}%; left:${getRandomLocation()}%; animation: animate ${getRandomDuration()}s linear infinite"></span>
        `);
    }
}

createBoxesDiv(10);



// Download pdf on button click on index
$('#resume-download').click(function(){
    window.open("./../misc/Sahil Patel CV.pdf", '_blank');
});

// Redirect to projects page to show all projects
$('#projects-button').click(function(){
    window.open("./work.html", '_self');
});
