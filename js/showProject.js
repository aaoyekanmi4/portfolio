//Generate HTML from PROJECTS.js 
function showProjects (PROJECTS){
    const projectsHTML = PROJECTS.map(project =>{
        return `<div class="project">
                  <div class="pic-text">
                    <div class="pic">
                      <img src="${project.imageSrc}" alt="${project.imageAlt}"/>
                    </div>
                    <div class="project-text">
                    <h3 class="project-title">
                        <a class="project-title" target="_blank" href=${project.live}>${project.title}</a>
                    </h3>
                      <p class="description">${project.description}</p>
                      <div class="stack">
                        <span id="tech">Tech: </span>${project.tech.join(', ')}
                      </div>
                      <a class="github" href="${project.repo}">
                        <i class="fab fa-github"></i>
                        Github
                      </a>
                    </div>
                  </div>
                </div>`
    }).join('');
projects.innerHTML =projectsHTML;
}
showProjects(PROJECTS);

