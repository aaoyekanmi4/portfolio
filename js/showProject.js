function showProjects(PROJECTS) {
  const projectsHTML = PROJECTS.map((project, i) => {
    return `<div class="project" id=${i}>
              <div class="inner-card">
                <div class="inner-card-front">
                  <div class="pic-text">
                    <div class="pic">
                       <a class="project-title" target="_blank" href=${
                         project.live
                       }><img src="${project.imageSrc}" alt="${
      project.imageAlt
    }"/></a>
                    </div>
                    <div class="project-links">
                     <h3 class="project-title">
                        <a class="project-title" target="_blank" href=${
                          project.live
                        }>${project.title}</a>
                    </h3>
                      <a target="_blank" class="github" href="${project.repo}">
                        <i class="fab fa-github"></i>
                        Github
                      </a> |
                      <a target= "_blank"
                      class="site-link"
                      href = ${project.live}>
                      View Site
                      </a>
                      <i class="fas fa-external-link-alt"></i>
                    </div>
                    <div class="flip-btn-container">
                    <button type="button" class="flip-btn" onclick="flipCard(${i})">
                    info
                    <i class="fas fa-undo"></i>
                    </button>
                    </div>
                  </div>
                </div>
                <div class="inner-card-back">
                <p class="description">${project.description}</p>
                <div class="stack">
                  <span id="tech">Tech: </span>${project.tech.join(", ")}
                </div>
                <div class="flip-btn-container">
                    <button type="button" class="flip-btn" onclick="flipCard(${i})">
                    back
                    <i class="fas fa-undo"></i>
                    </button>
                    </div>
              </div>
            </div>
            </div>`;
  }).join("");
  projects.innerHTML = projectsHTML;
}
showProjects(PROJECTS);

function flipCard(id) {
  const currentProject = document.getElementById(id);
  currentProject.classList.toggle("revealed");
}
