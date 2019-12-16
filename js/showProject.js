
//Generate HTML from PROJECTS.js 
function showProject (PROJECTS){
   
    const htmlArray = PROJECTS.map(project =>{
        if (PROJECTS.indexOf(project) % 2 === 0){
            return `<div class="project-row">
            <div class="project description">
            <h2 class="project-title">${project.title}</h2>
            <h3>Languages/Frameworks: </h3><h3 class="languages">${project.languages}</h3>
            <p class="description-text">${project.description} </p>
            <p class="project-links"><a class="project-links" id="repo" target="_blank" href=${project.repo}>Github </a>|
            <a class="project-links" target="_blank" id ="live" href=${project.liveSite}>Live site</a></p>
            </div>
            <div class="project project-image">
            <a href=${project.liveSite} target="_blank" class="image-link"><img alt="${project.imageAlt}" src =${project.imageSrc}></a>
            </div>
            </div>`
        }
        else {
           return `<div class="project-row">
            <div class="project project-image">
            <a href=${project.liveSite} target="_blank" class="image-link"><img alt="${project.imageAlt}" src =${project.imageSrc}></a>
            </div>
            <div class="project description">
            <h2 class="project-title">${project.title}</h2>
            <h3>Languages/Frameworks: </h3><h3 class="languages">${project.languages}</h3>
            <p class="description-text">${project.description} </p>
            <p class="project-links"><a class="project-links" id="repo" target="_blank" href=${project.repo}>Github </a>|
            <a class="project-links" target="_blank" id ="live" href=${project.liveSite}>Live site</a></p>
            </div>
           
            </div>`

        }
    });
    const projectHTML = htmlArray.join('');

$('.loadProjects').append(projectHTML)
}

$(showProject(PROJECTS));

console.log(PROJECTS);