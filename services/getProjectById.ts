import { Project } from '../types';
import { projectNotFoundError } from '../errors';

function getProjectById(projects: Project[], id: number): Project {

  let returnProject = projectNotFoundError();

  for (let i = 0; i < projects.length; i++) {
    if (id === projects[i].id) {
      returnProject = projects[i];
    }
  }

  return returnProject;
}
export { getProjectById };
