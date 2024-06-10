// Create bio for index page
async function getBio() {
    await fetch("https://api.github.com/users/sahilpatel1906")
    .then(response => response.json())
    .then(data => $('#github-bio').html(`${data.bio}`))
};

getBio();

// Download pdf on button click on index
$('#resume-download').click(function(){
    window.open("./../misc/FastTrack Blank Blankski March 2024.pdf", '_blank');
});

// Redirect to projects page to show all projects
$('#projects-button').click(function(){
    window.open("./work.html", '_self');
});

