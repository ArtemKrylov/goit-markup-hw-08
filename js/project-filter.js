'use strict';

const filters = document.querySelectorAll('.filters__item');
const projects = document.querySelectorAll('.projects__item');

//Filters projects on portfolio.html page
function filterProjects(projects, filters) {
  //Adds class "hidden" to all projects, that don't contain filter class
  function hideUnmatchedProjects(filter) {
    projects.forEach(project => {
      let classList = project.classList;
      if (!classList.contains(filter)) {
        classList.add('hidden');
      }
    });
  }
  //Removes class "hidden" from all projects
  function showAllProjects() {
    projects.forEach(project => {
      let classList = project.classList;
      if (classList.contains('hidden')) {
        classList.remove('hidden');
      }
    });
  }

  //Adding "click" event listener to every project element
  filters.forEach(filter => {
    filter.addEventListener('click', () => {
      if (filter.classList.contains('all-js')) {
        showAllProjects();
      } else if (filter.classList.contains('cite-js')) {
        showAllProjects();
        hideUnmatchedProjects('cite-js');
      } else if (filter.classList.contains('app-js')) {
        showAllProjects();
        hideUnmatchedProjects('app-js');
      } else if (filter.classList.contains('design-js')) {
        showAllProjects();
        hideUnmatchedProjects('design-js');
      } else if (filter.classList.contains('marketing-js')) {
        showAllProjects();
        hideUnmatchedProjects('marketing-js');
      }
    });
  });
}

filterProjects(projects, filters);
