import { Project } from '../types';
import { ProjectNotFoundError } from '../errors';

function getProjectById(projects: Project[], id: number): Project {

  let returnProject = ProjectNotFoundError();

  for (let i = 0; i < projects.length; i++) {
    if (id === projects[i].id) {
      returnProject = projects[i];
    }
  }

  return returnProject;
}
export { getProjectById };
