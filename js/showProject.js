//Generate HTML from PROJECTS.js
function showProjects(PROJECTS) {
  const projectsHTML = PROJECTS.map((project) => {
    return `<div class="project">
          <h3 class="project-title">
            <a class="project-title" target="_blank" href=${project.live}>${
      project.title
    }</a>
                    </h3>
                  <div class="pic-text">
                    <div class="pic">
                       <a class="project-title" target="_blank" href=${
                         project.live
                       }><img src="${project.imageSrc}" alt="${
      project.imageAlt
    }"/></a>
                    </div>
                    <div class="project-text">
                  
                      <p class="description">${project.description}</p>
                      <div class="stack">
                        <span id="tech">Tech: </span>${project.tech.join(', ')}
                      </div>
                      <a target="_blank" class="github" href="${project.repo}">
                        <i class="fab fa-github"></i>
                        Github
                      </a> | 
                      <a target="_blank" href=${
                        project.live
                      }>View Live</a> <i class="fas fa-external-link-alt"></i>
                    </div>
                  </div>
                </div>`;
  }).join('');
  projects.innerHTML = projectsHTML;
}
showProjects(PROJECTS);
